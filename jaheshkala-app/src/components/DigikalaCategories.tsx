import React, { useState } from 'react';
import {
  Layers, Flame, Percent, Sparkles, Tag, ShoppingBag, Globe, Code,
  Laptop, Smartphone, Headphones, Watch, Shirt, Coffee, BookOpen,
  HeartPulse, Wrench, Palette, Cpu, Monitor, Tv, Briefcase, Zap,
  Building2, Megaphone, Stethoscope, ShoppingCart, UtensilsCrossed,
  Car, Scale, Hammer, Search, ChevronLeft, Check, X
} from 'lucide-react';
import { Product } from '../types';
import { IRANIAN_GUILDS } from '../data/guildsData';

interface DigikalaCategoriesProps {
  products?: Product[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
  onScrollToIncredible: () => void;
}

// Map guild/category name to appropriate Lucide icon
const getGuildCategoryIcon = (name: string) => {
  const lower = name.toLowerCase();

  if (lower.includes('املاک') || lower.includes('مسکن') || lower.includes('بنگاه') || lower.includes('ساختمان')) {
    return Building2;
  }
  if (lower.includes('سایت') || lower.includes('وب') || lower.includes('نرم‌افزار') || lower.includes('برنامه‌نویسی') || lower.includes('آی‌تی') || lower.includes('دامنه') || lower.includes('هاست')) {
    return Globe;
  }
  if (lower.includes('تبلیغات') || lower.includes('مارکتینگ') || lower.includes('سئو') || lower.includes('برندینگ')) {
    return Megaphone;
  }
  if (lower.includes('پزشک') || lower.includes('دندان') || lower.includes('سلامت') || lower.includes('کلینیک') || lower.includes('درمانگاه')) {
    return Stethoscope;
  }
  if (lower.includes('سوپرمارکت') || lower.includes('هایپر') || lower.includes('مواد غذایی') || lower.includes('فروشگاه')) {
    return ShoppingCart;
  }
  if (lower.includes('رستوران') || lower.includes('کافه') || lower.includes('فست فود') || lower.includes('غذا')) {
    return UtensilsCrossed;
  }
  if (lower.includes('پوشاک') || lower.includes('لباس') || lower.includes('مد') || lower.includes('مزون') || lower.includes('کفش')) {
    return Shirt;
  }
  if (lower.includes('طلا') || lower.includes('جواهر') || lower.includes('ساعت') || lower.includes('صرافی')) {
    return Watch;
  }
  if (lower.includes('خودرو') || lower.includes('ماشین') || lower.includes('یدکی')) {
    return Car;
  }
  if (lower.includes('تعمیر') || lower.includes('مکانیکی') || lower.includes('کارواش') || lower.includes('ابزار')) {
    return Wrench;
  }
  if (lower.includes('وکالت') || lower.includes('حقوقی') || lower.includes('اسناد')) {
    return Scale;
  }
  if (lower.includes('موبایل') || lower.includes('گوشی') || lower.includes('تبلت')) {
    return Smartphone;
  }
  if (lower.includes('لپ‌تاپ') || lower.includes('کامپیوتر')) {
    return Laptop;
  }
  if (lower.includes('هدفون') || lower.includes('صوتی')) {
    return Headphones;
  }

  return Briefcase;
};

export const DigikalaCategories: React.FC<DigikalaCategoriesProps> = ({
  products = [],
  onSelectCategory,
  selectedCategory,
  onScrollToIncredible,
}) => {
  const [showAllGuildsModal, setShowAllGuildsModal] = useState(false);
  const [modalSearchQuery, setModalSearchQuery] = useState('');

  // Check if selected category is a specific guild
  const isGuildSelected = selectedCategory && selectedCategory !== 'شگفت‌انگیز' && selectedCategory !== 'پرفروش';
  const selectedGuildObj = IRANIAN_GUILDS.find(
    (g) => g.shortName === selectedCategory || g.name === selectedCategory
  );

  // 4 Primary Clean Categories as requested by user
  const mainCategories = [
    {
      id: 'all',
      name: 'همه محصولات و خدمات',
      shortTitle: 'همه کالاها',
      badge: 'کامل',
      value: '',
      icon: Layers,
      color: 'from-purple-600 via-indigo-600 to-purple-700',
      activeColor: 'ring-2 ring-purple-400 bg-purple-100 dark:bg-purple-900/60',
      action: () => onSelectCategory(''),
      isActive: selectedCategory === '',
    },
    {
      id: 'incredible',
      name: 'پیشنهاد شگفت‌انگیز',
      shortTitle: 'شگفت‌انگیز',
      badge: 'تخفیف‌دار',
      value: 'شگفت‌انگیز',
      icon: Percent,
      color: 'from-rose-500 via-red-500 to-rose-600',
      activeColor: 'ring-2 ring-rose-400 bg-rose-100 dark:bg-rose-950/60',
      action: onScrollToIncredible,
      isActive: selectedCategory === 'شگفت‌انگیز',
    },
    {
      id: 'popular',
      name: 'پرفروش‌ترین‌ها',
      shortTitle: 'پرفروش‌ها',
      badge: 'محبوب‌ترین',
      value: 'پرفروش',
      icon: Flame,
      color: 'from-amber-500 via-orange-500 to-amber-600',
      activeColor: 'ring-2 ring-amber-400 bg-amber-100 dark:bg-amber-950/60',
      action: () => onSelectCategory('پرفروش'),
      isActive: selectedCategory === 'پرفروش',
    },
    {
      id: 'guilds',
      name: 'تفکیک بر اساس اصناف',
      shortTitle: 'اصناف و مشاغل',
      badge: `${IRANIAN_GUILDS.length} صنف`,
      value: 'guilds-modal',
      icon: Building2,
      color: 'from-cyan-500 via-blue-600 to-indigo-600',
      activeColor: 'ring-2 ring-cyan-400 bg-cyan-100 dark:bg-cyan-950/60',
      action: () => setShowAllGuildsModal(true),
      isActive: Boolean(isGuildSelected),
    },
  ];

  // Filtered list for the "All Guilds" dialog
  const filteredAllGuilds = IRANIAN_GUILDS.filter((g) => {
    if (!modalSearchQuery.trim()) return true;
    const q = modalSearchQuery.trim().toLowerCase();
    return (
      g.name.toLowerCase().includes(q) ||
      g.shortName.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.suggestedKeywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  return (
    <div className="py-3">
      {/* Title Bar */}
      <div className="flex items-center justify-between mb-3 px-1 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-500 shrink-0">
            <Briefcase className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5 truncate">
              <span>دسته‌بندی و صنف‌بندی خدمات</span>
            </h3>
            <p className="text-[10px] text-slate-500 dark:text-purple-300/70 truncate hidden sm:block">
              دسترسی سریع به کالاها، خدمات شگفت‌انگیز، پرفروش و مشاغل تخصصی کشور
            </p>
          </div>
        </div>

        {/* Action Buttons in single line */}
        <div className="flex items-center gap-2 shrink-0">
          {selectedCategory && (
            <button
              onClick={() => onSelectCategory('')}
              className="h-8 px-3 rounded-full text-[11px] font-bold text-rose-600 hover:text-rose-700 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 cursor-pointer whitespace-nowrap active:scale-95 transition-all"
            >
              نمایش همه
            </button>
          )}
          <button
            onClick={() => setShowAllGuildsModal(true)}
            className="h-8 px-3 rounded-full text-[11px] font-bold text-purple-800 dark:text-amber-300 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/50 dark:hover:bg-purple-900/80 border border-purple-300 dark:border-purple-700 cursor-pointer flex items-center gap-1.5 whitespace-nowrap shadow-xs active:scale-95 transition-all"
          >
            <Search className="w-3.5 h-3.5 text-purple-600 dark:text-amber-400 shrink-0" />
            <span className="whitespace-nowrap">همه اصناف ({IRANIAN_GUILDS.length})</span>
          </button>
        </div>
      </div>

      {/* 4 Clean Primary Categories Grid (All, Incredible, Best Sellers, Guilds) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
        {mainCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={cat.action}
              className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer text-right flex items-center gap-3 relative overflow-hidden group shadow-xs hover:shadow-md active:scale-98 ${
                cat.isActive
                  ? `${cat.activeColor} border-purple-400 dark:border-amber-400/80 shadow-md`
                  : 'bg-white dark:bg-[#150d30] border-slate-200 dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-700'
              }`}
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate block">
                    {cat.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-purple-700 dark:text-amber-300/90 font-bold bg-purple-50 dark:bg-purple-950/60 px-1.5 py-0.5 rounded-md border border-purple-200 dark:border-purple-800/40 whitespace-nowrap">
                    {cat.badge}
                  </span>
                  {cat.id === 'guilds' && isGuildSelected && (
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold truncate">
                      ({selectedCategory})
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* If specific guild is selected, show an active status bar */}
      {isGuildSelected && (
        <div className="mt-3 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-purple-100 via-indigo-50 to-purple-100 dark:from-purple-950/70 dark:via-[#1c1240] dark:to-purple-950/70 border border-purple-300 dark:border-purple-700/60 flex flex-wrap items-center justify-between gap-2 shadow-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-200 dark:bg-purple-900/80 flex items-center justify-center text-purple-800 dark:text-amber-300">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-800 dark:text-slate-200">
              <span>در حال مشاهده محصولات و خدمات صنف: </span>
              <strong className="text-purple-950 dark:text-amber-300 font-black px-1.5 py-0.5 bg-purple-200/70 dark:bg-black/40 rounded-lg">
                {selectedCategory}
              </strong>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAllGuildsModal(true)}
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white cursor-pointer shadow-xs transition-colors"
            >
              تغییر صنف
            </button>
            <button
              onClick={() => onSelectCategory('')}
              className="px-2 py-1 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white cursor-pointer"
            >
              ✕ حذف فیلتر
            </button>
          </div>
        </div>
      )}

      {/* All Guilds Modal Dialog (کدام صنف یا شغل مد نظر شماست؟) */}
      {showAllGuildsModal && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-3 sm:p-4 flex min-h-full items-center justify-center animate-in fade-in"
          dir="rtl"
        >
          <div className="relative bg-white dark:bg-[#150e33] border border-purple-200 dark:border-purple-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] my-auto">
            
            {/* Modal Header */}
            <div className="p-4 bg-purple-50 dark:bg-[#1a1139] border-b border-purple-200 dark:border-purple-900 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-900/60 flex items-center justify-center text-purple-700 dark:text-amber-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">
                    کدام صنف یا شغل مد نظر شماست؟
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-purple-300/70">
                    صنف کاری خود را انتخاب کنید تا خدمات، سایت‌ها و محصولات متناسب با آن تفکیک شوند
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAllGuildsModal(false)}
                className="w-8 h-8 rounded-full bg-purple-100 hover:bg-rose-500 hover:text-white text-purple-900 dark:bg-purple-950 dark:text-slate-300 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-3 bg-purple-50/50 dark:bg-black/30 border-b border-purple-100 dark:border-purple-900/60">
              <div className="relative">
                <Search className="w-4 h-4 text-purple-500 absolute right-3 top-3" />
                <input
                  type="text"
                  dir="rtl"
                  value={modalSearchQuery}
                  onChange={(e) => setModalSearchQuery(e.target.value)}
                  placeholder="جستجو در بین اصناف (املاک، طراحی سایت، پزشکی، رستوران، پوشاک، طلا، خودرو...)"
                  className="w-full bg-white dark:bg-black/60 border border-purple-200 dark:border-purple-800 rounded-xl pr-9 pl-4 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 shadow-xs"
                />
              </div>
            </div>

            {/* Guilds Grid */}
            <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 custom-scrollbar">
              {filteredAllGuilds.map((g) => {
                const IconComp = getGuildCategoryIcon(g.shortName);
                const isCurrent = selectedCategory === g.shortName;
                return (
                  <div
                    key={g.id}
                    onClick={() => {
                      onSelectCategory(g.shortName);
                      setShowAllGuildsModal(false);
                    }}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 text-right ${
                      isCurrent
                        ? 'bg-purple-100/90 dark:bg-amber-400/20 border-purple-400 dark:border-amber-400/60 ring-1 ring-purple-400'
                        : 'bg-purple-50/40 dark:bg-[#1c1242] border-purple-100 dark:border-purple-800/60 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-700 dark:text-amber-300 shrink-0 shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {g.name}
                        </span>
                        {isCurrent && <Check className="w-4 h-4 text-purple-700 dark:text-amber-400 shrink-0" />}
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-purple-300/70 line-clamp-2 mt-0.5 leading-relaxed">
                        {g.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-purple-50 dark:bg-[#1a1139] border-t border-purple-200 dark:border-purple-900 flex items-center justify-between">
              <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                تعداد کل اصناف: {filteredAllGuilds.length} صنف
              </span>
              <button
                onClick={() => {
                  onSelectCategory('');
                  setShowAllGuildsModal(false);
                }}
                className="text-xs font-bold text-rose-600 dark:text-rose-300 hover:underline cursor-pointer"
              >
                نمایش همه محصولات (حذف فیلتر صنف)
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
