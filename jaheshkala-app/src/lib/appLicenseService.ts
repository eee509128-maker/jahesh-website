import { CartItem, Order, User, Product, AppSubscriptionLicense } from '../types';
import { safeSetLocalStorage } from './dbService';

const STORAGE_KEY = 'jahesh_app_licenses';

/**
 * Checks if a product or cart item has AI App / Software Subscription capability
 */
export function isAiAppProduct(prod?: Product | null): boolean {
  if (!prod) return false;
  return Boolean(
    prod.isAiAppProduct ||
    prod.isSubscription ||
    prod.id === 'pkg-amlak-jahesh' ||
    (prod.category && (
      prod.category.includes('نرم‌افزار') ||
      prod.category.includes('خدمات و نرم‌افزار') ||
      prod.category.includes('سامانه')
    ))
  );
}

export function isAiAppItem(item?: CartItem | null): boolean {
  if (!item || !item.product) return false;
  return isAiAppProduct(item.product);
}

export function hasAiAppInItems(items?: CartItem[] | null): boolean {
  if (!Array.isArray(items)) return false;
  return items.some(isAiAppItem);
}

/**
 * Deterministic hash function for repeatable password generation
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
 * Computes a stable, memorable password for the buyer
 */
export function generateDeterministicAppPassword(seed: string): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const cleanSeed = (seed || 'jahesh').toLowerCase().trim();
  const num = hashString(cleanSeed + '_jahesh_app_secret_salt_2026');
  const digits = 1000 + (num % 9000);
  let letters = '';
  let temp = Math.floor(num / 17);
  for (let i = 0; i < 4; i++) {
    letters += chars[temp % chars.length];
    temp = Math.floor(temp / chars.length) + (i * 5) + 2;
  }
  return `JK-${digits}${letters}`;
}

export function generateDeterministicAppLicenseKey(seed: string): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const cleanSeed = (seed || 'jahesh').toLowerCase().trim();
  const num = hashString(cleanSeed + '_app_license_key_2026');
  let keyChars = '';
  let temp = num;
  for (let i = 0; i < 6; i++) {
    keyChars += chars[temp % chars.length];
    temp = Math.floor(temp / chars.length) + (i * 7) + 3;
  }
  return `JA-APP-2026-${keyChars}`;
}

/**
 * Creates an AppSubscriptionLicense for an order with exact duration.
 * Can be called as:
 *  generateAppLicense(order, user) OR
 *  generateAppLicense(order, product, durationDays, user)
 */
