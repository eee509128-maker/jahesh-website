import{j as e,r as l,a as n,i as a,R as u,b as m,P as h,c as f,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",g=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",j=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],b=o=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body {
    background: #111;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .menu-container {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* فیلتر جادویی */
    filter: url('#goo'); 
  }

  .circle-btn {
    position: absolute;
    width: 60px;
    height: 60px;
    background: #ff0055;
    border-radius: 50%;
    z-index: 10;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    transition: transform 0.1s;
  }
  
  /* دکمه‌های کوچک که بیرون می‌پرند */
  .item {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #ff0055;
    border-radius: 50%;
    transition: 0.5s ease-out;
    z-index: 5;
  }

  /* حالت هاور کانتینر */
  .menu-container:hover .item:nth-child(2) { transform: translate(0, -70px); }
  .menu-container:hover .item:nth-child(3) { transform: translate(60px, -35px); }
  .menu-container:hover .item:nth-child(4) { transform: translate(60px, 35px); }
  .menu-container:hover .item:nth-child(5) { transform: translate(0, 70px); }
  .menu-container:hover .item:nth-child(6) { transform: translate(-60px, 35px); }
  .menu-container:hover .item:nth-child(7) { transform: translate(-60px, -35px); }

</style>



  <div class="menu-container">
    <div class="circle-btn">Menu</div>
    <!-- آیتم‌های مخفی -->
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>

  <!-- این بخش SVG مسئول افکت چسبندگی است اما دیده نمی‌شود -->
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none;">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
        <feBlend in="SourceGraphic" in2="goo"></feBlend>
      </filter>
    </defs>
  </svg>



`,className:"w-html-embed"})}),P=o=>{const{origin:t,pathname:i,search:r}=new URL(o);return`${t}${i}${r}`},w=l.memo(({pageKey:o,system:t})=>e.jsx(b,{system:t},o),(o,t)=>o.pageKey===t.pageKey),z=({data:o})=>{const{system:t,resources:i,url:r,pageMeta:s}=o,c=P(r),p=l.useMemo(()=>({imageLoader:a,assetBaseUrl:n,resources:i,breakpoints:g,onError:console.error}),[i]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:r,children:e.jsx(w,{pageKey:c,system:t})}),e.jsx(h,{url:r,pageMeta:s,siteName:d,imageLoader:a,assetBaseUrl:n}),e.jsx(f,{children:s.title})]})},_=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),T=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:a({src:`${n}${v}`})}),j.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{C as configValuesSerialized};
