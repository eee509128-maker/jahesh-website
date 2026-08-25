import{j as e,r as l,a as o,i,R as m,b as f,P as g,c as u,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⏰ ساعت بعد چهارم</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            background: linear-gradient(45deg, #0a0a0a, #1a1a2e);
            overflow: hidden;
            font-family: 'Arial', sans-serif;
        }

        .tesseract {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            transform-style: preserve-3d;
            animation: rotate4D 20s infinite linear;
        }

        @keyframes rotate4D {
            0% { transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
            25% { transform: translate(-50%, -50%) rotateX(90deg) rotateY(45deg) rotateZ(180deg); }
            50% { transform: translate(-50%, -50%) rotateX(180deg) rotateY(90deg) rotateZ(360deg); }
            75% { transform: translate(-50%, -50%) rotateX(270deg) rotateY(135deg) rotateZ(540deg); }
            100% { transform: translate(-50%, -50%) rotateX(360deg) rotateY(180deg) rotateZ(720deg); }
        }

        .cube {
            position: absolute;
            width: 200px;
            height: 200px;
            transform-style: preserve-3d;
        }

        .cube .face {
            position: absolute;
            width: 200px;
            height: 200px;
            background: rgba(0, 255, 255, 0.1);
            border: 2px solid rgba(0, 255, 255, 0.5);
            box-shadow: 0 0 30px cyan;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: white;
            text-shadow: 0 0 20px cyan;
            backdrop-filter: blur(5px);
        }

        .cube .face.front { transform: translateZ(100px); }
        .cube .face.back { transform: translateZ(-100px) rotateY(180deg); }
        .cube .face.right { transform: translateX(100px) rotateY(90deg); }
        .cube .face.left { transform: translateX(-100px) rotateY(-90deg); }
        .cube .face.top { transform: translateY(-100px) rotateX(90deg); }
        .cube .face.bottom { transform: translateY(100px) rotateX(-90deg); }

        .cube.outer {
            transform: translateZ(-100px);
        }

        .time-stream {
            position: absolute;
            width: 2px;
            height: 100vh;
            background: linear-gradient(to bottom, transparent, cyan, magenta, transparent);
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            animation: streamFlow 3s infinite;
            filter: blur(5px);
        }

        @keyframes streamFlow {
            0% { transform: translateX(-50%) scaleY(1); opacity: 0.5; }
            50% { transform: translateX(-50%) scaleY(1.5); opacity: 1; }
            100% { transform: translateX(-50%) scaleY(1); opacity: 0.5; }
        }

        .time-particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 20px cyan;
            animation: flowUp 4s linear infinite;
        }

        @keyframes flowUp {
            from { transform: translateY(100vh); opacity: 1; }
            to { transform: translateY(-100vh); opacity: 0; }
        }

        .clock-face {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 600px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, rgba(0,0,0,0.8), rgba(0,0,0,0.9));
            border: 2px solid rgba(255,255,255,0.2);
            box-shadow: 0 0 100px rgba(0,255,255,0.3);
            z-index: -1;
        }

        .time-digit {
            position: absolute;
            color: white;
            font-size: 2rem;
            text-shadow: 0 0 20px cyan, 0 0 40px magenta;
            transform: translate(-50%, -50%);
            animation: digitGlow 2s infinite;
        }

        @keyframes digitGlow {
            0%, 100% { text-shadow: 0 0 20px cyan, 0 0 40px magenta; }
            50% { text-shadow: 0 0 40px cyan, 0 0 80px magenta; }
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
            animation: titlePulse 2s infinite;
        }

        @keyframes titlePulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        .time-display {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 4rem;
            font-family: monospace;
            text-shadow: 0 0 30px cyan, 0 0 60px magenta;
            z-index: 100;
            background: rgba(0,0,0,0.5);
            padding: 20px 40px;
            border-radius: 60px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            letter-spacing: 10px;
        }

        .dimension-tag {
            position: absolute;
            bottom: 150px;
            right: 30px;
            color: rgba(255,255,255,0.7);
            font-size: 1.2rem;
            writing-mode: vertical-rl;
            text-orientation: upright;
            animation: dimensionRotate 10s infinite linear;
        }

        @keyframes dimensionRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>


    <h1 class="title">🌀 ساعت بعد چهارم</h1>

    <div class="clock-face"></div>
    
    <div class="tesseract" id="tesseract">
        <div class="cube inner" style="transform: translateZ(100px);">
            <div class="face front">۱۲</div>
            <div class="face back">۶</div>
            <div class="face right">۳</div>
            <div class="face left">۹</div>
            <div class="face top">⬆️</div>
            <div class="face bottom">⬇️</div>
        </div>
        <div class="cube outer" style="transform: translateZ(-100px);">
            <div class="face front">✨</div>
            <div class="face back">✨</div>
            <div class="face right">✨</div>
            <div class="face left">✨</div>
            <div class="face top">✨</div>
            <div class="face bottom">✨</div>
        </div>
    </div>

    <div class="time-display" id="timeDisplay">--:--:--</div>
    
    <div class="dimension-tag">بعد چهارم • زمان • فضا • بینهایت</div>

    <div class="time-stream"></div>

    <script>
        // نمایش ساعت
        function updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            
            document.getElementById('timeDisplay').textContent = 
                \`\${hours}:\${minutes}:\${seconds}\`;
        }
        
        setInterval(updateTime, 1000);
        updateTime();

        // ایجاد ذرات زمان
        function createTimeParticle() {
            const particle = document.createElement('div');
            particle.className = 'time-particle';
            
            // موقعیت تصادفی در عرض صفحه
            particle.style.left = Math.random() * 100 + '%';
            
            // رنگ تصادفی
            const hue = (Date.now() / 100) % 360;
            particle.style.background = \`hsl(\${hue}, 100%, 70%)\`;
            particle.style.boxShadow = \`0 0 20px hsl(\${hue}, 100%, 70%)\`;
            
            // اندازه تصادفی
            const size = 2 + Math.random() * 6;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // انیمیشن با تأخیر تصادفی
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            document.body.appendChild(particle);
            
            // حذف ذره بعد از اتمام انیمیشن
            setTimeout(() => particle.remove(), 4000);
        }

        // ایجاد ذرات جدید هر ۱۰۰ میلی‌ثانیه
        setInterval(createTimeParticle, 100);

        // ایجاد اعداد شناور دور ساعت
        const numbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲'];
        
        numbers.forEach((num, index) => {
            const angle = (index / numbers.length) * Math.PI * 2;
            const radius = 280;
            const x = window.innerWidth / 2 + Math.cos(angle) * radius;
            const y = window.innerHeight / 2 + Math.sin(angle) * radius;
            
            const digit = document.createElement('div');
            digit.className = 'time-digit';
            digit.textContent = num;
            digit.style.left = x + 'px';
            digit.style.top = y + 'px';
            
            document.body.appendChild(digit);
        });

        // افکت موس روی تسرکت
        document.addEventListener('mousemove', (e) => {
            const tesseract = document.getElementById('tesseract');
            const rect = tesseract.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) / 20;
            const deltaY = (e.clientY - centerY) / 20;
            
            tesseract.style.transform = 
                \`translate(-50%, -50%) rotateX(\${deltaY}deg) rotateY(\${deltaX}deg) rotateZ(\${deltaX + deltaY}deg)\`;
        });
    <\/script>

`,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:s,search:r}=new URL(a);return`${t}${s}${r}`},z=l.memo(({pageKey:a,system:t})=>e.jsx(S,{system:t},a),(a,t)=>a.pageKey===t.pageKey),j=({data:a})=>{const{system:t,resources:s,url:r,pageMeta:n}=a,c=P(r),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:s,breakpoints:y,onError:console.error}),[s]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(f.Provider,{value:r,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(g,{url:r,pageMeta:n,siteName:d,imageLoader:i,assetBaseUrl:o}),e.jsx(u,{children:n.title})]})},k=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},X=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),$={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled27/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled27/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:X}}};export{$ as configValuesSerialized};
