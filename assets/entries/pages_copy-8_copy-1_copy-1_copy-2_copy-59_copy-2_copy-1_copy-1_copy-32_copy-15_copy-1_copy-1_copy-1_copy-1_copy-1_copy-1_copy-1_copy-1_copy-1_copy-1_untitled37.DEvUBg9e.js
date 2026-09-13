import{j as e,r as d,a,i,R as u,b as y,P as g,c as m,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],P=o=>e.jsx("body",{className:"w-element",children:e.jsx(b,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل صوت به متن با Groq</title>
    <style>
        body {
            font-family: Tahoma, Vazir, sans-serif;
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .container {
            background: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            font-size: 1.5rem;
            color: #333;
            margin-top: 0;
        }
        input[type="file"] {
            margin: 20px 0;
            padding: 10px;
            border: 1px dashed #ccc;
            border-radius: 5px;
            width: 100%;
            box-sizing: border-box;
        }
        button {
            background: #4CAF50;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
        }
        button:disabled {
            background: #cccccc;
            cursor: not-allowed;
        }
        #result {
            margin-top: 20px;
            padding: 15px;
            background: #e9f7fe;
            border-radius: 5px;
            white-space: pre-wrap;
            min-height: 50px;
            border: 1px solid #b3e0f0;
        }
        .error {
            background: #ffebee;
            color: #c62828;
            border-color: #ef9a9a;
        }
        .loading {
            margin: 10px 0;
            color: #666;
            font-style: italic;
        }
        .note {
            font-size: 0.8rem;
            color: #999;
            margin-top: 20px;
            border-top: 1px solid #eee;
            padding-top: 10px;
        }
    </style>


    <div class="container">
        <h1>🎤 بارگذاری فایل صوتی و دریافت متن</h1>
        <p>فایل صوتی خود را انتخاب کنید (فرمت‌های پشتیبانی: mp3، mp4، mpeg، mpga، m4a، wav، webm)</p>
        
        <input type="file" id="audioFile" accept="audio/*">
        
        <button id="transcribeBtn" onclick="transcribeAudio()" disabled="">انتخاب فایل</button>
        
        <div id="loading" class="loading" style="display:none;">⏳ در حال پردازش، لطفاً صبر کنید...</div>
        
        <div id="result"></div>
        
        <div class="note">
            ⚠️ توجه: کلید API درون کد قرار داده شده است. اگر نیاز به تغییر آن دارید، متغیر <code>API_KEY</code> را در بخش جاوااسکریپت ویرایش کنید.
            <br>
            🌐 در صورت بروز خطای CORS، ممکن است مرورگر شما اجازه ارتباط مستقیم با سرور را ندهد. در این حالت می‌توانید از افزونه‌های مخصوص یا یک سرور واسط استفاده کنید.
        </div>
    </div>

    <script>
        // ========== تنظیمات API ==========
        const API_KEY = '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';  // کلید اختصاصی شما
        const API_URL = 'https://api.groq.com/openai/v1/audio/transcriptions';
        // =================================

        const fileInput = document.getElementById('audioFile');
        const transcribeBtn = document.getElementById('transcribeBtn');
        const loadingDiv = document.getElementById('loading');
        const resultDiv = document.getElementById('result');

        // فعال/غیرفعال کردن دکمه با انتخاب فایل
        fileInput.addEventListener('change', function() {
            if (fileInput.files.length) {
                transcribeBtn.disabled = false;
                transcribeBtn.textContent = '🚀 تبدیل به متن';
            } else {
                transcribeBtn.disabled = true;
                transcribeBtn.textContent = 'انتخاب فایل';
            }
        });

        async function transcribeAudio() {
            const file = fileInput.files[0];
            if (!file) {
                alert('لطفاً یک فایل انتخاب کنید.');
                return;
            }

            // نمایش بارگذاری و غیرفعال کردن دکمه
            loadingDiv.style.display = 'block';
            resultDiv.innerHTML = '';
            transcribeBtn.disabled = true;
            transcribeBtn.textContent = 'در حال پردازش...';

            // آماده‌سازی داده‌های فرم
            const formData = new FormData();
            formData.append('file', file);
            formData.append('model', 'whisper-large-v3');  // مدل قدرتمند Whisper
            // در صورت تمایل می‌توانید پارامتر language را نیز اضافه کنید، مثلاً 'fa' برای فارسی
            // formData.append('language', 'fa');

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': \`Bearer \${API_KEY}\`
                        // توجه: Content-Type را تعیین نمی‌کنیم تا fetch خودکار multipart/form-data را تنظیم کند
                    },
                    body: formData
                });

                if (!response.ok) {
                    let errorMessage = \`خطای \${response.status}\`;
                    try {
                        const errorData = await response.json();
                        errorMessage = errorData.error?.message || errorMessage;
                    } catch (e) {
                        // اگر پاسخ JSON نبود
                    }
                    throw new Error(errorMessage);
                }

                const data = await response.json();
                // نمایش متن استخراج‌شده
                resultDiv.innerHTML = \`<strong>📝 متن استخراج شده:</strong><br>\${data.text}\`;
            } catch (error) {
                resultDiv.innerHTML = \`<div class="error">❌ خطا: \${error.message}</div>\`;
            } finally {
                // بازگرداندن وضعیت اولیه
                loadingDiv.style.display = 'none';
                transcribeBtn.disabled = false;
                transcribeBtn.textContent = '🚀 تبدیل به متن';
            }
        }
    <\/script>

`,className:"w-html-embed"})}),S=o=>{const{origin:t,pathname:n,search:r}=new URL(o);return`${t}${n}${r}`},j=d.memo(({pageKey:o,system:t})=>e.jsx(P,{system:t},o),(o,t)=>o.pageKey===t.pageKey),z=({data:o})=>{const{system:t,resources:n,url:r,pageMeta:s}=o,c=S(r),l=d.useMemo(()=>({imageLoader:i,assetBaseUrl:a,resources:n,breakpoints:x,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:l,children:[e.jsx(y.Provider,{value:r,children:e.jsx(j,{pageKey:c,system:t})}),e.jsx(g,{url:r,pageMeta:s,siteName:p,imageLoader:i,assetBaseUrl:a}),e.jsx(m,{children:s.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${a}${h}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),I={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-8/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-8/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{I as configValuesSerialized};
