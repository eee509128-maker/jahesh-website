import{j as e,r as l,a as r,i as o,R as u,b as m,P as g,c as h,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],P=[],S=n=>e.jsxs("body",{className:"w-element",children:[e.jsx(y,{code:`<div id="mouse-bg"></div>

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
      rgba(0, 180, 255, 0.35),
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
        rgba(0, 180, 255, 0.4),
        #050505 60%
      )
    \`;
  });
<\/script>
`,clientOnly:!0,className:"w-html-embed"}),e.jsx("div",{className:"w-element"})]}),b=n=>{const{origin:t,pathname:s,search:a}=new URL(n);return`${t}${s}${a}`},w=l.memo(({pageKey:n,system:t})=>e.jsx(S,{system:t},n),(n,t)=>n.pageKey===t.pageKey),z=({data:n})=>{const{system:t,resources:s,url:a,pageMeta:i}=n,c=b(a),p=l.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:s,breakpoints:f,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:a,children:e.jsx(w,{pageKey:c,system:t})}),e.jsx(g,{url:a,pageMeta:i,siteName:d,imageLoader:o,assetBaseUrl:r}),e.jsx(h,{children:i.title})]})},_=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),T=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${j}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),k={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{k as configValuesSerialized};
