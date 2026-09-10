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
 * Generates an exclusive username, password, and license key for the buyer
 */
export function generateAmlakLicense(
  order: Partial<Order>,
  user?: User | null
): AmlakSubscriptionLicense {
  // Find subscription duration if specified
  const amlakItem = (order.items || []).find(isAmlakProduct);
  const days = amlakItem?.subscriptionDays || 30;

  // Clean username creation
  let cleanUserSlug = '';
  if (user?.username) {
    cleanUserSlug = user.username.toLowerCase().replace(/[^a-z0-9]/g, '');
  } else if (order.customerPhone) {
    cleanUserSlug = order.customerPhone.slice(-4);
  }
  if (!cleanUserSlug || cleanUserSlug.length < 3) {
    cleanUserSlug = Math.floor(1000 + Math.random() * 9000).toString();
  }

  const generatedUsername = `amlak_${cleanUserSlug}`;

  // Unique strong password for this customer
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let randChars = '';
  for (let i = 0; i < 4; i++) {
    randChars += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const randDigits = Math.floor(1000 + Math.random() * 9000);
  const generatedPassword = `JK-${randDigits}${randChars}`;

  // License key
  const licenseKey = `JA-AMLAK-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

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

  // Persist locally & try to sync with server
  saveAmlakLicenseLocally(license);
  syncAmlakLicenseWithServer(license).catch(() => {});

  return license;
}

export function saveAmlakLicenseLocally(license: AmlakSubscriptionLicense): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    let list: AmlakSubscriptionLicense[] = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(list)) list = [];
    
    // Replace if exists, or prepend
    const existingIdx = list.findIndex(
      (l) => l.username.toLowerCase() === license.username.toLowerCase()
    );
    if (existingIdx >= 0) {
      list[existingIdx] = license;
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
