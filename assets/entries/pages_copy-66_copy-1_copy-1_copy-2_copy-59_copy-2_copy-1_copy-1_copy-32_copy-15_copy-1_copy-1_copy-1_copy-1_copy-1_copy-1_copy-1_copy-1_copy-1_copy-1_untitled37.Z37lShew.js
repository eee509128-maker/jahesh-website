import{j as c,r as b,a as i,i as h,R as w,b as j,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m,C as N,P,A as o,$ as T}from"../chunks/chunk-CJTZdOzc.js";import{U as p}from"../chunks/chunk-BTtE8iXS.js";import{n as a}from"../chunks/chunk-CRUfvgxf.js";import{n as y}from"../chunks/chunk-RvLaVuUh.js";import{g as e}from"../chunks/chunk-BKjYWtT8.js";import{n as B}from"../chunks/chunk-Bx5-62GJ.js";import{d as u}from"../chunks/chunk-ClMSjCia.js";import{d as S,i as l}from"../chunks/chunk-DWuKyx5h.js";import{O as _,x as A,M as E,R as H,$ as M}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const g="jahesh",F=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],L="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",D=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],I=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],O=n=>c.jsxs("body",{className:"w-element",children:[c.jsx(p,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هوش مصنوعی جهش | مقاله نویس هوشمند</title>
    
    <!-- فونت زیبای وزیرمتن -->
    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.0.0/Vazirmatn-font-face.css" rel="stylesheet" type="text/css">
    
    <!-- آیکون ها -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- تبدیل خروجی هوش مصنوعی به متن زیبا -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>
    
    <!-- کتابخانه تولید PDF -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"><\/script>

    <style>
        :root {
            --primary: #6366f1;
            --primary-hover: #4f46e5;
            --bg-color: #0f172a;
            --container-bg: rgba(30, 41, 59, 0.7);
            --text-color: #f8fafc;
            --text-muted: #94a3b8;
            --border-color: rgba(255, 255, 255, 0.1);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Vazirmatn', sans-serif;
        }

        body {
            background: var(--bg-color);
            background-image: radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
                              radial-gradient(at 50% 0%, hsla(225,39%,30%,0.3) 0, transparent 50%), 
                              radial-gradient(at 100% 0%, hsla(339,49%,30%,0.3) 0, transparent 50%);
            color: var(--text-color);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: var(--container-bg);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            width: 100%;
            max-width: 900px;
            padding: 40px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        header {
            text-align: center;
            margin-bottom: 30px;
        }

        header h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 10px;
            background: linear-gradient(to right, #818cf8, #c084fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        header p {
            color: var(--text-muted);
            font-size: 1.1rem;
        }

        .input-group {
            margin-bottom: 20px;
        }

        .input-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #e2e8f0;
        }

        input[type="text"] {
            width: 100%;
            padding: 15px 20px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            background: rgba(15, 23, 42, 0.6);
            color: white;
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
        }

        input[type="text"]:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 15px 25px;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .btn:hover {
            background: var(--primary-hover);
            transform: translateY(-2px);
        }

        .btn:disabled {
            background: #475569;
            cursor: not-allowed;
            transform: none;
        }

        #loader {
            display: none;
            text-align: center;
            margin: 30px 0;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255, 255, 255, 0.1);
            border-top: 5px solid var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 15px auto;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        #result-section {
            display: none;
            margin-top: 30px;
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .result-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--border-color);
        }

        .result-header h2 {
            font-size: 1.5rem;
            color: #e2e8f0;
        }

        .btn-download {
            background: #ef4444; 
            width: auto;
            padding: 10px 20px;
            font-size: 0.9rem;
        }

        .btn-download:hover {
            background: #dc2626;
        }

        .article-content {
            background: rgba(15, 23, 42, 0.5);
            padding: 25px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            line-height: 2;
            font-size: 1.05rem;
            max-height: 500px;
            overflow-y: auto;
            color: #f1f5f9;
        }

        .article-content h1, .article-content h2, .article-content h3 {
            color: #c084fc;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .article-content p {
            margin-bottom: 15px;
            text-align: justify;
        }
        .article-content ul, .article-content ol {
            margin-right: 20px;
            margin-bottom: 15px;
        }

        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.2); 
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--primary); 
            border-radius: 10px;
        }

    </style>



    <div class="container">
        <header>
            <h1><i class="fas fa-brain"></i> هوش مصنوعی <span>جهش</span></h1>
            <p>موضوع بدهید، مقاله تخصصی و مرتب تحویل بگیرید</p>
        </header>

        <div class="input-group">
            <label for="topic">موضوع مقاله خود را وارد کنید:</label>
            <input type="text" id="topic" placeholder="مثال: تاثیر هوش مصنوعی بر آینده مشاغل..." autocomplete="off">
        </div>

        <button id="generateBtn" class="btn" onclick="generateArticle()">
            <i class="fas fa-magic"></i> تولید مقاله اختصاصی
        </button>

        <div id="loader">
            <div class="spinner"></div>
            <p style="color: var(--text-muted);">جهش در حال نگارش مقاله شماست. لطفا چند ثانیه صبر کنید...</p>
        </div>

        <div id="result-section">
            <div class="result-header">
                <h2>نتیجه مقاله</h2>
                <button id="downloadBtn" class="btn btn-download" onclick="downloadPDF()">
                    <i class="fas fa-file-pdf"></i> دانلود PDF
                </button>
            </div>
            <!-- اضافه کردن dir="rtl" برای راست چین بودن محتوا -->
            <div id="article-content" class="article-content" dir="rtl">
                <!-- مقاله اینجا نمایش داده می‌شود -->
            </div>
        </div>
    </div>

    <script>
        // کلید API شما
        const API_KEY = "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";

        async function generateArticle() {
            const topicInput = document.getElementById("topic");
            const generateBtn = document.getElementById("generateBtn");
            const loader = document.getElementById("loader");
            const resultSection = document.getElementById("result-section");
            const articleContent = document.getElementById("article-content");

            const topic = topicInput.value.trim();

            if (!topic) {
                alert("لطفاً ابتدا یک موضوع برای مقاله وارد کنید.");
                topicInput.focus();
                return;
            }

            generateBtn.disabled = true;
            generateBtn.innerHTML = '<i class="fas fa-hourglass-half"></i> در حال پردازش...';
            loader.style.display = "block";
            resultSection.style.display = "none";

            const prompt = \`تو یک نویسنده، ژورنالیست و پژوهشگر فوق‌حرفه‌ای هستی. 
            لطفاً یک مقاله بسیار جامع، دقیق، علمی و جذاب به زبان فارسی در مورد این موضوع بنویس: "\${topic}"
            
            قوانین نوشتن مقاله:
            1. یک عنوان جذاب در ابتدا قرار بده.
            2. یک مقدمه گیرا بنویس.
            3. بدنه اصلی را با تیترهای فرعی (H2, H3) مرتب کن.
            4. در صورت نیاز از لیست‌ها استفاده کن.
            5. یک نتیجه‌گیری قوی در انتها قرار بده.
            6. لحن مقاله حرفه‌ای باشد.\`;

            try {
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": \`Bearer \${API_KEY}\`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "model": "openai/gpt-4o-mini",
                        "messages": [
                            {"role": "user", "content": prompt}
                        ]
                    })
                });

                if (!response.ok) throw new Error("خطا در ارتباط با سرور هوش مصنوعی.");

                const data = await response.json();
                
                if(data.choices && data.choices.length > 0) {
                    const rawArticleText = data.choices[0].message.content;
                    articleContent.innerHTML = marked.parse(rawArticleText);
                    
                    loader.style.display = "none";
                    resultSection.style.display = "block";
                } else {
                    throw new Error("پاسخی دریافت نشد.");
                }

            } catch (error) {
                alert("متاسفانه خطایی رخ داد: " + error.message);
                loader.style.display = "none";
            } finally {
                generateBtn.disabled = false;
                generateBtn.innerHTML = '<i class="fas fa-magic"></i> تولید مقاله اختصاصی';
            }
        }

        // تابع اصلاح شده برای دانلود PDF (فقط راست‌چین اعمال شد)
        function downloadPDF() {
            const downloadBtn = document.getElementById('downloadBtn');
            const originalText = downloadBtn.innerHTML;
            
            // تغییر ظاهر دکمه
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال آماده‌سازی PDF...';
            downloadBtn.disabled = true;

            // دریافت کدهای HTML داخل مقاله تولید شده
            const contentHTML = document.getElementById('article-content').innerHTML;

            // در اینجا دستورات اجباری !important برای راست‌چین شدن اضافه شد
            const printTemplate = \`
                <!DOCTYPE html>
                <html lang="fa" dir="rtl">
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.0.0/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
                    <style>
                        * {
                            direction: rtl !important;
                        }
                        body {
                            font-family: 'Vazirmatn', sans-serif;
                            direction: rtl;
                            text-align: right;
                            color: #000000;
                            background-color: #ffffff;
                            padding: 20px;
                        }
                        h1, h2, h3 {
                            text-align: right !important;
                            color: #111111;
                            border-bottom: 2px solid #e5e7eb;
                            padding-bottom: 10px;
                            margin-top: 30px;
                            margin-bottom: 15px;
                        }
                        p {
                            line-height: 2.2;
                            text-align: justify !important;
                            margin-bottom: 15px;
                            font-size: 16px;
                        }
                        ul, ol {
                            text-align: right !important;
                            padding-right: 30px !important;
                            line-height: 2.2;
                            margin-bottom: 15px;
                            font-size: 16px;
                        }
                        li {
                            text-align: right !important;
                            margin-bottom: 8px;
                        }
                        strong {
                            color: #000000;
                        }
                    </style>
                </head>
                <body dir="rtl">
                    <div dir="rtl" style="direction: rtl; text-align: right; width: 100%;">
                        \${contentHTML}
                    </div>
                </body>
                </html>
            \`;

            // تنظیمات کتابخانه برای کیفیت بالا و سایز A4 استاندارد
            const opt = {
                margin:       15, // حاشیه 15 میلی‌متری از اطراف صفحه
                filename:     \`Jahesh_Article_\${new Date().getTime()}.pdf\`,
                image:        { type: 'jpeg', quality: 1 },
                html2canvas:  { scale: 2, useCORS: true }, // scale: 2 برای تار نشدن متن
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // تبدیل قالب ساخته شده به PDF و دانلود آن
            html2pdf().set(opt).from(printTemplate).save().then(() => {
                // بازگرداندن دکمه به حالت اول پس از دانلود موفق
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
            }).catch(error => {
                alert("خطایی در تولید PDF رخ داد.");
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
            });
        }

        // قابلیت اینتر زدن
        document.getElementById("topic").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                generateArticle();
            }
        });
    <\/script>

`,className:"w-html-embed"}),c.jsx(a,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:c.jsxs(a,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(a,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:c.jsx(d,{children:c.jsx(m,{children:c.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:c.jsxs(P,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[c.jsx(o,{"data-ws-index":"0",className:"w-menu-item",children:c.jsx(e,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(y,{className:"w-text",children:"فروشگاه"})})}),c.jsx(o,{"data-ws-index":"1",className:"w-menu-item",children:c.jsx(e,{href:"/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(o,{"data-ws-index":"2",className:"w-menu-item",children:c.jsx(T,{children:c.jsx(e,{type:"button",href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(y,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),c.jsx(o,{"data-ws-index":"3",className:"w-menu-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(o,{"data-ws-index":"4",className:"w-menu-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),c.jsxs(a,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[c.jsx(a,{className:"w-box",children:c.jsx(a,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:c.jsx(e,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),c.jsx(d,{children:c.jsx(m,{children:c.jsxs(_,{children:[c.jsx(A,{children:c.jsx(B,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:c.jsx(p,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(E,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:c.jsxs(H,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[c.jsxs(a,{className:"w-box cx6c9kw c1nd8hlk",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(M,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:c.jsx(p,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),c.jsx(a,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:c.jsxs(S,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[c.jsx(l,{className:"w-list-item",children:c.jsx(e,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),c.jsx(l,{className:"w-list-item",children:c.jsx(e,{href:"/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(l,{className:"w-list-item",children:c.jsx(e,{href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),c.jsx(l,{className:"w-list-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(l,{className:"w-list-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),c.jsx(e,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),$=n=>{const{origin:t,pathname:s,search:r}=new URL(n);return`${t}${s}${r}`},R=b.memo(({pageKey:n,system:t})=>c.jsx(O,{system:t},n),(n,t)=>n.pageKey===t.pageKey),C=({data:n})=>{const{system:t,resources:s,url:r,pageMeta:x}=n,f=$(r),v=b.useMemo(()=>({imageLoader:h,assetBaseUrl:i,resources:s,breakpoints:F,onError:console.error}),[s]);return c.jsxs(w.Provider,{value:v,children:[c.jsx(j.Provider,{value:r,children:c.jsx(R,{pageKey:f,system:t})}),c.jsx(z,{url:r,pageMeta:x,siteName:g,imageLoader:h,assetBaseUrl:i}),c.jsx(k,{children:x.title})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),U=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:g};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),c.jsx("link",{rel:"icon",href:h({src:`${i}${L}`})}),D.map(t=>c.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),I.map(t=>c.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},K=Object.freeze(Object.defineProperty({__proto__:null,Head:U},Symbol.toStringTag,{value:"Module"})),rc={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-66/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-66/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:K}}};export{rc as configValuesSerialized};
