import { supabase } from './supabase';
import { Product, Order, User, Coupon, BannerSlide } from '../types';
import { INITIAL_PRODUCTS, INITIAL_BANNERS } from '../data/initialData';
import { GUILD_SOLUTIONS_PRODUCTS } from '../data/guildProducts';


// Safe wrapper for safeSetLocalStorage to handle QuotaExceededError
export const safeSetLocalStorage = (key: string, value: string) => {
  try {
    safeSetLocalStorage(key, value);
  } catch (e: any) {
    console.error('LocalStorage SetItem Error for key:', key, e);
    if (e.name === 'QuotaExceededError' || e.message.includes('quota')) {
      console.warn('Clearing large unused data to free up localStorage space');
      try {
        const keepKeys = ['jahesh_current_user', 'jahesh_zibal_merchant', 'jahesh_cart', 'jahesh_theme'];
        const savedData: Record<string, string | null> = {};
        for (const k of keepKeys) {
          savedData[k] = localStorage.getItem(k);
        }
        localStorage.clear();
        for (const k of keepKeys) {
          if (savedData[k]) safeSetLocalStorage(k, savedData[k]);
        }
        // Try setting the new key again
        safeSetLocalStorage(key, value);
      } catch (err) {
        console.error('Failed to recover from QuotaExceededError:', err);
      }
    }
  }
};

export const INITIAL_COUPONS: Coupon[] = [
  {
    id: 'c-jahesh1395',
    code: 'jahesh1395',
    discountPercent: 68,
    targetFinalPrice: 2500000,
    description: 'کد تخفیف سرّی مدیریت: اعمال قیمت ویژه ۲,۵۰۰,۰۰۰ تومان روی پکیج طراحی سایت',
    isActive: true,
  },
  {
    id: 'c-jahesh20',
    code: 'JAHESH20',
    discountPercent: 20,
    description: 'تخفیف ویژه ۲۰ درصدی افتتاحیه جهش‌کالا',
    isActive: true,
  },
  {
    id: 'c-golden10',
    code: 'GOLDEN10',
    discountPercent: 10,
    description: 'تخفیف ۱۰ درصدی پکیج‌های طلایی',
    isActive: true,
  },
  {
    id: 'c-vip30',
    code: 'VIP30',
    discountPercent: 30,
    description: 'تخفیف ۳۰ درصدی مشتریان ویژه',
    isActive: true,
  },
];

// 1. PRODUCTS DB SERVICE & SMART DATA MERGING
export const mergeTwoProducts = (current: Product, incoming: Product): Product => {
  if (!current) return incoming;
  if (!incoming) return current;

  // 1. Timestamp comparison: newer update always takes priority
  if (incoming.updatedAt && current.updatedAt) {
    const incomingTime = new Date(incoming.updatedAt).getTime();
    const currentTime = new Date(current.updatedAt).getTime();
    if (!isNaN(incomingTime) && !isNaN(currentTime)) {
      if (incomingTime > currentTime) {
        return {
          ...current,
          ...incoming,
          subscriptionPlans: (incoming.subscriptionPlans && incoming.subscriptionPlans.length > 0)
            ? incoming.subscriptionPlans
            : current.subscriptionPlans,
          gallery: (incoming.gallery && incoming.gallery.length > 0) ? incoming.gallery : current.gallery,
        };
      } else {
        return current;
      }
    }
  }

  // 2. If only one has updatedAt, the explicitly updated one takes priority
  if (incoming.updatedAt && !current.updatedAt) {
    return {
      ...current,
      ...incoming,
      subscriptionPlans: (incoming.subscriptionPlans && incoming.subscriptionPlans.length > 0)
        ? incoming.subscriptionPlans
        : current.subscriptionPlans,
      gallery: (incoming.gallery && incoming.gallery.length > 0) ? incoming.gallery : current.gallery,
    };
  }
  if (!incoming.updatedAt && current.updatedAt) {
    return current;
  }

  // 3. Image preservation: custom images (e.g. /uploads/ or data: or custom URLs) never get overwritten by default stock unsplash photos
  const isIncomingStockUnsplash = incoming.image && incoming.image.includes('images.unsplash.com');
  const isCurrentCustom = current.image && (current.image.startsWith('/uploads/') || current.image.startsWith('data:') || !current.image.includes('images.unsplash.com'));
  const preferredImage = (isCurrentCustom && isIncomingStockUnsplash) ? current.image : (incoming.image || current.image);

  // 4. Incredibility & custom plans preservation
  const preferredIsIncredible = incoming.isIncredible !== undefined ? Boolean(incoming.isIncredible) : Boolean(current.isIncredible);
  const preferredPlans = (incoming.subscriptionPlans && incoming.subscriptionPlans.length > 0)
    ? incoming.subscriptionPlans
    : current.subscriptionPlans;
  const preferredGallery = (incoming.gallery && incoming.gallery.length > 0)
    ? incoming.gallery
    : current.gallery;

  return {
    ...current,
    ...incoming,
    image: preferredImage,
    isIncredible: preferredIsIncredible,
    subscriptionPlans: preferredPlans,
    gallery: preferredGallery,
  };
};

export function cleanProductItem(p: any): Product | null {
  if (!p || typeof p !== 'object') return null;
  const title = (p.title || p.name || '').trim();
  if (!title) return null;
  // Reject dummy fallback items
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

export const fetchProductsFromDb = async (): Promise<Product[]> => {
  let authoritativeList: Product[] | null = null;

  // 0. Read current local products cache
  let localProducts: Product[] = [];
  try {
    const rawLocal = localStorage.getItem('jahesh_products');
    if (rawLocal) {
      const parsed = JSON.parse(rawLocal);
      if (Array.isArray(parsed)) {
        localProducts = parsed.map(cleanProductItem).filter((p): p is Product => p !== null);
      }
    }
  } catch {}

  // 1. Layer 1: Primary Cloud Check - Supabase SYSTEM_CONFIG_PRODUCTS (shared across all devices & Vercel)
  try {
    const { data: configData, error: configError } = await supabase
      .from('chats')
      .select('messages, last_updated')
      .eq('user_id', 'SYSTEM_CONFIG_PRODUCTS')
      .maybeSingle();

    if (!configError && configData && Array.isArray(configData.messages) && configData.messages.length > 0) {
      const cleaned = configData.messages.map(cleanProductItem).filter((p): p is Product => p !== null);
      if (cleaned.length > 0) {
        authoritativeList = cleaned;
      }
    }
  } catch (e) {
    console.warn('Check SYSTEM_CONFIG_PRODUCTS notice:', e);
  }

  // 2. Layer 2: Server Disk Storage (/api/products) fallback
  if (!authoritativeList || authoritativeList.length === 0) {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const serverProducts = await res.json();
        if (Array.isArray(serverProducts) && serverProducts.length > 0) {
          const cleaned = serverProducts.map(cleanProductItem).filter((p): p is Product => p !== null);
          if (cleaned.length > 0) {
            authoritativeList = cleaned;
          }
        }
      }
    } catch (err) {
      console.warn('Check /api/products notice:', err);
    }
  }

  // 3. Fallback and Guild Solutions Merge: Ensure all 25 guild solutions are present
  const baseProducts = (authoritativeList && authoritativeList.length > 0)
    ? authoritativeList
    : INITIAL_PRODUCTS.map(cleanProductItem).filter((p): p is Product => p !== null);

  const existingMap = new Map<string, Product>();
  for (const p of baseProducts) {
    if (p && p.id) {
      existingMap.set(p.id, p);
    }
  }

  // 4. Smart Local Merge: If user recently edited a product locally, DO NOT overwrite it with stale cloud data!
  let hasNewerLocalEdits = false;
  if (localProducts.length > 0) {
    for (const lp of localProducts) {
      if (!lp || !lp.id) continue;
      const existing = existingMap.get(lp.id);
      if (existing) {
        const merged = mergeTwoProducts(existing, lp);
        existingMap.set(lp.id, merged);
        if (merged !== existing) {
          hasNewerLocalEdits = true;
        }
      } else {
        // Product was created locally
        existingMap.set(lp.id, lp);
        hasNewerLocalEdits = true;
      }
    }
  }

  // 5. Ensure missing official guild solutions are present
  for (const gp of GUILD_SOLUTIONS_PRODUCTS) {
    if (gp && gp.id && !existingMap.has(gp.id)) {
      existingMap.set(gp.id, gp);
    }
  }

  const finalProducts = Array.from(existingMap.values());

  // Synchronize localStorage with clean authoritative data
  try {
    safeSetLocalStorage('jahesh_products', JSON.stringify(finalProducts));
  } catch {}

  // Only push back if there were explicit unsaved local edits
  if (hasNewerLocalEdits) {
    try {
      saveAllProductsToDb(finalProducts).catch(() => {});
    } catch {}
  }

  return finalProducts;
};

