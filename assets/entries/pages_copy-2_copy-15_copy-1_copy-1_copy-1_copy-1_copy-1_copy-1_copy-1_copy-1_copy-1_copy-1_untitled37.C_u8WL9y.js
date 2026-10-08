import{j as e,r as l,a as n,i as r,R as f,b as u,P as m,c as g,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دکمه خفن گرافیکی</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;900&amp;display=swap" rel="stylesheet">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #0f0f13;
            font-family: 'Vazirmatn', sans-serif;
            overflow: hidden;
        }

        /* پس‌زمینه متحرک */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            background-size: 400% 400%;
            animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .bg-animation::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 40%),
                        radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 40%);
            animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* کانتینر دکمه */
        .button-container {
            position: relative;
            padding: 40px;
            perspective: 1000px;
        }

        /* دکمه اصلی */
        .cool-button {
            position: relative;
            padding: 24px 60px;
            font-size: 20px;
            font-weight: 900;
            color: #fff;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            cursor: pointer;
            overflow: hidden;
            transform-style: preserve-3d;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
                        0 0 0 1px rgba(255, 255, 255, 0.1) inset;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        /* لایه‌های افکت */
        .cool-button::before,
        .cool-button::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            transition: all 0.4s ease;
            pointer-events: none;
        }

        /* افکت گرادیانت متحرک */
        .cool-button::before {
            background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c);
            background-size: 400% 400%;
            opacity: 0;
            z-index: -1;
            animation: gradientShift 3s ease infinite;
        }

        /* افکت نئون */
        .cool-button::after {
            background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
            transform: translateX(-100%);
            z-index: 1;
        }

        /* Hover افکت */
        .cool-button:hover {
            transform: translateY(-8px) rotateX(10deg);
            box-shadow: 0 20px 60px rgba(102, 126, 234, 0.5),
                        0 0 0 1px rgba(255, 255, 255, 0.2) inset;
            border-color: rgba(255, 255, 255, 0.4);
        }

        .cool-button:hover::before {
            opacity: 0.8;
        }

        .cool-button:hover::after {
            animation: shine 0.8s ease;
        }

        @keyframes shine {
            to { transform: translateX(100%); }
        }

        /* افکت کلیک */
        .cool-button:active {
            transform: translateY(-2px) rotateX(0deg) scale(0.95);
            transition: all 0.1s ease;
        }

        /* Ripple افکت */
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: rippleEffect 0.8s ease-out;
            pointer-events: none;
        }

        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        /* آیکون داخل دکمه */
        .button-icon {
            display: inline-block;
            margin-right: 12px;
            font-size: 24px;
            animation: floatIcon 3s ease-in-out infinite;
        }

        @keyframes floatIcon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }

        /* افکت لودینگ */
        .loading {
            display: none;
            width: 20px;
            height: 20px;
            border: 3px solid transparent;
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 12px;
        }

        .cool-button.loading-active .button-text {
            display: none;
        }

        .cool-button.loading-active .loading {
            display: inline-block;
        }

        /* افکت موج نوری */
        .laser-effect {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #667eea;
            transform: translate(-50%, -50%);
            opacity: 0;
            pointer-events: none;
        }

        .cool-button:hover .laser-effect {
            animation: laserPulse 1.5s ease infinite;
        }

        @keyframes laserPulse {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
        }

        /* افکت ذرات */
        .particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #fff;
            border-radius: 50%;
            opacity: 0;
            animation: particleFloat 3s ease infinite;
        }

        .particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 80%; left: 70%; animation-delay: 0.5s; }
        .particle:nth-child(3) { top: 50%; left: 90%; animation-delay: 1s; }
        .particle:nth-child(4) { top: 30%; left: 10%; animation-delay: 1.5s; }

        @keyframes particleFloat {
            0% { opacity: 0; transform: translateY(0) scale(0); }
            50% { opacity: 1; transform: translateY(-20px) scale(1); }
            100% { opacity: 0; transform: translateY(-40px) scale(0); }
        }

        /* متن زیر دکمه */
        .button-subtitle {
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            font-weight: 400;
            white-space: nowrap;
            opacity: 0;
            animation: fadeInUp 1s ease 0.5s forwards;
        }

        @keyframes fadeInUp {
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
            from { opacity: 0; transform: translateX(-50%) translateY(10px); }
        }

        /* افکت pulse برای دکمه */
        .pulse-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 20px;
            transform: translate(-50%, -50%);
            animation: pulse 2s ease infinite;
            pointer-events: none;
        }

        @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
        }
    </style>


    <div class="bg-animation"></div>
    
    <div class="button-container">
        <button class="cool-button" id="magicButton">
            <span class="pulse-ring"></span>
            <span class="laser-effect"></span>
            <div class="particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <span class="loading"></span>
            <span class="button-icon">🚀</span>
            <span class="button-text">شروع ماجراجویی</span>
        </button>
        <div class="button-subtitle">کلیک کنید تا دنیای جدیدی کشف کنید</div>
    </div>

    <script>
        const button = document.getElementById('magicButton');

        // افکت Ripple
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 800);
            
            // افکت لودینگ
            this.classList.add('loading-active');
            setTimeout(() => {
                this.classList.remove('loading-active');
            }, 3000);
        });

        // افکت حرکت موس
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) translateZ(10px)\`;
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
        });

        // افکت صدا (اختیاری)
        function playClickSound() {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZURE');
            audio.volume = 0.1;
            audio.play().catch(() => {});
        }

        button.addEventListener('click', playClickSound);
    <\/script>


`,className:"w-html-embed"})}),A=a=>{const{origin:t,pathname:i,search:o}=new URL(a);return`${t}${i}${o}`},S=l.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),j=({data:a})=>{const{system:t,resources:i,url:o,pageMeta:s}=a,c=A(o),d=l.useMemo(()=>({imageLoader:r,assetBaseUrl:n,resources:i,breakpoints:y,onError:console.error}),[i]);return e.jsxs(f.Provider,{value:d,children:[e.jsx(u.Provider,{value:o,children:e.jsx(S,{pageKey:c,system:t})}),e.jsx(m,{url:o,pageMeta:s,siteName:p,imageLoader:r,assetBaseUrl:n}),e.jsx(g,{children:s.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),P=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${n}${x}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{F as configValuesSerialized};
