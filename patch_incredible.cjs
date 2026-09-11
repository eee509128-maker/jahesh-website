const fs = require('fs');
let code = fs.readFileSync('jaheshkala-app/src/components/AdminPanel.tsx', 'utf-8');

const oldCode = `                      onChange={(e) => {
                        const checked = e.target.checked;
                        setIsIncredible(checked);
                        if (checked && !incredibleExpiresAt) {
                          handleSetIncredibleDuration(incredibleTimerDuration || '1week');
                        }
                      }}`;

const newCode = `                      onChange={(e) => {
                        const checked = e.target.checked;
                        setIsIncredible(checked);
                        if (checked) {
                          const isExpired = incredibleExpiresAt && new Date(incredibleExpiresAt).getTime() <= Date.now();
                          if (!incredibleExpiresAt || isExpired) {
                            handleSetIncredibleDuration(incredibleTimerDuration || '1week');
                          }
                        }
                      }}`;

code = code.replace(oldCode, newCode);
fs.writeFileSync('jaheshkala-app/src/components/AdminPanel.tsx', code, 'utf-8');
console.log('patched');
