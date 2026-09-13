import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones, X, Send, Bot, User, CornerUpRight, Paperclip, Download,
  Sparkles, Loader2, Maximize2, Minimize2, ThumbsUp, ThumbsDown, Phone,
  Clock, ShieldCheck, Check, MessageSquare, ChevronLeft, ChevronRight,
  AlertCircle, UserCheck, RefreshCw
} from 'lucide-react';
import { ChatMessage, User as UserType, UserChat } from '../types';
import { fetchChatsFromDb, saveChatToDb, mergeChatMessages } from '../lib/dbService';
import { askCloudflareAI } from '../lib/cloudflareAI';

export const LiveChatWidget: React.FC<{ currentUser: UserType | null }> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [messageFeedback, setMessageFeedback] = useState<Record<string, 'like' | 'dislike'>>({});
  const [needsHumanSupport, setNeedsHumanSupport] = useState(false);
  const [hasHumanReplied, setHasHumanReplied] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [replyTarget, setReplyTarget] = useState<ChatMessage | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const questionsScrollRef = useRef<HTMLDivElement>(null);

  // Persistent User/Guest Identity
  const getUserId = () => {
    if (currentUser?.id) return currentUser.id;
    let guestId = localStorage.getItem('jahesh_guest_id');
    if (!guestId) {
      guestId = 'guest_' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem('jahesh_guest_id', guestId);
    }
    return guestId;
  };

  const getUserName = () => {
    if (currentUser?.fullName) return currentUser.fullName;
    if (currentUser?.username) return currentUser.username;
    let guestName = localStorage.getItem('jahesh_guest_name');
    if (!guestName) {
      guestName = 'کاربر مهمان #' + Math.floor(1000 + Math.random() * 9000);
      localStorage.setItem('jahesh_guest_name', guestName);
    }
    return guestName;
  };

  const currentUserId = getUserId();
  const currentUserName = getUserName();

  // Initial welcome message
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(`jahesh_chat_${currentUserId}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}

    return [
      {
        id: 'welcome-1',
        sender: 'support',
        text: `سلام ${currentUser ? currentUser.fullName : 'کاربر گرامی'}! 👋\nمن دستیار هوشمند جهش‌کالا هستم و ۲۴ ساعته پاسخگوی سوالات شما درباره پکیج‌های طراحی سایت، قیمت‌ها، دامنه، سئو و درگاه پرداخت هستم.\n\nدر صورتی که مایلید با کارشناس انسانی گفتگو کنید، روی «ارتباط مستقیم با کارشناس» بزنید.`,
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  const quickQuestions = [
    '🎧 ارتباط مستقیم با کارشناس پشتیبانی',
    'امکانات پکیج طلایی چیست؟',
    'دامنه رایگان به چه نامی ثبت می‌شود؟',
    'نحوه اتصال به درگاه پرداخت زیبال و شاپرک',
    'ضمانت رتبه ۱ گوگل و سئو اختصاصی',
    'شرایط قرارداد رسمی و بازگشت وجه',
    'پشتیبانی و هاست نامحدود رایگان',
    'مدت زمان تحویل سایت چقدر است؟',
    'آیا آموزش کامل پنل مدیریت داده می‌شود؟',
    'تفاوت پکیج نقره‌ای و طلایی در چیست؟'
  ];

  // Scroll quick questions horizontally
  const handleScrollQuestions = (direction: 'left' | 'right') => {
    if (questionsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      questionsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Convert vertical mouse wheel to horizontal scroll on chips container
  const handleQuestionsWheel = (e: React.WheelEvent) => {
    if (questionsScrollRef.current) {
      questionsScrollRef.current.scrollLeft += e.deltaY;
    }
  };

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isAiThinking, isOpen]);

  // Sync with DB and listen for Admin replies
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const syncChat = async () => {
      try {
        const allChats = await fetchChatsFromDb();
        const myChat = allChats.find(c => c.userId === currentUserId);
        if (myChat && myChat.messages && myChat.messages.length > 0) {
          setMessages((prevMsgs) => mergeChatMessages(prevMsgs, myChat.messages));
          setNeedsHumanSupport(!!myChat.needsHumanSupport);
          const hasHuman = myChat.messages.some((m: ChatMessage) => m.sender === 'support' && m.isHumanAdmin);
          setHasHumanReplied(hasHuman);
        }
      } catch (err) {
        console.warn('Sync chat error:', err);
      }
    };

    if (isOpen) {
      syncChat();
      interval = setInterval(syncChat, 12000);
    }

    const handleCustomEvent = (e: any) => {
      if (e.detail && e.detail.userId === currentUserId) {
        if (e.detail.messages) {
          setMessages((prevMsgs) => mergeChatMessages(prevMsgs, e.detail.messages));
          setNeedsHumanSupport(!!e.detail.needsHumanSupport);
          const hasHuman = e.detail.messages.some((m: ChatMessage) => m.sender === 'support' && m.isHumanAdmin);
          setHasHumanReplied(hasHuman);
        }
      }
    };

    window.addEventListener('jahesh-chats-updated', handleCustomEvent);

    return () => {
      clearInterval(interval);
      window.removeEventListener('jahesh-chats-updated', handleCustomEvent);
    };
  }, [currentUserId, isOpen]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleFeedback = (msgId: string, type: 'like' | 'dislike') => {
    setMessageFeedback(prev => ({ ...prev, [msgId]: type }));
    showToast(type === 'like' ? 'ممنون از بازخورد مثبت شما! 🙏' : 'نظر شما ثبت شد و هوش مصنوعی بهبود خواهد یافت.');
  };

  const persistChat = async (newMessages: ChatMessage[], humanSupportFlag: boolean) => {
    try {
      localStorage.setItem(`jahesh_chat_${currentUserId}`, JSON.stringify(newMessages));
    } catch {}

    const chatPayload: UserChat = {
      userId: currentUserId,
      userName: currentUserName,
      messages: newMessages,
      lastUpdated: new Date().toISOString(),
      isReadByAdmin: false,
      needsHumanSupport: humanSupportFlag,
    };

    await saveChatToDb(chatPayload);
  };

  // Connect to Human Specialist Flow
  const handleConnectHuman = async () => {
    setNeedsHumanSupport(true);
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: '🎧 درخواست اتصال مستقیم به کارشناس پشتیبانی جهش‌کالا',
      time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
    };

    const confirmMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'support',
      text: 'درخواست ارسال شد، در انتظار پاسخگویی کارشناس.',
      time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
    };

    const newMsgs = [...messages, userMsg, confirmMsg];
    setMessages(newMsgs);
    await persistChat(newMsgs, true);
    showToast('درخواست شما برای کارشناس پشتیبانی ارسال شد.');
  };

  // Main Send Handler (AI always answers, and escalates to Admin Panel if asked or stuck)
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

    const isExplicitHumanRequest = text.includes('ارتباط با کارشناس') ||
      text.includes('پشتیبان انسانی') ||
      text.includes('تماس تلفنی') ||
      text.includes('با انسان صحبت') ||
      text.includes('وصل کن کارشناس');

    if (isExplicitHumanRequest) {
      await handleConnectHuman();
      return;
    }

    // Save initial state to DB
    await persistChat(updatedMessages, needsHumanSupport);

    // AI Answers All Questions
    setIsAiThinking(true);
    try {
      const historyContext = updatedMessages.slice(-6).map(m => ({
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

      const shouldEscalate = aiResponse.escalateToAdmin || needsHumanSupport;
      if (aiResponse.escalateToAdmin) {
        setNeedsHumanSupport(true);
      }

      await persistChat(finalMessages, shouldEscalate);
    } catch (err) {
      console.error('Error handling AI reply:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'support',
        text: 'پیام شما دریافت شد. این سوال به دلیل نیاز به بررسی فنی در پنل مدیریت برای کارشناسان جهش‌کالا ثبت گردید تا به زودی پاسخ داده شود.\n📞 تماس فوری: ۰۹۱۵۲۳۳۱۹۷۴',
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };
      const finalMessages = [...updatedMessages, fallbackMsg];
      setMessages(finalMessages);
      setNeedsHumanSupport(true);
      await persistChat(finalMessages, true);
    } finally {
      setIsAiThinking(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button (Khanoumi / Digikala Support Icon) */}
      {!isOpen && (
        <div className="fixed bottom-4 left-3 sm:bottom-6 sm:left-6 z-40 flex items-center gap-2 animate-in fade-in">
          <button
            id="open-live-chat-btn"
            onClick={() => setIsOpen(true)}
            className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white flex items-center justify-center shadow-2xl shadow-purple-900/50 hover:scale-105 active:scale-95 transition-all border-2 border-white/40 cursor-pointer"
            aria-label="دستیار هوشمند و پشتیبانی"
            title="پشتیبانی آنلاین و دستیار هوشمند جهش‌کالا"
          >
            <Headphones className="w-6 h-6 text-white transition-transform group-hover:-rotate-12" />
            <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white dark:border-[#0f0926] animate-pulse"></span>
            
            <span className="hidden md:group-hover:inline-flex absolute right-full ml-0 mr-3 px-3 py-1.5 bg-slate-900/90 text-white text-xs rounded-xl whitespace-nowrap shadow-lg backdrop-blur-xs border border-purple-500/30">
              چت آنلاین و پشتیبانی
            </span>
          </button>
        </div>
      )}

      {/* Chat Window / Fullscreen Mobile View */}
      {isOpen && (
        <div
          className={`fixed z-50 flex flex-col bg-white dark:bg-[#0f0822] text-slate-900 dark:text-white transition-all shadow-2xl overflow-hidden ${
            isMaximized
              ? 'inset-0 w-full h-[100dvh] rounded-0'
              : 'inset-0 w-full h-[100dvh] sm:inset-auto sm:bottom-5 sm:left-5 sm:w-[450px] sm:max-w-[95vw] sm:h-[640px] sm:max-h-[88vh] sm:rounded-3xl sm:border sm:border-purple-200 sm:dark:border-purple-700/80'
          }`}
        >
          {/* Toast Notification */}
          {toastMessage && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-60 bg-purple-900/95 text-white text-xs px-4 py-2.5 rounded-2xl shadow-xl border border-purple-400 animate-in fade-in slide-in-from-top-2 text-center max-w-[90%]">
              {toastMessage}
            </div>
          )}

          {/* Top Header */}
          <div className="bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-950 text-white px-4 py-3 sm:py-3.5 flex items-center justify-between shadow-md shrink-0 border-b border-purple-700/50">
            {/* Right: Bot / Agent Brand & Status */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-md border border-white/20 ${
                  hasHumanReplied
                    ? 'bg-gradient-to-tr from-emerald-600 to-teal-700'
                    : 'bg-gradient-to-tr from-pink-500 to-purple-600'
                }`}>
                  {hasHumanReplied ? <UserCheck className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-purple-950"></span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-white leading-tight">
                    {hasHumanReplied ? 'پشتیبانی آنلاین جهش‌کالا' : 'دستیار هوشمند جهش‌کالا'}
                  </h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium border ${
                    hasHumanReplied
                      ? 'bg-emerald-500/30 text-emerald-200 border-emerald-400/40'
                      : 'bg-pink-500/30 text-pink-200 border-pink-400/30'
                  }`}>
                    {hasHumanReplied ? 'کارشناس آنلاین' : 'AI'}
                  </span>
                </div>
                <p className="text-[11px] text-purple-200 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>
                    {hasHumanReplied
                      ? 'پاسخ مستقیم کارشناس واحد پشتیبانی'
                      : needsHumanSupport
                      ? 'ثبت‌شده در پنل مدیریت | آماده پاسخگویی هوشمند'
                      : 'پاسخگوی ۲۴ ساعته و اتصال به کارشناسان'}
                  </span>
                </p>
              </div>
            </div>

            {/* Left: Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsMaximized(!isMaximized)}
                className="hidden sm:flex w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors cursor-pointer"
                title={isMaximized ? 'کوچک کردن' : 'تمام صفحه'}
                aria-label="تغییر اندازه پنجره چت"
              >
                {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="بستن چت"
                title="بستن چت"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Persistent Human Support Status Bar if requested */}
          {needsHumanSupport && !hasHumanReplied && (
            <div className="bg-amber-950/80 border-b border-amber-500/40 px-3.5 py-2 flex items-center justify-between text-[11px] text-amber-200 shrink-0">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse" />
                <span>درخواست گفتگوی زنده با کارشناس در پنل مدیریت ثبت گردید.</span>
              </div>
              <span className="bg-amber-500/30 text-amber-300 font-bold px-2 py-0.5 rounded-full text-[10px] shrink-0">
                در انتظار کارشناس
              </span>
            </div>
          )}

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 text-right bg-slate-50 dark:bg-[#0c071e] transition-colors relative">
            
            <div className="flex justify-center my-1">
              <span className="text-[10px] px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-900 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40 font-medium">
                امروز | گفتگوی اختصاصی
              </span>
            </div>

            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              const isHumanAdmin = !isUser && !!msg.isHumanAdmin;

              return (
                <div
                  key={msg.id}
                  className={`flex gap-2 text-xs group ${
                    isUser ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Sender Avatar */}
                  <div
                    className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center shadow-xs ${
                      isUser
                        ? 'bg-purple-600 text-white'
                        : isHumanAdmin
                        ? 'bg-gradient-to-tr from-emerald-600 to-teal-700 text-white ring-2 ring-emerald-400/40'
                        : 'bg-gradient-to-tr from-pink-600 to-purple-700 text-white'
                    }`}
                  >
                    {isUser ? <User className="w-4 h-4" /> : isHumanAdmin ? <UserCheck className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message Bubble Card */}
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] p-3 sm:p-3.5 rounded-2xl flex flex-col shadow-xs transition-colors ${
                      isUser
                        ? 'bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-tr-none'
                        : isHumanAdmin
                        ? 'bg-emerald-950/30 dark:bg-[#0e2a22] text-slate-900 dark:text-slate-100 border border-emerald-500/60 rounded-tl-none'
                        : 'bg-white dark:bg-[#191038] text-slate-900 dark:text-slate-100 border border-purple-100 dark:border-purple-800/60 rounded-tl-none'
                    }`}
                  >
                    {/* Header tag for Human Admin */}
                    {isHumanAdmin && (
                      <div className="mb-1.5 pb-1 border-b border-emerald-500/30 flex items-center justify-between text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                        <span className="flex items-center gap-1">
                          <UserCheck className="w-3 h-3" />
                          <span>{msg.senderTitle || 'کارشناس پشتیبانی جهش‌کالا (پاسخ انسانی)'}</span>
                        </span>
                        <span className="bg-emerald-500/20 px-1.5 py-0.2 rounded text-[9px]">تایید شده ✓</span>
                      </div>
                    )}

                    {/* Quoted reply banner */}
                    {msg.replyTo && (
                      <div className={`mb-2 p-2 rounded-xl text-[10px] border-r-4 ${
                        isUser
                          ? 'bg-black/20 border-white/60 text-white'
                          : 'bg-purple-50 dark:bg-purple-950/60 border-purple-600 text-purple-900 dark:text-purple-200'
                      }`}>
                        <span className="font-bold block opacity-90 mb-0.5">
                          {msg.replyTo.sender === 'user' ? 'شما' : 'پشتیبانی'}:
                        </span>
                        <p className="truncate line-clamp-1">{msg.replyTo.text}</p>
                      </div>
                    )}

                    {/* Attached file/image sent by admin */}
                    {msg.file && (
                      <div className="mb-2">
                        {msg.file.type === 'image' ? (
                          <div className="rounded-xl overflow-hidden border border-purple-200 dark:border-white/20">
                            <img
                              src={msg.file.url}
                              alt={msg.file.name}
                              className="w-full max-h-48 object-cover cursor-pointer hover:opacity-95"
                              onClick={() => window.open(msg.file?.url, '_blank')}
                            />
                            <div className="flex items-center justify-between p-1 bg-black/40 text-white text-[9px] mt-0.5">
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
                            className="flex items-center gap-2 p-2 rounded-xl bg-purple-50 dark:bg-black/30 hover:bg-purple-100 dark:hover:bg-black/40 border border-purple-200 dark:border-white/20 text-purple-950 dark:text-white transition-colors"
                          >
                            <Paperclip className="w-3.5 h-3.5 text-purple-600 dark:text-amber-300 shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="font-bold truncate text-[10px]">{msg.file.name}</p>
                              <span className="text-[9px] opacity-70">{msg.file.sizeText}</span>
                            </div>
                            <Download className="w-3 h-3 opacity-80 shrink-0" />
                          </a>
                        )}
                      </div>
                    )}

                    {/* Text Body */}
                    {msg.text && (
                      <div className="leading-relaxed whitespace-pre-line text-xs sm:text-[13px] font-normal">
                        {msg.text}
                      </div>
                    )}

                    {/* Specialist Call Quick-action Buttons if message contains contact numbers */}
                    {!isUser && (msg.text?.includes('۰۹۱۵۲۳۳۱۹۷۴') || msg.text?.includes('09152331974') || msg.text?.includes('09364864663') || msg.text?.includes('۰۹۳۶۴۸۶۴۶۶۳')) && (
                      <div className="mt-2.5 pt-2 border-t border-purple-100 dark:border-purple-800/40 flex flex-wrap gap-1.5">
                        <a
                          href="tel:09152331974"
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold shadow-xs transition-transform active:scale-95"
                        >
                          <Phone className="w-3 h-3" />
                          <span>تماس: 09152331974</span>
                        </a>
                        <a
                          href="tel:09364864663"
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-purple-700 hover:bg-purple-600 text-white text-[11px] font-bold shadow-xs transition-transform active:scale-95"
                        >
                          <Phone className="w-3 h-3" />
                          <span>تماس: 09364864663</span>
                        </a>
                      </div>
                    )}

                    {/* Bottom Metadata & Feedback Row */}
                    <div className={`flex items-center justify-between mt-2 text-[10px] ${
                      isUser ? 'text-purple-100' : 'text-slate-500 dark:text-slate-400'
                    }`}>
                      {!isUser ? (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleFeedback(msg.id, 'like')}
                            className={`p-1 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors cursor-pointer ${
                              messageFeedback[msg.id] === 'like' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''
                            }`}
                            title="پاسخ مفید بود"
                          >
                            <ThumbsUp className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleFeedback(msg.id, 'dislike')}
                            className={`p-1 rounded-md hover:bg-rose-100 dark:hover:bg-rose-950/50 transition-colors cursor-pointer ${
                              messageFeedback[msg.id] === 'dislike' ? 'text-rose-600 dark:text-rose-400 font-bold' : ''
                            }`}
                            title="پاسخ نامناسب بود"
                          >
                            <ThumbsDown className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setReplyTarget(msg)}
                            className="text-[10px] text-purple-700 dark:text-purple-300 hover:underline flex items-center gap-0.5 ml-1"
                          >
                            <CornerUpRight className="w-3 h-3" />
                            <span>پاسخ</span>
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-purple-200" />
                          <span>ارسال شد</span>
                        </div>
                      )}

                      <span className="font-mono text-[9px]">{msg.time}</span>
                    </div>

                  </div>
                </div>
              );
            })}

            {/* AI Thinking Animation */}
            {isAiThinking && (
              <div className="flex gap-2 text-xs flex-row animate-in fade-in">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-600 to-purple-700 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
                  <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
                </div>
                <div className="bg-white dark:bg-[#1a1139] border border-purple-200 dark:border-purple-800/60 p-3 rounded-2xl rounded-tl-none text-slate-800 dark:text-purple-200 flex items-center gap-2 text-xs shadow-xs">
                  <Loader2 className="w-4 h-4 animate-spin text-purple-600 dark:text-amber-400" />
                  <span className="font-medium">دستیار هوشمند در حال پاسخگویی...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Human Support Request Action Bar */}
          <div className="px-3 py-1.5 bg-slate-100/90 dark:bg-[#120a2e] border-t border-purple-200 dark:border-purple-800/40 flex items-center justify-between">
            <button
              id="chat-connect-human-btn"
              type="button"
              onClick={handleConnectHuman}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 text-white text-xs font-bold shadow-sm transition-all hover:scale-102 active:scale-95 cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Headphones className="w-3 h-3 text-white" />
              </div>
              <span>ارتباط مستقیم با کارشناس</span>
            </button>
            
            <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
              <Clock className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              <span>پاسخگویی ۹ الی ۲۱</span>
            </div>
          </div>

          {/* Reply Banner */}
          {replyTarget && (
            <div className="px-3 py-2 bg-purple-50 dark:bg-[#180f38] border-t border-purple-200 dark:border-purple-800/60 flex items-center justify-between text-xs text-purple-900 dark:text-purple-200">
              <div className="flex items-center gap-2 min-w-0">
                <CornerUpRight className="w-3.5 h-3.5 text-purple-700 dark:text-amber-400 shrink-0" />
                <div className="truncate">
                  <span className="font-bold text-purple-800 dark:text-amber-300 text-[10px] block">
                    پاسخ به {replyTarget.sender === 'user' ? 'پیام خودتان' : 'پشتیبانی'}:
                  </span>
                  <span className="text-[10px] text-slate-700 dark:text-slate-300 truncate block">
                    {replyTarget.text || (replyTarget.file ? `[فایل: ${replyTarget.file.name}]` : '')}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setReplyTarget(null)}
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Quick Questions Pills with Smooth Horizontal Scroll Buttons & Mouse Wheel Support */}
          <div className="relative bg-slate-50 dark:bg-[#140b30] border-t border-purple-200 dark:border-purple-800/40 flex items-center px-1 py-1.5">
            {/* Scroll Right (Previous) Button */}
            <button
              type="button"
              onClick={() => handleScrollQuestions('right')}
              title="مشاهده نمونه سوالات قبلی"
              className="w-7 h-7 rounded-full bg-white dark:bg-purple-900/90 text-purple-800 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-800 border border-purple-200 dark:border-purple-700/60 flex items-center justify-center shrink-0 shadow-xs cursor-pointer transition-all z-10 mx-0.5"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={questionsScrollRef}
              onWheel={handleQuestionsWheel}
              className="flex-1 flex gap-1.5 overflow-x-auto text-[11px] whitespace-nowrap scroll-smooth px-1 py-1 no-scrollbar select-none"
            >
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (q.includes('کارشناس')) {
                      handleConnectHuman();
                    } else {
                      handleSend(q);
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-purple-950/80 hover:bg-purple-100 dark:hover:bg-purple-900 text-purple-950 dark:text-purple-100 border border-purple-200 dark:border-purple-700/60 transition-colors text-[11px] font-semibold shadow-xs cursor-pointer shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Scroll Left (Next) Button */}
            <button
              type="button"
              onClick={() => handleScrollQuestions('left')}
              title="مشاهده نمونه سوالات بعدی"
              className="w-7 h-7 rounded-full bg-white dark:bg-purple-900/90 text-purple-800 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-800 border border-purple-200 dark:border-purple-700/60 flex items-center justify-center shrink-0 shadow-xs cursor-pointer transition-all z-10 mx-0.5"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Input Bar (Guaranteed High Contrast in Light & Dark mode) */}
          <div className="p-3 bg-white dark:bg-[#180f38] border-t border-purple-200 dark:border-purple-700/60 flex items-center gap-2">
            <div className="flex-1 relative flex items-center bg-slate-100 dark:bg-[#110927] border border-purple-300 dark:border-purple-700/70 rounded-2xl overflow-hidden focus-within:border-purple-600 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
              <input
                id="live-chat-input"
                type="text"
                placeholder="پیام یا سوال خود را اینجا بنویسید..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                className="w-full bg-transparent py-2.5 px-3.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none text-right font-medium"
              />
            </div>

            {/* Send Button */}
            <button
              id="send-chat-message-btn"
              type="button"
              onClick={() => handleSend()}
              disabled={!inputMessage.trim()}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 disabled:opacity-40 text-white flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
              aria-label="ارسال پیام"
              title="ارسال پیام"
            >
              <Send className="w-4 h-4 rotate-180 text-white" />
            </button>
          </div>

          {/* Footer Sub-brand label */}
          <div className="py-1 px-3 bg-slate-50 dark:bg-[#0c071e] text-center text-[9px] text-slate-500 dark:text-slate-500 border-t border-purple-100 dark:border-purple-900/30">
            پشتیبانی هوشمند و آنلاین جهش‌کالا
          </div>

        </div>
      )}
    </>
  );
};
