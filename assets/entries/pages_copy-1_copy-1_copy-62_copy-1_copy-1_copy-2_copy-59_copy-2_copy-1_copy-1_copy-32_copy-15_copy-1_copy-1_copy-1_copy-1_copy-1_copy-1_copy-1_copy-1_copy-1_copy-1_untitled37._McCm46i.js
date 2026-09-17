import{j as e,r as l,a as o,i as n,R as g,b as m,P as h,c as u,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔬 هوش مصنوعی انگل‌شناسی بندپایان</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #0f766e;
            --primary-light: #14b8a6;
            --primary-dark: #0d9488;
            --secondary: #7c3aed;
            --bg-dark: #0a0f1a;
            --bg-card: #111827;
            --bg-chat: #1a2332;
            --bg-input: #1e293b;
            --text-primary: #f1f5f9;
            --text-secondary: #94a3b8;
            --border: #1e3a5f;
            --accent-green: #10b981;
            --accent-red: #ef4444;
            --accent-amber: #f59e0b;
            --glass: rgba(17, 24, 39, 0.8);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: var(--bg-dark);
            color: var(--text-primary);
            min-height: 100vh;
            overflow: hidden;
        }

        /* Animated Background */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            overflow: hidden;
        }

        .bg-animation .particle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.08;
            animation: floatParticle linear infinite;
        }

        @keyframes floatParticle {
            0% { transform: translateY(100vh) rotate(0deg) scale(0); opacity: 0; }
            10% { opacity: 0.08; }
            90% { opacity: 0.08; }
            100% { transform: translateY(-100px) rotate(720deg) scale(1); opacity: 0; }
        }

        .dna-helix {
            position: fixed;
            right: -50px;
            top: 0;
            height: 100%;
            width: 100px;
            opacity: 0.03;
            z-index: 0;
        }

        /* Main Container */
        .app-container {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            height: 100vh;
            max-width: 900px;
            margin: 0 auto;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, rgba(15, 118, 110, 0.2), rgba(124, 58, 237, 0.1));
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(20, 184, 166, 0.2);
            padding: 16px 24px;
            display: flex;
            align-items: center;
            gap: 16px;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--primary), var(--secondary), var(--primary-light));
            background-size: 200% 100%;
            animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .logo-container {
            position: relative;
            width: 56px;
            height: 56px;
            flex-shrink: 0;
        }

        .logo-ring {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            border: 2px solid var(--primary-light);
            animation: rotate 8s linear infinite;
            border-top-color: transparent;
            border-left-color: transparent;
        }

        .logo-ring-inner {
            position: absolute;
            inset: 4px;
            border-radius: 50%;
            border: 2px solid var(--secondary);
            animation: rotate 5s linear infinite reverse;
            border-bottom-color: transparent;
            border-right-color: transparent;
        }

        @keyframes rotate {
            to { transform: rotate(360deg); }
        }

        .logo-icon {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        .header-text h1 {
            font-size: 18px;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary-light), #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.4;
        }

        .header-text p {
            font-size: 11px;
            color: var(--text-secondary);
            font-weight: 400;
        }

        .header-status {
            margin-right: auto;
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(16, 185, 129, 0.1);
            padding: 6px 14px;
            border-radius: 20px;
            border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background: var(--accent-green);
            border-radius: 50%;
            animation: pulse 2s ease infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
            50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
        }

        .header-status span {
            font-size: 11px;
            color: var(--accent-green);
            font-weight: 500;
        }

        /* Quick Topics */
        .topics-bar {
            background: rgba(17, 24, 39, 0.6);
            backdrop-filter: blur(10px);
            padding: 12px 20px;
            display: flex;
            gap: 8px;
            overflow-x: auto;
            border-bottom: 1px solid rgba(30, 58, 95, 0.3);
            scrollbar-width: none;
        }

        .topics-bar::-webkit-scrollbar { display: none; }

        .topic-chip {
            flex-shrink: 0;
            padding: 6px 14px;
            background: rgba(15, 118, 110, 0.15);
            border: 1px solid rgba(20, 184, 166, 0.2);
            border-radius: 20px;
            font-size: 12px;
            color: var(--primary-light);
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Vazirmatn', sans-serif;
            white-space: nowrap;
        }

        .topic-chip:hover {
            background: rgba(15, 118, 110, 0.3);
            border-color: var(--primary-light);
            transform: translateY(-1px);
        }

        /* Chat Area */
        .chat-area {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            scroll-behavior: smooth;
        }

        .chat-area::-webkit-scrollbar {
            width: 4px;
        }

        .chat-area::-webkit-scrollbar-track {
            background: transparent;
        }

        .chat-area::-webkit-scrollbar-thumb {
            background: rgba(20, 184, 166, 0.3);
            border-radius: 4px;
        }

        /* Welcome Screen */
        .welcome-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
            text-align: center;
            padding: 40px 20px;
            animation: fadeInUp 0.8s ease;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .welcome-icon {
            font-size: 72px;
            margin-bottom: 20px;
            animation: bounceIn 1s ease;
            filter: drop-shadow(0 0 30px rgba(20, 184, 166, 0.3));
        }

        @keyframes bounceIn {
            0% { transform: scale(0); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        .welcome-screen h2 {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 10px;
            background: linear-gradient(135deg, var(--primary-light), #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .welcome-screen p {
            color: var(--text-secondary);
            font-size: 14px;
            max-width: 500px;
            line-height: 1.8;
            margin-bottom: 30px;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            max-width: 500px;
            width: 100%;
        }

        .feature-card {
            background: rgba(15, 118, 110, 0.08);
            border: 1px solid rgba(20, 184, 166, 0.15);
            border-radius: 16px;
            padding: 16px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            background: rgba(15, 118, 110, 0.15);
            border-color: var(--primary-light);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(20, 184, 166, 0.1);
        }

        .feature-card .icon {
            font-size: 28px;
            margin-bottom: 8px;
        }

        .feature-card .title {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 4px;
        }

        .feature-card .desc {
            font-size: 11px;
            color: var(--text-secondary);
        }

        /* Messages */
        .message {
            display: flex;
            gap: 12px;
            animation: messageIn 0.4s ease;
            max-width: 85%;
        }

        @keyframes messageIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .message.user {
            flex-direction: row-reverse;
            align-self: flex-start;
        }

        .message.bot {
            align-self: flex-end;
        }

        .message-avatar {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 18px;
        }

        .message.bot .message-avatar {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            box-shadow: 0 4px 15px rgba(15, 118, 110, 0.3);
        }

        .message.user .message-avatar {
            background: linear-gradient(135deg, var(--secondary), #6d28d9);
            box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
        }

        .message-content {
            padding: 14px 18px;
            border-radius: 18px;
            line-height: 1.8;
            font-size: 14px;
            position: relative;
        }

        .message.bot .message-content {
            background: linear-gradient(135deg, rgba(15, 118, 110, 0.15), rgba(15, 118, 110, 0.08));
            border: 1px solid rgba(20, 184, 166, 0.15);
            border-top-right-radius: 4px;
            color: var(--text-primary);
        }

        .message.user .message-content {
            background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(124, 58, 237, 0.1));
            border: 1px solid rgba(124, 58, 237, 0.2);
            border-top-left-radius: 4px;
        }

        .message-content img {
            max-width: 100%;
            max-height: 250px;
            border-radius: 12px;
            margin-top: 8px;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .message-content strong {
            color: var(--primary-light);
        }

        .message-content em {
            color: #a78bfa;
        }

        .message-time {
            font-size: 10px;
            color: var(--text-secondary);
            margin-top: 6px;
            opacity: 0.7;
        }

        /* Typing Indicator */
        .typing-indicator {
            display: none;
            align-items: center;
            gap: 12px;
            padding: 8px 0;
            animation: messageIn 0.3s ease;
        }

        .typing-indicator.active {
            display: flex;
        }

        .typing-dots {
            display: flex;
            gap: 4px;
            padding: 12px 18px;
            background: rgba(15, 118, 110, 0.1);
            border-radius: 18px;
            border: 1px solid rgba(20, 184, 166, 0.1);
        }

        .typing-dots span {
            width: 8px;
            height: 8px;
            background: var(--primary-light);
            border-radius: 50%;
            animation: typingBounce 1.4s ease infinite;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingBounce {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-8px); opacity: 1; }
        }

        /* Image Preview */
        .image-preview-container {
            display: none;
            padding: 8px 20px;
            background: rgba(17, 24, 39, 0.8);
        }

        .image-preview-container.active {
            display: block;
        }

        .image-preview-wrapper {
            position: relative;
            display: inline-block;
            border-radius: 12px;
            overflow: hidden;
            border: 2px solid var(--primary-light);
            animation: fadeInUp 0.3s ease;
        }

        .image-preview-wrapper img {
            max-height: 120px;
            max-width: 200px;
            display: block;
        }

        .image-preview-remove {
            position: absolute;
            top: 6px;
            left: 6px;
            width: 24px;
            height: 24px;
            background: rgba(239, 68, 68, 0.9);
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s;
        }

        .image-preview-remove:hover {
            transform: scale(1.1);
        }

        /* Input Area */
        .input-area {
            background: rgba(17, 24, 39, 0.9);
            backdrop-filter: blur(20px);
            border-top: 1px solid rgba(30, 58, 95, 0.3);
            padding: 16px 20px;
        }

        .input-wrapper {
            display: flex;
            align-items: flex-end;
            gap: 10px;
            background: var(--bg-input);
            border-radius: 20px;
            padding: 8px;
            border: 1px solid rgba(30, 58, 95, 0.5);
            transition: border-color 0.3s;
        }

        .input-wrapper:focus-within {
            border-color: var(--primary-light);
            box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
        }

        .input-wrapper textarea {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: var(--text-primary);
            font-family: 'Vazirmatn', sans-serif;
            font-size: 14px;
            resize: none;
            max-height: 120px;
            min-height: 24px;
            padding: 8px 12px;
            line-height: 1.6;
        }

        .input-wrapper textarea::placeholder {
            color: var(--text-secondary);
            opacity: 0.6;
        }

        .input-actions {
            display: flex;
            gap: 4px;
            align-items: center;
        }

        .btn-action {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            transition: all 0.3s ease;
            font-family: 'Vazirmatn', sans-serif;
            background: transparent;
            color: var(--text-secondary);
        }

        .btn-action:hover {
            background: rgba(20, 184, 166, 0.1);
            color: var(--primary-light);
        }

        .btn-send {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark)) !important;
            color: white !important;
            box-shadow: 0 4px 15px rgba(15, 118, 110, 0.3);
        }

        .btn-send:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(15, 118, 110, 0.4);
        }

        .btn-send:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        #fileInput {
            display: none;
        }

        /* Footer */
        .footer-note {
            text-align: center;
            padding: 8px;
            font-size: 10px;
            color: var(--text-secondary);
            opacity: 0.5;
        }

        /* Markdown Styling */
        .message-content h3 {
            color: var(--primary-light);
            margin: 10px 0 6px 0;
            font-size: 15px;
        }

        .message-content ul, .message-content ol {
            padding-right: 20px;
            margin: 8px 0;
        }

        .message-content li {
            margin: 4px 0;
        }

        .message-content code {
            background: rgba(0,0,0,0.3);
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 13px;
            color: #f0abfc;
        }

        .message-content p {
            margin: 6px 0;
        }

        .message-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
            font-size: 13px;
        }

        .message-content table th,
        .message-content table td {
            border: 1px solid rgba(20, 184, 166, 0.2);
            padding: 8px 12px;
            text-align: right;
        }

        .message-content table th {
            background: rgba(15, 118, 110, 0.2);
            color: var(--primary-light);
            font-weight: 600;
        }

        .message-content table tr:nth-child(even) {
            background: rgba(15, 118, 110, 0.05);
        }

        .message-content hr {
            border: none;
            border-top: 1px solid rgba(20, 184, 166, 0.15);
            margin: 12px 0;
        }

        /* Responsive */
        @media (max-width: 640px) {
            .header {
                padding: 12px 16px;
            }

            .header-text h1 {
                font-size: 15px;
            }

            .header-status {
                display: none;
            }

            .feature-grid {
                grid-template-columns: 1fr 1fr;
                gap: 8px;
            }

            .message {
                max-width: 92%;
            }

            .chat-area {
                padding: 12px;
            }

            .welcome-icon {
                font-size: 56px;
            }

            .welcome-screen h2 {
                font-size: 20px;
            }
        }

        /* Notification */
        .notification {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-100px);
            background: rgba(239, 68, 68, 0.9);
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 13px;
            font-family: 'Vazirmatn', sans-serif;
            z-index: 100;
            transition: transform 0.4s ease;
            backdrop-filter: blur(10px);
        }

        .notification.show {
            transform: translateX(-50%) translateY(0);
        }

        .notification.warning {
            background: rgba(245, 158, 11, 0.9);
        }

        /* Clear Chat Button */
        .btn-clear {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.2);
            color: var(--accent-red);
            padding: 6px 12px;
            border-radius: 10px;
            font-size: 11px;
            cursor: pointer;
            font-family: 'Vazirmatn', sans-serif;
            transition: all 0.3s;
            display: none;
        }

        .btn-clear.show {
            display: block;
        }

        .btn-clear:hover {
            background: rgba(239, 68, 68, 0.2);
        }
    </style>



