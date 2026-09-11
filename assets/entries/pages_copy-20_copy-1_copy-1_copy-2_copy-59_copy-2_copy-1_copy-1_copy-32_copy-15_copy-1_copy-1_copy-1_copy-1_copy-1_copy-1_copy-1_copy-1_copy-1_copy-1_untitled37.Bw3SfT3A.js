import{j as e,r as d,a as s,i as n,R as h,b as x,P as g,c as m,d as u}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],z=a=>e.jsx("body",{className:"w-element",children:e.jsx(y,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>جهان موازی — Fluid Glass Verse</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      height: 100dvh;
      background: radial-gradient(circle at 15% 85%, #0f0c29, #302b63, #24243e);
      color: #f0f0ff;
      font-family: system-ui, -apple-system, sans-serif;
      overflow: hidden;
      perspective: 1800px;
    }

    canvas#bg-particles {
      position: fixed;
      inset: 0;
      z-index: 1;
      pointer-events: none;
    }

    .scene {
      position: relative;
      height: 100dvh;
      display: grid;
      place-items: center;
      transform-style: preserve-3d;
      z-index: 2;
    }

    .card-container {
      position: relative;
      width: 420px;
      height: 580px;
      transform-style: preserve-3d;
      transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .card {
      position: absolute;
      inset: 0;
      background: rgba(20, 20, 60, 0.28);
      backdrop-filter: blur(22px) saturate(180%);
      -webkit-backdrop-filter: blur(22px) saturate(180%);
      border: 1px solid rgba(120, 140, 255, 0.18);
      border-radius: 32px;
      box-shadow: 
        0 40px 120px rgba(0,0,0,0.6),
        inset 0 0 80px rgba(80,100,255,0.08);
      overflow: hidden;
      transform: translateZ(40px);
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .card:hover {
      transform: translateZ(120px) rotateX(8deg) rotateY(12deg);
      box-shadow: 
        0 80px 180px rgba(0,0,0,0.7),
        inset 0 0 140px rgba(100,120,255,0.15);
    }

    .liquid-bg {
      position: absolute;
      inset: -50%;
      background: linear-gradient(135deg, #a78bfa44, #7c3aed88, #4f46e588, #6366f188);
      filter: blur(60px);
      opacity: 0.7;
      animation: liquid 18s ease-in-out infinite alternate;
      transform: scale(1.4);
    }

    @keyframes liquid {
      0%   { border-radius: 47% 53% 51% 49% / 48% 52% 49% 51%; transform: translate(10%, 8%) rotate(3deg); }
      25%  { border-radius: 62% 38% 44% 56% / 55% 45% 58% 42%; transform: translate(-5%, -12%) rotate(-5deg); }
      50%  { border-radius: 39% 61% 63% 37% / 41% 59% 38% 62%; transform: translate(8%, 15%) rotate(7deg); }
      75%  { border-radius: 58% 42% 37% 63% / 62% 38% 64% 36%; transform: translate(-10%, -7%) rotate(-4deg); }
      100% { border-radius: 47% 53% 51% 49% / 48% 52% 49% 51%; transform: translate(10%, 8%) rotate(3deg); }
    }

    .content {
      position: relative;
      z-index: 3;
      padding: 3.2rem 2.8rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-shadow: 0 2px 12px rgba(0,0,0,0.7);
    }

    h1 {
      font-size: 3.1rem;
      font-weight: 800;
      letter-spacing: -1px;
      background: linear-gradient(90deg, #c4b5fd, #a78bfa, #7c3aed);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      line-height: 1.05;
    }

    .subtitle {
      font-size: 1.18rem;
      opacity: 0.92;
      margin: 1.4rem 0 2rem;
    }

    .timeline {
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      margin-top: 1.5rem;
    }

    .event {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      opacity: 0.9;
      transition: all 0.4s ease;
    }

    .event:hover {
      opacity: 1;
      transform: translateX(-8px);
    }

    .dot {
      width: 18px;
      height: 18px;
      background: linear-gradient(45deg, #a78bfa, #7c3aed);
      border-radius: 50%;
      box-shadow: 0 0 20px rgba(124,58,237,0.6);
      flex-shrink: 0;
    }

    .event-text {
      font-size: 1.05rem;
    }

    .btn-explore {
      align-self: center;
      margin-top: 2rem;
      padding: 1rem 2.6rem;
      font-size: 1.1rem;
      font-weight: 700;
      color: white;
      background: linear-gradient(45deg, #7c3aed, #a78bfa);
      border: none;
      border-radius: 999px;
      cursor: pointer;
      box-shadow: 0 10px 40px rgba(124,58,237,0.4);
      transition: all 0.4s ease;
    }

    .btn-explore:hover {
      transform: translateY(-4px) scale(1.06);
      box-shadow: 0 20px 60px rgba(124,58,237,0.55);
    }
  </style>



<canvas id="bg-particles"></canvas>

<div class="scene">
  <div class="card-container">
    <div class="card">
      <div class="liquid-bg"></div>
      <div class="content">
        <div>
          <h1>جهان موازی تو</h1>
          <p class="subtitle">جایی که انتخاب‌های نکرده‌ات هنوز زنده‌اند</p>
        </div>

        <div class="timeline">
          <div class="event"><div class="dot"></div><span class="event-text">شغلی که نرفتی</span></div>
          <div class="event"><div class="dot"></div><span class="event-text">عشقی که نگفتی</span></div>
          <div class="event"><div class="dot"></div><span class="event-text">سفری که کنسل شد</span></div>
          <div class="event"><div class="dot"></div><span class="event-text">نسخه‌ای که شجاع‌تر بود</span></div>
        </div>

        <button class="btn-explore">کشف این جهان</button>
      </div>
    </div>
  </div>
</div>

<script>
// ذرات سه‌بعدی ساده با واکنش به ماوس
const canvas = document.getElementById('bg-particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: canvas.width/2, y: canvas.height/2 };
let particles = [];

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 0.8;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.color = \`hsla(\${Math.random()*60 + 220}, 80%, 70%, \${Math.random()*0.3 + 0.2})\`;
  }
  update() {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    
    if (dist < 220) {
      this.x += dx * 0.008;
      this.y += dy * 0.008;
    }
    
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width ||
        this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

for (let i = 0; i < 180; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.fillStyle = 'rgba(10, 8, 35, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}

window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();
<\/script>

`,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:r,search:i}=new URL(a);return`${t}${r}${i}`},S=d.memo(({pageKey:a,system:t})=>e.jsx(z,{system:t},a),(a,t)=>a.pageKey===t.pageKey),j=({data:a})=>{const{system:t,resources:r,url:i,pageMeta:o}=a,l=P(i),p=d.useMemo(()=>({imageLoader:n,assetBaseUrl:s,resources:r,breakpoints:v,onError:console.error}),[r]);return e.jsxs(h.Provider,{value:p,children:[e.jsx(x.Provider,{value:i,children:e.jsx(S,{pageKey:l,system:t})}),e.jsx(g,{url:i,pageMeta:o,siteName:c,imageLoader:n,assetBaseUrl:s}),e.jsx(m,{children:o.title})]})},k=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${s}${f}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-20/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-20/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{R as configValuesSerialized};
