import{j as e,r as s,a,i as n,R as m,b as u,P as g,c as h,d as v}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",f=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=o=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>نقشه حرفه‌ای</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css">
<style>
  :root {
    --bg: #0a0e1a;
    --panel: #111827;
    --panel2: #1a2235;
    --border: rgba(99,179,237,0.15);
    --accent: #38bdf8;
    --accent2: #818cf8;
    --accent3: #34d399;
    --danger: #f87171;
    --text: #e2e8f0;
    --text2: #94a3b8;
    --glow: 0 0 20px rgba(56,189,248,0.3);
    --radius: 12px;
  }

  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: 'Vazirmatn', sans-serif;
    background: var(--bg);
    color: var(--text);
    height: 100vh;
    overflow: hidden;
    direction: rtl;
  }

  /* ===== LAYOUT ===== */
  #app {
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-template-rows: 56px 1fr;
    height: 100vh;
  }

  /* ===== HEADER ===== */
  header {
    grid-column: 1/-1;
    background: var(--panel);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 16px;
    z-index: 100;
    backdrop-filter: blur(20px);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--accent);
    letter-spacing: 0.03em;
  }

  .logo svg { width:28px; height:28px; filter: drop-shadow(0 0 8px var(--accent)); }

  #search-bar {
    flex: 1;
    max-width: 500px;
    position: relative;
    margin: 0 auto;
  }

  #search-input {
    width: 100%;
    background: var(--panel2);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 8px 16px 8px 40px;
    border-radius: 40px;
    font-family: inherit;
    font-size: 0.88rem;
    outline: none;
    transition: all 0.3s;
    direction: rtl;
  }

  #search-input:focus {
    border-color: var(--accent);
    box-shadow: var(--glow);
    background: var(--panel);
  }

  #search-input::placeholder { color: var(--text2); }

  .search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text2);
    pointer-events: none;
  }

  #search-results {
    position: absolute;
    top: calc(100% + 8px);
    left: 0; right: 0;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    display: none;
    z-index: 999;
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  }

  .search-result-item {
    padding: 10px 16px;
    cursor: pointer;
    font-size: 0.85rem;
    color: var(--text2);
    transition: all 0.2s;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 10px;
  }

  .search-result-item:last-child { border-bottom: none; }
  .search-result-item:hover { background: var(--panel2); color: var(--text); }

  .header-actions { display: flex; gap: 8px; margin-right: auto; }

  .hbtn {
    background: var(--panel2);
    border: 1px solid var(--border);
    color: var(--text2);
    padding: 6px 14px;
    border-radius: 8px;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.8rem;
    transition: all 0.2s;
    display: flex; align-items: center; gap: 6px;
  }

  .hbtn:hover { color: var(--accent); border-color: var(--accent); box-shadow: var(--glow); }

  /* ===== SIDEBAR ===== */
  #sidebar {
    background: var(--panel);
    border-left: 1px solid var(--border);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    z-index: 50;
  }

  #sidebar::-webkit-scrollbar { width: 4px; }
  #sidebar::-webkit-scrollbar-track { background: transparent; }
  #sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

  .sidebar-section {
    border-bottom: 1px solid var(--border);
    padding: 16px;
  }

  .section-title {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 12px;
    display: flex; align-items: center; gap: 8px;
  }

  /* Layer Controls */
  .layer-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.83rem;
    color: var(--text2);
    border: 1px solid transparent;
    width: 100%;
    background: transparent;
    font-family: inherit;
    text-align: right;
    margin-bottom: 4px;
  }

  .layer-btn:hover { background: var(--panel2); color: var(--text); }
  .layer-btn.active { background: rgba(56,189,248,0.1); border-color: rgba(56,189,248,0.3); color: var(--accent); }

  .layer-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: auto;
  }

  /* Stats */
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .stat-card {
    background: var(--panel2);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
    text-align: center;
  }

  .stat-value {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--accent);
    line-height: 1;
  }

  .stat-label {
    font-size: 0.7rem;
    color: var(--text2);
    margin-top: 4px;
  }

  /* Markers list */
  .marker-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.82rem;
    color: var(--text2);
  }

  .marker-item:hover { background: var(--panel2); color: var(--text); }

  .marker-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent3);
    flex-shrink: 0;
  }

  .marker-item .del-btn {
    margin-right: auto;
    background: none;
    border: none;
    color: var(--danger);
    cursor: pointer;
    opacity: 0;
    font-size: 0.9rem;
    transition: opacity 0.2s;
  }

  .marker-item:hover .del-btn { opacity: 1; }

  /* Tools panel */
  .tools-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .tool-btn {
    background: var(--panel2);
    border: 1px solid var(--border);
    color: var(--text2);
    padding: 12px 8px;
    border-radius: 10px;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.78rem;
    transition: all 0.2s;
    text-align: center;
    display: flex; flex-direction: column; align-items: center; gap: 6px;
  }

  .tool-btn:hover { border-color: var(--accent2); color: var(--accent2); }
  .tool-btn.active { background: rgba(129,140,248,0.1); border-color: var(--accent2); color: var(--accent2); }
  .tool-btn svg { width: 20px; height: 20px; }

  /* ===== MAP ===== */
  #map-wrap {
    position: relative;
    overflow: hidden;
  }

  #map {
    width: 100%; height: 100%;
  }

  /* ===== MAP CONTROLS ===== */
  #map-controls {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 400;
  }

  .map-ctrl-btn {
    width: 40px; height: 40px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text2);
    transition: all 0.2s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  }

  .map-ctrl-btn:hover { color: var(--accent); border-color: var(--accent); box-shadow: var(--glow); }

  /* ===== MINI MAP ===== */
  #minimap-panel {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 180px;
    height: 130px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    z-index: 400;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5);
  }

  #minimap { width: 100%; height: 100%; }

  .minimap-label {
    position: absolute;
    top: 6px; right: 8px;
    font-size: 0.65rem;
    color: var(--accent);
    font-weight: 600;
    letter-spacing: 0.08em;
    z-index: 10;
    text-shadow: 0 1px 4px rgba(0,0,0,0.8);
  }

  /* ===== COORDINATE BAR ===== */
  #coord-bar {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 40px;
    padding: 7px 18px;
    font-size: 0.75rem;
    color: var(--text2);
    z-index: 400;
    letter-spacing: 0.04em;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  }

  #coord-bar span { color: var(--accent); font-weight: 600; }

  /* ===== ZOOM BAR ===== */
  #zoom-bar {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 40px;
    padding: 5px 14px;
    font-size: 0.75rem;
    color: var(--text2);
    z-index: 400;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  }

  /* ===== TOAST ===== */
  #toast {
    position: fixed;
    top: 72px;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    background: var(--panel2);
    border: 1px solid var(--accent);
    border-radius: 40px;
    padding: 8px 20px;
    font-size: 0.82rem;
    color: var(--accent);
    z-index: 9999;
    opacity: 0;
    transition: all 0.3s;
    pointer-events: none;
    box-shadow: var(--glow);
    white-space: nowrap;
  }

  #toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  /* ===== LEAFLET OVERRIDES ===== */
  .leaflet-control-zoom { display: none !important; }
  .leaflet-attribution-flag { display: none !important; }
  .leaflet-popup-content-wrapper {
    background: var(--panel) !important;
    border: 1px solid var(--border) !important;
    border-radius: 12px !important;
    color: var(--text) !important;
    font-family: 'Vazirmatn', sans-serif !important;
    box-shadow: 0 10px 40px rgba(0,0,0,0.6) !important;
  }
  .leaflet-popup-tip { background: var(--panel) !important; }
  .leaflet-popup-close-button { color: var(--text2) !important; font-size: 18px !important; top: 8px !important; right: 8px !important; }

  /* ===== RANGE ===== */
  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    background: var(--panel2);
    border-radius: 4px;
    outline: none;
    margin-top: 6px;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px; height: 14px;
    border-radius: 50%;
    background: var(--accent);
    cursor: pointer;
    box-shadow: 0 0 8px var(--accent);
  }

  /* Routing panel */
  #route-panel {
    display: none;
    background: var(--panel2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 12px;
    margin-top: 8px;
  }
  #route-panel input {
    width: 100%;
    background: var(--panel);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 7px 12px;
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.82rem;
    margin-bottom: 6px;
    outline: none;
    direction: rtl;
  }
  #route-panel input:focus { border-color: var(--accent); }

  .route-btn {
    width: 100%;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    border: none;
    color: #000;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.83rem;
    font-weight: 600;
    transition: opacity 0.2s;
  }
  .route-btn:hover { opacity: 0.85; }

  .leaflet-routing-container { display: none; }

  /* marker count badge */
  .badge {
    background: var(--accent);
    color: #000;
    border-radius: 40px;
    padding: 1px 7px;
    font-size: 0.68rem;
    font-weight: 700;
    margin-right: auto;
  }

  /* custom cursor for add-marker mode */
  body.adding-marker #map { cursor: crosshair; }

  /* Heatmap legend */
  .legend-bar {
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(to right, #2563eb, #34d399, #fbbf24, #f87171);
    margin-top: 6px;
  }
  .legend-labels {
    display: flex; justify-content: space-between;
    font-size: 0.65rem; color: var(--text2); margin-top: 3px;
  }

  .pulse-ring {
    border-radius: 50%;
    animation: pulse 2s ease-out infinite;
  }
  @keyframes pulse {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(2.5); }
  }

  @keyframes fadeIn {
    from { opacity:0; transform: translateY(4px); }
    to { opacity:1; transform: translateY(0); }
  }

  .marker-item { animation: fadeIn 0.3s ease; }
