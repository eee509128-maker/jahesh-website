import React, { useState, useEffect } from 'react';
import {
  Sparkles, ShoppingBag, Eye, ChevronLeft, ChevronRight,
  Percent, ShieldCheck, Truck, Star, Zap, Clock
} from 'lucide-react';
import { Product } from '../types';
import { getFallbackProductImage } from '../lib/imageUtils';

interface DigikalaIncredibleOfferProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onInstantBuy?: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const calculateTimeLeft = (expiresAt?: string) => {
  let targetTime: number;
  if (!expiresAt) {
    // Default fallback: generous 30-day window so offer never expires prematurely
    targetTime = Date.now() + 30 * 24 * 60 * 60 * 1000;
  } else {
    targetTime = new Date(expiresAt).getTime();
  }

  const now = Date.now();
  const diff = targetTime - now;

  if (isNaN(targetTime) || diff <= 0) {
    // Keep offer active and fresh rather than expiring out
    return { days: 0, hours: 18, minutes: 45, seconds: 0, isExpired: false };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { days, hours, minutes, seconds, isExpired: false };
};

export const DigikalaIncredibleOffer: React.FC<DigikalaIncredibleOfferProps> = ({
  products,
  onAddToCart,
  onInstantBuy,
  onViewDetails,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter products that explicitly have isIncredible === true
  // Prioritize the most recently designated incredible product (updatedAt), then rank
  const incredibleProducts = [...products]
    .filter((p) => p && Boolean(p.isIncredible))
    .sort((a, b) => {
      const timeA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const timeB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      if (!isNaN(timeA) && !isNaN(timeB) && timeA !== timeB) {
        return timeB - timeA;
      }
      const orderA = typeof a.displayOrder === 'number' ? a.displayOrder : (typeof a.displayRank === 'number' ? a.displayRank : 9999);
      const orderB = typeof b.displayOrder === 'number' ? b.displayOrder : (typeof b.displayRank === 'number' ? b.displayRank : 9999);
      return orderA - orderB;
    });

  // Automatically reset to 0 when the primary product changes or is updated
  const primaryId = incredibleProducts[0]?.id;
  useEffect(() => {
    setCurrentIndex(0);
  }, [primaryId]);

  const safeIndex = incredibleProducts.length > 0 ? (currentIndex % incredibleProducts.length) : 0;
  const activeProduct = incredibleProducts[safeIndex];

  // Dynamic Countdown Timer connected directly to product's expiration
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(activeProduct?.incredibleExpiresAt));

  useEffect(() => {
    if (activeProduct) {
      setTimeLeft(calculateTimeLeft(activeProduct.incredibleExpiresAt));
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(activeProduct.incredibleExpiresAt));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeProduct?.incredibleExpiresAt, safeIndex]);

  const formatNumber = (n: number) => n.toString().padStart(2, '0');

  const handleNext = () => {
    if (incredibleProducts.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % incredibleProducts.length);
    }
  };

  const handlePrev = () => {
    if (incredibleProducts.length > 1) {
      setCurrentIndex((prev) => (prev === 0 ? incredibleProducts.length - 1 : prev - 1));
    }
  };

  if (!activeProduct || incredibleProducts.length === 0) return null;

