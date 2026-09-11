import { supabase } from './supabase';
import { Product, Order, User, Coupon, BannerSlide } from '../types';
import { INITIAL_PRODUCTS, INITIAL_BANNERS } from '../data/initialData';

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

  // 1. Layer 1: Authoritative Server Disk Storage (/api/products)
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

  // 2. Layer 2: Primary Cloud Check - Supabase SYSTEM_CONFIG_PRODUCTS in chats table
  if (!authoritativeList || authoritativeList.length === 0) {
    try {
      const { data: configData, error: configError } = await supabase
        .from('chats')
        .select('messages')
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
  }

  // 3. Fallback: If nothing exists yet, use INITIAL_PRODUCTS
  const finalProducts = (authoritativeList && authoritativeList.length > 0)
    ? authoritativeList
    : INITIAL_PRODUCTS.map(cleanProductItem).filter((p): p is Product => p !== null);

  // Synchronize localStorage with clean authoritative data (clears any old corrupted/dummy products)
  try {
    localStorage.setItem('jahesh_products', JSON.stringify(finalProducts));
  } catch {}

  return finalProducts;
};

export const saveAllProductsToDb = async (products: Product[]): Promise<boolean> => {
  const stampedProducts = products.map((p) => ({
    ...p,
    updatedAt: p.updatedAt || new Date().toISOString(),
  }));

  // 1. Immediately cache locally & dispatch update event
  try {
    localStorage.setItem('jahesh_products', JSON.stringify(stampedProducts));
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
      localStorage.setItem('jahesh_products', JSON.stringify(currentList));
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
      localStorage.setItem('jahesh_products', JSON.stringify(updated));
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
    localStorage.setItem(LOCAL_ORDERS_KEY, JSON.stringify(orders));
    localStorage.setItem('jahesh_orders', JSON.stringify(orders));
  } catch (e) {
    console.warn('Error saving local orders store:', e);
  }
};

export const fetchOrdersFromDb = async (): Promise<Order[]> => {
  const localOrders = getLocalOrdersStore();
  try {
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    if (error) {
      console.warn('Supabase fetch orders notice (using local store):', error.message);
      return localOrders;
    }
    if (data) {
      const cloudOrders: Order[] = data.map((item) => {
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
          acceptedTerms: true,
        };
      });

      // Synchronize local cache to include cloud DB plus any unsynced local orders
      const cloudIds = new Set(cloudOrders.map((o) => o.id));
      const localUnsynced = localOrders.filter((o) => !cloudIds.has(o.id));
      const mergedOrders = [...cloudOrders, ...localUnsynced];
      saveLocalOrdersStore(mergedOrders);
      return mergedOrders;
    }
    return localOrders;
  } catch (err) {
    console.warn('Failed to connect to Supabase orders table:', err);
    return localOrders;
  }
};

export const saveOrderToDb = async (order: Order): Promise<boolean> => {
  // 1. Immediately save to local persistent store & broadcast
  try {
    const currentLocal = getLocalOrdersStore();
    const existingIndex = currentLocal.findIndex(
      (o) => o.id === order.id || (o.trackingCode && order.trackingCode && o.trackingCode === order.trackingCode)
    );
    let updatedList: Order[];
    if (existingIndex >= 0) {
      updatedList = [...currentLocal];
      updatedList[existingIndex] = { ...currentLocal[existingIndex], ...order };
    } else {
      updatedList = [order, ...currentLocal];
    }
    saveLocalOrdersStore(updatedList);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: updatedList }));
    }
  } catch (localErr) {
    console.warn('Local save order warning:', localErr);
  }

  // 2. Persist to Supabase cloud
  try {
    const payload = {
      id: order.id,
      tracking_code: order.trackingCode,
      payment_ref_id: order.paymentRefId,
      user_id: order.userId,
      customer_name: order.customerName,
      customer_phone: order.customerPhone,
      customer_email: order.customerEmail,
      requested_domain: order.requestedDomain,
      client_notes: order.clientNotes,
      total_amount: order.totalAmount,
      discount_amount: order.discountAmount || 0,
      applied_coupon_code: order.appliedCouponCode || '',
      status: order.status,
      items: order.items,
      date: order.date,
      payment_gateway: order.paymentGateway,
    };
    
    // First attempt with JSON string / array
    const { error } = await supabase.from('orders').upsert(payload);
    if (error) {
      console.warn('Supabase save order attempt 1 notice:', error.message);
      // Fallback: try with stringified items if schema requires text
      const stringifiedPayload = { ...payload, items: JSON.stringify(order.items) };
      const retryRes = await supabase.from('orders').upsert(stringifiedPayload);
      if (retryRes.error) {
        console.warn('Supabase save order attempt 2 notice:', retryRes.error.message);
      }
    }
    return true;
  } catch (err) {
    console.warn('Save order exception (order safely preserved locally):', err);
    return true;
  }
};

