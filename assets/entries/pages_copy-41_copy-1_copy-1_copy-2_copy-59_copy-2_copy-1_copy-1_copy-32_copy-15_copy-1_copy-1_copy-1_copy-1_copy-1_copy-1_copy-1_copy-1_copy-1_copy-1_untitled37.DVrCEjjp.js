import{j as e,r,a as n,i,R as h,b as x,P as f,c as u,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as m}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",g=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",w=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],b=[],P=a=>e.jsx("body",{className:"w-element",children:e.jsx(m,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>طناب فیزیکی آویزان از موس</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            cursor: none; /* مخفی کردن نشانگر پیش‌فرض برای حس و حال بهتر */
        }
        body {
            overflow: hidden;
            background: linear-gradient(45deg, #1a2f3f, #0f1a24);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        canvas {
            display: block;
            width: 100vw;
            height: 100vh;
            box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
        }
        .info {
            position: fixed;
            bottom: 15px;
            left: 20px;
            color: rgba(255, 255, 255, 0.7);
            background: rgba(0, 0, 0, 0.3);
            padding: 8px 16px;
            border-radius: 40px;
            backdrop-filter: blur(5px);
            font-size: 14px;
            pointer-events: none;
            z-index: 10;
            border: 1px solid rgba(255,215,0,0.3);
            letter-spacing: 0.5px;
        }
        .info i {
            font-style: normal;
            color: #ffd966;
            margin-left: 5px;
        }
    </style>


    <canvas id="ropeCanvas"></canvas>
    <div class="info"><i>🪢</i> طناب به موس آویزان است — موس را حرکت دهید</div>

    <script>
        (function() {
            const canvas = document.getElementById('ropeCanvas');
            const ctx = canvas.getContext('2d');

            // تنظیم اندازه کانواس با کل پنجره
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            // ========== پارامترهای طناب ==========
            const SEGMENT_COUNT = 28;          // تعداد بخش‌های طناب (تعداد نقاط = SEGMENT_COUNT)
            const SEGMENT_LENGTH = 22;          // فاصله ثابت بین هر دو نقطه (به پیکسل)
            const GRAVITY = 0.45;                // نیروی گرانش
            const DAMPING = 0.985;                // مقاومت هوا / اصطکاک
            const ITERATIONS = 12;                // تعداد تکرار برای سفت‌تر شدن محدودیت‌ها (حل و فصل)

            // آرایه نقاط: هر نقطه شامل {x, y, px, py} (موقعیت فعلی و قبلی)
            let points = [];

            // موقعیت موس (مختصات داخل کانواس)
            let mouseX = canvas.width / 2;
            let mouseY = canvas.height / 2;
            let mousePresent = false;  // آیا موس داخل کانواس است؟

            // مقداردهی اولیه طناب به صورت آویخته از نقطه (مرکز کانواس، کمی بالاتر)
            function initRope(startX, startY) {
                points = [];
                for (let i = 0; i < SEGMENT_COUNT; i++) {
                    // نقاط به صورت عمودی زیر هم قرار می‌گیرند (طناب آویخته)
                    points.push({
                        x: startX,
                        y: startY + i * SEGMENT_LENGTH,
                        px: startX,
                        py: startY + i * SEGMENT_LENGTH
                    });
                }
            }

            // شروع با مرکز کانواس (چون موس هنوز جایی نداشت)
            initRope(mouseX, mouseY - 50); // کمی بالاتر برای اینکه طناب بلندتر دیده شود

            // ========== گرفتن موقعیت موس ==========
            function handleMouseMove(e) {
                const rect = canvas.getBoundingClientRect();
                const scaleX = canvas.width / rect.width;   // تطابق با سایز واقعی کانواس
                const scaleY = canvas.height / rect.height;

                // مختصات موس نسبت به کانواس (پیکسل)
                let rawX = (e.clientX - rect.left) * scaleX;
                let rawY = (e.clientY - rect.top) * scaleY;

                // محدود کردن به مرزهای کانواس
                mouseX = Math.min(canvas.width, Math.max(0, rawX));
                mouseY = Math.min(canvas.height, Math.max(0, rawY));
                mousePresent = true;
            }

            function handleMouseLeave() {
                mousePresent = false;  // وقتی موس خارج شد، طناب رها نمی‌شود؟ در اینجا آخرین موقعیت ثابت می‌ماند
                // می‌توانیم گزینه دیگر: آزاد کردن نقطه اول (اما درخواست: از موس آویزون باشه پس وقتی موس نیست چی؟)
                // تصمیم: اگر موس خارج شد، طناب در آخرین نقطه ثابت می‌ماند (حالت آویزان از لبه)
                // برای طبیعی‌تر شدن، می‌توانستیم رها کنیم ولی اینجا ترجیح می‌دهیم آویزان بماند از همان نقطه آخر
            }

            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('mouseleave', handleMouseLeave);

            // پشتیبانی از لمس برای موبایل
            canvas.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (e.touches.length > 0) {
                    const rect = canvas.getBoundingClientRect();
                    const touch = e.touches[0];
                    const scaleX = canvas.width / rect.width;
                    const scaleY = canvas.height / rect.height;
                    let rawX = (touch.clientX - rect.left) * scaleX;
                    let rawY = (touch.clientY - rect.top) * scaleY;
                    mouseX = Math.min(canvas.width, Math.max(0, rawX));
                    mouseY = Math.min(canvas.height, Math.max(0, rawY));
                    mousePresent = true;
                }
            }, { passive: false });

            canvas.addEventListener('touchend', (e) => {
                mousePresent = false;  // با برداشتن انگشت، آخرین موقعیت حفظ شود
            });

            canvas.addEventListener('touchcancel', (e) => {
                mousePresent = false;
            });

            // ========== حل فیزیک و بروزرسانی طناب ==========
            function updateRope() {
                // اگر موس داخل کانواس است، نقطه اول را به موس متصل کن
                if (mousePresent) {
                    points[0].x = mouseX;
                    points[0].y = mouseY;
                    points[0].px = mouseX;  // سرعت نقطه اول صفر (ثابت)
                }
                // اگر موس خارج است، نقطه اول آزاد نمی‌شود، همان آخرین موقعیت می‌ماند (آویزان از لبه)
                // اما می‌توانیم سرعت نگیرد، عملاً همان جا قفل است چون px را هم برابر x قرار دادیم.
                // برای طبیعی‌تر وقتی موس نیست، می‌توانست رها شود اما بنا به درخواست "از موس آویزون" احتمالاً می‌خواهیم همیشه وصل باشد.
                // من اینجا طوری می‌کنم که وقتی موس نیست، نقطه اول ثابت بماند (طناب آویزان از یک نقطه ثابت)

                // اعمال فیزیک ورلت برای نقاط 1 تا انتها (نقطه اول توسط موس کنترل می‌شود)
                for (let i = 1; i < points.length; i++) {
                    const p = points[i];
                    
                    // سرعت = موقعیت فعلی منهای موقعیت قبلی (با damping)
                    let vx = (p.x - p.px) * DAMPING;
                    let vy = (p.y - p.py) * DAMPING;
                    
                    // اعمال گرانش
                    vy += GRAVITY;
                    
                    // به‌روز کردن موقعیت قبلی به موقعیت فعلی
                    p.px = p.x;
                    p.py = p.y;
                    
                    // موقعیت جدید = قبلی + سرعت (ورلت)
                    p.x += vx;
                    p.y += vy;
                }

                // اعمال محدودیت فاصله (constraints) بین نقاط متوالی
                for (let iter = 0; iter < ITERATIONS; iter++) {
                    for (let i = 0; i < points.length - 1; i++) {
                        const a = points[i];
                        const b = points[i + 1];
                        
                        let dx = b.x - a.x;
                        let dy = b.y - a.y;
                        let dist = Math.sqrt(dx * dx + dy * dy);
                        
                        if (dist === 0) continue;  // محافظت
                        
                        let diff = (dist - SEGMENT_LENGTH) / dist;
                        let offsetX = dx * diff * 0.5;
                        let offsetY = dy * diff * 0.5;
                        
                        // اگر نقطه اول است (متصل به موس) نباید جابجا شود (فقط نقطه بعدی حرکت کند)
                        if (i === 0) {
                            // نقطه a ثابت است (موس)، فقط b را جابجا کن
                            b.x -= offsetX * 2;
                            b.y -= offsetY * 2;
                        } else {
                            // هر دو نقطه را جابجا کن
                            a.x += offsetX;
                            a.y += offsetY;
                            b.x -= offsetX;
                            b.y -= offsetY;
                        }
                    }
                    
                    // اختیاری: می‌توانیم نقاط را به مرزهای کانواس محدود کنیم (طناب به دیوار برخورد کند)
                    // برای جذابیت بیشتر، اضافه می‌کنم:
                    for (let i = 1; i < points.length; i++) {
                        const p = points[i];
                        // برخورد با کف
                        if (p.y >= canvas.height - 5) {
                            p.y = canvas.height - 5;
                            p.py = p.y - (p.y - p.py) * 0.3; // کاهش انرژی عمودی
                        }
                        // برخورد با دیواره‌ها (اختیاری)
                        if (p.x <= 5) {
                            p.x = 5;
                            p.px = p.x + (p.x - p.px) * 0.2; //反弹
                        }
                        if (p.x >= canvas.width - 5) {
                            p.x = canvas.width - 5;
                            p.px = p.x + (p.x - p.px) * 0.2;
                        }
                    }
                }
            }

            // ========== رسم طناب ==========
            function drawRope() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // رسم یک پس‌زمینه نرم (برای زیبایی)
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#1a3a4a');
                gradient.addColorStop(1, '#0d1c26');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // رسم نقاط (گره‌های طناب) به صورت دایره‌های کوچک و خطوط ضخیم
                ctx.lineWidth = 10;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                
                // سایه برای عمق بیشتر
                ctx.shadowColor = 'rgba(0,0,0,0.7)';
                ctx.shadowBlur = 15;
                ctx.shadowOffsetX = 4;
                ctx.shadowOffsetY = 4;

                // رنگ طناب (قهوه‌ای طلایی)
                ctx.strokeStyle = '#b48b5a';
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) {
                    ctx.lineTo(points[i].x, points[i].y);
                }
                ctx.stroke();

                // رسم گره‌های طناب (دایره‌های کوچک سر هر بخش)
                ctx.shadowBlur = 12;
                ctx.fillStyle = '#7a5d3c';
                for (let i = 0; i < points.length; i++) {
                    ctx.beginPath();
                    ctx.arc(points[i].x, points[i].y, 6, 0, Math.PI * 2);
                    ctx.fill();
                    // برجسته‌سازی کوچک
                    ctx.shadowBlur = 5;
                    ctx.fillStyle = '#c9a87c';
                    ctx.beginPath();
                    ctx.arc(points[i].x-1, points[i].y-1, 2.5, 0, Math.PI*2);
                    ctx.fill();
                    ctx.fillStyle = '#7a5d3c'; // برگشت به رنگ اصلی برای دور بعد
                }

                // رسم یک حلقه آویز در نقطه اول (نقطه اتصال به موس)
                ctx.shadowBlur = 20;
                ctx.fillStyle = '#ffd966';
                ctx.beginPath();
                ctx.arc(points[0].x, points[0].y, 12, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#f1c40f';
                ctx.beginPath();
                ctx.arc(points[0].x, points[0].y, 7, 0, Math.PI * 2);
                ctx.fill();

                // کشیدن یک دایره کوچک سفید به عنوان هایلایت موس
                if (mousePresent) {
                    ctx.shadowBlur = 25;
                    ctx.fillStyle = 'rgba(255,255,230,0.9)';
                    ctx.beginPath();
                    ctx.arc(mouseX, mouseY, 8, 0, Math.PI * 2);
                    ctx.fill();
                }

                // غیرفعال کردن سایه برای نوشته (اختیاری)
                ctx.shadowBlur = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;

                // رسم یک نیم‌نگاه گرافیکی: دایره‌های نورانی زیر موس
                if (mousePresent) {
                    ctx.beginPath();
                    const gradient2 = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, 80);
                    gradient2.addColorStop(0, 'rgba(255,215,0,0.3)');
                    gradient2.addColorStop(1, 'rgba(255,215,0,0)');
                    ctx.fillStyle = gradient2;
                    ctx.arc(mouseX, mouseY, 80, 0, Math.PI*2);
                    ctx.fill();
                }
            }

            // ========== حلقه انیمیشن ==========
            function animate() {
                updateRope();
                drawRope();
                requestAnimationFrame(animate);
            }

            animate();

            // در صورت کلیک کردن، تغییر وضعیت خاصی نمی‌دهیم، اما می‌توانیم طناب را تکان دهیم
            canvas.addEventListener('click', () => {
                // فقط برای تفنن: یک نیروی ناگهانی به طناب وارد کنیم
                if (points.length > 1) {
                    points[1].px -= 20; // ایجاد اختلال
                }
            });

            // ریست کردن طناب با دوبار کلیک (شروع دوباره از موس)
            canvas.addEventListener('dblclick', (e) => {
                const rect = canvas.getBoundingClientRect();
                const scaleX = canvas.width / rect.width;
                const scaleY = canvas.height / rect.height;
                let x = (e.clientX - rect.left) * scaleX;
                let y = (e.clientY - rect.top) * scaleY;
                mouseX = Math.min(canvas.width, Math.max(0, x));
                mouseY = Math.min(canvas.height, Math.max(0, y));
                initRope(mouseX, mouseY - 30);
                mousePresent = true;
            });

            // نمایش پیغام در کنسول برای اطمینان از اجرا
            console.log('طناب فیزیکی آماده است! موس را حرکت دهید.');
        })();
    <\/script>

`,className:"w-html-embed"})}),S=a=>{const{origin:t,pathname:s,search:o}=new URL(a);return`${t}${s}${o}`},M=r.memo(({pageKey:a,system:t})=>e.jsx(P,{system:t},a),(a,t)=>a.pageKey===t.pageKey),T=({data:a})=>{const{system:t,resources:s,url:o,pageMeta:c}=a,p=S(o),d=r.useMemo(()=>({imageLoader:i,assetBaseUrl:n,resources:s,breakpoints:g,onError:console.error}),[s]);return e.jsxs(h.Provider,{value:d,children:[e.jsx(x.Provider,{value:o,children:e.jsx(M,{pageKey:p,system:t})}),e.jsx(f,{url:o,pageMeta:c,siteName:l,imageLoader:i,assetBaseUrl:n}),e.jsx(u,{children:c.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),Y=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${n}${v}`})}),w.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),b.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},X=Object.freeze(Object.defineProperty({__proto__:null,Head:Y},Symbol.toStringTag,{value:"Module"})),N={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-41/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-41/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:X}}};export{N as configValuesSerialized};
