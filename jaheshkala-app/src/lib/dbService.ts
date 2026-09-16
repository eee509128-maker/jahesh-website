import { supabase } from './supabase';
import { Product, Order, User, Coupon, BannerSlide, DashboardTool } from '../types';
import { INITIAL_PRODUCTS, INITIAL_BANNERS, INITIAL_TOOLS } from '../data/initialData';
import { areSameUser, normalizePhone, normalizeUsername, mergeUserRecords } from './userUtils';


// Safe wrapper for safeSetLocalStorage to handle QuotaExceededError without ever losing or corrupting images
export const safeSetLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (e: any) {
    console.warn('LocalStorage SetItem Warning for key:', key, e);
    // If quota exceeded, clean only non-critical temp caches
    if (e.name === 'QuotaExceededError' || (e.message && e.message.toLowerCase().includes('quota'))) {
      try {
        const tempKeysToRemove = [
          'jahesh_pending_order',
          'jahesh_last_search',
          'jahesh_temp_crop',
          'jahesh_chat_cache',
          'debug_logs'
        ];
        for (const k of tempKeysToRemove) {
          localStorage.removeItem(k);
        }
        localStorage.setItem(key, value);
      } catch (err) {
        console.warn('LocalStorage save skipped (relying on Supabase Cloud DB):', err);
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

export function isRealCustomImage(img?: string): boolean {
  if (!img || typeof img !== 'string') return false;
  if (img.startsWith('data:image/svg+xml')) return false;
  if (img.includes('images.unsplash.com')) return false;
  if (img.includes('ascend-dashboard')) return false;
  return true;
}

// ========================================================
// DELETED PRODUCTS BLACKLIST (Tombstone synchronization)
// Guarantees deleted products NEVER resurrect on any device
// ========================================================
export const getDeletedProductIds = async (): Promise<string[]> => {
  let deletedIds: string[] = [];

  // 1. Read from localStorage cache first
  try {
    const raw = localStorage.getItem('jahesh_deleted_products');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) deletedIds = parsed;
    }
  } catch {}

  // 2. Fetch from Supabase SYSTEM_DELETED_PRODUCT_IDS
  try {
    const { data, error } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_DELETED_PRODUCT_IDS')
      .maybeSingle();
    if (!error && data && Array.isArray(data.messages)) {
      const cloudIds: string[] = data.messages.map((id: any) => String(id).trim()).filter(Boolean);
      deletedIds = Array.from(new Set([...deletedIds, ...cloudIds]));
    }
  } catch {}

  // 3. Fallback check server endpoint
  try {
    const res = await fetch('/api/products/deleted');
    if (res.ok) {
      const serverIds = await res.json();
      if (Array.isArray(serverIds)) {
        deletedIds = Array.from(new Set([...deletedIds, ...serverIds]));
      }
    }
  } catch {}

  try {
    safeSetLocalStorage('jahesh_deleted_products', JSON.stringify(deletedIds));
  } catch {}

  return deletedIds;
};

export const markProductIdAsDeleted = async (productId: string): Promise<void> => {
  if (!productId) return;
  try {
    const current = await getDeletedProductIds();
    if (!current.includes(productId)) {
      const updated = [...current, productId];
      safeSetLocalStorage('jahesh_deleted_products', JSON.stringify(updated));

      // Supabase
      try {
        await supabase.from('chats').upsert(
          {
            user_id: 'SYSTEM_DELETED_PRODUCT_IDS',
            user_name: 'لیست سیاه محصولات حذف شده',
            messages: updated,
            last_updated: new Date().toISOString(),
            is_read_by_admin: true,
          },
          { onConflict: 'user_id' }
        );
      } catch {}

      // Server disk
      try {
        await fetch('/api/products/deleted', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId }),
        });
      } catch {}
    }
  } catch {}
};

