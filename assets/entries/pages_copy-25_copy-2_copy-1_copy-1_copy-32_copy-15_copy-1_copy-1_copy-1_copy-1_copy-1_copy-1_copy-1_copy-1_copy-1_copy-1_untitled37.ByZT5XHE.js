import{j as e,r as l,a as o,i,R as m,b as g,P as u,c as y,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],P=r=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Prompt → Image Generator</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    :root {
      --bg: #0f0f1a;
      --card: #1a1b2e;
      --accent: #00d4ff;
      --accent-dark: #0099cc;
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: system-ui, sans-serif;
      background: linear-gradient(135deg, #0a0e17, #1e0033);
      color: white;
      min-height: 100vh;
      padding: 2rem;
      display: grid;
      place-items: center;
    }
    .container {
      width: 100%; max-width: 1100px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .card {
      background: var(--card);
      border-radius: 1.2rem;
      padding: 2rem;
      box-shadow: 0 20px 40px rgba(0,0,0,0.6);
      border: 1px solid rgba(0,212,255,0.12);
      backdrop-filter: blur(10px);
    }
    h1 { font-size: 2.4rem; margin-bottom: 1.5rem; text-align: center; background: linear-gradient(90deg, #00d4ff, #ff00aa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    textarea, input {
      width: 100%;
      padding: 1rem;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.05);
      color: white;
      font-size: 1.1rem;
      margin: 1rem 0;
      resize: vertical;
      min-height: 120px;
    }
    button {
      background: linear-gradient(45deg, var(--accent), #00ff9d);
      border: none;
      color: black;
      font-weight: bold;
      padding: 1rem 2rem;
      border-radius: 50px;
      cursor: pointer;
      font-size: 1.1rem;
      transition: all 0.3s;
      box-shadow: 0 10px 30px rgba(0,212,255,0.3);
    }
    button:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 15px 40px rgba(0,212,255,0.5); }
    #preview {
      width: 100%; height: 420px;
      border-radius: 16px;
      object-fit: cover;
      background: #111;
      box-shadow: 0 20px 60px rgba(0,0,0,0.7);
      transition: all 0.4s;
    }
    .loading { opacity: 0.6; pointer-events: none; }
    .error { color: #ff5555; text-align: center; margin-top: 1rem; }

    @media (max-width: 900px) {
      .container { grid-template-columns: 1fr; }
    }
  </style>



<div class="container">
  <div class="card">
    <h1>AI Prompt → تصویر</h1>
    
    <label>توضیح صحنه (prompt فارسی یا انگلیسی)</label>
    <textarea id="prompt" placeholder="مثال: یک شهر سایبرپانک در شب بارانی با نور نئون صورتی و بنفش، کیفیت 8k، بسیار واقع‌گرایانه"></textarea>

    <label>کلید API (مثلاً Unsplash یا Pexels)</label>
    <input type="text" id="apiKey" placeholder="API Key خودت رو اینجا بذار">

    <button id="generate">ساخت تصویر خفن!</button>

    <p class="error" id="msg"></p>
  </div>

  <div class="card">
    <img id="preview" src="https://via.placeholder.com/600x420/111/eee?text=تصویر+اینجا+نمایش+داده+می‌شود" alt="preview">
  </div>
</div>

<script>
  const btn = document.getElementById('generate');
  const preview = document.getElementById('preview');
  const promptEl = document.getElementById('prompt');
  const keyEl = document.getElementById('apiKey');
  const msg = document.getElementById('msg');

  btn.addEventListener('click', async () => {
    const prompt = promptEl.value.trim();
    const apiKey = keyEl.value.trim();

    if (!prompt) return msg.textContent = "لطفاً یه توضیح بنویس!";
    if (!apiKey) return msg.textContent = "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";

    msg.textContent = "در حال ساخت تصویر شگفت‌انگیز...";
    btn.classList.add('loading');
    preview.classList.add('loading');

    try {
      // مثال با Unsplash (ساده‌ترین برای شروع)
      // اگر API دیگه داری (مثل Stability یا Flux) عوضش کن
      const res = await fetch(\`https://api.unsplash.com/search/photos?query=\${encodeURIComponent(prompt)}&per_page=1&orientation=landscape&client_id=\${apiKey}\`);
      
      if (!res.ok) throw new Error("مشکل در ارتباط با API");

      const data = await res.json();
      if (data.results?.length > 0) {
        preview.src = data.results[0].urls.regular;
        msg.textContent = "تصویر آماده شد ✓";
      } else {
        msg.textContent = "هیچ تصویری پیدا نشد، prompt رو تغییر بده";
      }
    } catch (err) {
      msg.textContent = "خطا: " + err.message;
    } finally {
      btn.classList.remove('loading');
      preview.classList.remove('loading');
    }
  });
<\/script>

`,className:"w-html-embed"})})}),j=r=>{const{origin:t,pathname:n,search:a}=new URL(r);return`${t}${n}${a}`},k=l.memo(({pageKey:r,system:t})=>e.jsx(P,{system:t},r),(r,t)=>r.pageKey===t.pageKey),S=({data:r})=>{const{system:t,resources:n,url:a,pageMeta:s}=r,p=j(a),c=l.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:n,breakpoints:b,onError:console.error}),[n]);return e.jsxs(m.Provider,{value:c,children:[e.jsx(g.Provider,{value:a,children:e.jsx(k,{pageKey:p,system:t})}),e.jsx(u,{url:a,pageMeta:s,siteName:d,imageLoader:i,assetBaseUrl:o}),e.jsx(y,{children:s.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),E=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${f}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-25/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-25/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{C as configValuesSerialized};
