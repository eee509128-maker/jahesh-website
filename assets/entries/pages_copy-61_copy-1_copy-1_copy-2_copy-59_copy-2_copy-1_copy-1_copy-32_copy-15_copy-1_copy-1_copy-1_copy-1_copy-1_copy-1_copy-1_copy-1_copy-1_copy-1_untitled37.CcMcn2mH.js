import{j as e,r as d,a as r,i,R as m,b,P as u,c as x,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as l}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=o=>e.jsxs("body",{className:"w-element",children:[e.jsx(l,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>دستیار انگل‌شناسی بندپایان</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&amp;family=Cinzel:wght@400;600&amp;display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #050a05;
    --surface: #0e140e;
    --surface2: #141f14;
    --border: rgba(100, 180, 100, 0.18);
    --gold1: #6abf69; /* تم سبز علمی */
    --gold2: #8fdf82;
    --gold3: #2e7d32;
    --ember: #bf8f69;
    --teal: #2ab8c8;
    --text: #e8ede8;
    --text-muted: #809080;
    --text-dim: #546054;
    --user-bubble: linear-gradient(135deg, #16301a 0%, #0f2512 100%);
    --bot-bubble: linear-gradient(135deg, #101510 0%, #081a08 100%);
    --radius: 18px;
    --radius-sm: 10px;
    --shadow: 0 8px 40px rgba(0,0,0,0.6);
    --glow-gold: 0 0 20px rgba(106, 191, 105, 0.25);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { height: 100%; }
  body {
    height: 100%;
    font-family: 'Vazirmatn', sans-serif;
    background: var(--bg);
    color: var(--text);
  }

  #bg-canvas {
    position: fixed; inset: 0; z-index: 0;
    pointer-events: none;
  }

  body::after {
    content: '';
    position: fixed; inset: 0; z-index: 1;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.35;
    pointer-events: none;
  }

  #wrapper {
    position: relative; z-index: 2;
    display: flex;
    flex-direction: column;
    height: 100dvh;
    max-width: 820px;
    margin: 0 auto;
    padding: 12px;
  }

  #wrapper::before {
    content: '';
    position: absolute; inset: -1px;
    border-radius: 26px;
    background: linear-gradient(145deg, rgba(106,191,105,0.3) 0%, rgba(46,125,50,0.1) 50%, rgba(42,184,200,0.15) 100%);
    z-index: -1;
    filter: blur(8px);
    opacity: 0.6;
  }

  #chat-box {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border-radius: 22px;
    border: 1px solid var(--border);
    overflow: hidden;
    box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,0.05);
    position: relative;
  }

  #header {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    background: linear-gradient(180deg, rgba(10,20,10,0.95) 0%, rgba(14,28,14,0.9) 100%);
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
  }

  .avatar-wrap { position: relative; flex-shrink: 0; width: 48px; height: 48px; }
  .avatar-core {
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, var(--gold3), var(--gold1), var(--teal));
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
    box-shadow: 0 0 0 2px rgba(106,191,105,0.3), 0 0 20px rgba(106,191,105,0.2);
    animation: avatarPulse 3s ease-in-out infinite;
    position: relative; z-index: 2;
    color: #fff;
  }
  @keyframes avatarPulse {
    0%, 100% { box-shadow: 0 0 0 2px rgba(106,191,105,0.3), 0 0 20px rgba(106,191,105,0.2); }
    50% { box-shadow: 0 0 0 4px rgba(106,191,105,0.15), 0 0 35px rgba(106,191,105,0.35); }
  }

  .hdr-info { flex: 1; min-width: 0; }
  .hdr-name { font-family: 'Cinzel', serif; font-size: 15px; font-weight: 600; color: var(--gold2); letter-spacing: 0.08em; line-height: 1.2; }
  .badge-online { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; color: var(--text-muted); margin-top: 3px; }
  .badge-dot {
    width: 7px; height: 7px; border-radius: 50%; background: #4adc7a;
    box-shadow: 0 0 6px rgba(74,220,122,0.6);
    animation: dotPulse 2s ease-in-out infinite;
  }

  #msgs-wrap {
    flex: 1;
    min-height: 0;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  #messages {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    scroll-behavior: smooth;
  }

  #messages::-webkit-scrollbar { width: 4px; }
  #messages::-webkit-scrollbar-track { background: transparent; }
  #messages::-webkit-scrollbar-thumb { background: rgba(106,191,105,0.2); border-radius: 4px; }

  .msg-row {
    display: flex; gap: 10px; align-items: flex-end;
    animation: msgIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    margin-bottom: 4px;
  }
  @keyframes msgIn {
    from { opacity: 0; transform: translateY(18px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .msg-row.user { flex-direction: row; }
  .msg-row.bot  { flex-direction: row-reverse; }

  .msg-avatar {
    width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center; font-size: 16px;
  }
  .msg-row.user .msg-avatar { background: linear-gradient(135deg, #1e3a2a, #2a5030); border: 1px solid rgba(100,200,120,0.3); color: #a0e0a0; }
  .msg-row.bot  .msg-avatar { background: linear-gradient(135deg, var(--gold3), var(--gold1)); border: 1px solid rgba(106,191,105,0.3); color: #fff; font-size: 14px; }

  .msg-col { display: flex; flex-direction: column; gap: 3px; max-width: 75%; min-width: 60px; }
  .msg-row.user .msg-col { align-items: flex-end; }
  .msg-row.bot  .msg-col { align-items: flex-start; }

  .bubble {
    padding: 11px 15px; border-radius: var(--radius);
    line-height: 1.7; font-size: 14px; word-break: break-word; position: relative;
  }
  .msg-row.user .bubble {
    background: var(--user-bubble); border: 1px solid rgba(100,200,120,0.2);
    border-bottom-right-radius: 4px; color: #d8f0d8; text-align: right;
  }
  .msg-row.bot .bubble {
    background: var(--bot-bubble); border: 1px solid rgba(106,191,105,0.15);
    border-bottom-left-radius: 4px; color: var(--text); text-align: right;
  }
  .msg-meta { font-size: 10px; color: var(--text-dim); padding: 0 4px; }
  .msg-row.user .msg-meta { text-align: left; }
  .msg-row.bot  .msg-meta { text-align: right; }

  .typing-bubble { display: flex; align-items: center; gap: 5px; padding: 12px 16px; }
  .typing-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--gold1); animation: typingBounce 1.2s ease-in-out infinite; opacity: 0.6; }
  .typing-dot:nth-child(2) { animation-delay: 0.2s; background: var(--ember); }
  .typing-dot:nth-child(3) { animation-delay: 0.4s; background: var(--teal); }
  @keyframes typingBounce {
    0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
    40% { transform: translateY(-8px); opacity: 1; }
  }

  #welcome {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 20px; padding: 30px 20px; text-align: center;
  }
  .welcome-gem {
    width: 72px; height: 72px; border-radius: 20px;
    background: linear-gradient(135deg, var(--gold3), var(--gold1), var(--teal));
    display: flex; align-items: center; justify-content: center; font-size: 32px;
    box-shadow: 0 0 0 1px rgba(106,191,105,0.3), 0 0 40px rgba(106,191,105,0.2);
    animation: gemFloat 4s ease-in-out infinite;
    color: #fff;
  }
  @keyframes gemFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(3deg); }
  }
  .welcome-title { font-family: 'Cinzel', serif; font-size: 20px; font-weight: 600; color: var(--gold2); }
  .welcome-sub { font-size: 14px; color: var(--text-muted); max-width: 400px; line-height: 1.7; }
  .prompts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; max-width: 500px; }
  .prompt-btn {
    background: rgba(106,191,105,0.05); border: 1px solid rgba(106,191,105,0.15);
    border-radius: var(--radius-sm); padding: 12px 14px; color: var(--text-muted);
    font-family: 'Vazirmatn', sans-serif; font-size: 12.5px; cursor: pointer;
    text-align: right; line-height: 1.5; transition: all 0.2s;
    display: flex; gap: 8px; align-items: flex-start;
  }
  .prompt-btn:hover {
    background: rgba(106,191,105,0.1); border-color: rgba(106,191,105,0.35);
    color: var(--text); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }

  #input-area {
    padding: 12px 14px;
    background: rgba(10,20,10,0.95);
    border-top: 1px solid var(--border);
    flex-shrink: 0;
    position: relative; z-index: 4;
  }

  .input-shell {
    display: flex; align-items: flex-end; gap: 10px;
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 8px 10px;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .input-shell:focus-within {
    border-color: rgba(106,191,105,0.45);
    box-shadow: 0 0 0 3px rgba(106,191,105,0.08), var(--glow-gold);
  }

  #user-input {
    flex: 1; background: transparent; border: none; outline: none;
    color: var(--text); font-family: 'Vazirmatn', sans-serif;
    font-size: 14px; line-height: 1.6; resize: none;
    max-height: 120px; min-height: 38px; overflow-y: auto;
    direction: rtl; text-align: right; padding: 4px;
    scrollbar-width: none; align-self: center;
  }
  
  #send-btn {
    flex-shrink: 0; width: 42px; height: 42px;
    border-radius: 12px; border: none; cursor: pointer;
    background: linear-gradient(135deg, var(--gold3), var(--gold1) 60%, var(--teal));
    color: #fff; display: flex; align-items: center; justify-content: center;
    font-size: 17px;
    transition: transform 0.18s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
    box-shadow: 0 3px 12px rgba(106,191,105,0.25);
  }
  #send-btn:hover { transform: scale(1.1); box-shadow: 0 6px 22px rgba(106,191,105,0.45); }
  
  .input-footer { display: flex; justify-content: space-between; align-items: center; padding: 5px 6px 0; }
  .input-hint { font-size: 11px; color: var(--text-dim); }
  #char-count { font-size: 11px; color: var(--text-dim); }

  @media (max-width: 500px) {
    #wrapper { padding: 0; }
    #chat-box { border-radius: 0; }
    .prompts-grid { grid-template-columns: 1fr; }
  }
