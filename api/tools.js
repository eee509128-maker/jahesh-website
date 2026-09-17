import fs from 'fs';
import path from 'path';

const SUPABASE_URL = 'https://qxoyvlcpkysucmezxwdn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DVRGP68TwGwXrZP5OzzuRQ_wLOHOLSB';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Helper to get local tools.json
  const getLocalTools = () => {
    try {
      const localPath = path.join(process.cwd(), 'data', 'tools.json');
      if (fs.existsSync(localPath)) {
        const raw = fs.readFileSync(localPath, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return [];
  };

  // Helper to save local tools.json
  const saveLocalTools = (tools) => {
    try {
      const localPath = path.join(process.cwd(), 'data', 'tools.json');
      const dir = path.dirname(localPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(localPath, JSON.stringify(tools, null, 2), 'utf8');
    } catch {}
  };

  if (req.method === 'GET') {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/chats?user_id=eq.SYSTEM_CONFIG_TOOLS&select=messages`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0].messages) && data[0].messages.length > 0) {
          saveLocalTools(data[0].messages);
          return res.status(200).json(data[0].messages);
        }
      }
    } catch (err) {
      console.warn('API fetch tools from supabase failed:', err);
    }

    const localTools = getLocalTools();
    return res.status(200).json(localTools);
  }

  if (req.method === 'POST') {
    try {
      let toolsToSave = req.body;
      
      // If a single tool object was posted, merge it into the current list
      if (toolsToSave && !Array.isArray(toolsToSave) && typeof toolsToSave === 'object') {
        const singleTool = toolsToSave;
        let currentList = [];
        try {
          const resCurrent = await fetch(
            `${SUPABASE_URL}/rest/v1/chats?user_id=eq.SYSTEM_CONFIG_TOOLS&select=messages`,
            {
              headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
              },
            }
          );
          if (resCurrent.ok) {
            const data = await resCurrent.json();
            if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0].messages)) {
              currentList = data[0].messages;
            }
          }
        } catch {}

        if (currentList.length === 0) currentList = getLocalTools();

        const existingIdx = currentList.findIndex(t => String(t.id) === String(singleTool.id));
        if (existingIdx >= 0) {
          currentList[existingIdx] = { ...currentList[existingIdx], ...singleTool };
        } else {
          currentList.unshift({
            ...singleTool,
            id: singleTool.id || `tool_${Date.now()}`,
            order: currentList.length,
            isActive: singleTool.isActive !== false
          });
        }
        toolsToSave = currentList;
      }

      if (!Array.isArray(toolsToSave)) {
        return res.status(400).json({ error: 'Expected array of tools or tool object' });
      }

      // Save locally
      saveLocalTools(toolsToSave);

      // Save to Supabase
      const response = await fetch(`${SUPABASE_URL}/rest/v1/chats`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'resolution=merge-duplicates',
        },
        body: JSON.stringify({
          user_id: 'SYSTEM_CONFIG_TOOLS',
          user_name: 'تنظیمات ابزارهای داشبورد تکنولوژی جهش',
          messages: toolsToSave,
          last_updated: new Date().toISOString(),
          is_read_by_admin: true,
        }),
      });

      if (response.ok) {
        return res.status(200).json({ success: true, count: toolsToSave.length, tools: toolsToSave });
      } else {
        const errText = await response.text();
        console.warn('Supabase save tools error:', errText);
        // Even if Supabase failed, local save succeeded
        return res.status(200).json({ success: true, count: toolsToSave.length, localOnly: true });
      }
    } catch (err) {
      console.warn('API save tools failed:', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
