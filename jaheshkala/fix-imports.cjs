const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf-8');

content = content.replace(
  "Users\\n} from 'lucide-react';", 
  "Users, MessageCircle, ArrowLeft, Reply\\n} from 'lucide-react';"
);
content = content.replace(
  "Users\n} from 'lucide-react';", 
  "Users, MessageCircle, ArrowLeft, Reply\n} from 'lucide-react';"
);

fs.writeFileSync('src/components/AdminPanel.tsx', content);
