import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, ShieldCheck, ArrowLeft, Percent, Gift } from 'lucide-react';
import { BannerSlide } from '../types';
import { INITIAL_BANNERS } from '../data/initialData';
import { renderFormattedBannerTitle } from '../lib/bannerUtils';

interface DigikalaSliderProps {
  banners?: BannerSlide[];
  onSelectCategory: (category: string) => void;
  onScrollToIncredible: () => void;
  onSelectProduct?: (productId: string) => void;
}

export const DigikalaSlider: React.FC<DigikalaSliderProps> = ({
  banners,
  onSelectCategory,
  onScrollToIncredible,
  onSelectProduct,
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
    if (slide.actionType === 'product' && slide.actionTarget) {
      if (onSelectProduct) {
        onSelectProduct(slide.actionTarget);
      }
    } else if (slide.actionType === 'incredible') {
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
      className="hero-banner relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-purple-900/30 group select-none bg-[#0c081f] preserve-contrast dark-surface"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Aspect Ratio Container: True 21/9 horizontal banner identically matching across Mobile, Tablet, and Desktop */}
      <div className="relative w-full aspect-[21/9] overflow-hidden">
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
              {/* Ambient Background Blur for Contain or Auto modes (avoids black margins) */}
              {(slide.fitMode === 'contain' || slide.fitMode === 'auto') && (
                <div
                  className="absolute inset-0 scale-110 blur-xl opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
              )}

              {/* Full Banner Image respecting chosen Fit Mode */}
              <img
                src={slide.image}
                alt={slide.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80';
                }}
                className={`w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.02] ${
                  slide.fitMode === 'contain'
                    ? 'object-contain relative z-[1]'
                    : slide.fitMode === 'auto'
                    ? 'object-contain sm:object-cover relative z-[1]'
                    : 'object-cover'
                }`}
                style={{ objectPosition: slide.imagePosition || 'center' }}
              />

              {/* Digikala Style Text Overlay: Smooth Persian RTL shadow & gradient to guarantee 100% text readability */}
              {!slide.hideTextOverlay && (
                <div
                  className={`absolute inset-0 z-[2] bg-gradient-to-l ${
                    slide.gradient || 'from-slate-950/90 via-slate-950/50 to-transparent'
                  }`}
                  style={{
                    opacity: (slide.overlayOpacity !== undefined ? slide.overlayOpacity : 85) / 100,
                  }}
                />
              )}

              {/* Persian Banner Content Container */}
              <div className="absolute inset-0 z-20 p-2.5 sm:p-6 md:p-8 flex flex-col justify-between text-right pointer-events-none">
                {/* Top Badge */}
                <div>
                  {!slide.hideTextOverlay && slide.badge && (
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white text-[8px] sm:text-xs font-bold shadow-lg">
                      <BadgeIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                      <span>{slide.badge}</span>
                    </span>
                  )}
                </div>

                {/* Main Heading & Subtitle (with optional frosted backdrop blur box) */}
                {!slide.hideTextOverlay && (slide.title || slide.subtitle) && (
                  <div
                    className={`my-auto transition-all ${
                      slide.singleLineTitle !== false
                        ? 'w-fit max-w-[94%] sm:max-w-[85%]'
                        : 'max-w-xl'
                    } ${
                      slide.textBackdropEnabled
                        ? `p-2 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md border shadow-2xl ${
                            slide.textBackdropTheme === 'purple'
                              ? 'bg-purple-950/75 border-purple-500/30'
                              : slide.textBackdropTheme === 'navy'
                              ? 'bg-slate-950/80 border-cyan-500/25'
                              : slide.textBackdropTheme === 'light'
                              ? 'bg-white/20 border-white/30 text-slate-900'
                              : 'bg-black/65 border-white/15'
                          }`
                        : 'space-y-0.5 sm:space-y-1'
                    }`}
                    style={{
                      backgroundColor:
                        slide.textBackdropEnabled && slide.textBackdropOpacity !== undefined
                          ? `rgba(0, 0, 0, ${slide.textBackdropOpacity / 100})`
                          : undefined,
                    }}
                  >
                    {slide.title && (
                      <h2
                        className={`font-black leading-snug drop-shadow-md transition-all ${
                          slide.singleLineTitle !== false
                            ? 'whitespace-nowrap overflow-hidden text-ellipsis'
                            : ''
                        } ${
                          slide.titleFontSize === 'sm'
                            ? 'text-[10px] sm:text-lg md:text-xl lg:text-2xl'
                            : slide.titleFontSize === 'md'
                            ? 'text-[11px] sm:text-xl md:text-2xl lg:text-3xl'
                            : slide.titleFontSize === 'xl'
                            ? 'text-[13px] sm:text-2xl md:text-3xl lg:text-5xl'
                            : 'text-[12px] sm:text-xl md:text-2xl lg:text-4xl' // 'lg' (default standard)
                        }`}
                        style={{ color: slide.titleColor || '#ffffff' }}
                      >
                        {renderFormattedBannerTitle(
                          slide.title,
                          slide.highlightText,
                          slide.highlightColor,
                          slide.titleColor
                        )}
                      </h2>
                    )}
                    {slide.subtitle && (
                      <p
                        className={`font-normal leading-relaxed drop-shadow transition-all ${
                          slide.singleLineSubtitle
                            ? 'whitespace-nowrap overflow-hidden text-ellipsis'
                            : 'line-clamp-1 sm:line-clamp-2'
                        } ${
                          slide.subtitleFontSize === 'sm'
                            ? 'text-[7.5px] sm:text-xs md:text-sm'
                            : slide.subtitleFontSize === 'lg'
                            ? 'text-[9.5px] sm:text-sm md:text-base'
                            : 'text-[8.5px] sm:text-xs md:text-sm' // 'md' (default standard)
                        }`}
                        style={{ color: slide.subtitleColor || 'rgba(226, 232, 240, 0.95)' }}
                      >
                        {slide.subtitle}
                      </p>
                    )}
                  </div>
                )}

                {/* CTA Button */}
                <div>
                  {slide.cta ? (
                    <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-5 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-[9px] sm:text-xs md:text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all pointer-events-auto">
                      <span>{slide.cta}</span>
                      <ArrowLeft className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-950" />
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

      {/* Digikala Style Bottom Dots Pagination - Placed in bottom-left corner */}
      {slides.length > 1 && (
        <div
          className="absolute bottom-3 sm:bottom-4 left-3 sm:left-5 z-30 flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/15 shadow-md"
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
                  ? 'w-4 sm:w-6 bg-amber-400 shadow-sm shadow-amber-400/50'
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
