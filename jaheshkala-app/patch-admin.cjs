const fs = require('fs');
let content = fs.readFileSync('src/components/AuthModal.tsx', 'utf-8');
content = content.replace(
  "if (cleanEmail === 'jahesh1395') {",
  "if (cleanEmail.toLowerCase() === 'jahesh1395@gmail.com') {"
);
fs.writeFileSync('src/components/AuthModal.tsx', content);
