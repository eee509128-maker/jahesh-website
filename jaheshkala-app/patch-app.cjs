const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

if (!content.includes('UserProfileModal')) {
  content = content.replace(
    "import { UserOrdersModal } from './components/UserOrdersModal';",
    "import { UserOrdersModal } from './components/UserOrdersModal';\nimport { UserProfileModal } from './components/UserProfileModal';"
  );
  
  content = content.replace(
    "const [userOrdersModalOpen, setUserOrdersModalOpen] = useState(false);",
    "const [userOrdersModalOpen, setUserOrdersModalOpen] = useState(false);\n  const [userProfileModalOpen, setUserProfileModalOpen] = useState(false);"
  );

  content = content.replace(
    "onOpenAdmin={() => setAdminModalOpen(true)}",
    "onOpenAdmin={() => setAdminModalOpen(true)}\n        onOpenProfile={() => setUserProfileModalOpen(true)}"
  );

  content = content.replace(
    "<UserOrdersModal",
    `{/* User Profile Modal */}\n      <UserProfileModal\n        isOpen={userProfileModalOpen}\n        onClose={() => setUserProfileModalOpen(false)}\n        currentUser={currentUser}\n        orders={orders}\n      />\n\n      <UserOrdersModal`
  );

  fs.writeFileSync('src/App.tsx', content);
}