</style>



<div id="app">
  <!-- HEADER -->
  <header>
    <div class="logo">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="#38bdf8" stroke-width="2"></circle>
        <path d="M4 16 Q16 4 28 16 Q16 28 4 16Z" stroke="#38bdf8" stroke-width="1.5" fill="rgba(56,189,248,0.1)"></path>
        <line x1="16" y1="2" x2="16" y2="30" stroke="#38bdf8" stroke-width="1"></line>
        <line x1="2" y1="16" x2="30" y2="16" stroke="#38bdf8" stroke-width="1"></line>
        <circle cx="16" cy="16" r="3" fill="#38bdf8"></circle>
      </svg>
      MapPro
    </div>
    <div id="search-bar">
      <span class="search-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
      </span>
      <input type="text" id="search-input" placeholder="جستجوی مکان، شهر، آدرس..." autocomplete="off">
      <div id="search-results"></div>
    </div>
    <div class="header-actions">
      <button class="hbtn" onclick="exportMap()">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        خروجی
      </button>
      <button class="hbtn" onclick="shareLocation()">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
        اشتراک‌گذاری
      </button>
    </div>
  </header>

  <!-- SIDEBAR -->
  <aside id="sidebar">

    <!-- Layers -->
    <div class="sidebar-section">
      <div class="section-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 22 22 7 12 2"></polygon><line x1="2" y1="7" x2="22" y2="7"></line></svg>
        لایه‌های نقشه
      </div>
      <button class="layer-btn active" data-layer="streets" onclick="switchLayer(this,'streets')">
        <span class="layer-dot" style="background:#38bdf8"></span>
        خیابان‌ها
      </button>
      <button class="layer-btn" data-layer="satellite" onclick="switchLayer(this,'satellite')">
        <span class="layer-dot" style="background:#818cf8"></span>
        ماهواره‌ای
      </button>
      <button class="layer-btn" data-layer="terrain" onclick="switchLayer(this,'terrain')">
        <span class="layer-dot" style="background:#34d399"></span>
        توپوگرافی
      </button>
      <button class="layer-btn" data-layer="dark" onclick="switchLayer(this,'dark')">
        <span class="layer-dot" style="background:#f87171"></span>
        تاریک (Dark)
      </button>

      <div style="margin-top:14px;">
        <div style="font-size:0.75rem; color:var(--text2); margin-bottom:6px;">شفافیت لایه</div>
        <input type="range" min="30" max="100" value="100" id="opacity-slider" oninput="setOpacity(this.value)">
      </div>
    </div>

    <!-- Tools -->
    <div class="sidebar-section">
      <div class="section-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
        ابزارها
      </div>
      <div class="tools-grid">
        <button class="tool-btn" id="tool-marker" onclick="toggleTool('marker')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          افزودن پین
        </button>
        <button class="tool-btn" id="tool-ruler" onclick="toggleTool('ruler')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 16L22 8M2 8l20 8"></path><line x1="6" y1="16" x2="6" y2="20"></line><line x1="10" y1="14" x2="10" y2="18"></line><line x1="14" y1="12" x2="14" y2="16"></line><line x1="18" y1="10" x2="18" y2="14"></line></svg>
          اندازه‌گیری
        </button>
        <button class="tool-btn" id="tool-route" onclick="toggleTool('route')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5" cy="6" r="2"></circle><circle cx="19" cy="18" r="2"></circle><path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 1 2 2v1"></path></svg>
          مسیریابی
        </button>
        <button class="tool-btn" id="tool-locate" onclick="locateMe()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path><circle cx="12" cy="12" r="8" stroke-dasharray="4 2"></circle></svg>
          موقعیت من
        </button>
        <button class="tool-btn" id="tool-circle" onclick="toggleTool('circle')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="3" x2="12" y2="21"></line></svg>
          رسم دایره
        </button>
        <button class="tool-btn" onclick="clearAll()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6M14 11v6"></path><path d="M9 6V4h6v2"></path></svg>
          پاک کردن
        </button>
      </div>
      <div id="route-panel">
        <input type="text" id="from-input" placeholder="مبدا را وارد کنید...">
        <input type="text" id="to-input" placeholder="مقصد را وارد کنید...">
        <button class="route-btn" onclick="calculateRoute()">محاسبه مسیر</button>
      </div>
    </div>

    <!-- Stats -->
    <div class="sidebar-section">
      <div class="section-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
        آمار نقشه
      </div>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value" id="stat-zoom">10</div>
          <div class="stat-label">سطح زوم</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="stat-markers">0</div>
          <div class="stat-label">پین‌ها</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="stat-lat">—</div>
          <div class="stat-label">عرض جغرافیایی</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="stat-lng">—</div>
          <div class="stat-label">طول جغرافیایی</div>
        </div>
      </div>
    </div>

    <!-- Markers list -->
    <div class="sidebar-section" id="markers-section" style="display:none">
      <div class="section-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        پین‌های من
        <span class="badge" id="markers-count">0</span>
      </div>
      <div id="markers-list"></div>
    </div>

    <!-- Legend -->
    <div class="sidebar-section">
      <div class="section-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        راهنمای رنگ
      </div>
      <div class="legend-bar"></div>
      <div class="legend-labels"><span>کم‌تراکم</span><span>متوسط</span><span>پرتراکم</span></div>
    </div>

  </aside>

  <!-- MAP -->
  <div id="map-wrap">
    <div id="map"></div>

    <!-- Map Controls -->
    <div id="map-controls">
      <div class="map-ctrl-btn" onclick="map.zoomIn()" title="بزرگ‌نمایی">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <div class="map-ctrl-btn" onclick="map.zoomOut()" title="کوچک‌نمایی">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <div class="map-ctrl-btn" onclick="resetView()" title="بازگشت به نمای پیش‌فرض">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
      </div>
      <div class="map-ctrl-btn" onclick="toggleFullscreen()" title="تمام‌صفحه">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
      </div>
    </div>

    <!-- Minimap -->
    <div id="minimap-panel">
      <div class="minimap-label">نمای کلی</div>
      <div id="minimap"></div>
    </div>

    <!-- Coord bar -->
    <div id="coord-bar">📍 <span id="coord-text">نشانگر را روی نقشه حرکت دهید</span></div>

    <!-- Zoom indicator -->
    <div id="zoom-bar">🔍 زوم: <span id="zoom-level">10</span></div>
  </div>
