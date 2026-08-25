import{j as e,r as y,a as l,i as h,R as w,b as j,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m,C as N,P as E,A as n,$ as B}from"../chunks/chunk-CJTZdOzc.js";import{U as p}from"../chunks/chunk-BTtE8iXS.js";import{n as a}from"../chunks/chunk-CRUfvgxf.js";import{n as u}from"../chunks/chunk-RvLaVuUh.js";import{g as c}from"../chunks/chunk-BKjYWtT8.js";import{n as I}from"../chunks/chunk-Bx5-62GJ.js";import{y as g}from"../chunks/chunk-BO0ALJ3I.js";import{d as A,i as o}from"../chunks/chunk-DWuKyx5h.js";import{O as T,x as L,M as S,R as P,$ as C}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const b="jahesh",F=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],_="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",M=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],D=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],O=t=>e.jsxs("body",{className:"w-element",children:[e.jsx(p,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل صوت به متن</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: #fff;
        }

        .container {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 40px 30px;
            max-width: 600px;
            width: 100%;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        h1 {
            text-align: center;
            margin-bottom: 10px;
            font-size: 1.8em;
            background: linear-gradient(90deg, #a78bfa, #60a5fa, #34d399);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .subtitle {
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 30px;
            font-size: 0.9em;
        }

        .upload-area {
            border: 2px dashed rgba(167, 139, 250, 0.4);
            border-radius: 16px;
            padding: 40px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(167, 139, 250, 0.05);
            margin-bottom: 20px;
        }

        .upload-area:hover {
            border-color: rgba(167, 139, 250, 0.8);
            background: rgba(167, 139, 250, 0.1);
        }

        .upload-area.dragover {
            border-color: #60a5fa;
            background: rgba(96, 165, 250, 0.1);
            transform: scale(1.02);
        }

        .upload-icon {
            font-size: 3em;
            margin-bottom: 10px;
        }

        .upload-text {
            font-size: 1em;
            color: rgba(255, 255, 255, 0.7);
        }

        .upload-hint {
            font-size: 0.8em;
            color: rgba(255, 255, 255, 0.4);
            margin-top: 8px;
        }

        input[type="file"] {
            display: none;
        }

        .file-info {
            display: none;
            background: rgba(52, 211, 153, 0.1);
            border: 1px solid rgba(52, 211, 153, 0.3);
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 20px;
            align-items: center;
            gap: 10px;
        }

        .file-info.show {
            display: flex;
        }

        .file-info .icon {
            font-size: 1.5em;
        }

        .file-info .details {
            flex: 1;
        }

        .file-info .name {
            font-size: 0.95em;
            color: #34d399;
        }

        .file-info .size {
            font-size: 0.8em;
            color: rgba(255, 255, 255, 0.4);
        }

        .file-info .remove {
            cursor: pointer;
            font-size: 1.2em;
            opacity: 0.6;
            transition: opacity 0.2s;
        }

        .file-info .remove:hover {
            opacity: 1;
        }

        .btn {
            width: 100%;
            padding: 16px;
            border: none;
            border-radius: 12px;
            font-size: 1.1em;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.3s ease;
            background: linear-gradient(135deg, #a78bfa, #60a5fa);
            color: #fff;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(167, 139, 250, 0.3);
        }

        .btn:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        .progress-container {
            display: none;
            margin-bottom: 20px;
        }

        .progress-container.show {
            display: block;
        }

        .progress-bar-bg {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            height: 8px;
            overflow: hidden;
            margin-bottom: 10px;
        }

        .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #a78bfa, #60a5fa, #34d399);
            border-radius: 10px;
            width: 0%;
            transition: width 0.3s ease;
            animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
            0% { opacity: 0.8; }
            50% { opacity: 1; }
            100% { opacity: 0.8; }
        }

        .progress-text {
            text-align: center;
            font-size: 0.85em;
            color: rgba(255, 255, 255, 0.6);
        }

        .result-area {
            display: none;
        }

        .result-area.show {
            display: block;
        }

        .result-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .result-header h3 {
            color: #34d399;
            font-size: 1em;
        }

        .copy-btn {
            background: rgba(52, 211, 153, 0.15);
            border: 1px solid rgba(52, 211, 153, 0.3);
            color: #34d399;
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-family: inherit;
            font-size: 0.85em;
            transition: all 0.2s;
        }

        .copy-btn:hover {
            background: rgba(52, 211, 153, 0.25);
        }

        .result-text {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
            min-height: 120px;
            max-height: 300px;
            overflow-y: auto;
            font-size: 1em;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.85);
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .result-text::-webkit-scrollbar {
            width: 6px;
        }

        .result-text::-webkit-scrollbar-track {
            background: transparent;
        }

        .result-text::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
        }

        .error-msg {
            display: none;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 12px;
            padding: 15px;
            color: #f87171;
            text-align: center;
            margin-bottom: 20px;
            font-size: 0.9em;
        }

        .error-msg.show {
            display: block;
        }

        .warning-box {
            background: rgba(251, 191, 36, 0.1);
            border: 1px solid rgba(251, 191, 36, 0.2);
            border-radius: 12px;
            padding: 12px 15px;
            margin-bottom: 20px;
            font-size: 0.8em;
            color: rgba(251, 191, 36, 0.8);
            text-align: center;
            line-height: 1.6;
        }

        @media (max-width: 480px) {
            .container {
                padding: 25px 18px;
            }
            h1 {
                font-size: 1.4em;
            }
            .upload-area {
                padding: 30px 15px;
            }
        }

        .spinner {
            display: inline-block;
            width: 18px;
            height: 18px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            vertical-align: middle;
            margin-left: 8px;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>


    <div class="container">
        <h1>🎙️ تبدیل صوت به متن</h1>
        <p class="subtitle">فایل صوتی خود را بارگذاری کنید</p>

        <div class="warning-box">
            Jahesh AI 
        </div>

        <div class="upload-area" id="uploadArea">
            <div class="upload-icon">🎵</div>
            <div class="upload-text">فایل صوتی را اینجا رها کنید یا کلیک کنید</div>
            <div class="upload-hint">فرمت‌های پشتیبانی: MP3, WAV, M4A, OGG, FLAC, WEBM (حداکثر ۲۵ مگابایت)</div>
        </div>
        <input type="file" id="fileInput" accept="audio/*,.mp3,.wav,.m4a,.ogg,.flac,.webm">

        <div class="file-info" id="fileInfo">
            <span class="icon">🎶</span>
            <div class="details">
                <div class="name" id="fileName"></div>
                <div class="size" id="fileSize"></div>
            </div>
            <span class="remove" id="removeFile" title="حذف فایل">❌</span>
        </div>

        <div class="error-msg" id="errorMsg"></div>

        <button class="btn" id="convertBtn" disabled="">
            تبدیل به متن ✨
        </button>

        <div class="progress-container" id="progressContainer">
            <div class="progress-bar-bg">
                <div class="progress-bar" id="progressBar"></div>
            </div>
            <div class="progress-text" id="progressText">در حال ارسال فایل...</div>
        </div>

        <div class="result-area" id="resultArea">
            <div class="result-header">
                <h3>📝 متن استخراج شده:</h3>
                <button class="copy-btn" id="copyBtn">📋 کپی</button>
            </div>
            <div class="result-text" id="resultText"></div>
        </div>
    </div>

    <script>
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const fileInfo = document.getElementById('fileInfo');
        const fileName = document.getElementById('fileName');
        const fileSize = document.getElementById('fileSize');
        const removeFile = document.getElementById('removeFile');
        const convertBtn = document.getElementById('convertBtn');
        const progressContainer = document.getElementById('progressContainer');
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        const resultArea = document.getElementById('resultArea');
        const resultText = document.getElementById('resultText');
        const copyBtn = document.getElementById('copyBtn');
        const errorMsg = document.getElementById('errorMsg');

        let selectedFile = null;

        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/audio/transcriptions';

        uploadArea.addEventListener('click', () => fileInput.click());

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                handleFile(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                handleFile(fileInput.files[0]);
            }
        });

        function handleFile(file) {
            hideError();

            const maxSize = 25 * 1024 * 1024;
            if (file.size > maxSize) {
                showError('حجم فایل نباید بیشتر از ۲۵ مگابایت باشد');
                return;
            }

            const validTypes = ['audio/mpeg', 'audio/wav', 'audio/mp4', 'audio/x-m4a', 'audio/ogg', 'audio/flac', 'audio/webm', 'audio/mp3'];
            const ext = file.name.split('.').pop().toLowerCase();
            const validExts = ['mp3', 'wav', 'm4a', 'ogg', 'flac', 'webm', 'mp4', 'mpeg', 'mpga'];

            if (!validTypes.includes(file.type) && !validExts.includes(ext)) {
                showError('فرمت فایل پشتیبانی نمی‌شود. لطفاً فایل صوتی معتبر انتخاب کنید');
                return;
            }

            selectedFile = file;
            fileName.textContent = file.name;
            fileSize.textContent = formatSize(file.size);
            fileInfo.classList.add('show');
            uploadArea.style.display = 'none';
            convertBtn.disabled = false;
            resultArea.classList.remove('show');
        }

        removeFile.addEventListener('click', () => {
            selectedFile = null;
            fileInput.value = '';
            fileInfo.classList.remove('show');
            uploadArea.style.display = 'block';
            convertBtn.disabled = true;
            hideError();
        });

        convertBtn.addEventListener('click', async () => {
            if (!selectedFile) return;

            hideError();
            resultArea.classList.remove('show');
            convertBtn.disabled = true;
            convertBtn.innerHTML = 'در حال پردازش... <span class="spinner"></span>';
            progressContainer.classList.add('show');
            progressBar.style.width = '0%';
            progressText.textContent = 'در حال ارسال فایل...';

            try {
                // Simulate initial progress
                let progress = 0;
                const progressInterval = setInterval(() => {
                    if (progress < 80) {
                        progress += Math.random() * 15;
                        if (progress > 80) progress = 80;
                        progressBar.style.width = progress + '%';
                    }
                    if (progress > 30) {
                        progressText.textContent = 'در حال تبدیل صوت به متن...';
                    }
                }, 500);

                const formData = new FormData();
                formData.append('file', selectedFile);
                formData.append('model', 'whisper-large-v3');
                formData.append('response_format', 'verbose_json');

                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': \`Bearer \${API_KEY}\`
                    },
                    body: formData
                });

                clearInterval(progressInterval);

                if (!response.ok) {
                    const errData = await response.json().catch(() => null);
                    const errMessage = errData?.error?.message || \`خطای سرور: \${response.status}\`;
                    throw new Error(errMessage);
                }

                progressBar.style.width = '100%';
                progressText.textContent = 'تکمیل شد! ✅';

                const data = await response.json();
                const text = data.text || '';

                if (!text.trim()) {
                    showError('متنی از این فایل صوتی استخراج نشد. ممکن است فایل خالی باشد یا صدای قابل تشخیصی نداشته باشد');
                } else {
                    resultText.textContent = text;
                    resultArea.classList.add('show');
                }

            } catch (err) {
                console.error(err);
                if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
                    showError('خطا در اتصال به سرور. لطفاً اتصال اینترنت خود را بررسی کنید');
                } else {
                    showError('خطا: ' + err.message);
                }
            } finally {
                convertBtn.disabled = false;
                convertBtn.innerHTML = 'تبدیل به متن ✨';
                setTimeout(() => {
                    progressContainer.classList.remove('show');
                }, 2000);
            }
        });

        copyBtn.addEventListener('click', () => {
            const text = resultText.textContent;
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            copyBtn.textContent = '✅ کپی شد!';
            setTimeout(() => {
                copyBtn.textContent = '📋 کپی';
            }, 2000);
        });

        function formatSize(bytes) {
            if (bytes < 1024) return bytes + ' بایت';
            if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' کیلوبایت';
            return (bytes / (1024 * 1024)).toFixed(1) + ' مگابایت';
        }

        function showError(msg) {
            errorMsg.textContent = msg;
            errorMsg.classList.add('show');
        }

        function hideError() {
            errorMsg.classList.remove('show');
        }
    <\/script>

`,className:"w-html-embed"}),e.jsx(a,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:e.jsxs(a,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[e.jsx(d,{children:e.jsx(m,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(g,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(a,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:e.jsx(d,{children:e.jsx(m,{children:e.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:e.jsxs(E,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[e.jsx(n,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(c,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(u,{className:"w-text",children:"فروشگاه"})})}),e.jsx(n,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(c,{href:"/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(n,{"data-ws-index":"2",className:"w-menu-item",children:e.jsx(B,{children:e.jsx(c,{type:"button",href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(u,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),e.jsx(n,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(n,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),e.jsxs(a,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[e.jsx(a,{className:"w-box",children:e.jsx(a,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:e.jsx(c,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),e.jsx(d,{children:e.jsx(m,{children:e.jsxs(T,{children:[e.jsx(L,{children:e.jsx(I,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:e.jsx(p,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx(S,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:e.jsxs(P,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[e.jsxs(a,{className:"w-box cx6c9kw c1nd8hlk",children:[e.jsx(d,{children:e.jsx(m,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(g,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(C,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:e.jsx(p,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),e.jsx(a,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:e.jsxs(A,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),e.jsx(c,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),R=t=>{const{origin:r,pathname:i,search:s}=new URL(t);return`${r}${i}${s}`},U=y.memo(({pageKey:t,system:r})=>e.jsx(O,{system:r},t),(t,r)=>t.pageKey===r.pageKey),$=({data:t})=>{const{system:r,resources:i,url:s,pageMeta:x}=t,f=R(s),v=y.useMemo(()=>({imageLoader:h,assetBaseUrl:l,resources:i,breakpoints:F,onError:console.error}),[i]);return e.jsxs(w.Provider,{value:v,children:[e.jsx(j.Provider,{value:s,children:e.jsx(U,{pageKey:f,system:r})}),e.jsx(z,{url:s,pageMeta:x,siteName:b,imageLoader:h,assetBaseUrl:l}),e.jsx(k,{children:x.title})]})},H=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),V=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:b};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:h({src:`${l}${_}`})}),M.map(r=>e.jsx("link",{rel:"preload",href:`${l}${r}`,as:"font",crossOrigin:"anonymous"},r)),D.map(r=>e.jsx("link",{rel:"preload",href:`${l}${r}`,as:"image"},r))]})},K=Object.freeze(Object.defineProperty({__proto__:null,Head:V},Symbol.toStringTag,{value:"Module"})),se={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-13/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-13/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:K}}};export{se as configValuesSerialized};
