import React, { useState } from 'react';
import { RefreshCw, Eye, CheckCircle2, Clock, XCircle, AlertCircle, FileText, ChevronLeft } from 'lucide-react';
import { ArzTransaction } from '../../types/jaheshArz';

interface ActiveRequestsLedgerProps {
  transactions: ArzTransaction[];
  onRefresh: () => void;
  isRefreshing: boolean;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const ActiveRequestsLedger: React.FC<ActiveRequestsLedgerProps> = ({
  transactions,
  onRefresh,
  isRefreshing,
}) => {
  const [selectedTx, setSelectedTx] = useState<ArzTransaction | null>(null);

  const getStatusBadge = (status: ArzTransaction['status'], label: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/40">
            <CheckCircle2 className="w-3 h-3" />
            <span>{label || 'تکمیل شده'}</span>
          </span>
        );
      case 'processing':
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800/40">
            <Clock className="w-3 h-3" />
            <span>{label || 'در حال پردازش'}</span>
          </span>
        );
      case 'rejected':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-300 dark:border-rose-800/40">
            <XCircle className="w-3 h-3" />
            <span>{label || 'لغو شده'}</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-[#130d2d] rounded-2xl border border-slate-200 dark:border-purple-900/40 p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header matching TopChange */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-purple-900/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-700 dark:text-purple-300">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
              <span>درخواست‌های فعال و گردش حساب</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                ({transactions.length} تراکنش ثبت‌شده)
              </span>
            </h3>
          </div>
        </div>

        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-[#1b133e] border border-slate-200 dark:border-purple-800/40 text-slate-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-amber-300 hover:bg-slate-200 dark:hover:bg-purple-900/60 flex items-center justify-center transition-all cursor-pointer shrink-0 disabled:opacity-50"
          title="بروزرسانی لیست"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-purple-500' : ''}`} />
        </button>
      </div>

      {/* Transactions Table / List (Desktop Table + Mobile Cards) */}
      {transactions.length === 0 ? (
        <div className="py-12 text-center text-slate-400 dark:text-slate-500 text-xs">
          هنوز هیچ درخواستی ثبت نشده است. با شارژ یا تبدیل ارز اولین تراکنش خود را آغاز کنید.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-purple-900/50 text-slate-500 dark:text-slate-400 font-bold">
                <th className="py-2.5 px-3">شماره پیگیری</th>
                <th className="py-2.5 px-3">نوع و مبلغ</th>
                <th className="py-2.5 px-3 hidden md:table-cell">زمان ثبت / تغییر</th>
                <th className="py-2.5 px-3">وضعیت</th>
                <th className="py-2.5 px-3 hidden lg:table-cell">پیام سیستم</th>
                <th className="py-2.5 px-3 text-center">مشاهده</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-purple-900/30">
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-[#1b133e]/50 transition-colors"
                >
                  {/* Tracking Number */}
                  <td className="py-3 px-3 font-mono font-bold text-slate-800 dark:text-purple-200">
                    {tx.trackingNumber}
                  </td>

                  {/* Type & Amount */}
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>{tx.typeTitle}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      {formatNumber(tx.amount)} {tx.currency === 'IRR' ? 'تومان' : tx.currency}
                      {tx.targetCurrency && (
                        <span className="text-purple-600 dark:text-amber-400">
                          {' '}→ {formatNumber(tx.targetAmount || 0)} {tx.targetCurrency}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Time */}
                  <td className="py-3 px-3 hidden md:table-cell text-slate-500 dark:text-slate-400 text-[11px]">
                    {tx.updatedAt || tx.createdAt}
                  </td>

                  {/* Status */}
                  <td className="py-3 px-3">
                    {getStatusBadge(tx.status, tx.statusLabel)}
                  </td>

                  {/* Message */}
                  <td className="py-3 px-3 hidden lg:table-cell text-slate-600 dark:text-slate-300 max-w-xs truncate text-[11px]">
                    {tx.message}
                  </td>

                  {/* Details Button */}
                  <td className="py-3 px-3 text-center">
                    <button
                      onClick={() => setSelectedTx(tx)}
                      className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40 transition-colors cursor-pointer"
                      title="مشاهده جزئیات تراکنش"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Transaction Details Modal */}
      {selectedTx && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white dark:bg-[#150e33] border border-purple-300 dark:border-purple-700/60 rounded-3xl p-5 sm:p-6 w-full max-w-md shadow-2xl space-y-4 text-right">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-purple-900/40 pb-3">
              <h4 className="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-600 dark:text-amber-400" />
                <span>رسید رسمی تراکنش TopChange</span>
              </h4>
              <button
                onClick={() => setSelectedTx(null)}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-purple-950 text-slate-500 hover:text-slate-800 dark:text-slate-300 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-purple-900/20">
                <span className="text-slate-500 dark:text-slate-400">شماره پیگیری سیستم:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-amber-300">{selectedTx.trackingNumber}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-purple-900/20">
                <span className="text-slate-500 dark:text-slate-400">نوع عملیات:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedTx.typeTitle}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-purple-900/20">
                <span className="text-slate-500 dark:text-slate-400">مبلغ درخواست:</span>
                <span className="font-mono font-black text-slate-900 dark:text-emerald-400 text-sm">
                  {formatNumber(selectedTx.amount)} {selectedTx.currency === 'IRR' ? 'تومان' : selectedTx.currency}
                </span>
              </div>

              {selectedTx.targetAmount && (
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-purple-900/20">
                  <span className="text-slate-500 dark:text-slate-400">مبلغ نهایی دریافت شده:</span>
                  <span className="font-mono font-black text-purple-600 dark:text-amber-300 text-sm">
                    {formatNumber(selectedTx.targetAmount)} {selectedTx.targetCurrency}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-purple-900/20">
                <span className="text-slate-500 dark:text-slate-400">کارمزد خدمات:</span>
                <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                  {selectedTx.fee === 0 ? 'رایگان (۰ تومان)' : `${formatNumber(selectedTx.fee)} تومان`}
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-purple-900/20">
                <span className="text-slate-500 dark:text-slate-400">وضعیت تراکنش:</span>
                <div>{getStatusBadge(selectedTx.status, selectedTx.statusLabel)}</div>
              </div>

              {selectedTx.destinationInfo && (
                <div className="py-1.5 border-b border-slate-100 dark:border-purple-900/20">
                  <div className="text-slate-500 dark:text-slate-400 mb-1">اطلاعات مقصد / شبای واریزی:</div>
                  <div className="font-mono text-[11px] bg-slate-100 dark:bg-purple-950/80 p-2 rounded-xl text-slate-800 dark:text-purple-200 break-all">
                    {selectedTx.destinationInfo}
                  </div>
                </div>
              )}

              <div className="py-1.5">
                <div className="text-slate-500 dark:text-slate-400 mb-1">پیام و گزارش تراکنش:</div>
                <div className="text-xs bg-slate-50 dark:bg-purple-950/40 p-2.5 rounded-xl text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-purple-900/40 leading-relaxed">
                  {selectedTx.message}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedTx(null)}
              className="w-full py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-md"
            >
              بستن رسید
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
