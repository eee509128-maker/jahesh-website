const fs = require('fs');

let appFile = fs.readFileSync('jaheshkala-app/src/App.tsx', 'utf8');

appFile = appFile.replace(
  /<div className="min-h-screen bg-\[\#0f172a\] text-slate-100 font-sans flex flex-col relative" dir="rtl">/g,
  `<div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans flex flex-col relative" dir="rtl">
      <Suspense fallback={<div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 text-white backdrop-blur-sm">در حال بارگذاری...</div>}>`
);

appFile = appFile.replace(
  /    <\/div>\n  \);\n\}/g,
  `      </Suspense>
    </div>
  );
}`
);

fs.writeFileSync('jaheshkala-app/src/App.tsx', appFile);
