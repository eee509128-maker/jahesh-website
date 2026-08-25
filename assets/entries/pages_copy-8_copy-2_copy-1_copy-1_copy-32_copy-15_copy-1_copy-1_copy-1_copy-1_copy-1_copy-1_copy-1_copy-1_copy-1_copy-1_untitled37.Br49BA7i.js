import{j as e,r as l,a as o,i,R as u,b as g,P as b,c as f,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=r=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>فایل صوتی به متن</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;800&amp;display=swap" rel="stylesheet">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #07070d;
  --surface: rgba(255,255,255,0.03);
  --border: rgba(255,255,255,0.07);
  --indigo: #6366f1;
  --pink: #ec4899;
  --green: #10b981;
  --red: #f43f5e;
  --text: #c8c8d8;
  --muted: #44445a;
}

body {
  font-family: 'Vazirmatn', sans-serif;
  min-height: 100vh;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  color: var(--text);
}

/* Ambient BG */
.ambient {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.ambient::before {
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%);
  top: -100px; left: -100px;
  animation: drift 12s ease-in-out infinite alternate;
}
.ambient::after {
  content: '';
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%);
  bottom: -80px; right: -80px;
  animation: drift 9s ease-in-out infinite alternate-reverse;
}
@keyframes drift {
  from { transform: translate(0, 0); }
  to { transform: translate(40px, 30px); }
}

/* Grid lines */
.grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

.wrap {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* Header */
.header { text-align: center; }
.header h1 {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -1px;
}
.header h1 span {
  background: linear-gradient(90deg, var(--indigo), var(--pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.header p {
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 300;
}

/* Upload Zone */
.upload-zone {
  border: 1.5px dashed rgba(99,102,241,0.3);
  border-radius: 18px;
  padding: 40px 24px;
  text-align: center;
  background: var(--surface);
  cursor: pointer;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}
.upload-zone::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99,102,241,0.05), rgba(236,72,153,0.03));
  opacity: 0;
  transition: opacity 0.3s;
}
.upload-zone:hover, .upload-zone.drag {
  border-color: rgba(99,102,241,0.6);
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(99,102,241,0.12);
}
.upload-zone:hover::before, .upload-zone.drag::before { opacity: 1; }

.upload-zone input[type=file] {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.upload-icon {
  font-size: 2.8rem;
  margin-bottom: 12px;
}
.upload-zone h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #aaa;
  margin-bottom: 6px;
}
.upload-zone p {
  font-size: 0.8rem;
  color: var(--muted);
}
.file-types {
  margin-top: 12px;
  display: flex;
  gap: 6px;
  justify-content: center;
  flex-wrap: wrap;
}
.badge {
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid rgba(99,102,241,0.25);
  background: rgba(99,102,241,0.08);
  color: #7c7cff;
  font-size: 0.72rem;
  letter-spacing: 0.5px;
}

/* File Info */
.file-info {
  display: none;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px 20px;
  gap: 14px;
  align-items: center;
}
.file-info.show { display: flex; }
.file-icon { font-size: 1.8rem; }
.file-details { flex: 1; }
.file-name { font-size: 0.9rem; font-weight: 600; color: #ccc; }
.file-meta { font-size: 0.78rem; color: var(--muted); margin-top: 3px; }

/* Audio player */
.player-wrap {
  display: none;
}
.player-wrap.show { display: block; }
audio {
  width: 100%;
  border-radius: 10px;
  filter: invert(1) hue-rotate(180deg);
  opacity: 0.8;
}

/* Controls */
.controls {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.btn {
  flex: 1;
  min-width: 120px;
  padding: 13px 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: #aaa;
  font-family: 'Vazirmatn', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.btn:hover {
  border-color: rgba(99,102,241,0.4);
  background: rgba(99,102,241,0.1);
  color: #a5b4fc;
  transform: translateY(-1px);
}
.btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
}
.btn.primary {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 4px 20px rgba(99,102,241,0.3);
}
.btn.primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #5b52f5, #8b47fd);
  box-shadow: 0 6px 28px rgba(99,102,241,0.45);
  color: #fff;
}
.btn.danger:hover:not(:disabled) {
  border-color: rgba(244,63,94,0.4);
  background: rgba(244,63,94,0.1);
  color: #fb7185;
}

/* Progress */
.progress-wrap {
  display: none;
}
.progress-wrap.show { display: block; }
.prog-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.8rem;
}
.prog-label span:first-child { color: var(--indigo); }
.prog-label span:last-child { color: var(--muted); }
.prog-bar {
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.06);
  border-radius: 4px;
  overflow: hidden;
}
.prog-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--indigo), var(--pink));
  border-radius: 4px;
  transition: width 0.3s;
  width: 0%;
  position: relative;
}
.prog-fill::after {
  content: '';
  position: absolute;
  right: 0; top: 0; bottom: 0;
  width: 20px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4));
  animation: shimmer 1.5s ease-in-out infinite;
}
@keyframes shimmer { 0%,100% { opacity: 0; } 50% { opacity: 1; } }

