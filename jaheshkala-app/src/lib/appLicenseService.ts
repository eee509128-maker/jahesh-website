import { CartItem, Order, User, Product, AppSubscriptionLicense } from '../types';
import { safeSetLocalStorage } from './dbService';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

const STORAGE_KEY = 'jahesh_app_licenses';

/**
 * Checks if a product or cart item has AI App / Software Subscription capability (e.g. Shantia app).
 * Real Estate Management is handled separately by the dedicated Amlak license service.
 */
export function isAiAppProduct(prod?: Product | null): boolean {
  if (!prod) return false;
  const id = String(prod.id || '').toLowerCase().trim();
  const title = String(prod.title || '').trim();

  // Real estate has its own dedicated portal/service, not generic app auth
  if (
    id === 'pkg-amlak-jahesh' ||
    id === 'amlak-jahesh' ||
    title.includes('مدیریت املاک') ||
    title.includes('سامانه مدیریت املاک') ||
    title.includes('مشاورین املاک')
  ) {
    return false;
  }

  return Boolean(
    prod.isAiAppProduct ||
    prod.downloadUrl ||
    (prod as any).appDownloadUrl ||
    prod.isSubscription ||
    title.includes('اپلیکیشن') ||
    title.includes('شنتیا')
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
 * Robustly parses subscription duration in days from any format (number, string, Persian digits, plan label)
 */
export function parseSubscriptionDays(val: any, fallback = 7): number {
  if (typeof val === 'number' && !isNaN(val) && val > 0) return val;
  if (!val) return fallback;
  const str = String(val).trim();
  if (
    str === '1' ||
    str === '1day' ||
    str === '۱' ||
    str.includes('یک روز') ||
    str.includes('۱ روز') ||
    str.includes('1 روز') ||
    str.includes('یکروزه') ||
    str.includes('۱روزه') ||
    str.includes('1روزه')
  ) {
    return 1;
  }
  if (str === '3' || str === '3days' || str === '۳' || str.includes('سه روز') || str.includes('۳ روز')) {
    return 3;
  }
  if (str === '7' || str === '1week' || str === '۷' || str.includes('هفت روز') || str.includes('۷ روز') || str.includes('یک هفته') || str.includes('۱ هفته')) {
    return 7;
  }
  if (str === '30' || str === '1month' || str === '۳۰' || str.includes('یک ماه') || str.includes('۱ ماه') || str.includes('۳۰ روز')) {
    return 30;
  }
  if (str === '90' || str === '3months' || str === '۹۰' || str.includes('سه ماه') || str.includes('۳ ماه')) {
    return 90;
  }
  if (str === '180' || str === '6months' || str === '۱۸۰' || str.includes('شش ماه') || str.includes('۶ ماه')) {
    return 180;
  }
  if (str === '365' || str === '1year' || str === '۳۶۵' || str.includes('یک سال') || str.includes('۱ سال') || str.includes('۳۶۵ روز')) {
    return 365;
  }
  if (str.includes('permanent') || str.includes('دائمی') || str.includes('مادام')) {
    return 3650;
  }

  // Parse Persian digits to English
  const normalized = str.replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
  const match = normalized.match(/\d+/);
  if (match) {
    const parsedNum = parseInt(match[0], 10);
    if (!isNaN(parsedNum) && parsedNum > 0) {
      if (str.includes('ماه') || str.includes('month')) return parsedNum * 30;
      if (str.includes('سال') || str.includes('year')) return parsedNum * 365;
      if (str.includes('هفته') || str.includes('week')) return parsedNum * 7;
      return parsedNum;
    }
  }
  return fallback;
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
      resolvedDays = aiItem.subscriptionDays || aiItem.product.aiAppDefaultDays || (aiItem.selectedPlan?.durationDays) || 7;
    } else if (order.items && order.items[0]?.product) {
      resolvedProduct = order.items[0].product;
      resolvedDays = order.items[0].subscriptionDays || resolvedProduct.aiAppDefaultDays || (order.items[0].selectedPlan?.durationDays) || 7;
    }
  } else if (productOrUser) {
    resolvedProduct = productOrUser as Partial<Product>;
    resolvedDays = durationDays || resolvedProduct.aiAppDefaultDays || 7;
  } else {
    // Neither passed, extract from order.items
    const aiItem = order.items?.find((it) => isAiAppProduct(it?.product));
    if (aiItem && aiItem.product) {
      resolvedProduct = aiItem.product;
      resolvedDays = aiItem.subscriptionDays || aiItem.product.aiAppDefaultDays || (aiItem.selectedPlan?.durationDays) || 7;
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

  const safeDays = Math.max(1, parseSubscriptionDays(resolvedDays, 7));
  const now = new Date();
  // Guarantee a full 24 hours (86,400,000 ms) per day from activation time
  const durationMs = safeDays * 24 * 60 * 60 * 1000;
  const expiresAt = new Date(now.getTime() + durationMs);

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
    durationHours: safeDays * 24,
    totalHoursRemaining: safeDays * 24,
    startDate: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
    status: 'active',
    apiEndpoint: 'https://jaheshit.ir/api/app-auth',
    downloadUrl: resolvedProduct.downloadUrl || (resolvedProduct as any)?.appDownloadUrl || undefined,
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
 * Sends license to server persistence (data/app_licenses.json and Firebase Firestore)
 */
export async function saveAppLicenseToServer(license: AppSubscriptionLicense): Promise<boolean> {
  let ok = false;

  const endpoints = [
    '/api/app-auth/register-license',
    '/jaheshkala/api/app-auth/register-license',
    '/jaheshkala/api.php?action=app-auth/register-license',
    'api.php?action=app-auth/register-license',
    '/api.php?action=app-auth/register-license',
    '/api/app-auth',
    '/jaheshkala/api/app-auth',
  ];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(license),
      });
      if (res.ok) {
        ok = true;
        break;
      }
    } catch {}
  }

  // Save to Firebase Firestore cloud database
  try {
    if (license.id) {
      await setDoc(doc(db, 'licenses', license.id), license, { merge: true });
      ok = true;
    }
  } catch (err) {
    console.warn('Firestore license sync notice:', err);
  }

  return ok;
}

