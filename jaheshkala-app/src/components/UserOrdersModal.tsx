import { safeSetLocalStorage } from '../lib/dbService';
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
import { fetchOrdersFromDb, parseOrderTimestamp } from '../lib/dbService';
import { hasAmlakInItems, generateAmlakLicense } from '../lib/amlakLicenseService';
import { hasAiAppInItems, generateAppLicense, checkLicenseStatus } from '../lib/appLicenseService';

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
  orders: initialOrders = [],
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

  useEffect(() => {
    const handleOrdersUpdated = (e: Event) => {
      const customEvent = e as CustomEvent<Order[]>;
      if (customEvent.detail && Array.isArray(customEvent.detail)) {
        setCurrentOrders(customEvent.detail);
      } else {
        handleRefreshOrders();
      }
    };
    window.addEventListener('jahesh-orders-updated', handleOrdersUpdated);
    return () => window.removeEventListener('jahesh-orders-updated', handleOrdersUpdated);
  }, []);

  // Fetch freshest data whenever modal opens and set up polling
  useEffect(() => {
    let intervalId: any;
    if (isOpen) {
      handleRefreshOrders();
      // Auto-poll to instantly reflect admin changes
      intervalId = setInterval(() => {
        fetchOrdersFromDb().then((fresh) => {
          if (fresh && Array.isArray(fresh)) {
            setCurrentOrders(fresh);
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: fresh }));
            }
          }
        }).catch(() => {});
      }, 2500);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
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

  const userOrders = (currentOrders || [])
    .filter((o) => {
      if (currentUser?.role === 'admin') return true;

      const orderPhone = normalizeDigits(o.customerPhone);
      const orderEmail = o.customerEmail?.trim().toLowerCase();
      const orderUserId = o.userId?.trim();

      // If manual phone or tracking code search entered
      if (searchPhone) {
        return (
          orderPhone.includes(searchPhone) ||
          (o.trackingCode && o.trackingCode.includes(manualPhoneSearch.trim())) ||
          (o.paymentRefId && o.paymentRefId.includes(manualPhoneSearch.trim())) ||
          (o.zibalTrackId && o.zibalTrackId.includes(manualPhoneSearch.trim())) ||
          o.id.toLowerCase().includes(manualPhoneSearch.trim().toLowerCase())
        );
      }

      // Default logged in user match
      if (cleanUserId && orderUserId === cleanUserId) return true;
      if (cleanPhone && orderPhone && orderPhone === cleanPhone) return true;
      if (cleanEmail && orderEmail && orderEmail === cleanEmail) return true;

      return false;
    })
    .sort((a, b) => parseOrderTimestamp(b) - parseOrderTimestamp(a));

  const formatPrice = (num?: number) => {
    if (typeof num !== 'number' || isNaN(num)) return '۰ تومان';
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'در حال بررسی':
        return (
          <span className="inline-flex items-center gap-1 text-amber-800 bg-amber-100 border border-amber-300 dark:text-amber-300 dark:bg-amber-950/70 dark:border-amber-500/40 px-2.5 py-0.5 rounded-full text-[11px] font-bold animate-pulse whitespace-nowrap shrink-0">
            <Clock className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
            در حال بررسی
          </span>
        );
      case 'تایید شده / در حال آماده‌سازی':
      case 'تایید شده و آماده‌سازی':
      case 'تایید شده و آغاز پروژه':
        return (
          <span className="inline-flex items-center gap-1 text-purple-900 bg-purple-100 border border-purple-300 dark:text-purple-300 dark:bg-purple-950/70 dark:border-purple-500/40 px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap shrink-0">
            <CheckCircle2 className="w-3 h-3 text-purple-700 dark:text-purple-400 shrink-0" />
            تایید شده / آماده‌سازی
          </span>
        );
      case 'ارسال شده به پست':
      case 'ارسال شده':
      case 'تحویل به پست / پیک':
        return (
          <span className="inline-flex items-center gap-1 text-cyan-900 bg-cyan-100 border border-cyan-300 dark:text-cyan-300 dark:bg-cyan-950/70 dark:border-cyan-500/40 px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-xs whitespace-nowrap shrink-0">
            <Truck className="w-3 h-3 text-cyan-700 dark:text-cyan-400 shrink-0" />
            ارسال شده به پست
          </span>
        );
      case 'در حال طراحی و کدنویسی':
      case 'در حال طراحی و بهینه‌سازی':
        return (
          <span className="inline-flex items-center gap-1 text-indigo-900 bg-indigo-100 border border-indigo-300 dark:text-indigo-300 dark:bg-indigo-950/70 dark:border-indigo-500/40 px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap shrink-0">
            <Code className="w-3 h-3 text-indigo-700 dark:text-indigo-400 shrink-0" />
            در حال طراحی و کدنویسی
          </span>
        );
      case 'تحویل نهایی شده':
      case 'تحویل داده شد':
      case 'تکمیل شده و تحویل نهایی':
        return (
          <span className="inline-flex items-center gap-1 text-emerald-900 bg-emerald-100 border border-emerald-300 dark:text-emerald-300 dark:bg-emerald-950/70 dark:border-emerald-500/40 px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap shrink-0">
            <CheckCircle2 className="w-3 h-3 text-emerald-700 dark:text-emerald-400 shrink-0" />
            تحویل نهایی شده
          </span>
        );
      case 'لغو شده':
        return (
          <span className="inline-flex items-center gap-1 text-rose-900 bg-rose-100 border border-rose-300 dark:text-rose-300 dark:bg-rose-950/70 dark:border-rose-500/40 px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap shrink-0">
            <XCircle className="w-3 h-3 text-rose-700 dark:text-rose-400 shrink-0" />
            لغو شده
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-slate-800 bg-slate-100 border border-slate-300 dark:text-slate-200 dark:bg-purple-900/60 dark:border-purple-700/50 px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap shrink-0">
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
    const live = (products || []).find(
      (p) =>
        (p.id && itemProduct.id && p.id === itemProduct.id) ||
        (cleanItemTitle && p.title && p.title.trim().toLowerCase() === cleanItemTitle)
    );
    return live ? { ...itemProduct, ...live } : itemProduct;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#110b27] border border-slate-200 dark:border-purple-800/80 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-purple-900/50 bg-slate-50 dark:bg-[#160d33]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300 flex items-center justify-center border border-purple-200 dark:border-purple-700/50">
              <PackageCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white">سفارشات من و وضعیت پروژه‌ها</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                پیگیری مراحل اجرای سفارشات، ارسال پستی و پروژه‌ها
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefreshOrders}
              disabled={isRefreshing}
              title="به‌روزرسانی لحظه‌ای وضعیت از سرور"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 dark:bg-purple-900/50 dark:hover:bg-purple-800 dark:text-purple-200 text-xs font-bold transition-all border border-purple-300 dark:border-purple-800/40 active:scale-95 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-amber-500 dark:text-amber-400' : ''}`} />
              <span>{isRefreshing ? 'در حال دریافت...' : 'به‌روزرسانی وضعیت'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 dark:bg-purple-950 dark:hover:bg-purple-900 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer border border-slate-200 dark:border-purple-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Search Bar */}
        <div className="px-6 py-2.5 bg-purple-50/50 dark:bg-[#140b2e] border-b border-purple-100 dark:border-purple-900/30 flex items-center gap-2">
          <Search className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <input
            type="text"
            value={manualPhoneSearch}
            onChange={(e) => {
              setManualPhoneSearch(e.target.value);
              try {
                safeSetLocalStorage('jahesh_last_customer_phone', e.target.value);
              } catch {}
            }}
            placeholder="جستجوی سفارش با شماره موبایل، نام یا کد رهگیری (مثلاً 09881234345)..."
            className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
          />
          {manualPhoneSearch && (
            <button
              onClick={() => {
                setManualPhoneSearch('');
                try {
                  localStorage.removeItem('jahesh_last_customer_phone');
                } catch {}
              }}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 cursor-pointer"
            >
              پاک کردن
            </button>
          )}
        </div>

        {/* Orders List Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-right">
          {(userOrders || []).length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400 flex items-center justify-center mx-auto border border-purple-200 dark:border-purple-800/40 shadow-sm">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">هیچ سفارشی یافت نشد</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                {manualPhoneSearch
                  ? 'سفارشی با این شماره یا کد رهگیری پیدا نشد. لطفاً شماره موبایلی که هنگام خرید وارد کرده‌اید را چک کنید.'
                  : 'برای مشاهده سفارشات خود، شماره موبایل ثبت‌شده هنگام خرید را در کادر جستجوی بالا وارد نمایید.'}
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenShop();
                }}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-lg cursor-pointer"
              >
                مشاهده فروشگاه و خدمات
              </button>
            </div>
          ) : (
            (userOrders || []).map((order) => {
              const stepIdx = getStepIndex(order.status);
              const isCanceled = order.status === 'لغو شده';
              const isPhysicalDelivery =
                order.status === 'ارسال شده به پست' ||
                order.status === 'ارسال شده' ||
                order.status === 'تحویل به پست / پیک';

              return (
                <div
                  key={order.id}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-[#170f35] border border-slate-200 dark:border-purple-900/50 space-y-4 hover:border-purple-400 dark:hover:border-purple-700/60 transition-all shadow-sm dark:shadow-md"
                >
                  {/* Header of card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-purple-900/40 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-purple-900 bg-purple-100 border border-purple-300 dark:text-purple-300 dark:bg-purple-950/80 dark:border-purple-800/50 px-2.5 py-1 rounded-lg">
                        {order.id}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{order.date}</span>
                    </div>
                    <div>{getStatusBadge(order.status)}</div>
                  </div>

                  {/* 4-Step Visual Progress Stepper */}
                  {!isCanceled && (
                    <div className="bg-white dark:bg-[#100827] p-3.5 rounded-xl border border-slate-200 dark:border-purple-900/40 space-y-2 shadow-inner">
                      <div className="flex items-center justify-between text-[11px] text-slate-700 dark:text-slate-300 font-bold px-1">
                        <span>مراحل اجرای سفارش:</span>
                        <span className="text-purple-700 dark:text-purple-300 text-[10px] font-bold">
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
                              ? 'bg-emerald-100/90 border-emerald-300 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-500/50 dark:text-emerald-300'
                              : 'bg-slate-100 border-slate-200 text-slate-400 dark:bg-purple-950/20 dark:border-purple-900/30 dark:text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1 font-bold mb-0.5">
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            <span>۱. پرداخت موفق</span>
                          </div>
                          <span className="text-[9px] text-emerald-700 dark:text-emerald-400/80 font-medium">تایید شاپرک</span>
                        </div>

                        {/* Step 2 */}
                        <div
                          className={`p-2 rounded-lg border transition-all ${
                            stepIdx >= 2
                              ? 'bg-purple-100/90 border-purple-300 text-purple-900 dark:bg-purple-900/40 dark:border-purple-500/50 dark:text-purple-200'
                              : 'bg-slate-100 border-slate-200 text-slate-400 dark:bg-purple-950/20 dark:border-purple-900/30 dark:text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1 font-bold mb-0.5">
                            {stepIdx >= 2 ? (
                              <Check className="w-3 h-3 text-purple-700 dark:text-purple-400" />
                            ) : (
                              <Clock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                            )}
                            <span>۲. بررسی و تایید</span>
                          </div>
                          <span className="text-[9px] text-slate-600 dark:text-slate-400 font-medium">آماده‌سازی</span>
                        </div>

                        {/* Step 3 */}
                        <div
                          className={`p-2 rounded-lg border transition-all ${
                            stepIdx >= 3
                              ? isPhysicalDelivery
                                ? 'bg-cyan-100/90 border-cyan-300 text-cyan-900 dark:bg-cyan-950/50 dark:border-cyan-500/60 dark:text-cyan-200 shadow-sm'
                                : 'bg-indigo-100/90 border-indigo-300 text-indigo-900 dark:bg-indigo-950/50 dark:border-indigo-500/60 dark:text-indigo-200'
                              : 'bg-slate-100 border-slate-200 text-slate-400 dark:bg-purple-950/20 dark:border-purple-900/30 dark:text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1 font-bold mb-0.5">
                            {stepIdx >= 3 ? (
                              isPhysicalDelivery ? (
                                <Truck className="w-3 h-3 text-cyan-700 dark:text-cyan-300" />
                              ) : (
                                <Code className="w-3 h-3 text-indigo-700 dark:text-indigo-300" />
                              )
                            ) : (
                              <Clock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                            )}
                            <span>۳. {isPhysicalDelivery ? 'ارسال پستی' : 'اجرای سفارش'}</span>
                          </div>
                          <span className="text-[9px] text-slate-600 dark:text-slate-400 font-medium">
                            {isPhysicalDelivery ? 'تحویل به پست' : 'کدنویسی و طراحی'}
                          </span>
                        </div>

                        {/* Step 4 */}
                        <div
                          className={`p-2 rounded-lg border transition-all ${
                            stepIdx >= 4
                              ? 'bg-emerald-100/90 border-emerald-300 text-emerald-900 dark:bg-emerald-950/50 dark:border-emerald-500/60 dark:text-emerald-200 shadow-sm'
                              : 'bg-slate-100 border-slate-200 text-slate-400 dark:bg-purple-950/20 dark:border-purple-900/30 dark:text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1 font-bold mb-0.5">
                            {stepIdx >= 4 ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <Clock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                            )}
                            <span>۴. تحویل نهایی</span>
                          </div>
                          <span className="text-[9px] text-slate-600 dark:text-slate-400 font-medium">تکمیل سفارش</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Items in order */}
                  <div className="space-y-2">
                    {(order.items || []).map((item, idx) => {
                      const prod = getResolvedProduct(item.product);
                      const prodImg = prod?.image || item.product?.image;

                      return (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-xs bg-white dark:bg-[#120a2a] p-2.5 rounded-xl border border-slate-200 dark:border-purple-900/40 hover:border-purple-400 dark:hover:border-purple-700/50 transition-colors shadow-xs"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-purple-800/60 overflow-hidden flex items-center justify-center shrink-0 p-0.5 shadow-sm">
                              {prodImg ? (
                                <img
                                  src={prodImg}
                                  alt={prod.title}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                              )}
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm block line-clamp-1">
                                {prod.title}
                                {item.selectedPlan ? ` (${item.selectedPlan.name})` : ''}
                              </span>
                              <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
                                <span>تعداد: <strong className="text-purple-700 dark:text-purple-300 font-bold">{item.quantity}</strong> عدد</span>
                                {item.selectedPlan ? (
                                  <>
                                    <span>•</span>
                                    <span className="text-amber-700 dark:text-amber-300 font-bold">تعرفه {item.selectedPlan.name}</span>
                                  </>
                                ) : prod.category ? (
                                  <>
                                    <span>•</span>
                                    <span className="text-purple-700 dark:text-purple-400 font-bold">{prod.category}</span>
                                  </>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <span className="text-purple-900 dark:text-amber-300 font-black text-xs sm:text-sm shrink-0">
                            {formatPrice((item.selectedPlan?.price !== undefined ? item.selectedPlan.price : prod.price) * item.quantity)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Details Footer */}
                  <div className="bg-white dark:bg-[#110926] p-3 rounded-xl border border-slate-200 dark:border-purple-900/40 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs shadow-xs">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] font-medium">کد رهگیری / مرجع بانکی:</span>
                      <span className="font-mono text-purple-800 dark:text-purple-300 font-black">
                        {order.zibalRefNumber || order.paymentRefId || order.trackingCode || 'ثبت شده'}
                      </span>
                      {order.zibalTrackId && order.zibalTrackId !== (order.paymentRefId || order.trackingCode) && (
                        <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono block">
                          شناسه تراکنش: {order.zibalTrackId}
                        </span>
                      )}
                    </div>

                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] font-medium">دامنه یا توضیحات:</span>
                      <span className="font-mono text-slate-800 dark:text-amber-300 font-bold">
                        {order.requestedDomain || order.clientNotes || 'ثبت در مرحله بریف'}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] font-medium">مبلغ نهایی پرداختی:</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-black text-sm">
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
                      <div className="bg-gradient-to-br from-amber-500/15 via-slate-100 to-amber-500/10 dark:from-amber-500/15 dark:via-[#180e30] dark:to-orange-600/10 border border-amber-400/50 dark:border-amber-500/40 rounded-2xl p-4 text-right space-y-3 shadow-md my-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-amber-300 dark:border-amber-500/30">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">🏢</span>
                            <div>
                              <span className="font-black text-amber-900 dark:text-amber-400 text-xs sm:text-sm block">
                                حساب کاربری و لایسنس سامانه مدیریت املاک جهش
                              </span>
                              <span className="text-[10px] text-slate-700 dark:text-slate-300 font-medium">
                                شناسه لایسنس: <strong className="font-mono text-amber-800 dark:text-amber-300">{license.licenseKey}</strong>
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/40 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                              <span>اشتراک فعال ({license.days} روزه)</span>
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {/* نام کاربری */}
                          <div className="bg-white dark:bg-black/50 p-2.5 rounded-xl border border-amber-300 dark:border-amber-500/20 flex items-center justify-between shadow-xs">
                            <div className="space-y-0.5">
                              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-sans font-medium">نام کاربری اختصاصی:</span>
                              <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">{license.username}</span>
                            </div>
                            <button
                              onClick={() => handleCopyText(license.username, `user-${order.id}`)}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 dark:text-amber-300 text-[11px] font-bold transition-colors cursor-pointer border border-amber-300 dark:border-transparent"
                            >
                              <Copy className="w-3 h-3" />
                              <span>{isUserCopied ? 'کپی شد!' : 'کپی'}</span>
                            </button>
                          </div>

                          {/* رمز عبور اختصاصی */}
                          <div className="bg-white dark:bg-black/50 p-2.5 rounded-xl border border-amber-300 dark:border-amber-500/20 flex items-center justify-between shadow-xs">
                            <div className="space-y-0.5">
                              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-sans font-medium">رمز عبور اختصاصی:</span>
                              <span className="font-mono font-bold text-amber-800 dark:text-amber-300 text-xs tracking-wider">{license.password}</span>
                            </div>
                            <button
                              onClick={() => handleCopyText(license.password, `pass-${order.id}`)}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 dark:text-amber-300 text-[11px] font-bold transition-colors cursor-pointer border border-amber-300 dark:border-transparent"
                            >
                              <Copy className="w-3 h-3" />
                              <span>{isPassCopied ? 'کپی شد!' : 'کپی'}</span>
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-1">
                          <span className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                            اعتبار اشتراک تا: <strong className="text-amber-800 dark:text-amber-300 font-bold">{license.expiresAt}</strong>
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

                  {/* کارت اختصاصی مشخصات ورود به اپلیکیشن هوش مصنوعی (ویندوز / اندروید) */}
                  {(order.appLicense || hasAiAppInItems(order.items)) && (() => {
                    const license = order.appLicense || generateAppLicense(order, currentUser);
                    const isUserCopied = copiedField === `ai-user-${order.id}`;
                    const isPassCopied = copiedField === `ai-pass-${order.id}`;
                    const isKeyCopied = copiedField === `ai-key-${order.id}`;
                    const { isExpired, daysRemaining, formattedExpiryFa } = checkLicenseStatus(license);

                    return (
                      <div className="bg-gradient-to-br from-indigo-950/30 via-[#180f35] to-purple-950/40 border border-amber-400/70 rounded-2xl p-4 text-right space-y-3 shadow-md my-2 text-slate-100">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-purple-800/60">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">⚡</span>
                            <div>
                              <span className="font-black text-amber-300 text-xs sm:text-sm block">
                                مشخصات ورود و لایسنس نرم‌افزار: {license.appName || license.productTitle}
                              </span>
                              <span className="text-[10px] text-purple-200">
                                قابل استفاده در اپلیکیشن ویندوز و اندروید • شناسه: <strong className="font-mono text-amber-300">{license.licenseKey}</strong>
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 ${
                              isExpired
                                ? 'bg-rose-900/60 text-rose-200 border border-rose-600/50'
                                : 'bg-emerald-900/60 text-emerald-200 border border-emerald-500/50'
                            }`}>
                              <span className={`w-2 h-2 rounded-full ${isExpired ? 'bg-rose-400' : 'bg-emerald-400 animate-pulse'}`} />
                              <span>{isExpired ? 'اشتراک پایان یافته' : `اشتراک فعال (${daysRemaining} روز باقیمانده)`}</span>
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {/* نام کاربری */}
                          <div className="bg-[#110826] p-2.5 rounded-xl border border-purple-800/60 flex items-center justify-between">
                            <div className="space-y-0.5">
                              <span className="text-[10px] text-slate-400 block font-sans">نام کاربری ورود (Username):</span>
                              <span className="font-mono font-bold text-amber-300 text-xs">{license.username}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopyText(license.username, `ai-user-${order.id}`)}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-800/80 hover:bg-purple-700 text-white text-[11px] font-bold transition-colors cursor-pointer"
                            >
                              <Copy className="w-3 h-3" />
                              <span>{isUserCopied ? 'کپی شد!' : 'کپی'}</span>
                            </button>
                          </div>

                          {/* رمز عبور */}
                          <div className="bg-[#110826] p-2.5 rounded-xl border border-purple-800/60 flex items-center justify-between">
                            <div className="space-y-0.5">
                              <span className="text-[10px] text-slate-400 block font-sans">رمز عبور ورود (Password):</span>
                              <span className="font-mono font-bold text-emerald-300 text-xs tracking-wider">{license.password}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopyText(license.password, `ai-pass-${order.id}`)}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-800/80 hover:bg-purple-700 text-white text-[11px] font-bold transition-colors cursor-pointer"
                            >
                              <Copy className="w-3 h-3" />
                              <span>{isPassCopied ? 'کپی شد!' : 'کپی'}</span>
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-1 text-xs">
                          <span className="text-[11px] text-slate-300">
                            مدت اشتراک: <strong>{license.days} روز</strong> • تاریخ انقضا: <strong className="text-amber-300">{formattedExpiryFa}</strong>
                          </span>

                          <button
                            type="button"
                            onClick={() => {
                              const creds = `نرم‌افزار: ${license.appName || license.productTitle}\nنام کاربری: ${license.username}\nرمز عبور: ${license.password}\nکلید لایسنس: ${license.licenseKey}\nانقضا: ${formattedExpiryFa}`;
                              handleCopyText(creds, `ai-key-${order.id}`);
                            }}
                            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Copy className="w-3.5 h-3.5" />
                            <span>{isKeyCopied ? 'همه مشخصات کپی شد!' : 'کپی کامل اطلاعات ورود به نرم‌افزار'}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      * جهت هماهنگی و ارسال سریع، پشتیبانی جهش همواره پاسخگوی شماست.
                    </span>
                    <div className="flex items-center gap-2">
                      {(order.items || []).some(it => it.product?.id === 'pkg-amlak-jahesh' || it.product?.title?.includes('املاک')) && onOpenAmlakApp && currentUser?.role === 'admin' && (
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
                        className="text-xs text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-white flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-lg bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/40 dark:hover:bg-purple-900/70 transition-colors cursor-pointer border border-purple-200 dark:border-purple-800/40"
                      >
                        <FileText className="w-3.5 h-3.5" />
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
        <div className="px-6 py-4 bg-slate-50 dark:bg-[#150d31] border-t border-slate-200 dark:border-purple-900/50 flex items-center justify-between">
          <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
            پشتیبانی تلفنی و تلگرامی ۲۴ ساعته تیم جهش کالا فعال است.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
          >
            بستن
          </button>
        </div>
      </div>

      {/* Modern Digital Invoice Modal */}
      {invoiceOrder && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-[#140b2e] border border-slate-200 dark:border-purple-800 rounded-3xl p-6 max-w-md w-full space-y-4 text-right shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-purple-900 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">فاکتور رسمی سفارش {invoiceOrder.id}</h4>
              </div>
              <button
                onClick={() => setInvoiceOrder(null)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#0c061d] p-4 rounded-2xl border border-slate-200 dark:border-purple-900/50">
              <div className="flex justify-between border-b border-slate-200 dark:border-purple-950 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">شماره فاکتور:</span>
                <span className="font-mono font-bold text-purple-800 dark:text-purple-300">{invoiceOrder.id}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-purple-950 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">کد پیگیری شاپرک/زیبال:</span>
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">{invoiceOrder.trackingCode}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-purple-950 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">نام کاربری خریدار:</span>
                <span className="font-bold font-mono text-purple-900 dark:text-amber-300">
                  {currentUser?.username || (!invoiceOrder.customerName?.includes('09') && invoiceOrder.customerName !== 'خریدار جهش‌کالا' ? invoiceOrder.customerName : (invoiceOrder.userId && !invoiceOrder.userId.startsWith('09') && !invoiceOrder.userId.startsWith('cust-09') ? invoiceOrder.userId : (currentUser?.fullName || invoiceOrder.customerName)))}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-purple-950 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">شماره تماس:</span>
                <span className="font-mono text-purple-800 dark:text-amber-300 font-bold" dir="ltr">
                  {invoiceOrder.customerPhone}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-purple-950 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">تاریخ پرداخت:</span>
                <span>{invoiceOrder.date}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-purple-950 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">وضعیت فعلی سفارش:</span>
                <div>{getStatusBadge(invoiceOrder.status)}</div>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-700 dark:text-slate-400 font-bold">مبلغ نهایی پرداختی:</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-black text-sm">
                  {formatPrice(invoiceOrder.totalAmount)}
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-purple-800 dark:text-purple-300 block">اقلام فاکتور:</span>
              <div className="max-h-48 overflow-y-auto space-y-1.5 text-xs">
                {(invoiceOrder.items || []).map((item, idx) => {
                  const prod = getResolvedProduct(item.product);
                  const prodImg = prod?.image || item.product?.image;

                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-slate-50 dark:bg-purple-950/40 p-2 rounded-xl border border-slate-200 dark:border-purple-900/40"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-black/60 border border-slate-200 dark:border-purple-800/50 overflow-hidden flex items-center justify-center shrink-0 p-0.5">
                          {prodImg ? (
                            <img src={prodImg} alt={prod.title} className="w-full h-full object-contain" />
                          ) : (
                            <Package className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          )}
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-slate-900 dark:text-white block text-xs">
                            {prod.title}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">
                            تعداد: {item.quantity} عدد
                          </span>
                        </div>
                      </div>
                      <span className="font-bold text-purple-900 dark:text-amber-300 text-xs">
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
                className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>چاپ یا ذخیره فاکتور</span>
              </button>
              <button
                onClick={() => setInvoiceOrder(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-white/10 dark:hover:bg-white/20 dark:text-slate-300 text-xs font-bold cursor-pointer"
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

