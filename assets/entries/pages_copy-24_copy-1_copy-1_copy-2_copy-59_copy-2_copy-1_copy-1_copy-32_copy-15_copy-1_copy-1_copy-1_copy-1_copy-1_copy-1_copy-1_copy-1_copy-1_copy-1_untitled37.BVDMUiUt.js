import{j as e,r as l,a as r,i,R as m,b as g,P as u,c as y,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(f,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SparkAid - جعبه کمک لحظه‌ای</title>
<style>
:root {
  --bg: radial-gradient(circle at top, #ffe3ff, #c9efff, #ffe9d6);
  --glass: rgba(255,255,255,0.8);
  --accent: #ff5e9c;
  --accent-dark: #d8408a;
  --text: #1b1b2f;
  --muted: #5c5c7a;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Vazirmatn", "Segoe UI", "Tahoma", sans-serif;
  background: var(--bg);
  min-height: 100vh;
  color: var(--text);
  display: flex;
  justify-content: center;
  padding: 2.5rem 1rem;
  position: relative;
  overflow-x: hidden;
}
.backdrop {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.sparkle {
  position: absolute;
  font-size: 1.8rem;
  opacity: 0.35;
  animation: drift 18s linear infinite;
}
.sparkle:nth-child(1){top:8%;left:15%;animation-delay:0s;}
.sparkle:nth-child(2){top:20%;right:10%;animation-delay:4s;}
.sparkle:nth-child(3){bottom:25%;left:30%;animation-delay:8s;}
.sparkle:nth-child(4){bottom:10%;right:25%;animation-delay:12s;}
.sparkle:nth-child(5){top:45%;left:5%;animation-delay:2s;}
@keyframes drift {
  0% {transform: translateY(0px) rotate(0deg);}
  50% {transform: translateY(-20px) rotate(5deg);}
  100% {transform: translateY(0px) rotate(0deg);}
}
.shell {
  width: min(1120px, 100%);
  backdrop-filter: blur(18px);
  background: rgba(255,255,255,0.72);
  border-radius: 32px;
  padding: clamp(1.5rem, 3vw, 3rem);
  box-shadow: 0 25px 60px rgba(31,60,94,0.15);
  position: relative;
  z-index: 1;
}
.hero {
  text-align: center;
  margin-bottom: 2.5rem;
}
.hero .eyebrow {
  letter-spacing: 2px;
  font-size: 0.85rem;
  color: var(--accent-dark);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.hero h1 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  margin: 0 0 1rem;
}
.hero p {
  color: var(--muted);
  line-height: 1.8;
  max-width: 720px;
  margin: 0 auto;
}
.panel {
  background: var(--glass);
  border-radius: 24px;
  padding: clamp(1rem, 2vw, 2rem);
  margin-bottom: 2rem;
  box-shadow: 0 18px 45px rgba(44,56,85,0.12);
}
.panel h2 {
  margin-top: 0;
  font-size: 1.4rem;
}
.label-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
.range-wrap {
  margin-top: 1.5rem;
}
input[type="range"] {
  width: 100%;
  accent-color: var(--accent);
}
.stress-output {
  margin-top: 1.5rem;
  display: grid;
  gap: 0.8rem;
}
.stress-title {
  font-size: 1.2rem;
  font-weight: 700;
}
.stress-message {
  color: var(--muted);
}
.suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.chip {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(255,94,156,0.12);
  color: var(--accent-dark);
  font-size: 0.9rem;
}
.task-section {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 900px) {
  .task-section {
    grid-template-columns: 320px 1fr;
  }
}
form {
  display: grid;
  gap: 1rem;
}
.input-field {
  display: grid;
  gap: 0.3rem;
}
.input-field label {
  font-weight: 600;
}
input[type="text"] {
  border-radius: 12px;
  border: 1px solid rgba(27,27,47,0.12);
  padding: 0.85rem;
  font-size: 1rem;
}
.slider-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.slider-value {
  min-width: 2rem;
  text-align: center;
  font-weight: 700;
  color: var(--accent-dark);
}
button {
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-size: 1rem;
  font-weight: 700;
  background: linear-gradient(120deg, var(--accent), #ffc45c);
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
button:active {
  transform: scale(0.97);
}
.board {
  display: grid;
  gap: 1rem;
}
@media (min-width: 700px) {
  .board {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
}
.column {
  background: rgba(255,255,255,0.82);
  border-radius: 18px;
  padding: 1rem;
  border: 1px solid rgba(255,255,255,0.4);
}
.column h3 {
  margin: 0;
}
.column p {
  color: var(--muted);
  font-size: 0.9rem;
}
.stack {
  margin-top: 0.8rem;
  display: grid;
  gap: 0.7rem;
}
.task-card {
  border-radius: 14px;
  padding: 0.8rem 1rem;
  background: rgba(255,94,156,0.08);
  border: 1px solid rgba(255,94,156,0.2);
  display: grid;
  gap: 0.4rem;
}
.task-meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.badge {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  background: rgba(27,27,47,0.08);
}
.duo {
  display: grid;
  gap: 1rem;
}
@media (min-width: 700px) {
  .duo {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
}
.card {
  border-radius: 20px;
  padding: 1.5rem;
  background: rgba(255,255,255,0.85);
  box-shadow: 0 12px 35px rgba(26,38,59,0.1);
}
.micro-display {
  background: rgba(255,94,156,0.08);
  border-radius: 16px;
  padding: 1rem;
  margin-top: 1rem;
  min-height: 100px;
  display: grid;
  gap: 0.5rem;
}
.micro-display h3 {
  margin: 0;
  font-size: 1rem;
  color: var(--accent-dark);
}
.micro-display p {
  margin: 0;
  color: var(--text);
  line-height: 1.6;
}
.breath {
  text-align: center;
}
.circle {
  width: 160px;
  height: 160px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: radial-gradient(circle, #ffe0f0, #ffc7d6);
  box-shadow: inset 0 0 30px rgba(255,255,255,0.6), 0 15px 40px rgba(255,94,156,0.3);
  display: grid;
  place-items: center;
  color: var(--accent-dark);
  font-weight: 700;
  transition: transform 0.6s ease;
}
.circle.animate {
  animation: breathe 12s ease-in-out infinite;
}
@keyframes breathe {
  0% {transform: scale(0.85);}
  33% {transform: scale(1.1);}
  66% {transform: scale(0.95);}
  100% {transform: scale(0.85);}
}
.breath p {
  color: var(--muted);
  line-height: 1.5;
}
footer {
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
  margin-top: 1rem;
}
</style>


<div class="backdrop">
  <span class="sparkle">✨</span>
  <span class="sparkle">💗</span>
  <span class="sparkle">🌱</span>
  <span class="sparkle">☀️</span>
  <span class="sparkle">💫</span>
</div>
<main class="shell">
  <header class="hero">
    <p class="eyebrow">ابزار تعادل روزانه</p>
    <h1>SparkAid — جعبه کمک لحظه‌ای</h1>
    <p>یک نقشه کوچک اما پرجادو که در سه گام به شما کمک می‌کند استرس را بسنجید، کارها را اولویت‌بندی کنید و یک عمل ریز اما موثر انجام دهید.</p>
  </header>

  <section class="panel">
    <div class="label-row">
      <h2>📊 آزمایشگاه استرس لحظه‌ای</h2>
      <span id="stressValue">۵/۱۰</span>
    </div>
    <p>لغزنده را روی حال فعلی‌تان بگذارید تا فوراً مسیر پیشنهادی دریافت کنید.</p>
    <div class="range-wrap">
      <input type="range" min="0" max="10" value="5" id="stressRange">
    </div>
    <div class="stress-output">
      <div class="stress-title" id="stressLabel">حالت نیمه‌ابری (۵/۱۰)</div>
      <div class="stress-message" id="stressMessage">تمرکز را به یک کار ۱۰ دقیقه‌ای بچسبانید و بعد خودتان را تشویق کنید.</div>
      <div class="suggestions" id="stressSuggestions"></div>
    </div>
  </section>

  <section class="panel task-section">
    <div>
      <h2>🧭 مربی تراز کارها</h2>
      <p>کارها را با دو خط‌کش ساده (انرژی و تاثیر) وارد کنید تا به بهترین ناحیه هدایت شوند.</p>
      <form id="taskForm">
        <div class="input-field">
          <label for="taskName">عنوان کار</label>
          <input type="text" id="taskName" placeholder="مثلاً: تماس با پزشک">
        </div>
        <div class="input-field">
          <label>انرژی لازم</label>
          <div class="slider-line">
            <input type="range" min="1" max="5" value="3" id="energyRange">
            <span class="slider-value" id="energyValue">۳</span>
          </div>
        </div>
        <div class="input-field">
          <label>تاثیر مورد انتظار</label>
          <div class="slider-line">
            <input type="range" min="1" max="5" value="3" id="impactRange">
            <span class="slider-value" id="impactValue">۳</span>
          </div>
        </div>
        <button type="submit">افزودن به نقشه</button>
      </form>
    </div>
    <div class="board">
      <div class="column">
        <h3>⚡ Spark Wins</h3>
        <p>کم‌انرژی + پراثر — همین الان انجام بده!</p>
        <div class="stack" id="col-spark"></div>
      </div>
      <div class="column">
        <h3>🎯 Deep Focus</h3>
        <p>پر‌انرژی + پراثر — برایش زمان بساز.</p>
        <div class="stack" id="col-focus"></div>
      </div>
      <div class="column">
        <h3>🔁 Steady Care</h3>
        <p>کم‌انرژی + کم‌اثر — نگهداری آرام.</p>
        <div class="stack" id="col-steady"></div>
      </div>
      <div class="column">
        <h3>🌙 Pause &amp; Park</h3>
        <p>پر‌انرژی + کم‌اثر — به وقت مناسب بسپار.</p>
        <div class="stack" id="col-park"></div>
      </div>
    </div>
  </section>

  <section class="panel duo">
    <div class="card">
      <h2>🎲 مولد میکرواحساس مفید</h2>
      <p>یک حرکت کوچک اما معنادار برای ذهن، بدن یا اجتماع پیدا کن.</p>
      <button id="microBtn">ساختن پیشنهاد جدید</button>
      <div class="micro-display" id="microDisplay">
        <h3>برای شروع، روی دکمه کلیک کنید.</h3>
        <p>هر پیشنهاد فقط چند دقیقه زمان می‌خواهد اما می‌تواند حال امروزتان را تکان بدهد.</p>
      </div>
    </div>
    <div class="card breath">
      <h2>🌬️ حلقه تنفس ۴-۴-۴</h2>
      <div class="circle" id="breathCircle">۴</div>
      <button id="breathBtn">شروع چرخه</button>
      <p id="breathCue">با هر بار فشار دادن، حلقه شما را راهنمایی می‌کند.</p>
    </div>
  </section>

  <footer>
    ساخته شده برای اینکه هر روزمان با مهر بیشتری پیش برود. 🌈
  </footer>
</main>

<script>
const stressRange = document.getElementById('stressRange');
const stressLabel = document.getElementById('stressLabel');
const stressMessage = document.getElementById('stressMessage');
const stressSuggestions = document.getElementById('stressSuggestions');
const stressValue = document.getElementById('stressValue');

const stressProfiles = [
  { max: 2, title: 'آرام مثل نسیم', message: 'از این سکون استفاده کن و یک کار مهم اما کوچک را جلو ببر.', tips: ['قدم‌های آرام ۵ دقیقه‌ای', 'به اشتراک گذاشتن یک پیام تشکر', 'برنامه‌ریزی برای فردا'] },
  { max: 5, title: 'حالت نیمه‌ابری', message: 'تمرکز را به یک کار ۱۰ دقیقه‌ای بچسبان و بعد خودت را تشویق کن.', tips: ['مرتب‌سازی سریع میز', 'تنفس ۴-۴-۴ یکبار', 'نوشیدن آب + کشش شانه'] },
  { max: 7, title: 'طوفان در راه', message: 'مرزهای انرژی را مشخص کن: چه چیزی می‌تواند منتظر بماند؟', tips: ['گفتن “نه” مودبانه', 'تقسیم کار بزرگ به ۲ تکه', 'درخواست کمک از یک دوست'] },
  { max: 10, title: 'حالت هشدار', message: 'اول بدن را ایمن کن، بعد فقط یک اقدام ضروری انجام بده.', tips: ['سه نفس عمیق + نوشیدن آب', 'پیام درخواست پشتیبانی', 'خاموش کردن اعلان‌ها برای ۳۰ دقیقه'] }
];

function updateStress() {
  const value = Number(stressRange.value);
  stressValue.textContent = \`\${value}/10\`;
  let profile = stressProfiles.find(p => value <= p.max) || stressProfiles[stressProfiles.length - 1];
  stressLabel.textContent = \`\${profile.title} (\${value}/10)\`;
  stressMessage.textContent = profile.message;
  stressSuggestions.innerHTML = '';
  profile.tips.forEach(tip => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = tip;
    stressSuggestions.appendChild(span);
  });
}
updateStress();
stressRange.addEventListener('input', updateStress);

const energyRange = document.getElementById('energyRange');
const impactRange = document.getElementById('impactRange');
const energyValue = document.getElementById('energyValue');
const impactValue = document.getElementById('impactValue');

energyRange.addEventListener('input', () => energyValue.textContent = energyRange.value);
impactRange.addEventListener('input', () => impactValue.textContent = impactRange.value);

const columns = {
  spark: document.getElementById('col-spark'),
  focus: document.getElementById('col-focus'),
  steady: document.getElementById('col-steady'),
  park: document.getElementById('col-park')
};

document.getElementById('taskForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('taskName').value.trim();
  if (!name) return;
  const energy = Number(energyRange.value);
  const impact = Number(impactRange.value);
  let key = 'steady';
  if (impact >= 3 && energy <= 3) key = 'spark';
  else if (impact >= 3 && energy > 3) key = 'focus';
  else if (impact < 3 && energy > 3) key = 'park';
  const card = document.createElement('div');
  card.className = 'task-card';
  card.innerHTML = \`
    <strong>\${name}</strong>
    <div class="task-meta">
      <span class="badge">انرژی: \${energy}/5</span>
      <span class="badge">تاثیر: \${impact}/5</span>
    </div>
  \`;
  columns[key].prepend(card);
  e.target.reset();
  energyRange.value = impactRange.value = 3;
  energyValue.textContent = impactValue.textContent = '۳';
});

const microData = {
  ذهن: ['۵ دقیقه نوشتن آزاد بدون توقف', 'گوش دادن به صدای طبیعت ضبط‌شده خودتان', 'تنظیم تایمر برای “هیچ کاری نکردن” و نگاه به سقف'],
  بدن: ['۲ دقیقه حرکت حوله‌ای برای شانه‌ها', 'نوشیدن آب گرم با چند قطره لیمو خیالی! (یا واقعی)', 'کف پا روی زمین + کشش ستون فقرات'],
  اجتماع: ['ارسال پیام “یادم بودی” برای یک نفر', 'پیشنهاد کمک به همکار در یک کار ریز', 'تشویق صمیمانه‌ای که منتظرش بودید، همین الان بنویسید']
};

const microBtn = document.getElementById('microBtn');
const microDisplay = document.getElementById('microDisplay');

function randomMoment() {
  const categories = Object.keys(microData);
  const cat = categories[Math.floor(Math.random() * categories.length)];
  const actions = microData[cat];
  const item = actions[Math.floor(Math.random() * actions.length)];
  microDisplay.innerHTML = \`
    <h3>\${cat} — آماده‌ای؟</h3>
    <p>\${item}</p>
    <small>بعد از انجام، از خودت قدردانی کن. این هم یک مهارت است.</small>
  \`;
}
microBtn.addEventListener('click', randomMoment);

const breathCircle = document.getElementById('breathCircle');
const breathBtn = document.getElementById('breathBtn');
const breathCue = document.getElementById('breathCue');
const cues = ['دم بگیر (۴)', 'نگه دار (۴)', 'آرام بازدم (۴)'];
let cueIndex = 0;
let timer = null;

function startBreath() {
  breathCircle.classList.add('animate');
  breathBtn.textContent = 'توقف';
  breathCue.textContent = cues[cueIndex];
  timer = setInterval(() => {
    cueIndex = (cueIndex + 1) % cues.length;
    breathCue.textContent = cues[cueIndex];
  }, 4000);
}

function stopBreath() {
  breathCircle.classList.remove('animate');
  breathBtn.textContent = 'شروع چرخه';
  breathCue.textContent = 'با هر بار فشار دادن، حلقه شما را راهنمایی می‌کند.';
  clearInterval(timer);
  timer = null;
  cueIndex = 0;
}

breathBtn.addEventListener('click', () => {
  if (timer) {
    stopBreath();
  } else {
    startBreath();
  }
});
<\/script>

`,className:"w-html-embed"})}),E=a=>{const{origin:t,pathname:n,search:s}=new URL(a);return`${t}${n}${s}`},S=l.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),B=({data:a})=>{const{system:t,resources:n,url:s,pageMeta:o}=a,c=E(s),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:r,resources:n,breakpoints:b,onError:console.error}),[n]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:s,children:e.jsx(S,{pageKey:c,system:t})}),e.jsx(u,{url:s,pageMeta:o,siteName:d,imageLoader:i,assetBaseUrl:r}),e.jsx(y,{children:o.title})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),I=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${r}${v}`})}),x.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:I},Symbol.toStringTag,{value:"Module"})),V={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-24/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-24/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{V as configValuesSerialized};