/* Status */
.status {
  font-size: 0.85rem;
  color: var(--muted);
  text-align: center;
  min-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.status .dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--muted);
  flex-shrink: 0;
}
.status.processing .dot { background: var(--indigo); animation: pulse 1s ease-in-out infinite; }
.status.done .dot { background: var(--green); }
.status.err .dot { background: var(--red); }
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

/* Output */
.output {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}
.output-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid var(--border);
}
.output-label {
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 2px;
  text-transform: uppercase;
}
.output-actions { display: flex; gap: 8px; }
.sm-btn {
  padding: 5px 14px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--muted);
  font-family: 'Vazirmatn', sans-serif;
  font-size: 0.78rem;
  cursor: pointer;
  transition: all 0.2s;
}
.sm-btn:hover {
  border-color: rgba(99,102,241,0.4);
  color: #a5b4fc;
  background: rgba(99,102,241,0.08);
}
.output-body {
  padding: 20px;
  min-height: 100px;
  max-height: 280px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(99,102,241,0.3) transparent;
}
#result {
  font-size: 1rem;
  line-height: 2;
  color: var(--text);
  white-space: pre-wrap;
  word-break: break-word;
}
.placeholder { color: var(--muted); font-size: 0.88rem; font-style: italic; }
.interim { opacity: 0.45; }

/* Warning */
.warn {
  display: none;
  background: rgba(244,63,94,0.07);
  border: 1px solid rgba(244,63,94,0.2);
  border-radius: 12px;
  padding: 14px 18px;
  color: #fb7185;
  font-size: 0.85rem;
  line-height: 1.7;
  text-align: center;
}
.warn.show { display: block; }

/* Method tabs */
.method-tabs {
  display: flex;
  gap: 0;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}
.tab {
  flex: 1;
  padding: 10px;
  text-align: center;
  font-size: 0.82rem;
  cursor: pointer;
  color: var(--muted);
  transition: all 0.2s;
  font-family: 'Vazirmatn', sans-serif;
  border: none;
  background: transparent;
}
.tab.active {
  background: rgba(99,102,241,0.15);
  color: #a5b4fc;
}

