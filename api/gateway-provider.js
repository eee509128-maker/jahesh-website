import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export const CUSTOM_MERCHANTS_FILE = path.join(DATA_DIR, 'custom_merchants.json');
export const GATEWAY_TRANSACTIONS_FILE = path.join(DATA_DIR, 'gateway_transactions.json');

/**
 * Generate Secure Unique Merchant Code (e.g. JAHESH_MID_8f1a2b3c)
 */
export function generateMerchantCode() {
  const hex = Math.random().toString(16).substring(2, 10).toUpperCase();
  const hex2 = Date.now().toString(16).substring(4).toUpperCase();
  return `JAHESH_MID_${hex}${hex2}`;
}

/**
 * Generate API Key / Secret Key for Web Services
 */
export function generateApiKey() {
  const part1 = Math.random().toString(36).substring(2, 15);
  const part2 = Math.random().toString(36).substring(2, 15);
  return `jh_sec_${part1}${part2}`;
}

/**
 * Generate Unique Gateway Transaction Track ID
 */
export function generateGatewayTrackId() {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 7);
  return `jh_trk_${timestamp}_${randomPart}`;
}

/**
 * Read Custom Merchants from Disk
 */
export function readCustomMerchantsFromDisk() {
  try {
    if (fs.existsSync(CUSTOM_MERCHANTS_FILE)) {
      const raw = fs.readFileSync(CUSTOM_MERCHANTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('Error reading custom_merchants.json:', e);
  }
  return [];
}

/**
 * Write Custom Merchants to Disk
 */
export function writeCustomMerchantsToDisk(merchants) {
  if (!Array.isArray(merchants)) return;
  try {
    fs.writeFileSync(CUSTOM_MERCHANTS_FILE, JSON.stringify(merchants, null, 2), 'utf8');
  } catch (e) {
    console.warn('writeCustomMerchantsToDisk notice:', e);
  }
}

/**
 * Read Gateway Transactions from Disk
 */
export function readGatewayTransactionsFromDisk() {
  try {
    if (fs.existsSync(GATEWAY_TRANSACTIONS_FILE)) {
      const raw = fs.readFileSync(GATEWAY_TRANSACTIONS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('Error reading gateway_transactions.json:', e);
  }
  return [];
}

/**
 * Write Gateway Transactions to Disk
 */
export function writeGatewayTransactionsToDisk(txs) {
  if (!Array.isArray(txs)) return;
  try {
    fs.writeFileSync(GATEWAY_TRANSACTIONS_FILE, JSON.stringify(txs, null, 2), 'utf8');
  } catch (e) {
    console.warn('writeGatewayTransactionsToDisk notice:', e);
  }
}

/**
 * Render Jahesh Pay Branded Checkout Page for External Client Websites
 * Renders on jaheshit.ir domain with security badges, client website attribution,
 * and mouse-reactive payment initiation button!
 */
export function renderJaheshGatewayCheckoutHtml(transaction, merchant, baseUrl = 'https://jaheshit.ir') {
  const {
    trackId,
    amountInTomans,
    amountInRials,
    orderId,
    description,
    customerName,
    customerMobile
  } = transaction;

  const websiteTitle = merchant?.title || 'پذیرنده جهش‌پی';
  const websiteUrl = merchant?.websiteUrl || '#';
  const amountFormatted = Number(amountInTomans || 0).toLocaleString('fa-IR');
  const amountRialsFormatted = Number(amountInRials || (amountInTomans * 10) || 0).toLocaleString('fa-IR');

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>درگاه پرداخت امن جهش پی | ${escapeHtml(websiteTitle)}</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    * {
      font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      box-sizing: border-box;
    }
    body {
      background-color: #070414;
      color: #f8fafc;
      overflow-x: hidden;
      min-height: 100vh;
      position: relative;
    }
    /* Reactive Mouse Halo Follower */
    #mouse-halo {
      position: fixed;
      pointer-events: none;
      width: 650px;
      height: 650px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(147, 51, 234, 0.22) 0%, rgba(0,0,0,0) 70%);
      transform: translate(-50%, -50%);
      z-index: 1;
      transition: transform 0.15s ease-out;
      will-change: transform;
    }
    /* 3D Tilt Card */
    .tilt-card {
      transform-style: preserve-3d;
      transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s ease;
    }
    /* Mouse-Reactive Interactive Button */
    .interactive-pay-btn {
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #9333ea 0%, #7928ca 50%, #4f46e5 100%);
      box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .interactive-pay-btn:hover {
      transform: translateY(-2px) scale(1.015);
      box-shadow: 0 0 45px rgba(168, 85, 247, 0.7);
    }
    .interactive-pay-btn:active {
      transform: translateY(1px) scale(0.99);
    }
    .interactive-pay-btn::before {
      content: '';
      position: absolute;
      top: var(--mouse-y, 50%);
      left: var(--mouse-x, 50%);
      transform: translate(-50%, -50%);
      width: 240px;
      height: 240px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      border-radius: 50%;
    }
    .interactive-pay-btn:hover::before {
      opacity: 1;
    }
    .btn-shine {
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
      transform: skewX(-20deg);
      animation: shine 4s infinite;
      pointer-events: none;
    }
    @keyframes shine {
      0% { left: -100%; }
      30%, 100% { left: 200%; }
    }
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    @keyframes ripple {
      to { transform: scale(4); opacity: 0; }
    }
  </style>
</head>
<body class="flex flex-col justify-between selection:bg-purple-600">

  <!-- Mouse Halo Glow -->
  <div id="mouse-halo"></div>

  <!-- Top Security Header -->
  <header class="border-b border-white/10 bg-black/40 backdrop-blur-xl relative z-20 py-3.5">
    <div class="max-w-4xl mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="/" class="flex items-center gap-2.5">
          <img src="/assets/jahesh-logo.png" alt="لوگوی جهش" class="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]" onerror="this.src='/favicon-192x192.png'">
          <div>
            <div class="font-black text-sm text-white flex items-center gap-1.5">
              <span>جهش پی</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono">Jahesh Pay</span>
            </div>
            <div class="text-[10px] text-slate-400">سامانه درگاه پرداخت رسمی واسط شاپرک</div>
          </div>
        </a>
      </div>

      <div class="flex items-center gap-3 text-xs">
        <div class="hidden sm:flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          <span>تایید شده در شاپرک</span>
        </div>
        <span class="text-slate-500">|</span>
        <a href="tel:09152331974" class="text-slate-400 hover:text-white transition text-[11px]">پشتیبانی: ۰۹۱۵۲۳۳۱۹۷۴</a>
      </div>
    </div>
  </header>

  <!-- Main Checkout Container -->
  <main class="max-w-2xl mx-auto px-4 py-8 sm:py-12 relative z-10 w-full flex-1 flex flex-col justify-center">
    
    <!-- Top Client Attribution Badge -->
    <div class="flex justify-center mb-5">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-xs font-bold text-purple-200 backdrop-blur-md shadow-lg">
        <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        <span>پذیرنده درگاه:</span>
        <a href="${escapeHtml(websiteUrl)}" target="_blank" rel="noopener noreferrer" class="text-white font-extrabold hover:underline">${escapeHtml(websiteTitle)}</a>
      </div>
    </div>

    <!-- 3D Tilt Gateway Card -->
    <div id="tiltCard" class="tilt-card rounded-3xl p-6 sm:p-9 bg-[#110a26]/90 border border-purple-500/35 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
      
      <!-- Top Title & Description -->
      <div class="text-center mb-6">
        <h1 class="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
          تکمیل فرآیند پرداخت و اتصال به درگاه شاپرک
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
          ${escapeHtml(description || `پرداخت سفارش شما در وب‌سایت ${websiteTitle} از طریق درگاه رسمی واسط جهش پی.`)}
        </p>
      </div>

      <!-- Amount Banner -->
      <div class="my-5 p-5 sm:p-6 rounded-2xl bg-black/50 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
        <div>
          <span class="block text-xs font-semibold text-slate-400 mb-1">مبلغ قابل پرداخت بانکی:</span>
          <div class="flex items-baseline justify-center sm:justify-start gap-2">
            <span class="text-3xl sm:text-4xl font-black text-amber-400">${amountFormatted}</span>
            <span class="text-sm font-bold text-slate-300">تومان</span>
          </div>
          <span class="text-xs text-slate-400 mt-1 block">معادل ${amountRialsFormatted} ریال</span>
        </div>

        <div class="flex flex-col sm:items-end text-xs text-slate-300 gap-1.5">
          <div class="flex items-center gap-2">
            <span class="text-emerald-400 font-bold">✓ کارمزد: ۰ تومان</span>
            <span>•</span>
            <span class="text-purple-300 font-bold">اتصال مستقیم شتاب</span>
          </div>
          <div class="text-[11px] text-slate-400">شماره سفارش: <span class="font-mono text-slate-200">${escapeHtml(orderId || 'نامشخص')}</span></div>
          <div class="text-[10px] text-slate-500 font-mono">شناسه تراکنش: ${escapeHtml(trackId)}</div>
        </div>
      </div>

      <!-- Customer Details (Optional) -->
      ${customerName || customerMobile ? `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-purple-950/30 border border-white/5 text-xs">
          ${customerName ? `<div><span class="text-slate-400">نام پرداخت‌کننده: </span><strong class="text-white">${escapeHtml(customerName)}</strong></div>` : ''}
          ${customerMobile ? `<div><span class="text-slate-400">موبایل خریدار: </span><strong class="text-white font-mono" dir="ltr">${escapeHtml(customerMobile)}</strong></div>` : ''}
        </div>
      ` : ''}

      <!-- Mouse-Reactive Interactive Pay Button -->
      <div class="flex flex-col items-center justify-center my-4">
        <button id="payButton" type="button"
                class="interactive-pay-btn w-full sm:w-auto min-w-[320px] sm:min-w-[420px] px-8 py-5 rounded-2xl text-white font-black text-lg sm:text-xl flex items-center justify-center gap-3">
          <span class="btn-shine"></span>
          <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
          </svg>
          <span id="btnText">انتقال امن به درگاه بانکی شاپرک</span>
          <span id="spinner" class="hidden">
            <svg class="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
          </span>
        </button>

        <!-- Error Feedback Container -->
        <div id="errorBox" class="hidden mt-4 text-xs font-bold text-rose-300 bg-rose-950/80 border border-rose-500/50 px-4 py-2.5 rounded-xl max-w-md text-center"></div>

        <!-- Trust Badges Under Button -->
        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 text-xs font-semibold text-slate-400">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span>رمزنگاری ۲۵۶ بیتی SSL</span>
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
            <span>شبکه امن الکترونیکی شاپرک</span>
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span>تسویه آنی زیبال</span>
          </span>
        </div>
      </div>

      <!-- Cancel / Return Link -->
      <div class="mt-6 pt-5 border-t border-white/10 text-center">
        <a href="${escapeHtml(transaction.callbackUrl || websiteUrl)}?trackId=${encodeURIComponent(trackId)}&success=0&status=cancel" class="text-xs text-slate-400 hover:text-rose-400 transition flex items-center justify-center gap-1">
          <span>انصراف از پرداخت و بازگشت به سایت ${escapeHtml(websiteTitle)}</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </a>
      </div>

    </div>
  </main>

  <footer class="border-t border-white/10 bg-black/50 py-4 text-center text-xs text-slate-400 relative z-20">
    سامانه درگاه پرداخت واسط جهش پی | تحت نظارت شاپرک و بانک مرکزی جمهوری اسلامی ایران
  </footer>

  <!-- Client Side Interactive Scripts -->
  <script>
    (function() {
      // 1. Mouse Halo Follower
      const halo = document.getElementById('mouse-halo');
      window.addEventListener('mousemove', function(e) {
        if (halo) {
          halo.style.transform = 'translate(' + (e.clientX - 325) + 'px, ' + (e.clientY - 325) + 'px)';
        }
      }, { passive: true });

      // 2. 3D Tilt Card Effect
      const card = document.getElementById('tiltCard');
      if (card && window.matchMedia('(min-width: 768px)').matches) {
        card.addEventListener('mousemove', function(e) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -4;
          const rotateY = ((x - centerX) / centerX) * 4;
          card.style.transform = 'perspective(1000px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg)';
        });
        card.addEventListener('mouseleave', function() {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
      }

      // 3. Mouse-Reactive Pay Button
      const payBtn = document.getElementById('payButton');
      if (payBtn) {
        payBtn.addEventListener('mousemove', function(e) {
          const rect = payBtn.getBoundingClientRect();
          payBtn.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
          payBtn.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
        });

        payBtn.addEventListener('click', function(e) {
          const rect = payBtn.getBoundingClientRect();
          const circle = document.createElement('span');
          const diameter = Math.max(rect.width, rect.height);
          const radius = diameter / 2;
          circle.style.width = circle.style.height = diameter + 'px';
          circle.style.left = (e.clientX - rect.left - radius) + 'px';
          circle.style.top = (e.clientY - rect.top - radius) + 'px';
          circle.classList.add('ripple-effect');
          const oldRipple = payBtn.getElementsByClassName('ripple-effect')[0];
          if (oldRipple) oldRipple.remove();
          payBtn.appendChild(circle);
        });
      }

      // 4. Submit Payment to Backend and Redirect to Shaparak
      const btnText = document.getElementById('btnText');
      const spinner = document.getElementById('spinner');
      const errorBox = document.getElementById('errorBox');
      let isSubmitting = false;

      async function initiateShaparak() {
        if (isSubmitting) return;
        isSubmitting = true;
        btnText.textContent = 'در حال اتصال به شاپرک...';
        spinner.classList.remove('hidden');
        errorBox.classList.add('hidden');
        payBtn.disabled = true;

        try {
          const response = await fetch('/api/pg/start-shaparak', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              trackId: '${escapeHtml(trackId)}'
            })
          });

          const data = await response.json();

          if (data && data.success && data.paymentUrl) {
            window.location.href = data.paymentUrl;
          } else {
            throw new Error(data.message || data.error || 'خطا در ارتباط با درگاه شاپرک.');
          }
        } catch (err) {
          isSubmitting = false;
          btnText.textContent = 'تلاش مجدد برای پرداخت';
          spinner.classList.add('hidden');
          payBtn.disabled = false;
          errorBox.textContent = err.message || 'خطا در اتصال به درگاه پرداخت.';
          errorBox.classList.remove('hidden');
        }
      }

      payBtn.addEventListener('click', initiateShaparak);
    })();
  </script>
</body>
</html>`;
}

/**
 * Render Gateway Return & Receipt Page after Shaparak Payment
 */
export function renderJaheshGatewayReturnHtml(transaction, merchant, isSuccess, details = {}) {
  const websiteTitle = merchant?.title || 'سایت پذیرنده';
  const websiteUrl = merchant?.websiteUrl || '#';
  const clientCallback = transaction.callbackUrl || websiteUrl;

  const sep = clientCallback.includes('?') ? '&' : '?';
  const finalRedirectUrl = `${clientCallback}${sep}trackId=${encodeURIComponent(transaction.trackId)}&success=${isSuccess ? 1 : 0}&status=${isSuccess ? 2 : -1}&refNumber=${encodeURIComponent(details.refNumber || transaction.refNumber || '')}&orderId=${encodeURIComponent(transaction.orderId || '')}&amount=${encodeURIComponent(transaction.amountInTomans || 0)}`;

  const amountFormatted = Number(transaction.amountInTomans || 0).toLocaleString('fa-IR');

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${isSuccess ? 'پرداخت موفق' : 'نتیجه پرداخت'} | درگاه واسط جهش پی</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
  <style>* { font-family: 'Vazirmatn', sans-serif; }</style>
</head>
<body class="bg-[#070414] text-white min-h-screen flex flex-col justify-between selection:bg-purple-600">

  <!-- Header -->
  <header class="border-b border-white/10 bg-black/40 backdrop-blur-xl py-4">
    <div class="max-w-4xl mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="/assets/jahesh-logo.png" alt="جهش پی" class="w-9 h-9 object-contain" onerror="this.src='/favicon-192x192.png'">
        <div>
          <span class="font-black text-sm text-white">رسید رسمی پرداخت جهش پی | شاپرک</span>
          <span class="block text-[10px] text-slate-400">پذیرنده: ${escapeHtml(websiteTitle)}</span>
        </div>
      </div>
      <a href="${escapeHtml(websiteUrl)}" class="text-xs font-bold text-purple-300 hover:text-white transition">بازگشت به ${escapeHtml(websiteTitle)}</a>
    </div>
  </header>

  <!-- Main Card -->
  <main class="max-w-xl mx-auto px-4 py-12 flex-1 flex flex-col justify-center w-full">
    <div class="rounded-3xl p-6 sm:p-9 border backdrop-blur-2xl shadow-2xl text-center ${
      isSuccess
        ? 'bg-[#100a26]/90 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.18)]'
        : 'bg-[#1e0a14]/90 border-rose-500/40 shadow-[0_0_50px_rgba(244,63,94,0.18)]'
    }">
      
      <!-- Icon -->
      <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-5 shadow-xl ${
        isSuccess ? 'bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500' : 'bg-rose-500/20 text-rose-400 border-2 border-rose-500'
      }">
        ${isSuccess ? `
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
        ` : `
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        `}
      </div>

      <h1 class="text-2xl font-black mb-2 ${isSuccess ? 'text-emerald-400' : 'text-rose-400'}">
        ${isSuccess ? 'پرداخت با موفقیت انجام شد' : 'پرداخت ناموفق بود'}
      </h1>

      <p class="text-xs text-slate-300 mb-6">
        ${isSuccess ? 'تراکنش شما با موفقیت در شاپرک تایید و در سیستم ثبت گردید.' : (details.message || 'تراکنش توسط کاربر لغو گردید یا در اتصال به شاپرک خطایی رخ داد.')}
      </p>

      <!-- Details Table -->
      <div class="bg-black/40 rounded-2xl p-4 sm:p-5 border border-white/10 mb-6 text-xs space-y-2.5 text-right">
        <div class="flex justify-between items-center py-1 border-b border-white/5">
          <span class="text-slate-400">نام پذیرنده / وب‌سایت:</span>
          <span class="font-bold text-white">${escapeHtml(websiteTitle)}</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-white/5">
          <span class="text-slate-400">مبلغ پرداخت:</span>
          <span class="font-extrabold text-amber-400 text-sm">${amountFormatted} تومان</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-white/5">
          <span class="text-slate-400">شماره سفارش پذیرنده:</span>
          <span class="font-mono text-slate-200">${escapeHtml(transaction.orderId || 'نامشخص')}</span>
        </div>
        ${details.refNumber ? `
          <div class="flex justify-between items-center py-1 border-b border-white/5">
            <span class="text-slate-400">شماره پیگیری بانکی (RRN):</span>
            <span class="font-mono text-emerald-400 font-bold">${escapeHtml(details.refNumber)}</span>
          </div>
        ` : ''}
        ${details.cardNumber ? `
          <div class="flex justify-between items-center py-1 border-b border-white/5">
            <span class="text-slate-400">شماره کارت پرداخت‌کننده:</span>
            <span class="font-mono text-slate-200" dir="ltr">${escapeHtml(details.cardNumber)}</span>
          </div>
        ` : ''}
        <div class="flex justify-between items-center py-1">
          <span class="text-slate-400">شناسه پیگیری جهش پی:</span>
          <span class="font-mono text-purple-300">${escapeHtml(transaction.trackId)}</span>
        </div>
      </div>

      <!-- Auto Redirect Countdown or Button -->
      <div class="space-y-3">
        <a id="redirectBtn" href="${escapeHtml(finalRedirectUrl)}" class="w-full py-4 rounded-xl ${
          isSuccess ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-purple-600 hover:bg-purple-500'
        } text-white font-black text-sm shadow-xl transition flex items-center justify-center gap-2">
          <span>بازگشت به سایت ${escapeHtml(websiteTitle)}</span>
          <span id="countdown" class="text-xs bg-black/30 px-2 py-0.5 rounded-full font-mono">۵ ثانیه</span>
        </a>

        <div class="text-[11px] text-slate-400">
          در حال انتقال خودکار به وب‌سایت پذیرنده...
        </div>
      </div>

    </div>
  </main>

  <footer class="border-t border-white/10 bg-black/50 py-4 text-center text-xs text-slate-400">
    سامانه درگاه پرداخت واسط جهش پی | پشتیبانی: ۰۹۱۵۲۳۳۱۹۷۴
  </footer>

  <script>
    ${isSuccess ? `
      try {
        confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
      } catch(e) {}
    ` : ''}

    let seconds = 5;
    const cd = document.getElementById('countdown');
    const targetUrl = ${JSON.stringify(finalRedirectUrl)};
    const interval = setInterval(function() {
      seconds--;
      if (cd) cd.textContent = seconds + ' ثانیه';
      if (seconds <= 0) {
        clearInterval(interval);
        window.location.href = targetUrl;
      }
    }, 1000);
  </script>
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
