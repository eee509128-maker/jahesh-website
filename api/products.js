import fs from 'fs';
import path from 'path';

const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json');

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
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

  if (req.method === 'POST') {
    try {
      const incoming = req.body;
      if (!incoming || !incoming.id) {
        return res.status(400).json({ error: 'Missing product or product ID' });
      }

      let currentList = [];
      if (fs.existsSync(PRODUCTS_FILE)) {
        try {
          const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) currentList = parsed;
        } catch (e) {
          console.warn('Read products err:', e);
        }
      }

      const idx = currentList.findIndex((p) => p.id === incoming.id);
      if (idx >= 0) {
        currentList[idx] = {
          ...currentList[idx],
          ...incoming,
          image: (incoming.image && !incoming.image.includes('data:image/svg+xml')) ? incoming.image : (currentList[idx].image || incoming.image),
          updatedAt: incoming.updatedAt || new Date().toISOString(),
        };
      } else {
        currentList = [{ ...incoming, updatedAt: incoming.updatedAt || new Date().toISOString() }, ...currentList];
      }

      try {
        const dir = path.dirname(PRODUCTS_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(currentList, null, 2), 'utf8');
      } catch (e) {
        console.warn('Write products err:', e);
      }

      return res.status(200).json({
        success: true,
        savedProduct: incoming,
        total: currentList.length,
        products: currentList,
      });
    } catch (err) {
      return res.status(500).json({ error: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
