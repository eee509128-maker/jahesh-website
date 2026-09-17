import{j as e,r as l,a as r,i as s,R as f,b as u,P as y,c as m,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as g}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],S=o=>e.jsx("body",{className:"w-element",children:e.jsx(g,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <title>دکمه خفن نئون</title>
  <style>
    body {
      height: 100vh;
      margin: 0;
      background: #0d001a;
      display: grid;
      place-items: center;
      font-family: system-ui, sans-serif;
    }

    .neon-btn {
      position: relative;
      padding: 16px 48px;
      font-size: 1.4rem;
      font-weight: bold;
      color: #00f0ff;
      text-transform: uppercase;
      letter-spacing: 4px;
      text-decoration: none;
      background: rgba(0, 240, 255, 0.08);
      border: 2px solid #00f0ff;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.4s;
      cursor: pointer;
      backdrop-filter: blur(8px);
      box-shadow: 
        0 0 15px rgba(0, 240, 255, 0.4),
        inset 0 0 15px rgba(0, 240, 255, 0.25);
    }

    .neon-btn:hover {
      color: white;
      box-shadow: 
        0 0 40px #00f0ff,
        0 0 80px #00f0ff33,
        inset 0 0 25px #00f0ff4d;
      transform: translateY(-4px) scale(1.05);
    }

    .neon-btn::before,
    .neon-btn::after {
      content: '';
      position: absolute;
      width: 120%;
      height: 120%;
      background: linear-gradient(
        45deg,
        transparent,
        #00f0ff66,
        transparent
      );
      top: -10%;
      left: -10%;
      opacity: 0;
      transition: all 0.6s;
      transform: rotate(45deg);
    }

    .neon-btn:hover::before {
      opacity: 0.7;
      transform: rotate(45deg) translate(40px, -40px);
    }

    .neon-btn:hover::after {
      opacity: 0.4;
      transform: rotate(-45deg) translate(-40px, 40px);
    }

    /* گلیچ افکت کوچک موقع هاور */
    .neon-btn:hover {
      animation: glitch 0.4s infinite;
    }

    @keyframes glitch {
      0%   { transform: translate(0); }
      20%  { transform: translate(-3px, 3px); }
      40%  { transform: translate(3px, -3px); }
      60%  { transform: translate(-2px, 2px); }
      80%  { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }
  </style>



  <button class="neon-btn">شروع ماجراجویی</button>


`,className:"w-html-embed"})}),P=o=>{const{origin:t,pathname:n,search:a}=new URL(o);return`${t}${n}${a}`},w=l.memo(({pageKey:o,system:t})=>e.jsx(S,{system:t},o),(o,t)=>o.pageKey===t.pageKey),z=({data:o})=>{const{system:t,resources:n,url:a,pageMeta:i}=o,d=P(a),c=l.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:n,breakpoints:h,onError:console.error}),[n]);return e.jsxs(f.Provider,{value:c,children:[e.jsx(u.Provider,{value:a,children:e.jsx(w,{pageKey:d,system:t})}),e.jsx(y,{url:a,pageMeta:i,siteName:p,imageLoader:s,assetBaseUrl:r}),e.jsx(m,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),j.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{U as configValuesSerialized};
