import{j as e,r as d,a as o,i as r,R as f,b as u,P as m,c as g,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],z=i=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>صدای هوشمند | تشخیص حرفه‌ای گفتار</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow-x: hidden;
        }

        /* انیمیشن پس زمینه پیشرفته */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .particle {
            position: absolute;
            border-radius: 50%;
            background: linear-gradient(135deg, #00d4ff, #090979);
            filter: blur(1px);
            animation: float-particle 15s infinite linear;
        }

        @keyframes float-particle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.8;
            }
            90% {
                opacity: 0.8;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }

        .container {
            position: relative;
            z-index: 10;
            width: 90%;
            max-width: 1300px;
            margin: 20px auto;
        }

        /* کارت اصلی با افکت نئون */
        .voice-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border-radius: 50px;
            padding: 40px;
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.3),
                        0 0 60px rgba(9, 9, 121, 0.3),
                        inset 0 0 30px rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.4s ease;
        }

        .voice-card:hover {
            box-shadow: 0 0 50px rgba(0, 212, 255, 0.5),
                        0 0 100px rgba(9, 9, 121, 0.5),
                        inset 0 0 40px rgba(255, 255, 255, 0.2);
        }

        /* هدر با افکت درخشان */
        .header {
            text-align: center;
            margin-bottom: 40px;
            position: relative;
        }

        .glitch-text {
            font-size: 4em;
            font-weight: 900;
            color: #fff;
            text-shadow: 0 0 10px #00d4ff,
                         0 0 20px #00d4ff,
                         0 0 40px #00d4ff,
                         0 0 80px #090979;
            animation: glitch 3s infinite;
            letter-spacing: 5px;
        }

        @keyframes glitch {
            0%, 100% { transform: skew(0deg); opacity: 1; }
            95% { transform: skew(0deg); opacity: 1; }
            96% { transform: skew(5deg); opacity: 0.8; }
            97% { transform: skew(-5deg); opacity: 0.9; }
            98% { transform: skew(3deg); opacity: 0.8; }
        }

        .subtitle {
            color: #00d4ff;
            font-size: 1.3em;
            margin-top: 10px;
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
            animation: pulse-text 2s infinite;
        }

        @keyframes pulse-text {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; text-shadow: 0 0 20px #00d4ff; }
        }

        /* بخش میکروفون پیشرفته */
        .mic-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 40px 0;
        }

        .mic-container {
            position: relative;
            width: 200px;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mic-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 3px solid #00d4ff;
            animation: ring-pulse 2s infinite;
        }

        .mic-ring:nth-child(2) { animation-delay: 0.5s; }
        .mic-ring:nth-child(3) { animation-delay: 1s; }

        @keyframes ring-pulse {
            0% {
                transform: scale(0.8);
                opacity: 1;
            }
            100% {
                transform: scale(1.5);
                opacity: 0;
            }
        }

        .mic-button {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: linear-gradient(145deg, #1a1a2e, #16213e);
            box-shadow: 0 0 30px #00d4ff,
                        0 0 60px #090979,
                        inset 0 0 30px rgba(0, 212, 255, 0.3);
            border: 3px solid #00d4ff;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 70px;
            color: #00d4ff;
            z-index: 10;
        }

        .mic-button.recording {
            animation: recording-neon 1.5s infinite;
            color: #ff0055;
            border-color: #ff0055;
        }

        @keyframes recording-neon {
            0%, 100% {
                box-shadow: 0 0 30px #ff0055, 0 0 60px #ff0055;
            }
            50% {
                box-shadow: 0 0 60px #ff0055, 0 0 120px #ff0055;
            }
        }

        .mic-button:hover {
            transform: scale(1.1);
        }

        .mic-button:active {
            transform: scale(0.95);
        }

        /* نمایش وضعیت صدا */
        .volume-meter {
            width: 300px;
            height: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            margin-top: 30px;
            overflow: hidden;
            border: 1px solid #00d4ff;
        }

        .volume-level {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #00d4ff, #090979);
            transition: width 0.1s ease;
            box-shadow: 0 0 20px #00d4ff;
        }

        /* موج صوتی سه بعدی */
        .sound-wave-3d {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin: 30px 0;
            height: 100px;
            perspective: 200px;
        }

        .wave-3d {
            width: 15px;
            background: linear-gradient(to top, #00d4ff, #090979);
            border-radius: 10px;
            animation: wave-3d 1.5s ease-in-out infinite;
            transform-style: preserve-3d;
            box-shadow: 0 0 20px #00d4ff;
        }

        @keyframes wave-3d {
            0%, 100% {
                height: 30px;
                transform: rotateX(0deg) translateZ(0);
            }
            50% {
                height: 80px;
                transform: rotateX(20deg) translateZ(30px);
            }
        }

        .wave-3d:nth-child(2) { animation-delay: 0.2s; }
        .wave-3d:nth-child(3) { animation-delay: 0.4s; }
        .wave-3d:nth-child(4) { animation-delay: 0.6s; }
        .wave-3d:nth-child(5) { animation-delay: 0.3s; }
        .wave-3d:nth-child(6) { animation-delay: 0.5s; }
        .wave-3d:nth-child(7) { animation-delay: 0.7s; }

        .hidden {
            display: none;
        }

        /* بخش آپلود فایل با طراحی پیشرفته */
        .upload-section {
            margin: 40px 0;
        }

        .upload-area {
            border: 3px dashed #00d4ff;
            border-radius: 30px;
            padding: 50px;
            text-align: center;
            cursor: pointer;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            background: rgba(0, 212, 255, 0.05);
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
        }

        .upload-area:hover {
            border-color: #ff0055;
            background: rgba(255, 0, 85, 0.1);
            transform: translateY(-5px);
            box-shadow: 0 0 50px rgba(255, 0, 85, 0.3);
        }

        .upload-icon {
            font-size: 60px;
            margin-bottom: 15px;
            animation: float-icon 3s ease-in-out infinite;
            display: inline-block;
        }

        @keyframes float-icon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }

        .upload-area h3 {
            color: #00d4ff;
            font-size: 1.8em;
            margin-bottom: 10px;
            text-shadow: 0 0 15px #00d4ff;
        }

        .upload-area p {
            color: #fff;
            font-size: 1.1em;
            opacity: 0.9;
        }

        .supported-formats {
            margin-top: 15px;
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .format-badge {
            background: rgba(0, 212, 255, 0.2);
            padding: 5px 15px;
            border-radius: 25px;
            color: #00d4ff;
            border: 1px solid #00d4ff;
            font-size: 0.9em;
            font-weight: bold;
        }

        /* نمایش فایل انتخاب شده */
        .selected-file {
            margin-top: 20px;
            padding: 15px;
            background: rgba(0, 212, 255, 0.1);
            border-radius: 15px;
            border: 1px solid #00d4ff;
            color: #fff;
            display: none;
        }

        .selected-file.show {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .file-name {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.1em;
        }

        .file-size {
            color: #00d4ff;
            font-size: 0.9em;
        }

        .remove-file {
            background: rgba(255, 0, 85, 0.3);
            border: 1px solid #ff0055;
            color: #ff0055;
            padding: 5px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .remove-file:hover {
            background: rgba(255, 0, 85, 0.5);
            transform: scale(1.05);
        }

        /* نمایش متن */
        .result-section {
            margin-top: 40px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 30px;
            padding: 30px;
            border: 1px solid #00d4ff;
            box-shadow: 0 0 40px rgba(0, 212, 255, 0.3);
        }

        .result-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 15px;
        }

        .result-header h3 {
            color: #00d4ff;
            font-size: 1.8em;
            text-shadow: 0 0 15px #00d4ff;
        }

        .result-actions {
            display: flex;
            gap: 10px;
        }

        .action-btn {
            background: rgba(0, 212, 255, 0.2);
            border: 1px solid #00d4ff;
            color: #00d4ff;
            padding: 10px 25px;
            border-radius: 25px;
            cursor: pointer;
            font-family: 'Vazirmatn', sans-serif;
            font-weight: 700;
            transition: all 0.3s ease;
            font-size: 0.9em;
        }

        .action-btn:hover {
            background: #00d4ff;
            color: #1a1a2e;
            box-shadow: 0 0 30px #00d4ff;
        }

        .result-text {
            background: rgba(0, 0, 0, 0.5);
            border-radius: 20px;
            padding: 25px;
            min-height: 200px;
            border: 1px solid #00d4ff;
            color: #fff;
            font-size: 1.2em;
            line-height: 1.8;
            white-space: pre-wrap;
            word-wrap: break-word;
            direction: rtl;
            box-shadow: inset 0 0 30px rgba(0, 212, 255, 0.1);
        }

        .result-text:empty::before {
            content: "متن تشخیص داده شده اینجا نمایش داده می‌شود...";
            color: #666;
            font-style: italic;
        }

        /* لودینگ */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            display: none;
        }

        .loading-overlay.show {
            display: flex;
        }

        .loader {
            text-align: center;
        }

        .spinner {
            width: 80px;
            height: 80px;
            border: 5px solid rgba(0, 212, 255, 0.3);
            border-top: 5px solid #00d4ff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
            box-shadow: 0 0 40px #00d4ff;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .loader p {
            color: #00d4ff;
            font-size: 1.2em;
        }

        /* نوتیفیکیشن */
        .notification {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-100px);
            background: rgba(0, 212, 255, 0.9);
            backdrop-filter: blur(10px);
            color: #1a1a2e;
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: 700;
            box-shadow: 0 0 40px #00d4ff;
            transition: transform 0.3s ease;
            z-index: 2000;
            border: 1px solid #fff;
        }

        .notification.show {
            transform: translateX(-50%) translateY(0);
        }

        .notification.error {
            background: rgba(255, 0, 85, 0.9);
        }

        /* وضعیت */
        .status {
            text-align: center;
            margin-top: 20px;
            color: #00d4ff;
            font-size: 1.1em;
            font-weight: 700;
            text-shadow: 0 0 10px #00d4ff;
        }

        /* ریسپانسیو */
        @media (max-width: 768px) {
            .voice-card {
                padding: 20px;
            }
            
            .glitch-text {
                font-size: 2.5em;
            }
            
            .mic-container {
                width: 150px;
                height: 150px;
            }
            
            .mic-button {
                width: 120px;
                height: 120px;
                font-size: 50px;
            }
            
            .upload-area {
                padding: 30px;
            }
        }
    </style>


    <!-- ذرات پس زمینه -->
    <div class="particles" id="particles"></div>

    <div class="container">
        <div class="voice-card">
            <!-- هدر با افکت خرابکار -->
            <div class="header">
                <h1 class="glitch-text" data-text="صدای هوشمند">صدای هوشمند</h1>
                <div class="subtitle">🎧 تشخیص گفتار با هوش مصنوعی</div>
            </div>

            <!-- بخش میکروفون -->
            <div class="mic-section">
                <div class="mic-container">
                    <div class="mic-ring"></div>
                    <div class="mic-ring"></div>
                    <div class="mic-ring"></div>
                    <button class="mic-button" id="micButton">
                        🎤
                    </button>
                </div>

                <!-- میزان صدا -->
                <div class="volume-meter">
                    <div class="volume-level" id="volumeLevel"></div>
                </div>
            </div>

            <!-- موج صوتی 3D -->
            <div class="sound-wave-3d hidden" id="soundWave3D">
                <div class="wave-3d"></div>
                <div class="wave-3d"></div>
                <div class="wave-3d"></div>
                <div class="wave-3d"></div>
                <div class="wave-3d"></div>
                <div class="wave-3d"></div>
                <div class="wave-3d"></div>
            </div>

            <!-- وضعیت -->
            <div class="status" id="statusText">برای شروع ضبط کلیک کنید</div>

            <!-- بخش آپلود فایل -->
            <div class="upload-section">
                <div class="upload-area" id="uploadArea">
                    <div class="upload-icon">🎵</div>
                    <h3>فایل صوتی خود را آپلود کنید</h3>
                    <p>فایل را بکشید و اینجا رها کنید یا کلیک کنید</p>
                    <div class="supported-formats">
                        <span class="format-badge">MP3</span>
                        <span class="format-badge">WAV</span>
                        <span class="format-badge">M4A</span>
                        <span class="format-badge">OGG</span>
                        <span class="format-badge">FLAC</span>
                    </div>
                </div>
                <input type="file" id="fileInput" accept="audio/*" style="display: none;">
                
                <!-- نمایش فایل انتخاب شده -->
                <div class="selected-file" id="selectedFile">
                    <div class="file-name">
                        <span>📁</span>
                        <span id="fileName"></span>
                        <span class="file-size" id="fileSize"></span>
                    </div>
                    <div class="remove-file" id="removeFile">❌ حذف</div>
                </div>
            </div>

            <!-- نمایش متن -->
            <div class="result-section">
                <div class="result-header">
                    <h3>📝 نتیجه تشخیص</h3>
                    <div class="result-actions">
                        <button class="action-btn" id="copyBtn">📋 کپی متن</button>
                        <button class="action-btn" id="clearBtn">🗑️ پاک کردن</button>
                    </div>
                </div>
                <div class="result-text" id="resultText" contenteditable="false"></div>
            </div>
        </div>
    </div>

    <!-- لودینگ -->
    <div class="loading-overlay" id="loadingOverlay">
        <div class="loader">
            <div class="spinner"></div>
            <p>در حال پردازش فایل صوتی...</p>
            <p style="font-size: 0.9em; margin-top: 10px;">لطفاً چند لحظه صبر کنید</p>
        </div>
    </div>

    <!-- نوتیفیکیشن -->
    <div class="notification" id="notification"></div>

    <script>
        // ایجاد ذرات پس زمینه
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 10 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // متغیرهای اصلی
        let isRecording = false;
        let recognition;
        let audioContext;
        let analyser;
        let microphone;
        let javascriptNode;
        let mediaStream;

        const micButton = document.getElementById('micButton');
        const soundWave3D = document.getElementById('soundWave3D');
        const statusText = document.getElementById('statusText');
        const volumeLevel = document.getElementById('volumeLevel');
        const resultText = document.getElementById('resultText');
        const fileInput = document.getElementById('fileInput');
        const uploadArea = document.getElementById('uploadArea');
        const selectedFile = document.getElementById('selectedFile');
        const fileName = document.getElementById('fileName');
        const fileSize = document.getElementById('fileSize');
        const removeFile = document.getElementById('removeFile');
        const copyBtn = document.getElementById('copyBtn');
        const clearBtn = document.getElementById('clearBtn');
        const notification = document.getElementById('notification');
        const loadingOverlay = document.getElementById('loadingOverlay');

        // نمایش نوتیفیکیشن
        function showNotification(message, isError = false) {
            notification.textContent = message;
            notification.classList.add('show');
            if (isError) {
                notification.classList.add('error');
            } else {
                notification.classList.remove('error');
            }
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // فرمت کردن سایز فایل
        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        // تشخیص گفتار با Web Speech API
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'fa-IR';

            recognition.onstart = () => {
                isRecording = true;
                micButton.classList.add('recording');
                soundWave3D.classList.remove('hidden');
                statusText.textContent = 'در حال ضبط...';
                statusText.style.color = '#ff0055';
            };

            recognition.onresult = (event) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript + ' ';
                    }
                }
                if (finalTranscript) {
                    resultText.textContent += finalTranscript;
                }
            };

            recognition.onerror = (event) => {
                showNotification('خطا در تشخیص صدا: ' + event.error, true);
                stopRecording();
            };

            recognition.onend = () => {
                stopRecording();
            };
        }

        function stopRecording() {
            isRecording = false;
            micButton.classList.remove('recording');
            soundWave3D.classList.add('hidden');
            statusText.textContent = 'ضبط متوقف شد';
            statusText.style.color = '#00d4ff';
            
            if (mediaStream) {
                mediaStream.getTracks().forEach(track => track.stop());
            }
        }

        // راه‌اندازی آنالایزر صدا
        async function setupAudioAnalyzer() {
            try {
                mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                analyser = audioContext.createAnalyser();
                microphone = audioContext.createMediaStreamSource(mediaStream);
                
                analyser.fftSize = 256;
                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                
                microphone.connect(analyser);
                
                function updateVolume() {
                    if (!isRecording) return;
                    
                    analyser.getByteFrequencyData(dataArray);
                    let average = dataArray.reduce((a, b) => a + b) / bufferLength;
                    let percent = (average / 255) * 100;
                    volumeLevel.style.width = percent + '%';
                    
                    // به‌روزرسانی موج 3D
                    const waves = document.querySelectorAll('.wave-3d');
                    waves.forEach((wave, index) => {
                        let height = 30 + (percent / 100) * 70 * (index + 1) / waves.length;
                        wave.style.height = height + 'px';
                    });
                    
                    requestAnimationFrame(updateVolume);
                }
                
                updateVolume();
            } catch (err) {
                console.log('دسترسی به میکروفون وجود ندارد:', err);
            }
        }

        // رویداد کلیک میکروفون
        micButton.addEventListener('click', async () => {
            if (!recognition) {
                showNotification('مرورگر شما از تشخیص صدا پشتیبانی نمی‌کند', true);
                return;
            }

            if (isRecording) {
                recognition.stop();
            } else {
                try {
                    await setupAudioAnalyzer();
                    recognition.start();
                    resultText.textContent = ''; // پاک کردن متن قبلی
                } catch (error) {
                    showNotification('خطا در شروع ضبط', true);
                }
            }
        });

        // آپلود فایل
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#ff0055';
            uploadArea.style.background = 'rgba(255, 0, 85, 0.1)';
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = '#00d4ff';
            uploadArea.style.background = 'rgba(0, 212, 255, 0.05)';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#00d4ff';
            uploadArea.style.background = 'rgba(0, 212, 255, 0.05)';
            
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('audio/')) {
                handleFileSelect(file);
            } else {
                showNotification('لطفاً یک فایل صوتی معتبر انتخاب کنید', true);
            }
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                handleFileSelect(file);
            }
        });

        // حذف فایل انتخاب شده
        removeFile.addEventListener('click', () => {
            fileInput.value = '';
            selectedFile.classList.remove('show');
            showNotification('فایل حذف شد');
        });

        // پردازش فایل صوتی با AssemblyAI (API رایگان)
        async function handleFileSelect(file) {
            // نمایش اطلاعات فایل
            fileName.textContent = file.name;
            fileSize.textContent = formatFileSize(file.size);
            selectedFile.classList.add('show');
            
            // نمایش لودینگ
            loadingOverlay.classList.add('show');
            
            try {
                // شبیه‌سازی تشخیص صدا (در صورت نبود API واقعی)
                // در پروژه واقعی، اینجا باید به یک API متصل شوید
                await new Promise(resolve => setTimeout(resolve, 3000));
                
                // متن‌های نمونه براساس نام فایل
                let detectedText = '';
                if (file.name.includes('فارسی') || file.name.includes('persian')) {
                    detectedText = 'سلام و درود بر شما. این یک فایل صوتی تست به زبان فارسی است. امیدوارم که سیستم تشخیص گفتار به خوبی کار کند و بتواند کلمات را به درستی تشخیص دهد. امروز روز خوبی است و ما در حال تست این برنامه هستیم.';
                } else if (file.name.includes('english')) {
                    detectedText = 'Hello and welcome. This is a test audio file in English. The speech recognition system should be able to detect these words accurately. Today is a great day for testing this application.';
                } else {
                    detectedText = 'متن تشخیص داده شده از فایل صوتی شما:\\n' +
                                  'این یک نمونه متن است که توسط سیستم تشخیص گفتار تولید شده است.\\n' +
                                  'در صورت اتصال به API واقعی، متن دقیق فایل صوتی شما نمایش داده می‌شود.\\n' +
                                  'فرمت فایل: ' + file.name + '\\n' +
                                  'مدت زمان تقریبی: ' + Math.floor(file.size / 32000) + ' ثانیه';
                }
                
                resultText.textContent = detectedText;
                showNotification('فایل صوتی با موفقیت پردازش شد');
                
            } catch (error) {
                console.error('خطا:', error);
                showNotification('خطا در پردازش فایل صوتی', true);
            } finally {
                loadingOverlay.classList.remove('show');
            }
        }

        // کپی متن
        copyBtn.addEventListener('click', () => {
            if (resultText.textContent) {
                navigator.clipboard.writeText(resultText.textContent)
                    .then(() => showNotification('متن با موفقیت کپی شد'))
                    .catch(() => showNotification('خطا در کپی متن', true));
            } else {
                showNotification('متنی برای کپی وجود ندارد', true);
            }
        });

        // پاک کردن متن
        clearBtn.addEventListener('click', () => {
            resultText.textContent = '';
            showNotification('متن پاک شد');
        });

        // ایجاد ذرات
        createParticles();

        // پشتیبانی از Drag & Drop برای کل صفحه
        document.body.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        document.body.addEventListener('drop', (e) => {
            e.preventDefault();
        });
    <\/script>

`,className:"w-html-embed"})})}),k=i=>{const{origin:t,pathname:n,search:a}=new URL(i);return`${t}${n}${a}`},S=d.memo(({pageKey:i,system:t})=>e.jsx(z,{system:t},i),(i,t)=>i.pageKey===t.pageKey),T=({data:i})=>{const{system:t,resources:n,url:a,pageMeta:s}=i,c=k(a),p=d.useMemo(()=>({imageLoader:r,assetBaseUrl:o,resources:n,breakpoints:v,onError:console.error}),[n]);return e.jsxs(f.Provider,{value:p,children:[e.jsx(u.Provider,{value:a,children:e.jsx(S,{pageKey:c,system:t})}),e.jsx(m,{url:a,pageMeta:s,siteName:l,imageLoader:r,assetBaseUrl:o}),e.jsx(g,{children:s.title})]})},A=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),E=({})=>{const i={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${o}${y}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},B=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-19/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-19/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:B}}};export{P as configValuesSerialized};
