import React, { useState } from 'react';
import { X, ExternalLink, Code2, Globe, Server, CheckCircle2, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';

interface IntegrationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntegrationGuideModal: React.FC<IntegrationGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#110b27] border border-purple-800/80 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/50 bg-[#160d33]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white">راهنمای جامع راه‌اندازی و اتصال ۶ پلتفرم جهش</h3>
              <p className="text-[11px] text-slate-400">
                GitHub Desktop | Vercel | Zibal WebApp | Search Console | Supabase | OpenRouter
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-950 hover:bg-purple-900 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-right text-xs text-slate-300">
          
          <div className="bg-purple-950/40 border border-purple-800/50 p-4 rounded-2xl flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-purple-200 leading-relaxed">
              مهندس عزیز، این راهنما دقیقاً طبق ۶ ابزاری که اعلام کردید تهیه شده است. سایت شما با تمام فیچرها، درگاه، پنل ادمین و دیتابیس آماده است. با مراحل زیر آن را روی دامنه اختصاصی <strong className="text-amber-300">jaheshit.ir</strong> و درگاه زیبال بالا ببرید:
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 1. Zibal WebApp */}
            <div className="bg-[#170f35] border border-emerald-500/40 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white flex items-center gap-2 text-xs">
                  <span className="w-6 h-6 rounded-lg bg-emerald-950 text-emerald-300 flex items-center justify-center font-bold">۱</span>
                  درگاه پرداخت زیبال (Zibal WebApp)
                </h4>
                <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded font-bold">
                  درگاه پرداخت
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                وقتی درگاه زیبال تایید شد، در پنل زیبال یک «درگاه پرداخت جدید» با آدرس سایت <code className="text-amber-300">https://jaheshit.ir</code> ایجاد کنید. مرچنت کد (Merchant ID) را کپی کرده و در پنل مدیریت جهش وارد کنید.
              </p>
              <div className="bg-black/50 p-2.5 rounded-xl border border-purple-900/50 text-[10px] font-mono text-emerald-400">
                URL بازگشت (Callback): https://jaheshit.ir/#/payment-verify
              </div>
            </div>

            {/* 2. GitHub Desktop */}
            <div className="bg-[#170f35] border border-purple-800/50 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white flex items-center gap-2 text-xs">
                  <span className="w-6 h-6 rounded-lg bg-purple-950 text-purple-300 flex items-center justify-center font-bold">۲</span>
                  گیت‌هاب دسکتاپ (GitHub Desktop)
                </h4>
                <span className="text-[10px] bg-purple-900/60 text-purple-300 px-2 py-0.5 rounded font-bold">
                  سورس کنترل
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                کدهای این پروژه را در یک ریپازیتوری در گیت‌هاب به نام <code className="text-purple-300">jahesh-website</code> پوش (Push) کنید تا هر تغییری در سیستم با یک کلیک روی ورسل آپدیت شود.
              </p>
              <div className="bg-black/50 p-2.5 rounded-xl border border-purple-900/50 text-[10px] font-mono text-slate-300">
                git commit -m "Update Jahesh Store & Golden Package" &amp;&amp; git push
              </div>
            </div>

            {/* 3. Vercel & Domain jaheshit.ir */}
            <div className="bg-[#170f35] border border-purple-800/50 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white flex items-center gap-2 text-xs">
                  <span className="w-6 h-6 rounded-lg bg-purple-950 text-purple-300 flex items-center justify-center font-bold">۳</span>
                  ورسل (Vercel) و دامنه jaheshit.ir
                </h4>
                <span className="text-[10px] bg-purple-900/60 text-purple-300 px-2 py-0.5 rounded font-bold">
                  هاستینگ ابری
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                همانطور که در اسکرین‌شات شما دیدیم، پروژه در ورسل با آدرس <code className="text-purple-300">jahesh-website.vercel.app</code> دایر است. وارد Vercel Dashboard &gt; Settings &gt; Domains شوید و دامنه <strong className="text-amber-300">jaheshit.ir</strong> را اضافه کنید.
              </p>
              <div className="bg-black/50 p-2 rounded-xl border border-purple-900/50 text-[10px] font-mono text-slate-300">
                A Record: 76.76.21.21 | CNAME: cname.vercel-dns.com
              </div>
            </div>

            {/* 4. Google Search Console */}
            <div className="bg-[#170f35] border border-purple-800/50 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white flex items-center gap-2 text-xs">
                  <span className="w-6 h-6 rounded-lg bg-purple-950 text-purple-300 flex items-center justify-center font-bold">۴</span>
                  گوگل سرچ کنسول (Search Console)
                </h4>
                <span className="text-[10px] bg-purple-900/60 text-purple-300 px-2 py-0.5 rounded font-bold">
                  رتبه ۱ سئو
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                آدرس دامنه ملی‌تان یعنی <code className="text-amber-300">https://jaheshit.ir</code> را اضافه کنید. فایل تاییدیه یا کد HTML meta را در index.html بگذارید و نقشه سایت را سابمیت کنید تا صفحات سایت فورا ایندکس شوند.
              </p>
            </div>

            {/* 5. Supabase Studio */}
            <div className="bg-[#170f35] border border-purple-800/50 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white flex items-center gap-2 text-xs">
                  <span className="w-6 h-6 rounded-lg bg-purple-950 text-purple-300 flex items-center justify-center font-bold">۵</span>
                  سوپابیس (Supabase Studio)
                </h4>
                <span className="text-[10px] bg-purple-900/60 text-purple-300 px-2 py-0.5 rounded font-bold">
                  دیتابیس ابری
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                هم‌اکنون تمام اطلاعات سفارشات، کاربران و محصولات در لوکال‌استوریج مرورگر ذخیره و پایدار است. برای سینک چندکاربره، می‌توانید جداول `orders` و `products` را در Supabase بسازید.
              </p>
            </div>

            {/* 6. OpenRouter */}
            <div className="bg-[#170f35] border border-purple-800/50 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white flex items-center gap-2 text-xs">
                  <span className="w-6 h-6 rounded-lg bg-purple-950 text-purple-300 flex items-center justify-center font-bold">۶</span>
                  اوپن‌روتر (OpenRouter)
                </h4>
                <span className="text-[10px] bg-purple-900/60 text-purple-300 px-2 py-0.5 rounded font-bold">
                  هوش مصنوعی
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                برای پکیج هوش مصنوعی جهش و تولید خودکار متون سئو یا پاسخ چت، می‌توانید کلید API اوپن‌روتر را در تنظیمات محیطی قرار دهید.
              </p>
            </div>

          </div>

          {/* Admin quick credentials */}
          <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-2xl space-y-1">
            <h5 className="font-bold text-amber-300 text-xs">اطلاعات ورود ادمین شما:</h5>
            <p className="text-slate-300 text-xs">
              نام کاربری: <code className="bg-black/60 px-2 py-0.5 rounded font-mono text-white">jahesh</code> | 
              رمز عبور: <code className="bg-black/60 px-2 py-0.5 rounded font-mono text-white">jahesh1395</code>
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#150d32] border-t border-purple-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs"
          >
            متوجه شدم، بستن راهنما
          </button>
        </div>

      </div>
    </div>
  );
};
