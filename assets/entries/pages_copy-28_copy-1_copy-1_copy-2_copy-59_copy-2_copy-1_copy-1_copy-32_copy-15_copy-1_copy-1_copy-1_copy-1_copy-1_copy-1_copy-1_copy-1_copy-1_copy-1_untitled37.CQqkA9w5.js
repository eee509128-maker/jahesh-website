import{j as e,r as l,a as n,i,R as p,b as m,P as g,c as y,d as v}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",E=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سیستم رصد چهره و چشم - نسخه حرفه‌ای</title>
    <script src="https://cdn.jsdelivr.net/npm/@vladmandic/face-api@latest/dist/face-api.js"><\/script>
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
            color: white;
        }
        .container {
            width: 100%;
            max-width: 900px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .video-container {
            position: relative;
            width: 100%;
            max-width: 640px;
            margin: 0 auto;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
            background: #000;
        }
        #video {
            width: 100%;
            height: auto;
            display: block;
        }
        #canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .status-panel {
            margin-top: 30px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 15px;
            padding: 20px;
        }
        .status-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            margin: 10px 0;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            font-size: clamp(0.9rem, 2vw, 1.1rem);
        }
        .status-value {
            font-weight: bold;
            padding: 8px 20px;
            border-radius: 20px;
            transition: all 0.3s ease;
        }
        .status-ok {
            background: #10b981;
        }
        .status-warning {
            background: #f59e0b;
            animation: pulse 1s infinite;
        }
        .status-error {
            background: #ef4444;
            animation: pulse 0.5s infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
        }
        .loading {
            text-align: center;
            padding: 40px;
            font-size: 1.3rem;
        }
        .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .alert-overlay {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(239, 68, 68, 0.95);
            padding: 40px 60px;
            border-radius: 20px;
            font-size: 2rem;
            font-weight: bold;
            display: none;
            z-index: 1000;
            box-shadow: 0 0 50px rgba(239, 68, 68, 0.8);
            animation: alertBounce 0.5s ease-out;
        }
        @keyframes alertBounce {
            0%, 20%, 50%, 80%, 100% { transform: translate(-50%, -50%) translateY(0); }
            40% { transform: translate(-50%, -50%) translateY(-20px); }
            60% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        .statistics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        .stat-box {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }
        .stat-value {
            font-size: 2rem;
            font-weight: bold;
            color: #fbbf24;
        }
        .stat-label {
            font-size: 0.9rem;
            opacity: 0.9;
            margin-top: 5px;
        }
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }
            .status-item {
                flex-direction: column;
                gap: 10px;
            }
        }
    </style>


    <div class="container">
        <h1>🎯 سیستم رصد چهره و چشم - نسخه حرفه‌ای</h1>
        
        <div class="loading" id="loading">
            <div class="spinner"></div>
            <p>در حال بارگذاری مدل‌های هوش مصنوعی...</p>
            <p style="font-size: 0.9rem; margin-top: 10px; opacity: 0.8;">لطفاً صبور باشید، این فرآیند ممکن است چند ثانیه طول بکشد</p>
        </div>

        <div class="video-container" style="display: none;" id="videoContainer">
            <video id="video" autoplay="" muted="" playsinline=""></video>
            <canvas id="canvas"></canvas>
        </div>

        <div class="status-panel" style="display: none;" id="statusPanel">
            <div class="status-item">
                <span>وضعیت چهره:</span>
                <span class="status-value status-ok" id="faceStatus">✅ شناسایی شد</span>
            </div>
            <div class="status-item">
                <span>وضعیت چشم‌ها:</span>
                <span class="status-value status-ok" id="eyeStatus">👀 باز</span>
            </div>
            <div class="status-item">
                <span>جهت نگاه:</span>
                <span class="status-value status-ok" id="gazeStatus">⬆️ مستقیم</span>
            </div>
            <div class="status-item">
                <span>زاویه سر:</span>
                <span class="status-value status-ok" id="angleStatus">📐 عادی</span>
            </div>

            <div class="statistics">
                <div class="stat-box">
                    <div class="stat-value" id="warningCount">0</div>
                    <div class="stat-label">تعداد هشدارها</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value" id="detectionRate">100%</div>
                    <div class="stat-label">نرخ تشخیص</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value" id="sessionTime">00:00</div>
                    <div class="stat-label">مدت نشست</div>
                </div>
            </div>
        </div>
    </div>

    <div class="alert-overlay" id="alertOverlay">
        ⚠️ هشدار: چشم‌ها شناسایی نشد!
    </div>

    <script>
        let warningCount = 0;
        let totalFrames = 0;
        let detectedFrames = 0;
        let sessionStartTime = Date.now();
        let isAlerting = false;
        let consecutiveIssues = 0;
        const ALERT_THRESHOLD = 3;
        
        // Audio context for alert sound
        let audioContext;
        
        function playAlertSound() {
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        }

        function showAlert(message) {
            const alertOverlay = document.getElementById('alertOverlay');
            alertOverlay.textContent = message;
            alertOverlay.style.display = 'block';
            playAlertSound();
            
            setTimeout(() => {
                alertOverlay.style.display = 'none';
            }, 2000);
        }

        function updateStatistics() {
            document.getElementById('warningCount').textContent = warningCount;
            
            const rate = totalFrames > 0 ? Math.round((detectedFrames / totalFrames) * 100) : 100;
            document.getElementById('detectionRate').textContent = rate + '%';
            
            const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            document.getElementById('sessionTime').textContent = 
                \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;
        }

        async function setupCamera() {
            const video = document.getElementById('video');
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: { ideal: 1280 },
                        height: { ideal: 720 },
                        facingMode: 'user'
                    },
                    audio: false
                });
                video.srcObject = stream;
                return new Promise((resolve) => {
                    video.onloadedmetadata = () => resolve(video);
                });
            } catch (err) {
                alert('خطا: دسترسی به دوربین امکان‌پذیر نیست. لطفاً مجوز دوربین را بررسی کنید.');
                throw err;
            }
        }

        function calculateEyeAspectRatio(eye) {
            const points = eye.map(p => [p.x, p.y]);
            
            const width = Math.sqrt(
                Math.pow(points[3][0] - points[0][0], 2) +
                Math.pow(points[3][1] - points[0][1], 2)
            );
            
            const height1 = Math.sqrt(
                Math.pow(points[1][0] - points[5][0], 2) +
                Math.pow(points[1][1] - points[5][1], 2)
            );
            
            const height2 = Math.sqrt(
                Math.pow(points[2][0] - points[4][0], 2) +
                Math.pow(points[2][1] - points[4][1], 2)
            );
            
            const ear = (height1 + height2) / (2.0 * width);
            return ear;
        }

        function calculateHeadPose(landmarks) {
            const nose = landmarks.getNose();
            const leftEye = landmarks.getLeftEye();
            const rightEye = landmarks.getRightEye();
            const mouth = landmarks.getMouth();
            
            const noseTop = nose[0];
            const noseBottom = nose[nose.length - 1];
            const leftEyeCenter = leftEye[0];
            const rightEyeCenter = rightEye[3];
            
            const verticalDiff = noseBottom.y - noseTop.y;
            const horizontalDiff = Math.abs(leftEyeCenter.x - rightEyeCenter.x);
            
            const mouthTop = mouth[0];
            const mouthBottom = mouth[6];
            const mouthVertical = mouthBottom.y - mouthTop.y;
            
            return {
                isLookingDown: verticalDiff < 20 || mouthVertical > 30,
                isLookingSideways: horizontalDiff < 50,
                headTilt: Math.abs(leftEyeCenter.y - rightEyeCenter.y)
            };
        }

        async function detectFaces() {
            const video = document.getElementById('video');
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            
            const displaySize = { width: video.videoWidth, height: video.videoHeight };
            faceapi.matchDimensions(canvas, displaySize);

            const faceStatusEl = document.getElementById('faceStatus');
            const eyeStatusEl = document.getElementById('eyeStatus');
            const gazeStatusEl = document.getElementById('gazeStatus');
            const angleStatusEl = document.getElementById('angleStatus');

            setInterval(async () => {
                totalFrames++;
                
                const detections = await faceapi
                    .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                    .withFaceLandmarks();

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                if (detections.length > 0) {
                    detectedFrames++;
                    const detection = detections[0];
                    const resizedDetections = faceapi.resizeResults(detections, displaySize);
                    
                    faceapi.draw.drawDetections(canvas, resizedDetections);
                    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

                    const landmarks = detection.landmarks;
                    const leftEye = landmarks.getLeftEye();
                    const rightEye = landmarks.getRightEye();

                    const leftEAR = calculateEyeAspectRatio(leftEye);
                    const rightEAR = calculateEyeAspectRatio(rightEye);
                    const avgEAR = (leftEAR + rightEAR) / 2;

                    const headPose = calculateHeadPose(landmarks);

                    let hasIssue = false;
                    let issueMessage = '';

                    faceStatusEl.textContent = '✅ شناسایی شد';
                    faceStatusEl.className = 'status-value status-ok';

                    if (avgEAR < 0.15) {
                        eyeStatusEl.textContent = '⚠️ بسته / نامشخص';
                        eyeStatusEl.className = 'status-value status-error';
                        hasIssue = true;
                        issueMessage = '⚠️ هشدار: چشم‌ها شناسایی نشد یا بسته است!';
                    } else {
                        eyeStatusEl.textContent = '👀 باز';
                        eyeStatusEl.className = 'status-value status-ok';
                    }

                    if (headPose.isLookingDown) {
                        gazeStatusEl.textContent = '⬇️ پایین';
                        gazeStatusEl.className = 'status-value status-error';
                        hasIssue = true;
                        issueMessage = '⚠️ هشدار: سر شما پایین است!';
                    } else if (headPose.isLookingSideways) {
                        gazeStatusEl.textContent = '↔️ کناری';
                        gazeStatusEl.className = 'status-value status-warning';
                    } else {
                        gazeStatusEl.textContent = '⬆️ مستقیم';
                        gazeStatusEl.className = 'status-value status-ok';
                    }

                    if (headPose.headTilt > 15) {
                        angleStatusEl.textContent = '📐 کج';
                        angleStatusEl.className = 'status-value status-warning';
                    } else {
                        angleStatusEl.textContent = '📐 عادی';
                        angleStatusEl.className = 'status-value status-ok';
                    }

                    if (hasIssue) {
                        consecutiveIssues++;
                        if (consecutiveIssues >= ALERT_THRESHOLD && !isAlerting) {
                            isAlerting = true;
                            warningCount++;
                            showAlert(issueMessage);
                            setTimeout(() => { isAlerting = false; }, 2000);
                        }
                    } else {
                        consecutiveIssues = 0;
                    }

                } else {
                    faceStatusEl.textContent = '❌ یافت نشد';
                    faceStatusEl.className = 'status-value status-error';
                    eyeStatusEl.textContent = '❓ نامشخص';
                    eyeStatusEl.className = 'status-value status-error';
                    gazeStatusEl.textContent = '❓ نامشخص';
                    gazeStatusEl.className = 'status-value status-error';
                    angleStatusEl.textContent = '❓ نامشخص';
                    angleStatusEl.className = 'status-value status-error';
                    
                    consecutiveIssues++;
                    if (consecutiveIssues >= ALERT_THRESHOLD && !isAlerting) {
                        isAlerting = true;
                        warningCount++;
                        showAlert('⚠️ هشدار: چهره شناسایی نشد!');
                        setTimeout(() => { isAlerting = false; }, 2000);
                    }
                }

                updateStatistics();
            }, 100);
        }

        async function init() {
            try {
                await faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api@latest/model/');
                await faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api@latest/model/');
                
                document.getElementById('loading').style.display = 'none';
                document.getElementById('videoContainer').style.display = 'block';
                document.getElementById('statusPanel').style.display = 'block';
                
                await setupCamera();
                detectFaces();
                
                setInterval(updateStatistics, 1000);
            } catch (err) {
                console.error('خطا:', err);
                document.getElementById('loading').innerHTML = 
                    '<p style="color: #ef4444;">❌ خطا در بارگذاری. لطفاً صفحه را رفرش کنید.</p>';
            }
        }

        window.addEventListener('load', init);
    <\/script>

`,className:"w-html-embed"})}),b=a=>{const{origin:t,pathname:o,search:s}=new URL(a);return`${t}${o}${s}`},C=l.memo(({pageKey:a,system:t})=>e.jsx(S,{system:t},a),(a,t)=>a.pageKey===t.pageKey),k=({data:a})=>{const{system:t,resources:o,url:s,pageMeta:r}=a,c=b(s),u=l.useMemo(()=>({imageLoader:i,assetBaseUrl:n,resources:o,breakpoints:f,onError:console.error}),[o]);return e.jsxs(p.Provider,{value:u,children:[e.jsx(m.Provider,{value:s,children:e.jsx(C,{pageKey:c,system:t})}),e.jsx(g,{url:s,pageMeta:r,siteName:d,imageLoader:i,assetBaseUrl:n}),e.jsx(y,{children:r.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),z=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${n}${x}`})}),E.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-28/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-28/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{j as configValuesSerialized};
