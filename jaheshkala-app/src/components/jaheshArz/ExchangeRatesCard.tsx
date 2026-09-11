import React, { useState } from 'react';
import { Search, RefreshCw, ArrowUpRight, ArrowDownRight, TrendingUp, Sparkles, ArrowRightLeft } from 'lucide-react';
import { ExchangeRateItem } from '../../types/jaheshArz';

interface ExchangeRatesSectionProps {
  rates: ExchangeRateItem[];
  onRefresh: () => void;
  isRefreshing: boolean;
  onSelectRateForExchange?: (rate: ExchangeRateItem) => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const ExchangeRatesSection: React.FC<ExchangeRatesSectionProps> = ({
  rates,
  onRefresh,
  isRefreshing,
  onSelectRateForExchange,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRates = rates.filter((r) =>
    r.nameFa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.badgeLabel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-[#130d2d] rounded-2xl border border-slate-200 dark:border-purple-900/40 p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header: Title, Search, Refresh Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-purple-900/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-700 dark:text-purple-300">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-slate-800 dark:text-white flex items-center gap-1.5">
              <span>نرخ تبدیل لحظه‌ای (TopChange)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              قیمت‌های رسمی خرید و فروش ارزهای بین‌المللی با بروزرسانی زنده
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Search bar */}
          <div className="relative flex-1 sm:w-48">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجو..."
              className="w-full bg-slate-100 dark:bg-[#1b133e] border border-slate-200 dark:border-purple-800/40 rounded-xl py-1.5 px-3 pr-8 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-[#1b133e] border border-slate-200 dark:border-purple-800/40 text-slate-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-amber-300 hover:bg-slate-200 dark:hover:bg-purple-900/60 flex items-center justify-center transition-all cursor-pointer shrink-0 disabled:opacity-50"
            title="بروزرسانی نرخ‌ها"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-purple-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Grid of Exchange Rates matching the TopChange Screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredRates.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => onSelectRateForExchange && onSelectRateForExchange(item)}
              className="group relative bg-slate-50/80 dark:bg-[#18113b]/80 hover:bg-purple-50/80 dark:hover:bg-[#20164e] border border-slate-200/80 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-600/60 rounded-2xl p-3.5 sm:p-4 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                {/* Left side: Prices & Rate indicators */}
                <div className="flex-1 space-y-2">
                  {/* Sell Price */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-slate-400 dark:text-slate-400 font-mono">IRR</span>
                      <span className="font-bold text-slate-800 dark:text-white font-mono text-xs sm:text-sm">
                        {formatNumber(item.sellPrice)}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">فروش:</span>
                  </div>

                  {/* Buy Price */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-slate-400 dark:text-slate-400 font-mono">IRR</span>
                      <span className="font-bold text-slate-800 dark:text-white font-mono text-xs sm:text-sm">
                        {formatNumber(item.buyPrice)}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">خرید:</span>
                  </div>
                </div>

                {/* Right side: TopChange Style Circular Currency Code Badge */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="relative flex items-center justify-center">
                    {/* Main Circle (IRR) */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-sky-500 text-white font-black text-[11px] flex items-center justify-center shadow-md">
                      IRR
                    </div>
                    {/* Overlapping Badge (Target currency like $, €, AED, ₺, ¥) */}
                    <div className={`absolute -bottom-1 -left-1 px-1.5 py-0.5 rounded-full ${item.badgeBg} text-white font-black text-[9px] shadow-md border-2 border-white dark:border-[#18113b]`}>
                      {item.symbol}
                    </div>
                  </div>

                  {/* 24h change indicator */}
                  <div className={`flex items-center gap-0.5 text-[10px] font-bold ${item.isUp ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'}`}>
                    {item.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    <span className="font-mono" dir="ltr">{item.change24h > 0 ? `+${item.change24h}%` : `${item.change24h}%`}</span>
                  </div>
                </div>
              </div>

              {/* Hover quick action label */}
              <div className="mt-2.5 pt-2 border-t border-slate-200/50 dark:border-purple-900/30 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-purple-300">{item.nameFa}</span>
                <span className="flex items-center gap-1 text-purple-600 dark:text-amber-400 font-bold group-hover:translate-x-[-3px] transition-transform">
                  <ArrowRightLeft className="w-3 h-3" />
                  <span>تبدیل آنی</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
