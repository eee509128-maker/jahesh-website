import{j as e,r as g,a as i,i as h,R as w,b as j,P as k,c as z,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m as p,C as N,P as S,A as a,$ as P}from"../chunks/chunk-CJTZdOzc.js";import{U as m}from"../chunks/chunk-BTtE8iXS.js";import{n}from"../chunks/chunk-CRUfvgxf.js";import{n as y}from"../chunks/chunk-RvLaVuUh.js";import{g as c}from"../chunks/chunk-BKjYWtT8.js";import{n as I}from"../chunks/chunk-Bx5-62GJ.js";import{d as u}from"../chunks/chunk-ClMSjCia.js";import{d as E,i as r}from"../chunks/chunk-DWuKyx5h.js";import{O as B,x as T,M as $,R as O,$ as A}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const b="jahesh",D=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],L="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",_=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],R=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],C=s=>e.jsxs("body",{className:"w-element",children:[e.jsx(m,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>طراح خودکار ارائه با هوش مصنوعی (راست‌چین کامل)</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <!-- فونت وزیر ( فارسی ) -->
    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" rel="stylesheet" type="text/css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>
    <!-- PptxGen.js -->
    <script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js"><\/script>
    <style>
        body {
            font-family: 'Vazir', sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }
        .slide-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 1.5rem;
            box-shadow: 0 20px 40px -15px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
        }
        .slide-card:hover {
            transform: scale(1.02);
        }
        .speaker-notes {
            background-color: #f8f9fa;
            border-right: 4px solid #4f46e5;
            font-size: 0.9rem;
        }
        .badge-animation {
            background: linear-gradient(145deg, #667eea, #764ba2);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
        }
        .timing-badge {
            background: #10b981;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
        }
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4f46e5;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        /* تنظیمات اضافی برای راست‌چین بودن کامل */
        input, textarea, .input-ltr {
            text-align: right;
        }
        /* ورودی‌های فنی که محتوای انگلیسی دارند با کلاس ltr */
        .ltr-input {
            direction: ltr;
            text-align: left;
        }
    </style>


    <div class="max-w-7xl mx-auto">
        <!-- عنوان و توضیحات -->
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-gray-800 mb-2">🎨 طراح خودکار ارائه (کاملاً فارسی)</h1>
            <p class="text-lg text-gray-600">موضوع و چند نکته کلیدی را وارد کن — اسلاید شیک + متن سخنرانی + نمودار + انیمیشن و زمان‌بندی</p>
            <p class="text-sm text-gray-500 mt-2">خروجی: نمایش در صفحه + دانلود پاورپوینت (قابل استفاده در گوگل اسلاید و کانوا)</p>
        </div>

        <!-- بخش ورودی -->
        <div class="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 mb-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-gray-700 font-medium mb-1">📌 موضوع ارائه</label>
                    <input type="text" id="topic" value="تأثیر هوش مصنوعی بر کسب‌وکار" class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400" placeholder="مثلاً: بازاریابی دیجیتال">
                </div>
                <div>
                    <label class="block text-gray-700 font-medium mb-1">🔑 نکات کلیدی (با کاما جدا کن)</label>
                    <input type="text" id="keypoints" value="افزایش بهره‌وری, کاهش هزینه, چالش‌های پیاده‌سازی, آینده شغلی" class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400" placeholder="نکته۱, نکته۲, ...">
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                    <label class="block text-gray-700 font-medium mb-1">🔐 API Key (پیش‌فرض: کلید شما)</label>
                    <input type="password" id="apiKey" value="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" class="w-full p-3 border border-gray-300 rounded-xl font-mono text-sm ltr-input" dir="ltr">
                </div>
                <div>
                    <label class="block text-gray-700 font-medium mb-1">🌐 Endpoint</label>
                    <input type="text" id="endpoint" value="https://openrouter.ai/api/v1/chat/completions" class="w-full p-3 border border-gray-300 rounded-xl text-sm ltr-input" dir="ltr">
                </div>
                <div>
                    <label class="block text-gray-700 font-medium mb-1">🤖 مدل</label>
                    <input type="text" id="model" value="openai/gpt-3.5-turbo" class="w-full p-3 border border-gray-300 rounded-xl text-sm ltr-input" dir="ltr">
                </div>
            </div>

            <div class="flex flex-wrap gap-3 mt-6 justify-center">
                <button id="generateBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition flex items-center gap-2">
                    <i class="fas fa-magic"></i> تولید ارائه با هوش مصنوعی
                </button>
                <button id="exampleBtn" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-xl shadow transition flex items-center gap-2">
                    <i class="fas fa-lightbulb"></i> نمونه تستی
                </button>
            </div>
            <p class="text-xs text-gray-400 mt-3 text-center">⚠️ API key در مرورگر ذخیره می‌شود؛ برای امنیت بیشتر از کلید تستی یا محدود استفاده کنید.</p>
        </div>

        <!-- بخش بارگذاری و خطا -->
        <div id="loading" class="hidden flex justify-center my-8">
            <div class="loader"></div>
            <span class="mr-3 text-indigo-600">در حال طراحی اسلایدها با هوش مصنوعی...</span>
        </div>
        <div id="error" class="hidden bg-red-100 border-r-4 border-red-500 text-red-700 p-4 rounded-lg my-4"></div>

        <!-- نمایش اسلایدها -->
        <div id="slidesContainer" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6"></div>

        <!-- دکمه‌های خروجی (پس از تولید اسلایدها ظاهر می‌شوند) -->
        <div id="exportButtons" class="hidden flex flex-wrap gap-3 justify-center mt-8 mb-4">
            <button id="exportPptxBtn" class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition flex items-center gap-2">
                <i class="fas fa-file-powerpoint"></i> دانلود پاورپوینت (PPTX)
            </button>
            <button id="copyTextBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition flex items-center gap-2">
                <i class="fas fa-copy"></i> کپی متن سخنرانی
            </button>
        </div>
    </div>

    <script>
        (function() {
            // متغیرهای سراسری برای ذخیره آخرین اسلایدهای تولید شده
            let currentSlides = [];
            let chartInstances = [];

            // عناصر DOM
            const topicInput = document.getElementById('topic');
            const keypointsInput = document.getElementById('keypoints');
            const apiKeyInput = document.getElementById('apiKey');
            const endpointInput = document.getElementById('endpoint');
            const modelInput = document.getElementById('model');
            const generateBtn = document.getElementById('generateBtn');
            const exampleBtn = document.getElementById('exampleBtn');
            const loadingDiv = document.getElementById('loading');
            const errorDiv = document.getElementById('error');
            const slidesContainer = document.getElementById('slidesContainer');
            const exportButtons = document.getElementById('exportButtons');
            const exportPptxBtn = document.getElementById('exportPptxBtn');
            const copyTextBtn = document.getElementById('copyTextBtn');

            // نمونه تستی (با موضوع فارسی)
            exampleBtn.addEventListener('click', function() {
                topicInput.value = 'بازاریابی با اینفلوئنسرها';
                keypointsInput.value = 'افزایش آگاهی از برند, اعتماد مخاطب, اندازه‌گیری بازگشت سرمایه, انتخاب اینفلوئنسر مناسب';
            });

            // تولید ارائه با کلیک
            generateBtn.addEventListener('click', generatePresentation);

            // تابع اصلی تولید
            async function generatePresentation() {
                // دریافت مقادیر ورودی
                const topic = topicInput.value.trim();
                const keypointsRaw = keypointsInput.value.trim();
                const apiKey = apiKeyInput.value.trim();
                const endpoint = endpointInput.value.trim();
                const model = modelInput.value.trim();

                if (!topic || !keypointsRaw || !apiKey || !endpoint || !model) {
                    showError('لطفاً همه فیلدها را پر کنید.');
                    return;
                }

                // تبدیل نکات کلیدی به آرایه
                const keyPointsArray = keypointsRaw.split(',').map(k => k.trim()).filter(k => k);
                
                // ساختن پرامپت برای ارسال به API
                const prompt = \`
                یک ارائه حرفه‌ای با موضوع "\${topic}" و با در نظر گرفتن نکات کلیدی زیر طراحی کن: \${keyPointsArray.join('، ')}.

                خروجی باید یک JSON معتبر با ساختار زیر باشد (فقط JSON و هیچ متن دیگری):
                {
                  "slides": [
                    {
                      "title": "عنوان اسلاید",
                      "bullets": ["نکته اول", "نکته دوم", ...],
                      "speakerNotes": "متن سخنرانی برای این اسلاید (حدود ۳-۴ جمله)",
                      "animation": "پیشنهاد انیمیشن (مثلاً: fade, slide, zoom, flip)",
                      "timing": 60, // زمان پیشنهادی به ثانیه
                      "chart": {} // اختیاری: فقط برای اسلایدهایی که نمودار دارند
                    }
                  ]
                }

                حداقل ۵ و حداکثر ۷ اسلاید طراحی کن. حتماً یک اسلاید با نمودار (حداقل یک نمودار) قرار بده. برای نمودار از ساختار زیر استفاده کن (در همان slide):
                "chart": {
                  "type": "bar" یا "pie" یا "line",
                  "labels": ["برچسب1", "برچسب2", ...],
                  "datasets": [
                    {
                      "label": "نام سری",
                      "data": [10, 20, ...]
                    }
                  ]
                }
                مطمئن شو JSON به‌درستی قابل پارس باشد و از کدم‌های اضافی خودداری کن.
                \`;

                // نمایش لودینگ و مخفی کردن خطاهای قبلی
                loadingDiv.classList.remove('hidden');
                errorDiv.classList.add('hidden');
                slidesContainer.innerHTML = '';
                exportButtons.classList.add('hidden');
                currentSlides = [];

                // آماده‌سازی درخواست fetch
                try {
                    const response = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': \`Bearer \${apiKey}\`,
                            // برخی endpoints به HTTP-Referer نیاز دارند (مثل OpenRouter)
                            'HTTP-Referer': window.location.origin,
                        },
                        body: JSON.stringify({
                            model: model,
                            messages: [
                                { role: 'system', content: 'شما یک طراح ارائه حرفه‌ای هستید. فقط JSON خروجی بده.' },
                                { role: 'user', content: prompt }
                            ],
                            temperature: 0.7,
                            max_tokens: 2000,
                        }),
                    });

                    if (!response.ok) {
                        const errText = await response.text();
                        throw new Error(\`خطای API (\${response.status}): \${errText}\`);
                    }

                    const data = await response.json();
                    // استخراج محتوای پیام
                    let content = data.choices?.[0]?.message?.content;
                    if (!content) throw new Error('پاسخ نامعتبر از API');

                    // پاکسازی پاسخ از مارک‌داون کد (اگر مدل کد بلاک برگرداند)
                    content = content.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
                    
                    let parsed;
                    try {
                        parsed = JSON.parse(content);
                    } catch (e) {
                        console.warn('JSON نامعتبر، تلاش برای استخراج با regex', content);
                        // برخی مواقع مدل متن اضافی داره، سعی می‌کنیم با regex JSON را پیدا کنیم
                        const match = content.match(/\\{[\\s\\S]*\\}/);
                        if (match) {
                            parsed = JSON.parse(match[0]);
                        } else {
                            throw new Error('پاسخ شامل JSON معتبر نیست');
                        }
                    }

                    if (!parsed.slides || !Array.isArray(parsed.slides)) {
                        throw new Error('ساختار مورد انتظار وجود ندارد (slides)');
                    }

                    // ذخیره و نمایش اسلایدها
                    currentSlides = parsed.slides;
                    renderSlides(currentSlides);
                    exportButtons.classList.remove('hidden');

                } catch (err) {
                    showError('خطا در ارتباط با هوش مصنوعی: ' + err.message);
                } finally {
                    loadingDiv.classList.add('hidden');
                }
            }

            // نمایش اسلایدها در صفحه
            function renderSlides(slides) {
                slidesContainer.innerHTML = '';
                // نابود کردن نمودارهای قبلی
                chartInstances.forEach(chart => chart.destroy());
                chartInstances = [];

                slides.forEach((slide, index) => {
                    const slideDiv = document.createElement('div');
                    slideDiv.className = 'slide-card p-6 transition-all';

                    // شماره اسلاید و عنوان
                    let html = \`
                        <div class="flex justify-between items-center mb-3">
                            <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">اسلاید \${index+1}</span>
                            <div class="flex gap-2">
                                <span class="badge-animation"><i class="fas fa-film"></i> \${slide.animation || 'fade'}</span>
                                <span class="timing-badge"><i class="far fa-clock"></i> \${slide.timing || 45} ثانیه</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-3 border-b pb-2">\${slide.title || 'بدون عنوان'}</h3>
                    \`;

                    // نقاط (bullet points) - در RTL لیست‌ها به درستی نمایش می‌یابند
                    if (slide.bullets && slide.bullets.length) {
                        html += '<ul class="list-disc list-inside space-y-1 mb-4 text-gray-700 pr-2">';
                        slide.bullets.forEach(b => {
                            html += \`<li>\${b}</li>\`;
                        });
                        html += '</ul>';
                    } else {
                        html += '<p class="text-gray-500 mb-4">(بدون نکته)</p>';
                    }

                    // نمودار (اگر وجود داشته باشد)
                    if (slide.chart && slide.chart.type) {
                        const chartId = \`chart-\${index}-\${Date.now()}\`;
                        html += \`<div class="my-4"><canvas id="\${chartId}" width="400" height="200" style="max-height:200px; width:100%;"></canvas></div>\`;
                    }

                    // یادداشت سخنران
                    html += \`
                        <div class="speaker-notes p-3 rounded-lg mt-3">
                            <i class="fas fa-microphone-alt ml-1 text-indigo-600"></i>
                            <span class="font-medium">متن سخنرانی:</span>
                            <p class="mt-1 text-gray-600 text-sm">\${slide.speakerNotes || 'توضیحاتی ثبت نشده است.'}</p>
                        </div>
                    \`;

                    slideDiv.innerHTML = html;
                    slidesContainer.appendChild(slideDiv);

                    // بعد از اضافه شدن به DOM، اگر نمودار دارد رسمش کن
                    if (slide.chart && slide.chart.type) {
                        const chartId = \`chart-\${index}-\${Date.now()}\`;
                        const ctx = document.getElementById(chartId)?.getContext('2d');
                        if (ctx) {
                            try {
                                const chart = new Chart(ctx, {
                                    type: slide.chart.type,
                                    data: {
                                        labels: slide.chart.labels || [],
                                        datasets: slide.chart.datasets || []
                                    },
                                    options: {
                                        responsive: true,
                                        maintainAspectRatio: true,
                                        plugins: {
                                            legend: { display: false }
                                        }
                                    }
                                });
                                chartInstances.push(chart);
                            } catch (e) {
                                console.warn('خطا در رسم نمودار:', e);
                            }
                        }
                    }
                });
            }

            // نمایش خطا
            function showError(msg) {
                errorDiv.classList.remove('hidden');
                errorDiv.innerText = msg;
                loadingDiv.classList.add('hidden');
            }

            // خروجی پاورپوینت
            exportPptxBtn.addEventListener('click', function() {
                if (!currentSlides.length) {
                    alert('ابتدا یک ارائه تولید کن.');
                    return;
                }

                try {
                    const PptxGenJS = window.PptxGenJS;
                    const pptx = new PptxGenJS();
                    
                    currentSlides.forEach((slide, idx) => {
                        const pptSlide = pptx.addSlide();
                        // عنوان
                        pptSlide.addText(slide.title || 'بدون عنوان', {
                            x: 0.5, y: 0.5, w: '90%', h: 1,
                            fontSize: 24, bold: true, color: '363636',
                        });

                        // بولت‌ها
                        let yPos = 1.8;
                        if (slide.bullets && slide.bullets.length) {
                            slide.bullets.forEach(b => {
                                pptSlide.addText(b, {
                                    x: 0.8, y: yPos, w: '80%', h: 0.4,
                                    fontSize: 14, bullet: true,
                                });
                                yPos += 0.4;
                            });
                        }

                        // اگر نمودار هست، توضیح می‌دهیم (چون نمی‌توانیم تصویر اضافه کنیم ساده)
                        if (slide.chart) {
                            pptSlide.addText(\`نمودار: \${slide.chart.type} با داده‌های \${JSON.stringify(slide.chart.labels)}\`, {
                                x: 0.8, y: yPos + 0.3, w: '80%', h: 0.6,
                                fontSize: 12, color: '666666', italic: true,
                            });
                        }

                        // یادداشت سخنران
                        if (slide.speakerNotes) {
                            pptSlide.addNotes(slide.speakerNotes);
                        }

                        // اضافه کردن انیمیشن و زمان به عنوان یادداشت جداگانه
                        pptSlide.addNotes(\`🎬 انیمیشن پیشنهادی: \${slide.animation || 'fade'} — ⏱️ زمان: \${slide.timing || 45} ثانیه\`);
                    });

                    pptx.writeFile({ fileName: \`ارائه_\${topicInput.value || 'تولیدشده'}.pptx\` });
                } catch (err) {
                    alert('خطا در ساخت پاورپوینت: ' + err.message);
                }
            });

            // کپی متن سخنرانی‌ها
            copyTextBtn.addEventListener('click', function() {
                if (!currentSlides.length) return;
                let text = '';
                currentSlides.forEach((s, i) => {
                    text += \`اسلاید \${i+1}: \${s.title}\\n\`;
                    text += \`متن سخنرانی: \${s.speakerNotes || 'ندارد'}\\n\\n\`;
                });
                navigator.clipboard.writeText(text).then(() => {
                    alert('متن سخنرانی‌ها در کلیپ‌بورد کپی شد.');
                }).catch(() => {
                    alert('خطا در کپی کردن');
                });
            });

        })();
    <\/script>

`,className:"w-html-embed"}),e.jsx(n,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:e.jsxs(n,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[e.jsx(d,{children:e.jsx(p,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(n,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:e.jsx(d,{children:e.jsx(p,{children:e.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:e.jsxs(S,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[e.jsx(a,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(c,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(y,{className:"w-text",children:"فروشگاه"})})}),e.jsx(a,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(c,{href:"/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(a,{"data-ws-index":"2",className:"w-menu-item",children:e.jsx(P,{children:e.jsx(c,{type:"button",href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(y,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),e.jsx(a,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(a,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),e.jsxs(n,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[e.jsx(n,{className:"w-box",children:e.jsx(n,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:e.jsx(c,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),e.jsx(d,{children:e.jsx(p,{children:e.jsxs(B,{children:[e.jsx(T,{children:e.jsx(I,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:e.jsx(m,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx($,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:e.jsxs(O,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[e.jsxs(n,{className:"w-box cx6c9kw c1nd8hlk",children:[e.jsx(d,{children:e.jsx(p,{children:e.jsx(c,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(A,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:e.jsx(m,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),e.jsx(n,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:e.jsxs(E,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"توسعه‌ دهندگان"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(r,{className:"w-list-item",children:e.jsx(c,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),e.jsx(c,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),M=s=>{const{origin:t,pathname:o,search:l}=new URL(s);return`${t}${o}${l}`},J=g.memo(({pageKey:s,system:t})=>e.jsx(C,{system:t},s),(s,t)=>s.pageKey===t.pageKey),H=({data:s})=>{const{system:t,resources:o,url:l,pageMeta:x}=s,f=M(l),v=g.useMemo(()=>({imageLoader:h,assetBaseUrl:i,resources:o,breakpoints:D,onError:console.error}),[o]);return e.jsxs(w.Provider,{value:v,children:[e.jsx(j.Provider,{value:l,children:e.jsx(J,{pageKey:f,system:t})}),e.jsx(k,{url:l,pageMeta:x,siteName:b,imageLoader:h,assetBaseUrl:i}),e.jsx(z,{children:x.title})]})},F=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),K=({})=>{const s={"@context":"https://schema.org","@type":"WebSite",name:b};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),e.jsx("link",{rel:"icon",href:h({src:`${i}${L}`})}),_.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),R.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},U=Object.freeze(Object.defineProperty({__proto__:null,Head:K},Symbol.toStringTag,{value:"Module"})),le={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-76/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:F}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-76/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:U}}};export{le as configValuesSerialized};
