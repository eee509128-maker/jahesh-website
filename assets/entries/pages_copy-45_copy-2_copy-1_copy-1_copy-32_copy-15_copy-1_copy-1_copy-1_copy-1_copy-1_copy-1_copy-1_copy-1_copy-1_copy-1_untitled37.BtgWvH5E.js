import{j as e,r as y,a as r,i as h,R as f,b as j,P as k,c as z,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as i,m,C as N,P,A as n,$ as E}from"../chunks/chunk-CJTZdOzc.js";import{U as u}from"../chunks/chunk-BTtE8iXS.js";import{n as a}from"../chunks/chunk-CRUfvgxf.js";import{n as b}from"../chunks/chunk-RvLaVuUh.js";import{g as c}from"../chunks/chunk-BKjYWtT8.js";import{n as S}from"../chunks/chunk-Bx5-62GJ.js";import{d as x}from"../chunks/chunk-ClMSjCia.js";import{d as $,i as o}from"../chunks/chunk-DWuKyx5h.js";import{O as I,x as L,M as C,R as _,$ as T}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const v="jahesh",A=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],B="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",R=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],O=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],M=t=>e.jsxs("body",{className:"w-element",children:[e.jsx("div",{className:"w-element cl99im cddbznk c1lm8azl c1dfajq9 c1dz2h89",children:e.jsx(u,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مولد برنامه غذایی هوشمند</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Vazirmatn', sans-serif; }
        body { background: linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%); min-height: 100vh; }
        .glass { background: rgba(255,255,255,0.08); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .meal-card { transition: all 0.3s; }
        .meal-card:hover { transform: translateY(-5px); }
    </style>


    <div class="container mx-auto max-w-5xl">
        <header class="text-center mb-10">
            <h1 class="text-4xl md:text-5xl font-black mb-3">
                <span class="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">🥗 مولد برنامه غذایی هوشمند</span>
            </h1>
            <p class="text-emerald-200">برنامه غذایی متناسب با نیاز شما</p>
        </header>

        <div id="setupPanel" class="glass rounded-3xl p-6 mb-6">
            <h2 class="text-xl font-bold mb-6">📊 مشخصات شما</h2>
            
            <div class="grid md:grid-cols-4 gap-4 mb-6">
                <div>
                    <label class="block text-sm text-emerald-200 mb-2">سن:</label>
                    <input type="number" id="age" class="w-full bg-black/30 rounded-xl p-3 border border-white/10 focus:border-emerald-400 focus:outline-none" placeholder="25">
                </div>
                <div>
                    <label class="block text-sm text-emerald-200 mb-2">وزن (کیلوگرم):</label>
                    <input type="number" id="weight" class="w-full bg-black/30 rounded-xl p-3 border border-white/10 focus:border-emerald-400 focus:outline-none" placeholder="70">
                </div>
                <div>
                    <label class="block text-sm text-emerald-200 mb-2">قد (سانتی‌متر):</label>
                    <input type="number" id="height" class="w-full bg-black/30 rounded-xl p-3 border border-white/10 focus:border-emerald-400 focus:outline-none" placeholder="175">
                </div>
                <div>
                    <label class="block text-sm text-emerald-200 mb-2">جنسیت:</label>
                    <select id="gender" class="w-full bg-black/30 rounded-xl p-3 border border-white/10 focus:border-emerald-400 focus:outline-none">
                        <option value="male">مرد</option>
                        <option value="female">زن</option>
                    </select>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label class="block text-sm text-emerald-200 mb-2">فعالیت روزانه:</label>
                    <select id="activityLevel" class="w-full bg-black/30 rounded-xl p-3 border border-white/10 focus:border-emerald-400 focus:outline-none">
                        <option value="sedentary">کم‌تحرک</option>
                        <option value="light">فعالیت سبک</option>
                        <option value="moderate">فعالیت متوسط</option>
                        <option value="active">فعال</option>
                        <option value="very_active">بسیار فعال</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm text-emerald-200 mb-2">هدف:</label>
                    <select id="goal" class="w-full bg-black/30 rounded-xl p-3 border border-white/10 focus:border-emerald-400 focus:outline-none">
                        <option value="lose">کاهش وزن</option>
                        <option value="maintain">حفظ وزن</option>
                        <option value="gain">افزایش وزن</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm text-emerald-200 mb-2">نوع رژیم:</label>
                    <select id="dietType" class="w-full bg-black/30 rounded-xl p-3 border border-white/10 focus:border-emerald-400 focus:outline-none">
                        <option value="normal">معمولی</option>
                        <option value="vegetarian">گیاهخواری</option>
                        <option value="keto">کتو</option>
                        <option value="lowcarb">کم‌کربوهیدرات</option>
                        <option value="highprotein">پروتئین بالا</option>
                    </select>
                </div>
            </div>

            <div class="mb-6">
                <label class="block text-sm text-emerald-200 mb-2">حساسیت یا محدودیت غذایی:</label>
                <div class="flex flex-wrap gap-2">
                    <label class="glass px-4 py-2 rounded-xl cursor-pointer hover:bg-white/10">
                        <input type="checkbox" class="allergy ml-2" value="gluten"> گلوتن
                    </label>
                    <label class="glass px-4 py-2 rounded-xl cursor-pointer hover:bg-white/10">
                        <input type="checkbox" class="allergy ml-2" value="lactose"> لاکتوز
                    </label>
                    <label class="glass px-4 py-2 rounded-xl cursor-pointer hover:bg-white/10">
                        <input type="checkbox" class="allergy ml-2" value="nuts"> آجیل
                    </label>
                    <label class="glass px-4 py-2 rounded-xl cursor-pointer hover:bg-white/10">
                        <input type="checkbox" class="allergy ml-2" value="seafood"> غذای دریایی
                    </label>
                    <label class="glass px-4 py-2 rounded-xl cursor-pointer hover:bg-white/10">
                        <input type="checkbox" class="allergy ml-2" value="eggs"> تخم‌مرغ
                    </label>
                </div>
            </div>

            <div class="mb-6">
                <label class="block text-sm text-emerald-200 mb-2">تعداد وعده در روز:</label>
                <div class="flex gap-2">
                    <button class="meal-count-btn glass px-6 py-3 rounded-xl" data-count="3">3 وعده</button>
                    <button class="meal-count-btn glass px-6 py-3 rounded-xl active bg-emerald-600" data-count="4">4 وعده</button>
                    <button class="meal-count-btn glass px-6 py-3 rounded-xl" data-count="5">5 وعده</button>
                    <button class="meal-count-btn glass px-6 py-3 rounded-xl" data-count="6">6 وعده</button>
                </div>
            </div>

            <button id="generatePlan" class="w-full py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition-all">🍽️ ساخت برنامه غذایی</button>
        </div>

        <div id="resultPanel" class="hidden">
            <div class="glass rounded-3xl p-6 mb-6">
                <div class="grid md:grid-cols-4 gap-4 text-center">
                    <div class="bg-black/20 rounded-2xl p-4">
                        <div id="dailyCalories" class="text-3xl font-black text-emerald-400">0</div>
                        <div class="text-sm text-emerald-200">کالری روزانه</div>
                    </div>
                    <div class="bg-black/20 rounded-2xl p-4">
                        <div id="proteinGrams" class="text-3xl font-black text-blue-400">0g</div>
                        <div class="text-sm text-emerald-200">پروتئین</div>
                    </div>
                    <div class="bg-black/20 rounded-2xl p-4">
                        <div id="carbsGrams" class="text-3xl font-black text-amber-400">0g</div>
                        <div class="text-sm text-emerald-200">کربوهیدرات</div>
                    </div>
                    <div class="bg-black/20 rounded-2xl p-4">
                        <div id="fatGrams" class="text-3xl font-black text-pink-400">0g</div>
                        <div class="text-sm text-emerald-200">چربی</div>
                    </div>
                </div>
            </div>

            <div id="mealsContainer" class="space-y-4"></div>

            <div class="glass rounded-3xl p-6 mt-6">
                <h3 class="font-bold mb-4">💡 نکات و توصیه‌ها:</h3>
                <div id="tips" class="leading-8 text-emerald-100"></div>
            </div>

            <button id="regeneratePlan" class="w-full mt-6 py-4 rounded-2xl font-bold text-lg glass hover:bg-white/10 transition-all">🔄 برنامه جدید</button>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        let mealCount = 4;

        document.querySelectorAll('.meal-count-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.meal-count-btn').forEach(b => b.classList.remove('active', 'bg-emerald-600'));
                btn.classList.add('active', 'bg-emerald-600');
                mealCount = parseInt(btn.dataset.count);
            });
        });

        document.getElementById('generatePlan').addEventListener('click', generateMealPlan);
        document.getElementById('regeneratePlan').addEventListener('click', generateMealPlan);

        async function generateMealPlan() {
            const age = document.getElementById('age').value || 25;
            const weight = document.getElementById('weight').value || 70;
            const height = document.getElementById('height').value || 175;
            const gender = document.getElementById('gender').value;
            const activityLevel = document.getElementById('activityLevel').value;
            const goal = document.getElementById('goal').value;
            const dietType = document.getElementById('dietType').value;
            const allergies = Array.from(document.querySelectorAll('.allergy:checked')).map(el => el.value);

            const btn = document.getElementById('generatePlan') || document.getElementById('regeneratePlan');
            btn.innerHTML = '⏳ در حال ساخت برنامه...';
            btn.disabled = true;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${API_KEY}\` },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [{
                            role: 'system',
                            content: \`You are a nutritionist. Create a personalized meal plan in Persian (Farsi). Return ONLY valid JSON: {"dailyCalories": number, "protein": number, "carbs": number, "fat": number, "meals": [{"name": "نام وعده", "time": "ساعت", "foods": [{"name": "نام غذا", "portion": "مقدار", "calories": number}]}], "tips": ["نکته1", "نکته2"]}\`
                        }, {
                            role: 'user',
                            content: \`Create a \${mealCount}-meal daily plan for a \${age} year old \${gender}, \${weight}kg, \${height}cm. Activity: \${activityLevel}. Goal: \${goal}. Diet: \${dietType}. Allergies: \${allergies.join(', ') || 'none'}. All text in Persian.\`
                        }],
                        temperature: 0.7
                    })
                });

                const data = await response.json();
                const result = JSON.parse(data.choices[0].message.content.match(/\\{[\\s\\S]*\\}/)[0]);

                displayResults(result);

            } catch (error) {
                alert('خطا در ساخت برنامه: ' + error.message);
            }

            btn.innerHTML = '🍽️ ساخت برنامه غذایی';
            btn.disabled = false;
        }

        function displayResults(result) {
            document.getElementById('setupPanel').classList.add('hidden');
            document.getElementById('resultPanel').classList.remove('hidden');

            document.getElementById('dailyCalories').textContent = result.dailyCalories.toLocaleString('fa-IR');
            document.getElementById('proteinGrams').textContent = result.protein + 'g';
            document.getElementById('carbsGrams').textContent = result.carbs + 'g';
            document.getElementById('fatGrams').textContent = result.fat + 'g';

            const mealEmojis = ['🌅', '☀️', '🌤️', '🍎', '🌙', '🥛'];
            const container = document.getElementById('mealsContainer');
            container.innerHTML = result.meals.map((meal, i) => \`
                <div class="meal-card glass rounded-3xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-3xl">\${mealEmojis[i]}</span>
                        <div>
                            <h3 class="font-bold text-lg">\${meal.name}</h3>
                            <span class="text-sm text-emerald-300">\${meal.time}</span>
                        </div>
                    </div>
                    <div class="space-y-3">
                        \${meal.foods.map(food => \`
                            <div class="flex justify-between items-center bg-black/20 rounded-xl p-3">
                                <div>
                                    <div class="font-medium">\${food.name}</div>
                                    <div class="text-sm text-emerald-300">\${food.portion}</div>
                                </div>
                                <div class="text-emerald-400 font-bold">\${food.calories} کالری</div>
                            </div>
                        \`).join('')}
                    </div>
                </div>
            \`).join('');

            document.getElementById('tips').innerHTML = result.tips.map(tip => \`<p class="mb-2">• \${tip}</p>\`).join('');
        }
    <\/script>


`,className:"w-html-embed"})}),e.jsx(a,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:e.jsxs(a,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[e.jsx(i,{children:e.jsx(m,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(x,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(a,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:e.jsx(i,{children:e.jsx(m,{children:e.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:e.jsxs(P,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[e.jsx(n,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(c,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(b,{className:"w-text",children:"فروشگاه"})})}),e.jsx(n,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(c,{href:"/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(n,{"data-ws-index":"2",className:"w-menu-item",children:e.jsx(E,{children:e.jsx(c,{type:"button",href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(b,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),e.jsx(n,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(n,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),e.jsxs(a,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[e.jsx(a,{className:"w-box",children:e.jsx(a,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:e.jsx(c,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),e.jsx(i,{children:e.jsx(m,{children:e.jsxs(I,{children:[e.jsx(L,{children:e.jsx(S,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:e.jsx(u,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx(C,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:e.jsxs(_,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[e.jsxs(a,{className:"w-box cx6c9kw c1nd8hlk",children:[e.jsx(i,{children:e.jsx(m,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(x,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(T,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:e.jsx(u,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),e.jsx(a,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:e.jsxs($,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(o,{className:"w-list-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),e.jsx(c,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),H=t=>{const{origin:l,pathname:d,search:s}=new URL(t);return`${l}${d}${s}`},F=y.memo(({pageKey:t,system:l})=>e.jsx(M,{system:l},t),(t,l)=>t.pageKey===l.pageKey),U=({data:t})=>{const{system:l,resources:d,url:s,pageMeta:p}=t,g=H(s),w=y.useMemo(()=>({imageLoader:h,assetBaseUrl:r,resources:d,breakpoints:A,onError:console.error}),[d]);return e.jsxs(f.Provider,{value:w,children:[e.jsx(j.Provider,{value:s,children:e.jsx(F,{pageKey:g,system:l})}),e.jsx(k,{url:s,pageMeta:p,siteName:v,imageLoader:h,assetBaseUrl:r}),e.jsx(z,{children:p.title})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),D=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:v};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:h({src:`${r}${B}`})}),R.map(l=>e.jsx("link",{rel:"preload",href:`${r}${l}`,as:"font",crossOrigin:"anonymous"},l)),O.map(l=>e.jsx("link",{rel:"preload",href:`${r}${l}`,as:"image"},l))]})},G=Object.freeze(Object.defineProperty({__proto__:null,Head:D},Symbol.toStringTag,{value:"Module"})),se={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-45/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-45/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:G}}};export{se as configValuesSerialized};
