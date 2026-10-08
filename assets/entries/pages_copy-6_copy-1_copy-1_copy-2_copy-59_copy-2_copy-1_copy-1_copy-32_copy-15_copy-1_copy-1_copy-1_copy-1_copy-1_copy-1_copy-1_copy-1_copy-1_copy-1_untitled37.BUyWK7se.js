import{j as e,r as l,a as o,i as s,R as f,b as y,P as g,c as m,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as u}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",k=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],b=a=>e.jsx("body",{className:"w-element",children:e.jsx(u,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موشک لایه‌ای | پارالاکس سینمایی</title>
    <style>
        /* ========== RESET ========== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #0a051a;
            font-family: 'Vazirmatn', sans-serif;
            overflow-x: hidden;
        }

        /* ========== پارالاکس اصلی ========== */
        .keyart {
            position: relative;
            width: 100%;
            height: 500vh; /* ۵ برابر ارتفاع viewport برای اسکرول طولانی */
            background-color: #03000f;
        }

        .keyart_layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover; /* یا contain بسته به نیاز */
            pointer-events: none;
            z-index: 1;
        }

        /* لایه‌های موشک - هر کدوم بخشی از موشک رو تشکیل می‌دن */
        #keyart-0 { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%2303000f"/><circle cx="600" cy="400" r="200" fill="%2333205a" opacity="0.3"/></svg>'); } /* پس زمینه */
        
        /* کلاهک موشک */
        #keyart-1 { 
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><path d="M550 350 L600 150 L650 350 Z" fill="%23e8dbb0" stroke="%23ffffff" stroke-width="4"/><path d="M560 340 L600 180 L640 340 Z" fill="%23b39f67" opacity="0.8"/></svg>');
            background-size: contain;
            background-position: center 30%;
        }
        
        /* بخش اویونیک (محموله) */
        #keyart-2 { 
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect x="520" y="340" width="160" height="100" rx="20" fill="%239a884d" stroke="%23ffffff" stroke-width="3"/><circle cx="560" cy="380" r="8" fill="%23ffd966"/><circle cx="600" cy="380" r="8" fill="%23ffd966"/><circle cx="640" cy="380" r="8" fill="%23ffd966"/></svg>');
            background-size: contain;
            background-position: center 38%;
        }
        
        /* مخزن بالایی (LOX) */
        #keyart-3 { 
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect x="500" y="440" width="200" height="130" rx="30" fill="%23827f9c" stroke="%23ffffff" stroke-width="4"/><text x="550" y="520" font-family="monospace" font-size="40" fill="%23b3e0ff" opacity="0.7">LOX</text></svg>');
            background-size: contain;
            background-position: center 48%;
        }
        
        /* مخزن پایینی (RP-1) */
        #keyart-4 { 
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect x="500" y="570" width="200" height="130" rx="30" fill="%2392805c" stroke="%23ffffff" stroke-width="4"/><text x="540" y="650" font-family="monospace" font-size="40" fill="%23ffcf9a" opacity="0.7">RP-1</text></svg>');
            background-size: contain;
            background-position: center 60%;
        }
        
        /* موتور اصلی */
        #keyart-5 { 
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><ellipse cx="600" cy="740" rx="120" ry="60" fill="%236d5b36" stroke="%23ffffff" stroke-width="4"/><ellipse cx="600" cy="770" rx="80" ry="40" fill="%2391814d" stroke="%23ffd966" stroke-width="3"/></svg>');
            background-size: contain;
            background-position: center 75%;
        }
        
        /* نازل و آتش */
        #keyart-6 { 
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><ellipse cx="600" cy="800" rx="100" ry="50" fill="%23ff7b24" opacity="0.8"/><ellipse cx="600" cy="820" rx="140" ry="60" fill="%23ff5500" opacity="0.5"/></svg>');
            background-size: contain;
            background-position: center 90%;
        }
        
        /* بالک‌های چپ و راست */
        #keyart-7 { 
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><path d="M400 650 L450 550 L500 650 Z" fill="%236b5b36" stroke="%23ffffff" stroke-width="3"/><path d="M800 650 L750 550 L700 650 Z" fill="%236b5b36" stroke="%23ffffff" stroke-width="3"/></svg>');
            background-size: contain;
            background-position: center 65%;
        }
        
        /* جزئیات ریز (خطوط و پرچ) */
        #keyart-8 { 
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><path d="M580 250 L620 250 L600 280 Z" fill="red"/><circle cx="600" cy="320" r="10" fill="%23ffd966"/><path d="M550 400 L570 400 L560 420 Z" fill="%23ffffff" opacity="0.3"/><path d="M630 400 L650 400 L640 420 Z" fill="%23ffffff" opacity="0.3"/></svg>');
            background-size: contain;
            background-position: center 30%;
        }

        /* لایه محوکننده برای متن */
        #keyart-scrim {
            background: linear-gradient(to bottom, transparent 0%, #0a051a 100%);
            opacity: 0.5;
            z-index: 10;
            pointer-events: none;
        }

        /* ========== محتوای بالای صفحه ========== */
        .hero {
            position: relative;
            z-index: 20;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            background: transparent;
            pointer-events: none;
        }
        .hero h1 {
            font-size: 6rem;
            text-shadow: 0 0 60px #b27aff;
            margin-bottom: 1rem;
        }
        .hero p {
            font-size: 2rem;
            background: rgba(20,5,40,0.6);
            padding: 1rem 3rem;
            border-radius: 60px;
            border: 2px solid #9f7aff;
            backdrop-filter: blur(10px);
        }

        /* ========== پنل‌های توضیحات ========== */
        .info-sections {
            position: relative;
            z-index: 30;
            margin-top: -50vh;
            pointer-events: none;
        }
        .section {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0 10%;
            color: white;
            pointer-events: none;
        }
        .section.left {
            justify-content: flex-start;
        }
        .card {
            max-width: 450px;
            background: rgba(8, 3, 20, 0.8);
            backdrop-filter: blur(16px);
            border: 3px solid #b491ff;
            border-radius: 40px;
            padding: 2.5rem;
            box-shadow: 0 0 100px #6f46cc;
            pointer-events: auto;
            transform: translateX(0);
            transition: transform 0.3s;
        }
        .card h2 {
            font-size: 3rem;
            color: #f2e3ff;
            border-right: 10px solid #b07cff;
            padding-right: 20px;
            margin-bottom: 1.5rem;
        }
        .card p {
            font-size: 1.3rem;
            line-height: 2rem;
            color: #ddd0ff;
        }

        footer {
            height: 30vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8f7acc;
            font-size: 1.5rem;
            background: #03000a;
        }
    </style>



