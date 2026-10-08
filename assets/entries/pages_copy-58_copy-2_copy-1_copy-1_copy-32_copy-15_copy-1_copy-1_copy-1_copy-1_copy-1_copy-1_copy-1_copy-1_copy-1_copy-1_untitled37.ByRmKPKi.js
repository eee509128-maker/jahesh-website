import{j as e,r as l,a as i,i as r,R as g,b as m,P as f,c as v,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],u="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],z=t=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>خواب‌نگار | رویا به تصویر</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&amp;family=Noto+Kufi+Arabic:wght@200;300;400&amp;display=swap" rel="stylesheet">
<style>
:root {
  --void: #05050a;
  --deep: #0d0b14;
  --surface: #12101c;
  --border: #1f1b2e;
  --gold: #d4a843;
  --gold2: #8b6b1a;
  --violet: #7c5cbf;
  --violet2: #4a3580;
  --silver: #9fa8c0;
  --text: #ddd5f0;
  --dim: #5a5270;
}

* { margin:0; padding:0; box-sizing:border-box; }

body {
  background: var(--void);
  color: var(--text);
  font-family: 'Noto Kufi Arabic', sans-serif;
  font-weight: 300;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Cosmic background */
#cosmos {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.nebula {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  animation: drift 20s ease-in-out infinite alternate;
}
.nebula-1 { width:400px;height:400px;background:#4a3580;top:-100px;right:-100px; animation-duration:18s; }
.nebula-2 { width:300px;height:300px;background:#1a3580;bottom:-50px;left:-50px; animation-duration:24s; }
.nebula-3 { width:200px;height:200px;background:#803020;top:40%;left:30%; animation-duration:15s; }
@keyframes drift { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(30px,20px) scale(1.1)} }

/* Scanlines overlay */
body::after {
  content:'';
  position:fixed;
  inset:0;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
  pointer-events:none;
  z-index:999;
}

.wrap {
  position: relative;
  z-index:1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

/* ======= LEFT PANEL ======= */
.left-panel {
  padding: 50px 40px;
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.logo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.logo-en {
  font-family: 'Cinzel', serif;
  font-size: 2.6rem;
  color: var(--gold);
  letter-spacing: 3px;
  line-height: 1;
  text-shadow: 0 0 40px rgba(212,168,67,0.4);
}
.logo-fa {
  font-size: 0.8rem;
  color: var(--dim);
  letter-spacing: 2px;
}
.logo-model {
  font-size: 0.6rem;
  color: var(--gold2);
  letter-spacing: 1px;
  margin-top: 4px;
}

.sep {
  height: 1px;
  background: linear-gradient(90deg, var(--gold2), transparent);
  opacity: 0.4;
}

/* Field */
.field-label {
  font-size: 0.65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
  opacity: 0.7;
}
.api-input, .dream-textarea {
  width: 100%;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: 'Noto Kufi Arabic', sans-serif;
  font-size: 0.85rem;
  font-weight: 300;
  outline: none;
  padding: 12px 16px;
  border-radius: 6px;
  transition: border 0.4s, background 0.4s;
}
.api-input {
  font-family: monospace;
  font-size: 0.78rem;
  direction: ltr;
}
.api-input:focus, .dream-textarea:focus {
  border-color: rgba(212,168,67,0.4);
  background: rgba(212,168,67,0.03);
}
.dream-textarea {
  height: 160px;
  resize: none;
  line-height: 2;
}
.dream-textarea::placeholder, .api-input::placeholder { color: var(--dim); font-style: italic; }

/* Style chips */
.style-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 8px;
}
.style-chip {
  padding: 10px 6px;
  border: 1px solid var(--border);
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  font-size: 0.72rem;
  color: var(--dim);
  transition: all 0.3s;
  user-select: none;
}
.style-chip:hover { border-color: var(--violet); color: var(--text); }
.style-chip.sel { border-color: var(--gold); color: var(--gold); background: rgba(212,168,67,0.07); }
.style-chip .icon { font-size: 1.4rem; display: block; margin-bottom: 4px; }

/* Generate button */
.gen-btn {
  width: 100%;
  padding: 16px;
  background: transparent;
  border: 1px solid var(--gold);
  color: var(--gold);
  font-family: 'Cinzel', serif;
  font-size: 0.9rem;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  transition: color 0.4s;
}
.gen-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
}
.gen-btn:hover::before { transform: scaleX(1); }
.gen-btn:hover { color: #000; }
.gen-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.gen-btn:disabled::before { display:none; }
.gen-btn span { position: relative; z-index:1; }

/* Interpretation scroll */
.interp-scroll {
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
.interp-scroll::-webkit-scrollbar { width: 3px; }
.interp-scroll::-webkit-scrollbar-thumb { background: var(--border); }

.interp-box {
  display: none;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 22px;
  animation: fadeUp 0.6s ease both;
}
.interp-box.visible { display: block; }
@keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

.interp-title {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  color: var(--gold);
  margin-bottom: 5px;
}
.interp-sub {
  font-size: 0.7rem;
  color: var(--dim);
  margin-bottom: 18px;
  letter-spacing: 1px;
}
.interp-section { margin-bottom: 18px; }
.interp-sec-title {
  font-size: 0.65rem;
  letter-spacing: 3px;
  color: var(--violet);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.interp-body {
  font-size: 0.83rem;
  line-height: 2;
  color: #b0aac8;
  font-style: italic;
}
.symbol-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.sym-tag {
  font-size: 0.68rem;
  padding: 3px 12px;
  border: 1px solid var(--violet2);
  border-radius: 20px;
  color: var(--violet);
}
.lucky-row {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.lucky-chip {
  flex: 1;
  text-align: center;
  padding: 10px 6px;
  background: rgba(124,92,191,0.07);
  border: 1px solid var(--violet2);
  border-radius: 8px;
  font-size: 0.72rem;
}
.lucky-chip .lv { font-size: 1rem; margin-bottom: 3px; }
.lucky-chip .ll { color: var(--dim); }

/* ======= RIGHT PANEL ======= */
.right-panel {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--deep);
}

.canvas-header {
  padding: 20px 25px 15px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.canvas-title {
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  color: var(--dim);
  letter-spacing: 2px;
}
.canvas-actions {
  display: flex;
  gap: 8px;
}
.icon-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--dim);
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.7rem;
  transition: all 0.3s;
  font-family: inherit;
}
.icon-btn:hover { border-color: var(--gold); color: var(--gold); }

.canvas-wrap {
  flex: 1;
  position: relative;
  overflow: hidden;
}

#dreamCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Idle state */
.canvas-idle {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: opacity 0.5s;
}
.canvas-idle.hidden { opacity: 0; pointer-events: none; }
.idle-symbol {
  font-size: 3.5rem;
  animation: floatSymbol 3s ease-in-out infinite;
}
@keyframes floatSymbol { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
.idle-text {
  font-size: 0.78rem;
  color: var(--dim);
  text-align: center;
  max-width: 200px;
  line-height: 1.8;
}

/* Drawing progress */
.draw-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(transparent, rgba(13,11,20,0.95));
  opacity: 0;
  transition: opacity 0.4s;
}
.draw-progress.visible { opacity: 1; }
.progress-bar {
  flex: 1;
  height: 2px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--violet), var(--gold));
  width: 0%;
  transition: width 0.1s linear;
  border-radius: 2px;
}
.progress-label {
  font-size: 0.62rem;
  color: var(--dim);
  letter-spacing: 1px;
  white-space: nowrap;
}

/* Art style badge */
.art-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 0.6rem;
  color: var(--dim);
  border: 1px solid var(--border);
  padding: 3px 9px;
  border-radius: 20px;
  letter-spacing: 1px;
  opacity: 0;
  transition: opacity 0.5s;
  background: rgba(13,11,20,0.8);
}
.art-badge.visible { opacity: 1; }

/* Loading spinner for API */
.api-loading {
  display: none;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(124,92,191,0.07);
  border: 1px solid var(--violet2);
  border-radius: 8px;
  font-size: 0.78rem;
  color: var(--violet);
}
.api-loading.show { display: flex; }
.spinner {
  width: 16px; height: 16px;
  border: 2px solid var(--violet2);
  border-top-color: var(--violet);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 768px) {
  .wrap { grid-template-columns: 1fr; }
  .right-panel { position: relative; height: 70vw; }
}
</style>



<div id="cosmos">
  <div class="nebula nebula-1"></div>
  <div class="nebula nebula-2"></div>
  <div class="nebula nebula-3"></div>
</div>

<div class="wrap">

  <!-- LEFT: Input & Interpretation -->
  <div class="left-panel">
    <div class="logo">
      <div class="logo-en">KHAABNEGAR</div>
      <div class="logo-fa">خواب‌نگار — رویا را ببین، تصویر را بساز</div>
      <div class="logo-model">llama-3.3-70b-versatile + canvas stippling engine</div>
    </div>

    <div class="sep"></div>

    <div>
      <div class="field-label">کلید Groq API</div>
      <input class="api-input" type="password" id="apiKey" placeholder="gsk_...">
    </div>

    <div>
      <div class="field-label">رویای خود را شرح دهید</div>
      <textarea class="dream-textarea" id="dreamText" placeholder="هر چیزی که دیدید... مکان، شخصیت‌ها، رنگ‌ها، احساس‌ها. هر چقدر جزئی‌تر، تصویر عجیب‌تر..."></textarea>
    </div>

    <div>
      <div class="field-label">سبک تصویر</div>
      <div class="style-grid">
        <div class="style-chip sel" data-style="cosmic" onclick="selectStyle(this)"><span class="icon">🌌</span>کیهانی</div>
        <div class="style-chip" data-style="dark" onclick="selectStyle(this)"><span class="icon">🌑</span>تاریک</div>
        <div class="style-chip" data-style="ethereal" onclick="selectStyle(this)"><span class="icon">✨</span>رویایی</div>
        <div class="style-chip" data-style="geometric" onclick="selectStyle(this)"><span class="icon">🔷</span>هندسی</div>
        <div class="style-chip" data-style="organic" onclick="selectStyle(this)"><span class="icon">🌿</span>طبیعی</div>
        <div class="style-chip" data-style="surreal" onclick="selectStyle(this)"><span class="icon">🎭</span>سورئال</div>
      </div>
    </div>

    <div class="api-loading" id="apiLoading">
      <div class="spinner"></div>
      <span>در حال خواندن رویای شما...</span>
    </div>

    <button class="gen-btn" id="genBtn" onclick="generate()">
      <span>◈ تفسیر کن و بکش ◈</span>
    </button>

    <div class="interp-scroll">
      <div class="interp-box" id="interpBox">
        <div class="interp-title" id="iTitle">-</div>
        <div class="interp-sub" id="iSub">-</div>

        <div class="interp-section">
          <div class="interp-sec-title">◆ تفسیر کلی</div>
          <div class="interp-body" id="iGeneral"></div>
        </div>
        <div class="interp-section">
          <div class="interp-sec-title">◇ پیام پنهان</div>
          <div class="interp-body" id="iMessage"></div>
        </div>
        <div class="interp-section">
          <div class="interp-sec-title">✦ نمادها</div>
          <div class="symbol-tags" id="iSymbols"></div>
        </div>
        <div class="interp-section">
          <div class="interp-sec-title">☽ فال</div>
          <div class="lucky-row" id="iLucky"></div>
        </div>
        <div class="interp-section">
          <div class="interp-sec-title">🎨 کد تصویر (برای نقاشی)</div>
          <div class="interp-body" id="iArtCode" style="font-size:0.7rem;word-break:break-all;opacity:0.5;display:none;"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- RIGHT: Canvas -->
  <div class="right-panel">
    <div class="canvas-header">
      <div class="canvas-title">DREAM CANVAS</div>
      <div class="canvas-actions">
        <button class="icon-btn" onclick="saveCanvas()">⬇ ذخیره</button>
        <button class="icon-btn" onclick="clearCanvas()">✕ پاک</button>
      </div>
    </div>
    <div class="canvas-wrap">
      <canvas id="dreamCanvas"></canvas>
      <div class="canvas-idle" id="canvasIdle">
        <div class="idle-symbol">◯</div>
        <div class="idle-text">رویای خود را بنویسید تا تصویر نقطه‌ای آن اینجا ظاهر شود</div>
      </div>
      <div class="art-badge" id="artBadge">STIPPLE ART</div>
      <div class="draw-progress" id="drawProgress">
        <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
        <div class="progress-label" id="progressLabel">رسم...</div>
      </div>
    </div>
  </div>

</div>

<script>
// ============================================================
// STATE
// ============================================================
let selectedStyle = 'cosmic';
let drawingAnim = null;

function selectStyle(el) {
  document.querySelectorAll('.style-chip').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  selectedStyle = el.dataset.style;
}

// ============================================================
// CANVAS SETUP
// ============================================================
const canvas = document.getElementById('dreamCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const wrap = canvas.parentElement;
  canvas.width = wrap.clientWidth;
  canvas.height = wrap.clientHeight;
}
resizeCanvas();
window.addEventListener('resize', () => { resizeCanvas(); });

// ============================================================
// STYLE PALETTES
// ============================================================
const palettes = {
  cosmic: {
    bg: ['#05050a','#0a0714'],
    dots: ['#7c5cbf','#d4a843','#4a8fbf','#bf4a7c','#c0cce0','#3a2d5c'],
    glow: true
  },
  dark: {
    bg: ['#050505','#0f0a0a'],
    dots: ['#bf3a2a','#8a1a1a','#c08060','#6a3020','#d0c0b0','#402820'],
    glow: false
  },
  ethereal: {
    bg: ['#08080f','#0a0a18'],
    dots: ['#aab8ff','#e0a0ff','#80d0ff','#ffd0f0','#c0ffee','#8090ff'],
    glow: true
  },
  geometric: {
    bg: ['#080810','#050510'],
    dots: ['#00d4ff','#0080ff','#00ffaa','#8000ff','#ffffff','#004080'],
    glow: true
  },
  organic: {
    bg: ['#030a04','#050f06'],
    dots: ['#2d6a4f','#74c69d','#d4a373','#8fa650','#52b788','#a7c957'],
    glow: false
  },
  surreal: {
    bg: ['#05020a','#0a050f'],
    dots: ['#ff006e','#fb5607','#ffbe0b','#8338ec','#3a86ff','#06d6a0'],
    glow: true
  }
};

// ============================================================
// GENERATE
// ============================================================
async function generate() {
  const apiKey = document.getElementById('apiKey').value.trim();
  const dreamText = document.getElementById('dreamText').value.trim();
  if (!apiKey) return alert('API Key را وارد کنید!');
  if (dreamText.length < 15) return alert('رویا را کامل‌تر توصیف کنید!');

  const btn = document.getElementById('genBtn');
  btn.disabled = true;
  document.getElementById('apiLoading').classList.add('show');
  document.getElementById('interpBox').classList.remove('visible');

  const styleDescriptions = {
    cosmic: 'cosmic, galactic, deep space, stellar',
    dark: 'dark, gothic, shadows, burning embers',
    ethereal: 'ethereal, floating, luminescent, dreamy pastel',
    geometric: 'geometric, crystalline, sharp angles, neon grid',
    organic: 'organic, natural, flowing curves, botanical',
    surreal: 'surreal, psychedelic, vivid contrasting colors'
  };

  const prompt = \`You are a mystical dream interpreter AND a visual artist. Analyze this dream and return ONLY valid JSON.

Dream: "\${dreamText}"
Visual style requested: \${styleDescriptions[selectedStyle]}

Return JSON:
{
  "title": "poetic Persian title for this dream",
  "subtitle": "one Persian sentence",
  "general": "2-3 paragraph Persian interpretation",
  "message": "the hidden subconscious message in Persian",
  "symbols": ["symbol1 in Persian", "symbol2", "symbol3", "symbol4"],
  "lucky": [
    {"icon":"🔢","value":"lucky number","label":"عدد"},
    {"icon":"🎨","value":"lucky color in Persian","label":"رنگ"},
    {"icon":"⭐","value":"lucky day in Persian","label":"روز"}
  ],
  "visual": {
    "primary_shapes": ["circle","spiral","triangle","wave","star","eye","mountain","void","flame","crystal"],
    "density": 0.7,
    "chaos": 0.5,
    "layers": 4,
    "focal_x": 0.5,
    "focal_y": 0.4,
    "secondary_focal_x": 0.8,
    "secondary_focal_y": 0.7,
    "has_horizon": false,
    "has_vortex": true,
    "has_radiance": true,
    "has_fragments": false,
    "size_variance": 0.7,
    "theme_words": ["dream","void","light","depth"]
  }
}

For "visual": choose values that TRULY represent the dream content.
- density: 0.3 (sparse) to 1.0 (dense)
- chaos: 0.1 (ordered) to 1.0 (chaotic)
- focal_x/y: 0.0-1.0 coordinates of main visual focus
- primary_shapes: pick 3-5 that match dream imagery\`;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${apiKey}\`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.88,
        max_tokens: 1500
      })
    });

    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    const content = data.choices[0].message.content;
    const match = content.match(/\\{[\\s\\S]*\\}/);
    if (!match) throw new Error('خروجی JSON یافت نشد');
    const r = JSON.parse(match[0]);

    // Fill interpretation
    document.getElementById('iTitle').textContent = r.title || 'خواب شما';
    document.getElementById('iSub').textContent = r.subtitle || '';
    document.getElementById('iGeneral').textContent = r.general || '';
    document.getElementById('iMessage').textContent = r.message || '';

    const symsEl = document.getElementById('iSymbols');
    symsEl.innerHTML = (r.symbols||[]).map(s=>\`<span class="sym-tag">\${s}</span>\`).join('');

    const luckyEl = document.getElementById('iLucky');
    luckyEl.innerHTML = (r.lucky||[]).map(l=>\`<div class="lucky-chip"><div class="lv">\${l.icon} \${l.value}</div><div class="ll">\${l.label}</div></div>\`).join('');

    document.getElementById('interpBox').classList.add('visible');

    // Draw!
    document.getElementById('apiLoading').classList.remove('show');
    document.getElementById('canvasIdle').classList.add('hidden');
    document.getElementById('artBadge').textContent = styleDescriptions[selectedStyle].split(',')[0].toUpperCase() + ' · STIPPLE';
    document.getElementById('artBadge').classList.add('visible');

    drawDream(r.visual || {});

  } catch(e) {
    document.getElementById('apiLoading').classList.remove('show');
    alert('خطا: ' + e.message);
  } finally {
    btn.disabled = false;
  }
}

// ============================================================
// DRAWING ENGINE — Stipple / Pointillist Art
// ============================================================
function drawDream(visual) {
  if (drawingAnim) cancelAnimationFrame(drawingAnim);

  resizeCanvas();
  const W = canvas.width, H = canvas.height;
  const pal = palettes[selectedStyle];

  // Draw background gradient
  const grad = ctx.createRadialGradient(W*0.5, H*0.4, 0, W*0.5, H*0.5, W*0.8);
  grad.addColorStop(0, pal.bg[1]);
  grad.addColorStop(1, pal.bg[0]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Parse visual params
  const density = clamp(visual.density || 0.6, 0.2, 1.0);
  const chaos   = clamp(visual.chaos   || 0.4, 0.0, 1.0);
  const fX = (visual.focal_x || 0.5) * W;
  const fY = (visual.focal_y || 0.4) * H;
  const fX2 = (visual.secondary_focal_x || 0.8) * W;
  const fY2 = (visual.secondary_focal_y || 0.7) * H;
  const sizeVar = clamp(visual.size_variance || 0.6, 0.1, 1.0);
  const shapes = visual.primary_shapes || ['circle'];
  const hasVortex = visual.has_vortex !== false;
  const hasRadiance = visual.has_radiance !== false;
  const hasHorizon = visual.has_horizon === true;
  const hasFragments = visual.has_fragments === true;
  const layers = Math.min(visual.layers || 4, 6);

  // Total dots based on density
  const totalDots = Math.floor(density * 4000 * (W / 500));
  let drawn = 0;
  const progress = document.getElementById('drawProgress');
  const fill = document.getElementById('progressFill');
  const label = document.getElementById('progressLabel');
  progress.classList.add('visible');

  // Pre-generate all dot data
  const dots = [];
  for (let i = 0; i < totalDots; i++) {
    dots.push(generateDot(W, H, fX, fY, fX2, fY2, density, chaos, sizeVar, shapes, pal, hasVortex, hasRadiance, hasHorizon, hasFragments, layers, i, totalDots));
  }

  // Sort by layer (draw back to front)
  dots.sort((a, b) => a.layer - b.layer);

  // Animate drawing
  const batchSize = 80;
  function drawBatch() {
    const end = Math.min(drawn + batchSize, dots.length);
    for (let i = drawn; i < end; i++) {
      const d = dots[i];
      ctx.save();
      ctx.globalAlpha = d.alpha;

      if (pal.glow && d.size > 2) {
        ctx.shadowColor = d.color;
        ctx.shadowBlur = d.size * 2;
      }

      ctx.fillStyle = d.color;
      ctx.beginPath();

      if (d.shape === 'dot') {
        ctx.arc(d.x, d.y, d.size, 0, Math.PI*2);
      } else if (d.shape === 'diamond') {
        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(Math.PI/4);
        ctx.rect(-d.size*0.6, -d.size*0.6, d.size*1.2, d.size*1.2);
        ctx.restore();
      } else if (d.shape === 'line') {
        ctx.restore();
        ctx.save();
        ctx.globalAlpha = d.alpha * 0.5;
        ctx.strokeStyle = d.color;
        ctx.lineWidth = d.size * 0.3;
        if (pal.glow) { ctx.shadowColor = d.color; ctx.shadowBlur = d.size; }
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + d.lx, d.y + d.ly);
        ctx.stroke();
        ctx.restore();
        drawn++;
        continue;
      } else {
        // cross/plus
        ctx.arc(d.x, d.y, d.size * 0.5, 0, Math.PI*2);
      }

      ctx.fill();
      ctx.restore();
    }
    drawn = end;

    const pct = drawn / dots.length * 100;
    fill.style.width = pct + '%';
    label.textContent = Math.floor(pct) + '%';

    if (drawn < dots.length) {
      drawingAnim = requestAnimationFrame(drawBatch);
    } else {
      // Add final overlays
      addOverlays(W, H, fX, fY, pal, hasVortex, hasRadiance, shapes);
      progress.classList.remove('visible');
      fill.style.width = '0%';
    }
  }
  drawBatch();
}

function generateDot(W, H, fX, fY, fX2, fY2, density, chaos, sizeVar, shapes, pal, hasVortex, hasRadiance, hasHorizon, hasFragments, layers, idx, total) {
  const t = idx / total;
  const layer = Math.floor(t * layers);

  let x, y;
  const strategy = rand();

  if (strategy < 0.4) {
    // Focal point cluster
    const focal = rand() < 0.7 ? {x:fX, y:fY} : {x:fX2, y:fY2};
    const angle = rand() * Math.PI * 2;
    const r = Math.pow(rand(), 0.6) * Math.min(W,H) * 0.45 * (0.3 + layer/layers*0.7);
    x = focal.x + Math.cos(angle) * r + (rand()-0.5) * chaos * 150;
    y = focal.y + Math.sin(angle) * r + (rand()-0.5) * chaos * 150;
  } else if (strategy < 0.65 && hasVortex) {
    // Vortex/spiral
    const t2 = rand();
    const angle = t2 * Math.PI * 8 + rand() * chaos * 3;
    const r = t2 * Math.min(W,H) * 0.48;
    x = fX + Math.cos(angle) * r;
    y = fY + Math.sin(angle) * r;
  } else if (strategy < 0.75 && hasHorizon) {
    // Horizon line
    x = rand() * W;
    y = H * 0.5 + (rand()-0.5) * H * 0.08 * chaos;
  } else {
    // Random scattered
    x = rand() * W;
    y = rand() * H;
  }

  // Clamp
  x = clamp(x, 0, W);
  y = clamp(y, 0, H);

  // Distance-based size
  const dx = x - fX, dy = y - fY;
  const dist = Math.sqrt(dx*dx + dy*dy);
  const maxDist = Math.sqrt(W*W + H*H) * 0.5;
  const distFactor = 1 - (dist / maxDist) * 0.7;

  const baseSize = (0.4 + rand() * sizeVar * 3.5) * distFactor;
  const size = Math.max(0.3, baseSize);

  // Color
  const color = pal.dots[Math.floor(rand() * pal.dots.length)];

  // Alpha: denser near focus
  const alpha = 0.2 + distFactor * 0.7 * (0.3 + rand() * 0.7);

  // Shape
  const shapeRoll = rand();
  let shape;
  if (shapeRoll < 0.75) shape = 'dot';
  else if (shapeRoll < 0.88) shape = 'diamond';
  else if (shapeRoll < 0.95) shape = 'line';
  else shape = 'cross';

  const lAngle = rand() * Math.PI * 2;
  const lLen = size * (2 + rand() * 3);

  return { x, y, size, color, alpha, layer, shape, lx: Math.cos(lAngle)*lLen, ly: Math.sin(lAngle)*lLen };
}

function addOverlays(W, H, fX, fY, pal, hasVortex, hasRadiance, shapes) {
  // Radiance at focal point
  if (hasRadiance) {
    const rg = ctx.createRadialGradient(fX, fY, 0, fX, fY, Math.min(W,H)*0.25);
    rg.addColorStop(0, hexToRgba(pal.dots[0], 0.15));
    rg.addColorStop(1, 'transparent');
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, W, H);
  }

  // Edge darkening vignette
  const vg = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.3, W/2, H/2, Math.max(W,H)*0.8);
  vg.addColorStop(0, 'transparent');
  vg.addColorStop(1, 'rgba(0,0,0,0.6)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W, H);

  // Fine noise layer
  ctx.save();
  ctx.globalAlpha = 0.04;
  for (let i = 0; i < 2000; i++) {
    ctx.fillStyle = pal.dots[Math.floor(rand()*pal.dots.length)];
    ctx.fillRect(rand()*W, rand()*H, 1, 1);
  }
  ctx.restore();
}

// ============================================================
// UTILS
// ============================================================
let _seed = Date.now();
function rand() {
  _seed = (_seed * 1664525 + 1013904223) & 0xffffffff;
  return ((_seed >>> 0) / 0xffffffff);
}
function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return \`rgba(\${r},\${g},\${b},\${alpha})\`;
}

function saveCanvas() {
  const a = document.createElement('a');
  a.download = 'dream-art.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
}

function clearCanvas() {
  if (drawingAnim) cancelAnimationFrame(drawingAnim);
  _seed = Date.now();
  resizeCanvas();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById('canvasIdle').classList.remove('hidden');
  document.getElementById('artBadge').classList.remove('visible');
  document.getElementById('drawProgress').classList.remove('visible');
  document.getElementById('progressFill').style.width = '0%';
  document.getElementById('interpBox').classList.remove('visible');
}

// Randomize seed on each generation
const _origGenerate = generate;
<\/script>


`,className:"w-html-embed"})})}),S=t=>{const{origin:a,pathname:o,search:s}=new URL(t);return`${a}${o}${s}`},k=l.memo(({pageKey:t,system:a})=>e.jsx(z,{system:a},t),(t,a)=>t.pageKey===a.pageKey),E=({data:t})=>{const{system:a,resources:o,url:s,pageMeta:n}=t,c=S(s),p=l.useMemo(()=>({imageLoader:r,assetBaseUrl:i,resources:o,breakpoints:x,onError:console.error}),[o]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(m.Provider,{value:s,children:e.jsx(k,{pageKey:c,system:a})}),e.jsx(f,{url:s,pageMeta:n,siteName:d,imageLoader:r,assetBaseUrl:i}),e.jsx(v,{children:n.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),A=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${i}${u}`})}),b.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a}`,as:"font",crossOrigin:"anonymous"},a)),w.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a}`,as:"image"},a))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-58/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-58/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{B as configValuesSerialized};
