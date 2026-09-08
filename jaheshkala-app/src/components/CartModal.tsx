import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Globe, ShieldCheck, ArrowLeft, AlertCircle, Sparkles, FileText, Ticket, CheckCircle2, Percent, Plus, Minus } from 'lucide-react';
import { CartItem, User, Coupon } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currentUser: User | null;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onUpdateDomain: (productId: string, domain: string) => void;
  onUpdateNotes: (productId: string, notes: string) => void;
  termsAccepted: boolean;
  onToggleTerms: () => void;
  onOpenTermsModal: () => void;
  onOpenAuth: () => void;
  onProceedToPayment: (appliedCoupon?: { code: string; discountPercent: number; discountAmount: number }) => void;
  coupons?: Coupon[];
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  currentUser,
  onUpdateQuantity,
  onRemoveItem,
  onUpdateDomain,
  onUpdateNotes,
  termsAccepted,
  onToggleTerms,
  onOpenTermsModal,
  onOpenAuth,
  onProceedToPayment,
  coupons = [],
}) => {
  if (!isOpen) return null;

  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercent: number; discountAmount: number } | null>(null);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const rawTotalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = appliedCoupon
    ? (appliedCoupon.discountAmount !== undefined
        ? appliedCoupon.discountAmount
        : Math.round((rawTotalAmount * appliedCoupon.discountPercent) / 100))
    : 0;

  const finalPayableAmount = Math.max(0, rawTotalAmount - discountAmount);

  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const handleApplyCoupon = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const codeClean = couponInput.trim().toUpperCase();

    if (!codeClean) {
      setCouponError('لطفاً کد تخفیف را وارد کنید.');
      return;
    }

    // Special Secret Admin Coupon: jahesh1395 -> Sets golden package price to exactly 2,500,000 Tomans
    if (codeClean === 'JAHESH1395') {
      const packageItem = cartItems.find(
        (it) => it.product.id === 'pkg-golden-jahesh' || it.product.title.includes('پکیج')
      );
      let calcDiscount = 0;
      if (packageItem) {
        calcDiscount = Math.max(0, packageItem.product.price * packageItem.quantity - (2500000 * packageItem.quantity));
      } else if (rawTotalAmount > 2500000) {
        calcDiscount = rawTotalAmount - 2500000;
      } else {
        calcDiscount = Math.round(rawTotalAmount * 0.68);
      }

      setAppliedCoupon({
        code: 'jahesh1395',
        discountPercent: rawTotalAmount > 0 ? Math.round((calcDiscount / rawTotalAmount) * 100) : 68,
        discountAmount: calcDiscount,
      });
      setCouponSuccess('کد تخفیف سرّی «jahesh1395» اعمال شد! قیمت نهایی پکیج به ۲,۵۰۰,۰۰۰ تومان تغییر یافت.');
      return;
    }

    // 1. First check if any item in the cart has this exact product-specific couponCode
    const matchedProductItem = cartItems.find(
      (item) => item.product.couponCode && item.product.couponCode.toUpperCase() === codeClean
    );

    if (matchedProductItem && matchedProductItem.product.couponCode) {
      const discountPercent = matchedProductItem.product.couponDiscountPercent || 15;
      const productSubtotal = matchedProductItem.product.price * matchedProductItem.quantity;
      const calcDiscount = Math.round((productSubtotal * discountPercent) / 100);

      setAppliedCoupon({
        code: matchedProductItem.product.couponCode,
        discountPercent: discountPercent,
        discountAmount: calcDiscount,
      });
      setCouponSuccess(
        `کد تخفیف اختصاصی محصول «${matchedProductItem.product.title}» با ${discountPercent}% تخفیف اعمال شد!`
      );
      return;
    }

    // 2. Second, check general site-wide coupons
    const foundGeneral = coupons.find((c) => c.code.toUpperCase() === codeClean && c.isActive);
    if (foundGeneral) {
      let calcDiscount = 0;
      if (foundGeneral.targetFinalPrice && rawTotalAmount > foundGeneral.targetFinalPrice) {
        calcDiscount = rawTotalAmount - foundGeneral.targetFinalPrice;
      } else {
        calcDiscount = Math.round((rawTotalAmount * foundGeneral.discountPercent) / 100);
      }
      setAppliedCoupon({
        code: foundGeneral.code,
        discountPercent: foundGeneral.discountPercent,
        discountAmount: calcDiscount,
      });
      setCouponSuccess(`کد تخفیف «${foundGeneral.code}» با موفقیت اعمال شد!`);
      return;
    }

    // 3. Not found
    setCouponError('کد تخفیف وارد شده معتبر نیست یا با اقلام سبد خرید مطابقت ندارد.');
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput('');
    setCouponSuccess('');
    setCouponError('');
  };

  const handleCheckoutClick = () => {
    if (!currentUser) {
      onOpenAuth();
      return;
    }
    if (!termsAccepted) {
      alert('لطفاً جهت ادامه، ابتدا تیک مطالعه و پذیرش قوانین و مقررات تیم جهش را بزنید.');
      return;
    }
    onProceedToPayment(appliedCoupon || undefined);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#110b27] border border-purple-800/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-3 sm:my-6 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-900/50 bg-[#160d33]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-300">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-white">سبد سفارشات و صدور فاکتور جهش</h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400">بررسی پکیج‌ها، ثبت دامنه هدیه و تایید قوانین</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-950 hover:bg-purple-900 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-5">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-950/60 border border-purple-800/40 flex items-center justify-center mx-auto text-purple-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-white">سبد خرید شما فعلاً خالی است</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                می‌توانید از بخش فروشگاه، پکیج طلایی طراحی سایت یا سایر خدمات را به سبد خرید اضافه نمایید.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg"
              >
                مشاهده و انتخاب پکیج‌ها
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-[#160e33] border border-purple-800/50 rounded-2xl p-4 sm:p-5 space-y-4 shadow-lg transition-all"
                >
                  {/* Item Header: Image, Info & Delete button */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover border border-purple-700/60 shrink-0 bg-black/40"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-xs sm:text-sm font-black text-white leading-snug">
                            {item.product.title}
                          </h4>
                          {item.product.isGolden && (
                            <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-md shadow-sm">
                              VIP
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm font-black text-amber-300">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 border border-transparent hover:border-rose-900/40 transition-colors"
                      title="حذف کامل از سبد خرید"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Digikala Style Quantity Stepper & Subtotal Row */}
                  <div className="flex items-center justify-between gap-3 bg-black/40 border border-purple-900/60 rounded-xl px-3.5 py-2.5 shadow-inner">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] sm:text-xs text-slate-300 font-bold">تعداد:</span>
                      
                      {/* Digikala Counter Box */}
                      <div className="inline-flex items-center bg-[#0d0722] border border-purple-700/80 rounded-xl p-0.5 shadow-md">
                        {/* Plus button */}
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-lg text-purple-200 hover:text-white hover:bg-purple-700/70 active:scale-90 transition-all cursor-pointer"
                          title="افزایش تعداد سفارش"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>

                        {/* Quantity Number */}
                        <span className="w-8 text-center text-xs font-black text-white font-mono select-none">
                          {item.quantity.toLocaleString('fa-IR')}
                        </span>

                        {/* Minus or Trash button */}
                        <button
                          type="button"
                          onClick={() => {
                            if (item.quantity > 1) {
                              onUpdateQuantity(item.product.id, item.quantity - 1);
                            } else {
                              onRemoveItem(item.product.id);
                            }
                          }}
                          className={`w-7 h-7 flex items-center justify-center rounded-lg active:scale-90 transition-all cursor-pointer ${
                            item.quantity === 1
                              ? 'text-rose-400 hover:text-rose-300 hover:bg-rose-950/60'
                              : 'text-purple-200 hover:text-white hover:bg-purple-700/70'
                          }`}
                          title={item.quantity === 1 ? 'حذف محصول از سبد' : 'کاهش تعداد'}
                        >
                          {item.quantity === 1 ? (
                            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                          ) : (
                            <Minus className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {item.quantity > 1 && (
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[11px] text-rose-400/80 hover:text-rose-300 flex items-center gap-1 transition-colors pr-1.5"
                          title="حذف کل این کالا"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>حذف کالا</span>
                        </button>
                      )}
                    </div>

                    {/* Subtotal */}
                    <div className="flex items-center gap-2 text-left">
                      <span className="text-[11px] text-slate-400">جمع جزء:</span>
                      <span className="text-xs sm:text-sm font-black text-amber-300">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>

                  {/* Free Domain Field (if included) */}
                  {item.product.domainIncluded && (
                    <div className="bg-[#120a2a] p-3.5 rounded-xl border border-amber-500/30 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-amber-400" />
                          نام دامنه دلخواه رایگان شما (.ir یا ...):
                        </label>
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          هدیه ۱۰۰٪ رایگان
                        </span>
                      </div>
                      <input
                        type="text"
                        dir="ltr"
                        placeholder="نام انتخابی شما مثل: mycompany.ir"
                        value={item.requestedDomain || ''}
                        onChange={(e) => onUpdateDomain(item.product.id, e.target.value)}
                        className="w-full bg-black/60 border border-purple-800/80 rounded-xl px-3 py-2 text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                      <p className="text-[10px] text-slate-400">
                        * این دامنه پس از پرداخت توسط تیم جهش با مالکیت رسمی شما ثبت خواهد شد.
                      </p>
                    </div>
                  )}

                  {/* Additional notes / requirements */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-slate-300 block">
                      توضیحات تکمیلی یا رنگ‌بندی و امکانات خاص (اختیاری):
                    </label>
                    <input
                      type="text"
                      placeholder="امکانات خاص مدنظرتان یا رنگ و طرح دلخواه را اینجا بنویسید..."
                      value={item.clientNotes || ''}
                      onChange={(e) => onUpdateNotes(item.product.id, e.target.value)}
                      className="w-full bg-black/40 border border-purple-900/60 hover:border-purple-700 focus:border-purple-500 rounded-xl px-3.5 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              ))}

              {/* User Authentication Warning if not logged in */}
              {!currentUser && (
                <div className="bg-amber-950/30 border border-amber-500/40 p-3.5 rounded-2xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-amber-200">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>برای ثبت سفارش و ذخیره در پنل، ابتدا باید وارد حساب کاربری خود شوید.</span>
                  </div>
                  <button
                    onClick={onOpenAuth}
                    className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-xl shadow transition-colors"
                  >
                    ورود / ثبت‌نام
                  </button>
                </div>
              )}

              {/* Discount Coupon Code Box (Secret / Confidential) */}
              <div className="bg-[#150d33] border border-amber-500/40 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                    <Ticket className="w-4 h-4 text-amber-400" />
                    <span>کد تخفیف دارید؟</span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    اعمال درصد تخفیف بر روی کل فاکتور
                  </span>
                </div>

                {!appliedCoupon ? (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        dir="ltr"
                        placeholder="کد تخفیف را اینجا وارد کنید..."
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value);
                          setCouponError('');
                        }}
                        className="w-full bg-black/60 border border-purple-800 focus:border-amber-400 rounded-xl px-3.5 py-2 text-xs text-amber-300 font-mono uppercase tracking-wider focus:outline-none transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow transition-all cursor-pointer whitespace-nowrap"
                    >
                      اعمال کد
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-500/50 p-3 rounded-xl">
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="font-mono font-bold text-emerald-300">{appliedCoupon.code}</span>
                        <span className="text-slate-300 mx-1.5">•</span>
                        <span className="text-emerald-200 font-bold">{appliedCoupon.discountPercent}% تخفیف اعمال شد</span>
                        <span className="text-[11px] text-emerald-400 block sm:inline sm:mr-2">
                          (کسر مبلغ: {formatPrice(discountAmount)})
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="text-[11px] text-red-400 hover:text-red-300 underline font-semibold px-2 py-1"
                    >
                      حذف کد
                    </button>
                  </div>
                )}

                {couponError && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{couponError}</span>
                  </p>
                )}
                {couponSuccess && (
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{couponSuccess}</span>
                  </p>
                )}
              </div>

              {/* Terms and conditions Checkbox (REQUIRED BY USER) */}
              <div className="bg-[#150e33] border border-purple-800/60 p-4 rounded-2xl space-y-2">
                <div className="flex items-start gap-3">
                  <input
                    id="terms-checkbox"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={onToggleTerms}
                    className="w-5 h-5 rounded-md border-purple-600 text-purple-600 focus:ring-purple-500 bg-[#0e0a22] mt-0.5 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <label htmlFor="terms-checkbox" className="font-bold text-white cursor-pointer">
                      تمامی قوانین و مقررات فنی و مالی خدمات تیم جهش را با دقت مطالعه کرده و می‌پذیرم.
                    </label>
                    <p className="text-[11px] text-slate-400 mt-1">
                      (شامل شرایط شروع پس از تحویل بریف، ضوابط سئو، ثبت دامنه و هاست هدیه)
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenTermsModal}
                    className="text-xs text-purple-300 hover:text-purple-200 underline font-semibold flex items-center gap-1 shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>مطالعه متن قوانین</span>
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer Summary & Checkout Button */}
        {cartItems.length > 0 && (
          <div className="px-6 py-4 bg-[#140d30] border-t border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-right w-full sm:w-auto space-y-0.5">
              {appliedCoupon ? (
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>مبلغ کل:</span>
                    <span className="line-through">{formatPrice(rawTotalAmount)}</span>
                    <span className="text-red-400 font-bold bg-red-950/80 px-1.5 py-0.5 rounded text-[10px]">
                      {appliedCoupon.discountPercent}% تخفیف ({formatPrice(discountAmount)}-)
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-slate-300">مبلغ نهایی قابل پرداخت:</span>
                    <span className="text-2xl font-black text-emerald-400">
                      {formatPrice(finalPayableAmount)}
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-xs text-slate-400 block">مبلغ قابل پرداخت فاکتور:</span>
                  <span className="text-2xl font-black text-amber-300">
                    {formatPrice(rawTotalAmount)}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-purple-950/60 transition-colors w-1/3 sm:w-auto text-center"
              >
                ادامه خرید
              </button>
              <button
                id="proceed-payment-btn"
                onClick={handleCheckoutClick}
                disabled={!termsAccepted}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 font-black px-7 py-3 rounded-xl shadow-xl transition-all text-xs ${
                  termsAccepted
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 shadow-emerald-600/20 hover:scale-105 active:scale-95 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>انتقال به درگاه پرداخت امن (زیبال / شاپرک)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
