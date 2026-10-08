import{j as e,r as l,a,i as o,R as u,b as g,P as x,c as m,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=s=>e.jsx("body",{className:"w-element",children:e.jsx(v,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>یادداشت‌بردار هوشمند کلاس | فارسی و راست‌چین</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <!-- فونت وزیر (فارسی) -->
    <link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet">
    <style>
        * { font-family: 'Vazir', sans-serif; }
        body { background: #f3f4f6; }
        .highlight-def { background: #fef9c3; }      /* زرد برای تعریف */
        .highlight-formula { background: #bfdbfe; }  /* آبی برای فرمول */
        .highlight-example { background: #d1fae5; }  /* سبز برای مثال */
        .highlight-exam { background: #fed7aa; }     /* نارنجی برای نکته امتحانی */
        .note-card { transition: 0.2s; }
        .note-card:hover { transform: translateY(-2px); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); }
        /* اطمینان از راست‌چین بودن همه ورودی‌ها */
        input, textarea, button, select { text-align: right; }
    </style>



    <div class="max-w-7xl mx-auto">
        <!-- هدر -->
        <header class="bg-white rounded-2xl shadow-lg p-6 mb-6 border-r-4 border-indigo-500">
            <h1 class="text-3xl font-bold text-gray-800 flex items-center gap-2">
                🧠 یادداشت‌بردار هوشمند کلاس
                <span class="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full mr-3">صوت + تخته + چت گروه</span>
            </h1>
            <p class="text-gray-600 mt-2 text-sm">ضبط کلاس، تبدیل به متن، خلاصه‌سازی هوشمند، دسته‌بندی (تعریف، فرمول، مثال، نکته امتحانی) و ادغام یادداشت‌های گروهی با کمک هوش مصنوعی</p>
        </header>

        <!-- شبکه ۲×۲ -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <!-- کارت ۱: ضبط صوت -->
            <div class="bg-white rounded-2xl shadow-lg p-5 border border-gray-200">
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-2xl">🎙️</span>
                    <h2 class="text-xl font-semibold">ضبط هوشمند صوت</h2>
                    <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full mr-auto">تبدیل به متن</span>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                    <button id="startRecordBtn" class="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition flex items-center gap-1">
                        <span>🔴</span> شروع ضبط
                    </button>
                    <button id="stopRecordBtn" class="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl shadow-md transition flex items-center gap-1">
                        <span>⏹️</span> توقف
                    </button>
                    <button id="clearTranscriptBtn" class="bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-xl transition">
                        🧹 پاک کردن متن
                    </button>
                </div>
                <textarea id="transcriptArea" rows="5" class="w-full border-2 border-gray-200 rounded-xl p-3 text-right focus:border-indigo-300" placeholder="متن ضبط شده در اینجا ظاهر می‌شود... (می‌توانید دستی هم ویرایش کنید)"></textarea>
                <p class="text-xs text-gray-400 mt-2">* اگر مرورگر از ضبط صدا پشتیبانی نکند، متن را دستی وارد کنید.</p>
            </div>

            <!-- کارت ۲: تخته سفید -->
            <div class="bg-white rounded-2xl shadow-lg p-5 border border-gray-200">
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-2xl">🎨</span>
                    <h2 class="text-xl font-semibold">تخته کلاس</h2>
                    <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full mr-auto">نوشتن با موس</span>
                </div>
                <canvas id="whiteboardCanvas" width="400" height="200" class="border-2 border-gray-300 rounded-xl w-full bg-gray-50 touch-none"></canvas>
                <div class="flex gap-2 mt-3">
                    <button id="clearCanvasBtn" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl transition text-sm">🧽 پاک کردن تخته</button>
                    <input type="color" id="colorPicker" value="#000000" class="w-10 h-10 rounded-full border-0 cursor-pointer">
                </div>
            </div>

            <!-- کارت ۳: چت گروهی -->
            <div class="bg-white rounded-2xl shadow-lg p-5 border border-gray-200">
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-2xl">💬</span>
                    <h2 class="text-xl font-semibold">چت گروهی کلاس</h2>
                    <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full mr-auto">شما + دانشجوی دیگر</span>
                </div>
                <div id="chatMessages" class="h-40 overflow-y-auto bg-gray-50 rounded-xl p-3 mb-3 border space-y-2 text-sm">
                    <div class="text-right"><span class="inline-block bg-blue-100 rounded-2xl px-3 py-1.5">سلام، جلسه امروز کی شروع میشه؟</span> <span class="text-xs text-gray-500 mr-1">شما</span></div>
                    <div class="text-right"><span class="inline-block bg-gray-200 rounded-2xl px-3 py-1.5">فکر کنم ۱۰:۳۰</span> <span class="text-xs text-gray-500 mr-1">دانشجوی دیگر</span></div>
                </div>
                <div class="flex gap-2">
                    <input type="text" id="chatInput" placeholder="پیام خود را بنویسید..." class="flex-1 border-2 border-gray-200 rounded-xl px-3 py-2 text-right focus:border-indigo-300">
                    <select id="userSelect" class="border-2 border-gray-200 rounded-xl px-2 py-2 bg-white text-sm">
                        <option value="me">من</option>
                        <option value="other">دانشجوی دیگر</option>
                    </select>
                    <button id="sendChatBtn" class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl shadow">ارسال</button>
                </div>
                <p class="text-xs text-gray-400 mt-2">* از چت می‌توانید برای شبیه‌سازی نظرات دانشجوی دیگر استفاده کنید.</p>
            </div>

            <!-- کارت ۴: یادداشت‌های هوشمند (AI) -->
            <div class="bg-white rounded-2xl shadow-lg p-5 border border-gray-200">
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-2xl">📋</span>
                    <h2 class="text-xl font-semibold">یادداشت‌های پردازش‌شده</h2>
                    <span class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full mr-auto">خلاصه + دسته‌بندی</span>
                </div>
                <button id="processAIbtn" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl shadow-md transition font-semibold mb-4">
                    🚀 پردازش متن با هوش مصنوعی
                </button>
                <div id="notesResult" class="space-y-3 max-h-80 overflow-y-auto pl-1 text-sm">
                    <p class="text-gray-400 text-center">هنوز یادداشتی پردازش نشده. دکمه بالا را بزنید.</p>
                </div>
                <button id="mergeNotesBtn" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl shadow-md transition mt-3 text-sm">
                    🔗 ادغام با یادداشت‌های گروهی (شبیه‌سازی)
                </button>
            </div>
        </div>

        <!-- وضعیت API -->
        <div id="apiStatus" class="mt-6 text-center text-sm text-gray-500 bg-white rounded-xl p-2 shadow-inner"></div>
    </div>

    <script>
        (function() {
            // ==================== تنظیمات ====================
            const API_KEY = "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";
            const API_URL = "https://openrouter.ai/api/v1/chat/completions";
            const MODEL = "openai/gpt-3.5-turbo";

            let finalTranscript = "";
            let currentAIMotes = null;
            const otherStudentMockNotes = {
                summary: "این جلسه در مورد مشتقات توابع مثلثاتی بود.",
                definitions: ["مشتق سینوس: cos(x)", "مشتق کسینوس: -sin(x)"],
                formulas: ["d/dx sin(x) = cos(x)", "d/dx cos(x) = -sin(x)"],
                examples: ["مثال: مشتق sin(2x) برابر 2cos(2x)"],
                exam_tips: ["به علامت منفی در مشتق کسینوس دقت کنید", "در امتحان غالباً از قاعده زنجیری استفاده می‌شود"]
            };

            // ==================== عناصر DOM ====================
            const startBtn = document.getElementById('startRecordBtn');
            const stopBtn = document.getElementById('stopRecordBtn');
            const clearTranscriptBtn = document.getElementById('clearTranscriptBtn');
            const transcriptArea = document.getElementById('transcriptArea');
            const processBtn = document.getElementById('processAIbtn');
            const notesDiv = document.getElementById('notesResult');
            const apiStatus = document.getElementById('apiStatus');
            const mergeBtn = document.getElementById('mergeNotesBtn');

            const chatMessages = document.getElementById('chatMessages');
            const chatInput = document.getElementById('chatInput');
            const sendChatBtn = document.getElementById('sendChatBtn');
            const userSelect = document.getElementById('userSelect');

            const canvas = document.getElementById('whiteboardCanvas');
            const ctx = canvas.getContext('2d');
            const clearCanvas = document.getElementById('clearCanvasBtn');
            const colorPicker = document.getElementById('colorPicker');

            // ==================== تخته ====================
            let drawing = false;
            let lastX = 0, lastY = 0;

            function startDrawing(e) {
                drawing = true;
                const pos = getMousePos(canvas, e);
                lastX = pos.x;
                lastY = pos.y;
                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
            }

            function draw(e) {
                if (!drawing) return;
                e.preventDefault();
                const pos = getMousePos(canvas, e);
                const currentX = pos.x;
                const currentY = pos.y;
                ctx.strokeStyle = colorPicker.value;
                ctx.lineWidth = 3;
                ctx.lineCap = 'round';
                ctx.lineTo(currentX, currentY);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(currentX, currentY);
                lastX = currentX;
                lastY = currentY;
            }

            function stopDrawing() { drawing = false; }

            function getMousePos(canvas, evt) {
                const rect = canvas.getBoundingClientRect();
                const scaleX = canvas.width / rect.width;
                const scaleY = canvas.height / rect.height;
                let clientX, clientY;
                if (evt.touches) {
                    clientX = evt.touches[0].clientX;
                    clientY = evt.touches[0].clientY;
                } else {
                    clientX = evt.clientX;
                    clientY = evt.clientY;
                }
                const x = (clientX - rect.left) * scaleX;
                const y = (clientY - rect.top) * scaleY;
                return { x: Math.min(canvas.width, Math.max(0, x)), y: Math.min(canvas.height, Math.max(0, y)) };
            }

            canvas.addEventListener('mousedown', startDrawing);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDrawing);
            canvas.addEventListener('mouseleave', stopDrawing);
            canvas.addEventListener('touchstart', startDrawing, { passive: false });
            canvas.addEventListener('touchmove', draw, { passive: false });
            canvas.addEventListener('touchend', stopDrawing);
            canvas.addEventListener('touchcancel', stopDrawing);

            clearCanvas.addEventListener('click', () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            });
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // ==================== تشخیص صدا ====================
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            let recognition = null;
            if (SpeechRecognition) {
                recognition = new SpeechRecognition();
                recognition.lang = 'fa-IR';
                recognition.continuous = true;
                recognition.interimResults = true;

                recognition.onresult = (event) => {
                    let final = "";
                    for (let i = 0; i < event.results.length; i++) {
                        if (event.results[i].isFinal) {
                            final += event.results[i][0].transcript + " ";
                        }
                    }
                    if (final) {
                        transcriptArea.value = final;
                        finalTranscript = final;
                    }
                };
                recognition.onerror = (e) => { apiStatus.innerText = "خطا در ضبط صدا: " + e.error; };
            } else {
                apiStatus.innerText = "مرورگر شما از تشخیص صدا پشتیبانی نمی‌کند.";
            }

            startBtn.addEventListener('click', () => {
                if (recognition) { recognition.start(); apiStatus.innerText = "در حال ضبط..."; }
                else alert("تشخیص صدا پشتیبانی نمی‌شود.");
            });
            stopBtn.addEventListener('click', () => {
                if (recognition) { recognition.stop(); apiStatus.innerText = "ضبط متوقف شد."; }
            });
            clearTranscriptBtn.addEventListener('click', () => {
                transcriptArea.value = "";
                finalTranscript = "";
            });
            transcriptArea.addEventListener('input', (e) => { finalTranscript = e.target.value; });

            // ==================== چت ====================
            function addChatMessage(text, sender) {
                const div = document.createElement('div');
                div.className = 'text-right';
                const senderLabel = sender === 'me' ? 'شما' : 'دانشجوی دیگر';
                const bgColor = sender === 'me' ? 'bg-blue-100' : 'bg-gray-200';
                div.innerHTML = \`<span class="inline-block \${bgColor} rounded-2xl px-3 py-1.5">\${text}</span> <span class="text-xs text-gray-500 mr-1">\${senderLabel}</span>\`;
                chatMessages.appendChild(div);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            sendChatBtn.addEventListener('click', () => {
                const msg = chatInput.value.trim();
                if (!msg) return;
                addChatMessage(msg, userSelect.value);
                chatInput.value = '';
            });
            chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendChatBtn.click(); });

            // ==================== ارتباط با API ====================
            processBtn.addEventListener('click', async () => {
                const textToProcess = transcriptArea.value.trim();
                if (!textToProcess) { alert("متنی وارد کنید."); return; }

                notesDiv.innerHTML = \`<div class="flex justify-center py-6"><span class="animate-spin text-2xl ml-2">⏳</span> در حال پردازش...</div>\`;
                apiStatus.innerText = "در حال ارتباط با OpenRouter...";

                const prompt = \`
                متن زیر از یک جلسه کلاسی است. آن را تحلیل کن و یک شیء JSON با کلیدهای زیر برگردان:
                {
                    "summary": "خلاصه کلی",
                    "definitions": ["تعریف اول", ...],
                    "formulas": ["فرمول اول", ...],
                    "examples": ["مثال اول", ...],
                    "exam_tips": ["نکته امتحانی اول", ...]
                }
                فقط JSON معتبر و بدون توضیح اضافه.
                متن: """\${textToProcess}"""
                \`;

                try {
                    const response = await fetch(API_URL, {
                        method: 'POST',
                        headers: {
                            'Authorization': \`Bearer \${API_KEY}\`,
                            'Content-Type': 'application/json',
                            'HTTP-Referer': window.location.origin,
                        },
                        body: JSON.stringify({
                            model: MODEL,
                            messages: [
                                { role: 'system', content: 'شما یک دستیار هستید که JSON خالص برمی‌گردانید.' },
                                { role: 'user', content: prompt }
                            ],
                            temperature: 0.3,
                        })
                    });

                    if (!response.ok) throw new Error(\`خطای \${response.status}\`);
                    const data = await response.json();
                    const aiMessage = data.choices[0].message.content;
                    const cleaned = aiMessage.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
                    const parsed = JSON.parse(cleaned);

                    currentAIMotes = parsed;
                    displayNotes(parsed);
                    apiStatus.innerText = "پردازش با موفقیت انجام شد.";
                } catch (error) {
                    notesDiv.innerHTML = \`<div class="text-red-600 bg-red-50 p-3 rounded-xl">⚠️ خطا: \${error.message}</div>\`;
                    apiStatus.innerText = "خطا در ارتباط با API.";
                }
            });

            function displayNotes(notes) {
                if (!notes) return;
                let html = '';
                if (notes.summary) html += \`<div class="bg-gray-100 p-3 rounded-xl"><span class="font-bold">📌 خلاصه:</span> \${notes.summary}</div>\`;
                if (notes.definitions?.length) {
                    html += \`<div class="bg-yellow-50 p-3 rounded-xl border-r-4 border-yellow-400"><span class="font-bold">📚 تعریف‌ها:</span><ul class="list-disc pr-5 mt-1">\`;
                    notes.definitions.forEach(d => html += \`<li class="highlight-def p-1 rounded">\${d.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')}</li>\`);
                    html += \`</ul></div>\`;
                }
                if (notes.formulas?.length) {
                    html += \`<div class="bg-blue-50 p-3 rounded-xl border-r-4 border-blue-400"><span class="font-bold">🧪 فرمول‌ها:</span><ul class="list-disc pr-5 mt-1">\`;
                    notes.formulas.forEach(f => html += \`<li class="highlight-formula p-1 rounded">\${f.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')}</li>\`);
                    html += \`</ul></div>\`;
                }
                if (notes.examples?.length) {
                    html += \`<div class="bg-green-50 p-3 rounded-xl border-r-4 border-green-400"><span class="font-bold">✏️ مثال‌ها:</span><ul class="list-disc pr-5 mt-1">\`;
                    notes.examples.forEach(e => html += \`<li class="highlight-example p-1 rounded">\${e.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')}</li>\`);
                    html += \`</ul></div>\`;
                }
                if (notes.exam_tips?.length) {
                    html += \`<div class="bg-orange-50 p-3 rounded-xl border-r-4 border-orange-400"><span class="font-bold">⚠️ نکات امتحانی:</span><ul class="list-disc pr-5 mt-1">\`;
                    notes.exam_tips.forEach(t => html += \`<li class="highlight-exam p-1 rounded">\${t.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')}</li>\`);
                    html += \`</ul></div>\`;
                }
                notesDiv.innerHTML = html || '<p class="text-gray-400">نتیجه‌ای یافت نشد.</p>';
            }

            mergeBtn.addEventListener('click', () => {
                if (!currentAIMotes) { alert("ابتدا یادداشت‌های خود را پردازش کنید."); return; }
                const merged = {
                    summary: currentAIMotes.summary + " | " + otherStudentMockNotes.summary,
                    definitions: [...(currentAIMotes.definitions || []), ...otherStudentMockNotes.definitions],
                    formulas: [...(currentAIMotes.formulas || []), ...otherStudentMockNotes.formulas],
                    examples: [...(currentAIMotes.examples || []), ...otherStudentMockNotes.examples],
                    exam_tips: [...(currentAIMotes.exam_tips || []), ...otherStudentMockNotes.exam_tips],
                };
                notesDiv.innerHTML = \`<div class="bg-indigo-50 p-2 rounded-xl text-indigo-700 text-xs mb-2">🔁 یادداشت‌ها با دانشجوی دیگر ادغام شد.</div>\`;
                displayNotes(merged);
                apiStatus.innerText = "ادغام انجام شد.";
            });

            apiStatus.innerText = "منتظر دستور شما...";
        })();
    <\/script>

    <!-- توضیحات پایانی -->
    <div class="max-w-7xl mx-auto mt-4 text-xs text-gray-400 text-center">
        ⚡ این یک نمونه کارکردی با کلید API شماست. تمامی بخش‌ها راست‌چین و فارسی هستند.<br>
        💡 هایلایت رنگی: زرد=تعریف، آبی=فرمول، سبز=مثال، نارنجی=نکته امتحانی.
    </div>

`,className:"w-html-embed"})}),E=s=>{const{origin:t,pathname:r,search:n}=new URL(s);return`${t}${r}${n}`},T=l.memo(({pageKey:s,system:t})=>e.jsx(S,{system:t},s),(s,t)=>s.pageKey===t.pageKey),P=({data:s})=>{const{system:t,resources:r,url:n,pageMeta:i}=s,d=E(n),p=l.useMemo(()=>({imageLoader:o,assetBaseUrl:a,resources:r,breakpoints:y,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(g.Provider,{value:n,children:e.jsx(T,{pageKey:d,system:t})}),e.jsx(x,{url:n,pageMeta:i,siteName:c,imageLoader:o,assetBaseUrl:a}),e.jsx(m,{children:i.title})]})},B=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),I=({})=>{const s={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${a}${f}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:I},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-78/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:B}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-78/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{R as configValuesSerialized};
