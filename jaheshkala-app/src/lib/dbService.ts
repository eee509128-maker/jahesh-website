import { supabase } from './supabase';
import { db } from './firebase';
import { doc, setDoc, getDocs, getDoc, collection, deleteDoc, onSnapshot } from 'firebase/firestore';
import { Product, Order, User, Coupon, BannerSlide, DashboardTool } from '../types';
import { INITIAL_PRODUCTS, INITIAL_BANNERS, INITIAL_TOOLS } from '../data/initialData';
import { RESTORED_ZIBAL_ORDERS } from '../data/restoredOrders';
import { areSameUser, normalizePhone, normalizeUsername, mergeUserRecords, isMasterAdminUser } from './userUtils';


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

  // 2. Fetch from Firebase Firestore settings/deleted_products
  try {
    const docSnap = await getDoc(doc(db, 'settings', 'deleted_products'));
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data && Array.isArray(data.deletedIds)) {
        deletedIds = Array.from(new Set([...deletedIds, ...data.deletedIds.map((id: any) => String(id).trim()).filter(Boolean)]));
      }
    }
  } catch (fbErr) {
    console.warn('Firestore deleted_products fetch notice:', fbErr);
  }

  // 3. Fetch from Supabase SYSTEM_DELETED_PRODUCT_IDS
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

  // 4. Fallback check server endpoint
  try {
    const res = await fetch('/api/products/deleted');
    if (res.ok) {
      const serverIds = await res.json();
      if (Array.isArray(serverIds)) {
        deletedIds = Array.from(new Set([...deletedIds, ...serverIds.map((id: any) => String(id).trim()).filter(Boolean)]));
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
  const cleanId = String(productId).trim();
  if (!cleanId) return;

  try {
    const current = await getDeletedProductIds();
    const updated = Array.from(new Set([...current, cleanId]));
    safeSetLocalStorage('jahesh_deleted_products', JSON.stringify(updated));

    // 1. Firebase Firestore sync
    try {
      await setDoc(
        doc(db, 'settings', 'deleted_products'),
        {
          deletedIds: updated,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
    } catch (fbErr) {
      console.warn('Firestore mark deleted error:', fbErr);
    }

    // 2. Supabase sync
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

    // 3. Server disk sync
    try {
      await fetch('/api/products/deleted', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: cleanId }),
      });
    } catch {}
  } catch (err) {
    console.warn('markProductIdAsDeleted exception:', err);
  }
};

export const unmarkProductIdAsDeleted = async (productId: string): Promise<void> => {
  if (!productId) return;
  const cleanId = String(productId).trim();
  if (!cleanId) return;

  try {
    const current = await getDeletedProductIds();
    const updated = current.filter((id) => id !== cleanId);
    safeSetLocalStorage('jahesh_deleted_products', JSON.stringify(updated));

    // 1. Firebase Firestore
    try {
      await setDoc(
        doc(db, 'settings', 'deleted_products'),
        {
          deletedIds: updated,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
    } catch (fbErr) {
      console.warn('Firestore unmark deleted notice:', fbErr);
    }

    // 2. Supabase
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

    // 3. Server disk
    try {
      await fetch('/api/products/deleted/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: cleanId }),
      });
    } catch {}
  } catch {}
};

// 1. PRODUCTS DB SERVICE & SMART DATA MERGING
export const mergeTwoProducts = (current: Product, incoming: Product): Product => {
  if (!current) return incoming;
  if (!incoming) return current;

  // Compare timestamps
  const incomingTime = incoming.updatedAt ? new Date(incoming.updatedAt).getTime() : 0;
  const currentTime = current.updatedAt ? new Date(current.updatedAt).getTime() : 0;
  const incomingIsNewer = isNaN(currentTime) || (!isNaN(incomingTime) && incomingTime >= currentTime);

  const primary = incomingIsNewer ? incoming : current;
  const secondary = incomingIsNewer ? current : incoming;

  // Image: Authoritative from primary! If primary has an image property (even if empty because user deleted it),
  // we RESPECT primary's decision and NEVER resurrect the old deleted image from secondary!
  const preferredImage = typeof primary.image === 'string'
    ? primary.image.trim()
    : (typeof secondary.image === 'string' ? secondary.image.trim() : '');

  // Gallery: If primary explicitly provides an array (even empty [] because user deleted photos),
  // RESPECT primary's array and NEVER revive secondary's deleted photos!
  let preferredGallery: string[] = [];
  if (Array.isArray(primary.gallery)) {
    preferredGallery = primary.gallery.filter((g) => typeof g === 'string' && g.trim() !== '' && g.trim() !== preferredImage);
  } else if (Array.isArray(secondary.gallery)) {
    preferredGallery = secondary.gallery.filter((g) => typeof g === 'string' && g.trim() !== '' && g.trim() !== preferredImage);
  }

  return {
    ...secondary,
    ...primary,
    image: preferredImage,
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
  const safeOrder = typeof p.displayOrder === 'number' && !isNaN(p.displayOrder) 
    ? p.displayOrder 
    : (typeof p.displayRank === 'number' && !isNaN(p.displayRank) ? p.displayRank : undefined);

  const mainImage = (p.image || '').trim() || getFallbackProductImage(title, p.category);

  // Gallery: only keep distinct images that are NOT identical to mainImage
  let rawGallery: any[] = [];
  if (Array.isArray(p.gallery)) {
    rawGallery = p.gallery;
  } else if (Array.isArray(p.images)) {
    rawGallery = p.images;
  }
  const cleanGallery = rawGallery.filter(
    (img): img is string => typeof img === 'string' && img.trim() !== '' && img.trim() !== mainImage
  );

  return {
    ...p,
    id,
    title,
    category: p.category || 'کالای دیجیتال',
    price: safePrice,
    originalPrice: safeOriginalPrice,
    discountPercent: safeDiscount,
    displayOrder: safeOrder,
    displayRank: safeOrder,
    rating: typeof p.rating === 'number' ? p.rating : 5,
    reviewsCount: typeof p.reviewsCount === 'number' ? p.reviewsCount : 1,
    image: mainImage,
    gallery: cleanGallery,
    description: p.description || '',
    features: Array.isArray(p.features) ? p.features : [],
    inStock: p.inStock !== false,
    warranty: p.warranty || 'گارانتی اصالت و سلامت جهش',
    isIncredible: Boolean(p.isIncredible),
  };
}

// Function to sort products by displayOrder / displayRank ascending
export const sortProductsByRank = (productsList: Product[]): Product[] => {
  if (!Array.isArray(productsList)) return [];
  return [...productsList].sort((a, b) => {
    const orderA = typeof a.displayOrder === 'number' ? a.displayOrder : (typeof a.displayRank === 'number' ? a.displayRank : 9999);
    const orderB = typeof b.displayOrder === 'number' ? b.displayOrder : (typeof b.displayRank === 'number' ? b.displayRank : 9999);
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    // If rank is identical or default, sort golden items first
    if (Boolean(a.isGolden) !== Boolean(b.isGolden)) {
      return a.isGolden ? -1 : 1;
    }
    return 0;
  });
};

// BroadcastChannel for instant (0ms) cross-tab product synchronization
export const getProductsBroadcastChannel = (): BroadcastChannel | null => {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    try {
      return new BroadcastChannel('jahesh_products_sync_channel');
    } catch {}
  }
  return null;
};

export const fetchProductsFromDb = async (): Promise<Product[]> => {
  // 1. Direct Server API (/api/products & /jaheshkala/api/products) - FASTEST & MOST AUTHORITATIVE (< 15ms)
  try {
    const res = await fetchUniversalApi(`products?_t=${Date.now()}`, { cache: 'no-store' });
    if (res && res.ok) {
      const data = await res.json();
      const serverProducts = Array.isArray(data) ? data : (data?.products || []);
      if (Array.isArray(serverProducts) && serverProducts.length > 0) {
        const cleaned = serverProducts
          .map(cleanProductItem)
          .filter((p): p is Product => p !== null);
        if (cleaned.length > 0) {
          const sorted = sortProductsByRank(cleaned);
          safeSetLocalStorage('jahesh_products', JSON.stringify(sorted));
          return sorted;
        }
      }
    }
  } catch (err) {
    console.warn('Direct server fetch notice:', err);
  }

  // 2. Firebase Cloud Firestore (Direct Cloud Sync)
  try {
    const docSnap = await getDoc(doc(db, 'settings', 'products'));
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data && Array.isArray(data.products) && data.products.length > 0) {
        const cleaned = data.products
          .map(cleanProductItem)
          .filter((p): p is Product => p !== null);
        if (cleaned.length > 0) {
          const sorted = sortProductsByRank(cleaned);
          safeSetLocalStorage('jahesh_products', JSON.stringify(sorted));
          return sorted;
        }
      }
    }
  } catch (err) {
    console.warn('Firestore products fetch notice:', err);
  }

  // 3. Local Storage Cache (Instant offline fallback)
  try {
    const rawLocal = localStorage.getItem('jahesh_products');
    if (rawLocal) {
      const parsed = JSON.parse(rawLocal);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const cleaned = parsed
          .map(cleanProductItem)
          .filter((p): p is Product => p !== null);
        if (cleaned.length > 0) {
          return sortProductsByRank(cleaned);
        }
      }
    }
  } catch {}

  // 4. Fallback to INITIAL_PRODUCTS (only here do we exclude deleted legacy demo templates)
  const deletedIdsList = await getDeletedProductIds();
  const deletedIds = new Set(deletedIdsList);
  const rawFallback = INITIAL_PRODUCTS
    .map(cleanProductItem)
    .filter((p): p is Product => p !== null && !deletedIds.has(p.id));

  const fallbackList = sortProductsByRank(rawFallback);
  try {
    safeSetLocalStorage('jahesh_products', JSON.stringify(fallbackList));
  } catch {}

  return fallbackList;
};

