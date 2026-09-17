import { GUILD_SOLUTIONS_PRODUCTS } from './src/data/guildProducts.ts';
import { INITIAL_PRODUCTS } from './src/data/initialData.ts';
import { isProductMatchingCategoryOrGuild, findGuildByQuery } from './src/lib/guildMatcher.ts';
import { IRANIAN_GUILDS } from './src/data/guildsData.ts';

const allProducts = [...INITIAL_PRODUCTS, ...GUILD_SOLUTIONS_PRODUCTS];

console.log('Total products:', allProducts.length);

for (const g of IRANIAN_GUILDS) {
  const matches = allProducts.filter(p => isProductMatchingCategoryOrGuild(p, g.shortName));
  const badMatches = matches.filter(p => {
    const rawGuild = (p as any).guild || (p as any).targetGuild;
    if (!rawGuild) return true; // untagged product leaked!
    const pGuildObj = findGuildByQuery(rawGuild);
    return pGuildObj?.id !== g.id;
  });
  if (badMatches.length > 0) {
    console.log(`\nGuild: [${g.shortName}] (id: ${g.id}) total: ${matches.length}, leaked: ${badMatches.length}`);
    badMatches.forEach(p => console.log(`  -> BAD: [${p.id}] "${p.title}" | guild: "${(p as any).guild}" | cat: "${p.category}"`));
  } else {
    console.log(`Guild: [${g.shortName}] OK: ${matches.length} products (all strictly match)`);
  }
}

