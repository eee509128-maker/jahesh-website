import{j as e,r as l,a as r,i as n,R as b,b as f,P as m,c as u,d as g}from"../chunks/chunk-_4i898Gl.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",y=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],z=o=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(h,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبدیل صوت به متن</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;700&amp;display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Vazirmatn', sans-serif;
            background: #0a0a1a;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
        }
        .card {
            width: 100%;
            max-width: 680px;
            background: #11112a;
            border: 1px solid rgba(120,80,220,0.3);
            border-radius: 1.5rem;
            padding: 2rem 1.8rem;
            box-shadow: 0 0 50px rgba(80,40,180,0.2);
        }
        h1 { color: #fff; text-align: center; font-size: 1.6rem; margin-bottom: 0.3rem; }
        .sub { color: #7c6fa0; text-align: center; font-size: 0.82rem; margin-bottom: 1.5rem; }

        .models { display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap; }
        .mc {
            padding: 0.4rem 1rem; border-radius: 2rem;
            border: 1px solid rgba(120,80,220,0.35);
            background: transparent; color: #7c6fa0;
            cursor: pointer; font-family: 'Vazirmatn', sans-serif;
            font-size: 0.82rem; transition: 0.2s;
        }
        .mc.on { background: #7c3aed; border-color: #7c3aed; color: #fff; font-weight: 600; }
        .mc small { display: block; font-size: 0.68rem; opacity: 0.8; }

        /* انتخاب زبان */
        .lang-row {
            display: flex; align-items: center; justify-content: center;
            gap: 0.8rem; margin-bottom: 1.3rem;
        }
        .lang-row label { color: #7c6fa0; font-size: 0.85rem; }
        .lang-sel {
            background: #1a1a35; border: 1px solid rgba(120,80,220,0.35);
            color: #c4b5fd; border-radius: 0.6rem;
            padding: 0.35rem 0.8rem; font-family: 'Vazirmatn', sans-serif;
            font-size: 0.85rem; cursor: pointer; outline: none;
        }
        .lang-sel:focus { border-color: #7c3aed; }

        .upload {
            border: 2px dashed rgba(120,80,220,0.4);
            border-radius: 1rem; padding: 1.5rem;
            text-align: center; cursor: pointer; transition: 0.2s;
            margin-bottom: 1rem;
        }
        .upload:hover { border-color: #7c3aed; background: rgba(124,58,237,0.05); }
        .upload p { color: #c4b5fd; font-size: 0.95rem; }
        .upload small { color: #7c6fa0; font-size: 0.78rem; }
        #fi { display: none; }

        .fbadge {
            display: none; align-items: center; gap: 0.6rem;
            background: rgba(124,58,237,0.1);
            border: 1px solid rgba(120,80,220,0.3);
            border-radius: 0.8rem; padding: 0.6rem 1rem;
            margin-bottom: 0.8rem;
        }
        .fbadge.show { display: flex; }
        .fbadge span { color: #c4b5fd; font-size: 0.88rem; flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; direction:ltr; text-align:left; }
        .fbadge em { color: #7c6fa0; font-size: 0.78rem; font-style: normal; white-space:nowrap; }

        #aw { display: none; margin-bottom: 1rem; }
        #ae { width: 100%; border-radius: 2rem; }

        .btns { display: flex; gap: 0.7rem; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap; }
        .btn {
            padding: 0.7rem 1.6rem; border-radius: 3rem; border: none;
            font-family: 'Vazirmatn', sans-serif; font-size: 0.95rem;
            font-weight: 600; cursor: pointer; display: flex;
            align-items: center; gap: 0.4rem; transition: 0.2s;
        }
        .btn:disabled { opacity: 0.3; pointer-events: none; }
        .bp { background: #7c3aed; color: #fff; box-shadow: 0 0 15px rgba(124,58,237,0.4); }
        .bp:hover:not(:disabled) { background: #6d28d9; }
        .bs { background: rgba(239,68,68,0.12); color: #fca5a5; border: 1px solid rgba(239,68,68,0.35); }
        .bc { background: rgba(16,185,129,0.12); color: #6ee7b7; border: 1px solid rgba(16,185,129,0.35); }

        .status {
            background: rgba(0,0,0,0.25); border: 1px solid rgba(120,80,220,0.25);
            border-radius: 0.8rem; padding: 0.7rem 1rem;
            color: #c4b5fd; font-size: 0.85rem; text-align: center;
            margin-bottom: 0.7rem; line-height: 1.6;
        }

        .pw { background: rgba(0,0,0,0.3); border-radius: 2rem; height: 6px; overflow: hidden; margin-bottom: 0.8rem; display: none; }
        .pb { height: 100%; width: 0%; background: linear-gradient(90deg, #7c3aed, #fbbf24); border-radius: 2rem; transition: width 0.3s; }

        .rl { color: #7c6fa0; font-size: 0.75rem; margin-bottom: 0.3rem; }
        .result {
            background: rgba(0,0,0,0.3); border: 1px solid rgba(120,80,220,0.25);
            border-radius: 1rem; padding: 1rem; min-height: 130px;
            max-height: 320px; overflow-y: auto;
            color: #e2e0f0; font-size: 0.95rem; line-height: 2;
            white-space: pre-wrap; word-break: break-word;
        }
        .result:empty::before { content: "نتیجه اینجا نمایش داده می‌شود..."; color: #4a4060; }
        .ck { margin-bottom: 0.2rem; }
        .ts { color: #5a4f70; font-size: 0.72rem; font-family: monospace; margin-left: 0.4rem; }

        .note {
            margin-top: 1rem; padding: 0.8rem 1rem;
            background: rgba(251,191,36,0.05); border: 1px solid rgba(251,191,36,0.2);
            border-radius: 0.8rem; color: #c4a05a; font-size: 0.78rem; line-height: 1.7;
        }
        .note b { color: #fbbf24; }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .bl { animation: blink 1.4s infinite; }
    </style>


<div class="card">
    <h1>🎙️ تبدیل صوت به متن</h1>
    <p class="sub">Whisper AI • پردازش محلی • بدون ارسال به سرور</p>

    <div class="models">
        <button class="mc on" data-m="Xenova/whisper-tiny">Tiny<small>~75MB سریع</small></button>
        <button class="mc" data-m="Xenova/whisper-base">Base<small>~145MB متعادل</small></button>
        <button class="mc" data-m="Xenova/whisper-small">Small<small>~460MB دقیق</small></button>
    </div>

    <div class="lang-row">
        <label for="ls">🌐 زبان تشخیص:</label>
        <select class="lang-sel" id="ls">
            <option value="fa">🇮🇷 فارسی</option>
            <option value="en">🇬🇧 انگلیسی</option>
            <option value="ar">🇸🇦 عربی</option>
            <option value="tr">🇹🇷 ترکی</option>
            <option value="de">🇩🇪 آلمانی</option>
            <option value="fr">🇫🇷 فرانسوی</option>
            <option value="es">🇪🇸 اسپانیایی</option>
            <option value="ru">🇷🇺 روسی</option>
            <option value="zh">🇨🇳 چینی</option>
            <option value="auto">🔍 تشخیص خودکار</option>
        </select>
    </div>

    <div class="upload" id="uz">
        <p>📂 کلیک یا کشیدن فایل</p>
        <small>MP3 · WAV · M4A · OGG · FLAC · MP4</small>
        <input type="file" id="fi" accept="audio/*,video/*">
    </div>

    <div class="fbadge" id="fb">
        <span id="fn">—</span><em id="fs"></em>
    </div>
    <div id="aw"><audio id="ae" controls=""></audio></div>

    <div class="btns">
        <button class="btn bp" id="sb" disabled="">▶ شروع</button>
        <button class="btn bs" id="xb" disabled="">■ توقف</button>
        <button class="btn bc" id="cb" disabled="">⧉ کپی</button>
    </div>

    <div class="status" id="st">⏳ منتظر فایل...</div>
    <div class="pw" id="pw"><div class="pb" id="pb"></div></div>

    <div class="rl" id="rl"></div>
    <div class="result" id="rb"></div>

    <div class="note">
        <b>بار اول:</b> مدل دانلود و ذخیره می‌شود — بار بعدی فوری است.<br>
        <b>Tiny</b> برای اغلب فایل‌ها کافی و خیلی سریع‌تر است.<br>
        <b>تغییر زبان</b> مدل را ریست می‌کند و دفعه بعد مجدداً بارگذاری می‌شود.
    </div>
</div>

<script type="module">
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2/dist/transformers.min.js';
env.allowLocalModels = false;
env.useBrowserCache = true;

const $ = id => document.getElementById(id);
const uz=$('uz'), fi=$('fi'), fb=$('fb'), fn=$('fn'), fs=$('fs');
const aw=$('aw'), ae=$('ae'), sb=$('sb'), xb=$('xb'), cb=$('cb');
const st=$('st'), pw=$('pw'), pb=$('pb'), rb=$('rb'), rl=$('rl');
const ls=$('ls');

let file=null, model='Xenova/whisper-tiny', pipe=null, stopped=false, text='';

// مدل
document.querySelectorAll('.mc').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.mc').forEach(x=>x.classList.remove('on'));
    b.classList.add('on'); model=b.dataset.m; pipe=null;
}));

// تغییر زبان → ریست مدل
ls.addEventListener('change', () => { pipe = null; });

// آپلود
uz.addEventListener('click',()=>fi.click());
fi.addEventListener('change',e=>load(e.target.files[0]));
uz.addEventListener('dragover',e=>{e.preventDefault();uz.style.borderColor='#7c3aed';});
uz.addEventListener('dragleave',()=>uz.style.borderColor='');
uz.addEventListener('drop',e=>{e.preventDefault();uz.style.borderColor='';load(e.dataTransfer.files[0]);});

function load(f){
    if(!f)return; file=f;
    fn.textContent=f.name; fs.textContent=fmtB(f.size);
    fb.classList.add('show');
    ae.src=URL.createObjectURL(f); aw.style.display='block';
    rb.innerHTML=''; rl.textContent=''; text='';
    cb.disabled=true; sb.disabled=false;
    setS('✅ فایل آماده. دکمه شروع را بزنید.');
}

// decode به 16kHz mono Float32
async function decode(f){
    const buf=await f.arrayBuffer();
    const ctx=new (window.AudioContext||window.webkitAudioContext)({sampleRate:16000});
    let dec; try{ dec=await ctx.decodeAudioData(buf); }finally{ ctx.close(); }
    const ch=dec.numberOfChannels, len=dec.length, out=new Float32Array(len);
    for(let i=0;i<len;i++){
        let s=0; for(let c=0;c<ch;c++) s+=dec.getChannelData(c)[i];
        out[i]=s/ch;
    }
    return out;
}

// شروع
sb.addEventListener('click',async()=>{
    if(!file)return;
    stopped=false; text=''; rb.innerHTML=''; rl.textContent='';
    cb.disabled=true; sb.disabled=true; xb.disabled=false;
    pw.style.display='block'; setP(3);

    const selectedLang = ls.value;
    const langLabel = ls.options[ls.selectedIndex].text;

    try{
        if(!pipe){
            setS(\`⬇️ دانلود مدل Whisper...\`,true);
            pipe=await pipeline('automatic-speech-recognition',model,{
                progress_callback:info=>{
                    if(info.status==='progress'&&info.total){
                        const p=Math.round(info.loaded/info.total*80);
                        setP(p);
                        setS(\`⬇️ دانلود: \${p}% — \${fmtB(info.loaded)} از \${fmtB(info.total)}\`);
                    }
                }
            });
        }
        if(stopped)return;

        setS('🔊 آماده‌سازی فایل...',true); setP(85);
        const audio=await decode(file);
        if(stopped)return;

        setS(\`🤖 در حال پردازش با زبان: \${langLabel}...\`,true); setP(90);

        const SAMPLE_RATE=16000;
        const CHUNK=30*SAMPLE_RATE;
        const STRIDE=3*SAMPLE_RATE;
        const total=audio.length;
        let offset=0;

        while(offset<total && !stopped){
            const end=Math.min(offset+CHUNK, total);
            const slice=audio.slice(offset, end);

            // تنظیم زبان: اگر auto بود null بده تا Whisper خودش تشخیص بده
            const langOpt = selectedLang === 'auto' ? null : selectedLang;

            const res=await pipe(slice,{
                task: 'transcribe',
                language: langOpt,
                return_timestamps: false,
            });

            if(stopped)break;

            const t=(res.text||'').trim();
            if(t){
                text+=(text?' ':'')+t;
                const startSec=Math.floor(offset/SAMPLE_RATE);
                rb.innerHTML+=\`<div class="ck"><span class="ts">[\${fmtT(startSec)}]</span>\${esc(t)}</div>\`;
                rb.scrollTop=rb.scrollHeight;
                rl.textContent=\`\${text.length} کاراکتر\`;
                cb.disabled=false;
            }

            offset=end-STRIDE;
            const pct=Math.round(90+(end/total)*9);
            setP(Math.min(pct,99));
            setS(\`🤖 پردازش: \${Math.round(end/total*100)}٪ (\${fmtT(Math.floor(end/SAMPLE_RATE))} از \${fmtT(Math.floor(total/SAMPLE_RATE))})\`);

            await new Promise(r=>setTimeout(r,10));
        }

        if(!stopped){
            setP(100);
            setS(text ? \`✅ تمام شد! \${text.length} کاراکتر\` : '⚠️ متنی تشخیص داده نشد.');
        }

    }catch(err){
        if(!stopped){ console.error(err); setS('❌ خطا: '+err.message); }
    }finally{
        sb.disabled=false; xb.disabled=true;
    }
});

xb.addEventListener('click',()=>{
    stopped=true; pipe=null;
    xb.disabled=true; sb.disabled=false;
    setS('⏹️ متوقف شد.');
    if(text) cb.disabled=false;
});

cb.addEventListener('click',()=>{
    if(!text)return;
    navigator.clipboard.writeText(text).then(()=>{
        setS('✅ کپی شد!'); setTimeout(()=>setS('آماده...'),2000);
    }).catch(()=>{
        const ta=document.createElement('textarea');
        ta.value=text; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); ta.remove(); setS('✅ کپی شد!');
    });
});

function setS(msg,blink=false){ st.innerHTML=msg; st.classList.toggle('bl',blink); }
function setP(v){ pb.style.width=v+'%'; }
function fmtT(s){ const m=Math.floor(s/60); return \`\${m}:\${String(Math.floor(s%60)).padStart(2,'0')}\`; }
function fmtB(b){ if(!b)return''; return b<1048576?(b/1024).toFixed(0)+' KB':(b/1048576).toFixed(1)+' MB'; }
function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
window.addEventListener('beforeunload',()=>{ if(ae.src.startsWith('blob:'))URL.revokeObjectURL(ae.src); });
<\/script>


`,className:"w-html-embed"})})}),S=o=>{const{origin:t,pathname:s,search:a}=new URL(o);return`${t}${s}${a}`},k=l.memo(({pageKey:o,system:t})=>e.jsx(z,{system:t},o),(o,t)=>o.pageKey===t.pageKey),P=({data:o})=>{const{system:t,resources:s,url:a,pageMeta:i}=o,c=S(a),p=l.useMemo(()=>({imageLoader:n,assetBaseUrl:r,resources:s,breakpoints:y,onError:console.error}),[s]);return e.jsxs(b.Provider,{value:p,children:[e.jsx(f.Provider,{value:a,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(m,{url:a,pageMeta:i,siteName:d,imageLoader:n,assetBaseUrl:r}),e.jsx(u,{children:i.title})]})},L=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),T=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${r}${x}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${r}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-13/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-13/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{A as configValuesSerialized};