export const saveAllProductsToDb = async (products: Product[]): Promise<boolean> => {
  const stampedProducts = products.map((p) => ({
    ...p,
    updatedAt: p.updatedAt || new Date().toISOString(),
  }));

  // 1. Immediately cache locally & dispatch update event
  try {
    safeSetLocalStorage('jahesh_products', JSON.stringify(stampedProducts));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-products-updated', { detail: stampedProducts }));
    }
  } catch {}

  // 2. Persist to server disk via /api/products
  try {
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(stampedProducts),
    });
  } catch (e) {
    console.warn('Persist to /api/products notice:', e);
  }

  // 3. Primary Cloud: Save to Supabase SYSTEM_CONFIG_PRODUCTS (instant global sync across all devices)
  try {
    await supabase.from('chats').upsert(
      {
        user_id: 'SYSTEM_CONFIG_PRODUCTS',
        user_name: 'تنظیمات محصولات فروشگاه',
        messages: stampedProducts,
        last_updated: new Date().toISOString(),
        is_read_by_admin: true,
      },
      { onConflict: 'user_id' }
    );
  } catch (err) {
    console.warn('Save products to SYSTEM_CONFIG_PRODUCTS notice:', err);
  }

  return true;
};

export const saveProductToDb = async (product: Product): Promise<boolean> => {
  try {
    if (!product.updatedAt) {
      product.updatedAt = new Date().toISOString();
    }
    // 0. Automatically upload base64 images to server to avoid localStorage QuotaExceededError and database payload bloat
    if (product.image && product.image.startsWith('data:image')) {
      try {
        const uploadedUrl = await uploadProductImage(product.image, `${product.id}.webp`);
        if (uploadedUrl) {
          product.image = uploadedUrl;
        }
      } catch (e) {
        console.warn('Product main image auto-upload notice:', e);
      }
    }

    if (Array.isArray(product.gallery) && product.gallery.length > 0) {
      try {
        product.gallery = await Promise.all(
          product.gallery.map(async (img, i) => {
            if (img && img.startsWith('data:image')) {
              const u = await uploadProductImage(img, `${product.id}_gallery_${i}.webp`);
              return u || img;
            }
            return img;
          })
        );
      } catch (e) {
        console.warn('Product gallery auto-upload notice:', e);
      }
    }

    // 1. Direct Server Disk Persistence (/api/products/save)
    try {
      await fetch('/api/products/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
    } catch (e) {
      console.warn('Persist to /api/products/save notice:', e);
    }

    // 2. Load current list from local cache / store
    let currentList: Product[] = [];
    try {
      const saved = localStorage.getItem('jahesh_products');
      currentList = saved ? JSON.parse(saved) : [];
    } catch {}

    const idx = currentList.findIndex((p) => p.id === product.id);
    if (idx >= 0) {
      currentList[idx] = product;
    } else {
      currentList = [product, ...currentList];
    }

    // 3. Update local storage & broadcast event immediately
    try {
      safeSetLocalStorage('jahesh_products', JSON.stringify(currentList));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('jahesh-products-updated', { detail: currentList }));
      }
    } catch (err) {
      console.warn('LocalStorage save product warning:', err);
    }

    // 4. Primary: Save full updated products list to Supabase cloud JSON store (bulletproof across all browsers & mobiles)
    try {
      await supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_CONFIG_PRODUCTS',
          user_name: 'تنظیمات محصولات فروشگاه',
          messages: currentList,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      );
    } catch (err) {
      console.warn('Supabase save product to SYSTEM_CONFIG_PRODUCTS notice:', err);
    }

    // 5. Secondary: Upsert to relational products table
    try {
      const payloadWithGallery: Record<string, any> = {
        id: product.id,
        title: product.title,
        category: product.category,
        brand: product.brand || '',
        price: product.price,
        original_price: product.originalPrice || null,
        discount_percent: product.discountPercent || null,
        badge: product.badge || '',
        is_popular: Boolean(product.isPopular),
        is_golden: Boolean(product.isGolden),
        rating: product.rating || 5.0,
        reviews_count: product.reviewsCount || 0,
        delivery_days: product.deliveryDays || '',
        warranty: product.warranty || '',
        short_description: product.shortDescription || '',
        full_description: product.fullDescription || '',
        features: product.features || [],
        image: product.image || '',
        gallery: product.gallery || [],
        coupon_code: product.couponCode || null,
        coupon_discount_percent: product.couponDiscountPercent || null,
        is_incredible: Boolean(product.isIncredible),
        incredible_expires_at: product.incredibleExpiresAt || null,
        incredible_timer_duration: product.incredibleTimerDuration || null,
        is_subscription: Boolean(product.isSubscription),
        price_per_day: product.pricePerDay || null,
      };

      const { error } = await supabase.from('products').upsert(payloadWithGallery, { onConflict: 'id' });
      if (error) {
        const { gallery, is_incredible, incredible_expires_at, incredible_timer_duration, is_subscription, price_per_day, ...fallbackPayload } = payloadWithGallery;
        await supabase.from('products').upsert(fallbackPayload, { onConflict: 'id' });
      }
    } catch (err) {
      console.warn('Relational products upsert notice:', err);
    }

    return true;
  } catch (err) {
    console.warn('Save product exception:', err);
    return false;
  }
};

export const deleteProductFromDb = async (productId: string): Promise<boolean> => {
  try {
    // 1. Delete from server disk via /api/products/delete
    try {
      await fetch('/api/products/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
    } catch (e) {
      console.warn('Delete from /api/products/delete notice:', e);
    }

    // 2. Remove from local store
    let currentList: Product[] = [];
    try {
      const saved = localStorage.getItem('jahesh_products');
      currentList = saved ? JSON.parse(saved) : [];
    } catch {}

    const updated = currentList.filter((p) => p.id !== productId);
    try {
      safeSetLocalStorage('jahesh_products', JSON.stringify(updated));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('jahesh-products-updated', { detail: updated }));
      }
    } catch {}

    // 3. Persist updated list to Supabase SYSTEM_CONFIG_PRODUCTS
    try {
      await supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_CONFIG_PRODUCTS',
          user_name: 'تنظیمات محصولات فروشگاه',
          messages: updated,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      );
    } catch (err) {
      console.warn('Delete product from SYSTEM_CONFIG_PRODUCTS notice:', err);
    }

    // 4. Delete from relational products table
    try {
      await supabase.from('products').delete().eq('id', productId);
    } catch {}

    return true;
  } catch (err) {
    console.warn('Delete product exception:', err);
    return false;
  }
};

