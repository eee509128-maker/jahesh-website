import{j as e,r as n,a as o,i as l,R as g,b as f,P as h,c as b,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as u}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(u,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>موشک پیشرفته - کاوشگر فضایی</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;700;900&amp;display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0510;
    --purple-deep: #12083a;
    --purple-mid: #2d1b69;
    --purple-accent: #6c3fc9;
    --purple-bright: #9b5de5;
    --purple-glow: #c77dff;
    --gold: #e8b86d;
    --cyan: #48cae4;
    --white: #f0eaff;
    --text-muted: #8b7aa8;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    font-family: 'Vazirmatn', sans-serif;
    color: var(--white);
    overflow-x: hidden;
  }

  /* Stars background */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 50% 10%, rgba(200,150,255,0.7) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 85% 35%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 15% 90%, rgba(200,150,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 60% 50%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(2px 2px at 92% 15%, rgba(200,150,255,0.8) 0%, transparent 100%),
      radial-gradient(1px 1px at 40% 40%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 75% 65%, rgba(255,255,255,0.5) 0%, transparent 100%);
    z-index: 0;
    pointer-events: none;
  }

  /* HERO */
  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    text-align: center;
    line-height: 1.1;
    background: linear-gradient(135deg, var(--purple-glow), var(--white) 40%, var(--gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeUp 1s ease both;
  }

  .hero-sub {
    margin-top: 1.2rem;
    font-size: 1.1rem;
    color: var(--text-muted);
    letter-spacing: 0.05em;
    animation: fadeUp 1s 0.2s ease both;
  }

  .scroll-hint {
    position: absolute;
    bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    font-size: 0.8rem;
    animation: bounce 2s infinite;
  }

  .scroll-hint::after {
    content: '';
    width: 1px;
    height: 50px;
    background: linear-gradient(to bottom, var(--purple-accent), transparent);
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* SCROLL CONTAINER */
  .scroll-section {
    position: relative;
    height: 600vh;
  }

  .sticky-wrap {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 1;
  }

  /* ROCKET SVG CONTAINER */
  .rocket-scene {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rocket-wrap {
    position: relative;
    width: 280px;
    height: 600px;
    transition: transform 0.1s linear;
  }

  /* INFO PANEL - RIGHT SIDE */
  .info-panel {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    width: 380px;
    padding: 2.5rem;
    border: 1px solid rgba(108,63,201,0.4);
    border-radius: 1.5rem;
    background: linear-gradient(135deg, rgba(18,8,58,0.95), rgba(45,27,105,0.7));
    backdrop-filter: blur(20px);
    box-shadow: 0 0 60px rgba(108,63,201,0.3), inset 0 0 30px rgba(108,63,201,0.05);
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: translateY(-50%) translateX(-20px);
    z-index: 10;
  }

  .info-panel.active {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }

  .info-panel .tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--purple-glow);
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .info-panel .tag::before {
    content: '';
    width: 20px;
    height: 1px;
    background: var(--purple-glow);
  }

  .info-panel h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--white);
    line-height: 1.3;
  }

  .info-panel p {
    font-size: 0.95rem;
    line-height: 1.9;
    color: var(--text-muted);
  }

  .info-panel .spec {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
  }

  .info-panel .spec-item {
    background: rgba(108,63,201,0.15);
    border-radius: 0.6rem;
    padding: 0.7rem 1rem;
    border: 1px solid rgba(108,63,201,0.25);
  }

  .info-panel .spec-item .label {
    font-size: 0.7rem;
    color: var(--purple-glow);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .info-panel .spec-item .value {
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
    margin-top: 0.3rem;
  }

  /* LABEL BOXES - Positioned next to rocket parts */
  .label-box {
    position: absolute;
    padding: 0.6rem 1.2rem;
    background: rgba(18,8,58,0.9);
    border: 1px solid;
    border-radius: 0.8rem;
    font-size: 0.85rem;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    pointer-events: none;
    backdrop-filter: blur(10px);
    z-index: 5;
  }

  .label-box::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 1px;
    background: currentColor;
  }

  .label-box.active {
    opacity: 1;
  }

  /* Individual label positions */
  #label-nose {
    right: calc(50% + 180px);
    top: 15%;
    border-color: var(--purple-glow);
    color: var(--purple-glow);
  }
  #label-nose::before {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  #label-guidance {
    right: calc(50% + 180px);
    top: 28%;
    border-color: var(--cyan);
    color: var(--cyan);
  }
  #label-guidance::before {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  #label-fuel {
    left: calc(50% + 180px);
    top: 50%;
    border-color: var(--cyan);
    color: var(--cyan);
  }
  #label-fuel::before {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  #label-engine {
    right: calc(50% + 180px);
    top: 72%;
    border-color: var(--purple-bright);
    color: var(--purple-bright);
  }
  #label-engine::before {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  #label-nozzle {
    left: calc(50% + 180px);
    top: 85%;
    border-color: var(--gold);
    color: var(--gold);
  }
  #label-nozzle::before {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  /* Progress bar */
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background: linear-gradient(to right, var(--purple-accent), var(--purple-glow));
    z-index: 100;
    transition: width 0.1s linear;
    box-shadow: 0 0 10px var(--purple-glow);
  }

  /* Stage indicators */
  .stages {
    position: fixed;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 100;
  }

  .stage-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(108,63,201,0.3);
    border: 2px solid rgba(108,63,201,0.5);
    transition: all 0.4s ease;
    cursor: pointer;
    position: relative;
  }

  .stage-dot:hover {
    background: rgba(108,63,201,0.6);
    transform: scale(1.2);
  }

  .stage-dot.active {
    background: var(--purple-glow);
    box-shadow: 0 0 15px var(--purple-glow);
    transform: scale(1.6);
    border-color: var(--purple-glow);
  }

  /* Tooltip for dots */
  .stage-dot::after {
    content: attr(data-title);
    position: absolute;
    right: calc(100% + 15px);
    top: 50%;
    transform: translateY(-50%);
    background: rgba(18,8,58,0.95);
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    border: 1px solid rgba(108,63,201,0.4);
  }

  .stage-dot:hover::after {
    opacity: 1;
  }

  /* FOOTER */
  .footer-section {
    position: relative;
    z-index: 1;
    padding: 6rem 2rem;
    text-align: center;
    background: linear-gradient(to bottom, transparent, var(--purple-deep));
  }

  .footer-section h2 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 700;
    background: linear-gradient(135deg, var(--purple-glow), var(--gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  .footer-section p {
    color: var(--text-muted);
    max-width: 500px;
    margin: 0 auto 2rem;
    line-height: 1.8;
  }

  .cta-btn {
    display: inline-block;
    padding: 0.9rem 2.5rem;
    background: linear-gradient(135deg, var(--purple-mid), var(--purple-accent));
    color: var(--white);
    text-decoration: none;
    border-radius: 3rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    box-shadow: 0 0 30px rgba(108,63,201,0.5);
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 1rem;
  }

  .cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 50px rgba(155,93,229,0.7);
  }

  @media (max-width: 1024px) {
    .info-panel {
      left: 50%;
      transform: translate(-50%, -50%);
      top: auto;
      bottom: 5%;
      width: 90vw;
      max-width: 400px;
    }
    .info-panel.active {
      transform: translate(-50%, 0);
    }
    .label-box {
      display: none;
    }
    .rocket-wrap { 
      width: 200px; 
      height: 450px; 
    }
  }

  @media (max-width: 768px) {
    .rocket-wrap { 
      width: 160px; 
      height: 380px; 
    }
    .stages {
      left: 1rem;
      gap: 1rem;
    }
  }
</style>



<div class="progress-bar" id="progressBar"></div>

<div class="stages" id="stageNav">
  <div class="stage-dot active" data-stage="0" data-title="نمای کلی موشک"></div>
  <div class="stage-dot" data-stage="1" data-title="مخروط بینی"></div>
  <div class="stage-dot" data-stage="2" data-title="محفظه هدایت"></div>
  <div class="stage-dot" data-stage="3" data-title="مخزن سوخت"></div>
  <div class="stage-dot" data-stage="4" data-title="موتورها"></div>
  <div class="stage-dot" data-stage="5" data-title="نازل‌ها"></div>
</div>

<!-- HERO -->
<section class="hero">
  <h1 class="hero-title">کاوشگر<br>آرمیتاژ-۷</h1>
  <p class="hero-sub">موشک نسل آینده · کاوش فضای عمیق</p>
  <div class="scroll-hint">اسکرول کنید</div>
</section>

<!-- SCROLL ANIMATED SECTION -->
<section class="scroll-section" id="scrollSection">
  <div class="sticky-wrap">

    <!-- LABEL BOXES -->
    <div class="label-box" id="label-nose">مخروط بینی</div>
    <div class="label-box" id="label-guidance">سیستم هدایت</div>
    <div class="label-box" id="label-fuel">مخزن سوخت</div>
    <div class="label-box" id="label-engine">موتورهای اصلی</div>
    <div class="label-box" id="label-nozzle">نازل‌های رانش</div>

    <!-- ROCKET -->
    <div class="rocket-scene">
      <div class="rocket-wrap" id="rocketWrap">
        <svg width="280" height="600" viewBox="0 0 280 600" fill="none" xmlns="http://www.w3.org/2000/svg" id="rocketSVG">
          <defs>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#1a0a4a"></stop>
              <stop offset="40%" stop-color="#3d1f8a"></stop>
              <stop offset="70%" stop-color="#2d1b69"></stop>
              <stop offset="100%" stop-color="#0d0628"></stop>
            </linearGradient>
            <linearGradient id="noseGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#c77dff"></stop>
              <stop offset="100%" stop-color="#6c3fc9"></stop>
            </linearGradient>
            <linearGradient id="engineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#2d1b69"></stop>
              <stop offset="100%" stop-color="#0a0510"></stop>
            </linearGradient>
            <linearGradient id="fuelGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#0f2557"></stop>
              <stop offset="50%" stop-color="#163a85"></stop>
              <stop offset="100%" stop-color="#0f2557"></stop>
            </linearGradient>
            <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ff6b00"></stop>
              <stop offset="50%" stop-color="#ffcc00"></stop>
              <stop offset="100%" stop-color="transparent"></stop>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur"></feGaussianBlur>
              <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
            </filter>
          </defs>

          <!-- FINS -->
          <g id="fins">
            <polygon points="40,490 75,380 75,490" fill="#1a0a4a" stroke="#6c3fc9" stroke-width="1.5"></polygon>
            <polygon points="240,490 205,380 205,490" fill="#1a0a4a" stroke="#6c3fc9" stroke-width="1.5"></polygon>
            <polygon points="30,505 70,455 70,505" fill="#120736" stroke="#4a2d9c" stroke-width="0.8"></polygon>
            <polygon points="250,505 210,455 210,505" fill="#120736" stroke="#4a2d9c" stroke-width="0.8"></polygon>
          </g>

          <!-- BODY -->
          <rect x="75" y="110" width="130" height="400" rx="10" fill="url(#bodyGrad)" stroke="#3d1f8a" stroke-width="1.5"></rect>

          <!-- Body detail lines -->
          <line x1="95" y1="110" x2="95" y2="510" stroke="rgba(108,63,201,0.3)" stroke-width="0.7"></line>
          <line x1="140" y1="110" x2="140" y2="510" stroke="rgba(108,63,201,0.2)" stroke-width="0.7"></line>
          <line x1="185" y1="110" x2="185" y2="510" stroke="rgba(108,63,201,0.3)" stroke-width="0.7"></line>

          <!-- Horizontal rings -->
          <rect x="75" y="180" width="130" height="8" rx="3" fill="#3d1f8a" opacity="0.8"></rect>
          <rect x="75" y="260" width="130" height="8" rx="3" fill="#3d1f8a" opacity="0.8"></rect>
          <rect x="75" y="350" width="130" height="8" rx="3" fill="#3d1f8a" opacity="0.8"></rect>
          <rect x="75" y="435" width="130" height="8" rx="3" fill="#3d1f8a" opacity="0.8"></rect>

          <!-- NOSE CONE -->
          <path d="M75,110 Q75,40 140,5 Q205,40 205,110 Z" fill="url(#noseGrad)" stroke="#9b5de5" stroke-width="1.5"></path>
          <path d="M92,105 Q92,55 140,28 Q188,55 188,105" fill="none" stroke="rgba(200,150,255,0.4)" stroke-width="1.2"></path>
          <circle cx="140" cy="60" r="8" fill="rgba(255,255,255,0.1)" stroke="rgba(199,125,255,0.5)" stroke-width="1"></circle>

          <!-- GUIDANCE MODULE -->
          <rect x="80" y="110" width="120" height="80" rx="5" fill="#1e0d52" stroke="#6c3fc9" stroke-width="1.5"></rect>
          
          <!-- Windows -->
          <circle cx="115" cy="145" r="16" fill="#0a1a3d" stroke="#48cae4" stroke-width="2"></circle>
          <circle cx="115" cy="145" r="10" fill="#163a85" stroke="#48cae4" stroke-width="0.7"></circle>
          <circle cx="165" cy="145" r="16" fill="#0a1a3d" stroke="#48cae4" stroke-width="2"></circle>
          <circle cx="165" cy="145" r="10" fill="#163a85" stroke="#48cae4" stroke-width="0.7"></circle>
          
          <!-- Antenna -->
          <line x1="140" y1="110" x2="140" y2="85" stroke="#9b5de5" stroke-width="2"></line>
          <circle cx="140" cy="82" r="4" fill="#c77dff"></circle>
          <circle cx="140" cy="82" r="8" fill="none" stroke="#c77dff" stroke-width="0.5" opacity="0.4">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"></animate>
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"></animate>
          </circle>

          <!-- Control panel details -->
          <rect x="85" y="165" width="110" height="3" rx="1" fill="rgba(72,202,228,0.3)"></rect>
          <rect x="85" y="172" width="110" height="3" rx="1" fill="rgba(72,202,228,0.2)"></rect>
          <rect x="85" y="179" width="110" height="3" rx="1" fill="rgba(72,202,228,0.3)"></rect>

          <!-- FUEL TANK -->
          <rect x="80" y="260" width="120" height="180" rx="5" fill="url(#fuelGrad)" stroke="#1e4d8c" stroke-width="1.5"></rect>
          
          <!-- Fuel level indicator -->
          <rect x="87" y="270" width="28" height="165" rx="4" fill="rgba(10,20,60,0.6)" stroke="rgba(72,202,228,0.4)" stroke-width="1"></rect>
          <rect x="87" y="340" width="28" height="95" rx="4" fill="rgba(24,100,200,0.7)">
            <animate attributeName="height" values="95;90;95" dur="3s" repeatCount="indefinite"></animate>
          </rect>
          <text x="101" y="395" font-family="monospace" font-size="8" fill="#48cae4" text-anchor="middle" font-weight="bold">72%</text>
          
          <!-- Pipes -->
          <path d="M125,285 L195,285 L195,360 L125,360" fill="none" stroke="#48cae4" stroke-width="2" opacity="0.7"></path>
          <circle cx="125" cy="285" r="4" fill="#48cae4" opacity="0.9"></circle>
          <circle cx="125" cy="360" r="4" fill="#48cae4" opacity="0.9"></circle>
          <circle cx="195" cy="285" r="3" fill="#48cae4" opacity="0.7"></circle>
          <circle cx="195" cy="360" r="3" fill="#48cae4" opacity="0.7"></circle>

          <!-- Pressure valves -->
          <circle cx="165" cy="300" r="6" fill="none" stroke="#e8b86d" stroke-width="1.5"></circle>
          <circle cx="165" cy="325" r="6" fill="none" stroke="#e8b86d" stroke-width="1.5"></circle>

          <!-- ENGINE CLUSTER -->
          <rect x="80" y="440" width="120" height="70" rx="5" fill="url(#engineGrad)" stroke="#6c3fc9" stroke-width="1.5"></rect>
          
          <!-- Engine details -->
          <ellipse cx="105" cy="475" rx="16" ry="13" fill="#0d0628" stroke="#9b5de5" stroke-width="2"></ellipse>
          <ellipse cx="105" cy="475" rx="10" ry="8" fill="#1a0a4a" stroke="#c77dff" stroke-width="1"></ellipse>
          
          <ellipse cx="140" cy="475" rx="16" ry="13" fill="#0d0628" stroke="#9b5de5" stroke-width="2"></ellipse>
          <ellipse cx="140" cy="475" rx="10" ry="8" fill="#1a0a4a" stroke="#c77dff" stroke-width="1"></ellipse>
          
          <ellipse cx="175" cy="475" rx="16" ry="13" fill="#0d0628" stroke="#9b5de5" stroke-width="2"></ellipse>
          <ellipse cx="175" cy="475" rx="10" ry="8" fill="#1a0a4a" stroke="#c77dff" stroke-width="1"></ellipse>

          <!-- NOZZLES -->
          <g id="nozzles">
            <path d="M89,510 Q89,540 80,565 Q95,553 105,565 Q115,553 125,565 Q125,540 125,510 Z" fill="#1a0a4a" stroke="#e8b86d" stroke-width="1.5"></path>
            <path d="M124,510 Q124,535 117,560 Q130,550 140,560 Q150,550 163,560 Q156,535 156,510 Z" fill="#1a0a4a" stroke="#e8b86d" stroke-width="1.5"></path>
            <path d="M155,510 Q155,540 155,565 Q165,553 175,565 Q185,553 200,565 Q200,540 200,510 Z" fill="#1a0a4a" stroke="#e8b86d" stroke-width="1.5"></path>
          </g>

          <!-- FLAMES -->
          <g id="flames" opacity="0.8">
            <ellipse cx="105" cy="575" rx="14" ry="26" fill="url(#flameGrad)" opacity="0.85">
              <animate attributeName="ry" values="24;32;24" dur="0.4s" repeatCount="indefinite"></animate>
              <animate attributeName="opacity" values="0.85;1;0.85" dur="0.4s" repeatCount="indefinite"></animate>
            </ellipse>
            <ellipse cx="140" cy="580" rx="12" ry="32" fill="url(#flameGrad)" opacity="0.95">
              <animate attributeName="ry" values="28;38;28" dur="0.35s" repeatCount="indefinite"></animate>
              <animate attributeName="opacity" values="0.95;1;0.95" dur="0.35s" repeatCount="indefinite"></animate>
            </ellipse>
            <ellipse cx="175" cy="575" rx="14" ry="26" fill="url(#flameGrad)" opacity="0.85">
              <animate attributeName="ry" values="24;34;24" dur="0.45s" repeatCount="indefinite"></animate>
              <animate attributeName="opacity" values="0.85;1;0.85" dur="0.45s" repeatCount="indefinite"></animate>
            </ellipse>
          </g>

          <!-- HIGHLIGHT OVERLAYS -->
          <path id="hl-nose" d="M75,110 Q75,40 140,5 Q205,40 205,110 Z" fill="rgba(155,93,229,0)" stroke="rgba(199,125,255,0)" stroke-width="4" style="transition: all 0.5s"></path>
          <rect id="hl-guidance" x="78" y="108" width="124" height="84" rx="7" fill="rgba(72,202,228,0)" stroke="rgba(72,202,228,0)" stroke-width="3" style="transition: all 0.5s"></rect>
          <rect id="hl-fuel" x="78" y="258" width="124" height="184" rx="7" fill="rgba(22,58,133,0)" stroke="rgba(72,202,228,0)" stroke-width="3" style="transition: all 0.5s"></rect>
          <rect id="hl-engine" x="78" y="438" width="124" height="74" rx="7" fill="rgba(108,63,201,0)" stroke="rgba(155,93,229,0)" stroke-width="3" style="transition: all 0.5s"></rect>
          <rect id="hl-nozzle" x="75" y="508" width="130" height="65" rx="5" fill="rgba(232,184,109,0)" stroke="rgba(232,184,109,0)" stroke-width="3" style="transition: all 0.5s"></rect>
        </svg>
      </div>
    </div>

    <!-- INFO PANEL -->
    <div class="info-panel" id="infoPanel">
      <div class="tag" id="infoTag">قطعه</div>
      <h2 id="infoTitle">عنوان</h2>
      <p id="infoDesc">توضیحات</p>
      <div class="spec" id="infoSpec"></div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<section class="footer-section">
  <h2>آماده پرواز به فضا هستید؟</h2>
  <p>با پیشرفته‌ترین فناوری موشکی نسل آینده، مرزهای اکتشاف فضایی را جابجا کنید.</p>
  <button class="cta-btn">درخواست مشاوره</button>
</section>

<script>
  const stages = [
    null,
    {
      tag: 'بخش ۱ از ۵',
      title: 'مخروط بینی آیرودینامیک',
      desc: 'مخروط بینی از آلیاژ تیتانیوم-کاربن ساخته شده و در برابر گرمای شدید ورود مجدد به جو مقاومت می‌کند. شکل بهینه‌شده آن با شبیه‌سازی‌های CFD طراحی شده تا کمترین مقاومت هوایی ممکن را داشته باشد.',
      specs: [['جنس', 'Ti-C آلیاژ'], ['وزن', '۱۸۰ کیلو'], ['مقاومت', '۳۲۰۰°C'], ['قطر', '۴.۵ متر']],
      highlight: 'nose',
      label: 'label-nose'
    },
    {
      tag: 'بخش ۲ از ۵',
      title: 'محفظه هدایت و ناوبری',
      desc: 'قلب هوشمند موشک. این محفظه شامل سیستم‌های GPS پیشرفته، شتاب‌سنج سه‌محوره، ژیروسکوپ لیزری و کامپیوترهای پرواز با پردازنده‌های مقاوم در برابر تشعشعات فضایی است. سیستم بینایی ماشین برای رهگیری هدف استفاده می‌شود.',
      specs: [['دقت GPS', '۲ سانتیمتر'], ['CPU', '۴۰۰ MFLOPS'], ['سنسورها', '۱۲ عدد'], ['ارتباط', 'Ka-band']],
      highlight: 'guidance',
      label: 'label-guidance'
    },
    {
      tag: 'بخش ۳ از ۵',
      title: 'مخزن سوخت کرایوژنیک',
      desc: 'این مخزن دوجداره از هیدروژن مایع (LH2) و اکسیژن مایع (LOX) در دمای منفی ۲۵۳ درجه سانتیگراد نگهداری می‌کند. عایق‌بندی چندلایه از فوم پلی‌یورتان و آینه‌های حرارتی از تبخیر سوخت جلوگیری می‌کند.',
      specs: [['ظرفیت LH2', '۲۱۰ تن'], ['ظرفیت LOX', '۵۴۰ تن'], ['دما', '-۲۵۳°C'], ['فشار', '۳۲ bar']],
      highlight: 'fuel',
      label: 'label-fuel'
    },
    {
      tag: 'بخش ۴ از ۵',
      title: 'کلاستر موتورهای اصلی',
      desc: 'سه موتور RS-۳۲ با چرخه دوم سوختی کامل، هر کدام ۲.۵ میلیون نیوتن رانش تولید می‌کنند. موتورها از رانش‌‌وکتور (TVC) برای کنترل جهت استفاده می‌کنند و می‌توانند تا ۱۵ درجه در هر محور چرخش داشته باشند.',
      specs: [['رانش کل', '۷.۵ MN'], ['Isp', '۳۸۰ ثانیه'], ['فشار محفظه', '۲۰۰ bar'], ['TVC', '±۱۵°']],
      highlight: 'engine',
      label: 'label-engine'
    },
    {
      tag: 'بخش ۵ از ۵',
      title: 'نازل‌های تراست‌وکتور',
      desc: 'نازل‌های بل شکل از سوپرآلیاژ نیکل با کانال‌های خنک‌کاری احیاءکننده ساخته شده‌اند. گازهای داغ (۳۵۰۰ درجه) در این نازل‌ها شتاب می‌گیرند و سرعت خروجی ۴.۵ کیلومتر در ثانیه ایجاد می‌کنند. اعوجاج‌پذیری هیدرولیک دقیق‌ترین کنترل مسیر را ممکن می‌سازد.',
      specs: [['نسبت انبساط', '۷۷:۱'], ['سرعت خروج', '۴.۵ km/s'], ['دمای گاز', '۳۵۰۰°C'], ['جنس', 'Ni سوپرآلیاژ']],
      highlight: 'nozzle',
      label: 'label-nozzle'
    }
  ];

  const highlights = {
    nose: { el: 'hl-nose', fill: 'rgba(155,93,229,0.15)', stroke: 'rgba(199,125,255,0.9)' },
    guidance: { el: 'hl-guidance', fill: 'rgba(72,202,228,0.1)', stroke: 'rgba(72,202,228,0.9)' },
    fuel: { el: 'hl-fuel', fill: 'rgba(22,58,133,0.2)', stroke: 'rgba(72,202,228,0.9)' },
    engine: { el: 'hl-engine', fill: 'rgba(108,63,201,0.15)', stroke: 'rgba(155,93,229,0.9)' },
    nozzle: { el: 'hl-nozzle', fill: 'rgba(232,184,109,0.1)', stroke: 'rgba(232,184,109,0.9)' },
  };

  const infoPanel = document.getElementById('infoPanel');
  const progressBar = document.getElementById('progressBar');
  const stageNav = document.getElementById('stageNav');
  const dots = stageNav.querySelectorAll('.stage-dot');

  let currentStage = 0;

  function clearHighlights() {
    Object.values(highlights).forEach(h => {
      const el = document.getElementById(h.el);
      if (el) {
        el.style.fill = 'rgba(0,0,0,0)';
        el.style.stroke = 'rgba(0,0,0,0)';
      }
    });
  }

  function clearLabels() {
    document.querySelectorAll('.label-box').forEach(l => l.classList.remove('active'));
  }

  function activateHighlight(name) {
    const h = highlights[name];
    if (!h) return;
    const el = document.getElementById(h.el);
    if (el) {
      el.style.fill = h.fill;
      el.style.stroke = h.stroke;
    }
  }

  function updateStage(stage) {
    if (stage === currentStage) return;
    currentStage = stage;

    clearHighlights();
    clearLabels();
    dots.forEach((d, i) => d.classList.toggle('active', i === stage));

    if (stage === 0) {
      infoPanel.classList.remove('active');
      return;
    }

    const data = stages[stage];
    document.getElementById('infoTag').textContent = data.tag;
    document.getElementById('infoTitle').textContent = data.title;
    document.getElementById('infoDesc').textContent = data.desc;

    const specEl = document.getElementById('infoSpec');
    specEl.innerHTML = data.specs.map(([l, v]) =>
      \`<div class="spec-item"><div class="label">\${l}</div><div class="value">\${v}</div></div>\`
    ).join('');

    activateHighlight(data.highlight);
    
    const labelEl = document.getElementById(data.label);
    if (labelEl) labelEl.classList.add('active');

    infoPanel.classList.add('active');
  }

  window.addEventListener('scroll', () => {
    const section = document.getElementById('scrollSection');
    const rect = section.getBoundingClientRect();
    const totalScroll = section.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

    progressBar.style.width = (progress * 100) + '%';

    const stageCount = stages.length;
    const stageProgress = progress * (stageCount - 1);
    const stage = Math.round(stageProgress);
    updateStage(Math.max(0, Math.min(stageCount - 1, stage)));

    const rocketWrap = document.getElementById('rocketWrap');
    const tilt = Math.sin(progress * Math.PI * 2) * 2;
    rocketWrap.style.transform = \`rotate(\${tilt}deg)\`;
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const stage = parseInt(dot.dataset.stage);
      const section = document.getElementById('scrollSection');
      const totalScroll = section.offsetHeight - window.innerHeight;
      const targetProgress = stage / (stages.length - 1);
      const targetScroll = section.offsetTop + targetProgress * totalScroll;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });
  });
<\/script>


`,className:"w-html-embed"})}),S=a=>{const{origin:t,pathname:i,search:r}=new URL(a);return`${t}${i}${r}`},E=n.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),z=({data:a})=>{const{system:t,resources:i,url:r,pageMeta:s}=a,d=S(r),p=n.useMemo(()=>({imageLoader:l,assetBaseUrl:o,resources:i,breakpoints:x,onError:console.error}),[i]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(f.Provider,{value:r,children:e.jsx(E,{pageKey:d,system:t})}),e.jsx(h,{url:r,pageMeta:s,siteName:c,imageLoader:l,assetBaseUrl:o}),e.jsx(b,{children:s.title})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),C=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:l({src:`${o}${y}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},N=Object.freeze(Object.defineProperty({__proto__:null,Head:C},Symbol.toStringTag,{value:"Module"})),G={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-4/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-4/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:N}}};export{G as configValuesSerialized};
