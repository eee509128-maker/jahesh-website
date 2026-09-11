import React, { useState } from 'react';
import {
  Send, QrCode, UserCheck, ShieldCheck,
  CheckCircle2, Copy, Check, AlertCircle
} from 'lucide-react';
import { UserWallet, ArzTransaction } from '../../types/jaheshArz';
import confetti from 'canvas-confetti';

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallets: UserWallet[];
  preselectedWallet?: UserWallet;
  defaultTab?: 'send' | 'receive';
  onSuccessTransfer: (walletId: string, amount: number, tx: ArzTransaction) => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const TransferModal: React.FC<TransferModalProps> = ({
  isOpen,
  onClose,
  wallets,
  preselectedWallet,
  defaultTab = 'send',
  onSuccessTransfer,
}) => {
  const [activeTab, setActiveTab] = useState<'send' | 'receive'>(defaultTab);
  const [sourceWalletId, setSourceWalletId] = useState<string>(
    preselectedWallet?.id || wallets.find((w) => w.currency === 'IRR')?.id || wallets[0]?.id || ''
  );
  const [recipient, setRecipient] = useState<string>('erf***@gmail.com');
  const [amount, setAmount] = useState<string>('500000');
  const [notes, setNotes] = useState<string>('تسویه حساب و انتقال داخلی جهش ارز');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const currentWallet = wallets.find((w) => w.id === sourceWalletId) || wallets[0];
  const numAmount = Number(amount.replace(/,/g, '')) || 0;

  const handleSendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (numAmount <= 0) {
      setErrorMsg('لطفاً مبلغ معتبری را وارد نمایید.');
      return;
    }

    if (numAmount > currentWallet.balance) {
      setErrorMsg('موجودی کیف پول شما کافی نیست.');
      return;
    }

    if (!recipient || recipient.length < 4) {
      setErrorMsg('لطفاً ایمیل یا شماره حساب گیرنده را به درستی وارد نمایید.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const trackingNum = `TC-TRF-${Math.floor(100000 + Math.random() * 900000)}`;

      const newTx: ArzTransaction = {
        id: `tx-${Date.now()}`,
        trackingNumber: trackingNum,
        type: 'transfer_send',
        typeTitle: `ارسال داخلی (${currentWallet.currency})`,
        currency: currentWallet.currency,
        amount: numAmount,
        fee: 0,
        finalAmount: numAmount,
        status: 'completed',
        statusLabel: 'تکمیل شده',
        message: `مبلغ ${formatNumber(numAmount)} ${currentWallet.currency === 'IRR' ? 'تومان' : currentWallet.symbol} به حساب کاربری ${recipient} منتقل شد (کارمزد صفر).`,
        destinationInfo: recipient,
        createdAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        updatedAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };

      try {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      } catch {}

      onSuccessTransfer(currentWallet.id, numAmount, newTx);
      onClose();
    }, 1000);
  };

  const receiveUrl = `https://jaheshit.ir/pay/${currentWallet.accountNumber}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-white dark:bg-[#140d30] border border-purple-300 dark:border-purple-800/80 rounded-3xl p-5 sm:p-6 w-full max-w-lg shadow-2xl space-y-4 text-right my-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-purple-900/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-sky-500/20 text-sky-600 dark:text-sky-300 flex items-center justify-center">
              {activeTab === 'send' ? <Send className="w-5 h-5" /> : <QrCode className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                {activeTab === 'send' ? 'ارسال وجه داخلی (Transfer)' : 'دریافت وجه و فاکتور پرداخت'}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                انتقال آنی بین کاربران TopChange و جهش ارز بدون هیچ‌گونه کارمزد
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

        {/* Tab switch */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 dark:bg-[#1d1445] rounded-2xl">
          <button
            type="button"
            onClick={() => setActiveTab('send')}
            className={`py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              activeTab === 'send'
                ? 'bg-white dark:bg-purple-600 text-slate-950 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            ارسال وجه به کاربر
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('receive')}
            className={`py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              activeTab === 'receive'
                ? 'bg-white dark:bg-purple-600 text-slate-950 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            دریافت وجه (لینک و بارکد)
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {activeTab === 'send' ? (
          <form onSubmit={handleSendSubmit} className="space-y-4 text-xs">
            {/* Wallet Selector */}
            <div className="space-y-1.5">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                انتخاب کیف پول مبدا:
              </label>
              <select
                value={sourceWalletId}
                onChange={(e) => setSourceWalletId(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 text-xs text-slate-900 dark:text-white font-medium"
              >
                {wallets.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.name} - موجودی: {formatNumber(w.balance)} {w.currency === 'IRR' ? 'تومان' : w.symbol}
                  </option>
                ))}
              </select>
            </div>

            {/* Recipient Field */}
            <div className="space-y-1.5">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                ایمیل، شماره موبایل یا شماره حساب کاربری TC گیرنده:
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="TC-IRR-XXXXXX یا example@gmail.com"
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-mono text-slate-900 dark:text-amber-300"
              />
            </div>

            {/* Amount Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-slate-700 dark:text-slate-300 font-bold">
                  مبلغ انتقال ({currentWallet.currency === 'IRR' ? 'تومان' : currentWallet.symbol}):
                </label>
                <button
                  type="button"
                  onClick={() => setAmount(String(currentWallet.balance))}
                  className="text-[10px] text-purple-600 dark:text-amber-400 hover:underline font-bold"
                >
                  کل موجودی ({formatNumber(currentWallet.balance)})
                </button>
              </div>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-mono font-bold text-slate-900 dark:text-white"
              />
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                توضیحات و بابت (اختیاری):
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 text-slate-900 dark:text-white"
              />
            </div>

            {/* Fee badge */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 font-bold text-[11px]">
              <span>کارمزد انتقال داخلی بین کاربران جهش ارز:</span>
              <span>رایگان (۰ تومان)</span>
            </div>

            {/* Submit */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="flex-1 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-lg shadow-sky-600/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>در حال انتقال آنی...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>تایید و ارسال آنی وجه</span>
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
        ) : (
          /* Receive View */
          <div className="space-y-4 text-xs text-center py-2">
            <div className="space-y-1.5 text-right">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                کیف پول برای دریافت وجه:
              </label>
              <select
                value={sourceWalletId}
                onChange={(e) => setSourceWalletId(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 text-xs text-slate-900 dark:text-white font-medium"
              >
                {wallets.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.name} - شماره حساب: {w.accountNumber}
                  </option>
                ))}
              </select>
            </div>

            {/* QR Mock code Box */}
            <div className="mx-auto w-44 h-44 bg-white p-3 rounded-2xl border-2 border-purple-400 shadow-md flex flex-col items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-white text-[10px] p-2 text-center">
                <div className="space-y-1">
                  <QrCode className="w-16 h-16 mx-auto text-amber-400" />
                  <span className="font-mono">{currentWallet.accountNumber}</span>
                </div>
              </div>
            </div>

            <div className="space-y-1 text-right">
              <span className="text-slate-500 dark:text-slate-400 font-bold">شماره حساب اختصاصی شما برای دریافت:</span>
              <div className="flex items-center justify-between bg-slate-100 dark:bg-[#1d1445] p-2.5 rounded-xl font-mono font-bold text-slate-900 dark:text-amber-300">
                <span>{currentWallet.accountNumber}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(currentWallet.accountNumber);
                    setCopiedLink(true);
                    setTimeout(() => setCopiedLink(false), 2000);
                  }}
                  className="flex items-center gap-1 text-purple-600 dark:text-amber-400 text-xs font-sans font-bold cursor-pointer"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? 'کپی شد' : 'کپی حساب'}</span>
                </button>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              بستن
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
