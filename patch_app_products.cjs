const fs = require('fs');
const path = require('path');
const appPath = path.join(__dirname, 'jaheshkala-app', 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

// Remove import
content = content.replace("import { GUILD_SOLUTIONS_PRODUCTS } from './data/guildProducts';\n", "");
content = content.replace("import { GUILD_SOLUTIONS_PRODUCTS } from './data/guildProducts';", "");

// Replace the useState initializer
const oldState = `  // 2. Products state (persisted so admin additions and edits appear immediately)
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const allBase = [...INITIAL_PRODUCTS, ...GUILD_SOLUTIONS_PRODUCTS];
      const saved = localStorage.getItem('jahesh_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const cleaned = parsed.map(sanitizeProduct).filter((p): p is Product => p !== null);
          if (cleaned.length > 0) {
            const savedIds = new Set(cleaned.map((p) => p.id));
            const missing = GUILD_SOLUTIONS_PRODUCTS.filter((p) => !savedIds.has(p.id));
            return missing.length > 0 ? [...cleaned, ...missing] : cleaned;
          }
        }
      }
      return allBase;
    } catch {
      return [...INITIAL_PRODUCTS, ...GUILD_SOLUTIONS_PRODUCTS];
    }
  });`;

const newState = `  // 2. Products state (persisted so admin additions and edits appear immediately)
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('jahesh_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const cleaned = parsed.map(sanitizeProduct).filter((p): p is Product => p !== null);
          if (cleaned.length > 0) {
            return cleaned;
          }
        }
      }
      return INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });`;

content = content.replace(oldState, newState);

// Ensure migration clears old dummy items on load
const migrationBlock = `
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clear legacy storage containing dummy mock items
      const migKey = 'jahesh_real_products_v3';
      if (!localStorage.getItem(migKey)) {
        localStorage.removeItem('jahesh_products');
        localStorage.setItem(migKey, 'true');
        setProducts(INITIAL_PRODUCTS);
      }
    }
  }, []);
`;

// Make sure we have the migration
if (!content.includes('jahesh_real_products_v3')) {
  content = content.replace("const [products, setProducts] = useState<Product[]>(", migrationBlock + "\n  const [products, setProducts] = useState<Product[]>(");
}

fs.writeFileSync(appPath, content);
console.log('Successfully updated App.tsx products state and removed GUILD_SOLUTIONS_PRODUCTS');
