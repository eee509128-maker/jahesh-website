import{j as e,r as l,a as r,i as o,R as g,b as u,P as m,c as x,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی تخصصی انگل‌شناسی بندپایان</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a0a 100%);
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
            width: 2px;
            height: 2px;
            background: #00ff88;
            border-radius: 50%;
            animation: float 6s infinite;
            opacity: 0.3;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }

        .container {
            position: relative;
            z-index: 1;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            padding: 30px 20px;
            margin-bottom: 20px;
        }

        .header-icon {
            font-size: 4rem;
            margin-bottom: 10px;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .header h1 {
            font-size: 2rem;
            background: linear-gradient(90deg, #00ff88, #00ccff, #ff6688);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;
        }

        .header p {
            color: #888;
            font-size: 0.95rem;
            direction: rtl;
            text-align: center;
        }

        .badge {
            display: inline-block;
            background: linear-gradient(135deg, #00ff88, #00ccff);
            color: #000;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: bold;
            margin-top: 8px;
        }

        .topics-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 15px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(0,255,136,0.1);
            border-radius: 15px;
            margin-bottom: 20px;
            direction: rtl;
            justify-content: flex-start;
        }

        .topic-chip {
            background: rgba(0,255,136,0.1);
            border: 1px solid rgba(0,255,136,0.3);
            color: #00ff88;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.3s;
            direction: rtl;
        }

        .topic-chip:hover {
            background: rgba(0,255,136,0.2);
            transform: translateY(-2px);
        }

        .chat-container {
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(0,255,136,0.15);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .chat-header {
            background: linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,204,255,0.1));
            padding: 15px 20px;
            border-bottom: 1px solid rgba(0,255,136,0.1);
            display: flex;
            align-items: center;
            gap: 10px;
            direction: rtl;
        }

        .status-dot {
            width: 10px;
            height: 10px;
            background: #00ff88;
            border-radius: 50%;
            animation: blink 1.5s infinite;
            flex-shrink: 0;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }

        .chat-title {
            font-size: 0.9rem;
            color: #00ff88;
        }

        #chatMessages {
            height: 500px;
            overflow-y: auto;
            padding: 20px;
            scroll-behavior: smooth;
            direction: rtl;
        }

        #chatMessages::-webkit-scrollbar {
            width: 4px;
        }

        #chatMessages::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
        }

        #chatMessages::-webkit-scrollbar-thumb {
            background: rgba(0,255,136,0.3);
            border-radius: 2px;
        }

        .message {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
            animation: slideIn 0.3s ease;
            direction: rtl;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* پیام کاربر از سمت چپ */
        .message.user {
            flex-direction: row-reverse;
        }

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        .avatar.ai {
            background: linear-gradient(135deg, #00ff88, #00ccff);
            color: #000;
        }

        .avatar.user {
            background: linear-gradient(135deg, #ff6688, #ff9944);
            color: #000;
        }

        .message-bubble {
            max-width: 75%;
            padding: 12px 16px;
            border-radius: 18px;
            font-size: 0.92rem;
            line-height: 1.9;
            direction: rtl;
            text-align: right;
        }

        /* حباب AI - راست چین، از سمت راست */
        .message.ai .message-bubble {
            background: rgba(0,255,136,0.08);
            border: 1px solid rgba(0,255,136,0.2);
            color: #e0e0e0;
            border-radius: 4px 18px 18px 18px;
            text-align: right;
        }

        /* حباب کاربر - راست چین، از سمت چپ */
        .message.user .message-bubble {
            background: rgba(255,102,136,0.15);
            border: 1px solid rgba(255,102,136,0.3);
            color: #e0e0e0;
            border-radius: 18px 4px 18px 18px;
            text-align: right;
        }

        .message-bubble strong {
            color: #00ff88;
        }

        .message-bubble ul, .message-bubble ol {
            margin: 8px 20px 8px 0;
            padding-right: 15px;
            padding-left: 0;
            text-align: right;
        }

        .message-bubble li {
            margin-bottom: 5px;
            text-align: right;
        }

        .message-bubble h2, 
        .message-bubble h3, 
        .message-bubble h4 {
            text-align: right;
            margin: 10px 0 6px 0;
        }

        .message-bubble p {
            text-align: right;
            margin-bottom: 6px;
        }

        .input-area {
            padding: 20px;
            border-top: 1px solid rgba(0,255,136,0.1);
            background: rgba(0,0,0,0.2);
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
            border: 1px solid rgba(0,255,136,0.2);
            border-radius: 15px;
            padding: 12px 16px;
            color: #e0e0e0;
            font-size: 0.92rem;
            font-family: inherit;
            resize: none;
            min-height: 50px;
            max-height: 120px;
            outline: none;
            transition: border-color 0.3s;
            direction: rtl;
            text-align: right;
        }

        #userInput:focus {
            border-color: rgba(0,255,136,0.5);
            background: rgba(255,255,255,0.08);
        }

        #userInput::placeholder {
            color: #555;
            text-align: right;
            direction: rtl;
        }

        #sendBtn {
            background: linear-gradient(135deg, #00ff88, #00ccff);
            border: none;
            border-radius: 15px;
            padding: 12px 20px;
            color: #000;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: bold;
            flex-shrink: 0;
        }

        #sendBtn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 20px rgba(0,255,136,0.4);
        }

        #sendBtn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .typing-indicator {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
            direction: rtl;
        }

        .typing-dots {
            display: flex;
            gap: 4px;
            align-items: center;
            background: rgba(0,255,136,0.08);
            border: 1px solid rgba(0,255,136,0.2);
            padding: 12px 16px;
            border-radius: 4px 18px 18px 18px;
        }

        .typing-dots span {
            width: 8px;
            height: 8px;
            background: #00ff88;
            border-radius: 50%;
            animation: typingAnim 1.2s infinite;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingAnim {
            0%, 100% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(-5px); opacity: 1; }
        }

        .quick-questions {
            padding: 15px 20px;
            border-top: 1px solid rgba(0,255,136,0.1);
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
            gap: 6px;
            direction: rtl;
            justify-content: flex-start;
        }

        .quick-btn {
            background: rgba(0,204,255,0.08);
            border: 1px solid rgba(0,204,255,0.2);
            color: #00ccff;
            padding: 6px 12px;
            border-radius: 10px;
            font-size: 0.78rem;
            cursor: pointer;
            transition: all 0.3s;
            font-family: inherit;
            direction: rtl;
            text-align: right;
        }

        .quick-btn:hover {
            background: rgba(0,204,255,0.15);
            transform: translateY(-1px);
        }

        .footer {
            text-align: center;
            padding: 20px;
            color: #333;
            font-size: 0.75rem;
            direction: rtl;
        }

        .welcome-card {
            background: linear-gradient(135deg, rgba(0,255,136,0.05), rgba(0,204,255,0.05));
            border: 1px solid rgba(0,255,136,0.15);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 15px;
            text-align: right;
            direction: rtl;
        }

        .welcome-card h3 {
            color: #00ff88;
            margin-bottom: 8px;
            text-align: right;
        }

        .welcome-card p {
            color: #888;
            font-size: 0.85rem;
            text-align: right;
        }

        @media (max-width: 600px) {
            .header h1 { font-size: 1.4rem; }
            #chatMessages { height: 400px; }
            .message-bubble { max-width: 88%; }
        }
    </style>



