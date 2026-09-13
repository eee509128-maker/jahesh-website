import{j as e,r as d,a as i,i as n,R as g,b as m,P as b,c as h,d as u}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const c="jahesh",f=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",y=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=[],w=a=>e.jsx("body",{className:"w-element",children:e.jsx(x,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>داشبورد زندگی</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-primary: #0a0a1a;
            --bg-secondary: #12122a;
            --bg-card: rgba(255, 255, 255, 0.03);
            --accent: #00d4aa;
            --accent-secondary: #7c3aed;
            --text-primary: #ffffff;
            --text-secondary: rgba(255, 255, 255, 0.6);
            --border: rgba(255, 255, 255, 0.08);
            --glow: rgba(0, 212, 170, 0.3);
        }

        body {
            font-family: 'Vazirmatn', sans-serif;
            background: var(--bg-primary);
            min-height: 100vh;
            color: var(--text-primary);
            overflow-x: hidden;
        }

        .background-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        }

        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.4;
            animation: float 20s infinite ease-in-out;
        }

        .orb-1 {
            width: 400px;
            height: 400px;
            background: linear-gradient(135deg, #00d4aa, #00ff88);
            top: -100px;
            right: -100px;
            animation-delay: 0s;
        }

        .orb-2 {
            width: 300px;
            height: 300px;
            background: linear-gradient(135deg, #7c3aed, #a855f7);
            bottom: -50px;
            left: -50px;
            animation-delay: -5s;
        }

        .orb-3 {
            width: 250px;
            height: 250px;
            background: linear-gradient(135deg, #f59e0b, #ef4444);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: -10s;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(30px, -30px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(20px, 30px) scale(1.05); }
        }

        .container {
            position: relative;
            z-index: 1;
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            min-height: 100vh;
        }

        header {
            text-align: center;
            padding: 30px 0;
            margin-bottom: 30px;
        }

        h1 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 900;
            background: linear-gradient(135deg, var(--accent), #00ff88, var(--accent-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
            letter-spacing: -1px;
        }

        .subtitle {
            color: var(--text-secondary);
            font-size: 1.1rem;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding-bottom: 40px;
        }

        .card {
            background: var(--bg-card);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 24px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
            opacity: 0;
            transition: opacity 0.4s;
        }

        .card:hover {
            transform: translateY(-5px);
            border-color: rgba(0, 212, 170, 0.3);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px var(--glow);
        }

        .card:hover::before {
            opacity: 1;
        }

        .card-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }

        .card-icon {
            width: 48px;
            height: 48px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }

        .card-title {
            font-size: 1.2rem;
            font-weight: 700;
        }

        /* Water Tracker */
        .water-tracker .card-icon {
            background: linear-gradient(135deg, #0ea5e9, #06b6d4);
        }

        .water-visual {
            position: relative;
            height: 200px;
            background: rgba(14, 165, 233, 0.1);
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 20px;
        }

        .water-fill {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(180deg, #0ea5e9, #06b6d4, #0891b2);
            transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 0 0 16px 16px;
        }

        .water-waves {
            position: absolute;
            top: -10px;
            left: -50%;
            width: 200%;
            height: 20px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%230ea5e9' d='M0,60 C300,120 600,0 900,60 C1200,120 1200,60 1200,60 L1200,120 L0,120 Z'/%3E%3C/svg%3E");
            animation: wave 3s linear infinite;
        }

        @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .water-stats {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .water-amount {
            font-size: 2rem;
            font-weight: 900;
            color: #0ea5e9;
        }

        .water-goal {
            color: var(--text-secondary);
        }

        .water-buttons {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }

        .water-btn {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 12px;
            font-family: inherit;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .water-btn.add {
            background: linear-gradient(135deg, #0ea5e9, #06b6d4);
            color: white;
        }

        .water-btn.remove {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .water-btn:hover {
            transform: scale(1.02);
        }

        /* Mood Tracker */
        .mood-tracker .card-icon {
            background: linear-gradient(135deg, #f59e0b, #fbbf24);
        }

        .mood-selector {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 20px;
        }

        .mood-btn {
            flex: 1;
            padding: 15px 10px;
            border: 2px solid var(--border);
            border-radius: 16px;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 1.8rem;
        }

        .mood-btn:hover {
            transform: scale(1.1);
            border-color: var(--accent);
        }

        .mood-btn.active {
            border-color: var(--accent);
            background: rgba(0, 212, 170, 0.1);
            box-shadow: 0 0 20px var(--glow);
        }

        .mood-history {
            display: flex;
            gap: 8px;
            justify-content: center;
        }

        .mood-day {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            background: var(--bg-secondary);
            transition: transform 0.3s;
        }

        .mood-day:hover {
            transform: scale(1.2);
        }

        /* Focus Timer */
        .focus-timer .card-icon {
            background: linear-gradient(135deg, #7c3aed, #a855f7);
        }

        .timer-display {
            text-align: center;
            margin-bottom: 20px;
        }

        .timer-circle {
            width: 180px;
            height: 180px;
            margin: 0 auto 20px;
            position: relative;
        }

        .timer-svg {
            transform: rotate(-90deg);
            width: 100%;
            height: 100%;
        }

        .timer-bg {
            fill: none;
            stroke: rgba(124, 58, 237, 0.2);
            stroke-width: 8;
        }

        .timer-progress {
            fill: none;
            stroke: url(#timer-gradient);
            stroke-width: 8;
            stroke-linecap: round;
            transition: stroke-dashoffset 0.5s;
        }

        .timer-time {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2.5rem;
            font-weight: 900;
            background: linear-gradient(135deg, #7c3aed, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .timer-controls {
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        .timer-btn {
            padding: 14px 28px;
            border: none;
            border-radius: 14px;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .timer-btn.start {
            background: linear-gradient(135deg, #7c3aed, #a855f7);
            color: white;
        }

        .timer-btn.reset {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-secondary);
            border: 1px solid var(--border);
        }

        .timer-btn:hover {
            transform: scale(1.05);
        }

        /* Habit Tracker */
        .habit-tracker .card-icon {
            background: linear-gradient(135deg, #10b981, #34d399);
        }

        .habit-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .habit-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
            background: var(--bg-secondary);
            border-radius: 14px;
            transition: all 0.3s;
        }

        .habit-item:hover {
            background: rgba(16, 185, 129, 0.1);
        }

        .habit-check {
            width: 28px;
            height: 28px;
            border: 2px solid var(--border);
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            font-size: 0.9rem;
        }

        .habit-check.checked {
            background: linear-gradient(135deg, #10b981, #34d399);
            border-color: #10b981;
        }

        .habit-name {
            flex: 1;
            font-weight: 500;
        }

        .habit-streak {
            font-size: 0.85rem;
            color: var(--text-secondary);
            background: rgba(16, 185, 129, 0.1);
            padding: 4px 10px;
            border-radius: 8px;
        }

        /* Breathing Exercise */
        .breathing-exercise .card-icon {
            background: linear-gradient(135deg, #ec4899, #f472b6);
        }

        .breath-circle {
            width: 160px;
            height: 160px;
            margin: 0 auto 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .breath-inner {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, #ec4899, #f472b6);
            transition: all 4s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .breath-inner.inhale {
            transform: scale(1.8);
        }

        .breath-text {
            font-size: 0.9rem;
            font-weight: 600;
            color: white;
            text-align: center;
        }

        .breath-controls {
            text-align: center;
        }

        .breath-btn {
            padding: 14px 32px;
            border: none;
            border-radius: 14px;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            background: linear-gradient(135deg, #ec4899, #f472b6);
            color: white;
            transition: all 0.3s;
        }

        .breath-btn:hover {
            transform: scale(1.05);
        }

        .breath-instruction {
            text-align: center;
            color: var(--text-secondary);
            margin-bottom: 15px;
            min-height: 24px;
        }

        /* Daily Goals */
        .daily-goals .card-icon {
            background: linear-gradient(135deg, #f97316, #fb923c);
        }

        .goals-progress {
            margin-bottom: 20px;
        }

        .progress-bar {
            height: 8px;
            background: var(--bg-secondary);
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #f97316, #fb923c);
            border-radius: 4px;
            transition: width 0.5s;
        }

        .progress-text {
            display: flex;
            justify-content: space-between;
            margin-top: 8px;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        .goals-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .goal-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            background: var(--bg-secondary);
            border-radius: 12px;
        }

        .goal-check {
            width: 22px;
            height: 22px;
            border: 2px solid var(--border);
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            font-size: 0.8rem;
        }

        .goal-check.checked {
            background: linear-gradient(135deg, #f97316, #fb923c);
            border-color: #f97316;
        }

        .goal-text {
            flex: 1;
        }

        .goal-text.completed {
            text-decoration: line-through;
            opacity: 0.5;
        }

        /* Stats Card */
        .stats-card .card-icon {
            background: linear-gradient(135deg, #6366f1, #818cf8);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }

        .stat-item {
            text-align: center;
            padding: 15px;
            background: var(--bg-secondary);
            border-radius: 12px;
        }

        .stat-value {
            font-size: 1.8rem;
            font-weight: 900;
            background: linear-gradient(135deg, #6366f1, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-label {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-top: 4px;
        }

        /* Notes Card */
        .quick-notes .card-icon {
            background: linear-gradient(135deg, #14b8a6, #2dd4bf);
        }

        .note-input {
            width: 100%;
            padding: 15px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--bg-secondary);
            color: var(--text-primary);
            font-family: inherit;
            font-size: 0.95rem;
            resize: none;
            min-height: 100px;
            transition: border-color 0.3s;
        }

        .note-input:focus {
            outline: none;
            border-color: #14b8a6;
        }

        .notes-list {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-height: 150px;
            overflow-y: auto;
        }

        .note-item {
            padding: 12px;
            background: rgba(20, 184, 166, 0.1);
            border-radius: 10px;
            font-size: 0.9rem;
            position: relative;
            padding-left: 35px;
        }

        .note-item::before {
            content: '📝';
            position: absolute;
            right: 10px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .grid {
                grid-template-columns: 1fr;
            }
            
            .container {
                padding: 15px;
            }
            
            h1 {
                font-size: 1.8rem;
            }
            
            .timer-circle {
                width: 150px;
                height: 150px;
            }
            
            .timer-time {
                font-size: 2rem;
            }
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: var(--bg-secondary);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--accent);
            border-radius: 3px;
        }

        /* Animations */
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .card {
            animation: fadeIn 0.6s ease-out forwards;
            opacity: 0;
        }

        .card:nth-child(1) { animation-delay: 0.1s; }
        .card:nth-child(2) { animation-delay: 0.2s; }
        .card:nth-child(3) { animation-delay: 0.3s; }
        .card:nth-child(4) { animation-delay: 0.4s; }
        .card:nth-child(5) { animation-delay: 0.5s; }
        .card:nth-child(6) { animation-delay: 0.6s; }
        .card:nth-child(7) { animation-delay: 0.7s; }
        .card:nth-child(8) { animation-delay: 0.8s; }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>


    <div class="background-animation">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
    </div>

    <div class="container">
        <header>
            <h1>داشبورد زندگی</h1>
            <p class="subtitle">همه چیز برای یک روز بهتر در یکجا</p>
        </header>

        <div class="grid">
            <!-- Water Tracker -->
            <div class="card water-tracker">
                <div class="card-header">
                    <div class="card-icon">💧</div>
                    <h3 class="card-title">میزان آب مصرفی</h3>
                </div>
                <div class="water-visual">
                    <div class="water-fill" id="waterFill">
                        <div class="water-waves"></div>
                    </div>
                </div>
                <div class="water-stats">
                    <span class="water-amount"><span id="waterAmount">0</span> لیوان</span>
                    <span class="water-goal">هدف: ۸ لیوان</span>
                </div>
                <div class="water-buttons">
                    <button class="water-btn remove" onclick="updateWater(-1)">− کم</button>
                    <button class="water-btn add" onclick="updateWater(1)">+ اضافه</button>
                </div>
            </div>

            <!-- Mood Tracker -->
            <div class="card mood-tracker">
                <div class="card-header">
                    <div class="card-icon">😊</div>
                    <h3 class="card-title">حال و هوا</h3>
                </div>
                <div class="mood-selector">
                    <button class="mood-btn" data-mood="😍" onclick="setMood(this)">😍</button>
                    <button class="mood-btn" data-mood="😊" onclick="setMood(this)">😊</button>
                    <button class="mood-btn" data-mood="😐" onclick="setMood(this)">😐</button>
                    <button class="mood-btn" data-mood="😢" onclick="setMood(this)">😢</button>
                    <button class="mood-btn" data-mood="😡" onclick="setMood(this)">😡</button>
                </div>
                <p style="text-align: center; color: var(--text-secondary); margin-bottom: 15px; font-size: 0.9rem;">هفته اخیر:</p>
                <div class="mood-history" id="moodHistory"></div>
            </div>

            <!-- Focus Timer -->
            <div class="card focus-timer">
                <div class="card-header">
                    <div class="card-icon">⏱️</div>
                    <h3 class="card-title">تایمر تمرکز</h3>
                </div>
                <div class="timer-display">
                    <div class="timer-circle">
                        <svg class="timer-svg" viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="timer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#7c3aed"></stop>
                                    <stop offset="100%" stop-color="#a855f7"></stop>
                                </linearGradient>
                            </defs>
                            <circle class="timer-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="timer-progress" id="timerProgress" cx="50" cy="50" r="45" stroke-dasharray="283" stroke-dashoffset="0"></circle>
                        </svg>
                        <div class="timer-time" id="timerDisplay">25:00</div>
                    </div>
                </div>
                <div class="timer-controls">
                    <button class="timer-btn start" id="timerBtn" onclick="toggleTimer()">شروع</button>
                    <button class="timer-btn reset" onclick="resetTimer()">ریست</button>
                </div>
            </div>

            <!-- Habit Tracker -->
            <div class="card habit-tracker">
                <div class="card-header">
                    <div class="card-icon">✅</div>
                    <h3 class="card-title">عادت‌های روزانه</h3>
                </div>
                <div class="habit-list" id="habitList"></div>
            </div>

            <!-- Breathing Exercise -->
            <div class="card breathing-exercise">
                <div class="card-header">
                    <div class="card-icon">🧘</div>
                    <h3 class="card-title">تمرین تنفس</h3>
                </div>
                <div class="breath-circle">
                    <div class="breath-inner" id="breathInner">
                        <span class="breath-text" id="breathText">شروع</span>
                    </div>
                </div>
                <p class="breath-instruction" id="breathInstruction">برای شروع تنفس عمیق کلیک کنید</p>
                <div class="breath-controls">
                    <button class="breath-btn" id="breathBtn" onclick="toggleBreathing()">شروع تمرین</button>
                </div>
            </div>

            <!-- Daily Goals -->
            <div class="card daily-goals">
                <div class="card-header">
                    <div class="card-icon">🎯</div>
                    <h3 class="card-title">اهداف روزانه</h3>
                </div>
                <div class="goals-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" id="goalsProgress" style="width: 0%"></div>
                    </div>
                    <div class="progress-text">
                        <span id="goalsCompleted">0 از 4 انجام شده</span>
                        <span id="goalsPercent">0%</span>
                    </div>
                </div>
                <div class="goals-list" id="goalsList"></div>
            </div>

            <!-- Stats -->
            <div class="card stats-card">
                <div class="card-header">
                    <div class="card-icon">📊</div>
                    <h3 class="card-title">آمار امروز</h3>
                </div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-value" id="statWater">0</div>
                        <div class="stat-label">لیوان آب</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="statFocus">0</div>
                        <div class="stat-label">دقیقه تمرکز</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="statHabits">0</div>
                        <div class="stat-label">عادت انجام شده</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="statBreaths">0</div>
                        <div class="stat-label">دور تنفس</div>
                    </div>
                </div>
            </div>

            <!-- Quick Notes -->
            <div class="card quick-notes">
                <div class="card-header">
                    <div class="card-icon">📝</div>
                    <h3 class="card-title">یادداشت سریع</h3>
                </div>
                <textarea class="note-input" id="noteInput" placeholder="یادداشت خود را بنویسید..."></textarea>
                <div class="notes-list" id="notesList"></div>
            </div>
        </div>
    </div>

    <script>
        // Data
        let waterGlasses = 0;
        let timerRunning = false;
        let timerSeconds = 25 * 60;
        let timerInterval = null;
        let breathingActive = false;
        let breathingInterval = null;
        let breathCycles = 0;
        let focusMinutes = 0;

        const habits = [
            { name: 'ورزش صبحگاهی', streak: 7, checked: false },
            { name: 'مطالعه ۳۰ دقیقه', streak: 12, checked: false },
            { name: 'خواب به موقع', streak: 5, checked: false },
            { name: 'بدون گوشی قبل خواب', streak: 3, checked: false }
        ];

        const goals = [
            { text: 'یک فصل کتاب بخوانم', completed: false },
            { text: '۵۰۰ قدم راه بروم', completed: false },
            { text: 'با یک دوست تماس بگیرم', completed: false },
            { text: 'یک کار خوب انجام دهم', completed: false }
        ];

        const moodHistory = ['😊', '😍', '😐', '😊', '🙂', '😢', '😊'];

        // Initialize
        function init() {
            renderHabits();
            renderGoals();
            renderMoodHistory();
            updateStats();
        }

        // Water Tracker
        function updateWater(amount) {
            waterGlasses = Math.max(0, Math.min(8, waterGlasses + amount));
            document.getElementById('waterAmount').textContent = waterGlasses;
            document.getElementById('waterFill').style.height = (waterGlasses / 8 * 100) + '%';
            updateStats();
        }

        // Mood Tracker
        function setMood(btn) {
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            moodHistory.push(btn.dataset.mood);
            if (moodHistory.length > 7) moodHistory.shift();
            renderMoodHistory();
        }

        function renderMoodHistory() {
            const container = document.getElementById('moodHistory');
            container.innerHTML = moodHistory.slice(-7).map(m => 
                \`<div class="mood-day">\${m}</div>\`
            ).join('');
        }

        // Focus Timer
        function toggleTimer() {
            const btn = document.getElementById('timerBtn');
            if (timerRunning) {
                clearInterval(timerInterval);
                btn.textContent = 'ادامه';
                timerRunning = false;
            } else {
                timerRunning = true;
                btn.textContent = 'توقف';
                timerInterval = setInterval(() => {
                    timerSeconds--;
                    focusMinutes = Math.max(focusMinutes, (25 * 60 - timerSeconds) / 60);
                    updateTimerDisplay();
                    updateStats();
                    if (timerSeconds <= 0) {
                        clearInterval(timerInterval);
                        timerRunning = false;
                        btn.textContent = 'شروع';
                        timerSeconds = 25 * 60;
                        updateTimerDisplay();
                    }
                }, 1000);
            }
        }

        function resetTimer() {
            clearInterval(timerInterval);
            timerRunning = false;
            timerSeconds = 25 * 60;
            document.getElementById('timerBtn').textContent = 'شروع';
            updateTimerDisplay();
        }

        function updateTimerDisplay() {
            const mins = Math.floor(timerSeconds / 60);
            const secs = timerSeconds % 60;
            document.getElementById('timerDisplay').textContent = 
                \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
            
            const progress = (25 * 60 - timerSeconds) / (25 * 60);
            const circumference = 2 * Math.PI * 45;
            document.getElementById('timerProgress').style.strokeDashoffset = 
                circumference * (1 - progress);
        }

        // Habit Tracker
        function renderHabits() {
            const container = document.getElementById('habitList');
            container.innerHTML = habits.map((h, i) => \`
                <div class="habit-item">
                    <div class="habit-check \${h.checked ? 'checked' : ''}" onclick="toggleHabit(\${i})">
                        \${h.checked ? '✓' : ''}
                    </div>
                    <span class="habit-name">\${h.name}</span>
                    <span class="habit-streak">🔥 \${h.streak} روز</span>
                </div>
            \`).join('');
        }

        function toggleHabit(index) {
            habits[index].checked = !habits[index].checked;
            renderHabits();
            updateStats();
        }

        // Breathing Exercise
        function toggleBreathing() {
            const btn = document.getElementById('breathBtn');
            const inner = document.getElementById('breathInner');
            const text = document.getElementById('breathText');
            const instruction = document.getElementById('breathInstruction');

            if (breathingActive) {
                clearInterval(breathingInterval);
                breathingActive = false;
                btn.textContent = 'شروع تمرین';
                instruction.textContent = 'برای شروع تنفس عمیق کلیک کنید';
                inner.classList.remove('inhale');
                text.textContent = 'شروع';
            } else {
                breathingActive = true;
                btn.textContent = 'توقف';
                let phase = 'inhale';
                
                const breathe = () => {
                    if (phase === 'inhale') {
                        inner.classList.add('inhale');
                        text.textContent = 'دم';
                        instruction.textContent = 'هوا را به داخل بکشید...';
                        phase = 'hold1';
                        setTimeout(breathe, 4000);
                    } else if (phase === 'hold1') {
                        text.textContent = 'نگه';
                        instruction.textContent = 'نفستان را نگه دارید...';
                        phase = 'exhale';
                        setTimeout(breathe, 4000);
                    } else if (phase === 'exhale') {
                        inner.classList.remove('inhale');
                        text.textContent = 'بازدم';
                        instruction.textContent = 'هوا را بیرون دهید...';
                        phase = 'hold2';
                        setTimeout(breathe, 4000);
                    } else {
                        text.textContent = 'آرام';
                        instruction.textContent = 'آماده باشید...';
                        phase = 'inhale';
                        breathCycles++;
                        updateStats();
                        setTimeout(breathe, 2000);
                    }
                };
                breathe();
            }
        }

        // Daily Goals
        function renderGoals() {
            const container = document.getElementById('goalsList');
            container.innerHTML = goals.map((g, i) => \`
                <div class="goal-item">
                    <div class="goal-check \${g.completed ? 'checked' : ''}" onclick="toggleGoal(\${i})">
                        \${g.completed ? '✓' : ''}
                    </div>
                    <span class="goal-text \${g.completed ? 'completed' : ''}">\${g.text}</span>
                </div>
            \`).join('');
            updateGoalsProgress();
        }

        function toggleGoal(index) {
            goals[index].completed = !goals[index].completed;
            renderGoals();
            updateStats();
        }

        function updateGoalsProgress() {
            const completed = goals.filter(g => g.completed).length;
            const percent = (completed / goals.length * 100).toFixed(0);
            document.getElementById('goalsProgress').style.width = percent + '%';
            document.getElementById('goalsCompleted').textContent = \`\${completed} از \${goals.length} انجام شده\`;
            document.getElementById('goalsPercent').textContent = percent + '%';
        }

        // Stats
        function updateStats() {
            document.getElementById('statWater').textContent = waterGlasses;
            document.getElementById('statFocus').textContent = Math.floor(focusMinutes);
            document.getElementById('statHabits').textContent = habits.filter(h => h.checked).length;
            document.getElementById('statBreaths').textContent = breathCycles;
        }

        // Notes
        document.getElementById('noteInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const text = this.value.trim();
                if (text) {
                    const list = document.getElementById('notesList');
                    const note = document.createElement('div');
                    note.className = 'note-item';
                    note.textContent = text;
                    list.insertBefore(note, list.firstChild);
                    this.value = '';
                }
            }
        });

        // Initialize app
        init();
    <\/script>

`,className:"w-html-embed"})}),S=a=>{const{origin:t,pathname:o,search:r}=new URL(a);return`${t}${o}${r}`},z=d.memo(({pageKey:a,system:t})=>e.jsx(w,{system:t},a),(a,t)=>a.pageKey===t.pageKey),I=({data:a})=>{const{system:t,resources:o,url:r,pageMeta:s}=a,l=S(r),p=d.useMemo(()=>({imageLoader:n,assetBaseUrl:i,resources:o,breakpoints:f,onError:console.error}),[o]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(m.Provider,{value:r,children:e.jsx(z,{pageKey:l,system:t})}),e.jsx(b,{url:r,pageMeta:s,siteName:c,imageLoader:n,assetBaseUrl:i}),e.jsx(h,{children:s.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),C=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:c};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${i}${v}`})}),y.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${i}${t}`,as:"image"},t))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:C},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-25/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-25/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{M as configValuesSerialized};
