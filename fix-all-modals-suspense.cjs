const fs = require('fs');

let appFile = fs.readFileSync('jaheshkala-app/src/App.tsx', 'utf8');

const modalsToWrap = [
  'ProductDetailModal',
  'AmlakAppModal',
  'TermsModal',
  'PaymentGatewayModal',
  'AuthModal',
  'UserProfileModal',
  'UserOrdersModal',
  'FooterInfoModal',
  'SubscriptionDurationModal',
  'ProductPlansModal'
];

for (const modal of modalsToWrap) {
  // We need to replace `<ModalName` with `<Suspense fallback={null}><ModalName`
  // And `/>` or `</ModalName>` with `</Suspense>` but ONLY for that specific modal call!
  // It's tricky with regex. Let's do it carefully.
  
  // We can just find `<ModalName` and replace it with `<Suspense fallback={null}><ModalName`
  appFile = appFile.replace(new RegExp(\`<(?=\${modal}\\b)\`, 'g'), '<Suspense fallback={null}><');
  
  // Now for closing. 
  // For components that are self-closing `/>`, if we can match the modal definition up to `/>`
  // Actually, since they are all at the bottom of the file and conditionally rendered, 
  // Let's just wrap the entire `div` content of `App.tsx` with one giant `<Suspense fallback={null}>`!
  // If we put one `<Suspense fallback={null}>` right after `<div className="min-h-screen bg-[#0f172a]..."`, it will catch EVERYTHING.
}

// Revert the naive approach
appFile = fs.readFileSync('jaheshkala-app/src/App.tsx', 'utf8');

appFile = appFile.replace(
  /<div className="min-h-screen bg-\[#0f172a\] text-slate-100 font-sans flex flex-col relative" dir="rtl">/g,
  \`<div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans flex flex-col relative" dir="rtl">
      <Suspense fallback={<div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 text-white">در حال بارگذاری...</div>}>\`
);

appFile = appFile.replace(
  /    <\/div>\n  \);\n\}/g,
  \`      </Suspense>
    </div>
  );
}\`
);

fs.writeFileSync('jaheshkala-app/src/App.tsx', appFile);
