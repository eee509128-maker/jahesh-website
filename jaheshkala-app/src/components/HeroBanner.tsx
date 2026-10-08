import React from 'react';
import { Search, Sparkles, Globe, Server, TrendingUp, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';

interface HeroBannerProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  categories: string[];
  onScrollToGolden: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  categories,
  onScrollToGolden,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#110b27] via-[#090714] to-[#090714] border-b border-purple-900/30 pt-10 pb-12">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-12 left-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Chip */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-600/40 text-purple-200 text-xs shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-bold text-amber-300">جشنواره ویژه راه‌اندازی کسب‌وکار اینترنتی جهش</span>
            <span className="text-purple-400">|</span>
            <span className="text-slate-300">دامنه + هاست هدیه رایگان</span>
          </div>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            سفارش طراحی سایت اختصاصی،
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              با ضمانت رتبه ۱ گوگل و دامنه هدیه
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            سامانه تخصصی فروش پکیج‌های توسعه وب، سئو و هوش مصنوعی تیم مهندسی انجمن علمی جهش. 
            تحویل سریع ۵ روزه، اتصال به درگاه زیبال و تضمین رشد واقعی کسب‌وکار شما.
          </p>

          {/* Quick Action Highlights Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10 text-right">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-950/40 border border-purple-800/40 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-900/50 flex items-center justify-center text-amber-400 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">دامنه رایگان دلخواه</h4>
                <p className="text-[11px] text-slate-400">ثبت با هر نامی که شما انتخاب کنید</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-950/40 border border-purple-800/40 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-900/50 flex items-center justify-center text-purple-400 shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">هاست ۱ ماهه رایگان</h4>
                <p className="text-[11px] text-slate-400">سرور ابری فوق پرسرعت NVMe</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-950/40 border border-purple-800/40 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-900/50 flex items-center justify-center text-emerald-400 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">رتبه ۱ سئو در سرچ گوگل</h4>
                <p className="text-[11px] text-slate-400">بهینه‌سازی کامل با Search Console</p>
              </div>
            </div>
          </div>

          {/* Search Bar & Main CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto mb-8">
            <div className="relative w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
              <input
                id="search-input"
                type="text"
                placeholder="جستجو در پکیج‌ها (مثلاً: پکیج طلایی، فروشگاه، سئو...)"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-[#140f2e] border border-purple-800/60 rounded-2xl pr-12 pl-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-1 bg-purple-950 rounded-lg"
                >
                  پاک کردن
                </button>
              )}
            </div>

            <button
              onClick={onScrollToGolden}
              className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-6 py-3.5 rounded-2xl shadow-xl shadow-amber-600/20 hover:scale-105 active:scale-95 transition-all text-sm"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>مشاهده پکیج طلایی</span>
              <ArrowLeft className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            <button
              onClick={() => onSelectCategory('همه')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'همه'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 border border-purple-400/50'
                  : 'bg-[#140e2b] text-slate-300 hover:bg-purple-950/60 border border-purple-900/40'
              }`}
            >
              همه خدمات جهش
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 border border-purple-400/50'
                    : 'bg-[#140e2b] text-slate-300 hover:bg-purple-950/60 border border-purple-900/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
