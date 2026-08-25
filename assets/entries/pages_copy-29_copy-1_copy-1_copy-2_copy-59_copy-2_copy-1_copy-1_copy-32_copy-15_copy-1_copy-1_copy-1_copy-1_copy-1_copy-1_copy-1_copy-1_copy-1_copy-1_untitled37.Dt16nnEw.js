import{j as e,r as l,a as o,i as n,R as m,b as u,P as y,c as g,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],E=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(v,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سامانه هوشمند پایش تمرکز و خواب‌آلودگی</title>
    <style>
        :root {
            --primary: #00ff88;
            --danger: #ff4444;
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
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            background: var(--panel);
            margin-top: 10px;
            border-radius: 15px;
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
            display: flex;
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
        <div class="stat-card" id="score-card">
            <div class="stat-label">نمره هوشیاری</div>
            <div class="stat-value">100%</div>
        </div>
    </div>

    <div class="controls">
        <button class="btn-start" onclick="startApp()">شروع پایش 👁️</button>
        <button class="btn-stop" onclick="stopApp()">توقف 🛑</button>
    </div>

    <!-- Scripts using MediaPipe via CDN -->
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
        const scoreValue = document.querySelector('#score-card .stat-value');

        let audioCtx = null;
        let alarmOscillator = null;
        let isAlarming = false;
        let faceMissingFrames = 0;
        let score = 100;

        // Initialize Web Audio for Siren
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

        function onResults(results) {
            // Resize canvas to match video
            canvasElement.width = videoElement.videoWidth;
            canvasElement.height = videoElement.videoHeight;

            canvasCtx.save();
            canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            
            if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
                faceMissingFrames = 0;
                faceStatus.innerText = "تشخیص داده شد ✅";
                faceStatus.parentElement.classList.remove('alert');

                const landmarks = results.multiFaceLandmarks[0];
                
                // Drawing face mesh for professional look
                drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, {color: '#C0C0C070', lineWidth: 1});

                // --- LOGIC: DETECT LOOKING DOWN ---
                // We compare the relative Y position of the Nose Tip (1) vs Ears (234, 454)
                const noseTip = landmarks[1];
                const leftEar = landmarks[234];
                const rightEar = landmarks[454];
                const midEarsY = (leftEar.y + rightEar.y) / 2;
                
                // If nose is significantly below the mid-ear line, head is tilted down
                const headPitch = noseTip.y - midEarsY;
                
                // --- LOGIC: EYE VISIBILITY (CLOSED EYES) ---
                // Simplified EAR (Eye Aspect Ratio) check
                const leftEyeTop = landmarks[159].y;
                const leftEyeBottom = landmarks[145].y;
                const leftEyeDist = Math.abs(leftEyeTop - leftEyeBottom);

                const rightEyeTop = landmarks[386].y;
                const rightEyeBottom = landmarks[374].y;
                const rightEyeDist = Math.abs(rightEyeTop - rightEyeBottom);

                let isLookingDown = headPitch > 0.08;
                let eyesClosed = (leftEyeDist < 0.012 && rightEyeDist < 0.012);

                // UI Update
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

                // --- ALARM TRIGGER ---
                if (isLookingDown || eyesClosed) {
                    score = Math.max(0, score - 2);
                    if (score < 50) startSiren();
                } else {
                    score = Math.min(100, score + 1);
                    if (score > 80) stopSiren();
                }

            } else {
                // Face not found
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
            locateFile: (file) => {
                return \`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/\${file}\`;
            }
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
            initAudio();
            loadingScreen.style.display = 'flex';
            camera.start().then(() => {
                loadingScreen.style.display = 'none';
            });
        }

        function stopApp() {
            camera.stop();
            stopSiren();
            faceStatus.innerText = "متوقف شد";
        }

        // Auto-load hide
        window.onload = () => {
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1000);
        };

    <\/script>

`,className:"w-html-embed"})}),w=a=>{const{origin:t,pathname:i,search:s}=new URL(a);return`${t}${i}${s}`},T=l.memo(({pageKey:a,system:t})=>e.jsx(S,{system:t},a),(a,t)=>a.pageKey===t.pageKey),k=({data:a})=>{const{system:t,resources:i,url:s,pageMeta:r}=a,d=w(s),p=l.useMemo(()=>({imageLoader:n,assetBaseUrl:o,resources:i,breakpoints:h,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(u.Provider,{value:s,children:e.jsx(T,{pageKey:d,system:t})}),e.jsx(y,{url:s,pageMeta:r,siteName:c,imageLoader:n,assetBaseUrl:o}),e.jsx(g,{children:r.title})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),A=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${o}${x}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),E.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),z={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-29/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-29/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{z as configValuesSerialized};
