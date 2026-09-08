const fs = require('fs');
let content = fs.readFileSync('src/lib/dbService.ts', 'utf-8');

// Add findUserByEmailInDb
if (!content.includes('findUserByEmailInDb')) {
  const newFunc = `
export const findUserByEmailInDb = async (email: string): Promise<User | null> => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .limit(1);

    if (error || !data || data.length === 0) {
      return null;
    }

    const matched = data[0];
    return {
      id: matched.id,
      fullName: matched.full_name,
      phone: matched.phone,
      email: matched.email || '',
      username: matched.username,
      role: matched.role || 'user',
      createdAt: matched.created_at,
    };
  } catch (err) {
    console.warn('Find user by email exception:', err);
    return null;
  }
};
`;

  content = content + newFunc;
  fs.writeFileSync('src/lib/dbService.ts', content);
}
