import{j as e,r as d,a as i,i as n,R as g,b as m,P as x,c as b,d as u}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(f,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔬 هوش مصنوعی انگل‌شناسی بندپایان | کاملاً فارسی</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
    <style>
        /* ========== متغیرهای رنگی ========== */
        :root {
            --primary: #0f766e;
            --primary-light: #2dd4bf;
            --primary-lighter: #5eead4;
            --primary-dark: #0d9488;
            --secondary: #8b5cf6;
            --secondary-light: #a78bfa;
            --accent: #f59e0b;
            --bg-dark: #030712;
            --bg-card: #111827cc;
            --bg-chat: #0f172acc;
            --bg-input: #1e293bcc;
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --text-muted: #94a3b8;
            --glass-border: rgba(45, 212, 191, 0.15);
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
            position: relative;
            direction: rtl; /* اضافه شده برای راست‌چین کلی */
        }
        /* ========== پس‌زمینه ========== */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            overflow: hidden;
            background: radial-gradient(circle at 30% 50%, #0b1f2e, #030712 80%);
        }
        .bg-animation .particle {
            position: absolute;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-light), var(--secondary-light));
            opacity: 0.1;
            filter: blur(20px);
            animation: floatParticle linear infinite;
            box-shadow: 0 0 30px var(--primary-light);
        }
        @keyframes floatParticle {
            0% { transform: translateY(100vh) rotate(0deg) scale(0.5); opacity: 0; }
            20% { opacity: 0.2; }
            80% { opacity: 0.15; }
            100% { transform: translateY(-100px) rotate(720deg) scale(1.5); opacity: 0; }
        }
        .bg-grid {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(rgba(45,212,191,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 0;
            pointer-events: none;
        }
        /* ========== کانتینر اصلی ========== */
        .app-container {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            height: 100vh;
            max-width: 1000px;
            margin: 0 auto;
            backdrop-filter: blur(4px);
        }
        /* ========== هدر ========== */
        .header {
            background: rgba(3, 7, 18, 0.6);
            backdrop-filter: blur(25px);
            border-bottom: 1px solid var(--glass-border);
            padding: 12px 24px;
            display: flex;
            align-items: center;
            gap: 16px;
            position: relative;
            box-shadow: 0 10px 30px -10px black;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--primary-light), var(--secondary-light), transparent);
            animation: shimmer 3s infinite;
        }
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .logo-container {
            position: relative;
            width: 60px;
            height: 60px;
            flex-shrink: 0;
        }
        .logo-ring {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            border: 2px solid transparent;
            background: linear-gradient(135deg, var(--primary-light), var(--secondary-light)) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: rotate 8s linear infinite;
        }
        .logo-ring-inner {
            position: absolute;
            inset: 6px;
            border-radius: 50%;
            border: 2px dashed var(--primary-lighter);
            opacity: 0.6;
            animation: rotate 5s linear infinite reverse;
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
            font-size: 28px;
            filter: drop-shadow(0 0 10px var(--primary-light));
        }
        .header-text h1 {
            font-size: 20px;
            font-weight: 800;
            background: linear-gradient(135deg, #99f6e4, #c4b5fd);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.4;
            text-align: right;
        }
        .header-text p {
            font-size: 12px;
            color: var(--text-secondary);
            font-weight: 300;
            text-align: right;
        }
        .header-status {
            margin-right: auto; /* تغییر از left به right برای RTL: به سمت چپ بچسبد */
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(16,185,129,0.1);
            padding: 8px 18px;
            border-radius: 40px;
            border: 1px solid rgba(16,185,129,0.3);
            backdrop-filter: blur(10px);
        }
        .status-dot {
            width: 10px;
            height: 10px;
            background: #10b981;
            border-radius: 50%;
            box-shadow: 0 0 15px #10b981;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0%,100% { opacity:1; transform:scale(1); }
            50% { opacity:0.6; transform:scale(1.2); }
        }
        .header-status span {
            font-size: 12px;
            color: #10b981;
            font-weight: 600;
        }
        .btn-clear {
            position: absolute;
            left: 50%; /* وسط صفحه */
            transform: translateX(-50%);
            top: 50%;
            transform: translate(-50%, -50%);
            background: rgba(239,68,68,0.15);
            border: 1px solid rgba(239,68,68,0.3);
            color: #f87171;
            padding: 8px 16px;
            border-radius: 30px;
            font-size: 12px;
            cursor: pointer;
            font-family: 'Vazirmatn', sans-serif;
            transition: all 0.3s;
            display: none;
            backdrop-filter: blur(8px);
        }
        .btn-clear.show { display: block; }
        .btn-clear:hover {
            background: rgba(239,68,68,0.3);
            border-color: #ef4444;
            color: #fff;
            box-shadow: 0 0 20px #ef444480;
        }
        /* ========== نوار موضوعات ========== */
        .topics-bar {
            background: rgba(3,7,18,0.4);
            backdrop-filter: blur(20px);
            padding: 14px 24px;
            display: flex;
            gap: 10px;
            overflow-x: auto;
            border-bottom: 1px solid var(--glass-border);
            scrollbar-width: thin;
            scrollbar-color: var(--primary-light) transparent;
        }
        .topics-bar::-webkit-scrollbar { height: 4px; }
        .topics-bar::-webkit-scrollbar-thumb { background: var(--primary-light); border-radius: 10px; }
        .topic-chip {
            flex-shrink: 0;
            padding: 8px 18px;
            background: rgba(45,212,191,0.08);
            border: 1px solid var(--glass-border);
            border-radius: 40px;
            font-size: 13px;
            font-weight: 500;
            color: var(--primary-lighter);
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Vazirmatn', sans-serif;
            white-space: nowrap;
            backdrop-filter: blur(5px);
        }
        .topic-chip:hover {
            background: rgba(45,212,191,0.2);
            border-color: var(--primary-light);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 25px -8px var(--primary-light);
        }
        /* ========== ناحیه چت ========== */
        .chat-area {
            flex: 1;
            overflow-y: auto;
            padding: 25px 25px 15px;
            display: flex;
            flex-direction: column;
            gap: 18px;
            scroll-behavior: smooth;
            background: radial-gradient(ellipse at top, #0f172a40, transparent);
        }
        .chat-area::-webkit-scrollbar { width: 5px; }
        .chat-area::-webkit-scrollbar-thumb { background: var(--primary-light); border-radius: 10px; }
        /* ========== صفحه خوش‌آمدگویی ========== */
        .welcome-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
            text-align: center;
            padding: 40px 20px;
            animation: fadeInUp 1s ease;
        }
        @keyframes fadeInUp {
            from { opacity:0; transform:translateY(40px); }
            to { opacity:1; transform:translateY(0); }
        }
        .welcome-icon {
            font-size: 90px;
            margin-bottom: 20px;
            animation: bounceIn 1.2s ease;
            filter: drop-shadow(0 0 40px rgba(45,212,191,0.6));
        }
        @keyframes bounceIn {
            0% { transform:scale(0.3); opacity:0; }
            50% { transform:scale(1.1); opacity:0.9; }
            100% { transform:scale(1); opacity:1; }
        }
        .welcome-screen h2 {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 12px;
            background: linear-gradient(135deg, #5eead4, #c4b5fd);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .welcome-screen p {
            color: var(--text-secondary);
            font-size: 15px;
            max-width: 550px;
            line-height: 2;
            margin-bottom: 35px;
            background: rgba(0,0,0,0.2);
            padding: 15px 25px;
            border-radius: 50px;
            backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
            text-align: right; /* راست‌چین */
        }
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
            max-width: 550px;
            width: 100%;
        }
        .feature-card {
            background: rgba(45,212,191,0.05);
            border: 1px solid var(--glass-border);
            border-radius: 30px;
            padding: 22px 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.4s ease;
            backdrop-filter: blur(12px);
        }
        .feature-card:hover {
            background: rgba(45,212,191,0.15);
            border-color: var(--primary-light);
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 35px -12px var(--primary-light);
        }
        .feature-card .icon { font-size: 36px; margin-bottom: 12px; }
        .feature-card .title { font-size: 15px; font-weight: 700; }
        .feature-card .desc { font-size: 12px; color: var(--text-muted); }
        /* ========== پیام‌ها (تنظیمات نهایی RTL) ========== */
        .message {
            display: flex;
            gap: 14px;
            animation: messageIn 0.5s ease;
            max-width: 85%;
        }
        @keyframes messageIn {
            from { opacity:0; transform:translateY(20px); }
            to { opacity:1; transform:translateY(0); }
        }
        /* پیام کاربر : در سمت راست */
        .message.user {
            flex-direction: row-reverse; /* تغییر به row-reverse برای RTL: آواتار سمت راست، محتوا سمت چپ اما با توجه به RTL */
            align-self: flex-start; /* راست */
        }
        /* پیام ربات : در سمت چپ */
        .message.bot {
            flex-direction: row; /* نگه داشتن row برای ربات در چپ */
            align-self: flex-end; /* چپ */
        }
        .message-avatar {
            width: 44px; height: 44px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 22px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            backdrop-filter: blur(10px);
        }
        .message.bot .message-avatar {
            background: linear-gradient(135deg, var(--primary-dark), #0b4f4a);
            border: 1px solid var(--primary-light);
        }
        .message.user .message-avatar {
            background: linear-gradient(135deg, var(--secondary), #5b21b6);
            border: 1px solid var(--secondary-light);
        }
        .message-content {
            padding: 16px 22px;
            border-radius: 24px;
            line-height: 1.8;
            font-size: 14.5px;
            word-break: break-word;
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
            backdrop-filter: blur(20px);
            text-align: right; /* راست‌چین کردن متن */
        }
        .message.bot .message-content {
            background: rgba(15,118,110,0.25);
            border: 1px solid var(--glass-border);
            border-top-right-radius: 8px; /* تنظیم گوشه‌ها برای RTL */
            border-top-left-radius: 24px;
            border-bottom-right-radius: 24px;
            border-bottom-left-radius: 24px;
        }
        .message.user .message-content {
            background: rgba(124,58,237,0.25);
            border: 1px solid rgba(139,92,246,0.3);
            border-top-left-radius: 8px; /* تنظیم گوشه‌ها برای RTL */
            border-top-right-radius: 24px;
            border-bottom-left-radius: 24px;
            border-bottom-right-radius: 24px;
        }
        .message-content img {
            max-width: 100%; max-height: 250px;
            border-radius: 16px; margin-top: 10px;
            border: 2px solid rgba(255,255,255,0.15);
        }
        .message-time {
            font-size: 10px;
            color: var(--text-muted);
            margin-top: 8px;
            text-align: right; /* تغییر به right برای RTL: زمان در سمت راست پیام */
        }
        /* ========== نشانگر تایپ ========== */
        .typing-indicator {
            display: none; align-items: center; gap: 14px; padding: 10px 0;
        }
        .typing-indicator.active { display: flex; }
        .typing-dots {
            display: flex; gap: 5px; padding: 14px 22px;
            background: rgba(45,212,191,0.1); border-radius: 30px;
            border: 1px solid var(--glass-border); backdrop-filter: blur(10px);
        }
        .typing-dots span {
            width: 10px; height: 10px; background: var(--primary-light);
            border-radius: 50%; animation: typingBounce 1.5s infinite;
        }
        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typingBounce {
            0%,60%,100% { transform:translateY(0); opacity:0.5; }
            30% { transform:translateY(-15px); opacity:1; }
        }
        /* ========== پیش‌نمایش تصویر ========== */
        .image-preview-container {
            display: none; padding: 10px 25px;
            background: rgba(3,7,18,0.5); backdrop-filter: blur(20px);
            border-top: 1px solid var(--glass-border);
        }
        .image-preview-container.active { display: block; }
        .image-preview-wrapper {
            position: relative; display: inline-block;
            border-radius: 20px; overflow: hidden;
            border: 2px solid var(--primary-light);
            box-shadow: 0 0 30px var(--primary-light);
        }
        .image-preview-wrapper img { max-height: 130px; max-width: 220px; display: block; }
        .image-preview-remove {
            position: absolute; top: 8px; left: 8px; /* تغییر از right به left برای RTL: دکمه حذف در سمت چپ تصویر */
            width: 28px; height: 28px; background: rgba(239,68,68,0.8);
            border: none; border-radius: 50%; color: white; font-size: 16px;
            cursor: pointer; display: flex; align-items: center; justify-content: center;
            transition: all 0.2s; backdrop-filter: blur(5px);
        }
        .image-preview-remove:hover { transform: scale(1.2) rotate(90deg); background:#ef4444; }
        /* ========== ناحیه ورودی ========== */
        .input-area {
            background: rgba(3,7,18,0.6); backdrop-filter: blur(30px);
            border-top: 1px solid var(--glass-border); padding: 18px 25px;
        }
        .input-wrapper {
            display: flex; align-items: flex-end; gap: 12px;
            background: rgba(30,41,59,0.5); border-radius: 40px;
            padding: 8px 12px 8px 20px; /* تنظیم پدینگ برای RTL: چپ بیشتر */
            border: 1px solid var(--glass-border); transition: all 0.3s;
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }
        .input-wrapper:focus-within {
            border-color: var(--primary-light);
            box-shadow: 0 0 0 4px rgba(45,212,191,0.15), 0 8px 25px rgba(0,0,0,0.5);
        }
        .input-wrapper textarea {
            flex: 1; background: transparent; border: none; outline: none;
            color: var(--text-primary); font-family: 'Vazirmatn', sans-serif;
            font-size: 15px; resize: none; max-height: 120px; min-height: 28px;
            padding: 10px 0; line-height: 1.7; text-align: right;
        }
        .input-wrapper textarea::placeholder {
            color: var(--text-muted); opacity: 0.7; text-align: right;
        }
        .input-actions { display: flex; gap: 6px; align-items: center; }
        .btn-action {
            width: 46px; height: 46px; border-radius: 50%; border: none;
            cursor: pointer; display: flex; align-items: center; justify-content: center;
            font-size: 22px; transition: all 0.3s; font-family: 'Vazirmatn', sans-serif;
            background: rgba(255,255,255,0.05); color: var(--text-secondary);
            backdrop-filter: blur(10px); border: 1px solid var(--glass-border);
        }
        .btn-action:hover {
            background: rgba(45,212,191,0.2); color: var(--primary-light);
            transform: scale(1.1); border-color: var(--primary-light);
            box-shadow: 0 0 20px var(--primary-light);
        }
        .btn-send {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark)) !important;
            color: white !important; box-shadow: 0 4px 20px rgba(15,118,110,0.6);
            border: none;
        }
        .btn-send:hover { transform: scale(1.1) rotate(5deg); }
        .btn-send:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        #fileInput { display: none; }
        .footer-note {
            text-align: center; padding: 12px 8px 4px; font-size: 11px;
            color: var(--text-muted); opacity: 0.7;
        }
        /* ========== استایل مارک‌داون (راست‌چین) ========== */
        .message-content h3 {
            color: var(--primary-lighter); margin: 14px 0 8px; font-size: 16px;
            border-bottom: 1px dashed var(--primary-light); padding-bottom: 4px;
            text-align: right;
        }
        .message-content ul, .message-content ol {
            padding-right: 0; /* تنظیم برای RTL */
            padding-left: 25px; 
            margin: 10px 0; text-align: right;
        }
        .message-content li { margin: 6px 0; text-align: right; }
        .message-content code {
            background: rgba(0,0,0,0.5); padding: 3px 8px; border-radius: 8px;
            font-size: 13px; color: #f0abfc; border: 1px solid #a78bfa40;
            direction: ltr; display: inline-block;
        }
        .message-content p { margin: 8px 0; text-align: right; }
        .message-content table {
            width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 13px;
            background: rgba(0,0,0,0.2); border-radius: 16px; overflow: hidden;
        }
        .message-content table th,
        .message-content table td {
            border: 1px solid rgba(45,212,191,0.3); padding: 10px 14px; text-align: right;
        }
        .message-content table th { background: rgba(15,118,110,0.4); color: var(--primary-lighter); }
        .message-content hr { border: none; border-top: 1px solid rgba(45,212,191,0.3); margin:15px 0; }
        /* ========== نوتیفیکیشن ========== */
        .notification {
            position: fixed; top: 25px; left: 50%; transform: translateX(-50%) translateY(-150px);
            background: rgba(239,68,68,0.8); color: white; padding: 14px 30px; border-radius: 50px;
            font-size: 14px; font-family: 'Vazirmatn', sans-serif; z-index: 200;
            transition: transform 0.5s cubic-bezier(0.68,-0.55,0.27,1.55);
            backdrop-filter: blur(20px); border: 1px solid #fffa; font-weight: 500;
        }
        .notification.show { transform: translateX(-50%) translateY(0); }
        .notification.warning { background: rgba(245,158,11,0.8); }
        /* ========== ریسپانسیو ========== */
        @media (max-width:640px) {
            .header { padding:10px 16px; }
            .header-text h1 { font-size:16px; }
            .header-status { display:none; }
            .btn-clear { left: 50%; transform: translate(-50%, -50%); padding:6px 12px; font-size:11px; }
            .feature-grid { grid-template-columns:1fr 1fr; gap:10px; }
            .message { max-width:95%; }
            .chat-area { padding:15px 12px; }
            .welcome-icon { font-size:70px; }
            .welcome-screen h2 { font-size:22px; }
            .welcome-screen p { font-size:13px; padding:12px 18px; }
            .btn-action { width:42px; height:42px; font-size:20px; }
        }
    </style>


    <div class="bg-animation" id="bgAnimation"></div>
    <div class="bg-grid"></div>
    <div class="notification" id="notification"></div>
    <div class="app-container">
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
            <button class="btn-clear" id="btnClear" onclick="clearChat()">🗑️ پاک کردن گفتگو</button>
            <div class="header-status">
                <div class="status-dot"></div>
                <span>آنلاین · فعال</span>
            </div>
        </header>
        <div class="topics-bar">
            <button class="topic-chip" onclick="askTopic('کنه‌های سخت (Ixodidae) را معرفی کن')">🕷️ کنه‌های سخت</button>
            <button class="topic-chip" onclick="askTopic('انواع شپش انسانی و چرخه زندگی آن‌ها')">🪲 شپش‌ها</button>
            <button class="topic-chip" onclick="askTopic('پشه آنوفل و انتقال مالاریا')">🦟 پشه آنوفل</button>
            <button class="topic-chip" onclick="askTopic('مگس‌های خونخوار و اهمیت پزشکی')">🪰 مگس‌ها</button>
            <button class="topic-chip" onclick="askTopic('ساس تختخواب و ویژگی‌های آن')">🐛 ساس</button>
            <button class="topic-chip" onclick="askTopic('کک و بیماری‌های منتقله')">🦗 کک‌ها</button>
            <button class="topic-chip" onclick="askTopic('مایت‌ها و جرب در انسان')">🕸️ مایت‌ها</button>
            <button class="topic-chip" onclick="askTopic('میازیس و مگس‌های عامل آن')">🔬 میازیس</button>
        </div>
        <div class="chat-area" id="chatArea">
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
            <div class="typing-indicator" id="typingIndicator">
                <div class="message-avatar" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark));">🔬</div>
                <div class="typing-dots"><span></span><span></span><span></span></div>
            </div>
        </div>
        <div class="image-preview-container" id="imagePreviewContainer">
            <div class="image-preview-wrapper">
                <img id="imagePreview" src="" alt="پیش‌نمایش">
                <button class="image-preview-remove" onclick="removeImage()">✕</button>
            </div>
        </div>
        <div class="input-area">
            <div class="input-wrapper">
                <textarea id="messageInput" placeholder="سوال خود در مورد انگل‌شناسی بندپایان را بنویسید..." rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this)"></textarea>
                <div class="input-actions">
                    <input type="file" id="fileInput" accept="image/*" onchange="handleImageUpload(event)">
                    <button class="btn-action" onclick="document.getElementById('fileInput').click()" title="ارسال تصویر">📷</button>
                    <button class="btn-action btn-send" id="btnSend" onclick="sendMessage()" title="ارسال">➤</button>
                </div>
            </div>
            <div class="footer-note">🔬 تخصصی در انگل‌شناسی بندپایان | تصاویر آزمایشگاهی قابل آنالیز هستند</div>
        </div>
    </div>
    <script>
        const API_KEY = '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';
        const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
        const SYSTEM_PROMPT = \`تو یک استاد و متخصص برجسته در رشته انگل‌شناسی بندپایان (Medical Arthropod Parasitology) هستی. تو فقط و فقط به سوالات مرتبط با انگل‌شناسی بندپایان پاسخ می‌دهی. ...\`; // همان پرامپت قبلی (به دلیل طولانی بودن در اینجا کوتاه شده، ولی در کد اصلی کامل قرار دهید)
        let conversationHistory = [];
        let currentImageBase64 = null;
        let isProcessing = false;
        function createParticles() {
            const bg = document.getElementById('bgAnimation');
            const colors = ['#2dd4bf', '#8b5cf6', '#10b981', '#f59e0b'];
            for (let i = 0; i < 30; i++) {
                const p = document.createElement('div'); p.className = 'particle';
                const size = Math.random() * 150 + 50;
                p.style.cssText = \`width:\${size}px;height:\${size}px;background:\${colors[Math.floor(Math.random()*colors.length)]};left:\${Math.random()*100}%;animation-duration:\${Math.random()*25+20}s;animation-delay:\${Math.random()*15}s;\`;
                bg.appendChild(p);
            }
        }
        createParticles();
        function getTime() { return new Date().toLocaleTimeString('fa-IR', { hour:'2-digit', minute:'2-digit' }); }
        function showNotification(msg, type='error') {
            const n = document.getElementById('notification');
            n.textContent = msg; n.className = \`notification \${type} show\`;
            setTimeout(() => n.classList.remove('show'), 3500);
        }
        function autoResize(el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 120) + 'px'; }
        function handleKeyDown(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }
        function parseMarkdown(text) { /* همان تابع قبلی */ return text; } // برای اختصار، تابع کامل در کد نهایی قرار گیرد
        function handleImageUpload(e) {
            const file = e.target.files[0];
            if (!file) return;
            if (!file.type.startsWith('image/')) { showNotification('⚠️ فقط تصویر'); return; }
            if (file.size > 10*1024*1024) { showNotification('⚠️ حداکثر 10 مگابایت'); return; }
            const reader = new FileReader();
            reader.onload = function(ev) {
                currentImageBase64 = ev.target.result;
                document.getElementById('imagePreview').src = ev.target.result;
                document.getElementById('imagePreviewContainer').classList.add('active');
            };
            reader.readAsDataURL(file);
            e.target.value = '';
        }
        function removeImage() { currentImageBase64 = null; document.getElementById('imagePreviewContainer').classList.remove('active'); }
        function addMessage(content, type, imageUrl=null) {
            document.getElementById('welcomeScreen').style.display = 'none';
            document.getElementById('btnClear').classList.add('show');
            const chat = document.getElementById('chatArea');
            const typing = document.getElementById('typingIndicator');
            const msgDiv = document.createElement('div'); msgDiv.className = \`message \${type}\`;
            const avatarEmoji = type==='bot'?'🔬':'👤';
            let parsed = type==='bot'? parseMarkdown(content) : content.replace(/\\n/g,'<br>');
            let imgHtml = imageUrl ? \`<img src="\${imageUrl}" alt="تصویر">\` : '';
            msgDiv.innerHTML = \`<div class="message-avatar">\${avatarEmoji}</div><div><div class="message-content">\${parsed}\${imgHtml}</div><div class="message-time">\${getTime()}</div></div>\`;
            chat.insertBefore(msgDiv, typing);
            chat.scrollTop = chat.scrollHeight;
        }
        function showTyping(show) {
            document.getElementById('typingIndicator').classList.toggle('active', show);
            if (show) document.getElementById('chatArea').scrollTop = document.getElementById('chatArea').scrollHeight;
        }
        async function sendMessage() {
            if (isProcessing) return;
            const input = document.getElementById('messageInput');
            const text = input.value.trim();
            if (!text && !currentImageBase64) return;
            isProcessing = true; document.getElementById('btnSend').disabled = true;
            const displayText = text || '📷 تصویر ارسال شده';
            addMessage(displayText, 'user', currentImageBase64);
            let userContent;
            if (currentImageBase64) {
                userContent = [{ type:"image_url", image_url:{ url: currentImageBase64 } }];
                if (text) userContent.unshift({ type:"text", text });
                else userContent.unshift({ type:"text", text:"این تصویر آزمایشگاهی را تحلیل کن و بندپای موجود را شناسایی کن. ویژگی‌های مورفولوژیکی، نام علمی، اهمیت پزشکی و سایر اطلاعات مرتبط را ذکر کن." });
            } else userContent = text;
            conversationHistory.push({ role:"user", content: userContent });
            input.value = ''; input.style.height = 'auto'; removeImage();
            showTyping(true);
            try {
                const model = currentImageBase64 ? "google/gemini-2.0-flash-001" : "google/gemini-2.0-flash-001";
                const response = await fetch(API_URL, {
                    method:'POST', headers: { 'Content-Type':'application/json', 'Authorization':\`Bearer \${API_KEY}\`, 'HTTP-Referer':window.location.href, 'X-Title':'Arthropod Parasitology AI' },
                    body: JSON.stringify({ model, messages:[{ role:"system", content:SYSTEM_PROMPT }, ...conversationHistory], max_tokens:4000, temperature:0.7 })
                });
                if (!response.ok) throw new Error(\`خطای سرور: \${response.status}\`);
                const data = await response.json();
                const botMessage = data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد.';
                conversationHistory.push({ role:"assistant", content: botMessage });
                showTyping(false); addMessage(botMessage, 'bot');
            } catch (error) {
                showTyping(false); console.error(error);
                let errorMsg = '❌ خطا در ارتباط.';
                if (error.message.includes('401')) errorMsg = '❌ کلید API نامعتبر.';
                else if (error.message.includes('429')) errorMsg = '⏳ تعداد درخواست زیاد.';
                else if (error.message.includes('Failed to fetch')) errorMsg = '🌐 مشکل اینترنت.';
                addMessage(errorMsg, 'bot');
                conversationHistory.pop();
            }
            isProcessing = false; document.getElementById('btnSend').disabled = false; input.focus();
        }
        function askTopic(topic) { document.getElementById('messageInput').value = topic; sendMessage(); }
        function clearChat() {
            conversationHistory = [];
            document.querySelectorAll('#chatArea .message').forEach(m => m.remove());
            document.getElementById('welcomeScreen').style.display = 'flex';
            document.getElementById('btnClear').classList.remove('show');
        }
        window.addEventListener('load', ()=> document.getElementById('messageInput').focus() );
    <\/script>

`,className:"w-html-embed"})}),z=a=>{const{origin:t,pathname:o,search:r}=new URL(a);return`${t}${o}${r}`},T=d.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),I=({data:a})=>{const{system:t,resources:o,url:r,pageMeta:s}=a,p=z(r),c=d.useMemo(()=>({imageLoader:n,assetBaseUrl:i,resources:o,breakpoints:h,onError:console.error}),[o]);return e.jsxs(g.Provider,{value:c,children:[e.jsx(m.Provider,{value:r,children:e.jsx(T,{pageKey:p,system:t})}),e.jsx(x,{url:r,pageMeta:s,siteName:l,imageLoader:n,assetBaseUrl:i}),e.jsx(b,{children:s.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),E=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${i}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-4/copy-1/copy-62/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-4/copy-1/copy-62/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{A as configValuesSerialized};
