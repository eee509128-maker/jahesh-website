const assert = require('assert');

// Simulate the merge logic
let existing = { role: 'admin' };
let u = { role: 'user' };

let finalRole = existing?.role || u.role || 'user';
console.log(finalRole); // Should be admin

existing = { role: 'user' };
u = { role: 'admin' };
finalRole = existing?.role || u.role || 'user';
console.log(finalRole); // Should be user

