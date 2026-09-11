import { UserWallet, ArzTransaction, TcVoucher, P2PAdvertisement, BankAccount } from '../types/jaheshArz';
import { INITIAL_WALLETS, INITIAL_TRANSACTIONS, INITIAL_VOUCHERS, INITIAL_P2P_ADS } from '../data/topchangeData';

export const INITIAL_BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'ba-1',
    bankName: 'بانک ملت',
    bankCode: 'mellat',
    accountHolder: 'عرفان متقی',
    cardNumber: '6104337890124567',
    shebaNumber: 'IR820120000000001234567890',
    accountNumber: '4567891234',
    isDefault: true,
    isVerified: true,
    createdAt: '۱۴۰۴/۰۶/۱۰',
  },
  {
    id: 'ba-2',
    bankName: 'بانک سامان (بلوبانک)',
    bankCode: 'saman',
    accountHolder: 'عرفان متقی',
    cardNumber: '6219861054321987',
    shebaNumber: 'IR560560000000009876543210',
    accountNumber: '9876543210',
    isDefault: false,
    isVerified: true,
    createdAt: '۱۴۰۴/۰۶/۱۱',
  },
];

export interface UserArzData {
  userId: string;
  wallets: UserWallet[];
  transactions: ArzTransaction[];
  vouchers: TcVoucher[];
  bankAccounts: BankAccount[];
  p2pAds: P2PAdvertisement[];
}

function getStorageKey(userId: string) {
  const safeId = (userId || 'guest').replace(/[^a-zA-Z0-9_-]/g, '_');
  return `jahesh_arz_userdata_v3_${safeId}`;
}

/**
 * Load user's Arz data from Server API + LocalStorage fallback
 */
export async function loadUserArzData(userId: string, userName?: string): Promise<UserArzData> {
  const safeUserId = userId || 'usr-jahesh-master';
  const localKey = getStorageKey(safeUserId);

  // 1. Try to fetch from server
  try {
    const res = await fetch(`/api/jahesh-arz/data?userId=${encodeURIComponent(safeUserId)}`);
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data && Array.isArray(json.data.wallets) && json.data.wallets.length > 0) {
        // Sanitize legacy mock balances
        const sanitizedData = {
          ...json.data,
          wallets: json.data.wallets.map((w: UserWallet) => {
            if (w.balance === 15400000 || w.balance === 14500000 || w.balance === 350 || w.balance === 240 || w.balance === 340.5) {
              return { ...w, balance: 0 };
            }
            return w;
          })
        };
        // Save to local cache
        localStorage.setItem(localKey, JSON.stringify(sanitizedData));
        return sanitizedData;
      }
    }
  } catch (e) {
    console.warn('Server fetch for Arz data notice:', e);
  }

  // 2. Check LocalStorage
  try {
    const localRaw = localStorage.getItem(localKey);
    if (localRaw) {
      const parsed = JSON.parse(localRaw);
      if (parsed && Array.isArray(parsed.wallets) && parsed.wallets.length > 0) {
        return parsed;
      }
    }
  } catch (e) {}

  // 3. Generate default customized seed data for this user - all 0 balances
  const numHash = Math.abs(safeUserId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
  const userWallets: UserWallet[] = [
    {
      id: `w-irr-${safeUserId}`,
      currency: 'IRR',
      name: 'کیف پول ریال (تومان)',
      symbol: 'IRR',
      accountNumber: `TC-IRR-${(100000 + (numHash % 900000)).toString()}`,
      balance: 0,
      blockedBalance: 0,
      color: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-emerald-500/20 text-emerald-400',
      isDefault: true,
    },
    {
      id: `w-usd-${safeUserId}`,
      currency: 'USD',
      name: 'کیف پول دلار آمریکا',
      symbol: '$',
      accountNumber: `TC-USD-${(200000 + (numHash % 800000)).toString()}`,
      balance: 0,
      blockedBalance: 0,
      color: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-blue-500/20 text-blue-400',
    },
    {
      id: `w-usdt-${safeUserId}`,
      currency: 'USDT',
      name: 'کیف پول تتر (Tether)',
      symbol: 'USDT',
      accountNumber: `TC-USDT-${(300000 + (numHash % 700000)).toString()}`,
      balance: 0,
      blockedBalance: 0,
      color: 'from-cyan-500 to-blue-600',
      iconBg: 'bg-cyan-500/20 text-cyan-400',
    },
    {
      id: `w-eur-${safeUserId}`,
      currency: 'EUR',
      name: 'کیف پول یورو اروپا',
      symbol: '€',
      accountNumber: `TC-EUR-${(400000 + (numHash % 600000)).toString()}`,
      balance: 0,
      blockedBalance: 0,
      color: 'from-purple-500 to-indigo-600',
      iconBg: 'bg-purple-500/20 text-purple-400',
    },
  ];

  const defaultData: UserArzData = {
    userId: safeUserId,
    wallets: userWallets,
    transactions: INITIAL_TRANSACTIONS,
    vouchers: INITIAL_VOUCHERS,
    bankAccounts: INITIAL_BANK_ACCOUNTS.map(ba => ({
      ...ba,
      accountHolder: userName || ba.accountHolder
    })),
    p2pAds: INITIAL_P2P_ADS,
  };

  // Save to both
  saveUserArzData(safeUserId, defaultData);
  return defaultData;
}

/**
 * Save user's Arz data to Server API + LocalStorage
 */
export async function saveUserArzData(userId: string, data: UserArzData): Promise<boolean> {
  const safeUserId = userId || 'usr-jahesh-master';
  const localKey = getStorageKey(safeUserId);

  try {
    localStorage.setItem(localKey, JSON.stringify(data));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('jahesh-arz-data-updated', { detail: data }));
    }
  } catch (e) {}

  try {
    await fetch('/api/jahesh-arz/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: safeUserId,
        wallets: data.wallets,
        transactions: data.transactions,
        vouchers: data.vouchers,
        bankAccounts: data.bankAccounts,
        p2pAds: data.p2pAds,
      }),
    });
    return true;
  } catch (err) {
    console.warn('Could not sync Arz data to server:', err);
    return true;
  }
}

/**
 * Pay Jahesh Kala cart/order directly with Jahesh Arz wallet
 */
export async function payOrderWithArzWallet(
  userId: string,
  orderId: string,
  amountInTomans: number,
  currency: 'IRR' | 'USDT' = 'IRR'
): Promise<{ success: boolean; message?: string; trackingNumber?: string; refNumber?: string; remainingBalance?: number }> {
  try {
    const res = await fetch('/api/jahesh-arz/pay-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userId || 'usr-jahesh-master',
        orderId,
        amountInTomans,
        currency,
      }),
    });

    const json = await res.json();
    if (json.success) {
      // Refresh local data
      const updatedData = await loadUserArzData(userId);
      return {
        success: true,
        message: json.message,
        trackingNumber: json.trackingNumber,
        refNumber: json.refNumber,
        remainingBalance: json.remainingBalance,
      };
    } else {
      return {
        success: false,
        message: json.error || 'خطا در پرداخت از کیف پول',
      };
    }
  } catch (err: any) {
    return {
      success: false,
      message: err.message || 'خطا در اتصال به سرور کیف پول',
    };
  }
}
