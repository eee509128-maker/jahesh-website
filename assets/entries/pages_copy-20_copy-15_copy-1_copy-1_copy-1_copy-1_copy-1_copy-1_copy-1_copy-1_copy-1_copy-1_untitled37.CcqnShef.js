import{j as e,r as l,a as i,i as n,R as g,b as m,P as f,c as b,d as u}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],k=r=>e.jsx("body",{className:"w-element",children:e.jsx(v,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LIQUID METAL</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Vazirmatn:wght@100;900&display=swap');

*{margin:0;padding:0;box-sizing:border-box;}

:root{
  --silver:#c0c0c0;
  --gold:#d4af37;
  --dark:#080808;
  --red:#ff0033;
}

body{
  background:var(--dark);
  font-family:'Vazirmatn',sans-serif;
  overflow-x:hidden;
  cursor:none;
  color:#fff;
}

/* SVG filter for liquid effect */
.svg-filters{position:absolute;width:0;height:0;}

#cursor{
  width:20px;height:20px;
  background:radial-gradient(circle,#fff,transparent);
  border-radius:50%;
  position:fixed;pointer-events:none;z-index:9999;
  mix-blend-mode:difference;
  transition:transform 0.2s;
}

/* HERO */
.hero{
  height:100vh;
  display:flex;align-items:center;justify-content:center;
  flex-direction:column;
  position:relative;
  overflow:hidden;
}

.metal-bg{
  position:absolute;inset:0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(192,192,192,0.1) 0%, transparent 40%),
    radial-gradient(ellipse at 60% 80%, rgba(255,0,51,0.08) 0%, transparent 40%),
    #080808;
}

.chrome-text{
  font-family:'Black Ops One',cursive;
  font-size:clamp(5rem,18vw,18rem);
  line-height:0.85;
  letter-spacing:-0.05em;
  position:relative;
  text-align:center;
  -webkit-text-stroke:1px rgba(255,255,255,0.1);
}

.chrome-text span{
  display:block;
  background:linear-gradient(
    180deg,
    #ffffff 0%,
    #d4d4d4 15%,
    #888 30%,
    #d4af37 45%,
    #fff9e6 55%,
    #c0a030 65%,
    #6b4f00 80%,
    #d4af37 100%
  );
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  filter:drop-shadow(0 0 40px rgba(212,175,55,0.6));
  animation:metalShimmer 4s ease-in-out infinite;
}

.chrome-text span:nth-child(2){
  background:linear-gradient(
    180deg,
    #e0e0e0 0%,
    #fff 20%,
    #a0a0a0 40%,
    #ffffff 55%,
    #808080 70%,
    #e0e0e0 100%
  );
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  filter:drop-shadow(0 0 60px rgba(255,255,255,0.3));
  animation:metalShimmer 4s ease-in-out infinite reverse;
}

@keyframes metalShimmer{
  0%,100%{filter:drop-shadow(0 0 40px rgba(212,175,55,0.6)) brightness(1);}
  50%{filter:drop-shadow(0 0 80px rgba(212,175,55,0.9)) brightness(1.3);}
}

/* LIQUID BLOBS */
.blob-container{
  position:absolute;inset:0;
  filter:url(#goo);
  opacity:0.7;
  pointer-events:none;
}

.blob{
  position:absolute;
  border-radius:50%;
  animation:blobMove var(--dur) ease-in-out infinite alternate;
}
.blob1{width:400px;height:400px;background:radial-gradient(circle,rgba(212,175,55,0.4),transparent 70%);top:-100px;left:-100px;--dur:8s;}
.blob2{width:300px;height:300px;background:radial-gradient(circle,rgba(192,192,192,0.3),transparent 70%);top:50%;right:-50px;--dur:10s;animation-delay:-3s;}
.blob3{width:500px;height:500px;background:radial-gradient(circle,rgba(255,0,51,0.2),transparent 70%);bottom:-200px;left:30%;--dur:12s;animation-delay:-6s;}
.blob4{width:250px;height:250px;background:radial-gradient(circle,rgba(212,175,55,0.3),transparent 70%);top:20%;left:20%;--dur:7s;animation-delay:-2s;}

@keyframes blobMove{
  from{transform:translate(0,0) scale(1);}
  to{transform:translate(80px,60px) scale(1.2);}
}

.sub{
  font-size:0.9rem;
  letter-spacing:0.5em;
  color:rgba(212,175,55,0.6);
  text-transform:uppercase;
  margin-top:3rem;
  animation:fadeIn 2s 1s both;
}

@keyframes fadeIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}

/* DIVIDER */
.liquid-divider{
  height:200px;
  background:linear-gradient(180deg,#080808 0%,transparent 50%,#080808 100%);
  position:relative;overflow:hidden;
}

.liquid-divider::before{
  content:'';
  position:absolute;
  width:200%;height:200%;
  left:-50%;top:-50%;
  background:radial-gradient(ellipse at center,rgba(212,175,55,0.2) 0%,transparent 60%);
  animation:spin 20s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg);}}

/* GRID */
.grid-section{
  padding:6rem 4rem;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2px;
  background:rgba(255,255,255,0.05);
}

.grid-card{
  background:#0a0a0a;
  padding:3rem 2rem;
  position:relative;
  overflow:hidden;
  transition:background 0.4s;
}

.grid-card:hover{background:#111;}

.grid-card::before{
  content:'';
  position:absolute;top:0;left:0;right:0;
  height:1px;
  background:linear-gradient(90deg,transparent,var(--gold),transparent);
  transform:scaleX(0);
  transition:transform 0.5s;
}
.grid-card:hover::before{transform:scaleX(1);}

.card-num{
  font-family:'Black Ops One',cursive;
  font-size:5rem;
  background:linear-gradient(180deg,rgba(212,175,55,0.3),transparent);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  line-height:1;
  margin-bottom:1rem;
}
.card-title{
  font-size:1.2rem;
  font-weight:900;
  color:var(--silver);
  margin-bottom:1rem;
  letter-spacing:0.1em;
}
.card-text{
  color:rgba(255,255,255,0.3);
  font-size:0.85rem;
  line-height:2;
  font-weight:100;
}

/* MARQUEE */
.marquee-wrap{
  padding:2rem 0;
  overflow:hidden;
  border-top:1px solid rgba(212,175,55,0.1);
  border-bottom:1px solid rgba(212,175,55,0.1);
}
.marquee{
  display:flex;
  animation:marq 25s linear infinite;
  white-space:nowrap;
}
.marquee-item{
  padding:0 3rem;
  font-family:'Black Ops One',cursive;
  font-size:1.5rem;
  background:linear-gradient(90deg,var(--gold),var(--silver),var(--gold));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  letter-spacing:0.1em;
}
@keyframes marq{from{transform:translateX(0);}to{transform:translateX(-50%);}}

/* BIG FEATURE */
.feature-big{
  min-height:70vh;
  display:flex;align-items:center;
  padding:6rem 4rem;
  gap:6rem;
  position:relative;overflow:hidden;
}

.feature-big::before{
  content:'';
  position:absolute;
  right:-200px;top:50%;transform:translateY(-50%);
  width:600px;height:600px;
  background:radial-gradient(circle,rgba(212,175,55,0.1) 0%,transparent 70%);
  border-radius:50%;
}

.feature-text{flex:1;}
.feature-visual{
  flex:1;
  height:400px;
  position:relative;
}

.rotating-ring{
  position:absolute;
  border-radius:50%;
  border:1px solid;
  top:50%;left:50%;
  animation:rotate3d var(--speed) linear infinite;
}
.ring1{width:300px;height:300px;margin:-150px;border-color:rgba(212,175,55,0.5);--speed:6s;}
.ring2{width:250px;height:250px;margin:-125px;border-color:rgba(192,192,192,0.3);--speed:9s;animation-direction:reverse;}
.ring3{width:200px;height:200px;margin:-100px;border-color:rgba(255,0,51,0.4);--speed:4s;}
.ring4{width:150px;height:150px;margin:-75px;border-color:rgba(212,175,55,0.6);--speed:7s;animation-direction:reverse;}

@keyframes rotate3d{
  0%{transform:rotate(0deg) rotateX(60deg);}
  100%{transform:rotate(360deg) rotateX(60deg);}
}

.ring-core{
  position:absolute;
  width:60px;height:60px;
  top:50%;left:50%;
  margin:-30px;
  background:radial-gradient(circle,#d4af37,rgba(212,175,55,0.2));
  border-radius:50%;
  box-shadow:0 0 40px #d4af37,0 0 80px rgba(212,175,55,0.5);
  animation:corePulse 2s ease-in-out infinite;
}
@keyframes corePulse{
  0%,100%{transform:scale(1);}
  50%{transform:scale(1.5);}
}

.big-heading{
  font-family:'Black Ops One',cursive;
  font-size:clamp(2.5rem,6vw,5rem);
  line-height:1;
  margin-bottom:2rem;
}
.big-heading em{
  font-style:normal;
  background:linear-gradient(90deg,var(--gold),var(--silver));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  display:block;
}

.metal-btn{
  display:inline-block;
  padding:1.2rem 3rem;
  background:linear-gradient(135deg,#d4af37,#a07020,#d4af37);
  background-size:200%;
  color:#000;
  font-family:'Black Ops One',cursive;
  font-size:0.9rem;
  letter-spacing:0.2em;
  border:none;cursor:pointer;
  text-transform:uppercase;
  clip-path:polygon(15px 0%,100% 0%,calc(100% - 15px) 100%,0% 100%);
  transition:background-position 0.4s,box-shadow 0.4s;
  margin-top:2rem;
}
.metal-btn:hover{
  background-position:100%;
  box-shadow:0 0 30px rgba(212,175,55,0.6);
}

/* FOOTER */
footer{
  padding:4rem;
  text-align:center;
  border-top:1px solid rgba(255,255,255,0.05);
}
footer .logo{
  font-family:'Black Ops One',cursive;
  font-size:3rem;
  background:linear-gradient(180deg,#fff,#888,#d4af37);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
footer p{color:rgba(255,255,255,0.2);font-size:0.75rem;letter-spacing:0.3em;margin-top:1rem;}

@media(max-width:768px){
  .grid-section{grid-template-columns:1fr;}
  .feature-big{flex-direction:column;padding:4rem 2rem;}
  .feature-visual{width:100%;height:300px;}
}
</style>



<svg class="svg-filters">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" result="goo"></feColorMatrix>
    </filter>
  </defs>
</svg>

<div id="cursor"></div>

<!-- HERO -->
<section class="hero">
  <div class="metal-bg"></div>
  <div class="blob-container">
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>
    <div class="blob blob4"></div>
  </div>
  <div class="chrome-text">
    <span>LIQUID</span>
    <span>METAL</span>
  </div>
  <p class="sub">◆ فلز مایع ◆ آینده طراحی ◆ بی‌نهایت ◆</p>
</section>

<!-- MARQUEE -->
<div class="marquee-wrap">
  <div class="marquee">
    <span class="marquee-item">GOLD &nbsp;·&nbsp;</span>
    <span class="marquee-item">SILVER &nbsp;·&nbsp;</span>
    <span class="marquee-item">CHROME &nbsp;·&nbsp;</span>
    <span class="marquee-item">MERCURY &nbsp;·&nbsp;</span>
    <span class="marquee-item">PLATINUM &nbsp;·&nbsp;</span>
    <span class="marquee-item">TITANIUM &nbsp;·&nbsp;</span>
    <span class="marquee-item">GOLD &nbsp;·&nbsp;</span>
    <span class="marquee-item">SILVER &nbsp;·&nbsp;</span>
    <span class="marquee-item">CHROME &nbsp;·&nbsp;</span>
    <span class="marquee-item">MERCURY &nbsp;·&nbsp;</span>
    <span class="marquee-item">PLATINUM &nbsp;·&nbsp;</span>
    <span class="marquee-item">TITANIUM &nbsp;·&nbsp;</span>
  </div>
</div>

<!-- GRID -->
<div class="grid-section">
  <div class="grid-card">
    <div class="card-num">01</div>
    <div class="card-title">آلکیمی دیجیتال</div>
    <p class="card-text">تبدیل ایده خام به طلای خالص. هر پروژه یک تحول شیمیایی است که در کارگاه ما اتفاق می‌افتد.</p>
  </div>
  <div class="grid-card">
    <div class="card-num">02</div>
    <div class="card-title">آهنگری کد</div>
    <p class="card-text">مثل آهنگری که فلز را می‌تراشد، ما کد را شکل می‌دهیم تا چیزی بسازیم که هرگز نشکند.</p>
  </div>
  <div class="grid-card">
    <div class="card-num">03</div>
    <div class="card-title">پالایشگاه خلاقیت</div>
    <p class="card-text">از کانسنگ خام الهام تا محصول نهایی جلادار — فرآیندی که ناخالصی‌ها را حذف می‌کند.</p>
  </div>
  <div class="grid-card">
    <div class="card-num">04</div>
    <div class="card-title">ذوب مرزها</div>
    <p class="card-text">مثل فلز مذاب، شکل‌های جدید می‌گیریم. محدودیت برای ما وجود ندارد — فقط دمای کافی می‌خواهیم.</p>
  </div>
  <div class="grid-card">
    <div class="card-num">05</div>
    <div class="card-title">کریستالیزاسیون</div>
    <p class="card-text">وقتی ایده سرد می‌شود و شکل می‌گیرد — همان لحظه‌ای است که اثر هنری متولد می‌شود.</p>
  </div>
  <div class="grid-card">
    <div class="card-num">06</div>
    <div class="card-title">آلیاژ نادر</div>
    <p class="card-text">ترکیب تکنولوژی و زیبایی‌شناسی — آلیاژی که سخت‌تر از هر عنصر تنها است.</p>
  </div>
</div>

<!-- FEATURE -->
<section class="feature-big">
  <div class="feature-text">
    <div class="big-heading">
      ما <em>متفاوت</em> فکر می‌کنیم
    </div>
    <p style="color:rgba(255,255,255,0.4);line-height:2;font-size:1rem;font-weight:100;max-width:500px;">
      هر پروژه یک آزمایش در کوره است. ما دما را بالا می‌بریم تا ببینیم چه چیزی بیرون می‌آید. گاهی طلا، گاهی چیزی بهتر از طلا.
    </p>
    <button class="metal-btn">کشف کنید</button>
  </div>
  <div class="feature-visual">
    <div class="rotating-ring ring1"></div>
    <div class="rotating-ring ring2"></div>
    <div class="rotating-ring ring3"></div>
    <div class="rotating-ring ring4"></div>
    <div class="ring-core"></div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="logo">LIQUID METAL</div>
  <p>© ۲۰۲۶ — جایی که فلز با خلاقیت ذوب می‌شود</p>
</footer>

<script>
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX - 10 + 'px';
  cursor.style.top = e.clientY - 10 + 'px';
});
document.querySelectorAll('.grid-card,.metal-btn').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// Parallax on hero
document.querySelector('.hero').addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelector('.chrome-text').style.transform = \`perspective(800px) rotateY(\${x}deg) rotateX(\${-y}deg)\`;
});
document.querySelector('.hero').addEventListener('mouseleave', () => {
  document.querySelector('.chrome-text').style.transform = '';
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
    }
  });
}, {threshold:0.1});
document.querySelectorAll('.grid-card').forEach(el => {
  el.style.opacity='0';
  el.style.transform='translateY(40px)';
  el.style.transition='all 0.7s ease';
  obs.observe(el);
});
<\/script>


`,className:"w-html-embed"})}),E=r=>{const{origin:t,pathname:s,search:a}=new URL(r);return`${t}${s}${a}`},S=l.memo(({pageKey:r,system:t})=>e.jsx(k,{system:t},r),(r,t)=>r.pageKey===t.pageKey),O=({data:r})=>{const{system:t,resources:s,url:a,pageMeta:o}=r,c=E(a),p=l.useMemo(()=>({imageLoader:n,assetBaseUrl:i,resources:s,breakpoints:h,onError:console.error}),[s]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(m.Provider,{value:a,children:e.jsx(S,{pageKey:c,system:t})}),e.jsx(f,{url:a,pageMeta:o,siteName:d,imageLoader:n,assetBaseUrl:i}),e.jsx(b,{children:o.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),q=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${i}${x}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},I=Object.freeze(Object.defineProperty({__proto__:null,Head:q},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-20/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-20/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}}};export{j as configValuesSerialized};
