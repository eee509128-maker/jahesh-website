import{j as e,r as l,a as r,i as s,R as u,b as f,P as m,c as g,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",j=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],b=o=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #222;
    font-family: sans-serif;
  }

  .box {
    position: relative;
    width: 300px;
    height: 400px;
    background: #1c1c1c;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* نوار چرخان */
  .box::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 140%; /* ارتفاع بیشتر برای پوشش کامل در چرخش */
    background: linear-gradient(#00ccff, #d400d4);
    animation: rotate 4s linear infinite;
  }

  .box::after {
    content: '';
    position: absolute;
    inset: 4px; /* ضخامت حاشیه */
    background: #1c1c1c; /* رنگ داخل کارت */
    border-radius: 6px;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .content {
    position: relative;
    z-index: 10;
    color: white;
    text-align: center;
    font-size: 1.5rem;
  }
</style>



  <div class="box">
    <div class="content">
      <h2>کارت جادویی</h2>
      <p style="font-size: 14px; color: #888;">فقط با CSS ساخته شده</p>
    </div>
  </div>



`,className:"w-html-embed"})}),P=o=>{const{origin:t,pathname:n,search:a}=new URL(o);return`${t}${n}${a}`},z=l.memo(({pageKey:o,system:t})=>e.jsx(b,{system:t},o),(o,t)=>o.pageKey===t.pageKey),_=({data:o})=>{const{system:t,resources:n,url:a,pageMeta:i}=o,c=P(a),p=l.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:n,breakpoints:y,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(f.Provider,{value:a,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(m,{url:a,pageMeta:i,siteName:d,imageLoader:s,assetBaseUrl:r}),e.jsx(g,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),w=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${v}`})}),j.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{O as configValuesSerialized};
