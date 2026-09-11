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
  Gift,
  Wallet,
  Coins
} from 'lucide-react';
import { CartItem, User, Order } from '../types';
import { requestZibalPayment, savePendingOrder } from '../lib/zibalService';
import { hasAmlakInItems, generateAmlakLicense } from '../lib/amlakLicenseService';
import { loadUserArzData, payOrderWithArzWallet, UserArzData } from '../lib/jaheshArzService';

interface PaymentGatewayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCloseAll?: () => void;
  cartItems: CartItem[];
  currentUser: User | null;
  onPaymentSuccess?: (order: Order) => void;
  appliedCoupon?: { code: string; discountPercent: number; discountAmount: number } | null;
  zibalMerchant?: string;
  onOpenArzDeposit?: () => void;
}

export const PaymentGatewayModal: React.FC<PaymentGatewayModalProps> = ({
  isOpen,
  onClose,
  onCloseAll,
  cartItems,
  currentUser,
  onPaymentSuccess,
  appliedCoupon,
  zibalMerchant,
  onOpenArzDeposit,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'zibal' | 'arz_wallet'>('zibal');
  const [arzUserData, setArzUserData] = useState<UserArzData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Load Jahesh Arz Wallet data when modal opens
  useEffect(() => {
    if (!isOpen) return;
    if (currentUser) {
      loadUserArzData(currentUser.id, currentUser.fullName).then((data) => {
        setArzUserData(data);
      });
    }
  }, [isOpen, currentUser]);

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

  const irrWallet = arzUserData?.wallets.find((w) => w.currency === 'IRR');
  const irrBalance = irrWallet ? irrWallet.balance : 0;
  const hasSufficientWalletBalance = irrBalance >= payableTotal;

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

    // 1. Admin direct free checkout without going to Zibal/Shaparak
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

    // 2. Pay via Jahesh Arz Wallet Balance
    if (paymentMethod === 'arz_wallet') {
      if (!hasSufficientWalletBalance) {
        setErrorMessage(`موجودی کیف پول ریالی شما کافی نیست. موجودی: ${formatPrice(irrBalance)}، مبلغ فاکتور: ${formatPrice(payableTotal)}`);
        return;
      }

      setIsProcessing(true);
      setErrorMessage('');

      const orderId = 'JAHESH-ARZ-' + Math.floor(10000 + Math.random() * 90000).toString();
      const res = await payOrderWithArzWallet(currentUser.id, orderId, payableTotal, 'IRR');

      if (res.success) {
        const order: Order = {
          id: orderId,
          trackingCode: res.trackingNumber || 'TC-' + Date.now().toString().slice(-6),
          paymentRefId: res.refNumber || 'REF-WALLET-' + Date.now(),
          userId: currentUser.id,
          customerName: currentUser.fullName,
          customerPhone: currentUser.phone,
          customerEmail: currentUser.email,
          requestedDomain: safeCartItems.find((i) => i.requestedDomain)?.requestedDomain || '',
          clientNotes: safeCartItems.map((i) => i.clientNotes).filter(Boolean).join(' | '),
          items: [...safeCartItems],
          totalAmount: payableTotal,
          discountAmount: discountAmount > 0 ? discountAmount : undefined,
          appliedCouponCode: appliedCoupon?.code || undefined,
          status: 'تایید شده / در حال آماده‌سازی',
          paymentGateway: 'کیف پول جهش ارز (TopChange)',
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
          order.amlakLicense = generateAmlakLicense(order, currentUser);
        }

        setIsProcessing(false);
        if (onPaymentSuccess) {
          onPaymentSuccess(order);
        }
      } else {
        setIsProcessing(false);
        setErrorMessage(res.message || 'خطا در پرداخت با کیف پول جهش ارز.');
      }
      return;
    }

    // 3. Online Shaparak Gateway (Zibal)
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

    // Save locally
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
    });

    if (res.success && res.paymentUrl) {
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
      <div className="relative w-full max-w-lg bg-[#0e0a22] border border-purple-800/80 rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[95vh] flex flex-col">
        
        {/* Top Header - Shaparak & Zibal Trust Indicators */}
        <div className="bg-gradient-to-r from-[#180e3b] via-[#241352] to-[#180e3b] p-4 sm:p-5 border-b border-purple-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-950/50 text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-black text-white">انتخاب روش پرداخت آنلاین جهش</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  رسمی و امن
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-emerald-400 inline" />
                <span>اتصال امن رمزنگاری‌شده ۲۵۶ بیتی SSL شاپرک و جهش ارز</span>
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
          
          {/* Payment Method Selector */}
          {!isAdmin && (
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">روش پرداخت را انتخاب کنید:</label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('zibal')}
                  className={`p-3 rounded-2xl border text-right transition-all cursor-pointer flex items-center gap-3 ${
                    paymentMethod === 'zibal'
                      ? 'bg-purple-900/60 border-purple-500 ring-2 ring-purple-500/30 text-white'
                      : 'bg-[#150d33] border-purple-900/40 text-slate-300 hover:border-purple-700'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">درگاه شاپرک (زیبال)</div>
                    <div className="text-[10px] text-slate-400">کارت‌های شتابی</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('arz_wallet')}
                  className={`p-3 rounded-2xl border text-right transition-all cursor-pointer flex items-center gap-3 ${
                    paymentMethod === 'arz_wallet'
                      ? 'bg-emerald-950/70 border-emerald-500 ring-2 ring-emerald-500/30 text-white'
                      : 'bg-[#150d33] border-purple-900/40 text-slate-300 hover:border-emerald-700'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">کیف پول جهش ارز</div>
                    <div className="text-[10px] text-emerald-300">
                      موجودی: {formatPrice(irrBalance)}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Invoice Summary Box */}
          <div className="bg-[#150d33] border border-purple-800/50 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-purple-900/50 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Receipt className="w-4 h-4 text-purple-400" />
                <span className="font-bold">پیش‌فاکتور پرداخت:</span>
              </div>
              <span className="font-medium text-slate-400">{cartItems.length} قلم کالا / پکیج</span>
            </div>

            {/* List of items in cart */}
            <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
              {cartItems.map((item) => {
                const unitPrice = item.selectedPlan?.price !== undefined
                  ? Number(item.selectedPlan.price)
                  : (Number(item.product?.price) || 0);
                return (
                  <div key={item.product.id} className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2 truncate max-w-[200px] sm:max-w-[260px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                      <span className="text-white truncate">
                        {item.product.title}
                        {item.selectedPlan ? ` (${item.selectedPlan.name})` : ''}
                      </span>
                      <span className="text-[10px] text-slate-400">({item.quantity} عدد)</span>
                    </div>
                    <span className="text-amber-300 font-bold shrink-0">
                      {formatPrice(unitPrice * item.quantity)}
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
                <span className="text-[11px] text-slate-400 block">حساب کاربری خریدار:</span>
                <span className="font-bold text-white">{currentUser.fullName} ({currentUser.username})</span>
              </div>
              <div className="space-y-0.5 text-left">
                <span className="text-[11px] text-slate-400 block">شماره همراه:</span>
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
            </div>
          )}

          {/* Method specific notices */}
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
          ) : paymentMethod === 'arz_wallet' ? (
            <div className="p-3.5 bg-emerald-950/40 border border-emerald-600/40 rounded-2xl space-y-2 text-xs">
              <div className="flex items-center justify-between text-emerald-300">
                <span className="font-bold">موجودی کیف پول جهش ارز شما:</span>
                <span className="font-bold text-sm text-white">{formatPrice(irrBalance)}</span>
              </div>
              {hasSufficientWalletBalance ? (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>موجودی کافی است. مبلغ فاکتور به صورت آنی از کیف پول شما کسر و سفارش نهایی می‌شود.</span>
                </p>
              ) : (
                <div className="text-[11px] text-rose-300 flex items-center justify-between pt-1">
                  <span>موجودی ناکافی است. لطفاً ابتدا کیف پول را شارژ نمایید یا از درگاه شاپرک پرداخت کنید.</span>
                </div>
              )}
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

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#140c31] border-t border-purple-900/50 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCloseBack}
              className="h-11 sm:h-12 px-4 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-purple-950/80 hover:bg-purple-900 border border-purple-800/50 transition-all flex-1 sm:flex-none text-center cursor-pointer whitespace-nowrap flex items-center justify-center shadow-sm active:scale-95"
              title="بازگشت به سبد خرید"
            >
              بازگشت به سبد
            </button>
            <button
              type="button"
              onClick={handleCloseEntirely}
              className="h-11 sm:h-12 px-4 rounded-xl text-xs font-bold text-rose-300 hover:text-rose-200 bg-rose-950/40 hover:bg-rose-900/50 border border-rose-800/40 transition-all flex-1 sm:flex-none text-center cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap shadow-sm active:scale-95"
              title="بستن کامل و بازگشت به صفحه فروشگاه"
            >
              <Store className="w-3.5 h-3.5 shrink-0" />
              <span>بستن و بازگشت</span>
            </button>
          </div>

          <button
            onClick={handleStartPayment}
            disabled={isProcessing || (paymentMethod === 'arz_wallet' && !hasSufficientWalletBalance && !isAdmin)}
            className="h-11 sm:h-12 flex-1 w-full sm:w-auto flex items-center justify-center gap-2 font-black px-5 rounded-xl shadow-xl transition-all text-xs whitespace-nowrap bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950 shrink-0" />
                <span>{isAdmin ? 'در حال ثبت سفارش رایگان مدیریت...' : 'در حال پردازش پرداخت...'}</span>
              </>
            ) : isAdmin ? (
              <>
                <Gift className="w-4 h-4 text-slate-950 shrink-0" />
                <span>تکمیل و ثبت رایگان سفارش (حساب مدیریت)</span>
              </>
            ) : paymentMethod === 'arz_wallet' ? (
              <>
                <Wallet className="w-4 h-4 text-slate-950 shrink-0" />
                <span>پرداخت آنی از کیف پول {formatPrice(payableTotal)}</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>اتصال به درگاه و پرداخت {formatPrice(payableTotal)}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

