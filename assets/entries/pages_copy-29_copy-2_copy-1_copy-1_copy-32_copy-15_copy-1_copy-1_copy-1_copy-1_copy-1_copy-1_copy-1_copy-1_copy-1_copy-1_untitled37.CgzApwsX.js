import{j as e,r as l,a as r,i as s,R as m,b as g,P as u,c as f,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=t=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>گروک سایبر ۲۰۲۶ – هوش مصنوعی فوق‌سریع</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <style>
    :root {
      --neon1: #00f0ff; --neon2: #ff00ff; --neon3: #39ff14; --neon4: #9d00ff;
      --glass: rgba(10, 10, 35, 0.35);
      --glow: 0 0 25px;
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: 'Tahoma', system-ui, sans-serif;
      background: #05000f;
      color: #e0ffff;
      min-height: 100vh;
      overflow-x: hidden;
      background: linear-gradient(135deg, #0a001f, #1a002f, #001122);
      animation: bgPulse 25s infinite;
    }
    @keyframes bgPulse { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    body::before {
      content: ""; position: fixed; inset: 0;
      background: repeating-linear-gradient(transparent 0px, rgba(255,255,255,0.03) 1px, transparent 3px);
      pointer-events: none; animation: scanline 6s linear infinite;
      z-index: 9999; opacity: 0.4;
    }
    @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(300%); } }

    header {
      text-align: center; padding: 2.5rem 1rem 1.5rem;
      text-shadow: var(--glow) var(--neon1);
    }
    h1 {
      font-size: 3.6rem; font-weight: 900;
      background: linear-gradient(90deg, var(--neon1), var(--neon2), var(--neon3), var(--neon4));
      background-size: 400%; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      animation: rainbow 12s linear infinite;
    }
    @keyframes rainbow { 0% { background-position: 0%; } 100% { background-position: 400%; } }

    .toolbar {
      display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; padding: 1rem; background: rgba(0,0,0,0.4);
    }
    .btn {
      background: linear-gradient(45deg, var(--neon1), var(--neon2));
      color: #000; font-weight: bold; padding: 0.9rem 1.8rem; border-radius: 50px;
      border: none; cursor: pointer; transition: all 0.3s; box-shadow: var(--glow) var(--neon1);
      display: flex; align-items: center; gap: 8px;
    }
    .btn:hover { transform: scale(1.1); box-shadow: 0 0 40px var(--neon2); }

    .chat-container {
      max-width: 1150px; margin: 0 auto 1rem; height: 78vh;
      background: var(--glass); border-radius: 2rem;
      border: 2px solid rgba(0,240,255,0.3); backdrop-filter: blur(20px);
      box-shadow: 0 30px 80px rgba(0,0,0,0.8), inset 0 0 60px rgba(0,240,255,0.1);
      display: flex; flex-direction: column; overflow: hidden;
    }
    .messages {
      flex: 1; padding: 2rem; overflow-y: auto; scroll-behavior: smooth;
    }
    .message {
      margin: 1.5rem 0; padding: 1.5rem 1.8rem; border-radius: 1.6rem;
      max-width: 85%; line-height: 1.7; position: relative;
      box-shadow: 0 10px 30px rgba(0,0,0,0.6);
      transition: all 0.4s;
    }
    .user { background: linear-gradient(135deg, #6e00ff, #00d4ff); margin-left: auto; color: white; }
    .ai   { background: linear-gradient(135deg, rgba(0,240,255,0.18), rgba(57,255,20,0.15)); border: 1px solid var(--neon3); }
    .message:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,240,255,0.4); }

    .message-actions {
      margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;
    }
    .action-btn {
      background: rgba(0,0,0,0.5); border: none; color: #fff; padding: 6px 14px;
      border-radius: 30px; font-size: 0.9rem; cursor: pointer; transition: 0.3s;
    }
    .action-btn:hover { background: rgba(0,240,255,0.4); }

    .input-area {
      padding: 1.6rem; background: rgba(5,5,25,0.7); display: flex; align-items: end; gap: 1rem;
      border-top: 1px solid rgba(0,240,255,0.25);
    }
    textarea {
      flex: 1; padding: 1.4rem; border-radius: 1.6rem; border: 2px solid rgba(0,240,255,0.4);
      background: rgba(255,255,255,0.05); color: white; font-size: 1.1rem; resize: vertical; min-height: 68px;
    }
    textarea:focus { border-color: var(--neon1); box-shadow: 0 0 30px var(--neon1); outline: none; }

    .upload-preview {
      max-height: 80px; border-radius: 12px; border: 2px solid var(--neon1); margin-top: 8px;
    }
    .quick-replies {
      display: flex; flex-wrap: wrap; gap: 12px; padding: 1rem 2rem; justify-content: center; background: rgba(0,0,0,0.3);
    }
    .quick-btn {
      background: rgba(57,255,20,0.15); border: 1px solid var(--neon3); color: white;
      padding: 10px 22px; border-radius: 50px; cursor: pointer; transition: 0.3s;
    }
    .quick-btn:hover { background: var(--neon3); color: #000; transform: scale(1.08); }
  </style>



<header>
  <h1>گروک سایبر ۲۰۲۶</h1>
  <p style="font-size:1.3rem;opacity:0.9;">سریع‌ترین هوش مصنوعی دنیا با قدرت vision</p>
</header>

<div class="toolbar">
  <button class="btn" id="newChat"><i class="fas fa-plus"></i> چت جدید</button>
  <button class="btn" id="clearChat"><i class="fas fa-trash"></i> پاک کردن</button>
  <button class="btn" id="exportChat"><i class="fas fa-download"></i> اکسپورت چت</button>
  
  <select id="modelSelect" style="padding:0.9rem 1.2rem;border-radius:50px;background:rgba(0,0,0,0.6);color:white;border:1px solid #00f0ff;">
    <option value="llama-3.3-70b-versatile">Llama 3.3 70B (متن – قوی)</option>
    <option value="meta-llama/llama-4-maverick-17b-128e-instruct">Llama 4 Maverick (ویژن – پیشرفته)</option>
    <option value="meta-llama/llama-4-scout-17b-16e-instruct">Llama 4 Scout (ویژن – سریع)</option>
  </select>
</div>

<div class="chat-container">
  <div class="messages" id="messages"></div>

  <div class="quick-replies" id="quickReplies"></div>

  <div class="input-area">
    <textarea id="prompt" placeholder="هر چی تو ذهنته بنویس... متن، کد، داستان، سوال یا تصویر آپلود کن"></textarea>
    
    <label class="btn" style="padding:1.1rem 1.4rem;cursor:pointer;">
      <i class="fas fa-image"></i>
      <input type="file" id="imageUpload" accept="image/*" style="display:none;">
    </label>
    
    <button class="btn" id="sendBtn"><i class="fas fa-rocket"></i> ارسال</button>
  </div>
</div>

<div id="imagePreview" style="text-align:center;margin:10px 0;display:none;">
  <img id="previewImg" class="upload-preview">
  <button onclick="removeImage()" style="background:#ff0066;color:white;border:none;padding:6px 16px;border-radius:30px;margin-top:8px;">حذف تصویر</button>
</div>

<script>
  const API_KEY = "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";
  const API_URL = "https://api.groq.com/openai/v1/chat/completions";

  let currentImage = null;
  let chatHistory = JSON.parse(localStorage.getItem("cyberChat")) || [];

  const messagesDiv = document.getElementById("messages");
  const promptInput = document.getElementById("prompt");
  const sendBtn = document.getElementById("sendBtn");
  const modelSelect = document.getElementById("modelSelect");
  const imageUpload = document.getElementById("imageUpload");
  const previewDiv = document.getElementById("imagePreview");
  const previewImg = document.getElementById("previewImg");

  function addMessage(text, isUser = false, imageSrc = null) {
    const msg = document.createElement("div");
    msg.className = \`message \${isUser ? 'user' : 'ai'}\`;
    
    let html = text.replace(/\\n/g, "<br>")
                   .replace(/\`\`\`([\\s\\S]*?)\`\`\`/gs, "<pre><code>$1</code></pre>")
                   .replace(/\`([^\`]+)\`/g, "<code>$1</code>");
    
    if (imageSrc) html += \`<br><img src="\${imageSrc}" style="max-width:280px;border-radius:12px;margin-top:10px;">\`;
    
    msg.innerHTML = html;

    if (!isUser) {
      const actions = document.createElement("div");
      actions.className = "message-actions";
      actions.innerHTML = \`
        <button class="action-btn" onclick="copyMsg(this)"><i class="fas fa-copy"></i> کپی</button>
        <button class="action-btn" onclick="regenerate(this)"><i class="fas fa-redo"></i> دوباره</button>
        <button class="action-btn"><i class="fas fa-thumbs-up"></i></button>
        <button class="action-btn"><i class="fas fa-thumbs-down"></i></button>
      \`;
      msg.appendChild(actions);
    }
    messagesDiv.appendChild(msg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  function copyMsg(el) {
    const text = el.parentElement.parentElement.textContent.replace(/کپی|دوباره|👍|👎/g, "").trim();
    navigator.clipboard.writeText(text);
    el.innerHTML = '<i class="fas fa-check"></i> کپی شد!';
    setTimeout(() => el.innerHTML = '<i class="fas fa-copy"></i> کپی', 2000);
  }

  function regenerate() {
    const lastUser = Array.from(messagesDiv.children).reverse().find(m => m.classList.contains('user'));
    if (lastUser) {
      promptInput.value = lastUser.textContent.trim();
      sendRequest();
    }
  }

  function saveHistory() {
    localStorage.setItem("cyberChat", JSON.stringify(chatHistory));
  }

  async function sendRequest() {
    const text = promptInput.value.trim();
    if (!text && !currentImage) return;

    addMessage(text || "تصویر آپلود شد", true, currentImage);
    chatHistory.push({role: "user", content: text || "تحلیل تصویر", image: currentImage});

    promptInput.value = "";
    sendBtn.disabled = true;
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال فکر...';

    const isVisionModel = modelSelect.value.includes("llama-4");
    let messagesPayload = [
      { role: "system", content: "تو یک دستیار فوق‌العاده باهوش، سریع و جذاب فارسی‌زبان هستی. همیشه به فارسی جواب بده و پاسخ‌هات رو مرتب و جذاب نگه دار." }
    ];

    if (currentImage) {
      messagesPayload.push({
        role: "user",
        content: [
          { type: "text", text: text || "این تصویر رو دقیق تحلیل کن و هر سوالی در موردش هست جواب بده." },
          { type: "image_url", image_url: { url: currentImage } }
        ]
      });
    } else {
      messagesPayload.push({ role: "user", content: text });
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": \`Bearer \${API_KEY}\`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: modelSelect.value,
          messages: messagesPayload,
          temperature: 0.8,
          max_tokens: isVisionModel ? 2048 : 4096
        })
      });

      if (!res.ok) throw new Error("خطا در اتصال به گروک");

      const data = await res.json();
      const reply = data.choices[0].message.content;
      addMessage(reply);
      chatHistory.push({role: "assistant", content: reply});
      saveHistory();
    } catch (err) {
      addMessage("خطا: " + err.message + "\\n(اگر مدل ویژن انتخاب کردی، مطمئن شو تصویر آپلود شده)");
    } finally {
      sendBtn.disabled = false;
      sendBtn.innerHTML = '<i class="fas fa-rocket"></i> ارسال';
      removeImage();
    }
  }

  imageUpload.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      currentImage = ev.target.result;
      previewImg.src = currentImage;
      previewDiv.style.display = "block";
    };
    reader.readAsDataURL(file);
  });

  function removeImage() {
    currentImage = null;
    previewDiv.style.display = "none";
  }

  // دکمه‌ها
  document.getElementById("sendBtn").onclick = sendRequest;
  document.getElementById("newChat").onclick = () => { messagesDiv.innerHTML = ""; chatHistory = []; saveHistory(); showQuickReplies(); };
  document.getElementById("clearChat").onclick = () => { if(confirm("همه چت پاک بشه؟")) { messagesDiv.innerHTML = ""; chatHistory = []; saveHistory(); } };
  document.getElementById("exportChat").onclick = () => {
    const txt = chatHistory.map(m => (m.role === "user" ? "👤 تو: " : "🤖 گروک: ") + m.content).join("\\n\\n");
    const blob = new Blob([txt], {type: "text/plain"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "چت_گروک_سایبر.txt";
    a.click();
  };

  function showQuickReplies() {
    const suggestions = ["یه جوک خفن بگو", "درباره آینده هوش مصنوعی ۲۰۲۶ توضیح بده", "یه کد پایتون برای تحلیل تصویر بنویس", "نظرتو درباره کریپتو بگو"];
    document.getElementById("quickReplies").innerHTML = suggestions.map(s => 
      \`<button class="quick-btn" onclick="promptInput.value='\${s}'; sendRequest();">\${s}</button>\`
    ).join('');
  }

  // شروع
  if (chatHistory.length === 0) {
    addMessage("سلام runner! من آنلاینم 🔥\\nچی می‌خوای بسازی، تحلیل کنی یا حرف بزنی؟", false);
    showQuickReplies();
  } else {
    chatHistory.forEach(m => addMessage(m.content, m.role === "user", m.image));
  }

  // Enter
  promptInput.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendRequest(); }
  });
<\/script>

`,className:"w-html-embed"})})}),I=t=>{const{origin:n,pathname:o,search:a}=new URL(t);return`${n}${o}${a}`},S=l.memo(({pageKey:t,system:n})=>e.jsx(k,{system:n},t),(t,n)=>t.pageKey===n.pageKey),P=({data:t})=>{const{system:n,resources:o,url:a,pageMeta:i}=t,d=I(a),p=l.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:o,breakpoints:x,onError:console.error}),[o]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:a,children:e.jsx(S,{pageKey:d,system:n})}),e.jsx(u,{url:a,pageMeta:i,siteName:c,imageLoader:s,assetBaseUrl:r}),e.jsx(f,{children:i.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),E=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${h}`})}),v.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"font",crossOrigin:"anonymous"},n)),w.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"image"},n))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-29/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-29/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{B as configValuesSerialized};
