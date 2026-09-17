import{j as e,r as d,a as s,i as r,R as u,b as m,P as b,c as g,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const i="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],E=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شبیه‌ساز دعوای خیالی</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Vazirmatn', sans-serif; }
        body { background: linear-gradient(135deg, #2d1b1b 0%, #4a1a1a 50%, #1a0a0a 100%); min-height: 100vh; }
        .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        .shake { animation: shake 0.5s ease-in-out; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .pulse { animation: pulse 1s infinite; }
    </style>


    <div class="container mx-auto max-w-4xl">
        <header class="text-center mb-10">
            <div class="text-6xl mb-4">⚔️</div>
            <h1 class="text-4xl md:text-5xl font-black mb-3">
                <span class="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">شبیه‌ساز دعوای خیالی</span>
            </h1>
            <p class="text-gray-400">بذار دو تا چیز با هم بجنگن!</p>
        </header>

        <div class="glass rounded-3xl p-6 mb-6">
            <div class="grid md:grid-cols-3 gap-4 items-center mb-6">
                <div>
                    <label class="block text-sm text-red-300 mb-2">🟥 طرف اول:</label>
                    <input type="text" id="fighter1" class="w-full bg-black/40 rounded-xl p-4 border border-red-500/30 focus:border-red-500 focus:outline-none text-lg" placeholder="مثال: ناپلئون">
                </div>
                <div class="text-center text-4xl font-black text-red-500">VS</div>
                <div>
                    <label class="block text-sm text-blue-300 mb-2">🟦 طرف دوم:</label>
                    <input type="text" id="fighter2" class="w-full bg-black/40 rounded-xl p-4 border border-blue-500/30 focus:border-blue-500 focus:outline-none text-lg" placeholder="مثال: گاندالف">
                </div>
            </div>

            <div class="mb-6">
                <label class="block text-sm text-gray-400 mb-2">محل دعوا:</label>
                <div class="flex flex-wrap gap-2">
                    <button class="location-btn glass px-4 py-2 rounded-xl active bg-red-600/50" data-loc="street">🏟️ خیابون</button>
                    <button class="location-btn glass px-4 py-2 rounded-xl" data-loc="space">🚀 فضا</button>
                    <button class="location-btn glass px-4 py-2 rounded-xl" data-loc="underwater">🌊 زیر آب</button>
                    <button class="location-btn glass px-4 py-2 rounded-xl" data-loc="volcano">🌋 دهانه آتشفشان</button>
                    <button class="location-btn glass px-4 py-2 rounded-xl" data-loc="internet">💻 اینترنت</button>
                </div>
            </div>

            <div class="mb-6">
                <label class="block text-sm text-gray-400 mb-2">نوع دعوا:</label>
                <div class="flex gap-2">
                    <button class="type-btn glass px-4 py-2 rounded-xl active bg-orange-600/50" data-type="physical">👊 فیزیکی</button>
                    <button class="type-btn glass px-4 py-2 rounded-xl" data-type="verbal">🗣️ کلامی</button>
                    <button class="type-btn glass px-4 py-2 rounded-xl" data-type="rap">🎤 رپ بَتِل</button>
                    <button class="type-btn glass px-4 py-2 rounded-xl" data-type="meme">😂 میم</button>
                </div>
            </div>

            <button id="startFight" class="w-full py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 transition-all">
                💥 شروع دعوا!
            </button>
        </div>

        <div id="fightArena" class="hidden">
            <div class="glass rounded-3xl p-6 mb-6">
                <div class="flex justify-between items-center mb-4">
                    <div class="text-red-400 font-bold" id="f1Name">طرف اول</div>
                    <div class="text-2xl">⚔️</div>
                    <div class="text-blue-400 font-bold" id="f2Name">طرف دوم</div>
                </div>
                <div id="fightLog" class="space-y-3 max-h-96 overflow-y-auto"></div>
            </div>

            <div id="winnerPanel" class="hidden glass rounded-3xl p-6 text-center">
                <div class="text-6xl mb-4">🏆</div>
                <h2 class="text-2xl font-black mb-2">برنده:</h2>
                <div id="winnerName" class="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"></div>
                <p id="winnerReason" class="text-gray-400 mt-2"></p>
                <button id="rematch" class="mt-4 px-8 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition-all">🔄 دعوای مجدد</button>
            </div>
        </div>

        <div class="glass rounded-3xl p-6 mt-6">
            <h3 class="font-bold mb-4">🔥 دعواهای پیشنهادی:</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button class="preset-btn glass p-3 rounded-xl text-sm hover:bg-white/10 text-right" data-f1="ناپلئون" data-f2="گاندالف">ناپلئون VS گاندالف</button>
                <button class="preset-btn glass p-3 rounded-xl text-sm hover:bg-white/10 text-right" data-f1="آیفون" data-f2="آنترید">آیفون VS آنترید</button>
                <button class="preset-btn glass p-3 rounded-xl text-sm hover:bg-white/10 text-right" data-f1="سقراط" data-f2="تیک‌توکر">سقراط VS تیک‌توکر</button>
                <button class="preset-btn glass p-3 rounded-xl text-sm hover:bg-white/10 text-right" data-f1="پیتزا" data-f2="برگر">پیتزا VS برگر</button>
                <button class="preset-btn glass p-3 rounded-xl text-sm hover:bg-white/10 text-right" data-f1="گربه" data-f2="اینترنت">گربه VS اینترنت</button>
                <button class="preset-btn glass p-3 rounded-xl text-sm hover:bg-white/10 text-right" data-f1="دایی" data-f2="سرور دم خاله">دایی VS سرور دم خاله</button>
            </div>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        let currentLocation = 'street';
        let currentType = 'physical';

        document.querySelectorAll('.location-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.location-btn').forEach(b => b.classList.remove('active', 'bg-red-600/50'));
                btn.classList.add('active', 'bg-red-600/50');
                currentLocation = btn.dataset.loc;
            });
        });

        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active', 'bg-orange-600/50'));
                btn.classList.add('active', 'bg-orange-600/50');
                currentType = btn.dataset.type;
            });
        });

        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('fighter1').value = btn.dataset.f1;
                document.getElementById('fighter2').value = btn.dataset.f2;
            });
        });

        document.getElementById('startFight').addEventListener('click', startFight);
        document.getElementById('rematch')?.addEventListener('click', () => {
            document.getElementById('fightArena').classList.add('hidden');
            document.getElementById('winnerPanel').classList.add('hidden');
            document.getElementById('fightLog').innerHTML = '';
        });

        async function startFight() {
            const f1 = document.getElementById('fighter1').value.trim() || 'طرف اول';
            const f2 = document.getElementById('fighter2').value.trim() || 'طرف دوم';

            document.getElementById('f1Name').textContent = f1;
            document.getElementById('f2Name').textContent = f2;
            document.getElementById('fightArena').classList.remove('hidden');
            document.getElementById('winnerPanel').classList.add('hidden');
            document.getElementById('fightLog').innerHTML = '<div class="text-center pulse">⚔️ در حال آماده‌سازی دعوا...</div>';

            const locationDescriptions = {
                street: 'در یک خیابون شلوغ',
                space: 'در فضا، روی یک سیارک',
                underwater: 'در اعماق اقیانوس',
                volcano: 'روی لبه یک آتشفشان فعال',
                internet: 'در کامنت‌های اینستاگرام'
            };

            const typeDescriptions = {
                physical: 'دعوای فیزیکی و ضرب و شتم',
                verbal: 'دعوای کلامی و فحش',
                rap: 'مسابقه رپ بَتِل',
                meme: 'جنگ میم و شوخی'
            };

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${API_KEY}\` },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [{
                            role: 'system',
                            content: \`You simulate epic fictional battles. Return ONLY a JSON: {"rounds": [{"attacker": "نام حمله‌کننده", "action": "شرح حرکت", "damage": 1-10}], "winner": "نام برنده", "reason": "دلیل پیروزی"}. All text in Persian. Be creative and funny!\`
                        }, {
                            role: 'user',
                            content: \`Simulate a \${typeDescriptions[currentType]} between "\${f1}" and "\${f2}" \${locationDescriptions[currentLocation]}. Make it \${currentType === 'rap' ? 'with rap verses' : currentType === 'meme' ? 'with meme references' : 'epic'}. 5-7 rounds. In Persian only.\`
                        }],
                        temperature: 0.9
                    })
                });

                const data = await response.json();
                const result = JSON.parse(data.choices[0].message.content.match(/\\{[\\s\\S]*\\}/)[0]);

                animateFight(result, f1, f2);

            } catch (error) {
                document.getElementById('fightLog').innerHTML = \`<div class="text-red-400">خطا: \${error.message}</div>\`;
            }
        }

        function animateFight(result, f1, f2) {
            const log = document.getElementById('fightLog');
            log.innerHTML = '';
            
            let i = 0;
            const interval = setInterval(() => {
                if (i >= result.rounds.length) {
                    clearInterval(interval);
                    showWinner(result, f1, f2);
                    return;
                }

                const round = result.rounds[i];
                const isF1 = round.attacker === f1;
                const color = isF1 ? 'from-red-500/20 to-transparent' : 'from-blue-500/20 to-transparent';
                const borderColor = isF1 ? 'border-red-500/30' : 'border-blue-500/30';

                const div = document.createElement('div');
                div.className = \`bg-gradient-to-l \${color} rounded-xl p-4 border \${borderColor} shake\`;
                div.innerHTML = \`
                    <div class="flex items-center gap-2 mb-1">
                        <span class="text-xl">\${isF1 ? '🔴' : '🔵'}</span>
                        <span class="font-bold \${isF1 ? 'text-red-400' : 'text-blue-400'}">\${round.attacker}</span>
                        <span class="text-xs text-gray-500">Round \${i + 1}</span>
                    </div>
                    <p class="text-sm">\${round.action}</p>
                    <div class="mt-2 bg-black/30 rounded-full h-2">
                        <div class="h-full rounded-full \${isF1 ? 'bg-red-500' : 'bg-blue-500'}" style="width: \${round.damage * 10}%"></div>
                    </div>
                \`;
                log.appendChild(div);
                log.scrollTop = log.scrollHeight;
                i++;
            }, 1500);
        }

        function showWinner(result, f1, f2) {
            const isF1Winner = result.winner === f1;
            document.getElementById('winnerName').textContent = result.winner;
            document.getElementById('winnerReason').textContent = result.reason;
            document.getElementById('winnerPanel').classList.remove('hidden');
            document.getElementById('winnerPanel').classList.add('shake');
        }
    <\/script>


`,className:"w-html-embed"})})}),S=a=>{const{origin:t,pathname:o,search:n}=new URL(a);return`${t}${o}${n}`},k=d.memo(({pageKey:a,system:t})=>e.jsx(E,{system:t},a),(a,t)=>a.pageKey===t.pageKey),P=({data:a})=>{const{system:t,resources:o,url:n,pageMeta:l}=a,c=S(n),p=d.useMemo(()=>({imageLoader:r,assetBaseUrl:s,resources:o,breakpoints:f,onError:console.error}),[o]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:n,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(b,{url:n,pageMeta:l,siteName:i,imageLoader:r,assetBaseUrl:s}),e.jsx(g,{children:l.title})]})},L=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),I=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:i};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${s}${h}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:I},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-50/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-50/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{F as configValuesSerialized};
