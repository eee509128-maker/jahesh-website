import{j as e,r as s,a as l,i as a,R as y,b as h,P as u,c as f,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const i="jahesh",g=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],m="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],P=t=>e.jsx("body",{className:"w-element",children:e.jsx(b,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
    body {
        margin: 0;
        background: #000;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        cursor: none; /* مخفی کردن موس */
    }
    canvas {
        border: 2px solid #00ffff;
        box-shadow: 0 0 20px #00ffff;
        background: rgba(0, 20, 40, 0.8);
    }
</style>


<canvas id="pong" width="800" height="500"></canvas>

<script>
    const cvs = document.getElementById("pong");
    const ctx = cvs.getContext("2d");

    // ایجاد راکت کاربر
    const user = {
        x: 0,
        y: cvs.height/2 - 50,
        w: 10,
        h: 100,
        color: "#00ffff",
        score: 0
    }

    // ایجاد راکت کامپیوتر
    const com = {
        x: cvs.width - 10,
        y: cvs.height/2 - 50,
        w: 10,
        h: 100,
        color: "#ff0055",
        score: 0
    }

    // ایجاد توپ
    const ball = {
        x: cvs.width/2,
        y: cvs.height/2,
        r: 10,
        speed: 7,
        velocityX: 5,
        velocityY: 5,
        color: "white"
    }

    // رسم مستطیل
    function drawRect(x,y,w,h,color){
        ctx.fillStyle = color;
        ctx.fillRect(x,y,w,h);
        // افکت درخشش
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
    }

    // رسم دایره (توپ)
    function drawArc(x,y,r,color){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x,y,r,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
    }

    // گوش دادن به حرکت موس
    cvs.addEventListener("mousemove", getMousePos);

    function getMousePos(evt){
        let rect = cvs.getBoundingClientRect();
        user.y = evt.clientY - rect.top - user.h/2;
    }

    // ریست کردن توپ وقتی کسی گل میخورد
    function resetBall(){
        ball.x = cvs.width/2;
        ball.y = cvs.height/2;
        ball.velocityX = -ball.velocityX;
        ball.speed = 7;
    }

    // رسم متن (امتیاز)
    function drawText(text,x,y, color){
        ctx.fillStyle = color;
        ctx.font = "50px monospace";
        ctx.fillText(text, x, y);
    }

    // منطق بازی
    function update(){
        // حرکت توپ
        ball.x += ball.velocityX;
        ball.y += ball.velocityY;

        // هوش مصنوعی ساده برای کامپیوتر (با کمی تاخیر حرکت میکند)
        com.y += ((ball.y - (com.y + com.h/2))) * 0.1;

        // برخورد توپ با بالا و پایین زمین
        if(ball.y - ball.r < 0 || ball.y + ball.r > cvs.height){
            ball.velocityY = -ball.velocityY;
        }

        // تشخیص اینکه توپ به راکت کاربر خورده یا کامپیوتر
        let player = (ball.x + ball.r < cvs.width/2) ? user : com;

        if(collision(ball, player)){
            // محاسبه نقطه برخورد
            let collidePoint = (ball.y - (player.y + player.h/2));
            collidePoint = collidePoint / (player.h/2);

            // محاسبه زاویه برگشت (45 درجه)
            let angleRad = (Math.PI/4) * collidePoint;

            // جهت توپ
            let direction = (ball.x + ball.r < cvs.width/2) ? 1 : -1;
            ball.velocityX = direction * ball.speed * Math.cos(angleRad);
            ball.velocityY = ball.speed * Math.sin(angleRad);

            // افزایش سرعت بازی با هر ضربه
            ball.speed += 0.5;
        }

        // امتیازدهی
        if(ball.x - ball.r < 0){
            com.score++;
            resetBall();
        } else if(ball.x + ball.r > cvs.width){
            user.score++;
            resetBall();
        }
    }

    // تشخیص برخورد
    function collision(b,p){
        p.top = p.y;
        p.bottom = p.y + p.h;
        p.left = p.x;
        p.right = p.x + p.w;

        b.top = b.y - b.r;
        b.bottom = b.y + b.r;
        b.left = b.x - b.r;
        b.right = b.x + b.r;

        return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
    }

    // رندر گرافیک
    function render(){
        // پاک کردن صفحه
        drawRect(0, 0, cvs.width, cvs.height, "#000");
        
        // رسم تور وسط
        for(let i=0; i<=cvs.height; i+=35){
            drawRect(cvs.width/2 - 1, i, 2, 20, "#fff");
        }
        
        drawText(user.score, cvs.width/4, cvs.height/5, "#00ffff");
        drawText(com.score, 3*cvs.width/4, cvs.height/5, "#ff0055");
        
        drawRect(user.x, user.y, user.w, user.h, user.color);
        drawRect(com.x, com.y, com.w, com.h, com.color);
        
        drawArc(ball.x, ball.y, ball.r, ball.color);
    }

    function game(){
        update();
        render();
    }

    const framePerSecond = 50;
    setInterval(game, 1000/framePerSecond);

<\/script>


`,className:"w-html-embed"})}),S=t=>{const{origin:n,pathname:r,search:o}=new URL(t);return`${n}${r}${o}`},j=s.memo(({pageKey:t,system:n})=>e.jsx(P,{system:n},t),(t,n)=>t.pageKey===n.pageKey),R=({data:t})=>{const{system:n,resources:r,url:o,pageMeta:c}=t,d=S(o),p=s.useMemo(()=>({imageLoader:a,assetBaseUrl:l,resources:r,breakpoints:g,onError:console.error}),[r]);return e.jsxs(y.Provider,{value:p,children:[e.jsx(h.Provider,{value:o,children:e.jsx(j,{pageKey:d,system:n})}),e.jsx(u,{url:o,pageMeta:c,siteName:i,imageLoader:a,assetBaseUrl:l}),e.jsx(f,{children:c.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),_=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:i};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:a({src:`${l}${m}`})}),v.map(n=>e.jsx("link",{rel:"preload",href:`${l}${n}`,as:"font",crossOrigin:"anonymous"},n)),w.map(n=>e.jsx("link",{rel:"preload",href:`${l}${n}`,as:"image"},n))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-13/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-13/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{C as configValuesSerialized};
