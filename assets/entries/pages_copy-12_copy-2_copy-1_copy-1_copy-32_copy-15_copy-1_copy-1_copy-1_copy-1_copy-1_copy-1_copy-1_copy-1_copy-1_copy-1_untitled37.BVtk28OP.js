import{j as e,r as l,a as o,i as n,R as u,b as m,P as f,c as b,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],B=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل صوت به متن</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;700&amp;display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #0d0d1a;
            --card: #13132b;
            --border: rgba(120, 80, 220, 0.35);
            --accent: #8b5cf6;
            --accent2: #c4b5fd;
            --gold: #fbbf24;
            --text: #e2e0f0;
            --muted: #7c6fa0;
            --success: #10b981;
            --danger: #ef4444;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Vazirmatn', sans-serif;
            background: var(--bg);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            background-image: radial-gradient(ellipse at 20% 50%, #1a0a3a 0%, transparent 60%),
                              radial-gradient(ellipse at 80% 20%, #0a1a3a 0%, transparent 60%);
        }
        .card {
            width: 100%;
            max-width: 700px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 1.75rem;
            padding: 2.2rem 2rem;
            box-shadow: 0 0 60px rgba(100, 60, 200, 0.2), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .header { text-align: center; margin-bottom: 1.8rem; }
        .header h1 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #fff;
            letter-spacing: -0.5px;
        }
        .header h1 span { color: var(--accent2); }
        .header p { color: var(--muted); font-size: 0.88rem; margin-top: 0.4rem; }

        /* مدل انتخابی */
        .model-row { display: flex; gap: 0.6rem; justify-content: center; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .model-chip {
            padding: 0.45rem 1.1rem;
            border-radius: 2rem;
            border: 1px solid var(--border);
            background: transparent;
            color: var(--muted);
            cursor: pointer;
            font-family: 'Vazirmatn', sans-serif;
            font-size: 0.85rem;
            transition: all 0.2s;
        }
        .model-chip:hover { border-color: var(--accent); color: var(--accent2); }
        .model-chip.active { background: var(--accent); border-color: var(--accent); color: #fff; font-weight: 600; }
        .model-chip .size { display: block; font-size: 0.7rem; opacity: 0.75; }

        /* آپلود */
        .upload-zone {
            border: 2px dashed var(--border);
            border-radius: 1.2rem;
            padding: 2rem 1rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.25s;
            margin-bottom: 1.2rem;
        }
        .upload-zone:hover, .upload-zone.drag { border-color: var(--accent); background: rgba(139, 92, 246, 0.07); }
        .upload-zone .icon { font-size: 2.5rem; margin-bottom: 0.6rem; }
        .upload-zone p { color: var(--accent2); font-size: 1rem; }
        .upload-zone small { color: var(--muted); font-size: 0.82rem; }
        #fileInput { display: none; }

        /* اطلاعات فایل */
        .file-badge {
            display: none;
            align-items: center;
            gap: 0.7rem;
            background: rgba(139, 92, 246, 0.12);
            border: 1px solid var(--border);
            border-radius: 1rem;
            padding: 0.8rem 1.2rem;
            margin-bottom: 1rem;
        }
        .file-badge.show { display: flex; }
        .file-badge .fname { color: var(--text); font-size: 0.95rem; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; direction: ltr; text-align: left; }
        .file-badge .fsize { color: var(--muted); font-size: 0.8rem; white-space: nowrap; }

        /* پلیر */
        #audioWrap { display: none; margin-bottom: 1rem; }
        #audioEl { width: 100%; border-radius: 2rem; }

        /* کنترل‌ها */
        .controls { display: flex; gap: 0.8rem; justify-content: center; margin-bottom: 1.2rem; flex-wrap: wrap; }
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.8rem;
            border-radius: 3rem;
            border: none;
            font-family: 'Vazirmatn', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }
        .btn:disabled { opacity: 0.35; pointer-events: none; }
        .btn-primary { background: var(--accent); color: #fff; box-shadow: 0 0 20px rgba(139,92,246,0.4); }
        .btn-primary:hover:not(:disabled) { background: #7c3aed; transform: translateY(-1px); }
        .btn-stop { background: rgba(239,68,68,0.15); color: #fca5a5; border: 1px solid rgba(239,68,68,0.4); }
        .btn-stop:hover:not(:disabled) { background: rgba(239,68,68,0.25); }
        .btn-copy { background: rgba(16,185,129,0.15); color: #6ee7b7; border: 1px solid rgba(16,185,129,0.4); }
        .btn-copy:hover:not(:disabled) { background: rgba(16,185,129,0.25); }

        /* وضعیت */
        .status-box {
            background: rgba(0,0,0,0.25);
            border: 1px solid var(--border);
            border-radius: 1rem;
            padding: 0.85rem 1.2rem;
            text-align: center;
            color: var(--accent2);
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 0.8rem;
        }

        /* پروگرس */
        .prog-wrap { background: rgba(0,0,0,0.3); border-radius: 2rem; height: 8px; overflow: hidden; margin-bottom: 1rem; display: none; }
        .prog-bar { height: 100%; width: 0%; background: linear-gradient(90deg, var(--accent), var(--gold)); border-radius: 2rem; transition: width 0.4s; }

        /* نتیجه */
        .result-wrap { margin-top: 0.5rem; }
        .result-label { color: var(--muted); font-size: 0.8rem; margin-bottom: 0.4rem; }
        .result-box {
            background: rgba(0,0,0,0.35);
            border: 1px solid var(--border);
            border-radius: 1.2rem;
            padding: 1.2rem;
            min-height: 150px;
            max-height: 360px;
            overflow-y: auto;
            color: var(--text);
            font-size: 1rem;
            line-height: 2;
            white-space: pre-wrap;
            word-break: break-word;
        }
        .result-box:empty::before { content: "نتیجه اینجا نمایش داده می‌شود..."; color: var(--muted); font-size: 0.9rem; }
        .chunk { margin-bottom: 0.2rem; }
        .ts { color: var(--muted); font-size: 0.75rem; font-family: monospace; margin-left: 0.5rem; }

        .note { margin-top: 1.2rem; padding: 0.9rem 1.1rem; background: rgba(251,191,36,0.06); border: 1px solid rgba(251,191,36,0.2); border-radius: 1rem; color: #d4b96a; font-size: 0.82rem; line-height: 1.7; }
        .note b { color: var(--gold); }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .blinking { animation: blink 1.4s infinite; }
    </style>


<div class="card">
    <div class="header">
        <h1>🎙️ تبدیل <span>صوت به متن</span></h1>
        <p>Whisper AI • پردازش محلی • بدون ارسال به سرور</p>
    </div>

    <!-- انتخاب مدل -->
    <div class="model-row">
        <button class="model-chip active" data-model="Xenova/whisper-tiny">
            Tiny <span class="size">~75MB | سریع</span>
        </button>
        <button class="model-chip" data-model="Xenova/whisper-base">
            Base <span class="size">~145MB | متعادل</span>
        </button>
        <button class="model-chip" data-model="Xenova/whisper-small">
            Small <span class="size">~460MB | دقیق</span>
        </button>
    </div>

    <!-- آپلود -->
    <div class="upload-zone" id="uploadZone">
        <div class="icon">📂</div>
        <p>کلیک کنید یا فایل را اینجا بکشید</p>
        <small>پشتیبانی از MP3، WAV، M4A، OGG، FLAC، MP4 و ...</small>
        <input type="file" id="fileInput" accept="audio/*,video/*">
    </div>

    <div class="file-badge" id="fileBadge">
        <span>🎵</span>
        <span class="fname" id="fileName">—</span>
        <span class="fsize" id="fileSize"></span>
    </div>

    <div id="audioWrap">
        <audio id="audioEl" controls=""></audio>
    </div>

    <div class="controls">
        <button class="btn btn-primary" id="startBtn" disabled="">▶ شروع تبدیل</button>
        <button class="btn btn-stop" id="stopBtn" disabled="">■ توقف</button>
        <button class="btn btn-copy" id="copyBtn" disabled="">⧉ کپی</button>
    </div>

    <div class="status-box" id="statusBox">⏳ منتظر انتخاب فایل...</div>
    <div class="prog-wrap" id="progWrap"><div class="prog-bar" id="progBar"></div></div>

    <div class="result-wrap">
        <div class="result-label" id="charCount"></div>
        <div class="result-box" id="resultBox"></div>
    </div>

    <div class="note">
        <b>بار اول:</b> مدل از اینترنت دانلود می‌شود و cache می‌شود — بار بعدی فوری است.<br>
        <b>زبان:</b> فارسی، انگلیسی، عربی و ۹۰+ زبان دیگر خودکار تشخیص داده می‌شود.<br>
        <b>فایل شما هرگز به هیچ سروری ارسال نمی‌شود.</b>
    </div>
</div>

<script type="module">
// استفاده از نسخه پایدار‌تر
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2/dist/transformers.min.js';

env.allowLocalModels = false;
env.useBrowserCache = true;

const $ = (id) => document.getElementById(id);
const uploadZone = $('uploadZone');
const fileInput  = $('fileInput');
const fileBadge  = $('fileBadge');
const fileName   = $('fileName');
const fileSize   = $('fileSize');
const audioWrap  = $('audioWrap');
const audioEl    = $('audioEl');
const startBtn   = $('startBtn');
const stopBtn    = $('stopBtn');
const copyBtn    = $('copyBtn');
const statusBox  = $('statusBox');
const progWrap   = $('progWrap');
const progBar    = $('progBar');
const resultBox  = $('resultBox');
const charCount  = $('charCount');

let selectedFile = null;
let selectedModel = 'Xenova/whisper-tiny';
let pipe = null;
let stopped = false;
let fullText = '';

// ---- انتخاب مدل ----
document.querySelectorAll('.model-chip').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.model-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedModel = btn.dataset.model;
        pipe = null; // reset مدل
    });
});

// ---- آپلود ----
uploadZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', e => loadFile(e.target.files[0]));

uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag'); });
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag'));
uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('drag');
    const f = e.dataTransfer.files[0];
    if (f) loadFile(f);
});

function loadFile(file) {
    if (!file) return;
    selectedFile = file;

    // نمایش اطلاعات فایل
    fileName.textContent = file.name;
    fileSize.textContent = formatBytes(file.size);
    fileBadge.classList.add('show');

    // پلیر
    const url = URL.createObjectURL(file);
    audioEl.src = url;
    audioWrap.style.display = 'block';

    // ریست
    resultBox.innerHTML = '';
    charCount.textContent = '';
    fullText = '';
    copyBtn.disabled = true;
    startBtn.disabled = false;
    setStatus('✅ فایل بارگذاری شد. دکمه «شروع تبدیل» را بزنید.');
}

// ---- تبدیل صوت به Float32Array در 16kHz ----
async function decodeAudio(file) {
    const arrayBuf = await file.arrayBuffer();
    const ctx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16000 });
    let decoded;
    try {
        decoded = await ctx.decodeAudioData(arrayBuf);
    } finally {
        ctx.close();
    }
    // Mono
    const numChannels = decoded.numberOfChannels;
    const len = decoded.length;
    const data = new Float32Array(len);
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let c = 0; c < numChannels; c++) sum += decoded.getChannelData(c)[i];
        data[i] = sum / numChannels;
    }
    return data;
}

