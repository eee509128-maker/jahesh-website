import{j as e,r as s,a as i,i as l,R as y,b as u,P as h,c as f,d as m}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",g=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",S=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],P=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <title>Neon Snake Game</title>
    <style>
        body {
            background: #0d0d0d;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Courier New', sans-serif;
            color: white;
        }
        canvas {
            background: #111;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
            border: 2px solid #333;
        }
        h2 { margin-bottom: 10px; }
    </style>



    <h2>امتیاز: <span id="score">0</span></h2>
    <canvas id="gameCanvas" width="400" height="400"></canvas>

<script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    let tileCount = 20; // تعداد خانه ها در هر ردیف
    let tileSize = canvas.width / tileCount - 2;
    let headX = 10;
    let headY = 10;
    
    // سرعت حرکت
    let xVelocity = 0;
    let yVelocity = 0;

    // موقعیت سیب
    let appleX = 5;
    let appleY = 5;

    // بدن مار
    const snakeParts = [];
    let tailLength = 2;

    let score = 0;
    const scoreElement = document.getElementById("score");

    // حلقه اصلی بازی
    function drawGame() {
        changeSnakePosition();
        let result = isGameOver();
        if (result) {
            return;
        }

        clearScreen();
        checkAppleCollision();
        drawApple();
        drawSnake();
        setTimeout(drawGame, 1000 / 10); // سرعت بازی (10 فریم بر ثانیه)
    }

    function isGameOver() {
        let gameOver = false;

        // برخورد با دیوارها (بازی تمام نمیشود، از طرف دیگر می آید - حالت کلاسیک)
        // اگر میخواهید با دیوار ببازد، شرط ها را تغییر دهید.
        // اینجا حالت "بدون دیوار" پیاده شده است:
        if (headX < 0) headX = tileCount - 1; 
        if (headX >= tileCount) headX = 0;
        if (headY < 0) headY = tileCount - 1; 
        if (headY >= tileCount) headY = 0;

        // برخورد با خود
        if (xVelocity === 0 && yVelocity === 0) {
            return false;
        }

        for (let i = 0; i < snakeParts.length; i++) {
            let part = snakeParts[i];
            if (part.x === headX && part.y === headY) {
                gameOver = true;
                break;
            }
        }

        if (gameOver) {
            ctx.fillStyle = "white";
            ctx.font = "50px Verdana";
            ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
        }

        return gameOver;
    }

    function clearScreen() {
        ctx.fillStyle = "#0d0d0d";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawSnake() {
        ctx.fillStyle = "lime";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "lime";
        
        for (let i = 0; i < snakeParts.length; i++) {
            let part = snakeParts[i];
            ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
        }

        snakeParts.push(new SnakePart(headX, headY));
        if (snakeParts.length > tailLength) {
            snakeParts.shift();
        }

        ctx.fillStyle = "orange"; // سر مار
        ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
        ctx.shadowBlur = 0;
    }

    function changeSnakePosition() {
        headX = headX + xVelocity;
        headY = headY + yVelocity;
    }

    function drawApple() {
        ctx.fillStyle = "red";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "red";
        ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
        ctx.shadowBlur = 0;
    }

    function checkAppleCollision() {
        if (appleX === headX && appleY === headY) {
            appleX = Math.floor(Math.random() * tileCount);
            appleY = Math.floor(Math.random() * tileCount);
            tailLength++;
            score++;
            scoreElement.innerText = score;
        }
    }

    document.body.addEventListener("keydown", keyDown);

    function keyDown(event) {
        // بالا
        if (event.keyCode == 38) {
            if (yVelocity == 1) return;
            yVelocity = -1;
            xVelocity = 0;
        }
        // پایین
        if (event.keyCode == 40) {
            if (yVelocity == -1) return;
            yVelocity = 1;
            xVelocity = 0;
        }
        // چپ
        if (event.keyCode == 37) {
            if (xVelocity == 1) return;
            yVelocity = 0;
            xVelocity = -1;
        }
        // راست
        if (event.keyCode == 39) {
            if (xVelocity == -1) return;
            yVelocity = 0;
            xVelocity = 1;
        }
    }

    class SnakePart {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    drawGame();
<\/script>


`,className:"w-html-embed"})}),k=a=>{const{origin:t,pathname:n,search:o}=new URL(a);return`${t}${n}${o}`},C=s.memo(({pageKey:a,system:t})=>e.jsx(P,{system:t},a),(a,t)=>a.pageKey===t.pageKey),V=({data:a})=>{const{system:t,resources:n,url:o,pageMeta:r}=a,d=k(o),p=s.useMemo(()=>({imageLoader:l,assetBaseUrl:i,resources:n,breakpoints:g,onError:console.error}),[n]);return e.jsxs(y.Provider,{value:p,children:[e.jsx(u.Provider,{value:o,children:e.jsx(C,{pageKey:d,system:t})}),e.jsx(h,{url:o,pageMeta:r,siteName:c,imageLoader:l,assetBaseUrl:i}),e.jsx(f,{children:r.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),z=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:l({src:`${i}${v}`})}),S.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},b=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-12/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-12/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}}};export{A as configValuesSerialized};
