const fs = require('fs');
const file = './jaheshkala-app/src/components/DigikalaIncredibleOffer.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetPagination = `<span className="text-[10px] sm:text-[11px] text-slate-300 font-mono">
                {currentIndex + 1} / {incredibleProducts.length}
              </span>`;

const newPagination = `<span className="text-[10px] sm:text-[11px] text-slate-300 font-mono whitespace-nowrap" dir="ltr">
                {currentIndex + 1} / {incredibleProducts.length}
              </span>`;

content = content.replace(targetPagination, newPagination);
fs.writeFileSync(file, content, 'utf8');
console.log('Incredible patched');
