import{j as e,r as d,a as r,i as o,R as g,b as x,P as m,c as u,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],S=t=>e.jsx("body",{className:"w-element",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hero Gradient</title>
<style>
  :root{
    --bg1:#0f172a;
    --bg2:#1e293b;
    --primary:#7c3aed;
    --secondary:#22d3ee;
    --text:#e2e8f0;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family: "Vazirmatn", system-ui, sans-serif;
    background: radial-gradient(1200px 600px at 10% 10%, #1f2937 0%, transparent 60%),
                radial-gradient(900px 500px at 90% 20%, #0ea5e9 0%, transparent 60%),
                linear-gradient(135deg,var(--bg1),var(--bg2));
    color:var(--text);
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:40px;
  }
  .hero{
    max-width:1100px;
    width:100%;
    display:grid;
    grid-template-columns:1.1fr .9fr;
    gap:40px;
    align-items:center;
  }
  .title{
    font-size:48px;
    line-height:1.2;
    margin-bottom:16px;
  }
  .subtitle{
    opacity:.85;
    font-size:18px;
    line-height:1.8;
    margin-bottom:28px;
  }
  .actions{
    display:flex;
    gap:12px;
    flex-wrap:wrap;
  }
  .btn{
    padding:14px 22px;
    border-radius:12px;
    font-weight:600;
    text-decoration:none;
    transition:.2s ease;
    border:1px solid transparent;
  }
  .btn.primary{
    background:linear-gradient(135deg,var(--primary),#a855f7);
    color:white;
    box-shadow:0 10px 30px rgba(124,58,237,.35);
  }
  .btn.secondary{
    border-color:rgba(255,255,255,.2);
    color:var(--text);
    backdrop-filter: blur(6px);
  }
  .art{
    aspect-ratio:1/1;
    border-radius:24px;
    background:
      radial-gradient(220px 220px at 70% 30%, rgba(34,211,238,.7), transparent 60%),
      radial-gradient(180px 180px at 30% 70%, rgba(124,58,237,.7), transparent 60%),
      linear-gradient(135deg, rgba(255,255,255,.1), rgba(255,255,255,.02));
    border:1px solid rgba(255,255,255,.15);
    box-shadow:0 20px 50px rgba(0,0,0,.4);
  }
  @media (max-width:900px){
    .hero{grid-template-columns:1fr}
    .title{font-size:38px}
  }
</style>


  <section class="hero">
    <div>
      <h1 class="title">یک هدر مدرن برای سایت شما</h1>
      <p class="subtitle">گرادیان‌های جذاب، دکمه‌های شیک و طراحی کاملاً ریسپانسیو.</p>
      <div class="actions">
        <a class="btn primary" href="#">شروع</a>
        <a class="btn secondary" href="#">اطلاعات بیشتر</a>
      </div>
    </div>
    <div class="art"></div>
  </section>


`,className:"w-html-embed"})}),P=t=>{const{origin:n,pathname:i,search:a}=new URL(t);return`${n}${i}${a}`},w=d.memo(({pageKey:t,system:n})=>e.jsx(S,{system:n},t),(t,n)=>t.pageKey===n.pageKey),z=({data:t})=>{const{system:n,resources:i,url:a,pageMeta:s}=t,p=P(a),c=d.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:i,breakpoints:f,onError:console.error}),[i]);return e.jsxs(g.Provider,{value:c,children:[e.jsx(x.Provider,{value:a,children:e.jsx(w,{pageKey:p,system:n})}),e.jsx(m,{url:a,pageMeta:s,siteName:l,imageLoader:o,assetBaseUrl:r}),e.jsx(u,{children:s.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${b}`})}),v.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"font",crossOrigin:"anonymous"},n)),j.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"image"},n))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{U as configValuesSerialized};
