const fs = require('fs');
let code = fs.readFileSync('jaheshkala-app/src/components/AdminPanel.tsx', 'utf-8');

const oldTextarea = `                                onChange={(e) => handleUpdatePlan(index, {
                                  features: e.target.value.split('\\n').map((s) => s.trim()).filter(Boolean)
                                })}`;

const newTextarea = `                                onChange={(e) => handleUpdatePlan(index, {
                                  features: e.target.value.split('\\n')
                                })}`;

code = code.replace(oldTextarea, newTextarea);

const oldSubmit = `      subscriptionPlans: hasCustomPlans ? customPlans : undefined,`;
const newSubmit = `      subscriptionPlans: hasCustomPlans 
        ? customPlans.map(plan => ({
            ...plan,
            features: plan.features ? plan.features.map(f => f.trim()).filter(Boolean) : []
          })) 
        : undefined,`;

code = code.replace(oldSubmit, newSubmit);

fs.writeFileSync('jaheshkala-app/src/components/AdminPanel.tsx', code, 'utf-8');
console.log('patched');
