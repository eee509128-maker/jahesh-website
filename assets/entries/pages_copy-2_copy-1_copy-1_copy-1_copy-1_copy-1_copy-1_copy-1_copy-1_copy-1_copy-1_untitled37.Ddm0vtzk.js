import{j as t,r as d,a as i,i as s,R as b,b as h,P as x,c as g,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",u=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],z=a=>t.jsx("body",{className:"w-element",children:t.jsx(f,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hero Section - کامپوننت ۱</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;300;400;700;900&amp;display=swap" rel="stylesheet">
<style>
  :root {
    --ink: #0a0a12;
    --glow: #7c3aed;
    --accent: #f59e0b;
    --frost: rgba(255,255,255,0.06);
    --border: rgba(255,255,255,0.12);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Vazirmatn', sans-serif;
    background: var(--ink);
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── Particle Canvas ── */
  #canvas {
    position: fixed;
    inset: 0;
    z-index: 0;
  }

  /* ── Mesh Gradient Orbs ── */
  .orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.35;
    animation: drift 14s ease-in-out infinite alternate;
    z-index: 0;
  }
  .orb-1 { width: 600px; height: 600px; background: #7c3aed; top: -150px; right: -150px; animation-delay: 0s; }
  .orb-2 { width: 450px; height: 450px; background: #0ea5e9; bottom: -100px; left: -100px; animation-delay: -5s; }
  .orb-3 { width: 300px; height: 300px; background: #f59e0b; bottom: 20%; right: 25%; animation-delay: -9s; }

  @keyframes drift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(40px, 30px) scale(1.08); }
  }

  /* ── Glass Card ── */
  .card {
    position: relative;
    z-index: 10;
    background: var(--frost);
    border: 1px solid var(--border);
    border-radius: 28px;
    padding: 64px 72px;
    max-width: 700px;
    text-align: center;
    backdrop-filter: blur(28px) saturate(160%);
    -webkit-backdrop-filter: blur(28px) saturate(160%);
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.04),
      0 32px 80px rgba(0,0,0,0.5),
      inset 0 1px 0 rgba(255,255,255,0.1);
    animation: rise 1s cubic-bezier(.22,1,.36,1) both;
  }

  @keyframes rise {
    from { opacity: 0; transform: translateY(40px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* ── Badge ── */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(124,58,237,0.2);
    border: 1px solid rgba(124,58,237,0.4);
    color: #c4b5fd;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 28px;
    animation: rise 1s 0.15s cubic-bezier(.22,1,.36,1) both;
  }
  .badge::before { content: '✦'; color: var(--accent); font-size: 10px; }

  /* ── Heading ── */
  h1 {
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    font-weight: 900;
    line-height: 1.15;
    color: #fff;
    margin-bottom: 20px;
    animation: rise 1s 0.25s cubic-bezier(.22,1,.36,1) both;
  }

  h1 span {
    background: linear-gradient(135deg, #a78bfa 0%, #f59e0b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.05rem;
    font-weight: 300;
    color: rgba(255,255,255,0.55);
    line-height: 1.8;
    margin-bottom: 40px;
    animation: rise 1s 0.35s cubic-bezier(.22,1,.36,1) both;
  }

  /* ── Buttons ── */
  .btns {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    animation: rise 1s 0.45s cubic-bezier(.22,1,.36,1) both;
  }

  .btn-primary {
    background: linear-gradient(135deg, #7c3aed, #5b21b6);
    color: #fff;
    border: none;
    padding: 14px 36px;
    border-radius: 14px;
    font-family: 'Vazirmatn', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 8px 30px rgba(124,58,237,0.4);
  }
  .btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(124,58,237,0.55); }
  .btn-primary:hover::after { opacity: 1; }

  .btn-secondary {
    background: transparent;
    color: rgba(255,255,255,0.75);
    border: 1px solid rgba(255,255,255,0.18);
    padding: 14px 36px;
    border-radius: 14px;
    font-family: 'Vazirmatn', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    backdrop-filter: blur(8px);
  }
  .btn-secondary:hover { border-color: rgba(255,255,255,0.4); color: #fff; background: rgba(255,255,255,0.06); }

  /* ── Stats Row ── */
  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    margin-top: 48px;
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    animation: rise 1s 0.55s cubic-bezier(.22,1,.36,1) both;
  }
  .stat {
    padding: 20px;
    text-align: center;
    background: rgba(255,255,255,0.03);
    transition: background 0.2s;
  }
  .stat:hover { background: rgba(255,255,255,0.07); }
  .stat-num { font-size: 1.7rem; font-weight: 900; color: #fff; }
  .stat-lbl { font-size: 0.78rem; color: rgba(255,255,255,0.4); margin-top: 4px; }
</style>



<canvas id="canvas"></canvas>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>
<div class="orb orb-3"></div>

<div class="card">
  <div class="badge">جدیدترین نسخه منتشر شد</div>
  <h1>خلاقیت بی‌پایان<br>با <span>هوش مصنوعی</span></h1>
  <p>راه‌حل‌های هوشمند برای کسب‌وکار شما. سریع، دقیق و قابل اعتماد.</p>
  <div class="btns">
    <button class="btn-primary">شروع رایگان</button>
    <button class="btn-secondary">مشاهده دمو</button>
  </div>
  <div class="stats">
    <div class="stat">
      <div class="stat-num" data-target="12">0</div>
      <div class="stat-lbl">هزار کاربر</div>
    </div>
    <div class="stat">
      <div class="stat-num" data-target="98">0</div>
      <div class="stat-lbl">درصد رضایت</div>
    </div>
    <div class="stat">
      <div class="stat-num" data-target="24">0</div>
      <div class="stat-lbl">پشتیبانی ساعته</div>
    </div>
  </div>
</div>

<script>
// ── Particle System ──
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const mouse = { x: innerWidth/2, y: innerHeight/2 };

function resize() {
  canvas.width  = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener('resize', resize);
window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * innerWidth;
    this.y = Math.random() * innerHeight;
    this.size = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = ['#a78bfa','#38bdf8','#fbbf24'][Math.floor(Math.random()*3)];
  }
  update() {
    const dx = mouse.x - this.x, dy = mouse.y - this.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < 120) {
      this.vx -= dx / dist * 0.06;
      this.vy -= dy / dist * 0.06;
    }
    this.vx *= 0.98; this.vy *= 0.98;
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > innerWidth || this.y < 0 || this.y > innerHeight) this.reset();
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 140; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  // draw connections
  particles.forEach((a, i) => {
    particles.slice(i+1).forEach(b => {
      const d = Math.hypot(a.x-b.x, a.y-b.y);
      if (d < 80) {
        ctx.save();
        ctx.strokeStyle = a.color;
        ctx.globalAlpha = (1 - d/80) * 0.15;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.restore();
      }
    });
  });
  requestAnimationFrame(animate);
}
animate();

// ── Count-up animation ──
document.querySelectorAll('.stat-num').forEach(el => {
  const target = +el.dataset.target;
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + (target === 98 ? '%' : 'k+');
    if (current >= target) clearInterval(timer);
  }, 25);
});
<\/script>


