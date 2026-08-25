import{j as e,r,a as i,i as s,R as p,b as u,P as f,c as g,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],w=o=>e.jsx("body",{className:"w-element",children:e.jsx(v,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🧮 ماشین حساب احساسات</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;900&display=swap');

        body {
            margin: 0;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Vazirmatn', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .floating-emoji {
            position: absolute;
            font-size: 2rem;
            animation: float 20s infinite linear;
            opacity: 0.2;
            user-select: none;
        }

        @keyframes float {
            from { transform: translateY(100vh) rotate(0deg); }
            to { transform: translateY(-100vh) rotate(360deg); }
        }

        .calculator {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            border-radius: 50px;
            padding: 40px;
            box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            width: 400px;
            position: relative;
            z-index: 1;
            transform-style: preserve-3d;
            animation: floatCalc 6s infinite ease-in-out;
        }

        @keyframes floatCalc {
            0%, 100% { transform: translateY(0) rotateX(0); }
            50% { transform: translateY(-20px) rotateX(5deg); }
        }

        .calculator::before {
            content: '';
            position: absolute;
            top: -20px;
            left: -20px;
            right: -20px;
            bottom: -20px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            border-radius: 60px;
            z-index: -1;
            filter: blur(30px);
            opacity: 0.5;
            animation: borderGlow 8s infinite;
        }

        @keyframes borderGlow {
            0%, 100% { filter: blur(30px) hue-rotate(0deg); }
            50% { filter: blur(40px) hue-rotate(180deg); }
        }

        .title {
            text-align: center;
            color: white;
            font-size: 2rem;
            margin-bottom: 30px;
            text-shadow: 0 0 20px rgba(255,255,255,0.5);
            font-weight: 900;
        }

        .emotion-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-bottom: 30px;
        }

        .emotion-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 20px 10px;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s;
            backdrop-filter: blur(5px);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .emotion-btn:hover {
            transform: scale(1.1) rotate(2deg);
            background: rgba(255, 255, 255, 0.2);
            border-color: white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .emotion-btn.selected {
            background: rgba(255, 255, 255, 0.3);
            border-color: gold;
            box-shadow: 0 0 30px gold;
        }

        .emoji {
            font-size: 2.5rem;
            filter: drop-shadow(0 0 10px currentColor);
        }

        .display {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 30px;
            padding: 25px;
            margin-bottom: 30px;
            color: white;
            text-align: center;
            font-size: 1.3rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5px);
            min-height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .result-emoji {
            font-size: 4rem;
            animation: pop 0.5s;
        }

        @keyframes pop {
            0% { transform: scale(0); }
            80% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        .result-text {
            font-size: 1.5rem;
            font-weight: bold;
            margin: 10px 0;
            background: linear-gradient(45deg, gold, orange);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .calculate-btn {
            background: linear-gradient(45deg, #ff6b6b, #feca57);
            border: none;
            color: white;
            font-size: 1.5rem;
            padding: 15px 30px;
            border-radius: 50px;
            width: 100%;
            cursor: pointer;
            font-family: 'Vazirmatn', sans-serif;
            font-weight: bold;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
        }

        .calculate-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s;
        }

        .calculate-btn:hover::before {
            left: 100%;
        }

        .calculate-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(255,107,107,0.5);
        }

        .mood-meter {
            width: 100%;
            height: 20px;
            background: rgba(255,255,255,0.2);
            border-radius: 10px;
            margin: 20px 0;
            overflow: hidden;
        }

        .mood-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1);
            border-radius: 10px;
            transition: width 0.5s;
            position: relative;
        }

        .mood-fill::after {
            content: '✨';
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 12px;
        }
    </style>


    <div class="calculator">
        <h1 class="title">🧮 ماشین حساب احساسات</h1>
        
        <div class="emotion-grid" id="emotionGrid">
            <div class="emotion-btn" data-emotion="شادی" data-value="10">
                <span class="emoji">😊</span>
                <span>شادی</span>
            </div>
            <div class="emotion-btn" data-emotion="عشق" data-value="9">
                <span class="emoji">❤️</span>
                <span>عشق</span>
            </div>
            <div class="emotion-btn" data-emotion="هیجان" data-value="8">
                <span class="emoji">🤩</span>
                <span>هیجان</span>
            </div>
            <div class="emotion-btn" data-emotion="آرامش" data-value="7">
                <span class="emoji">😌</span>
                <span>آرامش</span>
            </div>
            <div class="emotion-btn" data-emotion="تعجب" data-value="6">
                <span class="emoji">😲</span>
                <span>تعجب</span>
            </div>
            <div class="emotion-btn" data-emotion="نگرانی" data-value="5">
                <span class="emoji">😟</span>
                <span>نگرانی</span>
            </div>
            <div class="emotion-btn" data-emotion="خستگی" data-value="4">
                <span class="emoji">😴</span>
                <span>خستگی</span>
            </div>
            <div class="emotion-btn" data-emotion="غم" data-value="3">
                <span class="emoji">😢</span>
                <span>غم</span>
            </div>
            <div class="emotion-btn" data-emotion="عصبانیت" data-value="2">
                <span class="emoji">😠</span>
                <span>عصبانیت</span>
            </div>
        </div>

        <div class="display" id="display">
            <div>روی احساسات کلیک کن</div>
            <div class="mood-meter">
                <div class="mood-fill" id="moodFill" style="width: 0%"></div>
            </div>
        </div>

        <button class="calculate-btn" onclick="calculateMood()">
            محاسبه حالت روحی ✨
        </button>
    </div>

    <script>
        let selectedEmotions = [];
        const emotionBtns = document.querySelectorAll('.emotion-btn');
        const display = document.getElementById('display');
        const moodFill = document.getElementById('moodFill');

        emotionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const emotion = this.dataset.emotion;
                const value = parseInt(this.dataset.value);
                
                if (this.classList.contains('selected')) {
                    this.classList.remove('selected');
                    selectedEmotions = selectedEmotions.filter(e => e.emotion !== emotion);
                } else {
                    if (selectedEmotions.length < 3) {
                        this.classList.add('selected');
                        selectedEmotions.push({ emotion, value });
                    } else {
                        alert('حداکثر ۳ احساس می‌تونی انتخاب کنی!');
                    }
                }
                
                updateDisplay();
            });
        });

        function updateDisplay() {
            if (selectedEmotions.length === 0) {
                display.innerHTML = \`
                    <div>روی احساسات کلیک کن...</div>
                    <div class="mood-meter">
                        <div class="mood-fill" id="moodFill" style="width: 0%"></div>
                    </div>
                \`;
                return;
            }

            const totalValue = selectedEmotions.reduce((sum, e) => sum + e.value, 0);
            const maxPossible = selectedEmotions.length * 10;
            const percentage = (totalValue / maxPossible) * 100;

            let emoji = '';
            if (percentage >= 80) emoji = '🤩';
            else if (percentage >= 60) emoji = '😊';
            else if (percentage >= 40) emoji = '😐';
            else if (percentage >= 20) emoji = '😔';
            else emoji = '😫';

            display.innerHTML = \`
                <div>احساسات انتخاب شده: \${selectedEmotions.map(e => e.emotion).join(' + ')}</div>
                <div class="result-emoji">\${emoji}</div>
                <div class="mood-meter">
                    <div class="mood-fill" style="width: \${percentage}%"></div>
                </div>
            \`;
        }

        function calculateMood() {
            if (selectedEmotions.length === 0) {
                alert('اول چند تا احساس انتخاب کن!');
                return;
            }

            const totalValue = selectedEmotions.reduce((sum, e) => sum + e.value, 0);
            const avgValue = totalValue / selectedEmotions.length;
            
            let result = '';
            let resultEmoji = '';
            let resultColor = '';

            if (avgValue >= 8) {
                result = 'روحت عالیه! به این حالت می‌گن "پرواز روح" ✨';
                resultEmoji = '🌈';
                resultColor = 'gold';
            } else if (avgValue >= 6) {
                result = 'حالت خوبه، ولی می‌تونه بهترم بشه!';
                resultEmoji = '🌤️';
                resultColor = 'lightblue';
            } else if (avgValue >= 4) {
                result = 'یکم خسته‌ای، یه استراحت کوچولو خوبه';
                resultEmoji = '😴';
                resultColor = 'gray';
            } else {
                result = 'به یه کمک کوچولو نیاز داری، نگران نباش فردا روز بهتری‌ه';
                resultEmoji = '🤗';
                resultColor = 'orange';
            }

            display.innerHTML = \`
                <div class="result-emoji">\${resultEmoji}</div>
                <div class="result-text">\${result}</div>
                <div style="font-size: 1rem; margin-top: 10px;">امتیاز: \${avgValue.toFixed(1)}</div>
                <div class="mood-meter">
                    <div class="mood-fill" style="width: \${(avgValue/10)*100}%; background: \${resultColor}"></div>
                </div>
            \`;

            // ایجاد افکت کنفتی
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.style.position = 'fixed';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = '-10px';
                    confetti.style.fontSize = '2rem';
                    confetti.style.animation = \`float \${5 + Math.random() * 5}s linear\`;
                    confetti.style.zIndex = '1000';
                    confetti.innerHTML = ['✨', '🌟', '💫', '⭐', '🌈'][Math.floor(Math.random() * 5)];
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 5000);
                }, i * 100);
            }
        }

        // ایجاد ایموجی‌های شناور
        const emojis = ['😊', '❤️', '🤩', '😌', '😲', '😟', '😴', '😢', '😠', '✨', '🌟', '💫'];
        for (let i = 0; i < 30; i++) {
            const floatingEmoji = document.createElement('div');
            floatingEmoji.className = 'floating-emoji';
            floatingEmoji.style.left = Math.random() * 100 + '%';
            floatingEmoji.style.animationDelay = Math.random() * 10 + 's';
            floatingEmoji.style.animationDuration = 15 + Math.random() * 20 + 's';
            floatingEmoji.style.fontSize = (1 + Math.random() * 3) + 'rem';
            floatingEmoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            document.body.appendChild(floatingEmoji);
        }
    <\/script>

`,className:"w-html-embed"})}),E=o=>{const{origin:t,pathname:n,search:a}=new URL(o);return`${t}${n}${a}`},z=r.memo(({pageKey:o,system:t})=>e.jsx(w,{system:t},o),(o,t)=>o.pageKey===t.pageKey),k=({data:o})=>{const{system:t,resources:n,url:a,pageMeta:l}=o,c=E(a),m=r.useMemo(()=>({imageLoader:s,assetBaseUrl:i,resources:n,breakpoints:h,onError:console.error}),[n]);return e.jsxs(p.Provider,{value:m,children:[e.jsx(u.Provider,{value:a,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(f,{url:a,pageMeta:l,siteName:d,imageLoader:s,assetBaseUrl:i}),e.jsx(g,{children:l.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),P=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${i}${x}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),j.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),_={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled23/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled23/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{_ as configValuesSerialized};
