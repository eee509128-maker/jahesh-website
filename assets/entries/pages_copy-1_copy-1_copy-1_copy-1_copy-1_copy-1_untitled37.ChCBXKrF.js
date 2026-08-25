import{j as e,r as d,a as r,i as o,R as g,b as u,P as m,c as x,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],S=t=>e.jsx("body",{className:"w-element",children:e.jsx(f,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Glass Cards</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family:"Vazirmatn",system-ui,sans-serif;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#e2e8f0;
  }
  .grid{
    width:min(1100px, 92vw);
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap:20px;
  }
  .card{
    position:relative;
    padding:24px;
    border-radius:18px;
    background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.2);
    backdrop-filter: blur(10px);
    overflow:hidden;
    transition:.2s ease;
  }
  .card:hover{transform:translateY(-6px)}
  .card::after{
    content:"";
    position:absolute;
    inset:-40%;
    background: radial-gradient(200px 200px at 30% 30%, rgba(34,211,238,.35), transparent 60%);
    pointer-events:none;
  }
  .card h3{margin-bottom:10px;font-size:20px}
  .card p{opacity:.8;line-height:1.7;font-size:14px}
  .tag{
    display:inline-block;
    margin-top:16px;
    padding:6px 10px;
    border-radius:999px;
    background:rgba(124,58,237,.2);
    border:1px solid rgba(124,58,237,.5);
    font-size:12px;
  }
</style>


  <section class="grid">
    <div class="card">
      <h3>طراحی مدرن</h3>
      <p>کارت‌های شیشه‌ای با افکت نور نرم و بسیار شیک.</p>
      <span class="tag">جدید</span>
    </div>
    <div class="card">
      <h3>کاملاً ریسپانسیو</h3>
      <p>در موبایل، تبلت و دسکتاپ عالی نمایش داده می‌شود.</p>
      <span class="tag">Responsive</span>
    </div>
    <div class="card">
      <h3>مناسب هر سایت</h3>
      <p>برای خدمات، محصولات و معرفی ویژگی‌ها عالی است.</p>
      <span class="tag">UI</span>
    </div>
  </section>


`,className:"w-html-embed"})}),P=t=>{const{origin:n,pathname:s,search:a}=new URL(t);return`${n}${s}${a}`},z=d.memo(({pageKey:t,system:n})=>e.jsx(S,{system:n},t),(t,n)=>t.pageKey===n.pageKey),w=({data:t})=>{const{system:n,resources:s,url:a,pageMeta:i}=t,p=P(a),c=d.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:s,breakpoints:h,onError:console.error}),[s]);return e.jsxs(g.Provider,{value:c,children:[e.jsx(u.Provider,{value:a,children:e.jsx(z,{pageKey:p,system:n})}),e.jsx(m,{url:a,pageMeta:i,siteName:l,imageLoader:o,assetBaseUrl:r}),e.jsx(x,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),_=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${b}`})}),v.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"font",crossOrigin:"anonymous"},n)),j.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"image"},n))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),E={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{E as configValuesSerialized};
