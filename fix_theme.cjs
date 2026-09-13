const fs = require('fs');
const fileApp = './jaheshkala-app/src/App.tsx';
let contentApp = fs.readFileSync(fileApp, 'utf8');

const targetEffect = `  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
    } else {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
    }
  }, [theme]);`;

const replacementEffect = `  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);`;

if (contentApp.includes(targetEffect)) {
  contentApp = contentApp.replace(targetEffect, replacementEffect);
  fs.writeFileSync(fileApp, contentApp, 'utf8');
  console.log('App.tsx updated.');
} else {
  console.log('Target effect not found in App.tsx');
}
