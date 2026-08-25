import{j as e,r as l,a,i as r,R as m,b as g,P as u,c as v,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",f=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],w=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(b,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>خواب‌نامه | تفسیر رویا با هوش مصنوعی</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300;1,500&amp;family=Noto+Kufi+Arabic:wght@300;400&amp;display=swap" rel="stylesheet">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --ink: #08090d;
  --paper: #0f1018;
  --gold: #c9a84c;
  --gold2: #8b6914;
  --silver: #9ba3b8;
  --text: #d4cfc8;
  --border: #1e2030;
  --glow: rgba(201,168,76,0.15);
}

body {
  font-family: 'Noto Kufi Arabic', sans-serif;
  font-weight: 300;
  background: var(--ink);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='4' fill='none' stroke='%23c9a84c' stroke-width='1'/%3E%3C/svg%3E") 10 10, auto;
}

/* Star field */
.stars {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.star {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  animation: twinkle var(--dur, 3s) ease-in-out infinite var(--delay, 0s);
}
@keyframes twinkle {
  0%, 100% { opacity: var(--min-op, 0.1); }
  50% { opacity: var(--max-op, 0.7); }
}

.moon {
  position: fixed;
  top: 60px;
  left: 60px;
  width: 80px;
  height: 80px;
  pointer-events: none;
  z-index: 0;
}
.moon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #f0e8d0, #c9a84c, #8b6914);
  box-shadow: 0 0 40px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.1);
  animation: moonGlow 4s ease-in-out infinite;
}
@keyframes moonGlow {
  0%, 100% { box-shadow: 0 0 40px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.1); }
  50% { box-shadow: 0 0 60px rgba(201,168,76,0.6), 0 0 120px rgba(201,168,76,0.2); }
}

/* Main */
.container {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 70px 25px 50px;
}

header {
  text-align: center;
  margin-bottom: 55px;
}
.ornament {
  color: var(--gold);
  font-size: 1.2rem;
  letter-spacing: 8px;
  margin-bottom: 20px;
  opacity: 0.7;
}
h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 4rem;
  font-weight: 300;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: 2px;
}
.tagline {
  font-size: 0.8rem;
  color: var(--silver);
  letter-spacing: 2px;
  opacity: 0.7;
}
.model-tag {
  display: inline-block;
  margin-top: 12px;
  font-size: 0.65rem;
  color: var(--gold2);
  border: 1px solid var(--gold2);
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 1px;
  opacity: 0.6;
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 30px 0;
  opacity: 0.3;
}
.divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--gold); }
.divider span { color: var(--gold); font-size: 0.7rem; }

/* Form */
.field { margin-bottom: 25px; }
.field label {
  display: block;
  font-size: 0.78rem;
  color: var(--gold);
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

input[type="password"], textarea, select {
  width: 100%;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-bottom: 1px solid rgba(201,168,76,0.2);
  color: var(--text);
  padding: 14px 18px;
  font-family: 'Noto Kufi Arabic', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  outline: none;
  transition: all 0.4s;
  border-radius: 4px;
}
input[type="password"]:focus, textarea:focus {
  border-color: rgba(201,168,76,0.5);
  background: rgba(201,168,76,0.03);
  box-shadow: 0 0 20px rgba(201,168,76,0.08);
}
textarea { height: 160px; resize: none; line-height: 1.8; }
textarea::placeholder, input::placeholder { color: #3a3d4a; font-style: italic; }

.select-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
}
select {
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23c9a84c' d='M5 6L0 0h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 14px center;
  padding-left: 36px;
}

/* Symbols */
.symbols-title {
  font-size: 0.75rem;
  color: var(--silver);
  margin-bottom: 12px;
  opacity: 0.7;
}
.symbol-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
}
.chip {
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: 20px;
  font-size: 0.78rem;
  color: var(--silver);
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
}
.chip:hover, .chip.active {
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(201,168,76,0.08);
}

/* Interpret button */
.interpret-btn {
  width: 100%;
  padding: 18px;
  background: transparent;
  border: 1px solid var(--gold);
  border-radius: 4px;
  color: var(--gold);
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-style: italic;
  cursor: pointer;
  transition: all 0.4s;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}
