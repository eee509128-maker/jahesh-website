import{j as e,r as d,a as i,i as s,R as m,b as g,P as u,c as x,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",v=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],z=a=>e.jsx("body",{className:"w-element",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>کارت پوستر سینمایی</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
        
        body {
            margin: 0;
            min-height: 100vh;
            background: #1a1a2e;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Lalezar', cursive;
        }
        
        .movie-card {
            width: 300px;
            height: 400px;
            background: linear-gradient(145deg, #16213e, #0f3460);
            border-radius: 20px;
            padding: 20px;
            color: white;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }
        
        .movie-card:hover {
            transform: translateY(-10px) rotate(2deg);
            box-shadow: 0 30px 60px rgba(0,0,0,0.7);
        }
        
        .movie-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                transparent 30%,
                rgba(255, 255, 255, 0.1) 50%,
                transparent 70%
            );
            transform: rotate(45deg);
            animation: shine 3s infinite;
        }
        
        @keyframes shine {
            0% { transform: translateX(-100%) rotate(45deg); }
            100% { transform: translateX(100%) rotate(45deg); }
        }
        
        .movie-title {
            font-size: 2rem;
            margin: 0;
            text-shadow: 0 0 10px #e94560;
            color: #e94560;
            position: relative;
            z-index: 1;
        }
        
        .movie-year {
            font-size: 1rem;
            color: #888;
            margin: 5px 0 20px;
        }
        
        .movie-poster {
            width: 100%;
            height: 200px;
            background: linear-gradient(45deg, #53354a, #2b2e4a);
            border-radius: 10px;
            margin: 15px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: rgba(255,255,255,0.5);
            border: 2px solid #e94560;
            position: relative;
            overflow: hidden;
        }
        
        .movie-poster::after {
            content: '🎬';
            font-size: 5rem;
            opacity: 0.3;
        }
        
        .movie-desc {
            font-size: 0.9rem;
            line-height: 1.6;
            color: #ccc;
            text-align: justify;
        }
        
        .rating {
            position: absolute;
            top: 20px;
            right: 20px;
            background: #e94560;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.9rem;
            z-index: 1;
        }
        
        .badge {
            display: inline-block;
            background: rgba(233, 69, 96, 0.3);
            padding: 3px 10px;
            border-radius: 15px;
            font-size: 0.8rem;
            margin-left: 5px;
            border: 1px solid #e94560;
        }
    </style>


    <div class="movie-card">
        <div class="rating">⭐ ۸.۵</div>
        <h1 class="movie-title">شهر ستارگان</h1>
        <div class="movie-year">۲۰۲۴</div>
        <div class="movie-poster"></div>
        <div class="movie-desc">
            <span class="badge">درام</span>
            <span class="badge">عاشقانه</span>
            <span class="badge">موسیقی</span>
            <p style="margin-top: 15px;">داستانی از عشق و موسیقی در شهری پر از ستاره...</p>
        </div>
    </div>

`,className:"w-html-embed"})}),w=a=>{const{origin:t,pathname:o,search:r}=new URL(a);return`${t}${o}${r}`},S=d.memo(({pageKey:a,system:t})=>e.jsx(z,{system:t},a),(a,t)=>a.pageKey===t.pageKey),P=({data:a})=>{const{system:t,resources:o,url:r,pageMeta:n}=a,p=w(r),c=d.useMemo(()=>({imageLoader:s,assetBaseUrl:i,resources:o,breakpoints:v,onError:console.error}),[o]);return e.jsxs(m.Provider,{value:c,children:[e.jsx(g.Provider,{value:r,children:e.jsx(S,{pageKey:p,system:t})}),e.jsx(u,{url:r,pageMeta:n,siteName:l,imageLoader:s,assetBaseUrl:i}),e.jsx(x,{children:n.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),_=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${i}${y}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),j.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled20/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled20/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{U as configValuesSerialized};
