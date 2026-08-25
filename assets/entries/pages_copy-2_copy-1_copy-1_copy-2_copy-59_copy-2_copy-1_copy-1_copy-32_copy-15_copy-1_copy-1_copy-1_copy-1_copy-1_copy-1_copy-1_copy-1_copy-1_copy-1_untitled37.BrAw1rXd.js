import{j as e,r as d,a as o,i as s,R as m,b as g,P as b,c as h,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",u=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(v,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>جهش سینما | انجمن علمی جهش</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
<style>
:root {
  --bg: #080810;
  --bg2: #0d0d1a;
  --bg3: #121224;
  --card: #14142a;
  --red: #c9182a;
  --red2: #e01f35;
  --gold: #f5c518;
  --blue: #1a5fb4;
  --cyan: #00b4d8;
  --text: #f0f0ff;
  --muted: #8888aa;
  --border: #1e1e3a;
  --nav-h: 68px;
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Vazirmatn', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  min-height: 100vh;
}

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--red); border-radius: 3px; }

/* ======================== NAV ======================== */
#nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  background: rgba(8,8,16,0.92);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  gap: 2rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-mark {
  width: 42px; height: 42px;
  background: linear-gradient(135deg, var(--red), #8b0000);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.3rem;
  box-shadow: 0 4px 20px rgba(201,24,42,0.5);
  position: relative;
  overflow: hidden;
}

.logo-mark::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  transform: skewX(-20deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { left: -100%; }
  20% { left: 150%; }
  100% { left: 150%; }
}

.logo-text { line-height: 1.1; }
.logo-text span:first-child {
  display: block;
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--text);
}
.logo-text span:last-child {
  display: block;
  font-size: 0.68rem;
  color: var(--muted);
  font-weight: 400;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.1rem;
  flex: 1;
  justify-content: center;
}

.nav-links > li { position: relative; }

.nav-links > li > a {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.45rem 0.85rem;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 7px;
  transition: all 0.2s;
  white-space: nowrap;
}

.nav-links > li > a:hover,
.nav-links > li.has-drop:hover > a {
  color: var(--text);
  background: rgba(255,255,255,0.06);
}

.drop-icon { font-size: 0.6rem; opacity: 0.6; transition: transform 0.2s; }
.nav-links > li.has-drop:hover .drop-icon { transform: rotate(180deg); }

.dropdown {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #171730;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 170px;
  box-shadow: 0 25px 70px rgba(0,0,0,0.8);
  animation: dropIn 0.2s ease;
}

@keyframes dropIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.nav-links > li.has-drop:hover .dropdown { display: block; }

.dropdown a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.75rem;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.82rem;
  border-radius: 7px;
  transition: all 0.15s;
}

.dropdown a:hover {
  color: var(--text);
  background: rgba(255,255,255,0.07);
  padding-right: 1rem;
}

.dropdown a .tag {
  margin-right: auto;
  font-size: 0.6rem;
  background: var(--red);
  color: #fff;
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  font-weight: 600;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-shrink: 0;
}

.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-family: 'Vazirmatn', sans-serif;
  font-size: 0.83rem;
  padding: 0.45rem 2.4rem 0.45rem 0.85rem;
  width: 220px;
  outline: none;
  transition: all 0.25s;
  direction: rtl;
}

.search-input::placeholder { color: var(--muted); }
.search-input:focus {
  border-color: var(--red);
  background: rgba(255,255,255,0.07);
  box-shadow: 0 0 0 3px rgba(201,24,42,0.15);
}

.search-icon {
  position: absolute;
  right: 0.75rem;
  color: var(--muted);
  font-size: 0.9rem;
  pointer-events: none;
}

.btn-login {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--muted);
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-family: 'Vazirmatn', sans-serif;
  font-size: 0.83rem;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-login:hover { border-color: var(--muted); color: var(--text); }

.btn-join {
  background: var(--red);
  border: none;
  color: #fff;
  padding: 0.45rem 1.1rem;
  border-radius: 8px;
  font-family: 'Vazirmatn', sans-serif;
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-join:hover { background: var(--red2); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(201,24,42,0.4); }

/* ======================== HERO ======================== */
#hero {
  margin-top: var(--nav-h);
  position: relative;
  height: calc(100vh - var(--nav-h));
  min-height: 540px;
  max-height: 900px;
  overflow: hidden;
}

.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1s ease;
}
.hero-slide.active { opacity: 1; }

.hero-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, rgba(8,8,16,0.97) 0%, rgba(8,8,16,0.75) 50%, rgba(8,8,16,0.2) 100%),
    linear-gradient(to top, rgba(8,8,16,1) 0%, transparent 50%),
    linear-gradient(to bottom, rgba(8,8,16,0.4) 0%, transparent 30%);
}

.hero-body {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  padding: 0 5%;
}

.hero-info {
  max-width: 520px;
  animation: heroIn 0.8s ease backwards;
}

@keyframes heroIn {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

.hero-cats {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.hcat {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.7rem;
  border-radius: 4px;
  letter-spacing: 0.02em;
}
.hcat-red { background: var(--red); color: #fff; }
.hcat-gold { background: var(--gold); color: #000; }
.hcat-outline { background: transparent; border: 1px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.8); }

.hero-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 0.4rem;
  text-shadow: 0 2px 30px rgba(0,0,0,0.8);
}

.hero-en {
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 1rem;
  font-weight: 300;
  letter-spacing: 0.04em;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.65);
}

.hero-meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.hero-stars {
  display: flex;
  gap: 0.2rem;
  color: var(--gold);
  font-size: 0.85rem;
}

.hero-desc {
  font-size: 0.88rem;
  line-height: 1.9;
  color: rgba(255,255,255,0.65);
  margin-bottom: 1.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hero-btns {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-play {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--red);
  color: #fff;
  text-decoration: none;
  padding: 0.8rem 1.8rem;
  border-radius: 9px;
  font-weight: 700;
  font-size: 0.92rem;
  transition: all 0.25s;
  border: none;
  cursor: pointer;
  font-family: 'Vazirmatn', sans-serif;
}
.btn-play:hover { background: var(--red2); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(201,24,42,0.5); }

.btn-dl {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255,255,255,0.08);
  color: var(--text);
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 9px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.25s;
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  cursor: pointer;
  font-family: 'Vazirmatn', sans-serif;
}
.btn-dl:hover { background: rgba(255,255,255,0.14); transform: translateY(-2px); }

.btn-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--muted);
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  border-radius: 9px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s;
  border: 1px solid var(--border);
  cursor: pointer;
  font-family: 'Vazirmatn', sans-serif;
}
.btn-info:hover { color: var(--text); border-color: rgba(255,255,255,0.25); }

