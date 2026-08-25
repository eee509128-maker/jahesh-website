import{j as e,r as l,a as n,i as r,R as u,b as m,P as g,c as y,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",f=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],z=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(v,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>خلاصه‌ساز هوشمند</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background: #0d0d0d;
    min-height: 100vh;
    color: #e0e0e0;
    padding: 30px 20px;
  }
  .container { max-width: 850px; margin: 0 auto; }
  h1 {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 5px;
    color: #4ade80;
    text-shadow: 0 0 30px rgba(74,222,128,0.5);
  }
  .sub { text-align: center; color: #666; margin-bottom: 30px; font-size: 0.85rem; }
  .card {
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 16px;
    padding: 25px;
    margin-bottom: 20px;
  }
  label { display: block; margin-bottom: 8px; color: #4ade80; font-size: 0.9rem; }
  input, textarea, select {
    width: 100%;
    background: #111;
    border: 1px solid #333;
    border-radius: 10px;
    color: #e0e0e0;
    padding: 12px 15px;
    font-size: 0.95rem;
    outline: none;
    font-family: inherit;
    transition: border 0.3s;
  }
  input:focus, textarea:focus { border-color: #4ade80; }
  textarea { height: 250px; resize: vertical; line-height: 1.6; }
  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 15px;
  }
  .option-group label { color: #888; }
  .btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border: none;
    border-radius: 12px;
    color: #000;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.3s;
  }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 5px 20px rgba(74,222,128,0.4); }
  .btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
  .result-card {
    background: #1a1a1a;
    border: 1px solid #4ade80;
    border-radius: 16px;
    padding: 25px;
    display: none;
  }
  .result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .result-title { color: #4ade80; font-size: 1rem; font-weight: bold; }
  .stats {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    padding: 12px;
    background: rgba(74,222,128,0.05);
    border-radius: 8px;
  }
  .stat { text-align: center; }
  .stat-val { font-size: 1.4rem; font-weight: bold; color: #4ade80; }
  .stat-lbl { font-size: 0.75rem; color: #666; }
  .summary-text {
    line-height: 1.8;
    color: #ccc;
    white-space: pre-wrap;
  }
  .bullets { margin-top: 15px; }
  .bullet-item {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    padding: 10px;
    background: rgba(74,222,128,0.05);
    border-radius: 8px;
    border-right: 3px solid #4ade80;
  }
  .copy-all {
    background: rgba(74,222,128,0.1);
    border: 1px solid #4ade80;
    border-radius: 8px;
    color: #4ade80;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s;
  }
  .copy-all:hover { background: rgba(74,222,128,0.25); }
  .loader {
    text-align: center;
    padding: 30px;
    display: none;
    color: #4ade80;
  }
  .dots { display: inline-block; }
  .dots::after {
    content: '';
    animation: dots 1.5s infinite;
  }
  @keyframes dots {
    0% { content: ''; }
    33% { content: '.'; }
    66% { content: '..'; }
    100% { content: '...'; }
  }
</style>


<div class="container">
  <h1>📄 خلاصه‌ساز هوشمند</h1>
  <div class="sub">powered by gemma2-9b-it | Groq API</div>

  <div class="card">
    <label>🔑 API Key</label>
    <input type="password" id="apiKey" placeholder="gsk_...">

    <div style="margin-top:20px;">
      <label>📝 متن ورودی</label>
      <textarea id="inputText" placeholder="متن، مقاله، یا هر محتوایی که می‌خواهید خلاصه شود را اینجا وارد کنید..."></textarea>
    </div>

    <div class="options">
      <div class="option-group">
        <label>طول خلاصه</label>
        <select id="length">
          <option value="very_short">خیلی کوتاه (1-2 جمله)</option>
          <option value="short">کوتاه (1 پاراگراف)</option>
          <option value="medium" selected="">متوسط (2-3 پاراگراف)</option>
          <option value="long">بلند (کامل)</option>
        </select>
      </div>
      <div class="option-group">
        <label>سبک خروجی</label>
        <select id="style">
          <option value="paragraph">پاراگراف‌بندی</option>
          <option value="bullets">نقاط کلیدی</option>
          <option value="both">هر دو</option>
        </select>
      </div>
      <div class="option-group">
        <label>زبان خروجی</label>
        <select id="outLang">
          <option value="same">مثل متن ورودی</option>
          <option value="Persian">فارسی</option>
          <option value="English">انگلیسی</option>
        </select>
      </div>
      <div class="option-group">
        <label>تمرکز بر</label>
        <select id="focus">
          <option value="general">کلی</option>
          <option value="facts">حقایق و اطلاعات</option>
          <option value="conclusions">نتیجه‌گیری‌ها</option>
          <option value="action">اقدامات لازم</option>
        </select>
      </div>
    </div>

    <button class="btn" id="sumBtn" onclick="summarize()">✨ خلاصه کن</button>
  </div>

  <div class="loader" id="loader">
    <div style="font-size:2rem;">🧠</div>
    <div>gemma2-9b در حال خواندن متن<span class="dots"></span></div>
  </div>

  <div class="result-card" id="resultCard">
    <div class="result-header">
      <span class="result-title">📊 نتیجه خلاصه‌سازی</span>
      <button class="copy-all" onclick="copyAll()">📋 کپی همه</button>
    </div>
    <div class="stats">
      <div class="stat">
        <div class="stat-val" id="origWords">0</div>
        <div class="stat-lbl">کلمات اصلی</div>
      </div>
      <div class="stat">
        <div class="stat-val" id="sumWords">0</div>
        <div class="stat-lbl">کلمات خلاصه</div>
      </div>
      <div class="stat">
        <div class="stat-val" id="ratio">0%</div>
        <div class="stat-lbl">نسبت فشرده‌سازی</div>
      </div>
    </div>
    <div id="summaryContent"></div>
  </div>
</div>

<script>
async function summarize() {
  const apiKey = document.getElementById('apiKey').value.trim();
  const text = document.getElementById('inputText').value.trim();
  const length = document.getElementById('length').value;
  const style = document.getElementById('style').value;
  const outLang = document.getElementById('outLang').value;
  const focus = document.getElementById('focus').value;

  if (!apiKey) return alert('API Key را وارد کنید!');
  if (!text || text.length < 50) return alert('لطفاً متن کافی وارد کنید (حداقل 50 کاراکتر)!');

  const lengthMap = { very_short: '1-2 sentences', short: '1 paragraph', medium: '2-3 paragraphs', long: 'comprehensive' };
  const focusMap = { general: 'general overview', facts: 'facts and data', conclusions: 'conclusions and insights', action: 'action items and recommendations' };
  const langInstr = outLang === 'same' ? 'Use the same language as the input text' : \`Write the summary in \${outLang}\`;

  const styleInstr = style === 'bullets'
    ? 'Format as bullet points only.'
    : style === 'both'
    ? 'First write a paragraph summary, then list 5 key bullet points.'
    : 'Format as paragraphs.';

  const btn = document.getElementById('sumBtn');
  const loader = document.getElementById('loader');
  const resultCard = document.getElementById('resultCard');

  btn.disabled = true;
  loader.style.display = 'block';
  resultCard.style.display = 'none';

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gemma2-9b-it',
        messages: [{
          role: 'system',
          content: \`You are an expert text summarizer. \${langInstr}. Focus on \${focusMap[focus]}. Length: \${lengthMap[length]}. \${styleInstr} Be accurate and concise.\`
        }, {
          role: 'user',
          content: \`Please summarize the following text:\\n\\n\${text}\`
        }],
        temperature: 0.4,
        stream: true
      })
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    loader.style.display = 'none';
    resultCard.style.display = 'block';

    const origWords = text.split(/\\s+/).length;
    document.getElementById('origWords').textContent = origWords;

    const content = document.getElementById('summaryContent');
    content.innerHTML = '<div class="summary-text" id="liveText"></div>';
    const liveText = document.getElementById('liveText');

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      const lines = chunk.split('\\n').filter(l => l.startsWith('data: ') && !l.includes('[DONE]'));
      for (const line of lines) {
        try {
          const data = JSON.parse(line.slice(6));
          const token = data.choices[0]?.delta?.content || '';
          result += token;
          liveText.textContent = result;
        } catch {}
      }
    }

    const sumWords = result.split(/\\s+/).length;
    document.getElementById('sumWords').textContent = sumWords;
    document.getElementById('ratio').textContent = Math.round((1 - sumWords/origWords)*100) + '%';

  } catch (e) {
    loader.style.display = 'none';
    alert('خطا: ' + e.message);
  } finally {
    btn.disabled = false;
    btn.textContent = '✨ خلاصه کن';
  }
}

function copyAll() {
  const text = document.getElementById('summaryContent').textContent;
  navigator.clipboard.writeText(text);
  document.querySelector('.copy-all').textContent = '✅ کپی شد!';
  setTimeout(() => document.querySelector('.copy-all').textContent = '📋 کپی همه', 2000);
}
<\/script>


`,className:"w-html-embed"})})}),P=o=>{const{origin:t,pathname:s,search:a}=new URL(o);return`${t}${s}${a}`},S=l.memo(({pageKey:o,system:t})=>e.jsx(z,{system:t},o),(o,t)=>o.pageKey===t.pageKey),k=({data:o})=>{const{system:t,resources:s,url:a,pageMeta:i}=o,c=P(a),p=l.useMemo(()=>({imageLoader:r,assetBaseUrl:n,resources:s,breakpoints:b,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:a,children:e.jsx(S,{pageKey:c,system:t})}),e.jsx(g,{url:a,pageMeta:i,siteName:d,imageLoader:r,assetBaseUrl:n}),e.jsx(y,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),j=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${n}${h}`})}),f.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),_={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-47/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-47/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{_ as configValuesSerialized};
