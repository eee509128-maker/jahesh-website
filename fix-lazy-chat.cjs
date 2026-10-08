const fs = require('fs');

let appFile = fs.readFileSync('jaheshkala-app/src/App.tsx', 'utf8');

appFile = appFile.replace(
  /import \{ LiveChatWidget \} from '\.\/components\/LiveChatWidget';/,
  `const LiveChatWidget = lazy(() => import('./components/LiveChatWidget').then(module => ({ default: module.LiveChatWidget })));`
);

appFile = appFile.replace(
  /<LiveChatWidget/g,
  `<Suspense fallback={null}><LiveChatWidget`
);

appFile = appFile.replace(
  /isAdmin=\{currentUser\?\.role === 'admin' \|\| currentUser\?\.role === 'operator'\}\n\s*\/>/g,
  `isAdmin={currentUser?.role === 'admin' || currentUser?.role === 'operator'}
      /></Suspense>`
);

fs.writeFileSync('jaheshkala-app/src/App.tsx', appFile);
