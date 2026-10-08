const fs = require('fs');
const path = require('path');
const dbServicePath = path.join(__dirname, 'jaheshkala-app', 'src', 'lib', 'dbService.ts');
let content = fs.readFileSync(dbServicePath, 'utf8');

// Replace the fallback and remove the loop injecting GUILD_SOLUTIONS_PRODUCTS
const oldSection = `  // 3. Fallback and Guild Solutions Merge: Ensure all 25 guild solutions are present
  const baseProducts = (authoritativeList && authoritativeList.length > 0)
    ? authoritativeList
    : USER_RESTORED_PRODUCTS.map(cleanProductItem).filter((p): p is Product => p !== null);

  const existingMap = new Map<string, Product>();
  for (const p of baseProducts) {
    if (p && p.id) {
      existingMap.set(p.id, p);
    }
  }

  // 4. Smart Local Merge: If user recently edited a product locally, DO NOT overwrite it with stale cloud data!
  let hasNewerLocalEdits = false;
  if (localProducts.length > 0) {
    for (const lp of localProducts) {
      if (!lp || !lp.id) continue;
      const existing = existingMap.get(lp.id);
      if (existing) {
        const merged = mergeTwoProducts(existing, lp);
        existingMap.set(lp.id, merged);
        if (merged !== existing) {
          hasNewerLocalEdits = true;
        }
      } else {
        // Product was created locally
        existingMap.set(lp.id, lp);
        hasNewerLocalEdits = true;
      }
    }
  }

  // 5. Ensure missing official guild solutions are present
  for (const gp of GUILD_SOLUTIONS_PRODUCTS) {
    if (gp && gp.id && !existingMap.has(gp.id)) {
      // Use USER_RESTORED_PRODUCTS instead of raw GUILD_SOLUTIONS if possible, otherwise gp
      const restored = USER_RESTORED_PRODUCTS.find(x => x.id === gp.id);
      existingMap.set(gp.id, restored || gp);
    }
  }`;

const newSection = `  // 3. Clean Products List (Only real products, no mock/dummy items)
  const baseProducts = (authoritativeList && authoritativeList.length > 0)
    ? authoritativeList
    : INITIAL_PRODUCTS.map(cleanProductItem).filter((p): p is Product => p !== null);

  const existingMap = new Map<string, Product>();
  for (const p of baseProducts) {
    if (p && p.id) {
      existingMap.set(p.id, p);
    }
  }

  // 4. Smart Local Merge: If user recently edited a product locally, keep those edits
  let hasNewerLocalEdits = false;
  if (localProducts.length > 0) {
    for (const lp of localProducts) {
      if (!lp || !lp.id) continue;
      const existing = existingMap.get(lp.id);
      if (existing) {
        const merged = mergeTwoProducts(existing, lp);
        existingMap.set(lp.id, merged);
        if (merged !== existing) {
          hasNewerLocalEdits = true;
        }
      }
    }
  }`;

if (content.includes(oldSection)) {
  content = content.replace(oldSection, newSection);
  console.log('Successfully replaced old section in dbService.ts');
} else {
  console.log('Old section not matched directly, checking fallback replacement');
  // Fallback regex replacement
  content = content.replace(
    /\/\/\s*3\.\s*Fallback and Guild Solutions Merge[\s\S]*?\/\/\s*5\.\s*Ensure missing official guild solutions are present[\s\S]*?existingMap\.set\(gp\.id,\s*restored\s*\|\|\s*gp\);\s*\}\s*\}/,
    newSection
  );
}

fs.writeFileSync(dbServicePath, content);
console.log('Patched dbService.ts successfully!');
