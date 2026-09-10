import{j as e,r as l,a as n,i as a,R as m,b as p,P as g,c as h,d as b}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],E=[],w=o=>e.jsx("body",{className:"w-element",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>جدول تناوبی مندلیف</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #050a0e;
    --panel: rgba(0,255,200,0.03);
    --border: rgba(0,255,200,0.15);
    --glow: #00ffc8;
    --glow2: #00aaff;
    --text: #c8fff0;
    --dim: rgba(200,255,240,0.4);
    --transition: 1.2s cubic-bezier(0.77,0,0.175,1);
  }

  html, body {
    width: 100%; height: 100%; overflow: hidden;
    background: var(--bg);
    color: var(--text);
    font-family: 'Share Tech Mono', monospace;
  }

  body::before {
    content: '';
    position: fixed; inset: 0;
    background: radial-gradient(ellipse at 50% 30%, rgba(0,255,200,0.04) 0%, transparent 70%),
                radial-gradient(ellipse at 80% 80%, rgba(0,170,255,0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  .controls {
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    z-index: 100;
    display: flex; gap: 8px;
    background: rgba(0,20,15,0.8);
    border: 1px solid var(--border);
    padding: 8px 16px;
    border-radius: 40px;
    backdrop-filter: blur(20px);
  }

  .controls button {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--dim);
    font-family: 'Orbitron', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 8px 18px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .controls button:hover { color: var(--glow); border-color: var(--glow); }
  .controls button.is-active {
    color: var(--bg); background: var(--glow);
    border-color: var(--glow);
    box-shadow: 0 0 20px var(--glow), 0 0 40px rgba(0,255,200,0.3);
  }

  #scene {
    position: fixed; inset: 0;
    perspective: 1200px;
    overflow: hidden;
    display: flex; align-items: center; justify-content: center;
  }

  #scene-content {
    position: relative;
    transform-style: preserve-3d;
    transition: transform var(--transition);
    width: 0; height: 0;
  }

  .element {
    position: absolute;
    width: 72px; height: 72px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 4px;
    cursor: pointer;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 4px;
    transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    outline: none;
    overflow: hidden;
  }
  .element:hover {
    border-color: var(--glow);
    background: rgba(0,255,200,0.08);
    box-shadow: 0 0 20px rgba(0,255,200,0.3), inset 0 0 10px rgba(0,255,200,0.05);
    z-index: 10;
  }

  /* Color groups */
  .element[data-color="0"] { border-color: rgba(0,255,200,0.25); }
  .element[data-color="1"] { border-color: rgba(255,80,80,0.3); }
  .element[data-color="2"] { border-color: rgba(80,180,255,0.3); }
  .element[data-color="3"] { border-color: rgba(255,180,50,0.3); }
  .element[data-color="4"] { border-color: rgba(180,100,255,0.3); }
  .element[data-color="5"] { border-color: rgba(80,255,140,0.3); }
  .element[data-color="6"] { border-color: rgba(255,120,200,0.3); }
  .element[data-color="7"] { border-color: rgba(100,200,255,0.3); }
  .element[data-color="8"] { border-color: rgba(255,200,100,0.3); }
  .element[data-color="9"] { border-color: rgba(200,255,100,0.3); }

  .element-number {
    font-size: 9px; color: var(--dim);
    align-self: flex-start; line-height: 1;
    font-family: 'Share Tech Mono', monospace;
  }
  .element-symbol {
    font-family: 'Orbitron', sans-serif;
    font-size: 18px; font-weight: 900;
    color: var(--glow); line-height: 1;
    text-shadow: 0 0 10px var(--glow);
  }
  .element-title {
    font-size: 7px; color: var(--dim);
    text-align: center; line-height: 1.2;
    margin-top: 2px;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    width: 100%;
  }
  .element-description {
    font-size: 6px; color: rgba(200,255,240,0.25);
    text-align: center;
  }

  .credits {
    position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%);
    font-size: 10px; color: var(--dim);
    letter-spacing: 1px;
    z-index: 100;
  }
  .credits a { color: var(--glow); text-decoration: none; }

  /* scanline overlay */
  body::after {
    content: '';
    position: fixed; inset: 0;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,200,0.01) 2px, rgba(0,255,200,0.01) 4px);
    pointer-events: none; z-index: 200;
  }
</style>



