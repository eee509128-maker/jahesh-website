import{j as e,r as l,a as r,i as n,R as m,b as u,P as g,c as f,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],E=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سامانه پیشرفته پایش تمرکز و خواب‌آلودگی</title>
    <!-- فونت وزیر و آیکون‌های فونت‌awesome برای زیبایی بیشتر -->
    <link href="https://cdn.fontcdn.ir/Font/Persian/Vazir.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        :root {
            --primary: #00ff88;
            --primary-glow: rgba(0, 255, 136, 0.5);
            --danger: #ff4444;
            --danger-glow: rgba(255, 68, 68, 0.5);
            --warning: #ffaa00;
            --bg: #0f172a;
            --panel: #1e293b;
            --text-light: #e2e8f0;
            --text-muted: #94a3b8;
        }

        body {
            margin: 0;
            padding: 0 0 120px 0; /* فضای کافی برای دکمه‌های ثابت */
            font-family: 'Vazir', 'Segoe UI', Tahoma, sans-serif;
            background: radial-gradient(circle at 20% 20%, #1e293b, #0f172a);
            color: var(--text-light);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            box-sizing: border-box;
            transition: background-color 0.3s;
        }

        /* جلوه در هنگام آلارم */
        body.alarm-mode {
            background: radial-gradient(circle at 20% 20%, #440000, #220000);
            animation: bodyPulse 0.8s infinite alternate;
        }

        @keyframes bodyPulse {
            from { filter: brightness(1); }
            to { filter: brightness(1.2); }
        }

        .container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin-top: 20px;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2), 0 0 0 2px rgba(0, 255, 136, 0.1);
            background: #000;
            transition: box-shadow 0.3s;
        }

        .container.alarm {
            box-shadow: 0 20px 40px rgba(255, 68, 68, 0.4), 0 0 0 3px #ff4444;
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
            background: rgba(30, 41, 59, 0.8);
            backdrop-filter: blur(10px);
            margin-top: 10px;
            border-radius: 24px;
            box-sizing: border-box;
            border: 1px solid rgba(255,255,255,0.05);
            box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        @media (max-width: 600px) {
            .dashboard {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 400px) {
            .dashboard {
                grid-template-columns: 1fr;
            }
        }

        .stat-card {
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(5px);
            padding: 15px 10px;
            border-radius: 20px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.1);
            border-bottom: 4px solid var(--primary);
            box-shadow: 0 4px 20px rgba(0, 255, 136, 0.2);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px var(--primary-glow);
        }

        .stat-card.alert {
            border-bottom-color: var(--danger);
            box-shadow: 0 4px 20px var(--danger-glow);
            animation: cardBlink 0.5s infinite alternate;
        }

        .stat-card.warning {
            border-bottom-color: var(--warning);
            box-shadow: 0 4px 20px rgba(255, 170, 0, 0.4);
        }

        @keyframes cardBlink {
            from { opacity: 1; }
            to { opacity: 0.7; }
        }

        .stat-label { 
            font-size: 0.85rem; 
            color: var(--text-muted); 
            margin-bottom: 8px;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        .stat-label i {
            font-size: 1rem;
            color: var(--primary);
        }

        .stat-value { 
            font-size: 1.3rem; 
            font-weight: 700;
            background: linear-gradient(135deg, #fff, #cbd5e0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }

        .controls {
            position: fixed;
            bottom: 20px;
            display: flex;
            gap: 15px;
            z-index: 200;
            background: rgba(0,0,0,0.3);
            backdrop-filter: blur(10px);
            padding: 10px 20px;
            border-radius: 60px;
            border: 1px solid rgba(255,255,255,0.1);
        }

        button {
            padding: 14px 30px;
            border-radius: 40px;
            border: none;
            cursor: pointer;
            font-weight: 700;
            font-size: 1.1rem;
            font-family: 'Vazir', sans-serif;
            transition: 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .btn-start {
            background: linear-gradient(145deg, var(--primary), #00cc66);
            color: #000;
        }
        .btn-start:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px var(--primary-glow);
        }

        .btn-stop {
            background: linear-gradient(145deg, var(--danger), #cc0000);
            color: white;
        }
        .btn-stop:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px var(--danger-glow);
        }

        #overlay-msg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 0, 0, 0.85);
            backdrop-filter: blur(5px);
            padding: 25px 50px;
            border-radius: 80px;
            font-size: 2.5rem;
            font-weight: 900;
            display: none;
            z-index: 100;
            white-space: nowrap;
            border: 2px solid #ff8888;
            box-shadow: 0 0 60px red;
            letter-spacing: 2px;
            color: white;
            text-shadow: 0 0 20px darkred;
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
            backdrop-filter: blur(10px);
        }

        .spinner {
            width: 60px;
            height: 60px;
            border: 6px solid rgba(255,255,255,0.1);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            box-shadow: 0 0 30px var(--primary-glow);
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* نوار پیشرفت خمیازه */
        .progress-bar {
            width: 100%;
            height: 6px;
            background: #2d3748;
            margin-top: 8px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: inset 0 1px 3px #000;
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--warning), #ffcc00);
            width: 0%;
            transition: width 0.2s;
            box-shadow: 0 0 10px #ffcc00;
        }

        /* گراف نمره هوشیاری */
        .score-graph {
            width: 100%;
            height: 6px;
            background: #2d3748;
            margin-top: 8px;
            border-radius: 10px;
            overflow: hidden;
        }
        .score-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), #00ffff);
            width: 100%;
            transition: width 0.2s;
            box-shadow: 0 0 10px cyan;
        }

        /* انیمیشن‌های اضافی */
        .glow-text {
            animation: textGlow 2s infinite alternate;
        }

        @keyframes textGlow {
            from { text-shadow: 0 0 5px white; }
            to { text-shadow: 0 0 20px var(--primary); }
        }
    </style>



    <div id="loading" class="loading-screen">
        <div class="spinner"></div>
        <p style="margin-top: 20px; font-size: 1.3rem;">در حال بارگذاری هوش مصنوعی...</p>
    </div>

    <div class="container" id="container">
        <div id="overlay-msg">⚠️ هشدار! عدم تمرکز ⚠️</div>
        <video id="video" autoplay="" playsinline=""></video>
        <canvas id="canvas"></canvas>
    </div>

    <div class="dashboard">
        <div class="stat-card" id="face-status">
            <div class="stat-label"><i class="fas fa-face-smile"></i> وضعیت چهره</div>
            <div class="stat-value">جستجو...</div>
        </div>
        <div class="stat-card" id="eye-status">
            <div class="stat-label"><i class="fas fa-eye"></i> وضعیت چشم‌ها</div>
            <div class="stat-value">نامشخص</div>
        </div>
        <div class="stat-card" id="head-status">
            <div class="stat-label"><i class="fas fa-user"></i> زاویه سر</div>
            <div class="stat-value">طبیعی</div>
        </div>
        <div class="stat-card" id="mouth-status">
            <div class="stat-label"><i class="fas fa-mouth"></i> وضعیت دهان</div>
            <div class="stat-value">بسته</div>
            <div class="progress-bar"><div id="mouth-progress" class="progress-fill"></div></div>
        </div>
        <div class="stat-card" id="gaze-status">
            <div class="stat-label"><i class="fas fa-arrows-up-down"></i> جهت نگاه</div>
            <div class="stat-value">جلو</div>
        </div>
        <div class="stat-card" id="score-card">
            <div class="stat-label"><i class="fas fa-chart-line"></i> نمره هوشیاری</div>
            <div class="stat-value">100%</div>
            <div class="score-graph"><div id="score-fill" class="score-fill" style="width: 100%;"></div></div>
        </div>
    </div>

    <div class="controls">
        <button class="btn-start" onclick="startApp()"><i class="fas fa-play"></i> شروع پایش</button>
        <button class="btn-stop" onclick="stopApp()"><i class="fas fa-stop"></i> توقف</button>
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
        const containerDiv = document.getElementById('container');
        
        // UI Elements
        const faceStatus = document.querySelector('#face-status .stat-value');
        const eyeStatus = document.querySelector('#eye-status .stat-value');
        const headStatus = document.querySelector('#head-status .stat-value');
        const mouthStatus = document.querySelector('#mouth-status .stat-value');
        const gazeStatus = document.querySelector('#gaze-status .stat-value');
        const scoreValue = document.querySelector('#score-card .stat-value');
        const mouthProgress = document.getElementById('mouth-progress');
        const scoreFill = document.getElementById('score-fill');

        // متغیرهای آژیر
        let audioCtx = null;
        let alarmOscillator = null;
        let isAlarming = false;

        let faceMissingFrames = 0;
        let score = 100;
        let yawnFrames = 0;         // شمارنده فریم‌های خمیازه
        const YAWN_THRESHOLD = 0.5;  // آستانه نسبت باز بودن دهان (MAR)
        const YAWN_CONSECUTIVE = 10; // تعداد فریم‌های متوالی برای تشخیص خمیازه

        // محاسبه نسبت باز بودن دهان (Mouth Aspect Ratio)
        function computeMAR(landmarks) {
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
            const leftIris = landmarks[468];
            const leftInner = landmarks[133];
            const leftOuter = landmarks[33];
            const rightIris = landmarks[473];
            const rightInner = landmarks[263];
            const rightOuter = landmarks[362];

            function getRelativeX(iris, inner, outer) {
                const eyeWidth = Math.abs(outer.x - inner.x);
                if (eyeWidth < 0.01) return 0.5;
                const irisPos = (iris.x - inner.x) / (outer.x - inner.x);
                return Math.max(0, Math.min(1, irisPos));
            }

            const leftRel = getRelativeX(leftIris, leftInner, leftOuter);
            const rightRel = getRelativeX(rightIris, rightInner, rightOuter);
            const avgRel = (leftRel + rightRel) / 2;

            if (avgRel < 0.35) return "چپ";
            if (avgRel > 0.65) return "راست";
            return "جلو";
        }

        // توابع آژیر صوتی
        function initAudio() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
        }

        function startSiren() {
            if (isAlarming) return;
            isAlarming = true;

            initAudio(); // اطمینان از وجود audioCtx

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

            // فعال‌سازی جلوه‌های بصری
            document.body.classList.add('alarm-mode');
            containerDiv.classList.add('alarm');
            overlayMsg.style.display = 'block';
        }

        function stopSiren() {
            if (!isAlarming) return;
            isAlarming = false;
            if (alarmOscillator) {
                alarmOscillator.stop();
                alarmOscillator.disconnect();
            }
            // غیرفعال کردن جلوه‌های بصری
            document.body.classList.remove('alarm-mode');
            containerDiv.classList.remove('alarm');
            overlayMsg.style.display = 'none';
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
                
                // رسم مش بافت چهره با رنگ‌های زیباتر
                drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, {color: '#00ff8840', lineWidth: 1});
                drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, {color: '#00ff88', lineWidth: 2});
                drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, {color: '#ff88ff', lineWidth: 2});
                drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, {color: '#88ff88', lineWidth: 2});
                drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, {color: '#88ff88', lineWidth: 2});
                drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, {color: '#ffff00', lineWidth: 2});
                drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, {color: '#ffff00', lineWidth: 2});

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

            // به‌روزرسانی نوار نمره و متن
            scoreValue.innerText = score + "%";
            scoreFill.style.width = score + "%";
            canvasCtx.restore();
        }

        const faceMesh = new FaceMesh({
            locateFile: (file) => \`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/\${file}\`
        });

        faceMesh.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,
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

        function startApp() {
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

`,className:"w-html-embed"})}),S=a=>{const{origin:t,pathname:o,search:s}=new URL(a);return`${t}${o}${s}`},k=l.memo(({pageKey:a,system:t})=>e.jsx(E,{system:t},a),(a,t)=>a.pageKey===t.pageKey),C=({data:a})=>{const{system:t,resources:o,url:s,pageMeta:i}=a,c=S(s),p=l.useMemo(()=>({imageLoader:n,assetBaseUrl:r,resources:o,breakpoints:y,onError:console.error}),[o]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(u.Provider,{value:s,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(g,{url:s,pageMeta:i,siteName:d,imageLoader:n,assetBaseUrl:r}),e.jsx(f,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),A=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${r}${v}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-35/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-35/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{j as configValuesSerialized};
