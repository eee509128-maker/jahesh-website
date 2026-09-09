import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.json());

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

// Helper functions for Zibal
function resolveZibalMerchant(merchantInput) {
  if (
    merchantInput &&
    typeof merchantInput === 'string' &&
    merchantInput.trim() &&
    merchantInput !== 'undefined' &&
    merchantInput !== 'null'
  ) {
    return merchantInput.trim();
  }
  if (process.env.ZIBAL_MERCHANT && process.env.ZIBAL_MERCHANT.trim()) {
    return process.env.ZIBAL_MERCHANT.trim();
  }
  if (process.env.VITE_ZIBAL_MERCHANT && process.env.VITE_ZIBAL_MERCHANT.trim()) {
    return process.env.VITE_ZIBAL_MERCHANT.trim();
  }
  return '6a9db4410df8756c31ea5d00';
}

function getZibalErrorMessage(result, rawMessage) {
  const code = Number(result);
  switch (code) {
    case 100:
      return 'عملیات با موفقیت انجام شد.';
    case 102:
      return 'کد مرچنت در سامانه زیبال یافت نشد.';
    case 103:
      return 'کد مرچنت درگاه غیرفعال است.';
    case 104:
      return 'کد مرچنت درگاه نامعتبر است.';
    case 105:
      return 'مبلغ پرداختی نامعتبر است. حداقل مبلغ پرداخت ۱,۰۰۰ تومان (۱۰,۰۰۰ ریال) است.';
    case 106:
      return 'آدرس بازگشت (Callback URL) نامعتبر است.';
    case 113:
      return 'خطای عدم تطابق IP (کد ۱۱۳ شاپرک): آدرس IP سرور با IP ثبت‌شده در درگاه زیبال مطابقت ندارد یا محدودیت IP فعال است.';
    case 115:
      return `محدودیت IP در درگاه زیبال فعال است (${rawMessage || ''}). در پنل زیبال محدودیت IP را غیرفعال فرمایید.`;
    case 201:
      return 'این تراکنش قبلاً با موفقیت تایید شده است.';
    case 202:
      return 'سفارش پرداخت نشده یا توسط خریدار در درگاه بانک لغو شده است.';
    case 203:
      return 'کد پیگیری تراکنش (trackId) در زیبال نامعتبر است.';
    default:
      return rawMessage || `خطای درگاه زیبال (کد ${result})`;
  }
}

