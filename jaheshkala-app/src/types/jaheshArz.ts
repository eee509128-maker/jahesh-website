export type CryptoOrFiatCurrency =
  | 'IRR'
  | 'USD'
  | 'EUR'
  | 'AED'
  | 'TRY'
  | 'CNY'
  | 'RUB'
  | 'USDT'
  | 'BTC'
  | 'GBP';

export interface ExchangeRateItem {
  id: string;
  code: CryptoOrFiatCurrency;
  nameFa: string;
  symbol: string;
  badgeLabel: string;
  sellPrice: number; // قیمت فروش به ریال/تومان (TopChange Sell Price)
  buyPrice: number;  // قیمت خرید به ریال/تومان (TopChange Buy Price)
  sellPriceUSD?: number;
  buyPriceUSD?: number;
  change24h: number; // e.g. +0.45 or -1.2
  isUp: boolean;
  colorClass: string;
  badgeBg: string;
  lastUpdate: string;
  chartData?: number[];
}

export interface UserWallet {
  id: string;
  currency: CryptoOrFiatCurrency;
  name: string;
  symbol: string;
  accountNumber: string; // e.g. TC-IRR-782910
  balance: number;
  blockedBalance: number;
  color: string;
  iconBg: string;
  isDefault?: boolean;
}

export type ArzTransactionType =
  | 'charge'          // شارژ کیف پول
  | 'withdraw'        // برداشت وجه
  | 'exchange'        // تبدیل ارز
  | 'transfer_send'   // ارسال وجه به دیگران
  | 'transfer_receive'// دریافت وجه از دیگران
  | 'voucher_issue'   // صدور ووچر
  | 'voucher_redeem'  // نقد کردن ووچر
  | 'p2p_trade';      // معامله P2P

export interface ArzTransaction {
  id: string;
  trackingNumber: string; // شماره پیگیری TopChange (مثلا TC-REQ-847291)
  type: ArzTransactionType;
  typeTitle: string;
  currency: CryptoOrFiatCurrency;
  targetCurrency?: CryptoOrFiatCurrency;
  amount: number;
  targetAmount?: number;
  exchangeRate?: number;
  fee: number;
  finalAmount: number;
  status: 'completed' | 'processing' | 'pending' | 'rejected';
  statusLabel: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  paymentMethod?: 'gateway' | 'card_to_card' | 'crypto_trc20' | 'sheba' | 'voucher' | 'internal';
  destinationInfo?: string; // شماره شبا، آدرس ولت، کد ووچر، ایمیل مقصد
  referenceId?: string;
}

export interface TcVoucher {
  id: string;
  voucherNumber: string; // کد ۱۶ رقمی ووچر
  activationCode: string; // کد فعالسازی ۸ رقمی
  currency: CryptoOrFiatCurrency;
  amount: number;
  createdAt: string;
  expiresAt: string;
  status: 'active' | 'used' | 'expired';
  usedBy?: string;
  usedAt?: string;
}

export interface P2PAdvertisement {
  id: string;
  type: 'buy' | 'sell';
  sellerName: string;
  sellerRating: number;
  completedTrades: number;
  currency: CryptoOrFiatCurrency;
  targetCurrency: CryptoOrFiatCurrency;
  rate: number;
  availableAmount: number;
  minLimit: number;
  maxLimit: number;
  paymentMethods: string[];
  createdAt: string;
}

export interface TopChangeBanner {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  ctaText: string;
  discountCode?: string;
  bgGradient: string;
  linkAction: string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  bankCode?: string;
  accountHolder: string;
  cardNumber: string; // 16-digits
  shebaNumber: string; // IR...
  accountNumber?: string;
  isDefault?: boolean;
  isVerified?: boolean;
  createdAt: string;
}
