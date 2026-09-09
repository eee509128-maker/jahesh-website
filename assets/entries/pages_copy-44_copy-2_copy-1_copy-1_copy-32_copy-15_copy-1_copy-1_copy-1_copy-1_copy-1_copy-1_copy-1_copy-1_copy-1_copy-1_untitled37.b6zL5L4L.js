import{j as e,r as y,a as r,i as x,R as w,b as j,P as k,c as z,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m,C as N,P as I,A as a,$ as S}from"../chunks/chunk-CJTZdOzc.js";import{U as u}from"../chunks/chunk-BTtE8iXS.js";import{n}from"../chunks/chunk-CRUfvgxf.js";import{n as h}from"../chunks/chunk-RvLaVuUh.js";import{g as c}from"../chunks/chunk-BKjYWtT8.js";import{n as P}from"../chunks/chunk-Bx5-62GJ.js";import{d as b}from"../chunks/chunk-ClMSjCia.js";import{d as E,i}from"../chunks/chunk-DWuKyx5h.js";import{O as T,x as A,M as L,R as $,$ as B}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const p="jahesh",C=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],_="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",O=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],Q=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],R=s=>e.jsxs("body",{className:"w-element",children:[e.jsx("div",{className:"w-element cl99im cddbznk c11x85ct c1dfajq9 c1dz2h89",children:e.jsx(u,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


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


`,className:"w-html-embed"})}),e.jsx(n,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:e.jsxs(n,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[e.jsx(d,{children:e.jsx(m,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(b,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(n,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:e.jsx(d,{children:e.jsx(m,{children:e.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:e.jsxs(I,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[e.jsx(a,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(c,{type:"button",href:"/jaheshkala",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(h,{className:"w-text",children:"فروشگاه"})})}),e.jsx(a,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(c,{href:"/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(a,{"data-ws-index":"2",className:"w-menu-item",children:e.jsx(S,{children:e.jsx(c,{type:"button",href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(h,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),e.jsx(a,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(a,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),e.jsxs(n,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[e.jsx(n,{className:"w-box",children:e.jsx(n,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:e.jsx(c,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),e.jsx(d,{children:e.jsx(m,{children:e.jsxs(T,{children:[e.jsx(A,{children:e.jsx(P,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:e.jsx(u,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx(L,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:e.jsxs($,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[e.jsxs(n,{className:"w-box cx6c9kw c1nd8hlk",children:[e.jsx(d,{children:e.jsx(m,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(b,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(B,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:e.jsx(u,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),e.jsx(n,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:e.jsxs(E,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[e.jsx(i,{className:"w-list-item",children:e.jsx(c,{href:"/jaheshkala",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),e.jsx(i,{className:"w-list-item",children:e.jsx(c,{href:"/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(i,{className:"w-list-item",children:e.jsx(c,{href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),e.jsx(i,{className:"w-list-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(i,{className:"w-list-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),e.jsx(c,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),M=s=>{const{origin:t,pathname:o,search:l}=new URL(s);return`${t}${o}${l}`},H=y.memo(({pageKey:s,system:t})=>e.jsx(R,{system:t},s),(s,t)=>s.pageKey===t.pageKey),F=({data:s})=>{const{system:t,resources:o,url:l,pageMeta:v}=s,g=M(l),f=y.useMemo(()=>({imageLoader:x,assetBaseUrl:r,resources:o,breakpoints:C,onError:console.error}),[o]);return e.jsxs(w.Provider,{value:f,children:[e.jsx(j.Provider,{value:l,children:e.jsx(H,{pageKey:g,system:t})}),e.jsx(k,{url:l,pageMeta:v,siteName:p,imageLoader:x,assetBaseUrl:r}),e.jsx(z,{children:v.title})]})},U=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),V=({})=>{const s={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),e.jsx("link",{rel:"icon",href:x({src:`${r}${_}`})}),O.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),Q.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},J=Object.freeze(Object.defineProperty({__proto__:null,Head:V},Symbol.toStringTag,{value:"Module"})),le={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-44/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:U}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-44/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:J}}};export{le as configValuesSerialized};
