import React, { useState, useRef, useEffect } from 'react';
import {
  Search, ShoppingCart, User as UserIcon, Bell, Menu,
  ChevronDown, Flame, Percent, Sparkles, ShieldCheck, LogOut,
  Package, HelpCircle, PhoneCall, Gift, Layers, Box, Check, Tag,
  Sun, Moon, TrendingUp, Wallet
} from 'lucide-react';
import { CartItem, Product, User } from '../types';

interface DigikalaHeaderProps {
  currentUser: User | null;
  cartItems: CartItem[];
  products?: Product[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  onOpenOrders: () => void;
  onOpenAdmin: () => void;
  onOpenProfile?: () => void;
  onOpenJaheshArz?: () => void;
  onLogout: () => void;
  onScrollToIncredible: () => void;
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
  onOpenTerms: () => void;
  onOpenContact?: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const DigikalaHeader: React.FC<DigikalaHeaderProps> = ({
  currentUser,
  cartItems,
  products = [],
  searchQuery,
  onSearchChange,
  onOpenCart,
  onOpenAuth,
  onOpenOrders,
  onOpenAdmin,
  onOpenProfile,
  onOpenJaheshArz,
  onLogout,
  onScrollToIncredible,
  onSelectCategory,
  selectedCategory,
  onOpenTerms,
  onOpenContact,
  theme = 'dark',
  onToggleTheme,
}) => {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoryMenuOpen(false);
      }
    }
    if (categoryMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [categoryMenuOpen]);

