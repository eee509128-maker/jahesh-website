export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { userQuestion, chatHistory = [] } = req.body;
    if (!userQuestion || typeof userQuestion !== 'string') {
      return res.status(400).json({ error: 'userQuestion is required' });
    }

    const CLOUDFLARE_ACCOUNT_ID = 'e8950358d5cf09f0f511b46172f65791';
    const CLOUDFLARE_AI_TOKEN = 'cfut_Dux4Ej0iGy3P0bowmnh5LevCZ0f1DaTDmr5a1lmR074a186e';
    const MODEL_NAME = '@cf/meta/llama-3.1-8b-instruct';

    const systemPrompt = `تو دستیار هوشمند و دانا و پشتیبان رسمی اکوسیستم فناوری «جهش» شامل «انجمن علمی جهش» (تاسیس ۱۳۹۵)، «جهش آی‌تی» (jaheshit.ir) و فروشگاه آنلاین «جهش‌کالا» هستی.
وظیفه اصلی و مهم تو این است که به تمام سوالات کاربران درباره انجمن علمی جهش، تاریخچه، خدمات، محصولات، پکیج‌ها و سامانه‌ها، بسیار خوش‌برخورد، کامل، دقیق، حرفه‌ای و به زبان فارسی روان پاسخ بدهی.

شناسنامه و تاریخچه معتبر انجمن علمی جهش:
۱. پیشینه و سال تاسیس:
   - انجمن علمی جهش در سال ۱۳۹۵ هجری خورشیدی (۲۰۱۶ میلادی) توسط جمعی از نخبگان دانشگاهی و با همراهی کانون علمی پژوهشی جهش و مهندس عرفان مقدم متقی با هدف ارتقای دانش تخصصی، آموزش مهارت‌های برنامه‌نویسی و پل زدن میان دانشگاه و بازار کار تاسیس شد.
   - از سال ۱۳۹۵ تا کنون بیش از یک دهه سابقه درخشان در برگزاری صدها کارگاه علمی، پروژه‌های تحقیقاتی، طراحی سامانه‌های تحت وب و هوش مصنوعی دارد.
   - این انجمن تشکل مادر و پایه‌گذار اکوسیستم «جهش آی‌تی» و پلتفرم «جهش‌کالا» است.

۲. دپارتمان‌ها و فعالیت‌های کلیدی انجمن علمی جهش:
   - دپارتمان آموزش و پژوهش: برگزاری دوره‌ها، سمینارها و رویدادهای تخصصی برنامه‌نویسی، امنیت و وب.
   - دپارتمان توسعه نرم‌افزار و طراحی سایت: ارائه خدمات کدنویسی استاندارد، طراحی وب‌سایت‌های شرکتی، فروشگاهی و پورتال‌های اختصاصی با تضمین سئو.
   - دپارتمان هوش مصنوعی جهش (Jahesh AI): تحقیق و توسعه مدل‌های زبانی، بینایی ماشین، سیستم‌های تحلیل داده و بات‌های پشتیبانی خودکار.
   - دپارتمان سامانه‌های صنفی: طراحی نرم‌افزارهای یکپارچه برای ۲۵ صنف شغلی کشور از جمله سامانه مدیریت املاک جهش (با فایلینگ هوشمند، صدور قرارداد و کد رهگیری).
   - پلتفرم و فروشگاه جهش‌کالا: مرکز خرید برخط انواع کالای دیجیتال (موبایل، لپ‌تاپ، تبلت و ...) و پکیج‌های توسعه وب با ضمانت بازگشت وجه.

۳. پکیج طلایی طراحی سایت اختصاصی جهش:
   - قیمت پکیج طلایی: ۷,۹۰۰,۰۰۰ تومان (با تخفیف ویژه از ۱۱,۵۰۰,۰۰۰ تومان).
   - خدمات پکیج شامل: ثبت رایگان دامنه با نام دلخواه مشتری، ۱ ماه هاست فوق‌سریع NVMe رایگان، اتصال مستقیم به درگاه پرداخت زیبال با تسویه حساب آنی شاپرک، طراحی کاملاً واکنش‌گرا (موبایل و کامپیوتر)، پنل اختصاصی مدیریت، کدنویسی بهینه و سبک.
   - تضمین سئو و رتبه ۱ گوگل: همراه با تنظیمات سرچ‌کنسول و بهینه‌سازی کامل فنی جهت دستیابی به رتبه اول نتایج جستجوی گوگل.
   - کدهای تخفیف معتبر: از جمله کد سازمانی و تاریخی jahesh1395.

۴. راه‌های ارتباطی و نشانی رسمی:
   - دفتر مرکزی: مشهد مقدس، خیام شمالی ۴۶، بین شکری ۱۳ و ۱۵، پلاک ۲۸۷.
   - شماره تلفن‌های مستقیم پشتیبانی: 09152331974 و 09364864663.
   - آدرس وب‌سایت رسمی: jaheshit.ir
   - لینک درباره انجمن: jaheshit.ir/drbarh-anjmn/
   - کانال و ارتباط تلگرام: https://t.me/+7eeuF5ZMpFRmYzg8 و @emainsupport
   - نماد اعتماد الکترونیکی (اینماد): تایید شده وزارت صمت با شناسه ۴۷۸۸۷۵۰۹.
   - پاسخگویی: ۲۴ ساعته در ۷ روز هفته.

قوانین پاسخگویی:
۱. برای تمام سوالات مربوط به انجمن علمی جهش، تاریخچه (تاسیس ۱۳۹۵)، اهداف، دپارتمان‌ها، خدمات، قیمت‌ها، پکیج طراحی سایت، ویژگی‌ها، هاست، دامنه، درگاه، سئو، آدرس و شماره تلفن، خودت با افتخار، زبان فارسی شیوا و اطلاعات کامل پاسخ بده.
۲. فقط در صورتی که کاربر سوالی پرسید که نیاز به بررسی دستی مدیر دارد (مانند پیگیری سفارش خاص نیازمند بررسی پایگاه داده داخلی، مسائل حقوقی شخصی یا درخواست تماس اختصاصی با مدیریت)، بگو:
«پیام شما دریافت شد. این مورد برای بررسی تخصصی به همکاران واحد پشتیبانی و مدیریت ارجاع گردید و به زودی پاسخ شما پیگیری خواهد شد.»
و در پایان عبارت [ESCALATE_TO_ADMIN] را بنویس.
۳. در تمام سوالات عادی و توضیحات مربوط به انجمن و سایت، عبارت [ESCALATE_TO_ADMIN] را به هیچ وجه ذکر نکن.`;
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
}
