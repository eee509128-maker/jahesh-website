import React, { useState } from 'react';
import {
  Plus, Users, DollarSign, ShieldCheck, CheckCircle2,
  AlertCircle, ArrowDownLeft, ArrowUpRight
} from 'lucide-react';
import { P2PAdvertisement, CryptoOrFiatCurrency, UserWallet } from '../../types/jaheshArz';
import confetti from 'canvas-confetti';

interface P2PCreateAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallets: UserWallet[];
  userName: string;
  onSuccessCreateAd: (newAd: P2PAdvertisement) => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const P2PCreateAdModal: React.FC<P2PCreateAdModalProps> = ({
  isOpen,
  onClose,
  wallets,
  userName,
  onSuccessCreateAd,
}) => {
  const [type, setType] = useState<'sell' | 'buy'>('sell');
  const [currency, setCurrency] = useState<CryptoOrFiatCurrency>('USDT');
  const [pricePerUnit, setPricePerUnit] = useState<string>('89400');
  const [totalAmount, setTotalAmount] = useState<string>('500');
  const [minLimit, setMinLimit] = useState<string>('1000000');
  const [maxLimit, setMaxLimit] = useState<string>('45000000');
  const [paymentMethod, setPaymentMethod] = useState<string>('انتقال شتابی آنلاین / کارت به کارت');
  const [terms, setTerms] = useState<string>('تسویه سریع و امن در کمتر از ۵ دقیقه با تایید پیامک شتاب.');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const price = Number(pricePerUnit.replace(/,/g, '')) || 89000;
    const amount = Number(totalAmount.replace(/,/g, '')) || 100;
    const min = Number(minLimit.replace(/,/g, '')) || 500000;
    const max = Number(maxLimit.replace(/,/g, '')) || 20000000;

    const newAd: P2PAdvertisement = {
      id: `p2p-ad-${Date.now()}`,
      sellerName: userName || 'کاربر جهش ارز',
      rating: 5.0,
      completedTradesCount: 1,
      type,
      currency,
      pricePerUnit: price,
      minLimit: min,
      maxLimit: max,
      availableAmount: amount,
      paymentMethods: [paymentMethod],
      terms,
    };

    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    } catch {}

    onSuccessCreateAd(newAd);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in overflow-y-auto" dir="rtl">
      <div className="bg-[#12072e] border border-purple-500/50 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden text-right text-slate-100 my-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-[#1b0a42] p-5 sm:p-6 border-b border-purple-800/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-white">
                ثبت آگهی جدید در بازار P2P
              </h3>
              <p className="text-xs text-purple-200 mt-0.5">
                فروش مستقیم یا خرید ارز از کاربران با نرخ دلخواه و تسویه امانی امن
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-950/80 hover:bg-purple-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
          {/* Ad Type: Sell or Buy */}
          <div className="space-y-1.5">
            <label className="block text-slate-300 font-bold">نوع آگهی:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setType('sell')}
                className={`py-2.5 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  type === 'sell'
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-[#1a0e3a] text-slate-300 border border-purple-900'
                }`}
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>می‌خواهم بفروشم (آگهی فروش)</span>
              </button>
              <button
                type="button"
                onClick={() => setType('buy')}
                className={`py-2.5 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  type === 'buy'
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                    : 'bg-[#1a0e3a] text-slate-300 border border-purple-900'
                }`}
              >
                <ArrowDownLeft className="w-4 h-4" />
                <span>می‌خواهم بخرم (آگهی خرید)</span>
              </button>
            </div>
          </div>

          {/* Currency selection */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="block text-slate-300 font-bold">ارز مورد نظر:</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                className="w-full bg-[#1b103e] border border-purple-800 rounded-xl p-2.5 text-white font-medium focus:ring-1 focus:ring-purple-500"
              >
                <option value="USDT">تتر دیجیتال (USDT)</option>
                <option value="USD">دلار آمریکا (USD)</option>
                <option value="EUR">یورو (EUR)</option>
                <option value="AED">درهم امارات (AED)</option>
                <option value="TRY">لیر ترکیه (TRY)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-slate-300 font-bold">قیمت هر واحد (تومان):</label>
              <input
                type="text"
                value={pricePerUnit}
                onChange={(e) => setPricePerUnit(e.target.value)}
                className="w-full bg-[#1b103e] border border-purple-800 rounded-xl p-2.5 text-white font-mono font-bold focus:ring-1 focus:ring-purple-500 text-left"
                placeholder="مثلاً 89,400"
                required
              />
            </div>
          </div>

          {/* Amount and limits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <label className="block text-slate-300 font-bold">کل موجودی قابل معامله:</label>
              <input
                type="text"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
                className="w-full bg-[#1b103e] border border-purple-800 rounded-xl p-2.5 text-white font-mono font-bold focus:ring-1 focus:ring-purple-500 text-left"
                placeholder="500"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-slate-300 font-bold">حداقل معامله (تومان):</label>
              <input
                type="text"
                value={minLimit}
                onChange={(e) => setMinLimit(e.target.value)}
                className="w-full bg-[#1b103e] border border-purple-800 rounded-xl p-2.5 text-white font-mono focus:ring-1 focus:ring-purple-500 text-left"
                placeholder="1,000,000"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-slate-300 font-bold">حداکثر معامله (تومان):</label>
              <input
                type="text"
                value={maxLimit}
                onChange={(e) => setMaxLimit(e.target.value)}
                className="w-full bg-[#1b103e] border border-purple-800 rounded-xl p-2.5 text-white font-mono focus:ring-1 focus:ring-purple-500 text-left"
                placeholder="45,000,000"
                required
              />
            </div>
          </div>

          {/* Payment Method & Notes */}
          <div className="space-y-1.5">
            <label className="block text-slate-300 font-bold">روش‌های پرداخت پذیرفته شده:</label>
            <input
              type="text"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full bg-[#1b103e] border border-purple-800 rounded-xl p-2.5 text-white focus:ring-1 focus:ring-purple-500"
              placeholder="انتقال پایا / کارت به کارت / حساب بانکی"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-slate-300 font-bold">شرایط و توضیحات آگهی:</label>
            <textarea
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              rows={2}
              className="w-full bg-[#1b103e] border border-purple-800 rounded-xl p-2.5 text-white focus:ring-1 focus:ring-purple-500 resize-none"
              placeholder="توضیحات و شرایط مورد نظر شما..."
            />
          </div>

          <div className="pt-2 flex items-center gap-2">
            <button
              type="submit"
              className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>انتشار و فعال‌سازی آگهی P2P</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-5 rounded-2xl bg-purple-950/80 hover:bg-purple-900 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