// 2. ORDERS DB SERVICE WITH HYBRID LOCAL & CLOUD SYNC
const LOCAL_ORDERS_KEY = 'jahesh_orders_store';

export const getLocalOrdersStore = (): Order[] => {
  try {
    const raw = localStorage.getItem(LOCAL_ORDERS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
    const legacyRaw = localStorage.getItem('jahesh_orders');
    if (legacyRaw) {
      const parsedLegacy = JSON.parse(legacyRaw);
      if (Array.isArray(parsedLegacy)) return parsedLegacy;
    }
  } catch (e) {
    console.warn('Error reading local orders store:', e);
  }
  return [];
};

export const saveLocalOrdersStore = (orders: Order[]) => {
  try {
    safeSetLocalStorage(LOCAL_ORDERS_KEY, JSON.stringify(orders));
    safeSetLocalStorage('jahesh_orders', JSON.stringify(orders));
  } catch (e) {
    console.warn('Error saving local orders store:', e);
  }
};

export const parseOrderTimestamp = (order: Partial<Order>): number => {
  if (!order) return 0;
  if (order.createdAt) {
    const t = new Date(order.createdAt).getTime();
    if (!isNaN(t) && t > 0) return t;
  }
  if (order.paidAt) {
    const t = new Date(order.paidAt).getTime();
    if (!isNaN(t) && t > 0) return t;
  }
  if (order.id) {
    const numMatch = order.id.match(/(\d{10,13})/);
    if (numMatch) {
      const num = Number(numMatch[1]);
      if (num > 1500000000 && num < 2500000000) return num * 1000;
      if (num > 1500000000000 && num < 2500000000000) return num;
    }
  }
  if (order.date) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    let d = String(order.date);
    for (let i = 0; i < 10; i++) {
      d = d.replace(new RegExp(persianNumbers[i], 'g'), String(i));
      d = d.replace(new RegExp(arabicNumbers[i], 'g'), String(i));
    }
    const months: Record<string, number> = {
      'فروردین': 1, 'اردیبهشت': 2, 'خرداد': 3, 'تیر': 4, 'مرداد': 5, 'شهریور': 6,
      'مهر': 7, 'آبان': 8, 'آذر': 9, 'دی': 10, 'بهمن': 11, 'اسفند': 12
    };
    const mMatch = d.match(/(\d{1,2})\s+([^\s\d]+)\s+(\d{4})(?:\s+ساعت\s+(\d{1,2}):(\d{1,2}))?/);
    if (mMatch) {
      const day = parseInt(mMatch[1], 10);
      const mName = mMatch[2].trim();
      const year = parseInt(mMatch[3], 10);
      const month = months[mName] || 6;
      const hour = mMatch[4] ? parseInt(mMatch[4], 10) : 12;
      const minute = mMatch[5] ? parseInt(mMatch[5], 10) : 0;
      return year * 100000000 + month * 1000000 + day * 10000 + hour * 100 + minute;
    }
    const slashMatch = d.match(/(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})(?:\s+(\d{1,2}):(\d{1,2}))?/);
    if (slashMatch) {
      const year = parseInt(slashMatch[1], 10);
      const month = parseInt(slashMatch[2], 10);
      const day = parseInt(slashMatch[3], 10);
      const hour = slashMatch[4] ? parseInt(slashMatch[4], 10) : 12;
      const minute = slashMatch[5] ? parseInt(slashMatch[5], 10) : 0;
      return year * 100000000 + month * 1000000 + day * 10000 + hour * 100 + minute;
    }
    const standardDate = new Date(d).getTime();
    if (!isNaN(standardDate) && standardDate > 0) return standardDate;
  }
  return 0;
};

export const fetchOrdersFromDb = async (): Promise<Order[]> => {
  const localOrders = getLocalOrdersStore();
  let serverDiskOrders: Order[] = [];
  let chatConfigOrders: Order[] = [];
  let tableOrders: Order[] = [];

  // 1. Layer 1: Fetch from server disk /api/orders
  try {
    const res = await fetch('/api/orders');
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.orders)) {
        serverDiskOrders = data.orders;
      }
    }
  } catch (err) {
    console.warn('Check /api/orders notice:', err);
  }

  // 2. Layer 2: Fetch from Supabase SYSTEM_CONFIG_ORDERS in chats table
  try {
    const { data: configData, error: configError } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_ORDERS')
      .maybeSingle();

    if (!configError && configData && Array.isArray(configData.messages)) {
      chatConfigOrders = configData.messages;
    }
  } catch (e) {
    console.warn('Check SYSTEM_CONFIG_ORDERS notice:', e);
  }

  // 3. Layer 3: Fetch from Supabase orders table
  try {
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      tableOrders = data.map((item) => {
        let parsedItems = item.items;
        if (typeof item.items === 'string') {
          try {
            parsedItems = JSON.parse(item.items);
          } catch {
            parsedItems = [];
          }
        }
        return {
          id: item.id,
          trackingCode: item.tracking_code || item.id,
          paymentRefId: item.payment_ref_id || '',
          userId: item.user_id || '',
          customerName: item.customer_name || 'مشتری گرامی',
          customerPhone: item.customer_phone || '',
          customerEmail: item.customer_email || '',
          requestedDomain: item.requested_domain || '',
          clientNotes: item.client_notes || '',
          items: Array.isArray(parsedItems) ? parsedItems : [],
          totalAmount: Number(item.total_amount) || 0,
          discountAmount: Number(item.discount_amount) || 0,
          appliedCouponCode: item.applied_coupon_code || '',
          status: item.status || 'در حال بررسی',
          paymentGateway: item.payment_gateway || 'زیبال (Zibal)',
          date: item.date || new Date().toLocaleDateString('fa-IR'),
          createdAt: item.created_at,
          zibalTrackId: item.tracking_code || '',
          zibalRefNumber: item.payment_ref_id || '',
          acceptedTerms: true,
        };
      });
    }
  } catch (err) {
    console.warn('Supabase fetch orders table notice:', err);
  }

  // Merge all sources into a single deduplicated list
  const allOrdersMap = new Map<string, Order>();
  const addOrderToMap = (o: Order) => {
    if (!o || (!o.id && !o.trackingCode)) return;
    const key = o.id || o.trackingCode;
    const existing = allOrdersMap.get(key);
    if (!existing) {
      allOrdersMap.set(key, o);
    } else {
      // Keep most complete order details, preserve gateway fields
      allOrdersMap.set(key, {
        ...existing,
        ...o,
        trackingCode: o.trackingCode || existing.trackingCode || '',
        paymentRefId: o.paymentRefId || existing.paymentRefId || '',
        zibalTrackId: o.zibalTrackId || existing.zibalTrackId || o.trackingCode || existing.trackingCode,
        zibalRefNumber: o.zibalRefNumber || existing.zibalRefNumber || o.paymentRefId || existing.paymentRefId,
        cardNumber: o.cardNumber || existing.cardNumber,
        paidAt: o.paidAt || existing.paidAt,
        createdAt: o.createdAt || existing.createdAt,
      });
    }
  };

  tableOrders.forEach(addOrderToMap);
  chatConfigOrders.forEach(addOrderToMap);
  serverDiskOrders.forEach(addOrderToMap);
  localOrders.forEach(addOrderToMap);

  const mergedOrders = Array.from(allOrdersMap.values());
  // CRITICAL: Sort newest orders first (highest timestamp at index 0)
  mergedOrders.sort((a, b) => parseOrderTimestamp(b) - parseOrderTimestamp(a));
  saveLocalOrdersStore(mergedOrders);
  return mergedOrders;
};

