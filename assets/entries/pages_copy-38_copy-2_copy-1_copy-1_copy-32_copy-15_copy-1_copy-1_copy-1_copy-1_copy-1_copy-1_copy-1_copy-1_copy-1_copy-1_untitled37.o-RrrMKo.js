import{j as e,r as l,a as n,i,R as u,b as m,P as g,c as v,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",h=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],S=s=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تحلیل‌گر احساسات</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
    <style>
        * { font-family: 'Vazirmatn', sans-serif; }
        body { background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #2d1b4e 100%); min-height: 100vh; }
        .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
        .sentiment-positive { background: linear-gradient(135deg, #10b981, #34d399); box-shadow: 0 0 40px rgba(16,185,129,0.3); }
        .sentiment-negative { background: linear-gradient(135deg, #ef4444, #f87171); box-shadow: 0 0 40px rgba(239,68,68,0.3); }
        .sentiment-neutral { background: linear-gradient(135deg, #6366f1, #818cf8); box-shadow: 0 0 40px rgba(99,102,241,0.3); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fadeIn 0.5s ease forwards; }
    </style>


    <div class="container mx-auto">
        <header class="text-center mb-10">
            <h1 class="text-4xl md:text-5xl font-black mb-3">
                <span class="bg-gradient-to-r from-emerald-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">😊 تحلیل‌گر احساسات</span>
            </h1>
            <p class="text-gray-400">احساسات پنهان در متن را کشف کنید</p>
        </header>

        <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div class="glass rounded-3xl p-6">
                <h2 class="text-xl font-bold mb-5">📝 متن ورودی</h2>
                <textarea id="textInput" class="w-full h-40 bg-black/40 rounded-2xl p-4 border border-white/10 focus:border-purple-500 focus:outline-none resize-none" placeholder="متن خود را اینجا وارد کنید..."></textarea>
                
                <button id="analyzeBtn" class="w-full mt-5 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all">🔍 تحلیل احساسات</button>

                <div class="mt-5">
                    <p class="text-sm text-gray-400 mb-2">نمونه‌های سریع:</p>
                    <div class="flex flex-wrap gap-2">
                        <button class="example-btn glass px-3 py-1 rounded-full text-sm hover:bg-white/10" data-text="محصول فوق‌العاده‌ای بود! کاملاً راضی هستم و به همه توصیه می‌کنم. کیفیت عالی!">مثبت</button>
                        <button class="example-btn glass px-3 py-1 rounded-full text-sm hover:bg-white/10" data-text="کیفیت افتضاحی بود. پولم رو پس می‌خوام! اصلاً راضی نیستم.">منفی</button>
                        <button class="example-btn glass px-3 py-1 rounded-full text-sm hover:bg-white/10" data-text="محصول معمولی بود. نه خیلی خوب نه خیلی بد. قیمتش مناسبه.">خنثی</button>
                    </div>
                </div>
            </div>

            <div class="glass rounded-3xl p-6">
                <h2 class="text-xl font-bold mb-5">📊 نتایج تحلیل</h2>
                
                <div id="mainResult" class="text-center py-8">
                    <div class="text-6xl mb-4">🤔</div>
                    <p class="text-gray-400">منتظر تحلیل...</p>
                </div>

                <div id="scoreBars" class="space-y-4 mt-5 hidden">
                    <div>
                        <div class="flex justify-between mb-1 text-sm"><span>مثبت</span><span id="positiveScore">0%</span></div>
                        <div class="h-3 bg-black/40 rounded-full overflow-hidden"><div id="positiveBar" class="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-1000" style="width: 0%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1 text-sm"><span>منفی</span><span id="negativeScore">0%</span></div>
                        <div class="h-3 bg-black/40 rounded-full overflow-hidden"><div id="negativeBar" class="h-full bg-gradient-to-r from-red-500 to-pink-400 rounded-full transition-all duration-1000" style="width: 0%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1 text-sm"><span>خنثی</span><span id="neutralScore">0%</span></div>
                        <div class="h-3 bg-black/40 rounded-full overflow-hidden"><div id="neutralBar" class="h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full transition-all duration-1000" style="width: 0%"></div></div>
                    </div>
                </div>

                <div id="emotionsSection" class="mt-6 hidden">
                    <h3 class="font-bold mb-3 text-sm">احساسات شناسایی شده:</h3>
                    <div id="emotionsList" class="flex flex-wrap gap-2"></div>
                </div>
            </div>
        </div>

        <div class="max-w-5xl mx-auto mt-6 grid md:grid-cols-2 gap-6">
            <div class="glass rounded-3xl p-6">
                <h2 class="text-lg font-bold mb-4">📈 نمودار احساسات</h2>
                <canvas id="sentimentChart"></canvas>
            </div>
            <div class="glass rounded-3xl p-6">
                <h2 class="text-lg font-bold mb-4">🔑 کلمات کلیدی</h2>
                <div id="keywordsList" class="flex flex-wrap gap-3"><span class="text-gray-500 text-sm">بعد از تحلیل نمایش داده می‌شود</span></div>
            </div>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        let chart = new Chart(document.getElementById('sentimentChart'), {
            type: 'doughnut',
            data: {
                labels: ['مثبت', 'منفی', 'خنثی'],
                datasets: [{ data: [33, 33, 34], backgroundColor: ['rgba(16,185,129,0.8)', 'rgba(239,68,68,0.8)', 'rgba(99,102,241,0.8)'], borderWidth: 0 }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: '#fff', font: { family: 'Vazirmatn' } } } } }
        });

        document.querySelectorAll('.example-btn').forEach(btn => {
            btn.addEventListener('click', () => { document.getElementById('textInput').value = btn.dataset.text; });
        });

        document.getElementById('analyzeBtn').addEventListener('click', async () => {
            const text = document.getElementById('textInput').value.trim();
            if (!text) { alert('لطفاً متنی وارد کنید'); return; }

            const btn = document.getElementById('analyzeBtn');
            btn.innerHTML = '⏳ در حال تحلیل...';
            btn.disabled = true;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${API_KEY}\` },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [{
                            role: 'system',
                            content: \`شما یک تحلیلگر احساسات هستید. متن را تحلیل کنید و فقط یک JSON معتبر برگردانید:
                            {"sentiment": "positive یا negative یا neutral", "scores": {"positive": عدد 0-100, "negative": عدد 0-100, "neutral": عدد 0-100}, "emotions": ["احساس1", "احساس2"], "keywords": ["کلمه1", "کلمه2"], "confidence": عدد 0-100}\`
                        }, { role: 'user', content: text }],
                        temperature: 0.2
                    })
                });

                const data = await response.json();
                const result = JSON.parse(data.choices[0].message.content.match(/\\{[\\s\\S]*\\}/)[0]);
                displayResults(result);

            } catch (error) {
                console.error(error);
                alert('خطا در تحلیل. لطفاً دوباره تلاش کنید.');
            }

            btn.innerHTML = '🔍 تحلیل احساسات';
            btn.disabled = false;
        });

        function displayResults(result) {
            const emojis = { positive: '😊', negative: '😞', neutral: '😐' };
            const labels = { positive: 'مثبت', negative: 'منفی', neutral: 'خنثی' };
            const classes = { positive: 'sentiment-positive', negative: 'sentiment-negative', neutral: 'sentiment-neutral' };

            document.getElementById('mainResult').innerHTML = \`
                <div class="animate-in">
                    <div class="text-7xl mb-4">\${emojis[result.sentiment]}</div>
                    <div class="inline-block px-6 py-2 rounded-full \${classes[result.sentiment]} text-xl font-bold">احساس \${labels[result.sentiment]}</div>
                    <p class="mt-4 text-gray-400">اطمینان: \${result.confidence}%</p>
                </div>\`;

            document.getElementById('scoreBars').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('positiveBar').style.width = result.scores.positive + '%';
                document.getElementById('negativeBar').style.width = result.scores.negative + '%';
                document.getElementById('neutralBar').style.width = result.scores.neutral + '%';
                document.getElementById('positiveScore').textContent = result.scores.positive + '%';
                document.getElementById('negativeScore').textContent = result.scores.negative + '%';
                document.getElementById('neutralScore').textContent = result.scores.neutral + '%';
            }, 100);

            chart.data.datasets[0].data = [result.scores.positive, result.scores.negative, result.scores.neutral];
            chart.update();

            document.getElementById('emotionsSection').classList.remove('hidden');
            document.getElementById('emotionsList').innerHTML = result.emotions.map(e => \`<span class="glass px-3 py-1 rounded-full text-sm">\${e}</span>\`).join('');

            document.getElementById('keywordsList').innerHTML = result.keywords.map(k => \`<span class="bg-gradient-to-r from-purple-600/30 to-pink-600/30 px-4 py-2 rounded-full text-sm">\${k}</span>\`).join('');
        }
    <\/script>


`,className:"w-html-embed"})})}),j=s=>{const{origin:t,pathname:o,search:a}=new URL(s);return`${t}${o}${a}`},k=l.memo(({pageKey:s,system:t})=>e.jsx(S,{system:t},s),(s,t)=>s.pageKey===t.pageKey),B=({data:s})=>{const{system:t,resources:o,url:a,pageMeta:r}=s,c=j(a),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:n,resources:o,breakpoints:b,onError:console.error}),[o]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:a,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(g,{url:a,pageMeta:r,siteName:d,imageLoader:i,assetBaseUrl:n}),e.jsx(v,{children:r.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),P=({})=>{const s={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${n}${f}`})}),h.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),L={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-38/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-38/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{L as configValuesSerialized};
