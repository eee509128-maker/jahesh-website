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
      const docSnap = await getDoc(doc(db, 'settings', 'banners'));
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && Array.isArray(data.banners)) {
          return res.status(200).json(data.banners);
        }
      }
    } catch (err) {
      console.warn('API fetch banners error:', err);
    }
    return res.status(200).json([]);
  }

  if (req.method === 'POST') {
    try {
      const banners = req.body;
      if (Array.isArray(banners)) {
        await setDoc(doc(db, 'settings', 'banners'), { banners, updatedAt: new Date().toISOString() });
        return res.status(200).json({ success: true, count: banners.length });
      }
      return res.status(400).json({ error: 'Banners must be an array' });
    } catch (err) {
      console.error('API save banners error:', err);
      return res.status(500).json({ error: 'Failed to save banners', details: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