export const saveOrderToDb = async (order: Order): Promise<boolean> => {
  // Ensure timestamps and gateway fields are populated
  if (!order.createdAt) {
    order.createdAt = new Date().toISOString();
  }
  if (!order.zibalTrackId && order.trackingCode) {
    order.zibalTrackId = String(order.trackingCode);
  }
  if (!order.zibalRefNumber && order.paymentRefId) {
    order.zibalRefNumber = String(order.paymentRefId);
  }

  // 1. Save locally & broadcast immediately
  let updatedList: Order[] = [];
  try {
    const currentLocal = getLocalOrdersStore();
    const existingIndex = currentLocal.findIndex(
      (o) => o.id === order.id || (o.trackingCode && order.trackingCode && o.trackingCode === order.trackingCode)
    );
    if (existingIndex >= 0) {
      updatedList = [...currentLocal];
      updatedList[existingIndex] = { ...currentLocal[existingIndex], ...order };
    } else {
      updatedList = [order, ...currentLocal];
    }
    // Sort descending by newest
    updatedList.sort((a, b) => parseOrderTimestamp(b) - parseOrderTimestamp(a));
    saveLocalOrdersStore(updatedList);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: updatedList }));
    }
  } catch (localErr) {
    console.warn('Local save order warning:', localErr);
  }

  // 2. Persist to server disk via /api/orders/save
  try {
    await fetch('/api/orders/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
  } catch (e) {
    console.warn('Persist order to /api/orders/save notice:', e);
  }

  // 3. Primary Cloud: Merge into Supabase SYSTEM_CONFIG_ORDERS in chats table (NEVER wipe other orders)
  try {
    const { data: configData } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_ORDERS')
      .maybeSingle();

    const existingCloudOrders: Order[] = (configData && Array.isArray(configData.messages)) ? configData.messages : [];
    const filteredCloud = existingCloudOrders.filter(
      (o) => o && o.id !== order.id && (!order.trackingCode || o.trackingCode !== order.trackingCode)
    );
    const mergedCloud = [order, ...filteredCloud];
    mergedCloud.sort((a, b) => parseOrderTimestamp(b) - parseOrderTimestamp(a));

    await supabase.from('chats').upsert(
      {
        user_id: 'SYSTEM_CONFIG_ORDERS',
        user_name: 'لیست تمام سفارشات فروشگاه',
        messages: mergedCloud,
        last_updated: new Date().toISOString(),
        is_read_by_admin: true,
      },
      { onConflict: 'user_id' }
    );
  } catch (err) {
    console.warn('Save orders to SYSTEM_CONFIG_ORDERS notice:', err);
  }

  // 4. Secondary Cloud: Persist to Supabase orders table
  try {
    const payload = {
      id: order.id,
      tracking_code: order.trackingCode || order.zibalTrackId || '',
      payment_ref_id: order.paymentRefId || order.zibalRefNumber || '',
      user_id: order.userId || 'guest',
      customer_name: order.customerName || 'مشتری',
      customer_phone: order.customerPhone || '',
      customer_email: order.customerEmail || '',
      requested_domain: order.requestedDomain || '',
      client_notes: order.clientNotes || '',
      total_amount: order.totalAmount || 0,
      discount_amount: order.discountAmount || 0,
      applied_coupon_code: order.appliedCouponCode || '',
      status: order.status,
      items: order.items || [],
      date: order.date,
      payment_gateway: order.paymentGateway,
    };
    
    const { error } = await supabase.from('orders').upsert(payload);
    if (error) {
      const stringifiedPayload = { ...payload, items: JSON.stringify(order.items) };
      await supabase.from('orders').upsert(stringifiedPayload);
    }
  } catch (err) {
    console.warn('Save order to orders table notice:', err);
  }

  return true;
};

export const updateOrderStatusInDb = async (orderId: string, status: string): Promise<boolean> => {
  let updated: Order[] = [];
  try {
    const current = getLocalOrdersStore();
    updated = current.map((o) => (o.id === orderId ? { ...o, status: status as any } : o));
    saveLocalOrdersStore(updated);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: updated }));
    }
  } catch (e) {}

  try {
    await fetch('/api/orders/update-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId, status }),
    });
  } catch (e) {}

  try {
    if (updated.length > 0) {
      await supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_CONFIG_ORDERS',
          user_name: 'لیست تمام سفارشات فروشگاه',
          messages: updated,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      );
    }
  } catch (e) {}

  try {
    await supabase.from('orders').update({ status }).eq('id', orderId);
  } catch (err) {}

  return true;
};

export const deleteOrderFromDb = async (orderId: string): Promise<boolean> => {
  let updated: Order[] = [];
  try {
    const current = getLocalOrdersStore();
    updated = current.filter((o) => o.id !== orderId && o.trackingCode !== orderId);
    saveLocalOrdersStore(updated);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: updated }));
    }
  } catch (e) {}

  try {
    await fetch('/api/orders/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId }),
    });
  } catch (e) {}

  try {
    await supabase.from('chats').upsert(
      {
        user_id: 'SYSTEM_CONFIG_ORDERS',
        user_name: 'لیست تمام سفارشات فروشگاه',
        messages: updated,
        last_updated: new Date().toISOString(),
        is_read_by_admin: true,
      },
      { onConflict: 'user_id' }
    );
  } catch (e) {}

  try {
    await supabase.from('orders').delete().eq('id', orderId);
  } catch (err) {}

  return true;
};

export const clearAllOrdersFromDb = async (): Promise<boolean> => {
  try {
    saveLocalOrdersStore([]);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: [] }));
    }
  } catch (e) {}

  try {
    await fetch('/api/orders/clear', { method: 'POST' });
  } catch (e) {}

  try {
    await supabase.from('chats').upsert(
      {
        user_id: 'SYSTEM_CONFIG_ORDERS',
        user_name: 'لیست تمام سفارشات فروشگاه',
        messages: [],
        last_updated: new Date().toISOString(),
        is_read_by_admin: true,
      },
      { onConflict: 'user_id' }
    );
  } catch (e) {}

  try {
    await supabase.from('orders').delete().neq('id', '___non_existent___');
  } catch (err) {}

  return true;
};

// 3. USERS DB SERVICE WITH HYBRID LOCAL & CLOUD SYNC
const LOCAL_USERS_KEY = 'jahesh_users_store';

// Helper to extract or calculate exact timestamp for a user so newer users are always sorted to the top (#1)
export const getUserCreationTimestamp = (u: any): number => {
  if (!u) return 0;
  if (typeof u.timestamp === 'number' && u.timestamp > 0) return u.timestamp;

  // 1. Extract numeric timestamp from ID (e.g. u-1789197087196, usr-1788866891163)
  if (typeof u.id === 'string') {
    const match = u.id.match(/\d{10,}/);
    if (match) {
      const num = parseInt(match[0], 10);
      if (!isNaN(num) && num > 1000000000) return num;
    }
  }

  // 2. Parse ISO date string (e.g. 2026-09-08T12:11:32.684Z)
  const dStr = u.createdAt || u.created_at;
  if (typeof dStr === 'string' && dStr.includes('-')) {
    const parsed = Date.parse(dStr);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }

  // 3. Parse Persian date string (e.g. ۱۴۰۵/۶/۲۱ or 1405/6/21)
  if (typeof dStr === 'string' && dStr.includes('/')) {
    const enStr = dStr.replace(/[۰-۹]/g, (d: string) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
    const parts = enStr.split('/').map((p: string) => parseInt(p.trim(), 10));
    if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
      return parts[0] * 100000000 + parts[1] * 1000000 + parts[2] * 10000;
    }
  }

  return 0;
};

