import React, { useState } from 'react';
import { X, Sparkles, ShoppingBag, Zap, Check, Clock } from 'lucide-react';
import { Product } from '../types';

const formatPrice = (num?: number) => {
  return (num || 0).toLocaleString('fa-IR') + ' تومان';
};

interface SubscriptionDurationModalProps {
  product: Product;
  initialIsInstantBuy?: boolean;
  onClose: () => void;
  onConfirm: (product: Product, subscriptionDays: number, isInstantBuy: boolean) => void;
}

export const SubscriptionDurationModal: React.FC<SubscriptionDurationModalProps> = ({
  product,
  initialIsInstantBuy = false,
  onClose,
  onConfirm,
}) => {
  if (!product) return null;

  const [subscriptionDays, setSubscriptionDays] = useState<number>(30); // Default 1 month (30 days)
  const [isInstantBuyAction, setIsInstantBuyAction] = useState<boolean>(initialIsInstantBuy);

  const pricePerDay = product.pricePerDay || 250000;
  const totalPrice = subscriptionDays * pricePerDay;

  const handleConfirmAction = (instant: boolean) => {
    onConfirm(product, subscriptionDays, instant);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border-2 border-amber-400/80 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl shadow-amber-500/20 text-white flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#210e40] via-[#2d1259] to-[#1a0b33] p-4 sm:p-5 border-b border-amber-400/40 flex items-center justify-between relative">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shrink-0">
              <Sparkles className="w-5 h-5 fill-slate-950" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-amber-300 leading-tight">
                انتخاب مدت زمان اشتراک
              </h3>
              <p className="text-[11px] text-purple-200/90 font-medium truncate max-w-[240px] sm:max-w-xs mt-0.5">
                {product.title || 'محصول جهش‌کالا'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-[#130b24] to-[#0c0717]">
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-3 flex items-center justify-between text-xs">
            <span className="text-slate-200 font-bold flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              تعرفه پایه روزانه اشتراک:
            </span>
            <span className="font-black text-amber-300 text-sm font-mono bg-black/40 px-2.5 py-0.5 rounded-lg border border-amber-400/30">
              {formatPrice(pricePerDay)} / روز
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            لطفاً بازه زمانی مورد نظر برای فعال‌سازی اشتراک این نرم‌افزار را انتخاب نمایید (هزینه بر اساس تعداد روزهای انتخابی محاسبه می‌شود):
          </p>

          {/* Preset Days Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              { label: '۱ روز (آزمایشی)', days: 1 },
              { label: '۷ روز (۱ هفته)', days: 7 },
              { label: '۳۰ روز (۱ ماه)', days: 30, popular: true },
              { label: '۹۰ روز (۳ ماه)', days: 90 },
              { label: '۱۸۰ روز (۶ ماه)', days: 180 },
              { label: '۳۶۵ روز (۱ سال)', days: 365, bestValue: true },
            ].map((plan) => {
              const isSelected = subscriptionDays === plan.days;
              const planPrice = plan.days * pricePerDay;
              return (
                <button
                  key={plan.days}
                  type="button"
                  onClick={() => setSubscriptionDays(plan.days)}
                  className={`relative p-3 rounded-2xl border text-right transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500/25 via-purple-600/40 to-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/20 ring-2 ring-amber-400'
                      : 'bg-black/40 border-purple-900/60 text-slate-300 hover:border-purple-600 hover:bg-purple-950/40'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-2.5 left-2 bg-purple-600 text-[9px] text-white font-black px-2 py-0.5 rounded-full shadow-md">
                      محبوب‌ترین
                    </span>
                  )}
                  {plan.bestValue && (
                    <span className="absolute -top-2.5 left-2 bg-amber-400 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full shadow-md">
                      بهترین ارزش
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black">{plan.label}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </div>
                  <div className="text-xs text-amber-300 font-black mt-2 font-mono">
                    {formatPrice(planPrice)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Custom Days Input */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-black/50 p-3.5 rounded-2xl border border-purple-900/60">
            <span className="text-xs font-bold text-slate-300">یا تعداد روزهای دلخواه:</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                max={1000}
                value={subscriptionDays}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val) && val >= 1) {
                    setSubscriptionDays(val);
                  } else if (e.target.value === '') {
                    setSubscriptionDays(1);
                  }
                }}
                className="w-24 bg-[#0d071a] border border-amber-400 rounded-xl px-3 py-1.5 text-center text-sm font-black text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <span className="text-xs text-slate-400 font-bold">روز</span>
            </div>
          </div>

          {/* Total Summary */}
          <div className="bg-gradient-to-r from-purple-950/80 via-amber-950/30 to-purple-950/80 p-4 rounded-2xl border border-amber-400/50 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-300 block font-medium">مجموع هزینه اشتراک ({subscriptionDays} روز):</span>
              <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-xl">
              فعال‌سازی آنی
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-purple-900/60 flex items-center justify-end gap-2 sm:gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl text-xs font-bold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap active:scale-95"
          >
            انصراف
          </button>

          <button
            type="button"
            onClick={() => handleConfirmAction(false)}
            className="h-10 sm:h-11 flex items-center justify-center gap-1.5 sm:gap-2 bg-purple-900/80 hover:bg-purple-800 border border-purple-500/60 text-purple-100 font-bold px-3 sm:px-4 rounded-xl text-xs transition-all cursor-pointer shadow-md whitespace-nowrap active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-purple-300 shrink-0" />
            <span>افزودن به سبد</span>
          </button>

          <button
            type="button"
            onClick={() => handleConfirmAction(true)}
            className="h-10 sm:h-11 flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-4 sm:px-5 rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-amber-500/20 active:scale-95 whitespace-nowrap"
          >
            <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
            <span>خرید فوری</span>
          </button>
        </div>
      </div>
    </div>
  );
};