<!-- Background Animation -->
<div class="bg-animation" id="bgAnimation"></div>

<!-- Notification -->
<div class="notification" id="notification"></div>

<!-- Main App -->
<div class="app-container">
    
    <!-- Header -->
    <header class="header">
        <div class="logo-container">
            <div class="logo-ring"></div>
            <div class="logo-ring-inner"></div>
            <div class="logo-icon">🔬</div>
        </div>
        <div class="header-text">
            <h1>انگل‌شناسی بندپایان AI</h1>
            <p>دستیار هوشمند تخصصی آزمایشگاه و تئوری</p>
        </div>
        <button class="btn-clear" id="btnClear" onclick="clearChat()">🗑️ پاک کردن</button>
        <div class="header-status">
            <div class="status-dot"></div>
            <span>آنلاین</span>
        </div>
    </header>

    <!-- Quick Topics -->
    <div class="topics-bar">
        <button class="topic-chip" onclick="askTopic('کنه‌های سخت (Ixodidae) را معرفی کن')">🕷️ کنه‌های سخت</button>
        <button class="topic-chip" onclick="askTopic('انواع شپش انسانی و چرخه زندگی آن‌ها')">🪲 شپش‌ها</button>
        <button class="topic-chip" onclick="askTopic('پشه آنوفل و انتقال مالاریا')">🦟 پشه‌ها</button>
        <button class="topic-chip" onclick="askTopic('مگس‌های خونخوار و اهمیت پزشکی آن‌ها')">🪰 مگس‌ها</button>
        <button class="topic-chip" onclick="askTopic('ساس تختخواب و ویژگی‌های آن')">🐛 ساس</button>
        <button class="topic-chip" onclick="askTopic('کک و بیماری‌های منتقله')">🦗 کک‌ها</button>
        <button class="topic-chip" onclick="askTopic('مایت‌ها و جرب در انسان')">🕸️ مایت‌ها</button>
        <button class="topic-chip" onclick="askTopic('میازیس و مگس‌های عامل آن')">🔬 میازیس</button>
    </div>

    <!-- Chat Area -->
    <div class="chat-area" id="chatArea">
        <!-- Welcome Screen -->
        <div class="welcome-screen" id="welcomeScreen">
            <div class="welcome-icon">🦟</div>
            <h2>به دستیار انگل‌شناسی بندپایان خوش آمدید</h2>
            <p>
                من یک هوش مصنوعی تخصصی در زمینه انگل‌شناسی بندپایان (Medical Arthropod Parasitology) هستم.
                می‌توانید سوالات تئوری بپرسید یا تصاویر آزمایشگاهی ارسال کنید.
            </p>
            <div class="feature-grid">
                <div class="feature-card" onclick="askTopic('مهم‌ترین بندپایان انگل انسان را دسته‌بندی کن')">
                    <div class="icon">📚</div>
                    <div class="title">دسته‌بندی بندپایان</div>
                    <div class="desc">طبقه‌بندی علمی انگل‌ها</div>
                </div>
                <div class="feature-card" onclick="askTopic('بیماری‌های منتقله توسط بندپایان را توضیح بده')">
                    <div class="icon">🦠</div>
                    <div class="title">بیماری‌های منتقله</div>
                    <div class="desc">بیماری‌ها و ناقلین</div>
                </div>
                <div class="feature-card" onclick="askTopic('روش‌های تشخیص آزمایشگاهی بندپایان انگلی')">
                    <div class="icon">🧪</div>
                    <div class="title">تشخیص آزمایشگاهی</div>
                    <div class="desc">شناسایی و تشخیص</div>
                </div>
                <div class="feature-card" onclick="askTopic('چرخه زندگی مهم‌ترین بندپایان انگلی')">
                    <div class="icon">🔄</div>
                    <div class="title">چرخه زندگی</div>
                    <div class="desc">مراحل رشد و تکامل</div>
                </div>
            </div>
        </div>

        <!-- Typing Indicator -->
        <div class="typing-indicator" id="typingIndicator">
            <div class="message-avatar" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark)); box-shadow: 0 4px 15px rgba(15, 118, 110, 0.3);">
                🔬
            </div>
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>

    <!-- Image Preview -->
    <div class="image-preview-container" id="imagePreviewContainer">
        <div class="image-preview-wrapper">
            <img id="imagePreview" src="" alt="preview">
            <button class="image-preview-remove" onclick="removeImage()">✕</button>
        </div>
    </div>

    <!-- Input Area -->
    <div class="input-area">
        <div class="input-wrapper">
            <textarea id="messageInput" placeholder="سوال خود در مورد انگل‌شناسی بندپایان را بنویسید..." rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this)"></textarea>
            <div class="input-actions">
                <input type="file" id="fileInput" accept="image/*" onchange="handleImageUpload(event)">
                <button class="btn-action" onclick="document.getElementById('fileInput').click()" title="ارسال تصویر">
                    📷
                </button>
                <button class="btn-action btn-send" id="btnSend" onclick="sendMessage()" title="ارسال">
                    ➤
                </button>
            </div>
        </div>
        <div class="footer-note">
            🔬 تخصصی در انگل‌شناسی بندپایان | تصاویر آزمایشگاهی قابل آنالیز هستند
        </div>
    </div>
