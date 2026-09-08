const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf-8');
if (!appContent.includes("import { supabase }")) {
  appContent = appContent.replace(
    "import { OrderStatus, Product, CartItem, Order, User, Coupon } from './types';",
    "import { OrderStatus, Product, CartItem, Order, User, Coupon } from './types';\nimport { supabase } from './lib/supabase';"
  );
  fs.writeFileSync('src/App.tsx', appContent);
}
