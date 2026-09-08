const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf-8');

// 1. Fix Imports
if (!content.includes('import { fetchChatsFromDb, saveChatToDb } from')) {
  content = content.replace("import { Order, Product, OrderStatus, Coupon, User } from '../types';", "import { Order, Product, OrderStatus, Coupon, User, ChatMessage, UserChat } from '../types';\\nimport { fetchChatsFromDb, saveChatToDb } from '../lib/dbService';");
}

if (!content.includes('MessageCircle,')) {
  content = content.replace("Users\\n} from 'lucide-react';", "Users, MessageCircle, Reply, ArrowLeft\\n} from 'lucide-react';");
}

// 2. Fix States
const stateStr = "  const [showZibalSecret, setShowZibalSecret] = useState(false);";
const newStates = `  const [showZibalSecret, setShowZibalSecret] = useState(false);
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

if (!content.includes('const [chats, setChats]')) {
  content = content.replace(stateStr, newStates);
}

fs.writeFileSync('src/components/AdminPanel.tsx', content);
