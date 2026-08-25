import{j as e,r as l,a as n,i as o,R as u,b as m,P as g,c as y,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(v,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سامانه پیشرفته پایش تمرکز و خواب‌آلودگی</title>
    <style>
        :root {
            --primary: #00ff88;
            --danger: #ff4444;
            --warning: #ffaa00;
            --bg: #0f172a;
            --panel: #1e293b;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg);
            color: white;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
        }

        .container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin-top: 20px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            background: #000;
        }

        video {
            width: 100%;
            display: block;
            transform: scaleX(-1);
        }

        canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scaleX(-1);
            pointer-events: none;
        }

        .dashboard {
            width: 100%;
            max-width: 800px;
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            background: var(--panel);
            margin-top: 10px;
            border-radius: 15px;
            box-sizing: border-box;
        }

        .stat-card {
            background: rgba(255,255,255,0.05);
            padding: 10px;
            border-radius: 10px;
            text-align: center;
            border-bottom: 3px solid var(--primary);
        }

        .stat-card.alert {
            border-color: var(--danger);
            animation: blink 0.5s infinite alternate;
        }

        .stat-card.warning {
            border-color: var(--warning);
        }

        @keyframes blink {
            from { opacity: 1; }
            to { opacity: 0.5; }
        }

        .stat-label { font-size: 0.8rem; color: #94a3b8; margin-bottom: 5px; }
        .stat-value { font-size: 1.2rem; font-weight: bold; }

        .controls {
            position: fixed;
            bottom: 20px;
            display: flex;
            gap: 10px;
        }

        button {
            padding: 12px 25px;
            border-radius: 30px;
            border: none;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
            font-size: 1rem;
        }

        .btn-start { background: var(--primary); color: #000; }
        .btn-stop { background: var(--danger); color: white; }

        #overlay-msg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255,0,0,0.8);
            padding: 20px 40px;
            border-radius: 50px;
            font-size: 2rem;
            display: none;
            z-index: 100;
            white-space: nowrap;
        }

        .loading-screen {
            position: fixed;
            inset: 0;
            background: var(--bg);
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255,255,255,0.1);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* نوار پیشرفت برای خمیازه */
        .progress-bar {
            width: 100%;
            height: 5px;
            background: #333;
            margin-top: 5px;
            border-radius: 5px;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            background: var(--warning);
            width: 0%;
            transition: width 0.2s;
        }
    </style>



    <div id="loading" class="loading-screen">
        <div class="spinner"></div>
        <p>در حال بارگذاری هوش مصنوعی...</p>
    </div>

    <div class="container">
        <div id="overlay-msg">⚠️ هشدار! عدم تمرکز ⚠️</div>
        <video id="video" autoplay="" playsinline=""></video>
        <canvas id="canvas"></canvas>
    </div>

    <div class="dashboard">
        <div class="stat-card" id="face-status">
            <div class="stat-label">وضعیت چهره</div>
            <div class="stat-value">جستجو...</div>
        </div>
        <div class="stat-card" id="eye-status">
            <div class="stat-label">وضعیت چشم‌ها</div>
            <div class="stat-value">نامشخص</div>
        </div>
        <div class="stat-card" id="head-status">
            <div class="stat-label">زاویه سر</div>
            <div class="stat-value">طبیعی</div>
        </div>
        <div class="stat-card" id="mouth-status">
            <div class="stat-label">وضعیت دهان</div>
            <div class="stat-value">بسته</div>
            <div class="progress-bar"><div id="mouth-progress" class="progress-fill"></div></div>
        </div>
        <div class="stat-card" id="gaze-status">
            <div class="stat-label">جهت نگاه</div>
            <div class="stat-value">جلو</div>
        </div>
        <div class="stat-card" id="score-card">
            <div class="stat-label">نمره هوشیاری</div>
            <div class="stat-value">100%</div>
        </div>
    </div>

    <div class="controls">
        <button class="btn-start" onclick="startApp()">شروع پایش 👁️</button>
        <button class="btn-stop" onclick="stopApp()">توقف 🛑</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js" crossorigin="anonymous"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" crossorigin="anonymous"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" crossorigin="anonymous"><\/script>

    <script>
        const videoElement = document.getElementById('video');
        const canvasElement = document.getElementById('canvas');
        const canvasCtx = canvasElement.getContext('2d');
        const overlayMsg = document.getElementById('overlay-msg');
        const loadingScreen = document.getElementById('loading');
        
        // UI Elements
        const faceStatus = document.querySelector('#face-status .stat-value');
        const eyeStatus = document.querySelector('#eye-status .stat-value');
        const headStatus = document.querySelector('#head-status .stat-value');
        const mouthStatus = document.querySelector('#mouth-status .stat-value');
        const gazeStatus = document.querySelector('#gaze-status .stat-value');
        const scoreValue = document.querySelector('#score-card .stat-value');
        const mouthProgress = document.getElementById('mouth-progress');

        let audioCtx = null;
        let alarmOscillator = null;
        let isAlarming = false;
        let faceMissingFrames = 0;
        let score = 100;
        let yawnFrames = 0;         // شمارنده فریم‌های خمیازه
        const YAWN_THRESHOLD = 0.5;  // آستانه نسبت باز بودن دهان (MAR)
        const YAWN_CONSECUTIVE = 10; // تعداد فریم‌های متوالی برای تشخیص خمیازه

        // برای تشخیص جهت نگاه
        function estimateGaze(eyeLandmarks, irisIndex) {
            // این تابع ساده، موقعیت عنبیه را نسبت به گوشه‌های چشم تخمین می‌زند
            // برای پیاده‌سازی دقیق‌تر می‌توان از روش‌های پیچیده‌تر استفاده کرد
            return "جلو"; // placeholder
        }

        // محاسبه نسبت باز بودن دهان (Mouth Aspect Ratio)
        function computeMAR(landmarks) {
            // نقاط کلیدی دهان (بر اساس ایندکس‌های MediaPipe)
            // بالا و پایین لب داخلی: 13 (بالا) و 14 (پایین)
            // گوشه‌های لب: 61 (چپ) و 291 (راست)
            const upperLip = landmarks[13];
            const lowerLip = landmarks[14];
            const leftCorner = landmarks[61];
            const rightCorner = landmarks[291];

            const vertical = Math.hypot(upperLip.x - lowerLip.x, upperLip.y - lowerLip.y);
            const horizontal = Math.hypot(leftCorner.x - rightCorner.x, leftCorner.y - rightCorner.y);
            
            if (horizontal === 0) return 0;
            return vertical / horizontal;
        }

        // تشخیص جهت نگاه با استفاده از موقعیت عنبیه
        function detectGaze(landmarks) {
            // عنبیه چپ: 468 (مرکز) ; گوشه داخلی چشم چپ: 133 ; گوشه بیرونی: 33
            // عنبیه راست: 473 ; گوشه داخلی: 263 ; گوشه بیرونی: 362
            const leftIris = landmarks[468];
            const leftInner = landmarks[133];  // گوشه داخلی (نزدیک بینی)
            const leftOuter = landmarks[33];   // گوشه بیرونی

            const rightIris = landmarks[473];
            const rightInner = landmarks[263];
            const rightOuter = landmarks[362];

            // محاسبه موقعیت نسبی عنبیه در هر چشم
            function getRelativeX(iris, inner, outer) {
                // محدوده افقی از inner تا outer
                const eyeWidth = Math.abs(outer.x - inner.x);
                if (eyeWidth < 0.01) return 0.5;
                const irisPos = (iris.x - inner.x) / (outer.x - inner.x);
                return Math.max(0, Math.min(1, irisPos));
            }

            const leftRel = getRelativeX(leftIris, leftInner, leftOuter);
            const rightRel = getRelativeX(rightIris, rightInner, rightOuter);
            const avgRel = (leftRel + rightRel) / 2;

            // اگر عنبیه به چپ متمایل باشد (نسبت نزدیک به 0) یا راست (نزدیک به 1)
            if (avgRel < 0.35) return "چپ";
            if (avgRel > 0.65) return "راست";
            return "جلو";
        }

        function onResults(results) {
            canvasElement.width = videoElement.videoWidth;
            canvasElement.height = videoElement.videoHeight;

            canvasCtx.save();
            canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            
            if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
                faceMissingFrames = 0;
                faceStatus.innerText = "تشخیص داده شد ✅";
                faceStatus.parentElement.classList.remove('alert');

                const landmarks = results.multiFaceLandmarks[0];
                
                // رسم مش بافت چهره
                drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, {color: '#C0C0C070', lineWidth: 1});

                // --- تشخیص سر پایین ---
                const noseTip = landmarks[1];
                const leftEar = landmarks[234];
                const rightEar = landmarks[454];
                const midEarsY = (leftEar.y + rightEar.y) / 2;
                const headPitch = noseTip.y - midEarsY;
                const isLookingDown = headPitch > 0.08;

                // --- تشخیص بسته بودن چشم ---
                const leftEyeTop = landmarks[159].y;
                const leftEyeBottom = landmarks[145].y;
                const leftEyeDist = Math.abs(leftEyeTop - leftEyeBottom);
                const rightEyeTop = landmarks[386].y;
                const rightEyeBottom = landmarks[374].y;
                const rightEyeDist = Math.abs(rightEyeTop - rightEyeBottom);
                const eyesClosed = (leftEyeDist < 0.012 && rightEyeDist < 0.012);

                // --- تشخیص خمیازه (MAR) ---
                const mar = computeMAR(landmarks);
                const isYawning = mar > YAWN_THRESHOLD;
                if (isYawning) {
                    yawnFrames++;
                } else {
                    yawnFrames = Math.max(0, yawnFrames - 1);
                }
                const yawnDetected = yawnFrames > YAWN_CONSECUTIVE;
                
                // به‌روزرسانی نوار پیشرفت خمیازه
                let yawnProgress = Math.min(100, (yawnFrames / YAWN_CONSECUTIVE) * 100);
                mouthProgress.style.width = yawnProgress + "%";
                if (yawnDetected) {
                    mouthStatus.innerText = "خمیازه 🌪️";
                    mouthStatus.parentElement.classList.add('warning');
                } else if (isYawning) {
                    mouthStatus.innerText = "باز";
                    mouthStatus.parentElement.classList.remove('warning');
                } else {
                    mouthStatus.innerText = "بسته";
                    mouthStatus.parentElement.classList.remove('warning');
                }

                // --- تشخیص جهت نگاه ---
                const gazeDir = detectGaze(landmarks);
                gazeStatus.innerText = gazeDir;

                // --- به‌روزرسانی UI وضعیت سر و چشم ---
                if (isLookingDown) {
                    headStatus.innerText = "پایین ⬇️";
                    headStatus.parentElement.classList.add('alert');
                } else {
                    headStatus.innerText = "طبیعی ✅";
                    headStatus.parentElement.classList.remove('alert');
                }

                if (eyesClosed) {
                    eyeStatus.innerText = "بسته 😴";
                    eyeStatus.parentElement.classList.add('alert');
                } else {
                    eyeStatus.innerText = "باز ✅";
                    eyeStatus.parentElement.classList.remove('alert');
                }

                // --- منطق امتیاز و آژیر ---
                if (isLookingDown || eyesClosed || yawnDetected) {
                    score = Math.max(0, score - 2);
                    if (score < 50) startSiren();
                } else {
                    score = Math.min(100, score + 1);
                    if (score > 80) stopSiren();
                }

            } else {
                // چهره یافت نشد
                faceMissingFrames++;
                faceStatus.innerText = "غایب ❌";
                faceStatus.parentElement.classList.add('alert');
                
                if (faceMissingFrames > 30) {
                    score = Math.max(0, score - 5);
                    if (score < 30) startSiren();
                }
            }

            scoreValue.innerText = score + "%";
            canvasCtx.restore();
        }

        const faceMesh = new FaceMesh({
            locateFile: (file) => \`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/\${file}\`
        });

        faceMesh.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,  // برای تشخیص عنبیه و نقاط دقیق‌تر
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        faceMesh.onResults(onResults);

        const camera = new Camera(videoElement, {
            onFrame: async () => {
                await faceMesh.send({image: videoElement});
            },
            width: 640,
            height: 480
        });

        function initAudio() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
        }

        function startSiren() {
            if (isAlarming) return;
            isAlarming = true;
            
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'square';
            osc.frequency.setValueAtTime(440, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.5);
            osc.loop = true;

            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start();
            alarmOscillator = osc;
            
            overlayMsg.style.display = 'block';
            document.body.style.backgroundColor = '#440000';
        }

        function stopSiren() {
            if (!isAlarming) return;
            isAlarming = false;
            if (alarmOscillator) {
                alarmOscillator.stop();
                alarmOscillator.disconnect();
            }
            overlayMsg.style.display = 'none';
            document.body.style.backgroundColor = '#0f172a';
        }

        function startApp() {
            initAudio();
            loadingScreen.style.display = 'flex';
            camera.start()
                .then(() => {
                    loadingScreen.style.display = 'none';
                })
                .catch((err) => {
                    console.error(err);
                    loadingScreen.style.display = 'none';
                    alert('دوربین در دسترس نیست یا دسترسی داده نشده است.');
                });
        }

        function stopApp() {
            camera.stop();
            stopSiren();
            faceStatus.innerText = "متوقف شد";
            loadingScreen.style.display = 'none';
        }

        window.onload = () => {
            loadingScreen.style.display = 'none';
        };
    <\/script>

`,className:"w-html-embed"})}),E=a=>{const{origin:t,pathname:r,search:s}=new URL(a);return`${t}${r}${s}`},k=l.memo(({pageKey:a,system:t})=>e.jsx(S,{system:t},a),(a,t)=>a.pageKey===t.pageKey),T=({data:a})=>{const{system:t,resources:r,url:s,pageMeta:i}=a,d=E(s),p=l.useMemo(()=>({imageLoader:o,assetBaseUrl:n,resources:r,breakpoints:f,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:s,children:e.jsx(k,{pageKey:d,system:t})}),e.jsx(g,{url:s,pageMeta:i,siteName:c,imageLoader:o,assetBaseUrl:n}),e.jsx(y,{children:i.title})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),A=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${n}${x}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-32/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-32/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{R as configValuesSerialized};
