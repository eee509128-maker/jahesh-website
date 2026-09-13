const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf-8');

content = content.replace("features: newFeatures.split('\n').map((s) => s.trim()).filter(Boolean),", "features: newFeatures.split('\\n').map((s) => s.trim()).filter(Boolean),");
content = content.replace("setNewFeatures(prod.features.join('\n'));", "setNewFeatures(prod.features.join('\\n'));");

fs.writeFileSync('src/components/AdminPanel.tsx', content);
