import{j as e,r as d,a as n,i as s,R as g,b as u,P as m,c as b,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",f=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],w=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚀 داشبورد هوشمند پیشرفته با Groq AI</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Vazir', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
            position: relative;
            overflow-x: hidden;
        }
        
        /* انیمیشن پس زمینه */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            animation: gradientShift 10s ease infinite;
        }
        
        @keyframes gradientShift {
            0% { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
            50% { background: linear-gradient(135deg, #764ba2 0%, #667eea 100%); }
            100% { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
        }
        
        h1 {
            text-align: center;
            color: white;
            font-size: 2.5em;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            animation: glow 2s ease-in-out infinite;
        }
        
        @keyframes glow {
            0%, 100% { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
            50% { text-shadow: 0 0 20px rgba(255,255,255,0.8); }
        }
        
        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            backdrop-filter: blur(10px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            animation: fadeInUp 0.5s ease-out;
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        
        .card-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 10px;
        }
        
        .card-header i {
            font-size: 28px;
            margin-left: 10px;
            color: #667eea;
        }
        
        .card-header h2 {
            font-size: 1.3em;
            color: #333;
        }
        
        /* استایل‌های چت با هوش مصنوعی */
        .chat-container {
            grid-column: span 2;
            background: rgba(255, 255, 255, 0.98);
        }
        
        .chat-messages {
            height: 300px;
            overflow-y: auto;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 15px;
            margin-bottom: 15px;
        }
        
        .message {
            margin-bottom: 15px;
            padding: 10px 15px;
            border-radius: 15px;
            max-width: 80%;
            animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .user-message {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin-left: auto;
            border-bottom-left-radius: 5px;
        }
        
        .ai-message {
            background: white;
            color: #333;
            margin-right: auto;
            border-bottom-right-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .chat-input-area {
            display: flex;
            gap: 10px;
        }
        
        .chat-input {
            flex: 1;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 14px;
            transition: border-color 0.3s;
        }
        
        .chat-input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .send-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.3s;
        }
        
        .send-btn:hover {
            transform: scale(1.05);
        }
        
        .send-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        /* استایل‌های تولید محتوا */
        .generator-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 25px;
            border-radius: 20px;
            color: white;
            margin-top: 20px;
        }
        
        .generator-tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        
        .tab-btn {
            background: rgba(255,255,255,0.2);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 14px;
        }
        
        .tab-btn.active {
            background: white;
            color: #667eea;
        }
        
        .tab-btn:hover {
            background: rgba(255,255,255,0.3);
        }
        
        .generator-content {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 10px;
            min-height: 150px;
        }
        
        .generator-input {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 10px;
            margin-bottom: 15px;
            font-size: 14px;
        }
        
        .generate-btn {
            background: white;
            color: #667eea;
            border: none;
            padding: 12px 25px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
        }
        
        .generate-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        /* استایل‌های ابزارهای هوشمند */
        .tools-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .tool-item {
            background: white;
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .tool-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        
        .tool-icon {
            font-size: 40px;
            margin-bottom: 10px;
        }
        
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .typing-indicator {
            display: flex;
            gap: 5px;
            padding: 10px;
            background: white;
            border-radius: 15px;
            width: fit-content;
        }
        
        .typing-dot {
            width: 8px;
            height: 8px;
            background: #667eea;
            border-radius: 50%;
            animation: typingBounce 1.4s infinite ease-in-out;
        }
        
        .typing-dot:nth-child(1) { animation-delay: 0s; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes typingBounce {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-10px); }
        }
        
        .error-message {
            color: #e74c3c;
            text-align: center;
            padding: 10px;
            background: rgba(231, 76, 60, 0.1);
            border-radius: 10px;
        }
        
        .success-message {
            color: #27ae60;
            text-align: center;
            padding: 10px;
            background: rgba(39, 174, 96, 0.1);
            border-radius: 10px;
        }
        
        .copy-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            margin-top: 10px;
        }
        
        .copy-btn:hover {
            background: #764ba2;
        }
    </style>


    <div class="bg-animation"></div>
    
    <div class="container">
        <h1>🤖 دستیار هوشمند Groq AI</h1>
        
        <div class="dashboard">
            <!-- کارت چت با هوش مصنوعی -->
            <div class="card chat-container">
                <div class="card-header">
                    <i>💬</i>
                    <h2>چت با Groq AI (Llama 3)</h2>
                </div>
                
                <div class="chat-messages" id="chatMessages">
                    <div class="message ai-message">
                        سلام! من دستیار هوش مصنوعی Groq هستم. چطور می‌تونم کمکت کنم؟
                    </div>
                </div>
                
                <div class="chat-input-area">
                    <input type="text" class="chat-input" id="chatInput" placeholder="سوال خود را بپرسید..." onkeypress="if(event.key === 'Enter') sendMessage()">
                    <button class="send-btn" id="sendBtn" onclick="sendMessage()">ارسال</button>
                </div>
            </div>

            <!-- کارت تولید محتوای خلاقانه -->
            <div class="card">
                <div class="card-header">
                    <i>🎨</i>
                    <h2>تولید محتوای خلاقانه</h2>
                </div>
                
                <div class="generator-tabs">
                    <button class="tab-btn active" onclick="switchTab('story')">داستان</button>
                    <button class="tab-btn" onclick="switchTab('poem')">شعر</button>
                    <button class="tab-btn" onclick="switchTab('code')">کد</button>
                    <button class="tab-btn" onclick="switchTab('idea')">ایده</button>
                </div>
                
                <div class="generator-content" id="generatorContent">
                    <textarea class="generator-input" id="generatorInput" rows="3" placeholder="موضوع مورد نظر را وارد کنید..."></textarea>
                    <button class="generate-btn" onclick="generateCreative()">✨ تولید محتوا</button>
                    <div id="creativeResult" style="margin-top: 15px; padding: 10px; background: rgba(255,255,255,0.9); border-radius: 10px; color: #333; min-height: 50px;"></div>
                </div>
            </div>

            <!-- کارت ابزارهای هوشمند -->
            <div class="card">
                <div class="card-header">
                    <i>🛠️</i>
                    <h2>ابزارهای هوشمند</h2>
                </div>
                
                <div class="tools-grid">
                    <div class="tool-item" onclick="useTool('translate')">
                        <div class="tool-icon">🌐</div>
                        <div>ترجمه هوشمند</div>
                    </div>
                    <div class="tool-item" onclick="useTool('summarize')">
                        <div class="tool-icon">📝</div>
                        <div>خلاصه‌سازی</div>
                    </div>
                    <div class="tool-item" onclick="useTool('analyze')">
                        <div class="tool-icon">📊</div>
                        <div>تحلیل احساسات</div>
                    </div>
                    <div class="tool-item" onclick="useTool('improve')">
                        <div class="tool-icon">✨</div>
                        <div>بهبود متن</div>
                    </div>
                </div>
                
                <div id="toolResult" style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 10px; min-height: 80px;">
                    روی هر ابزار کلیک کنید...
                </div>
            </div>
        </div>

        <!-- بخش اطلاعات اضافی -->
        <div class="generator-box" id="extraInfo">
            <h2 style="margin-bottom: 15px;">📊 آمار و اطلاعات لحظه‌ای</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                    <div style="font-size: 0.9em;">درخواست‌های امروز</div>
                    <div style="font-size: 2em; font-weight: bold;" id="requestCount">0</div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                    <div style="font-size: 0.9em;">موجودیت‌های پردازش شده</div>
                    <div style="font-size: 2em; font-weight: bold;" id="processedCount">0</div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                    <div style="font-size: 0.9em;">زمان پاسخگویی</div>
                    <div style="font-size: 2em; font-weight: bold;" id="responseTime">~1.2s</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // کلید API شما
        const GROQ_API_KEY = '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';
        const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
        
        let currentTab = 'story';
        let requestCount = 0;
        
        // تابع ارسال پیام به Groq API
        async function sendToGroq(messages, temperature = 0.7) {
            try {
                const response = await fetch(GROQ_API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': \`Bearer \${GROQ_API_KEY}\`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'llama3-8b-8192',
                        messages: messages,
                        temperature: temperature,
                        max_tokens: 1024,
                        top_p: 1,
                        stream: false
                    })
                });
                
                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                
                const data = await response.json();
                requestCount++;
                document.getElementById('requestCount').textContent = requestCount;
                
                return data.choices[0].message.content;
            } catch (error) {
                console.error('Error calling Groq API:', error);
                throw error;
            }
        }
        
        // تابع ارسال پیام در چت
        async function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            const sendBtn = document.getElementById('sendBtn');
            const chatMessages = document.getElementById('chatMessages');
            
            if (!message) return;
            
            // اضافه کردن پیام کاربر
            chatMessages.innerHTML += \`<div class="message user-message">\${message}</div>\`;
            input.value = '';
            sendBtn.disabled = true;
            
            // نمایش اندیکاتور تایپ
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'typing-indicator';
            typingIndicator.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
            chatMessages.appendChild(typingIndicator);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            try {
                // ارسال به API
                const response = await sendToGroq([
                    {
                        role: 'system',
                        content: 'شما یک دستیار هوشمند و مفید هستید. به زبان فارسی پاسخ دهید.'
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ]);
                
                // حذف اندیکاتور تایپ
                typingIndicator.remove();
                
                // اضافه کردن پاسخ AI
                chatMessages.innerHTML += \`<div class="message ai-message">\${response}</div>\`;
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
            } catch (error) {
                typingIndicator.remove();
                chatMessages.innerHTML += \`<div class="message ai-message error-message">❌ خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.</div>\`;
            }
            
            sendBtn.disabled = false;
        }
        
        // تابع تولید محتوای خلاقانه
        async function generateCreative() {
            const input = document.getElementById('generatorInput');
            const topic = input.value.trim();
            const resultDiv = document.getElementById('creativeResult');
            
            if (!topic) {
                resultDiv.innerHTML = '<span class="error-message">❌ لطفاً یک موضوع وارد کنید</span>';
                return;
            }
            
            resultDiv.innerHTML = '<div class="loading"></div> در حال تولید...';
            
            let prompt = '';
            switch(currentTab) {
                case 'story':
                    prompt = \`یک داستان کوتاه و خلاقانه درباره "\${topic}" بنویس. داستان جذاب و الهام‌بخش باشد.\`;
                    break;
                case 'poem':
                    prompt = \`یک شعر زیبا درباره "\${topic}" بسرای. شعر احساسی و دلنشین باشد.\`;
                    break;
                case 'code':
                    prompt = \`یک کد برنامه‌نویسی برای "\${topic}" بنویس. کد تمیز و با کامنت‌های فارسی باشد.\`;
                    break;
                case 'idea':
                    prompt = \`چند ایده خلاقانه و نوآورانه درباره "\${topic}" ارائه بده. ایده‌ها کاربردی و جذاب باشند.\`;
                    break;
            }
            
            try {
                const response = await sendToGroq([
                    {
                        role: 'system',
                        content: 'شما یک تولیدکننده محتوای خلاق و حرفه‌ای هستید. پاسخ‌های شما باید منحصر‌به‌فرد و با کیفیت باشد.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ], 0.8);
                
                resultDiv.innerHTML = response;
                
                // اضافه کردن دکمه کپی
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-btn';
                copyBtn.innerHTML = '📋 کپی';
                copyBtn.onclick = () => {
                    navigator.clipboard.writeText(response);
                    copyBtn.innerHTML = '✅ کپی شد!';
                    setTimeout(() => {
                        copyBtn.innerHTML = '📋 کپی';
                    }, 2000);
                };
                resultDiv.appendChild(copyBtn);
                
            } catch (error) {
                resultDiv.innerHTML = '<span class="error-message">❌ خطا در تولید محتوا</span>';
            }
        }
        
        // تابع استفاده از ابزارهای هوشمند
        async function useTool(tool) {
            const toolResult = document.getElementById('toolResult');
            
            let prompt = '';
            switch(tool) {
                case 'translate':
                    prompt = 'لطفاً یک متن برای ترجمه وارد کنید...';
                    break;
                case 'summarize':
                    prompt = 'لطفاً یک متن برای خلاصه‌سازی وارد کنید...';
                    break;
                case 'analyze':
                    prompt = 'لطفاً یک متن برای تحلیل احساسات وارد کنید...';
                    break;
                case 'improve':
                    prompt = 'لطفاً یک متن برای بهبود وارد کنید...';
                    break;
            }
            
            const text = prompt(prompt, '');
            if (!text) return;
            
            toolResult.innerHTML = '<div class="loading"></div> در حال پردازش...';
            
            let systemPrompt = '';
            switch(tool) {
                case 'translate':
                    systemPrompt = \`متن زیر را به فارسی روان ترجمه کن (اگر انگلیسی است) یا به انگلیسی (اگر فارسی است):\\n\\n\${text}\`;
                    break;
                case 'summarize':
                    systemPrompt = \`متن زیر را خلاصه کن و نکات مهم را به صورت bullet point بنویس:\\n\\n\${text}\`;
                    break;
                case 'analyze':
                    systemPrompt = \`احساسات و لحن متن زیر را تحلیل کن. مشخص کن که مثبت، منفی یا خنثی است:\\n\\n\${text}\`;
                    break;
                case 'improve':
                    systemPrompt = \`متن زیر را از نظر نگارشی بهبود بده و آن را حرفه‌ای‌تر کن:\\n\\n\${text}\`;
                    break;
            }
            
            try {
                const response = await sendToGroq([
                    {
                        role: 'system',
                        content: 'شما یک ابزار هوشمند و دقیق هستید.'
                    },
                    {
                        role: 'user',
                        content: systemPrompt
                    }
                ], 0.5);
                
                toolResult.innerHTML = response;
                
                // اضافه کردن دکمه کپی
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-btn';
                copyBtn.innerHTML = '📋 کپی';
                copyBtn.onclick = () => {
                    navigator.clipboard.writeText(response);
                    copyBtn.innerHTML = '✅ کپی شد!';
                    setTimeout(() => {
                        copyBtn.innerHTML = '📋 کپی';
                    }, 2000);
                };
                toolResult.appendChild(copyBtn);
                
            } catch (error) {
                toolResult.innerHTML = '<span class="error-message">❌ خطا در پردازش</span>';
            }
        }
        
        // تابع تغییر تب
        function switchTab(tab) {
            currentTab = tab;
            
            // بروزرسانی کلاس active
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // تغییر placeholder
            const input = document.getElementById('generatorInput');
            switch(tab) {
                case 'story':
                    input.placeholder = 'موضوع داستان را وارد کنید...';
                    break;
                case 'poem':
                    input.placeholder = 'موضوع شعر را وارد کنید...';
                    break;
                case 'code':
                    input.placeholder = 'تابع یا برنامه مورد نظر را وارد کنید...';
                    break;
                case 'idea':
                    input.placeholder = 'حوزه مورد نظر برای ایده‌پردازی را وارد کنید...';
                    break;
            }
            
            document.getElementById('creativeResult').innerHTML = '';
        }
        
        // تابع پیشنهاد سریع
        async function quickSuggestion() {
            const suggestions = [
                'یک داستان کوتاه درباره دوستی انسان و ربات',
                'شعر درباره بهار و طبیعت',
                'یک تابع برای محاسبه اعداد فیبوناچی',
                'ایده‌هایی برای یک استارتاپ موفق'
            ];
            
            const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
            document.getElementById('generatorInput').value = randomSuggestion;
            await generateCreative();
        }
        
        // اضافه کردن پیشنهاد سریع
        const quickSuggestionBtn = document.createElement('button');
        quickSuggestionBtn.className = 'generate-btn';
        quickSuggestionBtn.innerHTML = '🎲 پیشنهاد سریع';
        quickSuggestionBtn.onclick = quickSuggestion;
        quickSuggestionBtn.style.marginRight = '10px';
        
        document.querySelector('.generator-content').insertBefore(
            quickSuggestionBtn,
            document.getElementById('creativeResult')
        );
        
        // بروزرسانی آمار
        setInterval(() => {
            const randomTime = (Math.random() * 2 + 0.5).toFixed(1);
            document.getElementById('responseTime').textContent = \`~\${randomTime}s\`;
            document.getElementById('processedCount').textContent = requestCount * 2 + Math.floor(Math.random() * 10);
        }, 5000);
        
        // اضافه کردن قابلیت ارسال با Enter
        document.getElementById('chatInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        console.log('🚀 برنامه با موفقیت بارگذاری شد!');
    <\/script>

`,className:"w-html-embed"})})}),T=a=>{const{origin:t,pathname:r,search:o}=new URL(a);return`${t}${r}${o}`},I=d.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),B=({data:a})=>{const{system:t,resources:r,url:o,pageMeta:i}=a,p=T(o),l=d.useMemo(()=>({imageLoader:s,assetBaseUrl:n,resources:r,breakpoints:h,onError:console.error}),[r]);return e.jsxs(g.Provider,{value:l,children:[e.jsx(u.Provider,{value:o,children:e.jsx(I,{pageKey:p,system:t})}),e.jsx(m,{url:o,pageMeta:i,siteName:c,imageLoader:s,assetBaseUrl:n}),e.jsx(b,{children:i.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),M=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${n}${v}`})}),f.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},P=Object.freeze(Object.defineProperty({__proto__:null,Head:M},Symbol.toStringTag,{value:"Module"})),H={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-26/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-26/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}}};export{H as configValuesSerialized};