</style>



<canvas id="bg-canvas"></canvas>

<div id="wrapper">
  <div id="chat-box">

    <div id="header">
      <div class="avatar-wrap">
        <div class="avatar-core">🦟</div>
      </div>
      <div class="hdr-info">
        <div class="hdr-name">Entomology AI</div>
        <div class="badge-online">
          <span class="badge-dot"></span>
          <span>دستیار انگل‌شناسی بندپایان</span>
        </div>
      </div>
    </div>

    <div id="msgs-wrap">
      <div id="messages">
        <div id="welcome">
          <div class="welcome-gem">🔬</div>
          <div class="welcome-title">دستیار تخصصی انگل‌شناسی</div>
          <div class="welcome-sub">من فقط در زمینه بندپایان، حشرات ناقل، کنه‌ها و بیماری‌های مرتبط پاسخگو هستم.</div>
          <div class="prompts-grid">
            <button class="prompt-btn" onclick="usePrompt(this)">
              <span>🦠</span>
              <span>تفاوت کنه سخت و نرم را توضیح بده</span>
            </button>
            <button class="prompt-btn" onclick="usePrompt(this)">
              <span>🦟</span>
              <span>چرخه زندگی پشه آنوفل چگونه است؟</span>
            </button>
            <button class="prompt-btn" onclick="usePrompt(this)">
              <span>🩺</span>
              <span>بیماری‌های منتقل شده توسط کک‌ها کدامند؟</span>
            </button>
            <button class="prompt-btn" onclick="usePrompt(this)">
              <span>🐜</span>
              <span>اهمیت پزشکی شپش سر و بدن چیست؟</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="input-area">
      <div class="input-shell">
        <button id="send-btn" onclick="sendMsg()" title="ارسال">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
        <textarea id="user-input" rows="1" placeholder="سوال خود درباره انگل‌شناسی را بپرسید..." oninput="autoResize(this)" onkeydown="handleKey(event)"></textarea>
      </div>
      <div class="input-footer">
        <span class="input-hint">تخصصی برای دانشجویان و پژوهشگران</span>
      </div>
    </div>

  </div>
