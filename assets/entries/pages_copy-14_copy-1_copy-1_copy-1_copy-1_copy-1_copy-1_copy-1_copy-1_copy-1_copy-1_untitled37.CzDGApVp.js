import{j as e,r as l,a as i,i as o,R as y,b as h,P as m,c as x,d as u}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",g=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",w=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],S=[],z=a=>e.jsx("body",{className:"w-element",children:e.jsx(f,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<style>
    body {
        margin: 0;
        background-color: #0b0b0b;
        overflow: hidden;
        cursor: none;
        font-family: sans-serif;
    }
    #score-board {
        position: absolute;
        top: 20px;
        left: 20px;
        color: white;
        font-size: 20px;
        pointer-events: none;
        z-index: 10;
    }
    canvas {
        display: block;
    }
</style>


    <div id="score-board">Score: 0 | Health: 100%</div>
    <canvas id="game"></canvas>

<script>
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let score = 0;
    let health = 100;
    let gameRunning = true;

    // بازیکن
    const player = {
        x: canvas.width / 2,
        y: canvas.height - 100,
        size: 20,
        color: 'white'
    };

    // دشمنان (موانع)
    let enemies = [];
    let enemySpeed = 3;
    let spawnRate = 40; // هر چه کمتر، دشمن بیشتر
    let frames = 0;

    window.addEventListener('mousemove', (e) => {
        player.x = e.clientX;
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        player.y = canvas.height - 100;
    });

    function drawPlayer() {
        ctx.fillStyle = player.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "white";
        ctx.beginPath();
        // رسم مثلث
        ctx.moveTo(player.x, player.y);
        ctx.lineTo(player.x - player.size, player.y + player.size * 2);
        ctx.lineTo(player.x + player.size, player.y + player.size * 2);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    function handleEnemies() {
        if (frames % spawnRate === 0) {
            let size = Math.random() * 30 + 10;
            enemies.push({
                x: Math.random() * canvas.width,
                y: -50,
                size: size,
                speed: Math.random() * 2 + enemySpeed,
                color: \`hsl(\${Math.random() * 60}, 100%, 50%)\` // رنگ‌های آتشین
            });
        }

        for (let i = 0; i < enemies.length; i++) {
            let e = enemies[i];
            e.y += e.speed;

            // رسم دشمن
            ctx.fillStyle = e.color;
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
            ctx.fill();

            // برخورد
            let dx = player.x - e.x;
            let dy = (player.y + player.size) - e.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < player.size + e.size) {
                health -= 20; // دمیج
                enemies.splice(i, 1);
                i--;
                if(health <= 0) gameRunning = false;
            }

            // خارج شدن از صفحه
            if (e.y > canvas.height) {
                enemies.splice(i, 1);
                i--;
                score++;
            }
        }
    }

    function animate() {
        if (!gameRunning) {
            ctx.fillStyle = 'white';
            ctx.font = '50px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2);
            ctx.font = '20px sans-serif';
            ctx.fillText('Refresh to Restart', canvas.width/2, canvas.height/2 + 50);
            return;
        }

        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // افکت دنباله دار شدن
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        drawPlayer();
        handleEnemies();

        document.getElementById('score-board').innerText = \`Score: \${score} | Health: \${health}%\`;

        // افزایش سختی
        frames++;
        if (frames % 500 === 0) {
            enemySpeed += 1;
            spawnRate = Math.max(10, spawnRate - 2);
        }

        requestAnimationFrame(animate);
    }

    animate();
<\/script>


`,className:"w-html-embed"})}),P=a=>{const{origin:t,pathname:s,search:n}=new URL(a);return`${t}${s}${n}`},b=l.memo(({pageKey:a,system:t})=>e.jsx(z,{system:t},a),(a,t)=>a.pageKey===t.pageKey),j=({data:a})=>{const{system:t,resources:s,url:n,pageMeta:r}=a,d=P(n),p=l.useMemo(()=>({imageLoader:o,assetBaseUrl:i,resources:s,breakpoints:g,onError:console.error}),[s]);return e.jsxs(y.Provider,{value:p,children:[e.jsx(h.Provider,{value:n,children:e.jsx(b,{pageKey:d,system:t})}),e.jsx(m,{url:n,pageMeta:r,siteName:c,imageLoader:o,assetBaseUrl:i}),e.jsx(x,{children:r.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),R=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:o({src:`${i}${v}`})}),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),S.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:R},Symbol.toStringTag,{value:"Module"})),$={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-14/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-14/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{$ as configValuesSerialized};
