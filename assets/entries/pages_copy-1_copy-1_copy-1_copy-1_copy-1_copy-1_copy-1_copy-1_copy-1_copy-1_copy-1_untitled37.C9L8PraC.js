import{j as e,r as p,a as r,i as n,R as u,b as y,P as g,c as m,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],j=o=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #050505;
    perspective: 1000px; /* ایجاد عمق */
  }

  .cube {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    animation: rotateCube 10s linear infinite;
  }

  @keyframes rotateCube {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
  }

  .cube div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cube div span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#151515, #00ec00);
    transform: rotateY(calc(90deg * var(--i))) translateZ(50px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
    color: white;
    border: 2px solid #00ec00;
  }

  /* سطح بالا */
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: #222;
    transform: rotateX(90deg) translateZ(50px);
    border: 2px solid #00ec00;
  }

  /* سایه درخشان کف */
  .top::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: #00ec00;
    transform: translateZ(-150px);
    filter: blur(20px);
    box-shadow: 0 0 120px rgba(0, 255, 0, 0.2),
                0 0 200px rgba(0, 255, 0, 0.4),
                0 0 300px rgba(0, 255, 0, 0.6),
                0 0 400px rgba(0, 255, 0, 0.8),
                0 0 500px rgba(0, 255, 0, 1);
  }
</style>



  <div class="cube">
    <div class="top"></div>
    <div>
      <span style="--i:0;">HTML</span>
      <span style="--i:1;">CSS</span>
      <span style="--i:2;">JS</span>
      <span style="--i:3;">WEB</span>
    </div>
  </div>



`,className:"w-html-embed"})}),P=o=>{const{origin:t,pathname:s,search:a}=new URL(o);return`${t}${s}${a}`},w=p.memo(({pageKey:o,system:t})=>e.jsx(j,{system:t},o),(o,t)=>o.pageKey===t.pageKey),z=({data:o})=>{const{system:t,resources:s,url:a,pageMeta:i}=o,d=P(a),c=p.useMemo(()=>({imageLoader:n,assetBaseUrl:r,resources:s,breakpoints:x,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(y.Provider,{value:a,children:e.jsx(w,{pageKey:d,system:t})}),e.jsx(g,{url:a,pageMeta:i,siteName:l,imageLoader:n,assetBaseUrl:r}),e.jsx(m,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${r}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{R as configValuesSerialized};
