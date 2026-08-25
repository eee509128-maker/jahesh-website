import{j as t,r as o,a as s,i as r,R as c,b as f,P as g,c as m,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",u=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],w="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],b=i=>t.jsx("body",{className:"w-element",children:t.jsx(v,{code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>آسمان ستاره‌ای</title>
  <style>
    :root {
      --sky-color-dark:  #1F2023;
      --sky-color-light: #424472;
    }

    html {
      background-image: linear-gradient(var(--sky-color-dark), var(--sky-color-light));
      min-height: 100%;
    }

    body {
      margin: 0;
      min-height: 200vh;          /* اجازه اسکرول - ارتفاع بیشتر */
      width: 100vw;
      position: relative;
    }

    .light {
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 1;
    }

    .light::before,
    .light::after {
      content: "";
      display: block;
      position: absolute;
    }

    .light::before {
      width: 120%;
      height: 120%;
      top: 40%;
      left: -25%;
      background: radial-gradient(
        48.58% 48.58% at 49.96% 59.07%,
        #927CFF 0%,
        rgba(142, 133, 190, 0.4) 43.23%,
        rgba(59, 61, 70, 0) 100%
      );
    }

    .light::after {
      width: 120%;
      height: 100%;
      top: 65%;
      left: 25%;
      background: radial-gradient(
        48.58% 48.58% at 49.96% 59.07%,
        #FFF38B 0%,
        rgba(180, 174, 113, 0.45) 38.02%,
        rgba(59, 61, 70, 0) 100%
      );
    }

    .star {
      position: absolute;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 8px 3px rgba(255,255,255,0.8);
      pointer-events: none;
    }

    @keyframes twinkle {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%      { opacity: 0.3; transform: scale(0.7); }
    }

    /* ۶۰ تا ستاره با موقعیت و زمان‌بندی متفاوت */
    .star1  { width: 3px;   height: 3px;   top: 5%;   left: 8%;   animation: twinkle 3.2s infinite alternate; }
    .star2  { width: 2.2px; height: 2.2px; top: 9%;   left: 22%;  animation: twinkle 4.1s infinite alternate; }
    .star3  { width: 4px;   height: 4px;   top: 14%;  left: 38%;  animation: twinkle 2.9s infinite alternate; }
    .star4  { width: 2.8px; height: 2.8px; top: 18%;  left: 55%;  animation: twinkle 5.3s infinite alternate; }
    .star5  { width: 3.6px; height: 3.6px; top: 23%;  left: 72%;  animation: twinkle 3.7s infinite alternate; }
    .star6  { width: 1.9px; height: 1.9px; top: 27%;  left: 89%;  animation: twinkle 2.4s infinite alternate; }
    .star7  { width: 3.1px; height: 3.1px; top: 31%;  left: 12%;  animation: twinkle 4.6s infinite alternate; }
    .star8  { width: 2.4px; height: 2.4px; top: 36%;  left: 29%;  animation: twinkle 3.9s infinite alternate; }
    .star9  { width: 4.3px; height: 4.3px; top: 41%;  left: 46%;  animation: twinkle 6.1s infinite alternate; }
    .star10 { width: 2.6px; height: 2.6px; top: 45%;  left: 63%;  animation: twinkle 2.7s infinite alternate; }

    .star11 { width: 3.4px; height: 3.4px; top: 50%;  left: 80%;  animation: twinkle 4.8s infinite alternate; }
    .star12 { width: 1.7px; height: 1.7px; top: 54%;  left: 3%;   animation: twinkle 3.4s infinite alternate; }
    .star13 { width: 3px;   height: 3px;   top: 59%;  left: 19%;  animation: twinkle 5s   infinite alternate; }
    .star14 { width: 2.5px; height: 2.5px; top: 63%;  left: 35%;  animation: twinkle 2.2s infinite alternate; }
    .star15 { width: 4.1px; height: 4.1px; top: 68%;  left: 51%;  animation: twinkle 4.3s infinite alternate; }
    .star16 { width: 2.9px; height: 2.9px; top: 72%;  left: 67%;  animation: twinkle 3.6s infinite alternate; }
    .star17 { width: 3.8px; height: 3.8px; top: 77%;  left: 84%;  animation: twinkle 5.5s infinite alternate; }
    .star18 { width: 1.6px; height: 1.6px; top: 81%;  left: 6%;   animation: twinkle 2.8s infinite alternate; }
    .star19 { width: 3.2px; height: 3.2px; top: 86%;  left: 23%;  animation: twinkle 4.9s infinite alternate; }
    .star20 { width: 2.3px; height: 2.3px; top: 91%;  left: 39%;  animation: twinkle 3.1s infinite alternate; }

    /* برای ۶۰ تا: همین الگو رو ادامه بده یا از جاوااسکریپت رندوم استفاده کن */
  </style>



  <div class="light">
    <div class="star star1"></div>
    <div class="star star2"></div>
    <div class="star star3"></div>
    <div class="star star4"></div>
    <div class="star star5"></div>
    <div class="star star6"></div>
    <div class="star star7"></div>
    <div class="star star8"></div>
    <div class="star star9"></div>
    <div class="star star10"></div>
    <div class="star star11"></div>
    <div class="star star12"></div>
    <div class="star star13"></div>
    <div class="star star14"></div>
    <div class="star star15"></div>
    <div class="star star16"></div>
    <div class="star star17"></div>
    <div class="star star18"></div>
    <div class="star star19"></div>
    <div class="star star20"></div>

    <!-- اگر می‌خوای بیشتر بشه بدون نوشتن تک‌تک، این اسکریپت رو اضافه کن: -->
    <!-- 
    <script>
      const light = document.querySelector('.light');
      for (let i = 21; i <= 60; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = star.style.height = (Math.random() * 3 + 1.5) + 'px';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animation = \`twinkle \${Math.random() * 5 + 2}s infinite alternate\`;
        star.style.animationDelay = Math.random() * 4 + 's';
        light.appendChild(star);
      }
    <\/script>
    -->
  </div>


`,clientOnly:!0,executeScriptOnCanvas:!0,className:"w-html-embed"})}),S=i=>{const{origin:e,pathname:n,search:a}=new URL(i);return`${e}${n}${a}`},j=o.memo(({pageKey:i,system:e})=>t.jsx(b,{system:e},i),(i,e)=>i.pageKey===e.pageKey),P=({data:i})=>{const{system:e,resources:n,url:a,pageMeta:l}=i,p=S(a),h=o.useMemo(()=>({imageLoader:r,assetBaseUrl:s,resources:n,breakpoints:u,onError:console.error}),[n]);return t.jsxs(c.Provider,{value:h,children:[t.jsx(f.Provider,{value:a,children:t.jsx(j,{pageKey:p,system:e})}),t.jsx(g,{url:a,pageMeta:l,siteName:d,imageLoader:r,assetBaseUrl:s}),t.jsx(m,{children:l.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),T=({})=>{const i={"@context":"https://schema.org","@type":"WebSite",name:d};return t.jsxs(t.Fragment,{children:[t.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i,null,2)}}),t.jsx("link",{rel:"icon",href:r({src:`${s}${w}`})}),y.map(e=>t.jsx("link",{rel:"preload",href:`${s}${e}`,as:"font",crossOrigin:"anonymous"},e)),k.map(e=>t.jsx("link",{rel:"preload",href:`${s}${e}`,as:"image"},e))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled16/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled16/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{M as configValuesSerialized};
