import{j as e,r as p,a as r,i as s,R as u,b as g,P as x,c as y,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",m=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",j=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=[],S=o=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body {
    background: #2b2b2b;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* مخفی کردن چک‌باکس اصلی */
  input[type="checkbox"] {
    display: none;
  }

  .toggle-btn {
    position: relative;
    width: 80px;
    height: 160px;
    background: #222;
    border-radius: 40px;
    border: 2px solid #111;
    box-shadow: inset 0 0 10px rgba(0,0,0,1), 
                0 0 5px rgba(255,255,255,0.1);
    cursor: pointer;
  }

  /* دکمه دایره‌ای وسط */
  .toggle-btn .indicator {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 60px;
    height: 60px;
    background: linear-gradient(to bottom, #444, #222);
    border-radius: 50%;
    box-shadow: 0 5px 10px rgba(0,0,0,0.5), 
                inset 0 1px 2px rgba(255,255,255,0.2);
    transition: 0.5s;
  }

  /* چراغ وسط دکمه */
  .toggle-btn .indicator::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 15px; height: 15px;
    background: #111;
    border-radius: 50%;
    border: 1px solid #000;
    box-shadow: inset 0 0 5px rgba(0,0,0,1);
    transition: 0.5s;
  }

  /* حالت روشن (Checked) */
  input:checked + .toggle-btn .indicator {
    top: 90px;
    background: linear-gradient(to bottom, #222, #444);
  }

  input:checked + .toggle-btn .indicator::before {
    background: #0f0; /* سبز روشن */
    box-shadow: 0 0 10px #0f0, 
                0 0 20px #0f0;
  }

  input:checked + .toggle-btn {
     box-shadow: inset 0 0 20px rgba(0,255,0,0.1); /* نور محیطی */
  }
</style>



  <label>
    <input type="checkbox">
    <div class="toggle-btn">
      <div class="indicator"></div>
    </div>
  </label>



`,className:"w-html-embed"})}),P=o=>{const{origin:t,pathname:n,search:a}=new URL(o);return`${t}${n}${a}`},w=p.memo(({pageKey:o,system:t})=>e.jsx(S,{system:t},o),(o,t)=>o.pageKey===t.pageKey),k=({data:o})=>{const{system:t,resources:n,url:a,pageMeta:i}=o,l=P(a),c=p.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:n,breakpoints:m,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(g.Provider,{value:a,children:e.jsx(w,{pageKey:l,system:t})}),e.jsx(x,{url:a,pageMeta:i,siteName:d,imageLoader:s,assetBaseUrl:r}),e.jsx(y,{children:i.title})]})},_=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),z=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${f}`})}),j.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-9/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-9/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{O as configValuesSerialized};
