import{j as e,r as l,a as r,i as s,R as m,b as g,P as u,c as b,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(v,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GROQ QUANTUM AI – نسل بعدی هوش مصنوعی ۲۰۲۶</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg-primary: #030014;
      --bg-secondary: #0A0A1F;
      --glass-bg: rgba(10, 10, 31, 0.7);
      --glass-border: rgba(0, 255, 255, 0.2);
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
    }

    body {
      font-family: 'Vazirmatn', system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at 50% 50%, #1a0b2e 0%, #030014 100%);
      color: var(--text-primary);
      min-height: 100vh;
      padding: 1rem;
      position: relative;
      overflow-x: hidden;
    }

    /* انیمیشن پس زمینه کوانتومی */
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

    .particle {
      position: fixed;
      width: 2px;
      height: 2px;
      background: var(--accent-1);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--accent-1);
      animation: float 10s infinite;
    }

    /* هدر با نوار ابزار فوق پیشرفته */
    .header {
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      border-radius: 2rem;
      padding: 1rem 2rem;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      box-shadow: 0 0 50px rgba(0, 255, 255, 0.2);
      animation: borderGlow 3s infinite;
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
      font-size: 2.5rem;
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
      font-size: 1.8rem;
      background: linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .logo-text p {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    /* نوار ابزار اصلی */
    .toolbar {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .tool-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(0, 255, 255, 0.2);
      color: var(--text-primary);
      padding: 0.8rem 1.2rem;
      border-radius: 1.5rem;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      backdrop-filter: blur(10px);
    }

    .tool-btn:hover {
      background: rgba(0, 255, 255, 0.15);
      border-color: var(--accent-1);
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
    }

    .tool-btn i {
      color: var(--accent-1);
    }

    /* کانتینر اصلی چت */
    .chat-wrapper {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 300px;
      gap: 1.5rem;
      height: calc(100vh - 180px);
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
      padding: 1.5rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    /* استایل پیام‌ها */
    .message {
      max-width: 85%;
      padding: 1.2rem 1.5rem;
      border-radius: 1.5rem;
      position: relative;
      animation: messageAppear 0.3s ease;
    }

    @keyframes messageAppear {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .message.user {
      background: var(--user-msg);
      align-self: flex-end;
      border-bottom-left-radius: 0.5rem;
    }

    .message.ai {
      background: var(--ai-msg);
      align-self: flex-start;
      border-bottom-right-radius: 0.5rem;
      border: 1px solid rgba(0, 255, 255, 0.2);
    }

    .message-time {
      font-size: 0.7rem;
      opacity: 0.6;
      margin-top: 0.5rem;
      text-align: left;
    }

    /* بخش فایل‌های ضمیمه */
    .message-attachments {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
    }

    .attachment-item {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 1rem;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    /* نوار ابزار پایین */
    .input-container {
      padding: 1.5rem;
      border-top: 1px solid rgba(0, 255, 255, 0.2);
    }

    .input-tools {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.8rem;
    }

    .input-tool-btn {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(0, 255, 255, 0.1);
      color: var(--text-secondary);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 1.1rem;
    }

    .input-tool-btn:hover {
      background: rgba(0, 255, 255, 0.1);
      color: var(--accent-1);
      transform: scale(1.1);
    }

    .input-area {
      display: flex;
      gap: 1rem;
      align-items: flex-end;
    }

    textarea {
      flex: 1;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(0, 255, 255, 0.2);
      border-radius: 1.5rem;
      padding: 1rem 1.5rem;
      color: var(--text-primary);
      font-size: 1rem;
      resize: none;
      min-height: 60px;
      max-height: 200px;
      font-family: inherit;
    }

    textarea:focus {
      outline: none;
      border-color: var(--accent-1);
      box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
    }

    .send-btn {
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
      border: none;
      color: var(--bg-primary);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 1.2rem;
    }

    .send-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
    }

    /* پنل کناری پیشرفته */
    .sidebar {
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      border-radius: 2rem;
      padding: 1.5rem;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .sidebar-section {
      margin-bottom: 2rem;
    }

    .sidebar-title {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      color: var(--accent-1);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* ابزارک‌های پیشرفته */
    .model-selector {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .model-badge {
      background: rgba(0, 255, 255, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.8rem;
      border: 1px solid rgba(0, 255, 255, 0.2);
      cursor: pointer;
      transition: all 0.3s;
    }

    .model-badge.active {
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
      color: var(--bg-primary);
    }

    .model-badge:hover {
      border-color: var(--accent-1);
      transform: scale(1.05);
    }

    /* ابزار تولید محتوا */
    .gen-tools {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;
    }

    .gen-tool-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(0, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 1rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
    }

    .gen-tool-card:hover {
      border-color: var(--accent-1);
      transform: translateY(-5px);
    }

    .gen-tool-card i {
      font-size: 1.5rem;
      color: var(--accent-1);
      margin-bottom: 0.5rem;
    }

    .gen-tool-card span {
      font-size: 0.8rem;
      display: block;
    }

    /* مودال پیشرفته */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
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
      border-radius: 2rem;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 0 100px rgba(0, 255, 255, 0.3);
    }

    .preview-container {
      margin: 1rem 0;
      min-height: 200px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* وضعیت‌ها */
    .status-bar {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.8rem;
      color: var(--text-secondary);
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--success);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    /* پیشرفت */
    .progress-bar {
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      overflow: hidden;
      margin: 0.5rem 0;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
      width: 0%;
      transition: width 0.3s;
    }

    @media (max-width: 900px) {
      .chat-wrapper {
        grid-template-columns: 1fr;
      }
    }
  </style>


  <!-- ذرات کوانتومی متحرک -->
  <div id="particles"></div>

  <!-- هدر فوق پیشرفته -->
  <div class="header">
    <div class="logo">
      <div class="logo-icon">
        <i class="fas fa-robot"></i>
      </div>
      <div class="logo-text">
        <h1>GROQ QUANTUM AI</h1>
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
        <span>آنلاین · ۵۱۲ هسته کوانتومی</span>
      </div>
    </div>
  </div>

  <!-- ساختار اصلی -->
  <div class="chat-wrapper">
    <!-- بخش چت اصلی -->
    <div class="chat-container">
      <div class="messages" id="messages">
        <!-- پیام‌ها اینجا اضافه می‌شوند -->
      </div>

      <!-- نوار ابزار ورودی -->
      <div class="input-container">
        <div class="input-tools">
          <button class="input-tool-btn" onclick="attachFile()">
            <i class="fas fa-paperclip"></i>
          </button>
          <button class="input-tool-btn" onclick="takePhoto()">
            <i class="fas fa-camera"></i>
          </button>
          <button class="input-tool-btn" onclick="recordAudio()">
            <i class="fas fa-microphone-alt"></i>
          </button>
          <button class="input-tool-btn" onclick="openDrawing()">
            <i class="fas fa-paint-brush"></i>
          </button>
          <button class="input-tool-btn" onclick="generateImage()">
            <i class="fas fa-image"></i>
          </button>
          <button class="input-tool-btn" onclick="generateVideo()">
            <i class="fas fa-film"></i>
          </button>
        </div>

        <div class="input-area">
          <textarea id="prompt" placeholder="پیام خود را بنویسید... (متن، عکس، ویدیو، صدا)"></textarea>
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

    <!-- پنل کناری ابزارهای پیشرفته -->
    <div class="sidebar">
      <!-- انتخاب مدل -->
      <div class="sidebar-section">
        <div class="sidebar-title">
          <i class="fas fa-microchip"></i>
          <span>مدل‌های هوش مصنوعی</span>
        </div>
        <div class="model-selector">
          <div class="model-badge active" onclick="selectModel('llama-3.3-70b')">Llama 3.3 70B</div>
          <div class="model-badge" onclick="selectModel('mixtral-8x7b')">Mixtral 8x7B</div>
          <div class="model-badge" onclick="selectModel('gemma-7b')">Gemma 7B</div>
          <div class="model-badge" onclick="selectModel('whisper')">Whisper</div>
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
        <div style="display: grid; gap: 0.5rem;">
          <button class="tool-btn" style="width: 100%;" onclick="translateMessage()">
            <i class="fas fa-language"></i> ترجمه همزمان
          </button>
          <button class="tool-btn" style="width: 100%;" onclick="summarizeText()">
            <i class="fas fa-compress-alt"></i> خلاصه‌سازی
          </button>
          <button class="tool-btn" style="width: 100%;" onclick="analyzeSentiment()">
            <i class="fas fa-smile"></i> تحلیل احساسات
          </button>
          <button class="tool-btn" style="width: 100%;" onclick="extractText()">
            <i class="fas fa-file-image"></i> استخراج متن از عکس
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- مودال‌ها -->
  <div class="modal" id="imageModal">
    <div class="modal-content">
      <h2 style="margin-bottom: 1rem;">تولید تصویر با هوش مصنوعی</h2>
      <textarea id="imagePrompt" placeholder="توضیحات تصویر..." rows="3" style="width: 100%; margin-bottom: 1rem;"></textarea>
      <select id="imageStyle" style="width: 100%; padding: 0.5rem; margin-bottom: 1rem; background: rgba(0,0,0,0.3); color: white; border: 1px solid cyan;">
        <option value="realistic">واقع‌گرا</option>
        <option value="anime">انime</option>
        <option value="cartoon">کارتونی</option>
        <option value="3d">سه‌بعدی</option>
        <option value="oil">نقاشی رنگ روغن</option>
      </select>
      <div class="preview-container" id="imagePreview"></div>
      <div style="display: flex; gap: 1rem; justify-content: flex-end;">
        <button class="tool-btn" onclick="closeModal('imageModal')">انصراف</button>
        <button class="tool-btn" onclick="generateImageWithAI()" style="background: cyan; color: black;">تولید تصویر</button>
      </div>
    </div>
  </div>

  <div class="modal" id="videoModal">
    <div class="modal-content">
      <h2 style="margin-bottom: 1rem;">تولید ویدیو با هوش مصنوعی</h2>
      <textarea id="videoPrompt" placeholder="سناریوی ویدیو..." rows="3" style="width: 100%; margin-bottom: 1rem;"></textarea>
      <select id="videoDuration" style="width: 100%; padding: 0.5rem; margin-bottom: 1rem; background: rgba(0,0,0,0.3); color: white;">
        <option value="5">۵ ثانیه</option>
        <option value="10">۱۰ ثانیه</option>
        <option value="15">۱۵ ثانیه</option>
        <option value="30">۳۰ ثانیه</option>
      </select>
      <div class="preview-container" id="videoPreview"></div>
      <div style="display: flex; gap: 1rem; justify-content: flex-end;">
        <button class="tool-btn" onclick="closeModal('videoModal')">انصراف</button>
        <button class="tool-btn" onclick="generateVideoWithAI()" style="background: cyan; color: black;">تولید ویدیو</button>
      </div>
    </div>
  </div>

  <div class="modal" id="callModal">
    <div class="modal-content">
      <h2 style="margin-bottom: 1rem;">تماس تصویری با هوش مصنوعی</h2>
      <div class="preview-container" style="height: 300px; background: #000; position: relative;">
        <video id="localVideo" autoplay="" muted="" style="width: 100%; height: 100%; object-fit: cover;"></video>
        <div style="position: absolute; bottom: 10px; left: 10px; color: white;">شما</div>
        <div style="position: absolute; bottom: 10px; right: 10px; width: 100px; height: 100px; background: #333; border-radius: 10px; overflow: hidden;">
          <video id="remoteVideo" autoplay="" style="width: 100%; height: 100%; object-fit: cover;"></video>
          <div style="position: absolute; bottom: 5px; right: 5px; font-size: 0.7rem;">AI</div>
        </div>
      </div>
      <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
        <button class="tool-btn" onclick="toggleMute()"><i class="fas fa-microphone-slash"></i></button>
        <button class="tool-btn" onclick="toggleVideo()"><i class="fas fa-video-slash"></i></button>
        <button class="tool-btn" onclick="endCall()" style="background: red;"><i class="fas fa-phone-slash"></i></button>
        <button class="tool-btn" onclick="shareScreen()"><i class="fas fa-desktop"></i></button>
        <button class="tool-btn" onclick="recordCall()"><i class="fas fa-record-vinyl"></i></button>
      </div>
    </div>
  </div>

  <script>
    // ==================== تنظیمات پیشرفته ====================
    const API_KEY = "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";
    const API_URL = "https://api.groq.com/openai/v1/chat/completions";
    let currentModel = "llama-3.3-70b-versatile";
    let mediaRecorder;
    let recordedChunks = [];
    let localStream;
    let remoteStream;

    // ==================== ایجاد ذرات کوانتومی ====================
    function createParticles() {
      const particlesDiv = document.getElementById('particles');
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.background = \`hsl(\${Math.random() * 360}, 100%, 50%)\`;
        particlesDiv.appendChild(particle);
      }
    }

    // ==================== سیستم پیام‌رسانی پیشرفته ====================
    const messagesDiv = document.getElementById('messages');
    const promptInput = document.getElementById('prompt');

    function addMessage(content, isUser = false, attachments = []) {
      const msg = document.createElement('div');
      msg.className = \`message \${isUser ? 'user' : 'ai'}\`;
      
      // محتوای اصلی
      const contentDiv = document.createElement('div');
      contentDiv.innerHTML = content.replace(/\\n/g, '<br>');
      msg.appendChild(contentDiv);

      // attachments
      if (attachments.length > 0) {
        const attachmentsDiv = document.createElement('div');
        attachmentsDiv.className = 'message-attachments';
        attachments.forEach(att => {
          const attItem = document.createElement('div');
          attItem.className = 'attachment-item';
          attItem.innerHTML = \`<i class="fas fa-\${att.type}"></i> \${att.name}\`;
          attachmentsDiv.appendChild(attItem);
        });
        msg.appendChild(attachmentsDiv);
      }

      // زمان
      const timeDiv = document.createElement('div');
      timeDiv.className = 'message-time';
      timeDiv.textContent = new Date().toLocaleTimeString('fa-IR');
      msg.appendChild(timeDiv);

      messagesDiv.appendChild(msg);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    // ==================== ارسال پیام با قابلیت‌های جدید ====================
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
                content: 'شما یک دستیار فوق‌پیشرفته با قابلیت درک و تولید تصویر، ویدیو، صدا و تماس تصویری هستید. به زبان فارسی پاسخ دهید.'
              },
              { role: 'user', content: text }
            ],
            temperature: 0.7,
            max_tokens: 4096
          })
        });

        if (!response.ok) throw new Error('خطا در ارتباط با سرور');

        const data = await response.json();
        const reply = data.choices[0].message.content;
        
        // تشخیص خودکار نیاز به تولید محتوا
        if (reply.includes('[GENERATE_IMAGE]')) {
          const imagePrompt = reply.match(/\\[GENERATE_IMAGE\\](.*?)\\[\\/(GENERATE_IMAGE)\\]/)?.[1] || text;
          generateImageWithPrompt(imagePrompt);
        } else if (reply.includes('[GENERATE_VIDEO]')) {
          const videoPrompt = reply.match(/\\[GENERATE_VIDEO\\](.*?)\\[\\/(GENERATE_VIDEO)\\]/)?.[1] || text;
          generateVideoWithPrompt(videoPrompt);
        } else {
          addMessage(reply);
        }

      } catch (error) {
        addMessage(\`⚠️ خطا: \${error.message}\`);
      } finally {
        showProgress(false);
      }
    }

    // ==================== تولید تصویر با هوش مصنوعی ====================
    async function generateImageWithPrompt(prompt, style = 'realistic') {
      showProgress(true, 'در حال تولید تصویر...');
      
      // شبیه‌سازی تولید تصویر (در واقعیت باید به API متصل شود)
      setTimeout(() => {
        const imageUrl = \`https://picsum.photos/800/600?random=\${Math.random()}\`;
        
        addMessage(\`🖼️ **تصویر تولید شده برای:** "\${prompt}"\`, false, [
          { type: 'image', name: 'تصویر تولیدی', url: imageUrl }
        ]);

        // نمایش در مودال
        const preview = document.getElementById('imagePreview');
        preview.innerHTML = \`<img src="\${imageUrl}" style="max-width: 100%; max-height: 300px;">\`;
        
        showProgress(false);
      }, 2000);
    }

    // ==================== تولید ویدیو با هوش مصنوعی ====================
    async function generateVideoWithPrompt(prompt, duration = 5) {
      showProgress(true, 'در حال تولید ویدیو...');
      
      setTimeout(() => {
        const videoUrl = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
        
        addMessage(\`🎬 **ویدیو تولید شده برای:** "\${prompt}"\`, false, [
          { type: 'video', name: 'ویدیو تولیدی', url: videoUrl }
        ]);

        const preview = document.getElementById('videoPreview');
        preview.innerHTML = \`<video src="\${videoUrl}" controls style="max-width: 100%; max-height: 300px;"></video>\`;
        
        showProgress(false);
      }, 3000);
    }

    // ==================== تماس تصویری با هوش مصنوعی ====================
    async function startVideoCall() {
      try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById('localVideo').srcObject = localStream;
        
        // شبیه‌سازی دریافت استریم از AI
        const aiStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById('remoteVideo').srcObject = aiStream;
        
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
        setTimeout(() => mediaRecorder.stop(), 10000); // ضبط 10 ثانیه
        addMessage('⏺️ در حال ضبط صدا...', false);
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
            addMessage(\`📎 **فایل ارسالی:** \${file.name}\`, true, [
              { 
                type: file.type.split('/')[0] || 'file', 
                name: file.name,
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
      addMessage(\`🔄 مدل به \${model} تغییر یافت\`, false);
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
      }
    }

    // ==================== اشتراک‌گذاری صفحه ====================
    async function shareScreen() {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        // اضافه کردن به تماس
        addMessage('📺 اشتراک صفحه فعال شد', false);
      } catch (err) {
        addMessage(\`❌ خطا در اشتراک صفحه: \${err.message}\`);
      }
    }

    // ==================== استخراج متن از تصویر ====================
    async function extractText() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      
      input.onchange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        showProgress(true, 'در حال استخراج متن...');
        
        // شبیه‌سازی OCR
        setTimeout(() => {
          addMessage('📝 **متن استخراج شده:**\\nاین یک متن نمونه است که از تصویر استخراج شده.', false);
          showProgress(false);
        }, 2000);
      };
      
      input.click();
    }

    // ==================== تولید تصویر (دکمه‌ها) ====================
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
      }
    }

    function generateVideoWithAI() {
      const prompt = document.getElementById('videoPrompt').value;
      const duration = document.getElementById('videoDuration').value;
      if (prompt) {
        closeModal('videoModal');
        generateVideoWithPrompt(prompt, duration);
      }
    }

    // ==================== تماس‌ها ====================
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
      
      // پیام خوش‌آمدگویی
      addMessage('🚀 **به GROQ QUANTUM AI خوش آمدید!**\\n\\nمن یک دستیار فوق‌پیشرفته با قابلیت‌های:\\n✅ تولید تصویر با هوش مصنوعی\\n✅ تولید ویدیو\\n✅ تماس تصویری\\n✅ ضبط صدا\\n✅ آپلود فایل\\n✅ ترجمه همزمان\\n✅ و هزاران قابلیت دیگر...\\n\\n**چه کمکی می‌توانم بکنم؟**', false);
    };

    // ==================== اضافه کردن متدهای مورد نیاز ====================
    window.toggleVoice = toggleVoice;
    window.startVideoCall = startVideoCall;
    window.showShareModal = () => addMessage('لینک اشتراک: https://groq-quantum.ai/chat', false);
    window.takePhoto = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.capture = 'camera';
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
  <\/script>

`,className:"w-html-embed"})})}),M=a=>{const{origin:t,pathname:i,search:o}=new URL(a);return`${t}${i}${o}`},I=l.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),E=({data:a})=>{const{system:t,resources:i,url:o,pageMeta:n}=a,c=M(o),p=l.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:i,breakpoints:h,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:o,children:e.jsx(I,{pageKey:c,system:t})}),e.jsx(u,{url:o,pageMeta:n,siteName:d,imageLoader:s,assetBaseUrl:r}),e.jsx(b,{children:n.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),A=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${y}`})}),x.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-28/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-28/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{j as configValuesSerialized};
