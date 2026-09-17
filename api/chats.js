import fs from 'fs';
import path from 'path';

const CHATS_FILE = path.join(process.cwd(), 'data', 'chats.json');

function readChats() {
  if (fs.existsSync(CHATS_FILE)) {
    try {
      const raw = fs.readFileSync(CHATS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Chats read warning:', e);
    }
  }
  return [];
}

function writeChats(chats) {
  try {
    const dir = path.dirname(CHATS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CHATS_FILE, JSON.stringify(chats, null, 2), 'utf8');
  } catch (e) {
    console.error('Chats write error:', e);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const { userId } = req.query;
    const chats = readChats();
    if (userId) {
      const single = chats.find(c => String(c.userId) === String(userId));
      return res.status(200).json({ success: true, chat: single || null });
    }
    return res.status(200).json({ success: true, chats });
  }

  if (req.method === 'POST') {
    const incoming = req.body;
    if (!incoming || !incoming.userId) {
      return res.status(400).json({ error: 'Invalid chat payload. userId is required.' });
    }

    const chats = readChats();
    const existingIndex = chats.findIndex(c => String(c.userId) === String(incoming.userId));

    const updatedItem = {
      userId: String(incoming.userId),
      userName: incoming.userName || 'کاربر جهش‌کالا',
      messages: Array.isArray(incoming.messages) ? incoming.messages : [],
      lastUpdated: incoming.lastUpdated || new Date().toISOString(),
      isReadByAdmin: incoming.isReadByAdmin !== undefined ? Boolean(incoming.isReadByAdmin) : false,
      needsHumanSupport: Boolean(incoming.needsHumanSupport),
    };

    if (existingIndex >= 0) {
      chats[existingIndex] = updatedItem;
    } else {
      chats.unshift(updatedItem);
    }

    writeChats(chats);
    return res.status(200).json({ success: true, chat: updatedItem });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
