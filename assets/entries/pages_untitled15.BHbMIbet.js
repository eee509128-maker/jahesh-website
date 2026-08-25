import{j as e,r as c,a as o,i,R as f,b as h,P as g,c as m,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as d}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsxs("body",{className:"w-element",children:[e.jsx(d,{code:`<style>
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

    /* باکس اصلی جستجوگر هوشمند */
    .jahesh-search-widget {
        direction: rtl;
        text-align: right;
        background: rgba(12, 12, 25, 0.8);
        border: 1px solid rgba(189, 0, 255, 0.3);
        border-radius: 12px;
        padding: 12px 16px;
        backdrop-filter: blur(12px);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(189, 0, 255, 0.1);
        max-width: 500px;
        margin: 15px auto;
        font-family: 'Vazirmatn', sans-serif;
        position: relative;
        z-index: 999;
    }

    .search-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .search-input-field {
        flex: 1;
        background: rgba(5, 5, 10, 0.8) !important;
        border: 1px solid rgba(0, 255, 204, 0.3) !important;
        border-radius: 6px;
        padding: 10px 14px;
        color: #fff !important;
        font-size: 0.9rem;
        outline: none;
        transition: all 0.3s ease;
    }

    .search-input-field:focus {
        border-color: #bd00ff !important;
        box-shadow: 0 0 10px rgba(189, 0, 255, 0.4);
    }

    /* دکمه‌های اکشن (ستاره و لیست) */
    .search-action-btn {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(189, 0, 255, 0.2);
        color: #64748b;
        width: 38px;
        height: 38px;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        transition: all 0.2s;
    }

    .search-action-btn:hover {
        background: rgba(189, 0, 255, 0.1);
        color: #fff;
        border-color: #bd00ff;
    }

    .search-action-btn.fav-active {
        color: #ffb703 !important;
        text-shadow: 0 0 8px #ffb703;
        border-color: rgba(255, 183, 3, 0.4);
    }

    /* شمارنده نتایج */
    .search-counter {
        color: #00ffcc;
        font-size: 0.8rem;
        min-width: 50px;
        text-align: center;
        font-weight: bold;
    }

    /* دکمه‌های ناوبری (بعدی و قبلی) */
    .search-nav-btn {
        background: rgba(189, 0, 255, 0.1);
        border: 1px solid rgba(189, 0, 255, 0.4);
        color: #fff;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.2s;
        user-select: none;
    }

    .search-nav-btn:hover {
        background: #bd00ff;
        box-shadow: 0 0 8px #bd00ff;
    }

    .search-nav-btn:disabled {
        opacity: 0.2;
        cursor: not-allowed;
        box-shadow: none;
        background: transparent;
    }

    /* منوی کشویی لیست علاقه‌مندی‌ها */
    .fav-dropdown {
        background: rgba(7, 7, 18, 0.95);
        border: 1px solid rgba(0, 255, 204, 0.2);
        border-radius: 8px;
        margin-top: 10px;
        padding: 12px;
        max-height: 200px;
        overflow-y: auto;
        display: none;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    }

    .fav-dropdown-title {
        font-size: 0.8rem;
        color: #00ffcc;
        margin-bottom: 8px;
        border-bottom: 1px dashed rgba(0, 255, 204, 0.15);
        padding-bottom: 5px;
    }

    .fav-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .fav-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(255, 255, 255, 0.02);
        padding: 6px 10px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
    }

    .fav-item:hover {
        background: rgba(189, 0, 255, 0.15);
        border-left: 3px solid #bd00ff;
    }

    .fav-text {
        color: #e2e8f0;
        font-size: 0.85rem;
        flex: 1;
    }

    .delete-fav-btn {
        background: transparent;
        border: none;
        color: #64748b;
        cursor: pointer;
        font-size: 1rem;
        padding: 0 5px;
        transition: color 0.2s;
    }

    .delete-fav-btn:hover {
        color: #ff4a4a;
    }

    .empty-fav-msg {
        font-size: 0.8rem;
        color: #475569;
        text-align: center;
        padding: 10px 0;
    }

    /* استایل کلمات پیدا شده در صفحه (هایلایت نئونی) */
    mark.jahesh-glow-match {
        background: #00ffcc !important;
        color: #000 !important;
        border-radius: 3px;
        box-shadow: 0 0 10px #00ffcc;
        padding: 1px 2px;
        transition: all 0.2s;
    }

    mark.jahesh-glow-match.current-match {
        background: #bd00ff !important;
        color: #fff !important;
        box-shadow: 0 0 15px #bd00ff;
    }
</style>

<div class="jahesh-search-widget">
    <div class="search-wrapper">
        <input type="text" id="page-keyword-search" class="search-input-field" placeholder="تایپ کنید تا سیگنال‌ها در صفحه کشف شوند...">
        
        <button id="add-fav-search" class="search-action-btn" title="نشانه‌گذاری این واژه">★</button>
        <button id="toggle-fav-list" class="search-action-btn" title="فهرست واژه‌های نشانه‌گذاری شده">📂</button>
        
        <span id="match-status" class="search-counter">0 از 0</span>
        <button id="prev-match-btn" class="search-nav-btn" disabled>▲</button>
        <button id="next-match-btn" class="search-nav-btn" disabled>▼</button>
    </div>

    <div id="search-fav-dropdown" class="fav-dropdown">
        <div class="fav-dropdown-title">سیگنال‌های ذخیره شده آژانس:</div>
        <div id="fav-list-container">
            </div>
    </div>
</div>

<script>
    (function() {
        const searchInput = document.getElementById('page-keyword-search');
        const matchStatus = document.getElementById('match-status');
        const prevBtn = document.getElementById('prev-match-btn');
        const nextBtn = document.getElementById('next-match-btn');
        const addFavBtn = document.getElementById('add-fav-search');
        const toggleFavBtn = document.getElementById('toggle-fav-list');
        const favDropdown = document.getElementById('search-fav-dropdown');
        const favListContainer = document.getElementById('fav-list-container');
        
        let matches = [];
        let currentIndex = -1;
        let savedSearches = JSON.parse(localStorage.getItem('jahesh_keyword_favs')) || [];

        // بازگرداندن متون به حالت عادی
        function removeHighlights() {
            const highlighted = document.querySelectorAll('mark.jahesh-glow-match');
            highlighted.forEach(el => {
                const parent = el.parentNode;
                if(parent) {
                    parent.replaceChild(document.createTextNode(el.textContent), el);
                    parent.normalize();
                }
            });
            matches = [];
            currentIndex = -1;
            updateUI();
        }

        // اسکن و هایلایت گره‌های متنی
        function highlightText(node, keyword) {
            if (node.nodeType === 3) {
                const text = node.nodeValue;
                const index = text.toLowerCase().indexOf(keyword.toLowerCase());
                
                if (index !== -1 && node.parentNode && !/(SCRIPT|STYLE|INPUT|TEXTAREA)/i.test(node.parentNode.tagName) && !node.parentNode.classList.contains('search-input-field')) {
                    const match = text.substring(index, index + keyword.length);
                    const before = text.substring(0, index);
                    const after = text.substring(index + keyword.length);
                    
                    const beforeNode = document.createTextNode(before);
                    const afterNode = document.createTextNode(after);
                    const markNode = document.createElement('mark');
                    markNode.className = 'jahesh-glow-match';
                    markNode.textContent = match;
                    
                    const parent = node.parentNode;
                    parent.insertBefore(beforeNode, node);
                    parent.insertBefore(markNode, node);
                    parent.insertBefore(afterNode, node);
                    parent.removeChild(node);
                    
                    matches.push(markNode);
                    return afterNode;
                }
            } else if (node.nodeType === 1 && node.childNodes && !/(style|script|input|textarea)/i.test(node.tagName)) {
                for (let i = 0; i < node.childNodes.length; i++) {
                    const next = highlightText(node.childNodes[i], keyword);
                    if (next) i += 2;
                }
            }
            return null;
        }

        function updateUI() {
            if (matches.length > 0) {
                matchStatus.innerText = \`\${currentIndex + 1} از \${matches.length}\`;
                prevBtn.disabled = false;
                nextBtn.disabled = false;
            } else {
                matchStatus.innerText = \`0 از 0\`;
                prevBtn.disabled = true;
                nextBtn.disabled = true;
            }

            // چک کردن وضعیت ستاره کلمه فعلی
            const currentWord = searchInput.value.trim();
            if(currentWord && savedSearches.includes(currentWord)) {
                addFavBtn.classList.add('fav-active');
            } else {
                addFavBtn.classList.remove('fav-active');
            }
        }

        function scrollToMatch() {
            document.querySelectorAll('mark.jahesh-glow-match').forEach(el => el.classList.remove('current-match'));
            if (matches[currentIndex]) {
                const activeMatch = matches[currentIndex];
                activeMatch.classList.add('current-match');
                activeMatch.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }

        // اجرای عملیات سرچ اصلی
        function executeSearch(keyword) {
            removeHighlights();
            if (keyword.length < 2) return;
            highlightText(document.body, keyword);
            if (matches.length > 0) {
                currentIndex = 0;
                scrollToMatch();
            }
            updateUI();
        }

        // رندر کردن منوی کلمات ذخیره شده
        function renderFavDropdown() {
            favListContainer.innerHTML = '';
            if(savedSearches.length === 0) {
                favListContainer.innerHTML = \`<div class="empty-fav-msg">هیچ سیگنالی ذخیره نشده است.</div>\`;
                return;
            }

            const ul = document.createElement('ul');
            ul.className = 'fav-list';
            
            savedSearches.forEach(word => {
                const li = document.createElement('li');
                li.className = 'fav-item';
                li.innerHTML = \`
                    <span class="fav-text">\${word}</span>
                    <button class="delete-fav-btn" title="حذف">&times;</button>
                \`;

                // کلیک روی متن برای سرچ مجدد
                li.querySelector('.fav-text').addEventListener('click', () => {
                    searchInput.value = word;
                    executeSearch(word);
                    favDropdown.style.display = 'none'; // بستن منو بعد انتخاب
                });

                // کلیک روی ضربدر برای حذف واژه
                li.querySelector('.delete-fav-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    savedSearches = savedSearches.filter(w => w !== word);
                    localStorage.setItem('jahesh_keyword_favs', JSON.stringify(savedSearches));
                    renderFavDropdown();
                    updateUI();
                });

                ul.appendChild(li);
            });
            favListContainer.appendChild(ul);
        }

        // ایونت تغییر متن ورودی سرچ
        searchInput.addEventListener('input', function() {
            executeSearch(searchInput.value.trim());
        });

        // دکمه افزودن کلمه به علاقه‌مندی‌ها
        addFavBtn.addEventListener('click', function() {
            const word = searchInput.value.trim();
            if(!word || word.length < 2) return;

            if(savedSearches.includes(word)) {
                // اگر قبلا بود، حذفش کن (Toggle حالت لایک)
                savedSearches = savedSearches.filter(w => w !== word);
            } else {
                // اگر نبود، اضافه‌اش کن
                savedSearches.push(word);
            }

            localStorage.setItem('jahesh_keyword_favs', JSON.stringify(savedSearches));
            renderFavDropdown();
            updateUI();
        });

        // دکمه باز و بسته کردن فهرست کشویی
        toggleFavBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if(favDropdown.style.display === 'block') {
                favDropdown.style.display = 'none';
            } else {
                renderFavDropdown();
                favDropdown.style.display = 'block';
            }
        });

        // بستن منو با کلیک بیرون از ویجت
        document.addEventListener('click', function(e) {
            if(!e.target.closest('.jahesh-search-widget')) {
                favDropdown.style.display = 'none';
            }
        });

        // دکمه بعدی و قبلی اسکرول
        nextBtn.addEventListener('click', function() {
            if (matches.length === 0) return;
            currentIndex = (currentIndex + 1) % matches.length;
            scrollToMatch();
            updateUI();
        });

        prevBtn.addEventListener('click', function() {
            if (matches.length === 0) return;
            currentIndex = (currentIndex - 1 + matches.length) % matches.length;
            scrollToMatch();
            updateUI();
        });

        // لود اولیه مقادیر
        renderFavDropdown();
    })();
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),e.jsx(d,{code:`<style>
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;500;800&display=swap');

    :root {
        --bg-color: #030307;
        --panel-bg: rgba(12, 12, 25, 0.7);
        --accent-purple: #bd00ff;
        --accent-cyan: #00ffcc;
        --text-main: #e2e8f0;
        --text-muted: #64748b;
        --border-glow: rgba(189, 0, 255, 0.2);
    }

    /* هماهنگ‌سازی و اعمال پس‌زمینه دارک به بادی اصلی سایت‌ساز */
    body {
        background-color: var(--bg-color) !important;
        color: var(--text-main) !important;
        min-height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        background-image: 
            radial-gradient(at 0% 0%, rgba(189, 0, 255, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(0, 255, 204, 0.1) 0px, transparent 50%) !important;
        background-attachment: fixed !important;
        margin: 0;
        padding: 0;
        font-family: 'Vazirmatn', sans-serif;
        scroll-behavior: smooth;
    }

    /* خطوط اسکن ماتریکسی سازمان‌های جاسوسی */
    .spy-overlay {
        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 255, 0, 0.06));
        z-index: 9999;
        opacity: 0.4;
        pointer-events: none;
        background-size: 100% 4px, 6px 100%;
    }

    .dashboard-container * {
        box-sizing: border-box;
        font-family: 'Vazirmatn', sans-serif;
    }

    /* هدر آژانس */
    .spy-header {
        border-bottom: 1px solid rgba(189, 0, 255, 0.3);
        background: rgba(5, 5, 12, 0.85);
        backdrop-filter: blur(10px);
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .logo-area h1 {
        font-size: 1.5rem;
        font-weight: 800;
        letter-spacing: 2px;
        color: #fff;
        text-shadow: 0 0 10px var(--accent-purple);
    }

    .logo-area span {
        color: var(--accent-cyan);
        font-size: 0.8rem;
        text-transform: uppercase;
    }

    .system-status {
        display: flex;
        gap: 20px;
        font-size: 0.85rem;
        color: var(--accent-cyan);
        align-items: center;
    }

    .status-blink {
        width: 8px;
        height: 8px;
        background-color: var(--accent-cyan);
        border-radius: 50%;
        display: inline-block;
        animation: blink 1s infinite;
        box-shadow: 0 0 8px var(--accent-cyan);
    }

    @keyframes blink {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }

    /* دکوراسیون اصلی برنامه */
    .wrapper {
        display: grid;
        grid-template-columns: 250px 1fr 350px;
        gap: 20px;
        padding: 20px;
        max-width: 1600px;
        margin: 0 auto;
        min-height: calc(100vh - 80px);
    }

    /* بخش سایدبار سمت چپ (کنترل و سرچ) */
    .control-panel {
        background: var(--panel-bg);
        border: 1px solid var(--border-glow);
        border-radius: 12px;
        padding: 20px;
        backdrop-filter: blur(8px);
        height: fit-content;
        position: sticky;
        top: 100px;
    }

    .search-box {
        position: relative;
        margin-bottom: 25px;
    }

    .search-box input {
        width: 100%;
        padding: 12px 15px;
        background: rgba(0, 0, 0, 0.6);
        border: 1px solid rgba(189, 0, 255, 0.4);
        border-radius: 6px;
        color: #fff;
        font-size: 0.9rem;
        outline: none;
        transition: all 0.3s;
        text-align: right;
    }

    .search-box input:focus {
        border-color: var(--accent-cyan);
        box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
    }

    .category-filters {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .cat-btn {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid transparent;
        color: var(--text-muted);
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        text-align: right;
        transition: all 0.2s;
        font-size: 0.9rem;
    }

    .cat-btn:hover, .cat-btn.active {
        background: rgba(189, 0, 255, 0.1);
        border-color: var(--accent-purple);
        color: #fff;
        box-shadow: inset 0 0 8px rgba(189, 0, 255, 0.2);
    }

    /* بخش مرکزی (گرید ابزارها) */
    .main-dash {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 15px;
    }

    /* کارت‌های جاسوسی شبکه جهش */
    .tool-card {
        background: var(--panel-bg);
        border: 1px solid var(--border-glow);
        border-radius: 8px;
        padding: 16px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 130px;
        backdrop-filter: blur(5px);
    }

    .tool-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; width: 3px; height: 100%;
        background: var(--accent-purple);
        transition: all 0.3s;
    }

    .tool-card:hover {
        transform: translateY(-4px);
        border-color: var(--accent-cyan);
        box-shadow: 0 0 15px rgba(0, 255, 204, 0.15);
    }

    .tool-card:hover::before {
        background: var(--accent-cyan);
        height: 50%;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
    }

    .fav-icon {
        cursor: pointer;
        color: var(--text-muted);
        font-size: 1.2rem;
        transition: color 0.2s;
        user-select: none;
    }

    .fav-icon.active {
        color: #ffb703;
        text-shadow: 0 0 8px #ffb703;
    }

    .tool-title {
        font-size: 1rem;
        font-weight: 500;
        color: #fff;
        margin-top: 5px;
        text-align: right;
    }

    .launch-btn {
        align-self: flex-end;
        background: rgba(0, 255, 204, 0.05);
        border: 1px solid rgba(0, 255, 204, 0.3);
        color: var(--accent-cyan);
        padding: 4px 12px;
        border-radius: 4px;
        font-size: 0.8rem;
        text-decoration: none;
        transition: all 0.2s;
    }

    .launch-btn:hover {
        background: var(--accent-cyan);
        color: #000;
        box-shadow: 0 0 10px var(--accent-cyan);
        font-weight: bold;
    }

    /* پنل بازرسی هولوگرافیک ثابت سمت راست */
    .hologram-inspector {
        background: rgba(5, 15, 25, 0.6);
        border: 1px solid rgba(0, 255, 204, 0.2);
        border-radius: 12px;
        padding: 25px;
        position: sticky;
        top: 100px;
        height: calc(100vh - 140px);
        display: flex;
        flex-direction: column;
        justify-content: transparent;
        backdrop-filter: blur(12px);
        box-shadow: inset 0 0 20px rgba(0, 255, 204, 0.05);
        overflow: hidden;
        text-align: right;
    }

    .holo-grid-lines {
        position: absolute;
        inset: 0;
        background-size: 20px 20px;
        background-image: linear-gradient(to right, rgba(0, 255, 204, 0.02) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(0, 255, 204, 0.02) 1px, transparent 1px);
        pointer-events: none;
    }

    .holo-title {
        font-size: 1.3rem;
        color: var(--accent-cyan);
        border-bottom: 2px dashed rgba(0, 255, 204, 0.3);
        padding-bottom: 10px;
        margin-bottom: 20px;
        text-shadow: 0 0 8px var(--accent-cyan);
    }

    .holo-meta {
        font-size: 0.85rem;
        color: var(--accent-purple);
        margin-bottom: 15px;
        text-transform: uppercase;
    }

    .holo-desc {
        font-size: 0.95rem;
        line-height: 1.7;
        color: #94a3b8;
        text-align: justify;
    }

    .holo-footer {
        margin-top: auto;
        border-top: 1px solid rgba(189, 0, 255, 0.2);
        padding-top: 15px;
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    @media(max-width: 1024px) {
        .wrapper {
            grid-template-columns: 1fr;
        }
        .hologram-inspector, .control-panel {
            position: static;
            height: auto;
        }
    }
</style>

<div class="dashboard-container" dir="rtl">
    <div class="spy-overlay"></div>
    
    <header class="spy-header">
        <div class="logo-area">
            <h1>شبکه اطلاعاتی جهش</h1>
            <span>JAHESH INTEL INTERFACE v4.0.2</span>
        </div>
        <div class="system-status">
            <div><span class="status-blink"></span> وضعیت سرور: امن</div>
            <div id="live-clock">00:00:00</div>
        </div>
    </header>

    <div class="wrapper">
        <aside class="control-panel">
            <div class="search-box">
                <input type="text" id="smart-search" placeholder="جستجوی سیگنال هوشمند...">
            </div>
            <div class="category-filters">
                <button class="cat-btn active" data-filter="all">کل دیتابیس ابزارها</button>
                <button class="cat-btn" data-filter="favs">نشانه گذاری شده (علاقه مندی)</button>
                <button class="cat-btn" data-filter="core">هسته اصلی و سبک زندگی</button>
                <button class="cat-btn" data-filter="cyber">امنیت و پردازش اطلاعات</button>
                <button class="cat-btn" data-filter="edu">آکادمی و یادگیری هوشمند</button>
            </div>
        </aside>

        <main class="main-dash">
            <div class="grid-container" id="tools-grid"></div>
        </main>

        <aside class="hologram-inspector">
            <div class="holo-grid-lines"></div>
            <div id="holo-content">
                <div class="holo-meta">سیستم رادار جهش فعال است</div>
                <div class="holo-title">اسکنر هولوگرافیک</div>
                <div class="holo-desc">نشانه گر موس را روی دکمه ها یا ابزارها حرکت دهید یا اسکرول کنید تا ساختار و متادیتای رمزنگاری شده ابزار به صورت زنده در این پنل رمزگشایی شود.</div>
            </div>
            <div class="holo-footer">
                SECURE PROTOCOL // DATA STREAM ENCRYPTED //
            </div>
        </aside>
    </div>
</div>

<script>
    const toolsData = [
        { id: 1, name: "ابزار جهش مپ", cat: "core", desc: "سامانه ردیابی مخفی و نقشه‌برداری استراتژیک موقعیت‌های جغرافیایی شبکه مرکزی جهش.", link: "#" },
        { id: 2, name: "ابزار تعبیر خواب", cat: "core", desc: "پایش لایه‌های آلفا و بتای مغز در فاز REM برای تحلیل سیگنال‌های ناشناخته رویا.", link: "#" },
        { id: 3, name: "ابزار فیتنس جهش", cat: "core", desc: "تکمیل کدهای بیومتریک بدن و مانیتورینگ نرخ بقا و بهینه‌سازی فیزیکی مامورین.", link: "#" },
        { id: 4, name: "ابزار بهونه یاب", cat: "core", desc: "تولید الگوریتم‌های توجیهی و پاسخ‌های منطقی اضطراری برای فرار از موقعیت‌های بازجویی.", link: "#" },
        { id: 5, name: "ابزار سبک زندگی", cat: "core", desc: "هماهنگ‌کننده ساختارهای روزمره با استاندارد آژانس توسعه فردی جهش.", link: "#" },
        { id: 6, name: "ابزار رها ساز ذهن", cat: "core", desc: "پاکسازی فرکانس‌های نویز مخرب ذهنی و بازیابی تمرکز استراتژیک کاربر.", link: "#" },
        { id: 7, name: "ابزار مدیریت زندگیت", cat: "core", desc: "سیستم برنامه‌ریزی یکپارچه عملیاتی و مانیتورینگ اهداف کوتاه و بلندمدت.", link: "#" },
        { id: 8, name: "ابزار وکتور ساز", cat: "cyber", desc: "تبدیل امواج پیکسلی آنالوگ به کدهای وکتور برداری با دقت نانومتر.", link: "#" },
        { id: 9, name: "ابزار امنیت‌ساز", cat: "cyber", desc: "ایجاد دیواره‌های آتشین و رمزنگاری پروتکل‌های ارتباطی لایه ۷ شبکه.", link: "#" },
        { id: 10, name: "ابزار تحلیل متن", cat: "cyber", desc: "استخراج کدهای مخفی، الگوهای تکرار شونده و تحلیل معنایی متون مشکوک.", link: "#" },
        { id: 11, name: "احساس شناس", cat: "cyber", desc: "شناسایی پالس‌های عاطفی و روان‌شناختی مخفی شده در لایه‌های متن و گفتار.", link: "#" },
        { id: 12, name: "صوت به متن", cat: "cyber", desc: "شنود فرکانسی صوتی و تبدیل آن به کدهای متنی ساختاریافته به صورت آنی.", link: "#" },
        { id: 13, name: "محاسبه دوز دارو", cat: "cyber", desc: "محاسبه‌گر حساس بیوشیمیایی جهت تعیین دقیق مقادیر دارویی و بیولوژیک.", link: "#" },
        { id: 14, name: "تشخیص‌یاب دامپزشکی", cat: "cyber", desc: "سیستم پایش بالینی و پردازش علائم زیستی و پاتولوژی ارگانیسم‌های جانوری.", link: "#" },
        { id: 15, name: "مقاله‌نویسی هوشمند", cat: "edu", desc: "تولید داکیومنت‌ها و مقالات علمی با استفاده از هسته پردازش زبان پیشرفته جهش.", link: "#" },
        { id: 16, name: "یار هوشمند درسی", cat: "edu", desc: "کمک‌یار اطلاعاتی متصل به سرور مرکزی جهت تحلیل رفرنس‌های دانشگاهی.", link: "#" },
        { id: 17, name: "معلم خصوصی پویا", cat: "edu", desc: "شبیه‌ساز هوش‌ربات آموزشی با قابلیت تطبیق هوش یادگیری متناسب با کاربر.", link: "#" },
        { id: 18, name: "تحولی مقاله‌ساز", cat: "edu", desc: "موتور دگرگون‌کننده ساختارهای مقالاتی و ارتقای سطح نگارش به استانداردهای ISI.", link: "#" },
        { id: 19, name: "پاورپوینت‌ساز فارسی", cat: "edu", desc: "تولید اتوماتیک ساختار بصری اسلایدها و ارائه‌های اداری و نظامی تمیز.", link: "#" },
        { id: 20, name: "خلاصه‌ساز هوشمند", cat: "edu", desc: "فشرده‌سازی اطلاعات حجیم بدون از دست رفتن داده‌های حیاتی سند.", link: "#" },
        { id: 21, name: "جزوه‌نویس هوشمند کلاس", cat: "edu", desc: "رونویسی و دسته‌بندی لحظه‌ای سخنرانی‌ها و کلاس‌های زنده در قالب چک‌لیست.", link: "#" },
        { id: 22, name: "سامانه پایش هوشمند", cat: "cyber", desc: "سیستم رادار و نظارت خودکار روی ورودی‌ها و خروجی‌های پلتفرم‌های ابری.", link: "#" },
        { id: 23, name: "ساعت هوشمند مدرن", cat: "core", desc: "همگام‌ساز زمان محلی با سرورهای اتمی جهانی جهت زمان‌بندی دقیق عملیات‌ها.", link: "#" },
        { id: 24, name: "خبر هوشمند", cat: "cyber", desc: "خزشگر خودکار اخبار جهانی و استخراج هدلاین‌های امنیتی و اطلاعاتی مهم.", link: "#" },
        { id: 25, name: "مولد داستان هوشمند", cat: "edu", desc: "شبیه‌ساز سناریوهای داستانی چندلایه با قابلیت شاخه‌بندی پلات هوشمند.", link: "#" },
        { id: 26, name: "شعر‌ساز خودویرانگر", cat: "edu", desc: "تولید اشعار هنری هماهنگ با ساختار ادبی که پس از یکبار خوانده شدن رمزنگاری می‌شود.", link: "#" },
        { id: 27, name: "تمرکزگر هوشمند", cat: "core", desc: "محدودکننده دسترسی سیگنال‌های مزاحم بیرونی جهت بهینه‌سازی کارایی مغز.", link: "#" }
    ];

    let favorites = JSON.parse(localStorage.getItem('jahesh_favs')) || [];
    const grid = document.getElementById('tools-grid');
    const searchInput = document.getElementById('smart-search');
    const filters = document.querySelectorAll('.cat-btn');
    const holoContent = document.getElementById('holo-content');

    function renderTools(filter = 'all', searchQuery = '') {
        grid.innerHTML = '';
        const filtered = toolsData.filter(tool => {
            const matchesCat = (filter === 'all') || (filter === 'favs' && favorites.includes(tool.id)) || (tool.cat === filter);
            const matchesSearch = tool.name.includes(searchQuery);
            return matchesCat && matchesSearch;
        });

        if(filtered.length === 0) {
            grid.innerHTML = \`<div style="grid-column: 1/-1; text-align:center; color:var(--accent-purple); padding:20px;">هیچ سیگنال یا ابزاری با این مشخصات یافت نشد.</div>\`;
            return;
        }

        filtered.forEach(tool => {
            const isFav = favorites.includes(tool.id) ? 'active' : '';
            const card = document.createElement('div');
            card.className = 'tool-card';
            card.setAttribute('data-id', tool.id);
            card.innerHTML = \`
                <div class="card-header">
                    <span class="fav-icon \${isFav}" onclick="toggleFav(event, \${tool.id})">★</span>
                    <div class="tool-title">\${tool.name}</div>
                </div>
                <a href="\${tool.link}" class="launch-btn">اجرای ابزار</a>
            \`;
            
            // ایونت هاور برای دسکتاپ و نمایش در پنل ثابت
            card.addEventListener('mouseenter', () => updateHologram(tool));
            grid.appendChild(card);
        });
    }

    function updateHologram(tool) {
        holoContent.style.opacity = '0';
        setTimeout(() => {
            holoContent.innerHTML = \`
                <div class="holo-meta">CODE NAME: JHS-\${tool.id}09X</div>
                <div class="holo-title" style="color: var(--accent-cyan)">\${tool.name}</div>
                <div class="holo-meta" style="color:#fff">دسته امنیتی: [ \${tool.cat.toUpperCase()} ]</div>
                <div class="holo-desc">\${tool.desc}</div>
                <div style="margin-top:20px; font-size:0.8rem; color:var(--accent-cyan);">پروتکل دسترسی: مجاز / تایید شده</div>
            \`;
            holoContent.style.opacity = '1';
        }, 150);
    }

    window.toggleFav = function(event, id) {
        event.stopPropagation();
        if(favorites.includes(id)) {
            favorites = favorites.filter(favId => favId !== id);
            event.target.classList.remove('active');
        } else {
            favorites.push(id);
            event.target.classList.add('active');
        }
        localStorage.setItem('jahesh_favs', JSON.stringify(favorites));
        const activeFilter = document.querySelector('.cat-btn.active').getAttribute('data-filter');
        if(activeFilter === 'favs') renderTools('favs', searchInput.value);
    };

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTools(btn.getAttribute('data-filter'), searchInput.value);
        });
    });

    searchInput.addEventListener('input', () => {
        const activeFilter = document.querySelector('.cat-btn.active').getAttribute('data-filter');
        renderTools(activeFilter, searchInput.value);
    });

    setInterval(() => {
        const now = new Date();
        document.getElementById('live-clock').innerText = now.toLocaleTimeString('fa-IR');
    }, 1000);

    renderTools();
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]}),S=a=>{const{origin:t,pathname:n,search:r}=new URL(a);return`${t}${n}${r}`},I=c.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),E=({data:a})=>{const{system:t,resources:n,url:r,pageMeta:s}=a,p=S(r),u=c.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:n,breakpoints:v,onError:console.error}),[n]);return e.jsxs(f.Provider,{value:u,children:[e.jsx(h.Provider,{value:r,children:e.jsx(I,{pageKey:p,system:t})}),e.jsx(g,{url:r,pageMeta:s,siteName:l,imageLoader:i,assetBaseUrl:o}),e.jsx(m,{children:s.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),z=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${x}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled15/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled15/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{B as configValuesSerialized};
