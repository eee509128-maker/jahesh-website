import{j as e,r as d,a as o,i as n,R as u,b as g,P as m,c as y,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=s=>e.jsx("body",{className:"w-element",children:e.jsx(b,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سیستم احراز هویت چهره</title>
    <script defer="" src="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js"><\/script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            width: 100%;
            max-width: 600px;
            overflow: hidden;
        }
        
        .header {
            background: #4f46e5;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .tabs {
            display: flex;
            background: #f3f4f6;
        }
        
        .tab {
            flex: 1;
            padding: 15px;
            border: none;
            background: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            color: #6b7280;
            transition: all 0.3s;
        }
        
        .tab.active {
            background: white;
            color: #4f46e5;
            border-bottom: 3px solid #4f46e5;
        }
        
        .content {
            padding: 30px;
        }
        
        .section {
            display: none;
        }
        
        .section.active {
            display: block;
        }
        
        .video-container {
            position: relative;
            width: 100%;
            height: 400px;
            background: #000;
            border-radius: 12px;
            overflow: hidden;
            margin: 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        video, canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .input-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            color: #374151;
            font-weight: 600;
        }
        
        input {
            width: 100%;
            padding: 12px;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        input:focus {
            outline: none;
            border-color: #4f46e5;
        }
        
        .btn {
            width: 100%;
            padding: 14px;
            background: #4f46e5;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
        }
        
        .btn:hover {
            background: #4338ca;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }
        
        .btn:disabled {
            background: #9ca3af;
            cursor: not-allowed;
            transform: none;
        }
        
        .status {
            margin-top: 15px;
            padding: 12px;
            border-radius: 8px;
            text-align: center;
            font-weight: 600;
            display: none;
        }
        
        .status.success {
            background: #d1fae5;
            color: #065f46;
            display: block;
        }
        
        .status.error {
            background: #fee2e2;
            color: #991b1b;
            display: block;
        }
        
        .status.info {
            background: #dbeafe;
            color: #1e40af;
            display: block;
        }
        
        .loading {
            display: none;
            text-align: center;
            color: #6b7280;
            margin: 20px 0;
        }
        
        .spinner {
            border: 4px solid #f3f4f6;
            border-top: 4px solid #4f46e5;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 10px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .users-list {
            margin-top: 20px;
            padding: 15px;
            background: #f9fafb;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }
        
        .users-list h3 {
            margin-bottom: 10px;
            color: #374151;
        }
        
        .user-item {
            padding: 8px;
            background: white;
            margin: 5px 0;
            border-radius: 6px;
            border-right: 4px solid #4f46e5;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .delete-btn {
            background: #ef4444;
            color: white;
            border: none;
            padding: 4px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        }
    </style>



<div class="container">
    <div class="header">
        <h1>🔐 سیستم ورود با تشخیص چهره</h1>
        <p style="margin-top: 8px; opacity: 0.9;">ثبت‌نام و ورود امن با استفاده از هوش مصنوعی</p>
    </div>
    
    <div class="tabs">
        <button class="tab active" onclick="switchTab('register')">📝 ثبت‌نام چهره</button>
        <button class="tab" onclick="switchTab('login')">🔓 ورود با چهره</button>
    </div>
    
    <div class="content">
        <!-- بخش ثبت‌نام -->
        <div id="register" class="section active">
            <div class="input-group">
                <label>نام کاربری:</label>
                <input type="text" id="username" placeholder="نام خود را وارد کنید">
            </div>
            
            <div class="loading" id="loading-register">
                <div class="spinner"></div>
                <p>در حال بارگذاری مدل‌های هوش مصنوعی...</p>
            </div>
            
            <div class="video-container" id="register-container">
                <video id="video-register" autoplay="" muted="" playsinline=""></video>
                <canvas id="canvas-register"></canvas>
                <div style="color: white; z-index: 10; text-align: center;" id="camera-msg">
                    لطفاً اجازه دسترسی به دوربین را بدهید
                </div>
            </div>
            
            <button class="btn" id="btn-register" onclick="registerFace()" disabled="">
                📸 ثبت چهره
            </button>
            
            <div id="status-register" class="status"></div>
            
            <div class="users-list" id="users-list" style="display: none;">
                <h3>👥 کاربران ثبت شده:</h3>
                <div id="users-container"></div>
            </div>
        </div>
        
        <!-- بخش ورود -->
        <div id="login" class="section">
            <div class="loading" id="loading-login">
                <div class="spinner"></div>
                <p>در حال آماده‌سازی دوربین...</p>
            </div>
            
            <div class="video-container" id="login-container">
                <video id="video-login" autoplay="" muted="" playsinline=""></video>
                <canvas id="canvas-login"></canvas>
                <div style="color: white; z-index: 10; text-align: center;" id="login-camera-msg">
                    دوربین خاموش است - روی دکمه کلیک کنید
                </div>
            </div>
            
            <button class="btn" onclick="startLogin()" id="btn-start-login">
                🎥 شروع اسکن چهره
            </button>
            
            <div id="status-login" class="status"></div>
        </div>
    </div>
</div>

<script>
    // تنظیمات Face-api
    const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.12/model';
    
    let modelsLoaded = false;
    let currentStream = null;
    let labeledFaceDescriptors = [];
    
    // بارگذاری مدل‌ها در شروع
    window.addEventListener('load', async () => {
        await loadModels();
        await updateUsersList();
    });
    
    async function loadModels() {
        try {
            document.getElementById('loading-register').style.display = 'block';
            
            await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
            await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
            await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
            
            modelsLoaded = true;
            document.getElementById('loading-register').style.display = 'none';
            document.getElementById('camera-msg').style.display = 'none';
            document.getElementById('btn-register').disabled = false;
            
            // استارت دوربین برای ثبت‌نام
            startVideo('video-register');
            
            showStatus('register', 'مدل‌ها بارگذاری شدند. آماده ثبت چهره هستید.', 'success');
        } catch (error) {
            showStatus('register', 'خطا در بارگذاری مدل‌ها: ' + error.message, 'error');
        }
    }
    
    function switchTab(tab) {
        // تغییر تب‌ها
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        
        event.target.classList.add('active');
        document.getElementById(tab).classList.add('active');
        
        // متوقف کردن استریم قبلی
        if (currentStream) {
            currentStream.getTracks().forEach(track => track.stop());
            currentStream = null;
        }
        
        // استارت دوربین برای تب فعال
        if (tab === 'register') {
            startVideo('video-register');
        }
    }
    
    async function startVideo(videoElementId) {
        try {
            const video = document.getElementById(videoElementId);
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: "user", width: 640, height: 480 } 
            });
            
            video.srcObject = stream;
            currentStream = stream;
            
            // مخفی کردن پیام دوربین
            const msgId = videoElementId === 'video-register' ? 'camera-msg' : 'login-camera-msg';
            document.getElementById(msgId).style.display = 'none';
            
        } catch (err) {
            showStatus(videoElementId === 'video-register' ? 'register' : 'login', 
                      'دسترسی به دوربین داده نشد: ' + err.message, 'error');
        }
    }
    
    async function registerFace() {
        if (!modelsLoaded) {
            showStatus('register', 'لطفاً صبر کنید تا مدل‌ها بارگذاری شوند', 'error');
            return;
        }
        
        const username = document.getElementById('username').value.trim();
        if (!username) {
            showStatus('register', 'لطفاً نام کاربری را وارد کنید', 'error');
            return;
        }
        
        const video = document.getElementById('video-register');
        const canvas = document.getElementById('canvas-register');
        
        // تشخیص چهره
        const detection = await faceapi.detectSingleFace(video)
            .withFaceLandmarks()
            .withFaceDescriptor();
        
        if (!detection) {
            showStatus('register', 'چهره‌ای شناسایی نشد! لطفاً صورت خود را جلوی دوربین بگیرید', 'error');
            return;
        }
        
        // رسم مستطیل دور چهره
        const dims = faceapi.matchDimensions(canvas, video, true);
        const resizedDetection = faceapi.resizeResults(detection, dims);
        faceapi.draw.drawDetections(canvas, resizedDetection);
        
        // ذخیره در localStorage
        const faceData = {
            username: username,
            descriptor: Array.from(detection.descriptor),
            timestamp: new Date().toISOString()
        };
        
        // دریافت لیست قبلی
        let users = JSON.parse(localStorage.getItem('faceUsers') || '[]');
        
        // بررسی تکراری نبودن
        const existingIndex = users.findIndex(u => u.username === username);
        if (existingIndex >= 0) {
            users[existingIndex] = faceData;
            showStatus('register', \`چهره "\${username}" بروزرسانی شد!\`, 'success');
        } else {
            users.push(faceData);
            showStatus('register', \`چهره "\${username}" با موفقیت ثبت شد!\`, 'success');
        }
        
        localStorage.setItem('faceUsers', JSON.stringify(users));
        await updateUsersList();
        
        // پاک کردن canvas بعد از 2 ثانیه
        setTimeout(() => {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 2000);
    }
    
    async function updateUsersList() {
        const users = JSON.parse(localStorage.getItem('faceUsers') || '[]');
        const container = document.getElementById('users-container');
        const listSection = document.getElementById('users-list');
        
        if (users.length === 0) {
            listSection.style.display = 'none';
            return;
        }
        
        listSection.style.display = 'block';
        container.innerHTML = users.map(u => \`
            <div class="user-item">
                <span>\${u.username}</span>
                <button class="delete-btn" onclick="deleteUser('\${u.username}')">حذف</button>
            </div>
        \`).join('');
    }
    
    function deleteUser(username) {
        let users = JSON.parse(localStorage.getItem('faceUsers') || '[]');
        users = users.filter(u => u.username !== username);
        localStorage.setItem('faceUsers', JSON.stringify(users));
        updateUsersList();
        showStatus('register', \`کاربر "\${username}" حذف شد\`, 'info');
    }
    
    async function startLogin() {
        document.getElementById('loading-login').style.display = 'block';
        document.getElementById('btn-start-login').disabled = true;
        
        await startVideo('video-login');
        
        // شروع تشخیص
        setTimeout(() => attemptLogin(), 1000);
    }
    
    async function attemptLogin() {
        const video = document.getElementById('video-login');
        const canvas = document.getElementById('canvas-login');
        const users = JSON.parse(localStorage.getItem('faceUsers') || '[]');
        
        if (users.length === 0) {
            showStatus('login', 'هیچ کاربری ثبت نشده است!', 'error');
            document.getElementById('loading-login').style.display = 'none';
            return;
        }
        
        // ایجاد LabeledFaceDescriptors از داده‌های ذخیره شده
        const labeledDescriptors = users.map(u => {
            return new faceapi.LabeledFaceDescriptors(
                u.username,
                [new Float32Array(u.descriptor)]
            );
        });
        
        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
        
        // تشخیص چهره در ویدیو
        const detection = await faceapi.detectSingleFace(video)
            .withFaceLandmarks()
            .withFaceDescriptor();
        
        if (detection) {
            const dims = faceapi.matchDimensions(canvas, video, true);
            const resizedDetection = faceapi.resizeResults(detection, dims);
            
            const result = faceMatcher.findBestMatch(detection.descriptor);
            
            // رسم نتیجه
            const box = resizedDetection.detection.box;
            const drawBox = new faceapi.draw.DrawBox(box, { 
                label: result.toString(),
                boxColor: result.label === 'unknown' ? 'red' : 'green'
            });
            drawBox.draw(canvas);
            
            if (result.label !== 'unknown') {
                showStatus('login', \`✅ خوش آمدید \${result.label}! شناسایی با اطمینان \${(1 - result.distance).toFixed(2)}\`, 'success');
                
                // اینجا می‌توانید به صفحه اکانت کاربر منتقل شوید
                setTimeout(() => {
                    alert(\`ورود موفق! منتقل شدن به داشبورد \${result.label}\`);
                    // window.location.href = '/dashboard';
                }, 1500);
            } else {
                showStatus('login', '❌ چهره شناسایی نشد! لطفاً دوباره تلاش کنید', 'error');
                // تلاش مجدد بعد از 2 ثانیه
                setTimeout(() => {
                    const ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    attemptLogin();
                }, 2000);
            }
        } else {
            // اگر چهره‌ای نیست، دوباره چک کن
            requestAnimationFrame(attemptLogin);
        }
        
        document.getElementById('loading-login').style.display = 'none';
    }
    
    function showStatus(section, message, type) {
        const statusEl = document.getElementById(\`status-\${section}\`);
        statusEl.textContent = message;
        statusEl.className = \`status \${type}\`;
        
        setTimeout(() => {
            statusEl.style.display = 'none';
        }, 5000);
    }
<\/script>



`,className:"w-html-embed"})}),E=s=>{const{origin:t,pathname:i,search:a}=new URL(s);return`${t}${i}${a}`},k=d.memo(({pageKey:s,system:t})=>e.jsx(S,{system:t},s),(s,t)=>s.pageKey===t.pageKey),I=({data:s})=>{const{system:t,resources:i,url:a,pageMeta:r}=s,l=E(a),p=d.useMemo(()=>({imageLoader:n,assetBaseUrl:o,resources:i,breakpoints:v,onError:console.error}),[i]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(g.Provider,{value:a,children:e.jsx(k,{pageKey:l,system:t})}),e.jsx(m,{url:a,pageMeta:r,siteName:c,imageLoader:n,assetBaseUrl:o}),e.jsx(y,{children:r.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),L=({})=>{const s={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${o}${h}`})}),x.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},U=Object.freeze(Object.defineProperty({__proto__:null,Head:L},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-39/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-39/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:U}}};export{F as configValuesSerialized};
