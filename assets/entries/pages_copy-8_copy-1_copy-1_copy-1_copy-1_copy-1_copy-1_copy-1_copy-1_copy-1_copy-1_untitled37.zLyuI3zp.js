import{j as i,r as d,a as s,i as r,R as v,b as f,P as g,c as b,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],u="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=t=>i.jsx("body",{className:"w-element",children:i.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>کامپوننت‌های گرافیکی اضافه</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@200;300;400;700;900&amp;display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Vazirmatn', sans-serif;
    background: #08080e;
    color: #fff;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }

  .section-label {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.3);
    text-transform: uppercase;
    margin-bottom: 32px;
    text-align: center;
  }

  /* ════════════════════════════════════════════
     COMPONENT 4 — ANIMATED FEATURE CARDS
  ════════════════════════════════════════════ */
  .features-section { width: 100%; max-width: 960px; }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 24px;
    overflow: hidden;
  }

  .feat-card {
    position: relative;
    padding: 36px 28px;
    background: #0d0d1a;
    overflow: hidden;
    cursor: default;
    transition: background 0.4s;
  }

  .feat-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at var(--mx,50%) var(--my,50%), var(--clr) 0%, transparent 65%);
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
  }
  .feat-card:hover::before { opacity: 0.12; }

  .feat-icon {
    width: 52px; height: 52px;
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .feat-title {
    font-size: 1rem;
    font-weight: 700;
    color: #e8eaf0;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
  }

  .feat-desc {
    font-size: 0.82rem;
    font-weight: 300;
    color: rgba(232,234,240,0.45);
    line-height: 1.7;
    position: relative;
    z-index: 1;
  }

  .feat-arrow {
    position: absolute;
    bottom: 24px; left: 24px;
    font-size: 1.2rem;
    opacity: 0;
    transform: translateX(8px);
    transition: opacity 0.3s, transform 0.3s;
    z-index: 1;
  }
  .feat-card:hover .feat-arrow { opacity: 1; transform: translateX(0); }

  /* ════════════════════════════════════════════
     COMPONENT 5 — TESTIMONIALS MARQUEE
  ════════════════════════════════════════════ */
  .testimonials-section { width: 100%; overflow: hidden; }

  .marquee-wrap {
    display: flex;
    gap: 20px;
    width: max-content;
    animation: marquee 28s linear infinite;
  }
  .marquee-wrap:hover { animation-play-state: paused; }

  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .testi-card {
    width: 320px;
    flex-shrink: 0;
    background: #111120;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    padding: 28px;
    position: relative;
  }

  .testi-quote {
    font-size: 2.5rem;
    line-height: 1;
    color: rgba(255,255,255,0.08);
    margin-bottom: 12px;
    font-family: serif;
  }

  .testi-text {
    font-size: 0.87rem;
    font-weight: 300;
    color: rgba(255,255,255,0.65);
    line-height: 1.75;
    margin-bottom: 24px;
  }

  .testi-footer {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .testi-avatar {
    width: 40px; height: 40px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
    color: #fff;
    flex-shrink: 0;
  }

  .testi-name { font-size: 0.85rem; font-weight: 700; color: #e8eaf0; }
  .testi-role { font-size: 0.72rem; color: rgba(255,255,255,0.35); margin-top: 2px; }

  .stars { color: #f59e0b; font-size: 0.8rem; letter-spacing: 2px; margin-bottom: 12px; }

  /* ════════════════════════════════════════════
     COMPONENT 6 — TIMELINE
  ════════════════════════════════════════════ */
  .timeline-section { width: 100%; max-width: 700px; }

  .timeline {
    position: relative;
    padding-right: 40px;
  }

  .timeline::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, transparent, #7c3aed 20%, #06b6d4 80%, transparent);
  }

  .tl-item {
    position: relative;
    margin-bottom: 44px;
    animation: fadeRight 0.6s ease both;
  }

  .tl-item:nth-child(1) { animation-delay: 0.1s; }
  .tl-item:nth-child(2) { animation-delay: 0.2s; }
  .tl-item:nth-child(3) { animation-delay: 0.3s; }
  .tl-item:nth-child(4) { animation-delay: 0.4s; }
  .tl-item:nth-child(5) { animation-delay: 0.5s; }

  @keyframes fadeRight {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .tl-dot {
    position: absolute;
    right: -46px;
    top: 4px;
    width: 14px; height: 14px;
    border-radius: 50%;
    border: 2px solid #7c3aed;
    background: #08080e;
    box-shadow: 0 0 12px #7c3aed80;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .tl-item:hover .tl-dot {
    transform: scale(1.4);
    box-shadow: 0 0 20px #7c3aedaa;
  }

  .tl-year {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: #7c3aed;
    margin-bottom: 8px;
  }

  .tl-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #e8eaf0;
    margin-bottom: 6px;
  }

  .tl-body {
    font-size: 0.83rem;
    font-weight: 300;
    color: rgba(232,234,240,0.45);
    line-height: 1.7;
  }

  .tl-badge {
    display: inline-block;
    margin-top: 10px;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 3px 12px;
    border-radius: 100px;
    border: 1px solid;
  }

  /* ════════════════════════════════════════════
     COMPONENT 7 — HERO SPLIT LAYOUT
  ════════════════════════════════════════════ */
  .split-section { width: 100%; max-width: 1000px; }

  .split-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 28px;
    overflow: hidden;
    min-height: 480px;
  }

  .split-left {
    padding: 56px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(135deg, #0d0d20 0%, #0a0a16 100%);
    position: relative;
    overflow: hidden;
  }

  .split-left::after {
    content: '';
    position: absolute;
    width: 350px; height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%);
    bottom: -100px; right: -100px;
    pointer-events: none;
  }

  .split-eyebrow {
    display: flex; align-items: center; gap: 8px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: rgba(124,58,237,0.9);
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .split-eyebrow::before {
    content: '';
    width: 20px; height: 2px;
    background: #7c3aed;
    display: block;
  }

  .split-h1 {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 900;
    line-height: 1.2;
    color: #fff;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .split-h1 em {
    font-style: normal;
    background: linear-gradient(135deg, #a78bfa, #38bdf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .split-p {
    font-size: 0.9rem;
    font-weight: 300;
    color: rgba(255,255,255,0.5);
    line-height: 1.8;
    margin-bottom: 36px;
    position: relative;
    z-index: 1;
  }

  .split-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 13px 28px;
    border-radius: 12px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 8px 24px rgba(124,58,237,0.35);
    width: fit-content;
    position: relative;
    z-index: 1;
  }
  .split-cta:hover { transform: translateY(-3px); box-shadow: 0 14px 32px rgba(124,58,237,0.5); }

  .split-right {
    background: #0d0d1a;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
  }

  .mini-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 14px;
    padding: 18px 20px;
    display
    border-radius: 11px;
    display: flex; align-items: center; justify-px;
    transition: background 0.2s, border-color 0.2s;
    cursor: default;
  }
  .mini-card:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.15); }

  .mini-icon {
    width: 42px; height: 42px;
    border-radius: 11px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .mini-title { font-size: 0.88rem; font-weight: 700; color: #e8eaf0; }
  .mini-sub { font-size: 0.75rem; color: rgba(255,255,255,0.35); margin-top: 3px; }
  .mini-val { margin-right: auto; font-size: 0.9rem; font-weight: 700; }

  /* ════════════════════════════════════════════
     COMPONENT 8 — NEWSLETTER / CTA BANNER
  ════════════════════════════════════════════ */
  .newsletter-section { width: 100%; max-width: 780px; }

  .newsletter-wrap {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    padding: 56px 48px;
    text-align: center;
    background: #0d0d1a;
    border: 1px solid rgba(255,255,255,0.06);
  }

  .nl-bg-circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .nl-bg-circle-1 { width: 400px; height: 400px; background: #7c3aed; opacity: 0.1; top: -150px; right: -100px; }
  .nl-bg-circle-2 { width: 300px; height: 300px; background: #06b6d4; opacity: 0.08; bottom: -100px; left: -80px; }

  .nl-tag {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #a78bfa;
    background: rgba(167,139,250,0.1);
    border: 1px solid rgba(167,139,250,0.2);
    padding: 5px 16px;
    border-radius: 100px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .nl-h2 {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 900;
    color: #fff;
    line-height: 1.25;
    margin-bottom: 12px;
    position: relative;
    z-index: 1;
  }

  .nl-p {
    font-size: 0.88rem;
    font-weight: 300;
    color: rgba(255,255,255,0.45);
    margin-bottom: 32px;
    position: relative;
    z-index: 1;
  }

  .nl-form {
    display: flex;
    gap: 10px;
    max-width: 440px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .nl-input {
    flex: 1;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    padding: 13px 18px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.9rem;
    color: #fff;
    outline: none;
    transition: border-color 0.2s;
  }
  .nl-input::placeholder { color: rgba(255,255,255,0.3); }
  .nl-input:focus { border-color: rgba(124,58,237,0.6); }

  .nl-btn {
    background: linear-gradient(135deg, #7c3aed, #5b21b6);
    color: #fff;
    border: none;
    padding: 13px 24px;
    border-radius: 12px;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    white-space: nowrap;
    box-shadow: 0 6px 20px rgba(124,58,237,0.35);
  }
  .nl-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(124,58,237,0.5); }

  .nl-trust {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 24px;
    position: relative;
    z-index: 1;
  }
  .nl-trust span {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.3);
    display: flex; align-items: center; gap: 5px;
  }
  .nl-trust span::before { content: '✓'; color: #10b981; }

  /* ════════════════════════════════════════════
     COMPONENT 9 — FAQ ACCORDION
  ════════════════════════════════════════════ */
  .faq-section { width: 100%; max-width: 680px; }

  .faq-header {
    text-align: center;
    margin-bottom: 40px;
  }
  .faq-header h2 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 900;
    color: #fff;
    margin-bottom: 10px;
  }
  .faq-header p {
    font-size: 0.88rem;
    font-weight: 300;
    color: rgba(255,255,255,0.4);
  }

  .faq-list { display: flex; flex-direction: column; gap: 8px; }

  .faq-item {
    background: #111120;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 14px;
    overflow: hidden;
    transition: border-color 0.3s;
  }
  .faq-item.open { border-color: rgba(124,58,237,0.35); }

  .faq-q {
    width: 100%;
    background: none;
    border: none;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    color: #e8eaf0;
    text-align: right;
    gap: 16px;
  }

  .faq-icon {
    width: 28px; height: 28px;
    border-radius: 8px;
    background: rgba(124,58,237,0.1);
    border: 1px solid rgba(124,58,237,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem;
    color: #a78bfa;
    flex-shrink: 0;
    transition: transform 0.3s, background 0.3s;
  }
  .faq-item.open .faq-icon { transform: rotate(45deg); background: rgba(124,58,237,0.2); }

  .faq-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(.22,1,.36,1), padding 0.3s;
    padding: 0 24px;
  }
  .faq-item.open .faq-body { max-height: 200px; padding-bottom: 20px; }

  .faq-body p {
    font-size: 0.85rem;
    font-weight: 300;
    color: rgba(255,255,255,0.5);
    line-height: 1.8;
  }

  /* ════════════════════════════════════════════
     COMPONENT 10 — TEAM CARDS
  ════════════════════════════════════════════ */
  .team-section { width: 100%; max-width: 900px; }

  .team-header {
    text-align: center;
    margin-bottom: 48px;
  }
  .team-header h2 {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 900;
    color: #fff;
    margin-bottom: 10px;
  }
  .team-header p { font-size: 0.88rem; font-weight: 300; color: rgba(255,255,255,0.4); }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .team-card {
    background: #111120;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    padding: 28px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, border-color 0.3s;
    cursor: default;
  }
  .team-card:hover { transform: translateY(-6px); border-color: rgba(255,255,255,0.15); }

  .team-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: var(--clr, #7c3aed);
  }

  .team-photo {
    width: 72px; height: 72px;
    border-radius: 50%;
    margin: 0 auto 16px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.8rem;
    font-weight: 900;
    color: #fff;
    position: relative;
  }

  .team-photo::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    border: 2px solid var(--clr, #7c3aed);
    opacity: 0.4;
  }

  .team-name { font-size: 0.92rem; font-weight: 700; color: #e8eaf0; margin-bottom: 4px; }
  .team-role { font-size: 0.73rem; font-weight: 400; color: rgba(255,255,255,0.35); margin-bottom: 16px; }

  .team-socials {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  .social-dot {
    width: 30px; height: 30px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .social-dot:hover { background: rgba(255,255,255,0.12); }

  /* ════════════════════════════════════════════
     COMPONENT 11 — NOTIFICATION STACK
  ════════════════════════════════════════════ */
  .notif-section { width: 100%; max-width: 460px; }

  .notif-list { display: flex; flex-direction: column; gap: 10px; }

  .notif {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: #111120;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 16px 18px;
    position: relative;
    overflow: hidden;
    animation: slideIn 0.5s cubic-bezier(.22,1,.36,1) both;
  }
  .notif:nth-child(1) { animation-delay: 0.1s; }
  .notif:nth-child(2) { animation-delay: 0.2s; }
  .notif:nth-child(3) { animation-delay: 0.3s; }
  .notif:nth-child(4) { animation-delay: 0.4s; }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(20px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .notif::before {
    content: '';
    position: absolute;
    right: 0; top: 0; bottom: 0;
    width: 3px;
    background: var(--nc, #7c3aed);
    border-radius: 0 16px 16px 0;
  }

  .notif-icon-wrap {
    width: 38px; height: 38px;
    border-radius: 10px;
    background: var(--nbg);
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
  }

  .notif-content { flex: 1; }
  .notif-title { font-size: 0.85rem; font-weight: 700; color: #e8eaf0; margin-bottom: 3px; }
  .notif-body { font-size: 0.78rem; font-weight: 300; color: rgba(255,255,255,0.45); line-height: 1.5; }
  .notif-time { font-size: 0.7rem; color: rgba(255,255,255,0.25); margin-top: 6px; }

  .notif-close {
    position: absolute;
    top: 12px; left: 14px;
    width: 20px; height: 20px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
    border: none;
    color: rgba(255,255,255,0.3);
    font-size: 0.7rem;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .notif-close:hover { background: rgba(239,68,68,0.15); color: #ef4444; }

  /* ════════════════════════════════════════════
     COMPONENT 12 — SKILL / PROGRESS RINGS
  ════════════════════════════════════════════ */
  .rings-section { width: 100%; max-width: 840px; }

  .rings-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .ring-card {
    background: #111120;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    padding: 28px 16px;
    text-align: center;
    transition: transform 0.3s;
    cursor: default;
  }
  .ring-card:hover { transform: translateY(-5px); }

  .ring-wrap {
    position: relative;
    width: 90px; height: 90px;
    margin: 0 auto 16px;
  }

  .ring-svg {
    width: 100%; height: 100%;
    transform: rotate(-90deg);
  }

  .ring-bg { fill: none; stroke: rgba(255,255,255,0.05); stroke-width: 6; }
  .ring-fg {
    fill: none;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 220;
    stroke-dashoffset: 220;
    transition: stroke-dashoffset 1.8s cubic-bezier(.22,1,.36,1);
  }

  .ring-num {
    position: absolute;
    inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    font-weight: 900;
    color: #e8eaf0;
  }

  .ring-label { font-size: 0.82rem; font-weight: 700; color: #e8eaf0; margin-bottom: 4px; }
  .ring-sub { font-size: 0.72rem; font-weight: 300; color: rgba(255,255,255,0.35); }

  /* ════════════ RESPONSIVE ════════════ */
  @media (max-width: 700px) {
    .features-grid, .team-grid, .rings-grid { grid-template-columns: repeat(2, 1fr); }
    .split-hero { grid-template-columns: 1fr; }
    .nl-form { flex-direction: column; }
  }
  @media (max-width: 480px) {
    .team-grid, .rings-grid { grid-template-columns: repeat(2, 1fr); }
  }
</style>



<!-- ══════════════════════════
     COMPONENT 4 — FEATURE CARDS
══════════════════════════ -->
<div class="features-section">
  <div class="section-label">کامپوننت ۴ — کارت‌های ویژگی</div>
  <div class="features-grid" id="featGrid">
    <div class="feat-card" style="--clr:#7c3aed">
      <div class="feat-icon" style="background:rgba(124,58,237,0.12); color:#a78bfa">⚡</div>
      <div class="feat-title">سرعت فوق‌العاده</div>
      <div class="feat-desc">بارگذاری زیر یک ثانیه با بهینه‌سازی پیشرفته Edge Network</div>
      <div class="feat-arrow" style="color:#a78bfa">←</div>
    </div>
    <div class="feat-card" style="--clr:#10b981">
      <div class="feat-icon" style="background:rgba(16,185,129,0.12); color:#34d399">🔐</div>
      <div class="feat-title">امنیت سطح بانکی</div>
      <div class="feat-desc">رمزگذاری end-to-end و احراز هویت چندمرحله‌ای برای حفاظت کامل</div>
      <div class="feat-arrow" style="color:#34d399">←</div>
    </div>
    <div class="feat-card" style="--clr:#f59e0b">
      <div class="feat-icon" style="background:rgba(245,158,11,0.12); color:#fbbf24">🤖</div>
      <div class="feat-title">هوش مصنوعی داخلی</div>
      <div class="feat-desc">پیشنهادات هوشمند و اتوماسیون کامل وظایف تکراری با AI</div>
      <div class="feat-arrow" style="color:#fbbf24">←</div>
    </div>
    <div class="feat-card" style="--clr:#06b6d4">
      <div class="feat-icon" style="background:rgba(6,182,212,0.12); color:#22d3ee">🌐</div>
      <div class="feat-title">چند زبانه</div>
      <div class="feat-desc">پشتیبانی از ۳۲ زبان مختلف با ترجمه خودکار و RTL کامل</div>
      <div class="feat-arrow" style="color:#22d3ee">←</div>
    </div>
    <div class="feat-card" style="--clr:#ef4444">
      <div class="feat-icon" style="background:rgba(239,68,68,0.12); color:#f87171">📊</div>
      <div class="feat-title">آنالیتیکس پیشرفته</div>
      <div class="feat-desc">گزارش‌های لحظه‌ای با داشبورد قابل تنظیم و export کامل</div>
      <div class="feat-arrow" style="color:#f87171">←</div>
    </div>
    <div class="feat-card" style="--clr:#8b5cf6">
      <div class="feat-icon" style="background:rgba(139,92,246,0.12); color:#c4b5fd">🔗</div>
      <div class="feat-title">یکپارچه‌سازی آسان</div>
      <div class="feat-desc">اتصال به بیش از ۲۰۰ ابزار محبوب در کمتر از ۵ دقیقه</div>
      <div class="feat-arrow" style="color:#c4b5fd">←</div>
    </div>
  </div>
</div>

<!-- ══════════════════════════
     COMPONENT 5 — TESTIMONIALS MARQUEE
══════════════════════════ -->
<div class="testimonials-section" style="width:100%">
  <div class="section-label">کامپوننت ۵ — نظرات کاربران (اسکرول خودکار)</div>
  <div class="marquee-wrap" id="marquee"></div>
</div>

<!-- ══════════════════════════
     COMPONENT 6 — TIMELINE
══════════════════════════ -->
<div class="timeline-section">
  <div class="section-label">کامپوننت ۶ — تایم‌لاین</div>
  <div class="timeline">
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-year">۱۳۹۹</div>
      <div class="tl-title">تأسیس شرکت</div>
      <div class="tl-body">با یک تیم ۳ نفره و یک ایده ساده، مسیر ما آغاز شد. هدف: ساده‌سازی ابزارهای دیجیتال برای کسب‌وکارهای ایرانی.</div>
      <div class="tl-badge" style="color:#10b981; border-color:rgba(16,185,129,0.3); background:rgba(16,185,129,0.08)">✦ بنیان‌گذاری</div>
    </div>
    <div class="tl-item">
      <div class="tl-dot" style="border-color:#06b6d4; box-shadow: 0 0 12px #06b6d480"></div>
      <div class="tl-year" style="color:#06b6d4">۱۴۰۰</div>
      <div class="tl-title">اولین سرمایه‌گذاری</div>
      <div class="tl-body">جذب ۵۰۰ میلیون تومان سرمایه اولیه و توسعه تیم به ۱۲ نفر. راه‌اندازی نسخه بتا با ۲۰۰ کاربر اولیه.</div>
      <div class="tl-badge" style="color:#06b6d4; border-color:rgba(6,182,212,0.3); background:rgba(6,182,212,0.08)">💰 سرمایه‌گذاری</div>
    </div>
    <div class="tl-item">
      <div class="tl-dot" style="border-color:#f59e0b; box-shadow: 0 0 12px #f59e0b80"></div>
      <div class="tl-year" style="color:#f59e0b">۱۴۰۱</div>
      <div class="tl-title">رشد انفجاری</div>
      <div class="tl-body">عبور از مرز ۵,۰۰۰ کاربر فعال. کسب جایزه بهترین استارتاپ فناوری کشور در جشنواره دیتک.</div>
      <div class="tl-badge" style="color:#f59e0b; border-color:rgba(245,158,11,0.3); background:rgba(245,158,11,0.08)">🏆 افتخار</div>
    </div>
    <div class="tl-item">
      <div class="tl-dot" style="border-color:#8b5cf6; box-shadow: 0 0 12px #8b5cf680"></div>
      <div class="tl-year" style="color:#8b5cf6">۱۴۰۲</div>
      <div class="tl-title">توسعه بین‌المللی</div>
      <div class="tl-body">ورود به بازارهای منطقه MENA و افتتاح دفتر در دبی. انعقاد قرارداد با ۳ شرکت بین‌المللی.</div>
      <div class="tl-badge" style="color:#8b5cf6; border-color:rgba(139,92,246,0.3); background:rgba(139,92,246,0.08)">🌍 جهانی</div>
    </div>
    <div class="tl-item">
      <div class="tl-dot" style="border-color:#ef4444; box-shadow: 0 0 12px #ef444480"></div>
      <div class="tl-year" style="color:#ef4444">۱۴۰۳ — امروز</div>
      <div class="tl-title">نسل جدید با هوش مصنوعی</div>
      <div class="tl-body">معرفی موتور AI داخلی و رسیدن به ۱۲,۰۰۰ کاربر فعال. آینده‌ای روشن‌تر از همیشه در پیش.</div>
      <div class="tl-badge" style="color:#ef4444; border-color:rgba(239,68,68,0.3); background:rgba(239,68,68,0.08)">🚀 اکنون</div>
    </div>
  </div>
</div>

<!-- ══════════════════════════
     COMPONENT 7 — SPLIT HERO
══════════════════════════ -->
<div class="split-section">
  <div class="section-label">کامپوننت ۷ — هیرو دو ستونه</div>
  <div class="split-hero">
    <div class="split-left">
      <div class="split-eyebrow">نسخه ۳.۰ منتشر شد</div>
      <h1 class="split-h1">ابزاری که<br>کسب‌وکار شما را<br><em>متحول می‌کند</em></h1>
      <p class="split-p">با قدرت هوش مصنوعی، تمام فرآیندهای سازمانتان را یکجا مدیریت کنید. سریع‌تر، دقیق‌تر، هوشمندتر.</p>
      <button class="split-cta">شروع رایگان ← </button>
    </div>
    <div class="split-right">
      <div class="mini-card">
        <div class="mini-icon" style="background:rgba(16,185,129,0.12)">📈</div>
        <div>
          <div class="mini-title">درآمد این ماه</div>
          <div class="mini-sub">نسبت به ماه قبل</div>
        </div>
        <span class="mini-val" style="color:#10b981">↑ ۲۳٪</span>
      </div>
      <div class="mini-card">
        <div class="mini-icon" style="background:rgba(59,130,246,0.12)">👥</div>
        <div>
          <div class="mini-title">کاربران جدید امروز</div>
          <div class="mini-sub">در ۲۴ ساعت گذشته</div>
        </div>
        <span class="mini-val" style="color:#3b82f6">+۱۴۷</span>
      </div>
      <div class="mini-card">
        <div class="mini-icon" style="background:rgba(245,158,11,0.12)">⭐</div>
        <div>
          <div class="mini-title">امتیاز رضایت</div>
          <div class="mini-sub">از مجموع نظرات</div>
        </div>
        <span class="mini-val" style="color:#f59e0b">۴.۹/۵</span>
      </div>
      <div class="mini-card">
        <div class="mini-icon" style="background:rgba(139,92,246,0.12)">⚡</div>
        <div>
          <div class="mini-title">سرعت پاسخ‌دهی</div>
          <div class="mini-sub">متوسط سرور</div>
        </div>
        <span class="mini-val" style="color:#8b5cf6">۱۸ms</span>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════
     COMPONENT 8 — NEWSLETTER
══════════════════════════ -->
<div class="newsletter-section">
  <div class="section-label">کامپوننت ۸ — خبرنامه / CTA</div>
  <div class="newsletter-wrap">
    <div class="nl-bg-circle nl-bg-circle-1"></div>
    <div class="nl-bg-circle nl-bg-circle-2"></div>
    <div class="nl-tag">خبرنامه رایگان</div>
    <h2 class="nl-h2">در جریان تازه‌ترین<br>اخبار فناوری باش</h2>
    <p class="nl-p">هر هفته بهترین مقالات، ابزارها و آموزش‌های حوزه فناوری مستقیم توی اینباکست</p>
    <div class="nl-form">
      <input class="nl-input" type="email" placeholder="ایمیل شما ...">
      <button class="nl-btn">عضویت</button>
    </div>
    <div class="nl-trust">
      <span>بدون اسپم</span>
      <span>لغو آسان</span>
      <span>هفته‌ای یک‌بار</span>
    </div>
  </div>
</div>

<!-- ══════════════════════════
     COMPONENT 9 — FAQ
══════════════════════════ -->
<div class="faq-section">
  <div class="section-label">کامپوننت ۹ — سؤالات متداول</div>
  <div class="faq-header">
    <h2>سؤالات متداول</h2>
    <p>پاسخ سریع به رایج‌ترین سؤالات شما</p>
  </div>
  <div class="faq-list">
    <div class="faq-item">
      <button class="faq-q"><span>آیا پلن رایگان محدودیت دارد؟</span><div class="faq-icon">+</div></button>
      <div class="faq-body"><p>بله، پلن رایگان تا ۵ پروژه فعال و ۱ گیگابایت فضای ذخیره‌سازی رایگان در اختیارتان می‌گذارد. برای نیازهای بیشتر می‌توانید به پلن‌های حرفه‌ای ارتقا دهید.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-q"><span>آیا می‌توانم پلنم را هر زمان تغییر دهم؟</span><div class="faq-icon">+</div></button>
      <div class="faq-body"><p>بله، کاملاً آزادانه می‌توانید در هر زمانی پلن خود را ارتقا یا کاهش دهید. تغییرات از ماه بعد اعمال می‌شود و مبلغ مابه‌التفاوت محاسبه خواهد شد.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-q"><span>پشتیبانی به چه صورت است؟</span><div class="faq-icon">+</div></button>
      <div class="faq-body"><p>در پلن‌های حرفه‌ای و سازمانی، پشتیبانی ۲۴/۷ از طریق چت آنلاین، تلفن و ایمیل در دسترس است. پلن رایگان تنها از طریق ایمیل پشتیبانی می‌شود.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-q"><span>آیا امکان تست رایگان پلن پولی وجود دارد؟</span><div class="faq-icon">+</div></button>
      <div class="faq-body"><p>بله! تمام پلن‌های پولی با ۱۴ روز آزمایش رایگان ارائه می‌شوند. نیازی به وارد کردن اطلاعات پرداخت نیست و بدون ریسک می‌توانید همه امکانات را تجربه کنید.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-q"><span>داده‌هایم در کجا ذخیره می‌شوند؟</span><div class="faq-icon">+</div></button>
      <div class="faq-body"><p>داده‌های شما روی سرورهای ایرانی با استانداردهای امنیتی ISO 27001 ذخیره می‌شوند. همچنین بکاپ خودکار روزانه انجام می‌شود.</p></div>
    </div>
  </div>
</div>

<!-- ══════════════════════════
     COMPONENT 10 — TEAM
══════════════════════════ -->
<div class="team-section">
  <div class="section-label">کامپوننت ۱۰ — تیم ما</div>
  <div class="team-header">
    <h2>تیم ما</h2>
    <p>افرادی که پشت این محصول ایستاده‌اند</p>
  </div>
  <div class="team-grid">
    <div class="team-card" style="--clr:#7c3aed">
      <div class="team-photo" style="background:linear-gradient(135deg,#7c3aed,#5b21b6); --clr:#7c3aed">ع</div>
      <div class="team-name">علیرضا احمدی</div>
      <div class="team-role">مدیرعامل و هم‌بنیان‌گذار</div>
      <div class="team-socials">
        <div class="social-dot">in</div>
        <div class="social-dot">tw</div>
      </div>
    </div>
    <div class="team-card" style="--clr:#06b6d4">
      <div class="team-photo" style="background:linear-gradient(135deg,#06b6d4,#0284c7); --clr:#06b6d4">س</div>
      <div class="team-name">سارا نوری</div>
      <div class="team-role">مدیر محصول</div>
      <div class="team-socials">
        <div class="social-dot">in</div>
        <div class="social-dot">tw</div>
      </div>
    </div>
    <div class="team-card" style="--clr:#f59e0b">
      <div class="team-photo" style="background:linear-gradient(135deg,#f59e0b,#d97706); --clr:#f59e0b">م</div>
      <div class="team-name">محمد رضایی</div>
      <div class="team-role">معمار ارشد فنی</div>
      <div class="team-socials">
        <div class="social-dot">gh</div>
        <div class="social-dot">in</div>
      </div>
    </div>
    <div class="team-card" style="--clr:#10b981">
      <div class="team-photo" style="background:linear-gradient(135deg,#10b981,#059669); --clr:#10b981">ن</div>
      <div class="team-name">نازنین کریمی</div>
      <div class="team-role">طراح UI/UX</div>
      <div class="team-socials">
        <div class="social-dot">be</div>
        <div class="social-dot">in</div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════
     COMPONENT 11 — NOTIFICATIONS
══════════════════════════ -->
<div class="notif-section">
  <div class="section-label">کامپوننت ۱۱ — اعلان‌ها</div>
  <div class="notif-list">
    <div class="notif" style="--nc:#10b981; --nbg:rgba(16,185,129,0.1)">
      <div class="notif-icon-wrap">✅</div>
      <div class="notif-content">
        <div class="notif-title">پرداخت موفق</div>
        <div class="notif-body">فاکتور شماره #۱۲۴۵ با موفقیت پردازش شد.</div>
        <div class="notif-time">۲ دقیقه پیش</div>
      </div>
      <button class="notif-close" onclick="this.closest('.notif').remove()">✕</button>
    </div>
    <div class="notif" style="--nc:#3b82f6; --nbg:rgba(59,130,246,0.1)">
      <div class="notif-icon-wrap">👤</div>
      <div class="notif-content">
        <div class="notif-title">کاربر جدید ثبت‌نام کرد</div>
        <div class="notif-body">مهدی علوی به پلتفرم شما ملحق شد.</div>
        <div class="notif-time">۱۵ دقیقه پیش</div>
      </div>
      <button class="notif-close" onclick="this.closest('.notif').remove()">✕</button>
    </div>
    <div class="notif" style="--nc:#f59e0b; --nbg:rgba(245,158,11,0.1)">
      <div class="notif-icon-wrap">⚠️</div>
      <div class="notif-content">
        <div class="notif-title">فضای ذخیره‌سازی رو به اتمام</div>
        <div class="notif-body">۸۵٪ از ظرفیت فضای شما استفاده شده است.</div>
        <div class="notif-time">۱ ساعت پیش</div>
      </div>
      <button class="notif-close" onclick="this.closest('.notif').remove()">✕</button>
    </div>
    <div class="notif" style="--nc:#7c3aed; --nbg:rgba(124,58,237,0.1)">
      <div class="notif-icon-wrap">🚀</div>
      <div class="notif-content">
        <div class="notif-title">به‌روزرسانی جدید</div>
        <div class="notif-body">نسخه ۳.۱ با قابلیت‌های جدید AI منتشر شد.</div>
        <div class="notif-time">۳ ساعت پیش</div>
      </div>
      <button class="notif-close" onclick="this.closest('.notif').remove()">✕</button>
    </div>
  </div>
</div>

<!-- ══════════════════════════
     COMPONENT 12 — SKILL RINGS
══════════════════════════ -->
<div class="rings-section">
  <div class="section-label">کامپوننت ۱۲ — حلقه‌های مهارت</div>
  <div class="rings-grid">
    <div class="ring-card">
      <div class="ring-wrap">
        <svg class="ring-svg" viewBox="0 0 90 90">
          <circle class="ring-bg" cx="45" cy="45" r="35"></circle>
          <circle class="ring-fg" cx="45" cy="45" r="35" stroke="#7c3aed" data-pct="92"></circle>
        </svg>
        <div class="ring-num">۹۲٪</div>
      </div>
      <div class="ring-label">UI Design</div>
      <div class="ring-sub">طراحی رابط</div>
    </div>
    <div class="ring-card">
      <div class="ring-wrap">
        <svg class="ring-svg" viewBox="0 0 90 90">
          <circle class="ring-bg" cx="45" cy="45" r="35"></circle>
          <circle class="ring-fg" cx="45" cy="45" r="35" stroke="#10b981" data-pct="85"></circle>
        </svg>
        <div class="ring-num">۸۵٪</div>
      </div>
      <div class="ring-label">Frontend</div>
      <div class="ring-sub">توسعه فرانت</div>
    </div>
    <div class="ring-card">
      <div class="ring-wrap">
        <svg class="ring-svg" viewBox="0 0 90 90">
          <circle class="ring-bg" cx="45" cy="45" r="35"></circle>
          <circle class="ring-fg" cx="45" cy="45" r="35" stroke="#f59e0b" data-pct="78"></circle>
        </svg>
        <div class="ring-num">۷۸٪</div>
      </div>
      <div class="ring-label">Branding</div>
      <div class="ring-sub">برندینگ</div>
    </div>
    <div class="ring-card">
      <div class="ring-wrap">
        <svg class="ring-svg" viewBox="0 0 90 90">
          <circle class="ring-bg" cx="45" cy="45" r="35"></circle>
          <circle class="ring-fg" cx="45" cy="45" r="35" stroke="#06b6d4" data-pct="95"></circle>
        </svg>
        <div class="ring-num">۹۵٪</div>
      </div>
      <div class="ring-label">Strategy</div>
      <div class="ring-sub">استراتژی</div>
    </div>
  </div>
</div>

<script>
// ── Feature cards mouse glow ──
document.querySelectorAll('.feat-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

// ── Testimonials marquee data ──
const testis = [
  { name: 'رضا محمدی', role: 'مدیر فروش', text: 'واقعاً باورم نمی‌شه این همه قابلیت با این قیمت! تیم پشتیبانی هم عالی بودن.', color: '#7c3aed', initials: 'ر' },
  { name: 'فاطمه احمدی', role: 'طراح گرافیک', text: 'رابط کاربری فوق‌العاده ساده و سریعه. در کمتر از یه هفته کل تیممون باهاش راحت شدن.', color: '#10b981', initials: 'ف' },
  { name: 'حمید کریمی', role: 'مدیرعامل استارتاپ', text: 'از وقتی شروع کردم به استفاده، درآمدم ۳۰٪ بیشتر شده. قطعاً توصیه می‌کنم.', color: '#f59e0b', initials: 'ح' },
  { name: 'مریم نجفی', role: 'فریلنسر', text: 'بهترین سرمایه‌گذاری که برای بیزنسم کردم. ابزارهای AI واقعاً کارم رو راحت کرده.', color: '#ef4444', initials: 'م' },
  { name: 'امیر صادقی', role: 'توسعه‌دهنده', text: 'API خوب، مستندات کامل، و تیم پشتیبانی که واقعاً پاسخ می‌ده. چی بهتر از این؟', color: '#06b6d4', initials: 'ا' },
  { name: 'زهرا موسوی', role: 'مدیر بازاریابی', text: 'داشبورد آنالیتیکس خیلی قوی‌ه. تمام اطلاعاتی که نیاز داشتم یه جا موجوده.', color: '#8b5cf6', initials: 'ز' },
];

const mq = document.getElementById('marquee');
// Duplicate for seamless loop
[...testis, ...testis].forEach(t => {
  const card = document.createElement('div');
  card.className = 'testi-card';
  card.innerHTML = \`
    <div class="stars">★★★★★</div>
    <div class="testi-quote">"</div>
    <div class="testi-text">\${t.text}</div>
    <div class="testi-footer">
      <div class="testi-avatar" style="background:\${t.color}">\${t.initials}</div>
      <div><div class="testi-name">\${t.name}</div><div class="testi-role">\${t.role}</div></div>
    </div>
  \`;
  mq.appendChild(card);
});

// ── FAQ accordion ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Skill Rings animate ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.ring-fg').forEach(circle => {
        const pct = +circle.dataset.pct;
        const circumference = 2 * Math.PI * 35; // r=35
        const offset = circumference * (1 - pct / 100);
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = offset;
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.rings-section').forEach(el => observer.observe(el));
// Trigger immediately if already visible
document.querySelectorAll('.ring-fg').forEach(circle => {
  const pct = +circle.dataset.pct;
  const circumference = 2 * Math.PI * 35;
  const offset = circumference * (1 - pct / 100);
  circle.style.strokeDasharray = circumference;
  setTimeout(() => { circle.style.strokeDashoffset = offset; }, 600);
});
<\/script>


`,className:"w-html-embed"})}),z=t=>{const{origin:e,pathname:o,search:a}=new URL(t);return`${e}${o}${a}`},E=d.memo(({pageKey:t,system:e})=>i.jsx(k,{system:e},t),(t,e)=>t.pageKey===e.pageKey),q=({data:t})=>{const{system:e,resources:o,url:a,pageMeta:n}=t,c=z(a),p=d.useMemo(()=>({imageLoader:r,assetBaseUrl:s,resources:o,breakpoints:h,onError:console.error}),[o]);return i.jsxs(v.Provider,{value:p,children:[i.jsx(f.Provider,{value:a,children:i.jsx(E,{pageKey:c,system:e})}),i.jsx(g,{url:a,pageMeta:n,siteName:l,imageLoader:r,assetBaseUrl:s}),i.jsx(b,{children:n.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),O=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:l};return i.jsxs(i.Fragment,{children:[i.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),i.jsx("link",{rel:"icon",href:r({src:`${s}${u}`})}),y.map(e=>i.jsx("link",{rel:"preload",href:`${s}${e}`,as:"font",crossOrigin:"anonymous"},e)),w.map(e=>i.jsx("link",{rel:"preload",href:`${s}${e}`,as:"image"},e))]})},N=Object.freeze(Object.defineProperty({__proto__:null,Head:O},Symbol.toStringTag,{value:"Module"})),I={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-8/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-8/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:N}}};export{I as configValuesSerialized};
