import{j as e,r as l,a as o,i as s,R as m,b as g,P as h,c as u,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],E=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌙 تعبیرگر رویای نقطه‌ای | Dream Pointillism</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Vazir', 'Tahoma', sans-serif;
            background: #0a0a0a;
            color: #fff;
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* پس‌زمینه کیهانی */
        .cosmic-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
        }

        .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            animation: star-twinkle 5s infinite;
        }

        @keyframes star-twinkle {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }

        .container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
        }

        /* هدر رویایی */
        .dream-header {
            text-align: center;
            margin: 50px 0;
            position: relative;
        }

        .dream-header h1 {
            font-size: 4em;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: title-glow 3s ease-in-out infinite;
            text-shadow: 0 0 30px rgba(78, 205, 196, 0.5);
        }

        @keyframes title-glow {
            0%, 100% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(30deg); }
        }

        .dream-subtitle {
            color: #888;
            font-size: 1.2em;
            margin-top: 20px;
        }

        /* ماشین رویا */
        .dream-machine {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin: 40px 0;
        }

        /* بخش ورودی رویا */
        .dream-input-panel {
            background: rgba(20, 20, 40, 0.7);
            backdrop-filter: blur(10px);
            border: 2px solid #4ecdc4;
            border-radius: 40px;
            padding: 40px;
            box-shadow: 0 0 50px rgba(78, 205, 196, 0.3);
            transition: all 0.3s;
        }

        .dream-input-panel:hover {
            box-shadow: 0 0 80px rgba(78, 205, 196, 0.5);
            transform: translateY(-5px);
        }

        .dream-input-panel h2 {
            color: #4ecdc4;
            font-size: 2em;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .dream-textarea {
            width: 100%;
            min-height: 200px;
            background: rgba(0, 0, 0, 0.5);
            border: 2px solid #4ecdc4;
            border-radius: 30px;
            padding: 25px;
            color: #fff;
            font-size: 18px;
            line-height: 1.8;
            resize: vertical;
            font-family: 'Vazir', 'Tahoma', sans-serif;
            transition: all 0.3s;
        }

        .dream-textarea:focus {
            outline: none;
            border-color: #ff6b6b;
            box-shadow: 0 0 30px rgba(255, 107, 107, 0.3);
        }

        /* تنظیمات هنری */
        .art-settings {
            margin: 30px 0;
        }

        .setting-group {
            margin: 20px 0;
        }

        .setting-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            color: #4ecdc4;
        }

        .dream-slider {
            width: 100%;
            height: 8px;
            background: rgba(78, 205, 196, 0.2);
            border-radius: 4px;
            appearance: none;
        }

        .dream-slider::-webkit-slider-thumb {
            appearance: none;
            width: 25px;
            height: 25px;
            background: #4ecdc4;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 0 20px #4ecdc4;
            transition: all 0.3s;
        }

        .dream-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
            background: #ff6b6b;
        }

        /* دکمه جادویی */
        .magic-button {
            position: relative;
            width: 100%;
            padding: 25px;
            background: linear-gradient(45deg, #4ecdc4, #45b7d1, #96ceb4);
            border: none;
            border-radius: 60px;
            color: #fff;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.3s;
            margin: 30px 0;
            text-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        .magic-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
        }

        .magic-button:hover::before {
            left: 100%;
        }

        .magic-button:hover {
            transform: scale(1.02);
            box-shadow: 0 0 50px rgba(78, 205, 196, 0.5);
        }

        .magic-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        /* بخش نمایش هنر نقطه‌ای */
        .dream-art-panel {
            background: rgba(20, 20, 40, 0.7);
            backdrop-filter: blur(10px);
            border: 2px solid #ff6b6b;
            border-radius: 40px;
            padding: 40px;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.3);
        }

        .dream-art-panel h2 {
            color: #ff6b6b;
            font-size: 2em;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        /* بوم هنر نقطه‌ای */
        .pointillism-canvas-container {
            position: relative;
            width: 100%;
            aspect-ratio: 1;
            background: #000;
            border-radius: 30px;
            overflow: hidden;
            border: 3px solid #ff6b6b;
            box-shadow: 0 0 50px rgba(255, 107, 107, 0.3);
        }

        #pointillismCanvas {
            width: 100%;
            height: 100%;
            display: block;
            background: #0a0a1a;
        }

        /* افسانه رویا */
        .dream-legend {
            margin-top: 30px;
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 20px;
            border-left: 5px solid #4ecdc4;
        }

        .dream-legend h3 {
            color: #4ecdc4;
            margin-bottom: 15px;
        }

        .dream-symbols {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 15px;
        }

        .symbol-item {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(78, 205, 196, 0.1);
            padding: 10px 20px;
            border-radius: 30px;
            border: 1px solid #4ecdc4;
        }

        .symbol-color {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }

        /* ذرات رویا */
        .dream-particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
        }

        .dream-particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            animation: particle-float 10s linear infinite;
            opacity: 0.6;
        }

        @keyframes particle-float {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 0;
            }
            10% {
                opacity: 0.8;
            }
            90% {
                opacity: 0.8;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) scale(0);
                opacity: 0;
            }
        }

        /* وضعیت پردازش */
        .processing-status {
            display: none;
            text-align: center;
            padding: 40px;
        }

        .processing-status.active {
            display: block;
        }

        .dream-spinner {
            width: 80px;
            height: 80px;
            margin: 0 auto 30px;
            border: 5px solid rgba(78, 205, 196, 0.3);
            border-top: 5px solid #ff6b6b;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* راهنمای رنگ‌ها */
        .color-guide {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
            margin: 20px 0;
        }

        .color-item {
            text-align: center;
            font-size: 12px;
        }

        .color-dot {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: 0 auto 5px;
        }
    </style>


    <div class="cosmic-bg">
        <div class="stars" id="stars"></div>
    </div>

    <div class="container">
        <div class="dream-header">
            <h1>🌙 تعبیرگر رویای نقطه‌ای</h1>
            <p class="dream-subtitle">Jahesh BOT</p>
        </div>

        <div class="dream-machine">
            <!-- پنل ورودی -->
            <div class="dream-input-panel">
                <h2>
                    <span>💭</span>
                    روایت رویا
                </h2>
                
                <textarea class="dream-textarea" id="dreamInput" placeholder="مثال: در خواب دیدم که در یک باغ پر از گل‌های آبی پرواز می‌کردم و ماه به من لبخند می‌زد...">در خواب دیدم که در اقیانوسی از نور شناور بودم و ماهی‌های طلایی دورم می‌چرخیدند. آسمان بنفش بود و ستاره‌ها مانند الماس می‌درخشیدند.</textarea>

                <div class="art-settings">
                    <div class="setting-group">
                        <div class="setting-label">
                            <span>🎨 تعداد نقاط</span>
                            <span id="pointCountValue">5000</span>
                        </div>
                        <input type="range" class="dream-slider" id="pointCount" min="1000" max="20000" value="5000" step="100">
                    </div>

                    <div class="setting-group">
                        <div class="setting-label">
                            <span>🌈 تنوع رنگی</span>
                            <span id="colorVarianceValue">70%</span>
                        </div>
                        <input type="range" class="dream-slider" id="colorVariance" min="0" max="100" value="70">
                    </div>

                    <div class="setting-group">
                        <div class="setting-label">
                            <span>✨ پیچیدگی</span>
                            <span id="complexityValue">50%</span>
                        </div>
                        <input type="range" class="dream-slider" id="complexity" min="0" max="100" value="50">
                    </div>

                    <div class="setting-group">
                        <div class="setting-label">
                            <span>🌀 انتزاع</span>
                            <span id="abstractionValue">60%</span>
                        </div>
                        <input type="range" class="dream-slider" id="abstraction" min="0" max="100" value="60">
                    </div>
                </div>

                <button class="magic-button" id="interpretBtn" onclick="interpretDream()">
                    ✨ تعبیر و خلق هنر نقطه‌ای
                </button>

                <div class="color-guide">
                    <div class="color-item">
                        <div class="color-dot" style="background: #ff6b6b;"></div>
                        <span>احساسات</span>
                    </div>
                    <div class="color-item">
                        <div class="color-dot" style="background: #4ecdc4;"></div>
                        <span>آرامش</span>
                    </div>
                    <div class="color-item">
                        <div class="color-dot" style="background: #ffe66d;"></div>
                        <span>شادی</span>
                    </div>
                    <div class="color-item">
                        <div class="color-dot" style="background: #c77dff;"></div>
                        <span>رمز و راز</span>
                    </div>
                    <div class="color-item">
                        <div class="color-dot" style="background: #ff9f1c;"></div>
                        <span>انرژی</span>
                    </div>
                </div>
            </div>

            <!-- پنل هنر -->
            <div class="dream-art-panel">
                <h2>
                    <span>🎨</span>
                    هنر نقطه‌ای رویا
                </h2>

                <div class="pointillism-canvas-container">
                    <canvas id="pointillismCanvas"></canvas>
                    <div class="dream-particles" id="dreamParticles"></div>
                </div>

                <div class="processing-status" id="processingStatus">
                    <div class="dream-spinner"></div>
                    <p>هوش مصنوعی در حال تعبیر رویا و خلق هنر نقطه‌ای...</p>
                    <p style="color: #888; font-size: 14px; margin-top: 10px;" id="processingDetail"></p>
                </div>

                <div class="dream-legend" id="dreamLegend">
                    <h3>📜 تعبیر رویا</h3>
                    <p id="interpretationText">با وارد کردن رویا و کلیک بر روی دکمه، تعبیر و هنر نقطه‌ای آن نمایش داده می‌شود...</p>
                    
                    <div class="dream-symbols" id="dreamSymbols">
                        <!-- نمادها به صورت داینامیک اضافه می‌شوند -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        // ایجاد ستاره‌های پس‌زمینه
        function createStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.style.position = 'absolute';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 'px';
                star.style.height = star.style.width;
                star.style.background = 'white';
                star.style.borderRadius = '50%';
                star.style.animation = \`star-twinkle \${Math.random() * 3 + 2}s infinite\`;
                starsContainer.appendChild(star);
            }
        }

        // ایجاد ذرات رویا
        function createDreamParticles() {
            const container = document.getElementById('dreamParticles');
            container.innerHTML = '';
            
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'dream-particle';
                
                const tx = (Math.random() - 0.5) * 400;
                const ty = (Math.random() - 0.5) * 400;
                particle.style.setProperty('--tx', tx + 'px');
                particle.style.setProperty('--ty', ty + 'px');
                
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 5 + 's';
                particle.style.background = \`hsl(\${Math.random() * 360}, 100%, 70%)\`;
                
                container.appendChild(particle);
            }
        }

        // تنظیم اسلایدرها
        document.getElementById('pointCount').addEventListener('input', function(e) {
            document.getElementById('pointCountValue').textContent = e.target.value;
        });
        
        document.getElementById('colorVariance').addEventListener('input', function(e) {
            document.getElementById('colorVarianceValue').textContent = e.target.value + '%';
        });
        
        document.getElementById('complexity').addEventListener('input', function(e) {
            document.getElementById('complexityValue').textContent = e.target.value + '%';
        });
        
        document.getElementById('abstraction').addEventListener('input', function(e) {
            document.getElementById('abstractionValue').textContent = e.target.value + '%';
        });

        // تابع اصلی تعبیر رویا
        async function interpretDream() {
            const dreamText = document.getElementById('dreamInput').value;
            const interpretBtn = document.getElementById('interpretBtn');
            
            if (!dreamText.trim()) {
                alert('لطفاً رویای خود را وارد کنید!');
                return;
            }

            // نمایش وضعیت پردازش
            interpretBtn.disabled = true;
            document.getElementById('processingStatus').classList.add('active');
            document.getElementById('interpretationText').textContent = 'در حال تعبیر رویا با هوش مصنوعی...';
            
            // مرحله ۱: تحلیل رویا با AI
            document.getElementById('processingDetail').textContent = 'مرحله ۱/۳: تحلیل نمادهای رویا...';
            
            const analysisPrompt = \`به عنوان یک تعبیرگر خواب حرفه‌ای، این رویا را تحلیل کن و موارد زیر را استخراج کن:
            1. احساسات اصلی (۳ مورد)
            2. نمادهای مهم (۵ مورد)
            3. رنگ‌های غالب (۴ مورد)
            4. تعبیر کلی (۲-۳ جمله)
            
            رویا: "\${dreamText}"
            
            پاسخ را به صورت JSON با این ساختار برگردان:
            {
                "emotions": ["احساس اول", "احساس دوم", "احساس سوم"],
                "symbols": ["نماد اول", "نماد دوم", "نماد سوم", "نماد چهارم", "نماد پنجم"],
                "colors": ["رنگ اول", "رنگ دوم", "رنگ سوم", "رنگ چهارم"],
                "interpretation": "تعبیر کلی رویا"
            }\`;

            try {
                const analysisResponse = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': \`Bearer \${API_KEY}\`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [
                            { role: 'system', content: 'شما یک تعبیرگر خواب حرفه‌ای هستید. همیشه پاسخ را به صورت JSON معتبر برگردان.' },
                            { role: 'user', content: analysisPrompt }
                        ],
                        temperature: 0.7,
                        max_tokens: 800
                    })
                });

                const analysisData = await analysisResponse.json();
                
                if (!analysisData.choices || !analysisData.choices[0]) {
                    throw new Error('خطا در دریافت پاسخ');
                }

                let dreamAnalysis;
                try {
                    // استخراج JSON از پاسخ
                    const jsonMatch = analysisData.choices[0].message.content.match(/\\{[\\s\\S]*\\}/);
                    if (jsonMatch) {
                        dreamAnalysis = JSON.parse(jsonMatch[0]);
                    } else {
                        throw new Error('JSON یافت نشد');
                    }
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                    // استفاده از مقادیر پیش‌فرض
                    dreamAnalysis = {
                        emotions: ['شگفتی', 'آرامش', 'کنجکاوی'],
                        symbols: ['آب', 'نور', 'ماهی', 'آسمان', 'ستاره'],
                        colors: ['آبی', 'طلایی', 'بنفش', 'نقره‌ای'],
                        interpretation: 'رویایی پر از نمادهای روشنایی و آزادی. آب نشانه احساسات عمیق و ماهی‌ها نماد فرصت‌های پنهان هستند.'
                    };
                }

                // نمایش تعبیر
                document.getElementById('interpretationText').textContent = dreamAnalysis.interpretation;

                // نمایش نمادها
                const symbolsContainer = document.getElementById('dreamSymbols');
                symbolsContainer.innerHTML = '';
                dreamAnalysis.symbols.forEach(symbol => {
                    const symbolItem = document.createElement('div');
                    symbolItem.className = 'symbol-item';
                    symbolItem.innerHTML = \`
                        <span class="symbol-color" style="background: \${getRandomColor()}"></span>
                        <span>\${symbol}</span>
                    \`;
                    symbolsContainer.appendChild(symbolItem);
                });

                // مرحله ۲: تولید پارامترهای هنری
                document.getElementById('processingDetail').textContent = 'مرحله ۲/۳: محاسبه پارامترهای هنری...';
                
                const artParams = generateArtParameters(dreamAnalysis, dreamText);
                
                // مرحله ۳: رسم هنر نقطه‌ای
                document.getElementById('processingDetail').textContent = 'مرحله ۳/۳: خلق هنر نقطه‌ای...';
                
                drawPointillism(artParams);

                // پنهان کردن وضعیت پردازش
                setTimeout(() => {
                    document.getElementById('processingStatus').classList.remove('active');
                    interpretBtn.disabled = false;
                }, 1500);

            } catch (error) {
                console.error('Error:', error);
                document.getElementById('interpretationText').textContent = 'خطا در تعبیر رویا. لطفاً دوباره تلاش کنید.';
                document.getElementById('processingStatus').classList.remove('active');
                interpretBtn.disabled = false;
            }
        }

        // تولید پارامترهای هنری بر اساس تحلیل رویا
        function generateArtParameters(analysis, dreamText) {
            const pointCount = parseInt(document.getElementById('pointCount').value);
            const colorVariance = parseInt(document.getElementById('colorVariance').value) / 100;
            const complexity = parseInt(document.getElementById('complexity').value) / 100;
            const abstraction = parseInt(document.getElementById('abstraction').value) / 100;
            
            // نگاشت احساسات به رنگ‌ها
            const emotionColorMap = {
                'شادی': '#ffe66d',
                'غم': '#6b5b95',
                'خشم': '#ff6b6b',
                'ترس': '#6b4423',
                'عشق': '#ff69b4',
                'آرامش': '#4ecdc4',
                'تعجب': '#ff9f1c',
                'نگرانی': '#9b9b9b',
                'امید': '#7cb9e8',
                'اشتیاق': '#ff8243'
            };

            // تولید نقاط با الگوریتم خاص
            const points = [];
            const canvas = document.getElementById('pointillismCanvas');
            const width = canvas.width;
            const height = canvas.height;

            // ایجاد ساختار لایه‌ای
            for (let i = 0; i < pointCount; i++) {
                // محاسبه موقعیت با توجه به پیچیدگی و انتزاع
                let x, y;
                
                if (Math.random() < complexity) {
                    // نقاط سازمان‌یافته (نمادها)
                    const symbolIndex = Math.floor(Math.random() * analysis.symbols.length);
                    const symbolFactor = symbolIndex / analysis.symbols.length;
                    
                    x = width * (0.3 + 0.4 * symbolFactor + (Math.random() - 0.5) * 0.2);
                    y = height * (0.3 + 0.4 * Math.sin(symbolFactor * Math.PI) + (Math.random() - 0.5) * 0.2);
                } else {
                    // نقاط تصادفی (انتزاع)
                    x = width * Math.random();
                    y = height * Math.random();
                }

                // انتخاب رنگ بر اساس احساسات
                let color;
                const emotionIndex = Math.floor(Math.random() * analysis.emotions.length);
                const baseEmotion = analysis.emotions[emotionIndex];
                const baseColor = emotionColorMap[baseEmotion] || '#4ecdc4';
                
                // اضافه کردن تنوع رنگی
                if (Math.random() < colorVariance) {
                    // ترکیب رنگ‌ها
                    const r = parseInt(baseColor.slice(1,3), 16);
                    const g = parseInt(baseColor.slice(3,5), 16);
                    const b = parseInt(baseColor.slice(5,7), 16);
                    
                    const variance = 50;
                    const newR = Math.min(255, Math.max(0, r + (Math.random() - 0.5) * variance));
                    const newG = Math.min(255, Math.max(0, g + (Math.random() - 0.5) * variance));
                    const newB = Math.min(255, Math.max(0, b + (Math.random() - 0.5) * variance));
                    
                    color = \`rgb(\${newR}, \${newG}, \${newB})\`;
                } else {
                    color = baseColor;
                }

                // اندازه نقطه بر اساس اهمیت
                const size = 2 + Math.random() * 4 * (1 + abstraction);

                points.push({
                    x, y,
                    color,
                    size,
                    alpha: 0.6 + Math.random() * 0.4
                });
            }

            return { points, width, height };
        }

        // رسم هنر نقطه‌ای
        function drawPointillism(params) {
            const canvas = document.getElementById('pointillismCanvas');
            const ctx = canvas.getContext('2d');
            
            // تنظیم اندازه canvas
            const container = canvas.parentElement;
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            
            // پاک کردن canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // ایجاد گرادیانت پس‌زمینه
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0a0a1a');
            gradient.addColorStop(1, '#1a1a2f');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // رسم نقاط
            params.points.forEach(point => {
                ctx.beginPath();
                ctx.arc(
                    point.x * (canvas.width / params.width || 1),
                    point.y * (canvas.height / params.height || 1),
                    point.size,
                    0,
                    Math.PI * 2
                );
                
                ctx.fillStyle = point.color;
                ctx.globalAlpha = point.alpha;
                ctx.fill();
                
                // اضافه کردن درخشش به نقاط بزرگتر
                if (point.size > 4) {
                    ctx.shadowColor = point.color;
                    ctx.shadowBlur = 10;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });

            // اضافه کردن افکت نهایی
            ctx.globalCompositeOperation = 'lighter';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'source-over';
        }

        // رنگ تصادفی برای نمادها
        function getRandomColor() {
            const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#c77dff', '#ff9f1c'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        // به‌روزرسانی اندازه canvas هنگام تغییر اندازه پنجره
        window.addEventListener('resize', () => {
            const canvas = document.getElementById('pointillismCanvas');
            if (canvas.width > 0) {
                const container = canvas.parentElement;
                canvas.width = container.clientWidth;
                canvas.height = container.clientHeight;
            }
        });

        // راه‌اندازی
        window.onload = function() {
            createStars();
            createDreamParticles();
            
            // رسم یک نمونه اولیه
            setTimeout(() => {
                const sampleAnalysis = {
                    emotions: ['آرامش', 'شگفتی', 'امید'],
                    symbols: ['آب', 'نور', 'ماهی', 'آسمان', 'ستاره'],
                    interpretation: 'رویای شما نشان‌دهنده...'
                };
                const sampleParams = generateArtParameters(sampleAnalysis, '');
                drawPointillism(sampleParams);
            }, 500);
        };
    <\/script>

`,className:"w-html-embed"})})}),I=a=>{const{origin:t,pathname:i,search:n}=new URL(a);return`${t}${i}${n}`},C=l.memo(({pageKey:a,system:t})=>e.jsx(E,{system:t},a),(a,t)=>a.pageKey===t.pageKey),P=({data:a})=>{const{system:t,resources:i,url:n,pageMeta:r}=a,c=I(n),p=l.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:i,breakpoints:x,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:n,children:e.jsx(C,{pageKey:c,system:t})}),e.jsx(h,{url:n,pageMeta:r,siteName:d,imageLoader:s,assetBaseUrl:o}),e.jsx(u,{children:r.title})]})},k=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),M=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${f}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:M},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{j as configValuesSerialized};
