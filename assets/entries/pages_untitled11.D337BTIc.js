import{j as e,r as l,a as o,i as s,R as c,b as f,P as g,c as h,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],j=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`<div class="gooey">
  <div class="ball"></div>
  <div class="ball"></div>
  <div class="ball"></div>
</div>

<svg style="position:absolute; width:0; height:0;">
  <filter id="goo">
    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"></feGaussianBlur>
    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
    <feBlend in="SourceGraphic" in2="goo"></feBlend>
  </filter>
</svg>

<style>
  body { margin:0; height:100vh; background:#000; overflow:hidden; }
  .gooey {
    filter: url(#goo); width:100%; height:100%; position:relative;
  }
  .ball {
    width:140px; height:140px; background:#ff3366; border-radius:50%;
    position:absolute; top:50%; left:50%; margin:-70px;
    animation: float 7s ease-in-out infinite alternate;
    box-shadow:0 0 60px #ff3366aa;
  }
  .ball:nth-child(2) { background:#33ff99; animation-delay:-2s; box-shadow:0 0 60px #33ff99aa; }
  .ball:nth-child(3) { background:#3366ff; animation-delay:-4s; box-shadow:0 0 60px #3366ffaa; }

  @keyframes float {
    0%   { transform: translate(-50%,-50%) translate3d(0,0,0) scale(1); }
    100% { transform: translate(-50%,-50%) translate3d(120px,-180px,0) scale(1.3); }
  }
</style>`,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:r,search:n}=new URL(a);return`${t}${r}${n}`},w=l.memo(({pageKey:a,system:t})=>e.jsx(j,{system:t},a),(a,t)=>a.pageKey===t.pageKey),_=({data:a})=>{const{system:t,resources:r,url:n,pageMeta:i}=a,p=P(n),u=l.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:r,breakpoints:y,onError:console.error}),[r]);return e.jsxs(c.Provider,{value:u,children:[e.jsx(f.Provider,{value:n,children:e.jsx(w,{pageKey:p,system:t})}),e.jsx(g,{url:n,pageMeta:i,siteName:d,imageLoader:s,assetBaseUrl:o}),e.jsx(h,{children:i.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${v}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled11/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled11/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{C as configValuesSerialized};
