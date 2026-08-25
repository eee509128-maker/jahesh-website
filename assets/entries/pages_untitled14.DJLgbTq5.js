import{j as e,r as o,a as s,i,R as m,b as u,P as f,c as g,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],j="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],P=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{code:`


  <meta charset="UTF-8">
  <title>بازی حافظه (Memory Game)</title>
  <style>
    body { font-family: system-ui; background: #111; color: #fff; text-align: center; margin: 0; padding: 20px; }
    #board { display: grid; grid-template-columns: repeat(4, 90px); gap: 10px; margin: 30px auto; max-width: 420px; }
    .card { width: 90px; height: 90px; background: #333; border-radius: 12px; cursor: pointer; font-size: 3rem; display: flex; align-items: center; justify-content: center; transition: transform 0.3s; }
    .card.flipped { transform: rotateY(180deg); background: #444; }
    .card.matched { background: #0f0; pointer-events: none; }
    #status { font-size: 1.8rem; margin: 20px; }
  </style>


  <h1>بازی حافظه – جفت‌ها رو پیدا کن!</h1>
  <div id="status">تعداد حرکت: ۰</div>
  <div id="board"></div>

  <script>
    const emojis = ['🍎','🍌','🍇','🍉','🍓','🍒','🍍','🥝'];
    const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    let flipped = [], moves = 0, matched = 0;

    function createCard(emoji, index) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.emoji = emoji;
      card.dataset.index = index;
      card.innerHTML = '?';
      card.addEventListener('click', flipCard);
      board.appendChild(card);
    }

    function flipCard(e) {
      const card = e.target;
      if (card.classList.contains('flipped') || flipped.length === 2) return;

      card.classList.add('flipped');
      card.innerHTML = card.dataset.emoji;
      flipped.push(card);

      if (flipped.length === 2) {
        moves++;
        status.textContent = \`تعداد حرکت: \${moves}\`;
        setTimeout(checkMatch, 800);
      }
    }

    function checkMatch() {
      const [card1, card2] = flipped;
      if (card1.dataset.emoji === card2.dataset.emoji) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matched += 2;
        if (matched === cards.length) alert('تبریک! برنده شدی 🎉');
      } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerHTML = '?';
        card2.innerHTML = '?';
      }
      flipped = [];
    }

    cards.forEach((emoji, i) => createCard(emoji, i));
  <\/script>

`,clientOnly:!0,executeScriptOnCanvas:!0,className:"w-html-embed"})}),b=a=>{const{origin:t,pathname:d,search:r}=new URL(a);return`${t}${d}${r}`},T=o.memo(({pageKey:a,system:t})=>e.jsx(P,{system:t},a),(a,t)=>a.pageKey===t.pageKey),z=({data:a})=>{const{system:t,resources:d,url:r,pageMeta:n}=a,l=b(r),p=o.useMemo(()=>({imageLoader:i,assetBaseUrl:s,resources:d,breakpoints:y,onError:console.error}),[d]);return e.jsxs(m.Provider,{value:p,children:[e.jsx(u.Provider,{value:r,children:e.jsx(T,{pageKey:l,system:t})}),e.jsx(f,{url:r,pageMeta:n,siteName:c,imageLoader:i,assetBaseUrl:s}),e.jsx(g,{children:n.title})]})},_=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),E=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${s}${j}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},L=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled14/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled14/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}}};export{C as configValuesSerialized};
