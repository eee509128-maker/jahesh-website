import{j as c,r as b,a as r,i as h,R as f,b as j,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as i,m,C as N,P as T,A as a,$ as E}from"../chunks/chunk-CJTZdOzc.js";import{U as u}from"../chunks/chunk-BTtE8iXS.js";import{n as l}from"../chunks/chunk-CRUfvgxf.js";import{n as p}from"../chunks/chunk-RvLaVuUh.js";import{g as e}from"../chunks/chunk-BKjYWtT8.js";import{n as P}from"../chunks/chunk-Bx5-62GJ.js";import{d as y}from"../chunks/chunk-ClMSjCia.js";import{d as S,i as o}from"../chunks/chunk-DWuKyx5h.js";import{O as L,x as R,M as _,R as A,$ as B}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const v="jahesh",I=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],C="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",M=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],O=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],H=n=>c.jsxs("body",{className:"w-element",children:[c.jsx("div",{className:"w-element cl99im cddbznk c3ie7yy c1dfajq9 c1dz2h89",children:c.jsx(u,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دستیار نوشتاری هوشمند</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Vazirmatn', sans-serif; }
        body { background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #2d1f3d 100%); min-height: 100vh; }
        .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
        .tool-btn.active { background: linear-gradient(135deg, #8b5cf6, #ec4899); box-shadow: 0 0 25px rgba(139,92,246,0.4); }
        .tone-btn.active { background: linear-gradient(135deg, #3b82f6, #6366f1); }
    </style>


    <div class="container mx-auto">
        <header class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-black mb-3">
                <span class="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">✍️ دستیار نوشتاری هوشمند</span>
            </h1>
            <p class="text-gray-400">بنویس، اصلاح کن، بهبود بده</p>
        </header>

        <div class="max-w-5xl mx-auto mb-6">
            <div class="glass rounded-2xl p-4 flex flex-wrap gap-2 justify-center">
                <button class="tool-btn glass px-4 py-3 rounded-xl font-medium active" data-tool="improve">✨ بهبود متن</button>
                <button class="tool-btn glass px-4 py-3 rounded-xl font-medium" data-tool="grammar">📝 اصلاح گرامری</button>
                <button class="tool-btn glass px-4 py-3 rounded-xl font-medium" data-tool="summarize">📄 خلاصه‌سازی</button>
                <button class="tool-btn glass px-4 py-3 rounded-xl font-medium" data-tool="expand">📖 گسترش متن</button>
                <button class="tool-btn glass px-4 py-3 rounded-xl font-medium" data-tool="rewrite">🔄 بازنویسی</button>
                <button class="tool-btn glass px-4 py-3 rounded-xl font-medium" data-tool="tone">🎭 تغییر لحن</button>
            </div>
        </div>

        <div id="toneSelector" class="max-w-5xl mx-auto mb-6 hidden">
            <div class="glass rounded-2xl p-4 flex flex-wrap gap-2 justify-center">
                <button class="tone-btn glass px-4 py-2 rounded-lg active" data-tone="formal">رسمی</button>
                <button class="tone-btn glass px-4 py-2 rounded-lg" data-tone="casual">غیررسمی</button>
                <button class="tone-btn glass px-4 py-2 rounded-lg" data-tone="friendly">دوستانه</button>
                <button class="tone-btn glass px-4 py-2 rounded-lg" data-tone="professional">حرفه‌ای</button>
                <button class="tone-btn glass px-4 py-2 rounded-lg" data-tone="humorous">شوخ</button>
            </div>
        </div>

        <div class="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
            <div class="glass rounded-3xl p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold">📝 متن اصلی</h2>
                    <span id="inputWordCount" class="text-sm text-gray-400">0 کلمه</span>
                </div>
                <textarea id="inputText" class="w-full h-64 bg-black/30 rounded-2xl p-4 border border-white/10 focus:border-violet-500 focus:outline-none resize-none" placeholder="متن خود را اینجا وارد کنید..."></textarea>
                <button id="processBtn" class="w-full mt-5 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all">⚡ پردازش متن</button>
            </div>

            <div class="glass rounded-3xl p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold">✅ نتیجه</h2>
                    <button id="copyResult" class="text-sm text-gray-400 hover:text-white">📋 کپی</button>
                </div>
                <div id="outputText" class="w-full h-64 bg-black/30 rounded-2xl p-4 border border-white/10 overflow-y-auto leading-8"><p class="text-gray-500">نتیجه پردازش اینجا نمایش داده می‌شود...</p></div>
                <div id="stats" class="mt-4 grid grid-cols-2 gap-4">
                    <div class="glass rounded-xl p-3 text-center">
                        <div id="charsReduced" class="text-lg font-bold text-violet-400">-</div>
                        <div class="text-xs text-gray-400">تغییر کاراکتر</div>
                    </div>
                    <div class="glass rounded-xl p-3 text-center">
                        <div id="processTime" class="text-lg font-bold text-pink-400">-</div>
                        <div class="text-xs text-gray-400">زمان پردازش</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        let currentTool = 'improve';
        let currentTone = 'formal';

        const prompts = {
            improve: 'این متن را بهبود بده، ویرایش کن و خواناتر کن بدون تغییر معنی:',
            grammar: 'اشتباهات گرامری و املایی این متن را اصلاح کن:',
            summarize: 'این متن را به صورت خلاصه و مفید بازنویسی کن:',
            expand: 'این متن را گسترش بده و جزئیات بیشتری اضافه کن:',
            rewrite: 'این متن را با کلمات متفاوت بازنویسی کن:',
            tone: 'این متن را با لحن {tone} بازنویسی کن:'
        };

        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentTool = btn.dataset.tool;
                document.getElementById('toneSelector').classList.toggle('hidden', currentTool !== 'tone');
            });
        });

        document.querySelectorAll('.tone-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tone-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentTone = btn.dataset.tone;
            });
        });

        document.getElementById('inputText').addEventListener('input', (e) => {
            const words = e.target.value.trim().split(/\\s+/).filter(w => w).length;
            document.getElementById('inputWordCount').textContent = words + ' کلمه';
        });

        document.getElementById('processBtn').addEventListener('click', async () => {
            const text = document.getElementById('inputText').value.trim();
            if (!text) { alert('لطفاً متنی وارد کنید'); return; }

            const btn = document.getElementById('processBtn');
            const output = document.getElementById('outputText');
            
            btn.innerHTML = '⏳ در حال پردازش...';
            btn.disabled = true;
            output.innerHTML = '<div class="flex items-center justify-center h-full"><div class="animate-spin w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full"></div></div>';

            const startTime = Date.now();
            let prompt = prompts[currentTool].replace('{tone}', currentTone);

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${API_KEY}\` },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [{ role: 'system', content: 'شما یک ویرایشگر حرفه‌ای فارسی هستید. فقط متن پردازش شده را برگردانید.' }, { role: 'user', content: prompt + '\\n\\n' + text }],
                        temperature: 0.5
                    })
                });

                const data = await response.json();
                const result = data.choices[0].message.content;

                output.innerHTML = \`<p class="leading-8">\${result.replace(/\\n/g, '<br>')}</p>\`;

                const charsReduced = text.length - result.length;
                document.getElementById('charsReduced').textContent = (charsReduced > 0 ? '-' : '+') + Math.abs(charsReduced);
                document.getElementById('processTime').textContent = ((Date.now() - startTime) / 1000).toFixed(1) + 's';

            } catch (error) {
                output.innerHTML = \`<p class="text-red-400">خطا: \${error.message}</p>\`;
            }

            btn.innerHTML = '⚡ پردازش متن';
            btn.disabled = false;
        });

        document.getElementById('copyResult').addEventListener('click', () => {
            const text = document.getElementById('outputText').innerText;
            navigator.clipboard.writeText(text);
            document.getElementById('copyResult').textContent = '✅ کپی شد!';
            setTimeout(() => { document.getElementById('copyResult').textContent = '📋 کپی'; }, 2000);
        });
    <\/script>


`,className:"w-html-embed"})}),c.jsx(l,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:c.jsxs(l,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[c.jsx(i,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(y,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(l,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:c.jsx(i,{children:c.jsx(m,{children:c.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:c.jsxs(T,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[c.jsx(a,{"data-ws-index":"0",className:"w-menu-item",children:c.jsx(e,{type:"button",href:"/jaheshkala",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(p,{className:"w-text",children:"فروشگاه"})})}),c.jsx(a,{"data-ws-index":"1",className:"w-menu-item",children:c.jsx(e,{href:"/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(a,{"data-ws-index":"2",className:"w-menu-item",children:c.jsx(E,{children:c.jsx(e,{type:"button",href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(p,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),c.jsx(a,{"data-ws-index":"3",className:"w-menu-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(a,{"data-ws-index":"4",className:"w-menu-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),c.jsxs(l,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[c.jsx(l,{className:"w-box",children:c.jsx(l,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:c.jsx(e,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),c.jsx(i,{children:c.jsx(m,{children:c.jsxs(L,{children:[c.jsx(R,{children:c.jsx(P,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:c.jsx(u,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(_,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:c.jsxs(A,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[c.jsxs(l,{className:"w-box cx6c9kw c1nd8hlk",children:[c.jsx(i,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(y,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(B,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:c.jsx(u,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),c.jsx(l,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:c.jsxs(S,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[c.jsx(o,{className:"w-list-item",children:c.jsx(e,{href:"/jaheshkala",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),c.jsx(o,{className:"w-list-item",children:c.jsx(e,{href:"/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(o,{className:"w-list-item",children:c.jsx(e,{href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),c.jsx(o,{className:"w-list-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(o,{className:"w-list-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),c.jsx(e,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),$=n=>{const{origin:t,pathname:d,search:s}=new URL(n);return`${t}${d}${s}`},F=b.memo(({pageKey:n,system:t})=>c.jsx(H,{system:t},n),(n,t)=>n.pageKey===t.pageKey),U=({data:n})=>{const{system:t,resources:d,url:s,pageMeta:x}=n,g=$(s),w=b.useMemo(()=>({imageLoader:h,assetBaseUrl:r,resources:d,breakpoints:I,onError:console.error}),[d]);return c.jsxs(f.Provider,{value:w,children:[c.jsx(j.Provider,{value:s,children:c.jsx(F,{pageKey:g,system:t})}),c.jsx(z,{url:s,pageMeta:x,siteName:v,imageLoader:h,assetBaseUrl:r}),c.jsx(k,{children:x.title})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),D=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:v};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),c.jsx("link",{rel:"icon",href:h({src:`${r}${C}`})}),M.map(t=>c.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),O.map(t=>c.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},K=Object.freeze(Object.defineProperty({__proto__:null,Head:D},Symbol.toStringTag,{value:"Module"})),sc={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-39/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-39/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:K}}};export{sc as configValuesSerialized};
