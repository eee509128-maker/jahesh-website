import{j as e,r as l,a as r,i as s,R as u,b as f,P as m,c as g,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",h=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],z=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🎤 تبدیل صدا به متن با هوش مصنوعی</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Vazir', 'Iranian Sans', system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .glass-container {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 30px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width: 900px;
      padding: 40px;
      animation: slideUp 0.6s ease-out;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    h1 {
      color: #4a148c;
      font-size: 2.2em;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
    }

    h1 span {
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.2em;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 30px;
      font-size: 1.1em;
    }

    .upload-area {
      background: linear-gradient(135deg, #f5f7fa 0%, #e9ecf5 100%);
      border: 3px dashed #764ba2;
      border-radius: 25px;
      padding: 40px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 25px;
    }

    .upload-area:hover {
      border-color: #667eea;
      background: linear-gradient(135deg, #e9ecf5 0%, #dde2f0 100%);
      transform: scale(1.02);
    }

    .upload-area i {
      font-size: 4em;
      color: #764ba2;
      margin-bottom: 15px;
      display: block;
    }

    .upload-area p {
      font-size: 1.2em;
      color: #333;
      margin-bottom: 10px;
    }

    .upload-area small {
      color: #666;
      font-size: 0.9em;
    }

    .file-info {
      background: #e8f5e9;
      border-radius: 15px;
      padding: 15px;
      margin: 20px 0;
      display: none;
      animation: fadeIn 0.3s ease;
    }

    .file-info.show {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .file-details {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .file-icon {
      font-size: 2em;
    }

    .file-name {
      font-weight: bold;
      color: #2e7d32;
    }

    .file-size {
      color: #555;
      font-size: 0.9em;
    }

    .remove-file {
      background: none;
      border: none;
      color: #d32f2f;
      cursor: pointer;
      font-size: 1.5em;
      padding: 5px 10px;
      border-radius: 50%;
      transition: all 0.2s;
    }

    .remove-file:hover {
      background: #ffebee;
      transform: scale(1.1);
    }

    .btn-convert {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border: none;
      padding: 18px 40px;
      font-size: 1.3em;
      border-radius: 50px;
      cursor: pointer;
      width: 100%;
      font-weight: bold;
      transition: all 0.3s;
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .btn-convert:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
    }

    .btn-convert:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: linear-gradient(135deg, #999, #666);
    }

    .status-card {
      background: #f5f5f5;
      border-radius: 15px;
      padding: 15px;
      margin: 20px 0;
      display: flex;
      align-items: center;
      gap: 15px;
      border-right: 5px solid #764ba2;
    }

    .status-icon {
      font-size: 1.8em;
    }

    .status-text {
      color: #333;
      font-weight: 500;
    }

    .result-container {
      position: relative;
      margin-top: 25px;
    }

    .result-label {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      color: #4a148c;
      font-weight: bold;
      font-size: 1.1em;
    }

    #result {
      width: 100%;
      min-height: 250px;
      padding: 20px;
      border: 2px solid #e0e0e0;
      border-radius: 20px;
      font-size: 1.1em;
      line-height: 1.8;
      resize: vertical;
      background: #fafafa;
      transition: all 0.3s;
      direction: rtl;
    }

    #result:focus {
      border-color: #764ba2;
      outline: none;
      box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.1);
    }

    .copy-btn {
      position: absolute;
      left: 10px;
      bottom: 10px;
      background: white;
      border: 1px solid #764ba2;
      color: #764ba2;
      padding: 8px 20px;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 0.9em;
    }

    .copy-btn:hover {
      background: #764ba2;
      color: white;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 30px;
    }

    .feature-item {
      text-align: center;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 15px;
      font-size: 0.95em;
      color: #555;
    }

    .feature-item i {
      display: block;
      font-size: 2em;
      margin-bottom: 8px;
    }

    .loading {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #764ba2;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .error-message {
      background: #ffebee;
      color: #c62828;
      padding: 15px;
      border-radius: 15px;
      margin: 15px 0;
      display: none;
    }

    .error-message.show {
      display: block;
    }

    /* ایموجی‌ها به جای آیکون فونت */
    .icon-mic { font-size: 1.2em; }
    .icon-file { font-size: 1.5em; }
    .icon-success { color: #4caf50; }
    .icon-error { color: #f44336; }
  </style>



<div class="glass-container">
  <h1>
    <span>🎤</span>
    تبدیل صدا به متن
    <span>🤖</span>
  </h1>
  
  <div class="subtitle">
    با هوش مصنوعی Groq Whisper - پشتیبانی از فارسی
  </div>

  <!-- آپلود فایل -->
  <div class="upload-area" onclick="document.getElementById('audioFile').click()">
    <div class="icon-file">📁</div>
    <p>فایل صوتی خود را بکشید یا کلیک کنید</p>
    <small>mp3, wav, m4a, ogg, webm - حداکثر ۲۵ مگابایت</small>
  </div>

  <input type="file" id="audioFile" accept="audio/*" style="display: none">

  <!-- اطلاعات فایل انتخاب شده -->
  <div class="file-info" id="fileInfo">
    <div class="file-details">
      <span class="file-icon">🎵</span>
      <div>
        <div class="file-name" id="fileName">نام فایل</div>
        <div class="file-size" id="fileSize">حجم فایل</div>
      </div>
    </div>
    <button class="remove-file" onclick="removeFile()" title="حذف فایل">❌</button>
  </div>

  <!-- دکمه تبدیل -->
  <button class="btn-convert" id="btn" onclick="startTranscription()">
    <span>🎙️</span>
    شروع تبدیل به متن
  </button>

  <!-- وضعیت -->
  <div class="status-card" id="statusCard">
    <span class="status-icon">📌</span>
    <span class="status-text" id="status">آماده برای آپلود فایل</span>
  </div>

  <!-- خطاها -->
  <div class="error-message" id="errorMessage"></div>

  <!-- نتیجه -->
  <div class="result-container">
    <div class="result-label">
      <span>📝</span>
      متن استخراج شده:
    </div>
    <textarea id="result" placeholder="پس از تبدیل، متن اینجا نمایش داده می‌شود..." readonly=""></textarea>
    <button class="copy-btn" onclick="copyText()" id="copyBtn">📋 کپی متن</button>
  </div>

  <!-- ویژگی‌ها -->
  <div class="features">
    <div class="feature-item">
      <div>🎯</div>
      دقت بالا با Whisper
    </div>
    <div class="feature-item">
      <div>⚡</div>
      پردازش سریع
    </div>
    <div class="feature-item">
      <div>🌐</div>
      پشتیبانی از فارسی
    </div>
    <div class="feature-item">
      <div>🔒</div>
      امن و خصوصی
    </div>
  </div>
</div>

<script>
  // ==================== متغیرهای اصلی ====================
  const GROQ_API_KEY = "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";
  
  const fileInput = document.getElementById('audioFile');
  const fileInfo = document.getElementById('fileInfo');
  const fileName = document.getElementById('fileName');
  const fileSize = document.getElementById('fileSize');
  const statusEl = document.getElementById('status');
  const statusCard = document.getElementById('statusCard');
  const resultEl = document.getElementById('result');
  const btn = document.getElementById('btn');
  const errorMsg = document.getElementById('errorMessage');
  const copyBtn = document.getElementById('copyBtn');

  let selectedFile = null;

  // ==================== رویدادهای آپلود ====================
  fileInput.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
      selectedFile = e.target.files[0];
      displayFileInfo(selectedFile);
    }
  });

  // درگ و دراپ
  document.querySelector('.upload-area').addEventListener('dragover', (e) => {
    e.preventDefault();
    e.target.style.borderColor = '#667eea';
    e.target.style.background = '#e9ecf5';
  });

  document.querySelector('.upload-area').addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.target.style.borderColor = '#764ba2';
    e.target.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #e9ecf5 100%)';
  });

  document.querySelector('.upload-area').addEventListener('drop', (e) => {
    e.preventDefault();
    e.target.style.borderColor = '#764ba2';
    e.target.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #e9ecf5 100%)';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      selectedFile = files[0];
      fileInput.files = files;
      displayFileInfo(selectedFile);
    }
  });

  // ==================== توابع کمکی ====================
  function displayFileInfo(file) {
    fileName.textContent = file.name;
    const size = (file.size / (1024 * 1024)).toFixed(2);
    fileSize.textContent = \`\${size} مگابایت\`;
    fileInfo.classList.add('show');
    updateStatus('فایل آماده است. دکمه تبدیل را بزنید.', '📁');
    errorMsg.classList.remove('show');
  }

  function removeFile() {
    fileInput.value = '';
    selectedFile = null;
    fileInfo.classList.remove('show');
    updateStatus('آماده برای آپلود فایل', '📌');
  }

  function updateStatus(text, icon = '📌') {
    statusEl.textContent = text;
    statusCard.querySelector('.status-icon').textContent = icon;
  }

  function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.add('show');
    updateStatus('خطا در پردازش', '❌');
  }

  async function copyText() {
    if (resultEl.value) {
      try {
        await navigator.clipboard.writeText(resultEl.value);
        copyBtn.textContent = '✅ کپی شد!';
        setTimeout(() => {
          copyBtn.textContent = '📋 کپی متن';
        }, 2000);
      } catch (err) {
        alert('کپی با مشکل مواجه شد');
      }
    }
  }

  // ==================== تابع اصلی تبدیل ====================
  async function startTranscription() {
    // بررسی فایل
    if (!selectedFile) {
      showError('لطفاً ابتدا یک فایل صوتی انتخاب کنید');
      return;
    }

    // بررسی حجم
    if (selectedFile.size > 25 * 1024 * 1024) {
      showError('حجم فایل نباید بیشتر از ۲۵ مگابایت باشد');
      return;
    }

    // غیرفعال کردن دکمه
    btn.disabled = true;
    resultEl.value = '';
    errorMsg.classList.remove('show');
    
    // به‌روزرسانی وضعیت
    updateStatus('در حال آپلود و پردازش...', '⏳');
    btn.innerHTML = '<span class="loading"></span> در حال پردازش...';

    try {
      // آماده‌سازی FormData
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('model', 'whisper-large-v3');
      formData.append('language', 'fa');
      formData.append('response_format', 'text');

      // ارسال درخواست با timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 ثانیه

      const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${GROQ_API_KEY}\`
        },
        body: formData,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(\`خطای \${response.status}: \${errorText}\`);
      }

      const text = await response.text();
      
      // نمایش نتیجه
      resultEl.value = text.trim();
      updateStatus('تبدیل با موفقیت انجام شد!', '✅');
      
    } catch (error) {
      console.error('Error:', error);
      
      let errorMessage = '';
      if (error.name === 'AbortError') {
        errorMessage = 'زمان پردازش بیش از حد طولانی شد. لطفاً دوباره تلاش کنید.';
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'خطای اتصال به اینترنت یا سرور. لطفاً: \\n' +
                      '۱. اتصال اینترنت خود را بررسی کنید\\n' +
                      '۲. فایل HTML را روی یک سرور محلی اجرا کنید\\n' +
                      '۳. از افزونه CORS Unblock استفاده کنید';
      } else {
        errorMessage = error.message;
      }
      
      showError(errorMessage);
      resultEl.value = 'خطا در پردازش فایل. لطفاً دوباره تلاش کنید.';
    } finally {
      // فعال کردن دکمه
      btn.disabled = false;
      btn.innerHTML = '<span>🎙️</span> شروع تبدیل به متن';
    }
  }

  // تست اتصال در شروع
  window.addEventListener('load', () => {
    // بررسی CORS
    fetch('https://api.groq.com/openai/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': \`Bearer \${GROQ_API_KEY}\`
      }
    })
    .then(response => {
      if (response.ok) {
        updateStatus('اتصال به سرور برقرار است', '✅');
      }
    })
    .catch(err => {
      console.log('CORS test:', err);
      // این خطا در فایل لوکال طبیعی است
    });
  });
<\/script>


`,className:"w-html-embed"})})}),k=a=>{const{origin:t,pathname:i,search:o}=new URL(a);return`${t}${i}${o}`},E=l.memo(({pageKey:a,system:t})=>e.jsx(z,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:i,url:o,pageMeta:n}=a,c=k(o),p=l.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:i,breakpoints:y,onError:console.error}),[i]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(f.Provider,{value:o,children:e.jsx(E,{pageKey:c,system:t})}),e.jsx(m,{url:o,pageMeta:n,siteName:d,imageLoader:s,assetBaseUrl:r}),e.jsx(g,{children:n.title})]})},I=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${v}`})}),h.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},F=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),_={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-22/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-22/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:F}}};export{_ as configValuesSerialized};
