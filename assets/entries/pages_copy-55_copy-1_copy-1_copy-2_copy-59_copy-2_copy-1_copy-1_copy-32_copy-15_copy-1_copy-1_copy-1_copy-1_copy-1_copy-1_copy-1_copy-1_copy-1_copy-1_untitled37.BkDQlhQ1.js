import{j as e,r as l,a as o,i,R as b,b as m,P as u,c as x,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as d}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=t=>e.jsxs("body",{className:"w-element",children:[e.jsx(d,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی تخصصی انگل‌شناسی — ترماتودها و سستودها</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #020a08 0%, #0a1a0f 40%, #080f18 80%, #0f0a18 100%);
            min-height: 100vh;
            color: #e0e0e0;
            overflow-x: hidden;
            direction: rtl;
        }

        .particles {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .particle {
            position: absolute;
            width: 3px; height: 3px;
            border-radius: 50%;
            animation: float 8s infinite;
            opacity: 0.35;
        }

        .particle:nth-child(3n+1) { background: #44dd88; }
        .particle:nth-child(3n+2) { background: #55aaff; }
        .particle:nth-child(3n)   { background: #ffdd55; width: 2px; height: 2px; }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1);        opacity: 0.25; }
            33%       { transform: translateY(-18px) rotate(120deg) scale(1.3);  opacity: 0.65; }
            66%       { transform: translateY(-8px) rotate(250deg) scale(0.75);  opacity: 0.45; }
        }

        .container {
            position: relative;
            z-index: 1;
            max-width: 1050px;
            margin: 0 auto;
            padding: 20px;
        }

        /* ===== HEADER ===== */
        .header {
            text-align: center;
            padding: 38px 20px 28px;
            margin-bottom: 22px;
        }

        .header-icon {
            font-size: 4.8rem;
            margin-bottom: 14px;
            display: block;
            animation: worm-wiggle 3s ease-in-out infinite;
            filter: drop-shadow(0 0 22px rgba(68,221,136,0.65));
        }

        @keyframes worm-wiggle {
            0%, 100% { transform: scaleX(1) rotate(-4deg); filter: drop-shadow(0 0 16px rgba(68,221,136,0.5)); }
            25%       { transform: scaleX(1.1) rotate(2deg); filter: drop-shadow(0 0 28px rgba(68,221,136,0.9)); }
            50%       { transform: scaleX(0.92) rotate(-2deg); filter: drop-shadow(0 0 22px rgba(85,170,255,0.8)); }
            75%       { transform: scaleX(1.06) rotate(3deg); filter: drop-shadow(0 0 20px rgba(255,221,85,0.7)); }
        }

        .header h1 {
            font-size: 2.1rem;
            background: linear-gradient(90deg, #44dd88, #55aaff, #ffdd55);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;
        }

        .header p {
            color: #7a9a8a;
            font-size: 0.92rem;
            text-align: center;
        }

        .badges { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-top: 13px; }
        .badge { padding: 4px 15px; border-radius: 20px; font-size: 0.74rem; font-weight: bold; }
        .badge-green  { background: linear-gradient(135deg,#44dd88,#009944); color:#fff; }
        .badge-blue   { background: linear-gradient(135deg,#55aaff,#0055cc); color:#fff; }
        .badge-yellow { background: linear-gradient(135deg,#ffdd55,#cc8800); color:#000; }

        /* ===== TOPICS BAR ===== */
        .topics-bar {
            display: flex; flex-wrap: wrap; gap: 8px; padding: 15px 18px;
            background: rgba(68,221,136,0.04); border: 1px solid rgba(68,221,136,0.13);
            border-radius: 16px; margin-bottom: 22px;
        }

        .topic-chip {
            background: rgba(68,221,136,0.09); border: 1px solid rgba(68,221,136,0.28);
            color: #44dd88; padding: 5px 14px; border-radius: 20px; font-size: 0.79rem; cursor: pointer; transition: 0.3s;
        }
        .topic-chip:hover { background: rgba(68,221,136,0.22); transform: translateY(-2px); box-shadow: 0 4px 14px rgba(68,221,136,0.28); }

        .topic-chip.blue { background: rgba(85,170,255,0.09); border-color: rgba(85,170,255,0.28); color: #55aaff; }
        .topic-chip.blue:hover { background: rgba(85,170,255,0.22); box-shadow: 0 4px 14px rgba(85,170,255,0.28); }

        /* ===== CHAT ===== */
        .chat-container {
            background: rgba(10,20,15,0.8); border: 1px solid rgba(68,221,136,0.15);
            border-radius: 22px; overflow: hidden; box-shadow: 0 22px 65px rgba(0,0,0,0.65);
            backdrop-filter: blur(10px);
        }

        .chat-header {
            background: linear-gradient(135deg, rgba(68,221,136,0.1), rgba(85,170,255,0.07));
            padding: 16px 22px; border-bottom: 1px solid rgba(68,221,136,0.12); display: flex; align-items: center; gap: 10px;
        }

        .status-dot {
            width: 10px; height: 10px; background: #44dd88; border-radius: 50%;
            animation: blink 1.6s infinite; flex-shrink: 0; box-shadow: 0 0 9px rgba(68,221,136,0.85);
        }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.18; } }

        .chat-title { font-size: 0.9rem; color: #44dd88; }

        #chatMessages { height: 500px; overflow-y: auto; padding: 22px; scroll-behavior: smooth; }
        #chatMessages::-webkit-scrollbar { width: 5px; }
        #chatMessages::-webkit-scrollbar-thumb { background: rgba(68,221,136,0.4); border-radius: 3px; }

        .message { display: flex; gap: 12px; margin-bottom: 24px; animation: slideIn 0.38s ease; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(13px); } to { opacity: 1; transform: translateY(0); } }
        .message.user { flex-direction: row-reverse; }

        .avatar { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; flex-shrink: 0; }
        .avatar.ai { background: linear-gradient(135deg,#44dd88,#007733); box-shadow: 0 0 16px rgba(68,221,136,0.55); }
        .avatar.user { background: linear-gradient(135deg,#55aaff,#0044bb); box-shadow: 0 0 12px rgba(85,170,255,0.45); }

        .message-bubble {
            max-width: 76%; padding: 14px 18px; border-radius: 18px; font-size: 0.92rem;
            line-height: 2; text-align: right;
        }

        .message.ai .message-bubble { background: rgba(68,221,136,0.06); border: 1px solid rgba(68,221,136,0.2); color: #e5ede8; border-radius: 4px 18px 18px 18px; }
        .message.user .message-bubble { background: rgba(85,170,255,0.1); border: 1px solid rgba(85,170,255,0.26); color: #e5eaed; border-radius: 18px 4px 18px 18px; }

        .message-bubble strong { color: #44dd88; }
        .message-bubble em { color: #ffdd55; font-style: italic; }
        .message-bubble ul { margin: 8px 18px 8px 0; padding: 0; }
        .message-bubble li { margin-bottom: 5px; }
        .message-bubble h3 { color: #44dd88; margin: 10px 0 5px; font-size: 1rem; }
        .message-bubble h4 { color: #55aaff; margin: 8px 0 4px; font-size: 0.9rem; }

        /* ===== INPUT ===== */
        .input-area { padding: 20px 22px; border-top: 1px solid rgba(68,221,136,0.1); background: rgba(0,0,0,0.3); }
        .input-wrapper { display: flex; gap: 10px; align-items: flex-end; }
        #userInput {
            flex: 1; background: rgba(255,255,255,0.045); border: 1px solid rgba(68,221,136,0.22);
            border-radius: 15px; padding: 12px 16px; color: #fff; font-family: inherit; resize: none;
            min-height: 50px; outline: none; transition: 0.3s;
        }
        #userInput:focus { border-color: rgba(68,221,136,0.55); background: rgba(255,255,255,0.075); }
        #sendBtn {
            background: linear-gradient(135deg,#44dd88,#007733); border: none; border-radius: 15px;
            padding: 12px 22px; color: #fff; font-size: 1.4rem; cursor: pointer; transition: 0.3s;
        }
        #sendBtn:hover { transform: scale(1.05); box-shadow: 0 6px 26px rgba(68,221,136,0.62); }
        #sendBtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .quick-questions { padding: 14px 22px; border-top: 1px solid rgba(68,221,136,0.1); }
        .quick-btns { display: flex; flex-wrap: wrap; gap: 7px; }
        .quick-btn { background: rgba(85,170,255,0.07); border: 1px solid rgba(85,170,255,0.24); color: #55aaff; padding: 6px 14px; border-radius: 10px; font-size: 0.77rem; cursor: pointer; transition: 0.3s; }
        .quick-btn:hover { background: rgba(85,170,255,0.16); transform: translateY(-2px); box-shadow: 0 3px 10px rgba(85,170,255,0.26); }
        .quick-btn.green { background: rgba(68,221,136,0.07); border-color: rgba(68,221,136,0.24); color: #44dd88; }
        .quick-btn.green:hover { background: rgba(68,221,136,0.16); box-shadow: 0 3px 10px rgba(68,221,136,0.26); }

        .welcome-card { background: rgba(68,221,136,0.05); border: 1px solid rgba(68,221,136,0.18); border-radius: 15px; padding: 20px; margin-bottom: 20px; }
        .typing-indicator { display: flex; gap: 5px; padding: 10px; }
        .typing-indicator span { width: 8px; height: 8px; background: #44dd88; border-radius: 50%; animation: typing 1s infinite; }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        
        .footer { text-align: center; padding: 20px; font-size: 0.74rem; color: #5a7a6a; }

        @media (max-width: 620px) { .header h1 { font-size: 1.45rem; } #chatMessages { height: 400px; } }
    </style>



<div class="particles" id="particles"></div>

<div class="container">

    <!-- HEADER -->
    <div class="header">
        <span class="header-icon">🪱</span>
        <h1>هوش مصنوعی تخصصی انگل‌شناسی</h1>
        <p>سیستم هوشمند تخصصی در حوزه <strong style="color:#44dd88">ترماتودها (Trematoda)</strong> و <strong style="color:#55aaff">سستودها (Cestoda)</strong></p>
        <div class="badges">
            <span class="badge badge-green">🐛 Trematoda Expert</span>
            <span class="badge badge-blue">🔵 Cestoda Expert</span>
            <span class="badge badge-yellow">🔬 Lab Diagnosis</span>
        </div>
    </div>

    <!-- TOPICS BAR -->
    <div class="topics-bar">
        <span style="color:#3a6a4a;font-size:0.79rem;align-self:center">ترماتودها:</span>
        <div class="topic-chip">🫀 فاشیولا هپاتیکا</div>
        <div class="topic-chip">🩸 شیستوزوما</div>
        <div class="topic-chip">🫁 پاراگونیموس</div>
        <div class="topic-chip">🐟 کلونورکیس</div>
        <span style="color:#3a5a7a;font-size:0.79rem;align-self:center;margin-right:8px">سستودها:</span>
        <div class="topic-chip blue">🔵 تنیا سولیوم</div>
        <div class="topic-chip blue">🐄 تنیا ساژیناتا</div>
        <div class="topic-chip blue">🐶 کیست هیداتید</div>
        <div class="topic-chip blue">💊 درمان و کنترل</div>
    </div>

    <!-- CHAT CONTAINER -->
    <div class="chat-container">

        <div class="chat-header">
            <div class="status-dot"></div>
            <span class="chat-title">🪱 دستیار تخصصی انگل‌شناسی (کرم‌های پهن) — آنلاین</span>
        </div>

        <div id="chatMessages">

            <div class="welcome-card">
                <h3 style="color: #44dd88;">🪱 به سیستم تخصصی کرم‌های پهن خوش آمدید</h3>
                <p style="color: #9abaa8; font-size: 0.9rem;">این سیستم به صورت ایزوله و اختصاصی <strong>فقط</strong> به سوالات مربوط به <strong>کرم‌های برگی (ترماتودها)</strong> و <strong>کرم‌های نواری (سستودها)</strong> پاسخ می‌دهد. (سوالات مربوط به کرم‌های گرد، تک‌یاخته‌ها و باکتری‌ها پشتیبانی نمی‌شود).</p>
            </div>

            <div class="message ai">
                <div class="avatar ai">🪱</div>
                <div class="message-bubble">
                    سلام! من دستیار فوق‌تخصصی <strong>کرم‌های پهن (Platyhelminthes)</strong> هستم. 🎓<br><br>
                    شما می‌توانید درباره دو گروه زیر از من بپرسید:<br><br>
                    🟢 <strong>ترماتودها (کرم‌های برگی):</strong><br>
                    فاشیولا هپاتیکا، شیستوزوما، پاراگونیموس، دیکروسلیوم، کلونورکیس.<br><br>
                    🔵 <strong>سستودها (کرم‌های نواری):</strong><br>
                    تنیا سولیوم و ساژیناتا، اکینوکوکوس (کیست هیداتید)، دیفیلوبوتریوم، هیمنولپیس نانا.<br><br>
                    همچنین در مورد چرخه‌های زندگی، تشخیص آزمایشگاهی، و داروهای ضدکرم (پرازی‌کوانتل، آلبندازول و...) آماده پاسخگویی هستم! 🔬
                </div>
            </div>

        </div>

        <!-- QUICK QUESTIONS -->
        <div class="quick-questions">
            <div class="quick-btns">
                <button class="quick-btn green" onclick="askQuick('چرخه زندگی فاشیولا هپاتیکا را توضیح دهید')">چرخه زندگی فاشیولا</button>
                <button class="quick-btn green" onclick="askQuick('تفاوت گونه‌های منسونی، هماتوبیوم و ژاپونیکوم در شیستوزوما')">انواع شیستوزوما</button>
                <button class="quick-btn" onclick="askQuick('تفاوت کامل تنیا سولیوم و تنیا ساژیناتا')">تنیا سولیوم vs ساژیناتا</button>
                <button class="quick-btn" onclick="askQuick('پاتوژنز و درمان کیست هیداتید (اکینوکوکوس گرانولوزوس)')">کیست هیداتید</button>
                <button class="quick-btn" onclick="askQuick('بیماری سیستی سرکوزیس چیست و چگونه ایجاد می‌شود؟')">سیستی‌سرکوزیس</button>
            </div>
        </div>

        <!-- INPUT AREA -->
        <div class="input-area">
            <div class="input-wrapper">
                <button id="sendBtn" onclick="sendMessage()">➤</button>
                <textarea id="userInput" placeholder="سوال تخصصی درباره ترماتودها یا سستودها بپرسید..." rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this)"></textarea>
            </div>
        </div>

    </div>

    <div class="footer">
        🪱 Trematoda &amp; Cestoda AI Expert System | Medical Parasitology
    </div>

</div>

<script>
    const API_KEY = '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';
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    // *** مغز متفکر سیستم - تنظیم شده برای "ترماتودها + سستودها" ***
    const SYSTEM_PROMPT = \`
    شما یک استاد تمام و متخصص برجسته در زمینه انگل‌شناسی پزشکی و دامپزشکی، با تخصص انحصاری در کرم‌های پهن یعنی "ترماتودها (Trematoda)" و "سستودها (Cestoda)" هستید.

    ⛔ **قوانین محدودکننده (GUARDRAILS) - بسیار مهم:**
    شما فقط و فقط مجاز به پاسخگویی درباره کرم‌های پهن (ترماتودها و سستودها) هستید. 
    اگر کاربر درباره موارد زیر سوال پرسید، باید قاطعانه و محترمانه پاسخ دادن را **رد کنید**:
    ❌ نماتودها (Nematodes/کرم‌های گرد) مانند: آسکاریس، کرمک (اکسیور)، کرم قلابدار، تریشین، فیلرها، استرونژیلوئیدس و...
    ❌ تک‌یاخته‌ها (Protozoa) مانند: لیشمانیا، مالاریا، توکسوپلاسما، آمیب، ژیاردیا، تریکوموناس و...
    ❌ حشره‌شناسی پزشکی (بندپایان، پشه‌ها، کنه‌ها، جرب‌ها، ساس‌ها).
    ❌ باکتری‌ها، ویروس‌ها، قارچ‌ها، پزشکی عمومی، درمان‌های گیاهی نامعتبر، سیاست، برنامه‌نویسی و مسائل متفرقه.

    ✅ **حیطه‌های مجاز پاسخگویی (فقط ترماتودها و سستودها):**
    1. **ترماتودها (کرم‌های برگی):** فاشیولا هپاتیکا/ژیگانتیکا، شیستوزوما (منسونی، هماتوبیوم، ژاپونیکوم)، پاراگونیموس وسترمانی، دیکروسلیوم دندریتیکوم، کلونورکیس سینسیس، اوپیستورکیس، فاسیولوپسی بوسکی.
    2. **سستودها (کرم‌های نواری):** تنیا سولیوم، تنیا ساژیناتا، اکینوکوکوس گرانولوزوس (کیست هیداتید)، اکینوکوکوس مولتی‌لوکولاریس، دیفیلوبوتریوم لاتوم، هیمنولپیس نانا و دیمینوتا، دیپیلیدیوم کانینوم.
    3. **بیماری‌ها و چرخه زندگی:** سیستی‌سرکوزیس، هیداتیدوز، تب کاتایاما، درماتیت سرکریایی، مراحل لاروی (میراسیدیوم تا متاسرکر، انکوسفر، سیستی‌سرکوس، پروسرکوئید، پلروسرکوئید).
    4. **تشخیص و درمان:** داروهای ضدکرم (پرازی‌کوانتل، آلبندازول، مبندازول، تری‌کلابندازول، نیکلوزامید، بیتیونول)، روش‌های تشخیصی مدفوع، سرولوژی و تصویربرداری.

    📝 **نحوه رد کردن سوالات ممنوعه:**
    اگر سوال نامرتبط بود، دقیقاً این متن را ارسال کنید: 
    "⛔ من دستیار تخصصی **کرم‌های پهن (ترماتودها و سستودها)** هستم. من به سوالات مربوط به نماتودها (مثل آسکاریس و کرمک)، تک‌یاخته‌ها، حشرات یا بیماری‌های عمومی پاسخ نمی‌دهم. لطفاً سوال خود را در مورد این دو شاخه (مثل فاشیولا، شیستوزوما، کیست هیداتید، تنیا و...) مطرح کنید."

    📌 **قوانین نگارشی:**
    1. نام‌های علمی را حتماً به لاتین و ایتالیک (در پرانتز) بنویسید (مثال: *Fasciola hepatica*).
    2. پاسخ‌ها باید کاملاً علمی، آکادمیک، لیست‌بندی شده و به زبان فارسی سلیس (راست‌چین) باشند.
    \`;

    let conversationHistory = [];
    let isTyping = false;

    function createParticles() {
        const container = document.getElementById('particles');
        const emojis = ['🪱','🔬','🐛','🐟','🐄','🐷','🐶','🐌'];
        for (let i = 0; i < 40; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.top  = Math.random() * 100 + '%';
            p.style.animationDelay    = Math.random() * 8 + 's';
            p.style.animationDuration = (5 + Math.random() * 6) + 's';
            if (Math.random() > 0.8) {
                p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                p.style.background = 'transparent';
                p.style.fontSize   = '0.85rem';
                p.style.width = 'auto';
                p.style.height = 'auto';
                p.style.opacity = '0.1';
            }
            container.appendChild(p);
        }
    }

    function autoResize(el) {
        el.style.height = 'auto';
        el.style.height = Math.min(el.scrollHeight, 125) + 'px';
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    }

    function askQuick(q) {
        document.getElementById('userInput').value = q;
        sendMessage();
    }

    function addMessage(content, role) {
        const box = document.getElementById('chatMessages');
        const div = document.createElement('div');
        div.className = \`message \${role}\`;

        const av = document.createElement('div');
        av.className = \`avatar \${role}\`;
        av.textContent = role === 'ai' ? '🪱' : '👤';

        const bub = document.createElement('div');
        bub.className = 'message-bubble';
        bub.innerHTML = formatMessage(content);

        div.appendChild(av);
        div.appendChild(bub);
        box.appendChild(div);
        box.scrollTop = box.scrollHeight;
    }

    function formatMessage(t) {
        t = t.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
        t = t.replace(/\\*(.*?)\\*/g,     '<em>$1</em>');
        t = t.replace(/^#### (.*)/gm, '<h4 style="color:#ffdd55;margin:8px 0 4px">$1</h4>');
        t = t.replace(/^### (.*)/gm,  '<h4 style="color:#55aaff;margin:10px 0 5px">$1</h4>');
        t = t.replace(/^## (.*)/gm,   '<h3 style="color:#44dd88;margin:12px 0 6px">$1</h3>');
        t = t.replace(/^# (.*)/gm,    '<h2 style="color:#44dd88;margin:14px 0 8px">$1</h2>');
        t = t.replace(/^[-•·▌] (.*)/gm, '<li>$1</li>');
        t = t.replace(/^\\d+\\. (.*)/gm,  '<li>$1</li>');
        t = t.replace(/(<li>.*?<\\/li>\\s*)+/gs, m => '<ul style="margin:6px 0;padding-right:20px">' + m + '</ul>');
        t = t.replace(/\\n\\n/g, '<br><br>');
        t = t.replace(/\\n/g,   '<br>');
        return t;
    }

    function showTyping() {
        const box = document.getElementById('chatMessages');
        const d   = document.createElement('div');
        d.className = 'typing-indicator';
        d.id = 'typingIndicator';
        d.innerHTML = \`<div class="avatar ai">🪱</div>
            <div style="display:flex;align-items:center;gap:4px;background:rgba(68,221,136,0.1);padding:10px;border-radius:15px">
                <span></span><span></span><span></span>
            </div>\`;
        box.appendChild(d);
        box.scrollTop = box.scrollHeight;
    }

    function hideTyping() {
        const el = document.getElementById('typingIndicator');
        if (el) el.remove();
    }

    async function sendMessage() {
        const input   = document.getElementById('userInput');
        const btn     = document.getElementById('sendBtn');
        const msg     = input.value.trim();
        if (!msg || isTyping) return;

        addMessage(msg, 'user');
        conversationHistory.push({ role: 'user', content: msg });
        input.value = '';
        input.style.height = 'auto';
        isTyping = true;
        btn.disabled = true;
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
                        ...conversationHistory
                    ],
                    temperature: 0.2,
                    max_tokens: 2800
                })
            });

            if (!res.ok) throw new Error("Connection Error");

            const data   = await res.json();
            const answer = data.choices[0].message.content;
            conversationHistory.push({ role: 'assistant', content: answer });
            hideTyping();
            addMessage(answer, 'ai');

        } catch (err) {
            hideTyping();
            addMessage(\`⚠️ خطا در ارتباط با سرور. لطفاً اینترنت خود را چک کنید.\`, 'ai');
        } finally {
            isTyping = false;
            btn.disabled = false;
            input.focus();
        }
    }

    createParticles();
<\/script>


`,className:"w-html-embed"}),e.jsx(d,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


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


`,className:"w-html-embed"})]}),z=t=>{const{origin:a,pathname:n,search:r}=new URL(t);return`${a}${n}${r}`},T=l.memo(({pageKey:t,system:a})=>e.jsx(k,{system:a},t),(t,a)=>t.pageKey===a.pageKey),E=({data:t})=>{const{system:a,resources:n,url:r,pageMeta:s}=t,c=z(r),g=l.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:n,breakpoints:f,onError:console.error}),[n]);return e.jsxs(b.Provider,{value:g,children:[e.jsx(m.Provider,{value:r,children:e.jsx(T,{pageKey:c,system:a})}),e.jsx(u,{url:r,pageMeta:s,siteName:p,imageLoader:i,assetBaseUrl:o}),e.jsx(x,{children:s.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),S=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${y}`})}),v.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"font",crossOrigin:"anonymous"},a)),w.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"image"},a))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-55/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-55/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{A as configValuesSerialized};