// Sorts any user array so newly registered users are GUARANTEED to appear at index 0 (Row #1)
export const sortUsersNewestFirst = <T extends User>(users: T[]): T[] => {
  if (!Array.isArray(users)) return [];
  return [...users].sort((a, b) => {
    const tB = getUserCreationTimestamp(b);
    const tA = getUserCreationTimestamp(a);
    if (tB !== tA) return tB - tA;
    return 0;
  });
};

// Check if a username is already taken anywhere in cloud or local db
export const checkUsernameAvailability = async (
  username: string,
  excludeUserId?: string
): Promise<{ available: boolean; reason?: string }> => {
  const cleanU = username?.trim().toLowerCase();
  if (!cleanU) return { available: false, reason: 'نام کاربری نمی‌تواند خالی باشد.' };

  // 1. Direct query in Supabase users table
  try {
    const { data } = await supabase
      .from('users')
      .select('id, username')
      .ilike('username', cleanU);
    if (data && data.length > 0) {
      const match = data.find(
        (u) => u.id !== excludeUserId && u.username?.trim().toLowerCase() === cleanU
      );
      if (match) {
        return {
          available: false,
          reason: 'نام کاربری توسط فرد دیگری استفاده شده',
        };
      }
    }
  } catch (e) {
    // ignore
  }

  // 2. Direct check in SYSTEM_CONFIG_USERS & local cache
  const allUsers = await fetchAllUsersFromDb();
  const match = allUsers.find(
    (u) => u.id !== excludeUserId && u.username?.trim().toLowerCase() === cleanU
  );
  if (match) {
    return {
      available: false,
      reason: 'نام کاربری توسط فرد دیگری استفاده شده',
    };
  }

  return { available: true };
};

// Check if a phone number is already registered anywhere
export const checkPhoneAvailability = async (
  phone: string,
  excludeUserId?: string
): Promise<{ available: boolean; reason?: string }> => {
  const cleanP = phone?.trim();
  if (!cleanP || cleanP === 'ثبت نشده' || cleanP === 'test') return { available: true };

  // 1. Direct query in Supabase users table
  try {
    const { data } = await supabase
      .from('users')
      .select('id, phone')
      .eq('phone', cleanP);
    if (data && data.length > 0) {
      const match = data.find((u) => u.id !== excludeUserId && u.phone?.trim() === cleanP);
      if (match) {
        return {
          available: false,
          reason: 'حساب کاربری با این شماره موبایل قبلاً ثبت شده است. لطفاً وارد شوید.',
        };
      }
    }
  } catch (e) {
    // ignore
  }

  // 2. Check in all loaded users
  const allUsers = await fetchAllUsersFromDb();
  const match = allUsers.find((u) => u.id !== excludeUserId && u.phone?.trim() === cleanP);
  if (match) {
    return {
      available: false,
      reason: 'حساب کاربری با این شماره موبایل قبلاً در سیستم ثبت شده است.',
    };
  }

  return { available: true };
};

const getLocalUsersStore = (): Array<User & { password?: string }> => {
  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveLocalUsersStore = (users: Array<User & { password?: string }>) => {
  try {
    safeSetLocalStorage(LOCAL_USERS_KEY, JSON.stringify(users));
  } catch (err) {
    console.warn('Could not save users to local store:', err);
  }
};

export const registerUserInDb = async (user: User, passwordHash: string): Promise<boolean> => {
  try {
    const cleanPhone = user.phone?.trim() || '';
    const cleanUsername = user.username?.trim().toLowerCase() || `u${Date.now()}`;
    const nowTs = Date.now();

    const userWithPass: User & { password?: string } = {
      id: user.id || `u-${nowTs}`,
      fullName: user.fullName || 'کاربر جهش',
      phone: cleanPhone,
      email: user.email?.trim() || '',
      username: cleanUsername,
      role: user.role || 'user',
      guild: user.guild,
      customGuild: user.customGuild,
      createdAt: user.createdAt || new Date().toLocaleDateString('fa-IR'),
      timestamp: nowTs,
      password: passwordHash,
    };

    // 1. Persist to Supabase users table
    try {
      const payload = {
        id: userWithPass.id,
        full_name: userWithPass.fullName,
        phone: userWithPass.phone,
        email: userWithPass.email || '',
        username: userWithPass.username,
        password: passwordHash,
        role: userWithPass.role || 'user',
        created_at: userWithPass.createdAt,
      };

      const insertRes = await supabase.from('users').upsert(payload, { onConflict: 'id' });
      if (insertRes.error) {
        console.warn('Supabase users table insert notice:', insertRes.error.message);
      }
    } catch (e) {
      console.warn('Supabase users upsert exception:', e);
    }

    // 2. Fetch latest cloud users from SYSTEM_CONFIG_USERS in chats table
    let cloudUsers: Array<User & { password?: string }> = [];
    try {
      const { data: configData } = await supabase
        .from('chats')
        .select('messages')
        .eq('user_id', 'SYSTEM_CONFIG_USERS')
        .maybeSingle();
      if (configData && Array.isArray(configData.messages)) {
        cloudUsers = configData.messages.filter(Boolean);
      }
    } catch (e) {
      // ignore
    }

    // 3. Merge and sort newest first
    const localUsers = getLocalUsersStore().filter(Boolean);
    const mergedMap = new Map<string, User & { password?: string }>();

    const getUKey = (u: any): string => {
      if (!u) return '';
      if (u.id) return `id:${u.id}`;
      if (u.phone && u.phone !== 'ثبت نشده' && u.phone !== 'test') return `phone:${u.phone}`;
      if (u.username) return `u:${u.username.toLowerCase()}`;
      return `rand:${Math.random()}`;
    };

    // Add existing
    for (const u of localUsers) {
      const k = getUKey(u);
      if (k) mergedMap.set(k, u);
    }
    for (const u of cloudUsers) {
      const k = getUKey(u);
      if (k) mergedMap.set(k, u);
    }

    // Insert or update the new registering user
    const currentKey = getUKey(userWithPass);
    let matchedKey: string | null = null;
    for (const [k, ex] of mergedMap.entries()) {
      if (
        (userWithPass.id && ex.id === userWithPass.id) ||
        (userWithPass.phone && userWithPass.phone !== 'ثبت نشده' && userWithPass.phone !== 'test' && ex.phone === userWithPass.phone)
      ) {
        matchedKey = k;
        break;
      }
    }

    if (matchedKey) {
      mergedMap.set(matchedKey, { ...mergedMap.get(matchedKey), ...userWithPass });
    } else {
      mergedMap.set(currentKey, userWithPass);
    }

    // Sort so newly registered users are ALWAYS on top (Row #1)
    const finalUsersList = sortUsersNewestFirst(Array.from(mergedMap.values()));
    saveLocalUsersStore(finalUsersList);

    // 4. Save full array to Supabase chats table (SYSTEM_CONFIG_USERS)
    try {
      await supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_CONFIG_USERS',
          user_name: 'لیست کاربران سیستم جهش',
          messages: finalUsersList,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      );
    } catch (chatErr) {
      console.warn('SYSTEM_CONFIG_USERS save notice:', chatErr);
    }

    // 5. Persist to server disk /api/users/save if active
    try {
      await fetch('/api/users/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: userWithPass }),
      });
    } catch {}

    // 6. Broadcast event locally
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-users-updated', { detail: finalUsersList }));
    }

    return true;
  } catch (err) {
    console.warn('Register user exception:', err);
    return true; // Local cache is saved
  }
};

