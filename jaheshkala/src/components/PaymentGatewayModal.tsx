import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Lock, CheckCircle2, AlertCircle, RefreshCw, ArrowRight, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, User, Order } from '../types';

interface PaymentGatewayModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currentUser: User | null;
  onPaymentSuccess: (order: Order) => void;
  appliedCoupon?: { code: string; discountPercent: number; discountAmount: number } | null;
}

export const PaymentGatewayModal: React.FC<PaymentGatewayModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  currentUser,
  onPaymentSuccess,
  appliedCoupon,
}) => {
  if (!isOpen) return null;

  const rawTotalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const payableTotal = Math.max(0, rawTotalAmount - discountAmount);

  const [cardNumber, setCardNumber] = useState('6037 9975 4281 9012');
  const [cvv2, setCvv2] = useState('784');
  const [expMonth, setExpMonth] = useState('08');
  const [expYear, setExpYear] = useState('06');
  const [pin, setPin] = useState('482910');
  const [captcha, setCaptcha] = useState('5831');
  const [isProcessing, setIsProcessing] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const handleRequestOtp = () => {
    setOtpSent(true);
    setTimeout(() => {
      setPin(Math.floor(100000 + Math.random() * 900000).toString());
    }, 400);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    setIsProcessing(true);

    setTimeout(() => {
      // Confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      const trackingNumber = 'ZBL-' + Math.floor(10000000 + Math.random() * 90000000).toString();
      const refNumber = 'SHP-' + Math.floor(1000000000 + Math.random() * 9000000000).toString();

      // Collect requested domain from items
      const requestedDomain = cartItems.find((i) => i.requestedDomain)?.requestedDomain || '';
      const clientNotes = cartItems.map((i) => i.clientNotes).filter(Boolean).join(' | ');

      const newOrder: Order = {
        id: 'JAHESH-' + Math.floor(10000 + Math.random() * 90000).toString(),
        trackingCode: trackingNumber,
        paymentRefId: refNumber,
        userId: currentUser.id,
        customerName: currentUser.fullName,
        customerPhone: currentUser.phone,
        customerEmail: currentUser.email,
        requestedDomain: requestedDomain,
        clientNotes: clientNotes,
        items: [...cartItems],
        totalAmount: payableTotal,
        discountAmount: discountAmount > 0 ? discountAmount : undefined,
        appliedCouponCode: appliedCoupon?.code || undefined,
        status: 'در حال بررسی', // Explicitly requested by user: "اونجا در حال بررسی بخوره"
        paymentGateway: 'زیبال (Zibal)',
        date: new Date().toLocaleDateString('fa-IR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        acceptedTerms: true,
      };

      setIsProcessing(false);
      onPaymentSuccess(newOrder);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0f0c22] border border-purple-700/60 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-2 sm:my-4">
        
        {/* Top Shaparak / Zibal Header */}
        <div className="bg-gradient-to-r from-emerald-900/60 via-[#131b2e] to-purple-950/60 p-3 sm:p-4 border-b border-emerald-500/20">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 font-black text-xs sm:text-sm shrink-0">
                ZBL
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                  <span className="text-xs sm:text-sm font-black text-white truncate">درگاه پرداخت زیبال</span>
                  <span className="text-[9px] sm:text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold shrink-0">
                    شاپرک امن
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                  پذیرنده: فروشگاه جهش‌کالا
                </p>
              </div>
            </div>

            <div className="text-left shrink-0">
              <span className="text-[9px] sm:text-[10px] text-slate-400 block">مبلغ قابل پرداخت:</span>
              <span className="text-xs sm:text-base font-black text-emerald-400">{formatPrice(payableTotal)}</span>
              {discountAmount > 0 && (
                <span className="text-[9px] sm:text-[10px] text-amber-300 block">
                  (تخفیف: {formatPrice(discountAmount)})
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmitPayment} className="p-5 sm:p-6 space-y-4 text-right">
          
          <div className="bg-purple-950/20 border border-purple-900/40 p-3 rounded-2xl flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-purple-200">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>اتصال ایمن با پروتکل رمزنگاری SSL ۲۵۶ بیتی</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Terminal: 981240</span>
          </div>

          {/* Customer info summary */}
          {currentUser && (
            <div className="bg-[#150f2e] p-3 rounded-2xl border border-purple-900/40 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400">نام پرداخت‌کننده: </span>
                <span className="text-white font-bold">{currentUser.fullName}</span>
              </div>
              <div>
                <span className="text-slate-400">شماره تماس: </span>
                <span className="text-white font-mono">{currentUser.phone}</span>
              </div>
            </div>
          )}

          {/* Card Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-purple-400" />
              شماره کارت بانکی (۱۶ رقمی):
            </label>
            <input
              type="text"
              dir="ltr"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="xxxx xxxx xxxx xxxx"
              className="w-full bg-black/60 border border-purple-800/80 rounded-xl px-4 py-3 text-sm font-mono text-center text-white tracking-widest focus:outline-none focus:border-emerald-400"
              required
            />
          </div>

          {/* CVV2 and Expiry */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                کد شناسایی دوم (CVV2):
              </label>
              <input
                type="text"
                dir="ltr"
                maxLength={4}
                value={cvv2}
                onChange={(e) => setCvv2(e.target.value)}
                placeholder="۳ یا ۴ رقم"
                className="w-full bg-black/60 border border-purple-800/80 rounded-xl px-3 py-2.5 text-sm font-mono text-center text-white focus:outline-none focus:border-emerald-400"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                تاریخ انقضا (ماه / سال):
              </label>
              <div className="flex items-center gap-2" dir="ltr">
                <input
                  type="text"
                  maxLength={2}
                  value={expMonth}
                  onChange={(e) => setExpMonth(e.target.value)}
                  placeholder="ماه"
                  className="w-1/2 bg-black/60 border border-purple-800/80 rounded-xl py-2.5 text-sm font-mono text-center text-white focus:outline-none focus:border-emerald-400"
                  required
                />
                <span className="text-slate-500">/</span>
                <input
                  type="text"
                  maxLength={2}
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value)}
                  placeholder="سال"
                  className="w-1/2 bg-black/60 border border-purple-800/80 rounded-xl py-2.5 text-sm font-mono text-center text-white focus:outline-none focus:border-emerald-400"
                  required
                />
              </div>
            </div>
          </div>

          {/* Dynamic Password (رمز دوم پویا) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">
              رمز اینترنتی (پویا):
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                dir="ltr"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="رمز ارسال شده"
                className="flex-1 bg-black/60 border border-purple-800/80 rounded-xl px-4 py-2.5 text-sm font-mono text-center text-white tracking-widest focus:outline-none focus:border-emerald-400"
                required
              />
              <button
                type="button"
                onClick={handleRequestOtp}
                className="px-4 py-2 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs font-bold border border-purple-700/50 transition-colors shrink-0"
              >
                {otpSent ? 'رمز مجدد' : 'دریافت رمز پویا'}
              </button>
            </div>
            {otpSent && (
              <p className="text-[11px] text-emerald-400">
                * رمز پویا با موفقیت شبیه‌سازی و در کادر قرار گرفت.
              </p>
            )}
          </div>

          {/* Captcha */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex-1">
              <input
                type="text"
                dir="ltr"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                placeholder="کد امنیتی"
                className="w-full bg-black/60 border border-purple-800/80 rounded-xl px-3 py-2 text-sm font-mono text-center text-white focus:outline-none focus:border-emerald-400"
                required
              />
            </div>
            <div className="bg-[#1c133a] px-4 py-2 rounded-xl border border-purple-700 font-mono font-bold tracking-widest text-amber-300 select-none text-sm">
              5831
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 text-slate-300 text-xs font-bold transition-colors text-center order-2 sm:order-1"
            >
              انصراف و بازگشت
            </button>

            <button
              id="confirm-payment-btn"
              type="submit"
              disabled={isProcessing}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all text-xs order-1 sm:order-2 disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                  <span>در حال تایید پرداخت و ثبت نهایی در زیبال...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                  <span>پرداخت امن {formatPrice(payableTotal)} و ثبت سفارش</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
