const fs = require('fs');
const path = require('path');
const appPath = path.join(__dirname, 'jaheshkala-app', 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

const migrationCode = `
  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('jahesh_migrated_v2')) {
      localStorage.removeItem('jahesh_products');
      localStorage.setItem('jahesh_migrated_v2', 'true');
    }
  }, []);
`;

content = content.replace("const [products, setProducts] = useState<Product[]>([]);", "const [products, setProducts] = useState<Product[]>([]);\n" + migrationCode);

fs.writeFileSync(appPath, content);
console.log('Patched App.tsx with migration script');
