import{j as e,r as l,a as o,i,R as g,b as m,P as u,c as b,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(f,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


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
        <p>متخصص در تمام شاخه‌های ویروس‌شناسی پزشکی، مولکولی و بالینی</p>
        <span class="badge">⚡ Powered by Groq AI | دقت علمی بالا</span>
    </div>

    <div class="main-container">
        <div class="topics-bar">
            <button class="topic-btn" onclick="askTopic('ساختار ویروس‌ها')">🔬 ساختار ویروس</button>
            <button class="topic-btn" onclick="askTopic('چرخه تکثیر ویروس‌ها')">🔄 چرخه تکثیر</button>
            <button class="topic-btn" onclick="askTopic('ویروس‌شناسی مولکولی')">🧬 ویروس‌شناسی مولکولی</button>
            <button class="topic-btn" onclick="askTopic('ایمنی ضد ویروسی')">🛡️ ایمنی ضد ویروسی</button>
            <button class="topic-btn" onclick="askTopic('داروهای ضد ویروسی')">💊 داروهای ضد ویروسی</button>
            <button class="topic-btn" onclick="askTopic('واکسن‌های ویروسی')">💉 واکسیناسیون</button>
            <button class="topic-btn" onclick="askTopic('تشخیص آزمایشگاهی ویروس‌ها')">🧪 تشخیص آزمایشگاهی</button>
            <button class="topic-btn" onclick="askTopic('اپیدمیولوژی ویروسی')">📊 اپیدمیولوژی</button>
        </div>

        <div class="chat-container" id="chatContainer">
            <div class="welcome-message">
                <span class="big-icon">🦠</span>
                <h2>به استاد ویروس‌شناسی خوش آمدید</h2>
                <p>
                    این سیستم تخصصی با پایه علمی قوی آماده پاسخگویی به تمام سوالات ویروس‌شناسی شماست.<br>
                    از سوالات پایه تا موضوعات پیشرفته دکترا را با دقت کامل پاسخ می‌دهم.
                </p>
                <div class="sample-questions">
                    <div class="sample-q" onclick="askSample('ساختار کپسید ویروس‌ها را توضیح بده')">
                        <span>🔬</span> ساختار کپسید ویروس‌ها
                    </div>
                    <div class="sample-q" onclick="askSample('مکانیسم تکثیر ویروس HIV را شرح بده')">
                        <span>🧬</span> مکانیسم تکثیر HIV
                    </div>
                    <div class="sample-q" onclick="askSample('تفاوت ویروس‌های RNA دار و DNA دار چیست؟')">
                        <span>⚗️</span> ویروس‌های RNA و DNA
                    </div>
                    <div class="sample-q" onclick="askSample('روش‌های تشخیص PCR در ویروس‌شناسی')">
                        <span>🧪</span> تشخیص PCR ویروسی
                    </div>
                    <div class="sample-q" onclick="askSample('پاتوژنز ویروس کرونا SARS-CoV-2 را توضیح بده')">
                        <span>🦠</span> پاتوژنز کرونا ویروس
                    </div>
                    <div class="sample-q" onclick="askSample('انواع واکسن‌های ویروسی و مکانیسم عمل آنها')">
                        <span>💉</span> انواع واکسن‌های ویروسی
                    </div>
                    <div class="sample-q" onclick="askSample('اینترفرون چیست و چه نقشی در ایمنی ضد ویروسی دارد؟')">
                        <span>🛡️</span> نقش اینترفرون‌ها
                    </div>
                    <div class="sample-q" onclick="askSample('طبقه‌بندی ویروس‌ها بر اساس سیستم Baltimore')">
                        <span>📚</span> طبقه‌بندی Baltimore
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="input-area">
                <textarea id="userInput" placeholder="سوال تخصصی ویروس‌شناسی خود را بنویسید..." rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this); updateCharCount()"></textarea>
                <button class="send-btn" id="sendBtn" onclick="sendMessage()">
                    ➤
                </button>
            </div>
            <div class="char-count" id="charCount">0 کاراکتر</div>
            <div class="footer-info">🦠 تخصصی ویروس‌شناسی | پاسخ‌های علمی دقیق و مستند</div>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        const SYSTEM_PROMPT = \`شما یک استاد و متخصص برجسته ویروس‌شناسی هستید با تخصص عمیق در تمام شاخه‌های این علم. شما فقط و فقط به سوالات مربوط به ویروس‌شناسی پاسخ می‌دهید.

حوزه‌های تخصصی شما:
1. ساختار ویروس‌ها: کپسید، انولوپ، ژنوم ویروسی، پروتئین‌های ویروسی
2. طبقه‌بندی ویروس‌ها: سیستم Baltimore، ICTV، خانواده‌های ویروسی
3. چرخه تکثیر: اتصال، ورود، رونویسی، ترجمه، اسمبلی، خروج
4. ژنتیک ویروسی: جهش، نوترکیبی، reassortment، quasi-species
5. پاتوژنز ویروسی: مکانیسم‌های آسیب سلولی، ویروسمی، latency
6. ایمنی ضد ویروسی: ایمنی ذاتی، اختصاصی، اینترفرون‌ها، آنتی‌بادی‌ها
7. ویروس‌های مهم پزشکی: HIV، هرپس، آنفلوانزا، کرونا، هپاتیت، فلج اطفال و...
8. داروهای ضد ویروسی: مهارکننده‌های پروتئاز، نورامینیداز، پلیمراز
9. واکسن‌های ویروسی: انواع، مکانیسم، تولید
10. روش‌های تشخیصی: PCR، سرولوژی، کشت سلولی، ایمونوفلورسانس
11. اپیدمیولوژی: پاندمی، اپیدمی، بردارها، مخازن
12. انکوژنز ویروسی: ویروس‌های تومورزا، مکانیسم‌های سرطان‌زایی
13. ویروس‌های گیاهی و حیوانی
14. فاژها و باکتریوفاژها
15. ویروئیدها و پریون‌ها

قوانین پاسخگویی:
- پاسخ‌ها باید کاملاً علمی، دقیق و مستند باشند
- از اصطلاحات علمی صحیح (لاتین و فارسی) استفاده کنید
- پاسخ‌ها باید ساختارمند باشند با عنوان‌بندی مناسب
- اگر سوال خارج از حوزه ویروس‌شناسی است، مودبانه توضیح دهید که فقط در این حوزه تخصص دارید
- از اعداد، آمار و جزئیات دقیق علمی استفاده کنید
- سطح پاسخ را به دانشجوی دانشگاه/متخصص تنظیم کنید
- خطاهای علمی را هرگز مرتکب نشوید
- پاسخ‌ها را به فارسی روان و علمی بنویسید
- در صورت لزوم نام‌های لاتین را داخل پرانتز ذکر کنید\`;

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
                    <span class="typing-text">در حال تحلیل سوال ویروس‌شناسی...</span>
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
                        temperature: 0.3,
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


`,className:"w-html-embed"})}),T=a=>{const{origin:t,pathname:s,search:n}=new URL(a);return`${t}${s}${n}`},z=l.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:s,url:n,pageMeta:r}=a,c=T(n),d=l.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:s,breakpoints:h,onError:console.error}),[s]);return e.jsxs(g.Provider,{value:d,children:[e.jsx(m.Provider,{value:n,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(u,{url:n,pageMeta:r,siteName:p,imageLoader:i,assetBaseUrl:o}),e.jsx(b,{children:r.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),C=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:C},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-56/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-56/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{D as configValuesSerialized};
