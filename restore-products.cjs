const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const supaPath = path.join(__dirname, 'jaheshkala-app', 'supa-products.json');
let products = JSON.parse(fs.readFileSync(supaPath, 'utf8'));

const publicImagesDir = path.join(__dirname, 'jaheshkala-app', 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Process images
products = products.map(p => {
  if (p.image && p.image.startsWith('data:image')) {
    const dataUri = p.image;
    const extMatch = dataUri.match(/^data:image\/(jpeg|png|webp|gif|svg\+xml);base64,/);
    if (extMatch) {
      let ext = extMatch[1];
      if (ext === 'svg+xml') ext = 'svg';
      if (ext === 'jpeg') ext = 'jpg';
      
      const base64Data = dataUri.split(',')[1];
      const buffer = Buffer.from(base64Data, 'base64');
      
      const hash = crypto.createHash('md5').update(buffer).digest('hex').substring(0, 10);
      const filename = `user_img_${hash}.${ext}`;
      const filePath = path.join(publicImagesDir, filename);
      
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, buffer);
      }
      p.image = `/jaheshkala/images/${filename}`;
    }
  }
  return p;
});

// Write to userProducts.ts
const tsContent = `import { Product } from '../types';\n\nexport const USER_RESTORED_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'jaheshkala-app', 'src', 'data', 'userProducts.ts'), tsContent);
console.log('Restored products to userProducts.ts');
