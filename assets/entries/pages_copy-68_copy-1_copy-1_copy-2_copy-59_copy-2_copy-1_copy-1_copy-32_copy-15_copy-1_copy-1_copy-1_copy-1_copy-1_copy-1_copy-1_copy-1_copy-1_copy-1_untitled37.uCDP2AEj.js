import{j as c,r as b,a as r,i as p,R as f,b as j,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m,C as N,P,A as a,$ as S}from"../chunks/chunk-CJTZdOzc.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";import{n as t}from"../chunks/chunk-CRUfvgxf.js";import{n as y}from"../chunks/chunk-RvLaVuUh.js";import{g as e}from"../chunks/chunk-BKjYWtT8.js";import{n as T}from"../chunks/chunk-Bx5-62GJ.js";import{d as x}from"../chunks/chunk-ClMSjCia.js";import{d as _,i as s}from"../chunks/chunk-DWuKyx5h.js";import{O as E,x as $,M as I,R as B,$ as O}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const g="jahesh",R=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],F="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",A=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],D=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],M=l=>c.jsxs("body",{className:"w-element",children:[c.jsx("div",{className:"w-element c183mxp7",children:c.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>محاسبه‌گر دوز هوشمند و تداخلات دارویی</title>
    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.0.0/Vazirmatn-font-face.css" rel="stylesheet" type="text/css">
    <style>
        body {
            font-family: 'Vazirmatn', sans-serif;
            background-color: #f0f4f8;
            color: #333;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
        }
        .container {
            background: #ffffff;
            max-width: 600px;
            width: 100%;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        h2 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 24px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;
            color: #34495e;
        }
        input, select, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccd1d9;
            border-radius: 8px;
            font-family: 'Vazirmatn', sans-serif;
            font-size: 14px;
            box-sizing: border-box;
            transition: border-color 0.3s;
        }
        input:focus, select:focus, textarea:focus {
            border-color: #3498db;
            outline: none;
        }
        .row {
            display: flex;
            gap: 15px;
        }
        .row .form-group {
            flex: 1;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #2980b9;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            font-family: 'Vazirmatn', sans-serif;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 10px;
        }
        button:hover {
            background-color: #2471a3;
        }
        button:disabled {
            background-color: #95a5a6;
            cursor: not-allowed;
        }
        #result-container {
            margin-top: 25px;
            padding: 20px;
            background-color: #e8f6f3;
            border-right: 5px solid #1abc9c;
            border-radius: 8px;
            display: none;
            line-height: 1.8;
        }
        .loader {
            display: none;
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
            color: #2980b9;
        }
        .disclaimer {
            font-size: 12px;
            color: #e74c3c;
            text-align: center;
            margin-top: 20px;
            background: #fadbd8;
            padding: 10px;
            border-radius: 8px;
        }
    </style>



    <div class="container">
        <h2>💊 محاسبه‌گر دوز و بررسی تداخل</h2>
        
        <div class="row">
            <div class="form-group">
                <label for="species">گونه:</label>
                <select id="species">
                    <option value="انسان">انسان</option>
                    <option value="سگ">سگ (دامپزشکی)</option>
                    <option value="گربه">گربه (دامپزشکی)</option>
                    <option value="پرنده">پرنده (دامپزشکی)</option>
                    <option value="سایر">سایر</option>
                </select>
            </div>
            <div class="form-group">
                <label for="age">سن:</label>
                <input type="text" id="age" placeholder="مثال: 30 سال یا 6 ماه" required="">
            </div>
        </div>

        <div class="row">
            <div class="form-group">
                <label for="weight">وزن (کیلوگرم):</label>
                <input type="number" id="weight" step="0.1" placeholder="مثال: 70" required="">
            </div>
            <div class="form-group">
                <label for="drugForm">فرم دارو:</label>
                <select id="drugForm">
                    <option value="قرص/کپسول">قرص / کپسول</option>
                    <option value="شربت/سوسپانسیون">شربت / سوسپانسیون</option>
                    <option value="آمپول/تزریقی">آمپول / تزریقی</option>
                    <option value="پماد/موضعی">پماد / موضعی</option>
                    <option value="قطره">قطره</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label for="drugName">نام داروی مورد نظر:</label>
            <input type="text" id="drugName" placeholder="مثال: آموکسی‌سیلین، استامینوفن..." required="">
        </div>

        <div class="form-group">
            <label for="disease">بیماری‌ها / شرایط زمینه‌ای (نارسایی کلیه، بارداری و...):</label>
            <input type="text" id="disease" placeholder="در صورت عدم وجود، بنویسید: ندارد">
        </div>

        <div class="form-group">
            <label for="otherDrugs">سایر داروهای مصرفی (جهت بررسی تداخل):</label>
            <textarea id="otherDrugs" rows="2" placeholder="نام داروهای فعلی را بنویسید (با کاما جدا کنید). اگر ندارد بنویسید: ندارد"></textarea>
        </div>

        <button id="calcBtn" onclick="calculateDose()">محاسبه دوز و بررسی تداخلات</button>
        
        <div class="loader" id="loader">⏳ در حال تحلیل هوش مصنوعی... لطفا صبر کنید...</div>

        <div id="result-container">
            <h3 style="margin-top:0; color:#16a085;">✅ نتیجه بررسی:</h3>
            <div id="result-text"></div>
        </div>

        <div class="disclaimer">
            ⚠️ <b>هشدار پزشکی:</b> این نتایج توسط هوش مصنوعی تولید شده‌اند و صرفاً جنبه راهنمایی دارند. هرگونه تجویز و مصرف دارو باید حتماً تحت نظر پزشک یا دامپزشک متخصص انجام شود.
        </div>
    </div>

    <script>
        const API_KEY = "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";

        async function calculateDose() {
            // دریافت مقادیر فرم
            const species = document.getElementById("species").value;
            const age = document.getElementById("age").value;
            const weight = document.getElementById("weight").value;
            const drugForm = document.getElementById("drugForm").value;
            const drugName = document.getElementById("drugName").value;
            const disease = document.getElementById("disease").value || "ندارد";
            const otherDrugs = document.getElementById("otherDrugs").value || "ندارد";

            // اعتبارسنجی ساده
            if(!age || !weight || !drugName) {
                alert("لطفاً سن، وزن و نام دارو را وارد کنید.");
                return;
            }

            // مدیریت UI
            const btn = document.getElementById("calcBtn");
            const loader = document.getElementById("loader");
            const resultContainer = document.getElementById("result-container");
            const resultText = document.getElementById("result-text");

            btn.disabled = true;
            loader.style.display = "block";
            resultContainer.style.display = "none";
            resultText.innerHTML = "";

            // ساخت پرامپت (دستور) برای هوش مصنوعی
            const systemPrompt = \`شما یک داروساز، پزشک و دامپزشک متخصص بالینی هستید. وظیفه شما محاسبه دوز ایمن دارو و بررسی دقیق تداخلات دارویی است. 
            پاسخ شما باید شامل این بخش‌ها باشد:
            ۱. دوز پیشنهادی (بر اساس وزن و سن)
            ۲. نحوه مصرف (باتوجه به فرم دارو)
            ۳. هشدارهای مربوط به بیماری‌های زمینه‌ای بیمار
            ۴. تداخلات دارویی با سایر داروهای مصرفی (در صورت وجود)
            لحن شما باید کاملاً علمی، دقیق و به زبان فارسی روان باشد. از تگ‌های HTML مانند <b> و <br> برای خوانایی بهتر استفاده کنید.\`;

            const userPrompt = \`لطفاً دوز دارو و تداخلات را برای بیمار زیر محاسبه کن:
            - گونه: \${species}
            - سن: \${age}
            - وزن: \${weight} کیلوگرم
            - نام داروی هدف: \${drugName}
            - فرم دارو: \${drugForm}
            - بیماری‌های زمینه‌ای: \${disease}
            - سایر داروهای در حال مصرف: \${otherDrugs}\`;

            try {
                // درخواست به OpenRouter
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": \`Bearer \${API_KEY}\`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        model: "openai/gpt-4o-mini", // استفاده از مدل سریع و هوشمند که در OpenRouter پشتیبانی می‌شود
                        messages: [
                            { role: "system", content: systemPrompt },
                            { role: "user", content: userPrompt }
                        ],
                        temperature: 0.2 // دمای پایین برای پاسخ‌های دقیق‌تر و علمی‌تر
                    })
                });

                if (!response.ok) {
                    throw new Error("خطا در برقراری ارتباط با سرور هوش مصنوعی.");
                }

                const data = await response.json();
                const aiResponse = data.choices[0].message.content;

                // نمایش نتیجه
                resultText.innerHTML = aiResponse.replace(/\\n/g, "<br>"); // تبدیل اینتر به خط جدید در HTML
                resultContainer.style.display = "block";

            } catch (error) {
                alert("خطایی رخ داد: " + error.message);
            } finally {
                // بازگرداندن UI به حالت عادی
                btn.disabled = false;
                loader.style.display = "none";
            }
        }
    <\/script>

`,className:"w-html-embed"})}),c.jsx(t,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:c.jsxs(t,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(x,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(t,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:c.jsx(d,{children:c.jsx(m,{children:c.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:c.jsxs(P,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[c.jsx(a,{"data-ws-index":"0",className:"w-menu-item",children:c.jsx(e,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(y,{className:"w-text",children:"فروشگاه"})})}),c.jsx(a,{"data-ws-index":"1",className:"w-menu-item",children:c.jsx(e,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(a,{"data-ws-index":"2",className:"w-menu-item",children:c.jsx(S,{children:c.jsx(e,{type:"button",href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(y,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),c.jsx(a,{"data-ws-index":"3",className:"w-menu-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(a,{"data-ws-index":"4",className:"w-menu-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),c.jsxs(t,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[c.jsx(t,{className:"w-box",children:c.jsx(t,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:c.jsx(e,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),c.jsx(d,{children:c.jsx(m,{children:c.jsxs(E,{children:[c.jsx($,{children:c.jsx(T,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:c.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(I,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:c.jsxs(B,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[c.jsxs(t,{className:"w-box cx6c9kw c1nd8hlk",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(x,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(O,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:c.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),c.jsx(t,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:c.jsxs(_,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[c.jsx(s,{className:"w-list-item",children:c.jsx(e,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),c.jsx(s,{className:"w-list-item",children:c.jsx(e,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(s,{className:"w-list-item",children:c.jsx(e,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),c.jsx(s,{className:"w-list-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(s,{className:"w-list-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),c.jsx(e,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),C=l=>{const{origin:n,pathname:i,search:o}=new URL(l);return`${n}${i}${o}`},H=b.memo(({pageKey:l,system:n})=>c.jsx(M,{system:n},l),(l,n)=>l.pageKey===n.pageKey),L=({data:l})=>{const{system:n,resources:i,url:o,pageMeta:u}=l,v=C(o),w=b.useMemo(()=>({imageLoader:p,assetBaseUrl:r,resources:i,breakpoints:R,onError:console.error}),[i]);return c.jsxs(f.Provider,{value:w,children:[c.jsx(j.Provider,{value:o,children:c.jsx(H,{pageKey:v,system:n})}),c.jsx(z,{url:o,pageMeta:u,siteName:g,imageLoader:p,assetBaseUrl:r}),c.jsx(k,{children:u.title})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),U=({})=>{const l={"@context":"https://schema.org","@type":"WebSite",name:g};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(l,null,2)}}),c.jsx("link",{rel:"icon",href:p({src:`${r}${F}`})}),A.map(n=>c.jsx("link",{rel:"preload",href:`${r}${n}`,as:"font",crossOrigin:"anonymous"},n)),D.map(n=>c.jsx("link",{rel:"preload",href:`${r}${n}`,as:"image"},n))]})},K=Object.freeze(Object.defineProperty({__proto__:null,Head:U},Symbol.toStringTag,{value:"Module"})),oc={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-68/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-68/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:K}}};export{oc as configValuesSerialized};
