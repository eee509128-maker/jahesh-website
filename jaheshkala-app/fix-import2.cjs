const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf-8');
if (!appContent.includes("import { supabase }")) {
  appContent = appContent.replace(
    "import { Product, CartItem, Order, User, OrderStatus, Coupon } from './types';",
    "import { Product, CartItem, Order, User, OrderStatus, Coupon } from './types';\nimport { supabase } from './lib/supabase';"
  );
  fs.writeFileSync('src/App.tsx', appContent);
}