  // Extract unique categories from actual products
  const productCategories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );

  const baseCategories = [
    { title: 'همه کالاها و محصولات', icon: '🛍️', desc: 'مشاهده تمام محصولات موجود در فروشگاه', value: '' },
    { title: 'پرفروش‌ترین کالاها', icon: '🔥', desc: 'محبوب‌ترین و پرفروش‌ترین محصولات کاربران', value: 'پرفروش' },
    { title: 'کالاهای شگفت‌انگیز و تخفیف‌دار', icon: '⚡', desc: 'پیشنهادهای روزانه با بیشترین تخفیف', value: 'شگفت‌انگیز' },
  ];

  const getCategoryEmoji = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('سایت') || lower.includes('وب') || lower.includes('طراحی')) return '🌐';
    if (lower.includes('کد') || lower.includes('برنامه') || lower.includes('نرم‌افزار')) return '💻';
    if (lower.includes('موبایل') || lower.includes('گوشی')) return '📱';
    if (lower.includes('لپ‌تاپ') || lower.includes('کامپیوتر')) return '🖥️';
    if (lower.includes('هدفون') || lower.includes('صوت')) return '🎧';
    if (lower.includes('ساعت')) return '⌚';
    if (lower.includes('پوشاک') || lower.includes('لباس') || lower.includes('کفش')) return '👟';
    if (lower.includes('خانه') || lower.includes('آشپزخانه')) return '☕';
    if (lower.includes('کتاب')) return '📚';
    if (lower.includes('زیبایی') || lower.includes('سلامت')) return '✨';
    return '🏷️';
  };

  const dynamicCategories = productCategories.map((catName) => ({
    title: catName,
    icon: getCategoryEmoji(catName),
    desc: `مشاهده محصولات دسته ${catName}`,
    value: catName,
  }));

  const allCategories = [...baseCategories, ...dynamicCategories];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0f0a24]/95 backdrop-blur-md border-b border-purple-200 dark:border-purple-900/40 text-slate-900 dark:text-slate-100 shadow-sm transition-colors">
      
      {/* Top Main Bar (Logo, Search, User/Login, Cart) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Right side: Logo & Search */}
        <div className="flex items-center gap-3 sm:gap-5 flex-1 min-w-0 max-w-3xl">
          
          {/* Logo for Jahesh */}
          <button
            onClick={() => onSelectCategory('')}
            className="flex items-center gap-2 shrink-0 group text-right cursor-pointer"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-600 flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
              <span className="tracking-tighter">J</span>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 font-black text-sm sm:text-lg tracking-tight leading-none">
                <span className="text-purple-700 dark:text-purple-400">جهش</span>
                <span className="text-amber-500 dark:text-amber-400">کالا</span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse"></span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5 font-medium">jaheshit.ir</span>
            </div>
          </button>

          {/* Search Bar with Search Icon (Desktop) */}
          <div className="relative flex-1 hidden sm:block">
            <div className="relative flex items-center bg-purple-50/80 dark:bg-[#181138] border border-purple-200 dark:border-purple-900/60 rounded-2xl overflow-hidden focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/50 transition-all">
              <Search className="w-4 h-4 text-purple-700 dark:text-slate-400 mr-3.5 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="جستجو در بین تمامی کالاها و خدمات جهش‌کالا..."
                className="w-full bg-transparent py-2.5 px-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none text-right font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="px-3 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  title="پاک کردن جستجو"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Left side: Login/User Profile, Admin, Cart */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Jahesh Arz (TopChange) Direct Trigger Button */}
          {onOpenJaheshArz && (
            <button
              id="jahesh-arz-top-btn"
              onClick={onOpenJaheshArz}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-amber-500 hover:from-purple-800 hover:to-amber-600 text-white text-xs font-black shadow-md shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer border border-amber-300/40"
              title="صرافی آنلاین و کیف پول چندارزی جهش ارز (TopChange)"
            >
              <div className="w-5 h-5 rounded-lg bg-black/30 flex items-center justify-center text-[10px] font-mono font-black text-amber-300">
                TC
              </div>
              <span className="hidden xs:inline">جهش ارز (کیف پول)</span>
              <span className="xs:hidden">کیف پول</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block"></span>
            </button>
          )}

          {/* User Auth / Profile */}
          {currentUser ? (
            <div className="flex items-center gap-1 sm:gap-2">
              {currentUser.role === 'admin' ? (
                <button
                  id="digikala-admin-btn"
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-700 dark:text-amber-300 text-xs font-bold hover:bg-amber-500/30 transition-colors shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="hidden xs:inline">پنل مدیریت</span>
                  <span className="xs:hidden">مدیریت</span>
                </button>
              ) : (
                <button
                  onClick={onOpenOrders}
                  className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800/40 text-purple-900 dark:text-purple-200 text-xs font-bold hover:bg-purple-200 dark:hover:bg-purple-900 transition-colors"
                >
                  <Package className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span className="hidden xs:inline">سفارشات من</span>
                  <span className="xs:hidden">سفارشات</span>
                </button>
              )}

              <button
                onClick={onOpenProfile}
                title="پروفایل کاربری"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 dark:bg-[#181138] hover:bg-purple-200 dark:hover:bg-purple-900/60 text-purple-900 dark:text-slate-300 border border-purple-200 dark:border-purple-900/40 flex items-center justify-center transition-colors shrink-0"
              >
                <UserIcon className="w-4 h-4" />
              </button>
              <button
                onClick={onLogout}
                title="خروج از حساب"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 dark:bg-[#181138] hover:bg-rose-100 dark:hover:bg-rose-950/50 text-rose-700 dark:text-slate-400 border border-rose-200 dark:border-purple-900/40 flex items-center justify-center transition-colors shrink-0"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              id="digikala-login-btn"
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-[#181138] dark:hover:bg-purple-900/60 border border-purple-300 dark:border-purple-800/50 text-purple-950 dark:text-white text-xs font-bold transition-all hover:scale-105 active:scale-95 shrink-0 shadow-sm"
            >
              <UserIcon className="w-4 h-4 text-purple-700 dark:text-purple-300 shrink-0" />
              <span className="hidden xs:inline">ورود | ثبت‌نام</span>
              <span className="xs:hidden">ورود</span>
            </button>
          )}

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-purple-200 dark:bg-purple-900/60 mx-0.5 hidden sm:block"></div>

          {/* Cart Icon with Counter */}
          <button
            id="digikala-cart-btn"
            onClick={onOpenCart}
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-[#181138] dark:hover:bg-purple-900/80 border border-purple-300 dark:border-purple-800/50 text-purple-950 dark:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shrink-0 shadow-sm"
            aria-label="سبد خرید"
          >
            <ShoppingCart className="w-4 h-4 text-purple-700 dark:text-purple-300" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-rose-600 text-white font-black text-[9px] sm:text-[10px] flex items-center justify-center border-2 border-white dark:border-[#0f0a24] shadow-md">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Theme Toggle Button (Light / Dark) */}
          {onToggleTheme && (
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-[#181138] dark:hover:bg-purple-900/80 border border-purple-300 dark:border-purple-800/50 text-purple-950 dark:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shrink-0 shadow-sm"
              title={theme === 'light' ? 'تغییر به حالت شب (تیره)' : 'تغییر به حالت روز (سفید و بنفش)'}
              aria-label="تغییر تم"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-purple-800 transition-transform duration-300 rotate-12" />
              ) : (
                <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
              )}
            </button>
          )}

        </div>

      </div>

      {/* Mobile Search Input */}
      <div className="px-3 pb-2.5 sm:hidden">
        <div className="relative flex items-center bg-purple-50/80 dark:bg-[#181138] border border-purple-200 dark:border-purple-900/60 rounded-xl overflow-hidden">
          <Search className="w-4 h-4 text-purple-700 dark:text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="جستجو در بین تمامی کالاها و خدمات..."
            className="w-full bg-transparent py-2 px-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none text-right font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="px-3 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Secondary Digikala Menu Bar */}
      <div className="border-t border-purple-200 dark:border-purple-900/30 bg-purple-50/90 dark:bg-[#0c081e]/90 text-xs relative transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-10 sm:h-11 flex items-center overflow-x-auto scrollbar-none">
          
          {/* Nav Items Row */}
          <div className="flex items-center gap-3 sm:gap-6 whitespace-nowrap text-slate-800 dark:text-slate-300 overflow-visible py-1">
            
            {/* Category Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
                className={`flex items-center gap-1.5 font-bold transition-colors py-1 sm:py-1.5 px-2 sm:px-2.5 rounded-xl border shrink-0 ${
                  categoryMenuOpen || selectedCategory
                    ? 'bg-purple-200 dark:bg-purple-900/60 border-purple-400 dark:border-amber-400/60 text-purple-950 dark:text-amber-300 shadow-sm'
                    : 'bg-white/80 dark:bg-transparent border-purple-200 dark:border-transparent text-slate-900 dark:text-white hover:text-purple-700 dark:hover:text-amber-400 hover:bg-purple-100 dark:hover:bg-purple-950/40 shadow-xs'
                }`}
              >
                <Menu className="w-4 h-4 text-purple-700 dark:text-amber-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">
                  {selectedCategory ? `دسته: ${selectedCategory}` : 'دسته‌بندی کالاها'}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform shrink-0 ${categoryMenuOpen ? 'rotate-180 text-purple-700 dark:text-amber-400' : ''}`} />
              </button>

              {/* Dropdown Menu Popup */}
              {categoryMenuOpen && (
                <div
                  className="fixed top-28 left-4 right-4 sm:absolute sm:top-full sm:right-0 sm:left-auto mt-2 sm:w-72 sm:max-w-[85vw] bg-white dark:bg-[#160f38] border border-purple-200 dark:border-purple-700/80 rounded-2xl shadow-2xl p-2 space-y-1 z-50 animate-in fade-in max-h-80 overflow-y-auto"
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold text-purple-900 dark:text-amber-400 border-b border-purple-100 dark:border-purple-900/50 flex items-center justify-between">
                    <span>انتخاب دسته‌بندی فروشگاه</span>
                    {selectedCategory && (
                      <button
                        onClick={() => {
                          onSelectCategory('');
                          setCategoryMenuOpen(false);
                        }}
                        className="text-[10px] text-rose-600 dark:text-rose-300 hover:underline font-bold"
                      >
                        پاک کردن
                      </button>
                    )}
                  </div>
                  {allCategories.map((cat, idx) => {
                    const isSelected = selectedCategory === cat.value;
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          onSelectCategory(cat.value);
                          setCategoryMenuOpen(false);
                        }}
                        className={`p-2.5 rounded-xl cursor-pointer flex items-center justify-between gap-2.5 transition-all text-right ${
                          isSelected
                            ? 'bg-purple-100 dark:bg-amber-400/20 text-purple-950 dark:text-amber-200 border border-purple-300 dark:border-amber-400/40 font-bold'
                            : 'hover:bg-purple-50 dark:hover:bg-purple-900/60 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base shrink-0">{cat.icon}</span>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white">{cat.title}</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">{cat.desc}</div>
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-purple-700 dark:text-amber-400 shrink-0" />}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="h-4 w-px bg-purple-200 dark:bg-purple-900/60 hidden sm:block shrink-0"></div>

            {/* Jahesh Arz TopChange Menu Item */}
            {onOpenJaheshArz && (
              <button
                id="jahesh-arz-nav-btn"
                onClick={onOpenJaheshArz}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-purple-200/80 hover:bg-purple-300/80 dark:bg-purple-900/60 dark:hover:bg-purple-800 text-purple-950 dark:text-amber-300 font-bold transition-all text-[11px] sm:text-xs shrink-0 cursor-pointer border border-purple-300 dark:border-purple-700/50"
              >
                <TrendingUp className="w-3.5 h-3.5 text-purple-700 dark:text-amber-400 shrink-0" />
                <span>جهش ارز (TopChange)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </button>
            )}

            {/* Quick Filter Buttons */}
            <button
              onClick={onScrollToIncredible}
              className="flex items-center gap-1 text-purple-900 dark:text-amber-300 hover:text-purple-700 dark:hover:text-amber-200 transition-colors font-bold cursor-pointer text-[11px] sm:text-xs shrink-0"
            >
              <Percent className="w-3.5 h-3.5 text-rose-600 dark:text-amber-400 shrink-0" />
              <span>شگفت‌انگیزها</span>
            </button>

            <button
              onClick={() => onSelectCategory('پرفروش')}
              className={`flex items-center gap-1 transition-colors cursor-pointer text-[11px] sm:text-xs shrink-0 ${
                selectedCategory === 'پرفروش'
                  ? 'text-purple-950 dark:text-amber-400 font-bold'
                  : 'text-slate-800 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white font-semibold'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400 shrink-0" />
              <span>پرفروش‌ترین‌ها</span>
            </button>

            <button
              onClick={() => onSelectCategory('شگفت‌انگیز')}
              className={`flex items-center gap-1 transition-colors cursor-pointer text-[11px] sm:text-xs shrink-0 ${
                selectedCategory === 'شگفت‌انگیز'
                  ? 'text-purple-950 dark:text-amber-400 font-bold'
                  : 'text-slate-800 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-white font-semibold'
              }`}
            >
              <Gift className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>تخفیف‌ها</span>
            </button>

            <button
              onClick={onOpenTerms}
              className="flex items-center gap-1 text-slate-700 dark:text-slate-400 hover:text-purple-900 dark:hover:text-white transition-colors cursor-pointer text-[11px] sm:text-xs shrink-0 font-medium"
            >
              <HelpCircle className="w-3.5 h-3.5 text-purple-600 dark:text-slate-400 shrink-0" />
              <span>راهنما و قوانین</span>
            </button>

            <button
              onClick={() => onOpenContact && onOpenContact()}
              className="hidden lg:flex items-center gap-1 text-slate-700 dark:text-slate-400 hover:text-purple-900 dark:hover:text-white transition-colors cursor-pointer text-xs shrink-0 font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>پشتیبانی تلفنی (09152331974)</span>
            </button>

            <a
              id="back-to-main-site-btn"
              href="/"
              className="ms-auto flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/40 dark:hover:bg-purple-800/60 border border-purple-300 dark:border-purple-700/50 text-purple-950 dark:text-purple-200 hover:text-purple-900 dark:hover:text-white transition-all text-[11px] sm:text-xs font-bold shrink-0 shadow-xs"
              title="بازگشت به صفحه اصلی جهش"
            >
              <span className="text-amber-600 dark:text-amber-400">←</span>
              <span>سایت اصلی جهش</span>
            </a>

          </div>

        </div>
      </div>

    </header>
  );
};
