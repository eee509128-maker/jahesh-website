// Mock localStorage
global.localStorage = {
  store: {
    jahesh_users: JSON.stringify([{ id: '1', role: 'user', fullName: 'Test' }])
  },
  getItem: (key) => global.localStorage.store[key] || null,
  setItem: (key, val) => { global.localStorage.store[key] = val; }
};

// Simulate updateUserInDb
const updateUserInDb = (user) => {
  const localUsers = JSON.parse(global.localStorage.getItem('jahesh_users') || '[]');
  const idx = localUsers.findIndex(u => u.id === user.id);
  if (idx >= 0) {
    localUsers[idx] = { ...localUsers[idx], ...user, role: user.role };
  } else {
    localUsers.unshift(user);
  }
  global.localStorage.setItem('jahesh_users', JSON.stringify(localUsers));
};

updateUserInDb({ id: '1', role: 'admin' });
console.log('After update:', global.localStorage.getItem('jahesh_users'));

// Simulate fetchAllUsersFromDb
const usersMap = new Map();
const localUsers = JSON.parse(global.localStorage.getItem('jahesh_users') || '[]');
for (const lu of localUsers) {
  usersMap.set('id:' + lu.id, { ...lu });
}

// Simulate Server response which still has old role
const serverUser = { id: '1', role: 'user' };

const existing = usersMap.get('id:1');
usersMap.set('id:1', {
  ...existing,
  ...serverUser,
  role: existing?.role || serverUser.role || 'user'
});

console.log('Final final:', usersMap.get('id:1'));

