import{j as s,r as c,a as i,i as r,R as v,b as g,P as m,c as w,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const o="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],u=[],k=e=>s.jsx("body",{className:"w-element",children:s.jsx(f,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>انجمن علمی جهش | نوار اخبار</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&amp;display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #00d4ff;
            --secondary: #ff6b35;
            --accent: #7b2cbf;
            --dark: #0d1117;
            --darker: #080a0f;
            --gold: #ffd700;
            --success: #00ff88;
        }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: var(--darker);
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* ============ NEWS TICKER SECTION ============ */
        .news-ticker-wrapper {
            position: relative;
            margin: 0;
            padding: 0;
        }

        /* Header Above Ticker */
        .ticker-header {
            background: linear-gradient(135deg, var(--dark) 0%, rgba(13, 17, 23, 0.95) 100%);
            padding: 20px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 212, 255, 0.2);
        }

        .ticker-brand {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .brand-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
            animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 30px rgba(0, 212, 255, 0.3); }
            50% { box-shadow: 0 0 50px rgba(0, 212, 255, 0.6); }
        }

        .brand-text h1 {
            font-size: 1.8rem;
            font-weight: 900;
            background: linear-gradient(90deg, #fff, var(--primary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .brand-text span {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.5);
            letter-spacing: 2px;
        }

        .live-indicator {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 0, 0, 0.1);
            padding: 10px 25px;
            border-radius: 50px;
            border: 1px solid rgba(255, 0, 0, 0.3);
        }

        .live-dot {
            width: 12px;
            height: 12px;
            background: #ff0000;
            border-radius: 50%;
            animation: live-pulse 1s ease-in-out infinite;
        }

        @keyframes live-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
        }

        .live-text {
            color: #ff4444;
            font-weight: 700;
            font-size: 0.9rem;
            letter-spacing: 1px;
        }

        /* Main Ticker Container */
        .news-ticker-container {
            position: relative;
            background: linear-gradient(180deg, 
                rgba(0, 212, 255, 0.08) 0%, 
                rgba(13, 17, 23, 0.95) 50%,
                rgba(123, 44, 191, 0.08) 100%);
            padding: 25px 0;
            overflow: hidden;
            border-bottom: 1px solid rgba(0, 212, 255, 0.1);
        }

        /* Decorative Lines */
        .ticker-container::before,
        .ticker-container::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, 
                transparent, 
                var(--primary), 
                var(--secondary), 
                var(--accent), 
                transparent);
        }

        .news-ticker-container::before {
            top: 0;
        }

        .news-ticker-container::after {
            bottom: 0;
        }

        /* Side Gradients */
        .ticker-gradient-left,
        .ticker-gradient-right {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 150px;
            z-index: 10;
            pointer-events: none;
        }

        .ticker-gradient-left {
            left: 0;
            background: linear-gradient(90deg, var(--darker) 0%, transparent 100%);
        }

        .ticker-gradient-right {
            right: 0;
            background: linear-gradient(-90deg, var(--darker) 0%, transparent 100%);
        }

        /* Ticker Track */
        .ticker-track {
            display: flex;
            animation: ticker-scroll 60s linear infinite;
            width: max-content;
        }

        .ticker-track:hover {
            animation-play-state: paused;
        }

        @keyframes ticker-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        /* News Item */
        .news-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px 40px;
            margin: 0 10px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .news-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
                rgba(0, 212, 255, 0.1), 
                rgba(123, 44, 191, 0.1));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .news-item:hover::before {
            opacity: 1;
        }

        .news-item:hover {
            transform: translateY(-5px) scale(1.02);
            border-color: var(--primary);
            box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.3),
                0 0 30px rgba(0, 212, 255, 0.15);
        }

        /* News Category Badge */
        .news-category {
            position: relative;
            z-index: 2;
            padding: 6px 15px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            white-space: nowrap;
            letter-spacing: 0.5px;
        }

        .category-event {
            background: linear-gradient(135deg, #ff6b35, #ff8c42);
            color: #fff;
            box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        .category-workshop {
            background: linear-gradient(135deg, #00d4ff, #00a8cc);
            color: #000;
            box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .category-competition {
            background: linear-gradient(135deg, #7b2cbf, #9d4edd);
            color: #fff;
            box-shadow: 0 4px 15px rgba(123, 44, 191, 0.3);
        }

        .category-achievement {
            background: linear-gradient(135deg, #ffd700, #ffaa00);
            color: #000;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }

        .category-announcement {
            background: linear-gradient(135deg, #00ff88, #00cc6a);
            color: #000;
            box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
        }

        .category-webinar {
            background: linear-gradient(135deg, #ff4d6d, #ff758f);
            color: #fff;
            box-shadow: 0 4px 15px rgba(255, 77, 109, 0.3);
        }

        /* News Icon */
        .news-icon {
            position: relative;
            z-index: 2;
            width: 45px;
            height: 45px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* News Content */
        .news-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            gap: 5px;
            max-width: 400px;
        }

        .news-title {
            color: #fff;
            font-size: 0.95rem;
            font-weight: 600;
            white-space: nowrap;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .news-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
        }

        .news-meta span {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .news-meta .date {
            color: var(--primary);
        }

        .news-meta .location {
            color: var(--secondary);
        }

        /* News Time Badge */
        .news-time {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8px 15px;
            background: rgba(0, 212, 255, 0.1);
            border-radius: 10px;
            border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .news-time .day {
            font-size: 1.5rem;
            font-weight: 900;
            color: var(--primary);
            line-height: 1;
        }

        .news-time .month {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 2px;
        }

        /* Divider */
        .news-divider {
            width: 2px;
            height: 60px;
            background: linear-gradient(180deg, 
                transparent, 
                rgba(0, 212, 255, 0.3), 
                transparent);
            margin: 0 20px;
            position: relative;
        }

        .news-divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--primary);
        }

        /* ============ SECONDARY TICKER (Faster) ============ */
        .secondary-ticker {
            background: rgba(0, 0, 0, 0.3);
            padding: 15px 0;
            overflow: hidden;
            position: relative;
        }

        .secondary-ticker::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .secondary-track {
            display: flex;
            animation: ticker-scroll-reverse 45s linear infinite;
            width: max-content;
        }

        @keyframes ticker-scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
        }

        /* Quick News Items */
        .quick-news {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 25px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.85rem;
        }

        .quick-news::before {
            content: '●';
            color: var(--primary);
            font-size: 0.5rem;
        }

        .quick-news .highlight {
            color: var(--gold);
            font-weight: 700;
        }

        /* ============ THIRD TICKER (Alerts) ============ */
        .alert-ticker {
            background: linear-gradient(90deg, 
                rgba(255, 107, 53, 0.1), 
                rgba(0, 212, 255, 0.1), 
                rgba(123, 44, 191, 0.1));
            padding: 12px 0;
            overflow: hidden;
            position: relative;
        }

        .alert-track {
            display: flex;
            animation: ticker-scroll 30s linear infinite;
            width: max-content;
        }

        .alert-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 30px;
            margin: 0 15px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 8px;
            border-left: 3px solid var(--secondary);
        }

        .alert-icon {
            font-size: 1.2rem;
            animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }

        .alert-text {
            color: #fff;
            font-size: 0.9rem;
            font-weight: 500;
        }

        .alert-countdown {
            background: var(--secondary);
            color: #fff;
            padding: 3px 10px;
            border-radius: 15px;
            font-size: 0.75rem;
            font-weight: 700;
            animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 768px) {
            .ticker-header {
                flex-direction: column;
                gap: 15px;
                padding: 15px 20px;
            }

            .news-item {
                padding: 12px 20px;
                margin: 0 5px;
            }

            .news-content {
                max-width: 250px;
            }

            .news-time {
                display: none;
            }

            .brand-text h1 {
                font-size: 1.4rem;
            }
        }

        /* ============ DEMO PAGE STYLING ============ */
        .demo-section {
            padding: 50px 30px;
            text-align: center;
            background: linear-gradient(180deg, var(--darker), var(--dark));
        }

        .demo-title {
            font-size: 2rem;
            font-weight: 900;
            color: #fff;
            margin-bottom: 10px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .demo-subtitle {
            color: rgba(255, 255, 255, 0.5);
            font-size: 1rem;
            margin-bottom: 30px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .feature-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 25px;
            text-align: right;
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            border-color: var(--primary);
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .feature-card .icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .feature-card h3 {
            color: #fff;
            font-size: 1.1rem;
            margin-bottom: 10px;
        }

        .feature-card p {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.9rem;
            line-height: 1.6;
        }
    </style>



    <!-- ============ HEADER ============ -->
    <header class="ticker-header">
        <div class="ticker-brand">
            <div class="brand-icon">🚀</div>
            <div class="brand-text">
                <h1>انجمن علمی جهش</h1>
                <span>JEHESH SCIENTIFIC ASSOCIATION</span>
            </div>
        </div>
        <div class="live-indicator">
            <div class="live-dot"></div>
            <span class="live-text">پخش زنده اخبار</span>
        </div>
    </header>

    <!-- ============ ALERT TICKER ============ -->
    <div class="alert-ticker">
        <div class="alert-track">
            <!-- Alert Items -->
            <div class="alert-item">
                <span class="alert-icon">⚡</span>
                <span class="alert-text">آخرین مهلت ثبت‌نام مسابقه هوش مصنوعی</span>
                <span class="alert-countdown">۳ روز مانده</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">🔥</span>
                <span class="alert-text">کد تخفیف ویژه اعضا: JEHESH30</span>
                <span class="alert-countdown">محدود</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">📢</span>
                <span class="alert-text">نتایج دوره اول کارگاه‌ها اعلام شد</span>
                <span class="alert-countdown">جدید</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">🎯</span>
                <span class="alert-text">فرصت عضویت در تیم اجرایی جهش</span>
                <span class="alert-countdown">فوری</span>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="alert-item">
                <span class="alert-icon">⚡</span>
                <span class="alert-text">آخرین مهلت ثبت‌نام مسابقه هوش مصنوعی</span>
                <span class="alert-countdown">۳ روز مانده</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">🔥</span>
                <span class="alert-text">کد تخفیف ویژه اعضا: JEHESH30</span>
                <span class="alert-countdown">محدود</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">📢</span>
                <span class="alert-text">نتایج دوره اول کارگاه‌ها اعلام شد</span>
                <span class="alert-countdown">جدید</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">🎯</span>
                <span class="alert-text">فرصت عضویت در تیم اجرایی جهش</span>
                <span class="alert-countdown">فوری</span>
            </div>
        </div>
    </div>

    <!-- ============ MAIN NEWS TICKER ============ -->
    <div class="news-ticker-container">
        <div class="ticker-gradient-left"></div>
        <div class="ticker-gradient-right"></div>
        
        <div class="ticker-track">
            <!-- News Item 1 -->
            <div class="news-item">
                <span class="news-category category-event">رویداد</span>
                <div class="news-icon">🏆</div>
                <div class="news-content">
                    <span class="news-title">سومین جشنواره استارتاپ‌های دانشجویی با حضور ۵۰ تیم</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۵ اسفند</span>
                        <span class="location">📍 سالن همایش‌ها</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 2 -->
            <div class="news-item">
                <span class="news-category category-workshop">کارگاه</span>
                <div class="news-icon">💻</div>
                <div class="news-content">
                    <span class="news-title">کارگاه عملی یادگیری ماشین با Python - سطح پیشرفته</span>
                    <div class="news-meta">
                        <span class="date">📅 ۲۰ اسفند</span>
                        <span class="location">📍 آمفی‌تئاتر</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۲۰</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 3 -->
            <div class="news-item">
                <span class="news-category category-competition">مسابقه</span>
                <div class="news-icon">🤖</div>
                <div class="news-content">
                    <span class="news-title">شروع ثبت‌نام مسابقه ملی رباتیک جهش ۱۴۰۴</span>
                    <div class="news-meta">
                        <span class="date">📅 تا ۱۰ فروردین</span>
                        <span class="location">📍 سراسری</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۰</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 4 -->
            <div class="news-item">
                <span class="news-category category-achievement">دستاورد</span>
                <div class="news-icon">🥇</div>
                <div class="news-content">
                    <span class="news-title">کسب مقام اول المپیاد ملی علوم شناختی توسط تیم جهش</span>
                    <div class="news-meta">
                        <span class="date">📅 ۵ اسفند</span>
                        <span class="location">📍 تهران</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 5 -->
            <div class="news-item">
                <span class="news-category category-webinar">وبینار</span>
                <div class="news-icon">🎓</div>
                <div class="news-content">
                    <span class="news-title">وبینار تخصصی آینده هوش مصنوعی در ایران با دکتر محمدی</span>
                    <div class="news-meta">
                        <span class="date">📅 ۲۵ اسفند</span>
                        <span class="location">📍 آنلاین</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۲۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 6 -->
            <div class="news-item">
                <span class="news-category category-announcement">اطلاعیه</span>
                <div class="news-icon">📋</div>
                <div class="news-content">
                    <span class="news-title">انتخابات هیئت مدیره انجمن علمی جهش - دوره پنجم</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱ فروردین</span>
                        <span class="location">📍 ساختمان مرکزی</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 7 -->
            <div class="news-item">
                <span class="news-category category-workshop">کارگاه</span>
                <div class="news-icon">🔬</div>
                <div class="news-content">
                    <span class="news-title">کارگاه تحقیقاتی بیوتکنولوژی و نانوتکنولوژی</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۲ فروردین</span>
                        <span class="location">📍 آزمایشگاه مرکزی</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۲</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 8 -->
            <div class="news-item">
                <span class="news-category category-event">رویداد</span>
                <div class="news-icon">🌟</div>
                <div class="news-content">
                    <span class="news-title">بازدید علمی از مرکز تحقیقات فضایی ایران</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۸ اسفند</span>
                        <span class="location">📍 کرج</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۸</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <!-- DUPLICATE ITEMS FOR SEAMLESS LOOP -->
            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-event">رویداد</span>
                <div class="news-icon">🏆</div>
                <div class="news-content">
                    <span class="news-title">سومین جشنواره استارتاپ‌های دانشجویی با حضور ۵۰ تیم</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۵ اسفند</span>
                        <span class="location">📍 سالن همایش‌ها</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-workshop">کارگاه</span>
                <div class="news-icon">💻</div>
                <div class="news-content">
                    <span class="news-title">کارگاه عملی یادگیری ماشین با Python - سطح پیشرفته</span>
                    <div class="news-meta">
                        <span class="date">📅 ۲۰ اسفند</span>
                        <span class="location">📍 آمفی‌تئاتر</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۲۰</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-competition">مسابقه</span>
                <div class="news-icon">🤖</div>
                <div class="news-content">
                    <span class="news-title">شروع ثبت‌نام مسابقه ملی رباتیک جهش ۱۴۰۴</span>
                    <div class="news-meta">
                        <span class="date">📅 تا ۱۰ فروردین</span>
                        <span class="location">📍 سراسری</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۰</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-achievement">دستاورد</span>
                <div class="news-icon">🥇</div>
                <div class="news-content">
                    <span class="news-title">کسب مقام اول المپیاد ملی علوم شناختی توسط تیم جهش</span>
                    <div class="news-meta">
                        <span class="date">📅 ۵ اسفند</span>
                        <span class="location">📍 تهران</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-webinar">وبینار</span>
                <div class="news-icon">🎓</div>
                <div class="news-content">
                    <span class="news-title">وبینار تخصصی آینده هوش مصنوعی در ایران با دکتر محمدی</span>
                    <div class="news-meta">
                        <span class="date">📅 ۲۵ اسفند</span>
                        <span class="location">📍 آنلاین</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۲۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-announcement">اطلاعیه</span>
                <div class="news-icon">📋</div>
                <div class="news-content">
                    <span class="news-title">انتخابات هیئت مدیره انجمن علمی جهش - دوره پنجم</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱ فروردین</span>
                        <span class="location">📍 ساختمان مرکزی</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-workshop">کارگاه</span>
                <div class="news-icon">🔬</div>
                <div class="news-content">
                    <span class="news-title">کارگاه تحقیقاتی بیوتکنولوژی و نانوتکنولوژی</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۲ فروردین</span>
                        <span class="location">📍 آزمایشگاه مرکزی</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۲</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-event">رویداد</span>
                <div class="news-icon">🌟</div>
                <div class="news-content">
                    <span class="news-title">بازدید علمی از مرکز تحقیقات فضایی ایران</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۸ اسفند</span>
                        <span class="location">📍 کرج</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۸</span>
                    <span class="month">اسفند</span>
                </div>
            </div>
        </div>
    </div>

    <!-- ============ SECONDARY TICKER ============ -->
    <div class="secondary-ticker">
        <div class="secondary-track">
            <div class="quick-news">ثبت‌نام <span class="highlight">رایگان</span> برای کلیه دانشجویان</div>
            <div class="quick-news">بیش از <span class="highlight">۲۵۰۰+</span> عضو فعال در انجمن</div>
            <div class="quick-news"><span class="highlight">۱۵</span> کارگاه تخصصی برگزار شده</div>
            <div class="quick-news">همکاری با <span class="highlight">۲۰+</span> شرکت دانش‌بنیان</div>
            <div class="quick-news">اعضای برتر: <span class="highlight">تخفیف ۵۰٪</span> روی کلیه دوره‌ها</div>
            <div class="quick-news"><span class="highlight">پورتال اعضا</span> راه‌اندازی شد</div>
            <div class="quick-news">نشست علمی <span class="highlight">هفتگی</span> - پنجشنبه‌ها</div>
            <div class="quick-news">کتابخانه تخصصی با <span class="highlight">۵۰۰+</span> منبع علمی</div>
            <!-- Duplicate -->
            <div class="quick-news">ثبت‌نام <span class="highlight">رایگان</span> برای کلیه دانشجویان</div>
            <div class="quick-news">بیش از <span class="highlight">۲۵۰۰+</span> عضو فعال در انجمن</div>
            <div class="quick-news"><span class="highlight">۱۵</span> کارگاه تخصصی برگزار شده</div>
            <div class="quick-news">همکاری با <span class="highlight">۲۰+</span> شرکت دانش‌بنیان</div>
            <div class="quick-news">اعضای برتر: <span class="highlight">تخفیف ۵۰٪</span> روی کلیه دوره‌ها</div>
            <div class="quick-news"><span class="highlight">پورتال اعضا</span> راه‌اندازی شد</div>
            <div class="quick-news">نشست علمی <span class="highlight">هفتگی</span> - پنجشنبه‌ها</div>
            <div class="quick-news">کتابخانه تخصصی با <span class="highlight">۵۰۰+</span> منبع علمی</div>
        </div>
    </div>

    



`,className:"w-html-embed"})}),z=e=>{const{origin:a,pathname:t,search:n}=new URL(e);return`${a}${t}${n}`},S=c.memo(({pageKey:e,system:a})=>s.jsx(k,{system:a},e),(e,a)=>e.pageKey===a.pageKey),E=({data:e})=>{const{system:a,resources:t,url:n,pageMeta:d}=e,l=z(n),p=c.useMemo(()=>({imageLoader:r,assetBaseUrl:i,resources:t,breakpoints:h,onError:console.error}),[t]);return s.jsxs(v.Provider,{value:p,children:[s.jsx(g.Provider,{value:n,children:s.jsx(S,{pageKey:l,system:a})}),s.jsx(m,{url:n,pageMeta:d,siteName:o,imageLoader:r,assetBaseUrl:i}),s.jsx(w,{children:d.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),I=({})=>{const e={"@context":"https://schema.org","@type":"WebSite",name:o};return s.jsxs(s.Fragment,{children:[s.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e,null,2)}}),s.jsx("link",{rel:"icon",href:r({src:`${i}${b}`})}),y.map(a=>s.jsx("link",{rel:"preload",href:`${i}${a}`,as:"font",crossOrigin:"anonymous"},a)),u.map(a=>s.jsx("link",{rel:"preload",href:`${i}${a}`,as:"image"},a))]})},P=Object.freeze(Object.defineProperty({__proto__:null,Head:I},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-14/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-14/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}}};export{C as configValuesSerialized};
