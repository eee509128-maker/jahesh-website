import fs from 'fs';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'data', 'users.json');

function readUsers() {
  if (fs.existsSync(USERS_FILE)) {
    try {
      const raw = fs.readFileSync(USERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Users read warning:', e);
    }
  }
  return [];
}

function writeUsers(users) {
  try {
    const dir = path.dirname(USERS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
  } catch (e) {
    console.error('Users write error:', e);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const users = readUsers();
    return res.status(200).json({ success: true, users });
  }

  if (req.method === 'POST') {
    const { id, username, phone, role } = req.body || {};
    if (!role) {
      return res.status(400).json({ error: 'Role is required' });
    }
    const current = readUsers();
    const idx = current.findIndex(
      (u) => (id && u.id === id) || (username && u.username === username) || (phone && u.phone === phone)
    );
    if (idx >= 0) {
      current[idx].role = role;
    } else if (username || phone || id) {
      current.push({
        id: id || `usr-${Date.now()}`,
        username: username || '',
        phone: phone || '',
        role,
        createdAt: new Date().toISOString(),
      });
    }
    writeUsers(current);
    return res.status(200).json({ success: true, count: current.length, users: current });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
