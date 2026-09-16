import React, { useState, useEffect, Suspense } from 'react';
import {
  Sparkles, CheckCircle2, Filter, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Product, CartItem, Order, User, OrderStatus, Coupon, BannerSlide, SubscriptionPlan } from './types';
import { supabase } from './lib/supabase';
import { areSameUser } from './lib/userUtils';
import { INITIAL_PRODUCTS, INITIAL_BANNERS } from './data/initialData';
import {
  fetchProductsFromDb,
  saveProductToDb,
  deleteProductFromDb,
  mergeTwoProducts,
  fetchOrdersFromDb,
  saveOrderToDb,
  updateOrderStatusInDb,
  deleteOrderFromDb,
  clearAllOrdersFromDb,
  fetchCouponsFromDb,
  saveCouponToDb,
  deleteCouponFromDb,
  INITIAL_COUPONS,
  fetchBannersFromDb,
  saveBannerToDb,
  saveAllBannersToDb,
  deleteBannerFromDb,
  parseOrderTimestamp,
  safeSetLocalStorage,
  subscribeToProductsRealtime,
} from './lib/dbService';
import {
  verifyZibalPayment,
  getPendingOrder,
  clearPendingOrder,
  ZIBAL_DEFAULT_MERCHANT,
} from './lib/zibalService';
import { hasAmlakInItems, generateAmlakLicense } from './lib/amlakLicenseService';
import { hasAiAppInItems, generateAppLicense, registerAppLicenseOnServer, checkLicenseStatus } from './lib/appLicenseService';
import { AppSubscriptionLicense } from './types';
import { AppLicenseModal } from './components/AppLicenseModal';
import { isProductMatchingCategoryOrGuild, isProductMatchingSearchQuery } from './lib/guildMatcher';
import confetti from 'canvas-confetti';

// Digikala-styled Components
import { DigikalaHeader } from './components/DigikalaHeader';
import { DigikalaSlider } from './components/DigikalaSlider';
import { DigikalaCategories } from './components/DigikalaCategories';
import { DigikalaIncredibleOffer } from './components/DigikalaIncredibleOffer';
import { DigikalaBenefits } from './components/DigikalaBenefits';
import { DigikalaFooter } from './components/DigikalaFooter';
import { ProductCard } from './components/ProductCard';

// Modals
import { CartModal } from './components/CartModal';
import { TermsModal } from './components/TermsModal';
import { PaymentGatewayModal } from './components/PaymentGatewayModal';
import { AuthModal } from './components/AuthModal';
import { AdminPanel } from './components/AdminPanel';
import { UserOrdersModal } from './components/UserOrdersModal';
import { UserProfileModal } from './components/UserProfileModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { LiveChatWidget } from './components/LiveChatWidget';
import { FooterInfoModal } from './components/FooterInfoModal';
import { AmlakAppModal } from './components/AmlakAppModal';
import { SubscriptionDurationModal } from './components/SubscriptionDurationModal';
import { ProductPlansModal } from './components/ProductPlansModal';

export function sanitizeProduct(p: any): Product | null {
  if (!p || typeof p !== 'object') return null;
  const title = (p.title || p.name || '').trim();
  if (!title) return null;
  if (title === 'محصول جهش کالا' && (!p.price || Number(p.price) === 0)) return null;
  const id = p.id ? String(p.id).trim() : '';
  if (!id || id.startsWith('prod-fallback')) return null;

  const rawPrice = p.price;
  const safePrice = typeof rawPrice === 'number' && !isNaN(rawPrice) ? rawPrice : (Number(rawPrice) || 0);
  const rawOrig = p.originalPrice;
  const safeOriginalPrice = typeof rawOrig === 'number' && !isNaN(rawOrig) ? rawOrig : (rawOrig ? Number(rawOrig) : undefined);
  const safeDiscount = typeof p.discountPercent === 'number' ? p.discountPercent : undefined;

  return {
    ...p,
    id,
    title,
    category: p.category || 'کالای دیجیتال',
    price: safePrice,
    originalPrice: safeOriginalPrice,
    discountPercent: safeDiscount,
    rating: typeof p.rating === 'number' ? p.rating : 5,
    reviewsCount: typeof p.reviewsCount === 'number' ? p.reviewsCount : 1,
    image: p.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    images: Array.isArray(p.images) && p.images.length > 0 ? p.images : (p.image ? [p.image] : []),
    description: p.description || '',
    features: Array.isArray(p.features) ? p.features : [],
    inStock: p.inStock !== false,
    warranty: p.warranty || 'گارانتی اصالت و سلامت جهش',
  };
}

export function sanitizeProductsList(list: any[]): Product[] {
  if (!Array.isArray(list)) return INITIAL_PRODUCTS;
  const cleaned = list.map(sanitizeProduct).filter((p): p is Product => p !== null);
  return cleaned.length > 0 ? cleaned : INITIAL_PRODUCTS;
}