<div class="controls">
  <button class="is-active toggle" id="btn-table" data-layout="table">TABLE</button>
  <button class="toggle" id="btn-sphere" data-layout="sphere">SPHERE</button>
  <button class="toggle" id="btn-helix" data-layout="helix">HELIX</button>
  <button class="toggle" id="btn-grid" data-layout="grid">GRID</button>
</div>

<div id="scene">
  <div id="scene-content" data-layout="table"></div>
</div>

<div class="credits">
  3D transform calculations ported from three.js periodic table demo
</div>

<script>
// All 118 elements: [number, symbol, name, weight, group(color 0-9), period, group-col]
const ELEMENTS = [
  [1,'H','Hydrogen','1.008',0,1,1],
  [2,'He','Helium','4.003',7,1,18],
  [3,'Li','Lithium','6.941',1,2,1],
  [4,'Be','Beryllium','9.012',1,2,2],
  [5,'B','Boron','10.81',2,2,13],
  [6,'C','Carbon','12.01',2,2,14],
  [7,'N','Nitrogen','14.01',2,2,15],
  [8,'O','Oxygen','16.00',2,2,16],
  [9,'F','Fluorine','19.00',3,2,17],
  [10,'Ne','Neon','20.18',7,2,18],
  [11,'Na','Sodium','22.99',1,3,1],
  [12,'Mg','Magnesium','24.31',1,3,2],
  [13,'Al','Aluminum','26.98',2,3,13],
  [14,'Si','Silicon','28.09',2,3,14],
  [15,'P','Phosphorus','30.97',2,3,15],
  [16,'S','Sulfur','32.07',2,3,16],
  [17,'Cl','Chlorine','35.45',3,3,17],
  [18,'Ar','Argon','39.95',7,3,18],
  [19,'K','Potassium','39.10',1,4,1],
  [20,'Ca','Calcium','40.08',1,4,2],
  [21,'Sc','Scandium','44.96',4,4,3],
  [22,'Ti','Titanium','47.87',4,4,4],
  [23,'V','Vanadium','50.94',4,4,5],
  [24,'Cr','Chromium','52.00',4,4,6],
  [25,'Mn','Manganese','54.94',4,4,7],
  [26,'Fe','Iron','55.85',4,4,8],
  [27,'Co','Cobalt','58.93',4,4,9],
  [28,'Ni','Nickel','58.69',4,4,10],
  [29,'Cu','Copper','63.55',4,4,11],
  [30,'Zn','Zinc','65.38',4,4,12],
  [31,'Ga','Gallium','69.72',2,4,13],
  [32,'Ge','Germanium','72.64',2,4,14],
  [33,'As','Arsenic','74.92',2,4,15],
  [34,'Se','Selenium','78.96',2,4,16],
  [35,'Br','Bromine','79.90',3,4,17],
  [36,'Kr','Krypton','83.80',7,4,18],
  [37,'Rb','Rubidium','85.47',1,5,1],
  [38,'Sr','Strontium','87.62',1,5,2],
  [39,'Y','Yttrium','88.91',4,5,3],
  [40,'Zr','Zirconium','91.22',4,5,4],
  [41,'Nb','Niobium','92.91',4,5,5],
  [42,'Mo','Molybdenum','95.96',4,5,6],
  [43,'Tc','Technetium','(98)',4,5,7],
  [44,'Ru','Ruthenium','101.1',4,5,8],
  [45,'Rh','Rhodium','102.9',4,5,9],
  [46,'Pd','Palladium','106.4',4,5,10],
  [47,'Ag','Silver','107.9',4,5,11],
  [48,'Cd','Cadmium','112.4',4,5,12],
  [49,'In','Indium','114.8',2,5,13],
  [50,'Sn','Tin','118.7',2,5,14],
  [51,'Sb','Antimony','121.8',2,5,15],
  [52,'Te','Tellurium','127.6',2,5,16],
  [53,'I','Iodine','126.9',3,5,17],
  [54,'Xe','Xenon','131.3',7,5,18],
  [55,'Cs','Cesium','132.9',1,6,1],
  [56,'Ba','Barium','137.3',1,6,2],
  [57,'La','Lanthanum','138.9',5,6,3],
  [58,'Ce','Cerium','140.1',5,8.5,4],
  [59,'Pr','Praseodymium','140.9',5,8.5,5],
  [60,'Nd','Neodymium','144.2',5,8.5,6],
  [61,'Pm','Promethium','(145)',5,8.5,7],
  [62,'Sm','Samarium','150.4',5,8.5,8],
  [63,'Eu','Europium','152.0',5,8.5,9],
  [64,'Gd','Gadolinium','157.3',5,8.5,10],
  [65,'Tb','Terbium','158.9',5,8.5,11],
  [66,'Dy','Dysprosium','162.5',5,8.5,12],
  [67,'Ho','Holmium','164.9',5,8.5,13],
  [68,'Er','Erbium','167.3',5,8.5,14],
  [69,'Tm','Thulium','168.9',5,8.5,15],
  [70,'Yb','Ytterbium','173.1',5,8.5,16],
  [71,'Lu','Lutetium','175.0',5,8.5,17],
  [72,'Hf','Hafnium','178.5',4,6,4],
  [73,'Ta','Tantalum','180.9',4,6,5],
  [74,'W','Tungsten','183.8',4,6,6],
  [75,'Re','Rhenium','186.2',4,6,7],
  [76,'Os','Osmium','190.2',4,6,8],
  [77,'Ir','Iridium','192.2',4,6,9],
  [78,'Pt','Platinum','195.1',4,6,10],
  [79,'Au','Gold','197.0',4,6,11],
  [80,'Hg','Mercury','200.6',4,6,12],
  [81,'Tl','Thallium','204.4',2,6,13],
  [82,'Pb','Lead','207.2',2,6,14],
  [83,'Bi','Bismuth','208.9',2,6,15],
  [84,'Po','Polonium','(209)',2,6,16],
  [85,'At','Astatine','(210)',3,6,17],
  [86,'Rn','Radon','(222)',7,6,18],
  [87,'Fr','Francium','(223)',1,7,1],
  [88,'Ra','Radium','(226)',1,7,2],
  [89,'Ac','Actinium','(227)',6,7,3],
  [90,'Th','Thorium','232.0',6,9.5,4],
  [91,'Pa','Protactinium','231.0',6,9.5,5],
  [92,'U','Uranium','238.0',6,9.5,6],
  [93,'Np','Neptunium','(237)',6,9.5,7],
  [94,'Pu','Plutonium','(244)',6,9.5,8],
  [95,'Am','Americium','(243)',6,9.5,9],
  [96,'Cm','Curium','(247)',6,9.5,10],
  [97,'Bk','Berkelium','(247)',6,9.5,11],
  [98,'Cf','Californium','(251)',6,9.5,12],
  [99,'Es','Einsteinium','(252)',6,9.5,13],
  [100,'Fm','Fermium','(257)',6,9.5,14],
  [101,'Md','Mendelevium','(258)',6,9.5,15],
  [102,'No','Nobelium','(259)',6,9.5,16],
  [103,'Lr','Lawrencium','(266)',6,9.5,17],
  [104,'Rf','Rutherfordium','(267)',4,7,4],
  [105,'Db','Dubnium','(268)',4,7,5],
  [106,'Sg','Seaborgium','(271)',4,7,6],
  [107,'Bh','Bohrium','(272)',4,7,7],
  [108,'Hs','Hassium','(277)',4,7,8],
  [109,'Mt','Meitnerium','(276)',4,7,9],
  [110,'Ds','Darmstadtium','(281)',4,7,10],
  [111,'Rg','Roentgenium','(280)',4,7,11],
  [112,'Cn','Copernicium','(285)',4,7,12],
  [113,'Nh','Nihonium','(284)',2,7,13],
  [114,'Fl','Flerovium','(289)',2,7,14],
  [115,'Mc','Moscovium','(288)',2,7,15],
  [116,'Lv','Livermorium','(293)',2,7,16],
  [117,'Ts','Tennessine','(294)',3,7,17],
  [118,'Og','Oganesson','(294)',7,7,18],
];

