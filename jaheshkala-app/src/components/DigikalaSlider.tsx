import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, ShieldCheck, ArrowLeft, Percent, Gift } from 'lucide-react';
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

  // Auto-rotate slider every 5 seconds
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  // Reset index if slides list changes
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

  // Touch handlers for mobile swipe
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
    const minSwipeDistance = 40;

    // In RTL: swiping left goes to next slide
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleAction = (slide: BannerSlide) => {
    if (!slide) return;
    if (slide.actionType === 'incredible') {
      onScrollToIncredible();
    } else if (slide.actionType === 'package') {
      onSelectCategory('طراحی سایت و خدمات وب');
    } else if (slide.actionType === 'category') {
      onSelectCategory(slide.actionTarget || '');
    } else if (slide.actionType === 'link' && slide.actionTarget) {
      window.open(slide.actionTarget, '_blank');
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

  return (
    <section 
      aria-label="اسلایدر بنرهای ویژه"
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-purple-900/30 group select-none bg-[#0c081f]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Aspect Ratio Container: True horizontal landscape banner just like Digikala */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[2.6/1] md:aspect-[2.9/1] min-h-[220px] sm:min-h-[280px] md:min-h-[340px] max-h-[440px] overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const BadgeIcon = getBadgeIcon(slide.badge || '');

          return (
            <div
              key={slide.id || index}
              onClick={() => handleAction(slide)}
              className={`absolute inset-0 w-full h-full cursor-pointer transition-all duration-700 ease-in-out ${
                isActive
                  ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                  : 'opacity-0 scale-105 z-0 pointer-events-none'
              }`}
            >
              {/* Full-bleed Widescreen Banner Image (object-cover without letterboxing or black margins) */}
              <img
                src={slide.image}
                alt={slide.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80';
                }}
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                style={{ objectPosition: slide.imagePosition || 'center' }}
              />

              {/* Digikala Style Text Overlay: Smooth Persian RTL shadow & gradient to guarantee 100% text readability */}
              {!slide.hideTextOverlay && (
                <div
                  className={`absolute inset-0 bg-gradient-to-l ${
                    slide.gradient || 'from-slate-950/90 via-slate-950/50 to-transparent'
                  }`}
                  style={{
                    opacity: (slide.overlayOpacity !== undefined ? slide.overlayOpacity : 85) / 100,
                  }}
                />
              )}

              {/* Persian Banner Content Container */}
              <div className="absolute inset-0 z-20 p-4 sm:p-7 md:p-10 flex flex-col justify-between text-right pointer-events-none">
                {/* Top Badge */}
                <div>
                  {!slide.hideTextOverlay && slide.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-xs font-bold shadow-lg">
                      <BadgeIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{slide.badge}</span>
                    </span>
                  )}
                </div>

                {/* Main Heading & Subtitle */}
                {!slide.hideTextOverlay && (slide.title || slide.subtitle) && (
                  <div className="space-y-1.5 sm:space-y-2.5 max-w-2xl my-auto">
                    {slide.title && (
                      <h2 className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-snug drop-shadow-md">
                        {slide.title}
                      </h2>
                    )}
                    {slide.subtitle && (
                      <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-slate-200/95 font-normal leading-relaxed line-clamp-2 max-w-xl drop-shadow">
                        {slide.subtitle}
                      </p>
                    )}
                  </div>
                )}

                {/* CTA Button */}
                <div>
                  {slide.cta ? (
                    <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 active:scale-95 transition-all pointer-events-auto">
                      <span>{slide.cta}</span>
                      <ArrowLeft className="w-4 h-4 text-slate-950" />
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Digikala Style Desktop/Tablet Side Navigation Buttons */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white items-center justify-center transition-all border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-30 cursor-pointer"
            aria-label="بنر قبلی"
            title="بنر قبلی"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white items-center justify-center transition-all border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-30 cursor-pointer"
            aria-label="بنر بعدی"
            title="بنر بعدی"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Digikala Style Bottom Dots Pagination */}
      {slides.length > 1 && (
        <div
          className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15"
          dir="ltr"
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(idx);
              }}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? 'w-5 sm:w-7 bg-amber-400 shadow-sm shadow-amber-400/50'
                  : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`رفتن به اسلاید ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
