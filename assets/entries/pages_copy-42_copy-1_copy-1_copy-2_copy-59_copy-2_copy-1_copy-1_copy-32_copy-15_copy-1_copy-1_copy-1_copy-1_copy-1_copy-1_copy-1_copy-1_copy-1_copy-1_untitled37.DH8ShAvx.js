import{j as e,r as c,a as o,i as s,R as p,b as m,P as u,c as f,d as v}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Face ID System</title>
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --primary: #4a9eff;
  --secondary: #7b5fff;
  --success: #4eff9a;
  --error: #ff4a6a;
  --warning: #ffb84a;
  --bg: #07070f;
  --card: #0e0e1c;
  --card2: #13132a;
  --border: #1c1c38;
  --text: #dde0ff;
  --muted: #55557a;
}

body {
  font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-dots {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image: radial-gradient(rgba(74,158,255,0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}

.app {
  position: relative; z-index: 1;
  width: 100%; max-width: 460px;
  padding: 16px;
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
}

.screen {
  display: none; flex-direction: column;
  align-items: center; gap: 20px;
  width: 100%;
  animation: fadeUp .35s ease;
}
.screen.active { display: flex; }

@keyframes fadeUp {
  from { opacity:0; transform:translateY(18px); }
  to   { opacity:1; transform:translateY(0); }
}

/* === CARD === */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 22px;
  width: 100%;
}

/* === TITLE === */
.gtitle {
  font-size: clamp(1.5em,5vw,2em);
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; text-align: center;
}
.gsub {
  text-align: center; color: var(--muted);
  font-size: 0.88em; line-height: 1.6;
}

/* === VIDEO === */
.vwrap {
  position: relative;
  width: min(270px, 72vw); height: min(270px, 72vw);
  border-radius: 50%; overflow: hidden;
  border: 3px solid var(--primary);
  box-shadow: 0 0 50px rgba(74,158,255,.25), 0 0 0 6px rgba(74,158,255,.06);
  flex-shrink: 0;
}
.vwrap video {
  width: 100%; height: 100%;
  object-fit: cover; transform: scaleX(-1);
}
.vwrap canvas.overlay {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
}

/* === STATUS === */
.sbadge {
  width: 100%; padding: 12px 16px;
  border-radius: 13px; text-align: center;
  font-size: 0.88em; font-weight: 600;
  border: 1px solid transparent;
  transition: all .3s; line-height: 1.5;
}
.sbadge.info    { background:rgba(74,158,255,.08);  border-color:rgba(74,158,255,.25);  color:var(--primary); }
.sbadge.success { background:rgba(78,255,154,.08);  border-color:rgba(78,255,154,.25);  color:var(--success); }
.sbadge.error   { background:rgba(255,74,106,.08);  border-color:rgba(255,74,106,.25);  color:var(--error);   }
.sbadge.warn    { background:rgba(255,184,74,.08);  border-color:rgba(255,184,74,.25);  color:var(--warning); }

/* === BUTTONS === */
.brow { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; width:100%; }

.btn {
  padding: 12px 26px; border: none; border-radius: 50px;
  font-size: .95em; font-weight: 700; cursor: pointer;
  transition: all .25s; min-width: 120px;
  font-family: inherit;
}
.btn:disabled { opacity:.45; cursor:not-allowed; transform:none !important; }
.btn-p {
  background: linear-gradient(135deg,var(--primary),var(--secondary));
  color: #fff;
}
.btn-p:hover:not(:disabled) { box-shadow:0 6px 25px rgba(74,158,255,.4); transform:translateY(-2px); }
.btn-g {
  background: transparent; border: 2px solid var(--border);
  color: var(--muted);
}
.btn-g:hover:not(:disabled) { border-color:var(--primary); color:var(--primary); }

/* === HOME BIG BUTTONS === */
.hbtn {
  display: flex; align-items: center; gap: 14px;
  padding: 16px 20px; border-radius: 17px;
  cursor: pointer; border: 2px solid var(--border);
  background: var(--card2); transition: all .25s;
  font-family: inherit;
}
.hbtn-icon { font-size: 2em; flex-shrink:0; }
.hbtn-text { text-align: right; }
.hbtn-title { font-size: 1em; font-weight: 700; color: var(--text); }
.hbtn-sub   { font-size: .78em; color: var(--muted); margin-top:2px; }
.hbtn.login-hbtn { border-color:rgba(74,158,255,.35); background:rgba(74,158,255,.06); }
.hbtn.login-hbtn .hbtn-title { color:var(--primary); }
.hbtn:hover { transform:translateX(-5px); box-shadow:0 4px 20px rgba(74,158,255,.15); border-color:var(--primary); }

/* === INPUT === */
.ifield {
  width: 100%; padding: 13px 16px;
  background: rgba(255,255,255,.04);
  border: 2px solid var(--border);
  border-radius: 13px; color: var(--text);
  font-size: .95em; direction: rtl;
  transition: border-color .3s;
  font-family: inherit;
}
.ifield:focus { outline:none; border-color:var(--primary); }
.ifield::placeholder { color:var(--muted); }
.flabel { font-size:.82em; color:var(--muted); align-self:flex-start; }

/* === PROGRESS DOTS === */
.dots { display:flex; gap:8px; justify-content:center; }
.dot {
  width:9px; height:9px; border-radius:50%;
  background:var(--border); transition:all .3s;
}
.dot.done   { background:var(--primary); }
.dot.active { background:var(--success); transform:scale(1.4); }

/* === USER LIST === */
.uitem {
  display:flex; align-items:center; gap:12px;
  padding:12px; border-radius:13px;
  border:1px solid var(--border); margin-bottom:8px;
  transition:all .3s;
}
.uitem.me { border-color:var(--success); background:rgba(78,255,154,.04); }
.uavatar {
  width:42px; height:42px; border-radius:50%; flex-shrink:0;
  background:linear-gradient(135deg,var(--primary),var(--secondary));
  display:flex; align-items:center; justify-content:center;
  font-size:1.2em;
}
.uname  { font-weight:700; font-size:.95em; }
.udate  { font-size:.75em; color:var(--muted); margin-top:2px; }
.ubadge {
  margin-right:auto; font-size:.75em;
  color:var(--success); font-weight:700;
}

/* === BADGE PILL === */
.pill {
  display:inline-block; padding:3px 12px;
  border-radius:20px; font-size:.78em; font-weight:700;
  background:rgba(74,158,255,.15); color:var(--primary);
}

canvas.hidden { display:none; }

.score-line {
  text-align:center; font-size:.85em;
  color:var(--muted); line-height:1.7;
}

@media (max-width:380px) {
  .app { padding:10px; }
  .card { padding:16px; }
  .btn { padding:10px 18px; font-size:.88em; min-width:100px; }
}
</style>


<div class="bg-dots"></div>
<div class="app">

  <!-- ───── HOME ───── -->
  <div class="screen active" id="sHome">
    <div>
      <div style="text-align:center;font-size:3.8em;margin-bottom:10px">🔐</div>
      <div class="gtitle">ورود هوشمند</div>
      <div class="gsub" style="margin-top:8px">سیستم تشخیص چهره · داده‌ها فقط در این نشست نگه‌داری می‌شوند</div>
    </div>

    <div class="card" style="display:flex;flex-direction:column;gap:10px;">
      <button class="hbtn login-hbtn" onclick="goLogin()">
        <span class="hbtn-icon">👁️</span>
        <div class="hbtn-text">
          <div class="hbtn-title">ورود با چهره</div>
          <div class="hbtn-sub">اگر قبلاً ثبت‌نام کرده‌اید</div>
        </div>
      </button>
      <button class="hbtn" onclick="goRegister()">
        <span class="hbtn-icon">✨</span>
        <div class="hbtn-text">
          <div class="hbtn-title">ثبت‌نام جدید</div>
          <div class="hbtn-sub">اولین بار است؟ اینجا شروع کنید</div>
        </div>
      </button>
    </div>

    <div id="homeInfo" class="gsub"></div>
    <div id="apiNote" class="sbadge warn" style="display:none">
      ⚠️ <b>FaceDetector API</b> در این مرورگر فعال نیست. دقت شناسایی پایین‌تر خواهد بود.
      برای بهترین نتیجه از Chrome استفاده کنید.
    </div>
  </div>

  <!-- ───── REGISTER ───── -->
  <div class="screen" id="sReg">
    <div class="gtitle">ثبت‌نام ✨</div>

    <div class="card" style="display:flex;flex-direction:column;align-items:center;gap:16px;">
      <div class="flabel">نام کاربری خود را وارد کنید</div>
      <input id="regName" class="ifield" type="text" placeholder="مثال: علی احمدی" maxlength="32">

      <div class="vwrap">
        <video id="regVid" autoplay="" playsinline="" muted=""></video>
        <canvas id="regOvl" class="overlay"></canvas>
      </div>
      <canvas id="regCap" class="hidden"></canvas>

      <div class="dots" id="regDots"></div>
      <div class="sbadge info" id="regStat">📷 در حال راه‌اندازی دوربین…</div>
    </div>

    <div class="brow">
      <button class="btn btn-p" id="regBtn" onclick="doRegister()" disabled="">📸 اسکن چهره</button>
      <button class="btn btn-g" onclick="cancel()">انصراف</button>
    </div>
  </div>

  <!-- ───── LOGIN ───── -->
  <div class="screen" id="sLogin">
    <div class="gtitle">ورود با چهره 👁️</div>

    <div class="card" style="display:flex;flex-direction:column;align-items:center;gap:16px;">
      <div class="vwrap">
        <video id="loginVid" autoplay="" playsinline="" muted=""></video>
        <canvas id="loginOvl" class="overlay"></canvas>
      </div>
      <canvas id="loginCap" class="hidden"></canvas>

      <div class="dots" id="loginDots"></div>
      <div class="sbadge info" id="loginStat">📷 در حال راه‌اندازی دوربین…</div>
    </div>

    <div class="brow">
      <button class="btn btn-p" id="loginBtn" onclick="doLogin()" disabled="">🔍 شناسایی چهره</button>
      <button class="btn btn-g" onclick="cancel()">انصراف</button>
    </div>
  </div>

  <!-- ───── DASHBOARD ───── -->
  <div class="screen" id="sDash">
    <div class="card" style="text-align:center;padding:28px 22px;">
      <div style="font-size:3.5em;margin-bottom:10px">🎉</div>
      <div class="gtitle" id="dashName">خوش آمدید!</div>
      <div class="score-line" id="dashScore" style="margin-top:10px"></div>
    </div>

    <div class="card">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;font-weight:700;">
        <span>👥</span> کاربران ثبت‌شده
        <span class="pill" id="dashCount" style="margin-right:auto"></span>
      </div>
      <div id="dashList"></div>
    </div>

    <div class="brow">
      <button class="btn btn-g" onclick="doLogout()">🚪 خروج از حساب</button>
    </div>
  </div>

</div>

<script>
// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
const DB = []; // { id, name, sig, date }
let cam = null;
let raf = null;
let rafActive = false;
let fd = null;          // FaceDetector instance
let fdOK = false;       // API available?

const REG_SAMPLES = 5;
const LOGIN_SAMPLES = 3;
const SIG_W = 48;
const SIG_H = 56;
const THRESH_API  = 0.78;
const THRESH_NAPI = 0.74;

// ═══════════════════════════════════════════
//  STARTUP
// ═══════════════════════════════════════════
(async () => {
  if ('FaceDetector' in window) {
    try {
      fd = new FaceDetector({ fastMode: false, maxDetectedFaces: 1 });
      const tc = document.createElement('canvas');
      tc.width = tc.height = 100;
      await fd.detect(tc);
      fdOK = true;
    } catch { fd = null; fdOK = false; }
  }
  if (!fdOK) document.getElementById('apiNote').style.display = 'block';
  refreshHome();
})();

// ═══════════════════════════════════════════
//  ROUTING
// ═══════════════════════════════════════════
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function refreshHome() {
  const el = document.getElementById('homeInfo');
  el.textContent = DB.length === 0
    ? 'هنوز هیچ کاربری ثبت‌نام نکرده'
    : \`\${DB.length} کاربر ثبت‌شده\`;
}

function cancel() { cleanup(); refreshHome(); show('sHome'); }
function doLogout() { refreshHome(); show('sHome'); }

// ═══════════════════════════════════════════
//  CAMERA
// ═══════════════════════════════════════════
async function openCam(videoId) {
  closeCam();
  try {
    cam = await navigator.mediaDevices.getUserMedia({
      video: { width:{ideal:640}, height:{ideal:640}, facingMode:'user' }, audio: false
    });
    const v = document.getElementById(videoId);
    v.srcObject = cam;
    await new Promise((res, rej) => { v.onloadedmetadata = res; v.onerror = rej; });
    await v.play();
    return true;
  } catch { return false; }
}

function closeCam() {
  if (cam) { cam.getTracks().forEach(t => t.stop()); cam = null; }
}

function cleanup() {
  rafActive = false;
  if (raf) { cancelAnimationFrame(raf); raf = null; }
  closeCam();
}

// ═══════════════════════════════════════════
//  OVERLAY ANIMATION
// ═══════════════════════════════════════════
function startOverlay(ovlId, color = '#4a9eff') {
  rafActive = false;
  if (raf) { cancelAnimationFrame(raf); raf = null; }
  rafActive = true;

  const cvs = document.getElementById(ovlId);
  const hex2 = n => Math.round(n).toString(16).padStart(2,'0');

  function frame() {
    if (!rafActive) return;
    raf = requestAnimationFrame(frame);

    const w = cvs.offsetWidth || 270;
    const h = cvs.offsetHeight || 270;
    if (cvs.width !== w || cvs.height !== h) { cvs.width = w; cvs.height = h; }

    const ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, w, h);

    const t = Date.now() / 1000;
    const cx = w/2, cy = h/2;
    const rx = w * 0.34, ry = h * 0.43;

    // Dashed oval
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2);
    ctx.strokeStyle = color + 'bb';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([7,4]);
    ctx.lineDashOffset = -t * 18;
    ctx.stroke();
    ctx.restore();

    // Scan line
    const sp = Math.sin(t * 1.9);
    const sy = cy + sp * ry * 0.85;
    const xe = rx * Math.sqrt(Math.max(0, 1 - sp*sp));
    ctx.save();
    const g = ctx.createLinearGradient(cx-xe, sy, cx+xe, sy);
    g.addColorStop(0,   'transparent');
    g.addColorStop(0.3, color + '88');
    g.addColorStop(0.5, color + 'ee');
    g.addColorStop(0.7, color + '88');
    g.addColorStop(1,   'transparent');
    ctx.beginPath(); ctx.moveTo(cx-xe, sy); ctx.lineTo(cx+xe, sy);
    ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.stroke();
    ctx.restore();

    // 4 arc highlights
    const al = Math.PI / 5.5;
    ctx.setLineDash([]); ctx.strokeStyle = color; ctx.lineWidth = 3;
    for (let i = 0; i < 4; i++) {
      const a = i * Math.PI / 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, a - al/2, a + al/2);
      ctx.stroke();
    }

    // Pulsing center dot
    const p = 0.5 + 0.5 * Math.sin(t*3.2);
    ctx.beginPath();
    ctx.arc(cx, cy, 3 + p*2, 0, Math.PI*2);
    ctx.fillStyle = color + hex2(p * 220);
    ctx.fill();
  }

  frame();
}

// ═══════════════════════════════════════════
//  DOTS PROGRESS
// ═══════════════════════════════════════════
function makeDots(containerId, n) {
  const el = document.getElementById(containerId);
  el.innerHTML = Array.from({length:n}, (_,i) =>
    \`<div class="dot" id="\${containerId}_\${i}"></div>\`
  ).join('');
}

function setDot(cid, i, state) {
  const d = document.getElementById(\`\${cid}_\${i}\`);
  if (d) d.className = 'dot ' + state;
}

function resetDots(cid, n) {
  for (let i=0;i<n;i++) setDot(cid, i, '');
}

// ═══════════════════════════════════════════
//  STATUS
// ═══════════════════════════════════════════
function stat(id, type, msg) {
  const el = document.getElementById(id);
  el.className = 'sbadge ' + type;
  el.textContent = msg;
}

// ═══════════════════════════════════════════
//  FACE CAPTURE
// ═══════════════════════════════════════════
function captureFrame(videoId, capId) {
  const v = document.getElementById(videoId);
  const c = document.getElementById(capId);
  const vw = v.videoWidth || 640, vh = v.videoHeight || 640;
  c.width = vw; c.height = vh;
  const ctx = c.getContext('2d');
  // Mirror to match display
  ctx.save(); ctx.translate(vw, 0); ctx.scale(-1,1);
  ctx.drawImage(v, 0, 0); ctx.restore();
  return c;
}

async function getRegion(canvas) {
  if (fdOK && fd) {
    try {
      const faces = await fd.detect(canvas);
      if (faces.length > 0) {
        const b = faces[0].boundingBox;
        const p = Math.min(b.width, b.height) * 0.18;
        return {
          x: Math.max(0, b.x - p),
          y: Math.max(0, b.y - p * 1.3),
          w: Math.min(canvas.width - b.x + p, b.width + 2*p),
          h: Math.min(canvas.height - b.y + p, b.height + 2.6*p),
          found: true
        };
      }
      return null; // API on, no face
    } catch {}
  }
  // Fallback: center crop
  const w = canvas.width, h = canvas.height;
  const sw = w * 0.62, sh = h * 0.70;
  return { x:(w-sw)/2, y:(h-sh)/2.2, w:sw, h:sh, found:false };
}

function sig(canvas, r) {
  const oc = document.createElement('canvas');
  oc.width = SIG_W; oc.height = SIG_H;
  const ctx = oc.getContext('2d');
  ctx.drawImage(canvas, r.x, r.y, r.w, r.h, 0, 0, SIG_W, SIG_H);
  const px = ctx.getImageData(0, 0, SIG_W, SIG_H).data;
  const g = new Float32Array(SIG_W * SIG_H);
  for (let i=0; i<g.length; i++)
    g[i] = .299*px[i*4] + .587*px[i*4+1] + .114*px[i*4+2];
  // Normalize
  const mean = g.reduce((a,b)=>a+b,0) / g.length;
  for (let i=0;i<g.length;i++) g[i] -= mean;
  const std = Math.sqrt(g.reduce((a,b)=>a+b*b,0)/g.length) || 1;
  for (let i=0;i<g.length;i++) g[i] /= std;
  return g;
}

function avgSigs(arr) {
  const out = new Float32Array(arr[0].length);
  for (const s of arr) for (let i=0;i<s.length;i++) out[i] += s[i];
  for (let i=0;i<out.length;i++) out[i] /= arr.length;
  return out;
}

function cosSim(a, b) {
  let dot=0, na=0, nb=0;
  for (let i=0;i<a.length;i++) { dot+=a[i]*b[i]; na+=a[i]*a[i]; nb+=b[i]*b[i]; }
  return (na*nb < 1e-12) ? 0 : dot / Math.sqrt(na*nb);
}

const sleep = ms => new Promise(r=>setTimeout(r,ms));

// ═══════════════════════════════════════════
//  REGISTER FLOW
// ═══════════════════════════════════════════
async function goRegister() {
  show('sReg');
  document.getElementById('regName').value = '';
  makeDots('regDots', REG_SAMPLES);
  document.getElementById('regBtn').disabled = true;
  stat('regStat','info','📷 در حال راه‌اندازی دوربین…');

  const ok = await openCam('regVid');
  if (!ok) {
    stat('regStat','error','❌ دسترسی به دوربین ممکن نیست. لطفاً اجازه دهید');
    return;
  }
  startOverlay('regOvl', '#4a9eff');
  document.getElementById('regBtn').disabled = false;
  stat('regStat','info','✅ دوربین آماده است — نام وارد کنید و «اسکن چهره» بزنید');
}

async function doRegister() {
  const name = document.getElementById('regName').value.trim();
  if (!name) {
    stat('regStat','error','⚠️ لطفاً یک نام کاربری وارد کنید');
    document.getElementById('regName').focus(); return;
  }
  if (DB.find(u => u.name === name)) {
    stat('regStat','error',\`❌ کاربر "\${name}" قبلاً ثبت‌نام کرده\`); return;
  }

  document.getElementById('regBtn').disabled = true;
  const sigs = [];

  for (let i=0; i<REG_SAMPLES; i++) {
    setDot('regDots', i, 'active');
    stat('regStat','info',\`🔄 در حال اسکن — نمونه \${i+1} از \${REG_SAMPLES}…\`);
    await sleep(380);

    const canvas = captureFrame('regVid','regCap');
    const r = await getRegion(canvas);

    if (r === null) {
      stat('regStat','error','❌ چهره‌ای شناسایی نشد — صورت خود را در وسط کادر قرار دهید');
      document.getElementById('regBtn').disabled = false;
      resetDots('regDots', REG_SAMPLES); return;
    }

    sigs.push(sig(canvas, r));
    setDot('regDots', i, 'done');
  }

  DB.push({ id: Date.now(), name, sig: avgSigs(sigs), date: new Date().toLocaleString('fa-IR') });

  stat('regStat','success',\`🎉 چهره "\${name}" با موفقیت ثبت شد!\`);
  startOverlay('regOvl','#4eff9a');
  await sleep(2000);
  cleanup(); refreshHome(); show('sHome');
}

// ═══════════════════════════════════════════
//  LOGIN FLOW
// ═══════════════════════════════════════════
async function goLogin() {
  if (DB.length === 0) {
    document.getElementById('homeInfo').textContent = '⚠️ ابتدا حداقل یک کاربر ثبت‌نام کند!';
    return;
  }
  show('sLogin');
  makeDots('loginDots', LOGIN_SAMPLES);
  document.getElementById('loginBtn').disabled = true;
  stat('loginStat','info','📷 در حال راه‌اندازی دوربین…');

  const ok = await openCam('loginVid');
  if (!ok) {
    stat('loginStat','error','❌ دسترسی به دوربین ممکن نیست'); return;
  }
  startOverlay('loginOvl','#4a9eff');
  document.getElementById('loginBtn').disabled = false;
  stat('loginStat','info','👤 صورت خود را روبه‌روی دوربین قرار دهید');
}

async function doLogin() {
  document.getElementById('loginBtn').disabled = true;
  const sigs = [];

  for (let i=0; i<LOGIN_SAMPLES; i++) {
    setDot('loginDots', i, 'active');
    stat('loginStat','info',\`🔍 در حال تحلیل — نمونه \${i+1} از \${LOGIN_SAMPLES}…\`);
    await sleep(380);

    const canvas = captureFrame('loginVid','loginCap');
    const r = await getRegion(canvas);

    if (r === null) {
      stat('loginStat','error','❌ چهره‌ای یافت نشد — نزدیک‌تر شوید یا نور را بیشتر کنید');
      document.getElementById('loginBtn').disabled = false;
      resetDots('loginDots', LOGIN_SAMPLES); return;
    }

    sigs.push(sig(canvas, r));
    setDot('loginDots', i, 'done');
  }

  const loginSig = avgSigs(sigs);

  let best = null, bestScore = -1;
  for (const u of DB) {
    const s = cosSim(loginSig, u.sig);
    console.log(\`[FaceID] \${u.name}: \${s.toFixed(4)}\`);
    if (s > bestScore) { bestScore = s; best = u; }
  }

  const thresh = fdOK ? THRESH_API : THRESH_NAPI;

  if (bestScore >= thresh) {
    stat('loginStat','success',\`✅ خوش آمدید \${best.name}! (\${(bestScore*100).toFixed(0)}% تطابق)\`);
    startOverlay('loginOvl','#4eff9a');
    await sleep(1600);
    cleanup();
    showDash(best, bestScore);
  } else {
    stat('loginStat','error',
      \`❌ تطابق چهره کافی نیست (\${(bestScore*100).toFixed(0)}%) — دوباره امتحان کنید\`);
    startOverlay('loginOvl','#ff4a6a');
    await sleep(1500);
    startOverlay('loginOvl','#4a9eff');
    document.getElementById('loginBtn').disabled = false;
    resetDots('loginDots', LOGIN_SAMPLES);
  }
}

// ═══════════════════════════════════════════
//  DASHBOARD
// ═══════════════════════════════════════════
function showDash(user, score) {
  show('sDash');
  document.getElementById('dashName').textContent = \`\${user.name} عزیز 👋\`;
  document.getElementById('dashScore').innerHTML =
    \`دقت شناسایی: <b style="color:var(--success)">\${(score*100).toFixed(0)}%</b>
    &nbsp;|&nbsp; تاریخ ثبت‌نام: \${user.date}\`;
  document.getElementById('dashCount').textContent = \`\${DB.length} نفر\`;

  document.getElementById('dashList').innerHTML = DB.map(u => \`
    <div class="uitem \${u.id===user.id?'me':''}">
      <div class="uavatar">\${u.id===user.id ? '✅' : (u.name[0]||'?')}</div>
      <div style="flex:1;">
        <div class="uname">\${u.name}</div>
        <div class="udate">ثبت‌نام: \${u.date}</div>
      </div>
      \${u.id===user.id ? '<span class="ubadge">● آنلاین</span>' : ''}
    </div>
  \`).join('');
}
<\/script>

`,className:"w-html-embed"})}),I=a=>{const{origin:t,pathname:i,search:n}=new URL(a);return`${t}${i}${n}`},E=c.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),D=({data:a})=>{const{system:t,resources:i,url:n,pageMeta:r}=a,l=I(n),g=c.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:i,breakpoints:b,onError:console.error}),[i]);return e.jsxs(p.Provider,{value:g,children:[e.jsx(m.Provider,{value:n,children:e.jsx(E,{pageKey:l,system:t})}),e.jsx(u,{url:n,pageMeta:r,siteName:d,imageLoader:s,assetBaseUrl:o}),e.jsx(f,{children:r.title})]})},A=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),P=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${x}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),L={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-42/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-42/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{L as configValuesSerialized};
