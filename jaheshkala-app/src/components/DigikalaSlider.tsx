import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, ShoppingBag, ShieldCheck, ArrowLeft, Percent, Gift } from 'lucide-react';

interface DigikalaSliderProps {
  onSelectCategory: (category: string) => void;
  onScrollToIncredible: () => void;
}

export const DigikalaSlider: React.FC<DigikalaSliderProps> = ({
  onSelectCategory,
  onScrollToIncredible,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: 'جشنواره تخفیف‌های ویژه',
      title: 'خرید آنلاین انواع کالاها و خدمات با بهترین قیمت',
      subtitle: 'امکان خرید با درگاه امن بانکی، ضمانت اصالت و سلامت کالا و ارسال سریع به سراسر کشور',
      cta: 'مشاهده تخفیف‌های شگفت‌انگیز',
      action: onScrollToIncredible,
      gradient: 'from-[#3b1261] via-[#220d3d] to-[#0d071a]',
      icon: Percent,
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      badge: 'تضمین اصالت و کیفیت',
      title: 'تنوع بی‌نظیر محصولات با ۷ روز ضمانت بازگشت',
      subtitle: 'ارائه برترین کالاها، نرم‌افزارها و خدمات دیجیتال با پشتیبانی ۲۴ ساعته و تسویه آسان',
      cta: 'مشاهده همه محصولات',
      action: () => onSelectCategory(''),
      gradient: 'from-[#172554] via-[#111827] to-[#080d1a]',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      badge: 'پیشنهادهای روزانه',
      title: 'خرید سریع و مطمئن با درگاه امن شاپرک و زیبال',
      subtitle: 'هر آنچه برای خرید اینترنتی نیاز دارید، با خیال راحت در فروشگاه جهش‌کالا تهیه کنید',
      cta: 'شروع خرید در جهش‌کالا',
      action: onScrollToIncredible,
      gradient: 'from-[#1e1b4b] via-[#171239] to-[#0c081f]',
      icon: Gift,
      image: 'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  // Auto-rotate slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];
  const Icon = active.icon;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-purple-800/40 group hero-banner preserve-contrast dark-surface">
      
      {/* Background Image with Gradient Overlay */}
      <div className="relative min-h-[220px] sm:h-[300px] md:h-[340px] w-full overflow-hidden">
        <img
          src={active.image}
          alt={active.title}
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${active.gradient} opacity-90 backdrop-blur-[2px]`}></div>

        {/* Content Box */}
        <div className="relative z-10 p-4 sm:p-8 md:p-10 flex flex-col justify-between min-h-[220px] sm:h-[300px] md:h-[340px] text-right">
          
          {/* Top Badge */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-xs font-bold shadow-lg" style={{ color: '#ffffff' }}>
              <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span style={{ color: '#ffffff' }}>{active.badge}</span>
            </span>

            {/* Slide Indicators */}
            <div className="flex items-center gap-1.5" dir="ltr">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? 'w-5 sm:w-6 bg-amber-400'
                      : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`اسلاید ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-1.5 sm:space-y-2.5 max-w-2xl my-2 sm:my-0">
            <h2 className="text-base sm:text-2xl md:text-3xl font-black leading-snug drop-shadow-md hero-title" style={{ color: '#ffffff' }}>
              {active.title}
            </h2>
            <p className="text-[11px] sm:text-sm line-clamp-2 leading-relaxed font-normal hero-subtitle" style={{ color: '#f1ecfa' }}>
              {active.subtitle}
            </p>
          </div>

          {/* Action Button */}
          <div>
            <button
              onClick={active.action}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] sm:text-sm transition-all shadow-xl shadow-amber-400/20 active:scale-95"
            >
              <span>{active.cta}</span>
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 border border-white/20"
        aria-label="اسلاید قبلی"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 border border-white/20"
        aria-label="اسلاید بعدی"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

    </div>
  );
};
