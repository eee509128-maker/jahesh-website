const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf-8');

const oldState = `  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'new-product' | 'coupons' | 'integrations' | 'users'>('orders');`;
const newState = `  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'new-product' | 'coupons' | 'integrations' | 'users' | 'chats'>('orders');
  const [chats, setChats] = useState<UserChat[]>([]);
  const [selectedChat, setSelectedChat] = useState<UserChat | null>(null);
  const [replyText, setReplyText] = useState('');

  React.useEffect(() => {
    if (isOpen) {
      const loadChats = async () => {
        const data = await fetchChatsFromDb();
        setChats(data);
      };
      loadChats();
      const interval = setInterval(loadChats, 5000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleReply = async () => {
    if (!selectedChat || !replyText.trim()) return;
    const msg: ChatMessage = { id: Date.now().toString(), sender: 'support', text: replyText.trim(), time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) };
    const updatedChat = { ...selectedChat, messages: [...selectedChat.messages, msg], lastUpdated: new Date().toISOString(), isReadByAdmin: true };
    await saveChatToDb(updatedChat);
    setReplyText('');
    setChats(prev => prev.map(c => c.userId === selectedChat.userId ? updatedChat : c));
    setSelectedChat(updatedChat);
  };`;

content = content.replace(oldState, newState);

fs.writeFileSync('src/components/AdminPanel.tsx', content);
