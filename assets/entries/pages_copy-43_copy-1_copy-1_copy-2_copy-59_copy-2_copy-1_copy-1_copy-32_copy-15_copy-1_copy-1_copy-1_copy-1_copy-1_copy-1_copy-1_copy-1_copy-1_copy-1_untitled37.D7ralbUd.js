import{j as e,r as c,a as s,i as o,R as u,b as g,P as m,c as y,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],T=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سیستم ورود با تشخیص چهره</title>
    <style>
        :root {
            --primary: #00f2fe;
            --secondary: #4facfe;
            --bg: #0f172a;
            --text: #f8fafc;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow: hidden;
        }

        .container {
            width: 90%;
            max-width: 450px;
            background: rgba(30, 41, 59, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 20px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }

        h1 {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: var(--primary);
        }

        .video-wrapper {
            position: relative;
            width: 100%;
            aspect-ratio: 1;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid var(--secondary);
            margin-bottom: 20px;
            background: #000;
        }

        #video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scaleX(-1);
        }

        .scanner-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--primary);
            box-shadow: 0 0 15px var(--primary);
            animation: scan 3s infinite linear;
            display: none;
            z-index: 10;
        }

        @keyframes scan {
            0% { top: 0; }
            50% { top: 100%; }
            100% { top: 0; }
        }

        .controls {
            display: grid;
            gap: 12px;
        }

        button {
            padding: 12px 24px;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .btn-register {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
        }

        .btn-login {
            background: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 242, 254, 0.3);
        }

        button:active {
            transform: translateY(0);
        }

        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .status {
            margin-top: 15px;
            font-size: 0.9rem;
            min-height: 1.2em;
        }

        .hidden {
            display: none;
        }

        #success-screen {
            padding: 20px;
        }

        .avatar-emoji {
            font-size: 5rem;
            display: block;
            margin-bottom: 15px;
        }

        /* بخش‌های تزیینی */
        .tech-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 110%;
            height: 110%;
            border: 2px dashed var(--secondary);
            border-radius: 50%;
            animation: rotate 20s infinite linear;
            pointer-events: none;
        }

        @keyframes rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
    </style>



    <div class="container" id="auth-app">
        <div id="login-section">
            <h1>🛡️ سیستم احراز هویت هوشمند</h1>
            
            <div class="video-wrapper">
                <div class="tech-ring"></div>
                <div class="scanner-line" id="scanner"></div>
                <video id="video" autoplay="" playsinline="" muted=""></video>
            </div>

            <div class="controls">
                <button class="btn-register" id="btn-register">ثبت چهره جدید 👤</button>
                <button class="btn-login" id="btn-login">ورود با چهره 🔍</button>
            </div>

            <div class="status" id="status">لطفاً دسترسی به دوربین را تایید کنید.</div>
        </div>

        <div id="success-screen" class="hidden">
            <span class="avatar-emoji">🔓</span>
            <h2 style="color: var(--primary);">خوش آمدید!</h2>
            <p>هویت شما با موفقیت تایید شد.</p>
            <button class="btn-login" onclick="resetApp()">خروج از حساب</button>
        </div>
    </div>

    <!-- Canvas مخفی برای پردازش تصویر -->
    <canvas id="canvas" class="hidden" width="100" height="100"></canvas>

    <script>
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const scanner = document.getElementById('scanner');
        const statusText = document.getElementById('status');
        const btnRegister = document.getElementById('btn-register');
        const btnLogin = document.getElementById('btn-login');
        const loginSection = document.getElementById('login-section');
        const successScreen = document.getElementById('success-screen');

        let registeredFaceData = null;

        // راه‌اندازی دوربین
        async function initCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                video.srcObject = stream;
                statusText.innerText = "آماده اسکن...";
            } catch (err) {
                statusText.innerText = "خطا: دسترسی به دوربین امکان‌پذیر نیست.";
                btnRegister.disabled = true;
                btnLogin.disabled = true;
            }
        }

        // استخراج ویژگی‌های ساده تصویر (شبیه‌سازی تشخیص چهره)
        // در محیط واقعی از کتابخانه‌هایی مثل Face-api.js استفاده می‌شود
        function extractFaceFeatures() {
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, 100, 100);
            const imageData = ctx.getImageData(0, 0, 100, 100).data;
            
            // ما اینجا یک اثر انگشت رنگی/نوری ساده از تصویر می‌سازیم
            let features = [];
            for (let i = 0; i < imageData.length; i += 40) { // نمونه‌برداری پراکنده
                features.push(imageData[i], imageData[i+1], imageData[i+2]);
            }
            return features;
        }

        // مقایسه دو چهره
        function compareFaces(face1, face2) {
            if (!face1 || !face2) return 0;
            let diff = 0;
            for (let i = 0; i < face1.length; i++) {
                diff += Math.abs(face1[i] - face2[i]);
            }
            // هرچه اختلاف کمتر باشد، شباهت بیشتر است
            const maxDiff = face1.length * 255;
            return (1 - diff / (maxDiff * 0.1)) * 100; // ضریب حساسیت
        }

        // عملیات ثبت چهره
        btnRegister.addEventListener('click', () => {
            scanner.style.display = 'block';
            statusText.innerText = "در حال آنالیز چهره...";
            btnRegister.disabled = true;

            setTimeout(() => {
                registeredFaceData = extractFaceFeatures();
                scanner.style.display = 'none';
                statusText.innerText = "چهره شما با موفقیت ثبت شد! ✅";
                btnRegister.disabled = false;
                btnRegister.innerText = "بروزرسانی چهره 🔄";
            }, 2000);
        });

        // عملیات ورود
        btnLogin.addEventListener('click', () => {
            if (!registeredFaceData) {
                statusText.innerText = "ابتدا باید چهره خود را ثبت کنید! ⚠️";
                return;
            }

            scanner.style.display = 'block';
            statusText.innerText = "در حال شناسایی...";
            btnLogin.disabled = true;

            setTimeout(() => {
                const currentFaceData = extractFaceFeatures();
                const similarity = compareFaces(registeredFaceData, currentFaceData);
                
                scanner.style.display = 'none';
                btnLogin.disabled = false;

                // در یک محیط واقعی، دقت بسیار بالاتر است
                // اینجا اگر شباهت بالای حد نصاب باشد تایید می‌کنیم
                if (similarity > 70) {
                    showSuccess();
                } else {
                    statusText.innerText = "چهره شناسایی نشد! مجدد تلاش کنید. ❌";
                }
            }, 2500);
        });

        function showSuccess() {
            loginSection.classList.add('hidden');
            successScreen.classList.remove('hidden');
        }

        function resetApp() {
            successScreen.classList.add('hidden');
            loginSection.classList.remove('hidden');
            statusText.innerText = "آماده اسکن...";
        }

        // شروع برنامه
        initCamera();

    <\/script>

`,className:"w-html-embed"})}),S=a=>{const{origin:t,pathname:i,search:n}=new URL(a);return`${t}${i}${n}`},j=c.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),P=({data:a})=>{const{system:t,resources:i,url:n,pageMeta:r}=a,l=S(n),p=c.useMemo(()=>({imageLoader:o,assetBaseUrl:s,resources:i,breakpoints:h,onError:console.error}),[i]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(g.Provider,{value:n,children:e.jsx(j,{pageKey:l,system:t})}),e.jsx(m,{url:n,pageMeta:r,siteName:d,imageLoader:o,assetBaseUrl:s}),e.jsx(y,{children:r.title})]})},F=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),k=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${s}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),T.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:k},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-43/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:F}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-43/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{R as configValuesSerialized};