export const updateOrderStatusInDb = async (orderId: string, status: string): Promise<boolean> => {
  try {
    const current = getLocalOrdersStore();
    const updated = current.map((o) => (o.id === orderId ? { ...o, status: status as any } : o));
    saveLocalOrdersStore(updated);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: updated }));
    }
  } catch (e) {}

  try {
    const { error } = await supabase.from('orders').update({ status }).eq('id', orderId);
    return !error;
  } catch (err) {
    console.warn('Update order status exception:', err);
    return true;
  }
};

export const deleteOrderFromDb = async (orderId: string): Promise<boolean> => {
  try {
    const current = getLocalOrdersStore();
    const updated = current.filter((o) => o.id !== orderId && o.trackingCode !== orderId);
    saveLocalOrdersStore(updated);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: updated }));
    }
  } catch (e) {}

  try {
    const { error } = await supabase.from('orders').delete().eq('id', orderId);
    return !error;
  } catch (err) {
    console.warn('Delete order exception:', err);
    return true;
  }
};

export const clearAllOrdersFromDb = async (): Promise<boolean> => {
  try {
    saveLocalOrdersStore([]);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: [] }));
    }
  } catch (e) {}

  try {
    const { error } = await supabase.from('orders').delete().neq('id', '___non_existent___');
    return !error;
  } catch (err) {
    console.warn('Clear orders exception:', err);
    return true;
  }
};

// 3. USERS DB SERVICE WITH HYBRID LOCAL & CLOUD SYNC
const LOCAL_USERS_KEY = 'jahesh_users_store';

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
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  } catch (err) {
    console.warn('Could not save users to local store:', err);
  }
};

export const registerUserInDb = async (user: User, passwordHash: string): Promise<boolean> => {
  try {
    // 1. Save to local persistent cache
    const existingUsers = getLocalUsersStore();
    const userIndex = existingUsers.findIndex(
      (u) => u.id === user.id || (user.username && u.username === user.username) || (user.phone && u.phone === user.phone)
    );
    const userWithPass = { ...user, password: passwordHash };
    if (userIndex >= 0) {
      existingUsers[userIndex] = userWithPass;
    } else {
      existingUsers.unshift(userWithPass);
    }
    saveLocalUsersStore(existingUsers);

    // 2. Persist to Supabase
    const payload = {
      id: user.id,
      full_name: user.fullName,
      phone: user.phone,
      email: user.email || '',
      username: user.username,
      password: passwordHash,
      role: user.role || 'user',
      created_at: user.createdAt || new Date().toISOString(),
    };
    const { error } = await supabase.from('users').upsert(payload, { onConflict: 'id' });
    if (error) {
      console.warn('Supabase register user warning:', error.message);
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
  let userPassword = '';

  // 2. Try Supabase first
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
          role: (dbMatch.role as 'admin' | 'user') || 'user',
          createdAt: dbMatch.created_at,
        };
        userPassword = dbMatch.password;
      }
    }
  } catch (err) {
    console.warn('Supabase find user warning:', err);
  }

  // 3. Check Local Store
  const localUsers = getLocalUsersStore();
  const localMatch = localUsers.find(
    (u) =>
      (u.username?.toLowerCase() === cleanId || u.phone === cleanId || u.email?.toLowerCase() === cleanId) &&
      (u.password === cleanPass || u.password === passwordAttempt)
  );

  if (localMatch) {
    // If local match exists, its role might be freshly updated by Admin
    if (!matchedUser) {
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
    } else {
      // Merge: if local role has admin, prefer it
      if (localMatch.role === 'admin') {
        matchedUser.role = 'admin';
      }
      matchedUser.guild = localMatch.guild || matchedUser.guild;
      matchedUser.customGuild = localMatch.customGuild || matchedUser.customGuild;
    }
  }

  // 4. Update Current User cache in localStorage if matched
  if (matchedUser) {
    try {
      localStorage.setItem('jahesh_current_user', JSON.stringify(matchedUser));
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
    const { error } = await supabase.from('users').delete().eq('id', userId);
    return !error;
  } catch (err) {
    console.warn('Delete user exception:', err);
    return false;
  }
};

