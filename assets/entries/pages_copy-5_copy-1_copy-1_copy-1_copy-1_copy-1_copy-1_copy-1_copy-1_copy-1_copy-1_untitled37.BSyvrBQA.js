import{j as e,r as d,a as s,i as n,R as u,b as m,P as y,c as h,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as g}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],P=o=>e.jsx("body",{className:"w-element",children:e.jsx(g,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body {
    margin: 0;
    height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: none; /* مخفی کردن نشانگر اصلی */
    overflow: hidden;
  }

  h1 {
    font-size: 10vw;
    font-family: sans-serif;
    /* متن سیاه روی زمینه سفید */
    color: black; 
    z-index: 1;
  }

  /* نشانگر سفارشی */
  .cursor {
    position: fixed;
    width: 50px;
    height: 50px;
    background: white; /* رنگ خود دایره */
    border-radius: 50%;
    pointer-events: none; /* تاثیری روی کلیک نگذارد */
    transform: translate(-50%, -50%);
    z-index: 9999;
    /* جادوی اصلی اینجاست: */
    mix-blend-mode: difference; 
    transition: width 0.2s, height 0.2s;
  }
  
  /* وقتی موس کلیک می‌شود بزرگ شود */
  .cursor.active {
      width: 80px;
      height: 80px;
  }
</style>



  <h1>CONSTRAST</h1>
  <div class="cursor" id="customCursor"></div>

<script>
  const cursor = document.getElementById('customCursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => cursor.classList.add('active'));
  document.addEventListener('mouseup', () => cursor.classList.remove('active'));
<\/script>


`,className:"w-html-embed"})}),w=o=>{const{origin:t,pathname:a,search:r}=new URL(o);return`${t}${a}${r}`},z=d.memo(({pageKey:o,system:t})=>e.jsx(P,{system:t},o),(o,t)=>o.pageKey===t.pageKey),b=({data:o})=>{const{system:t,resources:a,url:r,pageMeta:i}=o,c=w(r),p=d.useMemo(()=>({imageLoader:n,assetBaseUrl:s,resources:a,breakpoints:x,onError:console.error}),[a]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:r,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(y,{url:r,pageMeta:i,siteName:l,imageLoader:n,assetBaseUrl:s}),e.jsx(h,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),_=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${s}${v}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),j.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-5/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-5/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{O as configValuesSerialized};
