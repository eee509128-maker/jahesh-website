import{j as e,r as p,a as o,i as r,R as m,b as u,P as b,c as x,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as l}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsxs("body",{className:"w-element",children:[e.jsx(l,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی تخصصی ویروس‌شناسی</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0a1a 0%, #0d1b2a 50%, #1a0a2e 100%);
            min-height: 100vh;
            color: #e0e0e0;
            direction: rtl;
        }

        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(0, 255, 150, 0.3);
            border-radius: 50%;
            animation: float 15s infinite linear;
        }

        @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(720deg); opacity: 0; }
        }

        .header {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 30px 20px 20px;
            background: rgba(0, 0, 0, 0.4);
            border-bottom: 1px solid rgba(0, 255, 150, 0.2);
            backdrop-filter: blur(10px);
        }

        .virus-icon {
            font-size: 60px;
            display: block;
            margin-bottom: 10px;
            animation: pulse 2s infinite;
            filter: drop-shadow(0 0 20px rgba(0, 255, 150, 0.5));
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .header h1 {
            font-size: 2.2em;
            background: linear-gradient(90deg, #00ff96, #00c8ff, #ff00ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;
            font-weight: bold;
        }

        .header p {
            color: rgba(0, 255, 150, 0.7);
            font-size: 0.95em;
        }

        .badge {
            display: inline-block;
            background: linear-gradient(90deg, #00ff96, #00c8ff);
            color: #000;
            padding: 3px 12px;
            border-radius: 20px;
            font-size: 0.8em;
            font-weight: bold;
            margin-top: 8px;
        }

        .main-container {
            position: relative;
            z-index: 10;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            height: calc(100vh - 160px);
        }

        .topics-bar {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 15px;
            justify-content: center;
        }

        .topic-btn {
            background: rgba(0, 255, 150, 0.1);
            border: 1px solid rgba(0, 255, 150, 0.3);
            color: #00ff96;
            padding: 6px 14px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.8em;
            transition: all 0.3s;
            font-family: inherit;
        }

        .topic-btn:hover {
            background: rgba(0, 255, 150, 0.25);
            border-color: #00ff96;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 255, 150, 0.2);
        }

        .chat-container {
            flex: 1;
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 255, 150, 0.2);
            border-radius: 20px;
            overflow-y: auto;
            padding: 20px;
            margin-bottom: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 30px rgba(0, 255, 150, 0.05);
        }

        .chat-container::-webkit-scrollbar {
            width: 6px;
        }

        .chat-container::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 3px;
        }

        .chat-container::-webkit-scrollbar-thumb {
            background: rgba(0, 255, 150, 0.3);
            border-radius: 3px;
        }

        .welcome-message {
            text-align: center;
            padding: 40px 20px;
        }

        .welcome-message .big-icon {
            font-size: 80px;
            display: block;
            margin-bottom: 20px;
            animation: spin-slow 8s linear infinite;
        }

        @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .welcome-message h2 {
            color: #00ff96;
            font-size: 1.5em;
            margin-bottom: 15px;
        }

        .welcome-message p {
            color: rgba(255,255,255,0.6);
            line-height: 1.8;
            margin-bottom: 20px;
        }

        .sample-questions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 20px;
        }

        .sample-q {
            background: rgba(0, 255, 150, 0.08);
            border: 1px solid rgba(0, 255, 150, 0.2);
            border-radius: 12px;
            padding: 12px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 0.85em;
            color: rgba(255,255,255,0.8);
            text-align: right;
        }

        .sample-q:hover {
            background: rgba(0, 255, 150, 0.18);
            border-color: #00ff96;
            transform: translateY(-2px);
        }

        .sample-q span {
            color: #00ff96;
            margin-left: 5px;
        }

        .message {
            display: flex;
            margin-bottom: 20px;
            animation: fadeInUp 0.4s ease;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .message.user {
            justify-content: flex-start;
        }

        .message.assistant {
            justify-content: flex-end;
        }

        .message-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            flex-shrink: 0;
            margin-left: 12px;
        }

        .message.user .message-avatar {
            background: linear-gradient(135deg, #667eea, #764ba2);
            order: -1;
            margin-left: 0;
            margin-right: 12px;
        }

        .message.assistant .message-avatar {
            background: linear-gradient(135deg, #00ff96, #00c8ff);
            order: 1;
            margin-right: 0;
            margin-left: 12px;
        }

        .message-content {
            max-width: 75%;
        }

        .message-bubble {
            padding: 15px 18px;
            border-radius: 18px;
            line-height: 1.7;
            font-size: 0.93em;
            word-wrap: break-word;
        }

        .message.user .message-bubble {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
            border: 1px solid rgba(102, 126, 234, 0.4);
            border-top-right-radius: 4px;
        }

        .message.assistant .message-bubble {
            background: linear-gradient(135deg, rgba(0, 255, 150, 0.1), rgba(0, 200, 255, 0.1));
            border: 1px solid rgba(0, 255, 150, 0.3);
            border-top-left-radius: 4px;
            color: #e8f8f0;
        }

        .message-time {
            font-size: 0.72em;
            color: rgba(255,255,255,0.35);
            margin-top: 5px;
            padding: 0 5px;
        }

        .message.user .message-time { text-align: right; }
        .message.assistant .message-time { text-align: left; }

        .typing-indicator {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
        }

        .typing-bubble {
            background: rgba(0, 255, 150, 0.1);
            border: 1px solid rgba(0, 255, 150, 0.3);
            border-radius: 18px;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .typing-text {
            color: rgba(0, 255, 150, 0.7);
            font-size: 0.85em;
        }

        .typing-dots {
            display: flex;
            gap: 4px;
        }

        .typing-dots span {
            width: 6px;
            height: 6px;
            background: #00ff96;
            border-radius: 50%;
            animation: typing 1.2s infinite;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
            30% { transform: translateY(-6px); opacity: 1; }
        }

        .input-area {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 255, 150, 0.3);
            border-radius: 16px;
            padding: 12px 15px;
            display: flex;
            gap: 10px;
            align-items: flex-end;
            backdrop-filter: blur(10px);
            transition: border-color 0.3s;
        }

        .input-area:focus-within {
            border-color: rgba(0, 255, 150, 0.6);
            box-shadow: 0 0 20px rgba(0, 255, 150, 0.1);
        }

        .input-area textarea {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: #e0e0e0;
            font-size: 0.95em;
            resize: none;
            font-family: inherit;
            direction: rtl;
            max-height: 150px;
            min-height: 24px;
            line-height: 1.6;
        }

        .input-area textarea::placeholder {
            color: rgba(0, 255, 150, 0.4);
        }

        .send-btn {
            background: linear-gradient(135deg, #00ff96, #00c8ff);
            border: none;
            border-radius: 10px;
            width: 44px;
            height: 44px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            flex-shrink: 0;
            font-size: 18px;
        }

        .send-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 255, 150, 0.5);
        }

        .send-btn:active {
            transform: scale(0.95);
        }

        .send-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .char-count {
            font-size: 0.72em;
            color: rgba(255,255,255,0.3);
            text-align: left;
            margin-top: 5px;
            padding: 0 5px;
        }

        .footer-info {
            text-align: center;
            color: rgba(0, 255, 150, 0.3);
            font-size: 0.72em;
            margin-top: 8px;
        }

        /* Formatting for AI responses */
        .message-bubble h3 {
            color: #00ff96;
            font-size: 1em;
            margin: 12px 0 6px;
            border-bottom: 1px solid rgba(0, 255, 150, 0.2);
            padding-bottom: 4px;
        }

        .message-bubble strong {
            color: #00ffcc;
        }

        .message-bubble ul, .message-bubble ol {
            padding-right: 20px;
            margin: 8px 0;
        }

        .message-bubble li {
            margin: 4px 0;
            line-height: 1.6;
        }

        .message-bubble code {
            background: rgba(0, 255, 150, 0.1);
            border: 1px solid rgba(0, 255, 150, 0.2);
            border-radius: 4px;
            padding: 2px 6px;
            font-size: 0.9em;
            color: #00ff96;
        }

        .message-bubble .highlight {
            background: rgba(0, 255, 150, 0.1);
            border-right: 3px solid #00ff96;
            padding: 8px 12px;
            margin: 8px 0;
            border-radius: 0 8px 8px 0;
        }

        @media (max-width: 600px) {
            .header h1 { font-size: 1.5em; }
            .sample-questions { grid-template-columns: 1fr; }
            .message-content { max-width: 85%; }
            .topics-bar { display: none; }
        }
    </style>



    <div class="particles" id="particles"></div>

    <div class="header">
        <span class="virus-icon">🦠</span>
        <h1>هوش مصنوعی ویروس‌شناسی</h1>
        <p>سیستم هوشمند ایزوله و متخصص منحصراً در زمینه ویروس‌شناسی</p>
        <span class="badge">⚡ Virology Expert AI | ایزوله شده</span>
    </div>

    <div class="main-container">
        <div class="topics-bar">
            <button class="topic-btn" onclick="askTopic('ساختار کپسید و انولوپ ویروس‌ها')">🔬 ساختار ویروس</button>
            <button class="topic-btn" onclick="askTopic('مراحل چرخه تکثیر ویروس‌ها در سلول میزبان')">🔄 چرخه تکثیر</button>
            <button class="topic-btn" onclick="askTopic('انواع ژنوم ویروسی و طبقه‌بندی بالتیمور')">🧬 ژنوم و طبقه‌بندی</button>
            <button class="topic-btn" onclick="askTopic('نقش اینترفرون‌ها در ایمنی ضد ویروسی')">🛡️ ایمنی ضد ویروسی</button>
            <button class="topic-btn" onclick="askTopic('مکانیسم اثر داروهای ضد ویروس مثل آسیکلوویر')">💊 داروهای ضد ویروسی</button>
            <button class="topic-btn" onclick="askTopic('انواع واکسن‌های ویروسی (زنده ضعیف شده، کشته شده، mRNA)')">💉 واکسیناسیون</button>
            <button class="topic-btn" onclick="askTopic('کاربرد Real-time PCR در تشخیص ویروس‌ها')">🧪 تشخیص آزمایشگاهی</button>
        </div>

        <div class="chat-container" id="chatContainer">
            <div class="welcome-message">
                <span class="big-icon">🦠</span>
                <h2>به استاد ویروس‌شناسی خوش آمدید</h2>
                <p>
                    این سیستم به صورت <strong>کاملاً ایزوله</strong> طراحی شده است و <strong>فقط و فقط</strong> به سوالات مرتبط با ویروس‌ها (ساختار، تکثیر، بیماری‌زایی، تشخیص و درمان ویروسی) پاسخ می‌دهد.<br>
                    (از پاسخگویی به سوالات مربوط به باکتری‌ها، انگل‌ها، داروسازی عمومی یا موضوعات متفرقه معذور است).
                </p>
                <div class="sample-questions">
                    <div class="sample-q" onclick="askSample('پاتوژنز ویروس هپاتیت B (HBV) را کامل توضیح بده')">
                        <span>🦠</span> پاتوژنز هپاتیت B
                    </div>
                    <div class="sample-q" onclick="askSample('مکانیسم تکثیر ویروس HIV را شرح بده')">
                        <span>🧬</span> مکانیسم تکثیر HIV
                    </div>
                    <div class="sample-q" onclick="askSample('داروهای مهارکننده پروتئاز ویروسی چگونه عمل می‌کنند؟')">
                        <span>💊</span> مهارکننده‌های پروتئاز
                    </div>
                    <div class="sample-q" onclick="askSample('تفاوت Shift و Drift آنتی‌ژنی در ویروس آنفلوانزا چیست؟')">
                        <span>⚗️</span> شیفت و دریفت در آنفلوانزا
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="input-area">
                <textarea id="userInput" placeholder="سوال تخصصی ویروس‌شناسی خود را بپرسید..." rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this); updateCharCount()"></textarea>
                <button class="send-btn" id="sendBtn" onclick="sendMessage()">
                    ➤
                </button>
            </div>
            <div class="char-count" id="charCount">0 کاراکتر</div>
            <div class="footer-info">🦠 Virology Expert System | سیستم فقط در حوزه ویروس‌ها پاسخ می‌دهد</div>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        // *** پرامپت سیستمی قدرتمند با قوانین محدودکننده (Guardrails) ***
        const SYSTEM_PROMPT = \`شما یک استاد تمام و متخصص برجسته ویروس‌شناسی (Virology) هستید.

⛔ قوانین محدودکننده (GUARDRAILS) - بسیار مهم و حیاتی:
شما فقط و فقط مجاز به پاسخگویی در حیطه ویروس‌شناسی هستید. اگر کاربر سوالی خارج از این حیطه پرسید، باید قاطعانه و محترمانه پاسخ دادن را رد کنید.
❌ حوزه‌های ممنوعه: باکتری‌شناسی، انگل‌شناسی، قارچ‌شناسی، پزشکی عمومی (که ربطی به ویروس ندارد)، داروسازی عمومی، برنامه‌نویسی، سیاست، ورزش، تاریخ، ریاضیات و هر موضوع غیر ویروسی دیگر.
📝 نحوه رد کردن سوالات ممنوعه: اگر سوال غیر مرتبط بود، دقیقاً این متن را ارسال کنید:
"⛔ من دستیار تخصصی **ویروس‌شناسی** هستم و متأسفانه نمی‌توانم به سوالات خارج از این حوزه (مانند باکتری‌ها، انگل‌ها، یا مسائل عمومی) پاسخ دهم. لطفاً سوال خود را درباره ویروس‌ها، واکسن‌های ویروسی، مورفولوژی یا بیماری‌های ویروسی مطرح کنید."

✅ حوزه‌های مجاز تخصصی شما:
1. ساختار ویروس‌ها (کپسید، انولوپ، ژنوم)
2. طبقه‌بندی (Baltimore، ICTV)
3. چرخه تکثیر (اتصال، ورود، رونویسی، ترجمه، اسمبلی، خروج)
4. پاتوژنز و مکانیسم‌های آسیب سلولی ویروسی
5. ایمنی ضد ویروسی (اینترفرون‌ها، آنتی‌بادی‌ها، ایمنی سلولی)
6. ویروس‌های مهم پزشکی (HIV, HBV, HCV, Herpes, HPV, Influenza, Corona, Rabies و...)
7. داروهای ضد ویروسی و مکانیسم اثر آنها (مانند آسیکلوویر، رمدسیویر، مهارکننده‌های پروتئاز)
8. واکسن‌های ویروسی
9. روش‌های تشخیصی ویروس‌شناسی (PCR, ELISA, Cell culture)
10. انکوژنز ویروسی (ویروس‌های تومورزا)
11. فاژها، پریون‌ها و ویروئیدها

قوانین پاسخگویی علمی:
- پاسخ‌ها باید کاملاً علمی، دقیق، مستند و در سطح آکادمیک باشند.
- نام‌های علمی ویروس‌ها و خانواده‌ها را حتماً به لاتین و ایتالیک در پرانتز بنویسید (مثال: *Coronaviridae*).
- از ساختار لیست‌بندی شده و مرتب برای خوانایی بهتر استفاده کنید.
- تمام متون راست‌چین (RTL) و به زبان فارسی سلیس باشند.\`;

        let conversationHistory = [];

        // Create particles
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (10 + Math.random() * 20) + 's';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.width = (2 + Math.random() * 4) + 'px';
                particle.style.height = particle.style.width;
                const colors = ['rgba(0,255,150,0.4)', 'rgba(0,200,255,0.4)', 'rgba(255,0,255,0.3)'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                container.appendChild(particle);
            }
        }

        function autoResize(textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px';
        }

        function updateCharCount() {
            const input = document.getElementById('userInput');
            document.getElementById('charCount').textContent = input.value.length + ' کاراکتر';
        }

        function handleKeyDown(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        }

        function getTime() {
            return new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
        }

        function formatResponse(text) {
            text = text.replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>');
            text = text.replace(/\\*(.+?)\\*/g, '<em>$1</em>');
            text = text.replace(/^### (.+)$/gm, '<h3>$1</h3>');
            text = text.replace(/^## (.+)$/gm, '<h3>$1</h3>');
            text = text.replace(/^# (.+)$/gm, '<h3>$1</h3>');
            text = text.replace(/\`(.+?)\`/g, '<code>$1</code>');
            text = text.replace(/^> (.+)$/gm, '<div class="highlight">$1</div>');
            // تبدیل خط فاصله‌ها به آیتم‌های لیست به صورت ساده
            text = text.replace(/^- (.+)$/gm, '<li>$1</li>');
            text = text.replace(/\\n/g, '<br>');
            return text;
        }

        function addMessage(content, role) {
            const container = document.getElementById('chatContainer');
            const welcomeMsg = container.querySelector('.welcome-message');
            if (welcomeMsg) welcomeMsg.remove();

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', role);

            const avatar = document.createElement('div');
            avatar.classList.add('message-avatar');
            avatar.textContent = role === 'user' ? '👤' : '🦠';

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('message-content');

            const bubble = document.createElement('div');
            bubble.classList.add('message-bubble');

            if (role === 'assistant') {
                bubble.innerHTML = formatResponse(content);
            } else {
                bubble.textContent = content;
            }

            const timeDiv = document.createElement('div');
            timeDiv.classList.add('message-time');
            timeDiv.textContent = getTime();

            contentDiv.appendChild(bubble);
            contentDiv.appendChild(timeDiv);
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(contentDiv);
            container.appendChild(messageDiv);
            container.scrollTop = container.scrollHeight;

            return messageDiv;
        }

        function showTyping() {
            const container = document.getElementById('chatContainer');
            const typing = document.createElement('div');
            typing.classList.add('typing-indicator');
            typing.id = 'typingIndicator';
            typing.innerHTML = \`
                <div class="typing-bubble">
                    <span class="typing-text">در حال تحلیل تخصصی ویروس‌شناسی...</span>
                    <div class="typing-dots">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            \`;
            container.appendChild(typing);
            container.scrollTop = container.scrollHeight;
        }

        function removeTyping() {
            const typing = document.getElementById('typingIndicator');
            if (typing) typing.remove();
        }

        async function sendMessage() {
            const input = document.getElementById('userInput');
            const sendBtn = document.getElementById('sendBtn');
            const message = input.value.trim();

            if (!message) return;

            addMessage(message, 'user');
            conversationHistory.push({ role: 'user', content: message });

            input.value = '';
            input.style.height = 'auto';
            updateCharCount();
            sendBtn.disabled = true;
            showTyping();

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': \`Bearer \${API_KEY}\`
                    },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [
                            { role: 'system', content: SYSTEM_PROMPT },
                            ...conversationHistory
                        ],
                        temperature: 0.2, // دمای پایین‌تر برای پاسخ‌های علمی‌تر و دقیق‌تر
                        max_tokens: 4096,
                        top_p: 0.9
                    })
                });

                if (!response.ok) {
                    throw new Error(\`خطای API: \${response.status}\`);
                }

                const data = await response.json();
                const aiResponse = data.choices[0].message.content;

                removeTyping();
                addMessage(aiResponse, 'assistant');
                conversationHistory.push({ role: 'assistant', content: aiResponse });

                if (conversationHistory.length > 20) {
                    conversationHistory = conversationHistory.slice(-16);
                }

            } catch (error) {
                removeTyping();
                let errorMsg = '⚠️ خطا در ارتباط با سرور.\\n\\n';
                if (error.message.includes('401')) {
                    errorMsg += 'کلید API معتبر نیست. لطفاً کلید API را بررسی کنید.';
                } else if (error.message.includes('429')) {
                    errorMsg += 'تعداد درخواست‌ها از حد مجاز گذشته. لطفاً کمی صبر کنید.';
                } else {
                    errorMsg += 'لطفاً اتصال اینترنت خود را بررسی کرده و دوباره تلاش کنید.';
                }
                addMessage(errorMsg, 'assistant');
            }

            sendBtn.disabled = false;
            input.focus();
        }

        function askSample(question) {
            document.getElementById('userInput').value = question;
            updateCharCount();
            sendMessage();
        }

        function askTopic(topic) {
            const question = \`\${topic} را به طور کامل و تخصصی توضیح بده\`;
            document.getElementById('userInput').value = question;
            updateCharCount();
            sendMessage();
        }

        // Initialize
        createParticles();
        document.getElementById('userInput').focus();
    <\/script>

`,className:"w-html-embed"}),e.jsx(l,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>وب‌سایت شما</title>
  
  <style>
    /* ----------------- استایل popup ----------------- */
    .vpn-warning-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(6px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
    }

    .vpn-warning-overlay.show {
      opacity: 1;
      visibility: visible;
    }

    .vpn-warning-box {
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      width: 90%;
      max-width: 480px;
      border-radius: 16px;
      padding: 2.2rem 1.8rem;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
      position: relative;
      transform: scale(0.8);
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .vpn-warning-overlay.show .vpn-warning-box {
      transform: scale(1);
    }

    .close-btn {
      position: absolute;
      top: 14px;
      left: 14px;   /* چون dir=rtl هست */
      width: 36px;
      height: 36px;
      background: rgba(255,255,255,0.18);
      border-radius: 50%;
      border: none;
      color: white;
      font-size: 22px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s;
    }

    .close-btn:hover {
      background: rgba(255,255,255,0.35);
      transform: rotate(90deg);
    }

    h2 {
      margin: 0 0 1.1rem 0;
      font-size: 1.55rem;
      font-weight: 700;
      text-align: center;
    }

    p {
      margin: 0 0 1.4rem 0;
      line-height: 1.7;
      font-size: 1.05rem;
      opacity: 0.95;
      text-align: center;
    }

    .icon {
      font-size: 3.8rem;
      margin-bottom: 1rem;
      text-align: center;
      display: block;
    }

    @media (max-width: 400px) {
      .vpn-warning-box {
        padding: 1.8rem 1.3rem;
      }
      h2 { font-size: 1.35rem; }
      p  { font-size: 0.98rem; }
    }
  </style>




<!-- پیام هشدار VPN -->
<div class="vpn-warning-overlay" id="vpnWarning">
  <div class="vpn-warning-box">
    <button class="close-btn" onclick="closeVpnWarning()">×</button>
    
    <div class="icon">🛡️</div>
    <h2>هشدار مهم</h2>
    <p>
      اگر قصد دارید از <strong>ابزارهای هوش مصنوعی </strong>سایت استفاده کنید<br>
      به دلیل استفاده از داده‌های بین‌المللی<br>
      لطفاً <strong>فیلترشکن </strong>خود را روشن کنید
    </p>
  </div>
</div>

<script>
  // نمایش خودکار موقع لود صفحه
  window.addEventListener('load', () => {
    document.getElementById('vpnWarning').classList.add('show');
  });

  function closeVpnWarning() {
    const overlay = document.getElementById('vpnWarning');
    overlay.classList.remove('show');
    // اختیاری: اگر خواستید دیگه هیچ‌وقت نشون نده می‌تونید localStorage استفاده کنید
    // localStorage.setItem('vpnWarningClosed', 'true');
  }

  // اختیاری: اگر قبلاً بسته شده بود نشون نده
  /*
  if (localStorage.getItem('vpnWarningClosed') === 'true') {
    document.getElementById('vpnWarning').style.display = 'none';
  }
  */
<\/script>


`,className:"w-html-embed"})]}),z=a=>{const{origin:t,pathname:i,search:n}=new URL(a);return`${t}${i}${n}`},I=p.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),C=({data:a})=>{const{system:t,resources:i,url:n,pageMeta:s}=a,d=z(n),g=p.useMemo(()=>({imageLoader:r,assetBaseUrl:o,resources:i,breakpoints:h,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:g,children:[e.jsx(u.Provider,{value:n,children:e.jsx(I,{pageKey:d,system:t})}),e.jsx(b,{url:n,pageMeta:s,siteName:c,imageLoader:r,assetBaseUrl:o}),e.jsx(x,{children:s.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${o}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},P=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-56/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-56/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}}};export{R as configValuesSerialized};
