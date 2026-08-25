import{j as e,r as l,a as i,i as r,R as m,b as g,P as u,c as v,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],E=a=>e.jsx("body",{className:"w-element",children:e.jsx(f,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سامانه پیشرفته پایش تمرکز</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #00e5ff;
            --primary-dim: rgba(0,229,255,0.15);
            --danger: #ff3b5c;
            --danger-dim: rgba(255,59,92,0.15);
            --warning: #ffc400;
            --warning-dim: rgba(255,196,0,0.15);
            --success: #00e676;
            --bg: #060b14;
            --surface: #0d1626;
            --surface2: #111e35;
            --border: rgba(0,229,255,0.12);
            --text: #e8f4ff;
            --text-dim: #5a7a9a;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: var(--bg);
            color: var(--text);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-x: hidden;
            padding-bottom: 120px;
        }

        /* Grid background */
        body::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image:
                linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
            z-index: 0;
        }

        /* Header */
        .header {
            width: 100%;
            max-width: 900px;
            padding: 24px 20px 10px;
            display: flex;
            align-items: center;
            gap: 16px;
            position: relative;
            z-index: 1;
        }

        .logo-icon {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, var(--primary), #0066ff);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            box-shadow: 0 0 20px rgba(0,229,255,0.4);
            flex-shrink: 0;
        }

        .header-text h1 {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--primary);
            letter-spacing: 0.5px;
        }

        .header-text p {
            font-size: 0.75rem;
            color: var(--text-dim);
            margin-top: 2px;
        }

        .status-dot {
            margin-right: auto;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.8rem;
            color: var(--text-dim);
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--text-dim);
            transition: 0.3s;
        }

        .dot.active {
            background: var(--success);
            box-shadow: 0 0 10px var(--success);
            animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
            0%, 100% { box-shadow: 0 0 5px var(--success); }
            50% { box-shadow: 0 0 15px var(--success); }
        }

        /* Camera container */
        .cam-wrapper {
            width: 100%;
            max-width: 900px;
            padding: 0 20px;
            position: relative;
            z-index: 1;
            margin-top: 10px;
        }

        .cam-frame {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            background: #000;
            border: 1px solid var(--border);
            box-shadow:
                0 0 0 1px rgba(0,229,255,0.05),
                0 20px 60px rgba(0,0,0,0.8),
                0 0 40px rgba(0,229,255,0.08);
        }

        .cam-frame::before,
        .cam-frame::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            z-index: 10;
            pointer-events: none;
        }

        .cam-frame::before {
            top: 12px;
            right: 12px;
            border-top: 2px solid var(--primary);
            border-right: 2px solid var(--primary);
            border-radius: 0 4px 0 0;
        }

        .cam-frame::after {
            bottom: 12px;
            left: 12px;
            border-bottom: 2px solid var(--primary);
            border-left: 2px solid var(--primary);
            border-radius: 0 0 0 4px;
        }

        .corner-bl {
            position: absolute;
            bottom: 12px;
            right: 12px;
            width: 24px;
            height: 24px;
            border-bottom: 2px solid var(--primary);
            border-right: 2px solid var(--primary);
            border-radius: 0 0 4px 0;
            z-index: 10;
            pointer-events: none;
        }

        .corner-tl {
            position: absolute;
            top: 12px;
            left: 12px;
            width: 24px;
            height: 24px;
            border-top: 2px solid var(--primary);
            border-left: 2px solid var(--primary);
            border-radius: 4px 0 0 0;
            z-index: 10;
            pointer-events: none;
        }

        video {
            width: 100%;
            display: block;
            transform: scaleX(-1);
            border-radius: 20px;
        }

        canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scaleX(-1);
            pointer-events: none;
        }

        /* Overlay for danger state */
        #overlay-msg {
            position: absolute;
            inset: 0;
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 50;
            pointer-events: none;
        }

        .overlay-content {
            background: rgba(255,59,92,0.9);
            backdrop-filter: blur(8px);
            padding: 16px 36px;
            border-radius: 60px;
            font-size: 1.4rem;
            font-weight: 700;
            border: 1px solid rgba(255,255,255,0.2);
            animation: shake 0.4s infinite alternate;
        }

        @keyframes shake {
            from { transform: translateX(-3px) rotate(-0.5deg); }
            to   { transform: translateX(3px) rotate(0.5deg); }
        }

        /* Scan line effect */
        .scanline {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, transparent, var(--primary), transparent);
            opacity: 0;
            z-index: 20;
            pointer-events: none;
            transition: opacity 0.3s;
        }

        .scanning .scanline {
            opacity: 0.7;
            animation: scan 2s linear infinite;
        }

        @keyframes scan {
            from { top: 0; }
            to { top: 100%; }
        }

        /* Score ring */
        .score-overlay {
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 30;
            display: flex;
            flex-direction: column;
            align-items: center;
            pointer-events: none;
        }

        .score-ring-container {
            position: relative;
            width: 72px;
            height: 72px;
        }

        .score-ring-container svg {
            transform: rotate(-90deg);
        }

        .score-ring-bg { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 4; }
        .score-ring-fill {
            fill: none;
            stroke: var(--success);
            stroke-width: 4;
            stroke-linecap: round;
            stroke-dasharray: 188;
            stroke-dashoffset: 0;
            transition: stroke-dashoffset 0.5s, stroke 0.5s;
            filter: drop-shadow(0 0 4px currentColor);
        }

        .score-text {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .score-num {
            font-size: 1.1rem;
            font-weight: 900;
            line-height: 1;
        }

        .score-label-sm {
            font-size: 0.55rem;
            color: var(--text-dim);
            margin-top: 1px;
        }

        /* Dashboard */
        .dashboard {
            width: 100%;
            max-width: 900px;
            padding: 14px 20px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
            position: relative;
            z-index: 1;
        }

        @media (max-width: 700px) {
            .dashboard { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
            .dashboard { grid-template-columns: repeat(2, 1fr); }
        }

        .stat-card {
            background: var(--surface);
            border: 1px solid var(--border);
            padding: 12px 10px;
            border-radius: 14px;
            text-align: center;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
        }

        .stat-card::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--primary);
            transition: 0.3s;
        }

        .stat-card.alert::before { background: var(--danger); }
        .stat-card.warning::before { background: var(--warning); }

        .stat-card.alert {
            background: var(--danger-dim);
            border-color: rgba(255,59,92,0.3);
            animation: card-pulse 0.5s infinite alternate;
        }

        .stat-card.warning {
            background: var(--warning-dim);
            border-color: rgba(255,196,0,0.3);
        }

        @keyframes card-pulse {
            from { box-shadow: none; }
            to { box-shadow: 0 0 15px rgba(255,59,92,0.3); }
        }

        .stat-icon { font-size: 1.3rem; margin-bottom: 4px; }
        .stat-label { font-size: 0.68rem; color: var(--text-dim); margin-bottom: 4px; }
        .stat-value { font-size: 0.9rem; font-weight: 700; line-height: 1.2; }

        .progress-bar {
            width: 100%;
            height: 3px;
            background: rgba(255,255,255,0.08);
            margin-top: 6px;
            border-radius: 3px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: var(--warning);
            width: 0%;
            transition: width 0.2s;
            box-shadow: 0 0 6px var(--warning);
        }

        /* Bottom stats bar */
        .stats-bar {
            width: 100%;
            max-width: 900px;
            padding: 0 20px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            position: relative;
            z-index: 1;
            margin-top: -4px;
        }

        .mini-stat {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 10px 14px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .mini-stat-icon {
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        .mini-stat-text { flex: 1; }
        .mini-stat-label { font-size: 0.65rem; color: var(--text-dim); }
        .mini-stat-value { font-size: 0.9rem; font-weight: 700; }

        /* Controls */
        .controls {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            gap: 12px;
            padding: 16px 20px;
            background: linear-gradient(to top, var(--bg) 60%, transparent);
            z-index: 500;
        }

        .btn {
            padding: 13px 28px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            font-weight: 700;
            font-family: 'Vazirmatn', sans-serif;
            font-size: 0.95rem;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .btn:active { transform: scale(0.96); }

        .btn-start {
            background: linear-gradient(135deg, var(--primary), #0099cc);
            color: #000;
            box-shadow: 0 0 20px rgba(0,229,255,0.4);
        }

        .btn-start:hover {
            box-shadow: 0 0 30px rgba(0,229,255,0.6);
        }

        .btn-stop {
            background: linear-gradient(135deg, var(--danger), #cc0033);
            color: white;
            box-shadow: 0 0 20px rgba(255,59,92,0.3);
        }

        /* Loading */
        .loading-screen {
            position: fixed;
            inset: 0;
            background: var(--bg);
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            gap: 20px;
        }

        .loading-screen.active { display: flex; }

        .loading-logo { font-size: 3rem; animation: float 2s ease-in-out infinite; }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .loading-ring {
            width: 60px;
            height: 60px;
            border: 3px solid rgba(0,229,255,0.1);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .loading-text {
            font-size: 0.9rem;
            color: var(--text-dim);
            animation: fade 1.5s ease-in-out infinite alternate;
        }

        @keyframes fade {
            from { opacity: 0.4; }
            to { opacity: 1; }
        }

        /* Alert flash */
        .alert-flash {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 900;
            opacity: 0;
            background: rgba(255,59,92,0.15);
            animation: none;
        }

        .alert-flash.active {
            animation: flash 0.5s infinite alternate;
        }

        @keyframes flash {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* PERCLOS badge */
        .perclos-badge {
            position: absolute;
            bottom: 16px;
            right: 16px;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(8px);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 6px 12px;
            font-size: 0.7rem;
            color: var(--text-dim);
            z-index: 30;
            pointer-events: none;
        }

        .perclos-badge span {
            color: var(--primary);
            font-weight: 700;
        }

        /* Session timer */
        .session-timer {
            position: absolute;
            bottom: 16px;
            left: 16px;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(8px);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 6px 12px;
            font-size: 0.7rem;
            color: var(--text-dim);
            z-index: 30;
            pointer-events: none;
        }

        .session-timer span {
            color: var(--primary);
            font-weight: 700;
            font-family: monospace;
        }
    </style>



<div class="alert-flash" id="alert-flash"></div>

<div id="loading" class="loading-screen">
    <div class="loading-logo">🧠</div>
    <div class="loading-ring"></div>
    <div class="loading-text">در حال راه‌اندازی دوربین و بارگذاری هوش مصنوعی...</div>
</div>

<div class="header">
    <div class="logo-icon">👁️</div>
    <div class="header-text">
        <h1>سامانه هوشمند پایش تمرکز</h1>
        <p>تشخیص خواب‌آلودگی | خمیازه | جهت نگاه</p>
    </div>
    <div class="status-dot">
        <div class="dot" id="status-dot"></div>
        <span id="status-text">آماده</span>
    </div>
</div>

<div class="cam-wrapper">
    <div class="cam-frame" id="cam-frame">
        <div class="corner-tl"></div>
        <div class="corner-bl"></div>
        <div class="scanline"></div>

        <div id="overlay-msg">
            <div class="overlay-content" id="alert-text">⚠️ هشدار! عدم تمرکز</div>
        </div>

        <video id="video" autoplay="" playsinline=""></video>
        <canvas id="canvas"></canvas>

        <!-- Score ring overlay -->
        <div class="score-overlay">
            <div class="score-ring-container">
                <svg width="72" height="72" viewBox="0 0 72 72">
                    <circle class="score-ring-bg" cx="36" cy="36" r="30"></circle>
                    <circle class="score-ring-fill" id="score-ring" cx="36" cy="36" r="30"></circle>
                </svg>
                <div class="score-text">
                    <div class="score-num" id="score-num">100</div>
                    <div class="score-label-sm">هوشیاری</div>
                </div>
            </div>
        </div>

        <div class="perclos-badge">PERCLOS: <span id="perclos-val">0%</span></div>
        <div class="session-timer">زمان: <span id="timer-val">۰۰:۰۰</span></div>
    </div>
</div>

<div class="dashboard">
    <div class="stat-card" id="face-status">
        <div class="stat-icon">🎯</div>
        <div class="stat-label">وضعیت چهره</div>
        <div class="stat-value">—</div>
    </div>
    <div class="stat-card" id="eye-status">
        <div class="stat-icon">👁️</div>
        <div class="stat-label">وضعیت چشم</div>
        <div class="stat-value">—</div>
    </div>
    <div class="stat-card" id="head-status">
        <div class="stat-icon">🧭</div>
        <div class="stat-label">زاویه سر</div>
        <div class="stat-value">—</div>
    </div>
    <div class="stat-card" id="mouth-status">
        <div class="stat-icon">😮</div>
        <div class="stat-label">خمیازه</div>
        <div class="stat-value">—</div>
        <div class="progress-bar"><div id="mouth-progress" class="progress-fill"></div></div>
    </div>
    <div class="stat-card" id="gaze-status">
        <div class="stat-icon">👀</div>
        <div class="stat-label">جهت نگاه</div>
        <div class="stat-value">—</div>
    </div>
</div>

<div class="stats-bar">
    <div class="mini-stat">
        <div class="mini-stat-icon">⏱️</div>
        <div class="mini-stat-text">
            <div class="mini-stat-label">هشدارهای کل</div>
            <div class="mini-stat-value" id="alert-count">۰</div>
        </div>
    </div>
    <div class="mini-stat">
        <div class="mini-stat-icon">😪</div>
        <div class="mini-stat-text">
            <div class="mini-stat-label">خمیازه‌های تشخیص داده شده</div>
            <div class="mini-stat-value" id="yawn-count">۰</div>
        </div>
    </div>
    <div class="mini-stat">
        <div class="mini-stat-icon">📊</div>
        <div class="mini-stat-text">
            <div class="mini-stat-label">میانگین هوشیاری</div>
            <div class="mini-stat-value" id="avg-score">۱۰۰٪</div>
        </div>
    </div>
</div>

<div class="controls">
    <button class="btn btn-start" onclick="startApp()">▶ شروع پایش</button>
    <button class="btn btn-stop" onclick="stopApp()">⏹ توقف</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js" crossorigin="anonymous"><\/script>
<script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" crossorigin="anonymous"><\/script>
<script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" crossorigin="anonymous"><\/script>

<script>
    // Elements
    const videoEl = document.getElementById('video');
    const canvasEl = document.getElementById('canvas');
    const ctx = canvasEl.getContext('2d');
    const loadingScreen = document.getElementById('loading');
    const overlayMsg = document.getElementById('overlay-msg');
    const alertFlash = document.getElementById('alert-flash');
    const camFrame = document.getElementById('cam-frame');
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    const scoreRing = document.getElementById('score-ring');
    const scoreNum = document.getElementById('score-num');

    const faceEl = document.querySelector('#face-status .stat-value');
    const eyeEl = document.querySelector('#eye-status .stat-value');
    const headEl = document.querySelector('#head-status .stat-value');
    const mouthEl = document.querySelector('#mouth-status .stat-value');
    const gazeEl = document.querySelector('#gaze-status .stat-value');
    const mouthProg = document.getElementById('mouth-progress');
    const perclosEl = document.getElementById('perclos-val');
    const timerEl = document.getElementById('timer-val');
    const alertCountEl = document.getElementById('alert-count');
    const yawnCountEl = document.getElementById('yawn-count');
    const avgScoreEl = document.getElementById('avg-score');

    // State
    let audioCtx = null;
    let alarmOsc = null;
    let isAlarming = false;
    let score = 100;
    let faceMissingFrames = 0;
    let yawnFrames = 0;
    let yawnDetectedLastFrame = false;
    let totalAlerts = 0;
    let totalYawns = 0;
    let scoreHistory = [];
    let closedFrames = 0, totalFrames = 0;
    let sessionSeconds = 0;
    let timerInterval = null;
    let isRunning = false;
    let speechSynth = window.speechSynthesis;
    let lastSpokenTime = 0;

    const YAWN_THRESH = 0.45;
    const YAWN_FRAMES = 12;
    const EYE_CLOSED_THRESH = 0.013;

    // Persian speech
    function speak(text) {
        const now = Date.now();
        if (now - lastSpokenTime < 4000) return;
        lastSpokenTime = now;
        speechSynth.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = 'fa-IR';
        utt.rate = 0.9;
        utt.pitch = 1.0;
        // Try to find a Persian voice
        const voices = speechSynth.getVoices();
        const faVoice = voices.find(v => v.lang.startsWith('fa'));
        if (faVoice) utt.voice = faVoice;
        speechSynth.speak(utt);
    }

    function toPersianNum(n) {
        const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
        return String(n).replace(/\\d/g, d => persianDigits[d]);
    }

    function computeMAR(lm) {
        const up = lm[13], dn = lm[14];
        const lc = lm[61], rc = lm[291];
        const v = Math.hypot(up.x - dn.x, up.y - dn.y);
        const h = Math.hypot(lc.x - rc.x, lc.y - rc.y);
        return h < 0.01 ? 0 : v / h;
    }

    function detectGaze(lm) {
        const li = lm[468], lo = lm[33], lin = lm[133];
        const ri = lm[473], ro = lm[362], rin = lm[263];
        function rel(iris, a, b) {
            const w = Math.abs(b.x - a.x);
            return w < 0.01 ? 0.5 : Math.max(0, Math.min(1, (iris.x - a.x) / (b.x - a.x)));
        }
        const avg = (rel(li, lin, lo) + rel(ri, rin, ro)) / 2;
        if (avg < 0.33) return 'چپ ◀';
        if (avg > 0.67) return 'راست ▶';
        return 'جلو ●';
    }

    function updateScoreRing(val) {
        const circumference = 188;
        const offset = circumference - (val / 100) * circumference;
        scoreRing.style.strokeDashoffset = offset;
        if (val >= 70) {
            scoreRing.style.stroke = 'var(--success)';
        } else if (val >= 40) {
            scoreRing.style.stroke = 'var(--warning)';
        } else {
            scoreRing.style.stroke = 'var(--danger)';
        }
        scoreNum.textContent = val;
    }

    function updateTimer() {
        sessionSeconds++;
        const m = Math.floor(sessionSeconds / 60).toString().padStart(2, '0');
        const s = (sessionSeconds % 60).toString().padStart(2, '0');
        timerEl.textContent = toPersianNum(m) + ':' + toPersianNum(s);
    }

    function initAudio() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    function startAlarm(reason) {
        if (isAlarming) return;
        isAlarming = true;
        totalAlerts++;
        alertCountEl.textContent = toPersianNum(totalAlerts);

        // Sound alarm
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        osc.frequency.setValueAtTime(500, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        alarmOsc = osc;

        // Persian voice alert
        if (reason === 'sleep') speak('هشدار! چشمانت داره بسته میشه. بیدار باش');
        else if (reason === 'away') speak('چهره‌ات دیده نمیشه. لطفاً به دوربین نگاه کن');
        else if (reason === 'down') speak('سرت افتاده پایین. صاف بشین');
        else speak('هشدار! تمرکزت رو از دست دادی');

        overlayMsg.style.display = 'flex';
        alertFlash.classList.add('active');
    }

    function stopAlarm() {
        if (!isAlarming) return;
        isAlarming = false;
        if (alarmOsc) { alarmOsc.stop(); alarmOsc.disconnect(); alarmOsc = null; }
        overlayMsg.style.display = 'none';
        alertFlash.classList.remove('active');
    }

    function onResults(results) {
        canvasEl.width = videoEl.videoWidth;
        canvasEl.height = videoEl.videoHeight;
        ctx.save();
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

        if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
            faceMissingFrames = 0;
            faceEl.textContent = 'شناسایی شد ✓';
            document.getElementById('face-status').classList.remove('alert');

            const lm = results.multiFaceLandmarks[0];

            // Draw mesh - only iris and face oval for cleaner look
            drawConnectors(ctx, lm, FACEMESH_FACE_OVAL, {color: 'rgba(0,229,255,0.4)', lineWidth: 1.5});
            drawConnectors(ctx, lm, FACEMESH_LEFT_EYE, {color: 'rgba(0,229,255,0.8)', lineWidth: 1.5});
            drawConnectors(ctx, lm, FACEMESH_RIGHT_EYE, {color: 'rgba(0,229,255,0.8)', lineWidth: 1.5});
            drawConnectors(ctx, lm, FACEMESH_LIPS, {color: 'rgba(255,100,150,0.6)', lineWidth: 1.5});
            if (FACEMESH_LEFT_IRIS) {
                drawConnectors(ctx, lm, FACEMESH_LEFT_IRIS, {color: 'rgba(0,255,200,0.9)', lineWidth: 2});
                drawConnectors(ctx, lm, FACEMESH_RIGHT_IRIS, {color: 'rgba(0,255,200,0.9)', lineWidth: 2});
            }

            // Head pitch
            const nose = lm[1];
            const lEar = lm[234], rEar = lm[454];
            const midY = (lEar.y + rEar.y) / 2;
            const headPitch = nose.y - midY;
            const lookingDown = headPitch > 0.09;

            // Eye closed
            const leyDist = Math.abs(lm[159].y - lm[145].y);
            const reyDist = Math.abs(lm[386].y - lm[374].y);
            const eyesClosed = leyDist < EYE_CLOSED_THRESH && reyDist < EYE_CLOSED_THRESH;

            // PERCLOS
            totalFrames++;
            if (eyesClosed) closedFrames++;
            const perclos = Math.round((closedFrames / Math.max(1, totalFrames)) * 100);
            perclosEl.textContent = perclos + '%';

            // Yawn
            const mar = computeMAR(lm);
            if (mar > YAWN_THRESH) yawnFrames = Math.min(yawnFrames + 2, YAWN_FRAMES + 5);
            else yawnFrames = Math.max(0, yawnFrames - 1);
            const yawning = yawnFrames >= YAWN_FRAMES;

            if (yawning && !yawnDetectedLastFrame) {
                totalYawns++;
                yawnCountEl.textContent = toPersianNum(totalYawns);
                speak('خمیازه‌ات رو دیدم! کمی استراحت کن');
            }
            yawnDetectedLastFrame = yawning;

            mouthProg.style.width = Math.min(100, (yawnFrames / YAWN_FRAMES) * 100) + '%';
            if (yawning) {
                mouthEl.textContent = 'خمیازه 😪';
                document.getElementById('mouth-status').classList.add('warning');
            } else {
                mouthEl.textContent = mar > 0.25 ? 'نیمه باز' : 'بسته';
                document.getElementById('mouth-status').classList.remove('warning');
            }

            // Gaze
            gazeEl.textContent = detectGaze(lm);

            // Head
            if (lookingDown) {
                headEl.textContent = 'پایین ↓';
                document.getElementById('head-status').classList.add('alert');
            } else {
                headEl.textContent = 'مستقیم ↑';
                document.getElementById('head-status').classList.remove('alert');
            }

            // Eyes
            if (eyesClosed) {
                eyeEl.textContent = 'بسته 😴';
                document.getElementById('eye-status').classList.add('alert');
            } else {
                eyeEl.textContent = 'باز ✓';
                document.getElementById('eye-status').classList.remove('alert');
            }

            // Score
            if (lookingDown || eyesClosed || yawning) {
                score = Math.max(0, score - 2);
            } else {
                score = Math.min(100, score + 0.8);
            }

            if (score < 40 && eyesClosed) startAlarm('sleep');
            else if (score < 35 && lookingDown) startAlarm('down');
            else if (score < 30) startAlarm('generic');
            else if (score > 75) stopAlarm();

        } else {
            faceMissingFrames++;
            faceEl.textContent = 'غایب ✗';
            document.getElementById('face-status').classList.add('alert');
            if (faceMissingFrames > 20) {
                score = Math.max(0, score - 4);
                if (score < 30) startAlarm('away');
            }
        }

        scoreHistory.push(Math.round(score));
        if (scoreHistory.length > 200) scoreHistory.shift();
        const avg = Math.round(scoreHistory.reduce((a, b) => a + b, 0) / scoreHistory.length);
        avgScoreEl.textContent = toPersianNum(avg) + '٪';
        updateScoreRing(Math.round(score));

        ctx.restore();
    }

    const faceMesh = new FaceMesh({
        locateFile: f => \`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/\${f}\`
    });

    faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    faceMesh.onResults(onResults);

    const camera = new Camera(videoEl, {
        onFrame: async () => { await faceMesh.send({image: videoEl}); },
        width: 640,
        height: 480
    });

    function startApp() {
        initAudio();
        // Pre-load voices
        speechSynth.getVoices();

        loadingScreen.classList.add('active');
        camera.start().then(() => {
            loadingScreen.classList.remove('active');
            isRunning = true;
            statusDot.classList.add('active');
            statusText.textContent = 'در حال پایش';
            camFrame.classList.add('scanning');
            timerInterval = setInterval(updateTimer, 1000);
            speak('پایش شروع شد. مراقبتت هستم');
        }).catch(err => {
            console.error(err);
            loadingScreen.classList.remove('active');
            alert('دوربین در دسترس نیست یا دسترسی داده نشده است.');
        });
    }

    function stopApp() {
        camera.stop();
        stopAlarm();
        isRunning = false;
        statusDot.classList.remove('active');
        statusText.textContent = 'متوقف';
        camFrame.classList.remove('scanning');
        clearInterval(timerInterval);
        faceEl.textContent = 'متوقف';
        speak('پایش متوقف شد');
    }
<\/script>



`,className:"w-html-embed"})}),S=a=>{const{origin:t,pathname:o,search:s}=new URL(a);return`${t}${o}${s}`},k=l.memo(({pageKey:a,system:t})=>e.jsx(E,{system:t},a),(a,t)=>a.pageKey===t.pageKey),C=({data:a})=>{const{system:t,resources:o,url:s,pageMeta:n}=a,c=S(s),p=l.useMemo(()=>({imageLoader:r,assetBaseUrl:i,resources:o,breakpoints:h,onError:console.error}),[o]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:s,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(u,{url:s,pageMeta:n,siteName:d,imageLoader:r,assetBaseUrl:i}),e.jsx(v,{children:n.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),A=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${i}${y}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},F=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),I={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-34/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-34/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:F}}};export{I as configValuesSerialized};
