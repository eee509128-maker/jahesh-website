const fs = require('fs');
const path = require('path');
const filePaths = [
  path.join(__dirname, 'jaheshkala-app', 'index.html'),
  path.join(__dirname, 'amlak', 'index.html'),
  path.join(__dirname, 'index.html')
];

for (const fp of filePaths) {
  if (fs.existsSync(fp)) {
    let content = fs.readFileSync(fp, 'utf8');
    content = content.replace(/jaheshit/g, 'jaheshit, جهش آی تی, جهش ای تی');
    fs.writeFileSync(fp, content);
    console.log('Patched SEO in', fp);
  }
}
