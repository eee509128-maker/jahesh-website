import{j as e,r as p,a as n,i as r,R as g,b as m,P as u,c as y,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],w="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],v=[],k=t=>e.jsx("body",{className:"w-element",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`<div class="news-ticker-container">
  <div class="news-ticker">
    <div class="ticker-track">
      <!-- اخبار (دو بار تکرار شده تا حلقه بی‌نقص بشه) -->
      <span class="news-item">🚀 <strong>تیم رباتیک جهش</strong> قهرمان منطقه‌ای شد – مدال طلا رفت!</span>
      <span class="news-item">🔥 کارگاه <strong>هوش مصنوعی مولد ۲۰۲۶</strong> – پنج‌شنبه ۲۷ بهمن – فقط ۴۰ صندلی!</span>
      <span class="news-item">📢 فراخوان مقاله <strong>جهش ۱۴۰۵</strong> – موضوع: AI × پایداری – جایزه ۳۰ میلیونی</span>
      <span class="news-item">🌌 وبینار <strong>Quantum Computing مقدماتی</strong> با پروفسور رحیمی – شنبه ۲۱:۰۰</span>
      <span class="news-item">💜 عضویت جهش از <strong>۱۲۰۰ نفر</strong> گذشت – به جمع جهش‌گران بپیوند!</span>
      <span class="news-item">⚡ پروژه ملی <strong>جهش سبز</strong> با بودجه ۴ میلیاردی کلید خورد</span>
      <span class="news-item">🎮 چالش <strong>GameDev جهش</strong> – جایزه ۲۵ میلیونی – شروع: ۱۰ روز دیگر</span>

      <!-- تکرار برای حلقه بی‌درز -->
      <span class="news-item">🚀 <strong>تیم رباتیک جهش</strong> قهرمان منطقه‌ای شد – مدال طلا رفت!</span>
      <span class="news-item">🔥 کارگاه <strong>هوش مصنوعی مولد ۲۰۲۶</strong> – پنج‌شنبه ۲۷ بهمن – فقط ۴۰ صندلی!</span>
      <span class="news-item">📢 فراخوان مقاله <strong>جهش ۱۴۰۵</strong> – موضوع: AI × پایداری – جایزه ۳۰ میلیونی</span>
      <span class="news-item">🌌 وبینار <strong>Quantum Computing مقدماتی</strong> با پروفسور رحیمی – شنبه ۲۱:۰۰</span>
      <span class="news-item">💜 عضویت جهش از <strong>۱۲۰۰ نفر</strong> گذشت – به جمع جهش‌گران بپیوند!</span>
      <span class="news-item">⚡ پروژه ملی <strong>جهش سبز</strong> با بودجه ۴ میلیاردی کلید خورد</span>
      <span class="news-item">🎮 چالش <strong>GameDev جهش</strong> – جایزه ۲۵ میلیونی – شروع: ۱۰ روز دیگر</span>
    </div>
  </div>
</div>

<style>
.news-ticker-container {
  width: 100%;
  background: linear-gradient(90deg, #0f172a, #1e293b, #0f172a);
  overflow: hidden;
  border-top: 3px solid #3b82f6;
  border-bottom: 3px solid #8b5cf6;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  position: relative;
}

.news-ticker {
  padding: 14px 0;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.ticker-track {
  display: inline-block;
  animation: scroll 50s linear infinite;
  will-change: transform;
}

.news-item {
  display: inline-block;
  margin: 0 40px;
  font-family: 'Vazirmatn', system-ui, sans-serif;
  font-size: 1.18rem;
  font-weight: 700;
  color: #e0f2fe;
  text-shadow: 
    0 0 8px rgba(59, 130, 246, 0.8),
    0 0 16px rgba(139, 92, 246, 0.5);
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;
}

.news-item:hover {
  transform: scale(1.08) translateY(-2px);
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  color: white;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.7);
  text-shadow: 0 0 12px white;
}

/* انیمیشن اصلی */
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }   /* چون دو بار تکرار کردیم */
}

/* سرعت و pause روی هاور */
.news-ticker:hover .ticker-track {
  animation-play-state: paused;
}

/* برای موبایل کمی کوچکتر و سریع‌تر */
@media (max-width: 768px) {
  .news-item {
    font-size: 1rem;
    margin: 0 25px;
  }
  .ticker-track {
    animation-duration: 40s;
  }
}
</style>`,className:"w-html-embed"})}),j=t=>{const{origin:s,pathname:o,search:a}=new URL(t);return`${s}${o}${a}`},S=p.memo(({pageKey:t,system:s})=>e.jsx(k,{system:s},t),(t,s)=>t.pageKey===s.pageKey),P=({data:t})=>{const{system:s,resources:o,url:a,pageMeta:i}=t,c=j(a),d=p.useMemo(()=>({imageLoader:r,assetBaseUrl:n,resources:o,breakpoints:h,onError:console.error}),[o]);return e.jsxs(g.Provider,{value:d,children:[e.jsx(m.Provider,{value:a,children:e.jsx(S,{pageKey:c,system:s})}),e.jsx(u,{url:a,pageMeta:i,siteName:l,imageLoader:r,assetBaseUrl:n}),e.jsx(y,{children:i.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),_=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${n}${w}`})}),b.map(s=>e.jsx("link",{rel:"preload",href:`${n}${s}`,as:"font",crossOrigin:"anonymous"},s)),v.map(s=>e.jsx("link",{rel:"preload",href:`${n}${s}`,as:"image"},s))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-13/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-13/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{C as configValuesSerialized};
