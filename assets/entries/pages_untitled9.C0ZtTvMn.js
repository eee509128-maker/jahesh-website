import{j as e,r as d,a as n,i as s,R as u,b as m,P as g,c as f,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",j=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],P=[],S=r=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,code:`<div class="blob"></div>

<style>
  body {
    margin: 0;
    height: 100vh;
    background: #0d001a;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .blob {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #ff6ec7, #7873f5, #00ddeb, #97c93d);
    border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
    animation: morph 18s ease-in-out infinite alternate;
    filter: blur(30px) contrast(1.2);
    box-shadow: 0 0 120px rgba(255,110,199,0.6), 0 0 200px rgba(120,115,245,0.5);
  }

  @keyframes morph {
    0%   { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; transform: rotate(0deg) scale(1); }
    25%  { border-radius: 40% 60% 30% 70% / 60% 40% 70% 30%; transform: rotate(90deg) scale(1.1); }
    50%  { border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%; transform: rotate(180deg) scale(0.95); }
    75%  { border-radius: 50% 50% 60% 40% / 70% 30% 50% 50%; transform: rotate(270deg) scale(1.05); }
    100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; transform: rotate(360deg) scale(1); }
  }
</style>`,className:"w-html-embed"})}),v=r=>{const{origin:t,pathname:o,search:a}=new URL(r);return`${t}${o}${a}`},_=d.memo(({pageKey:r,system:t})=>e.jsx(S,{system:t},r),(r,t)=>r.pageKey===t.pageKey),z=({data:r})=>{const{system:t,resources:o,url:a,pageMeta:i}=r,p=v(a),c=d.useMemo(()=>({imageLoader:s,assetBaseUrl:n,resources:o,breakpoints:y,onError:console.error}),[o]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:a,children:e.jsx(_,{pageKey:p,system:t})}),e.jsx(g,{url:a,pageMeta:i,siteName:l,imageLoader:s,assetBaseUrl:n}),e.jsx(f,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),w=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${n}${b}`})}),j.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled9/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled9/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{U as configValuesSerialized};
