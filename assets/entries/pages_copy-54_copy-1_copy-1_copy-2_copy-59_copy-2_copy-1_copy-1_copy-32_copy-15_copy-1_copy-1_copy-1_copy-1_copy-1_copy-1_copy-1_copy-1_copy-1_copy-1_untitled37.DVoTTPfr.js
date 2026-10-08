import{j as e,r as l,a as r,i as o,R as g,b,P as m,c as u,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],C=a=>e.jsx("body",{className:"w-element",children:e.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی تخصصی آسیب‌شناسی</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 40%, #0a0f1a 80%, #0f0a1a 100%);
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

        .particle:nth-child(odd)  { background: #ff6b6b; }
        .particle:nth-child(even) { background: #ff9f43; }
        .particle:nth-child(3n)   { background: #ffeaa7; width: 2px; height: 2px; }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1);       opacity: 0.3; }
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
            animation: cell-pulse 2.5s ease-in-out infinite;
            filter: drop-shadow(0 0 20px rgba(255,107,107,0.6));
        }

        @keyframes cell-pulse {
            0%, 100% { transform: scale(1) rotate(-3deg);   filter: drop-shadow(0 0 15px rgba(255,107,107,0.5)); }
            50%       { transform: scale(1.12) rotate(3deg); filter: drop-shadow(0 0 30px rgba(255,107,107,0.9)); }
        }

        .header h1 {
            font-size: 2.1rem;
            background: linear-gradient(90deg, #ff6b6b, #ff9f43, #ffeaa7, #fd79a8, #ff6b6b);
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

        .badge-red    { background: linear-gradient(135deg, #ff6b6b, #cc2200); color: #fff; }
        .badge-orange { background: linear-gradient(135deg, #ff9f43, #e55a00); color: #fff; }
        .badge-yellow { background: linear-gradient(135deg, #ffeaa7, #f9ca24); color: #000; }

        /* ===== TOPICS BAR ===== */
        .topics-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 15px;
            background: rgba(255,107,107,0.04);
            border: 1px solid rgba(255,107,107,0.12);
            border-radius: 15px;
            margin-bottom: 20px;
            direction: rtl;
        }

        .topic-chip {
            background: rgba(255,107,107,0.1);
            border: 1px solid rgba(255,107,107,0.25);
            color: #ff6b6b;
            padding: 5px 13px;
            border-radius: 20px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.3s;
            direction: rtl;
        }

        .topic-chip:hover {
            background: rgba(255,107,107,0.22);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255,107,107,0.25);
        }

        /* ===== CHAT ===== */
        .chat-container {
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,107,107,0.15);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255,107,107,0.05);
        }

        .chat-header {
            background: linear-gradient(135deg, rgba(255,107,107,0.12), rgba(255,159,67,0.08), rgba(255,234,167,0.08));
            padding: 16px 20px;
            border-bottom: 1px solid rgba(255,107,107,0.12);
            display: flex;
            align-items: center;
            gap: 10px;
            direction: rtl;
        }

        .status-dot {
            width: 10px;
            height: 10px;
            background: #ff6b6b;
            border-radius: 50%;
            animation: blink 1.5s infinite;
            flex-shrink: 0;
            box-shadow: 0 0 8px rgba(255,107,107,0.8);
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.2; }
        }

        .chat-title {
            font-size: 0.9rem;
            color: #ff6b6b;
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
        #chatMessages::-webkit-scrollbar-thumb { background: rgba(255,107,107,0.35); border-radius: 2px; }

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

        .avatar.ai {
            background: linear-gradient(135deg, #ff6b6b, #cc2200);
            box-shadow: 0 0 15px rgba(255,107,107,0.5);
        }

        .avatar.user {
            background: linear-gradient(135deg, #ff9f43, #e55a00);
            box-shadow: 0 0 10px rgba(255,159,67,0.4);
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
            background: rgba(255,107,107,0.07);
            border: 1px solid rgba(255,107,107,0.2);
            color: #e8e8e8;
            border-radius: 4px 18px 18px 18px;
        }

        .message.user .message-bubble {
            background: rgba(255,159,67,0.1);
            border: 1px solid rgba(255,159,67,0.25);
            color: #e8e8e8;
            border-radius: 18px 4px 18px 18px;
        }

        .message-bubble strong { color: #ff6b6b; }
        .message-bubble em     { color: #ffeaa7; font-style: italic; }

        .message-bubble ul,
        .message-bubble ol {
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

        .message-bubble .lat-term {
            color: #ff9f43;
            font-style: italic;
        }

        /* ===== INPUT ===== */
        .input-area {
            padding: 20px;
            border-top: 1px solid rgba(255,107,107,0.1);
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
            border: 1px solid rgba(255,107,107,0.22);
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
            border-color: rgba(255,107,107,0.55);
            background: rgba(255,255,255,0.08);
        }

        #userInput::placeholder { color: #555; }

        #sendBtn {
            background: linear-gradient(135deg, #ff6b6b, #cc2200);
            border: none;
            border-radius: 15px;
            padding: 12px 22px;
            color: #fff;
            font-size: 1.3rem;
            cursor: pointer;
            transition: all 0.3s;
            flex-shrink: 0;
            box-shadow: 0 4px 15px rgba(255,107,107,0.35);
        }

        #sendBtn:hover {
            transform: scale(1.07);
            box-shadow: 0 6px 25px rgba(255,107,107,0.6);
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
            background: rgba(255,107,107,0.07);
            border: 1px solid rgba(255,107,107,0.2);
            padding: 13px 18px;
            border-radius: 4px 18px 18px 18px;
        }

        .typing-dots span {
            width: 8px;
            height: 8px;
            background: #ff6b6b;
            border-radius: 50%;
            animation: typingAnim 1.2s infinite;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingAnim {
            0%, 100% { transform: translateY(0);    opacity: 0.4; }
            50%       { transform: translateY(-6px); opacity: 1; }
        }

        /* ===== QUICK QUESTIONS ===== */
        .quick-questions {
            padding: 15px 20px;
            border-top: 1px solid rgba(255,107,107,0.1);
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
            background: rgba(255,159,67,0.07);
            border: 1px solid rgba(255,159,67,0.22);
            color: #ff9f43;
            padding: 6px 13px;
            border-radius: 10px;
            font-size: 0.78rem;
            cursor: pointer;
            transition: all 0.3s;
            font-family: inherit;
            direction: rtl;
        }

        .quick-btn:hover {
            background: rgba(255,159,67,0.15);
            transform: translateY(-2px);
            box-shadow: 0 3px 10px rgba(255,159,67,0.25);
        }

        /* ===== WELCOME CARD ===== */
        .welcome-card {
            background: linear-gradient(135deg, rgba(255,107,107,0.06), rgba(255,159,67,0.04), rgba(255,234,167,0.04));
            border: 1px solid rgba(255,107,107,0.18);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 18px;
            direction: rtl;
        }

        .welcome-card h3 {
            color: #ff6b6b;
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
            border: 1px solid rgba(255,107,107,0.1);
            border-radius: 10px;
            padding: 8px 12px;
            font-size: 0.8rem;
            color: #aaa;
            text-align: right;
            direction: rtl;
        }

        .welcome-item span { color: #ff6b6b; }

        /* ===== FOOTER ===== */
        .footer {
            text-align: center;
            padding: 20px;
            color: #333;
            font-size: 0.75rem;
            direction: rtl;
        }

        @media (max-width: 600px) {
            .header h1       { font-size: 1.4rem; }
            #chatMessages    { height: 400px; }
            .message-bubble  { max-width: 88%; }
            .welcome-grid    { grid-template-columns: 1fr; }
        }
    </style>



<div class="particles" id="particles"></div>

<div class="container">

    <!-- ===== HEADER ===== -->
    <div class="header">
        <span class="header-icon">🔬</span>
        <h1>هوش مصنوعی تخصصی آسیب‌شناسی</h1>
        <p>سیستم هوشمند تخصصی در حوزه آسیب‌شناسی عمومی و اختصاصی (Pathology)</p>
        <div class="badges">
            <span class="badge badge-red">🔬 General Pathology AI</span>
            <span class="badge badge-orange">🧫 Histopathology</span>
            <span class="badge badge-yellow">🩺 Clinical Pathology</span>
        </div>
    </div>

    <!-- ===== TOPICS BAR ===== -->
    <div class="topics-bar">
        <span style="color:#555;font-size:0.8rem;align-self:center">موضوعات:</span>
        <div class="topic-chip">💥 آسیب سلولی</div>
        <div class="topic-chip">🔥 التهاب</div>
        <div class="topic-chip">🔄 ترمیم بافت</div>
        <div class="topic-chip">🧬 نئوپلازی</div>
        <div class="topic-chip">❤️ آسیب‌شناسی قلب</div>
        <div class="topic-chip">🫁 آسیب‌شناسی ریه</div>
        <div class="topic-chip">🩸 آسیب‌شناسی خون</div>
        <div class="topic-chip">🔬 هیستوپاتولوژی</div>
        <div class="topic-chip">⚡ نکروز و آپوپتوز</div>
        <div class="topic-chip">💧 اختلالات همودینامیک</div>
    </div>

    <!-- ===== CHAT CONTAINER ===== -->
    <div class="chat-container">

        <div class="chat-header">
            <div class="status-dot"></div>
            <span class="chat-title">🔬 دستیار تخصصی آسیب‌شناسی — آنلاین</span>
        </div>

        <div id="chatMessages">

            <div class="welcome-card">
                <h3>🔬 خوش آمدید به سیستم تخصصی آسیب‌شناسی</h3>
                <p>این سیستم با دانش عمیق علمی در تمام زمینه‌های آسیب‌شناسی عمومی، اختصاصی، هیستوپاتولوژی و پاتوفیزیولوژی آماده پاسخ‌گویی است.</p>
                <div class="welcome-grid">
                    <div class="welcome-item"><span>💥</span> آسیب و مرگ سلولی</div>
                    <div class="welcome-item"><span>🔥</span> التهاب حاد و مزمن</div>
                    <div class="welcome-item"><span>🔄</span> ترمیم و بازسازی</div>
                    <div class="welcome-item"><span>🧬</span> تومورها و نئوپلازی</div>
                    <div class="welcome-item"><span>💧</span> اختلالات همودینامیک</div>
                    <div class="welcome-item"><span>🔬</span> هیستوپاتولوژی اعضا</div>
                </div>
            </div>

            <div class="message ai">
                <div class="avatar ai">🔬</div>
                <div class="message-bubble">
                    سلام! من دستیار تخصصی <strong>آسیب‌شناسی پزشکی (Pathology)</strong> هستم. 🎓<br><br>
                    در تمام این حوزه‌ها می‌توانم کمک کنم:<br><br>
                    💥 <strong>آسیب سلولی:</strong> نکروز، آپوپتوز، انواع دژنراسیون<br>
                    🔥 <strong>التهاب:</strong> حاد، مزمن، گرانولوماتوز، میانجی‌های التهابی<br>
                    🔄 <strong>ترمیم:</strong> تجدید سلولی، فیبروز، تشکیل اسکار<br>
                    🧬 <strong>نئوپلازی:</strong> خوش‌خیم، بدخیم، مارکرها، متاستاز<br>
                    💧 <strong>همودینامیک:</strong> ادم، ترومبوز، آمبولی، انفارکتوس<br>
                    ❤️ <strong>آسیب‌شناسی اعضا:</strong> قلب، ریه، کبد، کلیه، CNS<br>
                    🔬 <strong>هیستوپاتولوژی:</strong> رنگ‌آمیزی‌ها، یافته‌های میکروسکوپی<br><br>
                    سوال تخصصی خود را بپرسید! 🩺
                </div>
            </div>

        </div>

        <!-- ===== QUICK QUESTIONS ===== -->
        <div class="quick-questions">
            <div class="quick-title">⚡ سوالات سریع پیشنهادی:</div>
            <div class="quick-btns">
                <button class="quick-btn" onclick="askQuick('تفاوت نکروز و آپوپتوز را به صورت کامل و جدول‌وار توضیح دهید')">نکروز vs آپوپتوز</button>
                <button class="quick-btn" onclick="askQuick('انواع التهاب حاد و مزمن را با میانجی‌های آنها توضیح دهید')">التهاب حاد و مزمن</button>
                <button class="quick-btn" onclick="askQuick('مراحل کامل متاستاز تومور را توضیح دهید')">مراحل متاستاز</button>
                <button class="quick-btn" onclick="askQuick('انواع نکروز را با مثال‌های بالینی توضیح دهید')">انواع نکروز</button>
                <button class="quick-btn" onclick="askQuick('ترومبوز و آمبولی و عوارض آنها را توضیح دهید')">ترومبوز و آمبولی</button>
                <button class="quick-btn" onclick="askQuick('تفاوت تومور خوش‌خیم و بدخیم را کامل بیان کنید')">خوش‌خیم vs بدخیم</button>
                <button class="quick-btn" onclick="askQuick('ادم و انواع آن و مکانیسم‌های ایجاد را توضیح دهید')">ادم و انواع آن</button>
                <button class="quick-btn" onclick="askQuick('ترمیم زخم و مراحل آن را کامل توضیح دهید')">ترمیم زخم</button>
            </div>
        </div>

        <!-- ===== INPUT AREA ===== -->
        <div class="input-area">
            <div class="input-wrapper">
                <button id="sendBtn" onclick="sendMessage()">🔬</button>
                <textarea id="userInput" placeholder="سوال تخصصی خود را درباره آسیب‌شناسی بپرسید... (Enter برای ارسال)" rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this)"></textarea>
            </div>
        </div>

    </div>

    <div class="footer">
        🔬 سیستم تخصصی آسیب‌شناسی پزشکی | General &amp; Systemic Pathology Expert System
    </div>

</div>

<script>
    const API_KEY = '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';
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    const SYSTEM_PROMPT = \`شما یک استاد و متخصص برجسته در زمینه آسیب‌شناسی پزشکی (Medical Pathology) هستید.
شما دانش عمیق، دقیق و آکادمیک در تمام زیرشاخه‌های آسیب‌شناسی عمومی و اختصاصی دارید.
پاسخ‌های شما باید کامل، علمی، ساختارمند و مناسب برای دانشجویان پزشکی و دامپزشکی باشد.

════════════════════════════════════════
💥 آسیب سلولی (Cell Injury)
════════════════════════════════════════
- علل آسیب سلولی: هیپوکسی، عوامل فیزیکی، شیمیایی، عفونی، ایمونولوژیک، ژنتیک، سوء تغذیه
- مکانیسم‌های آسیب:
  • اختلال در تولید ATP (مسیر هوازی vs بی‌هوازی)
  • آسیب غشاء سلولی
  • رادیکال‌های آزاد اکسیژن (ROS): تولید، اثرات، سیستم‌های خنثی‌ساز
  • ورود کلسیم به داخل سلول
  • اختلال در نفوذپذیری غشاء میتوکندری
- آسیب برگشت‌پذیر vs غیرقابل برگشت: نقاط آستانه، نشانگرها

دژنراسیون‌ها (Degenerations):
  • تورم ابری (Cloudy Swelling / Hydropic degeneration)
  • دژنراسیون چربی (Fatty change / Steatosis): کبد چرب
  • دژنراسیون هیالین: درون‌سلولی vs برون‌سلولی
  • دژنراسیون موکوئیدی
  • دژنراسیون واکوئولر (Vacuolar degeneration)
  • آتروفی، هیپرتروفی، هیپرپلازی، متاپلازی، دیسپلازی

════════════════════════════════════════
⚡ نکروز و آپوپتوز
════════════════════════════════════════
انواع نکروز (Necrosis):
  • نکروز انعقادی (Coagulative): انفارکتوس قلب و کلیه - حفظ خطوط کلی سلول
  • نکروز مایع‌شونده (Liquefactive): انفارکتوس مغز، آبسه‌های چرکی
  • نکروز پنیری (Caseous): سل ریوی - ترکیب انعقادی و مایع‌شونده
  • نکروز چربی (Fat necrosis): پانکراتیت، تروما پستان - صابونی‌شدن (Saponification)
  • نکروز گانگرنی (Gangrenous): مرطوب، خشک، گازی
  • نکروز فیبرینوئید (Fibrinoid): واسکولیت، اتوایمیون
- نکروز ایسکمیک: مراحل (۶ ساعت، ۱۲-۲۴ ساعت، ۳-۷ روز)
- تغییرات هسته‌ای: پیکنوز، کاریورکسیس، کاریولیز

آپوپتوز (Apoptosis):
  • مسیر داخلی (Intrinsic): Bcl-2، Bax، میتوکندری، سیتوکروم C، کاسپاز-9
  • مسیر خارجی (Extrinsic): FasL/Fas، TNF، کاسپاز-8
  • مشخصات مورفولوژیک: چروکیدگی سلول، تراکم کروماتین، اجسام آپوپتوتیک
  • تفاوت‌های کامل آپوپتوز vs نکروز (واکنش التهابی، ATP، مکانیسم)
  • نقش آپوپتوز در فیزیولوژی و پاتولوژی (سرطان، بیماری‌های خودایمن)

════════════════════════════════════════
🔥 التهاب (Inflammation)
════════════════════════════════════════
التهاب حاد (Acute Inflammation):
  • تغییرات عروقی: واسودیلاتاسیون، افزایش نفوذپذیری، اگزودا
  • مارجیناسیون، رولینگ، چسبندگی، دیاپدز لکوسیت‌ها
  • مولکول‌های چسبندگی: سلکتین‌ها، اینتگرین‌ها، ICAM، VCAM
  • کموتاکسی: C5a، LTB4، IL-8، fMLP
  • فاگوسیتوز: اپسونیزاسیون (IgG، C3b)، لیزوزوم، burst تنفسی

میانجی‌های شیمیایی التهاب:
  • وازوآمین‌ها: هیستامین (ماست‌سل)، سروتونین (پلاکت)
  • پروتئازهای پلاسما: سیستم کمپلمان (C3a، C5a)، کینین‌ها (برادی‌کینین)، کلاژن
  • متابولیت‌های آراشیدونیک اسید:
    - مسیر COX: پروستاگلاندین‌ها (PGE2، PGI2)، ترومبوکسان
    - مسیر LOX: لکوترین‌ها (LTB4، LTC4، LTD4)
  • سیتوکین‌ها: TNF-α، IL-1β، IL-6، IL-12، IFN-γ
  • PAF، NO، رادیکال‌های اکسیژن
  • کموکین‌ها: IL-8 (CXCL8)

انواع اگزودا:
  • سروس، فیبرینی، چرکی (سلولار)، هموراژیک، کاتاری
  • ترانسودا vs اگزودا (جدول مقایسه‌ای)

التهاب مزمن (Chronic Inflammation):
  • ماکروفاژ: نقش محوری، اپیتلیوئید سل
  • لنفوسیت‌ها: Th1، Th2، Th17، سلول‌های B
  • پلاسماسل، ائوزینوفیل، ماست‌سل
  • سلول‌های غول‌آسا: Langhans vs Foreign body

التهاب گرانولوماتوز:
  • تعریف: تجمع ماکروفاژهای فعال‌شده (اپیتلیوئید)
  • علل: سل، سارکوئیدوز، کروه‌مرض، لیشمانیا، قارچ‌ها، جسم خارجی
  • گرانولوم کازئوز‌دار (سل) vs غیرکازئوز‌دار (سارکوئید)
  • اجسام آستروف-استلزهایم در سارکوئید

════════════════════════════════════════
🔄 ترمیم و بازسازی (Repair & Regeneration)
════════════════════════════════════════
- تکثیر سلولی و چرخه سلولی: G0، G1، S، G2، M
- سلول‌های لابل، ثابت، دائمی
- فاکتورهای رشد: EGF، FGF، PDGF، TGF-β، VEGF، HGF
- ترمیم زخم:
  • اول قصد (Primary intention): زخم تمیز، بخیه‌شده
  • دوم قصد (Secondary intention): زخم باز، ضایعه بزرگ‌تر
  • مراحل: انعقاد (۱-۳ روز)، التهاب (۲-۵ روز)، تکثیر (۷-۲۱ روز)، تجدید ساختار (ماه‌ها)
- بافت گرانولاسیون: فیبروبلاست، کلاژن، آنژیوژنز
- فیبروز و سیروز: TGF-β، فیبروبلاست‌های فعال‌شده (میوفیبروبلاست)
- عوامل اختلال در ترمیم: سوء تغذیه، دیابت، کورتیکوستروئید، عفونت، ایسکمی

════════════════════════════════════════
💧 اختلالات همودینامیک
════════════════════════════════════════
ادم (Edema):
  • مکانیسم‌ها: افزایش فشار هیدروستاتیک، کاهش فشار اانکوتیک، احتباس سدیم، لنفادم
  • ادم ریوی: کاردیوژنیک vs غیرکاردیوژنیک (ARDS)
  • آناسارکا، آسیت، هیدروتوراکس، هیدروپریکاردیوم

پرخونی و احتقان:
  • هیپرمی فعال (التهاب، ورزش) vs احتقان غیرفعال (نارسایی قلبی)
  • کبد جوز هندی (Nutmeg liver): نارسایی قلب راست
  • ریه بروئن ایندوراسیون (Brown induration): نارسایی قلب چپ، هموسیدرین

خونریزی:
  • هماتوم، پتشی، پورپورا، اکیموز، هموراژی
  • هموستاز: مراحل اولیه و ثانویه، کاسکاد انعقاد
  • DIC (Disseminated Intravascular Coagulation): علل، پاتوژنز

ترومبوز (Thrombosis):
  • سه‌گانه Virchow: آسیب اندوتلیال، استاز، هیپرکواگولابیلیتی
  • انواع ترومب: وریدی، شریانی، در قلب
  • تغییر ثانویه ترومب: تفیف، سازماندهی، کانالیزاسیون، آمبولی

آمبولی (Embolism):
  • آمبولی ریوی: تریاد (تنگی نفس، درد قفسه، هموپتیزی)
  • آمبولی سیستمیک، چربی، هوا، مایع آمنیوتیک، تومور

انفارکتوس (Infarction):
  • قرمز (هموراژیک) vs سفید (آنمیک)
  • انفارکتوس قلب، مغز، کلیه، طحال، روده

شوک (Shock):
  • هیپوولمیک، کاردیوژنیک، سپتیک، نوروژنیک، آنافیلاکتیک
  • مراحل شوک: جبرانی، پیشرونده، برگشت‌ناپذیر
  • MODS (Multiple Organ Dysfunction Syndrome)

════════════════════════════════════════
🧬 نئوپلازی (Neoplasia)
════════════════════════════════════════
تعریف و ویژگی‌ها:
  • اتونومی رشد، فقدان تمایز طبیعی، قدرت تهاجم و متاستاز
  • خوش‌خیم vs بدخیم: تمایز، میتوز، نکروز، تهاجم، کپسول، متاستاز

اصطلاح‌شناسی تومورها:
  • پیشوند بافت + oma (خوش‌خیم): آدنوم، لیپوم، لیومیوم، اوستئوم
  • بدخیم اپیتلیال: کارسینوم (آدنوکارسینوم، کارسینوم سلول سنگفرشی)
  • بدخیم مزانشیمال: سارکوم (لیومیوسارکوم، اوستئوسارکوم)
  • استثناها: ملانوم، مزوتلیوم، هپاتوم، هیپرنفروم

کارسینوژنز (Carcinogenesis):
  • مراحل: آغاز (Initiation)، ترویج (Promotion)، پیشرفت (Progression)
  • عوامل ژنتیک: موتاسیون، بی‌ثباتی ژنومی
  • پروتوانکوژن‌ها → انکوژن‌ها: Ras، Myc، HER2/neu، BCR-ABL
  • ژن‌های سرکوبگر تومور (TSG): p53، Rb، APC، BRCA1/2، VHL
  • ژن‌های ترمیم DNA
  • ژن‌های تنظیم آپوپتوز: Bcl-2، Survivin

متاستاز (Metastasis):
  • مراحل: جدایش سلول، تهاجم به ماتریکس خارج‌سلولی، ورود به عروق، بقا، خروج، کلونیزاسیون
  • مولکول‌های چسبندگی: E-کادهرین (کاهش)، ایمتگرین‌ها
  • انکوتروپیسم اندام: کارسینوم پروستات→استخوان، کولون→کبد، ریه→مغز

انکوژن‌های مهم:
  • HER2/neu: کارسینوم پستان
  • Ras: تقریباً ۳۰٪ تمام سرطان‌ها
  • Myc: لنفوم بورکیت، ریه
  • BCR-ABL: لوسمی میلوئید مزمن (CML)

مارکرهای تومور (Tumor Markers):
  • PSA: پروستات
  • CEA: کولون، پستان، ریه
  • AFP: کبد، تخمدان (توده زرده‌ای)
  • CA-125: تخمدان
  • CA 19-9: پانکراس
  • β-hCG: کوریوکارسینوم، بیضه
  • LDH: لنفوم، لوسمی
  • Calcitonin: کارسینوم مدولاری تیروئید

════════════════════════════════════════
❤️ آسیب‌شناسی قلب
════════════════════════════════════════
بیماری ایسکمیک قلب (IHD):
  • آتروسکلروز: تشکیل پلاک، هسته لیپیدی، کلاهک فیبری، ترقه
  • آنژین صدری: پایدار، ناپایدار، پرینزمتال
  • انفارکتوس میوکارد (MI): ترانس‌مورال vs ساب‌اندوکاردیال
  • تغییرات زمانی MI: ۶ ساعت (اول)، ۱-۳ روز، ۷-۱۰ روز، ۲-۸ هفته
  • آنزیم‌ها: CK-MB (۶-۱۲ ساعت)، تروپونین I/T (۳-۶ ساعت، تا ۱۰-۱۴ روز)
  • عوارض MI: آریتمی، شوک کاردیوژنیک، نارسایی قلبی، آنوریسم، پریکاردیت درسلر

نارسایی احتقانی قلب (CHF):
  • نارسایی چپ: ادم ریوی، هموسیدرین‌فاج (Heart failure cells)، Brown induration
  • نارسایی راست: احتقان سیستمیک، Nutmeg liver، آسیت

کاردیومیوپاتی‌ها:
  • دیلاتاسیون (DCM): اتیولوژی (ویروسی، الکل، ایدیوپاتیک)
  • هیپرتروفیک (HCM): موتاسیون β-میوزین، مرگ ناگهانی ورزشکاران
  • محدودکننده (RCM): آمیلوئیدوز، سارکوئیدوز

اندوکاردیت:
  • عفونی (Infective): استرپتوکوک ویریدانس (بیماری ریوماتیک)، استاف اورئوس (دریچه طبیعی)
  • غیرعفونی: ریوماتیک (Aschoff bodies)، ماراتیک (NBTE)، لوپوس (Libman-Sacks)
  • دریچه‌های درگیر: میترال > آئورت > تریکوسپید

════════════════════════════════════════
🫁 آسیب‌شناسی ریه
════════════════════════════════════════
پنومونی (Pneumonia):
  • لوبار: S. pneumoniae - مراحل ۴گانه (احتقان، هپاتیزاسیون قرمز، خاکستری، رزولوشن)
  • برونکوپنومونی: لکه‌ای، چندکانونی
  • آتیپیک: مایکوپلاسما، ویروس‌ها، لژیونلا

COPD:
  • برونشیت مزمن: تعریف بالینی (۳ ماه، ۲ سال متوالی)، هیپرپلازی غده موکوسی، Reid index > 0.5
  • آمفیزم: انواع (سنتری‌آسینار: سیگار - پانآسینار: α1-آنتی‌تریپسین)
  • آسم: برونکواسپاسم، اسپیرال کوشمن، کریستال شارکو-لیدن، ائوزینوفیل

تومورهای ریه:
  • کارسینوم سلول سنگفرشی: مرکزی، هیلار، PTHrP (هیپرکلسمی)
  • آدنوکارسینوم: محیطی، زیرتیپ برونکوآلوئولار
  • کارسینوم سلول کوچک (SCLC): مرکزی، ACTH/ADH (پارانئوپلاستیک)، Kulchitsky cells
  • کارسینوم سلول بزرگ
  • مزوتلیوم: آزبست

ARDS / DAD:
  • Diffuse Alveolar Damage: فاز اگزوداتیو (غشاهای هیالین)، فاز تکثیری، فاز فیبروتیک

════════════════════════════════════════
🩸 آسیب‌شناسی خون
════════════════════════════════════════
کم‌خونی (Anemia):
  • میکروسیتیک هیپوکروم: فقر آهن (فریتین↓، TIBC↑)، تالاسمی، آنمی سیدروبلاستیک
  • ماکروسیتیک: فقر B12 (مگالوبلاستیک، نوروپاتی)، فقر فولات
  • نورموسیتیک: بیماری مزمن (فریتین طبیعی/↑)، کم‌خونی آپلاستیک، همولیتیک

آنمی همولیتیک:
  • داخل جسمانی: اسفروسیتوز ارثی (آنکیرین)، G6PD، HbS (داسی)
  • خارج جسمانی: AIHA (Coombs مستقیم+)، مالاریا

لوسمی (Leukemia):
  • ALL: کودکان، TdT+، CALLA (CD10)+، t(12;21)، پیش‌آگهی خوب
  • CLL: سالمندان، CD5+CD19+، سمفر (Smudge cells)
  • AML: بالغین، اوئر راد (Auer rods)، M3 (APL): t(15;17)، ATRA
  • CML: BCR-ABL: t(9;22) Philadelphia chromosome، ایماتینیب

لنفوم (Lymphoma):
  • هوچکین: Reed-Sternberg cell (جغد چشم)، CD15+CD30+، EBV
     - انواع: لنفوسیت غالب، اسکلروز ندولار (شایع‌ترین)، سلولاریتی مختلط، لنفوسیت تهی
  • غیر هوچکین: متنوع، B یا T سل
     - بورکیت: t(8;14)، EBV، آفریقا، Starry sky pattern
     - فولیکولار: t(14;18)، BCL-2 بیان زیاد
     - DLBCL: شایع‌ترین NHL بالغین

════════════════════════════════════════
🧠 آسیب‌شناسی سیستم عصبی مرکزی
════════════════════════════════════════
- ادم مغزی: وازوژنیک (اختلال BBB)، سیتوتوکسیک (آسیب سلولی)، اینترستیشیال
- هرنیاسیون: ساب‌فالسین، ترانس‌تنتوریال (انکوس)، تونسیلار
- مننژیت: باکتریایی (نوتروفیل در CSF)، ویروسی (لنفوسیت)، سلی (لنفوسیت + گلوکز↓)
- تومورهای CNS:
  • گلیوبلاستوم مولتی‌فرم (GBM): شایع‌ترین در بالغین، GFAP+، نکروز با پالیسادینگ
  • مننژیوم: از آراکنوئید، S100+، پسام‌ومکور بادی، خوش‌خیم
  • مدولوبلاستوم: کودکان، مخچه، بدخیم، Homer-Wright rosettes

════════════════════════════════════════
🔬 هیستوپاتولوژی و رنگ‌آمیزی‌ها
════════════════════════════════════════
- H&E: هسته (آبی/بنفش)، سیتوپلاسم (صورتی) - رنگ‌آمیزی اصلی
- PAS: گلیکوژن، موسین، غشاء پایه، قارچ (صورتی‌مایل به قرمز)
- Masson's Trichrome: کلاژن آبی، عضله قرمز - فیبروز
- Reticulin: شبکه رتیکولین مشکی - سیروز، تومور
- Congo Red: آمیلوئید (قرمز) - ضوء دوگانگی (birefringence) سبز تحت پل شده
- Prussian Blue: هموسیدرین آبی
- Ziehl-Neelsen (ZN): مایکوباکتریوم قرمز روی زمینه آبی (AFB)
- PAS-D (دیاستاز-مقاوم): تفکیک گلیکوژن از موسین
- Giemsa: H. pylori، پلاسمودیوم، لیشمانیا

ایمونوهیستوشیمی (IHC) - مارکرهای کلیدی:
  • کراتین (CK): سلول اپیتلیال، کارسینوم
  • Vimentin: مزانشیم، سارکوم
  • GFAP: آستروسیت، گلیوم
  • S100: ملانوم، شوانوم، سلول‌های عصبی
  • Desmin: تومورهای عضلانی
  • CD45 (LCA): لنفوم
  • CD3: T سل
  • CD20: B سل
  • CD30+CD15: هوچکین RS cell
  • SMA (αSMA): عضله صاف، میوفیبروبلاست

════════════════════════════════════════
🦠 آسیب‌شناسی کبد
════════════════════════════════════════
- هپاتیت ویروسی: A (حاد)، B (حاد/مزمن)، C (مزمن - سیروز)، D (کودفکتور B)، E (بارداری)
- تغییرات هیستولوژیک: بالونینگ هپاتوسیت، نکروز کونسیلمن (آپوپتوز)، التهاب پورتال
- سیروز: اتیولوژی (الکل، هپاتیت B/C، NASH، هموکروماتوز، ویلسون، α1-AT)
  • ماکرونودولار (هپاتیت B) vs میکرونودولار (الکل)
- هپاتوسلولار کارسینوم (HCC): AFP↑، کنتراست CT واش‌اوت، کنگ لبرانچ
- الکل و کبد: استئاتوز، استئاتوهپاتیت، سیروز الکلی، اجسام مالوری

════════════════════════════════════════
🫘 آسیب‌شناسی کلیه
════════════════════════════════════════
گلومرولوپاتی‌ها:
  • Minimal Change Disease (MCD): کودکان، سندرم نفروتیک، IHC منفی، درمان: استروئید
  • FSGS: HIV، اوبزیتی، هروئین، سیندرم نفروتیک
  • ممبران‌پروریفراتیو (MPGN): هپاتیت C، C3 nephropathy
  • IgA نفروپاتی (Berger): هماچوری بعد URTI، IgA در مزانژیوم
  • لوپوس نفریت: WHO I-VI، anti-dsDNA
  • دیابتیک نفروپاتی: ندول کیمل‌استیل-ویلسون، GBM ضخیم

سندرم نفروتیک vs نفریتیک: جدول کامل مقایسه

کارسینوم سلول کلیوی (RCC):
  • کلر سل (شایع‌ترین): VHL، فون هیپل-لیندو
  • پاپیلاری: MET موتاسیون
  • کروموفوب

════════════════════════════════════════
📏 قوانین پاسخ‌دهی
════════════════════════════════════════
1. همیشه به فارسی روان و علمی پاسخ دهید - راست‌چین و RTL
2. نام علمی لاتین را همیشه ایتالیک و در پرانتز بیاورید
3. پاسخ‌ها کامل، دقیق، ساختارمند و آکادمیک باشند
4. از جداول مقایسه‌ای و لیست‌بندی برای وضوح استفاده کنید
5. مثال‌های بالینی، بیوشیمیایی و هیستوپاتولوژیک بیاورید
6. در صورت سوال غیرمرتبط، مؤدبانه اعلام کنید فقط در حوزه آسیب‌شناسی پاسخ می‌دهید
7. نتایج آزمایشگاهی مهم و مارکرهای تشخیصی را ذکر کنید
8. تمام متون راست‌چین (RTL) باشند\`;

    let conversationHistory = [];
    let isTyping = false;

    // ===== PARTICLES =====
    function createParticles() {
        const container = document.getElementById('particles');
        const emojis = ['🔬','🩺','💊','🧫','🩸','❤️','🧬'];
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top  = Math.random() * 100 + '%';
            particle.style.animationDelay    = Math.random() * 7 + 's';
            particle.style.animationDuration = (5 + Math.random() * 5) + 's';
            if (Math.random() > 0.82) {
                particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                particle.style.background = 'transparent';
                particle.style.fontSize = '0.9rem';
                particle.style.width = 'auto';
                particle.style.height = 'auto';
                particle.style.opacity = '0.08';
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
        avatar.textContent = role === 'ai' ? '🔬' : '👤';

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = formatMessage(content);

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(bubble);
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function formatMessage(text) {
        text = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
        text = text.replace(/\\*(.*?)\\*/g, '<em class="lat-term">$1</em>');
        text = text.replace(/^#### (.*)/gm, '<h4 style="color:#ff9f43;margin:8px 0 4px;text-align:right">$1</h4>');
        text = text.replace(/^### (.*)/gm,  '<h4 style="color:#ffeaa7;margin:10px 0 5px;text-align:right">$1</h4>');
        text = text.replace(/^## (.*)/gm,   '<h3 style="color:#ff6b6b;margin:12px 0 6px;text-align:right">$1</h3>');
        text = text.replace(/^# (.*)/gm,    '<h2 style="color:#ff6b6b;margin:14px 0 8px;text-align:right">$1</h2>');
        text = text.replace(/^[-•·] (.*)/gm, '<li style="margin:4px 0;text-align:right">$1</li>');
        text = text.replace(/^\\d+\\. (.*)/gm, '<li style="margin:4px 0;text-align:right">$1</li>');
        text = text.replace(/(<li[^>]*>.*?<\\/li>\\s*)+/gs, m =>
            '<ul style="margin:6px 0;padding-right:20px;padding-left:0;text-align:right;list-style-position:inside">' + m + '</ul>'
        );
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
            <div class="avatar ai">🔬</div>
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


`,className:"w-html-embed"})}),w=a=>{const{origin:t,pathname:s,search:i}=new URL(a);return`${t}${s}${i}`},A=l.memo(({pageKey:a,system:t})=>e.jsx(C,{system:t},a),(a,t)=>a.pageKey===t.pageKey),T=({data:a})=>{const{system:t,resources:s,url:i,pageMeta:n}=a,d=w(i),p=l.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:s,breakpoints:f,onError:console.error}),[s]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(b.Provider,{value:i,children:e.jsx(A,{pageKey:d,system:t})}),e.jsx(m,{url:i,pageMeta:n,siteName:c,imageLoader:o,assetBaseUrl:r}),e.jsx(u,{children:n.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),S=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-54/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-54/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{B as configValuesSerialized};