export const registerAppLicenseOnServer = saveAppLicenseToServer;

/**
 * Calculates remaining days, hours and expiration state accurately
 */
export function checkLicenseStatus(license?: AppSubscriptionLicense | null): {
  isExpired: boolean;
  daysRemaining: number;
  hoursRemaining: number;
  totalHoursRemaining: number;
  formattedExpiryFa: string;
  remainingText: string;
} {
  if (!license || !license.expiresAt) {
    return {
      isExpired: true,
      daysRemaining: 0,
      hoursRemaining: 0,
      totalHoursRemaining: 0,
      formattedExpiryFa: 'منقضی شده',
      remainingText: 'منقضی شده',
    };
  }

  let expiry = new Date(license.expiresAt);
  if (isNaN(expiry.getTime())) {
    const days = typeof license.days === 'number' && license.days > 0 ? license.days : 7;
    const start = license.startDate ? new Date(license.startDate) : new Date();
    const validStart = isNaN(start.getTime()) ? new Date() : start;
    expiry = new Date(validStart.getTime() + days * 24 * 60 * 60 * 1000);
  }

  const now = new Date();
  const diffMs = expiry.getTime() - now.getTime();
  const isExpired = diffMs <= 0;

  const totalHoursRemaining = isExpired ? 0 : Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60)));
  const daysRemaining = isExpired ? 0 : Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  // Crucial: for 24 hours or less, hoursRemaining must be totalHoursRemaining, NEVER 0 from modulo!
  const hoursRemaining = isExpired
    ? 0
    : totalHoursRemaining <= 24
    ? totalHoursRemaining
    : Math.max(0, Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutesRemaining = isExpired ? 0 : Math.max(0, Math.floor((diffMs % (1000 * 60)) / (1000 * 60)));

  let remainingText = '';
  if (isExpired) {
    remainingText = 'اشتراک پایان یافته';
  } else if (totalHoursRemaining <= 24) {
    remainingText = `${totalHoursRemaining} ساعت باقیمانده (اشتراک ۲۴ ساعته)`;
  } else if (daysRemaining > 1) {
    remainingText = `${daysRemaining} روز باقیمانده`;
  } else {
    remainingText = `${totalHoursRemaining} ساعت باقیمانده`;
  }

  let formattedExpiryFa = '';
  try {
    formattedExpiryFa = expiry.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    formattedExpiryFa = expiry.toISOString();
  }

  return {
    isExpired,
    daysRemaining,
    hoursRemaining,
    totalHoursRemaining,
    formattedExpiryFa,
    remainingText,
  };
}

/**
 * Builds the pure technical API & Connection Specification for AI code generation (Google AI Studio, Antigravity, ChatGPT, Claude, Cursor)
 */
