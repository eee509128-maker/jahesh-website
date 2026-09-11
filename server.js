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

// ==========================================
// Products Persistence & Image Upload API
// ==========================================
const PRODUCTS_FILE = path.join(__dirname, 'data', 'products.json');

const DEFAULT_SERVER_PRODUCTS = [
  {
    id: 'pkg-golden-jahesh',
    title: 'پکیج طلایی طراحی سایت اختصاصی جهش',
    category: 'طراحی سایت و خدمات وب',
    brand: 'جهش‌آی‌تی (Jahesh IT)',
    price: 7900000,
    originalPrice: 11500000,
    discountPercent: 31,
    badge: 'پیشنهاد طلایی جهش',
    isPopular: true,
    isGolden: true,
    isIncredible: true,
    incredibleTimerDuration: '1month',
    incredibleExpiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    rating: 5.0,
    reviewsCount: 48,
    deliveryDays: 'تحویل فوری ۳ تا ۷ روز کاری',
    warranty: '۱ ماه پشتیبانی فنی رایگان + هاست و دامین رایگان',
    couponCode: 'JAHESH20',
    couponDiscountPercent: 20,
    shortDescription: 'طراحی سایت مدرن، ریسپانسیو و پرسرعت متصل به درگاه پرداخت زیبال با امنیت کامل و پنل مدیریت اختصاصی.',
    fullDescription: 'با پکیج طلایی طراحی وب‌سایت جهش، یک وب‌سایت فروشگاهی یا شرکتی تمام‌عیار با کدنویسی اختصاصی، رابط کاربری مدرن، سئو استاندارد، هاست پرسرعت و درگاه پرداخت آنلاین تحویل بگیرید.',
    features: [
      'طراحی کاملاً واکنش‌گرا (Responsive) سازگار با موبایل و تبلت',
      'اتصال مستقیم به درگاه پرداخت اینترنتی زیبال (Zibal)',
      'پنل اختصاصی مدیریت محصولات، سفارشات و مشتریان',
      'هاست پرسرعت NVMe و دامنه رایگان',
      '۱ ماه پشتیبانی فنی و آموزش کامل کاربری',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'pkg-amlak-jahesh',
    title: 'نرم‌افزار جامع مدیریت املاک جهش (اشتراک آنلاین و ابری)',
    category: 'نرم‌افزار و سامانه‌های هوشمند',
    brand: 'جهش کمپانی (Jahesh Company)',
    price: 250000,
    originalPrice: 350000,
    discountPercent: 28,
    badge: 'سامانه هوشمند املاک',
    isPopular: true,
    isGolden: true,
    isSubscription: true,
    pricePerDay: 250000,
    rating: 5.0,
    reviewsCount: 64,
    deliveryDays: 'فعال‌سازی آنی و دسترسی فوری',
    warranty: 'پشتیبانی فنی اختصاصی + اتصال دیتابیس ابری و پشتیبان‌گیری',
    couponCode: 'AMLAK10',
    couponDiscountPercent: 10,
    shortDescription: 'سامانه پیشرفته مشاورین و مدیران املاک با قابلیت ثبت صوتی، هوش مصنوعی تطبیق مشتری، تور مجازی ۳۶۰ درجه و هماهنگ‌سازی چندکاربره.',
    fullDescription: 'نرم‌افزار جامع مدیریت املاک جهش یک پلتفرم نسل جدید برای مشاورین و آژانس‌های املاک است.',
    features: [
      '🤖 دستیار هوشمند NLP و تایپ صوتی لایو برای ثبت سریع املاک و متقاضیان',
      '🌐 نمایشگر و تور مجازی ۳۶۰ درجه پانوراما همراه با هات‌اسپات تعاملی',
      '👥 سیستم پیشرفته Match Making (تطبیق هوشمند فایل و مشتری بر اساس بودجه و نیاز)',
      '📥 قابلیت پشتیبان‌گیری، دانلود فایل و ادغام امن اطلاعات بین کامپیوتر و گوشی',
      '⚡ امکان دسترسی آنلاین و مستقیم با حساب کاربری فعال جهش',
      '💰 تعرفه منعطف: فقط ۲۵۰,۰۰۰ تومان به ازای هر روز اشتراک با تخفیف‌های دوره‌ای',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    ]
  },
  {
    id: 'pkg-ads-smart',
    title: 'پکیج‌های تبلیغات هوشمند جهش (تعرفه‌های ویژه کمپین)',
    category: 'خدمات و تبلیغات دیجیتال',
    brand: 'جهش دیجیتال مارکتینگ (Jahesh Marketing)',
    price: 9900000,
    originalPrice: 36500000,
    discountPercent: 30,
    badge: 'تعرفه‌های ویژه تبلیغاتی',
    isPopular: true,
    isGolden: true,
    hasCustomPlans: true,
    customPlansTitle: 'پکیج‌های تبلیغات هوشمند',
    customPlansSubtitle: 'انتخاب کنید و کمپین خود را به سطح بالاتری ببرید',
    rating: 5.0,
    reviewsCount: 39,
    deliveryDays: 'شروع فوری کمپین در کمتر از ۲۴ ساعت',
    warranty: 'تضمین بازدهی + گزارش دقیق لحظه‌ای با داشبورد اختصاصی',
    shortDescription: 'پکیج جامع تبلیغات هوشمند و هدفمند ویژه کسب‌وکارها با ۳ تعرفه پایه، طلایی و پلاتینیوم همراه با تیزر هوش مصنوعی، محتوا و گزارش تحلیلی.',
    fullDescription: 'کمپین تبلیغاتی هوشمند جهش با بهره‌گیری از هوش مصنوعی، دیتابیس دقیق مشاغل، سناریونویسی حرفه‌ای، تولید تیزر و پوستر اختصاصی و اجرای هدفمند به شما کمک می‌کند مخاطبان واقعی کسب‌وکارتان را جذب نمایید.',
    features: [
      'تبلیغات هدفمند منطقه‌ای و استانی بر اساس اصناف و مشاغل',
      'طراحی پوسترها و استوری‌های تبلیغاتی فوق‌العاده باکیفیت',
      'تولید تیزر و موشن‌گرافیک با هوش مصنوعی',
      'گزارش‌گیری تحلیلی و داشبورد لحظه‌ای بازخورد کمپین',
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    ],
    subscriptionPlans: [
      {
        id: 'plan-starter',
        name: 'پایه (استارتر)',
        badge: 'مناسب شروع',
        price: 9900000,
        originalPrice: 14000000,
        durationDays: 30,
        durationLabel: 'دوره ۱ ماهه',
        shortDescription: 'مناسب کسب‌وکارهای نوپا و تست اولیه بازار',
        features: [
          'لیست تا ۲,۰۰۰ شماره هدفمند',
          '۲۰ پوستر حرفه‌ای',
          '۱ تیزر تبلیغاتی',
          'گزارش ساده از عملکرد کمپین',
        ],
        isPopular: false,
      },
      {
        id: 'plan-golden',
        name: 'طلایی (پیشنهادی ویژه)',
        badge: '🔥 پیشنهادی ویژه',
        price: 25500000,
        originalPrice: 36500000,
        durationDays: 30,
        durationLabel: 'دوره ۱ ماهه طلایی',
        shortDescription: '۳۰٪ تخفیف ویژه اولین همکاری',
        features: [
          'تمام امکانات پیشرفته و تحلیلی',
          '۵۰۰۰ + فیلتر حرفه‌ای مخاطبان',
          'تیزر و ویدیو با هوش مصنوعی',
          '۵۰ پوستر و محتوای اختصاصی',
          'پشتیبانی مستقیم و مشاوره کمپین',
        ],
        isPopular: true,
      },
      {
        id: 'plan-vip',
        name: 'پلاتینیوم (VIP)',
        badge: 'VIP پلاتینیوم',
        price: 490000000,
        originalPrice: 590000000,
        durationDays: 365,
        durationLabel: 'کمپین جامع سالانه VIP',
        shortDescription: 'بالاترین سطح دسترسی و مدیریت اختصاصی',
        features: [
          'همه امکانات طلایی + محتوای اختصاصی نامحدود',
          'کمپین ویژه برای هر شهرستان به تفکیک',
          'شناسایی و هماهنگی اینفلوئنسرها',
          'پشتیبانی ۲۴ ساعته اختصاصی VIP',
          'مدیریت صفر تا صد مارکتینگ و لایو',
        ],
        isPopular: false,
      },
    ],
  },
];

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

// GET /api/products - returns persisted products on disk
app.get('/api/products', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
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

  return res.json(DEFAULT_SERVER_PRODUCTS);
});

// POST /api/products - replaces entire list on disk
app.post('/api/products', (req, res) => {
  try {
    const products = req.body;
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: 'Expected array of products' });
    }
    const dataDir = path.dirname(PRODUCTS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8');
    console.log(`[Products] Successfully persisted ${products.length} products to disk.`);
    return res.json({ success: true, count: products.length });
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
