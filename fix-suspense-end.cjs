const fs = require('fs');
let appFile = fs.readFileSync('jaheshkala-app/src/App.tsx', 'utf8');

appFile = appFile.replace(
  /      <\/Suspense>\n      <\/Suspense>\n    <\/div>\n  \);\n\}/,
  `      </Suspense>
    </div>
  );
}`
);

fs.writeFileSync('jaheshkala-app/src/App.tsx', appFile);
