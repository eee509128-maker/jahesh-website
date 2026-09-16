import{j as e,r as l,a as o,i as s,R as m,b as u,P as f,c as g,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],T=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<style>
  /* استایل‌های CSS برای زیبایی */
  body {
    background-color: #1e1e2e;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .timer-container {
    text-align: center;
    background: #2a2a3c;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border: 1px solid #444;
  }

  h2 {
    margin: 0 0 20px 0;
    color: #a6accd;
    font-size: 18px;
  }

  .time-box {
    display: flex;
    gap: 15px;
    justify-content: center;
    direction: ltr; /* اعداد چپ‌چین باشند */
  }

  .unit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .number {
    background: #000;
    color: #ff0055; /* رنگ اعداد */
    font-size: 40px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    width: 60px;
    text-align: center;
    font-family: 'Courier New', Courier, monospace; /* فونت ثابت برای جلوگیری از پرش */
    box-shadow: 0 0 10px rgba(255, 0, 85, 0.3);
    text-shadow: 0 0 10px rgba(255, 0, 85, 0.6);
  }

  .label {
    margin-top: 10px;
    font-size: 12px;
    color: #888;
  }
  
  /* پیغام پایان */
  #message {
    display: none;
    color: #00ff88;
    margin-top: 20px;
    font-size: 20px;
  }
</style>



<div class="timer-container">
  <h2>پیشنهاد ویژه تا پایان زمان:</h2>
  
  <div class="time-box">
    <!-- ساعت -->
    <div class="unit">
      <div class="number" id="hours">21</div>
      <div class="label">ساعت</div>
    </div>
    
    <!-- دقیقه -->
    <div class="unit">
      <div class="number" id="minutes">00</div>
      <div class="label">دقیقه</div>
    </div>
    
    <!-- ثانیه -->
    <div class="unit">
      <div class="number" id="seconds">00</div>
      <div class="label">ثانیه</div>
    </div>
  </div>

  <div id="message">زمان به پایان رسید!</div>
</div>

<script>
  // تنظیم زمان شروع به ثانیه (21 ساعت * 3600 ثانیه)
  // اگر می‌خواهید زمان را تغییر دهید، عدد 21 را عوض کنید
  let totalTime = 21 * 3600; 

  function updateTimer() {
    // محاسبه ساعت، دقیقه و ثانیه
    let h = Math.floor(totalTime / 3600);
    let m = Math.floor((totalTime % 3600) / 60);
    let s = totalTime % 60;

    // نمایش در HTML (اضافه کردن صفر قبل از اعداد تک رقمی)
    document.getElementById("hours").innerHTML = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerHTML = m < 10 ? "0" + m : m;
    document.getElementById("seconds").innerHTML = s < 10 ? "0" + s : s;

    // اگر زمان تمام شد
    if (totalTime <= 0) {
      clearInterval(timerInterval);
      document.getElementById("message").style.display = "block";
      document.querySelector(".time-box").style.opacity = "0.5";
    } else {
      totalTime--; // کم کردن یک ثانیه
    }
  }

  // اجرای تابع هر 1000 میلی‌ثانیه (1 ثانیه)
  let timerInterval = setInterval(updateTimer, 1000);
<\/script>


`,className:"w-html-embed"})}),j=a=>{const{origin:t,pathname:r,search:i}=new URL(a);return`${t}${r}${i}`},P=l.memo(({pageKey:a,system:t})=>e.jsx(S,{system:t},a),(a,t)=>a.pageKey===t.pageKey),z=({data:a})=>{const{system:t,resources:r,url:i,pageMeta:n}=a,c=j(i),p=l.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:r,breakpoints:v,onError:console.error}),[r]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(u.Provider,{value:i,children:e.jsx(P,{pageKey:c,system:t})}),e.jsx(f,{url:i,pageMeta:n,siteName:d,imageLoader:s,assetBaseUrl:o}),e.jsx(g,{children:n.title})]})},w=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${y}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),T.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled32/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled32/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{U as configValuesSerialized};
