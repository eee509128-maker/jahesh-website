import{j as e,r as i,a as s,i as a,R as y,b as x,P as u,c as m,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],g="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],E=[],P=o=>e.jsx("body",{className:"w-element",children:e.jsx(v,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


  <meta charset="UTF-8">
  <title>طناب نرم و واقعی</title>
  <style>
    body { margin:0; height:100vh; background:#0a001f; overflow:hidden; cursor:none; }
    canvas { display:block; }
    .cursor {
      position: fixed; width:16px; height:16px; background:#ff3366; border-radius:50%;
      pointer-events:none; z-index:9999; box-shadow:0 0 14px #ff3366aa;
      transform:translate(-50%,-50%); transition:transform 0.1s;
    }
  </style>



<div class="cursor" id="cursor"></div>
<canvas id="c"></canvas>

<script>
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const cursor = document.getElementById('cursor');

let w, h, mouse = {x:0, y:0, vx:0, vy:0};

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize); resize();

const SEGMENTS   = 32;       // بیشتر = نرم‌تر و موج‌دارتر
const SEGLEN     = 14;
const STIFFNESS  = 0.08;     // خیلی مهم: پایین‌تر = شل‌تر و واقعی‌تر
const GRAVITY    = 0.55;
const DAMP       = 0.89;     // کمتر = بیشتر تاب می‌خوره
const MOUSE_PULL = 2.2;      // چقدر حرکت موس به طناب نیرو وارد کنه

let points = Array.from({length: SEGMENTS+1}, () => ({
  x:0, y:0, vx:0, vy:0, px:0, py:0
}));

window.addEventListener('mousemove', e => {
  const dx = e.clientX - mouse.x;
  const dy = e.clientY - mouse.y;
  mouse.vx = dx * MOUSE_PULL;
  mouse.vy = dy * MOUSE_PULL;
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  cursor.style.left = mouse.x + 'px';
  cursor.style.top  = mouse.y + 'px';
});

function update() {
  // سر طناب همیشه روی موس
  points[0].x = mouse.x;
  points[0].y = mouse.y;
  points[0].vx = mouse.vx;
  points[0].vy = mouse.vy;

  // فیزیک قطعات
  for (let i = 1; i <= SEGMENTS; i++) {
    let p = points[i];
    let prev = points[i-1];

    // جاذبه
    p.vy += GRAVITY;

    // حرکت پیش‌بینی‌شده
    let nx = p.x + p.vx * DAMP;
    let ny = p.y + p.vy * DAMP;

    // محدودیت فاصله (constraint)
    let dx = nx - prev.x;
    let dy = ny - prev.y;
    let dist = Math.hypot(dx, dy);

    if (dist > SEGLEN) {
      const factor = SEGLEN / dist;
      const corrX = dx * (1 - factor) * 0.65;  // 0.65 = کمی شل‌تر از قبل
      const corrY = dy * (1 - factor) * 0.65;

      nx -= corrX;
      ny -= corrY;

      // پخش نیرو به عقب
      p.vx -= corrX * 1.1;
      p.vy -= corrY * 1.1;
      prev.vx += corrX * 0.4;
      prev.vy += corrY * 0.4;
    }

    p.x = nx;
    p.y = ny;

    // به‌روزرسانی سرعت برای فریم بعد
    p.vx = (p.x - p.px) * 0.94;
    p.vy = (p.y - p.py) * 0.94;
    p.px = p.x;
    p.py = p.y;
  }

  // رسم
  ctx.clearRect(0,0,w,h);

  ctx.strokeStyle = '#aaffff';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.shadowBlur = 15;
  ctx.shadowColor = '#88ffff88';

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 1; i <= SEGMENTS; i++) {
    let p = points[i];
    if (i < SEGMENTS) {
      let next = points[i+1];
      let cx = (p.x + next.x) * 0.5;
      let cy = (p.y + next.y) * 0.5;
      ctx.quadraticCurveTo(p.x, p.y, cx, cy);
    } else {
      ctx.lineTo(p.x, p.y);
    }
  }
  ctx.stroke();

  // وزنه آخر
  let end = points[SEGMENTS];
  ctx.fillStyle = '#ffdd99';
  ctx.shadowBlur = 30;
  ctx.shadowColor = '#ffdd9988';
  ctx.beginPath();
  ctx.arc(end.x, end.y, 13, 0, Math.PI*2);
  ctx.fill();

  requestAnimationFrame(update);
}

update();
<\/script>

`,className:"w-html-embed"})}),w=o=>{const{origin:t,pathname:r,search:n}=new URL(o);return`${t}${r}${n}`},T=i.memo(({pageKey:o,system:t})=>e.jsx(P,{system:t},o),(o,t)=>o.pageKey===t.pageKey),j=({data:o})=>{const{system:t,resources:r,url:n,pageMeta:c}=o,l=w(n),d=i.useMemo(()=>({imageLoader:a,assetBaseUrl:s,resources:r,breakpoints:h,onError:console.error}),[r]);return e.jsxs(y.Provider,{value:d,children:[e.jsx(x.Provider,{value:n,children:e.jsx(T,{pageKey:l,system:t})}),e.jsx(u,{url:n,pageMeta:c,siteName:p,imageLoader:a,assetBaseUrl:s}),e.jsx(m,{children:c.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),b=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:a({src:`${s}${g}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),E.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:b},Symbol.toStringTag,{value:"Module"})),N={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-40/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-40/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{N as configValuesSerialized};
