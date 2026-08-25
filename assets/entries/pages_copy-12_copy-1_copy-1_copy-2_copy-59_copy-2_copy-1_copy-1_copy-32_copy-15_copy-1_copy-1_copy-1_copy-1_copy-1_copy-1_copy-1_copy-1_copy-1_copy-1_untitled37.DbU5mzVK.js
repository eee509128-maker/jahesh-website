import{j as e,r as l,a,i,R as u,b as m,P as b,c as g,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],B=o=>e.jsx("body",{className:"w-element",children:e.jsx(x,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تبدیل صدا به متن</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Segoe UI', Tahoma, sans-serif;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: #eee;
    }

    .container {
      background: rgba(255,255,255,0.07);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 20px;
      padding: 36px 32px;
      width: 100%;
      max-width: 620px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }

    h1 {
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 6px;
      color: #a78bfa;
    }

    .subtitle {
      text-align: center;
      font-size: 0.85rem;
      color: #aaa;
      margin-bottom: 28px;
    }

    .upload-area {
      border: 2px dashed rgba(167, 139, 250, 0.5);
      border-radius: 14px;
      padding: 36px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
      background: rgba(167,139,250,0.05);
      position: relative;
    }

    .upload-area:hover, .upload-area.drag-over {
      border-color: #a78bfa;
      background: rgba(167,139,250,0.12);
      transform: translateY(-2px);
    }

    .upload-area input[type="file"] {
      position: absolute;
      inset: 0;
      opacity: 0;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }

    .upload-icon { font-size: 3rem; margin-bottom: 10px; display: block; }

    .upload-area p {
      font-size: 0.95rem;
      color: #ccc;
      line-height: 1.6;
    }

    .upload-area .formats {
      font-size: 0.75rem;
      color: #888;
      margin-top: 8px;
    }

    .file-info {
      display: none;
      margin-top: 16px;
      background: rgba(167,139,250,0.12);
      border-radius: 10px;
      padding: 12px 16px;
      font-size: 0.88rem;
      color: #c4b5fd;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .file-info.hidden { display: none !important; }

    .file-info .file-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .btn {
      width: 100%;
      margin-top: 20px;
      padding: 14px;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      background: linear-gradient(135deg, #7c3aed, #a78bfa);
      color: #fff;
      transition: all 0.3s;
      letter-spacing: 0.03em;
    }

    .btn:hover:not(:disabled) {
      background: linear-gradient(135deg, #6d28d9, #8b5cf6);
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(124, 58, 237, 0.4);
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .loader {
      display: none;
      text-align: center;
      margin-top: 20px;
    }

    .loader.visible { display: block; }

    .spinner {
      width: 44px;
      height: 44px;
      border: 4px solid rgba(167,139,250,0.2);
      border-top-color: #a78bfa;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 10px;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .loader p { font-size: 0.9rem; color: #aaa; }

    .result-box {
      display: none;
      margin-top: 24px;
    }

    .result-box.visible { display: block; }

    .result-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .result-header span {
      font-size: 0.9rem;
      color: #a78bfa;
      font-weight: bold;
    }

    .copy-btn {
      background: rgba(167,139,250,0.2);
      border: 1px solid rgba(167,139,250,0.4);
      color: #c4b5fd;
      border-radius: 8px;
      padding: 5px 12px;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .copy-btn:hover {
      background: rgba(167,139,250,0.35);
    }

    .result-text {
      background: rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 18px;
      font-size: 0.95rem;
      line-height: 1.8;
      color: #e5e7eb;
      min-height: 100px;
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 320px;
      overflow-y: auto;
    }

    .result-text::-webkit-scrollbar { width: 6px; }
    .result-text::-webkit-scrollbar-track { background: transparent; }
    .result-text::-webkit-scrollbar-thumb { background: #555; border-radius: 3px; }

    .error-box {
      display: none;
      margin-top: 16px;
      background: rgba(239,68,68,0.12);
      border: 1px solid rgba(239,68,68,0.3);
      border-radius: 10px;
      padding: 12px 16px;
      font-size: 0.87rem;
      color: #fca5a5;
    }

    .error-box.visible { display: block; }

    .lang-select {
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .lang-select label {
      font-size: 0.87rem;
      color: #bbb;
      white-space: nowrap;
    }

    .lang-select select {
      flex: 1;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      color: #eee;
      padding: 7px 10px;
      font-size: 0.87rem;
      cursor: pointer;
    }

    .lang-select select:focus { outline: none; border-color: #a78bfa; }
    .lang-select select option { background: #302b63; color: #eee; }

    audio {
      width: 100%;
      margin-top: 14px;
      border-radius: 10px;
      filter: invert(1) hue-rotate(180deg);
      opacity: 0.85;
    }
  </style>


<div class="container">
  <h1>🎙️ تبدیل صدا به متن</h1>
  <p class="subtitle">با استفاده از Whisper AI · پشتیبانی از فارسی و سایر زبان‌ها</p>

  <div class="upload-area" id="uploadArea">
    <input type="file" id="fileInput" accept="audio/*,video/mp4,video/webm">
    <span class="upload-icon">🎵</span>
    <p>فایل صوتی را اینجا بکشید یا کلیک کنید</p>
    <p class="formats">MP3 · WAV · M4A · OGG · FLAC · WEBM · MP4</p>
  </div>

  <div class="file-info hidden" id="fileInfo">
    <span>🎧</span>
    <span class="file-name" id="fileName"></span>
    <span id="fileSize" style="color:#888; font-size:0.78rem;"></span>
  </div>

  <audio id="audioPlayer" controls="" style="display:none;"></audio>

  <div class="lang-select">
    <label>زبان:</label>
    <select id="langSelect">
      <option value="">🌐 تشخیص خودکار</option>
      <option value="fa">🇮🇷 فارسی</option>
      <option value="en">🇺🇸 انگلیسی</option>
      <option value="ar">🇸🇦 عربی</option>
      <option value="fr">🇫🇷 فرانسوی</option>
      <option value="de">🇩🇪 آلمانی</option>
      <option value="es">🇪🇸 اسپانیایی</option>
      <option value="tr">🇹🇷 ترکی</option>
      <option value="zh">🇨🇳 چینی</option>
      <option value="ru">🇷🇺 روسی</option>
    </select>
  </div>

  <button class="btn" id="transcribeBtn" disabled="">🔍 شروع تبدیل به متن</button>

  <div class="loader" id="loader">
    <div class="spinner"></div>
    <p>در حال پردازش فایل صوتی... لطفاً صبر کنید ⏳</p>
  </div>

  <div class="error-box" id="errorBox"></div>

  <div class="result-box" id="resultBox">
    <div class="result-header">
      <span>📝 متن تبدیل‌شده</span>
      <button class="copy-btn" id="copyBtn">📋 کپی</button>
    </div>
    <div class="result-text" id="resultText"></div>
  </div>
</div>

<script>
  const API_KEY = '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';
  const API_URL = 'https://api.groq.com/openai/v1/audio/transcriptions';

  let selectedFile = null;

  const fileInput = document.getElementById('fileInput');
  const uploadArea = document.getElementById('uploadArea');
  const fileInfo = document.getElementById('fileInfo');
  const fileName = document.getElementById('fileName');
  const fileSize = document.getElementById('fileSize');
  const audioPlayer = document.getElementById('audioPlayer');
  const transcribeBtn = document.getElementById('transcribeBtn');
  const loader = document.getElementById('loader');
  const errorBox = document.getElementById('errorBox');
  const resultBox = document.getElementById('resultBox');
  const resultText = document.getElementById('resultText');
  const copyBtn = document.getElementById('copyBtn');
  const langSelect = document.getElementById('langSelect');

  function formatSize(bytes) {
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  function handleFile(file) {
    if (!file) return;
    if (!file.type.startsWith('audio/') && !file.type.startsWith('video/')) {
      showError('❌ لطفاً یک فایل صوتی یا ویدیویی معتبر انتخاب کنید.');
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      showError('❌ حداکثر حجم مجاز فایل ۲۵ مگابایت است.');
      return;
    }

    selectedFile = file;
    fileName.textContent = file.name;
    fileSize.textContent = formatSize(file.size);
    fileInfo.classList.remove('hidden');

    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    audioPlayer.style.display = 'block';

    transcribeBtn.disabled = false;
    errorBox.classList.remove('visible');
    resultBox.classList.remove('visible');
  }

  fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));

  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
  });

  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    handleFile(e.dataTransfer.files[0]);
  });

  function showError(msg) {
    errorBox.textContent = msg;
    errorBox.classList.add('visible');
  }

  transcribeBtn.addEventListener('click', async () => {
    if (!selectedFile) return;

    transcribeBtn.disabled = true;
    loader.classList.add('visible');
    errorBox.classList.remove('visible');
    resultBox.classList.remove('visible');

    try {
      const formData = new FormData();
      formData.append('file', selectedFile, selectedFile.name);
      formData.append('model', 'whisper-large-v3-turbo');
      formData.append('response_format', 'text');

      const lang = langSelect.value;
      if (lang) formData.append('language', lang);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Authorization': \`Bearer \${API_KEY}\` },
        body: formData
      });

      if (!response.ok) {
        const err = await response.json().catch(() => null);
        const msg = err?.error?.message || \`خطا: کد \${response.status}\`;
        throw new Error(msg);
      }

      const text = await response.text();
      resultText.textContent = text.trim() || '(متنی یافت نشد)';
      resultBox.classList.add('visible');

    } catch (err) {
      showError('❌ خطا: ' + err.message);
    } finally {
      loader.classList.remove('visible');
      transcribeBtn.disabled = false;
    }
  });

  copyBtn.addEventListener('click', () => {
    const text = resultText.textContent;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = '✅ کپی شد!';
      setTimeout(() => copyBtn.textContent = '📋 کپی', 2000);
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      copyBtn.textContent = '✅ کپی شد!';
      setTimeout(() => copyBtn.textContent = '📋 کپی', 2000);
    });
  });
<\/script>

`,className:"w-html-embed"})}),z=o=>{const{origin:t,pathname:n,search:r}=new URL(o);return`${t}${n}${r}`},k=l.memo(({pageKey:o,system:t})=>e.jsx(B,{system:t},o),(o,t)=>o.pageKey===t.pageKey),E=({data:o})=>{const{system:t,resources:n,url:r,pageMeta:s}=o,p=z(r),c=l.useMemo(()=>({imageLoader:i,assetBaseUrl:a,resources:n,breakpoints:y,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:r,children:e.jsx(k,{pageKey:p,system:t})}),e.jsx(b,{url:r,pageMeta:s,siteName:d,imageLoader:i,assetBaseUrl:a}),e.jsx(g,{children:s.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),S=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${a}${h}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),L={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-12/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-12/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{L as configValuesSerialized};