/* API key section */
.api-section {
  display: none;
  flex-direction: column;
  gap: 10px;
}
.api-section.show { display: flex; }
.api-label { font-size: 0.8rem; color: var(--muted); }
.api-input {
  width: 100%;
  padding: 11px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  font-family: 'Vazirmatn', sans-serif;
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.2s;
}
.api-input:focus { border-color: rgba(99,102,241,0.5); }
.api-input::placeholder { color: var(--muted); }
.api-note { font-size: 0.75rem; color: var(--muted); }
.api-note a { color: #7c7cff; }

/* Whisper section */
.browser-section { display: flex; flex-direction: column; gap: 10px; }
.info-box {
  background: rgba(99,102,241,0.07);
  border: 1px solid rgba(99,102,241,0.2);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 0.8rem;
  color: #8888cc;
  line-height: 1.6;
}

@media (max-width: 480px) {
  .header h1 { font-size: 1.7rem; }
  .controls { flex-direction: column; }
}
</style>


<div class="ambient"></div>
<div class="grid"></div>

<div class="wrap">

  <div class="header">
    <h1>فایل صوتی به <span>متن</span></h1>
    <p>فایل صوتی خود را آپلود کنید و آن را تبدیل به متن کنید</p>
  </div>

  <!-- Method Tabs -->
  <div class="method-tabs">
    <button class="tab active" id="tabBrowser" onclick="switchTab('browser')">🎙️ مرورگر (Chrome)</button>
    <button class="tab" id="tabWhisper" onclick="switchTab('whisper')">⚡ OpenAI Whisper API</button>
  </div>

  <!-- Browser method info -->
  <div class="browser-section" id="browserSection">
    <div class="info-box">
      📌 این روش از <strong>Web Speech API</strong> مرورگر Chrome استفاده می‌کند.<br>
      فایل صوتی پخش می‌شود و گفتار تشخیص داده می‌شود. نیاز به HTTPS یا localhost دارد.
    </div>
  </div>

  <!-- Whisper API key -->
  <div class="api-section" id="whisperSection">
    <div class="api-label">🔑 کلید API مربوط به OpenAI</div>
    <input type="password" class="api-input" id="apiKey" placeholder="sk-...">
    <div class="api-note">
      کلید API از <a href="https://platform.openai.com/api-keys" target="_blank">platform.openai.com</a> دریافت کنید.
      هزینه: ~$0.006 به ازای هر دقیقه صوت.
    </div>
  </div>

  <!-- Upload Zone -->
  <div class="upload-zone" id="uploadZone">
    <input type="file" id="fileInput" accept="audio/*,video/mp4,video/webm">
    <div class="upload-icon">📂</div>
    <h3>فایل صوتی را اینجا رها کنید</h3>
    <p>یا کلیک کنید تا انتخاب کنید</p>
    <div class="file-types">
      <span class="badge">MP3</span>
      <span class="badge">WAV</span>
      <span class="badge">OGG</span>
      <span class="badge">M4A</span>
      <span class="badge">FLAC</span>
      <span class="badge">MP4</span>
    </div>
  </div>

  <!-- File Info -->
  <div class="file-info" id="fileInfo">
    <div class="file-icon">🎵</div>
    <div class="file-details">
      <div class="file-name" id="fileName">—</div>
      <div class="file-meta" id="fileMeta">—</div>
    </div>
  </div>

  <!-- Audio Player -->
  <div class="player-wrap" id="playerWrap">
    <audio id="audioPlayer" controls=""></audio>
  </div>

  <!-- Lang select (browser mode) -->
  <div id="langRow" style="display:flex;gap:8px;flex-wrap:wrap;">
    <button class="sm-btn" style="border-radius:8px;padding:7px 14px;" data-lang="fa-IR" onclick="setLang(this)">🇮🇷 فارسی</button>
    <button class="sm-btn" style="border-radius:8px;padding:7px 14px;border-color:rgba(99,102,241,0.4);color:#a5b4fc;background:rgba(99,102,241,0.08);" data-lang="en-US" onclick="setLang(this)">🇺🇸 English</button>
    <button class="sm-btn" style="border-radius:8px;padding:7px 14px;" data-lang="ar-SA" onclick="setLang(this)">🇸🇦 عربی</button>
  </div>

  <!-- Controls -->
  <div class="controls">
    <button class="btn primary" id="startBtn" disabled="" onclick="startTranscription()">
      ▶ شروع تبدیل
    </button>
    <button class="btn danger" id="stopBtn" disabled="" onclick="stopTranscription()">
      ⏹ توقف
    </button>
  </div>

  <!-- Progress -->
  <div class="progress-wrap" id="progressWrap">
    <div class="prog-label">
      <span id="progText">در حال پردازش...</span>
      <span id="progPct">0%</span>
    </div>
    <div class="prog-bar"><div class="prog-fill" id="progFill"></div></div>
  </div>

  <!-- Status -->
  <div class="status" id="statusEl">
    <div class="dot"></div>
    <span id="statusText">آماده — لطفاً یک فایل صوتی انتخاب کنید</span>
  </div>

  <!-- Output -->
  <div class="output">
    <div class="output-header">
      <span class="output-label">متن خروجی</span>
      <div class="output-actions">
        <button class="sm-btn" id="copyBtn" onclick="copyText()">کپی</button>
        <button class="sm-btn" onclick="downloadText()">دانلود .txt</button>
        <button class="sm-btn" onclick="clearText()">پاک</button>
      </div>
    </div>
    <div class="output-body">
      <div id="result"><span class="placeholder">متن تبدیل‌شده اینجا ظاهر می‌شود...</span></div>
    </div>
  </div>

  <div class="warn" id="warnEl">
    مرورگر شما از Web Speech API پشتیبانی نمی‌کند.<br>
    لطفاً از <strong>Google Chrome</strong> استفاده کنید یا از روش <strong>OpenAI Whisper</strong> بهره ببرید.
  </div>

</div>

<script>
// ── State ──
let currentFile = null;
let currentAudioURL = null;
let recognition = null;
let isRecognizing = false;
let fullText = '';
let currentLang = 'fa-IR';
let currentMode = 'browser';

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

// ── UI refs ──
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const playerWrap = document.getElementById('playerWrap');
const audioPlayer = document.getElementById('audioPlayer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statusEl = document.getElementById('statusEl');
const statusText = document.getElementById('statusText');
const result = document.getElementById('result');
const progWrap = document.getElementById('progressWrap');
const progFill = document.getElementById('progFill');
const progPct = document.getElementById('progPct');
const progText = document.getElementById('progText');
const langRow = document.getElementById('langRow');

if (!SR) {
  document.getElementById('warnEl').classList.add('show');
}

// ── Tab switching ──
function switchTab(mode) {
  currentMode = mode;
  document.getElementById('tabBrowser').classList.toggle('active', mode === 'browser');
  document.getElementById('tabWhisper').classList.toggle('active', mode === 'whisper');
  document.getElementById('browserSection').style.display = mode === 'browser' ? 'flex' : 'none';
  document.getElementById('whisperSection').classList.toggle('show', mode === 'whisper');
  langRow.style.display = mode === 'browser' ? 'flex' : 'none';
  updateStartBtn();
}
// init
document.getElementById('browserSection').style.display = 'flex';

// ── Lang ──
function setLang(btn) {
  document.querySelectorAll('[data-lang]').forEach(b => {
    b.style.borderColor = 'rgba(255,255,255,0.07)';
    b.style.color = '#666';
    b.style.background = 'rgba(255,255,255,0.03)';
  });
  btn.style.borderColor = 'rgba(99,102,241,0.4)';
  btn.style.color = '#a5b4fc';
  btn.style.background = 'rgba(99,102,241,0.08)';
  currentLang = btn.dataset.lang;
}

// ── File handling ──
uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag'); });
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag'));
uploadZone.addEventListener('drop', e => {
  e.preventDefault();
  uploadZone.classList.remove('drag');
  const file = e.dataTransfer.files[0];
  if (file) loadFile(file);
});
fileInput.addEventListener('change', e => {
  if (e.target.files[0]) loadFile(e.target.files[0]);
});

function loadFile(file) {
  currentFile = file;
  if (currentAudioURL) URL.revokeObjectURL(currentAudioURL);
  currentAudioURL = URL.createObjectURL(file);

  document.getElementById('fileName').textContent = file.name;
  const mb = (file.size / 1024 / 1024).toFixed(2);
  document.getElementById('fileMeta').textContent = \`\${mb} MB · \${file.type || 'audio'}\`;
  fileInfo.classList.add('show');

  audioPlayer.src = currentAudioURL;
  playerWrap.classList.add('show');

  fullText = '';
  result.innerHTML = '<span class="placeholder">آماده برای تبدیل...</span>';
  setStatus('فایل بارگذاری شد — برای شروع کلیک کنید', '');
  updateStartBtn();
}

function updateStartBtn() {
  if (!currentFile) { startBtn.disabled = true; return; }
  if (currentMode === 'browser' && !SR) { startBtn.disabled = true; return; }
  if (currentMode === 'whisper' && !document.getElementById('apiKey').value.trim()) {
    startBtn.disabled = true; return;
  }
  startBtn.disabled = false;
}
document.getElementById('apiKey').addEventListener('input', updateStartBtn);

// ── Status helper ──
function setStatus(msg, type) {
  statusEl.className = 'status ' + (type || '');
  statusText.textContent = msg;
}

// ── Browser method ──
function startBrowserTranscription() {
  if (!SR) { setStatus('Web Speech API پشتیبانی نمی‌شود', 'err'); return; }

  fullText = '';
  result.innerHTML = '<span class="placeholder">در حال گوش دادن...</span>';
  progWrap.classList.add('show');
  setStatus('در حال پردازش...', 'processing');
  startBtn.disabled = true;
  stopBtn.disabled = false;

  recognition = new SR();
  recognition.lang = currentLang;
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = e => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) fullText += t + ' ';
      else interim += t;
    }
    result.innerHTML = (fullText || '') + (interim ? \`<span class="interim">\${interim}</span>\` : '');
  };

  recognition.onerror = e => {
    if (e.error !== 'aborted') setStatus('خطا: ' + e.error, 'err');
  };

  recognition.onend = () => {
    if (isRecognizing) {
      try { recognition.start(); } catch(e) {}
    } else {
      finishBrowser();
    }
  };

  isRecognizing = true;
  audioPlayer.currentTime = 0;
  audioPlayer.play();

  audioPlayer.ontimeupdate = () => {
    if (audioPlayer.duration) {
      const pct = Math.round((audioPlayer.currentTime / audioPlayer.duration) * 100);
      progFill.style.width = pct + '%';
      progPct.textContent = pct + '%';
    }
  };

  audioPlayer.onended = () => {
    setTimeout(() => {
      isRecognizing = false;
      try { recognition.stop(); } catch(e) {}
    }, 1500);
  };

  try { recognition.start(); } catch(e) {
    setStatus('خطا در شروع: ' + e.message, 'err');
  }
}

function finishBrowser() {
  progFill.style.width = '100%';
  progPct.textContent = '100%';
  startBtn.disabled = false;
  stopBtn.disabled = true;
  if (fullText.trim()) {
    result.textContent = fullText.trim();
    setStatus('تبدیل کامل شد ✓', 'done');
  } else {
    setStatus('متنی شناسایی نشد', 'err');
  }
}

function stopTranscription() {
  isRecognizing = false;
  audioPlayer.pause();
  if (recognition) try { recognition.stop(); } catch(e) {}
  stopBtn.disabled = true;
  startBtn.disabled = false;
  setStatus('متوقف شد', '');
}

// ── Whisper API method ──
async function startWhisperTranscription() {
  const apiKey = document.getElementById('apiKey').value.trim();
  if (!apiKey) { setStatus('کلید API وارد کنید', 'err'); return; }
  if (!currentFile) { setStatus('فایل انتخاب نشده', 'err'); return; }

  // Check file size (Whisper limit: 25MB)
  if (currentFile.size > 25 * 1024 * 1024) {
    setStatus('فایل بیش از ۲۵ مگابایت است (محدودیت Whisper)', 'err');
    return;
  }

  startBtn.disabled = true;
  stopBtn.disabled = true;
  progWrap.classList.add('show');
  progFill.style.width = '30%';
  progPct.textContent = '30%';
  progText.textContent = 'در حال ارسال به Whisper...';
  setStatus('در حال پردازش با Whisper...', 'processing');
  result.innerHTML = '<span class="placeholder">لطفاً صبر کنید...</span>';

  try {
    const formData = new FormData();
    formData.append('file', currentFile, currentFile.name);
    formData.append('model', 'whisper-1');

    // Language hint
    const langMap = { 'fa-IR': 'fa', 'en-US': 'en', 'ar-SA': 'ar' };
    const lang = langMap[currentLang];
    if (lang) formData.append('language', lang);

    progFill.style.width = '60%';
    progPct.textContent = '60%';

    const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${apiKey}\` },
      body: formData
    });

    progFill.style.width = '90%';
    progPct.textContent = '90%';

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error?.message || 'خطای API');
    }

    const data = await res.json();
    fullText = data.text || '';
    result.textContent = fullText;
    progFill.style.width = '100%';
    progPct.textContent = '100%';
    setStatus('تبدیل با Whisper کامل شد ✓', 'done');
  } catch (e) {
    setStatus('خطا: ' + e.message, 'err');
    result.innerHTML = '<span class="placeholder">خطا در دریافت نتیجه</span>';
  }

  startBtn.disabled = false;
  progText.textContent = 'پردازش کامل';
}

// ── Main dispatcher ──
function startTranscription() {
  if (currentMode === 'browser') startBrowserTranscription();
  else startWhisperTranscription();
}

// ── Output actions ──
function copyText() {
  const txt = result.textContent.replace(/در حال گوش دادن\\.\\.\\.|آماده برای تبدیل\\.\\.\\.|متن تبدیل‌شده اینجا ظاهر می‌شود\\.\\.\\.|لطفاً صبر کنید\\.\\.\\./, '').trim();
  if (!txt) return;
  navigator.clipboard.writeText(txt).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = 'کپی شد ✓';
    setTimeout(() => btn.textContent = 'کپی', 2000);
  });
}

function downloadText() {
  const txt = fullText.trim();
  if (!txt) return;
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  const base = currentFile ? currentFile.name.replace(/\\.[^.]+$/, '') : 'transcript';
  a.download = base + '_transcript.txt';
  a.click();
}

function clearText() {
  fullText = '';
  result.innerHTML = '<span class="placeholder">متن تبدیل‌شده اینجا ظاهر می‌شود...</span>';
  setStatus('پاک شد', '');
  progWrap.classList.remove('show');
  progFill.style.width = '0%';
}
<\/script>


`,className:"w-html-embed"})})}),S=r=>{const{origin:t,pathname:n,search:a}=new URL(r);return`${t}${n}${a}`},T=l.memo(({pageKey:r,system:t})=>e.jsx(k,{system:t},r),(r,t)=>r.pageKey===t.pageKey),z=({data:r})=>{const{system:t,resources:n,url:a,pageMeta:s}=r,p=S(a),c=l.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:n,breakpoints:h,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(g.Provider,{value:a,children:e.jsx(T,{pageKey:p,system:t})}),e.jsx(b,{url:a,pageMeta:s,siteName:d,imageLoader:i,assetBaseUrl:o}),e.jsx(f,{children:s.title})]})},B=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),P=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-8/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:B}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-8/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{A as configValuesSerialized};
