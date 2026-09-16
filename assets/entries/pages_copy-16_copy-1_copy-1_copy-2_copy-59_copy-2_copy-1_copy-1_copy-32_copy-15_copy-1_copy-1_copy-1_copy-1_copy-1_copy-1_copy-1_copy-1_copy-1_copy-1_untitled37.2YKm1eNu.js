import{j as e,r as n,a as o,i,R as y,b as g,P as u,c as m,d as v}from"../chunks/chunk-_4i898Gl.js";import{U as b}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],f="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",x=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],P=r=>e.jsx("body",{className:"w-element",children:e.jsx(b,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced API Analytics Dashboard</title>
    <style>
        :root {
            --primary: #6366f1;
            --accent: #f43f5e;
            --bg: #0f172a;
            --glass: rgba(255, 255, 255, 0.05);
            --border: rgba(255, 255, 255, 0.1);
        }

        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: radial-gradient(circle at top left, #1e1b4b, #0f172a);
            color: white;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        /* پس‌زمینه متحرک */
        .orb {
            position: absolute;
            width: 400px;
            height: 400px;
            background: linear-gradient(45deg, var(--primary), #a855f7);
            filter: blur(80px);
            border-radius: 50%;
            z-index: -1;
            animation: move 20s infinite alternate;
        }

        @keyframes move {
            from { transform: translate(-20%, -20%); }
            to { transform: translate(20%, 20%); }
        }

        .dashboard {
            width: 90%;
            max-width: 1200px;
            height: 80vh;
            background: var(--glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border);
            border-radius: 24px;
            display: grid;
            grid-template-columns: 250px 1fr;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        /* سایدبار */
        .sidebar {
            padding: 20px;
            border-left: 1px solid var(--border);
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .api-key-box {
            background: rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 12px;
            font-size: 0.8rem;
            word-break: break-all;
            border: 1px dashed var(--primary);
        }

        /* محتوای اصلی */
        .main-content {
            padding: 30px;
            overflow-y: auto;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }

        .stat-card {
            background: var(--glass);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--border);
            transition: transform 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.1);
        }

        .stat-value {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--primary);
        }

        /* چارت گرافیکی شبیه‌سازی شده */
        .visualizer {
            height: 250px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 16px;
            position: relative;
            display: flex;
            align-items: flex-end;
            padding: 10px;
            gap: 5px;
        }

        .bar {
            flex: 1;
            background: linear-gradient(to top, var(--primary), #818cf8);
            border-radius: 4px 4px 0 0;
            animation: grow 1.5s ease-out forwards;
        }

        @keyframes grow {
            from { height: 0; }
            to { height: var(--h); }
        }

        button {
            background: var(--primary);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
        }

        button:hover {
            box-shadow: 0 0 20px var(--primary);
            filter: brightness(1.2);
        }

    </style>



    <div class="orb"></div>

    <main class="dashboard">
        <aside class="sidebar">
            <h2>پنل مدیریتی</h2>
            <div class="api-key-box">
                <small>کلید فعال:</small><br>
                <code>gsk_xVrb...0dP3</code>
            </div>
            <nav>
                <p>🚀 مانیتورینگ زنده</p>
                <p>📊 گزارشات ماهانه</p>
                <p>🛡️ امنیت و دسترسی</p>
            </nav>
            <button onclick="refreshData()">به‌روزرسانی داده‌ها</button>
        </aside>

        <section class="main-content">
            <h1>تحلیل هوشمند ترافیک API</h1>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div>درخواست‌های امروز</div>
                    <div class="stat-value">1,284</div>
                </div>
                <div class="stat-card">
                    <div>میانگین تاخیر (ms)</div>
                    <div class="stat-value">42ms</div>
                </div>
                <div class="stat-card">
                    <div>نرخ موفقیت</div>
                    <div class="stat-value" style="color: #10b981;">99.2%</div>
                </div>
            </div>

            <h3>نوسانات بارگذاری لحظه‌ای</h3>
            
            <div class="visualizer" id="chart">
                <div class="bar" style="--h: 40%"></div>
                <div class="bar" style="--h: 70%"></div>
                <div class="bar" style="--h: 55%"></div>
                <div class="bar" style="--h: 90%"></div>
                <div class="bar" style="--h: 30%"></div>
                <div class="bar" style="--h: 85%"></div>
                <div class="bar" style="--h: 60%"></div>
            </div>
        </section>
    </main>

    <script>
        function refreshData() {
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                const newHeight = Math.floor(Math.random() * 90) + 10;
                bar.style.setProperty('--h', newHeight + '%');
                bar.style.animation = 'none';
                bar.offsetHeight; // trigger reflow
                bar.style.animation = 'grow 0.5s ease-out forwards';
            });
        }
    <\/script>

`,className:"w-html-embed"})}),S=r=>{const{origin:a,pathname:s,search:t}=new URL(r);return`${a}${s}${t}`},j=n.memo(({pageKey:r,system:a})=>e.jsx(P,{system:a},r),(r,a)=>r.pageKey===a.pageKey),k=({data:r})=>{const{system:a,resources:s,url:t,pageMeta:d}=r,p=S(t),c=n.useMemo(()=>({imageLoader:i,assetBaseUrl:o,resources:s,breakpoints:h,onError:console.error}),[s]);return e.jsxs(y.Provider,{value:c,children:[e.jsx(g.Provider,{value:t,children:e.jsx(j,{pageKey:p,system:a})}),e.jsx(u,{url:t,pageMeta:d,siteName:l,imageLoader:i,assetBaseUrl:o}),e.jsx(m,{children:d.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),T=({})=>{const r={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${o}${f}`})}),x.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"font",crossOrigin:"anonymous"},a)),w.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"image"},a))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),R={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-16/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-16/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{R as configValuesSerialized};
