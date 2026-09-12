export type ProductCategory =
  | 'موبایل و تبلت'
  | 'لپ‌تاپ و کامپیوتر'
  | 'هدفون و تجهیزات صوتی'
  | 'ساعت و گجت هوشمند'
  | 'لوازم جانبی دیجیتال'
  | 'خدمات و طراحی سایت'
  | string;

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  brand?: string;
  price: number; // in Tomans
  originalPrice?: number;
  discountPercent?: number;
  badge?: string;
  isPopular?: boolean;
  isGolden?: boolean;
  rating: number;
  reviewsCount: number;
  deliveryDays: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  includedGifts?: string[];
  image: string;
  imagePosition?: string; // e.g. 'center', 'top', 'bottom', 'left', 'right'
  gallery?: string[]; // Multiple photos like Digikala (گالری تصاویر محصول)
  warranty?: string;
  colors?: string[];
  couponCode?: string; // Specific coupon code assigned directly to this product
  couponDiscountPercent?: number; // Discount percentage when this product's coupon code is entered
  domainIncluded?: boolean;
  hostIncluded?: boolean;
  seoIncluded?: boolean;
  isIncredible?: boolean;
  incredibleTimerDuration?: '1day' | '3days' | '1week' | '1month' | 'custom' | string;
  incredibleExpiresAt?: string; // ISO date string
  isSubscription?: boolean; // Subscription based product (e.g. Amlak SaaS)
  pricePerDay?: number; // Price per day (e.g. 250,000 Tomans)
  hasCustomPlans?: boolean; // Multi-tier subscription/tariff plans (پکیج‌ها و تعرفه‌های اشتراک انتخابی)
  customPlansTitle?: string; // e.g. "پکیج‌های تبلیغات هوشمند"
  customPlansSubtitle?: string; // e.g. "انتخاب کنید و کمپین خود را به سطح بالاتری ببرید"
  subscriptionPlans?: SubscriptionPlan[]; // Array of custom tiers
  guild?: string; // صنف مرتبط با این خدمت یا کالا (مثلاً: املاک و مستغلات، طراحی سایت، رستوران...)
  targetGuilds?: string[]; // صنف‌های مرتبط
  viewsCount?: number; // تعداد کل بازدیدها و دیده‌شدن‌های محصول توسط مشتریان
  updatedAt?: string; // ISO date timestamp for conflict resolution and persistent updates
}

export interface SubscriptionPlan {
  id: string;
  name: string; // e.g. "پایه (استارتر)", "طلایی (پیشنهادی ویژه)", "پلاتینیوم (VIP)"
  badge?: string; // e.g. "🔥 پیشنهادی ویژه", "۳۰٪ تخفیف ویژه اولین همکاری"
  price: number; // in Tomans
  originalPrice?: number; // Strike-through price before discount
  durationDays?: number; // Duration in days (e.g. 30, 90, 365)
  durationLabel?: string; // e.g. "ماهانه", "۳ ماهه", "سالانه", "پروژه اختصاصی"
  shortDescription?: string; // Short note/subtitle
  features: string[]; // Bullet-point features/descriptions
  isPopular?: boolean; // Highlighted golden/featured card
}

export interface CartItem {
  product: Product;
  requestedDomain?: string;
  selectedColor?: string;
  clientNotes?: string;
  subscriptionDays?: number; // Days of subscription chosen
  selectedPlan?: SubscriptionPlan; // The custom chosen plan tier
  quantity: number;
}

export type UserRole = 'admin' | 'operator' | 'user';

export interface User {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  username: string;
  role: 'admin' | 'operator' | 'user';
  guild?: string; // صنف و شغل کاربر (مثلاً: املاک و مستغلات، پزشکی، رستوران و...)
  customGuild?: string; // در صورت انتخاب سایر مشاغل
  createdAt: string;
  timestamp?: number; // Exact millisecond timestamp for sorting newest users first
}

export type OrderStatus =
  | 'در حال بررسی'
  | 'تایید شده / در حال آماده‌سازی'
  | 'تایید شده و آماده‌سازی'
  | 'تایید شده و آغاز پروژه'
  | 'ارسال شده به پست'
  | 'ارسال شده'
  | 'تحویل به پست / پیک'
  | 'در حال طراحی و کدنویسی'
  | 'در حال طراحی و بهینه‌سازی'
  | 'تحویل نهایی شده'
  | 'تحویل داده شد'
  | 'تکمیل شده و تحویل نهایی'
  | 'لغو شده'
  | string;

