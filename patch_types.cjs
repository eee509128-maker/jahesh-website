const fs = require('fs');
let code = fs.readFileSync('jaheshkala-app/src/types.ts', 'utf-8');
code = code.replace(
  /export interface BannerSlide \{/,
  "export interface BannerSlide {\n  imagePosition?: string;"
);
code = code.replace(
  /actionType: 'link' \| 'all' \| 'incredible' \| 'category';/,
  "actionType: 'link' | 'all' | 'incredible' | 'category' | 'package';"
);
fs.writeFileSync('jaheshkala-app/src/types.ts', code, 'utf-8');
console.log('patched types');
