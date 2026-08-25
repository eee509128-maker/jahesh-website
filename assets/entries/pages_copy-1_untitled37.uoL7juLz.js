import{j as n,r as l,a as o,i as r,R as m,b as u,P as f,c as g,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",j=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],v=t=>n.jsx("body",{className:"w-element",children:n.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body {
    background: #050505;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  a.neon-button {
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: #03e9f4;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    font-family: sans-serif;
    font-weight: bold;
    /* بازتاب نور */
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  a.neon-button:hover {
    background: #03e9f4;
    color: #050505;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
  }

  a.neon-button span {
    position: absolute;
    display: block;
  }

  /* خط بالا */
  a.neon-button span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% { left: -100%; }
    50%,100% { left: 100%; }
  }

  /* خط راست */
  a.neon-button span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% { top: -100%; }
    50%,100% { top: 100%; }
  }

  /* خط پایین */
  a.neon-button span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% { right: -100%; }
    50%,100% { right: 100%; }
  }

  /* خط چپ */
  a.neon-button span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% { bottom: -100%; }
    50%,100% { bottom: 100%; }
  }
</style>


    <!-- لینک را به آدرس دلخواه تغییر دهید -->
    <a href="#" class="neon-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        شروع کنید
    </a>


`,className:"w-html-embed"})}),P=t=>{const{origin:e,pathname:i,search:a}=new URL(t);return`${e}${i}${a}`},w=l.memo(({pageKey:t,system:e})=>n.jsx(v,{system:e},t),(t,e)=>t.pageKey===e.pageKey),k=({data:t})=>{const{system:e,resources:i,url:a,pageMeta:s}=t,p=P(a),c=l.useMemo(()=>({imageLoader:r,assetBaseUrl:o,resources:i,breakpoints:b,onError:console.error}),[i]);return n.jsxs(m.Provider,{value:c,children:[n.jsx(u.Provider,{value:a,children:n.jsx(w,{pageKey:p,system:e})}),n.jsx(f,{url:a,pageMeta:s,siteName:d,imageLoader:r,assetBaseUrl:o}),n.jsx(g,{children:s.title})]})},_=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),z=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:d};return n.jsxs(n.Fragment,{children:[n.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),n.jsx("link",{rel:"icon",href:r({src:`${o}${y}`})}),j.map(e=>n.jsx("link",{rel:"preload",href:`${o}${e}`,as:"font",crossOrigin:"anonymous"},e)),S.map(e=>n.jsx("link",{rel:"preload",href:`${o}${e}`,as:"image"},e))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{O as configValuesSerialized};
