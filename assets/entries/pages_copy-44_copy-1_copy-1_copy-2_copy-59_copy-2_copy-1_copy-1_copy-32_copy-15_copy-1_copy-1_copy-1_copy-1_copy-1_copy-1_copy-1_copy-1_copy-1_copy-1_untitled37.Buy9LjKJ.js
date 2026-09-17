import{j as e,r as d,a as i,i as s,R as m,b as g,P as u,c as f,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=o=>e.jsx("body",{className:"w-element",children:e.jsx(y,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Login Portal</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: #0f1419;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
        
        .matrix-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.1;
            pointer-events: none;
        }
        
        .login-container {
            background: rgba(20, 25, 35, 0.95);
            border: 1px solid #00ff88;
            border-radius: 20px;
            padding: 3rem;
            width: 100%;
            max-width: 450px;
            position: relative;
            box-shadow: 0 0 40px rgba(0, 255, 136, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .security-badge {
            position: absolute;
            top: -15px;
            right: 30px;
            background: #00ff88;
            color: #0f1419;
            padding: 0.5rem 1.5rem;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .login-header {
            text-align: center;
            margin-bottom: 2rem;
            margin-top: 1rem;
        }
        
        .login-header h1 {
            color: #00ff88;
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
        }
        
        .login-header p {
            color: #8892b0;
            font-size: 0.9rem;
        }
        
        .input-group {
            margin-bottom: 1.5rem;
            position: relative;
        }
        
        .input-group label {
            display: block;
            color: #00d4ff;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            font-weight: 600;
        }
        
        .input-field {
            width: 100%;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid #2d3748;
            border-radius: 10px;
            color: #e0e0e0;
            font-size: 1rem;
            transition: all 0.3s;
            font-family: monospace;
        }
        
        .input-field:focus {
            outline: none;
            border-color: #00ff88;
            box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.1);
        }
        
        .password-strength {
            height: 4px;
            background: #2d3748;
            border-radius: 2px;
            margin-top: 0.5rem;
            overflow: hidden;
            display: none;
        }
        
        .password-strength-bar {
            height: 100%;
            width: 0;
            transition: all 0.3s;
            border-radius: 2px;
        }
        
        .strength-weak { background: #ff4757; width: 33%; }
        .strength-medium { background: #ffc107; width: 66%; }
        .strength-strong { background: #00ff88; width: 100%; }
        
        .strength-text {
            font-size: 0.8rem;
            margin-top: 0.3rem;
            display: none;
        }
        
        .security-features {
            background: rgba(0, 212, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 10px;
            padding: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .feature-item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 0.5rem 0;
            font-size: 0.85rem;
            color: #8892b0;
        }
        
        .feature-item.active {
            color: #00ff88;
        }
        
        .check-icon {
            width: 18px;
            height: 18px;
            border: 2px solid #2d3748;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
        }
        
        .feature-item.active .check-icon {
            background: #00ff88;
            border-color: #00ff88;
            color: #0f1419;
        }
        
        .btn-login {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
            border: none;
            border-radius: 10px;
            color: #0f1419;
            font-weight: bold;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
        }
        
        .btn-login:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
        }
        
        .btn-login:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }
        
        .attempts-warning {
            background: rgba(255, 71, 87, 0.1);
            border: 1px solid #ff4757;
            color: #ff4757;
            padding: 0.75rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            font-size: 0.85rem;
            display: none;
            align-items: center;
            gap: 8px;
        }
        
        .cipher-text {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-family: monospace;
            color: #00ff88;
            opacity: 0.3;
            font-size: 0.8rem;
            pointer-events: none;
        }
        
        .2fa-section {
            display: none;
            text-align: center;
        }
        
        .code-inputs {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin: 1.5rem 0;
        }
        
        .code-input {
            width: 50px;
            height: 60px;
            text-align: center;
            font-size: 1.5rem;
            background: rgba(0, 0, 0, 0.3);
            border: 2px solid #2d3748;
            border-radius: 10px;
            color: #00ff88;
            font-weight: bold;
        }
        
        .code-input:focus {
            border-color: #00ff88;
            outline: none;
        }
        
        .timer {
            color: #ffc107;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
    </style>


    <canvas class="matrix-bg" id="matrix"></canvas>
    
    <div class="login-container">
        <div class="security-badge">
            🔒 SSL Secure
        </div>
        
        <div class="login-header">
            <h1>ورود امن به سیستم</h1>
            <p>لایه‌های محافظتی فعال | نسخه 2.4.1</p>
        </div>
        
        <div class="attempts-warning" id="attemptsWarning">
            ⚠️ هشدار: 2 تلاش ناموفق باقی مانده تا قفل موقت حساب
        </div>
        
        <form id="loginForm">
            <div class="input-group">
                <label>شناسه کاربری / ایمیل</label>
                <input type="text" class="input-field" id="username" placeholder="user@company.com" required="">
            </div>
            
            <div class="input-group">
                <label>رمز عبور</label>
                <input type="password" class="input-field" id="password" placeholder="••••••••" required="">
                <div class="password-strength" id="strengthBar">
                    <div class="password-strength-bar" id="strengthBarFill"></div>
                </div>
                <div class="strength-text" id="strengthText"></div>
            </div>
            
            <div class="security-features">
                <div class="feature-item" id="lengthCheck">
                    <div class="check-icon">✓</div>
                    <span>حداقل ۱۲ کاراکتر</span>
                </div>
                <div class="feature-item" id="numberCheck">
                    <div class="check-icon">✓</div>
                    <span>شامل اعداد</span>
                </div>
                <div class="feature-item" id="specialCheck">
                    <div class="check-icon">✓</div>
                    <span>شامل کاراکترهای خاص (!@#$...)</span>
                </div>
                <div class="feature-item" id="caseCheck">
                    <div class="check-icon">✓</div>
                    <span>حروف بزرگ و کوچک</span>
                </div>
            </div>
            
            <button type="submit" class="btn-login" id="submitBtn">
                بررسی هویت و ورود
            </button>
        </form>
        
        <div class="2fa-section" id="twoFactorSection">
            <h3 style="color: #00d4ff; margin-bottom: 1rem;">تأیید هویت دو عاملی</h3>
            <p style="color: #8892b0; margin-bottom: 1.5rem;">کد ۶ رقمی ارسال شده به دستگاه شما را وارد کنید</p>
            
            <div class="code-inputs">
                <input type="text" class="code-input" maxlength="1" onkeyup="moveToNext(this, 0)">
                <input type="text" class="code-input" maxlength="1" onkeyup="moveToNext(this, 1)">
                <input type="text" class="code-input" maxlength="1" onkeyup="moveToNext(this, 2)">
                <input type="text" class="code-input" maxlength="1" onkeyup="moveToNext(this, 3)">
                <input type="text" class="code-input" maxlength="1" onkeyup="moveToNext(this, 4)">
                <input type="text" class="code-input" maxlength="1" onkeyup="moveToNext(this, 5)">
            </div>
            
            <div class="timer" id="timer">زمان باقی‌مانده: 02:59</div>
            
            <button class="btn-login" onclick="verify2FA()">تأیید کد</button>
        </div>
        
        <div class="cipher-text" id="cipherText">SHA-256: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92</div>
    </div>
    
    <script>
        // پس‌زمینه ماتریس
        const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(15, 20, 25, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ff88';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(drawMatrix, 35);
        
        // بررسی قدرت رمز عبور
        const passwordInput = document.getElementById('password');
        const strengthBar = document.getElementById('strengthBar');
        const strengthBarFill = document.getElementById('strengthBarFill');
        const strengthText = document.getElementById('strengthText');
        
        passwordInput.addEventListener('input', function() {
            const val = this.value;
            strengthBar.style.display = 'block';
            strengthText.style.display = 'block';
            
            let strength = 0;
            
            // بررسی طول
            if (val.length >= 12) {
                document.getElementById('lengthCheck').classList.add('active');
                strength++;
            } else {
                document.getElementById('lengthCheck').classList.remove('active');
            }
            
            // بررسی اعداد
            if (/\\d/.test(val)) {
                document.getElementById('numberCheck').classList.add('active');
                strength++;
            } else {
                document.getElementById('numberCheck').classList.remove('active');
            }
            
            // بررسی کاراکترهای خاص
            if (/[!@#$%^&*(),.?":{}|<>]/.test(val)) {
                document.getElementById('specialCheck').classList.add('active');
                strength++;
            } else {
                document.getElementById('specialCheck').classList.remove('active');
            }
            
            // بررسی حروف بزرگ و کوچک
            if (/[a-z]/.test(val) && /[A-Z]/.test(val)) {
                document.getElementById('caseCheck').classList.add('active');
                strength++;
            } else {
                document.getElementById('caseCheck').classList.remove('active');
            }
            
            // نمایش قدرت
            strengthBarFill.className = 'password-strength-bar';
            if (strength <= 1) {
                strengthBarFill.classList.add('strength-weak');
                strengthText.textContent = 'ضعیف - نیاز به بهبود';
                strengthText.style.color = '#ff4757';
            } else if (strength <= 3) {
                strengthBarFill.classList.add('strength-medium');
                strengthText.textContent = 'متوسط - قابل قبول';
                strengthText.style.color = '#ffc107';
            } else {
                strengthBarFill.classList.add('strength-strong');
                strengthText.textContent = 'قوی - امنیت بالا';
                strengthText.style.color = '#00ff88';
            }
        });
        
        // مدیریت فرم ورود
        let attempts = 0;
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            attempts++;
            
            if (attempts >= 2) {
                document.getElementById('attemptsWarning').style.display = 'flex';
            }
            
            // شبیه‌سازی ورود موفق و نمایش 2FA
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('twoFactorSection').style.display = 'block';
            startTimer();
        });
        
        // حرکت بین فیلدهای کد
        function moveToNext(input, index) {
            if (input.value.length === 1) {
                const inputs = document.querySelectorAll('.code-input');
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        }
        
        // تایمر 2FA
        function startTimer() {
            let time = 179;
            const timerEl = document.getElementById('timer');
            
            const interval = setInterval(() => {
                const minutes = Math.floor(time / 60);
                const seconds = time % 60;
                timerEl.textContent = \`زمان باقی‌مانده: \${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
                
                if (time <= 0) {
                    clearInterval(interval);
                    timerEl.textContent = 'کد منقضی شد - درخواست مجدد';
                    timerEl.style.color = '#ff4757';
                }
                time--;
            }, 1000);
        }
        
        function verify2FA() {
            alert('ورود موفقیت‌آمیز! در حال انتقال به داشبورد...');
        }
        
        // تولید هش تصادفی برای نمایش
        setInterval(() => {
            const hash = Array(64).fill(0).map(() => '0123456789abcdef'[Math.floor(Math.random() * 16)]).join('');
            document.getElementById('cipherText').textContent = 'SHA-256: ' + hash;
        }, 2000);
    <\/script>


`,className:"w-html-embed"})}),S=o=>{const{origin:t,pathname:r,search:n}=new URL(o);return`${t}${r}${n}`},T=d.memo(({pageKey:o,system:t})=>e.jsx(k,{system:t},o),(o,t)=>o.pageKey===t.pageKey),z=({data:o})=>{const{system:t,resources:r,url:n,pageMeta:a}=o,c=S(n),p=d.useMemo(()=>({imageLoader:s,assetBaseUrl:i,resources:r,breakpoints:x,onError:console.error}),[r]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:n,children:e.jsx(T,{pageKey:c,system:t})}),e.jsx(u,{url:n,pageMeta:a,siteName:l,imageLoader:s,assetBaseUrl:i}),e.jsx(f,{children:a.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),B=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${i}${v}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:B},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-44/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-44/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{F as configValuesSerialized};
