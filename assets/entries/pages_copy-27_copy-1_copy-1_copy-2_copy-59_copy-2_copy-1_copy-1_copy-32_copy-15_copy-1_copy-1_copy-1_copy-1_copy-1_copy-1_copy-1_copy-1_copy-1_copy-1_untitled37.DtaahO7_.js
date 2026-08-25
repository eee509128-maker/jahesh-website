import{j as e,r as c,a as s,i as n,R as m,b as y,P as u,c as h,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",j=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(f,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <title>سیستم مانیتورینگ چهره</title>
    <script defer="" src="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js"><\/script>
    <style>
        body { display: flex; flex-direction: column; align-items: center; background: #1a1a1a; color: white; font-family: Tahoma; }
        video, canvas { position: absolute; border-radius: 10px; }
        .container { position: relative; width: 640px; height: 480px; margin-top: 20px; }
        #status { margin-top: 20px; padding: 10px; font-size: 20px; font-weight: bold; }
        .warning { color: #ff4d4d; animation: blink 0.5s infinite; }
        @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
    </style>



    <h2>سیستم هوشمند پایش نگاه</h2>
    <div id="status">در حال بارگذاری مدل‌ها...</div>
    
    <div class="container">
        <video id="video" width="640" height="480" autoplay="" muted=""></video>
        <canvas id="overlay"></canvas>
    </div>

    <audio id="alarm" src="https://www.soundjay.com/buttons/beep-01a.mp3" loop=""></audio>

    <script>
        const video = document.getElementById('video');
        const statusDiv = document.getElementById('status');
        const alarm = document.getElementById('alarm');

        // بارگذاری مدل‌های هوش مصنوعی
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights'),
            faceapi.nets.faceLandmark68Net.loadFromUri('https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights')
        ]).then(startVideo);

        function startVideo() {
            navigator.mediaDevices.getUserMedia({ video: {} })
                .then(stream => {
                    video.srcObject = stream;
                    statusDiv.innerText = "در حال آنالیز چهره...";
                })
                .catch(err => console.error("خطا در دسترسی به دوربین:", err));
        }

        video.addEventListener('play', () => {
            const canvas = document.getElementById('overlay');
            const displaySize = { width: video.width, height: video.height };
            faceapi.matchDimensions(canvas, displaySize);

            setInterval(async () => {
                const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                    .withFaceLandmarks();
                
                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

                if (detections.length === 0) {
                    triggerAlarm("چهره‌ای یافت نشد!");
                    return;
                }

                const landmarks = detections[0].landmarks;
                const nose = landmarks.getNose();
                const jawline = landmarks.getJawOutline();

                // منطق ساده برای تشخیص پایین نگاه کردن (مقایسه ارتفاع بینی نسبت به چانه)
                const noseTip = nose[6];
                const chin = jawline[8];

                if (noseTip.y > chin.y - 50) { // اگر نوک بینی خیلی به چانه نزدیک شود
                    triggerAlarm("لطفاً به جلو نگاه کنید!");
                } else {
                    stopAlarm();
                }
            }, 200);
        });

        function triggerAlarm(msg) {
            statusDiv.innerText = msg;
            statusDiv.className = "warning";
            alarm.play();
        }

        function stopAlarm() {
            statusDiv.innerText = "وضعیت عادی";
            statusDiv.className = "";
            alarm.pause();
        }
    <\/script>

`,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:i,search:o}=new URL(a);return`${t}${i}${o}`},b=c.memo(({pageKey:a,system:t})=>e.jsx(S,{system:t},a),(a,t)=>a.pageKey===t.pageKey),T=({data:a})=>{const{system:t,resources:i,url:o,pageMeta:r}=a,l=P(o),p=c.useMemo(()=>({imageLoader:n,assetBaseUrl:s,resources:i,breakpoints:v,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(y.Provider,{value:o,children:e.jsx(b,{pageKey:l,system:t})}),e.jsx(u,{url:o,pageMeta:r,siteName:d,imageLoader:n,assetBaseUrl:s}),e.jsx(h,{children:r.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),k=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${s}${x}`})}),j.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:k},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-27/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-27/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{F as configValuesSerialized};
