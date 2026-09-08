const fs = require('fs');
let content = fs.readFileSync('src/components/AuthModal.tsx', 'utf-8');

content = content.replace(
  "import { registerUserInDb, findUserInDb } from '../lib/dbService';",
  "import { registerUserInDb, findUserByEmailInDb } from '../lib/dbService';"
);

content = content.replace(
  "let user = await findUserInDb(email.trim(), 'OTP_USER');",
  "let user = await findUserByEmailInDb(email.trim());"
);

fs.writeFileSync('src/components/AuthModal.tsx', content);
