import React, { useState } from 'react';
import {
  ArrowUpRight, Building2, QrCode, AlertTriangle,
  ShieldCheck, CheckCircle2, CreditCard
} from 'lucide-react';
import { UserWallet, ArzTransaction, BankAccount } from '../../types/jaheshArz';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallets: UserWallet[];
  bankAccounts?: BankAccount[];
  preselectedWallet?: UserWallet;
  onSuccessWithdraw: (walletId: string, amount: number, tx: ArzTransaction) => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  onClose,
  wallets,
  bankAccounts = [],
  preselectedWallet,
  onSuccessWithdraw,
}) => {
  const [sourceWalletId, setSourceWalletId] = useState<string>(
    preselectedWallet?.id || wallets.find((w) => w.currency === 'IRR')?.id || wallets[0]?.id || ''
  );
  const [method, setMethod] = useState<'sheba' | 'crypto'>('sheba');
  const [amount, setAmount] = useState<string>('1000000');
  const [selectedBankId, setSelectedBankId] = useState<string>(
    bankAccounts[0]?.id || 'custom'
  );
  const [shebaNumber, setShebaNumber] = useState<string>(
    bankAccounts[0]?.shebaNumber || 'IR820170000000109283748291'
  );
  const [bankAccountOwner, setBankAccountOwner] = useState<string>(
    bankAccounts[0]?.accountHolder || 'عرفان متقی'
  );
  const [cryptoAddress, setCryptoAddress] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const currentWallet = wallets.find((w) => w.id === sourceWalletId) || wallets[0];

  const handleBankSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedBankId(val);
    if (val === 'custom') {
      setShebaNumber('');
      setBankAccountOwner('');
    } else {
      const found = bankAccounts.find((b) => b.id === val);
      if (found) {
        setShebaNumber(found.shebaNumber || '');
        setBankAccountOwner(found.accountHolder || '');
      }
    }
  };

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const numAmount = Number(amount.replace(/,/g, '')) || 0;
    if (numAmount <= 0) {
      setErrorMsg('لطفاً مبلغ معتبری را وارد نمایید.');
      return;
    }

    if (numAmount > currentWallet.balance) {
      setErrorMsg(`موجودی کیف پول شما کافی نیست. موجودی فعلی: ${formatNumber(currentWallet.balance)} ${currentWallet.currency === 'IRR' ? 'تومان' : currentWallet.symbol}`);
      return;
    }

    if (method === 'sheba' && (!shebaNumber || shebaNumber.length < 10)) {
      setErrorMsg('لطفاً شماره شبا معتبر ۲۴ رقمی را وارد نمایید.');
      return;
    }

    if (method === 'crypto' && (!cryptoAddress || cryptoAddress.length < 15)) {
      setErrorMsg('لطفاً آدرس ولت مقصد را وارد نمایید.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const fee = currentWallet.currency === 'IRR' ? 5000 : 1;
      const trackingNum = `TC-WTH-${Math.floor(100000 + Math.random() * 900000)}`;

      const newTx: ArzTransaction = {
        id: `tx-${Date.now()}`,
        trackingNumber: trackingNum,
        type: 'withdraw',
        typeTitle: method === 'sheba' ? 'تسویه و برداشت به شماره شبا' : 'برداشت رمزارز (USDT)',
        currency: currentWallet.currency,
        amount: numAmount,
        fee: fee,
        finalAmount: Math.max(0, numAmount - fee),
        status: 'completed',
        statusLabel: 'تکمیل شده',
        message: method === 'sheba'
          ? `مبلغ به شماره شبا ${shebaNumber} به نام ${bankAccountOwner} با موفقیت واریز شد (پایا/ساتنا شتاب).`
          : `انتقال به آدرس ولت ${cryptoAddress} با شناسه شبکه TRON تایید گردید.`,
        createdAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        updatedAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        paymentMethod: method === 'sheba' ? 'sheba' : 'crypto_trc20',
        destinationInfo: method === 'sheba' ? `${shebaNumber} (${bankAccountOwner})` : cryptoAddress,
      };

      onSuccessWithdraw(currentWallet.id, numAmount, newTx);
      onClose();
    }, 1000);
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-white dark:bg-[#140d30] border border-purple-300 dark:border-purple-800/80 rounded-3xl p-5 sm:p-6 w-full max-w-lg shadow-2xl space-y-4 text-right my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-purple-900/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-purple-500/20 text-purple-600 dark:text-purple-300 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                برداشت وجه (تسویه حساب)
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                تسویه حساب فوری به حساب‌های بانکی عضو شتاب و ولت‌های بین‌المللی
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
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleWithdrawSubmit} className="space-y-4 text-xs">
          {/* 1. Source Wallet */}
          <div className="space-y-1.5">
            <label className="block text-slate-700 dark:text-slate-300 font-bold">
              کیف پول مبدا برای برداشت:
            </label>
            <select
              value={sourceWalletId}
              onChange={(e) => setSourceWalletId(e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800/60 rounded-xl p-2.5 text-xs text-slate-900 dark:text-white font-medium focus:outline-none focus:border-purple-500"
            >
              {wallets.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name} - موجودی: {formatNumber(w.balance)} {w.currency === 'IRR' ? 'تومان' : w.symbol}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Destination Method */}
          <div className="space-y-1.5">
            <label className="block text-slate-700 dark:text-slate-300 font-bold">
              نوع مقصد برداشت:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMethod('sheba')}
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  method === 'sheba'
                    ? 'bg-purple-100 dark:bg-purple-900/60 border-purple-500 text-purple-950 dark:text-amber-300 font-bold shadow-xs'
                    : 'bg-slate-50 dark:bg-[#1c1344] border-slate-200 dark:border-purple-900/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Building2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>شماره شبا بانکی (پایا/شتاب)</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('crypto')}
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  method === 'crypto'
                    ? 'bg-purple-100 dark:bg-purple-900/60 border-purple-500 text-purple-950 dark:text-amber-300 font-bold shadow-xs'
                    : 'bg-slate-50 dark:bg-[#1c1344] border-slate-200 dark:border-purple-900/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <QrCode className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>ولت رمزارز (USDT-TRC20)</span>
              </button>
            </div>
          </div>

          {/* 3. Amount Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                مبلغ برداشت ({currentWallet.currency === 'IRR' ? 'تومان' : currentWallet.symbol}):
              </label>
              <button
                type="button"
                onClick={() => setAmount(String(currentWallet.balance))}
                className="text-[10px] text-purple-600 dark:text-amber-400 hover:underline font-bold cursor-pointer"
              >
                کل موجودی ({formatNumber(currentWallet.balance)})
              </button>
            </div>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 text-sm font-mono font-bold text-slate-900 dark:text-white"
            />
          </div>

          {/* 4. Details Fields */}
          {method === 'sheba' ? (
            <div className="space-y-3 bg-purple-50/50 dark:bg-purple-950/30 p-3.5 rounded-2xl border border-purple-200 dark:border-purple-900/40">
              {bankAccounts.length > 0 && (
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    انتخاب از حساب‌های بانکی ذخیره‌شده:
                  </label>
                  <select
                    value={selectedBankId}
                    onChange={handleBankSelectChange}
                    className="w-full bg-white dark:bg-[#18113c] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 text-xs text-slate-900 dark:text-white font-medium focus:outline-none"
                  >
                    {bankAccounts.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.bankName} - کارت: {b.cardNumber} ({b.accountHolder})
                      </option>
                    ))}
                    <option value="custom">وارد کردن شماره شبا دلخواه دیگر...</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  شماره شبا ۲۴ رقمی مقصد (با پیش‌وند IR):
                </label>
                <input
                  type="text"
                  value={shebaNumber}
                  onChange={(e) => setShebaNumber(e.target.value)}
                  dir="ltr"
                  className="w-full bg-white dark:bg-[#18113c] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-mono text-slate-900 dark:text-amber-300 text-xs text-left"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  نام و نام خانوادگی صاحب حساب:
                </label>
                <input
                  type="text"
                  value={bankAccountOwner}
                  onChange={(e) => setBankAccountOwner(e.target.value)}
                  className="w-full bg-white dark:bg-[#18113c] border border-slate-300 dark:border-purple-800 rounded-xl p-2 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3 bg-emerald-50/50 dark:bg-emerald-950/20 p-3.5 rounded-2xl border border-emerald-200 dark:border-emerald-900/40">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  آدرس کیف پول مقصد تتر (TRON / TRC20):
                </label>
                <input
                  type="text"
                  value={cryptoAddress}
                  onChange={(e) => setCryptoAddress(e.target.value)}
                  placeholder="T..."
                  dir="ltr"
                  className="w-full bg-white dark:bg-[#18113c] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-mono text-slate-900 dark:text-emerald-300 text-xs text-left"
                />
              </div>
            </div>
          )}

          {/* Guarantee Note */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-purple-950/40 text-[11px] text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-purple-500 shrink-0" />
            <span>تسویه‌های شتابی در سریع‌ترین سیکل پایا و انتقال‌های کریپتو بلافاصله تایید می‌شوند.</span>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={isProcessing}
              className="flex-1 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-lg shadow-purple-600/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>در حال ثبت درخواست تسویه و واریز...</span>
                </>
              ) : (
                <>
                  <ArrowUpRight className="w-4 h-4" />
                  <span>تایید و تسویه وجه</span>
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
