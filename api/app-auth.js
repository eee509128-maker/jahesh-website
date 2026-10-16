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

function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function parseExpiryDate(dateStr, fallbackDays = 30) {
  if (!dateStr) return new Date(Date.now() + fallbackDays * 86400000);
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) return parsed;
  return new Date(Date.now() + fallbackDays * 86400000);
}

async function readAllLicenses() {
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
        const key = item.licenseKey || item.id || `${item.username}_${item.productId || ''}`;
        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          all.push(item);
        }
      }
    });
  } catch (e) {
    console.warn('Firestore licenses read error:', e);
  }

  // 2. Fetch from live Firestore 'orders' collection (scan for amlakLicense & appLicense)
  try {
    const orderSnap = await getDocs(collection(db, 'orders'));
    orderSnap.forEach((d) => {
      const order = d.data();
      if (!order) return;
      const attached = [order.appLicense, order.amlakLicense].filter(Boolean);
      for (const lic of attached) {
        if (lic && (lic.username || lic.licenseKey)) {
          const key = lic.licenseKey || lic.id || `order_${order.id}_${lic.username}`;
          if (!seenKeys.has(key)) {
            seenKeys.add(key);
            all.push({
              id: lic.id || `lic-${lic.licenseKey || order.id}`,
              username: lic.username,
              password: lic.password,
              licenseKey: lic.licenseKey,
              productId: lic.productId || 'pkg-amlak-jahesh',
              productTitle: lic.productTitle || order.items?.[0]?.product?.title || 'نرم‌افزار جامع مدیریت املاک جهش (اشتراک آنلاین و ابری)',
              appName: lic.appName || 'سامانه مدیریت املاک جهش',
              buyerName: lic.buyerName || order.customerName || 'کاربر جهش',
              phone: lic.phone || order.customerPhone || '',
              days: Number(lic.days) || 30,
              startDate: lic.startDate || order.createdAt || new Date().toISOString(),
              expiresAt: lic.expiresAt || new Date(Date.now() + (Number(lic.days) || 30) * 86400000).toISOString(),
              status: lic.status || 'active',
              orderId: order.id,
            });
          }
        }
      }
    });
  } catch (e) {
    console.warn('Firestore orders read error:', e);
  }

  // 3. Fallback to local files if any pre-seeded licenses are on disk
  for (const fpath of [LICENSES_FILE, ALT_LICENSES_FILE, AMLAK_LICENSES_FILE]) {
    if (fs.existsSync(fpath)) {
      try {
        const raw = fs.readFileSync(fpath, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            const key = item.licenseKey || item.id || `${item.username}_${item.productId || ''}`;
            if (!seenKeys.has(key)) {
              seenKeys.add(key);
              all.push(item);
            }
          }
        }
      } catch (e) {
        console.warn('Disk licenses read error:', e);
      }
    }
  }

  return all;
}

