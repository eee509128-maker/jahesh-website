import{j as e,r as l,a as r,i as o,R as u,b as f,P as m,c as g,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=[],P=n=>e.jsx("body",{className:"w-element",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body { background: #111; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: monospace; }

  .typing-effect {
    width: 22ch; /* تعداد کاراکترهای متن */
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-size: 24px;
  }

  @keyframes typing {
    from { width: 0 }
  }
  
  @keyframes blink {
    50% { border-color: transparent }
  }
</style>


  <div class="typing-effect">
    به وب‌سایت ما خوش آمدید
  </div>

`,className:"w-html-embed"})}),b=n=>{const{origin:t,pathname:s,search:a}=new URL(n);return`${t}${s}${a}`},z=l.memo(({pageKey:n,system:t})=>e.jsx(P,{system:t},n),(n,t)=>n.pageKey===t.pageKey),_=({data:n})=>{const{system:t,resources:s,url:a,pageMeta:i}=n,p=b(a),c=l.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:s,breakpoints:x,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(f.Provider,{value:a,children:e.jsx(z,{pageKey:p,system:t})}),e.jsx(m,{url:a,pageMeta:i,siteName:d,imageLoader:o,assetBaseUrl:r}),e.jsx(g,{children:i.title})]})},w=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),T=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${j}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled31/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled31/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{O as configValuesSerialized};
