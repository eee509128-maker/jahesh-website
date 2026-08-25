import{j as e,r as l,a as n,i,R as m,b as u,P as h,c as f,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],w="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",E=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=[],y=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tubes Cursor - انیمیشن سه بعدی لوله</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: 'Arial', sans-serif;
        }
        #app {
            position: relative;
            width: 100vw;
            height: 100vh;
            background-color: #0a0a1a;
        }
        #canvas {
            display: block;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, #1a1a3a 0%, #0a0a1a 100%);
        }
        .hero {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            z-index: 10;
            pointer-events: none; /* اجازه کلیک به دکمه زیر را می‌دهد */
            text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
            animation: fadeIn 2s ease-out;
        }
        h1 {
            font-size: clamp(3rem, 15vw, 8rem);
            margin: 0;
            letter-spacing: 8px;
            font-weight: 900;
            background: linear-gradient(45deg, #fff, #aaf, #8af);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 30px rgba(100, 150, 255, 0.7);
            animation: float 4s infinite ease-in-out;
        }
        h2 {
            font-size: clamp(1.5rem, 5vw, 3rem);
            margin: 0.5rem 0 2rem 0;
            font-weight: 300;
            color: #ccf;
            text-transform: uppercase;
            letter-spacing: 12px;
            border-right: 3px solid #8af;
            padding-right: 10px;
            display: inline-block;
            animation: blinkCursor 3s infinite;
        }
        a {
            pointer-events: auto; /* فعال کردن کلیک روی لینک */
            display: inline-block;
            padding: 12px 32px;
            background: rgba(20, 30, 50, 0.7);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            text-decoration: none;
            font-size: 1.1rem;
            border-radius: 50px;
            letter-spacing: 2px;
            transition: all 0.3s ease;
            box-shadow: 0 0 20px rgba(0, 200, 255, 0.3);
            border-color: #8af;
            margin-top: 20px;
        }
        a:hover {
            background: #8af;
            color: #0a0a1a;
            box-shadow: 0 0 40px #8af;
            transform: scale(1.05);
            border-color: white;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        @keyframes blinkCursor {
            0%, 100% { border-color: #8af; }
            50% { border-color: transparent; }
        }
        /* اضافه کردن چند ذره ریز برای جلوه بیشتر */
        .dots {
            position: absolute;
            bottom: 20px;
            left: 0;
            width: 100%;
            text-align: center;
            color: rgba(255,255,255,0.3);
            font-size: 0.8rem;
            letter-spacing: 4px;
            z-index: 10;
        }
    </style>


    <div id="app">
        <canvas id="canvas"></canvas>
        <div class="hero">
            <h1>Tubes</h1>
            <h2>Cursor</h2>
            <a target="_blank" href="https://www.framer.com/@kevin-levron/">Framer Component</a>
        </div>
        <div class="dots">✦ ✦ ✦ TUBES CURSOR ✦ ✦ ✦</div>
    </div>

    <!-- کتابخانه سه بعدی -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://unpkg.com/three@0.126.0/build/three.module.js"
            }
        }
    <\/script>

    <script type="module">
        import * as THREE from 'three';
        import { OrbitControls } from 'https://unpkg.com/three@0.126.0/examples/jsm/controls/OrbitControls.js';

        // --- راه اندازی صحنه، دوربین، رندرر ---
        const scene = new THREE.Scene();
        scene.background = null; // شفاف تا گرادیان CSS دیده شود
        scene.fog = new THREE.FogExp2(0x0a0a1a, 0.002); // افکت مه
        
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 2, 12);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // بهینه برای عملکرد
        renderer.shadowMap.enabled = false; // غیرفعال برای سرعت

        // --- نورپردازی ---
        // نور محیطی ملایم
        const ambientLight = new THREE.AmbientLight(0x404060);
        scene.add(ambientLight);
        
        // نور نقطه‌ای رنگی
        const light1 = new THREE.PointLight(0x4466ff, 1, 20);
        light1.position.set(5, 5, 5);
        scene.add(light1);
        
        const light2 = new THREE.PointLight(0xff66aa, 0.8, 20);
        light2.position.set(-5, 3, 5);
        scene.add(light2);
        
        const light3 = new THREE.PointLight(0x66ffcc, 0.5, 25);
        light3.position.set(0, -2, 10);
        scene.add(light3);

        // نور جهت‌دار برای سایه‌های ساده
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight.position.set(1, 2, 1);
        scene.add(dirLight);

        // --- ایجاد لوله‌ها (Tubes) ---
        const tubeGroup = new THREE.Group();
        const numTubes = 45; // تعداد لوله‌ها
        const tubes = []; // ذخیره هر لوله و پارامترهای حرکت
        
        // رنگ‌های متنوع نئونی
        const colors = [
            0x4facfe, 0x00f2fe, 0xa18cd1, 0xfbc2eb, 0x43e97b, 0x38f9d7,
            0xfa709a, 0xfee140, 0x30cfd0, 0x330867, 0xb721ff, 0x21d4fd,
            0x08AEEA, 0x2AF598, 0xFF9A8B, 0xFF6A88, 0xD3CCE3, 0xE9E4F0
        ];

        // تابع برای ایجاد یک لوله با انحنای تصادفی
        function createRandomTube(baseColor, index) {
            // نقاط مسیر (یک منحنی تصادفی)
            const points = [];
            const numPoints = 8 + Math.floor(Math.random() * 8);
            
            // جهت‌گیری کلی تصادفی: حول محورهای مختلف
            const angleOffset = (index / numTubes) * Math.PI * 2;
            const radiusBase = 2.5;
            
            for (let i = 0; i < numPoints; i++) {
                const t = i / (numPoints - 1); // 0 تا 1
                // زاویه مارپیچی
                const angle = t * Math.PI * 3 + angleOffset;
                // ارتفاع از -2 تا 4
                const y = -2 + t * 6;
                
                // ایجاد حلقه‌های متفاوت با شعاع متغیر
                const r = radiusBase + Math.sin(angle * 1.5) * 1.2;
                
                // موقعیت x,z بر اساس دایره با نویز
                const x = Math.cos(angle) * r * (0.8 + 0.4 * Math.sin(t * Math.PI));
                const z = Math.sin(angle) * r * (0.7 + 0.3 * Math.cos(t * 1.8));
                
                points.push(new THREE.Vector3(x, y, z));
            }
            
            // ایجاد منحنی کتومول روم از نقاط
            const curve = new THREE.CatmullRomCurve3(points);
            
            // پارامترهای لوله
            const tubeGeo = new THREE.TubeGeometry(curve, 140, 0.12, 8, false);
            const material = new THREE.MeshStandardMaterial({
                color: baseColor,
                emissive: baseColor,
                emissiveIntensity: 0.5 + Math.random() * 0.5,
                roughness: 0.3,
                metalness: 0.1,
                transparent: true,
                opacity: 0.9,
                side: THREE.DoubleSide
            });
            
            const tube = new THREE.Mesh(tubeGeo, material);
            tube.castShadow = false;
            tube.receiveShadow = false;
            
            // ذخیره اطلاعات حرکت (چرخش و نوسان)
            return {
                mesh: tube,
                speedRot: 0.001 + Math.random() * 0.003,
                speedFloat: 0.002 + Math.random() * 0.004,
                offsetX: Math.random() * 100,
                offsetY: Math.random() * 100,
                offsetZ: Math.random() * 100,
                basePos: new THREE.Vector3(0, 0, 0) // موقعیت اصلی (لوله‌ها خودشان متحرک هستند)
            };
        }

        // ایجاد لوله‌ها و افزودن به گروه
        for (let i = 0; i < numTubes; i++) {
            const col = colors[i % colors.length];
            const tubeObj = createRandomTube(col, i);
            tubeGroup.add(tubeObj.mesh);
            tubes.push(tubeObj);
        }

        scene.add(tubeGroup);

        // اضافه کردن ذرات ریز (ستاره) برای عمق بیشتر
        const particlesGeo = new THREE.BufferGeometry();
        const particlesCount = 800;
        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i += 3) {
            posArray[i] = (Math.random() - 0.5) * 40;
            posArray[i+1] = (Math.random() - 0.5) * 20;
            posArray[i+2] = (Math.random() - 0.5) * 40 - 10; // پخش در عمق
        }
        particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particlesMat = new THREE.PointsMaterial({
            color: 0xaaccff,
            size: 0.08,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending
        });
        const particles = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particles);

        // --- کنترل موس ---
        let mouseX = 0;
        let mouseY = 0;
        
        // محدوده حرکت دوربین بر اساس موس
        window.addEventListener('mousemove', (event) => {
            // نرمالایز بین -1 و 1
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // همچنین حرکت لمسی برای موبایل
        window.addEventListener('touchmove', (event) => {
            if (event.touches.length) {
                mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
                mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
            }
        });

        // --- متغیرهای کمکی برای انیمیشن ---
        let clock = new THREE.Clock();

        // --- انیمیشن ---
        function animate() {
            requestAnimationFrame(animate);
            
            const delta = clock.getDelta();
            const elapsedTime = performance.now() / 1000; // ثانیه

            // حرکت دوربین با موس با افکت نرم
            // هدف: دوربین به آرامی به سمت موقعیت هدف بر اساس موس حرکت کند
            const targetX = mouseX * 3; // حداکثر جابجایی افقی
            const targetY = mouseY * 1.5; // حداکثر جابجایی عمودی
            const targetZ = 12 + mouseY * 1; // کمی جلو و عقب
            
            // استفاده از lerp برای حرکت نرم
            camera.position.x += (targetX - camera.position.x) * 0.02;
            camera.position.y += (targetY - camera.position.y) * 0.02;
            camera.position.z += (targetZ - camera.position.z) * 0.02;
            
            camera.lookAt(0, 1, 0); // نگاه به مرکز صحنه

            // چرخش گروه لوله‌ها به آرامی
            tubeGroup.rotation.y += 0.001;
            tubeGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;
            
            // حرکت نوسانی هر لوله به صورت جداگانه (اختیاری)
            tubes.forEach((tube, idx) => {
                // می‌توانیم لوله‌ها را کمی جابجا کنیم اما بهتر است روی محور خودشان
                // یا چرخش کوچک اضافه کنیم
                if (idx % 3 === 0) {
                    // فقط بعضی‌ها نوسان داشته باشند
                    tube.mesh.rotation.z += Math.sin(elapsedTime * tube.speedFloat * 10 + idx) * 0.002;
                }
            });

            // حرکت ذرات به آرامی
            particles.rotation.y += 0.0001;
            particles.rotation.x += 0.00005;

            renderer.render(scene, camera);
        }

        animate();

        // --- تنظیم مجدد اندازه با تغییر پنجره ---
        window.addEventListener('resize', onWindowResize, false);
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // --- شروع با یک تاخیر کوچک برای جلوه بهتر ---
        setTimeout(() => {
            document.querySelector('.hero').style.opacity = '1';
        }, 100);
    <\/script>

`,className:"w-html-embed"})}),T=a=>{const{origin:t,pathname:r,search:o}=new URL(a);return`${t}${r}${o}`},R=l.memo(({pageKey:a,system:t})=>e.jsx(y,{system:t},a),(a,t)=>a.pageKey===t.pageKey),P=({data:a})=>{const{system:t,resources:r,url:o,pageMeta:s}=a,c=T(o),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:n,resources:r,breakpoints:b,onError:console.error}),[r]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(u.Provider,{value:o,children:e.jsx(R,{pageKey:c,system:t})}),e.jsx(h,{url:o,pageMeta:s,siteName:d,imageLoader:i,assetBaseUrl:n}),e.jsx(f,{children:s.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),H=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${n}${w}`})}),E.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:H},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled36/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled36/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{A as configValuesSerialized};
