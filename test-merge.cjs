const usersMap = new Map();

// 1. local users
usersMap.set('id:1', { id: '1', role: 'admin' });

// 2. configData (Cloud)
const configData = { messages: [{ id: '1', role: 'user' }] };
for (const u of configData.messages) {
  const localUser = usersMap.get('id:1');
  usersMap.set('id:1', {
    id: u.id || localUser?.id,
    role: localUser?.role || u.role || 'user'
  });
}

// 3. Supabase DB
const supabaseUsers = [{ id: '1', role: 'user' }];
for (const matched of supabaseUsers) {
  const existing = usersMap.get('id:1');
  usersMap.set('id:1', {
    id: matched.id,
    role: existing?.role || matched.role || 'user'
  });
}

// 4. Server API
const apiUsers = [{ id: '1', role: 'user' }];
for (const u of apiUsers) {
  const existing = usersMap.get('id:1');
  usersMap.set('id:1', {
    ...existing,
    ...u,
    role: existing?.role || u.role || 'user'
  });
}

console.log(usersMap.get('id:1'));