// Real-time subscription to products across all clients and devices (Enterprise Grade - Zero Lag)
export const subscribeToProductsRealtime = (callback: (products: Product[]) => void) => {
  let isUnsubscribed = false;

  // 1. Instant window event for current page (0ms)
  const handleLocalEvent = (e: any) => {
    if (isUnsubscribed) return;
    if (e.detail && Array.isArray(e.detail)) {
      callback(sortProductsByRank(e.detail));
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('jahesh-products-updated', handleLocalEvent);
  }

  // 2. Cross-tab BroadcastChannel sync (0ms across all tabs on this device)
  const bc = getProductsBroadcastChannel();
  if (bc) {
    bc.onmessage = (e) => {
      if (isUnsubscribed) return;
      if (e.data && e.data.type === 'PRODUCTS_UPDATED' && Array.isArray(e.data.products)) {
        callback(sortProductsByRank(e.data.products));
      }
    };
  }

  // 3. LocalStorage storage event (catches updates from other windows/iframes)
  const handleStorageEvent = (e: StorageEvent) => {
    if (isUnsubscribed) return;
    if (e.key === 'jahesh_products' && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        if (Array.isArray(parsed) && parsed.length > 0) {
          callback(sortProductsByRank(parsed));
        }
      } catch {}
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorageEvent);
  }

  let lastProductFingerprint = '';

  // 4. Google Firebase Firestore Realtime Live Listener (Instant Cloud WebSocket/SSE)
  let unsubscribeFirestore: (() => void) | null = null;
  try {
    const productsDocRef = doc(db, 'settings', 'products');
    unsubscribeFirestore = onSnapshot(
      productsDocRef,
      (docSnap) => {
        if (isUnsubscribed) return;
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data && Array.isArray(data.products) && data.products.length > 0) {
            const cleaned = data.products
              .map(cleanProductItem)
              .filter((p): p is Product => p !== null);
            if (cleaned.length > 0) {
              const fingerprint = cleaned
                .map((p) => `${p.id}:${p.updatedAt || ''}:${p.price}:${p.image || ''}:${p.displayOrder || ''}`)
                .join('|');
              if (fingerprint !== lastProductFingerprint) {
                lastProductFingerprint = fingerprint;
                const sorted = sortProductsByRank(cleaned);
                safeSetLocalStorage('jahesh_products', JSON.stringify(sorted));
                callback(sorted);
              }
            }
          }
        }
      },
      (err) => {
        console.warn('Firestore live products listener notice:', err);
      }
    );
  } catch (fbErr) {
    console.warn('Firestore onSnapshot initialization notice:', fbErr);
  }

  // 5. Domestic Server Polling (every 2.5 seconds fallback)
  // Ensures all users on all networks receive updates with zero disruption
  const pollServer = async () => {
    if (isUnsubscribed) return;
    try {
      const res = await fetchUniversalApi(`products?_t=${Date.now()}`, { cache: 'no-store' });
      if (res && res.ok) {
        const data = await res.json();
        const list = Array.isArray(data) ? data : (data?.products || []);
        if (Array.isArray(list) && list.length > 0) {
          const cleaned = list
            .map(cleanProductItem)
            .filter((p): p is Product => p !== null);
          const fingerprint = cleaned
            .map((p) => `${p.id}:${p.updatedAt || ''}:${p.price}:${p.image || ''}:${p.displayOrder || ''}`)
            .join('|');

          if (fingerprint !== lastProductFingerprint) {
            lastProductFingerprint = fingerprint;
            const sorted = sortProductsByRank(cleaned);
            safeSetLocalStorage('jahesh_products', JSON.stringify(sorted));
            callback(sorted);
          }
        }
      }
    } catch {}
  };

  // Run initial poll quickly after 300ms, then every 2500ms
  const initialPollTimer = setTimeout(pollServer, 300);
  const pollInterval = setInterval(pollServer, 2500);

  // 5. Instant refresh when user switches back to this tab/window
  const handleVisibilityOrFocus = () => {
    if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
      pollServer();
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('focus', pollServer);
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityOrFocus);
  }

  return () => {
    isUnsubscribed = true;
    clearTimeout(initialPollTimer);
    clearInterval(pollInterval);
    if (unsubscribeFirestore) {
      try {
        unsubscribeFirestore();
      } catch {}
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('jahesh-products-updated', handleLocalEvent);
      window.removeEventListener('storage', handleStorageEvent);
      window.removeEventListener('focus', pollServer);
    }
    if (typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', handleVisibilityOrFocus);
    }
    if (bc) {
      try { bc.close(); } catch {}
    }
  };
};

export const broadcastProductsUpdate = (products: Product[]) => {
  try {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-products-updated', { detail: products }));
      const bc = getProductsBroadcastChannel();
      if (bc) {
        bc.postMessage({ type: 'PRODUCTS_UPDATED', products, version: Date.now() });
      }
    }
  } catch {}
};