export const findUserInDb = async (usernameOrPhone: string, passwordAttempt: string): Promise<User | null> => {
  const cleanId = usernameOrPhone.trim().toLowerCase();
  const cleanPass = passwordAttempt.trim();

  // 1. Check Master Admin Credentials
  if (
    (cleanId === 'jahesh' || cleanId === 'jahesh_admin' || cleanId === '09152331974' || cleanId === '09152221454') &&
    cleanPass === 'jahesh1395'
  ) {
    return {
      id: 'usr-jahesh-master',
      fullName: 'مدیر کل جهش‌کالا',
      phone: '09152331974',
      email: 'admin@jaheshkala.ir',
      username: 'jahesh_admin',
      role: 'admin',
      createdAt: '۱۴۰۵/۶/۱',
    };
  }

  let matchedUser: User | null = null;

  // 2. Check Supabase chats SYSTEM_CONFIG_USERS first (multi-device synchronized cloud store)
  try {
    const { data: configData } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_USERS')
      .maybeSingle();

    if (configData && Array.isArray(configData.messages)) {
      const match = configData.messages.find(
        (u: any) =>
          (u.username?.toLowerCase() === cleanId || u.phone === cleanId || u.email?.toLowerCase() === cleanId) &&
          (u.password === cleanPass || u.password === passwordAttempt)
      );
      if (match) {
        matchedUser = {
          id: match.id,
          fullName: match.fullName || match.full_name,
          phone: match.phone,
          email: match.email || '',
          username: match.username,
          role: (match.role as 'admin' | 'operator' | 'user') || 'user',
          guild: match.guild,
          customGuild: match.customGuild,
          createdAt: match.createdAt || match.created_at,
        };
      }
    }
  } catch (e) {
    // ignore
  }

  // 3. Try Supabase users table
  if (!matchedUser) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .or(`username.ilike.${cleanId},phone.eq.${cleanId},email.ilike.${cleanId}`);

      if (!error && data && data.length > 0) {
        const dbMatch = data.find((u) => u.password === cleanPass || u.password === passwordAttempt);
        if (dbMatch) {
          matchedUser = {
            id: dbMatch.id,
            fullName: dbMatch.full_name,
            phone: dbMatch.phone,
            email: dbMatch.email || '',
            username: dbMatch.username,
            role: (dbMatch.role as 'admin' | 'operator' | 'user') || 'user',
            createdAt: dbMatch.created_at,
          };
        }
      }
    } catch (err) {
      console.warn('Supabase find user warning:', err);
    }
  }

  // 4. Check Local Store
  if (!matchedUser) {
    const localUsers = getLocalUsersStore();
    const localMatch = localUsers.find(
      (u) =>
        (u.username?.toLowerCase() === cleanId || u.phone === cleanId || u.email?.toLowerCase() === cleanId) &&
        (u.password === cleanPass || u.password === passwordAttempt)
    );

    if (localMatch) {
      matchedUser = {
        id: localMatch.id,
        fullName: localMatch.fullName,
        phone: localMatch.phone,
        email: localMatch.email || '',
        username: localMatch.username,
        role: localMatch.role || 'user',
        guild: localMatch.guild,
        customGuild: localMatch.customGuild,
        createdAt: localMatch.createdAt,
      };
    }
  }

  // 5. Update Current User cache in localStorage if matched
  if (matchedUser) {
    try {
      safeSetLocalStorage('jahesh_current_user', JSON.stringify(matchedUser));
    } catch {
      // ignore
    }
  }

  return matchedUser;
};

export const deleteUserFromDb = async (userId: string): Promise<boolean> => {
  try {
    // Remove from local store
    const localUsers = getLocalUsersStore().filter((u) => u.id !== userId);
    saveLocalUsersStore(localUsers);

    // Remove from Supabase
    try {
      await supabase.from('users').delete().eq('id', userId);
    } catch {}

    // Update SYSTEM_CONFIG_USERS in chats table
    try {
      await supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_CONFIG_USERS',
          user_name: 'لیست کاربران سیستم جهش',
          messages: localUsers,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      );
    } catch {}

    // Broadcast locally
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-users-updated', { detail: localUsers }));
    }

    return true;
  } catch (err) {
    console.warn('Delete user exception:', err);
    return false;
  }
};

export const updateUserInDb = async (user: User): Promise<boolean> => {
  try {
    // 1. Update in local users store
    const localUsers = getLocalUsersStore();
    const userIndex = localUsers.findIndex((u) => (user.id && u.id === user.id) || (user.username && u.username === user.username) || (user.phone && u.phone === user.phone));
    if (userIndex >= 0) {
      localUsers[userIndex] = {
        ...localUsers[userIndex],
        ...user,
        role: user.role, // Explicitly ensure role is updated
      };
    } else {
      localUsers.unshift(user);
    }
    saveLocalUsersStore(localUsers);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-users-updated', { detail: localUsers }));
    }

    // 2. If this user is currently logged in on the browser, update current session immediately
    try {
      const rawCurrent = localStorage.getItem('jahesh_current_user');
      if (rawCurrent) {
        const currentParsed: User = JSON.parse(rawCurrent);
        if (currentParsed.id === user.id || currentParsed.username === user.username || (currentParsed.phone && currentParsed.phone === user.phone)) {
          const updatedCurrent = {
            ...currentParsed,
            ...user,
            role: user.role,
          };
          safeSetLocalStorage('jahesh_current_user', JSON.stringify(updatedCurrent));
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('jahesh-user-updated', { detail: updatedCurrent }));
          }
        }
      }
    } catch (err) {
      console.warn('Error updating current user session:', err);
    }

    // 3. Multi-layer background persistence (Server disk + Supabase)
    const payload = {
      full_name: user.fullName,
      phone: user.phone || '',
      email: user.email || '',
      username: user.username,
      role: user.role,
    };

    Promise.allSettled([
      // Server disk
      fetch('/api/users/update-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          username: user.username,
          phone: user.phone,
          role: user.role,
        }),
      }),
      fetch('/api/users/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      }),
      // Supabase users table upsert
      supabase.from('users').upsert(
        {
          id: user.id || `usr-${Date.now()}`,
          full_name: user.fullName,
          phone: user.phone || '',
          email: user.email || '',
          username: user.username,
          role: user.role,
          created_at: user.createdAt || new Date().toISOString(),
        },
        { onConflict: 'id' }
      ),
      // Supabase chats table backup
      supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_CONFIG_USERS',
          user_name: 'لیست کاربران سیستم جهش',
          messages: localUsers,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      ),
    ]).catch(() => {});

    return true;
  } catch (err) {
    console.warn('Update user exception:', err);
    return true; // Local store was updated
  }
};

