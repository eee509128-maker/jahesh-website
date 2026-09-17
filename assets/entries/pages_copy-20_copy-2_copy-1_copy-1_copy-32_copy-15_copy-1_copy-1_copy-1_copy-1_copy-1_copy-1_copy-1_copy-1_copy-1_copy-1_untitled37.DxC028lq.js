import{j as e,r as l,a as i,i as s,R as m,b as u,P as g,c as x,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=r=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jahesh AI</title>
<link href="https://fonts.googleapis.com/css2?family=Sahel:wght@300;400;700&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet">
<style>
:root {
  --ink: #0a0a0f;
  --paper: #f5f0e8;
  --cream: #ede8d8;
  --rust: #c94c2e;
  --rust-dark: #a03920;
  --teal: #2a7d6f;
  --gold: #c9963a;
  --muted: #7a7265;
  --border: #c8bfaa;
  --shadow: rgba(10,10,15,0.15);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: 'Sahel', 'Tahoma', sans-serif;
  min-height: 100vh;
  padding: 0;
  overflow-x: hidden;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(10,10,15,0.04) 28px, rgba(10,10,15,0.04) 29px),
    repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(10,10,15,0.02) 28px, rgba(10,10,15,0.02) 29px);
}

/* Header strip */
.top-strip {
  background: var(--ink);
  color: var(--paper);
  padding: 12px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.strip-dot {
  width: 8px; height: 8px;
  background: var(--rust);
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
  animation: blink-dot 2s ease-in-out infinite;
}

@keyframes blink-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}

/* Main layout */
.page {
  max-width: 860px;
  margin: 0 auto;
  padding: 50px 30px 80px;
}

/* Title */
.title-block {
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 3px solid var(--ink);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
}

.title-block h1 {
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -2px;
}

.title-block h1 span {
  color: var(--rust);
  font-family: 'Space Mono', monospace;
}

.title-sub {
  font-size: 0.85rem;
  color: var(--muted);
  font-weight: 300;
  max-width: 200px;
  text-align: left;
  line-height: 1.6;
}

/* Two-column layout */
.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 2px solid var(--ink);
  background: var(--ink);
  box-shadow: 6px 6px 0 var(--ink);
}

.col {
  background: var(--paper);
  padding: 36px 30px;
}

.col:first-child {
  border-left: 2px solid var(--ink);
}

.col-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.col-num {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  background: var(--ink);
  color: var(--paper);
  padding: 3px 8px;
  border-radius: 2px;
}

.col-title {
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

/* Language select */
.field-label {
  font-size: 0.72rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
  font-family: 'Space Mono', monospace;
}

select {
  width: 100%;
  background: var(--cream);
  border: 1.5px solid var(--border);
  color: var(--ink);
  font-family: 'Sahel', 'Tahoma', sans-serif;
  font-size: 0.85rem;
  padding: 10px 14px;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s;
  margin-bottom: 24px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230a0a0f' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 14px center;
}

select:focus { border-color: var(--rust); }

/* Mic section */
.mic-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
}

.mic-outer {
  position: relative;
  width: 110px;
  height: 110px;
  cursor: pointer;
}

.mic-btn {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2.5px solid var(--ink);
  background: var(--cream);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
  z-index: 2;
  font-size: 2.2rem;
  box-shadow: 4px 4px 0 var(--ink);
}

.mic-btn:hover {
  background: var(--ink);
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--rust);
}

.mic-btn.recording {
  background: var(--rust);
  border-color: var(--rust-dark);
  box-shadow: 4px 4px 0 var(--rust-dark);
  animation: rec-pulse 1.2s ease-in-out infinite;
}

@keyframes rec-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}

/* Waveform bars */
.wave-bars {
  display: flex;
  align-items: center;
  gap: 3px;
  height: 40px;
  opacity: 0;
  transition: opacity 0.3s;
}

.wave-bars.active { opacity: 1; }

.wb {
  width: 3px;
  background: var(--rust);
  border-radius: 2px;
  height: 5px;
  transition: height 0.1s;
}

