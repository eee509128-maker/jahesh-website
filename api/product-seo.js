import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const PRODUCTS_FILE = path.join(ROOT_DIR, 'data', 'products.json');
const TOOLS_FILE = path.join(ROOT_DIR, 'jaheshkala', 'data', 'tools.json');
const DELETED_PRODUCTS_FILE = path.join(ROOT_DIR, 'data', 'deleted_products.json');

function getDeletedProductIds() {
  try {
    if (fs.existsSync(DELETED_PRODUCTS_FILE)) {
      const raw = fs.readFileSync(DELETED_PRODUCTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return new Set(parsed);
    }
  } catch (e) {
    console.error('Error reading deleted products:', e);
  }
  return new Set();
}

export function getAllProducts() {
  const deletedSet = getDeletedProductIds();
  const list = [];
  const seenIds = new Set();

  // 1. Read main products from data/products.json
  try {
    if (fs.existsSync(PRODUCTS_FILE)) {
      const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
      const items = JSON.parse(raw);
      if (Array.isArray(items)) {
        for (const item of items) {
          if (!item || !item.id || deletedSet.has(item.id)) continue;
          seenIds.add(item.id);

          let mainImage = item.image;
          if (!mainImage && Array.isArray(item.images) && item.images.length > 0) {
            mainImage = item.images[0];
          }
          if (!mainImage) {
            mainImage = '/assets/jahesh-logo.png';
          }

          list.push({
            id: String(item.id),
            title: item.title || item.aiAppName || 'محصول جهش کالا',
            shortDescription: item.shortDescription || item.description || '',
            fullDescription: item.fullDescription || item.description || item.shortDescription || '',
            price: Number(item.price) || 0,
            originalPrice: Number(item.originalPrice) || 0,
            discountPercent: Number(item.discountPercent) || 0,
            image: mainImage,
            images: Array.isArray(item.images) && item.images.length > 0 ? item.images : [mainImage],
            category: item.category || 'کالای دیجیتال و نرم‌افزار',
            brand: item.brand || 'جهش کالا (Jahesh Kala)',
            warranty: item.warranty || 'ضمانت اصالت و سلامت و پشتیبانی فنی جهش',
            deliveryDays: item.deliveryDays || 'تحویل آنی و دسترسی فوری',
            features: Array.isArray(item.features) ? item.features : [],
            badge: item.badge || (item.isGolden ? 'پیشنهاد طلایی' : (item.isIncredible ? 'تخفیف شگفت‌انگیز' : '')),
            downloadUrl: item.appDownloadUrl || item.downloadUrl || '',
            appFileSize: item.appFileSize || '',
            appVersion: item.appVersion || '',
            inStock: item.inStock !== false,
            rating: Number(item.rating) || 5,
            reviewsCount: Number(item.reviewsCount) || 16,
            updatedAt: item.updatedAt || new Date().toISOString(),
            isAiAppProduct: !!item.isAiAppProduct,
            source: 'products'
          });
        }
      }
    }
  } catch (err) {
    console.error('Error loading products for SEO:', err);
  }

  // 2. Read tools from jaheshkala/data/tools.json
  try {
    if (fs.existsSync(TOOLS_FILE)) {
      const raw = fs.readFileSync(TOOLS_FILE, 'utf8');
      const tools = JSON.parse(raw);
      if (Array.isArray(tools)) {
        for (const tool of tools) {
          if (!tool || !tool.id || seenIds.has(tool.id) || deletedSet.has(tool.id)) continue;
          seenIds.add(tool.id);

          list.push({
            id: String(tool.id),
            title: tool.title || 'ابزار تخصصی جهش',
            shortDescription: tool.desc ? tool.desc.slice(0, 150) + '...' : '',
            fullDescription: tool.desc || '',
            price: 0,
            originalPrice: 0,
            discountPercent: 0,
            image: '/assets/jahesh-logo.png',
            images: ['/assets/jahesh-logo.png'],
            category: 'ابزارهای تخصصی و کاربردی',
            brand: 'جهش (Jahesh)',
            warranty: 'دسترسی آنلاین و بلادرنگ',
            deliveryDays: 'دسترسی آنی',
            features: [
              tool.tag || 'پردازش ابری و الگوریتم‌های هوش مصنوعی',
              tool.codeVer ? `نسخه سیستم: ${tool.codeVer}` : 'توسعه یافته توسط تیم فنی جهش'
            ],
            badge: tool.mediaBadge || tool.tag || 'سامانه ابری جهش',
            downloadUrl: tool.link && tool.link !== '#' ? tool.link : '',
            appFileSize: '',
            appVersion: tool.codeVer || '1.0',
            inStock: true,
            rating: 5,
            reviewsCount: 12,
            updatedAt: new Date().toISOString(),
            isAiAppProduct: true,
            source: 'tools',
            externalLink: tool.link || ''
          });
        }
      }
    }
  } catch (err) {
    console.error('Error loading tools for SEO:', err);
  }

  return list;
}

export function findProductByIdentifier(rawId) {
  if (!rawId) return null;
  const target = decodeURIComponent(String(rawId)).trim().toLowerCase();
  const all = getAllProducts();

  // 1. Direct ID match
  const byId = all.find((p) => p.id.toLowerCase() === target);
  if (byId) return byId;

  // 2. Specific alias mapping for high-traffic products
  if (target === 'shantia' || target === 'shantya' || target === 'شنتیا') {
    const shantia = all.find((p) => p.title.includes('شنتیا') || p.id === 'prod-1790538341809');
    if (shantia) return shantia;
  }
  if (target === 'amlak' || target === 'املاک') {
    const amlak = all.find((p) => p.id === 'pkg-amlak-jahesh' || p.title.includes('املاک'));
    if (amlak) return amlak;
  }
  if (target === 'golden' || target === 'design' || target === 'tarahi-site' || target === 'طراحی-سایت') {
    const golden = all.find((p) => p.id === 'pkg-golden-jahesh');
    if (golden) return golden;
  }
  if (target === 'jazve' || target === 'jozveh' || target === 'جزوه' || target === 'تبدیل-جزوه') {
    // Both Shantia and tool_24 handle notes
    const shantia = all.find((p) => p.title.includes('شنتیا') || p.id === 'prod-1790538341809');
    if (shantia) return shantia;
  }
  if (target === 'divar' || target === 'دیوار') {
    const divar = all.find((p) => p.id === 'tool_2');
    if (divar) return divar;
  }
  if (target === 'marketing' || target === 'مارکتینگ') {
    const mkt = all.find((p) => p.title.includes('مارکتینگ'));
    if (mkt) return mkt;
  }

  // 3. Partial Title Match
  const byTitle = all.find((p) => p.title.toLowerCase().includes(target));
  if (byTitle) return byTitle;

  return null;
}

function formatPriceToman(amount) {
  if (!amount || amount <= 0) return 'رایگان / ویژه اعضا';
  return Number(amount).toLocaleString('fa-IR') + ' تومان';
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderProductHtml(product, origin = 'https://jaheshit.ir') {
  const canonicalUrl = `${origin}/jaheshkala/product/${encodeURIComponent(product.id)}`;
  const cleanTitle = escapeHtml(product.title);
  const metaDescription = escapeHtml(
    (product.shortDescription || product.fullDescription || '').replace(/\s+/g, ' ').slice(0, 160)
  );

  let imageUrl = product.image || '/assets/jahesh-logo.png';
  if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
    imageUrl = `${origin}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  }

  // Keywords tailored specifically for this product
  const keywordsList = [
    product.title,
    `خرید ${product.title}`,
    `قیمت ${product.title}`,
    `دانلود ${product.title}`,
    'جهش کالا',
    'فروشگاه جهش کالا',
    'خرید آنلاین جهش کالا'
  ];
  if (product.title.includes('شنتیا')) {
    keywordsList.push('جهش شنتیا', 'اپلیکیشن جهش شنتیا', 'تبدیل صوت به جزوه', 'جزوه‌نویس هوشمند کلاس', 'ضبط صدای استاد', 'نرم افزار تبدیل صدا به متن دانشگاهی');
  } else if (product.title.includes('املاک')) {
    keywordsList.push('مدیریت املاک جهش', 'نرم افزار املاک', 'سامانه هوشمند املاک', 'اتصال املاک جهش');
  } else if (product.title.includes('طراحی')) {
    keywordsList.push('طراحی سایت جهش', 'پکیج طلایی طراحی وب سایت', 'طراحی سایت مشهد');
  }
  const keywordsMeta = escapeHtml(keywordsList.join(', '));

  // Schema.org Product
  const schemaProduct = {
    '@context': 'https://schema.org',
    '@type': product.isAiAppProduct ? ['Product', 'SoftwareApplication'] : 'Product',
    name: product.title,
    image: [imageUrl],
    description: product.fullDescription || product.shortDescription,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'جهش کالا'
    },
    offers: {
      '@type': 'Offer',
      url: canonicalUrl,
      priceCurrency: 'IRR',
      price: product.price ? product.price * 10 : 0,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'فروشگاه اینترنتی جهش کالا',
        url: `${origin}/jaheshkala/`
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating || 5,
      reviewCount: product.reviewsCount || 16,
      bestRating: 5,
      worstRating: 1
    }
  };

  if (product.downloadUrl) {
    schemaProduct.downloadUrl = product.downloadUrl.startsWith('http') ? product.downloadUrl : `${origin}${product.downloadUrl}`;
    if (product.appFileSize) schemaProduct.fileSize = product.appFileSize;
    if (product.appVersion) schemaProduct.softwareVersion = product.appVersion;
    schemaProduct.operatingSystem = 'Android, Web, Windows';
  }

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'جهش',
        item: `${origin}/`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'جهش کالا',
        item: `${origin}/jaheshkala/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.title,
        item: canonicalUrl
      }
    ]
  };

  // Other related products
  const allProds = getAllProducts().filter((p) => p.id !== product.id).slice(0, 4);

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${cleanTitle} | خرید و مشخصات در جهش کالا</title>
  <meta name="description" content="${metaDescription}" />
  <meta name="keywords" content="${keywordsMeta}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

  <!-- Favicon & Icons -->
  <link rel="icon" type="image/x-icon" href="/jaheshkala/favicon.ico" />
  <link rel="icon" type="image/png" sizes="48x48" href="/jaheshkala/favicon-48x48.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/jaheshkala/favicon-192x192.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/jaheshkala/apple-touch-icon.png" />
  <link rel="image_src" href="${imageUrl}" />
  <meta name="thumbnail" content="${imageUrl}" />

  <!-- Open Graph -->
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="جهش کالا" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${cleanTitle} | جهش کالا" />
  <meta property="og:description" content="${metaDescription}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:secure_url" content="${imageUrl}" />
  <meta property="og:image:alt" content="${cleanTitle}" />
  <meta property="product:price:amount" content="${product.price ? product.price * 10 : 0}" />
  <meta property="product:price:currency" content="IRR" />

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${cleanTitle} | جهش کالا" />
  <meta name="twitter:description" content="${metaDescription}" />
  <meta name="twitter:image" content="${imageUrl}" />

  <!-- Fonts & Tailwind -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Vazirmatn', 'sans-serif'],
          },
          colors: {
            brand: {
              purple: '#8c00ff',
              neon: '#a855f7',
              dark: '#080711',
              card: '#120f24',
              cyan: '#00f0ff'
            }
          }
        }
      }
    }
  </script>

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
    ${JSON.stringify(schemaProduct, null, 2)}
  </script>
  <script type="application/ld+json">
    ${JSON.stringify(breadcrumbsSchema, null, 2)}
  </script>
