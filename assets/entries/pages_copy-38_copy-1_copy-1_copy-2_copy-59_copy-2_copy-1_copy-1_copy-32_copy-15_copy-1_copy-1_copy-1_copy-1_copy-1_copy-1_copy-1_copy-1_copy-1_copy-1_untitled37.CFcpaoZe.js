import{j as e,r as c,a as r,i as s,R as g,b as m,P as u,c as b,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",h=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(y,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ورود با تشخیص چهره</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #05080f;
    --surface: #0b1222;
    --surface2: #111c33;
    --accent: #4fffb0;
    --accent2: #00cfff;
    --danger: #ff4566;
    --warn: #ffcc00;
    --border: rgba(79,255,176,0.15);
    --text: #d8f0e8;
    --dim: #4a7a6a;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Vazirmatn', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }
  body::before {
    content: '';
    position: fixed; inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,255,176,0.08) 0%, transparent 70%),
      radial-gradient(ellipse 60% 40% at 80% 90%, rgba(0,207,255,0.05) 0%, transparent 60%);
    pointer-events: none; z-index: 0;
  }
  body::after {
    content: '';
    position: fixed; inset: 0;
    background-image: linear-gradient(rgba(79,255,176,0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(79,255,176,0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none; z-index: 0;
  }
  .app { position: relative; z-index: 1; width: 100%; max-width: 480px; padding: 20px; }

  /* Logo */
  .logo {
    text-align: center;
    margin-bottom: 32px;
  }
  .logo-icon {
    width: 64px; height: 64px;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    border-radius: 20px;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 30px;
    margin-bottom: 12px;
    box-shadow: 0 0 30px rgba(79,255,176,0.3), 0 0 60px rgba(79,255,176,0.1);
    animation: glow-pulse 3s ease-in-out infinite;
  }
  @keyframes glow-pulse {
    0%,100% { box-shadow: 0 0 30px rgba(79,255,176,0.3), 0 0 60px rgba(79,255,176,0.1); }
    50% { box-shadow: 0 0 40px rgba(79,255,176,0.5), 0 0 80px rgba(79,255,176,0.2); }
  }
  .logo h1 { font-size: 1.4rem; font-weight: 900; color: var(--accent); letter-spacing: -0.5px; }
  .logo p { font-size: 0.8rem; color: var(--dim); margin-top: 4px; }

  /* Card */
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 28px;
    box-shadow: 0 20px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(79,255,176,0.04);
  }

  /* Tabs */
  .tabs {
    display: flex; gap: 4px;
    background: var(--bg);
    border-radius: 12px;
    padding: 4px;
    margin-bottom: 24px;
  }
  .tab {
    flex: 1; padding: 10px;
    border: none; background: transparent;
    color: var(--dim); border-radius: 9px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.85rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s;
  }
  .tab.active {
    background: var(--surface2);
    color: var(--accent);
    box-shadow: 0 0 15px rgba(79,255,176,0.1);
  }

  /* Camera area */
  .cam-area {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    background: #000;
    margin-bottom: 20px;
    aspect-ratio: 4/3;
    border: 1px solid var(--border);
  }
  video { width: 100%; height: 100%; object-fit: cover; transform: scaleX(-1); display: block; }
  canvas { position: absolute; top:0; left:0; width:100%; height:100%; transform: scaleX(-1); pointer-events: none; }

  /* Scan overlay */
  .scan-overlay {
    position: absolute; inset: 0;
    pointer-events: none; z-index: 5;
    opacity: 0; transition: opacity 0.3s;
  }
  .scan-overlay.active { opacity: 1; }
  .scan-line {
    position: absolute; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    animation: scan-move 2s linear infinite;
    box-shadow: 0 0 12px var(--accent);
  }
  @keyframes scan-move { from { top: 0; } to { top: 100%; } }

  /* Face frame */
  .face-frame {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 160px; height: 200px;
    pointer-events: none; z-index: 6;
  }
  .face-frame::before, .face-frame::after,
  .face-frame .c1, .face-frame .c2 {
    content: ''; position: absolute;
    width: 28px; height: 28px;
    border-color: var(--accent); border-style: solid;
    transition: border-color 0.3s;
  }
  .face-frame::before { top: 0; right: 0; border-width: 2px 2px 0 0; border-radius: 0 6px 0 0; }
  .face-frame::after  { top: 0; left: 0; border-width: 2px 0 0 2px; border-radius: 6px 0 0 0; }
  .face-frame .c1     { bottom: 0; right: 0; border-width: 0 2px 2px 0; border-radius: 0 0 6px 0; }
  .face-frame .c2     { bottom: 0; left: 0; border-width: 0 0 2px 2px; border-radius: 0 0 0 6px; }
  .face-frame.success::before, .face-frame.success::after,
  .face-frame.success .c1, .face-frame.success .c2 { border-color: var(--accent); }
  .face-frame.fail::before, .face-frame.fail::after,
  .face-frame.fail .c1, .face-frame.fail .c2 { border-color: var(--danger); }

  /* Status overlay on camera */
  .cam-status {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    padding: 20px 14px 12px;
    text-align: center; z-index: 10; pointer-events: none;
  }
  .cam-status-text { font-size: 0.78rem; color: var(--text); }

  /* Progress bar */
  .progress-wrap { margin-bottom: 16px; }
  .progress-label { display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--dim); margin-bottom: 6px; }
  .progress-bar { height: 4px; background: rgba(255,255,255,0.07); border-radius: 4px; overflow: hidden; }
  .progress-fill {
    height: 100%; width: 0%;
    background: linear-gradient(90deg, var(--accent2), var(--accent));
    border-radius: 4px; transition: width 0.2s;
    box-shadow: 0 0 8px var(--accent);
  }

  /* Input */
  .input-group { margin-bottom: 16px; }
  .input-group label { display: block; font-size: 0.75rem; color: var(--dim); margin-bottom: 6px; }
  .input-group input {
    width: 100%; padding: 12px 14px;
    background: var(--bg); border: 1px solid var(--border);
    border-radius: 12px; color: var(--text);
    font-family: 'Vazirmatn', sans-serif; font-size: 0.9rem;
    outline: none; transition: border-color 0.2s;
  }
  .input-group input:focus { border-color: rgba(79,255,176,0.5); }

  /* Buttons */
  .btn {
    width: 100%; padding: 14px;
    border: none; border-radius: 14px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.95rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    margin-bottom: 10px;
  }
  .btn:active { transform: scale(0.97); }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .btn-primary {
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: #05080f;
    box-shadow: 0 0 20px rgba(79,255,176,0.3);
  }
  .btn-primary:hover:not(:disabled) { box-shadow: 0 0 30px rgba(79,255,176,0.5); }
  .btn-ghost {
    background: transparent; color: var(--dim);
    border: 1px solid var(--border);
  }
  .btn-danger {
    background: rgba(255,69,102,0.15); color: var(--danger);
    border: 1px solid rgba(255,69,102,0.3);
  }

  /* Toast */
  .toast {
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 50px; padding: 12px 24px;
    font-size: 0.85rem; font-weight: 600;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    z-index: 9999; transition: all 0.3s;
    opacity: 0; pointer-events: none;
    white-space: nowrap;
  }
  .toast.show { opacity: 1; }
  .toast.success { color: var(--accent); border-color: rgba(79,255,176,0.3); }
  .toast.error { color: var(--danger); border-color: rgba(255,69,102,0.3); }
  .toast.info { color: var(--accent2); border-color: rgba(0,207,255,0.3); }

  /* Dashboard (logged in) */
  .dashboard { display: none; }
  .welcome-banner {
    background: linear-gradient(135deg, rgba(79,255,176,0.1), rgba(0,207,255,0.1));
    border: 1px solid rgba(79,255,176,0.2);
    border-radius: 18px; padding: 24px;
    text-align: center; margin-bottom: 20px;
  }
  .welcome-avatar {
    width: 70px; height: 70px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 30px; margin-bottom: 12px;
    box-shadow: 0 0 25px rgba(79,255,176,0.4);
  }
  .welcome-banner h2 { font-size: 1.3rem; font-weight: 900; color: var(--accent); }
  .welcome-banner p { font-size: 0.8rem; color: var(--dim); margin-top: 4px; }

  .user-list-title { font-size: 0.8rem; color: var(--dim); margin-bottom: 10px; }
  .user-item {
    display: flex; align-items: center; gap: 12px;
    background: var(--bg); border: 1px solid var(--border);
    border-radius: 12px; padding: 12px;
    margin-bottom: 8px;
  }
  .user-item-avatar {
    width: 36px; height: 36px; border-radius: 50%;
    background: linear-gradient(135deg, var(--surface2), var(--surface));
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; flex-shrink: 0;
    border: 1px solid var(--border);
  }
  .user-item-name { font-size: 0.85rem; font-weight: 600; flex: 1; }
  .user-item-date { font-size: 0.7rem; color: var(--dim); }
  .user-item-del {
    background: rgba(255,69,102,0.1); border: none; color: var(--danger);
    border-radius: 8px; padding: 6px 8px; cursor: pointer; font-size: 0.75rem;
    transition: 0.2s;
  }
  .user-item-del:hover { background: rgba(255,69,102,0.2); }

  .divider { height: 1px; background: var(--border); margin: 16px 0; }

  /* Confidence bar */
  .conf-badge {
    position: absolute; top: 10px; right: 10px; z-index: 20;
    background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);
    border: 1px solid var(--border); border-radius: 8px;
    padding: 4px 10px; font-size: 0.7rem; color: var(--text-dim);
    pointer-events: none;
  }
  .conf-badge span { color: var(--accent); font-weight: 700; }
