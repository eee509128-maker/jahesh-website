import{j as t,r as l,a as o,i as n,R as f,b as m,P as h,c as u,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as g}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],z=a=>t.jsx("body",{className:"w-element",children:t.jsx(g,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💎 جنگل کریستالی</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            background: linear-gradient(to bottom, #0a0f2a, #1a1f3a);
            overflow: hidden;
            font-family: 'Arial', sans-serif;
        }

        .forest {
            position: relative;
            width: 100vw;
            height: 100vh;
            perspective: 1000px;
        }

        .crystal {
            position: absolute;
            bottom: 0;
            width: 0;
            height: 0;
            border-left: 30px solid transparent;
            border-right: 30px solid transparent;
            border-bottom: 80px solid;
            transform-origin: bottom center;
            animation: crystalGlow 3s infinite, crystalFloat 5s infinite;
            filter: drop-shadow(0 0 20px currentColor);
            opacity: 0.7;
        }

        .crystal::before {
            content: '';
            position: absolute;
            top: 20px;
            left: -20px;
            width: 40px;
            height: 40px;
            background: inherit;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            transform: rotate(180deg);
            filter: brightness(1.5);
        }

        .crystal::after {
            content: '💎';
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1.5rem;
            animation: sparkle 2s infinite;
        }

        @keyframes crystalGlow {
            0%, 100% { filter: drop-shadow(0 0 20px currentColor) brightness(1); }
            50% { filter: drop-shadow(0 0 40px currentColor) brightness(1.3); }
        }

        @keyframes crystalFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(2deg); }
            75% { transform: translateY(10px) rotate(-2deg); }
        }

        @keyframes sparkle {
            0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
            50% { opacity: 0.5; transform: translateX(-50%) scale(1.5); }
        }

        .ground {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
            background: linear-gradient(to top, #2a1f3a, transparent);
            z-index: 100;
        }

        .aurora {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 60%;
            background: linear-gradient(45deg, 
                transparent 0%,
                rgba(0, 255, 255, 0.1) 25%,
                rgba(255, 0, 255, 0.1) 50%,
                rgba(0, 255, 255, 0.1) 75%,
                transparent 100%);
            filter: blur(30px);
            animation: auroraMove 20s infinite linear;
        }

        @keyframes auroraMove {
            from { transform: translateX(-100%) rotate(0deg); }
            to { transform: translateX(100%) rotate(10deg); }
        }

        .moon {
            position: absolute;
            top: 50px;
            right: 50px;
            width: 80px;
            height: 80px;
            background: radial-gradient(circle at 30% 30%, #ffffaa, #ccaa88);
            border-radius: 50%;
            box-shadow: 0 0 100px #ffffaa;
            animation: moonPhase 10s infinite;
        }

        @keyframes moonPhase {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(0.9); opacity: 0.8; }
        }

        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
        }

        .title {
            position: absolute;
            top: 50px;
            left: 50px;
            color: white;
            font-size: 3rem;
            text-shadow: 0 0 30px cyan, 0 0 60px magenta;
            z-index: 1000;
            animation: titleFloat 3s infinite;
        }

        @keyframes titleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .subtitle {
            position: absolute;
            top: 120px;
            left: 50px;
            color: rgba(255,255,255,0.7);
            font-size: 1.2rem;
            z-index: 1000;
        }

        .hover-effect {
            position: absolute;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255,255,255,0.3), transparent);
            border-radius: 50%;
            pointer-events: none;
            mix-blend-mode: overlay;
            filter: blur(20px);
            animation: hoverMove 10s infinite;
        }

        @keyframes hoverMove {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(50vw, 20vh); }
            50% { transform: translate(80vw, 50vh); }
            75% { transform: translate(30vw, 80vh); }
        }
    </style>


    <div class="forest">
        <h1 class="title">💎 جنگل کریستالی</h1>
        <div class="subtitle">سرزمین بلورهای جادویی</div>
        
        <div class="aurora"></div>
        <div class="moon"></div>
        <div class="ground"></div>
        <div class="hover-effect"></div>

        <script>
            const colors = [
                '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7',
                '#dfe6e9', '#ff9ff3', '#feca57', '#ff6f61', '#54a0ff',
                '#5f27cd', '#00d2d3', '#ff9f43', '#ee5a24', '#0abde3'
            ];

            // ایجاد کریستال‌ها
            for (let i = 0; i < 50; i++) {
                const crystal = document.createElement('div');
                crystal.className = 'crystal';
                
                // موقعیت تصادفی
                const left = Math.random() * 100;
                const size = 30 + Math.random() * 50;
                const height = 50 + Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                crystal.style.left = left + '%';
                crystal.style.borderLeftWidth = size/2 + 'px';
                crystal.style.borderRightWidth = size/2 + 'px';
                crystal.style.borderBottomWidth = height + 'px';
                crystal.style.borderBottomColor = color;
                
                // انیمیشن متفاوت برای هر کریستال
                crystal.style.animationDelay = Math.random() * 5 + 's';
                crystal.style.animationDuration = 3 + Math.random() * 4 + 's';
                
                // چرخش تصادفی
                crystal.style.transform = \`rotate(\${Math.random() * 360}deg) scale(\${0.5 + Math.random()})\`;
                
                document.querySelector('.forest').appendChild(crystal);
            }

            // ایجاد ستاره‌ها
            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                const size = 1 + Math.random() * 3;
                const left = Math.random() * 100;
                const top = Math.random() * 60;
                const delay = Math.random() * 5;
                
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.left = left + '%';
                star.style.top = top + '%';
                star.style.animationDelay = delay + 's';
                star.style.<\/script></div>`,className:"w-html-embed"})}),P=a=>{const{origin:e,pathname:s,search:r}=new URL(a);return`${e}${s}${r}`},S=l.memo(({pageKey:a,system:e})=>t.jsx(z,{system:e},a),(a,e)=>a.pageKey===e.pageKey),j=({data:a})=>{const{system:e,resources:s,url:r,pageMeta:i}=a,c=P(r),p=l.useMemo(()=>({imageLoader:n,assetBaseUrl:o,resources:s,breakpoints:x,onError:console.error}),[s]);return t.jsxs(f.Provider,{value:p,children:[t.jsx(m.Provider,{value:r,children:t.jsx(S,{pageKey:c,system:e})}),t.jsx(h,{url:r,pageMeta:i,siteName:d,imageLoader:n,assetBaseUrl:o}),t.jsx(u,{children:i.title})]})},k=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),M=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return t.jsxs(t.Fragment,{children:[t.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),t.jsx("link",{rel:"icon",href:n({src:`${o}${b}`})}),v.map(e=>t.jsx("link",{rel:"preload",href:`${o}${e}`,as:"font",crossOrigin:"anonymous"},e)),w.map(e=>t.jsx("link",{rel:"preload",href:`${o}${e}`,as:"image"},e))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:M},Symbol.toStringTag,{value:"Module"})),E={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled24/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled24/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{E as configValuesSerialized};
