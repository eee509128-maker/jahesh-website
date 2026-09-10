const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/chats?user_id=eq.SYSTEM_CONFIG_BANNERS&select=messages`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0].messages)) {
          return res.status(200).json(data[0].messages);
        }
      }
    } catch (err) {
      console.warn('API fetch banners from supabase failed:', err);
    }
    return res.status(200).json([]);
  }

  if (req.method === 'POST') {
    try {
      const banners = req.body;
      const response = await fetch(`${SUPABASE_URL}/rest/v1/chats`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'resolution=merge-duplicates',
        },
        body: JSON.stringify({
          user_id: 'SYSTEM_CONFIG_BANNERS',
          user_name: 'تنظیمات بنرهای اسلایدر سایت',
          messages: banners,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        }),
      });
      if (response.ok) {
        return res.status(200).json({ success: true, count: banners.length });
      }
    } catch (err) {
      console.warn('API save banners to supabase failed:', err);
    }
    return res.status(500).json({ success: false });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
