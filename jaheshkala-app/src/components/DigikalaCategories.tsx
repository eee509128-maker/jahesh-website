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

  // Extract unique categories from actual products in store
  const productCategories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );

  // Standard high-priority filters
  const standardFilters = [
    {
      id: 'all',
      name: 'همه اصناف و کالاها',
      value: '',
      icon: Layers,
      color: 'from-purple-600 to-indigo-600',
      action: () => onSelectCategory(''),
    },
    {
      id: 'incredible',
      name: 'شگفت‌انگیزها',
      value: 'شگفت‌انگیز',
      icon: Percent,
      color: 'from-rose-600 to-red-600',
      action: onScrollToIncredible,
    },
    {
      id: 'popular',
      name: 'پرفروش‌ترین‌ها',
      value: 'پرفروش',
      icon: Flame,
      color: 'from-amber-500 to-orange-500',
      action: () => onSelectCategory('پرفروش'),
    },
  ];

  // Prominent Popular Guilds to show in the carousel
  const topGuilds = IRANIAN_GUILDS.filter((g) => g.isPopular).map((g) => ({
    id: g.id,
    name: g.shortName,
    value: g.shortName,
    icon: getGuildCategoryIcon(g.shortName),
    color: g.color,
    action: () => onSelectCategory(g.shortName),
  }));

  // Extra dynamic categories that exist on products but aren't explicitly in top guilds
  const extraProductCategoryItems = productCategories
    .filter((cat) => !topGuilds.some((tg) => tg.value === cat || tg.name === cat))
    .map((cat, idx) => ({
      id: `prod-cat-${idx}`,
      name: cat,
      value: cat,
      icon: getGuildCategoryIcon(cat),
      color: 'from-cyan-500 to-blue-600',
      action: () => onSelectCategory(cat),
    }));

  const carouselItems = [...standardFilters, ...topGuilds, ...extraProductCategoryItems];

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
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-500">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5">
              <span>صنف‌بندی و تفکیک خدمات اصناف</span>
            </h3>
            <p className="text-[10px] text-slate-500 dark:text-purple-300/70">
              خدمات، سایت‌ها و راهکارهای تخصصی ویژه اصناف و کسب‌وکارهای کشور
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {selectedCategory && (
            <button
              onClick={() => onSelectCategory('')}
              className="text-[11px] text-rose-600 hover:text-rose-700 font-bold bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-800/60 cursor-pointer"
            >
              نمایش همه
            </button>
          )}
          <button
            onClick={() => setShowAllGuildsModal(true)}
            className="text-[11px] text-purple-700 dark:text-amber-300 font-bold bg-purple-100/80 dark:bg-purple-900/50 hover:bg-purple-200 px-2.5 py-1 rounded-full border border-purple-300 dark:border-purple-700 cursor-pointer flex items-center gap-1"
          >
            <Search className="w-3 h-3" />
            <span>همه اصناف ({IRANIAN_GUILDS.length})</span>
          </button>
        </div>
      </div>

      {/* Story-like Circular Guild Items with unique icons */}
      <div className="flex items-center gap-3.5 sm:gap-4 overflow-x-auto pb-2 scrollbar-none snap-x w-full">
        {carouselItems.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedCategory === item.value;
          return (
            <button
              key={item.id}
              onClick={item.action}
              className="flex flex-col items-center gap-1.5 group shrink-0 cursor-pointer snap-start"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-0.5 bg-gradient-to-tr ${
                  isSelected
                    ? 'from-amber-400 to-yellow-300 ring-2 ring-amber-400/80 shadow-amber-500/30 shadow-lg scale-105'
                    : item.color
                } group-hover:scale-105 transition-all shadow-md flex items-center justify-center`}
              >
                <div className="w-full h-full bg-[#1b1038] preserve-contrast dark-surface rounded-[14px] flex items-center justify-center group-hover:bg-[#25174e] transition-colors shadow-inner">
                  <Icon
                    className={`w-6 h-6 ${
                      isSelected ? 'text-amber-300' : 'text-white'
                    } group-hover:text-amber-300 transition-colors drop-shadow-sm`}
                    style={{ color: isSelected ? '#fcd34d' : '#ffffff' }}
                  />
                </div>
              </div>
              <span
                className={`text-[11px] max-w-[85px] sm:max-w-[95px] text-center truncate transition-colors ${
                  isSelected ? 'text-amber-600 dark:text-amber-300 font-black' : 'text-slate-800 dark:text-slate-200 font-bold'
                }`}
              >
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* All Guilds Modal Dialog */}
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
                    صنف‌بندی و دسته‌بندی مشاغل جهش‌کالا
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-purple-300/70">
                    صنف مورد نظر خود را انتخاب کنید تا خدمات و محصولات متناسب با آن نمایش داده شود
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
                  placeholder="جستجو در بین اصناف (مثلاً: املاک، پزشکی، پوشاک، رستوران، خودرو، وکالت...)"
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
                تعداد اصناف فعال: {filteredAllGuilds.length} صنف
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
