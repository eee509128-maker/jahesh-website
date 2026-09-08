import{j as e,r as l,a,i,R as u,b as m,P as f,c as g,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],T="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],v=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تبدیل صدا به متن با Groq Whisper</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 800px;
      margin: 30px auto;
      padding: 20px;
      background: #f8f9fa;
      line-height: 1.6;
    }
    h1 { color: #1a1a1a; text-align: center; }
    .container { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    input[type="file"] { margin: 20px 0; }
    button {
      background: #0066ff;
      color: white;
      border: none;
      padding: 14px 32px;
      font-size: 18px;
      border-radius: 8px;
      cursor: pointer;
      margin: 15px 0;
    }
    button:hover { background: #0055dd; }
    button:disabled { background: #aaa; cursor: not-allowed; }
    #status {
      min-height: 1.5em;
      margin: 10px 0;
      font-weight: bold;
      color: #444;
    }
    #result {
      width: 100%;
      height: 220px;
      padding: 16px;
      font-size: 17px;
      border: 1px solid #ccc;
      border-radius: 8px;
      resize: vertical;
      background: #fdfdfd;
    }
    .info { font-size: 0.9em; color: #666; margin-top: 20px; }
    .warning { 
      background: #fff3cd; 
      border: 1px solid #ffeeba; 
      color: #856404; 
      padding: 15px; 
      border-radius: 8px; 
      margin: 15px 0; 
    }
  </style>



  <div class="container">
    <h1>تبدیل فایل صوتی به متن (فارسی)</h1>
    
    <div class="warning">
      ⚠️ <strong>نکات مهم:</strong>
      <ul>
        <li>برای تست محلی (فایل HTML روی کامپیوتر خودتان)</li>
        <li>کلید API در کد است - پس از تست، کلید را عوض کنید</li>
        <li>فایل‌های کمتر از ۲۵ مگابایت</li>
      </ul>
    </div>
    
    <input type="file" id="audioFile" accept="audio/*">
    
    <button id="btn" onclick="startTranscription()">شروع تبدیل به متن</button>
    
    <div id="status">وضعیت: آماده</div>
    
    <textarea id="result" placeholder="متن تبدیل‌شده اینجا ظاهر می‌شود..."></textarea>
    
    <div class="info">
      استفاده از مدل whisper-large-v3 روی Groq • اگر مشکل داشت از سرور لوکال استفاده کنید
    </div>
  </div>

  <script>
    const STATUS = document.getElementById('status');
    const RESULT = document.getElementById('result');
    const BTN = document.getElementById('btn');

    // ⚠️ کلید خودت را اینجا بگذار (فقط تست محلی!)
    const GROQ_API_KEY = "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";  
    
    async function startTranscription() {
      const fileInput = document.getElementById('audioFile');
      if (!fileInput.files || fileInput.files.length === 0) {
        alert("لطفاً یک فایل صوتی انتخاب کنید");
        return;
      }

      const file = fileInput.files[0];
      if (file.size > 25 * 1024 * 1024) {
        alert("فایل خیلی بزرگ است (حداکثر ۲۵ مگابایت)");
        return;
      }

      // بررسی نوع فایل
      const validTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/x-wav', 'audio/m4a', 'audio/mp4', 'audio/webm', 'audio/ogg'];
      if (!validTypes.includes(file.type) && !file.name.match(/\\.(mp3|wav|m4a|mp4|webm|ogg|mpeg)$/i)) {
        if (!confirm("نوع فایل ممکن است پشتیبانی نشود. ادامه می‌دهید؟")) {
          return;
        }
      }

      BTN.disabled = true;
      STATUS.textContent = "در حال ارسال به Groq و تبدیل... (۱۰ تا ۹۰ ثانیه بسته به طول صدا)";
      RESULT.value = "";

      const formData = new FormData();
      formData.append("file", file);
      formData.append("model", "whisper-large-v3");
      formData.append("response_format", "text");
      formData.append("language", "fa");

      try {
        STATUS.textContent = "در حال اتصال به Groq...";
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 دقیقه تایم‌اوت

        const response = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
          method: "POST",
          headers: {
            "Authorization": \`Bearer \${GROQ_API_KEY}\`
          },
          body: formData,
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        STATUS.textContent = "دریافت پاسخ از سرور...";

        if (!response.ok) {
          const errText = await response.text();
          console.error("Error response:", errText);
          throw new Error(\`خطا \${response.status}: \${errText}\`);
        }

        const text = await response.text();
        RESULT.value = text.trim() || "(متن خالی برگشت)";
        STATUS.textContent = "✓ تبدیل با موفقیت انجام شد";
      } catch (err) {
        console.error("Fetch error:", err);
        
        if (err.name === 'AbortError') {
          STATUS.textContent = "خطا: زمان درخواست به پایان رسید (بیش از ۲ دقیقه)";
          RESULT.value = "درخواست timeout شد. ممکن است فایل خیلی بزرگ باشد یا سرور کند پاسخ دهد.";
        } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
          STATUS.textContent = "خطای شبکه: دسترسی به API امکان‌پذیر نیست";
          RESULT.value = \`خطای CORS یا اتصال به اینترنت.\\n\\nبرای رفع این مشکل:\\n1. فایل HTML را روی یک سرور محلی اجرا کنید\\n2. یا از اکستنشن CORS Unblock در مرورگر استفاده کنید\\n3. یا از ابزارهای آنلاین مانند glitch.com استفاده کنید\\n\\nجزئیات خطا: \${err.message}\`;
        } else {
          STATUS.textContent = "خطا: " + err.message;
          RESULT.value = "متأسفانه مشکلی پیش آمد.\\n" + err.message;
        }
      } finally {
        BTN.disabled = false;
      }
    }

    // تست اتصال به Groq هنگام لود صفحه
    window.addEventListener('load', async function() {
      try {
        const response = await fetch('https://api.groq.com/openai/v1/models', {
          headers: {
            'Authorization': \`Bearer \${GROQ_API_KEY}\`
          }
        });
        
        if (response.ok) {
          STATUS.textContent = "وضعیت: اتصال به Groq برقرار است ✓";
        } else {
          STATUS.textContent = "وضعیت: خطا در اتصال به Groq - کلید API معتبر نیست؟";
        }
      } catch (err) {
        console.log('Initial connection test failed (expected if not on a server)');
        // این خطا در فایل محلی طبیعی است
      }
    });
  <\/script>

`,className:"w-html-embed"})})}),w=o=>{const{origin:t,pathname:n,search:r}=new URL(o);return`${t}${n}${r}`},P=l.memo(({pageKey:o,system:t})=>e.jsx(v,{system:t},o),(o,t)=>o.pageKey===t.pageKey),A=({data:o})=>{const{system:t,resources:n,url:r,pageMeta:s}=o,p=w(r),c=l.useMemo(()=>({imageLoader:i,assetBaseUrl:a,resources:n,breakpoints:h,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:c,children:[e.jsx(m.Provider,{value:r,children:e.jsx(P,{pageKey:p,system:t})}),e.jsx(f,{url:r,pageMeta:s,siteName:d,imageLoader:i,assetBaseUrl:a}),e.jsx(g,{children:s.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),U=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${a}${T}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:U},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-7/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-7/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{R as configValuesSerialized};