export const unmarkProductIdAsDeleted = async (productId: string): Promise<void> => {
  if (!productId) return;
  try {
    const current = await getDeletedProductIds();
    if (current.includes(productId)) {
      const updated = current.filter((id) => id !== productId);
      safeSetLocalStorage('jahesh_deleted_products', JSON.stringify(updated));

      try {
        await supabase.from('chats').upsert(
          {
            user_id: 'SYSTEM_DELETED_PRODUCT_IDS',
            user_name: 'لیست سیاه محصولات حذف شده',
            messages: updated,
            last_updated: new Date().toISOString(),
            is_read_by_admin: true,
          },
          { onConflict: 'user_id' }
        );
      } catch {}
    }
  } catch {}
};

// 1. PRODUCTS DB SERVICE & SMART DATA MERGING
export const mergeTwoProducts = (current: Product, incoming: Product): Product => {
  if (!current) return incoming;
  if (!incoming) return current;

  // 1. Image preservation: real custom uploaded images NEVER get replaced by SVGs or stock photos
  const currentHasRealImg = isRealCustomImage(current.image);
  const incomingHasRealImg = isRealCustomImage(incoming.image);

  let preferredImage = current.image || incoming.image;

  if (currentHasRealImg && !incomingHasRealImg) {
    preferredImage = current.image;
  } else if (!currentHasRealImg && incomingHasRealImg) {
    preferredImage = incoming.image;
  } else if (currentHasRealImg && incomingHasRealImg) {
    const incomingTime = incoming.updatedAt ? new Date(incoming.updatedAt).getTime() : 0;
    const currentTime = current.updatedAt ? new Date(current.updatedAt).getTime() : 0;
    preferredImage = (!isNaN(incomingTime) && !isNaN(currentTime) && incomingTime > currentTime)
      ? incoming.image
      : (current.image || incoming.image);
  }

  // 2. Base merge: database 'current' is authoritative unless incoming is strictly newer
  let baseMerge = { ...incoming, ...current };
  if (incoming.updatedAt && current.updatedAt) {
    const incomingTime = new Date(incoming.updatedAt).getTime();
    const currentTime = new Date(current.updatedAt).getTime();
    if (!isNaN(incomingTime) && !isNaN(currentTime) && incomingTime > currentTime) {
      baseMerge = { ...current, ...incoming };
    }
  }

  // Authoritative current properties always win
  const preferredIsIncredible = current.isIncredible !== undefined
    ? Boolean(current.isIncredible)
    : Boolean(incoming.isIncredible);

  const preferredPlans = (current.subscriptionPlans && current.subscriptionPlans.length > 0)
    ? current.subscriptionPlans
    : incoming.subscriptionPlans;

  const preferredGallery = (current.gallery && current.gallery.length > 0)
    ? current.gallery
    : incoming.gallery;

  return {
    ...baseMerge,
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
    isIncredible: Boolean(p.isIncredible),
  };
}

export const fetchProductsFromDb = async (): Promise<Product[]> => {
  const deletedIdsList = await getDeletedProductIds();
  const deletedIds = new Set(deletedIdsList);

  let authoritativeList: Product[] | null = null;

  // 0. Read current local products cache
  let localProducts: Product[] = [];
  try {
    const rawLocal = localStorage.getItem('jahesh_products');
    if (rawLocal) {
      const parsed = JSON.parse(rawLocal);
      if (Array.isArray(parsed)) {
        localProducts = parsed
          .map(cleanProductItem)
          .filter((p): p is Product => p !== null && !deletedIds.has(p.id));
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
      const cleaned = configData.messages
        .map(cleanProductItem)
        .filter((p): p is Product => p !== null && !deletedIds.has(p.id));
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
          const cleaned = serverProducts
            .map(cleanProductItem)
            .filter((p): p is Product => p !== null && !deletedIds.has(p.id));
          if (cleaned.length > 0) {
            authoritativeList = cleaned;
          }
        }
      }
    } catch (err) {
      console.warn('Check /api/products notice:', err);
    }
  }

  // 3. Base Products List: Cloud authoritative list is the 100% source of truth
  if (authoritativeList && authoritativeList.length > 0) {
    const localMap = new Map<string, Product>();
    for (const lp of localProducts) {
      if (lp && lp.id) localMap.set(lp.id, lp);
    }

    // Only preserve local custom uploaded image if authoritative image is SVG/placeholder
    const finalProducts = authoritativeList.map((p) => {
      const localItem = localMap.get(p.id);
      if (localItem && isRealCustomImage(localItem.image) && !isRealCustomImage(p.image)) {
        return { ...p, image: localItem.image };
      }
      return p;
    });

    // Update local storage so deleted items are removed and state is accurate
    try {
      safeSetLocalStorage('jahesh_products', JSON.stringify(finalProducts));
    } catch {}

    return finalProducts;
  }

  // Fallback if cloud was offline/empty
  const fallbackList = localProducts.length > 0
    ? localProducts.filter((p) => !deletedIds.has(p.id))
    : INITIAL_PRODUCTS
        .map(cleanProductItem)
        .filter((p): p is Product => p !== null && !deletedIds.has(p.id));

  try {
    safeSetLocalStorage('jahesh_products', JSON.stringify(fallbackList));
  } catch {}

  return fallbackList;
};