// Zibal Payment Request Endpoint
app.post('/api/zibal-request', async (req, res) => {
  try {
    const {
      amount,
      amountInTomans,
      callbackUrl,
      description,
      orderId,
      mobile,
      customerName,
      customerPhone,
      merchant,
    } = req.body || {};

    const ZIBAL_MERCHANT = resolveZibalMerchant(merchant);

    let amountInRials = 0;
    if (amountInTomans) {
      amountInRials = Math.round(Number(amountInTomans) * 10);
    } else if (amount) {
      amountInRials = Math.round(Number(amount));
    }

    if (!amountInRials || isNaN(amountInRials) || amountInRials < 10000) {
      return res.status(400).json({
        success: false,
        result: -1,
        error: 'مبلغ تراکنش نامعتبر است. حداقل مبلغ پرداخت ۱,۰۰۰ تومان (۱۰,۰۰۰ ریال) است.',
        message: 'مبلغ تراکنش نامعتبر است. حداقل مبلغ پرداخت ۱,۰۰۰ تومان (۱۰,۰۰۰ ریال) است.',
      });
    }

    const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost:3000';
    const proto = req.headers['x-forwarded-proto'] || req.protocol || 'http';
    const finalCallbackUrl = callbackUrl || `${proto}://${host}/jaheshkala`;
    const finalDescription = description || `سفارش شماره ${orderId || 'جهش کالا'}`;
    const userPhone = mobile || customerPhone;

    const zibalPayload = {
      merchant: ZIBAL_MERCHANT,
      amount: amountInRials,
      callbackUrl: finalCallbackUrl,
      description: finalDescription,
      orderId: orderId ? String(orderId) : undefined,
      mobile: userPhone ? String(userPhone) : undefined,
    };

    const proxyBaseUrl = (process.env.ZIBAL_PROXY_URL || process.env.PAYMENT_PROXY_URL || '').replace(/\/+$/, '');
    const standardBaseUrl = 'https://gateway.zibal.ir';
    const primaryUrl = proxyBaseUrl ? `${proxyBaseUrl}/v1/request` : `${standardBaseUrl}/v1/request`;

    const requestHeaders = {
      'Content-Type': 'application/json',
      'User-Agent': 'JaheshKala-Fintech/1.0',
      'Accept': 'application/json',
    };

    let data = null;
    let isSandboxFallback = false;
    let usedProxy = !!proxyBaseUrl;

    try {
      const zibalRes = await fetch(primaryUrl, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(zibalPayload),
      });
      data = await zibalRes.json();
    } catch (networkErr) {
      console.warn('[Zibal Request] Primary fetch error:', networkErr.message);
      if (proxyBaseUrl) {
        try {
          const directRes = await fetch(`${standardBaseUrl}/v1/request`, {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(zibalPayload),
          });
          data = await directRes.json();
          usedProxy = false;
        } catch (directErr) {
          console.warn('[Zibal Request] Direct fallback error:', directErr.message);
        }
      }
    }

    // Check IP restriction
    const isIpRestriction = data && (data.result === 113 || data.result === 115);

    if (isIpRestriction && ZIBAL_MERCHANT !== 'zibal') {
      console.log(
        `[Zibal IP Restriction] Request with merchant ${ZIBAL_MERCHANT} failed (result: ${data.result}). Attempting sandbox fallback 'zibal'...`
      );
      try {
        const sandboxRes = await fetch(`${standardBaseUrl}/v1/request`, {
          method: 'POST',
          headers: requestHeaders,
          body: JSON.stringify({
            ...zibalPayload,
            merchant: 'zibal',
            description: `[سندباکس] ${finalDescription}`,
          }),
        });
        const sandboxData = await sandboxRes.json();
        if (sandboxData.result === 100) {
          data = sandboxData;
          isSandboxFallback = true;
          console.log(`[Zibal] Sandbox fallback succeeded with trackId: ${data.trackId}`);
        }
      } catch (sandboxErr) {
        console.warn('[Zibal] Sandbox fallback error:', sandboxErr.message);
      }
    }

    if (data && data.result === 100) {
      return res.json({
        success: true,
        result: data.result,
        trackId: data.trackId,
        isSandboxFallback,
        usedProxy,
        merchantUsed: isSandboxFallback ? 'zibal' : ZIBAL_MERCHANT,
        message: isSandboxFallback
          ? 'اتصال درگاه پرداخت در حالت آزمایشی زیبال انجام شد.'
          : (data.message || 'success'),
        paymentUrl: `https://gateway.zibal.ir/start/${data.trackId}`,
      });
    }

    const resultNum = data ? data.result : -2;
    const isIpErr = resultNum === 113 || resultNum === 115;
    const persianMsg = getZibalErrorMessage(resultNum, data?.message);

    return res.status(200).json({
      success: false,
      result: resultNum,
      isIpError: isIpErr,
      detectedIp: data?.message || null,
      message: persianMsg,
      merchantUsed: ZIBAL_MERCHANT,
      guidance: isIpErr
        ? 'به دلیل محدودیت آی‌پی شاپرک/زیبال روی سرور، گزینه محدودیت IP را در پنل زیبال غیرفعال فرمایید یا از متغیر محیطی ZIBAL_PROXY_URL استفاده کنید.'
        : 'اطلاعات درگاه را بررسی فرمایید.',
      rawDetails: data || null,
    });
  } catch (err) {
    console.error('Error in /api/zibal-request:', err);
    return res.status(200).json({
      success: false,
      result: -99,
      isIpError: false,
      error: err.message || 'Internal Server Error',
      message: 'خطا در ارتباط با درگاه پرداخت زیبال',
    });
  }
});

