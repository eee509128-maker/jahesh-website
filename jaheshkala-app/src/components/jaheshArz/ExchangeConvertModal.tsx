import React, { useState, useEffect } from 'react';
import {
  ArrowRightLeft, ArrowDown, Sparkles, ShieldCheck,
  CheckCircle2, AlertCircle, RefreshCw, CreditCard, ExternalLink, Loader2
} from 'lucide-react';
import { UserWallet, ExchangeRateItem, ArzTransaction, CryptoOrFiatCurrency } from '../../types/jaheshArz';
import { requestZibalPayment } from '../../lib/zibalService';
import confetti from 'canvas-confetti';

interface ExchangeConvertModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallets: UserWallet[];
  rates: ExchangeRateItem[];
  preselectedWallet?: UserWallet;
  preselectedRate?: ExchangeRateItem;
  onSuccessExchange: (
    fromWalletId: string,
    toWalletId: string,
    fromAmount: number,
    toAmount: number,
    tx: ArzTransaction
  ) => void;
  userEmail?: string;
  userName?: string;
  zibalMerchant?: string;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const ExchangeConvertModal: React.FC<ExchangeConvertModalProps> = ({
  isOpen,
  onClose,
  wallets,
  rates,
  preselectedWallet,
  preselectedRate,
  onSuccessExchange,
  userEmail,
  userName,
  zibalMerchant,
}) => {
  const [fromWalletId, setFromWalletId] = useState<string>(
    preselectedWallet?.id || wallets.find((w) => w.currency === 'IRR')?.id || wallets[0]?.id || ''
  );
  const [toWalletId, setToWalletId] = useState<string>(() => {
    if (preselectedRate) {
      const match = wallets.find((w) => w.currency === preselectedRate.code);
      if (match) return match.id;
    }
    const matchUsdt = wallets.find((w) => w.currency === 'USDT');
    return matchUsdt ? matchUsdt.id : wallets[1]?.id || wallets[0]?.id || '';
  });

  const [fromAmount, setFromAmount] = useState<string>('5000000');
  const [paymentSource, setPaymentSource] = useState<'wallet' | 'gateway'>('wallet');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [gatewayRedirectUrl, setGatewayRedirectUrl] = useState<string | null>(null);
  const [gatewayTrackId, setGatewayTrackId] = useState<string | null>(null);

  if (!isOpen) return null;

  const fromWallet = wallets.find((w) => w.id === fromWalletId) || wallets[0];
  const toWallet = wallets.find((w) => w.id === toWalletId) || wallets[1] || wallets[0];

  // Calculate Exchange Rate
  const getRateInTomans = (currency: CryptoOrFiatCurrency, isBuyingFromUser: boolean) => {
    if (currency === 'IRR') return 1;
    const item = rates.find((r) => r.code === currency);
    if (!item) return 89000;
    return isBuyingFromUser ? item.buyPrice / 10 : item.sellPrice / 10;
  };

  const fromTomansRate = getRateInTomans(fromWallet.currency, true);
  const toTomansRate = getRateInTomans(toWallet.currency, false);

  const numFromAmount = Number(fromAmount.replace(/,/g, '')) || 0;
  const totalValueInTomans = numFromAmount * fromTomansRate;
  const rawToAmount = toTomansRate > 0 ? totalValueInTomans / toTomansRate : 0;
  const feeTomans = Math.round(totalValueInTomans * 0.003);
  const finalToAmount = toWallet.currency === 'IRR' ? Math.round(rawToAmount) : Number(rawToAmount.toFixed(4));

  const handleSwap = () => {
    const temp = fromWalletId;
    setFromWalletId(toWalletId);
    setToWalletId(temp);
  };

  const handleExchangeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (numFromAmount <= 0) {
      setErrorMsg('لطفاً مبلغ معتبری را وارد نمایید.');
      return;
    }

    if (fromWallet.id === toWallet.id) {
      setErrorMsg('کیف پول مبدا و مقصد نمی‌توانند یکسان باشند.');
      return;
    }

    // Direct Payment Gateway Execution
    if (paymentSource === 'gateway') {
      const payableTomans = Math.round(totalValueInTomans);
      if (payableTomans < 1000) {
        setErrorMsg('حداقل مبلغ پرداخت در شبکه بانکی شاپرک ۱,۰۰۰ تومان است.');
        return;
      }

      setIsProcessing(true);
      const buyOrderId = `ARZ-BUY-${Math.floor(100000 + Math.random() * 900000)}`;

      let callbackUrl = 'https://jaheshit.ir/jaheshkala?arz=1';
      if (typeof window !== 'undefined') {
        const cleanPath = window.location.pathname.replace(/\/+$/, '');
        callbackUrl = `${window.location.origin}${cleanPath || '/jaheshkala'}?arz=1`;
      }

      // Save pending crypto purchase for callback
      try {
        localStorage.setItem(
          'jahesh_arz_pending_deposit',
          JSON.stringify({
            depositId: buyOrderId,
            walletId: toWallet.id,
            targetCurrency: toWallet.currency,
            amountInTomans: payableTomans,
            targetCryptoAmount: finalToAmount,
            userId: userEmail || 'guest',
            userName: userName || 'کاربر جهش ارز',
            time: Date.now(),
          })
        );
      } catch {}

      try {
        const res = await requestZibalPayment({
          amountInTomans: payableTomans,
          orderId: buyOrderId,
          customerName: userName,
          customerEmail: userEmail,
          description: `خرید مستقیم ${finalToAmount} ${toWallet.currency} با درگاه بانکی شاپرک (${buyOrderId})`,
          callbackUrl,
          merchant: zibalMerchant,
        });

        if (res.success && res.paymentUrl) {
          setGatewayRedirectUrl(res.paymentUrl);
          setGatewayTrackId(String(res.trackId || ''));
          window.location.href = res.paymentUrl;
        } else {
          setIsProcessing(false);
          setErrorMsg(res.error || res.message || 'خطا در اتصال به درگاه پرداخت شاپرک زیبال.');
        }
      } catch (err: any) {
        setIsProcessing(false);
        setErrorMsg(err?.message || 'خطا در ارتباط با سرور.');
      }
      return;
    }

    // Wallet Balance Source
    if (numFromAmount > fromWallet.balance) {
      setErrorMsg(
        `موجودی کیف پول مبدا کافی نیست. موجودی: ${formatNumber(fromWallet.balance)} ${
          fromWallet.currency === 'IRR' ? 'تومان' : fromWallet.symbol
        }. می‌توانید گزینه پرداخت مستقیم با درگاه شاپرک را انتخاب کنید.`
      );
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const trackingNum = `TC-EXC-${Math.floor(100000 + Math.random() * 900000)}`;

      const newTx: ArzTransaction = {
        id: `tx-${Date.now()}`,
        trackingNumber: trackingNum,
        type: 'exchange',
        typeTitle: `تبدیل ${fromWallet.currency} به ${toWallet.currency}`,
        currency: fromWallet.currency,
        targetCurrency: toWallet.currency,
        amount: numFromAmount,
        targetAmount: finalToAmount,
        exchangeRate: Math.round(toTomansRate),
        fee: feeTomans,
        finalAmount: finalToAmount,
        status: 'completed',
        statusLabel: 'تکمیل شده',
        message: `تبدیل آنی ${formatNumber(numFromAmount)} ${fromWallet.currency} به ${formatNumber(
          finalToAmount
        )} ${toWallet.currency} با نرخ لحظه‌ای انجام شد.`,
        createdAt:
          new Date().toLocaleDateString('fa-IR') +
          ' - ' +
          new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        updatedAt:
          new Date().toLocaleDateString('fa-IR') +
          ' - ' +
          new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };

      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch {}

      onSuccessExchange(fromWallet.id, toWallet.id, numFromAmount, finalToAmount, newTx);
      onClose();
    }, 900);
  };

  // Immediate Sandbox Simulator
  const handleSimulateSuccessfulGatewayPayment = () => {
    const trackId = gatewayTrackId || Math.floor(100000000 + Math.random() * 900000000).toString();
    const refNum = `SHAPARAK-${Math.floor(1000000000 + Math.random() * 9000000000)}`;

    const newTx: ArzTransaction = {
      id: `tx-${Date.now()}`,
      trackingNumber: `TC-BUY-${trackId}`,
      type: 'charge',
      typeTitle: `خرید آنلاین ${toWallet.currency} با درگاه شاپرک`,
      currency: toWallet.currency,
      amount: finalToAmount,
      fee: 0,
      finalAmount: finalToAmount,
      status: 'completed',
      statusLabel: 'تکمیل شده و تایید بانکی',
      message: `پرداخت موفق مبلغ ${formatNumber(Math.round(totalValueInTomans))} تومان در درگاه پرداخت شاپرک زیبال (پیگیری: ${trackId}، ارجاع: ${refNum}).`,
      createdAt:
        new Date().toLocaleDateString('fa-IR') +
        ' - ' +
        new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      updatedAt:
        new Date().toLocaleDateString('fa-IR') +
        ' - ' +
        new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      paymentMethod: 'gateway',
      referenceId: refNum,
    };

    try {
      localStorage.removeItem('jahesh_arz_pending_deposit');
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } catch {}

    // Credit destination wallet directly
    onSuccessExchange(fromWallet.id, toWallet.id, 0, finalToAmount, newTx);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-white dark:bg-[#140d30] border border-purple-300 dark:border-purple-800/80 rounded-3xl p-5 sm:p-6 w-full max-w-lg shadow-2xl space-y-4 text-right my-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-purple-900/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                تبدیل و خرید مستقیم ارز (Exchange)
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                خرید مستقیم با درگاه شاپرک یا تبدیل از موجودی کیف پول
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-purple-950 text-slate-500 hover:text-slate-800 dark:text-slate-300 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-700 dark:text-rose-300 text-xs flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
            {paymentSource === 'wallet' && fromWallet.balance < numFromAmount && (
              <button
                type="button"
                onClick={() => {
                  setPaymentSource('gateway');
                  setErrorMsg('');
                }}
                className="mt-1 py-1.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 cursor-pointer self-start"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>پرداخت مستقیم با درگاه شاپرک زیبال</span>
              </button>
            )}
          </div>
        )}

        {/* If Gateway Redirect is Active */}
        {gatewayRedirectUrl ? (
          <div className="bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800/80 rounded-2xl p-5 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center animate-pulse">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                اتصال امن به درگاه پرداخت بانکی شاپرک (زیبال)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                در حال انتقال خودکار به درگاه جهت پرداخت {formatNumber(Math.round(totalValueInTomans))} تومان...
              </p>
              {gatewayTrackId && (
                <div className="font-mono text-xs text-purple-700 dark:text-amber-300 font-bold pt-1">
                  کد پیگیری تراکنش: {gatewayTrackId}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href={gatewayRedirectUrl}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ورود مستقیم به درگاه پرداخت شاپرک</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleSimulateSuccessfulGatewayPayment}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>شبیه‌سازی پرداخت موفق درگاه (تست سریع)</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleExchangeSubmit} className="space-y-4 text-xs">
            {/* Payment Source Selection Toggle */}
            <div className="bg-slate-50 dark:bg-[#1c1344] p-2 rounded-2xl border border-slate-200 dark:border-purple-900/50 flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setPaymentSource('wallet')}
                className={`flex-1 py-2 px-3 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  paymentSource === 'wallet'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>کسر از کیف پول مبدا</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentSource('gateway')}
                className={`flex-1 py-2 px-3 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  paymentSource === 'gateway'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>پرداخت با درگاه شاپرک (زیبال)</span>
              </button>
            </div>

            {/* From Wallet Section */}
            <div className="bg-slate-50 dark:bg-[#1c1344] p-3.5 rounded-2xl border border-slate-200 dark:border-purple-900/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  {paymentSource === 'gateway' ? 'محاسبه بر مبنای ارز:' : 'ارز مبدا (پرداخت می‌کنید):'}
                </span>
                {paymentSource === 'wallet' && (
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    موجودی: {formatNumber(fromWallet.balance)}{' '}
                    {fromWallet.currency === 'IRR' ? 'تومان' : fromWallet.symbol}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <select
                  value={fromWalletId}
                  onChange={(e) => setFromWalletId(e.target.value)}
                  className="w-full bg-white dark:bg-[#150e33] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-bold text-slate-900 dark:text-white"
                >
                  {wallets.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.name}
                    </option>
                  ))}
                </select>

                <div className="relative">
                  <input
                    type="text"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="w-full bg-white dark:bg-[#150e33] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-mono font-bold text-slate-900 dark:text-white focus:outline-none"
                    placeholder="مبلغ"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 font-bold">
                    {fromWallet.currency === 'IRR' ? 'تومان' : fromWallet.symbol}
                  </span>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center -my-2 relative z-10">
              <button
                type="button"
                onClick={handleSwap}
                className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-md hover:rotate-180 transition-transform cursor-pointer"
                title="جابجایی مبدا و مقصد"
              >
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* To Wallet Section */}
            <div className="bg-slate-50 dark:bg-[#1c1344] p-3.5 rounded-2xl border border-slate-200 dark:border-purple-900/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 dark:text-slate-300">ارز مقصد (دریافت می‌کنید):</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  موجودی فعلی: {formatNumber(toWallet.balance)}{' '}
                  {toWallet.currency === 'IRR' ? 'تومان' : toWallet.symbol}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <select
                  value={toWalletId}
                  onChange={(e) => setToWalletId(e.target.value)}
                  className="w-full bg-white dark:bg-[#150e33] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-bold text-slate-900 dark:text-white"
                >
                  {wallets.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.name}
                    </option>
                  ))}
                </select>

                <div className="relative">
                  <input
                    type="text"
                    readOnly
                    value={formatNumber(finalToAmount)}
                    className="w-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 rounded-xl p-2.5 font-mono font-black text-emerald-700 dark:text-emerald-400 focus:outline-none"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                    {toWallet.currency === 'IRR' ? 'تومان' : toWallet.symbol}
                  </span>
                </div>
              </div>
            </div>

            {/* Rate and Conversion Summary */}
            <div className="bg-purple-50/50 dark:bg-purple-950/30 p-3 rounded-2xl border border-purple-200 dark:border-purple-900/40 space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span>نرخ محاسبه:</span>
                <span className="font-mono font-bold text-purple-700 dark:text-amber-300">
                  {toWallet.currency !== 'IRR'
                    ? `۱ ${toWallet.currency} = ${formatNumber(Math.round(toTomansRate))} تومان`
                    : `۱ ${fromWallet.currency} = ${formatNumber(Math.round(fromTomansRate))} تومان`}
                </span>
              </div>

              {paymentSource === 'gateway' ? (
                <div className="flex items-center justify-between pt-1 border-t border-purple-200 dark:border-purple-900/50 font-bold">
                  <span className="text-slate-700 dark:text-slate-200">مبلغ نهایی پرداختی در درگاه شاپرک:</span>
                  <span className="font-mono text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
                    {formatNumber(Math.round(totalValueInTomans))} تومان
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>کارمزد تراکنش (۰.۳٪):</span>
                  <span className="font-mono">{formatNumber(feeTomans)} تومان</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 text-white font-bold text-xs shadow-lg shadow-purple-600/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>در حال ارتباط با درگاه پرداخت...</span>
                  </>
                ) : paymentSource === 'gateway' ? (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>
                      پرداخت {formatNumber(Math.round(totalValueInTomans))} تومان با درگاه شاپرک
                    </span>
                  </>
                ) : (
                  <>
                    <ArrowRightLeft className="w-4 h-4" />
                    <span>تایید و تبدیل آنی دارایی</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-purple-950 dark:hover:bg-purple-900 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                انصراف
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
