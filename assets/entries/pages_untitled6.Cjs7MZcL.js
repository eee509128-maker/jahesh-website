import{j as e,r as d,a as r,i as s,R as p,b as m,P as g,c as f,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as v}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],P=t=>e.jsx("body",{className:"w-element",children:e.jsx(v,{code:`<div id="mouse-bg"></div>

<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  #mouse-bg {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(140, 0, 255, 0.30),
      #0a0a0a 65%
    );
    transition: background 0.12s ease;
  }
</style>

<script>
  (function() {
    const bg = document.getElementById('mouse-bg');
    if (!bg) return;

    function updateGradient(e) {
      if (!bg) return;
      const x = e ? (e.clientX / window.innerWidth) * 100 : 50;
      const y = e ? (e.clientY / window.innerHeight) * 100 : 50;
      
      bg.style.background = \`radial-gradient(circle at \${x}% \${y}%, rgba(140, 0, 255, 0.38), #0a0a0a 65%)\`;
    }

    // شروع اولیه
    updateGradient();

    // حرکت ماوس
    let rafId;
    const onMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => updateGradient(e));
    };

    document.addEventListener('mousemove', onMove, { passive: true });

    // اگر صفحه عوض شد (مهم برای Webstudio و SPA)
    const observer = new MutationObserver(() => {
      if (document.getElementById('mouse-bg')) {
        updateGradient();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // تمیز کردن (اختیاری)
    window.addEventListener('beforeunload', () => {
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
    });
  })();
<\/script>`,clientOnly:!0,className:"w-html-embed"})}),S=t=>{const{origin:n,pathname:o,search:a}=new URL(t);return`${n}${o}${a}`},w=d.memo(({pageKey:t,system:n})=>e.jsx(P,{system:n},t),(t,n)=>t.pageKey===n.pageKey),z=({data:t})=>{const{system:n,resources:o,url:a,pageMeta:i}=t,u=S(a),c=d.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:o,breakpoints:y,onError:console.error}),[o]);return e.jsxs(p.Provider,{value:c,children:[e.jsx(m.Provider,{value:a,children:e.jsx(w,{pageKey:u,system:n})}),e.jsx(g,{url:a,pageMeta:i,siteName:l,imageLoader:s,assetBaseUrl:r}),e.jsx(f,{children:i.title})]})},_=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),T=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${x}`})}),b.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"font",crossOrigin:"anonymous"},n)),j.map(n=>e.jsx("link",{rel:"preload",href:`${r}${n}`,as:"image"},n))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),$={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled6/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/untitled6/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{$ as configValuesSerialized};
