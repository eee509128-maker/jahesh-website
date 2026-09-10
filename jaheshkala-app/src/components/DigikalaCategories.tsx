import React from 'react';
import {
  Layers, Flame, Percent, Sparkles, Tag, ShoppingBag, Globe, Code,
  Laptop, Smartphone, Headphones, Watch, Shirt, Coffee, BookOpen,
  HeartPulse, Wrench, Palette, Cpu, Monitor, Tv, Briefcase, Zap
} from 'lucide-react';
import { Product } from '../types';

interface DigikalaCategoriesProps {
  products?: Product[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
  onScrollToIncredible: () => void;
}

// Smart icon mapper for categories based on category name
const getCategoryIcon = (name: string, index: number) => {
  const lower = name.toLowerCase();
  
  if (lower.includes('سایت') || lower.includes('وب') || lower.includes('طراحی') || lower.includes('دامنه') || lower.includes('هاست')) {
    return Globe;
  }
  if (lower.includes('برنامه‌نویسی') || lower.includes('کد') || lower.includes('نرم‌افزار')) {
    return Code;
  }
  if (lower.includes('موبایل') || lower.includes('گوشی') || lower.includes('تبلت')) {
    return Smartphone;
  }
  if (lower.includes('لپ‌تاپ') || lower.includes('کامپیوتر') || lower.includes('سیستم')) {
    return Laptop;
  }
  if (lower.includes('دیجیتال') || lower.includes('سخت‌افزار') || lower.includes('قطعات')) {
    return Cpu;
  }
  if (lower.includes('هدفون') || lower.includes('صوتی') || lower.includes('موزیک') || lower.includes('اسپیکر')) {
    return Headphones;
  }
  if (lower.includes('ساعت') || lower.includes('گجت') || lower.includes('دستبند')) {
    return Watch;
  }
  if (lower.includes('پوشاک') || lower.includes('لباس') || lower.includes('کفش') || lower.includes('مد')) {
    return Shirt;
  }
  if (lower.includes('لوازم خانگی') || lower.includes('خانه') || lower.includes('آشپزخانه') || lower.includes('قهوه')) {
    return Coffee;
  }
  if (lower.includes('کتاب') || lower.includes('آموزش') || lower.includes('فرهنگ')) {
    return BookOpen;
  }
  if (lower.includes('زیبایی') || lower.includes('سلامت') || lower.includes('آرایشی') || lower.includes('پزشکی')) {
    return HeartPulse;
  }
  if (lower.includes('ابزار') || lower.includes('خودرو') || lower.includes('صنعتی')) {
    return Wrench;
  }
  if (lower.includes('خدمات') || lower.includes('مشاوره') || lower.includes('کسب و کار')) {
    return Briefcase;
  }
  if (lower.includes('گرافیک') || lower.includes('هنر') || lower.includes('دیزاین')) {
    return Palette;
  }

  // Diverse fallback icons based on index
  const fallbackIcons = [Globe, ShoppingBag, Sparkles, Zap, Palette, Monitor, Tv, Briefcase];
  return fallbackIcons[index % fallbackIcons.length];
};

export const DigikalaCategories: React.FC<DigikalaCategoriesProps> = ({
  products = [],
  onSelectCategory,
  selectedCategory,
  onScrollToIncredible,
}) => {
  // Extract unique categories from actual products
  const productCategories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );

  const defaultItems = [
    {
      id: 'all',
      name: 'همه محصولات',
      categoryValue: '',
      icon: Layers,
      color: 'from-purple-600 to-indigo-600',
      action: () => onSelectCategory(''),
    },
    {
      id: 'incredible',
      name: 'شگفت‌انگیزها',
      categoryValue: 'شگفت‌انگیز',
      icon: Percent,
      color: 'from-rose-600 to-red-600',
      action: onScrollToIncredible,
    },
    {
      id: 'popular',
      name: 'پرفروش‌ترین‌ها',
      categoryValue: 'پرفروش',
      icon: Flame,
      color: 'from-amber-500 to-orange-500',
      action: () => onSelectCategory('پرفروش'),
    },
  ];

  // Distinct vibrant gradient borders
  const dynamicColors = [
    'from-cyan-500 to-blue-600',
    'from-emerald-500 to-teal-600',
    'from-fuchsia-500 to-pink-600',
    'from-amber-400 to-orange-500',
    'from-violet-500 to-purple-600',
    'from-sky-400 to-indigo-600',
    'from-rose-500 to-pink-600',
  ];

  const dynamicCategoryItems = productCategories.map((catName, idx) => ({
    id: `cat-${idx}`,
    name: catName,
    categoryValue: catName,
    icon: getCategoryIcon(catName, idx),
    color: dynamicColors[idx % dynamicColors.length],
    action: () => onSelectCategory(catName),
  }));

  const allCategoryItems = [...defaultItems, ...dynamicCategoryItems];

  return (
    <div className="py-3">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-xs sm:text-sm font-black text-slate-800 flex items-center gap-1.5">
          <Tag className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="font-bold">دسته‌بندی و فیلتر کالاها</span>
        </h3>
        {selectedCategory && (
          <button
            onClick={() => onSelectCategory('')}
            className="text-[11px] text-purple-600 hover:text-purple-700 font-bold bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200"
          >
            نمایش همه
          </button>
        )}
      </div>

      {/* Story-like Circular Category Items with unique icons */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none snap-x w-full">
        {allCategoryItems.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedCategory === item.categoryValue;
          return (
            <button
              key={item.id}
              onClick={item.action}
              className="flex flex-col items-center gap-1.5 group shrink-0 cursor-pointer snap-start"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-0.5 bg-gradient-to-tr ${
                  isSelected ? 'from-amber-400 to-yellow-300 ring-2 ring-amber-400/80 shadow-amber-500/30 shadow-lg scale-105' : item.color
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
                className={`text-[11px] max-w-[85px] text-center truncate transition-colors ${
                  isSelected ? 'text-amber-600 font-black' : 'text-slate-800 font-bold'
                }`}
              >
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
