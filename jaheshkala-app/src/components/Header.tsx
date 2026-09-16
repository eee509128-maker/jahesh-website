import React from 'react';
import { ShoppingBag, User as UserIcon, LogOut, ShieldCheck, Package } from 'lucide-react';
import { CartItem, User } from '../types';

interface HeaderProps {
  currentUser: User | null;
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenAuth: () => void;
  onOpenOrders: () => void;
  onOpenAdmin: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentUser,
  cartItems,
  onOpenCart,
  onOpenAuth,
  onOpenOrders,
  onOpenAdmin,
  onLogout,
}) => {
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-[#0f0c20]/95 backdrop-blur-md border-b border-purple-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/20">
            <span className="font-black text-lg">J</span>
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-black text-white tracking-tight">
              فروشگاه انجمن علمی جهش
            </h1>
            <p className="text-[11px] text-purple-300">خدمات طراحی سایت اختصاصی</p>
          </div>
        </div>

        {/* Action Buttons: Cart & Auth */}
        <div className="flex items-center gap-3">
          
          {/* Cart Button */}
          <button
            id="header-cart-btn"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1a1438] hover:bg-[#231b4c] border border-purple-800/40 text-white text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            aria-label="سبد خرید"
          >
            <ShoppingBag className="w-4 h-4 text-purple-300" />
            <span>سبد خرید</span>
            {totalCartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] flex items-center justify-center">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* User / Login state */}
          {currentUser ? (
            <div className="flex items-center gap-2">
              {currentUser.role === 'admin' || currentUser.role === 'operator' ? (
                <button
                  id="header-admin-btn"
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-bold hover:bg-amber-500/30 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>پنل مدیریت</span>
                </button>
              ) : (
                <button
                  onClick={onOpenOrders}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-950 border border-purple-800/40 text-purple-200 text-xs font-semibold hover:bg-purple-900 transition-colors"
                >
                  <Package className="w-4 h-4 text-purple-400" />
                  <span>سفارشات من</span>
                </button>
              )}

              <button
                onClick={onLogout}
                title="خروج از حساب"
                className="w-9 h-9 rounded-xl bg-[#1a1438] hover:bg-red-950/50 hover:text-red-400 text-slate-400 border border-purple-900/40 flex items-center justify-center transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              id="header-login-btn"
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/30 active:scale-95"
            >
              <UserIcon className="w-4 h-4" />
              <span>ورود / ثبت‌نام</span>
            </button>
          )}

        </div>

      </div>
    </header>
  );
};