export function generateAppLicense(
  order: Partial<Order>,
  productOrUser?: Partial<Product> | User | null,
  durationDays?: number,
  user?: User | null
): AppSubscriptionLicense {
  let resolvedProduct: Partial<Product> = {};
  let resolvedUser: User | null | undefined = user;
  let resolvedDays: number = durationDays || 7;

  // Check if second param is actually a User (has username/phone/fullName/role)
  if (productOrUser && ('role' in productOrUser || ('fullName' in productOrUser && !('price' in productOrUser)))) {
    resolvedUser = productOrUser as User;
    // Find AI product or first item from order
    const aiItem = order.items?.find((it) => isAiAppProduct(it?.product));
    if (aiItem && aiItem.product) {
      resolvedProduct = aiItem.product;
      resolvedDays = aiItem.subscriptionDays || aiItem.product.aiAppDefaultDays || 7;
    } else if (order.items && order.items[0]?.product) {
      resolvedProduct = order.items[0].product;
      resolvedDays = order.items[0].subscriptionDays || resolvedProduct.aiAppDefaultDays || 7;
    }
  } else if (productOrUser) {
    resolvedProduct = productOrUser as Partial<Product>;
    resolvedDays = durationDays || resolvedProduct.aiAppDefaultDays || 7;
  } else {
    // Neither passed, extract from order.items
    const aiItem = order.items?.find((it) => isAiAppProduct(it?.product));
    if (aiItem && aiItem.product) {
      resolvedProduct = aiItem.product;
      resolvedDays = aiItem.subscriptionDays || aiItem.product.aiAppDefaultDays || 7;
    }
  }

  // Determine clean username
  let exactUsername = '';
  if (resolvedUser?.username && resolvedUser.username.trim().length > 0) {
    exactUsername = resolvedUser.username.trim();
  } else if (order.customerPhone && order.customerPhone.trim().length > 0) {
    exactUsername = order.customerPhone.trim();
  } else if (resolvedUser?.phone && resolvedUser.phone.trim().length > 0) {
    exactUsername = resolvedUser.phone.trim();
  } else if (order.trackingCode) {
    exactUsername = order.trackingCode.trim();
  } else if (order.id) {
    exactUsername = order.id.trim();
  } else {
    exactUsername = 'user_' + Math.floor(1000 + Math.random() * 9000);
  }

  const safeDays = Math.max(1, resolvedDays || 7);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + safeDays * 24 * 60 * 60 * 1000);

  const licenseId = `lic_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const seed = `${exactUsername}_${resolvedProduct.id || 'app'}_${order.id || ''}`;

  const license: AppSubscriptionLicense = {
    id: licenseId,
    username: exactUsername,
    password: generateDeterministicAppPassword(seed),
    licenseKey: generateDeterministicAppLicenseKey(seed),
    productId: resolvedProduct.id || 'app-software',
    productTitle: resolvedProduct.title || 'اپلیکیشن و نرم‌افزار هوشمند جهش',
    appName: resolvedProduct.aiAppName || resolvedProduct.title || 'اپلیکیشن جهش',
    buyerName: order.customerName || resolvedUser?.fullName || 'خریدار محترم جهش‌کالا',
    phone: order.customerPhone || resolvedUser?.phone || '',
    orderId: order.id || '',
    days: safeDays,
    startDate: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
    status: 'active',
    apiEndpoint: 'https://jaheshit.ir/api/app-auth',
  };

  saveAppLicenseLocally(license);
  saveAppLicenseToServer(license).catch((e) => console.warn('Sync license notice:', e));

  return license;
}

/**
 * Local storage caching for offline resilience
 */
export function getAppLicensesLocally(): AppSubscriptionLicense[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return [];
}

export function saveAppLicenseLocally(license: AppSubscriptionLicense) {
  try {
    const existing = getAppLicensesLocally();
    const updated = [license, ...existing.filter((l) => l.id !== license.id && l.username !== license.username)];
    safeSetLocalStorage(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to save license locally', e);
  }
}

/**
 * Sends license to server persistence (data/app_licenses.json)
 */
export async function saveAppLicenseToServer(license: AppSubscriptionLicense): Promise<boolean> {
  try {
    const res = await fetch('/api/app-auth/register-license', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(license),
    });
    return res.ok;
  } catch (e) {
    console.warn('Network notice saving license to server:', e);
    return false;
  }
}

export const registerAppLicenseOnServer = saveAppLicenseToServer;

/**
 * Calculates remaining days and expiration state
 */
export function checkLicenseStatus(license?: AppSubscriptionLicense | null): {
  isExpired: boolean;
  daysRemaining: number;
  formattedExpiryFa: string;
} {
  if (!license || !license.expiresAt) {
    return { isExpired: true, daysRemaining: 0, formattedExpiryFa: 'منقضی شده' };
  }

  const expiry = new Date(license.expiresAt);
  const now = new Date();
  const diffMs = expiry.getTime() - now.getTime();
  const isExpired = diffMs <= 0;
  const daysRemaining = isExpired ? 0 : Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const formattedExpiryFa = expiry.toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return { isExpired, daysRemaining, formattedExpiryFa };
}

/**
 * Builds the pure technical API & Connection Specification for AI code generation (Google AI Studio, Antigravity, ChatGPT, Claude, Cursor)
 */
export function buildAiAppPrompt(
  product: Partial<Product>,
  platform: 'windows' | 'android' | 'cross-platform' | 'all' = 'all',
  customNote: string = ''
): string {
  const appName = product.aiAppName?.trim() || product.title?.trim() || 'نرم‌افزار جهش';
  const prodId = product.id || 'pkg-software-jahesh';

  let targetPlatform = 'Windows (Desktop / C# / Electron) & Android (Kotlin / Flutter / React Native)';
  if (platform === 'windows') targetPlatform = 'Windows Desktop (C# / .NET / WPF / Electron / Tauri)';
  else if (platform === 'android') targetPlatform = 'Android (Kotlin / Java / Flutter / React Native)';
  else if (platform === 'cross-platform') targetPlatform = 'Cross-Platform (Flutter / React Native / Tauri)';

  return `# ==============================================================================
# API & AUTHENTICATION SPECIFICATION: ${appName}
# Target Platform: ${targetPlatform}
# Product ID: ${prodId}
# Host Domain: https://jaheshit.ir
# ==============================================================================