// ---- شروع ----
startBtn.addEventListener('click', async () => {
    if (!selectedFile) return;
    stopped = false;
    fullText = '';
    resultBox.innerHTML = '';
    charCount.textContent = '';
    copyBtn.disabled = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    progWrap.style.display = 'block';
    setProgress(3);

    try {
        // بارگذاری مدل
        if (!pipe) {
            setStatus('⬇️ در حال دانلود مدل Whisper... صبر کنید', true);
            pipe = await pipeline('automatic-speech-recognition', selectedModel, {
                progress_callback: (info) => {
                    if (info.status === 'progress' && info.total) {
                        const pct = Math.round((info.loaded / info.total) * 85);
                        setProgress(pct);
                        setStatus(\`⬇️ دانلود: \${pct}%  (\${formatBytes(info.loaded)} از \${formatBytes(info.total)})\`);
                    } else if (info.status === 'done') {
                        setStatus('✅ مدل آماده شد');
                    }
                }
            });
        }
        if (stopped) return;

        setStatus('🔊 در حال خواندن فایل صوتی...', true);
        setProgress(88);

        const audioData = await decodeAudio(selectedFile);
        if (stopped) return;

        setStatus('🤖 Whisper در حال پردازش... (چند دقیقه ممکن است طول بکشد)', true);
        setProgress(93);

        const out = await pipe(audioData, {
            task: 'transcribe',
            language: null,
            return_timestamps: true,
            chunk_length_s: 30,
            stride_length_s: 5,
        });

        if (stopped) return;
        setProgress(100);

        // نمایش نتیجه
        if (out.chunks && out.chunks.length > 0) {
            fullText = out.chunks.map(c => c.text).join(' ').trim();
            resultBox.innerHTML = out.chunks.map(ch => {
                const ts = ch.timestamp ? \`<span class="ts">[\${fmt(ch.timestamp[0])}]</span>\` : '';
                return \`<div class="chunk">\${ts}\${escHtml(ch.text)}</div>\`;
            }).join('');
        } else {
            fullText = (out.text || '').trim();
            resultBox.textContent = fullText;
        }

        resultBox.scrollTop = resultBox.scrollHeight;

        if (fullText) {
            charCount.textContent = \`\${fullText.length} کاراکتر\`;
            copyBtn.disabled = false;
            setStatus(\`✅ تبدیل کامل انجام شد!\`);
        } else {
            setStatus('⚠️ متنی تشخیص داده نشد. صدای فایل را بررسی کنید.');
        }

    } catch (err) {
        if (!stopped) {
            console.error(err);
            setStatus(\`❌ خطا: \${err.message}\`);
        }
    } finally {
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
});

stopBtn.addEventListener('click', () => {
    stopped = true;
    pipe = null;
    stopBtn.disabled = true;
    startBtn.disabled = false;
    setStatus('⏹️ عملیات متوقف شد.');
    if (fullText) copyBtn.disabled = false;
});

copyBtn.addEventListener('click', () => {
    if (!fullText) return;
    navigator.clipboard.writeText(fullText).then(() => {
        setStatus('✅ متن در کلیپ‌بورد کپی شد!');
        setTimeout(() => setStatus('آماده...'), 2500);
    }).catch(() => {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = fullText;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        setStatus('✅ کپی شد!');
    });
});

function setStatus(msg, blink = false) {
    statusBox.innerHTML = msg;
    statusBox.classList.toggle('blinking', blink);
}

function setProgress(pct) {
    progBar.style.width = pct + '%';
}

function fmt(s) {
    if (!s && s !== 0) return '';
    const m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return \`\${m}:\${sec.toString().padStart(2,'0')}\`;
}

function formatBytes(b) {
    if (!b) return '';
    if (b < 1024*1024) return (b/1024).toFixed(0) + ' KB';
    return (b/1024/1024).toFixed(1) + ' MB';
}

function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

window.addEventListener('beforeunload', () => {
    if (audioEl.src.startsWith('blob:')) URL.revokeObjectURL(audioEl.src);
});
<\/script>


`,className:"w-html-embed"})})}),z=a=>{const{origin:t,pathname:s,search:r}=new URL(a);return`${t}${s}${r}`},k=l.memo(({pageKey:a,system:t})=>e.jsx(B,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:s,url:r,pageMeta:i}=a,c=z(r),p=l.useMemo(()=>({imageLoader:n,assetBaseUrl:o,resources:s,breakpoints:y,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:r,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(f,{url:r,pageMeta:i,siteName:d,imageLoader:n,assetBaseUrl:o}),e.jsx(b,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),j=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${o}${v}`})}),x.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},$=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-12/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-12/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:$}}};export{C as configValuesSerialized};
