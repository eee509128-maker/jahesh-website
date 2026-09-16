import fs from 'fs';
import path from 'path';

const ORDERS_FILE = path.join(process.cwd(), 'data', 'orders.json');

function sortOrdersNewestFirst(orders) {
  if (!Array.isArray(orders)) return [];
  return orders.sort((a, b) => {
    const timeA = a.createdAt ? new Date(a.createdAt).getTime() : (a.paidAt ? new Date(a.paidAt).getTime() : 0);
    const timeB = b.createdAt ? new Date(b.createdAt).getTime() : (b.paidAt ? new Date(b.paidAt).getTime() : 0);
    if (timeA && timeB) return timeB - timeA;
    if (timeB) return 1;
    if (timeA) return -1;
    return String(b.id || '').localeCompare(String(a.id || ''));
  });
}

function readOrders() {
  if (fs.existsSync(ORDERS_FILE)) {
    try {
      const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return sortOrdersNewestFirst(parsed);
    } catch (e) {
      console.warn('Orders read warning:', e);
    }
  }
  return [];
}

function writeOrders(orders) {
  try {
    const dir = path.dirname(ORDERS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const sorted = sortOrdersNewestFirst(orders);
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(sorted, null, 2), 'utf8');
  } catch (e) {
    console.error('Orders write error:', e);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const orders = readOrders();
    return res.status(200).json({ success: true, orders });
  }

  if (req.method === 'POST') {
    const order = req.body;
    if (!order || !order.id) {
      return res.status(400).json({ error: 'Invalid order' });
    }
    if (!order.createdAt) order.createdAt = new Date().toISOString();
    const current = readOrders();
    const idx = current.findIndex(
      (o) => o.id === order.id || (o.trackingCode && order.trackingCode && o.trackingCode === order.trackingCode)
    );
    let updated;
    if (idx >= 0) {
      updated = [...current];
      updated[idx] = { ...current[idx], ...order };
    } else {
      updated = [order, ...current];
    }
    writeOrders(updated);
    return res.status(200).json({ success: true, order, count: updated.length, orders: updated });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
