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
 * Builds the official AI Master Prompt for Google Antigravity, Google AI Studio, Cursor, Claude & ChatGPT
 */
export function buildAiAppPrompt(
  product: Partial<Product>,
  platform: 'windows' | 'android' | 'cross-platform' | 'all' = 'all',
  customNote: string = ''
): string {
  const appName = product.aiAppName?.trim() || product.title?.trim() || 'نرم‌افزار اختصاصی جهش';
  const prodId = product.id || 'pkg-software-jahesh';
  const defaultDays = product.aiAppDefaultDays || 7;

  let platformNameFa = 'ویندوز (Desktop / C# / Electron) و موبایل اندروید (Android / Flutter)';
  if (platform === 'windows') platformNameFa = 'ویندوز (Windows Desktop Application)';
  else if (platform === 'android') platformNameFa = 'اندروید (Android Mobile Application)';
  else if (platform === 'cross-platform') platformNameFa = 'کراس‌پلتفرم (Flutter / React Native / Tauri)';

  return `# پرامپت اختصاصی توسعه اپلیکیشن با اتصال به سامانه لاگین و اشتراک جهش‌کالا

## مخاطب هوش مصنوعی:
تو یک مهندس ارشد نرم‌افزار و معمار سیستم هستی. من می‌خواهم برای «${appName}» یک اپلیکیشن حرفه‌ای در پلتفرم **${platformNameFa}** طراحی و کدنویسی کنی.

---

## ۱. مأموریت اصلی و نیازمندی حیاتی:
این اپلیکیشن مستقیماً به سیستم احراز هویت و مدیریت اشتراک وب‌سایت **جهش‌کالا (jaheshit.ir)** متصل است.
کاربران اشتراک خود را (مثلاً اشتراک ${defaultDays} روزه، ۱ ماهه، ۱ ساله یا پکیج‌های اختصاصی) از سایت جهش‌کالا خریداری می‌کنند و پس از پرداخت، یک **نام کاربری** و **رمز عبور اختصاصی** دریافت می‌کنند.
آن‌ها این اطلاعات را در صفحه لاگین اپلیکیشن وارد می‌کنند و برنامه باید با سرور جهش‌کالا ارتباط برقرار کرده و دسترسی را فعال کند.

---

## ۲. مشخصات اندپوینت‌های وب‌سرویس و API احراز هویت جهش‌کالا:

### اندپوینت لاگین کاربر (User Authentication):
- **آدرس:** \`https://jaheshit.ir/api/app-auth\`
- **متد:** \`POST\`
- **فرمت ارسال (JSON):**
\`\`\`json
{
  "username": "نام کاربری یا شماره موبایل خریدار",
  "password": "رمز عبور اختصاصی دریافت‌شده از جهش‌کالا",
  "productId": "${prodId}"
}
\`\`\`

### پاسخ سرور در صورت موفقیت و داشتن اشتراک فعال (HTTP 200):
\`\`\`json
{
  "success": true,
  "authenticated": true,
  "expired": false,
  "status": "active",
  "token": "JWT_OR_SECURE_AUTH_TOKEN",
  "daysRemaining": ${defaultDays},
  "startDate": "2026-09-16T10:00:00.000Z",
  "expiresAt": "2026-09-23T10:00:00.000Z",
  "licenseKey": "JA-APP-2026-XXXXX",
  "productId": "${prodId}",
  "productTitle": "${appName}",
  "user": {
    "username": "...",
    "fullName": "نام خریدار",
    "phone": "0915..."
  },
  "message": "ورود موفقیت‌آمیز بود. اشتراک شما دارای ${defaultDays} روز اعتبار است."
}
\`\`\`

### پاسخ سرور در صورت اشتباه بودن اطلاعات ورود (HTTP 401):
\`\`\`json
{
  "success": false,
  "authenticated": false,
  "expired": false,
  "message": "نام کاربری یا رمز عبور اشتباه است."
}
\`\`\`

### پاسخ سرور در صورت منقضی شدن اشتراک کاربر (HTTP 403 یا Flag):
\`\`\`json
{
  "success": false,
  "authenticated": true,
  "expired": true,
  "status": "expired",
  "daysRemaining": 0,
  "message": "مدت اشتراک شما به پایان رسیده است. جهت تمدید اشتراک به وب‌سایت جهش کالا مراجعه فرمایید.",
  "renewUrl": "https://jaheshit.ir/jaheshkala"
}
\`\`\`

---

### اندپوینت استعلام سلامت نشست و اشتراک (Heartbeat / Token Verify):
- **آدرس:** \`https://jaheshit.ir/api/app-auth/verify\`
- **متد:** \`POST\`
- **هدرها:** \`Authorization: Bearer <TOKEN>\`
- **یا بدنه JSON:**
\`\`\`json
{
  "token": "TOKEN_SAVED_LOCALLY",
  "username": "نام کاربری",
  "productId": "${prodId}"
}
\`\`\`
- **رفتار برنامه:** در هر بار اجرای برنامه، این متد فراخوانی می‌شود. اگر پاسخ \`expired: true\` بود، کاربر فوراً از برنامه خارج (Logout) شده و دیالوگ پایان اشتراک با دکمه تمدید باز می‌شود.

---

## ۳. الزامات رابط کاربری (UI/UX) و رفتار اپلیکیشن:
۱. **صفحه لاگین زیبا و مدرن (Glassmorphism / تم تیره با لهجه‌های بنفش و طلایی جهش):**
   - فیلد نام کاربری (با آیکون کاربر)
   - فیلد رمز عبور (با دکمه مشاهده/مخفی‌سازی رمز)
   - دکمه ورود به حساب کاربری (با لودینگ هنگام درخواست)
   - لینک و دکمه برجسته: **«هنوز اشتراک ندارید یا قصد تمدید دارید؟ خرید اشتراک در جهش‌کالا»** که با کلیک روی آن، لینک \`https://jaheshit.ir/jaheshkala\` در مرورگر سیستم باز شود.
۲. **سیستم ذخیره‌سازی محلی امن (Remember Me / Auto-Login):**
   - پس از ورود موفق، توکن و وضعیت اشتراک در حافظه امن ذخیره شود تا نیاز نباشد کاربر هر بار نام کاربری و رمز را تایپ کند.
۳. **نمایش روزهای باقیمانده اشتراک در بالای برنامه (Header Badge):**
   - نمایش نشانگر وضعیت مانند: «⏳ اشتراک فعال: ${defaultDays} روز باقیمانده»
   - دکمه «تمدید اشتراک» در کنار نشانگر.
۴. **کنترل دقیق انقضای اشتراک (Subscription Expiry Handling):**
   - در صورت اتمام روزهای اشتراک (\`daysRemaining <= 0\` یا پاسخ \`expired: true\`)، بلافاصله برنامه قفل شده، دیتای موقت کاربر پاک شده و پیام محترمانه‌ای نمایش داده شود:
     *"مدت زمان اشتراک شما به پایان رسید. برای ادامه استفاده و دسترسی به امکانات نرم‌افزار، لطفاً اشتراک جدید تهیه فرمایید."*
   - دکمه هدایت مستقیم به جهش‌کالا.

---

## ۴. ویژگی‌ها و مشخصات اختصاصی نرم‌افزار ${appName}:
${customNote ? `- الزامات اختصاصی کارفرما: ${customNote}` : `- این نرم‌افزار باید دارای محیط کاربری سریع، زیبا، کارآمد، دکمه‌های واکنش‌گرا و قابلیت‌های کامل مرتبط با نام و موضوع «${appName}» باشد.`}
- زبان پیش‌فرض محیط کاربری: فارسی با فونت استاندارد و چیدمان راست‌به‌چپ (RTL).

---

## ۵. خروجی درخواستی از هوش مصنوعی:
لطفاً کدهای کامل پروژه، ساختار پوشه‌بندی، مدل داده، توابع درخواست به سرور (Fetch / Axios / HttpClient / Dio)، مدیریت نشست، و رابط کاربری را بدون هیچ‌گونه ناقصی یا Mock پیاده‌سازی کن تا بتوانم مستقیماً آن را کامپایل کرده و اجرا نمایم.
`;
}
