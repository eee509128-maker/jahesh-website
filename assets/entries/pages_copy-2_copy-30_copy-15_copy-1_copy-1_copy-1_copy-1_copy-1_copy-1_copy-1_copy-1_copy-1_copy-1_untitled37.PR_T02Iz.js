import{j as e,r as c,a as r,i as n,R as p,b as u,P as f,c as g,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],E=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element c1pzicie cl4bapb c138vb52 cl8xzcs c1y6imu0",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>جدول تناوبی مندلیف</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #050a0e;
    --panel: rgba(0,255,200,0.03);
    --border: rgba(0,255,200,0.15);
    --glow: #00ffc8;
    --glow2: #00aaff;
    --text: #c8fff0;
    --dim: rgba(200,255,240,0.4);
    --transition: 1.2s cubic-bezier(0.77,0,0.175,1);
  }

  html, body {
    width: 100%; height: 100%; overflow: hidden;
    background: var(--bg);
    color: var(--text);
    font-family: 'Share Tech Mono', monospace;
  }

  body::before {
    content: '';
    position: fixed; inset: 0;
    background: radial-gradient(ellipse at 50% 30%, rgba(0,255,200,0.04) 0%, transparent 70%),
                radial-gradient(ellipse at 80% 80%, rgba(0,170,255,0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  .controls {
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    z-index: 100;
    display: flex; gap: 8px;
    background: rgba(0,20,15,0.8);
    border: 1px solid var(--border);
    padding: 8px 16px;
    border-radius: 40px;
    backdrop-filter: blur(20px);
  }

  .controls button {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--dim);
    font-family: 'Orbitron', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 8px 18px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .controls button:hover { color: var(--glow); border-color: var(--glow); }
  .controls button.is-active {
    color: var(--bg); background: var(--glow);
    border-color: var(--glow);
    box-shadow: 0 0 20px var(--glow), 0 0 40px rgba(0,255,200,0.3);
  }

  #scene {
    position: fixed; inset: 0;
    perspective: 1200px;
    overflow: hidden;
    display: flex; align-items: center; justify-content: center;
  }

  #scene-content {
    position: relative;
    transform-style: preserve-3d;
    transition: transform var(--transition);
    width: 0; height: 0;
  }

  .element {
    position: absolute;
    width: 72px; height: 72px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 4px;
    cursor: pointer;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 4px;
    transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    outline: none;
    overflow: hidden;
  }
  .element:hover {
    border-color: var(--glow);
    background: rgba(0,255,200,0.08);
    box-shadow: 0 0 20px rgba(0,255,200,0.3), inset 0 0 10px rgba(0,255,200,0.05);
    z-index: 10;
  }

  .element[data-color="0"] { border-color: rgba(0,255,200,0.25); }
  .element[data-color="1"] { border-color: rgba(255,80,80,0.3); }
  .element[data-color="2"] { border-color: rgba(80,180,255,0.3); }
  .element[data-color="3"] { border-color: rgba(255,180,50,0.3); }
  .element[data-color="4"] { border-color: rgba(180,100,255,0.3); }
  .element[data-color="5"] { border-color: rgba(80,255,140,0.3); }
  .element[data-color="6"] { border-color: rgba(255,120,200,0.3); }
  .element[data-color="7"] { border-color: rgba(100,200,255,0.3); }
  .element[data-color="8"] { border-color: rgba(255,200,100,0.3); }
  .element[data-color="9"] { border-color: rgba(200,255,100,0.3); }

  .element-number { font-size: 9px; color: var(--dim); align-self: flex-start; line-height: 1; font-family: 'Share Tech Mono', monospace; }
  .element-symbol { font-family: 'Orbitron', sans-serif; font-size: 18px; font-weight: 900; color: var(--glow); line-height: 1; text-shadow: 0 0 10px var(--glow); }
  .element-title { font-size: 7px; color: var(--dim); text-align: center; line-height: 1.2; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%; }
  .element-description { font-size: 6px; color: rgba(200,255,240,0.25); text-align: center; }

  .credits {
    position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%);
    font-size: 10px; color: var(--dim);
    letter-spacing: 1px;
    z-index: 100;
  }

  body::after {
    content: '';
    position: fixed; inset: 0;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,200,0.01) 2px, rgba(0,255,200,0.01) 4px);
    pointer-events: none; z-index: 200;
  }

  /* ===== MODAL ===== */
  #info-overlay {
    position: fixed; inset: 0;
    z-index: 500;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0,0,0,0);
    backdrop-filter: blur(0px);
    pointer-events: none;
    transition: background 0.4s, backdrop-filter 0.4s;
  }
  #info-overlay.open {
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(8px);
    pointer-events: all;
  }

  #info-card {
    position: relative;
    width: 420px; max-width: 92vw;
    background: rgba(3, 18, 14, 0.95);
    border: 1px solid var(--glow);
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 0 60px rgba(0,255,200,0.2), 0 0 120px rgba(0,255,200,0.08), inset 0 0 30px rgba(0,255,200,0.03);
    direction: rtl;
    font-family: 'Tahoma', 'Segoe UI', sans-serif;
    transform: scale(0.85) translateY(20px);
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
  }
  #info-overlay.open #info-card {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  #info-card::before {
    content: '';
    position: absolute; inset: 0;
    border-radius: 12px;
    background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,200,0.008) 3px, rgba(0,255,200,0.008) 6px);
    pointer-events: none;
  }

  .info-header {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0,255,200,0.15);
  }

  .info-symbol-box {
    width: 80px; height: 80px;
    border: 2px solid var(--glow);
    border-radius: 8px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    flex-shrink: 0;
    background: rgba(0,255,200,0.05);
    box-shadow: 0 0 20px rgba(0,255,200,0.2), inset 0 0 15px rgba(0,255,200,0.05);
  }
  .info-symbol-box .sym { font-family: 'Orbitron', sans-serif; font-size: 32px; font-weight: 900; color: var(--glow); text-shadow: 0 0 15px var(--glow); line-height: 1; }
  .info-symbol-box .num { font-size: 11px; color: var(--dim); font-family: 'Share Tech Mono', monospace; }

  .info-title-block { flex: 1; }
  .info-name-fa { font-size: 22px; font-weight: bold; color: var(--glow); margin-bottom: 4px; }
  .info-name-en { font-size: 13px; color: var(--dim); direction: ltr; text-align: left; margin-bottom: 8px; font-family: 'Share Tech Mono', monospace; }
  .info-category { display: inline-block; font-size: 11px; padding: 3px 12px; border-radius: 20px; border: 1px solid; color: var(--glow); border-color: var(--glow); background: rgba(0,255,200,0.08); }

  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 20px;
  }

  .info-item {
    background: rgba(0,255,200,0.04);
    border: 1px solid rgba(0,255,200,0.1);
    border-radius: 8px;
    padding: 10px 14px;
  }
  .info-item .label { font-size: 10px; color: var(--dim); margin-bottom: 4px; }
  .info-item .value { font-size: 15px; color: var(--text); font-family: 'Share Tech Mono', monospace; }

  .info-desc {
    font-size: 13px;
    line-height: 1.9;
    color: rgba(200,255,240,0.75);
    border-top: 1px solid rgba(0,255,200,0.1);
    padding-top: 16px;
  }

  .info-close {
    position: absolute;
    top: 14px; left: 16px;
    background: transparent;
    border: 1px solid rgba(0,255,200,0.2);
    color: var(--dim);
    width: 30px; height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.2s;
    font-family: monospace;
  }
  .info-close:hover { color: var(--glow); border-color: var(--glow); box-shadow: 0 0 10px rgba(0,255,200,0.3); }

  .corner-tl, .corner-tr, .corner-bl, .corner-br {
    position: absolute; width: 12px; height: 12px;
    border-color: var(--glow); border-style: solid; opacity: 0.6;
  }
  .corner-tl { top: 8px; right: 8px; border-width: 2px 0 0 2px; }
  .corner-tr { top: 8px; left: 8px; border-width: 2px 2px 0 0; }
  .corner-bl { bottom: 8px; right: 8px; border-width: 0 0 2px 2px; }
  .corner-br { bottom: 8px; left: 8px; border-width: 0 2px 2px 0; }
