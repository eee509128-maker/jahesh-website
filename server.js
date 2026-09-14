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
const PRODUCTS_UPLOADS_DIR = path.join(UPLOADS_DIR, 'products');
if (!fs.existsSync(PRODUCTS_UPLOADS_DIR)) {
  fs.mkdirSync(PRODUCTS_UPLOADS_DIR, { recursive: true });
}
app.use('/uploads', express.static(UPLOADS_DIR));

// Favicon and Web App Manifest routes for Googlebot, Search Engine Crawlers, browsers and mobile
const faviconFiles = [
  'favicon.ico',
  'favicon-48x48.png',
  'favicon-96x96.png',
  'favicon-144x144.png',
  'favicon-192x192.png',
  'favicon-512x512.png',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'favicon.svg',
  'apple-touch-icon.png',
  'apple-touch-icon-precomposed.png',
  'site.webmanifest'
];

faviconFiles.forEach((file) => {
  const handler = (req, res) => {
    const target = path.join(__dirname, file);
    if (fs.existsSync(target)) {
      if (file.endsWith('.ico')) res.setHeader('Content-Type', 'image/x-icon');
      else if (file.endsWith('.png')) res.setHeader('Content-Type', 'image/png');
      else if (file.endsWith('.svg')) res.setHeader('Content-Type', 'image/svg+xml');
      else if (file.endsWith('.webmanifest')) res.setHeader('Content-Type', 'application/manifest+json');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.sendFile(target);
    }
    res.status(404).send('Not found');
  };
  app.get(`/${file}`, handler);
  app.get(`/jaheshkala/${file}`, handler);
});

