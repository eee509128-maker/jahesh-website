const fs = require('fs');
const path = require('path');

let appFile = fs.readFileSync('jaheshkala-app/src/App.tsx', 'utf8');

// Replace import { AdminPanel } ...
appFile = appFile.replace(
  /import \{ AdminPanel \} from '\.\/components\/AdminPanel';/,
  `import { Suspense, lazy } from 'react';
const AdminPanel = lazy(() => import('./components/AdminPanel').then(module => ({ default: module.AdminPanel })));`
);

// We need to wrap AdminPanel in Suspense where it's used.
appFile = appFile.replace(
  /<AdminPanel/g,
  `<Suspense fallback={<div className="p-8 text-center text-white">در حال بارگذاری پنل مدیریت...</div>}><AdminPanel`
);

appFile = appFile.replace(
  /onDeleteBanner=\{handleDeleteBanner\}\n\s*\/>/g,
  `onDeleteBanner={handleDeleteBanner}
      /></Suspense>`
);

fs.writeFileSync('jaheshkala-app/src/App.tsx', appFile);
