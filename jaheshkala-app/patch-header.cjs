const fs = require('fs');
let content = fs.readFileSync('src/components/DigikalaHeader.tsx', 'utf-8');

if (!content.includes('onOpenProfile: () => void;')) {
  content = content.replace(
    "onOpenAdmin: () => void;",
    "onOpenAdmin: () => void;\n  onOpenProfile?: () => void;"
  );

  content = content.replace(
    "onOpenAdmin,",
    "onOpenAdmin,\n  onOpenProfile,"
  );

  const newProfileBtn = `              <button
                onClick={onOpenProfile}
                title="پروفایل کاربری"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#181138] hover:bg-purple-900/60 hover:text-purple-300 text-slate-300 border border-purple-900/40 flex items-center justify-center transition-colors shrink-0"
              >
                <UserIcon className="w-4 h-4" />
              </button>
              <button`;

  content = content.replace(
    "              <button\n                onClick={onLogout}",
    newProfileBtn
  );

  fs.writeFileSync('src/components/DigikalaHeader.tsx', content);
}
