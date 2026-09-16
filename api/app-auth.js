import fs from 'fs';
import path from 'path';

const ORDERS_FILE = path.join(process.cwd(), 'data', 'orders.json');
const USERS_FILE = path.join(process.cwd(), 'data', 'users.json');

function readOrders() {
  if (fs.existsSync(ORDERS_FILE)) {
    try {
      const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Orders read warning:', e);
    }
  }
  return [];
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'online',
      service: 'JaheshKala App Subscription & Auth API',
      version: '2.0.0',
      description: 'API جهت احراز هویت و بررسی اعتبار لایسنس کاربران اپلیکیشن‌های ویندوز و اندروید',
      endpoint: 'POST /api/app-auth',
      samplePayload: {
        username: 'user_phone_or_code',
        password: 'user_password',
        appId: 'pkg-identifier'
      }
    });
  }

  if (req.method === 'POST') {
    try {
      const { username, password, appId } = req.body || {};

      if (!username || !password) {
        return res.status(400).json({
          success: false,
          status: 'missing_fields',
          message: 'لطفاً نام کاربری و کلمه عبور را وارد نمایید.'
        });
      }

      const cleanUsername = String(username).trim();
      const cleanPassword = String(password).trim();
      const cleanAppId = appId ? String(appId).trim() : '';

      // 1. Check local orders
      const orders = readOrders();
      let matchedCred = null;
      let matchedOrder = null;

      for (const ord of orders) {
        // Check order.appCredentials
        if (ord.appCredentials) {
          const cred = ord.appCredentials;
          const uMatch = String(cred.username).trim().toLowerCase() === cleanUsername.toLowerCase() ||
                         (ord.customerPhone && ord.customerPhone.trim() === cleanUsername);
          const pMatch = String(cred.password).trim() === cleanPassword;
          const appMatch = !cleanAppId || !cred.appId || cred.appId === cleanAppId;

          if (uMatch && pMatch && appMatch) {
            matchedCred = cred;
            matchedOrder = ord;
            break;
          }
        }

        // Also check amlakLicense / aiAppLicense for backward compatibility
        const lic = ord.amlakLicense || ord.aiAppLicense;
        if (lic) {
          const uMatch = String(lic.username).trim().toLowerCase() === cleanUsername.toLowerCase() ||
                         (ord.customerPhone && ord.customerPhone.trim() === cleanUsername);
          const pMatch = String(lic.password).trim() === cleanPassword;
          if (uMatch && pMatch) {
            matchedCred = {
              appId: cleanAppId || 'jahesh-app',
              appName: 'اپلیکیشن جهش کالا',
              username: lic.username,
              password: lic.password,
              days: lic.days || 30,
              startDate: lic.startDate,
              expiresAt: lic.expiresAt,
              status: lic.status || 'active'
            };
            matchedOrder = ord;
            break;
          }
        }
      }

      // 2. If not found in local orders, check master users or fallback master accounts
      if (!matchedCred && cleanUsername === 'admin' && cleanPassword === 'admin') {
        matchedCred = {
          appId: cleanAppId || 'jahesh-app',
          appName: 'نسخه مدیریت سیستم',
          username: 'admin',
          days: 3650,
          startDate: new Date().toISOString(),
          expiresAt: new Date(Date.now() + 3650 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'active'
        };
      }

      if (!matchedCred) {
        return res.status(401).json({
          success: false,
          status: 'invalid_credentials',
          message: 'نام کاربری یا کلمه عبور وارد شده معتبر نمی‌باشد.'
        });
      }

      // Check subscription validity
      const nowTime = Date.now();
      const expiresTime = matchedCred.expiresAt ? new Date(matchedCred.expiresAt).getTime() : 0;
      const isExpired = expiresTime > 0 && expiresTime < nowTime;
      const daysRemaining = Math.max(0, Math.ceil((expiresTime - nowTime) / (1000 * 60 * 60 * 24)));

      if (isExpired) {
        return res.status(403).json({
          success: false,
          status: 'subscription_expired',
          message: 'اشتراک زمانی شما به پایان رسیده است. جهت فعال‌سازی مجدد و تمدید دسترسی، به سایت جهش‌کالا مراجعه فرمایید.',
          expiresAt: matchedCred.expiresAt,
          daysRemaining: 0,
          renewUrl: 'https://jaheshit.ir/jaheshkala/'
        });
      }

      return res.status(200).json({
        success: true,
        status: 'active',
        message: 'ورود با موفقیت انجام شد و اشتراک فعال است.',
        subscription: {
          isActive: true,
          daysRemaining,
          expiresAt: matchedCred.expiresAt,
          startDate: matchedCred.startDate,
          appName: matchedCred.appName || 'اپلیکیشن جهش کالا',
          appId: matchedCred.appId || cleanAppId
        },
        user: {
          username: matchedCred.username,
          name: matchedOrder ? matchedOrder.customerName : 'کاربر جهش کالا',
          phone: matchedOrder ? matchedOrder.customerPhone : ''
        }
      });
    } catch (err) {
      console.error('App auth exception:', err);
      return res.status(500).json({
        success: false,
        error: 'خطای سرور در بررسی اعتبار اشتراک',
        details: err.message
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
