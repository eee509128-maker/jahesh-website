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
      const product = req.body;
      if (!product || !product.id) {
        return res.status(400).json({ error: 'Missing product or product ID' });
      }
      product.updatedAt = new Date().toISOString();

      const docRef = doc(db, 'products', String(product.id));
      await setDoc(docRef, product, { merge: true });

      // 2. Synchronize into settings/products so GET /api/products returns updated data immediately
      try {
        const settingsSnap = await getDoc(doc(db, 'settings', 'products'));
        let currentProducts = [];
        if (settingsSnap.exists() && Array.isArray(settingsSnap.data()?.products)) {
          currentProducts = settingsSnap.data().products;
        } else {
          const allDocs = await getDocs(collection(db, 'products'));
          allDocs.forEach((d) => {
            const itm = d.data();
            if (itm && itm.id) currentProducts.push(itm);
          });
        }

        // If this product is set as incredible offer, unmark any previous incredible offer
        if (product.isIncredible) {
          currentProducts = currentProducts.map((p) => {
            if (p && p.id !== product.id && p.isIncredible) {
              return { ...p, isIncredible: false };
            }
            return p;
          });
        }

        const pIdx = currentProducts.findIndex((p) => p && p.id === product.id);
        if (pIdx >= 0) {
          currentProducts[pIdx] = { ...currentProducts[pIdx], ...product };
        } else {
          currentProducts = [product, ...currentProducts];
        }

        await setDoc(
          doc(db, 'settings', 'products'),
          { products: currentProducts, updatedAt: new Date().toISOString() },
          { merge: true }
        );
      } catch (syncErr) {
        console.warn('Sync settings/products warning:', syncErr);
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
