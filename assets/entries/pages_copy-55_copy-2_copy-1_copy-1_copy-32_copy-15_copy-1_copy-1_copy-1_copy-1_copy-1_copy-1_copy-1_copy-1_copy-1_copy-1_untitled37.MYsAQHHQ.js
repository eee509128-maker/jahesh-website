import{j as e,r as d,a as o,i as r,R as m,b as u,P as g,c as v,d as f}from"../chunks/chunk-_4i898Gl.js";import{U as x}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],y="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",h=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],k=["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg"],w=i=>e.jsx("body",{className:"w-element",children:e.jsx("div",{className:"w-element cl99im cddbznk cl4bapb c1dfajq9 c1dz2h89",children:e.jsx(x,{clientOnly:!0,executeScriptOnCanvas:!0,code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>آشپز هوشمند | دستور پخت از مواد موجود</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&amp;family=Noto+Kufi+Arabic:wght@300;400;700&amp;display=swap" rel="stylesheet">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #faf7f2;
  --surface: #fff;
  --dark: #1a1208;
  --orange: #e8521a;
  --green: #2d6a4f;
  --yellow: #f4c430;
  --red: #c1392b;
  --border: #e8e0d5;
  --muted: #8a7d6b;
}

body {
  font-family: 'Noto Kufi Arabic', sans-serif;
  background: var(--bg);
  color: var(--dark);
  min-height: 100vh;
}

/* Top stripe */
.top-stripe {
  height: 6px;
  background: repeating-linear-gradient(
    90deg,
    var(--orange) 0px, var(--orange) 40px,
    var(--yellow) 40px, var(--yellow) 80px,
    var(--green) 80px, var(--green) 120px,
    var(--red) 120px, var(--red) 160px
  );
}

.container { max-width: 860px; margin: 0 auto; padding: 50px 25px; }

/* Header */
header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
}
.header-text {}
.header-eyebrow {
  font-family: 'Syne', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 8px;
}
h1 {
  font-family: 'Syne', sans-serif;
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 0.95;
  color: var(--dark);
}
h1 span { color: var(--orange); }
.header-desc {
  margin-top: 12px;
  font-size: 0.88rem;
  color: var(--muted);
  max-width: 350px;
  line-height: 1.7;
}
.header-model {
  font-size: 0.65rem;
  color: var(--muted);
  margin-top: 5px;
}
.header-art {
  width: 130px;
  height: 130px;
  background: var(--orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  flex-shrink: 0;
  box-shadow: 6px 6px 0 var(--dark);
}

/* Cards */
.card {
  background: var(--surface);
  border: 2px solid var(--dark);
  border-radius: 16px;
  padding: 28px;
  margin-bottom: 20px;
  box-shadow: 4px 4px 0 var(--dark);
}

.card-title {
  font-family: 'Syne', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* API row */
.api-row {
  display: flex;
  gap: 10px;
  align-items: center;
}
.api-label {
  font-size: 0.8rem;
  color: var(--muted);
  white-space: nowrap;
}
input[type="password"] {
  flex: 1;
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  font-family: monospace;
  font-size: 0.88rem;
  outline: none;
  transition: border 0.3s;
  direction: ltr;
}
input[type="password"]:focus { border-color: var(--orange); }

/* Ingredients */
.ingredient-input-row {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.ingredient-input {
  flex: 1;
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  font-family: 'Noto Kufi Arabic', sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: border 0.3s;
  background: var(--bg);
}
.ingredient-input:focus { border-color: var(--orange); }
.add-btn {
  padding: 10px 20px;
  background: var(--dark);
  color: #fff;
  border: 2px solid var(--dark);
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.add-btn:hover { background: var(--orange); border-color: var(--orange); }

.ingredients-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 40px;
}
.ingredient-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: var(--bg);
  border: 2px solid var(--dark);
  border-radius: 20px;
  font-size: 0.82rem;
  animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes popIn { from { transform: scale(0); } to { transform: scale(1); } }
.ingredient-tag .remove {
  cursor: pointer;
  color: var(--red);
  font-size: 1rem;
  line-height: 1;
}
.ingredient-tag .remove:hover { transform: scale(1.3); }

/* Quick add suggestions */
.quick-add {
  margin-top: 12px;
}
.quick-label { font-size: 0.75rem; color: var(--muted); margin-bottom: 8px; }
.quick-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.quick-chip {
  padding: 4px 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  background: transparent;
  font-family: inherit;
  color: var(--muted);
}
.quick-chip:hover { border-color: var(--orange); color: var(--orange); background: rgba(232,82,26,0.05); }

/* Options */
.options-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.opt-field label {
  display: block;
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 6px;
  font-weight: 700;
}
select {
  width: 100%;
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 9px 12px;
  font-family: 'Noto Kufi Arabic', sans-serif;
  font-size: 0.85rem;
  outline: none;
  background: var(--bg);
  cursor: pointer;
  appearance: none;
  transition: border 0.3s;
}
select:focus { border-color: var(--orange); }

/* Cook button */
.cook-btn {
  width: 100%;
  padding: 18px;
  background: var(--orange);
  color: #fff;
  border: 2px solid var(--dark);
  border-radius: 12px;
  font-family: 'Syne', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 4px 4px 0 var(--dark);
  transition: all 0.2s;
  letter-spacing: 1px;
}
.cook-btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--dark); }
.cook-btn:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--dark); }
.cook-btn:disabled { background: var(--border); color: var(--muted); cursor: not-allowed; box-shadow: 2px 2px 0 var(--border); transform: none; }

/* Loading */
.loading-area {
  display: none;
  text-align: center;
  padding: 40px;
}
.loading-area.active { display: block; }
.pot-anim { font-size: 3rem; animation: boil 0.6s ease-in-out infinite alternate; display: block; }
@keyframes boil { from { transform: translateY(0) rotate(-5deg); } to { transform: translateY(-8px) rotate(5deg); } }
.loading-txt { font-size: 0.9rem; color: var(--muted); margin-top: 12px; }

/* Recipe result */
.recipe-result { display: none; }
.recipe-result.active { display: block; }

.recipe-header-card {
  background: var(--dark);
  color: #fff;
  border-radius: 14px;
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
}
.recipe-header-card::before {
  content: '🍳';
  position: absolute;
  right: -10px;
  top: -10px;
  font-size: 8rem;
  opacity: 0.08;
  transform: rotate(15deg);
}
.recipe-name {
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
}
.recipe-desc { font-size: 0.88rem; color: #a09888; line-height: 1.7; margin-bottom: 20px; }
.recipe-stats {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 12px 18px;
  min-width: 80px;
}
.stat-icon { font-size: 1.3rem; margin-bottom: 4px; }
.stat-val { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem; }
.stat-lbl { font-size: 0.65rem; color: #888; margin-top: 2px; }

.two-col { display: grid; grid-template-columns: 1fr 1.5fr; gap: 16px; margin-bottom: 16px; }

/* Ingredients list */
.ingr-list { list-style: none; }
.ingr-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.88rem;
  animation: fadeIn 0.3s ease both;
}
.ingr-item:last-child { border-bottom: none; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.ingr-dot {
  width: 8px;
  height: 8px;
  background: var(--orange);
  border-radius: 50%;
  flex-shrink: 0;
}

/* Steps */
.steps-list { list-style: none; }
.step-item {
  display: flex;
  gap: 14px;
  margin-bottom: 16px;
  animation: fadeIn 0.4s ease both;
}
.step-num {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  color: var(--border);
  flex-shrink: 0;
  line-height: 1;
  width: 35px;
}
.step-text { font-size: 0.9rem; line-height: 1.8; padding-top: 3px; }

.tips-card {
  background: rgba(232,82,26,0.05);
  border: 2px solid var(--orange);
  border-radius: 12px;
  padding: 20px;
}
.tip-item {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 0.85rem;
  line-height: 1.6;
}
.tip-item::before { content: '✦'; color: var(--orange); flex-shrink: 0; }
.tip-item:last-child { margin-bottom: 0; }

.save-btn {
  width: 100%;
  padding: 14px;
  background: transparent;
  border: 2px solid var(--dark);
  border-radius: 10px;
  font-family: 'Syne', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 3px 3px 0 var(--dark);
  margin-top: 5px;
}
.save-btn:hover { transform: translate(-1px,-1px); box-shadow: 4px 4px 0 var(--dark); }
</style>



<div class="top-stripe"></div>
<div class="container">

  <header>
    <div class="header-text">
      <div class="header-eyebrow">✦ هوش مصنوعی آشپزی</div>
      <h1>آشپز<br><span>هوشمند</span></h1>
      <p class="header-desc">مواد اولیه موجود خود را وارد کنید، بهترین دستور پخت را دریافت کنید</p>
      <div class="header-model">mixtral-8x7b-32768 | Groq API</div>
    </div>
    <div class="header-art">👨‍🍳</div>
  </header>

  <!-- API -->
  <div class="card">
    <div class="api-row">
      <span class="api-label">کلید API:</span>
      <input type="password" id="apiKey" placeholder="gsk_...">
    </div>
  </div>

  <!-- Ingredients -->
  <div class="card">
    <div class="card-title">🥦 مواد موجود در آشپزخانه</div>
    <div class="ingredient-input-row">
      <input type="text" class="ingredient-input" id="ingredientInput" placeholder="نام ماده غذایی را بنویسید..." onkeypress="if(event.key==='Enter')addIngredient()">
      <button class="add-btn" onclick="addIngredient()">+ اضافه کن</button>
    </div>
    <div class="ingredients-list" id="ingredientsList">
      <span style="font-size:0.8rem;color:#c0b5a8;align-self:center;">مواد را اضافه کنید...</span>
    </div>
    <div class="quick-add">
      <div class="quick-label">پیشنهاد سریع:</div>
      <div class="quick-chips">
        <button class="quick-chip" onclick="quickAdd('تخم مرغ')">🥚 تخم مرغ</button>
        <button class="quick-chip" onclick="quickAdd('برنج')">🍚 برنج</button>
        <button class="quick-chip" onclick="quickAdd('مرغ')">🍗 مرغ</button>
        <button class="quick-chip" onclick="quickAdd('پیاز')">🧅 پیاز</button>
        <button class="quick-chip" onclick="quickAdd('گوجه')">🍅 گوجه</button>
        <button class="quick-chip" onclick="quickAdd('سیر')">🧄 سیر</button>
        <button class="quick-chip" onclick="quickAdd('ماکارونی')">🍝 ماکارونی</button>
        <button class="quick-chip" onclick="quickAdd('پنیر')">🧀 پنیر</button>
        <button class="quick-chip" onclick="quickAdd('سیب‌زمینی')">🥔 سیب‌زمینی</button>
        <button class="quick-chip" onclick="quickAdd('فلفل دلمه')">🫑 فلفل</button>
      </div>
    </div>
  </div>

  <!-- Options -->
  <div class="card">
    <div class="card-title">⚙️ تنظیمات</div>
    <div class="options-grid">
      <div class="opt-field">
        <label>وعده غذایی</label>
        <select id="mealType">
          <option value="any">هر وعده</option>
          <option value="breakfast">صبحانه</option>
          <option value="lunch">ناهار</option>
          <option value="dinner">شام</option>
          <option value="snack">میان‌وعده</option>
          <option value="dessert">دسر</option>
        </select>
      </div>
      <div class="opt-field">
        <label>سطح سختی</label>
        <select id="difficulty">
          <option value="easy">آسان</option>
          <option value="medium" selected="">متوسط</option>
          <option value="hard">پیشرفته</option>
        </select>
      </div>
      <div class="opt-field">
        <label>تعداد نفر</label>
        <select id="servings">
          <option value="1">۱ نفر</option>
          <option value="2" selected="">۲ نفر</option>
          <option value="4">۴ نفر</option>
          <option value="6">۶ نفر</option>
        </select>
      </div>
      <div class="opt-field">
        <label>نوع آشپزی</label>
        <select id="cuisine">
          <option value="Iranian">ایرانی</option>
          <option value="any">هر نوع</option>
          <option value="Italian">ایتالیایی</option>
          <option value="Asian">آسیایی</option>
          <option value="Mediterranean">مدیترانه‌ای</option>
        </select>
      </div>
      <div class="opt-field">
        <label>زمان پخت</label>
        <select id="timeLimit">
          <option value="30">تا ۳۰ دقیقه</option>
          <option value="60" selected="">تا ۱ ساعت</option>
          <option value="120">تا ۲ ساعت</option>
          <option value="any">هر مدت</option>
        </select>
      </div>
      <div class="opt-field">
        <label>رژیم غذایی</label>
        <select id="diet">
          <option value="none">بدون محدودیت</option>
          <option value="vegetarian">گیاهی</option>
          <option value="vegan">وگان</option>
          <option value="low-carb">کم کربوهیدرات</option>
          <option value="gluten-free">بدون گلوتن</option>
        </select>
      </div>
    </div>
  </div>

  <button class="cook-btn" id="cookBtn" onclick="cook()">👨‍🍳 دستور پخت بده!</button>

  <div class="loading-area" id="loadingArea">
    <span class="pot-anim">🍲</span>
    <div class="loading-txt">در حال طراحی بهترین دستور پخت برای شما...</div>
  </div>

  <div class="recipe-result" id="recipeResult">
    <div class="recipe-header-card" id="recipeHeader">
      <div class="recipe-name" id="recipeName">-</div>
      <div class="recipe-desc" id="recipeDesc">-</div>
      <div class="recipe-stats" id="recipeStats"></div>
    </div>

    <div class="two-col">
      <div class="card" style="margin-bottom:0">
        <div class="card-title">🛒 مواد لازم</div>
        <ul class="ingr-list" id="ingrList"></ul>
      </div>
      <div class="card" style="margin-bottom:0">
        <div class="card-title">💡 نکات مهم</div>
        <div id="tipsList"></div>
      </div>
    </div>
    <div style="height:16px"></div>
    <div class="card">
      <div class="card-title">📋 مراحل پخت</div>
      <ol class="steps-list" id="stepsList"></ol>
    </div>

    <button class="save-btn" onclick="copyRecipe()">📄 کپی دستور پخت</button>
  </div>

</div>

<script>
let ingredients = [];

function addIngredient() {
  const input = document.getElementById('ingredientInput');
  const val = input.value.trim();
  if (!val) return;
  if (ingredients.includes(val)) { input.value = ''; return; }
  ingredients.push(val);
  renderIngredients();
  input.value = '';
  input.focus();
}

function quickAdd(item) {
  if (!ingredients.includes(item)) {
    ingredients.push(item);
    renderIngredients();
  }
}

function removeIngredient(i) {
  ingredients.splice(i, 1);
  renderIngredients();
}

function renderIngredients() {
  const list = document.getElementById('ingredientsList');
  if (ingredients.length === 0) {
    list.innerHTML = '<span style="font-size:0.8rem;color:#c0b5a8;align-self:center;">مواد را اضافه کنید...</span>';
    return;
  }
  list.innerHTML = ingredients.map((ing, i) => \`
    <div class="ingredient-tag">
      <span>\${ing}</span>
      <span class="remove" onclick="removeIngredient(\${i})">×</span>
    </div>
  \`).join('');
}

async function cook() {
  const apiKey = document.getElementById('apiKey').value.trim();
  if (!apiKey) return alert('API Key را وارد کنید!');
  if (ingredients.length < 2) return alert('حداقل ۲ ماده اولیه اضافه کنید!');

  const mealType = document.getElementById('mealType').value;
  const difficulty = document.getElementById('difficulty').value;
  const servings = document.getElementById('servings').value;
  const cuisine = document.getElementById('cuisine').value;
  const timeLimit = document.getElementById('timeLimit').value;
  const diet = document.getElementById('diet').value;

  const btn = document.getElementById('cookBtn');
  btn.disabled = true;
  document.getElementById('loadingArea').classList.add('active');
  document.getElementById('recipeResult').classList.remove('active');

  const prompt = \`You are an expert chef. Create a recipe using these available ingredients: \${ingredients.join(', ')}.

Requirements:
- Meal type: \${mealType}
- Difficulty: \${difficulty}
- Servings: \${servings} people
- Cuisine style: \${cuisine}
- Max cooking time: \${timeLimit} minutes
- Dietary restriction: \${diet}

Return ONLY valid JSON, no extra text:
{
  "name": "recipe name in Persian",
  "description": "appetizing 2-sentence description in Persian",
  "prep_time": "X دقیقه",
  "cook_time": "X دقیقه", 
  "difficulty": "آسان/متوسط/دشوار",
  "calories": "approx per serving",
  "ingredients": ["ingredient with amount in Persian", ...],
  "steps": ["step description in Persian", ...],
  "tips": ["cooking tip in Persian", ...]
}\`;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${apiKey}\`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      })
    });
    const data = await res.json();
    const content = data.choices[0].message.content;
    const match = content.match(/\\{[\\s\\S]*\\}/);
    const r = JSON.parse(match[0]);

    document.getElementById('loadingArea').classList.remove('active');
    document.getElementById('recipeResult').classList.add('active');

    document.getElementById('recipeName').textContent = r.name || 'دستور پخت';
    document.getElementById('recipeDesc').textContent = r.description || '';

    const stats = [
      { icon:'⏱️', val: r.prep_time || '-', lbl:'آماده‌سازی' },
      { icon:'🔥', val: r.cook_time || '-', lbl:'پخت' },
      { icon:'📊', val: r.difficulty || '-', lbl:'سختی' },
      { icon:'🍽️', val: servings + ' نفر', lbl:'سرویس' },
      { icon:'⚡', val: r.calories || '-', lbl:'کالری' }
    ];
    document.getElementById('recipeStats').innerHTML = stats.map(s => \`
      <div class="stat">
        <div class="stat-icon">\${s.icon}</div>
        <div class="stat-val">\${s.val}</div>
        <div class="stat-lbl">\${s.lbl}</div>
      </div>
    \`).join('');

    document.getElementById('ingrList').innerHTML = (r.ingredients || []).map((ing, i) => \`
      <li class="ingr-item" style="animation-delay:\${i*0.06}s">
        <div class="ingr-dot"></div>\${ing}
      </li>
    \`).join('');

    document.getElementById('stepsList').innerHTML = (r.steps || []).map((step, i) => \`
      <li class="step-item" style="animation-delay:\${i*0.08}s">
        <div class="step-num">\${String(i+1).padStart(2,'0')}</div>
        <div class="step-text">\${step}</div>
      </li>
    \`).join('');

    document.getElementById('tipsList').innerHTML = (r.tips || []).map(tip => \`
      <div class="tip-item">\${tip}</div>
    \`).join('');

    document.getElementById('recipeResult').scrollIntoView({ behavior:'smooth' });
  } catch(e) {
    document.getElementById('loadingArea').classList.remove('active');
    alert('خطا: ' + e.message);
  } finally {
    btn.disabled = false;
  }
}

function copyRecipe() {
  const name = document.getElementById('recipeName').textContent;
  const desc = document.getElementById('recipeDesc').textContent;
  const ingrs = [...document.querySelectorAll('.ingr-item')].map(el => '• ' + el.textContent.trim()).join('\\n');
  const steps = [...document.querySelectorAll('.step-item')].map((el, i) => \`\${i+1}. \${el.querySelector('.step-text').textContent}\`).join('\\n');
  navigator.clipboard.writeText(\`\${name}\\n\\n\${desc}\\n\\nمواد لازم:\\n\${ingrs}\\n\\nمراحل پخت:\\n\${steps}\`);
  document.querySelector('.save-btn').textContent = '✅ کپی شد!';
  setTimeout(() => document.querySelector('.save-btn').textContent = '📄 کپی دستور پخت', 2000);
}
<\/script>


`,className:"w-html-embed"})})}),z=i=>{const{origin:t,pathname:a,search:n}=new URL(i);return`${t}${a}${n}`},I=d.memo(({pageKey:i,system:t})=>e.jsx(w,{system:t},i),(i,t)=>i.pageKey===t.pageKey),S=({data:i})=>{const{system:t,resources:a,url:n,pageMeta:s}=i,p=z(n),c=d.useMemo(()=>({imageLoader:r,assetBaseUrl:o,resources:a,breakpoints:b,onError:console.error}),[a]);return e.jsxs(m.Provider,{value:c,children:[e.jsx(u.Provider,{value:n,children:e.jsx(I,{pageKey:p,system:t})}),e.jsx(g,{url:n,pageMeta:s,siteName:l,imageLoader:r,assetBaseUrl:o}),e.jsx(v,{children:s.title})]})},q=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),A=({})=>{const i={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${o}${y}`})}),h.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),k.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:A},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-55/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-55/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{T as configValuesSerialized};
