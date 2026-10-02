import{j as e,r as l,a as o,i as r,R as u,b as g,P as m,c as b,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>مصاحبه شغلی با AI</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background: radial-gradient(ellipse at center, #1a0a2e 0%, #0a0a0a 70%);
    min-height: 100vh;
    color: #e0e0e0;
    padding: 20px;
  }
  .container { max-width: 800px; margin: 0 auto; }
  h1 {
    text-align: center;
    font-size: 2rem;
    color: #a78bfa;
    text-shadow: 0 0 20px rgba(167,139,250,0.5);
    margin-bottom: 5px;
  }
  .sub { text-align: center; color: #555; font-size: 0.8rem; margin-bottom: 25px; }
  .setup-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid #2a1a4a;
    border-radius: 16px;
    padding: 25px;
    margin-bottom: 20px;
  }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
  .form-group { display: flex; flex-direction: column; gap: 8px; }
  .form-group.full { grid-column: 1 / -1; }
  label { color: #a78bfa; font-size: 0.85rem; }
  input, select, textarea {
    background: rgba(167,139,250,0.05);
    border: 1px solid #3a2a5a;
    border-radius: 8px;
    color: #e0e0e0;
    padding: 10px 14px;
    font-size: 0.9rem;
    outline: none;
    font-family: inherit;
    transition: border 0.3s;
  }
  input:focus, select:focus, textarea:focus { border-color: #a78bfa; }
  textarea { height: 80px; resize: none; }
  .start-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #a78bfa, #7c3aed);
    border: none;
    border-radius: 12px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.3s;
  }
  .start-btn:hover { box-shadow: 0 5px 25px rgba(124,58,237,0.5); transform: translateY(-2px); }
  .interview-area { display: none; }
  .interviewer-msg {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    align-items: flex-start;
  }
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    flex-shrink: 0;
  }
  .ai-avatar { background: linear-gradient(135deg, #7c3aed, #a78bfa); }
  .user-avatar { background: linear-gradient(135deg, #059669, #34d399); }
  .msg-bubble {
    background: rgba(255,255,255,0.05);
    border: 1px solid #2a1a4a;
    border-radius: 12px;
    padding: 15px;
    line-height: 1.7;
    flex: 1;
  }
  .user-msg { flex-direction: row-reverse; }
  .user-msg .msg-bubble { background: rgba(5,150,105,0.1); border-color: #065f46; text-align: right; }
  .answer-area {
    background: rgba(255,255,255,0.03);
    border: 1px solid #2a1a4a;
    border-radius: 16px;
    padding: 20px;
    margin-top: 15px;
  }
  .answer-area textarea {
    width: 100%;
    height: 120px;
    margin-bottom: 12px;
  }
  .answer-btns { display: flex; gap: 10px; }
  .submit-btn {
    flex: 1;
    padding: 12px;
    background: linear-gradient(135deg, #a78bfa, #7c3aed);
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
  }
  .submit-btn:hover { opacity: 0.9; }
  .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .skip-btn {
    padding: 12px 20px;
    background: transparent;
    border: 1px solid #3a2a5a;
    border-radius: 10px;
    color: #888;
    cursor: pointer;
    transition: all 0.3s;
  }
  .skip-btn:hover { border-color: #a78bfa; color: #a78bfa; }
  .progress-bar {
    background: #1a1a1a;
    border-radius: 10px;
    height: 6px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #a78bfa);
    transition: width 0.5s;
  }
  .score-card {
    background: rgba(167,139,250,0.05);
    border: 2px solid #a78bfa;
    border-radius: 16px;
    padding: 30px;
    text-align: center;
    display: none;
  }
  .final-score {
    font-size: 4rem;
    font-weight: bold;
    color: #a78bfa;
    text-shadow: 0 0 30px rgba(167,139,250,0.7);
  }
  .feedback-text { line-height: 1.7; color: #ccc; margin-top: 20px; text-align: right; }
  .q-counter { text-align: center; color: #666; font-size: 0.85rem; margin-bottom: 15px; }
  .thinking { color: #666; font-style: italic; animation: pulse 1s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
</style>


<div class="container">
  <h1>🎯 مصاحبه شغلی با AI</h1>
  <div class="sub">powered by llama-3.1-8b-instant | Groq API</div>

  <div class="setup-card" id="setupCard">
    <div class="form-grid">
      <div class="form-group">
        <label>🔑 API Key</label>
        <input type="password" id="apiKey" placeholder="gsk_...">
      </div>
      <div class="form-group">
        <label>💼 موقعیت شغلی</label>
        <input type="text" id="position" placeholder="مثلاً: توسعه‌دهنده بک‌اند">
      </div>
      <div class="form-group">
        <label>🏢 حوزه شغلی</label>
        <select id="field">
          <option value="Software Engineering">مهندسی نرم‌افزار</option>
          <option value="Data Science">علم داده</option>
          <option value="UI/UX Design">طراحی UI/UX</option>
          <option value="Product Management">مدیریت محصول</option>
          <option value="Marketing">بازاریابی</option>
          <option value="Finance">مالی و حسابداری</option>
          <option value="Human Resources">منابع انسانی</option>
          <option value="Sales">فروش</option>
        </select>
      </div>
      <div class="form-group">
        <label>📊 سطح تجربه</label>
        <select id="level">
          <option value="junior">جونیور (0-2 سال)</option>
          <option value="mid">میانی (2-5 سال)</option>
          <option value="senior">سینیور (5+ سال)</option>
          <option value="manager">مدیریتی</option>
        </select>
      </div>
      <div class="form-group">
        <label>❓ تعداد سوالات</label>
        <select id="qCount">
          <option value="3">۳ سوال (سریع)</option>
          <option value="5" selected="">۵ سوال (معمولی)</option>
          <option value="8">۸ سوال (کامل)</option>
        </select>
      </div>
      <div class="form-group">
        <label>🌐 زبان مصاحبه</label>
        <select id="lang">
          <option value="Persian">فارسی</option>
          <option value="English">انگلیسی</option>
        </select>
      </div>
      <div class="form-group full">
        <label>📋 خلاصه رزومه یا مهارت‌ها (اختیاری)</label>
        <textarea id="resume" placeholder="مهارت‌ها، تجربیات یا اطلاعاتی که مصاحبه‌گر باید بداند..."></textarea>
      </div>
    </div>
    <button class="start-btn" onclick="startInterview()">🚀 شروع مصاحبه</button>
  </div>

  <div class="interview-area" id="interviewArea">
    <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
    <div class="q-counter" id="qCounter">سوال ۱ از ۵</div>
    <div id="conversation"></div>
    <div class="answer-area" id="answerArea">
      <textarea id="userAnswer" placeholder="پاسخ خود را اینجا بنویسید..."></textarea>
      <div class="answer-btns">
        <button class="submit-btn" id="submitBtn" onclick="submitAnswer()">✅ ارسال پاسخ</button>
        <button class="skip-btn" onclick="skipQuestion()">⏭ رد کن</button>
      </div>
    </div>
  </div>

  <div class="score-card" id="scoreCard">
    <div>🎉 مصاحبه پایان یافت!</div>
    <div class="final-score" id="finalScore">--</div>
    <div style="color:#888;font-size:0.9rem;">امتیاز از ۱۰۰</div>
    <div class="feedback-text" id="finalFeedback"></div>
    <button class="start-btn" onclick="restart()" style="margin-top:20px;">🔄 مصاحبه جدید</button>
  </div>
</div>

<script>
let state = {
  questions: [],
  answers: [],
  currentQ: 0,
  totalQ: 5,
  config: {}
};

function addMessage(text, isAI) {
  const conv = document.getElementById('conversation');
  const div = document.createElement('div');
  div.className = \`interviewer-msg \${isAI ? '' : 'user-msg'}\`;
  div.innerHTML = \`
    <div class="avatar \${isAI ? 'ai-avatar' : 'user-avatar'}">\${isAI ? '🤖' : '👤'}</div>
    <div class="msg-bubble">\${text}</div>
  \`;
  conv.appendChild(div);
  div.scrollIntoView({ behavior: 'smooth' });
  return div.querySelector('.msg-bubble');
}

async function startInterview() {
  const apiKey = document.getElementById('apiKey').value.trim();
  const position = document.getElementById('position').value.trim();

  if (!apiKey) return alert('API Key را وارد کنید!');
  if (!position) return alert('موقعیت شغلی را وارد کنید!');

  state.config = {
    apiKey,
    position,
    field: document.getElementById('field').value,
    level: document.getElementById('level').value,
    lang: document.getElementById('lang').value,
    resume: document.getElementById('resume').value
  };
  state.totalQ = parseInt(document.getElementById('qCount').value);
  state.currentQ = 0;
  state.questions = [];
  state.answers = [];

  document.getElementById('setupCard').style.display = 'none';
  document.getElementById('interviewArea').style.display = 'block';
  document.getElementById('qCounter').textContent = \`سوال ۱ از \${state.totalQ}\`;

  const bubble = addMessage('<span class="thinking">در حال آماده‌سازی سوالات...</span>', true);
  
  try {
    const prompt = \`You are a professional \${state.config.field} interviewer. 
Generate exactly \${state.totalQ} interview questions for a \${state.config.level} \${state.config.position} position.
\${state.config.resume ? \`Candidate background: \${state.config.resume}\` : ''}
Return ONLY a JSON array of questions, nothing else. Example: ["Q1?","Q2?",...]
Write questions in \${state.config.lang}.
Mix technical and behavioral questions appropriately.\`;

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${apiKey}\`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      })
    });
    const data = await res.json();
    const content = data.choices[0].message.content;
    const match = content.match(/\\[[\\s\\S]*\\]/);
    state.questions = JSON.parse(match[0]);

    bubble.innerHTML = \`سلام! من امروز مصاحبه‌گر شما برای موقعیت <strong>\${state.config.position}</strong> هستم. آماده‌اید شروع کنیم؟ 🤝\`;
    setTimeout(() => askQuestion(), 1000);
  } catch (e) {
    bubble.textContent = 'خطا: ' + e.message;
  }
}

function askQuestion() {
  if (state.currentQ >= state.questions.length) return endInterview();

  const pct = (state.currentQ / state.totalQ) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('qCounter').textContent = \`سوال \${state.currentQ + 1} از \${state.totalQ}\`;

  addMessage(\`<strong>سوال \${state.currentQ + 1}:</strong> \${state.questions[state.currentQ]}\`, true);
  document.getElementById('userAnswer').value = '';
  document.getElementById('userAnswer').focus();
}

async function submitAnswer() {
  const answer = document.getElementById('userAnswer').value.trim();
  if (!answer) return alert('لطفاً پاسخ دهید!');

  state.answers.push({ q: state.questions[state.currentQ], a: answer });
  addMessage(answer, false);
  state.currentQ++;

  if (state.currentQ < state.totalQ) {
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    const bubble = addMessage('<span class="thinking">در حال ارزیابی...</span>', true);
    
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': \`Bearer \${state.config.apiKey}\`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [{ role: 'user', content: \`As an interviewer, give a brief (1-2 sentence) encouraging response to this answer for question "\${state.questions[state.currentQ-1]}". Answer: "\${answer}". Write in \${state.config.lang}. Be professional and constructive.\` }],
          temperature: 0.6
        })
      });
      const data = await res.json();
      bubble.innerHTML = data.choices[0].message.content;
    } catch {}

    btn.disabled = false;
    setTimeout(askQuestion, 500);
  } else {
    endInterview();
  }
}

function skipQuestion() {
  state.answers.push({ q: state.questions[state.currentQ], a: '[رد شده]' });
  state.currentQ++;
  if (state.currentQ >= state.totalQ) endInterview();
  else askQuestion();
}

async function endInterview() {
  document.getElementById('progressFill').style.width = '100%';
  document.getElementById('answerArea').style.display = 'none';
  addMessage('مصاحبه تمام شد! در حال ارزیابی نهایی...', true);

  const qaPairs = state.answers.map((a, i) => \`Q\${i+1}: \${a.q}\\nA: \${a.a}\`).join('\\n\\n');

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${state.config.apiKey}\`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: \`Evaluate this \${state.config.level} \${state.config.position} interview. Give a score out of 100 and detailed feedback. Return JSON: {"score": number, "feedback": "string"}. Write feedback in \${state.config.lang}.\\n\\n\${qaPairs}\` }],
        temperature: 0.5
      })
    });
    const data = await res.json();
    const content = data.choices[0].message.content;
    const match = content.match(/\\{[\\s\\S]*\\}/);
    const result = JSON.parse(match[0]);

    document.getElementById('interviewArea').style.display = 'none';
    document.getElementById('scoreCard').style.display = 'block';
    document.getElementById('finalScore').textContent = result.score;
    document.getElementById('finalFeedback').textContent = result.feedback;
  } catch (e) {
    alert('خطا در ارزیابی: ' + e.message);
  }
}

function restart() {
  document.getElementById('scoreCard').style.display = 'none';
  document.getElementById('setupCard').style.display = 'block';
  document.getElementById('conversation').innerHTML = '';
  document.getElementById('answerArea').style.display = 'block';
  document.getElementById('progressFill').style.width = '0%';
}
<\/script>


`,className:"w-html-embed"})})}),I=a=>{const{origin:t,pathname:s,search:n}=new URL(a);return`${t}${s}${n}`},S=l.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),E=({data:a})=>{const{system:t,resources:s,url:n,pageMeta:i}=a,c=I(n),p=l.useMemo(()=>({imageLoader:r,assetBaseUrl:o,resources:s,breakpoints:v,onError:console.error}),[s]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(g.Provider,{value:n,children:e.jsx(S,{pageKey:c,system:t})}),e.jsx(m,{url:n,pageMeta:i,siteName:d,imageLoader:r,assetBaseUrl:o}),e.jsx(b,{children:i.title})]})},A=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),B=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${o}${h}`})}),x.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},$=Object.freeze(Object.defineProperty({__proto__:null,Head:B},Symbol.toStringTag,{value:"Module"})),q={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-48/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-48/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:$}}};export{q as configValuesSerialized};
