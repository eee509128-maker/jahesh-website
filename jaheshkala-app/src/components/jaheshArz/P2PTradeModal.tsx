import React, { useState } from 'react';
import {
  Users, DollarSign, ShieldCheck, CheckCircle2,
  AlertCircle, ArrowRightLeft, Star, Clock, Check
} from 'lucide-react';
import { P2PAdvertisement, UserWallet, ArzTransaction } from '../../types/jaheshArz';
import confetti from 'canvas-confetti';

interface P2PTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  ad: P2PAdvertisement | null;
  wallets: UserWallet[];
  userName: string;
  onSuccessTrade: (tx: ArzTransaction, updatedWalletBalance?: { walletId: string; newBalance: number }) => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const P2PTradeModal: React.FC<P2PTradeModalProps> = ({
  isOpen,
  onClose,
  ad,
  wallets,
  userName,
  onSuccessTrade,
}) => {
  const [tradeAmount, setTradeAmount] = useState<string>('100');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen || !ad) return null;

  const isBuying = ad.type === 'sell'; // If ad is sell, user is buying
  const numAmount = Number(tradeAmount.replace(/,/g, '')) || 0;
  const totalPriceTomans = numAmount * ad.pricePerUnit;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (numAmount <= 0) {
      alert('لطفاً مقدار معتبری وارد فرمایید.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);

      const newTx: ArzTransaction = {
        id: `tx-p2p-${Date.now()}`,
        trackingNumber: `TC-P2P-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'transfer',
        typeTitle: isBuying ? `خرید P2P از ${ad.sellerName}` : `فروش P2P به ${ad.sellerName}`,
        currency: ad.currency,
        amount: numAmount,
        fee: 0,
        finalAmount: numAmount,
        status: 'completed',
        statusLabel: 'معامله موفق امانی',
        message: `معامله P2P به ارزش ${formatNumber(totalPriceTomans)} تومان با موفقیت در بستر امن جهش انجام شد.`,
        createdAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        updatedAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };

      try {
        confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
      } catch {}

      onSuccessTrade(newTx);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in overflow-y-auto" dir="rtl">
      <div className="bg-[#12072e] border border-purple-500/50 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden text-right text-slate-100 my-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-[#1b0a42] p-5 sm:p-6 border-b border-purple-800/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl ${isBuying ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'} flex items-center justify-center font-black`}>
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-base text-white">
                {isBuying ? `خرید ${ad.currency} از ${ad.sellerName}` : `فروش ${ad.currency} به ${ad.sellerName}`}
              </h3>
              <div className="flex items-center gap-2 mt-0.5 text-xs text-purple-200">
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>{ad.rating}</span>
                </span>
                <span>• {ad.completedTradesCount} معامله موفق</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-950/80 hover:bg-purple-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4 text-xs">
          {isDone ? (
            <div className="text-center space-y-4 py-3">
              <div className="w-14 h-14 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-base text-white">معامله با موفقیت تکمیل شد!</h4>
                <p className="text-xs text-slate-300 mt-1">
                  مبلغ {formatNumber(numAmount)} {ad.currency} به حساب شما منظور گردید.
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs transition-colors cursor-pointer"
              >
                تایید و بازگشت
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Ad terms box */}
              <div className="bg-[#1a0e3a] border border-purple-900/60 rounded-2xl p-3.5 space-y-2 text-slate-300">
                <div className="flex items-center justify-between">
                  <span>قیمت هر واحد:</span>
                  <span className="font-mono font-bold text-amber-300 text-sm">
                    {formatNumber(ad.pricePerUnit)} تومان
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>محدوده سفارش:</span>
                  <span className="font-mono text-[11px] text-slate-300">
                    {formatNumber(ad.minLimit)} تا {formatNumber(ad.maxLimit)} تومان
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>حداکثر موجودی:</span>
                  <span className="font-mono text-[11px] text-emerald-400 font-bold">
                    {formatNumber(ad.availableAmount)} {ad.currency}
                  </span>
                </div>
              </div>

              {/* Amount input */}
              <div className="space-y-1.5">
                <label className="block text-slate-300 font-bold">
                  مقدار مورد نظر برای {isBuying ? 'خرید' : 'فروش'} ({ad.currency}):
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(e.target.value)}
                    className="w-full bg-[#1b103e] border border-purple-800 rounded-xl p-3 text-white font-mono font-bold text-sm focus:ring-1 focus:ring-purple-500 text-left pl-14"
                    placeholder="100"
                    required
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 font-mono font-bold text-xs">
                    {ad.currency}
                  </span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-2xl p-3.5 flex items-center justify-between text-xs">
                <span className="text-emerald-300 font-bold">مبلغ نهایی پرداختی:</span>
                <span className="font-mono font-black text-amber-300 text-sm sm:text-base">
                  {formatNumber(totalPriceTomans)} تومان
                </span>
              </div>

              {/* Escrow guarantee info */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-[#160a33] p-2.5 rounded-xl border border-purple-900/40">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ارز در سپرده امانی جهش بلوکه شده و پس از واریز آزاد می‌شود.</span>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`flex-1 py-3.5 rounded-2xl font-black text-xs transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2 ${
                    isBuying
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white'
                      : 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 text-white'
                  }`}
                >
                  {isProcessing ? 'در حال ثبت و تسویه امن...' : isBuying ? `خرید قطعی ${numAmount} ${ad.currency}` : `فروش قطعی ${numAmount} ${ad.currency}`}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3.5 px-5 rounded-2xl bg-purple-950/80 hover:bg-purple-900 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  انصراف
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
