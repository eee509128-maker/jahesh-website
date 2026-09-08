import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
async function run() {
  const payload = {
      user_id: '123',
      user_name: 'erfan',
      messages: [{text: 'hello'}],
      last_updated: new Date().toISOString(),
      is_read_by_admin: false,
  };
  const { error } = await supabase.from('chats').upsert(payload);
  console.log("Error:", error);
}
run();
