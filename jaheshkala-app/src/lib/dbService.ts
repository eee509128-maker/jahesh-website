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

// 1. PRODUCTS DB SERVICE
export const fetchProductsFromDb = async (): Promise<Product[]> => {
  // 1. Primary Cloud Check: Fetch from Supabase SYSTEM_CONFIG_PRODUCTS (Always accessible, zero RLS schema friction)
  try {
    const { data: configData, error: configError } = await supabase
      .from('chats')
      .select('messages')
      .eq('user_id', 'SYSTEM_CONFIG_PRODUCTS')
      .maybeSingle();

    if (!configError && configData && Array.isArray(configData.messages) && configData.messages.length > 0) {
      const cloudProducts: Product[] = configData.messages;
      try {
        localStorage.setItem('jahesh_products', JSON.stringify(cloudProducts));
      } catch {}
      return cloudProducts;
    }
  } catch (e) {
    console.warn('Check SYSTEM_CONFIG_PRODUCTS notice:', e);
  }

  // 2. Secondary Cloud Check: Relational `products` table in Supabase
  try {
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (!error && data && data.length > 0) {
      const fetched: Product[] = data.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        brand: item.brand || '',
        price: Number(item.price),
        originalPrice: item.original_price ? Number(item.original_price) : undefined,
        discountPercent: item.discount_percent || 0,
        badge: item.badge || '',
        isPopular: !!item.is_popular,
        isGolden: !!item.is_golden,
        rating: item.rating ? Number(item.rating) : 5.0,
        reviewsCount: item.reviews_count || 0,
        deliveryDays: item.delivery_days || '',
        warranty: item.warranty || '',
        shortDescription: item.short_description || '',
        fullDescription: item.full_description || '',
        features: Array.isArray(item.features)
          ? item.features
          : (typeof item.features === 'string' ? item.features.split('\n').filter(Boolean) : []),
        image: item.image || '',
        gallery: Array.isArray(item.gallery) ? item.gallery : [],
        couponCode: item.coupon_code || undefined,
        couponDiscountPercent: item.coupon_discount_percent ? Number(item.coupon_discount_percent) : undefined,
        isIncredible: item.is_incredible !== undefined ? !!item.is_incredible : (item.isIncredible !== undefined ? !!item.isIncredible : false),
        incredibleExpiresAt: item.incredible_expires_at || item.incredibleExpiresAt || undefined,
        incredibleTimerDuration: item.incredible_timer_duration || item.incredibleTimerDuration || undefined,
      }));

      // Cache locally and synchronize to cloud config store
      try {
        localStorage.setItem('jahesh_products', JSON.stringify(fetched));
        saveAllProductsToDb(fetched).catch(() => {});
      } catch {}

      return fetched;
    }
  } catch (err) {
    console.warn('Failed to connect to Supabase products table:', err);
  }

  // 3. Fallback: LocalStorage cache
  try {
    const saved = localStorage.getItem('jahesh_products');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}

  // 4. Initial Seed
  INITIAL_PRODUCTS.forEach((p) => {
    saveProductToDb(p).catch(() => {});
  });
  return INITIAL_PRODUCTS;
};

export const saveAllProductsToDb = async (products: Product[]): Promise<boolean> => {
  // 1. Immediately cache locally & dispatch update event
  try {
    localStorage.setItem('jahesh_products', JSON.stringify(products));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-products-updated', { detail: products }));
    }
  } catch {}

  // 2. Primary: Save to Supabase SYSTEM_CONFIG_PRODUCTS (instant global sync across all devices)
  try {
    await supabase.from('chats').upsert(
      {
        user_id: 'SYSTEM_CONFIG_PRODUCTS',
        user_name: 'تنظیمات محصولات فروشگاه',
        messages: products,
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
    // 1. Load current list from local cache / store
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

    // 2. Update local storage & broadcast event immediately
    try {
      localStorage.setItem('jahesh_products', JSON.stringify(currentList));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('jahesh-products-updated', { detail: currentList }));
      }
    } catch {}

    // 3. Primary: Save full updated products list to Supabase cloud JSON store (bulletproof across all browsers & mobiles)
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

    // 4. Secondary: Upsert to relational products table
    try {
      const payloadWithGallery: Record<string, any> = {
        id: product.id,
        title: product.title,
        category: product.category,
        brand: product.brand,
        price: product.price,
        original_price: product.originalPrice,
        discount_percent: product.discountPercent,
        badge: product.badge,
        is_popular: product.isPopular,
        is_golden: product.isGolden,
        rating: product.rating,
        reviews_count: product.reviewsCount,
        delivery_days: product.deliveryDays,
        warranty: product.warranty,
        short_description: product.shortDescription,
        full_description: product.fullDescription,
        features: product.features,
        image: product.image,
        gallery: product.gallery || [],
        coupon_code: product.couponCode,
        coupon_discount_percent: product.couponDiscountPercent,
        is_incredible: product.isIncredible,
        incredible_expires_at: product.incredibleExpiresAt,
        incredible_timer_duration: product.incredibleTimerDuration,
      };

      const { error } = await supabase.from('products').upsert(payloadWithGallery);
      if (error) {
        const { gallery, is_incredible, incredible_expires_at, incredible_timer_duration, ...fallbackPayload } = payloadWithGallery;
        await supabase.from('products').upsert(fallbackPayload);
      }
    } catch {}

    return true;
  } catch (err) {
    console.warn('Save product exception:', err);
    return false;
  }
};

export const deleteProductFromDb = async (productId: string): Promise<boolean> => {
  try {
    // 1. Remove from local store
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

    // 2. Persist updated list to Supabase SYSTEM_CONFIG_PRODUCTS
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

    // 3. Delete from relational products table
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
        createdAt: localMatch.createdAt,
      };
    } else {
      // Merge: if local role has admin, prefer it
      if (localMatch.role === 'admin') {
        matchedUser.role = 'admin';
      }
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

      // Cache locally
      try {
        localStorage.setItem('jahesh_all_chats', JSON.stringify(dbChats));
      } catch {}

      return dbChats;
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
// BANNER & SLIDER DATABASE PERSISTENCE
// ==========================================

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

