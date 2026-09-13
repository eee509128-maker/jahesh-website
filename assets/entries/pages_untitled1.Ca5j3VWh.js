import{j as e,r as l,a as r,i as s,R as u,b as m,P as g,c as x,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],P=[],S=n=>e.jsx("body",{className:"w-element",children:e.jsx(f,{code:`<div id="eye">
  <div id="pupil"></div>
</div>

<style>
#eye {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, #222, #000);
  position: fixed;
  inset: 0;
  margin: auto;
}

#pupil {
  width: 60px;
  height: 60px;
  background: #00c8ff;
  border-radius: 50%;
  position: absolute;
  top: 70px;
  left: 70px;
}
</style>

<script>
const pupil = document.getElementById("pupil");

document.addEventListener("mousemove", e => {
  const x = (e.clientX / innerWidth - 0.5) * 60;
  const y = (e.clientY / innerHeight - 0.5) * 60;
  pupil.style.transform = \`translate(\${x}px, \${y}px)\`;
});
<\/script>
`,clientOnly:!0,className:"w-html-embed"})}),b=n=>{const{origin:t,pathname:o,search:a}=new URL(n);return`${t}${o}${a}`},_=l.memo(({pageKey:n,system:t})=>e.jsx(S,{system:t},n),(n,t)=>n.pageKey===t.pageKey),z=({data:n})=>{const{system:t,resources:o,url:a,pageMeta:i}=n,p=b(a),c=l.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:o,breakpoints:y,onError:console.error}),[o]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:a,children:e.jsx(_,{pageKey:p,system:t})}),e.jsx(g,{url:a,pageMeta:i,siteName:d,imageLoader:s,assetBaseUrl:r}),e.jsx(x,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),w=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${j}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled1/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled1/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{U as configValuesSerialized};
