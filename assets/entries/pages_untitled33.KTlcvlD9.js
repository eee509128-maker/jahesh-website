import{j as e,r as l,a as r,i,R as u,b as m,P as f,c as g,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],b=[],j=n=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تایمر ۲۱ ساعته</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: #0a0015;
      color: #e0e0ff;
      font-family: system-ui, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
    h1 {
      font-size: 2.1rem;
      margin: 0;
      opacity: 0.9;
    }
    .timer {
      font-size: 5.8rem;
      font-weight: bold;
      letter-spacing: 8px;
      text-shadow: 0 0 30px rgba(100, 180, 255, 0.7);
      min-width: 380px;
      text-align: center;
    }
    .finished {
      font-size: 4rem;
      color: #ff6b6b;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%,100% { transform: scale(1); }
      50%     { transform: scale(1.08); }
    }
    button {
      padding: 14px 32px;
      font-size: 1.3rem;
      background: #2a1a5e;
      color: white;
      border: 1px solid #5a4a9e;
      border-radius: 12px;
      cursor: pointer;
      margin-top: 20px;
    }
    button:hover {
      background: #3a2a7e;
    }
    .controls {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }
  </style>



  <h1>تایمر ۲۱ ساعته</h1>

  <div class="timer" id="timer">21:00:00:00</div>

  <div class="controls">
    <button onclick="startTimer()">شروع / ادامه</button>
    <button onclick="pauseTimer()">توقف موقت</button>
    <button onclick="resetTimer()">ریست (۲۱ ساعت)</button>
  </div>

  <script>
    let totalSeconds = 21 * 3600; // 21 ساعت = 75600 ثانیه
    let interval = null;
    let isRunning = false;

    const timerElement = document.getElementById('timer');

    function formatTime(seconds) {
      const hrs   = Math.floor(seconds / 3600);
      const mins  = Math.floor((seconds % 3600) / 60);
      const secs  = seconds % 60;

      return \`\${hrs.toString().padStart(2,'0')}:\${mins.toString().padStart(2,'0')}:\${secs.toString().padStart(2,'0')}\`;
    }

    function updateDisplay() {
      if (totalSeconds <= 0) {
        timerElement.textContent = "تمام شد!";
        timerElement.classList.add('finished');
        clearInterval(interval);
        interval = null;
        isRunning = false;
        return;
      }
      timerElement.textContent = formatTime(totalSeconds);
    }

    function startTimer() {
      if (isRunning) return;
      if (totalSeconds <= 0) return;

      isRunning = true;
      interval = setInterval(() => {
        totalSeconds--;
        updateDisplay();
      }, 1000);
    }

    function pauseTimer() {
      clearInterval(interval);
      interval = null;
      isRunning = false;
    }

    function resetTimer() {
      pauseTimer();
      totalSeconds = 21 * 3600;
      timerElement.classList.remove('finished');
      updateDisplay();
    }

    // شروع خودکار موقع باز کردن صفحه (اختیاری - اگر نمی‌خوای کامنت کن)
    // startTimer();

    // نمایش اولیه
    updateDisplay();
  <\/script>


`,className:"w-html-embed c1whql62 coir64s"})}),T=n=>{const{origin:t,pathname:s,search:a}=new URL(n);return`${t}${s}${a}`},P=l.memo(({pageKey:n,system:t})=>e.jsx(j,{system:t},n),(n,t)=>n.pageKey===t.pageKey),w=({data:n})=>{const{system:t,resources:s,url:a,pageMeta:o}=n,c=T(a),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:r,resources:s,breakpoints:y,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:a,children:e.jsx(P,{pageKey:c,system:t})}),e.jsx(f,{url:a,pageMeta:o,siteName:d,imageLoader:i,assetBaseUrl:r}),e.jsx(g,{children:o.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),_=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${r}${v}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),b.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),$={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled33/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled33/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{$ as configValuesSerialized};
