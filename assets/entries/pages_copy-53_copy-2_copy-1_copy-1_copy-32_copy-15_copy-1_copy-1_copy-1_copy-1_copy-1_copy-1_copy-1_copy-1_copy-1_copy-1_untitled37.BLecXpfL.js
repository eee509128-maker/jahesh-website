import{j as e,r as l,a as i,i as n,R as m,b as v,P as u,c as g,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",h=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],w=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(b,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ساز خلق | موسیقی از احساس</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&amp;family=Noto+Kufi+Arabic:wght@300;400;700&amp;display=swap" rel="stylesheet">
<style>
:root {
  --bg: #0a0708;
  --surface: #140f11;
  --border: #2a1e22;
  --accent: #e8754a;
  --accent2: #c9a96e;
  --text: #e8ddd5;
  --muted: #6b5a52;
}
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Noto Kufi Arabic', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

/* Animated vinyl background */
.bg-vinyl {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.vinyl-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(232,117,74,0.06);
  animation: spinSlow linear infinite;
}
.vinyl-circle:nth-child(1) { width: 800px; height: 800px; top: -200px; right: -200px; animation-duration: 60s; }
.vinyl-circle:nth-child(2) { width: 600px; height: 600px; top: -100px; right: -100px; animation-duration: 45s; border-color: rgba(201,169,110,0.06); }
.vinyl-circle:nth-child(3) { width: 400px; height: 400px; top: 0; right: 0; animation-duration: 30s; }
@keyframes spinSlow { to { transform: rotate(360deg); } }

.container {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 0 auto;
  padding: 50px 25px;
}

header {
  text-align: center;
  margin-bottom: 50px;
}
.header-label {
  font-size: 0.7rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 15px;
}
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 400;
  color: var(--text);
  line-height: 1.1;
  margin-bottom: 10px;
}
h1 em {
  font-style: italic;
  color: var(--accent2);
}
.subtitle {
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 5px;
}

/* API input */
.api-strip {
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  align-items: center;
}
.api-strip span { color: var(--accent); font-size: 0.85rem; white-space: nowrap; }
.api-strip input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text);
  font-size: 0.9rem;
  outline: none;
  font-family: monospace;
  direction: ltr;
}
.api-strip input::placeholder { color: var(--muted); }

/* Mood selector */
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  color: var(--accent2);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }

.mood-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 30px;
}
.mood-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 18px 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  user-select: none;
}
.mood-card:hover { transform: translateY(-3px); border-color: var(--accent); }
.mood-card.active {
  border-color: var(--accent);
  background: rgba(232,117,74,0.1);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(232,117,74,0.2);
}
.mood-emoji { font-size: 2rem; display: block; margin-bottom: 6px; }
.mood-name { font-size: 0.78rem; color: var(--muted); }
.mood-card.active .mood-name { color: var(--accent); }

/* Options */
.options-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
}
.opt-group label {
  display: block;
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 8px;
  letter-spacing: 1px;
}
select {
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 10px 14px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.88rem;
  outline: none;
  cursor: pointer;
  transition: border 0.3s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b5a52' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 12px center;
  padding-left: 32px;
}
select:focus { border-color: var(--accent); }

/* Text area */
.desc-area {
  margin-bottom: 30px;
}
textarea {
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 15px;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.9rem;
  height: 90px;
  resize: none;
  outline: none;
  line-height: 1.7;
  transition: border 0.3s;
}
textarea:focus { border-color: var(--accent); }
textarea::placeholder { color: var(--muted); }

/* Generate button */
.gen-btn {
  width: 100%;
  padding: 18px;
  background: var(--accent);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-style: italic;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  margin-bottom: 35px;
}
.gen-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s;
}
.gen-btn:hover::before { transform: translateX(100%); }
.gen-btn:hover { background: #d4623a; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,117,74,0.4); }
.gen-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

/* Result */
.result-area {
  display: none;
}
.result-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}
.result-header {
  padding: 20px 25px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.result-header-left { }
.result-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: var(--accent2);
}
.result-meta { font-size: 0.78rem; color: var(--muted); margin-top: 3px; }
.copy-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--muted);
  padding: 7px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: inherit;
  transition: all 0.3s;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); }

