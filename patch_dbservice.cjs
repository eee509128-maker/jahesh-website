const fs = require('fs');
const path = require('path');
const dbServicePath = path.join(__dirname, 'jaheshkala-app', 'src', 'lib', 'dbService.ts');
let content = fs.readFileSync(dbServicePath, 'utf8');

// Add import
content = content.replace("import { INITIAL_PRODUCTS, INITIAL_BANNERS } from '../data/initialData';", "import { INITIAL_PRODUCTS, INITIAL_BANNERS } from '../data/initialData';\nimport { USER_RESTORED_PRODUCTS } from '../data/userProducts';");

// Replace fallback
content = content.replace(
  "const baseProducts = (authoritativeList && authoritativeList.length > 0)\n    ? authoritativeList\n    : INITIAL_PRODUCTS.map(cleanProductItem).filter((p): p is Product => p !== null);",
  "const baseProducts = (authoritativeList && authoritativeList.length > 0)\n    ? authoritativeList\n    : USER_RESTORED_PRODUCTS.map(cleanProductItem).filter((p): p is Product => p !== null);"
);

// Skip adding guild solutions because they are already inside USER_RESTORED_PRODUCTS!
content = content.replace(
  "  // 5. Ensure missing official guild solutions are present\n  for (const gp of GUILD_SOLUTIONS_PRODUCTS) {\n    if (gp && gp.id && !existingMap.has(gp.id)) {\n      existingMap.set(gp.id, gp);\n    }\n  }",
  "  // 5. Ensure missing official guild solutions are present\n  for (const gp of GUILD_SOLUTIONS_PRODUCTS) {\n    if (gp && gp.id && !existingMap.has(gp.id)) {\n      // Use USER_RESTORED_PRODUCTS instead of raw GUILD_SOLUTIONS if possible, otherwise gp\n      const restored = USER_RESTORED_PRODUCTS.find(x => x.id === gp.id);\n      existingMap.set(gp.id, restored || gp);\n    }\n  }"
);

fs.writeFileSync(dbServicePath, content);
console.log('Patched dbService.ts');
