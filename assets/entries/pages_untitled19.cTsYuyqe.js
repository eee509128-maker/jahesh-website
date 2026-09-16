import{j as e,r as l,a as s,i as o,R as m,b as u,P as f,c as h,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(y,{code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>آسمان پرستاره - فقط ستاره‌ها</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body, html { 
      height:100%; 
      overflow:hidden; 
      background: #000814;  /* رنگ ثابت تیره مثل عکس */
    }

    .stars {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .star {
      position: absolute;
      background: #fff;
      border-radius: 50%;
      box-shadow: 
        0 0 4px #fff,
        0 0 10px #fff,
        0 0 18px rgba(255,255,255,0.5);
      animation: twinkle 3.5s infinite alternate, drift-loop 140s linear infinite;
      will-change: transform, opacity;
    }

    @keyframes twinkle {
      0%,100% { opacity: 0.4; transform: scale(1); }
      50%     { opacity: 1;   transform: scale(1.25); }
    }

    @keyframes drift-loop {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  </style>



<div class="stars" id="stars"></div>

<script>
function createStars() {
  const container = document.getElementById('stars');
  const count = 800;  // تعداد بیشتر برای پرتر شدن مثل عکس

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // اندازه‌های ریز و واقعی
    const size = Math.random() * 2.2 + 0.4; // 0.4 تا 2.6 پیکسل
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    // موقعیت تصادفی کامل
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top  = Math.random() * 100 + 'vh';

    // مدت زمان چشمک متفاوت
    const twinkleDur = (Math.random() * 5 + 2) + 's';

    // مدت زمان حرکت متفاوت برای طبیعی بودن
    const driftDur = (Math.random() * 100 + 80) + 's'; // 80 تا 180 ثانیه

    star.style.animation = \`
      twinkle \${twinkleDur} infinite alternate,
      drift-loop \${driftDur} linear infinite
    \`;

    // تأخیر شروع تصادفی طولانی
    star.style.animationDelay = Math.random() * 25 + 's';

    container.appendChild(star);
  }
}

createStars();
<\/script>


`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:n,search:r}=new URL(a);return`${t}${n}${r}`},b=l.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),z=({data:a})=>{const{system:t,resources:n,url:r,pageMeta:i}=a,c=P(r),p=l.useMemo(()=>({imageLoader:o,assetBaseUrl:s,resources:n,breakpoints:x,onError:console.error}),[n]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(u.Provider,{value:r,children:e.jsx(b,{pageKey:c,system:t})}),e.jsx(f,{url:r,pageMeta:i,siteName:d,imageLoader:o,assetBaseUrl:s}),e.jsx(h,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${s}${v}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),j.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled19/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled19/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{D as configValuesSerialized};
