import React, { useState } from 'react';
import {
  Users, Plus, ArrowUpDown, Star, ShieldCheck,
  CheckCircle2, DollarSign, Filter, Search
} from 'lucide-react';
import { P2PAdvertisement, CryptoOrFiatCurrency } from '../../types/jaheshArz';

interface P2PViewProps {
  ads: P2PAdvertisement[];
  onOpenCreateAd: () => void;
  onSelectTrade: (ad: P2PAdvertisement) => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const P2PView: React.FC<P2PViewProps> = ({
  ads,
  onOpenCreateAd,
  onSelectTrade,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'sell' | 'buy'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAds = ads.filter((ad) => {
    if (filterType !== 'all' && ad.type !== filterType) return false;
    if (searchQuery) {
      return (
        ad.sellerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ad.currency.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  return (
    <div className="bg-white dark:bg-[#130d2d] rounded-3xl border border-slate-200 dark:border-purple-900/40 p-5 space-y-4 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-purple-900/30 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <span>بازار همتا به همتا (TopChange P2P)</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">
                ضمانت امانی امن جهش
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              خرید و فروش مستقیم ارز و تتر بین کاربران با نرخ‌های رقابتی و تسویه تضمینی
            </p>
          </div>
        </div>

        <button
          onClick={onOpenCreateAd}
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>ثبت آگهی خرید/فروش</span>
        </button>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-[#1b133e] p-1 rounded-2xl">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-white dark:bg-purple-600 text-slate-950 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            همه آگهی‌ها
          </button>
          <button
            onClick={() => setFilterType('sell')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterType === 'sell'
                ? 'bg-emerald-500 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            فروشندگان ارز (خرید شما)
          </button>
          <button
            onClick={() => setFilterType('buy')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterType === 'buy'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            خریداران ارز (فروش شما)
          </button>
        </div>

        <div className="relative sm:w-60">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجوی فروشنده یا ارز..."
            className="w-full bg-slate-50 dark:bg-[#1b133e] border border-slate-200 dark:border-purple-800/40 rounded-xl py-2 px-3 pr-8 text-xs text-slate-900 dark:text-white"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Grid of P2P ads */}
      <div className="space-y-3">
        {filteredAds.map((ad) => (
          <div
            key={ad.id}
            className="bg-slate-50/90 dark:bg-[#160f38] border border-slate-200 dark:border-purple-900/50 hover:border-purple-400 rounded-2xl p-4 transition-all flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"
          >
            {/* Seller info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-amber-400 font-black text-sm flex items-center justify-center">
                {ad.sellerName.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {ad.sellerName}
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] text-amber-500 font-bold bg-amber-50 dark:bg-amber-950/50 px-1.5 py-0.5 rounded-md">
                    <Star className="w-3 h-3 fill-amber-500" />
                    <span>{ad.sellerRating}%</span>
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {formatNumber(ad.completedTrades)} معامله موفق • زمان پاسخگویی: ۲ دقیقه
                </div>
              </div>
            </div>

            {/* Price & Limits */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-slate-400 text-[10px] block">نرخ واحد:</span>
                <span className="font-mono font-black text-slate-900 dark:text-amber-400 text-sm">
                  {formatNumber(ad.rate)} تومان
                </span>
              </div>

              <div>
                <span className="text-slate-400 text-[10px] block">موجودی در دسترس:</span>
                <span className="font-mono font-bold text-slate-800 dark:text-white">
                  {formatNumber(ad.availableAmount)} {ad.currency}
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 text-[10px] block">روش‌های تسویه:</span>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {ad.paymentMethods.map((m, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] bg-slate-200 dark:bg-purple-950 text-slate-700 dark:text-purple-300 px-1.5 py-0.5 rounded"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onSelectTrade(ad)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer shrink-0 ${
                ad.type === 'sell'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-rose-600 hover:bg-rose-700 text-white'
              }`}
            >
              {ad.type === 'sell' ? `خرید ${ad.currency}` : `فروش ${ad.currency}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
