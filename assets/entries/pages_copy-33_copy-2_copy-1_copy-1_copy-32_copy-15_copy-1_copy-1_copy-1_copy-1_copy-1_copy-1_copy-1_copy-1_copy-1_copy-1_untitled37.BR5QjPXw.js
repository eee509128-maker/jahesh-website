import{j as e,r as d,a,i,R as g,b as m,P as u,c as y,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],w="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],A=r=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(f,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نوار اخبار متحرک</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Vazir', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .news-container {
            width: 100%;
            max-width: 1200px;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            padding: 30px;
        }

        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
            font-size: 28px;
            position: relative;
            padding-bottom: 15px;
        }

        h1::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 2px;
        }

        .ticker-wrapper {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 20px;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
            margin-bottom: 30px;
        }

        .ticker-label {
            display: inline-block;
            background: linear-gradient(90deg, #667eea, #764ba2);
            color: white;
            padding: 8px 20px;
            border-radius: 25px;
            font-weight: bold;
            margin-bottom: 15px;
            font-size: 16px;
        }

        .marquee-container {
            background: white;
            border-radius: 12px;
            padding: 15px 0;
            overflow: hidden;
            position: relative;
            border: 2px solid #e0e0e0;
        }

        .marquee {
            white-space: nowrap;
            overflow: hidden;
            position: relative;
        }

        .marquee-content {
            display: inline-block;
            animation: scrollRight 40s linear infinite;
            padding-left: 100%;
            font-size: 18px;
            color: #333;
        }

        .marquee-content span {
            display: inline-block;
            background: linear-gradient(135deg, #667eea20, #764ba220);
            padding: 8px 25px;
            margin: 0 10px;
            border-radius: 30px;
            border: 1px solid #667eea40;
            transition: all 0.3s ease;
        }

        .marquee-content span:hover {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            transform: scale(1.05);
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        @keyframes scrollRight {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-100%);
            }
        }

        .news-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .news-card {
            background: white;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border: 1px solid #e0e0e0;
        }

        .news-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.3);
            border-color: #667eea;
        }

        .news-date {
            color: #667eea;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .news-title {
            color: #333;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            line-height: 1.4;
        }

        .news-description {
            color: #666;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .read-more {
            display: inline-block;
            color: #667eea;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
        }

        .read-more:hover {
            color: #764ba2;
        }

        .loading {
            text-align: center;
            padding: 40px;
            color: #666;
            font-size: 16px;
        }

        .loading::after {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            vertical-align: middle;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .error {
            background: #fee;
            color: #c00;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #fcc;
        }

        .refresh-btn {
            display: block;
            margin: 30px auto 0;
            padding: 12px 30px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .refresh-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        .refresh-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .last-update {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 10px;
        }
    </style>


    <div class="news-container">
        <h1>📰 آخرین اخبار و رویدادها</h1>
        
        <div class="ticker-wrapper">
            <span class="ticker-label">⚡ اخبار فوری</span>
            <div class="marquee-container">
                <div class="marquee">
                    <div class="marquee-content" id="marqueeContent">
                        <!-- اخبار به صورت dynamic اضافه می‌شوند -->
                        <span>در حال بارگذاری اخبار...</span>
                    </div>
                </div>
            </div>
        </div>

        <div id="newsGrid" class="news-grid">
            <div class="loading">در حال دریافت اخبار...</div>
        </div>

        <button class="refresh-btn" id="refreshBtn" onclick="fetchNews()">
            🔄 بروزرسانی اخبار
        </button>

        <div class="last-update" id="lastUpdate">
            آخرین بروزرسانی: در حال دریافت...
        </div>
    </div>

    <script>
        // کلید API شما
        const API_KEY = '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';
        
        // آدرس API
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        // تابع برای دریافت اخبار از API
        async function fetchNews() {
            const refreshBtn = document.getElementById('refreshBtn');
            const newsGrid = document.getElementById('newsGrid');
            const marqueeContent = document.getElementById('marqueeContent');
            const lastUpdateSpan = document.getElementById('lastUpdate');

            // غیرفعال کردن دکمه بروزرسانی
            refreshBtn.disabled = true;
            refreshBtn.textContent = '⏳ در حال بروزرسانی...';

            // نمایش لودینگ
            newsGrid.innerHTML = '<div class="loading">در حال دریافت آخرین اخبار...</div>';
            marqueeContent.innerHTML = '<span>در حال بارگذاری اخبار جدید...</span>';

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
                                content: "لطفاً 5 خبر جدید و واقعی از ایران و جهان در قالب یک آرایه JSON برگردان. هر خبر باید شامل title (عنوان)، description (توضیح کوتاه)، date (تاریخ) و category (دسته‌بندی) باشد. اخبار باید واقعی و به‌روز باشند."
                            },
                            {
                                role: "user",
                                content: "آخرین اخبار روز ایران و جهان را به صورت JSON بده."
                            }
                        ],
                        temperature: 0.7,
                        max_tokens: 2000,
                        response_format: { type: "json_object" }
                    })
                });

                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }

                const data = await response.json();
                
                // پردازش پاسخ
                const content = JSON.parse(data.choices[0].message.content);
                
                // بررسی ساختار پاسخ
                let newsArray = [];
                if (Array.isArray(content)) {
                    newsArray = content;
                } else if (content.news && Array.isArray(content.news)) {
                    newsArray = content.news;
                } else if (content.articles && Array.isArray(content.articles)) {
                    newsArray = content.articles;
                } else {
                    // اگر ساختار دیگری داشت، سعی می‌کنیم اولین آرایه را پیدا کنیم
                    for (let key in content) {
                        if (Array.isArray(content[key])) {
                            newsArray = content[key];
                            break;
                        }
                    }
                }

                if (newsArray.length === 0) {
                    // اگر خبری نبود، از اخبار پیش‌فرض استفاده کن
                    newsArray = getDefaultNews();
                }

                // نمایش اخبار
                displayNews(newsArray);
                
                // بروزرسانی زمان آخرین بروزرسانی
                const now = new Date();
                const persianDate = now.toLocaleDateString('fa-IR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                lastUpdateSpan.textContent = \`🕒 آخرین بروزرسانی: \${persianDate}\`;

            } catch (error) {
                console.error('خطا در دریافت اخبار:', error);
                
                // در صورت خطا، از اخبار پیش‌فرض استفاده کن
                newsGrid.innerHTML = \`
                    <div class="error">
                        ⚠️ خطا در دریافت اخبار. نمایش اخبار پیش‌فرض...
                    </div>
                \`;
                displayNews(getDefaultNews());
            } finally {
                // فعال کردن دوباره دکمه بروزرسانی
                refreshBtn.disabled = false;
                refreshBtn.textContent = '🔄 بروزرسانی اخبار';
            }
        }

        // تابع برای نمایش اخبار
        function displayNews(newsArray) {
            const newsGrid = document.getElementById('newsGrid');
            const marqueeContent = document.getElementById('marqueeContent');

            // ساخت HTML برای نوار متحرک
            let marqueeHTML = '';
            newsArray.forEach(news => {
                marqueeHTML += \`<span>\${news.title || 'بدون عنوان'} • \${news.category || 'عمومی'} •</span>\`;
            });
            
            // اگر خبر کم بود، تکرار کن
            if (newsArray.length < 3) {
                for (let i = 0; i < 3; i++) {
                    newsArray.forEach(news => {
                        marqueeHTML += \`<span>\${news.title || 'بدون عنوان'} • \${news.category || 'عمومی'} •</span>\`;
                    });
                }
            }
            
            marqueeContent.innerHTML = marqueeHTML;

            // ساخت HTML برای کارت‌های خبر
            let gridHTML = '';
            newsArray.forEach(news => {
                gridHTML += \`
                    <div class="news-card">
                        <div class="news-date">\${news.date || 'تاریخ نامشخص'} • \${news.category || 'عمومی'}</div>
                        <div class="news-title">\${news.title || 'بدون عنوان'}</div>
                        <div class="news-description">\${news.description || 'توضیحاتی موجود نیست'}</div>
                        <a href="#" class="read-more" onclick="alert('متن کامل خبر: \${news.title}')">ادامه مطلب →</a>
                    </div>
                \`;
            });
            
            newsGrid.innerHTML = gridHTML;
        }

        // اخبار پیش‌فرض در صورت عدم دریافت از API
        function getDefaultNews() {
            return [
                {
                    title: "رونمایی از جدیدترین دستاوردهای فضایی ایران",
                    description: "سازمان فضایی ایران از جدیدترین ماهواره‌های تحقیقاتی خود رونمایی کرد که قرار است تا پایان سال جاری به فضا پرتاب شوند.",
                    date: "۱۴۰۲/۱۲/۱۵",
                    category: "علم و فناوری"
                },
                {
                    title: "افزایش ۱۵ درصدی صادرات غیرنفتی",
                    description: "گمرک ایران از افزایش ۱۵ درصدی صادرات غیرنفتی در ۱۱ ماهه سال جاری نسبت به مدت مشابه سال قبل خبر داد.",
                    date: "۱۴۰۲/۱۲/۱۴",
                    category: "اقتصاد"
                },
                {
                    title: "کشف یک سیاره جدید قابل سکونت",
                    description: "ناسا از کشف یک سیاره جدید در منطقه قابل سکونت یک ستاره دور دست خبر داد که امکان وجود آب مایع در آن وجود دارد.",
                    date: "۱۴۰۲/۱۲/۱۳",
                    category: "علم و فناوری"
                },
                {
                    title: "برگزاری جشنواره بین‌المللی فیلم فجر",
                    description: "چهل و دومین جشنواره بین‌المللی فیلم فجر با حضور هنرمندانی از ۳۰ کشور جهان آغاز به کار کرد.",
                    date: "۱۴۰۲/۱۲/۱۲",
                    category: "فرهنگی"
                },
                {
                    title: "بهبود وضعیت ترافیک تهران با خطوط جدید مترو",
                    description: "با افتتاح دو خط جدید مترو در پایتخت، پیش‌بینی می‌شود روزانه از تردد ۵۰۰ هزار خودرو در سطح شهر کاسته شود.",
                    date: "۱۴۰۲/۱۲/۱۱",
                    category: "اجتماعی"
                }
            ];
        }

        // تابع برای بروزرسانی خودکار هر 5 دقیقه
        function startAutoRefresh() {
            // اولین بار که صفحه لود می‌شود، اخبار را دریافت کن
            fetchNews();
            
            // هر 5 دقیقه یکبار اخبار را بروزرسانی کن
            setInterval(fetchNews, 300000); // 300000 میلی‌ثانیه = 5 دقیقه
        }

        // شروع به کار پس از لود کامل صفحه
        document.addEventListener('DOMContentLoaded', startAutoRefresh);
    <\/script>

`,className:"w-html-embed"})})}),k=r=>{const{origin:t,pathname:o,search:n}=new URL(r);return`${t}${o}${n}`},P=d.memo(({pageKey:r,system:t})=>e.jsx(A,{system:t},r),(r,t)=>r.pageKey===t.pageKey),T=({data:r})=>{const{system:t,resources:o,url:n,pageMeta:s}=r,c=k(n),p=d.useMemo(()=>({imageLoader:i,assetBaseUrl:a,resources:o,breakpoints:h,onError:console.error}),[o]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(m.Provider,{value:n,children:e.jsx(P,{pageKey:c,system:t})}),e.jsx(u,{url:n,pageMeta:s,siteName:l,imageLoader:i,assetBaseUrl:a}),e.jsx(y,{children:s.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),j=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${a}${w}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),H={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-33/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-33/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{H as configValuesSerialized};
