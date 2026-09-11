const fs = require('fs');
let code = fs.readFileSync('jaheshkala-app/src/components/AdminPanel.tsx', 'utf-8');

code = code.replace(
  `import { INITIAL_BANNERS } from '../data/initialData';`,
  `import { INITIAL_BANNERS } from '../data/initialData';\nimport { IRANIAN_GUILDS } from '../data/guilds';`
);

const oldCategoriesCode = `  const existingCategories = Array.from(
    new Set([
      'کالای دیجیتال',
      'موبایل و تبلت',
      'لپ‌تاپ و کامپیوتر',
      'پوشاک و مد',
      'لوازم خانگی و آشپزخانه',
      'زیبایی و سلامت',
      'کتاب و فرهنگ',
      'خدمات و نرم‌افزار',
      ...products.map((p) => p.category).filter(Boolean),
    ])
  );`;

const newCategoriesCode = `  const existingCategories = Array.from(
    new Set([
      ...IRANIAN_GUILDS,
      ...products.map((p) => p.category).filter(Boolean),
    ])
  );`;

code = code.replace(oldCategoriesCode, newCategoriesCode);
fs.writeFileSync('jaheshkala-app/src/components/AdminPanel.tsx', code, 'utf-8');
console.log('patched AdminPanel');