.wave-bars.active .wb { animation: wb-anim 0.7s ease-in-out infinite; }
.wb:nth-child(1)  { animation-delay: 0.0s; }
.wb:nth-child(2)  { animation-delay: 0.08s; }
.wb:nth-child(3)  { animation-delay: 0.16s; }
.wb:nth-child(4)  { animation-delay: 0.24s; }
.wb:nth-child(5)  { animation-delay: 0.32s; }
.wb:nth-child(6)  { animation-delay: 0.24s; }
.wb:nth-child(7)  { animation-delay: 0.16s; }
.wb:nth-child(8)  { animation-delay: 0.08s; }
.wb:nth-child(9)  { animation-delay: 0.0s; }
.wb:nth-child(10) { animation-delay: 0.08s; }
.wb:nth-child(11) { animation-delay: 0.16s; }

@keyframes wb-anim {
  0%, 100% { height: 5px; }
  50% { height: 34px; }
}

.mic-label {
  font-size: 0.8rem;
  color: var(--muted);
  text-align: center;
  line-height: 1.5;
}

.mic-label.active-rec { color: var(--rust); font-weight: 700; }

.timer-disp {
  font-family: 'Space Mono', monospace;
  font-size: 1.3rem;
  color: var(--teal);
  display: none;
  letter-spacing: 2px;
}

.timer-disp.show { display: block; }

/* Upload section */
.drop-area {
  border: 2px dashed var(--border);
  border-radius: 2px;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.drop-area:hover, .drop-area.over {
  border-color: var(--rust);
  background: rgba(201,76,46,0.04);
}

.drop-icon { font-size: 2.4rem; }
.drop-main { font-weight: 700; font-size: 0.9rem; }
.drop-hint { font-size: 0.75rem; color: var(--muted); }

#fileInput { display: none; }

/* File chip */
.file-chip {
  display: none;
  align-items: center;
  gap: 10px;
  border: 1.5px solid var(--teal);
  border-radius: 2px;
  padding: 10px 14px;
  margin-bottom: 16px;
  background: rgba(42,125,111,0.06);
}

.file-chip.show { display: flex; }
.file-chip-name { font-size: 0.82rem; font-weight: 700; color: var(--teal); flex: 1; direction: ltr; word-break: break-all; }
.file-chip-size { font-size: 0.72rem; color: var(--muted); font-family: 'Space Mono', monospace; white-space: nowrap; }

/* Whisper API Key */
.api-key-section {
  background: rgba(201,150,58,0.08);
  border: 1.5px solid rgba(201,150,58,0.4);
  border-radius: 2px;
  padding: 16px;
  margin-bottom: 16px;
}

.api-key-section .field-label { color: var(--gold); }

.api-key-section input {
  width: 100%;
  background: white;
  border: 1.5px solid rgba(201,150,58,0.4);
  color: var(--ink);
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  padding: 9px 12px;
  border-radius: 2px;
  outline: none;
  transition: border-color 0.2s;
  direction: ltr;
}

.api-key-section input:focus { border-color: var(--gold); }

.api-key-note {
  font-size: 0.72rem;
  color: var(--muted);
  margin-top: 8px;
  line-height: 1.5;
}

/* Buttons */
.action-btn {
  width: 100%;
  padding: 13px 20px;
  background: var(--ink);
  color: var(--paper);
  border: 2px solid var(--ink);
  border-radius: 2px;
  font-family: 'Sahel', 'Tahoma', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
  box-shadow: 3px 3px 0 var(--rust);
  display: none;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.action-btn.show { display: flex; }

.action-btn:hover {
  background: var(--rust);
  border-color: var(--rust);
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0 var(--rust-dark);
}

.action-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: 3px 3px 0 var(--rust); }

.spinner {
  width: 16px; height: 16px;
  border: 2px solid rgba(245,240,232,0.3);
  border-top-color: var(--paper);
  border-radius: 50%;
  display: none;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}

.spinner.on { display: block; }

@keyframes spin { to { transform: rotate(360deg); } }

/* Result */
.result-wrap {
  grid-column: 1 / -1;
  background: var(--cream);
  border-top: 2px solid var(--ink);
  padding: 30px;
  display: none;
}

.result-wrap.show { display: block; }

.result-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.result-tag {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
}

.result-tag::before {
  content: '';
  width: 6px; height: 6px;
  background: var(--teal);
  border-radius: 50%;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1.5px solid var(--border);
  color: var(--muted);
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  padding: 6px 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.5px;
}

.copy-btn:hover { border-color: var(--ink); color: var(--ink); }
.copy-btn.ok { color: var(--teal); border-color: var(--teal); }

.result-text {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--ink);
  white-space: pre-wrap;
  word-break: break-word;
  direction: auto;
  min-height: 80px;
  padding: 20px;
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 2px;
  position: relative;
}