</style>



<div class="toast" id="toast"></div>

<div class="app">
  <div class="logo">
    <div class="logo-icon">🔐</div>
    <h1>FaceAuth</h1>
    <p>سیستم ورود هوشمند با تشخیص چهره</p>
  </div>

  <!-- Auth Section -->
  <div id="auth-section">
    <div class="card">
      <div class="tabs">
        <button class="tab active" onclick="switchTab('login')">ورود با چهره</button>
        <button class="tab" onclick="switchTab('register')">ثبت‌نام</button>
      </div>

      <!-- Camera -->
      <div class="cam-area" id="cam-area">
        <video id="video" autoplay="" playsinline="" muted=""></video>
        <canvas id="canvas"></canvas>
        <div class="scan-overlay" id="scan-overlay">
          <div class="scan-line"></div>
        </div>
        <div class="face-frame" id="face-frame">
          <span class="c1"></span><span class="c2"></span>
        </div>
        <div class="cam-status">
          <div class="cam-status-text" id="cam-status-text">⏳ لطفاً دکمه شروع دوربین را بزنید</div>
        </div>
        <div class="conf-badge" id="conf-badge" style="display:none">تطابق: <span id="conf-val">-</span></div>
      </div>

      <!-- Login tab -->
      <div id="login-tab">
        <div class="progress-wrap" id="login-progress-wrap" style="display:none">
          <div class="progress-label"><span>در حال اسکن چهره...</span><span id="login-prog-val">0%</span></div>
          <div class="progress-bar"><div class="progress-fill" id="login-prog-fill"></div></div>
        </div>
        <button class="btn btn-primary" id="btn-start-login" onclick="startCamera('login')">📷 شروع دوربین</button>
        <button class="btn btn-ghost" id="btn-scan-login" onclick="startLoginScan()" style="display:none" disabled="">🔍 اسکن و ورود</button>
        <button class="btn btn-ghost" id="btn-stop-login" onclick="stopCamera()" style="display:none">⏹ توقف</button>
      </div>

      <!-- Register tab -->
      <div id="register-tab" style="display:none">
        <div class="input-group">
          <label>نام کامل شما</label>
          <input type="text" id="reg-name" placeholder="مثال: علی محمدی">
        </div>
        <div class="progress-wrap" id="reg-progress-wrap" style="display:none">
          <div class="progress-label"><span>ثبت چهره (<span id="reg-frame-count">0</span>/30)</span><span id="reg-prog-val">0%</span></div>
          <div class="progress-bar"><div class="progress-fill" id="reg-prog-fill"></div></div>
        </div>
        <button class="btn btn-primary" id="btn-start-reg" onclick="startCamera('register')">📷 شروع دوربین</button>
        <button class="btn btn-primary" id="btn-capture-reg" onclick="startRegisterCapture()" style="display:none" disabled="">📸 ثبت چهره</button>
        <button class="btn btn-ghost" id="btn-stop-reg" onclick="stopCamera()" style="display:none">⏹ توقف</button>
      </div>
    </div>
  </div>

  <!-- Dashboard Section -->
  <div id="dashboard-section" class="dashboard">
    <div class="card">
      <div class="welcome-banner">
        <div class="welcome-avatar">👤</div>
        <h2 id="dash-name">خوش آمدید!</h2>
        <p id="dash-date"></p>
      </div>
      <div class="divider"></div>
      <p class="user-list-title">👥 کاربران ثبت‌شده در این دستگاه:</p>
      <div id="users-list"></div>
      <div class="divider"></div>
      <button class="btn btn-ghost" onclick="logout()">🚪 خروج از حساب</button>
    </div>
  </div>
