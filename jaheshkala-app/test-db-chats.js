import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function run() {
  const { data: products } = await supabase.from('products').select('*');
  console.log('Fetched products count:', products?.length);
  if (products && products.length > 0) {
    const res = await supabase.from('chats').upsert({
      user_id: 'SYSTEM_CONFIG_PRODUCTS',
      user_name: 'تنظیمات محصولات فروشگاه',
      messages: products,
      last_updated: new Date().toISOString(),
      is_read_by_admin: true,
    }, { onConflict: 'user_id' });
    console.log('Upsert result:', res.error ? res.error.message : 'SUCCESS');
  }
}
run();


