import{j as e,r as l,a as o,i,R as g,b,P as m,c as u,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=t=>e.jsx("body",{className:"w-element",children:e.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


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
        }

        .stats-row {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 22px;
        }

        .stat-box {
            background: rgba(0,180,70,0.07);
            border: 1px solid rgba(0,200,80,0.2);
            border-radius: 12px;
            padding: 10px 18px;
            text-align: center;
        }

        .stat-box .num {
            font-size: 1.4em;
            font-weight: bold;
            color: #00dc64;
            display: block;
        }

        .stat-box .lbl {
            font-size: 0.72em;
            color: rgba(0,200,80,0.5);
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

        .msg-bubble table {
            width: 100%;
            border-collapse: collapse;
            margin: 12px 0;
            font-size: 0.88em;
        }

        .msg-bubble table th {
            background: rgba(0,180,70,0.15);
            border: 1px solid rgba(0,200,80,0.25);
            padding: 8px 10px;
            color: #00dc64;
        }

        .msg-bubble table td {
            border: 1px solid rgba(0,200,80,0.15);
            padding: 7px 10px;
            color: rgba(200,240,200,0.85);
        }

        .msg-bubble table tr:nth-child(even) td {
            background: rgba(0,180,70,0.05);
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
            .stats-row  { display: none; }
        }
    </style>



    <!-- Animated Background -->
    <div class="bg-canvas" id="bgCanvas"></div>

    <!-- ===== HEADER ===== -->
    <div class="header">
        <div class="header-top">
            <span class="bacteria-logo">🦠</span>
            <div class="header-text">
                <div class="header-label">◈ General Bacteriology AI ◈</div>
                <h1>هوش مصنوعی تخصصی باکتری‌شناسی عمومی</h1>
                <p class="header-sub">مرجع علمی باکتری‌شناسی — سطح دانشگاهی و تخصصی</p>
            </div>
        </div>
        <div class="divider-line"></div>
        <div class="badge-row">
            <span class="badge">🔬 ساختار باکتری</span>
            <span class="badge">🧬 ژنتیک باکتریایی</span>
            <span class="badge">⚗️ فیزیولوژی</span>
            <span class="badge">🌱 رشد و تکثیر</span>
            <span class="badge">💊 آنتی‌بیوتیک‌ها</span>
            <span class="badge">🛡️ مقاومت آنتی‌بیوتیکی</span>
            <span class="badge">🧪 روش‌های آزمایشگاهی</span>
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
            <button class="topic-btn" onclick="askTopic('متابولیسم باکتریایی')">⚗️ متابولیسم</button>
            <button class="topic-btn" onclick="askTopic('مقاومت آنتی‌بیوتیکی در باکتری‌ها')">💊 مقاومت آنتی‌بیوتیکی</button>
            <button class="topic-btn" onclick="askTopic('رنگ‌آمیزی گرم و اهمیت آن')">🔴 رنگ‌آمیزی گرم</button>
            <button class="topic-btn" onclick="askTopic('اسپورزایی در باکتری‌ها')">💤 اسپورزایی</button>
            <button class="topic-btn" onclick="askTopic('عوامل بیماری‌زایی باکتری‌ها')">🦠 پاتوژنز</button>
        </div>

        <!-- Chat -->
        <div class="chat-container" id="chatContainer">
            <div class="welcome-message" id="welcomeScreen">
                <span class="welcome-logo">🦠</span>
                <h2>به مرکز تخصصی باکتری‌شناسی خوش آمدید</h2>
                <div class="sub-title">◈ General Bacteriology Expert AI ◈</div>
                <p>
                    این سامانه هوشمند با تسلط کامل بر باکتری‌شناسی عمومی، آماده پاسخگویی به سوالات
                    دانشگاهی و تخصصی شما در تمام زمینه‌های این علم است.
                </p>

                <div class="stats-row">
                    <div class="stat-box">
                        <span class="num">۱۲+</span>
                        <span class="lbl">حوزه تخصصی</span>
                    </div>
                    <div class="stat-box">
                        <span class="num">۱۰۰۰+</span>
                        <span class="lbl">گونه باکتریایی</span>
                    </div>
                    <div class="stat-box">
                        <span class="num">دانشگاهی</span>
                        <span class="lbl">سطح پاسخ</span>
                    </div>
                    <div class="stat-box">
                        <span class="num">فارسی</span>
                        <span class="lbl">زبان پاسخ</span>
                    </div>
                </div>

                <div class="sample-questions">
                    <div class="sample-q" onclick="askSample('تفاوت ساختار دیواره سلولی باکتری‌های گرم مثبت و گرم منفی را توضیح بده')">
                        <span class="q-icon">🧱</span>
                        تفاوت دیواره سلولی گرم مثبت و گرم منفی
                    </div>
                    <div class="sample-q" onclick="askSample('مراحل رنگ‌آمیزی گرم و علت تمایز باکتری‌ها را شرح بده')">
                        <span class="q-icon">🔴</span>
                        مراحل رنگ‌آمیزی گرم
                    </div>
                    <div class="sample-q" onclick="askSample('منحنی رشد باکتری و مراحل مختلف آن را با جزئیات کامل توضیح بده')">
                        <span class="q-icon">📈</span>
                        منحنی رشد باکتری و مراحل آن
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
                    <div class="sample-q" onclick="askSample('عوامل بیماری‌زایی باکتری‌ها (توکسین‌ها، آنزیم‌ها، کپسول)')">
                        <span class="q-icon">🦠</span>
                        عوامل بیماری‌زایی باکتری‌ها
                    </div>
                    <div class="sample-q" onclick="askSample('متابولیسم باکتریایی: تنفس هوازی، بی‌هوازی و تخمیر')">
                        <span class="q-icon">⚗️</span>
                        انواع متابولیسم باکتریایی
                    </div>
                </div>
            </div>
        </div>

        <!-- Input -->
        <div class="input-wrapper">
            <div class="input-area">
                <textarea id="userInput" placeholder="سوال تخصصی باکتری‌شناسی خود را بنویسید... (Enter = ارسال | Shift+Enter = خط جدید)" rows="1" onkeydown="handleKey(event)" oninput="autoResize(this); updateCount()"></textarea>
                <button class="send-btn" id="sendBtn" onclick="sendMessage()" title="ارسال سوال">➤</button>
            </div>
            <div class="input-footer">
                <span class="char-count" id="charCount">۰ کاراکتر</span>
                <button class="clear-btn" onclick="clearChat()">🗑️ پاک کردن</button>
                <span class="footer-info">🦠 باکتری‌شناسی عمومی — سطح دانشگاهی</span>
            </div>
        </div>

    </div>

    <script>
    // ─── Config ────────────────────────────────────────────────────────────────
    const API_KEY = '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';
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    const SYSTEM_PROMPT = \`شما یک استاد و متخصص برجسته در حوزه باکتری‌شناسی عمومی (General Bacteriology) هستید. شما فقط و فقط به سوالات مرتبط با باکتری‌شناسی پاسخ می‌دهید.

حوزه‌های تخصصی دقیق شما:

**۱. ساختار سلول باکتریایی (Bacterial Cell Structure):**
- دیواره سلولی: پپتیدوگلیکان، لیپوپلی‌ساکارید (LPS)، اسید تایکوئیک
- گرم مثبت (Gram-positive) در مقابل گرم منفی (Gram-negative): تفاوت‌های ساختاری، رنگ‌آمیزی گرم
- غشای سیتوپلاسمی: ساختار، عملکرد، پروتئین‌های انتقالی
- سیتوپلاسم: ریبوزوم ۷۰S، DNA ژنومی، پلاسمیدها، مزوزوم
- کپسول و لایه‌های بیرونی: نقش در پاتوژنز و فرار از ایمنی
- فلاژل: ساختار، انواع آرایش، نقش در تحرک و بیماری‌زایی
- پیلی و فیمبریا: نقش در چسبندگی و کونژوگاسیون
- اسپور: ساختار (Core, Cortex, Coat), اسپورزایی، جوانه‌زنی، Dipicolinic acid

**۲. رنگ‌آمیزی‌های باکتریایی:**
- رنگ‌آمیزی گرم: مراحل دقیق، Crystal violet، Iodine، Decolorizer، Safranin
- رنگ‌آمیزی اسیدفاست (Ziehl-Neelsen): مایکوباکتریوم، مراحل
- رنگ‌آمیزی اسپور (Schaeffer-Fulton)
- رنگ‌آمیزی کپسول (Quellung reaction)
- رنگ‌آمیزی فلاژل

**۳. فیزیولوژی و متابولیسم باکتریایی:**
- تنفس هوازی (Aerobic respiration): چرخه کربس، زنجیره انتقال الکترون
- تنفس بی‌هوازی (Anaerobic respiration): نیترات، سولفات به‌عنوان گیرنده الکترون
- تخمیر (Fermentation): انواع (اتانولی، لاکتیک، بوتانولی، مختلط اسید)
- آنزیم‌های کاتالاز، اکسیداز، اوره‌آز، IMViC (Indole, MR, VP, Citrate)
- فتوسنتز باکتریایی: سیانوباکتری‌ها، بنفش‌گوگرد

**۴. رشد و تکثیر باکتریایی:**
- تقسیم دوتایی (Binary fission): مکانیسم، نقش FtsZ
- منحنی رشد: Lag phase, Log/Exponential phase, Stationary phase, Death phase
- محاسبه زمان نسل (Generation time): G = t / n
- فرمول رشد: N = N₀ × 2ⁿ
- عوامل موثر بر رشد: دما، pH، فعالیت آبی (aw)، فشار اسمزی، اکسیژن
- کشت‌های باکتریایی: Batch, Continuous (Chemostat)
- محیط‌های کشت: Selective, Differential, Enrichment, General purpose

**۵. ژنتیک باکتریایی:**
- کروموزوم باکتریایی: ساختار حلقوی، فوق‌مارپیچ، هیستون‌های مشابه
- پلاسمید: انواع (F plasmid, R plasmid, Ti plasmid, Col plasmid)، انتقال
- ترانسپوزون‌ها (Transposons): IS elements, Complex transposons
- جهش: انواع (نقطه‌ای، حذف، درج)، جهش‌زاها (شیمیایی، فیزیکی)
- ترمیم DNA: Mismatch repair, Nucleotide excision repair, SOS response
- انتقال ژن افقی (HGT):
  - ترانسفورماسیون: مکانیسم، شایستگی (Competence)، تجربه گریفیث
  - ترانسداکسیون: عمومی (Generalized) و اختصاصی (Specialized)
  - کونژوگاسیون: F factor، F+ × F⁻، Hfr، R plasmid
- بیان ژن: اپران لاک (lac operon)، اپران تریپتوفان (trp operon)
- ریگولاسیون: inducer, repressor, attenuation

**۶. مقاومت آنتی‌بیوتیکی:**
- مکانیسم‌های مقاومت:
  - تولید آنزیم‌های تجزیه‌کننده: بتالاکتاماز (ESBL, Carbapenemase)
  - تغییر هدف دارو: PBP2a در MRSA
  - پمپ‌های خروجی (Efflux pumps): MexAB-OprM
  - کاهش نفوذپذیری غشا: از دست دادن پورین‌ها
- انواع مقاومت: ذاتی، اکتسابی، چندگانه (MDR, XDR, PDR)
- بتالاکتاماز: TEM, SHV, CTX-M, KPC, NDM, OXA
- آنتی‌بیوتیک‌های مهم: پنی‌سیلین، سفالوسپورین، کاربوپنم، ونکومایسین، کینولون
- مکانیسم عمل هر کلاس آنتی‌بیوتیک

**۷. بیماری‌زایی باکتریایی (Pathogenesis):**
- عوامل بیماری‌زایی (Virulence factors):
  - توکسین‌های خارج سلولی (Exotoxins): آنتروتوکسین، نوروتوکسین، سیتوتوکسین
  - اندوتوکسین (LPS): مکانیسم عمل، شوک سپتیک
  - کپسول: فرار از فاگوسیتوز
  - آنزیم‌های تهاجمی: هیالورونیداز، کلاژناز، استرپتوکیناز
  - سیستم‌های ترشحی: T3SS, T4SS, T6SS
- مراحل عفونت: چسبندگی، تهاجم، فرار از ایمنی، آسیب بافتی
- بیوفیلم (Biofilm): تشکیل، Quorum sensing، مقاومت

**۸. سیستماتیک و طبقه‌بندی باکتری‌ها:**
- طبقه‌بندی بر اساس رنگ گرم، مورفولوژی، اکسیژن‌خواهی
- باکتری‌های مهم پزشکی:
  - Gram+ cocci: Staphylococcus, Streptococcus, Enterococcus
  - Gram+ bacilli: Bacillus, Clostridium, Listeria, Corynebacterium
  - Gram- cocci: Neisseria
  - Gram- bacilli: Enterobacteriaceae, Pseudomonas, Haemophilus, Vibrio
  - Spiral: Helicobacter, Campylobacter, Treponema, Borrelia
  - Acid-fast: Mycobacterium
  - Atypical: Mycoplasma, Chlamydia, Rickettsia, Legionella

**۹. روش‌های آزمایشگاهی:**
- کشت: روش کشت، دمای انکوباسیون، محیط‌های اختصاصی
- شناسایی: تست‌های بیوشیمیایی (API strip، VITEK)
- حساسیت آنتی‌بیوتیکی: Kirby-Bauer، MIC، MBC
- PCR و روش‌های مولکولی
- MALDI-TOF Mass Spectrometry
- کشت خون، CSF، ادرار و تفسیر نتایج

**۱۰. ایمنی علیه باکتری‌ها:**
- ایمنی ذاتی: فاگوسیتوز، کمپلمان، پپتیدهای ضدمیکروبی
- ایمنی اکتسابی: پاسخ هومورال (آنتی‌بادی)، پاسخ سلولی (Th1, Th17)
- واکسن‌های باکتریایی: کشته‌شده، زنده‌تضعیف‌شده، توکسوئید، نوترکیب

**قوانین پاسخگویی:**
- پاسخ‌ها باید کاملاً علمی، دقیق و دانشگاهی باشند
- از اصطلاحات علمی صحیح (لاتین + فارسی) استفاده کنید
- پاسخ‌ها ساختارمند با عنوان‌بندی واضح باشند
- مثال‌های بالینی و آزمایشگاهی مرتبط ذکر کنید
- فرمول‌ها و معادلات علمی را بنویسید
- اگر سوال خارج از باکتری‌شناسی است، مودبانه توضیح دهید
- هرگز اطلاعات غلط علمی ندهید
- پاسخ به زبان فارسی روان و علمی باشد\`;

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
                    <span class="typing-text">در حال تحلیل سوال...</span>
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



`,className:"w-html-embed"})}),S=t=>{const{origin:a,pathname:s,search:n}=new URL(t);return`${a}${s}${n}`},T=l.memo(({pageKey:t,system:a})=>e.jsx(w,{system:a},t),(t,a)=>t.pageKey===a.pageKey),C=({data:t})=>{const{system:a,resources:s,url:n,pageMeta:r}=t,p=S(n),d=l.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:s,breakpoints:f,onError:console.error}),[s]);return e.jsxs(g.Provider,{value:d,children:[e.jsx(b.Provider,{value:n,children:e.jsx(T,{pageKey:p,system:a})}),e.jsx(m,{url:n,pageMeta:r,siteName:c,imageLoader:i,assetBaseUrl:o}),e.jsx(u,{children:r.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),z=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${y}`})}),v.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"font",crossOrigin:"anonymous"},a)),k.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"image"},a))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-58/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-58/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{B as configValuesSerialized};