</div>

<script>
    // ============ CONFIGURATION ============
    const API_KEY = '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';
    const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

    const SYSTEM_PROMPT = \`تو یک استاد و متخصص برجسته در رشته انگل‌شناسی بندپایان (Medical Arthropod Parasitology) هستی. تو فقط و فقط به سوالات مرتبط با انگل‌شناسی بندپایان پاسخ می‌دهی.

حوزه‌های تخصصی تو شامل:

1. **کنه‌ها (Ticks)**: کنه‌های سخت (Ixodidae) و کنه‌های نرم (Argasidae)، گونه‌های مهم مثل Ixodes, Dermacentor, Rhipicephalus, Hyalomma, Amblyomma, Ornithodoros, Argas
2. **مایت‌ها (Mites)**: Sarcoptes scabiei (عامل جرب)، Demodex folliculorum و D. brevis، مایت‌های گرد و غبار، Trombiculidae (چیگر)، مایت‌های ذخیره‌ای
3. **پشه‌ها (Mosquitoes)**: Anopheles (ناقل مالاریا)، Aedes (ناقل دنگی، زیکا)، Culex (ناقل فیلاریازیس)، مورفولوژی، چرخه زندگی
4. **مگس‌ها (Flies)**: مگس‌های خونخوار و غیرخونخوار، Glossina (مگس تسه‌تسه)، Simulium (پشه شن)، Phlebotomus (خاکی)، Chrysops، Stomoxys، Musca، Calliphoridae، Sarcophagidae
5. **شپش‌ها (Lice)**: Pediculus humanus capitis، P. humanus corporis، Phthirus pubis
6. **کک‌ها (Fleas)**: Pulex irritans، Xenopsylla cheopis، Ctenocephalides، Tunga penetrans
7. **ساس‌ها (Bugs)**: Cimex lectularius، Triatoma (ناقل شاگاس)
8. **سایر بندپایان**: عقرب‌ها، عنکبوت‌ها، هزارپایان از نظر پزشکی
9. **بیماری‌های منتقله**: مالاریا، لیشمانیوز، تریپانوزومیازیس، فیلاریازیس، تب راجعه، بیماری لایم، CCHF، ریکتزیوزها، طاعون، میازیس
10. **مورفولوژی و تشخیص آزمایشگاهی**: ویژگی‌های ریخت‌شناسی، کلیدهای تشخیصی، روش‌های جمع‌آوری و نگهداری نمونه
11. **اپیدمیولوژی و کنترل**: روش‌های مبارزه، حشره‌کش‌ها، مدیریت تلفیقی ناقلین (IVM)
12. **چرخه زندگی**: دگردیسی کامل و ناقص، مراحل تکاملی

قوانین مهم:
- فقط به سوالات مربوط به انگل‌شناسی بندپایان پاسخ بده
- اگر سوالی خارج از این حوزه پرسیده شد، مودبانه بگو: "⚠️ متأسفم، من فقط در زمینه انگل‌شناسی بندپایان تخصص دارم و نمی‌توانم به این سوال پاسخ دهم. لطفاً سوالی مرتبط با بندپایان انگلی بپرسید."
- پاسخ‌ها را به فارسی و با اصطلاحات علمی (به همراه نام لاتین) ارائه بده
- اگر تصویری ارسال شد، آن را از نظر انگل‌شناسی بندپایان تحلیل کن
- از فرمت مارک‌داون برای ساختاردهی پاسخ استفاده کن
- پاسخ‌ها باید دقیق، علمی و جامع باشند\`;

    // ============ STATE ============
    let conversationHistory = [];
    let currentImageBase64 = null;
    let currentImageType = null;
    let isProcessing = false;

    // ============ BACKGROUND ANIMATION ============
    function createParticles() {
        const bg = document.getElementById('bgAnimation');
        const colors = ['#14b8a6', '#7c3aed', '#10b981', '#f59e0b'];
        
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 120 + 30;
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.cssText = \`
                width: \${size}px;
                height: \${size}px;
                background: \${color};
                left: \${Math.random() * 100}%;
                animation-duration: \${Math.random() * 20 + 15}s;
                animation-delay: \${Math.random() * 10}s;
            \`;
            bg.appendChild(particle);
        }
    }
    createParticles();

    // ============ UTILITY FUNCTIONS ============
    function getTime() {
        return new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
    }

    function showNotification(msg, type = 'error') {
        const n = document.getElementById('notification');
        n.textContent = msg;
        n.className = \`notification \${type} show\`;
        setTimeout(() => n.classList.remove('show'), 3500);
    }

    function autoResize(el) {
        el.style.height = 'auto';
        el.style.height = Math.min(el.scrollHeight, 120) + 'px';
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    // ============ SIMPLE MARKDOWN PARSER ============
    function parseMarkdown(text) {
        let html = text;
        
        // Tables
        html = html.replace(/\\n?\\|(.+)\\|\\n\\|[-| :]+\\|\\n((?:\\|.+\\|\\n?)*)/g, function(match, header, body) {
            let table = '<table><thead><tr>';
            header.split('|').filter(c => c.trim()).forEach(h => {
                table += \`<th>\${h.trim()}</th>\`;
            });
            table += '</tr></thead><tbody>';
            body.trim().split('\\n').forEach(row => {
                table += '<tr>';
                row.split('|').filter(c => c.trim()).forEach(cell => {
                    table += \`<td>\${cell.trim()}</td>\`;
                });
                table += '</tr>';
            });
            table += '</tbody></table>';
            return table;
        });

        // Headers
        html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
        html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');
        html = html.replace(/^# (.+)$/gm, '<h3>$1</h3>');
        
        // Bold & Italic
        html = html.replace(/\\*\\*\\*(.+?)\\*\\*\\*/g, '<strong><em>$1</em></strong>');
        html = html.replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>');
        html = html.replace(/\\*(.+?)\\*/g, '<em>$1</em>');
        
        // Code
        html = html.replace(/\`([^\`]+)\`/g, '<code>$1</code>');
        
        // HR
        html = html.replace(/^---$/gm, '<hr>');
        
        // Lists
        html = html.replace(/^\\- (.+)$/gm, '<li>$1</li>');
        html = html.replace(/^\\* (.+)$/gm, '<li>$1</li>');
        html = html.replace(/^(\\d+)\\. (.+)$/gm, '<li>$2</li>');
        html = html.replace(/((?:<li>.*<\\/li>\\n?)+)/g, '<ul>$1</ul>');
        
        // Line breaks
        html = html.replace(/\\n/g, '<br>');
        
        // Clean up
        html = html.replace(/<br><h3>/g, '<h3>');
        html = html.replace(/<\\/h3><br>/g, '</h3>');
        html = html.replace(/<br><ul>/g, '<ul>');
        html = html.replace(/<\\/ul><br>/g, '</ul>');
        html = html.replace(/<br><hr>/g, '<hr>');
        html = html.replace(/<hr><br>/g, '<hr>');
        html = html.replace(/<br><table>/g, '<table>');
        html = html.replace(/<\\/table><br>/g, '</table>');
        
        return html;
    }

    // ============ IMAGE HANDLING ============
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            showNotification('⚠️ لطفاً فقط فایل تصویری ارسال کنید');
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            showNotification('⚠️ حجم تصویر نباید بیشتر از 10 مگابایت باشد');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const base64Full = e.target.result;
            currentImageBase64 = base64Full;
            currentImageType = file.type;

            document.getElementById('imagePreview').src = base64Full;
            document.getElementById('imagePreviewContainer').classList.add('active');
        };
        reader.readAsDataURL(file);
        event.target.value = '';
    }

    function removeImage() {
        currentImageBase64 = null;
        currentImageType = null;
        document.getElementById('imagePreviewContainer').classList.remove('active');
    }

    // ============ CHAT FUNCTIONS ============
    function addMessage(content, type, imageUrl = null) {
        const welcomeScreen = document.getElementById('welcomeScreen');
        if (welcomeScreen) welcomeScreen.style.display = 'none';

        document.getElementById('btnClear').classList.add('show');

        const chatArea = document.getElementById('chatArea');
        const typingIndicator = document.getElementById('typingIndicator');

        const msgDiv = document.createElement('div');
        msgDiv.className = \`message \${type}\`;

        const avatarEmoji = type === 'bot' ? '🔬' : '👤';
        let parsedContent = type === 'bot' ? parseMarkdown(content) : content.replace(/\\n/g, '<br>');

        let imageHtml = '';
        if (imageUrl) {
            imageHtml = \`<img src="\${imageUrl}" alt="uploaded image">\`;
        }

        msgDiv.innerHTML = \`
            <div class="message-avatar">\${avatarEmoji}</div>
            <div>
                <div class="message-content">\${parsedContent}\${imageHtml}</div>
                <div class="message-time">\${getTime()}</div>
            </div>
        \`;

        chatArea.insertBefore(msgDiv, typingIndicator);
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    function showTyping(show) {
        const indicator = document.getElementById('typingIndicator');
        indicator.classList.toggle('active', show);
        if (show) {
            const chatArea = document.getElementById('chatArea');
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    }

    async function sendMessage() {
        if (isProcessing) return;

        const input = document.getElementById('messageInput');
        const text = input.value.trim();

        if (!text && !currentImageBase64) return;

        isProcessing = true;
        document.getElementById('btnSend').disabled = true;

        // Add user message
        const displayText = text || '📷 تصویر ارسال شده برای تحلیل';
        addMessage(displayText, 'user', currentImageBase64);

        // Build message content
        let userContent;
        if (currentImageBase64) {
            userContent = [
                {
                    type: "image_url",
                    image_url: {
                        url: currentImageBase64
                    }
                }
            ];
            if (text) {
                userContent.unshift({
                    type: "text",
                    text: text
                });
            } else {
                userContent.unshift({
                    type: "text",
                    text: "این تصویر آزمایشگاهی را تحلیل کن و بندپای موجود در تصویر را شناسایی کن. ویژگی‌های مورفولوژیکی، نام علمی، اهمیت پزشکی و سایر اطلاعات مرتبط را ذکر کن."
                });
            }
        } else {
            userContent = text;
        }

        conversationHistory.push({
            role: "user",
            content: userContent
        });

        // Clear input
        input.value = '';
        input.style.height = 'auto';
        removeImage();

        // Show typing
        showTyping(true);

        try {
            const model = currentImageBase64 
                ? "google/gemini-2.0-flash-001" 
                : "google/gemini-2.0-flash-001";

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': \`Bearer \${API_KEY}\`,
                    'HTTP-Referer': window.location.href,
                    'X-Title': 'Arthropod Parasitology AI'
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...conversationHistory
                    ],
                    max_tokens: 4000,
                    temperature: 0.7,
                    top_p: 0.9
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || \`خطای سرور: \${response.status}\`);
            }

            const data = await response.json();
            const botMessage = data.choices?.[0]?.message?.content || 'متأسفم، پاسخی دریافت نشد.';

            conversationHistory.push({
                role: "assistant",
                content: botMessage
            });

            showTyping(false);
            addMessage(botMessage, 'bot');

        } catch (error) {
            showTyping(false);
            console.error('Error:', error);
            
            let errorMsg = '❌ خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.';
            if (error.message.includes('401')) {
                errorMsg = '❌ کلید API نامعتبر است.';
            } else if (error.message.includes('429')) {
                errorMsg = '⏳ تعداد درخواست‌ها زیاد است. کمی صبر کنید.';
            } else if (error.message.includes('Failed to fetch')) {
                errorMsg = '🌐 مشکل اتصال اینترنت. لطفاً اتصال خود را بررسی کنید.';
            }
            
            addMessage(errorMsg, 'bot');
            // Remove the last user message from history since it failed
            conversationHistory.pop();
        }

        isProcessing = false;
        document.getElementById('btnSend').disabled = false;
        document.getElementById('messageInput').focus();
    }

    function askTopic(topic) {
        document.getElementById('messageInput').value = topic;
        sendMessage();
    }

    function clearChat() {
        conversationHistory = [];
        const chatArea = document.getElementById('chatArea');
        
        // Remove all messages
        const messages = chatArea.querySelectorAll('.message');
        messages.forEach(m => m.remove());

        // Show welcome screen
        const welcome = document.getElementById('welcomeScreen');
        if (welcome) welcome.style.display = 'flex';

        document.getElementById('btnClear').classList.remove('show');
    }

    // Focus on input when page loads
    window.addEventListener('load', () => {
        document.getElementById('messageInput').focus();
    });
<\/script>

`,className:"w-html-embed"})}),I=a=>{const{origin:t,pathname:i,search:r}=new URL(a);return`${t}${i}${r}`},T=l.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),z=({data:a})=>{const{system:t,resources:i,url:r,pageMeta:s}=a,d=I(r),p=l.useMemo(()=>({imageLoader:n,assetBaseUrl:o,resources:i,breakpoints:f,onError:console.error}),[i]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(m.Provider,{value:r,children:e.jsx(T,{pageKey:d,system:t})}),e.jsx(h,{url:r,pageMeta:s,siteName:c,imageLoader:n,assetBaseUrl:o}),e.jsx(u,{children:s.title})]})},A=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),P=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${o}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-62/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-62/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{B as configValuesSerialized};
