import{j as c,r as g,a as o,i as y,R as f,b as j,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m,C as N,P,A as a,$ as S}from"../chunks/chunk-CJTZdOzc.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";import{n as s}from"../chunks/chunk-CRUfvgxf.js";import{n as p}from"../chunks/chunk-RvLaVuUh.js";import{g as e}from"../chunks/chunk-BKjYWtT8.js";import{n as I}from"../chunks/chunk-Bx5-62GJ.js";import{y as u}from"../chunks/chunk-BO0ALJ3I.js";import{d as T,i as r}from"../chunks/chunk-DWuKyx5h.js";import{O as _,x as A,M as E,R as C,$ as O}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const b="jahesh",L=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],R="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",B=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],M=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],V=l=>c.jsxs("body",{className:"w-element",children:[c.jsx("div",{className:"w-element cb01tfn c6t2e7d cnlef5d c1hj59h4 c15ofxyx",children:c.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دستیار هوشمند دامپزشکی (Vet AI)</title>
    
    <!-- استایل‌دهی با Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    
    <!-- برای نمایش فرمت صحیح متن‌های خروجی (Markdown) -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700&display=swap');
        
        body { 
            font-family: 'Vazirmatn', sans-serif; 
            background-color: #f3f4f6; 
        }
        
        /* تنظیمات اختصاصی برای نمایش صحیح مارک‌داون در حالت راست‌چین */
        .markdown-body {
            text-align: right;
            direction: rtl;
        }
        .markdown-body ul { 
            list-style-type: disc; 
            margin-right: 1.5rem; 
            padding-left: 0;
        }
        .markdown-body ol { 
            list-style-type: decimal; 
            margin-right: 1.5rem; 
            padding-left: 0;
        }
        .markdown-body h1, .markdown-body h2, .markdown-body h3 { 
            font-weight: bold; 
            margin-top: 1rem; 
            margin-bottom: 0.5rem; 
        }
        .markdown-body p {
            margin-bottom: 0.75rem;
        }
        
        .loader { 
            border: 4px solid #f3f3f3; 
            border-top: 4px solid #3b82f6; 
            border-radius: 50%; 
            width: 30px; 
            height: 30px; 
            animation: spin 1s linear infinite; 
            display: none; 
        }
        
        @keyframes spin { 
            0% { transform: rotate(0deg); } 
            100% { transform: rotate(360deg); } 
        }
    </style>




    <div class="bg-white rounded-xl shadow-lg w-full max-w-3xl overflow-hidden">
        <!-- هدر -->
        <div class="bg-blue-600 p-6 text-white text-center">
            <h1 class="text-2xl font-bold">🐾 دستیار هوشمند دامپزشکی</h1>
            <p class="text-sm opacity-90 mt-2">تحلیل رادیوگرافی، آزمایش خون و شرح حال بیمار</p>
        </div>

        <div class="p-6 space-y-6">
            
            <!-- ورودی شرح حال -->
            <div>
                <label class="block text-gray-800 font-bold mb-2">شرح حال / علائم بالینی / مقادیر آزمایش:</label>
                <!-- اصلاح شده: اضافه کردن bg-white و text-gray-900 برای خوانایی -->
                <textarea id="clinicalText" rows="4" class="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" placeholder="مثال: گربه ۵ ساله، استفراغ مداوم، کراتینین بالا..."></textarea>
            </div>

            <!-- آپلود عکس -->
            <div>
                <label class="block text-gray-800 font-bold mb-2">تصویر (رادیوگرافی، سونوگرافی یا برگه آزمایش):</label>
                <div class="flex items-center justify-center w-full">
                    <label for="imageInput" class="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 transition">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"></path>
                            </svg>
                            <p class="text-sm text-gray-600"><span class="font-semibold">برای آپلود کلیک کنید</span></p>
                        </div>
                        <input id="imageInput" type="file" class="hidden" accept="image/*">
                    </label>
                </div>
                <!-- پیش‌نمایش عکس -->
                <div id="imagePreviewContainer" class="mt-4 hidden text-center">
                    <img id="imagePreview" src="" alt="Preview" class="max-h-64 mx-auto rounded-lg shadow-md">
                    <button onclick="clearImage()" class="mt-2 text-red-500 text-sm hover:underline">حذف عکس</button>
                </div>
            </div>

            <!-- دکمه ارسال -->
            <button onclick="analyzeCase()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition flex justify-center items-center gap-2">
                <span>تحلیل و تشخیص</span>
                <div id="loadingSpinner" class="loader"></div>
            </button>

            <!-- بخش نتیجه -->
            <div id="resultSection" class="hidden border-t-2 border-gray-100 pt-6 mt-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3 text-right">نتایج تحلیل هوش مصنوعی:</h3>
                <!-- اصلاح شده: اضافه کردن text-right و تنظیمات دایرکشن -->
                <div id="aiOutput" class="markdown-body text-gray-800 leading-relaxed text-sm bg-gray-50 p-4 rounded-lg border border-gray-200 text-right" dir="rtl"></div>
                
                <div class="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800 text-right">
                    ⚠️ سلب مسئولیت: این ابزار فقط برای کمک به تشخیص است و نباید جایگزین نظر قطعی دامپزشک شود.
                </div>
            </div>

        </div>
    </div>

    <script>
        // کلید API شما
        const API_KEY = "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";
        
        let base64Image = null;

        document.getElementById('imageInput').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    base64Image = e.target.result; 
                    document.getElementById('imagePreview').src = base64Image;
                    document.getElementById('imagePreviewContainer').classList.remove('hidden');
                };
                reader.readAsDataURL(file);
            }
        });

        function clearImage() {
            document.getElementById('imageInput').value = "";
            base64Image = null;
            document.getElementById('imagePreviewContainer').classList.add('hidden');
        }

        async function analyzeCase() {
            const text = document.getElementById('clinicalText').value;
            const outputDiv = document.getElementById('aiOutput');
            const resultSection = document.getElementById('resultSection');
            const spinner = document.getElementById('loadingSpinner');

            if (!text && !base64Image) {
                alert("لطفاً شرح حال یا یک تصویر را وارد کنید.");
                return;
            }

            spinner.style.display = 'block';
            resultSection.classList.add('hidden');
            
            const messages = [
                {
                    role: "system",
                    content: "شما یک دستیار متخصص دامپزشکی هستید. پاسخ باید کاملا فارسی، راست‌چین و علمی باشد. از بولت پوینت‌ها استفاده کنید."
                },
                {
                    role: "user",
                    content: []
                }
            ];

            if (text) {
                messages[1].content.push({ type: "text", text: text });
            } else {
                messages[1].content.push({ type: "text", text: "لطفاً این تصویر را تحلیل کنید." });
            }

            if (base64Image) {
                messages[1].content.push({
                    type: "image_url",
                    image_url: {
                        url: base64Image
                    }
                });
            }

            try {
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": \`Bearer \${API_KEY}\`,
                        "Content-Type": "application/json",
                        "HTTP-Referer": "http://localhost",
                        "X-Title": "Vet AI Assistant"
                    },
                    body: JSON.stringify({
                        model: "google/gemini-2.0-flash-001", 
                        messages: messages,
                        temperature: 0.5
                    })
                });

                if (!response.ok) {
                    throw new Error(\`خطای شبکه: \${response.status}\`);
                }

                const data = await response.json();
                
                const aiText = data.choices[0].message.content;
                outputDiv.innerHTML = marked.parse(aiText);
                resultSection.classList.remove('hidden');

            } catch (error) {
                console.error(error);
                alert("خطا در برقراری ارتباط با سرور.");
            } finally {
                spinner.style.display = 'none';
            }
        }
    <\/script>

`,className:"w-html-embed"})}),c.jsx(s,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:c.jsxs(s,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(s,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:c.jsx(d,{children:c.jsx(m,{children:c.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:c.jsxs(P,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[c.jsx(a,{"data-ws-index":"0",className:"w-menu-item",children:c.jsx(e,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(p,{className:"w-text",children:"فروشگاه"})})}),c.jsx(a,{"data-ws-index":"1",className:"w-menu-item",children:c.jsx(e,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(a,{"data-ws-index":"2",className:"w-menu-item",children:c.jsx(S,{children:c.jsx(e,{type:"button",href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(p,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),c.jsx(a,{"data-ws-index":"3",className:"w-menu-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(a,{"data-ws-index":"4",className:"w-menu-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),c.jsxs(s,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[c.jsx(s,{className:"w-box",children:c.jsx(s,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:c.jsx(e,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),c.jsx(d,{children:c.jsx(m,{children:c.jsxs(_,{children:[c.jsx(A,{children:c.jsx(I,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:c.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(E,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:c.jsxs(C,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[c.jsxs(s,{className:"w-box cx6c9kw c1nd8hlk",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(O,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:c.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),c.jsx(s,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:c.jsxs(T,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),c.jsx(e,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),$=l=>{const{origin:t,pathname:i,search:n}=new URL(l);return`${t}${i}${n}`},F=g.memo(({pageKey:l,system:t})=>c.jsx(V,{system:t},l),(l,t)=>l.pageKey===t.pageKey),D=({data:l})=>{const{system:t,resources:i,url:n,pageMeta:x}=l,w=$(n),v=g.useMemo(()=>({imageLoader:y,assetBaseUrl:o,resources:i,breakpoints:L,onError:console.error}),[i]);return c.jsxs(f.Provider,{value:v,children:[c.jsx(j.Provider,{value:n,children:c.jsx(F,{pageKey:w,system:t})}),c.jsx(z,{url:n,pageMeta:x,siteName:b,imageLoader:y,assetBaseUrl:o}),c.jsx(k,{children:x.title})]})},H=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),U=({})=>{const l={"@context":"https://schema.org","@type":"WebSite",name:b};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(l,null,2)}}),c.jsx("link",{rel:"icon",href:y({src:`${o}${R}`})}),B.map(t=>c.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),M.map(t=>c.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},K=Object.freeze(Object.defineProperty({__proto__:null,Head:U},Symbol.toStringTag,{value:"Module"})),nc={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-67/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-67/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:K}}};export{nc as configValuesSerialized};
