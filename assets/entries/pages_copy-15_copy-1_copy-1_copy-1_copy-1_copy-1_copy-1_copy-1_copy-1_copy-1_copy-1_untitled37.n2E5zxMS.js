import{j as e,r as l,a as n,i as s,R as u,b as m,P as b,c as g,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],L=a=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk",children:e.jsx(v,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Jahesh Map</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"><\/script>
<style>
  :root {
    --bg: #0d0a1a;
    --panel: #1a1530;
    --panel2: #221d3a;
    --accent: #a78bfa;
    --accent2: #7c3aed;
    --accent-glow: rgba(167,139,250,0.3);
    --border: #2e2851;
    --text: #e2d9f3;
    --text-muted: #8b7cb8;
    --radius: 12px;
    --sidebar-w: 300px;
    --header-h: 60px;
    --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background: var(--bg);
    color: var(--text);
    height: 100dvh;
    overflow: hidden;
  }

  /* ─── APP LAYOUT ─── */
  #app {
    display: flex;
    flex-direction: column;
    height: 100dvh;
  }

  /* ─── HEADER ─── */
  header {
    height: var(--header-h);
    background: var(--panel);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 14px;
    z-index: 1000;
    overflow: visible;
    flex-shrink: 0;
  }

  #menu-btn {
    background: var(--panel2);
    border: 1px solid var(--border);
    color: var(--text);
    width: 38px; height: 38px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background var(--transition);
  }
  #menu-btn:hover { background: var(--accent2); }

  #logo {
    font-size: 18px;
    font-weight: 700;
    color: var(--accent);
    white-space: nowrap;
    flex-shrink: 0;
  }

  #search-bar {
    position: relative;
    flex: 1;
    max-width: 480px;
    z-index: 1001;
  }

  #search-input {
    width: 100%;
    background: var(--panel2);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 9px 14px 9px 36px;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: border-color var(--transition);
  }
  #search-input:focus { border-color: var(--accent); }
  #search-input::placeholder { color: var(--text-muted); }

  .search-icon {
    position: absolute;
    left: 10px; top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    font-size: 14px;
    pointer-events: none;
  }

  #search-results {
    position: absolute;
    top: calc(100% + 6px);
    left: 0; right: 0;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow-y: auto;
    max-height: 260px;
    display: none;
    z-index: 9999;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
  }

  .search-item {
    padding: 10px 14px;
    cursor: pointer;
    font-size: 13px;
    border-bottom: 1px solid var(--border);
    transition: background 0.15s;
  }
  .search-item:last-child { border-bottom: none; }
  .search-item:hover { background: var(--panel2); }
  .search-item .place-name { font-weight: 600; color: var(--text); }
  .search-item .place-addr { color: var(--text-muted); font-size: 11px; margin-top: 2px; }

  /* ─── MAIN AREA ─── */
  #main {
    display: flex;
    flex: 1;
    overflow: hidden;
    position: relative;
  }

  /* ─── SIDEBAR ─── */
  #sidebar {
    width: var(--sidebar-w);
    background: var(--panel);
    border-left: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-shrink: 0;
    transition: width var(--transition), transform var(--transition);
    z-index: 100;
  }

  #sidebar.collapsed {
    width: 0;
    border-left: none;
  }

  .sidebar-inner {
    width: var(--sidebar-w);
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 14px;
    gap: 12px;
  }

  /* ─── PANEL SECTIONS ─── */
  .panel-section {
    background: var(--panel2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .panel-header {
    padding: 10px 14px;
    font-size: 12px;
    font-weight: 700;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
  }

  .panel-body {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  /* ─── TOOL BUTTONS ─── */
  .tool-btn {
    background: var(--panel);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 9px 12px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.15s;
    text-align: right;
  }
  .tool-btn:hover { background: var(--accent2); border-color: var(--accent); }
  .tool-btn.active { background: var(--accent2); border-color: var(--accent); color: #fff; }
  .tool-btn .icon { font-size: 16px; flex-shrink: 0; }

  /* ─── LAYER TOGGLES ─── */
  .layer-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s;
  }
  .layer-item:hover { background: var(--panel); }
  .layer-label { font-size: 13px; display: flex; align-items: center; gap: 8px; }

  .toggle {
    width: 36px; height: 20px;
    background: var(--border);
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .toggle::after {
    content: '';
    position: absolute;
    width: 14px; height: 14px;
    background: #fff;
    border-radius: 50%;
    top: 3px; left: 3px;
    transition: transform 0.2s;
  }
  .toggle.on { background: var(--accent2); }
  .toggle.on::after { transform: translateX(16px); }

  /* ─── MAP ─── */
  #map {
    flex: 1;
    position: relative;
    z-index: 1;
  }

  .leaflet-container { background: #0d0a1a; }

  /* ─── MAP CONTROLS ─── */
  #map-controls {
    position: absolute;
    bottom: 20px;
    right: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 500;
  }

  .map-btn {
    width: 40px; height: 40px;
    background: var(--panel);
    border: 1px solid var(--border);
    color: var(--text);
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.15s;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  }
  .map-btn:hover { background: var(--accent2); border-color: var(--accent); }

  /* ─── INFO BAR ─── */
  #info-bar {
    position: absolute;
    bottom: 20px;
    left: 16px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 11px;
    color: var(--text-muted);
    z-index: 500;
    pointer-events: none;
  }

  /* ─── STATUS ─── */
  #status-toast {
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%) translateY(-80px);
    background: var(--panel2);
    border: 1px solid var(--accent);
    color: var(--accent);
    padding: 8px 18px;
    border-radius: 20px;
    font-size: 13px;
    z-index: 2000;
    transition: transform 0.3s;
    white-space: nowrap;
  }
  #status-toast.show { transform: translateX(-50%) translateY(0); }

  /* ─── OVERLAY ─── */
  #sidebar-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 200;
  }

  /* ─── MOBILE ─── */
  @media (max-width: 768px) {
    #sidebar {
      position: fixed;
      bottom: 0;
      left: 0; right: 0;
      width: 100% !important;
      height: 75dvh;
      border-left: none;
      border-top: 1px solid var(--border);
      border-radius: 16px 16px 0 0;
      transform: translateY(100%);
      transition: transform var(--transition);
      z-index: 300;
    }

    #sidebar.open {
      transform: translateY(0);
    }

    #sidebar.collapsed {
      transform: translateY(100%);
      width: 100% !important;
    }

    .sidebar-inner {
      width: 100%;
      padding-top: 6px;
    }

    #sidebar-overlay.show { display: block; }

    #map-controls { bottom: 16px; right: 12px; }

    .map-btn { width: 36px; height: 36px; font-size: 16px; }

    #info-bar { display: none; }

    #logo { font-size: 15px; }
    #search-bar { max-width: unset; }
  }

  /* ─── DRAG HANDLE ─── */
  #drag-handle {
    width: 40px; height: 4px;
    background: var(--border);
    border-radius: 2px;
    margin: 8px auto 4px;
    cursor: grab;
    display: none;
  }

  @media (max-width: 768px) {
    #drag-handle { display: block; }
  }

  /* ─── COORDINATE DISPLAY ─── */
  #coords {
    font-family: monospace;
    font-size: 11px;
  }

  /* ─── MEASURE RESULT ─── */
  #measure-result {
    position: absolute;
    top: 16px;
    right: 16px;
    background: var(--panel2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px 14px;
    font-size: 13px;
    z-index: 500;
    display: none;
  }

  /* Scrollbar */
  .sidebar-inner::-webkit-scrollbar { width: 4px; }
  .sidebar-inner::-webkit-scrollbar-track { background: transparent; }
  .sidebar-inner::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
