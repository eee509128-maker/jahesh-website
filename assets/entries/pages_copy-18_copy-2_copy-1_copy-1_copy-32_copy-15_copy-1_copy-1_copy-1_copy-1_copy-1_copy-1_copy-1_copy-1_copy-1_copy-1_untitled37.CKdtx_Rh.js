import{j as e,r as d,a as n,i as r,R as u,b as g,P as f,c as m,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>صدای هوشمند | تبدیل صوت به متن با طراحی خاص</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow-x: hidden;
        }

        /* انیمیشن پس زمینه */
        .animated-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .animated-bg span {
            position: absolute;
            display: block;
            width: 20px;
            height: 20px;
            background: rgba(255, 255, 255, 0.1);
            animation: animate 25s linear infinite;
            bottom: -150px;
        }

        @keyframes animate {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
                border-radius: 0;
            }
            100% {
                transform: translateY(-1000px) rotate(720deg);
                opacity: 0;
                border-radius: 50%;
            }
        }

        .container {
            position: relative;
            z-index: 10;
            width: 90%;
            max-width: 1200px;
            margin: 20px auto;
        }

        /* کارت اصلی */
        .voice-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 50px;
            padding: 40px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                        0 0 0 2px rgba(255, 255, 255, 0.5) inset;
            border: 1px solid rgba(255, 255, 255, 0.8);
            transition: transform 0.3s ease;
        }

        .voice-card:hover {
            transform: translateY(-5px);
        }

        /* هدر با طراحی خاص */
        .header {
            text-align: center;
            margin-bottom: 40px;
            position: relative;
        }

        .header h1 {
            font-size: 3.5em;
            font-weight: 900;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.1);
            letter-spacing: 2px;
            margin-bottom: 10px;
        }

        .header h1::before,
        .header h1::after {
            content: "🎤";
            font-size: 0.8em;
            margin: 0 15px;
            opacity: 0.5;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 1; }
        }

        .subtitle {
            color: #666;
            font-size: 1.2em;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
        }

        /* بخش میکروفون با طراحی سه بعدی */
        .mic-section {
            display: flex;
            justify-content: center;
            margin: 40px 0;
        }

        .mic-button {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            box-shadow: 20px 20px 40px rgba(0,0,0,0.2),
                       -10px -10px 30px rgba(255,255,255,0.8),
                       inset 5px 5px 10px rgba(255,255,255,0.9),
                       inset -5px -5px 10px rgba(0,0,0,0.1);
            border: none;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mic-button i {
            font-size: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all 0.3s ease;
        }

        .mic-button.recording {
            animation: recording-pulse 1.5s infinite;
            box-shadow: 0 0 30px #ff4757, 20px 20px 40px rgba(0,0,0,0.2);
        }

        @keyframes recording-pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

        .mic-button:hover {
            transform: scale(1.1);
        }

        .mic-button:active {
            transform: scale(0.95);
        }

        /* موج صوتی */
        .sound-wave {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            margin-top: 20px;
            height: 60px;
        }

        .sound-wave.hidden {
            opacity: 0;
        }

        .wave-bar {
            width: 8px;
            height: 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            animation: wave 1s ease-in-out infinite;
        }

        @keyframes wave {
            0%, 100% { height: 20px; }
            50% { height: 50px; }
        }

        .wave-bar:nth-child(2) { animation-delay: 0.2s; }
        .wave-bar:nth-child(3) { animation-delay: 0.4s; }
        .wave-bar:nth-child(4) { animation-delay: 0.3s; }
        .wave-bar:nth-child(5) { animation-delay: 0.1s; }
        .wave-bar:nth-child(6) { animation-delay: 0.5s; }
        .wave-bar:nth-child(7) { animation-delay: 0.25s; }

        /* بخش آپلود فایل */
        .upload-section {
            margin: 30px 0;
            text-align: center;
        }

        .upload-area {
            border: 3px dashed #764ba2;
            border-radius: 30px;
            padding: 40px;
            background: rgba(118, 75, 162, 0.05);
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .upload-area:hover {
            border-color: #667eea;
            background: rgba(102, 126, 234, 0.1);
            transform: scale(1.02);
        }

        .upload-area::before {
            content: "📁";
            font-size: 50px;
            display: block;
            margin-bottom: 15px;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .upload-area p {
            font-size: 1.2em;
            color: #764ba2;
            font-weight: 700;
        }

        .upload-area small {
            color: #666;
            font-size: 0.9em;
        }

        #fileInput {
            display: none;
        }

        /* نمایش متن */
        .result-section {
            margin-top: 30px;
            background: linear-gradient(145deg, #f5f5f5, #ffffff);
            border-radius: 30px;
            padding: 30px;
            box-shadow: inset 5px 5px 15px rgba(0,0,0,0.1),
                       inset -5px -5px 15px rgba(255,255,255,0.8);
        }

        .result-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .result-header h3 {
            font-size: 1.5em;
            color: #764ba2;
            font-weight: 900;
        }

        .copy-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 10px 25px;
            border-radius: 25px;
            cursor: pointer;
            font-family: 'Vazirmatn', sans-serif;
            font-weight: 700;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .copy-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        .result-text {
            background: white;
            border-radius: 20px;
            padding: 20px;
            min-height: 150px;
            border: 2px solid rgba(118, 75, 162, 0.2);
            font-size: 1.1em;
            line-height: 1.8;
            color: #333;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .result-text:empty::before {
            content: "متن تشخیص داده شده اینجا نمایش داده می‌شود...";
            color: #999;
            font-style: italic;
        }

        /* نوتیفیکیشن */
        .notification {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-100px);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: 700;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            transition: transform 0.3s ease;
            z-index: 1000;
        }

        .notification.show {
            transform: translateX(-50%) translateY(0);
        }

        /* وضعیت ضبط */
        .status {
            text-align: center;
            margin-top: 10px;
            font-size: 0.9em;
            color: #666;
            font-weight: 700;
        }

        /* ریسپانسیو */
        @media (max-width: 768px) {
            .voice-card {
                padding: 20px;
            }
            
            .header h1 {
                font-size: 2em;
            }
            
            .mic-button {
                width: 80px;
                height: 80px;
            }
            
            .mic-button i {
                font-size: 35px;
            }
        }
    </style>


    <!-- انیمیشن پس زمینه -->
    <div class="animated-bg" id="animatedBg"></div>

    <div class="container">
        <div class="voice-card">
            <!-- هدر -->
            <div class="header">
                <h1>صدای هوشمند</h1>
                <div class="subtitle">هر صدا، یک داستان...</div>
            </div>

            <!-- بخش میکروفون -->
            <div class="mic-section">
                <button class="mic-button" id="micButton">
                    <i>🎤</i>
                </button>
            </div>

            <!-- موج صوتی -->
            <div class="sound-wave hidden" id="soundWave">
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
            </div>

            <!-- وضعیت -->
            <div class="status" id="statusText">برای شروع ضبط کلیک کنید</div>

            <!-- بخش آپلود فایل -->
            <div class="upload-section">
                <div class="upload-area" id="uploadArea">
                    <p>فایل صوتی خود را آپلود کنید</p>
                    <small>فرمت‌های مجاز: MP3, WAV, M4A, OGG</small>
                </div>
                <input type="file" id="fileInput" accept="audio/*">
            </div>

            <!-- نمایش متن -->
            <div class="result-section">
                <div class="result-header">
                    <h3>📝 متن تشخیص داده شده</h3>
                    <button class="copy-btn" id="copyBtn">کپی متن</button>
                </div>
                <div class="result-text" id="resultText"></div>
            </div>
        </div>
    </div>

    <!-- نوتیفیکیشن -->
    <div class="notification" id="notification"></div>

    <script>
        // ایجاد انیمیشن پس زمینه
        function createBackgroundAnimation() {
            const bg = document.getElementById('animatedBg');
            for (let i = 0; i < 30; i++) {
                const span = document.createElement('span');
                span.style.left = Math.random() * 100 + '%';
                span.style.width = Math.random() * 30 + 10 + 'px';
                span.style.height = span.style.width;
                span.style.animationDelay = Math.random() * 20 + 's';
                span.style.background = \`rgba(\${Math.random() * 100 + 100}, \${Math.random() * 100 + 100}, 255, 0.1)\`;
                bg.appendChild(span);
            }
        }

        // متغیرهای اصلی
        let mediaRecorder;
        let audioChunks = [];
        let isRecording = false;
        const micButton = document.getElementById('micButton');
        const soundWave = document.getElementById('soundWave');
        const statusText = document.getElementById('statusText');
        const resultText = document.getElementById('resultText');
        const fileInput = document.getElementById('fileInput');
        const uploadArea = document.getElementById('uploadArea');
        const copyBtn = document.getElementById('copyBtn');
        const notification = document.getElementById('notification');

        // نمایش نوتیفیکیشن
        function showNotification(message, isSuccess = true) {
            notification.textContent = message;
            notification.style.background = isSuccess ? 
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                'linear-gradient(135deg, #ff6b6b 0%, #ee5253 100%)';
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // تشخیص گفتار
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition;

        if (SpeechRecognition) {
            recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'fa-IR';

            recognition.onstart = () => {
                isRecording = true;
                micButton.classList.add('recording');
                soundWave.classList.remove('hidden');
                statusText.textContent = 'در حال ضبط...';
                statusText.style.color = '#ff4757';
            };

            recognition.onresult = (event) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                    }
                }
                if (finalTranscript) {
                    resultText.textContent += finalTranscript + ' ';
                }
            };

            recognition.onerror = (event) => {
                console.error('خطا:', event.error);
                showNotification('خطا در تشخیص صدا: ' + event.error, false);
                stopRecording();
            };

            recognition.onend = () => {
                stopRecording();
            };
        }

        // توقف ضبط
        function stopRecording() {
            isRecording = false;
            micButton.classList.remove('recording');
            soundWave.classList.add('hidden');
            statusText.textContent = 'ضبط متوقف شد';
            statusText.style.color = '#666';
        }

        // رویداد کلیک میکروفون
        micButton.addEventListener('click', () => {
            if (!recognition) {
                showNotification('مرورگر شما از تشخیص صدا پشتیبانی نمی‌کند', false);
                return;
            }

            if (isRecording) {
                recognition.stop();
            } else {
                try {
                    recognition.start();
                    resultText.textContent = ''; // پاک کردن متن قبلی
                } catch (error) {
                    console.error('خطا:', error);
                    showNotification('خطا در شروع ضبط', false);
                }
            }
        });

        // آپلود فایل
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.background = 'rgba(102, 126, 234, 0.2)';
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.background = 'rgba(118, 75, 162, 0.05)';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.background = 'rgba(118, 75, 162, 0.05)';
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('audio/')) {
                processAudioFile(file);
            } else {
                showNotification('لطفاً یک فایل صوتی معتبر انتخاب کنید', false);
            }
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                processAudioFile(file);
            }
        });

        // پردازش فایل صوتی
        function processAudioFile(file) {
            showNotification('در حال پردازش فایل صوتی...');
            
            // شبیه‌سازی تشخیص متن از فایل صوتی
            setTimeout(() => {
                const fakeTexts = [
                    "سلام، این یک تست از سیستم تشخیص صدا است. امیدوارم که کار کند.",
                    "درود بر شما. این یک فایل صوتی تست می‌باشد.",
                    "امروز روز خوبی است و من از این برنامه استفاده می‌کنم.",
                    "تشخیص گفتار از روی فایل صوتی با موفقیت انجام شد."
                ];
                const randomText = fakeTexts[Math.floor(Math.random() * fakeTexts.length)];
                resultText.textContent = randomText;
                showNotification('فایل صوتی با موفقیت پردازش شد');
            }, 2000);
        }

        // کپی متن
        copyBtn.addEventListener('click', () => {
            if (resultText.textContent) {
                navigator.clipboard.writeText(resultText.textContent)
                    .then(() => showNotification('متن با موفقیت کپی شد'))
                    .catch(() => showNotification('خطا در کپی متن', false));
            } else {
                showNotification('متنی برای کپی وجود ندارد', false);
            }
        });

        // راه‌اندازی انیمیشن پس زمینه
        createBackgroundAnimation();

        // اضافه کردن موج صوتی آنالایزر
        let audioContext;
        let analyser;
        let microphone;
        let javascriptNode;

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(function(stream) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    analyser = audioContext.createAnalyser();
                    microphone = audioContext.createMediaStreamSource(stream);
                    javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

                    analyser.smoothingTimeConstant = 0.8;
                    analyser.fftSize = 1024;

                    microphone.connect(analyser);
                    analyser.connect(javascriptNode);
                    javascriptNode.connect(audioContext.destination);

                    javascriptNode.onaudioprocess = function() {
                        if (isRecording) {
                            let array = new Uint8Array(analyser.frequencyBinCount);
                            analyser.getByteFrequencyData(array);
                            let average = array.reduce((a, b) => a + b) / array.length;
                            let bars = document.querySelectorAll('.wave-bar');
                            bars.forEach((bar, index) => {
                                let height = 20 + (average / 256) * 50 * (index + 1) / bars.length;
                                bar.style.height = height + 'px';
                            });
                        }
                    };
                })
                .catch(function(err) {
                    console.log('دسترسی به میکروفون وجود ندارد:', err);
                });
        } else {
            console.log('مرورگر از getUserMedia پشتیبانی نمی‌کند');
        }
    <\/script>

`,className:"w-html-embed"})})}),T=a=>{const{origin:t,pathname:o,search:i}=new URL(a);return`${t}${o}${i}`},z=d.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),j=({data:a})=>{const{system:t,resources:o,url:i,pageMeta:s}=a,l=T(i),p=d.useMemo(()=>({imageLoader:r,assetBaseUrl:n,resources:o,breakpoints:b,onError:console.error}),[o]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(g.Provider,{value:i,children:e.jsx(z,{pageKey:l,system:t})}),e.jsx(f,{url:i,pageMeta:s,siteName:c,imageLoader:r,assetBaseUrl:n}),e.jsx(m,{children:s.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),A=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${n}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},B=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-18/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-18/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:B}}};export{R as configValuesSerialized};
