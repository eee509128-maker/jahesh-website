import{j as e,r as d,a as r,i as s,R as u,b as m,P as f,c as x,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as g}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],T=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],v=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(g,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تبدیل صدا به متن</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 700px;
      margin: 30px auto;
      padding: 20px;
      background: #1a1a2e;
      min-height: 100vh;
    }
    h1 { color: #eee; text-align: center; margin-bottom: 30px; }
    .container { 
      background: #16213e; 
      padding: 30px; 
      border-radius: 16px; 
      border: 1px solid #0f3460;
    }
    p { color: #aaa; margin-bottom: 20px; }
    input[type="file"] { 
      width: 100%;
      padding: 15px;
      background: #0f3460;
      border: 2px dashed #e94560;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      margin-bottom: 20px;
    }
    input[type="file"]::file-selector-button {
      background: #e94560;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      margin-left: 10px;
    }
    button {
      background: linear-gradient(135deg, #e94560, #0f3460);
      color: white;
      border: none;
      padding: 16px 40px;
      font-size: 18px;
      border-radius: 10px;
      cursor: pointer;
      width: 100%;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    button:hover { 
      transform: translateY(-2px); 
      box-shadow: 0 5px 20px rgba(233, 69, 96, 0.4);
    }
    button:disabled { 
      background: #555; 
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    #status {
      margin: 20px 0;
      font-weight: bold;
      color: #e94560;
      text-align: center;
    }
    #result {
      width: 100%;
      height: 250px;
      padding: 18px;
      font-size: 17px;
      border: 1px solid #0f3460;
      border-radius: 10px;
      resize: vertical;
      background: #0d1b2a;
      color: #fff;
      font-family: inherit;
      line-height: 1.8;
    }
    #result::placeholder { color: #666; }
    .success { color: #4ecca3 !important; }
    .error { color: #ff6b6b !important; }
  </style>


  <div class="container">
    <h1>تبدیل فایل صوتی به متن فارسی</h1>
    <p>فایل صوتی خود را انتخاب کنید (mp3, wav, m4a, ogg)</p>
    
    <input type="file" id="audioFile" accept="audio/*">
    <button id="btn">شروع تبدیل</button>
    <div id="status">آماده</div>
    <textarea id="result" placeholder="متن اینجا ظاهر می‌شود..." readonly=""></textarea>
  </div>

  <script>
    const STATUS = document.getElementById('status');
    const RESULT = document.getElementById('result');
    const BTN = document.getElementById('btn');
    const FILE_INPUT = document.getElementById('audioFile');

    const API_KEY = "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";

    BTN.addEventListener('click', async () => {
      const file = FILE_INPUT.files[0];
      
      if (!file) {
        STATUS.textContent = "ابتدا یک فایل انتخاب کنید";
        STATUS.className = "error";
        return;
      }

      if (file.size > 25 * 1024 * 1024) {
        STATUS.textContent = "فایل نباید بزرگتر از ۲۵ مگابایت باشد";
        STATUS.className = "error";
        return;
      }

      BTN.disabled = true;
      STATUS.textContent = "در حال پردازش...";
      STATUS.className = "";
      RESULT.value = "";

      const formData = new FormData();
      formData.append("file", file);
      formData.append("model", "whisper-large-v3");
      formData.append("response_format", "text");
      formData.append("language", "fa");

      try {
        const response = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
          method: "POST",
          headers: { "Authorization": \`Bearer \${API_KEY}\` },
          body: formData
        });

        const text = await response.text();

        if (response.ok) {
          RESULT.value = text.trim() || "متن خالی بود";
          STATUS.textContent = "با موفقیت تبدیل شد";
          STATUS.className = "success";
        } else {
          throw new Error(text);
        }
      } catch (err) {
        STATUS.textContent = "خطا - احتمالا مشکل CORS است";
        STATUS.className = "error";
        RESULT.value = "مرورگر اجازه درخواست مستقیم نمی‌دهد.\\n\\nراه‌حل:\\n۱. کد را روی localhost اجرا کنید\\n۲. یا از اسکریپت پایتون استفاده کنید\\n\\nخطا: " + err.message;
      } finally {
        BTN.disabled = false;
      }
    });
  <\/script>


`,className:"w-html-embed"})})}),w=o=>{const{origin:t,pathname:n,search:a}=new URL(o);return`${t}${n}${a}`},P=d.memo(({pageKey:o,system:t})=>e.jsx(v,{system:t},o),(o,t)=>o.pageKey===t.pageKey),U=({data:o})=>{const{system:t,resources:n,url:a,pageMeta:i}=o,p=w(a),c=d.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:n,breakpoints:h,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:a,children:e.jsx(P,{pageKey:p,system:t})}),e.jsx(f,{url:a,pageMeta:i,siteName:l,imageLoader:s,assetBaseUrl:r}),e.jsx(x,{children:i.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),z=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${b}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),T.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),N={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-23/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-23/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{N as configValuesSerialized};
