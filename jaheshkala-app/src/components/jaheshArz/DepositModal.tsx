import React, { useState } from 'react';
import {
  ArrowDownLeft, CreditCard, QrCode, Ticket, CheckCircle2,
  Copy, Check, AlertCircle, ShieldCheck, Sparkles, Building
} from 'lucide-react';
import { UserWallet, CryptoOrFiatCurrency, ArzTransaction } from '../../types/jaheshArz';
import confetti from 'canvas-confetti';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallets: UserWallet[];
  preselectedWallet?: UserWallet;
  onSuccessDeposit: (walletId: string, amount: number, tx: ArzTransaction) => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const DepositModal: React.FC<DepositModalProps> = ({
  isOpen,
  onClose,
  wallets,
  preselectedWallet,
  onSuccessDeposit,
}) => {
  const [targetWalletId, setTargetWalletId] = useState<string>(
    preselectedWallet?.id || wallets.find((w) => w.currency === 'IRR')?.id || wallets[0]?.id || ''
  );
  const [method, setMethod] = useState<'gateway' | 'card' | 'crypto' | 'voucher'>('gateway');
  const [amount, setAmount] = useState<string>('2000000'); // 2,000,000 Tomans
  const [cryptoAmount, setCryptoAmount] = useState<string>('50'); // 50 USDT
  const [cardTrackingCode, setCardTrackingCode] = useState<string>('');
  const [voucherCode, setVoucherCode] = useState<string>('');
  const [voucherActCode, setVoucherActCode] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const currentWallet = wallets.find((w) => w.id === targetWalletId) || wallets[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      let numAmount = 0;
      let targetCurr = currentWallet?.currency || 'IRR';

      if (method === 'crypto') {
        numAmount = Number(cryptoAmount) || 0;
      } else if (method === 'voucher') {
        numAmount = 50; // standard voucher credit
      } else {
        numAmount = Number(amount.replace(/,/g, '')) || 0;
      }

      if (numAmount <= 0) {
        alert('لطفاً مبلغ معتبری را وارد نمایید.');
        return;
      }

      const trackingNum = `TC-DEP-${Math.floor(100000 + Math.random() * 900000)}`;
      const newTx: ArzTransaction = {
        id: `tx-${Date.now()}`,
        trackingNumber: trackingNum,
        type: 'charge',
        typeTitle: method === 'gateway' ? 'شارژ آنلاین شتابی' : method === 'card' ? 'شارژ کارت به کارت' : method === 'crypto' ? 'شارژ کریپتو (USDT)' : 'شارژ با ووچر TC',
        currency: targetCurr,
        amount: numAmount,
        fee: 0,
        finalAmount: numAmount,
        status: 'completed',
        statusLabel: 'تکمیل شده',
        message: `مبلغ ${formatNumber(numAmount)} ${targetCurr === 'IRR' ? 'تومان' : targetCurr} با موفقیت به حساب ${currentWallet.accountNumber} منظور شد.`,
        createdAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        updatedAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        paymentMethod: method === 'gateway' ? 'gateway' : method === 'card' ? 'card_to_card' : method === 'crypto' ? 'crypto_trc20' : 'voucher',
        referenceId: `REF-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      };

      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {}

      onSuccessDeposit(currentWallet.id, numAmount, newTx);
      onClose();
    }, 1000);
  };

  const quickAmounts = [1000000, 2000000, 5000000, 10000000, 20000000];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-white dark:bg-[#140d30] border border-purple-300 dark:border-purple-800/80 rounded-3xl p-5 sm:p-6 w-full max-w-lg shadow-2xl space-y-4 text-right my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-purple-900/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <ArrowDownLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                شارژ کیف پول (واریز وجه)
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                افزایش آنی موجودی کیف پول‌های جهش ارز و TopChange
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

        <form onSubmit={handleDepositSubmit} className="space-y-4 text-xs">
          {/* 1. Select Target Wallet */}
          <div className="space-y-1.5">
            <label className="block text-slate-700 dark:text-slate-300 font-bold">
              انتخاب کیف پول مقصد:
            </label>
            <select
              value={targetWalletId}
              onChange={(e) => setTargetWalletId(e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800/60 rounded-xl p-2.5 text-xs text-slate-900 dark:text-white font-medium focus:outline-none focus:border-purple-500"
            >
              {wallets.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name} - موجودی: {formatNumber(w.balance)} {w.currency === 'IRR' ? 'تومان' : w.symbol} ({w.accountNumber})
                </option>
              ))}
            </select>
          </div>

          {/* 2. Deposit Method Tabs */}
          <div className="space-y-1.5">
            <label className="block text-slate-700 dark:text-slate-300 font-bold">
              روش واریز و پرداخت:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              <button
                type="button"
                onClick={() => setMethod('gateway')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                  method === 'gateway'
                    ? 'bg-purple-100 dark:bg-purple-900/60 border-purple-500 text-purple-950 dark:text-amber-300 font-bold shadow-xs'
                    : 'bg-slate-50 dark:bg-[#1c1344] border-slate-200 dark:border-purple-900/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <CreditCard className="w-4 h-4 mb-1 text-purple-600 dark:text-purple-400" />
                <span>درگاه شتابی</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('card')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                  method === 'card'
                    ? 'bg-purple-100 dark:bg-purple-900/60 border-purple-500 text-purple-950 dark:text-amber-300 font-bold shadow-xs'
                    : 'bg-slate-50 dark:bg-[#1c1344] border-slate-200 dark:border-purple-900/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Building className="w-4 h-4 mb-1 text-blue-600 dark:text-blue-400" />
                <span>کارت به کارت</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('crypto')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                  method === 'crypto'
                    ? 'bg-purple-100 dark:bg-purple-900/60 border-purple-500 text-purple-950 dark:text-amber-300 font-bold shadow-xs'
                    : 'bg-slate-50 dark:bg-[#1c1344] border-slate-200 dark:border-purple-900/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <QrCode className="w-4 h-4 mb-1 text-emerald-600 dark:text-emerald-400" />
                <span>تتر (کریپتو)</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('voucher')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                  method === 'voucher'
                    ? 'bg-purple-100 dark:bg-purple-900/60 border-purple-500 text-purple-950 dark:text-amber-300 font-bold shadow-xs'
                    : 'bg-slate-50 dark:bg-[#1c1344] border-slate-200 dark:border-purple-900/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Ticket className="w-4 h-4 mb-1 text-amber-600 dark:text-amber-400" />
                <span>ووچر TC</span>
              </button>
            </div>
          </div>

          {/* 3. Method-Specific Fields */}
          {method === 'gateway' && (
            <div className="space-y-3 bg-purple-50/50 dark:bg-purple-950/30 p-3.5 rounded-2xl border border-purple-200 dark:border-purple-900/40">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                مبلغ شارژ (به تومان):
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white dark:bg-[#18113c] border border-purple-300 dark:border-purple-800 rounded-xl p-2.5 text-sm font-mono font-bold text-slate-900 dark:text-white focus:outline-none"
                  placeholder="مثال: 5,000,000"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">تومان</span>
              </div>

              {/* Quick Amounts */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {quickAmounts.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setAmount(String(q))}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-purple-900/40 border border-slate-200 dark:border-purple-800/40 text-[10px] text-slate-700 dark:text-purple-200 hover:border-purple-500 cursor-pointer"
                  >
                    {formatNumber(q)} تومان
                  </button>
                ))}
              </div>
            </div>
          )}

          {method === 'card' && (
            <div className="space-y-3 bg-blue-50/50 dark:bg-blue-950/20 p-3.5 rounded-2xl border border-blue-200 dark:border-blue-900/40">
              <div className="bg-white dark:bg-[#18113c] p-3 rounded-xl border border-blue-200 dark:border-blue-900/50 space-y-1">
                <div className="text-[11px] text-slate-500 dark:text-slate-400">شماره کارت صرافی جهش (بانک ملی ایران):</div>
                <div className="flex items-center justify-between font-mono font-bold text-slate-900 dark:text-amber-300 text-sm">
                  <span>6037-9975-8821-4902</span>
                  <button
                    type="button"
                    onClick={() => handleCopy('6037997588214902')}
                    className="text-slate-400 hover:text-purple-600 transition-colors"
                  >
                    {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-[10px] text-slate-500">به نام: شرکت فناوری جهش کالا (متقین)</div>
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">مبلغ واریز شده (تومان):</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white dark:bg-[#18113c] border border-slate-300 dark:border-purple-800 rounded-xl p-2 font-mono text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">کد پیگیری یا ۴ رقم آخر کارت مبدا:</label>
                <input
                  type="text"
                  value={cardTrackingCode}
                  onChange={(e) => setCardTrackingCode(e.target.value)}
                  placeholder="مثال: 984012"
                  className="w-full bg-white dark:bg-[#18113c] border border-slate-300 dark:border-purple-800 rounded-xl p-2 font-mono text-slate-900 dark:text-white"
                />
              </div>
            </div>
          )}

          {method === 'crypto' && (
            <div className="space-y-3 bg-emerald-50/50 dark:bg-emerald-950/20 p-3.5 rounded-2xl border border-emerald-200 dark:border-emerald-900/40">
              <div className="bg-white dark:bg-[#18113c] p-3 rounded-xl border border-emerald-200 dark:border-emerald-900/50 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>آدرس واریز تتر شبکه Tron (USDT-TRC20):</span>
                  <span className="text-emerald-500 font-bold font-mono">TRC-20</span>
                </div>
                <div className="flex items-center justify-between font-mono text-xs text-slate-900 dark:text-emerald-300 bg-slate-100 dark:bg-purple-950/70 p-2 rounded-lg break-all">
                  <span>TYj2sP8kH4Wq3Nm9X1vL8zR6C7bE4dF1aG</span>
                  <button
                    type="button"
                    onClick={() => handleCopy('TYj2sP8kH4Wq3Nm9X1vL8zR6C7bE4dF1aG')}
                    className="mr-2 text-slate-400 hover:text-emerald-500 shrink-0"
                  >
                    {copiedText ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">مبلغ واریزی (USDT):</label>
                <input
                  type="number"
                  value={cryptoAmount}
                  onChange={(e) => setCryptoAmount(e.target.value)}
                  className="w-full bg-white dark:bg-[#18113c] border border-slate-300 dark:border-purple-800 rounded-xl p-2 font-mono font-bold text-slate-900 dark:text-white"
                  placeholder="50"
                />
              </div>
            </div>
          )}

          {method === 'voucher' && (
            <div className="space-y-3 bg-amber-50/50 dark:bg-amber-950/20 p-3.5 rounded-2xl border border-amber-200 dark:border-amber-900/40">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">کد ۱۶ رقمی ووچر تاپ چنج:</label>
                <input
                  type="text"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  placeholder="TC-XXXX-XXXX-XXXX-XXXX"
                  className="w-full bg-white dark:bg-[#18113c] border border-slate-300 dark:border-purple-800 rounded-xl p-2 font-mono text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">کد فعالسازی (Activation Code):</label>
                <input
                  type="text"
                  value={voucherActCode}
                  onChange={(e) => setVoucherActCode(e.target.value)}
                  placeholder="۸ رقم عددی"
                  className="w-full bg-white dark:bg-[#18113c] border border-slate-300 dark:border-purple-800 rounded-xl p-2 font-mono text-slate-900 dark:text-white"
                />
              </div>
            </div>
          )}

          {/* Guarantee Note */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-purple-950/40 text-[11px] text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>شارژ حساب‌ها کاملاً آنی بوده و رسید دیجیتال بلافاصله در سوابق ذخیره می‌گردد.</span>
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={isProcessing}
              className="flex-1 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>در حال انتقال به درگاه و تایید شارژ...</span>
                </>
              ) : (
                <>
                  <ArrowDownLeft className="w-4 h-4" />
                  <span>تایید و شارژ آنی حساب</span>
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