.cursor {
  display: inline-block;
  width: 2px; height: 1em;
  background: var(--rust);
  vertical-align: text-bottom;
  margin-right: 2px;
  animation: cur-blink 1s step-end infinite;
}

@keyframes cur-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Error */
.err {
  display: none;
  border: 1.5px solid var(--rust);
  background: rgba(201,76,46,0.06);
  border-radius: 2px;
  padding: 12px 16px;
  font-size: 0.82rem;
  color: var(--rust-dark);
  margin-top: 14px;
  line-height: 1.6;
}

.err.show { display: block; }

/* Info note */
.note {
  margin-top: 16px;
  font-size: 0.75rem;
  color: var(--muted);
  line-height: 1.7;
  padding: 12px;
  border-right: 3px solid var(--gold);
  background: rgba(201,150,58,0.05);
}

/* Footer */
.footer {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 1px;
  color: var(--muted);
  border-top: 1px solid var(--border);
  padding-top: 20px;
}

/* Progress bar for file upload */
.progress-wrap {
  display: none;
  margin-top: 14px;
}

.progress-wrap.show { display: block; }

.progress-label {
  font-size: 0.72rem;
  color: var(--muted);
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  font-family: 'Space Mono', monospace;
}

.progress-bar {
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--teal), var(--rust));
  border-radius: 2px;
  width: 0%;
  transition: width 0.3s ease;
}

@media (max-width: 640px) {
  .cols { grid-template-columns: 1fr; }
  .col:first-child { border-left: none; border-bottom: 2px solid var(--ink); }
  .result-wrap { grid-column: 1; }
  .title-block { flex-direction: column; align-items: flex-start; gap: 10px; }
  .title-sub { max-width: 100%; text-align: right; }
  .top-strip { padding: 12px 20px; }
  .page { padding: 30px 16px 60px; }
}
</style>



<div class="top-strip">
  <span><span class="strip-dot"></span></span>
  <span style="font-size:0.62rem; opacity:0.6">VOICE · TRANSCRIPTION · AI</span>
</div>

