import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, ShieldCheck, ArrowLeft, Percent, Gift, ArrowRight } from 'lucide-react';
import { BannerSlide } from '../types';
import { INITIAL_BANNERS } from '../data/initialData';

interface DigikalaSliderProps {
  banners?: BannerSlide[];
  onSelectCategory: (category: string) => void;
  onScrollToIncredible: () => void;
}

export const DigikalaSlider: React.FC<DigikalaSliderProps> = ({
  banners,
  onSelectCategory,
  onScrollToIncredible,
}) => {
  const activeBanners = (banners && banners.length > 0 ? banners : INITIAL_BANNERS).filter(
    (b) => b.isActive !== false
  );
  const slides = activeBanners.length > 0 ? activeBanners : INITIAL_BANNERS;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-rotate slider
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  // Reset currentSlide if it exceeds slides length
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [slides.length, currentSlide]);

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    // In RTL layout:
    // Swiping Left (distance > 0) means going next in RTL
    // Swiping Right (distance < 0) means going previous in RTL
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const active = slides[currentSlide] || slides[0];

  const handleAction = () => {
    if (!active) return;
    if (active.actionType === 'incredible') {
      onScrollToIncredible();
    } else if (active.actionType === 'package') {
      onSelectCategory('طراحی سایت و خدمات وب');
    } else if (active.actionType === 'category') {
      onSelectCategory(active.actionTarget || '');
    } else if (active.actionType === 'link' && active.actionTarget) {
      window.open(active.actionTarget, '_blank');
    } else {
      onSelectCategory('');
    }
  };

  const getBadgeIcon = (badge: string) => {
    if (badge.includes('تخفیف') || badge.includes('شگفت')) return Percent;
    if (badge.includes('اصالت') || badge.includes('ضمانت') || badge.includes('امنیت')) return ShieldCheck;
    if (badge.includes('هدیه') || badge.includes('جایزه') || badge.includes('پیشنهاد')) return Gift;
    return Sparkles;
  };

  const BadgeIcon = getBadgeIcon(active.badge || '');

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-purple-800/40 group hero-banner preserve-contrast dark-surface select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* Background Image with Gradient Overlay */}
      <div className="relative min-h-[230px] sm:h-[300px] md:h-[340px] w-full overflow-hidden">
        <img
          key={active.id || currentSlide}
          src={active.image}
          alt={active.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80';
          }}
          className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-all duration-700 ease-out"
          style={{ objectPosition: active.imagePosition || 'center' }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${active.gradient || 'from-[#3b1261] via-[#220d3d] to-[#0d071a]'}`}
          style={{ opacity: (active.overlayOpacity !== undefined ? active.overlayOpacity : 90) / 100 }}
        ></div>

        {/* Content Box */}
        <div className="relative z-10 p-4 sm:p-8 md:p-10 flex flex-col justify-between min-h-[230px] sm:h-[300px] md:h-[340px] text-right">
          
          {/* Top Badge & Slide Indicators */}
          <div className="flex items-center justify-between gap-2">
            {active.badge ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-xs font-bold shadow-lg" style={{ color: '#ffffff' }}>
                <BadgeIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span style={{ color: '#ffffff' }}>{active.badge}</span>
              </span>
            ) : (
              <div></div>
            )}

            {/* Slide Indicators */}
            {slides.length > 1 && (
              <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full border border-white/10" dir="ltr">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? 'w-5 sm:w-6 bg-amber-400'
                        : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`اسلاید ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-1.5 sm:space-y-2.5 max-w-2xl my-2 sm:my-0 pr-1">
            <h2 className="text-base sm:text-2xl md:text-3xl font-black leading-snug drop-shadow-md hero-title" style={{ color: '#ffffff' }}>
              {active.title}
            </h2>
            {active.subtitle && (
              <p className="text-[11px] sm:text-sm line-clamp-2 leading-relaxed font-normal hero-subtitle text-purple-100/90" style={{ color: '#f1ecfa' }}>
                {active.subtitle}
              </p>
            )}
          </div>

          {/* Action Button & Navigation Helper */}
          <div className="flex items-center justify-between gap-1 sm:gap-2 flex-wrap">
            <button
              onClick={handleAction}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] sm:text-sm transition-all shadow-xl shadow-amber-400/20 active:scale-95 cursor-pointer"
            >
              <span>{active.cta || 'مشاهده و خرید'}</span>
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Mobile & Tablet Slider Navigation Arrow Controls */}
            {slides.length > 1 && (
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1 rounded-2xl border border-white/20 sm:hidden shrink-0">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-7 h-7 rounded-xl bg-purple-950/80 text-white flex items-center justify-center active:scale-90"
                  aria-label="بنر قبلی"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-amber-300 font-bold px-1 whitespace-nowrap">
                  {currentSlide + 1} / {slides.length}
                </span>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-7 h-7 rounded-xl bg-purple-950/80 text-white flex items-center justify-center active:scale-90"
                  aria-label="بنر بعدی"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Desktop & Tablet Floating Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={nextSlide}
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl bg-black/50 hover:bg-black/80 backdrop-blur-md text-white items-center justify-center transition-all border border-white/20 shadow-xl hover:scale-110 active:scale-95 cursor-pointer z-20"
            aria-label="بنر بعدی"
            title="بنر بعدی"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={prevSlide}
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl bg-black/50 hover:bg-black/80 backdrop-blur-md text-white items-center justify-center transition-all border border-white/20 shadow-xl hover:scale-110 active:scale-95 cursor-pointer z-20"
            aria-label="بنر قبلی"
            title="بنر قبلی"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

    </div>
  );
};