function writeLicensesToDisk(licenses) {
  try {
    const dir = path.dirname(LICENSES_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(LICENSES_FILE, JSON.stringify(licenses, null, 2), 'utf8');
  } catch (e) {
    // Ephemeral on Vercel, ignore
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const url = req.url || '';
  const isRegister = url.includes('/register-license');
  const isVerify = url.includes('/verify');

  if (req.method === 'POST') {
    const body = req.body || {};

    // Register / Save License
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
        console.warn('Error saving license to Firestore:', err);
      }

      // Also write to local disk
      const list = await readAllLicenses();
      writeLicensesToDisk(list);

      return res.status(200).json({ success: true, license: cleanLicense });
    }

    // Authenticate or Verify
    const { username, password, productId, token, licenseKey } = body;
    const cleanUser = String(username || '').trim().toLowerCase();
    const cleanPass = String(password || '').trim();
    const cleanProd = String(productId || '').trim();
    const cleanKey = String(licenseKey || token || '').trim().toLowerCase();

    const list = await readAllLicenses();

    // 1. Check for exact match on THIS productId or license key
    const found = list.find((lic) => {
      const licUser = String(lic.username || '').trim().toLowerCase();
      const licPhone = String(lic.phone || '').trim().replace(/[^0-9]/g, '');
      const licKey = String(lic.licenseKey || '').trim().toLowerCase();
      const licId = String(lic.id || '').trim().toLowerCase();
      const licPass = String(lic.password || '').trim();

      const userMatch = cleanUser && (licUser === cleanUser || (licPhone && licPhone === cleanUser));
      const keyMatch = cleanKey && (licKey === cleanKey || licId === cleanKey);
      const passMatch = cleanPass && (licPass === cleanPass || licKey === cleanPass.toLowerCase());

      const credsMatch = (userMatch && passMatch) || keyMatch;
      if (!credsMatch) return false;

      // STRICT Product isolation: if the request specifies a productId,
      // ONLY allow licenses that have that exact same productId.
      // This prevents a user's license for one product being used to access another.
      if (cleanProd) {
        const licProd = String(lic.productId || '').trim();
        if (licProd && licProd !== cleanProd) {
          return false;
        }
      }

      return true;
    });

    if (found) {
      const now = new Date();
      let days = Number(found.days) || 7;
      let expiry = null;
      if (found.expiresAt) {
        const parsed = new Date(found.expiresAt);
        if (!isNaN(parsed.getTime())) expiry = parsed;
      }
      if (!expiry) {
        // Use startDate + days if available, otherwise fall back to now + days
        const startRef = found.startDate ? new Date(found.startDate) : now;
        const validStart = isNaN(startRef.getTime()) ? now : startRef;
        expiry = new Date(validStart.getTime() + days * 24 * 60 * 60 * 1000);
      }
      const diffMs = expiry.getTime() - now.getTime();
      const isExpired = diffMs <= 0;
      const totalHoursRemaining = isExpired ? 0 : Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60)));
      const daysRemaining = isExpired ? 0 : Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
      const hoursRemaining = isExpired
        ? 0
        : totalHoursRemaining <= 24
        ? totalHoursRemaining
        : Math.max(0, Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

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
          expiresAt: expiry.toISOString(),
          expiresAtTimestamp: expiry.getTime(),
          productId: found.productId,
          productTitle: found.productTitle || found.appName,
          message: 'مدت زمان اشتراک شما به پایان رسیده است. جهت تمدید اشتراک به سایت جهش‌کالا مراجعه فرمایید.',
          renewUrl: 'https://jaheshit.ir/jaheshkala',
        });
      }

      return res.status(200).json({
        success: true,
        authenticated: true,
        expired: false,
        status: 'active',
        token: found.licenseKey || found.id,
        licenseKey: found.licenseKey,
        daysRemaining,
        hoursRemaining: totalHoursRemaining <= 24 ? totalHoursRemaining : hoursRemaining,
        remainingHours: totalHoursRemaining,
        totalHoursRemaining,
        hours: totalHoursRemaining,
        remainingMinutes: Math.max(0, Math.ceil(diffMs / (1000 * 60))),
        remainingSeconds: Math.max(0, Math.ceil(diffMs / 1000)),
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
          fullName: found.buyerName,
          phone: found.phone,
        },
        message: totalHoursRemaining <= 24
          ? `ورود موفقیت‌آمیز بود. اشتراک شما دارای ${totalHoursRemaining} ساعت (${daysRemaining} روز) اعتبار فعال است.`
          : `ورود موفقیت‌آمیز بود. اشتراک شما دارای ${daysRemaining} روز اعتبار فعال است.`,
      });
    }

    // 2. Fallback: Invalid Credentials
    return res.status(401).json({
      success: false,
      authenticated: false,
      expired: false,
      message: 'نام کاربری یا رمز عبور اشتباه است.',
    });
  }

  if (req.method === 'GET') {
    const adminKey = req.headers['x-admin-secret'] || req.query.adminSecret;
    if (adminKey && adminKey === (process.env.ADMIN_SECRET || 'jahesh-admin-secret-2026')) {
      const list = await readAllLicenses();
      return res.status(200).json({ success: true, count: list.length, licenses: list });
    }
    return res.status(200).json({
      status: 'active',
      service: 'سامانه احراز هویت لایسنس جهش',
      version: '2.4.0',
      message: 'دسترسی مستقیم غیرفعال است. جهت احراز هویت، اطلاعات کاربری را از طریق درخواست POST ارسال فرمایید.',
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
