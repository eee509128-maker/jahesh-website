const fs = require('fs');
let content = fs.readFileSync('dbService.ts', 'utf-8');
const oldCode = `      if (error) {
        const { gallery, is_incredible, incredible_expires_at, incredible_timer_duration, ...fallbackPayload } = payloadWithGallery;
        await supabase.from('products').upsert(fallbackPayload);
      }`;
const newCode = `      if (error) {
        const { 
          gallery, 
          is_incredible, 
          incredible_expires_at, 
          incredible_timer_duration,
          coupon_code,
          coupon_discount_percent,
          is_subscription,
          price_per_day,
          ...fallbackPayload 
        } = payloadWithGallery;
        const res = await supabase.from('products').upsert(fallbackPayload);
        if (res.error) console.error("Products fallback upsert error:", res.error);
      }`;
content = content.replace(oldCode, newCode);
fs.writeFileSync('dbService.ts', content, 'utf-8');
console.log('Fixed dbService.ts');
