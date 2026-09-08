import React from 'react';
import {
  ChevronUp, Phone, Mail, ShieldCheck, Award, Heart,
  MapPin, Globe, ExternalLink, HelpCircle, FileText, CheckCircle2, RotateCcw
} from 'lucide-react';

interface DigikalaFooterProps {
  onOpenTerms: () => void;
  onOpenTopic: (topicId: string) => void;
}

export const DigikalaFooter: React.FC<DigikalaFooterProps> = ({
  onOpenTerms,
  onOpenTopic,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0718] border-t border-purple-900/40 pt-8 pb-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Top bar with Logo, Support Phones and "بازگشت به بالا" Button */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-6 border-b border-purple-900/30">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-purple-900/50">
              J
            </div>
            <div>
              <span className="font-black text-white text-base">جهش‌کالا</span>
              <span className="text-[11px] text-purple-300 block">فروشگاه آنلاین انواع کالا، خدمات و محصولات تخصصی</span>
            </div>
          </div>

          {/* Support Phones & 24/7 Service */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>تلفن پشتیبانی و تماس مستقیم:</span>
              <a
                href="tel:09152331974"
                className="font-mono text-white font-bold hover:text-amber-300 transition-colors"
                dir="ltr"
              >
                09152331974
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="tel:09364864663"
                className="font-mono text-white font-bold hover:text-amber-300 transition-colors"
                dir="ltr"
              >
                09364864663
              </a>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-300">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-purple-800/60 hover:bg-purple-950/60 text-slate-200 text-xs font-semibold transition-colors shrink-0"
          >
            <span>بازگشت به بالا</span>
            <ChevronUp className="w-4 h-4 text-amber-400" />
          </button>

        </div>

        {/* Highlight Banner: Official Website & Branch 1 Address */}
        <div className="p-4 rounded-2xl bg-[#120a2e]/80 border border-purple-900/50 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-slate-300">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>سایت اصلی:</span>
              <a
                href="https://jaheshit.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                <span>jaheshit.ir</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <span className="hidden md:inline text-purple-900">|</span>

            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-slate-200">مکان شعبه یک:</span>
              <span className="text-white">مشهد مقدس، خیام شمالی ۴۶، بین شکری ۱۳ و ۱۵، پلاک ۲۸۷</span>
            </div>
          </div>

          <button
            onClick={() => onOpenTopic('contact-branch')}
            className="text-[11px] px-3 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 hover:text-white transition-colors shrink-0"
          >
            مشاهده جزئیات شعبه و تماس
          </button>
        </div>

        {/* 4 Footer Columns (Digikala Structure) - General E-Commerce Store Topics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-b border-purple-900/30 text-right">
          
          {/* Column 1: با جهش‌کالا */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white mb-3">با جهش‌کالا</h4>
            <ul className="space-y-2.5 text-[11px]">
              <li>
                <button
                  onClick={() => onOpenTopic('about-jahesh')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  درباره فروشگاه جهش‌کالا
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTopic('terms')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  شرایط و قوانین استفاده از سایت
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTopic('seller-center')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  فرصت‌های همکاری و فروشندگی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTopic('contact-branch')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  تماس با ما و اطلاعات شعب
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: خدمات مشتریان */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white mb-3">خدمات مشتریان</h4>
            <ul className="space-y-2.5 text-[11px]">
              <li>
                <button
                  onClick={() => onOpenTopic('faq')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  پاسخ به پرسش‌های متداول
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTopic('return-policy')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  رویه‌های بازگرداندن کالا
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTopic('privacy-policy')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  حریم خصوصی کاربران
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTopic('report-bug')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  گزارش باگ یا تخلف
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: راهنمای خرید و پرداخت */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white mb-3">راهنمای خرید و پرداخت</h4>
            <ul className="space-y-2.5 text-[11px]">
              <li>
                <button
                  onClick={() => onOpenTopic('order-guide')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  نحوه ثبت سفارش در فروشگاه
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTopic('shipping-policy')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  رویه‌های ارسال و تحویل سفارش
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTopic('payment-methods')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  شیوه‌های پرداخت و درگاه بانکی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTopic('invoice-issuance')}
                  className="text-slate-300 hover:text-amber-300 transition-colors text-right block w-full"
                >
                  صدور فاکتور رسمی و خرید سازمانی
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: مجوزها و امنیت درگاه */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white mb-2">مجوزها و نمادهای اعتماد</h4>
            <div className="grid grid-cols-2 gap-2">
              
              <button
                onClick={() => onOpenTopic('licenses-security')}
                className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40 hover:border-purple-600/70 transition-all text-center space-y-1 group"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-white block">پرداخت امن زیبال</span>
                <span className="text-[9px] text-slate-400 block">شبکه شتاب شاپرک</span>
              </button>

              <button
                onClick={() => onOpenTopic('return-policy')}
                className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40 hover:border-purple-600/70 transition-all text-center space-y-1 group"
              >
                <RotateCcw className="w-5 h-5 text-amber-400 mx-auto group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-white block">۷ روز ضمانت بازگشت</span>
                <span className="text-[9px] text-slate-400 block">اصالت و سلامت کالا</span>
              </button>

            </div>
          </div>

        </div>

        {/* Copyright notice (Digikala style) with Jahesh Official details */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p className="text-slate-400 text-center sm:text-right leading-relaxed">
            برای استفاده از مطالب جهش‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت متعلق به{' '}
            <a
              href="https://jaheshit.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-amber-400 underline decoration-purple-600"
            >
              فروشگاه اینترنتی جهش‌کالا (jaheshit.ir)
            </a>{' '}
            می‌باشد. تلفن‌های تماس پشتیبانی: 09152331974 - 09364864663
          </p>
          <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
            <span>توسعه با</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>تیم مهندسی جهش</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
