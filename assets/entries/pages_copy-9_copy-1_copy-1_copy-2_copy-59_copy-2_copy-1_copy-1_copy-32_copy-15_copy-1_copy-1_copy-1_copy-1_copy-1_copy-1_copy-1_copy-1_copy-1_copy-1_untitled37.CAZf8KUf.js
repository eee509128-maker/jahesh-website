import{j as e,r as l,a as n,i as a,R as u,b as f,P as m,c as g,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=o=>e.jsx("body",{className:"w-element",children:e.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل گفتار به متن</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Vazir', 'Tahoma', sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 24px;
            padding: 40px;
            max-width: 700px;
            width: 100%;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        h1 {
            text-align: center;
            color: #1a1a2e;
            margin-bottom: 10px;
            font-size: 2rem;
        }

        .subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 30px;
            font-size: 0.95rem;
        }

        .api-section {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 25px;
        }

        .api-section label {
            display: block;
            color: #333;
            margin-bottom: 8px;
            font-weight: bold;
        }

        .api-section input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 14px;
            direction: ltr;
            text-align: left;
            transition: border-color 0.3s;
        }

        .api-section input:focus {
            outline: none;
            border-color: #0f3460;
        }

        .upload-zone {
            border: 3px dashed #0f3460;
            border-radius: 16px;
            padding: 50px 30px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            background: #f0f4ff;
            margin-bottom: 25px;
        }

        .upload-zone:hover {
            background: #e0e8ff;
            border-color: #1a1a2e;
            transform: scale(1.01);
        }

        .upload-zone.dragover {
            background: #d0e0ff;
            border-color: #10B981;
        }

        .upload-zone.has-file {
            border-color: #10B981;
            background: #e8fff0;
        }

        .upload-icon {
            font-size: 60px;
            margin-bottom: 15px;
        }

        .upload-zone h3 {
            color: #1a1a2e;
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        .upload-zone p {
            color: #666;
            font-size: 0.9rem;
        }

        .file-info {
            display: none;
            background: #e8fff0;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 20px;
            border-right: 4px solid #10B981;
        }

        .file-info.show {
            display: block;
        }

        .file-name {
            font-weight: bold;
            color: #1a1a2e;
        }

        .file-size {
            color: #666;
            font-size: 0.85rem;
        }

        #fileInput {
            display: none;
        }

        .btn {
            width: 100%;
            padding: 16px;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 15px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);
            color: white;
        }

        .btn-primary:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(15, 52, 96, 0.4);
        }

        .btn-primary:disabled {
            background: #ccc;
            cursor: not-allowed;
            transform: none;
        }

        .progress-container {
            display: none;
            margin-bottom: 20px;
        }

        .progress-container.show {
            display: block;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #e0e0e0;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 10px;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #0f3460, #10B981);
            width: 0%;
            transition: width 0.3s ease;
        }

        .progress-text {
            text-align: center;
            color: #666;
            font-size: 0.9rem;
        }

        .result-section {
            display: none;
        }

        .result-section.show {
            display: block;
        }

        .result-section h3 {
            color: #1a1a2e;
            margin-bottom: 15px;
            font-size: 1.1rem;
        }

        .result-box {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 20px;
            min-height: 150px;
            max-height: 400px;
            overflow-y: auto;
            line-height: 1.8;
            color: #333;
            border: 1px solid #e0e0e0;
            white-space: pre-wrap;
        }

        .btn-group {
            display: flex;
            gap: 10px;
        }

        .btn-secondary {
            flex: 1;
            background: #10B981;
            color: white;
            padding: 12px;
            font-size: 0.95rem;
        }

        .btn-secondary:hover {
            background: #0d9668;
        }

        .error-box {
            display: none;
            background: #fff0f0;
            border: 1px solid #ff6b6b;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 20px;
            color: #d32f2f;
        }

        .error-box.show {
            display: block;
        }

        .chunk-info {
            background: #fff8e1;
            border-radius: 8px;
            padding: 10px 15px;
            margin-bottom: 10px;
            font-size: 0.85rem;
            color: #f57c00;
        }

        .spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
            margin-left: 10px;
            vertical-align: middle;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>


    <div class="container">
        <h1>🎤 تبدیل گفتار به متن</h1>
        <p class="subtitle">فایل صوتی خود را بارگذاری کنید و به متن تبدیل کنید</p>

        <div class="api-section">
            <label for="apiKey">🔑 کلید API گروک:</label>
            <input type="password" id="apiKey" placeholder="gsk_xxxx...">
        </div>

        <div class="upload-zone" id="uploadZone">
            <div class="upload-icon">📁</div>
            <h3>فایل صوتی را اینجا بکشید یا کلیک کنید</h3>
            <p>فرمت‌های پشتیبانی: MP3, MP4, MPEG, MPGA, M4A, WAV, WEBM</p>
            <p style="margin-top: 8px; color: #f57c00;">⚠️ حداکثر حجم: ۲۵ مگابایت</p>
        </div>

        <input type="file" id="fileInput" accept="audio/*,video/mp4">

        <div class="file-info" id="fileInfo">
            <div class="file-name" id="fileName"></div>
            <div class="file-size" id="fileSize"></div>
        </div>

        <div class="error-box" id="errorBox"></div>

        <div class="progress-container" id="progressContainer">
            <div class="progress-bar">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <div class="progress-text" id="progressText">در حال پردازش...</div>
        </div>

        <button class="btn btn-primary" id="convertBtn" disabled="">
            تبدیل به متن
        </button>

        <div class="result-section" id="resultSection">
            <h3>📝 متن استخراج شده:</h3>
            <div class="result-box" id="resultBox"></div>
            <div class="btn-group" style="margin-top: 15px;">
                <button class="btn btn-secondary" onclick="copyText()">📋 کپی متن</button>
                <button class="btn btn-secondary" onclick="downloadText()">💾 دانلود</button>
            </div>
        </div>
    </div>

    <script>
        const uploadZone = document.getElementById('uploadZone');
        const fileInput = document.getElementById('fileInput');
        const fileInfo = document.getElementById('fileInfo');
        const fileName = document.getElementById('fileName');
        const fileSize = document.getElementById('fileSize');
        const convertBtn = document.getElementById('convertBtn');
        const progressContainer = document.getElementById('progressContainer');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const resultSection = document.getElementById('resultSection');
        const resultBox = document.getElementById('resultBox');
        const errorBox = document.getElementById('errorBox');
        const apiKeyInput = document.getElementById('apiKey');

        let selectedFile = null;
        const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
        const CHUNK_SIZE = 20 * 1024 * 1024; // 20 MB chunks for splitting

        // Drag and drop handlers
        uploadZone.addEventListener('click', () => fileInput.click());
        
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        });

        uploadZone.addEventListener('dragleave', () => {
            uploadZone.classList.remove('dragover');
        });

        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFile(files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFile(e.target.files[0]);
            }
        });

        apiKeyInput.addEventListener('input', updateButtonState);

        function handleFile(file) {
            const validTypes = ['audio/', 'video/mp4'];
            const isValid = validTypes.some(type => file.type.startsWith(type)) || 
                           file.name.match(/\\.(mp3|mp4|mpeg|mpga|m4a|wav|webm)$/i);

            if (!isValid) {
                showError('فرمت فایل پشتیبانی نمی‌شود!');
                return;
            }

            selectedFile = file;
            fileName.textContent = '📄 ' + file.name;
            fileSize.textContent = 'حجم: ' + formatSize(file.size);
            fileInfo.classList.add('show');
            uploadZone.classList.add('has-file');
            errorBox.classList.remove('show');
            resultSection.classList.remove('show');
            
            updateButtonState();
        }

        function formatSize(bytes) {
            if (bytes < 1024) return bytes + ' بایت';
            if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' کیلوبایت';
            return (bytes / (1024 * 1024)).toFixed(2) + ' مگابایت';
        }

        function updateButtonState() {
            convertBtn.disabled = !selectedFile || !apiKeyInput.value.trim();
        }

        function showError(message) {
            errorBox.textContent = '❌ ' + message;
            errorBox.classList.add('show');
        }

        convertBtn.addEventListener('click', async () => {
            if (!selectedFile || !apiKeyInput.value.trim()) return;

            const apiKey = apiKeyInput.value.trim();
            
            convertBtn.disabled = true;
            progressContainer.classList.add('show');
            errorBox.classList.remove('show');
            resultSection.classList.remove('show');
            
            try {
                let fullTranscription = '';
                
                if (selectedFile.size <= MAX_FILE_SIZE) {
                    // File is small enough, transcribe directly
                    progressText.textContent = 'در حال ارسال به سرور...';
                    progressFill.style.width = '30%';
                    
                    fullTranscription = await transcribeAudio(selectedFile, apiKey);
                } else {
                    // File is too large, need to split
                    progressText.textContent = 'فایل بزرگ است، در حال تقسیم و پردازش...';
                    
                    const chunks = await splitAudioFile(selectedFile);
                    const totalChunks = chunks.length;
                    
                    for (let i = 0; i < chunks.length; i++) {
                        progressText.textContent = \`پردازش بخش \${i + 1} از \${totalChunks}...\`;
                        progressFill.style.width = \`\${((i + 1) / totalChunks) * 100}%\`;
                        
                        const chunkText = await transcribeAudio(chunks[i], apiKey);
                        fullTranscription += chunkText + '\\n\\n';
                        
                        // Clean up chunk URL
                        URL.revokeObjectURL(chunks[i].url);
                    }
                }
                
                progressFill.style.width = '100%';
                progressText.textContent = 'تکمیل شد!';
                
                resultBox.textContent = fullTranscription.trim();
                resultSection.classList.add('show');
                
                setTimeout(() => {
                    progressContainer.classList.remove('show');
                }, 1000);
                
            } catch (error) {
                console.error('Error:', error);
                showError(error.message || 'خطا در پردازش فایل صوتی');
                progressContainer.classList.remove('show');
            }
            
            convertBtn.disabled = false;
        });

        async function transcribeAudio(audioFile, apiKey) {
            const formData = new FormData();
            formData.append('file', audioFile);
            formData.append('model', 'whisper-large-v3');
            formData.append('language', 'fa');
            formData.append('response_format', 'text');

            const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
                method: 'POST',
                headers: {
                    'Authorization': \`Bearer \${apiKey}\`
                },
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || \`خطای سرور: \${response.status}\`);
            }

            return await response.text();
        }

        async function splitAudioFile(file) {
            // Note: This is a simplified approach
            // For better audio splitting, you'd need a library like ffmpeg.wasm
            // Here we'll use time-based chunking via audio context
            
            return new Promise((resolve) => {
                // For now, return single file if under 100MB with a warning
                // Real implementation would need ffmpeg.wasm
                
                const chunks = [];
                const numChunks = Math.ceil(file.size / CHUNK_SIZE);
                
                // Simple byte-range splitting (not ideal for audio, but works for demo)
                for (let i = 0; i < numChunks; i++) {
                    const start = i * CHUNK_SIZE;
                    const end = Math.min(start + CHUNK_SIZE, file.size);
                    const chunk = file.slice(start, end, file.type);
                    
                    // Create a new file object for each chunk
                    const chunkFile = new File(
                        [chunk], 
                        \`chunk_\${i + 1}_\${file.name}\`, 
                        { type: file.type }
                    );
                    chunks.push(chunkFile);
                }
                
                resolve(chunks);
            });
        }

        function copyText() {
            const text = resultBox.textContent;
            navigator.clipboard.writeText(text).then(() => {
                alert('متن کپی شد!');
            }).catch(() => {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('متن کپی شد!');
            });
        }

        function downloadText() {
            const text = resultBox.textContent;
            const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'transcription.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    <\/script>


`,className:"w-html-embed"})}),z=o=>{const{origin:t,pathname:i,search:r}=new URL(o);return`${t}${i}${r}`},B=l.memo(({pageKey:o,system:t})=>e.jsx(k,{system:t},o),(o,t)=>o.pageKey===t.pageKey),S=({data:o})=>{const{system:t,resources:i,url:r,pageMeta:s}=o,c=z(r),p=l.useMemo(()=>({imageLoader:a,assetBaseUrl:n,resources:i,breakpoints:y,onError:console.error}),[i]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(f.Provider,{value:r,children:e.jsx(B,{pageKey:c,system:t})}),e.jsx(m,{url:r,pageMeta:s,siteName:d,imageLoader:a,assetBaseUrl:n}),e.jsx(g,{children:s.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:a({src:`${n}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},F=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-9/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-9/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:F}}};export{j as configValuesSerialized};
