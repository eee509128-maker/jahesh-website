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
  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const galleryCount = (product.gallery?.length || 0) + 1;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group rounded-2xl overflow-hidden bg-[#130d2a] border border-purple-900/40 hover:border-purple-600/70 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-4"
    >
      {/* Top Image area with discount tag */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative h-48 sm:h-52 rounded-xl overflow-hidden bg-[#181138] mb-3 cursor-pointer"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Digikala-style Top Badges */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 flex items-center gap-1 shadow-md">
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
        <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-medium bg-black/75 backdrop-blur-md text-emerald-400 px-2.5 py-0.5 rounded-md">
          <Truck className="w-3 h-3 text-emerald-400" />
          <span>{product.deliveryDays || 'ارسال سریع'}</span>
        </div>
      </div>

      {/* Body: Title, Rating, Features */}
      <div className="flex-1 flex flex-col justify-between text-right space-y-3">
        
        {/* Rating and Category / Brand */}
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="text-purple-300 font-medium">{product.category}</span>
            {product.brand && (
              <>
                <span>•</span>
                <span className="text-slate-300 font-semibold">{product.brand}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1 text-amber-400 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-500 font-normal">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h4
          onClick={() => onViewDetails(product)}
          className="text-sm sm:text-base font-black text-white hover:text-amber-300 transition-colors cursor-pointer line-clamp-2 leading-snug"
        >
          {product.title}
        </h4>

        {/* Dynamic Product Features (Top 2-3 specifications) */}
        <div className="space-y-1.5 bg-[#170f36] p-2.5 rounded-xl border border-purple-900/30 text-[11px] text-slate-200">
          {product.warranty && (
            <div className="flex items-center gap-1.5 text-purple-300">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="truncate">{product.warranty}</span>
            </div>
          )}
          {(product.features || []).slice(0, product.warranty ? 2 : 3).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-slate-300">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Pricing Block (Digikala Style: Old price strikethrough with discount tag, then final price) */}
        <div className="pt-2 border-t border-purple-900/30">
          
          <div className="flex items-center justify-between mb-3">
            <div>
              {product.originalPrice && (
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-slate-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-rose-600 text-white text-[10px] font-bold px-1.5 rounded">
                    {product.discountPercent}%
                  </span>
                </div>
              )}
              <div className="text-base sm:text-lg font-black text-amber-400 mt-0.5">
                {formatPrice(product.price)}
              </div>
            </div>

            <button
              onClick={() => onViewDetails(product)}
              className="p-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 transition-colors"
              title="مشاهده جزئیات"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Action Buttons: Add to Cart + Quick Buy */}
          <div className="flex items-center gap-2">
            <button
              id={`add-to-cart-${product.id}`}
              onClick={() => onAddToCart(product)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/60 text-purple-200 hover:text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              title="افزودن به سبد خرید"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[11px]">افزودن به سبد</span>
            </button>

            <button
              id={`instant-buy-${product.id}`}
              onClick={() => {
                if (onInstantBuy) onInstantBuy(product);
                else onAddToCart(product);
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs font-black transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-95"
              title="خرید سریع و اتصال به درگاه پرداخت"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
              <span className="text-[11px]">خرید فوری</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
