import{j as e,r as l,a as o,i as s,R as m,b as f,P as x,c as u,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],g="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",k=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=[],w=t=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fire Text Effect</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            min-height: 100vh;
            background: linear-gradient(to bottom, #0a0a0a 0%, #1a0a00 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
        
        .fire-container {
            position: relative;
            text-align: center;
        }
        
        .fire-text {
            font-family: 'Impact', 'Arial Black', sans-serif;
            font-size: 8rem;
            font-weight: bold;
            color: #fff;
            text-shadow:
                0 0 10px #ff0,
                0 0 20px #ff0,
                0 0 40px #f80,
                0 0 80px #f80,
                0 0 120px #f40,
                0 0 160px #f40,
                0 0 200px #f00;
            animation: fireGlow 0.5s ease-in-out infinite alternate;
            position: relative;
            z-index: 1;
        }
        
        @keyframes fireGlow {
            0% {
                text-shadow:
                    0 0 10px #ff0,
                    0 0 20px #ff0,
                    0 0 40px #f80,
                    0 0 80px #f80,
                    0 0 120px #f40,
                    0 0 160px #f40,
                    0 0 200px #f00;
                filter: brightness(1);
            }
            100% {
                text-shadow:
                    0 0 15px #ff0,
                    0 0 30px #f80,
                    0 0 60px #f80,
                    0 0 100px #f40,
                    0 0 150px #f40,
                    0 0 200px #f00,
                    0 0 250px #f00;
                filter: brightness(1.1);
            }
        }
        
        .particle-container {
            position: absolute;
            width: 100%;
            height: 200px;
            bottom: -50px;
            left: 0;
            z-index: 0;
        }
        
        .fire-particle {
            position: absolute;
            bottom: 0;
            border-radius: 50%;
            pointer-events: none;
        }
        
        .smoke {
            position: absolute;
            bottom: 50%;
            border-radius: 50%;
            background: rgba(50, 50, 50, 0.3);
            filter: blur(10px);
            pointer-events: none;
        }
        
        .sparks {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ffff00;
            border-radius: 50%;
            box-shadow: 0 0 6px #ff8800, 0 0 12px #ff4400;
            pointer-events: none;
        }
        
        .reflection {
            position: absolute;
            bottom: -100px;
            left: 0;
            width: 100%;
            height: 100px;
            background: linear-gradient(to bottom, 
                rgba(255, 100, 0, 0.3) 0%,
                transparent 100%
            );
            filter: blur(20px);
            opacity: 0.5;
        }
        
        .sub-text {
            font-family: 'Segoe UI', sans-serif;
            font-size: 1.5rem;
            color: rgba(255, 200, 100, 0.8);
            margin-top: 20px;
            text-shadow: 0 0 20px rgba(255, 100, 0, 0.5);
            letter-spacing: 5px;
        }
    </style>


    <div class="fire-container">
        <div class="fire-text" id="fireText">آتش</div>
        <div class="particle-container" id="particleContainer"></div>
        <div class="reflection"></div>
        <p class="sub-text">افکت متن آتشین زنده</p>
    </div>
    
    <script>
        const container = document.getElementById('particleContainer');
        const fireText = document.getElementById('fireText');
        
        // Create fire particles
        function createFireParticle() {
            const particle = document.createElement('div');
            particle.className = 'fire-particle';
            
            const size = Math.random() * 20 + 10;
            const x = Math.random() * 100;
            const duration = Math.random() * 1 + 0.5;
            const hue = Math.random() * 60;
            
            particle.style.cssText = \`
                left: \${x}%;
                width: \${size}px;
                height: \${size}px;
                background: radial-gradient(circle, 
                    hsl(\${hue}, 100%, 70%) 0%, 
                    hsl(\${hue - 20}, 100%, 50%) 50%, 
                    transparent 70%
                );
                box-shadow: 0 0 \${size}px hsl(\${hue}, 100%, 50%);
            \`;
            
            container.appendChild(particle);
            
            let posY = 0;
            let opacity = 1;
            let scale = 1;
            const speed = Math.random() * 3 + 2;
            const wobble = Math.random() * 50 - 25;
            let time = 0;
            
            function animateParticle() {
                time += 0.05;
                posY += speed;
                opacity -= 0.02;
                scale -= 0.01;
                
                const wobbleX = Math.sin(time * 5) * wobble * 0.1;
                
                particle.style.bottom = posY + 'px';
                particle.style.left = \`calc(\${x}% + \${wobbleX}px)\`;
                particle.style.opacity = opacity;
                particle.style.transform = \`scale(\${scale})\`;
                
                if (opacity > 0) {
                    requestAnimationFrame(animateParticle);
                } else {
                    particle.remove();
                }
            }
            
            requestAnimationFrame(animateParticle);
        }
        
        // Create smoke particles
        function createSmoke() {
            const smoke = document.createElement('div');
            smoke.className = 'smoke';
            
            const size = Math.random() * 60 + 40;
            const x = Math.random() * 100;
            
            smoke.style.cssText = \`
                left: \${x}%;
                width: \${size}px;
                height: \${size}px;
            \`;
            
            container.appendChild(smoke);
            
            let posY = 100;
            let opacity = 0.3;
            let scale = 1;
            
            function animateSmoke() {
                posY += 1;
                opacity -= 0.002;
                scale += 0.01;
                
                smoke.style.bottom = posY + 'px';
                smoke.style.opacity = opacity;
                smoke.style.transform = \`scale(\${scale})\`;
                
                if (opacity > 0) {
                    requestAnimationFrame(animateSmoke);
                } else {
                    smoke.remove();
                }
            }
            
            requestAnimationFrame(animateSmoke);
        }
        
        // Create sparks
        function createSpark() {
            const spark = document.createElement('div');
            spark.className = 'sparks';
            
            const x = Math.random() * 100;
            
            spark.style.left = x + '%';
            spark.style.bottom = '0';
            
            container.appendChild(spark);
            
            let posY = 0;
            let posX = 0;
            const speedY = Math.random() * 8 + 4;
            const speedX = Math.random() * 6 - 3;
            let opacity = 1;
            
            function animateSpark() {
                posY += speedY;
                posX += speedX;
                opacity -= 0.03;
                
                spark.style.bottom = posY + 'px';
                spark.style.left = \`calc(\${x}% + \${posX}px)\`;
                spark.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animateSpark);
                } else {
                    spark.remove();
                }
            }
            
            requestAnimationFrame(animateSpark);
        }
        
        // Animation loops
        setInterval(createFireParticle, 30);
        setInterval(createSmoke, 200);
        setInterval(createSpark, 100);
        
        // Text wobble effect
        let textWobble = 0;
        function wobbleText() {
            textWobble += 0.1;
            const skew = Math.sin(textWobble) * 2;
            fireText.style.transform = \`skewX(\${skew}deg)\`;
            requestAnimationFrame(wobbleText);
        }
        wobbleText();
    <\/script>


`,className:"w-html-embed"})}),S=t=>{const{origin:n,pathname:i,search:a}=new URL(t);return`${n}${i}${a}`},P=l.memo(({pageKey:t,system:n})=>e.jsx(w,{system:n},t),(t,n)=>t.pageKey===n.pageKey),z=({data:t})=>{const{system:n,resources:i,url:a,pageMeta:r}=t,c=S(a),d=l.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:i,breakpoints:b,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:d,children:[e.jsx(f.Provider,{value:a,children:e.jsx(P,{pageKey:c,system:n})}),e.jsx(x,{url:a,pageMeta:r,siteName:p,imageLoader:s,assetBaseUrl:o}),e.jsx(u,{children:r.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),j=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${g}`})}),k.map(n=>e.jsx("link",{rel:"preload",href:`${o}${n}`,as:"font",crossOrigin:"anonymous"},n)),v.map(n=>e.jsx("link",{rel:"preload",href:`${o}${n}`,as:"image"},n))]})},$=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),_={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-17/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-17/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:$}}};export{_ as configValuesSerialized};
