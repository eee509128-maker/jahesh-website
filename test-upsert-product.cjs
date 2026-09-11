const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://qxoyvlcpkysucmezxwdn.supabase.co', 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB');
async function run() {
  const payloadWithGallery = {
    id: "test-prod-123",
    title: "Test",
    price: 1000,
  };
  const { error } = await supabase.from('products').upsert(payloadWithGallery);
  console.log("Upsert 1 error:", error);
}
run();