</div>

<!-- MediaPipe -->
<script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js" crossorigin="anonymous"><\/script>
<script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" crossorigin="anonymous"><\/script>
<script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" crossorigin="anonymous"><\/script>
<script>
// ======= State =======
let currentTab = 'login';
let isRunning = false;
let camera = null;
let faceMesh = null;
let currentLandmarks = null;
let captureMode = null; // 'login' | 'register' | null
let capturedSamples = [];
let loginScanFrames = 0;
let loginScanActive = false;
let bestMatch = null;
let bestScore = 0;

const VIDEO = document.getElementById('video');
const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext('2d');
const camStatusText = document.getElementById('cam-status-text');
const scanOverlay = document.getElementById('scan-overlay');
const faceFrame = document.getElementById('face-frame');
const confBadge = document.getElementById('conf-badge');
const confVal = document.getElementById('conf-val');

// ======= Toast =======
function toast(msg, type = 'info', dur = 3000) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = \`toast \${type} show\`;
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), dur);
}

// ======= Tab =======
function switchTab(tab) {
  currentTab = tab;
  stopCamera();
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'register'));
  });
  document.getElementById('login-tab').style.display = tab === 'login' ? '' : 'none';
  document.getElementById('register-tab').style.display = tab === 'register' ? '' : 'none';
}

// ======= MediaPipe Init =======
function initFaceMesh() {
  if (faceMesh) return;
  faceMesh = new FaceMesh({ locateFile: f => \`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/\${f}\` });
  faceMesh.setOptions({ maxNumFaces: 1, refineLandmarks: false, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
  faceMesh.onResults(onResults);
}

function onResults(results) {
  CANVAS.width = VIDEO.videoWidth;
  CANVAS.height = VIDEO.videoHeight;
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
    const lm = results.multiFaceLandmarks[0];
    currentLandmarks = lm;
    drawConnectors(CTX, lm, FACEMESH_FACE_OVAL, { color: 'rgba(79,255,176,0.5)', lineWidth: 1.5 });
    drawConnectors(CTX, lm, FACEMESH_LEFT_EYE, { color: 'rgba(79,255,176,0.9)', lineWidth: 1 });
    drawConnectors(CTX, lm, FACEMESH_RIGHT_EYE, { color: 'rgba(79,255,176,0.9)', lineWidth: 1 });
    drawConnectors(CTX, lm, FACEMESH_LIPS, { color: 'rgba(0,207,255,0.6)', lineWidth: 1 });

    faceFrame.className = 'face-frame success';
    camStatusText.textContent = '✅ چهره شناسایی شد';

    // Enable scan buttons
    if (currentTab === 'login') {
      document.getElementById('btn-scan-login').disabled = false;
    } else {
      document.getElementById('btn-capture-reg').disabled = false;
    }

    // Active scan modes
    if (captureMode === 'register' && capturedSamples.length < 30) {
      captureRegisterFrame(lm);
    } else if (captureMode === 'login' && loginScanActive) {
      runLoginCheck(lm);
    }
  } else {
    currentLandmarks = null;
    faceFrame.className = 'face-frame fail';
    camStatusText.textContent = '⚠️ چهره‌ای شناسایی نشد — روبرو بایستید';
    confBadge.style.display = 'none';
    document.getElementById('btn-scan-login').disabled = true;
    document.getElementById('btn-capture-reg').disabled = true;
  }
}

// ======= Camera =======
async function startCamera(mode) {
  initFaceMesh();
  captureMode = null;
  loginScanActive = false;
  capturedSamples = [];
  loginScanFrames = 0;

  if (mode === 'login') {
    document.getElementById('btn-start-login').style.display = 'none';
    document.getElementById('btn-scan-login').style.display = '';
    document.getElementById('btn-stop-login').style.display = '';
    document.getElementById('login-progress-wrap').style.display = 'none';
  } else {
    document.getElementById('btn-start-reg').style.display = 'none';
    document.getElementById('btn-capture-reg').style.display = '';
    document.getElementById('btn-stop-reg').style.display = '';
    document.getElementById('reg-progress-wrap').style.display = 'none';
  }

  scanOverlay.classList.add('active');
  camera = new Camera(VIDEO, {
    onFrame: async () => { if (isRunning && faceMesh) await faceMesh.send({ image: VIDEO }); },
    width: 640, height: 480
  });
  try {
    await camera.start();
    isRunning = true;
    camStatusText.textContent = '🔍 در حال جستجوی چهره...';
  } catch (e) {
    toast('دسترسی به دوربین رد شد!', 'error');
    resetUI();
  }
}

function stopCamera() {
  isRunning = false;
  captureMode = null;
  loginScanActive = false;
  if (camera) { camera.stop(); camera = null; }
  scanOverlay.classList.remove('active');
  faceFrame.className = 'face-frame';
  confBadge.style.display = 'none';
  camStatusText.textContent = '⏳ لطفاً دکمه شروع دوربین را بزنید';
  resetUI();
}

function resetUI() {
  // Login
  document.getElementById('btn-start-login').style.display = '';
  document.getElementById('btn-scan-login').style.display = 'none';
  document.getElementById('btn-stop-login').style.display = 'none';
  document.getElementById('btn-scan-login').disabled = true;
  document.getElementById('login-progress-wrap').style.display = 'none';
  // Register
  document.getElementById('btn-start-reg').style.display = '';
  document.getElementById('btn-capture-reg').style.display = 'none';
  document.getElementById('btn-stop-reg').style.display = 'none';
  document.getElementById('btn-capture-reg').disabled = true;
  document.getElementById('reg-progress-wrap').style.display = 'none';
  document.getElementById('reg-frame-count').textContent = '0';
}

// ======= Feature Extraction =======
// کلید نقاط مهم چهره برای مقایسه (68 نقطه کلیدی)
const KEY_POINTS = [
  1, 33, 263, 61, 291, // Nose tip, eye corners, mouth corners
  10, 152, 234, 454,   // Forehead, chin, cheeks
  70, 300, 105, 334,   // Eyebrows
  159, 145, 386, 374,  // Eye lids
  13, 14, 78, 308,     // Mouth
  168, 6, 197, 195,    // Nose bridge
  127, 356, 58, 288,   // Jaw
  323, 93, 132, 361,   // Lower face
  136, 150, 149, 176,  // Chin area
  148, 152, 377, 400,  // Under chin
  50, 280, 101, 330,   // Mid face
  203, 423, 177, 401,  // Cheek bones
  4, 5, 45, 275,       // Nose sides
  362, 382, 263, 373,  // Right eye
  33, 160, 133, 153,   // Left eye
];

function extractFeatures(lm) {
  const pts = KEY_POINTS.map(i => lm[i]);
  // نرمال‌سازی نسبت به مرکز و سایز صورت
  const noseTip = lm[1];
  const leftEar = lm[234];
  const rightEar = lm[454];
  const faceW = Math.hypot(leftEar.x - rightEar.x, leftEar.y - rightEar.y);
  const faceH = Math.hypot(lm[10].x - lm[152].x, lm[10].y - lm[152].y);
  const scale = (faceW + faceH) / 2 || 1;

  const vec = [];
  for (const p of pts) {
    vec.push((p.x - noseTip.x) / scale);
    vec.push((p.y - noseTip.y) / scale);
    vec.push((p.z - noseTip.z) / scale);
  }
  return vec;
}

function cosineSimilarity(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (na === 0 || nb === 0) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

// مقایسه با میانگین embedding کاربر
function compareWithUser(lm, user) {
  const feat = extractFeatures(lm);
  let total = 0;
  for (const stored of user.embeddings) {
    total += cosineSimilarity(feat, stored);
  }
  return total / user.embeddings.length;
}

// ======= Storage =======
function getUsers() {
  try { return JSON.parse(localStorage.getItem('face_users') || '[]'); } catch { return []; }
}
function saveUsers(users) {
  localStorage.setItem('face_users', JSON.stringify(users));
}

// ======= Register =======
function startRegisterCapture() {
  const name = document.getElementById('reg-name').value.trim();
  if (!name) { toast('لطفاً نام خود را وارد کنید', 'error'); return; }
  if (!currentLandmarks) { toast('چهره‌ای شناسایی نشد', 'error'); return; }
  capturedSamples = [];
  captureMode = 'register';
  document.getElementById('reg-progress-wrap').style.display = '';
  document.getElementById('btn-capture-reg').disabled = true;
  camStatusText.textContent = '📸 در حال ثبت چهره... کمی حرکت کنید';
}

function captureRegisterFrame(lm) {
  if (capturedSamples.length >= 30) return;
  capturedSamples.push(extractFeatures(lm));
  const pct = Math.round((capturedSamples.length / 30) * 100);
  document.getElementById('reg-prog-fill').style.width = pct + '%';
  document.getElementById('reg-prog-val').textContent = pct + '%';
  document.getElementById('reg-frame-count').textContent = capturedSamples.length;

  if (capturedSamples.length >= 30) {
    captureMode = null;
    const name = document.getElementById('reg-name').value.trim();
    const users = getUsers();
    // چک تکراری نبودن نام
    const existing = users.findIndex(u => u.name === name);
    const newUser = { name, embeddings: capturedSamples, date: new Date().toLocaleDateString('fa-IR') };
    if (existing >= 0) { users[existing] = newUser; } else { users.push(newUser); }
    saveUsers(users);
    toast(\`✅ چهره "\${name}" با موفقیت ثبت شد!\`, 'success', 4000);
    stopCamera();
    document.getElementById('reg-name').value = '';
  }
}

// ======= Login =======
function startLoginScan() {
  const users = getUsers();
  if (users.length === 0) { toast('هنوز کاربری ثبت‌نام نکرده! ابتدا ثبت‌نام کنید', 'error', 4000); return; }
  if (!currentLandmarks) { toast('چهره‌ای شناسایی نشد', 'error'); return; }
  loginScanActive = true;
  loginScanFrames = 0;
  bestMatch = null; bestScore = 0;
  captureMode = 'login';
  document.getElementById('login-progress-wrap').style.display = '';
  confBadge.style.display = '';
  camStatusText.textContent = '🔍 در حال تطبیق چهره...';
  document.getElementById('btn-scan-login').disabled = true;
}

function runLoginCheck(lm) {
  loginScanFrames++;
  const pct = Math.round((loginScanFrames / 30) * 100);
  document.getElementById('login-prog-fill').style.width = pct + '%';
  document.getElementById('login-prog-val').textContent = pct + '%';

  const users = getUsers();
  let topUser = null, topScore = 0;
  for (const u of users) {
    const s = compareWithUser(lm, u);
    if (s > topScore) { topScore = s; topUser = u; }
  }
  confVal.textContent = Math.round(topScore * 100) + '%';

  if (topScore > bestScore) { bestScore = topScore; bestMatch = topUser; }

  if (loginScanFrames >= 30) {
    loginScanActive = false;
    captureMode = null;
    const THRESHOLD = 0.88;
    if (bestMatch && bestScore >= THRESHOLD) {
      stopCamera();
      loginSuccess(bestMatch, Math.round(bestScore * 100));
    } else {
      toast('❌ چهره تطبیق نداشت. دوباره تلاش کنید', 'error', 4000);
      loginScanActive = false;
      captureMode = null;
      document.getElementById('btn-scan-login').disabled = false;
      document.getElementById('login-progress-wrap').style.display = 'none';
      confBadge.style.display = 'none';
    }
  }
}

function loginSuccess(user, score) {
  document.getElementById('auth-section').style.display = 'none';
  const dash = document.getElementById('dashboard-section');
  dash.style.display = '';
  document.getElementById('dash-name').textContent = \`سلام، \${user.name}! 👋\`;
  document.getElementById('dash-date').textContent = \`تطابق چهره: \${score}٪ | ورود موفق\`;
  renderUserList();
  toast(\`✅ خوش آمدید، \${user.name}!\`, 'success', 4000);
}

function renderUserList() {
  const users = getUsers();
  const container = document.getElementById('users-list');
  if (users.length === 0) {
    container.innerHTML = '<p style="color:var(--dim);font-size:0.8rem;text-align:center;padding:12px">هنوز کاربری ثبت نشده</p>';
    return;
  }
  container.innerHTML = users.map((u, i) => \`
    <div class="user-item">
      <div class="user-item-avatar">👤</div>
      <div class="user-item-name">\${u.name}</div>
      <div class="user-item-date">\${u.date || ''}</div>
      <button class="user-item-del" onclick="deleteUser(\${i})">🗑 حذف</button>
    </div>
  \`).join('');
}

function deleteUser(index) {
  const users = getUsers();
  const name = users[index].name;
  users.splice(index, 1);
  saveUsers(users);
  renderUserList();
  toast(\`کاربر "\${name}" حذف شد\`, 'info');
}

function logout() {
  document.getElementById('dashboard-section').style.display = 'none';
  document.getElementById('auth-section').style.display = '';
  toast('از حساب خارج شدید', 'info');
}
<\/script>


`,className:"w-html-embed"})}),E=a=>{const{origin:t,pathname:o,search:n}=new URL(a);return`${t}${o}${n}`},I=c.memo(({pageKey:a,system:t})=>e.jsx(S,{system:t},a),(a,t)=>a.pageKey===t.pageKey),C=({data:a})=>{const{system:t,resources:o,url:n,pageMeta:i}=a,l=E(n),p=c.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:o,breakpoints:x,onError:console.error}),[o]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(m.Provider,{value:n,children:e.jsx(I,{pageKey:l,system:t})}),e.jsx(u,{url:n,pageMeta:i,siteName:d,imageLoader:s,assetBaseUrl:r}),e.jsx(b,{children:i.title})]})},k=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),B=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${v}`})}),h.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:B},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-38/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-38/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{j as configValuesSerialized};
