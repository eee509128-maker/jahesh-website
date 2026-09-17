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
      const snap = await getDocs(collection(db, 'tools'));
      const tools = [];
      snap.forEach((d) => {
        const item = d.data();
        if (item && item.id) tools.push(item);
      });
      return res.status(200).json(tools);
    } catch (err) {
      console.warn('API fetch tools error:', err);
      return res.status(200).json([]);
    }
  }

  if (req.method === 'POST') {
    try {
      const tool = req.body;
      if (!tool || !tool.id) {
        return res.status(400).json({ error: 'Tool ID is required' });
      }
      tool.updatedAt = new Date().toISOString();
      await setDoc(doc(db, 'tools', String(tool.id)), tool, { merge: true });
      return res.status(200).json({ success: true, tool });
    } catch (err) {
      console.error('API save tool error:', err);
      return res.status(500).json({ error: 'Failed to save tool', details: String(err) });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: 'Tool ID is required' });
      await deleteDoc(doc(db, 'tools', String(id)));
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to delete tool', details: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
