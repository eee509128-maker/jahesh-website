import{j as a,r as l,a as e,i as t,R as n,b as g,P as u,c as b,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],P=d=>a.jsx("body",{className:"w-element",children:a.jsx(f,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>فروشگاه - هوش مصنوعی جهش</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet">
<style>
  :root {
    --bg-dark: #0a0a12;
    --bg-card: #12101f;
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
  body::before {
    content: '';
    position: fixed;
    top: -200px; right: -200px;
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(139,60,247,0.15) 0%, transparent 70%);
    pointer-events: none; z-index: 0;
  }
  body::after {
    content: '';
    position: fixed;
    bottom: -200px; left: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(91,45,142,0.12) 0%, transparent 70%);
    pointer-events: none; z-index: 0;
  }

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
  .nav-links { display: flex; gap: 28px; list-style: none; }
  .nav-links a {
    color: var(--text-sub); text-decoration: none;
    font-size: 0.9rem; font-weight: 500; transition: color 0.2s;
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
  @media(max-width:640px){ nav { padding: 0 16px; } .nav-links { display: none; } }

  .shop-grid {
    position: relative; z-index: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 22px;
    max-width: 1300px;
    margin: 0 auto 60px;
    padding: 0 30px;
  }

  .product-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    cursor: pointer;
    position: relative;
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
    z-index: 2;
  }
  .card-badge.hot { background: #e04444; box-shadow: 0 0 10px rgba(224,68,68,0.5); }
  .card-badge.new { background: #16a34a; box-shadow: 0 0 10px rgba(22,163,74,0.5); }
  .card-badge.sale { background: #d97706; box-shadow: 0 0 10px rgba(217,119,6,0.5); }

  .card-img-wrap { position: relative; height: 180px; overflow: hidden; }
  .card-img-wrap img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.4s;
  }
  .product-card:hover .card-img-wrap img { transform: scale(1.06); }
  .card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,10,18,0.75) 0%, transparent 60%);
  }

  .card-body { padding: 18px 18px 20px; }
  .card-category {
    font-size: 0.7rem; font-weight: 600;
    color: var(--purple-glow); letter-spacing: 1px;
    text-transform: uppercase; margin-bottom: 5px;
  }
  .card-title { font-size: 1rem; font-weight: 700; margin-bottom: 7px; color: var(--text-main); line-height: 1.5; }
  .card-desc { font-size: 0.8rem; color: var(--text-sub); line-height: 1.7; margin-bottom: 14px; }
  .card-features { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 14px; }
  .feature-tag {
    background: rgba(139,60,247,0.12);
    border: 1px solid rgba(139,60,247,0.25);
    color: var(--accent);
    font-size: 0.7rem; padding: 3px 8px; border-radius: 20px;
  }
  .card-footer {
    display: flex; align-items: center; justify-content: space-between;
    border-top: 1px solid var(--border); padding-top: 14px;
  }
  .price { font-size: 1.15rem; font-weight: 800; color: var(--gold); }
  .price span { font-size: 0.75rem; color: var(--text-sub); font-weight: 400; margin-right: 2px; }
  .old-price { font-size: 0.74rem; color: var(--text-sub); text-decoration: line-through; margin-top: 2px; }
  .price-label { font-size: 0.68rem; color: var(--text-sub); }

  .buy-btn {
    background: linear-gradient(135deg, var(--purple-bright), var(--purple-mid));
    color: #fff; border: none; cursor: pointer;
    padding: 9px 18px; border-radius: 10px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.83rem; font-weight: 700;
    box-shadow: 0 4px 16px rgba(139,60,247,0.35);
    transition: box-shadow 0.2s, transform 0.15s;
    white-space: nowrap;
  }
  .buy-btn:hover { box-shadow: 0 4px 28px rgba(139,60,247,0.65); transform: translateY(-1px); }

  .wide { grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; }
  .wide .card-img-wrap { height: 100%; min-height: 220px; }
  .wide .card-body { padding: 30px 26px; display: flex; flex-direction: column; justify-content: center; }
  .wide .card-title { font-size: 1.25rem; }

  @media(max-width: 700px) {
    .wide { grid-column: span 1; grid-template-columns: 1fr; }
    .wide .card-img-wrap { height: 180px; }
    .shop-grid { padding: 0 16px; }
  }

  .cat-divider {
    position: relative; z-index: 1;
    max-width: 1300px; margin: 40px auto 0; padding: 0 30px;
    display: flex; align-items: center; gap: 16px;
  }
  .cat-divider h2 { font-size: 1.15rem; font-weight: 700; white-space: nowrap; color: var(--text-main); }
  .cat-divider h2 span { color: var(--purple-glow); }
  .cat-divider::after {
    content: ''; flex: 1; height: 1px;
    background: linear-gradient(to left, transparent, var(--border));
  }
</style>



<nav>
  <div class="nav-logo">
    <div class="atom">⚛</div>
    هوش مصنوعی جهش
  </div>
  <ul class="nav-links">
    <li><a href="#">هوش مصنوعی جهش</a></li>
    <li><a href="#">اخبار</a></li>
    <li><a href="#">درباره انجمن</a></li>
    <li><a href="https://jahesh-website.vercel.app/abzar-jahesh">داشبورد تکنولوژی جهش</a></li>
    <li><a href="#" class="active">فروشگاه</a></li>
  </ul>
  <button class="nav-btn">عضویت در انجمن</button>
</nav>

<!-- ===== VPN ===== -->
<div class="cat-divider"><h2>🔐 پلن‌های <span>VPN و اینترنت</span></h2></div>
<div class="shop-grid">

  <div class="product-card wide">
    <div class="card-img-wrap">
      <!-- شبکه و سرور -->
      <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800" alt="VPN ویژه">
      <div class="card-overlay"></div>
      <div class="card-badge hot">🔥 پرفروش</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN حرفه‌ای</div>
      <div class="card-title">پلن حرفه‌ای سه ماهه — ۳ کاربر همزمان</div>
      <div class="card-desc">بهترین انتخاب برای کاربران حرفه‌ای. اتصال همزمان سه دستگاه، سرورهای بازی با پینگ پایین، آی‌پی ثابت و پشتیبانی کامل از تمام سیستم‌عامل‌ها.</div>
      <div class="card-features">
        <span class="feature-tag">ویندوز و اندروید</span>
        <span class="feature-tag">اتصال همزمان ۳ دستگاه</span>
        <span class="feature-tag">Fixed IP</span>
        <span class="feature-tag">سرور بازی Ping پایین</span>
        <span class="feature-tag">پشتیبانی ۲۴/۷</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۸۰،۰۰۰ <span>تومان/ماه</span></div>
          <div class="old-price">قبلاً: ۲۲۰،۰۰۰ تومان</div>
        </div>
        <button class="buy-btn">خرید این پلن</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="پلن پایه">
      <div class="card-overlay"></div>
      <div class="card-badge">اقتصادی</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN پایه</div>
      <div class="card-title">پلن پایه یک‌ماهه — ۱ کاربر</div>
      <div class="card-desc">اتصال پرسرعت برای یک کاربر. مناسب استفاده شخصی با پشتیبانی اندروید.</div>
      <div class="card-features">
        <span class="feature-tag">اندروید</span>
        <span class="feature-tag">ترافیک نیم‌بها</span>
        <span class="feature-tag">پشتیبانی ۲۴ ساعته</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۷۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="پلن تجاری">
      <div class="card-overlay"></div>
      <div class="card-badge new">💼 تجاری</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN تجاری</div>
      <div class="card-title">پلن تجاری یک‌ساله — ۱۲ کاربر</div>
      <div class="card-desc">پهنای باند نامحدود، پشتیبانی iOS و macOS، اتصال همزمان ۱۲ دستگاه.</div>
      <div class="card-features">
        <span class="feature-tag">iOS &amp; macOS</span>
        <span class="feature-tag">۱۲ دستگاه همزمان</span>
        <span class="feature-tag">پهنای باند نامحدود</span>
        <span class="feature-tag">اولویت پشتیبانی</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت سالانه</div>
          <div class="price">۷۰۰،۰۰۰ <span>تومان/سال</span></div>
          <div class="old-price">قبلاً: ۸۵۰،۰۰۰ تومان</div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="VPN نیم‌ساله">
      <div class="card-overlay"></div>
      <div class="card-badge sale">🎯 صرفه‌جویی</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN نیم‌ساله</div>
      <div class="card-title">پلن نیم‌ساله — ۲ کاربر همزمان</div>
      <div class="card-desc">شش ماه اشتراک پرسرعت با تخفیف ویژه. مناسب استفاده روزانه کاربران فعال.</div>
      <div class="card-features">
        <span class="feature-tag">ویندوز، اندروید</span>
        <span class="feature-tag">۲ دستگاه همزمان</span>
        <span class="feature-tag">Fixed IP اختیاری</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت کل</div>
          <div class="price">۳۶۰،۰۰۰ <span>تومان</span></div>
          <div class="old-price">قبلاً: ۴۲۰،۰۰۰ تومان</div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="VPN دانشجویی">
      <div class="card-overlay"></div>
      <div class="card-badge new">🎓 دانشجویی</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN دانشجویی</div>
      <div class="card-title">پلن دانشجویی ماهانه — ۱ کاربر</div>
      <div class="card-desc">ویژه دانشجویان و دانش‌آموزان. اتصال پایدار با قیمت مناسب. نیاز به تایید دانشجویی.</div>
      <div class="card-features">
        <span class="feature-tag">اندروید و iOS</span>
        <span class="feature-tag">پینگ پایین</span>
        <span class="feature-tag">تأیید دانشجویی</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۴۵،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="VPN گیمر">
      <div class="card-overlay"></div>
      <div class="card-badge hot">🎮 گیمر</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN بازی</div>
      <div class="card-title">پلن گیمر پرسرعت — ماهانه</div>
      <div class="card-desc">بهینه‌شده برای بازی‌های آنلاین. پینگ زیر ۵۰ms، جیتر صفر و سرورهای اختصاصی گیمینگ.</div>
      <div class="card-features">
        <span class="feature-tag">پینگ زیر ۵۰ms</span>
        <span class="feature-tag">سرور اختصاصی بازی</span>
        <span class="feature-tag">جیتر صفر</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۱۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="VPN خانواده">
      <div class="card-overlay"></div>
      <div class="card-badge">👨‍👩‍👧 خانواده</div>
    </div>
    <div class="card-body">
      <div class="card-category">VPN خانوادگی</div>
      <div class="card-title">پلن خانواده — ۵ کاربر همزمان</div>
      <div class="card-desc">برای کل خانواده. ۵ اتصال همزمان، فیلتر محتوای کودکان، آموزش نصب رایگان.</div>
      <div class="card-features">
        <span class="feature-tag">۵ دستگاه همزمان</span>
        <span class="feature-tag">فیلتر محتوای کودک</span>
        <span class="feature-tag">iOS، Android، Windows</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۲۲۰،۰۰۰ <span>تومان/ماه</span></div>
          <div class="old-price">قبلاً: ۲۷۰،۰۰۰ تومان</div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

</div>

<!-- ===== هوش مصنوعی ===== -->
<div class="cat-divider"><h2>🤖 ابزارهای <span>هوش مصنوعی</span></h2></div>
<div class="shop-grid">

  <div class="product-card wide">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800" alt="هوش مصنوعی">
      <div class="card-overlay"></div>
      <div class="card-badge new">✨ جدید</div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی پیشرفته</div>
      <div class="card-title">اشتراک کامل ابزار AI — دسترسی به تمام مدل‌ها</div>
      <div class="card-desc">دسترسی نامحدود به GPT-4o، Claude، Gemini و Midjourney. تولید محتوا، تحلیل داده، تولید تصویر و اتوماسیون همه در یک پلن.</div>
      <div class="card-features">
        <span class="feature-tag">GPT-4o</span>
        <span class="feature-tag">Claude Opus</span>
        <span class="feature-tag">Gemini Ultra</span>
        <span class="feature-tag">تولید تصویر</span>
        <span class="feature-tag">API اختصاصی</span>
        <span class="feature-tag">بدون محدودیت</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۳۹۰،۰۰۰ <span>تومان/ماه</span></div>
          <div class="old-price">قبلاً: ۴۸۰،۰۰۰ تومان</div>
        </div>
        <button class="buy-btn">خرید این پلن</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="چت‌بات">
      <div class="card-overlay"></div>
      <div class="card-badge hot">🔥</div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی</div>
      <div class="card-title">چت‌بات اختصاصی کسب‌وکار</div>
      <div class="card-desc">راه‌اندازی چت‌بات هوشمند برای سایت یا پیام‌رسان شما. آموزش با داده‌های اختصاصی.</div>
      <div class="card-features">
        <span class="feature-tag">آموزش اختصاصی</span>
        <span class="feature-tag">چند زبانه</span>
        <span class="feature-tag">API ادغام</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۳۵۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="تولید تصویر">
      <div class="card-overlay"></div>
      <div class="card-badge new">🎨 هنر</div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی</div>
      <div class="card-title">پلن تولید تصویر AI — ماهانه</div>
      <div class="card-desc">تولید تصاویر حرفه‌ای با Midjourney، DALL-E و Stable Diffusion. ۵۰۰ تصویر در ماه.</div>
      <div class="card-features">
        <span class="feature-tag">Midjourney</span>
        <span class="feature-tag">DALL-E 3</span>
        <span class="feature-tag">۵۰۰ تصویر/ماه</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۸۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="تولید محتوا">
      <div class="card-overlay"></div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی</div>
      <div class="card-title">دستیار تولید محتوا — ماهانه</div>
      <div class="card-desc">تولید مقاله، پست اینستاگرام، کپشن و محتوای سئو با هوش مصنوعی. مناسب بلاگرها.</div>
      <div class="card-features">
        <span class="feature-tag">سئو اتوماتیک</span>
        <span class="feature-tag">فارسی و انگلیسی</span>
        <span class="feature-tag">خروجی Word</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۲۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="کد AI">
      <div class="card-overlay"></div>
      <div class="card-badge hot">👨‍💻 کدنویس</div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی</div>
      <div class="card-title">دستیار کدنویسی هوشمند — ماهانه</div>
      <div class="card-desc">دسترسی به GitHub Copilot، Cursor AI و CodeWhisperer. تکمیل خودکار و دیباگ هوشمند.</div>
      <div class="card-features">
        <span class="feature-tag">GitHub Copilot</span>
        <span class="feature-tag">Cursor AI</span>
        <span class="feature-tag">دیباگ خودکار</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۲۲۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="ترجمه">
      <div class="card-overlay"></div>
      <div class="card-badge new">🌍 ترجمه</div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی</div>
      <div class="card-title">ترجمه هوشمند حرفه‌ای — ماهانه</div>
      <div class="card-desc">ترجمه دقیق و روان ۵۰+ زبان با هوش مصنوعی. مناسب اسناد حقوقی، تکنیکی و ادبی.</div>
      <div class="card-features">
        <span class="feature-tag">۵۰+ زبان</span>
        <span class="feature-tag">اسناد PDF</span>
        <span class="feature-tag">حافظه اصطلاحات</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۹۵،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="تحلیل داده">
      <div class="card-overlay"></div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی</div>
      <div class="card-title">تحلیلگر داده AI — ماهانه</div>
      <div class="card-desc">آپلود CSV، Excel و دریافت تحلیل، نمودار و گزارش حرفه‌ای خودکار.</div>
      <div class="card-features">
        <span class="feature-tag">Excel &amp; CSV</span>
        <span class="feature-tag">نمودار خودکار</span>
        <span class="feature-tag">گزارش PDF</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۶۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="تبدیل صوت">
      <div class="card-overlay"></div>
      <div class="card-badge">🎙️ صوت</div>
    </div>
    <div class="card-body">
      <div class="card-category">هوش مصنوعی</div>
      <div class="card-title">تبدیل گفتار به متن — ماهانه</div>
      <div class="card-desc">رونویسی خودکار فایل‌های صوتی و ویدئویی با دقت ۹۸٪. پشتیبانی از فارسی و انگلیسی.</div>
      <div class="card-features">
        <span class="feature-tag">دقت ۹۸٪</span>
        <span class="feature-tag">فارسی &amp; انگلیسی</span>
        <span class="feature-tag">۱۰ ساعت/ماه</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۸۵،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

</div>

<!-- ===== سرویس ابری ===== -->
<div class="cat-divider"><h2>☁️ سرویس‌های <span>ابری و هاستینگ</span></h2></div>
<div class="shop-grid">

  <div class="product-card wide">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800" alt="سرور ابری">
      <div class="card-overlay"></div>
      <div class="card-badge hot">🚀 قدرتمند</div>
    </div>
    <div class="card-body">
      <div class="card-category">سرور ابری پریمیوم</div>
      <div class="card-title">سرور اختصاصی پرقدرت — ۱۶ هسته CPU</div>
      <div class="card-desc">سرور ابری اختصاصی با ۱۶ هسته CPU، ۳۲ گیگابایت RAM، ۵۰۰ گیگابایت NVMe SSD، آپتایم ۹۹.۹٪ و پشتیبانی فنی اختصاصی.</div>
      <div class="card-features">
        <span class="feature-tag">۱۶ Core CPU</span>
        <span class="feature-tag">۳۲GB RAM</span>
        <span class="feature-tag">۵۰۰GB NVMe</span>
        <span class="feature-tag">آپتایم ۹۹.۹٪</span>
        <span class="feature-tag">پشتیبانی اختصاصی</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱،۲۰۰،۰۰۰ <span>تومان/ماه</span></div>
          <div class="old-price">قبلاً: ۱،۵۰۰،۰۰۰ تومان</div>
        </div>
        <button class="buy-btn">خرید این پلن</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="سرور پایه">
      <div class="card-overlay"></div>
    </div>
    <div class="card-body">
      <div class="card-category">سرویس ابری</div>
      <div class="card-title">سرور ابری پایه — ۲ هسته CPU</div>
      <div class="card-desc">مناسب پروژه‌های کوچک و توسعه‌دهندگان مستقل. ۲ هسته، ۴ گیگابایت RAM.</div>
      <div class="card-features">
        <span class="feature-tag">۲ Core CPU</span>
        <span class="feature-tag">۴GB RAM</span>
        <span class="feature-tag">۸۰GB SSD</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۲۵۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="هاست">
      <div class="card-overlay"></div>
      <div class="card-badge new">🌐 هاست</div>
    </div>
    <div class="card-body">
      <div class="card-category">هاستینگ</div>
      <div class="card-title">هاست مشترک پرسرعت — ماهانه</div>
      <div class="card-desc">هاست NVMe با cPanel کامل. مناسب سایت‌های شرکتی، فروشگاهی و وردپرس.</div>
      <div class="card-features">
        <span class="feature-tag">cPanel کامل</span>
        <span class="feature-tag">NVMe SSD</span>
        <span class="feature-tag">SSL رایگان</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۸۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="ذخیره‌سازی">
      <div class="card-overlay"></div>
    </div>
    <div class="card-body">
      <div class="card-category">سرویس ابری</div>
      <div class="card-title">ذخیره‌سازی ابری امن — ۵۰۰GB</div>
      <div class="card-desc">فضای ذخیره رمزنگاری‌شده با دسترسی از هر دستگاه. مناسب تیم‌های توسعه.</div>
      <div class="card-features">
        <span class="feature-tag">رمزنگاری E2E</span>
        <span class="feature-tag">۵۰۰ گیگابایت</span>
        <span class="feature-tag">اشتراک تیمی</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۲۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="دامنه">
      <div class="card-overlay"></div>
      <div class="card-badge sale">🌍 دامنه</div>
    </div>
    <div class="card-body">
      <div class="card-category">دامنه</div>
      <div class="card-title">ثبت دامنه .ir و .com — سالانه</div>
      <div class="card-desc">ثبت و تمدید دامنه‌های .ir، .com، .net و .org. انتقال دامنه رایگان.</div>
      <div class="card-features">
        <span class="feature-tag">.ir .com .net</span>
        <span class="feature-tag">انتقال رایگان</span>
        <span class="feature-tag">DNS مدیریت</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت سالانه</div>
          <div class="price">از ۱۵۰،۰۰۰ <span>تومان/سال</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="CDN">
      <div class="card-overlay"></div>
      <div class="card-badge">⚡ CDN</div>
    </div>
    <div class="card-body">
      <div class="card-category">سرویس ابری</div>
      <div class="card-title">شبکه CDN پیشرفته — ماهانه</div>
      <div class="card-desc">توزیع محتوا از ۵۰+ نقطه دنیا. کاهش زمان بارگذاری سایت تا ۸۰٪. ضد DDoS.</div>
      <div class="card-features">
        <span class="feature-tag">۵۰+ PoP</span>
        <span class="feature-tag">ضد DDoS</span>
        <span class="feature-tag">SSL رایگان</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۹۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

</div>

<!-- ===== ابزارهای توسعه ===== -->
<div class="cat-divider"><h2>🛠️ ابزارهای <span>توسعه‌دهندگان</span></h2></div>
<div class="shop-grid">

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="API">
      <div class="card-overlay"></div>
      <div class="card-badge new">🔌 API</div>
    </div>
    <div class="card-body">
      <div class="card-category">توسعه‌دهندگان</div>
      <div class="card-title">API Gateway هوش مصنوعی — ماهانه</div>
      <div class="card-desc">دسترسی یکپارچه به تمام API های AI با یک کلید. Rate limit بالا و پشتیبانی SDK.</div>
      <div class="card-features">
        <span class="feature-tag">یک کلید API</span>
        <span class="feature-tag">SDK Python &amp; JS</span>
        <span class="feature-tag">۱M توکن/ماه</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۴۵۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="CI/CD">
      <div class="card-overlay"></div>
    </div>
    <div class="card-body">
      <div class="card-category">توسعه‌دهندگان</div>
      <div class="card-title">پلتفرم CI/CD اختصاصی — ماهانه</div>
      <div class="card-desc">ساخت و استقرار خودکار برنامه‌ها. یکپارچه با GitHub، GitLab و Bitbucket.</div>
      <div class="card-features">
        <span class="feature-tag">GitHub &amp; GitLab</span>
        <span class="feature-tag">Docker</span>
        <span class="feature-tag">Kubernetes</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۳۲۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="مانیتورینگ">
      <div class="card-overlay"></div>
      <div class="card-badge hot">📊 مانیتور</div>
    </div>
    <div class="card-body">
      <div class="card-category">توسعه‌دهندگان</div>
      <div class="card-title">مانیتورینگ سرور و سایت — ماهانه</div>
      <div class="card-desc">نظارت ۲۴/۷ بر سرورها، آپتایم سایت و عملکرد پایگاه داده. هشدار فوری.</div>
      <div class="card-features">
        <span class="feature-tag">نظارت ۲۴/۷</span>
        <span class="feature-tag">هشدار SMS</span>
        <span class="feature-tag">گزارش ماهانه</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۱۴۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="card-img-wrap">
      <img src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="دیتابیس">
      <div class="card-overlay"></div>
      <div class="card-badge">🗄️ DB</div>
    </div>
    <div class="card-body">
      <div class="card-category">توسعه‌دهندگان</div>
      <div class="card-title">دیتابیس ابری مدیریت‌شده — ماهانه</div>
      <div class="card-desc">PostgreSQL، MySQL و MongoDB ابری با بکاپ خودکار روزانه و scaling اتوماتیک.</div>
      <div class="card-features">
        <span class="feature-tag">PostgreSQL</span>
        <span class="feature-tag">MySQL &amp; MongoDB</span>
        <span class="feature-tag">بکاپ روزانه</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-label">قیمت ماهانه</div>
          <div class="price">۲۸۰،۰۰۰ <span>تومان/ماه</span></div>
        </div>
        <button class="buy-btn">خرید</button>
      </div>
    </div>
  </div>

</div>

<div style="height:50px"></div>


`,className:"w-html-embed"})}),j=d=>{const{origin:s,pathname:c,search:i}=new URL(d);return`${s}${c}${i}`},S=l.memo(({pageKey:d,system:s})=>a.jsx(P,{system:s},d),(d,s)=>d.pageKey===s.pageKey),z=({data:d})=>{const{system:s,resources:c,url:i,pageMeta:r}=d,o=j(i),v=l.useMemo(()=>({imageLoader:t,assetBaseUrl:e,resources:c,breakpoints:h,onError:console.error}),[c]);return a.jsxs(n.Provider,{value:v,children:[a.jsx(g.Provider,{value:i,children:a.jsx(S,{pageKey:o,system:s})}),a.jsx(u,{url:i,pageMeta:r,siteName:p,imageLoader:t,assetBaseUrl:e}),a.jsx(b,{children:r.title})]})},k=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),A=({})=>{const d={"@context":"https://schema.org","@type":"WebSite",name:p};return a.jsxs(a.Fragment,{children:[a.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(d,null,2)}}),a.jsx("link",{rel:"icon",href:t({src:`${e}${y}`})}),x.map(s=>a.jsx("link",{rel:"preload",href:`${e}${s}`,as:"font",crossOrigin:"anonymous"},s)),w.map(s=>a.jsx("link",{rel:"preload",href:`${e}${s}`,as:"image"},s))]})},V=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-26/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-26/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}}};export{M as configValuesSerialized};
