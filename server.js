import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static uploads directory for banners and user-uploaded media
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const BANNERS_UPLOADS_DIR = path.join(UPLOADS_DIR, 'banners');
if (!fs.existsSync(BANNERS_UPLOADS_DIR)) {
  fs.mkdirSync(BANNERS_UPLOADS_DIR, { recursive: true });
}
app.use('/uploads', express.static(UPLOADS_DIR));

// Cloudflare AI Support Route for JaheshKala
const CLOUDFLARE_ACCOUNT_ID = 'e8950358d5cf09f0f511b46172f65791';
const CLOUDFLARE_AI_TOKEN = 'cfut_Dux4Ej0iGy3P0bowmnh5LevCZ0f1DaTDmr5a1lmR074a186e';
const MODEL_NAME = '@cf/meta/llama-3.1-8b-instruct';

app.post('/api/cloudflare-ai', async (req, res) => {
  try {
    const { userQuestion, chatHistory = [] } = req.body;
    if (!userQuestion || typeof userQuestion !== 'string') {
      return res.status(400).json({ error: 'userQuestion is required' });
    }

    const systemPrompt = `تو دستیار هوشمند و دانا و پشتیبان رسمی فروشگاه اینترنتی و شرکت فناوری «جهش‌کالا» (جهش آی‌تی - jaheshit.ir) هستی.
وظیفه اصلی و مهم تو این است که تا جای ممکن به تمام سوالات کاربران بر اساس اطلاعات زیر، بسیار خوش‌برخورد، کامل، حرفه‌ای و به زبان فارسی پاسخ بدهی.

اطلاعات معتبر و جامع وب‌سایت جهش‌کالا:
۱. پکیج طلایی طراحی سایت اختصاصی جهش:
   - قیمت پکیج طلایی: ۷,۹۰۰,۰۰۰ تومان (با تخفیف ویژه از ۱۱,۵۰۰,۰۰۰ تومان).
   - خدمات پکیج شامل: ثبت رایگان دامنه با نام دلخواه مشتری، ۱ ماه هاست فوق‌سریع NVMe رایگان، اتصال مستقیم به درگاه پرداخت زیبال با تسویه حساب آنی، طراحی کاملاً واکنش‌گرا (موبایل و کامپیوتر)، پنل اختصاصی مدیریت و کدنویسی بهینه و سبک.
   - تضمین سئو و رتبه ۱ گوگل: سایت به همراه تنظیمات سرچ‌کنسول و بهینه‌سازی کامل فنی جهت دستیابی به رتبه اول نتایج جستجوی گوگل تحویل می‌گردد.
   - کدهای تخفیف: مشتریان می‌توانند از کدهای تخفیف در سبد خرید استفاده کنند (مانند کد اختصاصی jahesh1395).
۲. راه‌های ارتباطی و تماس مستقیم با مجموعه:
   - شماره تلفن‌های مستقیم پشتیبانی: 09152331974 و 09364864663
   - آدرس دفتر و شعبه ۱: مشهد مقدس، خیام شمالی ۴۶، بین شکری ۱۳ و ۱۵، پلاک ۲۸۷
   - وب‌سایت رسمی: jaheshit.ir
   - ساعات کاری و پاسخگویی: ۲۴ ساعته، ۷ روز هفته.
۳. فروشگاه آنلاین و محصولات:
   - انواع گوشی‌های موبایل، لپ‌تاپ‌ها، تبلت، هدفون، ساعت‌های هوشمند، اسپیکر و لوازم جانبی دیجیتال با گارانتی اصالت کالا و ۷ روز ضمانت بازگشت وجه.
   - ارسال سریع سفارش‌ها به سراسر کشور با پست و تیپاکس.

قوانین پاسخگویی:
۱. برای تمام سوالات مربوط به قیمت‌ها، پکیج طراحی سایت، ویژگی‌ها، هاست، دامنه، درگاه، سئو، آدرس، شماره تلفن و نحوه سفارش، خودت با زبان فارسی روان و کامل توضیح بده و کاربر را راهنمایی کن.
۲. فقط در صورتی که کاربر سوالی پرسید که به هیچ وجه به موضوعات بالا مربوط نبود (مثلاً پیگیری سفارش خاص با کد پیگیری اختصاصی، مسائل حقوقی پیچیده، تخفیف‌های ویژه خارج از سایت یا درخواست صحبت مستقیم با مدیر)، مودبانه بگو:
«پیام شما دریافت شد. این مورد برای بررسی تخصصی به همکاران واحد پشتیبانی و مدیریت ارجاع گردید و به زودی پاسخ شما پیگیری خواهد شد.»
و حتما در پایان آن عبارت [ESCALATE_TO_ADMIN] را بنویس تا به مدیریت ارجاع شود.
۳. در تمام سوالات عادی که خودت پاسخ می‌دهی، به هیچ وجه عبارت [ESCALATE_TO_ADMIN] را ذکر نکن.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...chatHistory.slice(-4),
      { role: 'user', content: userQuestion }
    ];

    const cfRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${MODEL_NAME}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_AI_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages,
          max_tokens: 600,
          temperature: 0.3
        })
      }
    );

    if (!cfRes.ok) {
      const errBody = await cfRes.text();
      console.warn('Cloudflare AI error:', cfRes.status, errBody);
      return res.status(502).json({ error: 'Cloudflare AI error', details: errBody });
    }

    const data = await cfRes.json();
    let reply = '';
    if (data.result?.response) {
      reply = data.result.response;
    } else if (data.result?.choices?.[0]?.message?.content) {
      reply = data.result.choices[0].message.content;
    }

    if (!reply) {
      return res.status(500).json({ error: 'Empty response from model' });
    }

    let escalate = false;
    if (reply.includes('[ESCALATE_TO_ADMIN]')) {
      escalate = true;
      reply = reply.replace(/\[ESCALATE_TO_ADMIN\]/g, '').trim();
    }

    return res.json({ reply, escalateToAdmin: escalate });
  } catch (err) {
    console.error('Error in /api/cloudflare-ai:', err);
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'jahesh-kala-api' });
});

// Server-side Banners Persistence API
const BANNERS_FILE = path.join(__dirname, 'data', 'banners.json');

const DEFAULT_SERVER_BANNERS = [
  {
    id: 'banner-1',
    badge: 'جشنواره تخفیف‌های ویژه',
    title: 'خرید آنلاین انواع کالاها و خدمات با بهترین قیمت',
    subtitle: 'امکان خرید با درگاه امن بانکی، ضمانت اصالت و سلامت کالا و ارسال سریع به سراسر کشور',
    cta: 'مشاهده تخفیف‌های شگفت‌انگیز',
    actionType: 'incredible',
    gradient: 'from-[#3b1261] via-[#220d3d] to-[#0d071a]',
    overlayOpacity: 90,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
    isActive: false,
    order: 0,
  },
  {
    id: 'banner-2',
    badge: 'پیشنهاد طلایی جهش',
    title: 'پکیج طلایی طراحی سایت اختصاصی جهش',
    subtitle: 'کدنویسی اختصاصی، هاست و دامین رایگان، درگاه پرداخت زیبال و پشتیبانی کامل ۲۴ ساعته',
    cta: 'مشاهده جزئیات و خرید',
    actionType: 'package',
    gradient: 'from-[#3b1261] via-[#220d3d] to-[#0d071a]',
    overlayOpacity: 90,
    image: '/assets/ascend-dashboard_7euwiU1R0Bf04e0Jvhhd2.png',
    isActive: true,
    order: 1,
  },
  {
    id: 'banner-3',
    badge: 'پیشنهادهای روزانه',
    title: 'خرید سریع و مطمئن با درگاه امن شاپرک و زیبال',
    subtitle: 'هر آنچه برای خرید اینترنتی نیاز دارید، با خیال راحت در فروشگاه جهش‌کالا تهیه کنید',
    cta: 'شروع خرید در جهش‌کالا',
    actionType: 'incredible',
    gradient: 'from-[#1e1b4b] via-[#171239] to-[#0c081f]',
    overlayOpacity: 90,
    image: 'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
    order: 2,
  },
];

// Endpoint to upload banner image file directly to server
app.post('/api/upload-banner', (req, res) => {
  try {
    const { image, filename } = req.body || {};
    if (!image || typeof image !== 'string') {
      return res.status(400).json({ error: 'داده تصویر الزامی است.' });
    }

    let ext = 'webp';
    let buffer;
    const matches = image.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
    if (matches) {
      const type = matches[1].toLowerCase();
      if (type.includes('png')) ext = 'png';
      else if (type.includes('jpeg') || type.includes('jpg')) ext = 'jpg';
      else if (type.includes('svg')) ext = 'svg';
      else if (type.includes('webp')) ext = 'webp';
      buffer = Buffer.from(matches[2], 'base64');
    } else if (image.startsWith('data:')) {
      const parts = image.split(',');
      buffer = Buffer.from(parts[1] || '', 'base64');
    } else {
      buffer = Buffer.from(image, 'base64');
    }

    if (!buffer || buffer.length === 0) {
      return res.status(400).json({ error: 'فرمت تصویر نامعتبر است.' });
    }

    const safeName = `banner_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    const filePath = path.join(BANNERS_UPLOADS_DIR, safeName);
    fs.writeFileSync(filePath, buffer);

    // Also mirror to jaheshkala static directory if it exists
    const distUploads = path.join(__dirname, 'jaheshkala', 'uploads', 'banners');
    try {
      if (!fs.existsSync(distUploads)) {
        fs.mkdirSync(distUploads, { recursive: true });
      }
      fs.writeFileSync(path.join(distUploads, safeName), buffer);
    } catch {}

    const publicUrl = `/uploads/banners/${safeName}`;
    console.log(`[Upload] Banner image saved to ${publicUrl}`);
    return res.json({ success: true, url: publicUrl });
  } catch (err) {
    console.error('Error in /api/upload-banner:', err);
    return res.status(500).json({ error: err.message || 'خطا در ذخیره‌سازی تصویر بنر' });
  }
});

