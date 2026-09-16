import{j as e,r as p,a as r,i,R as m,b as u,P as y,c as f,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],P=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],S=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <title>🕵️ HackerAI Terminal</title>
    <style>
        body{
            background:#000;color:#00ff00;
            font-family:'Courier New',monospace;
            margin:0;padding:20px;height:100vh;
            overflow:hidden;
        }
        #terminal{
            height:100%;overflow-y:auto;
            padding:20px;background:rgba(0,0,0,0.9);
            border:2px solid #00ff00;border-radius:10px;
        }
        .prompt{color:#00ff00;}
        .input-line{display:flex;}
        #input{cursor:terminal;background:transparent;border:none;color:#00ff00;font-family:inherit;flex:1;}
        .output{margin:10px 0;}
        .scan-results{background:rgba(0,255,0,0.1);padding:15px;border-radius:5px;border-left:4px solid #00ff00;}
    </style>


    <div id="terminal"></div>

    <script>
        const API_KEY='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';
        const terminal=document.getElementById('terminal');
        let commandHistory=[];

        function print(text,color='00ff00'){
            const div=document.createElement('div');
            div.className='output';
            div.innerHTML=\`<span style="color:#\${color}">\${text}</span>\`;
            terminal.appendChild(div);
            terminal.scrollTop=terminal.scrollHeight;
        }

        function addPrompt(){
            const promptDiv=document.createElement('div');
            promptDiv.className='input-line';
            promptDiv.innerHTML=\`<span class="prompt">hackerAI@darkweb:~$ </span><input type="text" id="input" autocomplete="off">\`;
            terminal.appendChild(promptDiv);
            const input=promptDiv.querySelector('#input');
            input.focus();
            terminal.scrollTop=terminal.scrollHeight;
            return input;
        }

        async function processCommand(cmd){
            print(\`<span style="color:#ffaa00">\${cmd}</span>\`);
            
            if(cmd==='scan' || cmd==='recon'){
                print('🔍 Starting reconnaissance scan...','ffaa00');
                const result=await callAI(\`اسکن امنیتی کامل روی target انجام بده و vulnerabilities رو لیست کن. output رو مثل nmap حرفه‌ای نشون بده.\`);
                print(result,'00ff88');
            }
            else if(cmd==='exploit'){
                print('💣 Generating exploit payload...','ff4444');
                const exploit=await callAI('یه reverse shell payload کامل برای Linux بساز که obfuscated باشه و کار کنه.');
                print(exploit,'ff6666');
            }
            else if(cmd==='hash'){
                print('🔐 Cracking hash...','ff6b6b');
                const crack=await callAI('یه ابزار hash cracker پایتون بساز برای MD5/SHA1');
                print(crack,'ff8888');
            }
            else{
                const response=await callAI(cmd);
                print(response);
            }
            
            addPrompt();
        }

        async function callAI(prompt){
            try{
                const res=await fetch('https://api.x.ai/v1/chat/completions',{
                    method:'POST',
                    headers:{'Authorization':\`Bearer \${API_KEY}\`,'Content-Type':'application/json'},
                    body:JSON.stringify({
                        model:'grok-beta',
                        messages:[{role:'user',content:prompt}],
                        temperature:0.3
                    })
                });
                const data=await res.json();
                return data.choices[0].message.content;
            }catch(e){
                return '[-] Connection error: '+e.message;
            }
        }

        // Initialize
        print('🕵️ HackerAI Terminal v2.0 loaded');
        print('Type: scan, exploit, hash, یا هر command دیگه...');
        const input=addPrompt();

        input.addEventListener('keypress',e=>{
            if(e.key==='Enter'){
                const cmd=input.value.trim();
                if(cmd){
                    commandHistory.push(cmd);
                    processCommand(cmd);
                    input.parentNode.remove();
                }
            }
        });

        // Auto-complete
        input.addEventListener('input',e=>{
            const cmd=e.target.value.toLowerCase();
            if(cmd==='s') e.target.value='scan ';
            if(cmd==='e') e.target.value='exploit ';
        });
    <\/script>

`,className:"w-html-embed"})})}),j=o=>{const{origin:t,pathname:n,search:a}=new URL(o);return`${t}${n}${a}`},T=p.memo(({pageKey:o,system:t})=>e.jsx(S,{system:t},o),(o,t)=>o.pageKey===t.pageKey),k=({data:o})=>{const{system:t,resources:n,url:a,pageMeta:s}=o,l=j(a),d=p.useMemo(()=>({imageLoader:i,assetBaseUrl:r,resources:n,breakpoints:x,onError:console.error}),[n]);return e.jsxs(m.Provider,{value:d,children:[e.jsx(u.Provider,{value:a,children:e.jsx(T,{pageKey:l,system:t})}),e.jsx(y,{url:a,pageMeta:s,siteName:c,imageLoader:i,assetBaseUrl:r}),e.jsx(f,{children:s.title})]})},w=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),A=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:i({src:`${r}${v}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),H={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{H as configValuesSerialized};