export interface Coupon {
  id: string;
  code: string;
  discountPercent: number;
  targetFinalPrice?: number;
  maxDiscountAmount?: number;
  minOrderAmount?: number;
  description?: string;
  isActive: boolean;
}

export interface BannerSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  actionType: 'incredible' | 'category' | 'link' | 'all';
  actionTarget?: string;
  gradient?: string;
  overlayOpacity?: number;
  image: string;
  imagePosition?: string;
  fitMode?: 'auto' | 'contain' | 'cover'; // حالت نمایش و تنظیم هوشمند برای دیده شدن کامل در همه پلتفرم‌ها
  hideTextOverlay?: boolean; // مخفی کردن متن‌های پیش‌فرض در صورت گرافیکی بودن بنر
  targetGuild?: string; // صنف هدف برای بنر (اختیاری)
  isActive?: boolean;
  order?: number;

  // ویژگی‌های گرافیکی متن و پس‌زمینه
  titleColor?: string; // رنگ عنوان اصلی
  subtitleColor?: string; // رنگ متن توضیحات
  highlightText?: string; // کلمه یا عبارتی که رنگ متفاوتی در عنوان دارد
  highlightColor?: string; // رنگ کلمه هایلایت‌شده
  textBackdropEnabled?: boolean; // فعال بودن باکس بلور و محوکننده پشت متن
  textBackdropTheme?: 'dark' | 'purple' | 'navy' | 'light'; // تم باکس پشت متن
  textBackdropOpacity?: number; // شفافیت باکس پشت متن (0-100)
  aspectRatio?: '21/9' | '16/9'; // نسبت ابعاد بنر برای تطابق دقیق بین موبایل و دسکتاپ

  // سایز فونت و کنترل خطوط متن (تک‌خطی و جلوگیری از شکستن کلمات به دو خط)
  titleFontSize?: 'sm' | 'md' | 'lg' | 'xl'; // اندازه فونت عنوان اصلی
  subtitleFontSize?: 'sm' | 'md' | 'lg'; // اندازه فونت زیرعنوان
  singleLineTitle?: boolean; // قفل کردن عنوان در یک خط بدون شکستن (No-Wrap)
  singleLineSubtitle?: boolean; // قفل کردن زیرعنوان در یک خط
}

export interface AmlakSubscriptionLicense {
  username: string;
  password: string;
  licenseKey: string;
  buyerName: string;
  phone: string;
  days: number;
  startDate: string;
  expiresAt: string;
  status: 'active' | 'expired';
}

export interface Order {
  id: string;
  trackingCode: string;
  paymentRefId: string;
  userId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  shippingAddress?: string;
  requestedDomain?: string;
  clientNotes?: string;
  items: CartItem[];
  totalAmount: number;
  discountAmount?: number;
  appliedCouponCode?: string;
  status: OrderStatus;
  paymentGateway: 'زیبال (Zibal)' | 'شاپرک' | 'تست پرداخت' | string;
  date: string;
  createdAt?: string; // ISO timestamp for exact sorting
  zibalTrackId?: string; // شماره تراکنش اختصاصی زیبال
  zibalRefNumber?: string; // شماره ارجاع بانکی شاپرک (RRN)
  cardNumber?: string; // شماره کارت بانکی پرداخت کننده
  paidAt?: string; // زمان پرداخت ثبت شده در درگاه
  acceptedTerms: boolean;
  adminNotes?: string;
  amlakLicense?: AmlakSubscriptionLicense;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'support';
  text: string;
  time: string;
  isHumanAdmin?: boolean; // True when message is authored directly by the human admin in panel
  senderTitle?: string;
  replyTo?: {
    id: string;
    text: string;
    sender: 'user' | 'support';
  };
  file?: {
    name: string;
    url: string;
    type: 'image' | 'file';
    sizeText?: string;
  };
}

export interface UserChat {
  userId: string;
  userName: string;
  messages: ChatMessage[];
  lastUpdated: string;
  isReadByAdmin: boolean;
  needsHumanSupport?: boolean; // Flagged when AI cannot answer and escalates to human admin
}

export type SupportMessage = ChatMessage;