export default function App() {
  // 1. Current logged in user (stored in localStorage)
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('jahesh_current_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // 2. Products state (persisted so admin additions and edits appear immediately)
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('jahesh_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const cleaned = parsed.map(sanitizeProduct).filter((p): p is Product => p !== null);
          if (cleaned.length > 0) {
            return cleaned;
          }
        }
      }
      return INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  // 3. Orders state (persisted)
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('jahesh_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 4. Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('jahesh_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed
            .filter((item) => item && item.product && typeof item.product === 'object')
            .map((item) => ({
              ...item,
              product: sanitizeProduct(item.product),
              quantity: typeof item.quantity === 'number' && item.quantity > 0 ? item.quantity : 1,
            }));
        }
      }
      return [];
    } catch {
      return [];
    }
  });

  // 5. Coupons state
  const [coupons, setCoupons] = useState<Coupon[]>(() => {
    try {
      const saved = localStorage.getItem('jahesh_coupons');
      return saved ? JSON.parse(saved) : INITIAL_COUPONS;
    } catch {
      return INITIAL_COUPONS;
    }
  });

  // 6. Banners state (persisted in localStorage and cloud)
  const [banners, setBanners] = useState<BannerSlide[]>(() => {
    try {
      const saved = localStorage.getItem('jahesh_banners');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return INITIAL_BANNERS;
    } catch {
      return INITIAL_BANNERS;
    }
  });

  // 7. Zibal merchant
  const [zibalMerchant, setZibalMerchant] = useState<string>(() => {
    const saved = localStorage.getItem('jahesh_zibal_merchant');
    if (!saved || saved === 'zibal-jahesh-gateway') {
      return ZIBAL_DEFAULT_MERCHANT;
    }
    return saved;
  });

  // State for showing the completed order receipt after returning from Zibal
  const [completedOrderReceipt, setCompletedOrderReceipt] = useState<{
    order: Order;
    refNumber?: string;
    trackId?: string;
  } | null>(null);

  // Modals & UI states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [appliedCheckoutCoupon, setAppliedCheckoutCoupon] = useState<{ code: string; discountPercent: number; discountAmount: number } | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [userOrdersModalOpen, setUserOrdersModalOpen] = useState(false);
  const [userProfileModalOpen, setUserProfileModalOpen] = useState(false);
  const [detailModalProduct, setDetailModalProduct] = useState<Product | null>(null);
  const [subscriptionModalProduct, setSubscriptionModalProduct] = useState<{ product: Product; initialIsInstantBuy?: boolean; requestedDomain?: string } | null>(null);
  const [customPlansModalProduct, setCustomPlansModalProduct] = useState<{ product: Product; initialIsInstantBuy?: boolean; requestedDomain?: string } | null>(null);
  const [footerInfoModalOpen, setFooterInfoModalOpen] = useState(false);
  const [amlakModalOpen, setAmlakModalOpen] = useState(false);
  const [guildsModalOpen, setGuildsModalOpen] = useState(false);
  const [aiAppLicenseModalLicense, setAiAppLicenseModalLicense] = useState<AppSubscriptionLicense | null>(null);
  const [activeFooterTopic, setActiveFooterTopic] = useState('terms');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Theme State: Dark mode (default) vs Light mode (سفید و بنفش)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const savedTheme = localStorage.getItem('jahesh_theme');
      return savedTheme === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      try {
        safeSetLocalStorage('jahesh_theme', nextTheme);
      } catch (err) {
        console.warn('Failed to save theme in localStorage', err);
      }
      return nextTheme;
    });
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  // Ensure secret coupon jahesh1395 is active and present
  useEffect(() => {
    setCoupons((prev) => {
      if (prev.some((c) => c.code.toLowerCase() === 'jahesh1395')) return prev;
      const secretCoupon: Coupon = {
        id: 'c-jahesh1395',
        code: 'jahesh1395',
        discountPercent: 68,
        targetFinalPrice: 2500000,
        description: 'کد تخفیف سرّی مدیریت: اعمال قیمت ویژه ۲,۵۰۰,۰۰۰ تومان روی پکیج طراحی سایت',
        isActive: true,
      };
      return [secretCoupon, ...prev];
    });
  }, []);

  // Handle return from Zibal Payment Gateway
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const trackId = urlParams.get('trackId');
    const success = urlParams.get('success');
    const status = urlParams.get('status');

    if (!trackId) return;

    // Clean up URL parameters from browser address bar immediately
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);

    const handleVerifyPayment = async () => {
      showToast('در حال اعتبارسنجی پرداخت با درگاه شاپرک زیبال...');
      const pendingOrder = getPendingOrder();

      const rawUser = localStorage.getItem('jahesh_current_user');
      const activeUser: User | null = currentUser || (rawUser ? JSON.parse(rawUser) : null);

      let verifyRes: any = null;
      try {
        verifyRes = await verifyZibalPayment(trackId, zibalMerchant);
      } catch (err: any) {
        console.warn('Payment verify network error:', err);
        verifyRes = { success: false, error: err?.message };
      }

      const isVerifySuccess =
        verifyRes?.success ||
        verifyRes?.result === 100 ||
        verifyRes?.result === 201;

      // In Zibal protocol: success === '1' or status === '2' means payment succeeded in Shaparak!
      const isBankSuccess = success === '1' || status === '2';

      if (isVerifySuccess || isBankSuccess) {
        try {
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch (e) {}

        const refNum = String(verifyRes?.refNumber || trackId);

        // Fallback items if pendingOrder lost
        let fallbackItems = pendingOrder?.items || [];
        if (!fallbackItems || fallbackItems.length === 0) {
          if (cartItems && cartItems.length > 0) {
            fallbackItems = [...cartItems];
          } else {
            try {
              const rawCart = localStorage.getItem('jahesh_cart');
              if (rawCart) {
                const parsed = JSON.parse(rawCart);
                if (Array.isArray(parsed) && parsed.length > 0) {
                  fallbackItems = parsed;
                }
              }
            } catch (e) {}
          }
        }

        const calculatedTotal =
          verifyRes?.amountInTomans ||
          pendingOrder?.totalAmount ||
          (fallbackItems.length > 0
            ? fallbackItems.reduce((acc: number, item: any) => acc + (item.product.price * item.quantity), 0)
            : 0);

        const orderIdToUse =
          pendingOrder?.id ||
          urlParams.get('orderId') ||
          'JAHESH-' + Math.floor(10000 + Math.random() * 90000).toString();

        const gatewayLabel = isVerifySuccess
          ? 'زیبال (Zibal - تأیید شده شاپرک)'
          : 'زیبال (Zibal - پرداخت موفق شاپرک)';

        const finalOrder: Order = {
          id: orderIdToUse,
          trackingCode: String(trackId),
          paymentRefId: refNum,
          zibalTrackId: String(trackId),
          zibalRefNumber: refNum,
          cardNumber: verifyRes?.cardNumber || '',
          paidAt: verifyRes?.paidAt || new Date().toISOString(),
          createdAt: pendingOrder?.createdAt || new Date().toISOString(),
          userId: pendingOrder?.userId || activeUser?.id || 'guest',
          customerName: pendingOrder?.customerName || activeUser?.fullName || 'مشتری گرامی',
          customerPhone: pendingOrder?.customerPhone || activeUser?.phone || '',
          customerEmail: pendingOrder?.customerEmail || activeUser?.email || '',
          requestedDomain: pendingOrder?.requestedDomain || '',
          clientNotes: pendingOrder?.clientNotes || '',
          items: fallbackItems,
          totalAmount: calculatedTotal,
          discountAmount: pendingOrder?.discountAmount || 0,
          appliedCouponCode: pendingOrder?.appliedCouponCode || '',
          status: 'تایید شده / در حال آماده‌سازی',
          paymentGateway: gatewayLabel,
          acceptedTerms: true,
          date:
            pendingOrder?.date ||
            new Date().toLocaleDateString('fa-IR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }),
        };

        if (hasAmlakInItems(fallbackItems) && !finalOrder.amlakLicense) {
          finalOrder.amlakLicense = pendingOrder?.amlakLicense || generateAmlakLicense(finalOrder, activeUser);
        }

        if (hasAiAppInItems(fallbackItems) && !finalOrder.appLicense) {
          const generatedAppLic = pendingOrder?.appLicense || generateAppLicense(finalOrder, activeUser);
          finalOrder.appLicense = generatedAppLic;
          registerAppLicenseOnServer(generatedAppLic).catch(() => {});
          setAiAppLicenseModalLicense(generatedAppLic);
        }

        // 1. Save to DB (Supabase cloud), server disk and local storage
        await saveOrderToDb(finalOrder);

        if (finalOrder.customerPhone) {
          try {
            safeSetLocalStorage('jahesh_last_customer_phone', finalOrder.customerPhone);
          } catch {}
        }

        // 2. Update React state immediately with newest first sorting
        setOrders((prev) => {
          const filtered = prev.filter(
            (o) => o.id !== finalOrder.id && (!finalOrder.trackingCode || o.trackingCode !== finalOrder.trackingCode)
          );
          const combined = [finalOrder, ...filtered];
          return combined.sort((a, b) => parseOrderTimestamp(b) - parseOrderTimestamp(a));
        });

        // 3. Clear cart & pending order
        setCartItems([]);
        localStorage.removeItem('jahesh_cart');
        clearPendingOrder();

        // 4. Show receipt modal to user
        setCompletedOrderReceipt({
          order: finalOrder,
          refNumber: refNum,
          trackId: String(trackId),
        });

        // Dispatch real-time event for any listening components
        window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: finalOrder }));

        if (isVerifySuccess) {
          showToast('پرداخت با موفقیت انجام شد و سفارش شما با موفقیت ثبت گردید.');
        } else if (verifyRes?.result === 115 || verifyRes?.invalidIp) {
          showToast('پرداخت شما در شاپرک تایید و سفارش ثبت شد. (جهت تایید نهایی در زیبال، محدودیت IP پنل زیبال را بردارید).');
        } else {
          showToast('پرداخت شما با موفقیت در شاپرک انجام شد و سفارش شما ثبت گردید.');
        }
      } else {
        if (success === '0') {
          clearPendingOrder();
          showToast('پرداخت در درگاه بانکی زیبال لغو شد یا با خطا مواجه گردید.');
        } else {
          showToast(verifyRes?.message || 'خطا در تأیید تراکنش بانکی زیبال.');
        }
      }
    };

    handleVerifyPayment();
  }, [zibalMerchant, currentUser]);

  const handleOpenFooterTopic = (topicId: string) => {
    setActiveFooterTopic(topicId);
    setFooterInfoModalOpen(true);
  };

  // Sync state & load initial data once on mount (no continuous background network polling)
  const [usersList, setUsersList] = useState<User[]>([]);
  useEffect(() => {
    let isMounted = true;
    const loadCloudData = async () => {
      try {
        const cloudProducts = await fetchProductsFromDb();
        if (!isMounted) return;
        if (cloudProducts && cloudProducts.length > 0) {
          setProducts(cloudProducts);
          try {
            safeSetLocalStorage('jahesh_products', JSON.stringify(cloudProducts));
          } catch {}
        }

        const cloudOrders = await fetchOrdersFromDb();
        if (!isMounted) return;
        if (cloudOrders) {
          setOrders(cloudOrders);
        }

        const cloudCoupons = await fetchCouponsFromDb();
        if (!isMounted) return;
        if (cloudCoupons && cloudCoupons.length > 0) {
          setCoupons(cloudCoupons);
        }

        const cloudBanners = await fetchBannersFromDb();
        if (!isMounted) return;
        if (cloudBanners && cloudBanners.length > 0) {
          setBanners(cloudBanners);
          try {
            safeSetLocalStorage('jahesh_banners', JSON.stringify(cloudBanners));
          } catch {}
        }
        
        // Load users list once
        const { fetchAllUsersFromDb } = await import('./lib/dbService');
        if (fetchAllUsersFromDb) {
          const allUsers = await fetchAllUsersFromDb();
          if (isMounted && allUsers) {
            setUsersList(allUsers);

            // Auto synchronize current logged in user's role from cloud
            const rawStored = localStorage.getItem('jahesh_current_user');
            const activeUser = currentUser || (rawStored ? JSON.parse(rawStored) : null);
            if (activeUser) {
              const cloudUser = allUsers.find((u) => areSameUser(u, activeUser));
              if (cloudUser && cloudUser.role && cloudUser.role !== activeUser.role) {
                const updated = { ...activeUser, ...cloudUser, role: cloudUser.role };
                setCurrentUser(updated);
                safeSetLocalStorage('jahesh_current_user', JSON.stringify(updated));
              }
            }
          }
        }

      } catch (err) {
        console.warn('Initial cloud sync notice:', err);
      }
    };

    loadCloudData();

    // Subscribe to Supabase real-time cloud changes for instant multi-user synchronization
    const unsubscribeRealtimeProducts = subscribeToProductsRealtime((updatedList) => {
      if (isMounted && Array.isArray(updatedList) && updatedList.length > 0) {
        const cleaned = sanitizeProductsList(updatedList);
        setProducts(cleaned);
      }
    });

    // Listen for real-time role updates via window events (Zero network overhead)
    const handleUserUpdatedEvent = (e: any) => {
      if (e.detail) {
        setCurrentUser(e.detail);
      }
    };
    window.addEventListener('jahesh-user-updated', handleUserUpdatedEvent);

    // Listen for real-time products updates via window events
    const handleProductsUpdatedEvent = (e: any) => {
      if (e.detail && Array.isArray(e.detail) && e.detail.length > 0) {
        const cleaned = sanitizeProductsList(e.detail);
        setProducts(cleaned);
        try {
          safeSetLocalStorage('jahesh_products', JSON.stringify(cleaned));
        } catch {}
      }
    };
    window.addEventListener('jahesh-products-updated', handleProductsUpdatedEvent);

    // Listen for real-time orders updates via window events
    const handleOrdersUpdatedEvent = (e: any) => {
      if (e.detail && Array.isArray(e.detail)) {
        setOrders(e.detail);
      }
    };
    window.addEventListener('jahesh-orders-updated', handleOrdersUpdatedEvent);

    // Listen for real-time banners updates via window events
    const handleBannersUpdatedEvent = (e: any) => {
      if (e.detail && Array.isArray(e.detail) && e.detail.length > 0) {
        setBanners(e.detail);
        try {
          safeSetLocalStorage('jahesh_banners', JSON.stringify(e.detail));
        } catch {}
      }
    };
    window.addEventListener('jahesh-banners-updated', handleBannersUpdatedEvent);

    // Listen for real-time users list updates via window events
    const handleUsersUpdatedEvent = (e: any) => {
      if (e.detail && Array.isArray(e.detail)) {
        setUsersList(e.detail);
      }
    };
    window.addEventListener('jahesh-users-updated', handleUsersUpdatedEvent);

    return () => {
      isMounted = false;
      if (typeof unsubscribeRealtimeProducts === 'function') {
        unsubscribeRealtimeProducts();
      }
      window.removeEventListener('jahesh-user-updated', handleUserUpdatedEvent);
      window.removeEventListener('jahesh-users-updated', handleUsersUpdatedEvent);
      window.removeEventListener('jahesh-products-updated', handleProductsUpdatedEvent);
      window.removeEventListener('jahesh-orders-updated', handleOrdersUpdatedEvent);
      window.removeEventListener('jahesh-banners-updated', handleBannersUpdatedEvent);
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      safeSetLocalStorage('jahesh_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('jahesh_current_user');
    }
  }, [currentUser]);

  useEffect(() => {
    safeSetLocalStorage('jahesh_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    safeSetLocalStorage('jahesh_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    safeSetLocalStorage('jahesh_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    safeSetLocalStorage('jahesh_coupons', JSON.stringify(coupons));
  }, [coupons]);

  useEffect(() => {
    safeSetLocalStorage('jahesh_banners', JSON.stringify(banners));
  }, [banners]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Instant Buy Handler: Quickly adds product to cart and opens checkout
  const handleInstantBuy = (product: Product, requestedDomain?: string, subscriptionDays?: number, selectedPlan?: SubscriptionPlan) => {
    if (!product || !product.id) return;

    // Check if product has custom multi-tier plans
    if (product.hasCustomPlans && product.subscriptionPlans && product.subscriptionPlans.length > 0 && !selectedPlan) {
      setDetailModalProduct(null);
      setCustomPlansModalProduct({ product, initialIsInstantBuy: true, requestedDomain });
      return;
    }

    const isAmlakOrSub = Boolean(product.isSubscription || product.id === 'pkg-amlak-jahesh' || product.category === 'اشتراک نرم‌افزار');

    if (isAmlakOrSub && !subscriptionDays && !selectedPlan) {
      setDetailModalProduct(null);
      setSubscriptionModalProduct({ product, initialIsInstantBuy: true, requestedDomain });
      return;
    }

    const finalDays = selectedPlan?.durationDays || (isAmlakOrSub ? (subscriptionDays || 30) : undefined);
    const itemPrice = selectedPlan ? selectedPlan.price : (isAmlakOrSub ? (product.pricePerDay || 250000) * (finalDays || 30) : product.price);

    const modifiedProduct = {
      ...product,
      price: itemPrice,
      subscriptionDays: finalDays,
    };

    setCartItems((prev) => {
      const safePrev = Array.isArray(prev)
        ? prev.filter((item) => item && item.product && item.product.id)
        : [];
      
      const existingIndex = safePrev.findIndex((item) => {
        if (product.hasCustomPlans) {
          return item.product.id === product.id;
        }
        if (selectedPlan) {
          return item.product.id === product.id && item.selectedPlan?.id === selectedPlan.id;
        }
        return item.product.id === product.id;
      });

      if (existingIndex >= 0) {
        return safePrev.map((item, idx) =>
          idx === existingIndex
            ? {
                ...item,
                product: modifiedProduct,
                subscriptionDays: finalDays,
                selectedPlan,
                requestedDomain: requestedDomain || item.requestedDomain,
              }
            : item
        );
      }
      return [
        ...safePrev,
        {
          product: modifiedProduct,
          quantity: 1,
          subscriptionDays: finalDays,
          selectedPlan,
          requestedDomain: requestedDomain || (product.domainIncluded ? 'دامنه انتخابی من' : undefined),
        },
      ];
    });
    setDetailModalProduct(null);
    setSubscriptionModalProduct(null);
    setCustomPlansModalProduct(null);
    setCartModalOpen(true);
  };

  // Banner Management Handlers
  const handleSaveBanner = async (banner: BannerSlide, fullList?: BannerSlide[]) => {
    let nextList: BannerSlide[] = [];
    if (fullList && Array.isArray(fullList) && fullList.length > 0) {
      nextList = fullList;
    } else {
      const idx = banners.findIndex((b) => b.id === banner.id);
      if (idx >= 0) {
        nextList = [...banners];
        nextList[idx] = banner;
      } else {
        nextList = [...banners, banner];
      }
    }
    setBanners(nextList);
    try {
      safeSetLocalStorage('jahesh_banners', JSON.stringify(nextList));
    } catch {}
    await saveAllBannersToDb(nextList);
    showToast('بنر با موفقیت در سرور ذخیره و برای تمامی موبایل‌ها همگام‌سازی شد.');
  };

  const handleDeleteBanner = async (bannerId: string, fullList?: BannerSlide[]) => {
    const nextList = (fullList && Array.isArray(fullList)) ? fullList : banners.filter((b) => b.id !== bannerId);
    setBanners(nextList);
    try {
      safeSetLocalStorage('jahesh_banners', JSON.stringify(nextList));
    } catch {}
    await saveAllBannersToDb(nextList);
    await deleteBannerFromDb(bannerId);
    showToast('بنر از اسلایدر حذف و تغییرات روی همه دستگاه‌ها اعمال شد.');
  };

  // Cart Handlers
  const handleAddToCart = (product: Product, requestedDomain?: string, subscriptionDays?: number, selectedPlan?: SubscriptionPlan) => {
    if (!product || !product.id) return;

    // Check if product has custom multi-tier plans
    if (product.hasCustomPlans && product.subscriptionPlans && product.subscriptionPlans.length > 0 && !selectedPlan) {
      setDetailModalProduct(null);
      setCustomPlansModalProduct({ product, initialIsInstantBuy: false, requestedDomain });
      return;
    }

    const isAmlakOrSub = Boolean(product.isSubscription || product.id === 'pkg-amlak-jahesh' || product.category === 'اشتراک نرم‌افزار');

    if (isAmlakOrSub && !subscriptionDays && !selectedPlan) {
      setDetailModalProduct(null);
      setSubscriptionModalProduct({ product, initialIsInstantBuy: false, requestedDomain });
      return;
    }

    const finalDays = selectedPlan?.durationDays || (isAmlakOrSub ? (subscriptionDays || 30) : undefined);
    const itemPrice = selectedPlan ? selectedPlan.price : (isAmlakOrSub ? (product.pricePerDay || 250000) * (finalDays || 30) : product.price);

    const modifiedProduct = {
      ...product,
      price: itemPrice,
      subscriptionDays: finalDays,
    };

    setCartItems((prev) => {
      const safePrev = Array.isArray(prev)
        ? prev.filter((item) => item && item.product && item.product.id)
        : [];
      
      const existingIndex = safePrev.findIndex((item) => {
        if (product.hasCustomPlans) {
          return item.product.id === product.id;
        }
        if (selectedPlan) {
          return item.product.id === product.id && item.selectedPlan?.id === selectedPlan.id;
        }
        return item.product.id === product.id;
      });

      if (existingIndex >= 0) {
        return safePrev.map((item, idx) =>
          idx === existingIndex
            ? {
                ...item,
                quantity: (product.hasCustomPlans && item.selectedPlan?.id !== selectedPlan?.id) ? 1 : item.quantity + 1,
                product: modifiedProduct,
                subscriptionDays: finalDays,
                selectedPlan,
                requestedDomain: requestedDomain || item.requestedDomain,
              }
            : item
        );
      }
      return [
        ...safePrev,
        {
          product: modifiedProduct,
          quantity: 1,
          subscriptionDays: finalDays,
          selectedPlan,
          requestedDomain: requestedDomain || (product.domainIncluded ? 'دامنه انتخابی من' : undefined),
        },
      ];
    });

    setDetailModalProduct(null);
    setSubscriptionModalProduct(null);
    setCustomPlansModalProduct(null);

    if (selectedPlan) {
      showToast(`تعرفه «${selectedPlan.name}» محصول ${product.title} با موفقیت به سبد خرید اضافه شد.`);
    } else if (isAmlakOrSub) {
      showToast(`اشتراک ${finalDays} روزه «${product.title}» با موفقیت به سبد خرید اضافه شد.`);
    } else {
      showToast(`«${product.title}» به سبد خرید اضافه شد`);
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('آیتم از سبد خرید حذف شد.');
  };

  const handleUpdateDomain = (productId: string, domain: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, requestedDomain: domain } : item
      )
    );
  };

  const handleUpdateNotes = (productId: string, notes: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, clientNotes: notes } : item
      )
    );
  };

  // Payment success handler (Saved into Supabase Cloud DB)
  const handlePaymentSuccess = async (newOrder: Order) => {
    if (hasAmlakInItems(newOrder.items) && !newOrder.amlakLicense) {
      newOrder.amlakLicense = generateAmlakLicense(newOrder, currentUser);
    }
    if (hasAiAppInItems(newOrder.items) && !newOrder.appLicense) {
      const generatedAppLic = generateAppLicense(newOrder, currentUser);
      newOrder.appLicense = generatedAppLic;
      registerAppLicenseOnServer(generatedAppLic).catch(() => {});
      setAiAppLicenseModalLicense(generatedAppLic);
    }
    setOrders((prev) => [newOrder, ...prev]);
    setCartItems([]);
    setPaymentModalOpen(false);
    setCartModalOpen(false);
    
    // Cloud persist
    await saveOrderToDb(newOrder);

    showToast('پرداخت با موفقیت انجام شد و سفارش در دیتابیس ثبت گردید.');
    setUserOrdersModalOpen(true);
  };

  // Admin Instant Free Purchase directly from Admin Panel product list
  const handleAdminInstantPurchase = async (product: Product, quantity: number = 1) => {
    const adminUser = currentUser || {
      id: 'admin-jahesh',
      username: 'jahesh',
      fullName: 'مدیر فروشگاه جهش‌کالا',
      phone: '09152331974',
      email: 'jahesh1395@gmail.com',
      role: 'admin' as const,
    };

    const orderId = 'JAHESH-ADM-' + Math.floor(10000 + Math.random() * 90000).toString();
    const isAmlakOrSub = Boolean(product.isSubscription || product.id === 'pkg-amlak-jahesh' || product.category === 'اشتراک نرم‌افزار');
    
    const newAdminOrder: Order = {
      id: orderId,
      trackingCode: 'ADM-' + Date.now().toString().slice(-6),
      paymentRefId: 'FREE-ADM-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      userId: adminUser.id,
      customerName: adminUser.fullName || 'مدیر فروشگاه جهش‌کالا',
      customerPhone: adminUser.phone || '09152331974',
      customerEmail: adminUser.email || 'jahesh1395@gmail.com',
      requestedDomain: product.domainIncluded ? 'دامنه اختصاصی مدیریت' : undefined,
      clientNotes: `ثبت سفارش رایگان از پنل مدیریت توسط ${adminUser.fullName}`,
      items: [
        {
          product: { ...product },
          quantity,
          subscriptionDays: isAmlakOrSub ? 365 : undefined,
          requestedDomain: product.domainIncluded ? 'دامنه اختصاصی مدیریت' : undefined,
          clientNotes: 'سفارش مستقیم و رایگان پنل مدیریت',
        },
      ],
      totalAmount: 0,
      discountAmount: (Number(product.price) || 0) * quantity,
      appliedCouponCode: 'ADMIN-PANEL-FREE',
      status: 'تایید شده / در حال آماده‌سازی',
      paymentGateway: 'خرید مستقیم مدیریت (۱۰۰٪ رایگان)',
      acceptedTerms: true,
      date: new Date().toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    if (isAmlakOrSub) {
      newAdminOrder.amlakLicense = generateAmlakLicense(newAdminOrder, adminUser);
    }

    if (product.isAiAppProduct || hasAiAppInItems(newAdminOrder.items)) {
      const generatedAppLic = generateAppLicense(newAdminOrder, adminUser);
      newAdminOrder.appLicense = generatedAppLic;
      registerAppLicenseOnServer(generatedAppLic).catch(() => {});
      setAiAppLicenseModalLicense(generatedAppLic);
    }

    setOrders((prev) => [newAdminOrder, ...prev]);
    await saveOrderToDb(newAdminOrder);
    showToast(`سفارش رایگان «${product.title}» برای حساب مدیریت با موفقیت در سیستم ثبت شد.`);
  };

  // Admin Free Checkout from Cart (completely bypasses Zibal gateway)
  const handleAdminCartFreeCheckout = async (appliedCoupon?: { code: string; discountPercent: number; discountAmount: number }) => {
    const adminUser = currentUser || {
      id: 'admin-jahesh',
      username: 'jahesh',
      fullName: 'مدیر فروشگاه جهش‌کالا',
      phone: '09152331974',
      email: 'jahesh1395@gmail.com',
      role: 'admin' as const,
    };

    const safeItems = Array.isArray(cartItems)
      ? cartItems.filter((item) => item && item.product && typeof item.product === 'object' && item.product.id)
      : [];

    if (safeItems.length === 0) return;

    const rawTotal = safeItems.reduce(
      (sum, item) => sum + (Number(item.product?.price) || 0) * (Number(item.quantity) || 1),
      0
    );

    const orderId = 'JAHESH-ADM-' + Math.floor(10000 + Math.random() * 90000).toString();
    const requestedDomain = safeItems.find((i) => i.requestedDomain)?.requestedDomain || '';
    const clientNotes = safeItems.map((i) => i.clientNotes).filter(Boolean).join(' | ') || 'خرید کلیه اقلام سبد توسط حساب مدیریت (۱۰۰٪ رایگان)';

    const newAdminOrder: Order = {
      id: orderId,
      trackingCode: 'ADM-' + Date.now().toString().slice(-6),
      paymentRefId: 'FREE-ADM-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      userId: adminUser.id,
      customerName: adminUser.fullName || 'مدیر فروشگاه جهش‌کالا',
      customerPhone: adminUser.phone || '09152331974',
      customerEmail: adminUser.email || 'jahesh1395@gmail.com',
      requestedDomain,
      clientNotes,
      items: [...safeItems],
      totalAmount: 0,
      discountAmount: rawTotal,
      appliedCouponCode: appliedCoupon?.code || 'ADMIN-CART-FREE',
      status: 'تایید شده / در حال آماده‌سازی',
      paymentGateway: 'خرید مستقیم مدیریت (۱۰۰٪ رایگان)',
      acceptedTerms: true,
      date: new Date().toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    if (hasAmlakInItems(safeItems)) {
      newAdminOrder.amlakLicense = generateAmlakLicense(newAdminOrder, adminUser);
    }

    if (hasAiAppInItems(safeItems)) {
      const generatedAppLic = generateAppLicense(newAdminOrder, adminUser);
      newAdminOrder.appLicense = generatedAppLic;
      registerAppLicenseOnServer(generatedAppLic).catch(() => {});
      setAiAppLicenseModalLicense(generatedAppLic);
    }

    setOrders((prev) => [newAdminOrder, ...prev]);
    setCartItems([]);
    setCartModalOpen(false);
    setPaymentModalOpen(false);
    await saveOrderToDb(newAdminOrder);

    showToast('سفارش رایگان حساب مدیریت بدون انتقال به درگاه پرداخت با موفقیت در سیستم ثبت شد.');
    setUserOrdersModalOpen(true);
  };

  // Auth handler: When user logs in
  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    try {
      safeSetLocalStorage('jahesh_current_user', JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
    showToast(`خوش آمدید ${user.fullName}`);
    // If Admin (jahesh / jahesh1395) logged in, directly open Admin Panel!
    if (user.role === 'admin') {
      setAdminModalOpen(true);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('jahesh_current_user');
    setCurrentUser(null);
    showToast('از حساب کاربری خارج شدید.');
  };

  // Admin actions (Connected with Supabase Cloud DB)
  const handleUpdateOrderStatus = async (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    await updateOrderStatusInDb(orderId, newStatus);
    showToast(`وضعیت سفارش ${orderId} در دیتابیس به‌روزرسانی شد.`);
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (confirm(`آیا از حذف سفارش ${orderId} اطمینان دارید؟`)) {
      setOrders((prev) => prev.filter((o) => o.id !== orderId));
      await deleteOrderFromDb(orderId);
      showToast(`سفارش ${orderId} از دیتابیس حذف شد.`);
    }
  };

  const handleClearAllOrders = async () => {
    if (confirm('آیا از پاکسازی تمام سفارشات اطمینان دارید؟')) {
      setOrders([]);
      localStorage.removeItem('jahesh_orders');
      await clearAllOrdersFromDb();
      showToast('کلیه سفارشات با موفقیت از دیتابیس پاکسازی شدند.');
    }
  };

  const handleAddNewProduct = async (newProduct: Product) => {
    setProducts((prev) => {
      const filtered = prev.filter((p) => p.id !== newProduct.id);
      const updated = [newProduct, ...filtered];
      try {
        safeSetLocalStorage('jahesh_products', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    await saveProductToDb(newProduct);
    showToast('محصول جدید در دیتابیس ابری ثبت و منتشر شد.');
  };

  const handleUpdateProduct = async (updatedProduct: Product) => {
    setProducts((prev) => {
      const updated = prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p));
      try {
        safeSetLocalStorage('jahesh_products', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    await saveProductToDb(updatedProduct);
    showToast(`محصول «${updatedProduct.title}» و تصویر آن در دیتابیس به‌روزرسانی شد.`);
  };

  const handleDeleteProduct = async (productId: string) => {
    if (confirm('آیا از حذف این محصول اطمینان دارید؟')) {
      setProducts((prev) => {
        const updated = prev.filter((p) => p.id !== productId);
        try {
          safeSetLocalStorage('jahesh_products', JSON.stringify(updated));
        } catch {}
        return updated;
      });
      await deleteProductFromDb(productId);
      showToast('محصول از دیتابیس حذف شد.');
    }
  };

  // Coupon Admin actions (Connected with Supabase Cloud DB)
  const handleAddNewCoupon = async (newCoupon: Coupon) => {
    setCoupons((prev) => [newCoupon, ...prev]);
    await saveCouponToDb(newCoupon);
    showToast(`کد تخفیف ${newCoupon.code} در دیتابیس ثبت شد.`);
  };

  const handleDeleteCoupon = async (couponId: string) => {
    if (confirm('آیا از حذف این کد تخفیف اطمینان دارید؟')) {
      setCoupons((prev) => prev.filter((c) => c.id !== couponId));
      await deleteCouponFromDb(couponId);
      showToast('کد تخفیف از دیتابیس حذف شد.');
    }
  };

  const handleToggleCoupon = async (couponId: string) => {
    const target = coupons.find((c) => c.id === couponId);
    if (!target) return;
    const updated = { ...target, isActive: !target.isActive };
    setCoupons((prev) => prev.map((c) => (c.id === couponId ? updated : c)));
    await saveCouponToDb(updated);
    showToast(`وضعیت کد تخفیف تغییر یافت.`);
  };

  const handleUpdateZibalMerchant = (merchant: string) => {
    setZibalMerchant(merchant);
    safeSetLocalStorage('jahesh_zibal_merchant', merchant);
    showToast('مرچنت زیبال ذخیره شد.');
  };

  // User Management Actions
  const handleDeleteUser = async (userId: string) => {
    setUsersList((prev) => prev.filter((u) => u.id !== userId));
    const { deleteUserFromDb } = await import('./lib/dbService');
    await deleteUserFromDb(userId);
    showToast('کاربر با موفقیت حذف شد.');
  };

  const handleUpdateUser = async (updatedUser: User) => {
    // 1. Immediately update local state matching via areSameUser
    setUsersList((prev) =>
      prev.map((u) => {
        if (areSameUser(u, updatedUser)) {
          return { ...u, ...updatedUser, role: updatedUser.role };
        }
        return u;
      })
    );

    // 2. Sync currentUser if target is current logged in account
    if (currentUser && areSameUser(currentUser, updatedUser)) {
      const synced = { ...currentUser, ...updatedUser, role: updatedUser.role };
      setCurrentUser(synced);
      try {
        safeSetLocalStorage('jahesh_current_user', JSON.stringify(synced));
      } catch (err) {
        console.warn(err);
      }
    }

    // 3. Persist across multi-layered storage (Local, Server, Supabase)
    const { updateUserInDb, fetchAllUsersFromDb } = await import('./lib/dbService');
    await updateUserInDb(updatedUser);

    // 4. Refetch all users to make sure state is 100% in sync without reverting the role
    try {
      const freshUsers = await fetchAllUsersFromDb();
      if (freshUsers && freshUsers.length > 0) {
        setUsersList(freshUsers.map((u) => (areSameUser(u, updatedUser) ? { ...u, role: updatedUser.role } : u)));
      }
    } catch {}

    const roleTitle =
      updatedUser.role === 'admin'
        ? 'مدیر ارشد (Super Admin)'
        : updatedUser.role === 'operator'
        ? 'ادمین محدود (اپراتور)'
        : 'کاربر عادی';
    showToast(`نقش و اطلاعات کاربر «${updatedUser.fullName}» به «${roleTitle}» تغییر یافت و ذخیره شد.`);
  };

  const handleAddNewUser = async (newUser: User, initialPass: string = '123456') => {
    setUsersList((prev) => [newUser, ...prev]);
    const { registerUserInDb } = await import('./lib/dbService');
    await registerUserInDb(newUser, initialPass);
    showToast(`کاربر جدید (${newUser.fullName}) با موفقیت ایجاد شد.`);
  };

  const scrollToIncredible = () => {
    const el = document.getElementById('digikala-incredible-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('all-products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenProductDetail = (product: Product) => {
    setDetailModalProduct(product);
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'شگفت‌انگیز') {
      scrollToIncredible();
    } else {
      scrollToProducts();
    }
  };

  // Filtered products by search AND category
  const filteredProducts = products.filter((p) => {
    if (!p) return false;

    // 1. Category / Guild Filter
    if (selectedCategory && !isProductMatchingCategoryOrGuild(p, selectedCategory)) {
      return false;
    }

    // 2. Search query filter
    if (searchQuery.trim() && !isProductMatchingSearchQuery(p, searchQuery)) {
      return false;
    }

    return true;
  });

  // Responsive pagination: Exactly divisible by columns (2 cols on mobile -> 12, 4 cols on desktop -> 24)
  // to guarantee rows are always 100% full with NO awkward single overflowing cards!
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 640 : false));
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const baseItemsPerPage = isMobile ? 12 : 24;
  const itemsPerPage = showAllProducts ? Math.max(filteredProducts.length, 1) : baseItemsPerPage;

  // Reset to first page whenever filtering or screen-size mode changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, itemsPerPage, showAllProducts]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const paginatedProducts = filteredProducts.slice(
    (safeCurrentPage - 1) * itemsPerPage,
    safeCurrentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const el = document.getElementById('all-products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Banner-to-product direct linking: Opens product modal and scrolls to view
  const handleBannerSelectProduct = (productId: string) => {
    const prod = products.find((p) => p.id === productId || p.title === productId);
    if (prod) {
      setSelectedCategory('');
      setSearchQuery('');
      setDetailModalProduct(prod);
    } else {
      setSearchQuery(productId);
      scrollToProducts();
    }
  };

  // Dynamically resolve product details (e.g. edited price, title, image) inside the cart
  const resolvedCartItems = cartItems.map((item) => {
    const latestProd = products.find((p) => p.id === item.product?.id);
    if (latestProd) {
      const isSub = latestProd.isSubscription || latestProd.id === 'pkg-amlak-jahesh' || latestProd.category === 'اشتراک نرم‌افزار';
      const days = item.subscriptionDays || item.product?.subscriptionDays || 1;
      const price = isSub ? (latestProd.pricePerDay || 250000) * days : latestProd.price;
      return {
        ...item,
        subscriptionDays: isSub ? days : undefined,
        product: {
          ...item.product,
          ...latestProd, // override with the latest details including updated price
          price,
          subscriptionDays: isSub ? days : undefined,
        },
      };
    }
    return item;
  });

  return (
    <div className={`min-h-screen flex flex-col font-['Vazirmatn',sans-serif] transition-colors duration-200 ${theme === 'light' ? 'theme-light bg-[#fbf9ff] text-slate-800' : 'theme-dark bg-[#0b0819] text-slate-100'}`}>
      <Suspense fallback={null}>
      
      {/* Toast popup */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-xs font-bold px-5 py-2.5 rounded-2xl shadow-xl border border-purple-400/40 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. DIGIKALA TOP & SUB HEADER */}
      <DigikalaHeader
        currentUser={currentUser}
        cartItems={resolvedCartItems}
        products={products}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenCart={() => setCartModalOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenOrders={() => {
          if (!currentUser) setAuthModalOpen(true);
          else setUserOrdersModalOpen(true);
        }}
        onOpenAdmin={() => {
          if (currentUser?.role === 'admin') {
            setAdminModalOpen(true);
          } else {
            setAuthModalOpen(true);
          }
        }}
        onOpenProfile={() => setUserProfileModalOpen(true)}
        onLogout={handleLogout}
        onScrollToIncredible={scrollToIncredible}
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
        onOpenTerms={() => handleOpenFooterTopic('terms')}
        onOpenContact={() => handleOpenFooterTopic('contact-branch')}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenGuildsModal={() => setGuildsModalOpen(true)}
      />

      {/* MAIN CONTAINER (Digikala Layout) */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full space-y-8">
        
        {/* 2. DIGIKALA MAIN HERO SLIDER BANNER */}
        <DigikalaSlider
          banners={banners}
          onSelectCategory={handleSelectCategory}
          onScrollToIncredible={scrollToIncredible}
          onSelectProduct={handleBannerSelectProduct}
        />

        {/* 3. DIGIKALA CIRCULAR CATEGORIES (Story-like circles row) */}
        <DigikalaCategories
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onScrollToIncredible={scrollToIncredible}
          isGuildsModalOpen={guildsModalOpen}
          onToggleGuildsModal={setGuildsModalOpen}
        />

        {/* 4. DIGIKALA INCREDIBLE OFFER (پیشنهاد شگفت‌انگیز with live countdown clock) */}
        {(!selectedCategory || selectedCategory === 'شگفت‌انگیز') && (
          <DigikalaIncredibleOffer
            products={products}
            onAddToCart={handleAddToCart}
            onInstantBuy={handleInstantBuy}
            onViewDetails={handleOpenProductDetail}
          />
        )}

        {/* 5. DIGIKALA PRODUCTS CATALOG ROW */}
        <section id="all-products-section" className="space-y-4 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-purple-900/40 pb-3 gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0" />
                <span>
                  {selectedCategory ? `کالاهای «${selectedCategory}»` : 'ویترین محصولات و خدمات جهش‌کالا'}
                </span>
              </h3>
              <span className="hidden sm:inline text-slate-500 dark:text-slate-400 font-bold">•</span>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                ضمانت اصالت کالا، بهترین قیمت بازار و تحویل سریع
              </p>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto flex-wrap">
              {filteredProducts.length > baseItemsPerPage && (
                <button
                  type="button"
                  onClick={() => {
                    setShowAllProducts((prev) => !prev);
                    setCurrentPage(1);
                  }}
                  className={`text-xs px-3 py-1 rounded-xl border transition-all cursor-pointer font-bold ${
                    showAllProducts
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-purple-950/40 hover:bg-purple-900/60 text-slate-300 border-purple-800/40'
                  }`}
                  title={showAllProducts ? 'نمایش در صفحات مرتب' : 'نمایش یکجای همه محصولات'}
                >
                  {showAllProducts
                    ? `صفحه‌بندی مرتب (${baseItemsPerPage} تایی)`
                    : `نمایش همه کالاها (${filteredProducts.length.toLocaleString('fa-IR')})`}
                </button>
              )}

              {(selectedCategory || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-1 text-xs text-rose-300 hover:text-white bg-rose-950/40 px-3 py-1 rounded-xl border border-rose-900/40 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>حذف فیلترها ({filteredProducts.length} کالا)</span>
                </button>
              )}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 p-6 bg-[#130d2a] rounded-2xl border border-purple-900/40 space-y-3">
              <p className="text-sm text-slate-300">هیچ کالایی متناسب با جستجوی شما یافت نشد.</p>
              <button
                onClick={() => {
                  setSelectedCategory('');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-purple-900 text-white text-xs font-bold"
              >
                مشاهده تمام کالاها
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 items-stretch">
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="flex flex-col h-full w-full">
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                      onInstantBuy={handleInstantBuy}
                      onViewDetails={handleOpenProductDetail}
                    />
                  </div>
                ))}
              </div>

              {/* Digikala Style Pagination Bar (12 on mobile / 24 on desktop) */}
              {!showAllProducts && totalPages > 1 && (
                <div className="mt-8 pt-6 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Page indicator text */}
                  <div className="text-xs sm:text-sm text-slate-400 font-bold text-center sm:text-right">
                    نمایش {((safeCurrentPage - 1) * itemsPerPage + 1).toLocaleString('fa-IR')} تا {Math.min(safeCurrentPage * itemsPerPage, filteredProducts.length).toLocaleString('fa-IR')} از {filteredProducts.length.toLocaleString('fa-IR')} کالا • صفحه {safeCurrentPage.toLocaleString('fa-IR')} از {totalPages.toLocaleString('fa-IR')}
                  </div>

                  {/* Pagination Buttons */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* Previous Button (Right arrow in RTL) */}
                    <button
                      onClick={() => handlePageChange(safeCurrentPage - 1)}
                      disabled={safeCurrentPage <= 1}
                      className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all border disabled:opacity-40 disabled:cursor-not-allowed bg-purple-950/40 hover:bg-purple-900/60 border-purple-800/50 text-slate-200 cursor-pointer"
                      title="صفحه قبلی"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span className="hidden sm:inline">قبلی</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                        const isActive = pageNum === safeCurrentPage;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`min-w-[36px] sm:min-w-[40px] h-[36px] sm:h-[40px] px-2 flex items-center justify-center rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                              isActive
                                ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-md scale-105 border border-amber-300'
                                : 'bg-purple-950/40 hover:bg-purple-900/60 text-slate-300 border border-purple-800/40'
                            }`}
                          >
                            {pageNum.toLocaleString('fa-IR')}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Button (Left arrow in RTL) */}
                    <button
                      onClick={() => handlePageChange(safeCurrentPage + 1)}
                      disabled={safeCurrentPage >= totalPages}
                      className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all border disabled:opacity-40 disabled:cursor-not-allowed bg-purple-950/40 hover:bg-purple-900/60 border-purple-800/50 text-slate-200 cursor-pointer"
                      title="صفحه بعدی"
                    >
                      <span className="hidden sm:inline">بعدی</span>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </section>

        {/* 6. DIGIKALA 5 TRUST BENEFITS ROW */}
        <DigikalaBenefits />

      </main>

      {/* 7. DIGIKALA FLOATING HEADSET SUPPORT CHAT (Icon on bottom-left) */}
      <Suspense fallback={null}><LiveChatWidget currentUser={currentUser} /></Suspense>

      {/* 8. DIGIKALA FOOTER */}
      <DigikalaFooter
        onOpenTerms={() => handleOpenFooterTopic('terms')}
        onOpenTopic={handleOpenFooterTopic}
      />

      {/* MODALS */}
      
      {/* Product Detail Modal */}
      <ProductDetailModal
        product={detailModalProduct}
        onClose={() => setDetailModalProduct(null)}
        onAddToCart={handleAddToCart}
        onInstantBuy={handleInstantBuy}
        onOpenAmlakApp={() => setAmlakModalOpen(true)}
        currentUser={currentUser}
      />

      {/* Real Estate App (مدیریت املاک جهش) Modal */}
      <AmlakAppModal
        isOpen={amlakModalOpen}
        onClose={() => setAmlakModalOpen(false)}
        currentUser={currentUser}
      />

      {/* Digikala Cart Modal */}
      <Suspense fallback={null}><CartModal
        isOpen={cartModalOpen}
        onClose={() => setCartModalOpen(false)}
        cartItems={resolvedCartItems}
        currentUser={currentUser}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onUpdateDomain={handleUpdateDomain}
        onUpdateNotes={handleUpdateNotes}
        termsAccepted={termsAccepted}
        onToggleTerms={() => setTermsAccepted(!termsAccepted)}
        onOpenTermsModal={() => setTermsModalOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
        onProceedToPayment={(appliedCoupon) => {
          if (currentUser?.role === 'admin') {
            handleAdminCartFreeCheckout(appliedCoupon);
            return;
          }
          setAppliedCheckoutCoupon(appliedCoupon || null);
          setPaymentModalOpen(true);
        }}
        coupons={coupons}
      /></Suspense>

      {/* Terms Modal (Rules protecting Team Jahesh) */}
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        isAccepted={termsAccepted}
        onToggleAccept={() => setTermsAccepted(!termsAccepted)}
      />

      {/* Payment Gateway (Zibal / Shaparak) Modal */}
      <PaymentGatewayModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        onCloseAll={() => {
          setPaymentModalOpen(false);
          setCartModalOpen(false);
        }}
        cartItems={resolvedCartItems}
        currentUser={currentUser}
        onPaymentSuccess={handlePaymentSuccess}
        appliedCoupon={appliedCheckoutCoupon}
        zibalMerchant={zibalMerchant}
      />

      {/* Real Bank Payment Success Modal (Zibal / Shaparak) */}
      {completedOrderReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md bg-[#100a26] border border-emerald-500/80 rounded-3xl shadow-2xl p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-black text-white">پرداخت با موفقیت انجام شد!</h3>
              <p className="text-xs text-slate-300">سفارش شما در سامانه جهش کالا و درگاه شاپرک ثبت شد.</p>
            </div>

            <div className="bg-[#170e38] rounded-2xl p-4 text-xs space-y-2.5 text-right border border-purple-900/50">
              <div className="flex justify-between items-center text-slate-300">
                <span>شماره سفارش:</span>
                <span className="font-mono text-white font-bold">{completedOrderReceipt.order.id}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>کد پیگیری شاپرک (زیبال):</span>
                <span className="font-mono text-emerald-400 font-bold">{completedOrderReceipt.trackId}</span>
              </div>
              {completedOrderReceipt.refNumber && (
                <div className="flex justify-between items-center text-slate-300">
                  <span>شماره مرجع بانکی:</span>
                  <span className="font-mono text-purple-300 font-bold">{completedOrderReceipt.refNumber}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-slate-300 pt-2 border-t border-purple-900/40">
                <span>مبلغ پرداخت‌شده:</span>
                <span className="text-emerald-400 font-black text-sm">
                  {completedOrderReceipt.order.totalAmount.toLocaleString('fa-IR')} تومان
                </span>
              </div>
            </div>

            {/* کارت اختصاصی اطلاعات لایسنس و دسترسی سامانه املاک */}
            {completedOrderReceipt.order.amlakLicense && (
              <div className="bg-gradient-to-br from-amber-500/15 to-orange-600/10 border border-amber-500/40 rounded-2xl p-4 text-right space-y-3 shadow-lg text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-amber-500/30">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🏢</span>
                    <span className="font-black text-amber-400">حساب کاربری اختصاصی سامانه املاک:</span>
                  </div>
                  <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    لایسنس ۳۰ روزه فعال
                  </span>
                </div>

                <div className="space-y-2 font-mono">
                  <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                    <span className="text-slate-400 font-sans text-[11px]">نام کاربری ورود:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-xs">{completedOrderReceipt.order.amlakLicense.username}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(completedOrderReceipt.order.amlakLicense!.username);
                          showToast('نام کاربری کپی شد.');
                        }}
                        className="text-[10px] text-amber-400 hover:text-amber-300 cursor-pointer font-sans bg-amber-500/20 px-1.5 py-0.5 rounded"
                      >
                        کپی
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                    <span className="text-slate-400 font-sans text-[11px]">رمز عبور اختصاصی:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-300 font-bold text-xs tracking-wider">{completedOrderReceipt.order.amlakLicense.password}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(completedOrderReceipt.order.amlakLicense!.password);
                          showToast('رمز عبور کپی شد.');
                        }}
                        className="text-[10px] text-amber-400 hover:text-amber-300 cursor-pointer font-sans bg-amber-500/20 px-1.5 py-0.5 rounded"
                      >
                        کپی
                      </button>
                    </div>
                  </div>
                </div>

                <a
                  href={`/amlak.html?u=${encodeURIComponent(completedOrderReceipt.order.amlakLicense.username)}&p=${encodeURIComponent(completedOrderReceipt.order.amlakLicense.password)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-xs shadow-md transition-all cursor-pointer no-underline"
                >
                  <span>ورود به سامانه مدیریت املاک در تب جدید</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* کارت اختصاصی اطلاعات لایسنس و ورود به اپلیکیشن ویندوز / اندروید ساخته شده با هوش مصنوعی */}
            {completedOrderReceipt.order.appLicense && (
              <div className="bg-gradient-to-br from-indigo-950/40 via-[#180e38] to-purple-950/50 border border-amber-400/60 rounded-2xl p-4 text-right space-y-3 shadow-lg text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-purple-800/60">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    <span className="font-black text-amber-300">حساب کاربری ورود به نرم‌افزار / اپلیکیشن:</span>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    اشتراک {completedOrderReceipt.order.appLicense.days} روزه فعال
                  </span>
                </div>

                <div className="space-y-2 font-mono">
                  <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                    <span className="text-slate-400 font-sans text-[11px]">نام کاربری ورود (Username):</span>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-300 font-bold text-xs">{completedOrderReceipt.order.appLicense.username}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(completedOrderReceipt.order.appLicense!.username);
                          showToast('نام کاربری ورود کپی شد.');
                        }}
                        className="text-[10px] text-amber-400 hover:text-amber-300 cursor-pointer font-sans bg-amber-500/20 px-1.5 py-0.5 rounded"
                      >
                        کپی
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                    <span className="text-slate-400 font-sans text-[11px]">رمز عبور ورود (Password):</span>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-300 font-bold text-xs tracking-wider">{completedOrderReceipt.order.appLicense.password}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(completedOrderReceipt.order.appLicense!.password);
                          showToast('رمز عبور ورود کپی شد.');
                        }}
                        className="text-[10px] text-amber-400 hover:text-amber-300 cursor-pointer font-sans bg-amber-500/20 px-1.5 py-0.5 rounded"
                      >
                        کپی
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (completedOrderReceipt.order.appLicense) {
                      setAiAppLicenseModalLicense(completedOrderReceipt.order.appLicense);
                    }
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>مشاهده جزئیات کامل لایسنس و راهنمای ورود به اپ</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="flex gap-2.5 pt-2">
              <button
                onClick={() => {
                  setCompletedOrderReceipt(null);
                  setUserOrdersModalOpen(true);
                }}
                className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition-colors cursor-pointer"
              >
                مشاهده پیگیری سفارشات
              </button>
              <button
                onClick={() => setCompletedOrderReceipt(null)}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Auth (Login / Register) - Enters Admin when jahesh / jahesh1395 is used */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Admin Panel (Orders, New Product Form, Zibal Settings, Coupons, Users, Banners) */}
      {adminModalOpen && (
        <AdminPanel
          isOpen={adminModalOpen}
          onClose={() => setAdminModalOpen(false)}
          currentUser={currentUser}
          onAdminInstantPurchase={handleAdminInstantPurchase}
          onOpenAmlakApp={() => setAmlakModalOpen(true)}
          orders={orders}
          onUpdateOrderStatus={handleUpdateOrderStatus}
          onDeleteOrder={handleDeleteOrder}
          onClearAllOrders={handleClearAllOrders}
          products={products}
          onAddNewProduct={handleAddNewProduct}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
          zibalMerchant={zibalMerchant}
          onUpdateZibalMerchant={handleUpdateZibalMerchant}
          coupons={coupons}
          onAddNewCoupon={handleAddNewCoupon}
          onDeleteCoupon={handleDeleteCoupon}
          onToggleCoupon={handleToggleCoupon}
          usersList={usersList}
          onDeleteUser={handleDeleteUser}
          onUpdateUser={handleUpdateUser}
          onAddNewUser={handleAddNewUser}
          banners={banners}
          onSaveBanner={handleSaveBanner}
          onDeleteBanner={handleDeleteBanner}
        />
      )}

      {/* User Orders Modal */}
      {/* User Profile Modal */}
      <UserProfileModal
        isOpen={userProfileModalOpen}
        onClose={() => setUserProfileModalOpen(false)}
        currentUser={currentUser}
        orders={orders}
      />

      <UserOrdersModal
        isOpen={userOrdersModalOpen}
        onClose={() => setUserOrdersModalOpen(false)}
        orders={orders}
        currentUser={currentUser}
        onOpenShop={() => setCartModalOpen(false)}
        products={products}
        onOpenAmlakApp={() => setAmlakModalOpen(true)}
      />

      {/* Footer Info Modal (Interactive modal for every footer link and statement) */}
      <FooterInfoModal
        isOpen={footerInfoModalOpen}
        onClose={() => setFooterInfoModalOpen(false)}
        initialTopicId={activeFooterTopic}
        onOpenTermsModal={() => setTermsModalOpen(true)}
      />

      {/* Subscription Duration Picker Modal (Opens only when user clicks Add to Cart or Instant Buy on subscription products) */}
      {subscriptionModalProduct && (
        <SubscriptionDurationModal
          product={subscriptionModalProduct.product}
          initialIsInstantBuy={subscriptionModalProduct.initialIsInstantBuy}
          onClose={() => setSubscriptionModalProduct(null)}
          onConfirm={(product, days, isInstant) => {
            if (isInstant) {
              handleInstantBuy(product, subscriptionModalProduct.requestedDomain, days);
            } else {
              handleAddToCart(product, subscriptionModalProduct.requestedDomain, days);
            }
          }}
        />
      )}

      {/* Multi-Tier Custom Subscription & Pricing Plans Selection Modal */}
      {customPlansModalProduct && (
        <ProductPlansModal
          product={customPlansModalProduct.product}
          initialIsInstantBuy={customPlansModalProduct.initialIsInstantBuy}
          onClose={() => setCustomPlansModalProduct(null)}
          onConfirm={(product, selectedPlan, isInstant) => {
            if (isInstant) {
              handleInstantBuy(product, customPlansModalProduct.requestedDomain, undefined, selectedPlan);
            } else {
              handleAddToCart(product, customPlansModalProduct.requestedDomain, undefined, selectedPlan);
            }
          }}
          onConfirmPlan={(product, selectedPlan, isInstant) => {
            if (isInstant) {
              handleInstantBuy(product, customPlansModalProduct.requestedDomain, undefined, selectedPlan);
            } else {
              handleAddToCart(product, customPlansModalProduct.requestedDomain, undefined, selectedPlan);
            }
          }}
        />
      )}

      {/* AI App Subscription License Modal (Windows / Android) */}
      <AppLicenseModal
        isOpen={Boolean(aiAppLicenseModalLicense)}
        license={aiAppLicenseModalLicense}
        onClose={() => setAiAppLicenseModalLicense(null)}
        onViewOrders={() => setUserOrdersModalOpen(true)}
      />

      </Suspense>
    </div>
  );
}