</style>



<div class="controls">
  <button class="is-active toggle" id="btn-table" data-layout="table">TABLE</button>
  <button class="toggle" id="btn-sphere" data-layout="sphere">SPHERE</button>
  <button class="toggle" id="btn-helix" data-layout="helix">HELIX</button>
  <button class="toggle" id="btn-grid" data-layout="grid">GRID</button>
</div>

<div id="scene">
  <div id="scene-content" data-layout="table"></div>
</div>

<div id="info-overlay">
  <div id="info-card">
    <div class="corner-tl"></div>
    <div class="corner-tr"></div>
    <div class="corner-bl"></div>
    <div class="corner-br"></div>
    <button class="info-close" id="info-close">✕</button>
    <div class="info-header">
      <div class="info-symbol-box">
        <div class="sym" id="modal-sym">H</div>
        <div class="num" id="modal-num">1</div>
      </div>
      <div class="info-title-block">
        <div class="info-name-fa" id="modal-name-fa">هیدروژن</div>
        <div class="info-name-en" id="modal-name-en">Hydrogen</div>
        <div class="info-category" id="modal-category">غیرفلز</div>
      </div>
    </div>
    <div class="info-grid">
      <div class="info-item">
        <div class="label">جرم اتمی</div>
        <div class="value" id="modal-weight">1.008</div>
      </div>
      <div class="info-item">
        <div class="label">عدد اتمی</div>
        <div class="value" id="modal-atomic">1</div>
      </div>
      <div class="info-item">
        <div class="label">دوره (پریود)</div>
        <div class="value" id="modal-period">1</div>
      </div>
      <div class="info-item">
        <div class="label">گروه</div>
        <div class="value" id="modal-group">1</div>
      </div>
    </div>
    <div class="info-desc" id="modal-desc">توضیحات عنصر...</div>
  </div>
</div>

<div class="credits">3D transform calculations ported from three.js periodic table demo</div>

