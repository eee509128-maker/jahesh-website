import{j as e,r as d,a as s,i as r,R as u,b as y,P as g,c as m,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],P=[],S=o=>e.jsx("body",{className:"w-element",children:e.jsx(x,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دستیار تخصصی انگل‌شناسی (بندپایان)</title>
    <style>
        body {
            font-family: 'Tahoma', sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .chat-container {
            width: 90%;
            max-width: 800px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            height: 80vh;
        }
        .header {
            background: #2c3e50;
            color: white;
            padding: 20px;
            border-radius: 15px 15px 0 0;
            text-align: center;
        }
        #chat-box {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            border-bottom: 1px solid #ddd;
        }
        .message {
            margin-bottom: 15px;
            line-height: 1.6;
        }
        .user-message {
            color: #2980b9;
            font-weight: bold;
        }
        .ai-message {
            color: #2c3e50;
            background: #ecf0f1;
            padding: 10px;
            border-radius: 8px;
        }
        .input-area {
            display: flex;
            padding: 15px;
        }
        input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            outline: none;
        }
        button {
            padding: 10px 20px;
            background: #27ae60;
            color: white;
            border: none;
            border-radius: 5px;
            margin-right: 10px;
            cursor: pointer;
        }
        button:disabled {
            background: #bdc3c7;
        }
    </style>



<div class="chat-container">
    <div class="header">
        <h2>سامانه تخصصی هوش مصنوعی انگل‌شناسی (بندپایان)</h2>
        <p>پاسخگویی دقیق به سوالات تخصصی دانشگاهی</p>
    </div>
    <div id="chat-box"></div>
    <div class="input-area">
        <input type="text" id="user-input" placeholder="سوال تخصصی خود را بپرسید (مثلاً در مورد دوره زندگی لیشمانیا یا طبقه بندی کنه‌ها)...">
        <button onclick="sendMessage()" id="send-btn">ارسال</button>
    </div>
</div>

<script>
    const API_KEY = "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";
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // دستورالعمل سیستمی برای محدود کردن هوش مصنوعی به حوزه انگل‌شناسی
    const SYSTEM_PROMPT = \`شما یک متخصص تراز اول در زمینه انگل‌شناسی پزشکی و حشره‌شناسی (Medical Entomology) هستید. 
    وظیفه شما پاسخگویی دقیق، علمی و دانشگاهی به سوالات مربوط به بندپایان (Arthropods) ناقل بیماری، کنه‌ها، جرب‌ها، شپش‌ها، کک‌ها و پشه‌ها است. 
    1. فقط به سوالات مربوط به این حوزه پاسخ دهید. 
    2. اگر سوالی خارج از حوزه انگل‌شناسی و بندپایان بود، با احترام بگویید که تخصص شما فقط در زمینه بندپایان است.
    3. از اصطلاحات علمی لاتین (مانند نام علمی گونه‌ها) حتماً استفاده کنید.
    4. پاسخ‌ها باید در سطح دکتری و متخصصان علوم پزشکی باشد.
    5. در مورد ریخت‌شناسی (Morphology)، چرخه زندگی (Life Cycle)، بیماری‌زایی و روش‌های کنترل صحبت کنید.\`;

    async function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        appendMessage('کاربر', text, 'user-message');
        userInput.value = '';
        sendBtn.disabled = true;

        try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": \`Bearer \${API_KEY}\`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        { role: "user", content: text }
                    ],
                    temperature: 0.2 // کاهش خلاقیت برای افزایش دقت علمی
                })
            });

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;
            appendMessage('متخصص انگل‌شناسی', aiResponse, 'ai-message');
        } catch (error) {
            appendMessage('خطا', 'مشکلی در اتصال به سرور پیش آمد.', 'ai-message');
            console.error(error);
        } finally {
            sendBtn.disabled = false;
        }
    }

    function appendMessage(sender, text, className) {
        const msgDiv = document.createElement('div');
        msgDiv.className = \`message \${className}\`;
        msgDiv.innerHTML = \`<strong>\${sender}:</strong> <br> \${text.replace(/\\n/g, '<br>')}\`;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // ارسال با زدن دکمه Enter
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
<\/script>


`,className:"w-html-embed"})}),j=o=>{const{origin:t,pathname:n,search:a}=new URL(o);return`${t}${n}${a}`},T=d.memo(({pageKey:o,system:t})=>e.jsx(S,{system:t},o),(o,t)=>o.pageKey===t.pageKey),w=({data:o})=>{const{system:t,resources:n,url:a,pageMeta:i}=o,p=j(a),l=d.useMemo(()=>({imageLoader:r,assetBaseUrl:s,resources:n,breakpoints:f,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:l,children:[e.jsx(y.Provider,{value:a,children:e.jsx(T,{pageKey:p,system:t})}),e.jsx(g,{url:a,pageMeta:i,siteName:c,imageLoader:r,assetBaseUrl:s}),e.jsx(m,{children:i.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),_=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${s}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-52/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-52/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{R as configValuesSerialized};
