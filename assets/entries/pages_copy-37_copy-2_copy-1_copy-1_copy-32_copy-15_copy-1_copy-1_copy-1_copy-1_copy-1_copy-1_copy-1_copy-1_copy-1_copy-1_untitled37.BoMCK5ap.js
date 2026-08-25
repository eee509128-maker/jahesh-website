import{j as e,r as d,a as n,i as s,R as u,b as g,P as m,c as f,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],w=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(b,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دستیار کدنویسی هوشمند</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Vazir', 'Tahoma', sans-serif;
            background: #1a1a1a;
            color: #fff;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .header {
            background: linear-gradient(45deg, #0f2027, #203a43, #2c5364);
            border-radius: 30px;
            padding: 40px;
            margin-bottom: 30px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        
        .header h1 {
            font-size: 2.5em;
            background: linear-gradient(45deg, #00ff87, #60efff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 15px;
        }
        
        .api-badge {
            display: inline-block;
            padding: 10px 25px;
            background: linear-gradient(45deg, #00ff87, #60efff);
            color: #1a1a1a;
            border-radius: 50px;
            font-weight: bold;
        }
        
        .main-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
        
        .code-panel {
            background: #2d2d2d;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .panel-header {
            background: #363636;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #00ff87;
        }
        
        .panel-title {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .language-select {
            background: #1a1a1a;
            color: #fff;
            border: 1px solid #00ff87;
            padding: 8px 15px;
            border-radius: 8px;
            cursor: pointer;
        }
        
        .code-area {
            width: 100%;
            min-height: 400px;
            background: #1a1a1a;
            color: #00ff87;
            border: none;
            padding: 20px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            resize: vertical;
            direction: ltr;
        }
        
        .code-area:focus {
            outline: none;
        }
        
        .button-group {
            display: flex;
            gap: 10px;
            padding: 15px;
            background: #363636;
        }
        
        .btn {
            padding: 12px 25px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .btn-primary {
            background: linear-gradient(45deg, #00ff87, #60efff);
            color: #1a1a1a;
        }
        
        .btn-secondary {
            background: #4a4a4a;
            color: #fff;
        }
        
        .btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,255,135,0.3);
        }
        
        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .features-panel {
            background: #2d2d2d;
            border-radius: 20px;
            padding: 30px;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 25px;
        }
        
        .feature-card {
            background: #363636;
            border-radius: 15px;
            padding: 20px;
            cursor: pointer;
            transition: all 0.3s;
            border: 1px solid transparent;
        }
        
        .feature-card:hover {
            border-color: #00ff87;
            transform: translateY(-5px);
        }
        
        .feature-icon {
            font-size: 2em;
            margin-bottom: 10px;
        }
        
        .console-output {
            background: #1a1a1a;
            border-radius: 10px;
            padding: 15px;
            margin-top: 20px;
            font-family: 'Courier New', monospace;
            color: #60efff;
            max-height: 200px;
            overflow-y: auto;
            direction: ltr;
        }
        
        .suggestions-list {
            margin-top: 20px;
        }
        
        .suggestion-item {
            background: #363636;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 10px;
            cursor: pointer;
            transition: all 0.3s;
            border-right: 3px solid #00ff87;
        }
        
        .suggestion-item:hover {
            background: #404040;
            padding-right: 25px;
        }
        
        .loading-indicator {
            display: none;
            text-align: center;
            padding: 20px;
        }
        
        .loading-indicator.active {
            display: block;
        }
        
        .dot-flashing {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: #00ff87;
            margin: 0 5px;
            animation: dot-flashing 1s infinite linear alternate;
        }
        
        @keyframes dot-flashing {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
        }
        
        .shortcut-hint {
            font-size: 12px;
            color: #888;
            margin-top: 10px;
        }
    </style>


    <div class="container">
        <div class="header">
            <h1>👨‍💻 دستیار کدنویسی هوشمند</h1>
            <div class="api-badge">⚡ قدرت گرفته از Groq AI + Llama 3</div>
            <p style="margin-top: 15px; color: #888;">تولید کد | دیباگ | بهینه‌سازی | مستندسازی</p>
        </div>
        
        <div class="main-grid">
            <!-- پنل ویرایشگر کد -->
            <div class="code-panel">
                <div class="panel-header">
                    <div class="panel-title">
                        <span>📝 ویرایشگر کد</span>
                    </div>
                    <select class="language-select" id="languageSelect">
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="java">Java</option>
                        <option value="cpp">C++</option>
                        <option value="php">PHP</option>
                        <option value="sql">SQL</option>
                    </select>
                </div>
                
                <textarea class="code-area" id="codeInput" placeholder="// کد خود را اینجا بنویسید..." spellcheck="false">// یک تابع برای محاسبه فاکتوریل بنویس</textarea>
                
                <div class="button-group">
                    <button class="btn btn-primary" onclick="generateCode()" id="generateBtn">
                        <span>✨</span> تولید کد
                    </button>
                    <button class="btn btn-secondary" onclick="debugCode()" id="debugBtn">
                        <span>🐛</span> دیباگ
                    </button>
                    <button class="btn btn-secondary" onclick="optimizeCode()" id="optimizeBtn">
                        <span>⚡</span> بهینه‌سازی
                    </button>
                    <button class="btn btn-secondary" onclick="documentCode()" id="documentBtn">
                        <span>📚</span> مستندسازی
                    </button>
                </div>
            </div>
            
            <!-- پنل خروجی و پیشنهادات -->
            <div class="features-panel">
                <h2 style="color: #00ff87;">📋 خروجی</h2>
                
                <div class="loading-indicator" id="loadingIndicator">
                    <span class="dot-flashing"></span>
                    <span class="dot-flashing" style="animation-delay: 0.2s;"></span>
                    <span class="dot-flashing" style="animation-delay: 0.4s;"></span>
                    <p style="margin-top: 10px; color: #00ff87;">هوش مصنوعی در حال پردازش...</p>
                </div>
                
                <div class="console-output" id="output">
                    <!-- خروجی اینجا نمایش داده می‌شود -->
                </div>
                
                <h2 style="color: #60efff; margin-top: 30px;">💡 پیشنهادات هوشمند</h2>
                
                <div class="suggestions-list" id="suggestions">
                    <!-- پیشنهادات اینجا نمایش داده می‌شوند -->
                    <div class="suggestion-item" onclick="useSuggestion('بهینه‌سازی حلقه‌ها برای عملکرد بهتر')">
                        <strong>بهینه‌سازی حلقه‌ها</strong>
                        <p style="font-size: 12px; color: #888; margin-top: 5px;">استفاده از forEach به جای for برای خوانایی بهتر</p>
                    </div>
                    <div class="suggestion-item" onclick="useSuggestion('اضافه کردن error handling')">
                        <strong>مدیریت خطا</strong>
                        <p style="font-size: 12px; color: #888; margin-top: 5px;">اضافه کردن try-catch برای مدیریت خطاهای احتمالی</p>
                    </div>
                    <div class="suggestion-item" onclick="useSuggestion('استفاده از const به جای let')">
                        <strong>استفاده از const</strong>
                        <p style="font-size: 12px; color: #888; margin-top: 5px;">برای متغیرهایی که تغییر نمی‌کنند</p>
                    </div>
                </div>
                
                <div class="shortcut-hint">
                    💡 نکته: می‌توانید توضیحات خود را به فارسی بنویسید، هوش مصنوعی متوجه می‌شود!
                </div>
            </div>
        </div>
        
        <!-- بخش ویژگی‌های بیشتر -->
        <div class="features-grid" style="margin-top: 30px;">
            <div class="feature-card" onclick="quickAction('explain')">
                <div class="feature-icon">📖</div>
                <h3>توضیح کد</h3>
                <p style="font-size: 12px; color: #888;">دریافت توضیح خط به خط کد</p>
            </div>
            
            <div class="feature-card" onclick="quickAction('convert')">
                <div class="feature-icon">🔄</div>
                <h3>تبدیل به زبان دیگر</h3>
                <p style="font-size: 12px; color: #888;">تبدیل کد به زبان برنامه‌نویسی دیگر</p>
            </div>
            
            <div class="feature-card" onclick="quickAction('test')">
                <div class="feature-icon">🧪</div>
                <h3>تولید تست</h3>
                <p style="font-size: 12px; color: #888;">ساخت خودکار unit test</p>
            </div>
            
            <div class="feature-card" onclick="quickAction('security')">
                <div class="feature-icon">🔒</div>
                <h3>بررسی امنیتی</h3>
                <p style="font-size: 12px; color: #888;">تشخیص مشکلات امنیتی</p>
            </div>
        </div>
    </div>
    
    <script>
        const API_KEY = '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';
        const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
        
        function showLoading() {
            document.getElementById('loadingIndicator').classList.add('active');
        }
        
        function hideLoading() {
            document.getElementById('loadingIndicator').classList.remove('active');
        }
        
        function setOutput(text, isCode = true) {
            const output = document.getElementById('output');
            if (isCode) {
                output.innerHTML = \`<pre style="color: #60efff; margin: 0;">\${text}</pre>\`;
            } else {
                output.innerHTML = text.replace(/\\n/g, '<br>');
            }
        }
        
        async function callGroqAPI(prompt, systemPrompt = "شما یک دستیار برنامه‌نویسی حرفه‌ای هستید.") {
            showLoading();
            
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': \`Bearer \${API_KEY}\`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [
                            { role: 'system', content: systemPrompt },
                            { role: 'user', content: prompt }
                        ],
                        temperature: 0.7,
                        max_tokens: 2048
                    })
                });
                
                const data = await response.json();
                hideLoading();
                
                if (data.choices && data.choices[0]) {
                    return data.choices[0].message.content;
                } else {
                    throw new Error('پاسخ نامعتبر از API');
                }
            } catch (error) {
                hideLoading();
                throw error;
            }
        }
        
        async function generateCode() {
            const input = document.getElementById('codeInput').value;
            const language = document.getElementById('languageSelect').value;
            const btn = document.getElementById('generateBtn');
            
            if (!input) {
                alert('لطفاً توضیحات یا کد اولیه را وارد کنید!');
                return;
            }
            
            btn.disabled = true;
            
            try {
                const prompt = \`با توجه به درخواست زیر، کد \${language} بنویس. فقط کد را برگردان و توضیح اضافی نده.
                
                درخواست: \${input}\`;
                
                const code = await callGroqAPI(prompt, 'شما یک برنامه‌نویس حرفه‌ای هستید.');
                setOutput(code);
            } catch (error) {
                setOutput('خطا: ' + error.message, false);
            } finally {
                btn.disabled = false;
            }
        }
        
        async function debugCode() {
            const code = document.getElementById('codeInput').value;
            const language = document.getElementById('languageSelect').value;
            const btn = document.getElementById('debugBtn');
            
            if (!code) {
                alert('لطفاً کدی برای دیباگ وارد کنید!');
                return;
            }
            
            btn.disabled = true;
            
            try {
                const prompt = \`کد \${language} زیر را دیباگ کن. مشکلات را پیدا کن و کد اصلاح شده را برگردان.
                
                کد:
                \${code}\`;
                
                const debugged = await callGroqAPI(prompt, 'شما یک متخصص دیباگ و رفع خطا هستید.');
                setOutput(debugged);
            } catch (error) {
                setOutput('خطا: ' + error.message, false);
            } finally {
                btn.disabled = false;
            }
        }
        
        async function optimizeCode() {
            const code = document.getElementById('codeInput').value;
            const language = document.getElementById('languageSelect').value;
            const btn = document.getElementById('optimizeBtn');
            
            if (!code) {
                alert('لطفاً کدی برای بهینه‌سازی وارد کنید!');
                return;
            }
            
            btn.disabled = true;
            
            try {
                const prompt = \`کد \${language} زیر را از نظر performance و best practices بهینه کن. کد بهینه شده را برگردان.
                
                کد:
                \${code}\`;
                
                const optimized = await callGroqAPI(prompt, 'شما یک متخصص بهینه‌سازی کد هستید.');
                setOutput(optimized);
            } catch (error) {
                setOutput('خطا: ' + error.message, false);
            } finally {
                btn.disabled = false;
            }
        }
        
        async function documentCode() {
            const code = document.getElementById('codeInput').value;
            const language = document.getElementById('languageSelect').value;
            const btn = document.getElementById('documentBtn');
            
            if (!code) {
                alert('لطفاً کدی برای مستندسازی وارد کنید!');
                return;
            }
            
            btn.disabled = true;
            
            try {
                const prompt = \`برای کد \${language} زیر، کامنت‌های حرفه‌ای و مستندات کامل بنویس.
                
                کد:
                \${code}\`;
                
                const documented = await callGroqAPI(prompt, 'شما یک متخصص مستندسازی کد هستید.');
                setOutput(documented);
            } catch (error) {
                setOutput('خطا: ' + error.message, false);
            } finally {
                btn.disabled = false;
            }
        }
        
        async function quickAction(action) {
            const code = document.getElementById('codeInput').value;
            const language = document.getElementById('languageSelect').value;
            
            if (!code) {
                alert('لطفاً کدی وارد کنید!');
                return;
            }
            
            let prompt = '';
            let title = '';
            
            switch(action) {
                case 'explain':
                    prompt = \`کد \${language} زیر را خط به خط توضیح بده:
                    \${code}\`;
                    title = 'توضیح کد';
                    break;
                case 'convert':
                    prompt = \`کد \${language} زیر را به زبان دیگر تبدیل کن (پایتون):
                    \${code}\`;
                    title = 'تبدیل کد';
                    break;
                case 'test':
                    prompt = \`برای کد \${language} زیر، تست‌های unit test بنویس:
                    \${code}\`;
                    title = 'تولید تست';
                    break;
                case 'security':
                    prompt = \`کد \${language} زیر را از نظر مشکلات امنیتی بررسی کن:
                    \${code}\`;
                    title = 'بررسی امنیتی';
                    break;
            }
            
            try {
                const result = await callGroqAPI(prompt);
                setOutput(result);
            } catch (error) {
                setOutput('خطا: ' + error.message, false);
            }
        }
        
        function useSuggestion(text) {
            document.getElementById('codeInput').value += '\\n// ' + text;
        }
        
        // اضافه کردن پیشنهادات بیشتر
        function addSuggestion(title, description) {
            const suggestions = document.getElementById('suggestions');
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.onclick = () => useSuggestion(title);
            item.innerHTML = \`<strong>\${title}</strong><p style="font-size: 12px; color: #888; margin-top: 5px;">\${description}</p>\`;
            suggestions.appendChild(item);
        }
        
        // پیشنهادات اولیه
        window.onload = function() {
            addSuggestion('استفاده از async/await', 'به جای Promise.then برای کد خواناتر');
            addSuggestion('افزودن TypeScript', 'برای تایپ‌سازی بهتر و کاهش خطا');
            addSuggestion('جداسازی منطق', 'تفکیک کد به ماژول‌های کوچکتر');
            addSuggestion('استفاده از design patterns', 'الگوهای طراحی مناسب برای این مورد');
        };
    <\/script>

`,className:"w-html-embed"})})}),S=o=>{const{origin:t,pathname:i,search:a}=new URL(o);return`${t}${i}${a}`},I=d.memo(({pageKey:o,system:t})=>e.jsx(w,{system:t},o),(o,t)=>o.pageKey===t.pageKey),P=({data:o})=>{const{system:t,resources:i,url:a,pageMeta:r}=o,l=S(a),p=d.useMemo(()=>({imageLoader:s,assetBaseUrl:n,resources:i,breakpoints:x,onError:console.error}),[i]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(g.Provider,{value:a,children:e.jsx(I,{pageKey:l,system:t})}),e.jsx(m,{url:a,pageMeta:r,siteName:c,imageLoader:s,assetBaseUrl:n}),e.jsx(f,{children:r.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),E=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${n}${h}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-37/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-37/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{C as configValuesSerialized};