<section class="hero">
    <h1>موشک لایه‌ای</h1>
    <p>با اسکرول، لایه‌ها رو تماشا کن</p>
</section>

<!-- ========== ساختار پارالاکس لایه‌ای مثل اون کد ========== -->
<div class="keyart" id="parallax">
    <!-- لایه‌های مختلف موشک (هر کدوم با سرعت متفاوت) -->
    <div class="keyart_layer parallax" id="keyart-0" data-speed="2"></div>      <!-- آسمون -->
    <div class="keyart_layer parallax" id="keyart-1" data-speed="8"></div>      <!-- کلاهک -->
    <div class="keyart_layer parallax" id="keyart-2" data-speed="15"></div>     <!-- اویونیک -->
    <div class="keyart_layer parallax" id="keyart-3" data-speed="22"></div>     <!-- مخزن LOX -->
    <div class="keyart_layer parallax" id="keyart-4" data-speed="30"></div>     <!-- مخزن RP-1 -->
    <div class="keyart_layer parallax" id="keyart-5" data-speed="38"></div>     <!-- موتور -->
    <div class="keyart_layer parallax" id="keyart-6" data-speed="48"></div>     <!-- آتش نازل -->
    <div class="keyart_layer parallax" id="keyart-7" data-speed="58"></div>     <!-- بالک‌ها -->
    <div class="keyart_layer" id="keyart-scrim"></div>                          <!-- محوکننده -->
    <div class="keyart_layer parallax" id="keyart-8" data-speed="70"></div>     <!-- جزئیات -->
</div>

<!-- ========== بخش‌های اطلاعات (مطابق با لایه‌ها) ========== -->
<div class="info-sections">
    <div class="section left" id="sec-nose">
        <div class="card">
            <h2>🔴 کلاهک</h2>
            <p>سر جنگی یا محموله اصلی در این بخش قرار می‌گیرد. جنس از آلیاژ تیتانیوم و کامپوزیت‌های مقاوم به حرارت.</p>
        </div>
    </div>
    <div class="section" id="sec-avionics">
        <div class="card">
            <h2>📡 اویونیک</h2>
            <p>سیستم هدایت، کامپیوتر مرکزی و تجهیزات مخابراتی. مغز متفکر موشک.</p>
        </div>
    </div>
    <div class="section left" id="sec-lox">
        <div class="card">
            <h2>❄️ مخزن LOX</h2>
            <p>اکسیژن مایع در دمای ۱۸۳- درجه سانتیگراد. عایق‌بندی چندلایه.</p>
        </div>
    </div>
    <div class="section" id="sec-rp1">
        <div class="card">
            <h2>🛢️ مخزن RP-1</h2>
            <p>نفت سفید تصفیه شده. سوخت اصلی موتور با درصد خلوص بالا.</p>
        </div>
    </div>
    <div class="section left" id="sec-engine">
        <div class="card">
            <h2>🔥 موتور</h2>
            <p>موتور با رانش ۱۲۰ تن. نازل از جنس اینکونل با خنک‌کاری فعال.</p>
        </div>
    </div>
    <div class="section" id="sec-fins">
        <div class="card">
            <h2>🌀 بالک‌ها</h2>
            <p>پایداری آیرودینامیکی در جو. زاویه حمله متغیر برای کنترل مسیر.</p>
        </div>
    </div>