<div class="page">

  <div class="title-block">
    <h1>JAHESH<br>VOICE<br><span>AI</span></h1>
    <div class="title-sub">ضبط زنده از میکروفون یا آپلود فایل صوتی با کیفیت بالا</div>
  </div>

  <div class="cols">

    <!-- Col 1: Mic -->
    <div class="col">
      <div class="col-header">
        <span class="col-num">01</span>
        <span class="col-title">ضبط مستقیم</span>
      </div>

      <div class="field-label">زبان گفتار</div>
      <select id="langMic">
        <option value="fa-IR">🇮🇷 فارسی</option>
        <option value="en-US">🇺🇸 English (US)</option>
        <option value="en-GB">🇬🇧 English (UK)</option>
        <option value="ar-SA">🇸🇦 العربية</option>
        <option value="fr-FR">🇫🇷 Français</option>
        <option value="de-DE">🇩🇪 Deutsch</option>
        <option value="es-ES">🇪🇸 Español</option>
        <option value="tr-TR">🇹🇷 Türkçe</option>
      </select>

      <div class="mic-zone">
        <button class="mic-btn" id="micBtn" onclick="toggleMic()" title="ضبط صدا">🎤</button>

        <div class="wave-bars" id="waveBars">
          <div class="wb"></div><div class="wb"></div><div class="wb"></div>
          <div class="wb"></div><div class="wb"></div><div class="wb"></div>
          <div class="wb"></div><div class="wb"></div><div class="wb"></div>
          <div class="wb"></div><div class="wb"></div>
        </div>

        <div class="timer-disp" id="timerDisp">00:00</div>
        <div class="mic-label" id="micLabel">برای شروع ضبط کلیک کنید</div>
      </div>


      <div class="err" id="micErr"></div>
    </div>

    <!-- Col 2: Upload -->
    <div class="col">
      <div class="col-header">
        <span class="col-num">02</span>
        <span class="col-title">آپلود فایل صوتی</span>
      </div>

      <div class="field-label">زبان گفتار</div>
      <select id="langUpload">
        <option value="fa">🇮🇷 فارسی</option>
        <option value="en">🇺🇸 English</option>
        <option value="ar">🇸🇦 العربية</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="de">🇩🇪 Deutsch</option>
        <option value="es">🇪🇸 Español</option>
        <option value="tr">🇹🇷 Türkçe</option>
      </select>

      <div class="drop-area" id="dropArea" onclick="document.getElementById('fileInput').click()" ondragover="onDragOver(event)" ondragleave="onDragLeave(event)" ondrop="onDrop(event)">
        <div class="drop-icon">🎵</div>
        <div class="drop-main">فایل صوتی را اینجا بکشید</div>
        <div class="drop-hint">یا کلیک کنید — MP3، WAV، OGG، M4A، FLAC، WebM</div>
      </div>
      <input type="file" id="fileInput" accept="audio/*" onchange="onFileSelect(event)">

      <div class="file-chip" id="fileChip">
        <span style="font-size:1.2rem">🎧</span>
        <span class="file-chip-name" id="fileChipName"></span>
        <span class="file-chip-size" id="fileChipSize"></span>
      </div>

      <!-- Whisper API key -->
      <div class="api-key-section">
        <div class="field-label">🔑 رمز خریداری شده را وارد کنید</div>
        <input type="password" id="apiKeyInput" placeholder="sk-..." autocomplete="off">
        <div class="api-key-note">
        </div>
      </div>

      <button class="action-btn" id="processBtn" onclick="processFile()">
        <span class="spinner" id="procSpinner"></span>
        <span id="procBtnTxt">🚀 شروع تشخیص</span>
      </button>

      <div class="progress-wrap" id="progressWrap">
        <div class="progress-label">
          <span id="progressLabel">در حال ارسال...</span>
          <span id="progressPct">0%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill"></div>
        </div>
      </div>

      <div class="err" id="uploadErr"></div>
    </div>

    <!-- Result row -->
    <div class="result-wrap" id="resultWrap">
      <div class="result-top">
        <div class="result-tag" id="resultSource">متن تشخیص داده شده</div>
        <button class="copy-btn" id="copyResultBtn" onclick="copyResult()">📋 کپی متن</button>
      </div>
      <div class="result-text" id="resultText"></div>
    </div>

  </div><!-- /cols -->

  <div class="footer">
    <span>jahesh ai</span>
    <span>1404</span>
  </div>

</div><!-- /page -->

<script>
// ── State ──────────────────────────────────────────────────────────────────
let recog = null;
let isRec = false;
let timerInt = null;
let secs = 0;
let finalTx = '';
let chosenFile = null;

// ── Mic ────────────────────────────────────────────────────────────────────
function toggleMic() {
  isRec ? stopMic() : startMic();
}

function startMic() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    showErr('micErr', 'مرورگر شما از Web Speech API پشتیبانی نمی‌کند. لطفاً Chrome یا Edge را امتحان کنید.');
    return;
  }

  finalTx = '';
  hideErr('micErr');
  hideResult();

  recog = new SR();
  recog.lang = document.getElementById('langMic').value;
  recog.interimResults = true;
  recog.continuous = true;

  recog.onstart = () => {
    isRec = true;
    document.getElementById('micBtn').classList.add('recording');
    document.getElementById('micBtn').textContent = '⏹️';
    document.getElementById('waveBars').classList.add('active');
    setMicLabel('در حال ضبط... کلیک کنید تا متوقف شود', true);
    document.getElementById('timerDisp').classList.add('show');
    startTimer();
  };

  recog.onresult = (e) => {
    let interim = '';
    finalTx = '';
    for (let i = 0; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalTx += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    showResult(finalTx + (interim ? interim : ''), true, 'mic');
  };

  recog.onerror = (e) => {
    const msgs = {
      'not-allowed': 'دسترسی به میکروفون رد شد. مجوز را در مرورگر فعال کنید.',
      'no-speech': 'صدایی تشخیص داده نشد. دوباره تلاش کنید.',
      'network': 'خطای شبکه. اتصال اینترنت خود را بررسی کنید.',
    };
    showErr('micErr', msgs[e.error] || 'خطا: ' + e.error);
    stopMic();
  };

  recog.onend = () => { if (isRec) stopMic(); };
  recog.start();
}

