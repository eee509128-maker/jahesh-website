import{j as e,r as s,a as r,i,R as m,b as f,P as u,c as g,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],w="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=[],C=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌸 باغ اعداد جادویی</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');

        body {
            margin: 0;
            min-height: 100vh;
            background: linear-gradient(135deg, #1a472a, #2d5a3a);
            font-family: 'Amiri', serif;
            overflow: hidden;
        }

        .garden {
            position: relative;
            width: 100vw;
            height: 100vh;
            cursor: pointer;
        }

        .magic-flower {
            position: absolute;
            width: 60px;
            height: 60px;
            transform-origin: bottom center;
            animation: growFlower 1s ease-out, float 3s infinite;
            pointer-events: none;
            filter: drop-shadow(0 0 20px gold);
        }

        @keyframes growFlower {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }

        .flower-petal {
            position: absolute;
            width: 30px;
            height: 30px;
            background: radial-gradient(circle at 30% 30%, #ffd700, #ffa500);
            border-radius: 50% 50% 0 50%;
            transform-origin: bottom right;
        }

        .flower-center {
            position: absolute;
            width: 25px;
            height: 25px;
            background: radial-gradient(circle at 30% 30%, #ff6b6b, #ff0000);
            border-radius: 50%;
            top: 17.5px;
            left: 17.5px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1rem;
            font-weight: bold;
            box-shadow: 0 0 30px gold;
        }

        .flower-stem {
            position: absolute;
            width: 4px;
            height: 80px;
            background: linear-gradient(to top, #2ecc71, #27ae60);
            bottom: -50px;
            left: 28px;
            z-index: -1;
        }

        .flower-leaf {
            position: absolute;
            width: 20px;
            height: 40px;
            background: linear-gradient(45deg, #2ecc71, #27ae60);
            border-radius: 0 50% 0 50%;
            bottom: -20px;
        }

        .flower-leaf.left {
            left: 10px;
            transform: rotate(-45deg);
        }

        .flower-leaf.right {
            right: 10px;
            transform: rotate(45deg);
        }

        .magic-number {
            position: absolute;
            font-size: 2rem;
            color: white;
            text-shadow: 0 0 20px currentColor;
            animation: numberFloat 4s infinite;
            pointer-events: none;
            font-weight: bold;
            z-index: 1000;
        }

        @keyframes numberFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(10deg); }
        }

        .rainbow-path {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 200px;
            background: linear-gradient(to top, 
                rgba(255,0,0,0.3),
                rgba(255,165,0,0.3),
                rgba(255,255,0,0.3),
                rgba(0,255,0,0.3),
                rgba(0,127,255,0.3),
                rgba(0,0,255,0.3),
                rgba(139,0,255,0.3));
            filter: blur(20px);
            animation: rainbowWave 5s infinite;
        }

        @keyframes rainbowWave {
            0%, 100% { transform: scaleY(1); opacity: 0.5; }
            50% { transform: scaleY(1.2); opacity: 0.8; }
        }

        .title {
            position: absolute;
            top: 30px;
            right: 30px;
            color: white;
            font-size: 3rem;
            text-shadow: 0 0 30px #ffd700, 0 0 60px #ff1493;
            z-index: 100;
            animation: titleRainbow 3s infinite;
        }

        @keyframes titleRainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }

        .counter {
            position: absolute;
            bottom: 30px;
            right: 30px;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 30px;
            color: white;
            font-size: 1.5rem;
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 0 30px rgba(0,0,0,0.3);
            z-index: 100;
        }

        .magic-dust {
            position: absolute;
            width: 4px;
            height: 4px;
            background: gold;
            border-radius: 50%;
            pointer-events: none;
            animation: dustFloat 2s forwards;
        }

        @keyframes dustFloat {
            0% { transform: translate(0, 0) scale(1); opacity: 1; }
            100% { transform: translate(calc(100px - 50%), calc(-200px)) scale(0); opacity: 0; }
        }

        .instruction {
            position: absolute;
            bottom: 30px;
            left: 30px;
            color: white;
            font-size: 1.2rem;
            background: rgba(0,0,0,0.3);
            padding: 15px 25px;
            border-radius: 40px;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.2);
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    </style>


    <div class="garden" id="garden">
        <h1 class="title">🌸 باغ اعداد جادویی</h1>
        
        <div class="rainbow-path"></div>
        
        <div class="counter" id="counter">
            🌸 تعداد گل‌ها: <span id="flowerCount">۰</span>
        </div>

        <div class="instruction">
            ✨ هر جا کلیک کنی، یه گل عدددار سبز میشه!
        </div>

        <div id="numbersContainer"></div>
    </div>

    <script>
        const garden = document.getElementById('garden');
        const flowerCountSpan = document.getElementById('flowerCount');
        let flowerCounter = 0;

        // اعداد جادویی برای نمایش
        const magicNumbers = ['۷', '۳', '۹', '۵', '۱', '۸', '۴', '۲', '۶', '۰'];
        
        // رنگ‌های جادویی
        const colors = [
            '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7',
            '#ff9ff3', '#feca57', '#ff6f61', '#54a0ff', '#5f27cd'
        ];

        function createMagicFlower(x, y) {
            flowerCounter++;
            flowerCountSpan.textContent = flowerCounter;

            // ایجاد گل
            const flower = document.createElement('div');
            flower.className = 'magic-flower';
            flower.style.left = (x - 30) + 'px';
            flower.style.top = (y - 100) + 'px';
            
            // رنگ تصادفی برای گلبرگ‌ها
            const petalColor = colors[Math.floor(Math.random() * colors.length)];
            const centerNumber = magicNumbers[Math.floor(Math.random() * magicNumbers.length)];
            
            // ساختن گلبرگ‌ها
            for (let i = 0; i < 8; i++) {
                const petal = document.createElement('div');
                petal.className = 'flower-petal';
                petal.style.background = \`radial-gradient(circle at 30% 30%, \${petalColor}, \${petalColor}dd)\`;
                petal.style.transform = \`rotate(\${i * 45}deg)\`;
                petal.style.top = '15px';
                petal.style.left = '15px';
                flower.appendChild(petal);
            }
            
            // مرکز گل با عدد
            const center = document.createElement('div');
            center.className = 'flower-center';
            center.textContent = centerNumber;
            flower.appendChild(center);
            
            // ساقه
            const stem = document.createElement('div');
            stem.className = 'flower-stem';
            flower.appendChild(stem);
            
            // برگ‌ها
            const leafLeft = document.createElement('div');
            leafLeft.className = 'flower-leaf left';
            flower.appendChild(leafLeft);
            
            const leafRight = document.createElement('div');
            leafRight.className = 'flower-leaf right';
            flower.appendChild(leafRight);
            
            garden.appendChild(flower);

            // ایجاد اعداد شناور
            setTimeout(() => {
                createFloatingNumber(x, y, centerNumber);
            }, 500);

            // ایجاد غبار جادویی
            for (let i = 0; i < 10; i++) {
                createMagicDust(x, y);
            }

            // حذف گل بعد از مدتی (برای اینکه باغ شلوغ نشه)
            setTimeout(() => {
                flower.remove();
                flowerCounter--;
                flowerCountSpan.textContent = flowerCounter;
            }, 15000);
        }

        function createFloatingNumber(x, y, number) {
            const numElement = document.createElement('div');
            numElement.className = 'magic-number';
            numElement.textContent = number;
            numElement.style.left = x + 'px';
            numElement.style.top = y + 'px';
            numElement.style.color = \`hsl(\${Math.random() * 360}, 100%, 70%)\`;
            numElement.style.animationDelay = Math.random() * 2 + 's';
            
            garden.appendChild(numElement);

            setTimeout(() => {
                numElement.remove();
            }, 3000);
        }

        function createMagicDust(x, y) {
            const dust = document.createElement('div');
            dust.className = 'magic-dust';
            dust.style.left = x + (Math.random() - 0.5) * 50 + 'px';
            dust.style.top = y + (Math.random() - 0.5) * 50 + 'px';
            dust.style.background = \`hsl(\${Math.random() * 360}, 100%, 70%)\`;
            dust.style.animationDelay = Math.random() * 0.5 + 's';
            
            garden.appendChild(dust);

            setTimeout(() => {
                dust.remove();
            }, 2000);
        }

        // کلیک روی باغ
        garden.addEventListener('click', (e) => {
            createMagicFlower(e.clientX, e.clientY);
        });

        // حرکت موس برای ایجاد افکت
        garden.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.9) { // ۱۰٪ احتمال
                createMagicDust(e.clientX, e.clientY);
            }
        });

        // ایجاد چند گل اولیه
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = 200 + Math.random() * (window.innerWidth - 400);
                const y = 300 + Math.random() * (window.innerHeight - 400);
                createMagicFlower(x, y);
            }, i * 500);
        }
    <\/script>

`,className:"w-html-embed"})}),E=a=>{const{origin:t,pathname:n,search:o}=new URL(a);return`${t}${n}${o}`},S=s.memo(({pageKey:a,system:t})=>e.jsx(C,{system:t},a),(a,t)=>a.pageKey===t.pageKey),k=({data:a})=>{const{system:t,resources:n,url:o,pageMeta:l}=a,c=E(o),p=s.useMemo(()=>({imageLoader:i,assetBaseUrl:r,resources:n,breakpoints:b,onError:console.error}),[n]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(f.Provider,{value:o,children:e.jsx(S,{pageKey:c,system:t})}),e.jsx(u,{url:o,pageMeta:l,siteName:d,imageLoader:i,assetBaseUrl:r}),e.jsx(g,{children:l.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),z=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${r}${w}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled26/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled26/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{F as configValuesSerialized};
