import{j as n,r as l,a as s,i as r,R as x,b as u,P as m,c as f,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as g}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],S=t=>n.jsx("body",{className:"w-element",children:n.jsx(g,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دکمه‌های نئومورفیسم</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            background: #e0e5ec;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
        }
        
        .container {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }
        
        .neumorph-btn {
            width: 120px;
            height: 120px;
            border-radius: 30px;
            background: #e0e5ec;
            box-shadow: 
                9px 9px 16px #a3b1c6,
                -9px -9px 16px #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
            color: #4a4a4a;
        }
        
        .neumorph-btn:hover {
            box-shadow: 
                inset 9px 9px 16px #a3b1c6,
                inset -9px -9px 16px #ffffff;
        }
        
        .neumorph-btn:hover .btn-icon {
            transform: scale(0.9);
        }
        
        .btn-icon {
            font-size: 3rem;
            margin-bottom: 10px;
            transition: transform 0.2s;
        }
        
        .btn-text {
            font-size: 0.9rem;
            font-weight: bold;
        }
        
        .neumorph-card {
            padding: 30px;
            border-radius: 50px;
            background: #e0e5ec;
            box-shadow: 
                20px 20px 30px #a3b1c6,
                -20px -20px 30px #ffffff;
            text-align: center;
        }
        
        h2 {
            color: #4a4a4a;
            margin-bottom: 30px;
        }
    </style>


    <div class="neumorph-card">
        <h2>🎨 دکمه‌های نئومورفیسم</h2>
        <div class="container">
            <div class="neumorph-btn">
                <span class="btn-icon">❤️</span>
                <span class="btn-text">پسندیدن</span>
            </div>
            <div class="neumorph-btn">
                <span class="btn-icon">📷</span>
                <span class="btn-text">عکس</span>
            </div>
            <div class="neumorph-btn">
                <span class="btn-icon">🎵</span>
                <span class="btn-text">موسیقی</span>
            </div>
            <div class="neumorph-btn">
                <span class="btn-icon">⚙️</span>
                <span class="btn-text">تنظیمات</span>
            </div>
            <div class="neumorph-btn">
                <span class="btn-icon">✉️</span>
                <span class="btn-text">پیام</span>
            </div>
            <div class="neumorph-btn">
                <span class="btn-icon">📁</span>
                <span class="btn-text">فایل</span>
            </div>
        </div>
        <p style="color: #666; margin-top: 20px;">ماوس رو ببر رو دکمه‌ها!</p>
    </div>

`,className:"w-html-embed"})}),P=t=>{const{origin:e,pathname:o,search:a}=new URL(t);return`${e}${o}${a}`},w=l.memo(({pageKey:t,system:e})=>n.jsx(S,{system:e},t),(t,e)=>t.pageKey===e.pageKey),z=({data:t})=>{const{system:e,resources:o,url:a,pageMeta:i}=t,d=P(a),c=l.useMemo(()=>({imageLoader:r,assetBaseUrl:s,resources:o,breakpoints:b,onError:console.error}),[o]);return n.jsxs(x.Provider,{value:c,children:[n.jsx(u.Provider,{value:a,children:n.jsx(w,{pageKey:d,system:e})}),n.jsx(m,{url:a,pageMeta:i,siteName:p,imageLoader:r,assetBaseUrl:s}),n.jsx(f,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),_=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:p};return n.jsxs(n.Fragment,{children:[n.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),n.jsx("link",{rel:"icon",href:r({src:`${s}${v}`})}),y.map(e=>n.jsx("link",{rel:"preload",href:`${s}${e}`,as:"font",crossOrigin:"anonymous"},e)),j.map(e=>n.jsx("link",{rel:"preload",href:`${s}${e}`,as:"image"},e))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),k={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled21/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled21/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{k as configValuesSerialized};
