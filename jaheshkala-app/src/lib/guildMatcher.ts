import { Product } from '../types';
import { IRANIAN_GUILDS, GuildItem } from '../data/guildsData';

/**
 * Normalizes Persian/Arabic text for accurate, fuzz-tolerant matching
 */
export function normalizePersianText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .replace(/[ة]/g, 'ه')
    .replace(/[ؤ]/g, 'و')
    .replace(/[إأآ]/g, 'ا')
    .replace(/[\u200B-\u200D\uFEFF]/g, ' ') // zero-width spaces to space
    .replace(/[^\u0600-\u06FFa-zA-Z0-9\s]/g, ' ') // punctuation to space
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Stop words in Persian that should not be used as distinct standalone matching tokens
 */
const PERSIAN_STOP_WORDS = new Set([
  'و', 'یا', 'در', 'به', 'از', 'های', 'ها', 'با', 'بر', 'برای', 'تا', 'که', 'یک', 'این', 'آن', 'است', 'شد', 'شدن', 'دارد', 'شامل'
]);

/**
 * Extracts meaningful keyword tokens from text
 */
export function extractTokens(text: string): string[] {
  const normalized = normalizePersianText(text);
  return normalized
    .split(' ')
    .filter((token) => token.length >= 2 && !PERSIAN_STOP_WORDS.has(token));
}

/**
 * Deterministic mapping of built-in products to their primary official Iranian Guild ID
 */
export const PRODUCT_CANONICAL_GUILDS: Record<string, string> = {
  'pkg-golden-jahesh': 'guild-tech',
  'pkg-netfinder-jahesh': 'guild-tech',
  'pkg-amlak-jahesh': 'guild-amlak',
  'pkg-amlak-3dtour-shield': 'guild-amlak',
  'pkg-ads-smart': 'guild-marketing',
  'pkg-marketing-omniads': 'guild-marketing',
  'pkg-medical-smartclinic': 'guild-medical',
  'pkg-retail-smartguard': 'guild-retail',
  'pkg-food-smartdine': 'guild-food',
  'pkg-fashion-virtualfit': 'guild-fashion',
  'pkg-gold-smartshield': 'guild-gold',
  'pkg-auto-expert': 'guild-auto',
  'pkg-auto-garage': 'guild-auto-services',
  'pkg-law-jurisai': 'guild-law',
  'pkg-build-bim': 'guild-construction',
  'pkg-home-ar': 'guild-home',
  'pkg-beauty-lens': 'guild-beauty',
  'pkg-edu-suite': 'guild-education',
  'pkg-photo-sync': 'guild-photography',
  'pkg-tour-keyless': 'guild-tourism',
  'pkg-agro-sense': 'guild-agriculture',
  'pkg-print-flow': 'guild-printing',
  'pkg-industry-vibeguard': 'guild-industry',
  'pkg-finance-taxguard': 'guild-finance',
  'pkg-sports-fitmetrics': 'guild-sports',
  'pkg-transport-fleetguard': 'guild-transport',
  'pkg-books-smartshelf': 'guild-books',
  'pkg-bizcard-smarthub': 'guild-other'
};

/**
 * Finds a matching GuildItem by shortName, name, id, or keywords
 */
export function findGuildByQuery(query: string): GuildItem | undefined {
  if (!query) return undefined;
  const qNorm = normalizePersianText(query);
  if (!qNorm) return undefined;

  // 1. Direct exact shortName / name / id match
  for (const g of IRANIAN_GUILDS) {
    const sNorm = normalizePersianText(g.shortName);
    const nNorm = normalizePersianText(g.name);
    const idNorm = normalizePersianText(g.id);
    if (sNorm === qNorm || nNorm === qNorm || idNorm === qNorm) {
      return g;
    }
  }

  // 2. Exact word / phrase match with shortName or name
  for (const g of IRANIAN_GUILDS) {
    const sNorm = normalizePersianText(g.shortName);
    const nNorm = normalizePersianText(g.name);
    if (nNorm.startsWith(qNorm) || qNorm.startsWith(nNorm) || sNorm.startsWith(qNorm) || qNorm.startsWith(sNorm)) {
      return g;
    }
  }

  // 3. Token-based word match (avoiding partial substring accidents like "تور" in "رستوران")
  const qTokens = extractTokens(query);
  if (qTokens.length === 0) return undefined;

  for (const g of IRANIAN_GUILDS) {
    const gTokens = new Set([
      ...extractTokens(g.shortName),
      ...extractTokens(g.name)
    ]);
    // Check if query is an exact match for one of the tokens
    if (qTokens.every(t => gTokens.has(t))) {
      return g;
    }
  }

  return undefined;
}

/**
 * Determines if a Product matches a given Category or Guild filter strictly
 */