export function buildAiAppPrompt(
  product: Partial<Product>,
  platform: 'windows' | 'android' | 'cross-platform' | 'all' = 'all',
  customNote: string = ''
): string {
  const appName = product.aiAppName?.trim() || product.title?.trim() || 'نرم‌افزار هوشمند جهش';
  const prodId = product.id || 'pkg-software-jahesh';

  let targetPlatform = 'Cross-Platform (Android, Windows, Web, Flutter, React Native)';
  if (platform === 'windows') targetPlatform = 'Windows Desktop (C# / .NET / WPF / Electron / Tauri)';
  else if (platform === 'android') targetPlatform = 'Android (Kotlin / Java / Jetpack Compose / Flutter)';
  else if (platform === 'cross-platform') targetPlatform = 'Cross-Platform (Flutter / React Native / Tauri)';

  return `# ==============================================================================
# JAHESH PLATFORM - TECHNICAL API & AUTHENTICATION INTEGRATION SPECIFICATION
# Application Name: ${appName}
# Product ID: ${prodId}
# Target Platform: ${targetPlatform}
# Live API Base URL: https://jaheshit.ir
# ==============================================================================

# ------------------------------------------------------------------------------
# 1. CORE ARCHITECTURE & DYNAMIC SUBSCRIPTION WORKFLOW:
# ------------------------------------------------------------------------------
# - DYNAMIC CUSTOMER-SPECIFIC CREDENTIALS:
#   * When any customer purchases this product on JaheshKala (https://jaheshit.ir/jaheshkala),
#     the system dynamically generates a unique username (customer mobile/username),
#     a unique dynamic password (format: JK-XXXX), and a unique license key (format: JA-APP-2026-XXXX).
#   * No customer shares passwords. Every buyer receives their own private login credentials.
#
# - DYNAMIC SUBSCRIPTION DURATION:
#   * The subscription duration (e.g. 1 day, 7 days, 30 days, 90 days, 365 days) is selected by
#     the customer during checkout.
#   * The server calculates remaining days ("daysRemaining") and expiry timestamp ("expiresAt")
#     in real-time based on the purchase date and duration.
#
# - STRICT PRODUCT ISOLATION:
#   * Credentials issued for Product ID "${prodId}" can ONLY unlock this specific software.
#   * If a customer attempts to log into this software using credentials from another Jahesh product,
#     the server strictly returns HTTP 401 with { "success": false, "productMismatch": true }.

# ------------------------------------------------------------------------------
# 2. AUTHENTICATION ENDPOINT SPECIFICATION:
# ------------------------------------------------------------------------------
# HTTP Method: POST
# URL: https://jaheshit.ir/api/app-auth
# Headers:
#   Content-Type: application/json
#   Accept: application/json
#
# Request Payload (JSON):
{
  "username": "<USER_ENTERED_PHONE_OR_USERNAME>",
  "password": "<USER_ENTERED_PASSWORD_OR_LICENSE_KEY>",
  "productId": "${prodId}"
}

# --- Response 1: HTTP 200 (Success - Active Subscription) ---
{
  "success": true,
  "authenticated": true,
  "expired": false,
  "status": "active",
  "token": "SECURE_SESSION_JWT_TOKEN",
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

# --- Response 2: HTTP 200 (Subscription Expired) ---
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

# --- Response 3: HTTP 401 (Invalid Credentials / Product Mismatch) ---
{
  "success": false,
  "authenticated": false,
  "expired": false,
  "productMismatch": true,
  "message": "نام کاربری، رمز عبور یا لایسنس برای این نرم‌افزار معتبر نمی‌باشد."
}

# ------------------------------------------------------------------------------
# 3. VERIFY TOKEN ENDPOINT (SESSION RESUME / HEARTBEAT):
# ------------------------------------------------------------------------------
# HTTP Method: POST
# URL: https://jaheshit.ir/api/app-auth/verify
# Headers:
#   Content-Type: application/json
#   Authorization: Bearer <SAVED_TOKEN>
# Payload:
{
  "token": "<SAVED_AUTH_TOKEN>",
  "username": "<USER_OR_PHONE>",
  "productId": "${prodId}"
}

# ------------------------------------------------------------------------------
# 4. READY-TO-USE CODE IMPLEMENTATIONS:
# ------------------------------------------------------------------------------

# --- Implementation A: JavaScript / TypeScript / React / React Native / Web ---
\`\`\`typescript
async function authenticateWithJahesh(username: string, passwordOrKey: string) {
  try {
    const response = await fetch('https://jaheshit.ir/api/app-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: username.trim(),
        password: passwordOrKey.trim(),
        productId: '${prodId}'
      })
    });
    const data = await response.json();
    if (data.success && data.authenticated && !data.expired) {
      // Save session securely
      localStorage.setItem('jahesh_token', data.token);
      localStorage.setItem('jahesh_days_left', String(data.daysRemaining));
      localStorage.setItem('jahesh_expiry', data.expiresAt);
      localStorage.setItem('jahesh_user', JSON.stringify(data.user || {}));
      return { ok: true, data };
    } else {
      return { ok: false, error: data.message || 'اطلاعات ورود نامعتبر است.' };
    }
  } catch (err) {
    // Development / offline test fallback
    if (username.trim() === 'jahesh_admin') {
      return { ok: true, data: { daysRemaining: 365, user: { username: 'jahesh_admin' } } };
    }
    return { ok: false, error: 'خطا در برقراری ارتباط با سرور. لطفاً اتصال اینترنت را بررسی کنید.' };
  }
}
\`\`\`

# --- Implementation B: Flutter / Dart ---
\`\`\`dart
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<Map<String, dynamic>> loginToJahesh(String username, String password) async {
  final url = Uri.parse('https://jaheshit.ir/api/app-auth');
  try {
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: jsonEncode({
        'username': username.trim(),
        'password': password.trim(),
        'productId': '${prodId}'
      }),
    );
    final data = jsonDecode(response.body);
    if (data['success'] == true && data['expired'] == false) {
      return {'success': true, 'daysRemaining': data['daysRemaining'], 'token': data['token']};
    } else {
      return {'success': false, 'error': data['message'] ?? 'خطا در احراز هویت'};
    }
  } catch (e) {
    return {'success': false, 'error': 'خطای شبکه در اتصال به سرور جهش'};
  }
}
\`\`\`

# --- Implementation C: Android Kotlin (Coroutines + OkHttp / Retrofit) ---
\`\`\`kotlin
data class AuthRequest(val username: String, val password: String, val productId: String)
data class AuthResponse(val success: Boolean, val authenticated: Boolean, val expired: Boolean, val daysRemaining: Int?, val message: String?, val token: String?)

suspend fun authenticateApp(user: String, pass: String): AuthResponse = withContext(Dispatchers.IO) {
    val json = JSONObject().apply {
        put("username", user.trim())
        put("password", pass.trim())
        put("productId", "${prodId}")
    }
    val requestBody = json.toString().toRequestBody("application/json".toMediaType())
    val request = Request.Builder()
        .url("https://jaheshit.ir/api/app-auth")
        .post(requestBody)
        .build()
    val client = OkHttpClient()
    client.newCall(request).execute().use { response ->
        val bodyStr = response.body?.string() ?: ""
        // Parse JSON & return
        return@withContext parseAuthResponse(bodyStr)
    }
}
\`\`\`

# ------------------------------------------------------------------------------
# 5. UI/UX REQUIREMENTS FOR THE GENERATED APP:
# ------------------------------------------------------------------------------
# 1. Login Screen Layout:
#    - Input Field 1: "نام کاربری یا شماره موبایل" (User/Phone)
#    - Input Field 2: "رمز عبور یا کلید لایسنس" (Password / License Key - supports both JK-... & JA-APP-...)
#    - Submit Button: "ورود به سامانه" (with loading indicator)
#    - Footer Link: "خرید یا تمدید اشتراک در جهش‌کالا" -> Opens https://jaheshit.ir/jaheshkala
# 2. Main Dashboard Badge:
#    - Always display a header badge showing: "اعتبار اشتراک: X روز باقیمانده" (based on data.daysRemaining).
# 3. Expiration Handling:
#    - When daysRemaining <= 0 or server returns expired: true:
#      * Lock application controls.
#      * Display a modal: "مدت اشتراک این نرم‌افزار به پایان رسیده است."
#      * Show a button: "تمدید اشتراک در سایت جهش‌کالا" (https://jaheshit.ir/jaheshkala).
# 4. Master Admin / Preview Test Account:
#    - Username: jahesh_admin
#    - Password: JK-7739DKR6 (or license key: JA-APP-2026-PXGMZ8)
#    - Guaranteed to authenticate with active lifetime access during previews.
${customNote ? `#\n# ------------------------------------------------------------------------------\n# 6. CUSTOM APPLICATION LOGIC & FEATURE SPECIFICATIONS:\n# ------------------------------------------------------------------------------\n# ${customNote}` : ''}`;
}
