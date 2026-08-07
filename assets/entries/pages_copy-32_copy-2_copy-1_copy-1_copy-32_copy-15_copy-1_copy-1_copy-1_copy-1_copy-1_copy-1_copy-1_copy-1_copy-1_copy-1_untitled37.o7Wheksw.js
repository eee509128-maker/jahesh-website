import{j as e,r as c,a as i,i as o,R as p,b as g,P as u,c as y,d as v}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",w=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],x=r=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(b,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نوار اخبار هوشمند</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-primary: #0a0a12;
            --bg-secondary: #12121f;
            --bg-card: #1a1a2a;
            --accent-red: #ef4444;
            --accent-blue: #3b82f6;
            --accent-gold: #f59e0b;
            --accent-green: #22c55e;
            --accent-purple: #a855f7;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Vazirmatn', system-ui, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Background */
        .bg-pattern {
            position: fixed;
            inset: 0;
            background: 
                radial-gradient(ellipse at 10% 20%, rgba(239, 68, 68, 0.08) 0%, transparent 40%),
                radial-gradient(ellipse at 90% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 40%),
                radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 60%);
            z-index: 0;
        }

        .container {
            position: relative;
            z-index: 1;
        }

        /* Header */
        .main-header {
            background: linear-gradient(180deg, var(--bg-secondary) 0%, transparent 100%);
            padding: 2rem;
            text-align: center;
        }

        .main-header h1 {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-red), var(--accent-gold));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
        }

        .main-header p {
            color: var(--text-secondary);
        }

        /* News Ticker Section */
        .ticker-section {
            margin: 2rem 0;
        }

        .ticker-wrapper {
            background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 1rem;
            overflow: hidden;
            position: relative;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        /* Live Badge */
        .ticker-header {
            display: flex;
            align-items: center;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(90deg, rgba(239, 68, 68, 0.15) 0%, transparent 100%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .live-badge {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.35rem 0.75rem;
            background: var(--accent-red);
            border-radius: 0.5rem;
            font-weight: 700;
            font-size: 0.85rem;
            animation: livePulse 2s ease-in-out infinite;
        }

        @keyframes livePulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        .live-dot {
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
            animation: liveDot 1s ease-in-out infinite;
        }

        @keyframes liveDot {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(0.5); }
        }

        .ticker-status {
            margin-right: 1rem;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .update-time {
            margin-right: auto;
            color: var(--text-secondary);
            font-size: 0.85rem;
        }

        /* Ticker Container */
        .ticker-container {
            padding: 1.5rem 0;
            overflow: hidden;
            position: relative;
        }

        /* Gradient Overlays */
        .ticker-container::before,
        .ticker-container::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100px;
            z-index: 10;
            pointer-events: none;
        }

        .ticker-container::before {
            left: 0;
            background: linear-gradient(90deg, var(--bg-card) 0%, transparent 100%);
        }

        .ticker-container::after {
            right: 0;
            background: linear-gradient(-90deg, var(--bg-card) 0%, transparent 100%);
        }

        /* Ticker Track */
        .ticker-track {
            display: flex;
            gap: 3rem;
            animation: scrollRight 60s linear infinite;
            width: max-content;
        }

        .ticker-track:hover {
            animation-play-state: paused;
        }

        @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
        }

        /* News Item */
        .news-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 0.75rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
            cursor: pointer;
            transition: all 0.3s ease;
            min-width: 400px;
        }

        .news-item:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.15);
            transform: scale(1.02);
        }

        .news-category {
            padding: 0.35rem 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            white-space: nowrap;
        }

        .category-tech { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .category-economy { background: rgba(34, 197, 94, 0.2); color: #4ade80; }
        .category-politics { background: rgba(239, 68, 68, 0.2); color: #f87171; }
        .category-sports { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }
        .category-science { background: rgba(168, 85, 247, 0.2); color: #c084fc; }
        .category-world { background: rgba(6, 182, 212, 0.2); color: #22d3ee; }

        .news-content {
            flex: 1;
        }

        .news-title {
            font-weight: 600;
            font-size: 1rem;
            margin-bottom: 0.25rem;
            line-height: 1.4;
        }

        .news-meta {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: var(--text-secondary);
            font-size: 0.8rem;
        }

        .news-time {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .news-source {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .news-arrow {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .news-item:hover .news-arrow {
            background: var(--accent-blue);
        }

        .news-arrow svg {
            width: 16px;
            height: 16px;
            fill: var(--text-secondary);
            transition: fill 0.3s ease;
        }

        .news-item:hover .news-arrow svg {
            fill: white;
        }

        /* Multiple Tickers */
        .ticker-row {
            margin-bottom: 1rem;
        }

        .ticker-row:last-child {
            margin-bottom: 0;
        }

        .ticker-row.secondary .ticker-track {
            animation: scrollRightSlow 90s linear infinite;
            animation-direction: reverse;
        }

        @keyframes scrollRightSlow {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }

        /* News Cards Section */
        .news-cards-section {
            padding: 2rem;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .view-all-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: transparent;
            border: 1px solid var(--accent-blue);
            border-radius: 0.5rem;
            color: var(--accent-blue);
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .view-all-btn:hover {
            background: var(--accent-blue);
            color: white;
        }

        /* News Cards Grid */
        .news-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .news-card {
            background: var(--bg-card);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 1rem;
            overflow: hidden;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .news-card:hover {
            transform: translateY(-5px);
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        .card-content {
            padding: 1.25rem;
        }

        .card-category {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.7rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
        }

        .card-title {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            line-height: 1.4;
        }

        .card-excerpt {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 1rem;
        }

        .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .card-source {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .source-avatar {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
        }

        .source-name {
            font-size: 0.85rem;
            color: var(--text-secondary);
        }

        .card-time {
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        /* Stats Bar */
        .stats-bar {
            display: flex;
            justify-content: center;
            gap: 3rem;
            padding: 1.5rem;
            background: var(--bg-card);
            border-radius: 1rem;
            margin: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stat-item {
            text-align: center;
        }

        .stat-value {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .stat-label {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* Loading Skeleton */
        .skeleton {
            background: linear-gradient(90deg, var(--bg-card) 25%, rgba(255,255,255,0.1) 50%, var(--bg-card) 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
            border-radius: 0.5rem;
        }

        @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        /* Breakpoint Indicator */
        .breakpoint-indicator {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 0.5rem 1rem;
            background: var(--bg-card);
            border-radius: 0.5rem;
            font-size: 0.8rem;
            color: var(--text-secondary);
            border: 1px solid var(--accent-gold);
            z-index: 1000;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .main-header h1 {
                font-size: 1.75rem;
            }

            .ticker-header {
                flex-wrap: wrap;
                gap: 0.5rem;
            }

            .news-item {
                min-width: 300px;
            }

            .stats-bar {
                flex-wrap: wrap;
                gap: 1.5rem;
            }

            .breakpoint-indicator {
                display: none;
            }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
            .ticker-track {
                animation: none;
            }

            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
            }
        }
    </style>


    <div class="bg-pattern"></div>

    <div class="container">
        <!-- Header -->
        <header class="main-header">
            <h1>خبرنامه زنده</h1>
            <p>آخرین اخبار و رویدادهای مهم جهان</p>
        </header>

        <!-- Stats Bar -->
        <div class="stats-bar">
            <div class="stat-item">
                <div class="stat-value" id="totalNews">۱,۲۴۸</div>
                <div class="stat-label">خبر امروز</div>
            </div>
            <div class="stat-item">
                <div class="stat-value" id="breakingNews">۱۲</div>
                <div class="stat-label">خبر فوری</div>
            </div>
            <div class="stat-item">
                <div class="stat-value" id="sourcesCount">۸۵</div>
                <div class="stat-label">منبع فعال</div>
            </div>
            <div class="stat-item">
                <div class="stat-value" id="updateCount">۲۴/۷</div>
                <div class="stat-label">به‌روزرسانی</div>
            </div>
        </div>

        <!-- Main News Ticker -->
        <section class="ticker-section" style="margin: 0 2rem;">
            <div class="ticker-wrapper">
                <div class="ticker-header">
                    <div class="live-badge">
                        <div class="live-dot"></div>
                        زنده
                    </div>
                    <span class="ticker-status">آخرین اخبار در حال پخش...</span>
                    <span class="update-time">آخرین به‌روزرسانی: <span id="currentTime">--:--:--</span></span>
                </div>

                <!-- Primary Ticker -->
                <div class="ticker-container">
                    <div class="ticker-track" id="tickerTrack1">
                        <!-- News items will be inserted here -->
                    </div>
                </div>

                <!-- Secondary Ticker -->
                <div class="ticker-container ticker-row secondary" style="border-top: 1px solid rgba(255,255,255,0.05);">
                    <div class="ticker-track" id="tickerTrack2">
                        <!-- More news items will be inserted here -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured News Cards -->
        <section class="news-cards-section">
            <div class="section-header">
                <h2 class="section-title">اخبار برگزیده</h2>
                <button class="view-all-btn">
                    مشاهده همه
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg>
                </button>
            </div>

            <div class="news-grid" id="newsGrid">
                <!-- News cards will be inserted here -->
            </div>
        </section>
    </div>

    <script>
        // ========== News Data ==========
        // In production, replace this with real API data
        const NEWS_DATA = {
            breaking: [
                {
                    id: 1,
                    title: "بیت‌کوین به بالاترین سطح خود در ۲ سال رسید و از ۷۰ هزار دلار عبور کرد",
                    category: "economy",
                    categoryName: "اقتصاد",
                    source: "خبرگزاری اقتصادی",
                    time: "۵ دقیقه پیش",
                    url: "#"
                },
                {
                    id: 2,
                    title: "مذاکرات هسته‌ای وین به مرحله حساس رسید - گزارش جدید از منابع آگاه",
                    category: "politics",
                    categoryName: "سیاسی",
                    source: "خبرگزاری بین‌الملل",
                    time: "۱۲ دقیقه پیش",
                    url: "#"
                },
                {
                    id: 3,
                    title: "تیم ملی فوتبال ایران با برتری ۳ بر ۱ به مرحله بعد صعود کرد",
                    category: "sports",
                    categoryName: "ورزشی",
                    source: "ورزش سه",
                    time: "۲۵ دقیقه پیش",
                    url: "#"
                },
                {
                    id: 4,
                    title: "شبکه‌های ۵G در ۱۰ شهر جدید ایران فعال شد - سرعت اینترنت ۱۰ برابر شد",
                    category: "tech",
                    categoryName: "فناوری",
                    source: "زومیت",
                    time: "۳۰ دقیقه پیش",
                    url: "#"
                },
                {
                    id: 5,
                    title: "دانشمندان موفق به کشف سیاره‌ای شبیه زمین شدند که احتمال حیات در آن وجود دارد",
                    category: "science",
                    categoryName: "علمی",
                    source: "ایسنا",
                    time: "۱ ساعت پیش",
                    url: "#"
                },
                {
                    id: 6,
                    title: "قیمت دلار امروز با کاهش ۵۰۰ تومانی مواجه شد - آرامش نسبی در بازار",
                    category: "economy",
                    categoryName: "اقتصاد",
                    source: "تجارت‌نیوز",
                    time: "۱ ساعت پیش",
                    url: "#"
                },
                {
                    id: 7,
                    title: "هوش مصنوعی GPT-5 رونمایی شد - قابلیت‌های بی‌نظیر در درک زبان فارسی",
                    category: "tech",
                    categoryName: "فناوری",
                    source: "دنیای کامپیوتر",
                    time: "۲ ساعت پیش",
                    url: "#"
                },
                {
                    id: 8,
                    title: "زلزله ۵.۲ ریشتری در جنوب کشور - تاکنون خسارت جانی گزارش نشده",
                    category: "world",
                    categoryName: "حوادث",
                    source: "خبرگزاری مهر",
                    time: "۲ ساعت پیش",
                    url: "#"
                },
                {
                    id: 9,
                    title: "رونمایی از خودروی برقی ایرانی با برد ۵۰۰ کیلومتر - تولید انبوه از سال آینده",
                    category: "tech",
                    categoryName: "فناوری",
                    source: "خودرو نیوز",
                    time: "۳ ساعت پیش",
                    url: "#"
                },
                {
                    id: 10,
                    title: "توافق‌نامه جدید تجاری بین ایران و کشورهای همسایه امضا شد",
                    category: "politics",
                    categoryName: "سیاسی",
                    source: "خبرگزاری جمهوری اسلامی",
                    time: "۳ ساعت پیش",
                    url: "#"
                }
            ],
            featured: [
                {
                    id: 101,
                    title: "انقلاب هوش مصنوعی: چگونه AI زندگی روزمره ما را تغییر می‌دهد",
                    excerpt: "هوش مصنوعی در حال تغییر تمام جنبه‌های زندگی ماست. از پزشکی گرفته تا حمل‌ونقل، این فناوری نوید آینده‌ای روشن را می‌دهد.",
                    category: "tech",
                    categoryName: "فناوری",
                    source: "مجله علمی نوین",
                    time: "۱ ساعت پیش",
                    image: "https://picsum.photos/seed/ai-news/400/200",
                    url: "#"
                },
                {
                    id: 102,
                    title: "بازار جهانی ارزهای دیجیتال با رکورد جدیدی مواجه شد",
                    excerpt: "ارزش کل بازار ارزهای دیجیتال به ۳ تریلیون دلار رسید و تحلیلگران از آینده‌ای روشن خبر می‌دهند.",
                    category: "economy",
                    categoryName: "اقتصاد",
                    source: "کریپتونews",
                    time: "۲ ساعت پیش",
                    image: "https://picsum.photos/seed/crypto-market/400/200",
                    url: "#"
                },
                {
                    id: 103,
                    title: "کشف جدید دانشمندان در درمان سرطان - امیدواری به درمان قطعی",
                    excerpt: "محققان دانشگاه تهران موفق به کشف روش جدیدی در درمان انواع سرطان شدند که نتایج امیدوارکننده‌ای داشته است.",
                    category: "science",
                    categoryName: "علمی",
                    source: "دانشگاه تهران",
                    time: "۴ ساعت پیش",
                    image: "https://picsum.photos/seed/cancer-research/400/200",
                    url: "#"
                },
                {
                    id: 104,
                    title: "لیگ برتر فوتبال: نتایج شگفت‌انگیز هفته بیستم",
                    excerpt: "هفته بیستم لیگ برتر با نتایج غیرمنتظره‌ای همراه بود و جدول رده‌بندی تغییرات زیادی کرد.",
                    category: "sports",
                    categoryName: "ورزشی",
                    source: "ورزش سه",
                    time: "۵ ساعت پیش",
                    image: "https://picsum.photos/seed/football-league/400/200",
                    url: "#"
                }
            ]
        };

        // ========== DOM Elements ==========
        const tickerTrack1 = document.getElementById('tickerTrack1');
        const tickerTrack2 = document.getElementById('tickerTrack2');
        const newsGrid = document.getElementById('newsGrid');
        const currentTimeEl = document.getElementById('currentTime');

        // ========== Initialize ==========
        function init() {
            renderTickers();
            renderNewsCards();
            updateTime();
            setInterval(updateTime, 1000);
        }

        // ========== Update Time ==========
        function updateTime() {
            const now = new Date();
            currentTimeEl.textContent = now.toLocaleTimeString('fa-IR');
        }

        // ========== Render Tickers ==========
        function renderTickers() {
            // Primary ticker
            const primaryHTML = generateTickerHTML(NEWS_DATA.breaking);
            tickerTrack1.innerHTML = primaryHTML + primaryHTML; // Duplicate for seamless loop

            // Secondary ticker (different items)
            const secondaryNews = [...NEWS_DATA.breaking].reverse().slice(0, 6);
            const secondaryHTML = generateTickerHTML(secondaryNews);
            tickerTrack2.innerHTML = secondaryHTML + secondaryHTML;
        }

        // ========== Generate Ticker HTML ==========
        function generateTickerHTML(news) {
            return news.map(item => \`
                <div class="news-item" onclick="openNews(\${item.id})">
                    <span class="news-category category-\${item.category}">\${item.categoryName}</span>
                    <div class="news-content">
                        <div class="news-title">\${item.title}</div>
                        <div class="news-meta">
                            <span class="news-time">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                </svg>
                                \${item.time}
                            </span>
                            <span class="news-source">\${item.source}</span>
                        </div>
                    </div>
                    <div class="news-arrow">
                        <svg viewBox="0 0 24 24">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                    </div>
                </div>
            \`).join('');
        }

        // ========== Render News Cards ==========
        function renderNewsCards() {
            newsGrid.innerHTML = NEWS_DATA.featured.map((item, index) => \`
                <div class="news-card" style="animation: slideUp 0.6s ease-out \${index * 0.1}s both;" onclick="openNews(\${item.id})">
                    <img src="\${item.image}" alt="\${item.title}" class="card-image" loading="lazy">
                    <div class="card-content">
                        <span class="card-category category-\${item.category}">\${item.categoryName}</span>
                        <h3 class="card-title">\${item.title}</h3>
                        <p class="card-excerpt">\${item.excerpt}</p>
                        <div class="card-footer">
                            <div class="card-source">
                                <div class="source-avatar"></div>
                                <span class="source-name">\${item.source}</span>
                            </div>
                            <span class="card-time">\${item.time}</span>
                        </div>
                    </div>
                </div>
            \`).join('');
        }

        // ========== Open News ==========
        function openNews(id) {
            console.log('Opening news:', id);
            // In production, navigate to the full article
            // window.location.href = \`/news/\${id}\`;
        }

        // ========== API Integration (for production) ==========
        async function fetchNewsFromAPI() {
            // Example with NewsAPI
            // const API_KEY = 'YOUR_NEWS_API_KEY';
            // const response = await fetch(\`https://newsapi.org/v2/top-headlines?country=ir&apiKey=\${API_KEY}\`);
            // const data = await response.json();
            // return data.articles;

            // Example with custom backend
            // const response = await fetch('/api/news');
            // return await response.json();
        }

        // ========== Auto-refresh ==========
        // Refresh news every 5 minutes
        setInterval(() => {
            console.log('Refreshing news...');
            // In production: fetchNewsFromAPI().then(renderTickers);
        }, 5 * 60 * 1000);

        // ========== Initialize on Load ==========
        document.addEventListener('DOMContentLoaded', init);

        // ========== Keyframe Animation ==========
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
        \`;
        document.head.appendChild(style);
    <\/script>


`,className:"w-html-embed"})})}),T=r=>{const{origin:t,pathname:n,search:a}=new URL(r);return`${t}${n}${a}`},z=c.memo(({pageKey:r,system:t})=>e.jsx(x,{system:t},r),(r,t)=>r.pageKey===t.pageKey),N=({data:r})=>{const{system:t,resources:n,url:a,pageMeta:s}=r,l=T(a),m=c.useMemo(()=>({imageLoader:o,assetBaseUrl:i,resources:n,breakpoints:f,onError:console.error}),[n]);return e.jsxs(p.Provider,{value:m,children:[e.jsx(g.Provider,{value:a,children:e.jsx(z,{pageKey:l,system:t})}),e.jsx(u,{url:a,pageMeta:s,siteName:d,imageLoader:o,assetBaseUrl:i}),e.jsx(y,{children:s.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),P=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${i}${h}`})}),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),I={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-32/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-32/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{I as configValuesSerialized};
