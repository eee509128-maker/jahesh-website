const fs = require('fs');
let code = fs.readFileSync('jaheshkala-app/src/components/AuthModal.tsx', 'utf-8');

// Imports
code = code.replace(
  `import { AntiBotGuard } from '../security/antiBot';`,
  `import { AntiBotGuard } from '../security/antiBot';\nimport { IRANIAN_GUILDS } from '../data/guilds';\nimport { ChevronDown, Search } from 'lucide-react';`
);

// States
code = code.replace(
  `const [phone, setPhone] = useState('');`,
  `const [phone, setPhone] = useState('');\n  const [guild, setGuild] = useState('');\n  const [guildSearch, setGuildSearch] = useState('');\n  const [showGuildDropdown, setShowGuildDropdown] = useState(false);`
);

// filtered guilds
code = code.replace(
  `const refreshCaptcha = () => {`,
  `const filteredGuilds = IRANIAN_GUILDS.filter(g => g.includes(guildSearch));\n\n  const refreshCaptcha = () => {`
);

// Container max height
code = code.replace(
  `<div className="bg-white dark:bg-[#140c2e] border border-purple-200 dark:border-purple-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl text-right">`,
  `<div className="bg-white dark:bg-[#140c2e] border border-purple-200 dark:border-purple-800 rounded-3xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden shadow-2xl text-right">`
);

// Form scroll
code = code.replace(
  `<form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-right">`,
  `<form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-right overflow-y-auto custom-scrollbar">`
);

// Add guild field after phone
const phoneFieldEnd = `                  required\n                />\n              </div>`;
const guildField = `
              <div className="space-y-1 relative">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  صنف یا شغل شما:
                </label>
                <div 
                  className="w-full bg-white dark:bg-black/50 border border-purple-300 dark:border-purple-800/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white flex items-center justify-between cursor-pointer shadow-sm"
                  onClick={() => setShowGuildDropdown(!showGuildDropdown)}
                >
                  <span className={guild ? '' : 'text-slate-400'}>{guild || 'انتخاب صنف / شغل...'}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
                
                {showGuildDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white dark:bg-[#1a1139] border border-purple-200 dark:border-purple-800 rounded-xl shadow-xl max-h-48 flex flex-col overflow-hidden">
                    <div className="p-2 border-b border-purple-100 dark:border-purple-800/60 sticky top-0 bg-white dark:bg-[#1a1139]">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="جستجوی صنف..."
                          value={guildSearch}
                          onChange={(e) => setGuildSearch(e.target.value)}
                          className="w-full bg-purple-50 dark:bg-black/30 border border-purple-200 dark:border-purple-800/50 rounded-lg pr-8 pl-3 py-1.5 text-xs focus:outline-none text-slate-800 dark:text-white"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>
                    <div className="overflow-y-auto custom-scrollbar">
                      {filteredGuilds.length > 0 ? filteredGuilds.map((g) => (
                        <div
                          key={g}
                          className="px-4 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/40 cursor-pointer transition-colors"
                          onClick={() => {
                            setGuild(g);
                            setShowGuildDropdown(false);
                            setGuildSearch('');
                          }}
                        >
                          {g}
                        </div>
                      )) : (
                        <div className="px-4 py-3 text-xs text-slate-500 text-center">صنفی یافت نشد.</div>
                      )}
                    </div>
                  </div>
                )}
              </div>`;
code = code.replace(
  /(\s*<label className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">\s*<Phone className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" \/>\s*شماره موبایل:\s*<\/label>\s*<input[^>]+required\s*\/>\s*<\/div>)/,
  `$1${guildField}`
);

// Register user in DB with guild
code = code.replace(
  `role: 'user',`,
  `role: 'user',\n          guild: guild || undefined,`
);

fs.writeFileSync('jaheshkala-app/src/components/AuthModal.tsx', code, 'utf-8');
console.log('patched AuthModal');
