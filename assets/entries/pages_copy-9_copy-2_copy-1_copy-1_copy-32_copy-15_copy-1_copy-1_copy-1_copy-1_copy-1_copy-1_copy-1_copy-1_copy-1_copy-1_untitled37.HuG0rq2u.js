import{j as e,r as l,a as r,i as o,R as u,b as f,P as g,c as m,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],T=n=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل فایل صوتی به متن | کاملاً رایگان</title>
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
            min-height: 100vh;
            background: linear-gradient(145deg, #0a0f2a, #1a1a3a);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .card {
            max-width: 700px;
            width: 100%;
            background: rgba(20, 15, 40, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 2.5rem 1rem 2.5rem 1rem;
            padding: 2rem;
            border: 1px solid rgba(180, 130, 255, 0.3);
            box-shadow: 0 0 50px rgba(150, 100, 255, 0.3);
        }

        h1 {
            color: #fff;
            text-align: center;
            font-size: 2.2rem;
            text-shadow: 0 0 15px #b77dff;
            margin-bottom: 0.5rem;
        }

        .subtitle {
            color: #c4b0ff;
            text-align: center;
            border-bottom: 1px dashed #ffffff40;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
        }

        .upload-area {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .upload-label {
            background: linear-gradient(145deg, #2d1f4a, #1f1538);
            border: 2px solid #b07cff;
            border-radius: 4rem;
            padding: 1.2rem 2.5rem;
            font-size: 1.3rem;
            font-weight: 600;
            color: white;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 15px;
            box-shadow: 0 0 30px #b07cff;
            transition: 0.2s;
        }

        .upload-label i {
            font-size: 2rem;
            color: #ffd966;
        }

        .upload-label:hover {
            transform: scale(1.05);
            background: #3d2b63;
        }

        #fileInput {
            display: none;
        }

        .file-info {
            color: #ddccff;
            background: #00000040;
            border-radius: 2rem;
            padding: 0.8rem 1.5rem;
            border: 1px solid #a57cff;
            width: 100%;
            text-align: center;
        }

        .audio-player {
            width: 100%;
            margin: 1rem 0;
            display: none;
        }

        .audio-player audio {
            width: 100%;
            border-radius: 2rem;
            background: #2a1c44;
        }

        .controls {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin: 1.5rem 0;
            flex-wrap: wrap;
        }

        .btn {
            background: #5d3a9c;
            border: none;
            border-radius: 3rem;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            font-weight: 600;
            color: white;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 0 20px #b266ff;
            transition: 0.2s;
            border: 1px solid #c08aff;
        }

        .btn:disabled {
            opacity: 0.4;
            pointer-events: none;
        }

        .btn:hover:not(:disabled) {
            transform: scale(1.05);
            background: #764fc0;
        }

        .btn-success {
            background: #2e7d5a;
            box-shadow: 0 0 20px #2ecc71;
        }

        .status {
            color: #cbbaf0;
            margin: 1rem 0;
            padding: 1rem;
            background: #1a122e60;
            border-radius: 2rem;
            text-align: center;
            border: 1px solid #a06eff;
        }

        .result-box {
            background: #0f0c20;
            border-radius: 1.5rem;
            padding: 1.5rem;
            min-height: 150px;
            max-height: 300px;
            overflow-y: auto;
            border: 1px solid #b07aff;
            color: white;
            font-size: 1.1rem;
            line-height: 1.7;
            white-space: pre-wrap;
            word-break: break-word;
            margin-top: 1rem;
        }

        .result-box:empty::before {
            content: "🎤 نتیجه اینجا نمایش داده می‌شود...";
            color: #9b87b3;
        }

        .note {
            background: #2a1d42;
            border-radius: 2rem;
            padding: 1rem;
            margin-top: 1.5rem;
            color: #d4c0ff;
            font-size: 0.9rem;
            border: 1px solid #b77dff;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .note i {
            font-size: 1.5rem;
            color: #ffd966;
        }

        .lang-selector {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .lang-btn {
            background: #2a1c44;
            border: 2px solid #8a6acf;
            border-radius: 2rem;
            padding: 0.5rem 1.5rem;
            color: white;
            cursor: pointer;
            transition: 0.2s;
        }

        .lang-btn.active {
            background: #7d3cff;
            border-color: #ffd966;
            box-shadow: 0 0 20px #b77dff;
        }
    </style>


    <div class="card">
        <h1><i class="fas fa-microphone-alt" style="color: #ffaa33;"></i> تبدیل فایل صوتی به متن</h1>
        <div class="subtitle">رایگان • بدون نیاز به API • درون مرورگر</div>

        <!-- انتخاب زبان -->
        <div class="lang-selector">
            <div class="lang-btn active" id="lang-fa">فارسی</div>
            <div class="lang-btn" id="lang-en">English</div>
        </div>

        <!-- آپلود فایل -->
        <div class="upload-area">
            <label for="fileInput" class="upload-label">
                <i class="fas fa-cloud-upload-alt"></i> انتخاب فایل صوتی
            </label>
            <input type="file" id="fileInput" accept="audio/*">
            <div class="file-info" id="fileInfo">هیچ فایلی انتخاب نشده</div>
        </div>

        <!-- پخش‌کننده فایل -->
        <div class="audio-player" id="audioPlayer">
            <audio id="audio" controls="" controlslist="nodownload"></audio>
        </div>

        <!-- دکمه‌های کنترل -->
        <div class="controls">
            <button class="btn" id="transcribeBtn" disabled="">
                <i class="fas fa-play"></i> شروع تبدیل
            </button>
            <button class="btn" id="stopBtn" disabled="">
                <i class="fas fa-stop"></i> توقف
            </button>
            <button class="btn btn-success" id="copyBtn" disabled="">
                <i class="fas fa-copy"></i> کپی متن
            </button>
        </div>

        <!-- وضعیت -->
        <div class="status" id="status">⏳ منتظر انتخاب فایل...</div>

        <!-- نتیجه -->
        <div class="result-box" id="result"></div>

        <!-- توضیحات -->
        <div class="note">
            <i class="fas fa-info-circle"></i>
            <span>این ابزار کاملاً رایگان است و در مرورگر شما اجرا می‌شود. فایل صوتی جایی ارسال نمی‌شود و حریم خصوصی شما حفظ می‌گردد. برای بهترین نتیجه، از فایل‌های با کیفیت و وضوح بالا استفاده کنید.</span>
        </div>
    </div>

    <script>
        (function() {
            // عناصر DOM
            const fileInput = document.getElementById('fileInput');
            const fileInfo = document.getElementById('fileInfo');
            const audioPlayer = document.getElementById('audioPlayer');
            const audio = document.getElementById('audio');
            const transcribeBtn = document.getElementById('transcribeBtn');
            const stopBtn = document.getElementById('stopBtn');
            const copyBtn = document.getElementById('copyBtn');
            const statusDiv = document.getElementById('status');
            const resultDiv = document.getElementById('result');
            const langFa = document.getElementById('lang-fa');
            const langEn = document.getElementById('lang-en');

            // متغیرها
            let selectedFile = null;
            let recognition = null;
            let isTranscribing = false;
            let finalTranscript = '';
            let currentLang = 'fa-IR';

            // بررسی پشتیبانی مرورگر
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                statusDiv.innerHTML = '❌ مرورگر شما از تشخیص صدا پشتیبانی نمی‌کند. از کروم یا فایرفاکس استفاده کنید.';
                transcribeBtn.disabled = true;
            }

            // انتخاب زبان
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
                if (!file) {
                    fileInfo.innerText = 'هیچ فایلی انتخاب نشده';
                    audioPlayer.style.display = 'none';
                    transcribeBtn.disabled = true;
                    return;
                }

                selectedFile = file;
                const url = URL.createObjectURL(file);
                audio.src = url;
                audioPlayer.style.display = 'block';
                
                const size = (file.size / (1024 * 1024)).toFixed(2);
                fileInfo.innerText = \`📁 \${file.name} (\${size} MB)\`;
                transcribeBtn.disabled = false;
                statusDiv.innerHTML = '✅ فایل آماده است. دکمه "شروع تبدیل" را بزنید.';
            });

            // شروع تبدیل
            transcribeBtn.addEventListener('click', function() {
                if (!selectedFile) return;
                if (!audio.src) return;

                // پاک کردن متن قبلی
                finalTranscript = '';
                resultDiv.innerHTML = '';
                
                // راه‌اندازی recognition
                recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;
                recognition.lang = currentLang;

                // پخش فایل صوتی
                audio.play().catch(err => {
                    statusDiv.innerHTML = '❌ خطا در پخش فایل: ' + err.message;
                    return;
                });

                // شروع تشخیص صدا
                try {
                    recognition.start();
                    isTranscribing = true;
                    transcribeBtn.disabled = true;
                    stopBtn.disabled = false;
                    statusDiv.innerHTML = '🎤 در حال تبدیل... فایل در حال پخش است.';
                } catch (err) {
                    statusDiv.innerHTML = '❌ خطا: ' + err.message;
                    return;
                }

                // دریافت نتایج
                recognition.onresult = (event) => {
                    let interim = '';
                    for (let i = event.resultIndex; i < event.results.length; i++) {
                        const transcript = event.results[i][0].transcript;
                        if (event.results[i].isFinal) {
                            finalTranscript += transcript + ' ';
                        } else {
                            interim += transcript;
                        }
                    }
                    resultDiv.innerHTML = finalTranscript + '<span style="color: #b3b3d9;">' + interim + '</span>';
                };

                // خطا
                recognition.onerror = (event) => {
                    console.log('خطای تشخیص:', event.error);
                    if (event.error === 'no-speech') {
                        // خطای no-speech رو نادیده می‌گیریم چون فایل صوتی داریم
                        return;
                    }
                    statusDiv.innerHTML = '⚠️ خطا: ' + event.error;
                    stopTranscribing();
                };

                // پایان تشخیص
                recognition.onend = () => {
                    if (isTranscribing) {
                        // اگه فایل هنوز تموم نشده، دوباره شروع کن
                        if (!audio.ended) {
                            try {
                                recognition.start();
                            } catch (e) {}
                        } else {
                            stopTranscribing();
                            statusDiv.innerHTML = '✅ تبدیل کامل شد.';
                            copyBtn.disabled = false;
                        }
                    }
                };

                // وقتی پخش فایل تموم شد
                audio.onended = () => {
                    if (isTranscribing) {
                        setTimeout(() => {
                            recognition.stop();
                        }, 1000);
                    }
                };
            });

            // توقف تبدیل
            function stopTranscribing() {
                if (recognition) {
                    try {
                        recognition.stop();
                    } catch (e) {}
                }
                audio.pause();
                audio.currentTime = 0;
                isTranscribing = false;
                transcribeBtn.disabled = false;
                stopBtn.disabled = true;
                if (finalTranscript) {
                    copyBtn.disabled = false;
                }
            }

            stopBtn.addEventListener('click', stopTranscribing);

            // کپی متن
            copyBtn.addEventListener('click', function() {
                if (!finalTranscript) return;
                navigator.clipboard.writeText(finalTranscript).then(() => {
                    statusDiv.innerHTML = '✅ متن کپی شد.';
                    setTimeout(() => {
                        statusDiv.innerHTML = '⏳ آماده...';
                    }, 2000);
                });
            });

            // پاکسازی URL هنگام بستن
            window.addEventListener('beforeunload', function() {
                if (audio.src) {
                    URL.revokeObjectURL(audio.src);
                }
            });
        })();
    <\/script>

`,className:"w-html-embed"})})}),B=n=>{const{origin:t,pathname:a,search:i}=new URL(n);return`${t}${a}${i}`},k=l.memo(({pageKey:n,system:t})=>e.jsx(T,{system:t},n),(n,t)=>n.pageKey===t.pageKey),L=({data:n})=>{const{system:t,resources:a,url:i,pageMeta:s}=n,d=B(i),p=l.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:a,breakpoints:h,onError:console.error}),[a]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(f.Provider,{value:i,children:e.jsx(k,{pageKey:d,system:t})}),e.jsx(g,{url:i,pageMeta:s,siteName:c,imageLoader:o,assetBaseUrl:r}),e.jsx(m,{children:s.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),E=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${v}`})}),x.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-9/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-9/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{R as configValuesSerialized};
