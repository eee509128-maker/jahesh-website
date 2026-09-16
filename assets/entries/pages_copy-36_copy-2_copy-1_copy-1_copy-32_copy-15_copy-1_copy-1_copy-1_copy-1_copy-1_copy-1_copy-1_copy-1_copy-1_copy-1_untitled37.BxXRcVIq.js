import{j as e,r as d,a as i,i as n,R as f,b as g,P as u,c as b,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",w=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>خبرگزاری مدرن | نوار اخبار متحرک</title>
    <!-- فونت‌های زیبا و آیکون‌ها -->
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;900&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: #0a0f1e;
            min-height: 100vh;
            color: #fff;
            overflow-x: hidden;
            position: relative;
        }

        /* انیمیشن پس‌زمینه */
        .animated-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }

        .animated-bg::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            top: -50%;
            left: -50%;
            background: linear-gradient(
                45deg,
                #ff6b6b,
                #4ecdc4,
                #45b7d1,
                #96ceb4,
                #ffeaa7,
                #dfe6e9
            );
            animation: gradientBG 15s ease infinite;
            opacity: 0.1;
        }

        @keyframes gradientBG {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.5); }
            100% { transform: rotate(360deg) scale(1); }
        }

        /* ذرات معلق */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float 6s infinite;
        }

        @keyframes float {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
        }

        /* هدر پیشرفته */
        .advanced-header {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 20px 30px;
            margin-bottom: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 20px;
        }

        .logo-section {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .logo {
            font-size: 32px;
            font-weight: 900;
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 30px rgba(78, 205, 196, 0.5);
            position: relative;
        }

        .logo::after {
            content: 'LIVE';
            position: absolute;
            top: -10px;
            right: -30px;
            font-size: 12px;
            background: #ff4757;
            color: white;
            padding: 3px 8px;
            border-radius: 20px;
            animation: pulse 2s infinite;
            -webkit-text-fill-color: white;
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
        }

        .date-badge {
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 20px;
            border-radius: 30px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .date-badge i {
            color: #4ecdc4;
        }

        .stats {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .stat-item {
            background: rgba(255, 255, 255, 0.05);
            padding: 8px 20px;
            border-radius: 30px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-item i {
            color: #ff6b6b;
        }

        .stat-number {
            font-weight: 700;
            color: #4ecdc4;
            margin-left: 5px;
        }

        /* منوی دسته‌بندی */
        .category-menu {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .category-btn {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
            padding: 10px 25px;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .category-btn i {
            font-size: 16px;
        }

        .category-btn:hover {
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
        }

        .category-btn.active {
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
        }

        /* نوار اخبار اصلی - بخش جدید و پیشرفته */
        .news-ticker-premium {
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(20px);
            border-radius: 50px;
            margin: 30px 0;
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
        }

        .ticker-header {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
            padding: 0 30px;
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 10;
            border-radius: 50px 0 0 50px;
            box-shadow: -10px 0 20px rgba(0, 0, 0, 0.3);
        }

        .ticker-header i {
            font-size: 24px;
            animation: bellShake 2s infinite;
        }

        @keyframes bellShake {
            0%, 100% { transform: rotate(0); }
            10% { transform: rotate(15deg); }
            20% { transform: rotate(-15deg); }
            30% { transform: rotate(10deg); }
            40% { transform: rotate(-10deg); }
            50% { transform: rotate(5deg); }
            60% { transform: rotate(-5deg); }
        }

        .live-badge {
            background: #ff4757;
            padding: 5px 15px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 700;
            animation: livePulse 1.5s infinite;
            white-space: nowrap;
        }

        @keyframes livePulse {
            0% { opacity: 1; background: #ff4757; }
            50% { opacity: 0.7; background: #ff6b81; }
            100% { opacity: 1; background: #ff4757; }
        }

        .ticker-wrapper {
            margin-right: 200px;
            padding: 20px 0;
            overflow: hidden;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05));
        }

        .ticker-content {
            display: inline-block;
            white-space: nowrap;
            animation: tickerScroll 30s linear infinite;
            padding-left: 100%;
        }

        .ticker-content:hover {
            animation-play-state: paused;
        }

        @keyframes tickerScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }

        .news-item-ticker {
            display: inline-block;
            background: rgba(255, 255, 255, 0.05);
            padding: 12px 30px;
            margin: 0 15px;
            border-radius: 40px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5px);
            transition: all 0.3s;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .news-item-ticker:hover {
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 15px 30px rgba(255, 107, 107, 0.4);
        }

        .ticker-category {
            background: rgba(255, 255, 255, 0.2);
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 12px;
            margin-left: 10px;
        }

        .ticker-title {
            font-weight: 500;
            margin: 0 10px;
        }

        .ticker-time {
            font-size: 12px;
            opacity: 0.7;
        }

        /* بخش اخبار ویژه */
        .featured-news {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
            margin: 30px 0;
        }

        .featured-main {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 30px;
            padding: 30px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
            cursor: pointer;
            transition: all 0.3s;
        }

        .featured-main::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><path d="M20 20 L80 20 L80 80 L20 80 Z" stroke="white" stroke-width="0.5" fill="none" opacity="0.1"/></svg>');
            animation: borderMove 10s linear infinite;
        }

        @keyframes borderMove {
            0% { transform: rotate(0deg) scale(1); }
            100% { transform: rotate(360deg) scale(1.2); }
        }

        .featured-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background: #ff4757;
            padding: 5px 20px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 700;
            animation: pulse 2s infinite;
        }

        .featured-side {
            display: grid;
            gap: 20px;
        }

        .featured-item {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
            cursor: pointer;
        }

        .featured-item:hover {
            transform: translateX(-10px);
            background: rgba(255, 255, 255, 0.1);
            border-color: #4ecdc4;
        }

        /* گرید اخبار */
        .news-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 25px;
            margin: 40px 0;
        }

        .news-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            cursor: pointer;
        }

        .news-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            opacity: 0;
            transition: opacity 0.4s;
            z-index: -1;
        }

        .news-card:hover {
            transform: translateY(-15px) scale(1.02);
            border-color: #4ecdc4;
            box-shadow: 0 30px 60px rgba(78, 205, 196, 0.3);
        }

        .news-card:hover::before {
            opacity: 0.1;
        }

        .card-category {
            display: inline-block;
            background: rgba(255, 255, 255, 0.1);
            padding: 5px 15px;
            border-radius: 30px;
            font-size: 12px;
            margin-bottom: 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-title {
            font-size: 20px;
            font-weight: 700;
            margin: 15px 0;
            line-height: 1.4;
        }

        .card-description {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            line-height: 1.6;
            margin: 15px 0;
        }

        .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-date {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.5);
        }

        .read-more {
            color: #4ecdc4;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: gap 0.3s;
        }

        .read-more:hover {
            gap: 10px;
            color: #ff6b6b;
        }

        /* دکمه بروزرسانی */
        .refresh-section {
            display: flex;
            justify-content: center;
            margin: 40px 0;
        }

        .refresh-btn {
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            border: none;
            color: white;
            padding: 15px 50px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 15px;
            border: 2px solid rgba(255, 255, 255, 0.2);
            position: relative;
            overflow: hidden;
        }

        .refresh-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .refresh-btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .refresh-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 40px rgba(255, 107, 107, 0.4);
        }

        .refresh-btn i {
            font-size: 24px;
            animation: spin 2s linear infinite;
            animation-play-state: paused;
        }

        .refresh-btn:hover i {
            animation-play-state: running;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* وضعیت‌ها */
        .loading-state {
            text-align: center;
            padding: 60px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 30px;
            backdrop-filter: blur(10px);
        }

        .loading-spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 255, 255, 0.1);
            border-top-color: #4ecdc4;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        /* فوتر */
        .footer {
            text-align: center;
            padding: 30px;
            margin-top: 50px;
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .update-time {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 30px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 30px;
            font-size: 14px;
        }

        /* ریسپانسیو */
        @media (max-width: 768px) {
            .featured-news {
                grid-template-columns: 1fr;
            }
            
            .ticker-header {
                position: relative;
                width: 100%;
                border-radius: 50px;
                justify-content: center;
            }
            
            .ticker-wrapper {
                margin-right: 0;
                padding: 15px;
            }
            
            .header-top {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .news-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>


    <div class="animated-bg"></div>
    <div class="particles" id="particles"></div>

    <div class="container">
        <!-- هدر پیشرفته -->
        <header class="advanced-header">
            <div class="header-top">
                <div class="logo-section">
                    <div class="logo">
                        <i class="fas fa-newspaper"></i> خبرفوری
                    </div>
                    <div class="date-badge">
                        <i class="far fa-calendar-alt"></i>
                        <span id="persianDate"></span>
                    </div>
                </div>
                
                <div class="stats">
                    <div class="stat-item">
                        <i class="fas fa-bolt"></i>
                        <span>آخرین اخبار: <span class="stat-number" id="newsCount">0</span></span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-users"></i>
                        <span>بازدید امروز: <span class="stat-number">۱۲,۸۴۵</span></span>
                    </div>
                </div>
            </div>

            <div class="category-menu" id="categoryMenu">
                <button class="category-btn active" onclick="filterNews('all')">
                    <i class="fas fa-globe"></i> همه اخبار
                </button>
                <button class="category-btn" onclick="filterNews('سیاسی')">
                    <i class="fas fa-landmark"></i> سیاسی
                </button>
                <button class="category-btn" onclick="filterNews('اقتصاد')">
                    <i class="fas fa-chart-line"></i> اقتصاد
                </button>
                <button class="category-btn" onclick="filterNews('علم و فناوری')">
                    <i class="fas fa-microchip"></i> فناوری
                </button>
                <button class="category-btn" onclick="filterNews('فرهنگی')">
                    <i class="fas fa-palette"></i> فرهنگی
                </button>
                <button class="category-btn" onclick="filterNews('ورزشی')">
                    <i class="fas fa-futbol"></i> ورزشی
                </button>
            </div>
        </header>

        <!-- نوار اخبار متحرک پیشرفته -->
        <div class="news-ticker-premium">
            <div class="ticker-header">
                <i class="fas fa-bell"></i>
                <span class="live-badge">LIVE</span>
                <span>آخرین اخبار</span>
            </div>
            <div class="ticker-wrapper">
                <div class="ticker-content" id="tickerContent">
                    <!-- اخبار به صورت dynamic اضافه می‌شوند -->
                </div>
            </div>
        </div>

        <!-- اخبار ویژه -->
        <div class="featured-news" id="featuredNews">
            <!-- اخبار ویژه به صورت dynamic اضافه می‌شوند -->
        </div>

        <!-- گرید اخبار -->
        <div id="newsGrid" class="news-grid">
            <!-- اخبار به صورت dynamic اضافه می‌شوند -->
        </div>

        <!-- بخش بروزرسانی -->
        <div class="refresh-section">
            <button class="refresh-btn" onclick="fetchNews()">
                <i class="fas fa-sync-alt"></i>
                بروزرسانی اخبار
            </button>
        </div>

        <!-- فوتر -->
        <footer class="footer">
            <div class="update-time" id="lastUpdate">
                <i class="far fa-clock"></i>
                <span>آخرین بروزرسانی: در حال دریافت...</span>
            </div>
            <p style="margin-top: 20px; opacity: 0.5; font-size: 12px;">
                تمامی حقوق برای خبرگزاری مدرن محفوظ است © ۱۴۰۲
            </p>
        </footer>
    </div>

    <script>
        // کلید API
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        // متغیرهای سراسری
        let allNews = [];
        let currentCategory = 'all';

        // ایجاد ذرات معلق
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 5 + 's';
                particle.style.animationDuration = (3 + Math.random() * 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // نمایش تاریخ شمسی
        function updatePersianDate() {
            const now = new Date();
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                hour: '2-digit',
                minute: '2-digit'
            };
            const persianDate = now.toLocaleDateString('fa-IR', options);
            document.getElementById('persianDate').textContent = persianDate;
        }

        // دریافت اخبار از API
        async function fetchNews() {
            const refreshBtn = document.querySelector('.refresh-btn');
            const newsGrid = document.getElementById('newsGrid');
            const tickerContent = document.getElementById('tickerContent');

            refreshBtn.disabled = true;
            refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال بروزرسانی...';

            // نمایش لودینگ
            newsGrid.innerHTML = \`
                <div class="loading-state" style="grid-column: 1/-1;">
                    <div class="loading-spinner"></div>
                    <p>در حال دریافت آخرین اخبار از سراسر جهان...</p>
                </div>
            \`;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': \`Bearer \${API_KEY}\`
                    },
                    body: JSON.stringify({
                        model: "mixtral-8x7b-32768",
                        messages: [
                            {
                                role: "system",
                                content: \`شما یک خبرنگار حرفه‌ای هستید. لطفاً ۱۲ خبر جدید، واقعی و جذاب از ایران و جهان در قالب یک آرایه JSON برگردان. 
                                هر خبر باید شامل این فیلدها باشد:
                                - title: عنوان خبر (حداکثر ۱۵ کلمه)
                                - description: توضیح کوتاه (حداکثر ۳۰ کلمه)
                                - date: تاریخ به شمسی (مثلاً ۱۴۰۲/۱۲/۲۵)
                                - category: دسته‌بندی (سیاسی، اقتصاد، علم و فناوری، فرهنگی، ورزشی، اجتماعی)
                                - time: ساعت (مثلاً ۱۴:۳۰)
                                - featured: boolean (آیا خبر ویژه است؟)
                                - image_placeholder: string (آیکون مناسب خبر)
                                
                                اخبار باید متنوع و از دسته‌بندی‌های مختلف باشند. حتماً ۳ خبر ویژه انتخاب کن.\`
                            },
                            {
                                role: "user",
                                content: "آخرین اخبار روز ایران و جهان را به صورت JSON بده."
                            }
                        ],
                        temperature: 0.8,
                        max_tokens: 3000,
                        response_format: { type: "json_object" }
                    })
                });

                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }

                const data = await response.json();
                const content = JSON.parse(data.choices[0].message.content);
                
                // پردازش اخبار
                if (content.news && Array.isArray(content.news)) {
                    allNews = content.news;
                } else if (Array.isArray(content)) {
                    allNews = content;
                } else if (content.articles) {
                    allNews = content.articles;
                } else {
                    allNews = getDefaultNews();
                }

                // اطمینان از وجود حداقل ۸ خبر
                while (allNews.length < 8) {
                    allNews = [...allNews, ...getDefaultNews()];
                }

                // بروزرسانی نمایش
                updateNewsCount();
                displayAllNews();
                
                const now = new Date();
                const persianTime = now.toLocaleDateString('fa-IR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
                document.getElementById('lastUpdate').innerHTML = \`
                    <i class="far fa-clock"></i>
                    <span>آخرین بروزرسانی: \${persianTime}</span>
                \`;

            } catch (error) {
                console.error('خطا:', error);
                allNews = getDefaultNews();
                displayAllNews();
                
                newsGrid.innerHTML = \`
                    <div class="loading-state" style="grid-column: 1/-1; background: rgba(255, 0, 0, 0.1);">
                        <i class="fas fa-exclamation-triangle" style="font-size: 40px; color: #ff4757; margin-bottom: 20px;"></i>
                        <p>خطا در دریافت اخبار. نمایش اخبار پیش‌فرض...</p>
                    </div>
                \`;
                setTimeout(() => {
                    displayAllNews();
                }, 2000);
            } finally {
                refreshBtn.disabled = false;
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> بروزرسانی اخبار';
            }
        }

        // نمایش همه اخبار
        function displayAllNews() {
            displayTickerNews();
            displayFeaturedNews();
            displayGridNews();
        }

        // نمایش نوار اخبار متحرک (همیشه بروز و بی‌نهایت)
        function displayTickerNews() {
            const tickerContent = document.getElementById('tickerContent');
            let tickerHTML = '';
            
            // تکرار اخبار برای ایجاد نوار بی‌نهایت
            for (let repeat = 0; repeat < 3; repeat++) {
                allNews.forEach(news => {
                    tickerHTML += \`
                        <div class="news-item-ticker" onclick="showNewsDetail('\${news.title}')">
                            <span class="ticker-category" style="background: \${getCategoryColor(news.category)}">
                                \${news.category || 'عمومی'}
                            </span>
                            <span class="ticker-title">\${news.title || 'بدون عنوان'}</span>
                            <span class="ticker-time">
                                <i class="far fa-clock"></i> \${news.time || '۱۴:۳۰'}
                            </span>
                        </div>
                    \`;
                });
            }
            
            tickerContent.innerHTML = tickerHTML;
        }

        // نمایش اخبار ویژه
        function displayFeaturedNews() {
            const featuredNews = document.getElementById('featuredNews');
            const featured = allNews.filter(news => news.featured).slice(0, 3);
            
            if (featured.length === 0) {
                featuredNews.style.display = 'none';
                return;
            }

            featuredNews.style.display = 'grid';
            
            let featuredHTML = '';
            
            // خبر ویژه اصلی
            if (featured[0]) {
                featuredHTML += \`
                    <div class="featured-main" onclick="showNewsDetail('\${featured[0].title}')">
                        <div class="featured-badge">خبر ویژه</div>
                        <i class="fas \${featured[0].image_placeholder || 'fa-star'}" style="font-size: 50px; opacity: 0.2; position: absolute; bottom: 20px; left: 20px;"></i>
                        <h3 style="font-size: 28px; margin-bottom: 15px;">\${featured[0].title}</h3>
                        <p style="opacity: 0.8; font-size: 16px; line-height: 1.6;">\${featured[0].description}</p>
                        <div style="margin-top: 20px; display: flex; gap: 15px;">
                            <span><i class="far fa-clock"></i> \${featured[0].time || '۱۴:۳۰'}</span>
                            <span><i class="far fa-calendar"></i> \${featured[0].date || '۱۴۰۲/۱۲/۲۵'}</span>
                        </div>
                    </div>
                \`;
            }

            // اخبار ویژه کناری
            featuredHTML += '<div class="featured-side">';
            for (let i = 1; i < Math.min(3, featured.length); i++) {
                featuredHTML += \`
                    <div class="featured-item" onclick="showNewsDetail('\${featured[i].title}')">
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <i class="fas \${featured[i].image_placeholder || 'fa-newspaper'}" style="font-size: 30px; color: #4ecdc4;"></i>
                            <div>
                                <h4>\${featured[i].title}</h4>
                                <p style="opacity: 0.6; font-size: 12px; margin-top: 5px;">
                                    <i class="far fa-clock"></i> \${featured[i].time || '۱۴:۳۰'}
                                </p>
                            </div>
                        </div>
                    </div>
                \`;
            }
            featuredHTML += '</div>';

            featuredNews.innerHTML = featuredHTML;
        }

        // نمایش گرید اخبار
        function displayGridNews() {
            const newsGrid = document.getElementById('newsGrid');
            let filteredNews = allNews;
            
            if (currentCategory !== 'all') {
                filteredNews = allNews.filter(news => news.category === currentCategory);
            }

            if (filteredNews.length === 0) {
                newsGrid.innerHTML = \`
                    <div class="loading-state" style="grid-column: 1/-1;">
                        <i class="fas fa-search" style="font-size: 50px; opacity: 0.5; margin-bottom: 20px;"></i>
                        <p>خبری در این دسته‌بندی یافت نشد</p>
                    </div>
                \`;
                return;
            }

            let gridHTML = '';
            filteredNews.forEach(news => {
                gridHTML += \`
                    <div class="news-card" onclick="showNewsDetail('\${news.title}')">
                        <div class="card-category" style="background: \${getCategoryColor(news.category)}20; border-color: \${getCategoryColor(news.category)}">
                            <i class="fas \${getCategoryIcon(news.category)}"></i> \${news.category || 'عمومی'}
                        </div>
                        <h3 class="card-title">\${news.title || 'بدون عنوان'}</h3>
                        <p class="card-description">\${news.description || 'توضیحاتی موجود نیست'}</p>
                        <div class="card-footer">
                            <div class="card-date">
                                <i class="far fa-calendar-alt"></i>
                                <span>\${news.date || '۱۴۰۲/۱۲/۲۵'}</span>
                                <i class="far fa-clock" style="margin-right: 10px;"></i>
                                <span>\${news.time || '۱۴:۳۰'}</span>
                            </div>
                            <span class="read-more">
                                ادامه مطلب <i class="fas fa-arrow-left"></i>
                            </span>
                        </div>
                    </div>
                \`;
            });

            newsGrid.innerHTML = gridHTML;
        }

        // فیلتر اخبار بر اساس دسته‌بندی
        function filterNews(category) {
            currentCategory = category;
            
            // بروزرسانی کلاس فعال دکمه‌ها
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.includes(category === 'all' ? 'همه اخبار' : category)) {
                    btn.classList.add('active');
                }
            });
            
            displayGridNews();
        }

        // نمایش جزییات خبر
        function showNewsDetail(title) {
            const news = allNews.find(n => n.title === title);
            if (news) {
                alert(\`
📰 \${news.title}

📝 \${news.description}

📅 تاریخ: \${news.date} - ساعت: \${news.time}
🏷 دسته‌بندی: \${news.category}

این خبر به صورت آزمایشی نمایش داده می‌شود.
                \`);
            }
        }

        // دریافت رنگ دسته‌بندی
        function getCategoryColor(category) {
            const colors = {
                'سیاسی': '#ff6b6b',
                'اقتصاد': '#4ecdc4',
                'علم و فناوری': '#45b7d1',
                'فرهنگی': '#96ceb4',
                'ورزشی': '#ffeaa7',
                'اجتماعی': '#dfe6e9'
            };
            return colors[category] || '#4ecdc4';
        }

        // دریافت آیکون دسته‌بندی
        function getCategoryIcon(category) {
            const icons = {
                'سیاسی': 'fa-landmark',
                'اقتصاد': 'fa-chart-line',
                'علم و فناوری': 'fa-microchip',
                'فرهنگی': 'fa-palette',
                'ورزشی': 'fa-futbol',
                'اجتماعی': 'fa-users'
            };
            return icons[category] || 'fa-newspaper';
        }

        // بروزرسانی تعداد اخبار
        function updateNewsCount() {
            document.getElementById('newsCount').textContent = allNews.length;
        }

        // اخبار پیش‌فرض
        function getDefaultNews() {
            return [
                {
                    title: "رونمایی از پیشرفته‌ترین ماهواره مخابراتی ایران",
                    description: "با حضور رئیس جمهور، از جدیدترین ماهواره مخابراتی ایران با قابلیت پوشش دهی ۱۰۰ درصدی کشور رونمایی شد.",
                    date: "۱۴۰۲/۱۲/۲۵",
                    time: "۱۴:۳۰",
                    category: "علم و فناوری",
                    featured: true,
                    image_placeholder: "fa-satellite"
                },
                {
                    title: "افزایش ۲۵ درصدی صادرات غیرنفتی",
                    description: "رئیس کل گمرک ایران از رشد ۲۵ درصدی صادرات غیرنفتی در ۱۱ ماهه سال جاری خبر داد.",
                    date: "۱۴۰۲/۱۲/۲۵",
                    time: "۱۳:۱۵",
                    category: "اقتصاد",
                    featured: true,
                    image_placeholder: "fa-chart-line"
                },
                {
                    title: "کشف جدید دانشمندان ایرانی در حوزه نانوتکنولوژی",
                    description: "پژوهشگران ایرانی موفق به ساخت نانو حسگرهایی برای تشخیص سریع ویروس‌ها شدند.",
                    date: "۱۴۰۲/۱۲/۲۴",
                    time: "۱۱:۴۵",
                    category: "علم و فناوری",
                    featured: false,
                    image_placeholder: "fa-flask"
                },
                {
                    title: "برگزاری جشنواره بین‌المللی فیلم‌های کودک و نوجوان",
                    description: "سی و پنجمین جشنواره بین‌المللی فیلم‌های کودک و نوجوان در اصفهان آغاز به کار کرد.",
                    date: "۱۴۰۲/۱۲/۲۴",
                    time: "۱۰:۰۰",
                    category: "فرهنگی",
                    featured: true,
                    image_placeholder: "fa-film"
                },
                {
                    title: "صعود تیم ملی فوتبال به مرحله بعدی مسابقات",
                    description: "تیم ملی فوتبال ایران با پیروزی قاطع برابر حریف، به مرحله بعدی مسابقات صعود کرد.",
                    date: "۱۴۰۲/۱۲/۲۳",
                    time: "۲۲:۱۵",
                    category: "ورزشی",
                    featured: false,
                    image_placeholder: "fa-futbol"
                },
                {
                    title: "افتتاح بزرگترین پروژه آبرسانی کشور",
                    description: "بزرگترین پروژه آبرسانی کشور با حضور وزیر نیرو در استان سیستان و بلوچستان به بهره‌برداری رسید.",
                    date: "۱۴۰۲/۱۲/۲۳",
                    time: "۰۹:۳۰",
                    category: "اجتماعی",
                    featured: false,
                    image_placeholder: "fa-water"
                },
                {
                    title: "رایزنی‌های دیپلماتیک برای توسعه روابط اقتصادی",
                    description: "وزیر امور خارجه در دیدار با همتایان خود بر توسعه روابط اقتصادی با کشورهای همسایه تاکید کرد.",
                    date: "۱۴۰۲/۱۲/۲۲",
                    time: "۱۶:۴۵",
                    category: "سیاسی",
                    featured: true,
                    image_placeholder: "fa-globe"
                },
                {
                    title: "رونمایی از جدیدترین دستاوردهای دفاعی",
                    description: "وزارت دفاع از جدیدترین موشک‌های بالستیک با برد ۲۰۰۰ کیلومتر رونمایی کرد.",
                    date: "۱۴۰۲/۱۲/۲۲",
                    time: "۱۱:۲۰",
                    category: "سیاسی",
                    featured: false,
                    image_placeholder: "fa-rocket"
                }
            ];
        }

        // شروع به کار
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            updatePersianDate();
            setInterval(updatePersianDate, 60000); // بروزرسانی هر دقیقه
            fetchNews();
            setInterval(fetchNews, 300000); // بروزرسانی هر 5 دقیقه
        });
    <\/script>

`,className:"w-html-embed"})})}),N=a=>{const{origin:t,pathname:s,search:r}=new URL(a);return`${t}${s}${r}`},z=d.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),T=({data:a})=>{const{system:t,resources:s,url:r,pageMeta:o}=a,c=N(r),p=d.useMemo(()=>({imageLoader:n,assetBaseUrl:i,resources:s,breakpoints:y,onError:console.error}),[s]);return e.jsxs(f.Provider,{value:p,children:[e.jsx(g.Provider,{value:r,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(u,{url:r,pageMeta:o,siteName:l,imageLoader:n,assetBaseUrl:i}),e.jsx(b,{children:o.title})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),P=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${i}${h}`})}),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},$=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-36/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-36/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:$}}};export{j as configValuesSerialized};
