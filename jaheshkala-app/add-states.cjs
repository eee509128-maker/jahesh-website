const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf-8');

// Imports
content = content.replace("import { Trash2, PlusCircle, Package, Search, ShoppingCart, Sliders, Save, FileText, Ticket, ExternalLink, Settings, Users, Star, RefreshCw } from 'lucide-react';", "import { Trash2, PlusCircle, Package, Search, ShoppingCart, Sliders, Save, FileText, Ticket, ExternalLink, Settings, Users, Star, RefreshCw, MessageCircle, Reply, ArrowLeft } from 'lucide-react';\nimport { fetchChatsFromDb, saveChatToDb } from '../lib/dbService';\nimport { ChatMessage, UserChat } from '../types';");

// State
content = content.replace("  const [showZibalSecret, setShowZibalSecret] = useState(false);", "  const [showZibalSecret, setShowZibalSecret] = useState(false);\n  const [chats, setChats] = useState<UserChat[]>([]);\n  const [selectedChat, setSelectedChat] = useState<UserChat | null>(null);\n  const [replyText, setReplyText] = useState('');\n  \n  useEffect(() => {\n    if (isOpen) {\n      const loadChats = async () => {\n        const data = await fetchChatsFromDb();\n        setChats(data);\n      };\n      loadChats();\n      const interval = setInterval(loadChats, 5000);\n      return () => clearInterval(interval);\n    }\n  }, [isOpen]);\n  \n  const handleReply = async () => {\n    if (!selectedChat || !replyText.trim()) return;\n    const msg: ChatMessage = { id: Date.now().toString(), sender: 'support', text: replyText.trim(), time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) };\n    const updatedChat = { ...selectedChat, messages: [...selectedChat.messages, msg], lastUpdated: new Date().toISOString(), isReadByAdmin: true };\n    await saveChatToDb(updatedChat);\n    setReplyText('');\n    setChats(prev => prev.map(c => c.userId === selectedChat.userId ? updatedChat : c));\n    setSelectedChat(updatedChat);\n  };");

// Tab Button
const tabsEndStr = `          <button
            onClick={() => setActiveTab('users')}
            className={\`pb-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap \${
              activeTab === 'users'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-white'
            }\`}
          >
            <Users className="w-4 h-4" />
            <span>لیست کاربران سایت</span>
            <span className="bg-purple-900 text-purple-200 text-[10px] px-2 py-0.5 rounded-full">
              {usersList?.length || 0}
            </span>
          </button>
        </div>`;

const chatTab = `          <button
            onClick={() => setActiveTab('chats')}
            className={\`pb-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap \${
              activeTab === 'chats'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-white'
            }\`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>پشتیبانی کاربران</span>
            {chats.filter(c => !c.isReadByAdmin).length > 0 && (
              <span className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">
                {chats.filter(c => !c.isReadByAdmin).length}
              </span>
            )}
          </button>
        </div>`;

content = content.replace(tabsEndStr, tabsEndStr.replace("        </div>", chatTab));

fs.writeFileSync('src/components/AdminPanel.tsx', content);
