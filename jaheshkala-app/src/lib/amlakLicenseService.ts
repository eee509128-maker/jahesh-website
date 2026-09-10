import { CartItem, Order, User, AmlakSubscriptionLicense } from '../types';

const STORAGE_KEY = 'jahesh_amlak_licenses';

/**
 * Checks if a cart or order contains the Jahesh Real Estate Management SaaS package
 */
export function isAmlakProduct(item?: CartItem | null): boolean {
  if (!item || !item.product) return false;
  const prod = item.product;
  return (
    prod.id === 'pkg-amlak-jahesh' ||
    Boolean(prod.isSubscription) ||
    Boolean(prod.title && prod.title.includes('املاک'))
  );
}

export function hasAmlakInItems(items: CartItem[]): boolean {
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
 * Computes a 100% stable, deterministic password from seed (username, order ID, phone)
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
 * Fixed and permanent across all renders and reloads.
 */
export function generateAmlakLicense(
  order: Partial<Order>,
  user?: User | null
): AmlakSubscriptionLicense {
  // 1. If order already has a persistent license, return it immediately without re-calculating!
  if (order.amlakLicense && order.amlakLicense.password && order.amlakLicense.username) {
    saveAmlakLicenseLocally(order.amlakLicense);
    syncAmlakLicenseWithServer(order.amlakLicense).catch(() => {});
    return order.amlakLicense;
  }

  // 2. Derive stable username
  let cleanUserSlug = '';
  if (user?.username) {
    cleanUserSlug = user.username.toLowerCase().replace(/[^a-z0-9]/g, '');
  } else if (order.customerPhone) {
    cleanUserSlug = order.customerPhone.slice(-4);
  } else if (order.trackingCode) {
    cleanUserSlug = order.trackingCode.replace(/[^a-z0-9]/gi, '').slice(-5).toLowerCase();
  } else if (order.id) {
    cleanUserSlug = order.id.replace(/[^a-z0-9]/gi, '').slice(-5).toLowerCase();
  }

  if (!cleanUserSlug || cleanUserSlug.length < 3) {
    cleanUserSlug = 'user' + (order.trackingCode || '1395');
  }

  const generatedUsername = `amlak_${cleanUserSlug}`;

  // 3. Check if local storage already has this user's license
  const localLicenses = getLocalAmlakLicenses();
  const existing = localLicenses.find(
    (l) => l.username.toLowerCase() === generatedUsername.toLowerCase()
  );
  if (existing) {
    return existing;
  }

  // 4. Deterministic stable password (NEVER changes across renders!)
  const seed = generatedUsername;
  const generatedPassword = generateDeterministicAmlakPassword(seed);
  const licenseKey = generateDeterministicLicenseKey(seed);

  const amlakItem = (order.items || []).find(isAmlakProduct);
  const days = amlakItem?.subscriptionDays || 30;

  const now = new Date();
  const expireDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

  const license: AmlakSubscriptionLicense = {
    username: generatedUsername,
    password: generatedPassword,
    licenseKey,
    buyerName: order.customerName || user?.fullName || 'کاربر گرامی جهش‌کالا',
    phone: order.customerPhone || user?.phone || '',
    days,
    startDate: now.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    expiresAt: expireDate.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
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
  try {
    await fetch('/api/amlak/licenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(license),
    });
  } catch (err) {
    console.warn('Failed to sync license with server:', err);
  }
}
