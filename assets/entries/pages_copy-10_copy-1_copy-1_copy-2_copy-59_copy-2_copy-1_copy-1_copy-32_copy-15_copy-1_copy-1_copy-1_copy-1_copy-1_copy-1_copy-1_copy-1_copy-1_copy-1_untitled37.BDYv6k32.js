import{j as e,r as d,a,i as s,R as u,b as y,P as m,c as f,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],E=o=>e.jsx("body",{className:"w-element",children:e.jsx(b,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل صوت به متن با Groq</title>
    <style>
        :root {
            --primary: #6366f1;
            --primary-hover: #4f46e5;
            --bg: #f8fafc;
            --card: #ffffff;
            --text: #1e293b;
            --border: #e2e8f0;
        }

        body {
            font-family: system-ui, -apple-system, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }

        .container {
            background: var(--card);
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 500px;
            text-align: center;
        }

        h1 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            color: var(--primary);
        }

        .upload-area {
            border: 2px dashed var(--border);
            padding: 2rem;
            border-radius: 0.5rem;
            margin-bottom: 1.5rem;
            cursor: pointer;
            transition: border-color 0.3s;
        }

        .upload-area:hover {
            border-color: var(--primary);
        }

        input[type="file"] {
            display: none;
        }

        .btn {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
            font-size: 1rem;
            transition: opacity 0.3s;
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .btn:active {
            transform: scale(0.98);
        }

        #status {
            margin-top: 1rem;
            font-size: 0.9rem;
            min-height: 1.2rem;
        }

        #result-container {
            margin-top: 1.5rem;
            display: none;
        }

        textarea {
            width: 100%;
            height: 200px;
            padding: 1rem;
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            resize: vertical;
            font-family: inherit;
            box-sizing: border-box;
            background: #f1f5f9;
        }

        .copy-btn {
            margin-top: 0.5rem;
            background: #10b981;
        }

        .loader {
            display: none;
            margin: 10px auto;
            width: 30px;
            height: 30px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .emoji {
            font-size: 3rem;
            display: block;
            margin-bottom: 10px;
        }
    </style>



<div class="container">
    <span class="emoji">🎙️</span>
    <h1>تبدیل فایل صوتی به متن</h1>
    
    <label class="upload-area" id="drop-zone">
        <span id="file-name">فایل صوتی را انتخاب یا اینجا رها کنید</span>
        <input type="file" id="audio-input" accept="audio/*">
    </label>

    <button class="btn" id="start-btn">شروع تبدیل به متن</button>
    <div class="loader" id="loader"></div>
    <div id="status"></div>

    <div id="result-container">
        <textarea id="result-text" readonly=""></textarea>
        <button class="btn copy-btn" id="copy-btn">کپی کردن متن 📋</button>
    </div>
</div>

<script>
    const API_KEY = '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';
    const audioInput = document.getElementById('audio-input');
    const startBtn = document.getElementById('start-btn');
    const fileNameDisplay = document.getElementById('file-name');
    const status = document.getElementById('status');
    const loader = document.getElementById('loader');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const copyBtn = document.getElementById('copy-btn');

    // Handle file selection
    audioInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            fileNameDisplay.textContent = \`فایل انتخاب شده: \${file.name}\`;
            status.textContent = '';
        }
    });

    // Handle Transcribe button
    startBtn.addEventListener('click', async () => {
        const file = audioInput.files[0];
        if (!file) {
            status.textContent = '❌ لطفاً ابتدا یک فایل صوتی انتخاب کنید.';
            status.style.color = 'red';
            return;
        }

        // Reset UI
        status.textContent = 'در حال پردازش فایل... لطفاً منتظر بمانید.';
        status.style.color = 'var(--text)';
        startBtn.disabled = true;
        loader.style.display = 'block';
        resultContainer.style.display = 'none';

        const formData = new FormData();
        formData.append('file', file);
        formData.append('model', 'whisper-large-v3');
        formData.append('language', 'fa'); // Suggesting Persian language

        try {
            const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
                method: 'POST',
                headers: {
                    'Authorization': \`Bearer \${API_KEY}\`
                },
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                resultText.value = data.text;
                resultContainer.style.display = 'block';
                status.textContent = '✅ تبدیل با موفقیت انجام شد.';
                status.style.color = '#10b981';
            } else {
                throw new Error(data.error?.message || 'خطا در برقراری ارتباط با سرور');
            }
        } catch (error) {
            console.error(error);
            status.textContent = \`❌ خطا: \${error.message}\`;
            status.style.color = 'red';
        } finally {
            startBtn.disabled = false;
            loader.style.display = 'none';
        }
    });

    // Handle Copy button
    copyBtn.addEventListener('click', () => {
        resultText.select();
        document.execCommand('copy');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'کپی شد! ✅';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });

    // Simple drag and drop visual feedback
    const dropZone = document.getElementById('drop-zone');
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--primary)';
    });
    dropZone.addEventListener('dragleave', () => {
        dropZone.style.borderColor = 'var(--border)';
    });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--border)';
        if (e.dataTransfer.files.length) {
            audioInput.files = e.dataTransfer.files;
            const event = new Event('change');
            audioInput.dispatchEvent(event);
        }
    });
<\/script>


`,className:"w-html-embed"})}),j=o=>{const{origin:t,pathname:n,search:r}=new URL(o);return`${t}${n}${r}`},P=d.memo(({pageKey:o,system:t})=>e.jsx(E,{system:t},o),(o,t)=>o.pageKey===t.pageKey),S=({data:o})=>{const{system:t,resources:n,url:r,pageMeta:i}=o,p=j(r),c=d.useMemo(()=>({imageLoader:s,assetBaseUrl:a,resources:n,breakpoints:x,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(y.Provider,{value:r,children:e.jsx(P,{pageKey:p,system:t})}),e.jsx(m,{url:r,pageMeta:i,siteName:l,imageLoader:s,assetBaseUrl:a}),e.jsx(f,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),z=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${a}${h}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},C=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),_={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-10/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-10/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}}};export{_ as configValuesSerialized};
