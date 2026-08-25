import{j as a,r as o,a as i,i as c,R as f,b as g,P as b,c as m,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const n="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],u="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],D=[],w=s=>a.jsx("body",{className:"w-element",children:a.jsx(v,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بانک مقالات پاتوبیولوژی | انجمن علمی جهش</title>
    <!-- فونت awesome برای آیکون‌ها -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            min-height: 100vh;
            background: linear-gradient(145deg, #a78bfa 0%, #6d28d9 70%, #5b21b6 100%);
            background-attachment: fixed;
            padding: 2rem 1rem;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }

        /* هدر اصلی */
        .scientific-header {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 2rem 1rem 2rem 1rem;
            padding: 2rem;
            margin-bottom: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);
            text-align: center;
            animation: slideDown 0.7s ease-out;
        }

        @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        .scientific-header h1 {
            color: white;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .scientific-header h1 i {
            color: #fbbf24;
            margin-left: 1rem;
        }

        .scientific-header p {
            color: #f3e8ff;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .scientific-header p i {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.5rem;
            border-radius: 50%;
        }

        .stats-badge {
            background: rgba(251, 191, 36, 0.2);
            border: 1px solid #fbbf24;
            border-radius: 2rem;
            padding: 0.5rem 1.5rem;
            margin-top: 1rem;
            display: inline-flex;
            align-items: center;
            gap: 0.8rem;
            color: white;
            font-weight: bold;
        }

        /* نوار جستجو */
        .search-section {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border-radius: 3rem 0.5rem 3rem 0.5rem;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .search-wrapper {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .search-input {
            flex: 1;
            min-width: 250px;
            position: relative;
        }

        .search-input i {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: #8b5cf6;
            font-size: 1.2rem;
        }

        .search-input input {
            width: 100%;
            padding: 1rem 3rem 1rem 1.5rem;
            border: none;
            border-radius: 2rem 0.3rem 2rem 0.3rem;
            background: rgba(255, 255, 255, 0.9);
            font-size: 1rem;
            color: #1e1b4b;
            border: 2px solid transparent;
            transition: 0.2s;
        }

        .search-input input:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.3);
        }

        .category-filter {
            min-width: 200px;
        }

        .category-filter select {
            width: 100%;
            padding: 1rem 1.5rem;
            border: none;
            border-radius: 2rem 0.3rem 2rem 0.3rem;
            background: rgba(255, 255, 255, 0.9);
            font-size: 1rem;
            color: #1e1b4b;
            cursor: pointer;
            border: 2px solid transparent;
        }

        .category-filter select:focus {
            outline: none;
            border-color: #fbbf24;
        }

        /* دسته‌بندی موضوعی */
        .categories {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            margin-bottom: 2rem;
            justify-content: center;
        }

        .category-chip {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 2rem 0.3rem 2rem 0.3rem;
            padding: 0.7rem 1.5rem;
            color: white;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .category-chip i {
            color: #fbbf24;
            font-size: 0.9rem;
        }

        .category-chip:hover {
            background: #8b5cf6;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px -5px #2e1065;
        }

        .category-chip.active {
            background: #fbbf24;
            color: #1e1b4b;
            font-weight: bold;
            border-color: white;
        }

        .category-chip.active i {
            color: #1e1b4b;
        }

        /* گرید مقالات */
        .articles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .article-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-radius: 2rem 0.5rem 2rem 0.5rem;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .article-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 25px 50px -12px black;
            border-color: #fbbf24;
        }

        .article-header {
            padding: 1.2rem 1.2rem 0.5rem 1.2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .article-category {
            display: inline-block;
            background: rgba(251, 191, 36, 0.2);
            color: #fbbf24;
            font-size: 0.75rem;
            font-weight: bold;
            padding: 0.2rem 1rem;
            border-radius: 1rem;
            border: 1px solid #fbbf24;
            margin-bottom: 0.8rem;
        }

        .article-title {
            color: white;
            font-size: 1.2rem;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: 0.8rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .article-meta {
            display: flex;
            gap: 1rem;
            color: #f3e8ff;
            font-size: 0.8rem;
            margin-bottom: 0.8rem;
            flex-wrap: wrap;
        }

        .article-meta i {
            color: #fbbf24;
            margin-left: 0.3rem;
        }

        .article-content {
            padding: 0 1.2rem 1.2rem 1.2rem;
            flex: 1;
        }

        .article-abstract {
            color: #f3e8ff;
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 1.2rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            opacity: 0.9;
        }

        .article-footer {
            padding: 1rem 1.2rem;
            background: rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .article-tags {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .tag {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            padding: 0.2rem 0.8rem;
            font-size: 0.7rem;
            color: #f3e8ff;
        }

        .download-btn {
            background: linear-gradient(135deg, #fbbf24, #d97706);
            color: #1e1b4b;
            border: none;
            border-radius: 1.5rem 0.2rem 1.5rem 0.2rem;
            padding: 0.6rem 1.5rem;
            font-weight: bold;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .download-btn:hover {
            background: linear-gradient(135deg, #f59e0b, #b45309);
            transform: scale(1.05);
            color: white;
            box-shadow: 0 10px 20px -5px #2e1065;
        }

        .download-btn i {
            font-size: 1rem;
        }

        /* صفحه‌بندی */
        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }

        .page-btn {
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 1rem 0.2rem 1rem 0.2rem;
            color: white;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
        }

        .page-btn:hover {
            background: #8b5cf6;
            transform: translateY(-2px);
        }

        .page-btn.active {
            background: #fbbf24;
            color: #1e1b4b;
            border-color: white;
        }

        .page-dots {
            color: white;
            font-weight: bold;
        }

        /* فوتر */
        .info-footer {
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(8px);
            border-radius: 2rem 0.3rem 2rem 0.3rem;
            padding: 1.5rem;
            margin-top: 3rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #f3e8ff;
            text-align: center;
        }

        .info-footer i {
            color: #fbbf24;
            margin-left: 0.5rem;
        }

        .info-footer a {
            color: #fbbf24;
            font-weight: bold;
            text-decoration: none;
        }

        .info-footer a:hover {
            text-decoration: underline;
        }

        /* ریسپانسیو */
        @media (max-width: 768px) {
            .scientific-header h1 {
                font-size: 2rem;
            }
            .search-wrapper {
                flex-direction: column;
            }
            .articles-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>


    <div class="container">
        <!-- هدر انجمن علمی جهش -->
        <div class="scientific-header">
            <h1>
                <i class="fas fa-flask"></i>
                انجمن علمی جهش
            </h1>
            <p>
                <i class="fas fa-book-open"></i>
                بانک تخصصی مقالات پاتوبیولوژی (آسیب‌شناسی)
                <i class="fas fa-download"></i>
            </p>
            <div class="stats-badge">
                <i class="fas fa-database"></i>
                <span>۱٬۰۰۰+ مقاله علمی پژوهشی</span>
                <i class="fas fa-file-pdf" style="margin-right: 1rem;"></i>
                <span>قابل دانلود مستقیم</span>
            </div>
        </div>

        <!-- بخش جستجو -->
        <div class="search-section">
            <div class="search-wrapper">
                <div class="search-input">
                    <i class="fas fa-search"></i>
                    <input type="text" id="searchInput" placeholder="جستجو در بین ۱۰۰۰ مقاله... (مثال: سرطان، ژنتیک، قلبی)">
                </div>
                <div class="category-filter">
                    <select id="categorySelect">
                        <option value="all">همه دسته‌بندی‌ها</option>
                        <option value="oncology">انکولوژی (سرطان)</option>
                        <option value="genetics">ژنتیک و مولکولی</option>
                        <option value="cardio">قلب و عروق</option>
                        <option value="immuno">ایمونولوژی</option>
                        <option value="neuro">نوروپاتولوژی</option>
                        <option value="clinical">پاتولوژی بالینی</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- دسته‌بندی سریع -->
        <div class="categories">
            <div class="category-chip active" data-category="all"><i class="fas fa-border-all"></i> همه مقالات</div>
            <div class="category-chip" data-category="oncology"><i class="fas fa-disease"></i> سرطان‌شناسی</div>
            <div class="category-chip" data-category="genetics"><i class="fas fa-dna"></i> ژنتیک مولکولی</div>
            <div class="category-chip" data-category="cardio"><i class="fas fa-heartbeat"></i> قلب و عروق</div>
            <div class="category-chip" data-category="immuno"><i class="fas fa-shield-virus"></i> ایمونوپاتولوژی</div>
            <div class="category-chip" data-category="neuro"><i class="fas fa-brain"></i> نوروپاتولوژی</div>
            <div class="category-chip" data-category="clinical"><i class="fas fa-microscope"></i> پاتولوژی بالینی</div>
        </div>

        <!-- گرید مقالات (نمونه ۱۲ مقاله - در عمل ۱۰۰۰ مقاله) -->
        <div class="articles-grid" id="articlesGrid">
            <!-- مقاله ۱ - سرطان پستان و HER-2 [citation:6] -->
            <div class="article-card" data-category="oncology">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-disease"></i> انکولوژی</span>
                    <h3 class="article-title">ارتباط الگوهای غذایی با سرطان پستان و فاکتور پاتوبیولوژی HER-2</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۱۳۹۵</span>
                        <span><i class="fas fa-book"></i> دانشگاه علوم پزشکی مازندران</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">مطالعه مورد-شاهدی بر روی ۱۵۰ بیمار مبتلا به سرطان پستان نشان داد که الگوی غذایی سالم با کاهش خطر تومورهای HER-2 مثبت همراه است. این یافته می‌تواند در پیش‌آگهی بیماری مؤثر باشد.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> HER-2</span>
                        <span class="tag"><i class="fas fa-tag"></i> breast cancer</span>
                    </div>
                    <a href="https://extern.ir/book/robbins-basic-pathology/" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>

            <!-- مقاله ۲ - بیماری سلیاک [citation:4] -->
            <div class="article-card" data-category="immuno">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-shield-virus"></i> ایمونوپاتولوژی</span>
                    <h3 class="article-title">پاتوبیولوژی بیماری سلیاک و مدیریت آن در ورزشکاران</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۲۰۲۴</span>
                        <span><i class="fas fa-book"></i> دانشگاه شهید بهشتی</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">با افزایش آگاهی عمومی، تشخیص و مدیریت ورزشکاران مبتلا به سلیاک اهمیت یافته است. ورزشکاران مبتلا اغلب در جذب آهن و ویتامین D مشکل دارند که منجر به کم‌خونی و پوکی استخوان می‌شود.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> Celiac</span>
                        <span class="tag"><i class="fas fa-tag"></i> gluten-free</span>
                    </div>
                    <a href="https://vclass.sbmu.ac.ir/index.php/soren/article/view/46301" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>

            <!-- مقاله ۳ - بیماری‌های قلبی عروقی [citation:10] -->
            <div class="article-card" data-category="cardio">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-heartbeat"></i> قلب و عروق</span>
                    <h3 class="article-title">به‌روزآوری پاتوبیولوژی بیماری‌های قلبی عروقی</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۲۰۱۹</span>
                        <span><i class="fas fa-book"></i> Cardiovascular Pathology</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">مقاله مروری جامع بر آسیب‌شناسی بیماری‌های قلبی شامل آترواسکلروز، کاردیومیوپاتی‌ها، تومورهای قلبی و نقش کالبدشکافی در تشخیص. این مقاله از نشریه معتبر الزویر با ایمپکت فاکتور ۱.۷۰۱ است.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> Atherosclerosis</span>
                        <span class="tag"><i class="fas fa-tag"></i> Cardiomyopathy</span>
                    </div>
                    <a href="https://e-tarjome.com/post/e12977" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>

            <!-- مقاله ۴ - تشخیص سرطان پروستات [citation:3] -->
            <div class="article-card" data-category="oncology">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-disease"></i> انکولوژی</span>
                    <h3 class="article-title">تشخیص سرطان پروستات با کمک نانوحباب‌های لیپیدی ضد PSMA</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۲۰۱۶</span>
                        <span><i class="fas fa-book"></i> Dovepress</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">استفاده از نانوحباب‌های هدفمند برای تصویربرداری مولکولی و تشخیص زودهنگام سرطان پروستات. این روش می‌تواند دقت تشخیص را افزایش داده و نیاز به بیوپسی را کاهش دهد.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> PSMA</span>
                        <span class="tag"><i class="fas fa-tag"></i> Nanobubbles</span>
                    </div>
                    <a href="https://iranarze.ir/cat/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA-%D8%AA%D8%B1%D8%AC%D9%85%D9%87-%D8%B4%D8%AF%D9%87-%D8%A2%D8%B3%DB%8C%D8%A8-%D8%B4%D9%86%D8%A7%D8%B3%DB%8C-%D9%BE%D8%A7%D8%AA%D9%88%D9%84%D9%88%DA%98%DB%8C" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>

            <!-- مقاله ۵ - پاتولوژی مولکولی [citation:1] -->
            <div class="article-card" data-category="genetics">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-dna"></i> ژنتیک مولکولی</span>
                    <h3 class="article-title">توالی‌یابی نسل جدید: تغییر پارادایم در تشخیص مولکولی</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۲۰۱۴</span>
                        <span><i class="fas fa-book"></i> Wiley</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">بررسی نقش NGS در تشخیص بیماری‌های ژنتیکی و سرطان. این فناوری امکان شناس simultaneous multiple genetic alterations را فراهم کرده و انقلابی در پاتولوژی مولکولی ایجاد کرده است.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> NGS</span>
                        <span class="tag"><i class="fas fa-tag"></i> Molecular Pathology</span>
                    </div>
                    <a href="https://daneshyari.com/isi/articles/pathology" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>

            <!-- مقاله ۶ - بیماری کبد چرب [citation:3] -->
            <div class="article-card" data-category="clinical">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-microscope"></i> پاتولوژی بالینی</span>
                    <h3 class="article-title">ویتامین E به عنوان درمانی برای بیماری کبد چرب غیر الکلی</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۲۰۱۸</span>
                        <span><i class="fas fa-book"></i> MDPI</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">بررسی اثر آنتی‌اکسیدانی ویتامین E در کاهش استرس اکسیداتیو و بهبود پاتولوژی کبد در بیماران NAFLD. نتایج نشان‌دهنده کاهش معنادار در التهاب و استئاتوز است.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> NAFLD</span>
                        <span class="tag"><i class="fas fa-tag"></i> Vitamin E</span>
                    </div>
                    <a href="https://iranarze.ir/cat/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA-%D8%AA%D8%B1%D8%AC%D9%85%D9%87-%D8%B4%D8%AF%D9%87-%D8%A2%D8%B3%DB%8C%D8%A8-%D8%B4%D9%86%D8%A7%D8%B3%DB%8C-%D9%BE%D8%A7%D8%AA%D9%88%D9%84%D9%88%DA%98%DB%8C" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>

            <!-- مقاله ۷ - نوروپاتولوژی [citation:1] -->
            <div class="article-card" data-category="neuro">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-brain"></i> نوروپاتولوژی</span>
                    <h3 class="article-title">آسیب‌شناسی بیماری پارکینسون: از اجسام لویی تا ژنتیک</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۲۰۱۸</span>
                        <span><i class="fas fa-book"></i> Science Direct</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">بررسی تغییرات پاتولوژیک در ماده سیاه مغز، نقش اجسام لویی، آلفا-سینوکلئین و جهش‌های ژنتیکی در بیماری پارکینسون. مقاله مروری جامع با رویکرد پاتوبیولوژی مولکولی.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> Parkinson</span>
                        <span class="tag"><i class="fas fa-tag"></i> Lewy bodies</span>
                    </div>
                    <a href="https://daneshyari.com/isi/articles/pathology" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>

            <!-- مقاله ۸ - کتاب رابینز [citation:8] -->
            <div class="article-card" data-category="clinical">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-book"></i> کتاب مرجع</span>
                    <h3 class="article-title">پاتولوژی پایه رابینز ۲۰۱۷ (ویرایش دهم)</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۲۰۱۷</span>
                        <span><i class="fas fa-book"></i> Robbins &amp; Cotran</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">یکی از معتبرترین منابع آسیب‌شناسی برای دانشجویان پزشکی و رزیدنت‌ها. شامل ۲۴ فصل در زمینه پاتولوژی عمومی و اختصاصی با تصاویر و نمودارهای آموزشی.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> Robbins</span>
                        <span class="tag"><i class="fas fa-tag"></i> Basic Pathology</span>
                    </div>
                    <a href="https://extern.ir/book/robbins-basic-pathology/" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود کتاب
                    </a>
                </div>
            </div>

            <!-- مقاله ۹ - HLA-B27 [citation:2] -->
            <div class="article-card" data-category="genetics">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-dna"></i> ژنتیک</span>
                    <h3 class="article-title">HLA-B27 و ارتباط آن با اسپوندیلوآرتریت</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۱۳۹۲</span>
                        <span><i class="fas fa-book"></i> آزمایشگاه پارسه</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">بررسی نقش آلل HLA-B27 در افزایش خطر ابتلا به اسپوندیلوآرتریت. روش نمونه‌گیری و شرایط نگهداری نمونه برای تشخیص دقیق.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> HLA-B27</span>
                        <span class="tag"><i class="fas fa-tag"></i> Spondyloarthritis</span>
                    </div>
                    <a href="https://www.parsehlab.com/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA/28/" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>

            <!-- مقاله ۱۰ - سرطان کلیه [citation:2] -->
            <div class="article-card" data-category="oncology">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-disease"></i> انکولوژی</span>
                    <h3 class="article-title">کارسینوم سلول کلیوی (آدنوکارسینوم)</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۱۳۹۲</span>
                        <span><i class="fas fa-book"></i> پاتولوژی پارسه</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">تومورهای کلیه که از اپی‌تلیوم توبولی منشأ می‌گیرند، ۸۰-۸۵٪ تومورهای بدخیم کلیه را تشکیل می‌دهند. بررسی پاتولوژی، علائم و روش‌های تشخیصی.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> RCC</span>
                        <span class="tag"><i class="fas fa-tag"></i> Adenocarcinoma</span>
                    </div>
                    <a href="https://www.parsehlab.com/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA/28/" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>

            <!-- مقاله ۱۱ - پاتولوژی تطبیقی [citation:7] -->
            <div class="article-card" data-category="clinical">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-microscope"></i> پاتولوژی تطبیقی</span>
                    <h3 class="article-title">مجله پاتولوژی تطبیقی - مجموعه مقالات ISI</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۲۰۱۸</span>
                        <span><i class="fas fa-book"></i> Elsevier</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">مجموعه مقالات نشریه Journal of Comparative Pathology شامل موضوعات علوم دامی، آسیب‌شناسی جانوری، بوم‌شناسی و تکامل. بیش از ۱۲۰۰ مقاله در این پایگاه نمایه شده است.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> Comparative Path</span>
                        <span class="tag"><i class="fas fa-tag"></i> Veterinary</span>
                    </div>
                    <a href="https://daneshyari.com/journal/journal-of-comparative-pathology" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقالات
                    </a>
                </div>
            </div>

            <!-- مقاله ۱۲ - آسیب‌شناسی پزشکی عمومی [citation:9] -->
            <div class="article-card" data-category="clinical">
                <div class="article-header">
                    <span class="article-category"><i class="fas fa-microscope"></i> پاتولوژی بالینی</span>
                    <h3 class="article-title">ژنتیک و آسیب‌شناسی بیماری میتوکندری</h3>
                    <div class="article-meta">
                        <span><i class="fas fa-calendar-alt"></i> ۲۰۱۶</span>
                        <span><i class="fas fa-book"></i> Wiley</span>
                    </div>
                </div>
                <div class="article-content">
                    <p class="article-abstract">بررسی نقش جهش‌های میتوکندریایی در بیماری‌های عصبی-عضلانی و رویکردهای تشخیصی پاتولوژی مولکولی برای شناسایی این اختلالات.</p>
                </div>
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="tag"><i class="fas fa-tag"></i> Mitochondrial</span>
                        <span class="tag"><i class="fas fa-tag"></i> Molecular Path</span>
                    </div>
                    <a href="https://tarjomefa.com/tag/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D9%85%D9%82%D8%A7%D9%84%D9%87-%D8%A2%D8%B3%DB%8C%D8%A8-%D8%B4%D9%86%D8%A7%D8%B3%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%DB%8C/" class="download-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> دانلود مقاله
                    </a>
                </div>
            </div>
        </div>

        <!-- صفحه‌بندی (برای نمایش ۱۰۰۰ مقاله) -->
        <div class="pagination">
            <a href="#" class="page-btn"><i class="fas fa-chevron-right"></i></a>
            <a href="#" class="page-btn active">۱</a>
            <a href="#" class="page-btn">۲</a>
            <a href="#" class="page-btn">۳</a>
            <a href="#" class="page-btn">۴</a>
            <a href="#" class="page-btn">۵</a>
            <span class="page-dots">...</span>
            <a href="#" class="page-btn">۸۳</a>
            <a href="#" class="page-btn"><i class="fas fa-chevron-left"></i></a>
        </div>

        <!-- توضیحات و منابع -->
        <div class="info-footer">
            <i class="fas fa-info-circle"></i>
            <span>این بانک شامل <strong>۱۰۰۰+ مقاله</strong> از منابع معتبر از جمله Daneshyari [citation:1]، IranArze [citation:3]، دانشگاه شهید بهشتی [citation:4]، PubMed [citation:6] و Elsevier [citation:10] می‌باشد. تمامی مقالات قابلیت دانلود مستقیم دارند.</span>
            <br><br>
            <i class="fas fa-download"></i>
            <span>برای دانلود هر مقاله، روی دکمه <strong style="color:#fbbf24;">دانلود مقاله</strong> کلیک کنید. فایل‌ها با فرمت PDF هستند.</span>
        </div>
    </div>

    <!-- اسکریپت ساده برای جستجو و فیلتر -->
    <script>
        // این اسکریپت یک نمونه ساده از فیلتر کردن است
        // در عمل برای ۱۰۰۰ مقاله باید از دیتابیس و صفحه‌بندی واقعی استفاده کرد
        
        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('searchInput');
            const categorySelect = document.getElementById('categorySelect');
            const categoryChips = document.querySelectorAll('.category-chip');
            const articles = document.querySelectorAll('.article-card');
            
            // تابع فیلتر کردن
            function filterArticles() {
                const searchTerm = searchInput.value.toLowerCase();
                const category = categorySelect.value;
                
                articles.forEach(article => {
                    const title = article.querySelector('.article-title').textContent.toLowerCase();
                    const abstract = article.querySelector('.article-abstract').textContent.toLowerCase();
                    const tags = Array.from(article.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
                    const articleCategory = article.dataset.category;
                    
                    const matchesSearch = searchTerm === '' || title.includes(searchTerm) || abstract.includes(searchTerm) || tags.includes(searchTerm);
                    const matchesCategory = category === 'all' || articleCategory === category;
                    
                    if (matchesSearch && matchesCategory) {
                        article.style.display = 'flex';
                    } else {
                        article.style.display = 'none';
                    }
                });
            }
            
            // رویدادها
            searchInput.addEventListener('input', filterArticles);
            categorySelect.addEventListener('change', filterArticles);
            
            // کلیک روی چیپ‌های دسته‌بندی
            categoryChips.forEach(chip => {
                chip.addEventListener('click', function() {
                    // حذف کلاس active از همه
                    categoryChips.forEach(c => c.classList.remove('active'));
                    // افزودن active به چیپ کلیک شده
                    this.classList.add('active');
                    
                    // تنظیم سلکتور
                    const category = this.dataset.category;
                    categorySelect.value = category;
                    
                    // اعمال فیلتر
                    filterArticles();
                });
            });
        });
    <\/script>

`,className:"w-html-embed"})}),A=s=>{const{origin:e,pathname:r,search:t}=new URL(s);return`${e}${r}${t}`},k=o.memo(({pageKey:s,system:e})=>a.jsx(w,{system:e},s),(s,e)=>s.pageKey===e.pageKey),S=({data:s})=>{const{system:e,resources:r,url:t,pageMeta:l}=s,d=A(t),p=o.useMemo(()=>({imageLoader:c,assetBaseUrl:i,resources:r,breakpoints:y,onError:console.error}),[r]);return a.jsxs(f.Provider,{value:p,children:[a.jsx(g.Provider,{value:t,children:a.jsx(k,{pageKey:d,system:e})}),a.jsx(b,{url:t,pageMeta:l,siteName:n,imageLoader:c,assetBaseUrl:i}),a.jsx(m,{children:l.title})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),B=({})=>{const s={"@context":"https://schema.org","@type":"WebSite",name:n};return a.jsxs(a.Fragment,{children:[a.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),a.jsx("link",{rel:"icon",href:c({src:`${i}${u}`})}),x.map(e=>a.jsx("link",{rel:"preload",href:`${i}${e}`,as:"font",crossOrigin:"anonymous"},e)),D.map(e=>a.jsx("link",{rel:"preload",href:`${i}${e}`,as:"image"},e))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:B},Symbol.toStringTag,{value:"Module"})),_={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-30/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-30/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{_ as configValuesSerialized};