/* HERO CONTROLS */
.hero-dots {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 5;
}

.hdot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  cursor: pointer;
  transition: all 0.3s;
  border: none;
}
.hdot.active { background: var(--red); width: 28px; border-radius: 4px; }

.hero-arrows {
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 5;
}

.harrow {
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  color: var(--text);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}
.harrow:hover { background: var(--red); border-color: var(--red); }

/* SLIDE PREVIEW */
.slide-previews {
  position: absolute;
  bottom: 2rem;
  left: 5%;
  display: flex;
  gap: 0.6rem;
  z-index: 5;
}

.slide-prev {
  width: 64px; height: 90px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.25s;
  flex-shrink: 0;
}
.slide-prev.active { border-color: var(--red); }
.slide-prev img { width: 100%; height: 100%; object-fit: cover; }

/* ======================== SECTIONS ======================== */
.section {
  padding: 2.5rem 3rem;
}

.sec-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.4rem;
}

.sec-title {
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.sec-title::before {
  content: '';
  width: 4px; height: 20px;
  background: linear-gradient(to bottom, var(--red), #8b0000);
  border-radius: 2px;
  flex-shrink: 0;
}

.sec-more {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.2s;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  border: 1px solid var(--border);
}
.sec-more:hover { color: var(--red); border-color: var(--red); }

/* GENRE TABS */
.genre-tabs {
  display: flex;
  gap: 0.5rem;
  padding: 0 3rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.gtab {
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.78rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  font-family: 'Vazirmatn', sans-serif;
}
.gtab:hover, .gtab.active { background: var(--red); border-color: var(--red); color: #fff; }

/* GRID */
.grid-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}

.grid-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

/* MOVIE CARD */
.mcard {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: var(--card);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.mcard:hover {
  transform: translateY(-7px) scale(1.02);
  box-shadow: 0 25px 60px rgba(0,0,0,0.8);
  z-index: 5;
}

.mcard-img {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  display: block;
  background: var(--bg3);
}

.mcard-q {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: var(--red);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.18rem 0.45rem;
  border-radius: 4px;
  letter-spacing: 0.03em;
}

.mcard-imdb {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: var(--gold);
  color: #000;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.18rem 0.45rem;
  border-radius: 4px;
}

.mcard-ep {
  position: absolute;
  bottom: 3.5rem;
  right: 0.5rem;
  background: rgba(0,0,0,0.8);
  color: var(--cyan);
  font-size: 0.62rem;
  font-weight: 600;
  padding: 0.18rem 0.45rem;
  border-radius: 4px;
  border: 1px solid rgba(0,180,216,0.3);
}

.mcard-hover {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.25s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.8rem;
}

.mcard:hover .mcard-hover { opacity: 1; }

.mcard-play {
  width: 44px; height: 44px;
  background: var(--red);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 1.2rem;
}
.mcard:hover .mcard-play { transform: translate(-50%, -50%) scale(1); }

.mcard-hover-actions {
  display: flex;
  gap: 0.4rem;
}

.mcard-action {
  flex: 1;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  border-radius: 6px;
  padding: 0.35rem;
  font-family: 'Vazirmatn', sans-serif;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.15s;
  text-align: center;
  text-decoration: none;
  display: block;
}
.mcard-action:hover { background: var(--red); border-color: var(--red); }

.mcard-body {
  padding: 0.65rem;
}

.mcard-name {
  font-size: 0.83rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.3rem;
}

.mcard-sub {
  font-size: 0.7rem;
  color: var(--muted);
  display: flex;
  gap: 0.5rem;
}

/* SERIES CARD (wide) */
.scard {
  display: flex;
  gap: 0;
  background: var(--card);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid var(--border);
}
.scard:hover { transform: translateY(-4px); box-shadow: 0 16px 45px rgba(0,0,0,0.65); border-color: rgba(255,255,255,0.1); }

.scard-img {
  width: 85px;
  flex-shrink: 0;
  object-fit: cover;
  background: var(--bg3);
}

.scard-body {
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.35rem;
  flex: 1;
}

.scard-name {
  font-size: 0.87rem;
  font-weight: 600;
}

.scard-ep {
  font-size: 0.72rem;
  color: var(--red);
  font-weight: 500;
}

.scard-meta {
  font-size: 0.7rem;
  color: var(--muted);
  display: flex;
  gap: 0.5rem;
}

.scard-imdb {
  font-size: 0.7rem;
  color: var(--gold);
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

/* SPECIAL SECTION */
.special-banner {
  margin: 1rem 3rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #0d0d2e 0%, #1a0520 50%, #0d0d2e 100%);
  border: 1px solid var(--border);
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  overflow: hidden;
}

.special-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -20%;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(201,24,42,0.15) 0%, transparent 70%);
  pointer-events: none;
}

.special-banner::after {
  content: '';
  position: absolute;
  bottom: -50%;
  right: -10%;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%);
  pointer-events: none;
}

.special-text h2 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.special-text p {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.7;
}

.special-stats {
  display: flex;
  gap: 2rem;
  flex-shrink: 0;
}

.stat-item {
  text-align: center;
}

.stat-num {
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--red);
  display: block;
  line-height: 1;
}

.stat-lbl {
  font-size: 0.75rem;
  color: var(--muted);
  margin-top: 0.3rem;
}

/* TOP BAR */
.top-bar {
  display: flex;
  gap: 0.5rem;
  padding: 0 3rem;
  margin-bottom: 1.2rem;
  background: var(--bg2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
}

.tbtab {
  padding: 0.85rem 1.1rem;
  color: var(--muted);
  font-size: 0.83rem;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  font-family: 'Vazirmatn', sans-serif;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
}
.tbtab:hover { color: var(--text); }
.tbtab.active { color: var(--red); border-bottom-color: var(--red); }

/* SCROLL SLIDER */
.slider-wrap {
  position: relative;
}

.slider-inner {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0.5rem 3rem 1rem;
  scroll-behavior: smooth;
  scrollbar-width: none;
}
.slider-inner::-webkit-scrollbar { display: none; }

.slider-inner .mcard {
  flex: 0 0 160px;
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px; height: 40px;
  background: rgba(13,13,26,0.9);
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  z-index: 10;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}
.slider-arrow:hover { background: var(--red); border-color: var(--red); }
.slider-arrow.prev { left: 0.5rem; }
.slider-arrow.next { right: 0.5rem; }

/* MOVIE DETAIL MODAL */
.modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  z-index: 2000;
  backdrop-filter: blur(8px);
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.modal-overlay.open { display: flex; }

.modal {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: modalIn 0.3s ease;
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.modal-hero {
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
}

.modal-hero img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

.modal-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg2) 0%, transparent 60%);
}