.result-body {
  padding: 25px;
}

/* Track list */
.track-list { margin-bottom: 25px; }
.track-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  animation: slideIn 0.4s ease both;
}
.track-item:last-child { border-bottom: none; }
@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
.track-num {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--border);
  width: 35px;
  text-align: center;
  flex-shrink: 0;
}
.track-info { flex: 1; }
.track-name { font-size: 0.95rem; color: var(--text); margin-bottom: 3px; }
.track-artist { font-size: 0.78rem; color: var(--muted); }
.track-genre {
  font-size: 0.7rem;
  padding: 3px 10px;
  border: 1px solid var(--border);
  border-radius: 20px;
  color: var(--accent);
  white-space: nowrap;
}

.mood-desc {
  padding: 18px;
  background: rgba(232,117,74,0.05);
  border: 1px solid rgba(232,117,74,0.15);
  border-radius: 10px;
  font-size: 0.88rem;
  line-height: 1.8;
  color: #c4b5aa;
  font-style: italic;
}

.loading-bar {
  height: 2px;
  background: var(--border);
  margin-bottom: 35px;
  border-radius: 2px;
  overflow: hidden;
  display: none;
}
.loading-bar.active { display: block; }
.loading-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent2), var(--accent));
  background-size: 200% 100%;
  animation: shimmer 1.5s linear infinite;
  width: 100%;
}
@keyframes shimmer { to { background-position: -200% 0; } }

.wave-viz {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 40px;
  margin-bottom: 20px;
  opacity: 0;
  transition: opacity 0.5s;
}
.wave-viz.visible { opacity: 1; }
.wave-bar {
  width: 3px;
  background: var(--accent);
  border-radius: 2px;
  animation: wave 1.2s ease-in-out infinite;
}
.wave-bar:nth-child(even) { background: var(--accent2); }
@keyframes wave {
  0%, 100% { height: 8px; }
  50% { height: 30px; }
}
</style>



<div class="bg-vinyl">
  <div class="vinyl-circle"></div>
  <div class="vinyl-circle"></div>
  <div class="vinyl-circle"></div>
</div>

