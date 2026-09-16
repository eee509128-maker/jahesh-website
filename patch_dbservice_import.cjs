const fs = require('fs');
const path = require('path');
const dbServicePath = path.join(__dirname, 'jaheshkala-app', 'src', 'lib', 'dbService.ts');
let content = fs.readFileSync(dbServicePath, 'utf8');

content = content.replace("import { GUILD_SOLUTIONS_PRODUCTS } from '../data/guildProducts';\n", "");
content = content.replace("import { GUILD_SOLUTIONS_PRODUCTS } from '../data/guildProducts';", "");
content = content.replace("import { USER_RESTORED_PRODUCTS } from '../data/userProducts';\n", "");

fs.writeFileSync(dbServicePath, content);
console.log('Cleaned imports in dbService.ts');
