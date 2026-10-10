import { safeSetLocalStorage } from './dbService';
import { CartItem, Order, User, AmlakSubscriptionLicense } from '../types';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

const STORAGE_KEY = 'jahesh_amlak_licenses';

/**
 * Checks if a cart or order contains the Jahesh Real Estate Management SaaS package
 * Strictly matches Real Estate Management products only (NOT generic subscriptions or other apps like Shantia).
 */
export function isAmlakProduct(item?: CartItem | null): boolean {
  if (!item || !item.product) return false;
  const prod = item.product;
  const id = String(prod.id || '').toLowerCase().trim();
  const title = String(prod.title || '').trim();

  if (id === 'pkg-amlak-jahesh' || id === 'amlak-jahesh') {
    return true;
  }

  // Must explicitly mention real estate / amlak management and NOT be other apps
  if (
    title.includes('مدیریت املاک') ||
    title.includes('سامانه مدیریت املاک') ||
    title.includes('مشاورین املاک') ||
    (title.includes('املاک') && !title.includes('شنتیا') && !title.includes('اپلیکیشن'))
  ) {
    return true;
  }

  return false;
}

export function hasAmlakInItems(items?: CartItem[] | null): boolean {
  if (!Array.isArray(items)) return false;
  return items.some(isAmlakProduct);
}

/**
 * Deterministic hash function ensuring password never changes randomly
 */
function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/**
 * Computes a 100% stable, deterministic password from seed (exact username)
 */
export function generateDeterministicAmlakPassword(seed: string): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const cleanSeed = (seed || 'jahesh').toLowerCase().trim();
  const num = hashString(cleanSeed + '_jahesh_amlak_secret_salt_2026');
  const digits = 1000 + (num % 9000);
  let letters = '';
  let temp = Math.floor(num / 13);
  for (let i = 0; i < 4; i++) {
    letters += chars[temp % chars.length];
    temp = Math.floor(temp / chars.length) + (i * 7) + 3;
  }
  return `JK-${digits}${letters}`;
}

export function generateDeterministicLicenseKey(seed: string): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const cleanSeed = (seed || 'jahesh').toLowerCase().trim();
  const num = hashString(cleanSeed + '_license_key_salt_2026');
  let keyChars = '';
  let temp = num;
  for (let i = 0; i < 5; i++) {
    keyChars += chars[temp % chars.length];
    temp = Math.floor(temp / chars.length) + (i * 5) + 1;
  }
  return `JA-AMLAK-2026-${keyChars}`;
}

/**
 * Generates or retrieves an existing permanent license for the buyer.
 * Uses the EXACT username registered in Jahesh Kala.
 */
export function generateAmlakLicense(
  order: Partial<Order>,
  user?: User | null
): AmlakSubscriptionLicense {
  // 1. Derive EXACT username from user's registration in Jahesh Kala (No unwanted prefixes)
  let exactUsername = '';
  if (user?.username && user.username.trim().length > 0) {
    exactUsername = user.username.trim();
  } else if (order.customerPhone && order.customerPhone.trim().length > 0) {
    exactUsername = order.customerPhone.trim();
  } else if (user?.phone && user.phone.trim().length > 0) {
    exactUsername = user.phone.trim();
  } else if (order.trackingCode) {
    exactUsername = order.trackingCode.trim();
  } else if (order.id) {
    exactUsername = order.id.trim();
  } else {
    exactUsername = 'jahesh_user';
  }

  // If order already has a persistent license, sanitize its username and return it
  if (order.amlakLicense && order.amlakLicense.password && order.amlakLicense.username) {
    const cleanLicUser = order.amlakLicense.username.startsWith('amlak_')
      ? exactUsername || order.amlakLicense.username.replace('amlak_', '')
      : order.amlakLicense.username;
    
    const updatedLic = {
      ...order.amlakLicense,
      username: cleanLicUser,
    };
    saveAmlakLicenseLocally(updatedLic);
    syncAmlakLicenseWithServer(updatedLic).catch(() => {});
    return updatedLic;
  }

  // 3. Check if local storage already has this user's license
  const localLicenses = getLocalAmlakLicenses();
  const existing = localLicenses.find(
    (l) => l.username.toLowerCase() === exactUsername.toLowerCase()
  );
  if (existing) {
    return existing;
  }

  // 4. Stable deterministic password & license key matching this exact username
  const generatedPassword = generateDeterministicAmlakPassword(exactUsername);
  const licenseKey = generateDeterministicLicenseKey(exactUsername);

  const amlakItem = (order.items || []).find(isAmlakProduct);
  const days = amlakItem?.subscriptionDays || 30;

  const now = new Date();
  const expireDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

  const license: AmlakSubscriptionLicense = {
    username: exactUsername,
    password: generatedPassword,
    licenseKey,
    buyerName: order.customerName || user?.fullName || exactUsername,
    phone: order.customerPhone || user?.phone || '',
    days,
    startDate: now.toISOString(),
    expiresAt: expireDate.toISOString(),
    formattedExpiryFa: expireDate.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    status: 'active',
  };

  // Persist permanently
  saveAmlakLicenseLocally(license);
  syncAmlakLicenseWithServer(license).catch(() => {});

  return license;
}

export function saveAmlakLicenseLocally(license: AmlakSubscriptionLicense): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    let list: AmlakSubscriptionLicense[] = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(list)) list = [];
    
    const existingIdx = list.findIndex(
      (l) => l.username.toLowerCase() === license.username.toLowerCase()
    );
    if (existingIdx >= 0) {
      list[existingIdx] = { ...list[existingIdx], ...license };
    } else {
      list.unshift(license);
    }
    safeSetLocalStorage(STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.warn('Error saving amlak license locally:', err);
  }
}

export function getLocalAmlakLicenses(): AmlakSubscriptionLicense[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export async function syncAmlakLicenseWithServer(
  license: AmlakSubscriptionLicense
): Promise<void> {
  const licId = license.licenseKey || `lic-${license.username}`;
  const payload = {
    id: licId,
    username: license.username,
    password: license.password,
    licenseKey: license.licenseKey,
    productId: 'pkg-amlak-jahesh',
    productTitle: 'نرم‌افزار جامع مدیریت املاک جهش (اشتراک آنلاین و ابری)',
    appName: 'سامانه مدیریت املاک جهش',
    buyerName: license.buyerName,
    phone: license.phone,
    days: license.days,
    startDate: license.startDate,
    expiresAt: license.expiresAt,
    status: license.status || 'active',
    updatedAt: new Date().toISOString(),
  };

  // 1. Direct real-time persistence to Firebase Firestore
  try {
    await setDoc(doc(db, 'licenses', licId), payload, { merge: true });
  } catch (err) {
    console.warn('Firestore save amlak license error:', err);
  }

  // 2. Multi-endpoint server registration
  const endpoints = [
    '/api/app-auth/register-license',
    '/api/amlak/licenses',
    '/jaheshkala/api/app-auth/register-license',
    '/jaheshkala/api.php?action=app-auth/register-license',
    '/api.php?action=app-auth/register-license',
  ];

  for (const url of endpoints) {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {}
  }
}
