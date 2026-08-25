import{j as e,r as d,a as o,i as s,R as m,b as u,P as g,c as y,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],S=t=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<title>تحلیل‌گر احساسات</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #0f0f1a; color: #e0e0ff; font-family: Tahoma, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
  .container { width: 90%; max-width: 700px; padding: 2rem; }
  h1 { text-align: center; font-size: 2rem; margin-bottom: 2rem; background: linear-gradient(135deg, #a78bfa, #60a5fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  textarea { width: 100%; height: 150px; background: #1a1a2e; border: 1px solid #4a4a8a; border-radius: 12px; padding: 1rem; color: #e0e0ff; font-size: 1rem; font-family: Tahoma, sans-serif; resize: vertical; }
  button { width: 100%; margin-top: 1rem; padding: 0.9rem; background: linear-gradient(135deg, #7c3aed, #2563eb); border: none; border-radius: 12px; color: white; font-size: 1.1rem; cursor: pointer; }
  .bar-wrap { margin: 0.8rem 0; }
  .bar-label { display: flex; justify-content: space-between; margin-bottom: 4px; }
  .bar-bg { background: #1a1a2e; border-radius: 20px; height: 22px; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 20px; transition: width 1s ease; }
  .error { color: #f87171; margin-top: 1rem; text-align: center; }
  .loading { text-align: center; margin-top: 1rem; color: #a78bfa; }
</style>


<div class="container">
  <h1>🎭 تحلیل‌گر احساسات</h1>
  <textarea id="txt" placeholder="متن خود را اینجا بنویسید..."></textarea>
  <button onclick="analyze()">تحلیل کن</button>
  <div id="output"></div>
</div>
<script>
const API_KEY = "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";
const emotions = [
  { name: "شادی 😊", color: "#fbbf24" },
  { name: "غم 😢", color: "#60a5fa" },
  { name: "خشم 😡", color: "#f87171" },
  { name: "ترس 😨", color: "#a78bfa" },
  { name: "تعجب 😲", color: "#34d399" },
  { name: "نفرت 🤢", color: "#fb923c" }
];

async function analyze() {
  const text = document.getElementById("txt").value.trim();
  if (!text) return;
  const out = document.getElementById("output");
  out.innerHTML = '<div class="loading">در حال تحلیل...</div>';

  const prompt = \`متن زیر را تحلیل احساسی کن و دقیقاً یک JSON برگردان با کلیدهای: joy, sadness, anger, fear, surprise, disgust — هر کدام عددی بین 0 تا 100. فقط JSON، بدون توضیح.\\n\\nمتن: "\${text}"\`;

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": \`Bearer \${API_KEY}\` },
      body: JSON.stringify({ model: "llama-3.3-70b-versatile", messages: [{ role: "user", content: prompt }], temperature: 0.3 })
    });
    const data = await res.json();
    const raw = data.choices[0].message.content;
    const json = JSON.parse(raw.match(/\\{[\\s\\S]*\\}/)[0]);
    const values = [json.joy, json.sadness, json.anger, json.fear, json.surprise, json.disgust];
    out.innerHTML = '<div style="margin-top:1.5rem">' + emotions.map((e, i) => \`
      <div class="bar-wrap">
        <div class="bar-label"><span>\${e.name}</span><span>\${values[i]}%</span></div>
        <div class="bar-bg"><div class="bar-fill" style="width:\${values[i]}%;background:\${e.color}"></div></div>
      </div>\`).join("") + "</div>";
  } catch(e) {
    out.innerHTML = \`<div class="error">خطا: \${e.message}</div>\`;
  }
}
<\/script>


`,className:"w-html-embed"})})}),w=t=>{const{origin:n,pathname:r,search:a}=new URL(t);return`${n}${r}${a}`},P=d.memo(({pageKey:t,system:n})=>e.jsx(S,{system:n},t),(t,n)=>t.pageKey===n.pageKey),z=({data:t})=>{const{system:n,resources:r,url:a,pageMeta:i}=t,c=w(a),p=d.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:r,breakpoints:b,onError:console.error}),[r]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(u.Provider,{value:a,children:e.jsx(P,{pageKey:c,system:n})}),e.jsx(g,{url:a,pageMeta:i,siteName:l,imageLoader:s,assetBaseUrl:o}),e.jsx(y,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${x}`})}),v.map(n=>e.jsx("link",{rel:"preload",href:`${o}${n}`,as:"font",crossOrigin:"anonymous"},n)),j.map(n=>e.jsx("link",{rel:"preload",href:`${o}${n}`,as:"image"},n))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-42/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-42/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{A as configValuesSerialized};
