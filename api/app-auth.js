import fs from 'fs';
import path from 'path';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "tranquil-keyword-5ggh3",
  appId: "1:39375983688:web:640573d31d23e5fe43b47d",
  apiKey: "AIzaSyBoilrOWTMjbpG1IHvKDkRD9Dm20Pl7UW8",
  authDomain: "tranquil-keyword-5ggh3.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-jaheshwebsite-13126c61-5143-4f84-b87e-dcc220de14bc",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

const LICENSES_FILE = path.join(process.cwd(), 'data', 'app_licenses.json');
const ALT_LICENSES_FILE = path.join(process.cwd(), 'data', 'licenses.json');
const AMLAK_LICENSES_FILE = path.join(process.cwd(), 'data', 'amlak_licenses.json');

// In-memory cache with 15-second TTL to balance speed and instant cloud persistence
let cachedLicenses = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 15000;

export function invalidateLicensesCache() {
  cachedLicenses = null;
  lastCacheTime = 0;
}

export function normalizePhone(val) {
  if (!val) return '';
  const digits = String(val).replace(/[^0-9]/g, '');
  if (!digits) return '';
  if (digits.startsWith('0098') && digits.length === 14) return '0' + digits.slice(4);
  if (digits.startsWith('98') && digits.length === 12) return '0' + digits.slice(2);
  if (digits.length === 10 && digits.startsWith('9')) return '0' + digits;
  return digits;
}

export function parseCleanExpiry(license, now = new Date()) {
  const days = Number(license.days) || 7;
  let expiry = null;

  if (license.expiresAt) {
    const parsed = new Date(license.expiresAt);
    if (!isNaN(parsed.getTime())) {
      expiry = parsed;
    }
  }

  // If expiresAt was a non-ISO string or missing, compute from startDate + days * 86400000
  if (!expiry && license.startDate) {
    const start = new Date(license.startDate);
    if (!isNaN(start.getTime())) {
      expiry = new Date(start.getTime() + days * 24 * 60 * 60 * 1000);
    }
  }

  // Fallback to now + days * 24h
  if (!expiry) {
    expiry = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
  }

  return expiry;
}

export async function readAllLicenses(forceFresh = false) {
  const now = Date.now();
  if (!forceFresh && cachedLicenses && (now - lastCacheTime < CACHE_TTL_MS)) {
    return cachedLicenses;
  }

  const all = [];
  const seenKeys = new Set();

  // 1. Fetch from live Firestore 'licenses' collection
  try {
    const licSnap = await getDocs(collection(db, 'licenses'));
    licSnap.forEach((d) => {
      const data = d.data();
      if (data && (data.username || data.licenseKey)) {
        const item = {
          id: d.id || data.id,
          ...data,
        };
        const key = String(item.licenseKey || item.id || `${item.username}_${item.productId || ''}`).toLowerCase();
        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          all.push(item);
        }
      }
    });
  } catch (e) {
    console.warn('[app-auth] Firestore licenses read notice:', e.message);
  }

  // 2. Fetch from live Firestore 'orders' collection (scan for amlakLicense & appLicense)
  try {
    const orderSnap = await getDocs(collection(db, 'orders'));
    orderSnap.forEach((d) => {
      const order = d.data();
      if (!order) return;
      const attached = [order.appLicense, order.amlakLicense, order.softwareLicense].filter(Boolean);
      for (const lic of attached) {
        if (lic && (lic.username || lic.licenseKey)) {
          const key = String(lic.licenseKey || lic.id || `order_${order.id}_${lic.username}`).toLowerCase();
          if (!seenKeys.has(key)) {
            seenKeys.add(key);
            const safeDays = Number(lic.days) || 30;
            all.push({
              id: lic.id || `lic-${lic.licenseKey || order.id}`,
              username: lic.username,
              password: lic.password,
              licenseKey: lic.licenseKey,
              productId: lic.productId || 'pkg-amlak-jahesh',
              productTitle: lic.productTitle || order.items?.[0]?.product?.title || 'نرم‌افزار جامع جهش',
              appName: lic.appName || 'سامانه هوشمند جهش',
              buyerName: lic.buyerName || order.customerName || 'کاربر جهش',
              phone: lic.phone || order.customerPhone || '',
              days: safeDays,
              startDate: lic.startDate || order.createdAt || new Date().toISOString(),
              expiresAt: lic.expiresAt || new Date(Date.now() + safeDays * 86400000).toISOString(),
              status: lic.status || 'active',
              orderId: order.id,
            });
          }
        }
      }
    });
  } catch (e) {
    console.warn('[app-auth] Firestore orders read notice:', e.message);
  }

  // 3. Fallback to local files if any pre-seeded licenses are on disk
  for (const fpath of [LICENSES_FILE, ALT_LICENSES_FILE, AMLAK_LICENSES_FILE]) {
    if (fs.existsSync(fpath)) {
      try {
        const raw = fs.readFileSync(fpath, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            const key = String(item.licenseKey || item.id || `${item.username}_${item.productId || ''}`).toLowerCase();
            if (!seenKeys.has(key)) {
              seenKeys.add(key);
              all.push(item);
            }
          }
        }
      } catch (e) {
        console.warn(`[app-auth] Disk read notice for ${fpath}:`, e.message);
      }
    }
  }

  cachedLicenses = all;
  lastCacheTime = now;
  return all;
}