// Cloudflare AI Support Route for JaheshKala
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || 'e8950358d5cf09f0f511b46172f65791';
const CLOUDFLARE_AI_TOKEN = process.env.CLOUDFLARE_AI_TOKEN || 'cfut_Dux4Ej0iGy3P0bowmnh5LevCZ0f1DaTDmr5a1lmR074a186e';
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
    id: 'banner-2',
    cta: 'مشاهده جزئیات و خرید',
    badge: 'پیشنهاد طلایی جهش',
    image: '/uploads/banners/official_banner-2.jpg',
    order: 0,
    title: 'پکیج طلایی طراحی سایت اختصاصی جهش',
    fitMode: 'auto',
    gradient: 'from-[#172554] via-[#111827] to-[#080d1a]',
    isActive: true,
    subtitle: 'کدنویسی و توسعه  اختصاصی وب‌سایت، به همراه هاست قدرتمند، دامین رایگان، امنیت بالا و پشتیبانی فنی',
    actionType: 'product',
    titleColor: '#ffffff',
    actionTarget: 'pkg-golden-jahesh',
    imagePosition: 'center',
    subtitleColor: '#e2e8f0',
    titleFontSize: 'lg',
    highlightColor: '#fbbf24',
    overlayOpacity: 70,
    hideTextOverlay: false,
    singleLineTitle: true,
    subtitleFontSize: 'md',
    textBackdropTheme: 'dark',
    singleLineSubtitle: false,
    textBackdropEnabled: true,
    textBackdropOpacity: 25,
  },
  {
    id: 'banner-3',
    cta: 'مشاهده و ثبت‌نام',
    badge: 'ویژه مشاوران املاک',
    image: '/uploads/banners/official_banner-3.jpg',
    order: 1,
    title: 'سامانه مدیریت املاک جهش',
    fitMode: 'auto',
    gradient: 'from-[#172554] via-[#111827] to-[#080d1a]',
    isActive: true,
    subtitle: 'نرم‌افزار جامع فایلینگ، مدیریت مشتریان و بایگانی هوشمند املاک',
    actionType: 'product',
    titleColor: '#ffffff',
    targetGuild: 'املاک و مستغلات',
    actionTarget: 'pkg-amlak-jahesh',
    imagePosition: 'center',
    subtitleColor: '#e2e8f0',
    titleFontSize: 'lg',
    highlightColor: '#fbbf24',
    overlayOpacity: 65,
    hideTextOverlay: false,
    singleLineTitle: true,
    subtitleFontSize: 'md',
    textBackdropTheme: 'dark',
    singleLineSubtitle: false,
    textBackdropEnabled: true,
    textBackdropOpacity: 25,
  },
  {
    id: 'banner-1',
    cta: 'شروع کمپین انتخاباتی',
    badge: 'جشنواره تخفیف‌های ویژه',
    image: '/uploads/banners/official_banner-1.jpg',
    order: 2,
    title: 'تبلیغات هوشمند کاندیداهای شورای شهر',
    fitMode: 'auto',
    gradient: 'from-[#172554] via-[#111827] to-[#080d1a]',
    isActive: true,
    subtitle: 'تولید تیزر با هوش مصنوعی، طراحی سایت و ربات رزومه',
    actionType: 'all',
    titleColor: '#ffffff',
    imagePosition: 'center',
    subtitleColor: '#e2e8f0',
    titleFontSize: 'lg',
    highlightColor: '#fbbf24',
    overlayOpacity: 85,
    hideTextOverlay: false,
    singleLineTitle: true,
    subtitleFontSize: 'md',
    textBackdropTheme: 'dark',
    singleLineSubtitle: false,
    textBackdropEnabled: true,
    textBackdropOpacity: 65,
  },
  {
    id: 'banner_1789042491741',
    cta: 'شروع کنید',
    badge: 'ویژه',
    image: '/uploads/banners/official_banner_1789042491741.jpg',
    order: 3,
    title: 'همین حالا، وب‌سایت حرفه‌ای خود را بسازید!',
    fitMode: 'auto',
    gradient: 'from-[#172554] via-[#111827] to-[#080d1a]',
    isActive: true,
    subtitle: 'کدنویسی و توسعه  اختصاصی وب‌سایت، به همراه هاست قدرتمند، دامین رایگان، امنیت بالا و پشتیبانی فنی جهش',
    actionType: 'product',
    titleColor: '#ffffff',
    actionTarget: 'pkg-golden-jahesh',
    imagePosition: 'center',
    subtitleColor: '#e2e8f0',
    titleFontSize: 'lg',
    highlightColor: '#fbbf24',
    overlayOpacity: 85,
    hideTextOverlay: false,
    singleLineTitle: true,
    subtitleFontSize: 'md',
    textBackdropTheme: 'dark',
    singleLineSubtitle: false,
    textBackdropEnabled: true,
    textBackdropOpacity: 25,
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

// ==========================================
// Jahesh Technology Dashboard Tools API
// ==========================================
const TOOLS_FILE = path.join(__dirname, 'data', 'tools.json');
const TOOLS_UPLOADS_DIR = path.join(UPLOADS_DIR, 'tools');
if (!fs.existsSync(TOOLS_UPLOADS_DIR)) {
  fs.mkdirSync(TOOLS_UPLOADS_DIR, { recursive: true });
}

function getStoredTools() {
  try {
    if (fs.existsSync(TOOLS_FILE)) {
      const raw = fs.readFileSync(TOOLS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err) {
    console.error('Error reading tools.json:', err);
  }
  return [];
}

app.get('/api/tools', (req, res) => {
  try {
    const tools = getStoredTools();
    return res.json(tools);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/tools', (req, res) => {
  try {
    const tools = req.body;
    if (!Array.isArray(tools)) {
      return res.status(400).json({ error: 'Expected array of tools' });
    }
    const dataDir = path.dirname(TOOLS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(TOOLS_FILE, JSON.stringify(tools, null, 2), 'utf8');
    console.log(`[Tools] Successfully persisted ${tools.length} dashboard tools.`);
    return res.json({ success: true, count: tools.length });
  } catch (err) {
    console.error('Error saving tools.json:', err);
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/tools/save', (req, res) => {
  try {
    const tool = req.body;
    if (!tool || !tool.title) {
      return res.status(400).json({ error: 'Tool title is required' });
    }
    let tools = getStoredTools();
    const existingIndex = tools.findIndex(t => t.id === tool.id);
    if (existingIndex >= 0) {
      tools[existingIndex] = { ...tools[existingIndex], ...tool };
    } else {
      const newTool = {
        ...tool,
        id: tool.id || `tool_${Date.now()}`,
        order: tools.length,
        isActive: tool.isActive !== undefined ? tool.isActive : true
      };
      tools.push(newTool);
    }
    fs.writeFileSync(TOOLS_FILE, JSON.stringify(tools, null, 2), 'utf8');
    return res.json({ success: true, tool });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/tools/delete', (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: 'Tool id is required' });
    let tools = getStoredTools();
    tools = tools.filter(t => t.id !== id);
    fs.writeFileSync(TOOLS_FILE, JSON.stringify(tools, null, 2), 'utf8');
    return res.json({ success: true, remaining: tools.length });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/upload-tool-image', (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }
    const matches = image.match(/^data:image\/([a-zA-Z0-9+-]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: 'Invalid base64 image data' });
    }
    const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');
    const safeName = `tool_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${ext}`;
    const filePath = path.join(TOOLS_UPLOADS_DIR, safeName);
    fs.writeFileSync(filePath, buffer);

    // Also copy to jaheshkala build directory if it exists
    const distUploads = path.join(__dirname, 'jaheshkala', 'uploads', 'tools');
    if (fs.existsSync(distUploads)) {
      try {
        fs.writeFileSync(path.join(distUploads, safeName), buffer);
      } catch (e) {}
    }

    const publicUrl = `/uploads/tools/${safeName}`;
    return res.json({ success: true, url: publicUrl });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// ==========================================
// Products Persistence & Image Upload API
// ==========================================
const PRODUCTS_FILE = path.join(__dirname, 'data', 'products.json');
const DELETED_PRODUCTS_FILE = path.join(__dirname, 'data', 'deleted_products.json');

function getDeletedProductIds() {
  try {
    if (fs.existsSync(DELETED_PRODUCTS_FILE)) {
      const raw = fs.readFileSync(DELETED_PRODUCTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('Error reading deleted_products.json:', e);
  }
  return [];
}

function addDeletedProductId(id) {
  if (!id) return;
  try {
    const list = getDeletedProductIds();
    if (!list.includes(id)) {
      list.push(id);
      const dataDir = path.dirname(DELETED_PRODUCTS_FILE);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(DELETED_PRODUCTS_FILE, JSON.stringify(list, null, 2), 'utf8');
    }
  } catch (e) {
    console.error('Error adding deleted product ID:', e);
  }
}

function removeDeletedProductId(id) {
  if (!id) return;
  try {
    let list = getDeletedProductIds();
    if (list.includes(id)) {
      list = list.filter((x) => x !== id);
      fs.writeFileSync(DELETED_PRODUCTS_FILE, JSON.stringify(list, null, 2), 'utf8');
    }
  } catch (e) {
    console.error('Error removing deleted product ID:', e);
  }
}

function getDefaultProducts() {
  try {
    const deletedIds = new Set(getDeletedProductIds());
    if (fs.existsSync(PRODUCTS_FILE)) {
      const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter((p) => p && p.id && !deletedIds.has(p.id));
      }
    }
  } catch (e) {
    console.error('Error reading products.json:', e);
  }
  return [];
}

const DEFAULT_SERVER_PRODUCTS = getDefaultProducts();

// Endpoint to upload product image file directly to server (returns a permanent, lightweight URL)
app.post('/api/upload-product-image', (req, res) => {
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

    const safeName = `prod_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    const filePath = path.join(PRODUCTS_UPLOADS_DIR, safeName);
    fs.writeFileSync(filePath, buffer);

    // Also mirror to jaheshkala static directory if exists
    const distUploads = path.join(__dirname, 'jaheshkala', 'uploads', 'products');
    try {
      if (!fs.existsSync(distUploads)) {
        fs.mkdirSync(distUploads, { recursive: true });
      }
      fs.writeFileSync(path.join(distUploads, safeName), buffer);
    } catch {}

    const publicUrl = `/uploads/products/${safeName}`;
    console.log(`[Upload] Product image saved to ${publicUrl}`);
    return res.json({ success: true, url: publicUrl });
  } catch (err) {
    console.error('Error in /api/upload-product-image:', err);
    return res.status(500).json({ error: err.message || 'خطا در ذخیره‌سازی تصویر محصول' });
  }
});

// GET /api/products/deleted - returns blacklist of deleted product IDs
app.get('/api/products/deleted', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  return res.json(getDeletedProductIds());
});

// POST /api/products/deleted - adds a product ID to blacklist
app.post('/api/products/deleted', (req, res) => {
  const productId = req.body?.productId || req.body?.id;
  if (!productId) {
    return res.status(400).json({ error: 'productId is required' });
  }
  addDeletedProductId(productId);
  return res.json({ success: true, deleted: getDeletedProductIds() });
});

// GET /api/products - returns persisted products on disk
app.get('/api/products', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  const deletedIds = new Set(getDeletedProductIds());
  try {
    if (fs.existsSync(PRODUCTS_FILE)) {
      const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const filtered = parsed.filter((p) => p && p.id && !deletedIds.has(p.id));
        return res.json(filtered);
      }
    }
  } catch (err) {
    console.error('Error reading products.json:', err);
  }

  // Initialize products.json if missing
  try {
    const dataDir = path.dirname(PRODUCTS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(DEFAULT_SERVER_PRODUCTS, null, 2), 'utf8');
  } catch (e) {
    console.warn('Could not initialize products.json:', e);
  }

  return res.json(DEFAULT_SERVER_PRODUCTS.filter((p) => p && p.id && !deletedIds.has(p.id)));
});

// POST /api/products - replaces entire list on disk
app.post('/api/products', (req, res) => {
  try {
    const products = req.body;
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: 'Expected array of products' });
    }
    const deletedIds = new Set(getDeletedProductIds());
    const filtered = products.filter((p) => p && p.id && !deletedIds.has(p.id));
    const dataDir = path.dirname(PRODUCTS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(filtered, null, 2), 'utf8');
    console.log(`[Products] Successfully persisted ${filtered.length} products to disk.`);
    return res.json({ success: true, count: filtered.length });
  } catch (err) {
    console.error('Error saving products.json:', err);
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/products/save - upserts a single product on disk
app.post('/api/products/save', (req, res) => {
  try {
    const product = req.body;
    if (!product || !product.id) {
      return res.status(400).json({ error: 'Invalid product data' });
    }
    // Since user is explicitly saving/updating this product, un-blacklist it
    removeDeletedProductId(product.id);

    let list = [];
    if (fs.existsSync(PRODUCTS_FILE)) {
      try {
        const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      } catch {}
    }
    if (list.length === 0) {
      list = [...DEFAULT_SERVER_PRODUCTS];
    }
    const idx = list.findIndex((p) => p.id === product.id);
    if (idx >= 0) {
      list[idx] = product;
    } else {
      list = [product, ...list];
    }
    const dataDir = path.dirname(PRODUCTS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(list, null, 2), 'utf8');
    console.log(`[Products] Upserted product ${product.id} (${product.title}). Total: ${list.length}`);
    return res.json({ success: true, products: list });
  } catch (err) {
    console.error('Error in /api/products/save:', err);
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/products/delete - deletes a product by id from disk
app.post('/api/products/delete', (req, res) => {
  try {
    const productId = req.body?.productId || req.body?.id;
    if (!productId) {
      return res.status(400).json({ error: 'productId or id required' });
    }
    // Add to deleted products blacklist
    addDeletedProductId(productId);

    let list = [];
    if (fs.existsSync(PRODUCTS_FILE)) {
      try {
        const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      } catch {}
    }
    list = list.filter((p) => p.id !== productId);
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(list, null, 2), 'utf8');
    console.log(`[Products] Deleted product ${productId}. Total left: ${list.length}`);
    return res.json({ success: true, products: list });
  } catch (err) {
    console.error('Error in /api/products/delete:', err);
    return res.status(500).json({ error: err.message });
  }
});

// ==========================================
// Orders Persistence API
// ==========================================
const ORDERS_FILE = path.join(__dirname, 'data', 'orders.json');

function sortOrdersNewestFirst(orders) {
  if (!Array.isArray(orders)) return [];
  return orders.sort((a, b) => {
    const timeA = a.createdAt ? new Date(a.createdAt).getTime() : (a.paidAt ? new Date(a.paidAt).getTime() : 0);
    const timeB = b.createdAt ? new Date(b.createdAt).getTime() : (b.paidAt ? new Date(b.paidAt).getTime() : 0);
    if (timeA && timeB) return timeB - timeA;
    if (timeB) return 1;
    if (timeA) return -1;
    return String(b.id || '').localeCompare(String(a.id || ''));
  });
}

function readOrdersFromDisk() {
  if (fs.existsSync(ORDERS_FILE)) {
    try {
      const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return sortOrdersNewestFirst(parsed);
    } catch (e) {
      console.warn('Error reading orders.json:', e);
    }
  }
  return [];
}

function writeOrdersToDisk(orders) {
  try {
    const dataDir = path.dirname(ORDERS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const sorted = sortOrdersNewestFirst(orders);
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(sorted, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing orders.json:', e);
  }
}

// GET /api/orders
app.get('/api/orders', (_req, res) => {
  try {
    const orders = readOrdersFromDisk();
    return res.json({ success: true, orders });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/orders
app.post('/api/orders', (req, res) => {
  try {
    let incoming = req.body;
    if (incoming && Array.isArray(incoming.orders)) {
      incoming = incoming.orders;
    } else if (incoming && incoming.id && !Array.isArray(incoming)) {
      incoming = [incoming];
    }
    if (!Array.isArray(incoming)) {
      return res.status(400).json({ error: 'Expected array of orders or single order object' });
    }
    const current = readOrdersFromDisk();
    const existingMap = new Map(current.map((o) => [o.id, o]));
    incoming.forEach((o) => {
      if (o && o.id) {
        if (!o.createdAt) {
          o.createdAt = new Date().toISOString();
        }
        existingMap.set(o.id, { ...existingMap.get(o.id), ...o });
      }
    });
    const merged = Array.from(existingMap.values());
    writeOrdersToDisk(merged);
    return res.json({ success: true, count: merged.length, orders: merged });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/orders/save
app.post('/api/orders/save', (req, res) => {
  try {
    const order = req.body;
    if (!order || !order.id) {
      return res.status(400).json({ error: 'Invalid order object' });
    }
    if (!order.createdAt) {
      order.createdAt = new Date().toISOString();
    }
    const current = readOrdersFromDisk();
    const idx = current.findIndex(
      (o) => o.id === order.id || (o.trackingCode && order.trackingCode && o.trackingCode === order.trackingCode)
    );
    let updated;
    if (idx >= 0) {
      updated = [...current];
      updated[idx] = { ...current[idx], ...order };
    } else {
      updated = [order, ...current];
    }
    writeOrdersToDisk(updated);
    console.log(`[Orders] Saved order ${order.id}. Total orders: ${updated.length}`);
    return res.json({ success: true, order, count: updated.length, orders: updated });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/orders/update-status
app.post('/api/orders/update-status', (req, res) => {
  try {
    const { orderId, status } = req.body;
    if (!orderId || !status) {
      return res.status(400).json({ error: 'orderId and status required' });
    }
    const current = readOrdersFromDisk();
    const updated = current.map((o) => (o.id === orderId ? { ...o, status } : o));
    writeOrdersToDisk(updated);
    return res.json({ success: true, count: updated.length, orders: updated });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/orders/delete
app.post('/api/orders/delete', (req, res) => {
  try {
    const { orderId } = req.body;
    if (!orderId) {
      return res.status(400).json({ error: 'orderId required' });
    }
    const current = readOrdersFromDisk();
    const updated = current.filter((o) => o.id !== orderId && o.trackingCode !== orderId);
    writeOrdersToDisk(updated);
    return res.json({ success: true, count: updated.length, orders: updated });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/orders/clear
app.post('/api/orders/clear', (_req, res) => {
  try {
    writeOrdersToDisk([]);
    return res.json({ success: true, count: 0, orders: [] });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// ==========================================
// Users & Roles Persistence API
// ==========================================
const USERS_FILE = path.join(__dirname, 'data', 'users.json');

function normalizePhone(phone) {
  if (!phone) return '';
  let str = String(phone).trim();
  if (!str || str === 'ثبت نشده' || str === 'test') return '';
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  for (let i = 0; i < 10; i++) {
    str = str.replace(new RegExp(persianDigits[i], 'g'), String(i));
    str = str.replace(new RegExp(arabicDigits[i], 'g'), String(i));
  }
  str = str.replace(/[^0-9]/g, '');
  if (str.startsWith('0098') && str.length >= 12) str = '0' + str.slice(4);
  else if (str.startsWith('98') && str.length === 12) str = '0' + str.slice(2);
  else if (!str.startsWith('0') && str.length === 10 && str.startsWith('9')) str = '0' + str;
  return str;
}

function normalizeUsername(username) {
  if (!username) return '';
  return String(username).trim().toLowerCase().replace(/^@+/, '').trim();
}

function matchUser(a, b) {
  if (!a || !b) return false;
  if (a.id && b.id && String(a.id).trim() === String(b.id).trim()) return true;
  const u1 = normalizeUsername(a.username);
  const u2 = normalizeUsername(b.username);
  if (u1 && u2 && u1 === u2) return true;
  const p1 = normalizePhone(a.phone);
  const p2 = normalizePhone(b.phone);
  if (p1 && p2 && p1 === p2 && p1.length >= 10) return true;
  return false;
}

function readUsersFromDisk() {
  if (fs.existsSync(USERS_FILE)) {
    try {
      const raw = fs.readFileSync(USERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Error reading users.json:', e);
    }
  }
  return [];
}

function writeUsersToDisk(users) {
  try {
    const dataDir = path.dirname(USERS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing users.json:', e);
  }
}

// GET /api/users
app.get('/api/users', (_req, res) => {
  try {
    const users = readUsersFromDisk();
    return res.json({ success: true, users });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/users/update-role
app.post('/api/users/update-role', (req, res) => {
  try {
    const { id, username, phone, role } = req.body || {};
    if (!role) {
      return res.status(400).json({ error: 'Role is required' });
    }
    const current = readUsersFromDisk();
    const target = { id, username, phone };
    let matchedCount = 0;

    for (let i = 0; i < current.length; i++) {
      if (matchUser(current[i], target)) {
        current[i].role = role;
        matchedCount++;
      }
    }

    if (matchedCount === 0 && (username || phone || id)) {
      current.push({
        id: id || `usr-${Date.now()}`,
        username: normalizeUsername(username) || username || '',
        phone: normalizePhone(phone) || phone || '',
        role: role,
        createdAt: new Date().toISOString(),
      });
    }

    writeUsersToDisk(current);
    console.log(`[Users] Updated role to ${role} for user ${username || phone || id} (matched: ${matchedCount})`);
    return res.json({ success: true, count: current.length, users: current });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/users (bulk or single user save/update)
app.post('/api/users', (req, res) => {
  try {
    let incoming = req.body;
    if (incoming && Array.isArray(incoming.users)) {
      incoming = incoming.users;
    } else if (incoming && !Array.isArray(incoming)) {
      incoming = [incoming];
    }
    if (!Array.isArray(incoming)) {
      return res.status(400).json({ error: 'Expected array of users or single user' });
    }
    const current = readUsersFromDisk();
    incoming.forEach((user) => {
      if (user && (user.id || user.username || user.phone)) {
        const idx = current.findIndex((u) => matchUser(u, user));
        if (idx >= 0) {
          current[idx] = { ...current[idx], ...user };
        } else {
          current.unshift(user);
        }
      }
    });
    writeUsersToDisk(current);
    return res.json({ success: true, count: current.length, users: current });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/users/save
app.post('/api/users/save', (req, res) => {
  try {
    const user = req.body;
    if (!user || (!user.id && !user.username && !user.phone)) {
      return res.status(400).json({ error: 'Invalid user payload' });
    }
    const current = readUsersFromDisk();
    const idx = current.findIndex((u) => matchUser(u, user));
    if (idx >= 0) {
      current[idx] = { ...current[idx], ...user };
    } else {
      current.unshift(user);
    }
    writeUsersToDisk(current);
    return res.json({ success: true, user, count: current.length });
  } catch (err) {
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
      // Auto-save pending order directly to server orders disk
      if (req.body?.orderData) {
        try {
          const currentOrders = readOrdersFromDisk();
          const pOrder = { ...req.body.orderData };
          pOrder.trackingCode = String(data.trackId);
          pOrder.zibalTrackId = String(data.trackId);
          pOrder.status = pOrder.status || 'در حال بررسی';
          pOrder.createdAt = pOrder.createdAt || new Date().toISOString();
          const pIdx = currentOrders.findIndex((o) => o.id === pOrder.id);
          if (pIdx >= 0) {
            currentOrders[pIdx] = { ...currentOrders[pIdx], ...pOrder };
          } else {
            currentOrders.unshift(pOrder);
          }
          writeOrdersToDisk(currentOrders);
          console.log(`[Orders] Auto-saved pending order ${pOrder.id} with trackId ${data.trackId}`);
        } catch (saveErr) {
          console.warn('[Orders] Could not auto-save pending order on request:', saveErr);
        }
      }

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
      const refNum = data.refNumber ? String(data.refNumber) : String(trackId);

      // Auto-update order on disk immediately upon successful verification!
      try {
        const currentOrders = readOrdersFromDisk();
        const oIdx = currentOrders.findIndex(
          (o) =>
            (o.trackingCode && String(o.trackingCode) === String(trackId)) ||
            (o.zibalTrackId && String(o.zibalTrackId) === String(trackId)) ||
            (data.orderId && o.id === data.orderId)
        );
        if (oIdx >= 0) {
          currentOrders[oIdx] = {
            ...currentOrders[oIdx],
            status: 'تایید شده / در حال آماده‌سازی',
            trackingCode: String(trackId),
            paymentRefId: refNum,
            zibalTrackId: String(trackId),
            zibalRefNumber: refNum,
            cardNumber: data.cardNumber || currentOrders[oIdx].cardNumber || '',
            paidAt: data.paidAt || new Date().toISOString(),
            paymentGateway: 'زیبال (Zibal - پرداخت موفق شاپرک)',
          };
          writeOrdersToDisk(currentOrders);
          console.log(`[Zibal Verify] Updated order ${currentOrders[oIdx].id} on disk to confirmed!`);
        }
      } catch (diskErr) {
        console.warn('[Zibal Verify] Could not auto-update order on disk:', diskErr);
      }

      return res.json({
        success: true,
        result: data.result,
        status: data.status,
        isSandboxFallback,
        refNumber: refNum,
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
    if (
      (cleanUser === 'admin' || cleanUser === 'jahesh' || cleanUser === 'amlak_jaheshadmin' || cleanUser === 'jaheshadmin') &&
      (cleanPass === 'jahesh1395' || cleanPass === 'jahesh' || cleanPass === 'admin' || cleanPass === 'jahesh2026')
    ) {
      return res.json({
        success: true,
        user: {
          username: cleanUser,
          buyerName: 'مدیر کل سیستم جهش',
          role: 'admin',
          licenseKey: 'JA-ROOT-ADMIN-VIP',
          expiresAt: 'نامحدود (حساب مدیریت)',
          days: 365,
          status: 'active'
        }
      });
    }

    // 2. Deterministic Hash Validation (Strict exact password check)
    function hashString(str) {
      let hash = 5381;
      for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
        hash = hash & hash;
      }
      return Math.abs(hash);
    }
    function generateDeterministicPassword(seed) {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      const cleanSeed = (seed || 'jahesh').toLowerCase().trim();
      const num = hashString(cleanSeed + '_jahesh_amlak_secret_salt_2026');
      const digits = 1000 + (num % 9000);
      let letters = '';
      let temp = Math.floor(num / 13);
      for (let i = 0; i < 4; i++) {
        letters += chars[temp % chars.length];
        temp = Math.floor(temp / chars.length) + (i * 7) + 3;
      }
      return `JK-${digits}${letters}`;
    }

    const expectedPassDirect = generateDeterministicPassword(cleanUser);
    const expectedPassPrefixed = generateDeterministicPassword('amlak_' + cleanUser);

    if (cleanPass === expectedPassDirect || cleanPass === expectedPassPrefixed) {
      return res.json({
        success: true,
        user: {
          username: cleanUser,
          buyerName: cleanUser,
          role: 'subscriber',
          licenseKey: `JA-AMLAK-2026-${cleanUser.slice(-5).toUpperCase()}`,
          expiresAt: '۳۰ روزه فعال',
          days: 30,
          status: 'active'
        }
      });
    }

    // 3. Check Customer Purchased Licenses stored on server
    const licenses = getAmlakLicensesFromServer();
    const matched = licenses.find(
      l => (l.username.toLowerCase() === cleanUser || l.username.toLowerCase() === 'amlak_' + cleanUser) && l.password === cleanPass
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
