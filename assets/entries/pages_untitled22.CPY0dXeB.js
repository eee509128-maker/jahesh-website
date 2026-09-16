import{j as e,r as d,a as i,i as o,R as f,b as h,P as m,c as g,d as v}from"../chunks/chunk-_4i898Gl.js";import{U as u}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],z=a=>e.jsx("body",{className:"w-element",children:e.jsx(u,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>پروانه‌های نوری | گالری سه‌بعدی</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            background: radial-gradient(circle at 30% 30%, #0a0f1e, #03050a);
            font-family: 'Arial', sans-serif;
            overflow-x: hidden;
        }

        .container {
            perspective: 2000px;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            transform-style: preserve-3d;
        }

        .gallery {
            position: relative;
            width: 400px;
            height: 500px;
            transform-style: preserve-3d;
            animation: rotate 20s infinite linear;
        }

        .gallery:hover {
            animation-play-state: paused;
        }

        @keyframes rotate {
            from { transform: rotateY(0deg) rotateX(10deg); }
            to { transform: rotateY(360deg) rotateX(10deg); }
        }

        .card {
            position: absolute;
            width: 300px;
            height: 400px;
            left: 50px;
            top: 50px;
            background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 20px;
            transform-style: preserve-3d;
            box-shadow: 0 0 30px rgba(0,255,255,0.3);
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(from 0deg, transparent, #00ffff, transparent, #ff00ff, transparent);
            animation: rotateGlow 4s linear infinite;
            opacity: 0.3;
        }

        @keyframes rotateGlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .card-content {
            position: relative;
            z-index: 1;
            padding: 30px;
            color: white;
            text-align: center;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: rgba(0,0,0,0.3);
            backdrop-filter: blur(5px);
        }

        .butterfly {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .butterfly span {
            position: absolute;
            font-size: 2rem;
            animation: butterflyFloat 8s infinite;
            filter: drop-shadow(0 0 10px cyan);
            opacity: 0.6;
        }

        @keyframes butterflyFloat {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(100px, -50px) rotate(180deg); }
            50% { transform: translate(200px, 0) rotate(360deg); }
            75% { transform: translate(100px, 50px) rotate(540deg); }
        }

        .butterfly span:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; content: '🦋'; }
        .butterfly span:nth-child(2) { top: 70%; left: 80%; animation-delay: 2s; content: '🦋'; }
        .butterfly span:nth-child(3) { top: 30%; right: 20%; animation-delay: 4s; content: '🦋'; }
        .butterfly span:nth-child(4) { bottom: 20%; left: 30%; animation-delay: 6s; content: '🦋'; }
        .butterfly span:nth-child(5) { top: 50%; left: 50%; animation-delay: 1s; content: '🦋'; }

        .card:nth-child(1) { transform: rotateY(0deg) translateZ(300px); }
        .card:nth-child(2) { transform: rotateY(45deg) translateZ(300px); }
        .card:nth-child(3) { transform: rotateY(90deg) translateZ(300px); }
        .card:nth-child(4) { transform: rotateY(135deg) translateZ(300px); }
        .card:nth-child(5) { transform: rotateY(180deg) translateZ(300px); }
        .card:nth-child(6) { transform: rotateY(225deg) translateZ(300px); }
        .card:nth-child(7) { transform: rotateY(270deg) translateZ(300px); }
        .card:nth-child(8) { transform: rotateY(315deg) translateZ(300px); }

        .title {
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 3rem;
            text-shadow: 0 0 20px cyan, 0 0 40px magenta;
            z-index: 10;
            white-space: nowrap;
            animation: titlePulse 2s infinite;
        }

        @keyframes titlePulse {
            0%, 100% { opacity: 1; text-shadow: 0 0 20px cyan, 0 0 40px magenta; }
            50% { opacity: 0.8; text-shadow: 0 0 40px cyan, 0 0 80px magenta; }
        }

        .particle {
            position: absolute;
            width: 5px;
            height: 5px;
            background: white;
            border-radius: 50%;
            filter: blur(2px);
            animation: particleFloat 10s infinite;
        }

        @keyframes particleFloat {
            from { transform: translateY(100vh) rotate(0deg); }
            to { transform: translateY(-100vh) rotate(360deg); }
        }

        .moon {
            position: absolute;
            top: 100px;
            right: 100px;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle at 30% 30%, #ffffaa, #aaaaaa);
            border-radius: 50%;
            box-shadow: 0 0 50px #ffffaa;
            animation: moonGlow 4s infinite;
        }

        @keyframes moonGlow {
            0%, 100% { box-shadow: 0 0 50px #ffffaa; }
            50% { box-shadow: 0 0 100px #ffffaa, 0 0 150px #ffffff; }
        }
    </style>


    <h1 class="title">🦋 باغ پروانه‌های کیهانی 🦋</h1>
    <div class="moon"></div>
    
    <div class="container">
        <div class="gallery">
            <div class="card">
                <div class="card-content">
                    <h2>طلوع کیهانی</h2>
                    <p>رنگ‌های کهکشان در افق</p>
                    <div style="font-size: 4rem;">🌌</div>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>شب پرستاره</h2>
                    <p>رقص نور در تاریکی</p>
                    <div style="font-size: 4rem;">✨</div>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>رنگین‌کمان</h2>
                    <p>هفت رنگ جادویی</p>
                    <div style="font-size: 4rem;">🌈</div>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>ابرنواختر</h2>
                    <p>انفجار رنگ‌ها</p>
                    <div style="font-size: 4rem;">💥</div>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>سحابی</h2>
                    <p>ابرهای رنگین</p>
                    <div style="font-size: 4rem;">☁️</div>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>سیاره</h2>
                    <p>جهان‌های ناشناخته</p>
                    <div style="font-size: 4rem;">🪐</div>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>دنباله‌دار</h2>
                    <p>ستاره‌های دونده</p>
                    <div style="font-size: 4rem;">☄️</div>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>سیاهچاله</h2>
                    <p>راز فضا-زمان</p>
                    <div style="font-size: 4rem;">⚫</div>
                </div>
            </div>
        </div>
    </div>

    <div class="butterfly">
        <span>🦋</span>
        <span>🦋</span>
        <span>🦋</span>
        <span>🦋</span>
        <span>🦋</span>
    </div>

    <script>
        // ایجاد ذرات نورانی
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.background = \`hsl(\${Math.random() * 360}, 100%, 70%)\`;
            particle.style.width = Math.random() * 10 + 5 + 'px';
            particle.style.height = particle.style.width;
            document.body.appendChild(particle);
        }
    <\/script>

`,className:"w-html-embed"})}),j=a=>{const{origin:t,pathname:n,search:r}=new URL(a);return`${t}${n}${r}`},P=d.memo(({pageKey:a,system:t})=>e.jsx(z,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:n,url:r,pageMeta:s}=a,p=j(r),c=d.useMemo(()=>({imageLoader:o,assetBaseUrl:i,resources:n,breakpoints:x,onError:console.error}),[n]);return e.jsxs(f.Provider,{value:c,children:[e.jsx(h.Provider,{value:r,children:e.jsx(P,{pageKey:p,system:t})}),e.jsx(m,{url:r,pageMeta:s,siteName:l,imageLoader:o,assetBaseUrl:i}),e.jsx(g,{children:s.title})]})},k=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${i}${y}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),E={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled22/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled22/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{E as configValuesSerialized};