</div>

<!-- Toast -->
<div id="toast"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>
<script>
// ============================
//  MAP INITIALIZATION
// ============================
const tileLayers = {
  streets: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19
  }),
  satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© Esri',
    maxZoom: 19
  }),
  terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenTopoMap',
    maxZoom: 17
  }),
  dark: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: '© Stadia Maps',
    maxZoom: 20
  })
};

const map = L.map('map', {
  center: [35.6892, 51.3890],
  zoom: 10,
  zoomControl: false,
  attributionControl: true
});

tileLayers.streets.addTo(map);
let currentTile = tileLayers.streets;

// Minimap
const minimap = L.map('minimap', {
  center: [35.6892, 51.3890],
  zoom: 5,
  zoomControl: false,
  attributionControl: false,
  dragging: false,
  scrollWheelZoom: false,
  doubleClickZoom: false
});
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png').addTo(minimap);

// Sync minimap
map.on('move', () => {
  minimap.setView(map.getCenter(), Math.max(1, map.getZoom() - 5));
});

// ============================
//  STATE
// ============================
let activeTool = null;
let markers = [];
let markerCount = 0;
let rulerPoints = [];
let rulerLine = null;
let circles = [];
let routingLayer = null;

// ============================
//  CUSTOM MARKER ICON
// ============================
function createIcon(color = '#38bdf8', label = '') {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42">
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="rgba(0,0,0,0.5)"/>
      </filter>
    </defs>
    <path d="M16 2C9.4 2 4 7.4 4 14c0 9 12 26 12 26s12-17 12-26c0-6.6-5.4-12-12-12z" 
          fill="\${color}" filter="url(#shadow)"/>
    <circle cx="16" cy="14" r="5" fill="white" opacity="0.9"/>
  </svg>\`;
  return L.divIcon({
    html: svg,
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -44],
    className: ''
  });
}

// ============================
//  LAYER SWITCH
// ============================
function switchLayer(btn, name) {
  document.querySelectorAll('.layer-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  map.removeLayer(currentTile);
  currentTile = tileLayers[name];
  currentTile.addTo(map);
  showToast('لایه نقشه تغییر کرد: ' + btn.textContent.trim());
}

function setOpacity(val) {
  currentTile.setOpacity(val / 100);
}

// ============================
//  TOOLS
// ============================
function toggleTool(tool) {
  const btn = document.getElementById('tool-' + tool);
  if (activeTool === tool) {
    activeTool = null;
    btn.classList.remove('active');
    document.body.classList.remove('adding-marker');
    if (tool === 'route') document.getElementById('route-panel').style.display = 'none';
    showToast('ابزار غیرفعال شد');
  } else {
    document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
    activeTool = tool;
    btn.classList.add('active');
    document.body.classList.toggle('adding-marker', tool === 'marker' || tool === 'circle');
    if (tool === 'route') {
      document.getElementById('route-panel').style.display = 'block';
      showToast('مبدا و مقصد را وارد کنید');
    } else {
      document.getElementById('route-panel').style.display = 'none';
    }
    const msgs = { marker: 'روی نقشه کلیک کنید تا پین بگذارید', ruler: 'روی نقشه کلیک کنید تا فاصله اندازه‌گیری شود', circle: 'روی نقشه کلیک کنید تا دایره رسم شود' };
    if (msgs[tool]) showToast(msgs[tool]);
  }
}

// ============================
//  MAP CLICK
// ============================
map.on('click', (e) => {
  if (!activeTool) return;
  const { lat, lng } = e.latlng;

  if (activeTool === 'marker') {
    addMarker(lat, lng);
  } else if (activeTool === 'ruler') {
    addRulerPoint(lat, lng);
  } else if (activeTool === 'circle') {
    addCircle(lat, lng);
  }
});

// ============================
//  ADD MARKER
// ============================
const colors = ['#38bdf8','#818cf8','#34d399','#fbbf24','#f87171','#e879f9','#fb923c'];
function addMarker(lat, lng) {
  markerCount++;
  const color = colors[markerCount % colors.length];
  const name = \`پین \${markerCount}\`;
  const m = L.marker([lat, lng], { icon: createIcon(color), draggable: true }).addTo(map);

  const popupContent = \`
    <div style="min-width:180px;padding:4px 0;">
      <div style="font-weight:700;font-size:0.95rem;margin-bottom:8px;color:#38bdf8">\${name}</div>
      <div style="font-size:0.78rem;color:#94a3b8;margin-bottom:4px;">📍 \${lat.toFixed(5)}, \${lng.toFixed(5)}</div>
      <div style="font-size:0.78rem;color:#94a3b8;margin-bottom:10px;">🕐 \${new Date().toLocaleTimeString('fa-IR')}</div>
      <textarea id="note-\${markerCount}" placeholder="یادداشت..." 
        style="width:100%;background:#1a2235;border:1px solid rgba(99,179,237,0.2);color:#e2e8f0;
        border-radius:6px;padding:6px;font-family:Vazirmatn,sans-serif;font-size:0.78rem;resize:none;height:60px;outline:none;direction:rtl;"></textarea>
    </div>\`;

  m.bindPopup(popupContent);
  m.openPopup();

  // Add to sidebar
  const li = document.createElement('div');
  li.className = 'marker-item';
  li.id = \`m-item-\${markerCount}\`;
  li.innerHTML = \`<span class="marker-dot" style="background:\${color}"></span>\${name}
    <span style="font-size:0.7rem;color:var(--text2);margin-right:auto;">\${lat.toFixed(3)}, \${lng.toFixed(3)}</span>
    <button class="del-btn" onclick="removeMarker(\${markerCount})">✕</button>\`;
  li.onclick = (e) => {
    if (e.target.classList.contains('del-btn')) return;
    map.flyTo([lat, lng], 14, { duration: 1 });
    m.openPopup();
  };
  document.getElementById('markers-list').appendChild(li);

  markers.push({ id: markerCount, marker: m, el: li });
  document.getElementById('markers-section').style.display = 'block';
  updateStats();
  showToast(\`\${name} اضافه شد\`);
}

function removeMarker(id) {
  const idx = markers.findIndex(m => m.id === id);
  if (idx === -1) return;
  map.removeLayer(markers[idx].marker);
  markers[idx].el.remove();
  markers.splice(idx, 1);
  if (markers.length === 0) document.getElementById('markers-section').style.display = 'none';
  updateStats();
  showToast('پین حذف شد');
}

// ============================
//  RULER
// ============================
function addRulerPoint(lat, lng) {
  rulerPoints.push([lat, lng]);
  const m = L.circleMarker([lat, lng], { radius: 5, color: '#fbbf24', fillColor: '#fbbf24', fillOpacity: 1 }).addTo(map);

  if (rulerPoints.length > 1) {
    if (rulerLine) map.removeLayer(rulerLine);
    rulerLine = L.polyline(rulerPoints, { color: '#fbbf24', weight: 2, dashArray: '6,6' }).addTo(map);
    const dist = calculateDistance(rulerPoints);
    showToast(\`📏 فاصله کل: \${dist < 1 ? (dist * 1000).toFixed(0) + ' متر' : dist.toFixed(2) + ' کیلومتر'}\`);
  }
}

function calculateDistance(pts) {
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    total += map.distance(pts[i - 1], pts[i]);
  }
  return total / 1000;
}

// ============================
//  CIRCLE
// ============================
function addCircle(lat, lng) {
  const radius = 1000 + Math.random() * 4000;
  const c = L.circle([lat, lng], {
    radius,
    color: '#818cf8',
    fillColor: '#818cf8',
    fillOpacity: 0.15,
    weight: 2
  }).addTo(map);
  circles.push(c);
  c.bindPopup(\`<div style="color:#e2e8f0;font-size:0.85rem">دایره با شعاع <strong style="color:#818cf8">\${(radius / 1000).toFixed(1)} کیلومتر</strong></div>\`).openPopup();
  showToast(\`دایره با شعاع \${(radius / 1000).toFixed(1)} کیلومتر رسم شد\`);
}

// ============================
//  ROUTE
// ============================
function calculateRoute() {
  const from = document.getElementById('from-input').value.trim();
  const to = document.getElementById('to-input').value.trim();
  if (!from || !to) { showToast('مبدا و مقصد را وارد کنید'); return; }

  // Demo: draw a line between Tehran and a random point
  if (routingLayer) map.removeLayer(routingLayer);
  const start = [35.6892, 51.3890];
  const end = [36.2972, 59.6067]; // Mashhad
  routingLayer = L.polyline([start, end], {
    color: '#34d399',
    weight: 4,
    dashArray: '12,6'
  }).addTo(map);
  map.fitBounds(routingLayer.getBounds(), { padding: [40, 40] });
  const dist = map.distance(start, end) / 1000;
  showToast(\`🛣 مسیر نمایشی: \${dist.toFixed(0)} کیلومتر\`);
}

// ============================
//  LOCATE
// ============================
function locateMe() {
  if (!navigator.geolocation) { showToast('موقعیت‌یابی پشتیبانی نمی‌شود'); return; }
  showToast('در حال یافتن موقعیت شما...');
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude: lat, longitude: lng } = pos.coords;
    map.flyTo([lat, lng], 15, { duration: 1.5 });
    const icon = L.divIcon({
      html: \`<div style="position:relative;">
        <div style="width:18px;height:18px;background:#38bdf8;border-radius:50%;border:3px solid white;box-shadow:0 0 12px #38bdf8;position:relative;z-index:2;"></div>
        <div class="pulse-ring" style="position:absolute;top:-6px;left:-6px;width:30px;height:30px;background:rgba(56,189,248,0.3);"></div>
      </div>\`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      className: ''
    });
    L.marker([lat, lng], { icon }).addTo(map).bindPopup('📍 موقعیت فعلی شما').openPopup();
    showToast('موقعیت شما یافت شد');
  }, () => showToast('دسترسی به موقعیت رد شد'));
}

// ============================
//  CLEAR
// ============================
function clearAll() {
  markers.forEach(m => map.removeLayer(m.marker));
  markers = [];
  circles.forEach(c => map.removeLayer(c));
  circles = [];
  if (rulerLine) map.removeLayer(rulerLine);
  rulerLine = null;
  rulerPoints = [];
  if (routingLayer) map.removeLayer(routingLayer);
  routingLayer = null;
  document.getElementById('markers-list').innerHTML = '';
  document.getElementById('markers-section').style.display = 'none';
  updateStats();
  showToast('نقشه پاک شد');
}

// ============================
//  STATS UPDATE
// ============================
function updateStats() {
  document.getElementById('stat-markers').textContent = markers.length;
  document.getElementById('markers-count').textContent = markers.length;
}

map.on('zoomend', () => {
  const z = map.getZoom();
  document.getElementById('stat-zoom').textContent = z;
  document.getElementById('zoom-level').textContent = z;
});

map.on('mousemove', (e) => {
  const { lat, lng } = e.latlng;
  document.getElementById('coord-text').textContent = \`\${lat.toFixed(5)}° N  |  \${lng.toFixed(5)}° E\`;
  document.getElementById('stat-lat').textContent = lat.toFixed(3);
  document.getElementById('stat-lng').textContent = lng.toFixed(3);
});

// ============================
//  SEARCH
// ============================
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
let searchTimeout;

searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  const q = searchInput.value.trim();
  if (q.length < 3) { searchResults.style.display = 'none'; return; }
  searchTimeout = setTimeout(() => fetchSearch(q), 400);
});

searchInput.addEventListener('focus', () => {
  if (searchResults.children.length > 0) searchResults.style.display = 'block';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('#search-bar')) searchResults.style.display = 'none';
});

async function fetchSearch(q) {
  try {
    const res = await fetch(\`https://nominatim.openstreetmap.org/search?format=json&q=\${encodeURIComponent(q)}&limit=5&accept-language=fa\`);
    const data = await res.json();
    searchResults.innerHTML = '';
    if (!data.length) {
      searchResults.innerHTML = '<div class="search-result-item">نتیجه‌ای یافت نشد</div>';
      searchResults.style.display = 'block';
      return;
    }
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'search-result-item';
      div.innerHTML = \`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>\${item.display_name}\`;
      div.onclick = () => {
        const lat = parseFloat(item.lat), lng = parseFloat(item.lon);
        map.flyTo([lat, lng], 13, { duration: 1.2 });
        searchInput.value = item.display_name.split(',')[0];
        searchResults.style.display = 'none';
        showToast('رفتن به: ' + item.display_name.split(',')[0]);
      };
      searchResults.appendChild(div);
    });
    searchResults.style.display = 'block';
  } catch (e) {
    console.error(e);
  }
}

// ============================
//  UTILS
// ============================
function resetView() {
  map.flyTo([35.6892, 51.3890], 10, { duration: 1.5 });
  showToast('بازگشت به تهران');
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function exportMap() {
  const c = map.getCenter();
  const z = map.getZoom();
  const url = \`https://www.openstreetmap.org/#map=\${z}/\${c.lat.toFixed(4)}/\${c.lng.toFixed(4)}\`;
  window.open(url, '_blank');
  showToast('نقشه در OpenStreetMap باز شد');
}

function shareLocation() {
  const c = map.getCenter();
  const url = \`https://maps.google.com/?q=\${c.lat.toFixed(5)},\${c.lng.toFixed(5)}\`;
  navigator.clipboard?.writeText(url).then(() => showToast('لینک موقعیت کپی شد 📋'));
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// Init stats
updateStats();
document.getElementById('stat-zoom').textContent = map.getZoom();
document.getElementById('zoom-level').textContent = map.getZoom();
<\/script>


`,className:"w-html-embed"})}),T=o=>{const{origin:t,pathname:i,search:r}=new URL(o);return`${t}${i}${r}`},L=s.memo(({pageKey:o,system:t})=>e.jsx(w,{system:t},o),(o,t)=>o.pageKey===t.pageKey),z=({data:o})=>{const{system:t,resources:i,url:r,pageMeta:l}=o,c=T(r),p=s.useMemo(()=>({imageLoader:n,assetBaseUrl:a,resources:i,breakpoints:b,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(u.Provider,{value:r,children:e.jsx(L,{pageKey:c,system:t})}),e.jsx(g,{url:r,pageMeta:l,siteName:d,imageLoader:n,assetBaseUrl:a}),e.jsx(h,{children:l.title})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),E=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${a}${y}`})}),f.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-31/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-31/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{A as configValuesSerialized};
