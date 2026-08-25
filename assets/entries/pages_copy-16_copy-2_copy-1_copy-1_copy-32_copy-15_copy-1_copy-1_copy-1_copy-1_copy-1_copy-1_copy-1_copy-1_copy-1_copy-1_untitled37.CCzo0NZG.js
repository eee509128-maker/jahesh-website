import{j as e,r as i,a as s,i as n,R as u,b as m,P as g,c as f,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],S=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <title>تبدیل صوت به متن</title>
  <style>
    body { font-family: Tahoma, sans-serif; background: #1a1a2e; color: #eee; padding: 20px; max-width: 800px; margin: auto; }
    h2 { color: #a29bfe; }
    .card { background: #16213e; border-radius: 12px; padding: 20px; margin: 16px 0; }
    select, button { padding: 10px 18px; border-radius: 8px; border: none; cursor: pointer; font-size: 14px; margin: 5px; }
    select { background: #0f3460; color: #eee; }
    button { background: #6c5ce7; color: #fff; }
    button:disabled { background: #444; cursor: not-allowed; }
    #status { color: #74b9ff; margin: 10px 0; }
    #progress-bar { width: 100%; background: #0f3460; border-radius: 6px; height: 12px; margin: 8px 0; }
    #progress-fill { height: 12px; border-radius: 6px; background: linear-gradient(90deg, #6c5ce7, #a29bfe); width: 0%; transition: width 0.4s; }
    #output { background: #0f3460; border-radius: 8px; padding: 16px; min-height: 100px; white-space: pre-wrap; line-height: 2; font-size: 15px; direction: auto; }
    .row { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
    input[type=file] { color: #eee; }
  </style>


  <h2>🎙️ تبدیل صوت به متن (بدون قفل شدن)</h2>

  <div class="card">
    <div class="row">
      <label>زبان:</label>
      <select id="lang">
        <option value="fa">فارسی</option>
        <option value="en">انگلیسی</option>
        <option value="null">خودکار</option>
      </select>

      <label>مدل:</label>
      <select id="model">
        <option value="Xenova/whisper-base">Base (پیشنهادی)</option>
        <option value="Xenova/whisper-tiny">Tiny (سریع‌تر)</option>
        <option value="Xenova/whisper-small">Small (دقیق‌تر)</option>
      </select>
    </div>

    <div class="row">
      <input type="file" id="audio-file" accept="audio/*">
      <button id="start-btn">🚀 شروع تبدیل</button>
      <button onclick="copyText()">📋 کپی متن</button>
    </div>

    <div id="status">فایل صوتی انتخاب کنید و دکمه را بزنید.</div>
    <div id="progress-bar"><div id="progress-fill"></div></div>
    <div id="output">متن اینجا نمایش داده می‌شود...</div>
  </div>

  <script>
    const statusEl = document.getElementById('status');
    const progressFill = document.getElementById('progress-fill');
    const outputEl = document.getElementById('output');
    const startBtn = document.getElementById('start-btn');

    let worker = null;

    function buildWorkerCode() {
      return \`
        import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2/dist/transformers.min.js';
        env.allowLocalModels = false;

        let pipe = null;
        let loadedModel = null;

        async function loadModel(modelName) {
          if (pipe && loadedModel === modelName) return;
          pipe = null;
          self.postMessage({ type: 'status', text: 'در حال بارگذاری مدل...' });

          pipe = await pipeline('automatic-speech-recognition', modelName, {
            progress_callback: (p) => {
              if (p.status === 'progress' && p.total) {
                const pct = Math.round((p.loaded / p.total) * 100);
                self.postMessage({ type: 'progress', value: pct, text: 'دانلود مدل: ' + pct + '%' });
              }
            }
          });
          loadedModel = modelName;
          self.postMessage({ type: 'status', text: 'مدل آماده — شروع پردازش...' });
        }

        self.onmessage = async (e) => {
          const { audioData, sampleRate, modelName, language } = e.data;

          try {
            await loadModel(modelName);

            const totalSamples = audioData.length;
            const totalDuration = totalSamples / sampleRate;
            const CHUNK_SEC = 28;
            const OVERLAP_SEC = 2;
            const CHUNK_SAMPLES = CHUNK_SEC * sampleRate;
            const STEP_SAMPLES = (CHUNK_SEC - OVERLAP_SEC) * sampleRate;

            const totalChunks = Math.ceil(totalSamples / STEP_SAMPLES);
            let fullText = '';
            let chunkIdx = 0;
            let offset = 0;

            while (offset < totalSamples) {
              const end = Math.min(offset + CHUNK_SAMPLES, totalSamples);
              const chunk = audioData.slice(offset, end);
              chunkIdx++;

              const pct = Math.round((chunkIdx / totalChunks) * 100);
              self.postMessage({
                type: 'progress',
                value: pct,
                text: 'پردازش تکه ' + chunkIdx + ' از ' + totalChunks + ' — ' + (offset/sampleRate).toFixed(1) + 's'
              });

              const opts = { sampling_rate: sampleRate };
              if (language && language !== 'null') {
                opts.language = language;
                opts.task = 'transcribe';
              }

              const result = await pipe(chunk, opts);
              const text = (result.text || '').trim();

              if (text) {
                fullText += (fullText ? ' ' : '') + text;
                self.postMessage({ type: 'partial', text: fullText });
              }

              if (end >= totalSamples) break;
              offset += STEP_SAMPLES;
            }

            self.postMessage({ type: 'done', text: fullText, chunks: chunkIdx });

          } catch (err) {
            self.postMessage({ type: 'error', text: err.message });
          }
        };
      \`;
    }

    function startWorker() {
      if (worker) worker.terminate();
      const blob = new Blob([buildWorkerCode()], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);
      worker = new Worker(url, { type: 'module' });

      worker.onmessage = (e) => {
        const msg = e.data;
        if (msg.type === 'status') {
          statusEl.textContent = '⏳ ' + msg.text;
        } else if (msg.type === 'progress') {
          progressFill.style.width = msg.value + '%';
          statusEl.textContent = '🔄 ' + msg.text;
        } else if (msg.type === 'partial') {
          outputEl.textContent = msg.text;
        } else if (msg.type === 'done') {
          statusEl.textContent = '✅ تبدیل کامل شد — ' + msg.chunks + ' تکه پردازش شد.';
          progressFill.style.width = '100%';
          if (!msg.text) outputEl.textContent = '⚠️ متنی تشخیص داده نشد.';
          startBtn.disabled = false;
        } else if (msg.type === 'error') {
          statusEl.textContent = '❌ خطا: ' + msg.text;
          startBtn.disabled = false;
        }
      };

      return worker;
    }

    startBtn.addEventListener('click', async () => {
      const file = document.getElementById('audio-file').files[0];
      if (!file) { alert('لطفاً یک فایل صوتی انتخاب کنید.'); return; }

      startBtn.disabled = true;
      outputEl.textContent = '';
      progressFill.style.width = '0%';
      statusEl.textContent = '🔊 در حال خواندن فایل...';

      try {
        const arrayBuffer = await file.arrayBuffer();
        const audioCtx = new AudioContext({ sampleRate: 16000 });
        const decoded = await audioCtx.decodeAudioData(arrayBuffer);
        const audioData = decoded.getChannelData(0);

        const w = startWorker();
        w.postMessage({
          audioData: audioData,
          sampleRate: decoded.sampleRate,
          modelName: document.getElementById('model').value,
          language: document.getElementById('lang').value
        }, [audioData.buffer]);

      } catch (err) {
        statusEl.textContent = '❌ خطا در خواندن فایل: ' + err.message;
        startBtn.disabled = false;
      }
    });

    window.copyText = () => {
      const t = outputEl.textContent;
      if (t && t !== 'متن اینجا نمایش داده می‌شود...') {
        navigator.clipboard.writeText(t).then(() => alert('✅ کپی شد!'));
      }
    };
  <\/script>


`,className:"w-html-embed"})})}),E=o=>{const{origin:t,pathname:l,search:a}=new URL(o);return`${t}${l}${a}`},k=i.memo(({pageKey:o,system:t})=>e.jsx(S,{system:t},o),(o,t)=>o.pageKey===t.pageKey),C=({data:o})=>{const{system:t,resources:l,url:a,pageMeta:r}=o,d=E(a),c=i.useMemo(()=>({imageLoader:n,assetBaseUrl:s,resources:l,breakpoints:h,onError:console.error}),[l]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:a,children:e.jsx(k,{pageKey:d,system:t})}),e.jsx(g,{url:a,pageMeta:r,siteName:p,imageLoader:n,assetBaseUrl:s}),e.jsx(f,{children:r.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),j=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${s}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-16/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-16/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{B as configValuesSerialized};
