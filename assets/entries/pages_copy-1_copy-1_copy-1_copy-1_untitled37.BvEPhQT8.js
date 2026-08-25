import{j as e,r as l,a as o,i as s,R as u,b as m,P as g,c as f,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",j=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],v=n=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body {
    background: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .pulse-button {
    position: relative;
    width: 100px;
    height: 100px;
    background: #e74c3c;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: tahoma;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7);
    animation: pulse-red 2s infinite;
  }

  @keyframes pulse-red {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7);
    }
    
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 20px rgba(231, 76, 60, 0); /* هاله محو می‌شود */
    }
    
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(231, 76, 60, 0);
    }
  }
</style>



  <div class="pulse-button">تماس</div>



`,className:"w-html-embed"})}),P=n=>{const{origin:t,pathname:r,search:a}=new URL(n);return`${t}${r}${a}`},w=l.memo(({pageKey:n,system:t})=>e.jsx(v,{system:t},n),(n,t)=>n.pageKey===t.pageKey),_=({data:n})=>{const{system:t,resources:r,url:a,pageMeta:i}=n,p=P(a),c=l.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:r,breakpoints:x,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:a,children:e.jsx(w,{pageKey:p,system:t})}),e.jsx(g,{url:a,pageMeta:i,siteName:d,imageLoader:s,assetBaseUrl:o}),e.jsx(f,{children:i.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),T=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${b}`})}),j.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{O as configValuesSerialized};
