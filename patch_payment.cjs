const fs = require('fs');
let code = fs.readFileSync('jaheshkala-app/src/components/PaymentGatewayModal.tsx', 'utf-8');
code = code.replace(
  `  currentUser,\n  appliedCoupon,\n  zibalMerchant,\n}) => {`,
  `  currentUser,\n  appliedCoupon,\n  zibalMerchant,\n  onPaymentSuccess,\n}) => {`
);
fs.writeFileSync('jaheshkala-app/src/components/PaymentGatewayModal.tsx', code, 'utf-8');
console.log('patched payment');
