import{j as e,r as l,a as r,i,R as m,b as g,P as u,c as b,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],C=a=>e.jsx("body",{className:"w-element",children:e.jsx(f,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>دستیار هوشمند با قابلیت تحلیل تصویر</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&amp;family=Cinzel:wght@400;600&amp;display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #07070f;
      --surface: #0e0e1c;
      --surface2: #13132a;
      --border: rgba(180,140,60,0.18);
      --gold1: #d4a843;
      --gold2: #f0c96a;
      --gold3: #a07830;
      --ember: #e8562a;
      --ember2: #ff7a52;
      --teal: #2ab8c8;
      --text: #ede8d8;
      --text-muted: #8a8070;
      --text-dim: #5a5448;
      --user-bubble: linear-gradient(135deg, #1a1630 0%, #0f1225 100%);
      --bot-bubble: linear-gradient(135deg, #151210 0%, #1a1408 100%);
      --radius: 18px;
      --radius-sm: 10px;
      --shadow: 0 8px 40px rgba(0,0,0,0.6);
      --glow-gold: 0 0 20px rgba(212,168,67,0.25);
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
    body::before {
      content: '';
      position: fixed; inset: 0; z-index: 1;
      background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px);
      pointer-events: none;
    }
    #wrapper {
      position: relative; z-index: 2;
      display: flex;
      flex-direction: column;
      height: 100dvh;
      max-width: 880px;
      margin: 0 auto;
      padding: 12px;
    }
    #wrapper::before {
      content: '';
      position: absolute; inset: -1px;
      border-radius: 26px;
      background: linear-gradient(145deg, rgba(212,168,67,0.3) 0%, rgba(232,86,42,0.1) 50%, rgba(42,184,200,0.15) 100%);
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
    #chat-box::before {
      content: '';
      position: absolute; top: 0; left: 5%; right: 5%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--gold1), var(--ember), var(--teal), transparent);
      opacity: 0.6;
      animation: shimmer 4s ease-in-out infinite;
      z-index: 1;
    }
    @keyframes shimmer {
      0%, 100% { opacity: 0.3; transform: scaleX(0.6); }
      50% { opacity: 0.8; transform: scaleX(1); }
    }
    #header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px 20px;
      background: linear-gradient(180deg, rgba(20,18,10,0.95) 0%, rgba(14,14,28,0.9) 100%);
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
    }
    .hdr-ornament {
      position: absolute;
      left: 20px; top: 50%;
      transform: translateY(-50%);
      display: flex; flex-direction: column; gap: 4px; opacity: 0.4;
    }
    .hdr-ornament span { display: block; height: 1px; background: linear-gradient(90deg, var(--gold1), transparent); }
    .hdr-ornament span:nth-child(1) { width: 40px; }
    .hdr-ornament span:nth-child(2) { width: 28px; }
    .hdr-ornament span:nth-child(3) { width: 16px; }
    .avatar-wrap {
      position: relative;
      flex-shrink: 0;
      width: 48px;
      height: 48px;
    }
    .avatar-core {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--gold3), var(--gold1), var(--ember));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      box-shadow: 0 0 0 2px rgba(212,168,67,0.3), 0 0 20px rgba(212,168,67,0.2);
      animation: avatarPulse 3s ease-in-out infinite;
      position: relative;
      z-index: 2;
    }
    @keyframes avatarPulse {
      0%, 100% { box-shadow: 0 0 0 2px rgba(212,168,67,0.3), 0 0 20px rgba(212,168,67,0.2); }
      50% { box-shadow: 0 0 0 4px rgba(212,168,67,0.15), 0 0 35px rgba(212,168,67,0.35); }
    }
    .orbit-ring {
      position: absolute;
      inset: -5px;
      border-radius: 50%;
      border: 1px solid transparent;
      animation: orbitSpin 6s linear infinite;
    }
    .orbit-ring:nth-child(2) { border-top-color: rgba(212,168,67,0.5); border-left-color: rgba(212,168,67,0.2); }
    .orbit-ring:nth-child(3) { inset: -9px; border-bottom-color: rgba(232,86,42,0.4); border-right-color: rgba(232,86,42,0.15); animation-direction: reverse; animation-duration: 9s; }
    @keyframes orbitSpin { to { transform: rotate(360deg); } }
    .hdr-info { flex: 1; min-width: 0; }
    .hdr-name { font-family: 'Cinzel', serif; font-size: 15px; font-weight: 600; color: var(--gold2); letter-spacing: 0.08em; line-height: 1.2; }
    .badge-online { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; color: var(--text-muted); margin-top: 3px; }
    .badge-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #4adc7a;
      box-shadow: 0 0 6px rgba(74,220,122,0.6);
      animation: dotPulse 2s ease-in-out infinite;
    }
    @keyframes dotPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.8); }
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
    #messages::-webkit-scrollbar-thumb { background: rgba(212,168,67,0.2); border-radius: 4px; }
    #messages::-webkit-scrollbar-thumb:hover { background: rgba(212,168,67,0.4); }
    .scroll-fade {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40px;
      background: linear-gradient(to top, var(--surface), transparent);
      pointer-events: none;
      z-index: 3;
    }
    .msg-row {
      display: flex;
      gap: 10px;
      align-items: flex-end;
      animation: msgIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
      margin-bottom: 4px;
    }
    @keyframes msgIn {
      from { opacity: 0; transform: translateY(18px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .msg-row.user { flex-direction: row; }
    .msg-row.bot { flex-direction: row-reverse; }
    .msg-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    .msg-row.user .msg-avatar { background: linear-gradient(135deg, #1e1a3a, #2a1f50); border: 1px solid rgba(120,100,200,0.3); color: #a090e0; }
    .msg-row.bot .msg-avatar { background: linear-gradient(135deg, var(--gold3), var(--gold1)); border: 1px solid rgba(212,168,67,0.3); color: #fff; font-size: 14px; }
    .msg-col { display: flex; flex-direction: column; gap: 6px; max-width: 78%; min-width: 60px; }
    .msg-row.user .msg-col { align-items: flex-end; }
    .msg-row.bot .msg-col { align-items: flex-start; }
    .bubble {
      padding: 12px 16px;
      border-radius: var(--radius);
      line-height: 1.7;
      font-size: 14px;
      word-break: break-word;
      position: relative;
      direction: rtl;
      text-align: right;
      unicode-bidi: embed;
    }
    .msg-row.user .bubble {
      background: var(--user-bubble);
      border: 1px solid rgba(120,100,200,0.2);
      border-bottom-right-radius: 4px;
      color: #d8d0f0;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04);
    }
    .msg-row.bot .bubble {
      background: var(--bot-bubble);
      border: 1px solid rgba(212,168,67,0.15);
      border-bottom-left-radius: 4px;
      color: var(--text);
      box-shadow: 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03);
    }
    .msg-row.bot .bubble::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent);
    }
    .image-container {
      margin: 8px 0;
      max-width: 100%;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(212,168,67,0.2);
      background: rgba(0,0,0,0.2);
      position: relative;
    }
    .image-preview {
      max-width: 100%;
      max-height: 300px;
      display: block;
      margin: 0 auto;
      object-fit: contain;
    }
    .image-info {
      padding: 8px 12px;
      background: rgba(0,0,0,0.3);
      font-size: 12px;
      color: var(--text-muted);
      border-top: 1px solid rgba(212,168,67,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .remove-image {
      background: rgba(232,86,42,0.15);
      border: 1px solid rgba(232,86,42,0.3);
      color: var(--ember2);
      border-radius: 6px;
      padding: 3px 8px;
      font-size: 11px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .remove-image:hover {
      background: rgba(232,86,42,0.25);
    }
    .msg-meta {
      font-size: 11px;
      color: var(--text-dim);
      padding: 0 4px;
    }
    .msg-row.user .msg-meta { text-align: left; }
    .msg-row.bot .msg-meta { text-align: right; }
    .typing-bubble {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 12px 16px;
    }
    .typing-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--gold1);
      animation: typingBounce 1.2s ease-in-out infinite;
      opacity: 0.6;
    }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; background: var(--ember); }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; background: var(--teal); }
    @keyframes typingBounce {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
      40% { transform: translateY(-8px); opacity: 1; }
    }
    #welcome {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 30px 20px;
      text-align: center;
    }
    .welcome-gem {
      width: 72px;
      height: 72px;
      border-radius: 20px;
      background: linear-gradient(135deg, var(--gold3), var(--gold1), var(--ember));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      box-shadow: 0 0 0 1px rgba(212,168,67,0.3), 0 0 40px rgba(212,168,67,0.2);
      animation: gemFloat 4s ease-in-out infinite;
    }
    @keyframes gemFloat {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(3deg); }
    }
    .welcome-title { font-family: 'Cinzel', serif; font-size: 20px; font-weight: 600; color: var(--gold2); }
    .welcome-sub { font-size: 14px; color: var(--text-muted); max-width: 400px; line-height: 1.7; }
    .prompts-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      width: 100%;
      max-width: 520px;
    }
    .prompt-btn {
      background: rgba(212,168,67,0.05);
      border: 1px solid rgba(212,168,67,0.15);
      border-radius: var(--radius-sm);
      padding: 12px 14px;
      color: var(--text-muted);
      font-family: 'Vazirmatn', sans-serif;
      font-size: 12.5px;
      cursor: pointer;
      text-align: right;
      line-height: 1.5;
      transition: all 0.2s;
      display: flex;
      gap: 8px;
      align-items: flex-start;
    }
    .prompt-btn:hover {
      background: rgba(212,168,67,0.1);
      border-color: rgba(212,168,67,0.35);
      color: var(--text);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    }
    .prompt-icon { font-size: 16px; flex-shrink: 0; }
    #input-area {
      padding: 12px 14px;
      background: rgba(10,10,20,0.95);
      border-top: 1px solid var(--border);
      flex-shrink: 0;
      position: relative;
      z-index: 4;
    }
    .input-shell {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 8px 10px;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    .input-shell:focus-within {
      border-color: rgba(212,168,67,0.45);
      box-shadow: 0 0 0 3px rgba(212,168,67,0.08), var(--glow-gold);
    }
    #user-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: var(--text);
      font-family: 'Vazirmatn', sans-serif;
      font-size: 14px;
      line-height: 1.6;
      resize: none;
      max-height: 120px;
      min-height: 38px;
      overflow-y: auto;
      direction: rtl;
      text-align: right;
      padding: 4px;
      scrollbar-width: none;
      align-self: center;
    }
    #user-input::-webkit-scrollbar { display: none; }
    #user-input::placeholder { color: var(--text-dim); }
    .upload-btn {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
      border-radius: 12px;
      border: 1px solid rgba(42,184,200,0.3);
      background: rgba(42,184,200,0.08);
      color: var(--teal);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      cursor: pointer;
      transition: all 0.2s;
      order: 2;
    }
    .upload-btn:hover {
      background: rgba(42,184,200,0.15);
      border-color: rgba(42,184,200,0.5);
      transform: scale(1.05);
    }
    .upload-btn.has-image {
      background: rgba(232,86,42,0.1);
      border-color: rgba(232,86,42,0.4);
      color: var(--ember2);
    }
    #image-input {
      display: none;
    }
    #send-btn {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      background: linear-gradient(135deg, var(--gold3), var(--gold1) 60%, var(--ember));
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      transition: transform 0.18s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s, filter 0.2s;
      box-shadow: 0 3px 12px rgba(212,168,67,0.25);
      position: relative;
      overflow: hidden;
      order: 1;
    }
    #send-btn::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
      opacity: 0;
      transition: opacity 0.2s;
    }
    #send-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 22px rgba(212,168,67,0.45);
      filter: brightness(1.1);
    }
    #send-btn:hover::after { opacity: 1; }
    #send-btn:active { transform: scale(0.93); }
    #send-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
    #send-btn svg {
      transform: scaleX(-1);
      transition: transform 0.2s;
    }
    #send-btn:hover svg { transform: scaleX(-1) translateX(-2px); }
    .input-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 6px 0;
    }
    .input-hint {
      font-size: 11px;
      color: var(--text-dim);
    }
    #char-count {
      font-size: 11px;
      color: var(--text-dim);
      font-variant-numeric: tabular-nums;
      transition: color 0.3s;
    }
    #char-count.warn { color: var(--ember); }
    .error-bubble {
      background: rgba(232,86,42,0.08) !important;
      border-color: rgba(232,86,42,0.25) !important;
      color: #ffaa88 !important;
    }
    .model-switcher {
      display: flex;
      gap: 8px;
      margin-top: 8px;
      flex-wrap: wrap;
    }
    .model-btn {
      background: rgba(212,168,67,0.05);
      border: 1px solid rgba(212,168,67,0.2);
      border-radius: 8px;
      padding: 5px 10px;
      font-size: 11px;
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.2s;
    }
    .model-btn.active {
      background: rgba(212,168,67,0.15);
      border-color: var(--gold1);
      color: var(--gold2);
      font-weight: 500;
    }
    @media (max-width: 600px) {
      #wrapper { padding: 8px; max-width: 100%; }
      #chat-box { border-radius: 16px; }
      .prompts-grid { grid-template-columns: 1fr; }
      .image-preview { max-height: 200px; }
      .welcome-sub { font-size: 13px; padding: 0 10px; }
    }
  </style>


  <canvas id="bg-canvas"></canvas>
  <div id="wrapper">
    <div id="chat-box">
      <div id="header">
        <div class="avatar-wrap">
          <div class="orbit-ring"></div>
          <div class="orbit-ring"></div>
          <div class="avatar-core">🔮</div>
        </div>
        <div class="hdr-info">
          <div class="hdr-name">دستیار هوشمند با تحلیل تصویر</div>
          <div class="badge-online">
            <span class="badge-dot"></span>
            <span>آنلاین · پشتیبانی از متن و تصویر</span>
          </div>
        </div>
        <div class="hdr-ornament">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div id="msgs-wrap">
        <div id="messages">
          <div id="welcome">
            <div class="welcome-gem">👁️</div>
            <div class="welcome-title">خوش آمدید! تصاویر خود را بارگذاری کنید</div>
            <div class="welcome-sub">
              اکنون می‌توانید تصاویر را آپلود کرده و درباره آن‌ها سوال بپرسید.
              <br>مدل GPT-4o Vision قادر به تحلیل تصاویر، تشخیص اشیاء، خواندن متن و توصیف صحنه‌ها می‌باشد.
            </div>
            <div class="model-switcher">
              <div class="model-btn active" data-model="openai/gpt-4o">GPT-4o Vision</div>
              <div class="model-btn" data-model="mistralai/mistral-7b-instruct">Mistral 7B</div>
              <div class="model-btn" data-model="meta-llama/llama-3.1-8b-instruct">Llama 3.1</div>
            </div>
            <div class="prompts-grid">
              <button class="prompt-btn" onclick="usePrompt(this)">
                <span class="prompt-icon">🖼️</span>
                <span>این تصویر را توصیف کن (پس از آپلود تصویر)</span>
              </button>
              <button class="prompt-btn" onclick="usePrompt(this)">
                <span class="prompt-icon">🔍</span>
                <span>چه اشیایی در این عکس وجود دارد؟</span>
              </button>
              <button class="prompt-btn" onclick="usePrompt(this)">
                <span class="prompt-icon">📝</span>
                <span>اگر متنی در تصویر هست، آن را بخوان</span>
              </button>
              <button class="prompt-btn" onclick="usePrompt(this)">
                <span class="prompt-icon">🎨</span>
                <span>ایده‌های خلاقانه بر اساس این تصویر بده</span>
              </button>
            </div>
          </div>
        </div>
        <div class="scroll-fade"></div>
      </div>
      <div id="input-area">
        <div class="input-shell">
          <textarea id="user-input" rows="1" placeholder="پیام خود را بنویسید یا یک تصویر آپلود کنید..." maxlength="2000" oninput="autoResize(this); updateCharCount(this)" onkeydown="handleKey(event)"></textarea>
          <button id="upload-btn" class="upload-btn" onclick="document.getElementById('image-input').click()" title="بارگذاری تصویر">
            📷
          </button>
          <input type="file" id="image-input" accept="image/*" onchange="handleImageUpload(event)" style="display: none;">
          <button id="send-btn" onclick="sendMsg()" title="ارسال (Enter)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <div class="input-footer">
          <div class="input-hint" id="file-info">فایل‌های مجاز: JPG, PNG, GIF, WebP (حداکثر 5MB)</div>
          <span id="char-count">0 / 2000</span>
        </div>
      </div>
    </div>
  </div>

  <script>
    // ===================== تنظیمات API =====================
    const OPENROUTER_API_KEY = "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";
    const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
    
    // مدل پیش‌فرض برای تحلیل تصویر (GPT-4o Vision)
    let CURRENT_MODEL = "openai/gpt-4o";
    
    // ===================== متغیرهای وضعیت =====================
    let isLoading = false;
    let abortController = null;
    let currentImage = null;
    let currentImageBase64 = null;
    let currentImageName = null;
    let currentImageType = null;

    // ===================== بک‌گراند گرافیکی =====================
    (function() {
      const canvas = document.getElementById('bg-canvas');
      const ctx = canvas.getContext('2d');
      let W, H;
      const orbs = [
        { x: 0.2, y: 0.3, r: 300, color: [212,168,67], speed: 0.0003 },
        { x: 0.8, y: 0.7, r: 350, color: [232,86,42], speed: 0.0002 },
        { x: 0.6, y: 0.2, r: 280, color: [42,184,200], speed: 0.00025 },
        { x: 0.1, y: 0.8, r: 320, color: [140,80,200], speed: 0.00018 },
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
          grad.addColorStop(0.5, \`rgba(\${r},\${g},\${b},0.03)\`);
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

    // ===================== توابع کمکی =====================
    function fmtTime() {
      return new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
    }

    function autoResize(el) {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 120) + 'px';
    }

    function updateCharCount(el) {
      const cc = document.getElementById('char-count');
      const n = el.value.length;
      cc.textContent = n + ' / 2000';
      cc.classList.toggle('warn', n > 1800);
    }

    function handleKey(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMsg();
      }
    }

    // ===================== مدیریت تصویر =====================
    function handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      // بررسی نوع فایل
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('لطفاً یک فایل تصویری معتبر انتخاب کنید (JPG, PNG, GIF, WebP)');
        return;
      }
      
      // بررسی حجم فایل (حداکثر 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('حجم فایل نباید بیشتر از 5 مگابایت باشد');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        currentImage = e.target.result;
        currentImageBase64 = e.target.result.split(',')[1]; // حذف data:image/...,
        currentImageName = file.name;
        currentImageType = file.type;
        
        // نمایش تصویر در رابط کاربری
        displayImagePreview();
        
        // تغییر استایل دکمه آپلود
        const uploadBtn = document.getElementById('upload-btn');
        uploadBtn.classList.add('has-image');
        uploadBtn.textContent = '✅';
        uploadBtn.title = 'تصویر انتخاب شده: ' + file.name;
        
        // نمایش اطلاعات فایل
        document.getElementById('file-info').textContent = 
          \`تصویر انتخاب شده: \${file.name} (\${(file.size / 1024).toFixed(1)} KB)\`;
        
        // اگر پیامی وجود ندارد، یک پیام پیش‌فرض وارد کن
        const input = document.getElementById('user-input');
        if (!input.value.trim()) {
          input.value = 'این تصویر را تحلیل کن';
          autoResize(input);
          updateCharCount(input);
        }
      };
      reader.readAsDataURL(file);
    }

    function displayImagePreview() {
      // حذف پیش‌نمایش قبلی اگر وجود دارد
      const oldPreview = document.querySelector('.image-preview-container');
      if (oldPreview) oldPreview.remove();
      
      // ساخت عناصر نمایش تصویر
      const previewContainer = document.createElement('div');
      previewContainer.className = 'image-preview-container';
      previewContainer.style.marginBottom = '10px';
      previewContainer.style.maxWidth = '300px';
      previewContainer.style.marginLeft = 'auto';
      
      const imageContainer = document.createElement('div');
      imageContainer.className = 'image-container';
      
      const img = document.createElement('img');
      img.className = 'image-preview';
      img.src = currentImage;
      img.alt = 'تصویر آپلود شده';
      
      const imageInfo = document.createElement('div');
      imageInfo.className = 'image-info';
      
      const fileNameSpan = document.createElement('span');
      fileNameSpan.textContent = currentImageName;
      
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-image';
      removeBtn.textContent = 'حذف';
      removeBtn.onclick = function() {
        removeImage();
      };
      
      imageInfo.appendChild(fileNameSpan);
      imageInfo.appendChild(removeBtn);
      
      imageContainer.appendChild(img);
      imageContainer.appendChild(imageInfo);
      previewContainer.appendChild(imageContainer);
      
      // افزودن به قسمت ورودی
      const inputArea = document.getElementById('input-area');
      inputArea.insertBefore(previewContainer, inputArea.firstChild);
    }

    function removeImage() {
      currentImage = null;
      currentImageBase64 = null;
      currentImageName = null;
      currentImageType = null;
      
      // حذف پیش‌نمایش
      const previewContainer = document.querySelector('.image-preview-container');
      if (previewContainer) previewContainer.remove();
      
      // بازنشانی دکمه آپلود
      const uploadBtn = document.getElementById('upload-btn');
      uploadBtn.classList.remove('has-image');
      uploadBtn.textContent = '📷';
      uploadBtn.title = 'بارگذاری تصویر';
      
      // بازنشانی اطلاعات فایل
      document.getElementById('file-info').textContent = 
        'فایل‌های مجاز: JPG, PNG, GIF, WebP (حداکثر 5MB)';
    }

    // ===================== مدیریت مدل =====================
    document.querySelectorAll('.model-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        CURRENT_MODEL = this.dataset.model;
        
        // نمایش اطلاعیه
        const modelName = this.textContent;
        const info = document.getElementById('file-info');
        const originalText = info.textContent;
        info.textContent = \`مدل فعال: \${modelName}\`;
        info.style.color = 'var(--gold2)';
        
        setTimeout(() => {
          if (currentImage) {
            info.textContent = \`تصویر انتخاب شده: \${currentImageName}\`;
          } else {
            info.textContent = originalText;
          }
          info.style.color = '';
        }, 2000);
      });
    });

    // ===================== نمایش پیام =====================
    function appendMsg(role, text, isError = false) {
      const welcome = document.getElementById('welcome');
      if (welcome) welcome.remove();

      const msgs = document.getElementById('messages');
      const row = document.createElement('div');
      row.className = 'msg-row ' + (role === 'user' ? 'user' : 'bot');

      const av = document.createElement('div');
      av.className = 'msg-avatar';
      av.textContent = role === 'user' ? '👤' : '🔮';

      const col = document.createElement('div');
      col.className = 'msg-col';

      const bub = document.createElement('div');
      bub.className = 'bubble' + (isError ? ' error-bubble' : '');
      bub.style.direction = 'rtl';
      bub.style.textAlign = 'right';
      
      // اگر کاربر تصویر آپلود کرده، آن را در پیام نمایش بده
      if (role === 'user' && currentImage) {
        const imageSection = document.createElement('div');
        imageSection.className = 'image-container';
        
        const img = document.createElement('img');
        img.className = 'image-preview';
        img.src = currentImage;
        img.alt = 'تصویر آپلود شده';
        img.style.cursor = 'pointer';
        img.onclick = function() {
          window.open(currentImage, '_blank');
        };
        
        const imageInfo = document.createElement('div');
        imageInfo.className = 'image-info';
        imageInfo.innerHTML = \`<span>تصویر: \${currentImageName}</span>\`;
        
        imageSection.appendChild(img);
        imageSection.appendChild(imageInfo);
        bub.appendChild(imageSection);
        
        if (text.trim()) {
          const textDiv = document.createElement('div');
          textDiv.style.marginTop = '10px';
          textDiv.textContent = text;
          bub.appendChild(textDiv);
        }
      } else {
        bub.innerHTML = text.replace(/\\n/g, '<br>');
      }

      const meta = document.createElement('div');
      meta.className = 'msg-meta';
      meta.textContent = fmtTime() + (role === 'bot' ? \` · مدل: \${CURRENT_MODEL.split('/')[1] || CURRENT_MODEL}\` : '');

      col.appendChild(bub);
      col.appendChild(meta);
      row.appendChild(av);
      row.appendChild(col);
      msgs.appendChild(row);
      msgs.scrollTop = msgs.scrollHeight;
      return { row, bubble: bub, meta };
    }

    function showTyping() {
      const welcome = document.getElementById('welcome');
      if (welcome) welcome.remove();

      const msgs = document.getElementById('messages');
      if (document.getElementById('typing-row')) return;

      const row = document.createElement('div');
      row.className = 'msg-row bot';
      row.id = 'typing-row';

      const av = document.createElement('div');
      av.className = 'msg-avatar';
      av.textContent = '🔮';

      const col = document.createElement('div');
      col.className = 'msg-col';

      const bub = document.createElement('div');
      bub.className = 'bubble';
      bub.innerHTML = '<div class="typing-bubble"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>';

      col.appendChild(bub);
      row.appendChild(av);
      row.appendChild(col);
      msgs.appendChild(row);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function removeTyping() {
      const tr = document.getElementById('typing-row');
      if (tr) tr.remove();
    }

    // ===================== ارسال پیام =====================
    window.usePrompt = function(btn) {
      const text = btn.querySelector('span:last-child').textContent.trim();
      const input = document.getElementById('user-input');
      input.value = text;
      autoResize(input);
      updateCharCount(input);
      input.focus();
    };

    async function sendMsg() {
      if (isLoading) return;

      const input = document.getElementById('user-input');
      const text = input.value.trim();
      
      // اگر نه تصویری داریم و نه متنی، برگرد
      if (!text && !currentImage) return;

      // نمایش پیام کاربر
      appendMsg('user', text || (currentImage ? 'تحلیل این تصویر:' : ''));
      input.value = '';
      autoResize(input);
      updateCharCount(input);

      isLoading = true;
      document.getElementById('send-btn').disabled = true;

      if (abortController) {
        abortController.abort();
      }
      abortController = new AbortController();
      const signal = abortController.signal;

      const timeoutId = setTimeout(() => {
        abortController.abort('timeout');
      }, 60000); // 60 ثانیه برای تحلیل تصویر

      showTyping();

      try {
        // ساخت پیام‌ها برای API
        const messages = [];
        
        // پیام سیستمی
        messages.push({
          role: 'system',
          content: 'شما یک دستیار هوشمند، مفید و خلاق هستید. به زبان فارسی پاسخ دهید. اگر تصویری آپلود شده باشد، آن را با دقت تحلیل کرده و پاسخ دقیقی ارائه دهید.'
        });
        
        // پیام کاربری
        const userMessage = {
          role: 'user',
          content: []
        };
        
        // اگر متنی وجود دارد، اضافه کن
        if (text) {
          userMessage.content.push({
            type: 'text',
            text: text
          });
        }
        
        // اگر تصویر وجود دارد، اضافه کن
        if (currentImageBase64) {
          userMessage.content.push({
            type: 'image_url',
            image_url: {
              url: \`data:\${currentImageType};base64,\${currentImageBase64}\`
            }
          });
        }
        
        messages.push(userMessage);

        // ارسال درخواست به API
        const response = await fetch(OPENROUTER_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': \`Bearer \${OPENROUTER_API_KEY}\`,
            'HTTP-Referer': window.location.origin,
            'X-Title': 'Jahesh AI Chat with Vision',
          },
          body: JSON.stringify({
            model: CURRENT_MODEL,
            messages: messages,
            temperature: 0.7,
            max_tokens: 1500,
            stream: true,
          }),
          signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error?.message || \`خطای سرور: \${response.status}\`);
        }

        if (!response.body) {
          throw new Error('بدنه پاسخ وجود ندارد');
        }

        removeTyping();

        // ایجاد حباب خالی برای پاسخ ربات
        const { bubble } = appendMsg('bot', '');

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';
        let fullContent = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split('\\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed === 'data: [DONE]') continue;

            if (trimmed.startsWith('data: ')) {
              const jsonStr = trimmed.substring(6);
              try {
                const parsed = JSON.parse(jsonStr);
                const delta = parsed.choices?.[0]?.delta?.content;
                if (delta) {
                  fullContent += delta;
                  bubble.innerHTML = fullContent.replace(/\\n/g, '<br>');
                  const msgs = document.getElementById('messages');
                  msgs.scrollTop = msgs.scrollHeight;
                }
              } catch (e) {
                console.warn('خطا در parse:', e, jsonStr);
              }
            }
          }
        }

        bubble.innerHTML = fullContent.replace(/\\n/g, '<br>');
        
        // پس از ارسال موفق، تصویر را حفظ می‌کنیم تا کاربر بتواند سوالات بیشتری بپرسد
        // اگر می‌خواهید تصویر حذف شود، خط زیر را فعال کنید:
        // removeImage();

      } catch (err) {
        clearTimeout(timeoutId);
        removeTyping();
        if (err.name === 'AbortError' || err.code === 20) {
          appendMsg('bot', 'خطا: زمان درخواست به پایان رسید. لطفاً دوباره امتحان کنید.', true);
        } else {
          appendMsg('bot', 'خطا: ' + err.message, true);
        }
      } finally {
        isLoading = false;
        document.getElementById('send-btn').disabled = false;
        document.getElementById('user-input').focus();
        abortController = null;
      }
    }

    // ===================== راه‌اندازی اولیه =====================
    window.addEventListener('DOMContentLoaded', function() {
      // اسموث اسکرول
      const messagesDiv = document.getElementById('messages');
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
  <\/script>

`,className:"w-html-embed"})}),k=a=>{const{origin:t,pathname:o,search:n}=new URL(a);return`${t}${o}${n}`},E=l.memo(({pageKey:a,system:t})=>e.jsx(C,{system:t},a),(a,t)=>a.pageKey===t.pageKey),I=({data:a})=>{const{system:t,resources:o,url:n,pageMeta:s}=a,c=k(n),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:r,resources:o,breakpoints:h,onError:console.error}),[o]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:n,children:e.jsx(E,{pageKey:c,system:t})}),e.jsx(u,{url:n,pageMeta:s,siteName:d,imageLoader:i,assetBaseUrl:r}),e.jsx(b,{children:s.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${r}${v}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},P=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-80/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-80/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}}};export{R as configValuesSerialized};
