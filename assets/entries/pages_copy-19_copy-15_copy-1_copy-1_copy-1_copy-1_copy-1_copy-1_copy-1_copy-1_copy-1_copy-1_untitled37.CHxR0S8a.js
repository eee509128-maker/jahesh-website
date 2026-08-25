import{j as e,r as l,a as s,i,R as m,b as f,P as g,c as h,d as u}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(v,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VORTEX — Beyond Reality</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&amp;family=Vazirmatn:wght@100;300;700&amp;display=swap" rel="stylesheet">
<style>
  :root {
    --c1: #0a0a0f;
    --c2: #ff2d6b;
    --c3: #00f5d4;
    --c4: #7b2fff;
    --c5: #ffd60a;
    --glow1: 0 0 30px #ff2d6b88, 0 0 80px #ff2d6b44;
    --glow2: 0 0 30px #00f5d488, 0 0 80px #00f5d444;
    --glow3: 0 0 30px #7b2fff88, 0 0 80px #7b2fff44;
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--c1);
    color: #fff;
    font-family: 'Vazirmatn', sans-serif;
    overflow-x: hidden;
    cursor: none;
  }

  /* CUSTOM CURSOR */
  #cursor {
    width: 12px; height: 12px;
    background: var(--c3);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none; z-index: 9999;
    transition: transform 0.1s;
    mix-blend-mode: difference;
  }
  #cursor-trail {
    width: 40px; height: 40px;
    border: 1px solid var(--c2);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none; z-index: 9998;
    transition: all 0.15s ease;
    mix-blend-mode: difference;
  }

  /* CANVAS BACKGROUND */
  #bg-canvas {
    position: fixed; inset: 0;
    z-index: 0;
    opacity: 0.6;
  }

  /* GLITCH OVERLAY */
  .glitch-overlay {
    position: fixed; inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,245,212,0.02) 2px,
      rgba(0,245,212,0.02) 4px
    );
    z-index: 1;
    pointer-events: none;
    animation: scanlines 8s linear infinite;
  }
  @keyframes scanlines {
    0% { background-position: 0 0; }
    100% { background-position: 0 100px; }
  }

  /* NOISE GRAIN */
  .noise {
    position: fixed; inset: -50%;
    width: 200%; height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.04;
    z-index: 2;
    pointer-events: none;
    animation: grain 0.5s steps(1) infinite;
  }
  @keyframes grain {
    0%,100%{transform:translate(0,0)} 10%{transform:translate(-2%,-3%)} 20%{transform:translate(3%,1%)}
    30%{transform:translate(-1%,4%)} 40%{transform:translate(4%,-2%)} 50%{transform:translate(-3%,3%)}
    60%{transform:translate(2%,-4%)} 70%{transform:translate(-4%,2%)} 80%{transform:translate(3%,-1%)} 90%{transform:translate(-2%,4%)}
  }

  /* MAIN WRAPPER */
  .wrapper { position: relative; z-index: 10; }

  /* NAV */
  nav {
    position: fixed; top: 0; right: 0; left: 0;
    padding: 1.5rem 3rem;
    display: flex; align-items: center; justify-content: space-between;
    z-index: 100;
    background: linear-gradient(to bottom, rgba(10,10,15,0.9), transparent);
    backdrop-filter: blur(10px);
  }
  .logo {
    font-family: 'Orbitron', monospace;
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    background: linear-gradient(90deg, var(--c2), var(--c3), var(--c4));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200%;
    animation: shimmer 3s linear infinite;
  }
  @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

  nav ul { list-style: none; display: flex; gap: 2.5rem; }
  nav a {
    text-decoration: none;
    color: rgba(255,255,255,0.6);
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: relative;
    transition: color 0.3s;
  }
  nav a::after {
    content: '';
    position: absolute; bottom: -4px; left: 0; right: 0;
    height: 1px;
    background: var(--c3);
    transform: scaleX(0);
    transition: transform 0.3s;
    box-shadow: var(--glow2);
  }
  nav a:hover { color: var(--c3); }
  nav a:hover::after { transform: scaleX(1); }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 6rem 2rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .hero-eyebrow {
    font-size: 0.75rem;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: var(--c2);
    margin-bottom: 1.5rem;
    animation: fadeInUp 1s 0.2s both;
  }

  .hero h1 {
    font-family: 'Orbitron', monospace;
    font-size: clamp(3rem, 12vw, 10rem);
    font-weight: 900;
    line-height: 0.9;
    letter-spacing: -0.02em;
    animation: fadeInUp 1s 0.4s both;
    position: relative;
  }

  .hero h1 .line1 {
    display: block;
    background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero h1 .line2 {
    display: block;
    background: linear-gradient(135deg, var(--c2), var(--c4));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    filter: drop-shadow(0 0 30px var(--c2));
    animation: fadeInUp 1s 0.6s both, pulseGlow 3s ease-in-out infinite;
  }
  @keyframes pulseGlow {
    0%,100% { filter: drop-shadow(0 0 20px var(--c2)); }
    50% { filter: drop-shadow(0 0 60px var(--c2)) drop-shadow(0 0 100px var(--c4)); }
  }

  .hero-sub {
    margin-top: 2rem;
    font-size: 1.1rem;
    color: rgba(255,255,255,0.4);
    max-width: 500px;
    line-height: 2;
    animation: fadeInUp 1s 0.8s both;
    font-weight: 100;
    letter-spacing: 0.05em;
  }

  .hero-cta {
    margin-top: 3rem;
    display: flex; gap: 1.5rem;
    animation: fadeInUp 1s 1s both;
    flex-wrap: wrap; justify-content: center;
  }

  .btn-primary {
    padding: 1rem 2.5rem;
    background: transparent;
    border: 1px solid var(--c2);
    color: var(--c2);
    font-family: 'Orbitron', monospace;
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: color 0.3s;
    clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  }
  .btn-primary::before {
    content: '';
    position: absolute; inset: 0;
    background: var(--c2);
    transform: translateX(-110%);
    transition: transform 0.3s;
  }
  .btn-primary:hover { color: #000; }
  .btn-primary:hover::before { transform: translateX(0); }
  .btn-primary span { position: relative; }

  .btn-secondary {
    padding: 1rem 2.5rem;
    background: rgba(0,245,212,0.05);
    border: 1px solid rgba(0,245,212,0.2);
    color: var(--c3);
    font-family: 'Orbitron', monospace;
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    cursor: pointer;
    transition: all 0.3s;
    clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  }
  .btn-secondary:hover {
    background: rgba(0,245,212,0.15);
    box-shadow: var(--glow2);
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* FLOATING SHAPES */
  .float-shape {
    position: absolute;
    pointer-events: none;
  }
  .shape-ring {
    width: 300px; height: 300px;
    border: 1px solid rgba(255,45,107,0.2);
    border-radius: 50%;
    animation: rotate 20s linear infinite;
  }
  .shape-ring.r2 {
    width: 500px; height: 500px;
    border-color: rgba(0,245,212,0.1);
    animation: rotate 35s linear infinite reverse;
    top: 10%; right: -10%;
  }
  .shape-ring.r3 {
    width: 200px; height: 200px;
    border-color: rgba(123,47,255,0.3);
    animation: rotate 15s linear infinite;
    bottom: 20%; left: 5%;
  }
  @keyframes rotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

  .shape-diamond {
    width: 60px; height: 60px;
    background: transparent;
    border: 1px solid var(--c5);
    transform: rotate(45deg);
    animation: float 6s ease-in-out infinite;
    opacity: 0.4;
  }
  @keyframes float {
    0%,100% { transform: rotate(45deg) translateY(0); }
    50% { transform: rotate(45deg) translateY(-20px); }
  }

  /* STATS STRIP */
  .stats-strip {
    padding: 4rem 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: rgba(255,255,255,0.05);
    position: relative;
  }
  .stat-item {
    padding: 3rem 2rem;
    background: var(--c1);
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
  }
  .stat-item::before {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--c2), transparent);
    transform: scaleX(0);
    transition: transform 0.5s;
  }
  .stat-item:hover::before { transform: scaleX(1); }
  .stat-item:hover { background: rgba(255,45,107,0.05); }

  .stat-num {
    font-family: 'Orbitron', monospace;
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--c3), var(--c4));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .stat-label {
    font-size: 0.75rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
  }

  /* FEATURES */
  .features {
    padding: 8rem 3rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  .section-header {
    margin-bottom: 5rem;
    display: flex; align-items: flex-end; justify-content: space-between;
  }
  .section-label {
    font-size: 0.7rem;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: var(--c4);
    margin-bottom: 1rem;
    display: block;
  }
  .section-title {
    font-family: 'Orbitron', monospace;
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
  }
  .section-title em {
    font-style: normal;
    color: var(--c3);
    text-shadow: 0 0 30px var(--c3);
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2.5rem;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    position: relative;
    overflow: hidden;
    transition: all 0.4s;
    cursor: default;
  }
  .feature-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(0,245,212,0.08) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .feature-card:hover::before { opacity: 1; }
  .feature-card:hover {
    border-color: rgba(0,245,212,0.2);
    transform: translateY(-5px);
  }

  .feature-icon {
    width: 50px; height: 50px;
    margin-bottom: 1.5rem;
    position: relative;
  }
  .feature-icon svg { width: 100%; height: 100%; }

  .feature-num {
    position: absolute;
    top: 2rem; right: 2rem;
    font-family: 'Orbitron', monospace;
    font-size: 4rem;
    font-weight: 900;
    color: rgba(255,255,255,0.03);
    line-height: 1;
  }

  .feature-card h3 {
    font-family: 'Orbitron', monospace;
    font-size: 1rem;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }
  .feature-card p {
    color: rgba(255,255,255,0.4);
    font-size: 0.9rem;
    line-height: 1.8;
  }
  .feature-card.large {
    grid-column: span 2;
    display: flex; gap: 2rem; align-items: center;
  }

  /* MARQUEE */
  .marquee-section {
    padding: 3rem 0;
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    background: rgba(255,45,107,0.03);
  }
  .marquee-track {
    display: flex;
    animation: marquee 20s linear infinite;
    white-space: nowrap;
  }
  .marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 2rem;
    padding: 0 3rem;
    font-family: 'Orbitron', monospace;
    font-size: 0.8rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
  }
  .marquee-dot {
    width: 6px; height: 6px;
    background: var(--c2);
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 10px var(--c2);
  }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

  /* SHOWCASE */
  .showcase {
    padding: 8rem 3rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  .showcase-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px 300px;
    gap: 1.5rem;
  }
  .showcase-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .showcase-item:first-child { grid-row: span 2; }

  .showcase-img {
    width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(123,47,255,0.3), rgba(255,45,107,0.3));
    display: flex; align-items: center; justify-content: center;
    font-family: 'Orbitron', monospace;
    font-size: 3rem;
    font-weight: 900;
    transition: transform 0.6s cubic-bezier(0.23,1,0.32,1);
    position: relative;
    overflow: hidden;
  }
  .showcase-item:nth-child(2) .showcase-img {
    background: linear-gradient(135deg, rgba(0,245,212,0.2), rgba(123,47,255,0.4));
  }
  .showcase-item:nth-child(3) .showcase-img {
    background: linear-gradient(135deg, rgba(255,214,10,0.2), rgba(255,45,107,0.4));
  }
  .showcase-item:hover .showcase-img { transform: scale(1.05); }
  .showcase-img::after {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%);
  }

  .showcase-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 2rem;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.4s;
  }
  .showcase-item:hover .showcase-overlay { opacity: 1; transform: translateY(0); }
  .showcase-overlay h3 { font-family: 'Orbitron', monospace; font-size: 1.2rem; }
  .showcase-overlay span { font-size: 0.75rem; color: var(--c3); letter-spacing: 0.2em; margin-bottom: 0.5rem; display: block; }

  /* CONTACT */
  .contact-section {
    padding: 8rem 3rem;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .contact-form {
    margin-top: 3rem;
    display: flex; flex-direction: column; gap: 1rem;
  }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-field {
    padding: 1rem 1.5rem;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    color: #fff;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.9rem;
    outline: none;
    transition: all 0.3s;
    resize: none;
    direction: rtl;
  }
  .form-field:focus {
    border-color: var(--c3);
    box-shadow: 0 0 20px rgba(0,245,212,0.1);
    background: rgba(0,245,212,0.03);
  }
  .form-field::placeholder { color: rgba(255,255,255,0.2); }
  textarea.form-field { height: 150px; }

  /* FOOTER */
  footer {
    padding: 3rem;
    border-top: 1px solid rgba(255,255,255,0.05);
    display: flex; align-items: center; justify-content: space-between;
    color: rgba(255,255,255,0.2);
    font-size: 0.8rem;
    letter-spacing: 0.1em;
  }

  /* SCROLL INDICATOR */
  .scroll-indicator {
    position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
    animation: fadeInUp 1s 1.5s both;
    font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase;
    color: rgba(255,255,255,0.3);
  }
  .scroll-line {
    width: 1px; height: 60px;
    background: linear-gradient(to bottom, var(--c3), transparent);
    animation: scrollAnim 2s ease-in-out infinite;
  }
  @keyframes scrollAnim {
    0%,100% { transform: scaleY(0); transform-origin: top; }
    50% { transform: scaleY(1); transform-origin: top; }
    51% { transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .stats-strip { grid-template-columns: repeat(2, 1fr); }
    .feature-grid { grid-template-columns: 1fr; }
    .feature-card.large { grid-column: span 1; flex-direction: column; }
    .showcase-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
    .showcase-item:first-child { grid-row: span 1; height: 300px; }
    .form-row { grid-template-columns: 1fr; }
    nav ul { display: none; }
    .section-header { flex-direction: column; gap: 1rem; }
  }

  /* ANIMATED BORDER on some elements */
  .animated-border {
    position: relative;
  }
  .animated-border::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    background: linear-gradient(var(--c1), var(--c1)) padding-box,
                linear-gradient(90deg, var(--c2), var(--c4), var(--c3), var(--c2)) border-box;
    background-size: 300% 100%;
    animation: borderMove 4s linear infinite;
  }
  @keyframes borderMove {
    0% { background-position: 0% 0%; }
    100% { background-position: 300% 0%; }
  }

  /* HEX decoration */
  .hex-deco {
    position: absolute;
    font-family: 'Orbitron', monospace;
    font-size: 0.6rem;
    color: rgba(0,245,212,0.15);
    letter-spacing: 0.1em;
    pointer-events: none;
    user-select: none;
  }
</style>



<canvas id="bg-canvas"></canvas>
<div class="glitch-overlay"></div>
<div class="noise"></div>
<div id="cursor"></div>
<div id="cursor-trail"></div>

<div class="wrapper">

  <!-- NAV -->
  <nav>
    <div class="logo">VORTEX</div>
    <ul>
      <li><a href="#features">ویژگی‌ها</a></li>
      <li><a href="#showcase">نمونه‌کار</a></li>
      <li><a href="#contact">تماس</a></li>
    </ul>
    <button class="btn-primary" style="padding:0.6rem 1.5rem; font-size:0.7rem;"><span>شروع کنید</span></button>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <!-- Floating shapes -->
    <div class="float-shape shape-ring" style="top:15%;left:5%"></div>
    <div class="float-shape shape-ring r2"></div>
    <div class="float-shape shape-ring r3"></div>
    <div class="float-shape shape-diamond" style="top:30%;right:15%"></div>
    <div class="float-shape shape-diamond" style="bottom:30%;left:20%;animation-delay:-3s;width:30px;height:30px;border-color:var(--c3)"></div>

    <div class="hex-deco" style="top:20%;left:8%">◈ 00FF D4 ◈</div>
    <div class="hex-deco" style="top:60%;right:6%">◈ FF 2D 6B ◈</div>

    <p class="hero-eyebrow">⬡ فراتر از واقعیت ⬡</p>
    <h1>
      <span class="line1">BEYOND</span>
      <span class="line2">REALITY</span>
    </h1>
    <p class="hero-sub">تجربه‌ای که هرگز ندیده‌اید. طراحی که مرزهای دیجیتال را درهم می‌شکند.</p>
    <div class="hero-cta">
      <button class="btn-primary"><span>اکتشاف کنید →</span></button>
      <button class="btn-secondary">درباره ما</button>
    </div>

    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      اسکرول
    </div>
  </section>

  <!-- STATS -->
  <div class="stats-strip">
    <div class="stat-item">
      <span class="stat-num" data-target="999">0</span>
      <span class="stat-label">پروژه موفق</span>
    </div>
    <div class="stat-item">
      <span class="stat-num" data-target="50">0</span>
      <span class="stat-label">کشور جهانی</span>
    </div>
    <div class="stat-item">
      <span class="stat-num" data-target="128">0</span>
      <span class="stat-label">جایزه بین‌المللی</span>
    </div>
    <div class="stat-item">
      <span class="stat-num" data-target="24">0</span>
      <span class="stat-label">ساعت پشتیبانی</span>
    </div>
  </div>

  <!-- MARQUEE -->
  <div class="marquee-section">
    <div class="marquee-track">
      <span class="marquee-item"><span class="marquee-dot"></span> طراحی گرافیک <span class="marquee-dot"></span> توسعه وب <span class="marquee-dot"></span> هوش مصنوعی <span class="marquee-dot"></span> واقعیت مجازی <span class="marquee-dot"></span> انیمیشن ۳بعدی <span class="marquee-dot"></span> تجربه کاربری <span class="marquee-dot"></span> برندسازی آینده <span class="marquee-dot"></span></span>
      <span class="marquee-item"><span class="marquee-dot"></span> طراحی گرافیک <span class="marquee-dot"></span> توسعه وب <span class="marquee-dot"></span> هوش مصنوعی <span class="marquee-dot"></span> واقعیت مجازی <span class="marquee-dot"></span> انیمیشن ۳بعدی <span class="marquee-dot"></span> تجربه کاربری <span class="marquee-dot"></span> برندسازی آینده <span class="marquee-dot"></span></span>
    </div>
  </div>

  <!-- FEATURES -->
  <section class="features" id="features">
    <div class="section-header">
      <div>
        <span class="section-label">قابلیت‌ها</span>
        <h2 class="section-title">ابزاری که <em>دنیا را</em><br>متحول می‌کند</h2>
      </div>
    </div>
    <div class="feature-grid">
      <div class="feature-card large animated-border">
        <div>
          <div class="feature-num">01</div>
          <div class="feature-icon">
            <svg viewBox="0 0 50 50" fill="none">
              <polygon points="25,5 45,40 5,40" stroke="#ff2d6b" stroke-width="1.5" fill="rgba(255,45,107,0.1)"></polygon>
              <circle cx="25" cy="25" r="8" stroke="#ff2d6b" stroke-width="1" fill="rgba(255,45,107,0.05)"></circle>
            </svg>
          </div>
          <h3>موتور رندر کوانتومی</h3>
          <p>با استفاده از الگوریتم‌های نسل آینده، تصاویری می‌سازیم که چشم انسان هرگز چنین وضوحی را تجربه نکرده. هر پیکسل محاسبه‌ای فراتر از فیزیک معمولی.</p>
        </div>
      </div>
      <div class="feature-card">
        <div class="feature-num">02</div>
        <div class="feature-icon">
          <svg viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="20" stroke="#00f5d4" stroke-width="1" stroke-dasharray="5 3"></circle>
            <circle cx="25" cy="25" r="10" stroke="#00f5d4" stroke-width="1" fill="rgba(0,245,212,0.1)"></circle>
            <circle cx="25" cy="5" r="3" fill="#00f5d4"></circle>
          </svg>
        </div>
        <h3>هوش تطبیقی</h3>
        <p>سیستم ما یاد می‌گیرد و با ذوق شما هماهنگ می‌شود.</p>
      </div>
      <div class="feature-card">
        <div class="feature-num">03</div>
        <div class="feature-icon">
          <svg viewBox="0 0 50 50" fill="none">
            <rect x="10" y="10" width="30" height="30" stroke="#7b2fff" stroke-width="1" fill="rgba(123,47,255,0.1)" transform="rotate(15 25 25)"></rect>
            <rect x="15" y="15" width="20" height="20" stroke="#7b2fff" stroke-width="1" fill="none" transform="rotate(-15 25 25)"></rect>
          </svg>
        </div>
        <h3>فضای چندبعدی</h3>
        <p>طراحی در ابعادی که قبلاً وجود نداشت. فراتر از ۳D.</p>
      </div>
      <div class="feature-card">
        <div class="feature-num">04</div>
        <div class="feature-icon">
          <svg viewBox="0 0 50 50" fill="none">
            <path d="M10 40 Q25 10 40 40" stroke="#ffd60a" stroke-width="2" fill="rgba(255,214,10,0.1)"></path>
            <circle cx="25" cy="20" r="5" fill="#ffd60a" opacity="0.5"></circle>
          </svg>
        </div>
        <h3>انرژی بیوفوتونیک</h3>
        <p>رنگ‌هایی که از طبیعت الهام گرفته‌اند و با بیولوژی انسان هماهنگ‌اند.</p>
      </div>
      <div class="feature-card">
        <div class="feature-num">05</div>
        <div class="feature-icon">
          <svg viewBox="0 0 50 50" fill="none">
            <line x1="5" y1="25" x2="45" y2="25" stroke="#ff2d6b" stroke-width="1"></line>
            <line x1="25" y1="5" x2="25" y2="45" stroke="#00f5d4" stroke-width="1"></line>
            <circle cx="25" cy="25" r="15" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="3 3"></circle>
          </svg>
        </div>
        <h3>شبکه عصبی خلاق</h3>
        <p>ایده شما را می‌فهمیم، نه فقط اجرا می‌کنیم.</p>
      </div>
    </div>
  </section>

  <!-- SHOWCASE -->
  <section class="showcase" id="showcase">
    <div class="section-header">
      <div>
        <span class="section-label">نمونه‌کارها</span>
        <h2 class="section-title">خلق <em>ناممکن</em></h2>
      </div>
    </div>
    <div class="showcase-grid">
      <div class="showcase-item">
        <div class="showcase-img">
          ⬡
        </div>
        <div class="showcase-overlay">
          <span>طراحی دیجیتال</span>
          <h3>پروژه آرکادیا</h3>
        </div>
      </div>
      <div class="showcase-item">
        <div class="showcase-img" style="font-size:2rem">◈</div>
        <div class="showcase-overlay">
          <span>هوش مصنوعی</span>
          <h3>سیستم نورا</h3>
        </div>
      </div>
      <div class="showcase-item">
        <div class="showcase-img" style="font-size:2rem">△</div>
        <div class="showcase-overlay">
          <span>واقعیت مجازی</span>
          <h3>دنیای موازی</h3>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact-section" id="contact">
    <span class="section-label">با ما در ارتباط باشید</span>
    <h2 class="section-title">آماده‌اید تا <em>جهان</em> را تغییر دهید؟</h2>
    <form class="contact-form">
      <div class="form-row">
        <input class="form-field" type="text" placeholder="نام شما">
        <input class="form-field" type="email" placeholder="ایمیل">
      </div>
      <input class="form-field" type="text" placeholder="موضوع پروژه">
      <textarea class="form-field" placeholder="پیام خود را بنویسید..."></textarea>
      <button class="btn-primary" type="submit" style="align-self:flex-start;padding:1.2rem 3rem"><span>ارسال پیام ←</span></button>
    </form>
  </section>

  <!-- FOOTER -->
  <footer>
    <span class="logo" style="font-size:1rem">VORTEX</span>
    <span>© 2026 — همه حقوق محفوظ است</span>
    <span>ساخته با ♦ برای آینده</span>
  </footer>

</div>

<script>
  // CANVAS PARTICLE SYSTEM
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let connections = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); initParticles(); });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
      const colors = ['255,45,107','0,245,212','123,47,255','255,214,10'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.pulse = Math.random() * Math.PI * 2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.pulse += 0.02;
      const a = this.alpha + Math.sin(this.pulse) * 0.1;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      return a;
    }
    draw() {
      const a = this.update();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = \`rgba(\${this.color},\${a})\`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 12000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }
  initParticles();

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const alpha = (1 - dist / 150) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = \`rgba(0,245,212,\${alpha})\`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawConnections();
    particles.forEach(p => p.draw());
    requestAnimationFrame(animate);
  }
  animate();

  // CUSTOM CURSOR
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursor-trail');
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 6 + 'px';
    cursor.style.top = my - 6 + 'px';
    setTimeout(() => {
      trail.style.left = mx - 20 + 'px';
      trail.style.top = my - 20 + 'px';
    }, 80);
  });
  document.querySelectorAll('a,button,.feature-card,.showcase-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
  });

  // FEATURE CARD MOUSE EFFECT
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });

  // COUNTER ANIMATION
  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { el.textContent = target; clearInterval(timer); return; }
      el.textContent = Math.floor(start);
    }, 16);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-target]').forEach(el => observer.observe(el));

  // SCROLL REVEAL
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .showcase-item, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(el);
  });

  // VORTEX WARP on hero
  document.querySelector('.hero').addEventListener('mousemove', e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    document.querySelector('.hero h1').style.transform = 
      \`perspective(600px) rotateY(\${x * 8}deg) rotateX(\${-y * 5}deg)\`;
  });
  document.querySelector('.hero').addEventListener('mouseleave', () => {
    document.querySelector('.hero h1').style.transform = '';
    document.querySelector('.hero h1').style.transition = 'transform 0.5s ease';
  });
<\/script>


`,className:"w-html-embed"})}),E=a=>{const{origin:t,pathname:o,search:r}=new URL(a);return`${t}${o}${r}`},z=l.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),S=({data:a})=>{const{system:t,resources:o,url:r,pageMeta:n}=a,d=E(r),p=l.useMemo(()=>({imageLoader:i,assetBaseUrl:s,resources:o,breakpoints:b,onError:console.error}),[o]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(f.Provider,{value:r,children:e.jsx(z,{pageKey:d,system:t})}),e.jsx(g,{url:r,pageMeta:n,siteName:c,imageLoader:i,assetBaseUrl:s}),e.jsx(h,{children:n.title})]})},O=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${s}${y}`})}),x.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),q={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-19/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:O}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-19/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{q as configValuesSerialized};
