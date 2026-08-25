import{j as e,r as l,a as s,i,R as u,b as g,P as m,c as f,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],z=o=>e.jsx("body",{className:"w-element",children:e.jsx(x,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>تبدیل صدا به متن</title>
   <style>
       * {
           margin: 0;
           padding: 0;
           box-sizing: border-box;
       }

       body {
           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
           min-height: 100vh;
           display: flex;
           flex-direction: column;
           align-items: center;
           padding: 20px;
       }

       .container {
           background: rgba(255, 255, 255, 0.95);
           border-radius: 20px;
           padding: 30px;
           max-width: 800px;
           width: 100%;
           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
       }

       h1 {
           text-align: center;
           color: #333;
           margin-bottom: 10px;
           font-size: 1.8rem;
       }

       .subtitle {
           text-align: center;
           color: #666;
           margin-bottom: 25px;
           font-size: 0.95rem;
       }

       .api-section {
           background: #f8f9fa;
           border-radius: 12px;
           padding: 15px;
           margin-bottom: 20px;
       }

       .api-section label {
           display: block;
           margin-bottom: 8px;
           color: #555;
           font-weight: 600;
       }

       .api-input {
           width: 100%;
           padding: 12px 15px;
           border: 2px solid #e0e0e0;
           border-radius: 10px;
           font-size: 0.9rem;
           transition: border-color 0.3s;
           font-family: monospace;
       }

       .api-input:focus {
           outline: none;
           border-color: #667eea;
       }

       .upload-area {
           border: 3px dashed #667eea;
           border-radius: 15px;
           padding: 40px 20px;
           text-align: center;
           background: #f8f9fa;
           transition: all 0.3s;
           cursor: pointer;
           margin-bottom: 20px;
       }

       .upload-area:hover, .upload-area.dragover {
           background: #e8eaff;
           border-color: #764ba2;
       }

       .upload-area i {
           font-size: 3rem;
           display: block;
           margin-bottom: 15px;
       }

       .upload-text {
           color: #555;
           font-size: 1rem;
       }

       .file-input {
           display: none;
       }

       .file-info {
           background: #e8f5e9;
           border-radius: 10px;
           padding: 15px;
           margin-bottom: 20px;
           display: none;
           align-items: center;
           gap: 15px;
       }

       .file-info.show {
           display: flex;
       }

       .file-icon {
           font-size: 2rem;
       }

       .file-details {
           flex: 1;
       }

       .file-name {
           font-weight: 600;
           color: #333;
           margin-bottom: 5px;
       }

       .file-size {
           color: #666;
           font-size: 0.85rem;
       }

       .btn {
           padding: 12px 30px;
           border: none;
           border-radius: 10px;
           font-size: 1rem;
           cursor: pointer;
           transition: all 0.3s;
           font-weight: 600;
       }

       .btn-primary {
           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
           color: white;
       }

       .btn-primary:hover:not(:disabled) {
           transform: translateY(-2px);
           box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
       }

       .btn-primary:disabled {
           opacity: 0.6;
           cursor: not-allowed;
       }

       .btn-danger {
           background: #ef5350;
           color: white;
       }

       .btn-danger:hover {
           background: #d32f2f;
       }

       .progress-section {
           display: none;
           margin-bottom: 20px;
       }

       .progress-section.show {
           display: block;
       }

       .progress-bar {
           height: 10px;
           background: #e0e0e0;
           border-radius: 5px;
           overflow: hidden;
           margin-bottom: 10px;
       }

       .progress-fill {
           height: 100%;
           background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
           border-radius: 5px;
           width: 0%;
           transition: width 0.3s;
       }

       .progress-text {
           text-align: center;
           color: #666;
           font-size: 0.9rem;
       }

       .result-section {
           display: none;
           background: #f8f9fa;
           border-radius: 12px;
           padding: 20px;
       }

       .result-section.show {
           display: block;
       }

       .result-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 15px;
       }

       .result-title {
           font-size: 1.1rem;
           color: #333;
           font-weight: 600;
       }

       .result-actions {
           display: flex;
           gap: 10px;
       }

       .btn-small {
           padding: 8px 15px;
           font-size: 0.85rem;
       }

       .result-text {
           background: white;
           border: 1px solid #e0e0e0;
           border-radius: 10px;
           padding: 15px;
           min-height: 150px;
           max-height: 300px;
           overflow-y: auto;
           line-height: 1.8;
           color: #333;
           font-size: 1rem;
           white-space: pre-wrap;
       }

       .error-message {
           background: #ffebee;
           color: #c62828;
           padding: 15px;
           border-radius: 10px;
           margin-bottom: 20px;
           display: none;
       }

       .error-message.show {
           display: block;
       }

       .loading {
           display: inline-block;
           width: 20px;
           height: 20px;
           border: 3px solid #ffffff;
           border-radius: 50%;
           border-top-color: transparent;
           animation: spin 1s ease-in-out infinite;
           margin-left: 10px;
           vertical-align: middle;
       }

       @keyframes spin {
           to { transform: rotate(360deg); }
       }

       .supported-formats {
           text-align: center;
           color: #888;
           font-size: 0.85rem;
           margin-top: 15px;
       }

       @media (max-width: 600px) {
           .container {
               padding: 20px;
           }
           
           h1 {
               font-size: 1.4rem;
           }
           
           .upload-area {
               padding: 30px 15px;
           }
       }
   </style>


   <div class="container">
       <h1>🎤 تبدیل صدا به متن</h1>
       <p class="subtitle">اپلود فایل صوتی و تبدیل آن به متن با استفاده از AI</p>

       <div class="api-section">
           <label for="apiKey">🔑 API Key گروک (Groq)</label>
           <input type="password" id="apiKey" class="api-input" placeholder="gsk_... API key خود را وارد کنید" value="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">
       </div>

       <div class="error-message" id="errorMessage"></div>

       <div class="upload-area" id="uploadArea">
           <span>📁</span>
           <p class="upload-text">برای انتخاب فایل صوتی کلیک کنید یا فایل را اینجا رها کنید</p>
           <input type="file" id="fileInput" class="file-input" accept="audio/*">
       </div>

       <div class="file-info" id="fileInfo">
           <span class="file-icon">🎵</span>
           <div class="file-details">
               <div class="file-name" id="fileName"></div>
               <div class="file-size" id="fileSize"></div>
           </div>
           <button class="btn btn-danger btn-small" id="removeFile">حذف</button>
       </div>

       <div class="progress-section" id="progressSection">
           <div class="progress-bar">
               <div class="progress-fill" id="progressFill"></div>
           </div>
           <p class="progress-text" id="progressText">در حال پردازش...</p>
       </div>

       <button class="btn btn-primary" id="convertBtn" disabled="">
           شروع تبدیل
       </button>

       <div class="result-section" id="resultSection">
           <div class="result-header">
               <span class="result-title">📝 متن استخراج شده:</span>
               <div class="result-actions">
                   <button class="btn btn-primary btn-small" id="copyBtn">کپی</button>
               </div>
           </div>
           <div class="result-text" id="resultText"></div>
       </div>

       <p class="supported-formats">فرمت‌های پشتیبانی شده: MP3, WAV, M4A, OGG, FLAC (حداکثر 25 مگابایت)</p>
   </div>

   <script>
       const uploadArea = document.getElementById('uploadArea');
       const fileInput = document.getElementById('fileInput');
       const fileInfo = document.getElementById('fileInfo');
       const fileName = document.getElementById('fileName');
       const fileSize = document.getElementById('fileSize');
       const removeFileBtn = document.getElementById('removeFile');
       const convertBtn = document.getElementById('convertBtn');
       const progressSection = document.getElementById('progressSection');
       const progressFill = document.getElementById('progressFill');
       const progressText = document.getElementById('progressText');
       const resultSection = document.getElementById('resultSection');
       const resultText = document.getElementById('resultText');
       const copyBtn = document.getElementById('copyBtn');
       const errorMessage = document.getElementById('errorMessage');
       const apiKeyInput = document.getElementById('apiKey');

       let selectedFile = null;

       uploadArea.addEventListener('click', () => fileInput.click());

       uploadArea.addEventListener('dragover', (e) => {
           e.preventDefault();
           uploadArea.classList.add('dragover');
       });

       uploadArea.addEventListener('dragleave', () => {
           uploadArea.classList.remove('dragover');
       });

       uploadArea.addEventListener('drop', (e) => {
           e.preventDefault();
           uploadArea.classList.remove('dragover');
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

       function handleFile(file) {
           if (!file.type.startsWith('audio/')) {
               showError('لطفاً یک فایل صوتی انتخاب کنید');
               return;
           }

           if (file.size > 25 * 1024 * 1024) {
               showError('حجم فایل نباید بیشتر از 25 مگابایت باشد');
               return;
           }

           selectedFile = file;
           fileName.textContent = file.name;
           fileSize.textContent = formatFileSize(file.size);
           
           uploadArea.style.display = 'none';
           fileInfo.classList.add('show');
           convertBtn.disabled = false;
           
           hideError();
       }

       removeFileBtn.addEventListener('click', () => {
           selectedFile = null;
           fileInput.value = '';
           
           uploadArea.style.display = 'block';
           fileInfo.classList.remove('show');
           convertBtn.disabled = true;
           
           progressSection.classList.remove('show');
           resultSection.classList.remove('show');
       });

       convertBtn.addEventListener('click', async () => {
           if (!selectedFile) return;

           const apiKey = apiKeyInput.value.trim();
           if (!apiKey) {
               showError('لطفاً API Key را وارد کنید');
               return;
           }

           convertBtn.disabled = true;
           convertBtn.innerHTML = '<span class="loading"></span> در حال پردازش...';
           
           progressSection.classList.add('show');
           progressFill.style.width = '30%';
           progressText.textContent = 'در حال آپلود فایل...';

           try {
               const formData = new FormData();
               formData.append('file', selectedFile);
               formData.append('model', 'whisper-large-v3');
               formData.append('language', 'fa');
               formData.append('response_format', 'json');

               progressFill.style.width = '60%';
               progressText.textContent = 'در حال تبدیل صدا به متن...';

               const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
                   method: 'POST',
                   headers: {
                       'Authorization': \`Bearer \${apiKey}\`
                   },
                   body: formData
               });

               progressFill.style.width = '90%';

               if (!response.ok) {
                   const errorData = await response.json().catch(() => ({}));
                   throw new Error(errorData.error?.message || \`خطای سرور: \${response.status}\`);
               }

               const data = await response.json();

               progressFill.style.width = '100%';
               progressText.textContent = 'تکمیل شد!';

               resultText.textContent = data.text || 'متنی یافت نشد';
               resultSection.classList.add('show');

           } catch (error) {
               showError('خطا در تبدیل: ' + error.message);
           } finally {
               convertBtn.disabled = false;
               convertBtn.textContent = 'شروع تبدیل';
               
               setTimeout(() => {
                   progressSection.classList.remove('show');
               }, 1000);
           }
       });

       copyBtn.addEventListener('click', async () => {
           try {
               await navigator.clipboard.writeText(resultText.textContent);
               copyBtn.textContent = '✓ کپی شد';
               setTimeout(() => {
                   copyBtn.textContent = 'کپی';
               }, 2000);
           } catch {
               showError('خطا در کپی کردن متن');
           }
       });

       function formatFileSize(bytes) {
           if (bytes === 0) return '0 Bytes';
           const k = 1024;
           const sizes = ['Bytes', 'KB', 'MB', 'GB'];
           const i = Math.floor(Math.log(bytes) / Math.log(k));
           return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
       }

       function showError(message) {
           errorMessage.textContent = message;
           errorMessage.classList.add('show');
       }

       function hideError() {
           errorMessage.classList.remove('show');
       }
   <\/script>

`,className:"w-html-embed"})}),S=o=>{const{origin:t,pathname:a,search:r}=new URL(o);return`${t}${a}${r}`},E=l.memo(({pageKey:o,system:t})=>e.jsx(z,{system:t},o),(o,t)=>o.pageKey===t.pageKey),k=({data:o})=>{const{system:t,resources:a,url:r,pageMeta:n}=o,p=S(r),c=l.useMemo(()=>({imageLoader:i,assetBaseUrl:s,resources:a,breakpoints:h,onError:console.error}),[a]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(g.Provider,{value:r,children:e.jsx(E,{pageKey:p,system:t})}),e.jsx(m,{url:r,pageMeta:n,siteName:d,imageLoader:i,assetBaseUrl:s}),e.jsx(f,{children:n.title})]})},B=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),I=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${s}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:I},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-11/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:B}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-11/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{j as configValuesSerialized};