</style>



<div id="app">
  <!-- HEADER -->
  <header>
    <button id="menu-btn" title="منو">☰</button>
    <div id="logo">🗺 Jahesh Map</div>
    <div id="search-bar">
      <span class="search-icon">🔍</span>
      <input type="text" id="search-input" placeholder="جستجوی مکان..." autocomplete="off">
      <div id="search-results"></div>
    </div>
  </header>

  <!-- MAIN -->
  <div id="main">
    <!-- SIDEBAR -->
    <div id="sidebar">
      <div id="drag-handle"></div>
      <div class="sidebar-inner">

        <!-- LAYERS -->
        <div class="panel-section">
          <div class="panel-header" onclick="toggleSection(this)">
            <span>🗂 لایه‌های نقشه</span><span>▾</span>
          </div>
          <div class="panel-body" id="layers-body">
            <div class="layer-item" onclick="switchLayer('osm')">
              <span class="layer-label">🗺 نقشه استاندارد</span>
              <div class="toggle on" id="toggle-osm"></div>
            </div>
            <div class="layer-item" onclick="switchLayer('satellite')">
              <span class="layer-label">🛰 ماهواره‌ای</span>
              <div class="toggle" id="toggle-satellite"></div>
            </div>
            <div class="layer-item" onclick="switchLayer('dark')">
              <span class="layer-label">🌑 تاریک</span>
              <div class="toggle" id="toggle-dark"></div>
            </div>
            <div class="layer-item" onclick="switchLayer('topo')">
              <span class="layer-label">🏔 توپوگرافی</span>
              <div class="toggle" id="toggle-topo"></div>
            </div>
          </div>
        </div>

        <!-- TOOLS -->
        <div class="panel-section">
          <div class="panel-header" onclick="toggleSection(this)">
            <span>🛠 ابزارها</span><span>▾</span>
          </div>
          <div class="panel-body">
            <button class="tool-btn" onclick="addPin()"><span class="icon">📍</span> افزودن پین</button>
            <button class="tool-btn" onclick="toggleMeasure()" id="measure-btn"><span class="icon">📏</span> اندازه‌گیری فاصله</button>
            <button class="tool-btn" onclick="toggleCircle()" id="circle-btn"><span class="icon">⭕</span> رسم دایره</button>
            <button class="tool-btn" onclick="clearAll()"><span class="icon">🗑</span> پاک کردن همه</button>
          </div>
        </div>

        <!-- ROUTE -->
        <div class="panel-section">
          <div class="panel-header" onclick="toggleSection(this)">
            <span>🧭 مسیریابی</span><span>▾</span>
          </div>
          <div class="panel-body">
            <button class="tool-btn" onclick="toggleRouting()" id="route-btn"><span class="icon">🗺</span> انتخاب نقاط مسیر</button>
            <button class="tool-btn" onclick="clearRoute()"><span class="icon">✖</span> پاک کردن مسیر</button>
            <div id="route-info" style="font-size:12px;color:var(--text-muted);padding:4px 8px;"></div>
          </div>
        </div>

        <!-- GPS -->
        <div class="panel-section">
          <div class="panel-header" onclick="toggleSection(this)">
            <span>📡 موقعیت من</span><span>▾</span>
          </div>
          <div class="panel-body">
            <button class="tool-btn" onclick="getMyLocation()"><span class="icon">🎯</span> نمایش موقعیتم</button>
            <div id="gps-info" style="font-size:12px;color:var(--text-muted);padding:4px 8px;"></div>
          </div>
        </div>

      </div>
    </div>

    <!-- MAP -->
    <div id="map">
      <div id="map-controls">
        <button class="map-btn" onclick="map.zoomIn()" title="بزرگ‌نمایی">+</button>
        <button class="map-btn" onclick="map.zoomOut()" title="کوچک‌نمایی">−</button>
        <button class="map-btn" onclick="getMyLocation()" title="موقعیت من">🎯</button>
      </div>
      <div id="info-bar"><span id="coords">lat: — , lng: —</span></div>
      <div id="measure-result"></div>
    </div>

    <div id="sidebar-overlay" onclick="closeSidebar()"></div>
  </div>
