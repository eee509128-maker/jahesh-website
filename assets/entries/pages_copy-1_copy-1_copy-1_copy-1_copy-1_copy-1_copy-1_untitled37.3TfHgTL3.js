import{j as e,r as l,a as o,i,R as u,b as m,P as y,c as g,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],S=n=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Animated Background</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family:"Vazirmatn",system-ui,sans-serif;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    overflow:hidden;
    background:#0b1020;
  }
  .blob{
    position:absolute;
    width:600px;height:600px;
    background: radial-gradient(circle at 30% 30%, #22d3ee, transparent 60%),
                radial-gradient(circle at 70% 70%, #7c3aed, transparent 60%);
    filter: blur(40px);
    animation: float 10s ease-in-out infinite alternate;
  }
  .blob:nth-child(2){
    width:500px;height:500px;
    animation-delay:2s;
    opacity:.7;
  }
  @keyframes float{
    0%{transform:translate(-120px,-80px)}
    100%{transform:translate(120px,80px)}
  }
  .content{
    position:relative;
    z-index:1;
    padding:40px 50px;
    border-radius:20px;
    background:rgba(255,255,255,.06);
    border:1px solid rgba(255,255,255,.2);
    backdrop-filter: blur(12px);
  }
  h1{font-size:36px;margin-bottom:10px}
  p{opacity:.85}
</style>


  <div class="blob"></div>
  <div class="blob"></div>
  <div class="content">
    <h1>پس‌زمینه زنده و جذاب</h1>
    <p>یک افکت انیمیشنی سبک و چشم‌نواز برای صفحه اصلی.</p>
  </div>


`,className:"w-html-embed"})}),P=n=>{const{origin:t,pathname:r,search:a}=new URL(n);return`${t}${r}${a}`},z=l.memo(({pageKey:n,system:t})=>e.jsx(S,{system:t},n),(n,t)=>n.pageKey===t.pageKey),w=({data:n})=>{const{system:t,resources:r,url:a,pageMeta:s}=n,p=P(a),c=l.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:r,breakpoints:f,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:a,children:e.jsx(z,{pageKey:p,system:t})}),e.jsx(y,{url:a,pageMeta:s,siteName:d,imageLoader:i,assetBaseUrl:o}),e.jsx(g,{children:s.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),_=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),j.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{U as configValuesSerialized};
