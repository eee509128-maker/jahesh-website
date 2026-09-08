import React, { useState, useEffect } from 'react';
import {
  X, Sparkles, CheckCircle2, Globe, ShieldCheck,
  ShoppingBag, Gift, Truck, RotateCcw, Headphones, Star, Ticket, Images
} from 'lucide-react';
import { Product } from '../types';
import { getFallbackProductImage } from '../lib/imageUtils';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, requestedDomain?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [preferredDomain, setPreferredDomain] = useState('');
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product?.colors && product.colors.length > 0 ? product.colors[0] : null
  );
  const [activeImage, setActiveImage] = useState<string>(product?.image || '');

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0] : null);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const allImages = [product.image, ...(product.gallery || [])].filter((url, idx, arr) => url && arr.indexOf(url) === idx);

  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const handleAdd = () => {
    onAddToCart(product, preferredDomain);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in cursor-default"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#110b28] border border-purple-800/70 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-3 sm:my-8 max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-900/50 bg-[#150d32]">
          <div className="flex items-center gap-2">
            {product.badge && (
              <span className="bg-amber-400 text-slate-950 text-[11px] sm:text-xs font-black px-2.5 py-0.5 sm:py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {product.badge}
              </span>
            )}
            <span className="text-xs text-purple-300 font-semibold">{product.category}</span>
            {product.brand && (
              <span className="text-xs text-slate-400 hidden xs:inline">| برند: <strong className="text-white">{product.brand}</strong></span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-950 hover:bg-purple-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-6">
          
          {/* Main Title & Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Image & Main stats */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-purple-800/50 h-64 sm:h-72 bg-purple-950/40 group">
                <img
                  src={activeImage || product.image}
                  alt={product.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getFallbackProductImage(product.title, product.category);
                  }}
                  className="w-full h-full object-contain p-2 bg-black/40 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 left-2 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-bold text-amber-300 bg-black/75 px-2.5 py-1 rounded-lg border border-white/10">
                    {product.deliveryDays}
                  </span>
                  {allImages.length > 1 && (
                    <span className="text-[10px] font-bold text-purple-200 bg-purple-950/80 px-2 py-0.5 rounded-md border border-purple-700/50 flex items-center gap-1">
                      <Images className="w-3 h-3 text-amber-400" />
                      {allImages.length} عکس
                    </span>
                  )}
                </div>
              </div>

              {/* Digikala Product Image Gallery Thumbnails */}
              {allImages.length > 1 && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-1 scrollbar-none">
                    {allImages.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImage(imgUrl)}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-black/50 p-0.5 ${
                          activeImage === imgUrl
                            ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105 shadow-md shadow-amber-400/20'
                            : 'border-purple-900/60 opacity-60 hover:opacity-100 hover:border-purple-500'
                        }`}
                        title={`عکس شماره ${idx + 1}`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${product.title} - عکس ${idx + 1}`}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = getFallbackProductImage(product.title, product.category);
                          }}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 text-right">
                    برای مشاهده بزرگ‌تر، روی هر عکس گالری کلیک کنید
                  </p>
                </div>
              )}

              {/* Digikala Trust Badges */}
              <div className="bg-[#170f36] border border-purple-900/40 rounded-2xl p-3.5 grid grid-cols-2 gap-2.5 text-[11px] text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>ضمانت اصالت کالا</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ارسال سریع سراسری</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>۷ روز ضمانت بازگشت</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>پشتیبانی ۲۴ ساعته</span>
                </div>
              </div>

              {/* Color Selection if product has colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="bg-[#180f38] border border-purple-900/40 rounded-2xl p-4 space-y-2">
                  <label className="text-xs font-bold text-slate-200">
                    انتخاب رنگ محصول:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                          selectedColor === color
                            ? 'bg-purple-700 text-white border-purple-400 font-bold'
                            : 'bg-black/40 text-slate-300 border-purple-900 hover:border-purple-700'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Major Bonuses Card if applicable */}
              {product.includedGifts && product.includedGifts.length > 0 && (
                <div className="bg-gradient-to-br from-purple-950/60 to-indigo-950/60 border border-purple-800/50 rounded-2xl p-4 space-y-3">
                  <h4 className="text-xs font-black text-amber-300 flex items-center gap-2">
                    <Gift className="w-4 h-4 text-amber-400" />
                    هدایا و امتیازات ویژه این کالا:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {product.includedGifts.map((gift, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{gift}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Free Domain Input if applicable for web package */}
              {product.domainIncluded && (
                <div className="bg-[#180f38] border border-amber-500/40 rounded-2xl p-4 space-y-2">
                  <label className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-amber-400" />
                    نام دامنه پیشنهادی شما (هدیه رایگان):
                  </label>
                  <p className="text-[11px] text-slate-400">
                    نام برند یا سایت مدنظرتان را وارد کنید (مثال: mybrand.ir):
                  </p>
                  <input
                    type="text"
                    dir="ltr"
                    placeholder="example.ir"
                    value={preferredDomain}
                    onChange={(e) => setPreferredDomain(e.target.value)}
                    className="w-full bg-black/50 border border-purple-800 rounded-xl px-3 py-2 text-sm text-white font-mono placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}
            </div>

            {/* Details and Features */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-xs text-slate-400">({product.reviewsCount} نظر خریداران)</span>
                  {product.warranty && (
                    <span className="text-xs text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-lg border border-purple-800/40">
                      {product.warranty}
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white leading-snug mb-3">
                  {product.title}
                </h2>
                
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line bg-purple-950/20 p-4 rounded-2xl border border-purple-900/30">
                  {product.fullDescription}
                </p>
              </div>

              {/* Full Specs checklist */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-purple-200">
                  مشخصات فنی و ویژگی‌های محصول:
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {(product.features || []).map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-purple-950/20 border border-purple-900/20"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Bottom Footer with Price & Add to Cart */}
        <div className="px-6 py-4 bg-[#140d30] border-t border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <div className="text-right">
              <span className="text-xs text-slate-400 block">قیمت نهایی:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-amber-300">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
            {product.discountPercent && (
              <span className="text-xs font-bold px-2 py-1 rounded-lg bg-rose-600/30 text-rose-300 border border-rose-600/40">
                {product.discountPercent}% تخفیف
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/60 transition-colors w-1/3 sm:w-auto text-center"
            >
              انصراف
            </button>
            <button
              id="modal-add-to-cart-btn"
              onClick={handleAdd}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-7 py-3 rounded-xl shadow-xl shadow-amber-600/20 hover:scale-105 active:scale-95 transition-all text-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>افزودن به سبد خرید</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
