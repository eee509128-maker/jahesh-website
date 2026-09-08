import React, { useState, useEffect } from 'react';
import {
  Sparkles, ShoppingBag, Eye, CheckCircle2, ChevronLeft, ChevronRight,
  Percent, ShieldCheck, Truck, Star
} from 'lucide-react';
import { Product } from '../types';

interface DigikalaIncredibleOfferProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const DigikalaIncredibleOffer: React.FC<DigikalaIncredibleOfferProps> = ({
  products,
  onAddToCart,
  onViewDetails,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter products that have discounts or badges
  const incredibleProducts = products.filter(
    (p) => (p.discountPercent && p.discountPercent > 0) || p.isPopular || p.isGolden
  );

  const activeProduct = incredibleProducts[currentIndex] || products[0];

  // Digikala Live Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (n: number) => n.toString().padStart(2, '0');

  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Right Header Block: "پیشنهاد شگفت‌انگیز" Title & Countdown Clock */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col items-center justify-between lg:justify-center text-center p-3 sm:p-4 rounded-2xl bg-black/40 border border-white/10 gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-amber-400">
              <Percent className="w-6 h-6 sm:w-8 sm:h-8 rotate-12" />
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 animate-pulse" />
            </div>

            <div className="text-right lg:text-center">
              <h3 className="text-sm sm:text-2xl font-black tracking-tight" style={{ color: '#ffffff' }}>
                پیشنهاد
              </h3>
              <h3 className="text-base sm:text-3xl font-black text-amber-400 tracking-wider">
                شگفت‌انگیز
              </h3>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="space-y-1 pt-0 lg:pt-1 text-center">
            <span className="text-[9px] sm:text-[10px] text-slate-200 block">زمان باقی‌مانده:</span>
            <div className="flex items-center justify-center gap-1 font-mono text-[11px] sm:text-xs font-black" dir="ltr">
              <span className="w-7 sm:w-8 py-1 sm:py-1.5 rounded-lg bg-black/80 text-white border border-white/20" style={{ color: '#ffffff' }} title="ساعت">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-amber-400 font-bold">:</span>
              <span className="w-7 sm:w-8 py-1 sm:py-1.5 rounded-lg bg-black/80 text-white border border-white/20" style={{ color: '#ffffff' }} title="دقیقه">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-amber-400 font-bold">:</span>
              <span className="w-7 sm:w-8 py-1 sm:py-1.5 rounded-lg bg-black/80 text-white border border-white/20" style={{ color: '#ffffff' }} title="ثانیه">
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
          </div>

          {/* Next/Prev Incredible Item Controls */}
          {incredibleProducts.length > 1 && (
            <div className="flex items-center gap-1.5 pt-0 lg:pt-2">
              <button
                onClick={handlePrev}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                title="کالای قبلی"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-mono">
                {currentIndex + 1} / {incredibleProducts.length}
              </span>
              <button
                onClick={handleNext}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                title="کالای بعدی"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Left Side: Product Showcase Card */}
        <div className="lg:col-span-9 bg-[#110826] border border-purple-800/60 rounded-2xl p-4 sm:p-6 shadow-xl relative">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            
            {/* Product Image */}
            <div className="sm:col-span-4 relative rounded-xl overflow-hidden bg-purple-950/40 border border-purple-800/40 h-48 sm:h-56">
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                className="w-full h-full object-cover"
              />
              {activeProduct.discountPercent && (
                <div className="absolute top-2.5 right-2.5">
                  <span className="bg-rose-600 text-white text-xs font-black px-2.5 py-1 rounded-full shadow-md">
                    {activeProduct.discountPercent}% تخفیف
                  </span>
                </div>
              )}
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

              {/* Price & Action */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-purple-900/40">
                <div>
                  {activeProduct.originalPrice && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500 line-through">
                        {formatPrice(activeProduct.originalPrice)}
                      </span>
                      <span className="bg-rose-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                        {activeProduct.discountPercent}%
                      </span>
                    </div>
                  )}
                  <div className="text-xl sm:text-2xl font-black text-amber-400 mt-0.5">
                    {formatPrice(activeProduct.price)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewDetails(activeProduct)}
                    className="px-3.5 py-2.5 rounded-xl bg-purple-950/70 hover:bg-purple-900 text-slate-200 text-xs font-semibold border border-purple-800/40 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 inline mr-1" />
                    <span>مشاهده جزئیات</span>
                  </button>

                  <button
                    id="incredible-buy-btn"
                    onClick={() => onAddToCart(activeProduct)}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 text-xs font-black shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4 text-slate-950" />
                    <span>خرید شگفت‌انگیز</span>
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