export function isProductMatchingCategoryOrGuild(product: Product, filterQuery: string): boolean {
  if (!product) return false;
  if (!filterQuery || !filterQuery.trim()) return true;

  const target = filterQuery.trim();

  // Special system filters
  if (target === 'پرفروش' || target === 'محبوب') {
    return Boolean(product.isPopular || product.badge?.includes('پرفروش') || product.badge?.includes('محبوب'));
  }
  if (target === 'شگفت‌انگیز') {
    return Boolean(product.isIncredible || (product.discountPercent && product.discountPercent > 0));
  }
  if (target === 'همه' || target === 'همه کالاها') {
    return true;
  }

  const targetNorm = normalizePersianText(target);
  const targetGuildObj = findGuildByQuery(target);

  // 1. Strict Guild Filter: when user chooses a specific guild
  if (targetGuildObj) {
    const targetGuildId = targetGuildObj.id;
    const targetShortNorm = normalizePersianText(targetGuildObj.shortName);
    const targetNameNorm = normalizePersianText(targetGuildObj.name);

    // 1A. Deterministic check for built-in catalog products (100% precision guarantee)
    const canonicalGuildId = PRODUCT_CANONICAL_GUILDS[product.id];
    if (canonicalGuildId) {
      return canonicalGuildId === targetGuildId;
    }

    // 1B. Custom/Newly added product: check product's primary assigned guild
    const rawGuild = (product as any).guild || (product as any).targetGuild;
    if (rawGuild) {
      const pGuildObj = findGuildByQuery(rawGuild);
      if (pGuildObj) {
        return pGuildObj.id === targetGuildId;
      }
      const pGuildNorm = normalizePersianText(rawGuild);
      if (pGuildNorm === targetShortNorm || pGuildNorm === targetNameNorm) {
        return true;
      }
    }

    // 1C. Check targetGuilds array if explicitly defined for this product
    if (Array.isArray((product as any).targetGuilds) && (product as any).targetGuilds.length > 0) {
      const matchesTarget = (product as any).targetGuilds.some((tg: string) => {
        const tgObj = findGuildByQuery(tg);
        if (tgObj) return tgObj.id === targetGuildId;
        const tgNorm = normalizePersianText(tg);
        return tgNorm === targetShortNorm || tgNorm === targetNameNorm;
      });
      if (matchesTarget) return true;
    }

    // Strict mode: If a guild is selected, NEVER fall back to generic categories!
    return false;
  }

  // 2. Standard Category Filter (e.g. 'طراحی سایت و خدمات وب', 'نرم‌افزار و سامانه‌های هوشمند')
  const pCategoryNorm = normalizePersianText(product.category || '');
  if (
    pCategoryNorm === targetNorm ||
    pCategoryNorm.includes(targetNorm) ||
    targetNorm.includes(pCategoryNorm)
  ) {
    return true;
  }

  // 3. Direct Guild Name fallback for custom non-standard category queries
  const pGuildNorm = normalizePersianText((product as any).guild || (product as any).targetGuild || '');
  if (
    pGuildNorm &&
    (pGuildNorm === targetNorm || pGuildNorm.includes(targetNorm) || targetNorm.includes(pGuildNorm))
  ) {
    return true;
  }

  return false;
}

/**
 * Determines if a Product matches a search query
 */
export function isProductMatchingSearchQuery(product: Product, query: string): boolean {
  if (!product) return false;
  if (!query || !query.trim()) return true;

  const qNorm = normalizePersianText(query);
  const qTokens = extractTokens(query);

  const pGuild = normalizePersianText((product as any).guild || (product as any).targetGuild || '');
  const pTargetGuilds = Array.isArray((product as any).targetGuilds)
    ? (product as any).targetGuilds.map((g: string) => normalizePersianText(String(g)))
    : [];
  const pCategory = normalizePersianText(product.category || '');
  const pTitle = normalizePersianText(product.title || '');
  const pBrand = normalizePersianText(product.brand || '');
  const pShortDesc = normalizePersianText(product.shortDescription || '');
  const pFullDesc = normalizePersianText(product.fullDescription || '');
  const pPain = normalizePersianText((product as any).painPointSolved || '');
  const pFeatures = Array.isArray(product.features)
    ? product.features.map((f) => normalizePersianText(String(f)))
    : [];
  const pTags = Array.isArray(product.tags)
    ? product.tags.map((t) => normalizePersianText(String(t)))
    : [];

  // Check full query
  if (
    pTitle.includes(qNorm) ||
    pShortDesc.includes(qNorm) ||
    pFullDesc.includes(qNorm) ||
    pBrand.includes(qNorm) ||
    pCategory.includes(qNorm) ||
    pGuild.includes(qNorm) ||
    pTargetGuilds.some((tg) => tg.includes(qNorm)) ||
    pPain.includes(qNorm) ||
    pFeatures.some((f) => f.includes(qNorm)) ||
    pTags.some((t) => t.includes(qNorm))
  ) {
    return true;
  }

  // Check individual tokens
  if (qTokens.length > 0) {
    const matchesAllTokens = qTokens.every((token) =>
      pTitle.includes(token) ||
      pShortDesc.includes(token) ||
      pFullDesc.includes(token) ||
      pBrand.includes(token) ||
      pCategory.includes(token) ||
      pGuild.includes(token) ||
      pTargetGuilds.some((tg) => tg.includes(token)) ||
      pPain.includes(token) ||
      pFeatures.some((f) => f.includes(token)) ||
      pTags.some((t) => t.includes(token))
    );
    if (matchesAllTokens) return true;
  }

  return false;
}