app.get('/api/banners', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  try {
    if (fs.existsSync(BANNERS_FILE)) {
      const raw = fs.readFileSync(BANNERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return res.json(parsed);
      }
    }
  } catch (err) {
    console.error('Error reading banners.json:', err);
  }

  // If banners.json does not exist yet, seed it with default banners
  try {
    const dataDir = path.dirname(BANNERS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(BANNERS_FILE, JSON.stringify(DEFAULT_SERVER_BANNERS, null, 2), 'utf8');
  } catch (e) {
    console.warn('Could not initialize banners.json:', e);
  }

  return res.json(DEFAULT_SERVER_BANNERS);
});

app.post('/api/banners', (req, res) => {
  try {
    const banners = req.body;
    if (!Array.isArray(banners)) {
      return res.status(400).json({ error: 'Expected array of banners' });
    }
    const dataDir = path.dirname(BANNERS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(BANNERS_FILE, JSON.stringify(banners, null, 2), 'utf8');
    console.log(`[Banners] Successfully persisted ${banners.length} banners across all devices.`);
    return res.json({ success: true, count: banners.length });
  } catch (err) {
    console.error('Error saving banners.json:', err);
    return res.status(500).json({ error: err.message });
  }
});

// Helper for Zibal URL (Uses ZIBAL_PROXY_URL if provided, else direct to https://gateway.zibal.ir/v1)
function getZibalUrl(endpointPath) {
  const proxyUrl = process.env.ZIBAL_PROXY_URL && process.env.ZIBAL_PROXY_URL.trim();
  const cleanEndpoint = endpointPath.startsWith('/') ? endpointPath : `/${endpointPath}`;
  if (
    proxyUrl &&
    proxyUrl !== 'none' &&
    proxyUrl !== 'null' &&
    proxyUrl !== 'undefined' &&
    proxyUrl !== 'false'
  ) {
    const formattedUrl = (proxyUrl.startsWith('http://') || proxyUrl.startsWith('https://'))
      ? proxyUrl
      : `https://${proxyUrl}`;
    return `${formattedUrl.replace(/\/+$/, '')}${cleanEndpoint}`;
  }
  return `https://gateway.zibal.ir/v1${cleanEndpoint}`;
}

// Zibal Payment Request Endpoint
app.post('/api/zibal-request', async (req, res) => {
  try {
    const { amount, amountInTomans, callbackUrl, description, orderId, mobile, merchant, ...otherFields } = req.body || {};
    const ZIBAL_MERCHANT = merchant || process.env.ZIBAL_MERCHANT || '6a9db4410df8756c31ea5d00';

    let amountInRials = 0;
    if (amountInTomans) {
      amountInRials = Math.round(Number(amountInTomans) * 10);
    } else if (amount) {
      amountInRials = Math.round(Number(amount));
    }

    if (!amountInRials || isNaN(amountInRials) || amountInRials < 10000) {
      return res.status(400).json({
        error: 'مبلغ تراکنش نامعتبر است. حداقل مبلغ پرداخت ۱,۰۰۰ تومان (۱۰,۰۰۰ ریال) است.',
        result: -1
      });
    }

    const finalCallbackUrl = callbackUrl || 'http://localhost:3000/jaheshkala';
    const finalDescription = description || `سفارش شماره ${orderId || 'جهش کالا'}`;

    const zibalPayload = {
      ...otherFields,
      merchant: ZIBAL_MERCHANT,
      amount: amountInRials,
      callbackUrl: finalCallbackUrl,
      description: finalDescription,
    };
    if (orderId !== undefined) zibalPayload.orderId = String(orderId);
    if (mobile !== undefined) zibalPayload.mobile = String(mobile);

    const requestUrl = getZibalUrl('/request');

    let zibalRes = await fetch(requestUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(zibalPayload)
    });

    let data = await zibalRes.json();
    let isSandboxFallback = false;

    // If request failed because of invalid IP (result 113) or other merchant errors, automatically fall back to 'zibal' sandbox
    if (data.result !== 100 && ZIBAL_MERCHANT !== 'zibal') {
      console.log(`[Zibal] Request with merchant ${ZIBAL_MERCHANT} failed (result: ${data.result}). Trying sandbox fallback 'zibal'...`);
      try {
        const sandboxRes = await fetch(requestUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...zibalPayload,
            merchant: 'zibal',
            description: `[تست سندباکس] ${finalDescription}`
          })
        });
        const sandboxData = await sandboxRes.json();
        if (sandboxData.result === 100) {
          data = sandboxData;
          isSandboxFallback = true;
          console.log(`[Zibal] Sandbox fallback succeeded with trackId: ${data.trackId}`);
        }
      } catch (sandboxErr) {
        console.error('[Zibal] Sandbox request fallback error:', sandboxErr);
      }
    }

    if (data.result === 100) {
      return res.json({
        success: true,
        result: data.result,
        trackId: data.trackId,
        isSandboxFallback,
        message: data.message || 'success',
        paymentUrl: `https://gateway.zibal.ir/start/${data.trackId}`
      });
    } else {
      return res.status(400).json({
        success: false,
        result: data.result,
        message: data.message || 'خطا در ارتباط با درگاه زیبال',
        details: data
      });
    }
  } catch (err) {
    console.error('Error in /api/zibal-request:', err);
    return res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
  }
});

