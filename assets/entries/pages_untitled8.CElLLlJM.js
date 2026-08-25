import{j as e,r as d,a as o,i as s,R as u,b as g,P as m,c as f,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],P=[],S=n=>e.jsx("body",{className:"w-element",children:e.jsx(h,{code:`<div class="animated-bg"></div>

<style>
  .animated-bg {
    position: fixed;
    inset: 0;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96c93d, #ffe66d);
    background-size: 300% 300%;
    animation: gradientMove 18s ease infinite;
    z-index: -1;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* محتوات رو اینجا بذار */
  body { 
    color: white; 
    text-align: center; 
    padding: 100px 20px; 
    position: relative; 
  }
</style>`,className:"w-html-embed"})}),b=n=>{const{origin:t,pathname:r,search:a}=new URL(n);return`${t}${r}${a}`},z=d.memo(({pageKey:n,system:t})=>e.jsx(S,{system:t},n),(n,t)=>n.pageKey===t.pageKey),_=({data:n})=>{const{system:t,resources:r,url:a,pageMeta:i}=n,p=b(a),c=d.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:r,breakpoints:y,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(g.Provider,{value:a,children:e.jsx(z,{pageKey:p,system:t})}),e.jsx(m,{url:a,pageMeta:i,siteName:l,imageLoader:s,assetBaseUrl:o}),e.jsx(f,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),k=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${j}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:k},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled8/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled8/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{U as configValuesSerialized};
