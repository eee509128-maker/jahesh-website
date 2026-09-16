const fs = require('fs');
let appFile = fs.readFileSync('jaheshkala-app/src/App.tsx', 'utf8');

appFile = appFile.replace(
  /return \(\n    <div className=\{`min-h-screen([^>]+)>\n/g,
  `return (\n    <div className={\`min-h-screen$1>\n      <Suspense fallback={null}>\n`
);

appFile = appFile.replace(
  /    <\/div>\n  \);\n\}/g,
  `      </Suspense>\n    </div>\n  );\n}`
);

fs.writeFileSync('jaheshkala-app/src/App.tsx', appFile);
