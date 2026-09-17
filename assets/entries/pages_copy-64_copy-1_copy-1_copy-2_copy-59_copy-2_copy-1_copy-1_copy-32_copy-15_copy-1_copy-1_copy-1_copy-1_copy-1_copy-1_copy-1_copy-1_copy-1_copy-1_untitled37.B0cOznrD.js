import{j as e,r as c,a as n,i as o,R as b,b as u,P as m,c as x,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as d}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=a=>e.jsxs("body",{className:"w-element",children:[e.jsx(d,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی تخصصی آسیب‌شناسی (Pathology)</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f0505 0%, #1a0a0a 40%, #2a0f0f 100%);
            min-height: 100vh;
            color: #e0e0e0;
            overflow-x: hidden;
            direction: rtl;
        }

        /* افکت ذرات (تداعی کننده گلبول‌های قرمز و سلول‌ها) */
        .particles {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;
        }
        .particle {
            position: absolute; width: 4px; height: 4px; border-radius: 50%;
            animation: float 8s infinite; opacity: 0.3;
        }
        .particle:nth-child(odd) { background: #ff4d4d; } /* قرمز روشن */
        .particle:nth-child(even) { background: #800000; } /* زرشکی */
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
            50% { transform: translateY(-40px) rotate(180deg); opacity: 0.6; }
        }

        .container { position: relative; z-index: 1; max-width: 1000px; margin: 0 auto; padding: 20px; }

        /* هدر */
        .header { text-align: center; padding: 30px 20px; margin-bottom: 20px; }
        .header-icon { font-size: 4.5rem; display: block; margin-bottom: 10px; animation: pulse 2.5s infinite; text-shadow: 0 0 20px rgba(255, 0, 0, 0.4); }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        
        .header h1 {
            font-size: 2rem;
            background: linear-gradient(90deg, #ff4d4d, #ff9933, #ffcccc);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
            margin-bottom: 10px;
        }
        .header p { color: #aaa; font-size: 0.95rem; }

        .badges { display: flex; justify-content: center; gap: 10px; margin-top: 15px; flex-wrap: wrap; }
        .badge {
            background: rgba(255, 77, 77, 0.15); border: 1px solid rgba(255, 77, 77, 0.4);
            color: #ffcccc; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: bold;
        }

        /* نوار موضوعات */
        .topics-bar {
            display: flex; flex-wrap: wrap; gap: 8px; padding: 15px;
            background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 77, 77, 0.2);
            border-radius: 15px; margin-bottom: 20px;
        }
        .topic-chip {
            background: rgba(255, 77, 77, 0.1); border: 1px solid rgba(255, 77, 77, 0.3);
            color: #ff4d4d; padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; cursor: pointer; transition: 0.3s;
        }
        .topic-chip:hover { background: rgba(255, 77, 77, 0.25); transform: translateY(-2px); }

        /* کادر چت */
        .chat-container {
            background: rgba(20, 10, 10, 0.7); border: 1px solid rgba(255, 77, 77, 0.2);
            border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.6);
            backdrop-filter: blur(10px);
        }

        .chat-header {
            background: linear-gradient(135deg, rgba(255, 77, 77, 0.1), rgba(0, 0, 0, 0));
            padding: 15px 20px; border-bottom: 1px solid rgba(255, 77, 77, 0.1);
            display: flex; align-items: center; gap: 10px;
        }
        .status-dot { width: 10px; height: 10px; background: #ff4d4d; border-radius: 50%; animation: blink 2s infinite; box-shadow: 0 0 10px #ff4d4d; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .chat-title { color: #ffcccc; font-size: 0.9rem; }

        #chatMessages { height: 500px; overflow-y: auto; padding: 20px; scroll-behavior: smooth; }
        #chatMessages::-webkit-scrollbar { width: 5px; }
        #chatMessages::-webkit-scrollbar-thumb { background: rgba(255, 77, 77, 0.3); border-radius: 3px; }

        .message { display: flex; gap: 12px; margin-bottom: 20px; animation: slideIn 0.3s ease; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .message.user { flex-direction: row-reverse; }

        .avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
        .avatar.ai { background: linear-gradient(135deg, #ff4d4d, #990000); box-shadow: 0 0 15px rgba(255, 77, 77, 0.4); }
        .avatar.user { background: linear-gradient(135deg, #ff9933, #cc6600); color: #000; }

        .message-bubble { max-width: 80%; padding: 12px 16px; border-radius: 18px; font-size: 0.92rem; line-height: 1.8; text-align: right; }
        .message.ai .message-bubble {
            background: rgba(255, 77, 77, 0.08); border: 1px solid rgba(255, 77, 77, 0.2);
            color: #eee; border-radius: 4px 18px 18px 18px;
        }
        .message.user .message-bubble {
            background: rgba(255, 153, 51, 0.1); border: 1px solid rgba(255, 153, 51, 0.25);
            color: #eee; border-radius: 18px 4px 18px 18px;
        }

        .message-bubble strong { color: #ff4d4d; }
        .message-bubble em { color: #ff9933; font-style: italic; } /* اصطلاحات لاتین */
        .message-bubble ul { margin: 8px 25px 8px 0; padding: 0; }
        .message-bubble li { margin-bottom: 4px; }
        .message-bubble h3 { color: #ffcccc; margin: 10px 0 5px; font-size: 1rem; }
        .message-bubble h4 { color: #ff4d4d; margin: 8px 0 4px; font-size: 0.9rem; }

        .input-area { padding: 20px; border-top: 1px solid rgba(255, 77, 77, 0.1); background: rgba(0,0,0,0.3); }
        .input-wrapper { display: flex; gap: 10px; align-items: flex-end; }
        #userInput {
            flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255, 77, 77, 0.3);
            border-radius: 15px; padding: 12px; color: #fff; font-family: inherit; resize: none;
            min-height: 50px; outline: none; transition: 0.3s;
        }
        #userInput:focus { border-color: #ff4d4d; background: rgba(255,255,255,0.08); }
        #sendBtn {
            background: linear-gradient(135deg, #ff4d4d, #cc0000); border: none; border-radius: 15px;
            padding: 0 20px; height: 50px; font-size: 1.5rem; cursor: pointer; transition: 0.3s; color: #fff;
        }
        #sendBtn:hover { transform: scale(1.05); box-shadow: 0 0 20px rgba(255, 77, 77, 0.5); }
        #sendBtn:disabled { opacity: 0.5; cursor: not-allowed; }

        .quick-questions { padding: 15px 20px; border-top: 1px solid rgba(255, 77, 77, 0.1); }
        .quick-btns { display: flex; flex-wrap: wrap; gap: 8px; }
        .quick-btn {
            background: rgba(255, 153, 51, 0.1); border: 1px solid rgba(255, 153, 51, 0.3);
            color: #ff9933; padding: 6px 14px; border-radius: 10px; font-size: 0.8rem; cursor: pointer; transition: 0.3s;
        }
        .quick-btn:hover { background: rgba(255, 153, 51, 0.2); color: #fff; }

        .welcome-card {
            background: rgba(255, 77, 77, 0.05); border: 1px solid rgba(255, 77, 77, 0.2);
            border-radius: 15px; padding: 15px; margin-bottom: 20px; text-align: right;
        }

        .typing-indicator { display: flex; gap: 5px; padding: 10px; }
        .typing-indicator span {
            width: 8px; height: 8px; background: #ff4d4d; border-radius: 50%;
            animation: typing 1s infinite;
        }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        
        .footer { text-align: center; padding: 15px; font-size: 0.75rem; color: #666; }

        @media (max-width: 600px) { .header h1 { font-size: 1.5rem; } #chatMessages { height: 400px; } }
    </style>



<div class="particles" id="particles"></div>

<div class="container">

    <div class="header">
        <span class="header-icon">🔬</span>
        <h1>هوش مصنوعی تخصصی آسیب‌شناسی</h1>
        <p>سیستم هوشمند تخصصی در حوزه پاتولوژی (Pathology)</p>
        <div class="badges">
            <span class="badge">General Pathology</span>
            <span class="badge">Systemic Pathology</span>
            <span class="badge">Histopathology</span>
        </div>
    </div>

    <div class="topics-bar">
        <span style="color:#aaa;font-size:0.8rem;align-self:center">موضوعات:</span>
        <div class="topic-chip">💥 آسیب سلولی</div>
        <div class="topic-chip">🔥 التهاب و ترمیم</div>
        <div class="topic-chip">🧬 نئوپلازی</div>
        <div class="topic-chip">🩸 همودینامیک</div>
        <div class="topic-chip">❤️ پاتولوژی قلب</div>
        <div class="topic-chip">🔬 هیستوپاتولوژی</div>
    </div>

    <div class="chat-container">
        <div class="chat-header">
            <div class="status-dot"></div>
            <span class="chat-title">دستیار تخصصی آسیب‌شناسی - آنلاین</span>
        </div>

        <div id="chatMessages">
            <div class="welcome-card">
                <h3>🔬 خوش آمدید به سیستم هوشمند آسیب‌شناسی</h3>
                <p>این سیستم به صورت <strong>کاملاً تخصصی و ایزوله</strong> فقط به سوالات مرتبط با مکانیسم بیماری‌ها، تغییرات بافتی، سرطان‌ها و تشخیص‌های آزمایشگاهی پاسخ می‌دهد.</p>
            </div>

            <div class="message ai">
                <div class="avatar ai">🔬</div>
                <div class="message-bubble">
                    سلام! من متخصص <strong>آسیب‌شناسی پزشکی (Pathology)</strong> هستم. 🎓<br><br>
                    حوزه فعالیت من شامل موارد زیر است:<br>
                    💥 <strong>پاتولوژی عمومی:</strong> نکروز، آپوپتوز، التهاب، ترمیم زخم<br>
                    🧬 <strong>سرطان‌شناسی:</strong> تومورهای خوش‌خیم و بدخیم، متاستاز، تومور مارکرها<br>
                    🫀 <strong>پاتولوژی اختصاصی:</strong> بیماری‌های قلب، ریه، کبد، کلیه و...<br>
                    🔬 <strong>هیستوپاتولوژی:</strong> رنگ‌آمیزی‌ها (H&amp;E, PAS)، ایمونوهیستوشیمی (IHC)<br><br>
                    ⚠️ <em>من به سوالات غیرمرتبط با آسیب‌شناسی (مثل درمان‌های خانگی، ورزش، سیاست یا تکنولوژی) پاسخ نمی‌دهم.</em><br>
                    سوال تخصصی خود را بپرسید!
                </div>
            </div>
        </div>

        <div class="quick-questions">
            <div class="quick-btns">
                <button class="quick-btn" onclick="askQuick('تفاوت نکروز و آپوپتوز را کامل توضیح دهید')">نکروز vs آپوپتوز</button>
                <button class="quick-btn" onclick="askQuick('مراحل متاستاز تومورهای بدخیم')">مراحل متاستاز</button>
                <button class="quick-btn" onclick="askQuick('انواع التهاب حاد و مزمن و میانجی‌های آنها')">التهاب حاد/مزمن</button>
                <button class="quick-btn" onclick="askQuick('یافته‌های میکروسکوپی در انفارکتوس میوکارد (MI)')">پاتولوژی MI</button>
                <button class="quick-btn" onclick="askQuick('مارکرهای ایمونوهیستوشیمی (IHC) مهم در سرطان')">مارکرهای IHC</button>
            </div>
        </div>

        <div class="input-area">
            <div class="input-wrapper">
                <button id="sendBtn" onclick="sendMessage()">➤</button>
                <textarea id="userInput" placeholder="سوال خود را درباره آسیب‌شناسی بپرسید..." rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this)"></textarea>
            </div>
        </div>
    </div>

    <div class="footer">
        🔬 Pathology Expert AI System
    </div>
</div>

<script>
    const API_KEY = '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'; 
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    // *** مغز متفکر سیستم: پرامپت محدود شده و تخصصی برای پاتولوژی ***
    const SYSTEM_PROMPT = \`
    شما یک استاد تمام و متخصص برجسته در رشته "آسیب‌شناسی پزشکی" (Pathology) هستید.

    ⛔ **قوانین محدودکننده (GUARDRAILS) - بسیار مهم:**
    شما فقط و فقط مجاز به پاسخگویی در حیطه‌های زیر هستید. اگر کاربر سوالی خارج از این حیطه پرسید، باید مودبانه **رد کنید**.

    ✅ **حیطه‌های مجاز:**
    1. **پاتولوژی عمومی:** آسیب سلولی (نکروز، آپوپتوز، دژنراسیون)، التهاب (حاد، مزمن)، ترمیم بافت، نئوپلازی (سرطان‌شناسی)، اختلالات همودینامیک (ادم، شوک، ترومبوز).
    2. **پاتولوژی سیستمیک (اختصاصی):** بررسی بیماری‌های اندام‌ها (قلب، ریه، دستگاه گوارش، کبد، کلیه، خون، دستگاه عصبی و...).
    3. **هیستوپاتولوژی:** توصیف میکروسکوپی بافت‌ها، رنگ‌آمیزی‌ها (H&E, PAS, Trichrome)، سیتولوژی.
    4. **مکانیسم بیماری (پاتوفیزیولوژی):** چگونگی ایجاد بیماری در سطح سلولی و مولکولی.
    5. **تشخیص آزمایشگاهی:** تومور مارکرها، آنزیم‌ها، یافته‌های بیوپسی.

    ❌ **حیطه‌های ممنوع:**
    - تجویز دارو و نسخه نویسی (مگر توضیح مکانیسم اثر دارو).
    - مسائل عمومی زندگی، ورزش، سیاست، آشپزی، تکنولوژی.
    - سوالات پزشکی که هیچ ربطی به فرآیند بیماری و آسیب‌شناسی ندارد.

    📝 **قوانین پاسخ‌دهی:**
    1. اگر سوال نامرتبط بود، دقیقاً بنویسید: "⛔ من دستیار تخصصی آسیب‌شناسی هستم و فقط می‌توانم به سوالات مرتبط با مکانیسم بیماری‌ها، تغییرات بافتی و پاتولوژی پاسخ دهم."
    2. نام‌های علمی و اصطلاحات پزشکی را حتماً به لاتین و در پرانتز بنویسید (مثال: *Coagulative Necrosis*).
    3. پاسخ‌ها باید آکادمیک، دقیق و به زبان فارسی سلیس باشد.
    4. از لیست‌بندی (Bullet points) برای وضوح استفاده کنید.

    [دانش پایه شما شامل رفرنس‌های رابینز (Robbins Pathology) و متون معتبر پاتولوژی است.]
    \`;

    let conversationHistory = [];
    let isTyping = false;

    // افکت ذرات
    function createParticles() {
        const container = document.getElementById('particles');
        for (let i = 0; i < 35; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDuration = (6 + Math.random() * 6) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
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
        text = text.replace(/\\*(.*?)\\*/g, '<em>$1</em>');
        text = text.replace(/^### (.*)/gm, '<h4 style="color:#ff4d4d">$1</h4>');
        text = text.replace(/^## (.*)/gm, '<h3 style="color:#ffcccc">$1</h3>');
        text = text.replace(/^[-•] (.*)/gm, '<li>$1</li>');
        text = text.replace(/(<li>.*<\\/li>)/s, '<ul>$1</ul>');
        text = text.replace(/\\n/g, '<br>');
        return text;
    }

    function showTyping() {
        const messagesDiv = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = \`
            <div class="avatar ai">🔬</div>
            <div style="display:flex;align-items:center;gap:4px;background:rgba(255,77,77,0.1);padding:10px;border-radius:15px">
                <span></span><span></span><span></span>
            </div>
        \`;
        messagesDiv.appendChild(typingDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function hideTyping() {
        const el = document.getElementById('typingIndicator');
        if (el) el.remove();
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
                    temperature: 0.2,
                    max_tokens: 2500
                })
            });

            if (!response.ok) throw new Error("Connection Error");

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;

            conversationHistory.push({ role: 'assistant', content: aiResponse });
            hideTyping();
            addMessage(aiResponse, 'ai');

        } catch (error) {
            hideTyping();
            addMessage(\`⚠️ خطا در ارتباط با سرور. لطفاً اتصال اینترنت خود را چک کنید.\`, 'ai');
        } finally {
            isTyping = false;
            sendBtn.disabled = false;
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


`,className:"w-html-embed"})]}),z=a=>{const{origin:t,pathname:s,search:i}=new URL(a);return`${t}${s}${i}`},P=c.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:s,url:i,pageMeta:r}=a,p=z(i),g=c.useMemo(()=>({imageLoader:o,assetBaseUrl:n,resources:s,breakpoints:f,onError:console.error}),[s]);return e.jsxs(b.Provider,{value:g,children:[e.jsx(u.Provider,{value:i,children:e.jsx(P,{pageKey:p,system:t})}),e.jsx(m,{url:i,pageMeta:r,siteName:l,imageLoader:o,assetBaseUrl:n}),e.jsx(x,{children:r.title})]})},M=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${n}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),_={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-64/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-64/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{_ as configValuesSerialized};
