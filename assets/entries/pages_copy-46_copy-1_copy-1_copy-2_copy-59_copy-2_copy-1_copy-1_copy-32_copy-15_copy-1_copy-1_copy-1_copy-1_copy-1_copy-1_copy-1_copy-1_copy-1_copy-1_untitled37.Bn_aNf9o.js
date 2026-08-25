import{j as e,r as d,a as o,i as n,R as v,b as u,P as b,c as g,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>طرح‌های امنیتی</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --bg: #0a0e1a;
    --card: #111827;
    --border: #1e2d45;
    --cyan: #00d4ff;
    --green: #00ff88;
    --red: #ff3b5c;
    --yellow: #ffc107;
    --purple: #8b5cf6;
    --text: #e2e8f0;
    --muted: #64748b;
  }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Segoe UI', Tahoma, sans-serif;
    min-height: 100vh;
    padding: 16px;
  }
  h1 {
    text-align: center;
    color: var(--cyan);
    font-size: clamp(1rem, 3vw, 1.5rem);
    margin-bottom: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .subtitle {
    text-align: center;
    color: var(--muted);
    font-size: 0.8rem;
    margin-bottom: 20px;
  }

  /* TABS */
  .tabs {
    display: flex;
    gap: 6px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .tab {
    padding: 6px 14px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.75rem;
    transition: all 0.3s;
  }
  .tab.active, .tab:hover {
    border-color: var(--cyan);
    color: var(--cyan);
    background: rgba(0,212,255,0.08);
  }

  .panel { display: none; }
  .panel.active { display: block; }

  /* ─── PANEL 1: Dashboard ─── */
  .grid2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    margin-bottom: 16px;
  }
  .stat-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .stat-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
  }
  .stat-card.c { --c: var(--cyan); }
  .stat-card.g { --c: var(--green); }
  .stat-card.r { --c: var(--red); }
  .stat-card.y { --c: var(--yellow); }
  .stat-card.p { --c: var(--purple); }
  .stat-card::before { background: var(--c); }
  .stat-icon { font-size: 1.8rem; margin-bottom: 6px; }
  .stat-num {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--c);
  }
  .stat-label { font-size: 0.7rem; color: var(--muted); margin-top: 3px; }

  .threat-bar { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 16px; }
  .threat-title { font-size: 0.8rem; color: var(--muted); margin-bottom: 10px; display: flex; justify-content: space-between; }
  .bar-row { margin-bottom: 10px; }
  .bar-label { font-size: 0.75rem; display: flex; justify-content: space-between; margin-bottom: 4px; }
  .bar-track { background: #1e2d45; border-radius: 4px; height: 8px; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 4px; transition: width 1s ease; }

  .alerts-box { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 16px; }
  .alert-item {
    display: flex; align-items: center; gap: 10px;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 6px;
    font-size: 0.75rem;
    animation: fadeIn 0.5s ease;
  }
  .alert-item.high { background: rgba(255,59,92,0.1); border-left: 3px solid var(--red); }
  .alert-item.med { background: rgba(255,193,7,0.1); border-left: 3px solid var(--yellow); }
  .alert-item.low { background: rgba(0,255,136,0.1); border-left: 3px solid var(--green); }
  .alert-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .high .alert-dot { background: var(--red); }
  .med .alert-dot { background: var(--yellow); }
  .low .alert-dot { background: var(--green); }
  .alert-text { flex: 1; }
  .alert-time { color: var(--muted); font-size: 0.65rem; }

  /* ─── PANEL 2: Password Checker ─── */
  .pass-box {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    max-width: 480px;
    margin: 0 auto;
  }
  .pass-title { font-size: 1rem; margin-bottom: 6px; color: var(--cyan); }
  .pass-desc { font-size: 0.75rem; color: var(--muted); margin-bottom: 20px; }
  .input-wrap {
    position: relative;
    margin-bottom: 16px;
  }
  .pass-input {
    width: 100%;
    background: #0a0e1a;
    border: 1px solid var(--border);
    color: var(--text);
    padding: 12px 44px 12px 14px;
    border-radius: 10px;
    font-size: 0.85rem;
    outline: none;
    transition: border 0.3s;
    font-family: monospace;
    letter-spacing: 2px;
  }
  .pass-input:focus { border-color: var(--cyan); }
  .eye-btn {
    position: absolute;
    left: 12px; top: 50%;
    transform: translateY(-50%);
    background: none; border: none;
    cursor: pointer; font-size: 1rem;
  }
  .strength-track { background: #1e2d45; border-radius: 4px; height: 6px; margin-bottom: 8px; overflow: hidden; }
  .strength-fill { height: 100%; border-radius: 4px; transition: all 0.4s; }
  .strength-label { font-size: 0.75rem; text-align: center; margin-bottom: 16px; font-weight: 600; }
  .criteria { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .crit {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.7rem;
    padding: 6px 10px;
    border-radius: 8px;
    background: #0a0e1a;
    border: 1px solid var(--border);
    transition: all 0.3s;
  }
  .crit.ok { border-color: var(--green); color: var(--green); background: rgba(0,255,136,0.05); }
  .crit-icon { font-size: 0.8rem; }
  .gen-btn {
    width: 100%; padding: 10px; margin-top: 16px;
    background: linear-gradient(135deg, var(--cyan), var(--purple));
    border: none; border-radius: 10px;
    color: #fff; font-size: 0.85rem;
    cursor: pointer; font-weight: 600;
    transition: opacity 0.3s;
  }
  .gen-btn:hover { opacity: 0.85; }

  /* ─── PANEL 3: Network Scanner ─── */
  .scan-box {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 20px;
  }
  .scan-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .scan-btn {
    padding: 7px 18px;
    background: transparent;
    border: 1px solid var(--cyan);
    color: var(--cyan);
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.75rem;
    transition: all 0.3s;
  }
  .scan-btn:hover { background: rgba(0,212,255,0.1); }
  .scan-btn.scanning { border-color: var(--yellow); color: var(--yellow); animation: pulse 1s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
  .radar-wrap { display: flex; justify-content: center; margin-bottom: 16px; }
  .radar {
    width: 150px; height: 150px;
    border-radius: 50%;
    border: 1px solid rgba(0,212,255,0.3);
    position: relative;
    display: flex; align-items: center; justify-content: center;
  }
  .radar::before, .radar::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(0,212,255,0.2);
  }
  .radar::before { width: 100px; height: 100px; }
  .radar::after { width: 50px; height: 50px; }
  .radar-line {
    position: absolute;
    width: 50%;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--cyan));
    left: 50%; top: 50%;
    transform-origin: left center;
    animation: spin 3s linear infinite;
  }
  @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  .radar-center { width: 8px; height: 8px; background: var(--cyan); border-radius: 50%; z-index:1; }
  .radar-dot {
    position: absolute;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 6px var(--green);
  }
  .device-list { display: grid; gap: 8px; }
  .device-item {
    display: flex; align-items: center; gap: 10px;
    background: #0a0e1a;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 0.75rem;
    transition: border 0.3s;
  }
  .device-item:hover { border-color: var(--cyan); }
  .device-icon { font-size: 1.2rem; }
  .device-info { flex: 1; }
  .device-name { font-weight: 600; }
  .device-ip { color: var(--muted); font-size: 0.65rem; margin-top: 2px; font-family: monospace; }
  .device-status {
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 0.65rem;
    font-weight: 600;
  }
  .device-status.safe { background: rgba(0,255,136,0.1); color: var(--green); border: 1px solid var(--green); }
  .device-status.warn { background: rgba(255,193,7,0.1); color: var(--yellow); border: 1px solid var(--yellow); }
  .device-status.risk { background: rgba(255,59,92,0.1); color: var(--red); border: 1px solid var(--red); }

  /* ─── PANEL 4: Firewall Rules ─── */
  .fw-box { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 20px; }
  .fw-controls { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
  .fw-input {
    flex: 1; min-width: 100px;
    background: #0a0e1a;
    border: 1px solid var(--border);
    color: var(--text);
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.75rem;
    outline: none;
  }
  .fw-input:focus { border-color: var(--purple); }
  .fw-select {
    background: #0a0e1a;
    border: 1px solid var(--border);
    color: var(--text);
    padding: 8px 10px;
    border-radius: 8px;
    font-size: 0.75rem;
    outline: none;
  }
  .add-rule-btn {
    padding: 8px 14px;
    background: var(--purple);
    border: none; border-radius: 8px;
    color: #fff; font-size: 0.75rem;
    cursor: pointer; white-space: nowrap;
  }
  .rules-table { width: 100%; border-collapse: collapse; font-size: 0.72rem; }
  .rules-table th { color: var(--muted); padding: 6px 8px; border-bottom: 1px solid var(--border); text-align: right; }
  .rules-table td { padding: 8px; border-bottom: 1px solid rgba(30,45,69,0.5); }
  .rule-toggle {
    display: inline-block;
    width: 30px; height: 16px;
    background: var(--green);
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    transition: background 0.3s;
  }
  .rule-toggle::after {
    content: '';
    position: absolute;
    width: 12px; height: 12px;
    background: white;
    border-radius: 50%;
    right: 2px; top: 2px;
    transition: right 0.3s;
  }
  .rule-toggle.off { background: var(--muted); }
  .rule-toggle.off::after { right: 16px; }
  .del-btn {
    background: none; border: none;
    color: var(--red); cursor: pointer;
    font-size: 0.85rem;
  }
  .badge {
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 0.65rem;
    font-weight: 600;
  }
  .badge.allow { background: rgba(0,255,136,0.15); color: var(--green); }
  .badge.deny { background: rgba(255,59,92,0.15); color: var(--red); }

  /* ─── PANEL 5: Encryption ─── */
  .enc-box { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 20px; max-width: 480px; margin: 0 auto; }
  .enc-title { color: var(--green); margin-bottom: 14px; font-size: 0.95rem; }
  .enc-input {
    width: 100%;
    background: #0a0e1a;
    border: 1px solid var(--border);
    color: var(--text);
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 0.8rem;
    font-family: monospace;
    outline: none;
    resize: vertical;
    min-height: 70px;
  }
  .enc-input:focus { border-color: var(--green); }
  .enc-btns { display: flex; gap: 8px; margin: 10px 0; }
  .enc-btn {
    flex: 1; padding: 9px;
    border: 1px solid;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.78rem;
    font-weight: 600;
    transition: all 0.3s;
  }
  .enc-btn.encode { border-color: var(--green); color: var(--green); background: rgba(0,255,136,0.05); }
  .enc-btn.decode { border-color: var(--cyan); color: var(--cyan); background: rgba(0,212,255,0.05); }
  .enc-btn:hover { opacity: 0.8; }
  .enc-output {
    background: #0a0e1a;
    border: 1px solid var(--green);
    border-radius: 8px;
    padding: 10px;
    font-family: monospace;
    font-size: 0.72rem;
    word-break: break-all;
    color: var(--green);
    min-height: 60px;
    white-space: pre-wrap;
  }
  .hash-section { margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border); }
  .hash-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; font-size: 0.7rem; border-bottom: 1px solid rgba(30,45,69,0.5); }
  .hash-type { color: var(--muted); }
  .hash-val { font-family: monospace; color: var(--yellow); font-size: 0.65rem; word-break: break-all; max-width: 70%; text-align: left; }

  @keyframes fadeIn { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:translateY(0)} }