<script>
const ELEMENTS_DATA = {
  1:  { fa: 'هیدروژن',      cat: 'غیرفلز',        desc: 'سبک‌ترین عنصر جهان و فراوان‌ترین عنصر در کیهان. در آب، سوخت‌ها و بسیاری از ترکیبات آلی یافت می‌شود.' },
  2:  { fa: 'هلیوم',        cat: 'گاز نجیب',       desc: 'دومین عنصر سبک و دومین گاز فراوان در کیهان. در بالون‌ها، کپسول‌های غواصی و سیستم‌های خنک‌کننده استفاده می‌شود.' },
  3:  { fa: 'لیتیم',        cat: 'فلز قلیایی',     desc: 'سبک‌ترین فلز جامد. کاربرد گسترده در باتری‌های لیتیومی برای گوشی‌ها و خودروهای الکتریکی دارد.' },
  4:  { fa: 'بریلیم',       cat: 'فلز قلیایی خاکی', desc: 'فلزی سبک، سخت و شکننده. در هوافضا و صنایع هسته‌ای به کار می‌رود. بسیار سمی است.' },
  5:  { fa: 'بور',          cat: 'شبه‌فلز',         desc: 'در طبیعت به صورت بوراکس یافت می‌شود. در ساخت شیشه، چینی و سموم دفع حشرات کاربرد دارد.' },
  6:  { fa: 'کربن',         cat: 'غیرفلز',         desc: 'اساس حیات روی زمین. در قالب الماس سخت‌ترین ماده طبیعی و در قالب گرافیت رساناست.' },
  7:  { fa: 'نیتروژن',      cat: 'غیرفلز',         desc: '۷۸٪ هوای زمین را تشکیل می‌دهد. برای تولید آمونیاک، کود کشاورزی و صنایع غذایی ضروری است.' },
  8:  { fa: 'اکسیژن',       cat: 'غیرفلز',         desc: 'برای تنفس موجودات زنده حیاتی است. ۲۱٪ هوا را تشکیل می‌دهد و در سوختن نقش اساسی دارد.' },
  9:  { fa: 'فلوئور',       cat: 'هالوژن',          desc: 'واکنش‌پذیرترین عنصر شناخته‌شده. در خمیر دندان و برخی پلاستیک‌های مقاوم مانند تفلون وجود دارد.' },
  10: { fa: 'نئون',         cat: 'گاز نجیب',       desc: 'گازی بی‌رنگ که در تابلوهای نئونی نور قرمز-نارنجی می‌دهد. در لیزرها نیز کاربرد دارد.' },
  11: { fa: 'سدیم',         cat: 'فلز قلیایی',     desc: 'فلزی نرم و بسیار واکنش‌پذیر. کلرید سدیم (نمک طعام) یکی از مهم‌ترین ترکیبات آن است.' },
  12: { fa: 'منیزیم',       cat: 'فلز قلیایی خاکی', desc: 'فلزی سبک که در آلیاژها، آتش‌بازی و تجهیزات ورزشی استفاده می‌شود. برای بدن انسان ضروری است.' },
  13: { fa: 'آلومینیم',     cat: 'فلز',             desc: 'سومین عنصر فراوان پوسته زمین. سبک، مقاوم در برابر خوردگی و به‌طور گسترده در ساخت‌وساز استفاده می‌شود.' },
  14: { fa: 'سیلیکون',      cat: 'شبه‌فلز',         desc: 'پایه‌ی فناوری نیمه‌رسانا. تراشه‌های کامپیوتری، پنل‌های خورشیدی و شیشه از سیلیکون ساخته می‌شوند.' },
  15: { fa: 'فسفر',         cat: 'غیرفلز',         desc: 'برای تولید کود، کبریت و اسلحه استفاده می‌شود. فسفر سفید بسیار سمی و آتش‌زا است.' },
  16: { fa: 'گوگرد',        cat: 'غیرفلز',         desc: 'زرد رنگ با بوی مشخص. در تولید اسید سولفوریک، باتری و کبریت کاربرد دارد.' },
  17: { fa: 'کلر',          cat: 'هالوژن',          desc: 'گازی سبز-زرد و سمی که برای ضدعفونی آب استفاده می‌شود. در ساخت PVC نقش مهمی دارد.' },
  18: { fa: 'آرگون',        cat: 'گاز نجیب',       desc: 'سومین گاز فراوان در هوا. در لامپ‌های التهابی و جوشکاری به‌عنوان گاز محافظ استفاده می‌شود.' },
  19: { fa: 'پتاسیم',       cat: 'فلز قلیایی',     desc: 'برای عملکرد اعصاب و عضلات ضروری است. در کودهای کشاورزی و باروت استفاده می‌شود.' },
  20: { fa: 'کلسیم',        cat: 'فلز قلیایی خاکی', desc: 'مهم‌ترین فلز برای ساختار استخوان‌ها و دندان‌ها. در سیمان، گچ و آهک نیز وجود دارد.' },
  21: { fa: 'اسکاندیم',     cat: 'فلز واسطه',      desc: 'فلز نادری که در آلیاژ با آلومینیم برای ساخت هواپیماهای نظامی و دوچرخه‌های سبک استفاده می‌شود.' },
  22: { fa: 'تیتانیم',      cat: 'فلز واسطه',      desc: 'نسبت استحکام به وزن بسیار بالا. در هوافضا، ایمپلنت‌های پزشکی و ساعت‌های لوکس به کار می‌رود.' },
  23: { fa: 'وانادیم',      cat: 'فلز واسطه',      desc: 'برای ساخت فولادهای مقاوم به کار می‌رود. باتری‌های وانادیم نوعی ذخیره‌ساز انرژی نوین هستند.' },
  24: { fa: 'کروم',         cat: 'فلز واسطه',      desc: 'مقاوم در برابر خوردگی. در آبکاری کروم برای براق کردن قطعات و ساخت فولاد ضدزنگ استفاده می‌شود.' },
  25: { fa: 'منگنز',        cat: 'فلز واسطه',      desc: 'در تولید فولاد ضروری است. در باتری‌های قلمی نیز استفاده می‌شود.' },
  26: { fa: 'آهن',          cat: 'فلز واسطه',      desc: 'فراوان‌ترین عنصر زمین و پایه فلزکاری. در ساخت فولاد، ساختمان‌ها و ماشین‌آلات کاربرد فراوان دارد.' },
  27: { fa: 'کبالت',        cat: 'فلز واسطه',      desc: 'در ساخت باتری‌های لیتیومی، آهن‌رباهای قوی و رنگ آبی سرامیک استفاده می‌شود.' },
  28: { fa: 'نیکل',         cat: 'فلز واسطه',      desc: 'مقاوم در برابر خوردگی. در سکه‌ها، فولاد ضدزنگ و باتری‌ها به کار می‌رود.' },
  29: { fa: 'مس',           cat: 'فلز واسطه',      desc: 'بهترین رسانای الکتریسیته پس از نقره. در سیم‌کشی، لوله‌کشی و برنج (آلیاژ مس-روی) استفاده می‌شود.' },
  30: { fa: 'روی',          cat: 'فلز واسطه',      desc: 'برای گالوانیزه کردن فولاد (جلوگیری از زنگ‌زدگی) و تولید برنج استفاده می‌شود.' },
  31: { fa: 'گالیم',        cat: 'فلز',             desc: 'در دمای اتاق جامد اما نزدیک به نقطه ذوب است. در نیمه‌رساناها و LED‌ها کاربرد دارد.' },
  32: { fa: 'ژرمانیم',      cat: 'شبه‌فلز',         desc: 'از اولین نیمه‌رساناهای مورد استفاده در تکنولوژی. در اپتیک مادون قرمز و ترانزیستورهای اولیه استفاده شد.' },
  33: { fa: 'آرسنیک',       cat: 'شبه‌فلز',         desc: 'در نیمه‌رساناها و سموم دفع حشرات استفاده می‌شود. گونه‌های معینی از آن بسیار سمی هستند.' },
  34: { fa: 'سلنیم',        cat: 'غیرفلز',         desc: 'در سلول‌های خورشیدی، ماشین‌های فتوکپی و شامپوهای ضد شوره استفاده می‌شود.' },
  35: { fa: 'برم',          cat: 'هالوژن',          desc: 'تنها غیرفلز مایع در دمای اتاق. در تهیه مواد آتش‌نشانی و عکاسی آنالوگ استفاده می‌شود.' },
  36: { fa: 'کریپتون',      cat: 'گاز نجیب',       desc: 'در لامپ‌های پرفشار، لیزرها و عکاسی پرسرعت استفاده می‌شود.' },
  37: { fa: 'روبیدیم',      cat: 'فلز قلیایی',     desc: 'فلزی بسیار واکنش‌پذیر. در ساعت‌های اتمی و دستگاه‌های GPS برای دقت بالا استفاده می‌شود.' },
  38: { fa: 'استرانسیم',    cat: 'فلز قلیایی خاکی', desc: 'در آتش‌بازی رنگ قرمز روشن ایجاد می‌کند. ایزوتوپ رادیواکتیو آن خطرناک است.' },
  39: { fa: 'ایتریم',       cat: 'فلز واسطه',      desc: 'در لیزرهای YAG، LED‌های سفید و ابررساناها کاربرد دارد.' },
  40: { fa: 'زیرکونیم',     cat: 'فلز واسطه',      desc: 'مقاوم در برابر حرارت و خوردگی. در راکتورهای هسته‌ای و ایمپلنت‌های دندانی استفاده می‌شود.' },
  41: { fa: 'نیوبیم',       cat: 'فلز واسطه',      desc: 'در فولادهای مقاوم و مواد ابررسانا استفاده می‌شود.' },
  42: { fa: 'مولیبدن',      cat: 'فلز واسطه',      desc: 'در فولادهای با استحکام بالا و روان‌کننده‌ها استفاده می‌شود. دارای بالاترین نقطه ذوب در بین فلزات واسطه است.' },
  43: { fa: 'تکنسیم',       cat: 'فلز واسطه',      desc: 'اولین عنصر مصنوعی ساخته‌شده. ایزوتوپ‌های آن در پزشکی هسته‌ای برای تصویربرداری به کار می‌روند.' },
  44: { fa: 'روتنیم',       cat: 'فلز واسطه',      desc: 'از فلزات گروه پلاتین. در الکترونیک و به‌عنوان کاتالیزور کاربرد دارد.' },
  45: { fa: 'رودیم',        cat: 'فلز واسطه',      desc: 'یکی از گران‌قیمت‌ترین فلزات. در مبدل‌های کاتالیستی خودرو برای کاهش آلودگی استفاده می‌شود.' },
  46: { fa: 'پالادیم',      cat: 'فلز واسطه',      desc: 'در مبدل‌های کاتالیستی، جواهرات سفید رنگ و جذب هیدروژن استفاده می‌شود.' },
  47: { fa: 'نقره',         cat: 'فلز واسطه',      desc: 'بهترین رسانای الکتریسیته. در جواهرسازی، عکاسی، آینه‌ها و داروهای ضدباکتری استفاده می‌شود.' },
  48: { fa: 'کادمیم',       cat: 'فلز واسطه',      desc: 'در باتری‌های نیکل-کادمیم و پوشش‌های ضد خوردگی استفاده می‌شود. بسیار سمی است.' },
  49: { fa: 'ایندیم',       cat: 'فلز',             desc: 'در صفحه‌نمایش‌های لمسی، LCD و پوشش‌های شفاف رسانا (ITO) کاربرد دارد.' },
  50: { fa: 'قلع',          cat: 'فلز',             desc: 'یکی از قدیمی‌ترین فلزات شناخته‌شده. در لحیم‌کاری، قوطی‌های کنسرو و برنز (آلیاژ مس-قلع) استفاده می‌شود.' },
  51: { fa: 'آنتیموان',     cat: 'شبه‌فلز',         desc: 'در آلیاژهای باتری سرب-اسید و مواد ضدآتش کاربرد دارد.' },
  52: { fa: 'تلور',         cat: 'شبه‌فلز',         desc: 'در سلول‌های خورشیدی (تلورید کادمیم) و دیسک‌های Blu-ray استفاده می‌شود.' },
  53: { fa: 'ید',           cat: 'هالوژن',          desc: 'برای عملکرد غده تیروئید ضروری است. در ضدعفونی‌کننده‌ها و فیلم‌های عکاسی استفاده می‌شود.' },
  54: { fa: 'زنون',         cat: 'گاز نجیب',       desc: 'در لامپ‌های قوی، لیزرهای اکسیمر و به‌عنوان بی‌حسی در پزشکی استفاده می‌شود.' },
  55: { fa: 'سزیم',         cat: 'فلز قلیایی',     desc: 'در دقیق‌ترین ساعت‌های اتمی جهان کاربرد دارد. بسیار واکنش‌پذیر و نقطه ذوب پایینی دارد.' },
  56: { fa: 'باریم',        cat: 'فلز قلیایی خاکی', desc: 'در آزمایشات رادیولوژی برای تصویربرداری از دستگاه گوارش استفاده می‌شود.' },
  57: { fa: 'لانتانیم',     cat: 'لانتانید',        desc: 'در عدسی‌های دوربین، باتری‌های هیبریدی و تولید هیدروژن کاربرد دارد.' },
  58: { fa: 'سریم',         cat: 'لانتانید',        desc: 'فراوان‌ترین لانتانید. در پوشش‌های خودتمیزکن آینه‌ها، فندک‌ها و لامپ‌های فلوئورسنت استفاده می‌شود.' },
  59: { fa: 'پرازئودیم',    cat: 'لانتانید',        desc: 'در شیشه‌های رنگی، موتورهای قوی مغناطیسی و عینک جوشکاران استفاده می‌شود.' },
  60: { fa: 'نئودیم',       cat: 'لانتانید',        desc: 'قوی‌ترین آهن‌رباهای دائمی (NdFeB) از آن ساخته می‌شوند. در موتورهای الکتریکی و بلندگوها کاربرد دارد.' },
  61: { fa: 'پرومتیم',      cat: 'لانتانید',        desc: 'عنصری رادیواکتیو که در طبیعت پایدار نیست. در باتری‌های هسته‌ای و رنگ‌های شب‌تاب قدیمی استفاده می‌شد.' },
  62: { fa: 'ساماریم',      cat: 'لانتانید',        desc: 'در آهن‌رباهای دائمی با دمای بالا و داروهای درمان سرطان استفاده می‌شود.' },
  63: { fa: 'اروپیم',       cat: 'لانتانید',        desc: 'مسئول نور قرمز و آبی در صفحه‌نمایش‌های رنگی. در اسکناس‌های یورو برای جلوگیری از جعل استفاده می‌شود.' },
  64: { fa: 'گادولینیم',    cat: 'لانتانید',        desc: 'در MRI به‌عنوان ماده کنتراست و در راکتورهای هسته‌ای جاذب نوترون استفاده می‌شود.' },
  65: { fa: 'تربیم',        cat: 'لانتانید',        desc: 'در LED‌های سبز، سیستم‌های صوتی با دقت بالا و نورهای فلوئورسنت کاربرد دارد.' },
  66: { fa: 'دیسپروزیم',    cat: 'لانتانید',        desc: 'در آهن‌رباهای موتورهای خودروی الکتریکی و حافظه‌های داده بسیار چگال استفاده می‌شود.' },
  67: { fa: 'هولمیم',       cat: 'لانتانید',        desc: 'دارای قوی‌ترین خاصیت مغناطیسی در بین عناصر. در لیزرهای پزشکی استفاده می‌شود.' },
  68: { fa: 'اربیم',        cat: 'لانتانید',        desc: 'در تقویت‌کننده‌های فیبر نوری (EDFA) که اساس اینترنت جهانی هستند، کاربرد حیاتی دارد.' },
  69: { fa: 'تولیم',        cat: 'لانتانید',        desc: 'در لیزرهای پزشکی قابل‌حمل و اشعه ایکس سیار استفاده می‌شود.' },
  70: { fa: 'ایتربیم',      cat: 'لانتانید',        desc: 'در ساعت‌های اتمی دقیق، تقویت‌کننده‌های فیبر نوری و آلیاژهای مقاوم استفاده می‌شود.' },
  71: { fa: 'لوتسیم',       cat: 'لانتانید',        desc: 'سنگین‌ترین لانتانید. در PET اسکن پزشکی و به‌عنوان کاتالیزور در صنایع نفتی کاربرد دارد.' },
  72: { fa: 'هافنیم',       cat: 'فلز واسطه',      desc: 'در راکتورهای هسته‌ای به‌عنوان جاذب نوترون و در تراشه‌های پیشرفته سیلیکونی کاربرد دارد.' },
  73: { fa: 'تانتالیم',     cat: 'فلز واسطه',      desc: 'در خازن‌های الکترونیکی، ایمپلنت‌های جراحی و تجهیزات شیمیایی مقاوم در برابر اسید استفاده می‌شود.' },
  74: { fa: 'تنگستن',       cat: 'فلز واسطه',      desc: 'بالاترین نقطه ذوب در بین تمام عناصر (۳۴۲۲°C). در رشته لامپ، ابزار برش و مهمات استفاده می‌شود.' },
  75: { fa: 'رنیم',         cat: 'فلز واسطه',      desc: 'یکی از نادرترین فلزات. در موتورهای جت با دمای بالا و کاتالیزورهای پالایشگاهی استفاده می‌شود.' },
  76: { fa: 'اوسمیم',       cat: 'فلز واسطه',      desc: 'چگال‌ترین عنصر شناخته‌شده. در نوک قلم‌های گران‌قیمت و مدارات الکتریکی ظریف استفاده می‌شود.' },
  77: { fa: 'ایریدیم',      cat: 'فلز واسطه',      desc: 'مقاوم‌ترین فلز در برابر خوردگی. در الکترودهای مقاوم، ماهواره‌ها و کاتالیزورها استفاده می‌شود.' },
  78: { fa: 'پلاتین',       cat: 'فلز واسطه',      desc: 'در جواهرسازی، مبدل‌های کاتالیستی خودرو، ابزار آزمایشگاهی و داروهای سرطان کاربرد دارد.' },
  79: { fa: 'طلا',          cat: 'فلز واسطه',      desc: 'فلز نجیب پایدار. علاوه بر جواهرات، در اتصالات الکترونیکی، ارتباطات فضایی و پزشکی استفاده می‌شود.' },
  80: { fa: 'جیوه',         cat: 'فلز واسطه',      desc: 'تنها فلز مایع در دمای اتاق. در دماسنج‌ها، چراغ‌های فلوئورسنت و برخی داروها کاربرد داشت اما سمی است.' },
  81: { fa: 'تالیم',        cat: 'فلز',             desc: 'بسیار سمی. در دستگاه‌های اندازه‌گیری مادون قرمز و برخی آلیاژها استفاده می‌شود.' },
  82: { fa: 'سرب',          cat: 'فلز',             desc: 'در باتری‌های اسیدی، محافظت در برابر اشعه و لوله‌کشی قدیمی استفاده می‌شد. سمی است.' },
  83: { fa: 'بیسموت',       cat: 'فلز',             desc: 'کم‌سمی‌ترین فلز سنگین. در داروهای معده، آلیاژهای ذوب‌پایین و لوازم آرایشی استفاده می‌شود.' },
  84: { fa: 'پولونیم',      cat: 'فلز',             desc: 'رادیواکتیو و بسیار خطرناک. در منابع آلفای صنعتی کاربرد دارد. توسط ماری کوری کشف شد.' },
  85: { fa: 'آستاتین',      cat: 'هالوژن',          desc: 'نادرترین عنصر طبیعی روی زمین. در پزشکی هسته‌ای برای درمان برخی سرطان‌ها بررسی می‌شود.' },
  86: { fa: 'رادون',        cat: 'گاز نجیب',       desc: 'گاز رادیواکتیو طبیعی که از تجزیه رادیم به وجود می‌آید. دومین عامل سرطان ریه پس از سیگار است.' },
  87: { fa: 'فرانسیم',      cat: 'فلز قلیایی',     desc: 'بسیار رادیواکتیو و ناپایدار. واکنش‌پذیرترین فلز قلیایی و تقریباً در طبیعت یافت نمی‌شود.' },
  88: { fa: 'رادیم',        cat: 'فلز قلیایی خاکی', desc: 'رادیواکتیو. تا قبل از کشف خطرات آن در رنگ‌های درخشان‌کننده استفاده می‌شد. توسط ماری کوری کشف شد.' },
  89: { fa: 'آکتینیم',      cat: 'اکتینید',         desc: 'اولین اکتینید. در درمان سرطان‌ها به روش رادیوایمونوتراپی بررسی می‌شود.' },
  90: { fa: 'توریم',        cat: 'اکتینید',         desc: 'رادیواکتیو ضعیف. به‌عنوان سوخت بالقوه برای راکتورهای هسته‌ای نسل آینده در نظر گرفته می‌شود.' },
  91: { fa: 'پروتاکتینیم',  cat: 'اکتینید',         desc: 'رادیواکتیو و نادر. در میانه تبدیل رادیواکتیو اورانیم به جای می‌گیرد.' },
  92: { fa: 'اورانیم',      cat: 'اکتینید',         desc: 'سنگین‌ترین عنصر طبیعی. در سوخت راکتورهای هسته‌ای و سلاح‌های هسته‌ای کاربرد دارد.' },
  93: { fa: 'نپتونیم',      cat: 'اکتینید',         desc: 'اولین عنصر فراتر از اورانیم. در آشکارسازهای تشعشع استفاده می‌شود.' },
  94: { fa: 'پلوتونیم',     cat: 'اکتینید',         desc: 'در بمب‌های هسته‌ای و سوخت راکتورها استفاده می‌شود. منبع انرژی کاوشگر ووایجر در فضا بود.' },
  95: { fa: 'آمریسیم',      cat: 'اکتینید',         desc: 'در آشکارسازهای دود خانگی (دتکتور دود) استفاده می‌شود.' },
  96: { fa: 'کوریم',        cat: 'اکتینید',         desc: 'به افتخار ماری و پی‌یر کوری نام‌گذاری شده. در مولدهای رادیوایزوتوپ برای سفینه‌های فضایی استفاده می‌شود.' },
  97: { fa: 'برکلیم',       cat: 'اکتینید',         desc: 'به نام شهر برکلی در کالیفرنیا نام‌گذاری شده. تنها در مقادیر بسیار ناچیز تولید می‌شود.' },
  98: { fa: 'کالیفرنیم',    cat: 'اکتینید',         desc: 'گران‌قیمت‌ترین ماده‌ای است که تا به حال قیمت‌گذاری شده. در درمان سرطان و اکتشافات معدنی کاربرد دارد.' },
  99: { fa: 'اینشتینیم',    cat: 'اکتینید',         desc: 'به افتخار آلبرت اینشتین نام‌گذاری شده. در اولین آزمایش بمب هیدروژنی کشف شد.' },
  100:{ fa: 'فرمیم',        cat: 'اکتینید',         desc: 'به افتخار انریکو فرمی نام‌گذاری شده. فقط در مقادیر زیر میلی‌گرم تولید می‌شود.' },
  101:{ fa: 'مندلویم',      cat: 'اکتینید',         desc: 'به افتخار دیمیتری مندلیف نام‌گذاری شده. از طریق بمباران اینشتینیم با ذرات آلفا تولید می‌شود.' },
  102:{ fa: 'نوبلیم',       cat: 'اکتینید',         desc: 'به افتخار آلفرد نوبل نام‌گذاری شده. نیمه‌عمر کوتاهی دارد.' },
  103:{ fa: 'لاورنسیم',     cat: 'اکتینید',         desc: 'به افتخار ارنست لاورنس نام‌گذاری شده. آخرین اکتینید و یکی از سنگین‌ترین عناصر شناخته‌شده است.' },
  104:{ fa: 'رادرفوردیم',   cat: 'فلز واسطه',      desc: 'به افتخار ارنست رادرفورد نام‌گذاری شده. اولین عنصر فوق‌اکتینید که مصنوعاً سنتز شد.' },
  105:{ fa: 'دوبنیم',       cat: 'فلز واسطه',      desc: 'به نام شهر دوبنا در روسیه نام‌گذاری شده. نیمه‌عمر طولانی‌ترین ایزوتوپ آن حدود ۲۸ ساعت است.' },
  106:{ fa: 'سیبورگیم',     cat: 'فلز واسطه',      desc: 'به افتخار گلن سیبورگ نام‌گذاری شده. اولین عنصری بود که در زمان حیات کاشف آن نام‌گذاری شد.' },
  107:{ fa: 'بوهریم',       cat: 'فلز واسطه',      desc: 'به افتخار نیلز بور نام‌گذاری شده. عنصری بسیار ناپایدار با نیمه‌عمر چند ثانیه‌ای.' },
  108:{ fa: 'هاسیم',        cat: 'فلز واسطه',      desc: 'به نام ایالت هسن در آلمان نام‌گذاری شده. از اسمیم (Os) سنگین‌تر و دارای نقطه ذوب بالایی است.' },
  109:{ fa: 'مایتنریم',     cat: 'فلز واسطه',      desc: 'به افتخار لیزه مایتنر، فیزیکدان اتریشی، نام‌گذاری شده. بسیار ناپایدار است.' },
  110:{ fa: 'دارمشتادتیم',  cat: 'فلز واسطه',      desc: 'به نام شهر دارمشتاد در آلمان نام‌گذاری شده. با یون‌های نیکل تولید می‌شود.' },
  111:{ fa: 'رونتگنیم',     cat: 'فلز واسطه',      desc: 'به افتخار ویلهلم رونتگن، کاشف اشعه ایکس، نام‌گذاری شده.' },
  112:{ fa: 'کوپرنیسیم',    cat: 'فلز واسطه',      desc: 'به افتخار نیکلاس کوپرنیک نام‌گذاری شده. احتمالاً در دمای اتاق گاز است نه فلز!' },
  113:{ fa: 'نیهونیم',      cat: 'فلز',             desc: 'به نام ژاپن (Nihon) نام‌گذاری شده. اولین عنصری که توسط دانشمندان آسیایی کشف شد.' },
  114:{ fa: 'فلروویم',      cat: 'فلز',             desc: 'به افتخار آزمایشگاه فلروف در روسیه نام‌گذاری شده. خواص فیزیکی آن هنوز به‌طور کامل مطالعه نشده.' },
  115:{ fa: 'مسکوویم',      cat: 'فلز',             desc: 'به نام منطقه مسکو نام‌گذاری شده. تنها چند اتم از آن تا به حال سنتز شده است.' },
  116:{ fa: 'لیورموریم',    cat: 'فلز',             desc: 'به نام آزمایشگاه لیورمور در کالیفرنیا نام‌گذاری شده. ناپایدارترین عناصر شناخته‌شده است.' },
  117:{ fa: 'تنسین',        cat: 'هالوژن',          desc: 'به نام ایالت تنسی آمریکا نام‌گذاری شده. یکی از جدیدترین عناصر کشف‌شده.' },
  118:{ fa: 'اوگانسون',     cat: 'گاز نجیب',       desc: 'به افتخار یوری اوگانسیان نام‌گذاری شده. سنگین‌ترین عنصر شناخته‌شده. احتمالاً در دمای اتاق جامد است.' },
};

