import{j as e,r as l,a,i as o,R as m,b as u,P as g,c as f,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";import{d as y}from"../chunks/chunk-ClMSjCia.js";/* empty css                      */const d="jahesh",j=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",P=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],w=n=>e.jsxs("body",{className:"w-element",children:[e.jsx(y,{src:"/assets/20260214_173614_U8b704c05YFV9e8BWJ8nN.jpg",width:723,height:964,alt:"",id:"portrait",className:"w-image"}),e.jsx(x,{code:`<style>
#portrait {
  width: 360px;
  max-width: 75vw;
  position: fixed;
  inset: 0;
  margin: auto;
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  will-change: transform;
  pointer-events: none;
  z-index: 9999;
}
</style>

<script>
const portrait = document.getElementById("portrait");

if (portrait) {
  window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    portrait.style.transform = \`
      rotateY(\${x}deg)
      rotateX(\${-y}deg)
      translateZ(20px)
    \`;
  });
}
<\/script>
`,clientOnly:!0,className:"w-html-embed"})]}),_=n=>{const{origin:t,pathname:s,search:r}=new URL(n);return`${t}${s}${r}`},z=l.memo(({pageKey:n,system:t})=>e.jsx(w,{system:t},n),(n,t)=>n.pageKey===t.pageKey),T=({data:n})=>{const{system:t,resources:s,url:r,pageMeta:i}=n,p=_(r),c=l.useMemo(()=>({imageLoader:o,assetBaseUrl:a,resources:s,breakpoints:j,onError:console.error}),[s]);return e.jsxs(m.Provider,{value:c,children:[e.jsx(u.Provider,{value:r,children:e.jsx(z,{pageKey:p,system:t})}),e.jsx(g,{url:r,pageMeta:i,siteName:d,imageLoader:o,assetBaseUrl:a}),e.jsx(f,{children:i.title})]})},b=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),E=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${a}${v}`})}),P.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled3/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled3/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{F as configValuesSerialized};
