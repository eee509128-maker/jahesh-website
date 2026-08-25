import{j as e,r as c,a as i,i as a,R as u,b as g,P as m,c as x,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],T=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=n=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(f,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<title>Voice → Text | Cyberpunk AI</title>

<style>
/* ====== GLOBAL ====== */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma;
  background: radial-gradient(circle at top, #0f2027, #000);
  color: #fff;
  overflow: hidden;
}

/* ====== MOVING GRID ====== */
.grid {
  position: fixed;
  inset: 0;
  background:
    linear-gradient(transparent 95%, rgba(0,255,255,.15) 96%),
    linear-gradient(90deg, transparent 95%, rgba(255,0,255,.15) 96%);
  background-size: 40px 40px;
  animation: move 10s linear infinite;
  z-index: 0;
}

@keyframes move {
  from { background-position: 0 0; }
  to   { background-position: 40px 40px; }
}

/* ====== MAIN CARD ====== */
.card {
  position: relative;
  z-index: 2;
  width: min(90%, 600px);
  margin: 80px auto;
  padding: 25px;
  border-radius: 16px;
  background: rgba(0,0,0,.75);
  box-shadow: 0 0 40px rgba(0,255,255,.25);
}

/* ====== TITLE ====== */
h1 {
  text-align: center;
  background: linear-gradient(90deg, cyan, magenta, red);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 20px;
}

/* ====== MIC BUTTON ====== */
.mic-wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.mic {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: none;
  background: radial-gradient(circle, #00ffff, #006666);
  cursor: pointer;
  box-shadow: 0 0 25px cyan;
  position: relative;
}

.mic.recording {
  animation: pulse 1.2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 15px cyan; }
  50% { box-shadow: 0 0 40px magenta; }
  100% { box-shadow: 0 0 15px cyan; }
}

.mic::after {
  content: "🎤";
  font-size: 40px;
}

/* ====== TEXT OUTPUT ====== */
.output {
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  background: rgba(0,0,0,.6);
  min-height: 120px;
  position: relative;
  overflow: hidden;
}

.output::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0,255,255,.15) 50%,
    transparent 100%
  );
  animation: scan 2.5s linear infinite;
  pointer-events: none;
}

@keyframes scan {
  from { transform: translateY(-100%); }
  to   { transform: translateY(100%); }
}

.interim {
  opacity: .4;
}

/* ====== CONTROLS ====== */
.controls {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

button, input[type=file] {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #111;
  color: cyan;
  cursor: pointer;
}
</style>



<div class="grid"></div>

<div class="card">
  <h1>Voice → Text AI</h1>

  <div class="mic-wrapper">
    <button class="mic" id="micBtn"></button>
  </div>

  <div class="output" id="output"></div>

  <div class="controls">
    <button onclick="copyText()">📋 کپی</button>
    <button onclick="clearText()">🧹 پاک کردن</button>
  </div>

  <div class="controls">
    <input type="file" accept="audio/*" id="audioFile">
  </div>
</div>

<script>
let recognition;
let recording = false;
const output = document.getElementById("output");
const micBtn = document.getElementById("micBtn");

if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.lang = 'fa-IR';
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    let finalText = "";
    let interimText = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        finalText += event.results[i][0].transcript + " ";
      } else {
        interimText += event.results[i][0].transcript;
      }
    }

    output.innerHTML =
      finalText +
      \`<span class="interim">\${interimText}</span>\`;
  };
} else {
  alert("مرورگر شما از Speech API پشتیبانی نمی‌کند (Chrome استفاده کن)");
}

micBtn.onclick = () => {
  if (!recording) {
    recognition.start();
    micBtn.classList.add("recording");
  } else {
    recognition.stop();
    micBtn.classList.remove("recording");
  }
  recording = !recording;
};

/* ====== FILE UPLOAD ====== */
document.getElementById("audioFile").addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  output.innerHTML = "🔊 فایل صوتی دریافت شد<br>تشخیص گفتار فایل در مرورگر محدود است.";

  // نکته: تشخیص گفتار واقعی فایل نیاز به Backend یا API دارد
});

/* ====== UTIL ====== */
function copyText() {
  navigator.clipboard.writeText(output.innerText);
}

function clearText() {
  output.innerHTML = "";
}
<\/script>


`,className:"w-html-embed"})})}),w=n=>{const{origin:t,pathname:r,search:o}=new URL(n);return`${t}${r}${o}`},S=c.memo(({pageKey:n,system:t})=>e.jsx(k,{system:t},n),(n,t)=>n.pageKey===t.pageKey),P=({data:n})=>{const{system:t,resources:r,url:o,pageMeta:s}=n,p=w(o),l=c.useMemo(()=>({imageLoader:a,assetBaseUrl:i,resources:r,breakpoints:b,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:l,children:[e.jsx(g.Provider,{value:o,children:e.jsx(S,{pageKey:p,system:t})}),e.jsx(m,{url:o,pageMeta:s,siteName:d,imageLoader:a,assetBaseUrl:i}),e.jsx(x,{children:s.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),z=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:a({src:`${i}${h}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),T.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),L={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-21/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-21/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{L as configValuesSerialized};