// Zibal Payment Verify Endpoint
app.post('/api/zibal-verify', async (req, res) => {
  try {
    const { trackId, merchant, ...otherFields } = req.body || {};
    if (!trackId) {
      return res.status(400).json({ success: false, error: 'کد پیگیری تراکنش (trackId) ارسال نشده است.' });
    }

    const ZIBAL_MERCHANT = merchant || process.env.ZIBAL_MERCHANT || '6a9db4410df8756c31ea5d00';
    const verifyUrl = getZibalUrl('/verify');

    const verifyPayload = {
      ...otherFields,
      merchant: ZIBAL_MERCHANT,
      trackId: Number(trackId)
    };

    let zibalRes = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(verifyPayload)
    });

    let data = await zibalRes.json();
    let isSandboxFallback = false;

    // Try sandbox fallback verify if the main merchant verify fails or was made in sandbox
    if (data.result !== 100 && data.result !== 201 && ZIBAL_MERCHANT !== 'zibal') {
      console.log(`[Zibal] Verify with merchant ${ZIBAL_MERCHANT} failed (result: ${data.result}). Trying sandbox fallback...`);
      try {
        const sandboxRes = await fetch(verifyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...verifyPayload,
            merchant: 'zibal',
            trackId: Number(trackId)
          })
        });
        const sandboxData = await sandboxRes.json();
        if (sandboxData.result === 100 || sandboxData.result === 201) {
          data = sandboxData;
          isSandboxFallback = true;
        }
      } catch (sandboxErr) {
        console.error('[Zibal] Sandbox verify fallback error:', sandboxErr);
      }
    }

    if (data.result === 100 || data.result === 201) {
      return res.json({
        success: true,
        result: data.result,
        status: data.status,
        isSandboxFallback,
        refNumber: data.refNumber ? String(data.refNumber) : String(trackId),
        amountInRials: data.amount,
        amountInTomans: data.amount ? Math.round(data.amount / 10) : 0,
        paidAt: data.paidAt,
        cardNumber: data.cardNumber || '۵۸۹۲۱۰******۷۸۹۰',
        orderId: data.orderId || '',
        message: data.message || 'پرداخت با موفقیت تأیید شد.'
      });
    } else if (data.result === 115) {
      return res.status(200).json({
        success: false,
        result: 115,
        invalidIp: true,
        ip: data.message,
        message: 'محدودیت IP در پنل زیبال فعال است. لطفاً در تنظیمات درگاه زیبال، گزینه محدودیت IP را غیرفعال کنید.',
        details: data
      });
    } else {
      return res.status(400).json({
        success: false,
        result: data.result,
        message: data.message || 'تأیید تراکنش با خطا مواجه شد.',
        details: data
      });
    }
  } catch (err) {
    console.error('Error in /api/zibal-verify:', err);
    return res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
  }
});

