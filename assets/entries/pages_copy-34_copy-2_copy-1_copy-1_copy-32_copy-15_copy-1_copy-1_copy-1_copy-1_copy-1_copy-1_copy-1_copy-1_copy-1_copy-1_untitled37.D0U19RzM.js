import{j as e,r as l,a as r,i as s,R as m,b as g,P as u,c as b,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jahesh 1.8 – نسل بعدی هوش مصنوعی ۲۰۲۶</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    /* فونت فارسی وزیرمتن */
    @font-face {
      font-family: 'Vazirmatn';
      src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');
      font-weight: normal;
      font-style: normal;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg-primary: #030014;
      --bg-secondary: #0A0A1F;
      --glass-bg: rgba(10, 10, 31, 0.8);
      --glass-border: rgba(0, 255, 255, 0.3);
      --accent-1: #00ffff;
      --accent-2: #ff00ff;
      --accent-3: #ffff00;
      --accent-4: #ff6b00;
      --text-primary: #ffffff;
      --text-secondary: #b8b8ff;
      --user-msg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      --ai-msg: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      --success: #00ff88;
      --error: #ff4d4d;
      --btn-bg: rgba(255, 255, 255, 0.05);
      --btn-hover: rgba(0, 255, 255, 0.15);
    }

    body {
      font-family: 'Vazirmatn', 'Tahoma', system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at 50% 50%, #1a0b2e 0%, #030014 100%);
      color: var(--text-primary);
      min-height: 100vh;
      padding: 1rem;
      position: relative;
      overflow-x: hidden;
      direction: rtl;
    }

    /* تمام متن‌ها راست‌چین */
    * {
      text-align: right;
    }

    /* استثنا برای کدها و متن‌های انگلیسی */
    code, pre, .english-text, .ltr {
      direction: ltr;
      text-align: left;
      display: inline-block;
    }

    /* انیمیشن پس زمینه */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 3px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 0, 255, 0.03) 3px);
      pointer-events: none;
      animation: quantumShift 20s linear infinite;
    }

    @keyframes quantumShift {
      0% { transform: translate(0, 0); }
      100% { transform: translate(20px, 20px); }
    }

    /* ذرات کوانتومی */
    .particle {
      position: fixed;
      width: 2px;
      height: 2px;
      background: var(--accent-1);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--accent-1);
      animation: float 10s infinite;
      z-index: -1;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
      25% { transform: translateY(-20px) translateX(10px); opacity: 1; }
      50% { transform: translateY(0) translateX(20px); opacity: 0.5; }
      75% { transform: translateY(20px) translateX(10px); opacity: 1; }
    }

    /* هدر */
    .header {
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      border-radius: 2rem;
      padding: 0.8rem 1.5rem;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      box-shadow: 0 0 50px rgba(0, 255, 255, 0.2);
      animation: borderGlow 3s infinite;
      position: relative;
      z-index: 10;
    }

    @keyframes borderGlow {
      0%, 100% { border-color: rgba(0, 255, 255, 0.3); box-shadow: 0 0 30px rgba(0, 255, 255, 0.2); }
      50% { border-color: rgba(255, 0, 255, 0.5); box-shadow: 0 0 50px rgba(255, 0, 255, 0.3); }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .logo-icon {
      font-size: 2.2rem;
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: rotate 5s linear infinite;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .logo-text h1 {
      font-size: 1.5rem;
      background: linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.1rem;
    }

    .logo-text p {
      color: var(--text-secondary);
      font-size: 0.8rem;
    }

    /* نوار ابزار - چیدمان منظم */
    .toolbar {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .tool-btn {
      background: var(--btn-bg);
      border: 1px solid rgba(0, 255, 255, 0.2);
      color: var(--text-primary);
      padding: 0.6rem 1rem;
      border-radius: 2rem;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      backdrop-filter: blur(10px);
      font-family: 'Vazirmatn', sans-serif;
      min-width: fit-content;
      white-space: nowrap;
    }

    .tool-btn i {
      color: var(--accent-1);
      font-size: 1rem;
    }

    .tool-btn:hover {
      background: var(--btn-hover);
      border-color: var(--accent-1);
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
    }

    /* وضعیت */
    .status-bar {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 0.8rem;
      color: var(--text-secondary);
      background: rgba(0, 0, 0, 0.3);
      padding: 0.4rem 1rem;
      border-radius: 2rem;
      border: 1px solid rgba(0, 255, 255, 0.2);
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--success);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.3; transform: scale(1.2); }
    }

    /* کانتینر اصلی */
    .chat-wrapper {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 280px;
      gap: 1.2rem;
      height: calc(100vh - 160px);
    }

    /* بخش چت */
    .chat-container {
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      border-radius: 2rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .messages {
      flex: 1;
      padding: 1.2rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    /* استایل پیام‌ها */
    .message {
      max-width: 85%;
      padding: 1rem 1.2rem;
      border-radius: 1.2rem;
      position: relative;
      animation: messageAppear 0.3s ease;
      word-wrap: break-word;
      line-height: 1.7;
      font-size: 0.95rem;
    }

    @keyframes messageAppear {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .message.user {
      background: var(--user-msg);
      align-self: flex-start;
      border-bottom-right-radius: 0.3rem;
      border-bottom-left-radius: 1.2rem;
    }

    .message.ai {
      background: var(--ai-msg);
      align-self: flex-end;
      border-bottom-left-radius: 0.3rem;
      border-bottom-right-radius: 1.2rem;
      border: 1px solid rgba(0, 255, 255, 0.2);
    }

    .message-time {
      font-size: 0.6rem;
      opacity: 0.6;
      margin-top: 0.4rem;
      text-align: left;
      direction: ltr;
      font-family: 'Courier New', monospace;
    }

    .message-content {
      text-align: right;
    }

    /* استایل برای کدها */
    .message pre {
      background: #0d1117;
      padding: 0.8rem;
      border-radius: 10px;
      overflow-x: auto;
      direction: ltr;
      text-align: left;
      margin: 0.5rem 0;
      border: 1px solid rgba(0, 255, 255, 0.2);
      font-size: 0.85rem;
    }

    .message code {
      background: rgba(0, 0, 0, 0.4);
      padding: 0.15rem 0.3rem;
      border-radius: 4px;
      font-family: 'Consolas', 'Courier New', monospace;
      direction: ltr;
      display: inline-block;
      font-size: 0.85rem;
    }

    /* پیوست‌ها */
    .message-attachments {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
      margin-top: 0.6rem;
    }

    .attachment-item {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 2rem;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      transition: all 0.2s;
    }

    .attachment-item:hover {
      background: rgba(0, 255, 255, 0.2);
      border-color: var(--accent-1);
    }

    /* نوار ورودی - کاملاً منظم */
    .input-container {
      padding: 1rem 1.2rem;
      border-top: 1px solid rgba(0, 255, 255, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }

    .input-tools {
      display: flex;
      gap: 0.4rem;
      margin-bottom: 0.6rem;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .input-tool-btn {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(0, 255, 255, 0.15);
      color: var(--text-secondary);
      width: 38px;
      height: 38px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .input-tool-btn:hover {
      background: rgba(0, 255, 255, 0.15);
      color: var(--accent-1);
      border-color: var(--accent-1);
      transform: scale(1.1);
    }

    .input-area {
      display: flex;
      gap: 0.8rem;
      align-items: flex-end;
    }

    textarea {
      flex: 1;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(0, 255, 255, 0.2);
      border-radius: 1.5rem;
      padding: 0.8rem 1.2rem;
      color: var(--text-primary);
      font-size: 0.95rem;
      resize: none;
      min-height: 45px;
      max-height: 150px;
      font-family: 'Vazirmatn', sans-serif;
      direction: rtl;
      line-height: 1.5;
    }

    textarea::placeholder {
      color: rgba(255, 255, 255, 0.3);
      text-align: right;
      font-size: 0.9rem;
    }

    textarea:focus {
      outline: none;
      border-color: var(--accent-1);
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
    }

    .send-btn {
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
      border: none;
      color: var(--bg-primary);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .send-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
    }

    /* پیشرفت */
    .progress-bar {
      width: 100%;
      height: 3px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      overflow: hidden;
      margin: 0.5rem 0 0;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
      width: 0%;
      transition: width 0.3s;
    }

    /* پنل کناری - منظم */
    .sidebar {
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      border-radius: 1.5rem;
      padding: 1.2rem;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .sidebar-section {
      margin-bottom: 1.5rem;
    }

    .sidebar-title {
      font-size: 1rem;
      margin-bottom: 0.8rem;
      color: var(--accent-1);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-bottom: 1px solid rgba(0, 255, 255, 0.2);
      padding-bottom: 0.4rem;
    }

    .sidebar-title i {
      font-size: 1rem;
    }

    /* انتخاب مدل - منظم */
    .model-selector {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
    }

    .model-badge {
      background: rgba(0, 255, 255, 0.1);
      padding: 0.4rem 0.8rem;
      border-radius: 2rem;
      font-size: 0.75rem;
      border: 1px solid rgba(0, 255, 255, 0.2);
      cursor: pointer;
      transition: all 0.3s;
      white-space: nowrap;
    }

    .model-badge.active {
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
      color: var(--bg-primary);
      border-color: transparent;
    }

    .model-badge:hover {
      border-color: var(--accent-1);
      transform: scale(1.02);
    }

    /* ابزارک‌های تولید - منظم */
    .gen-tools {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }

    .gen-tool-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(0, 255, 255, 0.1);
      border-radius: 0.8rem;
      padding: 0.7rem 0.3rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
    }

    .gen-tool-card:hover {
      border-color: var(--accent-1);
      transform: translateY(-3px);
      background: rgba(0, 255, 255, 0.05);
    }

    .gen-tool-card i {
      font-size: 1.3rem;
      color: var(--accent-1);
    }

    .gen-tool-card span {
      font-size: 0.7rem;
      display: block;
    }

    /* دکمه‌های ابزارهای ویژه - یکدست */
    .sidebar .tool-btn {
      width: 100%;
      padding: 0.5rem 0.8rem;
      font-size: 0.8rem;
      justify-content: flex-start;
      margin-bottom: 0.3rem;
    }

    /* مودال */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(20px);
      z-index: 1000;
      align-items: center;
      justify-content: center;
    }

    .modal.active {
      display: flex;
    }

    .modal-content {
      background: var(--bg-secondary);
      border: 1px solid var(--accent-1);
      border-radius: 1.5rem;
      padding: 1.5rem;
      max-width: 450px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 0 100px rgba(0, 255, 255, 0.3);
    }

    .modal-content h2 {
      margin-bottom: 1.2rem;
      color: var(--accent-1);
      font-size: 1.3rem;
    }

    .preview-container {
      margin: 1rem 0;
      min-height: 150px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed rgba(0, 255, 255, 0.3);
    }

    /* اسکرول بار */
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
      border-radius: 3px;
    }

    /* ریسپانسیو */
    @media (max-width: 900px) {
      .chat-wrapper {
        grid-template-columns: 1fr;
      }
      
      .message {
        max-width: 95%;
      }
      
      .toolbar {
        justify-content: center;
      }
    }

    @media (max-width: 600px) {
      .header {
        flex-direction: column;
        align-items: stretch;
      }
      
      .logo {
        justify-content: center;
      }
      
      .toolbar {
        justify-content: center;
      }
      
      .status-bar {
        width: 100%;
        justify-content: center;
      }
    }
  </style>


  <!-- ذرات کوانتومی -->
  <div id="particles"></div>

  <!-- هدر -->
  <div class="header">
    <div class="logo">
      <div class="logo-icon">
        <i class="fas fa-robot"></i>
      </div>
      <div class="logo-text">
        <h1>Jahesh 1.8</h1>
        <p>نسل پنجم هوش مصنوعی | سرعت نور | ۲۰۲۶</p>
      </div>
    </div>
    
    <div class="toolbar">
      <button class="tool-btn" onclick="toggleVoice()">
        <i class="fas fa-microphone"></i>
        <span>ویس فعال</span>
      </button>
      <button class="tool-btn" onclick="startVideoCall()">
        <i class="fas fa-video"></i>
        <span>تماس تصویری</span>
      </button>
      <button class="tool-btn" onclick="showShareModal()">
        <i class="fas fa-share-alt"></i>
        <span>اشتراک</span>
      </button>
      <div class="status-bar">
        <div class="status-dot"></div>
        <span>آنلاین · ۵۱۲ هسته</span>
      </div>
    </div>
  </div>

  <!-- ساختار اصلی -->
  <div class="chat-wrapper">
    <!-- بخش چت -->
    <div class="chat-container">
      <div class="messages" id="messages"></div>

      <!-- نوار ابزار ورودی - کاملاً منظم -->
      <div class="input-container">
        <div class="input-tools">
          <button class="input-tool-btn" onclick="attachFile()" title="ضمیمه فایل">
            <i class="fas fa-paperclip"></i>
          </button>
          <button class="input-tool-btn" onclick="takePhoto()" title="عکس‌برداری">
            <i class="fas fa-camera"></i>
          </button>
          <button class="input-tool-btn" onclick="recordAudio()" title="ضبط صدا">
            <i class="fas fa-microphone-alt"></i>
          </button>
          <button class="input-tool-btn" onclick="openDrawing()" title="نقاشی">
            <i class="fas fa-paint-brush"></i>
          </button>
          <button class="input-tool-btn" onclick="generateImage()" title="تولید تصویر">
            <i class="fas fa-image"></i>
          </button>
          <button class="input-tool-btn" onclick="generateVideo()" title="تولید ویدیو">
            <i class="fas fa-film"></i>
          </button>
          <button class="input-tool-btn" onclick="openCodeGenerator()" title="تولید کد">
            <i class="fas fa-code"></i>
          </button>
          <button class="input-tool-btn" onclick="open3DGenerator()" title="مدل سه‌بعدی">
            <i class="fas fa-cube"></i>
          </button>
        </div>

        <div class="input-area">
          <textarea id="prompt" placeholder="پیام خود را اینجا بنویسید... (فارسی یا انگلیسی)"></textarea>
          <button class="send-btn" onclick="sendMessage()">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>

        <!-- نوار پیشرفت -->
        <div class="progress-bar" id="progressBar" style="display: none;">
          <div class="progress-fill" id="progressFill"></div>
        </div>
      </div>
    </div>

    <!-- پنل کناری - منظم -->
    <div class="sidebar">
      <!-- انتخاب مدل -->
      <div class="sidebar-section">
        <div class="sidebar-title">
          <i class="fas fa-microchip"></i>
          <span>مدل‌های هوش مصنوعی</span>
        </div>
        <div class="model-selector">
          <div class="model-badge active" onclick="selectModel('llama-3.3-70b-versatile')">Jahesh 1.82</div>
          <div class="model-badge" onclick="selectModel('mixtral-8x7b-32768')">Jahesh 1.81</div>
          <div class="model-badge" onclick="selectModel('gemma-7b-it')">Jahesh 1.84</div>
          <div class="model-badge" onclick="selectModel('Jahesh 1.83-large-v3')">Jahesh 1.83</div>
        </div>
      </div>

      <!-- ابزارهای تولید محتوا -->
      <div class="sidebar-section">
        <div class="sidebar-title">
          <i class="fas fa-magic"></i>
          <span>تولید محتوای هوشمند</span>
        </div>
        <div class="gen-tools">
          <div class="gen-tool-card" onclick="openImageGenerator()">
            <i class="fas fa-image"></i>
            <span>تولید عکس</span>
          </div>
          <div class="gen-tool-card" onclick="openVideoGenerator()">
            <i class="fas fa-video"></i>
            <span>تولید ویدیو</span>
          </div>
          <div class="gen-tool-card" onclick="openAudioGenerator()">
            <i class="fas fa-music"></i>
            <span>تولید صدا</span>
          </div>
          <div class="gen-tool-card" onclick="openCodeGenerator()">
            <i class="fas fa-code"></i>
            <span>تولید کد</span>
          </div>
          <div class="gen-tool-card" onclick="open3DGenerator()">
            <i class="fas fa-cube"></i>
            <span>مدل سه‌بعدی</span>
          </div>
          <div class="gen-tool-card" onclick="openAnimationGenerator()">
            <i class="fas fa-film"></i>
            <span>انیمیشن</span>
          </div>
        </div>
      </div>

      <!-- ابزارهای پیشرفته -->
      <div class="sidebar-section">
        <div class="sidebar-title">
          <i class="fas fa-tools"></i>
          <span>ابزارهای ویژه</span>
        </div>
        <div>
          <button class="tool-btn" onclick="translateMessage()">
            <i class="fas fa-language"></i> ترجمه همزمان
          </button>
          <button class="tool-btn" onclick="summarizeText()">
            <i class="fas fa-compress-alt"></i> خلاصه‌سازی
          </button>
          <button class="tool-btn" onclick="analyzeSentiment()">
            <i class="fas fa-smile"></i> تحلیل احساسات
          </button>
          <button class="tool-btn" onclick="extractText()">
            <i class="fas fa-file-image"></i> استخراج متن از عکس
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- مودال تولید تصویر -->
  <div class="modal" id="imageModal">
    <div class="modal-content">
      <h2>تولید تصویر با هوش مصنوعی</h2>
      <textarea id="imagePrompt" placeholder="توضیحات تصویر را اینجا بنویسید..." rows="3" style="width: 100%; margin-bottom: 1rem; padding: 0.8rem; background: rgba(0,0,0,0.3); color: white; border: 1px solid cyan; border-radius: 1rem; font-family: Vazirmatn;"></textarea>
      <select id="imageStyle" style="width: 100%; padding: 0.6rem; margin-bottom: 1rem; background: rgba(0,0,0,0.3); color: white; border: 1px solid cyan; border-radius: 1rem; font-family: Vazirmatn;">
        <option value="realistic">واقع‌گرا</option>
        <option value="anime">انیمه</option>
        <option value="cartoon">کارتونی</option>
        <option value="3d">سه‌بعدی</option>
        <option value="oil">نقاشی رنگ روغن</option>
      </select>
      <div class="preview-container" id="imagePreview"></div>
      <div style="display: flex; gap: 1rem; justify-content: flex-start; margin-top: 1rem;">
        <button class="tool-btn" onclick="closeModal('imageModal')" style="background: rgba(255,0,0,0.3);">انصراف</button>
        <button class="tool-btn" onclick="generateImageWithAI()" style="background: cyan; color: black;">تولید تصویر</button>
      </div>
    </div>
  </div>

  <!-- مودال تولید ویدیو -->
  <div class="modal" id="videoModal">
    <div class="modal-content">
      <h2>تولید ویدیو با هوش مصنوعی</h2>
      <textarea id="videoPrompt" placeholder="سناریوی ویدیو را بنویسید..." rows="3" style="width: 100%; margin-bottom: 1rem; padding: 0.8rem; background: rgba(0,0,0,0.3); color: white; border: 1px solid cyan; border-radius: 1rem; font-family: Vazirmatn;"></textarea>
      <select id="videoDuration" style="width: 100%; padding: 0.6rem; margin-bottom: 1rem; background: rgba(0,0,0,0.3); color: white; border: 1px solid cyan; border-radius: 1rem; font-family: Vazirmatn;">
        <option value="5">۵ ثانیه</option>
        <option value="10">۱۰ ثانیه</option>
        <option value="15">۱۵ ثانیه</option>
        <option value="30">۳۰ ثانیه</option>
      </select>
      <div class="preview-container" id="videoPreview"></div>
      <div style="display: flex; gap: 1rem; justify-content: flex-start;">
        <button class="tool-btn" onclick="closeModal('videoModal')" style="background: rgba(255,0,0,0.3);">انصراف</button>
        <button class="tool-btn" onclick="generateVideoWithAI()" style="background: cyan; color: black;">تولید ویدیو</button>
      </div>
    </div>
  </div>

  <!-- مودال تماس تصویری -->
  <div class="modal" id="callModal">
    <div class="modal-content">
      <h2>تماس تصویری با هوش مصنوعی</h2>
      <div class="preview-container" style="height: 250px; background: #000; position: relative;">
        <video id="localVideo" autoplay="" muted="" style="width: 100%; height: 100%; object-fit: cover;"></video>
        <div style="position: absolute; bottom: 10px; right: 10px; color: white; background: rgba(0,0,0,0.5); padding: 0.2rem 0.6rem; border-radius: 1rem; font-size: 0.8rem;">شما</div>
        <div style="position: absolute; top: 10px; left: 10px; width: 100px; height: 100px; background: #333; border-radius: 8px; overflow: hidden; border: 2px solid cyan;">
          <video id="remoteVideo" autoplay="" style="width: 100%; height: 100%; object-fit: cover;"></video>
          <div style="position: absolute; bottom: 3px; left: 3px; font-size: 0.6rem; background: rgba(0,0,0,0.5); padding: 0.1rem 0.3rem; border-radius: 0.3rem;">AI</div>
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
        <button class="tool-btn" onclick="toggleMute()" title="قطع صدا" style="padding: 0.5rem;"><i class="fas fa-microphone-slash"></i></button>
        <button class="tool-btn" onclick="toggleVideo()" title="قطع تصویر" style="padding: 0.5rem;"><i class="fas fa-video-slash"></i></button>
        <button class="tool-btn" onclick="endCall()" style="background: red; padding: 0.5rem;" title="پایان تماس"><i class="fas fa-phone-slash"></i></button>
        <button class="tool-btn" onclick="shareScreen()" title="اشتراک صفحه" style="padding: 0.5rem;"><i class="fas fa-desktop"></i></button>
        <button class="tool-btn" onclick="recordCall()" title="ضبط تماس" style="padding: 0.5rem;"><i class="fas fa-record-vinyl"></i></button>
      </div>
    </div>
  </div>

  <script>
    // ==================== تنظیمات اولیه ====================
    const API_KEY = "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";
    const API_URL = "https://api.groq.com/openai/v1/chat/completions";
    let currentModel = "llama-3.3-70b-versatile";
    let mediaRecorder;
    let recordedChunks = [];
    let localStream;

    // ==================== ایجاد ذرات کوانتومی ====================
    function createParticles() {
      const particlesDiv = document.getElementById('particles');
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.right = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.background = \`hsl(\${Math.random() * 360}, 100%, 50%)\`;
        particlesDiv.appendChild(particle);
      }
    }

    // ==================== سیستم پیام‌رسانی ====================
    const messagesDiv = document.getElementById('messages');
    const promptInput = document.getElementById('prompt');

    // تبدیل متن فارسی به شکل صحیح
    function formatPersianText(text) {
      text = text.replace(/ي/g, 'ی').replace(/ك/g, 'ک');
      
      const persianNumbers = {
        '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
        '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
      };
      
      return text.replace(/[0-9]/g, function(w) {
        return persianNumbers[w] || w;
      });
    }

    function addMessage(content, isUser = false, attachments = []) {
      const msg = document.createElement('div');
      msg.className = \`message \${isUser ? 'user' : 'ai'}\`;
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'message-content';
      
      let formattedContent = content
        .replace(/\`\`\`([\\s\\S]*?)\`\`\`/g, '<pre><code>$1</code></pre>')
        .replace(/\`([^\`]+)\`/g, '<code>$1</code>')
        .replace(/\\n/g, '<br>');
      
      contentDiv.innerHTML = formattedContent;
      
      if (!content.includes('\`\`\`') && !content.includes('\`')) {
        contentDiv.style.textAlign = 'right';
      }
      
      msg.appendChild(contentDiv);

      if (attachments.length > 0) {
        const attachmentsDiv = document.createElement('div');
        attachmentsDiv.className = 'message-attachments';
        attachments.forEach(att => {
          const attItem = document.createElement('div');
          attItem.className = 'attachment-item';
          attItem.innerHTML = \`<i class="fas fa-\${att.type}"></i> \${att.name}\`;
          if (att.url) {
            attItem.onclick = () => window.open(att.url);
          }
          attachmentsDiv.appendChild(attItem);
        });
        msg.appendChild(attachmentsDiv);
      }

      const timeDiv = document.createElement('div');
      timeDiv.className = 'message-time';
      const now = new Date();
      const timeStr = now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
      timeDiv.textContent = timeStr;
      msg.appendChild(timeDiv);

      messagesDiv.appendChild(msg);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    // ==================== ارسال پیام ====================
    async function sendMessage() {
      const text = promptInput.value.trim();
      if (!text) return;

      addMessage(text, true);
      promptInput.value = '';

      showProgress(true);

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Authorization': \`Bearer \${API_KEY}\`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: currentModel,
            messages: [
              {
                role: 'system',
                content: 'شما یک دستیار فوق‌پیشرفته هستید. همیشه به زبان فارسی و با خط راست‌چین پاسخ دهید. از کلمات فارسی استفاده کنید. اعداد را به فارسی بنویسید. اگر کاربر درخواست کد داد، کد را با فرمت مناسب نمایش دهید.'
              },
              { role: 'user', content: text }
            ],
            temperature: 0.7,
            max_tokens: 4096
          })
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error?.message || 'خطا در ارتباط با سرور');
        }

        const data = await response.json();
        let reply = data.choices[0].message.content;
        reply = formatPersianText(reply);
        addMessage(reply);

      } catch (error) {
        addMessage(\`⚠️ خطا: \${error.message}\`);
      } finally {
        showProgress(false);
      }
    }

    // ==================== تولید تصویر ====================
    async function generateImageWithPrompt(prompt, style = 'realistic') {
      showProgress(true, 'در حال تولید تصویر...');
      
      setTimeout(() => {
        const imageUrl = \`https://picsum.photos/800/600?random=\${Math.random()}\`;
        
        addMessage(\`🖼️ **تصویر تولید شده برای:** "\${prompt}"\`, false, [
          { type: 'image', name: 'تصویر تولیدی', url: imageUrl }
        ]);

        const preview = document.getElementById('imagePreview');
        preview.innerHTML = \`<img src="\${imageUrl}" style="max-width: 100%; max-height: 200px; border-radius: 0.8rem;">\`;
        
        showProgress(false);
      }, 2000);
    }

    // ==================== تولید ویدیو ====================
    async function generateVideoWithPrompt(prompt, duration = 5) {
      showProgress(true, 'در حال تولید ویدیو...');
      
      setTimeout(() => {
        const videoUrl = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
        
        addMessage(\`🎬 **ویدیو تولید شده برای:** "\${prompt}"\`, false, [
          { type: 'video', name: 'ویدیو تولیدی', url: videoUrl }
        ]);

        const preview = document.getElementById('videoPreview');
        preview.innerHTML = \`<video src="\${videoUrl}" controls style="max-width: 100%; max-height: 200px; border-radius: 0.8rem;"></video>\`;
        
        showProgress(false);
      }, 3000);
    }

    // ==================== تماس تصویری ====================
    async function startVideoCall() {
      try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById('localVideo').srcObject = localStream;
        
        openModal('callModal');
        addMessage('📞 تماس تصویری با هوش مصنوعی برقرار شد', false);
      } catch (err) {
        addMessage(\`❌ خطا در برقراری تماس: \${err.message}\`);
      }
    }

    // ==================== ضبط صدا ====================
    async function recordAudio() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        recordedChunks = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            recordedChunks.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(recordedChunks, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(blob);
          addMessage('🎤 **پیام صوتی شما**', true, [
            { type: 'music', name: 'صوت ضبط شده', url: audioUrl }
          ]);
        };

        mediaRecorder.start();
        addMessage('⏺️ در حال ضبط صدا... (۱۰ ثانیه)', false);
        
        setTimeout(() => {
          if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
          }
        }, 10000);
        
      } catch (err) {
        addMessage(\`❌ خطا در ضبط صدا: \${err.message}\`);
      }
    }

    // ==================== آپلود فایل ====================
    function attachFile() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*,video/*,audio/*,.pdf,.doc,.txt';
      input.multiple = true;
      
      input.onchange = (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
          const reader = new FileReader();
          reader.onload = (e) => {
            let icon = 'file';
            if (file.type.startsWith('image/')) icon = 'image';
            else if (file.type.startsWith('video/')) icon = 'video';
            else if (file.type.startsWith('audio/')) icon = 'music';
            
            addMessage(\`📎 **فایل ارسالی:** \${file.name}\`, true, [
              { 
                type: icon, 
                name: file.name.length > 20 ? file.name.substring(0,20) + '...' : file.name,
                url: e.target.result
              }
            ]);
          };
          reader.readAsDataURL(file);
        });
      };
      
      input.click();
    }

    // ==================== مدیریت مودال‌ها ====================
    function openModal(modalId) {
      document.getElementById(modalId).classList.add('active');
    }

    function closeModal(modalId) {
      document.getElementById(modalId).classList.remove('active');
    }

    // ==================== نمایش پیشرفت ====================
    function showProgress(show, message = 'در حال پردازش...') {
      const progressBar = document.getElementById('progressBar');
      const progressFill = document.getElementById('progressFill');
      
      if (show) {
        progressBar.style.display = 'block';
        let width = 0;
        const interval = setInterval(() => {
          if (width >= 90) clearInterval(interval);
          width += 10;
          progressFill.style.width = width + '%';
        }, 200);
      } else {
        progressFill.style.width = '100%';
        setTimeout(() => {
          progressBar.style.display = 'none';
          progressFill.style.width = '0%';
        }, 500);
      }
    }

    // ==================== انتخاب مدل ====================
    function selectModel(model) {
      currentModel = model;
      document.querySelectorAll('.model-badge').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');
      
      const modelNames = {
        'llama-3.3-70b-versatile': 'Jahesh 1.82',
        'mixtral-8x7b-32768': 'Jahesh 1.81',
        'gemma-7b-it': 'Jahesh 1.84',
        'Jahesh 1.83-large-v3': 'Jahesh 1.83'
      };
      
      addMessage(\`🔄 مدل به \${modelNames[model] || model} تغییر یافت\`, false);
    }

    // ==================== ویس فعال ====================
    function toggleVoice() {
      if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'fa-IR';
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = (e) => {
          const transcript = Array.from(e.results)
            .map(result => result[0].transcript)
            .join('');
          promptInput.value = transcript;
        };

        recognition.start();
        addMessage('🎤 در حال گوش دادن...', false);
      } else {
        addMessage('❌ مرورگر شما از تشخیص صدا پشتیبانی نمی‌کند', false);
      }
    }

    // ==================== اشتراک صفحه ====================
    async function shareScreen() {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        addMessage('📺 اشتراک صفحه فعال شد', false);
      } catch (err) {
        addMessage(\`❌ خطا در اشتراک صفحه: \${err.message}\`);
      }
    }

    // ==================== استخراج متن از تصویر ====================
    function extractText() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      
      input.onchange = async (e) => {
        const file = e.target.files[0];
        showProgress(true, 'در حال استخراج متن...');
        
        setTimeout(() => {
          addMessage('📝 **متن استخراج شده:**\\n\\nاین یک متن نمونه است که از تصویر استخراج شده.', false);
          showProgress(false);
        }, 2000);
      };
      
      input.click();
    }

    // ==================== توابع تولید محتوا ====================
    function generateImage() {
      openModal('imageModal');
    }

    function generateVideo() {
      openModal('videoModal');
    }

    function generateImageWithAI() {
      const prompt = document.getElementById('imagePrompt').value;
      const style = document.getElementById('imageStyle').value;
      if (prompt) {
        closeModal('imageModal');
        generateImageWithPrompt(prompt, style);
      } else {
        alert('لطفاً توضیحات تصویر را وارد کنید');
      }
    }

    function generateVideoWithAI() {
      const prompt = document.getElementById('videoPrompt').value;
      const duration = document.getElementById('videoDuration').value;
      if (prompt) {
        closeModal('videoModal');
        generateVideoWithPrompt(prompt, duration);
      } else {
        alert('لطفاً سناریوی ویدیو را وارد کنید');
      }
    }

    function endCall() {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
      closeModal('callModal');
      addMessage('📞 تماس پایان یافت', false);
    }

    // ==================== مقداردهی اولیه ====================
    window.onload = () => {
      createParticles();
      
      addMessage('🚀 **به Jahesh 1.8 خوش آمدید!**\\n\\nمن یک دستیار فوق‌پیشرفته با قابلیت‌های:\\n✅ تولید تصویر با هوش مصنوعی\\n✅ تولید ویدیو\\n✅ تماس تصویری\\n✅ ضبط صدا\\n✅ آپلود فایل\\n✅ ترجمه همزمان\\n✅ و هزاران قابلیت دیگر...\\n\\n**چه کمکی می‌توانم بکنم؟**', false);
    };

    // ==================== تعریف توابع سراسری ====================
    window.toggleVoice = toggleVoice;
    window.startVideoCall = startVideoCall;
    window.showShareModal = () => addMessage('لینک اشتراک: https://groq-quantum.ai/chat', false);
    window.takePhoto = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.capture = 'environment';
      input.onchange = (e) => {
        if (e.target.files[0]) {
          addMessage('📸 **عکس گرفته شده**', true, [
            { type: 'image', name: 'عکس', url: URL.createObjectURL(e.target.files[0]) }
          ]);
        }
      };
      input.click();
    };
    window.recordAudio = recordAudio;
    window.openDrawing = () => addMessage('🎨 ابزار نقاشی فعال شد', false);
    window.generateImage = generateImage;
    window.generateVideo = generateVideo;
    window.sendMessage = sendMessage;
    window.attachFile = attachFile;
    window.translateMessage = () => addMessage('🔤 ترجمه همزمان فعال شد', false);
    window.summarizeText = () => addMessage('📝 خلاصه‌سازی فعال شد', false);
    window.analyzeSentiment = () => addMessage('😊 تحلیل احساسات فعال شد', false);
    window.extractText = extractText;
    window.openImageGenerator = generateImage;
    window.openVideoGenerator = generateVideo;
    window.openAudioGenerator = () => addMessage('🎵 تولید صدا فعال شد', false);
    window.openCodeGenerator = () => addMessage('💻 تولید کد فعال شد', false);
    window.open3DGenerator = () => addMessage('🎮 تولید مدل سه‌بعدی فعال شد', false);
    window.openAnimationGenerator = () => addMessage('✨ تولید انیمیشن فعال شد', false);
    window.closeModal = closeModal;
    window.generateImageWithAI = generateImageWithAI;
    window.generateVideoWithAI = generateVideoWithAI;
    window.endCall = endCall;
    window.toggleMute = () => addMessage('🎤 میکروفون قطع/وصل شد', false);
    window.toggleVideo = () => addMessage('📹 دوربین قطع/وصل شد', false);
    window.shareScreen = shareScreen;
    window.recordCall = () => addMessage('⏺️ ضبط تماس شروع شد', false);
    window.selectModel = selectModel;
  <\/script>

`,className:"w-html-embed"})})}),M=a=>{const{origin:t,pathname:i,search:o}=new URL(a);return`${t}${i}${o}`},z=l.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),I=({data:a})=>{const{system:t,resources:i,url:o,pageMeta:n}=a,c=M(o),p=l.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:i,breakpoints:v,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:o,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(u,{url:o,pageMeta:n,siteName:d,imageLoader:s,assetBaseUrl:r}),e.jsx(b,{children:n.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),j=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${y}`})}),x.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-34/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-34/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{D as configValuesSerialized};
