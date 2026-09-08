import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

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