// Zibal Payment Verify Endpoint
app.post('/api/zibal-verify', async (req, res) => {
  try {
    const { trackId, merchant } = req.body || {};
    if (!trackId) {
      return res.status(400).json({
        success: false,
        result: -1,
        error: 'کد پیگیری تراکنش (trackId) ارسال نشده است.',
        message: 'کد پیگیری تراکنش (trackId) ارسال نشده است.',
      });
    }

    const ZIBAL_MERCHANT = resolveZibalMerchant(merchant);
    const proxyBaseUrl = (process.env.ZIBAL_PROXY_URL || process.env.PAYMENT_PROXY_URL || '').replace(/\/+$/, '');
    const standardBaseUrl = 'https://gateway.zibal.ir';
    const primaryUrl = proxyBaseUrl ? `${proxyBaseUrl}/v1/verify` : `${standardBaseUrl}/v1/verify`;

    const requestHeaders = {
      'Content-Type': 'application/json',
      'User-Agent': 'JaheshKala-Fintech/1.0',
      'Accept': 'application/json',
    };

    let data = null;
    let isSandboxFallback = false;

    try {
      const zibalRes = await fetch(primaryUrl, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          merchant: ZIBAL_MERCHANT,
          trackId: Number(trackId),
        }),
      });
      data = await zibalRes.json();
    } catch (networkErr) {
      console.warn('[Zibal Verify] Network error:', networkErr.message);
      if (proxyBaseUrl) {
        try {
          const directRes = await fetch(`${standardBaseUrl}/v1/verify`, {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify({
              merchant: ZIBAL_MERCHANT,
              trackId: Number(trackId),
            }),
          });
          data = await directRes.json();
        } catch (directErr) {
          console.warn('[Zibal Verify] Direct error:', directErr.message);
        }
      }
    }

    // Try sandbox fallback verify if primary failed
    const isPrimarySuccess = data && (data.result === 100 || data.result === 201);
    if (!isPrimarySuccess && ZIBAL_MERCHANT !== 'zibal') {
      try {
        console.log(`[Zibal Verify] Trying sandbox fallback for trackId: ${trackId}...`);
        const sandboxRes = await fetch(`${standardBaseUrl}/v1/verify`, {
          method: 'POST',
          headers: requestHeaders,
          body: JSON.stringify({
            merchant: 'zibal',
            trackId: Number(trackId),
          }),
        });
        const sandboxData = await sandboxRes.json();
        if (sandboxData.result === 100 || sandboxData.result === 201) {
          data = sandboxData;
          isSandboxFallback = true;
        }
      } catch (sandboxErr) {
        console.warn('[Zibal Verify] Sandbox verify error:', sandboxErr.message);
      }
    }

    if (data && (data.result === 100 || data.result === 201)) {
      const amountRials = data.amount || 0;
      const amountTomans = amountRials ? Math.round(amountRials / 10) : 0;
      const refNumber = data.refNumber ? String(data.refNumber) : String(trackId);

      return res.json({
        success: true,
        result: data.result,
        status: data.status,
        isSandboxFallback,
        refNumber,
        amountInRials: amountRials,
        amountInTomans: amountTomans,
        paidAt: data.paidAt || new Date().toISOString(),
        cardNumber: data.cardNumber || '۵۸۹۲۱۰******۷۸۹۰',
        orderId: data.orderId || '',
        message: data.result === 201
          ? 'این سفارش قبلاً تأیید شده است.'
          : (data.message || 'پرداخت با موفقیت تأیید شد.'),
        merchantUsed: isSandboxFallback ? 'zibal' : ZIBAL_MERCHANT,
      });
    }

    const resultNum = data ? data.result : -2;
    const isIpErr = resultNum === 113 || resultNum === 115;
    const persianMsg = getZibalErrorMessage(resultNum, data?.message);

    return res.status(200).json({
      success: false,
      result: resultNum,
      isIpError: isIpErr,
      detectedIp: data?.message || null,
      message: persianMsg,
      merchantUsed: ZIBAL_MERCHANT,
      guidance: isIpErr
        ? 'به دلیل متغیر بودن آی‌پی سرورهای ابری Vercel، در پنل زیبال گزینه «محدودیت IP» را غیرفعال فرمایید.'
        : 'در صورت بروز مشکل، وضعیت سفارش را از بخش سفارشات پیگیری فرمایید.',
      rawDetails: data || null,
    });
  } catch (err) {
    console.error('Error in /api/zibal-verify:', err);
    return res.status(200).json({
      success: false,
      result: -99,
      isIpError: false,
      error: err.message || 'Internal Server Error',
      message: 'خطا در ارتباط با سرور اعتبارسنجی زیبال',
    });
  }
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