</div>

<footer>
    <span>✨ طراحی لایه‌ای با سرعت‌های متفاوت - تم بنفش تیره ✨</span>
</footer>

<script>
    // ========== اسکریپت پارالاکس ==========
    // این اسکریپت مشابه اون کدی که فرستادید عمل می‌کنه
    // با این تفاوت که بهینه‌تر و مدرن‌تر نوشته شده
    
    document.addEventListener('DOMContentLoaded', function() {
        const layers = document.querySelectorAll('.parallax');
        
        function updateParallax() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            
            // محاسبه پیشرفت اسکرول (0 تا 1)
            const maxScroll = docHeight - windowHeight;
            const scrollProgress = Math.min(1, scrollY / maxScroll);
            
            layers.forEach(layer => {
                // سرعت از data-speed میاد (مقدار بالاتر = حرکت سریع‌تر)
                const speed = layer.getAttribute('data-speed') || 10;
                
                // حرکت لایه‌ها بر اساس سرعت
                // لایه‌های بالایی (با سرعت کمتر) دیرتر حرکت می‌کنن
                const yPos = -(scrollProgress * speed * 2); // ضریب ۲ برای شدت بیشتر
                
                // اعمال translate به جای background-position برای حرکت روان‌تر
                layer.style.transform = \`translateY(\${yPos}px)\`;
                
                // افکت اضافی: تغییر opacity برای لایه‌ها (اختیاری)
                if (speed > 50) {
                    layer.style.opacity = Math.min(1, 0.5 + scrollProgress);
                }
            });
            
            // تغییر رنگ آتش با پیشرفت اسکرول
            const flameLayer = document.getElementById('keyart-6');
            if (flameLayer) {
                const intensity = Math.min(1, scrollProgress * 1.5);
                flameLayer.style.filter = \`brightness(\${1 + intensity}) blur(\${intensity * 10}px)\`;
            }
        }
        
        // بهینه‌سازی با requestAnimationFrame
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // اجرای اولیه
        updateParallax();
        
        // ========== هایلایت کردن بخش‌ها بر اساس اسکرول ==========
        const sections = document.querySelectorAll('.section');
        const layerElements = {
            'sec-nose': 'keyart-1',
            'sec-avionics': 'keyart-2',
            'sec-lox': 'keyart-3',
            'sec-rp1': 'keyart-4',
            'sec-engine': 'keyart-5',
            'sec-fins': 'keyart-7'
        };
        
        function highlightLayer() {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY;
                const sectionBottom = sectionTop + rect.height;
                
                if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
                    const sectionId = section.id;
                    const layerId = layerElements[sectionId];
                    
                    if (layerId) {
                        // ریست کردن همه لایه‌ها
                        Object.values(layerElements).forEach(id => {
                            document.getElementById(id)?.style.removeProperty('filter');
                        });
                        
                        // هایلایت لایه مربوطه
                        const layer = document.getElementById(layerId);
                        if (layer) {
                            layer.style.filter = 'drop-shadow(0 0 30px #ffaa00) brightness(1.3)';
                            layer.style.transition = 'filter 0.5s';
                        }
                    }
                }
            });
        }
        
        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(highlightLayer);
        });
    });
<\/script>

<!-- اضافه کردن فونت وزیرمتن از گوگل -->
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;900&amp;display=swap" rel="stylesheet">


`,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:r,search:i}=new URL(a);return`${t}${r}${i}`},z=l.memo(({pageKey:a,system:t})=>e.jsx(b,{system:t},a),(a,t)=>a.pageKey===t.pageKey),j=({data:a})=>{const{system:t,resources:r,url:i,pageMeta:n}=a,d=P(i),p=l.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:r,breakpoints:v,onError:console.error}),[r]);return e.jsxs(f.Provider,{value:p,children:[e.jsx(y.Provider,{value:i,children:e.jsx(z,{pageKey:d,system:t})}),e.jsx(g,{url:i,pageMeta:n,siteName:c,imageLoader:s,assetBaseUrl:o}),e.jsx(m,{children:n.title})]})},L=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),S=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${x}`})}),k.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-6/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-6/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{A as configValuesSerialized};