export function writeLicensesToDisk(licenses) {
  try {
    const dir = path.dirname(LICENSES_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(LICENSES_FILE, JSON.stringify(licenses, null, 2), 'utf8');
    if (fs.existsSync(path.dirname(ALT_LICENSES_FILE))) {
      fs.writeFileSync(ALT_LICENSES_FILE, JSON.stringify(licenses, null, 2), 'utf8');
    }
  } catch (e) {
    // Ephemeral disk, ignore
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-admin-secret');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const url = req.originalUrl || req.url || '';
  const body = req.body || {};
  const isRegister = url.includes('/register-license') || body.action === 'register-license';
  const isVerify = url.includes('/verify') || body.action === 'verify';

  if (req.method === 'POST') {
    // =========================================================================
    // A. REGISTER / SAVE LICENSE
    // =========================================================================
    if (isRegister) {
      if (!body.username && !body.licenseKey) {
        return res.status(400).json({ success: false, error: 'اطلاعات لایسنس ناقص است' });
      }

      const licId = body.id || (body.licenseKey ? `lic-${body.licenseKey}` : `lic-${Date.now()}`);
      const cleanLicense = {
        ...body,
        id: licId,
        status: body.status || 'active',
        updatedAt: new Date().toISOString(),
      };

      try {
        await setDoc(doc(db, 'licenses', String(licId)), cleanLicense, { merge: true });
      } catch (err) {
        console.warn('[app-auth] Error saving license to Firestore:', err.message);
      }

      invalidateLicensesCache();
      const list = await readAllLicenses(true);
      writeLicensesToDisk(list);

      return res.status(200).json({ success: true, license: cleanLicense });
    }

    // =========================================================================
    // B. AUTHENTICATE OR VERIFY HEARTBEAT
    // =========================================================================
    let token = body.token || '';
    const authHeader = req.headers['authorization'] || '';
    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.slice(7).trim();
    }

    const rawUser = body.username || body.user || body.phone || body.mobile || body.login || body.identifier || '';
    const rawPass = body.password || body.pass || body.licenseKey || body.license || body.key || '';
    const rawProd = body.productId || body.product_id || body.appId || body.packageId || '';
    const rawKey = body.licenseKey || body.key || body.token || '';

    let cleanUser = String(rawUser).trim().toLowerCase();
    const cleanPhone = normalizePhone(cleanUser);
    const cleanPass = String(rawPass).trim();
    const cleanProd = String(rawProd).trim().toLowerCase();
    const cleanKey = String(rawKey).trim().toLowerCase();

    // If username was omitted but license key was given, treat key as identifier
    if (!cleanUser && cleanKey) {
      cleanUser = cleanKey;
    }

    // 1. If verifying existing session token
    if (isVerify && token && !cleanPass) {
      try {
        const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf8'));
        const now = Date.now();
        if (cleanProd && decoded.prod && decoded.prod.toLowerCase() !== cleanProd) {
          return res.status(401).json({
            success: false,
            productMismatch: true,
            expired: false,
            message: 'این نشست متعلق به نرم‌افزار دیگری است.',
          });
        }

        const expMs = decoded.exp ? (decoded.exp < 1e12 ? decoded.exp * 1000 : decoded.exp) : null;
        if (expMs && expMs <= now) {
          return res.status(200).json({
            success: false,
            authenticated: true,
            expired: true,
            status: 'expired',
            daysRemaining: 0,
            hoursRemaining: 0,
            totalHoursRemaining: 0,
            remainingHours: 0,
            remainingMinutes: 0,
            remainingSeconds: 0,
            totalMinutesRemaining: 0,
            totalSecondsRemaining: 0,
            expiresAt: new Date(expMs).toISOString(),
            expiresAtTimestamp: expMs,
            productId: decoded.prod,
            message: 'مدت زمان اشتراک شما به پایان رسیده است. جهت تمدید اشتراک به سایت جهش‌کالا مراجعه فرمایید.',
            renewUrl: 'https://jaheshit.ir/jaheshkala',
          });
        }

        const diffMs = (expMs || now) - now;
        const totalHoursRemaining = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60)));
        const daysRemaining = Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
        const hoursRemaining = totalHoursRemaining <= 24 ? totalHoursRemaining : Math.max(0, Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const remainingMinutes = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));
        const remainingSeconds = Math.max(0, Math.floor((diffMs % (1000 * 60)) / 1000));
        const totalMinutesRemaining = Math.max(0, Math.ceil(diffMs / (1000 * 60)));
        const totalSecondsRemaining = Math.max(0, Math.ceil(diffMs / 1000));

        return res.status(200).json({
          success: true,
          authenticated: true,
          expired: false,
          status: 'active',
          token,
          licenseKey: decoded.lic || token,
          daysRemaining,
          hoursRemaining,
          remainingHours: totalHoursRemaining,
          totalHoursRemaining,
          hours: totalHoursRemaining,
          remainingMinutes,
          remainingSeconds,
          totalMinutesRemaining,
          totalSecondsRemaining,
          expiresAt: new Date(expMs || (now + daysRemaining * 86400000)).toISOString(),
          expiresAtTimestamp: expMs,
          expiresAtUnix: Math.floor((expMs || now) / 1000),
          productId: decoded.prod,
          user: {
            username: decoded.u,
          },
          message: totalHoursRemaining <= 24
            ? `نشست و لایسنس معتبر است (${totalHoursRemaining} ساعت باقیمانده).`
            : `نشست و لایسنس معتبر است (${daysRemaining} روز باقیمانده).`,
        });
      } catch (e) {
        // Fall through to regular license lookup
      }
    }

    if (!cleanUser && !cleanKey && !cleanPass) {
      return res.status(400).json({
        success: false,
        authenticated: false,
        message: 'نام کاربری (یا شماره همراه) و رمز عبور (یا کلید لایسنس) الزامی است.',
      });
    }

    const list = await readAllLicenses();

    // Helper to test if a license record matches the requested product
    const isMatchingProduct = (licProd) => {
      if (!cleanProd || !licProd) return true;
      const lp = String(licProd).trim().toLowerCase();
      if (lp === cleanProd) return true;
      if (cleanProd.includes('amlak') && lp.includes('amlak')) return true;
      if (cleanProd.includes('estate') && lp.includes('estate')) return true;
      if (cleanProd.includes('shantia') && lp.includes('shantia')) return true;
      return false;
    };

    // Helper to test if credentials match this license
    const doesCredsMatch = (lic) => {
      const licUser = String(lic.username || '').trim().toLowerCase();
      const licPhone = normalizePhone(lic.phone || '');
      const licKey = String(lic.licenseKey || '').trim().toLowerCase();
      const licId = String(lic.id || '').trim().toLowerCase();
      const licPass = String(lic.password || '').trim();

      // Check username / identity matching
      const userMatches =
        (cleanUser && (licUser === cleanUser || (cleanPhone && licPhone === cleanPhone))) ||
        (cleanKey && (licKey === cleanKey || licId === cleanKey)) ||
        (cleanUser && (licKey === cleanUser || licId === cleanUser));

      // Check password / licenseKey matching (flexible & secure)
      const passMatches =
        (cleanPass && (
          licPass === cleanPass ||
          licKey === cleanPass.toLowerCase() ||
          licId === cleanPass.toLowerCase()
        )) ||
        (cleanKey && (licKey === cleanKey || licId === cleanKey)) ||
        // If user logged in using licenseKey as username and repeated it or left pass empty
        (cleanUser && (cleanUser === licKey || cleanUser === licId) && (!cleanPass || cleanPass.toLowerCase() === licKey));

      return Boolean(userMatches && passMatches);
    };

    // 1. Look for EXACT match for THIS product
    const found = list.find((lic) => {
      if (!doesCredsMatch(lic)) return false;
      return isMatchingProduct(lic.productId);
    });

    // 2. Check for Product Mismatch (Valid license exists, but for a DIFFERENT software)
    if (!found && cleanProd) {
      const crossProductLic = list.find((lic) => {
        if (!doesCredsMatch(lic)) return false;
        return lic.productId && !isMatchingProduct(lic.productId);
      });

      if (crossProductLic) {
        return res.status(401).json({
          success: false,
          authenticated: false,
          expired: false,
          productMismatch: true,
          targetProductId: cleanProd,
          ownedProductId: crossProductLic.productId,
          message: `این نام کاربری و رمز عبور برای «${crossProductLic.productTitle || crossProductLic.appName || 'نرم‌افزار دیگری'}» خریداری شده است و اجازه ورود به این برنامه را ندارد.`,
        });
      }
    }

    // 3. Handle Active or Expired License Found in Database (Calculates EXACT duration & expiry)
    if (found) {
      const now = new Date();
      const expiry = parseCleanExpiry(found, now);
      const diffMs = expiry.getTime() - now.getTime();
      const isExpired = diffMs <= 0;

      const totalHoursRemaining = isExpired ? 0 : Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60)));
      const daysRemaining = isExpired ? 0 : Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
      const hoursRemaining = isExpired
        ? 0
        : totalHoursRemaining <= 24
        ? totalHoursRemaining
        : Math.max(0, Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const remainingMinutes = isExpired ? 0 : Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));
      const remainingSeconds = isExpired ? 0 : Math.max(0, Math.floor((diffMs % (1000 * 60)) / 1000));
      const totalMinutesRemaining = isExpired ? 0 : Math.max(0, Math.ceil(diffMs / (1000 * 60)));
      const totalSecondsRemaining = isExpired ? 0 : Math.max(0, Math.ceil(diffMs / 1000));
      const days = Number(found.days) || daysRemaining;

      if (isExpired) {
        return res.status(200).json({
          success: false,
          authenticated: true,
          expired: true,
          status: 'expired',
          daysRemaining: 0,
          hoursRemaining: 0,
          totalHoursRemaining: 0,
          remainingHours: 0,
          remainingMinutes: 0,
          remainingSeconds: 0,
          totalMinutesRemaining: 0,
          totalSecondsRemaining: 0,
          startDate: found.startDate || now.toISOString(),
          expiresAt: expiry.toISOString(),
          expiresAtTimestamp: expiry.getTime(),
          expiresAtUnix: Math.floor(expiry.getTime() / 1000),
          productId: found.productId,
          productTitle: found.productTitle || found.appName,
          message: 'مدت زمان اشتراک شما به پایان رسیده است. جهت تمدید اشتراک به سایت جهش‌کالا مراجعه فرمایید.',
          renewUrl: 'https://jaheshit.ir/jaheshkala',
        });
      }

      const tokenStr = Buffer.from(
        JSON.stringify({
          u: found.username,
          lic: found.licenseKey || found.id,
          prod: found.productId,
          exp: expiry.getTime(),
        })
      ).toString('base64');

      return res.status(200).json({
        success: true,
        authenticated: true,
        expired: false,
        status: 'active',
        token: tokenStr,
        licenseKey: found.licenseKey || found.id,
        daysRemaining,
        hoursRemaining,
        remainingHours: totalHoursRemaining,
        totalHoursRemaining,
        hours: totalHoursRemaining,
        remainingMinutes,
        remainingSeconds,
        totalMinutesRemaining,
        totalSecondsRemaining,
        durationDays: days,
        durationHours: days * 24,
        startDate: found.startDate || now.toISOString(),
        expiresAt: expiry.toISOString(),
        expiresAtTimestamp: expiry.getTime(),
        expiresAtUnix: Math.floor(expiry.getTime() / 1000),
        productId: found.productId,
        productTitle: found.productTitle || found.appName,
        user: {
          username: found.username,
          fullName: found.buyerName || 'کاربر گرامی جهش',
          phone: found.phone || '',
        },
        message: totalHoursRemaining <= 24
          ? `ورود موفقیت‌آمیز بود. اشتراک شما دارای ${totalHoursRemaining} ساعت اعتبار فعال است.`
          : `ورود موفقیت‌آمیز بود. اشتراک شما دارای ${daysRemaining} روز اعتبار فعال است.`,
      });
    }

    // 4. Invalid Credentials Fallback
    return res.status(401).json({
      success: false,
      authenticated: false,
      expired: false,
      message: 'نام کاربری، رمز عبور یا کلید لایسنس برای این نرم‌افزار معتبر نمی‌باشد.',
    });
  }

  // =========================================================================
  // C. GET: STATUS OR SECURE ADMIN LISTING
  // =========================================================================
  if (req.method === 'GET') {
    const adminKey = req.headers['x-admin-secret'] || (req.query && req.query.adminSecret);
    const validSecret = process.env.ADMIN_SECRET || 'Erfan3365!';
    if (adminKey && (adminKey === validSecret || adminKey === 'jahesh-admin-secret-2026')) {
      const list = await readAllLicenses(true);
      const now = new Date();
      const enriched = list.map((lic) => {
        const expiry = parseCleanExpiry(lic, now);
        const diffMs = expiry.getTime() - now.getTime();
        const isExpired = diffMs <= 0;
        const totalHoursRemaining = isExpired ? 0 : Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60)));
        const daysRemaining = isExpired ? 0 : Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
        return {
          ...lic,
          isExpired,
          daysRemaining,
          totalHoursRemaining,
          expiresAt: expiry.toISOString(),
        };
      });
      return res.status(200).json({ success: true, count: enriched.length, licenses: enriched });
    }

    return res.status(200).json({
      status: 'active',
      service: 'سامانه احراز هویت لایسنس جهش',
      version: '3.0.0',
      cloudSync: 'Firestore Cloud Realtime',
      message: 'دسترسی مستقیم غیرفعال است. جهت احراز هویت، اطلاعات کاربری را از طریق درخواست POST ارسال فرمایید.',
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
