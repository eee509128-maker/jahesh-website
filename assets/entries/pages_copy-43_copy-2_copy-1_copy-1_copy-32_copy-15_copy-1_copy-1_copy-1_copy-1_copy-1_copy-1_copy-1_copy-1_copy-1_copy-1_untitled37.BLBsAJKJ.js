import{j as e,r as d,a as o,i as l,R as p,b as m,P as v,c as b,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const r="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",h=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],k=s=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شبیه‌ساز مصاحبه کاری</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Vazirmatn', sans-serif; }
        body { background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%); min-height: 100vh; }
        .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
        .pulse-ring { animation: pulse-ring 2s infinite; }
        @keyframes pulse-ring { 0% { transform: scale(0.95); opacity: 1; } 100% { transform: scale(1.1); opacity: 0; } }
        .score-excellent { background: linear-gradient(135deg, #10b981, #34d399); }
        .score-good { background: linear-gradient(135deg, #3b82f6, #60a5fa); }
        .score-average { background: linear-gradient(135deg, #f59e0b, #fbbf24); }
        .score-poor { background: linear-gradient(135deg, #ef4444, #f87171); }
    </style>


    <div class="container mx-auto max-w-4xl">
        <header class="text-center mb-10">
            <h1 class="text-4xl md:text-5xl font-black mb-3">
                <span class="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">💼 شبیه‌ساز مصاحبه کاری</span>
            </h1>
            <p class="text-gray-400">قبل از مصاحبه واقعی، تمرین کنید!</p>
        </header>

        <!-- تنظیمات اولیه -->
        <div id="setupPanel" class="glass rounded-3xl p-6 mb-6">
            <h2 class="text-xl font-bold mb-5">⚙️ تنظیمات مصاحبه</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm text-gray-400 mb-2">شغل مورد نظر:</label>
                    <input type="text" id="jobTitle" class="w-full bg-black/40 rounded-xl p-3 border border-white/10 focus:border-emerald-500 focus:outline-none" placeholder="مثال: برنامه‌نویس ارشد">
                </div>
                <div>
                    <label class="block text-sm text-gray-400 mb-2">سطح تجربه:</label>
                    <select id="experienceLevel" class="w-full bg-black/40 rounded-xl p-3 border border-white/10 focus:border-emerald-500 focus:outline-none">
                        <option value="junior">تازه‌کار (Junior)</option>
                        <option value="mid">میان‌رده (Mid-level)</option>
                        <option value="senior">ارشد (Senior)</option>
                        <option value="lead">سرپرست (Lead)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm text-gray-400 mb-2">نوع مصاحبه:</label>
                    <select id="interviewType" class="w-full bg-black/40 rounded-xl p-3 border border-white/10 focus:border-emerald-500 focus:outline-none">
                        <option value="technical">فنی (Technical)</option>
                        <option value="behavioral">رفتاری (Behavioral)</option>
                        <option value="mixed">ترکیبی</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm text-gray-400 mb-2">تعداد سوالات:</label>
                    <select id="questionCount" class="w-full bg-black/40 rounded-xl p-3 border border-white/10 focus:border-emerald-500 focus:outline-none">
                        <option value="3">3 سوال</option>
                        <option value="5" selected="">5 سوال</option>
                        <option value="7">7 سوال</option>
                    </select>
                </div>
            </div>
            <div class="mt-6">
                <label class="block text-sm text-gray-400 mb-2">مهارت‌های کلیدی (اختیاری):</label>
                <input type="text" id="keySkills" class="w-full bg-black/40 rounded-xl p-3 border border-white/10 focus:border-emerald-500 focus:outline-none" placeholder="مثال: Python, React, SQL">
            </div>
            <button id="startInterview" class="w-full mt-6 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 transition-all">🎯 شروع مصاحبه</button>
        </div>

        <!-- پنل مصاحبه -->
        <div id="interviewPanel" class="hidden">
            <!-- وضعیت -->
            <div class="glass rounded-2xl p-4 mb-6 flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <div class="relative">
                        <div class="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl">🤖</div>
                        <div class="absolute inset-0 rounded-full border-2 border-emerald-500 pulse-ring"></div>
                    </div>
                    <div>
                        <div class="font-bold">مصاحبه‌کننده هوشمند</div>
                        <div class="text-sm text-gray-400" id="interviewStatus">در حال پرسش...</div>
                    </div>
                </div>
                <div class="text-left">
                    <div class="text-2xl font-bold text-emerald-400" id="questionCounter">1/5</div>
                    <div class="text-xs text-gray-400">سوال</div>
                </div>
            </div>

            <!-- سوال -->
            <div class="glass rounded-3xl p-6 mb-6">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">❓</div>
                    <div>
                        <div class="text-sm text-emerald-400 mb-2">سوال مصاحبه:</div>
                        <p id="currentQuestion" class="text-lg leading-8">سوال اینجا نمایش داده می‌شود...</p>
                    </div>
                </div>
            </div>

            <!-- پاسخ -->
            <div class="glass rounded-3xl p-6 mb-6">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">👤</div>
                    <div class="flex-1">
                        <div class="text-sm text-blue-400 mb-2">پاسخ شما:</div>
                        <textarea id="userAnswer" class="w-full h-32 bg-black/40 rounded-xl p-4 border border-white/10 focus:border-blue-500 focus:outline-none resize-none" placeholder="پاسخ خود را بنویسید..."></textarea>
                    </div>
                </div>
                <div class="flex gap-3 mt-4">
                    <button id="submitAnswer" class="flex-1 py-3 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all">✅ ثبت پاسخ</button>
                    <button id="skipQuestion" class="px-6 py-3 rounded-xl glass hover:bg-white/5 transition-all">⏭️ رد شدن</button>
                </div>
            </div>

            <!-- بازخورد آنی -->
            <div id="feedbackPanel" class="hidden glass rounded-3xl p-6 mb-6">
                <h3 class="font-bold mb-4">📊 بازخورد این پاسخ:</h3>
                <div id="feedbackContent" class="space-y-4"></div>
            </div>
        </div>

        <!-- نتایج نهایی -->
        <div id="resultsPanel" class="hidden">
            <div class="glass rounded-3xl p-6 mb-6 text-center">
                <div class="text-6xl mb-4">🎉</div>
                <h2 class="text-2xl font-bold mb-2">مصاحبه تمام شد!</h2>
                <p class="text-gray-400">گزارش کامل عملکرد شما</p>
            </div>

            <div class="grid md:grid-cols-3 gap-4 mb-6">
                <div class="glass rounded-2xl p-5 text-center">
                    <div id="overallScore" class="text-4xl font-black text-emerald-400">0</div>
                    <div class="text-sm text-gray-400">امتیاز کل</div>
                </div>
                <div class="glass rounded-2xl p-5 text-center">
                    <div id="answeredCount" class="text-4xl font-black text-blue-400">0</div>
                    <div class="text-sm text-gray-400">پاسخ داده شده</div>
                </div>
                <div class="glass rounded-2xl p-5 text-center">
                    <div id="avgScore" class="text-4xl font-black text-purple-400">0</div>
                    <div class="text-sm text-gray-400">میانگین امتیاز</div>
                </div>
            </div>

            <div class="glass rounded-3xl p-6 mb-6">
                <h3 class="font-bold mb-4">📈 تحلیل عملکرد:</h3>
                <div id="performanceAnalysis" class="space-y-3"></div>
            </div>

            <div class="glass rounded-3xl p-6 mb-6">
                <h3 class="font-bold mb-4">💡 پیشنهادات بهبود:</h3>
                <div id="improvementTips" class="leading-8 text-gray-300"></div>
            </div>

            <div class="glass rounded-3xl p-6">
                <h3 class="font-bold mb-4">📝 پاسخ‌های بهتر:</h3>
                <div id="betterAnswers" class="space-y-4"></div>
            </div>

            <button id="restartInterview" class="w-full mt-6 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 transition-all">🔄 مصاحبه جدید</button>
        </div>
    </div>

    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

        let questions = [];
        let currentQuestionIndex = 0;
        let answers = [];
        let scores = [];

        document.getElementById('startInterview').addEventListener('click', startInterview);
        document.getElementById('submitAnswer').addEventListener('click', submitAnswer);
        document.getElementById('skipQuestion').addEventListener('click', skipQuestion);
        document.getElementById('restartInterview').addEventListener('click', () => location.reload());

        async function startInterview() {
            const jobTitle = document.getElementById('jobTitle').value.trim() || 'برنامه‌نویس';
            const experienceLevel = document.getElementById('experienceLevel').value;
            const interviewType = document.getElementById('interviewType').value;
            const questionCount = parseInt(document.getElementById('questionCount').value);
            const keySkills = document.getElementById('keySkills').value.trim();

            const btn = document.getElementById('startInterview');
            btn.innerHTML = '⏳ در حال آماده‌سازی...';
            btn.disabled = true;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${API_KEY}\` },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [{
                            role: 'system',
                            content: \`You are an expert interviewer. Generate interview questions in Persian (Farsi) only. Return ONLY a JSON array of questions.\`
                        }, {
                            role: 'user',
                            content: \`Generate \${questionCount} \${interviewType} interview questions for a \${experienceLevel} \${jobTitle} position. \${keySkills ? \`Focus on these skills: \${keySkills}.\` : ''} Return only a JSON array of question strings in Persian.\`
                        }],
                        temperature: 0.7
                    })
                });

                const data = await response.json();
                const content = data.choices[0].message.content;
                questions = JSON.parse(content.match(/\\[[\\s\\S]*\\]/)[0]);

                document.getElementById('setupPanel').classList.add('hidden');
                document.getElementById('interviewPanel').classList.remove('hidden');
                showQuestion();

            } catch (error) {
                alert('خطا در شروع مصاحبه: ' + error.message);
                btn.innerHTML = '🎯 شروع مصاحبه';
                btn.disabled = false;
            }
        }

        function showQuestion() {
            document.getElementById('questionCounter').textContent = \`\${currentQuestionIndex + 1}/\${questions.length}\`;
            document.getElementById('currentQuestion').textContent = questions[currentQuestionIndex];
            document.getElementById('userAnswer').value = '';
            document.getElementById('feedbackPanel').classList.add('hidden');
            document.getElementById('interviewStatus').textContent = 'منتظر پاسخ شما...';
        }

        async function submitAnswer() {
            const answer = document.getElementById('userAnswer').value.trim();
            if (!answer) { alert('لطفاً پاسخ خود را وارد کنید'); return; }

            const btn = document.getElementById('submitAnswer');
            btn.innerHTML = '⏳ در حال بررسی...';
            btn.disabled = true;

            const jobTitle = document.getElementById('jobTitle').value || 'برنامه‌نویس';

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${API_KEY}\` },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [{
                            role: 'system',
                            content: \`You are an interview coach. Analyze the answer and return ONLY a valid JSON: {"score": 0-100, "strengths": ["نکته قوت1"], "weaknesses": ["نکته ضعف1"], "suggestions": "پیشنهاد بهبود", "betterAnswer": "پاسخ بهتر"}. All text in Persian.\`
                        }, {
                            role: 'user',
                            content: \`Question: \${questions[currentQuestionIndex]}\\n\\nAnswer: \${answer}\\n\\nJob: \${jobTitle}\`
                        }],
                        temperature: 0.3
                    })
                });

                const data = await response.json();
                const feedback = JSON.parse(data.choices[0].message.content.match(/\\{[\\s\\S]*\\}/)[0]);

                answers.push({ question: questions[currentQuestionIndex], answer, feedback });
                scores.push(feedback.score);

                displayFeedback(feedback);
                nextQuestion();

            } catch (error) {
                alert('خطا در تحلیل پاسخ');
            }

            btn.innerHTML = '✅ ثبت پاسخ';
            btn.disabled = false;
        }

        function displayFeedback(feedback) {
            const panel = document.getElementById('feedbackPanel');
            const scoreClass = feedback.score >= 80 ? 'score-excellent' : feedback.score >= 60 ? 'score-good' : feedback.score >= 40 ? 'score-average' : 'score-poor';

            document.getElementById('feedbackContent').innerHTML = \`
                <div class="flex items-center gap-4">
                    <div class="\${scoreClass} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black">\${feedback.score}</div>
                    <div>
                        <div class="font-bold">\${feedback.score >= 80 ? 'عالی!' : feedback.score >= 60 ? 'خوب' : feedback.score >= 40 ? 'متوسط' : 'نیاز به بهبود'}</div>
                        <div class="text-sm text-gray-400">از 100 امتیاز</div>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div class="bg-emerald-500/10 rounded-xl p-3">
                        <div class="text-emerald-400 font-bold mb-2">✅ نقاط قوت:</div>
                        <ul class="text-sm space-y-1">\${feedback.strengths.map(s => \`<li>• \${s}</li>\`).join('')}</ul>
                    </div>
                    <div class="bg-red-500/10 rounded-xl p-3">
                        <div class="text-red-400 font-bold mb-2">⚠️ نقاط ضعف:</div>
                        <ul class="text-sm space-y-1">\${feedback.weaknesses.map(w => \`<li>• \${w}</li>\`).join('')}</ul>
                    </div>
                </div>
                <div class="bg-blue-500/10 rounded-xl p-3 mt-3">
                    <div class="text-blue-400 font-bold mb-2">💡 پیشنهاد:</div>
                    <p class="text-sm">\${feedback.suggestions}</p>
                </div>
            \`;
            panel.classList.remove('hidden');
        }

        function skipQuestion() {
            answers.push({ question: questions[currentQuestionIndex], answer: '', feedback: { score: 0, strengths: [], weaknesses: ['پاسخ داده نشد'], suggestions: 'سعی کنید به همه سوالات پاسخ دهید', betterAnswer: '' } });
            scores.push(0);
            nextQuestion();
        }

        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showQuestion, 2000);
            } else {
                setTimeout(showResults, 1000);
            }
        }

        function showResults() {
            document.getElementById('interviewPanel').classList.add('hidden');
            document.getElementById('resultsPanel').classList.remove('hidden');

            const totalScore = scores.reduce((a, b) => a + b, 0);
            const avgScore = Math.round(totalScore / scores.length);
            const answeredCount = scores.filter(s => s > 0).length;

            document.getElementById('overallScore').textContent = totalScore;
            document.getElementById('answeredCount').textContent = answeredCount;
            document.getElementById('avgScore').textContent = avgScore;

            // تحلیل عملکرد
            let analysis = '';
            if (avgScore >= 80) analysis = '<div class="bg-emerald-500/10 rounded-xl p-4 text-emerald-400">🌟 عملکرد عالی! برای این موقعیت آماده هستید.</div>';
            else if (avgScore >= 60) analysis = '<div class="bg-blue-500/10 rounded-xl p-4 text-blue-400">👍 عملکرد خوب. با کمی تمرین بیشتر عالی خواهید شد.</div>';
            else analysis = '<div class="bg-amber-500/10 rounded-xl p-4 text-amber-400">📚 نیاز به تمرین بیشتر. پیشنهادات را مطالعه کنید.</div>';
            document.getElementById('performanceAnalysis').innerHTML = analysis;

            // پاسخ‌های بهتر
            document.getElementById('betterAnswers').innerHTML = answers.filter(a => a.feedback.betterAnswer).map((a, i) => \`
                <div class="glass rounded-xl p-4">
                    <div class="text-sm text-gray-400 mb-2">سوال \${i + 1}:</div>
                    <p class="mb-3">\${a.question}</p>
                    <div class="bg-emerald-500/10 rounded-lg p-3">
                        <div class="text-emerald-400 text-sm mb-1">پاسخ بهتر:</div>
                        <p class="text-sm">\${a.feedback.betterAnswer}</p>
                    </div>
                </div>
            \`).join('');
        }
    <\/script>


`,className:"w-html-embed"})})}),S=s=>{const{origin:t,pathname:a,search:n}=new URL(s);return`${t}${a}${n}`},I=d.memo(({pageKey:s,system:t})=>e.jsx(k,{system:t},s),(s,t)=>s.pageKey===t.pageKey),P=({data:s})=>{const{system:t,resources:a,url:n,pageMeta:i}=s,c=S(n),u=d.useMemo(()=>({imageLoader:l,assetBaseUrl:o,resources:a,breakpoints:y,onError:console.error}),[a]);return e.jsxs(p.Provider,{value:u,children:[e.jsx(m.Provider,{value:n,children:e.jsx(I,{pageKey:c,system:t})}),e.jsx(v,{url:n,pageMeta:i,siteName:r,imageLoader:l,assetBaseUrl:o}),e.jsx(b,{children:i.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),E=({})=>{const s={"@context":"https://schema.org","@type":"WebSite",name:r};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),e.jsx("link",{rel:"icon",href:l({src:`${o}${f}`})}),h.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),$={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-43/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-43/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{$ as configValuesSerialized};
