import{j as e,r as b,a as o,i as y,R as f,b as j,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as i,m,C as N,P as E,A as a,$ as S}from"../chunks/chunk-CJTZdOzc.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";import{n as l}from"../chunks/chunk-CRUfvgxf.js";import{n as u}from"../chunks/chunk-RvLaVuUh.js";import{g as c}from"../chunks/chunk-BKjYWtT8.js";import{n as P}from"../chunks/chunk-Bx5-62GJ.js";import{y as p}from"../chunks/chunk-BO0ALJ3I.js";import{d as L,i as r}from"../chunks/chunk-DWuKyx5h.js";import{O as T,x as _,M as C,R as I,$}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const g="jahesh",B=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],A="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",O=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],H=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],M=n=>e.jsxs("body",{className:"w-element",children:[e.jsx("div",{className:"w-element cl99im cddbznk c1gwbagh c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مولد داستان هوشمند</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Vazirmatn', sans-serif; }
        body { background: linear-gradient(135deg, #0a0a0f 0%, #1a1025 50%, #0f1a2a 100%); min-height: 100vh; }
        .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
        .genre-btn.active { background: linear-gradient(135deg, #f59e0b, #ef4444); box-shadow: 0 0 25px rgba(245,158,11,0.4); }
        .length-btn.active { background: linear-gradient(135deg, #f59e0b, #ef4444); }
        .story-text { line-height: 2.2; }
    </style>


    <div class="container mx-auto">
        <header class="text-center mb-10">
            <h1 class="text-4xl md:text-5xl font-black mb-3">
                <span class="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">📚 مولد داستان هوشمند</span>
            </h1>
            <p class="text-gray-400">داستان‌های خلاقانه بسازید</p>
        </header>

        <div class="max-w-4xl mx-auto">
            <div class="glass rounded-3xl p-6 mb-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm text-gray-400 mb-3">🎭 ژانر داستان:</label>
                        <div class="flex flex-wrap gap-2" id="genreSelector">
                            <button class="genre-btn glass px-4 py-2 rounded-xl active" data-genre="fantasy">فانتزی</button>
                            <button class="genre-btn glass px-4 py-2 rounded-xl" data-genre="scifi">علمی تخیلی</button>
                            <button class="genre-btn glass px-4 py-2 rounded-xl" data-genre="romance">عاشقانه</button>
                            <button class="genre-btn glass px-4 py-2 rounded-xl" data-genre="horror">ترسناک</button>
                            <button class="genre-btn glass px-4 py-2 rounded-xl" data-genre="comedy">طنز</button>
                            <button class="genre-btn glass px-4 py-2 rounded-xl" data-genre="mystery">معمایی</button>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-400 mb-3">📏 طول داستان:</label>
                        <div class="flex gap-2" id="lengthSelector">
                            <button class="length-btn glass px-4 py-2 rounded-xl active" data-length="short">کوتاه</button>
                            <button class="length-btn glass px-4 py-2 rounded-xl" data-length="medium">متوسط</button>
                            <button class="length-btn glass px-4 py-2 rounded-xl" data-length="long">بلند</button>
                        </div>
                    </div>
                </div>

                <div class="mt-5">
                    <label class="block text-sm text-gray-400 mb-2">💡 ایده یا موضوع داستان:</label>
                    <textarea id="storyIdea" class="w-full h-28 bg-black/40 rounded-2xl p-4 border border-white/10 focus:border-amber-500 focus:outline-none resize-none" placeholder="مثال: یک ماه‌نورد که در ماه موجودات عجیبی کشف می‌کند..."></textarea>
                </div>

                <div class="grid md:grid-cols-3 gap-4 mt-5">
                    <div>
                        <label class="block text-sm text-gray-400 mb-2">👤 شخصیت اصلی:</label>
                        <input type="text" id="mainChar" class="w-full bg-black/40 rounded-xl p-3 border border-white/10 focus:border-amber-500 focus:outline-none" placeholder="نام یا ویژگی">
                    </div>
                    <div>
                        <label class="block text-sm text-gray-400 mb-2">🌍 مکان داستان:</label>
                        <input type="text" id="setting" class="w-full bg-black/40 rounded-xl p-3 border border-white/10 focus:border-amber-500 focus:outline-none" placeholder="مکان وقوع">
                    </div>
                    <div>
                        <label class="block text-sm text-gray-400 mb-2">⚡ عنصر ویژه:</label>
                        <input type="text" id="specialElement" class="w-full bg-black/40 rounded-xl p-3 border border-white/10 focus:border-amber-500 focus:outline-none" placeholder="سحر، تکنولوژی، ...">
                    </div>
                </div>

                <button id="generateBtn" class="w-full mt-6 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 transition-all">✨ ساخت داستان</button>
            </div>

            <div class="glass rounded-3xl p-6">
                <div class="flex justify-between items-center mb-5">
                    <h2 class="text-xl font-bold">📖 داستان شما</h2>
                    <div class="flex gap-4">
                        <button id="copyStory" class="text-sm text-gray-400 hover:text-white">📋 کپی</button>
                        <button id="regenerate" class="text-sm text-gray-400 hover:text-white">🔄 دوباره</button>
                    </div>
                </div>
                <div id="storyOutput" class="story-text text-lg leading-10 text-gray-200 min-h-64 bg-black/20 rounded-2xl p-6">
                    <p class="text-gray-500">داستان شما اینجا نمایش داده می‌شود...</p>
                </div>
                <div class="mt-5 flex items-center gap-4">
                    <div class="glass rounded-xl px-4 py-2">
                        <span class="text-amber-400 font-bold" id="wordCount">0</span>
                        <span class="text-gray-400 text-sm"> کلمه</span>
                    </div>
                    <div class="glass rounded-xl px-4 py-2">
                        <span class="text-orange-400 font-bold" id="paragraphCount">0</span>
                        <span class="text-gray-400 text-sm"> پاراگراف</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        let selectedGenre = 'fantasy';
        let selectedLength = 'short';

        const genreNames = {
            fantasy: 'فانتزی', scifi: 'علمی تخیلی', romance: 'عاشقانه',
            horror: 'ترسناک', comedy: 'طنز', mystery: 'معمایی'
        };

        const lengthGuide = {
            short: 'کوتاه (حدود 200 کلمه)',
            medium: 'متوسط (حدود 400 کلمه)',
            long: 'بلند (حدود 600 کلمه)'
        };

        document.querySelectorAll('.genre-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedGenre = btn.dataset.genre;
            });
        });

        document.querySelectorAll('.length-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.length-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedLength = btn.dataset.length;
            });
        });

        document.getElementById('generateBtn').addEventListener('click', generateStory);
        document.getElementById('regenerate').addEventListener('click', generateStory);

        async function generateStory() {
            const idea = document.getElementById('storyIdea').value.trim() || 'یک داستان جالب و هیجان‌انگیز';
            const mainChar = document.getElementById('mainChar').value.trim();
            const setting = document.getElementById('setting').value.trim();
            const specialElement = document.getElementById('specialElement').value.trim();

            const btn = document.getElementById('generateBtn');
            const output = document.getElementById('storyOutput');
            
            btn.innerHTML = '⏳ در حال نوشتن داستان...';
            btn.disabled = true;
            output.innerHTML = '<div class="flex items-center justify-center h-48"><div class="animate-spin w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full"></div></div>';

            const prompt = \`یک داستان \${genreNames[selectedGenre]} \${lengthGuide[selectedLength]} بنویس.
            
ایده اصلی: \${idea}
\${mainChar ? \`شخصیت اصلی: \${mainChar}\` : ''}
\${setting ? \`مکان: \${setting}\` : ''}
\${specialElement ? \`عنصر ویژه: \${specialElement}\` : ''}

داستان باید جذاب، خلاقانه و با پایان مناسب باشد. فقط داستان را بنویس، بدون توضیح اضافی.\`;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${API_KEY}\` },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [{ role: 'user', content: prompt }],
                        temperature: 0.9,
                        max_tokens: 1500
                    })
                });

                const data = await response.json();
                const story = data.choices[0].message.content;

                output.innerHTML = story.replace(/\\n\\n/g, '</p><p class="mt-4">').replace(/\\n/g, '<br>');
                output.innerHTML = '<p>' + output.innerHTML + '</p>';

                const words = story.split(/\\s+/).filter(w => w).length;
                const paragraphs = story.split(/\\n\\n+/).filter(p => p.trim()).length;
                document.getElementById('wordCount').textContent = words;
                document.getElementById('paragraphCount').textContent = paragraphs;

            } catch (error) {
                output.innerHTML = \`<p class="text-red-400">خطا در تولید داستان: \${error.message}</p>\`;
            }

            btn.innerHTML = '✨ ساخت داستان';
            btn.disabled = false;
        }

        document.getElementById('copyStory').addEventListener('click', () => {
            const text = document.getElementById('storyOutput').innerText;
            navigator.clipboard.writeText(text);
            document.getElementById('copyStory').textContent = '✅ کپی شد!';
            setTimeout(() => { document.getElementById('copyStory').textContent = '📋 کپی'; }, 2000);
        });
    <\/script>


`,className:"w-html-embed"})}),e.jsx(l,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:e.jsxs(l,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[e.jsx(i,{children:e.jsx(m,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(p,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(l,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:e.jsx(i,{children:e.jsx(m,{children:e.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:e.jsxs(E,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[e.jsx(a,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(c,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(u,{className:"w-text",children:"فروشگاه"})})}),e.jsx(a,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(c,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(a,{"data-ws-index":"2",className:"w-menu-item",children:e.jsx(S,{children:e.jsx(c,{type:"button",href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(u,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),e.jsx(a,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(a,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),e.jsxs(l,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[e.jsx(l,{className:"w-box",children:e.jsx(l,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:e.jsx(c,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),e.jsx(i,{children:e.jsx(m,{children:e.jsxs(T,{children:[e.jsx(_,{children:e.jsx(P,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:e.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx(C,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:e.jsxs(I,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[e.jsxs(l,{className:"w-box cx6c9kw c1nd8hlk",children:[e.jsx(i,{children:e.jsx(m,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(p,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx($,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:e.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),e.jsx(l,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:e.jsxs(L,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),e.jsx(c,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),R=n=>{const{origin:t,pathname:d,search:s}=new URL(n);return`${t}${d}${s}`},F=b.memo(({pageKey:n,system:t})=>e.jsx(M,{system:t},n),(n,t)=>n.pageKey===t.pageKey),U=({data:n})=>{const{system:t,resources:d,url:s,pageMeta:x}=n,v=R(s),w=b.useMemo(()=>({imageLoader:y,assetBaseUrl:o,resources:d,breakpoints:B,onError:console.error}),[d]);return e.jsxs(f.Provider,{value:w,children:[e.jsx(j.Provider,{value:s,children:e.jsx(F,{pageKey:v,system:t})}),e.jsx(z,{url:s,pageMeta:x,siteName:g,imageLoader:y,assetBaseUrl:o}),e.jsx(k,{children:x.title})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),D=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:g};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:y({src:`${o}${A}`})}),O.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),H.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},K=Object.freeze(Object.defineProperty({__proto__:null,Head:D},Symbol.toStringTag,{value:"Module"})),se={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-40/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-40/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:K}}};export{se as configValuesSerialized};
