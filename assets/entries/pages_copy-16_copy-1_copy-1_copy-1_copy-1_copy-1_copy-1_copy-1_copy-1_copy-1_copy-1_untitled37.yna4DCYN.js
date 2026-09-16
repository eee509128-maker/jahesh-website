import{j as e,r as d,a as n,i as r,R as f,b as x,P as u,c as y,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as m}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const s="jahesh",g=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],h="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(m,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<title>Breakout</title>
<style>
  body { margin: 0; background: #0d0d1a; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: Arial; color: #fff; }
  canvas { border: 2px solid #aa44ff; box-shadow: 0 0 25px #aa44ff55; }
  #info { font-size: 20px; margin-bottom: 8px; }
</style>


<div id="info">امتیاز: 0 | موس را حرکت بده | کلیک برای شروع</div>
<canvas id="c" width="480" height="500"></canvas>
<script>
  const canvas = document.getElementById('c');
  const ctx = canvas.getContext('2d');
  let ball, paddle, bricks, score, lives, running, animId;

  const ROWS = 5, COLS = 8, BW = 52, BH = 18, BP = 4;

  function init() {
    ball = {x:240, y:350, dx:3, dy:-4, r:8};
    paddle = {x:190, y:465, w:100, h:12};
    score = 0; lives = 3;
    bricks = [];
    const colors = ['#ff4466','#ff8844','#ffcc00','#44ff88','#44aaff','#aa44ff'];
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        bricks.push({x: c*(BW+BP)+10, y: r*(BH+BP)+40, alive: true, color: colors[r]});
    running = false;
    draw();
    document.getElementById('info').textContent = 'کلیک برای شروع | موس را حرکت بده';
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    paddle.x = Math.max(0, Math.min(480 - paddle.w, e.clientX - rect.left - paddle.w/2));
  });

  canvas.addEventListener('click', () => {
    if (!running) { running = true; animate(); }
  });

  function animate() {
    if (!running) return;
    update();
    draw();
    animId = requestAnimationFrame(animate);
  }

  function update() {
    ball.x += ball.dx; ball.y += ball.dy;
    if (ball.x < ball.r || ball.x > 480-ball.r) ball.dx *= -1;
    if (ball.y < ball.r) ball.dy *= -1;
    if (ball.y > 500) {
      lives--;
      if (lives <= 0) { running = false; document.getElementById('info').textContent = '💀 باختی! کلیک = شروع مجدد'; init(); return; }
      ball = {x:240, y:350, dx:3, dy:-4, r:8};
      running = false;
      document.getElementById('info').textContent = \`جون: \${lives} | کلیک برای ادامه\`;
      return;
    }
    // Paddle collision
    if (ball.y+ball.r >= paddle.y && ball.x >= paddle.x && ball.x <= paddle.x+paddle.w && ball.dy > 0) {
      ball.dy *= -1;
      ball.dx = ((ball.x - (paddle.x + paddle.w/2)) / (paddle.w/2)) * 5;
    }
    // Brick collision
    bricks.forEach(b => {
      if (!b.alive) return;
      if (ball.x > b.x && ball.x < b.x+BW && ball.y > b.y && ball.y < b.y+BH) {
        b.alive = false; ball.dy *= -1; score += 10;
      }
    });
    if (bricks.every(b => !b.alive)) {
      running = false;
      document.getElementById('info').textContent = '🎉 بردی! کلیک = دوباره';
      init();
    }
    document.getElementById('info').textContent = \`امتیاز: \${score} | جون: \${'❤️'.repeat(lives)}\`;
  }

  function draw() {
    ctx.fillStyle = '#0d0d1a';
    ctx.fillRect(0, 0, 480, 500);
    bricks.forEach(b => {
      if (!b.alive) return;
      ctx.fillStyle = b.color;
      ctx.shadowBlur = 8; ctx.shadowColor = b.color;
      ctx.fillRect(b.x, b.y, BW, BH);
    });
    ctx.shadowBlur = 0;
    // Paddle
    const g = ctx.createLinearGradient(paddle.x, 0, paddle.x+paddle.w, 0);
    g.addColorStop(0, '#aa44ff'); g.addColorStop(1, '#44aaff');
    ctx.fillStyle = g;
    ctx.shadowBlur = 15; ctx.shadowColor = '#aa44ff';
    ctx.beginPath(); ctx.roundRect(paddle.x, paddle.y, paddle.w, paddle.h, 6); ctx.fill();
    // Ball
    ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
    ctx.fillStyle = '#ffffff'; ctx.shadowBlur = 20; ctx.shadowColor = '#fff';
    ctx.fill(); ctx.shadowBlur = 0;
  }

  init();
<\/script>


`,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:o,search:l}=new URL(a);return`${t}${o}${l}`},B=d.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),j=({data:a})=>{const{system:t,resources:o,url:l,pageMeta:i}=a,c=P(l),p=d.useMemo(()=>({imageLoader:r,assetBaseUrl:n,resources:o,breakpoints:g,onError:console.error}),[o]);return e.jsxs(f.Provider,{value:p,children:[e.jsx(x.Provider,{value:l,children:e.jsx(B,{pageKey:c,system:t})}),e.jsx(u,{url:l,pageMeta:i,siteName:s,imageLoader:r,assetBaseUrl:n}),e.jsx(y,{children:i.title})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),E=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:s};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${n}${h}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-16/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-16/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{T as configValuesSerialized};