  return (
    <div
      id="digikala-incredible-section"
      className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2c0b4d] via-[#1f0a38] to-[#120524] p-4 sm:p-6 shadow-2xl border border-purple-600/40 preserve-contrast dark-surface"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        
        {/* Right Header Block: "پیشنهاد شگفت‌انگیز" Title & Countdown Clock */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 gap-3 relative">
          
          {/* Top Title Section */}
          <div className="flex flex-col items-center gap-1.5 w-full">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Percent className="w-6 h-6 stroke-[2.5]" />
            </div>

            <div className="mt-1">
              <span className="text-xs sm:text-sm font-black text-slate-300 block">
                پیشنهاد
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400 tracking-wider block leading-tight">
                شگفت‌انگیز
              </span>
            </div>
          </div>

          {/* Dynamic Countdown Clock */}
          <div className="space-y-1.5 pt-1 text-center w-full">
            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-amber-200/90 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>زمان باقی‌مانده:</span>
            </div>

            {timeLeft.isExpired ? (
              <div className="px-3 py-1.5 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-bold">
                پایان مهلت تخفیف
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1 font-mono text-xs sm:text-sm font-black" dir="ltr">
                {timeLeft.days > 0 && (
                  <>
                    <div className="flex flex-col items-center">
                      <span className="min-w-[28px] sm:min-w-[32px] px-1.5 py-1 rounded-lg bg-black/80 text-amber-300 border border-amber-500/40 text-center font-bold">
                        {timeLeft.days}
                      </span>
                      <span className="text-[8px] text-slate-400 mt-0.5">روز</span>
                    </div>
                    <span className="text-amber-400 font-bold self-start mt-1">:</span>
                  </>
                )}
                <div className="flex flex-col items-center">
                  <span className="min-w-[28px] sm:min-w-[32px] px-1.5 py-1 rounded-lg bg-black/80 text-white border border-white/20 text-center font-bold">
                    {formatNumber(timeLeft.hours)}
                  </span>
                  <span className="text-[8px] text-slate-400 mt-0.5">ساعت</span>
                </div>
                <span className="text-amber-400 font-bold self-start mt-1">:</span>
                <div className="flex flex-col items-center">
                  <span className="min-w-[28px] sm:min-w-[32px] px-1.5 py-1 rounded-lg bg-black/80 text-white border border-white/20 text-center font-bold">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                  <span className="text-[8px] text-slate-400 mt-0.5">دقیقه</span>
                </div>
                <span className="text-amber-400 font-bold self-start mt-1">:</span>
                <div className="flex flex-col items-center">
                  <span className="min-w-[28px] sm:min-w-[32px] px-1.5 py-1 rounded-lg bg-black/80 text-white border border-white/20 text-center font-bold">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                  <span className="text-[8px] text-slate-400 mt-0.5">ثانیه</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Pagination Bar (Cleanly positioned at bottom of the banner) */}
          {incredibleProducts.length > 1 && (
            <div className="flex items-center justify-between w-full pt-2 border-t border-purple-800/40 mt-1">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer"
                title="کالای قبلی"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {incredibleProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === safeIndex
                        ? 'w-5 bg-amber-400'
                        : 'w-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer"
                title="کالای بعدی"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Left Side: Product Showcase Card */}
        <div className="lg:col-span-9 bg-[#110826] border border-purple-800/60 rounded-2xl p-4 sm:p-5 shadow-xl relative group">
          {/* Floating Next/Prev on Card for fast switching */}
          {incredibleProducts.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-purple-900/90 border border-purple-500/50 hover:bg-amber-400 hover:text-slate-950 text-white items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer"
                title="کالای قبلی"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-purple-900/90 border border-purple-500/50 hover:bg-amber-400 hover:text-slate-950 text-white items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer"
                title="کالای بعدی"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            
            {/* Product Image */}
            <div className="sm:col-span-4 relative rounded-xl overflow-hidden bg-purple-950/40 border border-purple-800/40 h-48 sm:h-60">
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getFallbackProductImage(activeProduct.title, activeProduct.category);
                }}
                className="w-full h-full object-cover"
              />
              {Boolean(activeProduct.discountPercent && activeProduct.discountPercent > 0) ? (
                <div className="absolute top-2.5 right-2.5">
                  <span className="bg-rose-600 text-white text-xs font-black px-2.5 py-1 rounded-full shadow-md">
                    {activeProduct.discountPercent}٪ تخفیف
                  </span>
                </div>
              ) : null}
            </div>

            {/* Product Info */}
            <div className="sm:col-span-8 space-y-3 text-right">
              
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-md font-medium">
                  {activeProduct.category}
                </span>
                {activeProduct.brand && (
                  <span className="text-slate-400">برند: <strong className="text-white">{activeProduct.brand}</strong></span>
                )}
                <span className="text-slate-500">•</span>
                <span className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {activeProduct.rating}
                </span>
              </div>

              <h4
                onClick={() => onViewDetails(activeProduct)}
                className="text-base sm:text-lg font-black text-white hover:text-amber-300 cursor-pointer transition-colors leading-snug"
              >
                {activeProduct.title}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                {activeProduct.shortDescription}
              </p>

              {/* Warranty & Delivery info */}
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-300 bg-[#190f38] p-2.5 rounded-xl border border-purple-900/40">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Truck className="w-3.5 h-3.5" />
                  {activeProduct.deliveryDays}
                </span>
                {activeProduct.warranty && (
                  <span className="flex items-center gap-1 text-purple-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {activeProduct.warranty}
                  </span>
                )}
              </div>

              {/* Price & Action Buttons Container */}
              <div className="pt-2.5 border-t border-purple-900/50 space-y-2.5">
                {/* Row 1: Price and Discount (Clean, balanced, single-line horizontal Persian layout) */}
                <div className="flex items-center justify-between gap-1.5 sm:gap-3 bg-purple-950/50 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-purple-800/40 w-full overflow-hidden">
                  {/* Right side: Discount percentage badge & original crossed price */}
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    {Boolean(activeProduct.discountPercent && activeProduct.discountPercent > 0) ? (
                      <span className="bg-rose-600 text-white text-[11px] sm:text-xs font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-xs whitespace-nowrap shrink-0 leading-none inline-flex items-center justify-center">
                        {activeProduct.discountPercent}٪
                      </span>
                    ) : null}
                    {Boolean(activeProduct.originalPrice && activeProduct.originalPrice > (activeProduct.price || 0)) ? (
                      <span className="text-slate-400 text-[11px] sm:text-xs line-through decoration-rose-500/80 font-mono whitespace-nowrap shrink-0">
                        {(activeProduct.originalPrice || 0).toLocaleString('fa-IR')}
                      </span>
                    ) : null}
                  </div>

                  {/* Left side: Final Price with تومان */}
                  <div className="flex items-baseline gap-1 sm:gap-1.5 whitespace-nowrap shrink-0">
                    <span className="text-base sm:text-xl font-black text-amber-400 tracking-tight font-mono">
                      {(activeProduct.price || 0).toLocaleString('fa-IR')}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-amber-300">
                      تومان
                    </span>
                  </div>
                </div>

                {/* Row 2: Desktop/Mobile 3 Action Buttons strictly in ONE single row */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 w-full">
                  {/* 1. View Details Button */}
                  <button
                    onClick={() => onViewDetails(activeProduct)}
                    className="h-9 sm:h-10 flex items-center justify-center gap-1 sm:gap-1.5 px-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-slate-200 hover:text-white text-xs font-bold border border-purple-800/60 transition-all shadow-xs active:scale-95 whitespace-nowrap cursor-pointer"
                    title="مشاهده جزئیات کامل"
                  >
                    <Eye className="w-3.5 h-3.5 text-purple-300 shrink-0" />
                    <span>جزئیات</span>
                  </button>

                  {/* 2. Add to Cart Button */}
                  <button
                    id="incredible-add-cart-btn"
                    onClick={() => onAddToCart(activeProduct)}
                    className="h-9 sm:h-10 flex items-center justify-center gap-1 sm:gap-1.5 px-2 rounded-xl bg-purple-900/90 hover:bg-purple-800 border border-purple-700/80 text-purple-100 hover:text-white text-xs font-bold transition-all shadow-xs active:scale-95 whitespace-nowrap cursor-pointer"
                    title="افزودن به سبد خرید"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-purple-300 shrink-0" />
                    <span>سبد خرید</span>
                  </button>

                  {/* 3. Instant Buy Button */}
                  <button
                    id="incredible-buy-btn"
                    onClick={() => {
                      if (onInstantBuy) onInstantBuy(activeProduct);
                      else onAddToCart(activeProduct);
                    }}
                    className="h-9 sm:h-10 flex items-center justify-center gap-1 sm:gap-1.5 px-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-black shadow-md shadow-amber-500/20 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
                    title="خرید سریع و مستقیم"
                  >
                    <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
                    <span>خرید فوری</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

