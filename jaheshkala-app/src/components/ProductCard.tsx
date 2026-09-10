import React from 'react';
import { Sparkles, Star, Check, ShoppingBag, Eye, Truck, ShieldCheck, Ticket, Images, Zap } from 'lucide-react';
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
  const galleryCount = (product.gallery?.length || 0) + 1;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group rounded-2xl overflow-hidden bg-white dark:bg-[#130d2a] border border-purple-200 dark:border-purple-900/40 hover:border-purple-400 dark:hover:border-purple-600/70 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-3.5 sm:p-4"
    >
      {/* Top Image area with discount tag */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative h-44 sm:h-50 rounded-xl overflow-hidden bg-purple-50 dark:bg-[#181138] mb-3 cursor-pointer border border-purple-100 dark:border-purple-900/20"
      >
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = getFallbackProductImage(product.title, product.category);
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Digikala-style Top Badges */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3" />
              {product.badge}
            </span>
          )}
          {galleryCount > 1 && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-purple-200 backdrop-blur-sm border border-white/15 flex items-center gap-1">
              <Images className="w-2.5 h-2.5 text-amber-300" />
              <span>{galleryCount} عکس</span>
            </span>
          )}
        </div>

        {product.discountPercent && (
          <div className="absolute top-2.5 left-2.5">
            <span className="text-xs font-black px-2 py-0.5 rounded-full bg-rose-600 text-white shadow-md">
              {product.discountPercent}%
            </span>
          </div>
        )}

        {/* Delivery Badge (Digikala Style: ارسال امروز / سریع) */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-medium bg-black/75 backdrop-blur-md text-emerald-400 px-2 py-0.5 rounded-md">
          <Truck className="w-3 h-3 text-emerald-400" />
          <span>{product.deliveryDays || 'ارسال سریع'}</span>
        </div>
      </div>

      {/* Body: Title, Rating, Features */}
      <div className="flex-1 flex flex-col justify-between text-right space-y-2.5">
        
        {/* Rating and Category / Brand */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="text-purple-700 dark:text-purple-300 font-bold">{product.category}</span>
            {product.brand && (
              <>
                <span>•</span>
                <span className="text-slate-700 dark:text-slate-300 font-semibold">{product.brand}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-400 dark:text-slate-500 font-normal">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h4
          onClick={() => onViewDetails(product)}
          className="text-xs sm:text-sm font-black text-slate-900 dark:text-white hover:text-purple-700 dark:hover:text-amber-300 transition-colors cursor-pointer line-clamp-2 leading-relaxed h-10"
        >
          {product.title}
        </h4>

        {/* Dynamic Product Features (Top 2 specifications) */}
        <div className="space-y-1 bg-purple-50/70 dark:bg-[#170f36] p-2 rounded-xl border border-purple-200 dark:border-purple-900/30 text-[11px] text-slate-700 dark:text-slate-200">
          {product.warranty && (
            <div className="flex items-center gap-1.5 text-purple-800 dark:text-purple-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
              <span className="truncate">{product.warranty}</span>
            </div>
          )}
          {(product.features || []).slice(0, product.warranty ? 1 : 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Pricing Block: Strikethrough discount + Single-row clean Persian price */}
        <div className="pt-2 border-t border-purple-200 dark:border-purple-900/30 space-y-2">
          
          <div className="flex items-center justify-between gap-2">
            {/* Main Price in 1 neat line */}
            <div className="flex items-baseline gap-1 whitespace-nowrap">
              <span className="text-base sm:text-lg font-black font-mono tracking-tight text-purple-800 dark:text-amber-300">
                {product.price.toLocaleString('fa-IR')}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">تومان</span>
            </div>

            {/* Original Price & Discount badge (if any) */}
            {product.originalPrice ? (
              <div className="flex items-center gap-1.5 whitespace-nowrap text-left">
                <span className="text-slate-400 dark:text-slate-500 line-through text-[11px] font-mono">
                  {product.originalPrice.toLocaleString('fa-IR')}
                </span>
                <span className="bg-rose-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-md shadow-sm">
                  {product.discountPercent}%
                </span>
              </div>
            ) : (
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
                تضمین اصالت
              </span>
            )}
          </div>

          {/* 3 Action Buttons in exactly 1 professional row */}
          <div className="grid grid-cols-12 gap-1.5 pt-1">
            {/* 1. Quick Buy Button */}
            <button
              id={`instant-buy-${product.id}`}
              onClick={() => {
                if (onInstantBuy) onInstantBuy(product);
                else onAddToCart(product);
              }}
              className="col-span-5 flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs font-black transition-all shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
              title="خرید سریع و اتصال مستقیم به پرداخت"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
              <span className="text-[11px] font-black">خرید فوری</span>
            </button>

            {/* 2. Add to Cart Button */}
            <button
              id={`add-to-cart-${product.id}`}
              onClick={() => onAddToCart(product)}
              className="col-span-5 flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-950/90 dark:hover:bg-purple-900 border border-purple-300 dark:border-purple-700/60 text-purple-900 hover:text-purple-950 dark:text-purple-200 dark:hover:text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
              title="افزودن کالا به سبد خرید"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
              <span className="text-[11px]">سبد خرید</span>
            </button>

            {/* 3. View Details Eye Button */}
            <button
              id={`view-details-${product.id}`}
              onClick={() => onViewDetails(product)}
              className="col-span-2 flex items-center justify-center py-2 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900 text-purple-700 dark:text-slate-300 hover:text-purple-900 dark:hover:text-white border border-purple-200 dark:border-purple-800/40 transition-all active:scale-95 cursor-pointer shadow-sm"
              title="مشاهده جزئیات کامل و گالری عکس"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
