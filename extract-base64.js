const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const files = [
  'jaheshkala-app/src/data/initialData.ts',
  'jaheshkala-app/src/data/guildProducts.ts'
];

const publicImagesDir = path.join('jaheshkala-app', 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Find all data:image base64 strings
  const base64Regex = /(["'])(data:image\/(jpeg|png|webp|gif|svg\+xml);base64,[A-Za-z0-9+/=]+)\1/g;
  
  content = content.replace(base64Regex, (match, quote, dataUri, ext) => {
    // Generate a short hash for the filename based on content to avoid duplicates
    const hash = crypto.createHash('md5').update(dataUri).digest('hex').substring(0, 10);
    
    // Normalise extension
    if (ext === 'svg+xml') ext = 'svg';
    if (ext === 'jpeg') ext = 'jpg';
    
    const filename = `img_${hash}.${ext}`;
    const filePath = path.join(publicImagesDir, filename);
    
    // Write image to disk if it doesn't exist
    if (!fs.existsSync(filePath)) {
      const base64Data = dataUri.split(',')[1];
      const buffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(filePath, buffer);
      console.log(`Saved ${filename} (${buffer.length} bytes)`);
    }
    
    return `${quote}/images/${filename}${quote}`;
  });
  
  fs.writeFileSync(file, content);
  console.log(`Processed ${file}`);
}