</style>



<h1>🛡️ Security UI Designs</h1>
<p class="subtitle">پنج طرح رابط کاربری در حوزه امنیت سایبری</p>

<div class="tabs">
  <button class="tab active" onclick="show(0)">📊 داشبورد</button>
  <button class="tab" onclick="show(1)">🔑 رمز عبور</button>
  <button class="tab" onclick="show(2)">📡 اسکنر شبکه</button>
  <button class="tab" onclick="show(3)">🔥 فایروال</button>
  <button class="tab" onclick="show(4)">🔐 رمزنگاری</button>
</div>

<!-- ══════════ PANEL 1: DASHBOARD ══════════ -->
<div class="panel active" id="p0">
  <div class="grid2">
    <div class="stat-card c"><div class="stat-icon">🛡️</div><div class="stat-num" id="s1">98</div><div class="stat-label">امتیاز امنیتی</div></div>
    <div class="stat-card r"><div class="stat-icon">⚠️</div><div class="stat-num" id="s2">3</div><div class="stat-label">تهدیدات فعال</div></div>
    <div class="stat-card g"><div class="stat-icon">✅</div><div class="stat-num" id="s3">241</div><div class="stat-label">حملات مسدود</div></div>
    <div class="stat-card y"><div class="stat-icon">🔍</div><div class="stat-num" id="s4">12</div><div class="stat-label">اسکن امروز</div></div>
    <div class="stat-card p"><div class="stat-icon">🌐</div><div class="stat-num" id="s5">8</div><div class="stat-label">دستگاه‌های آنلاین</div></div>
  </div>

  <div class="threat-bar">
    <div class="threat-title"><span>نوع تهدیدات</span><span style="color:var(--cyan)">۲۴ ساعت گذشته</span></div>
    <div class="bar-row"><div class="bar-label"><span>🕷️ بدافزار</span><span>72%</span></div><div class="bar-track"><div class="bar-fill" style="width:72%;background:var(--red)"></div></div></div>
    <div class="bar-row"><div class="bar-label"><span>🎣 فیشینگ</span><span>55%</span></div><div class="bar-track"><div class="bar-fill" style="width:55%;background:var(--yellow)"></div></div></div>
    <div class="bar-row"><div class="bar-label"><span>💣 DDoS</span><span>38%</span></div><div class="bar-track"><div class="bar-fill" style="width:38%;background:var(--purple)"></div></div></div>
    <div class="bar-row"><div class="bar-label"><span>🔓 Brute Force</span><span>21%</span></div><div class="bar-track"><div class="bar-fill" style="width:21%;background:var(--cyan)"></div></div></div>
  </div>

  <div class="alerts-box">
    <div style="font-size:0.8rem;color:var(--muted);margin-bottom:10px">🚨 هشدارهای اخیر</div>
    <div id="alert-container"></div>
  </div>
