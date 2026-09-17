import{j as e,r as d,a as o,i,R as b,b as m,P as u,c as x,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as l}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsxs("body",{className:"w-element",children:[e.jsx(l,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی تخصصی باکتری‌شناسی عمومی</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #020b08 0%, #041a10 50%, #021208 100%);
            min-height: 100vh;
            color: #d0ead0;
            direction: rtl;
            overflow-x: hidden;
        }

        /* Animated DNA/Cell Background */
        .bg-canvas {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        }

        .bacteria-particle {
            position: absolute;
            border-radius: 50% 60% 50% 40%;
            background: radial-gradient(circle, rgba(0,200,100,0.12), rgba(0,150,70,0.04));
            border: 1px solid rgba(0,200,100,0.08);
            animation: floatBacteria linear infinite;
        }

        @keyframes floatBacteria {
            0%   { transform: translateY(110vh) rotate(0deg) scaleX(1); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 0.6; }
            100% { transform: translateY(-15vh) rotate(720deg) scaleX(1.3); opacity: 0; }
        }

        .dna-line {
            position: absolute;
            width: 2px;
            background: linear-gradient(to bottom,
                transparent,
                rgba(0,255,120,0.08) 30%,
                rgba(0,200,100,0.15) 50%,
                rgba(0,255,120,0.08) 70%,
                transparent);
            animation: dnaFloat 12s ease-in-out infinite alternate;
        }

        @keyframes dnaFloat {
            0%   { opacity: 0.3; transform: scaleY(0.8) translateX(0); }
            100% { opacity: 0.7; transform: scaleY(1.1) translateX(8px); }
        }

        /* Grid overlay */
        body::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image:
                linear-gradient(rgba(0,200,80,0.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,200,80,0.025) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
            z-index: 0;
        }

        /* ===== HEADER ===== */
        .header {
            position: relative;
            z-index: 10;
            background: linear-gradient(135deg,
                rgba(0,0,0,0.92) 0%,
                rgba(2,20,10,0.95) 100%);
            border-bottom: 2px solid rgba(0,220,100,0.3);
            padding: 20px;
            text-align: center;
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 40px rgba(0,200,80,0.08);
        }

        .header-top {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 22px;
            margin-bottom: 12px;
            flex-wrap: wrap;
        }

        .bacteria-logo {
            font-size: 60px;
            animation: pulse-logo 3s ease-in-out infinite;
            filter: drop-shadow(0 0 20px rgba(0,220,100,0.5));
        }

        @keyframes pulse-logo {
            0%,100% { transform: scale(1) rotate(-3deg);   filter: drop-shadow(0 0 15px rgba(0,220,100,0.4)); }
            50%      { transform: scale(1.08) rotate(3deg); filter: drop-shadow(0 0 30px rgba(0,255,120,0.7)); }
        }

        .header-text { text-align: right; }

        .header-label {
            font-size: 0.75em;
            color: rgba(0,220,100,0.6);
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 4px;
        }

        .header h1 {
            font-size: 1.85em;
            background: linear-gradient(90deg, #00dc64, #00ff88, #00dc64);
            background-size: 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 3s linear infinite;
            font-weight: 800;
            line-height: 1.2;
        }

        @keyframes shimmer {
            0%   { background-position: 0%; }
            100% { background-position: 200%; }
        }

        .header-sub {
            color: rgba(0,200,80,0.55);
            font-size: 0.83em;
            margin-top: 5px;
        }

        .divider-line {
            height: 1px;
            background: linear-gradient(90deg,
                transparent, rgba(0,220,100,0.4), rgba(0,255,120,0.6), rgba(0,220,100,0.4), transparent);
            margin: 10px 0;
        }

        .badge-row {
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 8px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: rgba(0,180,70,0.1);
            border: 1px solid rgba(0,200,80,0.3);
            color: rgba(0,220,100,0.85);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.76em;
            transition: all 0.3s;
        }

        .badge:hover {
            background: rgba(0,200,80,0.2);
            border-color: rgba(0,220,100,0.6);
            box-shadow: 0 0 10px rgba(0,200,80,0.2);
        }

        /* ===== MAIN LAYOUT ===== */
        .main-container {
            position: relative;
            z-index: 10;
            max-width: 980px;
            margin: 0 auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: calc(100vh - 185px);
        }

        /* ===== TOPICS BAR ===== */
        .topics-bar {
            display: flex;
            gap: 7px;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 12px;
        }

        .topic-btn {
            background: rgba(0,160,60,0.08);
            border: 1px solid rgba(0,200,80,0.22);
            color: rgba(0,220,100,0.85);
            padding: 6px 14px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.79em;
            font-family: inherit;
            direction: rtl;
            transition: all 0.3s;
            white-space: nowrap;
        }

        .topic-btn:hover {
            background: rgba(0,200,80,0.18);
            border-color: rgba(0,220,100,0.6);
            transform: translateY(-2px);
            box-shadow: 0 4px 14px rgba(0,180,70,0.2);
            color: #00ff88;
        }

        /* ===== CHAT CONTAINER ===== */
        .chat-container {
            flex: 1;
            background: rgba(0,0,0,0.6);
            border: 1px solid rgba(0,200,80,0.18);
            border-radius: 20px;
            overflow-y: auto;
            padding: 22px;
            margin-bottom: 14px;
            backdrop-filter: blur(12px);
            box-shadow:
                inset 0 0 40px rgba(0,0,0,0.4),
                0 0 50px rgba(0,180,70,0.05);
        }

        .chat-container::-webkit-scrollbar { width: 5px; }
        .chat-container::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); border-radius: 3px; }
        .chat-container::-webkit-scrollbar-thumb { background: rgba(0,180,70,0.35); border-radius: 3px; }

        /* ===== WELCOME SCREEN ===== */
        .welcome-message {
            text-align: center;
            padding: 28px 15px;
        }

        .welcome-logo {
            font-size: 80px;
            margin-bottom: 12px;
            display: inline-block;
            animation: float-icon 4s ease-in-out infinite;
            filter: drop-shadow(0 0 20px rgba(0,220,100,0.4));
        }

        @keyframes float-icon {
            0%,100% { transform: translateY(0) rotate(-5deg); }
            50%      { transform: translateY(-12px) rotate(5deg); }
        }

        .welcome-message h2 {
            font-size: 1.6em;
            color: #00dc64;
            margin-bottom: 6px;
            text-shadow: 0 0 20px rgba(0,220,100,0.3);
        }

        .welcome-message .sub-title {
            color: rgba(0,200,80,0.55);
            font-size: 0.86em;
            margin-bottom: 12px;
            letter-spacing: 1px;
        }

        .welcome-message p {
            color: rgba(180,230,180,0.65);
            line-height: 2;
            font-size: 0.91em;
            max-width: 600px;
            margin: 0 auto 20px;
            background: rgba(0,200,100,0.05);
            padding: 15px;
            border-radius: 15px;
            border: 1px solid rgba(0,200,100,0.1);
        }

        .sample-questions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            max-width: 720px;
            margin: 0 auto;
        }

        .sample-q {
            background: rgba(0,160,60,0.07);
            border: 1px solid rgba(0,200,80,0.18);
            border-radius: 14px;
            padding: 13px 15px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 0.82em;
            color: rgba(200,240,200,0.8);
            text-align: right;
            line-height: 1.6;
            display: flex;
            align-items: flex-start;
            gap: 8px;
        }

        .sample-q:hover {
            background: rgba(0,200,80,0.14);
            border-color: rgba(0,220,100,0.45);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,180,70,0.12);
            color: #c0f0c0;
        }

        .sample-q .q-icon {
            font-size: 1.2em;
            flex-shrink: 0;
        }

        /* ===== MESSAGES ===== */
        .message {
            display: flex;
            margin-bottom: 22px;
            animation: msgIn 0.4s ease;
        }

        @keyframes msgIn {
            from { opacity: 0; transform: translateY(14px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        .message.user      { justify-content: flex-start; }
        .message.assistant { justify-content: flex-end; }

        .msg-avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            flex-shrink: 0;
        }

        .message.user .msg-avatar {
            background: linear-gradient(135deg, #1a3520, #2a5030);
            border: 2px solid rgba(0,200,80,0.3);
            margin-right: 12px;
            order: -1;
        }

        .message.assistant .msg-avatar {
            background: linear-gradient(135deg, #0a2a15, #0f3d1e);
            border: 2px solid rgba(0,220,100,0.5);
            margin-left: 12px;
            order: 1;
        }

        .msg-body { max-width: 80%; }

        .msg-bubble {
            padding: 15px 18px;
            border-radius: 18px;
            line-height: 1.9;
            font-size: 0.91em;
            word-wrap: break-word;
        }

        .message.user .msg-bubble {
            background: linear-gradient(135deg, rgba(20,60,30,0.6), rgba(15,45,22,0.6));
            border: 1px solid rgba(0,200,80,0.22);
            border-top-right-radius: 4px;
            color: #c8ecc8;
        }

        .message.assistant .msg-bubble {
            background: linear-gradient(135deg, rgba(5,30,15,0.75), rgba(3,22,10,0.75));
            border: 1px solid rgba(0,220,100,0.28);
            border-top-left-radius: 4px;
            color: #d0f0d0;
        }

        /* Bubble inner styling */
        .msg-bubble h3 {
            color: #00dc64;
            font-size: 1em;
            margin: 14px 0 6px;
            padding-bottom: 5px;
            border-bottom: 1px solid rgba(0,200,80,0.2);
        }

        .msg-bubble strong { color: #00ff88; }

        .msg-bubble ul, .msg-bubble ol {
            padding-right: 22px;
            margin: 8px 0;
        }

        .msg-bubble li { margin: 5px 0; line-height: 1.75; }

        .msg-bubble .highlight-box {
            background: rgba(0,200,80,0.08);
            border-right: 3px solid #00dc64;
            padding: 9px 13px;
            margin: 10px 0;
            border-radius: 0 10px 10px 0;
            font-style: italic;
            color: rgba(180,240,180,0.9);
        }

        .msg-bubble .info-box {
            background: rgba(0,180,70,0.07);
            border: 1px solid rgba(0,200,80,0.22);
            border-radius: 10px;
            padding: 10px 14px;
            margin: 10px 0;
        }

        .msg-bubble code {
            background: rgba(0,200,80,0.1);
            border: 1px solid rgba(0,180,70,0.25);
            border-radius: 5px;
            padding: 2px 7px;
            color: #00dc64;
            font-family: monospace;
            font-size: 0.93em;
        }

        .msg-time {
            font-size: 0.71em;
            color: rgba(0,200,80,0.3);
            margin-top: 5px;
            padding: 0 4px;
        }

        .message.user .msg-time      { text-align: right; }
        .message.assistant .msg-time { text-align: left; }

        /* ===== TYPING ===== */
        .typing-indicator {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
        }

        .typing-wrap {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .typing-bubble {
            background: rgba(5,30,15,0.7);
            border: 1px solid rgba(0,220,100,0.28);
            border-radius: 18px;
            padding: 13px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .typing-text {
            color: rgba(0,220,100,0.65);
            font-size: 0.84em;
        }

        .dots { display: flex; gap: 5px; }

        .dots span {
            width: 7px;
            height: 7px;
            background: #00dc64;
            border-radius: 50%;
            animation: bounce 1.3s infinite;
        }

        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes bounce {
            0%,60%,100% { transform: translateY(0);   opacity: 0.4; }
            30%          { transform: translateY(-8px); opacity: 1; }
        }

        /* ===== INPUT AREA ===== */
        .input-wrapper {
            position: relative;
        }

        .input-area {
            background: rgba(0,0,0,0.7);
            border: 1px solid rgba(0,200,80,0.28);
            border-radius: 16px;
            padding: 12px 15px;
            display: flex;
            gap: 10px;
            align-items: flex-end;
            backdrop-filter: blur(12px);
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        .input-area:focus-within {
            border-color: rgba(0,220,100,0.55);
            box-shadow: 0 0 30px rgba(0,180,70,0.12);
        }

        .input-area textarea {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: #c8ecc8;
            font-size: 0.94em;
            resize: none;
            font-family: inherit;
            direction: rtl;
            max-height: 150px;
            min-height: 26px;
            line-height: 1.7;
        }

        .input-area textarea::placeholder {
            color: rgba(0,200,80,0.3);
        }

        .send-btn {
            background: linear-gradient(135deg, #00b050, #008040);
            border: none;
            border-radius: 12px;
            width: 48px;
            height: 48px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #fff;
            transition: all 0.3s;
            flex-shrink: 0;
        }

        .send-btn:hover:not(:disabled) {
            transform: scale(1.08);
            box-shadow: 0 0 25px rgba(0,180,70,0.5);
            background: linear-gradient(135deg, #00d060, #00a050);
        }

        .send-btn:active:not(:disabled) { transform: scale(0.95); }

        .send-btn:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        .input-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 7px;
            padding: 0 5px;
        }

        .char-count { font-size: 0.72em; color: rgba(0,200,80,0.3); }

        .clear-btn {
            background: transparent;
            border: 1px solid rgba(0,200,80,0.18);
            color: rgba(0,200,80,0.45);
            padding: 5px 12px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 0.77em;
            font-family: inherit;
            transition: all 0.3s;
        }

        .clear-btn:hover {
            border-color: rgba(0,220,100,0.5);
            color: #00dc64;
            background: rgba(0,180,70,0.08);
        }

        .footer-info { font-size: 0.72em; color: rgba(0,200,80,0.28); }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
            .header h1    { font-size: 1.35em; }
            .bacteria-logo { font-size: 45px; }
            .sample-questions { grid-template-columns: 1fr; }
            .msg-body { max-width: 90%; }
            .topics-bar { display: none; }
        }
    </style>



    <!-- Animated Background -->
    <div class="bg-canvas" id="bgCanvas"></div>

    <!-- ===== HEADER ===== -->
    <div class="header">
        <div class="header-top">
            <span class="bacteria-logo">🦠</span>
            <div class="header-text">
                <div class="header-label">◈ Bacteriology Expert AI ◈</div>
                <h1>هوش مصنوعی تخصصی باکتری‌شناسی</h1>
                <p class="header-sub">ایزوله‌شده و انحصاری برای علم باکتری‌شناسی</p>
            </div>
        </div>
        <div class="divider-line"></div>
        <div class="badge-row">
            <span class="badge">🔬 ساختار باکتری</span>
            <span class="badge">🧬 ژنتیک باکتریایی</span>
            <span class="badge">💊 آنتی‌بیوتیک‌ها</span>
            <span class="badge">🦠 پاتوژنز</span>
        </div>
    </div>

    <!-- ===== MAIN ===== -->
    <div class="main-container">

        <!-- Topics -->
        <div class="topics-bar">
            <button class="topic-btn" onclick="askTopic('ساختار سلول باکتریایی')">🔬 ساختار سلول</button>
            <button class="topic-btn" onclick="askTopic('دیواره سلولی باکتری‌ها')">🧱 دیواره سلولی</button>
            <button class="topic-btn" onclick="askTopic('ژنتیک باکتریایی و انتقال ژن')">🧬 ژنتیک باکتری</button>
            <button class="topic-btn" onclick="askTopic('منحنی رشد باکتری و مراحل آن')">📈 رشد باکتری</button>
            <button class="topic-btn" onclick="askTopic('مکانیسم‌های مقاومت آنتی‌بیوتیکی')">💊 مقاومت دارویی</button>
            <button class="topic-btn" onclick="askTopic('رنگ‌آمیزی گرم و اهمیت آن')">🔴 رنگ‌آمیزی گرم</button>
        </div>

        <!-- Chat -->
        <div class="chat-container" id="chatContainer">
            <div class="welcome-message" id="welcomeScreen">
                <span class="welcome-logo">🦠</span>
                <h2>به مرکز تخصصی باکتری‌شناسی خوش آمدید</h2>
                <div class="sub-title">◈ ایزوله شده برای پاسخگویی تخصصی ◈</div>
                <p>
                    <strong>توجه:</strong> این سامانه هوشمند صرفاً جهت پاسخگویی به سوالات مربوط به <strong>باکتری‌ها</strong> (ساختار، ژنتیک، مقاومت آنتی‌بیوتیکی، پاتوژنز و...) تنظیم شده است. سوالات مرتبط با ویروس‌ها، انگل‌ها، قارچ‌ها یا سایر مباحث غیرمرتبط پشتیبانی <u>نمی‌شوند</u>.
                </p>

                <div class="sample-questions">
                    <div class="sample-q" onclick="askSample('تفاوت ساختار دیواره سلولی باکتری‌های گرم مثبت و گرم منفی را توضیح بده')">
                        <span class="q-icon">🧱</span>
                        تفاوت دیواره گرم مثبت و گرم منفی
                    </div>
                    <div class="sample-q" onclick="askSample('مکانیسم‌های انتقال ژن افقی در باکتری‌ها (ترانسفورماسیون، ترانسداکسیون، کونژوگاسیون)')">
                        <span class="q-icon">🧬</span>
                        مکانیسم‌های انتقال ژن افقی
                    </div>
                    <div class="sample-q" onclick="askSample('مکانیسم‌های مقاومت آنتی‌بیوتیکی در باکتری‌ها را توضیح بده')">
                        <span class="q-icon">💊</span>
                        مکانیسم‌های مقاومت آنتی‌بیوتیکی
                    </div>
                    <div class="sample-q" onclick="askSample('فرآیند اسپورزایی در باکتری‌ها و اهمیت پزشکی آن')">
                        <span class="q-icon">💤</span>
                        اسپورزایی در باکتری‌ها
                    </div>
                </div>
            </div>
        </div>

        <!-- Input -->
        <div class="input-wrapper">
            <div class="input-area">
                <textarea id="userInput" placeholder="سوال خود را منحصراً درباره باکتری‌شناسی بنویسید..." rows="1" onkeydown="handleKey(event)" oninput="autoResize(this); updateCount()"></textarea>
                <button class="send-btn" id="sendBtn" onclick="sendMessage()" title="ارسال سوال">➤</button>
            </div>
            <div class="input-footer">
                <span class="char-count" id="charCount">۰ کاراکتر</span>
                <button class="clear-btn" onclick="clearChat()">🗑️ پاک کردن</button>
                <span class="footer-info">🦠 پاسخ‌ها کاملاً تخصصی و علمی هستند</span>
            </div>
        </div>

    </div>

    <script>
    // ─── Config ────────────────────────────────────────────────────────────────
    const API_KEY = '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';
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    // *** SYSTEM PROMPT (همراه با گاردریل سخت‌گیرانه) ***
    const SYSTEM_PROMPT = \`شما یک استاد تمام و متخصص برجسته در رشته "باکتری‌شناسی" (Bacteriology) هستید.

⛔ **قوانین محدودکننده (GUARDRAILS) - بسیار مهم و حیاتی:**
شما فقط و فقط مجاز به پاسخگویی در حیطه باکتری‌شناسی هستید. اگر کاربر سوالی خارج از این حیطه پرسید، باید قاطعانه و محترمانه پاسخ دادن را رد کنید.
❌ حوزه‌های ممنوعه: ویروس‌شناسی، انگل‌شناسی، قارچ‌شناسی، پزشکی عمومی (که ربطی به باکتری ندارد)، داروسازی عمومی (غیر از آنتی‌بیوتیک‌ها)، برنامه‌نویسی، سیاست، ورزش، تاریخ، ریاضیات، احوال‌پرسی‌های طولانی و هر موضوع غیر باکتریایی دیگر.

📝 **نحوه رد کردن سوالات ممنوعه:**
اگر سوال غیرمرتبط بود، هیچ توضیحی ندهید و دقیقاً فقط این متن را ارسال کنید:
"⛔ من دستیار تخصصی **باکتری‌شناسی** هستم و متأسفانه مجاز به پاسخگویی به سوالات خارج از این حوزه (مانند ویروس‌ها، انگل‌ها، قارچ‌ها یا مسائل عمومی) نیستم. لطفاً سوال خود را درباره ساختار باکتری‌ها، ژنتیک آن‌ها، آنتی‌بیوتیک‌ها یا بیماری‌های باکتریایی مطرح کنید."

✅ **حوزه‌های مجاز تخصصی شما:**
1. ساختار سلول باکتریایی (دیواره، غشا، کپسول، اسپور، فلاژل).
2. رنگ‌آمیزی‌های باکتریایی (گرم، اسیدفاست و...).
3. فیزیولوژی، متابولیسم، و منحنی رشد باکتریایی.
4. ژنتیک باکتریایی (پلاسمیدها، جهش، ترانسفورماسیون، کونژوگاسیون، ترانسداکسیون).
5. مقاومت آنتی‌بیوتیکی و مکانیسم عمل آنتی‌بیوتیک‌ها.
6. بیماری‌زایی باکتریایی (پاتوژنز، توکسین‌ها، بیوفیلم).
7. طبقه‌بندی باکتری‌های مهم پزشکی (استافیلوکوک، استرپتوکوک، انتروباکتریاسه، مایکوباکتریوم و...).
8. روش‌های کشت و تشخیص آزمایشگاهی باکتری‌ها.
9. واکسن‌های باکتریایی.

📌 **قوانین نگارشی:**
- پاسخ‌ها باید کاملاً علمی، دقیق و در سطح دانشگاهی باشند.
- نام‌های علمی را حتماً به لاتین و ایتالیک در پرانتز بنویسید (مثال: *Escherichia coli*).
- پاسخ‌ها ساختارمند با عنوان‌بندی واضح و لیست‌بندی شده باشند.
- تمام متون راست‌چین (RTL) و به زبان فارسی سلیس باشند.\`;

    // ─── State ─────────────────────────────────────────────────────────────────
    let history = [];

    // ─── Background Animation ──────────────────────────────────────────────────
    function initBackground() {
        const canvas = document.getElementById('bgCanvas');

        // Floating bacteria shapes
        for (let i = 0; i < 18; i++) {
            const el = document.createElement('div');
            el.classList.add('bacteria-particle');
            const size = 20 + Math.random() * 60;
            el.style.cssText = \`
                width:\${size}px; height:\${size * 0.6}px;
                left:\${Math.random()*100}%;
                animation-duration:\${15 + Math.random()*20}s;
                animation-delay:\${Math.random()*15}s;
            \`;
            canvas.appendChild(el);
        }

        // DNA-like vertical lines
        for (let i = 0; i < 8; i++) {
            const line = document.createElement('div');
            line.classList.add('dna-line');
            line.style.cssText = \`
                left:\${5 + i*13}%;
                top:\${Math.random()*30}%;
                height:\${100 + Math.random()*200}px;
                animation-duration:\${8 + Math.random()*8}s;
                animation-delay:\${Math.random()*5}s;
            \`;
            canvas.appendChild(line);
        }
    }

    // ─── Helpers ───────────────────────────────────────────────────────────────
    function autoResize(el) {
        el.style.height = 'auto';
        el.style.height = Math.min(el.scrollHeight, 150) + 'px';
    }

    function updateCount() {
        const v = document.getElementById('userInput').value.length;
        document.getElementById('charCount').textContent = v + ' کاراکتر';
    }

    function handleKey(e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    }

    function getTime() {
        return new Date().toLocaleTimeString('fa-IR', { hour:'2-digit', minute:'2-digit' });
    }

    function formatText(text) {
        // Headers
        text = text.replace(/^### (.+)$/gm, '<h3>$1</h3>');
        text = text.replace(/^## (.+)$/gm,  '<h3>$1</h3>');
        text = text.replace(/^# (.+)$/gm,   '<h3>$1</h3>');
        // Bold & italic
        text = text.replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>');
        text = text.replace(/\\*(.+?)\\*/g,     '<em>$1</em>');
        // Code
        text = text.replace(/\`(.+?)\`/g, '<code>$1</code>');
        // Highlight
        text = text.replace(/\\|\\|(.+?)\\|\\|/g, '<div class="highlight-box">$1</div>');
        // Blockquote as info box
        text = text.replace(/^> (.+)$/gm, '<div class="info-box">$1</div>');
        // Newlines
        text = text.replace(/\\n/g, '<br>');
        return text;
    }

    // ─── DOM helpers ───────────────────────────────────────────────────────────
    function removeWelcome() {
        const w = document.getElementById('welcomeScreen');
        if (w) w.remove();
    }

    function appendMessage(content, role) {
        removeWelcome();
        const chat = document.getElementById('chatContainer');

        const wrap = document.createElement('div');
        wrap.className = \`message \${role}\`;

        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.textContent = role === 'user' ? '🧑‍🎓' : '🦠';

        const body = document.createElement('div');
        body.className = 'msg-body';

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        bubble.innerHTML = role === 'assistant' ? formatText(content) : escapeHtml(content);

        const time = document.createElement('div');
        time.className = 'msg-time';
        time.textContent = getTime();

        body.appendChild(bubble);
        body.appendChild(time);
        wrap.appendChild(avatar);
        wrap.appendChild(body);
        chat.appendChild(wrap);
        chat.scrollTop = chat.scrollHeight;
    }

    function escapeHtml(t) {
        return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function showTyping() {
        const chat = document.getElementById('chatContainer');
        const el = document.createElement('div');
        el.className = 'typing-indicator';
        el.id = 'typingEl';
        el.innerHTML = \`
            <div class="typing-wrap">
                <span style="font-size:24px">🦠</span>
                <div class="typing-bubble">
                    <span class="typing-text">در حال تحلیل تخصصی سوال...</span>
                    <div class="dots"><span></span><span></span><span></span></div>
                </div>
            </div>\`;
        chat.appendChild(el);
        chat.scrollTop = chat.scrollHeight;
    }

    function hideTyping() {
        const el = document.getElementById('typingEl');
        if (el) el.remove();
    }

    // ─── Clear ─────────────────────────────────────────────────────────────────
    function clearChat() {
        if (!confirm('تمام مکالمه پاک می‌شود. ادامه می‌دهید؟')) return;
        history = [];
        document.getElementById('chatContainer').innerHTML = \`
            <div class="welcome-message" id="welcomeScreen">
                <span class="welcome-logo">🦠</span>
                <h2>مکالمه جدید شروع شد</h2>
                <div class="sub-title">سوال جدید خود را بنویسید</div>
            </div>\`;
    }

    // ─── Send ──────────────────────────────────────────────────────────────────
    async function sendMessage() {
        const input   = document.getElementById('userInput');
        const sendBtn = document.getElementById('sendBtn');
        const text    = input.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        history.push({ role: 'user', content: text });

        input.value = '';
        input.style.height = 'auto';
        updateCount();
        sendBtn.disabled = true;
        showTyping();

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': \`Bearer \${API_KEY}\`
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        ...history
                    ],
                    temperature: 0.25,
                    max_tokens: 4096,
                    top_p: 0.9
                })
            });

            if (!res.ok) throw new Error(\`HTTP_\${res.status}\`);

            const data    = await res.json();
            const answer  = data.choices[0].message.content;

            hideTyping();
            appendMessage(answer, 'assistant');
            history.push({ role: 'assistant', content: answer });

            // Trim history
            if (history.length > 22) history = history.slice(-18);

        } catch (err) {
            hideTyping();
            let msg = '⚠️ خطا در دریافت پاسخ.\\n\\n';
            if (err.message.includes('401')) msg += 'کلید API معتبر نیست.';
            else if (err.message.includes('429')) msg += 'محدودیت درخواست. لطفاً چند لحظه صبر کنید.';
            else if (err.message.includes('503')) msg += 'سرور موقتاً در دسترس نیست.';
            else msg += 'اتصال اینترنت خود را بررسی کنید.';
            appendMessage(msg, 'assistant');
        }

        sendBtn.disabled = false;
        input.focus();
    }

    // ─── Quick actions ─────────────────────────────────────────────────────────
    function askSample(q) {
        document.getElementById('userInput').value = q;
        updateCount();
        sendMessage();
    }

    function askTopic(topic) {
        askSample(\`\${topic} را به طور کامل و دانشگاهی با ذکر جزئیات علمی توضیح بده\`);
    }

    // ─── Init ──────────────────────────────────────────────────────────────────
    initBackground();
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


`,className:"w-html-embed"})]}),z=a=>{const{origin:t,pathname:r,search:n}=new URL(a);return`${t}${r}${n}`},T=d.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),E=({data:a})=>{const{system:t,resources:r,url:n,pageMeta:s}=a,p=z(n),g=d.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:r,breakpoints:f,onError:console.error}),[r]);return e.jsxs(b.Provider,{value:g,children:[e.jsx(m.Provider,{value:n,children:e.jsx(T,{pageKey:p,system:t})}),e.jsx(u,{url:n,pageMeta:s,siteName:c,imageLoader:i,assetBaseUrl:o}),e.jsx(x,{children:s.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),C=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:C},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-58/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-58/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{M as configValuesSerialized};
