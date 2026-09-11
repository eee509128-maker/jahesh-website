const fs = require('fs');
const file = './jaheshkala-app/src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetProducts = `<div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 scrollbar-none snap-x snap-mandatory">
              {filteredProducts.map((product) => (`;

const swipeHint = `{filteredProducts.length > 0 && (
            <div className="sm:hidden flex items-center justify-end mb-3 mr-2 animate-pulse">
              <span className="text-[11px] font-black text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/30">
                 برای مشاهده محصولات بیشتر به سمت چپ بکشید 👈
              </span>
            </div>
          )}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 scrollbar-none snap-x snap-mandatory">
              {filteredProducts.map((product) => (`;

content = content.replace(targetProducts, swipeHint);
fs.writeFileSync(file, content, 'utf8');
console.log('App.tsx patched');