// Real Estate SaaS (مدیریت املاک جهش) Licenses Persistence & Auth
const AMLAK_LICENSES_FILE = path.join(__dirname, 'data', 'amlak_licenses.json');

function getAmlakLicensesFromServer() {
  try {
    if (fs.existsSync(AMLAK_LICENSES_FILE)) {
      const content = fs.readFileSync(AMLAK_LICENSES_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err) {
    console.warn('Could not read amlak licenses:', err);
  }
  return [
    // Pre-seeded default admin superuser
    {
      username: 'admin',
      password: 'jahesh1395',
      licenseKey: 'JA-ROOT-ADMIN-VIP',
      buyerName: 'مدیر کل فروشگاه جهش‌کالا',
      phone: '09152331974',
      days: 365,
      startDate: '۱۴۰۴/۰۱/۰۱',
      expiresAt: '۱۴۰۵/۰۱/۰۱',
      status: 'active'
    }
  ];
}

function saveAmlakLicensesToServer(licenses) {
  try {
    const dataDir = path.dirname(AMLAK_LICENSES_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(AMLAK_LICENSES_FILE, JSON.stringify(licenses, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not save amlak licenses:', err);
  }
}

app.get('/api/amlak/licenses', (_req, res) => {
  const licenses = getAmlakLicensesFromServer();
  res.json({ success: true, licenses });
});

app.post('/api/amlak/licenses', (req, res) => {
  try {
    const newLicense = req.body;
    if (!newLicense || !newLicense.username || !newLicense.password) {
      return res.status(400).json({ success: false, error: 'اطلاعات لایسنس ناقص است.' });
    }
    const licenses = getAmlakLicensesFromServer();
    const idx = licenses.findIndex(l => l.username.toLowerCase() === newLicense.username.toLowerCase());
    if (idx >= 0) {
      licenses[idx] = newLicense;
    } else {
      licenses.unshift(newLicense);
    }
    saveAmlakLicensesToServer(licenses);
    return res.json({ success: true, license: newLicense });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/amlak/auth', (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'نام کاربری و رمز عبور الزامی است.' });
    }

    const cleanUser = String(username).trim().toLowerCase();
    const cleanPass = String(password).trim();

    // 1. Check SuperAdmin credentials
    if ((cleanUser === 'admin' || cleanUser === 'jahesh') && (cleanPass === 'jahesh1395' || cleanPass === 'jahesh')) {
      return res.json({
        success: true,
        user: {
          username: 'admin',
          buyerName: 'مدیر کل سیستم جهش',
          role: 'admin',
          licenseKey: 'JA-ROOT-ADMIN-VIP',
          expiresAt: 'نامحدود (حساب مدیریت)',
          days: 365,
          status: 'active'
        }
      });
    }

    // 2. Check Customer Purchased Licenses
    const licenses = getAmlakLicensesFromServer();
    const matched = licenses.find(
      l => l.username.toLowerCase() === cleanUser && l.password === cleanPass
    );

    if (matched) {
      return res.json({
        success: true,
        user: {
          username: matched.username,
          buyerName: matched.buyerName,
          phone: matched.phone,
          licenseKey: matched.licenseKey,
          expiresAt: matched.expiresAt,
          days: matched.days,
          status: matched.status || 'active'
        }
      });
    }

    return res.status(401).json({
      success: false,
      message: 'نام کاربری یا رمز عبور اشتباه است. لطفاً مشخصات دریافتی پس از خرید اشتراک از جهش‌کالا را وارد نمایید.'
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Explicit handler for Real Estate Management App (مدیریت املاک جهش)
app.get(['/amlak.html', '/amlak', '/jaheshkala/amlak.html', '/jaheshkala/amlak'], (_req, res) => {
  const candidates = [
    path.join(__dirname, 'jaheshkala', 'amlak.html'),
    path.join(__dirname, 'amlak.html'),
    path.join(__dirname, 'jaheshkala-app', 'public', 'amlak.html')
  ];
  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.sendFile(filePath);
    }
  }
  return res.status(404).send('صفحه سامانه مدیریت املاک جهش یافت نشد.');
});

// Serve jaheshkala static files & SPA entry
const jaheshkalaDir = path.join(__dirname, 'jaheshkala');
app.use('/jaheshkala', express.static(jaheshkalaDir));
app.get(['/jaheshkala', '/jaheshkala/*'], (req, res, next) => {
  if (path.extname(req.path)) {
    return next();
  }
  const indexFile = path.join(jaheshkalaDir, 'index.html');
  if (fs.existsSync(indexFile)) {
    return res.sendFile(indexFile);
  }
  next();
});

// Rewrite per vercel.json if applicable
app.get('/47887509.txt', (req, res) => {
  const target = path.join(__dirname, 'assets', '47887509.txt');
  if (fs.existsSync(target)) {
    return res.sendFile(target);
  }
  res.status(404).send('Not found');
});

// Redirect /frwshgah to /jaheshkala
app.get(['/frwshgah', '/frwshgah/*'], (req, res) => {
  res.redirect(301, '/jaheshkala');
});

// Serve static assets and html files
app.use(express.static(__dirname, {
  extensions: ['html'],
  index: 'index.html'
}));

// Fallback for any client-side routed page
app.use((req, res) => {
  // If requesting an asset or a file with an extension that wasn't found by express.static, return 404
  if (req.path.startsWith('/assets/') || path.extname(req.path)) {
    return res.status(404).send('Not found');
  }

  // Check if req.path matches a directory with index.html
  const cleanPath = req.path.replace(/^\//, '').replace(/\/$/, '');
  const dirIndex = path.join(__dirname, cleanPath, 'index.html');
  if (cleanPath && fs.existsSync(dirIndex)) {
    return res.sendFile(dirIndex);
  }

  // Otherwise serve root index.html
  const rootIndex = path.join(__dirname, 'index.html');
  res.sendFile(rootIndex);
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