export const fetchAllUsersFromDb = async (): Promise<User[]> => {
  const usersMap = new Map<string, User>();

  const getUKey = (u: any): string => {
    if (!u) return '';
    if (u.id) return `id:${u.id}`;
    if (u.phone && u.phone !== 'ثبت نشده' && u.phone !== 'test') return `phone:${u.phone}`;
    if (u.username) return `u:${u.username.toLowerCase()}`;
    return `rand:${Math.random()}`;
  };

  // 1. Load from local cache first to ensure recent local changes are never lost
  const localUsers = getLocalUsersStore();
  for (const lu of localUsers) {
    if (!lu) continue;
    const key = getUKey(lu);
    if (!key) continue;
    usersMap.set(key, { ...lu });
  }

  // 2. Load from SYSTEM_CONFIG_USERS in chats table (Multi-device cloud store)
  try {
    const { data: configData } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_USERS')
      .maybeSingle();

    if (configData && Array.isArray(configData.messages)) {
      for (const u of configData.messages) {
        if (!u) continue;
        const key = getUKey(u);
        if (!key) continue;
        const localUser = usersMap.get(key);
        usersMap.set(key, {
          id: u.id || localUser?.id,
          fullName: u.fullName || u.full_name || localUser?.fullName || 'کاربر جهش',
          phone: u.phone || localUser?.phone || '',
          email: u.email || localUser?.email || '',
          username: u.username || localUser?.username || '',
          role: localUser?.role || u.role || 'user',
          guild: u.guild || localUser?.guild,
          customGuild: u.customGuild || u.custom_guild || localUser?.customGuild,
          createdAt: u.createdAt || u.created_at || localUser?.createdAt,
        });
      }
    }
  } catch (e) {
    // ignore
  }

  // 3. Load from Supabase users table (Cloud role & users)
  try {
    const { data, error } = await supabase.from('users').select('*').order('created_at', { ascending: false });
    if (!error && data && Array.isArray(data)) {
      for (const matched of data) {
        const key = getUKey(matched);
        if (!key) continue;
        const existing = usersMap.get(key);
        usersMap.set(key, {
          id: matched.id,
          fullName: matched.full_name || existing?.fullName || 'کاربر',
          phone: matched.phone || existing?.phone || '',
          email: matched.email || existing?.email || '',
          username: matched.username || existing?.username || '',
          role: existing?.role || (matched.role as 'admin' | 'operator' | 'user') || 'user',
          guild: matched.guild || existing?.guild,
          customGuild: matched.custom_guild || existing?.customGuild,
          createdAt: matched.created_at || existing?.createdAt,
        });
      }
    }
  } catch (err) {
    console.warn('Fetch all users exception:', err);
  }

  // 4. Load from server disk /api/users
  try {
    const res = await fetch('/api/users');
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.users)) {
        for (const u of data.users) {
          if (!u) continue;
          const key = getUKey(u);
          if (!key) continue;
          const existing = usersMap.get(key);
          usersMap.set(key, {
            ...existing,
            ...u,
            role: existing?.role || u.role || 'user',
          });
        }
      }
    }
  } catch (e) {
    // ignore
  }

  const result = sortUsersNewestFirst(Array.from(usersMap.values()));
  saveLocalUsersStore(result);

  // If current logged-in user's role changed in cloud, auto-sync session immediately!
  try {
    const rawStored = localStorage.getItem('jahesh_current_user');
    if (rawStored) {
      const activeUser = JSON.parse(rawStored);
      const cleanPhone = activeUser.phone?.trim();
      const cleanUName = activeUser.username?.trim().toLowerCase();
      const matched = result.find(
        (u) =>
          u.id === activeUser.id ||
          (cleanPhone && cleanPhone !== 'ثبت نشده' && u.phone === cleanPhone) ||
          (cleanUName && u.username?.toLowerCase() === cleanUName)
      );
      if (matched && matched.role && matched.role !== activeUser.role) {
        const updated = { ...activeUser, role: matched.role };
        safeSetLocalStorage('jahesh_current_user', JSON.stringify(updated));
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('jahesh-user-updated', { detail: updated }));
        }
      }
    }
  } catch (err) {
    console.warn('Auto sync current user role notice:', err);
  }

  return result;
};

// 4. COUPONS & DISCOUNT DB SERVICE
export const fetchCouponsFromDb = async (): Promise<Coupon[]> => {
  try {
    const { data, error } = await supabase.from('coupons').select('*').order('created_at', { ascending: false });
    if (error || !data || data.length === 0) {
      return INITIAL_COUPONS;
    }
    return data.map((item) => ({
      id: item.id,
      code: item.code,
      discountPercent: Number(item.discount_percent),
      maxDiscountAmount: item.max_discount_amount ? Number(item.max_discount_amount) : undefined,
      minOrderAmount: item.min_order_amount ? Number(item.min_order_amount) : undefined,
      description: item.description || '',
      isActive: item.is_active !== undefined ? !!item.is_active : true,
    }));
  } catch (err) {
    console.warn('Fetch coupons exception:', err);
    return INITIAL_COUPONS;
  }
};

export const saveCouponToDb = async (coupon: Coupon): Promise<boolean> => {
  try {
    const payload = {
      id: coupon.id,
      code: coupon.code.toUpperCase().trim(),
      discount_percent: coupon.discountPercent,
      max_discount_amount: coupon.maxDiscountAmount,
      min_order_amount: coupon.minOrderAmount,
      description: coupon.description,
      is_active: coupon.isActive,
    };
    const { error } = await supabase.from('coupons').upsert(payload);
    return !error;
  } catch (err) {
    console.warn('Save coupon exception:', err);
    return false;
  }
};

export const deleteCouponFromDb = async (couponId: string): Promise<boolean> => {
  try {
    const { error } = await supabase.from('coupons').delete().eq('id', couponId);
    return !error;
  } catch (err) {
    console.warn('Delete coupon exception:', err);
    return false;
  }
};

// 5. CHATS DB SERVICE
export const mergeChatMessages = (localMsgs: any[], dbMsgs: any[]): any[] => {
  if (!Array.isArray(localMsgs) || localMsgs.length === 0) return Array.isArray(dbMsgs) ? dbMsgs : [];
  if (!Array.isArray(dbMsgs) || dbMsgs.length === 0) return Array.isArray(localMsgs) ? localMsgs : [];

  const msgMap = new Map<string, any>();

  // 1. Add DB messages first
  for (const m of dbMsgs) {
    if (m && m.id) {
      msgMap.set(String(m.id), m);
    }
  }

  // 2. Add local messages (keep local user messages if DB hasn't synced them yet)
  for (const m of localMsgs) {
    if (m && m.id) {
      const strId = String(m.id);
      const existing = msgMap.get(strId);
      if (!existing) {
        msgMap.set(strId, m);
      } else {
        if (existing.isHumanAdmin || existing.file) {
          msgMap.set(strId, existing);
        } else {
          msgMap.set(strId, { ...existing, ...m });
        }
      }
    }
  }

  return Array.from(msgMap.values());
};

export const fetchChatsFromDb = async (): Promise<any[]> => {
  // Try local storage cache first for instant response
  let cachedChats: any[] = [];
  try {
    const saved = localStorage.getItem('jahesh_all_chats');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        cachedChats = parsed;
      }
    }
  } catch {}

  try {
    const { data, error } = await supabase.from('chats').select('*').order('last_updated', { ascending: false });
    if (!error && data && Array.isArray(data)) {
      const dbChats = data
        .filter(item => !String(item.user_id || '').startsWith('SYSTEM_'))
        .map(item => {
          const parsedMsgs = typeof item.messages === 'string' ? JSON.parse(item.messages) : (item.messages || []);
          return {
            userId: item.user_id,
            userName: item.user_name || 'کاربر ناشناس',
            messages: parsedMsgs,
            lastUpdated: item.last_updated || '',
            isReadByAdmin: !!item.is_read_by_admin,
            needsHumanSupport: item.needs_human_support !== undefined 
              ? !!item.needs_human_support 
              : parsedMsgs.some((m: any) => m.needsHumanSupport || m.text?.includes('درخواست اتصال به کارشناس')),
          };
        });

      // Merge local cached chats with DB chats to prevent deleting un-synced user messages
      const mergedMap = new Map<string, any>();
      for (const c of cachedChats) {
        if (c && c.userId) {
          mergedMap.set(c.userId, c);
        }
      }

      for (const dbChat of dbChats) {
        const existingLocal = mergedMap.get(dbChat.userId);
        if (existingLocal) {
          const mergedMsgs = mergeChatMessages(existingLocal.messages, dbChat.messages);
          mergedMap.set(dbChat.userId, {
            ...existingLocal,
            ...dbChat,
            messages: mergedMsgs,
            needsHumanSupport: dbChat.needsHumanSupport || existingLocal.needsHumanSupport,
            lastUpdated: dbChat.lastUpdated > existingLocal.lastUpdated ? dbChat.lastUpdated : existingLocal.lastUpdated,
          });
        } else {
          mergedMap.set(dbChat.userId, dbChat);
        }
      }

      const mergedList = Array.from(mergedMap.values());

      // Cache merged result locally
      try {
        safeSetLocalStorage('jahesh_all_chats', JSON.stringify(mergedList));
      } catch {}

      return mergedList;
    }
  } catch (err) {
    console.warn('Fetch chats exception:', err);
  }

  return cachedChats;
};