const ELEMENTS = [
  [1,'H','Hydrogen','1.008',0,1,1],
  [2,'He','Helium','4.003',7,1,18],
  [3,'Li','Lithium','6.941',1,2,1],
  [4,'Be','Beryllium','9.012',1,2,2],
  [5,'B','Boron','10.81',2,2,13],
  [6,'C','Carbon','12.01',2,2,14],
  [7,'N','Nitrogen','14.01',2,2,15],
  [8,'O','Oxygen','16.00',2,2,16],
  [9,'F','Fluorine','19.00',3,2,17],
  [10,'Ne','Neon','20.18',7,2,18],
  [11,'Na','Sodium','22.99',1,3,1],
  [12,'Mg','Magnesium','24.31',1,3,2],
  [13,'Al','Aluminum','26.98',2,3,13],
  [14,'Si','Silicon','28.09',2,3,14],
  [15,'P','Phosphorus','30.97',2,3,15],
  [16,'S','Sulfur','32.07',2,3,16],
  [17,'Cl','Chlorine','35.45',3,3,17],
  [18,'Ar','Argon','39.95',7,3,18],
  [19,'K','Potassium','39.10',1,4,1],
  [20,'Ca','Calcium','40.08',1,4,2],
  [21,'Sc','Scandium','44.96',4,4,3],
  [22,'Ti','Titanium','47.87',4,4,4],
  [23,'V','Vanadium','50.94',4,4,5],
  [24,'Cr','Chromium','52.00',4,4,6],
  [25,'Mn','Manganese','54.94',4,4,7],
  [26,'Fe','Iron','55.85',4,4,8],
  [27,'Co','Cobalt','58.93',4,4,9],
  [28,'Ni','Nickel','58.69',4,4,10],
  [29,'Cu','Copper','63.55',4,4,11],
  [30,'Zn','Zinc','65.38',4,4,12],
  [31,'Ga','Gallium','69.72',2,4,13],
  [32,'Ge','Germanium','72.64',2,4,14],
  [33,'As','Arsenic','74.92',2,4,15],
  [34,'Se','Selenium','78.96',2,4,16],
  [35,'Br','Bromine','79.90',3,4,17],
  [36,'Kr','Krypton','83.80',7,4,18],
  [37,'Rb','Rubidium','85.47',1,5,1],
  [38,'Sr','Strontium','87.62',1,5,2],
  [39,'Y','Yttrium','88.91',4,5,3],
  [40,'Zr','Zirconium','91.22',4,5,4],
  [41,'Nb','Niobium','92.91',4,5,5],
  [42,'Mo','Molybdenum','95.96',4,5,6],
  [43,'Tc','Technetium','(98)',4,5,7],
  [44,'Ru','Ruthenium','101.1',4,5,8],
  [45,'Rh','Rhodium','102.9',4,5,9],
  [46,'Pd','Palladium','106.4',4,5,10],
  [47,'Ag','Silver','107.9',4,5,11],
  [48,'Cd','Cadmium','112.4',4,5,12],
  [49,'In','Indium','114.8',2,5,13],
  [50,'Sn','Tin','118.7',2,5,14],
  [51,'Sb','Antimony','121.8',2,5,15],
  [52,'Te','Tellurium','127.6',2,5,16],
  [53,'I','Iodine','126.9',3,5,17],
  [54,'Xe','Xenon','131.3',7,5,18],
  [55,'Cs','Cesium','132.9',1,6,1],
  [56,'Ba','Barium','137.3',1,6,2],
  [57,'La','Lanthanum','138.9',5,6,3],
  [58,'Ce','Cerium','140.1',5,8.5,4],
  [59,'Pr','Praseodymium','140.9',5,8.5,5],
  [60,'Nd','Neodymium','144.2',5,8.5,6],
  [61,'Pm','Promethium','(145)',5,8.5,7],
  [62,'Sm','Samarium','150.4',5,8.5,8],
  [63,'Eu','Europium','152.0',5,8.5,9],
  [64,'Gd','Gadolinium','157.3',5,8.5,10],
  [65,'Tb','Terbium','158.9',5,8.5,11],
  [66,'Dy','Dysprosium','162.5',5,8.5,12],
  [67,'Ho','Holmium','164.9',5,8.5,13],
  [68,'Er','Erbium','167.3',5,8.5,14],
  [69,'Tm','Thulium','168.9',5,8.5,15],
  [70,'Yb','Ytterbium','173.1',5,8.5,16],
  [71,'Lu','Lutetium','175.0',5,8.5,17],
  [72,'Hf','Hafnium','178.5',4,6,4],
  [73,'Ta','Tantalum','180.9',4,6,5],
  [74,'W','Tungsten','183.8',4,6,6],
  [75,'Re','Rhenium','186.2',4,6,7],
  [76,'Os','Osmium','190.2',4,6,8],
  [77,'Ir','Iridium','192.2',4,6,9],
  [78,'Pt','Platinum','195.1',4,6,10],
  [79,'Au','Gold','197.0',4,6,11],
  [80,'Hg','Mercury','200.6',4,6,12],
  [81,'Tl','Thallium','204.4',2,6,13],
  [82,'Pb','Lead','207.2',2,6,14],
  [83,'Bi','Bismuth','208.9',2,6,15],
  [84,'Po','Polonium','(209)',2,6,16],
  [85,'At','Astatine','(210)',3,6,17],
  [86,'Rn','Radon','(222)',7,6,18],
  [87,'Fr','Francium','(223)',1,7,1],
  [88,'Ra','Radium','(226)',1,7,2],
  [89,'Ac','Actinium','(227)',6,7,3],
  [90,'Th','Thorium','232.0',6,9.5,4],
  [91,'Pa','Protactinium','231.0',6,9.5,5],
  [92,'U','Uranium','238.0',6,9.5,6],
  [93,'Np','Neptunium','(237)',6,9.5,7],
  [94,'Pu','Plutonium','(244)',6,9.5,8],
  [95,'Am','Americium','(243)',6,9.5,9],
  [96,'Cm','Curium','(247)',6,9.5,10],
  [97,'Bk','Berkelium','(247)',6,9.5,11],
  [98,'Cf','Californium','(251)',6,9.5,12],
  [99,'Es','Einsteinium','(252)',6,9.5,13],
  [100,'Fm','Fermium','(257)',6,9.5,14],
  [101,'Md','Mendelevium','(258)',6,9.5,15],
  [102,'No','Nobelium','(259)',6,9.5,16],
  [103,'Lr','Lawrencium','(266)',6,9.5,17],
  [104,'Rf','Rutherfordium','(267)',4,7,4],
  [105,'Db','Dubnium','(268)',4,7,5],
  [106,'Sg','Seaborgium','(271)',4,7,6],
  [107,'Bh','Bohrium','(272)',4,7,7],
  [108,'Hs','Hassium','(277)',4,7,8],
  [109,'Mt','Meitnerium','(276)',4,7,9],
  [110,'Ds','Darmstadtium','(281)',4,7,10],
  [111,'Rg','Roentgenium','(280)',4,7,11],
  [112,'Cn','Copernicium','(285)',4,7,12],
  [113,'Nh','Nihonium','(284)',2,7,13],
  [114,'Fl','Flerovium','(289)',2,7,14],
  [115,'Mc','Moscovium','(288)',2,7,15],
  [116,'Lv','Livermorium','(293)',2,7,16],
  [117,'Ts','Tennessine','(294)',3,7,17],
  [118,'Og','Oganesson','(294)',7,7,18],
];

