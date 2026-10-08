import{j as e,r as n,a as t,i as l,R as f,b as g,P as m,c as h,d as u}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=i=>e.jsx("body",{className:"w-element",children:e.jsx(b,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>فروشگاه اینترنتی | پلان‌های اتصال</title>
    <!-- فونت فارسی وزیر و آیکون‌های فونتawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        @font-face {
            font-family: 'Vazir';
            src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/Vazir.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Vazir', 'tahoma', 'arial', sans-serif;
        }

        body {
            background-color: #0f0f14;
            background-image: radial-gradient(circle at 10% 20%, #1a1a2a 0%, #0a0a0f 90%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem 1rem;
            color: #e2e2f0;
        }

        .container {
            max-width: 1300px;
            width: 100%;
        }

        /* header shop */
        .shop-header {
            text-align: center;
            margin-bottom: 3.5rem;
            position: relative;
        }

        .shop-header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #c0c0ff, #8a6de9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: 1px;
            text-shadow: 0 0 15px rgba(138, 109, 233, 0.5);
        }

        .shop-header p {
            color: #a0a0c0;
            margin-top: 0.5rem;
            font-size: 1.1rem;
            border-bottom: 1px dashed #2f2f4a;
            padding-bottom: 1rem;
            display: inline-block;
        }

        /* card grid */
        .plan-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
        }

        .plan-card {
            background: rgba(20, 20, 35, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(140, 120, 255, 0.15);
            border-radius: 2.5rem;
            padding: 2rem 1.8rem;
            width: 330px;
            max-width: 100%;
            transition: transform 0.25s ease, border-color 0.2s, box-shadow 0.3s;
            box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.7);
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }

        .plan-card:hover {
            transform: translateY(-8px);
            border-color: #6d5ac9;
            box-shadow: 0 30px 50px -20px #4b3b9e;
        }

        /* بج‌های تزئینی پلان */
        .card-badge {
            position: absolute;
            top: 1.2rem;
            left: 1.8rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 40px;
            padding: 0.25rem 1rem;
            font-size: 0.75rem;
            border: 1px solid rgba(255, 215, 0, 0.2);
            color: #c8b3ff;
            letter-spacing: 0.5px;
        }

        /* تصویر محصول */
        .product-image {
            width: 100%;
            height: 160px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem 0 1.2rem;
            border-radius: 28px;
            background: linear-gradient(145deg, #161629, #0e0e1f);
            padding: 0.8rem;
            border: 1px solid #2a2a45;
        }

        .product-image svg {
            width: 110px;
            height: 110px;
            filter: drop-shadow(0 0 8px #7a5af0);
        }

        .product-image .img-placeholder {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        .plan-card:nth-child(1) .product-image svg { color: #45c3ff; } 
        .plan-card:nth-child(2) .product-image svg { color: #b885ff; } 
        .plan-card:nth-child(3) .product-image svg { color: #ff8a6c; } 

        /* عنوان و قیمت */
        .plan-name {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 1.2rem;
        }

        .plan-name h2 {
            font-size: 1.7rem;
            font-weight: 600;
            color: #f0eaff;
            letter-spacing: 0.5px;
        }

        .price-tag {
            text-align: left;
        }

        .main-price {
            font-size: 1.9rem;
            font-weight: 800;
            background: linear-gradient(135deg, #ffe69b, #ffb3aa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
        }

        .price-period {
            font-size: 0.8rem;
            color: #9595b9;
            display: block;
            text-align: left;
        }

        .divider-light {
            height: 2px;
            background: linear-gradient(90deg, transparent, #5f4f9a, transparent);
            margin: 1.2rem 0 1.5rem 0;
            opacity: 0.4;
        }

        /* features list */
        .features-list {
            list-style: none;
            margin: 0.5rem 0 1.8rem;
            flex-grow: 1;
        }

        .features-list li {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            font-size: 0.95rem;
            color: #cfcfee;
        }

        .features-list i.fa-check-circle {
            color: #8f7be3;
            font-size: 1.2rem;
            min-width: 1.5rem;
            text-shadow: 0 0 8px #6246e0;
        }

        /* بسته به ویژگی اضافه می‌توان آیکون متفاوت گذاشت */
        .btn-buy {
            background: rgba(255, 255, 255, 0.02);
            border: 1.5px solid #4c3d89;
            color: #ddd6ff;
            border-radius: 50px;
            padding: 0.9rem 1.5rem;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.2s;
            margin-top: 0.5rem;
            backdrop-filter: blur(5px);
            direction: ltr; /* برای آیکون خرید */
        }

        .btn-buy span {
            font-family: 'Vazir', sans-serif;
            margin-right: 0.4rem;
        }

        .btn-buy i {
            font-size: 1.2rem;
            color: #b6a2ff;
            transition: transform 0.2s;
        }

        .btn-buy:hover {
            background: #36335f;
            border-color: #a587ff;
            color: #ffffff;
            box-shadow: 0 0 20px #5d4a9b;
        }

        .btn-buy:hover i {
            transform: translateX(5px);
            color: white;
        }

        /* زیرنویس و ساعته/۲۴ در پلان اول */
        .inline-small {
            font-size: 0.9rem;
            color: #b1b1d9;
            background: rgba(255,255,255,0.02);
            border-radius: 30px;
            padding: 0.1rem 1rem;
            display: inline-block;
            margin-top: 0.4rem;
        }

        .extra-badge {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 0.8rem;
        }

        /* responsive */
        @media (max-width: 750px) {
            .plan-grid { gap: 1.5rem; }
            .shop-header h1 { font-size: 2rem; }
        }
    </style>


    <div class="container">
        <div class="shop-header">
            <h1><i class="fas fa-bolt" style="color: #b79aff; margin-left: 0.5rem;"></i> فروشگاه اتصال سریع <i class="fas fa-wifi" style="color: #b79aff; margin-right: 0.5rem;"></i></h1>
            <p>پلان‌های ویژه با کیفیت پایدار و پشتیبانی چندسکویی</p>
        </div>

        <div class="plan-grid">
            <!-- پلان پایه یکساهه (تک‌کاربره) -->
            <div class="plan-card">
                <div class="card-badge">⭐ محبوب کاربران</div>
                <!-- تصویر محصول پایه -->
                <div class="product-image">
                    <div class="img-placeholder">
                        <svg viewBox="0 0 100 100" width="110" height="110" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="#6b5b9e" stroke-width="2" fill="url(#grad1)"></circle>
                            <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#526bc2"></stop><stop offset="100%" stop-color="#7954b5"></stop></linearGradient></defs>
                            <path d="M30 50 L45 65 L70 35" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round"></path>
                            <circle cx="50" cy="50" r="15" fill="none" stroke="#eee" stroke-width="2" stroke-dasharray="4 4"></circle>
                        </svg>
                    </div>
                </div>
                <div class="plan-name">
                    <h2>پایه <span style="font-size: 0.9rem; font-weight: normal; margin-right: 0.3rem;">(تک‌کاربره)</span></h2>
                    <div class="price-tag">
                        <span class="main-price">۷۰,۰۰۰</span>
                        <span class="price-period">ماهانه</span>
                    </div>
                </div>
                <!-- extra note: ساعته / 24 -->
                <div class="extra-badge">
                    <span class="inline-small"><i class="far fa-clock" style="margin-left: 0.3rem;"></i> ساعته / ۲۴</span>
                </div>

                <ul class="features-list">
                    <li><i class="fas fa-check-circle"></i> اتصال پرسرعت و بدون قطعی</li>
                    <li><i class="fas fa-check-circle"></i> پشتیبانی از سیستم عامل اندروید</li>
                    <li><i class="fas fa-check-circle"></i> ترافیک نیوپا (در صورت وجود)</li>
                </ul>
                <button class="btn-buy"><span>خرید</span> <i class="fas fa-arrow-left"></i></button>
            </div>

            <!-- پلان حرفه‌ای سه ماهه (سه کاربره) -->
            <div class="plan-card">
                <div class="card-badge">🔥 پرفروش‌ترین</div>
                <div class="product-image">
                    <div class="img-placeholder">
                        <svg viewBox="0 0 100 100" width="110" height="110" fill="currentColor">
                            <rect x="20" y="20" width="60" height="60" rx="15" fill="url(#grad2)" stroke="#ac93ea" stroke-width="2"></rect>
                            <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="1" y2="0"><stop offset="0%" stop-color="#c37df2"></stop><stop offset="100%" stop-color="#a065c9"></stop></linearGradient></defs>
                            <circle cx="40" cy="45" r="6" fill="#f2e9ff"></circle>
                            <circle cx="60" cy="45" r="6" fill="#f2e9ff"></circle>
                            <path d="M40 65 Q50 75 60 65" stroke="#ffffff" stroke-width="3" fill="none"></path>
                            <path d="M30 30 L70 30" stroke="#d9c5ff" stroke-width="3" stroke-dasharray="3 3"></path>
                        </svg>
                    </div>
                </div>
                <div class="plan-name">
                    <h2>حرفه‌ای <span style="font-size: 0.8rem;">(سه کاربره)</span></h2>
                    <div class="price-tag">
                        <span class="main-price">۱۸۰,۰۰۰</span>
                        <span class="price-period">ماهانه</span>
                    </div>
                </div>
                <!-- note سه ماهه -->
                <div class="extra-badge">
                    <span class="inline-small"><i class="fas fa-calendar-alt"></i> دوره سه‌ماهه</span>
                </div>
                <ul class="features-list">
                    <li><i class="fas fa-check-circle"></i> تمام ویژگی‌های پلان پایه</li>
                    <li><i class="fas fa-check-circle"></i> پشتیبانی کامل از ویندوز و اندروید</li>
                    <li><i class="fas fa-check-circle"></i> قابلیت اتصال همزمان دو دستگاه</li>
                    <li><i class="fas fa-check-circle"></i> سرورهای مخصوص بازی (Ping)</li>
                    <li><i class="fas fa-check-circle"></i> آفیپی ثابت (Fixed IP)</li>
                </ul>
                <button class="btn-buy"><span>خرید</span> <i class="fas fa-arrow-left"></i></button>
            </div>

            <!-- پلان تجاری یکساله (دوازده کاربره) -->
            <div class="plan-card">
                <div class="card-badge">💎 ویژه تجاری</div>
                <div class="product-image">
                    <div class="img-placeholder">
                        <svg viewBox="0 0 100 100" width="110" height="110" fill="currentColor">
                            <polygon points="50,15 80,35 80,65 50,85 20,65 20,35" fill="url(#grad3)" stroke="#b294ff" stroke-width="2"></polygon>
                            <defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f0745f"></stop><stop offset="100%" stop-color="#c04b76"></stop></linearGradient></defs>
                            <circle cx="50" cy="50" r="10" fill="#ffe3d0"></circle>
                            <path d="M35 42 L65 42 M35 58 L65 58" stroke="#fff" stroke-width="3" stroke-linecap="round"></path>
                        </svg>
                    </div>
                </div>
                <div class="plan-name">
                    <h2>تجاری <span style="font-size: 0.8rem;">(دوازده کاربره)</span></h2>
                    <div class="price-tag">
                        <span class="main-price">۷۰۰,۰۰۰</span>
                        <span class="price-period">سالانه</span>
                    </div>
                </div>
                <!-- نشان سالانه -->
                <div class="extra-badge">
                    <span class="inline-small"><i class="fas fa-infinity"></i> یکساله - تخفیف ویژه</span>
                </div>
                <ul class="features-list">
                    <li><i class="fas fa-check-circle"></i> تمام ویژگی‌های پلان حرفه‌ای</li>
                    <li><i class="fas fa-check-circle"></i> <span>پشتیبانی از iOS (اینفو و آیپ)</span></li>
                    <li><i class="fas fa-check-circle"></i> <span>پشتیبانی از macOS (مختیف)</span></li>
                    <li><i class="fas fa-check-circle"></i> قابلیت اتصال ۱۲ دستگاه همزمان</li>
                    <li><i class="fas fa-check-circle"></i> پیشنهاد محتوا (Content suggestions)</li>
                    <li><i class="fas fa-check-circle"></i> پهنای باند کاملاً نامحدود</li>
                    <li><i class="fas fa-check-circle"></i> اولویت در پشتیبانی اختصاصی</li>
                </ul>
                <button class="btn-buy"><span>خرید</span> <i class="fas fa-arrow-left"></i></button>
            </div>
        </div>

        <!-- توضیحات پایین (متن اصلی) -->
        <div style="margin-top: 3rem; text-align: center; color: #7f7fb2; font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 50px; backdrop-filter: blur(5px); border: 1px solid #26263e;">
            <i class="fas fa-shield-alt" style="margin-left: 0.5rem; color: #aa92ff;"></i> تمامی پلان‌ها دارای ضمانت بازگشت وجه و پشتیبانی ۲۴ ساعته می‌باشند. 
            <span style="margin-right: 1rem;">🚀 سرعت و پایداری بی‌نظیر</span>
        </div>
    </div>

    <!-- کد جاوااسکریپت ساده برای شبیه‌سازی خرید (اختیاری) -->
    <script>
        (function() {
            const buyButtons = document.querySelectorAll('.btn-buy');
            buyButtons.forEach((btn, index) => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const planNames = ['پایه (تک‌کاربره)', 'حرفه‌ای (سه کاربره)', 'تجاری (دوازده کاربره)'];
                    alert(\`محصول "\${planNames[index]}" به سبد خرید اضافه شد. (درگاه پرداخت آزمایشی)\`);
                });
            });
        })();
    <\/script>

`,className:"w-html-embed"})}),z=i=>{const{origin:a,pathname:s,search:r}=new URL(i);return`${a}${s}${r}`},j=n.memo(({pageKey:i,system:a})=>e.jsx(k,{system:a},i),(i,a)=>i.pageKey===a.pageKey),S=({data:i})=>{const{system:a,resources:s,url:r,pageMeta:o}=i,d=z(r),p=n.useMemo(()=>({imageLoader:l,assetBaseUrl:t,resources:s,breakpoints:x,onError:console.error}),[s]);return e.jsxs(f.Provider,{value:p,children:[e.jsx(g.Provider,{value:r,children:e.jsx(j,{pageKey:d,system:a})}),e.jsx(m,{url:r,pageMeta:o,siteName:c,imageLoader:l,assetBaseUrl:t}),e.jsx(h,{children:o.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T=({})=>{const i={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i,null,2)}}),e.jsx("link",{rel:"icon",href:l({src:`${t}${y}`})}),v.map(a=>e.jsx("link",{rel:"preload",href:`${t}${a}`,as:"font",crossOrigin:"anonymous"},a)),w.map(a=>e.jsx("link",{rel:"preload",href:`${t}${a}`,as:"image"},a))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-22/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-22/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{C as configValuesSerialized};
