import React, { useState } from 'react';
import { X, PackageCheck, Clock, CheckCircle2, Globe, ShieldCheck, FileText, ShoppingBag, ArrowLeft, Search } from 'lucide-react';
import { Order, User } from '../types';

interface UserOrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
  currentUser: User | null;
  onOpenShop: () => void;
}

export const UserOrdersModal: React.FC<UserOrdersModalProps> = ({
  isOpen,
  onClose,
  orders,
  currentUser,
  onOpenShop,
}) => {
  const [manualPhoneSearch, setManualPhoneSearch] = useState('');

  if (!isOpen) return null;

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

  const cleanPhone = normalizeDigits(currentUser?.phone);
  const cleanEmail = currentUser?.email?.trim().toLowerCase();
  const cleanUserId = currentUser?.id?.trim();
  const searchPhone = normalizeDigits(manualPhoneSearch);

  const userOrders = orders.filter((o) => {
    if (currentUser?.role === 'admin') return true;

    const orderPhone = normalizeDigits(o.customerPhone);
    const orderEmail = o.customerEmail?.trim().toLowerCase();
    const orderUserId = o.userId?.trim();

    // If manual phone search entered
    if (searchPhone) {
      return (
        orderPhone.includes(searchPhone) ||
        o.trackingCode.includes(manualPhoneSearch.trim()) ||
        o.id.toLowerCase().includes(manualPhoneSearch.trim().toLowerCase())
      );
    }

    // Default logged in user match
    if (cleanUserId && orderUserId === cleanUserId) return true;
    if (cleanPhone && orderPhone && orderPhone === cleanPhone) return true;
    if (cleanEmail && orderEmail && orderEmail === cleanEmail) return true;

    return false;
  });

  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'در حال بررسی':
        return (
          <span className="inline-flex items-center gap-1 text-amber-400 bg-amber-950/60 border border-amber-500/40 px-2.5 py-1 rounded-full text-xs font-bold animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            در حال بررسی کارشناسان جهش
          </span>
        );
      case 'تایید شده و آغاز پروژه':
        return (
          <span className="inline-flex items-center gap-1 text-purple-300 bg-purple-950/60 border border-purple-500/40 px-2.5 py-1 rounded-full text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
            تایید شده و در صف اجرا
          </span>
        );
      case 'در حال طراحی و بهینه‌سازی':
        return (
          <span className="inline-flex items-center gap-1 text-indigo-300 bg-indigo-950/60 border border-indigo-500/40 px-2.5 py-1 rounded-full text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            در حال طراحی و کدنویسی
          </span>
        );
      case 'تکمیل شده و تحویل نهایی':
        return (
          <span className="inline-flex items-center gap-1 text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-full text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            تحویل کامل و سئو شده
          </span>
        );
      default:
        return (
          <span className="text-slate-300 bg-slate-800 px-2.5 py-1 rounded-full text-xs">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-[#110b27] border border-purple-800/80 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[88vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/50 bg-[#160d33]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-300">
              <PackageCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white">سفارشات من و وضعیت پروژه‌ها</h3>
              <p className="text-[11px] text-slate-400">پیگیری مراحل اجرای طراحی سایت و اتصال دامنه</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-950 hover:bg-purple-900 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Search Bar */}
        <div className="px-6 py-2.5 bg-[#140b2e] border-b border-purple-900/30 flex items-center gap-2">
          <Search className="w-4 h-4 text-purple-400 shrink-0" />
          <input
            type="text"
            value={manualPhoneSearch}
            onChange={(e) => setManualPhoneSearch(e.target.value)}
            placeholder="جستجوی سریع سفارش با شماره موبایل یا کد رهگیری (مثلاً 09881234345)..."
            className="w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none"
          />
          {manualPhoneSearch && (
            <button
              onClick={() => setManualPhoneSearch('')}
              className="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-purple-900/40"
            >
              پاک کردن
            </button>
          )}
        </div>

        {/* Orders List Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-right">
          {userOrders.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-full bg-purple-950/50 flex items-center justify-center mx-auto text-purple-400 border border-purple-800/40">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">شما تا کنون سفارشی ثبت نکرده‌اید</h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                می‌توانید همین حالا پکیج طلایی طراحی سایت اختصاصی جهش را انتخاب کرده و از هدایای دامنه و هاست رایگان بهره‌مند شوید.
              </p>
              <button
                onClick={() => { onClose(); onOpenShop(); }}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg"
              >
                مشاهده و سفارش پکیج‌ها
              </button>
            </div>
          ) : (
            userOrders.map((order) => (
              <div
                key={order.id}
                className="p-5 rounded-2xl bg-[#170f35] border border-purple-900/50 space-y-4 hover:border-purple-700/50 transition-all"
              >
                {/* Header of card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-900/40 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded-lg border border-purple-800/50">
                      {order.id}
                    </span>
                    <span className="text-xs text-slate-400">{order.date}</span>
                  </div>
                  <div>
                    {getStatusBadge(order.status)}
                  </div>
                </div>

                {/* Items in order */}
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        <span className="text-white font-bold">{item.product.title}</span>
                      </div>
                      <span className="text-amber-300 font-bold">{formatPrice(item.product.price)}</span>
                    </div>
                  ))}
                </div>

                {/* Details Footer */}
                <div className="bg-[#110926] p-3 rounded-xl border border-purple-900/40 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">کد رهگیری زیبال:</span>
                    <span className="font-mono text-purple-300 font-bold">{order.trackingCode}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px]">دامنه هدیه ثبت‌شده:</span>
                    <span className="font-mono text-amber-300 font-bold">
                      {order.requestedDomain || 'ثبت در مرحله بریف'}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px]">مبلغ نهایی پرداختی:</span>
                    <span className="text-emerald-400 font-black">{formatPrice(order.totalAmount)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400">
                    * کارشناسان پشتیبانی جهش جهت هماهنگی شروع کار ظرف ۲۴ ساعت با شما تماس خواهند گرفت.
                  </span>
                  <button
                    onClick={() => alert(`رسید دیجیتال سفارش ${order.id}\nکد پیگیری: ${order.trackingCode}\nمبلغ: ${formatPrice(order.totalAmount)}\nوضعیت: ${order.status}`)}
                    className="text-xs text-purple-300 hover:text-white flex items-center gap-1 font-semibold"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>مشاهده فاکتور</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#150d31] border-t border-purple-900/50 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            پشتیبانی تلفنی و تلگرامی ۲۴ ساعته تیم جهش فعال است.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold"
          >
            بستن
          </button>
        </div>

      </div>
    </div>
  );
};