.interpret-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gold);
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
}
.interpret-btn:hover::before { transform: translateY(0); }
.interpret-btn:hover { color: #000; }
.interpret-btn span { position: relative; z-index: 1; }
.interpret-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.interpret-btn:disabled::before { display: none; }

/* Loading */
.loading-state {
  display: none;
  text-align: center;
  padding: 50px;
}
.loading-state.active { display: block; }
.loading-moon {
  font-size: 3rem;
  animation: floatMoon 2s ease-in-out infinite;
  display: block;
  margin-bottom: 15px;
}
@keyframes floatMoon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.loading-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: var(--silver);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

/* Result */
.result-scroll {
  display: none;
}
.result-scroll.active { display: block; }

.scroll-container {
  background: rgba(201,168,76,0.02);
  border: 1px solid rgba(201,168,76,0.2);
  border-radius: 8px;
  padding: 35px;
  position: relative;
}
.scroll-container::before, .scroll-container::after {
  content: '— ✦ —';
  display: block;
  text-align: center;
  color: var(--gold);
  font-family: 'Cormorant Garamond', serif;
  opacity: 0.4;
  letter-spacing: 4px;
  margin: 0 0 25px;
}
.scroll-container::after { margin: 25px 0 0; }

.interp-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  color: var(--gold);
  text-align: center;
  margin-bottom: 6px;
  font-style: italic;
}
.interp-subtitle {
  text-align: center;
  font-size: 0.75rem;
  color: var(--silver);
  opacity: 0.6;
  margin-bottom: 30px;
  letter-spacing: 2px;
}

.interp-section {
  margin-bottom: 25px;
}
.interp-section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  color: var(--gold);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.interp-section-title::after { content: ''; flex: 1; height: 1px; background: rgba(201,168,76,0.2); }
.interp-text {
  font-size: 0.92rem;
  line-height: 2;
  color: #b8b4ae;
  font-style: italic;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.result-tag {
  padding: 5px 14px;
  border: 1px solid rgba(201,168,76,0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  color: var(--gold);
  background: rgba(201,168,76,0.05);
}

.lucky-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 10px;
}
.lucky-item {
  text-align: center;
  padding: 14px;
  background: rgba(201,168,76,0.04);
  border: 1px solid rgba(201,168,76,0.15);
  border-radius: 8px;
}
.lucky-val { font-size: 1.4rem; margin-bottom: 4px; }
.lucky-lbl { font-size: 0.68rem; color: var(--silver); opacity: 0.7; }

.share-btn {
  width: 100%;
  margin-top: 25px;
  padding: 14px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--silver);
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s;
}
.share-btn:hover { border-color: var(--gold); color: var(--gold); }
</style>



<div class="stars" id="stars"></div>
<div class="moon"><div class="moon-circle"></div></div>

<div class="container">
  <header>
    <div class="ornament">✦ ✦ ✦</div>
    <h1>خواب‌نامه</h1>
    <div class="tagline">تفسیر رویا با هوش مصنوعی</div>
    <div class="model-tag">llama-3.3-70b-versatile | Groq</div>
  </header>

  <div class="field">
    <label>کلید API</label>
    <input type="password" id="apiKey" placeholder="gsk_...">
  </div>

  <div class="divider"><span>رویا</span></div>

  <div class="field">
    <label>رویای خود را شرح دهید</label>
    <textarea id="dreamText" placeholder="هر آنچه در خواب دیدید، هر چقدر هم عجیب، اینجا بنویسید...
