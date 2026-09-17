// Cloudflare Workers AI Service for JaheshKala Support
// Powered by Meta Llama 3.1 8B Instruct via server-side endpoint

export interface AIAnswerResult {
  reply: string;
  escalateToAdmin: boolean;
}

// Local site knowledge fallback to ensure questions about site info always get answered
const getFallbackAnswer = (text: string): AIAnswerResult => {
  const q = text.toLowerCase().trim();

  if (q.includes('قیمت') || q.includes('پکیج') || q.includes('هزینه') || q.includes('تعرفه')) {
    return {
      reply: 'قیمت پکیج طلایی طراحی سایت جهش‌کالا ۷,۹۰۰,۰۰۰ تومان (تخفیف ویژه از ۱۱,۵۰۰,۰۰۰ تومان) است. این پکیج شامل ثبت رایگان دامنه، ۱ ماه هاست پرسرعت NVMe رایگان، اتصال درگاه زیبال، سئو و تضمین رتبه ۱ گوگل می‌باشد.',
      escalateToAdmin: false
    };
  }

  if (q.includes('تماس') || q.includes('تلفن') || q.includes('شماره') || q.includes('موبایل') || q.includes('پشتیبانی')) {
    return {
      reply: 'تلفن‌های تماس مستقیم و پشتیبانی جهش‌کالا: 09152331974 و 09364864663 می‌باشد. پشتیبانی ما ۲۴ ساعته در دسترس شماست.',
      escalateToAdmin: false
    };
  }

  if (q.includes('آدرس') || q.includes('شعبه') || q.includes('کجایید') || q.includes('محل') || q.includes('حضوری')) {
    return {
      reply: 'نشانی شعبه ۱ و دفتر جهش‌کالا: مشهد مقدس، خیام شمالی ۴۶، بین شکری ۱۳ و ۱۵، پلاک ۲۸۷. وب‌سایت اصلی: jaheshit.ir',
      escalateToAdmin: false
    };
  }

  if (q.includes('تخفیف') || q.includes('کد تخفیف') || q.includes('کوپن') || q.includes('ارزان')) {
    return {
      reply: 'برای دریافت تخفیف می‌توانید از کدهای تخفیف فعال در سبد خرید استفاده نمایید (از جمله کد ویژه jahesh1395 که قیمت پکیج را به ۲,۵۰۰,۰۰۰ تومان کاهش می‌دهد).',
      escalateToAdmin: false
    };
  }

  if (q.includes('دامنه') || q.includes('domain') || q.includes('هاست') || q.includes('host') || q.includes('سرور')) {
    return {
      reply: 'پکیج طلایی شامل ثبت رایگان دامنه با نام انتخابی شما و ۱ ماه هاست NVMe پرسرعت و پایدار به صورت کاملاً هدیه می‌باشد.',
      escalateToAdmin: false
    };
  }

  if (q.includes('گوگل') || q.includes('سئو') || q.includes('رتبه') || q.includes('seo')) {
    return {
      reply: 'سایت‌های طراحی شده توسط تیم جهش با آخرین استانداردهای فنی سئو بهینه‌سازی و در گوگل سرچ کنسول ثبت می‌شوند تا رتبه ۱ گوگل را کسب کنند.',
      escalateToAdmin: false
    };
  }

  if (q.includes('درگاه') || q.includes('زیبال') || q.includes('پرداخت') || q.includes('تسویه')) {
    return {
      reply: 'درگاه پرداخت مستقیم اینترنتی زیبال با تسویه حساب آنی و امنیت بالا به صورت آماده روی وب‌سایت شما فعال می‌گردد.',
      escalateToAdmin: false
    };
  }

  if (q.includes('سلام') || q.includes('درود') || q.includes('صبح بخیر') || q.includes('عصر بخیر') || q.includes('وقت بخیر')) {
    return {
      reply: 'سلام و درود! به پشتیبانی هوشمند جهش‌کالا خوش آمدید. درباره پکیج طراحی سایت، قیمت‌ها، امکانات سئو و هاست یا راه‌های تماس چه کمکی از دست من برمی‌آید؟',
      escalateToAdmin: false
    };
  }

  if (q.includes('گوشی') || q.includes('موبایل') || q.includes('لپ‌تاپ') || q.includes('محصول') || q.includes('کالا') || q.includes('ارسال') || q.includes('گارانتی')) {
    return {
      reply: 'کلیه محصولات فروشگاه جهش‌کالا دارای ضمانت اصالت و سلامت فیزیکی به همراه ۷ روز ضمانت بازگشت وجه هستند و با پست پیشتاز و تیپاکس به سراسر کشور ارسال می‌شوند.',
      escalateToAdmin: false
    };
  }

  // Only if truly unknown / specific
  return {
    reply: 'پیام شما دریافت شد. این مورد برای بررسی تخصصی به همکاران واحد پشتیبانی و مدیریت ارجاع گردید و به زودی پاسخ شما پیگیری خواهد شد.',
    escalateToAdmin: true
  };
};

export const askCloudflareAI = async (
  userQuestion: string,
  chatHistory: { role: 'user' | 'assistant'; content: string }[] = []
): Promise<AIAnswerResult> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch('/api/cloudflare-ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userQuestion,
        chatHistory: chatHistory.slice(-4)
      }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.reply === 'string' && data.reply.trim()) {
        return {
          reply: data.reply.trim(),
          escalateToAdmin: !!data.escalateToAdmin
        };
      }
    }
  } catch (error) {
    console.warn('Backend Cloudflare AI call timed out or failed, using local knowledge engine:', error);
  }

  // Fallback to local knowledge matching
  return getFallbackAnswer(userQuestion);
};
