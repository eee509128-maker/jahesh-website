import{j as c,r as g,a as o,i as p,R as w,b as j,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m,C as N,P as T,A as a,$ as P}from"../chunks/chunk-CJTZdOzc.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";import{n as r}from"../chunks/chunk-CRUfvgxf.js";import{n as y}from"../chunks/chunk-RvLaVuUh.js";import{g as e}from"../chunks/chunk-BKjYWtT8.js";import{n as C}from"../chunks/chunk-Bx5-62GJ.js";import{d as u}from"../chunks/chunk-ClMSjCia.js";import{d as S,i}from"../chunks/chunk-DWuKyx5h.js";import{O as L,x as B,M as E,R as F,$ as _}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const b="jahesh",M=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],R="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",$=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],A=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],I=n=>c.jsxs("body",{className:"w-element",children:[c.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تمرکز سنج عصبی | Neural Focus Nexus</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;400;700&display=swap');

        :root {
            --bg-color: #0f0c29;
            --primary: #00d2ff;
            --secondary: #3a7bd5;
            --accent: #ff0076;
            --glass: rgba(255, 255, 255, 0.05);
            --border: rgba(255, 255, 255, 0.1);
            --text: #ffffff;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            user-select: none;
        }

        body {
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            height: 100vh;
            font-family: 'Vazirmatn', sans-serif;
            color: var(--text);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 1000px;
        }

        /* پس‌زمینه متحرک ذرات */
        .particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-image: 
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 30px 30px;
            animation: moveBg 60s linear infinite;
        }

        @keyframes moveBg {
            0% { background-position: 0 0; }
            100% { background-position: 100px 100px; }
        }

        /* کانتینر اصلی */
        .interface-container {
            position: relative;
            width: 90%;
            max-width: 500px;
            height: 600px;
            transform-style: preserve-3d;
            transition: transform 0.1s ease-out;
        }

        /* کارت شیشه‌ای */
        .card {
            background: var(--glass);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--border);
            border-radius: 30px;
            padding: 40px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
            z-index: 10;
        }

        /* حلقه انرژی (تایمر بصری) */
        .energy-ring-container {
            position: relative;
            width: 250px;
            height: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }

        .ring {
            position: absolute;
            border-radius: 50%;
            border: 2px solid transparent;
            border-top-color: var(--primary);
            border-bottom-color: var(--secondary);
            box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
            transition: all 0.5s ease;
        }

        .ring:nth-child(1) { width: 100%; height: 100%; animation: spin 10s linear infinite; border-width: 3px; }
        .ring:nth-child(2) { width: 80%; height: 80%; animation: spin-reverse 7s linear infinite; border-left-color: var(--accent); border-width: 5px; opacity: 0.8; }
        .ring:nth-child(3) { width: 60%; height: 60%; animation: spin 4s linear infinite; border-right-color: var(--text); opacity: 0.6; }

        .ring.active {
            box-shadow: 0 0 40px var(--primary), inset 0 0 20px var(--secondary);
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }

        .timer-display {
            position: absolute;
            font-size: 3.5rem;
            font-weight: 700;
            text-shadow: 0 0 15px var(--primary);
            letter-spacing: 2px;
        }

        .status-text {
            font-size: 1rem;
            opacity: 0.7;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-top: 10px;
        }

        /* کنترل‌ها */
        .controls {
            display: flex;
            gap: 20px;
            width: 100%;
            justify-content: center;
            margin-bottom: 20px;
        }

        .btn {
            background: linear-gradient(45deg, var(--secondary), var(--primary));
            border: none;
            padding: 15px 30px;
            border-radius: 50px;
            color: white;
            font-family: 'Vazirmatn', sans-serif;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 20px rgba(0, 210, 255, 0.3);
            position: relative;
            overflow: hidden;
            z-index: 1;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 0; height: 100%;
            background: rgba(255,255,255,0.2);
            transition: width 0.3s ease;
            z-index: -1;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0, 210, 255, 0.5);
        }
        
        .btn:hover::before { width: 100%; }

        .btn-reset {
            background: transparent;
            border: 2px solid var(--border);
            box-shadow: none;
        }
        
        .btn-reset:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: transparent;
            box-shadow: 0 0 15px rgba(255, 0, 118, 0.4);
        }

        /* ورودی تسک */
        .task-input {
            width: 100%;
            background: rgba(0, 0, 0, 0.2);
            border: none;
            border-bottom: 2px solid var(--border);
            padding: 15px;
            color: white;
            font-family: 'Vazirmatn', sans-serif;
            font-size: 1.1rem;
            text-align: center;
            transition: 0.3s;
        }

        .task-input:focus {
            outline: none;
            border-bottom-color: var(--primary);
            background: rgba(0, 0, 0, 0.4);
        }

        /* افکت‌های نوری محیطی */
        .glow-point {
            position: absolute;
            width: 150px;
            height: 150px;
            background: var(--accent);
            filter: blur(80px);
            border-radius: 50%;
            opacity: 0.4;
            z-index: -1;
            animation: float 5s ease-in-out infinite alternate;
        }
        
        .glow-1 { top: -50px; right: -50px; background: var(--primary); }
        .glow-2 { bottom: -50px; left: -50px; background: var(--accent); }

        @keyframes float {
            0% { transform: translate(0, 0); }
            100% { transform: translate(20px, 20px); }
        }

    </style>



    <div class="particles"></div>

    <div class="interface-container" id="interface">
        <div class="glow-point glow-1"></div>
        <div class="glow-point glow-2"></div>

        <div class="card">
            <input type="text" class="task-input" placeholder="هدف تمرکز خود را بنویسید..." id="taskInput">
            
            <div class="energy-ring-container">
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="timer-display" id="timer">25:00</div>
            </div>
            
            <div class="status-text" id="status">آماده برای شروع</div>

            <div class="controls">
                <button class="btn" id="startBtn">شروع تمرکز</button>
                <button class="btn btn-reset" id="resetBtn">بازنشانی</button>
            </div>
        </div>
    </div>

    <script>
        // Logic & Interaction
        const timerDisplay = document.getElementById('timer');
        const startBtn = document.getElementById('startBtn');
        const resetBtn = document.getElementById('resetBtn');
        const statusText = document.getElementById('status');
        const rings = document.querySelectorAll('.ring');
        const interfaceContainer = document.getElementById('interface');

        let countdown;
        let isRunning = false;
        let timeLeft = 25 * 60; // 25 minutes in seconds
        let isFocusMode = true;

        // فرمت زمان
        function displayTime(seconds) {
            const min = Math.floor(seconds / 60);
            const sec = seconds % 60;
            return \`\${min < 10 ? '0' : ''}\${min}:\${sec < 10 ? '0' : ''}\${sec}\`;
        }

        // شروع / توقف
        function toggleTimer() {
            if (isRunning) {
                clearInterval(countdown);
                isRunning = false;
                startBtn.textContent = 'ادامه';
                statusText.textContent = 'متوقف شده';
                rings.forEach(r => {
                    r.style.animationPlayState = 'paused';
                    r.classList.remove('active');
                });
            } else {
                isRunning = true;
                startBtn.textContent = 'توقف';
                statusText.textContent = isFocusMode ? 'در حال تمرکز عمیق' : 'استراحت و بازیابی';
                rings.forEach(r => {
                    r.style.animationPlayState = 'running';
                    r.classList.add('active');
                });
                
                countdown = setInterval(() => {
                    timeLeft--;
                    timerDisplay.textContent = displayTime(timeLeft);
                    
                    // تغییر سرعت چرخش با کاهش زمان
                    if(timeLeft < 300 && isFocusMode) {
                        rings.forEach(r => r.style.borderColor = 'var(--accent)');
                        statusText.style.color = 'var(--accent)';
                    }

                    if (timeLeft <= 0) {
                        clearInterval(countdown);
                        timerFinished();
                    }
                }, 1000);
            }
        }

        // پایان تایمر
        function timerFinished() {
            isRunning = false;
            rings.forEach(r => r.classList.remove('active'));
            
            // افکت بصری پایان
            document.body.style.background = isFocusMode ? '#2c001e' : '#001e1d';
            setTimeout(() => {
                 document.body.style.background = '';
            }, 1000);

            if (isFocusMode) {
                statusText.textContent = "زمان استراحت!";
                timeLeft = 5 * 60;
                isFocusMode = false;
                startBtn.textContent = "شروع استراحت";
            } else {
                statusText.textContent = "بازگشت به کار";
                timeLeft = 25 * 60;
                isFocusMode = true;
                startBtn.textContent = "شروع تمرکز";
                rings.forEach(r => r.style.borderColor = ''); // ریست رنگ
                statusText.style.color = '';
            }
            timerDisplay.textContent = displayTime(timeLeft);
        }

        // بازنشانی
        function resetTimer() {
            clearInterval(countdown);
            isRunning = false;
            isFocusMode = true;
            timeLeft = 25 * 60;
            timerDisplay.textContent = "25:00";
            startBtn.textContent = "شروع تمرکز";
            statusText.textContent = "آماده برای شروع";
            rings.forEach(r => {
                r.style.animationPlayState = 'paused';
                r.classList.remove('active');
                r.style.borderColor = '';
            });
            statusText.style.color = '';
        }

        // افکت پارالاکس سه بعدی (حرکت با موس)
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            interfaceContainer.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
        });

        // بازگشت به حالت عادی وقتی موس خارج می‌شود
        document.addEventListener('mouseleave', () => {
             interfaceContainer.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
        });

        // اتصال دکمه‌ها
        startBtn.addEventListener('click', toggleTimer);
        resetBtn.addEventListener('click', resetTimer);

        // تنظیم اولیه انیمیشن‌ها روی توقف
        rings.forEach(r => r.style.animationPlayState = 'paused');

    <\/script>

`,className:"w-html-embed"}),c.jsx(r,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:c.jsxs(r,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(r,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:c.jsx(d,{children:c.jsx(m,{children:c.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:c.jsxs(T,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[c.jsx(a,{"data-ws-index":"0",className:"w-menu-item",children:c.jsx(e,{type:"button",href:"/jaheshkala",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(y,{className:"w-text",children:"فروشگاه"})})}),c.jsx(a,{"data-ws-index":"1",className:"w-menu-item",children:c.jsx(e,{href:"/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(a,{"data-ws-index":"2",className:"w-menu-item",children:c.jsx(P,{children:c.jsx(e,{type:"button",href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(y,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),c.jsx(a,{"data-ws-index":"3",className:"w-menu-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(a,{"data-ws-index":"4",className:"w-menu-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),c.jsxs(r,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[c.jsx(r,{className:"w-box",children:c.jsx(r,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:c.jsx(e,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),c.jsx(d,{children:c.jsx(m,{children:c.jsxs(L,{children:[c.jsx(B,{children:c.jsx(C,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:c.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(E,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:c.jsxs(F,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[c.jsxs(r,{className:"w-box cx6c9kw c1nd8hlk",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(_,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:c.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),c.jsx(r,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:c.jsxs(S,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[c.jsx(i,{className:"w-list-item",children:c.jsx(e,{href:"/jaheshkala",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),c.jsx(i,{className:"w-list-item",children:c.jsx(e,{href:"/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(i,{className:"w-list-item",children:c.jsx(e,{href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),c.jsx(i,{className:"w-list-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(i,{className:"w-list-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),c.jsx(e,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),O=n=>{const{origin:t,pathname:l,search:s}=new URL(n);return`${t}${l}${s}`},V=g.memo(({pageKey:n,system:t})=>c.jsx(I,{system:t},n),(n,t)=>n.pageKey===t.pageKey),D=({data:n})=>{const{system:t,resources:l,url:s,pageMeta:x}=n,v=O(s),f=g.useMemo(()=>({imageLoader:p,assetBaseUrl:o,resources:l,breakpoints:M,onError:console.error}),[l]);return c.jsxs(w.Provider,{value:f,children:[c.jsx(j.Provider,{value:s,children:c.jsx(V,{pageKey:v,system:t})}),c.jsx(z,{url:s,pageMeta:x,siteName:b,imageLoader:p,assetBaseUrl:o}),c.jsx(k,{children:x.title})]})},H=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),U=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:b};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),c.jsx("link",{rel:"icon",href:p({src:`${o}${R}`})}),$.map(t=>c.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),A.map(t=>c.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},W=Object.freeze(Object.defineProperty({__proto__:null,Head:U},Symbol.toStringTag,{value:"Module"})),sc={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-17/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-17/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:W}}};export{sc as configValuesSerialized};
