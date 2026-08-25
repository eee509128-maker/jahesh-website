import{j as e,r as l,a as r,i as o,R as u,b as m,P as g,c as f,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],B=a=>e.jsx("body",{className:"w-element",children:e.jsx(b,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>تایمر معکوس پیشرفته و زیبا</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@700&display=swap');

  /* پس زمینه گرادیانت متحرک */
  @keyframes gradientBG {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Vazirmatn', sans-serif;
    background: linear-gradient(-45deg, #ff416c, #ff4b2b, #1f4037, #99f2c8);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .container {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 40px 60px;
    box-shadow: 0 0 30px rgba(255, 75, 43, 0.7);
    text-align: center;
    width: 350px;
  }

  h1 {
    margin-bottom: 30px;
    font-size: 2.5rem;
    letter-spacing: 3px;
  }

  .time-display {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 40px;
    letter-spacing: 10px;
    text-shadow: 0 0 20px #ff4b2b, 0 0 40px #ff4b2b;
  }

  input[type="range"] {
    width: 100%;
    -webkit-appearance: none;
    height: 10px;
    border-radius: 5px;
    background: #ff4b2b;
    outline: none;
    margin-bottom: 25px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    box-shadow: 0 0 10px #ff4b2b;
    transition: background 0.3s ease;
  }

  input[type="range"]:hover {
    background: #ff6a4a;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
  }

  button {
    background: #ff4b2b;
    border: none;
    border-radius: 12px;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 12px 30px;
    cursor: pointer;
    box-shadow: 0 0 15px #ff4b2b;
    transition: background 0.3s ease, transform 0.2s ease;
    user-select: none;
  }

  button:hover {
    background: #ff6a4a;
    transform: scale(1.1);
  }

  button:active {
    transform: scale(0.95);
  }

  .label-range {
    font-size: 1.1rem;
    margin-bottom: 10px;
    user-select: none;
  }
</style>


  <div class="container" role="main" aria-label="تایمر معکوس پیشرفته">
    <h1>تایمر معکوس</h1>
    <div class="time-display" aria-live="polite" aria-atomic="true" id="timeDisplay">00:00</div>

    <label for="timerRange" class="label-range">تنظیم زمان (دقیقه): <span id="rangeValue">1</span></label>
    <input type="range" id="timerRange" min="1" max="60" value="1" aria-valuemin="1" aria-valuemax="60" aria-valuenow="1" aria-label="تنظیم زمان تایمر به دقیقه">

    <div class="buttons">
      <button id="startBtn" aria-label="شروع تایمر">شروع</button>
      <button id="pauseBtn" aria-label="توقف تایمر" disabled="">توقف</button>
      <button id="resetBtn" aria-label="بازنشانی تایمر" disabled="">بازنشانی</button>
    </div>
  </div>

<script>
  const timerRange = document.getElementById('timerRange');
  const rangeValue = document.getElementById('rangeValue');
  const timeDisplay = document.getElementById('timeDisplay');
  const startBtn = document.getElementById('startBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const resetBtn = document.getElementById('resetBtn');

  let totalSeconds = parseInt(timerRange.value) * 60;
  let remainingSeconds = totalSeconds;
  let timerInterval = null;
  let isRunning = false;

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return \`\${m}:\${s}\`;
  }

  function updateDisplay(seconds) {
    timeDisplay.textContent = formatTime(seconds);
  }

  timerRange.addEventListener('input', () => {
    if (isRunning) return; // غیر فعال کردن تغییر زمان هنگام اجرا
    totalSeconds = parseInt(timerRange.value) * 60;
    remainingSeconds = totalSeconds;
    updateDisplay(remainingSeconds);
    rangeValue.textContent = timerRange.value;
  });

  startBtn.addEventListener('click', () => {
    if (isRunning) return;
    if (remainingSeconds <= 0) return;

    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    timerRange.disabled = true;

    timerInterval = setInterval(() => {
      remainingSeconds--;
      updateDisplay(remainingSeconds);

      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        resetBtn.disabled = false;
        timerRange.disabled = false;
        alert('زمان به پایان رسید! 🎉');
      }
    }, 1000);
  });

  pauseBtn.addEventListener('click', () => {
    if (!isRunning) return;

    clearInterval(timerInterval);
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    remainingSeconds = totalSeconds;
    updateDisplay(remainingSeconds);

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    timerRange.disabled = false;
  });

  // مقدار اولیه نمایش زمان
  updateDisplay(remainingSeconds);
<\/script>

`,className:"w-html-embed"})}),w=a=>{const{origin:t,pathname:i,search:n}=new URL(a);return`${t}${i}${n}`},R=l.memo(({pageKey:a,system:t})=>e.jsx(B,{system:t},a),(a,t)=>a.pageKey===t.pageKey),j=({data:a})=>{const{system:t,resources:i,url:n,pageMeta:s}=a,p=w(n),c=l.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:i,breakpoints:x,onError:console.error}),[i]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:n,children:e.jsx(R,{pageKey:p,system:t})}),e.jsx(g,{url:n,pageMeta:s,siteName:d,imageLoader:o,assetBaseUrl:r}),e.jsx(f,{children:s.title})]})},k=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),P=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${h}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),_={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-19/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-19/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{_ as configValuesSerialized};
