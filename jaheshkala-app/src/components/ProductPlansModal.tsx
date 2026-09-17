import React, { useState } from 'react';
import { X, Sparkles, Check, ShoppingBag, Zap, ShieldCheck, Star, ListChecks, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { Product, SubscriptionPlan } from '../types';

const formatPrice = (num?: number) => {
  return (num || 0).toLocaleString('fa-IR') + ' تومان';
};

interface ProductPlansModalProps {
  product: Product;
  initialIsInstantBuy?: boolean;
  onClose: () => void;
  onConfirm?: (product: Product, plan: SubscriptionPlan, isInstantBuy: boolean) => void;
  onConfirmPlan?: (product: Product, plan: SubscriptionPlan, isInstantBuy: boolean) => void;
}

export const ProductPlansModal: React.FC<ProductPlansModalProps> = ({
  product,
  initialIsInstantBuy = false,
  onClose,
  onConfirm,
  onConfirmPlan,
}) => {
  if (!product) return null;

  const plans = product.subscriptionPlans || [];
  // Default to the popular plan or first plan
  const defaultPlan = plans.find((p) => p.isPopular) || plans[0] || null;
  const [selectedPlanId, setSelectedPlanId] = useState<string>(defaultPlan?.id || '');
  const [showFullSpecs, setShowFullSpecs] = useState<boolean>(true);

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || defaultPlan;

  const handleConfirmAction = (instant: boolean) => {
    if (!selectedPlan) return;
    if (onConfirmPlan) {
      onConfirmPlan(product, selectedPlan, instant);
    } else if (onConfirm) {
      onConfirm(product, selectedPlan, instant);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative bg-[#0b0618] border border-amber-500/40 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl shadow-amber-500/10 text-white flex flex-col max-h-[94vh] animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Section */}
        <div className="relative pt-6 pb-4 px-4 sm:px-8 text-center border-b border-purple-900/40 bg-gradient-to-b from-[#190d36] via-[#120928] to-[#0b0618]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            title="بستن"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-black mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>تعرفه‌های ویژه</span>
          </div>

          {/* Big Display Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400 tracking-tight leading-tight">
            {product.customPlansTitle || product.title || 'تعرفه‌های نرم‌افزار جهش'}
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto mt-1.5">
            {product.customPlansSubtitle || 'پلن مورد نظر خود را انتخاب کرده و از امکانات اختصاصی بهره‌مند شوید.'}
          </p>
        </div>

        {/* Modal Body - Pricing Cards Grid */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {plans.map((plan) => {
              const isSelected = selectedPlan?.id === plan.id;
              const isGold = Boolean(plan.isPopular);

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`group relative rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                    isGold
                      ? 'bg-gradient-to-b from-amber-400 via-[#1b1133] to-[#120824] border-2 border-amber-400 shadow-xl shadow-amber-500/20 md:-translate-y-2'
                      : 'bg-[#140c28] border border-purple-800/60 hover:border-purple-500/80 shadow-lg'
                  } ${
                    isSelected
                      ? 'ring-4 ring-amber-400/80 scale-[1.02] md:scale-105'
                      : 'hover:border-amber-400/60'
                  }`}
                >
                  {/* Card Header Top */}
                  {isGold ? (
                    /* Golden Card Header (Matches middle yellow card from user photo) */
                    <div className="bg-amber-400 text-slate-950 p-5 sm:p-6 text-center rounded-t-2xl relative shadow-inner">
                      {plan.badge && (
                        <div className="inline-block bg-slate-950/20 text-slate-950 font-black text-[11px] px-3 py-0.5 rounded-full mb-2">
                          {plan.badge}
                        </div>
                      )}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-1">
                        {plan.name}
                      </h3>

                      {plan.originalPrice && (
                        <div className="text-slate-800 line-through text-xs sm:text-sm font-mono opacity-80">
                          {formatPrice(plan.originalPrice)}
                        </div>
                      )}

                      <div className="flex items-baseline justify-center gap-1.5 my-2">
                        <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-950">
                          {(plan.price || 0).toLocaleString('fa-IR')}
                        </span>
                        <span className="text-xs font-bold text-slate-900">تومان</span>
                      </div>

                      {plan.shortDescription && (
                        <div className="text-[11px] font-bold text-slate-900 bg-black/10 rounded-lg py-1 px-2.5 inline-block">
                          {plan.shortDescription}
                        </div>
                      )}

                      <div className="w-16 h-1 bg-slate-950/30 rounded-full mx-auto mt-3"></div>
                    </div>
                  ) : (
                    /* Regular Sleek Dark Card Header */
                    <div className="p-5 sm:p-6 text-center border-b border-purple-900/50 bg-[#190f33]">
                      {plan.badge && (
                        <span className="inline-block bg-purple-600/30 border border-purple-500/40 text-purple-200 font-bold text-[10px] px-2.5 py-0.5 rounded-full mb-2">
                          {plan.badge}
                        </span>
                      )}

                      <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                        {plan.name}
                      </h3>

                      {plan.originalPrice && (
                        <div className="text-slate-400 line-through text-xs font-mono">
                          {formatPrice(plan.originalPrice)}
                        </div>
                      )}

                      <div className="flex items-baseline justify-center gap-1.5 my-1.5">
                        <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-emerald-400">
                          {(plan.price || 0).toLocaleString('fa-IR')}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">تومان</span>
                      </div>

                      {plan.durationLabel && (
                        <span className="text-[11px] text-amber-300/90 font-medium block">
                          {plan.durationLabel}
                        </span>
                      )}

                      <div className="w-12 h-0.5 bg-amber-400/40 rounded-full mx-auto mt-3"></div>
                    </div>
                  )}

                  {/* Card Body - Features Bullet List */}
                  <div className="p-5 sm:p-6 flex-1 space-y-3 bg-[#110724]">
                    <div className="text-xs font-bold text-slate-400 pb-1 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>امکانات و ویژگی‌های این تعرفه:</span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-200">
                      {(plan.features || []).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isGold
                              ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                              : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span className="font-medium text-slate-100">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer / Select Indicator */}
                  <div className="p-4 bg-[#0d051c] border-t border-purple-900/40">
                    <button
                      type="button"
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/25 ring-2 ring-amber-300'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>پلن انتخابی شما</span>
                        </>
                      ) : (
                        <span>انتخاب این تعرفه</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dedicated Compact Section: Full Specifications & Perks of Selected Package */}
          {selectedPlan && (
            <div className="mt-5 bg-[#120726] border border-amber-400/40 rounded-3xl p-4 sm:p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between border-b border-purple-900/60 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <ListChecks className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-amber-300 flex items-center gap-1.5">
                      <span>مشخصات و جزئیات کامل تعرفه «{selectedPlan.name}»:</span>
                      {selectedPlan.badge && (
                        <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-full">
                          {selectedPlan.badge}
                        </span>
                      )}
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      لیست جامع تمامی امکانات و قابلیت‌های فعال در این پلن
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowFullSpecs(!showFullSpecs)}
                  className="text-xs text-purple-300 hover:text-amber-300 font-bold flex items-center gap-1 transition-colors cursor-pointer px-3 py-1.5 rounded-xl bg-purple-950/70 border border-purple-800/60"
                >
                  <span>{showFullSpecs ? 'بستن مشخصات' : 'مشاهده کامل مشخصات'}</span>
                  {showFullSpecs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {showFullSpecs && (
                <div className="space-y-3 pt-1 animate-in fade-in">
                  {selectedPlan.shortDescription && (
                    <div className="text-xs text-slate-200 bg-purple-950/40 border border-purple-900/40 p-3 rounded-2xl leading-relaxed">
                      <strong className="text-amber-300 font-bold">معرفی پکیج: </strong>
                      {selectedPlan.shortDescription}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {(selectedPlan.features || []).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-200 bg-purple-950/30 border border-purple-800/30 p-2.5 rounded-xl"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-purple-900/40 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      <span>مدت اعتبار خدمات: <strong className="text-amber-300">{selectedPlan.durationLabel || `${selectedPlan.durationDays} روزه`}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>مبلغ قابل پرداخت: <strong className="text-emerald-400 font-mono text-sm font-black">{formatPrice(selectedPlan.price)}</strong></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky Summary & Actions */}
        {selectedPlan && (
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#170a2f] via-[#241047] to-[#170a2f] border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            {/* Selected Plan Details Pill */}
            <div className="flex items-center gap-3 text-right w-full sm:w-auto">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shrink-0">
                <Star className="w-5 h-5 fill-slate-950" />
              </div>
              <div>
                <span className="text-[11px] text-slate-300 block font-medium">تعرفه انتخاب‌شده:</span>
                <span className="text-sm sm:text-base font-black text-amber-300">
                  {selectedPlan.name} • {formatPrice(selectedPlan.price)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                انصراف
              </button>

              <button
                type="button"
                onClick={() => handleConfirmAction(false)}
                className="flex items-center gap-2 bg-purple-900/80 hover:bg-purple-800 border border-purple-500/60 text-purple-100 font-bold px-4 sm:px-5 py-2.5 rounded-xl text-xs transition-all cursor-pointer shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-purple-300" />
                <span>افزودن به سبد خرید</span>
              </button>

              <button
                type="button"
                onClick={() => handleConfirmAction(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black px-5 sm:px-6 py-2.5 rounded-xl text-xs transition-all cursor-pointer shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95"
              >
                <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>خرید فوری و پرداخت</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
