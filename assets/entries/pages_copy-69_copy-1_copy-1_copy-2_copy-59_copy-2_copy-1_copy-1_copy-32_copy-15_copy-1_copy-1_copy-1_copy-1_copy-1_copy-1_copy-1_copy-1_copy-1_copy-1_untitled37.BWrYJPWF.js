import{j as e,r as d,a,i,R as u,b as y,P as m,c as g,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",P=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=[],S=t=>e.jsx("body",{className:"w-element",children:e.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی سازنده موسیقی</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #121212;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: #1e1e1e;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }
        h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #1db954; /* رنگ سبز اسپاتیفای برای حس موسیقی */
        }
        p {
            font-size: 14px;
            color: #b3b3b3;
            margin-bottom: 20px;
        }
        input[type="text"] {
            width: 90%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background-color: #2a2a2a;
            color: white;
            font-size: 16px;
            margin-bottom: 20px;
            outline: none;
        }
        input[type="text"]:focus {
            border: 1px solid #1db954;
        }
        button {
            background-color: #1db954;
            color: white;
            border: none;
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #1ed760;
        }
        button:disabled {
            background-color: #555;
            cursor: not-allowed;
        }
        .loading {
            display: none;
            margin-top: 15px;
            font-size: 14px;
            color: #1db954;
        }
        #audio-container {
            margin-top: 25px;
            display: none;
        }
        audio {
            width: 100%;
            outline: none;
        }
    </style>



    <div class="container">
        <h1>سازنده موسیقی با هوش مصنوعی 🎵</h1>
        <p>موضوع یا حس و حال آهنگ خود را بنویسید (مثلاً: یک آهنگ آرامش‌بخش با پیانو برای باران)</p>
        
        <input type="text" id="topicInput" placeholder="موضوع موسیقی...">
        <button id="generateBtn" onclick="generateMusic()">ساختن موسیقی</button>
        
        <div class="loading" id="loadingText">در حال ساخت موسیقی... لطفا صبر کنید ⏳</div>

        <div id="audio-container">
            <p>موسیقی شما آماده است!</p>
            <audio id="musicPlayer" controls="">
                <source id="audioSource" src="" type="audio/mpeg">
                مرورگر شما از پخش صدا پشتیبانی نمی‌کند.
            </audio>
        </div>
    </div>

    <script>
        async function generateMusic() {
            const topic = document.getElementById('topicInput').value;
            const btn = document.getElementById('generateBtn');
            const loading = document.getElementById('loadingText');
            const audioContainer = document.getElementById('audio-container');
            const audioSource = document.getElementById('audioSource');
            const musicPlayer = document.getElementById('musicPlayer');

            if (!topic) {
                alert("لطفاً یک موضوع وارد کنید!");
                return;
            }

            // نمایش حالت لودینگ
            btn.disabled = true;
            loading.style.display = 'block';
            audioContainer.style.display = 'none';

            // ⚠️ توجه: قرار دادن API Key در فرانت‌اند (HTML) از نظر امنیتی خطرناک است.
            // در یک پروژه واقعی باید این درخواست را به یک سرور بک‌اند (مثل Node.js یا Python) بفرستید.
            const API_KEY = 'کلید_API_خود_را_اینجا_قرار_دهید'; 
            
            // آدرس API سرویس تولید موسیقی (باید با سرویس مورد نظر شما جایگزین شود)
            const API_URL = 'https://api.your-music-ai-provider.com/v1/generate'; 

            try {
                /*
                // کد ارسال درخواست واقعی (کامنت شده است تا ارور ندهد)
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': \`Bearer \${API_KEY}\`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        prompt: topic,
                        // سایر پارامترهایی که API شما نیاز دارد
                    })
                });

                const data = await response.json();
                const audioUrl = data.audio_url; // فرض می‌کنیم API یک لینک صدا برمی‌گرداند
                */

                // ---------------------------------------------------------
                // برای تست ظاهری برنامه (چون API موسیقی واقعی در دسترس نداریم)
                // این بخش بعد از ۳ ثانیه یک فایل صوتی تستی را پخش می‌کند.
                // بعد از وصل کردن API واقعی، این بخش را پاک کنید.
                await new Promise(resolve => setTimeout(resolve, 3000));
                const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 
                // ---------------------------------------------------------

                // قرار دادن لینک موسیقی در پلیر و نمایش آن
                audioSource.src = audioUrl;
                musicPlayer.load(); // بارگذاری مجدد پلیر
                audioContainer.style.display = 'block';

            } catch (error) {
                console.error('خطا در ارتباط با API:', error);
                alert("مشکلی در تولید موسیقی به وجود آمد. کنسول مرورگر را بررسی کنید.");
            } finally {
                // خروج از حالت لودینگ
                btn.disabled = false;
                loading.style.display = 'none';
            }
        }
    <\/script>

`,className:"w-html-embed"})}),w=t=>{const{origin:o,pathname:r,search:n}=new URL(t);return`${o}${r}${n}`},j=d.memo(({pageKey:t,system:o})=>e.jsx(S,{system:o},t),(t,o)=>t.pageKey===o.pageKey),_=({data:t})=>{const{system:o,resources:r,url:n,pageMeta:s}=t,l=w(n),p=d.useMemo(()=>({imageLoader:i,assetBaseUrl:a,resources:r,breakpoints:f,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(y.Provider,{value:n,children:e.jsx(j,{pageKey:l,system:o})}),e.jsx(m,{url:n,pageMeta:s,siteName:c,imageLoader:i,assetBaseUrl:a}),e.jsx(g,{children:s.title})]})},I=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),A=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${a}${b}`})}),P.map(o=>e.jsx("link",{rel:"preload",href:`${a}${o}`,as:"font",crossOrigin:"anonymous"},o)),v.map(o=>e.jsx("link",{rel:"preload",href:`${a}${o}`,as:"image"},o))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-69/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-69/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{U as configValuesSerialized};