.modal-close {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 36px; height: 36px;
  background: rgba(0,0,0,0.7);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.modal-close:hover { background: var(--red); border-color: var(--red); }

.modal-body {
  padding: 1.5rem 2rem 2rem;
}

.modal-title {
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
}

.modal-en { font-size: 0.9rem; color: var(--muted); margin-bottom: 1rem; }

.modal-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.modal-tag {
  padding: 0.25rem 0.7rem;
  border-radius: 5px;
  font-size: 0.73rem;
  background: var(--bg3);
  border: 1px solid var(--border);
  color: var(--muted);
}

.modal-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.2rem;
  background: var(--bg3);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid var(--border);
}

.minfo-item { text-align: center; }
.minfo-label { font-size: 0.68rem; color: var(--muted); margin-bottom: 0.3rem; }
.minfo-val { font-size: 0.9rem; font-weight: 600; }

.modal-desc {
  font-size: 0.87rem;
  line-height: 1.9;
  color: rgba(255,255,255,0.7);
  margin-bottom: 1.5rem;
}

.modal-btns {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.dl-options {
  margin-top: 1.5rem;
}

.dl-title {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--muted);
}

.dl-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dl-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.7rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
}
.dl-item:hover { border-color: var(--red); background: rgba(201,24,42,0.05); }

