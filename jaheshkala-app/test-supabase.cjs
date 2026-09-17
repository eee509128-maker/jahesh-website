const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function test() {
  const { data, error } = await supabase.from('banners').select('*');
  console.log("SELECT banners result:", { data, error });

  const testBanner = {
    id: "test-1",
    badge: "test",
    title: "Test Banner",
    subtitle: "Subtitle",
    cta: "CTA",
    action_type: "all",
    gradient: "from-[#3b1261] via-[#220d3d] to-[#0d071a]",
    image: "https://example.com/img.jpg",
    is_active: true,
  };
  const upsertRes = await supabase.from('banners').upsert(testBanner);
  console.log("UPSERT banners result:", upsertRes);
}

test();
