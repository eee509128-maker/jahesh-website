import{j as e,r as l,a as o,i as r,R as p,b as f,P as g,c as h,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],S=n=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <title>تبدیل فایل صوتی به متن - روش تکه‌ای</title>
    <style>
        body {
            background: #1a1a2e;
            color: #fff;
            font-family: Tahoma, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
            margin: 0;
        }
        .box {
            background: #16213e;
            border-radius: 30px;
            padding: 30px;
            max-width: 800px;
            width: 100%;
            box-shadow: 0 0 30px #4a2f8a;
        }
        h2 {
            text-align: center;
            color: #b79aff;
            margin-bottom: 20px;
        }
        .warning {
            background: #2d1f3a;
            border: 2px solid #ff7575;
            border-radius: 15px;
            padding: 15px;
            margin: 20px 0;
            color: #ffbaba;
            font-size: 14px;
        }
        input, audio {
            width: 100%;
            margin: 10px 0;
            padding: 10px;
            border-radius: 30px;
            background: #0f0f1f;
            color: white;
            border: 1px solid #6b4fcf;
        }
        button {
            background: #5d3cb0;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 30px;
            font-size: 16px;
            margin: 5px;
            cursor: pointer;
            border: 1px solid #aa8aff;
        }
        button:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
        #result {
            background: #0b0b1a;
            border-radius: 20px;
            padding: 20px;
            min-height: 200px;
            max-height: 400px;
            overflow-y: auto;
            margin: 20px 0;
            border: 1px solid #8365e0;
            white-space: pre-wrap;
            font-size: 16px;
            line-height: 2;
        }
        #status {
            text-align: center;
            color: #aad0ff;
            padding: 10px;
            background: #1f1b3a;
            border-radius: 30px;
            margin-top: 15px;
        }
        .progress {
            width: 100%;
            height: 25px;
            background: #2a2350;
            border-radius: 30px;
            margin: 15px 0;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            background: #8b6cf0;
            width: 0%;
            transition: width 0.3s;
            text-align: center;
            line-height: 25px;
            color: white;
            font-size: 12px;
        }
    </style>


    <div class="box">
        <h2>🎧 تبدیل فایل صوتی به متن (روش تکه‌ای)</h2>
        
        <div class="warning">
            ⚠️ این روش فایل رو تکه‌تکه می‌کنه و هر تکه رو جداگانه پردازش می‌کنه.<br>
            ✅ برای فایل‌های طولانی مناسبه ولی ممکنه چند دقیقه طول بکشه.
        </div>

        <input type="file" id="fileInput" accept="audio/*">
        <audio id="audio" controls=""></audio>
        
        <div class="progress">
            <div class="progress-fill" id="progressFill">۰٪</div>
        </div>

        <div style="text-align: center;">
            <button id="startBtn" disabled="">شروع تبدیل تکه‌ای</button>
            <button id="copyBtn" disabled="">کپی متن</button>
        </div>

        <div id="result"></div>
        <div id="status">⏳ لطفاً یه فایل انتخاب کن...</div>
    </div>

    <script>
        (function() {
            const fileInput = document.getElementById('fileInput');
            const audio = document.getElementById('audio');
            const startBtn = document.getElementById('startBtn');
            const copyBtn = document.getElementById('copyBtn');
            const resultDiv = document.getElementById('result');
            const statusDiv = document.getElementById('status');
            const progressFill = document.getElementById('progressFill');

            let fullText = '';
            let audioContext = null;
            let audioBuffer = null;
            let isProcessing = false;

            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                statusDiv.innerHTML = '❌ مرورگرت پشتیبانی نمی‌کنه. از کروم استفاده کن.';
            }

            fileInput.addEventListener('change', async (e) => {
                const file = e.target.files[0];
                if (!file) return;
                
                audio.src = URL.createObjectURL(file);
                startBtn.disabled = false;
                statusDiv.innerHTML = '✅ فایل آماده است.';
                
                // آماده‌سازی برای پردازش
                const arrayBuffer = await file.arrayBuffer();
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            });

            startBtn.addEventListener('click', async () => {
                if (!audioBuffer || isProcessing) return;
                
                isProcessing = true;
                startBtn.disabled = true;
                copyBtn.disabled = true;
                fullText = '';
                resultDiv.innerHTML = '';
                
                // تنظیمات تکه‌ها (هر تکه ۱۰ ثانیه)
                const sampleRate = audioBuffer.sampleRate;
                const channelData = audioBuffer.getChannelData(0); // کانال اول
                const chunkDuration = 10; // ثانیه
                const chunkSamples = chunkDuration * sampleRate;
                const totalChunks = Math.ceil(channelData.length / chunkSamples);
                
                statusDiv.innerHTML = \`⏳ در حال پردازش \${totalChunks} تکه...\`;
                
                for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
                    // به‌روزرسانی پیشرفت
                    const percent = Math.floor((chunkIndex / totalChunks) * 100);
                    progressFill.style.width = percent + '%';
                    progressFill.innerText = percent + '%';
                    
                    statusDiv.innerHTML = \`⏳ تکه \${chunkIndex + 1} از \${totalChunks}...\`;
                    
                    // استخراج تکه فعلی
                    const startSample = chunkIndex * chunkSamples;
                    const endSample = Math.min(startSample + chunkSamples, channelData.length);
                    const chunk = channelData.slice(startSample, endSample);
                    
                    // تبدیل تکه به WAV موقت
                    const wavBlob = await createWavBlob(chunk, sampleRate);
                    const wavUrl = URL.createObjectURL(wavBlob);
                    
                    // پردازش این تکه
                    const chunkText = await processChunk(wavUrl);
                    fullText += chunkText + ' ';
                    
                    // نمایش متن فعلی
                    resultDiv.innerHTML = fullText;
                    
                    // پاکسازی
                    URL.revokeObjectURL(wavUrl);
                    
                    // کمی صبر کن تا مرورگر هنگ نکنه
                    await new Promise(r => setTimeout(r, 500));
                }
                
                // پایان کار
                progressFill.style.width = '100%';
                progressFill.innerText = '۱۰۰٪';
                statusDiv.innerHTML = '✅ تبدیل کامل شد!';
                copyBtn.disabled = false;
                isProcessing = false;
            });

            // تابع ایجاد فایل WAV از تکه صوتی
            function createWavBlob(audioData, sampleRate) {
                return new Promise((resolve) => {
                    const numChannels = 1;
                    const bytesPerSample = 2;
                    const blockAlign = numChannels * bytesPerSample;
                    const byteRate = sampleRate * blockAlign;
                    const dataSize = audioData.length * bytesPerSample;
                    
                    const buffer = new ArrayBuffer(44 + dataSize);
                    const view = new DataView(buffer);
                    
                    // RIFF header
                    writeString(view, 0, 'RIFF');
                    view.setUint32(4, 36 + dataSize, true);
                    writeString(view, 8, 'WAVE');
                    
                    // fmt subchunk
                    writeString(view, 12, 'fmt ');
                    view.setUint32(16, 16, true); // Subchunk1Size
                    view.setUint16(20, 1, true); // Audio format (PCM)
                    view.setUint16(22, numChannels, true);
                    view.setUint32(24, sampleRate, true);
                    view.setUint32(28, byteRate, true);
                    view.setUint16(32, blockAlign, true);
                    view.setUint16(34, bytesPerSample * 8, true);
                    
                    // data subchunk
                    writeString(view, 36, 'data');
                    view.setUint32(40, dataSize, true);
                    
                    // Write audio data
                    const offset = 44;
                    for (let i = 0; i < audioData.length; i++) {
                        const s = Math.max(-1, Math.min(1, audioData[i]));
                        view.setInt16(offset + i * 2, s * 0x7FFF, true);
                    }
                    
                    const blob = new Blob([buffer], { type: 'audio/wav' });
                    resolve(blob);
                });
            }

            function writeString(view, offset, string) {
                for (let i = 0; i < string.length; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }

            // تابع پردازش یک تکه با Web Speech API
            function processChunk(audioUrl) {
                return new Promise((resolve) => {
                    const audio = new Audio();
                    audio.src = audioUrl;
                    
                    const recognition = new SpeechRecognition();
                    recognition.continuous = true;
                    recognition.interimResults = false;
                    recognition.lang = 'fa-IR';
                    
                    let text = '';
                    
                    recognition.onresult = (event) => {
                        for (let i = 0; i < event.results.length; i++) {
                            if (event.results[i].isFinal) {
                                text += event.results[i][0].transcript + ' ';
                            }
                        }
                    };
                    
                    recognition.onerror = () => {
                        // اگه خطا داد، خالی برگردون
                        resolve('');
                    };
                    
                    recognition.onend = () => {
                        resolve(text);
                    };
                    
                    // پخش و شروع تشخیص
                    audio.play().then(() => {
                        recognition.start();
                        
                        // بعد از مدت تکه، تشخیص رو متوقف کن
                        setTimeout(() => {
                            try { recognition.stop(); } catch(e) {}
                            audio.pause();
                        }, 12000); // 12 ثانیه
                    }).catch(() => {
                        resolve('');
                    });
                });
            }

            copyBtn.addEventListener('click', () => {
                if (fullText) {
                    navigator.clipboard.writeText(fullText)
                        .then(() => statusDiv.innerHTML = '✅ متن کپی شد')
                        .catch(() => statusDiv.innerHTML = '❌ خطا');
                }
            });

            window.addEventListener('beforeunload', () => {
                if (audio.src) URL.revokeObjectURL(audio.src);
            });
        })();
    <\/script>

`,className:"w-html-embed"})})}),k=n=>{const{origin:t,pathname:a,search:i}=new URL(n);return`${t}${a}${i}`},T=l.memo(({pageKey:n,system:t})=>e.jsx(S,{system:t},n),(n,t)=>n.pageKey===t.pageKey),P=({data:n})=>{const{system:t,resources:a,url:i,pageMeta:s}=n,d=k(i),u=l.useMemo(()=>({imageLoader:r,assetBaseUrl:o,resources:a,breakpoints:y,onError:console.error}),[a]);return e.jsxs(p.Provider,{value:u,children:[e.jsx(f.Provider,{value:i,children:e.jsx(T,{pageKey:d,system:t})}),e.jsx(g,{url:i,pageMeta:s,siteName:c,imageLoader:r,assetBaseUrl:o}),e.jsx(h,{children:s.title})]})},B=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),R=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${o}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},U=Object.freeze(Object.defineProperty({__proto__:null,Head:R},Symbol.toStringTag,{value:"Module"})),I={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-17/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:B}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-17/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:U}}};export{I as configValuesSerialized};
