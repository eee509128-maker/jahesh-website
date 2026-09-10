const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkTables() {
  const tables = ['products', 'orders', 'users', 'coupons', 'banners', 'zibal_settings'];
  for (const table of tables) {
    const { data, error } = await supabase.from(table).select('*').limit(1);
    console.log(`Table '${table}':`, error ? `ERROR: ${error.message} (${error.code})` : `FOUND (${data.length} rows)`);
  }
}

checkTables();
