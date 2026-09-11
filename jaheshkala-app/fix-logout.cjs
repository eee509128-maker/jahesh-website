const fs = require('fs');

// 1. Fix DigikalaHeader
let headerContent = fs.readFileSync('src/components/DigikalaHeader.tsx', 'utf-8');
headerContent = headerContent.replace(
  "              <button\n                title=\"خروج از حساب\"",
  "              <button\n                onClick={onLogout}\n                title=\"خروج از حساب\""
);
fs.writeFileSync('src/components/DigikalaHeader.tsx', headerContent);

// 2. Fix App.tsx handleLogout
let appContent = fs.readFileSync('src/App.tsx', 'utf-8');
if (!appContent.includes("import { supabase }")) {
  appContent = appContent.replace(
    "import { clearAllOrdersFromDb, deleteCouponFromDb, deleteOrderFromDb, deleteProductFromDb, fetchCouponsFromDb, fetchOrdersFromDb, fetchProductsFromDb, fetchAllUsersFromDb, saveCouponToDb, saveOrderToDb, saveProductToDb, updateOrderStatusInDb } from './lib/dbService';",
    "import { clearAllOrdersFromDb, deleteCouponFromDb, deleteOrderFromDb, deleteProductFromDb, fetchCouponsFromDb, fetchOrdersFromDb, fetchProductsFromDb, fetchAllUsersFromDb, saveCouponToDb, saveOrderToDb, saveProductToDb, updateOrderStatusInDb } from './lib/dbService';\nimport { supabase } from './lib/supabase';"
  );
}

appContent = appContent.replace(
  "  const handleLogout = () => {\n    localStorage.removeItem('jahesh_current_user');\n    setCurrentUser(null);\n    showToast('از حساب کاربری خارج شدید.');\n  };",
  "  const handleLogout = async () => {\n    await supabase.auth.signOut();\n    localStorage.removeItem('jahesh_current_user');\n    setCurrentUser(null);\n    showToast('از حساب کاربری خارج شدید.');\n  };"
);
fs.writeFileSync('src/App.tsx', appContent);