</div>

<!-- ══════════ PANEL 2: PASSWORD ══════════ -->
<div class="panel" id="p1">
  <div class="pass-box">
    <div class="pass-title">🔑 بررسی قدرت رمز عبور</div>
    <div class="pass-desc">رمز عبور خود را وارد کنید تا میزان امنیت آن سنجیده شود</div>
    <div class="input-wrap">
      <input class="pass-input" id="passInput" type="password" placeholder="رمز عبور را وارد کنید..." oninput="checkPass(this.value)">
      <button class="eye-btn" onclick="toggleEye()">👁️</button>
    </div>
    <div class="strength-track"><div class="strength-fill" id="sFill" style="width:0%;background:var(--red)"></div></div>
    <div class="strength-label" id="sLabel" style="color:var(--muted)">— وارد نشده —</div>
    <div class="criteria">
      <div class="crit" id="c1"><span class="crit-icon">❌</span> حداقل ۸ کاراکتر</div>
      <div class="crit" id="c2"><span class="crit-icon">❌</span> حرف بزرگ</div>
      <div class="crit" id="c3"><span class="crit-icon">❌</span> حرف کوچک</div>
      <div class="crit" id="c4"><span class="crit-icon">❌</span> عدد</div>
      <div class="crit" id="c5"><span class="crit-icon">❌</span> کاراکتر خاص</div>
      <div class="crit" id="c6"><span class="crit-icon">❌</span> حداقل ۱۲ کاراکتر</div>
    </div>
    <button class="gen-btn" onclick="genPass()">⚡ تولید رمز قوی</button>
  </div>