function stopMic() {
  isRec = false;
  if (recog) { recog.stop(); recog = null; }
  stopTimer();
  document.getElementById('micBtn').classList.remove('recording');
  document.getElementById('micBtn').textContent = '🎤';
  document.getElementById('waveBars').classList.remove('active');
  setMicLabel('برای شروع ضبط کلیک کنید', false);
  document.getElementById('timerDisp').classList.remove('show');
  if (finalTx.trim()) showResult(finalTx.trim(), false, 'mic');
}

function setMicLabel(txt, active) {
  const el = document.getElementById('micLabel');
  el.textContent = txt;
  el.classList.toggle('active-rec', active);
}

// ── Timer ──────────────────────────────────────────────────────────────────
function startTimer() {
  secs = 0;
  timerInt = setInterval(() => {
    secs++;
    const m = String(Math.floor(secs/60)).padStart(2,'0');
    const s = String(secs%60).padStart(2,'0');
    document.getElementById('timerDisp').textContent = m+':'+s;
  }, 1000);
}

function stopTimer() { clearInterval(timerInt); }

// ── File Upload ────────────────────────────────────────────────────────────
function onDragOver(e) {
  e.preventDefault();
  document.getElementById('dropArea').classList.add('over');
}

function onDragLeave(e) {
  document.getElementById('dropArea').classList.remove('over');
}

function onDrop(e) {
  e.preventDefault();
  document.getElementById('dropArea').classList.remove('over');
  const f = e.dataTransfer.files[0];
  if (f && f.type.startsWith('audio/')) setFile(f);
  else showErr('uploadErr', 'لطفاً یک فایل صوتی معتبر انتخاب کنید.');
}

function onFileSelect(e) {
  const f = e.target.files[0];
  if (f) setFile(f);
}

function setFile(f) {
  chosenFile = f;
  hideErr('uploadErr');
  hideResult();
  document.getElementById('fileChipName').textContent = f.name;
  document.getElementById('fileChipSize').textContent = formatBytes(f.size);
  document.getElementById('fileChip').classList.add('show');
  document.getElementById('processBtn').classList.add('show');
}

function formatBytes(b) {
  if (b < 1024) return b + ' B';
  if (b < 1024*1024) return (b/1024).toFixed(1) + ' KB';
  return (b/(1024*1024)).toFixed(1) + ' MB';
}

