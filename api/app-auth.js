import fs from 'fs';
import path from 'path';

const LICENSES_FILE = path.join(process.cwd(), 'data', 'app_licenses.json');

function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function generateDeterministicAppPassword(seed) {
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

function readLicenses() {
  if (fs.existsSync(LICENSES_FILE)) {
    try {
      const raw = fs.readFileSync(LICENSES_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Licenses read error:', e);
    }
  }
  return [];
}

function writeLicenses(licenses) {
  try {
    const dir = path.dirname(LICENSES_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(LICENSES_FILE, JSON.stringify(licenses, null, 2), 'utf8');
  } catch (e) {
    console.warn('Licenses write error:', e);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const url = req.url || '';
  const isRegister = url.includes('/register-license');
  const isVerify = url.includes('/verify');

  if (req.method === 'POST') {
    const body = req.body || {};

    if (isRegister) {
      if (!body.id || !body.username) {
        return res.status(400).json({ success: false, error: 'Invalid license payload' });
      }
      const list = readLicenses();
      const idx = list.findIndex((l) => l.id === body.id || (l.username === body.username && l.productId === body.productId));
      let updated;
      if (idx >= 0) {
        updated = [...list];
        updated[idx] = { ...list[idx], ...body };
      } else {
        updated = [body, ...list];
      }
      writeLicenses(updated);
      return res.status(200).json({ success: true, count: updated.length, license: body });
    }

    // Authenticate or Verify
    const { username, password, productId, token } = body;
    const cleanUser = String(username || '').trim();
    const cleanPass = String(password || '').trim();
    const cleanProd = String(productId || '').trim();

    const list = readLicenses();

    // 1. Check for exact match on THIS productId
    const found = list.find((lic) => {
      const uMatch = lic.username && (lic.username === cleanUser || lic.phone === cleanUser);
      const pMatch = !cleanProd || lic.productId === cleanProd;
      const passMatch = !cleanPass || lic.password === cleanPass || lic.licenseKey === cleanPass;
      const tokenMatch = Boolean(token && (lic.id === token || lic.licenseKey === token));
      return (uMatch || tokenMatch) && (passMatch || tokenMatch) && pMatch;
    });

    if (found) {
      const now = new Date();
      const expiry = new Date(found.expiresAt || now.toISOString());
      const diffMs = expiry.getTime() - now.getTime();
      const isExpired = diffMs <= 0;
      const daysRemaining = isExpired ? 0 : Math.ceil(diffMs / (1000 * 60 * 60 * 24));

      if (isExpired) {
        return res.status(200).json({
          success: false,
          authenticated: true,
          expired: true,
          status: 'expired',
          daysRemaining: 0,
          expiresAt: found.expiresAt,
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
        startDate: found.startDate,
        expiresAt: found.expiresAt,
        productId: found.productId,
        productTitle: found.productTitle || found.appName,
        user: {
          username: found.username,
          fullName: found.buyerName,
          phone: found.phone,
        },
        message: `ورود موفقیت‌آمیز بود. اشتراک شما دارای ${daysRemaining} روز اعتبار فعال است.`,
      });
    }

    // 2. Strict Product Isolation Check: Check if user exists for a DIFFERENT product
    if (cleanProd) {
      const crossProductMatch = list.find((lic) => {
        const uMatch = lic.username && (lic.username === cleanUser || lic.phone === cleanUser);
        const passMatch = !cleanPass || lic.password === cleanPass || lic.licenseKey === cleanPass;
        return uMatch && passMatch && lic.productId !== cleanProd;
      });

      if (crossProductMatch) {
        return res.status(401).json({
          success: false,
          authenticated: false,
          expired: false,
          productMismatch: true,
          targetProductId: cleanProd,
          ownedProductId: crossProductMatch.productId,
          message: `این نام کاربری و رمز عبور برای «${crossProductMatch.productTitle || crossProductMatch.appName || 'محصول دیگری'}» خریداری شده است و اجازه ورود به این برنامه را ندارد.`,
        });
      }
    }

    // 3. Fallback: Invalid Credentials
    return res.status(401).json({
      success: false,
      authenticated: false,
      expired: false,
      message: 'نام کاربری یا رمز عبور اشتباه است.',
    });
  }

  if (req.method === 'GET') {
    const list = readLicenses();
    return res.status(200).json({ success: true, count: list.length, licenses: list });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
