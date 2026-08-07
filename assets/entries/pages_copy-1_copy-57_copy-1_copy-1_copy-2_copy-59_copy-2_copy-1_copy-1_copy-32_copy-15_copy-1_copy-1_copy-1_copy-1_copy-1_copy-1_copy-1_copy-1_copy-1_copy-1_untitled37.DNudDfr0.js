import{j as e,r as d,a as o,i as s,R as m,b,P as u,c as x,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as l}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsxs("body",{className:"w-element",children:[e.jsx(l,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی تخصصی اندیشه اسلامی</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0f0a 0%, #1a2410 50%, #0f1a0a 100%);
            min-height: 100vh;
            color: #e8e0d0;
            direction: rtl;
        }

        /* Geometric Islamic Pattern Background */
        body::before {
            content: '';
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-image:
                repeating-linear-gradient(45deg, rgba(212,175,55,0.03) 0px, rgba(212,175,55,0.03) 1px, transparent 1px, transparent 40px),
                repeating-linear-gradient(-45deg, rgba(212,175,55,0.03) 0px, rgba(212,175,55,0.03) 1px, transparent 1px, transparent 40px);
            pointer-events: none;
            z-index: 0;
        }

        .stars {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .star {
            position: absolute;
            background: rgba(212, 175, 55, 0.6);
            border-radius: 50%;
            animation: twinkle 3s infinite alternate;
        }

        @keyframes twinkle {
            0% { opacity: 0.2; transform: scale(1); }
            100% { opacity: 0.8; transform: scale(1.3); }
        }

        /* Header */
        .header {
            position: relative;
            z-index: 10;
            background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(20,40,10,0.9));
            border-bottom: 2px solid rgba(212,175,55,0.4);
            padding: 25px 20px;
            text-align: center;
            backdrop-filter: blur(15px);
        }

        .header-top {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin-bottom: 12px;
        }

        .mosque-icon {
            font-size: 55px;
            filter: drop-shadow(0 0 15px rgba(212,175,55,0.6));
            animation: glow 3s infinite alternate;
        }

        @keyframes glow {
            0% { filter: drop-shadow(0 0 10px rgba(212,175,55,0.4)); }
            100% { filter: drop-shadow(0 0 25px rgba(212,175,55,0.8)); }
        }

        .header-title {
            text-align: right;
        }

        .bismillah {
            font-size: 1.4em;
            color: #d4af37;
            font-weight: bold;
            letter-spacing: 2px;
            margin-bottom: 5px;
            text-shadow: 0 0 20px rgba(212,175,55,0.5);
        }

        .header h1 {
            font-size: 1.9em;
            background: linear-gradient(90deg, #d4af37, #f5d76e, #d4af37);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: bold;
        }

        .header p {
            color: rgba(212,175,55,0.6);
            font-size: 0.88em;
            margin-top: 6px;
        }

        .badge-row {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 10px;
            flex-wrap: wrap;
        }

        .badge {
            display: inline-block;
            background: linear-gradient(90deg, rgba(212,175,55,0.2), rgba(212,175,55,0.1));
            border: 1px solid rgba(212,175,55,0.4);
            color: #d4af37;
            padding: 4px 14px;
            border-radius: 20px;
            font-size: 0.78em;
        }

        /* Ornament divider */
        .ornament {
            text-align: center;
            color: rgba(212,175,55,0.5);
            font-size: 1.2em;
            letter-spacing: 8px;
            margin: 5px 0;
        }

        /* Main */
        .main-container {
            position: relative;
            z-index: 10;
            max-width: 950px;
            margin: 0 auto;
            padding: 18px;
            display: flex;
            flex-direction: column;
            height: calc(100vh - 175px);
        }

        /* Topics Bar */
        .topics-bar {
            display: flex;
            gap: 7px;
            flex-wrap: wrap;
            margin-bottom: 12px;
            justify-content: center;
        }

        .topic-btn {
            background: rgba(212,175,55,0.08);
            border: 1px solid rgba(212,175,55,0.25);
            color: #d4af37;
            padding: 6px 13px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.8em;
            transition: all 0.3s;
            font-family: inherit;
            direction: rtl;
        }

        .topic-btn:hover {
            background: rgba(212,175,55,0.2);
            border-color: #d4af37;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(212,175,55,0.2);
        }

        /* Chat Container */
        .chat-container {
            flex: 1;
            background: rgba(0,0,0,0.55);
            border: 1px solid rgba(212,175,55,0.2);
            border-radius: 20px;
            overflow-y: auto;
            padding: 20px;
            margin-bottom: 14px;
            backdrop-filter: blur(10px);
            box-shadow: inset 0 0 30px rgba(0,0,0,0.3), 0 0 40px rgba(212,175,55,0.05);
        }

        .chat-container::-webkit-scrollbar { width: 5px; }
        .chat-container::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); border-radius: 3px; }
        .chat-container::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.3); border-radius: 3px; }

        /* Welcome */
        .welcome-message {
            text-align: center;
            padding: 30px 15px;
        }

        .welcome-icon-row {
            font-size: 70px;
            margin-bottom: 15px;
            animation: float-icon 4s ease-in-out infinite;
        }

        @keyframes float-icon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .welcome-message h2 {
            color: #d4af37;
            font-size: 1.5em;
            margin-bottom: 8px;
        }

        .welcome-message .sub {
            color: rgba(212,175,55,0.6);
            font-size: 0.88em;
            margin-bottom: 5px;
        }

        .welcome-message p {
            color: rgba(255,255,255,0.55);
            line-height: 1.9;
            margin-bottom: 18px;
            font-size: 0.92em;
        }

        .sample-questions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 15px;
        }

        .sample-q {
            background: rgba(212,175,55,0.06);
            border: 1px solid rgba(212,175,55,0.2);
            border-radius: 12px;
            padding: 12px 14px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 0.83em;
            color: rgba(255,255,255,0.75);
            text-align: right;
            line-height: 1.5;
        }

        .sample-q:hover {
            background: rgba(212,175,55,0.15);
            border-color: rgba(212,175,55,0.5);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(212,175,55,0.1);
        }

        .sample-q .q-icon {
            color: #d4af37;
            margin-left: 5px;
        }

        /* Messages */
        .message {
            display: flex;
            margin-bottom: 22px;
            animation: fadeInUp 0.4s ease;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .message.user { justify-content: flex-start; }
        .message.assistant { justify-content: flex-end; }

        .message-avatar {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            flex-shrink: 0;
        }

        .message.user .message-avatar {
            background: linear-gradient(135deg, #4a4a2a, #6a6a3a);
            border: 2px solid rgba(212,175,55,0.3);
            order: -1;
            margin-right: 12px;
        }

        .message.assistant .message-avatar {
            background: linear-gradient(135deg, #2a4a2a, #3a6a3a);
            border: 2px solid rgba(212,175,55,0.5);
            order: 1;
            margin-left: 12px;
        }

        .message-content { max-width: 78%; }

        .message-bubble {
            padding: 15px 18px;
            border-radius: 18px;
            line-height: 1.85;
            font-size: 0.92em;
            word-wrap: break-word;
        }

        .message.user .message-bubble {
            background: linear-gradient(135deg, rgba(74,74,42,0.5), rgba(60,60,30,0.5));
            border: 1px solid rgba(212,175,55,0.25);
            border-top-right-radius: 4px;
            color: #e8e0c8;
        }

        .message.assistant .message-bubble {
            background: linear-gradient(135deg, rgba(20,50,20,0.7), rgba(15,40,15,0.7));
            border: 1px solid rgba(212,175,55,0.3);
            border-top-left-radius: 4px;
            color: #e8f0e0;
        }

        .message-bubble h3 {
            color: #d4af37;
            font-size: 1.02em;
            margin: 14px 0 6px;
            padding-bottom: 4px;
            border-bottom: 1px solid rgba(212,175,55,0.2);
        }

        .message-bubble strong { color: #f0c040; }

        .message-bubble ul, .message-bubble ol {
            padding-right: 22px;
            margin: 8px 0;
        }

        .message-bubble li { margin: 5px 0; line-height: 1.7; }

        .message-bubble .highlight {
            background: rgba(212,175,55,0.1);
            border-right: 3px solid #d4af37;
            padding: 8px 12px;
            margin: 10px 0;
            border-radius: 0 8px 8px 0;
            font-style: italic;
        }

        .message-bubble .ayah {
            background: rgba(212,175,55,0.08);
            border: 1px solid rgba(212,175,55,0.25);
            border-radius: 10px;
            padding: 10px 14px;
            margin: 10px 0;
            text-align: center;
            color: #d4af37;
            font-size: 1em;
        }

        .message-bubble code {
            background: rgba(212,175,55,0.1);
            border: 1px solid rgba(212,175,55,0.2);
            border-radius: 4px;
            padding: 2px 6px;
            color: #d4af37;
        }

        .message-time {
            font-size: 0.72em;
            color: rgba(212,175,55,0.3);
            margin-top: 5px;
            padding: 0 5px;
        }

        .message.user .message-time { text-align: right; }
        .message.assistant .message-time { text-align: left; }

        /* Typing */
        .typing-indicator {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
        }

        .typing-bubble {
            background: rgba(20,50,20,0.6);
            border: 1px solid rgba(212,175,55,0.3);
            border-radius: 18px;
            padding: 14px 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .typing-text {
            color: rgba(212,175,55,0.7);
            font-size: 0.85em;
        }

        .typing-dots { display: flex; gap: 4px; }

        .typing-dots span {
            width: 7px;
            height: 7px;
            background: #d4af37;
            border-radius: 50%;
            animation: typing-anim 1.2s infinite;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing-anim {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-7px); opacity: 1; }
        }

        /* Input Area */
        .input-area {
            background: rgba(0,0,0,0.6);
            border: 1px solid rgba(212,175,55,0.3);
            border-radius: 16px;
            padding: 12px 15px;
            display: flex;
            gap: 10px;
            align-items: flex-end;
            backdrop-filter: blur(10px);
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        .input-area:focus-within {
            border-color: rgba(212,175,55,0.6);
            box-shadow: 0 0 25px rgba(212,175,55,0.1);
        }

        .input-area textarea {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: #e8e0c8;
            font-size: 0.95em;
            resize: none;
            font-family: inherit;
            direction: rtl;
            max-height: 150px;
            min-height: 26px;
            line-height: 1.7;
        }

        .input-area textarea::placeholder {
            color: rgba(212,175,55,0.35);
        }

        .send-btn {
            background: linear-gradient(135deg, #d4af37, #b8942a);
            border: none;
            border-radius: 10px;
            width: 46px;
            height: 46px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            flex-shrink: 0;
            font-size: 20px;
            color: #0a0f0a;
        }

        .send-btn:hover {
            transform: scale(1.06);
            box-shadow: 0 0 20px rgba(212,175,55,0.5);
        }

        .send-btn:active { transform: scale(0.95); }

        .send-btn:disabled {
            opacity: 0.45;
            cursor: not-allowed;
            transform: none;
        }

        .input-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 6px;
            padding: 0 5px;
        }

        .char-count {
            font-size: 0.72em;
            color: rgba(212,175,55,0.35);
        }

        .footer-info {
            font-size: 0.72em;
            color: rgba(212,175,55,0.3);
        }

        /* Clear btn */
        .clear-btn {
            background: transparent;
            border: 1px solid rgba(212,175,55,0.2);
            color: rgba(212,175,55,0.5);
            padding: 5px 12px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 0.78em;
            transition: all 0.3s;
            font-family: inherit;
        }

        .clear-btn:hover {
            border-color: rgba(212,175,55,0.5);
            color: #d4af37;
            background: rgba(212,175,55,0.08);
        }

        @media (max-width: 600px) {
            .header h1 { font-size: 1.3em; }
            .bismillah { font-size: 1.1em; }
            .sample-questions { grid-template-columns: 1fr; }
            .message-content { max-width: 88%; }
            .topics-bar { display: none; }
            .header-top { flex-direction: column; gap: 10px; }
        }
    </style>



    <div class="stars" id="stars"></div>

    <!-- Header -->
    <div class="header">
        <div class="header-top">
            <span class="mosque-icon">🕌</span>
            <div class="header-title">
                <div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
                <h1>هوش مصنوعی تخصصی اندیشه اسلامی</h1>
                <p>مرجع علمی در کلام، فلسفه، فقه، اخلاق و معارف اسلامی</p>
            </div>
        </div>
        <div class="ornament">✦ ✧ ✦ ✧ ✦</div>
        <div class="badge-row">
            <span class="badge">📖 قرآن و تفسیر</span>
            <span class="badge">🕌 کلام اسلامی</span>
            <span class="badge">⚖️ فقه و اصول</span>
            <span class="badge">🌿 اخلاق اسلامی</span>
            <span class="badge">🔭 فلسفه اسلامی</span>
            <span class="badge">📜 تاریخ اسلام</span>
        </div>
    </div>

    <!-- Main -->
    <div class="main-container">

        <!-- Topics -->
        <div class="topics-bar">
            <button class="topic-btn" onclick="askTopic('توحید در اندیشه اسلامی')">☝️ توحید</button>
            <button class="topic-btn" onclick="askTopic('نبوت و امامت در اسلام')">🌙 نبوت و امامت</button>
            <button class="topic-btn" onclick="askTopic('معاد در قرآن و روایات')">⭐ معاد</button>
            <button class="topic-btn" onclick="askTopic('علم کلام اسلامی')">📚 کلام اسلامی</button>
            <button class="topic-btn" onclick="askTopic('فلسفه اسلامی و فلاسفه مسلمان')">🔭 فلسفه اسلامی</button>
            <button class="topic-btn" onclick="askTopic('اخلاق اسلامی و فضایل اخلاقی')">🌿 اخلاق اسلامی</button>
            <button class="topic-btn" onclick="askTopic('فقه و احکام شرعی')">⚖️ فقه و احکام</button>
            <button class="topic-btn" onclick="askTopic('تاریخ صدر اسلام')">📜 تاریخ اسلام</button>
            <button class="topic-btn" onclick="askTopic('معاد اسلامی و تصوف')">✨ معاد اسلامی</button>
        </div>

        <!-- Chat -->
        <div class="chat-container" id="chatContainer">
            <div class="welcome-message">
                <div class="welcome-icon-row">🕌</div>
                <h2>السلام علیکم و رحمة الله</h2>
                <div class="sub">✦ به مرکز تخصصی اندیشه اسلامی خوش آمدید ✦</div>
                <p>
                    این سامانه هوشمند با تخصص در معارف اسلامی، آماده پاسخگویی به سوالات شما<br>
                    <strong>منحصراً</strong> در حوزه‌های قرآن، کلام، فلسفه، فقه، اخلاق و تاریخ اسلام می‌باشد.
                </p>
                <div class="sample-questions">
                    <div class="sample-q" onclick="askSample('مفهوم توحید در قرآن کریم و دیدگاه متکلمان اسلامی را توضیح بده')">
                        <span class="q-icon">☝️</span> مفهوم توحید در قرآن و کلام اسلامی
                    </div>
                    <div class="sample-q" onclick="askSample('دلایل عقلی و نقلی اثبات وجود خداوند در فلسفه اسلامی چیست؟')">
                        <span class="q-icon">🔭</span> دلایل اثبات وجود خدا
                    </div>
                    <div class="sample-q" onclick="askSample('مقایسه دیدگاه اشاعره و معتزله در مسئله صفات الهی')">
                        <span class="q-icon">📚</span> اشاعره و معتزله در صفات الهی
                    </div>
                    <div class="sample-q" onclick="askSample('نظریه امامت از دیدگاه شیعه امامیه و ادله آن')">
                        <span class="q-icon">🌙</span> نظریه امامت در شیعه امامیه
                    </div>
                    <div class="sample-q" onclick="askSample('مبانی فلسفه ابن سینا در الهیات بالمعنی الاخص')">
                        <span class="q-icon">🔬</span> الهیات ابن سینا
                    </div>
                    <div class="sample-q" onclick="askSample('مفهوم عدل الهی و مسئله شر در کلام اسلامی')">
                        <span class="q-icon">⚖️</span> عدل الهی و مسئله شر
                    </div>
                    <div class="sample-q" onclick="askSample('اصول و مبانی معاد اسلامی از دیدگاه ابن عربی')">
                        <span class="q-icon">✨</span> معاد اسلامی ابن عربی
                    </div>
                    <div class="sample-q" onclick="askSample('معاد جسمانی و روحانی در قرآن و فلسفه اسلامی')">
                        <span class="q-icon">⭐</span> معاد جسمانی و روحانی
                    </div>
                </div>
            </div>
        </div>

        <!-- Input -->
        <div>
            <div class="input-area">
                <textarea id="userInput" placeholder="سوال خود را در حوزه اندیشه اسلامی بنویسید..." rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this); updateCharCount()"></textarea>
                <button class="send-btn" id="sendBtn" onclick="sendMessage()" title="ارسال">
                    ➤
                </button>
            </div>
            <div class="input-footer">
                <span class="char-count" id="charCount">0 کاراکتر</span>
                <button class="clear-btn" onclick="clearChat()">🗑️ پاک کردن مکالمه</button>
                <span class="footer-info">🕌 سیستم ایزوله تخصصی اندیشه اسلامی</span>
            </div>
        </div>

    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        // بهینه‌سازی پرامپت با تکنیک گاردریل (Guardrails) برای جلوگیری از پاسخ به موضوعات متفرقه
        const SYSTEM_PROMPT = \`شما یک استاد برجسته، عالم و متخصص منحصراً در زمینه "اندیشه و معارف اسلامی" هستید. 

⛔ **قوانین محدودکننده (GUARDRAILS) - فوق العاده مهم:**
شما فقط و فقط مجاز به پاسخگویی در حیطه علوم اسلامی (کلام، فلسفه اسلامی، فقه، اخلاق، تاریخ اسلام، تفسیر قرآن و روایات) هستید. 
اگر کاربر سوالی خارج از این حوزه‌ها پرسید، باید قاطعانه پاسخ دادن را رد کنید.
❌ حوزه‌های ممنوعه شامل (اما نه محدود به): برنامه‌نویسی، پزشکی، ریاضیات، فیزیک، شیمی، سیاست روز، اقتصاد عمومی، آشپزی، ورزش، تکنولوژی، هنر غیرمرتبط، احوال‌پرسی‌های طولانی، و هرگونه چت عمومی یا روزمره.
📝 **نحوه رد کردن سوالات ممنوعه:**
اگر سوال کاربر کمترین ارتباطی به اندیشه اسلامی نداشت، دقیقاً و فقط همین متن را ارسال کنید:
"⛔ من دستیار تخصصی **اندیشه و معارف اسلامی** هستم. متأسفانه مجاز به پاسخگویی به سوالات خارج از حوزه‌های کلام، فلسفه، فقه، اخلاق و تاریخ اسلام (مانند برنامه‌نویسی، پزشکی، سیاست، مسائل عمومی و غیره) نیستم. لطفاً سوال خود را در حوزه معارف اسلامی مطرح بفرمایید."

✅ **حوزه‌های تخصصی شما (مجاز):**
۱. علم کلام اسلامی (مکاتب کلامی، توحید، صفات الهی، عدل، نبوت، امامت، معاد)
۲. فلسفه اسلامی (مشاء، اشراق، حکمت متعالیه، برهان‌های اثبات خدا)
۳. قرآن و علوم قرآنی (تفسیر، اسباب نزول، محکم و متشابه)
۴. فقه و اصول فقه (ادله اربعه، عبادات، معاملات)
۵. اخلاق اسلامی (فضایل و رذایل، مکاتب اخلاقی)
۶. تاریخ اسلام و اندیشه اسلامی (صدر اسلام، تمدن اسلامی، سیره پیامبر و ائمه)

📌 **قوانین پاسخگویی علمی:**
- پاسخ‌ها باید کاملاً علمی، دقیق و مستند به منابع معتبر اسلامی (قرآن، احادیث معتبر، کتب فلاسفه و متکلمان) باشند.
- در صورت ذکر آیه، نام سوره و شماره آیه ذکر شود.
- در اختلافات کلامی و فقهی (مثلا شیعه و سنی یا اشاعره و معتزله)، بی‌طرفانه و آکادمیک نظرات را بیان کنید.
- پاسخ‌ها ساختارمند، پاراگراف‌بندی شده و دارای لیست باشند.
- زبان شما باید مؤدبانه، فاخر و با لحن یک استاد دانشگاه باشد.
- تمام متون راست‌چین (RTL) و به زبان فارسی باشند.\`;

        let conversationHistory = [];

        // Create stars
        function createStars() {
            const container = document.getElementById('stars');
            for (let i = 0; i < 60; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                const size = Math.random() * 3 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDuration = (2 + Math.random() * 4) + 's';
                star.style.animationDelay = Math.random() * 4 + 's';
                container.appendChild(star);
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
            // Bold
            text = text.replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>');
            // Italic
            text = text.replace(/\\*(.+?)\\*/g, '<em>$1</em>');
            // Headings
            text = text.replace(/^### (.+)$/gm, '<h3>$1</h3>');
            text = text.replace(/^## (.+)$/gm, '<h3>$1</h3>');
            text = text.replace(/^# (.+)$/gm, '<h3>$1</h3>');
            // Code
            text = text.replace(/\`(.+?)\`/g, '<code>$1</code>');
            // Blockquote (for Quranic verses)
            text = text.replace(/^> (.+)$/gm, '<div class="ayah">$1</div>');
            // Highlight
            text = text.replace(/\\|\\|(.+?)\\|\\|/g, '<div class="highlight">$1</div>');
            // Lists handling (basic)
            text = text.replace(/^- (.+)$/gm, '<li>$1</li>');
            // Newlines
            text = text.replace(/\\n/g, '<br>');
            return text;
        }

        function addMessage(content, role) {
            const container = document.getElementById('chatContainer');
            const welcome = container.querySelector('.welcome-message');
            if (welcome) welcome.remove();

            const div = document.createElement('div');
            div.classList.add('message', role);

            const avatar = document.createElement('div');
            avatar.classList.add('message-avatar');
            avatar.textContent = role === 'user' ? '🙋' : '🕌';

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
            div.appendChild(avatar);
            div.appendChild(contentDiv);
            container.appendChild(div);
            container.scrollTop = container.scrollHeight;
        }

        function showTyping() {
            const container = document.getElementById('chatContainer');
            const typing = document.createElement('div');
            typing.classList.add('typing-indicator');
            typing.id = 'typingIndicator';
            typing.innerHTML = \`
                <div style="display:flex;align-items:center;gap:12px;">
                    <span style="font-size:22px;">🕌</span>
                    <div class="typing-bubble">
                        <span class="typing-text">در حال تحلیل و پاسخگویی...</span>
                        <div class="typing-dots">
                            <span></span><span></span><span></span>
                        </div>
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

        function clearChat() {
            if (!confirm('آیا مطمئن هستید؟ تمام مکالمه پاک می‌شود.')) return;
            conversationHistory = [];
            const container = document.getElementById('chatContainer');
            container.innerHTML = \`
                <div class="welcome-message">
                    <div class="welcome-icon-row">🕌</div>
                    <h2>السلام علیکم و رحمة الله</h2>
                    <div class="sub">✦ مکالمه جدید ✦</div>
                    <p>سوال جدید خود را بنویسید.</p>
                </div>
            \`;
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

                if (!response.ok) throw new Error(\`HTTP \${response.status}\`);

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
                let msg = '⚠️ خطا در ارتباط با سرور.\\n\\n';
                if (error.message.includes('401')) {
                    msg += 'کلید API معتبر نیست.';
                } else if (error.message.includes('429')) {
                    msg += 'تعداد درخواست‌ها از حد مجاز گذشته. کمی صبر کنید.';
                } else {
                    msg += 'اتصال اینترنت را بررسی کنید.';
                }
                addMessage(msg, 'assistant');
            }

            sendBtn.disabled = false;
            input.focus();
        }

        function askSample(q) {
            document.getElementById('userInput').value = q;
            updateCharCount();
            sendMessage();
        }

        function askTopic(topic) {
            const q = \`\${topic} را به صورت کامل، علمی و دانشگاهی توضیح بده\`;
            document.getElementById('userInput').value = q;
            updateCharCount();
            sendMessage();
        }

        // Init
        createStars();
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


`,className:"w-html-embed"})]}),z=a=>{const{origin:t,pathname:i,search:n}=new URL(a);return`${t}${i}${n}`},T=d.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:i,url:n,pageMeta:r}=a,p=z(n),g=d.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:i,breakpoints:f,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:g,children:[e.jsx(b.Provider,{value:n,children:e.jsx(T,{pageKey:p,system:t})}),e.jsx(u,{url:n,pageMeta:r,siteName:c,imageLoader:s,assetBaseUrl:o}),e.jsx(x,{children:r.title})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),I=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:I},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-57/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-57/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{M as configValuesSerialized};
