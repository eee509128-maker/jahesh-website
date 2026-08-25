import{r as p,R as T,j as c,a as w,i as q,b as L,P as D,c as M,d as F}from"../chunks/chunk-_4i898Gl.js";import{l as v,m as h,C as H,P as $,A as x,$ as V}from"../chunks/chunk-CJTZdOzc.js";import{U as u}from"../chunks/chunk-BTtE8iXS.js";import{n as a}from"../chunks/chunk-CRUfvgxf.js";import{n as j}from"../chunks/chunk-RvLaVuUh.js";import{d as U}from"../chunks/chunk-DMe6ghIO.js";import{g as e}from"../chunks/chunk-BKjYWtT8.js";import{n as K}from"../chunks/chunk-Bx5-62GJ.js";import{y as z}from"../chunks/chunk-BO0ALJ3I.js";import{d as S,i as t}from"../chunks/chunk-DWuKyx5h.js";import{O as Y,x as B,M as W,R as J,$ as G}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const I="data-ws-video-id",X={HAVE_METADATA:1},E=p.forwardRef(({$progress:i,$visible:s,$timeline:l,$webstudio$canvasOnly$assetId:d,children:g,src:m,...b},_)=>{const f=p.useId(),A={[I]:f},{videoLoader:N}=p.useContext(T),R=m&&N?N({src:m}):m;return p.useEffect(()=>{if(i===void 0||s===void 0)return;const n=document.querySelector(`[${I}="${f}"]`);if(n===null||!(n instanceof HTMLVideoElement))return;if(n.play().catch(()=>{}),n.pause(),l)return i.subscribe(r=>{if(n.readyState<X.HAVE_METADATA||(n.paused||n.pause(),n.seeking))return;let y=n.duration;Number.isNaN(y)||(Number.isFinite(y)||(y=60),n.currentTime=(r??0)*y)});let o=!1,k=!1;const O=s.subscribe(r=>{k=r,k===!1&&o===!1&&!n.loop&&(n.currentTime=0)}),C=i.subscribe(r=>{if(o&&(r===void 0||r===0||r===1)){o=!1,n.pause(),k===!1&&o===!1&&!n.loop&&(n.currentTime=0);return}o||(o=!0,n.ended||n.play().catch(()=>{}))});return()=>{C(),O()}},[i,l,s,f]),c.jsx("video",{src:R,...b,...A,ref:_,children:g})});E.displayName="Video";const P="jahesh",Z=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],Q="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",cc=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],sc=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg","Group_1_(1)_WG8mUOjVoPgiB8j45YY9z.svg","Property_1_Desktop_WC1IMy9iiJ9vL4er9JyJM.webp"],ec=i=>{const s=i.system;return c.jsxs("body",{className:"w-element",children:[c.jsx(a,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:c.jsxs(a,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[c.jsx(v,{children:c.jsx(h,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(z,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(a,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:c.jsx(v,{children:c.jsx(h,{children:c.jsx(H,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:c.jsxs($,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[c.jsx(x,{"data-ws-index":"0",className:"w-menu-item",children:c.jsx(e,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(j,{className:"w-text",children:"فروشگاه"})})}),c.jsx(x,{"data-ws-index":"1",className:"w-menu-item",children:c.jsx(e,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(x,{"data-ws-index":"2",className:"w-menu-item",children:c.jsx(V,{children:c.jsx(e,{type:"button",href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:c.jsx(j,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),c.jsx(x,{"data-ws-index":"3",className:"w-menu-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(x,{"data-ws-index":"4",className:"w-menu-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),c.jsxs(a,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[c.jsx(a,{className:"w-box",children:c.jsx(a,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:c.jsx(e,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),c.jsx(v,{children:c.jsx(h,{children:c.jsxs(Y,{children:[c.jsx(B,{children:c.jsx(K,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:c.jsx(u,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(W,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:c.jsxs(J,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[c.jsxs(a,{className:"w-box cx6c9kw c1nd8hlk",children:[c.jsx(v,{children:c.jsx(h,{children:c.jsx(e,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:c.jsx(z,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),c.jsx(G,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:c.jsx(u,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),c.jsx(a,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:c.jsxs(S,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),c.jsx(e,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})}),c.jsx("div",{className:"w-element c1i4wvto",children:c.jsx(u,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>انجمن علمی جهش | نوار اخبار</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&amp;display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #00d4ff;
            --secondary: #ff6b35;
            --accent: #7b2cbf;
            --dark: #0d1117;
            --darker: #080a0f;
            --gold: #ffd700;
            --success: #00ff88;
        }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: var(--darker);
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* ============ NEWS TICKER SECTION ============ */
        .news-ticker-wrapper {
            position: relative;
            margin: 0;
            padding: 0;
        }

        /* Header Above Ticker */
        .ticker-header {
            background: linear-gradient(135deg, var(--dark) 0%, rgba(13, 17, 23, 0.95) 100%);
            padding: 20px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 212, 255, 0.2);
        }

        .ticker-brand {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .brand-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
            animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 30px rgba(0, 212, 255, 0.3); }
            50% { box-shadow: 0 0 50px rgba(0, 212, 255, 0.6); }
        }

        .brand-text h1 {
            font-size: 1.8rem;
            font-weight: 900;
            background: linear-gradient(90deg, #fff, var(--primary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .brand-text span {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.5);
            letter-spacing: 2px;
        }

        .live-indicator {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 0, 0, 0.1);
            padding: 10px 25px;
            border-radius: 50px;
            border: 1px solid rgba(255, 0, 0, 0.3);
        }

        .live-dot {
            width: 12px;
            height: 12px;
            background: #ff0000;
            border-radius: 50%;
            animation: live-pulse 1s ease-in-out infinite;
        }

        @keyframes live-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
        }

        .live-text {
            color: #ff4444;
            font-weight: 700;
            font-size: 0.9rem;
            letter-spacing: 1px;
        }

        /* Main Ticker Container */
        .news-ticker-container {
            position: relative;
            background: linear-gradient(180deg, 
                rgba(0, 212, 255, 0.08) 0%, 
                rgba(13, 17, 23, 0.95) 50%,
                rgba(123, 44, 191, 0.08) 100%);
            padding: 25px 0;
            overflow: hidden;
            border-bottom: 1px solid rgba(0, 212, 255, 0.1);
        }

        /* Decorative Lines */
        .ticker-container::before,
        .ticker-container::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, 
                transparent, 
                var(--primary), 
                var(--secondary), 
                var(--accent), 
                transparent);
        }

        .news-ticker-container::before {
            top: 0;
        }

        .news-ticker-container::after {
            bottom: 0;
        }

        /* Side Gradients */
        .ticker-gradient-left,
        .ticker-gradient-right {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 150px;
            z-index: 10;
            pointer-events: none;
        }

        .ticker-gradient-left {
            left: 0;
            background: linear-gradient(90deg, var(--darker) 0%, transparent 100%);
        }

        .ticker-gradient-right {
            right: 0;
            background: linear-gradient(-90deg, var(--darker) 0%, transparent 100%);
        }

        /* Ticker Track */
        .ticker-track {
            display: flex;
            animation: ticker-scroll 60s linear infinite;
            width: max-content;
        }

        .ticker-track:hover {
            animation-play-state: paused;
        }

        @keyframes ticker-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        /* News Item */
        .news-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px 40px;
            margin: 0 10px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .news-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
                rgba(0, 212, 255, 0.1), 
                rgba(123, 44, 191, 0.1));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .news-item:hover::before {
            opacity: 1;
        }

        .news-item:hover {
            transform: translateY(-5px) scale(1.02);
            border-color: var(--primary);
            box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.3),
                0 0 30px rgba(0, 212, 255, 0.15);
        }

        /* News Category Badge */
        .news-category {
            position: relative;
            z-index: 2;
            padding: 6px 15px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            white-space: nowrap;
            letter-spacing: 0.5px;
        }

        .category-event {
            background: linear-gradient(135deg, #ff6b35, #ff8c42);
            color: #fff;
            box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        .category-workshop {
            background: linear-gradient(135deg, #00d4ff, #00a8cc);
            color: #000;
            box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .category-competition {
            background: linear-gradient(135deg, #7b2cbf, #9d4edd);
            color: #fff;
            box-shadow: 0 4px 15px rgba(123, 44, 191, 0.3);
        }

        .category-achievement {
            background: linear-gradient(135deg, #ffd700, #ffaa00);
            color: #000;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }

        .category-announcement {
            background: linear-gradient(135deg, #00ff88, #00cc6a);
            color: #000;
            box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
        }

        .category-webinar {
            background: linear-gradient(135deg, #ff4d6d, #ff758f);
            color: #fff;
            box-shadow: 0 4px 15px rgba(255, 77, 109, 0.3);
        }

        /* News Icon */
        .news-icon {
            position: relative;
            z-index: 2;
            width: 45px;
            height: 45px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* News Content */
        .news-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            gap: 5px;
            max-width: 400px;
        }

        .news-title {
            color: #fff;
            font-size: 0.95rem;
            font-weight: 600;
            white-space: nowrap;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .news-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
        }

        .news-meta span {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .news-meta .date {
            color: var(--primary);
        }

        .news-meta .location {
            color: var(--secondary);
        }

        /* News Time Badge */
        .news-time {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8px 15px;
            background: rgba(0, 212, 255, 0.1);
            border-radius: 10px;
            border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .news-time .day {
            font-size: 1.5rem;
            font-weight: 900;
            color: var(--primary);
            line-height: 1;
        }

        .news-time .month {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 2px;
        }

        /* Divider */
        .news-divider {
            width: 2px;
            height: 60px;
            background: linear-gradient(180deg, 
                transparent, 
                rgba(0, 212, 255, 0.3), 
                transparent);
            margin: 0 20px;
            position: relative;
        }

        .news-divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--primary);
        }

        /* ============ SECONDARY TICKER (Faster) ============ */
        .secondary-ticker {
            background: rgba(0, 0, 0, 0.3);
            padding: 15px 0;
            overflow: hidden;
            position: relative;
        }

        .secondary-ticker::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .secondary-track {
            display: flex;
            animation: ticker-scroll-reverse 45s linear infinite;
            width: max-content;
        }

        @keyframes ticker-scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
        }

        /* Quick News Items */
        .quick-news {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 25px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.85rem;
        }

        .quick-news::before {
            content: '●';
            color: var(--primary);
            font-size: 0.5rem;
        }

        .quick-news .highlight {
            color: var(--gold);
            font-weight: 700;
        }

        /* ============ THIRD TICKER (Alerts) ============ */
        .alert-ticker {
            background: linear-gradient(90deg, 
                rgba(255, 107, 53, 0.1), 
                rgba(0, 212, 255, 0.1), 
                rgba(123, 44, 191, 0.1));
            padding: 12px 0;
            overflow: hidden;
            position: relative;
        }

        .alert-track {
            display: flex;
            animation: ticker-scroll 30s linear infinite;
            width: max-content;
        }

        .alert-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 30px;
            margin: 0 15px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 8px;
            border-left: 3px solid var(--secondary);
        }

        .alert-icon {
            font-size: 1.2rem;
            animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }

        .alert-text {
            color: #fff;
            font-size: 0.9rem;
            font-weight: 500;
        }

        .alert-countdown {
            background: var(--secondary);
            color: #fff;
            padding: 3px 10px;
            border-radius: 15px;
            font-size: 0.75rem;
            font-weight: 700;
            animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 768px) {
            .ticker-header {
                flex-direction: column;
                gap: 15px;
                padding: 15px 20px;
            }

            .news-item {
                padding: 12px 20px;
                margin: 0 5px;
            }

            .news-content {
                max-width: 250px;
            }

            .news-time {
                display: none;
            }

            .brand-text h1 {
                font-size: 1.4rem;
            }
        }

        /* ============ DEMO PAGE STYLING ============ */
        .demo-section {
            padding: 50px 30px;
            text-align: center;
            background: linear-gradient(180deg, var(--darker), var(--dark));
        }

        .demo-title {
            font-size: 2rem;
            font-weight: 900;
            color: #fff;
            margin-bottom: 10px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .demo-subtitle {
            color: rgba(255, 255, 255, 0.5);
            font-size: 1rem;
            margin-bottom: 30px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .feature-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 25px;
            text-align: right;
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            border-color: var(--primary);
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .feature-card .icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .feature-card h3 {
            color: #fff;
            font-size: 1.1rem;
            margin-bottom: 10px;
        }

        .feature-card p {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.9rem;
            line-height: 1.6;
        }
    </style>



    <!-- ============ HEADER ============ -->
    <header class="ticker-header">
        <div class="ticker-brand">
            <div class="brand-icon">🚀</div>
            <div class="brand-text">
                <h1>انجمن علمی جهش</h1>
                <span>JEHESH SCIENTIFIC ASSOCIATION</span>
            </div>
        </div>
        <div class="live-indicator">
            <div class="live-dot"></div>
            <span class="live-text">پخش زنده اخبار</span>
        </div>
    </header>

    <!-- ============ ALERT TICKER ============ -->
    <div class="alert-ticker">
        <div class="alert-track">
            <!-- Alert Items -->
            <div class="alert-item">
                <span class="alert-icon">⚡</span>
                <span class="alert-text">آخرین مهلت ثبت‌نام مسابقه هوش مصنوعی</span>
                <span class="alert-countdown">۳ روز مانده</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">🔥</span>
                <span class="alert-text">کد تخفیف ویژه اعضا: JEHESH30</span>
                <span class="alert-countdown">محدود</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">📢</span>
                <span class="alert-text">نتایج دوره اول کارگاه‌ها اعلام شد</span>
                <span class="alert-countdown">جدید</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">🎯</span>
                <span class="alert-text">فرصت عضویت در تیم اجرایی جهش</span>
                <span class="alert-countdown">فوری</span>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="alert-item">
                <span class="alert-icon">⚡</span>
                <span class="alert-text">آخرین مهلت ثبت‌نام مسابقه هوش مصنوعی</span>
                <span class="alert-countdown">۳ روز مانده</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">🔥</span>
                <span class="alert-text">کد تخفیف ویژه اعضا: JEHESH30</span>
                <span class="alert-countdown">محدود</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">📢</span>
                <span class="alert-text">نتایج دوره اول کارگاه‌ها اعلام شد</span>
                <span class="alert-countdown">جدید</span>
            </div>
            <div class="alert-item">
                <span class="alert-icon">🎯</span>
                <span class="alert-text">فرصت عضویت در تیم اجرایی جهش</span>
                <span class="alert-countdown">فوری</span>
            </div>
        </div>
    </div>

    <!-- ============ MAIN NEWS TICKER ============ -->
    <div class="news-ticker-container">
        <div class="ticker-gradient-left"></div>
        <div class="ticker-gradient-right"></div>
        
        <div class="ticker-track">
            <!-- News Item 1 -->
            <div class="news-item">
                <span class="news-category category-event">رویداد</span>
                <div class="news-icon">🏆</div>
                <div class="news-content">
                    <span class="news-title">سومین جشنواره استارتاپ‌های دانشجویی با حضور ۵۰ تیم</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۵ اسفند</span>
                        <span class="location">📍 سالن همایش‌ها</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 2 -->
            <div class="news-item">
                <span class="news-category category-workshop">کارگاه</span>
                <div class="news-icon">💻</div>
                <div class="news-content">
                    <span class="news-title">کارگاه عملی یادگیری ماشین با Python - سطح پیشرفته</span>
                    <div class="news-meta">
                        <span class="date">📅 ۲۰ اسفند</span>
                        <span class="location">📍 آمفی‌تئاتر</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۲۰</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 3 -->
            <div class="news-item">
                <span class="news-category category-competition">مسابقه</span>
                <div class="news-icon">🤖</div>
                <div class="news-content">
                    <span class="news-title">شروع ثبت‌نام مسابقه ملی رباتیک جهش ۱۴۰۴</span>
                    <div class="news-meta">
                        <span class="date">📅 تا ۱۰ فروردین</span>
                        <span class="location">📍 سراسری</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۰</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 4 -->
            <div class="news-item">
                <span class="news-category category-achievement">دستاورد</span>
                <div class="news-icon">🥇</div>
                <div class="news-content">
                    <span class="news-title">کسب مقام اول المپیاد ملی علوم شناختی توسط تیم جهش</span>
                    <div class="news-meta">
                        <span class="date">📅 ۵ اسفند</span>
                        <span class="location">📍 تهران</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 5 -->
            <div class="news-item">
                <span class="news-category category-webinar">وبینار</span>
                <div class="news-icon">🎓</div>
                <div class="news-content">
                    <span class="news-title">وبینار تخصصی آینده هوش مصنوعی در ایران با دکتر محمدی</span>
                    <div class="news-meta">
                        <span class="date">📅 ۲۵ اسفند</span>
                        <span class="location">📍 آنلاین</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۲۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 6 -->
            <div class="news-item">
                <span class="news-category category-announcement">اطلاعیه</span>
                <div class="news-icon">📋</div>
                <div class="news-content">
                    <span class="news-title">انتخابات هیئت مدیره انجمن علمی جهش - دوره پنجم</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱ فروردین</span>
                        <span class="location">📍 ساختمان مرکزی</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 7 -->
            <div class="news-item">
                <span class="news-category category-workshop">کارگاه</span>
                <div class="news-icon">🔬</div>
                <div class="news-content">
                    <span class="news-title">کارگاه تحقیقاتی بیوتکنولوژی و نانوتکنولوژی</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۲ فروردین</span>
                        <span class="location">📍 آزمایشگاه مرکزی</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۲</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <!-- News Item 8 -->
            <div class="news-item">
                <span class="news-category category-event">رویداد</span>
                <div class="news-icon">🌟</div>
                <div class="news-content">
                    <span class="news-title">بازدید علمی از مرکز تحقیقات فضایی ایران</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۸ اسفند</span>
                        <span class="location">📍 کرج</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۸</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <!-- DUPLICATE ITEMS FOR SEAMLESS LOOP -->
            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-event">رویداد</span>
                <div class="news-icon">🏆</div>
                <div class="news-content">
                    <span class="news-title">سومین جشنواره استارتاپ‌های دانشجویی با حضور ۵۰ تیم</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۵ اسفند</span>
                        <span class="location">📍 سالن همایش‌ها</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-workshop">کارگاه</span>
                <div class="news-icon">💻</div>
                <div class="news-content">
                    <span class="news-title">کارگاه عملی یادگیری ماشین با Python - سطح پیشرفته</span>
                    <div class="news-meta">
                        <span class="date">📅 ۲۰ اسفند</span>
                        <span class="location">📍 آمفی‌تئاتر</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۲۰</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-competition">مسابقه</span>
                <div class="news-icon">🤖</div>
                <div class="news-content">
                    <span class="news-title">شروع ثبت‌نام مسابقه ملی رباتیک جهش ۱۴۰۴</span>
                    <div class="news-meta">
                        <span class="date">📅 تا ۱۰ فروردین</span>
                        <span class="location">📍 سراسری</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۰</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-achievement">دستاورد</span>
                <div class="news-icon">🥇</div>
                <div class="news-content">
                    <span class="news-title">کسب مقام اول المپیاد ملی علوم شناختی توسط تیم جهش</span>
                    <div class="news-meta">
                        <span class="date">📅 ۵ اسفند</span>
                        <span class="location">📍 تهران</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-webinar">وبینار</span>
                <div class="news-icon">🎓</div>
                <div class="news-content">
                    <span class="news-title">وبینار تخصصی آینده هوش مصنوعی در ایران با دکتر محمدی</span>
                    <div class="news-meta">
                        <span class="date">📅 ۲۵ اسفند</span>
                        <span class="location">📍 آنلاین</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۲۵</span>
                    <span class="month">اسفند</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-announcement">اطلاعیه</span>
                <div class="news-icon">📋</div>
                <div class="news-content">
                    <span class="news-title">انتخابات هیئت مدیره انجمن علمی جهش - دوره پنجم</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱ فروردین</span>
                        <span class="location">📍 ساختمان مرکزی</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-workshop">کارگاه</span>
                <div class="news-icon">🔬</div>
                <div class="news-content">
                    <span class="news-title">کارگاه تحقیقاتی بیوتکنولوژی و نانوتکنولوژی</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۲ فروردین</span>
                        <span class="location">📍 آزمایشگاه مرکزی</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۲</span>
                    <span class="month">فروردین</span>
                </div>
            </div>

            <div class="news-divider"></div>

            <div class="news-item">
                <span class="news-category category-event">رویداد</span>
                <div class="news-icon">🌟</div>
                <div class="news-content">
                    <span class="news-title">بازدید علمی از مرکز تحقیقات فضایی ایران</span>
                    <div class="news-meta">
                        <span class="date">📅 ۱۸ اسفند</span>
                        <span class="location">📍 کرج</span>
                    </div>
                </div>
                <div class="news-time">
                    <span class="day">۱۸</span>
                    <span class="month">اسفند</span>
                </div>
            </div>
        </div>
    </div>

    <!-- ============ SECONDARY TICKER ============ -->
    <div class="secondary-ticker">
        <div class="secondary-track">
            <div class="quick-news">ثبت‌نام <span class="highlight">رایگان</span> برای کلیه دانشجویان</div>
            <div class="quick-news">بیش از <span class="highlight">۲۵۰۰+</span> عضو فعال در انجمن</div>
            <div class="quick-news"><span class="highlight">۱۵</span> کارگاه تخصصی برگزار شده</div>
            <div class="quick-news">همکاری با <span class="highlight">۲۰+</span> شرکت دانش‌بنیان</div>
            <div class="quick-news">اعضای برتر: <span class="highlight">تخفیف ۵۰٪</span> روی کلیه دوره‌ها</div>
            <div class="quick-news"><span class="highlight">پورتال اعضا</span> راه‌اندازی شد</div>
            <div class="quick-news">نشست علمی <span class="highlight">هفتگی</span> - پنجشنبه‌ها</div>
            <div class="quick-news">کتابخانه تخصصی با <span class="highlight">۵۰۰+</span> منبع علمی</div>
            <!-- Duplicate -->
            <div class="quick-news">ثبت‌نام <span class="highlight">رایگان</span> برای کلیه دانشجویان</div>
            <div class="quick-news">بیش از <span class="highlight">۲۵۰۰+</span> عضو فعال در انجمن</div>
            <div class="quick-news"><span class="highlight">۱۵</span> کارگاه تخصصی برگزار شده</div>
            <div class="quick-news">همکاری با <span class="highlight">۲۰+</span> شرکت دانش‌بنیان</div>
            <div class="quick-news">اعضای برتر: <span class="highlight">تخفیف ۵۰٪</span> روی کلیه دوره‌ها</div>
            <div class="quick-news"><span class="highlight">پورتال اعضا</span> راه‌اندازی شد</div>
            <div class="quick-news">نشست علمی <span class="highlight">هفتگی</span> - پنجشنبه‌ها</div>
            <div class="quick-news">کتابخانه تخصصی با <span class="highlight">۵۰۰+</span> منبع علمی</div>
        </div>
    </div>

    



`,className:"w-html-embed"})}),c.jsxs(a,{className:"w-box copqmak c10zkoym ct8c5y2 cevxs5e co2qwzx c1vrexag cdiyoxz c9grybw crv1a4t cbrrmm8 cuo9dm5 c5egcmi c3hctjf c13pcpop cpmp50p cxz9xjl cx6c9kw c174sw29 c1dz3al c1cl2zap c8qdjaz c1uc2zh c1l8rbde cq8dnu3 c17jj8qr cth1c7d c1uym5qy",children:[c.jsx(a,{className:"w-box",children:c.jsx(E,{src:"/assets/Siteanjomanelmi(1)_LqjIP2S1IbhPlA_DFLn8N.mp4",width:"/assets/Siteanjomanelmi(1)_LqjIP2S1IbhPlA_DFLn8N.mp4",height:"/assets/Siteanjomanelmi(1)_LqjIP2S1IbhPlA_DFLn8N.mp4",alt:"/assets/Siteanjomanelmi(1)_LqjIP2S1IbhPlA_DFLn8N.mp4",optimize:!0,autoPlay:s,loop:!0,className:"w-video cld4m44 cw650w8 cmyr7sw c1ufztgc c1y4fxrm cf4s3xc c11mt6ha c1nric42"})}),c.jsx(a,{className:"w-box cry9bxc c1lfjoq7 c62q3t9 c1z0l37u c1ml0hr7 c16xs6ny ct02u4h c1pi7e1k cuseo3b c138vb52 cqtg27u c1rstvfo c1bulmrh c12f3mdq",children:c.jsx(e,{className:"w-link c1b1clqm csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1tquuk5 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv c6k8nt0 c47y4r1 cry8yxy c1o5un0r c11dowh9 c7fuvu5 c1jkb32h czkurzs cukfinq cotm8h1 cg4v2lj cszpfx8 cl60rel czukzo6 c1170qfo c12mjb61 c18jkn0u c19jpgqe",children:"افتتاح رسمی وب‌سایت انجمن علمی جهش"})})]}),c.jsx(v,{children:c.jsx(h,{children:c.jsx(a,{tag:"footer",className:"w-box c128r2zr cwmfdmi c1jsg78k",children:c.jsxs(a,{className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80 c1rv26s7",children:[c.jsxs(a,{className:"w-box cry9bxc c18v2pa2 c174sw29 cmaksb1 c1i9o1yp",children:[c.jsx(e,{href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1x4yn0w cl60rel czukzo6 cho8smv",children:c.jsx(z,{alt:"",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,className:"w-image c1uamlc5"})}),c.jsx(a,{className:"w-box cry9bxc c1lxiyww c1s46o9r cdczzub c1jjfh4b c1x8tjwt",children:c.jsxs(a,{tag:"nav","aria-labelledby":"menu4Title",className:"w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7",children:[c.jsx(U,{tag:"h2",id:"menu4Title",className:"w-heading cu3kim0 c11dowh9 c32myit cwrra4i c12y6bqh cmodf44 c82xiwu",children:"ارتباط با ما"}),c.jsxs(S,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7",children:[c.jsx(t,{className:"w-list-item cyvw1ra",children:c.jsx(e,{href:"tel:+989152331974",className:"w-link c1b1clqm csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h cie9ffo c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cg4v2lj cigo8cm czzlsyi cpull2p c10psnxv c6k8nt0 c1f4gqnf cl60rel czukzo6 c1170qfo c12mjb61",children:"تماس"})}),c.jsx(t,{className:"w-list-item",children:c.jsx(e,{href:"https://t.me/emainsupport",className:"w-link c1b1clqm csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cphdlt5 cpull2p c1f4gqnf cl60rel czukzo6 c1170qfo c12mjb61",children:"تلگرام"})}),c.jsx(t,{className:"w-list-item c1i3809r c1f4gqnf",children:c.jsx(e,{href:"https://www.youtube.com/@erfanTeman",className:"w-link c1b1clqm csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cbcxcgu cpull2p cl60rel czukzo6 c1170qfo c12mjb61",children:"یوتیوب"})})]})]})})]}),c.jsx(a,{className:"w-box cry9bxc ct02u4h c1lfjoq7 c16xs6ny",children:c.jsx(a,{className:"w-box cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c1y4fwd4",children:c.jsx(j,{className:"w-text cx84glk c10vhufq",children:"© 2024 jahesh, Inc."})})})]})})})}),c.jsx(u,{code:`
    <script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"><\/script>
<script src="https://files.bpcontent.cloud/2026/02/14/17/20260214173206-L2B0FP66.js" defer><\/script>
    `,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed c1hi70x2"})]})},ac=i=>{const{origin:s,pathname:l,search:d}=new URL(i);return`${s}${l}${d}`},nc=p.memo(({pageKey:i,system:s})=>c.jsx(ec,{system:s},i),(i,s)=>i.pageKey===s.pageKey),ic=({data:i})=>{const{system:s,resources:l,url:d,pageMeta:g}=i,m=ac(d),b=p.useMemo(()=>({imageLoader:q,assetBaseUrl:w,resources:l,breakpoints:Z,onError:console.error}),[l]);return c.jsxs(T.Provider,{value:b,children:[c.jsx(L.Provider,{value:d,children:c.jsx(nc,{pageKey:m,system:s})}),c.jsx(D,{url:d,pageMeta:g,siteName:P,imageLoader:q,assetBaseUrl:w}),c.jsx(M,{children:g.title})]})},tc=Object.freeze(Object.defineProperty({__proto__:null,default:ic},Symbol.toStringTag,{value:"Module"})),lc=({})=>{const i={"@context":"https://schema.org","@type":"WebSite",name:P};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i,null,2)}}),c.jsx("link",{rel:"icon",href:q({src:`${w}${Q}`})}),cc.map(s=>c.jsx("link",{rel:"preload",href:`${w}${s}`,as:"font",crossOrigin:"anonymous"},s)),sc.map(s=>c.jsx("link",{rel:"preload",href:`${w}${s}`,as:"image"},s))]})},rc=Object.freeze(Object.defineProperty({__proto__:null,Head:lc},Symbol.toStringTag,{value:"Module"})),kc={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:F}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/akhbar/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:tc}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/akhbar/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:rc}}};export{kc as configValuesSerialized};