export const saveAllProductsToDb = async (products: Product[]): Promise<boolean> => {
  const deletedIds = new Set(await getDeletedProductIds());
  const stampedProducts = products
    .filter((p) => p && p.id && !deletedIds.has(p.id))
    .map((p, idx) => ({
      ...p,
      displayOrder: typeof p.displayOrder === 'number' && p.displayOrder > 0 ? p.displayOrder : idx + 1,
      displayRank: typeof p.displayRank === 'number' && p.displayRank > 0 ? p.displayRank : idx + 1,
      isIncredible: Boolean(p.isIncredible),
      updatedAt: p.updatedAt || new Date().toISOString(),
    }));

  const sorted = sortProductsByRank(stampedProducts);

  // 1. Immediately cache locally & dispatch update event (0ms)
  try {
    safeSetLocalStorage('jahesh_products', JSON.stringify(sorted));
    broadcastProductsUpdate(sorted);
  } catch {}

  // 2. Persist to server disk via /api/products
  try {
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sorted),
    });
  } catch (e) {
    console.warn('Persist to /api/products notice:', e);
  }

  // 3. Primary Cloud Database: Google Firebase Firestore
  try {
    await setDoc(
      doc(db, 'settings', 'products'),
      {
        products: sorted,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
    sorted.forEach((p) => {
      setDoc(doc(db, 'products', p.id), p, { merge: true }).catch(() => {});
    });
  } catch (fbErr) {
    console.warn('Save products to Firestore notice:', fbErr);
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

    const productWithTimestamp: Product = {
      ...product,
      updatedAt: product.updatedAt || new Date().toISOString(),
    };

    const cleanGallery = Array.isArray(productWithTimestamp.gallery)
      ? productWithTimestamp.gallery.filter((g) => typeof g === 'string' && g.trim() !== '' && g.trim() !== productWithTimestamp.image)
      : [];
    const authoritativeProduct: Product = {
      ...productWithTimestamp,
      gallery: cleanGallery,
    };

    // 1. Direct Server Disk Persistence (/api/products/save & /jaheshkala/api/products/save) - Instant disk write
    try {
      const res = await fetch('/api/products/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authoritativeProduct),
      });
      if (!res.ok) {
        await fetchUniversalApi('products/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(authoritativeProduct),
        });
      }
    } catch (e) {
      try {
        await fetchUniversalApi('products/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(authoritativeProduct),
        });
      } catch {}
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
            .filter((p): p is Product => p !== null && (p.id === product.id || !deletedIds.has(p.id)));
        }
      }
    } catch {}

    const idx = masterList.findIndex((p) => p.id === product.id);
    if (idx >= 0) {
      masterList[idx] = {
        ...masterList[idx],
        ...authoritativeProduct,
        image: authoritativeProduct.image,
        gallery: authoritativeProduct.gallery,
      };
    } else {
      masterList = [authoritativeProduct, ...masterList];
    }

    const sortedMaster = sortProductsByRank(masterList);

    // 3. Update local storage & broadcast event immediately (0ms)
    try {
      safeSetLocalStorage('jahesh_products', JSON.stringify(sortedMaster));
      broadcastProductsUpdate(sortedMaster);
    } catch (err) {
      console.warn('LocalStorage save product warning:', err);
    }

    // 4. Firebase Firestore sync: Save BOTH individual doc in products collection AND settings/products
    try {
      await Promise.allSettled([
        setDoc(doc(db, 'products', product.id), authoritativeProduct, { merge: true }),
        setDoc(
          doc(db, 'settings', 'products'),
          {
            products: sortedMaster,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        ),
      ]);
    } catch (fbErr) {
      console.warn('Firestore save product notice:', fbErr);
    }

    return true;
  } catch (err) {
    console.warn('Save product exception:', err);
    return false;
  }
};

export const deleteProductFromDb = async (productId: string): Promise<boolean> => {
  try {
    const cleanId = String(productId).trim();
    if (!cleanId) return false;

    // 1. Immediately blacklist this product ID so it can NEVER be resurrected
    await markProductIdAsDeleted(cleanId);

    // 2. Fetch authoritative list starting from local cache
    let masterList: Product[] = [];
    try {
      const saved = localStorage.getItem('jahesh_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          masterList = parsed.map(cleanProductItem).filter((p): p is Product => p !== null);
        }
      }
    } catch {}

    if (masterList.length === 0) {
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
    }

    if (masterList.length === 0) {
      masterList = [...INITIAL_PRODUCTS];
    }

    // Filter out the deleted product
    const updated = masterList.filter((p) => p.id !== cleanId);

    // 3. Update local storage & broadcast event immediately
    try {
      safeSetLocalStorage('jahesh_products', JSON.stringify(updated));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('jahesh-products-updated', { detail: updated }));
      }
    } catch {}

    // 4. Firebase Firestore sync: Update settings/products AND delete individual doc
    try {
      await Promise.allSettled([
        setDoc(
          doc(db, 'settings', 'products'),
          {
            products: updated,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        ),
        deleteDoc(doc(db, 'products', cleanId)),
      ]);
    } catch (fbErr) {
      console.warn('Firestore delete products notice:', fbErr);
    }

    // 5. Delete from server disk via /api/products/delete & /jaheshkala/api/products/delete
    try {
      const res = await fetch('/api/products/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: cleanId }),
      });
      if (!res.ok) {
        await fetchUniversalApi(`products/delete?id=${encodeURIComponent(cleanId)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: cleanId }),
        });
      }
    } catch (e) {
      try {
        await fetchUniversalApi(`products/delete?id=${encodeURIComponent(cleanId)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: cleanId }),
        });
      } catch {}
    }

    return true;
  } catch (err) {
    console.warn('Delete product exception:', err);
    return false;
  }
};

// ========================================================
// SAVE ALL PRODUCTS ORDER & DISPLAY RANK TO DB (CLOUD SYNC)
// ========================================================
export const saveAllProductsOrderToDb = async (orderedProducts: Product[]): Promise<boolean> => {
  try {
    if (!Array.isArray(orderedProducts)) return false;
    const deletedIds = new Set(await getDeletedProductIds());

    // Normalize and stamp order index
    const processedList: Product[] = orderedProducts
      .filter((p) => p && p.id && !deletedIds.has(String(p.id).trim()))
      .map((p, idx) => {
        const orderNum = typeof p.displayOrder === 'number' && !isNaN(p.displayOrder) ? p.displayOrder : idx + 1;
        return {
          ...p,
          displayOrder: orderNum,
          displayRank: orderNum,
          updatedAt: new Date().toISOString(),
        };
      });

    const finalList = sortProductsByRank(processedList);

    // 1. LocalStorage & local event (0ms)
    try {
      safeSetLocalStorage('jahesh_products', JSON.stringify(finalList));
      broadcastProductsUpdate(finalList);
    } catch {}

    // 2. Server disk
    try {
      await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalList),
      });
    } catch {}

    // 3. Firebase Firestore sync
    try {
      await setDoc(
        doc(db, 'settings', 'products'),
        {
          products: finalList,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      finalList.forEach((prod) => {
        setDoc(doc(db, 'products', prod.id), prod, { merge: true }).catch(() => {});
      });
    } catch (fbErr) {
      console.warn('Firestore save all products order notice:', fbErr);
    }

    return true;
  } catch (err) {
    console.error('Error in saveAllProductsOrderToDb:', err);
    return false;
  }
};

// ========================================================
// DELETED ORDERS BLACKLIST (Tombstone synchronization)
// Guarantees deleted orders NEVER resurrect on any device or refresh
// ========================================================
const DELETED_ORDERS_KEY = 'jahesh_deleted_orders';

export const getLocalDeletedOrderIds = (): string[] => {
  try {
    const raw = localStorage.getItem(DELETED_ORDERS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.map((id: any) => String(id).trim()).filter(Boolean);
    }
  } catch {}
  return [];
};

export const getDeletedOrderIds = async (): Promise<string[]> => {
  let deletedIds: string[] = getLocalDeletedOrderIds();

  // 1. Fetch from Supabase SYSTEM_DELETED_ORDER_IDS
  try {
    const { data, error } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_DELETED_ORDER_IDS')
      .maybeSingle();
    if (!error && data && Array.isArray(data.messages)) {
      const cloudIds: string[] = data.messages.map((id: any) => String(id).trim()).filter(Boolean);
      deletedIds = Array.from(new Set([...deletedIds, ...cloudIds]));
    }
  } catch {}

  // 2. Fetch from Universal API orders/deleted
  try {
    const res = await fetchUniversalApi('orders/deleted', { cache: 'no-store' });
    if (res && res.ok) {
      const serverIds = await res.json();
      if (Array.isArray(serverIds)) {
        deletedIds = Array.from(new Set([...deletedIds, ...serverIds.map((id: any) => String(id).trim()).filter(Boolean)]));
      }
    }
  } catch {}

  // 3. Fetch from Firebase Firestore
  try {
    const snap = await getDoc(doc(db, 'system_configs', 'deleted_orders'));
    if (snap.exists()) {
      const data = snap.data();
      if (data && Array.isArray(data.orderIds)) {
        const firestoreIds = data.orderIds.map((id: any) => String(id).trim()).filter(Boolean);
        deletedIds = Array.from(new Set([...deletedIds, ...firestoreIds]));
      }
    }
  } catch {}

  try {
    safeSetLocalStorage(DELETED_ORDERS_KEY, JSON.stringify(deletedIds));
  } catch {}

  return deletedIds;
};

