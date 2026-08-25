import{j as e,r as c,a as r,i as o,R as g,b as m,P as u,c as b,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی تخصصی قارچ‌شناسی پزشکی</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 40%, #0f1a0a 80%, #1a1000 100%);
            min-height: 100vh;
            color: #e0e0e0;
            overflow-x: hidden;
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
        }

        .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            animation: float 7s infinite;
            opacity: 0.4;
        }

        .particle:nth-child(odd)  { background: #cc88ff; }
        .particle:nth-child(even) { background: #88ffcc; }
        .particle:nth-child(3n)   { background: #ffcc44; width: 2px; height: 2px; }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1);   opacity: 0.3; }
            33%       { transform: translateY(-15px) rotate(120deg) scale(1.2); opacity: 0.7; }
            66%       { transform: translateY(-8px) rotate(240deg) scale(0.8);  opacity: 0.5; }
        }

        .container {
            position: relative;
            z-index: 1;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }

        /* ===== HEADER ===== */
        .header {
            text-align: center;
            padding: 35px 20px 25px;
            margin-bottom: 20px;
        }

        .header-icon {
            font-size: 4.5rem;
            margin-bottom: 12px;
            display: block;
            animation: mushroom-pulse 2.5s ease-in-out infinite;
            filter: drop-shadow(0 0 20px rgba(200,100,255,0.6));
        }

        @keyframes mushroom-pulse {
            0%, 100% { transform: scale(1) rotate(-3deg); filter: drop-shadow(0 0 15px rgba(200,100,255,0.5)); }
            50%       { transform: scale(1.12) rotate(3deg); filter: drop-shadow(0 0 30px rgba(200,100,255,0.9)); }
        }

        .header h1 {
            font-size: 2.1rem;
            background: linear-gradient(90deg, #cc88ff, #ffcc44, #88ffcc, #ff88aa);
            background-size: 300% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 4s linear infinite;
            margin-bottom: 8px;
        }

        @keyframes shimmer {
            0%   { background-position: 0% 50%; }
            100% { background-position: 300% 50%; }
        }

        .header p {
            color: #888;
            font-size: 0.93rem;
            direction: rtl;
            text-align: center;
        }

        .badges {
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 12px;
        }

        .badge {
            display: inline-block;
            padding: 4px 14px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: bold;
        }

        .badge-purple { background: linear-gradient(135deg, #cc88ff, #9933ff); color: #fff; }
        .badge-gold   { background: linear-gradient(135deg, #ffcc44, #ff9900); color: #000; }
        .badge-green  { background: linear-gradient(135deg, #88ffcc, #00cc88); color: #000; }

        /* ===== TOPICS BAR ===== */
        .topics-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 15px;
            background: rgba(200,136,255,0.04);
            border: 1px solid rgba(200,136,255,0.12);
            border-radius: 15px;
            margin-bottom: 20px;
            direction: rtl;
        }

        .topic-chip {
            background: rgba(200,136,255,0.1);
            border: 1px solid rgba(200,136,255,0.25);
            color: #cc88ff;
            padding: 5px 13px;
            border-radius: 20px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.3s;
            direction: rtl;
        }

        .topic-chip:hover {
            background: rgba(200,136,255,0.22);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(200,136,255,0.2);
        }

        /* ===== CHAT ===== */
        .chat-container {
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(200,136,255,0.15);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(200,136,255,0.05);
        }

        .chat-header {
            background: linear-gradient(135deg, rgba(200,136,255,0.12), rgba(255,204,68,0.08), rgba(136,255,204,0.08));
            padding: 16px 20px;
            border-bottom: 1px solid rgba(200,136,255,0.12);
            display: flex;
            align-items: center;
            gap: 10px;
            direction: rtl;
        }

        .status-dot {
            width: 10px;
            height: 10px;
            background: #cc88ff;
            border-radius: 50%;
            animation: blink 1.5s infinite;
            flex-shrink: 0;
            box-shadow: 0 0 8px rgba(200,136,255,0.8);
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.2; }
        }

        .chat-title {
            font-size: 0.9rem;
            color: #cc88ff;
        }

        #chatMessages {
            height: 520px;
            overflow-y: auto;
            padding: 20px;
            scroll-behavior: smooth;
            direction: rtl;
        }

        #chatMessages::-webkit-scrollbar       { width: 4px; }
        #chatMessages::-webkit-scrollbar-track { background: rgba(255,255,255,0.03); }
        #chatMessages::-webkit-scrollbar-thumb { background: rgba(200,136,255,0.35); border-radius: 2px; }

        .message {
            display: flex;
            gap: 12px;
            margin-bottom: 22px;
            animation: slideIn 0.35s ease;
            direction: rtl;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        .message.user { flex-direction: row-reverse; }

        .avatar {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            flex-shrink: 0;
        }

        .avatar.ai   {
            background: linear-gradient(135deg, #cc88ff, #9933ff);
            box-shadow: 0 0 15px rgba(200,136,255,0.5);
        }
        .avatar.user {
            background: linear-gradient(135deg, #ffcc44, #ff9900);
            box-shadow: 0 0 10px rgba(255,204,68,0.4);
        }

        .message-bubble {
            max-width: 75%;
            padding: 13px 17px;
            border-radius: 18px;
            font-size: 0.92rem;
            line-height: 1.95;
            direction: rtl;
            text-align: right;
        }

        .message.ai .message-bubble {
            background: rgba(200,136,255,0.07);
            border: 1px solid rgba(200,136,255,0.2);
            color: #e8e8e8;
            border-radius: 4px 18px 18px 18px;
        }

        .message.user .message-bubble {
            background: rgba(255,204,68,0.1);
            border: 1px solid rgba(255,204,68,0.25);
            color: #e8e8e8;
            border-radius: 18px 4px 18px 18px;
        }

        .message-bubble strong { color: #cc88ff; }
        .message-bubble em     { color: #ffcc44; font-style: italic; }

        .message-bubble ul, .message-bubble ol {
            margin: 8px 20px 8px 0;
            padding-right: 18px;
            padding-left: 0;
            text-align: right;
        }

        .message-bubble li       { margin-bottom: 5px; text-align: right; }
        .message-bubble h2,
        .message-bubble h3,
        .message-bubble h4       { text-align: right; margin: 10px 0 6px; }
        .message-bubble p        { text-align: right; margin-bottom: 6px; }

        .message-bubble .sci-name {
            color: #88ffcc;
            font-style: italic;
        }

        /* ===== INPUT ===== */
        .input-area {
            padding: 20px;
            border-top: 1px solid rgba(200,136,255,0.1);
            background: rgba(0,0,0,0.25);
            direction: rtl;
        }

        .input-wrapper {
            display: flex;
            gap: 10px;
            align-items: flex-end;
            flex-direction: row;
        }

        #userInput {
            flex: 1;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(200,136,255,0.22);
            border-radius: 15px;
            padding: 12px 16px;
            color: #e0e0e0;
            font-size: 0.92rem;
            font-family: inherit;
            resize: none;
            min-height: 50px;
            max-height: 120px;
            outline: none;
            transition: border-color 0.3s, background 0.3s;
            direction: rtl;
            text-align: right;
        }

        #userInput:focus {
            border-color: rgba(200,136,255,0.55);
            background: rgba(255,255,255,0.08);
        }

        #userInput::placeholder { color: #555; }

        #sendBtn {
            background: linear-gradient(135deg, #cc88ff, #9933ff);
            border: none;
            border-radius: 15px;
            padding: 12px 22px;
            color: #fff;
            font-size: 1.3rem;
            cursor: pointer;
            transition: all 0.3s;
            flex-shrink: 0;
            box-shadow: 0 4px 15px rgba(200,136,255,0.3);
        }

        #sendBtn:hover {
            transform: scale(1.07);
            box-shadow: 0 6px 25px rgba(200,136,255,0.55);
        }

        #sendBtn:disabled {
            opacity: 0.45;
            cursor: not-allowed;
            transform: none;
        }

        /* ===== TYPING ===== */
        .typing-indicator {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
            direction: rtl;
        }

        .typing-dots {
            display: flex;
            gap: 5px;
            align-items: center;
            background: rgba(200,136,255,0.07);
            border: 1px solid rgba(200,136,255,0.2);
            padding: 13px 18px;
            border-radius: 4px 18px 18px 18px;
        }

        .typing-dots span {
            width: 8px;
            height: 8px;
            background: #cc88ff;
            border-radius: 50%;
            animation: typingAnim 1.2s infinite;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingAnim {
            0%, 100% { transform: translateY(0);   opacity: 0.4; }
            50%       { transform: translateY(-6px); opacity: 1; }
        }

        /* ===== QUICK QUESTIONS ===== */
        .quick-questions {
            padding: 15px 20px;
            border-top: 1px solid rgba(200,136,255,0.1);
            direction: rtl;
        }

        .quick-title {
            font-size: 0.8rem;
            color: #555;
            margin-bottom: 10px;
            text-align: right;
        }

        .quick-btns {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
            direction: rtl;
        }

        .quick-btn {
            background: rgba(255,204,68,0.07);
            border: 1px solid rgba(255,204,68,0.22);
            color: #ffcc44;
            padding: 6px 13px;
            border-radius: 10px;
            font-size: 0.78rem;
            cursor: pointer;
            transition: all 0.3s;
            font-family: inherit;
            direction: rtl;
        }

        .quick-btn:hover {
            background: rgba(255,204,68,0.15);
            transform: translateY(-2px);
            box-shadow: 0 3px 10px rgba(255,204,68,0.2);
        }

        /* ===== WELCOME CARD ===== */
        .welcome-card {
            background: linear-gradient(135deg, rgba(200,136,255,0.06), rgba(136,255,204,0.04), rgba(255,204,68,0.04));
            border: 1px solid rgba(200,136,255,0.18);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 18px;
            direction: rtl;
        }

        .welcome-card h3 {
            color: #cc88ff;
            margin-bottom: 10px;
            text-align: right;
            font-size: 1.05rem;
        }

        .welcome-card p {
            color: #888;
            font-size: 0.84rem;
            text-align: right;
            line-height: 1.8;
        }

        .welcome-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-top: 12px;
        }

        .welcome-item {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(200,136,255,0.1);
            border-radius: 10px;
            padding: 8px 12px;
            font-size: 0.8rem;
            color: #aaa;
            text-align: right;
            direction: rtl;
        }

        .welcome-item span { color: #cc88ff; }

        /* ===== FOOTER ===== */
        .footer {
            text-align: center;
            padding: 20px;
            color: #333;
            font-size: 0.75rem;
            direction: rtl;
        }

        /* ===== DIVIDER ===== */
        .section-divider {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 5px 0 15px;
            direction: rtl;
        }

        .divider-line {
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(200,136,255,0.3), transparent);
        }

        .divider-text {
            font-size: 0.7rem;
            color: #444;
            white-space: nowrap;
        }

        @media (max-width: 600px) {
            .header h1 { font-size: 1.4rem; }
            #chatMessages { height: 400px; }
            .message-bubble { max-width: 88%; }
            .welcome-grid { grid-template-columns: 1fr; }
        }
    </style>



<div class="particles" id="particles"></div>

<div class="container">

    <!-- ===== HEADER ===== -->
    <div class="header">
        <span class="header-icon">🍄</span>
        <h1>هوش مصنوعی تخصصی قارچ‌شناسی</h1>
        <p>سیستم هوشمند تخصصی در حوزه قارچ‌شناسی پزشکی و دامپزشکی</p>
        <div class="badges">
            <span class="badge badge-purple">🎓 Medical Mycology AI</span>
            <span class="badge badge-gold">🔬 Clinical Mycology</span>
            <span class="badge badge-green">🧬 Fungal Taxonomy</span>
        </div>
    </div>

    <!-- ===== TOPICS BAR ===== -->
    <div class="topics-bar">
        <span style="color:#555;font-size:0.8rem;align-self:center">موضوعات:</span>
        <div class="topic-chip">🍄 طبقه‌بندی قارچ‌ها</div>
        <div class="topic-chip">🫁 قارچ‌های ریوی</div>
        <div class="topic-chip">🧫 قارچ‌های سطحی</div>
        <div class="topic-chip">💉 قارچ‌های سیستمیک</div>
        <div class="topic-chip">🔬 تشخیص آزمایشگاهی</div>
        <div class="topic-chip">💊 ضد‌قارچ‌ها</div>
        <div class="topic-chip">🧬 مورفولوژی</div>
        <div class="topic-chip">⚗️ محیط کشت</div>
        <div class="topic-chip">🛡️ ایمنی میزبان</div>
    </div>

    <!-- ===== CHAT CONTAINER ===== -->
    <div class="chat-container">

        <div class="chat-header">
            <div class="status-dot"></div>
            <span class="chat-title">🍄 دستیار تخصصی قارچ‌شناسی پزشکی — آنلاین</span>
        </div>

        <div id="chatMessages">

            <div class="welcome-card">
                <h3>🍄 خوش آمدید به سیستم تخصصی قارچ‌شناسی پزشکی</h3>
                <p>این سیستم با دانش عمیق علمی در تمام زمینه‌های قارچ‌شناسی پزشکی، آزمایشگاهی و بالینی آماده پاسخ‌گویی است.</p>
                <div class="welcome-grid">
                    <div class="welcome-item"><span>🍄</span> قارچ‌های سطحی و پوستی</div>
                    <div class="welcome-item"><span>🫁</span> قارچ‌های ریوی و سیستمیک</div>
                    <div class="welcome-item"><span>🔬</span> تشخیص و آزمایشگاه</div>
                    <div class="welcome-item"><span>💊</span> درمان ضد‌قارچی</div>
                    <div class="welcome-item"><span>🧬</span> مورفولوژی و طبقه‌بندی</div>
                    <div class="welcome-item"><span>⚗️</span> محیط‌های کشت</div>
                </div>
            </div>

            <div class="message ai">
                <div class="avatar ai">🍄</div>
                <div class="message-bubble">
                    سلام! من دستیار تخصصی <strong>قارچ‌شناسی پزشکی</strong> هستم. 🎓<br><br>
                    در تمام این حوزه‌ها می‌توانم کمک کنم:<br><br>
                    🍄 <strong>قارچ‌های سطحی:</strong> درماتوفیت‌ها، تینه‌آ، اونیکومایکوزیس<br>
                    🫁 <strong>قارچ‌های ریوی:</strong> آسپرژیلوز، هیستوپلاسموزیس، کوکسیدیوئیدومایکوزیس<br>
                    🩸 <strong>قارچ‌های سیستمیک:</strong> کاندیدیازیس، کریپتوکوکوزیس<br>
                    🔬 <strong>تشخیص آزمایشگاهی:</strong> محیط کشت، رنگ‌آمیزی، سرولوژی<br>
                    💊 <strong>درمان:</strong> آزول‌ها، پلی‌ان‌ها، اکینوکاندین‌ها<br>
                    🧬 <strong>مورفولوژی:</strong> هیف، اسپور، کنیدی، ماکروکنیدی<br><br>
                    سوال تخصصی خود را بپرسید! 🔬
                </div>
            </div>

        </div>

        <!-- ===== QUICK QUESTIONS ===== -->
        <div class="quick-questions">
            <div class="quick-title">⚡ سوالات سریع پیشنهادی:</div>
            <div class="quick-btns">
                <button class="quick-btn" onclick="askQuick('تفاوت درماتوفیت‌ها با Candida را کامل توضیح دهید')">درماتوفیت‌ها vs کاندیدا</button>
                <button class="quick-btn" onclick="askQuick('مورفولوژی Aspergillus fumigatus را کامل بیان کنید')">مورفولوژی آسپرژیلوس</button>
                <button class="quick-btn" onclick="askQuick('طبقه‌بندی کامل قارچ‌های پزشکی را توضیح دهید')">طبقه‌بندی قارچ‌ها</button>
                <button class="quick-btn" onclick="askQuick('مکانیسم اثر داروهای ضدقارچی را توضیح دهید')">مکانیسم داروهای ضدقارچ</button>
                <button class="quick-btn" onclick="askQuick('تفاوت محیط کشت Sabouraud و Czapek را توضیح دهید')">محیط‌های کشت قارچ</button>
                <button class="quick-btn" onclick="askQuick('کریپتوکوکوس نئوفورمانس را کامل توضیح دهید')">کریپتوکوکوس</button>
                <button class="quick-btn" onclick="askQuick('انواع تینه‌آ و عوامل ایجادکننده هر کدام را بیان کنید')">انواع تینه‌آ</button>
                <button class="quick-btn" onclick="askQuick('دایمورفیسم در قارچ‌ها را با مثال توضیح دهید')">دایمورفیسم قارچی</button>
            </div>
        </div>

        <!-- ===== INPUT AREA ===== -->
        <div class="input-area">
            <div class="input-wrapper">
                <button id="sendBtn" onclick="sendMessage()">🍄</button>
                <textarea id="userInput" placeholder="سوال تخصصی خود را درباره قارچ‌شناسی بپرسید... (Enter برای ارسال)" rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this)"></textarea>
            </div>
        </div>

    </div>

    <div class="footer">
        🍄 سیستم تخصصی قارچ‌شناسی پزشکی | Medical &amp; Veterinary Mycology Expert System
    </div>

</div>

<script>
    const API_KEY = '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';
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    const SYSTEM_PROMPT = \`شما یک استاد و متخصص برجسته در زمینه قارچ‌شناسی پزشکی (Medical Mycology) هستید.
شما دانش عمیق، دقیق و آکادمیک در تمام زیرشاخه‌های قارچ‌شناسی دارید.

════════════════════════════════════════
🧬 طبقه‌بندی و سیستماتیک قارچ‌ها
════════════════════════════════════════
- ساختار کلی قلمرو Fungi و تفاوت با پروکاریوت‌ها و جانوران
- شاخه‌های اصلی: Ascomycota, Basidiomycota, Zygomycota (Mucormycota), Chytridiomycota, Microsporida
- تقسیم‌بندی بر اساس محل بیماری:
  • قارچ‌های سطحی (Superficial mycoses)
  • قارچ‌های جلدی (Cutaneous mycoses)
  • قارچ‌های زیرجلدی (Subcutaneous mycoses)
  • قارچ‌های سیستمیک اولیه (Primary systemic mycoses)
  • قارچ‌های سیستمیک فرصت‌طلب (Opportunistic mycoses)
- دایمورفیسم (Dimorphism): مفهوم، مثال‌ها، شرایط تغییر فرم

════════════════════════════════════════
🍄 درماتوفیت‌ها (Dermatophytes)
════════════════════════════════════════
- سه جنس اصلی: Trichophyton, Microsporum, Epidermophyton
- طبقه‌بندی بر اساس اکولوژی: آنتروپوفیل، زئوفیل، ژئوفیل
- انواع تینه‌آ:
  • Tinea capitis (کچلی سر): T. tonsurans, M. canis
  • Tinea corporis (کچلی بدن)
  • Tinea pedis (پای ورزشکار): T. rubrum, T. mentagrophytes
  • Tinea unguium / Onychomycosis: T. rubrum
  • Tinea cruris, Tinea barbae, Tinea versicolor
- مورفولوژی ماکروکنیدی و میکروکنیدی هر جنس
- آزمایش Wood's lamp و Hair perforation test

════════════════════════════════════════
🧫 قارچ‌های سطحی غیر درماتوفیت
════════════════════════════════════════
- Malassezia furfur: تینه‌آ ورسیکالر، فولیکولیت
- Piedraia hortae: پیدرای سیاه
- Trichosporon: پیدرای سفید
- Phaeannellomyces werneckii: تینه‌آ نیگرا

════════════════════════════════════════
🩸 Candida (کاندیدا)
════════════════════════════════════════
- گونه‌های مهم: C. albicans, C. glabrata, C. tropicalis, C. parapsilosis, C. auris
- مورفولوژی: بلاستوکنیدی، سودوهیف، هیف واقعی، کلامیدوکنیدی
- Germ tube test (تست لوله زایا) - اختصاصی C. albicans
- بیماری‌ها: کاندیدیازیس دهانی (برفک)، واژینال، کاتانئوس، سیستمیک
- فاکتورهای بیماری‌زایی: چسبندگی، آنزیم‌ها (پروتئاز، فسفولیپاز)، بیوفیلم
- شناسایی در آزمایشگاه: کروم‌آگار، VITEK، MALDI-TOF

════════════════════════════════════════
🫁 Aspergillus (آسپرژیلوس)
════════════════════════════════════════
- گونه‌های مهم: A. fumigatus, A. flavus, A. niger, A. terreus
- مورفولوژی: کنیدیوفور، وزیکول، فیالاید، متولا، کنیدی
- تیپ سر آسپرژیلوسی: uniseriate vs biseriate
- سندرم‌های بالینی:
  • آسپرژیلوزیس برونشوپولمونری آلرژیک (ABPA)
  • آسپرژیلوما (توپ قارچی)
  • آسپرژیلوزیس تهاجمی ریوی (IPA)
  • آسپرژیلوزیس سینوسی
- تشخیص: گالاکتومانان آنتی‌ژن، CT اسکن (halo sign)، بتا-گلوکان
- مقاومت به آزول‌ها در A. fumigatus

════════════════════════════════════════
🌿 Cryptococcus (کریپتوکوکوس)
════════════════════════════════════════
- گونه‌ها: C. neoformans (var. grubii, var. neoformans), C. gattii
- مورفولوژی: مخمر کپسول‌دار، پلی‌ساکارید کپسول (گلوکورونوکسیلومانان)
- رنگ‌آمیزی India Ink (مرکب هند) - هاله اطراف مخمر
- Urease test مثبت
- محیط Birdseed agar (Niger seed agar): کلنی قهوه‌ای
- بیماری: مننژیت کریپتوکوکال (در HIV+)، ریوی، جلدی
- لاتکس آگلوتیناسیون برای کپسول آنتی‌ژن در CSF
- ارتباط با فضله کبوتر و درخت اوکالیپتوس (C. gattii)

════════════════════════════════════════
🦠 موکورمایکوزیس (Mucormycosis)
════════════════════════════════════════
- جنس‌های مهم: Rhizopus, Mucor, Lichtheimia (Absidia), Cunninghamella
- مورفولوژی: هیف غیرسپتات (coenocytic)، اسپورانژیوفور، اسپورانژیوم، اسپورانژیوسپور
- تفاوت Rhizopus با Mucor: وجود ریزوئید در Rhizopus
- بیماری: رینو‌اوربیتال‌سربرال، ریوی، گوارشی، پوستی
- بیماران در خطر: دیابت کنترل‌نشده، نوتروپنی، مصرف دفروکسامین
- درمان: آمفوتریسین B، جراحی دبریدمان، پوزاکونازول

════════════════════════════════════════
🌍 قارچ‌های سیستمیک اولیه (Endemic mycoses)
════════════════════════════════════════
- Histoplasma capsulatum:
  • منطقه جغرافیایی: دره‌های رودخانه مسیسیپی و اوهایو، تماس با فضله خفاش/پرندگان
  • دایمورف: هیف‌دار (ماکروکنیدی توبرکولات) vs مخمری داخل ماکروفاژ
  • رنگ‌آمیزی: GMS، PAS، Giemsa
  • آنتی‌ژن ادراری برای تشخیص

- Coccidioides immitis / C. posadasii:
  • جغرافیا: بیابان‌های آمریکای شمال‌غربی
  • فرم بافتی: اسفروله (Spherule) حاوی اندوسپور - منحصربه‌فرد
  • تب دره (Valley fever)
  • خطر بیولوژیک بالا در آزمایشگاه (BSL-3)

- Blastomyces dermatitidis:
  • مخمر بزرگ با جوانه‌زنی با پایه پهن (Broad-based budding)
  • بیماری ریوی و پوستی

- Paracoccidioides brasiliensis:
  • جنوب آمریکا
  • "steering wheel" یا "captain's wheel" - چرخ فرمان در مورفولوژی

════════════════════════════════════════
🔬 قارچ‌های زیرجلدی
════════════════════════════════════════
- Sporothrix schenckii:
  • بیماری اسپوروتریکوزیس (گل سرخ‌کاران)
  • لنفوکوتانئوس - ضایعات در طول عروق لنفاوی
  • دایمورف، مخمر برگ سیگاری (Cigar-shaped yeast) در بافت

- Chromoblastomycosis:
  • عوامل: Fonsecaea, Cladophialophora, Phialophora
  • اجسام مرونی / Sclerotic bodies (Copper pennies) در بافت

- Mycetoma:
  • اکتینومایستومای باکتریایی vs اومایستومای قارچی
  • دانه‌های سفید/زرد/سیاه در چرک

════════════════════════════════════════
⚗️ آزمایشگاه تشخیصی
════════════════════════════════════════
محیط‌های کشت:
  • Sabouraud Dextrose Agar (SDA): محیط پایه، pH اسیدی
  • SDA + Cycloheximide (Actidione): انتخابی برای درماتوفیت‌ها
  • Czapek-Dox agar: برای آسپرژیلوس
  • Cornmeal agar: کلامیدوکنیدی C. albicans
  • Niger seed agar: کریپتوکوکوس
  • Brain Heart Infusion (BHI): قارچ‌های دایمورف
  • CHROM agar Candida: تمایز گونه‌های کاندیدا بر اساس رنگ کلنی

رنگ‌آمیزی‌ها:
  • KOH (هیدروکسید پتاسیم): آماده‌سازی مستقیم
  • Calcofluor White: فلورسنت، رنگ‌آمیزی کیتین دیواره قارچ
  • GMS (Gomori Methenamine Silver): هیف‌ها سیاه رنگ
  • PAS (Periodic Acid-Schiff): رنگ‌آمیزی پلی‌ساکاریدها
  • India Ink: کپسول کریپتوکوکوس
  • Giemsa / Wright: هیستوپلاسما داخل ماکروفاژ
  • H&E: بافت‌شناسی عمومی

آزمون‌های تکمیلی:
  • Germ tube test
  • Urease test
  • Hair perforation test
  • Thermotolerance test (37°C vs 45°C)
  • آنتی‌ژن‌ها: گالاکتومانان، بتا-گلوکان، کریپتوکوکال آنتی‌ژن
  • PCR و سکوانس ITS region
  • MALDI-TOF MS برای شناسایی سریع

════════════════════════════════════════
💊 داروهای ضدقارچی
════════════════════════════════════════
آزول‌ها (Azoles) - مهار لانوسترول-14α-دمتیلاز → کاهش ارگوسترول:
  • فلوکونازول: کاندیدا، کریپتوکوکوس - نه آسپرژیلوس
  • ایتراکونازول: طیف وسیع، درماتوفیت، آسپرژیلوس
  • وریکونازول: آسپرژیلوس تهاجمی (خط اول)، فوزاریوم
  • پوزاکونازول: موکورمایکوزیس، پروفیلاکسی
  • ایزاوکونازول: موکورمایکوزیس، آسپرژیلوس

پلی‌ان‌ها (Polyenes) - اتصال به ارگوسترول → اختلال غشا:
  • آمفوتریسین B: طیف وسیع، خط اول بسیاری از عفونت‌های تهاجمی
  • فرم‌های لیپوزومال: کاهش نفروتوکسیسیتی
  • نیستاتین: فقط موضعی

اکینوکاندین‌ها (Echinocandins) - مهار بتا-1,3-گلوکان سنتاز:
  • کاسپوفانژین، میکافانژین، آنیدولافانژین
  • فعال علیه Candida و Aspergillus
  • غیرفعال روی Cryptococcus و Mucor

آنتی‌متابولیت:
  • فلوسیتوزین (5-FC): فقط در ترکیب، مننژیت کریپتوکوکال

مقاومت دارویی:
  • C. auris: مقاومت چندگانه (Multi-drug resistant)
  • A. fumigatus: مقاومت به ایتراکونازول (cyp51A mutations)

════════════════════════════════════════
🛡️ پاتوژنز و ایمنی
════════════════════════════════════════
- نقش ایمنی سلولی (Th1, Th17) در دفاع علیه قارچ‌ها
- بیماران در خطر: HIV/AIDS، پیوند عضو، شیمی‌درمانی، دیابت، نوتروپنی
- فاکتورهای حدت قارچ: کپسول، ملانین، پروتئاز، فسفولیپاز، بیوفیلم، تغییر دما

════════════════════════════════════════
📏 قوانین پاسخ‌دهی
════════════════════════════════════════
1. همیشه به فارسی روان و علمی پاسخ دهید - راست چین و RTL
2. نام علمی لاتین را همیشه ایتالیک و در پرانتز بیاورید
3. پاسخ‌ها کامل، دقیق، ساختارمند و آکادمیک باشند
4. از جداول مقایسه‌ای و لیست‌بندی برای وضوح استفاده کنید
5. در صورت سوال غیرمرتبط، مؤدبانه اعلام کنید فقط در حوزه قارچ‌شناسی پاسخ می‌دهید
6. مثال‌های بالینی و کاربردی بیاورید
7. تمام متون راست‌چین (RTL) باشند\`;

    let conversationHistory = [];
    let isTyping = false;

    // ===== PARTICLES =====
    function createParticles() {
        const container = document.getElementById('particles');
        const emojis = ['🍄','🔬','🧫','💊','🧬','⚗️'];
        for (let i = 0; i < 35; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top  = Math.random() * 100 + '%';
            particle.style.animationDelay    = Math.random() * 7 + 's';
            particle.style.animationDuration = (5 + Math.random() * 5) + 's';
            if (Math.random() > 0.85) {
                particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                particle.style.background = 'transparent';
                particle.style.fontSize = '0.9rem';
                particle.style.width = 'auto';
                particle.style.height = 'auto';
                particle.style.opacity = '0.1';
            }
            container.appendChild(particle);
        }
    }

    function autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    }

    function askQuick(question) {
        document.getElementById('userInput').value = question;
        sendMessage();
    }

    function addMessage(content, role) {
        const messagesDiv = document.getElementById('chatMessages');
        const messageDiv  = document.createElement('div');
        messageDiv.className = \`message \${role}\`;

        const avatar = document.createElement('div');
        avatar.className = \`avatar \${role}\`;
        avatar.textContent = role === 'ai' ? '🍄' : '👤';

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = formatMessage(content);

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(bubble);
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function formatMessage(text) {
        // Bold
        text = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
        // Italic (نام علمی)
        text = text.replace(/\\*(.*?)\\*/g, '<em class="sci-name">$1</em>');
        // Headers
        text = text.replace(/^#### (.*)/gm, '<h4 style="color:#ffcc44;margin:8px 0 4px;text-align:right">$1</h4>');
        text = text.replace(/^### (.*)/gm,  '<h4 style="color:#88ffcc;margin:10px 0 5px;text-align:right">$1</h4>');
        text = text.replace(/^## (.*)/gm,   '<h3 style="color:#cc88ff;margin:12px 0 6px;text-align:right">$1</h3>');
        text = text.replace(/^# (.*)/gm,    '<h2 style="color:#cc88ff;margin:14px 0 8px;text-align:right">$1</h2>');
        // Bullets
        text = text.replace(/^[-•·] (.*)/gm, '<li style="margin:4px 0;text-align:right">$1</li>');
        text = text.replace(/^\\d+\\. (.*)/gm, '<li style="margin:4px 0;text-align:right">$1</li>');
        // Wrap li in ul
        text = text.replace(/(<li[^>]*>.*?<\\/li>\\s*)+/gs, m =>
            '<ul style="margin:6px 0;padding-right:20px;padding-left:0;text-align:right;list-style-position:inside">' + m + '</ul>'
        );
        // Line breaks
        text = text.replace(/\\n\\n/g, '<br><br>');
        text = text.replace(/\\n/g,   '<br>');
        return text;
    }

    function showTyping() {
        const messagesDiv = document.getElementById('chatMessages');
        const typingDiv   = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = \`
            <div class="avatar ai">🍄</div>
            <div class="typing-dots">
                <span></span><span></span><span></span>
            </div>\`;
        messagesDiv.appendChild(typingDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function hideTyping() {
        const el = document.getElementById('typingIndicator');
        if (el) el.remove();
    }

    async function sendMessage() {
        const input       = document.getElementById('userInput');
        const sendBtn     = document.getElementById('sendBtn');
        const userMessage = input.value.trim();

        if (!userMessage || isTyping) return;

        addMessage(userMessage, 'user');
        conversationHistory.push({ role: 'user', content: userMessage });

        input.value = '';
        input.style.height = 'auto';
        isTyping = true;
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
                    temperature: 0.2,
                    max_tokens: 2500,
                    top_p: 0.85
                })
            });

            if (!response.ok) {
                const err = await response.json().catch(() => ({}));
                throw new Error(\`خطای API: \${response.status} - \${err.error?.message || ''}\`);
            }

            const data       = await response.json();
            const aiResponse = data.choices[0].message.content;

            conversationHistory.push({ role: 'assistant', content: aiResponse });
            hideTyping();
            addMessage(aiResponse, 'ai');

        } catch (error) {
            hideTyping();
            addMessage(\`⚠️ خطا در اتصال به سرور:\\n\${error.message}\\n\\nلطفاً دوباره تلاش کنید.\`, 'ai');
        } finally {
            isTyping = false;
            sendBtn.disabled = false;
            input.focus();
        }
    }

    createParticles();
<\/script>


`,className:"w-html-embed"})}),T=a=>{const{origin:t,pathname:s,search:i}=new URL(a);return`${t}${s}${i}`},M=c.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),C=({data:a})=>{const{system:t,resources:s,url:i,pageMeta:n}=a,d=T(i),p=c.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:s,breakpoints:f,onError:console.error}),[s]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(m.Provider,{value:i,children:e.jsx(M,{pageKey:d,system:t})}),e.jsx(u,{url:i,pageMeta:n,siteName:l,imageLoader:o,assetBaseUrl:r}),e.jsx(b,{children:n.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),A=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-53/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-53/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{D as configValuesSerialized};
