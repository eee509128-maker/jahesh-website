import{j as e,r as d,a,i as s,R as y,b as g,P as u,c as m,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",h=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],S=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <title>AI Vector Designer</title>
    <style>
        body { background: #111; color: #fff; font-family: system-ui; display: flex; height: 100vh; margin: 0; }
        .sidebar { width: 350px; padding: 20px; background: #1a1a1a; border-left: 1px solid #333; display: flex; flex-direction: column; }
        .main-content { flex-grow: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(circle, #222 1px, #111 1px); background-size: 20px 20px; }
        textarea { background: #222; border: 1px solid #444; color: #0f0; padding: 10px; border-radius: 8px; flex-grow: 1; margin-bottom: 10px; font-family: monospace; }
        input { padding: 12px; border-radius: 8px; border: none; margin-bottom: 10px; background: #333; color: white; }
        button { padding: 12px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
        button:hover { background: #4f46e5; }
        #canvas { width: 80%; height: 70%; display: flex; align-items: center; justify-content: center; border: 2px dashed #444; border-radius: 20px; position: relative; }
        #canvas svg { max-width: 100%; max-height: 100%; filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.5)); }
        .code-view { height: 150px; font-size: 11px; overflow: auto; }
        .loading { position: absolute; display: none; color: #6366f1; font-weight: bold; font-size: 1.2rem; }
    </style>



<div class="sidebar">
    <h3>🎨 طراح وکتور هوشمند</h3>
    <p style="font-size: 13px; color: #888;">چیزی که میخوای رو توصیف کن تا برات کد SVG بسازم و نمایش بدم.</p>
    <input type="text" id="prompt" placeholder="مثلاً: یک لوگوی مینیمال از خورشید">
    <button onclick="generateSVG()">✨ خلق کردن</button>
    
    <h4>کد تولید شده:</h4>
    <textarea id="codeView" class="code-view" readonly=""></textarea>
</div>

<div class="main-content">
    <div id="loading" class="loading">در حال طراحی... 🖌️</div>
    <div id="canvas">
        <span style="color: #444;">طرح شما اینجا ظاهر می‌شود</span>
    </div>
</div>

<script>
    async function generateSVG() {
        const prompt = document.getElementById('prompt').value;
        const canvas = document.getElementById('canvas');
        const codeView = document.getElementById('codeView');
        const loading = document.getElementById('loading');

        if (!prompt) return;

        loading.style.display = "block";
        canvas.innerHTML = "";

        try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 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",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [{
                        role: "system",
                        content: "You are a specialized SVG designer. Only output raw SVG code. No explanations, no markdown, just <svg>...</svg>."
                    }, {
                        role: "user",
                        content: \`Create a professional SVG for: \${prompt}. Use modern colors and clean lines.\`
                    }],
                    temperature: 0.2
                })
            });

            const data = await response.json();
            let svgCode = data.choices[0].message.content;
            
            // تمیز کردن کد اگر مارک‌داون داشته باشد
            svgCode = svgCode.replace(/\`\`\`html|\`\`\`svg|\`\`\`/g, "").trim();

            canvas.innerHTML = svgCode;
            codeView.value = svgCode;
        } catch (error) {
            canvas.innerHTML = "خطایی رخ داد: " + error.message;
        } finally {
            loading.style.display = "none";
        }
    }
<\/script>


`,className:"w-html-embed"})})}),j=o=>{const{origin:n,pathname:r,search:t}=new URL(o);return`${n}${r}${t}`},P=d.memo(({pageKey:o,system:n})=>e.jsx(S,{system:n},o),(o,n)=>o.pageKey===n.pageKey),z=({data:o})=>{const{system:n,resources:r,url:t,pageMeta:i}=o,c=j(t),p=d.useMemo(()=>({imageLoader:s,assetBaseUrl:a,resources:r,breakpoints:h,onError:console.error}),[r]);return e.jsxs(y.Provider,{value:p,children:[e.jsx(g.Provider,{value:t,children:e.jsx(P,{pageKey:c,system:n})}),e.jsx(u,{url:t,pageMeta:i,siteName:l,imageLoader:s,assetBaseUrl:a}),e.jsx(m,{children:i.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),k=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:s({src:`${a}${v}`})}),b.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"font",crossOrigin:"anonymous"},n)),w.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"image"},n))]})},V=Object.freeze(Object.defineProperty({__proto__:null,Head:k},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}}};export{O as configValuesSerialized};
