import{j as e,r as l,a as n,i as s,R as y,b as u,P as m,c as f,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as g}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=[],P=o=>e.jsx("body",{className:"w-element",children:e.jsx(g,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
    font-family: 'Arial Black', sans-serif;
  }

  .content {
    position: relative;
  }

  .content h2 {
    color: #fff;
    font-size: 8em;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .content h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4; /* فقط حاشیه متن */
  }

  .content h2:nth-child(2) {
    color: #03a9f4;
    animation: animate 4s ease-in-out infinite;
  }

  @keyframes animate {
    0%, 100% {
      clip-path: polygon(
        0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%
      );
    }
  }
</style>



  <div class="content">
    <h2>Water</h2>
    <h2>Water</h2>
  </div>



`,className:"w-html-embed"})}),z=o=>{const{origin:t,pathname:r,search:a}=new URL(o);return`${t}${r}${a}`},_=l.memo(({pageKey:o,system:t})=>e.jsx(P,{system:t},o),(o,t)=>o.pageKey===t.pageKey),b=({data:o})=>{const{system:t,resources:r,url:a,pageMeta:i}=o,c=z(a),d=l.useMemo(()=>({imageLoader:s,assetBaseUrl:n,resources:r,breakpoints:x,onError:console.error}),[r]);return e.jsxs(y.Provider,{value:d,children:[e.jsx(u.Provider,{value:a,children:e.jsx(_,{pageKey:c,system:t})}),e.jsx(m,{url:a,pageMeta:i,siteName:p,imageLoader:s,assetBaseUrl:n}),e.jsx(f,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),w=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${n}${j}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-6/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-6/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{O as configValuesSerialized};
