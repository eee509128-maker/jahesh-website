import{j as e,r as c,a as n,i as r,R as u,b,P as m,c as x,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as d}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=a=>e.jsxs("body",{className:"w-element",children:[e.jsx(d,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی تخصصی قارچ‌شناسی پزشکی</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1a0a2e 0%, #000000 100%);
            min-height: 100vh;
            color: #e0e0e0;
            overflow-x: hidden;
            direction: rtl;
        }

        /* افکت ذرات معلق (هاگ قارچ) */
        .particles {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;
        }
        .particle {
            position: absolute; width: 3px; height: 3px; border-radius: 50%;
            animation: float 8s infinite; opacity: 0.4;
        }
        .particle:nth-child(odd) { background: #d400ff; }
        .particle:nth-child(even) { background: #00ffcc; }
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
            50% { transform: translateY(-40px) rotate(180deg); opacity: 0.8; }
        }

        .container { position: relative; z-index: 1; max-width: 1000px; margin: 0 auto; padding: 20px; }

        /* هدر */
        .header { text-align: center; padding: 30px 20px; margin-bottom: 20px; }
        .header-icon { font-size: 4.5rem; display: block; margin-bottom: 10px; animation: pulse 3s infinite; }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        
        .header h1 {
            font-size: 2rem;
            background: linear-gradient(90deg, #d400ff, #ffcc00, #00ffcc);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
            margin-bottom: 10px;
        }
        .header p { color: #aaa; font-size: 0.95rem; }

        .badges { display: flex; justify-content: center; gap: 10px; margin-top: 15px; flex-wrap: wrap; }
        .badge {
            background: rgba(212, 0, 255, 0.15); border: 1px solid rgba(212, 0, 255, 0.4);
            color: #e0aaff; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: bold;
        }

        /* نوار موضوعات */
        .topics-bar {
            display: flex; flex-wrap: wrap; gap: 8px; padding: 15px;
            background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(212, 0, 255, 0.2);
            border-radius: 15px; margin-bottom: 20px;
        }
        .topic-chip {
            background: rgba(212, 0, 255, 0.1); border: 1px solid rgba(212, 0, 255, 0.3);
            color: #d400ff; padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; cursor: pointer; transition: 0.3s;
        }
        .topic-chip:hover { background: rgba(212, 0, 255, 0.25); transform: translateY(-2px); }

        /* کادر چت */
        .chat-container {
            background: rgba(20, 10, 30, 0.7); border: 1px solid rgba(212, 0, 255, 0.2);
            border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.6);
            backdrop-filter: blur(10px);
        }

        .chat-header {
            background: linear-gradient(135deg, rgba(212, 0, 255, 0.1), rgba(0, 0, 0, 0));
            padding: 15px 20px; border-bottom: 1px solid rgba(212, 0, 255, 0.1);
            display: flex; align-items: center; gap: 10px;
        }
        .status-dot { width: 10px; height: 10px; background: #d400ff; border-radius: 50%; animation: blink 2s infinite; box-shadow: 0 0 10px #d400ff; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .chat-title { color: #e0aaff; font-size: 0.9rem; }

        #chatMessages { height: 500px; overflow-y: auto; padding: 20px; scroll-behavior: smooth; }
        #chatMessages::-webkit-scrollbar { width: 5px; }
        #chatMessages::-webkit-scrollbar-thumb { background: rgba(212, 0, 255, 0.3); border-radius: 3px; }

        .message { display: flex; gap: 12px; margin-bottom: 20px; animation: slideIn 0.3s ease; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .message.user { flex-direction: row-reverse; }

        .avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
        .avatar.ai { background: linear-gradient(135deg, #d400ff, #6a00ff); box-shadow: 0 0 15px rgba(212,0,255,0.4); }
        .avatar.user { background: linear-gradient(135deg, #ffcc00, #ff9900); color: #000; }

        .message-bubble { max-width: 80%; padding: 12px 16px; border-radius: 18px; font-size: 0.92rem; line-height: 1.8; text-align: right; }
        .message.ai .message-bubble {
            background: rgba(212, 0, 255, 0.08); border: 1px solid rgba(212, 0, 255, 0.2);
            color: #eee; border-radius: 4px 18px 18px 18px;
        }
        .message.user .message-bubble {
            background: rgba(255, 204, 0, 0.1); border: 1px solid rgba(255, 204, 0, 0.25);
            color: #eee; border-radius: 18px 4px 18px 18px;
        }

        .message-bubble strong { color: #d400ff; }
        .message-bubble em { color: #00ffcc; font-style: italic; } /* نام علمی */
        .message-bubble ul { margin: 8px 25px 8px 0; padding: 0; }
        .message-bubble li { margin-bottom: 4px; }
        .message-bubble h3 { color: #e0aaff; margin: 10px 0 5px; font-size: 1rem; }
        .message-bubble h4 { color: #d400ff; margin: 8px 0 4px; font-size: 0.9rem; }

        .input-area { padding: 20px; border-top: 1px solid rgba(212, 0, 255, 0.1); background: rgba(0,0,0,0.3); }
        .input-wrapper { display: flex; gap: 10px; align-items: flex-end; }
        #userInput {
            flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(212, 0, 255, 0.3);
            border-radius: 15px; padding: 12px; color: #fff; font-family: inherit; resize: none;
            min-height: 50px; outline: none; transition: 0.3s;
        }
        #userInput:focus { border-color: #d400ff; background: rgba(255,255,255,0.08); }
        #sendBtn {
            background: linear-gradient(135deg, #d400ff, #9900ff); border: none; border-radius: 15px;
            padding: 0 20px; height: 50px; font-size: 1.5rem; cursor: pointer; transition: 0.3s; color: #fff;
        }
        #sendBtn:hover { transform: scale(1.05); box-shadow: 0 0 20px rgba(212,0,255,0.5); }
        #sendBtn:disabled { opacity: 0.5; cursor: not-allowed; }

        .quick-questions { padding: 15px 20px; border-top: 1px solid rgba(212, 0, 255, 0.1); }
        .quick-btns { display: flex; flex-wrap: wrap; gap: 8px; }
        .quick-btn {
            background: rgba(255, 204, 0, 0.1); border: 1px solid rgba(255, 204, 0, 0.3);
            color: #ffcc00; padding: 6px 14px; border-radius: 10px; font-size: 0.8rem; cursor: pointer; transition: 0.3s;
        }
        .quick-btn:hover { background: rgba(255, 204, 0, 0.2); color: #fff; }

        .welcome-card {
            background: rgba(212, 0, 255, 0.05); border: 1px solid rgba(212, 0, 255, 0.2);
            border-radius: 15px; padding: 15px; margin-bottom: 20px; text-align: right;
        }

        .typing-indicator { display: flex; gap: 5px; padding: 10px; }
        .typing-indicator span {
            width: 8px; height: 8px; background: #d400ff; border-radius: 50%;
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
        <span class="header-icon">🍄</span>
        <h1>هوش مصنوعی تخصصی قارچ‌شناسی</h1>
        <p>سیستم هوشمند تخصصی در حوزه قارچ‌شناسی پزشکی (Medical Mycology)</p>
        <div class="badges">
            <span class="badge">Medical Mycology</span>
            <span class="badge">Fungal Infections</span>
            <span class="badge">Antifungals</span>
        </div>
    </div>

    <div class="topics-bar">
        <span style="color:#aaa;font-size:0.8rem;align-self:center">موضوعات:</span>
        <div class="topic-chip">🍄 درماتوفیت‌ها</div>
        <div class="topic-chip">🩸 کاندیدیازیس</div>
        <div class="topic-chip">🫁 آسپرژیلوزیس</div>
        <div class="topic-chip">💊 داروهای ضدقارچ</div>
        <div class="topic-chip">🔬 تشخیص آزمایشگاهی</div>
        <div class="topic-chip">🧬 ایمنی‌شناسی قارچ</div>
    </div>

    <div class="chat-container">
        <div class="chat-header">
            <div class="status-dot"></div>
            <span class="chat-title">دستیار تخصصی قارچ‌شناسی - آنلاین</span>
        </div>

        <div id="chatMessages">
            <div class="welcome-card">
                <h3>🍄 خوش آمدید به سیستم هوشمند قارچ‌شناسی</h3>
                <p>این سیستم به صورت <strong>کاملاً ایزوله و تخصصی</strong> فقط به سوالات مرتبط با قارچ‌های پزشکی، بیماری‌های قارچی، داروهای ضدقارچ و تشخیص آزمایشگاهی پاسخ می‌دهد.</p>
            </div>

            <div class="message ai">
                <div class="avatar ai">🍄</div>
                <div class="message-bubble">
                    سلام! من متخصص <strong>قارچ‌شناسی پزشکی</strong> هستم. 🎓<br><br>
                    حوزه فعالیت من شامل موارد زیر است:<br>
                    🍄 <strong>قارچ‌های سطحی و جلدی:</strong> کچلی‌ها (Tinea)، درماتوفیت‌ها<br>
                    🩸 <strong>قارچ‌های مخمری:</strong> کاندیدا، کریپتوکوکوس، مالاسزیا<br>
                    🫁 <strong>قارچ‌های فرصت‌طلب و سیستمیک:</strong> آسپرژیلوس، موکور، هیستوپلاسما<br>
                    🔬 <strong>تشخیص و درمان:</strong> محیط‌های کشت، رنگ‌آمیزی، داروهای آزول و پلی‌ان<br><br>
                    ⚠️ <em>من به سوالات غیرمرتبط با قارچ‌ها (مثل ویروس، باکتری، پزشکی عمومی یا مسائل متفرقه) پاسخ نمی‌دهم.</em><br>
                    سوال تخصصی خود را بپرسید!
                </div>
            </div>
        </div>

        <div class="quick-questions">
            <div class="quick-btns">
                <button class="quick-btn" onclick="askQuick('تفاوت کاندیدا آلبیکنس و نان-آلبیکنس چیست؟')">کاندیدا آلبیکنس</button>
                <button class="quick-btn" onclick="askQuick('علائم و تشخیص آزمایشگاهی آسپرژیلوزیس ریوی')">آسپرژیلوس ریوی</button>
                <button class="quick-btn" onclick="askQuick('مکانیسم اثر داروی آمفوتریسین B و فلوکونازول')">مکانیسم داروها</button>
                <button class="quick-btn" onclick="askQuick('انواع کچلی (Tinea) و عوامل ایجاد کننده آن‌ها')">انواع کچلی</button>
                <button class="quick-btn" onclick="askQuick('تست لوله زایا (Germ Tube) چیست؟')">تست جرم تیوب</button>
            </div>
        </div>

        <div class="input-area">
            <div class="input-wrapper">
                <button id="sendBtn" onclick="sendMessage()">➤</button>
                <textarea id="userInput" placeholder="سوال خود را درباره قارچ‌شناسی بپرسید..." rows="1" onkeydown="handleKeyDown(event)" oninput="autoResize(this)"></textarea>
            </div>
        </div>
    </div>

    <div class="footer">
        🍄 Medical Mycology Expert AI System
    </div>
</div>

<script>
    const API_KEY = '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'; 
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    // *** مغز متفکر سیستم: پرامپت محدود شده برای قارچ‌شناسی ***
    const SYSTEM_PROMPT = \`
    شما یک استاد تمام و متخصص برجسته در رشته "قارچ‌شناسی پزشکی" (Medical Mycology) هستید.

    ⛔ **قوانین محدودکننده (GUARDRAILS):**
    شما فقط و فقط مجاز به پاسخگویی در حیطه‌های زیر هستید. اگر کاربر سوالی خارج از این حیطه پرسید (حتی اگر علمی باشد مثل ویروس یا باکتری)، باید مودبانه **رد کنید**.

    ✅ **حیطه‌های مجاز:**
    1. **قارچ‌های بیماری‌زا:** درماتوفیت‌ها (Trichophyton, Microsporum, Epidermophyton)، مخمرها (Candida, Cryptococcus, Malassezia)، قارچ‌های رشته‌ای (Aspergillus, Mucor, Fusarium) و قارچ‌های دایمورف (Histoplasma, Coccidioides).
    2. **بیماری‌های قارچی (Mycoses):** کچلی‌ها (Tinea)، کاندیدیازیس، آسپرژیلوزیس، موکورمایکوزیس، مایستوما و...
    3. **تشخیص آزمایشگاهی:** نمونه‌گیری، رنگ‌آمیزی (KOH, Giemsa, PAS)، محیط‌های کشت (Sabouraud, Cornmeal)، تست‌های سرولوژی و مولکولی.
    4. **درمان ضدقارچی:** مکانیسم اثر داروها (آزول‌ها، پلی‌ان‌ها، اکینوکاندین‌ها)، مقاومت دارویی و عوارض جانبی.
    5. **مورفولوژی و اکولوژی:** ساختار هیف، اسپور، کلنی و چرخه زندگی قارچ‌ها.

    ❌ **حیطه‌های ممنوع:**
    - باکتری‌شناسی، ویروس‌شناسی، انگل‌شناسی (کرم و تک‌یاخته).
    - پزشکی عمومی بی ربط به قارچ.
    - ورزش، سیاست، آشپزی، برنامه نویسی و احوال‌پرسی عمومی.

    📝 **قوانین پاسخ‌دهی:**
    1. در صورت سوال نامرتبط، دقیقاً بنویسید: "⛔ من دستیار تخصصی قارچ‌شناسی هستم و فقط می‌توانم به سوالات مرتبط با عفونت‌های قارچی و مایکولوژی پاسخ دهم."
    2. نام‌های علمی (Scientific Names) را حتماً به لاتین و در پرانتز بنویسید (مثال: *Candida albicans*).
    3. پاسخ‌ها باید آکادمیک، دقیق و به زبان فارسی سلیس باشد.
    \`;

    let conversationHistory = [];
    let isTyping = false;

    // افکت ذرات
    function createParticles() {
        const container = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
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
        text = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
        text = text.replace(/\\*(.*?)\\*/g, '<em>$1</em>');
        text = text.replace(/^### (.*)/gm, '<h4 style="color:#d400ff">$1</h4>');
        text = text.replace(/^## (.*)/gm, '<h3 style="color:#e0aaff">$1</h3>');
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
            <div class="avatar ai">🍄</div>
            <div style="display:flex;align-items:center;gap:4px;background:rgba(212,0,255,0.1);padding:10px;border-radius:15px">
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
                    max_tokens: 2048
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


`,className:"w-html-embed"})]}),M=a=>{const{origin:t,pathname:s,search:i}=new URL(a);return`${t}${s}${i}`},z=c.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),T=({data:a})=>{const{system:t,resources:s,url:i,pageMeta:o}=a,p=M(i),g=c.useMemo(()=>({imageLoader:r,assetBaseUrl:n,resources:s,breakpoints:h,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:g,children:[e.jsx(b.Provider,{value:i,children:e.jsx(z,{pageKey:p,system:t})}),e.jsx(m,{url:i,pageMeta:o,siteName:l,imageLoader:r,assetBaseUrl:n}),e.jsx(x,{children:o.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),P=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${n}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-63/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-63/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{C as configValuesSerialized};