export const updateUserInDb = async (user: User): Promise<boolean> => {
  try {
    // 1. Update in local users store
    const localUsers = getLocalUsersStore();
    const userIndex = localUsers.findIndex((u) => u.id === user.id || u.username === user.username || u.phone === user.phone);
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

    // 2. If this user is currently logged in on the browser, update current session immediately
    try {
      const rawCurrent = localStorage.getItem('jahesh_current_user');
      if (rawCurrent) {
        const currentParsed: User = JSON.parse(rawCurrent);
        if (currentParsed.id === user.id || currentParsed.username === user.username || currentParsed.phone === user.phone) {
          const updatedCurrent = {
            ...currentParsed,
            ...user,
            role: user.role,
          };
          localStorage.setItem('jahesh_current_user', JSON.stringify(updatedCurrent));
          window.dispatchEvent(new CustomEvent('jahesh-user-updated', { detail: updatedCurrent }));
        }
      }
    } catch (err) {
      console.warn('Error updating current user session:', err);
    }

    // 3. Update in Supabase with multi-key fallback and upsert
    const payload = {
      full_name: user.fullName,
      phone: user.phone || '',
      email: user.email || '',
      username: user.username,
      role: user.role,
    };

    let hasUpdated = false;
    if (user.id) {
      const { error: idErr, data: idData } = await supabase
        .from('users')
        .update(payload)
        .eq('id', user.id)
        .select();
      if (!idErr && idData && idData.length > 0) hasUpdated = true;
    }

    if (!hasUpdated && user.username) {
      const { error: userErr, data: userData } = await supabase
        .from('users')
        .update(payload)
        .eq('username', user.username)
        .select();
      if (!userErr && userData && userData.length > 0) hasUpdated = true;
    }

    if (!hasUpdated && user.phone) {
      const { error: phoneErr, data: phoneData } = await supabase
        .from('users')
        .update(payload)
        .eq('phone', user.phone)
        .select();
      if (!phoneErr && phoneData && phoneData.length > 0) hasUpdated = true;
    }

    // If row did not exist or wasn't updated yet in Supabase, create it with upsert!
    if (!hasUpdated) {
      await supabase.from('users').upsert(
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
      );
    }

    return true;
  } catch (err) {
    console.warn('Update user exception:', err);
    return true; // Local store was updated
  }
};

export const fetchAllUsersFromDb = async (): Promise<User[]> => {
  const usersMap = new Map<string, User>();

  // 1. Load from local cache first
  const localUsers = getLocalUsersStore();
  for (const lu of localUsers) {
    usersMap.set(lu.id || lu.username || lu.phone, {
      id: lu.id,
      fullName: lu.fullName,
      phone: lu.phone,
      email: lu.email || '',
      username: lu.username,
      role: lu.role || 'user',
      createdAt: lu.createdAt,
    });
  }

  // 2. Load from Supabase and merge
  try {
    const { data, error } = await supabase.from('users').select('*').order('created_at', { ascending: false });
    if (!error && data && Array.isArray(data)) {
      for (const matched of data) {
        const key = matched.id || matched.username || matched.phone;
        const existingLocal = usersMap.get(key);
        // If local had a newer role change, merge properly
        usersMap.set(key, {
          id: matched.id,
          fullName: matched.full_name || existingLocal?.fullName || 'کاربر',
          phone: matched.phone || existingLocal?.phone || '',
          email: matched.email || existingLocal?.email || '',
          username: matched.username || existingLocal?.username || '',
          role: existingLocal?.role === 'admin' ? 'admin' : ((matched.role as 'admin' | 'user') || 'user'),
          createdAt: matched.created_at || existingLocal?.createdAt,
        });
      }
    }
  } catch (err) {
    console.warn('Fetch all users exception:', err);
  }

  return Array.from(usersMap.values());
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
        localStorage.setItem('jahesh_all_chats', JSON.stringify(mergedList));
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
    localStorage.setItem('jahesh_all_chats', JSON.stringify(chatsList));
    localStorage.setItem(`jahesh_chat_${chat.userId}`, JSON.stringify(chat.messages));
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
        localStorage.setItem('jahesh_banners', JSON.stringify(banners));
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
          localStorage.setItem('jahesh_banners', JSON.stringify(serverBanners));
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
    localStorage.setItem('jahesh_banners', JSON.stringify(banners));
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

