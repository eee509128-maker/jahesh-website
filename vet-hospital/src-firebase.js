import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';

const firebaseConfig = {
  projectId: "tranquil-keyword-5ggh3",
  appId: "1:39375983688:web:640573d31d23e5fe43b47d",
  apiKey: "AIzaSyBoilrOWTMjbpG1IHvKDkRD9Dm20Pl7UW8",
  authDomain: "tranquil-keyword-5ggh3.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-jaheshwebsite-13126c61-5143-4f84-b87e-dcc220de14bc",
  storageBucket: "tranquil-keyword-5ggh3.firebasestorage.app",
  messagingSenderId: "39375983688",
  oAuthClientId: "39375983688-o7nkvdjv9ov3kf7fetf1jf4h8mnolueq.apps.googleusercontent.com"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export const VetFirebase = {
  db,
  app,
  isReady: true,

  // USERS
  async getUsers() {
    try {
      const snap = await getDocs(collection(db, 'users'));
      const list = [];
      snap.forEach(d => {
        list.push({ id: d.id, ...d.data() });
      });
      return list;
    } catch (err) {
      console.warn('VetFirebase getUsers error:', err);
      return [];
    }
  },

  async saveUser(user) {
    try {
      const docId = String(user.id || user.username || ('u-' + Date.now()));
      const docRef = doc(db, 'users', docId);
      const cleanUser = {
        ...user,
        id: docId,
        username: String(user.username || '').trim().toLowerCase(),
        updatedAt: new Date().toISOString()
      };
      await setDoc(docRef, cleanUser, { merge: true });
      return true;
    } catch (err) {
      console.error('VetFirebase saveUser error:', err);
      throw err;
    }
  },

  async deleteUser(userId) {
    try {
      await deleteDoc(doc(db, 'users', String(userId)));
      return true;
    } catch (err) {
      console.error('VetFirebase deleteUser error:', err);
      throw err;
    }
  },

  onUsersChange(callback) {
    try {
      return onSnapshot(collection(db, 'users'), (snap) => {
        const list = [];
        snap.forEach(d => list.push({ id: d.id, ...d.data() }));
        callback(list);
      }, (err) => console.warn('Users onSnapshot error:', err));
    } catch (e) {
      console.warn('onUsersChange exception:', e);
      return () => {};
    }
  },

  // PROFESSORS
  async getProfessors() {
    try {
      const snap = await getDocs(collection(db, 'professors'));
      const list = [];
      snap.forEach(d => {
        list.push({ id: d.id, ...d.data() });
      });
      return list;
    } catch (err) {
      console.warn('VetFirebase getProfessors error:', err);
      return [];
    }
  },

  async saveProfessor(prof) {
    try {
      const docId = String(prof.id || ('prof-' + Date.now()));
      const docRef = doc(db, 'professors', docId);
      const cleanProf = {
        ...prof,
        id: docId,
        updatedAt: new Date().toISOString()
      };
      await setDoc(docRef, cleanProf, { merge: true });
      return true;
    } catch (err) {
      console.error('VetFirebase saveProfessor error:', err);
      throw err;
    }
  },

  async deleteProfessor(profId) {
    try {
      await deleteDoc(doc(db, 'professors', String(profId)));
      return true;
    } catch (err) {
      console.error('VetFirebase deleteProfessor error:', err);
      throw err;
    }
  },

  onProfessorsChange(callback) {
    try {
      return onSnapshot(collection(db, 'professors'), (snap) => {
        const list = [];
        snap.forEach(d => list.push({ id: d.id, ...d.data() }));
        callback(list);
      }, (err) => console.warn('Professors onSnapshot error:', err));
    } catch (e) {
      console.warn('onProfessorsChange exception:', e);
      return () => {};
    }
  },

  // APPOINTMENTS
  async getAppointments() {
    try {
      const snap = await getDocs(collection(db, 'vet_appointments'));
      const list = [];
      snap.forEach(d => {
        list.push({ id: d.id, ...d.data() });
      });
      return list;
    } catch (err) {
      console.warn('VetFirebase getAppointments error:', err);
      return [];
    }
  },

  async saveAppointment(appt) {
    try {
      const docId = String(appt.id || appt.trackingCode || ('appt-' + Date.now()));
      const docRef = doc(db, 'vet_appointments', docId);
      const cleanAppt = {
        ...appt,
        id: docId,
        createdAt: appt.createdAt || new Date().toISOString()
      };
      await setDoc(docRef, cleanAppt, { merge: true });
      return true;
    } catch (err) {
      console.error('VetFirebase saveAppointment error:', err);
      throw err;
    }
  },

  onAppointmentsChange(callback) {
    try {
      return onSnapshot(collection(db, 'vet_appointments'), (snap) => {
        const list = [];
        snap.forEach(d => list.push({ id: d.id, ...d.data() }));
        callback(list);
      }, (err) => console.warn('Appointments onSnapshot error:', err));
    } catch (e) {
      console.warn('onAppointmentsChange exception:', e);
      return () => {};
    }
  }
};

if (typeof window !== 'undefined') {
  window.VetFirebase = VetFirebase;
}
