import{j as n,r as l,a,i,R as f,b as h,P as m,c as x,d as u}from"../chunks/chunk-_4i898Gl.js";import{U as g}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],$=t=>n.jsx("body",{className:"w-element",children:n.jsx(g,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neon Background Animation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            min-height: 100vh;
            background: #0a0a0a;
            overflow: hidden;
            font-family: 'Segoe UI', sans-serif;
        }
        
        .neon-container {
            position: fixed;
            width: 100%;
            height: 100%;
        }
        
        .neon-line {
            position: absolute;
            border-radius: 50%;
            filter: blur(1px);
        }
        
        .neon-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(30px);
            animation: orbFloat 20s ease-in-out infinite;
        }
        
        @keyframes orbFloat {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(100px, -100px) scale(1.2); }
            50% { transform: translate(-50px, 100px) scale(0.8); }
            75% { transform: translate(-100px, -50px) scale(1.1); }
        }
        
        .grid-overlay {
            position: fixed;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
            0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
            100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }
        
        .content {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .neon-title {
            font-size: 5rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 10px;
            position: relative;
        }
        
        .neon-title span {
            display: inline-block;
            animation: letterGlow 2s ease-in-out infinite;
        }
        
        @keyframes letterGlow {
            0%, 100% {
                color: #fff;
                text-shadow:
                    0 0 5px #fff,
                    0 0 10px #fff,
                    0 0 20px #0ff,
                    0 0 40px #0ff,
                    0 0 80px #0ff,
                    0 0 120px #0ff;
            }
            50% {
                color: #0ff;
                text-shadow:
                    0 0 10px #0ff,
                    0 0 20px #0ff,
                    0 0 40px #0ff,
                    0 0 80px #f0f,
                    0 0 120px #f0f,
                    0 0 160px #f0f;
            }
        }
        
        .neon-subtitle {
            font-size: 1.5rem;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 20px;
            letter-spacing: 15px;
            text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }
        
        .neon-buttons {
            display: flex;
            gap: 30px;
            margin-top: 50px;
        }
        
        .neon-btn {
            padding: 15px 40px;
            font-size: 1.1rem;
            font-weight: bold;
            letter-spacing: 3px;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .neon-btn-cyan {
            background: transparent;
            color: #0ff;
            border: 2px solid #0ff;
            box-shadow: 
                0 0 10px #0ff,
                inset 0 0 10px rgba(0, 255, 255, 0.2);
        }
        
        .neon-btn-cyan:hover {
            background: #0ff;
            color: #000;
            box-shadow: 
                0 0 20px #0ff,
                0 0 40px #0ff,
                0 0 60px #0ff;
        }
        
        .neon-btn-pink {
            background: transparent;
            color: #f0f;
            border: 2px solid #f0f;
            box-shadow: 
                0 0 10px #f0f,
                inset 0 0 10px rgba(255, 0, 255, 0.2);
        }
        
        .neon-btn-pink:hover {
            background: #f0f;
            color: #000;
            box-shadow: 
                0 0 20px #f0f,
                0 0 40px #f0f,
                0 0 60px #f0f;
        }
        
        .pulse-ring {
            position: absolute;
            border-radius: 50%;
            border: 2px solid;
            animation: pulseExpand 2s ease-out infinite;
            pointer-events: none;
        }
        
        @keyframes pulseExpand {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(3);
                opacity: 0;
            }
        }
        
        .floating-shapes {
            position: fixed;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 5;
        }
        
        .shape {
            position: absolute;
            border: 2px solid;
            opacity: 0.3;
            animation: shapeFloat 15s ease-in-out infinite;
        }
        
        .shape-triangle {
            width: 0;
            height: 0;
            border: none;
            border-left: 30px solid transparent;
            border-right: 30px solid transparent;
            border-bottom: 52px solid;
        }
        
        .shape-circle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }
        
        .shape-square {
            width: 50px;
            height: 50px;
        }
        
        @keyframes shapeFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
        }
    </style>


    <div class="neon-container" id="neonContainer"></div>
    <div class="grid-overlay"></div>
    <div class="floating-shapes" id="floatingShapes"></div>
    
    <div class="content">
        <h1 class="neon-title" id="neonTitle"></h1>
        <p class="neon-subtitle">پس‌زمینه نئون متحرک</p>
        
        <div class="neon-buttons">
            <button class="neon-btn neon-btn-cyan" id="btnCyan">کشف کنید</button>
            <button class="neon-btn neon-btn-pink" id="btnPink">شروع کنید</button>
        </div>
    </div>
    
    <script>
        // Create title with animated letters
        const title = document.getElementById('neonTitle');
        const titleText = 'نئون';
        
        titleText.split('').forEach((letter, i) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = \`\${i * 0.2}s\`;
            title.appendChild(span);
        });
        
        // Create neon orbs
        const container = document.getElementById('neonContainer');
        const orbColors = [
            { color: 'rgba(0, 255, 255, 0.4)', x: '10%', y: '20%' },
            { color: 'rgba(255, 0, 255, 0.4)', x: '80%', y: '30%' },
            { color: 'rgba(255, 100, 0, 0.3)', x: '50%', y: '70%' },
            { color: 'rgba(0, 255, 100, 0.3)', x: '20%', y: '80%' },
            { color: 'rgba(100, 0, 255, 0.4)', x: '70%', y: '60%' },
        ];
        
        orbColors.forEach((orb, i) => {
            const orbEl = document.createElement('div');
            orbEl.className = 'neon-orb';
            orbEl.style.cssText = \`
                width: \${200 + Math.random() * 200}px;
                height: \${200 + Math.random() * 200}px;
                background: \${orb.color};
                left: \${orb.x};
                top: \${orb.y};
                animation-delay: \${-i * 4}s;
            \`;
            container.appendChild(orbEl);
        });
        
        // Create floating shapes
        const shapesContainer = document.getElementById('floatingShapes');
        const shapeTypes = ['triangle', 'circle', 'square'];
        const shapeColors = ['#0ff', '#f0f', '#ff0', '#0f0'];
        
        for (let i = 0; i < 15; i++) {
            const shape = document.createElement('div');
            const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            const color = shapeColors[Math.floor(Math.random() * shapeColors.length)];
            
            shape.className = \`shape shape-\${type}\`;
            shape.style.cssText = \`
                left: \${Math.random() * 100}%;
                top: \${Math.random() * 100}%;
                animation-delay: \${-Math.random() * 15}s;
                animation-duration: \${10 + Math.random() * 10}s;
            \`;
            
            if (type === 'triangle') {
                shape.style.borderBottomColor = color;
            } else {
                shape.style.borderColor = color;
            }
            
            shapesContainer.appendChild(shape);
        }
        
        // Create neon lines
        function createNeonLine() {
            const line = document.createElement('div');
            line.className = 'neon-line';
            
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            const length = Math.random() * 200 + 50;
            const angle = Math.random() * 360;
            const hue = Math.random() * 360;
            
            line.style.cssText = \`
                left: \${startX}px;
                top: \${startY}px;
                width: \${length}px;
                height: 2px;
                background: linear-gradient(90deg, 
                    transparent, 
                    hsl(\${hue}, 100%, 50%), 
                    transparent
                );
                transform: rotate(\${angle}deg);
                box-shadow: 0 0 10px hsl(\${hue}, 100%, 50%);
            \`;
            
            container.appendChild(line);
            
            let opacity = 1;
            let progress = 0;
            
            function animateLine() {
                progress += 0.02;
                opacity = Math.sin(progress) * 0.5 + 0.5;
                
                line.style.opacity = opacity;
                
                if (progress < Math.PI) {
                    requestAnimationFrame(animateLine);
                } else {
                    line.remove();
                }
            }
            
            requestAnimationFrame(animateLine);
        }
        
        setInterval(createNeonLine, 100);
        
        // Button pulse effect
        const buttons = document.querySelectorAll('.neon-btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                const rect = btn.getBoundingClientRect();
                const ring = document.createElement('div');
                ring.className = 'pulse-ring';
                ring.style.cssText = \`
                    width: \${rect.width}px;
                    height: \${rect.height}px;
                    left: \${rect.left}px;
                    top: \${rect.top}px;
                    border-color: \${btn.classList.contains('neon-btn-cyan') ? '#0ff' : '#f0f'};
                \`;
                document.body.appendChild(ring);
                
                setTimeout(() => ring.remove(), 2000);
            });
        });
        
        // Mouse trail effect
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.8) {
                const trail = document.createElement('div');
                const size = Math.random() * 10 + 5;
                const hue = Math.random() * 180 + 180;
                
                trail.style.cssText = \`
                    position: fixed;
                    left: \${e.clientX}px;
                    top: \${e.clientY}px;
                    width: \${size}px;
                    height: \${size}px;
                    background: hsl(\${hue}, 100%, 50%);
                    border-radius: 50%;
                    pointer-events: none;
                    filter: blur(2px);
                    box-shadow: 0 0 \${size * 2}px hsl(\${hue}, 100%, 50%);
                    z-index: 1000;
                \`;
                
                document.body.appendChild(trail);
                
                let opacity = 1;
                
                function fadeTrail() {
                    opacity -= 0.05;
                    trail.style.opacity = opacity;
                    trail.style.transform = \`scale(\${opacity})\`;
                    
                    if (opacity > 0) {
                        requestAnimationFrame(fadeTrail);
                    } else {
                        trail.remove();
                    }
                }
                
                requestAnimationFrame(fadeTrail);
            }
        });
    <\/script>


`,className:"w-html-embed"})}),T=t=>{const{origin:e,pathname:r,search:o}=new URL(t);return`${e}${r}${o}`},C=l.memo(({pageKey:t,system:e})=>n.jsx($,{system:e},t),(t,e)=>t.pageKey===e.pageKey),E=({data:t})=>{const{system:e,resources:r,url:o,pageMeta:s}=t,d=T(o),c=l.useMemo(()=>({imageLoader:i,assetBaseUrl:a,resources:r,breakpoints:y,onError:console.error}),[r]);return n.jsxs(f.Provider,{value:c,children:[n.jsx(h.Provider,{value:o,children:n.jsx(C,{pageKey:d,system:e})}),n.jsx(m,{url:o,pageMeta:s,siteName:p,imageLoader:i,assetBaseUrl:a}),n.jsx(x,{children:s.title})]})},M=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),S=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:p};return n.jsxs(n.Fragment,{children:[n.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),n.jsx("link",{rel:"icon",href:i({src:`${a}${b}`})}),v.map(e=>n.jsx("link",{rel:"preload",href:`${a}${e}`,as:"font",crossOrigin:"anonymous"},e)),w.map(e=>n.jsx("link",{rel:"preload",href:`${a}${e}`,as:"image"},e))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-18/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-18/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{A as configValuesSerialized};
