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
      const snap = await getDocs(collection(db, 'coupons'));
      const coupons = [];
      snap.forEach((d) => {
        const item = d.data();
        if (item && item.id) coupons.push(item);
      });
      return res.status(200).json({ success: true, coupons });
    } catch (err) {
      console.warn('API fetch coupons error:', err);
      return res.status(200).json({ success: true, coupons: [] });
    }
  }

  if (req.method === 'POST') {
    try {
      const coupon = req.body;
      if (!coupon || !coupon.id) {
        return res.status(400).json({ error: 'Coupon ID is required' });
      }
      coupon.updatedAt = new Date().toISOString();
      await setDoc(doc(db, 'coupons', String(coupon.id)), coupon, { merge: true });
      return res.status(200).json({ success: true, coupon });
    } catch (err) {
      console.error('API save coupon error:', err);
      return res.status(500).json({ error: 'Failed to save coupon', details: String(err) });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: 'Coupon ID is required' });
      await deleteDoc(doc(db, 'coupons', String(id)));
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to delete coupon', details: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
