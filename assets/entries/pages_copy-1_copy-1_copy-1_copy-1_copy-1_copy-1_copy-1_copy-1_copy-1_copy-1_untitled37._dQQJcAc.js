import{j as e,r as s,a,i,R as f,b as m,P as u,c as g,d as y}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],j=t=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<title>2048</title>
<style>
  body { margin: 0; background: #1a1a2e; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: Arial; color: #fff; user-select: none; }
  h2 { margin: 0 0 10px; font-size: 32px; }
  #score-box { font-size: 20px; margin-bottom: 12px; }
  #grid { display: grid; grid-template-columns: repeat(4, 90px); gap: 8px; background: #16213e; padding: 10px; border-radius: 10px; }
  .cell { width: 90px; height: 90px; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: bold; border-radius: 8px; transition: all 0.1s; }
  #msg { margin-top: 12px; font-size: 18px; color: #ffcc00; }
  button { margin-top: 10px; padding: 8px 20px; font-size: 16px; background: #0f3460; color: #fff; border: none; border-radius: 6px; cursor: pointer; }
</style>


<h2>2048</h2>
<div id="score-box">امتیاز: <span id="score">0</span></div>
<div id="grid"></div>
<div id="msg">برای حرکت از فلش‌ها استفاده کن</div>
<button onclick="startGame()">شروع مجدد</button>
<script>
  const colors = {
    0:'#0f3460', 2:'#1a4a7a', 4:'#1e5f8a', 8:'#e05c00', 16:'#e07000',
    32:'#e08800', 64:'#e04400', 128:'#ffcc00', 256:'#ffaa00',
    512:'#ff8800', 1024:'#ff5500', 2048:'#ff2200'
  };
  let board, score;

  function startGame() {
    board = Array.from({length:4}, () => Array(4).fill(0));
    score = 0;
    addTile(); addTile();
    render();
    document.getElementById('msg').textContent = 'برای حرکت از فلش‌ها استفاده کن';
  }

  function addTile() {
    const empty = [];
    board.forEach((row,r) => row.forEach((v,c) => { if (!v) empty.push([r,c]); }));
    if (!empty.length) return;
    const [r,c] = empty[Math.floor(Math.random()*empty.length)];
    board[r][c] = Math.random() < 0.9 ? 2 : 4;
  }

  function render() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    board.forEach(row => row.forEach(v => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = v || '';
      cell.style.background = colors[v] || '#cc0000';
      cell.style.color = v <= 4 ? '#aaa' : '#fff';
      grid.appendChild(cell);
    }));
    document.getElementById('score').textContent = score;
  }

  function slide(row) {
    let r = row.filter(v => v);
    for (let i = 0; i < r.length-1; i++) {
      if (r[i] === r[i+1]) { r[i] *= 2; score += r[i]; r.splice(i+1,1); }
    }
    while (r.length < 4) r.push(0);
    return r;
  }

  function move(dir) {
    let moved = false;
    const prev = JSON.stringify(board);
    if (dir === 'left') board = board.map(row => slide(row));
    if (dir === 'right') board = board.map(row => slide([...row].reverse()).reverse());
    if (dir === 'up') {
      board = board[0].map((_,c) => board.map(r => r[c])).map(col => slide(col));
      board = board[0].map((_,c) => board.map(r => r[c]));
    }
    if (dir === 'down') {
      board = board[0].map((_,c) => board.map(r => r[c])).map(col => slide([...col].reverse()).reverse());
      board = board[0].map((_,c) => board.map(r => r[c]));
    }
    if (JSON.stringify(board) !== prev) { addTile(); moved = true; }
    render();
    if (board.flat().includes(2048)) document.getElementById('msg').textContent = '🎉 بردی! به 2048 رسیدی!';
    else if (!canMove()) document.getElementById('msg').textContent = '💀 بازی تموم شد!';
  }

  function canMove() {
    if (board.flat().includes(0)) return true;
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 4; c++) {
        if (c < 3 && board[r][c] === board[r][c+1]) return true;
        if (r < 3 && board[r][c] === board[r+1][c]) return true;
      }
    return false;
  }

  document.addEventListener('keydown', e => {
    const map = {ArrowLeft:'left', ArrowRight:'right', ArrowUp:'up', ArrowDown:'down'};
    if (map[e.key]) { move(map[e.key]); e.preventDefault(); }
  });

  startGame();
<\/script>


`,className:"w-html-embed"})}),S=t=>{const{origin:r,pathname:n,search:o}=new URL(t);return`${r}${n}${o}`},P=s.memo(({pageKey:t,system:r})=>e.jsx(j,{system:r},t),(t,r)=>t.pageKey===r.pageKey),z=({data:t})=>{const{system:r,resources:n,url:o,pageMeta:d}=t,c=S(o),p=s.useMemo(()=>({imageLoader:i,assetBaseUrl:a,resources:n,breakpoints:x,onError:console.error}),[n]);return e.jsxs(f.Provider,{value:p,children:[e.jsx(m.Provider,{value:o,children:e.jsx(P,{pageKey:c,system:r})}),e.jsx(u,{url:o,pageMeta:d,siteName:l,imageLoader:i,assetBaseUrl:a}),e.jsx(g,{children:d.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),T=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${a}${b}`})}),v.map(r=>e.jsx("link",{rel:"preload",href:`${a}${r}`,as:"font",crossOrigin:"anonymous"},r)),w.map(r=>e.jsx("link",{rel:"preload",href:`${a}${r}`,as:"image"},r))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{M as configValuesSerialized};
