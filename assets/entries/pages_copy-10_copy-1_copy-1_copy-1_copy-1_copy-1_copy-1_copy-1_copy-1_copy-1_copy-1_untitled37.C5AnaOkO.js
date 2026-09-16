import{j as e,r as l,a as r,i,R as u,b as h,P as y,c as g,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(f,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body {
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .gallery {
    display: flex;
    gap: 10px;
  }

  .card {
    position: relative;
    width: 80px;
    height: 300px;
    background: #333;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    transition: 0.5s ease-in-out;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    /* عکس‌های رندوم برای مثال */
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
  }
  
  /* تصاویر پس زمینه (جایگزین با عکس خودت) */
  .card:nth-child(1) { background-image: url('https://picsum.photos/300/600?random=1'); }
  .card:nth-child(2) { background-image: url('https://picsum.photos/300/600?random=2'); }
  .card:nth-child(3) { background-image: url('https://picsum.photos/300/600?random=3'); }
  .card:nth-child(4) { background-image: url('https://picsum.photos/300/600?random=4'); }

  /* وقتی موس روی گالری میاد، همه کارت‌ها جمع و تار بشن */
  .gallery:hover .card {
    width: 80px;
    opacity: 0.3;
    filter: blur(3px) grayscale(100%);
  }

  /* اما کارتی که موس روشه، باز بشه و شفاف */
  .gallery .card:hover {
    width: 300px;
    opacity: 1;
    filter: blur(0) grayscale(0%);
    box-shadow: 0 0 30px rgba(255,255,255,0.2);
  }
  
  .card h3 {
      color: white;
      font-family: sans-serif;
      opacity: 0;
      transition: 0.5s;
      white-space: nowrap;
  }
  
  .card:hover h3 {
      opacity: 1;
  }
</style>



  <div class="gallery">
    <div class="card"><h3>Cyberpunk</h3></div>
    <div class="card"><h3>Neon City</h3></div>
    <div class="card"><h3>Future</h3></div>
    <div class="card"><h3>Retro</h3></div>
  </div>



`,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:s,search:o}=new URL(a);return`${t}${s}${o}`},w=l.memo(({pageKey:a,system:t})=>e.jsx(S,{system:t},a),(a,t)=>a.pageKey===t.pageKey),z=({data:a})=>{const{system:t,resources:s,url:o,pageMeta:n}=a,c=P(o),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:r,resources:s,breakpoints:x,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(h.Provider,{value:o,children:e.jsx(w,{pageKey:c,system:t})}),e.jsx(y,{url:o,pageMeta:n,siteName:d,imageLoader:i,assetBaseUrl:r}),e.jsx(g,{children:n.title})]})},_=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${r}${v}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),j.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-10/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-10/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{C as configValuesSerialized};
