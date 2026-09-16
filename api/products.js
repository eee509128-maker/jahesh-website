import fs from 'fs';
import path from 'path';

const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json');

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    try {
      if (fs.existsSync(PRODUCTS_FILE)) {
        const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
        const list = JSON.parse(raw);
        if (Array.isArray(list) && list.length > 0) {
          return res.status(200).json({ success: true, count: list.length, products: list });
        }
      }
    } catch (e) {
      console.warn('API products read warning:', e);
    }
    return res.status(200).json({ success: true, count: 0, products: [] });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