// Real-time subscription to products across all clients and devices
export const subscribeToProductsRealtime = (callback: (products: Product[]) => void) => {
  const channel = supabase
    .channel('jahesh-products-sync')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'chats',
        filter: 'user_id=eq.SYSTEM_CONFIG_PRODUCTS',
      },
      async (payload: any) => {
        if (payload?.new && Array.isArray(payload.new.messages)) {
          const deletedIds = new Set(await getDeletedProductIds());
          const cleaned = payload.new.messages
            .map(cleanProductItem)
            .filter((p: any): p is Product => p !== null && !deletedIds.has(p.id));
          if (cleaned.length > 0) {
            safeSetLocalStorage('jahesh_products', JSON.stringify(cleaned));
            callback(cleaned);
          }
        }
      }
    )
    .on('broadcast', { event: 'products_updated' }, async (payload: any) => {
      if (payload?.payload && Array.isArray(payload.payload)) {
        const deletedIds = new Set(await getDeletedProductIds());
        const cleaned = payload.payload
          .map(cleanProductItem)
          .filter((p: any): p is Product => p !== null && !deletedIds.has(p.id));
        if (cleaned.length > 0) {
          safeSetLocalStorage('jahesh_products', JSON.stringify(cleaned));
          callback(cleaned);
        }
      }
    })
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};

export const broadcastProductsUpdate = (products: Product[]) => {
  try {
    const channel = supabase.channel('jahesh-products-sync');
    channel.send({
      type: 'broadcast',
      event: 'products_updated',
      payload: products,
    });
  } catch {}
};

