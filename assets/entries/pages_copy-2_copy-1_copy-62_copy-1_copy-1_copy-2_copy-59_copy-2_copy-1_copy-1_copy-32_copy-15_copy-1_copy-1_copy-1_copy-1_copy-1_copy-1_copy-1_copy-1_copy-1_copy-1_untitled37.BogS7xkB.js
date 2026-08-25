import{j as e,r as l,a as o,i as n,R as g,b as m,P as b,c as x,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as u}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(u,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔬 هوش مصنوعی انگل‌شناسی بندپایان | نسخه کاملاً فارسی</title>
    <!-- فونت وزیرمتن -->
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
            --border: #1e3a5f;
            --glass-border: rgba(45, 212, 191, 0.15);
            --neon-glow: 0 0 15px rgba(45, 212, 191, 0.5);
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
        }

        /* ========== پس‌زمینه متحرک ========== */
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
            background-image: 
                linear-gradient(rgba(45, 212, 191, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(45, 212, 191, 0.03) 1px, transparent 1px);
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
            -webkit-backdrop-filter: blur(25px);
            border-bottom: 1px solid var(--glass-border);
            padding: 12px 24px;
            display: flex;
            align-items: center;
            gap: 16px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
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
            letter-spacing: 0.5px;
            text-align: right;
        }

        .header-text p {
            font-size: 12px;
            color: var(--text-secondary);
            font-weight: 300;
            text-align: right;
        }

        .header-status {
            margin-left: auto;  /* تغییر از margin-right به margin-left برای RTL */
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(16, 185, 129, 0.1);
            padding: 8px 18px;
            border-radius: 40px;
            border: 1px solid rgba(16, 185, 129, 0.3);
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
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
        }

        .header-status span {
            font-size: 12px;
            color: #10b981;
            font-weight: 600;
        }

        .btn-clear {
            position: absolute;
            left: 20px;   /* تغییر از right به left برای RTL */
            top: 50%;
            transform: translateY(-50%);
            background: rgba(239, 68, 68, 0.15);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #f87171;
            padding: 8px 16px;
            border-radius: 30px;
            font-size: 12px;
            cursor: pointer;
            font-family: 'Vazirmatn', sans-serif;
            transition: all 0.3s;
            display: none;
            backdrop-filter: blur(8px);
            font-weight: 500;
            letter-spacing: 0.3px;
        }

        .btn-clear.show {
            display: block;
        }

        .btn-clear:hover {
            background: rgba(239, 68, 68, 0.3);
            border-color: #ef4444;
            color: #fff;
            box-shadow: 0 0 20px #ef444480;
        }

        /* ========== نوار موضوعات ========== */
        .topics-bar {
            background: rgba(3, 7, 18, 0.4);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 14px 24px;
            display: flex;
            gap: 10px;
            overflow-x: auto;
            border-bottom: 1px solid var(--glass-border);
            scrollbar-width: thin;
            scrollbar-color: var(--primary-light) transparent;
        }

        .topics-bar::-webkit-scrollbar {
            height: 4px;
        }
        .topics-bar::-webkit-scrollbar-track {
            background: transparent;
        }
        .topics-bar::-webkit-scrollbar-thumb {
            background: var(--primary-light);
            border-radius: 10px;
        }

        .topic-chip {
            flex-shrink: 0;
            padding: 8px 18px;
            background: rgba(45, 212, 191, 0.08);
            border: 1px solid var(--glass-border);
            border-radius: 40px;
            font-size: 13px;
            font-weight: 500;
            color: var(--primary-lighter);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            font-family: 'Vazirmatn', sans-serif;
            white-space: nowrap;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .topic-chip:hover {
            background: rgba(45, 212, 191, 0.2);
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

        .chat-area::-webkit-scrollbar {
            width: 5px;
        }
        .chat-area::-webkit-scrollbar-track {
            background: transparent;
        }
        .chat-area::-webkit-scrollbar-thumb {
            background: var(--primary-light);
            border-radius: 10px;
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        }

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
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .welcome-icon {
            font-size: 90px;
            margin-bottom: 20px;
            animation: bounceIn 1.2s ease;
            filter: drop-shadow(0 0 40px rgba(45, 212, 191, 0.6));
        }

        @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.1); opacity: 0.9; }
            100% { transform: scale(1); opacity: 1; }
        }

        .welcome-screen h2 {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 12px;
            background: linear-gradient(135deg, #5eead4, #c4b5fd);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 20px #2dd4bf60;
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
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
            max-width: 550px;
            width: 100%;
        }

        .feature-card {
            background: rgba(45, 212, 191, 0.05);
            border: 1px solid var(--glass-border);
            border-radius: 30px;
            padding: 22px 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.4s ease;
            backdrop-filter: blur(12px);
            box-shadow: 0 10px 25px -15px black;
        }

        .feature-card:hover {
            background: rgba(45, 212, 191, 0.15);
            border-color: var(--primary-light);
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 35px -12px var(--primary-light);
        }

        .feature-card .icon {
            font-size: 36px;
            margin-bottom: 12px;
            filter: drop-shadow(0 0 10px var(--primary-light));
        }

        .feature-card .title {
            font-size: 15px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 5px;
        }

        .feature-card .desc {
            font-size: 12px;
            color: var(--text-muted);
        }

        /* ========== پیام‌ها - تنظیم برای RTL ========== */
        .message {
            display: flex;
            gap: 14px;
            animation: messageIn 0.5s cubic-bezier(0.2, 0.9, 0.3, 1);
            max-width: 85%;
        }

        @keyframes messageIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .message.user {
            flex-direction: row;
            align-self: flex-start; /* پیام کاربر در سمت راست (آغاز صفحه) */
        }

        .message.bot {
            flex-direction: row;
            align-self: flex-end; /* پیام ربات در سمت چپ (پایان صفحه) */
        }

        .message-avatar {
            width: 44px;
            height: 44px;
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
            box-shadow: 0 4px 20px rgba(20, 184, 166, 0.5);
        }

        .message.user .message-avatar {
            background: linear-gradient(135deg, var(--secondary), #5b21b6);
            border: 1px solid var(--secondary-light);
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.5);
        }

        .message-content {
            padding: 16px 22px;
            border-radius: 24px;
            line-height: 1.8;
            font-size: 14.5px;
            position: relative;
            word-break: break-word;
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
            backdrop-filter: blur(20px);
            text-align: right; /* راست‌چین کردن متن پیام */
        }

        .message.bot .message-content {
            background: rgba(15, 118, 110, 0.25);
            border: 1px solid var(--glass-border);
            border-top-left-radius: 8px;
            border-top-right-radius: 24px;
            border-bottom-left-radius: 24px;
            border-bottom-right-radius: 24px;
            color: var(--text-primary);
            box-shadow: 0 8px 25px -8px #0f766e;
        }

        .message.user .message-content {
            background: rgba(124, 58, 237, 0.25);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-top-right-radius: 8px;
            border-top-left-radius: 24px;
            border-bottom-right-radius: 24px;
            border-bottom-left-radius: 24px;
            box-shadow: 0 8px 25px -8px #8b5cf6;
        }

        .message-content img {
            max-width: 100%;
            max-height: 250px;
            border-radius: 16px;
            margin-top: 10px;
            border: 2px solid rgba(255,255,255,0.15);
            box-shadow: 0 10px 25px -10px black;
        }

        .message-content strong {
            color: var(--primary-lighter);
        }

        .message-content em {
            color: var(--secondary-light);
        }

        .message-time {
            font-size: 10px;
            color: var(--text-muted);
            margin-top: 8px;
            opacity: 0.8;
            text-align: left; /* زمان در سمت چپ پیام بماند (معمول) */
        }

        /* ========== نشانگر تایپ ========== */
        .typing-indicator {
            display: none;
            align-items: center;
            gap: 14px;
            padding: 10px 0;
            animation: messageIn 0.4s ease;
        }

        .typing-indicator.active {
            display: flex;
        }

        .typing-dots {
            display: flex;
            gap: 5px;
            padding: 14px 22px;
            background: rgba(45, 212, 191, 0.1);
            border-radius: 30px;
            border: 1px solid var(--glass-border);
            backdrop-filter: blur(10px);
        }

        .typing-dots span {
            width: 10px;
            height: 10px;
            background: var(--primary-light);
            border-radius: 50%;
            animation: typingBounce 1.5s infinite ease-in-out;
            box-shadow: 0 0 15px var(--primary-light);
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingBounce {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
            30% { transform: translateY(-15px); opacity: 1; }
        }

        /* ========== پیش‌نمایش تصویر ========== */
        .image-preview-container {
            display: none;
            padding: 10px 25px;
            background: rgba(3, 7, 18, 0.5);
            backdrop-filter: blur(20px);
            border-top: 1px solid var(--glass-border);
        }

        .image-preview-container.active {
            display: block;
        }

        .image-preview-wrapper {
            position: relative;
            display: inline-block;
            border-radius: 20px;
            overflow: hidden;
            border: 2px solid var(--primary-light);
            box-shadow: 0 0 30px var(--primary-light);
            animation: fadeInUp 0.4s ease;
        }

        .image-preview-wrapper img {
            max-height: 130px;
            max-width: 220px;
            display: block;
        }

        .image-preview-remove {
            position: absolute;
            top: 8px;
            right: 8px; /* تغییر به راست برای RTL */
            width: 28px;
            height: 28px;
            background: rgba(239, 68, 68, 0.8);
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            backdrop-filter: blur(5px);
            border: 1px solid #fff3;
        }

        .image-preview-remove:hover {
            transform: scale(1.2) rotate(90deg);
            background: #ef4444;
            box-shadow: 0 0 20px #ef4444;
        }

        /* ========== ناحیه ورودی ========== */
        .input-area {
            background: rgba(3, 7, 18, 0.6);
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            border-top: 1px solid var(--glass-border);
            padding: 18px 25px;
        }

        .input-wrapper {
            display: flex;
            align-items: flex-end;
            gap: 12px;
            background: rgba(30, 41, 59, 0.5);
            border-radius: 40px;
            padding: 8px 20px 8px 12px; /* تغییر padding برای RTL */
            border: 1px solid var(--glass-border);
            transition: all 0.3s;
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        .input-wrapper:focus-within {
            border-color: var(--primary-light);
            box-shadow: 0 0 0 4px rgba(45, 212, 191, 0.15), 0 8px 25px rgba(0,0,0,0.5);
        }

        .input-wrapper textarea {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: var(--text-primary);
            font-family: 'Vazirmatn', sans-serif;
            font-size: 15px;
            resize: none;
            max-height: 120px;
            min-height: 28px;
            padding: 10px 0;
            line-height: 1.7;
            text-align: right; /* راست‌چین */
        }

        .input-wrapper textarea::placeholder {
            color: var(--text-muted);
            opacity: 0.7;
            text-align: right;
        }

        .input-actions {
            display: flex;
            gap: 6px;
            align-items: center;
        }

        .btn-action {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            transition: all 0.3s ease;
            font-family: 'Vazirmatn', sans-serif;
            background: rgba(255,255,255,0.05);
            color: var(--text-secondary);
            backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
        }

        .btn-action:hover {
            background: rgba(45, 212, 191, 0.2);
            color: var(--primary-light);
            transform: scale(1.1);
            border-color: var(--primary-light);
            box-shadow: 0 0 20px var(--primary-light);
        }

        .btn-send {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark)) !important;
            color: white !important;
            box-shadow: 0 4px 20px rgba(15, 118, 110, 0.6);
            border: none;
        }

        .btn-send:hover {
            transform: scale(1.1) rotate(5deg); /* چرخش ملایم به جهت مخالف */
            box-shadow: 0 6px 25px rgba(45, 212, 191, 0.8);
        }

        .btn-send:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        #fileInput {
            display: none;
        }

        /* ========== فوتر ========== */
        .footer-note {
            text-align: center;
            padding: 12px 8px 4px;
            font-size: 11px;
            color: var(--text-muted);
            opacity: 0.7;
            letter-spacing: 0.5px;
        }

        /* ========== استایل مارک‌داون (همگی راست‌چین) ========== */
        .message-content h3 {
            color: var(--primary-lighter);
            margin: 14px 0 8px;
            font-size: 16px;
            border-bottom: 1px dashed var(--primary-light);
            padding-bottom: 4px;
            text-align: right;
        }

        .message-content ul, .message-content ol {
            padding-right: 25px;
            margin: 10px 0;
            text-align: right;
        }

        .message-content li {
            margin: 6px 0;
            text-align: right;
        }

        .message-content code {
            background: rgba(0,0,0,0.5);
            padding: 3px 8px;
            border-radius: 8px;
            font-size: 13px;
            color: #f0abfc;
            border: 1px solid #a78bfa40;
            direction: ltr; /* کد معمولاً چپ‌چین می‌ماند */
            display: inline-block;
        }

        .message-content p {
            margin: 8px 0;
            text-align: right;
        }

        .message-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
            font-size: 13px;
            background: rgba(0,0,0,0.2);
            border-radius: 16px;
            overflow: hidden;
        }

        .message-content table th,
        .message-content table td {
            border: 1px solid rgba(45, 212, 191, 0.3);
            padding: 10px 14px;
            text-align: right;
        }

        .message-content table th {
            background: rgba(15, 118, 110, 0.4);
            color: var(--primary-lighter);
            font-weight: 700;
        }

        .message-content table tr:nth-child(even) {
            background: rgba(45, 212, 191, 0.05);
        }

        .message-content hr {
            border: none;
            border-top: 1px solid rgba(45, 212, 191, 0.3);
            margin: 15px 0;
        }

        /* ========== نوتیفیکیشن ========== */
        .notification {
            position: fixed;
            top: 25px;
            left: 50%;
            transform: translateX(-50%) translateY(-150px);
            background: rgba(239, 68, 68, 0.8);
            color: white;
            padding: 14px 30px;
            border-radius: 50px;
            font-size: 14px;
            font-family: 'Vazirmatn', sans-serif;
            z-index: 200;
            transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            backdrop-filter: blur(20px);
            border: 1px solid #fffa;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            font-weight: 500;
        }

        .notification.show {
            transform: translateX(-50%) translateY(0);
        }

        .notification.warning {
            background: rgba(245, 158, 11, 0.8);
        }

        /* ========== ریسپانسیو ========== */
        @media (max-width: 640px) {
            .header { padding: 10px 16px; }
            .header-text h1 { font-size: 16px; }
            .header-status { display: none; }
            .btn-clear { left: 10px; padding: 6px 12px; font-size: 11px; }
            .feature-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
            .message { max-width: 95%; }
            .chat-area { padding: 15px 12px; }
            .welcome-icon { font-size: 70px; }
            .welcome-screen h2 { font-size: 22px; }
            .welcome-screen p { font-size: 13px; padding: 12px 18px; }
            .btn-action { width: 42px; height: 42px; font-size: 20px; }
        }
    </style>


    <!-- پس‌زمینه متحرک و گرید -->
    <div class="bg-animation" id="bgAnimation"></div>
    <div class="bg-grid"></div>

    <!-- نوتیفیکیشن -->
    <div class="notification" id="notification"></div>

    <!-- اپلیکیشن اصلی -->
    <div class="app-container">
        
        <!-- هدر -->
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

        <!-- نوار موضوعات سریع -->
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

        <!-- ناحیه چت -->
        <div class="chat-area" id="chatArea">
            <!-- صفحه خوش‌آمدگویی -->
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

            <!-- نشانگر تایپ -->
            <div class="typing-indicator" id="typingIndicator">
                <div class="message-avatar" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark));">🔬</div>
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <!-- پیش‌نمایش تصویر -->
        <div class="image-preview-container" id="imagePreviewContainer">
            <div class="image-preview-wrapper">
                <img id="imagePreview" src="" alt="پیش‌نمایش">
                <button class="image-preview-remove" onclick="removeImage()">✕</button>
            </div>
        </div>

        <!-- ناحیه ورودی -->
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
            const colors = ['#2dd4bf', '#8b5cf6', '#10b981', '#f59e0b'];
            
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 150 + 50;
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.cssText = \`
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    left: \${Math.random() * 100}%;
                    animation-duration: \${Math.random() * 25 + 20}s;
                    animation-delay: \${Math.random() * 15}s;
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
                imageHtml = \`<img src="\${imageUrl}" alt="تصویر ارسالی">\`;
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

`,className:"w-html-embed"})}),I=a=>{const{origin:t,pathname:i,search:r}=new URL(a);return`${t}${i}${r}`},T=l.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),z=({data:a})=>{const{system:t,resources:i,url:r,pageMeta:s}=a,p=I(r),c=l.useMemo(()=>({imageLoader:n,assetBaseUrl:o,resources:i,breakpoints:f,onError:console.error}),[i]);return e.jsxs(g.Provider,{value:c,children:[e.jsx(m.Provider,{value:r,children:e.jsx(T,{pageKey:p,system:t})}),e.jsx(b,{url:r,pageMeta:s,siteName:d,imageLoader:n,assetBaseUrl:o}),e.jsx(x,{children:s.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),A=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${o}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-1/copy-62/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-1/copy-62/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{C as configValuesSerialized};
