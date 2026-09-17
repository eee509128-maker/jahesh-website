import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Receipt,
  Loader2,
  CreditCard,
  Building2,
  X,
  Store,
  Gift
} from 'lucide-react';
import { CartItem, User, Order } from '../types';
import { requestZibalPayment, savePendingOrder } from '../lib/zibalService';
import { hasAmlakInItems, generateAmlakLicense } from '../lib/amlakLicenseService';

interface PaymentGatewayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCloseAll?: () => void;
  cartItems: CartItem[];
  currentUser: User | null;
  onPaymentSuccess?: (order: Order) => void;
  appliedCoupon?: { code: string; discountPercent: number; discountAmount: number } | null;
  zibalMerchant?: string;
}

export const PaymentGatewayModal: React.FC<PaymentGatewayModalProps> = ({
  isOpen,
  onClose,
  onCloseAll,
  cartItems,
  currentUser,
  appliedCoupon,
  zibalMerchant,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Close on Escape key press and handle pageshow BF cache
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsProcessing(false);
        onClose();
      }
    };

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setIsProcessing(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pageshow', handlePageShow);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const safeCartItems = Array.isArray(cartItems)
    ? cartItems.filter((item) => item && item.product && typeof item.product === 'object' && item.product.id)
    : [];

  const rawTotalAmount = safeCartItems.reduce((sum, item) => {
    const unitPrice = item.selectedPlan?.price !== undefined
      ? Number(item.selectedPlan.price)
      : (Number(item.product?.price) || 0);
    return sum + unitPrice * (Number(item.quantity) || 1);
  }, 0);

  const isAdmin = currentUser?.role === 'admin';
  const discountAmount = isAdmin
    ? rawTotalAmount
    : appliedCoupon
    ? (appliedCoupon.discountAmount || 0)
    : 0;
  const payableTotal = isAdmin ? 0 : Math.max(0, rawTotalAmount - discountAmount);
  const payableTotalInRials = payableTotal * 10;

  const formatPrice = (num?: number) => {
    if (typeof num !== 'number' || isNaN(num)) return '۰ تومان';
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const formatRials = (num?: number) => {
    if (typeof num !== 'number' || isNaN(num)) return '۰ ریال';
    return num.toLocaleString('fa-IR') + ' ریال';
  };

  const handleStartPayment = async () => {
    if (!currentUser) {
      setErrorMessage('لطفاً جهت اتصال به درگاه پرداخت ابتدا وارد حساب کاربری خود شوید.');
      return;
    }

    // Admin direct free checkout without going to Zibal/Shaparak
    if (currentUser.role === 'admin') {
      setIsProcessing(true);
      setErrorMessage('');

      const orderId = 'JAHESH-ADM-' + Math.floor(10000 + Math.random() * 90000).toString();
      const requestedDomain = safeCartItems.find((i) => i.requestedDomain)?.requestedDomain || '';
      const clientNotes = safeCartItems.map((i) => i.clientNotes).filter(Boolean).join(' | ') || 'ثبت سفارش با حساب مدیریت (رایگان)';

      const adminOrder: Order = {
        id: orderId,
        trackingCode: 'ADM-' + Date.now().toString().slice(-6),
        paymentRefId: 'FREE-ADM-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        userId: currentUser.id,
        customerName: currentUser.fullName || 'مدیر فروشگاه جهش‌کالا',
        customerPhone: currentUser.phone || '09152331974',
        customerEmail: currentUser.email || 'jahesh1395@gmail.com',
        requestedDomain,
        clientNotes,
        items: [...safeCartItems],
        totalAmount: 0,
        discountAmount: rawTotalAmount,
        appliedCouponCode: appliedCoupon?.code || 'ADMIN-FREE-VIP',
        status: 'تایید شده / در حال آماده‌سازی',
        paymentGateway: 'خرید مستقیم مدیریت (۱۰۰٪ رایگان)',
        acceptedTerms: true,
        date: new Date().toLocaleDateString('fa-IR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      if (hasAmlakInItems(safeCartItems)) {
        adminOrder.amlakLicense = generateAmlakLicense(adminOrder, currentUser);
      }

      if (onPaymentSuccess) {
        onPaymentSuccess(adminOrder);
      }
      return;
    }

    if (payableTotal < 1000) {
      setErrorMessage('حداقل مبلغ پرداخت در شبکه شاپرک ۱,۰۰۰ تومان (۱۰,۰۰۰ ریال) است.');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    const orderId = 'JAHESH-' + Math.floor(10000 + Math.random() * 90000).toString();
    const requestedDomain = safeCartItems.find((i) => i.requestedDomain)?.requestedDomain || '';
    const clientNotes = safeCartItems.map((i) => i.clientNotes).filter(Boolean).join(' | ');

    // Prepare pending order structure to be retrieved after returning from Zibal
    const pendingOrder: Order = {
      id: orderId,
      trackingCode: '', // will be filled from bank trackId
      paymentRefId: '', // will be filled from bank refNumber
      userId: currentUser.id,
      customerName: currentUser.fullName,
      customerPhone: currentUser.phone,
      customerEmail: currentUser.email,
      requestedDomain,
      clientNotes,
      items: [...safeCartItems],
      totalAmount: payableTotal,
      discountAmount: discountAmount > 0 ? discountAmount : undefined,
      appliedCouponCode: appliedCoupon?.code || undefined,
      status: 'در حال بررسی',
      paymentGateway: 'زیبال (Zibal)',
      acceptedTerms: true,
      createdAt: new Date().toISOString(),
      date: new Date().toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    if (hasAmlakInItems(safeCartItems)) {
      pendingOrder.amlakLicense = generateAmlakLicense(pendingOrder, currentUser);
    }

    // Save pending draft temporarily only in client storage (will only be saved to database AFTER successful bank verification)
    savePendingOrder(pendingOrder);

    // Call API to request Zibal payment session
    const res = await requestZibalPayment({
      amountInTomans: payableTotal,
      orderId,
      customerName: currentUser.fullName,
      customerPhone: currentUser.phone,
      customerEmail: currentUser.email,
      description: `خرید از فروشگاه جهش کالا - فاکتور ${orderId}`,
      merchant: zibalMerchant,
      orderData: pendingOrder,
    });

    if (res.success && res.paymentUrl) {
      if (res.trackId) {
        pendingOrder.trackingCode = String(res.trackId);
        pendingOrder.zibalTrackId = String(res.trackId);
        savePendingOrder(pendingOrder);
      }
      // Direct redirect to real Shaparak / Zibal gateway
      window.location.href = res.paymentUrl;
    } else {
      setIsProcessing(false);
      setErrorMessage(
        res.error ||
        res.message ||
        'خطا در برقراری ارتباط با درگاه پرداخت زیبال. لطفاً از اتصال اینترنت یا کد مرچنت اطمینان حاصل نمایید.'
      );
    }
  };

  const handleCloseEntirely = () => {
    setIsProcessing(false);
    if (onCloseAll) {
      onCloseAll();
    } else {
      onClose();
    }
  };

  const handleCloseBack = () => {
    setIsProcessing(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in cursor-default"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCloseBack();
        }
      }}
    >
      <div className="relative w-full max-w-xl bg-[#0e0a22] border border-purple-700/70 rounded-3xl shadow-2xl overflow-hidden my-2 sm:my-4 max-h-[94vh] flex flex-col">
        
        {/* Top Header - Shaparak & Zibal Trust Indicators */}
        <div className="bg-gradient-to-r from-[#180e3b] via-[#241352] to-[#180e3b] p-4 sm:p-5 border-b border-purple-900/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-950/50 text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-black text-white">درگاه پرداخت اینترنتی شاپرک / زیبال</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  رسمی
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-emerald-400 inline" />
                <span>اتصال امن رمزنگاری‌شده ۲۵۶ بیتی SSL شاپرک</span>
              </p>
            </div>
          </div>
 
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCloseEntirely}
              className="text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              title="انصراف و بستن کامل"
            >
              انصراف
            </button>
            <button
              onClick={handleCloseBack}
              className="w-8 h-8 rounded-full bg-purple-950/80 hover:bg-purple-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="بستن پنجره پرداخت"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Pre-Invoice & Security Information */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-5 text-right">
          
          {/* Invoice Summary Box */}
          <div className="bg-[#150d33] border border-purple-800/50 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-purple-900/50 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Receipt className="w-4 h-4 text-purple-400" />
                <span className="font-bold">پیش‌فاکتور پرداخت آنلاین:</span>
              </div>
              <span className="font-medium text-slate-400">{cartItems.length} قلم کالا / پکیج</span>
            </div>

            {/* List of items in cart */}
            <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
              {cartItems.map((item, idx) => {
                const itemProd = item?.product;
                const prodTitle = itemProd?.title || (item as any)?.title || 'محصول جهش‌کالا';
                const planTitle = item?.selectedPlan?.name || item?.selectedPlan?.title;
                const itemQty = Number(item?.quantity) || 1;
                const unitPrice = item?.selectedPlan?.price !== undefined
                  ? Number(item.selectedPlan.price)
                  : (Number(itemProd?.price || (item as any)?.price) || 0);
                return (
                  <div key={itemProd?.id || idx} className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2 truncate max-w-[200px] sm:max-w-[260px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                      <span className="text-white truncate">
                        {prodTitle}
                        {planTitle ? ` (${planTitle})` : ''}
                      </span>
                      <span className="text-[10px] text-slate-400">({itemQty} عدد)</span>
                    </div>
                    <span className="text-amber-300 font-bold shrink-0">
                      {formatPrice(unitPrice * itemQty)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Coupon discount line */}
            {appliedCoupon && (
              <div className="flex items-center justify-between text-xs pt-2 border-t border-purple-900/40 text-emerald-400">
                <span>تخفیف اعمال شده ({appliedCoupon.code}):</span>
                <span className="font-bold">-{formatPrice(discountAmount)}</span>
              </div>
            )}

            {/* Total Payable Row */}
            <div className="pt-3 border-t border-purple-800/70 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-300 font-bold block">مبلغ نهایی فاکتور:</span>
                <span className="text-[11px] text-slate-400">معادل شاپرک: {formatRials(payableTotalInRials)}</span>
              </div>
              <div className="text-left">
                <span className="text-xl sm:text-2xl font-black text-emerald-400">
                  {formatPrice(payableTotal)}
                </span>
              </div>
            </div>
          </div>

          {/* Customer Details info */}
          {currentUser && (
            <div className="bg-[#120a2b] border border-purple-900/40 rounded-xl p-3 flex items-center justify-between text-xs text-slate-300">
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 block">خریدار:</span>
                <span className="font-bold text-white">{currentUser.fullName}</span>
              </div>
              <div className="space-y-0.5 text-left">
                <span className="text-[11px] text-slate-400 block">شماره تماس:</span>
                <span className="font-mono text-purple-200">{currentUser.phone}</span>
              </div>
            </div>
          )}

          {/* Error Message if any */}
          {errorMessage && (
            <div className="p-4 bg-rose-950/80 border border-rose-800/80 rounded-2xl space-y-2 text-xs text-rose-200 animate-in shake">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-bold">{errorMessage}</p>
              </div>
              <p className="text-[11px] text-rose-300/80 pr-6">
                💡 جهت تست درگاه، کد مرچنت زیبال را می‌توانید از پنل مدیریت ویرایش فرمایید. همچنین می‌توانید با دکمه‌های زیر به سبد خرید یا صفحه اصلی بازگردید.
              </p>
            </div>
          )}

          {/* Shaparak & Bank Features Info or Admin VIP notice */}
          {isAdmin ? (
            <div className="bg-gradient-to-r from-emerald-950/90 via-[#0a261e] to-teal-950/90 border border-emerald-500/50 p-3.5 rounded-2xl flex items-center gap-3 text-xs text-emerald-300 shadow-md">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Gift className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white">ورود با حساب مدیریت (VIP Admin)</span>
                <p className="text-[11px] text-emerald-200/80 mt-0.5">
                  خرید کلیه کالاها برای حساب مدیریت رایگان است و مستقیماً بدون نیاز به انتقال به درگاه شاپرک/زیبال ثبت و نهایی می‌گردد.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5 text-[11px] text-slate-300">
              <div className="bg-[#160e33] p-2.5 rounded-xl border border-purple-900/40 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>کلیه کارت‌های شتاب</span>
              </div>
              <div className="bg-[#160e33] p-2.5 rounded-xl border border-purple-900/40 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>تسویه رسمی شاپرک</span>
              </div>
            </div>
          )}

          {!isAdmin && (
            <div className="text-[11px] text-slate-400 leading-relaxed bg-black/30 p-3 rounded-xl border border-white/5">
              💡 با کلیک روی دکمه زیر، مستقیماً به صفحه رسمی پرداخت اینترنتی بانک (سامانه شاپرک / زیبال) هدایت می‌شوید.
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#140c31] border-t border-purple-900/60 shrink-0 flex flex-col gap-3">
          {/* Main Primary Action: Pay & Connect to Bank */}
          <button
            type="button"
            onClick={handleStartPayment}
            disabled={isProcessing}
            className="w-full h-13 sm:h-14 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer active:scale-[0.98] shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-slate-950 shrink-0" />
                <span className="font-bold">{isAdmin ? 'در حال ثبت سفارش رایگان مدیریت...' : 'در حال اتصال امن به درگاه شاپرک...'}</span>
              </>
            ) : isAdmin ? (
              <>
                <Gift className="w-5 h-5 text-slate-950 shrink-0" />
                <span>تکمیل و ثبت رایگان سفارش (حساب مدیریت VIP)</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-5 h-5 shrink-0 text-slate-950" />
                <span>اتصال به درگاه و پرداخت {formatPrice(payableTotal)}</span>
                <ExternalLink className="w-4 h-4 opacity-80 shrink-0" />
              </>
            )}
          </button>

          {/* Secondary Actions: Back to cart & Close */}
          <div className="grid grid-cols-2 gap-2.5 w-full">
            <button
              type="button"
              onClick={handleCloseBack}
              className="h-11 px-3 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-purple-950/70 hover:bg-purple-900 border border-purple-800/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 text-center"
              title="بازگشت به سبد خرید"
            >
              <span>بازگشت به سبد خرید</span>
            </button>
            <button
              type="button"
              onClick={handleCloseEntirely}
              className="h-11 px-3 rounded-xl text-xs font-bold text-rose-300 hover:text-rose-200 bg-rose-950/30 hover:bg-rose-900/40 border border-rose-800/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 text-center"
              title="بستن کامل و بازگشت به صفحه فروشگاه"
            >
              <Store className="w-3.5 h-3.5 shrink-0" />
              <span>انصراف و بستن</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

