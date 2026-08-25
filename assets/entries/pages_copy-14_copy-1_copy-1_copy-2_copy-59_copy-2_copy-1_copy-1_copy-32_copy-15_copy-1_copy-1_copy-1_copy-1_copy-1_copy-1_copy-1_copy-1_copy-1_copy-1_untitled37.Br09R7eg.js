import{j as t,r as d,a as i,i as s,R as m,b as g,P as v,c as u,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",x=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],S=a=>t.jsx("body",{className:"w-element",children:t.jsx(f,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>باغ هوشمند من 🌱</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            overflow-x: hidden;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            color: white;
            padding: 30px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        h1 {
            font-size: 3em;
            margin-bottom: 10px;
            animation: fadeInDown 1s ease;
        }

        .subtitle {
            font-size: 1.2em;
            opacity: 0.9;
        }

        /* Dashboard Cards */
        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: fadeInUp 0.8s ease;
        }

        .stat-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .stat-icon {
            font-size: 3em;
            margin-bottom: 15px;
        }

        .stat-title {
            font-size: 1.1em;
            color: #555;
            margin-bottom: 10px;
        }

        .stat-value {
            font-size: 2em;
            font-weight: bold;
            color: #667eea;
        }

        /* Garden Grid */
        .garden-container {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            margin: 30px 0;
        }

        .garden-grid {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 15px;
            margin: 20px 0;
        }

        .garden-plot {
            aspect-ratio: 1;
            background: linear-gradient(135deg, #8B7355 0%, #6B5345 100%);
            border-radius: 15px;
            border: 3px solid #5a4332;
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease;
            overflow: hidden;
        }

        .garden-plot:hover {
            transform: scale(1.1);
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            z-index: 10;
        }

        .garden-plot.planted {
            background: linear-gradient(135deg, #2d5016 0%, #1a3d0a 100%);
        }

        .plant {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2em;
            animation: growPlant 2s ease;
        }

        @keyframes growPlant {
            0% {
                transform: translateX(-50%) scale(0);
                opacity: 0;
            }
            100% {
                transform: translateX(-50%) scale(1);
                opacity: 1;
            }
        }

        .growth-bar {
            position: absolute;
            bottom: 5px;
            left: 5px;
            right: 5px;
            height: 6px;
            background: rgba(255,255,255,0.3);
            border-radius: 3px;
            overflow: hidden;
        }

        .growth-fill {
            height: 100%;
            background: linear-gradient(90deg, #4CAF50, #8BC34A);
            transition: width 0.5s ease;
        }

        /* Control Panel */
        .controls {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin: 20px 0;
        }

        .btn {
            padding: 15px 30px;
            border: none;
            border-radius: 10px;
            font-size: 1.1em;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            font-weight: bold;
        }

        .btn-plant {
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
        }

        .btn-water {
            background: linear-gradient(135deg, #2196F3, #1976D2);
            color: white;
        }

        .btn-fertilize {
            background: linear-gradient(135deg, #FF9800, #F57C00);
            color: white;
        }

        .btn-harvest {
            background: linear-gradient(135deg, #9C27B0, #7B1FA2);
            color: white;
        }

        .btn-clear {
            background: linear-gradient(135deg, #f44336, #d32f2f);
            color: white;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        .btn:active {
            transform: translateY(-1px);
        }

        /* Plant Selector */
        .plant-selector {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }

        .plant-option {
            background: white;
            border: 3px solid #ddd;
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .plant-option:hover {
            border-color: #667eea;
            transform: scale(1.05);
        }

        .plant-option.selected {
            border-color: #4CAF50;
            background: #e8f5e9;
        }

        .plant-emoji {
            font-size: 3em;
            margin-bottom: 10px;
        }

        .plant-name {
            font-size: 0.9em;
            color: #555;
        }

        /* Weather System */
        .weather-panel {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            margin: 30px 0;
        }

        .weather-display {
            display: flex;
            align-items: center;
            gap: 20px;
            font-size: 1.5em;
        }

        .weather-icon {
            font-size: 3em;
        }

        .season-badge {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 20px;
            font-weight: bold;
            margin-left: 15px;
        }

        .spring { background: #FFE4E1; color: #FF69B4; }
        .summer { background: #FFF9E6; color: #FFD700; }
        .autumn { background: #FFE4CC; color: #FF8C00; }
        .winter { background: #E6F3FF; color: #4169E1; }

        /* Inventory */
        .inventory {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            margin: 30px 0;
        }

        .inventory-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .inventory-item {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .inventory-item-icon {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .inventory-item-count {
            font-size: 1.5em;
            font-weight: bold;
            color: #667eea;
        }

        /* Animations */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes waterDrop {
            0% {
                transform: translateY(-50px) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(0) scale(0.5);
                opacity: 0;
            }
        }

        .water-effect {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2em;
            animation: waterDrop 1s ease;
            pointer-events: none;
        }

        /* Progress Bars */
        .progress-section {
            margin: 20px 0;
        }

        .progress-item {
            margin: 15px 0;
        }

        .progress-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-weight: bold;
            color: #555;
        }

        .progress-bar {
            height: 25px;
            background: #e0e0e0;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
        }

        .progress-bar-fill {
            height: 100%;
            border-radius: 15px;
            transition: width 0.5s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .progress-water { background: linear-gradient(90deg, #2196F3, #03A9F4); }
        .progress-sun { background: linear-gradient(90deg, #FF9800, #FFC107); }
        .progress-nutrients { background: linear-gradient(90deg, #4CAF50, #8BC34A); }

        /* Notifications */
        .notification {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 20px 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideDown 0.5s ease;
            font-size: 1.2em;
            font-weight: bold;
        }

        @keyframes slideDown {
            from {
                transform: translateX(-50%) translateY(-100px);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }

        .section-title {
            font-size: 1.8em;
            color: #333;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .garden-grid {
                grid-template-columns: repeat(4, 1fr);
            }
            
            h1 {
                font-size: 2em;
            }
            
            .controls {
                justify-content: center;
            }
        }
    </style>


    <div class="container">
        <header>
            <h1>🌱 باغ هوشمند من 🌱</h1>
            <p class="subtitle">مدیریت باغ مجازی با سیستم رشد پیشرفته</p>
        </header>

        <!-- Dashboard Statistics -->
        <div class="dashboard">
            <div class="stat-card">
                <div class="stat-icon">🌿</div>
                <div class="stat-title">گیاهان فعال</div>
                <div class="stat-value" id="activePlants">0</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">🏆</div>
                <div class="stat-title">برداشت شده</div>
                <div class="stat-value" id="harvestedCount">0</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">💰</div>
                <div class="stat-title">سکه‌ها</div>
                <div class="stat-value" id="coins">100</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">⭐</div>
                <div class="stat-title">امتیاز</div>
                <div class="stat-value" id="score">0</div>
            </div>
        </div>

        <!-- Weather Panel -->
        <div class="weather-panel">
            <h2 class="section-title">🌤️ آب و هوا</h2>
            <div class="weather-display">
                <span class="weather-icon" id="weatherIcon">☀️</span>
                <div>
                    <div>دما: <strong id="temperature">25°C</strong></div>
                    <div>رطوبت: <strong id="humidity">60%</strong></div>
                </div>
                <span class="season-badge spring" id="seasonBadge">بهار</span>
            </div>
            <div class="progress-section">
                <div class="progress-item">
                    <div class="progress-label">
                        <span>💧 آب</span>
                        <span id="waterPercent">100%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-fill progress-water" id="waterBar" style="width: 100%"></div>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-label">
                        <span>☀️ نور خورشید</span>
                        <span id="sunPercent">100%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-fill progress-sun" id="sunBar" style="width: 100%"></div>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-label">
                        <span>🌱 مواد مغذی</span>
                        <span id="nutrientsPercent">100%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-fill progress-nutrients" id="nutrientsBar" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Garden Grid -->
        <div class="garden-container">
            <h2 class="section-title">🏡 باغ شما</h2>
            
            <!-- Plant Selector -->
            <div class="plant-selector">
                <div class="plant-option selected" data-plant="🌻" data-name="آفتابگردان" data-time="5">
                    <div class="plant-emoji">🌻</div>
                    <div class="plant-name">آفتابگردان</div>
                </div>
                <div class="plant-option" data-plant="🌹" data-name="گل سرخ" data-time="8">
                    <div class="plant-emoji">🌹</div>
                    <div class="plant-name">گل سرخ</div>
                </div>
                <div class="plant-option" data-plant="🌷" data-name="لاله" data-time="6">
                    <div class="plant-emoji">🌷</div>
                    <div class="plant-name">لاله</div>
                </div>
                <div class="plant-option" data-plant="🌺" data-name="گل ختمی" data-time="7">
                    <div class="plant-emoji">🌺</div>
                    <div class="plant-name">گل ختمی</div>
                </div>
                <div class="plant-option" data-plant="🌸" data-name="شکوفه" data-time="4">
                    <div class="plant-emoji">🌸</div>
                    <div class="plant-name">شکوفه</div>
                </div>
                <div class="plant-option" data-plant="🍅" data-name="گوجه" data-time="10">
                    <div class="plant-emoji">🍅</div>
                    <div class="plant-name">گوجه</div>
                </div>
                <div class="plant-option" data-plant="🥕" data-name="هویج" data-time="9">
                    <div class="plant-emoji">🥕</div>
                    <div class="plant-name">هویج</div>
                </div>
                <div class="plant-option" data-plant="🌽" data-name="ذرت" data-time="12">
                    <div class="plant-emoji">🌽</div>
                    <div class="plant-name">ذرت</div>
                </div>
            </div>

            <!-- Control Buttons -->
            <div class="controls">
                <button class="btn btn-plant" onclick="togglePlantMode()">🌱 کاشت</button>
                <button class="btn btn-water" onclick="waterAllPlants()">💧 آبیاری همه</button>
                <button class="btn btn-fertilize" onclick="fertilizeAll()">🌿 کود دهی</button>
                <button class="btn btn-harvest" onclick="harvestAll()">🏆 برداشت همه</button>
                <button class="btn btn-clear" onclick="clearGarden()">🗑️ پاک کردن</button>
            </div>

            <!-- Garden Grid -->
            <div class="garden-grid" id="gardenGrid"></div>
        </div>

        <!-- Inventory -->
        <div class="inventory">
            <h2 class="section-title">📦 انبار</h2>
            <div class="inventory-grid" id="inventoryGrid">
                <div class="inventory-item">
                    <div class="inventory-item-icon">🌻</div>
                    <div class="inventory-item-count" id="inv-🌻">0</div>
                </div>
                <div class="inventory-item">
                    <div class="inventory-item-icon">🌹</div>
                    <div class="inventory-item-count" id="inv-🌹">0</div>
                </div>
                <div class="inventory-item">
                    <div class="inventory-item-icon">🌷</div>
                    <div class="inventory-item-count" id="inv-🌷">0</div>
                </div>
                <div class="inventory-item">
                    <div class="inventory-item-icon">🌺</div>
                    <div class="inventory-item-count" id="inv-🌺">0</div>
                </div>
                <div class="inventory-item">
                    <div class="inventory-item-icon">🌸</div>
                    <div class="inventory-item-count" id="inv-🌸">0</div>
                </div>
                <div class="inventory-item">
                    <div class="inventory-item-icon">🍅</div>
                    <div class="inventory-item-count" id="inv-🍅">0</div>
                </div>
                <div class="inventory-item">
                    <div class="inventory-item-icon">🥕</div>
                    <div class="inventory-item-count" id="inv-🥕">0</div>
                </div>
                <div class="inventory-item">
                    <div class="inventory-item-icon">🌽</div>
                    <div class="inventory-item-count" id="inv-🌽">0</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Game State
        let gameState = {
            coins: 100,
            score: 0,
            harvested: 0,
            water: 100,
            sun: 100,
            nutrients: 100,
            season: 0, // 0: spring, 1: summer, 2: autumn, 3: winter
            temperature: 25,
            humidity: 60,
            inventory: {},
            plants: {},
            selectedPlant: { emoji: '🌻', name: 'آفتابگردان', time: 5 },
            plantMode: false
        };

        const seasons = [
            { name: 'بهار', class: 'spring', icon: '🌸', temp: 20 },
            { name: 'تابستان', class: 'summer', icon: '☀️', temp: 35 },
            { name: 'پاییز', class: 'autumn', icon: '🍂', temp: 18 },
            { name: 'زمستان', class: 'winter', icon: '❄️', temp: 5 }
        ];

        // Initialize Garden Grid
        function initGarden() {
            const grid = document.getElementById('gardenGrid');
            for (let i = 0; i < 64; i++) {
                const plot = document.createElement('div');
                plot.className = 'garden-plot';
                plot.dataset.index = i;
                plot.onclick = () => handlePlotClick(i);
                grid.appendChild(plot);
            }
        }

        // Handle Plot Click
        function handlePlotClick(index) {
            if (gameState.plantMode && !gameState.plants[index]) {
                plantSeed(index);
            } else if (gameState.plants[index] && gameState.plants[index].growth >= 100) {
                harvestPlant(index);
            }
        }

        // Plant Seed
        function plantSeed(index) {
            if (gameState.coins < 10) {
                showNotification('❌ سکه کافی ندارید!');
                return;
            }

            gameState.coins -= 10;
            gameState.plants[index] = {
                type: gameState.selectedPlant.emoji,
                growth: 0,
                growthTime: gameState.selectedPlant.time,
                planted: Date.now(),
                watered: true,
                fertilized: false
            };

            const plot = document.querySelector(\`[data-index="\${index}"]\`);
            plot.classList.add('planted');
            
            const plant = document.createElement('div');
            plant.className = 'plant';
            plant.textContent = '🌱';
            plot.appendChild(plant);

            const growthBar = document.createElement('div');
            growthBar.className = 'growth-bar';
            growthBar.innerHTML = '<div class="growth-fill" style="width: 0%"></div>';
            plot.appendChild(growthBar);

            updateStats();
            showNotification(\`✅ \${gameState.selectedPlant.name} کاشته شد!\`);
        }

        // Grow Plants
        setInterval(() => {
            Object.keys(gameState.plants).forEach(index => {
                const plant = gameState.plants[index];
                if (plant.growth < 100) {
                    let growthRate = 1;
                    
                    // Growth modifiers
                    if (gameState.water > 50) growthRate += 0.5;
                    if (gameState.sun > 50) growthRate += 0.5;
                    if (gameState.nutrients > 50) growthRate += 0.5;
                    if (plant.fertilized) growthRate += 1;
                    
                    plant.growth += growthRate;
                    if (plant.growth > 100) plant.growth = 100;

                    // Update visual
                    const plot = document.querySelector(\`[data-index="\${index}"]\`);
                    const plantEl = plot.querySelector('.plant');
                    const growthFill = plot.querySelector('.growth-fill');

                    if (plant.growth >= 100) {
                        plantEl.textContent = plant.type;
                        plantEl.style.animation = 'none';
                        setTimeout(() => {
                            plantEl.style.animation = 'growPlant 0.5s ease';
                        }, 10);
                    } else if (plant.growth >= 60) {
                        plantEl.textContent = '🌿';
                    } else if (plant.growth >= 30) {
                        plantEl.textContent = '🌱';
                    }

                    growthFill.style.width = plant.growth + '%';
                }
            });

            // Decrease resources
            gameState.water = Math.max(0, gameState.water - 0.1);
            gameState.sun = Math.max(0, gameState.sun - 0.05);
            gameState.nutrients = Math.max(0, gameState.nutrients - 0.08);

            updateResourceBars();
        }, 1000);

        // Harvest Plant
        function harvestPlant(index) {
            const plant = gameState.plants[index];
            if (!plant || plant.growth < 100) return;

            // Add to inventory
            if (!gameState.inventory[plant.type]) {
                gameState.inventory[plant.type] = 0;
            }
            gameState.inventory[plant.type]++;

            // Rewards
            gameState.coins += 50;
            gameState.score += 100;
            gameState.harvested++;

            // Clear plot
            const plot = document.querySelector(\`[data-index="\${index}"]\`);
            plot.classList.remove('planted');
            plot.innerHTML = '';
            delete gameState.plants[index];

            updateStats();
            updateInventory();
            showNotification(\`🎉 \${plant.type} برداشت شد! +50 سکه\`);
        }

        // Water All Plants
        function waterAllPlants() {
            if (gameState.coins < 20) {
                showNotification('❌ سکه کافی ندارید!');
                return;
            }

            gameState.coins -= 20;
            gameState.water = 100;

            Object.keys(gameState.plants).forEach(index => {
                const plot = document.querySelector(\`[data-index="\${index}"]\`);
                const water = document.createElement('div');
                water.className = 'water-effect';
                water.textContent = '💧';
                plot.appendChild(water);
                setTimeout(() => water.remove(), 1000);
            });

            updateStats();
            updateResourceBars();
            showNotification('💧 همه گیاهان آبیاری شدند!');
        }

        // Fertilize All
        function fertilizeAll() {
            if (gameState.coins < 30) {
                showNotification('❌ سکه کافی ندارید!');
                return;
            }

            gameState.coins -= 30;
            gameState.nutrients = 100;

            Object.keys(gameState.plants).forEach(index => {
                gameState.plants[index].fertilized = true;
            });

            updateStats();
            updateResourceBars();
            showNotification('🌿 کود دهی انجام شد!');
        }

        // Harvest All
        function harvestAll() {
            let harvested = 0;
            Object.keys(gameState.plants).forEach(index => {
                if (gameState.plants[index].growth >= 100) {
                    harvestPlant(index);
                    harvested++;
                }
            });

            if (harvested === 0) {
                showNotification('❌ هیچ گیاهی آماده برداشت نیست!');
            }
        }

        // Clear Garden
        function clearGarden() {
            if (!confirm('آیا مطمئن هستید که می‌خواهید باغ را پاک کنید؟')) return;

            gameState.plants = {};
            document.querySelectorAll('.garden-plot').forEach(plot => {
                plot.classList.remove('planted');
                plot.innerHTML = '';
            });

            updateStats();
            showNotification('🗑️ باغ پاک شد!');
        }

        // Toggle Plant Mode
        function togglePlantMode() {
            gameState.plantMode = !gameState.plantMode;
            document.querySelector('.btn-plant').style.opacity = gameState.plantMode ? '0.7' : '1';
            showNotification(gameState.plantMode ? '✅ حالت کاشت فعال' : '❌ حالت کاشت غیرفعال');
        }

        // Select Plant
        document.querySelectorAll('.plant-option').forEach(option => {
            option.onclick = function() {
                document.querySelectorAll('.plant-option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                gameState.selectedPlant = {
                    emoji: this.dataset.plant,
                    name: this.dataset.name,
                    time: parseInt(this.dataset.time)
                };
                showNotification(\`🌱 \${this.dataset.name} انتخاب شد\`);
            };
        });

        // Update Stats
        function updateStats() {
            document.getElementById('activePlants').textContent = Object.keys(gameState.plants).length;
            document.getElementById('harvestedCount').textContent = gameState.harvested;
            document.getElementById('coins').textContent = gameState.coins;
            document.getElementById('score').textContent = gameState.score;
        }

        // Update Resource Bars
        function updateResourceBars() {
            document.getElementById('waterBar').style.width = gameState.water + '%';
            document.getElementById('waterPercent').textContent = Math.round(gameState.water) + '%';
            
            document.getElementById('sunBar').style.width = gameState.sun + '%';
            document.getElementById('sunPercent').textContent = Math.round(gameState.sun) + '%';
            
            document.getElementById('nutrientsBar').style.width = gameState.nutrients + '%';
            document.getElementById('nutrientsPercent').textContent = Math.round(gameState.nutrients) + '%';
        }

        // Update Inventory
        function updateInventory() {
            Object.keys(gameState.inventory).forEach(plant => {
                const element = document.getElementById(\`inv-\${plant}\`);
                if (element) {
                    element.textContent = gameState.inventory[plant];
                }
            });
        }

        // Show Notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Weather System
        setInterval(() => {
            // Random weather changes
            gameState.temperature = seasons[gameState.season].temp + Math.floor(Math.random() * 10 - 5);
            gameState.humidity = 40 + Math.floor(Math.random() * 40);

            document.getElementById('temperature').textContent = gameState.temperature + '°C';
            document.getElementById('humidity').textContent = gameState.humidity + '%';

            // Natural sun restoration
            gameState.sun = Math.min(100, gameState.sun + 0.2);
            updateResourceBars();
        }, 5000);

        // Season Change
        setInterval(() => {
            gameState.season = (gameState.season + 1) % 4;
            const season = seasons[gameState.season];
            
            document.getElementById('weatherIcon').textContent = season.icon;
            document.getElementById('seasonBadge').textContent = season.name;
            document.getElementById('seasonBadge').className = \`season-badge \${season.class}\`;
            
            showNotification(\`🌍 فصل \${season.name} شروع شد!\`);
        }, 60000); // Every minute

        // Initialize
        initGarden();
        updateStats();
        updateInventory();
    <\/script>

`,className:"w-html-embed"})}),P=a=>{const{origin:e,pathname:o,search:n}=new URL(a);return`${e}${o}${n}`},C=d.memo(({pageKey:a,system:e})=>t.jsx(S,{system:e},a),(a,e)=>a.pageKey===e.pageKey),k=({data:a})=>{const{system:e,resources:o,url:n,pageMeta:r}=a,c=P(n),p=d.useMemo(()=>({imageLoader:s,assetBaseUrl:i,resources:o,breakpoints:x,onError:console.error}),[o]);return t.jsxs(m.Provider,{value:p,children:[t.jsx(g.Provider,{value:n,children:t.jsx(C,{pageKey:c,system:e})}),t.jsx(v,{url:n,pageMeta:r,siteName:l,imageLoader:s,assetBaseUrl:i}),t.jsx(u,{children:r.title})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),B=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:l};return t.jsxs(t.Fragment,{children:[t.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),t.jsx("link",{rel:"icon",href:s({src:`${i}${y}`})}),b.map(e=>t.jsx("link",{rel:"preload",href:`${i}${e}`,as:"font",crossOrigin:"anonymous"},e)),w.map(e=>t.jsx("link",{rel:"preload",href:`${i}${e}`,as:"image"},e))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:B},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-14/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-14/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{A as configValuesSerialized};
