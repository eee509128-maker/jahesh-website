import{j as e,r as l,a,i,R as u,b as m,P as f,c as g,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],B=r=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل صوت به متن - Whisper</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;700&amp;display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Vazirmatn', sans-serif; }
        body {
            min-height: 100vh;
            background: linear-gradient(145deg, #0a0f2a, #1a1a3a);
            display: flex; align-items: center; justify-content: center; padding: 1rem;
        }
        .card {
            max-width: 720px; width: 100%;
            background: rgba(20, 15, 40, 0.95);
            border-radius: 2rem; padding: 2rem;
            border: 1px solid rgba(180, 130, 255, 0.3);
            box-shadow: 0 0 50px rgba(150, 100, 255, 0.3);
        }
        h1 { color: #fff; text-align: center; font-size: 2rem; text-shadow: 0 0 15px #b77dff; margin-bottom: 0.3rem; }
        .subtitle { color: #c4b0ff; text-align: center; padding-bottom: 1rem; margin-bottom: 1.5rem; border-bottom: 1px dashed #ffffff30; font-size: 0.95rem; }
        .upload-area { display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .upload-label {
            background: linear-gradient(145deg, #2d1f4a, #1f1538);
            border: 2px solid #b07cff; border-radius: 4rem;
            padding: 1rem 2.5rem; font-size: 1.2rem; font-weight: 600; color: white;
            cursor: pointer; display: inline-flex; align-items: center; gap: 12px;
            box-shadow: 0 0 25px #b07cff40; transition: 0.2s;
        }
        .upload-label:hover { transform: scale(1.04); background: #3d2b63; }
        #fileInput { display: none; }
        .file-info { color: #ddccff; background: #00000040; border-radius: 2rem; padding: 0.7rem 1.5rem; border: 1px solid #a57cff; width: 100%; text-align: center; font-size: 0.95rem; }
        .audio-player { width: 100%; margin: 0.5rem 0 1rem; display: none; }
        .audio-player audio { width: 100%; border-radius: 2rem; }

        /* مدل سلکتور */
        .model-selector { display: flex; gap: 0.7rem; justify-content: center; margin-bottom: 1.2rem; flex-wrap: wrap; }
        .model-btn {
            background: #1e1538; border: 2px solid #6a4caf; border-radius: 2rem;
            padding: 0.4rem 1.2rem; color: #c4b0ff; cursor: pointer; transition: 0.2s; font-size: 0.9rem;
        }
        .model-btn.active { background: #5d3a9c; border-color: #ffd966; color: #fff; box-shadow: 0 0 15px #b77dff50; }
        .model-btn small { display: block; font-size: 0.7rem; color: #a090cc; }
        .model-btn.active small { color: #ffd966; }

        .controls { display: flex; gap: 1rem; justify-content: center; margin: 1.2rem 0; flex-wrap: wrap; }
        .btn {
            background: #5d3a9c; border: 1px solid #c08aff; border-radius: 3rem;
            padding: 0.9rem 2rem; font-size: 1.1rem; font-weight: 600; color: white;
            cursor: pointer; display: inline-flex; align-items: center; gap: 10px;
            box-shadow: 0 0 15px #b266ff50; transition: 0.2s;
        }
        .btn:disabled { opacity: 0.4; pointer-events: none; }
        .btn:hover:not(:disabled) { transform: scale(1.04); background: #764fc0; }
        .btn-success { background: #1e6e45; border-color: #2ecc71; box-shadow: 0 0 15px #2ecc7140; }
        .btn-danger { background: #7a1c1c; border-color: #e74c3c; box-shadow: 0 0 15px #e74c3c40; }

        .status {
            color: #cbbaf0; margin: 0.8rem 0; padding: 0.9rem 1.2rem;
            background: #1a122e60; border-radius: 1.5rem; text-align: center;
            border: 1px solid #a06eff; font-size: 0.95rem; line-height: 1.6;
        }
        .progress-wrap { background: #1a0f30; border-radius: 2rem; height: 12px; margin: 0.5rem 0; overflow: hidden; display: none; }
        .progress-bar { height: 100%; background: linear-gradient(90deg, #7d3cff, #ffd966); border-radius: 2rem; transition: width 0.3s; width: 0%; }

        .result-box {
            background: #080615; border-radius: 1.5rem; padding: 1.5rem;
            min-height: 160px; max-height: 380px; overflow-y: auto;
            border: 1px solid #b07aff; color: #e8e0ff; font-size: 1.05rem;
            line-height: 2; white-space: pre-wrap; word-break: break-word; margin-top: 1rem;
            direction: rtl; text-align: right;
        }
        .result-box:empty::before { content: "🎤 نتیجه اینجا نمایش داده می‌شود..."; color: #6a5a8a; }
        .segment { margin-bottom: 0.3rem; }
        .segment-time { color: #7d6aaa; font-size: 0.8rem; margin-left: 0.5rem; }

        .note { background: #1e1538; border-radius: 1.5rem; padding: 1rem 1.2rem; margin-top: 1.2rem; color: #c4b0ff; font-size: 0.85rem; border: 1px solid #7d5ccc; line-height: 1.7; }
        .note strong { color: #ffd966; }

        /* لودینگ انیمیشن */
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .loading { animation: pulse 1.5s infinite; }
    </style>


<div class="card">
    <h1>🎙️ تبدیل صوت به متن</h1>
    <div class="subtitle">Whisper AI • کاملاً رایگان • بدون ارسال فایل به سرور • متن کامل</div>

    <!-- انتخاب مدل -->
    <div class="model-selector">
        <div class="model-btn active" data-model="Xenova/whisper-tiny">
            Tiny
            <small>~75MB | سریع‌تر</small>
        </div>
        <div class="model-btn" data-model="Xenova/whisper-base">
            Base
            <small>~145MB | متعادل</small>
        </div>
        <div class="model-btn" data-model="Xenova/whisper-small">
            Small
            <small>~460MB | دقیق‌تر</small>
        </div>
    </div>

    <!-- آپلود -->
    <div class="upload-area">
        <label for="fileInput" class="upload-label">
            ☁️ انتخاب فایل صوتی
        </label>
        <input type="file" id="fileInput" accept="audio/*,video/*">
        <div class="file-info" id="fileInfo">هیچ فایلی انتخاب نشده</div>
    </div>

    <div class="audio-player" id="audioPlayer">
        <audio id="audio" controls="" controlslist="nodownload"></audio>
    </div>

    <div class="controls">
        <button class="btn" id="transcribeBtn" disabled="">▶ شروع تبدیل</button>
        <button class="btn btn-danger" id="stopBtn" disabled="">■ توقف</button>
        <button class="btn btn-success" id="copyBtn" disabled="">⧉ کپی متن</button>
    </div>

    <div class="status" id="status">⏳ منتظر انتخاب فایل...</div>
    <div class="progress-wrap" id="progressWrap">
        <div class="progress-bar" id="progressBar"></div>
    </div>

    <div class="result-box" id="result"></div>

    <div class="note">
        <strong>نحوه کار:</strong> مدل Whisper مستقیماً در مرورگر شما اجرا می‌شود. فایل صوتی هرگز به هیچ سروری ارسال نمی‌شود.<br>
        <strong>بار اول:</strong> مدل دانلود و cache می‌شود (بار بعدی فوری است).<br>
        <strong>پشتیبانی زبان:</strong> فارسی، انگلیسی، عربی و ۹۰+ زبان دیگر به صورت خودکار تشخیص داده می‌شود.
    </div>
</div>

<script type="module">
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.1.2';

// غیرفعال کردن local models
env.allowLocalModels = false;

const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const audioPlayer = document.getElementById('audioPlayer');
const audio = document.getElementById('audio');
const transcribeBtn = document.getElementById('transcribeBtn');
const stopBtn = document.getElementById('stopBtn');
const copyBtn = document.getElementById('copyBtn');
const statusDiv = document.getElementById('status');
const resultDiv = document.getElementById('result');
const progressWrap = document.getElementById('progressWrap');
const progressBar = document.getElementById('progressBar');

let selectedFile = null;
let transcriber = null;
let selectedModel = 'Xenova/whisper-tiny';
let isStopped = false;
let fullText = '';

// انتخاب مدل
document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedModel = btn.dataset.model;
        transcriber = null; // reset تا مدل جدید لود بشه
    });
});

// انتخاب فایل
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    selectedFile = file;
    const url = URL.createObjectURL(file);
    audio.src = url;
    audioPlayer.style.display = 'block';
    const size = (file.size / (1024 * 1024)).toFixed(2);
    fileInfo.textContent = \`📁 \${file.name} (\${size} MB)\`;
    transcribeBtn.disabled = false;
    fullText = '';
    resultDiv.innerHTML = '';
    copyBtn.disabled = true;
    statusDiv.textContent = '✅ فایل آماده است. دکمه شروع را بزنید.';
});

// تابع خواندن فایل به AudioBuffer و تبدیل به Float32Array
async function fileToFloat32Array(file) {
    const arrayBuffer = await file.arrayBuffer();
    const audioCtx = new AudioContext({ sampleRate: 16000 });
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    await audioCtx.close();
    // فقط کانال اول - تبدیل به 16kHz mono
    return audioBuffer.getChannelData(0);
}

// شروع تبدیل
transcribeBtn.addEventListener('click', async () => {
    if (!selectedFile) return;
    isStopped = false;
    fullText = '';
    resultDiv.innerHTML = '';
    copyBtn.disabled = true;
    transcribeBtn.disabled = true;
    stopBtn.disabled = false;
    progressWrap.style.display = 'block';
    progressBar.style.width = '5%';

    try {
        // لود مدل (اگه قبلاً لود نشده)
        if (!transcriber) {
            statusDiv.innerHTML = '⬇️ <span class="loading">در حال دانلود مدل Whisper... (فقط بار اول)</span>';
            transcriber = await pipeline(
                'automatic-speech-recognition',
                selectedModel,
                {
                    progress_callback: (p) => {
                        if (p.status === 'downloading') {
                            const pct = p.total ? Math.round((p.loaded / p.total) * 100) : 0;
                            progressBar.style.width = pct + '%';
                            statusDiv.innerHTML = \`⬇️ دانلود مدل: \${pct}% (\${(p.loaded/1024/1024).toFixed(1)}MB از \${(p.total/1024/1024).toFixed(1)}MB)\`;
                        }
                    }
                }
            );
        }

        if (isStopped) return;

        statusDiv.innerHTML = '🔊 در حال پردازش فایل صوتی...';
        progressBar.style.width = '30%';

        // تبدیل فایل به آرایه صوتی
        const audioData = await fileToFloat32Array(selectedFile);

        if (isStopped) return;

        progressBar.style.width = '50%';
        statusDiv.innerHTML = '🤖 <span class="loading">Whisper در حال تشخیص متن... (ممکن است چند دقیقه طول بکشد)</span>';

        // اجرای Whisper
        const result = await transcriber(audioData, {
            language: null,          // تشخیص خودکار زبان
            task: 'transcribe',
            return_timestamps: true,  // برگرداندن زمان‌بندی
            chunk_length_s: 30,       // پردازش به تکه‌های ۳۰ ثانیه‌ای
            stride_length_s: 5,       // همپوشانی ۵ ثانیه برای پیوستگی
        });

        if (isStopped) return;

        progressBar.style.width = '100%';

        // نمایش نتیجه
        if (result.chunks && result.chunks.length > 0) {
            fullText = result.chunks.map(c => c.text).join(' ').trim();
            resultDiv.innerHTML = result.chunks.map(chunk => {
                const t = chunk.timestamp;
                const timeStr = t ? \`[\${formatTime(t[0])}]\` : '';
                return \`<div class="segment"><span class="segment-time">\${timeStr}</span>\${chunk.text}</div>\`;
            }).join('');
        } else {
            fullText = result.text ? result.text.trim() : '';
            resultDiv.textContent = fullText;
        }

        resultDiv.scrollTop = resultDiv.scrollHeight;

        if (fullText) {
            statusDiv.innerHTML = \`✅ تبدیل کامل شد! (\${fullText.length} کاراکتر)\`;
            copyBtn.disabled = false;
        } else {
            statusDiv.innerHTML = '⚠️ متنی تشخیص داده نشد.';
        }

    } catch (err) {
        if (!isStopped) {
            console.error(err);
            statusDiv.innerHTML = \`❌ خطا: \${err.message}\`;
        }
    } finally {
        transcribeBtn.disabled = false;
        stopBtn.disabled = true;
    }
});

// توقف
stopBtn.addEventListener('click', () => {
    isStopped = true;
    stopBtn.disabled = true;
    transcribeBtn.disabled = false;
    statusDiv.innerHTML = '⏹️ توقف داده شد.';
    if (fullText) copyBtn.disabled = false;
});

// کپی
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(fullText).then(() => {
        statusDiv.innerHTML = '✅ متن کپی شد!';
        setTimeout(() => { statusDiv.innerHTML = '⏳ آماده...'; }, 2000);
    });
});

// فرمت زمان
function formatTime(seconds) {
    if (!seconds && seconds !== 0) return '';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return \`\${m}:\${s.toString().padStart(2, '0')}\`;
}

window.addEventListener('beforeunload', () => {
    if (audio.src) URL.revokeObjectURL(audio.src);
});
<\/script>


`,className:"w-html-embed"})})}),T=r=>{const{origin:t,pathname:s,search:o}=new URL(r);return`${t}${s}${o}`},k=l.memo(({pageKey:r,system:t})=>e.jsx(B,{system:t},r),(r,t)=>r.pageKey===t.pageKey),S=({data:r})=>{const{system:t,resources:s,url:o,pageMeta:n}=r,c=T(o),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:a,resources:s,breakpoints:h,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:o,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(f,{url:o,pageMeta:n,siteName:d,imageLoader:i,assetBaseUrl:a}),e.jsx(g,{children:n.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),j=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${a}${x}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-11/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-11/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{P as configValuesSerialized};