مکان، شخصیت‌ها، رویدادها، احساسات را شرح دهید..."></textarea>
  </div>

  <div class="select-row">
    <div>
      <div class="field" style="margin-bottom:0">
        <label>نوع خواب</label>
        <select id="dreamType">
          <option value="narrative">روایی / داستانی</option>
          <option value="symbolic">نمادین / انتزاعی</option>
          <option value="recurring">تکرارشونده</option>
          <option value="nightmare">کابوس</option>
          <option value="lucid">خواب آگاه</option>
        </select>
      </div>
    </div>
    <div>
      <div class="field" style="margin-bottom:0">
        <label>احساس در خواب</label>
        <select id="dreamEmotion">
          <option value="peaceful">آرامش</option>
          <option value="anxious">اضطراب</option>
          <option value="joyful">شادی</option>
          <option value="fearful">ترس</option>
          <option value="confused">سردرگمی</option>
          <option value="sad">غم</option>
          <option value="excited">هیجان</option>
        </select>
      </div>
    </div>
  </div>

  <div class="symbols-title">نمادهایی که دیدید (انتخاب کنید):</div>
  <div class="symbol-chips">
    <span class="chip" onclick="toggleChip(this)">💧 آب</span>
    <span class="chip" onclick="toggleChip(this)">🔥 آتش</span>
    <span class="chip" onclick="toggleChip(this)">🌊 دریا</span>
    <span class="chip" onclick="toggleChip(this)">🦋 پروانه</span>
    <span class="chip" onclick="toggleChip(this)">🐍 مار</span>
    <span class="chip" onclick="toggleChip(this)">🌳 درخت</span>
    <span class="chip" onclick="toggleChip(this)">🏠 خانه</span>
    <span class="chip" onclick="toggleChip(this)">✈️ پرواز</span>
    <span class="chip" onclick="toggleChip(this)">🔑 کلید</span>
    <span class="chip" onclick="toggleChip(this)">🪞 آینه</span>
    <span class="chip" onclick="toggleChip(this)">🌙 ماه</span>
    <span class="chip" onclick="toggleChip(this)">⚡ طوفان</span>
    <span class="chip" onclick="toggleChip(this)">🧩 راهرو</span>
    <span class="chip" onclick="toggleChip(this)">👁️ چشم</span>
  </div>

  <button class="interpret-btn" id="interpretBtn" onclick="interpret()">
    <span>✦ تفسیر رویا ✦</span>
  </button>

  <div class="divider" style="margin-top:30px;"><span>☽</span></div>

  <div class="loading-state" id="loadingState">
    <span class="loading-moon">🌙</span>
    <div class="loading-text">در حال خواندن رویای شما...</div>
  </div>

  <div class="result-scroll" id="resultArea">
    <div class="scroll-container">
      <div class="interp-title" id="interpTitle">تفسیر رویا</div>
      <div class="interp-subtitle" id="interpSubtitle"></div>

      <div class="interp-section">
        <div class="interp-section-title">♦ تفسیر کلی</div>
        <div class="interp-text" id="generalInterp"></div>
      </div>

      <div class="interp-section">
        <div class="interp-section-title">◈ معنی نمادها</div>
        <div class="interp-text" id="symbolInterp"></div>
      </div>

      <div class="interp-section">
        <div class="interp-section-title">◇ پیام ناخودآگاه</div>
        <div class="interp-text" id="subconscious"></div>
      </div>

      <div class="interp-section">
        <div class="interp-section-title">✦ نمادهای کلیدی</div>
        <div class="tags-row" id="keySymbols"></div>
      </div>

      <div class="interp-section">
        <div class="interp-section-title">☽ فال خواب</div>
        <div class="lucky-row" id="luckyItems"></div>
      </div>
    </div>

    <button class="share-btn" onclick="copyResult()">📜 کپی تفسیر</button>
  </div>
</div>

