import{j as e,r as l,a as r,i as o,R as u,b as h,P as m,c as f,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌀 سیاهچاله کوانتومی</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            background: radial-gradient(circle at 30% 30%, #0a0a20, #000000);
            overflow: hidden;
            font-family: 'Arial', sans-serif;
        }

        .universe {
            position: relative;
            width: 100vw;
            height: 100vh;
            perspective: 1000px;
        }

        .black-hole {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, 
                rgba(0,0,0,1) 0%,
                rgba(20,0,40,1) 50%,
                rgba(0,0,0,1) 100%);
            box-shadow: 0 0 100px rgba(128,0,255,0.5);
            animation: pulse 4s infinite;
            z-index: 10;
        }

        @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.9; }
        }

        .accretion-disk {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 600px;
            border-radius: 50%;
            background: conic-gradient(from 0deg, 
                #ff0000, #ff00ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000);
            filter: blur(20px);
            animation: rotate 20s linear infinite;
            opacity: 0.3;
            z-index: 5;
        }

        .particle-field {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .quantum-particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 20px cyan;
            animation: fallIntoHole 8s linear infinite;
        }

        @keyframes fallIntoHole {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
                filter: hue-rotate(0deg);
            }
            100% {
                transform: translate(calc(50vw - 50%), calc(50vh - 50%)) scale(0);
                opacity: 0;
                filter: hue-rotate(720deg);
            }
        }

        .gravity-wave {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            animation: wave 3s infinite;
        }

        .gravity-wave:nth-child(2) {
            animation-delay: 1s;
        }

        .gravity-wave:nth-child(3) {
            animation-delay: 2s;
        }

        @keyframes wave {
            0% {
                width: 200px;
                height: 200px;
                opacity: 1;
                border-color: rgba(255,0,255,0.8);
            }
            100% {
                width: 800px;
                height: 800px;
                opacity: 0;
                border-color: rgba(0,255,255,0);
            }
        }

        .event-horizon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
            border-radius: 50%;
            border: 2px solid rgba(255,215,0,0.3);
            animation: spin 10s linear infinite;
            z-index: 15;
        }

        @keyframes spin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .title {
            position: absolute;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 3rem;
            text-shadow: 0 0 30px magenta, 0 0 60px cyan;
            z-index: 100;
            white-space: nowrap;
            animation: titleGlitch 3s infinite;
        }

        @keyframes titleGlitch {
            0%, 100% { text-shadow: 0 0 30px magenta, 0 0 60px cyan; }
            25% { text-shadow: -5px 0 red, 5px 0 blue; }
            50% { text-shadow: 5px -5px green, -5px 5px yellow; }
            75% { text-shadow: -5px 5px purple, 5px -5px orange; }
        }

        .info {
            position: absolute;
            bottom: 30px;
            left: 30px;
            color: rgba(255,255,255,0.7);
            font-size: 1rem;
            z-index: 100;
            background: rgba(0,0,0,0.5);
            padding: 10px 20px;
            border-radius: 20px;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.2);
        }

        .quantum-stats {
            position: absolute;
            top: 100px;
            right: 30px;
            color: white;
            font-size: 1.2rem;
            z-index: 100;
            background: rgba(0,0,0,0.5);
            padding: 20px;
            border-radius: 20px;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.2);
            animation: glow 2s infinite;
        }

        @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255,0,255,0.3); }
            50% { box-shadow: 0 0 40px rgba(0,255,255,0.5); }
        }
    </style>


    <div class="universe">
        <h1 class="title">🌀 سیاهچاله کوانتومی</h1>
        
        <div class="quantum-stats">
            <div>📊 آمار کوانتومی:</div>
            <div id="particleCount">ذرات: ۰</div>
            <div id="spaghettification">اسپاگتی‌فیکیشن: فعال</div>
            <div id="quantumState">حالت کوانتومی: ⚛️</div>
        </div>

        <div class="info">
            ⚠️ هشدار: نزدیک شدن به افق رویداد ممنوع!
        </div>

        <div class="accretion-disk"></div>
        <div class="black-hole"></div>
        <div class="event-horizon"></div>
        
        <div class="gravity-wave"></div>
        <div class="gravity-wave"></div>
        <div class="gravity-wave"></div>
        
        <div class="particle-field" id="particleField"></div>
    </div>

    <script>
        const particleField = document.getElementById('particleField');
        const particleCountDisplay = document.getElementById('particleCount');
        let particleCount = 0;

        // ایجاد ذرات کوانتومی
        function createQuantumParticle() {
            const particle = document.createElement('div');
            particle.className = 'quantum-particle';
            
            // موقعیت تصادفی در اطراف صفحه
            const angle = Math.random() * Math.PI * 2;
            const distance = 200 + Math.random() * 400;
            const startX = window.innerWidth / 2 + Math.cos(angle) * distance;
            const startY = window.innerHeight / 2 + Math.sin(angle) * distance;
            
            particle.style.left = startX + 'px';
            particle.style.top = startY + 'px';
            
            // رنگ تصادفی
            const hue = Math.random() * 360;
            particle.style.background = \`hsl(\${hue}, 100%, 70%)\`;
            particle.style.boxShadow = \`0 0 20px hsl(\${hue}, 100%, 70%)\`;
            
            // اندازه تصادفی
            const size = 2 + Math.random() * 6;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // انیمیشن با تأخیر تصادفی
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            particleField.appendChild(particle);
            particleCount++;
            particleCountDisplay.textContent = \`ذرات: \${particleCount}\`;
            
            // حذف ذره بعد از اتمام انیمیشن
            setTimeout(() => {
                particle.remove();
                particleCount--;
                particleCountDisplay.textContent = \`ذرات: \${particleCount}\`;
            }, 8000);
        }

        // ایجاد ذرات جدید هر ۰.۵ ثانیه
        setInterval(createQuantumParticle, 200);

        // افکت موس
        document.addEventListener('mousemove', (e) => {
            const blackHole = document.querySelector('.black-hole');
            const rect = blackHole.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(e.clientX - centerX, 2) + 
                Math.pow(e.clientY - centerY, 2)
            );
            
            if (distance < 200) {
                document.getElementById('spaghettification').innerHTML = 
                    'اسپاگتی‌فیکیشن: ⚠️ در حال کشیده شدن!';
            } else {
                document.getElementById('spaghettification').innerHTML = 
                    'اسپاگتی‌فیکیشن: امن';
            }
            
            // تغییر حالت کوانتومی بر اساس موقعیت موس
            const states = ['⚛️', '🔬', '🧪', '⚡', '💫', '✨'];
            const randomState = states[Math.floor(Math.random() * states.length)];
            document.getElementById('quantumState').innerHTML = 
                \`حالت کوانتومی: \${randomState}\`;
        });
    <\/script>

`,className:"w-html-embed"})}),z=a=>{const{origin:t,pathname:n,search:i}=new URL(a);return`${t}${n}${i}`},k=l.memo(({pageKey:a,system:t})=>e.jsx(S,{system:t},a),(a,t)=>a.pageKey===t.pageKey),P=({data:a})=>{const{system:t,resources:n,url:i,pageMeta:s}=a,c=z(i),p=l.useMemo(()=>({imageLoader:o,assetBaseUrl:r,resources:n,breakpoints:v,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(h.Provider,{value:i,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(m,{url:i,pageMeta:s,siteName:d,imageLoader:o,assetBaseUrl:r}),e.jsx(f,{children:s.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),M=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${r}${y}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},C=Object.freeze(Object.defineProperty({__proto__:null,Head:M},Symbol.toStringTag,{value:"Module"})),H={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled25/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled25/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}}};export{H as configValuesSerialized};
