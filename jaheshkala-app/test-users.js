import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
async function run() {
  const payload = {
      id: '123',
      full_name: 'test',
      phone: 'test',
      username: 'test',
      password: '123',
      role: 'user',
      created_at: new Date().toISOString(),
  };
  const { error } = await supabase.from('users').upsert(payload);
  console.log("Error:", error);
}
run();