<div class="particles" id="particles"></div>

<div class="container">

    <!-- Header -->
    <div class="header">
        <div class="header-icon">🦟</div>
        <h1>هوش مصنوعی تخصصی انگل‌شناسی</h1>
        <p>سیستم هوشمند تخصصی در حوزه بندپایان پزشکی و دامپزشکی</p>
        <div class="badge">🎓 Arthropod Parasitology AI Expert</div>
    </div>

    <!-- Topics Bar -->
    <div class="topics-bar">
        <span style="color: #555; font-size: 0.8rem; align-self: center;">موضوعات:</span>
        <div class="topic-chip">🦟 حشرات ناقل</div>
        <div class="topic-chip">🕷️ عنکبوتیان</div>
        <div class="topic-chip">🦂 عقرب‌ها</div>
        <div class="topic-chip">🦠 سیکل زندگی</div>
        <div class="topic-chip">💊 درمان و کنترل</div>
        <div class="topic-chip">🔬 تشخیص آزمایشگاهی</div>
        <div class="topic-chip">🌍 اپیدمیولوژی</div>
        <div class="topic-chip">🧬 طبقه‌بندی</div>
    </div>

    <!-- Chat Container -->
    <div class="chat-container">

        <div class="chat-header">
            <div class="status-dot"></div>
            <span class="chat-title">دستیار تخصصی انگل‌شناسی بندپایان - آنلاین</span>
        </div>

        <div id="chatMessages">
            <div class="welcome-card">
                <h3>🦟 خوش آمدید به سیستم تخصصی انگل‌شناسی بندپایان</h3>
                <p>این سیستم به صورت تخصصی در زمینه بندپایان پزشکی، دامپزشکی، طبقه‌بندی، چرخه زندگی، بیماری‌های ناقله، درمان و کنترل پاسخ می‌دهد.</p>
            </div>

            <div class="message ai">
                <div class="avatar ai">🦟</div>
                <div class="message-bubble">
                    سلام! من دستیار تخصصی <strong>انگل‌شناسی بندپایان</strong> هستم. 🎓<br><br>
                    می‌توانم در زمینه‌های زیر به شما کمک کنم:<br>
                    • <strong>طبقه‌بندی بندپایان</strong> (Arthropoda) - کلاس‌ها، راسته‌ها، خانواده‌ها<br>
                    • <strong>حشرات ناقل بیماری:</strong> پشه‌ها، مگس‌ها، شپش، کنه، کتک<br>
                    • <strong>سیکل زندگی</strong> و مراحل تکاملی بندپایان<br>
                    • <strong>بیماری‌های منتقله توسط بندپایان:</strong> مالاریا، لیشمانیوز، طاعون...<br>
                    • <strong>تشخیص آزمایشگاهی</strong> و روش‌های جمع‌آوری نمونه<br>
                    • <strong>کنترل و پیشگیری:</strong> حشره‌کش‌ها، روش‌های بیولوژیک<br><br>
                    سوال خود را بپرسید! 🔬
                </div>
            </div>
        </div>

        <!-- Quick Questions -->
        <div class="quick-questions">
            <div class="quick-title">⚡ سوالات سریع:</div>
            <div class="quick-btns">
                <button class="quick-btn" onclick="askQuick('تفاوت Anopheles و Culex را توضیح دهید')">پشه آنوفل و کولکس</button>
                <button class="quick-btn" onclick="askQuick('چرخه زندگی کنه Ixodes را کامل توضیح دهید')">چرخه زندگی کنه</button>
                <button class="quick-btn" onclick="askQuick('طبقه‌بندی کامل بندپایان پزشکی را بیان کنید')">طبقه‌بندی بندپایان</button>
                <button class="quick-btn" onclick="askQuick('مکانیسم انتقال لیشمانیوز توسط فلبوتوموس را شرح دهید')">لیشمانیوز و فلبوتوموس</button>
                <button class="quick-btn" onclick="askQuick('انواع شپش و بیماری‌های ناقله آنها را توضیح دهید')">انواع شپش</button>
                <button class="quick-btn" onclick="askQuick('مقایسه کامل Sarcoptes و Demodex')">سارکوپتس و دمودکس</button>
            </div>
        </div>

        <!-- Input Area -->
        <div class="input-area">
            <div class="input-wrapper">
                <button id="sendBtn" onclick="sendMessage()">➤</button>
                <textarea id="userInput" placeholder="سوال تخصصی خود را درباره بندپایان بپرسید... (Enter برای ارسال)" rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this)"></textarea>
            </div>
        </div>

    </div>

    <div class="footer">
        🔬 سیستم تخصصی انگل‌شناسی بندپایان | Arthropod Parasitology Expert System
    </div>
