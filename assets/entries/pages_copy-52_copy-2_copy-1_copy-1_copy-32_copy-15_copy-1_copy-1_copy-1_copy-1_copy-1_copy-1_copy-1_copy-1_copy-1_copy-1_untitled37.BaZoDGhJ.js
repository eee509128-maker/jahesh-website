import{j as c,r as b,a as o,i as y,R as w,b as f,P as z,c as k,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m,C as N,P,A as r,$ as S}from"../chunks/chunk-CJTZdOzc.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";import{n}from"../chunks/chunk-CRUfvgxf.js";import{n as x}from"../chunks/chunk-RvLaVuUh.js";import{g as e}from"../chunks/chunk-BKjYWtT8.js";import{n as _}from"../chunks/chunk-Bx5-62GJ.js";import{d as u}from"../chunks/chunk-ClMSjCia.js";import{d as T,i as t}from"../chunks/chunk-DWuKyx5h.js";import{O as B,x as O,M as R,R as E,$}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const j="jahesh",A=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],C="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",D=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],F=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],I=a=>c.jsxs("body",{className:"w-element",children:[c.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:c.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <title>AI Career Path | نقشه‌راه هوشمند</title>
    <style>
        :root { --main-color: #f59e0b; --dark: #111827; }
        body { font-family: 'Tahoma', sans-serif; background: var(--dark); color: #e5e7eb; display: flex; justify-content: center; padding: 40px 20px; }
        .wrapper { width: 100%; max-width: 800px; text-align: center; }
        h1 { color: var(--main-color); font-size: 2.5rem; margin-bottom: 10px; }
        .input-box { background: #1f2937; padding: 30px; border-radius: 24px; border: 2px dashed #374151; margin-bottom: 30px; }
        input { width: 80%; padding: 15px; border-radius: 12px; border: none; background: #374151; color: white; font-size: 18px; outline: none; text-align: center; }
        button { padding: 15px 40px; background: var(--main-color); color: black; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; margin-top: 20px; transition: 0.3s; }
        button:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3); }
        #roadmap-result { background: #1f2937; padding: 30px; border-radius: 20px; text-align: right; line-height: 1.8; display: none; border-left: 5px solid var(--main-color); white-space: pre-wrap; }
        .status { margin: 10px; font-size: 14px; color: #9ca3af; }
        .error-msg { color: #ef4444; display: none; margin-top: 10px; border: 1px solid #ef4444; padding: 10px; border-radius: 8px; }
    </style>



<div class="wrapper">
    <h1>🗺️ مسیر یادگیری جادویی</h1>
    <p>چه مهارتی می‌خواهی یاد بگیری؟ (مثلاً: برنامه نویسی پایتون، عکاسی، یا بدنسازی)</p>

    <div class="input-box">
        <input type="text" id="goalInput" placeholder="هدف خود را اینجا بنویسید...">
        <br>
        <button id="goBtn" onclick="generateRoadmap()">ترسیم مسیر موفقیت ✨</button>
        <div id="loader" class="status" style="display:none;">⏳ در حال استخراج دانش از اعماق هوش مصنوعی...</div>
        <div id="errorBox" class="error-msg">❌ خطای اتصال! حتماً فیلترشکن (VPN) خود را روشن کنید.</div>
    </div>

    <div id="roadmap-result"></div>
</div>

<script>
    async function generateRoadmap() {
        const goal = document.getElementById('goalInput').value;
        const resultDiv = document.getElementById('roadmap-result');
        const loader = document.getElementById('loader');
        const errorBox = document.getElementById('errorBox');
        const btn = document.getElementById('goBtn');

        if (!goal) return alert("اول بگو چی می‌خوای یاد بگیری!");

        const apiKey = "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";
        
        loader.style.display = "block";
        errorBox.style.display = "none";
        resultDiv.style.display = "none";
        btn.disabled = true;

        try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": \`Bearer \${apiKey}\`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "llama3-70b-8192", // استفاده از مدل قدرتمندتر ۷۰ میلیاردی
                    messages: [{
                        role: "user",
                        content: \`یک نقشه راه (roadmap) کامل، گام‌به‌گام و حرفه‌ای برای یادگیری "\${goal}" به زبان فارسی بنویس. مراحل را شماره‌گذاری کن و برای هر مرحله یک زمان تخمینی بگو.\`
                    }],
                    temperature: 0.5
                })
            });

            if (!response.ok) throw new Error();

            const data = await response.json();
            resultDiv.innerText = data.choices[0].message.content;
            resultDiv.style.display = "block";
            
        } catch (e) {
            errorBox.style.display = "block";
        } finally {
            loader.style.display = "none";
            btn.disabled = false;
        }
    }
<\/script>


`,className:"w-html-embed"})}),c.jsx(n,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:c.jsxs(n,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(n,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:c.jsx(d,{children:c.jsx(m,{children:c.jsx(N,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:c.jsxs(P,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[c.jsx(r,{"data-ws-index":"0",className:"w-menu-item",children:c.jsx(e,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(x,{className:"w-text",children:"فروشگاه"})})}),c.jsx(r,{"data-ws-index":"1",className:"w-menu-item",children:c.jsx(e,{href:"/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(r,{"data-ws-index":"2",className:"w-menu-item",children:c.jsx(S,{children:c.jsx(e,{type:"button",href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(x,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),c.jsx(r,{"data-ws-index":"3",className:"w-menu-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(r,{"data-ws-index":"4",className:"w-menu-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),c.jsxs(n,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[c.jsx(n,{className:"w-box",children:c.jsx(n,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:c.jsx(e,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),c.jsx(d,{children:c.jsx(m,{children:c.jsxs(B,{children:[c.jsx(O,{children:c.jsx(_,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:c.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(R,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:c.jsxs(E,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[c.jsxs(n,{className:"w-box cx6c9kw c1nd8hlk",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(u,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx($,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:c.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),c.jsx(n,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:c.jsxs(T,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"/drbarh-anjmn",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),c.jsx(e,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),H=a=>{const{origin:l,pathname:i,search:s}=new URL(a);return`${l}${i}${s}`},M=b.memo(({pageKey:a,system:l})=>c.jsx(I,{system:l},a),(a,l)=>a.pageKey===l.pageKey),U=({data:a})=>{const{system:l,resources:i,url:s,pageMeta:p}=a,v=H(s),g=b.useMemo(()=>({imageLoader:y,assetBaseUrl:o,resources:i,breakpoints:A,onError:console.error}),[i]);return c.jsxs(w.Provider,{value:g,children:[c.jsx(f.Provider,{value:s,children:c.jsx(M,{pageKey:v,system:l})}),c.jsx(z,{url:s,pageMeta:p,siteName:j,imageLoader:y,assetBaseUrl:o}),c.jsx(k,{children:p.title})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),L=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:j};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),c.jsx("link",{rel:"icon",href:y({src:`${o}${C}`})}),D.map(l=>c.jsx("link",{rel:"preload",href:`${o}${l}`,as:"font",crossOrigin:"anonymous"},l)),F.map(l=>c.jsx("link",{rel:"preload",href:`${o}${l}`,as:"image"},l))]})},K=Object.freeze(Object.defineProperty({__proto__:null,Head:L},Symbol.toStringTag,{value:"Module"})),sc={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-52/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-52/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:K}}};export{sc as configValuesSerialized};
