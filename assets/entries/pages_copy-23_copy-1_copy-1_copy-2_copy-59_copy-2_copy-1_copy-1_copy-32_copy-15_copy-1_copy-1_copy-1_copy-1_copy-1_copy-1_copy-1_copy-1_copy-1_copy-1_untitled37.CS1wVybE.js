import{j as e,r as g,a as l,i as b,R as v,b as j,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m as h,C as S,P as N,A as i,$ as T}from"../chunks/chunk-CJTZdOzc.js";import{U as m}from"../chunks/chunk-BTtE8iXS.js";import{n as s}from"../chunks/chunk-CRUfvgxf.js";import{n as x}from"../chunks/chunk-RvLaVuUh.js";import{g as c}from"../chunks/chunk-BKjYWtT8.js";import{n as C}from"../chunks/chunk-Bx5-62GJ.js";import{d as y}from"../chunks/chunk-ClMSjCia.js";import{d as I,i as r}from"../chunks/chunk-DWuKyx5h.js";import{O as P,x as E,M,R as A,$ as B}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const u="jahesh",L=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],_="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",R=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],F=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],O=a=>e.jsxs("body",{className:"w-element",children:[e.jsx(m,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ذهن آینه - رهاسازی شناختی</title>
    <style>
        :root {
            --stress-c1: #3a0ca3;
            --stress-c2: #7209b7;
            --stress-c3: #f72585;
            --calm-c1: #00b4d8;
            --calm-c2: #0077b6;
            --calm-c3: #03045e;
            --font-main: 'Segoe UI', Tahoma, Arial, sans-serif;
        }

        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            font-family: var(--font-main);
            color: #fff;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Dynamic Layered Backgrounds */
        .bg-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .bg-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: opacity 8s ease-in-out;
        }

        .stress-bg {
            background: linear-gradient(135deg, #1a0b2e 0%, #3a0ca3 50%, #4a0010 100%);
            opacity: 1;
        }

        .calm-bg {
            background: linear-gradient(135deg, #020024 0%, #0077b6 50%, #00b4d8 100%);
            opacity: 0;
        }

        canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }

        /* Glassmorphism UI */
        .ui-layer {
            position: relative;
            z-index: 10;
            width: 90%;
            max-width: 550px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 2.5rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            width: 100%;
            box-sizing: border-box;
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .glass-panel.hidden {
            opacity: 0;
            transform: scale(0.95);
            pointer-events: none;
            position: absolute;
        }

        h1 {
            font-size: clamp(1.5rem, 5vw, 2.2rem);
            margin-top: 0;
            margin-bottom: 0.5rem;
            text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            font-weight: 800;
        }

        p {
            font-size: clamp(0.9rem, 3vw, 1.1rem);
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.85);
            margin-bottom: 1.5rem;
        }

        textarea {
            width: 100%;
            height: 120px;
            background: rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            color: #fff;
            padding: 1rem;
            font-size: 1.05rem;
            font-family: inherit;
            resize: none;
            outline: none;
            box-sizing: border-box;
            box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }

        textarea:focus {
            border-color: rgba(255, 255, 255, 0.5);
            background: rgba(0, 0, 0, 0.35);
            box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255,255,255,0.1);
        }

        .action-btn {
            background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%);
            border: 1px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
            color: white;
            padding: 14px 32px;
            border-radius: 30px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 1.5rem;
            font-family: inherit;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .action-btn:hover {
            transform: translateY(-2px);
            background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255,255,255,0.2);
        }

        /* Visualization Stage Elements */
        .stage-title {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            font-weight: bold;
            margin-bottom: 2rem;
            text-shadow: 0 2px 15px rgba(0,0,0,0.5);
            transition: color 1s ease;
        }

        .blob-wrapper {
            position: relative;
            width: 250px;
            height: 250px;
            margin: 0 auto 2rem auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .breathing-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid rgba(255,255,255,0.1);
            border-radius: 50%;
            box-sizing: border-box;
            transform: scale(0.8);
            pointer-events: none;
        }

        .focus-blob {
            width: 160px;
            height: 160px;
            background: rgba(183, 28, 28, 0.85); /* Deep red start */
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(255, 255, 255, 0.95);
            padding: 1.5rem;
            text-align: center;
            word-wrap: break-word;
            overflow: hidden;
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            box-shadow: 0 0 40px rgba(255, 0, 50, 0.5), inset 0 0 20px rgba(0,0,0,0.6);
            transition: background 3s ease, box-shadow 3s ease, color 3s ease;
            
            /* Chaotic initial animation */
            animation: stressMorph 3s linear infinite, stressVibrate 0.15s linear infinite;
        }

        .blob-text {
            font-size: clamp(0.8rem, 3.5vw, 1rem);
            font-weight: 600;
            line-height: 1.4;
            max-height: 100%;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            transition: opacity 2s ease;
        }

        .sub-instruction {
            opacity: 0.6;
            font-size: 0.95rem;
        }

        #restart-btn {
            display: none;
            margin-top: 1rem;
        }

        /* Animations */
        @keyframes stressMorph {
            0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
            34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
            67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
            100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }

        @keyframes stressVibrate {
            0% { transform: translate(2px, 2px); }
            25% { transform: translate(-2px, -1px); }
            50% { transform: translate(1px, -2px); }
            75% { transform: translate(-1px, 2px); }
            100% { transform: translate(2px, 2px); }
        }

        @keyframes calmMorph {
            0% { border-radius: 45% 55% 45% 55% / 55% 45% 55% 45%; }
            50% { border-radius: 55% 45% 55% 45% / 45% 55% 45% 55%; }
            100% { border-radius: 45% 55% 45% 55% / 55% 45% 55% 45%; }
        }

        @media (max-width: 400px) {
            .glass-panel { padding: 1.5rem; }
            .blob-wrapper { width: 200px; height: 200px; }
            .focus-blob { width: 130px; height: 130px; }
        }

    </style>



    <!-- Background Engine -->
    <div class="bg-container">
        <div class="bg-layer stress-bg" id="bg-stress"></div>
        <div class="bg-layer calm-bg" id="bg-calm"></div>
        <canvas id="particleCanvas"></canvas>
    </div>

    <!-- Interface -->
    <div class="ui-layer">
        
        <!-- Introspection Stage -->
        <main id="stage1" class="glass-panel">
            <h1>رهاساز ذهن ☁️</h1>
            <p>این ابزار طراحی شده تا با استفاده از تکنیک‌های بصری و همگام‌سازی تنفس، فشار روانی را کاهش دهد</p>
            <p style="font-size: 0.9rem; opacity: 0.8; margin-top: -10px;">چه افکاری در حال حاضر ذهن شما را آشفته کرده است؟</p>
            <textarea id="anxiety-input" placeholder="آزادانه بنویسید (مثلاً: استرس کارهای انجام نشده، نگرانی از آینده...)"></textarea>
            <button class="action-btn" onclick="startDefusion()">شروع فرآیند رهاسازی</button>
        </main>

        <!-- Visualization & Breathing Stage -->
        <main id="stage2" class="glass-panel hidden">
            <h2 id="instruction" class="stage-title">...آماده شوید</h2>
            
            <div class="blob-wrapper">
                <div id="ring" class="breathing-ring"></div>
                <div id="blob" class="focus-blob">
                    <span id="blob-text" class="blob-text"></span>
                </div>
            </div>
            
            <p id="sub-instruction" class="sub-instruction">ارتباط خود را با شکل حفظ کنید و با ریتم نفس بکشید</p>
            <button id="restart-btn" class="action-btn" onclick="resetApp()">دوباره</button>
        </main>

    </div>

    <script>
        // -- DOM Elements --
        const stage1 = document.getElementById('stage1');
        const stage2 = document.getElementById('stage2');
        const inputField = document.getElementById('anxiety-input');
        const blobText = document.getElementById('blob-text');
        const instruction = document.getElementById('instruction');
        const ring = document.getElementById('ring');
        const blob = document.getElementById('blob');
        const bgStress = document.getElementById('bg-stress');
        const bgCalm = document.getElementById('bg-calm');
        const subInstruction = document.getElementById('sub-instruction');
        const restartBtn = document.getElementById('restart-btn');
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');

        // -- State Logic --
        let globalState = 'STRESS'; // STRESS, EASING1, EASING2, CALM
        const TOTAL_CYCLES = 4;
        let currentCycle = 0;
        let breathingTimer;

        // The 4-7-8 Breathing Technique (modified slightly for UX smoothness)
        // Duration in ms. Scale represents the breathing ring size.
        const breathPhases = [
            { text: 'دم...', duration: 4000, scale: 1.5, ringColor: 'rgba(255,255,255,0.7)' },
            { text: 'نگه دارید...', duration: 5000, scale: 1.5, ringColor: 'rgba(100,200,255,0.7)' },
            { text: 'بازدم...', duration: 7000, scale: 0.8, ringColor: 'rgba(255,255,255,0.1)' }
        ];

        // -- Particle Engine --
        let particles = [];
        const numParticles = 80;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 10;
                this.size = Math.random() * 2 + 0.5;
                this.speed = Math.random() * 1.5 + 0.5;
                this.angle = Math.random() * Math.PI * 2;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            update() {
                if (globalState === 'STRESS') {
                    // Fast, chaotic upwards
                    this.y -= this.speed * 2.5;
                    this.x += (Math.random() - 0.5) * 4;
                } else if (globalState === 'EASING1') {
                    // Slowing down, drifting
                    this.y -= this.speed * 1.5;
                    this.x += Math.sin(this.angle) * 2;
                    this.angle += 0.1;
                } else if (globalState === 'EASING2') {
                    this.y -= this.speed * 1;
                    this.x += Math.sin(this.angle) * 1;
                    this.angle += 0.05;
                } else if (globalState === 'CALM') {
                    // Gentle float, firefly-like
                    this.y -= this.speed * 0.4;
                    this.x += Math.sin(this.angle) * 0.5;
                    this.angle += 0.02;
                    this.opacity = Math.random() * 0.8 + 0.2; // slight twinkle
                }

                if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
                    this.reset();
                }
            }
            draw() {
                ctx.fillStyle = \`rgba(255, 255, 255, \${this.opacity})\`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // -- App Logic --

        function startDefusion() {
            let userText = inputField.value.trim();
            if(!userText) userText = "تنش درونی";
            
            blobText.innerText = userText;

            // Transition UI
            stage1.style.opacity = '0';
            setTimeout(() => {
                stage1.style.display = 'none';
                stage2.classList.remove('hidden');
                
                // Allow CSS transition to compute
                requestAnimationFrame(() => {
                    stage2.style.opacity = '1';
                    stage2.style.transform = 'scale(1)';
                    setTimeout(() => {
                        runBreathingCycle(0);
                    }, 1500);
                });
            }, 800);
        }

        function runBreathingCycle(phaseIndex) {
            if (currentCycle >= TOTAL_CYCLES) {
                finalizeSession();
                return;
            }

            const phase = breathPhases[phaseIndex];
            
            // Apply UI Changes
            instruction.innerText = phase.text;
            
            // Animate Ring exactly tied to phase duration
            ring.style.transition = \`transform \${phase.duration}ms ease-in-out, border-color \${phase.duration}ms ease-in-out\`;
            ring.style.transform = \`scale(\${phase.scale})\`;
            ring.style.borderColor = phase.ringColor;

            // Progressive visual smoothing on Exhale / Start of new Cycle
            if (phaseIndex === 0) {
                updateVisualDefusion(currentCycle);
            }

            breathingTimer = setTimeout(() => {
                let nextPhaseIndex = phaseIndex + 1;
                if (nextPhaseIndex >= breathPhases.length) {
                    nextPhaseIndex = 0;
                    currentCycle++;
                }
                runBreathingCycle(nextPhaseIndex);
            }, phase.duration);
        }

        function updateVisualDefusion(cycle) {
            const progress = cycle / (TOTAL_CYCLES - 1); // 0 to 1
            
            // Background Crossfade
            bgStress.style.opacity = 1 - progress;
            bgCalm.style.opacity = progress;

            if (cycle === 1) {
                globalState = 'EASING1';
                blob.style.animation = 'stressMorph 4s linear infinite, stressVibrate 0.4s linear infinite';
                blob.style.background = 'rgba(100, 20, 80, 0.8)';
                blob.style.boxShadow = '0 0 30px rgba(150,50,150,0.5), inset 0 0 20px rgba(0,0,0,0.3)';
            } else if (cycle === 2) {
                globalState = 'EASING2';
                // Stop vibrate, smooth morph
                blob.style.animation = 'calmMorph 5s ease-in-out infinite';
                blob.style.background = 'rgba(60, 100, 160, 0.8)';
                blob.style.boxShadow = '0 0 40px rgba(100,150,250,0.5)';
                blobText.style.opacity = '0.4';
                blobText.style.transform = 'scale(0.95)';
            } else if (cycle === 3) {
                blob.style.animation = 'calmMorph 6s ease-in-out infinite';
                blob.style.background = 'rgba(150, 200, 240, 0.9)';
                blob.style.boxShadow = '0 0 50px rgba(150,200,250,0.8), inset 0 0 15px rgba(255,255,255,0.8)';
                blobText.style.opacity = '0';
            }
        }

        function finalizeSession() {
            globalState = 'CALM';
            instruction.innerText = "رها شد 🌱";
            subInstruction.innerText = "شما با موفقیت ذهن خود را آرام کردید";
            
            // Final Blob form (Glowing orb of light)
            blob.style.animation = 'calmMorph 8s ease-in-out infinite';
            blob.style.background = 'rgba(255, 255, 255, 0.95)';
            blob.style.boxShadow = '0 0 60px rgba(255,255,255,1), inset 0 0 30px rgba(255,255,255,1)';
            blob.innerHTML = '<span style="font-size: 3rem; text-shadow: none;">✨</span>';
            
            // Hide breathing ring
            ring.style.opacity = '0';
            
            setTimeout(() => {
                restartBtn.style.display = 'inline-block';
            }, 1000);
        }

        function resetApp() {
            currentCycle = 0;
            globalState = 'STRESS';
            inputField.value = '';
            clearTimeout(breathingTimer);
            
            // Reset Styles
            stage2.classList.add('hidden');
            stage2.style.opacity = '0';
            stage2.style.transform = 'scale(0.95)';
            
            bgStress.style.opacity = '1';
            bgCalm.style.opacity = '0';
            
            ring.style.opacity = '1';
            ring.style.transform = 'scale(0.8)';
            ring.style.transition = 'none'; // quick structural reset
            
            blob.style.animation = 'stressMorph 3s linear infinite, stressVibrate 0.15s linear infinite';
            blob.style.background = 'rgba(183, 28, 28, 0.85)';
            blob.style.boxShadow = '0 0 40px rgba(255, 0, 50, 0.5), inset 0 0 20px rgba(0,0,0,0.6)';
            blob.innerHTML = '<span id="blob-text" class="blob-text"></span>';
            
            subInstruction.innerText = "ارتباط خود را با شکل حفظ کنید و با ریتم نفس بکشید";
            restartBtn.style.display = 'none';

            // Reassign text binding
            window.blobText = document.getElementById('blob-text');

            setTimeout(() => {
                stage1.style.display = 'flex';
                requestAnimationFrame(() => {
                    stage1.style.opacity = '1';
                });
            }, 800);
        }

    <\/script>

`,className:"w-html-embed"}),e.jsx(s,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:e.jsxs(s,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[e.jsx(d,{children:e.jsx(h,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(y,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(s,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:e.jsx(d,{children:e.jsx(h,{children:e.jsx(S,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:e.jsxs(N,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[e.jsx(i,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(c,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(x,{className:"w-text",children:"فروشگاه"})})}),e.jsx(i,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(c,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(i,{"data-ws-index":"2",className:"w-menu-item",children:e.jsx(T,{children:e.jsx(c,{type:"button",href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(x,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),e.jsx(i,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(i,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),e.jsxs(s,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[e.jsx(s,{className:"w-box",children:e.jsx(s,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:e.jsx(c,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),e.jsx(d,{children:e.jsx(h,{children:e.jsxs(P,{children:[e.jsx(E,{children:e.jsx(C,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:e.jsx(m,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx(M,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:e.jsxs(A,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[e.jsxs(s,{className:"w-box cx6c9kw c1nd8hlk",children:[e.jsx(d,{children:e.jsx(h,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(y,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(B,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:e.jsx(m,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),e.jsx(s,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:e.jsxs(I,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),e.jsx(c,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),V=a=>{const{origin:t,pathname:o,search:n}=new URL(a);return`${t}${o}${n}`},$=g.memo(({pageKey:a,system:t})=>e.jsx(O,{system:t},a),(a,t)=>a.pageKey===t.pageKey),D=({data:a})=>{const{system:t,resources:o,url:n,pageMeta:p}=a,f=V(n),w=g.useMemo(()=>({imageLoader:b,assetBaseUrl:l,resources:o,breakpoints:L,onError:console.error}),[o]);return e.jsxs(v.Provider,{value:w,children:[e.jsx(j.Provider,{value:n,children:e.jsx($,{pageKey:f,system:t})}),e.jsx(z,{url:n,pageMeta:p,siteName:u,imageLoader:b,assetBaseUrl:l}),e.jsx(k,{children:p.title})]})},U=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),H=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:u};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:b({src:`${l}${_}`})}),R.map(t=>e.jsx("link",{rel:"preload",href:`${l}${t}`,as:"font",crossOrigin:"anonymous"},t)),F.map(t=>e.jsx("link",{rel:"preload",href:`${l}${t}`,as:"image"},t))]})},G=Object.freeze(Object.defineProperty({__proto__:null,Head:H},Symbol.toStringTag,{value:"Module"})),ne={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-23/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:U}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-23/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:G}}};export{ne as configValuesSerialized};
