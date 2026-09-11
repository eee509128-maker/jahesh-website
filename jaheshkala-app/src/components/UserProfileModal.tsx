import React from 'react';
import { User as UserType, Order } from '../types';
import { X, UserIcon, Phone, Clock, ShoppingCart, ShieldCheck } from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserType | null;
  orders: Order[];
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  orders
}) => {
  if (!isOpen || !currentUser) return null;

  const normalizeDigits = (str?: string) => {
    if (!str) return '';
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    let res = str.toString();
    for (let i = 0; i < 10; i++) {
      res = res.replace(new RegExp(persianNumbers[i], 'g'), i.toString());
      res = res.replace(new RegExp(arabicNumbers[i], 'g'), i.toString());
    }
    return res.replace(/\D/g, '').replace(/^(\+?98|0)/, '');
  };

  const cleanPhone = normalizeDigits(currentUser.phone);
  const cleanEmail = currentUser.email?.trim().toLowerCase();

  const userOrders = orders.filter((o) => {
    if (o.userId && o.userId === currentUser.id) return true;
    if (cleanPhone && o.customerPhone && normalizeDigits(o.customerPhone) === cleanPhone) return true;
    if (cleanEmail && o.customerEmail && o.customerEmail.trim().toLowerCase() === cleanEmail) return true;
    return false;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#140c2e] border border-purple-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#1a1139] p-4 flex items-center justify-between border-b border-purple-900/60">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-900/50 border border-purple-500/50 flex items-center justify-center text-purple-300">
              <UserIcon className="w-6 h-6" />
            </div>
            <div className="text-right">
              <h3 className="text-base font-black text-white">{currentUser.fullName}</h3>
              <p className="text-xs text-purple-300">
                {currentUser.role === 'admin'
                  ? 'مدیر ارشد سیستم'
                  : currentUser.role === 'operator'
                  ? 'ادمین محدود (اپراتور)'
                  : 'کاربر عادی'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-purple-800 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5 overflow-y-auto custom-scrollbar text-right">
          
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-400 border-b border-purple-900/40 pb-2">اطلاعات حساب کاربری</h4>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-purple-950/40 border border-purple-900/50 p-3 rounded-xl space-y-1">
                <p className="text-slate-400 flex items-center gap-1.5"><UserIcon className="w-3.5 h-3.5" /> نام کاربری</p>
                <p className="font-bold text-white font-mono">{currentUser.username}</p>
              </div>
              <div className="bg-purple-950/40 border border-purple-900/50 p-3 rounded-xl space-y-1">
                <p className="text-slate-400 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> شماره موبایل</p>
                <p className="font-bold text-white font-mono" dir="ltr">{currentUser.phone}</p>
              </div>
              <div className="bg-purple-950/40 border border-purple-900/50 p-3 rounded-xl space-y-1">
                <p className="text-slate-400 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> تاریخ عضویت</p>
                <p className="font-bold text-white">{currentUser.createdAt}</p>
              </div>
              <div className="bg-purple-950/40 border border-purple-900/50 p-3 rounded-xl space-y-1">
                <p className="text-slate-400 flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> سطح دسترسی</p>
                <p className="font-bold text-white">
                  {currentUser.role === 'admin'
                    ? 'مدیریت کل (ارشد)'
                    : currentUser.role === 'operator'
                    ? 'اپراتور / مدیر محدود'
                    : 'مشتری'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-400 border-b border-purple-900/40 pb-2">خلاصه فعالیت</h4>
            <div className="bg-purple-950/40 border border-purple-900/50 p-4 rounded-xl flex items-center justify-between">
              <span className="text-xs text-slate-300">تعداد کل سفارشات ثبت شده:</span>
              <div className="flex items-center gap-2 bg-purple-900/60 px-3 py-1 rounded-lg border border-purple-700/50">
                <ShoppingCart className="w-4 h-4 text-purple-300" />
                <span className="font-bold text-amber-400 text-sm">{userOrders.length}</span>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-purple-900/60 bg-[#160d36]">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-purple-800 hover:bg-purple-700 text-white font-bold text-xs transition-colors"
          >
            بستن پنجره
          </button>
        </div>
      </div>
    </div>
  );
};
