import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';

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
      const snap = await getDocs(collection(db, 'products'));
      const products = [];
      snap.forEach((d) => {
        const item = d.data();
        if (item && item.id) products.push(item);
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

      return res.status(200).json({ success: true, product });
    } catch (err) {
      console.error('Save product error:', err);
      return res.status(500).json({ error: 'Failed to save product', details: String(err) });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: 'Product ID is required' });
      await deleteDoc(doc(db, 'products', String(id)));
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to delete product', details: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
