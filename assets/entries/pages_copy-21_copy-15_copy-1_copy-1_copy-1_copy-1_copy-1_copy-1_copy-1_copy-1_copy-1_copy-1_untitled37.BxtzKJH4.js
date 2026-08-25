import{j as a,r as c,a as r,i as d,R as v,b as g,P as u,c as b,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const n="jahesh",m=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],z=t=>a.jsx("body",{className:"w-element",children:a.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>فروشگاه - هوش مصنوعی جهش</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet">
<style>
  :root {
    --bg-dark: #0a0a12;
    --bg-card: #12101f;
    --bg-card2: #1a1530;
    --purple-deep: #2d1b5e;
    --purple-mid: #5b2d8e;
    --purple-bright: #8b3cf7;
    --purple-glow: #a855f7;
    --accent: #c084fc;
    --text-main: #f0e8ff;
    --text-sub: #a89cc8;
    --border: rgba(139,60,247,0.25);
    --gold: #f0c040;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Vazirmatn', sans-serif;
    background: var(--bg-dark);
    color: var(--text-main);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Background effects */
  body::before {
    content: '';
    position: fixed;
    top: -200px; right: -200px;
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(139,60,247,0.18) 0%, transparent 70%);
    pointer-events: none; z-index: 0;
  }
  body::after {
    content: '';
    position: fixed;
    bottom: -200px; left: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(91,45,142,0.15) 0%, transparent 70%);
    pointer-events: none; z-index: 0;
  }

  /* NAVBAR */
  nav {
    position: sticky; top: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 40px;
    height: 65px;
    background: rgba(10,10,18,0.85);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    display: flex; align-items: center; gap: 10px;
    font-size: 1.1rem; font-weight: 700; color: var(--accent);
  }
  .nav-logo .atom {
    width: 36px; height: 36px;
    border: 2px solid var(--purple-bright);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 0 12px rgba(139,60,247,0.5);
  }

  .nav-links {
    display: flex; gap: 28px; list-style: none;
  }
  .nav-links a {
    color: var(--text-sub); text-decoration: none;
    font-size: 0.9rem; font-weight: 500;
    transition: color 0.2s;
  }
  .nav-links a:hover, .nav-links a.active { color: var(--text-main); }

  .nav-btn {
    background: var(--purple-bright);
    color: #fff; border: none; cursor: pointer;
    padding: 9px 22px; border-radius: 8px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.85rem; font-weight: 600;
    box-shadow: 0 0 18px rgba(139,60,247,0.4);
    transition: box-shadow 0.2s, transform 0.15s;
  }
  .nav-btn:hover { box-shadow: 0 0 28px rgba(139,60,247,0.7); transform: translateY(-1px); }

  /* HERO */
  .hero {
    position: relative; z-index: 1;
    text-align: center;
    padding: 70px 20px 40px;
  }
  .hero h1 {
    font-size: 2.8rem; font-weight: 800;
    background: linear-gradient(135deg, #fff 30%, var(--accent) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    margin-bottom: 14px;
  }
  .hero p {
    color: var(--text-sub); font-size: 1rem; max-width: 520px; margin: 0 auto;
  }

  /* FILTER TABS */
  .filters {
    position: relative; z-index: 1;
    display: flex; justify-content: center; gap: 12px;
    padding: 30px 20px 10px;
    flex-wrap: wrap;
  }
  .filter-btn {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-sub);
    padding: 8px 20px; border-radius: 30px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.85rem; cursor: pointer;
    transition: all 0.2s;
  }
  .filter-btn:hover, .filter-btn.active {
    background: var(--purple-bright);
    border-color: var(--purple-bright);
    color: #fff;
    box-shadow: 0 0 14px rgba(139,60,247,0.4);
  }

  /* GRID */
  .shop-grid {
    position: relative; z-index: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 30px auto 60px;
    padding: 0 30px;
  }

  /* CARD */
  .product-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    cursor: pointer;
  }
  .product-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 50px rgba(139,60,247,0.25);
    border-color: rgba(139,60,247,0.55);
  }

  .card-badge {
    position: absolute; top: 14px; right: 14px;
    background: var(--purple-bright);
    color: #fff; font-size: 0.72rem; font-weight: 700;
    padding: 4px 10px; border-radius: 20px;
    box-shadow: 0 0 10px rgba(139,60,247,0.5);
  }
  .card-badge.hot { background: #e04444; box-shadow: 0 0 10px rgba(224,68,68,0.5); }
  .card-badge.new { background: #16a34a; box-shadow: 0 0 10px rgba(22,163,74,0.5); }

  .card-img-wrap {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  .card-img-wrap img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.4s;
  }
  .product-card:hover .card-img-wrap img { transform: scale(1.06); }

  .card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,10,18,0.7) 0%, transparent 60%);
  }

  .card-body { padding: 20px 20px 22px; }

  .card-category {
    font-size: 0.72rem; font-weight: 600;
    color: var(--purple-glow); letter-spacing: 1px;
    text-transform: uppercase; margin-bottom: 6px;
  }

  .card-title {
    font-size: 1.05rem; font-weight: 700; margin-bottom: 8px;
    color: var(--text-main); line-height: 1.5;
  }

  .card-desc {
    font-size: 0.82rem; color: var(--text-sub);
    line-height: 1.7; margin-bottom: 18px;
  }

  .card-features {
    display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px;
  }
  .feature-tag {
    background: rgba(139,60,247,0.12);
    border: 1px solid rgba(139,60,247,0.25);
    color: var(--accent);
    font-size: 0.72rem; padding: 3px 9px; border-radius: 20px;
  }

  .card-footer {
    display: flex; align-items: center; justify-content: space-between;
    border-top: 1px solid var(--border); padding-top: 16px;
  }

  .price-wrap {}
  .price-label { font-size: 0.72rem; color: var(--text-sub); }
  .price {
    font-size: 1.25rem; font-weight: 800;
    color: var(--gold);
  }
  .price span { font-size: 0.8rem; color: var(--text-sub); font-weight: 400; margin-right: 2px; }

  .old-price {
    font-size: 0.78rem; color: var(--text-sub);
    text-decoration: line-through; margin-top: 2px;
  }

  .buy-btn {
    background: linear-gradient(135deg, var(--purple-bright), var(--purple-mid));
    color: #fff; border: none; cursor: pointer;
    padding: 10px 22px; border-radius: 10px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.88rem; font-weight: 700;
    box-shadow: 0 4px 18px rgba(139,60,247,0.35);
    transition: box-shadow 0.2s, transform 0.15s;
  }
  .buy-btn:hover {
    box-shadow: 0 4px 28px rgba(139,60,247,0.65);
    transform: translateY(-1px);
  }

  /* FEATURED (wide card) */
  .featured {
    grid-column: 1 / -1;
    display: grid; grid-template-columns: 1fr 1fr;
  }
  .featured .card-img-wrap { height: 100%; min-height: 260px; }
  .featured .card-body { padding: 36px 30px; display: flex; flex-direction: column; justify-content: center; }
  .featured .card-title { font-size: 1.4rem; }
  .featured .card-desc { font-size: 0.9rem; }

  @media(max-width: 640px) {
    .featured { grid-template-columns: 1fr; }
    .featured .card-img-wrap { height: 200px; }
    nav { padding: 0 16px; }
    .nav-links { display: none; }
    .shop-grid { padding: 0 16px; }
    .hero h1 { font-size: 1.9rem; }
  }

  /* Stats bar */
  .stats-bar {
    position: relative; z-index: 1;
    display: flex; justify-content: center; gap: 50px;
    padding: 10px 20px 30px;
    flex-wrap: wrap;
  }
  .stat { text-align: center; }
  .stat-num { font-size: 1.5rem; font-weight: 800; color: var(--purple-glow); }
  .stat-label { font-size: 0.78rem; color: var(--text-sub); margin-top: 2px; }

  /* Divider */
  .section-title {
    position: relative; z-index: 1;
    text-align: center; padding: 20px;
    font-size: 1.5rem; font-weight: 700;
    color: var(--text-main);
  }
  .section-title span {
    background: linear-gradient(135deg, var(--purple-bright), var(--accent));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
</style>



<!-- NAVBAR -->
<nav>
  <div class="nav-logo">
    <div class="atom">⚛</div>
    هوش مصنوعی جهش
  </div>
  <ul class="nav-links">
    <li><a href="#">هوش مصنوعی جهش</a></li>
    <li><a href="#">اخبار</a></li>
    <li><a href="#">درباره انجمن</a></li>
    <li><a href="#">توسعه‌دهندگان</a></li>
    <li><a href="#" class="active">فروشگاه</a></li>
  </ul>
  <button class="nav-btn">عضویت در انجمن</button>
</nav>

<!-- HERO -->
<div class="hero">
  <h1>فروشگاه رسمی</h1>
  <p>پلن‌های اینترنت، VPN و ابزارهای هوشمند با کیفیت بالا و پشتیبانی ۲۴ ساعته</p>
</div>

<!-- STATS -->
<div class="stats-bar">
  <div class="stat"><div class="stat-num">+۱۲۰۰۰</div><div class="stat-label">کاربر فعال</div></div>
  <div class="stat"><div class="stat-num">۹۹.۹٪</div><div class="stat-label">آپتایم سرورها</div></div>
  <div class="stat"><div class="stat-num">۲۴/۷</div><div class="stat-label">پشتیبانی آنلاین</div></div>
  <div class="stat"><div class="stat-num">+۵۰</div><div class="stat-label">سرور در دسترس</div></div>
</div>

<!-- FILTERS -->
<div class="filters">
  <button class="filter-btn active" onclick="filterCards('all', this)">همه محصولات</button>
  <button class="filter-btn" onclick="filterCards('vpn', this)">VPN و اینترنت</button>
  <button class="filter-btn" onclick="filterCards('ai', this)">هوش مصنوعی</button>
  <button class="filter-btn" onclick="filterCards('cloud', this)">سرویس ابری</button>
</div>

<!-- SECTION TITLE -->
<div class="section-title">محصولات <span>ویژه</span></div>

<!-- GRID -->
<div class="shop-grid" id="shopGrid">

  <!-- FEATURED CARD -->
  <div class="product-card featured" data-cat="vpn">
    <div class="card-img-wrap">
      <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&amp;q=80" alt="VPN ویژه">
      <div class="card-overlay"></div>
      <div class="card-badge hot">🔥 پرفروش</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN حرفه‌ای</div>
      <div class="card-title">پلن حرفه‌ای سه ماهه — ۳ کاربر</div>
      <div class="card-desc">بهترین انتخاب برای کاربران حرفه‌ای. اتصال همزمان دو دستگاه، سرورهای بازی با پینگ پایین، آی‌پی ثابت و پشتیبانی کامل از تمام سیستم‌عامل‌ها.</div>
      <div class="card-features">
        <span class="feature-tag">ویندوز و اندروید</span>
        <span class="feature-tag">اتصال همزمان ۲ دستگاه</span>
        <span class="feature-tag">Fixed IP</span>
        <span class="feature-tag">سرور بازی Ping پایین</span>
      </div>
      <div class="card-footer">
        <div class="price-wrap">
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۸۰،۰۰۰ <span>تومان/ماه</span></div>
          <div class="old-price">قبلاً: ۲۲۰،۰۰۰ تومان</div>
        </div>
        <button class="buy-btn">خرید این پلن</button>
      </div>
    </div>
  </div>

  <!-- CARD 1 -->
  <div class="product-card" data-cat="vpn">
    <div class="card-img-wrap">
      <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&amp;q=80" alt="پلن پایه">
      <div class="card-overlay"></div>
      <div class="card-badge">اقتصادی</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN پایه</div>
      <div class="card-title">پلن پایه یک‌ماهه — ۱ کاربر</div>
      <div class="card-desc">اتصال پرسرعت و بدون قطعی برای یک کاربر. مناسب استفاده شخصی با پشتیبانی اندروید و پشتیبانی ۲۴ ساعته.</div>
      <div class="card-features">
        <span class="feature-tag">اندروید</span>
        <span class="feature-tag">ترافیک نیم‌بها</span>
        <span class="feature-tag">پشتیبانی ۲۴ ساعته</span>
      </div>
      <div class="card-footer">
        <div class="price-wrap">
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۷۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <!-- CARD 2 -->
  <div class="product-card" data-cat="vpn">
    <div class="card-img-wrap">
      <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&amp;q=80" alt="پلن تجاری">
      <div class="card-overlay"></div>
      <div class="card-badge new">💼 تجاری</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN تجاری</div>
      <div class="card-title">پلن تجاری یک‌ساله — ۱۲ کاربر</div>
      <div class="card-desc">راه‌حل کامل برای کسب‌وکارها. پشتیبانی از iOS، macOS، اتصال همزمان ۱۲ دستگاه و پهنای باند نامحدود.</div>
      <div class="card-features">
        <span class="feature-tag">iOS &amp; macOS</span>
        <span class="feature-tag">۱۲ دستگاه همزمان</span>
        <span class="feature-tag">پهنای باند نامحدود</span>
        <span class="feature-tag">اولویت پشتیبانی</span>
      </div>
      <div class="card-footer">
        <div class="price-wrap">
          <div class="price-label">قیمت سالانه</div>
          <div class="price">۷۰۰،۰۰۰ <span>تومان/سال</span></div>
          <div class="old-price">قبلاً: ۸۵۰،۰۰۰ تومان</div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <!-- CARD 3 -->
  <div class="product-card" data-cat="ai">
    <div class="card-img-wrap">
      <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&amp;q=80" alt="هوش مصنوعی">
      <div class="card-overlay"></div>
      <div class="card-badge new">✨ جدید</div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی</div>
      <div class="card-title">اشتراک ابزار هوش مصنوعی — ماهانه</div>
      <div class="card-desc">دسترسی به مجموعه ابزارهای هوش مصنوعی پیشرفته برای تولید محتوا، تحلیل داده و اتوماسیون.</div>
      <div class="card-features">
        <span class="feature-tag">GPT-4 دسترسی</span>
        <span class="feature-tag">تولید تصویر</span>
        <span class="feature-tag">API اختصاصی</span>
      </div>
      <div class="card-footer">
        <div class="price-wrap">
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۵۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <!-- CARD 4 -->
  <div class="product-card" data-cat="cloud">
    <div class="card-img-wrap">
      <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&amp;q=80" alt="سرور ابری">
      <div class="card-overlay"></div>
    </div>
    <div class="card-body">
      <div class="card-category">سرویس ابری</div>
      <div class="card-title">سرور اختصاصی ابری — ماهانه</div>
      <div class="card-desc">سرور ابری اختصاصی با منابع قابل تنظیم، آپتایم ۹۹.۹٪ و مدیریت پنل پیشرفته.</div>
      <div class="card-features">
        <span class="feature-tag">SSD NVMe</span>
        <span class="feature-tag">آپتایم ۹۹.۹٪</span>
        <span class="feature-tag">پنل مدیریت</span>
      </div>
      <div class="card-footer">
        <div class="price-wrap">
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۲۵۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <!-- CARD 5 -->
  <div class="product-card" data-cat="ai">
    <div class="card-img-wrap">
      <img src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&amp;q=80" alt="چت‌بات">
      <div class="card-overlay"></div>
      <div class="card-badge hot">🔥</div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی</div>
      <div class="card-title">چت‌بات اختصاصی کسب‌وکار</div>
      <div class="card-desc">راه‌اندازی چت‌بات هوشمند برای سایت یا پیام‌رسان شما. آموزش با داده‌های اختصاصی شما.</div>
      <div class="card-features">
        <span class="feature-tag">آموزش اختصاصی</span>
        <span class="feature-tag">چند زبانه</span>
        <span class="feature-tag">API ادغام</span>
      </div>
      <div class="card-footer">
        <div class="price-wrap">
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۳۵۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <!-- CARD 6 -->
  <div class="product-card" data-cat="cloud">
    <div class="card-img-wrap">
      <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&amp;q=80" alt="دامنه">
      <div class="card-overlay"></div>
    </div>
    <div class="card-body">
      <div class="card-category">سرویس ابری</div>
      <div class="card-title">ذخیره‌سازی ابری امن</div>
      <div class="card-desc">فضای ذخیره‌سازی رمزنگاری‌شده با دسترسی از هر دستگاه. مناسب تیم‌های توسعه‌دهنده.</div>
      <div class="card-features">
        <span class="feature-tag">رمزنگاری E2E</span>
        <span class="feature-tag">۵۰۰ گیگابایت</span>
        <span class="feature-tag">اشتراک تیمی</span>
      </div>
      <div class="card-footer">
        <div class="price-wrap">
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۲۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

</div>

<script>
function filterCards(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
<\/script>


`,className:"w-html-embed"})}),k=t=>{const{origin:e,pathname:i,search:s}=new URL(t);return`${e}${i}${s}`},S=c.memo(({pageKey:t,system:e})=>a.jsx(z,{system:e},t),(t,e)=>t.pageKey===e.pageKey),P=({data:t})=>{const{system:e,resources:i,url:s,pageMeta:o}=t,l=k(s),p=c.useMemo(()=>({imageLoader:d,assetBaseUrl:r,resources:i,breakpoints:m,onError:console.error}),[i]);return a.jsxs(v.Provider,{value:p,children:[a.jsx(g.Provider,{value:s,children:a.jsx(S,{pageKey:l,system:e})}),a.jsx(u,{url:s,pageMeta:o,siteName:n,imageLoader:d,assetBaseUrl:r}),a.jsx(b,{children:o.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),A=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:n};return a.jsxs(a.Fragment,{children:[a.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),a.jsx("link",{rel:"icon",href:d({src:`${r}${h}`})}),y.map(e=>a.jsx("link",{rel:"preload",href:`${r}${e}`,as:"font",crossOrigin:"anonymous"},e)),w.map(e=>a.jsx("link",{rel:"preload",href:`${r}${e}`,as:"image"},e))]})},R=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-21/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-21/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:R}}};export{C as configValuesSerialized};
