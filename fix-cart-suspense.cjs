const fs = require('fs');

let appFile = fs.readFileSync('jaheshkala-app/src/App.tsx', 'utf8');

appFile = appFile.replace(
  /coupons=\{coupons\}\n\s*\/>/,
  `coupons={coupons}
      /></Suspense>`
);

fs.writeFileSync('jaheshkala-app/src/App.tsx', appFile);
