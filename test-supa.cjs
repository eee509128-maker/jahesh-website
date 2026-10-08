const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function check() {
  const { data, error } = await supabase.from('chats').select('*').eq('user_id', 'SYSTEM_CONFIG_PRODUCTS');
  if (error) console.error(error);
  if (data && data.length > 0) {
    const products = data[0].messages;
    console.log('Number of products in Supabase:', products.length);
    console.log('First product title:', products[0]?.title);
    console.log('Last updated:', data[0].last_updated);
  } else {
    console.log('No SYSTEM_CONFIG_PRODUCTS found in Supabase.');
  }
}
check();
