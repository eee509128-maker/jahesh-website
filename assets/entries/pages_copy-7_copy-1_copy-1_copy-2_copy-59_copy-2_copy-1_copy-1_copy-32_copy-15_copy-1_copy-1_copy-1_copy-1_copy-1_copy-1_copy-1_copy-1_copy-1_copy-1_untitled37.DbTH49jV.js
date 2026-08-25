import{j as e,r as d,a,i,R as u,b as m,P as g,c as f,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],E=o=>e.jsx("body",{className:"w-element",children:e.jsx(x,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل صوت به متن</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Segoe UI', Tahoma, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: #1e293b;
            border-radius: 16px;
            padding: 40px;
            width: 100%;
            max-width: 700px;
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }
        h1 {
            text-align: center;
            font-size: 1.8rem;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .subtitle {
            text-align: center;
            color: #94a3b8;
            margin-bottom: 30px;
            font-size: 0.9rem;
        }
        .api-section {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 6px;
            color: #94a3b8;
            font-size: 0.85rem;
        }
        input[type="password"], input[type="text"] {
            width: 100%;
            padding: 12px 16px;
            background: #0f172a;
            border: 1px solid #334155;
            border-radius: 8px;
            color: #e2e8f0;
            font-size: 0.9rem;
            outline: none;
            transition: border-color 0.2s;
        }
        input:focus { border-color: #6366f1; }

        .upload-area {
            border: 2px dashed #334155;
            border-radius: 12px;
            padding: 40px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            margin-bottom: 20px;
            position: relative;
        }
        .upload-area:hover, .upload-area.drag-over {
            border-color: #6366f1;
            background: rgba(99,102,241,0.05);
        }
        .upload-area input[type="file"] {
            position: absolute;
            inset: 0;
            opacity: 0;
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
        .upload-icon { font-size: 3rem; margin-bottom: 10px; }
        .upload-text { color: #94a3b8; font-size: 0.95rem; }
        .file-name {
            margin-top: 10px;
            color: #6366f1;
            font-size: 0.85rem;
            font-weight: 600;
        }

        select {
            width: 100%;
            padding: 12px 16px;
            background: #0f172a;
            border: 1px solid #334155;
            border-radius: 8px;
            color: #e2e8f0;
            font-size: 0.9rem;
            outline: none;
            margin-bottom: 20px;
            cursor: pointer;
        }

        button {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.2s, transform 0.1s;
        }
        button:hover { opacity: 0.9; transform: translateY(-1px); }
        button:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        .progress-bar {
            display: none;
            background: #0f172a;
            border-radius: 8px;
            height: 8px;
            margin: 16px 0;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
            border-radius: 8px;
            animation: progress 2s ease-in-out infinite;
        }
        @keyframes progress {
            0% { width: 20%; margin-left: 0; }
            50% { width: 60%; margin-left: 20%; }
            100% { width: 20%; margin-left: 80%; }
        }

        .result-box {
            display: none;
            margin-top: 24px;
            background: #0f172a;
            border: 1px solid #334155;
            border-radius: 12px;
            padding: 20px;
        }
        .result-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }
        .result-title {
            color: #6366f1;
            font-weight: 600;
        }
        .copy-btn {
            background: #334155;
            border: none;
            color: #94a3b8;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 0.8rem;
            cursor: pointer;
            width: auto;
        }
        .copy-btn:hover { background: #475569; color: white; }
        .result-text {
            line-height: 1.8;
            color: #e2e8f0;
            white-space: pre-wrap;
            font-size: 0.95rem;
        }

        .error-box {
            display: none;
            margin-top: 16px;
            background: rgba(239,68,68,0.1);
            border: 1px solid #ef4444;
            border-radius: 8px;
            padding: 14px;
            color: #fca5a5;
            font-size: 0.9rem;
        }

        .status { text-align: center; color: #94a3b8; margin-top: 12px; font-size: 0.85rem; }
    </style>


<div class="container">
    <h1>🎙️ تبدیل صوت به متن</h1>
    <p class="subtitle">Groq Whisper API — سریع و دقیق</p>

    <div class="api-section">
        <label>🔑 API Key</label>
        <input type="password" id="apiKey" placeholder="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">
    </div>

    <div>
        <label>🌐 زبان (اختیاری)</label>
        <select id="language">
            <option value="">تشخیص خودکار</option>
            <option value="fa">فارسی (fa)</option>
            <option value="en">انگلیسی (en)</option>
            <option value="ar">عربی (ar)</option>
            <option value="fr">فرانسوی (fr)</option>
            <option value="de">آلمانی (de)</option>
            <option value="es">اسپانیایی (es)</option>
            <option value="tr">ترکی (tr)</option>
        </select>
    </div>

    <div class="upload-area" id="uploadArea">
        <input type="file" id="audioFile" accept="audio/*,video/*">
        <div class="upload-icon">📁</div>
        <div class="upload-text">فایل صوتی را اینجا بکشید یا کلیک کنید<br><small>MP3, WAV, M4A, MP4, WEBM, OGG پشتیبانی می‌شود</small></div>
        <div class="file-name" id="fileName"></div>
    </div>

    <button id="transcribeBtn" onclick="transcribe()" disabled="">🚀 شروع تبدیل</button>

    <div class="progress-bar" id="progressBar">
        <div class="progress-fill"></div>
    </div>
    <div class="status" id="status"></div>

    <div class="error-box" id="errorBox"></div>

    <div class="result-box" id="resultBox">
        <div class="result-header">
            <span class="result-title">📝 متن استخراج شده</span>
            <button class="copy-btn" onclick="copyText()">📋 کپی</button>
        </div>
        <div class="result-text" id="resultText"></div>
    </div>
</div>

<script>
    const fileInput = document.getElementById('audioFile');
    const fileName = document.getElementById('fileName');
    const btn = document.getElementById('transcribeBtn');

    fileInput.addEventListener('change', () => {
        if (fileInput.files[0]) {
            fileName.textContent = '✅ ' + fileInput.files[0].name;
            btn.disabled = false;
        }
    });

    // Drag & drop
    const area = document.getElementById('uploadArea');
    area.addEventListener('dragover', e => { e.preventDefault(); area.classList.add('drag-over'); });
    area.addEventListener('dragleave', () => area.classList.remove('drag-over'));
    area.addEventListener('drop', e => {
        e.preventDefault();
        area.classList.remove('drag-over');
        if (e.dataTransfer.files[0]) {
            fileInput.files = e.dataTransfer.files;
            fileName.textContent = '✅ ' + e.dataTransfer.files[0].name;
            btn.disabled = false;
        }
    });

    async function transcribe() {
        const apiKey = document.getElementById('apiKey').value.trim();
        const file = fileInput.files[0];
        const lang = document.getElementById('language').value;

        if (!apiKey) return showError('لطفاً API Key را وارد کنید.');
        if (!file) return showError('لطفاً یک فایل صوتی انتخاب کنید.');

        // UI state
        btn.disabled = true;
        document.getElementById('progressBar').style.display = 'block';
        document.getElementById('status').textContent = '⏳ در حال ارسال به سرور...';
        document.getElementById('errorBox').style.display = 'none';
        document.getElementById('resultBox').style.display = 'none';

        const formData = new FormData();
        formData.append('file', file);
        formData.append('model', 'whisper-large-v3');
        formData.append('response_format', 'text');
        if (lang) formData.append('language', lang);

        try {
            const res = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
                method: 'POST',
                headers: { 'Authorization': 'Bearer ' + apiKey },
                body: formData
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error?.message || 'خطای ناشناخته از سرور');
            }

            const text = await res.text();
            showResult(text);
        } catch (e) {
            showError('❌ خطا: ' + e.message);
        } finally {
            btn.disabled = false;
            document.getElementById('progressBar').style.display = 'none';
            document.getElementById('status').textContent = '';
        }
    }

    function showResult(text) {
        document.getElementById('resultText').textContent = text;
        document.getElementById('resultBox').style.display = 'block';
        document.getElementById('status').textContent = '✅ تبدیل با موفقیت انجام شد!';
    }

    function showError(msg) {
        document.getElementById('errorBox').textContent = msg;
        document.getElementById('errorBox').style.display = 'block';
    }

    function copyText() {
        const text = document.getElementById('resultText').textContent;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.querySelector('.copy-btn');
            btn.textContent = '✅ کپی شد!';
            setTimeout(() => btn.textContent = '📋 کپی', 2000);
        });
    }
<\/script>


`,className:"w-html-embed"})}),B=o=>{const{origin:t,pathname:n,search:r}=new URL(o);return`${t}${n}${r}`},k=d.memo(({pageKey:o,system:t})=>e.jsx(E,{system:t},o),(o,t)=>o.pageKey===t.pageKey),I=({data:o})=>{const{system:t,resources:n,url:r,pageMeta:s}=o,p=B(r),c=d.useMemo(()=>({imageLoader:i,assetBaseUrl:a,resources:n,breakpoints:b,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:r,children:e.jsx(k,{pageKey:p,system:t})}),e.jsx(g,{url:r,pageMeta:s,siteName:l,imageLoader:i,assetBaseUrl:a}),e.jsx(f,{children:s.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),P=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${a}${h}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-7/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-7/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{C as configValuesSerialized};
