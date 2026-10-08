import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    try {
      // 1. Check settings/deleted_products
      let deletedIds = new Set();
      try {
        const delSnap = await getDoc(doc(db, 'settings', 'deleted_products'));
        if (delSnap.exists()) {
          const dData = delSnap.data();
          if (dData && Array.isArray(dData.deletedIds)) {
            deletedIds = new Set(dData.deletedIds.map((id) => String(id).trim()));
          }
        }
      } catch {}

      // 2. Check settings/products first
      try {
        const settingsSnap = await getDoc(doc(db, 'settings', 'products'));
        if (settingsSnap.exists()) {
          const sData = settingsSnap.data();
          if (sData && Array.isArray(sData.products)) {
            const filtered = sData.products.filter((p) => p && p.id && !deletedIds.has(String(p.id)));
            return res.status(200).json({ success: true, count: filtered.length, products: filtered });
          }
        }
      } catch {}

      // 3. Fallback to individual docs collection
      const snap = await getDocs(collection(db, 'products'));
      const products = [];
      snap.forEach((d) => {
        const item = d.data();
        if (item && item.id && !deletedIds.has(String(item.id))) products.push(item);
      });
      return res.status(200).json({ success: true, count: products.length, products });
    } catch (err) {
      console.error('Fetch products error:', err);
      return res.status(500).json({ error: 'Failed to fetch products', details: String(err) });
    }
  }

  if (req.method === 'POST') {
    try {
      const body = req.body;
      if (!body) {
        return res.status(400).json({ error: 'Missing request body' });
      }

      // Case A: Full products list save-all
      if (Array.isArray(body) || (Array.isArray(body.products) && body.products.length > 0)) {
        const incoming = Array.isArray(body) ? body : body.products;
        await setDoc(doc(db, 'settings', 'products'), { products: incoming, updatedAt: new Date().toISOString() }, { merge: true });
        return res.status(200).json({ success: true, count: incoming.length, products: incoming });
      }

      // Case B: Dedicated set-incredible request
      const isSetIncredible = Boolean(body.productId && (body.duration || body.expiresAt || body.action === 'set-incredible'));
      if (isSetIncredible) {
        const pId = String(body.productId).trim();
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
        try {
          const sSnap = await getDoc(doc(db, 'settings', 'products'));
          if (sSnap.exists()) {
            const list = (sSnap.data()?.products || []).map((p) => {
              if (String(p?.id) === pId) {
                return { ...p, isIncredible: true, incredibleTimerDuration: duration, incredibleExpiresAt: expiresAt, updatedAt: nowIso };
              }
              return { ...p, isIncredible: false };
            });
            await setDoc(doc(db, 'settings', 'products'), { products: list, updatedAt: nowIso }, { merge: true });
          }
        } catch {}
        try {
          await setDoc(doc(db, 'products', pId), { isIncredible: true, incredibleTimerDuration: duration, incredibleExpiresAt: expiresAt, updatedAt: nowIso }, { merge: true });
        } catch {}
        return res.status(200).json({ success: true, productId: pId, duration, expiresAt });
      }

      // Case C: Single product upsert
      const product = body;
      if (!product || !product.id) {
        return res.status(400).json({ error: 'Missing product or product ID' });
      }
      product.updatedAt = new Date().toISOString();

      const docRef = doc(db, 'products', String(product.id));
      await setDoc(docRef, product, { merge: true });

      // If product is marked as Incredible Offer, sync settings/products so other products are not incredible
      try {
        const settingsSnap = await getDoc(doc(db, 'settings', 'products'));
        if (settingsSnap.exists()) {
          const sData = settingsSnap.data();
          if (sData && Array.isArray(sData.products)) {
            let list = sData.products;
            const idx = list.findIndex((p) => String(p?.id) === String(product.id));
            if (idx >= 0) {
              list[idx] = { ...list[idx], ...product };
            } else {
              list = [product, ...list];
            }
            if (product.isIncredible) {
              list = list.map((p) => (String(p?.id) === String(product.id) ? { ...p, ...product } : { ...p, isIncredible: false }));
            }
            await setDoc(doc(db, 'settings', 'products'), { products: list, updatedAt: new Date().toISOString() }, { merge: true });
          }
        }
      } catch (syncErr) {
        console.warn('Firestore settings/products sync notice in api/products.js:', syncErr);
      }

      // Remove from settings/deleted_products if present
      try {
        const delSnap = await getDoc(doc(db, 'settings', 'deleted_products'));
        if (delSnap.exists()) {
          const dData = delSnap.data();
          if (dData && Array.isArray(dData.deletedIds) && dData.deletedIds.includes(String(product.id))) {
            const updated = dData.deletedIds.filter((x) => x !== String(product.id));
            await setDoc(doc(db, 'settings', 'deleted_products'), { deletedIds: updated, updatedAt: new Date().toISOString() }, { merge: true });
          }
        }
      } catch {}

      return res.status(200).json({ success: true, product });
    } catch (err) {
      console.error('Save product error:', err);
      return res.status(500).json({ error: 'Failed to save product', details: String(err) });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const id = req.query?.id || req.body?.id || req.body?.productId;
      if (!id) return res.status(400).json({ error: 'Product ID is required' });
      const cleanId = String(id).trim();

      // 1. Delete individual product doc
      await deleteDoc(doc(db, 'products', cleanId));

      // 2. Add to settings/deleted_products
      try {
        const delSnap = await getDoc(doc(db, 'settings', 'deleted_products'));
        let delIds = [];
        if (delSnap.exists()) {
          const dData = delSnap.data();
          if (dData && Array.isArray(dData.deletedIds)) delIds = dData.deletedIds;
        }
        if (!delIds.includes(cleanId)) {
          delIds.push(cleanId);
          await setDoc(doc(db, 'settings', 'deleted_products'), { deletedIds: delIds, updatedAt: new Date().toISOString() }, { merge: true });
        }
      } catch {}

      // 3. Filter out from settings/products
      try {
        const settingsSnap = await getDoc(doc(db, 'settings', 'products'));
        if (settingsSnap.exists()) {
          const sData = settingsSnap.data();
          if (sData && Array.isArray(sData.products)) {
            const filtered = sData.products.filter((p) => p && p.id !== cleanId);
            await setDoc(doc(db, 'settings', 'products'), { products: filtered, updatedAt: new Date().toISOString() }, { merge: true });
          }
        }
      } catch {}

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to delete product', details: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