</div>

<!-- ══════════ PANEL 3: NETWORK SCANNER ══════════ -->
<div class="panel" id="p2">
  <div class="scan-box">
    <div class="scan-header">
      <span style="font-size:0.9rem;color:var(--cyan)">📡 اسکنر شبکه</span>
      <button class="scan-btn" id="scanBtn" onclick="startScan()">▶ شروع اسکن</button>
    </div>
    <div class="radar-wrap">
      <div class="radar">
        <div class="radar-line" id="radarLine"></div>
        <div class="radar-center"></div>
        <div class="radar-dot" style="top:30%;left:60%"></div>
        <div class="radar-dot" style="top:60%;left:25%;background:var(--yellow);box-shadow:0 0 6px var(--yellow)"></div>
        <div class="radar-dot" style="top:20%;left:30%"></div>
        <div class="radar-dot" style="top:70%;left:70%;background:var(--red);box-shadow:0 0 6px var(--red)"></div>
      </div>
    </div>
    <div class="device-list" id="deviceList"></div>
  </div>
</div>

<!-- ══════════ PANEL 4: FIREWALL ══════════ -->
<div class="panel" id="p3">
  <div class="fw-box">
    <div style="font-size:0.9rem;color:var(--purple);margin-bottom:14px">🔥 مدیریت قوانین فایروال</div>
    <div class="fw-controls">
      <input class="fw-input" id="fwIp" placeholder="آدرس IP (مثلاً 192.168.1.1)">
      <select class="fw-select" id="fwAction">
        <option value="allow">✅ Allow</option>
        <option value="deny">🚫 Deny</option>
      </select>
      <button class="add-rule-btn" onclick="addRule()">+ اضافه</button>
    </div>
    <table class="rules-table">
      <thead><tr><th>IP آدرس</th><th>عملکرد</th><th>وضعیت</th><th>حذف</th></tr></thead>
      <tbody id="ruleBody"></tbody>
    </table>
  </div>