export const saveAllProductsToDb = async (products: Product[]): Promise<boolean> => {
  const deletedIds = new Set(await getDeletedProductIds());
  const stampedProducts = products
    .filter((p) => p && p.id && !deletedIds.has(p.id))
    .map((p) => ({
      ...p,
      isIncredible: Boolean(p.isIncredible),
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
    // Guarantee boolean status for isIncredible
    product.isIncredible = Boolean(product.isIncredible);

    // Unmark as deleted since admin is saving/updating this product
    await unmarkProductIdAsDeleted(product.id);

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

    // 2. Build authoritative list starting with the active local products
    const deletedIds = new Set(await getDeletedProductIds());
    let masterList: Product[] = [];
    try {
      const saved = localStorage.getItem('jahesh_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          masterList = parsed
            .map(cleanProductItem)
            .filter((p): p is Product => p !== null && !deletedIds.has(p.id));
        }
      }
    } catch {}

    // Merge in any other products from cloud without overriding existing items
    try {
      const { data: cloudRow } = await supabase
        .from('chats')
        .select('messages')
        .eq('user_id', 'SYSTEM_CONFIG_PRODUCTS')
        .maybeSingle();
      if (cloudRow && Array.isArray(cloudRow.messages)) {
        for (const cloudP of cloudRow.messages) {
          const cleaned = cleanProductItem(cloudP);
          if (cleaned && !deletedIds.has(cleaned.id) && !masterList.some((p) => p.id === cleaned.id)) {
            masterList.push(cleaned);
          }
        }
      }
    } catch (e) {
      console.warn('Fetch cloud in saveProductToDb notice:', e);
    }

    if (masterList.length === 0) {
      masterList = INITIAL_PRODUCTS
        .map(cleanProductItem)
        .filter((p): p is Product => p !== null && !deletedIds.has(p.id));
    }

    // Update or insert ONLY the specified product in the master list
    const idx = masterList.findIndex((p) => p.id === product.id);
    if (idx >= 0) {
      masterList[idx] = { ...masterList[idx], ...product };
    } else {
      masterList = [product, ...masterList];
    }

    // 3. Update local storage & broadcast event immediately
    try {
      safeSetLocalStorage('jahesh_products', JSON.stringify(masterList));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('jahesh-products-updated', { detail: masterList }));
      }
    } catch (err) {
      console.warn('LocalStorage save product warning:', err);
    }

    // 4. Primary: Save full updated products list to Supabase cloud JSON store (bulletproof across all devices & browsers)
    try {
      await supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_CONFIG_PRODUCTS',
          user_name: 'تنظیمات محصولات فروشگاه',
          messages: masterList,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      );
      broadcastProductsUpdate(masterList);
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
    // 1. Immediately blacklist this product ID so it can NEVER be resurrected
    await markProductIdAsDeleted(productId);

    // 2. Fetch authoritative cloud list
    let masterList: Product[] = [];
    try {
      const { data: cloudRow } = await supabase
        .from('chats')
        .select('messages')
        .eq('user_id', 'SYSTEM_CONFIG_PRODUCTS')
        .maybeSingle();
      if (cloudRow && Array.isArray(cloudRow.messages) && cloudRow.messages.length > 0) {
        masterList = cloudRow.messages.map(cleanProductItem).filter((p): p is Product => p !== null);
      }
    } catch (e) {
      console.warn('Fetch cloud in deleteProductFromDb notice:', e);
    }

    if (masterList.length === 0) {
      try {
        const saved = localStorage.getItem('jahesh_products');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            masterList = parsed.map(cleanProductItem).filter((p): p is Product => p !== null);
          }
        }
      } catch {}
    }

    if (masterList.length === 0) {
      masterList = [...INITIAL_PRODUCTS];
    }

    // Filter out the deleted product
    const updated = masterList.filter((p) => p.id !== productId);

    // 3. Update local storage & broadcast event immediately
    try {
      safeSetLocalStorage('jahesh_products', JSON.stringify(updated));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('jahesh-products-updated', { detail: updated }));
      }
    } catch {}

    // 4. Persist updated list to Supabase SYSTEM_CONFIG_PRODUCTS
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
      broadcastProductsUpdate(updated);
    } catch (err) {
      console.warn('Delete product from SYSTEM_CONFIG_PRODUCTS notice:', err);
    }

    // 5. Delete from server disk via /api/products/delete
    try {
      await fetch('/api/products/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
    } catch (e) {}

    // 6. Delete from relational products table
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
    const userIndex = localUsers.findIndex((u) => areSameUser(u, user));
    if (userIndex >= 0) {
      localUsers[userIndex] = {
        ...localUsers[userIndex],
        ...user,
        role: user.role, // Explicitly ensure role is updated
        updatedAt: new Date().toISOString(),
      };
    } else {
      localUsers.unshift({
        ...user,
        updatedAt: new Date().toISOString(),
      });
    }
    saveLocalUsersStore(localUsers);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-users-updated', { detail: localUsers }));
    }

    // 2. If this user is currently logged in on this browser, update current session immediately
    try {
      const rawCurrent = localStorage.getItem('jahesh_current_user');
      if (rawCurrent) {
        const currentParsed: User = JSON.parse(rawCurrent);
        if (areSameUser(currentParsed, user)) {
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

    // 3. Multi-layer background persistence (Server disk + Supabase) - AWAITED to prevent race condition reversion
    const cleanUName = normalizeUsername(user.username);
    const cleanP = normalizePhone(user.phone);

    await Promise.allSettled([
      // Server disk role endpoint
      fetch('/api/users/update-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          username: cleanUName || user.username,
          phone: cleanP || user.phone,
          role: user.role,
        }),
      }),
      // Server disk full user endpoint
      fetch('/api/users/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      }),
      // Supabase users table upsert
      supabase.from('users').upsert(
        {
          id: user.id || `usr-${Date.now()}`,
          full_name: user.fullName || 'کاربر جهش',
          phone: cleanP || user.phone || '',
          email: user.email || '',
          username: cleanUName || user.username,
          role: user.role,
          created_at: user.createdAt || new Date().toISOString(),
        },
        { onConflict: 'id' }
      ),
      // Supabase chats table backup (SYSTEM_CONFIG_USERS)
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
    ]);

    return true;
  } catch (err) {
    console.warn('Update user exception:', err);
    return true; // Local store was updated
  }
};