<div class="container">
  <header>
    <div class="header-label">✦ هوش مصنوعی موسیقی</div>
    <h1><em>ساز</em> خلق</h1>
    <p class="subtitle">احساست را بنویس، موسیقی‌ات را بساز</p>
    <p class="subtitle" style="font-size:0.72rem;margin-top:5px;color:#3d2e29;">gemma2-9b-it | Groq API</p>
  </header>

  <div class="api-strip">
    <span>🔑</span>
    <input type="password" id="apiKey" placeholder="gsk_... کلید Groq خود را وارد کنید">
  </div>

  <div class="section-title">حال و هوای موسیقی</div>
  <div class="mood-grid">
    <div class="mood-card" onclick="selectMood(this,'melancholic')"><span class="mood-emoji">🌧️</span><div class="mood-name">دلتنگی</div></div>
    <div class="mood-card" onclick="selectMood(this,'euphoric')"><span class="mood-emoji">🌟</span><div class="mood-name">سرخوشی</div></div>
    <div class="mood-card" onclick="selectMood(this,'romantic')"><span class="mood-emoji">🌹</span><div class="mood-name">عاشقانه</div></div>
    <div class="mood-card" onclick="selectMood(this,'aggressive')"><span class="mood-emoji">🔥</span><div class="mood-name">انرژیک</div></div>
    <div class="mood-card" onclick="selectMood(this,'peaceful')"><span class="mood-emoji">🌿</span><div class="mood-name">آرامش</div></div>
    <div class="mood-card" onclick="selectMood(this,'nostalgic')"><span class="mood-emoji">📷</span><div class="mood-name">نوستالژی</div></div>
    <div class="mood-card" onclick="selectMood(this,'mysterious')"><span class="mood-emoji">🌙</span><div class="mood-name">رمزآلود</div></div>
    <div class="mood-card" onclick="selectMood(this,'hopeful')"><span class="mood-emoji">🌅</span><div class="mood-name">امیدبخش</div></div>
  </div>

  <div class="section-title">تنظیمات</div>
  <div class="options-row">
    <div class="opt-group">
      <label>ژانر موسیقی</label>
      <select id="genre">
        <option value="any">هر ژانری</option>
        <option value="classical">کلاسیک</option>
        <option value="jazz">جَز</option>
        <option value="rock">راک</option>
        <option value="electronic">الکترونیک</option>
        <option value="folk">فولک</option>
        <option value="pop">پاپ</option>
        <option value="iranian">موسیقی ایرانی</option>
      </select>
    </div>
    <div class="opt-group">
      <label>تعداد پیشنهادات</label>
      <select id="count">
        <option value="5">۵ قطعه</option>
        <option value="8" selected="">۸ قطعه</option>
        <option value="12">۱۲ قطعه</option>
      </select>
    </div>
    <div class="opt-group">
      <label>دوره زمانی</label>
      <select id="era">
        <option value="any">هر دوره‌ای</option>
        <option value="classical era">کلاسیک (قبل ۱۹۰۰)</option>
        <option value="mid 20th century">نیمه ۱۹۰۰</option>
        <option value="modern">مدرن (بعد ۲۰۰۰)</option>
      </select>
    </div>
  </div>

  <div class="section-title">توضیح بیشتر (اختیاری)</div>
  <div class="desc-area">
    <textarea id="extraDesc" placeholder="مثلاً: یه بعد از ظهر بارانی، تنهام، داره به گذشته فکر می‌کنم..."></textarea>
  </div>

  <button class="gen-btn" id="genBtn" onclick="generate()">♪ بساز پلی‌لیستم را</button>

  <div class="loading-bar" id="loadingBar"><div class="loading-bar-fill"></div></div>

  <div class="result-area" id="resultArea">
    <div class="wave-viz" id="waveViz">
      <div class="wave-bar" style="animation-delay:0s"></div>
      <div class="wave-bar" style="animation-delay:0.1s"></div>
      <div class="wave-bar" style="animation-delay:0.2s"></div>
      <div class="wave-bar" style="animation-delay:0.3s"></div>
      <div class="wave-bar" style="animation-delay:0.15s"></div>
      <div class="wave-bar" style="animation-delay:0.25s"></div>
      <div class="wave-bar" style="animation-delay:0.05s"></div>
    </div>
    <div class="result-card">
      <div class="result-header">
        <div class="result-header-left">
          <div class="result-title" id="resultTitle">پلی‌لیست شما</div>
          <div class="result-meta" id="resultMeta"></div>
        </div>
        <button class="copy-btn" onclick="copyAll()">📋 کپی لیست</button>
      </div>
      <div class="result-body">
        <div class="track-list" id="trackList"></div>
        <div class="mood-desc" id="moodDesc"></div>
      </div>
    </div>
  </div>
</div>

<script>
let selectedMood = '';
const moodNames = {
  melancholic:'دلتنگی', euphoric:'سرخوشی', romantic:'عاشقانه',
  aggressive:'انرژیک', peaceful:'آرامش', nostalgic:'نوستالژی',
  mysterious:'رمزآلود', hopeful:'امیدبخش'
};

function selectMood(el, mood) {
  document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  selectedMood = mood;
}

