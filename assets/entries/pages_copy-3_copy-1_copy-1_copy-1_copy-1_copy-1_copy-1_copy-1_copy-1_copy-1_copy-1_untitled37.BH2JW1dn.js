import{j as e,r as l,a as o,i as n,R as g,b as u,P as f,c as m,d as v}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=r=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pricing Cards - کامپوننت ۲</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&amp;display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #f5f0e8;
    --ink: #111;
    --pop: #e63946;
    --gold: #f4a261;
    --border-w: 2.5px;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Vazirmatn', sans-serif;
    background: var(--bg);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    position: relative;
    overflow-x: hidden;
  }

  /* ── Grid noise texture ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(17,17,17,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(17,17,17,0.06) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
  }

  .header {
    text-align: center;
    margin-bottom: 56px;
    position: relative;
    z-index: 1;
  }

  .header-tag {
    display: inline-block;
    background: var(--ink);
    color: var(--bg);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 6px 16px;
    border-radius: 0;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 900;
    color: var(--ink);
    line-height: 1.1;
    border-bottom: var(--border-w) solid var(--ink);
    padding-bottom: 12px;
    display: inline-block;
  }

  /* ── Cards Grid ── */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 0;
    max-width: 900px;
    width: 100%;
    position: relative;
    z-index: 1;
    border: var(--border-w) solid var(--ink);
  }

  .card {
    border: var(--border-w) solid var(--ink);
    border-collapse: collapse;
    padding: 40px 32px;
    background: var(--bg);
    position: relative;
    overflow: hidden;
    transition: transform 0.25s cubic-bezier(.22,1,.36,1), box-shadow 0.25s;
    cursor: default;
  }
  .card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 8px 8px 0 var(--ink);
    z-index: 2;
  }

  /* Featured card */
  .card.featured {
    background: var(--ink);
    color: var(--bg);
  }
  .card.featured:hover {
    box-shadow: 8px 8px 0 var(--pop);
  }

  /* Diagonal accent stripe */
  .card::after {
    content: '';
    position: absolute;
    top: -40px; right: -40px;
    width: 100px; height: 100px;
    background: var(--pop);
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .card:hover::after { opacity: 0.12; }

  .plan-name {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--pop);
    margin-bottom: 16px;
  }
  .card.featured .plan-name { color: var(--gold); }

  .price {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    margin-bottom: 8px;
  }
  .currency {
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: 12px;
    color: var(--ink);
  }
  .card.featured .currency { color: var(--bg); }
  .amount {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1;
    color: var(--ink);
  }
  .card.featured .amount { color: var(--bg); }
  .period {
    font-size: 0.85rem;
    color: rgba(17,17,17,0.4);
    align-self: flex-end;
    padding-bottom: 10px;
  }
  .card.featured .period { color: rgba(245,240,232,0.4); }

  .divider {
    height: var(--border-w);
    background: var(--ink);
    margin: 24px 0;
  }
  .card.featured .divider { background: rgba(245,240,232,0.2); }

  .features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 36px;
  }
  .features li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.92rem;
    font-weight: 400;
    color: rgba(17,17,17,0.75);
  }
  .card.featured .features li { color: rgba(245,240,232,0.75); }
  .features li::before {
    content: '→';
    font-weight: 900;
    color: var(--pop);
    flex-shrink: 0;
  }
  .card.featured .features li::before { color: var(--gold); }

  .btn {
    display: block;
    width: 100%;
    padding: 14px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    border: var(--border-w) solid var(--ink);
    background: var(--bg);
    color: var(--ink);
    text-align: center;
    transition: all 0.15s;
    letter-spacing: 0.03em;
    position: relative;
    overflow: hidden;
  }
  .btn:hover { background: var(--ink); color: var(--bg); }
  .card.featured .btn { background: var(--pop); color: #fff; border-color: var(--pop); }
  .card.featured .btn:hover { background: #c1121f; border-color: #c1121f; }

  /* Popular badge */
  .popular-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    background: var(--pop);
    color: #fff;
    font-size: 0.68rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    padding: 5px 12px;
    text-transform: uppercase;
  }

  /* Stagger animation */
  .card { opacity: 0; animation: appear 0.6s cubic-bezier(.22,1,.36,1) forwards; }
  .card:nth-child(1) { animation-delay: 0.05s; }
  .card:nth-child(2) { animation-delay: 0.15s; }
  .card:nth-child(3) { animation-delay: 0.25s; }

  @keyframes appear {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>



<div class="header">
  <div class="header-tag">قیمت‌گذاری</div>
  <h1>پلن مناسب خودت رو انتخاب کن</h1>
</div>

<div class="grid">

  <!-- Free -->
  <div class="card">
    <div class="plan-name">رایگان</div>
    <div class="price">
      <span class="currency">تومان</span>
      <span class="amount">0</span>
      <span class="period">/ ماه</span>
    </div>
    <div class="divider"></div>
    <ul class="features">
      <li>۵ پروژه فعال</li>
      <li>۱ گیگابایت فضا</li>
      <li>پشتیبانی ایمیلی</li>
      <li>داشبورد پایه</li>
    </ul>
    <button class="btn">شروع رایگان</button>
  </div>

  <!-- Pro - Featured -->
  <div class="card featured">
    <div class="popular-badge">محبوب‌ترین</div>
    <div class="plan-name">حرفه‌ای</div>
    <div class="price">
      <span class="currency">تومان</span>
      <span class="amount">49k</span>
      <span class="period">/ ماه</span>
    </div>
    <div class="divider"></div>
    <ul class="features">
      <li>پروژه‌های نامحدود</li>
      <li>۵۰ گیگابایت فضا</li>
      <li>پشتیبانی ۲۴/۷</li>
      <li>آنالیتیکس پیشرفته</li>
      <li>API اختصاصی</li>
    </ul>
    <button class="btn">انتخاب این پلن</button>
  </div>

  <!-- Enterprise -->
  <div class="card">
    <div class="plan-name">سازمانی</div>
    <div class="price">
      <span class="currency">تومان</span>
      <span class="amount">199k</span>
      <span class="period">/ ماه</span>
    </div>
    <div class="divider"></div>
    <ul class="features">
      <li>همه‌چیز نامحدود</li>
      <li>سرور اختصاصی</li>
      <li>مدیر حساب VIP</li>
      <li>آموزش تیمی</li>
      <li>SLA 99.99%</li>
    </ul>
    <button class="btn">تماس با فروش</button>
  </div>

</div>



`,className:"w-html-embed"})}),z=r=>{const{origin:a,pathname:i,search:t}=new URL(r);return`${a}${i}${t}`},P=l.memo(({pageKey:r,system:a})=>e.jsx(k,{system:a},r),(r,a)=>r.pageKey===a.pageKey),S=({data:r})=>{const{system:a,resources:i,url:t,pageMeta:s}=r,p=z(t),c=l.useMemo(()=>({imageLoader:n,assetBaseUrl:o,resources:i,breakpoints:b,onError:console.error}),[i]);return e.jsxs(g.Provider,{value:c,children:[e.jsx(u.Provider,{value:t,children:e.jsx(P,{pageKey:p,system:a})}),e.jsx(f,{url:t,pageMeta:s,siteName:d,imageLoader:n,assetBaseUrl:o}),e.jsx(m,{children:s.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${o}${h}`})}),y.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"font",crossOrigin:"anonymous"},a)),w.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"image"},a))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-3/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-3/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{F as configValuesSerialized};
