import React, { useState } from 'react';
import {
  Wallet, Plus, ArrowDownLeft, ArrowUpRight, ArrowRightLeft,
  Send, Ticket, Copy, Check, ShieldCheck, Sparkles, AlertCircle, RotateCcw
} from 'lucide-react';
import { UserWallet, CryptoOrFiatCurrency } from '../../types/jaheshArz';

interface WalletsManagerProps {
  wallets: UserWallet[];
  onOpenDeposit: (wallet?: UserWallet) => void;
  onOpenWithdraw: (wallet?: UserWallet) => void;
  onOpenExchange: (fromWallet?: UserWallet) => void;
  onOpenTransfer: (fromWallet?: UserWallet) => void;
  onOpenVoucher: () => void;
  onAddNewWallet: (currency: CryptoOrFiatCurrency) => void;
  onResetAllBalances?: () => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const WalletsManager: React.FC<WalletsManagerProps> = ({
  wallets,
  onOpenDeposit,
  onOpenWithdraw,
  onOpenExchange,
  onOpenTransfer,
  onOpenVoucher,
  onAddNewWallet,
  onResetAllBalances,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAddWalletModal, setShowAddWalletModal] = useState(false);
  const [selectedCurrencyToAdd, setSelectedCurrencyToAdd] = useState<CryptoOrFiatCurrency>('BTC');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Estimate total balance in Tomans (approximated)
  const totalTomans = wallets.reduce((sum, w) => {
    if (w.currency === 'IRR') return sum + w.balance;
    if (w.currency === 'USDT' || w.currency === 'USD') return sum + w.balance * 89000;
    if (w.currency === 'EUR') return sum + w.balance * 94000;
    if (w.currency === 'AED') return sum + w.balance * 24200;
    if (w.currency === 'TRY') return sum + w.balance * 2700;
    return sum;
  }, 0);

  const totalUSD = (totalTomans / 89000).toFixed(2);

  const availableCurrenciesToAdd: { code: CryptoOrFiatCurrency; name: string }[] = [
    { code: 'BTC', name: 'بیت‌کوین (Bitcoin - BTC)' },
    { code: 'CNY', name: 'یوان چین (CNY)' },
    { code: 'RUB', name: 'روبل روسیه (RUB)' },
    { code: 'GBP', name: 'پوند انگلیس (GBP)' },
  ].filter((c) => !wallets.some((w) => w.currency === c.code)) as any;

  return (
    <div className="space-y-5">
      {/* Top Total Balance Banner */}
      <div className="bg-gradient-to-r from-[#170a38] via-[#281358] to-[#12072e] border border-purple-800/60 rounded-3xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-purple-200">
              <Wallet className="w-4 h-4 text-amber-400" />
              <span>موجودی کل تخمینی حساب‌های جهش ارز (TopChange):</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-2xl sm:text-4xl font-black font-mono text-amber-300">
                {formatNumber(totalTomans)}
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-200">تومان</span>
              <span className="text-xs sm:text-sm text-purple-300 font-mono bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
                ≈ {formatNumber(Number(totalUSD))} USD
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              شامل موجودی تمامی کیف‌پول‌های فعال ریالی، دلاری، تتری و بین‌المللی
            </p>
          </div>

          {/* Quick Hub Actions */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenDeposit()}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all cursor-pointer hover:scale-105"
            >
              <ArrowDownLeft className="w-4 h-4" />
              <span>شارژ حساب</span>
            </button>

            <button
              onClick={() => onOpenWithdraw()}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-lg shadow-purple-600/20 transition-all cursor-pointer hover:scale-105"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>برداشت وجه</span>
            </button>

            <button
              onClick={() => onOpenExchange()}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer hover:scale-105"
            >
              <ArrowRightLeft className="w-4 h-4" />
              <span>تبدیل آنی</span>
            </button>

            <button
              onClick={onOpenVoucher}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-200 font-bold text-xs transition-all cursor-pointer"
            >
              <Ticket className="w-4 h-4 text-sky-300" />
              <span>ووچر TC</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Multi-Currency Wallets */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
            <span>کیف پول‌های چندارزی من</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
              ({wallets.length} کیف پول فعال)
            </span>
          </h3>

          <div className="flex items-center gap-2">
            {onResetAllBalances && (
              <button
                id="reset-all-balances-btn"
                onClick={() => {
                  if (confirm('آیا از صفر کردن کلیه موجودی‌ها، تراکنش‌ها و شروع از صفر اطمینان دارید؟')) {
                    onResetAllBalances();
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-300 hover:text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
                title="صفر کردن تمام موجودی‌ها و شروع از صفر"
              >
                <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                <span>صفر کردن موجودی‌ها (شروع از نو)</span>
              </button>
            )}

            {availableCurrenciesToAdd.length > 0 && (
              <button
                onClick={() => setShowAddWalletModal(true)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-950/80 dark:hover:bg-purple-900 border border-purple-300 dark:border-purple-800/50 text-purple-900 dark:text-purple-200 text-xs font-bold transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>ایجاد کیف پول جدید</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wallets.map((wallet) => {
            return (
              <div
                key={wallet.id}
                className="bg-white dark:bg-[#150e33] border border-slate-200 dark:border-purple-900/50 rounded-2xl p-4 shadow-sm hover:border-purple-400 dark:hover:border-purple-600/70 transition-all space-y-3.5 group"
              >
                {/* Top card info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-10 h-10 rounded-2xl ${wallet.iconBg || 'bg-purple-600'} text-white font-black text-sm flex items-center justify-center shadow-md`}
                    >
                      {wallet.symbol}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {wallet.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                          {wallet.accountNumber}
                        </span>
                        <button
                          onClick={() => handleCopy(wallet.accountNumber, wallet.id)}
                          className="text-slate-400 hover:text-purple-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
                          title="کپی شماره حساب"
                        >
                          {copiedId === wallet.id ? (
                            <Check className="w-3 h-3 text-emerald-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {wallet.isDefault && (
                    <span className="text-[10px] bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full font-bold border border-purple-200 dark:border-purple-800/40">
                      اصلی
                    </span>
                  )}
                </div>

                {/* Balance Section */}
                <div className="bg-slate-50 dark:bg-[#1d1445] p-3 rounded-xl border border-slate-100 dark:border-purple-900/30 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">موجودی در دسترس:</span>
                  <div className="text-right">
                    <span className="font-mono font-black text-sm sm:text-base text-slate-900 dark:text-emerald-400">
                      {formatNumber(wallet.balance)}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 mr-1">
                      {wallet.currency === 'IRR' ? 'تومان' : wallet.symbol}
                    </span>
                  </div>
                </div>

                {/* Action Buttons for this specific wallet */}
                <div className="grid grid-cols-4 gap-1.5 pt-1 text-[11px]">
                  <button
                    onClick={() => onOpenDeposit(wallet)}
                    className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/30 font-bold transition-colors cursor-pointer"
                  >
                    <ArrowDownLeft className="w-3.5 h-3.5 mb-0.5" />
                    <span>شارژ</span>
                  </button>

                  <button
                    onClick={() => onOpenWithdraw(wallet)}
                    className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/40 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30 font-bold transition-colors cursor-pointer"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 mb-0.5" />
                    <span>برداشت</span>
                  </button>

                  <button
                    onClick={() => onOpenExchange(wallet)}
                    className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/30 font-bold transition-colors cursor-pointer"
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5 mb-0.5" />
                    <span>تبدیل</span>
                  </button>

                  <button
                    onClick={() => onOpenTransfer(wallet)}
                    className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/30 font-bold transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 mb-0.5" />
                    <span>ارسال</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add New Wallet Modal */}
      {showAddWalletModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white dark:bg-[#150e33] border border-purple-300 dark:border-purple-700/60 rounded-3xl p-5 sm:p-6 w-full max-w-sm shadow-2xl space-y-4 text-right">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-purple-900/40 pb-3">
              <h4 className="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-purple-600 dark:text-amber-400" />
                <span>ساخت کیف پول جدید</span>
              </h4>
              <button
                onClick={() => setShowAddWalletModal(false)}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-purple-950 text-slate-500 hover:text-slate-800 dark:text-slate-300 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <label className="block text-slate-600 dark:text-slate-300 font-bold">
                انتخاب ارز مورد نظر برای افتتاح کیف پول:
              </label>

              <select
                value={selectedCurrencyToAdd}
                onChange={(e) => setSelectedCurrencyToAdd(e.target.value as any)}
                className="w-full bg-slate-100 dark:bg-[#1e1546] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 text-xs text-slate-900 dark:text-white font-medium"
              >
                {availableCurrenciesToAdd.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                افتتاح کیف پول در جهش ارز کاملاً رایگان است و شماره حساب اختصاصی TC فوری برای شما صادر خواهد شد.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  onAddNewWallet(selectedCurrencyToAdd);
                  setShowAddWalletModal(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                افتتاح و فعال‌سازی
              </button>
              <button
                onClick={() => setShowAddWalletModal(false)}
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-purple-950 dark:hover:bg-purple-900 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
