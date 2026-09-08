import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'pkg-golden-jahesh',
    title: 'پکیج طلایی طراحی سایت اختصاصی جهش',
    category: 'طراحی سایت و خدمات وب',
    brand: 'جهش‌آی‌تی (Jahesh IT)',
    price: 7900000,
    originalPrice: 11500000,
    discountPercent: 31,
    badge: 'پیشنهاد طلایی جهش',
    isPopular: true,
    isGolden: true,
    rating: 5.0,
    reviewsCount: 48,
    deliveryDays: 'تحویل فوری ۳ تا ۷ روز کاری',
    warranty: '۱ ماه پشتیبانی فنی رایگان + هاست و دامین رایگان',
    couponCode: 'JAHESH20',
    couponDiscountPercent: 20,
    shortDescription: 'طراحی سایت مدرن، ریسپانسیو و پرسرعت متصل به درگاه پرداخت زیبال با امنیت کامل و پنل مدیریت اختصاصی.',
    fullDescription: 'با پکیج طلایی طراحی وب‌سایت جهش، یک وب‌سایت فروشگاهی یا شرکتی تمام‌عیار با کدنویسی اختصاصی، رابط کاربری مدرن، سئو استاندارد، هاست پرسرعت و درگاه پرداخت آنلاین تحویل بگیرید.',
    features: [
      'طراحی کاملاً واکنش‌گرا (Responsive) سازگار با موبایل و تبلت',
      'اتصال مستقیم به درگاه پرداخت اینترنتی زیبال (Zibal)',
      'پنل اختصاصی مدیریت محصولات، سفارشات و مشتریان',
      'هاست پرسرعت NVMe و دامنه رایگان',
      '۱ ماه پشتیبانی فنی و آموزش کامل کاربری',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  },
];
