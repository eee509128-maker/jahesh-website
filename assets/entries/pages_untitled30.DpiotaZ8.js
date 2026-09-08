import{j as e,r as l,a as r,i as o,R as u,b as m,P as f,c as g,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],P=[],v=n=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body { background: #222; display: flex; justify-content: center; align-items: center; height: 100vh; }

  .loader {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>


  <div class="loader"></div>

`,className:"w-html-embed"})}),b=n=>{const{origin:t,pathname:s,search:a}=new URL(n);return`${t}${s}${a}`},_=l.memo(({pageKey:n,system:t})=>e.jsx(v,{system:t},n),(n,t)=>n.pageKey===t.pageKey),z=({data:n})=>{const{system:t,resources:s,url:a,pageMeta:i}=n,p=b(a),c=l.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:s,breakpoints:y,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:a,children:e.jsx(_,{pageKey:p,system:t})}),e.jsx(f,{url:a,pageMeta:i,siteName:d,imageLoader:o,assetBaseUrl:r}),e.jsx(g,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),w=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${j}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled30/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled30/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{U as configValuesSerialized};
