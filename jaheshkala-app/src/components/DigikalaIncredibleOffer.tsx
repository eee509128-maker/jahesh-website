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
  if (!expiresAt) {
    // Default fallback: 24h rotating cycle
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const diff = Math.max(0, endOfDay.getTime() - now.getTime());
    return {
      days: 0,
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isExpired: false,
    };
  }

  const targetTime = new Date(expiresAt).getTime();
  const now = Date.now();
  const diff = targetTime - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % 1000 * 60) / 1000) || Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isExpired: false };
};

export const DigikalaIncredibleOffer: React.FC<DigikalaIncredibleOfferProps> = ({
  products,
  onAddToCart,
  onInstantBuy,
  onViewDetails,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter products that have discounts or badges or explicit incredible offer flag
  const incredibleProducts = products.filter(
    (p) => p.isIncredible || (p.discountPercent && p.discountPercent > 0) || p.isPopular || p.isGolden
  );

  const activeProduct = incredibleProducts[currentIndex] || products[0];

  // Dynamic Countdown Timer connected directly to product's expiration
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(activeProduct?.incredibleExpiresAt));

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(activeProduct?.incredibleExpiresAt));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(activeProduct?.incredibleExpiresAt));
    }, 1000);
    return () => clearInterval(timer);
  }, [activeProduct?.incredibleExpiresAt, currentIndex]);

  const formatNumber = (n: number) => n.toString().padStart(2, '0');

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % incredibleProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? incredibleProducts.length - 1 : prev - 1));
  };

  if (!activeProduct) return null;

  return (
    <div
      id="digikala-incredible-section"
      className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2c0b4d] via-[#1f0a38] to-[#120524] p-4 sm:p-6 shadow-2xl border border-purple-600/40 preserve-contrast dark-surface"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        
        {/* Right Header Block: "پیشنهاد شگفت‌انگیز" Title & Countdown Clock */}
        <div className="lg:col-span-3 flex flex-col items-center justify-between text-center p-3 sm:p-4 rounded-2xl bg-black/40 border border-white/10 gap-3">
          
          {/* Top Row: Title + Pagination Controls */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-400">
                <Percent className="w-5 h-5 sm:w-7 sm:h-7 rotate-12 shrink-0" />
                <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 animate-pulse shrink-0" />
              </div>

              <div className="text-right">
                <span className="text-xs sm:text-lg font-black text-white block leading-tight">
                  پیشنهاد
                </span>
                <span className="text-sm sm:text-2xl font-black text-amber-400 tracking-wider block leading-tight">
                  شگفت‌انگیز
                </span>
              </div>
            </div>

            {/* Next/Prev Incredible Item Controls */}
            {incredibleProducts.length > 1 && (
              <div className="flex items-center gap-1 bg-purple-950/80 px-2 py-1 rounded-xl border border-purple-700/60 shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer"
                  title="کالای قبلی"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <span className="text-[11px] text-amber-300 font-bold px-1.5 whitespace-nowrap select-none" dir="rtl">
                  {currentIndex + 1} از {incredibleProducts.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer"
                  title="کالای بعدی"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Dynamic Countdown Clock */}
          <div className="space-y-1.5 pt-1 text-center w-full">
            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-amber-200/90 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>زمان باقی‌مانده:</span>
            </div>

            {timeLeft.isExpired ? (
              <div className="px-2 py-1 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-bold">
                پایان مهلت تخفیف
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1 font-mono text-xs sm:text-sm font-black" dir="ltr">
                {timeLeft.days > 0 && (
                  <>
                    <div className="flex flex-col items-center">
                      <span className="min-w-[28px] sm:min-w-[34px] px-1 py-1 rounded-lg bg-black/80 text-amber-300 border border-amber-500/40 text-center font-bold">
                        {timeLeft.days}
                      </span>
                      <span className="text-[8px] text-slate-400 mt-0.5">روز</span>
                    </div>
                    <span className="text-amber-400 font-bold self-start mt-1">:</span>
                  </>
                )}
                <div className="flex flex-col items-center">
                  <span className="min-w-[28px] sm:min-w-[34px] px-1 py-1 rounded-lg bg-black/80 text-white border border-white/20 text-center font-bold">
                    {formatNumber(timeLeft.hours)}
                  </span>
                  <span className="text-[8px] text-slate-400 mt-0.5">ساعت</span>
                </div>
                <span className="text-amber-400 font-bold self-start mt-1">:</span>
                <div className="flex flex-col items-center">
                  <span className="min-w-[28px] sm:min-w-[34px] px-1 py-1 rounded-lg bg-black/80 text-white border border-white/20 text-center font-bold">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                  <span className="text-[8px] text-slate-400 mt-0.5">دقیقه</span>
                </div>
                <span className="text-amber-400 font-bold self-start mt-1">:</span>
                <div className="flex flex-col items-center">
                  <span className="min-w-[28px] sm:min-w-[34px] px-1 py-1 rounded-lg bg-black/80 text-white border border-white/20 text-center font-bold">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                  <span className="text-[8px] text-slate-400 mt-0.5">ثانیه</span>
                </div>
              </div>
            )}

            {activeProduct?.incredibleTimerDuration && (
              <div className="text-[9px] text-purple-300/80">
                {activeProduct.incredibleTimerDuration === '1day' && '⏱️ تخفیف ویژه ۲۴ ساعته'}
                {activeProduct.incredibleTimerDuration === '3days' && '⏱️ پیشنهاد ویژه ۳ روزه'}
                {activeProduct.incredibleTimerDuration === '1week' && '⏱️ پیشنهاد هفتگی شگفت‌انگیز'}
                {activeProduct.incredibleTimerDuration === '1month' && '⏱️ جشنواره ماهانه جهش'}
              </div>
            )}
          </div>
        </div>

        {/* Left Side: Product Showcase Card */}
        <div className="lg:col-span-9 bg-[#110826] border border-purple-800/60 rounded-2xl p-4 sm:p-5 shadow-xl relative">
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
              <div className="pt-2.5 border-t border-purple-900/50 space-y-3">
                {/* Row 1: Price and Discount (Clean, balanced, attractive Persian typography) */}
                <div className="flex items-center justify-between gap-3 bg-purple-950/40 px-3.5 py-2.5 rounded-xl border border-purple-800/40">
                  {/* Discount percentage badge & original crossed price */}
                  <div className="flex items-center gap-2">
                    {Boolean(activeProduct.discountPercent && activeProduct.discountPercent > 0) ? (
                      <span className="bg-rose-600 text-white text-[11px] sm:text-xs font-black px-2.5 py-1 rounded-lg shadow-sm">
                        {activeProduct.discountPercent}٪ تخفیف ویژه
                      </span>
                    ) : null}
                    {Boolean(activeProduct.originalPrice && activeProduct.originalPrice > activeProduct.price) ? (
                      <span className="text-slate-400 text-xs sm:text-sm line-through decoration-rose-500/80">
                        {activeProduct.originalPrice.toLocaleString('fa-IR')}
                      </span>
                    ) : null}
                  </div>

                  {/* Final Price with تومان (Attractive, clear, appealing Persian font) */}
                  <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="text-xl sm:text-2xl font-black text-amber-400 tracking-normal">
                      {activeProduct.price.toLocaleString('fa-IR')}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-amber-300">
                      تومان
                    </span>
                  </div>
                </div>

                {/* Row 2: Desktop 3 Action Buttons strictly in ONE single row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5 w-full">
                  {/* 1. View Details Button */}
                  <button
                    onClick={() => onViewDetails(activeProduct)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-slate-200 hover:text-white text-xs sm:text-[13px] font-bold border border-purple-800/60 transition-all shadow-sm active:scale-95 whitespace-nowrap overflow-hidden"
                    title="مشاهده جزئیات کامل"
                  >
                    <Eye className="w-4 h-4 text-purple-300 shrink-0" />
                    <span className="truncate">مشاهده جزئیات</span>
                  </button>

                  {/* 2. Add to Cart Button */}
                  <button
                    id="incredible-add-cart-btn"
                    onClick={() => onAddToCart(activeProduct)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-purple-900/90 hover:bg-purple-800 border border-purple-700/80 text-purple-100 hover:text-white text-xs sm:text-[13px] font-bold transition-all shadow-sm active:scale-95 whitespace-nowrap overflow-hidden"
                    title="افزودن به سبد خرید"
                  >
                    <ShoppingBag className="w-4 h-4 text-purple-300 shrink-0" />
                    <span className="truncate">افزودن به سبد</span>
                  </button>

                  {/* 3. Instant Buy Button */}
                  <button
                    id="incredible-buy-btn"
                    onClick={() => {
                      if (onInstantBuy) onInstantBuy(activeProduct);
                      else onAddToCart(activeProduct);
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 text-xs sm:text-[13px] font-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-95 transition-all whitespace-nowrap overflow-hidden"
                    title="خرید سریع و مستقیم"
                  >
                    <Zap className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
                    <span className="truncate">خرید فوری شگفت‌انگیز</span>
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

