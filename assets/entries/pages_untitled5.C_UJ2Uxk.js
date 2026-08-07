import{j as e,r as d,a as r,i as s,R as u,b as g,P as m,c as h,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",P=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],b=n=>e.jsx("body",{className:"w-element",children:e.jsx(f,{code:`<div id="mouse-bg"></div>

<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  #mouse-bg {
    position: fixed;
    inset: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(180, 0, 255, 0.35),    /* بنفش ملایم */
      #050505 60%
    );
    transition: background 0.05s linear;
    z-index: -1;
  }
</style>

<script>
  const bg = document.getElementById("mouse-bg");

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    bg.style.background = \`
      radial-gradient(
        circle at \${x}% \${y}%,
        rgba(180, 0, 255, 0.4),    /* بنفش اصلی موقع حرکت ماوس */
        #050505 60%
      )
    \`;
  });
<\/script>`,clientOnly:!0,className:"w-html-embed"})}),v=n=>{const{origin:t,pathname:o,search:a}=new URL(n);return`${t}${o}${a}`},z=d.memo(({pageKey:n,system:t})=>e.jsx(b,{system:t},n),(n,t)=>n.pageKey===t.pageKey),_=({data:n})=>{const{system:t,resources:o,url:a,pageMeta:i}=n,c=v(a),p=d.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:o,breakpoints:x,onError:console.error}),[o]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(g.Provider,{value:a,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(m,{url:a,pageMeta:i,siteName:l,imageLoader:s,assetBaseUrl:r}),e.jsx(h,{children:i.title})]})},w=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),T=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${j}`})}),P.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),k={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled5/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled5/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{k as configValuesSerialized};
