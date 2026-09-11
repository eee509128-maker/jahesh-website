import React, { useState } from 'react';
import {
  ShieldCheck, CheckCircle2, Copy, Check, Printer,
  Share2, ArrowDownLeft, ArrowUpRight, ArrowRightLeft, Send, Ticket
} from 'lucide-react';
import { ArzTransaction } from '../../types/jaheshArz';

interface TransactionReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: ArzTransaction | null;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const TransactionReceiptModal: React.FC<TransactionReceiptModalProps> = ({
  isOpen,
  onClose,
  transaction,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !transaction) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(transaction.trackingNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCompleted = transaction.status === 'completed';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in overflow-y-auto" dir="rtl">
      <div className="bg-[#12072e] border border-purple-500/50 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden text-right text-slate-100 my-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-[#1b0a42] p-5 sm:p-6 border-b border-purple-800/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl ${isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'} flex items-center justify-center font-black`}>
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-base text-white">رسید الکترونیکی تراکنش</h3>
              <p className="text-xs text-purple-200 mt-0.5 font-mono">
                {transaction.trackingNumber}
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

        {/* Receipt Body */}
        <div className="p-5 sm:p-6 space-y-4 text-xs">
          <div className="text-center py-2 border-b border-purple-900/40">
            <div className="text-2xl sm:text-3xl font-black font-mono text-amber-300">
              {formatNumber(transaction.amount)} {transaction.currency === 'IRR' ? 'تومان' : transaction.currency}
            </div>
            <div className="text-xs text-slate-300 mt-1 font-medium">{transaction.typeTitle}</div>
          </div>

          <div className="bg-[#1a0e3a] border border-purple-900/50 rounded-2xl p-4 space-y-3 font-mono">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">کد پیگیری تاپ‌چنج:</span>
              <div className="flex items-center gap-1.5 font-bold text-white">
                <span>{transaction.trackingNumber}</span>
                <button
                  onClick={handleCopy}
                  className="text-purple-400 hover:text-amber-400 cursor-pointer"
                  title="کپی کد پیگیری"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">وضعیت تراکنش:</span>
              <span className="text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-[11px]">
                {transaction.statusLabel}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">کارمزد انتقال/تبدیل:</span>
              <span className="text-slate-200">{transaction.fee === 0 ? 'رایگان (۰ تومان)' : `${formatNumber(transaction.fee)} تومان`}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">تاریخ و زمان ثبت:</span>
              <span className="text-slate-200">{transaction.createdAt}</span>
            </div>

            {transaction.referenceId && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">شماره مرجع شاپرک:</span>
                <span className="text-slate-200">{transaction.referenceId}</span>
              </div>
            )}
          </div>

          <div className="text-slate-300 leading-relaxed bg-[#160a33] p-3 rounded-xl border border-purple-900/30 text-[11px]">
            {transaction.message}
          </div>

          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>چاپ رسید تراکنش</span>
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 rounded-2xl bg-purple-950/80 hover:bg-purple-900 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