</div>

<div id="status-toast"></div>

<script>
// ─── MAP INIT ───
const map = L.map('map', { zoomControl: false, attributionControl: false }).setView([35.6892, 51.3890], 12);

const layers = {
  osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }),
  satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 }),
  dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }),
  topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17 })
};

let currentLayer = 'osm';
layers.osm.addTo(map);

function switchLayer(name) {
  if (currentLayer === name) return;
  map.removeLayer(layers[currentLayer]);
  layers[name].addTo(map);
  document.getElementById('toggle-' + currentLayer).classList.remove('on');
  document.getElementById('toggle-' + name).classList.add('on');
  currentLayer = name;
}

// ─── COORDS ───
map.on('mousemove', e => {
  document.getElementById('coords').textContent =
    \`lat: \${e.latlng.lat.toFixed(5)}, lng: \${e.latlng.lng.toFixed(5)}\`;
});

// ─── TOAST ───
function toast(msg, dur = 2500) {
  const t = document.getElementById('status-toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

// ─── SIDEBAR ───
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const isMobile = () => window.innerWidth <= 768;
let sidebarOpen = true;

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  if (isMobile()) {
    sidebar.classList.toggle('open', sidebarOpen);
    overlay.classList.toggle('show', sidebarOpen);
    sidebar.classList.remove('collapsed');
  } else {
    sidebar.classList.toggle('collapsed', !sidebarOpen);
  }
  setTimeout(() => map.invalidateSize(), 350);
}

function closeSidebar() {
  sidebarOpen = false;
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  sidebar.classList.add('collapsed');
  setTimeout(() => map.invalidateSize(), 350);
}

document.getElementById('menu-btn').addEventListener('click', toggleSidebar);

window.addEventListener('resize', () => {
  if (!isMobile()) {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    if (sidebarOpen) sidebar.classList.remove('collapsed');
    sidebar.style.transform = '';
  }
});

// On mobile, sidebar starts closed
if (isMobile()) {
  sidebarOpen = false;
  sidebar.classList.remove('open');
}

// ─── DRAG HANDLE (mobile bottom sheet) ───
let dragStart = null, dragStartScrollTop = 0;
const handle = document.getElementById('drag-handle');

handle.addEventListener('touchstart', e => {
  dragStart = e.touches[0].clientY;
}, { passive: true });

handle.addEventListener('touchend', e => {
  if (dragStart !== null) {
    const diff = e.changedTouches[0].clientY - dragStart;
    if (diff > 60) closeSidebar();
    dragStart = null;
  }
});

// ─── TOGGLE SECTION ───
function toggleSection(header) {
  const body = header.nextElementSibling;
  const arrow = header.querySelector('span:last-child');
  const isHidden = body.style.display === 'none';
  body.style.display = isHidden ? '' : 'none';
  arrow.textContent = isHidden ? '▾' : '▸';
}

// ─── PINS ───
const pins = [];
const pinIcon = L.divIcon({
  html: '<div style="font-size:24px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.8))">📍</div>',
  className: '', iconAnchor: [12, 24]
});

function addPin() {
  toast('روی نقشه کلیک کنید تا پین بگذارید');
  map.once('click', e => {
    const m = L.marker(e.latlng, { icon: pinIcon }).addTo(map)
      .bindPopup(\`<b>پین</b><br>lat: \${e.latlng.lat.toFixed(4)}<br>lng: \${e.latlng.lng.toFixed(4)}\`).openPopup();
    pins.push(m);
    toast('پین افزوده شد ✔');
  });
}

// ─── MEASURE ───
let measuring = false;
let measurePoints = [], measureLines = [], measureMarkers = [];

function toggleMeasure() {
  measuring = !measuring;
  const btn = document.getElementById('measure-btn');
  btn.classList.toggle('active', measuring);
  if (measuring) {
    toast('کلیک کنید برای افزودن نقطه — دوبار کلیک برای پایان');
    map.on('click', onMeasureClick);
    map.on('dblclick', finishMeasure);
    map.doubleClickZoom.disable();
  } else {
    map.off('click', onMeasureClick);
    map.off('dblclick', finishMeasure);
    map.doubleClickZoom.enable();
    measurePoints = [];
  }
}

function onMeasureClick(e) {
  measurePoints.push(e.latlng);
  const m = L.circleMarker(e.latlng, { radius: 5, color: '#a78bfa', fillColor: '#a78bfa', fillOpacity: 1 }).addTo(map);
  measureMarkers.push(m);
  if (measurePoints.length > 1) {
    const line = L.polyline(measurePoints, { color: '#a78bfa', weight: 2, dashArray: '5,5' }).addTo(map);
    measureLines.push(line);
    let total = 0;
    for (let i = 1; i < measurePoints.length; i++) total += measurePoints[i-1].distanceTo(measurePoints[i]);
    const res = document.getElementById('measure-result');
    res.style.display = 'block';
    res.textContent = \`فاصله: \${total > 1000 ? (total/1000).toFixed(2)+' km' : Math.round(total)+' m'}\`;
  }
}

function finishMeasure() {
  measuring = false;
  document.getElementById('measure-btn').classList.remove('active');
  map.off('click', onMeasureClick);
  map.off('dblclick', finishMeasure);
  map.doubleClickZoom.enable();
  measurePoints = [];
  toast('اندازه‌گیری تمام شد ✔');
}

// ─── CIRCLE ───
let circleMode = false;
let drawnCircles = [];

function toggleCircle() {
  circleMode = !circleMode;
  const btn = document.getElementById('circle-btn');
  btn.classList.toggle('active', circleMode);
  if (circleMode) {
    toast('روی نقشه کلیک کنید — سپس کشیدن برای شعاع');
    map.on('click', onCircleClick);
  } else {
    map.off('click', onCircleClick);
  }
}

function onCircleClick(e) {
  const r = prompt('شعاع دایره (متر):', '500');
  if (!r) return;
  const c = L.circle(e.latlng, { radius: +r, color: '#a78bfa', fillColor: '#7c3aed', fillOpacity: 0.2 }).addTo(map);
  drawnCircles.push(c);
  circleMode = false;
  document.getElementById('circle-btn').classList.remove('active');
  map.off('click', onCircleClick);
  toast(\`دایره با شعاع \${r}m رسم شد ✔\`);
}

// ─── ROUTING ───
let routing = false;
let routePoints = [], routeMarkers = [], routeLine = null;

function toggleRouting() {
  routing = !routing;
  const btn = document.getElementById('route-btn');
  btn.classList.toggle('active', routing);
  if (routing) {
    toast('مبدا را کلیک کنید سپس مقصد را');
    map.on('click', onRouteClick);
  } else {
    map.off('click', onRouteClick);
  }
}

function onRouteClick(e) {
  routePoints.push(e.latlng);
  const label = routePoints.length === 1 ? '🟢' : '🔴';
  const m = L.marker(e.latlng, {
    icon: L.divIcon({ html: \`<div style="font-size:20px">\${label}</div>\`, className: '', iconAnchor: [10, 10] })
  }).addTo(map);
  routeMarkers.push(m);

  if (routePoints.length === 2) {
    if (routeLine) map.removeLayer(routeLine);
    routeLine = L.polyline(routePoints, { color: '#a78bfa', weight: 3 }).addTo(map);
    const dist = routePoints[0].distanceTo(routePoints[1]);
    document.getElementById('route-info').textContent =
      \`فاصله: \${dist > 1000 ? (dist/1000).toFixed(2)+' km' : Math.round(dist)+' m'}\`;
    routing = false;
    document.getElementById('route-btn').classList.remove('active');
    map.off('click', onRouteClick);
    toast('مسیر رسم شد ✔');
  }
}

function clearRoute() {
  routeMarkers.forEach(m => map.removeLayer(m));
  if (routeLine) map.removeLayer(routeLine);
  routeMarkers = []; routePoints = []; routeLine = null;
  document.getElementById('route-info').textContent = '';
  toast('مسیر پاک شد');
}

// ─── CLEAR ALL ───
function clearAll() {
  pins.forEach(m => map.removeLayer(m)); pins.length = 0;
  measureMarkers.forEach(m => map.removeLayer(m)); measureMarkers.length = 0;
  measureLines.forEach(l => map.removeLayer(l)); measureLines.length = 0;
  drawnCircles.forEach(c => map.removeLayer(c)); drawnCircles.length = 0;
  document.getElementById('measure-result').style.display = 'none';
  clearRoute();
  toast('همه پاک شد 🗑');
}

// ─── GPS ───
let gpsMarker = null;
function getMyLocation() {
  toast('در حال یافتن موقعیت...');
  navigator.geolocation.getCurrentPosition(pos => {
    const ll = [pos.coords.latitude, pos.coords.longitude];
    if (gpsMarker) map.removeLayer(gpsMarker);
    gpsMarker = L.circleMarker(ll, {
      radius: 10, color: '#a78bfa', fillColor: '#a78bfa', fillOpacity: 0.8, weight: 3
    }).addTo(map).bindPopup('📡 موقعیت شما').openPopup();
    map.flyTo(ll, 15, { duration: 1.2 });
    document.getElementById('gps-info').textContent =
      \`lat: \${ll[0].toFixed(5)}\\nlng: \${ll[1].toFixed(5)}\`;
    toast('موقعیت یافت شد ✔');
  }, () => toast('دسترسی به موقعیت رد شد ✖'));
}

// ─── SEARCH ───
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
let searchTimer;

searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  const q = searchInput.value.trim();
  if (!q) { searchResults.style.display = 'none'; return; }
  searchTimer = setTimeout(() => searchPlaces(q), 400);
});

searchInput.addEventListener('focus', () => {
  if (searchInput.value.trim()) searchResults.style.display = 'block';
});

document.addEventListener('click', e => {
  if (!document.getElementById('search-bar').contains(e.target))
    searchResults.style.display = 'none';
});

async function searchPlaces(q) {
  try {
    const res = await fetch(\`https://nominatim.openstreetmap.org/search?format=json&q=\${encodeURIComponent(q)}&limit=6&accept-language=fa\`);
    const data = await res.json();
    searchResults.innerHTML = '';
    if (!data.length) {
      searchResults.innerHTML = '<div class="search-item"><span class="place-name">نتیجه‌ای یافت نشد</span></div>';
    } else {
      data.forEach(p => {
        const div = document.createElement('div');
        div.className = 'search-item';
        div.innerHTML = \`<div class="place-name">\${p.display_name.split(',')[0]}</div>
                         <div class="place-addr">\${p.display_name}</div>\`;
        div.onclick = () => {
          map.flyTo([p.lat, p.lon], 14, { duration: 1.2 });
          searchResults.style.display = 'none';
          searchInput.value = p.display_name.split(',')[0];
          L.marker([p.lat, p.lon], { icon: pinIcon }).addTo(map)
            .bindPopup(\`<b>\${p.display_name.split(',')[0]}</b>\`).openPopup();
        };
        searchResults.appendChild(div);
      });
    }
    searchResults.style.display = 'block';
  } catch { toast('خطا در جستجو ✖'); }
}
<\/script>


`,className:"w-html-embed"})})}),w=a=>{const{origin:t,pathname:r,search:o}=new URL(a);return`${t}${r}${o}`},E=l.memo(({pageKey:a,system:t})=>e.jsx(L,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:r,url:o,pageMeta:i}=a,c=w(o),p=l.useMemo(()=>({imageLoader:s,assetBaseUrl:n,resources:r,breakpoints:f,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:o,children:e.jsx(E,{pageKey:c,system:t})}),e.jsx(b,{url:o,pageMeta:i,siteName:d,imageLoader:s,assetBaseUrl:n}),e.jsx(g,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),P=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${n}${x}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{R as configValuesSerialized};
