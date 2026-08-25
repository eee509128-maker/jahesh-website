import{j as e,r as v,a as o,i as u,R as w,b as k,P as j,c as z,d as N}from"../chunks/chunk-_4i898Gl.js";import{l as d,m,C as q,P as S,A as n,$ as E}from"../chunks/chunk-CJTZdOzc.js";import{U as p}from"../chunks/chunk-BTtE8iXS.js";import{n as s}from"../chunks/chunk-CRUfvgxf.js";import{n as b}from"../chunks/chunk-RvLaVuUh.js";import{g as t}from"../chunks/chunk-BKjYWtT8.js";import{n as T}from"../chunks/chunk-Bx5-62GJ.js";import{d as g}from"../chunks/chunk-ClMSjCia.js";import{d as C,i}from"../chunks/chunk-DWuKyx5h.js";import{O as I,x as L,M as A,R as B,$ as R}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const f="jahesh",$=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],P="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",M=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],O=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],D=a=>e.jsxs("body",{className:"w-element",children:[e.jsx("div",{className:"w-element cl99im cddbznk c108iupk c1dfajq9 c1dz2h89",children:e.jsx(p,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NexusNews – ربات خبری هوشمند</title>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;family=JetBrains+Mono:wght@400;700&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
:root {
  --bg: #060810;
  --surface: #0d1120;
  --surface2: #111827;
  --border: rgba(99,179,237,0.12);
  --accent: #38bdf8;
  --accent2: #a78bfa;
  --accent3: #34d399;
  --accent4: #fb923c;
  --danger: #f87171;
  --text: #e2e8f0;
  --muted: #64748b;
  --r: 14px;
}
*{margin:0;padding:0;box-sizing:border-box;}
html,body{height:100%;}
body{
  font-family:'Vazirmatn',sans-serif;
  background:var(--bg);color:var(--text);
  display:flex;flex-direction:column;height:100vh;overflow:hidden;
}
body::before{
  content:'';position:fixed;inset:0;
  background:
    radial-gradient(ellipse 70% 50% at 15% 10%,rgba(56,189,248,0.07) 0%,transparent 60%),
    radial-gradient(ellipse 60% 40% at 85% 85%,rgba(167,139,250,0.07) 0%,transparent 60%);
  pointer-events:none;z-index:0;
}

/* HEADER */
header{
  z-index:50;display:flex;align-items:center;justify-content:space-between;
  padding:0.75rem 1.2rem;
  background:rgba(13,17,32,0.95);backdrop-filter:blur(20px);
  border-bottom:1px solid var(--border);flex-shrink:0;
}
.logo{display:flex;align-items:center;gap:0.6rem;}
.logo-icon{
  width:38px;height:38px;
  background:linear-gradient(135deg,var(--accent4),var(--danger));
  border-radius:10px;display:grid;place-items:center;
  font-size:1.2rem;box-shadow:0 0 16px rgba(251,146,60,0.3);
}
.logo-name{
  font-size:1.25rem;font-weight:900;letter-spacing:-0.5px;
  background:linear-gradient(90deg,var(--accent4),var(--accent));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
}
.logo-sub{font-size:0.68rem;color:var(--muted);margin-top:-2px;}
.live-badge{
  display:flex;align-items:center;gap:0.4rem;
  padding:0.35rem 0.8rem;
  background:rgba(248,113,113,0.08);
  border:1px solid rgba(248,113,113,0.25);
  border-radius:50px;font-size:0.75rem;color:var(--danger);
}
.live-dot{width:7px;height:7px;border-radius:50%;background:var(--danger);animation:blink 1.2s infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.2}}
.hbtn{
  width:34px;height:34px;border-radius:9px;
  border:1px solid var(--border);background:transparent;
  color:var(--muted);cursor:pointer;display:grid;place-items:center;
  font-size:0.85rem;transition:all 0.2s;
}
.hbtn:hover{color:var(--accent);border-color:rgba(56,189,248,0.3);background:rgba(56,189,248,0.05);}
.header-right{display:flex;gap:0.4rem;align-items:center;}

/* LAYOUT */
.layout{display:flex;flex:1;overflow:hidden;position:relative;z-index:1;}

/* SIDEBAR */
.sidebar{
  width:240px;flex-shrink:0;
  background:rgba(13,17,32,0.8);
  border-left:1px solid var(--border);
  display:flex;flex-direction:column;
  padding:0.8rem;gap:0.2rem;overflow-y:auto;
  transition:width 0.3s,padding 0.3s,opacity 0.3s;
}
.sidebar.hidden{width:0;padding:0;opacity:0;overflow:hidden;}
.sidebar-sec{
  font-size:0.67rem;font-weight:700;color:var(--muted);
  text-transform:uppercase;letter-spacing:1px;
  padding:0.7rem 0.4rem 0.3rem;white-space:nowrap;
}
.cat-btn{
  display:flex;align-items:center;gap:0.55rem;
  padding:0.6rem 0.75rem;border-radius:10px;
  border:1px solid transparent;background:transparent;
  color:var(--muted);cursor:pointer;font-size:0.82rem;
  font-family:'Vazirmatn',sans-serif;transition:all 0.2s;width:100%;
  text-align:right;white-space:nowrap;
}
.cat-btn:hover{background:rgba(255,255,255,0.04);color:var(--text);}
.cat-btn.active{
  background:rgba(56,189,248,0.08);
  border-color:rgba(56,189,248,0.2);color:var(--accent);
}
.cat-icon{font-size:1rem;width:20px;text-align:center;}
.refresh-btn{
  margin-top:auto;width:100%;padding:0.65rem;
  background:linear-gradient(135deg,rgba(56,189,248,0.1),rgba(167,139,250,0.1));
  border:1px solid rgba(56,189,248,0.25);border-radius:10px;
  color:var(--accent);cursor:pointer;font-size:0.82rem;
  font-family:'Vazirmatn',sans-serif;transition:all 0.2s;
  display:flex;align-items:center;justify-content:center;gap:0.5rem;white-space:nowrap;
}
.refresh-btn:hover{background:rgba(56,189,248,0.15);}
.refresh-btn.spinning i{animation:spin 1s linear infinite;}
@keyframes spin{to{transform:rotate(360deg)}}

/* MAIN */
.main{flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0;}

/* TICKER */
.ticker{
  background:rgba(251,146,60,0.06);border-bottom:1px solid rgba(251,146,60,0.15);
  padding:0.45rem 1rem;display:flex;align-items:center;gap:0.7rem;
  flex-shrink:0;overflow:hidden;
}
.ticker-label{
  background:var(--accent4);color:#000;
  font-size:0.7rem;font-weight:700;padding:0.15rem 0.55rem;
  border-radius:5px;white-space:nowrap;flex-shrink:0;
}
.ticker-track{
  display:flex;gap:2.5rem;animation:ticker 40s linear infinite;
  white-space:nowrap;font-size:0.78rem;color:var(--muted);
}
@keyframes ticker{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}
.ticker-item{display:flex;align-items:center;gap:0.4rem;}
.ticker-dot{width:5px;height:5px;border-radius:50%;background:var(--accent4);flex-shrink:0;}

/* TOOLBAR */
.toolbar{
  display:flex;gap:0.35rem;padding:0.6rem 1.2rem;
  flex-wrap:wrap;flex-shrink:0;border-bottom:1px solid var(--border);
  background:rgba(13,17,32,0.5);
}
.tpill{
  display:flex;align-items:center;gap:0.4rem;
  padding:0.35rem 0.8rem;border-radius:50px;
  border:1px solid var(--border);background:transparent;
  color:var(--muted);font-size:0.76rem;cursor:pointer;
  transition:all 0.2s;font-family:'Vazirmatn',sans-serif;white-space:nowrap;
}
.tpill:hover{color:var(--text);border-color:rgba(255,255,255,0.2);}
.tpill.active{border-color:var(--accent);color:var(--accent);background:rgba(56,189,248,0.08);}
.sort-select{
  margin-right:auto;background:var(--surface2);
  border:1px solid var(--border);color:var(--muted);
  border-radius:8px;padding:0.28rem 0.65rem;
  font-family:'Vazirmatn',sans-serif;font-size:0.75rem;cursor:pointer;
}

/* NEWS FEED */
.news-feed{
  flex:1;overflow-y:auto;padding:1rem 1.2rem;
  display:flex;flex-direction:column;gap:0.75rem;
  scrollbar-width:thin;scrollbar-color:rgba(99,179,237,0.15) transparent;
}
.news-feed::-webkit-scrollbar{width:4px;}
.news-feed::-webkit-scrollbar-thumb{background:rgba(99,179,237,0.15);border-radius:4px;}

/* NEWS CARD */
.news-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r);padding:1rem 1.1rem;
  cursor:pointer;transition:all 0.2s;animation:fadeUp 0.4s ease;
  position:relative;overflow:hidden;
}
.news-card::before{
  content:'';position:absolute;right:0;top:0;bottom:0;width:3px;
  background:linear-gradient(180deg,var(--accent),var(--accent2));opacity:0;transition:opacity 0.2s;
}
.news-card:hover{border-color:rgba(56,189,248,0.25);transform:translateY(-1px);box-shadow:0 8px 24px rgba(0,0,0,0.4);}
.news-card:hover::before{opacity:1;}
.news-card.expanded{border-color:rgba(56,189,248,0.3);background:rgba(56,189,248,0.03);}
.card-top{display:flex;align-items:flex-start;gap:0.75rem;}
.card-cat{
  padding:0.18rem 0.6rem;border-radius:50px;font-size:0.68rem;font-weight:700;
  white-space:nowrap;flex-shrink:0;margin-top:2px;
}
.cat-world{background:rgba(56,189,248,0.1);color:var(--accent);border:1px solid rgba(56,189,248,0.25);}
.cat-tech{background:rgba(167,139,250,0.1);color:var(--accent2);border:1px solid rgba(167,139,250,0.25);}
.cat-econ{background:rgba(52,211,153,0.1);color:var(--accent3);border:1px solid rgba(52,211,153,0.25);}
.cat-sport{background:rgba(251,146,60,0.1);color:var(--accent4);border:1px solid rgba(251,146,60,0.25);}
.cat-science{background:rgba(248,113,113,0.1);color:var(--danger);border:1px solid rgba(248,113,113,0.25);}
.card-body{flex:1;min-width:0;}
.card-title{font-size:0.92rem;font-weight:700;line-height:1.5;margin-bottom:0.35rem;}
.card-summary{font-size:0.81rem;color:var(--muted);line-height:1.65;display:none;}
.news-card.expanded .card-summary{display:block;}
.card-meta{display:flex;align-items:center;gap:0.6rem;margin-top:0.5rem;flex-wrap:wrap;}
.card-time{font-size:0.71rem;color:var(--muted);display:flex;align-items:center;gap:0.3rem;}
.card-source{font-size:0.71rem;color:var(--accent4);font-weight:600;}
.card-actions{
  display:flex;gap:0.4rem;margin-top:0.7rem;opacity:0;
  transition:opacity 0.2s;padding-top:0.6rem;border-top:1px solid var(--border);
}
.news-card.expanded .card-actions{opacity:1;}
.cact{
  background:transparent;border:1px solid var(--border);
  color:var(--muted);border-radius:7px;padding:0.3rem 0.7rem;
  font-size:0.73rem;cursor:pointer;transition:all 0.2s;
  font-family:'Vazirmatn',sans-serif;display:flex;align-items:center;gap:0.35rem;
}
.cact:hover{color:var(--accent);border-color:rgba(56,189,248,0.3);}
.cact.analyzing{color:var(--accent2);border-color:rgba(167,139,250,0.3);}

/* AI ANALYSIS PANEL */
.ai-panel{
  display:none;background:rgba(167,139,250,0.05);
  border:1px solid rgba(167,139,250,0.2);
  border-radius:10px;padding:0.85rem;margin-top:0.6rem;
  font-size:0.82rem;line-height:1.7;color:var(--text);
}
.ai-panel.vis{display:block;}
.ai-panel-header{
  display:flex;align-items:center;gap:0.5rem;
  margin-bottom:0.6rem;font-weight:700;font-size:0.8rem;color:var(--accent2);
}

/* CHAT SECTION */
.chat-sec{
  border-top:1px solid var(--border);background:rgba(13,17,32,0.7);
  flex-shrink:0;
}
.chat-toggle{
  display:flex;align-items:center;justify-content:space-between;
  padding:0.6rem 1.2rem;cursor:pointer;
  font-size:0.82rem;color:var(--muted);transition:color 0.2s;
  border:none;background:transparent;width:100%;font-family:'Vazirmatn',sans-serif;
}
.chat-toggle:hover{color:var(--accent);}
.chat-body{display:none;padding:0 1.2rem 1rem;}
.chat-body.vis{display:block;}
.chat-messages{
  max-height:200px;overflow-y:auto;margin-bottom:0.6rem;
  display:flex;flex-direction:column;gap:0.5rem;padding:0.5rem 0;
  scrollbar-width:thin;scrollbar-color:rgba(99,179,237,0.15) transparent;
}
.cmsg{font-size:0.82rem;line-height:1.6;padding:0.55rem 0.8rem;border-radius:9px;}
.cmsg.user{background:linear-gradient(135deg,rgba(79,70,229,0.3),rgba(124,58,237,0.3));text-align:left;}
.cmsg.ai{background:rgba(56,189,248,0.06);border:1px solid rgba(56,189,248,0.12);}
.chat-input-row{display:flex;gap:0.5rem;align-items:center;}
.chat-input{
  flex:1;background:var(--surface);border:1px solid var(--border);
  color:var(--text);border-radius:10px;padding:0.6rem 0.9rem;
  font-family:'Vazirmatn',sans-serif;font-size:0.84rem;outline:none;
  transition:border-color 0.2s;
}
.chat-input:focus{border-color:rgba(56,189,248,0.35);}
.chat-send{
  padding:0.6rem 1rem;border:none;border-radius:10px;
  background:linear-gradient(135deg,var(--accent),var(--accent2));
  color:#000;font-size:0.82rem;cursor:pointer;
  font-family:'Vazirmatn',sans-serif;font-weight:700;
  transition:all 0.2s;white-space:nowrap;
}
.chat-send:hover{transform:scale(1.04);}

/* LOADING */
.skeleton{
  background:linear-gradient(90deg,var(--surface) 25%,rgba(255,255,255,0.03) 50%,var(--surface) 75%);
  background-size:200% 100%;animation:shimmer 1.5s infinite;
  border-radius:var(--r);border:1px solid var(--border);padding:1rem;
}
@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
.skel-line{height:12px;border-radius:6px;background:rgba(255,255,255,0.04);margin-bottom:8px;}
.skel-short{width:40%;}

/* EMPTY */
.empty-state{text-align:center;padding:3rem 1rem;color:var(--muted);}
.empty-state .ei{font-size:2.5rem;margin-bottom:0.7rem;}
.empty-state p{font-size:0.85rem;}

/* TOAST */
.toast{
  position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%) translateY(80px);
  background:var(--surface2);border:1px solid var(--border);
  border-radius:10px;padding:0.6rem 1.2rem;font-size:0.82rem;
  z-index:999;transition:transform 0.3s;box-shadow:0 8px 24px rgba(0,0,0,0.5);
}
.toast.show{transform:translateX(-50%) translateY(0);}

/* SETTINGS */
.settings-overlay{position:fixed;inset:0;z-index:99;display:none;}
.settings-overlay.vis{display:block;}
.settings{
  position:fixed;top:0;left:-310px;width:300px;height:100vh;
  background:var(--surface2);border-right:1px solid var(--border);
  z-index:100;padding:1.3rem;transition:left 0.3s ease;overflow-y:auto;
}
.settings.vis{left:0;}
.settings-header{
  display:flex;align-items:center;justify-content:space-between;
  margin-bottom:1.1rem;padding-bottom:0.7rem;border-bottom:1px solid var(--border);
}
.settings-header h3{font-size:0.97rem;font-weight:700;}
.sclose{background:transparent;border:none;color:var(--muted);cursor:pointer;font-size:1rem;}
.sclose:hover{color:var(--danger);}
.sitem{margin-bottom:1rem;}
.slbl{font-size:0.77rem;color:var(--muted);margin-bottom:0.35rem;display:block;}

@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
</style>



<!-- HEADER -->
<header>
  <div class="logo">
    <div class="logo-icon">📡</div>
    <div>
      <div class="logo-name">NexusNews</div>
      <div class="logo-sub">ربات خبری هوش مصنوعی</div>
    </div>
  </div>
  <div class="live-badge">
    <div class="live-dot"></div>
    <span>بروز خودکار</span>
  </div>
  <div class="header-right">
    <span id="updateTime" style="font-size:0.72rem;color:var(--muted);white-space:nowrap"></span>
    <button class="hbtn" id="settingsBtn" title="تنظیمات"><i class="fa fa-sliders"></i></button>
    <button class="hbtn" id="sidebarBtn" title="دسته‌بندی‌ها"><i class="fa fa-bars"></i></button>
  </div>
</header>

<!-- TICKER -->
<div class="ticker">
  <span class="ticker-label">LIVE</span>
  <div class="ticker-track" id="tickerTrack">
    <span class="ticker-item"><span class="ticker-dot"></span>در حال بارگذاری آخرین اخبار...</span>
    <span class="ticker-item"><span class="ticker-dot"></span>NexusNews – هوش مصنوعی اخبار را تحلیل می‌کند</span>
    <span class="ticker-item"><span class="ticker-dot"></span>برای تحلیل هر خبر کلیک کنید</span>
    <span class="ticker-item"><span class="ticker-dot"></span>در حال بارگذاری آخرین اخبار...</span>
    <span class="ticker-item"><span class="ticker-dot"></span>NexusNews – هوش مصنوعی اخبار را تحلیل می‌کند</span>
    <span class="ticker-item"><span class="ticker-dot"></span>برای تحلیل هر خبر کلیک کنید</span>
  </div>
</div>

<!-- LAYOUT -->
<div class="layout">

  <!-- SIDEBAR -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-sec">دسته‌بندی اخبار</div>
    <button class="cat-btn active" onclick="filterCat('all',this)">
      <span class="cat-icon">🌍</span> همه اخبار
    </button>
    <button class="cat-btn" onclick="filterCat('world',this)">
      <span class="cat-icon">🗺️</span> جهان
    </button>
    <button class="cat-btn" onclick="filterCat('tech',this)">
      <span class="cat-icon">💻</span> فناوری
    </button>
    <button class="cat-btn" onclick="filterCat('econ',this)">
      <span class="cat-icon">📈</span> اقتصاد
    </button>
    <button class="cat-btn" onclick="filterCat('sport',this)">
      <span class="cat-icon">⚽</span> ورزش
    </button>
    <button class="cat-btn" onclick="filterCat('science',this)">
      <span class="cat-icon">🔬</span> علم
    </button>
    <div style="margin-top:0.5rem;border-top:1px solid var(--border);padding-top:0.5rem;">
      <div class="sidebar-sec">منبع خبر</div>
      <button class="cat-btn" onclick="setSource('bbc',this)"><span class="cat-icon">📺</span> BBC فارسی</button>
      <button class="cat-btn" onclick="setSource('reuters',this)"><span class="cat-icon">📰</span> Reuters</button>
      <button class="cat-btn" onclick="setSource('techcrunch',this)"><span class="cat-icon">🚀</span> TechCrunch</button>
    </div>
    <button class="refresh-btn" id="refreshBtn" onclick="fetchNews()">
      <i class="fa fa-rotate-right"></i> بروزرسانی اخبار
    </button>
  </div>

  <!-- MAIN -->
  <div class="main">
    <!-- TOOLBAR -->
    <div class="toolbar">
      <button class="tpill active" id="view-cards" onclick="setView('cards',this)">
        <i class="fa fa-th-large"></i> کارت‌ها
      </button>
      <button class="tpill" id="view-compact" onclick="setView('compact',this)">
        <i class="fa fa-list"></i> فشرده
      </button>
      <select class="sort-select" id="sortSelect" onchange="sortNews()">
        <option value="newest">جدیدترین</option>
        <option value="oldest">قدیمی‌ترین</option>
        <option value="cat">دسته‌بندی</option>
      </select>
    </div>

    <!-- NEWS FEED -->
    <div class="news-feed" id="newsFeed">
      <div class="skeleton"><div class="skel-line"></div><div class="skel-line skel-short"></div></div>
      <div class="skeleton"><div class="skel-line"></div><div class="skel-line skel-short"></div></div>
      <div class="skeleton"><div class="skel-line"></div><div class="skel-line skel-short"></div></div>
    </div>

    <!-- CHAT SECTION -->
    <div class="chat-sec">
      <button class="chat-toggle" onclick="toggleChat()">
        <span><i class="fa fa-robot" style="color:var(--accent2);margin-left:0.4rem"></i> چت با ربات خبری – سوال بپرس</span>
        <i class="fa fa-chevron-up" id="chatChevron"></i>
      </button>
      <div class="chat-body" id="chatBody">
        <div class="chat-messages" id="chatMessages">
          <div class="cmsg ai">سلام! من ربات خبری NexusNews هستم. درباره آخرین اخبار سوال بپرس یا بگو «خلاصه اخبار امروز» 📰</div>
        </div>
        <div class="chat-input-row">
          <input class="chat-input" id="chatInput" placeholder="مثلاً: آخرین خبر فناوری چیست؟" onkeydown="if(event.key==='Enter')sendChat()">
          <button class="chat-send" onclick="sendChat()"><i class="fa fa-paper-plane"></i> ارسال</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- SETTINGS -->
<div class="settings-overlay" id="settingsOverlay" onclick="closeSettings()"></div>
<div class="settings" id="settingsPanel">
  <div class="settings-header">
    <h3>⚙️ تنظیمات</h3>
    <button class="sclose" onclick="closeSettings()"><i class="fa fa-times"></i></button>
  </div>
  <div class="sitem">
    <label class="slbl">بروزرسانی خودکار (دقیقه)</label>
    <input type="range" min="1" max="30" value="5" oninput="setAutoRefresh(this.value)" id="refreshSlider" style="-webkit-appearance:none;width:100%;height:3px;border-radius:2px;background:rgba(56,189,248,0.2);outline:none;">
    <span style="font-size:0.75rem;color:var(--accent)" id="refreshVal">هر ۵ دقیقه</span>
  </div>
  <div class="sitem">
    <label class="slbl">تعداد اخبار</label>
    <select id="newsCount" onchange="fetchNews()" style="width:100%;background:var(--surface2);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:0.45rem;font-family:'Vazirmatn',sans-serif;">
      <option value="10">۱۰ خبر</option>
      <option value="20" selected="">۲۰ خبر</option>
      <option value="30">۳۰ خبر</option>
    </select>
  </div>
  <div class="sitem">
    <label class="slbl">زبان تحلیل هوش مصنوعی</label>
    <select id="aiLang" style="width:100%;background:var(--surface2);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:0.45rem;font-family:'Vazirmatn',sans-serif;">
      <option value="fa" selected="">فارسی</option>
      <option value="en">English</option>
    </select>
  </div>
  <div class="sitem">
    <label class="slbl">مدل هوش مصنوعی</label>
    <select id="aiModel" style="width:100%;background:var(--surface2);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:0.45rem;font-family:'Vazirmatn',sans-serif;">
      <option value="llama-3.3-70b-versatile" selected="">Llama 3.3 70B (پیشنهادی)</option>
      <option value="llama-3.1-8b-instant">Llama 3.1 8B (سریع)</option>
      <option value="mixtral-8x7b-32768">Mixtral 8x7B</option>
    </select>
  </div>
</div>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<script>
// ========== CONFIG ==========
const API_KEY = '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';
const GROQ_API = 'https://api.groq.com/openai/v1/chat/completions';
const GNEWS_PROXY = 'https://gnews.io/api/v4/top-headlines';
// برای خبر از RSS-to-JSON استفاده می‌کنیم (بدون نیاز به API key)
const RSS_FEEDS = [
  { url: 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/persian/rss.xml', source: 'BBC فارسی', cat: 'world' },
  { url: 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/persian/science/rss.xml', source: 'BBC علم', cat: 'science' },
  { url: 'https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/', source: 'TechCrunch', cat: 'tech' },
  { url: 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.reuters.com/reuters/topNews', source: 'Reuters', cat: 'world' },
  { url: 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.reuters.com/reuters/businessNews', source: 'Reuters اقتصاد', cat: 'econ' },
  { url: 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.reuters.com/reuters/sportsNews', source: 'Reuters ورزش', cat: 'sport' },
];

// ========== STATE ==========
let allNews = [];
let filteredNews = [];
let currentCat = 'all';
let currentSource = 'all';
let currentView = 'cards';
let chatHistory = [];
let autoRefreshTimer = null;

// ========== INIT ==========
window.addEventListener('DOMContentLoaded', () => {
  fetchNews();
  setupAutoRefresh(5);
  document.getElementById('sidebarBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('hidden');
  });
  document.getElementById('settingsBtn').addEventListener('click', () => {
    document.getElementById('settingsPanel').classList.toggle('vis');
    document.getElementById('settingsOverlay').classList.toggle('vis');
  });
});

// ========== FETCH NEWS ==========
async function fetchNews() {
  const btn = document.getElementById('refreshBtn');
  btn.classList.add('spinning');
  document.getElementById('newsFeed').innerHTML = \`
    <div class="skeleton"><div class="skel-line"></div><div class="skel-line skel-short"></div></div>
    <div class="skeleton"><div class="skel-line"></div><div class="skel-line skel-short"></div></div>
    <div class="skeleton"><div class="skel-line"></div><div class="skel-line skel-short"></div></div>
    <div class="skeleton"><div class="skel-line"></div><div class="skel-line skel-short"></div></div>\`;

  const results = await Promise.allSettled(RSS_FEEDS.map(f => fetchFeed(f)));
  allNews = [];

  results.forEach((r, i) => {
    if (r.status === 'fulfilled' && r.value) {
      r.value.forEach(item => allNews.push({ ...item, source: RSS_FEEDS[i].source, cat: RSS_FEEDS[i].cat }));
    }
  });

  // Sort by date
  allNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  const count = parseInt(document.getElementById('newsCount').value || 20);
  allNews = allNews.slice(0, count);

  updateTicker();
  applyFilter();
  updateTime();
  btn.classList.remove('spinning');
  showToast('✅ اخبار بروز شد');
}

async function fetchFeed(feed) {
  try {
    const resp = await fetch(feed.url);
    if (!resp.ok) return null;
    const data = await resp.json();
    if (!data.items) return null;
    return data.items.slice(0, 8).map(item => ({
      title: item.title || '',
      summary: item.description ? item.description.replace(/<[^>]+>/g, '').slice(0, 200) + '...' : '',
      link: item.link || '#',
      pubDate: item.pubDate || new Date().toISOString(),
      thumbnail: item.thumbnail || item.enclosure?.link || null,
    }));
  } catch { return null; }
}

// ========== RENDER ==========
function applyFilter() {
  filteredNews = allNews.filter(n => {
    const catMatch = currentCat === 'all' || n.cat === currentCat;
    const srcMatch = currentSource === 'all' || n.source.toLowerCase().includes(currentSource);
    return catMatch && srcMatch;
  });
  renderNews();
}

function renderNews() {
  const feed = document.getElementById('newsFeed');
  if (!filteredNews.length) {
    feed.innerHTML = \`<div class="empty-state"><div class="ei">📭</div><p>خبری یافت نشد. بروزرسانی کنید.</p></div>\`;
    return;
  }
  feed.innerHTML = filteredNews.map((n, i) => buildCard(n, i)).join('');
}

function buildCard(n, i) {
  const catMap = { world: 'cat-world', tech: 'cat-tech', econ: 'cat-econ', sport: 'cat-sport', science: 'cat-science' };
  const catLabels = { world: '🌍 جهان', tech: '💻 فناوری', econ: '📈 اقتصاد', sport: '⚽ ورزش', science: '🔬 علم' };
  const catClass = catMap[n.cat] || 'cat-world';
  const catLabel = catLabels[n.cat] || '🌍 جهان';
  const timeAgo = getTimeAgo(n.pubDate);
  const compact = currentView === 'compact';

  return \`
  <div class="news-card \${compact ? 'compact-view' : ''}" onclick="toggleCard(this,\${i})" data-index="\${i}">
    <div class="card-top">
      <span class="card-cat \${catClass}">\${catLabel}</span>
      <div class="card-body">
        <div class="card-title">\${n.title}</div>
        <div class="card-summary">\${n.summary}</div>
        <div class="card-meta">
          <span class="card-time"><i class="fa fa-clock" style="font-size:0.65rem"></i> \${timeAgo}</span>
          <span class="card-source">\${n.source}</span>
        </div>
      </div>
    </div>
    <div class="card-actions">
      <button class="cact" onclick="analyzeNews(event,\${i})"><i class="fa fa-brain"></i> تحلیل هوش مصنوعی</button>
      <button class="cact" onclick="event.stopPropagation();window.open('\${n.link}','_blank')"><i class="fa fa-external-link-alt"></i> منبع اصلی</button>
      <button class="cact" onclick="copyNews(event,\${i})"><i class="fa fa-copy"></i> کپی</button>
    </div>
    <div class="ai-panel" id="aipanel-\${i}">
      <div class="ai-panel-header"><i class="fa fa-robot"></i> تحلیل NexusAI</div>
      <div id="aicontent-\${i}"></div>
    </div>
  </div>\`;
}

function toggleCard(el, i) {
  const wasExpanded = el.classList.contains('expanded');
  document.querySelectorAll('.news-card').forEach(c => c.classList.remove('expanded'));
  if (!wasExpanded) el.classList.add('expanded');
}

// ========== AI ANALYSIS ==========
async function analyzeNews(event, i) {
  event.stopPropagation();
  const card = document.querySelector(\`[data-index="\${i}"]\`);
  card.classList.add('expanded');
  const panel = document.getElementById(\`aipanel-\${i}\`);
  const content = document.getElementById(\`aicontent-\${i}\`);
  panel.classList.add('vis');

  const news = filteredNews[i];
  if (!news) return;

  const btn = card.querySelector('.cact');
  btn.classList.add('analyzing');
  btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> در حال تحلیل...';

  const lang = document.getElementById('aiLang').value;
  const model = document.getElementById('aiModel').value;
  const prompt = lang === 'fa'
    ? \`خبر زیر را به فارسی تحلیل کن. اهمیت، پیامدها و نکات کلیدی را بگو:\\n\\nعنوان: \${news.title}\\nمنبع: \${news.source}\\nخلاصه: \${news.summary}\`
    : \`Analyze this news article. Discuss importance, implications and key points:\\n\\nTitle: \${news.title}\\nSource: \${news.source}\\nSummary: \${news.summary}\`;

  try {
    const resp = await fetch(GROQ_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: lang === 'fa' ? 'تو یک تحلیلگر خبری حرفه‌ای هستی. اخبار را دقیق، کوتاه و مفید تحلیل کن.' : 'You are a professional news analyst. Provide concise, insightful analysis.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 600,
        temperature: 0.5
      })
    });
    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content || 'خطا در دریافت تحلیل';
    content.innerHTML = reply.replace(/\\n/g, '<br>');
  } catch (e) {
    content.innerHTML = \`❌ خطا: \${e.message}\`;
  }

  btn.classList.remove('analyzing');
  btn.innerHTML = '<i class="fa fa-brain"></i> تحلیل هوش مصنوعی';
}

// ========== CHAT WITH NEWS BOT ==========
function toggleChat() {
  const body = document.getElementById('chatBody');
  const chevron = document.getElementById('chatChevron');
  body.classList.toggle('vis');
  chevron.className = body.classList.contains('vis') ? 'fa fa-chevron-down' : 'fa fa-chevron-up';
}

async function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  addChatMsg('user', text);
  input.value = '';

  // Build news context
  const newsContext = allNews.slice(0, 10).map((n, i) => \`\${i + 1}. [\${n.source}] \${n.title}\`).join('\\n');
  const lang = document.getElementById('aiLang').value;
  const model = document.getElementById('aiModel').value;

  const systemPrompt = lang === 'fa'
    ? \`تو ربات خبری NexusNews هستی. آخرین اخبار امروز:\\n\${newsContext}\\n\\nبر اساس این اخبار به سوالات پاسخ بده. اگر خبر مرتبطی نبود، صادقانه بگو.\`
    : \`You are NexusNews bot. Today's top news:\\n\${newsContext}\\n\\nAnswer questions based on these news items.\`;

  chatHistory.push({ role: 'user', content: text });

  addChatMsg('ai', '...');
  const msgs = document.getElementById('chatMessages');
  const lastMsg = msgs.lastElementChild;

  try {
    const resp = await fetch(GROQ_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: systemPrompt }, ...chatHistory],
        max_tokens: 500,
        temperature: 0.6
      })
    });
    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
    lastMsg.textContent = reply;
    chatHistory.push({ role: 'assistant', content: reply });
  } catch (e) {
    lastMsg.textContent = \`❌ خطا: \${e.message}\`;
  }

  msgs.scrollTop = msgs.scrollHeight;
}

function addChatMsg(role, text) {
  const msgs = document.getElementById('chatMessages');
  const el = document.createElement('div');
  el.className = 'cmsg ' + role;
  el.textContent = text;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
  return el;
}

// ========== FILTERS & SORT ==========
function filterCat(cat, el) {
  currentCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  applyFilter();
}

function setSource(src, el) {
  currentSource = currentSource === src ? 'all' : src;
  document.querySelectorAll('[onclick^="setSource"]').forEach(b => b.classList.remove('active'));
  if (currentSource !== 'all') el.classList.add('active');
  applyFilter();
}

function setView(view, el) {
  currentView = view;
  document.querySelectorAll('.tpill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  renderNews();
}

function sortNews() {
  const v = document.getElementById('sortSelect').value;
  if (v === 'newest') filteredNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  else if (v === 'oldest') filteredNews.sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));
  else if (v === 'cat') filteredNews.sort((a, b) => a.cat.localeCompare(b.cat));
  renderNews();
}

// ========== AUTO REFRESH ==========
function setAutoRefresh(minutes) {
  document.getElementById('refreshVal').textContent = \`هر \${minutes} دقیقه\`;
  setupAutoRefresh(parseInt(minutes));
}

function setupAutoRefresh(minutes) {
  if (autoRefreshTimer) clearInterval(autoRefreshTimer);
  autoRefreshTimer = setInterval(fetchNews, minutes * 60 * 1000);
}

// ========== TICKER ==========
function updateTicker() {
  const track = document.getElementById('tickerTrack');
  if (!allNews.length) return;
  const items = allNews.slice(0, 8).map(n =>
    \`<span class="ticker-item"><span class="ticker-dot"></span>\${n.title}</span>\`
  ).join('');
  track.innerHTML = items + items; // duplicate for seamless loop
}

// ========== UTILS ==========
function getTimeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'همین الان';
  if (m < 60) return \`\${m} دقیقه پیش\`;
  const h = Math.floor(m / 60);
  if (h < 24) return \`\${h} ساعت پیش\`;
  return \`\${Math.floor(h / 24)} روز پیش\`;
}

function updateTime() {
  const now = new Date();
  document.getElementById('updateTime').textContent =
    \`آخرین بروز: \${now.getHours()}:\${String(now.getMinutes()).padStart(2,'0')}\`;
}

function copyNews(event, i) {
  event.stopPropagation();
  const n = filteredNews[i];
  navigator.clipboard.writeText(\`\${n.title}\\n\${n.source}\\n\${n.link}\`);
  showToast('✅ خبر کپی شد');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function closeSettings() {
  document.getElementById('settingsPanel').classList.remove('vis');
  document.getElementById('settingsOverlay').classList.remove('vis');
}
<\/script>


`,className:"w-html-embed"})}),e.jsx(s,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:e.jsxs(s,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[e.jsx(d,{children:e.jsx(m,{children:e.jsx(t,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(g,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(s,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:e.jsx(d,{children:e.jsx(m,{children:e.jsx(q,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:e.jsxs(S,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[e.jsx(n,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(t,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(b,{className:"w-text",children:"فروشگاه"})})}),e.jsx(n,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(t,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(n,{"data-ws-index":"2",className:"w-menu-item",children:e.jsx(E,{children:e.jsx(t,{type:"button",href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(b,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),e.jsx(n,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(t,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(n,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(t,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),e.jsxs(s,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[e.jsx(s,{className:"w-box",children:e.jsx(s,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:e.jsx(t,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),e.jsx(d,{children:e.jsx(m,{children:e.jsxs(I,{children:[e.jsx(L,{children:e.jsx(T,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:e.jsx(p,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx(A,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:e.jsxs(B,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[e.jsxs(s,{className:"w-box cx6c9kw c1nd8hlk",children:[e.jsx(d,{children:e.jsx(m,{children:e.jsx(t,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(g,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(R,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:e.jsx(p,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),e.jsx(s,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:e.jsxs(C,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[e.jsx(i,{className:"w-list-item",children:e.jsx(t,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),e.jsx(i,{className:"w-list-item",children:e.jsx(t,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(i,{className:"w-list-item",children:e.jsx(t,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),e.jsx(i,{className:"w-list-item",children:e.jsx(t,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(i,{className:"w-list-item",children:e.jsx(t,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),e.jsx(t,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),_=a=>{const{origin:c,pathname:l,search:r}=new URL(a);return`${c}${l}${r}`},H=v.memo(({pageKey:a,system:c})=>e.jsx(D,{system:c},a),(a,c)=>a.pageKey===c.pageKey),F=({data:a})=>{const{system:c,resources:l,url:r,pageMeta:h}=a,y=_(r),x=v.useMemo(()=>({imageLoader:u,assetBaseUrl:o,resources:l,breakpoints:$,onError:console.error}),[l]);return e.jsxs(w.Provider,{value:x,children:[e.jsx(k.Provider,{value:r,children:e.jsx(H,{pageKey:y,system:c})}),e.jsx(j,{url:r,pageMeta:h,siteName:f,imageLoader:u,assetBaseUrl:o}),e.jsx(z,{children:h.title})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),U=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:f};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:u({src:`${o}${P}`})}),M.map(c=>e.jsx("link",{rel:"preload",href:`${o}${c}`,as:"font",crossOrigin:"anonymous"},c)),O.map(c=>e.jsx("link",{rel:"preload",href:`${o}${c}`,as:"image"},c))]})},Y=Object.freeze(Object.defineProperty({__proto__:null,Head:U},Symbol.toStringTag,{value:"Module"})),re={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:N}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-35/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-35/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Y}}};export{re as configValuesSerialized};
