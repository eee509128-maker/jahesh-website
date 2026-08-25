import{j as e,r as y,a as o,i as x,R as w,b as k,P as j,c as z,d as q}from"../chunks/chunk-_4i898Gl.js";import{l as d,m as p,C as L,P,A as r,$ as N}from"../chunks/chunk-CJTZdOzc.js";import{U as h}from"../chunks/chunk-BTtE8iXS.js";import{n as i}from"../chunks/chunk-CRUfvgxf.js";import{n as v}from"../chunks/chunk-RvLaVuUh.js";import{g as t}from"../chunks/chunk-BKjYWtT8.js";import{n as S}from"../chunks/chunk-Bx5-62GJ.js";import{y as f}from"../chunks/chunk-BO0ALJ3I.js";import{d as G,i as l}from"../chunks/chunk-DWuKyx5h.js";import{O as C,x as E,M,R as H,$ as F}from"../chunks/chunk-Bp3SeOo3.js";/* empty css                      */import"../chunks/chunk-C8mXcq4L.js";const g="jahesh",T=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],A="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",D=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],I=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],R=a=>e.jsxs("body",{className:"w-element",children:[e.jsx(h,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موشک فضایی استارشات - بررسی فنی</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #a855f7;
            --primary-dark: #7c3aed;
            --primary-darker: #581c87;
            --bg-dark: #0a0612;
            --bg-purple: #1a0a2e;
            --text-light: #f3e8ff;
            --text-muted: #c4b5fd;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: var(--bg-dark);
            color: var(--text-light);
            overflow-x: hidden;
            min-height: 100vh;
        }

        /* Animated Background */
        .bg-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background: radial-gradient(ellipse at 20% 20%, #2d1b4e 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 80%, #1e1040 0%, transparent 50%),
                        radial-gradient(ellipse at 50% 50%, #0f0720 0%, #050208 100%);
        }

        /* Stars */
        .stars-layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 200%;
            z-index: 1;
            pointer-events: none;
        }

        .star {
            position: absolute;
            background: #fff;
            border-radius: 50%;
        }

        .star.small {
            width: 1px;
            height: 1px;
            opacity: 0.6;
        }

        .star.medium {
            width: 2px;
            height: 2px;
            opacity: 0.8;
        }

        .star.large {
            width: 3px;
            height: 3px;
            opacity: 1;
            box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.3);
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }

        /* Scroll Progress */
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), #ec4899, #6366f1);
            z-index: 1000;
            width: 0%;
            box-shadow: 0 0 20px var(--primary);
        }

        /* Navigation Dots */
        .nav-dots {
            position: fixed;
            left: 30px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .nav-dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: rgba(168, 85, 247, 0.2);
            border: 2px solid rgba(168, 85, 247, 0.4);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }

        .nav-dot::before {
            content: attr(data-label);
            position: absolute;
            left: 30px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(26, 10, 46, 0.95);
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.85rem;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .nav-dot:hover::before {
            opacity: 1;
            visibility: visible;
        }

        .nav-dot.active {
            background: var(--primary);
            border-color: var(--primary);
            box-shadow: 0 0 20px var(--primary), 0 0 40px rgba(168, 85, 247, 0.4);
            transform: scale(1.3);
        }

        .nav-dot.completed {
            background: rgba(168, 85, 247, 0.6);
            border-color: var(--primary);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 20px;
        }

        .hero-badge {
            display: inline-block;
            padding: 10px 25px;
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
            border: 1px solid rgba(168, 85, 247, 0.3);
            border-radius: 50px;
            font-size: 0.9rem;
            color: var(--primary);
            margin-bottom: 30px;
            backdrop-filter: blur(10px);
        }

        .hero h1 {
            font-size: clamp(2.5rem, 6vw, 5rem);
            font-weight: 900;
            background: linear-gradient(135deg, #fff 0%, #e9d5ff 50%, #a855f7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
            margin-bottom: 25px;
            letter-spacing: -2px;
        }

        .hero-subtitle {
            font-size: clamp(1.1rem, 2vw, 1.4rem);
            color: var(--text-muted);
            max-width: 600px;
            line-height: 2;
            margin-bottom: 40px;
        }

        .scroll-cue {
            position: absolute;
            bottom: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            animation: float 2s ease-in-out infinite;
        }

        .scroll-cue span {
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        .scroll-cue .mouse {
            width: 26px;
            height: 42px;
            border: 2px solid var(--primary);
            border-radius: 20px;
            position: relative;
        }

        .scroll-cue .mouse::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 8px;
            background: var(--primary);
            border-radius: 3px;
            animation: scrollDown 1.5s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        @keyframes scrollDown {
            0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
            100% { transform: translateX(-50%) translateY(15px); opacity: 0; }
        }

        /* Rocket Section */
        .rocket-section {
            position: relative;
            z-index: 10;
            height: 600vh;
        }

        .sticky-rocket {
            position: sticky;
            top: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .rocket-container {
            position: relative;
            width: 500px;
            height: 90vh;
            max-height: 800px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Rocket SVG */
        .rocket-svg {
            width: 100%;
            height: 100%;
            filter: drop-shadow(0 0 60px rgba(168, 85, 247, 0.3));
        }

        /* Rocket Parts */
        .rocket-part {
            opacity: 0.15;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .rocket-part.active {
            opacity: 1;
        }

        /* Info Cards */
        .info-card {
            position: absolute;
            width: 340px;
            background: linear-gradient(135deg, rgba(26, 10, 46, 0.9), rgba(15, 5, 25, 0.95));
            backdrop-filter: blur(25px);
            border-radius: 20px;
            border: 1px solid rgba(168, 85, 247, 0.25);
            padding: 28px;
            opacity: 0;
            transform: translateX(60px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5),
                        0 0 60px rgba(168, 85, 247, 0.1);
        }

        .info-card.left {
            transform: translateX(-60px);
        }

        .info-card.visible {
            opacity: 1;
            transform: translateX(0);
            pointer-events: auto;
        }

        .info-card-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 15px;
        }

        .info-card-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--primary), #ec4899);
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
        }

        .info-card h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--text-light);
        }

        .info-card p {
            font-size: 0.95rem;
            color: var(--text-muted);
            line-height: 1.9;
            margin-bottom: 20px;
        }

        .info-card-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            padding-top: 18px;
            border-top: 1px solid rgba(168, 85, 247, 0.2);
        }

        .stat-item {
            text-align: center;
        }

        .stat-value {
            font-size: 1.4rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary), #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-label {
            font-size: 0.75rem;
            color: var(--text-muted);
            margin-top: 4px;
        }

        /* Connection Lines */
        .connection-line {
            position: absolute;
            height: 2px;
            background: linear-gradient(90deg, var(--primary), transparent);
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
        }

        .connection-line.visible {
            opacity: 0.6;
        }

        /* Footer */
        .footer {
            position: relative;
            z-index: 10;
            padding: 120px 30px;
            text-align: center;
        }

        .footer-content {
            max-width: 700px;
            margin: 0 auto;
        }

        .footer h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--text-light), var(--primary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
        }

        .footer p {
            font-size: 1.1rem;
            color: var(--text-muted);
            line-height: 2;
            margin-bottom: 40px;
        }

        .cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 18px 45px;
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: #fff;
            text-decoration: none;
            border-radius: 60px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 15px 50px rgba(168, 85, 247, 0.4);
            border: none;
            cursor: pointer;
        }

        .cta-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 70px rgba(168, 85, 247, 0.5);
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .info-card {
                width: 280px;
                padding: 22px;
            }
            .rocket-container {
                width: 400px;
            }
        }

        @media (max-width: 900px) {
            .nav-dots {
                left: 15px;
            }
            .rocket-container {
                width: 320px;
            }
            .info-card {
                position: fixed !important;
                bottom: 30px !important;
                left: 50% !important;
                top: auto !important;
                right: auto !important;
                transform: translateX(-50%) translateY(100px) !important;
                width: 90% !important;
                max-width: 400px;
            }
            .info-card.visible {
                transform: translateX(-50%) translateY(0) !important;
            }
        }

        @media (max-width: 480px) {
            .rocket-container {
                width: 280px;
            }
            .hero h1 {
                letter-spacing: 0;
            }
        }
    </style>


    <!-- Background -->
    <div class="bg-canvas"></div>
    <div class="stars-layer" id="starsLayer"></div>

    <!-- Scroll Progress -->
    <div class="scroll-progress" id="scrollProgress"></div>

    <!-- Navigation Dots -->
    <nav class="nav-dots" id="navDots">
        <div class="nav-dot" data-label="کلاهک" data-index="0"></div>
        <div class="nav-dot" data-label="محموله" data-index="1"></div>
        <div class="nav-dot" data-label="مخازن سوخت" data-index="2"></div>
        <div class="nav-dot" data-label="موتور" data-index="3"></div>
        <div class="nav-dot" data-label="پایه فرود" data-index="4"></div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-badge">🚀 نسل جدید فناوری فضایی</div>
        <h1>استارشات سوپر هیوی</h1>
        <p class="hero-subtitle">
            قدرتمندترین موشک تاریخ بشریت را کاوش کنید.
            با اسکرول کردن، اجزای داخلی این شاهکار مهندسی را بررسی نمایید.
        </p>
        <div class="scroll-cue">
            <span>اسکرول کنید</span>
            <div class="mouse"></div>
        </div>
    </section>

    <!-- Rocket Section -->
    <section class="rocket-section" id="rocketSection">
        <div class="sticky-rocket">
            <div class="rocket-container">
                
                <!-- Rocket SVG -->
                <svg class="rocket-svg" viewBox="0 0 300 700" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- Gradients -->
                        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#2d1b4e"></stop>
                            <stop offset="25%" stop-color="#4c1d95"></stop>
                            <stop offset="50%" stop-color="#581c87"></stop>
                            <stop offset="75%" stop-color="#4c1d95"></stop>
                            <stop offset="100%" stop-color="#2d1b4e"></stop>
                        </linearGradient>
                        
                        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="rgba(168,85,247,0)"></stop>
                            <stop offset="50%" stop-color="rgba(168,85,247,0.4)"></stop>
                            <stop offset="100%" stop-color="rgba(168,85,247,0)"></stop>
                        </linearGradient>

                        <linearGradient id="noseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#6b21a8"></stop>
                            <stop offset="100%" stop-color="#4c1d95"></stop>
                        </linearGradient>

                        <linearGradient id="engineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#4c1d95"></stop>
                            <stop offset="50%" stop-color="#3b0764"></stop>
                            <stop offset="100%" stop-color="#1e1b4b"></stop>
                        </linearGradient>

                        <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                            <stop offset="0%" stop-color="#fbbf24"></stop>
                            <stop offset="30%" stop-color="#f97316"></stop>
                            <stop offset="60%" stop-color="#ef4444"></stop>
                            <stop offset="100%" stop-color="rgba(239,68,68,0)"></stop>
                        </linearGradient>

                        <radialGradient id="windowGradient" cx="30%" cy="30%">
                            <stop offset="0%" stop-color="#e9d5ff"></stop>
                            <stop offset="100%" stop-color="#7c3aed"></stop>
                        </radialGradient>

                        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="blur"></feGaussianBlur>
                            <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                        </filter>

                        <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="8" result="blur"></feGaussianBlur>
                            <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                        </filter>
                    </defs>

                    <!-- Part 1: Nose Cone -->
                    <g class="rocket-part" id="part-0">
                        <path d="M150,10 
                                 Q185,10 195,45 
                                 L195,100 
                                 L105,100 
                                 L105,45 
                                 Q115,10 150,10 Z" fill="url(#noseGradient)" stroke="#a855f7" stroke-width="1.5"></path>
                        
                        <!-- Nose Details -->
                        <path d="M150,15 Q175,15 182,50 L182,95 L118,95 L118,50 Q125,15 150,15" fill="url(#highlightGradient)"></path>
                        
                        <!-- Tip -->
                        <ellipse cx="150" cy="18" rx="12" ry="8" fill="#581c87" stroke="#a855f7"></ellipse>
                        <ellipse cx="150" cy="16" rx="6" ry="4" fill="#7c3aed"></ellipse>
                        
                        <!-- Windows -->
                        <circle cx="150" cy="55" r="12" fill="url(#windowGradient)" stroke="#c084fc" stroke-width="1.5"></circle>
                        <circle cx="150" cy="55" r="5" fill="#1e1b4b" opacity="0.5"></circle>
                        
                        <circle cx="150" cy="82" r="8" fill="url(#windowGradient)" stroke="#c084fc" stroke-width="1"></circle>
                    </g>

                    <!-- Part 2: Payload Section -->
                    <g class="rocket-part" id="part-1">
                        <rect x="95" y="100" width="110" height="80" rx="5" fill="url(#bodyGradient)" stroke="#a855f7" stroke-width="1.5"></rect>
                        
                        <!-- Payload Door -->
                        <rect x="105" y="110" width="90" height="60" rx="4" fill="#3b0764" stroke="#7c3aed" stroke-width="1"></rect>
                        <line x1="105" y1="140" x2="195" y2="140" stroke="#7c3aed" stroke-width="0.5" stroke-dasharray="5,3"></line>
                        
                        <!-- Latches -->
                        <rect x="130" y="118" width="15" height="6" rx="2" fill="#a855f7"></rect>
                        <rect x="155" y="118" width="15" height="6" rx="2" fill="#a855f7"></rect>
                        <rect x="130" y="155" width="40" height="5" rx="2" fill="#7c3aed"></rect>
                        
                        <!-- Highlight -->
                        <rect x="110" y="115" width="30" height="50" rx="2" fill="url(#highlightGradient)"></rect>
                    </g>

                    <!-- Part 3: Fuel Tanks -->
                    <g class="rocket-part" id="part-2">
                        <!-- Main Tank Body -->
                        <rect x="90" y="180" width="120" height="180" rx="8" fill="url(#bodyGradient)" stroke="#a855f7" stroke-width="1.5"></rect>
                        
                        <!-- LOX Tank (Top) -->
                        <rect x="100" y="190" width="100" height="75" rx="5" fill="#4c1d95" stroke="#7c3aed" stroke-width="1"></rect>
                        <text x="150" y="233" text-anchor="middle" fill="#c4b5fd" font-size="11" font-weight="600">LOX</text>
                        <text x="150" y="248" text-anchor="middle" fill="#a78bfa" font-size="8">اکسیژن مایع</text>
                        
                        <!-- Interstage -->
                        <rect x="95" y="265" width="110" height="15" fill="#3b0764" stroke="#7c3aed"></rect>
                        <line x1="100" y1="272" x2="200" y2="272" stroke="#a855f7" stroke-width="0.5" stroke-dasharray="3,3"></line>
                        
                        <!-- Fuel Tank (Bottom) -->
                        <rect x="100" y="280" width="100" height="70" rx="5" fill="#4c1d95" stroke="#7c3aed" stroke-width="1"></rect>
                        <text x="150" y="320" text-anchor="middle" fill="#c4b5fd" font-size="11" font-weight="600">CH₄</text>
                        <text x="150" y="335" text-anchor="middle" fill="#a78bfa" font-size="8">متان مایع</text>
                        
                        <!-- Fuel Lines -->
                        <circle cx="115" cy="355" r="6" fill="#581c87" stroke="#a855f7"></circle>
                        <circle cx="150" cy="355" r="6" fill="#581c87" stroke="#a855f7"></circle>
                        <circle cx="185" cy="355" r="6" fill="#581c87" stroke="#a855f7"></circle>
                        
                        <!-- Tank Highlight -->
                        <rect x="105" y="195" width="25" height="140" rx="3" fill="url(#highlightGradient)"></rect>
                    </g>

                    <!-- Part 4: Engine Section -->
                    <g class="rocket-part" id="part-3">
                        <!-- Engine Bay -->
                        <path d="M90,360 L90,400 Q90,420 100,430 L200,430 Q210,420 210,400 L210,360 Z" fill="url(#engineGradient)" stroke="#a855f7" stroke-width="1.5"></path>
                        
                        <!-- Engine Bells -->
                        <g filter="url(#glowFilter)">
                            <!-- Center Engine -->
                            <ellipse cx="150" cy="450" rx="25" ry="15" fill="#1e1b4b" stroke="#a855f7"></ellipse>
                            <path d="M135,430 L125,455 L175,455 L165,430 Z" fill="#2d1b4e" stroke="#7c3aed"></path>
                            <ellipse cx="150" cy="430" rx="10" ry="5" fill="#3b0764" stroke="#a855f7"></ellipse>
                            
                            <!-- Side Engines -->
                            <ellipse cx="115" cy="455" rx="18" ry="10" fill="#1e1b4b" stroke="#7c3aed"></ellipse>
                            <path d="M105,438 L97,458 L133,458 L125,438 Z" fill="#2d1b4e" stroke="#7c3aed"></path>
                            
                            <ellipse cx="185" cy="455" rx="18" ry="10" fill="#1e1b4b" stroke="#7c3aed"></ellipse>
                            <path d="M175,438 L167,458 L203,458 L195,438 Z" fill="#2d1b4e" stroke="#7c3aed"></path>
                        </g>
                        
                        <!-- Engine Details -->
                        <circle cx="150" cy="395" r="15" fill="#3b0764" stroke="#a855f7" stroke-width="2"></circle>
                        <circle cx="150" cy="395" r="8" fill="#581c87"></circle>
                        <circle cx="150" cy="395" r="3" fill="#a855f7"></circle>
                        
                        <!-- Gimbal Actuators -->
                        <rect x="105" y="380" width="8" height="20" rx="2" fill="#7c3aed"></rect>
                        <rect x="187" y="380" width="8" height="20" rx="2" fill="#7c3aed"></rect>
                    </g>

                    <!-- Part 5: Landing Legs -->
                    <g class="rocket-part" id="part-4">
                        <!-- Left Leg -->
                        <path d="M90,400 L50,480 L70,485 L85,460 L100,470 L95,420 Z" fill="url(#engineGradient)" stroke="#a855f7" stroke-width="1.5"></path>
                        <rect x="55" y="478" width="20" height="8" rx="2" fill="#3b0764" stroke="#7c3aed"></rect>
                        
                        <!-- Right Leg -->
                        <path d="M210,400 L250,480 L230,485 L215,460 L200,470 L205,420 Z" fill="url(#engineGradient)" stroke="#a855f7" stroke-width="1.5"></path>
                        <rect x="225" y="478" width="20" height="8" rx="2" fill="#3b0764" stroke="#7c3aed"></rect>
                        
                        <!-- Grid Fins -->
                        <g transform="rotate(-15, 85, 200)">
                            <rect x="50" y="190" width="30" height="25" rx="3" fill="#3b0764" stroke="#7c3aed"></rect>
                            <line x1="55" y1="195" x2="55" y2="210" stroke="#a855f7" stroke-width="1"></line>
                            <line x1="60" y1="195" x2="60" y2="210" stroke="#a855f7" stroke-width="1"></line>
                            <line x1="65" y1="195" x2="65" y2="210" stroke="#a855f7" stroke-width="1"></line>
                            <line x1="70" y1="195" x2="70" y2="210" stroke="#a855f7" stroke-width="1"></line>
                            <line x1="75" y1="195" x2="75" y2="210" stroke="#a855f7" stroke-width="1"></line>
                        </g>
                        
                        <g transform="rotate(15, 215, 200)">
                            <rect x="220" y="190" width="30" height="25" rx="3" fill="#3b0764" stroke="#7c3aed"></rect>
                            <line x1="225" y1="195" x2="225" y2="210" stroke="#a855f7" stroke-width="1"></line>
                            <line x1="230" y1="195" x2="230" y2="210" stroke="#a855f7" stroke-width="1"></line>
                            <line x1="235" y1="195" x2="235" y2="210" stroke="#a855f7" stroke-width="1"></line>
                            <line x1="240" y1="195" x2="240" y2="210" stroke="#a855f7" stroke-width="1"></line>
                            <line x1="245" y1="195" x2="245" y2="210" stroke="#a855f7" stroke-width="1"></line>
                        </g>
                    </g>

                    <!-- Flames (Animated) -->
                    <g class="rocket-flames" id="rocketFlames" opacity="0">
                        <ellipse cx="150" cy="490" rx="35" ry="50" fill="url(#flameGradient)" filter="url(#strongGlow)"></ellipse>
                        <ellipse cx="150" cy="480" rx="20" ry="35" fill="#fbbf24"></ellipse>
                        <ellipse cx="150" cy="475" rx="10" ry="20" fill="#fef3c7"></ellipse>
                        
                        <!-- Side Flames -->
                        <ellipse cx="115" cy="480" rx="12" ry="25" fill="url(#flameGradient)"></ellipse>
                        <ellipse cx="185" cy="480" rx="12" ry="25" fill="url(#flameGradient)"></ellipse>
                    </g>
                </svg>

                <!-- Info Cards -->
                <div class="info-card left" id="card-0" style="top: 5%; right: calc(100% + 50px);">
                    <div class="info-card-header">
                        <div class="info-card-icon">🛡️</div>
                        <h3>کلاهک هدایتگر</h3>
                    </div>
                    <p>
                        کلاهک آیرودینامیک از جنس آلیاژ تیتانیوم-آلومینیوم با پوشش حرارتی سرامیکی.
                        این بخش حاوی سیستم‌های ناوبری پیشرفته و ارتباط با مرکز کنترل زمینی است.
                    </p>
                    <div class="info-card-stats">
                        <div class="stat-item">
                            <div class="stat-value">۱۰m</div>
                            <div class="stat-label">ارتفاع</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۱۵۰۰°C</div>
                            <div class="stat-label">تحمل حرارت</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۹m</div>
                            <div class="stat-label">قطر</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">تیتانیوم</div>
                            <div class="stat-label">جنس</div>
                        </div>
                    </div>
                </div>

                <div class="info-card" id="card-1" style="top: 20%; left: calc(100% + 50px);">
                    <div class="info-card-header">
                        <div class="info-card-icon">📦</div>
                        <h3>محفظه محموله</h3>
                    </div>
                    <p>
                        بخش حمل بار با درب‌های بارگیری جانبی و سیستم رهاسازی خودکار.
                        قابلیت حمل ماهواره‌های بزرگ و محموله‌های سنگین به مدار زمین را دارد.
                    </p>
                    <div class="info-card-stats">
                        <div class="stat-item">
                            <div class="stat-value">۱۵۰t</div>
                            <div class="stat-label">ظرفیت</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۱۱۰۰m³</div>
                            <div class="stat-label">حجم</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۹m</div>
                            <div class="stat-label">قطر</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۱۷m</div>
                            <div class="stat-label">ارتفاع</div>
                        </div>
                    </div>
                </div>

                <div class="info-card left" id="card-2" style="top: 40%; right: calc(100% + 50px);">
                    <div class="info-card-header">
                        <div class="info-card-icon">⛽</div>
                        <h3>مخازن سوخت</h3>
                    </div>
                    <p>
                        سیستم پیشران با دو مخزن اصلی: اکسیژن مایع (LOX) و متان مایع (CH₄).
                        این ترکیب سوختی سازگار با محیط زیست و قابل تولید در مریخ است.
                    </p>
                    <div class="info-card-stats">
                        <div class="stat-item">
                            <div class="stat-value">۳۶۰۰t</div>
                            <div class="stat-label">ظرفیت کل</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">-۱۸۳°C</div>
                            <div class="stat-label">دمای LOX</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">-۱۶۲°C</div>
                            <div class="stat-label">دمای CH₄</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">فولاد</div>
                            <div class="stat-label">جنس مخزن</div>
                        </div>
                    </div>
                </div>

                <div class="info-card" id="card-3" style="top: 58%; left: calc(100% + 50px);">
                    <div class="info-card-header">
                        <div class="info-card-icon">🔥</div>
                        <h3>موتورهای رپتور</h3>
                    </div>
                    <p>
                        موتورهای احتراق کامل با چرخه اکسیژن-متان با توانایی گیمبال برای کنترل پرواز.
                        هر موتور ۲.۳ مگانیوتن نیرو تولید می‌کند و قابلیت استفاده مجدد دارد.
                    </p>
                    <div class="info-card-stats">
                        <div class="stat-item">
                            <div class="stat-value">۳۳</div>
                            <div class="stat-label">تعداد موتور</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۷۶MN</div>
                            <div class="stat-label">نیروی کل</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۳۶۰s</div>
                            <div class="stat-label">آیزپک</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۱۰۰۰</div>
                            <div class="stat-label">چرخه عمر</div>
                        </div>
                    </div>
                </div>

                <div class="info-card left" id="card-4" style="top: 75%; right: calc(100% + 50px);">
                    <div class="info-card-header">
                        <div class="info-card-icon">🦾</div>
                        <h3>سیستم فرود</h3>
                    </div>
                    <p>
                        پایه‌های فرود تلسکوپی و باله‌های گریدی کنترل‌شونده برای فرود عمودی دقیق.
                        این سیستم امکان استفاده مجدد کامل موشک را فراهم می‌کند.
                    </p>
                    <div class="info-card-stats">
                        <div class="stat-item">
                            <div class="stat-value">۶</div>
                            <div class="stat-label">پایه فرود</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۴</div>
                            <div class="stat-label">باله گریدی</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">۵m/s</div>
                            <div class="stat-label">سرعت فرود</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">کامپوزیت</div>
                            <div class="stat-label">جنس</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <h2>آینده اکتشاف فضایی</h2>
            <p>
                استارشات سوپر هیوی، دروازه‌ای به سوی مریخ و فراتر از آن.
                با ظرفیت حمل ۱۵۰ تن به مدار زمین، بزرگ‌ترین رویای بشریت را به واقعیت تبدیل می‌کند.
            </p>
            <button class="cta-btn">
                <span>🚀</span>
                <span>مشاهده پروازهای آینده</span>
            </button>
        </div>
    </footer>

    <script>
        // ========== Initialize Stars ==========
        const starsLayer = document.getElementById('starsLayer');
        const starCount = 200;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            const size = Math.random();
            if (size < 0.6) star.classList.add('small');
            else if (size < 0.9) star.classList.add('medium');
            else star.classList.add('large');
            
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animation = \`twinkle \${2 + Math.random() * 3}s ease-in-out infinite\`;
            star.style.animationDelay = Math.random() * 5 + 's';
            
            starsLayer.appendChild(star);
        }

        // ========== Scroll Animation ==========
        const rocketSection = document.getElementById('rocketSection');
        const navDots = document.querySelectorAll('.nav-dot');
        const parts = document.querySelectorAll('.rocket-part');
        const cards = document.querySelectorAll('.info-card');
        const flames = document.getElementById('rocketFlames');
        const scrollProgress = document.getElementById('scrollProgress');

        const totalParts = 5;
        let currentIndex = -1;

        function updateAnimation() {
            const rect = rocketSection.getBoundingClientRect();
            const sectionStart = window.innerHeight;
            const sectionEnd = rocketSection.offsetHeight - window.innerHeight;
            
            // Calculate scroll progress within rocket section
            let progress = 0;
            if (rect.top < sectionStart && rect.bottom > 0) {
                progress = Math.max(0, Math.min(1, (sectionStart - rect.top) / sectionEnd));
            }
            
            // Update global scroll progress bar
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const globalProgress = (window.scrollY / docHeight) * 100;
            scrollProgress.style.width = globalProgress + '%';
            
            // Only proceed if in rocket section
            if (progress > 0 && progress < 1) {
                const partProgress = progress * totalParts;
                const newPartIndex = Math.min(Math.floor(partProgress), totalParts - 1);
                
                // Update parts visibility
                parts.forEach((part, index) => {
                    if (index <= newPartIndex) {
                        part.classList.add('active');
                    } else {
                        part.classList.remove('active');
                    }
                });
                
                // Update info cards
                cards.forEach((card, index) => {
                    if (index === newPartIndex) {
                        card.classList.add('visible');
                    } else {
                        card.classList.remove('visible');
                    }
                });
                
                // Update nav dots
                navDots.forEach((dot, index) => {
                    dot.classList.remove('active', 'completed');
                    if (index === newPartIndex) {
                        dot.classList.add('active');
                    } else if (index < newPartIndex) {
                        dot.classList.add('completed');
                    }
                });
                
                // Show flames at the end
                if (progress > 0.85) {
                    flames.style.opacity = (progress - 0.85) / 0.15;
                    flames.style.transition = 'opacity 0.3s ease';
                } else {
                    flames.style.opacity = 0;
                }
                
                currentIndex = newPartIndex;
            } else {
                // Hide everything when out of section
                if (progress <= 0) {
                    parts.forEach(part => part.classList.remove('active'));
                    cards.forEach(card => card.classList.remove('visible'));
                    navDots.forEach(dot => dot.classList.remove('active', 'completed'));
                }
            }
        }

        // Nav dot click handler
        navDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                const sectionHeight = rocketSection.offsetHeight - window.innerHeight;
                const targetPosition = rocketSection.offsetTop + (index / totalParts) * sectionHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });

        // Throttled scroll listener
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateAnimation();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Initial update
        updateAnimation();

        // Parallax effect on mouse move
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) / 40;
            mouseY = (e.clientY - window.innerHeight / 2) / 40;
        });

        function animateParallax() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;
            
            const rocketContainer = document.querySelector('.rocket-container');
            if (rocketContainer) {
                rocketContainer.style.transform = \`translate(\${currentX}px, \${currentY}px)\`;
            }
            
            requestAnimationFrame(animateParallax);
        }
        animateParallax();
    <\/script>


`,className:"w-html-embed"}),e.jsx(i,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c18j5d8w c1fysxfs",children:e.jsxs(i,{className:"w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:[e.jsx(d,{children:e.jsx(p,{children:e.jsx(t,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(f,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(i,{tag:"nav","aria-label":"main",className:"w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t",children:e.jsx(d,{children:e.jsx(p,{children:e.jsx(L,{className:"w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf",children:e.jsxs(P,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y",children:[e.jsx(r,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(t,{type:"button",href:"/frwshgah",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(v,{className:"w-text",children:"فروشگاه"})})}),e.jsx(r,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(t,{href:"/abzar-jahesh",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 c10psnxv cl7jefz c150vpwe c22g687 cx84glk cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(r,{"data-ws-index":"2",className:"w-menu-item",children:e.jsx(N,{children:e.jsx(t,{type:"button",href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:e.jsx(v,{className:"w-text c1llqm3g",children:"درباره انجمن"})})})}),e.jsx(r,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(t,{href:"/akhbar",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(r,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(t,{href:"/hwsh-msnway",className:"w-link c1llqm3g csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی جهش"})})]})})})})}),e.jsxs(i,{className:"w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl",children:[e.jsx(i,{className:"w-box",children:e.jsx(i,{className:"w-box c76ugon c1va7jp0 c18xibj9 ccn5ruk c5ehae6 cax3zcx c1le23sj c40yjke c1kzn7na c17q2jvf csugexd cciu1th co2lzyj cghs7z1 c18xchlu ckqzz7r",children:e.jsx(t,{href:"https://t.me/+7eeuF5ZMpFRmYzg8",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cy8zwmn cl60rel czukzo6 c1muywj1",children:"عضویت در انجمن"})})}),e.jsx(d,{children:e.jsx(p,{children:e.jsxs(C,{children:[e.jsx(E,{children:e.jsx(S,{"aria-label":"Open mobile menu",type:"button",className:"w-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd",children:e.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx(M,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9",children:e.jsxs(H,{className:"w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2",children:[e.jsxs(i,{className:"w-box cx6c9kw c1nd8hlk",children:[e.jsx(d,{children:e.jsx(p,{children:e.jsx(t,{"aria-label":"Home",href:"/",className:"w-link ceaxqcs cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel czukzo6 cho8smv",children:e.jsx(f,{loading:"eager",src:"/assets/Layer_0_aDhmtOhUccIugxMgRqVRF.png",width:458,height:427,alt:"",className:"w-image coe1sx2 cybwsdi"})})})}),e.jsx(F,{"aria-label":"Close mobile menu",className:"w-close-button c1umvwl9 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cy8zwmn c9x99qz cl60rel czukzo6 c1muywj1 c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd",children:e.jsx(h,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),e.jsx(i,{tag:"nav","aria-label":"Main mobile",className:"w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof",children:e.jsxs(G,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz",children:[e.jsx(l,{className:"w-list-item",children:e.jsx(t,{href:"/frwshgah",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"فروشگاه"})}),e.jsx(l,{className:"w-list-item",children:e.jsx(t,{href:"/twsah-dhndgan",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"داشبورد تکنولوژی جهش"})}),e.jsx(l,{className:"w-list-item",children:e.jsx(t,{href:"https://jahesh-website.vercel.app/abzar-jahesh",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"درباره انجمن"})}),e.jsx(l,{className:"w-list-item",children:e.jsx(t,{href:"/akhbar",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"اخبار"})}),e.jsx(l,{className:"w-list-item",children:e.jsx(t,{href:"/hwsh-msnway",className:"w-link c12j9tyh csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel czukzo6 c1170qfo c12mjb61",children:"هوش مصنوعی"})})]})}),e.jsx(t,{href:"/download-app",className:"w-link c1umvwl9 c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cnf3mc6 cbm6zv4 ce8zlua c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cy8zwmn cl60rel czukzo6 c1muywj1",children:"DOWNLOAD APP"})]})})]})})})]})]})})]}),_=a=>{const{origin:c,pathname:n,search:s}=new URL(a);return`${c}${n}${s}`},B=y.memo(({pageKey:a,system:c})=>e.jsx(R,{system:c},a),(a,c)=>a.pageKey===c.pageKey),O=({data:a})=>{const{system:c,resources:n,url:s,pageMeta:m}=a,u=_(s),b=y.useMemo(()=>({imageLoader:x,assetBaseUrl:o,resources:n,breakpoints:T,onError:console.error}),[n]);return e.jsxs(w.Provider,{value:b,children:[e.jsx(k.Provider,{value:s,children:e.jsx(B,{pageKey:u,system:c})}),e.jsx(j,{url:s,pageMeta:m,siteName:g,imageLoader:x,assetBaseUrl:o}),e.jsx(z,{children:m.title})]})},X=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),Y=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:g};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:x({src:`${o}${A}`})}),D.map(c=>e.jsx("link",{rel:"preload",href:`${o}${c}`,as:"font",crossOrigin:"anonymous"},c)),I.map(c=>e.jsx("link",{rel:"preload",href:`${o}${c}`,as:"image"},c))]})},$=Object.freeze(Object.defineProperty({__proto__:null,Head:Y},Symbol.toStringTag,{value:"Module"})),se={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-5/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:X}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-5/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:$}}};export{se as configValuesSerialized};