const W = 80, H = 80, GAP = 4;
const STEP = W + GAP;

const container = document.getElementById('scene-content');
const buttons = document.querySelectorAll('.toggle');

const cards = ELEMENTS.map(([num, sym, name, weight, color, period, group]) => {
  const el = document.createElement('button');
  el.className = 'element';
  el.dataset.color = color;
  el.dataset.num = num;
  el.innerHTML = \`
    <div class="element-number">\${num}</div>
    <div class="element-symbol">\${sym}</div>
    <div class="element-title">\${name}</div>
    <div class="element-description">\${weight}</div>
  \`;
  container.appendChild(el);
  return { el, num, sym, name, weight, color, period, group };
});

// Modal logic
const overlay = document.getElementById('info-overlay');
const closeBtn = document.getElementById('info-close');

function openModal(num, sym, name, weight, period, group) {
  const data = ELEMENTS_DATA[num] || { fa: name, cat: '—', desc: 'اطلاعاتی موجود نیست.' };
  document.getElementById('modal-sym').textContent = sym;
  document.getElementById('modal-num').textContent = num;
  document.getElementById('modal-name-fa').textContent = data.fa;
  document.getElementById('modal-name-en').textContent = name;
  document.getElementById('modal-category').textContent = data.cat;
  document.getElementById('modal-weight').textContent = weight;
  document.getElementById('modal-atomic').textContent = num;
  document.getElementById('modal-period').textContent = period <= 7 ? period : (period === 8.5 ? '۶ (لانتانید)' : '۷ (اکتینید)');
  document.getElementById('modal-group').textContent = group;
  document.getElementById('modal-desc').textContent = data.desc;
  overlay.classList.add('open');
}

function closeModal() {
  overlay.classList.remove('open');
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

cards.forEach(({ el, num, sym, name, weight, period, group }) => {
  el.addEventListener('click', e => {
    e.stopPropagation();
    openModal(num, sym, name, weight, period, group);
  });
});

function getTablePositions() {
  return ELEMENTS.map(([num, sym, name, weight, color, period, group]) => {
    const row = period;
    const col = group;
    const x = (col - 1) * STEP - (17 * STEP) / 2;
    const y = (row - 1) * STEP - (9 * STEP) / 2;
    return { x, y, z: 0, rotX: 0, rotY: 0 };
  });
}

function getSpherePositions() {
  const n = ELEMENTS.length;
  return ELEMENTS.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / n);
    const theta = Math.sqrt(n * Math.PI) * phi;
    const r = 500;
    return {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
      rotY: Math.atan2(Math.sin(phi) * Math.cos(theta), Math.cos(phi)) * (180 / Math.PI),
      rotX: -Math.asin(Math.sin(phi) * Math.sin(theta)) * (180 / Math.PI),
    };
  });
}

function getHelixPositions() {
  return ELEMENTS.map((_, i) => {
    const theta = i * 0.25 + Math.PI;
    const r = 350;
    return {
      x: Math.sin(theta) * r,
      y: -(i * 8) + (ELEMENTS.length * 4),
      z: Math.cos(theta) * r,
      rotY: (theta * 180 / Math.PI) * -1,
      rotX: 0,
    };
  });
}

function getGridPositions() {
  const cols = Math.ceil(Math.sqrt(ELEMENTS.length));
  return ELEMENTS.map((_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: (col - cols / 2) * STEP,
      y: (row - cols / 2) * STEP,
      z: 0,
      rotX: 0,
      rotY: 0,
    };
  });
}

function applyLayout(positions) {
  cards.forEach(({ el }, i) => {
    const { x, y, z, rotX, rotY } = positions[i];
    el.style.transition = \`transform 1.2s cubic-bezier(0.77,0,0.175,1) \${i * 3}ms, opacity 0.6s ease\`;
    el.style.transform = \`translate(-50%, -50%) translateX(\${x}px) translateY(\${y}px) translateZ(\${z}px) rotateY(\${rotY || 0}deg) rotateX(\${rotX || 0}deg)\`;
  });
}

const layouts = { table: getTablePositions, sphere: getSpherePositions, helix: getHelixPositions, grid: getGridPositions };
let currentLayout = 'table';
applyLayout(getTablePositions());

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const layout = btn.dataset.layout;
    if (layout === currentLayout) return;
    currentLayout = layout;
    buttons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    applyLayout(layouts[layout]());
  });
});

let isDragging = false, lastX = 0, lastY = 0;
let rotY = 0, rotX = 0;

const scene = document.getElementById('scene');
scene.addEventListener('mousedown', e => { isDragging = true; lastX = e.clientX; lastY = e.clientY; });
window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  rotY += (e.clientX - lastX) * 0.3;
  rotX -= (e.clientY - lastY) * 0.3;
  lastX = e.clientX; lastY = e.clientY;
  container.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
});

scene.addEventListener('touchstart', e => { isDragging = true; lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; }, {passive:true});
window.addEventListener('touchend', () => isDragging = false);
window.addEventListener('touchmove', e => {
  if (!isDragging) return;
  rotY += (e.touches[0].clientX - lastX) * 0.3;
  rotX -= (e.touches[0].clientY - lastY) * 0.3;
  lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
  container.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
}, {passive:true});
<\/script>


`,className:"w-html-embed"})})}),S=a=>{const{origin:t,pathname:i,search:o}=new URL(a);return`${t}${i}${o}`},T=c.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),M=({data:a})=>{const{system:t,resources:i,url:o,pageMeta:s}=a,l=S(o),m=c.useMemo(()=>({imageLoader:n,assetBaseUrl:r,resources:i,breakpoints:h,onError:console.error}),[i]);return e.jsxs(p.Provider,{value:m,children:[e.jsx(u.Provider,{value:o,children:e.jsx(T,{pageKey:l,system:t})}),e.jsx(f,{url:o,pageMeta:s,siteName:d,imageLoader:n,assetBaseUrl:r}),e.jsx(g,{children:s.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),L=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${r}${v}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),E.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:L},Symbol.toStringTag,{value:"Module"})),N={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-30/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-30/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{N as configValuesSerialized};
