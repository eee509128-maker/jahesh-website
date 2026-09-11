const fs = require('fs');
let content = fs.readFileSync('dbService.ts', 'utf-8');

// Fix saveProductToDb
const oldSave = `    // 1. Load current list from local cache / store
    let currentList: Product[] = [];
    try {
      const saved = localStorage.getItem('jahesh_products');
      currentList = saved ? JSON.parse(saved) : [];
    } catch {}`;
const newSave = `    // 1. Load current list from CLOUD to prevent stale overwrites
    let currentList: Product[] = [];
    try {
      currentList = await fetchProductsFromDb();
    } catch {}
    if (!currentList || currentList.length === 0) {
      try {
        const saved = localStorage.getItem('jahesh_products');
        currentList = saved ? JSON.parse(saved) : [];
      } catch {}
    }`;
content = content.replace(oldSave, newSave);

// Fix deleteProductFromDb
const oldDelete = `    // 1. Remove from local store
    let currentList: Product[] = [];
    try {
      const saved = localStorage.getItem('jahesh_products');
      currentList = saved ? JSON.parse(saved) : [];
    } catch {}`;
const newDelete = `    // 1. Remove from CLOUD list to prevent stale overwrites
    let currentList: Product[] = [];
    try {
      currentList = await fetchProductsFromDb();
    } catch {}
    if (!currentList || currentList.length === 0) {
      try {
        const saved = localStorage.getItem('jahesh_products');
        currentList = saved ? JSON.parse(saved) : [];
      } catch {}
    }`;
content = content.replace(oldDelete, newDelete);

fs.writeFileSync('dbService.ts', content, 'utf-8');
console.log('Fixed dbService.ts concurrency bugs');