<script>
// Generate stars
const starsEl = document.getElementById('stars');
for (let i = 0; i < 150; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 2 + 0.5;
  s.style.cssText = \`
    width: \${size}px; height: \${size}px;
    top: \${Math.random() * 100}%;
    left: \${Math.random() * 100}%;
    --dur: \${2 + Math.random() * 4}s;
    --delay: \${Math.random() * 4}s;
    --min-op: \${0.05 + Math.random() * 0.1};
    --max-op: \${0.3 + Math.random() * 0.6};
  \`;
  starsEl.appendChild(s);
}

function toggleChip(el) { el.classList.toggle('active'); }

function getSelectedSymbols() {
  return [...document.querySelectorAll('.chip.active')].map(c => c.textContent.trim()).join(', ');
}

async function interpret() {
  const apiKey = document.getElementById('apiKey').value.trim();
  const dream = document.getElementById('dreamText').value.trim();
  if (!apiKey) return alert('API Key را وارد کنید!');
  if (!dream || dream.length < 20) return alert('لطفاً رویای خود را کامل‌تر توصیف کنید!');

  const dreamType = document.getElementById('dreamType').value;
  const dreamEmotion = document.getElementById('dreamEmotion').value;
  const symbols = getSelectedSymbols();

  const btn = document.getElementById('interpretBtn');
  btn.disabled = true;
  document.getElementById('loadingState').classList.add('active');
  document.getElementById('resultArea').classList.remove('active');

  const prompt = \`You are a mystical dream interpreter combining Jungian psychology, Persian mysticism, and universal symbolism.

Interpret this dream in Persian language. Return ONLY valid JSON:
{
  "title": "poetic title for this dream in Persian",
  "subtitle": "one line Persian subtitle",
  "general": "2-3 paragraphs general interpretation in Persian",
  "symbols": "interpretation of symbols and elements in Persian",
  "subconscious": "what the subconscious is trying to say, in Persian",
  "key_symbols": ["symbol1", "symbol2", "symbol3", "symbol4"],
  "lucky": [
    {"emoji": "🔢", "value": "lucky number", "label": "عدد شانس"},
    {"emoji": "🎨", "value": "lucky color in Persian", "label": "رنگ شانس"},
    {"emoji": "⭐", "value": "lucky day in Persian", "label": "روز شانس"}
  ]
}

Dream details:
- Description: "\${dream}"
- Type: \${dreamType}
- Emotion felt: \${dreamEmotion}
\${symbols ? \`- Symbols present: \${symbols}\` : ''}\`;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${apiKey}\`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.85
      })
    });
    const data = await res.json();
    const content = data.choices[0].message.content;
    const match = content.match(/\\{[\\s\\S]*\\}/);
    const r = JSON.parse(match[0]);

    document.getElementById('loadingState').classList.remove('active');
    document.getElementById('resultArea').classList.add('active');
    document.getElementById('interpTitle').textContent = r.title || 'تفسیر رویا';
    document.getElementById('interpSubtitle').textContent = r.subtitle || '';
    document.getElementById('generalInterp').textContent = r.general || '';
    document.getElementById('symbolInterp').textContent = r.symbols || '';
    document.getElementById('subconscious').textContent = r.subconscious || '';

    const ks = document.getElementById('keySymbols');
    ks.innerHTML = (r.key_symbols || []).map(s => \`<span class="result-tag">\${s}</span>\`).join('');

    const li = document.getElementById('luckyItems');
    li.innerHTML = (r.lucky || []).map(l => \`
      <div class="lucky-item">
        <div class="lucky-val">\${l.emoji} \${l.value}</div>
        <div class="lucky-lbl">\${l.label}</div>
      </div>
    \`).join('');

    document.getElementById('resultArea').scrollIntoView({ behavior: 'smooth' });
  } catch (e) {
    document.getElementById('loadingState').classList.remove('active');
    alert('خطا: ' + e.message);
  } finally {
    btn.disabled = false;
  }
}

function copyResult() {
  const t = document.getElementById('interpTitle').textContent;
  const g = document.getElementById('generalInterp').textContent;
  const s = document.getElementById('symbolInterp').textContent;
  const u = document.getElementById('subconscious').textContent;
  navigator.clipboard.writeText(\`\${t}\\n\\n\${g}\\n\\nنمادها:\\n\${s}\\n\\nپیام ناخودآگاه:\\n\${u}\`);
  document.querySelector('.share-btn').textContent = '✅ کپی شد!';
  setTimeout(() => document.querySelector('.share-btn').textContent = '📜 کپی تفسیر', 2000);
}
<\/script>


`,className:"w-html-embed"})})}),z=o=>{const{origin:t,pathname:n,search:i}=new URL(o);return`${t}${n}${i}`},C=l.memo(({pageKey:o,system:t})=>e.jsx(w,{system:t},o),(o,t)=>o.pageKey===t.pageKey),S=({data:o})=>{const{system:t,resources:n,url:i,pageMeta:s}=o,d=z(i),p=l.useMemo(()=>({imageLoader:r,assetBaseUrl:a,resources:n,breakpoints:x,onError:console.error}),[n]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:i,children:e.jsx(C,{pageKey:d,system:t})}),e.jsx(u,{url:i,pageMeta:s,siteName:c,imageLoader:r,assetBaseUrl:a}),e.jsx(v,{children:s.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),I=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${a}${h}`})}),f.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:I},Symbol.toStringTag,{value:"Module"})),$={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-54/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-54/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{$ as configValuesSerialized};
