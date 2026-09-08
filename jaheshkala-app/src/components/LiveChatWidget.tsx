import React, { useState, useEffect } from 'react';
import { Headphones, X, Send, Bot, User, CornerUpRight, Paperclip, Download, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage, User as UserType } from '../types';
import { fetchChatsFromDb, saveChatToDb } from '../lib/dbService';
import { askCloudflareAI } from '../lib/cloudflareAI';

export const LiveChatWidget: React.FC<{ currentUser: UserType | null }> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);

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

  const saveToDb = async (newMessages: ChatMessage[], needsHumanSupport: boolean = false) => {
    if (!currentUser || currentUser.role === 'admin') return;
    await saveChatToDb({
      userId: currentUser.id,
      userName: currentUser.fullName || currentUser.username,
      messages: newMessages,
      lastUpdated: new Date().toISOString(),
      isReadByAdmin: false,
      needsHumanSupport: needsHumanSupport
    });
  };

  const [inputMessage, setInputMessage] = useState('');
  const [replyTarget, setReplyTarget] = useState<ChatMessage | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'support',
      text: 'سلام! چطور می‌توانم کمکتان کنم؟',
      time: 'هم‌اکنون'
    }
  ]);

  const quickQuestions = [
    'امکانات پکیج طلایی چیست؟',
    'دامنه رایگان به چه نامی است؟',
    'نحوه اتصال درگاه زیبال',
    'ضمانت رتبه ۱ گوگل'
  ];

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      ...(replyTarget ? {
        replyTo: {
          id: replyTarget.id,
          text: replyTarget.text || (replyTarget.file ? `[فایل: ${replyTarget.file.name}]` : ''),
          sender: replyTarget.sender
        }
      } : {})
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    if (!textToSend) setInputMessage('');
    setReplyTarget(null);
    saveToDb(updatedMessages);

    // Call Cloudflare AI (Workers AI - Meta Llama 3.1)
    setIsAiThinking(true);
    try {
      // Build brief chat history
      const historyContext = messages.slice(-4).map(m => ({
        role: (m.sender === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
        content: m.text
      }));

      const aiResponse = await askCloudflareAI(text, historyContext);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'support',
        text: aiResponse.reply,
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };

      const finalMessages = [...updatedMessages, botMsg];
      setMessages(finalMessages);
      saveToDb(finalMessages, aiResponse.escalateToAdmin);
    } catch (err) {
      console.error('Error handling AI reply:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'support',
        text: 'پیام شما دریافت شد. این مورد برای بررسی به همکاران واحد پشتیبانی ارجاع گردید و به زودی پاسخ شما پیگیری خواهد شد.',
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };
      const finalMessages = [...updatedMessages, fallbackMsg];
      setMessages(finalMessages);
      saveToDb(finalMessages, true);
    } finally {
      setIsAiThinking(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-3 sm:bottom-5 sm:left-5 z-40">
      {/* Floating Toggle Button - ONLY a clean support icon as requested */}
      {!isOpen && (
        <button
          id="open-live-chat-btn"
          onClick={() => setIsOpen(true)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center justify-center shadow-xl shadow-purple-950/80 transition-all hover:scale-110 active:scale-95 border border-purple-400/30"
          aria-label="پشتیبانی"
          title="پشتیبانی"
        >
          <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 rounded-full border-2 border-[#0b0819]"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-24px)] max-w-[360px] h-[450px] sm:h-[480px] bg-[#120b29] border border-purple-700/80 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 preserve-contrast dark-surface">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-950 p-3.5 border-b border-purple-600/50 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-950 border border-purple-400/40 flex items-center justify-center text-purple-200">
                <Headphones className="w-4 h-4 text-amber-300" />
              </div>
              <div className="text-right">
                <h4 className="text-xs font-bold leading-tight" style={{ color: '#ffffff' }}>پشتیبانی آنلاین</h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px]" style={{ color: '#d8b4fe' }}>پاسخگوی شما هستیم</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="بستن چت"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-right bg-[#0f0822]/90">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 text-xs group ${
                  msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center ${
                    msg.sender === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-indigo-900 text-amber-300 border border-indigo-700'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-amber-300" />}
                </div>

                <div
                  className={`max-w-[80%] p-3 rounded-2xl flex flex-col ${
                    msg.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-tr-none shadow-md'
                      : 'bg-[#1e1342] border border-purple-700/60 rounded-tl-none shadow-sm'
                  }`}
                  style={{ color: msg.sender === 'user' ? '#ffffff' : '#f1ecfa' }}
                >
                  {/* Quoted reply banner */}
                  {msg.replyTo && (
                    <div className={`mb-2 p-2 rounded-xl text-[10px] border-r-4 ${
                      msg.sender === 'user'
                        ? 'bg-black/30 border-purple-300 text-purple-100'
                        : 'bg-black/40 border-amber-400 text-amber-200'
                    }`}>
                      <span className="font-bold block opacity-80 mb-0.5">
                        {msg.replyTo.sender === 'user' ? 'شما' : 'پشتیبانی'}:
                      </span>
                      <p className="truncate line-clamp-1">{msg.replyTo.text}</p>
                    </div>
                  )}

                  {/* Attached file/image sent by admin */}
                  {msg.file && (
                    <div className="mb-2">
                      {msg.file.type === 'image' ? (
                        <div className="rounded-xl overflow-hidden border border-white/20">
                          <img
                            src={msg.file.url}
                            alt={msg.file.name}
                            className="w-full max-h-48 object-cover cursor-pointer hover:opacity-95"
                            onClick={() => window.open(msg.file?.url, '_blank')}
                          />
                          <div className="flex items-center justify-between p-1 bg-black/40 text-[9px] mt-0.5">
                            <span className="truncate max-w-[140px]">{msg.file.name}</span>
                            <span className="opacity-70">{msg.file.sizeText}</span>
                          </div>
                        </div>
                      ) : (
                        <a
                          href={msg.file.url}
                          download={msg.file.name}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-2 rounded-xl bg-black/30 hover:bg-black/40 border border-white/20 text-white transition-colors"
                        >
                          <Paperclip className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-bold truncate text-[10px]">{msg.file.name}</p>
                            <span className="text-[9px] opacity-70">{msg.file.sizeText}</span>
                          </div>
                          <Download className="w-3 h-3 opacity-80 shrink-0" />
                        </a>
                      )}
                    </div>
                  )}

                  {msg.text && (
                    <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                  )}

                  <div className="flex items-center justify-between mt-1 text-[9px] opacity-60">
                    <button
                      type="button"
                      onClick={() => setReplyTarget(msg)}
                      className="opacity-0 group-hover:opacity-100 hover:text-amber-300 flex items-center gap-1 transition-opacity text-[10px]"
                      title="پاسخ به این پیام"
                    >
                      <CornerUpRight className="w-3 h-3" />
                      <span>پاسخ</span>
                    </button>
                    <span>{msg.time}</span>
                  </div>
                </div>
              </div>
            ))}

            {isAiThinking && (
              <div className="flex gap-2 text-xs flex-row animate-in fade-in">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="bg-[#1a1139] border border-purple-800/60 p-2.5 rounded-2xl rounded-tl-none text-purple-200 flex items-center gap-2 text-[11px]">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  <span>دستیار هوشمند در حال بررسی و پاسخ...</span>
                </div>
              </div>
            )}
          </div>

          {/* Reply Banner */}
          {replyTarget && (
            <div className="px-3 py-2 bg-[#180f38] border-t border-purple-800/60 flex items-center justify-between text-xs text-purple-200">
              <div className="flex items-center gap-2 min-w-0">
                <CornerUpRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div className="truncate">
                  <span className="font-bold text-amber-300 text-[10px] block">
                    پاسخ به {replyTarget.sender === 'user' ? 'پیام خودتان' : 'پشتیبانی'}:
                  </span>
                  <span className="text-[10px] text-slate-300 truncate block">
                    {replyTarget.text || (replyTarget.file ? `[فایل: ${replyTarget.file.name}]` : '')}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setReplyTarget(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Quick Questions Pills */}
          <div className="px-3 py-2 bg-[#170e36] border-t border-purple-700/50 flex gap-1.5 overflow-x-auto text-[11px] whitespace-nowrap no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 rounded-lg bg-purple-900/90 hover:bg-purple-800 border border-purple-500/50 text-purple-100 hover:text-white transition-colors text-[10px] font-medium shadow-sm"
                style={{ color: '#f3e8ff' }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-2.5 bg-[#190f3a] border-t border-purple-700/60 flex items-center gap-2">
            <input
              type="text"
              placeholder="پیام خود را بنویسید..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="flex-1 bg-black/60 border border-purple-600/70 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 text-right"
              style={{ color: '#ffffff' }}
            />
            <button
              onClick={() => handleSend()}
              className="w-9 h-9 rounded-xl bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-colors shadow-lg shrink-0"
              aria-label="ارسال پیام"
            >
              <Send className="w-3.5 h-3.5 rotate-180 text-white" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
