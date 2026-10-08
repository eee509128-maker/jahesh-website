import{j as e,r as l,a as o,i as s,R as u,b as m,P as g,c as x,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],S=t=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Neon UI</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family:"Vazirmatn",system-ui,sans-serif;
    background:#0a0f1f;
    color:#e5e7eb;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .panel{
    background:#0f172a;
    border:1px solid rgba(34,211,238,.3);
    padding:30px;
    border-radius:16px;
    width:min(520px,92vw);
    box-shadow:0 0 30px rgba(34,211,238,.15);
  }
  h2{margin-bottom:12px}
  p{opacity:.8;margin-bottom:20px}
  .btns{display:flex;gap:12px;flex-wrap:wrap}
  .btn{
    padding:12px 20px;
    border-radius:12px;
    text-decoration:none;
    color:white;
    font-weight:600;
    border:1px solid transparent;
    transition:.2s ease;
  }
  .btn.neon{
    background:linear-gradient(135deg,#22d3ee,#7c3aed);
    box-shadow:0 0 20px rgba(34,211,238,.4);
  }
  .btn.outline{
    border-color:#22d3ee;
    color:#22d3ee;
  }
  .btn:hover{transform:translateY(-3px)}
</style>


  <div class="panel">
    <h2>استایل نئون برای دکمه‌ها</h2>
    <p>برای بخش‌های اقدام (CTA) خیلی خوبه و توجه کاربر رو جلب می‌کنه.</p>
    <div class="btns">
      <a class="btn neon" href="#">شروع سریع</a>
      <a class="btn outline" href="#">دموی بیشتر</a>
    </div>
  </div>


`,className:"w-html-embed"})}),P=t=>{const{origin:n,pathname:r,search:a}=new URL(t);return`${n}${r}${a}`},w=l.memo(({pageKey:t,system:n})=>e.jsx(S,{system:n},t),(t,n)=>t.pageKey===n.pageKey),z=({data:t})=>{const{system:n,resources:r,url:a,pageMeta:i}=t,p=P(a),c=l.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:r,breakpoints:f,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:a,children:e.jsx(w,{pageKey:p,system:n})}),e.jsx(g,{url:a,pageMeta:i,siteName:d,imageLoader:s,assetBaseUrl:o}),e.jsx(x,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${b}`})}),v.map(n=>e.jsx("link",{rel:"preload",href:`${o}${n}`,as:"font",crossOrigin:"anonymous"},n)),j.map(n=>e.jsx("link",{rel:"preload",href:`${o}${n}`,as:"image"},n))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),k={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{k as configValuesSerialized};
