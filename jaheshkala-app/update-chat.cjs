const fs = require('fs');

let content = fs.readFileSync('src/components/LiveChatWidget.tsx', 'utf-8');

// We need to inject `currentUser` prop and imports.
content = content.replace("import { ChatMessage } from '../types';", "import { ChatMessage, User as UserType } from '../types';\nimport { fetchChatsFromDb, saveChatToDb } from '../lib/dbService';\nimport { useEffect } from 'react';");

content = content.replace("export const LiveChatWidget: React.FC = () => {", "export const LiveChatWidget: React.FC<{ currentUser: UserType | null }> = ({ currentUser }) => {");

// Inject syncing logic
const syncLogic = `
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const syncChat = async () => {
      if (!currentUser || currentUser.role === 'admin') return;
      const allChats = await fetchChatsFromDb();
      const myChat = allChats.find(c => c.userId === currentUser.id);
      if (myChat && myChat.messages && myChat.messages.length > 0) {
        setMessages(myChat.messages);
      }
    };
    if (isOpen) {
      syncChat();
      interval = setInterval(syncChat, 5000);
    }
    return () => clearInterval(interval);
  }, [currentUser, isOpen]);

  const saveToDb = async (newMessages: ChatMessage[]) => {
    if (!currentUser || currentUser.role === 'admin') return;
    await saveChatToDb({
      userId: currentUser.id,
      userName: currentUser.fullName || currentUser.username,
      messages: newMessages,
      lastUpdated: new Date().toISOString(),
      isReadByAdmin: false
    });
  };
`;

content = content.replace("const [isOpen, setIsOpen] = useState(false);", "const [isOpen, setIsOpen] = useState(false);\n" + syncLogic);

// Update handleSend
const handleSendOld = `    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Automated smart reply`;

const handleSendNew = `    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    if (!textToSend) setInputMessage('');
    saveToDb(updatedMessages);

    // Automated smart reply`;

content = content.replace(handleSendOld, handleSendNew);

// update bot reply save
const botSaveOld = `      setMessages((prev) => [...prev, botMsg]);
    }, 600);`;
const botSaveNew = `      const finalMessages = [...updatedMessages, botMsg];
      setMessages(finalMessages);
      saveToDb(finalMessages);
    }, 600);`;

content = content.replace(botSaveOld, botSaveNew);

fs.writeFileSync('src/components/LiveChatWidget.tsx', content);
