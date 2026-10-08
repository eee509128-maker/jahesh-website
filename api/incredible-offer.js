import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "tranquil-keyword-5ggh3",
  appId: "1:39375983688:web:640573d31d23e5fe43b47d",
  apiKey: "AIzaSyBoilrOWTMjbpG1IHvKDkRD9Dm20Pl7UW8",
  authDomain: "tranquil-keyword-5ggh3.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-jaheshwebsite-13126c61-5143-4f84-b87e-dcc220de14bc",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    try {
      const snap = await getDoc(doc(db, 'settings', 'incredible_offer'));
      if (snap.exists()) {
        const data = snap.data();
        if (data && data.productId) {
          return res.status(200).json({ success: true, ...data });
        }
      }

      // Fallback: check settings/products
      const prodSnap = await getDoc(doc(db, 'settings', 'products'));
      if (prodSnap.exists()) {
        const pList = prodSnap.data()?.products || [];
        const inc = pList.find((p) => p && Boolean(p.isIncredible));
        if (inc && inc.id) {
          return res.status(200).json({
            success: true,
            productId: inc.id,
            duration: inc.incredibleTimerDuration || 'permanent',
            expiresAt: inc.incredibleExpiresAt || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: inc.updatedAt || new Date().toISOString(),
          });
        }
      }
    } catch (err) {
      console.warn('API fetch incredible-offer notice:', err);
    }
    return res.status(200).json({ success: false, message: 'No active incredible offer' });
  }

  if (req.method === 'POST') {
    try {
      const body = req.body || {};
      const productId = String(body.productId || body.id || '').trim();
      if (!productId) {
        return res.status(400).json({ error: 'productId is required' });
      }

      const duration = body.duration || 'permanent';
      let expiresAt = body.expiresAt;
      if (!expiresAt) {
        let t = Date.now();
        if (duration === '1day') t += 86400000;
        else if (duration === '3days') t += 3 * 86400000;
        else if (duration === '1week') t += 7 * 86400000;
        else if (duration === '1month') t += 30 * 86400000;
        else t += 365 * 86400000;
        expiresAt = new Date(t).toISOString();
      }

      const nowIso = new Date().toISOString();
      const offerData = {
        productId,
        duration,
        expiresAt,
        updatedAt: nowIso,
      };

      // 1. Save settings/incredible_offer
      await setDoc(doc(db, 'settings', 'incredible_offer'), offerData, { merge: true });

      // 2. Synchronize settings/products to guarantee exclusivity
      try {
        const pSnap = await getDoc(doc(db, 'settings', 'products'));
        if (pSnap.exists()) {
          const list = (pSnap.data()?.products || []).map((p) => {
            if (String(p?.id) === productId) {
              return {
                ...p,
                isIncredible: true,
                incredibleTimerDuration: duration,
                incredibleExpiresAt: expiresAt,
                updatedAt: nowIso,
              };
            }
            return { ...p, isIncredible: false };
          });
          await setDoc(doc(db, 'settings', 'products'), { products: list, updatedAt: nowIso }, { merge: true });
        }
      } catch {}

      // 3. Update target product doc
      try {
        await setDoc(doc(db, 'products', productId), {
          isIncredible: true,
          incredibleTimerDuration: duration,
          incredibleExpiresAt: expiresAt,
          updatedAt: nowIso,
        }, { merge: true });
      } catch {}

      return res.status(200).json({ success: true, ...offerData });
    } catch (err) {
      console.error('API save incredible-offer error:', err);
      return res.status(500).json({ error: 'Failed to save incredible offer', details: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
