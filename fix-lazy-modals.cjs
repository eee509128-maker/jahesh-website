const fs = require('fs');

let appFile = fs.readFileSync('jaheshkala-app/src/App.tsx', 'utf8');

const modals = [
  'CartModal',
  'AuthModal',
  'PaymentGatewayModal',
  'UserOrdersModal',
  'UserProfileModal',
  'ProductDetailModal',
  'FooterInfoModal',
  'AmlakAppModal',
  'SubscriptionDurationModal'
];

for (const modal of modals) {
  const importRegex = new RegExp(`import \\{ ${modal} \\} from '\\.\\/components\\/${modal}';`);
  appFile = appFile.replace(
    importRegex,
    `const ${modal} = lazy(() => import('./components/${modal}').then(module => ({ default: module.${modal} })));`
  );
  
  // Also we need to wrap their usage in Suspense
  // Luckily, most of them are already conditionally rendered like {showCart && <CartModal ... />}
  // We can just find `<${modal}` and replace with `<Suspense fallback={null}><${modal}`
  // But we have to make sure we don't nest Suspense poorly, or we can just leave them as they are and wrap the entire block, but they are scattered.
  // Actually, if we just wrap the element it's fine.
  // We can do it reliably if we just wrap the conditionally rendered elements, but since they are self closing or have children...
}

fs.writeFileSync('jaheshkala-app/src/App.tsx', appFile);
