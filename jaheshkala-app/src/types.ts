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
  gallery?: string[]; // Multiple photos like Digikala (گالری تصاویر محصول)
  warranty?: string;
  colors?: string[];
  couponCode?: string; // Specific coupon code assigned directly to this product
  couponDiscountPercent?: number; // Discount percentage when this product's coupon code is entered
  domainIncluded?: boolean;
  hostIncluded?: boolean;
  seoIncluded?: boolean;
}

export interface CartItem {
  product: Product;
  requestedDomain?: string;
  selectedColor?: string;
  clientNotes?: string;
  quantity: number;
}

export interface User {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  username: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export type OrderStatus =
  | 'در حال بررسی'
  | 'تایید شده و آماده‌سازی'
  | 'تحویل به پست / پیک'
  | 'ارسال شده'
  | 'تحویل داده شد';

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
  paymentGateway: 'زیبال (Zibal)' | 'شاپرک' | 'تست پرداخت';
  date: string;
  acceptedTerms: boolean;
  adminNotes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'support';
  text: string;
  time: string;
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
