import{j as e,r as d,a as s,i as o,R as m,b as g,P as u,c as x,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(v,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>نوار اخبار انجمن علمی جهش</title>
  <style>
    :root{
      --bg:#0b0f19;
      --card:#12182a;
      --accent:#8b5cff;
      --accent2:#00f5d4;
      --text:#e8eeff;
      --muted:#b9c1dd;
      --stroke: rgba(255,255,255,.12);
      --shadow: 0 14px 50px rgba(3,8,20,.45);
    }
    body{
      margin:0;
      font-family: "Vazirmatn", system-ui, -apple-system, Segoe UI, sans-serif;
      background: var(--bg);
      color:var(--text);
      display:grid;
      place-items:center;
      min-height:100vh;
    }
    .news-wrap{
      width:min(1100px, 92vw);
      background: linear-gradient(145deg, var(--card), #0e1425);
      border:1px solid var(--stroke);
      border-radius:18px;
      padding:16px 18px;
      box-shadow: var(--shadow);
      display:flex;
      gap:14px;
      align-items:center;
      overflow:hidden;
      position:relative;
    }
    .label{
      flex:0 0 auto;
      padding:8px 14px;
      border-radius:12px;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      color:#0b0f19;
      font-weight:800;
      letter-spacing:.2px;
      box-shadow:0 8px 24px rgba(0,245,212,.25);
      white-space:nowrap;
    }
    .ticker{
      position:relative;
      overflow:hidden;
      flex:1 1 auto;
      mask-image: linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%);
    }
    .track{
      display:inline-flex;
      gap:32px;
      white-space:nowrap;
      animation: scroll 22s linear infinite;
      padding-inline:10px;
    }
    .item{
      color:var(--muted);
      font-size:1rem;
      display:inline-flex;
      align-items:center;
      gap:10px;
    }
    .dot{
      width:8px;height:8px;border-radius:50%;
      background: var(--accent2);
      box-shadow:0 0 10px rgba(0,245,212,.6);
    }
    @keyframes scroll{
      to{ transform: translateX(-50%); }
    }

    @media (max-width:640px){
      .label{font-size:.9rem}
      .item{font-size:.9rem}
    }
  </style>



  <section class="news-wrap" aria-label="نوار اخبار انجمن علمی جهش">
    <div class="label">اخبار جهش</div>
    <div class="ticker">
      <div class="track">
        <div class="item"><span class="dot"></span>ثبت‌نام کارگاه «هوش مصنوعی در پژوهش» آغاز شد.</div>
        <div class="item"><span class="dot"></span>نشست علمی «مرزهای کوانتوم» پنجشنبه ساعت ۱۶ برگزار می‌شود.</div>
        <div class="item"><span class="dot"></span>فراخوان جذب پژوهشگر دانشجویی در آزمایشگاه داده اعلام شد.</div>
        <div class="item"><span class="dot"></span>منتورینگ پایان‌نامه‌ها با حضور اساتید برتر دانشکده.</div>
        <div class="item"><span class="dot"></span>مسابقه ایده‌پردازی «جهش نو» با جوایز ویژه.</div>

        <div class="item"><span class="dot"></span>ثبت‌نام کارگاه «هوش مصنوعی در پژوهش» آغاز شد.</div>
        <div class="item"><span class="dot"></span>نشست علمی «مرزهای کوانتوم» پنجشنبه ساعت ۱۶ برگزار می‌شود.</div>
        <div class="item"><span class="dot"></span>فراخوان جذب پژوهشگر دانشجویی در آزمایشگاه داده اعلام شد.</div>
        <div class="item"><span class="dot"></span>منتورینگ پایان‌نامه‌ها با حضور اساتید برتر دانشکده.</div>
        <div class="item"><span class="dot"></span>مسابقه ایده‌پردازی «جهش نو» با جوایز ویژه.</div>
      </div>
    </div>
  </section>



`,className:"w-html-embed"})}),j=a=>{const{origin:n,pathname:i,search:t}=new URL(a);return`${n}${i}${t}`},P=d.memo(({pageKey:a,system:n})=>e.jsx(S,{system:n},a),(a,n)=>a.pageKey===n.pageKey),z=({data:a})=>{const{system:n,resources:i,url:t,pageMeta:r}=a,p=j(t),c=d.useMemo(()=>({imageLoader:o,assetBaseUrl:s,resources:i,breakpoints:f,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:c,children:[e.jsx(g.Provider,{value:t,children:e.jsx(P,{pageKey:p,system:n})}),e.jsx(u,{url:t,pageMeta:r,siteName:l,imageLoader:o,assetBaseUrl:s}),e.jsx(x,{children:r.title})]})},k=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${s}${h}`})}),b.map(n=>e.jsx("link",{rel:"preload",href:`${s}${n}`,as:"font",crossOrigin:"anonymous"},n)),w.map(n=>e.jsx("link",{rel:"preload",href:`${s}${n}`,as:"image"},n))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-11/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-11/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{U as configValuesSerialized};
