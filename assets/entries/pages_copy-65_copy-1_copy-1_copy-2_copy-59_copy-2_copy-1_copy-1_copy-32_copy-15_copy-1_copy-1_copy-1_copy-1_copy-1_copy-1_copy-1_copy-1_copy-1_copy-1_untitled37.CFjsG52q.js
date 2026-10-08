import{j as e,r as l,a as i,i as o,R as g,b as u,P as m,c as x,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",f=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(v,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ویترین خفن HTML (بدون کتابخونه)</title>
  <style>
    :root{
      --bg0:#06070d;
      --bg1:#0b1021;
      --glass: rgba(255,255,255,.08);
      --glass2: rgba(255,255,255,.12);
      --stroke: rgba(255,255,255,.16);
      --text: rgba(255,255,255,.92);
      --muted: rgba(255,255,255,.65);
      --accent:#7c5cff;
      --accent2:#00d4ff;
      --good:#3cffc0;
      --warn:#ffd35c;
      --bad:#ff4d7d;
      --shadow: 0 18px 50px rgba(0,0,0,.45);
      --radius: 18px;
    }

    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans Arabic", "Vazirmatn", Arial, sans-serif;
      color:var(--text);
      background: radial-gradient(1200px 900px at 20% 10%, rgba(124,92,255,.22), transparent 55%),
                  radial-gradient(900px 700px at 80% 35%, rgba(0,212,255,.18), transparent 60%),
                  linear-gradient(180deg, var(--bg0), var(--bg1));
      overflow:hidden;
    }

    /* Canvas full-bleed */
    #fx{
      position:fixed;
      inset:0;
      width:100%;
      height:100%;
      display:block;
      z-index:0;
    }

    /* Subtle noise overlay (CSS-only) */
    .noise{
      position:fixed; inset:-40px;
      background:
        radial-gradient(circle at 20% 15%, rgba(255,255,255,.06), transparent 35%),
        radial-gradient(circle at 80% 60%, rgba(255,255,255,.04), transparent 40%),
        repeating-linear-gradient(0deg, rgba(255,255,255,.035), rgba(255,255,255,.035) 1px, transparent 1px, transparent 3px);
      mix-blend-mode: overlay;
      opacity:.18;
      filter: blur(.2px);
      z-index:1;
      pointer-events:none;
      animation: drift 10s linear infinite;
    }
    @keyframes drift{
      0%{transform:translate3d(0,0,0)}
      50%{transform:translate3d(18px,-10px,0)}
      100%{transform:translate3d(0,0,0)}
    }

    /* Layout */
    .app{
      position:relative;
      z-index:2;
      height:100%;
      width:100%;
      display:grid;
      grid-template-rows: auto 1fr auto;
      gap:14px;
      padding: 14px;
    }

    header{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
    }

    .brand{
      display:flex; align-items:center; gap:10px;
      min-width: 260px;
    }
    .logo{
      width:40px; height:40px; border-radius:14px;
      background:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,.25), transparent 45%),
        linear-gradient(135deg, rgba(124,92,255,.95), rgba(0,212,255,.85));
      box-shadow: 0 10px 30px rgba(124,92,255,.25), 0 8px 25px rgba(0,212,255,.15);
      display:grid; place-items:center;
      border:1px solid rgba(255,255,255,.16);
    }
    .logo span{filter: drop-shadow(0 6px 10px rgba(0,0,0,.35));}
    .title{
      display:flex; flex-direction:column;
      line-height:1.15;
    }
    .title b{font-size:14px; letter-spacing:.2px}
    .title small{color:var(--muted); font-size:12px}

    .toolbar{
      display:flex;
      gap:10px;
      align-items:center;
      flex-wrap:wrap;
      justify-content:flex-end;
    }

    .pill{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding:10px 12px;
      border-radius: 999px;
      background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.06));
      border:1px solid rgba(255,255,255,.14);
      box-shadow: var(--shadow);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      user-select:none;
    }
    .pill .dot{
      width:10px; height:10px; border-radius:50%;
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.8), rgba(255,255,255,.15));
      box-shadow: 0 0 0 6px rgba(124,92,255,.10), 0 0 18px rgba(124,92,255,.35);
    }

    button, input[type="range"]{
      font: inherit;
    }
    .btn{
      cursor:pointer;
      border:none;
      color:var(--text);
      padding:10px 12px;
      border-radius: 14px;
      background: linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.06));
      border:1px solid rgba(255,255,255,.16);
      box-shadow: 0 14px 34px rgba(0,0,0,.35);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: transform .12s ease, border-color .12s ease, background .12s ease;
      display:inline-flex; align-items:center; gap:8px;
    }
    .btn:hover{ transform: translateY(-1px); border-color: rgba(255,255,255,.25); }
    .btn:active{ transform: translateY(0px) scale(.98); }
    .btn.primary{
      background: linear-gradient(135deg, rgba(124,92,255,.95), rgba(0,212,255,.85));
      border-color: rgba(255,255,255,.18);
      box-shadow: 0 16px 40px rgba(124,92,255,.20), 0 14px 34px rgba(0,212,255,.12), 0 18px 50px rgba(0,0,0,.35);
    }
    .btn.ghost{ background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.05)); }

    main{
      display:grid;
      grid-template-columns: 1.05fr .95fr;
      gap:14px;
      min-height: 0;
    }

    .panel{
      background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.05));
      border:1px solid rgba(255,255,255,.14);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      overflow:hidden;
      min-height: 0;
      position:relative;
    }
    .panel::before{
      content:"";
      position:absolute; inset:-2px;
      background: radial-gradient(700px 260px at 20% 10%, rgba(124,92,255,.22), transparent 60%),
                  radial-gradient(700px 260px at 90% 40%, rgba(0,212,255,.18), transparent 62%);
      opacity:.9;
      pointer-events:none;
    }
    .panel > *{ position:relative; z-index:1; }

    .panel-header{
      padding:14px 14px 10px;
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
      border-bottom:1px solid rgba(255,255,255,.10);
    }
    .panel-title{
      display:flex; flex-direction:column; gap:4px;
    }
    .panel-title b{ font-size:13px; letter-spacing:.2px}
    .panel-title span{ font-size:12px; color:var(--muted) }

    .grid{
      padding:14px;
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:12px;
    }

    .card{
      border-radius: 16px;
      border:1px solid rgba(255,255,255,.12);
      background: rgba(0,0,0,.14);
      box-shadow: 0 12px 34px rgba(0,0,0,.22);
      padding:12px;
      min-height: 92px;
      position:relative;
      overflow:hidden;
    }
    .card::after{
      content:"";
      position:absolute;
      inset:-80px -60px auto auto;
      width:200px; height:200px;
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.12), transparent 55%);
      transform: rotate(20deg);
      pointer-events:none;
    }
    .kpi{
      display:flex; align-items:center; justify-content:space-between; gap:10px;
    }
    .kpi .label{ color:var(--muted); font-size:12px}
    .kpi .value{ font-size:18px; font-weight:800; letter-spacing:.2px}
    .spark{
      margin-top:10px;
      height:26px;
      display:flex;
      align-items:flex-end;
      gap:5px;
      opacity:.95;
    }
    .bar{
      flex:1;
      border-radius: 6px 6px 10px 10px;
      background: linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.06));
      border:1px solid rgba(255,255,255,.12);
      transform-origin: bottom;
      transition: transform .2s ease;
    }

    .right{
      display:grid;
      grid-template-rows: auto 1fr;
      gap:14px;
      min-height:0;
    }

    .controls{
      padding:14px;
      display:grid;
      grid-template-columns: 1fr;
      gap:10px;
    }
    .row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      padding:10px 12px;
      border-radius: 14px;
      border:1px solid rgba(255,255,255,.12);
      background: rgba(0,0,0,.12);
    }
    .row .meta{
      display:flex; flex-direction:column; gap:3px;
      min-width: 150px;
    }
    .row .meta b{font-size:12px}
    .row .meta small{font-size:11px; color:var(--muted)}
    .row .val{
      font-variant-numeric: tabular-nums;
      color: rgba(255,255,255,.8);
      font-size:12px;
      min-width: 44px;
      text-align:left;
    }

    input[type="range"]{
      width: min(240px, 44vw);
      accent-color: var(--accent2);
      cursor: pointer;
    }

    .mini-log{
      padding:14px;
      display:flex;
      flex-direction:column;
      gap:10px;
      min-height:0;
    }
    .log{
      border-radius: 16px;
      border:1px solid rgba(255,255,255,.12);
      background: rgba(0,0,0,.12);
      padding:12px;
      min-height:0;
      overflow:auto;
    }
    .line{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      padding:9px 10px;
      border-radius: 12px;
      border:1px solid rgba(255,255,255,.08);
      background: rgba(255,255,255,.04);
      margin-bottom:8px;
    }
    .line:last-child{margin-bottom:0}
    .tag{
      font-size:11px;
      padding:4px 8px;
      border-radius: 999px;
      border:1px solid rgba(255,255,255,.14);
      background: rgba(255,255,255,.06);
      color: rgba(255,255,255,.85);
      white-space:nowrap;
    }
    .tag.good{ border-color: rgba(60,255,192,.35); background: rgba(60,255,192,.10) }
    .tag.warn{ border-color: rgba(255,211,92,.35); background: rgba(255,211,92,.12) }
    .tag.bad{ border-color: rgba(255,77,125,.35); background: rgba(255,77,125,.10) }

    footer{
      display:flex; align-items:center; justify-content:space-between; gap:10px;
      flex-wrap:wrap;
      color: var(--muted);
      font-size:12px;
      padding: 0 2px;
    }
    .kbd{
      font-variant-numeric: tabular-nums;
      padding: 2px 8px;
      border-radius: 10px;
      border:1px solid rgba(255,255,255,.14);
      background: rgba(255,255,255,.06);
      color: rgba(255,255,255,.82);
      margin-inline: 4px;
      white-space:nowrap;
    }

    /* Responsive */
    @media (max-width: 920px){
      main{ grid-template-columns: 1fr; }
      input[type="range"]{ width: min(280px, 52vw); }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce){
      .noise{ animation:none; }
      .btn{ transition:none; }
      .bar{ transition:none; }
    }
  </style>


  <canvas id="fx" aria-hidden="true"></canvas>
  <div class="noise" aria-hidden="true"></div>

  <div class="app">
    <header>
      <div class="brand">
        <div class="logo" title="بدون کتابخونه 😄"><span>⚡</span></div>
        <div class="title">
          <b>داشبورد سایبر — گرافیک زنده با Canvas</b>
          <small>موس رو حرکت بده • کلیک کن «موج» بساز • کلید <span class="kbd">Space</span> پالس</small>
        </div>
      </div>

      <div class="toolbar">
        <div class="pill" title="وضعیت موتور">
          <span class="dot" id="statusDot"></span>
          <span id="statusText">آنلاین</span>
        </div>
        <button class="btn ghost" id="btnFreeze" type="button" title="فریز/ادامه">
          ⏯️ <span>فریز</span>
        </button>
        <button class="btn primary" id="btnPulse" type="button" title="پالس بصری">
          🫧 <span>پالس</span>
        </button>
      </div>
    </header>

    <main>
      <section class="panel" aria-label="آمار زنده">
        <div class="panel-header">
          <div class="panel-title">
            <b>📡 تله‌متری لحظه‌ای</b>
            <span>یک نمونه‌ی «خیلی خفن» فقط با HTML/CSS/JS</span>
          </div>
          <button class="btn ghost" id="btnShuffle" type="button" title="ریست/تصادفی‌سازی">
            🎲 <span>تصادفی</span>
          </button>
        </div>

        <div class="grid">
          <div class="card">
            <div class="kpi">
              <div>
                <div class="label">چگالی شبکه</div>
                <div class="value" id="kpiDensity">—</div>
              </div>
              <div class="tag good" id="tagDensity">پایدار</div>
            </div>
            <div class="spark" id="spark1" aria-hidden="true"></div>
          </div>

          <div class="card">
            <div class="kpi">
              <div>
                <div class="label">انرژی حرکت</div>
                <div class="value" id="kpiEnergy">—</div>
              </div>
              <div class="tag warn" id="tagEnergy">نیمه‌فعال</div>
            </div>
            <div class="spark" id="spark2" aria-hidden="true"></div>
          </div>

          <div class="card">
            <div class="kpi">
              <div>
                <div class="label">تعامل کاربر</div>
                <div class="value" id="kpiInteract">—</div>
              </div>
              <div class="tag good" id="tagInteract">بالا</div>
            </div>
            <div class="spark" id="spark3" aria-hidden="true"></div>
          </div>

          <div class="card">
            <div class="kpi">
              <div>
                <div class="label">پینگ نمایشی</div>
                <div class="value" id="kpiPing">—</div>
              </div>
              <div class="tag bad" id="tagPing">پرنوسان</div>
            </div>
            <div class="spark" id="spark4" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <aside class="right">
        <section class="panel" aria-label="کنترل‌ها">
          <div class="panel-header">
            <div class="panel-title">
              <b>🎛️ کنترل‌ها</b>
              <span>روی جلوه‌ها دستکاری کن، خروجی متفاوت بگیر</span>
            </div>
            <button class="btn ghost" id="btnNeon" type="button" title="تغییر مود نورانی">
              🌈 <span>نئون</span>
            </button>
          </div>

          <div class="controls">
            <div class="row">
              <div class="meta">
                <b>تعداد ذرات</b>
                <small>کم/زیاد = سبک/سنگین</small>
              </div>
              <input id="rngCount" type="range" min="30" max="220" step="1" value="120">
              <div class="val" id="valCount">120</div>
            </div>

            <div class="row">
              <div class="meta">
                <b>فاصله اتصال</b>
                <small>شبکه‌سازی بین نقاط</small>
              </div>
              <input id="rngLink" type="range" min="60" max="220" step="1" value="140">
              <div class="val" id="valLink">140</div>
            </div>

            <div class="row">
              <div class="meta">
                <b>سرعت</b>
                <small>جنب‌وجوش بیشتر</small>
              </div>
              <input id="rngSpeed" type="range" min="30" max="170" step="1" value="95">
              <div class="val" id="valSpeed">0.95×</div>
            </div>

            <div class="row">
              <div class="meta">
                <b>جاذبه موس</b>
                <small>نقاط به سمت اشاره‌گر</small>
              </div>
              <input id="rngAttract" type="range" min="0" max="100" step="1" value="35">
              <div class="val" id="valAttract">35%</div>
            </div>
          </div>
        </section>

        <section class="panel mini-log" aria-label="رویدادها">
          <div class="panel-header">
            <div class="panel-title">
              <b>🧾 رویدادها</b>
              <span>یک لاگ کوچک برای حس «اپ واقعی»</span>
            </div>
            <button class="btn ghost" id="btnClear" type="button" title="پاک کردن لاگ">
              🧹 <span>پاک</span>
            </button>
          </div>

          <div class="log" id="log" role="log" aria-live="polite"></div>
        </section>
      </aside>
    </main>

    <footer>
      <div>
        نکته: برای موج سریع، <span class="kbd">کلیک</span> کن — برای پالس، <span class="kbd">Space</span>
      </div>
      <div>
        رندر: <span class="kbd" id="fps">— fps</span>
      </div>
    </footer>
  </div>

  <script>
    (() => {
      // ---------- Utilities ----------
      const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
      const lerp = (a,b,t) => a + (b-a)*t;
      const rand = (a,b) => a + Math.random()*(b-a);
      const now = () => performance.now();

      // ---------- DOM ----------
      const canvas = document.getElementById('fx');
      const ctx = canvas.getContext('2d', { alpha: true });

      const el = {
        statusDot: document.getElementById('statusDot'),
        statusText: document.getElementById('statusText'),
        btnFreeze: document.getElementById('btnFreeze'),
        btnPulse: document.getElementById('btnPulse'),
        btnShuffle: document.getElementById('btnShuffle'),
        btnNeon: document.getElementById('btnNeon'),
        btnClear: document.getElementById('btnClear'),
        log: document.getElementById('log'),
        fps: document.getElementById('fps'),

        rngCount: document.getElementById('rngCount'),
        rngLink: document.getElementById('rngLink'),
        rngSpeed: document.getElementById('rngSpeed'),
        rngAttract: document.getElementById('rngAttract'),
        valCount: document.getElementById('valCount'),
        valLink: document.getElementById('valLink'),
        valSpeed: document.getElementById('valSpeed'),
        valAttract: document.getElementById('valAttract'),

        kpiDensity: document.getElementById('kpiDensity'),
        kpiEnergy: document.getElementById('kpiEnergy'),
        kpiInteract: document.getElementById('kpiInteract'),
        kpiPing: document.getElementById('kpiPing'),
        tagDensity: document.getElementById('tagDensity'),
        tagEnergy: document.getElementById('tagEnergy'),
        tagInteract: document.getElementById('tagInteract'),
        tagPing: document.getElementById('tagPing'),

        spark1: document.getElementById('spark1'),
        spark2: document.getElementById('spark2'),
        spark3: document.getElementById('spark3'),
        spark4: document.getElementById('spark4'),
      };

      // ---------- Spark bars ----------
      function makeSpark(container, n=14){
        container.innerHTML = "";
        const bars = [];
        for(let i=0;i<n;i++){
          const b = document.createElement('div');
          b.className = 'bar';
          b.style.transform = \`scaleY(\${rand(.15,.9).toFixed(3)})\`;
          container.appendChild(b);
          bars.push(b);
        }
        return bars;
      }
      const sparks = [
        makeSpark(el.spark1, 16),
        makeSpark(el.spark2, 16),
        makeSpark(el.spark3, 16),
        makeSpark(el.spark4, 16),
      ];

      // ---------- Log ----------
      const logMax = 18;
      function log(tag, text, level="good"){
        const line = document.createElement('div');
        line.className = 'line';
        const left = document.createElement('div');
        left.style.display = "flex";
        left.style.alignItems = "center";
        left.style.gap = "10px";

        const t = document.createElement('span');
        t.className = \`tag \${level}\`;
        t.textContent = tag;

        const msg = document.createElement('span');
        msg.style.color = "rgba(255,255,255,.82)";
        msg.style.fontSize = "12px";
        msg.textContent = text;

        left.appendChild(t);
        left.appendChild(msg);

        const time = document.createElement('span');
        time.style.color = "rgba(255,255,255,.55)";
        time.style.fontSize = "11px";
        time.style.fontVariantNumeric = "tabular-nums";
        const d = new Date();
        time.textContent = d.toLocaleTimeString('fa-IR', { hour:'2-digit', minute:'2-digit', second:'2-digit' });

        line.appendChild(left);
        line.appendChild(time);

        el.log.prepend(line);
        while(el.log.children.length > logMax) el.log.removeChild(el.log.lastChild);
      }

      // ---------- Simulation ----------
      let W=1,H=1, DPR=1;
      function resize(){
        const rect = canvas.getBoundingClientRect();
        DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
        W = Math.max(1, Math.floor(rect.width));
        H = Math.max(1, Math.floor(rect.height));
        canvas.width = Math.floor(W * DPR);
        canvas.height = Math.floor(H * DPR);
        ctx.setTransform(DPR,0,0,DPR,0,0);
      }
      window.addEventListener('resize', resize, { passive:true });

      const mouse = {
        x: 0, y: 0,
        vx: 0, vy: 0,
        down:false,
        lastX: 0, lastY: 0,
        t: 0,
        heat: 0, // interaction intensity
      };

      window.addEventListener('pointermove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouse.vx = x - mouse.x;
        mouse.vy = y - mouse.y;
        mouse.lastX = mouse.x; mouse.lastY = mouse.y;
        mouse.x = x; mouse.y = y;
        mouse.t = now();
        mouse.heat = clamp(mouse.heat + Math.hypot(mouse.vx, mouse.vy) * 0.008, 0, 1);
      }, { passive:true });

      window.addEventListener('pointerdown', (e) => {
        mouse.down = true;
        wave(mouse.x, mouse.y, 1.0);
      }, { passive:true });

      window.addEventListener('pointerup', () => { mouse.down = false; }, { passive:true });
      window.addEventListener('pointerleave', () => { mouse.down = false; }, { passive:true });

      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space'){
          e.preventDefault();
          pulse();
        }
      });

      let neon = true;
      let frozen = false;

      const params = {
        count: +el.rngCount.value,
        link: +el.rngLink.value,
        speed: +el.rngSpeed.value / 100,
        attract: +el.rngAttract.value / 100,
      };

      function syncLabels(){
        el.valCount.textContent = String(params.count);
        el.valLink.textContent = String(params.link);
        el.valSpeed.textContent = params.speed.toFixed(2) + "×";
        el.valAttract.textContent = Math.round(params.attract*100) + "%";
      }

      el.rngCount.addEventListener('input', () => {
        params.count = +el.rngCount.value;
        syncLabels();
        rebuild();
        log("تنظیم", \`تعداد ذرات: \${params.count}\`, "good");
      });
      el.rngLink.addEventListener('input', () => {
        params.link = +el.rngLink.value;
        syncLabels();
        log("تنظیم", \`فاصله اتصال: \${params.link}\`, "warn");
      });
      el.rngSpeed.addEventListener('input', () => {
        params.speed = +el.rngSpeed.value / 100;
        syncLabels();
        log("تنظیم", \`سرعت: \${params.speed.toFixed(2)}×\`, "good");
      });
      el.rngAttract.addEventListener('input', () => {
        params.attract = +el.rngAttract.value / 100;
        syncLabels();
        log("تنظیم", \`جاذبه: \${Math.round(params.attract*100)}%\`, "warn");
      });
      syncLabels();

      el.btnFreeze.addEventListener('click', () => {
        frozen = !frozen;
        el.btnFreeze.querySelector('span').textContent = frozen ? "ادامه" : "فریز";
        el.statusText.textContent = frozen ? "متوقف" : "آنلاین";
        el.statusDot.style.boxShadow = frozen
          ? "0 0 0 6px rgba(255,211,92,.12), 0 0 18px rgba(255,211,92,.25)"
          : "0 0 0 6px rgba(124,92,255,.10), 0 0 18px rgba(124,92,255,.35)";
        log("سیستم", frozen ? "انیمیشن فریز شد." : "انیمیشن ادامه پیدا کرد.", frozen ? "warn" : "good");
      });

      el.btnPulse.addEventListener('click', () => pulse());
      el.btnShuffle.addEventListener('click', () => {
        randomize();
        rebuild(true);
        log("موتور", "پارامترها تصادفی شدند.", "good");
      });
      el.btnNeon.addEventListener('click', () => {
        neon = !neon;
        log("نمایش", neon ? "مود نئون روشن شد." : "مود نئون خاموش شد.", neon ? "good" : "warn");
      });
      el.btnClear.addEventListener('click', () => {
        el.log.innerHTML = "";
        log("لاگ", "پاک شد.", "warn");
      });

      // ---------- Particles ----------
      let particles = [];
      let ripples = [];

      function rebuild(keepRipples=false){
        const target = params.count;
        if (!keepRipples) ripples = [];
        if (particles.length > target) particles.length = target;
        while(particles.length < target){
          particles.push({
            x: rand(0, W),
            y: rand(0, H),
            vx: rand(-.8,.8),
            vy: rand(-.8,.8),
            r: rand(1.4, 3.2),
            hue: rand(190, 280),
            a: rand(.55, .95),
            wob: rand(0, Math.PI*2),
          });
        }
      }

      function randomize(){
        // Stay within a "good looking" envelope
        const c = Math.round(rand(60, 200));
        const l = Math.round(rand(90, 200));
        const s = rand(.65, 1.25);
        const a = rand(.10, .70);

        params.count = c; params.link = l; params.speed = s; params.attract = a;
        el.rngCount.value = c;
        el.rngLink.value = l;
        el.rngSpeed.value = Math.round(s * 100);
        el.rngAttract.value = Math.round(a * 100);
        syncLabels();
      }

      function wave(x,y,intensity=1){
        ripples.push({
          x,y,
          r: 0,
          v: lerp(220, 520, intensity),
          a: lerp(.35, .75, intensity),
          w: lerp(6, 12, intensity),
          life: 0
        });
        mouse.heat = clamp(mouse.heat + 0.22, 0, 1);
        log("تعامل", "موج ساخته شد.", "good");
      }

      function pulse(){
        const x = (Number.isFinite(mouse.x) && mouse.x>0) ? mouse.x : W*0.5;
        const y = (Number.isFinite(mouse.y) && mouse.y>0) ? mouse.y : H*0.45;
        wave(x,y,1.2);
        // kick particles a bit
        for (let i=0;i<particles.length;i++){
          const p = particles[i];
          const dx = p.x - x, dy = p.y - y;
          const d = Math.hypot(dx,dy) + 0.0001;
          const k = 120 / (d*d);
          p.vx += (dx/d) * k;
          p.vy += (dy/d) * k;
        }
        log("پالس", "شوک کوچک به سیستم وارد شد.", "warn");
      }

      // ---------- Rendering ----------
      let last = now();
      let fpsSm = 60;
      let tick = 0;

      function drawBackground(t){
        // subtle animated gradient wash
        const g = ctx.createRadialGradient(W*0.2, H*0.15, 0, W*0.2, H*0.15, Math.max(W,H)*0.9);
        const a = neon ? 0.22 : 0.14;
        const b = neon ? 0.16 : 0.10;
        g.addColorStop(0, \`rgba(124,92,255,\${a})\`);
        g.addColorStop(0.45, \`rgba(0,212,255,\${b})\`);
        g.addColorStop(1, \`rgba(0,0,0,0)\`);
        ctx.fillStyle = g;
        ctx.fillRect(0,0,W,H);

        // vignette
        const v = ctx.createRadialGradient(W*0.5, H*0.5, Math.min(W,H)*0.2, W*0.5, H*0.5, Math.max(W,H)*0.75);
        v.addColorStop(0, "rgba(0,0,0,0)");
        v.addColorStop(1, "rgba(0,0,0,0.38)");
        ctx.fillStyle = v;
        ctx.fillRect(0,0,W,H);
      }

      function drawRipples(dt){
        for (let i=ripples.length-1;i>=0;i--){
          const r = ripples[i];
          r.life += dt;
          r.r += r.v * dt;
          r.a *= Math.pow(0.22, dt); // fade
          if (r.a < 0.02 || r.r > Math.max(W,H)*1.2){
            ripples.splice(i,1);
            continue;
          }
          const alpha = r.a * (neon ? 1 : 0.8);
          ctx.lineWidth = r.w;
          ctx.strokeStyle = \`rgba(0,212,255,\${alpha})\`;
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.r, 0, Math.PI*2);
          ctx.stroke();

          ctx.lineWidth = Math.max(1.5, r.w*0.45);
          ctx.strokeStyle = \`rgba(124,92,255,\${alpha*0.9})\`;
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.r*0.86, 0, Math.PI*2);
          ctx.stroke();
        }
      }

      function stepParticles(dt, t){
        const spd = params.speed;
        const attract = params.attract;
        const mx = mouse.x, my = mouse.y;
        const pulling = (now() - mouse.t) < 1400; // recent mouse activity
        const pull = pulling ? (0.10 + 0.60*mouse.heat) * attract : 0.02 * attract;

        for (let i=0;i<particles.length;i++){
          const p = particles[i];
          p.wob += dt * (0.9 + p.r*0.15);

          // soft mouse gravity
          if (pull > 0.001 && Number.isFinite(mx) && Number.isFinite(my)){
            const dx = mx - p.x;
            const dy = my - p.y;
            const d = Math.hypot(dx,dy) + 0.001;
            const s = pull * 240 / (d + 60);
            p.vx += (dx/d) * s;
            p.vy += (dy/d) * s;
          }

          // ripple force
          for (let k=0;k<ripples.length;k++){
            const r = ripples[k];
            const dx = p.x - r.x, dy = p.y - r.y;
            const d = Math.hypot(dx,dy) + 0.001;
            const band = Math.abs(d - r.r);
            if (band < 50){
              const push = (1 - band/50) * r.a * 260;
              p.vx += (dx/d) * push * dt;
              p.vy += (dy/d) * push * dt;
            }
          }

          // motion + damping
          p.vx *= Math.pow(0.52, dt);
          p.vy *= Math.pow(0.52, dt);
          p.x += p.vx * 60 * dt * spd;
          p.y += p.vy * 60 * dt * spd;

          // boundaries (soft bounce)
          if (p.x < -20) { p.x = -20; p.vx = Math.abs(p.vx); }
          if (p.x > W+20) { p.x = W+20; p.vx = -Math.abs(p.vx); }
          if (p.y < -20) { p.y = -20; p.vy = Math.abs(p.vy); }
          if (p.y > H+20) { p.y = H+20; p.vy = -Math.abs(p.vy); }
        }

        // decay interaction heat
        mouse.heat = clamp(mouse.heat * Math.pow(0.55, dt), 0, 1);
      }

      function drawNetwork(t){
        const link = params.link;
        const link2 = link*link;

        // Lines
        ctx.save();
        ctx.globalCompositeOperation = neon ? "lighter" : "source-over";

        let connections = 0;
        for (let i=0;i<particles.length;i++){
          const a = particles[i];
          for (let j=i+1;j<particles.length;j++){
            const b = particles[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const d2 = dx*dx + dy*dy;
            if (d2 < link2){
              const d = Math.sqrt(d2);
              const k = 1 - d / link;
              const alpha = (0.10 + 0.26*k) * (neon ? 1 : 0.8);
              const hue = (a.hue + b.hue) * 0.5;
              ctx.strokeStyle = \`hsla(\${hue}, 95%, 70%, \${alpha})\`;
              ctx.lineWidth = lerp(0.6, 1.6, k);
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
              connections++;
            }
          }
        }

        // Points
        for (let i=0;i<particles.length;i++){
          const p = particles[i];
          const pulse = 0.35 + 0.65*Math.sin(t*0.0015 + p.wob)*0.5 + 0.35;
          const r = p.r * lerp(0.92, 1.25, pulse) * (neon ? 1.05 : 1.0);

          // glow
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r*6.5);
          const a0 = (0.12 + p.a*0.22) * (neon ? 1 : 0.7);
          glow.addColorStop(0, \`hsla(\${p.hue}, 95%, 70%, \${a0})\`);
          glow.addColorStop(1, \`hsla(\${p.hue+20}, 95%, 65%, 0)\`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r*6.5, 0, Math.PI*2);
          ctx.fill();

          // core
          ctx.fillStyle = \`hsla(\${p.hue}, 100%, 78%, \${0.75*(neon?1:0.85)})\`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI*2);
          ctx.fill();
        }

        ctx.restore();
        return connections;
      }

      function updateKPIs(connections, dt){
        // Density: normalized connections per particle
        const n = particles.length || 1;
        const density = connections / n;
        const densityScore = clamp(density / 10, 0, 1);
        el.kpiDensity.textContent = (densityScore*100).toFixed(0) + "%";
        el.tagDensity.textContent = densityScore > 0.66 ? "متراکم" : (densityScore > 0.33 ? "پایدار" : "خلوت");
        el.tagDensity.className = "tag " + (densityScore > 0.66 ? "warn" : "good");

        // Energy: average speed
        let sp = 0;
        for (let i=0;i<particles.length;i++){
          const p = particles[i];
          sp += Math.hypot(p.vx, p.vy);
        }
        sp /= n;
        const eScore = clamp(sp / 2.2, 0, 1);
        el.kpiEnergy.textContent = (eScore*100).toFixed(0) + "%";
        el.tagEnergy.textContent = eScore > 0.75 ? "فعال" : (eScore > 0.35 ? "نیمه‌فعال" : "آرام");
        el.tagEnergy.className = "tag " + (eScore > 0.75 ? "good" : (eScore > 0.35 ? "warn" : "bad"));

        // Interaction: based on mouse heat
        const iScore = clamp(mouse.heat, 0, 1);
        el.kpiInteract.textContent = (iScore*100).toFixed(0) + "%";
        el.tagInteract.textContent = iScore > 0.65 ? "بالا" : (iScore > 0.28 ? "متوسط" : "کم");
        el.tagInteract.className = "tag " + (iScore > 0.65 ? "good" : (iScore > 0.28 ? "warn" : "bad"));

        // "Ping": synthetic jitter metric using dt and motion
        const jitter = clamp((Math.abs(dt - 1/60) * 9) + (1 - fpsSm/60)*0.7, 0, 1);
        const ping = Math.round(lerp(18, 160, jitter));
        el.kpiPing.textContent = ping + "ms";
        el.tagPing.textContent = ping < 45 ? "روون" : (ping < 90 ? "نرمال" : "پرنوسان");
        el.tagPing.className = "tag " + (ping < 45 ? "good" : (ping < 90 ? "warn" : "bad"));

        // animate sparks
        const values = [densityScore, eScore, iScore, 1 - clamp(ping/170,0,1)];
        for (let s=0;s<4;s++){
          const bars = sparks[s];
          const base = values[s];
          for (let i=0;i<bars.length;i++){
            const w = 0.45 + 0.55*Math.sin((tick*0.12) + i*0.55 + s*1.3)*0.5 + 0.25;
            const h = clamp(0.10 + 0.92*base*w, 0.12, 1.0);
            bars[i].style.transform = \`scaleY(\${h.toFixed(3)})\`;
            // slight hue drift
            const hue = (neon ? 205 : 215) + s*18 + i*2;
            bars[i].style.background = neon
              ? \`linear-gradient(180deg, hsla(\${hue},95%,72%,.38), hsla(\${hue+20},95%,62%,.10))\`
              : \`linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.06))\`;
          }
        }
      }

      // ---------- Main loop ----------
      function frame(){
        const t = now();
        let dt = (t - last) / 1000;
        last = t;
        dt = clamp(dt, 0, 0.05);

        // fps smoothing
        const inst = 1 / Math.max(1e-4, dt);
        fpsSm = lerp(fpsSm, inst, 0.08);
        el.fps.textContent = \`\${Math.round(fpsSm)} fps\`;

        // Resize on first draw / any changes
        if (canvas.width === 0) resize();

        // Clear
        ctx.clearRect(0,0,W,H);

        drawBackground(t);

        if (!frozen){
          stepParticles(dt, t);
        }

        drawRipples(dt);
        const connections = drawNetwork(t);

        // periodic log nudges
        tick++;
        if (tick % 220 === 0){
          const vibe = neon ? "نئون" : "کلاسیک";
          const lvl = frozen ? "warn" : "good";
          log("وضعیت", \`مود: \${vibe} • ذرات: \${params.count} • لینک: \${params.link}\`, lvl);
        }

        updateKPIs(connections, dt);

        requestAnimationFrame(frame);
      }

      // ---------- Init ----------
      function init(){
        resize();
        rebuild();
        log("شروع", "موتور گرافیکی راه افتاد.", "good");
        log("راهنما", "موس را حرکت بده؛ کلیک کن موج بساز؛ Space پالس.", "warn");
        requestAnimationFrame(frame);
      }
      init();
    })();
  <\/script>

`,className:"w-html-embed"})}),S=a=>{const{origin:t,pathname:r,search:n}=new URL(a);return`${t}${r}${n}`},E=l.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),C=({data:a})=>{const{system:t,resources:r,url:n,pageMeta:s}=a,p=S(n),c=l.useMemo(()=>({imageLoader:o,assetBaseUrl:i,resources:r,breakpoints:y,onError:console.error}),[r]);return e.jsxs(g.Provider,{value:c,children:[e.jsx(u.Provider,{value:n,children:e.jsx(E,{pageKey:p,system:t})}),e.jsx(m,{url:n,pageMeta:s,siteName:d,imageLoader:o,assetBaseUrl:i}),e.jsx(x,{children:s.title})]})},M=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),P=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${i}${h}`})}),f.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-65/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-65/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{B as configValuesSerialized};
