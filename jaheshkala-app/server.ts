import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Directories for static uploads and persistence
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const UPLOADS_DIR = path.join(ROOT_DIR, 'uploads');
const PRODUCTS_UPLOADS_DIR = path.join(UPLOADS_DIR, 'products');
const BANNERS_UPLOADS_DIR = path.join(UPLOADS_DIR, 'banners');

[DATA_DIR, UPLOADS_DIR, PRODUCTS_UPLOADS_DIR, BANNERS_UPLOADS_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Serve uploads statically
app.use('/uploads', express.static(UPLOADS_DIR));

const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const BANNERS_FILE = path.join(DATA_DIR, 'banners.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const COUPONS_FILE = path.join(DATA_DIR, 'coupons.json');

// --- Image Upload Endpoint ---
app.post('/api/upload-product-image', (req, res) => {
  try {
    const { image, filename } = req.body || {};
    if (!image || typeof image !== 'string') {
      return res.status(400).json({ error: 'داده تصویر الزامی است.' });
    }

    let ext = 'webp';
    let buffer: Buffer;
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

    const safeName = `prod_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    const filePath = path.join(PRODUCTS_UPLOADS_DIR, safeName);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/products/${safeName}`;
    return res.json({ success: true, url: publicUrl });
  } catch (err: any) {
    console.error('Error in /api/upload-product-image:', err);
    return res.status(500).json({ error: err.message || 'خطا در ذخیره‌سازی تصویر محصول' });
  }
});

// --- Banner Upload Endpoint ---
app.post('/api/upload-banner', (req, res) => {
  try {
    const { image } = req.body || {};
    if (!image || typeof image !== 'string') {
      return res.status(400).json({ error: 'داده بنر الزامی است.' });
    }
    let ext = 'jpg';
    let buffer: Buffer;
    const matches = image.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
    if (matches) {
      buffer = Buffer.from(matches[2], 'base64');
    } else if (image.startsWith('data:')) {
      buffer = Buffer.from(image.split(',')[1] || '', 'base64');
    } else {
      buffer = Buffer.from(image, 'base64');
    }

    const safeName = `banner_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    fs.writeFileSync(path.join(BANNERS_UPLOADS_DIR, safeName), buffer);
    return res.json({ success: true, url: `/uploads/banners/${safeName}` });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// --- Products Endpoints ---
app.get('/api/products', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  try {
    if (fs.existsSync(PRODUCTS_FILE)) {
      const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return res.json(parsed);
      }
    }
  } catch (err) {
    console.error('Error reading products.json:', err);
  }
  return res.json([]);
});

app.post('/api/products', (req, res) => {
  try {
    const products = req.body;
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: 'Expected array of products' });
    }
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8');
    return res.json({ success: true, count: products.length });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/products/save', (req, res) => {
  try {
    const product = req.body;
    if (!product || !product.id) {
      return res.status(400).json({ error: 'Invalid product data' });
    }
    let list: any[] = [];
    if (fs.existsSync(PRODUCTS_FILE)) {
      try {
        const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      } catch {}
    }
    const idx = list.findIndex((p: any) => p.id === product.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...product };
    } else {
      list = [product, ...list];
    }
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(list, null, 2), 'utf8');
    return res.json({ success: true, products: list });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/products/delete', (req, res) => {
  try {
    const productId = req.body?.productId || req.body?.id;
    if (!productId) {
      return res.status(400).json({ error: 'productId or id required' });
    }
    let list: any[] = [];
    if (fs.existsSync(PRODUCTS_FILE)) {
      try {
        const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      } catch {}
    }
    list = list.filter((p: any) => p.id !== productId);
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(list, null, 2), 'utf8');
    return res.json({ success: true, products: list });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

const CLOUDFLARE_ACCOUNT_ID = 'e8950358d5cf09f0f511b46172f65791';
const CLOUDFLARE_AI_TOKEN = 'cfut_Dux4Ej0iGy3P0bowmnh5LevCZ0f1DaTDmr5a1lmR074a186e';
const MODEL_NAME = '@cf/meta/llama-3.1-8b-instruct';

// Cloudflare AI Support Route
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

    const data = (await cfRes.json()) as any;
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
  } catch (err: any) {
    console.error('Error in /api/cloudflare-ai:', err);
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'jahesh-kala-api' });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
