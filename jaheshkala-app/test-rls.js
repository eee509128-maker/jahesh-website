import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
async function run() {
  const { data, error } = await supabase.from('chats').select('*');
  console.log("Select Error:", error);
  const { error: insertError } = await supabase.from('chats').upsert({ user_id: 'test' });
  console.log("Insert Error:", insertError);
}
run();