`,className:"w-html-embed"})}),k=a=>{const{origin:e,pathname:o,search:r}=new URL(a);return`${e}${o}${r}`},P=d.memo(({pageKey:a,system:e})=>t.jsx(z,{system:e},a),(a,e)=>a.pageKey===e.pageKey),S=({data:a})=>{const{system:e,resources:o,url:r,pageMeta:n}=a,l=k(r),p=d.useMemo(()=>({imageLoader:s,assetBaseUrl:i,resources:o,breakpoints:u,onError:console.error}),[o]);return t.jsxs(b.Provider,{value:p,children:[t.jsx(h.Provider,{value:r,children:t.jsx(P,{pageKey:l,system:e})}),t.jsx(x,{url:r,pageMeta:n,siteName:c,imageLoader:s,assetBaseUrl:i}),t.jsx(g,{children:n.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),M=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return t.jsxs(t.Fragment,{children:[t.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),t.jsx("link",{rel:"icon",href:s({src:`${i}${y}`})}),v.map(e=>t.jsx("link",{rel:"preload",href:`${i}${e}`,as:"font",crossOrigin:"anonymous"},e)),w.map(e=>t.jsx("link",{rel:"preload",href:`${i}${e}`,as:"image"},e))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:M},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-2/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{C as configValuesSerialized};
