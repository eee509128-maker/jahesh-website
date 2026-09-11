import React, { useState, useEffect } from 'react';
import {
  X,
  PackageCheck,
  Clock,
  CheckCircle2,
  FileText,
  ShoppingBag,
  Search,
  Truck,
  Code,
  XCircle,
  RefreshCw,
  Check,
  Printer,
  Package,
  Sparkles,
  ExternalLink,
  Copy,
  Key,
  ShieldCheck,
} from 'lucide-react';
import { Order, User, Product } from '../types';
import { fetchOrdersFromDb } from '../lib/dbService';
import { hasAmlakInItems, generateAmlakLicense } from '../lib/amlakLicenseService';

interface UserOrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
  currentUser: User | null;
  onOpenShop: () => void;
  products?: Product[];
  onOpenAmlakApp?: () => void;
}

export const UserOrdersModal: React.FC<UserOrdersModalProps> = ({
  isOpen,
  onClose,
  orders: initialOrders,
  currentUser,
  onOpenShop,
  products = [],
  onOpenAmlakApp,
}) => {
  const [currentOrders, setCurrentOrders] = useState<Order[]>(initialOrders);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [invoiceOrder, setInvoiceOrder] = useState<Order | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopyText = (text: string, fieldKey: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldKey);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {}
  };

  const [manualPhoneSearch, setManualPhoneSearch] = useState(() => {
    try {
      return localStorage.getItem('jahesh_last_customer_phone') || '';
    } catch {
      return '';
    }
  });

  // Keep internal list in sync with parent orders
  useEffect(() => {
    setCurrentOrders(initialOrders);
  }, [initialOrders]);

  // Fetch freshest data whenever modal opens
  useEffect(() => {
    if (isOpen) {
      handleRefreshOrders();
    }
  }, [isOpen]);

  const handleRefreshOrders = async () => {
    setIsRefreshing(true);
    try {
      const fresh = await fetchOrdersFromDb();
      if (fresh && Array.isArray(fresh)) {
        setCurrentOrders(fresh);
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: fresh }));
        }
      }
    } catch (e) {
      console.warn('Orders refresh notice:', e);
    } finally {
      setTimeout(() => setIsRefreshing(false), 500);
    }
  };

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

  const userOrders = currentOrders.filter((o) => {
    if (currentUser?.role === 'admin') return true;

    const orderPhone = normalizeDigits(o.customerPhone);
    const orderEmail = o.customerEmail?.trim().toLowerCase();
    const orderUserId = o.userId?.trim();

    // If manual phone or tracking code search entered
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

  const formatPrice = (num?: number) => {
    if (typeof num !== 'number' || isNaN(num)) return '۰ تومان';
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'در حال بررسی':
        return (
          <span className="inline-flex items-center gap-1.5 text-amber-400 bg-amber-950/70 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            در حال بررسی کارشناسان جهش
          </span>
        );
      case 'تایید شده / در حال آماده‌سازی':
      case 'تایید شده و آماده‌سازی':
      case 'تایید شده و آغاز پروژه':
        return (
          <span className="inline-flex items-center gap-1.5 text-purple-300 bg-purple-950/70 border border-purple-500/40 px-3 py-1 rounded-full text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
            تایید شده و در حال آماده‌سازی
          </span>
        );
      case 'ارسال شده به پست':
      case 'ارسال شده':
      case 'تحویل به پست / پیک':
        return (
          <span className="inline-flex items-center gap-1.5 text-cyan-300 bg-cyan-950/70 border border-cyan-500/40 px-3 py-1 rounded-full text-xs font-bold shadow-sm shadow-cyan-900/40">
            <Truck className="w-3.5 h-3.5 text-cyan-400" />
            ارسال شده به اداره پست
          </span>
        );
      case 'در حال طراحی و کدنویسی':
      case 'در حال طراحی و بهینه‌سازی':
        return (
          <span className="inline-flex items-center gap-1.5 text-indigo-300 bg-indigo-950/70 border border-indigo-500/40 px-3 py-1 rounded-full text-xs font-bold">
            <Code className="w-3.5 h-3.5 text-indigo-400" />
            در حال طراحی و کدنویسی
          </span>
        );
      case 'تحویل نهایی شده':
      case 'تحویل داده شد':
      case 'تکمیل شده و تحویل نهایی':
        return (
          <span className="inline-flex items-center gap-1.5 text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            تحویل نهایی شده
          </span>
        );
      case 'لغو شده':
        return (
          <span className="inline-flex items-center gap-1.5 text-rose-300 bg-rose-950/70 border border-rose-500/40 px-3 py-1 rounded-full text-xs font-bold">
            <XCircle className="w-3.5 h-3.5 text-rose-400" />
            سفارش لغو شده
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 text-slate-200 bg-purple-900/60 border border-purple-700/50 px-3 py-1 rounded-full text-xs font-bold">
            {status}
          </span>
        );
    }
  };

  const getStepIndex = (status: string): number => {
    if (status === 'لغو شده') return -1;
    if (
      status === 'تحویل نهایی شده' ||
      status === 'تحویل داده شد' ||
      status === 'تکمیل شده و تحویل نهایی'
    ) {
      return 4;
    }
    if (
      status === 'ارسال شده به پست' ||
      status === 'ارسال شده' ||
      status === 'تحویل به پست / پیک' ||
      status === 'در حال طراحی و کدنویسی' ||
      status === 'در حال طراحی و بهینه‌سازی'
    ) {
      return 3;
    }
    if (
      status === 'تایید شده / در حال آماده‌سازی' ||
      status === 'تایید شده و آماده‌سازی' ||
      status === 'تایید شده و آغاز پروژه'
    ) {
      return 2;
    }
    return 1; // در حال بررسی
  };

  const getResolvedProduct = (itemProduct: Product) => {
    if (!itemProduct) return itemProduct;
    const cleanItemTitle = itemProduct.title?.trim().toLowerCase();
    const live = products.find(
      (p) =>
        (p.id && itemProduct.id && p.id === itemProduct.id) ||
        (cleanItemTitle && p.title && p.title.trim().toLowerCase() === cleanItemTitle)
    );
    return live ? { ...itemProduct, ...live } : itemProduct;
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
              <p className="text-[11px] text-slate-400">
                پیگیری مراحل اجرای سفارشات، ارسال پستی و پروژه‌ها
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefreshOrders}
              disabled={isRefreshing}
              title="به‌روزرسانی لحظه‌ای وضعیت از سرور"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-900/50 hover:bg-purple-800 text-purple-200 text-xs font-bold transition-all border border-purple-800/40 active:scale-95 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-amber-400' : ''}`} />
              <span>{isRefreshing ? 'در حال دریافت...' : 'به‌روزرسانی وضعیت'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-purple-950 hover:bg-purple-900 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Search Bar */}
        <div className="px-6 py-2.5 bg-[#140b2e] border-b border-purple-900/30 flex items-center gap-2">
          <Search className="w-4 h-4 text-purple-400 shrink-0" />
          <input
            type="text"
            value={manualPhoneSearch}
            onChange={(e) => {
              setManualPhoneSearch(e.target.value);
              try {
                localStorage.setItem('jahesh_last_customer_phone', e.target.value);
              } catch {}
            }}
            placeholder="جستجوی سفارش با شماره موبایل، نام یا کد رهگیری (مثلاً 09881234345)..."
            className="w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none"
          />
          {manualPhoneSearch && (
            <button
              onClick={() => {
                setManualPhoneSearch('');
                try {
                  localStorage.removeItem('jahesh_last_customer_phone');
                } catch {}
              }}
              className="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-purple-900/40 cursor-pointer"
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
              <h4 className="text-sm font-bold text-white">هیچ سفارشی یافت نشد</h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                {manualPhoneSearch
                  ? 'سفارشی با این شماره یا کد رهگیری پیدا نشد. لطفاً شماره موبایلی که هنگام خرید وارد کرده‌اید را چک کنید.'
                  : 'برای مشاهده سفارشات خود، شماره موبایل ثبت‌شده هنگام خرید را در کادر جستجوی بالا وارد نمایید.'}
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenShop();
                }}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg cursor-pointer"
              >
                مشاهده فروشگاه و خدمات
              </button>
            </div>
          ) : (
            userOrders.map((order) => {
              const stepIdx = getStepIndex(order.status);
              const isCanceled = order.status === 'لغو شده';
              const isPhysicalDelivery =
                order.status === 'ارسال شده به پست' ||
                order.status === 'ارسال شده' ||
                order.status === 'تحویل به پست / پیک';

              return (
                <div
                  key={order.id}
                  className="p-5 rounded-2xl bg-[#170f35] border border-purple-900/50 space-y-4 hover:border-purple-700/60 transition-all shadow-md"
                >
                  {/* Header of card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-900/40 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded-lg border border-purple-800/50">
                        {order.id}
                      </span>
                      <span className="text-xs text-slate-400">{order.date}</span>
                    </div>
                    <div>{getStatusBadge(order.status)}</div>
                  </div>

                  {/* 4-Step Visual Progress Stepper */}
                  {!isCanceled && (
                    <div className="bg-[#100827] p-3.5 rounded-xl border border-purple-900/40 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-300 font-bold px-1">
                        <span>مراحل اجرای سفارش:</span>
                        <span className="text-purple-300 text-[10px]">
                          {stepIdx === 4
                            ? 'سفارش با موفقیت به پایان رسید'
                            : stepIdx === 3
                            ? isPhysicalDelivery
                              ? 'مرسوله به اداره پست تحویل داده شده است'
                              : 'پروژه در حال طراحی و اجرای کدنویسی است'
                            : stepIdx === 2
                            ? 'سفارش تایید شده و در حال آماده‌سازی است'
                            : 'سفارش ثبت شده و در انتظار بررسی کارشناس است'}
                        </span>
                      </div>

                      {/* Stepper Bar */}
                      <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center text-[10px]">
                        {/* Step 1 */}
                        <div
                          className={`p-2 rounded-lg border transition-all ${
                            stepIdx >= 1
                              ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                              : 'bg-purple-950/20 border-purple-900/30 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1 font-bold mb-0.5">
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>۱. پرداخت موفق</span>
                          </div>
                          <span className="text-[9px] text-emerald-400/80">تایید شاپرک</span>
                        </div>

                        {/* Step 2 */}
                        <div
                          className={`p-2 rounded-lg border transition-all ${
                            stepIdx >= 2
                              ? 'bg-purple-900/40 border-purple-500/50 text-purple-200'
                              : 'bg-purple-950/20 border-purple-900/30 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1 font-bold mb-0.5">
                            {stepIdx >= 2 ? (
                              <Check className="w-3 h-3 text-purple-400" />
                            ) : (
                              <Clock className="w-3 h-3 text-slate-500" />
                            )}
                            <span>۲. بررسی و تایید</span>
                          </div>
                          <span className="text-[9px] text-slate-400">آماده‌سازی</span>
                        </div>

                        {/* Step 3 */}
                        <div
                          className={`p-2 rounded-lg border transition-all ${
                            stepIdx >= 3
                              ? isPhysicalDelivery
                                ? 'bg-cyan-950/50 border-cyan-500/60 text-cyan-200 shadow-sm shadow-cyan-900/50'
                                : 'bg-indigo-950/50 border-indigo-500/60 text-indigo-200'
                              : 'bg-purple-950/20 border-purple-900/30 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1 font-bold mb-0.5">
                            {stepIdx >= 3 ? (
                              isPhysicalDelivery ? (
                                <Truck className="w-3 h-3 text-cyan-300" />
                              ) : (
                                <Code className="w-3 h-3 text-indigo-300" />
                              )
                            ) : (
                              <Clock className="w-3 h-3 text-slate-500" />
                            )}
                            <span>۳. {isPhysicalDelivery ? 'ارسال پستی' : 'اجرای سفارش'}</span>
                          </div>
                          <span className="text-[9px] text-slate-400">
                            {isPhysicalDelivery ? 'تحویل به پست' : 'کدنویسی و طراحی'}
                          </span>
                        </div>

                        {/* Step 4 */}
                        <div
                          className={`p-2 rounded-lg border transition-all ${
                            stepIdx >= 4
                              ? 'bg-emerald-950/50 border-emerald-500/60 text-emerald-200 shadow-sm shadow-emerald-900/50'
                              : 'bg-purple-950/20 border-purple-900/30 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1 font-bold mb-0.5">
                            {stepIdx >= 4 ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Clock className="w-3 h-3 text-slate-500" />
                            )}
                            <span>۴. تحویل نهایی</span>
                          </div>
                          <span className="text-[9px] text-slate-400">تکمیل سفارش</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Items in order */}
                  <div className="space-y-2">
                    {order.items.map((item, idx) => {
                      const prod = getResolvedProduct(item.product);
                      const prodImg = prod?.image || item.product?.image;

                      return (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-xs bg-[#120a2a] p-2.5 rounded-xl border border-purple-900/40 hover:border-purple-700/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-black/50 border border-purple-800/60 overflow-hidden flex items-center justify-center shrink-0 p-0.5 shadow-sm">
                              {prodImg ? (
                                <img
                                  src={prodImg}
                                  alt={prod.title}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <Package className="w-5 h-5 text-purple-400" />
                              )}
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-white font-bold text-xs sm:text-sm block line-clamp-1">
                                {prod.title}
                                {item.selectedPlan ? ` (${item.selectedPlan.name})` : ''}
                              </span>
                              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                                <span>تعداد: <strong className="text-purple-300">{item.quantity}</strong> عدد</span>
                                {item.selectedPlan ? (
                                  <>
                                    <span>•</span>
                                    <span className="text-amber-300 font-bold">تعرفه {item.selectedPlan.name}</span>
                                  </>
                                ) : prod.category ? (
                                  <>
                                    <span>•</span>
                                    <span className="text-purple-400">{prod.category}</span>
                                  </>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <span className="text-amber-300 font-bold text-xs sm:text-sm shrink-0">
                            {formatPrice((item.selectedPlan?.price !== undefined ? item.selectedPlan.price : prod.price) * item.quantity)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Details Footer */}
                  <div className="bg-[#110926] p-3 rounded-xl border border-purple-900/40 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">کد رهگیری بانکی (زیبال):</span>
                      <span className="font-mono text-purple-300 font-bold">{order.trackingCode}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px]">دامنه یا توضیحات:</span>
                      <span className="font-mono text-amber-300 font-bold">
                        {order.requestedDomain || order.clientNotes || 'ثبت در مرحله بریف'}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px]">مبلغ نهایی پرداختی:</span>
                      <span className="text-emerald-400 font-black">
                        {formatPrice(order.totalAmount)}
                      </span>
                    </div>
                  </div>

                  {/* کارت اختصاصی اکانت و لایسنس سامانه مدیریت املاک برای خریدار */}
                  {hasAmlakInItems(order.items) && (() => {
                    const license = order.amlakLicense || generateAmlakLicense(order, currentUser);
                    const isUserCopied = copiedField === `user-${order.id}`;
                    const isPassCopied = copiedField === `pass-${order.id}`;

                    return (
                      <div className="bg-gradient-to-br from-amber-500/15 via-[#180e30] to-orange-600/10 border border-amber-500/40 rounded-2xl p-4 text-right space-y-3 shadow-lg my-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-amber-500/30">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">🏢</span>
                            <div>
                              <span className="font-black text-amber-400 text-xs sm:text-sm block">
                                حساب کاربری و لایسنس سامانه مدیریت املاک جهش
                              </span>
                              <span className="text-[10px] text-slate-300">
                                شناسه لایسنس: <strong className="font-mono text-amber-300">{license.licenseKey}</strong>
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3 text-emerald-400" />
                              <span>اشتراک فعال ({license.days} روزه)</span>
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {/* نام کاربری */}
                          <div className="bg-black/50 p-2.5 rounded-xl border border-amber-500/20 flex items-center justify-between">
                            <div className="space-y-0.5">
                              <span className="text-[10px] text-slate-400 block font-sans">نام کاربری اختصاصی:</span>
                              <span className="font-mono font-bold text-white text-xs">{license.username}</span>
                            </div>
                            <button
                              onClick={() => handleCopyText(license.username, `user-${order.id}`)}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-bold transition-colors cursor-pointer"
                            >
                              <Copy className="w-3 h-3" />
                              <span>{isUserCopied ? 'کپی شد!' : 'کپی'}</span>
                            </button>
                          </div>

                          {/* رمز عبور اختصاصی */}
                          <div className="bg-black/50 p-2.5 rounded-xl border border-amber-500/20 flex items-center justify-between">
                            <div className="space-y-0.5">
                              <span className="text-[10px] text-slate-400 block font-sans">رمز عبور اختصاصی:</span>
                              <span className="font-mono font-bold text-amber-300 text-xs tracking-wider">{license.password}</span>
                            </div>
                            <button
                              onClick={() => handleCopyText(license.password, `pass-${order.id}`)}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-bold transition-colors cursor-pointer"
                            >
                              <Copy className="w-3 h-3" />
                              <span>{isPassCopied ? 'کپی شد!' : 'کپی'}</span>
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-1">
                          <span className="text-[11px] text-slate-300">
                            اعتبار اشتراک تا: <strong className="text-amber-300">{license.expiresAt}</strong>
                          </span>

                          <a
                            href={`/amlak.html?u=${encodeURIComponent(license.username)}&p=${encodeURIComponent(license.password)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
                          >
                            <span>ورود به سامانه مدیریت املاک در تب جدید</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <span className="text-[11px] text-slate-400">
                      * جهت هماهنگی و ارسال سریع، پشتیبانی جهش همواره پاسخگوی شماست.
                    </span>
                    <div className="flex items-center gap-2">
                      {order.items.some(it => it.product?.id === 'pkg-amlak-jahesh' || it.product?.title?.includes('املاک')) && onOpenAmlakApp && currentUser?.role === 'admin' && (
                        <button
                          onClick={() => {
                            onClose();
                            onOpenAmlakApp();
                          }}
                          className="text-xs bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 flex items-center gap-1.5 font-black px-3.5 py-1.5 rounded-lg shadow-md transition-all cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>تست سامانه مدیریت املاک (مدیریت)</span>
                        </button>
                      )}
                      <button
                        onClick={() => setInvoiceOrder(order)}
                        className="text-xs text-purple-300 hover:text-white flex items-center gap-1.5 font-bold px-3 py-1 rounded-lg bg-purple-900/40 hover:bg-purple-900/70 transition-colors cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-purple-300" />
                        <span>مشاهده فاکتور و رسید</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#150d31] border-t border-purple-900/50 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            پشتیبانی تلفنی و تلگرامی ۲۴ ساعته تیم جهش کالا فعال است.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold cursor-pointer"
          >
            بستن
          </button>
        </div>
      </div>

      {/* Modern Digital Invoice Modal */}
      {invoiceOrder && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#140b2e] border border-purple-800 rounded-3xl p-6 max-w-md w-full space-y-4 text-right shadow-2xl">
            <div className="flex items-center justify-between border-b border-purple-900 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white">فاکتور رسمی سفارش {invoiceOrder.id}</h4>
              </div>
              <button
                onClick={() => setInvoiceOrder(null)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300 bg-[#0c061d] p-4 rounded-2xl border border-purple-900/50">
              <div className="flex justify-between border-b border-purple-950 pb-1.5">
                <span className="text-slate-400">شماره فاکتور:</span>
                <span className="font-mono font-bold text-purple-300">{invoiceOrder.id}</span>
              </div>
              <div className="flex justify-between border-b border-purple-950 pb-1.5">
                <span className="text-slate-400">کد پیگیری شاپرک/زیبال:</span>
                <span className="font-mono font-bold text-emerald-400">{invoiceOrder.trackingCode}</span>
              </div>
              <div className="flex justify-between border-b border-purple-950 pb-1.5">
                <span className="text-slate-400">نام خریدار:</span>
                <span className="font-bold text-white">{invoiceOrder.customerName}</span>
              </div>
              <div className="flex justify-between border-b border-purple-950 pb-1.5">
                <span className="text-slate-400">شماره تماس:</span>
                <span className="font-mono text-amber-300" dir="ltr">
                  {invoiceOrder.customerPhone}
                </span>
              </div>
              <div className="flex justify-between border-b border-purple-950 pb-1.5">
                <span className="text-slate-400">تاریخ پرداخت:</span>
                <span>{invoiceOrder.date}</span>
              </div>
              <div className="flex justify-between items-center border-b border-purple-950 pb-1.5">
                <span className="text-slate-400">وضعیت فعلی سفارش:</span>
                <div>{getStatusBadge(invoiceOrder.status)}</div>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400 font-bold">مبلغ نهایی پرداختی:</span>
                <span className="text-emerald-400 font-black text-sm">
                  {formatPrice(invoiceOrder.totalAmount)}
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-purple-300 block">اقلام فاکتور:</span>
              <div className="max-h-48 overflow-y-auto space-y-1.5 text-xs">
                {invoiceOrder.items.map((item, idx) => {
                  const prod = getResolvedProduct(item.product);
                  const prodImg = prod?.image || item.product?.image;

                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-purple-950/40 p-2 rounded-xl border border-purple-900/40"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-lg bg-black/60 border border-purple-800/50 overflow-hidden flex items-center justify-center shrink-0 p-0.5">
                          {prodImg ? (
                            <img src={prodImg} alt={prod.title} className="w-full h-full object-contain" />
                          ) : (
                            <Package className="w-4 h-4 text-purple-400" />
                          )}
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-white block text-xs">
                            {prod.title}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            تعداد: {item.quantity} عدد
                          </span>
                        </div>
                      </div>
                      <span className="font-bold text-amber-300 text-xs">
                        {formatPrice(prod.price * item.quantity)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>چاپ یا ذخیره فاکتور</span>
              </button>
              <button
                onClick={() => setInvoiceOrder(null)}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-bold cursor-pointer"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