// ── Process File with Whisper ──────────────────────────────────────────────
async function processFile() {
  if (!chosenFile) return;

  const apiKey = document.getElementById('apiKeyInput').value.trim();
  if (!apiKey) {
    showErr('uploadErr', 'لطفاً API Key خود را وارد کنید. از platform.openai.com می‌توانید کلید رایگان بگیرید.');
    return;
  }
  if (!apiKey.startsWith('sk-')) {
    showErr('uploadErr', 'API Key نامعتبر است. باید با "sk-" شروع شود.');
    return;
  }

  // Max file size 25MB (Whisper limit)
  if (chosenFile.size > 25 * 1024 * 1024) {
    showErr('uploadErr', 'حجم فایل بیش از ۲۵ مگابایت است. Whisper API حداکثر ۲۵MB قبول می‌کند.');
    return;
  }

  const btn = document.getElementById('processBtn');
  const spinner = document.getElementById('procSpinner');
  const btnTxt = document.getElementById('procBtnTxt');
  btn.disabled = true;
  spinner.classList.add('on');
  btnTxt.textContent = 'در حال پردازش...';
  hideErr('uploadErr');
  hideResult();

  const progressWrap = document.getElementById('progressWrap');
  const progressFill = document.getElementById('progressFill');
  const progressLabel = document.getElementById('progressLabel');
  const progressPct = document.getElementById('progressPct');

  progressWrap.classList.add('show');
  progressLabel.textContent = 'در حال آپلود فایل...';

  try {
    const formData = new FormData();
    formData.append('file', chosenFile);
    formData.append('model', 'whisper-1');
    formData.append('language', document.getElementById('langUpload').value);
    formData.append('response_format', 'text');

    // Use XMLHttpRequest for progress
    const result = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const pct = Math.round((e.loaded / e.total) * 100);
          progressFill.style.width = pct + '%';
          progressPct.textContent = pct + '%';
          if (pct === 100) {
            progressLabel.textContent = 'در حال تشخیص متن...';
          }
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          let errMsg = 'خطا در API';
          try {
            const errJson = JSON.parse(xhr.responseText);
            errMsg = errJson.error?.message || errMsg;
          } catch {}
          reject(new Error(errMsg));
        }
      };

      xhr.onerror = () => reject(new Error('خطای اتصال به سرور OpenAI'));
      xhr.ontimeout = () => reject(new Error('زمان درخواست به پایان رسید'));
      xhr.timeout = 120000; // 2 min

      xhr.open('POST', 'https://api.openai.com/v1/audio/transcriptions');
      xhr.setRequestHeader('Authorization', 'Bearer ' + apiKey);
      xhr.send(formData);
    });

    progressFill.style.width = '100%';
    progressPct.textContent = '100%';

    if (result && result.trim()) {
      showResult(result.trim(), false, 'whisper');
    } else {
      showErr('uploadErr', 'هیچ متنی در فایل صوتی تشخیص داده نشد.');
    }

  } catch (err) {
    showErr('uploadErr', '❌ ' + err.message);
  } finally {
    btn.disabled = false;
    spinner.classList.remove('on');
    btnTxt.textContent = '🚀 شروع تشخیص';
    setTimeout(() => {
      progressWrap.classList.remove('show');
      progressFill.style.width = '0%';
    }, 2000);
  }
}

// ── Result ─────────────────────────────────────────────────────────────────
function showResult(txt, isLive, src) {
  const wrap = document.getElementById('resultWrap');
  const box = document.getElementById('resultText');
  const srcEl = document.getElementById('resultSource');

  wrap.classList.add('show');
  srcEl.textContent = src === 'whisper' ? 'متن تشخیص داده شده (Whisper AI)' 
                    : src === 'mic' ? 'متن تشخیص داده شده (میکروفون)' 
                    : 'متن تشخیص داده شده';

  if (isLive) {
    box.innerHTML = txt + '<span class="cursor"></span>';
  } else {
    box.textContent = txt;
  }

  wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideResult() {
  document.getElementById('resultWrap').classList.remove('show');
}

function copyResult() {
  const txt = document.getElementById('resultText').innerText;
  navigator.clipboard.writeText(txt).then(() => {
    const btn = document.getElementById('copyResultBtn');
    btn.textContent = '✅ کپی شد!';
    btn.classList.add('ok');
    setTimeout(() => {
      btn.textContent = '📋 کپی متن';
      btn.classList.remove('ok');
    }, 2000);
  });
}

// ── Errors ──────────────────────────────────────────────────────────────────
function showErr(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.classList.add('show');
}

function hideErr(id) {
  document.getElementById(id).classList.remove('show');
}
<\/script>


`,className:"w-html-embed"})})}),E=r=>{const{origin:t,pathname:a,search:o}=new URL(r);return`${t}${a}${o}`},I=l.memo(({pageKey:r,system:t})=>e.jsx(k,{system:t},r),(r,t)=>r.pageKey===t.pageKey),S=({data:r})=>{const{system:t,resources:a,url:o,pageMeta:n}=r,d=E(o),c=l.useMemo(()=>({imageLoader:s,assetBaseUrl:i,resources:a,breakpoints:v,onError:console.error}),[a]);return e.jsxs(m.Provider,{value:c,children:[e.jsx(u.Provider,{value:o,children:e.jsx(I,{pageKey:d,system:t})}),e.jsx(g,{url:o,pageMeta:n,siteName:p,imageLoader:s,assetBaseUrl:i}),e.jsx(x,{children:n.title})]})},B=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),z=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${i}${b}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-20/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:B}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-20/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{P as configValuesSerialized};
