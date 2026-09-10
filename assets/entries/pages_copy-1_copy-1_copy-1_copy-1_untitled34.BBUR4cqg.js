import{j as e,r as c,a as o,i as n,R as b,b as g,P as u,c as x,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const s="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=r=>e.jsx("body",{className:"w-element",children:e.jsx(v,{code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مدیریت املاک جهش | Jahesh Real Estate AI</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&display=swap');

        :root {
            --bg-deep: #06020f;
            --bg-surface: #0f0724;
            --bg-card: #160c32;
            --primary: #8b5cf6;
            --primary-glow: rgba(139, 92, 246, 0.4);
            --accent-cyan: #06b6d4;
            --accent-cyan-glow: rgba(6, 182, 212, 0.3);
            --text-pure: #ffffff;
            --text-body: #cbd5e1;
            --text-muted: #64748b;
            --border-glow: rgba(255, 255, 255, 0.05);
            --gradient-main: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
            --gradient-cyan: linear-gradient(135deg, #06b6d4 0%, #0b63e5 100%);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Vazirmatn', Tahoma, sans-serif;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        body {
            background-color: var(--bg-deep);
            color: var(--text-body);
            overflow-x: hidden;
            line-height: 1.7;
        }

        /* Background Light FX */
        .glow-sphere {
            position: absolute;
            width: 500px;
            height: 500px;
            background: var(--primary);
            filter: blur(180px);
            opacity: 0.12;
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
        }
        .sphere-1 { top: -100px; left: -100px; }
        .sphere-2 { top: 60%; right: -200px; background: var(--accent-cyan); }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--bg-deep); }
        ::-webkit-scrollbar-thumb { background: #2a1b54; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--primary); }

        /* Navigation */
        nav {
            background: rgba(6, 2, 15, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 20px 6%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .logo-area {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo-badge {
            background: var(--gradient-main);
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            box-shadow: 0 0 20px var(--primary-glow);
        }

        .logo-text {
            font-size: 20px;
            font-weight: 900;
            color: var(--text-pure);
            letter-spacing: -0.5px;
        }
        .logo-text span {
            color: var(--accent-cyan);
        }

        .nav-btn {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: var(--text-pure);
            padding: 10px 24px;
            border-radius: 50px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
        }
        .nav-btn:hover {
            background: var(--text-pure);
            color: var(--bg-deep);
            box-shadow: 0 0 20px rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }

        /* Main Container */
        .container {
            max-width: 1300px;
            margin: 0 auto;
            padding: 40px 24px;
            position: relative;
            z-index: 10;
        }

        /* App Pages Layout */
        .page { display: none; }
        .page.active { display: block; animation: smoothReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1); }

        @keyframes smoothReveal {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- HERO SECTION --- */
        .hero {
            text-align: center;
            padding: 80px 0 60px 0;
            max-width: 850px;
            margin: 0 auto;
        }

        .hero-tag {
            display: inline-block;
            background: rgba(139, 92, 246, 0.1);
            border: 1px solid rgba(139, 92, 246, 0.2);
            color: var(--accent-cyan);
            padding: 6px 18px;
            border-radius: 100px;
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 24px;
        }

        .hero h1 {
            font-size: 48px;
            font-weight: 900;
            color: var(--text-pure);
            line-height: 1.4;
            margin-bottom: 24px;
            background: linear-gradient(180deg, #ffffff 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            font-size: 18px;
            color: var(--text-body);
            opacity: 0.85;
        }

        /* --- MODERN INTERACTIVE GRID BUTTONS --- */
        .grid-portal {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 40px;
        }

        .portal-card {
            background: rgba(22, 12, 50, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 24px;
            padding: 40px 30px;
            text-align: center;
            text-decoration: none;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            cursor: pointer;
        }

        .portal-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .portal-card:hover::before { opacity: 1; }

        .portal-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
        }

        .card-mob { border-bottom: 3px solid var(--accent-cyan); }
        .card-mob:hover { border-color: var(--accent-cyan); box-shadow: 0 0 40px var(--accent-cyan-glow); }

        .card-demo { border-bottom: 3px solid #e11d48; }
        .card-demo:hover { box-shadow: 0 0 40px rgba(225, 29, 72, 0.2); }

        .card-web { border-bottom: 3px solid var(--primary); }
        .card-web:hover { border-color: var(--primary); box-shadow: 0 0 40px var(--primary-glow); }

        .portal-icon {
            width: 70px;
            height: 70px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.03);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            margin-bottom: 24px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .card-mob .portal-icon { color: var(--accent-cyan); background: rgba(6, 182, 212, 0.05); }
        .card-web .portal-icon { color: var(--primary); background: rgba(139, 92, 246, 0.05); }
        .card-demo .portal-icon { color: #e11d48; background: rgba(225, 29, 72, 0.05); }

        .portal-card h3 {
            font-size: 22px;
            font-weight: 800;
            color: var(--text-pure);
            margin-bottom: 12px;
        }

        .portal-card p {
            font-size: 14px;
            color: var(--text-muted);
            line-height: 1.6;
            margin-bottom: 30px;
        }

        .portal-action-btn {
            width: 100%;
            padding: 14px;
            border-radius: 14px;
            font-size: 15px;
            font-weight: 700;
            color: var(--text-pure);
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            margin-top: auto;
        }
        .card-mob:hover .portal-action-btn { background: var(--gradient-cyan); border-color: transparent; }
        .card-web:hover .portal-action-btn { background: var(--gradient-main); border-color: transparent; }
        .card-demo:hover .portal-action-btn { background: #e11d48; border-color: transparent; }

        /* --- PRICING PAGE CONFIG --- */
        .back-nav {
            margin-bottom: 40px;
        }
        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--text-pure);
            text-decoration: none;
            font-size: 15px;
            font-weight: 700;
            background: rgba(255,255,255,0.04);
            padding: 10px 24px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.05);
        }
        .back-link:hover {
            background: rgba(255,255,255,0.1);
        }

        .pricing-section-title {
            text-align: center;
            font-size: 32px;
            font-weight: 900;
            color: var(--text-pure);
            margin-bottom: 10px;
        }
        .pricing-subtitle {
            text-align: center;
            color: var(--text-muted);
            margin-bottom: 50px;
            font-size: 16px;
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .price-card {
            background: var(--bg-surface);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 28px;
            padding: 40px 30px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .price-card.featured {
            border: 2px solid var(--primary);
            box-shadow: 0 20px 50px var(--primary-glow);
            transform: scale(1.03);
        }
        .price-card.featured-cyan {
            border: 2px solid var(--accent-cyan);
            box-shadow: 0 20px 50px var(--accent-cyan-glow);
            transform: scale(1.03);
        }

        .card-badge {
            position: absolute;
            top: 20px; left: 20px;
            padding: 4px 14px;
            border-radius: 50px;
            font-size: 11px;
            font-weight: 700;
            color: white;
        }
        .price-card.featured .card-badge { background: var(--primary); }
        .price-card.featured-cyan .card-badge { background: var(--accent-cyan); color: var(--bg-deep); }

        .plan-name {
            font-size: 24px;
            font-weight: 800;
            color: var(--text-pure);
            margin-bottom: 15px;
        }

        .plan-price {
            font-size: 36px;
            font-weight: 900;
            color: var(--text-pure);
            margin-bottom: 30px;
            display: flex;
            align-items: baseline;
            gap: 6px;
        }
        .plan-price span {
            font-size: 14px;
            color: var(--text-muted);
            font-weight: normal;
        }

        .plan-features {
            list-style: none;
            margin-bottom: 40px;
        }
        .plan-features li {
            font-size: 14px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--text-body);
        }
        .plan-features li::before {
            content: "✓";
            font-weight: bold;
        }
        .price-card.web-plan .plan-features li::before { color: var(--primary); }
        .price-card.mob-plan .plan-features li::before { color: var(--accent-cyan); }

        .plan-features li.unsupported {
            color: var(--text-muted);
            text-decoration: line-through;
            opacity: 0.5;
        }
        .plan-features li.unsupported::before {
            content: "✕";
            color: #ef4444;
        }

        .btn-checkout {
            display: block;
            width: 100%;
            padding: 16px;
            border-radius: 16px;
            text-align: center;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.08);
            color: var(--text-pure);
        }
        .price-card.featured .btn-checkout, .price-card.web-plan .btn-checkout:hover {
            background: var(--gradient-main); border-color: transparent;
        }
        .price-card.featured-cyan .btn-checkout, .price-card.mob-plan .btn-checkout:hover {
            background: var(--gradient-cyan); border-color: transparent; color: white;
        }

        /* Footer */
        footer {
            margin-top: 100px;
            padding: 40px 0;
            border-top: 1px solid rgba(255,255,255,0.03);
            text-align: center;
            color: var(--text-muted);
            font-size: 14px;
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
            .grid-portal, .pricing-grid { grid-template-columns: 1fr; gap: 24px; }
            .price-card.featured, .price-card.featured-cyan { transform: scale(1); }
            .hero h1 { font-size: 34px; }
        }
    </style>



    <div class="glow-sphere sphere-1"></div>
    <div class="glow-sphere sphere-2"></div>

    <!-- Top Navigation -->
    <nav>
        <div class="logo-area">
            <div class="logo-badge">🧬</div>
            <div class="logo-text">انجمن علمی <span>جهش</span></div>
        </div>
        <a href="https://t.me/emainsupport" target="_blank" class="nav-btn">پشتیبانی جهش کمپانی</a>
    </nav>

    <div class="container">
        
        <!-- ================= PAGE 1: ULTRAMODERN DASHBOARD ================= -->
        <div id="homePage" class="page active">
            <div class="hero">
                <div class="hero-tag">هوشمندسازی آژانس‌های املاک نسل جدید</div>
                <h1>اتوماسیون و مدیریت املاک هوشمند جهش</h1>
                <p>پلتفرم اختصاصی توسعه داده شده توسط جهش کمپانی جهت افزایش سرعت فایلینگ، پردازش محاوره‌ای گفتار به متن، پشتیبان‌گیری ابری و واقعیت مجازی هوشمند</p>
            </div>

            <!-- Main Interactive Portals -->
            <div class="grid-portal">
                
                <!-- PORTAL 1: MOBILE APP & VR -->
                <div class="portal-card card-mob" onclick="openPricing('mobile');">
                    <div class="portal-icon">📱</div>
                    <h3>برنامه موبایل + واقعیت مجازی</h3>
                    <p>دانلود مستقیم کلاینت هوشمند گوشی هوشمند اندروید و iOS به همراه موتور شبیه‌ساز تصاویر ۳۶۰ درجه و قابلیت همگام‌سازی عینک‌های VR.</p>
                    <button class="portal-action-btn">دانلود و ارتقا حساب موبایل</button>
                </div>

                <!-- PORTAL 2: DEMO SYSTEM -->
                <a href="https://amlak-jahesh.vercel.app/" id="demoExternalLink" target="_blank" class="portal-card card-demo">
                    <div class="portal-icon">⚡</div>
                    <h3>ورود به نسخه دمو سایت</h3>
                    <p>دسترسی آنی به محیط تست پنل مدیریت، دستیار صوتی لایو ثبت املاک، مدیریت متقاضیان و دیتابیس هوش مصنوعی تطبیق مشتری.</p>
                    <button class="portal-action-btn">ورود به پنل دمو املاک</button>
                </a>

                <!-- PORTAL 3: WEB PLATFORM -->
                <div class="portal-card card-web" onclick="openPricing('web');">
                    <div class="portal-icon">💻</div>
                    <h3>اشتراک نسخه وب سایت</h3>
                    <p>خرید و تمدید اشتراک اختصاصی اتوماسیون تحت وب جهت کاربری روی لپ‌تاپ و سیستم‌های اداری با دیتابیس یکپارچه کشوری.</p>
                    <button class="portal-action-btn">خرید و فعال‌سازی پنل وب</button>
                </div>

            </div>
        </div>


        <!-- ================= PAGE 2: MOBILE SUBSCRIPTIONS ================= -->
        <div id="mobilePricingPage" class="page">
            <div class="back-nav">
                <a href="#" class="back-link" onclick="backToHome(); return false;">→ بازگشت به داشبورد اصلی</a>
            </div>
            <h2 class="pricing-section-title">پنل‌های برنامه موبایل + سیستم پیشرفته VR</h2>
            <p class="pricing-subtitle">اشتراک‌های ویژه اپلیکیشن اندروید و iOS مجهز به شبیه‌ساز واقعیت مجازی و نمایش ۳۶۰ درجه</p>

            <div class="pricing-grid">
                <!-- Mobile Plan 1 -->
                <div class="price-card mob-plan">
                    <div>
                        <div class="plan-name">یاقوت موبایل (VR)</div>
                        <div class="plan-price">4,000,000 <span>تومان / ۳ ماهه</span></div>
                        <ul class="features-list plan-features">
                            <li>نصب کلاینت اندروید و iOS</li>
                            <li>رندر تصاویر ۳۶۰ درجه ملک</li>
                            <li>اتصال به عینک‌های VR واقعیت مجازی</li>
                            <li>تایپ صوتی و ثبت فایلینگ میکروفون</li>
                        </ul>
                    </div>
                    <a href="#" class="btn-checkout" onclick="checkout('یاقوت موبایل + VR'); return false;">انتخاب و پرداخت پنل</a>
                </div>

                <!-- Mobile Plan 2 -->
                <div class="price-card mob-plan featured-cyan">
                    <div class="card-badge">پرطرفدارترین موبایل</div>
                    <div>
                        <div class="plan-name">الماس موبایل (VR)</div>
                        <div class="plan-price">6,500,000 <span>تومان / ۶ ماهه</span></div>
                        <ul class="features-list plan-features">
                            <li>تمامی دسترسی‌های پنل یاقوت</li>
                            <li>هوش مصنوعی تطبیق فایل متقاضی و ملک</li>
                            <li>پشتیبان‌گیری ابری و ادغام آنی بین دستگاه‌ها</li>
                            <li>مدیریت تیمی و آژانسی مشاورین</li>
                        </ul>
                    </div>
                    <a href="#" class="btn-checkout" onclick="checkout('الماس موبایل + VR'); return false;">انتخاب و پرداخت پنل</a>
                </div>

                <!-- Mobile Plan 3 -->
                <div class="price-card mob-plan">
                    <div>
                        <div class="plan-name">جهش اینفینیتی (VR)</div>
                        <div class="plan-price">9,800,000 <span>تومان / یکساله</span></div>
                        <ul class="features-list plan-features">
                            <li>دسترسی بی‌قید و شرط به تمام امکانات</li>
                            <li>تکنولوژی واقعیت مجازی اولترا HD</li>
                            <li>فضای ابری اختصاصی نامحدود فایلینگ</li>
                            <li>پشتیبانی VIP و حضوری جهش کمپانی</li>
                        </ul>
                    </div>
                    <a href="#" class="btn-checkout" onclick="checkout('جهش اینفینیتی + VR'); return false;">انتخاب و پرداخت پنل</a>
                </div>
            </div>
        </div>


        <!-- ================= PAGE 3: WEB SUBSCRIPTIONS ================= -->
        <div id="webPricingPage" class="page">
            <div class="back-nav">
                <a href="#" class="back-link" onclick="backToHome(); return false;">→ بازگشت به داشبورد اصلی</a>
            </div>
            <h2 class="pricing-section-title">پنل‌های اختصاصی نسخه تحت وب (لپ‌تاپ و سیستم)</h2>
            <p class="pricing-subtitle">اتوماسیون قدرتمند تحت وب ویژه مدیریت دفاتر املاک بدون نیاز به امکانات مستقل واقعیت مجازی VR</p>

            <div class="pricing-grid">
                <!-- Web Plan 1 -->
                <div class="price-card web-plan">
                    <div>
                        <div class="plan-name">برنز وب</div>
                        <div class="plan-price">2,000,000 <span>تومان / ۳ ماهه</span></div>
                        <ul class="features-list plan-features">
                            <li>دستیار صوتی و AI ثبت فرم املاک</li>
                            <li>فیلترینگ و جستجوی پیشرفته دیتابیس</li>
                            <li>انتقال فایل بکاپ به کامپیوتر</li>
                            <li class="unsupported">نمایش عکس ۳۶۰ درجه مشاورین</li>
                            <li class="unsupported">اتصال به عینک واقعیت مجازی VR</li>
                        </ul>
                    </div>
                    <a href="#" class="btn-checkout" onclick="checkout('برنز وب'); return false;">انتخاب و پرداخت پنل</a>
                </div>

                <!-- Web Plan 2 -->
                <div class="price-card web-plan featured">
                    <div class="card-badge">پیشنهاد اتوماسیون وب</div>
                    <div>
                        <div class="plan-name">نقره‌ای وب</div>
                        <div class="plan-price">3,500,000 <span>تومان / ۶ ماهه</span></div>
                        <ul class="features-list plan-features">
                            <li>تمام ویژگی‌های نسخه برنز وب</li>
                            <li>هوش مصنوعی هوشمند پردازش فایل متقاضیان</li>
                            <li>خروجی پیشرفته اکسل و گزارش‌های آماری</li>
                            <li class="unsupported">نمایش عکس ۳۶۰ درجه مشاورین</li>
                            <li class="unsupported">اتصال به عینک واقعیت مجازی VR</li>
                        </ul>
                    </div>
                    <a href="#" class="btn-checkout" onclick="checkout('نقره‌ای وب'); return false;">انتخاب و پرداخت پنل</a>
                </div>

                <!-- Web Plan 3 -->
                <div class="price-card web-plan">
                    <div>
                        <div class="plan-name">طلایی وب</div>
                        <div class="plan-price">5,000,000 <span>تومان / یکساله</span></div>
                        <ul class="features-list plan-features">
                            <li>دسترسی نامحدود سالانه نسخه وب لپ‌تاپ</li>
                            <li>سیستم هوش مصنوعی تطبیق مشتری و فایل</li>
                            <li>آپدیت‌های اختصاصی سالانه اتوماسیون</li>
                            <li class="unsupported">نمایش عکس ۳۶۰ درجه مشاورین</li>
                            <li class="unsupported">اتصال به عینک واقعیت مجازی VR</li>
                        </ul>
                    </div>
                    <a href="#" class="btn-checkout" onclick="checkout('طلایی وب'); return false;">انتخاب و پرداخت پنل</a>
                </div>
            </div>
        </div>

    </div>

    <footer>
        <p>© 2026 مدیریت املاک جهش | قدرت گرفته از ساختار هوشمند انجمن علمی و جهش کمپانی</p>
        <p style="font-size: 11px; margin-top: 6px; color: var(--text-muted);">شماره تماس واحد فعال‌سازی: 09152331974</p>
    </footer>

    <script>
        // --- بخش تنظیمات آدرس‌ها (برای ادیتور - آدرس دمو را از این بخش تغییر دهید) ---
        const urlDemoConfiguration = "https://example.com/demo";
        document.getElementById('demoExternalLink').setAttribute('href', urlDemoConfiguration);


        // --- معماری سوییچ صفحات لایو وب‌سایت ---
        function openPricing(category) {
            document.getElementById('homePage').classList.remove('active');
            
            if(category === 'mobile') {
                document.getElementById('mobilePricingPage').classList.add('active');
            } else if(category === 'web') {
                document.getElementById('webPricingPage').classList.add('active');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function backToHome() {
            document.getElementById('mobilePricingPage').classList.remove('active');
            document.getElementById('webPricingPage').classList.remove('active');
            document.getElementById('homePage').classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- پردازش نهایی سفارش و ارسال فیلدها به تلگرام پشتیبانی ---
        function checkout(selectedPlanName) {
            const textToSend = \`سلام و احترام.\\nمن از وب‌سایت مدرن مدیریت املاک جهش اقدام نموده‌ام و درخواست خرید اشتراک و فعال‌سازی فوری *"\${selectedPlanName}"* را دارم.\\nلطفاً آدرس درگاه پرداخت و اطلاعات لایسنس را ارسال فرمایید.\`;
            const urlEncodedText = encodeURIComponent(textToSend);
            const supportTelegramIdLink = \`https://t.me/emainsupport?text=\${urlEncodedText}\`;
            window.open(supportTelegramIdLink, '_blank');
        }
    <\/script>

`,className:"w-html-embed"})}),P=r=>{const{origin:a,pathname:i,search:t}=new URL(r);return`${a}${i}${t}`},z=c.memo(({pageKey:r,system:a})=>e.jsx(w,{system:a},r),(r,a)=>r.pageKey===a.pageKey),R=({data:r})=>{const{system:a,resources:i,url:t,pageMeta:l}=r,d=P(t),p=c.useMemo(()=>({imageLoader:n,assetBaseUrl:o,resources:i,breakpoints:f,onError:console.error}),[i]);return e.jsxs(b.Provider,{value:p,children:[e.jsx(g.Provider,{value:t,children:e.jsx(z,{pageKey:d,system:a})}),e.jsx(u,{url:t,pageMeta:l,siteName:s,imageLoader:n,assetBaseUrl:o}),e.jsx(x,{children:l.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),S=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:s};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${o}${h}`})}),y.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"font",crossOrigin:"anonymous"},a)),k.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"image"},a))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/untitled34/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/untitled34/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{O as configValuesSerialized};