</div>

<!-- ══════════ PANEL 5: ENCRYPTION ══════════ -->
<div class="panel" id="p4">
  <div class="enc-box">
    <div class="enc-title">🔐 ابزار رمزنگاری Base64</div>
    <textarea class="enc-input" id="encInput" placeholder="متن خود را اینجا وارد کنید..."></textarea>
    <div class="enc-btns">
      <button class="enc-btn encode" onclick="doEncode()">🔒 رمزنگاری (Encode)</button>
      <button class="enc-btn decode" onclick="doDecode()">🔓 رمزگشایی (Decode)</button>
    </div>
    <div class="enc-output" id="encOutput">نتیجه اینجا نمایش داده می‌شود...</div>
    <div class="hash-section">
      <div style="font-size:0.75rem;color:var(--muted);margin-bottom:8px">🔢 هش‌های متداول (شبیه‌سازی)</div>
      <div id="hashRows"></div>
    </div>
  </div>
</div>

<script>
// ─── TAB SWITCH ───
const panels = document.querySelectorAll('.panel');
const tabs = document.querySelectorAll('.tab');
function show(i) {
  panels.forEach((p,j) => p.classList.toggle('active', i===j));
  tabs.forEach((t,j) => t.classList.toggle('active', i===j));
}

// ─── PANEL 1: DASHBOARD ───
const alertData = [
  { level:'high', icon:'🚨', text:'تلاش Brute Force از IP 45.33.12.88', time:'۲ دقیقه پیش' },
  { level:'med', icon:'⚠️', text:'ترافیک غیرمعمول در پورت 8080', time:'۱۵ دقیقه پیش' },
  { level:'low', icon:'ℹ️', text:'اسکن شبکه با موفقیت انجام شد', time:'۳۰ دقیقه پیش' },
  { level:'high', icon:'🕷️', text:'فایل مشکوک در /tmp شناسایی شد', time:'۱ ساعت پیش' },
  { level:'med', icon:'🔓', text:'ورود ناموفق کاربر admin', time:'۲ ساعت پیش' },
];
const ac = document.getElementById('alert-container');
alertData.forEach(a => {
  ac.innerHTML += \`<div class="alert-item \${a.level}"><div class="alert-dot"></div><div class="alert-text">\${a.icon} \${a.text}</div><div class="alert-time">\${a.time}</div></div>\`;
});
// animate stats
function animateNum(id, target) {
  let el = document.getElementById(id), cur = 0;
  const step = Math.ceil(target/30);
  const t = setInterval(() => {
    cur = Math.min(cur+step, target);
    el.textContent = cur;
    if (cur >= target) clearInterval(t);
  }, 40);
}
setTimeout(() => {
  animateNum('s1',98); animateNum('s2',3); animateNum('s3',241);
  animateNum('s4',12); animateNum('s5',8);
}, 300);

// ─── PANEL 2: PASSWORD ───
function checkPass(v) {
  const checks = [v.length>=8, /[A-Z]/.test(v), /[a-z]/.test(v), /\\d/.test(v), /[^A-Za-z0-9]/.test(v), v.length>=12];
  const ids = ['c1','c2','c3','c4','c5','c6'];
  let score = checks.filter(Boolean).length;
  checks.forEach((ok,i) => {
    const el = document.getElementById(ids[i]);
    el.classList.toggle('ok', ok);
    el.querySelector('.crit-icon').textContent = ok ? '✅' : '❌';
  });
  const fill = document.getElementById('sFill');
  const label = document.getElementById('sLabel');
  const pct = (score/6)*100;
  fill.style.width = pct + '%';
  if (!v) { fill.style.width='0'; label.textContent='— وارد نشده —'; label.style.color='var(--muted)'; return; }
  if (score<=2) { fill.style.background='var(--red)'; label.textContent='⛔ خیلی ضعیف'; label.style.color='var(--red)'; }
  else if (score<=3) { fill.style.background='var(--yellow)'; label.textContent='⚠️ ضعیف'; label.style.color='var(--yellow)'; }
  else if (score<=4) { fill.style.background='#ff8c00'; label.textContent='🔶 متوسط'; label.style.color='#ff8c00'; }
  else if (score<=5) { fill.style.background='var(--cyan)'; label.textContent='🔷 قوی'; label.style.color='var(--cyan)'; }
  else { fill.style.background='var(--green)'; label.textContent='✅ بسیار قوی'; label.style.color='var(--green)'; }
}
function toggleEye() {
  const inp = document.getElementById('passInput');
  inp.type = inp.type==='password' ? 'text' : 'password';
}
function genPass() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz0123456789@#$!%&*';
  let p = '';
  for(let i=0;i<16;i++) p += chars[Math.floor(Math.random()*chars.length)];
  const inp = document.getElementById('passInput');
  inp.value = p; inp.type = 'text';
  checkPass(p);
}

// ─── PANEL 3: NETWORK SCANNER ───
const devices = [
  { icon:'🖥️', name:'سرور اصلی', ip:'192.168.1.1', status:'safe', label:'ایمن' },
  { icon:'💻', name:'لپ‌تاپ مدیر', ip:'192.168.1.45', status:'safe', label:'ایمن' },
  { icon:'📱', name:'گوشی ناشناس', ip:'192.168.1.88', status:'warn', label:'مشکوک' },
  { icon:'🖨️', name:'پرینتر شبکه', ip:'192.168.1.12', status:'safe', label:'ایمن' },
  { icon:'📹', name:'دوربین IP', ip:'192.168.1.201', status:'risk', label:'خطر' },
];
function renderDevices(count) {
  const list = document.getElementById('deviceList');
  list.innerHTML = '';
  devices.slice(0,count).forEach(d => {
    list.innerHTML += \`<div class="device-item"><div class="device-icon">\${d.icon}</div><div class="device-info"><div class="device-name">\${d.name}</div><div class="device-ip">\${d.ip}</div></div><div class="device-status \${d.status}">\${d.label}</div></div>\`;
  });
}
renderDevices(devices.length);
let scanning = false;
function startScan() {
  if (scanning) return;
  scanning = true;
  const btn = document.getElementById('scanBtn');
  btn.textContent = '⏳ در حال اسکن...';
  btn.classList.add('scanning');
  document.getElementById('deviceList').innerHTML = '';
  let i = 0;
  const t = setInterval(() => {
    i++;
    renderDevices(i);
    if (i >= devices.length) {
      clearInterval(t);
      btn.textContent = '▶ اسکن مجدد';
      btn.classList.remove('scanning');
      scanning = false;
    }
  }, 600);
}

// ─── PANEL 4: FIREWALL ───
const defaultRules = [
  { ip:'0.0.0.0/0', action:'allow', on:true },
  { ip:'185.220.101.0/24', action:'deny', on:true },
  { ip:'10.0.0.0/8', action:'allow', on:true },
];
let rules = [...defaultRules];
function renderRules() {
  const tbody = document.getElementById('ruleBody');
  tbody.innerHTML = rules.map((r,i) => \`
    <tr>
      <td style="font-family:monospace;font-size:0.7rem">\${r.ip}</td>
      <td><span class="badge \${r.action}">\${r.action==='allow'?'✅ Allow':'🚫 Deny'}</span></td>
      <td><div class="rule-toggle \${r.on?'':'off'}" onclick="toggleRule(\${i})"></div></td>
      <td><button class="del-btn" onclick="delRule(\${i})">🗑️</button></td>
    </tr>\`).join('');
}
function addRule() {
  const ip = document.getElementById('fwIp').value.trim();
  const action = document.getElementById('fwAction').value;
  if (!ip) return;
  rules.push({ip, action, on:true});
  document.getElementById('fwIp').value = '';
  renderRules();
}
function toggleRule(i) { rules[i].on = !rules[i].on; renderRules(); }
function delRule(i) { rules.splice(i,1); renderRules(); }
renderRules();

// ─── PANEL 5: ENCRYPTION ───
function simpleHash(str, len) {
  let h = 5381;
  for (let i=0; i<str.length; i++) h = ((h<<5)+h)+str.charCodeAt(i);
  let hex = Math.abs(h).toString(16);
  while(hex.length < len) hex = '0' + hex + Math.abs(h*7+13).toString(16);
  return hex.substring(0,len);
}
function doEncode() {
  const v = document.getElementById('encInput').value;
  if (!v) return;
  try {
    const enc = btoa(unescape(encodeURIComponent(v)));
    document.getElementById('encOutput').textContent = enc;
    updateHashes(v);
  } catch(e) { document.getElementById('encOutput').textContent = '❌ خطا در رمزنگاری'; }
}
function doDecode() {
  const v = document.getElementById('encInput').value;
  if (!v) return;
  try {
    const dec = decodeURIComponent(escape(atob(v)));
    document.getElementById('encOutput').textContent = dec;
    updateHashes(dec);
  } catch(e) { document.getElementById('encOutput').textContent = '❌ متن معتبر Base64 نیست'; }
}
function updateHashes(v) {
  const rows = [
    { name:'MD5 (sim)', len:32 },
    { name:'SHA-1 (sim)', len:40 },
    { name:'SHA-256 (sim)', len:64 },
  ];
  document.getElementById('hashRows').innerHTML = rows.map(r =>
    \`<div class="hash-row"><span class="hash-type">\${r.name}</span><span class="hash-val">\${simpleHash(v,r.len)}</span></div>\`
  ).join('');
}
<\/script>

`,className:"w-html-embed"})}),E=a=>{const{origin:t,pathname:i,search:r}=new URL(a);return`${t}${i}${r}`},z=d.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),P=({data:a})=>{const{system:t,resources:i,url:r,pageMeta:s}=a,c=E(r),p=d.useMemo(()=>({imageLoader:n,assetBaseUrl:o,resources:i,breakpoints:f,onError:console.error}),[i]);return e.jsxs(v.Provider,{value:p,children:[e.jsx(u.Provider,{value:r,children:e.jsx(z,{pageKey:c,system:t})}),e.jsx(b,{url:r,pageMeta:s,siteName:l,imageLoader:n,assetBaseUrl:o}),e.jsx(g,{children:s.title})]})},I=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),A=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${o}${h}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-46/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-46/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{B as configValuesSerialized};
