import{j as e,r as l,a as o,i as r,R as p,b as g,P as m,c as f,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],P=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],T=n=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل فایل صوتی به متن | نسخه ساده و پایدار</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;700&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Vazirmatn', sans-serif;
        }
        body {
            background: #0a0a1a;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }
        .card {
            max-width: 700px;
            width: 100%;
            background: #16122a;
            border-radius: 2rem;
            padding: 2rem;
            border: 1px solid #6d4aff;
            box-shadow: 0 0 40px #6236ff;
        }
        h1 {
            color: white;
            text-align: center;
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        .upload-box {
            background: #221d3a;
            border-radius: 2rem;
            padding: 1.5rem;
            text-align: center;
            border: 2px dashed #8a6aff;
            margin-bottom: 1.5rem;
            cursor: pointer;
        }
        .upload-box i {
            font-size: 3rem;
            color: #ffaa33;
            margin-bottom: 0.5rem;
        }
        .upload-box p {
            color: #ccc;
        }
        #fileInput {
            display: none;
        }
        .file-info {
            background: #2a2440;
            padding: 0.8rem;
            border-radius: 2rem;
            color: white;
            text-align: center;
            margin-bottom: 1rem;
        }
        .lang-btns {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-bottom: 1.5rem;
        }
        .lang-btn {
            background: #2a2440;
            border: 2px solid #5f4b9e;
            border-radius: 2rem;
            padding: 0.5rem 2rem;
            color: white;
            cursor: pointer;
        }
        .lang-btn.active {
            background: #7d4aff;
            border-color: #ffbb33;
        }
        .controls {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
        }
        .btn {
            background: #4a2f8a;
            border: none;
            border-radius: 2rem;
            padding: 0.8rem 2rem;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid #9b7aff;
        }
        .btn:disabled {
            opacity: 0.3;
            pointer-events: none;
        }
        .btn-green {
            background: #1f8a5c;
        }
        .progress {
            height: 10px;
            background: #2a2440;
            border-radius: 5px;
            margin: 1rem 0;
            overflow: hidden;
        }
        .progress-bar {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #8a6aff, #ff66aa);
            transition: width 0.3s;
        }
        .status {
            color: #b9adff;
            text-align: center;
            margin: 1rem 0;
            padding: 0.5rem;
        }
        .result {
            background: #0d0b18;
            border-radius: 1.5rem;
            padding: 1.5rem;
            min-height: 150px;
            max-height: 300px;
            overflow-y: auto;
            border: 1px solid #7d5fff;
            color: white;
            line-height: 1.7;
            white-space: pre-wrap;
            margin-top: 1rem;
        }
        .note {
            margin-top: 1rem;
            color: #a99cd9;
            font-size: 0.9rem;
            display: flex;
            gap: 10px;
            background: #221d36;
            padding: 1rem;
            border-radius: 2rem;
        }
        #audioPlayer {
            display: none;
        }
    </style>


    <div class="card">
        <h1><i class="fas fa-microphone"></i> تبدیل صدا به متن</h1>
        
        <div onclick="document.getElementById('fileInput').click()" class="upload-box">
            <i class="fas fa-cloud-upload-alt"></i>
            <p>برای آپلود کلیک کن</p>
        </div>
        <input type="file" id="fileInput" accept="audio/*">
        
        <div class="file-info" id="fileInfo">فایلی انتخاب نشده</div>

        <div class="lang-btns">
            <div class="lang-btn active" id="langFa">فارسی</div>
            <div class="lang-btn" id="langEn">English</div>
        </div>

        <audio id="audioPlayer" controls="" style="width:100%; margin-bottom:1rem; display:none;"></audio>

        <div class="controls">
            <button class="btn" id="startBtn" disabled=""><i class="fas fa-play"></i> شروع</button>
            <button class="btn" id="stopBtn" disabled=""><i class="fas fa-stop"></i> توقف</button>
            <button class="btn btn-green" id="copyBtn" disabled=""><i class="fas fa-copy"></i> کپی</button>
        </div>

        <div class="progress">
            <div class="progress-bar" id="progress"></div>
        </div>

        <div class="status" id="status">منتظر فایل...</div>
        <div class="result" id="result"></div>

        <div class="note">
            <i class="fas fa-lightbulb" style="color: yellow;"></i>
            فایل صوتی هر ۷ ثانیه یکبار تکه‌تکه میشه و متنش استخراج می‌گرده. برای فایل‌های طولانی هم کار می‌کنه.
        </div>
    </div>

    <script>
        (function() {
            const fileInput = document.getElementById('fileInput');
            const fileInfo = document.getElementById('fileInfo');
            const audioPlayer = document.getElementById('audioPlayer');
            const startBtn = document.getElementById('startBtn');
            const stopBtn = document.getElementById('stopBtn');
            const copyBtn = document.getElementById('copyBtn');
            const statusDiv = document.getElementById('status');
            const resultDiv = document.getElementById('result');
            const progressBar = document.getElementById('progress');
            const langFa = document.getElementById('langFa');
            const langEn = document.getElementById('langEn');

            let selectedFile = null;
            let currentLang = 'fa-IR';
            let isProcessing = false;
            let fullText = '';
            let chunkIndex = 0;
            let totalChunks = 0;
            let timeoutId = null;
            let recognition = null;

            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                statusDiv.innerHTML = '❌ مرورگرت پشتیبانی نمی‌کنه. از کروم یا فایرفاکس استفاده کن.';
            }

            // زبان
            langFa.addEventListener('click', () => {
                langFa.classList.add('active');
                langEn.classList.remove('active');
                currentLang = 'fa-IR';
            });
            langEn.addEventListener('click', () => {
                langEn.classList.add('active');
                langFa.classList.remove('active');
                currentLang = 'en-US';
            });

            // انتخاب فایل
            fileInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (!file) return;
                
                selectedFile = file;
                const url = URL.createObjectURL(file);
                audioPlayer.src = url;
                audioPlayer.style.display = 'block';
                
                const size = (file.size / 1024 / 1024).toFixed(2);
                fileInfo.innerHTML = \`📁 \${file.name} (\${size} مگابایت)\`;
                startBtn.disabled = false;
                statusDiv.innerHTML = '✅ آماده شروع است. دکمه شروع را بزن.';
                
                // محاسبه تعداد تکه‌ها
                audioPlayer.addEventListener('loadedmetadata', () => {
                    const duration = audioPlayer.duration;
                    totalChunks = Math.ceil(duration / 7); // هر ۷ ثانیه
                });
            });

            // شروع پردازش
            startBtn.addEventListener('click', function() {
                if (!selectedFile || !audioPlayer.duration) return;
                
                fullText = '';
                resultDiv.innerHTML = '';
                chunkIndex = 0;
                isProcessing = true;
                startBtn.disabled = true;
                stopBtn.disabled = false;
                copyBtn.disabled = true;
                
                audioPlayer.currentTime = 0;
                processNextChunk();
            });

            function processNextChunk() {
                if (!isProcessing) return;
                
                const duration = audioPlayer.duration;
                const startTime = chunkIndex * 7;
                const endTime = Math.min(startTime + 7, duration);
                
                if (startTime >= duration) {
                    // تموم شد
                    finishProcessing();
                    return;
                }
                
                // آپدیت progress
                const percent = (endTime / duration) * 100;
                progressBar.style.width = percent + '%';
                statusDiv.innerHTML = \`⏳ تکه \${chunkIndex+1} از \${totalChunks}...\`;
                
                // پخش تکه
                audioPlayer.currentTime = startTime;
                audioPlayer.play().catch(e => {
                    statusDiv.innerHTML = '❌ خطا در پخش';
                    stopProcessing();
                });
                
                // شروع تشخیص صدا
                recognition = new SpeechRecognition();
                recognition.lang = currentLang;
                recognition.interimResults = false;
                recognition.maxAlternatives = 1;
                recognition.continuous = false;
                
                let chunkText = '';
                
                recognition.onresult = (event) => {
                    for (let i = 0; i < event.results.length; i++) {
                        if (event.results[i].isFinal) {
                            chunkText += event.results[i][0].transcript + ' ';
                        }
                    }
                };
                
                recognition.onend = () => {
                    // اضافه کردن متن تکه به کل
                    if (chunkText) {
                        fullText += chunkText;
                        resultDiv.innerHTML = fullText;
                    }
                    
                    // تکه بعدی
                    chunkIndex++;
                    
                    // پاک کردن timeout قبلی
                    if (timeoutId) clearTimeout(timeoutId);
                    
                    // اگر هنوز ادامه داره
                    if (isProcessing) {
                        timeoutId = setTimeout(processNextChunk, 500); // نیم ثانیه مکث
                    }
                };
                
                recognition.onerror = (e) => {
                    console.log('error', e.error);
                    // اگه خطای no-speech باشه نادیده می‌گیریم
                    if (e.error !== 'no-speech') {
                        statusDiv.innerHTML = \`⚠️ خطا: \${e.error}\`;
                    }
                    // ادامه می‌دیم
                    if (recognition) {
                        try { recognition.stop(); } catch(e) {}
                    }
                };
                
                // شروع تشخیص
                try {
                    recognition.start();
                } catch(e) {
                    console.log('start error', e);
                }
                
                // بعد از ۷ ثانیه تشخیص رو قطع کن
                timeoutId = setTimeout(() => {
                    if (recognition) {
                        try { recognition.stop(); } catch(e) {}
                    }
                    // پخش رو قطع کن
                    audioPlayer.pause();
                }, 7000);
            }
            
            function finishProcessing() {
                isProcessing = false;
                startBtn.disabled = false;
                stopBtn.disabled = true;
                copyBtn.disabled = false;
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
                statusDiv.innerHTML = '✅ تمام شد! متن رو کپی کن.';
                progressBar.style.width = '100%';
            }
            
            function stopProcessing() {
                isProcessing = false;
                startBtn.disabled = false;
                stopBtn.disabled = true;
                copyBtn.disabled = false;
                audioPlayer.pause();
                if (recognition) {
                    try { recognition.stop(); } catch(e) {}
                }
                if (timeoutId) clearTimeout(timeoutId);
                statusDiv.innerHTML = '⏹️ متوقف شد.';
            }
            
            stopBtn.addEventListener('click', stopProcessing);
            
            copyBtn.addEventListener('click', () => {
                if (fullText) {
                    navigator.clipboard.writeText(fullText);
                    statusDiv.innerHTML = '✅ کپی شد.';
                }
            });
        })();
    <\/script>

`,className:"w-html-embed"})})}),k=n=>{const{origin:t,pathname:a,search:i}=new URL(n);return`${t}${a}${i}`},w=l.memo(({pageKey:n,system:t})=>e.jsx(T,{system:t},n),(n,t)=>n.pageKey===t.pageKey),B=({data:n})=>{const{system:t,resources:a,url:i,pageMeta:s}=n,c=k(i),u=l.useMemo(()=>({imageLoader:r,assetBaseUrl:o,resources:a,breakpoints:b,onError:console.error}),[a]);return e.jsxs(p.Provider,{value:u,children:[e.jsx(g.Provider,{value:i,children:e.jsx(w,{pageKey:c,system:t})}),e.jsx(m,{url:i,pageMeta:s,siteName:d,imageLoader:r,assetBaseUrl:o}),e.jsx(f,{children:s.title})]})},I=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),E=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${o}${x}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-10/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-10/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{F as configValuesSerialized};
