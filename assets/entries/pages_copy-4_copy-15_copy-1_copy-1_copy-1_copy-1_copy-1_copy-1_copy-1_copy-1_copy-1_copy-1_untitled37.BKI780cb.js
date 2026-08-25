import{j as e,r as l,a as i,i as r,R as u,b as m,P as f,c as g,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>صفحه تشکر</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .thank-you-container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-width: 700px;
            width: 100%;
            padding: 60px 40px;
            text-align: center;
            animation: slideUp 0.8s ease;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .checkmark {
            width: 80px;
            height: 80px;
            margin: 0 auto 30px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .checkmark::after {
            content: '✓';
            font-size: 50px;
            color: white;
            font-weight: bold;
        }

        @keyframes scaleIn {
            0% {
                transform: scale(0);
            }
            50% {
                transform: scale(1.2);
            }
            100% {
                transform: scale(1);
            }
        }

        h1 {
            color: #333;
            font-size: 2.5rem;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .subtitle {
            color: #666;
            font-size: 1.1rem;
            margin-bottom: 30px;
            line-height: 1.6;
        }

        .order-details {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 25px;
            margin: 30px 0;
            border-right: 4px solid #667eea;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e0e0e0;
        }

        .detail-row:last-child {
            border-bottom: none;
        }

        .detail-label {
            color: #666;
            font-weight: 500;
        }

        .detail-value {
            color: #333;
            font-weight: bold;
        }

        .coupon-section {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            border-radius: 15px;
            padding: 25px;
            color: white;
            margin: 30px 0;
        }

        .coupon-title {
            font-size: 1.2rem;
            margin-bottom: 15px;
            font-weight: bold;
        }

        .coupon-code {
            background: rgba(255, 255, 255, 0.2);
            padding: 15px;
            border-radius: 10px;
            font-size: 1.5rem;
            letter-spacing: 2px;
            font-weight: bold;
            margin: 15px 0;
            border: 2px dashed white;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .coupon-code:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.02);
        }

        .coupon-note {
            font-size: 0.9rem;
            opacity: 0.9;
            margin-top: 10px;
        }

        .products-section {
            margin: 30px 0;
            text-align: left;
        }

        .products-title {
            color: #333;
            font-size: 1.3rem;
            margin-bottom: 20px;
            text-align: center;
        }

        .product-item {
            display: flex;
            align-items: center;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 10px;
            margin-bottom: 10px;
            transition: all 0.3s ease;
        }

        .product-item:hover {
            background: #e8e9ff;
            transform: translateX(-5px);
        }

        .product-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            margin-left: 15px;
        }

        .product-info h4 {
            color: #333;
            margin-bottom: 5px;
        }

        .product-info p {
            color: #666;
            font-size: 0.9rem;
        }

        .buttons-group {
            display: flex;
            gap: 15px;
            margin-top: 40px;
            flex-wrap: wrap;
        }

        .btn {
            flex: 1;
            min-width: 150px;
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }

        .btn-secondary {
            background: white;
            color: #667eea;
            border: 2px solid #667eea;
        }

        .btn-secondary:hover {
            background: #667eea;
            color: white;
        }

        .social-links {
            margin-top: 30px;
            padding-top: 30px;
            border-top: 1px solid #e0e0e0;
        }

        .social-title {
            color: #666;
            margin-bottom: 15px;
            font-size: 0.95rem;
        }

        .social-icons {
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-icon:hover {
            transform: scale(1.2) rotate(10deg);
        }

        .confetti {
            position: fixed;
            pointer-events: none;
        }

        @media (max-width: 600px) {
            .thank-you-container {
                padding: 40px 20px;
            }

            h1 {
                font-size: 1.8rem;
            }

            .buttons-group {
                flex-direction: column;
            }

            .btn {
                width: 100%;
            }

            .product-item {
                flex-direction: column;
                text-align: center;
            }

            .product-icon {
                margin-left: 0;
                margin-bottom: 10px;
            }
        }
    </style>


    <div class="thank-you-container">
        <div class="checkmark"></div>
        
        <h1>خیلی ممنون!</h1>
        <p class="subtitle">سفارش شما با موفقیت ثبت شد. از اعتماد شما بسیار سپاسگزاریم و امیدواریم کاملاً از خرید خود راضی باشید.</p>

        <div class="order-details">
            <div class="detail-row">
                <span class="detail-label">شماره سفارش:</span>
                <span class="detail-value">#12345678</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">تاریخ سفارش:</span>
                <span class="detail-value">18 فوریه 2026</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">وضعیت:</span>
                <span class="detail-value" style="color: #22c55e;">در حال پردازش</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">مبلغ کل:</span>
                <span class="detail-value" style="color: #667eea; font-size: 1.2rem;">500,000 تومان</span>
            </div>
        </div>

        <div class="coupon-section">
            <div class="coupon-title">🎁 کوپن ویژه برای خرید بعدی</div>
            <div class="coupon-code" id="couponCode">SAVE20</div>
            <div class="coupon-note">20% تخفیف در خریدهای بعدی • تا 30 روز معتبر</div>
        </div>

        <div class="products-section">
            <h3 class="products-title">محصولات خریداری شده</h3>
            
            <div class="product-item">
                <div class="product-info">
                    <h4>محصول شماره یک</h4>
                    <p>تعداد: 1 | قیمت: 300,000 تومان</p>
                </div>
                <div class="product-icon">📦</div>
            </div>

            <div class="product-item">
                <div class="product-info">
                    <h4>محصول شماره دو</h4>
                    <p>تعداد: 2 | قیمت: 200,000 تومان</p>
                </div>
                <div class="product-icon">🎁</div>
            </div>
        </div>

        <div class="buttons-group">
            <a href="#" class="btn btn-primary">تعقیب سفارش</a>
            <a href="#" class="btn btn-secondary">محصولات دیگر</a>
        </div>

        <div class="social-links">
            <p class="social-title">ما را دنبال کنید:</p>
            <div class="social-icons">
                <a href="#" class="social-icon">f</a>
                <a href="#" class="social-icon">📱</a>
                <a href="#" class="social-icon">📧</a>
            </div>
        </div>
    </div>

    <script>
        // کپی کدون تخفیف
        document.getElementById('couponCode').addEventListener('click', function() {
            navigator.clipboard.writeText('SAVE20');
            alert('کد تخفیف کپی شد!');
        });

        // انیمیشن کنفتی (آتش‌بازی)
        function createConfetti() {
            const confettiPieces = 50;
            for (let i = 0; i < confettiPieces; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'][Math.floor(Math.random() * 5)];
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = confetti.style.width;
                confetti.style.animation = \`fall \${Math.random() * 2 + 2}s linear\`;
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 3000);
            }
        }

        const style = document.createElement('style');
        style.textContent = \`
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        \`;
        document.head.appendChild(style);

        // شروع انیمیشن در بارگذاری صفحه
        window.addEventListener('load', createConfetti);
    <\/script>


`,className:"w-html-embed"})}),j=a=>{const{origin:t,pathname:n,search:o}=new URL(a);return`${t}${n}${o}`},z=l.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:n,url:o,pageMeta:s}=a,c=j(o),p=l.useMemo(()=>({imageLoader:r,assetBaseUrl:i,resources:n,breakpoints:b,onError:console.error}),[n]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:o,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(f,{url:o,pageMeta:s,siteName:d,imageLoader:r,assetBaseUrl:i}),e.jsx(g,{children:s.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${i}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-4/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-4/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{U as configValuesSerialized};