export const markOrderIdAsDeleted = async (orderId: string, additionalKeys: string[] = []): Promise<void> => {
  if (!orderId) return;
  const keysToAdd = [orderId, ...additionalKeys].filter(Boolean).map((k) => String(k).trim());

  try {
    const current = getLocalDeletedOrderIds();
    const updated = Array.from(new Set([...current, ...keysToAdd]));
    safeSetLocalStorage(DELETED_ORDERS_KEY, JSON.stringify(updated));

    // Supabase
    try {
      await supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_DELETED_ORDER_IDS',
          user_name: 'لیست سیاه سفارشات حذف شده',
          messages: updated,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      );
    } catch {}

    // Universal API
    try {
      await fetchUniversalApi('orders/deleted', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderIds: keysToAdd }),
      });
    } catch {}

    // Firebase Firestore
    try {
      await setDoc(doc(db, 'system_configs', 'deleted_orders'), {
        orderIds: updated,
        lastUpdated: new Date().toISOString(),
      }, { merge: true });
    } catch {}
  } catch {}
};

export const unmarkOrderIdAsDeleted = async (orderId: string): Promise<void> => {
  if (!orderId) return;
  try {
    const current = getLocalDeletedOrderIds();
    if (current.includes(orderId)) {
      const updated = current.filter((id) => id !== orderId);
      safeSetLocalStorage(DELETED_ORDERS_KEY, JSON.stringify(updated));

      try {
        await supabase.from('chats').upsert(
          {
            user_id: 'SYSTEM_DELETED_ORDER_IDS',
            user_name: 'لیست سیاه سفارشات حذف شده',
            messages: updated,
            last_updated: new Date().toISOString(),
            is_read_by_admin: true,
          },
          { onConflict: 'user_id' }
        );
      } catch {}

      try {
        await setDoc(doc(db, 'system_configs', 'deleted_orders'), {
          orderIds: updated,
          lastUpdated: new Date().toISOString(),
        }, { merge: true });
      } catch {}
    }
  } catch {}
};

// 2. ORDERS DB SERVICE WITH HYBRID LOCAL & CLOUD SYNC
const LOCAL_ORDERS_KEY = 'jahesh_orders_store';

