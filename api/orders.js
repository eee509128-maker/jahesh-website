import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "tranquil-keyword-5ggh3",
  appId: "1:39375983688:web:640573d31d23e5fe43b47d",
  apiKey: "AIzaSyBoilrOWTMjbpG1IHvKDkRD9Dm20Pl7UW8",
  authDomain: "tranquil-keyword-5ggh3.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-jaheshwebsite-13126c61-5143-4f84-b87e-dcc220de14bc",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    try {
      const snap = await getDocs(collection(db, 'orders'));
      const orders = [];
      snap.forEach((d) => {
        const item = d.data();
        if (item && item.id) orders.push(item);
      });
      const sorted = sortOrdersNewestFirst(orders);
      return res.status(200).json({ success: true, orders: sorted });
    } catch (err) {
      console.error('Vercel API fetch orders error:', err);
      return res.status(500).json({ error: 'Failed to fetch orders', details: String(err) });
    }
  }

  if (req.method === 'POST') {
    try {
      const order = req.body;
      if (!order || !order.id) {
        return res.status(400).json({ error: 'Invalid order' });
      }
      if (!order.createdAt) order.createdAt = new Date().toISOString();

      const docRef = doc(db, 'orders', String(order.id));
      await setDoc(docRef, order, { merge: true });

      // Automatically sync any attached licenses into the Firestore 'licenses' collection
      const attachedLics = [order.appLicense, order.amlakLicense].filter(Boolean);
      for (const lic of attachedLics) {
        if (lic && (lic.username || lic.licenseKey)) {
          const licId = lic.id || (lic.licenseKey ? `lic-${lic.licenseKey}` : `lic-${order.id}`);
          try {
            await setDoc(
              doc(db, 'licenses', String(licId)),
              {
                ...lic,
                id: licId,
                orderId: order.id,
                buyerName: lic.buyerName || order.customerName,
                phone: lic.phone || order.customerPhone,
                updatedAt: new Date().toISOString(),
              },
              { merge: true }
            );
          } catch (licSyncErr) {
            console.warn('Notice saving order license to Firestore:', licSyncErr);
          }
        }
      }

      return res.status(200).json({ success: true, order });
    } catch (err) {
      console.error('Vercel API save order error:', err);
      return res.status(500).json({ error: 'Failed to save order', details: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
