import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

/**
 * AI Payment Landing Page Content Generator & HTML Template Engine
 * Powers custom Zibal payment links with intelligent Persian marketing copy
 * and mouse-reactive interactive user interfaces.
 */

const DEFAULT_MERCHANT = '6a9db4410df8756c31ea5d00';

export function getAiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

/**
 * Generate rich, structured Persian marketing content for a payment landing page
 */
export async function generateLandingContentWithAi({
  title,
  amount,
  description = '',
  theme = 'neon-purple',
  sellerName = 'جهش آی‌تی',
  merchant = DEFAULT_MERCHANT,
  buyerPhone = '',
  buyerName = '',
  featuresHint = ''
}) {
  const safeAmount = Number(amount) || 50000;
  const safeAmountFormatted = safeAmount.toLocaleString('fa-IR') + ' تومان';

  const systemInstruction = `تو متخصص طراحی کمپین‌های تبلیغاتی و صفحات فرود (Landing Page) فوق‌حرفه‌ای و تبدیل‌گرا در ایران هستی.
وظیفه تو این است که برای یک پرداخت اینترنتی معین، یک پکیج محتوایی کامل، بسیار جذاب، اعتمادساز و ترغیب‌کننده به زبان فارسی تولید کنی.
محتوا باید مخاطب را به سرعت قانع کند که این خرید کاملاً امن، رسمی (شبکه شاپرک) و با ارزش افزوده بالا است.

باید خروجی را دقیقاً به فرمت JSON معتبر برگردانی:
{
  "headline": "عنوان گیرا و خیره‌کننده (حداکثر ۱۲ کلمه)",
  "subheadline": "زیرعنوان توضیحی و تشریح ارزش خدمت یا محصول (۲ الی ۳ جمله روان)",
  "badge": "برچسب ویژه (مثلاً: پیشنهاد انحصاری، تایید شده در شاپرک، تضمین اصالت)",
  "features": ["ویژگی یا مزیت ۱", "ویژگی یا مزیت ۲", "ویژگی یا مزیت ۳", "ویژگی یا مزیت ۴", "ویژگی یا مزیت ۵"],
  "valueProposition": "متن جذاب درباره ارزش خرید و اینکه چرا همین حالا باید پرداخت شود (۲ جمله)",
  "guarantees": ["تضمین امنیت پرداخت شاپرک", "پشتیبانی اختصاصی پس از پرداخت", "تحویل فوری و ثبت آنی"],
  "faq": [
    {"question": "سوال متداول ۱؟", "answer": "پاسخ روان و کوتاه ۱"},
    {"question": "سوال متداول ۲؟", "answer": "پاسخ روان و کوتاه ۲"},
    {"question": "سوال متداول ۳؟", "answer": "پاسخ روان و کوتاه ۳"}
  ],
  "ctaButtonText": "متن روی دکمه گرافیکی پرداخت (مثلاً: پرداخت آنلاین و نهایی‌سازی سفارش)",
  "accentGlowColor": "#8c00ff",
  "metaDescription": "توضیح کوتاه سئو جهت اشتراک‌گذاری در شبکه‌های اجتماعی"
}`;

  const userPrompt = `موضوع سفارش / محصول: ${title}
مبلغ قابل پرداخت: ${safeAmountFormatted}
نام فروشنده / برند: ${sellerName}
کد درگاه شاپرک: ${merchant}
توضیحات و یادداشت تکمیلی: ${description || 'فاقد توضیحات اضافی'}
نکات اختصاصی یا ویژگی‌ها: ${featuresHint || 'ندارد'}
تم گرافیکی انتخابی: ${theme}`;

  // 1. Try Gemini 3.8 Flash via @google/genai
  const ai = getAiClient();
  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: userPrompt,
        config: {
          systemInstruction,
          responseMimeType: 'application/json'
        }
      });

      const rawText = (response.text || '').trim();
      const cleaned = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      if (parsed && parsed.headline) {
        return sanitizeAiResult(parsed, theme);
      }
    } catch (geminiErr) {
      console.warn('[Landing AI] Gemini generation fallback notice:', geminiErr.message);
    }
  }

  // 2. Try Cloudflare AI fallback if available
  const cfAccount = process.env.CLOUDFLARE_ACCOUNT_ID || 'e8950358d5cf09f0f511b46172f65791';
  const cfToken = process.env.CLOUDFLARE_AI_TOKEN || 'cfut_Dux4Ej0iGy3P0bowmnh5LevCZ0f1DaTDmr5a1lmR074a186e';

  if (cfAccount && cfToken) {
    try {
      const cfRes = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${cfAccount}/ai/run/@cf/meta/llama-3.1-8b-instruct`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${cfToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messages: [
              { role: 'system', content: systemInstruction + '\nپاسخ باید فقط و فقط یک آبجکت JSON معتبر باشد.' },
              { role: 'user', content: userPrompt }
            ],
            max_tokens: 800,
            temperature: 0.3
          })
        }
      );

      if (cfRes.ok) {
        const cfData = await cfRes.json();
        const output = cfData.result?.response || cfData.result?.choices?.[0]?.message?.content || '';
        const cleaned = output.replace(/```json/gi, '').replace(/```/g, '').trim();
        const start = cleaned.indexOf('{');
        const end = cleaned.lastIndexOf('}');
        if (start >= 0 && end > start) {
          const parsed = JSON.parse(cleaned.substring(start, end + 1));
          if (parsed && parsed.headline) {
            return sanitizeAiResult(parsed, theme);
          }
        }
      }
    } catch (cfErr) {
      console.warn('[Landing AI] Cloudflare AI fallback notice:', cfErr.message);
    }
  }

  // 3. Fallback: High-grade procedural synthesis
  return generateProceduralContent(title, safeAmount, sellerName, description, theme);
}

function sanitizeAiResult(raw, theme) {
  const themeColors = {
    'neon-purple': '#8c00ff',
    'gold-luxury': '#f59e0b',
    'cyber-dark': '#06b6d4',
    'emerald-green': '#10b981',
    'sunset-crimson': '#f43f5e'
  };

  return {
    headline: String(raw.headline || 'پرداخت امن سفارش').trim(),
    subheadline: String(raw.subheadline || 'سفارش شما با بالاترین ضریب امنیت و تایید آنی در شبکه بانکی شاپرک انجام می‌شود.').trim(),
    badge: String(raw.badge || 'درگاه رسمی شاپرک').trim(),
    features: Array.isArray(raw.features) && raw.features.length > 0
      ? raw.features.slice(0, 5).map(String)
      : ['اتصال مستقیم به شبکه شتاب و شاپرک', 'تاییدیه آنی پرداخت با صدور رسید معتبر', 'پشتیبانی ۲۴ ساعته'],
    valueProposition: String(raw.valueProposition || 'سفارش شما بلافاصله پس از تکمیل پرداخت وارد مرحله پردازش و اجرا خواهد شد.').trim(),
    guarantees: Array.isArray(raw.guarantees) && raw.guarantees.length > 0
      ? raw.guarantees.slice(0, 4).map(String)
      : ['رمزنگاری ۲۵۶ بیتی SSL', 'ضمانت بازگشت وجه زیبال', 'پیگیری آنلاین'],
    faq: Array.isArray(raw.faq) && raw.faq.length > 0
      ? raw.faq.slice(0, 4).map((f) => ({
          question: String(f.question || 'چگونه پرداخت کنم؟'),
          answer: String(f.answer || 'با کلیه کارت‌های عضو شبکه شتاب و رمز دوم (پویا) می‌توانید پرداخت نمایید.')
        }))
      : [
          { question: 'آیا پرداخت در این صفحه امن است؟', answer: 'بله، تراکنش مستقیماً بر بستر درگاه رسمی شاپرک و پی‌اس‌پی‌های دارای مجوز بانک مرکزی انجام می‌پذیرد.' },
          { question: 'پس از پرداخت چه اتفاقی می‌افتد؟', answer: 'بلافاصله شماره پیگیری و رسید رسمی شاپرک به همراه پیامک تایید به شما نمایش داده می‌شود.' }
        ],
    ctaButtonText: String(raw.ctaButtonText || 'پرداخت آنلاین و ثبت نهایی').trim(),
    accentGlowColor: raw.accentGlowColor || themeColors[theme] || '#8c00ff',
    metaDescription: String(raw.metaDescription || `صفحه رسمی پرداخت ${raw.headline || ''}`).trim()
  };
}

function generateProceduralContent(title, amount, sellerName, description, theme) {
  const safeAmountFormatted = amount.toLocaleString('fa-IR') + ' تومان';
  const themeColors = {
    'neon-purple': '#8c00ff',
    'gold-luxury': '#f59e0b',
    'cyber-dark': '#06b6d4',
    'emerald-green': '#10b981',
    'sunset-crimson': '#f43f5e'
  };

  return {
    headline: `درگاه اختصاصی پرداخت ${title}`,
    subheadline: description
      ? `${description} — نهایی‌سازی سفارش به مبلغ ${safeAmountFormatted} با ضمانت شاپرک.`
      : `سفارش رسمی «${title}» ارائه شده توسط ${sellerName}. پرداخت مستقیم، آنی و ایمن با تمامی کارت‌های بانکی عضو شتاب.`,
    badge: 'تاییدیه رسمی شاپرک | زیبال',
    features: [
      'تسویه آنی و صدور کد رهگیری معتبر بانکی',
      'پشتیبانی مستقیم و پاسخگویی ۲۴ ساعته',
      'رمزنگاری پیشرفته امنیتی SSL 256-bit',
      'امکان پرداخت با کلیه کارت‌های عضو شبکه شتاب',
      'ضمانت اصالت خدمات و رضایت مشتری'
    ],
    valueProposition: `با پرداخت مبلغ ${safeAmountFormatted}، سفارش شما به صورت خودکار در سیستم جهش ثبت شده و فرایند تحویل و ارائه خدمات در سریع‌ترین زمان ممکن آغاز خواهد شد.`,
    guarantees: [
      'امنیت ۱۰۰٪ تایید شده شاپرک',
      'پشتیبانی آنلاین و تلفنی ۲۴/۷',
      'صدور فاکتور رسمی الکترونیک'
    ],
    faq: [
      {
        question: 'چگونه می‌توانم این مبلغ را پرداخت کنم؟',
        answer: 'با کلیک بر روی دکمه پرداخت، مستقیماً به صفحه امن شاپرک هدایت می‌شوید و با وارد کردن شماره کارت و رمز دوم، پرداخت تکمیل می‌گردد.'
      },
      {
        question: 'آیا پس از پرداخت پیامک تایید ارسال می‌شود؟',
        answer: 'بله، رسید رسمی پرداخت حاوی شماره تراکنش (RRN) و کد پیگیری زیبال و شاپرک بلافاصله ثبت و نمایش داده می‌شود.'
      },
      {
        question: 'در صورت بروز هرگونه سوال با چه شماره‌ای تماس بگیرم؟',
        answer: `واحد پشتیبانی ۲۴ ساعته با شماره‌های 09152331974 و 09364864663 آماده پاسخگویی به شما عزیزان است.`
      }
    ],
    ctaButtonText: `پرداخت امن شاپرک (${safeAmountFormatted})`,
    accentGlowColor: themeColors[theme] || '#8c00ff',
    metaDescription: `پرداخت آنلاین و امن برای ${title} با مبلغ ${safeAmountFormatted} در سامانه پرداخت جهش`
  };
}

/**
 * Render Ultra-Modern, Interactive, Mouse-Reactive HTML Landing Page
 */
export function renderPaymentLandingHtml(landing, currentUrl = '') {
  const {
    id,
    title,
    amount,
    merchant = DEFAULT_MERCHANT,
    customerName = landing.buyerName || '',
    customerPhone = landing.buyerPhone || '',
    theme = 'neon-purple',
    aiGeneratedContent = {}
  } = landing;

  const content = {
    headline: aiGeneratedContent.headline || landing.headline || title || 'درگاه پرداخت آنلاین',
    subheadline: aiGeneratedContent.subheadline || landing.subheadline || 'پرداخت امن و سریع در شبکه شاپرک',
    badge: aiGeneratedContent.badge || landing.badge || 'درگاه رسمی شاپرک',
    features: (aiGeneratedContent.features && aiGeneratedContent.features.length) ? aiGeneratedContent.features : (landing.features || ['پرداخت امن با کلیه کارت‌های شتاب', 'تاییدیه آنی', 'پشتیبانی ۲۴ ساعته']),
    valueProposition: aiGeneratedContent.valueProposition || landing.valueProposition || 'سفارش شما بلافاصله پس از پرداخت وارد مرحله پردازش می‌شود.',
    guarantees: (aiGeneratedContent.guarantees && aiGeneratedContent.guarantees.length) ? aiGeneratedContent.guarantees : (landing.guarantees || ['تاییدیه شاپرک', 'پشتیبانی ۲۴ ساعته', 'رمزنگاری SSL']),
    faq: (aiGeneratedContent.faq && aiGeneratedContent.faq.length) ? aiGeneratedContent.faq : (landing.faq || []),
    ctaButtonText: aiGeneratedContent.ctaButtonText || landing.ctaButtonText || 'پرداخت آنلاین و نهایی‌سازی سفارش',
    accentGlowColor: aiGeneratedContent.accentGlowColor || landing.accentGlowColor || '#8c00ff'
  };

  const amountTomans = Number(amount) || 0;
  const amountFormatted = amountTomans.toLocaleString('fa-IR');
  const amountRials = (amountTomans * 10).toLocaleString('fa-IR');

  // Theme palettes
  const themes = {
    'neon-purple': {
      bg: '#080514',
      bgGlow1: 'rgba(140, 0, 255, 0.28)',
      bgGlow2: 'rgba(79, 70, 229, 0.22)',
      cardBg: 'rgba(18, 11, 38, 0.75)',
      cardBorder: 'rgba(168, 85, 247, 0.35)',
      cardHoverBorder: 'rgba(192, 132, 252, 0.6)',
      accent: '#a855f7',
      accentGlow: '#8c00ff',
      badgeBg: 'rgba(147, 51, 234, 0.25)',
      badgeText: '#e9d5ff',
      badgeBorder: 'rgba(168, 85, 247, 0.4)',
      btnGradient: 'linear-gradient(135deg, #9333ea 0%, #7928ca 50%, #4f46e5 100%)',
      btnGlow: '0 0 35px rgba(147, 51, 234, 0.6)',
      textGradient: 'from-white via-purple-100 to-purple-300'
    },
    'gold-luxury': {
      bg: '#0a0907',
      bgGlow1: 'rgba(245, 158, 11, 0.24)',
      bgGlow2: 'rgba(217, 119, 6, 0.18)',
      cardBg: 'rgba(24, 20, 14, 0.8)',
      cardBorder: 'rgba(245, 158, 11, 0.35)',
      cardHoverBorder: 'rgba(251, 191, 36, 0.7)',
      accent: '#fbbf24',
      accentGlow: '#d97706',
      badgeBg: 'rgba(245, 158, 11, 0.2)',
      badgeText: '#fef3c7',
      badgeBorder: 'rgba(245, 158, 11, 0.4)',
      btnGradient: 'linear-gradient(135deg, #d97706 0%, #b45309 50%, #78350f 100%)',
      btnGlow: '0 0 35px rgba(245, 158, 11, 0.55)',
      textGradient: 'from-white via-amber-100 to-amber-300'
    },
    'cyber-dark': {
      bg: '#050c14',
      bgGlow1: 'rgba(6, 182, 212, 0.25)',
      bgGlow2: 'rgba(14, 165, 233, 0.2)',
      cardBg: 'rgba(10, 22, 36, 0.8)',
      cardBorder: 'rgba(6, 182, 212, 0.35)',
      cardHoverBorder: 'rgba(34, 211, 238, 0.65)',
      accent: '#22d3ee',
      accentGlow: '#06b6d4',
      badgeBg: 'rgba(6, 182, 212, 0.2)',
      badgeText: '#cffafe',
      badgeBorder: 'rgba(6, 182, 212, 0.4)',
      btnGradient: 'linear-gradient(135deg, #0891b2 0%, #0284c7 50%, #2563eb 100%)',
      btnGlow: '0 0 35px rgba(6, 182, 212, 0.55)',
      textGradient: 'from-white via-cyan-100 to-cyan-300'
    },
    'emerald-green': {
      bg: '#04100c',
      bgGlow1: 'rgba(16, 185, 129, 0.25)',
      bgGlow2: 'rgba(5, 150, 105, 0.2)',
      cardBg: 'rgba(9, 28, 20, 0.8)',
      cardBorder: 'rgba(16, 185, 129, 0.35)',
      cardHoverBorder: 'rgba(52, 211, 153, 0.65)',
      accent: '#34d199',
      accentGlow: '#10b981',
      badgeBg: 'rgba(16, 185, 129, 0.2)',
      badgeText: '#d1fae5',
      badgeBorder: 'rgba(16, 185, 129, 0.4)',
      btnGradient: 'linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)',
      btnGlow: '0 0 35px rgba(16, 185, 129, 0.55)',
      textGradient: 'from-white via-emerald-100 to-emerald-300'
    },
    'sunset-crimson': {
      bg: '#140609',
      bgGlow1: 'rgba(244, 63, 94, 0.26)',
      bgGlow2: 'rgba(225, 29, 72, 0.2)',
      cardBg: 'rgba(32, 10, 16, 0.8)',
      cardBorder: 'rgba(244, 63, 94, 0.35)',
      cardHoverBorder: 'rgba(251, 113, 133, 0.65)',
      accent: '#fb7185',
      accentGlow: '#f43f5e',
      badgeBg: 'rgba(244, 63, 94, 0.2)',
      badgeText: '#ffe4e6',
      badgeBorder: 'rgba(244, 63, 94, 0.4)',
      btnGradient: 'linear-gradient(135deg, #e11d48 0%, #be123c 50%, #9f1239 100%)',
      btnGlow: '0 0 35px rgba(244, 63, 94, 0.55)',
      textGradient: 'from-white via-rose-100 to-rose-300'
    }
  };

  const activeTheme = themes[theme] || themes['neon-purple'];

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(content.headline)} | پرداخت آنلاین جهش</title>
  <meta name="description" content="${escapeHtml(content.subheadline)}">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
  <style>
    * {
      font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      box-sizing: border-box;
    }
    
    body {
      background-color: ${activeTheme.bg};
      color: #f8fafc;
      overflow-x: hidden;
      min-height: 100vh;
      position: relative;
    }

    /* Reactive Mouse Halo Follower */
    #mouse-halo {
      position: fixed;
      pointer-events: none;
      width: 700px;
      height: 700px;
      border-radius: 50%;
      background: radial-gradient(circle, ${activeTheme.bgGlow1} 0%, rgba(0,0,0,0) 70%);
      transform: translate(-50%, -50%);
      transition: transform 0.08s ease-out, opacity 0.3s;
      z-index: 0;
      mix-blend-mode: screen;
      will-change: transform;
    }

    /* 3D Tilt Card */
    .tilt-card {
      transform-style: preserve-3d;
      transition: transform 0.15s ease-out, box-shadow 0.25s ease;
      will-change: transform;
    }

    .tilt-card-inner {
      transform: translateZ(30px);
    }

    /* Interactive Mouse-Reactive Graphical Button */
    .interactive-pay-btn {
      position: relative;
      background: ${activeTheme.btnGradient};
      box-shadow: ${activeTheme.btnGlow};
      overflow: hidden;
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
      cursor: pointer;
    }

    .interactive-pay-btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 0 50px ${activeTheme.accentGlow}, 0 10px 25px rgba(0,0,0,0.5);
    }

    .interactive-pay-btn:active {
      transform: translateY(1px) scale(0.99);
    }

    /* Dynamic Button Cursor Shine */
    .btn-shine {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      background: radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.45), transparent 80%);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .interactive-pay-btn:hover .btn-shine {
      opacity: 1;
    }

    /* Pulse wave effect */
    @keyframes pulse-ring {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.04); opacity: 0.4; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }

    .pulse-beacon {
      animation: pulse-ring 2.5s infinite ease-in-out;
    }

    /* Ripple on click */
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-anim 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple-anim {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  </style>
</head>
<body class="selection:bg-purple-600 selection:text-white flex flex-col justify-between">

  <!-- Interactive Mouse Halo Element -->
  <div id="mouse-halo"></div>

  <!-- Background Ambience Orbs -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div class="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px]" style="background: ${activeTheme.bgGlow1};"></div>
    <div class="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full blur-[150px]" style="background: ${activeTheme.bgGlow2};"></div>
  </div>

  <!-- Header -->
  <header class="relative z-20 border-b border-white/10 bg-black/40 backdrop-blur-xl">
    <div class="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3 hover:opacity-90 transition">
        <img src="/assets/jahesh-logo.png" alt="لوگوی جهش" class="w-11 h-11 object-contain drop-shadow-[0_0_15px_${activeTheme.accentGlow}]" onerror="this.src='/favicon-192x192.png'">
        <div>
          <span class="block text-lg font-black text-white tracking-tight">جهش | درگاه هوشمند پرداخت</span>
          <span class="block text-xs font-semibold text-purple-400">سامانه رسمی پرداخت اینترنتی شاپرک</span>
        </div>
      </a>
      
      <div class="flex items-center gap-2">
        <div class="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>درگاه فعال زیبال: ${merchant.slice(0, 10)}...</span>
        </div>
        <a href="tel:09152331974" class="text-xs font-bold text-purple-300 hover:text-white transition px-3 py-1.5 rounded-lg border border-purple-500/20 bg-purple-950/30">
          پشتیبانی: ۰۹۱۵۲۳۳۱۹۷۴
        </a>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <main class="relative z-10 max-w-5xl mx-auto px-4 py-12 flex-1 flex flex-col justify-center">

    <!-- Top Security Badge -->
    <div class="flex justify-center mb-6">
      <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-extrabold backdrop-blur-xl shadow-lg"
           style="background-color: ${activeTheme.badgeBg}; color: ${activeTheme.badgeText}; border-color: ${activeTheme.badgeBorder};">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
        <span>${escapeHtml(content.badge)}</span>
      </div>
    </div>

    <!-- Main 3D Interactive Card -->
    <div id="tiltCard" class="tilt-card rounded-3xl p-6 sm:p-10 border backdrop-blur-2xl shadow-2xl transition duration-200"
         style="background: ${activeTheme.cardBg}; border-color: ${activeTheme.cardBorder};">
      
      <div class="tilt-card-inner">
        <!-- Title & Subtitle -->
        <div class="text-center max-w-3xl mx-auto mb-8">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r ${activeTheme.textGradient}">
            ${escapeHtml(content.headline)}
          </h1>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            ${escapeHtml(content.subheadline)}
          </p>
        </div>

        <!-- Pricing & Amount Banner -->
        <div class="my-6 p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            <span class="block text-xs font-semibold text-slate-400 mb-1">مبلغ قابل پرداخت (شاپرک):</span>
            <div class="flex items-baseline justify-center sm:justify-start gap-2">
              <span class="text-3xl sm:text-4xl font-black text-amber-400">${amountFormatted}</span>
              <span class="text-sm font-bold text-slate-300">تومان</span>
            </div>
            <span class="text-xs text-slate-400 mt-1 block">معادل ${amountRials} ریال</span>
          </div>

          <div class="flex flex-col sm:items-end text-xs text-slate-300 gap-1.5">
            <div class="flex items-center gap-2">
              <span class="text-emerald-400 font-bold">✓ بدون کارمزد اضافی</span>
              <span>•</span>
              <span class="text-purple-300 font-bold">تایید آنی با فیش رسمی</span>
            </div>
            <div class="text-[11px] text-slate-400">شناسه سفارش: <span class="font-mono text-slate-200">${id}</span></div>
          </div>
        </div>

        <!-- Buyer Input Fields (Pre-filled if provided) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام‌خانوادگی پرداخت‌کننده:</label>
            <input type="text" id="buyerName" value="${escapeHtml(customerName)}" placeholder="مثال: خانم سارا محمدی"
                   class="w-full bg-black/50 border border-white/15 focus:border-purple-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره موبایل (جهت دریافت پیامک رسید شاپرک):</label>
            <input type="tel" id="buyerPhone" value="${escapeHtml(customerPhone)}" placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹" dir="ltr"
                   class="w-full bg-black/50 border border-white/15 focus:border-purple-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition text-right">
          </div>
        </div>

        <!-- Mouse-Reactive Graphical Pay Button -->
        <div class="flex flex-col items-center justify-center my-6">
          <button id="payButton" type="button"
                  class="interactive-pay-btn w-full sm:w-auto min-w-[320px] sm:min-w-[420px] px-8 py-5 rounded-2xl text-white font-black text-lg sm:text-xl flex items-center justify-center gap-3">
            <span class="btn-shine"></span>
            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
            <span id="btnText">${escapeHtml(content.ctaButtonText)}</span>
            <span id="spinner" class="hidden">
              <svg class="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
            </span>
          </button>

          <!-- Error Feedback Container -->
          <div id="errorBox" class="hidden mt-4 text-xs font-bold text-rose-300 bg-rose-950/60 border border-rose-500/40 px-4 py-2.5 rounded-xl max-w-md text-center"></div>

          <!-- Trust Badges Under Button -->
          <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 text-xs font-semibold text-slate-400">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span>اتصال مستقیم شاپرک</span>
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
              <span>رمزنگاری ۲۵۶ بیتی SSL</span>
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <span>ضمانت پیگیری زیبال</span>
            </span>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="mt-10 pt-8 border-t border-white/10">
          <h2 class="text-sm font-extrabold text-slate-300 mb-4 flex items-center gap-2">
            <span class="w-1.5 h-4 rounded-full bg-purple-500"></span>
            <span>ویژگی‌ها و مزایای این سفارش:</span>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            ${content.features.map((feat) => `
              <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-slate-200">
                <span class="text-emerald-400 font-bold shrink-0">✦</span>
                <span class="leading-relaxed">${escapeHtml(feat)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Value Proposition Quote -->
        ${content.valueProposition ? `
          <div class="mt-6 p-4 rounded-xl bg-purple-900/20 border border-purple-500/25 text-xs sm:text-sm text-purple-200 text-center leading-relaxed font-medium">
            « ${escapeHtml(content.valueProposition)} »
          </div>
        ` : ''}

        <!-- FAQ Section -->
        ${content.faq && content.faq.length > 0 ? `
          <div class="mt-8 pt-8 border-t border-white/10">
            <h2 class="text-sm font-extrabold text-slate-300 mb-4 flex items-center gap-2">
              <span class="w-1.5 h-4 rounded-full bg-amber-400"></span>
              <span>پرسش‌های متداول خریداران:</span>
            </h2>
            <div class="space-y-3">
              ${content.faq.map((item) => `
                <div class="p-4 rounded-xl bg-black/30 border border-white/10">
                  <div class="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <span class="text-purple-400 font-bold">؟</span>
                    <span>${escapeHtml(item.question)}</span>
                  </div>
                  <div class="text-xs text-slate-300 leading-relaxed pr-4">
                    ${escapeHtml(item.answer)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="relative z-20 border-t border-white/10 bg-black/60 backdrop-blur-md py-6 text-center text-xs text-slate-400">
    <div class="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="flex items-center gap-2 text-slate-300 font-medium">
        <span>© ۱۴۰۵ کلیه حقوق برای مجموعه جهش و انجمن علمی جهش محفوظ است.</span>
      </div>
      <div class="flex items-center gap-4 text-xs font-semibold">
        <a href="/" class="hover:text-white transition">صفحه اصلی جهش</a>
        <a href="/jaheshkala/" class="hover:text-white transition">فروشگاه جهش‌کالا</a>
        <a href="https://zibal.ir" target="_blank" rel="noopener" class="text-purple-300 hover:text-white transition">درگاه پرداخت زیبال</a>
      </div>
    </div>
  </footer>

  <!-- Scripts: Mouse Reactive Halo, 3D Tilt & Payment Initiation -->
  <script>
    (function() {
      // 1. Reactive Mouse Halo Follower
      const halo = document.getElementById('mouse-halo');
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;

      window.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (halo) {
          halo.style.transform = 'translate(' + (mouseX - 350) + 'px, ' + (mouseY - 350) + 'px)';
        }
      }, { passive: true });

      // 2. 3D Tilt Card on Mousemove
      const card = document.getElementById('tiltCard');
      if (card && window.matchMedia('(min-width: 768px)').matches) {
        card.addEventListener('mousemove', function(e) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;
          card.style.transform = 'perspective(1000px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) scale3d(1.01, 1.01, 1.01)';
        });

        card.addEventListener('mouseleave', function() {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
      }

      // 3. Mouse-Reactive Graphical Button coordinates
      const payBtn = document.getElementById('payButton');
      if (payBtn) {
        payBtn.addEventListener('mousemove', function(e) {
          const rect = payBtn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          payBtn.style.setProperty('--mouse-x', x + 'px');
          payBtn.style.setProperty('--mouse-y', y + 'px');
        });

        // Click Ripple effect
        payBtn.addEventListener('click', function(e) {
          const rect = payBtn.getBoundingClientRect();
          const circle = document.createElement('span');
          const diameter = Math.max(rect.width, rect.height);
          const radius = diameter / 2;
          circle.style.width = circle.style.height = diameter + 'px';
          circle.style.left = (e.clientX - rect.left - radius) + 'px';
          circle.style.top = (e.clientY - rect.top - radius) + 'px';
          circle.classList.add('ripple-effect');
          const ripple = payBtn.getElementsByClassName('ripple-effect')[0];
          if (ripple) ripple.remove();
          payBtn.appendChild(circle);
        });
      }

      // 4. Payment Initiation via Zibal
      const btnText = document.getElementById('btnText');
      const spinner = document.getElementById('spinner');
      const errorBox = document.getElementById('errorBox');
      const buyerNameInput = document.getElementById('buyerName');
      const buyerPhoneInput = document.getElementById('buyerPhone');

      let isPaying = false;

      payBtn.addEventListener('click', async function() {
        if (isPaying) return;

        const customerName = (buyerNameInput ? buyerNameInput.value : '').trim();
        const customerPhone = (buyerPhoneInput ? buyerPhoneInput.value : '').trim();

        isPaying = true;
        btnText.textContent = 'در حال اتصال به شاپرک...';
        spinner.classList.remove('hidden');
        errorBox.classList.add('hidden');
        payBtn.disabled = true;

        try {
          const callbackUrl = window.location.origin + '/pay/verify?landingId=' + encodeURIComponent('${id}');
          const response = await fetch('/api/zibal-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              amountInTomans: ${amountTomans},
              merchant: '${merchant}',
              orderId: '${id}',
              mobile: customerPhone || undefined,
              description: 'پرداخت آنلاین ' + '${escapeHtml(title)}' + (customerName ? ' - ' + customerName : ''),
              callbackUrl: callbackUrl,
              landingData: {
                landingId: '${id}',
                title: '${escapeHtml(title)}',
                customerName: customerName,
                customerPhone: customerPhone
              }
            })
          });

          const data = await response.json();

          if (data && data.success && data.paymentUrl) {
            btnText.textContent = 'انتقال به درگاه امن شاپرک...';
            // Slight delay for tactile feedback before redirect
            setTimeout(function() {
              window.location.href = data.paymentUrl;
            }, 300);
          } else {
            throw new Error(data.message || data.error || 'خطا در برقراری ارتباط با درگاه پرداخت شاپرک');
          }
        } catch (err) {
          console.error('Payment request error:', err);
          errorBox.textContent = err.message || 'متاسفانه در اتصال به شاپرک خطایی رخ داد. لطفا دوباره تلاش کنید.';
          errorBox.classList.remove('hidden');
          btnText.textContent = '${escapeHtml(content.ctaButtonText)}';
          spinner.classList.add('hidden');
          payBtn.disabled = false;
          isPaying = false;
        }
      });
    })();
  </script>
</body>
</html>`;
}

/**
 * Render Payment Verification (Receipt / Success / Failure) Page
 */
export function renderPaymentVerifyHtml(result) {
  const {
    isSuccess,
    trackId,
    refNumber,
    cardNumber,
    amountTomans,
    paidAtFa,
    orderId,
    message,
    landing
  } = result;

  const title = landing?.title || 'سفارش پرداخت‌شده';
  const amountFormatted = amountTomans ? Number(amountTomans).toLocaleString('fa-IR') + ' تومان' : '';

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${isSuccess ? 'پرداخت موفق' : 'نتیجه پرداخت'} | سامانه پرداخت جهش</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
  <style>
    * { font-family: 'Vazirmatn', sans-serif; }
  </style>
</head>
<body class="bg-[#080514] text-white min-h-screen flex flex-col justify-between selection:bg-purple-600">

  <!-- Header -->
  <header class="border-b border-white/10 bg-black/40 backdrop-blur-xl py-4">
    <div class="max-w-4xl mx-auto px-4 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <img src="/assets/jahesh-logo.png" alt="لوگوی جهش" class="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" onerror="this.src='/favicon-192x192.png'">
        <span class="font-black text-white text-base">رسید پرداخت رسمی شاپرک | جهش</span>
      </a>
      <a href="/jaheshkala/" class="text-xs font-bold text-purple-300 hover:text-white transition">فروشگاه جهش‌کالا</a>
    </div>
  </header>

  <!-- Content -->
  <main class="max-w-2xl mx-auto px-4 py-12 flex-1 flex flex-col justify-center w-full">
    <div class="rounded-3xl p-6 sm:p-10 border backdrop-blur-2xl shadow-2xl text-center ${
      isSuccess
        ? 'bg-[#120b26]/90 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.2)]'
        : 'bg-[#1f0b12]/90 border-rose-500/40 shadow-[0_0_50px_rgba(244,63,94,0.2)]'
    }">
      
      <!-- Icon -->
      <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-xl ${
        isSuccess ? 'bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500' : 'bg-rose-500/20 text-rose-400 border-2 border-rose-500'
      }">
        ${isSuccess ? `
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
        ` : `
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        `}
      </div>

      <h1 class="text-2xl sm:text-3xl font-black mb-2 ${isSuccess ? 'text-emerald-400' : 'text-rose-400'}">
        ${isSuccess ? 'تراکنش با موفقیت انجام شد' : 'پرداخت ناموفق بود'}
      </h1>
      
      <p class="text-sm text-slate-300 mb-8">
        ${escapeHtml(message || (isSuccess ? 'پرداخت شما در سامانه شاپرک تایید و رسید رسمی صادر گردید.' : 'تراکنش توسط کاربر یا بانک لغو گردید.'))}
      </p>

      <!-- Receipt Box -->
      <div class="bg-black/40 border border-white/10 rounded-2xl p-5 text-right space-y-3 mb-8 text-xs sm:text-sm">
        <div class="flex justify-between items-center py-1.5 border-b border-white/5">
          <span class="text-slate-400">موضوع خرید:</span>
          <span class="font-bold text-white">${escapeHtml(title)}</span>
        </div>
        ${amountFormatted ? `
          <div class="flex justify-between items-center py-1.5 border-b border-white/5">
            <span class="text-slate-400">مبلغ پرداخت‌شده:</span>
            <span class="font-black text-amber-400">${amountFormatted}</span>
          </div>
        ` : ''}
        ${trackId ? `
          <div class="flex justify-between items-center py-1.5 border-b border-white/5">
            <span class="text-slate-400">کد پیگیری شاپرک / زیبال:</span>
            <span class="font-mono font-bold text-purple-300 tracking-wider">${escapeHtml(String(trackId))}</span>
          </div>
        ` : ''}
        ${refNumber ? `
          <div class="flex justify-between items-center py-1.5 border-b border-white/5">
            <span class="text-slate-400">شماره مرجع بانکی (RRN):</span>
            <span class="font-mono font-bold text-slate-200 tracking-wider">${escapeHtml(String(refNumber))}</span>
          </div>
        ` : ''}
        ${cardNumber ? `
          <div class="flex justify-between items-center py-1.5 border-b border-white/5">
            <span class="text-slate-400">شماره کارت پرداخت‌کننده:</span>
            <span class="font-mono text-slate-300" dir="ltr">${escapeHtml(String(cardNumber))}</span>
          </div>
        ` : ''}
        <div class="flex justify-between items-center py-1.5">
          <span class="text-slate-400">زمان پرداخت:</span>
          <span class="text-slate-300">${escapeHtml(paidAtFa || new Date().toLocaleString('fa-IR'))}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        ${isSuccess ? `
          <button onclick="window.print()" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg transition flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            <span>چاپ / ذخیره فیش پرداخت</span>
          </button>
        ` : `
          ${orderId ? `
            <a href="/pay/${escapeHtml(orderId)}" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg transition">
              تلاش مجدد برای پرداخت
            </a>
          ` : ''}
        `}
        <a href="/jaheshkala/" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm transition">
          بازگشت به فروشگاه
        </a>
        <a href="/" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-xs sm:text-sm transition">
          صفحه اصلی جهش
        </a>
      </div>

    </div>
  </main>

  <footer class="border-t border-white/10 bg-black/60 py-4 text-center text-xs text-slate-400">
    سامانه درگاه پرداخت رسمی جهش | پشتیبانی: ۰۹۱۵۲۳۳۱۹۷۴
  </footer>

  ${isSuccess ? `
    <script>
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch(e) {}
    </script>
  ` : ''}
</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