# SYSTEM ARCHITECTURE & DYNAMIC SUBSCRIPTION POLICY:
# 1. DYNAMIC CUSTOMER-CHOSEN SUBSCRIPTION DURATION:
#    - The subscription duration is NOT hardcoded.
#    - When a customer purchases this product on JaheshKala (https://jaheshit.ir/jaheshkala),
#      they choose their own subscription duration at checkout (e.g., 1 day, 7 days, 30 days, 90 days, 365 days, or custom days).
#    - The server dynamically issues a unique username, password, and licenseKey tied strictly to that order and duration.
#    - On login, the server calculates and returns "daysRemaining", "expiresAt", and "status" dynamically.
#
# 2. STRICT PRODUCT ISOLATION (PRODUCT-SPECIFIC AUTH):
#    - Authentication credentials are valid ONLY for Product ID "${prodId}".
#    - If a user attempts to log in using credentials issued for another Jahesh product,
#      the server strictly rejects access (returns HTTP 401 / productMismatch: true).

# ==============================================================================
# 1. USER LOGIN & AUTHENTICATION ENDPOINT
# ==============================================================================
# HTTP Method: POST
# URL: https://jaheshit.ir/api/app-auth
# Headers:
#   Content-Type: application/json
#
# Request Body (JSON):
{
  "username": "<USER_ENTERED_PHONE_OR_USERNAME>",
  "password": "<USER_ENTERED_PASSWORD_OR_LICENSE_KEY>",
  "productId": "${prodId}"
}

# --- Response Case A: 200 OK (Active License) ---
# Description: Valid credentials for this product with active subscription days remaining.
{
  "success": true,
  "authenticated": true,
  "expired": false,
  "status": "active",
  "token": "SECURE_BEARER_AUTH_TOKEN",
  "licenseKey": "JA-APP-2026-XXXXX",
  "daysRemaining": 30,
  "startDate": "2026-09-16T10:00:00.000Z",
  "expiresAt": "2026-10-16T10:00:00.000Z",
  "productId": "${prodId}",
  "productTitle": "${appName}",
  "user": {
    "username": "09151234567",
    "fullName": "نام خریدار",
    "phone": "09151234567"
  },
  "message": "ورود موفقیت‌آمیز بود. اشتراک فعال است."
}

# --- Response Case B: 200 OK (Subscription Expired) ---
# Description: Valid account, but the purchased subscription period has ended (daysRemaining <= 0).
{
  "success": false,
  "authenticated": true,
  "expired": true,
  "status": "expired",
  "daysRemaining": 0,
  "expiresAt": "2026-09-01T00:00:00.000Z",
  "productId": "${prodId}",
  "message": "مدت زمان اشتراک شما به پایان رسیده است. جهت تمدید اشتراک به سایت جهش‌کالا مراجعه فرمایید.",
  "renewUrl": "https://jaheshit.ir/jaheshkala"
}

# --- Response Case C: 401 Unauthorized (Product Mismatch / Wrong Credentials) ---
# Description: User credentials are invalid OR belong to a different product on JaheshKala.
{
  "success": false,
  "authenticated": false,
  "expired": false,
  "productMismatch": true,
  "message": "نام کاربری، رمز عبور یا لایسنس برای این نرم‌افزار معتبر نمی‌باشد."
}

# ==============================================================================
# 2. SESSION HEARTBEAT & TOKEN VERIFICATION ENDPOINT
# ==============================================================================
# HTTP Method: POST
# URL: https://jaheshit.ir/api/app-auth/verify
# Headers:
#   Content-Type: application/json
#   Authorization: Bearer <TOKEN>
#
# Request Body (JSON):
{
  "token": "<SAVED_AUTH_TOKEN_OR_LICENSE_KEY>",
  "username": "<USER_OR_PHONE>",
  "productId": "${prodId}"
}

# ==============================================================================
# 3. CLIENT IMPLEMENTATION & UX REQUIREMENTS
# ==============================================================================
# 1. On App Launch: Check local secure storage for saved session token.
#    - If token exists, call /api/app-auth/verify with "productId": "${prodId}".
#    - If verified and active, open the main dashboard and display: "اعتبار اشتراک: X روز باقیمانده".
#    - If expired (expired: true or daysRemaining <= 0), lock the application, wipe cached data, and show renewal modal with link to https://jaheshit.ir/jaheshkala.
# 2. Login View Requirements:
#    - Input 1: Username / Mobile Number (نام کاربری یا شماره همراه)
#    - Input 2: Password / License Key (رمز عبور یا کلید لایسنس)
#    - Action Button: "ورود به نرم‌افزار"
#    - Link: "خرید یا تمدید اشتراک در جهش‌کالا" -> Open https://jaheshit.ir/jaheshkala
# 3. Offline Grace Period: If network is offline, cache the last verified expiry timestamp and allow temporary access until connection is restored.
${customNote ? `#\n# 4. CUSTOM APP SPECIFICATIONS:\n# ${customNote}` : ''}`;
}
