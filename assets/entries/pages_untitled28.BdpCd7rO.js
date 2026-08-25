import{j as e,r as l,a as o,i as s,R as u,b as f,P as m,c as x,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=[],P=n=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body { background: #000; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
  
  .neon-btn {
    padding: 15px 30px;
    font-size: 20px;
    color: #03e9f4;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 4px;
    border: 2px solid #03e9f4;
    position: relative;
    transition: 0.5s;
    background: transparent;
    cursor: pointer;
    font-family: sans-serif;
    overflow: hidden;
  }

  .neon-btn:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
  }
</style>


  <button class="neon-btn">کلیک کنید</button>

`,className:"w-html-embed"})}),b=n=>{const{origin:t,pathname:r,search:a}=new URL(n);return`${t}${r}${a}`},z=l.memo(({pageKey:n,system:t})=>e.jsx(P,{system:t},n),(n,t)=>n.pageKey===t.pageKey),_=({data:n})=>{const{system:t,resources:r,url:a,pageMeta:i}=n,p=b(a),c=l.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:r,breakpoints:y,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(f.Provider,{value:a,children:e.jsx(z,{pageKey:p,system:t})}),e.jsx(m,{url:a,pageMeta:i,siteName:d,imageLoader:s,assetBaseUrl:o}),e.jsx(x,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),w=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${j}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled28/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled28/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{O as configValuesSerialized};