async function generate() {
  const apiKey = document.getElementById('apiKey').value.trim();
  if (!apiKey) return alert('لطفاً API Key را وارد کنید!');
  if (!selectedMood) return alert('یک حال و هوا انتخاب کنید!');

  const genre = document.getElementById('genre').value;
  const count = document.getElementById('count').value;
  const era = document.getElementById('era').value;
  const extra = document.getElementById('extraDesc').value;

  const btn = document.getElementById('genBtn');
  const loadingBar = document.getElementById('loadingBar');
  btn.disabled = true;
  btn.textContent = '♪ در حال ساختن...';
  loadingBar.classList.add('active');
  document.getElementById('resultArea').style.display = 'none';

  const prompt = \`You are a world-class music curator. Create a playlist of exactly \${count} songs for someone feeling \${selectedMood}.
\${genre !== 'any' ? \`Genre preference: \${genre}\` : ''}
\${era !== 'any' ? \`Era preference: \${era}\` : ''}
\${extra ? \`User's description: "\${extra}"\` : ''}

Return ONLY valid JSON in this exact format, no extra text:
{
  "playlist_title": "creative title in Persian",
  "mood_description": "2-3 sentences in Persian describing how this music matches the mood",
  "tracks": [
    {"name": "Song Title", "artist": "Artist Name", "genre": "genre tag"},
    ...
  ]
}\`;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${apiKey}\`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gemma2-9b-it',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8
      })
    });
    const data = await res.json();
    const content = data.choices[0].message.content;
    const match = content.match(/\\{[\\s\\S]*\\}/);
    const result = JSON.parse(match[0]);

    loadingBar.classList.remove('active');
    document.getElementById('resultArea').style.display = 'block';

    document.getElementById('resultTitle').textContent = result.playlist_title || 'پلی‌لیست شما';
    document.getElementById('resultMeta').textContent = \`\${count} قطعه | \${moodNames[selectedMood]}\`;
    document.getElementById('moodDesc').textContent = result.mood_description || '';

    const waveViz = document.getElementById('waveViz');
    waveViz.classList.add('visible');
    // Randomize wave animation speeds
    waveViz.querySelectorAll('.wave-bar').forEach((b, i) => {
      b.style.animationDuration = (0.8 + Math.random() * 0.8) + 's';
    });

    const trackList = document.getElementById('trackList');
    trackList.innerHTML = '';
    result.tracks.forEach((track, i) => {
      const div = document.createElement('div');
      div.className = 'track-item';
      div.style.animationDelay = (i * 0.07) + 's';
      div.innerHTML = \`
        <div class="track-num">\${String(i+1).padStart(2,'0')}</div>
        <div class="track-info">
          <div class="track-name">\${track.name}</div>
          <div class="track-artist">\${track.artist}</div>
        </div>
        <div class="track-genre">\${track.genre}</div>
      \`;
      trackList.appendChild(div);
    });

  } catch (e) {
    loadingBar.classList.remove('active');
    alert('خطا: ' + e.message);
  } finally {
    btn.disabled = false;
    btn.textContent = '♪ بساز پلی‌لیستم را';
  }
}

function copyAll() {
  const title = document.getElementById('resultTitle').textContent;
  const tracks = [...document.querySelectorAll('.track-item')].map((el, i) => {
    const name = el.querySelector('.track-name').textContent;
    const artist = el.querySelector('.track-artist').textContent;
    return \`\${i+1}. \${name} — \${artist}\`;
  }).join('\\n');
  navigator.clipboard.writeText(\`\${title}\\n\\n\${tracks}\`);
  document.querySelector('.copy-btn').textContent = '✅ کپی شد!';
  setTimeout(() => document.querySelector('.copy-btn').textContent = '📋 کپی لیست', 2000);
}
<\/script>


`,className:"w-html-embed"})})}),z=a=>{const{origin:t,pathname:r,search:o}=new URL(a);return`${t}${r}${o}`},j=l.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:r,url:o,pageMeta:s}=a,c=z(o),p=l.useMemo(()=>({imageLoader:n,assetBaseUrl:i,resources:r,breakpoints:x,onError:console.error}),[r]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(v.Provider,{value:o,children:e.jsx(j,{pageKey:c,system:t})}),e.jsx(u,{url:o,pageMeta:s,siteName:d,imageLoader:n,assetBaseUrl:i}),e.jsx(g,{children:s.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),E=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${i}${f}`})}),h.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},B=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-53/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-53/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:B}}};export{M as configValuesSerialized};
