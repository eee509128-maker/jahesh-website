import{j as e,r as l,a as r,i as o,R as m,b as u,P as f,c as g,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],P=[],v=n=>e.jsx("body",{className:"w-element",children:e.jsx(y,{code:`<h1 class="melt">جذاب</h1>

<style>
  body {
    margin:0; height:100vh; background:#000; display:grid; place-items:center;
    font-family: system-ui; color:#fff;
  }
  .melt {
    font-size: 9rem; font-weight:900; position:relative; cursor:default;
  }
  .melt::before,
  .melt::after {
    content: "جذاب";
    position:absolute; inset:0; color:#0ff;
  }
  .melt::before {
    animation: melt 6s infinite alternate ease-in-out;
    filter: blur(8px) brightness(1.5);
    mix-blend-mode: screen;
  }
  .melt::after {
    animation: drip 8s infinite linear;
    clip-path: ellipse(100% 100% at 50% 120%);
    opacity:0.7;
  }

  @keyframes melt {
    0%,100% { transform: translate(0,0) skew(0deg); }
    50%     { transform: translate(4px,12px) skew(8deg); }
  }
  @keyframes drip {
    0%   { transform: translateY(0); clip-path: ellipse(100% 120% at 50% 0%); }
    100% { transform: translateY(180px); clip-path: ellipse(60% 20% at 50% 100%); opacity:0; }
  }
</style>`,clientOnly:!0,executeScriptOnCanvas:!0,className:"w-html-embed"})}),b=n=>{const{origin:t,pathname:s,search:a}=new URL(n);return`${t}${s}${a}`},z=l.memo(({pageKey:n,system:t})=>e.jsx(v,{system:t},n),(n,t)=>n.pageKey===t.pageKey),_=({data:n})=>{const{system:t,resources:s,url:a,pageMeta:i}=n,p=b(a),c=l.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:s,breakpoints:x,onError:console.error}),[s]);return e.jsxs(m.Provider,{value:c,children:[e.jsx(u.Provider,{value:a,children:e.jsx(z,{pageKey:p,system:t})}),e.jsx(f,{url:a,pageMeta:i,siteName:d,imageLoader:o,assetBaseUrl:r}),e.jsx(g,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),w=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${j}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled10/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled10/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{O as configValuesSerialized};
