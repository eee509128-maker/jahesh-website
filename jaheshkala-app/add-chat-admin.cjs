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

// Tab Content
const usersTabContentEnd = `                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};`;

const chatsTabContent = `          {activeTab === 'chats' && (
            <div className="flex h-[500px] gap-4 bg-[#130b2e] rounded-2xl border border-purple-900/40 p-4 overflow-hidden">
              {/* Chat List */}
              <div className="w-1/3 border-l border-purple-900/50 pl-4 flex flex-col h-full overflow-hidden">
                <h3 className="text-sm font-bold text-white mb-4">گفتگوها</h3>
                <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                  {chats.sort((a, b) => (a.isReadByAdmin === b.isReadByAdmin ? 0 : a.isReadByAdmin ? 1 : -1)).map(chat => (
                    <button
                      key={chat.userId}
                      onClick={() => {
                        setSelectedChat(chat);
                        if (!chat.isReadByAdmin) {
                           const updated = { ...chat, isReadByAdmin: true };
                           saveChatToDb(updated);
                           setChats(prev => prev.map(c => c.userId === chat.userId ? updated : c));
                        }
                      }}
                      className={\`w-full text-right p-3 rounded-xl border transition-all \${selectedChat?.userId === chat.userId ? 'bg-purple-900/50 border-purple-500/50' : 'bg-purple-950/20 border-purple-900/30 hover:bg-purple-900/30'}\`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-white">{chat.userName}</span>
                        {!chat.isReadByAdmin && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
                      </div>
                      <p className="text-[10px] text-slate-400 truncate">{chat.messages[chat.messages.length - 1]?.text}</p>
                    </button>
                  ))}
                  {chats.length === 0 && (
                    <p className="text-xs text-slate-500 text-center mt-10">هیچ گفتگویی وجود ندارد.</p>
                  )}
                </div>
              </div>
              
              {/* Chat Window */}
              <div className="w-2/3 flex flex-col h-full relative">
                {selectedChat ? (
                  <>
                    <div className="pb-3 border-b border-purple-900/40 mb-3 flex items-center justify-between">
                       <h3 className="text-sm font-bold text-amber-300">{selectedChat.userName}</h3>
                       <button onClick={() => setSelectedChat(null)} className="text-slate-400 hover:text-white"><ArrowLeft className="w-4 h-4" /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar flex flex-col">
                      {selectedChat.messages.map(msg => (
                        <div key={msg.id} className={\`max-w-[80%] p-3 rounded-2xl text-xs \${msg.sender === 'user' ? 'bg-purple-900/40 border border-purple-800/40 text-slate-200 self-start rounded-tr-none' : 'bg-indigo-600 text-white self-end rounded-tl-none shadow-md'}\`}>
                           <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                           <span className="text-[9px] opacity-60 block mt-1 text-left">{msg.time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-purple-900/40 flex gap-2">
                       <input 
                         type="text" 
                         value={replyText} 
                         onChange={e => setReplyText(e.target.value)} 
                         onKeyDown={e => e.key === 'Enter' && handleReply()}
                         placeholder="پاسخ خود را بنویسید..." 
                         className="flex-1 bg-black/40 border border-purple-800/60 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500" 
                       />
                       <button onClick={handleReply} className="px-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl flex items-center justify-center transition-colors">
                         <Reply className="w-4 h-4" />
                       </button>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
                    <MessageCircle className="w-12 h-12 mb-3 opacity-20" />
                    <p className="text-xs">یک گفتگو را برای مشاهده و پاسخ انتخاب کنید.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};`;

content = content.replace(usersTabContentEnd, usersTabContentEnd.replace("          )}\n        </div>", "          )}\n" + chatsTabContent));

fs.writeFileSync('src/components/AdminPanel.tsx', content);