</div>

<script>
// آدرس API شما
const WORKER_URL = "https://twilight-moon-aa56.eee509128.workers.dev/";

// دستورالعمل سیستمی برای محدود کردن هوش مصنوعی
const SYSTEM_PROMPT = \`
شما یک استاد متخصص و دستیار هوشمند در زمینه "انگل‌شناسی بندپایان" (Medical Entomology & Arthropod Parasitology) هستید.
دستورالعمل‌های شما:
1. تنها به سوالاتی پاسخ دهید که مرتبط به بندپایان، حشرات، کنه‌ها (Ticks/Mites)، و بیماری‌های منتقل شده توسط آن‌ها (Vector-borne diseases) باشد.
2. اگر سوال کاربر درباره برنامه‌نویسی، آشپزی، سیاست یا هر موضوع دیگری غیر از انگل‌شناسی بود، مودبانه پاسخ دهید: "من فقط دستیار تخصصی انگل‌شناسی بندپایان هستم و نمی‌توانم به این سوال پاسخ دهم."
3. پاسخ‌ها باید علمی، دقیق و مناسب دانشجویان پزشکی و انگل‌شناسی باشد.
4. پاسخ‌ها را به زبان فارسی روان بنویسید.
\`;

// بک‌گراند گرافیکی (سبز و علمی)
(function() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H;
  const orbs = [
    { x: 0.2, y: 0.3, r: 300, color: [106,191,105], speed: 0.0003 }, // سبز روشن
    { x: 0.8, y: 0.7, r: 350, color: [46,125,50],   speed: 0.0002 }, // سبز تیره
    { x: 0.6, y: 0.2, r: 280, color: [42,184,200],  speed: 0.00025 }, // فیروزه‌ای
    { x: 0.1, y: 0.8, r: 320, color: [140,160,80],  speed: 0.00018 }, // زیتونی
  ];
  let t = 0;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  function draw() {
    t++;
    ctx.clearRect(0, 0, W, H);
    orbs.forEach((orb, i) => {
      const ox = (orb.x + Math.sin(t * orb.speed + i) * 0.15) * W;
      const oy = (orb.y + Math.cos(t * orb.speed * 0.7 + i) * 0.12) * H;
      const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
      const [r,g,b] = orb.color;
      grad.addColorStop(0, \`rgba(\${r},\${g},\${b},0.07)\`);
      grad.addColorStop(1, \`rgba(\${r},\${g},\${b},0)\`);
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(ox, oy, orb.r, 0, Math.PI * 2); ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener('resize', resize);
  draw();
})();

let isLoading = false;

function fmtTime() {
  return new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
}

window.usePrompt = function(btn) {
  const text = btn.querySelector('span:last-child').textContent.trim();
  const input = document.getElementById('user-input');
  input.value = text;
  autoResize(input);
  input.focus();
};

function appendMsg(role, text, isError = false) {
  const welcome = document.getElementById('welcome');
  if (welcome) welcome.remove();

  const msgs = document.getElementById('messages');
  const row = document.createElement('div');
  row.className = 'msg-row ' + (role === 'user' ? 'user' : 'bot');

  const av = document.createElement('div');
  av.className = 'msg-avatar';
  av.textContent = role === 'user' ? '👤' : '🦟';

  const col = document.createElement('div');
  col.className = 'msg-col';

  const bub = document.createElement('div');
  bub.className = 'bubble' + (isError ? ' error-bubble' : '');
  bub.innerHTML = text.replace(/\\n/g, '<br>');

  const meta = document.createElement('div');
  meta.className = 'msg-meta';
  meta.textContent = fmtTime();

  col.appendChild(bub);
  col.appendChild(meta);
  row.appendChild(av);
  row.appendChild(col);
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
  return bub;
}

function showTyping() {
  const welcome = document.getElementById('welcome');
  if (welcome) welcome.remove();
  const msgs = document.getElementById('messages');
  const row = document.createElement('div');
  row.className = 'msg-row bot'; row.id = 'typing-row';
  const av = document.createElement('div');
  av.className = 'msg-avatar'; av.textContent = '🦟';
  const col = document.createElement('div'); col.className = 'msg-col';
  const bub = document.createElement('div'); bub.className = 'bubble';
  bub.innerHTML = '<div class="typing-bubble"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>';
  col.appendChild(bub); row.appendChild(av); row.appendChild(col);
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const tr = document.getElementById('typing-row');
  if (tr) tr.remove();
}

async function sendMsg() {
  if (isLoading) return;
  
  const input = document.getElementById('user-input');
  const text = input.value.trim();
  if (!text) return;

  // نمایش پیام کاربر
  appendMsg('user', text);
  input.value = '';
  autoResize(input);

  isLoading = true;
  document.getElementById('send-btn').disabled = true;
  showTyping();

  // ترکیب پرامپت سیستمی با پیام کاربر برای ارسال به API
  // این کار باعث می‌شود هوش مصنوعی فکر کند دستورالعمل بخشی از ساختار گفتگو است
  const finalPayload = SYSTEM_PROMPT + "\\n\\nUser Question: " + text;

  try {
    const resp = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: finalPayload }),
    });

    removeTyping();

    if (!resp.ok) {
      throw new Error("خطا در ارتباط با سرور");
    }

    const data = await resp.json();
    const reply = data.reply || "پاسخی دریافت نشد.";
    
    appendMsg('bot', reply);

  } catch (err) {
    removeTyping();
    appendMsg('bot', "خطا: " + err.message, true);
  }

  isLoading = false;
  document.getElementById('send-btn').disabled = false;
  document.getElementById('user-input').focus();
}
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



<!-- محتوای اصلی سایت شما -->
<h1>خوش آمدید به وب‌سایت من</h1>
<p>اینجا محتوای اصلی سایت قرار می‌گیره...</p>

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


`,className:"w-html-embed"})]}),z=o=>{const{origin:t,pathname:n,search:a}=new URL(o);return`${t}${n}${a}`},E=d.memo(({pageKey:o,system:t})=>e.jsx(k,{system:t},o),(o,t)=>o.pageKey===t.pageKey),P=({data:o})=>{const{system:t,resources:n,url:a,pageMeta:s}=o,c=z(a),g=d.useMemo(()=>({imageLoader:i,assetBaseUrl:r,resources:n,breakpoints:h,onError:console.error}),[n]);return e.jsxs(m.Provider,{value:g,children:[e.jsx(b.Provider,{value:a,children:e.jsx(E,{pageKey:c,system:t})}),e.jsx(u,{url:a,pageMeta:s,siteName:p,imageLoader:i,assetBaseUrl:r}),e.jsx(x,{children:s.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),T=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${r}${v}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-61/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-61/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{R as configValuesSerialized};
