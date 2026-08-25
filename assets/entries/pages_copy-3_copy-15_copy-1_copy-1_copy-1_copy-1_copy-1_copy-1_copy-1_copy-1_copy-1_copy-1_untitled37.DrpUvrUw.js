import{j as e,r as d,a as i,i as n,R as g,b as x,P as h,c as v,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],u="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=t=>e.jsx("body",{className:"w-element",children:e.jsx(f,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Landing • Ultra Graphic</title>
  <style>
    :root{
      --bg:#0b0f19;
      --bg2:#0f1324;
      --neon:#8b5cff;
      --neon2:#00f5d4;
      --hot:#ff4ecd;
      --sun:#ffc857;
      --text:#e6ecff;
      --muted:#b3b9d6;
      --glass: rgba(255,255,255,0.08);
      --glass2: rgba(255,255,255,0.04);
      --stroke: rgba(255,255,255,0.18);
      --shadow: 0 20px 80px rgba(3,8,20,0.6);
    }
    *{box-sizing:border-box;margin:0;padding:0}
    body{
      font-family: "Vazirmatn", system-ui, -apple-system, Segoe UI, sans-serif;
      background: radial-gradient(1200px 800px at 80% -10%, #1b2140 0%, transparent 60%),
                  radial-gradient(1200px 800px at -20% 110%, #1a1233 0%, transparent 60%),
                  linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%);
      color: var(--text);
      min-height:100vh;
      overflow-x:hidden;
    }
    .noise{
      position:fixed; inset:0; pointer-events:none; z-index:2;
      background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='2' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(%23n)' opacity='.18'/></svg>");
      mix-blend-mode:soft-light;
    }
    #particles{
      position:fixed; inset:0; z-index:1; pointer-events:none;
      filter: drop-shadow(0 0 8px rgba(0,255,255,0.35));
    }

    .blob{
      position:absolute; border-radius:50%; filter: blur(30px);
      mix-blend-mode: screen; opacity:.8; z-index:0;
      animation: float 14s ease-in-out infinite;
    }
    .blob.b1{
      width:520px;height:520px; left:-120px; top:-80px;
      background: radial-gradient(circle at 30% 30%, var(--neon) 0%, transparent 60%);
    }
    .blob.b2{
      width:600px;height:600px; right:-180px; top:80px;
      background: radial-gradient(circle at 40% 30%, var(--hot) 0%, transparent 60%);
      animation-delay:-4s;
    }
    .blob.b3{
      width:520px;height:520px; left:30%; bottom:-220px;
      background: radial-gradient(circle at 50% 40%, var(--neon2) 0%, transparent 60%);
      animation-delay:-7s;
    }

    @keyframes float{
      0%,100%{transform: translateY(0) translateX(0) scale(1)}
      50%{transform: translateY(-30px) translateX(20px) scale(1.04)}
    }

    .container{width:min(1200px, 92vw); margin:0 auto; position:relative; z-index:3;}
    header{
      display:flex; align-items:center; justify-content:space-between;
      padding:24px 0 10px;
    }
    .logo{
      display:flex; gap:12px; align-items:center; font-weight:700; letter-spacing:.5px;
    }
    .logo .orb{
      width:42px;height:42px;border-radius:50%;
      background: radial-gradient(circle at 30% 30%, var(--sun), transparent 60%),
                  radial-gradient(circle at 70% 70%, var(--hot), transparent 60%),
                  radial-gradient(circle at 50% 50%, var(--neon2), transparent 60%);
      box-shadow: 0 0 30px rgba(255,200,87,.4), inset 0 0 12px rgba(255,255,255,.2);
    }
    nav a{
      color:var(--muted); text-decoration:none; margin:0 10px; font-size:.95rem;
      padding:8px 12px; border-radius:10px; transition:.3s;
    }
    nav a:hover{color:var(--text); background:rgba(255,255,255,0.08)}

    .hero{
      display:grid; grid-template-columns:1.1fr .9fr; gap:28px;
      align-items:center; min-height:70vh; padding:40px 0 70px;
    }
    .hero h1{
      font-size:clamp(2.2rem, 4vw, 4rem);
      line-height:1.2; margin-bottom:18px;
      background: linear-gradient(120deg, #fff, #c8d4ff 50%, #7cc8ff 100%);
      -webkit-background-clip:text; color:transparent;
      text-shadow:0 10px 40px rgba(124,200,255,.2);
    }
    .hero p{color:var(--muted); font-size:1.05rem; line-height:1.9; margin-bottom:24px}
    .cta{
      display:flex; gap:14px; flex-wrap:wrap;
    }
    .btn{
      border:none; cursor:pointer; font-size:1rem; padding:14px 22px;
      border-radius:14px; color:#0b0f19; font-weight:700;
      background: linear-gradient(135deg, var(--neon2), var(--sun));
      box-shadow: 0 10px 30px rgba(0,245,212,.3);
      transition:.3s transform, .3s box-shadow;
    }
    .btn.secondary{
      background: transparent; color:var(--text); border:1px solid var(--stroke);
      box-shadow:none;
    }
    .btn:hover{transform: translateY(-2px); box-shadow: 0 16px 40px rgba(0,245,212,.35)}

    .glass-card{
      background: linear-gradient(180deg, var(--glass), var(--glass2));
      border:1px solid var(--stroke);
      border-radius:22px; padding:22px; box-shadow: var(--shadow);
      backdrop-filter: blur(18px);
    }

    .visual{
      position:relative; min-height:420px;
      display:grid; place-items:center;
    }
    .ring{
      position:absolute; inset:10% 10%;
      border-radius:50%;
      border:1px dashed rgba(255,255,255,0.25);
      animation: spin 20s linear infinite;
    }
    .ring.r2{ inset:20% 20%; animation-duration: 26s; border-style:solid; opacity:.5}
    .ring.r3{ inset:30% 30%; animation-duration: 14s; border-style:dotted; opacity:.6}
    @keyframes spin{ to{transform:rotate(360deg)} }
    .core{
      width:220px;height:220px;border-radius:50%;
      background:
        radial-gradient(circle at 30% 30%, #fff 0%, rgba(255,255,255,.4) 25%, transparent 60%),
        radial-gradient(circle at 70% 70%, var(--hot) 0%, transparent 60%),
        radial-gradient(circle at 50% 50%, var(--neon2) 0%, transparent 60%),
        radial-gradient(circle at 50% 50%, #0b0f19 35%, transparent 60%);
      box-shadow: 0 0 60px rgba(255,78,205,.45), inset 0 0 30px rgba(255,255,255,.2);
      animation:pulse 6s ease-in-out infinite;
    }
    @keyframes pulse{
      0%,100%{transform:scale(1)}
      50%{transform:scale(1.05)}
    }

    .stats{
      display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:28px;
    }
    .stat{ text-align:center; padding:14px; border-radius:16px;
      background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08);
    }
    .stat h3{ font-size:1.6rem; color:#fff; margin-bottom:6px}
    .stat p{ color:var(--muted); font-size:.9rem}

    .section{
      margin:50px 0 20px;
      display:grid; grid-template-columns:repeat(3,1fr); gap:18px;
    }
    .feature{
      padding:22px; border-radius:18px; border:1px solid var(--stroke);
      background: linear-gradient(160deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      transition:.3s transform, .3s border;
    }
    .feature:hover{ transform: translateY(-6px); border-color: rgba(255,255,255,0.35)}
    .feature h4{ margin-bottom:10px}
    .feature p{ color:var(--muted); line-height:1.7; font-size:.95rem}

    .marquee{
      margin:30px 0 0; overflow:hidden; border:1px solid rgba(255,255,255,0.12);
      border-radius:16px; background: rgba(255,255,255,0.03);
    }
    .marquee .track{
      display:flex; gap:30px; padding:14px 0; white-space:nowrap;
      animation: scroll 18s linear infinite;
    }
    .chip{
      padding:8px 16px; border-radius:999px; background: rgba(255,255,255,0.08);
      border:1px solid rgba(255,255,255,0.18); color:#dfe7ff; font-size:.9rem;
    }
    @keyframes scroll{ to{ transform: translateX(-50%)} }

    footer{ padding:30px 0 60px; color:var(--muted); text-align:center; font-size:.9rem}
    @media (max-width: 980px){
      .hero{grid-template-columns:1fr; padding-top:20px}
      .section{grid-template-columns:1fr}
      .stats{grid-template-columns:1fr 1fr}
      nav{display:none}
    }
    @media (max-width: 560px){
      .stats{grid-template-columns:1fr}
    }
  </style>


  <canvas id="particles"></canvas>
  <div class="noise"></div>
  <div class="blob b1"></div>
  <div class="blob b2"></div>
  <div class="blob b3"></div>

  <div class="container">
    <header>
      <div class="logo">
        <div class="orb"></div>
        <div>NeuroVista</div>
      </div>
      <nav>
        <a href="#">ویژگی‌ها</a>
        <a href="#">گالری</a>
        <a href="#">قیمت</a>
        <a href="#">تماس</a>
      </nav>
    </header>

    <section class="hero">
      <div>
        <h1>تجربه‌ای گرافیکی که هیچ‌کس روی سایتش نگذاشته</h1>
        <p>این لندینگ با افکت‌های پویا، لایه‌های شفاف، ذرات شناور و تایپوگرافی مدرن طراحی شده تا حس لوکس و آینده‌نگر را منتقل کند.</p>
        <div class="cta">
          <button class="btn">شروع همکاری</button>
          <button class="btn secondary">تماشای دمو</button>
        </div>

        <div class="stats">
          <div class="stat">
            <h3>4.9★</h3>
            <p>امتیاز کاربر</p>
          </div>
          <div class="stat">
            <h3>120+</h3>
            <p>افکت گرافیکی</p>
          </div>
          <div class="stat">
            <h3>24/7</h3>
            <p>پشتیبانی زنده</p>
          </div>
        </div>
      </div>

      <div class="visual glass-card">
        <div class="ring"></div>
        <div class="ring r2"></div>
        <div class="ring r3"></div>
        <div class="core"></div>
      </div>
    </section>

    <section class="section">
      <div class="feature">
        <h4>پویایی فضایی</h4>
        <p>گرادیان‌های زنده با حرکت نرم که عمق واقعی به صفحه می‌دهد.</p>
      </div>
      <div class="feature">
        <h4>شیشه و نور</h4>
        <p>کارت‌های گلس با انعکاس ملایم و حاشیه‌های درخشان.</p>
      </div>
      <div class="feature">
        <h4>ذرات هوشمند</h4>
        <p>Canvas با ذرات تعاملی که به ماوس واکنش نشان می‌دهند.</p>
      </div>
    </section>

    <div class="marquee">
      <div class="track">
        <div class="chip">FUTURE UI</div>
        <div class="chip">GLASS SYSTEM</div>
        <div class="chip">NEON FLOW</div>
        <div class="chip">PARALLAX</div>
        <div class="chip">AURORA</div>
        <div class="chip">HOLOGRAPHIC</div>
        <div class="chip">FUTURE UI</div>
        <div class="chip">GLASS SYSTEM</div>
        <div class="chip">NEON FLOW</div>
        <div class="chip">PARALLAX</div>
        <div class="chip">AURORA</div>
        <div class="chip">HOLOGRAPHIC</div>
      </div>
    </div>

    <footer>© 2026 • ساخته شده برای نمایش قدرت گرافیک در وب</footer>
  </div>

  <script>
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    let w, h, particles, mouse = {x:0, y:0};

    function resize(){
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({length: 120}, () => ({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-0.5)*0.7,
        vy: (Math.random()-0.5)*0.7,
        r: Math.random()*1.8+0.8
      }));
    }
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", e=>{mouse.x=e.clientX; mouse.y=e.clientY});
    resize();

    function draw(){
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = "rgba(140,92,255,0.8)";
      for(let i=0;i<particles.length;i++){
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>w) p.vx*=-1;
        if(p.y<0||p.y>h) p.vy*=-1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx,dy);
        if(dist < 120){
          p.x += dx/50;
          p.y += dy/50;
        }
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  <\/script>


`,className:"w-html-embed"})}),z=t=>{const{origin:a,pathname:s,search:r}=new URL(t);return`${a}${s}${r}`},S=d.memo(({pageKey:t,system:a})=>e.jsx(k,{system:a},t),(t,a)=>t.pageKey===a.pageKey),P=({data:t})=>{const{system:a,resources:s,url:r,pageMeta:o}=t,l=z(r),c=d.useMemo(()=>({imageLoader:n,assetBaseUrl:i,resources:s,breakpoints:b,onError:console.error}),[s]);return e.jsxs(g.Provider,{value:c,children:[e.jsx(x.Provider,{value:r,children:e.jsx(S,{pageKey:l,system:a})}),e.jsx(h,{url:r,pageMeta:o,siteName:p,imageLoader:n,assetBaseUrl:i}),e.jsx(v,{children:o.title})]})},A=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),j=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${i}${u}`})}),y.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a}`,as:"font",crossOrigin:"anonymous"},a)),w.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a}`,as:"image"},a))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-3/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-3/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{U as configValuesSerialized};
