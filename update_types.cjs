const fs = require('fs');
const file = './jaheshkala-app/src/types.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "  image: string;",
  "  image: string;\n  imagePosition?: string; // e.g. 'center', 'top', 'bottom', 'left', 'right'"
);
fs.writeFileSync(file, content, 'utf8');
