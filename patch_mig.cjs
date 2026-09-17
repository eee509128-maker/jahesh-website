const fs = require('fs');
const path = require('path');
const appPath = path.join(__dirname, 'jaheshkala-app', 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

content = content.replace(/jahesh_real_products_v3/g, 'jahesh_real_products_v4');
fs.writeFileSync(appPath, content);
console.log('Updated migration key to jahesh_real_products_v4');