export const fetchAllUsersFromDb = async (): Promise<User[]> => {
  const usersList: User[] = [];

  const upsertToMergedList = (incoming: User) => {
    if (!incoming) return;
    const existingIndex = usersList.findIndex((u) => areSameUser(u, incoming));
    if (existingIndex >= 0) {
      usersList[existingIndex] = mergeUserRecords(usersList[existingIndex], incoming);
    } else {
      usersList.push(incoming);
    }
  };

  // 1. Load from local cache first to ensure recent local changes are never lost
  const localUsers = getLocalUsersStore();
  for (const lu of localUsers) {
    if (lu) upsertToMergedList(lu);
  }

  // 2. Load from Supabase users table (Authoritative cloud accounts & roles)
  try {
    const { data, error } = await supabase.from('users').select('*').order('created_at', { ascending: false });
    if (!error && data && Array.isArray(data)) {
      for (const matched of data) {
        const uObj: User = {
          id: matched.id,
          fullName: matched.full_name || 'کاربر',
          phone: matched.phone || '',
          email: matched.email || '',
          username: matched.username || '',
          role: (matched.role as 'admin' | 'operator' | 'user') || 'user',
          guild: matched.guild,
          customGuild: matched.custom_guild,
          createdAt: matched.created_at,
        };
        upsertToMergedList(uObj);
      }
    }
  } catch (err) {
    console.warn('Fetch Supabase users table exception:', err);
  }

  // 3. Load from SYSTEM_CONFIG_USERS in chats table (Multi-device cloud store)
  try {
    const { data: configData } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_USERS')
      .maybeSingle();

    if (configData && Array.isArray(configData.messages)) {
      for (const u of configData.messages) {
        if (u) upsertToMergedList(u);
      }
    }
  } catch (e) {
    // ignore
  }

  // 4. Load from server disk /api/users
  try {
    const res = await fetch('/api/users');
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.users)) {
        for (const u of data.users) {
          if (u) upsertToMergedList(u);
        }
      }
    }
  } catch (e) {
    // ignore
  }

  const result = sortUsersNewestFirst(usersList);
  saveLocalUsersStore(result);

  // If current logged-in user's role changed in cloud, auto-sync session immediately!
  try {
    const rawStored = localStorage.getItem('jahesh_current_user');
    if (rawStored) {
      const activeUser = JSON.parse(rawStored);
      const matched = result.find((u) => areSameUser(u, activeUser));
      if (matched && matched.role && matched.role !== activeUser.role) {
        const updated = { ...activeUser, ...matched, role: matched.role };
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
    await fetch('/api/banners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(banners),
    });
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

// ==========================================
// Jahesh Technology Dashboard Tools dbService
// ==========================================
export const fetchToolsFromDb = async (): Promise<DashboardTool[]> => {
  // 1. First attempt: Server API endpoint /api/tools with cache-busting
  try {
    const res = await fetch(`/api/tools?t=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', Pragma: 'no-cache' }
    });
    if (res.ok) {
      const serverTools = await res.json();
      if (Array.isArray(serverTools) && serverTools.length > 0) {
        safeSetLocalStorage('jahesh_tools', JSON.stringify(serverTools));
        return serverTools;
      }
    }
  } catch (err) {
    console.warn('Fetch /api/tools error:', err);
  }

  // 2. Second attempt: Supabase SYSTEM_CONFIG_TOOLS
  try {
    const { data, error } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_TOOLS')
      .maybeSingle();

    if (!error && data?.messages && Array.isArray(data.messages) && data.messages.length > 0) {
      safeSetLocalStorage('jahesh_tools', JSON.stringify(data.messages));
      return data.messages as DashboardTool[];
    }
  } catch (err) {
    console.warn('Supabase fetch tools error:', err);
  }

  // 3. Third attempt: LocalStorage cache
  try {
    const cached = localStorage.getItem('jahesh_tools');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {}

  // 4. Default authoritative fallback: INITIAL_TOOLS (all 44 tools from Jahesh Technology Dashboard)
  if (Array.isArray(INITIAL_TOOLS) && INITIAL_TOOLS.length > 0) {
    safeSetLocalStorage('jahesh_tools', JSON.stringify(INITIAL_TOOLS));
    // Background seed to cloud / api
    try {
      supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_CONFIG_TOOLS',
          user_name: 'تنظیمات ابزارهای داشبورد تکنولوژی جهش',
          messages: INITIAL_TOOLS,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      ).then(() => {});
    } catch {}
    return INITIAL_TOOLS;
  }

  return [];
};

export const saveAllToolsToDb = async (tools: DashboardTool[]): Promise<boolean> => {
  // 1. Cache immediately in localStorage
  try {
    safeSetLocalStorage('jahesh_tools', JSON.stringify(tools));
  } catch {}

  // 2. Save directly to server API
  try {
    await fetch('/api/tools', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tools),
    });
  } catch (err) {
    console.warn('Save /api/tools error:', err);
  }

  // 3. Save to Supabase cloud database
  try {
    await supabase.from('chats').upsert(
      {
        user_id: 'SYSTEM_CONFIG_TOOLS',
        user_name: 'تنظیمات ابزارهای داشبورد تکنولوژی جهش',
        messages: tools,
        last_updated: new Date().toISOString(),
        is_read_by_admin: true,
      },
      { onConflict: 'user_id' }
    );
  } catch (err) {
    console.warn('Supabase save tools error:', err);
  }

  // 4. Trigger window event with full updated tools detail
  try {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-tools-updated', { detail: tools }));
    }
  } catch {}

  return true;
};

export const saveToolToDb = async (tool: DashboardTool, fullList?: DashboardTool[]): Promise<boolean> => {
  try {
    let currentList: DashboardTool[] = fullList ? [...fullList] : [];
    if (!fullList) {
      try {
        const saved = localStorage.getItem('jahesh_tools');
        currentList = saved ? JSON.parse(saved) : (Array.isArray(INITIAL_TOOLS) ? [...INITIAL_TOOLS] : []);
        const idx = currentList.findIndex((t) => String(t.id) === String(tool.id));
        if (idx >= 0) {
          currentList[idx] = tool;
        } else {
          currentList.unshift(tool);
        }
      } catch {
        currentList = [tool, ...(Array.isArray(INITIAL_TOOLS) ? INITIAL_TOOLS : [])];
      }
    }

    return await saveAllToolsToDb(currentList);
  } catch (err) {
    console.warn('Save tool exception:', err);
    return false;
  }
};

export const deleteToolFromDb = async (toolId: string, fullList?: DashboardTool[]): Promise<boolean> => {
  try {
    let updatedList: DashboardTool[] = [];
    if (fullList) {
      updatedList = fullList.filter((t) => String(t.id) !== String(toolId));
    } else {
      const saved = localStorage.getItem('jahesh_tools');
      const currentList: DashboardTool[] = saved
        ? JSON.parse(saved)
        : (Array.isArray(INITIAL_TOOLS) ? [...INITIAL_TOOLS] : []);
      updatedList = currentList.filter((t) => String(t.id) !== String(toolId));
    }

    // Call server delete endpoint
    try {
      await fetch('/api/tools/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: toolId }),
      });
    } catch {}

    return await saveAllToolsToDb(updatedList);
  } catch (err) {
    console.warn('Delete tool exception:', err);
    return false;
  }
};

export const uploadToolImage = async (base64Data: string): Promise<string> => {
  try {
    const res = await fetch('/api/upload-tool-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: base64Data }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.url) return data.url;
    }
  } catch (e) {
    console.warn('Upload tool image server error, using data uri:', e);
  }
  return base64Data;
};


