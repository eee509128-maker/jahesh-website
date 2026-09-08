import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
async function run() {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: 'erfanmoghaddammotagi@gmail.com',
  });
  console.log("OTP Data:", data);
  console.log("OTP Error:", error);
}
run();
