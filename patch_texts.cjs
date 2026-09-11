const fs = require('fs');

const filesToPatch = [
  'jaheshkala-app/src/components/AdminPanel.tsx',
  'jaheshkala-app/src/components/DigikalaHeader.tsx',
  'jaheshkala-app/src/components/DigikalaCategories.tsx',
  'jaheshkala-app/src/data/footerInfoData.ts',
  'jaheshkala-app/src/App.tsx'
];

filesToPatch.forEach(file => {
  let code = fs.readFileSync(file, 'utf-8');
  code = code.replace(/دسته‌بندی/g, 'صنف');
  code = code.replace(/دسته‌های/g, 'اصناف');
  code = code.replace(/دسته /g, 'صنف ');
  fs.writeFileSync(file, code, 'utf-8');
});
console.log('patched texts');