export const saveChatToDb = async (chat: any): Promise<boolean> => {
  // Update local cache immediately
  try {
    const saved = localStorage.getItem('jahesh_all_chats');
    let chatsList: any[] = saved ? JSON.parse(saved) : [];
    const idx = chatsList.findIndex(c => c.userId === chat.userId);
    if (idx >= 0) {
      chatsList[idx] = chat;
    } else {
      chatsList.unshift(chat);
    }
    safeSetLocalStorage('jahesh_all_chats', JSON.stringify(chatsList));
    safeSetLocalStorage(`jahesh_chat_${chat.userId}`, JSON.stringify(chat.messages));
    window.dispatchEvent(new CustomEvent('jahesh-chats-updated', { detail: chat }));
  } catch {}

  try {
    const payload = {
      user_id: chat.userId,
      user_name: chat.userName,
      messages: chat.messages,
      last_updated: chat.lastUpdated,
      is_read_by_admin: chat.isReadByAdmin,
      needs_human_support: !!chat.needsHumanSupport,
    };
    const { error } = await supabase.from('chats').upsert(payload, { onConflict: 'user_id' });
    if (error) {
       console.warn('Save chat error:', error.message);
       return false;
    }
    return true;
  } catch (err) {
    console.warn('Save chat exception:', err);
    return false;
  }
};

export const findUserByEmailInDb = async (email: string): Promise<User | null> => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .limit(1);

    if (error || !data || data.length === 0) {
      return null;
    }

    const matched = data[0];
    return {
      id: matched.id,
      fullName: matched.full_name,
      phone: matched.phone,
      email: matched.email || '',
      username: matched.username,
      role: matched.role || 'user',
      createdAt: matched.created_at,
    };
  } catch (err) {
    console.warn('Find user by email exception:', err);
    return null;
  }
};

// ==========================================
// BANNER & SLIDER DATABASE PERSISTENCE
// ==========================================

export const uploadProductImage = async (image: string, filename?: string): Promise<string | null> => {
  if (!image || !image.startsWith('data:')) return image || null;
  try {
    const res = await fetch('/api/upload-product-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image, filename }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.url) {
        return data.url;
      }
    }
  } catch (err) {
    console.warn('Upload product image to server failed:', err);
  }
  return null;
};

export const uploadBannerImage = async (image: string, filename?: string): Promise<string | null> => {
  try {
    const res = await fetch('/api/upload-banner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image, filename }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.url) {
        return data.url;
      }
    }
  } catch (err) {
    console.warn('Upload banner image to server failed:', err);
  }
  return null;
};

export const fetchBannersFromDb = async (): Promise<BannerSlide[]> => {
  // 1. Primary: Fetch from Supabase Cloud Database (works across ALL mobile phones, browsers, and devices globally)
  try {
    const { data, error } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_BANNERS')
      .maybeSingle();

    if (!error && data && Array.isArray(data.messages) && data.messages.length > 0) {
      const banners: BannerSlide[] = data.messages;
      try {
        safeSetLocalStorage('jahesh_banners', JSON.stringify(banners));
      } catch {}
      return banners;
    }
  } catch (err) {
    console.warn('Supabase fetch banners exception:', err);
  }

  // 2. Secondary: Try server-side API endpoint if available
  try {
    const res = await fetch('/api/banners', { cache: 'no-store' });
    if (res.ok) {
      const serverBanners = await res.json();
      if (Array.isArray(serverBanners) && serverBanners.length > 0) {
        try {
          safeSetLocalStorage('jahesh_banners', JSON.stringify(serverBanners));
        } catch {}
        return serverBanners;
      }
    }
  } catch (e) {
    // API not available on static hosting (e.g. Vercel)
  }

  // 3. Fallback: Try LocalStorage
  try {
    const saved = localStorage.getItem('jahesh_banners');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}

  // 4. Final Fallback: INITIAL_BANNERS
  return INITIAL_BANNERS;
};

export const saveAllBannersToDb = async (banners: BannerSlide[]): Promise<boolean> => {
  let savedToSupabase = false;

  // 1. Cache immediately in localStorage and trigger window event
  try {
    safeSetLocalStorage('jahesh_banners', JSON.stringify(banners));
    window.dispatchEvent(new CustomEvent('jahesh-banners-updated', { detail: banners }));
  } catch {}

  // 2. Primary: Save directly to Supabase cloud database
  // This immediately syncs to every mobile phone, account, and computer worldwide!
  try {
    const { error } = await supabase.from('chats').upsert(
      {
        user_id: 'SYSTEM_CONFIG_BANNERS',
        user_name: 'تنظیمات بنرهای اسلایدر سایت',
        messages: banners,
        last_updated: new Date().toISOString(),
        is_read_by_admin: true,
      },
      { onConflict: 'user_id' }
    );
    if (!error) {
      savedToSupabase = true;
      console.log('Banners successfully saved to Supabase for all devices!');
    } else {
      console.warn('Supabase save banners error:', error.message);
    }
  } catch (err) {
    console.warn('Supabase save banners exception:', err);
  }

  // 3. Secondary: Send to server API if available (Node.js dev server or Vercel serverless)
  try {
    fetch('/api/banners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(banners),
    }).catch(() => {});
  } catch {}

  return savedToSupabase || true;
};

export const saveBannerToDb = async (banner: BannerSlide, fullList?: BannerSlide[]): Promise<boolean> => {
  try {
    let currentList: BannerSlide[] = fullList ? [...fullList] : [];
    if (!fullList) {
      try {
        const saved = localStorage.getItem('jahesh_banners');
        currentList = saved ? JSON.parse(saved) : [...INITIAL_BANNERS];
        const idx = currentList.findIndex((b) => String(b.id) === String(banner.id));
        if (idx >= 0) {
          currentList[idx] = banner;
        } else {
          currentList.push(banner);
        }
      } catch {
        currentList = [banner];
      }
    }

    return await saveAllBannersToDb(currentList);
  } catch (err) {
    console.warn('Save banner exception:', err);
    return false;
  }
};

export const deleteBannerFromDb = async (bannerId: string | number): Promise<boolean> => {
  try {
    const strId = String(bannerId);
    let updatedList: BannerSlide[] = [];

    try {
      const saved = localStorage.getItem('jahesh_banners');
      if (saved) {
        const currentList: BannerSlide[] = JSON.parse(saved);
        updatedList = currentList.filter((b) => String(b.id) !== strId);
      } else {
        updatedList = INITIAL_BANNERS.filter((b) => String(b.id) !== strId);
      }
    } catch {
      updatedList = INITIAL_BANNERS.filter((b) => String(b.id) !== strId);
    }

    return await saveAllBannersToDb(updatedList);
  } catch (err) {
    console.warn('Delete banner exception:', err);
    return false;
  }
};

