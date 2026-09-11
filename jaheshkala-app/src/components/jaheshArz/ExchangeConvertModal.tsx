import React, { useState, useEffect } from 'react';
import {
  ArrowRightLeft, ArrowDown, Sparkles, ShieldCheck,
  CheckCircle2, AlertCircle, RefreshCw
} from 'lucide-react';
import { UserWallet, ExchangeRateItem, ArzTransaction, CryptoOrFiatCurrency } from '../../types/jaheshArz';
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
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const fromWallet = wallets.find((w) => w.id === fromWalletId) || wallets[0];
  const toWallet = wallets.find((w) => w.id === toWalletId) || wallets[1] || wallets[0];

  // Calculate Exchange Rate
  // Rate to Tomans:
  const getRateInTomans = (currency: CryptoOrFiatCurrency, isBuyingFromUser: boolean) => {
    if (currency === 'IRR') return 1;
    const item = rates.find((r) => r.code === currency);
    if (!item) return 89000;
    // sellPrice in Rials / 10 = Tomans
    return isBuyingFromUser ? item.buyPrice / 10 : item.sellPrice / 10;
  };

  const fromTomansRate = getRateInTomans(fromWallet.currency, true);
  const toTomansRate = getRateInTomans(toWallet.currency, false);

  const numFromAmount = Number(fromAmount.replace(/,/g, '')) || 0;
  // Convert from currency -> Tomans -> to currency
  const totalValueInTomans = numFromAmount * fromTomansRate;
  const rawToAmount = toTomansRate > 0 ? totalValueInTomans / toTomansRate : 0;
  // Fee 0.3%
  const feeTomans = Math.round(totalValueInTomans * 0.003);
  const finalToAmount = toWallet.currency === 'IRR' ? Math.round(rawToAmount) : Number(rawToAmount.toFixed(4));

  const handleSwap = () => {
    const temp = fromWalletId;
    setFromWalletId(toWalletId);
    setToWalletId(temp);
  };

  const handleExchangeSubmit = (e: React.FormEvent) => {
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

    if (numFromAmount > fromWallet.balance) {
      setErrorMsg(`موجودی کیف پول مبدا کافی نیست. موجودی: ${formatNumber(fromWallet.balance)} ${fromWallet.currency === 'IRR' ? 'تومان' : fromWallet.symbol}`);
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
        message: `تبدیل آنی ${formatNumber(numFromAmount)} ${fromWallet.currency} به ${formatNumber(finalToAmount)} ${toWallet.currency} با نرخ لحظه‌ای انجام شد.`,
        createdAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        updatedAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };

      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch {}

      onSuccessExchange(fromWallet.id, toWallet.id, numFromAmount, finalToAmount, newTx);
      onClose();
    }, 1000);
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
                تبدیل آنی ارز (Exchange)
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                تبدیل لحظه‌ای دارایی‌ها بدون معطلی با کارمزد اقتصادی
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
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleExchangeSubmit} className="space-y-4 text-xs">
          {/* From Wallet Section */}
          <div className="bg-slate-50 dark:bg-[#1c1344] p-3.5 rounded-2xl border border-slate-200 dark:border-purple-900/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700 dark:text-slate-300">ارز مبدا (پرداخت می‌کنید):</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                موجودی: {formatNumber(fromWallet.balance)} {fromWallet.currency === 'IRR' ? 'تومان' : fromWallet.symbol}
              </span>
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
                  placeholder="0.00"
                />
                <button
                  type="button"
                  onClick={() => setFromAmount(String(fromWallet.balance))}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-purple-600 dark:text-amber-400 hover:underline font-bold"
                >
                  حداکثر
                </button>
              </div>
            </div>
          </div>

          {/* Swap Trigger Button */}
          <div className="flex justify-center -my-2 relative z-10">
            <button
              type="button"
              onClick={handleSwap}
              className="w-9 h-9 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg transition-transform hover:rotate-180 cursor-pointer"
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
                موجودی فعلی: {formatNumber(toWallet.balance)} {toWallet.currency === 'IRR' ? 'تومان' : toWallet.symbol}
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

              <div className="bg-white dark:bg-[#150e33] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-mono font-black text-sm text-purple-700 dark:text-amber-400 flex items-center justify-between">
                <span>{formatNumber(finalToAmount)}</span>
                <span className="text-xs text-slate-500">{toWallet.currency === 'IRR' ? 'تومان' : toWallet.symbol}</span>
              </div>
            </div>
          </div>

          {/* Calculation Breakdown */}
          <div className="bg-purple-50/50 dark:bg-purple-950/30 p-3 rounded-xl border border-purple-200 dark:border-purple-900/40 space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
              <span>نرخ تبدیل لحظه‌ای:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                1 {toWallet.currency} = {formatNumber(Math.round(toTomansRate))} تومان
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
              <span>کارمزد تراکنش (۰.۳٪):</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {formatNumber(feeTomans)} تومان
              </span>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={isProcessing}
              className="flex-1 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>در حال انجام تبدیل و واریز آنی...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>تایید و تبدیل آنی ارز</span>
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
      </div>
    </div>
  );
};
