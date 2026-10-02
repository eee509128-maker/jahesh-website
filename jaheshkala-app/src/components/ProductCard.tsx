import React from 'react';
import { Sparkles, Star, Check, ShoppingBag, Eye, Truck, ShieldCheck, Ticket, Images, Zap, Package, Download } from 'lucide-react';
import { Product } from '../types';
import { getFallbackProductImage } from '../lib/imageUtils';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onInstantBuy?: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onInstantBuy,
  onViewDetails,
}) => {
  const distinctGallery = (product.gallery || []).filter(
    (g) => g && typeof g === 'string' && g.trim() !== '' && g.trim() !== product.image
  );
  const totalImagesCount = (product.image ? 1 : 0) + distinctGallery.length;
  const displayImage = product.image?.trim() || (distinctGallery.length > 0 ? distinctGallery[0] : '');
  const safePrice = typeof product.price === 'number' && !isNaN(product.price) ? product.price : 0;
  const safeOriginalPrice = typeof product.originalPrice === 'number' && !isNaN(product.originalPrice) ? product.originalPrice : undefined;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group rounded-2xl overflow-hidden bg-white dark:bg-[#130d2a] border border-purple-200 dark:border-purple-900/40 hover:border-purple-400 dark:hover:border-purple-600/70 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-2.5 sm:p-3.5 h-full w-full select-none"
    >
      {/* Top Image area with badges */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative h-36 sm:h-48 rounded-xl overflow-hidden bg-purple-50 dark:bg-[#181138] mb-2 sm:mb-2.5 cursor-pointer border border-purple-100 dark:border-purple-900/20 shrink-0"
      >
        {displayImage ? (
          <img
            src={displayImage}
            alt={product.title}
            onError={(e) => {
              (e.target as HTMLImageElement).src = getFallbackProductImage(product.title, product.category);
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-purple-950/40 via-purple-900/20 to-indigo-950/40 border border-purple-500/20">
            <Package className="w-9 h-9 text-purple-400/60 mb-1" />
            <span className="text-[11px] font-bold text-purple-300/80 line-clamp-1">{product.category}</span>
            <span className="text-[9px] text-slate-400 mt-0.5">جهش‌کالا</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

        {/* Digikala-style Top Badges */}
        <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 flex flex-col gap-1 items-start z-10">
          {(product.downloadUrl || (product as any).appDownloadUrl) && (
            <span className="text-[9px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 flex items-center gap-1 shadow-md">
              <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>دانلود اپلیکیشن</span>
            </span>
          )}
          {product.badge && (
            <span className="text-[9px] sm:text-[11px] font-black px-1.5 sm:px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 flex items-center gap-0.5 sm:gap-1 shadow-md">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>{product.badge}</span>
            </span>
          )}
          {distinctGallery.length > 0 && (
            <span className="text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-black/60 text-purple-200 backdrop-blur-sm border border-white/15 flex items-center gap-1">
              <Images className="w-2.5 h-2.5 text-amber-300" />
              <span>{totalImagesCount}</span>
            </span>
          )}
        </div>

        {product.discountPercent && (
          <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 z-10">
            <span className="text-[10px] sm:text-xs font-black px-1.5 sm:px-2 py-0.5 rounded-full bg-rose-600 text-white shadow-md">
              {product.discountPercent}%
            </span>
          </div>
        )}

        {/* Delivery Badge (Digikala Style: ارسال سریع) */}
        <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 flex items-center gap-1 text-[9px] sm:text-[10px] font-medium bg-black/75 backdrop-blur-md text-emerald-400 px-1.5 sm:px-2 py-0.5 rounded-md z-10">
          <Truck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
          <span className="truncate max-w-[90px]">{product.deliveryDays || 'ارسال سریع'}</span>
        </div>
      </div>

      {/* Body: Title, Rating, Features */}
      <div className="flex-1 flex flex-col justify-between text-right space-y-1.5 sm:space-y-2">
        
        {/* Rating and Category / Brand (HIDDEN ON MOBILE for clean, uncluttered Digikala view) */}
        <div className="hidden sm:flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 gap-1 h-5 min-h-[1.25rem]">
          <div className="flex items-center gap-1 truncate min-w-0 flex-1">
            <span className="text-purple-700 dark:text-purple-300 font-bold truncate text-[11px]">{product.category}</span>
            {product.brand && (
              <>
                <span className="shrink-0">•</span>
                <span className="text-slate-700 dark:text-slate-300 font-semibold truncate text-[11px]">{product.brand}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-0.5 text-amber-500 dark:text-amber-400 font-bold shrink-0 text-[11px]">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
            <span>{product.rating ?? 5}</span>
          </div>
        </div>

        {/* Title (2-line clamp) */}
        <div className="h-9 sm:h-10 min-h-[2.25rem] sm:min-h-[2.5rem] flex items-center overflow-hidden">
          <h4
            onClick={() => onViewDetails(product)}
            className="text-xs sm:text-sm font-bold sm:font-black text-slate-900 dark:text-white hover:text-purple-700 dark:hover:text-amber-300 transition-colors cursor-pointer line-clamp-2 leading-snug w-full"
            title={product.title}
          >
            {product.title}
          </h4>
        </div>

        {/* Dynamic Product Features (Warranty / Benefit) */}
        <div className="h-[2.25rem] sm:h-[2.75rem] space-y-0.5 bg-purple-50/70 dark:bg-[#170f36] p-1.5 sm:p-2 rounded-xl border border-purple-200 dark:border-purple-900/30 text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-200 flex flex-col justify-center overflow-hidden shrink-0">
          {product.warranty ? (
            <div className="flex items-center gap-1 text-purple-800 dark:text-purple-300 font-medium truncate">
              <ShieldCheck className="w-3 h-3 text-purple-600 dark:text-purple-400 shrink-0" />
              <span className="truncate">{product.warranty}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 truncate">
              <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span className="truncate">ضمانت هفت‌روزه بازگشت کالا</span>
            </div>
          )}
          {(product.features || []).slice(0, 1).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-1 text-slate-600 dark:text-slate-300 truncate text-[9px] sm:text-[10px]">
              <Check className="w-2.5 h-2.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Digikala Style Pricing: Stacked rows to NEVER overflow or break boundaries */}
        <div className="pt-2 border-t border-purple-100 dark:border-purple-900/30 flex flex-col justify-end mt-auto space-y-1">
          
          {/* Row 1: Strikethrough original price & discount tag */}
          <div className="flex items-center justify-between min-h-[1.1rem] w-full px-0.5">
            {product.discountPercent ? (
              <span className="bg-rose-600 text-white text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-xs leading-none">
                {product.discountPercent}%
              </span>
            ) : (
              <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">
                اصالت کالا
              </span>
            )}

            {safeOriginalPrice ? (
              <span className="text-slate-400 dark:text-slate-500 line-through text-[10px] sm:text-[11px] font-mono tracking-tight">
                {safeOriginalPrice.toLocaleString('fa-IR')}
              </span>
            ) : null}
          </div>

          {/* Row 2: Final Price (Toman) */}
          <div className="flex items-baseline justify-end gap-1 w-full px-0.5">
            <span className="text-sm sm:text-base font-black font-mono tracking-tight text-slate-900 dark:text-amber-300">
              {safePrice.toLocaleString('fa-IR')}
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-bold">تومان</span>
          </div>

          {/* Action Buttons: Clean 2-button layout on mobile, 3-button on desktop */}
          <div className="grid grid-cols-12 gap-1 sm:gap-1.5 pt-1.5">
            {/* 1. Quick Buy Button */}
            <button
              id={`instant-buy-${product.id}`}
              onClick={() => {
                if (onInstantBuy) onInstantBuy(product);
                else onAddToCart(product);
              }}
              className="col-span-7 sm:col-span-6 flex items-center justify-center gap-1 h-8 sm:h-8.5 px-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-[10px] sm:text-xs font-black transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
              title="خرید سریع و اتصال مستقیم به پرداخت"
            >
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-slate-950 text-slate-950 shrink-0" />
              <span className="font-black">خرید فوری</span>
            </button>

            {/* 2. Add to Cart Button */}
            <button
              id={`add-to-cart-${product.id}`}
              onClick={() => onAddToCart(product)}
              className="col-span-5 sm:col-span-4 flex items-center justify-center gap-1 h-8 sm:h-8.5 px-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-950/90 dark:hover:bg-purple-900 border border-purple-300 dark:border-purple-700/60 text-purple-900 hover:text-purple-950 dark:text-purple-200 dark:hover:text-white text-[10px] sm:text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
              title="افزودن کالا به سبد خرید"
            >
              <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
              <span className="hidden sm:inline">سبد خرید</span>
              <span className="sm:hidden">سبد</span>
            </button>

            {/* 3. View Details Eye Button (Shown on desktop, on mobile tap card/image opens details) */}
            <button
              id={`view-details-${product.id}`}
              onClick={() => onViewDetails(product)}
              className="hidden sm:flex col-span-2 items-center justify-center h-8.5 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900 text-purple-700 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white border border-purple-200 dark:border-purple-800/40 transition-all active:scale-95 cursor-pointer shadow-sm"
              title="مشاهده جزئیات کامل"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
