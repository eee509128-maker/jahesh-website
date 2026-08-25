import{j as e,r as s,a as r,i as l,R as u,b as h,P as f,c as g,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",m=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],b="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],k=a=>e.jsx("body",{className:"w-element",children:e.jsx(y,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <!-- لود کردن فونت آیکون FontAwesome برای نمایش لوگوها -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<style>
  body {
    background: #e0e5ec;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style: none;
    margin: 0 20px;
  }

  ul li a {
    position: relative;
    display: block;
    width: 80px;
    height: 80px;
    background: #fff;
    text-align: center;
    line-height: 80px;
    font-size: 30px;
    color: #555;
    border-radius: 10px;
    transition: 0.5s;
    transform: perspective(1000px) rotate(-30deg) skew(25deg);
    box-shadow: -20px 20px 10px rgba(0,0,0,0.1);
  }

  /* سایه لایه‌لایه برای ایجاد عمق 3D */
  ul li a::before {
    content: '';
    position: absolute;
    top: 10px; left: -20px;
    height: 100%;
    width: 20px;
    background: #b1b1b1;
    transition: 0.5s;
    transform: rotate(0deg) skewY(-45deg);
  }

  ul li a::after {
    content: '';
    position: absolute;
    bottom: -20px; left: -10px;
    height: 20px;
    width: 100%;
    background: #b1b1b1;
    transition: 0.5s;
    transform: rotate(0deg) skewX(-45deg);
  }

  /* انیمیشن هاور */
  ul li a:hover {
    transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px);
    box-shadow: -50px 50px 50px rgba(0,0,0,0.5);
    color: white;
  }

  /* رنگ‌های اختصاصی هر برند */
  ul li:nth-child(1) a:hover { background: #3b5999; } /* Facebook */
  ul li:nth-child(1) a:hover::before { background: #2e4a86; }
  ul li:nth-child(1) a:hover::after { background: #4a69ad; }

  ul li:nth-child(2) a:hover { background: #55acee; } /* Twitter */
  ul li:nth-child(2) a:hover::before { background: #4184b0; }
  ul li:nth-child(2) a:hover::after { background: #6ec0ef; }

  ul li:nth-child(3) a:hover { background: #e4405f; } /* Instagram */
  ul li:nth-child(3) a:hover::before { background: #c13584; }
  ul li:nth-child(3) a:hover::after { background: #fd5949; }
</style>



  <ul>
    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
  </ul>



`,className:"w-html-embed"})}),w=a=>{const{origin:t,pathname:i,search:o}=new URL(a);return`${t}${i}${o}`},S=s.memo(({pageKey:a,system:t})=>e.jsx(k,{system:t},a),(a,t)=>a.pageKey===t.pageKey),P=({data:a})=>{const{system:t,resources:i,url:o,pageMeta:n}=a,c=w(o),p=s.useMemo(()=>({imageLoader:l,assetBaseUrl:r,resources:i,breakpoints:m,onError:console.error}),[i]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(h.Provider,{value:o,children:e.jsx(S,{pageKey:c,system:t})}),e.jsx(f,{url:o,pageMeta:n,siteName:d,imageLoader:l,assetBaseUrl:r}),e.jsx(g,{children:n.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),T=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:l({src:`${r}${b}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),j.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-11/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-11/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{F as configValuesSerialized};
