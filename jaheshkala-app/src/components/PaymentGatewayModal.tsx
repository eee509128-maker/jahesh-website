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
  Store
} from 'lucide-react';
import { CartItem, User, Order } from '../types';
import { requestZibalPayment, savePendingOrder } from '../lib/zibalService';

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
  const [errorDetails, setErrorDetails] = useState<{
    message: string;
    isIpError?: boolean;
    detectedIp?: string;
    guidance?: string;
    result?: number;
  } | null>(null);

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

  const rawTotalAmount = safeCartItems.reduce(
    (sum, item) => sum + (Number(item.product?.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  const discountAmount = appliedCoupon ? (appliedCoupon.discountAmount || 0) : 0;
  const payableTotal = Math.max(0, rawTotalAmount - discountAmount);
  const payableTotalInRials = payableTotal * 10;

  const formatPrice = (num?: number) => {
    if (typeof num !== 'number' || isNaN(num)) return '۰ تومان';
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const formatRials = (num?: number) => {
    if (typeof num !== 'number' || isNaN(num)) return '۰ ریال';
    return num.toLocaleString('fa-IR') + ' ریال';
  };

  const handleStartPayment = async (overrideMerchant?: string) => {
    if (!currentUser) {
      setErrorMessage('لطفاً جهت اتصال به درگاه پرداخت ابتدا وارد حساب کاربری خود شوید.');
      return;
    }

    if (payableTotal < 1000) {
      setErrorMessage('حداقل مبلغ پرداخت در شبکه شاپرک ۱,۰۰۰ تومان (۱۰,۰۰۰ ریال) است.');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');
    setErrorDetails(null);

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
      date: new Date().toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    // Save locally
    savePendingOrder(pendingOrder);

    // Call API to request Zibal payment session
    const effectiveMerchant = overrideMerchant || zibalMerchant;
    const res = await requestZibalPayment({
      amountInTomans: payableTotal,
      orderId,
      customerName: currentUser.fullName,
      customerPhone: currentUser.phone,
      customerEmail: currentUser.email,
      description: `خرید از فروشگاه جهش کالا - فاکتور ${orderId}`,
      merchant: effectiveMerchant,
    });

    if (res.success && res.paymentUrl) {
      // Direct redirect to real Shaparak / Zibal gateway
      window.location.href = res.paymentUrl;
    } else {
      setIsProcessing(false);
      const isIpIssue = res.isIpError || res.result === 113 || res.result === 115;
      setErrorDetails({
        message: res.message || res.error || 'خطا در اتصال به درگاه زیبال.',
        isIpError: isIpIssue,
        detectedIp: res.detectedIp,
        guidance: res.guidance,
        result: res.result,
      });
      setErrorMessage(
        res.message ||
        res.error ||
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
      <div className="relative w-full max-w-lg bg-[#0e0a22] border border-purple-800/80 rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[95vh] flex flex-col">
        
        {/* Top Header - Shaparak & Zibal Trust Indicators */}
        <div className="bg-gradient-to-r from-[#180e3b] via-[#241352] to-[#180e3b] p-4 sm:p-5 border-b border-purple-900/60 flex items-center justify-between">
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
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between text-xs py-1">
                  <div className="flex items-center gap-2 truncate max-w-[200px] sm:max-w-[260px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                    <span className="text-white truncate">{item.product.title}</span>
                    <span className="text-[10px] text-slate-400">({item.quantity} عدد)</span>
                  </div>
                  <span className="text-amber-300 font-bold shrink-0">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
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

          {/* Error Message & IP Restriction Guidance */}
          {errorMessage && (
            <div className="p-4 bg-rose-950/80 border border-rose-800/80 rounded-2xl space-y-3 text-xs text-rose-200 animate-in shake">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="leading-relaxed font-bold text-rose-100">{errorMessage}</p>
                  {errorDetails?.detectedIp && (
                    <p className="text-[11px] font-mono text-rose-300">
                      آی‌پی شناسایی‌شده توسط درگاه: {errorDetails.detectedIp}
                    </p>
                  )}
                </div>
              </div>

              {errorDetails?.isIpError && (
                <div className="bg-black/40 border border-rose-500/30 rounded-xl p-3 space-y-2 text-[11px] leading-relaxed text-slate-200">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <span>⚠️ راهنمای حل مشکل IP متغیر در Vercel:</span>
                  </div>
                  <p className="text-slate-300">
                    ۱. وارد پنل کاربری زیبال (<span className="font-mono text-emerald-400">zibal.ir</span>) شوید و در بخش درگاه پرداخت، تیک گزینه <strong className="text-white">«محدودیت IP»</strong> را غیرفعال فرمایید تا درخواست‌های سرورهای ابری با IP پویا پذیرفته شوند.
                  </p>
                  <p className="text-slate-300">
                    ۲. یا می‌توانید هم‌اکنون با کلیک بر روی دکمه زیر، پرداخت را در حالت تستی (سندباکس رسمی زیبال) بررسی نمایید:
                  </p>
                  <button
                    type="button"
                    onClick={() => handleStartPayment('zibal')}
                    disabled={isProcessing}
                    className="mt-1 w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>پرداخت با درگاه آزمایشی (سندباکس زیبال)</span>
                  </button>
                </div>
              )}

              {!errorDetails?.isIpError && (
                <p className="text-[11px] text-rose-300/80 pr-6">
                  💡 جهت تست درگاه، کد مرچنت زیبال را می‌توانید از پنل مدیریت ویرایش فرمایید. همچنین می‌توانید با دکمه‌های زیر به سبد خرید یا صفحه اصلی بازگردید.
                </p>
              )}
            </div>
          )}

          {/* Shaparak & Bank Features Info */}
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

          <div className="text-[11px] text-slate-400 leading-relaxed bg-black/30 p-3 rounded-xl border border-white/5">
            💡 با کلیک روی دکمه زیر، مستقیماً به صفحه رسمی پرداخت اینترنتی بانک (سامانه شاپرک / زیبال) هدایت می‌شوید.
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#140c31] border-t border-purple-900/50 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCloseBack}
              className="px-3.5 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-purple-950/80 hover:bg-purple-900 border border-purple-800/50 transition-colors flex-1 sm:flex-none text-center cursor-pointer"
              title="بازگشت به سبد خرید"
            >
              بازگشت به سبد
            </button>
            <button
              type="button"
              onClick={handleCloseEntirely}
              className="px-3.5 py-3 rounded-xl text-xs font-semibold text-rose-300 hover:text-rose-200 bg-rose-950/40 hover:bg-rose-900/50 border border-rose-800/40 transition-colors flex-1 sm:flex-none text-center cursor-pointer flex items-center justify-center gap-1"
              title="بستن کامل و بازگشت به صفحه فروشگاه"
            >
              <Store className="w-3.5 h-3.5" />
              <span>بستن و بازگشت</span>
            </button>
          </div>

          <button
            onClick={handleStartPayment}
            disabled={isProcessing}
            className="flex-1 w-full sm:w-auto flex items-center justify-center gap-2 font-black px-5 py-3.5 rounded-xl shadow-xl transition-all text-xs bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>در حال اتصال به شاپرک...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>اتصال به درگاه و پرداخت {formatPrice(payableTotal)}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