const W = 80, H = 80, GAP = 4;
const STEP = W + GAP;

const container = document.getElementById('scene-content');
const buttons = document.querySelectorAll('.toggle');

// Build element cards
const cards = ELEMENTS.map(([num, sym, name, weight, color, period, group]) => {
  const el = document.createElement('button');
  el.className = 'element';
  el.dataset.color = color;
  el.innerHTML = \`
    <div class="element-number">\${num}</div>
    <div class="element-symbol">\${sym}</div>
    <div class="element-title">\${name}</div>
    <div class="element-description">\${weight}</div>
  \`;
  container.appendChild(el);
  return { el, num, sym, name, weight, color, period, group };
});

// --- Layout calculations ---

function getTablePositions() {
  return ELEMENTS.map(([num, sym, name, weight, color, period, group]) => {
    // period 8.5 = lanthanides row, 9.5 = actinides row
    const row = period <= 7 ? period : period;
    const col = group;
    const x = (col - 1) * STEP - (17 * STEP) / 2;
    const y = (row - 1) * STEP - (9 * STEP) / 2;
    return { x, y, z: 0, rotX: 0, rotY: 0 };
  });
}

function getSpherePositions() {
  const n = ELEMENTS.length;
  return ELEMENTS.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / n);
    const theta = Math.sqrt(n * Math.PI) * phi;
    const r = 500;
    return {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
      rotY: Math.atan2(Math.sin(phi) * Math.cos(theta), Math.cos(phi)) * (180 / Math.PI),
      rotX: -Math.asin(Math.sin(phi) * Math.sin(theta)) * (180 / Math.PI),
    };
  });
}

function getHelixPositions() {
  return ELEMENTS.map((_, i) => {
    const theta = i * 0.25 + Math.PI;
    const r = 350;
    return {
      x: Math.sin(theta) * r,
      y: -(i * 8) + (ELEMENTS.length * 4),
      z: Math.cos(theta) * r,
      rotY: (theta * 180 / Math.PI) * -1,
      rotX: 0,
    };
  });
}

function getGridPositions() {
  const cols = Math.ceil(Math.sqrt(ELEMENTS.length));
  return ELEMENTS.map((_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: (col - cols / 2) * STEP,
      y: (row - cols / 2) * STEP,
      z: 0,
      rotX: 0,
      rotY: 0,
    };
  });
}

// Apply positions with transition
function applyLayout(positions) {
  cards.forEach(({ el }, i) => {
    const { x, y, z, rotX, rotY } = positions[i];
    el.style.transition = \`transform 1.2s cubic-bezier(0.77,0,0.175,1) \${i * 3}ms, opacity 0.6s ease\`;
    el.style.transform = \`translate(-50%, -50%) translateX(\${x}px) translateY(\${y}px) translateZ(\${z}px) rotateY(\${rotY || 0}deg) rotateX(\${rotX || 0}deg)\`;
  });
}

const layouts = { table: getTablePositions, sphere: getSpherePositions, helix: getHelixPositions, grid: getGridPositions };
let currentLayout = 'table';

applyLayout(getTablePositions());

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const layout = btn.dataset.layout;
    if (layout === currentLayout) return;
    currentLayout = layout;
    buttons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    applyLayout(layouts[layout]());
  });
});

// Auto-rotate scene on drag
let isDragging = false, lastX = 0, lastY = 0;
let rotY = 0, rotX = 0;

const scene = document.getElementById('scene');
scene.addEventListener('mousedown', e => { isDragging = true; lastX = e.clientX; lastY = e.clientY; });
window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  rotY += (e.clientX - lastX) * 0.3;
  rotX -= (e.clientY - lastY) * 0.3;
  lastX = e.clientX; lastY = e.clientY;
  container.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
});

// Touch support
scene.addEventListener('touchstart', e => { isDragging = true; lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; }, {passive:true});
window.addEventListener('touchend', () => isDragging = false);
window.addEventListener('touchmove', e => {
  if (!isDragging) return;
  rotY += (e.touches[0].clientX - lastX) * 0.3;
  rotX -= (e.touches[0].clientY - lastY) * 0.3;
  lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
  container.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
}, {passive:true});
<\/script>


`,className:"w-html-embed"})}),P=o=>{const{origin:t,pathname:i,search:r}=new URL(o);return`${t}${i}${r}`},S=l.memo(({pageKey:o,system:t})=>e.jsx(w,{system:t},o),(o,t)=>o.pageKey===t.pageKey),T=({data:o})=>{const{system:t,resources:i,url:r,pageMeta:s}=o,d=P(r),u=l.useMemo(()=>({imageLoader:a,assetBaseUrl:n,resources:i,breakpoints:f,onError:console.error}),[i]);return e.jsxs(m.Provider,{value:u,children:[e.jsx(p.Provider,{value:r,children:e.jsx(S,{pageKey:d,system:t})}),e.jsx(g,{url:r,pageMeta:s,siteName:c,imageLoader:a,assetBaseUrl:n}),e.jsx(h,{children:s.title})]})},M=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),L=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:a({src:`${n}${x}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),E.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:L},Symbol.toStringTag,{value:"Module"})),N={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-30/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-30/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{N as configValuesSerialized};
