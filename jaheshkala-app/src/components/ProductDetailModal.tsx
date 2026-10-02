import React, { useState, useEffect } from 'react';
import {
  X, Sparkles, CheckCircle2, Globe, ShieldCheck,
  ShoppingBag, Gift, Truck, RotateCcw, Headphones, Star, Ticket, Images, Zap, CreditCard, Check,
  ChevronDown, ChevronUp, Info, ListChecks, Package, Download
} from 'lucide-react';
import { Product, User, SubscriptionPlan } from '../types';
import { getFallbackProductImage } from '../lib/imageUtils';
import { getSafeDownloadUrl } from '../lib/downloadUtils';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, requestedDomain?: string, subscriptionDays?: number, selectedPlan?: SubscriptionPlan) => void;
  onInstantBuy?: (product: Product, requestedDomain?: string, subscriptionDays?: number, selectedPlan?: SubscriptionPlan) => void;
  onOpenAmlakApp?: () => void;
  currentUser?: User | null;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onInstantBuy,
  onOpenAmlakApp,
  currentUser,
}) => {
  const [preferredDomain, setPreferredDomain] = useState('');
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product?.colors && product.colors.length > 0 ? product.colors[0] : null
  );
  const [activeImage, setActiveImage] = useState<string>(product?.image || '');
  const [subscriptionDays, setSubscriptionDays] = useState<number>(30); // Default 1 month
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [showPlanDetails, setShowPlanDetails] = useState<boolean>(true);

  const isAmlakOrSub = Boolean(product?.isSubscription || product?.id === 'pkg-amlak-jahesh' || product?.category === 'اشتراک نرم‌افزار');
  const pricePerDay = product?.pricePerDay || 250000;
  const hasCustomPlans = Boolean(product?.hasCustomPlans && product?.subscriptionPlans && product.subscriptionPlans.length > 0);
  const currentPlan = hasCustomPlans ? (product?.subscriptionPlans?.find((p) => p.id === selectedPlanId) || product?.subscriptionPlans?.[0]) : null;

  useEffect(() => {
    if (product) {
      setActiveImage(product.image || (product.gallery && product.gallery[0]) || '');
      setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0] : null);
      if (product.isSubscription || product.id === 'pkg-amlak-jahesh' || product.category === 'اشتراک نرم‌افزار') {
        setSubscriptionDays(30);
      }
      if (product.hasCustomPlans && product.subscriptionPlans && product.subscriptionPlans.length > 0) {
        const defaultPlan = product.subscriptionPlans.find((p) => p.isPopular) || product.subscriptionPlans[0];
        setSelectedPlanId(defaultPlan.id);
      }
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const downloadUrl = getSafeDownloadUrl(product.downloadUrl);
  const allImages = [product.image, ...(product.gallery || [])].filter(
    (url, idx, arr) => url && typeof url === 'string' && url.trim() !== '' && arr.indexOf(url) === idx
  );

  // Dynamic calculated price for display
  const calculatedPrice = hasCustomPlans && currentPlan
    ? currentPlan.price
    : isAmlakOrSub
    ? pricePerDay
    : product.price;

  const calculatedOriginalPrice = hasCustomPlans && currentPlan
    ? currentPlan.originalPrice
    : isAmlakOrSub
    ? product.originalPrice || (pricePerDay * 1.4)
    : product.originalPrice;

  const formatPrice = (num?: number) => {
    if (typeof num !== 'number' || isNaN(num)) return '۰ تومان';
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const handleAdd = () => {
    onAddToCart(product, preferredDomain, undefined, currentPlan || undefined);
    onClose();
  };

  const handleInstantBuy = () => {
    if (onInstantBuy) {
      onInstantBuy(product, preferredDomain, undefined, currentPlan || undefined);
    } else {
      onAddToCart(product, preferredDomain, undefined, currentPlan || undefined);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in cursor-default"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#110b28] border border-purple-800/70 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-3 sm:my-8 max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-900/50 bg-[#150d32]">
          <div className="flex items-center gap-2">
            {product.badge && (
              <span className="bg-amber-400 text-slate-950 text-[11px] sm:text-xs font-black px-2.5 py-0.5 sm:py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {product.badge}
              </span>
            )}
            <span className="text-xs text-purple-300 font-semibold">{product.category}</span>
            {product.brand && (
              <span className="text-xs text-slate-400 hidden xs:inline">| برند: <strong className="text-white">{product.brand}</strong></span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-100 hover:bg-rose-500 hover:text-white text-purple-900 dark:bg-purple-950 dark:hover:bg-rose-600 dark:text-slate-300 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer border border-purple-300 dark:border-purple-800 shadow-sm"
            title="بستن جزئیات کالا"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-6">
          
          {/* Main Title & Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Image & Main stats */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-purple-800/50 h-64 sm:h-72 bg-purple-950/40 group">
                {allImages.length > 0 ? (
                  <img
                    src={activeImage || allImages[0]}
                    alt={product.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getFallbackProductImage(product.title, product.category);
                    }}
                    className="w-full h-full object-contain p-2 bg-black/40 transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-purple-950/60 via-purple-900/30 to-indigo-950/60">
                    <Package className="w-16 h-16 text-purple-400/50 mb-2" />
                    <span className="text-sm font-bold text-purple-200">{product.category}</span>
                    <span className="text-xs text-slate-400 mt-1">جهش‌کالا</span>
                  </div>
                )}
                <div className="absolute bottom-2 right-2 left-2 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-bold text-amber-300 bg-black/75 px-2.5 py-1 rounded-lg border border-white/10">
                    {product.deliveryDays}
                  </span>
                  {allImages.length > 1 && (
                    <span className="text-[10px] font-bold text-purple-200 bg-purple-950/80 px-2 py-0.5 rounded-md border border-purple-700/50 flex items-center gap-1">
                      <Images className="w-3 h-3 text-amber-400" />
                      {allImages.length} عکس
                    </span>
                  )}
                </div>
              </div>

              {/* Digikala Product Image Gallery Thumbnails */}
              {allImages.length > 1 && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-1 scrollbar-none">
                    {allImages.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImage(imgUrl)}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-black/50 p-0.5 ${
                          activeImage === imgUrl
                            ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105 shadow-md shadow-amber-400/20'
                            : 'border-purple-900/60 opacity-60 hover:opacity-100 hover:border-purple-500'
                        }`}
                        title={`عکس شماره ${idx + 1}`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${product.title} - عکس ${idx + 1}`}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = getFallbackProductImage(product.title, product.category);
                          }}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 text-right">
                    برای مشاهده بزرگ‌تر، روی هر عکس گالری کلیک کنید
                  </p>
                </div>
              )}

              {/* Digikala Trust Badges */}
              <div className="bg-[#170f36] border border-purple-900/40 rounded-2xl p-3.5 grid grid-cols-2 gap-2.5 text-[11px] text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>ضمانت اصالت کالا</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ارسال سریع سراسری</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>۷ روز ضمانت بازگشت</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>پشتیبانی ۲۴ ساعته</span>
                </div>
              </div>

              {/* Color Selection if product has colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="bg-[#180f38] border border-purple-900/40 rounded-2xl p-4 space-y-2">
                  <label className="text-xs font-bold text-slate-200">
                    انتخاب رنگ محصول:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                          selectedColor === color
                            ? 'bg-purple-700 text-white border-purple-400 font-bold'
                            : 'bg-black/40 text-slate-300 border-purple-900 hover:border-purple-700'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Launch Button for Amlak / Online SaaS - STRICTLY FOR ADMIN ONLY */}
              {isAmlakOrSub && onOpenAmlakApp && (currentUser?.role === 'admin' || currentUser?.role === 'operator') && (
                <div className="bg-gradient-to-br from-[#1b103c] to-[#12082b] border border-amber-500/35 rounded-2xl p-4 space-y-3 shadow-xl relative overflow-hidden">
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500" />
                  
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black text-white">
                        محیط تست زنده سامانه (ویژه مدیر)
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-400/15 border border-amber-400/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                      دسترسی VIP
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed text-right">
                    شما با حساب مدیریت وارد شده‌اید. می‌توانید نرم‌افزار را پیش از هر اقدامی به‌صورت کامل و زنده اجرا و ارزیابی کنید.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenAmlakApp();
                    }}
                    className="w-full h-11 sm:h-12 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-black shadow-lg shadow-emerald-950/60 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>ورود آنلاین و اجرای زنده سامانه</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 border-t border-purple-900/40 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>این دکمه فقط برای حساب مدیریت فعال است و مشتریان عادی آن را نمی‌بینند</span>
                  </div>
                </div>
              )}

              {/* Major Bonuses Card if applicable */}
              {product.includedGifts && product.includedGifts.length > 0 && (
                <div className="bg-gradient-to-br from-purple-950/60 to-indigo-950/60 border border-purple-800/50 rounded-2xl p-4 space-y-3">
                  <h4 className="text-xs font-black text-amber-300 flex items-center gap-2">
                    <Gift className="w-4 h-4 text-amber-400" />
                    هدایا و امتیازات ویژه این کالا:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {product.includedGifts.map((gift, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{gift}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Free Domain Input if applicable for web package */}
              {product.domainIncluded && (
                <div className="bg-[#180f38] border border-amber-500/40 rounded-2xl p-4 space-y-2">
                  <label className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-amber-400" />
                    نام دامنه پیشنهادی شما (هدیه رایگان):
                  </label>
                  <p className="text-[11px] text-slate-400">
                    نام برند یا سایت مدنظرتان را وارد کنید (مثال: mybrand.ir):
                  </p>
                  <input
                    type="text"
                    dir="ltr"
                    placeholder="example.ir"
                    value={preferredDomain}
                    onChange={(e) => setPreferredDomain(e.target.value)}
                    className="w-full bg-black/50 border border-purple-800 rounded-xl px-3 py-2 text-sm text-white font-mono placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}
            </div>

            {/* Details and Features */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-xs text-slate-400">({product.reviewsCount} نظر خریداران)</span>
                  {product.warranty && (
                    <span className="text-xs text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-lg border border-purple-800/40">
                      {product.warranty}
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white leading-snug mb-3">
                  {product.title}
                </h2>

                {/* Innovative Guild Solution & Pain Point Card - Beautifully Crafted & Legible */}
                {((product as any).painPointSolved || product.guild || (product as any).targetGuild) && (
                  <div className="mb-5 bg-gradient-to-br from-[#1c0f38] via-[#140a2c] to-[#0c051f] border border-purple-500/40 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-xl text-right">
                    
                    {/* Header Row: Title & Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-800/40 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
                          <Sparkles className="w-4 h-4 text-amber-300" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-black text-white">
                            طرح و راهکار نوآورانه جهش
                          </h4>
                          <span className="text-[11px] text-purple-300">
                            توسعه‌یافته بر اساس نیازمندی‌ها و چالش‌های بازار کار
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>پاسخ اختصاصی به چالش صنفی</span>
                      </span>
                    </div>

                    {/* Dedicated Guild Target Badge (Clean, non-breaking, generous padding) */}
                    {(product.guild || (product as any).targetGuild) && (
                      <div className="flex items-center gap-2 p-2.5 bg-amber-950/30 border border-amber-500/30 rounded-xl">
                        <span className="text-[11px] font-bold text-amber-400 whitespace-nowrap">
                          🏢 صنف تحت پوشش:
                        </span>
                        <span className="text-xs sm:text-sm font-black text-amber-200">
                          {product.guild || (product as any).targetGuild}
                        </span>
                      </div>
                    )}

                    {/* Pain Point Section */}
                    {(product as any).painPointSolved && (
                      <div className="space-y-1.5 bg-black/40 p-3.5 rounded-xl border border-rose-500/25">
                        <div className="flex items-center gap-1.5 text-xs font-black text-rose-300">
                          <Info className="w-4 h-4 text-rose-400 shrink-0" />
                          <span>چالش و معضل اصلی فعالان این صنف قبل از این نوآوری:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pr-5">
                          {(product as any).painPointSolved}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line bg-purple-950/20 p-4 rounded-2xl border border-purple-900/30">
                  {product.fullDescription}
                </p>

                {downloadUrl && (
                  <div className="mt-3 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/70 via-teal-950/50 to-purple-950/50 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-2.5 text-right">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-black text-emerald-200">نسخه نصب اپلیکیشن آماده دانلود است</span>
                        <span className="block mt-1 text-[10px] leading-relaxed text-slate-300">
                          {product.isAiAppProduct
                            ? 'لینک دانلود برای همه بازدیدکنندگان در دسترس است؛ اطلاعات ورود و لایسنس پس از خرید در سفارش شما نمایش داده می‌شود.'
                            : 'لینک دانلود این فایل برای همه بازدیدکنندگان عمومی است.'}
                        </span>
                      </div>
                    </div>
                    <a
                      href={downloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 px-4 py-2.5 text-xs font-black text-slate-950 shadow-lg shadow-emerald-950/40 transition-all active:scale-95 no-underline"
                    >
                      <Download className="w-4 h-4" />
                      <span>دانلود اپلیکیشن</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Custom Multi-Tier Plans Selection (if product has custom plans) */}
              {hasCustomPlans && product.subscriptionPlans && product.subscriptionPlans.length > 0 && (
                <div className="space-y-3.5 bg-gradient-to-br from-[#1c0e3a] via-[#150a2c] to-[#0f0722] p-4 sm:p-5 rounded-2xl sm:rounded-3xl border-2 border-amber-400/60 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-black text-amber-300">
                          {product.customPlansTitle || 'انتخاب تعرفه و پکیج اشتراک:'}
                        </h3>
                        {product.customPlansSubtitle && (
                          <p className="text-[11px] text-slate-300 font-medium">{product.customPlansSubtitle}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full">
                      {product.subscriptionPlans.length} تعرفه موجود
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {product.subscriptionPlans.map((plan) => {
                      const isSelected = plan.id === (currentPlan?.id || selectedPlanId);
                      return (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`relative p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'bg-gradient-to-b from-amber-950/40 via-purple-950/80 to-[#120826] border-amber-400 ring-2 ring-amber-400/40 shadow-xl scale-[1.02]'
                              : 'bg-black/40 border-purple-900/60 hover:border-purple-600 opacity-85 hover:opacity-100'
                          }`}
                        >
                          {plan.badge && (
                            <span className="absolute -top-2.5 left-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                              {plan.badge}
                            </span>
                          )}

                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-black text-white">{plan.name}</span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-purple-600'}`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>

                            {plan.shortDescription && (
                              <p className="text-[10px] text-slate-300 line-clamp-1">{plan.shortDescription}</p>
                            )}

                            {plan.features && plan.features.length > 0 && (
                              <ul className="space-y-1 text-[10px] text-slate-300 pt-1 border-t border-purple-900/40">
                                {plan.features.slice(0, 3).map((f, fi) => (
                                  <li key={fi} className="flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                    <span className="truncate">{f}</span>
                                  </li>
                                ))}
                                {plan.features.length > 3 && (
                                  <li className="text-[9px] text-amber-300 font-bold">+{plan.features.length - 3} مورد دیگر...</li>
                                )}
                              </ul>
                            )}
                          </div>

                          <div className="pt-2.5 mt-2 border-t border-purple-900/40 text-left">
                            <span className="text-xs font-black text-amber-300 font-mono block">
                              {formatPrice(plan.price)}
                            </span>
                            {plan.durationLabel && (
                              <span className="text-[9px] text-purple-300 block">{plan.durationLabel}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Dedicated Compact Section: Specifications & Details of Selected Package */}
                  {currentPlan && (
                    <div className="mt-3 bg-black/50 border border-amber-400/40 rounded-2xl p-3.5 sm:p-4 space-y-3 animate-in fade-in transition-all">
                      <div className="flex items-center justify-between border-b border-purple-900/50 pb-2.5">
                        <div className="flex items-center gap-2">
                          <ListChecks className="w-4 h-4 text-amber-400" />
                          <h4 className="text-xs sm:text-sm font-black text-amber-300">
                            مشخصات و امکانات کامل تعرفه «{currentPlan.name}»:
                          </h4>
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowPlanDetails(!showPlanDetails)}
                          className="text-[11px] text-purple-300 hover:text-amber-300 font-bold flex items-center gap-1 transition-colors cursor-pointer px-2 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40"
                        >
                          <span>{showPlanDetails ? 'بستن مشخصات' : 'مشاهده بیشتر'}</span>
                          {showPlanDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {showPlanDetails && (
                        <div className="space-y-2.5 pt-1">
                          {currentPlan.shortDescription && (
                            <p className="text-xs text-slate-300 leading-relaxed bg-purple-950/30 p-2.5 rounded-xl border border-purple-900/30">
                              <span className="font-bold text-amber-300">توضیحات پکیج: </span>
                              {currentPlan.shortDescription}
                            </p>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {(currentPlan.features || []).map((feat, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs text-slate-200 bg-purple-950/40 border border-purple-800/30 p-2.5 rounded-xl"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feat}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-purple-900/40 text-[11px] text-slate-400">
                            <span>مدت زمان خدمات: <strong className="text-amber-300">{currentPlan.durationLabel || `${currentPlan.durationDays} روز`}</strong></span>
                            <span>قیمت این تعرفه: <strong className="text-emerald-400 font-mono text-xs">{formatPrice(currentPlan.price)}</strong></span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Full Specs checklist */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-purple-200">
                  مشخصات فنی و ویژگی‌های محصول:
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {(product.features || []).map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-purple-950/20 border border-purple-900/20"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* اعلان صدور خودکار نام کاربری و رمز پس از خرید */}
              {isAmlakOrSub && (
                <div className="bg-gradient-to-r from-amber-500/10 via-purple-900/30 to-amber-500/10 border border-amber-500/30 rounded-2xl p-3.5 flex items-center gap-3 text-right">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <span className="font-bold text-amber-300 block">
                      صدور آنی اکانت و رمز اختصاصی پس از خرید
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      بلافاصله پس از ثبت سفارش، نام کاربری و پسورد منحصربه‌فرد شما در فاکتور صادر می‌شود و می‌توانید سامانه را در تب جدید با حساب اختصاصی خود اجرا کنید.
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Modal Bottom Footer with Price & Add to Cart */}
        <div className="px-6 py-4 bg-white dark:bg-[#140d30] border-t border-purple-200 dark:border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <div className="text-right">
              <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                {isAmlakOrSub ? 'تعرفه روزانه اشتراک:' : 'قیمت نهایی:'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-purple-700 dark:text-amber-300">
                  {formatPrice(calculatedPrice)}
                </span>
                {calculatedOriginalPrice && calculatedOriginalPrice > calculatedPrice && (
                  <span className="text-xs text-slate-400 dark:text-slate-500 line-through font-medium">
                    {formatPrice(calculatedOriginalPrice)}
                  </span>
                )}
              </div>
            </div>
            {product.discountPercent && (
              <span className="text-xs font-black px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-600/30 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-600/40 whitespace-nowrap shrink-0 leading-none inline-flex items-center justify-center">
                {product.discountPercent}% تخفیف
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="h-10 sm:h-11 px-3 sm:px-4 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:bg-purple-950/60 dark:hover:bg-purple-900/60 border border-slate-200 dark:border-purple-800 transition-colors shrink-0 text-center cursor-pointer shadow-xs whitespace-nowrap active:scale-95"
            >
              انصراف
            </button>
            <button
              id="modal-add-to-cart-btn"
              onClick={handleAdd}
              className="flex-1 sm:flex-none h-10 sm:h-11 flex items-center justify-center gap-1.5 sm:gap-2 bg-purple-100 hover:bg-purple-200 dark:bg-purple-950/90 dark:hover:bg-purple-900 border border-purple-300 dark:border-purple-700/60 text-purple-900 hover:text-purple-950 dark:text-purple-200 dark:hover:text-white font-bold px-3 sm:px-4 rounded-xl shadow-xs transition-all text-xs cursor-pointer whitespace-nowrap active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>افزودن به سبد</span>
            </button>
            <button
              id="modal-instant-buy-btn"
              onClick={handleInstantBuy}
              className="flex-1 sm:flex-none h-10 sm:h-11 flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-4 sm:px-5 rounded-xl shadow-md shadow-amber-500/20 active:scale-95 transition-all text-xs cursor-pointer whitespace-nowrap"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
              <span>خرید فوری</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
