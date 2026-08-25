import{j as e,r as l,a as s,i,R as m,b as h,P as u,c as x,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as g}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],P=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(g,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رویای نقطه‌ای - تعبیر + نقاشی جادویی</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');
        body { font-family: 'Vazirmatn', sans-serif; }
        .neon { text-shadow: 0 0 20px #a855f7, 0 0 40px #a855f7; }
        canvas { image-rendering: crisp-edges; border-radius: 24px; box-shadow: 0 0 60px rgba(168, 85, 247, 0.5); }
    </style>


    <div class="max-w-7xl mx-auto p-6">
        <div class="text-center mb-12 pt-10">
            <div class="text-8xl mb-4">🌌✨</div>
            <h1 class="text-6xl font-bold neon">رویای نقطه‌ای</h1>
            <p class="text-purple-400 text-2xl mt-3">تعبیر خواب + نقاشی سوررئال نقطه‌ای از رویات</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- ورودی -->
            <div class="bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
                <textarea id="dream" rows="8" class="w-full bg-black border border-purple-500/50 focus:border-purple-400 rounded-3xl px-8 py-7 text-xl focus:outline-none resize-none" placeholder="خوابم رو بنویس... مثلاً: دیدم دارم تو آسمون پرواز می‌کنم ولی بال‌هام از شیشه بودن و زیرم اقیانوس آتش بود..."></textarea>
                
                <button onclick="interpretAndDraw()" class="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 py-8 rounded-3xl text-3xl font-bold flex items-center justify-center gap-4 transition-all active:scale-95">
                    <i class="fas fa-wand-magic-sparkles"></i>
                    تعبیر کن و رویامو نقاشی کن
                </button>
            </div>

            <!-- نتیجه -->
            <div class="space-y-8">
                <!-- تعبیر متن -->
                <div id="interpretation" class="hidden bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 min-h-[300px]">
                    <h2 class="text-2xl font-bold mb-4 text-purple-400">تعبیر رویا 🌙</h2>
                    <div id="textResult" class="prose prose-invert text-lg leading-relaxed"></div>
                </div>

                <!-- تصویر نقطه‌ای -->
                <div id="imageContainer" class="hidden">
                    <h2 class="text-2xl font-bold mb-4 text-purple-400">نقاشی نقطه‌ای رویات ✨</h2>
                    <canvas id="dreamCanvas" width="800" height="520" class="bg-black mx-auto block"></canvas>
                    <div class="flex gap-4 mt-6">
                        <button onclick="regenerateImage()" class="flex-1 py-5 bg-zinc-800 hover:bg-zinc-700 rounded-3xl text-lg font-medium">نقاشی جدید بکش</button>
                        <button onclick="downloadImage()" class="flex-1 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-lg font-medium">دانلود تصویر</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
        let currentDream = '';
        let canvas = document.getElementById('dreamCanvas');
        let ctx = canvas.getContext('2d');
        let particles = [];

        class Particle {
            constructor(x, y, color, size) {
                this.x = x; this.y = y;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.color = color;
                this.size = size;
                this.life = 1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= 0.008;
                this.vx *= 0.985;
                this.vy *= 0.985;
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.life;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        async function interpretAndDraw() {
            currentDream = document.getElementById('dream').value.trim();
            if (!currentDream) return alert('خوابت رو بنویس!');

            document.getElementById('interpretation').classList.add('hidden');
            document.getElementById('imageContainer').classList.add('hidden');

            const prompt = \`تو یک تعبیر خواب عمیق و روانشناختی حرفه‌ای هستی. این خواب را به فارسی زیبا و دقیق تعبیر کن:
"\${currentDream}"

در آخر حتماً یه خط بنویس: "عناصر بصری: چشم‌های شناور، بال شیشه‌ای، گرداب آتشین، دست‌های معلق..." (حداقل ۴-۵ عنصر عجیب و مرتبط با خواب)\`;

            try {
                const res = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': \`Bearer \${API_KEY}\`
                    },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [{ role: "user", content: prompt }],
                        temperature: 0.9,
                        max_tokens: 900
                    })
                });
                const data = await res.json();
                const text = data.choices[0].message.content;

                document.getElementById('textResult').innerHTML = text.replace(/\\n/g, '<br><br>');
                document.getElementById('interpretation').classList.remove('hidden');

                // شروع نقاشی نقطه‌ای
                document.getElementById('imageContainer').classList.remove('hidden');
                generatePointillismArt(text);
            } catch (e) {
                alert('خطا: ' + e.message);
            }
        }

        function generatePointillismArt(interpretation) {
            particles = [];
            ctx.fillStyle = '#0a0a0a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // پس‌زمینه مه‌آلود
            for (let i = 0; i < 8000; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 1.8 + 0.6;
                const alpha = Math.random() * 0.3 + 0.05;
                ctx.fillStyle = \`rgba(168, 85, 247, \${alpha})\`;
                ctx.fillRect(x, y, size, size);
            }

            // تشخیص کلمات کلیدی برای رنگ و حرکت
            const dreamText = (currentDream + interpretation).toLowerCase();
            let hue = 270; // بنفش پیش‌فرض
            if (dreamText.includes('آتش') || dreamText.includes('سوز')) hue = 20;
            else if (dreamText.includes('آب') || dreamText.includes('اقیانوس')) hue = 200;
            else if (dreamText.includes('پرواز') || dreamText.includes('بال')) hue = 300;
            else if (dreamText.includes('چشم')) hue = 60;

            // تولید ذرات اصلی (نقطه‌ای)
            for (let i = 0; i < 12000; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 3.5 + 1;
                const color = \`hsl(\${hue + Math.random() * 60 - 30}, 90%, 70%)\`;
                const p = new Particle(x, y, color, size);
                if (Math.random() > 0.7) p.vy = -Math.random() * 2; // حس پرواز
                particles.push(p);
            }

            // اضافه کردن شکل‌های عجیب (چشم، دست، گرداب)
            drawSurrealShapes(hue);

            animate();
        }

        function drawSurrealShapes(hue) {
            // چشم‌های شناور
            for (let i = 0; i < 8; i++) {
                const cx = 150 + Math.random() * 500;
                const cy = 100 + Math.random() * 300;
                for (let j = 0; j < 120; j++) {
                    const a = Math.random() * Math.PI * 2;
                    const r = 25 + Math.random() * 12;
                    const px = cx + Math.cos(a) * r;
                    const py = cy + Math.sin(a) * r * 0.6;
                    particles.push(new Particle(px, py, \`hsl(\${hue}, 100%, 85%)\`, 2.5));
                }
            }

            // گرداب نقطه‌ای
            for (let i = 0; i < 600; i++) {
                const angle = i * 0.15;
                const radius = 40 + i * 0.8;
                const px = 550 + Math.cos(angle) * radius;
                const py = 280 + Math.sin(angle) * radius * 0.7;
                particles.push(new Particle(px, py, \`hsl(\${hue + 40}, 90%, 65%)\`, 1.8));
            }
        }

        function animate() {
            ctx.fillStyle = 'rgba(10,10,20,0.12)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.update();
                p.draw();
                if (p.life <= 0) particles.splice(i, 1);
            });

            // تولد ذرات جدید برای حس زنده بودن
            if (Math.random() > 0.6) {
                const p = new Particle(Math.random() * canvas.width, canvas.height * 0.8, '#c4b5fd', Math.random() * 2.5 + 1);
                p.vy = -Math.random() * 3 - 1;
                particles.push(p);
            }

            requestAnimationFrame(animate);
        }

        function regenerateImage() {
            if (currentDream) generatePointillismArt('');
        }

        function downloadImage() {
            const link = document.createElement('a');
            link.download = 'رویای-نقطه‌ای.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }

        // تنظیمات Tailwind
        tailwind.config = { content: [] };
    <\/script>

`,className:"w-html-embed"})})}),z=a=>{const{origin:t,pathname:r,search:n}=new URL(a);return`${t}${r}${n}`},j=l.memo(({pageKey:a,system:t})=>e.jsx(P,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:r,url:n,pageMeta:o}=a,d=z(n),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:s,resources:r,breakpoints:f,onError:console.error}),[r]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(h.Provider,{value:n,children:e.jsx(j,{pageKey:d,system:t})}),e.jsx(u,{url:n,pageMeta:o,siteName:c,imageLoader:i,assetBaseUrl:s}),e.jsx(x,{children:o.title})]})},M=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),k=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${s}${v}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:k},Symbol.toStringTag,{value:"Module"})),I={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-57/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-57/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{I as configValuesSerialized};