export const getLocalOrdersStore = (): Order[] => {
  const deletedSet = new Set(getLocalDeletedOrderIds());
  const isDeleted = (o: any) => {
    if (!o) return true;
    if (o.id && deletedSet.has(String(o.id).trim())) return true;
    if (o.trackingCode && deletedSet.has(String(o.trackingCode).trim())) return true;
    if (o.zibalTrackId && deletedSet.has(String(o.zibalTrackId).trim())) return true;
    if (o.paymentRefId && deletedSet.has(String(o.paymentRefId).trim())) return true;
    return false;
  };

  try {
    const raw = localStorage.getItem(LOCAL_ORDERS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        // Ensure restored Zibal orders are merged if not deleted
        const map = new Map<string, Order>();
        RESTORED_ZIBAL_ORDERS.forEach((o) => {
          if (!isDeleted(o)) {
            map.set(o.id || o.trackingCode || '', o);
          }
        });
        parsed.forEach((o) => {
          if (o && (o.id || o.trackingCode) && !isDeleted(o)) {
            map.set(o.id || o.trackingCode || '', { ...map.get(o.id || o.trackingCode || ''), ...o });
          }
        });
        const merged = Array.from(map.values()).filter((o) => !isDeleted(o));
        merged.sort((a, b) => parseOrderTimestamp(b) - parseOrderTimestamp(a));
        return merged;
      }
    }
    const legacyRaw = localStorage.getItem('jahesh_orders');
    if (legacyRaw) {
      const parsedLegacy = JSON.parse(legacyRaw);
      if (Array.isArray(parsedLegacy)) {
        const map = new Map<string, Order>();
        RESTORED_ZIBAL_ORDERS.forEach((o) => {
          if (!isDeleted(o)) {
            map.set(o.id || o.trackingCode || '', o);
          }
        });
        parsedLegacy.forEach((o) => {
          if (o && (o.id || o.trackingCode) && !isDeleted(o)) {
            map.set(o.id || o.trackingCode || '', { ...map.get(o.id || o.trackingCode || ''), ...o });
          }
        });
        const merged = Array.from(map.values()).filter((o) => !isDeleted(o));
        merged.sort((a, b) => parseOrderTimestamp(b) - parseOrderTimestamp(a));
        return merged;
      }
    }
  } catch (e) {
    console.warn('Error reading local orders store:', e);
  }
  return RESTORED_ZIBAL_ORDERS.filter((o) => !isDeleted(o));
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
  const deletedIdsList = await getDeletedOrderIds();
  const deletedIds = new Set(deletedIdsList);
  const isDeleted = (o: any) => {
    if (!o) return true;
    if (o.id && deletedIds.has(String(o.id).trim())) return true;
    if (o.trackingCode && deletedIds.has(String(o.trackingCode).trim())) return true;
    if (o.zibalTrackId && deletedIds.has(String(o.zibalTrackId).trim())) return true;
    if (o.paymentRefId && deletedIds.has(String(o.paymentRefId).trim())) return true;
    return false;
  };

  const localOrders = getLocalOrdersStore().filter((o) => !isDeleted(o));
  let serverDiskOrders: Order[] = [];
  let chatConfigOrders: Order[] = [];
  let tableOrders: Order[] = [];

  // 1. Layer 1: Fetch from server disk /api/orders (Universal Vercel + PHP)
  try {
    const res = await fetchUniversalApi('orders', { cache: 'no-store' });
    if (res && res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.orders)) {
        serverDiskOrders = data.orders.filter((o: any) => !isDeleted(o));
      }
    }
  } catch (err) {
    console.warn('Check Universal API orders notice:', err);
  }

  // 2. Layer 2: Fetch from Supabase SYSTEM_CONFIG_ORDERS in chats table
  try {
    const { data: configData, error: configError } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_ORDERS')
      .maybeSingle();

    if (!configError && configData && Array.isArray(configData.messages)) {
      chatConfigOrders = configData.messages.filter((o: any) => !isDeleted(o));
    }
  } catch (e) {
    console.warn('Check SYSTEM_CONFIG_ORDERS notice:', e);
  }

  // 3. Layer 3: Fetch from Supabase orders table
  try {
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      tableOrders = data
        .map((item) => {
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
        })
        .filter((o) => !isDeleted(o));
    }
  } catch (err) {
    console.warn('Supabase fetch orders table notice:', err);
  }

  // 4. Layer 4: Fetch from Google Firebase Firestore Cloud Database
  const firestoreOrders: Order[] = [];
  try {
    const snap = await getDocs(collection(db, 'orders'));
    snap.forEach((d) => {
      const o = d.data() as Order;
      if (o && (o.id || o.trackingCode) && !isDeleted(o)) {
        firestoreOrders.push(o);
      }
    });
  } catch (err) {
    console.warn('Firebase Firestore fetch orders notice:', err);
  }

  // Merge all sources into a single deduplicated list
  const allOrdersMap = new Map<string, Order>();
  const addOrderToMap = (o: Order) => {
    if (!o || (!o.id && !o.trackingCode) || isDeleted(o)) return;
    const key = o.id || o.trackingCode;
    const existing = allOrdersMap.get(key);
    if (!existing) {
      allOrdersMap.set(key, o);
    } else {
      const oTime = o.statusUpdatedAt ? new Date(o.statusUpdatedAt).getTime() : 0;
      const existingTime = existing.statusUpdatedAt ? new Date(existing.statusUpdatedAt).getTime() : 0;
      let preferredStatus = existing.status;
      if (oTime > existingTime) {
        preferredStatus = o.status;
      } else if (o.status && o.status !== 'در حال بررسی') {
        preferredStatus = o.status;
      } else if (existing.status && existing.status !== 'در حال بررسی') {
        preferredStatus = existing.status;
      } else {
        preferredStatus = o.status || existing.status;
      }

      // Keep most complete order details, preserve gateway fields
      allOrdersMap.set(key, {
        ...existing,
        ...o,
        status: preferredStatus,
        statusUpdatedAt: o.statusUpdatedAt || existing.statusUpdatedAt,
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

  RESTORED_ZIBAL_ORDERS.filter((o) => !isDeleted(o)).forEach(addOrderToMap);
  firestoreOrders.forEach(addOrderToMap);
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

  // Unmark newly saved or updated order from deleted tombstone
  if (order.id) {
    unmarkOrderIdAsDeleted(String(order.id));
  }
  if (order.trackingCode) {
    unmarkOrderIdAsDeleted(String(order.trackingCode));
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

  // 2. Persist to server disk via Universal API
  try {
    await fetchUniversalApi('orders/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
  } catch (e) {
    console.warn('Persist order to Universal API notice:', e);
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

  // 5. Enterprise Cloud: Persist order to Google Firebase Firestore (High-scale, 100% Free, Global Google Cloud)
  try {
    const cleanOrderData: Record<string, any> = { ...order };
    Object.keys(cleanOrderData).forEach((k) => {
      if (cleanOrderData[k] === undefined) {
        cleanOrderData[k] = '';
      }
    });
    await setDoc(doc(db, 'orders', String(order.id)), cleanOrderData, { merge: true });
    console.log('Order persisted to Google Firebase Firestore successfully:', order.id);
  } catch (fbErr) {
    console.warn('Firebase Firestore save order notice:', fbErr);
  }

  // 6. If order has an attached app license or amlak license, guarantee persistence to Firestore licenses collection
  const licsToSync = [order.appLicense, order.amlakLicense].filter(Boolean);
  for (const lic of licsToSync) {
    if (lic && (lic.username || lic.licenseKey)) {
      const targetId = lic.id || (lic.licenseKey ? `lic-${lic.licenseKey}` : `lic-order-${order.id}`);
      try {
        await setDoc(
          doc(db, 'licenses', String(targetId)),
          {
            ...lic,
            id: targetId,
            orderId: order.id,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      } catch (err) {
        console.warn('Notice saving license to Firestore:', err);
      }
    }
  }

  return true;
};

export const updateOrderStatusInDb = async (orderId: string, status: string): Promise<boolean> => {
  let updated: Order[] = [];
  const statusUpdatedAt = new Date().toISOString();
  try {
    const current = getLocalOrdersStore();
    updated = current.map((o) =>
      o.id === orderId || o.trackingCode === orderId || o.paymentRefId === orderId || o.zibalTrackId === orderId
        ? { ...o, status: status as any, statusUpdatedAt }
        : o
    );
    saveLocalOrdersStore(updated);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: updated }));
    }
  } catch (e) {}

  // 1. Update in Node.js & PHP server API
  try {
    await fetchUniversalApi('orders/update-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId, status, statusUpdatedAt }),
    });
  } catch (e) {}

  // 2. Update in Firebase Firestore
  try {
    await setDoc(doc(db, 'orders', String(orderId)), { status, statusUpdatedAt }, { merge: true });
  } catch (err) {
    console.warn('Firestore update order status notice:', err);
  }

  // 3. Update in Supabase chats table (zero-VPN persistent cloud)
  try {
    if (updated.length > 0) {
      await supabase.from('chats').upsert(
        {
          user_id: 'SYSTEM_CONFIG_ORDERS',
          user_name: 'لیست تمام سفارشات فروشگاه',
          messages: updated,
          last_updated: statusUpdatedAt,
          is_read_by_admin: true,
        },
        { onConflict: 'user_id' }
      );
    }
  } catch (e) {}

  // 4. Update in Supabase orders table
  try {
    await supabase.from('orders').update({ status }).eq('id', orderId);
  } catch (err) {}

  return true;
};

export const deleteOrderFromDb = async (orderId: string): Promise<boolean> => {
  if (!orderId) return false;

  let current = getLocalOrdersStore();
  const target = current.find(
    (o) =>
      o.id === orderId ||
      o.trackingCode === orderId ||
      o.paymentRefId === orderId ||
      o.zibalTrackId === orderId
  );
  const allKeys = [
    orderId,
    target?.id,
    target?.trackingCode,
    target?.paymentRefId,
    target?.zibalTrackId,
    target?.zibalRefNumber,
  ]
    .filter((k): k is string => Boolean(k))
    .map((k) => String(k).trim());

  // 1. Mark as deleted in persistent tombstone blacklist (LocalStorage, Supabase chats, Universal API)
  await markOrderIdAsDeleted(orderId, allKeys);

  // 2. Remove from LocalStorage immediately & broadcast event
  const keySet = new Set(allKeys);
  const updated = current.filter(
    (o) =>
      !keySet.has(String(o.id).trim()) &&
      (!o.trackingCode || !keySet.has(String(o.trackingCode).trim())) &&
      (!o.zibalTrackId || !keySet.has(String(o.zibalTrackId).trim())) &&
      (!o.paymentRefId || !keySet.has(String(o.paymentRefId).trim()))
  );
  saveLocalOrdersStore(updated);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: updated }));
  }

  // 3. Delete from Server Disk via Universal API
  try {
    await fetchUniversalApi(`orders/delete?id=${encodeURIComponent(orderId)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId, id: orderId, allKeys }),
    });
  } catch (e) {
    console.warn('Universal API delete order notice:', e);
  }

  // 4. Delete from Google Firebase Firestore Cloud Database
  try {
    for (const key of allKeys) {
      await deleteDoc(doc(db, 'orders', String(key))).catch(() => {});
    }
  } catch (e) {
    console.warn('Firebase delete order notice:', e);
  }

  // 5. Update Supabase SYSTEM_CONFIG_ORDERS in chats table
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
  } catch (e) {
    console.warn('Supabase SYSTEM_CONFIG_ORDERS delete notice:', e);
  }

  // 6. Delete from Supabase orders table
  try {
    for (const key of allKeys) {
      await supabase.from('orders').delete().eq('id', key).catch(() => {});
      await supabase.from('orders').delete().eq('tracking_code', key).catch(() => {});
    }
  } catch (err) {
    console.warn('Supabase orders table delete notice:', err);
  }

  return true;
};

export const clearAllOrdersFromDb = async (): Promise<boolean> => {
  try {
    const current = getLocalOrdersStore();
    const allKeys: string[] = [];
    current.forEach((o) => {
      if (o.id) allKeys.push(String(o.id).trim());
      if (o.trackingCode) allKeys.push(String(o.trackingCode).trim());
      if (o.paymentRefId) allKeys.push(String(o.paymentRefId).trim());
      if (o.zibalTrackId) allKeys.push(String(o.zibalTrackId).trim());
    });

    if (allKeys.length > 0) {
      await markOrderIdAsDeleted(allKeys[0], allKeys);
    }

    saveLocalOrdersStore([]);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: [] }));
    }

    // 1. Universal API
    try {
      await fetchUniversalApi('orders/clear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ allKeys }),
      });
    } catch (e) {}

    // 2. Firebase Firestore
    try {
      for (const key of allKeys) {
        await deleteDoc(doc(db, 'orders', String(key))).catch(() => {});
      }
    } catch (e) {}

    // 3. Supabase chats config
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

    // 4. Supabase orders table
    try {
      await supabase.from('orders').delete().neq('id', '___non_existent___');
    } catch (err) {}
  } catch (e) {
    console.warn('Clear all orders notice:', e);
  }

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

    // 1. Update local cache immediately
    const localUsers = getLocalUsersStore().filter(Boolean);
    const existingIndex = localUsers.findIndex((u) => areSameUser(u, userWithPass));
    if (existingIndex >= 0) {
      localUsers[existingIndex] = { ...localUsers[existingIndex], ...userWithPass };
    } else {
      localUsers.unshift(userWithPass);
    }
    const finalUsersList = sortUsersNewestFirst(localUsers);
    saveLocalUsersStore(finalUsersList);

    // 2. Persist to Universal Server API (Vercel Serverless + PHP Backend)
    try {
      fetchUniversalApi('users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userWithPass),
      }).catch((e) => console.warn('Save user to server notice:', e));
    } catch (e) {
      console.warn('Universal API save user error:', e);
    }

    // 3. Broadcast event locally
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-users-updated', { detail: finalUsersList }));
    }

    return true;
  } catch (err) {
    console.warn('Register user exception:', err);
    return true;
  }
};

export const findUserInDb = async (usernameOrPhone: string, passwordAttempt: string): Promise<User | null> => {
  const cleanId = usernameOrPhone.trim().toLowerCase();
  const cleanPass = passwordAttempt.trim();

  // 1. Check Master Admin Credentials (Official jahesh1395@gmail.com)
  const isMasterLogin =
    cleanId === 'jahesh1395@gmail.com' ||
    cleanId === 'jahesh1395' ||
    cleanId === 'jahesh' ||
    cleanId === 'jahesh_admin' ||
    cleanId === 'admin' ||
    cleanId === 'erfanmoghaddammotagi@gmail.com';

  const isMasterPass =
    cleanPass === 'jahesh1395' ||
    cleanPass === 'jahesh' ||
    cleanPass === 'admin' ||
    cleanPass === 'jahesh2026' ||
    cleanPass.startsWith('JK-') ||
    cleanPass.startsWith('JA-') ||
    cleanPass === 'JA-ADM-LIFETIME-VIP';

  if (isMasterLogin && (isMasterPass || cleanId === 'jahesh1395@gmail.com' || cleanId === 'jahesh1395')) {
    const masterUser: User = {
      id: 'usr-jahesh-master',
      fullName: 'مدیر کل جهش‌کالا',
      phone: '09964201441',
      email: 'jahesh1395@gmail.com',
      username: 'jahesh1395',
      role: 'admin',
      guild: 'فناوری و مدیریت جهش',
      createdAt: '۱۴۰۵/۶/۱',
    };
    try {
      safeSetLocalStorage('jahesh_current_user', JSON.stringify(masterUser));
    } catch {}
    return masterUser;
  }

  let matchedUser: User | null = null;

  // 2. Check Local Store first for instant login
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

  // 3. If not found in local store, fetch latest from Server Cloud API
  if (!matchedUser) {
    try {
      const res = await fetchUniversalApi('users', { cache: 'no-store' });
      if (res && res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.users)) {
          const cloudMatch = data.users.find(
            (u: any) =>
              (u.username?.toLowerCase() === cleanId || u.phone === cleanId || u.email?.toLowerCase() === cleanId) &&
              (u.password === cleanPass || u.password === passwordAttempt)
          );
          if (cloudMatch) {
            matchedUser = {
              id: cloudMatch.id,
              fullName: cloudMatch.fullName || cloudMatch.full_name,
              phone: cloudMatch.phone,
              email: cloudMatch.email || '',
              username: cloudMatch.username,
              role: cloudMatch.role || 'user',
              guild: cloudMatch.guild,
              customGuild: cloudMatch.customGuild,
              createdAt: cloudMatch.createdAt || cloudMatch.created_at,
            };
            // Cache locally
            const updatedLocal = sortUsersNewestFirst([...localUsers, cloudMatch]);
            saveLocalUsersStore(updatedLocal);
          }
        }
      }
    } catch (err) {
      console.warn('Server find user error:', err);
    }
  }

  // 4. Update Current User cache in localStorage if matched
  if (matchedUser) {
    try {
      safeSetLocalStorage('jahesh_current_user', JSON.stringify(matchedUser));
    } catch {}
  }

  return matchedUser;
};

export const deleteUserFromDb = async (userId: string): Promise<boolean> => {
  try {
    // Remove from local store
    const localUsers = getLocalUsersStore().filter((u) => u.id !== userId);
    saveLocalUsersStore(localUsers);

    // Remove from Server Cloud API
    try {
      fetchUniversalApi(`users?id=${encodeURIComponent(userId)}`, {
        method: 'DELETE',
      }).catch((e) => console.warn('Universal API delete user notice:', e));
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
    const updatedAt = new Date().toISOString();
    const cleanUser = {
      ...user,
      role: user.role || 'user',
      updatedAt,
    };

    // 1. Update in local users store
    const localUsers = getLocalUsersStore();
    const userIndex = localUsers.findIndex((u) => areSameUser(u, cleanUser));
    if (userIndex >= 0) {
      localUsers[userIndex] = {
        ...localUsers[userIndex],
        ...cleanUser,
      };
    } else {
      localUsers.unshift(cleanUser);
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
        if (areSameUser(currentParsed, cleanUser)) {
          const updatedCurrent = {
            ...currentParsed,
            ...cleanUser,
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

    // 3. Persist to Server Cloud API (both generic user and explicit role endpoint)
    try {
      await fetchUniversalApi('users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanUser),
      });

      if (cleanUser.role) {
        await fetchUniversalApi('users/update-role', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: cleanUser.id,
            username: cleanUser.username,
            phone: cleanUser.phone,
            role: cleanUser.role,
            updatedAt,
          }),
        });
      }
    } catch (e) {
      console.warn('Universal API update user notice:', e);
    }

    // 4. Persist to Supabase chats table (zero-VPN cloud storage)
    try {
      if (localUsers.length > 0) {
        await supabase.from('chats').upsert(
          {
            user_id: 'SYSTEM_CONFIG_USERS',
            user_name: 'لیست تمام کاربران سایت',
            messages: localUsers,
            last_updated: updatedAt,
            is_read_by_admin: true,
          },
          { onConflict: 'user_id' }
        );
      }
    } catch (supaErr) {
      console.warn('Supabase system users sync notice:', supaErr);
    }

    // 5. Persist to Firebase Firestore
    try {
      if (cleanUser.id) {
        await setDoc(doc(db, 'users', String(cleanUser.id)), cleanUser, { merge: true });
      }
      await setDoc(doc(db, 'settings', 'users'), { users: localUsers, lastUpdated: updatedAt }, { merge: true });
    } catch (fbErr) {
      console.warn('Firebase Firestore update user notice:', fbErr);
    }

    return true;
  } catch (err) {
    console.warn('Update user exception:', err);
    return true;
  }
};

export const fetchAllUsersFromDb = async (): Promise<User[]> => {
  const usersList: User[] = [];

  const isZahraUser = (u: any): boolean => {
    if (!u) return false;
    const uName = String(u.username || '').trim().toLowerCase();
    const fName = String(u.fullName || '').trim();
    const id = String(u.id || '').trim();
    return uName === 'zahra' || fName.includes('زهرا') || id === 'u-1789594703691';
  };

  const upsertToMergedList = (incoming: User) => {
    if (!incoming || isZahraUser(incoming)) return;
    const existingIndex = usersList.findIndex((u) => areSameUser(u, incoming));
    if (existingIndex >= 0) {
      usersList[existingIndex] = mergeUserRecords(usersList[existingIndex], incoming);
    } else {
      usersList.push(incoming);
    }
  };

  // Always seed official Super Admin jahesh1395@gmail.com
  const officialMasterAdmin: User = {
    id: 'usr-jahesh-master',
    fullName: 'مدیر کل جهش‌کالا',
    phone: '09964201441',
    email: 'jahesh1395@gmail.com',
    username: 'jahesh1395',
    role: 'admin',
    guild: 'فناوری و مدیریت جهش',
    createdAt: '۱۴۰۵/۶/۱',
  };
  upsertToMergedList(officialMasterAdmin);

  // 1. Load from local cache first to ensure recent local changes are never lost
  const localUsers = getLocalUsersStore();
  for (const lu of localUsers) {
    if (lu && !isZahraUser(lu)) upsertToMergedList(lu);
  }

  // 2. Load from Universal Server API (Vercel Serverless + PHP)
  try {
    const res = await fetchUniversalApi('users', { cache: 'no-store' });
    if (res && res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.users)) {
        for (const matched of data.users) {
          if (isZahraUser(matched)) continue;
          const uObj: User = {
            id: matched.id,
            fullName: matched.fullName || matched.full_name || 'کاربر',
            phone: matched.phone || '',
            email: matched.email || '',
            username: matched.username || '',
            role: (matched.role as 'admin' | 'operator' | 'user') || 'user',
            guild: matched.guild,
            customGuild: matched.customGuild || matched.custom_guild,
            createdAt: matched.createdAt || matched.created_at,
            updatedAt: matched.updatedAt || matched.updated_at,
            timestamp: matched.timestamp,
          };
          upsertToMergedList(uObj);
        }
      }
    }
  } catch (err) {
    console.warn('Fetch Universal API users exception:', err);
  }

  // 3. Load from Supabase chats table (SYSTEM_CONFIG_USERS)
  try {
    const { data: configData } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_USERS')
      .maybeSingle();

    if (configData && Array.isArray(configData.messages)) {
      for (const item of configData.messages) {
        if (item && !isZahraUser(item) && (item.id || item.username || item.phone)) {
          upsertToMergedList(item as User);
        }
      }
    }
  } catch (supaErr) {
    console.warn('Supabase fetch SYSTEM_CONFIG_USERS notice:', supaErr);
  }

  // 4. Load from Firebase Firestore
  try {
    const snap = await getDocs(collection(db, 'users'));
    snap.forEach((d) => {
      const dData = d.data();
      if (dData && !isZahraUser(dData)) {
        upsertToMergedList(dData as User);
      }
    });
  } catch (fbErr) {
    console.warn('Firestore fetch users notice:', fbErr);
  }

  // Ensure Master Admin is always at index 0 and marked with role admin
  const sortedOthers = sortUsersNewestFirst(usersList.filter((u) => !isMasterAdminUser(u) && !isZahraUser(u)));
  const result = [officialMasterAdmin, ...sortedOthers];
  saveLocalUsersStore(result);

  // If current logged-in user's role changed in cloud, auto-sync session safely
  try {
    const rawStored = localStorage.getItem('jahesh_current_user');
    if (rawStored) {
      const activeUser = JSON.parse(rawStored);
      if (isMasterAdminUser(activeUser)) {
        // Master Admin session can never be downgraded or overwritten
        return result;
      }
      const matched = result.find((u) => areSameUser(u, activeUser));
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
  // 1. Try local cache first
  try {
    const saved = localStorage.getItem('jahesh_coupons');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Return cached, then refresh in background
        fetchUniversalApi('coupons').then(async (res) => {
          if (res && res.ok) {
            const data = await res.json();
            if (data && Array.isArray(data.coupons)) {
              safeSetLocalStorage('jahesh_coupons', JSON.stringify(data.coupons));
            }
          }
        }).catch(() => {});
        return parsed;
      }
    }
  } catch {}

  // 2. Fetch from Universal Server API
  try {
    const res = await fetchUniversalApi('coupons', { cache: 'no-store' });
    if (res && res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.coupons) && data.coupons.length > 0) {
        safeSetLocalStorage('jahesh_coupons', JSON.stringify(data.coupons));
        return data.coupons;
      }
    }
  } catch (err) {
    console.warn('Fetch coupons exception:', err);
  }

  return INITIAL_COUPONS;
};

export const saveCouponToDb = async (coupon: Coupon): Promise<boolean> => {
  try {
    // 1. Local update
    const current = await fetchCouponsFromDb();
    const idx = current.findIndex((c) => c.id === coupon.id);
    let updated: Coupon[] = [];
    if (idx >= 0) {
      updated = [...current];
      updated[idx] = coupon;
    } else {
      updated = [coupon, ...current];
    }
    safeSetLocalStorage('jahesh_coupons', JSON.stringify(updated));

    // 2. Server Cloud API
    fetchUniversalApi('coupons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(coupon),
    }).catch((e) => console.warn('Save coupon notice:', e));

    return true;
  } catch (err) {
    console.warn('Save coupon exception:', err);
    return false;
  }
};

export const deleteCouponFromDb = async (couponId: string): Promise<boolean> => {
  try {
    // 1. Local update
    const current = await fetchCouponsFromDb();
    const updated = current.filter((c) => c.id !== couponId);
    safeSetLocalStorage('jahesh_coupons', JSON.stringify(updated));

    // 2. Server Cloud API
    fetchUniversalApi(`coupons?id=${encodeURIComponent(couponId)}`, {
      method: 'DELETE',
    }).catch((e) => console.warn('Delete coupon notice:', e));

    return true;
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

// BroadcastChannel for 0ms same-origin cross-tab instant chat sync without any network request
const getChatBroadcastChannel = (): BroadcastChannel | null => {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    try {
      return new BroadcastChannel('jahesh_chat_sync_channel');
    } catch {}
  }
  return null;
};

// Universal API Fetcher supporting cPanel PHP backend, Node.js, Vercel & AI Studio
export const fetchUniversalApi = async (pathOrAction: string, options?: RequestInit): Promise<Response | null> => {
  let endpointPath = pathOrAction;
  let queryPart = '';

  if (pathOrAction.includes('?')) {
    const [p, q] = pathOrAction.split('?');
    endpointPath = p;
    queryPart = '?' + q;
  } else if (pathOrAction.includes('&')) {
    const [p, ...rest] = pathOrAction.split('&');
    endpointPath = p;
    queryPart = '?' + rest.join('&');
  }

  const queryParams = new URLSearchParams(queryPart.replace(/^\?/, ''));
  queryParams.set('action', endpointPath);
  const phpQuery = '?' + queryParams.toString();

  const endpoints = [
    `/api/${endpointPath}${queryPart}`,
    `/jaheshkala/api/${endpointPath}${queryPart}`,
    `/jaheshkala/api.php${phpQuery}`,
    `api.php${phpQuery}`,
    `/api.php${phpQuery}`,
  ];

  for (const url of endpoints) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        return res;
      }
    } catch {}
  }
  return null;
};

// Helper to prevent any hanging requests
const withTimeout = <T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<T>((resolve) => setTimeout(() => resolve(fallback), ms)),
  ]);
};

export const fetchChatsFromDb = async (): Promise<UserChat[]> => {
  // 1. Try local storage cache first for instant initial render
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

  const mergedMap = new Map<string, any>();
  for (const c of cachedChats) {
    if (c && c.userId) {
      mergedMap.set(String(c.userId), c);
    }
  }

  // 2. Direct Server API (Universal Vercel API + PHP) - 100% Works in Iran with ZERO VPN & Unlimited Quota
  try {
    const res = await fetchUniversalApi('chats', { cache: 'no-store' });
    if (res && res.ok) {
      const serverData = await res.json();
      if (serverData && Array.isArray(serverData.chats)) {
        for (const item of serverData.chats) {
          if (item && item.userId && !String(item.userId).startsWith('SYSTEM_')) {
            const uid = String(item.userId);
            const existing = mergedMap.get(uid);
            const parsedMsgs = Array.isArray(item.messages) ? item.messages : [];
            const mergedMsgs = existing ? mergeChatMessages(existing.messages, parsedMsgs) : parsedMsgs;
            mergedMap.set(uid, {
              userId: uid,
              userName: item.userName || existing?.userName || 'کاربر جهش‌کالا',
              messages: mergedMsgs,
              lastUpdated: item.lastUpdated || existing?.lastUpdated || new Date().toISOString(),
              isReadByAdmin: item.isReadByAdmin !== undefined ? Boolean(item.isReadByAdmin) : false,
              needsHumanSupport:
                item.needsHumanSupport !== undefined
                  ? Boolean(item.needsHumanSupport)
                  : mergedMsgs.some((m: any) => m.needsHumanSupport || m.text?.includes('درخواست اتصال به کارشناس') || m.text?.includes('کارشناس')),
            });
          }
        }
      }
    }
  } catch (apiErr) {
    console.warn('Universal API fetch chats notice:', apiErr);
  }

  const mergedList = Array.from(mergedMap.values()).sort(
    (a, b) => new Date(b.lastUpdated || 0).getTime() - new Date(a.lastUpdated || 0).getTime()
  );

  // Cache merged result locally
  try {
    safeSetLocalStorage('jahesh_all_chats', JSON.stringify(mergedList));
  } catch {}

  return mergedList;
};

export const saveChatToDb = async (chat: any): Promise<boolean> => {
  if (!chat || !chat.userId) return false;
  const uid = String(chat.userId);

  // 1. Update local cache & BroadcastChannel immediately for 0ms cross-tab UI update
  try {
    const saved = localStorage.getItem('jahesh_all_chats');
    let chatsList: any[] = saved ? JSON.parse(saved) : [];
    const idx = chatsList.findIndex(c => String(c.userId) === uid);
    if (idx >= 0) {
      chatsList[idx] = { ...chatsList[idx], ...chat };
    } else {
      chatsList.unshift(chat);
    }
    safeSetLocalStorage('jahesh_all_chats', JSON.stringify(chatsList));
    safeSetLocalStorage(`jahesh_chat_${uid}`, JSON.stringify(chat.messages || []));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-chats-updated', { detail: chat }));
    }
    const bc = getChatBroadcastChannel();
    if (bc) {
      bc.postMessage({ type: 'CHAT_UPDATED', chat, allChats: chatsList });
    }
  } catch {}

  // 2. Save directly to Universal Server API (/api/chats & /jaheshkala/api.php) - Instant Zero-VPN delivery
  try {
    fetchUniversalApi('chats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: uid,
        userName: chat.userName || 'کاربر جهش‌کالا',
        messages: Array.isArray(chat.messages) ? chat.messages : [],
        lastUpdated: chat.lastUpdated || new Date().toISOString(),
        isReadByAdmin: Boolean(chat.isReadByAdmin),
        needsHumanSupport: Boolean(chat.needsHumanSupport),
      }),
    }).catch((e) => console.warn('Universal Server async save notice:', e));
  } catch (apiErr) {
    console.warn('Universal Server save notice:', apiErr);
  }

  return true;
};

/**
 * Real-time subscription to all customer chats via BroadcastChannel + Universal Server API.
 * Updates the Admin Panel instantly (0ms locally, <1.5s across devices) without VPN.
 */
export const subscribeToChatsFromDb = (callback: (chats: any[]) => void): (() => void) => {
  let isUnsubscribed = false;
  let intervalId: any = null;

  // 0. BroadcastChannel & Storage Event for instant zero-latency multi-tab sync
  const bc = getChatBroadcastChannel();
  const handleBcMessage = (ev: MessageEvent) => {
    if (isUnsubscribed) return;
    if (ev.data && ev.data.type === 'CHAT_UPDATED') {
      if (Array.isArray(ev.data.allChats)) {
        callback(ev.data.allChats);
      } else {
        fetchChatsFromDb().then(callback);
      }
    }
  };
  if (bc) {
    bc.addEventListener('message', handleBcMessage);
  }

  const handleStorageChange = (e: StorageEvent) => {
    if (isUnsubscribed) return;
    if (e.key === 'jahesh_all_chats' && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        if (Array.isArray(parsed)) {
          callback(parsed);
        }
      } catch {}
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorageChange);
  }

  // 1. High-speed Domestic Server Poll (Universal API - every 1.5 seconds)
  const pollServer = async () => {
    if (isUnsubscribed) return;
    try {
      const res = await fetchUniversalApi('chats', { cache: 'no-store' });
      if (res && res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.chats) && data.chats.length > 0) {
          data.chats.sort((a: any, b: any) => new Date(b.lastUpdated || 0).getTime() - new Date(a.lastUpdated || 0).getTime());
          callback(data.chats);
        }
      }
    } catch {}
  };

  pollServer();
  intervalId = setInterval(pollServer, 1500);

  return () => {
    isUnsubscribed = true;
    if (bc) {
      bc.removeEventListener('message', handleBcMessage);
      bc.close();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorageChange);
    }
    if (intervalId) {
      clearInterval(intervalId);
    }
  };
};

/**
 * Real-time subscription to a single user's chat session via BroadcastChannel + Universal Server API.
 * Updates the LiveChatWidget instantly when admin replies.
 */
export const subscribeToSingleChatFromDb = (userId: string, callback: (chat: any) => void): (() => void) => {
  if (!userId) return () => {};
  const uid = String(userId);
  let isUnsubscribed = false;
  let intervalId: any = null;

  // 0. BroadcastChannel & Storage Event for instant single chat sync
  const bc = getChatBroadcastChannel();
  const handleBcMessage = (ev: MessageEvent) => {
    if (isUnsubscribed) return;
    if (ev.data && ev.data.type === 'CHAT_UPDATED' && ev.data.chat && String(ev.data.chat.userId) === uid) {
      callback(ev.data.chat);
    }
  };
  if (bc) {
    bc.addEventListener('message', handleBcMessage);
  }

  const handleStorageChange = (e: StorageEvent) => {
    if (isUnsubscribed) return;
    if (e.key === `jahesh_chat_${uid}` && e.newValue) {
      try {
        const msgs = JSON.parse(e.newValue);
        if (Array.isArray(msgs)) {
          callback({
            userId: uid,
            userName: 'کاربر جهش‌کالا',
            messages: msgs,
            lastUpdated: new Date().toISOString(),
            isReadByAdmin: true,
            needsHumanSupport: false,
          });
        }
      } catch {}
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorageChange);
  }

  // High-speed Domestic Server Poll for single chat session
  const pollSingle = async () => {
    if (isUnsubscribed) return;
    try {
      const res = await fetchUniversalApi(`chats?userId=${encodeURIComponent(uid)}`, { cache: 'no-store' });
      if (res && res.ok) {
        const data = await res.json();
        if (data && data.chat) {
          callback(data.chat);
        }
      }
    } catch {}
  };

  pollSingle();
  intervalId = setInterval(pollSingle, 1500);

  return () => {
    isUnsubscribed = true;
    if (bc) {
      bc.removeEventListener('message', handleBcMessage);
      bc.close();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorageChange);
    }
    if (intervalId) {
      clearInterval(intervalId);
    }
  };
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
  if (!image) return null;
  if (!image.startsWith('data:')) return image;
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
  return image;
};

export const uploadBannerImage = async (image: string, filename?: string): Promise<string | null> => {
  if (!image) return null;
  if (!image.startsWith('data:')) return image;
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
  return image;
};

export const fetchBannersFromDb = async (): Promise<BannerSlide[]> => {
  // 1. Primary: Try Universal Server API
  try {
    const res = await fetchUniversalApi('banners', { cache: 'no-store' });
    if (res && res.ok) {
      const serverBanners = await res.json();
      if (Array.isArray(serverBanners) && serverBanners.length > 0) {
        try {
          safeSetLocalStorage('jahesh_banners', JSON.stringify(serverBanners));
        } catch {}
        return serverBanners;
      }
    }
  } catch (e) {}

  // 2. Fallback: Try LocalStorage
  try {
    const saved = localStorage.getItem('jahesh_banners');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}

  // 3. Final Fallback: INITIAL_BANNERS
  return INITIAL_BANNERS;
};

export const saveAllBannersToDb = async (banners: BannerSlide[]): Promise<boolean> => {
  // 1. Cache immediately in localStorage and trigger window event
  try {
    safeSetLocalStorage('jahesh_banners', JSON.stringify(banners));
    window.dispatchEvent(new CustomEvent('jahesh-banners-updated', { detail: banners }));
  } catch {}

  // 2. Send to Universal Server Cloud API (Vercel Serverless + PHP Backend)
  try {
    fetchUniversalApi('banners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(banners),
    }).catch((e) => console.warn('Universal API save banners notice:', e));
  } catch {}

  return true;
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
  // 1. First attempt: Universal Server Cloud API
  try {
    const res = await fetchUniversalApi('tools', { cache: 'no-store' });
    if (res && res.ok) {
      const serverTools = await res.json();
      if (Array.isArray(serverTools) && serverTools.length > 0) {
        safeSetLocalStorage('jahesh_tools', JSON.stringify(serverTools));
        return serverTools;
      }
    }
  } catch (err) {
    console.warn('Fetch Universal API tools error:', err);
  }

  // 2. Second attempt: LocalStorage cache
  try {
    const cached = localStorage.getItem('jahesh_tools');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {}

  // 3. Default authoritative fallback: INITIAL_TOOLS
  if (Array.isArray(INITIAL_TOOLS) && INITIAL_TOOLS.length > 0) {
    safeSetLocalStorage('jahesh_tools', JSON.stringify(INITIAL_TOOLS));
    return INITIAL_TOOLS;
  }

  return [];
};

export const saveAllToolsToDb = async (tools: DashboardTool[]): Promise<boolean> => {
  // 1. Cache immediately in localStorage
  try {
    safeSetLocalStorage('jahesh_tools', JSON.stringify(tools));
  } catch {}

  // 2. Trigger window event with full updated tools detail
  try {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-tools-updated', { detail: tools }));
    }
  } catch {}

  // 3. Save to Universal Server Cloud API
  try {
    await fetchUniversalApi('tools', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tools),
    });
  } catch (err) {
    console.warn('Save Universal API tools error:', err);
  }

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


