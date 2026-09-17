import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