</head>
<body class="bg-[#080711] text-slate-100 font-['Vazirmatn',sans-serif] selection:bg-purple-600 selection:text-white antialiased min-h-screen flex flex-col justify-between">

  <!-- Navbar -->
  <header class="sticky top-0 z-50 backdrop-blur-xl bg-[#080711]/85 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="/jaheshkala/" class="flex items-center gap-3 group">
          <img src="/assets/jahesh-logo.png" alt="لوگوی رسمی جهش کالا" class="w-11 h-11 object-contain drop-shadow-[0_0_15px_rgba(140,0,255,0.6)] group-hover:scale-105 transition" />
          <div class="text-right">
            <span class="block text-xl font-black bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">جهش کالا</span>
            <span class="block text-[11px] text-slate-400">فروشگاه آنلاین محصولات و سامانه‌ها</span>
          </div>
        </a>
      </div>

      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
        <a href="/" class="hover:text-white transition">صفحه اصلی جهش</a>
        <a href="/jaheshkala/" class="text-purple-400 font-bold hover:text-purple-300 transition">همه محصولات فروشگاه</a>
        <a href="/hwsh-msnway/" class="hover:text-white transition">هوش مصنوعی جهش ۲</a>
        <a href="tel:09152331974" class="hover:text-cyan-300 transition flex items-center gap-1.5 text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
          <span>پشتیبانی: ۰۹۱۵۲۳۳۱۹۷۴</span>
        </a>
      </nav>

      <div>
        <a href="/jaheshkala/" class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-purple-600/30 transition">
          <span>ورود به فروشگاه</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-6 w-full">
    <nav class="flex items-center gap-2 text-xs text-slate-400">
      <a href="/" class="hover:text-white transition">جهش</a>
      <span>/</span>
      <a href="/jaheshkala/" class="hover:text-white transition">جهش کالا</a>
      <span>/</span>
      <span class="text-purple-400 font-bold truncate">${cleanTitle}</span>
    </nav>
  </div>

  <!-- Main Product Showcase -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Right Column: Product Image & Badges (Lg: 5 cols) -->
      <div class="lg:col-span-5 flex flex-col gap-4">
        <div class="relative rounded-3xl overflow-hidden border border-purple-500/30 bg-gradient-to-b from-purple-950/30 to-black/60 p-4 backdrop-blur-md shadow-[0_0_40px_rgba(140,0,255,0.15)] group">
          ${product.badge ? `<span class="absolute top-5 right-5 z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg border border-white/20">${escapeHtml(product.badge)}</span>` : ''}
          <div class="aspect-square w-full rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center p-2">
            <img src="${imageUrl}" alt="${cleanTitle}" class="w-full h-full object-contain rounded-xl group-hover:scale-105 transition duration-500" itemprop="image" />
          </div>
        </div>

        <!-- Guarantees Bar -->
        <div class="grid grid-cols-2 gap-3 text-xs text-slate-300">
          <div class="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <span>${escapeHtml(product.warranty)}</span>
          </div>

          <div class="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <span>${escapeHtml(product.deliveryDays)}</span>
          </div>
        </div>
      </div>

      <!-- Left Column: Product Info & Actions (Lg: 7 cols) -->
      <div class="lg:col-span-7 flex flex-col gap-6 text-right">
        
        <!-- Category & Brand -->
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">${escapeHtml(product.category)}</span>
          <span class="text-xs text-slate-400">• برند: ${escapeHtml(product.brand)}</span>
          <div class="mr-auto flex items-center gap-1 text-amber-400 text-xs">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            <span class="text-slate-400 mr-1">(امتیاز ۵ از ۵)</span>
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
          ${cleanTitle}
        </h1>

        <!-- Short Description -->
        ${product.shortDescription ? `<p class="text-base text-slate-300 leading-relaxed">${escapeHtml(product.shortDescription)}</p>` : ''}

        <!-- Pricing Card -->
        <div class="p-5 rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-950/40 to-slate-900/50 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span class="block text-xs text-slate-400 mb-1">قیمت نهایی با تخفیف رسمی:</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-black text-cyan-300">${formatPriceToman(product.price)}</span>
              ${product.originalPrice && product.originalPrice > product.price ? `
                <span class="text-sm text-slate-500 line-through">${Number(product.originalPrice).toLocaleString('fa-IR')}</span>
              ` : ''}
            </div>
          </div>

          ${product.discountPercent > 0 ? `
            <div class="bg-pink-600/20 border border-pink-500/40 text-pink-300 text-xs font-bold px-3 py-1.5 rounded-full">
              تخفیف ویژه: ${Number(product.discountPercent).toLocaleString('fa-IR')}٪
            </div>
          ` : ''}
        </div>

        <!-- Action CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 pt-2">
          <a href="/jaheshkala/?openProduct=${encodeURIComponent(product.id)}" class="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-base px-6 py-4 rounded-2xl shadow-xl shadow-purple-600/40 hover:scale-[1.02] transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            <span>خرید و سفارش آنلاین در جهش کالا</span>
          </a>

          ${product.downloadUrl ? `
            <a href="${escapeHtml(product.downloadUrl)}" download class="inline-flex items-center justify-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-sm px-6 py-4 rounded-2xl transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              <span>دانلود مستقیم (${escapeHtml(product.appFileSize || 'فایل')})</span>
            </a>
          ` : ''}
        </div>

        <!-- Key Features List -->
        ${Array.isArray(product.features) && product.features.length > 0 ? `
          <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/10 mt-2">
            <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>ویژگی‌ها و قابلیت‌های برجسته:</span>
            </h2>
            <ul class="space-y-3">
              ${product.features.map((feat) => `
                <li class="flex items-start gap-2.5 text-sm text-slate-300">
                  <svg class="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>${escapeHtml(feat)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Full Detailed Description -->
        ${product.fullDescription ? `
          <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/10 mt-2">
            <h2 class="text-lg font-bold text-white mb-3">توضیحات تکمیلی محصول:</h2>
            <div class="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              ${escapeHtml(product.fullDescription)}
            </div>
          </div>
        ` : ''}

        <!-- Call to Action for Phone / Custom Inquiry -->
        <div class="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <span>نیاز به مشاوره فنی یا خرید سازمانی دارید؟</span>
          <a href="tel:09152331974" class="text-purple-300 font-bold hover:text-white transition flex items-center gap-1.5">
            <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span>تماس مستقیم با واحد فروش: ۰۹۱۵۲۳۳۱۹۷۴</span>
          </a>
        </div>

      </div>
    </div>

    <!-- Related Products -->
    ${allProds.length > 0 ? `
      <section class="mt-20 border-t border-white/10 pt-12">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-black text-white">سایر محصولات پیشنهادی در جهش کالا</h2>
          <a href="/jaheshkala/" class="text-sm font-bold text-purple-400 hover:text-purple-300 transition">مشاهده همه ←</a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          ${allProds.map((p) => `
            <a href="/jaheshkala/product/${encodeURIComponent(p.id)}" class="group p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.04] transition flex flex-col justify-between">
              <div>
                <div class="aspect-square rounded-xl overflow-hidden bg-black/40 mb-3 flex items-center justify-center p-2">
                  <img src="${p.image || '/assets/jahesh-logo.png'}" alt="${escapeHtml(p.title)}" class="w-full h-full object-contain group-hover:scale-105 transition" />
                </div>
                <h3 class="text-sm font-bold text-white group-hover:text-purple-300 transition line-clamp-2 mb-2">${escapeHtml(p.title)}</h3>
              </div>
              <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span class="text-cyan-300 font-bold">${formatPriceToman(p.price)}</span>
                <span class="text-slate-400 group-hover:text-white transition">مشاهده جزئیات ←</span>
              </div>
            </a>
          `).join('')}
        </div>
      </section>
    ` : ''}

  </main>

  <!-- Footer -->
  <footer class="mt-20 border-t border-white/10 bg-black/60 py-8 text-center text-sm text-slate-400">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img src="/assets/jahesh-logo.png" alt="لوگو" class="w-7 h-7 object-contain" />
        <p>© ۱۴۰۵ کلیه حقوق برای فروشگاه اینترنتی جهش کالا محفوظ است.</p>
      </div>
      <div class="flex items-center gap-4 text-xs">
        <a href="/" class="hover:text-white transition">صفحه اصلی جهش</a>
        <span>•</span>
        <a href="/jaheshkala/" class="hover:text-white transition">فروشگاه جهش کالا</a>
        <span>•</span>
        <a href="/hwsh-msnway/" class="hover:text-white transition">هوش مصنوعی جهش ۲</a>
      </div>
    </div>
  </footer>

</body>
</html>`;
}

export function generateProductsSitemapXml(origin = 'https://jaheshit.ir') {
  const products = getAllProducts();
  const dateStr = new Date().toISOString().split('T')[0];

  const urls = products.map((p) => {
    const loc = `${origin}/jaheshkala/product/${encodeURIComponent(p.id)}`;
    const mod = p.updatedAt ? p.updatedAt.split('T')[0] : dateStr;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${mod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
