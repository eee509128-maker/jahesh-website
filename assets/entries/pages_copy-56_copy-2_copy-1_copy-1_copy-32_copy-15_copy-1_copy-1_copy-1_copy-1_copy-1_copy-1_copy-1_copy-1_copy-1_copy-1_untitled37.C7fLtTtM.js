import{j as e,r as d,a,i as l,R as b,b as m,P as u,c as y,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as g}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const i="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],S=s=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(g,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تحلیل‌گر و تعبیر‌گر رویا 🌙</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Vazirmatn', sans-serif; }
        
        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
        }
        
        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle var(--duration) ease-in-out infinite;
        }
        
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        
        .glass {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .glass-dark {
            background: rgba(10, 10, 40, 0.6);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .moon-glow {
            box-shadow: 0 0 60px rgba(255, 215, 100, 0.4),
                        0 0 100px rgba(255, 215, 100, 0.2);
        }
        
        .float {
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .shooting-star {
            position: absolute;
            width: 100px;
            height: 2px;
            background: linear-gradient(90deg, white, transparent);
            animation: shoot 3s ease-out infinite;
            opacity: 0;
        }
        
        @keyframes shoot {
            0% { transform: translateX(0) translateY(0); opacity: 1; }
            100% { transform: translateX(-300px) translateY(300px); opacity: 0; }
        }
        
        .pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
        
        textarea:focus, input:focus, select:focus {
            outline: none;
            border-color: rgba(167, 139, 250, 0.6);
            box-shadow: 0 0 20px rgba(167, 139, 250, 0.3);
        }
        
        .symbol-btn {
            transition: all 0.3s ease;
        }
        
        .symbol-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
        }
        
        .symbol-btn.selected {
            background: rgba(167, 139, 250, 0.3);
            border-color: rgba(167, 139, 250, 0.8);
            box-shadow: 0 0 25px rgba(167, 139, 250, 0.4);
        }
        
        .interpretation-card {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .mood-btn.selected {
            background: linear-gradient(135deg, rgba(167, 139, 250, 0.4), rgba(139, 92, 246, 0.4));
            border-color: rgba(167, 139, 250, 0.8);
        }
        
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
        }
        
        ::-webkit-scrollbar-thumb {
            background: rgba(167, 139, 250, 0.4);
            border-radius: 4px;
        }
        
        .loading-dream {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
    </style>


    
    <!-- Stars Background -->
    <div class="stars" id="stars"></div>
    
    <!-- Shooting Stars -->
    <div class="shooting-star" style="top: 10%; right: 20%; animation-delay: 0s;"></div>
    <div class="shooting-star" style="top: 30%; right: 40%; animation-delay: 2s;"></div>
    <div class="shooting-star" style="top: 20%; right: 60%; animation-delay: 4s;"></div>
    
    <!-- Moon -->
    <div class="fixed top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 moon-glow float opacity-80 hidden md:block"></div>
    
    <!-- Main Container -->
    <div class="relative z-10 container mx-auto px-4 py-8 max-w-5xl">
        
        <!-- Header -->
        <header class="text-center mb-12">
            <div class="inline-block">
                <span class="text-6xl mb-4 block">🌙</span>
                <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                    تحلیل‌گر و تعبیر‌گر رویا
                </h1>
                <p class="text-purple-200/70 mt-3 text-lg">پردازش عمیق رویاهای شما با هوش مصنوعی</p>
            </div>
        </header>
        
        <!-- Main Form -->
        <div class="glass rounded-3xl p-6 md:p-8 mb-8">
            
            <!-- Dream Input -->
            <div class="mb-8">
                <label class="block text-purple-200 font-semibold mb-3 text-lg">
                    <span class="ml-2">💭</span>
                    رویای خود را با جزئیات شرح دهید:
                </label>
                <textarea id="dreamInput" class="w-full h-40 bg-slate-900/50 rounded-2xl p-4 text-white placeholder-slate-400 border border-purple-500/20 resize-none" placeholder="مثال: دیشب خواب دیدم در یک جنگل تاریک قدم می‌زدم. ناگهان یک گنجشک سفید رنگ جلویم فرود آمد و با من حرف زد..."></textarea>
            </div>
            
            <!-- Dream Type -->
            <div class="mb-8">
                <label class="block text-purple-200 font-semibold mb-3 text-lg">
                    <span class="ml-2">🏷️</span>
                    نوع خواب:
                </label>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button onclick="selectType(this, 'normal')" class="dream-type-btn glass-dark rounded-xl p-3 text-center transition-all hover:bg-purple-500/20 border border-transparent" data-type="normal">
                        <span class="text-2xl block mb-1">😴</span>
                        <span class="text-sm">خواب عادی</span>
                    </button>
                    <button onclick="selectType(this, 'nightmare')" class="dream-type-btn glass-dark rounded-xl p-3 text-center transition-all hover:bg-purple-500/20 border border-transparent" data-type="nightmare">
                        <span class="text-2xl block mb-1">😱</span>
                        <span class="text-sm">کابوس</span>
                    </button>
                    <button onclick="selectType(this, 'lucid')" class="dream-type-btn glass-dark rounded-xl p-3 text-center transition-all hover:bg-purple-500/20 border border-transparent" data-type="lucid">
                        <span class="text-2xl block mb-1">✨</span>
                        <span class="text-sm">خواب شفاف</span>
                    </button>
                    <button onclick="selectType(this, 'recurring')" class="dream-type-btn glass-dark rounded-xl p-3 text-center transition-all hover:bg-purple-500/20 border border-transparent" data-type="recurring">
                        <span class="text-2xl block mb-1">🔄</span>
                        <span class="text-sm">خواب تکراری</span>
                    </button>
                </div>
            </div>
            
            <!-- Mood After Waking -->
            <div class="mb-8">
                <label class="block text-purple-200 font-semibold mb-3 text-lg">
                    <span class="ml-2">😊</span>
                    احساس شما پس از بیداری:
                </label>
                <div class="flex flex-wrap gap-2">
                    <button onclick="selectMood(this, 'happy')" class="mood-btn glass-dark rounded-full px-4 py-2 text-sm transition-all border border-transparent">
                        😊 خوشحال
                    </button>
                    <button onclick="selectMood(this, 'scared')" class="mood-btn glass-dark rounded-full px-4 py-2 text-sm transition-all border border-transparent">
                        😰 ترسیده
                    </button>
                    <button onclick="selectMood(this, 'confused')" class="mood-btn glass-dark rounded-full px-4 py-2 text-sm transition-all border border-transparent">
                        😕 گیج
                    </button>
                    <button onclick="selectMood(this, 'peaceful')" class="mood-btn glass-dark rounded-full px-4 py-2 text-sm transition-all border border-transparent">
                        😌 آرام
                    </button>
                    <button onclick="selectMood(this, 'anxious')" class="mood-btn glass-dark rounded-full px-4 py-2 text-sm transition-all border border-transparent">
                        😰 مضطرب
                    </button>
                    <button onclick="selectMood(this, 'excited')" class="mood-btn glass-dark rounded-full px-4 py-2 text-sm transition-all border border-transparent">
                        🤩 هیجان‌زده
                    </button>
                    <button onclick="selectMood(this, 'sad')" class="mood-btn glass-dark rounded-full px-4 py-2 text-sm transition-all border border-transparent">
                        😢 غمگین
                    </button>
                    <button onclick="selectMood(this, 'nostalgic')" class="mood-btn glass-dark rounded-full px-4 py-2 text-sm transition-all border border-transparent">
                        🥺 نوستالژیک
                    </button>
                </div>
            </div>
            
            <!-- Common Symbols -->
            <div class="mb-8">
                <label class="block text-purple-200 font-semibold mb-3 text-lg">
                    <span class="ml-2">🔮</span>
                    نمادهای موجود در خواب (انتخابی):
                </label>
                <div class="flex flex-wrap gap-2">
                    <button onclick="toggleSymbol(this, 'آب')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">💧 آب</button>
                    <button onclick="toggleSymbol(this, 'پرواز')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">🦅 پرواز</button>
                    <button onclick="toggleSymbol(this, 'سقوط')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">⬇️ سقوط</button>
                    <button onclick="toggleSymbol(this, 'حیوان')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">🐱 حیوان</button>
                    <button onclick="toggleSymbol(this, 'مرگ')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">💀 مرگ</button>
                    <button onclick="toggleSymbol(this, 'ازدواج')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">💍 ازدواج</button>
                    <button onclick="toggleSymbol(this, 'خانه')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">🏠 خانه</button>
                    <button onclick="toggleSymbol(this, 'ماشین')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">🚗 ماشین</button>
                    <button onclick="toggleSymbol(this, 'دندان')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">🦷 دندان</button>
                    <button onclick="toggleSymbol(this, 'کودک')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">👶 کودک</button>
                    <button onclick="toggleSymbol(this, 'پول')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">💰 پول</button>
                    <button onclick="toggleSymbol(this, 'سفر')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">✈️ سفر</button>
                    <button onclick="toggleSymbol(this, 'دنبال کردن')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">🏃 تعقیب</button>
                    <button onclick="toggleSymbol(this, 'مدرسه')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">🏫 مدرسه</button>
                    <button onclick="toggleSymbol(this, 'جنگل')" class="symbol-btn glass-dark rounded-xl px-3 py-2 text-sm border border-transparent">🌲 جنگل</button>
                </div>
            </div>
            
            <!-- Additional Context -->
            <div class="mb-8 grid md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-purple-200 font-semibold mb-3">
                        <span class="ml-2">🕐</span>
                        زمان خواب:
                    </label>
                    <select id="sleepTime" class="w-full bg-slate-900/50 rounded-xl p-3 text-white border border-purple-500/20">
                        <option value="">انتخاب کنید...</option>
                        <option value="شب زود (۹-۱۱)">شب زود (۹-۱۱)</option>
                        <option value="نیمه شب (۱۱-۲)">نیمه شب (۱۱-۲)</option>
                        <option value="سحرگاه (۲-۵)">سحرگاه (۲-۵)</option>
                        <option value="صبح (۵-۸)">صبح (۵-۸)</option>
                        <option value="چرت زدگی">چرت زدگی</option>
                    </select>
                </div>
                <div>
                    <label class="block text-purple-200 font-semibold mb-3">
                        <span class="ml-2">🎨</span>
                        رنگ غالب در خواب:
                    </label>
                    <select id="dreamColor" class="w-full bg-slate-900/50 rounded-xl p-3 text-white border border-purple-500/20">
                        <option value="">انتخاب کنید...</option>
                        <option value="رنگارنگ">رنگارنگ</option>
                        <option value="سیاه و سفید">سیاه و سفید</option>
                        <option value="آبی">آبی</option>
                        <option value="قرمز">قرمز</option>
                        <option value="سبز">سبز</option>
                        <option value="زرد">زرد</option>
                        <option value="بنفش">بنفش</option>
                        <option value="تاریک">تاریک</option>
                    </select>
                </div>
            </div>
            
            <!-- Submit Button -->
            <button onclick="analyzeDream()" id="analyzeBtn" class="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl p-4 font-bold text-lg transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
                <span id="btnText">🔮 تعبیر و تحلیل رویا</span>
                <span id="btnLoading" class="hidden">🌙 در حال پردازش رویا...</span>
            </button>
            
        </div>
        
        <!-- Results Section -->
        <div id="results" class="hidden">
            
            <!-- Interpretation -->
            <div class="interpretation-card glass rounded-3xl p-6 md:p-8 mb-6">
                <h2 class="text-2xl font-bold text-purple-200 mb-4 flex items-center">
                    <span class="ml-3">📖</span>
                    تعبیر رویا
                </h2>
                <div id="interpretationText" class="text-slate-200 leading-relaxed text-lg"></div>
            </div>
            
            <!-- Symbols Analysis -->
            <div class="interpretation-card glass rounded-3xl p-6 md:p-8 mb-6" style="animation-delay: 0.2s;">
                <h2 class="text-2xl font-bold text-purple-200 mb-4 flex items-center">
                    <span class="ml-3">🔮</span>
                    تحلیل نمادها
                </h2>
                <div id="symbolsText" class="text-slate-200 leading-relaxed"></div>
            </div>
            
            <!-- Psychological Insight -->
            <div class="interpretation-card glass rounded-3xl p-6 md:p-8 mb-6" style="animation-delay: 0.4s;">
                <h2 class="text-2xl font-bold text-purple-200 mb-4 flex items-center">
                    <span class="ml-3">🧠</span>
                    بینش روانشناختی
                </h2>
                <div id="psychText" class="text-slate-200 leading-relaxed"></div>
            </div>
            
            <!-- Messages -->
            <div class="interpretation-card glass rounded-3xl p-6 md:p-8 mb-6" style="animation-delay: 0.6s;">
                <h2 class="text-2xl font-bold text-purple-200 mb-4 flex items-center">
                    <span class="ml-3">💌</span>
                    پیام‌های نهانی
                </h2>
                <div id="messagesText" class="text-slate-200 leading-relaxed"></div>
            </div>
            
            <!-- Advice -->
            <div class="interpretation-card glass rounded-3xl p-6 md:p-8" style="animation-delay: 0.8s;">
                <h2 class="text-2xl font-bold text-purple-200 mb-4 flex items-center">
                    <span class="ml-3">💡</span>
                    راهنمایی‌ها
                </h2>
                <div id="adviceText" class="text-slate-200 leading-relaxed"></div>
            </div>
            
            <!-- New Analysis Button -->
            <button onclick="newAnalysis()" class="w-full mt-8 glass rounded-2xl p-4 font-semibold text-lg transition-all hover:bg-purple-500/20 border border-purple-500/30">
                🌙 تحلیل رویای جدید
            </button>
            
        </div>
        
        <!-- Footer -->
        <footer class="text-center mt-12 text-purple-300/50 text-sm">
            <p>🌙 تحلیل‌گر رویا با هوش مصنوعی - فقط برای سرگرمی</p>
        </footer>
        
    </div>
    
    <script>
        // Configuration
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
        
        // State
        let selectedType = '';
        let selectedMood = '';
        let selectedSymbols = [];
        
        // Generate Stars
        function generateStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
                star.style.animationDelay = Math.random() * 5 + 's';
                starsContainer.appendChild(star);
            }
        }
        
        generateStars();
        
        // Selection Functions
        function selectType(btn, type) {
            document.querySelectorAll('.dream-type-btn').forEach(b => {
                b.classList.remove('border-purple-400', 'bg-purple-500/20');
            });
            btn.classList.add('border-purple-400', 'bg-purple-500/20');
            selectedType = type;
        }
        
        function selectMood(btn, mood) {
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedMood = mood;
        }
        
        function toggleSymbol(btn, symbol) {
            btn.classList.toggle('selected');
            if (selectedSymbols.includes(symbol)) {
                selectedSymbols = selectedSymbols.filter(s => s !== symbol);
            } else {
                selectedSymbols.push(symbol);
            }
        }
        
        // Main Analysis Function
        async function analyzeDream() {
            const dreamInput = document.getElementById('dreamInput').value.trim();
            
            if (!dreamInput) {
                alert('لطفاً رویای خود را شرح دهید');
                return;
            }
            
            const sleepTime = document.getElementById('sleepTime').value;
            const dreamColor = document.getElementById('dreamColor').value;
            
            // Show loading
            document.getElementById('btnText').classList.add('hidden');
            document.getElementById('btnLoading').classList.remove('hidden');
            document.getElementById('analyzeBtn').disabled = true;
            
            const prompt = \`تو یک متخصص تعبیر رویا و روانشناس خواب هستی. رویای زیر را با جزئیات کامل تحلیل و تعبیر کن:

**شرح رویا:**
\${dreamInput}

**اطلاعات اضافی:**
- نوع خواب: \${selectedType || 'نامشخص'}
- احساس پس از بیداری: \${selectedMood || 'نامشخص'}
- نمادهای انتخاب شده: \${selectedSymbols.join('، ') || 'هیچکدام'}
- زمان خواب: \${sleepTime || 'نامشخص'}
- رنگ غالب: \${dreamColor || 'نامشخص'}

**لطفاً تحلیل را در قالب زیر ارائه بده (به فارسی):**

**تعبیر رویا:**
[تعبیر کلی و معنای اصلی رویا - ۳ تا ۵ جمله]

**تحلیل نمادها:**
[تحلیل هر نماد مهم در خواب و معنای نمادین آن]

**بینش روانشناختی:**
[تحلیل روانشناختی - چه چیزی در ناخودآگاه فرد وجود دارد]

**پیام‌های نهانی:**
[پیام‌هایی که ناخودآگاه می‌خواهد برساند]

**راهنمایی‌ها:**
[پیشنهادات عملی برای فرد]

مهم: فقط محتوای داخل براکت‌ها را بنویس، براکت نگذار. هر بخش را با عنوان دقیق شروع کن.\`;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': \`Bearer \${API_KEY}\`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [
                            {
                                role: 'system',
                                content: 'تو یک متخصص تعبیر رویا و روانشناس خواب با دانش عمیق در نمادشناسی، روانکاوی یونگ و تعبیر رویاهای فرهنگی هستی. پاسخ‌هایت را به فارسی بنویس.'
                            },
                            {
                                role: 'user',
                                content: prompt
                            }
                        ],
                        temperature: 0.8,
                        max_tokens: 2000
                    })
                });
                
                const data = await response.json();
                const content = data.choices[0].message.content;
                
                // Parse and display results
                displayResults(content);
                
            } catch (error) {
                console.error('Error:', error);
                alert('خطا در پردازش رویا. لطفاً دوباره تلاش کنید.');
            } finally {
                document.getElementById('btnText').classList.remove('hidden');
                document.getElementById('btnLoading').classList.add('hidden');
                document.getElementById('analyzeBtn').disabled = false;
            }
        }
        
        function displayResults(content) {
            // Parse sections
            const sections = {
                interpretation: extractSection(content, 'تعبیر رویا'),
                symbols: extractSection(content, 'تحلیل نمادها'),
                psych: extractSection(content, 'بینش روانشناختی'),
                messages: extractSection(content, 'پیام'),
                advice: extractSection(content, 'راهنمایی')
            };
            
            document.getElementById('interpretationText').innerHTML = formatText(sections.interpretation);
            document.getElementById('symbolsText').innerHTML = formatText(sections.symbols);
            document.getElementById('psychText').innerHTML = formatText(sections.psych);
            document.getElementById('messagesText').innerHTML = formatText(sections.messages);
            document.getElementById('adviceText').innerHTML = formatText(sections.advice);
            
            document.getElementById('results').classList.remove('hidden');
            document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        }
        
        function extractSection(text, keyword) {
            const patterns = [
                new RegExp(\`\\\\*\\\\*\${keyword}[^*]*\\\\*\\\\*:?\\\\s*([\\\\s\\\\S]*?)(?=\\\\*\\\\*|$)\`, 'i'),
                new RegExp(\`\${keyword}[:：]\\\\s*([\\\\s\\\\S]*?)(?=[\\\\n]\\\\*\\\\*|$)\`, 'i')
            ];
            
            for (const pattern of patterns) {
                const match = text.match(pattern);
                if (match && match[1]) {
                    return match[1].trim();
                }
            }
            return '';
        }
        
        function formatText(text) {
            if (!text) return '<p class="text-slate-400">اطلاعاتی موجود نیست</p>';
            
            return text
                .split('\\n')
                .filter(line => line.trim())
                .map(line => {
                    line = line.replace(/\\*\\*(.*?)\\*\\*/g, '<strong class="text-purple-300">$1</strong>');
                    if (line.startsWith('-') || line.startsWith('•')) {
                        return \`<p class="mb-2 pr-4 border-r-2 border-purple-500/30">\${line.substring(1).trim()}</p>\`;
                    }
                    return \`<p class="mb-3">\${line}</p>\`;
                })
                .join('');
        }
        
        function newAnalysis() {
            document.getElementById('results').classList.add('hidden');
            document.getElementById('dreamInput').value = '';
            document.getElementById('sleepTime').value = '';
            document.getElementById('dreamColor').value = '';
            
            document.querySelectorAll('.dream-type-btn').forEach(b => {
                b.classList.remove('border-purple-400', 'bg-purple-500/20');
            });
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            document.querySelectorAll('.symbol-btn').forEach(b => b.classList.remove('selected'));
            
            selectedType = '';
            selectedMood = '';
            selectedSymbols = [];
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    <\/script>


`,className:"w-html-embed"})})}),w=s=>{const{origin:t,pathname:n,search:o}=new URL(s);return`${t}${n}${o}`},T=d.memo(({pageKey:s,system:t})=>e.jsx(S,{system:t},s),(s,t)=>s.pageKey===t.pageKey),E=({data:s})=>{const{system:t,resources:n,url:o,pageMeta:r}=s,c=w(o),p=d.useMemo(()=>({imageLoader:l,assetBaseUrl:a,resources:n,breakpoints:h,onError:console.error}),[n]);return e.jsxs(b.Provider,{value:p,children:[e.jsx(m.Provider,{value:o,children:e.jsx(T,{pageKey:c,system:t})}),e.jsx(u,{url:o,pageMeta:r,siteName:i,imageLoader:l,assetBaseUrl:a}),e.jsx(y,{children:r.title})]})},I=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),M=({})=>{const s={"@context":"https://schema.org","@type":"WebSite",name:i};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),e.jsx("link",{rel:"icon",href:l({src:`${a}${f}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},P=Object.freeze(Object.defineProperty({__proto__:null,Head:M},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-56/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-56/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}}};export{A as configValuesSerialized};