</div>

<script>
    const API_KEY = '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';
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    const SYSTEM_PROMPT = \`شما یک استاد و متخصص برجسته در زمینه انگل‌شناسی بندپایان (Arthropod Parasitology) هستید.
    شما دانش عمیق و تخصصی در تمامی حوزه‌های زیر دارید:

    === طبقه‌بندی و سیستماتیک ===
    - شاخه Arthropoda و تمام کلاس‌های آن
    - کلاس Insecta: راسته‌های Diptera, Siphonaptera, Phthiraptera, Hemiptera, Blattodea, Coleoptera
    - کلاس Arachnida: راسته‌های Acari (کنه و جرب), Scorpiones, Araneae
    - کلاس Crustacea: میزبانان واسط
    - کلاس Myriapoda: هزارپایان

    === حشرات پزشکی مهم ===
    - پشه‌ها (Culicidae): Anopheles (ناقل مالاریا), Culex (ناقل فیلاریوز و آنسفالیت), Aedes (ناقل دنگ، زیکا، تب زرد)
    - فلبوتوموس‌ها (Phlebotomidae): Phlebotomus و Lutzomyia - ناقلان لیشمانیوز
    - مگس‌ها: Glossina (مگس تسه‌تسه - ناقل تریپانوزومیاز), Musca, Chrysops, Simulium
    - کک‌ها (Siphonaptera): Xenopsylla cheopis (کک موش)، Pulex irritans
    - شپش‌ها (Phthiraptera): Pediculus humanus capitis، P.h.corporis، Phthirus pubis
    - ساس‌ها (Hemiptera): Cimex lectularius, Triatoma (ناقل بیماری شاگاس)

    === کنه‌ها و جرب‌ها (Acari) ===
    - کنه‌های سخت (Ixodidae): Ixodes, Rhipicephalus, Dermacentor, Amblyomma, Hyalomma
    - کنه‌های نرم (Argasidae): Argas, Ornithodoros
    - جرب‌ها: Sarcoptes scabiei (گال)، Demodex folliculorum، Trombicula، Dermanyssus

    === بیماری‌های ناقله ===
    - مالاریا: Plasmodium + Anopheles
    - لیشمانیوز: احشایی (کالاآزار), جلدی, مخاطی جلدی + Phlebotomus
    - طاعون: Yersinia pestis + Xenopsylla cheopis
    - تیفوس اپیدمیک: Rickettsia prowazekii + Pediculus
    - تب راکی: Rickettsia rickettsii + Dermacentor
    - بیماری لایم: Borrelia burgdorferi + Ixodes
    - آنسفالیت‌های ویروسی: WNV, TBE + کنه و پشه
    - فیلاریوز: Wuchereria bancrofti + Culex
    - تریپانوزومیاز آفریقایی: Trypanosoma + Glossina
    - بیماری شاگاس: T. cruzi + Triatoma
    - تب دنگ، زیکا، چیکونگونیا: + Aedes

    === مورفولوژی و شناسایی ===
    - ساختار بدن حشرات: سر، سینه، شکم، ضمائم دهانی
    - انواع دهان: مکنده، گازنده، لیسنده
    - مراحل تکامل: هولومتابول vs همی‌متابول
    - کلیدهای شناسایی مهم
    - تفاوت‌های مورفولوژیک گونه‌های مهم

    === چرخه زندگی ===
    - پشه آنوفل: تخم، لارو (4 مرحله)، شفیره، بالغ
    - فلبوتوموس: چرخه زمینی، تخم‌گذاری
    - کنه‌های تک‌میزبانه، دو‌میزبانه، سه‌میزبانه
    - مراحل لارو-نیمف-بالغ در کنه‌ها
    - چرخه زندگی جرب‌ها و شپش‌ها

    === تشخیص آزمایشگاهی ===
    - روش‌های جمع‌آوری و نگهداری نمونه
    - تهیه اسلاید و رنگ‌آمیزی
    - کلیدهای شناسایی ریخت‌شناسی
    - تله‌های حشره‌ای: CDC Light Trap, BG-Sentinel, Shannon
    - روش‌های مولکولی: PCR، DNA barcoding

    === کنترل و پیشگیری ===
    - حشره‌کش‌های شیمیایی: ارگانوفسفره، پیرتروئیدها، کاربامات‌ها
    - مقاومت به حشره‌کش و مکانیسم‌ها
    - کنترل بیولوژیک: Bacillus thuringiensis israelensis، ماهی گامبوزیا
    - کنترل محیطی: تخلیه آب‌های راکد، مدیریت فضول
    - تله‌های جذبی، پشه‌بند، لباس محافظ

    === قوانین پاسخ‌دهی ===
    1. همیشه به فارسی پاسخ دهید - راست چین و RTL
    2. نام علمی لاتین را در پرانتز بیاورید
    3. پاسخ‌ها کامل، دقیق و علمی باشند
    4. از اشتباه در اطلاعات علمی پرهیز کنید
    5. در صورت سوال غیرمرتبط با بندپایان، مؤدبانه اعلام کنید فقط در این حوزه پاسخ می‌دهید
    6. از لیست‌بندی برای وضوح استفاده کنید
    7. تمام متن‌ها راست به چپ و راست چین باشند\`;

    let conversationHistory = [];
    let isTyping = false;

    function createParticles() {
        const container = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (4 + Math.random() * 4) + 's';
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
        const messageDiv = document.createElement('div');
        messageDiv.className = \`message \${role}\`;

        const avatar = document.createElement('div');
        avatar.className = \`avatar \${role}\`;
        avatar.textContent = role === 'ai' ? '🦟' : '👤';

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

        // Headers
        text = text.replace(/^### (.*)/gm, '<h4 style="color:#00ff88;margin:10px 0 5px;text-align:right">$1</h4>');
        text = text.replace(/^## (.*)/gm, '<h3 style="color:#00ccff;margin:12px 0 6px;text-align:right">$1</h3>');
        text = text.replace(/^# (.*)/gm, '<h2 style="color:#00ff88;margin:14px 0 8px;text-align:right">$1</h2>');

        // Bullet points
        text = text.replace(/^[-•*] (.*)/gm, '<li style="margin:4px 0;text-align:right">$1</li>');

        // Numbered list
        text = text.replace(/^\\d+\\. (.*)/gm, '<li style="margin:4px 0;text-align:right">$1</li>');

        // Wrap consecutive <li> in <ul>
        text = text.replace(/(<li[^>]*>.*?<\\/li>\\s*)+/gs, function(match) {
            return '<ul style="margin:6px 0 6px 0;padding-right:20px;padding-left:0;text-align:right;list-style-position:inside">' + match + '</ul>';
        });

        // Line breaks
        text = text.replace(/\\n\\n/g, '<br><br>');
        text = text.replace(/\\n/g, '<br>');

        return text;
    }

    function showTyping() {
        const messagesDiv = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = \`
            <div class="avatar ai">🦟</div>
            <div class="typing-dots">
                <span></span><span></span><span></span>
            </div>
        \`;
        messagesDiv.appendChild(typingDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function hideTyping() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    async function sendMessage() {
        const input = document.getElementById('userInput');
        const sendBtn = document.getElementById('sendBtn');
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
                    temperature: 0.3,
                    max_tokens: 2048,
                    top_p: 0.9
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(\`خطای API: \${response.status}\`);
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;

            conversationHistory.push({ role: 'assistant', content: aiResponse });

            hideTyping();
            addMessage(aiResponse, 'ai');

        } catch (error) {
            hideTyping();
            addMessage(\`⚠️ خطا در اتصال به سرور: \${error.message}\\n\\nلطفاً دوباره تلاش کنید.\`, 'ai');
        } finally {
            isTyping = false;
            sendBtn.disabled = false;
            input.focus();
        }
    }

    createParticles();
<\/script>



`,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:s,search:i}=new URL(a);return`${t}${s}${i}`},T=l.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),z=({data:a})=>{const{system:t,resources:s,url:i,pageMeta:n}=a,c=P(i),p=l.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:s,breakpoints:f,onError:console.error}),[s]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(u.Provider,{value:i,children:e.jsx(T,{pageKey:c,system:t})}),e.jsx(m,{url:i,pageMeta:n,siteName:d,imageLoader:o,assetBaseUrl:r}),e.jsx(x,{children:n.title})]})},M=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),S=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-51/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-51/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{j as configValuesSerialized};
