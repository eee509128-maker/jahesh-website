import{j as e,r as i,a as r,i as s,R as y,b as u,P as m,c as f,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const p="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],S="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],j=[],P=o=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<style>
  body { display:flex; justify-content:center; align-items:center; height:100vh; background:#111; }
  .timer { font-size: 80px; color: #00ff88; font-family: monospace; text-shadow: 0 0 20px #00ff88; }
</style>


  <div class="timer" id="timer">10:00</div>
  <script>
    let total = 600;
    const el = document.getElementById('timer');
    const interval = setInterval(() => {
      if (total <= 0) { clearInterval(interval); el.textContent = "⏰ تموم شد!"; return; }
      total--;
      const m = String(Math.floor(total/60)).padStart(2,'0');
      const s = String(total%60).padStart(2,'0');
      el.textContent = \`\${m}:\${s}\`;
    }, 1000);
  <\/script>


`,className:"w-html-embed"})}),z=o=>{const{origin:t,pathname:n,search:a}=new URL(o);return`${t}${n}${a}`},_=i.memo(({pageKey:o,system:t})=>e.jsx(P,{system:t},o),(o,t)=>o.pageKey===t.pageKey),T=({data:o})=>{const{system:t,resources:n,url:a,pageMeta:l}=o,c=z(a),d=i.useMemo(()=>({imageLoader:s,assetBaseUrl:r,resources:n,breakpoints:h,onError:console.error}),[n]);return e.jsxs(y.Provider,{value:d,children:[e.jsx(u.Provider,{value:a,children:e.jsx(_,{pageKey:c,system:t})}),e.jsx(m,{url:a,pageMeta:l,siteName:p,imageLoader:s,assetBaseUrl:r}),e.jsx(f,{children:l.title})]})},b=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),w=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:p};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${r}${S}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),j.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-27/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-27/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{C as configValuesSerialized};
