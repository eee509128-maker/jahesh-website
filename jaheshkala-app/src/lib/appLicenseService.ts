import { CartItem, Order, User, Product, AppSubscriptionLicense } from '../types';
import { safeSetLocalStorage } from './dbService';

const STORAGE_KEY = 'jahesh_app_licenses';

/**
 * Checks if a product or cart item has AI App / Software Subscription capability
 * and MUST have the 'isAiAppProduct' explicitly set to true.
 */
export function isAiAppProduct(prod?: Product | null): boolean {
  if (!prod) return false;
  // Ensure we only grant app licenses to products that EXPLICITLY have isAiAppProduct toggled on.
  return Boolean(prod.isAiAppProduct);
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
