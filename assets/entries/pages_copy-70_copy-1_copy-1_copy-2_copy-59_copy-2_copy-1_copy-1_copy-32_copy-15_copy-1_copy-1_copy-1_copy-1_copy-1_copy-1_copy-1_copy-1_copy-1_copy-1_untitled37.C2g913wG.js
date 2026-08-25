import{j as c,r as b,a as l,i as h,R as w,b as j,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m as p,C as N,P as T,A as s,$ as B}from"../chunks/chunk-CJTZdOzc.js";import{U as m}from"../chunks/chunk-BTtE8iXS.js";import{n}from"../chunks/chunk-CRUfvgxf.js";import{n as y}from"../chunks/chunk-RvLaVuUh.js";import{g as e}from"../chunks/chunk-BKjYWtT8.js";import{n as S}from"../chunks/chunk-Bx5-62GJ.js";import{d as u}from"../chunks/chunk-ClMSjCia.js";import{d as E,i as r}from"../chunks/chunk-DWuKyx5h.js";import{O as I,x as P,M as _,R as L,$ as C}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const g="jahesh",A=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],$="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",O=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],R=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],M=a=>c.jsxs("body",{className:"w-element",children:[c.jsx(m,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎵 ساخت موزیک با هوش مصنوعی</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 24px;
            padding: clamp(20px, 5vw, 40px);
            width: 100%;
            max-width: 700px;
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
        }

        .header {
            text-align: center;
            margin-bottom: 28px;
        }

        .header .emoji {
            font-size: clamp(40px, 10vw, 64px);
            display: block;
            margin-bottom: 12px;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .header h1 {
            color: #fff;
            font-size: clamp(18px, 4vw, 26px);
            margin-bottom: 6px;
        }

        .header p {
            color: rgba(255,255,255,0.5);
            font-size: clamp(12px, 2.5vw, 14px);
        }

        label.input-label {
            display: block;
            color: rgba(255,255,255,0.8);
            margin-bottom: 10px;
            font-size: 14px;
        }

        .input-row {
            display: flex;
            gap: 10px;
            margin-bottom: 12px;
        }

        .topic-input {
            flex: 1;
            padding: 13px 16px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 12px;
            color: #fff;
            font-size: 15px;
            outline: none;
            transition: all 0.3s;
            font-family: inherit;
            direction: rtl;
        }

        .topic-input::placeholder { color: rgba(255,255,255,0.35); }
        .topic-input:focus {
            border-color: #e94560;
            box-shadow: 0 0 0 3px rgba(233,69,96,0.25);
        }

        .generate-btn {
            padding: 13px 22px;
            background: linear-gradient(135deg, #e94560, #a855f7);
            border: none;
            border-radius: 12px;
            color: #fff;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s;
            white-space: nowrap;
            font-family: inherit;
            font-weight: bold;
        }

        .generate-btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(233,69,96,0.45);
        }

        .generate-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .style-select {
            width: 100%;
            padding: 11px 16px;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.18);
            border-radius: 12px;
            color: #fff;
            font-size: 14px;
            outline: none;
            font-family: inherit;
            cursor: pointer;
            margin-bottom: 14px;
        }

        .style-select option { background: #1a1a2e; color: #fff; }

        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }

        .tag {
            padding: 6px 13px;
            background: rgba(168,85,247,0.18);
            border: 1px solid rgba(168,85,247,0.35);
            border-radius: 20px;
            color: #c084fc;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .tag:hover { background: rgba(168,85,247,0.4); transform: scale(1.05); }

        /* Loading */
        .loading { display: none; text-align: center; padding: 25px 0; }
        .loading.active { display: block; }

        .music-bars {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 5px;
            height: 44px;
            margin-bottom: 14px;
        }

        .bar {
            width: 7px;
            background: linear-gradient(to top, #e94560, #a855f7);
            border-radius: 4px;
            animation: barAnim 0.9s ease-in-out infinite;
        }

        .bar:nth-child(1) { height: 18px; animation-delay: 0s; }
        .bar:nth-child(2) { height: 30px; animation-delay: 0.12s; }
        .bar:nth-child(3) { height: 44px; animation-delay: 0.24s; }
        .bar:nth-child(4) { height: 25px; animation-delay: 0.36s; }
        .bar:nth-child(5) { height: 38px; animation-delay: 0.24s; }
        .bar:nth-child(6) { height: 22px; animation-delay: 0.12s; }
        .bar:nth-child(7) { height: 15px; animation-delay: 0s; }

        @keyframes barAnim {
            0%,100% { transform: scaleY(0.35); opacity: 0.55; }
            50% { transform: scaleY(1); opacity: 1; }
        }

        .loading p { color: rgba(255,255,255,0.65); font-size: 14px; }

        /* Error */
        .error-box {
            display: none;
            background: rgba(233,69,96,0.15);
            border: 1px solid rgba(233,69,96,0.4);
            border-radius: 12px;
            padding: 14px 18px;
            color: #ff8fa3;
            font-size: 13px;
            margin-top: 10px;
        }
        .error-box.active { display: block; }

        /* Result */
        .result-section { display: none; margin-top: 10px; }
        .result-section.active { display: block; }

        .result-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }

        .result-title {
            color: #e94560;
            font-size: 16px;
            font-weight: bold;
        }

        .btn-group { display: flex; gap: 8px; }

        .copy-btn, .retry-btn {
            padding: 7px 14px;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 8px;
            color: #fff;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.2s;
            font-family: inherit;
        }

        .copy-btn:hover, .retry-btn:hover { background: rgba(255,255,255,0.18); }

        .lyrics-box {
            background: rgba(0,0,0,0.35);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 22px 26px;
            color: rgba(255,255,255,0.92);
            font-size: clamp(14px, 2.5vw, 16px);
            line-height: 2.2;
            white-space: pre-wrap;
            direction: rtl;
            text-align: right;
        }

        .divider {
            height: 1px;
            background: rgba(255,255,255,0.08);
            margin: 20px 0;
        }
    </style>


<div class="container">
    <div class="header">
        <span class="emoji">🎵</span>
        <h1>ساخت ترانه با هوش مصنوعی</h1>
        <p>موضوع بده، ترانه‌ات آماده‌ست! 🎶</p>
    </div>

    <label class="input-label">🎤 موضوع ترانه را وارد کن:</label>
    <div class="input-row">
        <input type="text" class="topic-input" id="topicInput" placeholder="مثلاً: عشق، دریا، تهران، دوری...">
        <button class="generate-btn" id="generateBtn" onclick="generateLyrics()">🎼 بساز</button>
    </div>

    <select class="style-select" id="styleSelect">
        <option value="pop">🎸 پاپ</option>
        <option value="rap">🎤 رپ</option>
        <option value="classical">🎻 سنتی / کلاسیک ایرانی</option>
        <option value="romantic">💝 عاشقانه</option>
        <option value="sad">😢 غمگین</option>
        <option value="happy">😄 شاد و پرانرژی</option>
        <option value="rock">🤘 راک</option>
    </select>

    <div class="tags">
        <span class="tag" onclick="setTopic('عشق')">💖 عشق</span>
        <span class="tag" onclick="setTopic('وطن')">🇮🇷 وطن</span>
        <span class="tag" onclick="setTopic('دریا')">🌊 دریا</span>
        <span class="tag" onclick="setTopic('بهار')">🌸 بهار</span>
        <span class="tag" onclick="setTopic('دوستی')">🤝 دوستی</span>
        <span class="tag" onclick="setTopic('رویا')">✨ رویا</span>
        <span class="tag" onclick="setTopic('تنهایی')">🌙 تنهایی</span>
        <span class="tag" onclick="setTopic('امید')">🌅 امید</span>
    </div>

    <div class="divider"></div>

    <div class="loading" id="loading">
        <div class="music-bars">
            <div class="bar"></div><div class="bar"></div><div class="bar"></div>
            <div class="bar"></div><div class="bar"></div><div class="bar"></div>
            <div class="bar"></div>
        </div>
        <p>🎵 دارم ترانه می‌نویسم، صبر کن...</p>
    </div>

    <div class="error-box" id="errorBox"></div>

    <div class="result-section" id="resultSection">
        <div class="result-header">
            <span class="result-title">🎶 ترانه آماده‌ست!</span>
            <div class="btn-group">
                <button class="retry-btn" onclick="generateLyrics()">🔄 دوباره</button>
                <button class="copy-btn" id="copyBtn" onclick="copyLyrics()">📋 کپی</button>
            </div>
        </div>
        <div class="lyrics-box" id="lyricsBox"></div>
    </div>
</div>

<script>
    const API_KEY = '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';

    function setTopic(topic) {
        document.getElementById('topicInput').value = topic;
        document.getElementById('topicInput').focus();
    }

    async function generateLyrics() {
        const topic = document.getElementById('topicInput').value.trim();
        const style = document.getElementById('styleSelect').value;

        if (!topic) {
            document.getElementById('topicInput').focus();
            document.getElementById('topicInput').style.borderColor = '#e94560';
            setTimeout(() => document.getElementById('topicInput').style.borderColor = '', 1500);
            return;
        }

        const btn = document.getElementById('generateBtn');
        const loading = document.getElementById('loading');
        const resultSection = document.getElementById('resultSection');
        const errorBox = document.getElementById('errorBox');

        btn.disabled = true;
        loading.classList.add('active');
        resultSection.classList.remove('active');
        errorBox.classList.remove('active');

        const styleMap = {
            pop: 'پاپ ایرانی مدرن',
            rap: 'رپ فارسی با قافیه‌بندی قوی و فلوی روان',
            classical: 'شعر سنتی و کلاسیک ایرانی با وزن عروضی',
            romantic: 'عاشقانه و احساسی و دلنشین',
            sad: 'غمگین، دلتنگ‌انگیز و پر از حس',
            happy: 'شاد، پرانرژی و نشاط‌آور',
            rock: 'راک با احساس قوی و بیان جسورانه'
        };

        const prompt = \`یک ترانه فارسی زیبا با موضوع "\${topic}" به سبک \${styleMap[style]} بنویس.

ساختار:
🎵 عنوان: [نام ترانه]

[ورس ۱]
(۴ تا ۶ خط با قافیه‌بندی مناسب)

[کورس]
(۴ خط - بخش اصلی و به‌یادماندنی)

[ورس ۲]
(۴ تا ۶ خط)

[کورس]
(تکرار)

[آوتر / پایان‌بندی]
(۲ تا ۳ خط پایانی)

فقط متن ترانه را بنویس. بدون توضیح اضافه. قافیه و ریتم حتماً رعایت شود.\`;

        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': \`Bearer \${API_KEY}\`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'https://music-ai-fa.app',
                    'X-Title': 'Persian Music AI'
                },
                body: JSON.stringify({
                    model: 'openai/gpt-4o-mini',
                    messages: [
                        {
                            role: 'system',
                            content: 'تو یک ترانه‌سرای حرفه‌ای ایرانی هستی که ترانه‌های زیبا، احساسی و قافیه‌دار می‌نویسی. ترانه‌هایت همیشه دارای ریتم، قافیه و محتوای عمیق هستند.'
                        },
                        { role: 'user', content: prompt }
                    ],
                    max_tokens: 1200,
                    temperature: 0.85
                })
            });

            if (!response.ok) {
                const err = await response.json().catch(() => ({}));
                throw new Error(err.error?.message || \`خطای سرور: \${response.status}\`);
            }

            const data = await response.json();
            const lyrics = data.choices?.[0]?.message?.content?.trim();

            if (!lyrics) throw new Error('پاسخی دریافت نشد');

            document.getElementById('lyricsBox').textContent = lyrics;
            resultSection.classList.add('active');

        } catch (error) {
            errorBox.textContent = '❌ خطا: ' + error.message;
            errorBox.classList.add('active');
        } finally {
            btn.disabled = false;
            loading.classList.remove('active');
        }
    }

    function copyLyrics() {
        const text = document.getElementById('lyricsBox').textContent;
        const btn = document.getElementById('copyBtn');
        navigator.clipboard.writeText(text).then(() => {
            btn.textContent = '✅ کپی شد!';
            setTimeout(() => btn.textContent = '📋 کپی', 2500);
        }).catch(() => {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            btn.textContent = '✅ کپی شد!';
            setTimeout(() => btn.textContent = '📋 کپی', 2500);
        });
    }

    document.getElementById('topicInput').addEventListener('keydown', e => {
        if (e.key === 'Enter') generateLyrics();
    });
<\/script>

`,className:"w-html-embed"}),c.jsx(n,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:c.jsxs(n,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[c.jsx(d,{children:c.jsx(p,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(n,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:c.jsx(d,{children:c.jsx(p,{children:c.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:c.jsxs(T,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[c.jsx(s,{"data-ws-index":"0",className:"w-menu-item",children:c.jsx(e,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(y,{className:"w-text",children:"فروشگاه"})})}),c.jsx(s,{"data-ws-index":"1",className:"w-menu-item",children:c.jsx(e,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(s,{"data-ws-index":"2",className:"w-menu-item",children:c.jsx(B,{children:c.jsx(e,{type:"button",href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(y,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),c.jsx(s,{"data-ws-index":"3",className:"w-menu-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(s,{"data-ws-index":"4",className:"w-menu-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),c.jsxs(n,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[c.jsx(n,{className:"w-box",children:c.jsx(n,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:c.jsx(e,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),c.jsx(d,{children:c.jsx(p,{children:c.jsxs(I,{children:[c.jsx(P,{children:c.jsx(S,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:c.jsx(m,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(_,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:c.jsxs(L,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[c.jsxs(n,{className:"w-box cx6c9kw c1nd8hlk",children:[c.jsx(d,{children:c.jsx(p,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(C,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:c.jsx(m,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),c.jsx(n,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:c.jsxs(E,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(r,{className:"w-list-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),c.jsx(e,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),F=a=>{const{origin:t,pathname:i,search:o}=new URL(a);return`${t}${i}${o}`},U=b.memo(({pageKey:a,system:t})=>c.jsx(M,{system:t},a),(a,t)=>a.pageKey===t.pageKey),H=({data:a})=>{const{system:t,resources:i,url:o,pageMeta:x}=a,v=F(o),f=b.useMemo(()=>({imageLoader:h,assetBaseUrl:l,resources:i,breakpoints:A,onError:console.error}),[i]);return c.jsxs(w.Provider,{value:f,children:[c.jsx(j.Provider,{value:o,children:c.jsx(U,{pageKey:v,system:t})}),c.jsx(z,{url:o,pageMeta:x,siteName:g,imageLoader:h,assetBaseUrl:l}),c.jsx(k,{children:x.title})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),D=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:g};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),c.jsx("link",{rel:"icon",href:h({src:`${l}${$}`})}),O.map(t=>c.jsx("link",{rel:"preload",href:`${l}${t}`,as:"font",crossOrigin:"anonymous"},t)),R.map(t=>c.jsx("link",{rel:"preload",href:`${l}${t}`,as:"image"},t))]})},Y=Object.freeze(Object.defineProperty({__proto__:null,Head:D},Symbol.toStringTag,{value:"Module"})),oc={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-70/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-70/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Y}}};export{oc as configValuesSerialized};