.dl-item-info { display: flex; align-items: center; gap: 0.8rem; }
.dl-quality { font-size: 0.75rem; font-weight: 700; background: var(--red); color: #fff; padding: 0.2rem 0.5rem; border-radius: 4px; }
.dl-size { font-size: 0.78rem; color: var(--muted); }
.dl-format { font-size: 0.75rem; color: var(--cyan); }
.dl-btn { font-size: 0.78rem; color: var(--muted); }

/* COMMENTS */
.comments { padding: 2rem 3rem; }
.comment-form {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.2rem;
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
.comment-avatar {
  width: 40px; height: 40px;
  background: linear-gradient(135deg, var(--red), var(--blue));
  border-radius: 50%;
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}
.comment-input {
  flex: 1;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  padding: 0.6rem 1rem;
  font-family: 'Vazirmatn', sans-serif;
  font-size: 0.85rem;
  resize: none;
  height: 60px;
  outline: none;
  transition: border-color 0.2s;
}
.comment-input:focus { border-color: var(--red); }

/* FOOTER */
footer {
  background: var(--bg2);
  border-top: 1px solid var(--border);
  padding: 3rem;
  margin-top: 3rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-brand { display: flex; flex-direction: column; gap: 1rem; }
.footer-brand p {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.8;
}

.footer-socials {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.social-btn {
  width: 36px; height: 36px;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  text-decoration: none;
}
.social-btn:hover { background: var(--red); border-color: var(--red); color: #fff; }

.footer-col h4 {
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.footer-col a {
  display: block;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.8rem;
  margin-bottom: 0.55rem;
  transition: color 0.2s;
}
.footer-col a:hover { color: var(--red); }

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  font-size: 0.78rem;
  color: var(--muted);
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-badges {
  display: flex;
  gap: 0.5rem;
}

.fbadge {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.3rem 0.7rem;
  font-size: 0.72rem;
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .grid-6 { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 900px) {
  .nav-links { display: none; }
  .section { padding: 1.5rem 1rem; }
  .genre-tabs { padding: 0 1rem; }
  .grid-5, .grid-6 { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .footer-top { grid-template-columns: 1fr 1fr; }
  .hero-info { max-width: 100%; }
  .special-banner { flex-direction: column; }
  .special-stats { justify-content: center; }
  .slider-inner .mcard { flex: 0 0 130px; }
}
@media (max-width: 600px) {
  .grid-5, .grid-6, .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .modal-info { grid-template-columns: repeat(2, 1fr); }
  .footer-top { grid-template-columns: 1fr; }
}

/* SHIMMER LOADING */
.shimmer {
  background: linear-gradient(90deg, var(--card) 25%, var(--bg3) 50%, var(--card) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* NOTICES */
.notice-bar {
  background: linear-gradient(90deg, var(--red), #8b0000);
  padding: 0.5rem 3rem;
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.notice-bar::before {
  content: '🔴';
}

/* SEARCH RESULTS DROPDOWN */
.search-results {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background: #171730;
  border: 1px solid var(--border);
  border-radius: 10px;
  margin-top: 5px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  z-index: 100;
  max-height: 300px;
  overflow-y: auto;
}

.search-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  transition: background 0.15s;
}
.search-item:hover { background: rgba(255,255,255,0.05); }

.search-item img {
  width: 36px; height: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.search-item-info { flex: 1; }
.search-item-name { font-size: 0.83rem; font-weight: 500; }
.search-item-meta { font-size: 0.72rem; color: var(--muted); }
</style>



<!-- NOTICE BAR -->
<div class="notice-bar">
  به سینمای انجمن علمی جهش خوش آمدید · اعضای انجمن از ۳۰٪ تخفیف دانلود برخوردار می‌شوند
</div>

<!-- NAV -->
<nav id="nav">
  <a href="#" class="nav-logo">
    <div class="logo-mark">🎬</div>
    <div class="logo-text">
      <span>جهش سینما</span>
      <span>انجمن علمی جهش</span>
    </div>
  </a>

  <ul class="nav-links">
    <li class="has-drop">
      <a href="#">فیلم خارجی <span class="drop-icon">▼</span></a>
      <div class="dropdown">
        <a href="#">💥 اکشن</a>
        <a href="#">👻 ترسناک</a>
        <a href="#">🇮🇳 هندی</a>
        <a href="#">⚔️ جنگی</a>
        <a href="#">🎭 درام</a>
        <a href="#">😂 کمدی</a>
        <a href="#">🚀 تخیلی</a>
        <a href="#">❤️ عاشقانه</a>
        <a href="#">⚡ هیجان انگیز</a>
        <a href="#" style="color: var(--red); font-weight: 600; margin-top: 0.3rem;">📽 همه فیلم‌های خارجی</a>
      </div>
    </li>
    <li class="has-drop">
      <a href="#">فیلم ایرانی <span class="drop-icon">▼</span></a>
      <div class="dropdown">
        <a href="#">😂 کمدی</a>
        <a href="#">👻 ترسناک</a>
        <a href="#">⚔️ دفاع مقدس</a>
        <a href="#">👨‍👩‍👧 خانوادگی</a>
        <a href="#">🥋 رزمی</a>
      </div>
    </li>
    <li class="has-drop">
      <a href="#">سریال <span class="drop-icon">▼</span></a>
      <div class="dropdown">
        <a href="#">🌍 سریال خارجی</a>
        <a href="#">🇹🇷 سریال ترکی</a>
        <a href="#">🇰🇷 سریال کره‌ای <span class="tag">HOT</span></a>
        <a href="#">🔥 اکشن</a>
        <a href="#">🎭 درام</a>
        <a href="#">🕵️ جنایی</a>
        <a href="#">🚀 تخیلی</a>
      </div>
    </li>
    <li><a href="#">🎨 انیمیشن</a></li>
    <li><a href="#">🗣 دوبله فارسی</a></li>
    <li><a href="#">⛩ انیمه</a></li>
    <li class="has-drop">
      <a href="#">⭐ بهترین‌ها <span class="drop-icon">▼</span></a>
      <div class="dropdown">
        <a href="#">🏆 ۲۵۰ فیلم برتر IMDb</a>
        <a href="#">🦸 فیلم‌های Marvel</a>
        <a href="#">🦇 فیلم‌های DC</a>
        <a href="#">📦 کالکشن</a>
        <a href="#">🔜 به زودی</a>
      </div>
    </li>
    <li class="has-drop">
      <a href="#">📅 سال <span class="drop-icon">▼</span></a>
      <div class="dropdown">
        <a href="#">2025 <span class="tag">NEW</span></a>
        <a href="#">2024</a>
        <a href="#">2023</a>
        <a href="#">2022</a>
        <a href="#">2021</a>
        <a href="#">2020</a>
      </div>
    </li>
    <li><a href="#">📞 ارتباط با ما</a></li>
  </ul>

  <div class="nav-actions">
    <div class="search-wrap" style="position:relative">
      <span class="search-icon">🔍</span>
      <input class="search-input" type="text" placeholder="جستجو فیلم، سریال، انیمیشن..." id="searchInput">
      <div class="search-results" id="searchResults"></div>
    </div>
    <button class="btn-login" onclick="alert('صفحه ورود')">ورود</button>
    <button class="btn-join" onclick="alert('صفحه ثبت نام')">عضویت</button>
  </div>
</nav>

<!-- HERO SLIDER -->
<section id="hero">
  <div id="heroSlides">
    <div class="hero-slide active" data-id="0">
      <img class="hero-img" src="https://image.tmdb.org/t/p/original/5WJnJqiMqGmTpDJRQ9qKDTZVf7i.jpg" alt="Dune 2" onerror="this.src='https://picsum.photos/1920/900?random=1'">
      <div class="hero-gradient"></div>
      <div class="hero-body">
        <div class="hero-info">
          <div class="hero-cats">
            <span class="hcat hcat-gold">⭐ ۸.۰</span>
            <span class="hcat hcat-red">BluRay 4K</span>
            <span class="hcat hcat-outline">اکشن</span>
            <span class="hcat hcat-outline">تخیلی</span>
            <span class="hcat hcat-outline">۲۰۲۴</span>
          </div>
          <h1 class="hero-title">دون: بخش دوم</h1>
          <p class="hero-en">Dune: Part Two (2024)</p>
          <div class="hero-meta">
            <span class="hero-meta-item">🎬 دنی ویلنوو</span>
            <span class="hero-meta-item">⏱ ۱۶۶ دقیقه</span>
            <span class="hero-meta-item">🌐 زیرنویس + دوبله</span>
          </div>
          <p class="hero-desc">پل آترایدیس در مسیر انتقام از توطئه‌گرانی که خانواده‌اش را نابود کرده‌اند با چانی و فرمن‌ها متحد می‌شود. اما میان عشق به چانی و سرنوشت کیهانی خود گیر می‌افتد و باید بزرگترین تصمیم زندگی‌اش را بگیرد.</p>
          <div class="hero-btns">
            <button class="btn-play" onclick="openModal(0)">▶ تماشای آنلاین</button>
            <button class="btn-dl" onclick="openModal(0)">⬇ دانلود فیلم</button>
            <button class="btn-info" onclick="openModal(0)">ℹ اطلاعات بیشتر</button>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-slide" data-id="1">
      <img class="hero-img" src="https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" alt="Oppenheimer" onerror="this.src='https://picsum.photos/1920/900?random=2'">
      <div class="hero-gradient"></div>
      <div class="hero-body">
        <div class="hero-info">
          <div class="hero-cats">
            <span class="hcat hcat-gold">⭐ ۸.۳</span>
            <span class="hcat hcat-red">BluRay 4K</span>
            <span class="hcat hcat-outline">درام</span>
            <span class="hcat hcat-outline">تاریخی</span>
          </div>
          <h1 class="hero-title">اوپنهایمر</h1>
          <p class="hero-en">Oppenheimer (2023)</p>
          <div class="hero-meta">
            <span class="hero-meta-item">🎬 کریستوفر نولان</span>
            <span class="hero-meta-item">⏱ ۱۸۰ دقیقه</span>
            <span class="hero-meta-item">🏆 ۷ جایزه اسکار</span>
          </div>
          <p class="hero-desc">داستان زندگی ج. رابرت اوپنهایمر، فیزیکدان آمریکایی که با رهبری پروژه منهتن، اولین سلاح هسته‌ای تاریخ را ساخت. شاهکار کریستوفر نولان در بازآفرینی یکی از مهم‌ترین لحظات تاریخ بشریت.</p>
          <div class="hero-btns">
            <button class="btn-play" onclick="openModal(1)">▶ تماشای آنلاین</button>
            <button class="btn-dl" onclick="openModal(1)">⬇ دانلود فیلم</button>
            <button class="btn-info" onclick="openModal(1)">ℹ اطلاعات بیشتر</button>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-slide" data-id="2">
      <img class="hero-img" src="https://image.tmdb.org/t/p/original/oIkQkEkwfmcG7IGpRR1NB8frZZM.jpg" alt="Gladiator 2" onerror="this.src='https://picsum.photos/1920/900?random=3'">
      <div class="hero-gradient"></div>
      <div class="hero-body">
        <div class="hero-info">
          <div class="hero-cats">
            <span class="hcat hcat-gold">⭐ ۷.۵</span>
            <span class="hcat hcat-red">1080p</span>
            <span class="hcat hcat-outline">اکشن</span>
            <span class="hcat hcat-outline">حماسی</span>
          </div>
          <h1 class="hero-title">گلادیاتور ۲</h1>
          <p class="hero-en">Gladiator II (2024)</p>
          <div class="hero-meta">
            <span class="hero-meta-item">🎬 ریدلی اسکات</span>
            <span class="hero-meta-item">⏱ ۱۴۸ دقیقه</span>
            <span class="hero-meta-item">🌐 دوبله فارسی</span>
          </div>
          <p class="hero-desc">سال‌ها پس از مرگ ماکسیموس، لوسیوس فرزند لوسیلا و نوه مارکوس اورلیوس در گوشه‌ای دور از روم زندگی می‌کرد. حالا باید به قلب امپراتوری بازگردد و برای آزادی بجنگد.</p>
          <div class="hero-btns">
            <button class="btn-play" onclick="openModal(2)">▶ تماشای آنلاین</button>
            <button class="btn-dl" onclick="openModal(2)">⬇ دانلود فیلم</button>
            <button class="btn-info" onclick="openModal(2)">ℹ اطلاعات بیشتر</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-dots">
    <button class="hdot active" onclick="goSlide(0)"></button>
    <button class="hdot" onclick="goSlide(1)"></button>
    <button class="hdot" onclick="goSlide(2)"></button>
  </div>

  <div class="hero-arrows">
    <button class="harrow" onclick="prevSlide()">▲</button>
    <button class="harrow" onclick="nextSlide()">▼</button>
  </div>
</section>

<!-- SPECIAL BANNER -->
<div class="special-banner">
  <div class="special-text">
    <h2>🎓 ویژه اعضای انجمن علمی جهش</h2>
    <p>با عضویت در انجمن علمی جهش به بیش از ۵۰۰۰ فیلم و سریال با کیفیت عالی دسترسی داشته باشید.<br>دانلود نامحدود، تماشای آنلاین ۴K و پشتیبانی ۲۴ ساعته.</p>
  </div>
  <div class="special-stats">
    <div class="stat-item">
      <span class="stat-num">+۵۰۰۰</span>
      <div class="stat-lbl">فیلم و سریال</div>
    </div>
    <div class="stat-item">
      <span class="stat-num">۴K</span>
      <div class="stat-lbl">بالاترین کیفیت</div>
    </div>
    <div class="stat-item">
      <span class="stat-num">رایگان</span>
      <div class="stat-lbl">برای اعضا</div>
    </div>
  </div>
  <button class="btn-join" style="padding: 0.9rem 2rem; font-size: 0.95rem;" onclick="alert('ثبت نام در انجمن')">همین الان عضو شو</button>
</div>

<!-- TOP BAR TABS -->
<div style="margin-top: 2.5rem;">
  <div class="top-bar">
    <button class="tbtab active" onclick="activateTab(this, 'latest')">🔥 جدیدترین‌ها</button>
    <button class="tbtab" onclick="activateTab(this, 'top')">⭐ پرامتیازترین</button>
    <button class="tbtab" onclick="activateTab(this, 'popular')">👁 پربازدید</button>
    <button class="tbtab" onclick="activateTab(this, 'dubbed')">🗣 دوبله فارسی</button>
    <button class="tbtab" onclick="activateTab(this, 'iranian')">🇮🇷 فیلم ایرانی</button>
    <button class="tbtab" onclick="activateTab(this, 'series')">📺 سریال</button>
    <button class="tbtab" onclick="activateTab(this, 'anime')">⛩ انیمه</button>
  </div>
</div>

<!-- GENRE FILTER -->
<div class="genre-tabs">
  <a href="#" class="gtab active" onclick="filterGenre(this)">همه</a>
  <a href="#" class="gtab" onclick="filterGenre(this)">اکشن</a>
  <a href="#" class="gtab" onclick="filterGenre(this)">درام</a>
  <a href="#" class="gtab" onclick="filterGenre(this)">کمدی</a>
  <a href="#" class="gtab" onclick="filterGenre(this)">ترسناک</a>
  <a href="#" class="gtab" onclick="filterGenre(this)">تخیلی</a>
  <a href="#" class="gtab" onclick="filterGenre(this)">عاشقانه</a>
  <a href="#" class="gtab" onclick="filterGenre(this)">هیجان انگیز</a>
  <a href="#" class="gtab" onclick="filterGenre(this)">جنگی</a>
  <a href="#" class="gtab" onclick="filterGenre(this)">انیمیشن</a>
</div>

<!-- LATEST MOVIES -->
<section class="section">
  <div class="sec-head">
    <h2 class="sec-title">جدیدترین فیلم‌ها</h2>
    <a href="#" class="sec-more">مشاهده همه ←</a>
  </div>
  <div class="grid-6" id="latestMovies"></div>
</section>

<!-- SLIDER: NEW EPISODES -->
<section class="section" style="padding-bottom: 0;">
  <div class="sec-head" style="padding: 0 0 0 3rem; margin: 0; padding-right: 0;">
    <h2 class="sec-title">آخرین قسمت‌های سریال</h2>
    <a href="#" class="sec-more" style="margin-left: 3rem;">مشاهده همه ←</a>
  </div>
</section>
<div class="slider-wrap">
  <button class="slider-arrow prev" onclick="slideScroll('seriesSlider', -1)">‹</button>
  <div class="slider-inner" id="seriesSlider"></div>
  <button class="slider-arrow next" onclick="slideScroll('seriesSlider', 1)">›</button>
</div>

<!-- SECTION: SERIES GRID -->
<section class="section">
  <div class="sec-head">
    <h2 class="sec-title">سریال‌های پرطرفدار</h2>
    <a href="#" class="sec-more">مشاهده همه ←</a>
  </div>
  <div class="grid-4" id="seriesGrid"></div>
</section>

<!-- ANIMATIONS -->
<section class="section" style="background: rgba(255,255,255,0.012); border-radius: 16px; margin: 0 1rem;">
  <div class="sec-head">
    <h2 class="sec-title">انیمیشن و انیمه</h2>
    <a href="#" class="sec-more">مشاهده همه ←</a>
  </div>
  <div class="grid-5" id="animGrid"></div>
</section>

<!-- IMDB TOP 250 -->
<section class="section">
  <div class="sec-head">
    <h2 class="sec-title" style="--accent: var(--gold)">⭐ ۲۵۰ فیلم برتر IMDb</h2>
    <a href="#" class="sec-more">مشاهده همه ←</a>
  </div>
  <div class="grid-6" id="imdbGrid"></div>
</section>

<!-- IRANIAN MOVIES -->
<section class="section" style="background: rgba(255,255,255,0.012); border-radius: 16px; margin: 0 1rem 0;">
  <div class="sec-head">
    <h2 class="sec-title">🇮🇷 فیلم‌های ایرانی</h2>
    <a href="#" class="sec-more">مشاهده همه ←</a>
  </div>
  <div class="grid-5" id="iranGrid"></div>
</section>

<!-- DUBBED MOVIES -->
<section class="section">
  <div class="sec-head">
    <h2 class="sec-title">🗣 دوبله فارسی</h2>
    <a href="#" class="sec-more">مشاهده همه ←</a>
  </div>
  <div class="grid-6" id="dubbedGrid"></div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="nav-logo" style="text-decoration: none; display: flex; align-items: center; gap: 0.6rem;">
        <div class="logo-mark" style="width: 36px; height: 36px; font-size: 1rem;">🎬</div>
        <div class="logo-text">
          <span style="font-size: 1rem;">جهش سینما</span>
          <span>انجمن علمی جهش</span>
        </div>
      </div>
      <p>مرجع دانلود و تماشای آنلاین فیلم و سریال با کیفیت عالی. ویژه اعضای انجمن علمی جهش با امکانات کامل و پشتیبانی شبانه‌روزی.</p>
      <div class="footer-socials">
        <a href="#" class="social-btn" title="تلگرام">✈️</a>
        <a href="#" class="social-btn" title="اینستاگرام">📸</a>
        <a href="#" class="social-btn" title="یوتیوب">▶️</a>
        <a href="#" class="social-btn" title="واتساپ">💬</a>
      </div>
    </div>

    <div class="footer-col">
      <h4>فیلم‌ها</h4>
      <a href="#">فیلم خارجی</a>
      <a href="#">فیلم ایرانی</a>
      <a href="#">دوبله فارسی</a>
      <a href="#">انیمیشن</a>
      <a href="#">فیلم هندی</a>
      <a href="#">250 فیلم برتر IMDb</a>
    </div>

    <div class="footer-col">
      <h4>سریال‌ها</h4>
      <a href="#">سریال خارجی</a>
      <a href="#">سریال ترکی</a>
      <a href="#">سریال کره‌ای</a>
      <a href="#">انیمه</a>
      <a href="#">مینی سریال</a>
    </div>

    <div class="footer-col">
      <h4>سایر</h4>
      <a href="#">درباره انجمن جهش</a>
      <a href="#">قوانین استفاده</a>
      <a href="#">حریم خصوصی</a>
      <a href="#">ارتباط با ما</a>
      <a href="#">گزارش خرابی</a>
      <a href="#">پیشنهاد فیلم</a>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© ۱۴۰۴ انجمن علمی جهش · جهش سینما · تمامی حقوق محفوظ است</p>
    <div class="footer-badges">
      <span class="fbadge">🔒 SSL امن</span>
      <span class="fbadge">📱 سازگار با موبایل</span>
    </div>
  </div>
</footer>

<!-- MODAL -->
<div class="modal-overlay" id="modalOverlay" onclick="closeModalOnBg(event)">
  <div class="modal" id="modalBox">
    <div class="modal-hero">
      <img id="modalBg" src="" alt="">
      <div class="modal-hero-overlay"></div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <h2 class="modal-title" id="modalTitle"></h2>
      <p class="modal-en" id="modalEn"></p>
      <div class="modal-tags" id="modalTags"></div>
      <div class="modal-info" id="modalInfo"></div>
      <p class="modal-desc" id="modalDesc"></p>
      <div class="modal-btns">
        <button class="btn-play">▶ تماشای آنلاین</button>
        <button class="btn-dl">⬇ دانلود</button>
        <button class="btn-info" onclick="closeModal()">✕ بستن</button>
      </div>
      <div class="dl-options">
        <div class="dl-title">لینک‌های دانلود:</div>
        <div class="dl-list" id="modalDlLinks"></div>
      </div>
    </div>
  </div>
</div>

<script>
// ===== DATA =====
const movies = [
  { id: 0, title: 'دون: بخش دوم', en: 'Dune: Part Two', year: '2024', imdb: '8.0', quality: '4K', genre: 'اکشن', runtime: '۱۶۶', director: 'دنی ویلنوو', poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg', bg: 'https://image.tmdb.org/t/p/original/5WJnJqiMqGmTpDJRQ9qKDTZVf7i.jpg', desc: 'پل آترایدیس در مسیر انتقام از توطئه‌گرانی که خانواده‌اش را نابود کرده‌اند با چانی و فرمن‌ها متحد می‌شود.' },
  { id: 1, title: 'اوپنهایمر', en: 'Oppenheimer', year: '2023', imdb: '8.3', quality: '4K', genre: 'درام', runtime: '۱۸۰', director: 'کریستوفر نولان', poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', bg: 'https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg', desc: 'داستان زندگی فیزیکدانی که بمب اتمی را ساخت و عذاب وجدانش را تا آخر عمر با خود حمل کرد.' },
  { id: 2, title: 'گلادیاتور ۲', en: 'Gladiator II', year: '2024', imdb: '7.5', quality: '1080p', genre: 'اکشن', runtime: '۱۴۸', director: 'ریدلی اسکات', poster: 'https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg', bg: 'https://image.tmdb.org/t/p/original/oIkQkEkwfmcG7IGpRR1NB8frZZM.jpg', desc: 'نوه مارکوس اورلیوس برای آزادی روم به قلب امپراتوری بازمی‌گردد.' },
  { id: 3, title: 'ددپول و ولورین', en: 'Deadpool & Wolverine', year: '2024', imdb: '7.8', quality: '1080p', genre: 'اکشن', runtime: '۱۲۷', director: 'شان لوی', poster: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg', bg: 'https://image.tmdb.org/t/p/original/dg7NuKDjmS7GwJCvFTgWlsIhqki.jpg', desc: 'ددپول و ولورین برای نجات چندجهانی به هم می‌پیوندند.' },
  { id: 4, title: 'آلیون: رموس', en: 'Alien: Romulus', year: '2024', imdb: '7.3', quality: '1080p', genre: 'ترسناک', runtime: '۱۱۹', director: 'فده آلوارز', poster: 'https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg', bg: '', desc: 'گروهی از جوانان در یک ایستگاه فضایی متروکه با موجودات وحشتناکی روبرو می‌شوند.' },
  { id: 5, title: 'هزار و یک شب', en: 'Fly Me to the Moon', year: '2024', imdb: '6.9', quality: '720p', genre: 'کمدی', runtime: '۱۳۲', director: 'گرگ برلانتی', poster: 'https://image.tmdb.org/t/p/w500/9pCCCqbNAp3LQrFdDU7XQEckjSn.jpg', bg: '', desc: 'کمدی رمانتیک در دوران فضاپیمایی آپولو.' },
  { id: 6, title: 'جنگ داخلی', en: 'Civil War', year: '2024', imdb: '7.2', quality: '1080p', genre: 'هیجان انگیز', runtime: '۱۰۹', director: 'الکس گارلند', poster: 'https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg', bg: '', desc: 'گروهی از روزنامه‌نگاران در آمریکای دچار جنگ داخلی.' },
  { id: 7, title: 'تسونامی', en: 'Twisters', year: '2024', imdb: '7.0', quality: '1080p', genre: 'اکشن', runtime: '۱۲۲', director: 'لی آیزاک چونگ', poster: 'https://image.tmdb.org/t/p/w500/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg', bg: '', desc: 'تعقیب طوفان‌های مرگبار در اوکلاهما.' },
  { id: 8, title: 'وانام', en: 'Moana 2', year: '2024', imdb: '6.9', quality: '1080p', genre: 'انیمیشن', runtime: '۱۰۰', director: 'داوید جی. ديرک', poster: 'https://image.tmdb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg', bg: '', desc: 'موآنا در ماجرایی جدید به اعماق اقیانوس می‌رود.' },
  { id: 9, title: 'اشباح', en: 'Longlegs', year: '2024', imdb: '6.4', quality: '1080p', genre: 'ترسناک', runtime: '۱۰۱', director: 'اوسگود پرکینز', poster: 'https://image.tmdb.org/t/p/w500/dfqSYLdQDrjgUBRfpQVvt2jzChW.jpg', bg: '', desc: 'بازرس FBI یک قاتل سریالی مرموز را دنبال می‌کند.' },
  { id: 10, title: 'ترانسفورمرز یک', en: 'Transformers One', year: '2024', imdb: '7.1', quality: '1080p', genre: 'انیمیشن', runtime: '۱۰۴', director: 'جاش کولی', poster: 'https://image.tmdb.org/t/p/w500/qbkAqmmEIZfrCO8ZQAuIuVMlWmV.jpg', bg: '', desc: 'داستان آغاز رابطه اپتیموس پرایم و مگاترون.' },
  { id: 11, title: 'رستگاری در شاوشنک', en: 'Shawshank Redemption', year: '1994', imdb: '9.3', quality: '4K', genre: 'درام', runtime: '۱۴۲', director: 'فرانک دارابونت', poster: 'https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg', bg: '', desc: 'دو زندانی در جریان سال‌ها با هم پیوند دوستی می‌بندند.' },
];

const seriesData = [
  { id: 100, title: 'شوگون', en: 'Shogun S1', year: '2024', imdb: '8.6', quality: '4K', ep: 'قسمت ۱۰ از ۱۰', poster: 'https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg4tCMByOBEj.jpg' },
  { id: 101, title: 'هاوس آف دراگون ۲', en: 'House of the Dragon S2', year: '2024', imdb: '8.0', quality: '1080p', ep: 'قسمت ۸ از ۸', poster: 'https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg' },
  { id: 102, title: 'افتاوت', en: 'Fallout S1', year: '2024', imdb: '8.5', quality: '4K', ep: 'قسمت ۸ از ۸', poster: 'https://image.tmdb.org/t/p/w500/AnsSKr0TpQNFEiRoSb6g3nMYUmR.jpg' },
  { id: 103, title: 'خرس', en: 'The Bear S3', year: '2024', imdb: '8.6', quality: '1080p', ep: 'قسمت ۱۰ از ۱۰', poster: 'https://image.tmdb.org/t/p/w500/sHm9FYVXqLBBbVrjA2m3YFu0sTA.jpg' },
  { id: 104, title: 'رینگز آف پاور ۲', en: 'Rings of Power S2', year: '2024', imdb: '6.9', quality: '4K', ep: 'قسمت ۸ از ۸', poster: 'https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg' },
  { id: 105, title: 'آندور ۲', en: 'Andor S2', year: '2024', imdb: '8.4', quality: '4K', ep: 'قسمت ۶', poster: 'https://image.tmdb.org/t/p/w500/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg' },
  { id: 106, title: 'ساکسشن', en: 'Succession S4', year: '2023', imdb: '9.3', quality: '4K', ep: 'قسمت ۱۰ از ۱۰', poster: 'https://image.tmdb.org/t/p/w500/jToFtMKKDNMqF5u0d5IYIVQQ9eN.jpg' },
  { id: 107, title: 'عروسک روسی ۲', en: 'Russian Doll S2', year: '2022', imdb: '7.5', quality: '1080p', ep: 'قسمت ۷ از ۷', poster: 'https://image.tmdb.org/t/p/w500/yEQBqEBbdHoCEhH4IVW1TH4LDxW.jpg' },
];

const anims = [
  { id: 200, title: 'اینساید اوت ۲', en: 'Inside Out 2', year: '2024', imdb: '7.5', quality: '4K', poster: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg' },
  { id: 201, title: 'موآنا ۲', en: 'Moana 2', year: '2024', imdb: '6.9', quality: '1080p', poster: 'https://image.tmdb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg' },
  { id: 202, title: 'ترانسفورمرز یک', en: 'Transformers One', year: '2024', imdb: '7.1', quality: '1080p', poster: 'https://image.tmdb.org/t/p/w500/qbkAqmmEIZfrCO8ZQAuIuVMlWmV.jpg' },
  { id: 203, title: 'دمو', en: 'Demon Slayer: Hashira', year: '2024', imdb: '8.7', quality: '1080p', poster: 'https://image.tmdb.org/t/p/w500/bHJhJoT4KXQB3bBblSN2djOTYHV.jpg' },
  { id: 204, title: 'ونپیس', en: 'One Piece Film: Red', year: '2022', imdb: '7.1', quality: '4K', poster: 'https://image.tmdb.org/t/p/w500/At67D9995g7sEBdh0P3gid0REME.jpg' },
];

const imdbTop = [
  { id: 300, title: 'رستگاری در شاوشنک', en: 'Shawshank Redemption', year: '1994', imdb: '9.3', quality: '4K', poster: 'https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg' },
  { id: 301, title: 'پ<\/script>`,className:"w-html-embed"})}),z=a=>{const{origin:r,pathname:i,search:t}=new URL(a);return`${r}${i}${t}`},j=d.memo(({pageKey:a,system:r})=>e.jsx(k,{system:r},a),(a,r)=>a.pageKey===r.pageKey),S=({data:a})=>{const{system:r,resources:i,url:t,pageMeta:n}=a,c=z(t),p=d.useMemo(()=>({imageLoader:s,assetBaseUrl:o,resources:i,breakpoints:u,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(g.Provider,{value:t,children:e.jsx(j,{pageKey:c,system:r})}),e.jsx(b,{url:t,pageMeta:n,siteName:l,imageLoader:s,assetBaseUrl:o}),e.jsx(h,{children:n.title})]})},I=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),E=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${o}${x}`})}),y.map(r=>e.jsx("link",{rel:"preload",href:`${o}${r}`,as:"font",crossOrigin:"anonymous"},r)),w.map(r=>e.jsx("link",{rel:"preload",href:`${o}${r}`,as:"image"},r))]})},O=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:O}}};export{A as configValuesSerialized};
