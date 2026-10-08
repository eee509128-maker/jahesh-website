import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';

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

  // GET: Fetch all chats or single user chat from Firebase
  if (req.method === 'GET') {
    const { userId } = req.query;

    try {
      if (userId) {
        const uid = String(userId);
        const docRef = doc(db, 'chats', uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return res.status(200).json({ success: true, chat: docSnap.data() });
        }
        return res.status(200).json({ success: true, chat: null });
      }

      const snap = await getDocs(collection(db, 'chats'));
      const chats = [];
      snap.forEach((d) => {
        const item = d.data();
        if (item && item.userId && !String(item.userId).startsWith('SYSTEM_')) {
          chats.push(item);
        }
      });
      chats.sort((a, b) => new Date(b.lastUpdated || 0).getTime() - new Date(a.lastUpdated || 0).getTime());
      return res.status(200).json({ success: true, chats, count: chats.length });
    } catch (err) {
      console.error('Vercel API fetch chats error:', err);
      return res.status(500).json({ error: 'Failed to fetch chats', details: String(err) });
    }
  }

  // POST: Save or update chat in Firebase
  if (req.method === 'POST') {
    try {
      const incoming = req.body;
      if (!incoming || !incoming.userId) {
        return res.status(400).json({ error: 'Invalid chat payload. userId is required.' });
      }

      const uid = String(incoming.userId);
      const updatedItem = {
        userId: uid,
        userName: incoming.userName || 'کاربر جهش‌کالا',
        messages: Array.isArray(incoming.messages) ? incoming.messages : [],
        lastUpdated: incoming.lastUpdated || new Date().toISOString(),
        isReadByAdmin: incoming.isReadByAdmin !== undefined ? Boolean(incoming.isReadByAdmin) : false,
        needsHumanSupport: Boolean(incoming.needsHumanSupport),
      };

      const docRef = doc(db, 'chats', uid);
      await setDoc(docRef, updatedItem, { merge: true });

      return res.status(200).json({ success: true, chat: updatedItem });
    } catch (err) {
      console.error('Vercel API save chat error:', err);
      return res.status(500).json({ error: 'Failed to save chat', details: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
