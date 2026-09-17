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
      const snap = await getDocs(collection(db, 'users'));
      const users = [];
      snap.forEach((d) => {
        const item = d.data();
        if (item && (item.id || item.username || item.phone)) {
          users.push(item);
        }
      });
      return res.status(200).json({ success: true, count: users.length, users });
    } catch (err) {
      console.error('Fetch users error:', err);
      return res.status(500).json({ error: 'Failed to fetch users', details: String(err) });
    }
  }

  if (req.method === 'POST') {
    try {
      const u = req.body || {};
      const cleanPhone = (u.phone || '').trim();
      const cleanUsername = (u.username || '').trim().toLowerCase();
      const userId = u.id || (cleanPhone ? `usr-${cleanPhone}` : (cleanUsername ? `usr-${cleanUsername}` : `usr-${Date.now()}`));

      const userDoc = {
        id: userId,
        fullName: u.fullName || u.full_name || cleanUsername || 'کاربر جهش',
        phone: cleanPhone,
        email: (u.email || '').trim(),
        username: cleanUsername,
        role: u.role || 'user',
        guild: u.guild || '',
        customGuild: u.customGuild || u.custom_guild || '',
        password: u.password || '',
        createdAt: u.createdAt || u.created_at || new Date().toLocaleDateString('fa-IR'),
        timestamp: u.timestamp || Date.now(),
        updatedAt: new Date().toISOString(),
      };

      const docRef = doc(db, 'users', userId);
      await setDoc(docRef, userDoc, { merge: true });

      return res.status(200).json({ success: true, user: userDoc });
    } catch (err) {
      console.error('Save user error:', err);
      return res.status(500).json({ error: 'Failed to save user', details: String(err) });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: 'User id is required' });
      await deleteDoc(doc(db, 'users', String(id)));
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to delete user', details: String(err) });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
