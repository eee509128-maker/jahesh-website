const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkTables() {
  const testProduct = {
    id: 'test-product-' + Date.now(),
    title: 'تست محصول جدید',
    category: 'دیجیتال',
    price: 150000,
    created_at: new Date().toISOString()
  };
  const { data, error } = await supabase.from('products').insert([testProduct]).select();
  console.log('Insert into products:', { data, error });
  
  if (data && data.length) {
    await supabase.from('products').delete().eq('id', testProduct.id);
    console.log('Deleted test product');
  }
}

checkTables();
