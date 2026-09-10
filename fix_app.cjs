const fs = require('fs');
const fileApp = './jaheshkala-app/src/App.tsx';
let contentApp = fs.readFileSync(fileApp, 'utf8');

// Replace the product grid
const targetGrid = `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">`;
const replacementGrid = `<div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 scrollbar-none snap-x snap-mandatory">`;
contentApp = contentApp.replace(targetGrid, replacementGrid);

// Wrap the ProductCard in a shrink-0 container for mobile
const targetMap = `{filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onInstantBuy={handleInstantBuy}
                  onViewDetails={setDetailModalProduct}
                />
              ))}`;
const replacementMap = `{filteredProducts.map((product) => (
                <div key={product.id} className="w-[85vw] sm:w-auto shrink-0 snap-center sm:snap-align-none flex">
                  <div className="w-full">
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                      onInstantBuy={handleInstantBuy}
                      onViewDetails={setDetailModalProduct}
                    />
                  </div>
                </div>
              ))}`;
contentApp = contentApp.replace(targetMap, replacementMap);

fs.writeFileSync(fileApp, contentApp, 'utf8');
console.log('Done');
