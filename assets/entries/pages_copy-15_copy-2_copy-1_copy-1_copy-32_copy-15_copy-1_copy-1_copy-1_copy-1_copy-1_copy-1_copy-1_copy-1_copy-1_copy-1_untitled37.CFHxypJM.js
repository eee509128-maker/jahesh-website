import{j as e,r as i,a,i as l,R as u,b as f,P as m,c as g,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],S="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],P=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <title>تبدیل صوت به متن (Whisper)</title>
  <style>
    body { font-family: Tahoma, sans-serif; background: #1a1a2e; color: #eee; padding: 20px; }
    h2 { color: #a29bfe; }
    .card { background: #16213e; border-radius: 12px; padding: 20px; margin: 16px 0; }
    select, button { padding: 10px 18px; border-radius: 8px; border: none; cursor: pointer; font-size: 14px; }
    select { background: #0f3460; color: #eee; margin-left: 10px; }
    button { background: #6c5ce7; color: #fff; }
    button:disabled { background: #444; cursor: not-allowed; }
    #status { color: #74b9ff; margin: 10px 0; min-height: 22px; }
    #progress-bar { width: 100%; background: #0f3460; border-radius: 6px; height: 10px; margin: 8px 0; }
    #progress-fill { height: 10px; border-radius: 6px; background: #a29bfe; width: 0%; transition: width 0.3s; }
    #output { background: #0f3460; border-radius: 8px; padding: 16px; min-height: 80px; white-space: pre-wrap; line-height: 1.8; font-size: 15px; direction: auto; }
    .row { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; }
  </style>


  <h2>🎙️ تبدیل صوت به متن با Whisper</h2>

  <div class="card">
    <div class="row">
      <label>زبان:</label>
      <select id="lang">
        <option value="fa">فارسی</option>
        <option value="en">انگلیسی</option>
        <option value="auto">خودکار</option>
      </select>

      <label>مدل:</label>
      <select id="model">
        <option value="Xenova/whisper-base">Base (پیشنهادی)</option>
        <option value="Xenova/whisper-small">Small (دقیق‌تر، کندتر)</option>
        <option value="Xenova/whisper-tiny">Tiny (سریع، ضعیف‌تر)</option>
      </select>
    </div>

    <div class="row">
      <input type="file" id="audio-file" accept="audio/*">
      <button id="start-btn" disabled="">شروع تبدیل</button>
      <button id="copy-btn" onclick="copyText()">📋 کپی</button>
    </div>

    <div id="status">در حال بارگذاری مدل...</div>
    <div id="progress-bar"><div id="progress-fill"></div></div>
    <div id="output">متن اینجا نمایش داده می‌شود...</div>
  </div>

  <script type="module">
    import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2/dist/transformers.min.js';

    env.allowLocalModels = false;

    const statusEl = document.getElementById('status');
    const progressFill = document.getElementById('progress-fill');
    const outputEl = document.getElementById('output');
    const startBtn = document.getElementById('start-btn');
    const fileInput = document.getElementById('audio-file');
    const langSel = document.getElementById('lang');
    const modelSel = document.getElementById('model');

    let pipe = null;
    let currentModel = null;

    function setStatus(msg) { statusEl.textContent = msg; }
    function setProgress(pct) { progressFill.style.width = pct + '%'; }

    async function loadModel() {
      const modelName = modelSel.value;
      if (pipe && currentModel === modelName) return;

      pipe = null;
      currentModel = null;
      startBtn.disabled = true;
      setStatus(\`⏳ در حال بارگذاری مدل \${modelName}...\`);
      setProgress(0);

      try {
        pipe = await pipeline('automatic-speech-recognition', modelName, {
          progress_callback: (p) => {
            if (p.status === 'progress' && p.total) {
              const pct = Math.round((p.loaded / p.total) * 100);
              setProgress(pct);
              setStatus(\`📥 دانلود مدل: \${pct}%\`);
            }
          }
        });
        currentModel = modelName;
        setProgress(100);
        setStatus('✅ مدل آماده است. فایل صوتی انتخاب کنید.');
        startBtn.disabled = !fileInput.files.length;
      } catch (e) {
        setStatus('❌ خطا در بارگذاری مدل: ' + e.message);
        console.error(e);
      }
    }

    modelSel.addEventListener('change', loadModel);
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length && pipe) startBtn.disabled = false;
    });

    loadModel();

    // ---- حذف تداخل متنی بین chunks ----
    function dedup(prev, next) {
      if (!prev) return next;
      // پیدا کردن طولانی‌ترین پسوند prev که پیشوند next است
      const maxCheck = Math.min(prev.length, next.length, 80);
      for (let len = maxCheck; len > 10; len--) {
        const tail = prev.slice(-len);
        if (next.startsWith(tail)) {
          return next.slice(len);
        }
      }
      return next;
    }

    startBtn.addEventListener('click', async () => {
      const file = fileInput.files[0];
      if (!file || !pipe) return;

      startBtn.disabled = true;
      outputEl.textContent = '';
      setProgress(0);
      setStatus('🔊 در حال خواندن فایل صوتی...');

      try {
        // ---- دیکد فایل صوتی ----
        const arrayBuffer = await file.arrayBuffer();
        const audioCtx = new AudioContext({ sampleRate: 16000 });
        const decoded = await audioCtx.decodeAudioData(arrayBuffer);

        // تبدیل به mono float32
        const rawData = decoded.getChannelData(0);
        const totalSamples = rawData.length;
        const sampleRate = decoded.sampleRate; // باید 16000 باشد چون ما set کردیم
        const totalDuration = totalSamples / sampleRate;

        setStatus(\`⏱️ طول فایل: \${totalDuration.toFixed(1)} ثانیه — شروع پردازش...\`);

        const CHUNK_SEC = 28;       // اندازه هر chunk
        const OVERLAP_SEC = 2;      // همپوشانی
        const CHUNK_SAMPLES = CHUNK_SEC * sampleRate;
        const OVERLAP_SAMPLES = OVERLAP_SEC * sampleRate;

        let fullText = '';
        let prevChunkText = '';
        let chunkIndex = 0;
        let offset = 0;            // به تعداد sample

        while (offset < totalSamples) {
          const end = Math.min(offset + CHUNK_SAMPLES, totalSamples);
          const chunkData = rawData.slice(offset, end);

          chunkIndex++;
          const chunkStart = (offset / sampleRate).toFixed(1);
          const chunkEnd = (end / sampleRate).toFixed(1);
          const totalChunks = Math.ceil(totalSamples / (CHUNK_SAMPLES - OVERLAP_SAMPLES));
          const progressPct = Math.round((chunkIndex / totalChunks) * 100);

          setStatus(\`🧩 پردازش تکه \${chunkIndex}/\${totalChunks} — [\${chunkStart}s - \${chunkEnd}s]\`);
          setProgress(progressPct);

          // انتخاب زبان
          const langVal = langSel.value;
          const pipeOptions = {
            sampling_rate: sampleRate,
            chunk_length_s: CHUNK_SEC,
            stride_length_s: 0,
          };
          if (langVal !== 'auto') {
            pipeOptions.language = langVal;
            pipeOptions.task = 'transcribe';
          }

          let result;
          try {
            result = await pipe(chunkData, pipeOptions);
          } catch (chunkErr) {
            console.warn(\`خطا در تکه \${chunkIndex}:\`, chunkErr);
            // رد شدن از این chunk و ادامه
            const nextOffset = offset + CHUNK_SAMPLES - OVERLAP_SAMPLES;
            offset = Math.max(nextOffset, offset + 1600); // حداقل 0.1 ثانیه پیش برود
            continue;
          }

          const chunkText = (result.text || '').trim();

          if (chunkText) {
            const uniquePart = dedup(prevChunkText, chunkText);
            if (uniquePart) {
              fullText += (fullText ? ' ' : '') + uniquePart;
              outputEl.textContent = fullText;
            }
            prevChunkText = chunkText;
          }

          // ---- رفع Infinite Loop: offset حتما پیش می‌رود ----
          const nextOffset = offset + CHUNK_SAMPLES - OVERLAP_SAMPLES;
          offset = Math.max(nextOffset, offset + 1600);

          // اگر آخرین تکه پردازش شد، خارج شو
          if (end >= totalSamples) break;
        }

        if (!fullText) {
          outputEl.textContent = '⚠️ متنی تشخیص داده نشد.';
        }
        setStatus(\`✅ تبدیل کامل شد — \${chunkIndex} تکه پردازش شد.\`);
        setProgress(100);

      } catch (err) {
        setStatus('❌ خطا: ' + err.message);
        console.error(err);
      }

      startBtn.disabled = false;
    });

    window.copyText = function() {
      const text = outputEl.textContent;
      if (text && text !== 'متن اینجا نمایش داده می‌شود...') {
        navigator.clipboard.writeText(text).then(() => alert('✅ کپی شد!'));
      }
    };
  <\/script>


`,className:"w-html-embed"})})}),E=o=>{const{origin:t,pathname:s,search:n}=new URL(o);return`${t}${s}${n}`},k=i.memo(({pageKey:o,system:t})=>e.jsx(P,{system:t},o),(o,t)=>o.pageKey===t.pageKey),w=({data:o})=>{const{system:t,resources:s,url:n,pageMeta:r}=o,c=E(n),d=i.useMemo(()=>({imageLoader:l,assetBaseUrl:a,resources:s,breakpoints:y,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:d,children:[e.jsx(f.Provider,{value:n,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(m,{url:n,pageMeta:r,siteName:p,imageLoader:l,assetBaseUrl:a}),e.jsx(g,{children:r.title})]})},_=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),C=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:l({src:`${a}${S}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:C},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-15/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-15/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{R as configValuesSerialized};
