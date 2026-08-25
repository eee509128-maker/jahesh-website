import{j as e,r as n,a,i as s,R as f,b as g,P as h,c as x,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],u="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=i=>e.jsx("body",{className:"w-element",children:e.jsx(y,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موشک فضایی - بررسی فنی</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: linear-gradient(135deg, #1a0a2e 0%, #16082a 50%, #0d0518 100%);
            color: #fff;
            overflow-x: hidden;
        }

        /* Stars Background */
        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .star {
            position: absolute;
            background: #fff;
            border-radius: 50%;
            animation: twinkle 2s infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 1;
        }

        .hero h1 {
            font-size: 4rem;
            font-weight: 900;
            background: linear-gradient(135deg, #a855f7, #6366f1, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            margin-bottom: 1rem;
            animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
            0%, 100% { filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5)); }
            50% { filter: drop-shadow(0 0 40px rgba(168, 85, 247, 0.8)); }
        }

        .hero p {
            font-size: 1.5rem;
            color: #c4b5fd;
            text-align: center;
            max-width: 600px;
            line-height: 2;
        }

        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            animation: bounce 2s infinite;
        }

        .scroll-indicator span {
            font-size: 0.9rem;
            color: #a78bfa;
            margin-bottom: 10px;
        }

        .scroll-indicator .arrow {
            width: 30px;
            height: 30px;
            border-right: 3px solid #a855f7;
            border-bottom: 3px solid #a855f7;
            transform: rotate(45deg);
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(15px); }
        }

        /* Rocket Container */
        .rocket-section {
            min-height: 500vh;
            position: relative;
            z-index: 1;
        }

        .sticky-container {
            position: sticky;
            top: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .rocket-wrapper {
            position: relative;
            width: 400px;
            height: 700px;
        }

        /* Rocket SVG Styles */
        .rocket-svg {
            width: 100%;
            height: 100%;
            filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.4));
        }

        .rocket-part {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .rocket-part.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        /* Info Panels */
        .info-panel {
            position: absolute;
            width: 350px;
            padding: 25px 30px;
            background: linear-gradient(135deg, rgba(88, 28, 135, 0.6), rgba(59, 7, 100, 0.8));
            backdrop-filter: blur(20px);
            border-radius: 20px;
            border: 1px solid rgba(168, 85, 247, 0.3);
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .info-panel.active {
            opacity: 1;
            transform: translateX(0);
            pointer-events: auto;
        }

        .info-panel.left {
            transform: translateX(-100px);
        }

        .info-panel.left.active {
            transform: translateX(0);
        }

        .info-panel h3 {
            font-size: 1.4rem;
            font-weight: 700;
            color: #e9d5ff;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .info-panel h3::before {
            content: '';
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, #a855f7, #ec4899);
            border-radius: 50%;
            box-shadow: 0 0 15px #a855f7;
        }

        .info-panel p {
            font-size: 0.95rem;
            color: #d8b4fe;
            line-height: 1.9;
        }

        .info-panel .spec {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(168, 85, 247, 0.3);
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
        }

        .info-panel .spec-item {
            text-align: center;
        }

        .info-panel .spec-item .value {
            font-size: 1.3rem;
            font-weight: 700;
            color: #f0abfc;
        }

        .info-panel .spec-item .label {
            color: #a78bfa;
            font-size: 0.75rem;
        }

        /* Progress Bar */
        .progress-container {
            position: fixed;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .progress-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(168, 85, 247, 0.3);
            border: 2px solid rgba(168, 85, 247, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
        }

        .progress-dot.active {
            background: #a855f7;
            box-shadow: 0 0 20px #a855f7;
            transform: scale(1.3);
        }

        .progress-dot:hover::after {
            content: attr(data-label);
            position: absolute;
            right: 25px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(88, 28, 135, 0.9);
            padding: 5px 12px;
            border-radius: 8px;
            font-size: 0.8rem;
            white-space: nowrap;
        }

        /* Scroll Progress */
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #a855f7, #ec4899, #6366f1);
            z-index: 1000;
            width: 0%;
            transition: width 0.1s ease;
        }

        /* Section Labels */
        .section-marker {
            position: absolute;
            width: 100%;
            height: 100vh;
            pointer-events: none;
        }

        /* Footer */
        .footer {
            padding: 80px 20px;
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .footer h2 {
            font-size: 2.5rem;
            background: linear-gradient(135deg, #a855f7, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
        }

        .footer p {
            color: #c4b5fd;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.8;
        }

        .cta-button {
            display: inline-block;
            margin-top: 30px;
            padding: 15px 40px;
            background: linear-gradient(135deg, #a855f7, #6366f1);
            color: #fff;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 10px 40px rgba(168, 85, 247, 0.4);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 50px rgba(168, 85, 247, 0.6);
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .info-panel {
                width: 280px;
                padding: 20px;
            }
            .rocket-wrapper {
                width: 300px;
                height: 550px;
            }
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            .hero p {
                font-size: 1.1rem;
                padding: 0 20px;
            }
            .info-panel {
                position: fixed !important;
                bottom: 20px !important;
                left: 50% !important;
                top: auto !important;
                right: auto !important;
                transform: translateX(-50%) translateY(100px) !important;
                width: 90% !important;
                max-width: 400px;
            }
            .info-panel.active {
                transform: translateX(-50%) translateY(0) !important;
            }
            .progress-container {
                right: 15px;
            }
        }
    </style>


    <!-- Scroll Progress -->
    <div class="scroll-progress" id="scrollProgress"></div>

    <!-- Stars Background -->
    <div class="stars" id="stars"></div>

    <!-- Progress Dots -->
    <div class="progress-container" id="progressContainer">
        <div class="progress-dot" data-label="کلاهک" data-section="0"></div>
        <div class="progress-dot" data-label="محفظه بار" data-section="1"></div>
        <div class="progress-dot" data-label="مخازن سوخت" data-section="2"></div>
        <div class="progress-dot" data-label="موتور اصلی" data-section="3"></div>
        <div class="progress-dot" data-label="نازها" data-section="4"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero">
        <h1>🚀 موشک فضایی آینده</h1>
        <p>با اسکرول کنید و اجزای داخلی این شاهکار مهندسی را کشف کنید</p>
        <div class="scroll-indicator">
            <span>اسکرول کنید</span>
            <div class="arrow"></div>
        </div>
    </section>

    <!-- Rocket Section -->
    <section class="rocket-section">
        <div class="sticky-container">
            <div class="rocket-wrapper">
                <!-- Rocket SVG -->
                <svg class="rocket-svg" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
                    <!-- Rocket Body Outline -->
                    <defs>
                        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#3b0764"></stop>
                            <stop offset="50%" style="stop-color:#581c87"></stop>
                            <stop offset="100%" style="stop-color:#3b0764"></stop>
                        </linearGradient>
                        <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:rgba(168,85,247,0.3)"></stop>
                            <stop offset="50%" style="stop-color:rgba(236,72,153,0.3)"></stop>
                            <stop offset="100%" style="stop-color:rgba(168,85,247,0.3)"></stop>
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"></feGaussianBlur>
                            <feMerge>
                                <feMergeNode in="coloredBlur"></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                    </defs>

                    <!-- Part 1: Nose Cone (کلاهک) -->
                    <g class="rocket-part" id="part-nose" fill="url(#bodyGrad)" stroke="#a855f7" stroke-width="1.5">
                        <path d="M100,5 Q140,50 140,100 L60,100 Q60,50 100,5" filter="url(#glow)"></path>
                        <path d="M100,5 Q120,40 120,80 L80,80 Q80,40 100,5" fill="url(#highlightGrad)"></path>
                        <circle cx="100" cy="50" r="8" fill="#a855f7" opacity="0.8"></circle>
                        <circle cx="100" cy="50" r="4" fill="#f0abfc"></circle>
                    </g>

                    <!-- Part 2: Payload Bay (محفظه بار) -->
                    <g class="rocket-part" id="part-payload" fill="url(#bodyGrad)" stroke="#a855f7" stroke-width="1.5">
                        <rect x="60" y="100" width="80" height="60" rx="5"></rect>
                        <rect x="70" y="110" width="60" height="40" rx="3" fill="rgba(168,85,247,0.2)"></rect>
                        <line x1="70" y1="130" x2="130" y2="130" stroke="#a855f7" stroke-width="0.5" opacity="0.5"></line>
                        <circle cx="85" cy="120" r="3" fill="#c084fc"></circle>
                        <circle cx="100" cy="120" r="3" fill="#c084fc"></circle>
                        <circle cx="115" cy="120" r="3" fill="#c084fc"></circle>
                        <rect x="80" y="138" width="40" height="8" rx="2" fill="rgba(168,85,247,0.4)"></rect>
                    </g>

                    <!-- Part 3: Fuel Tanks (مخازن سوخت) -->
                    <g class="rocket-part" id="part-fuel" fill="url(#bodyGrad)" stroke="#a855f7" stroke-width="1.5">
                        <rect x="55" y="160" width="90" height="120" rx="8"></rect>
                        <!-- Fuel Level Lines -->
                        <rect x="65" y="170" width="70" height="35" rx="3" fill="rgba(99,102,241,0.3)"></rect>
                        <text x="100" y="192" text-anchor="middle" fill="#a78bfa" font-size="8">LOX</text>
                        <rect x="65" y="215" width="70" height="55" rx="3" fill="rgba(236,72,153,0.3)"></rect>
                        <text x="100" y="247" text-anchor="middle" fill="#a78bfa" font-size="8">RP-1</text>
                        <!-- Pipes -->
                        <line x1="70" y1="205" x2="70" y2="215" stroke="#a855f7" stroke-width="2"></line>
                        <line x1="100" y1="205" x2="100" y2="215" stroke="#a855f7" stroke-width="2"></line>
                        <line x1="130" y1="205" x2="130" y2="215" stroke="#a855f7" stroke-width="2"></line>
                    </g>

                    <!-- Part 4: Main Engine (موتور اصلی) -->
                    <g class="rocket-part" id="part-engine" fill="url(#bodyGrad)" stroke="#a855f7" stroke-width="1.5">
                        <path d="M60,280 L140,280 L150,340 L50,340 Z"></path>
                        <ellipse cx="100" cy="340" rx="50" ry="10" fill="#581c87"></ellipse>
                        <!-- Engine Bell -->
                        <path d="M70,340 L65,370 L135,370 L130,340" fill="#3b0764"></path>
                        <ellipse cx="100" cy="370" rx="35" ry="8" fill="#1e1b4b" stroke="#a855f7"></ellipse>
                        <!-- Engine Details -->
                        <circle cx="100" cy="310" r="12" fill="#581c87" stroke="#c084fc"></circle>
                        <circle cx="100" cy="310" r="6" fill="#a855f7"></circle>
                    </g>

                    <!-- Part 5: Fins (نازها) -->
                    <g class="rocket-part" id="part-fins" fill="url(#bodyGrad)" stroke="#a855f7" stroke-width="1.5">
                        <!-- Left Fin -->
                        <path d="M55,290 L20,360 L55,350 Z"></path>
                        <path d="M50,300 L30,350 L50,345 Z" fill="url(#highlightGrad)"></path>
                        <!-- Right Fin -->
                        <path d="M145,290 L180,360 L145,350 Z"></path>
                        <path d="M150,300 L170,350 L150,345 Z" fill="url(#highlightGrad)"></path>
                    </g>

                    <!-- Flames (always visible but animated) -->
                    <g id="flames" opacity="0">
                        <ellipse cx="100" cy="390" rx="20" ry="30" fill="url(#flameGrad)"></ellipse>
                        <ellipse cx="100" cy="385" rx="12" ry="20" fill="#fbbf24"></ellipse>
                        <ellipse cx="100" cy="380" rx="6" ry="12" fill="#fff"></ellipse>
                    </g>
                    <defs>
                        <radialGradient id="flameGrad" cx="50%" cy="0%">
                            <stop offset="0%" style="stop-color:#f97316"></stop>
                            <stop offset="50%" style="stop-color:#ef4444"></stop>
                            <stop offset="100%" style="stop-color:transparent"></stop>
                        </radialGradient>
                    </defs>
                </svg>

                <!-- Info Panels -->
                <div class="info-panel left" id="info-nose" style="top: 20px; right: calc(100% + 40px);">
                    <h3>کلاهک هدایتگر</h3>
                    <p>کلاهک آیرودینامیک موشک که با طراحی مخروطی خود، مقاومت هوا را به حداقل رسانده و از سیستم‌های الکترونیکی حساس محافظت می‌کند.</p>
                    <div class="spec">
                        <div class="spec-item">
                            <div class="value">۲۵°</div>
                            <div class="label">زاویه نوک</div>
                        </div>
                        <div class="spec-item">
                            <div class="value">تیتانیوم</div>
                            <div class="label">جنس</div>
                        </div>
                        <div class="spec-item">
                            <div class="value">۱۵۰۰°C</div>
                            <div class="label">تحمل حرارت</div>
                        </div>
                    </div>
                </div>

                <div class="info-panel" id="info-payload" style="top: 120px; left: calc(100% + 40px);">
                    <h3>محفظه محموله</h3>
                    <p>این بخش برای حمل ماهواره‌ها، تجهیزات علمی یا محموله‌های تجاری طراحی شده و با سیستم‌های پیشرفته رهاسازی تجهیز گردیده است.</p>
                    <div class="spec">
                        <div class="spec-item">
                            <div class="value">۵۰۰۰</div>
                            <div class="label">ظرفیت (کیلوگرم)</div>
                        </div>
                        <div class="spec-item">
                            <div class="value">۴۵m³</div>
                            <div class="label">حجم</div>
                        </div>
                    </div>
                </div>

                <div class="info-panel left" id="info-fuel" style="top: 200px; right: calc(100% + 40px);">
                    <h3>مخازن سوخت</h3>
                    <p>سیستم سوخت رسانی شامل مخزن اکسیژن مایع (LOX) و سوخت RP-1 که با عایق‌کاری حرارتی پیشرفته، دمای minus 183 درجه سانتیگراد را حفظ می‌کند.</p>
                    <div class="spec">
                        <div class="spec-item">
                            <div class="value">۲۸۰,۰۰۰</div>
                            <div class="label">لیتر LOX</div>
                        </div>
                        <div class="spec-item">
                            <div class="value">۱۱۸,۰۰۰</div>
                            <div class="label">لیتر RP-1</div>
                        </div>
                    </div>
                </div>

                <div class="info-panel" id="info-engine" style="top: 300px; left: calc(100% + 40px);">
                    <h3>موتور اصلی</h3>
                    <p>موتور پیشرفته با چرخه احتراق کامل که توان تولید ۷.۶ میلیون نیوتن نیرو را دارد و از تکنولوژی نازل قابل تنظیم استفاده می‌کند.</p>
                    <div class="spec">
                        <div class="spec-item">
                            <div class="value">۷.۶MN</div>
                            <div class="label">نیروی پیشران</div>
                        </div>
                        <div class="spec-item">
                            <div class="value">۹۸%</div>
                            <div class="label">بازده</div>
                        </div>
                    </div>
                </div>

                <div class="info-panel left" id="info-fins" style="top: 350px; right: calc(100% + 40px);">
                    <h3>نازهای پایداری</h3>
                    <p>نازهای گرافیتی کامپوزیتی که با سیستم کنترل فعال، پایداری پرواز را در تمام مراحل تضمین می‌کنند و قابلیت بازگشت و استفاده مجدد دارند.</p>
                    <div class="spec">
                        <div class="spec-item">
                            <div class="value">۴.۵m</div>
                            <div class="label">ارتفاع</div>
                        </div>
                        <div class="spec-item">
                            <div class="value">گریدی</div>
                            <div class="label">نوع</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <section class="footer">
        <h2>آماده کشف فضا هستید؟</h2>
        <p>این موشک نسل جدیدی از اکتشافات فضایی را ممکن می‌سازد. با تکنولوژی پیشرفته و طراحی بهینه، مرزهای جدیدی را درنوردیده‌ایم.</p>
        <a href="#" class="cta-button">درخواست اطلاعات بیشتر</a>
    </section>

    <script>
        // Generate Stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starCount = 150;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 2 + 's';
                star.style.animationDuration = (Math.random() * 2 + 1) + 's';
                starsContainer.appendChild(star);
            }
        }
        createStars();

        // Scroll Animation Logic
        const rocketSection = document.querySelector('.rocket-section');
        const parts = [
            { id: 'nose', minScroll: 0, maxScroll: 0.2 },
            { id: 'payload', minScroll: 0.2, maxScroll: 0.4 },
            { id: 'fuel', minScroll: 0.4, maxScroll: 0.6 },
            { id: 'engine', minScroll: 0.6, maxScroll: 0.8 },
            { id: 'fins', minScroll: 0.8, maxScroll: 1 }
        ];

        const progressDots = document.querySelectorAll('.progress-dot');
        let currentActivePart = -1;

        function updateRocketAnimation() {
            const rect = rocketSection.getBoundingClientRect();
            const sectionHeight = rocketSection.offsetHeight - window.innerHeight;
            const scrollProgress = Math.max(0, Math.min(1, -rect.top / sectionHeight));
            
            // Update scroll progress bar
            document.getElementById('scrollProgress').style.width = (scrollProgress * 100) + '%';
            
            // Check if we're in the rocket section
            const isInSection = rect.top <= 0 && rect.bottom > window.innerHeight;
            
            if (isInSection) {
                parts.forEach((part, index) => {
                    const partElement = document.getElementById('part-' + part.id);
                    const infoElement = document.getElementById('info-' + part.id);
                    
                    if (scrollProgress >= part.minScroll && scrollProgress < part.maxScroll + 0.1) {
                        partElement.classList.add('visible');
                        infoElement.classList.add('active');
                        
                        // Update progress dots
                        if (index !== currentActivePart) {
                            currentActivePart = index;
                            progressDots.forEach((dot, i) => {
                                dot.classList.toggle('active', i <= index);
                            });
                        }
                    } else {
                        infoElement.classList.remove('active');
                    }
                });
                
                // Show flames at the end
                const flames = document.getElementById('flames');
                if (scrollProgress > 0.9) {
                    flames.style.opacity = scrollProgress;
                    flames.style.transition = 'opacity 0.3s ease';
                } else {
                    flames.style.opacity = 0;
                }
            } else {
                // Reset when out of section
                document.querySelectorAll('.info-panel').forEach(panel => {
                    panel.classList.remove('active');
                });
            }
        }

        // Smooth scroll for progress dots
        progressDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const sectionIndex = parseInt(dot.dataset.section);
                const targetScroll = rocketSection.offsetTop + (sectionIndex * (rocketSection.offsetHeight - window.innerHeight) / parts.length);
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            });
        });

        // Throttled scroll handler
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateRocketAnimation();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial call
        updateRocketAnimation();

        // Add parallax effect to rocket
        window.addEventListener('mousemove', (e) => {
            const rocket = document.querySelector('.rocket-wrapper');
            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;
            
            if (rocket) {
                rocket.style.transform = \`translate(\${x}px, \${y}px)\`;
            }
        });
    <\/script>


`,className:"w-html-embed"})}),S=i=>{const{origin:t,pathname:r,search:o}=new URL(i);return`${t}${r}${o}`},P=n.memo(({pageKey:i,system:t})=>e.jsx(k,{system:t},i),(i,t)=>i.pageKey===t.pageKey),z=({data:i})=>{const{system:t,resources:r,url:o,pageMeta:l}=i,d=S(o),p=n.useMemo(()=>({imageLoader:s,assetBaseUrl:a,resources:r,breakpoints:v,onError:console.error}),[r]);return e.jsxs(f.Provider,{value:p,children:[e.jsx(g.Provider,{value:o,children:e.jsx(P,{pageKey:d,system:t})}),e.jsx(h,{url:o,pageMeta:l,siteName:c,imageLoader:s,assetBaseUrl:a}),e.jsx(x,{children:l.title})]})},L=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),E=({})=>{const i={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${a}${u}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-3/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-3/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{A as configValuesSerialized};
