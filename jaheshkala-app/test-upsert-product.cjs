const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://qxoyvlcpkysucmezxwdn.supabase.co', 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB');
async function run() {
  const { data } = await supabase.from('products').select('*').limit(1);
  console.log(Object.keys(data[0]));
}
run();
