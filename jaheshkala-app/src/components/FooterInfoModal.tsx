import React, { useState, useEffect } from 'react';
import {
  X, FileText, Globe, Phone, MapPin, ShieldCheck, CheckCircle2,
  ExternalLink, Copy, HelpCircle, ChevronLeft, Award, Sparkles,
  Info, AlertCircle, Send, Check
} from 'lucide-react';
import { FOOTER_TOPICS, FooterTopic } from '../data/footerInfoData';

interface FooterInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopicId?: string;
  onOpenTermsModal?: () => void;
}

export const FooterInfoModal: React.FC<FooterInfoModalProps> = ({
  isOpen,
  onClose,
  initialTopicId = 'terms',
  onOpenTermsModal,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    if (initialTopicId) {
      setSelectedTopicId(initialTopicId);
    }
  }, [initialTopicId, isOpen]);

  if (!isOpen) return null;

  const currentTopic = FOOTER_TOPICS.find((t) => t.id === selectedTopicId) || FOOTER_TOPICS[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Group topics by category
  const categories = Array.from(new Set(FOOTER_TOPICS.map((t) => t.category)));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#110b2a] border border-purple-200 dark:border-purple-800/80 rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-purple-200 dark:border-purple-900/60 bg-purple-50 dark:bg-[#160d36]">
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-600/30 border border-purple-300 dark:border-purple-500/40 flex items-center justify-center text-purple-700 dark:text-purple-300 shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                  اطلاعات و راهنمای جهش‌کالا
                </h3>
                <span className="text-[10px] bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200 px-2 py-0.5 rounded-full font-bold whitespace-nowrap shrink-0">
                  jaheshit.ir
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">مرکز خدمات مشتریان و راه‌های ارتباطی</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-100 hover:bg-rose-500 hover:text-white text-purple-900 dark:bg-purple-950 dark:hover:bg-rose-600 dark:text-slate-300 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer border border-purple-300 dark:border-purple-800 shadow-sm shrink-0 mr-2"
            title="بستن"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body: Sidebar + Main Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 bg-purple-50/50 dark:bg-[#0c0820] border-b md:border-b-0 md:border-l border-purple-200 dark:border-purple-900/40 p-3 overflow-y-auto space-y-3 shrink-0 max-h-48 md:max-h-none custom-scrollbar">
            {categories.map((cat) => (
              <div key={cat} className="space-y-1">
                <span className="text-[10px] font-bold text-purple-700 dark:text-purple-400 px-2 block">{cat}</span>
                <div className="space-y-1">
                  {FOOTER_TOPICS.filter((t) => t.category === cat).map((topic) => {
                    const isSelected = topic.id === currentTopic.id;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopicId(topic.id)}
                        className={`w-full text-right px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-purple-600 text-white shadow-sm font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-950/50 hover:text-purple-950 dark:hover:text-white'
                        }`}
                      >
                        <span className="truncate text-[11px]">{topic.title}</span>
                        {topic.badge && (
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded-md shrink-0 font-normal whitespace-nowrap ${
                              isSelected ? 'bg-purple-700 text-white' : 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-slate-400'
                            }`}
                          >
                            {topic.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-5 text-right custom-scrollbar">
            
            {/* Header of selected topic */}
            <div className="border-b border-purple-200 dark:border-purple-900/40 pb-3">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-800/40 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">
                  {currentTopic.category}
                </span>
                {currentTopic.badge && (
                  <span className="text-[11px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-full whitespace-nowrap">
                    {currentTopic.badge}
                  </span>
                )}
              </div>

              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">{currentTopic.title}</h2>
              <p className="text-xs text-slate-600 dark:text-purple-200/80 mt-0.5">{currentTopic.shortDesc}</p>
            </div>

            {/* Content list / paragraphs */}
            <div className="space-y-2.5">
              {currentTopic.content.map((paragraph, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-purple-50/70 dark:bg-[#170e38]/70 border border-purple-200 dark:border-purple-900/40 text-xs text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-purple-200 dark:bg-purple-900/80 text-purple-800 dark:text-purple-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="leading-normal">{paragraph}</p>
                </div>
              ))}
            </div>

            {/* Key Specifications Grid (Digikala style) */}
            {currentTopic.keyPoints && currentTopic.keyPoints.length > 0 && (
              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>نکات کلیدی و مشخصات رسمی:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentTopic.keyPoints.map((kp, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-purple-50 dark:bg-black/40 border border-purple-200 dark:border-purple-900/40 flex items-center justify-between text-xs gap-2"
                    >
                      <span className="text-slate-600 dark:text-slate-400 font-medium whitespace-nowrap">{kp.label}:</span>
                      <span className="text-slate-900 dark:text-white font-bold text-left truncate">{kp.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Special Highlight Box for Contact Info */}
            <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-gradient-to-r dark:from-purple-950/80 dark:via-[#180e3c] dark:to-purple-950/80 border border-purple-300 dark:border-purple-700/50 space-y-2.5 mt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-black text-purple-900 dark:text-amber-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span className="truncate">راه‌های ارتباطی و نشانی جهش</span>
                </div>
                <a
                  href="https://jaheshit.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white font-bold transition-colors whitespace-nowrap"
                >
                  <span>jaheshit.ir</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {/* Phone 1 */}
                <div className="p-2 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-1.5 truncate">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-[11px] whitespace-nowrap">تماس ۱:</span>
                    <a href="tel:09152331974" className="text-purple-900 dark:text-white font-mono font-bold hover:text-amber-500 text-xs">
                      09152331974
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy('09152331974', 'p1')}
                    className="text-[10px] text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white p-1 cursor-pointer font-bold flex items-center gap-1 shrink-0"
                    title="کپی شماره"
                  >
                    {copiedText === 'p1' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                {/* Phone 2 */}
                <div className="p-2 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-1.5 truncate">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-[11px] whitespace-nowrap">تماس ۲:</span>
                    <a href="tel:09155734267" className="text-purple-900 dark:text-white font-mono font-bold hover:text-amber-500 text-xs">
                      09155734267
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy('09155734267', 'p2')}
                    className="text-[10px] text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white p-1 cursor-pointer font-bold flex items-center gap-1 shrink-0"
                    title="کپی شماره"
                  >
                    {copiedText === 'p2' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              {/* Address */}
              <div className="p-2.5 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs shadow-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-bold text-[11px] whitespace-nowrap">شعبه یک:</span>
                  <span className="text-slate-900 dark:text-white text-[11px]">مشهد، خیام شمالی ۴۶، بین شکری ۱۳ و ۱۵، پلاک ۲۸۷</span>
                </div>
                <button
                  onClick={() => handleCopy('مشهد، خیام شمالی ۴۶، بین شکری ۱۳ و ۱۵، پلاک ۲۸۷', 'addr')}
                  className="flex items-center gap-1 text-[10px] px-2 py-1 rounded bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 text-purple-900 dark:text-purple-200 shrink-0 self-end sm:self-auto cursor-pointer font-bold whitespace-nowrap"
                >
                  {copiedText === 'addr' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>کپی شد</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>کپی نشانی</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
              {currentTopic.id === 'terms' && onOpenTermsModal && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenTermsModal();
                  }}
                  className="h-8 px-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>مشاهده توافق‌نامه رسمی</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="h-8 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold mr-auto active:scale-95 cursor-pointer whitespace-nowrap"
              >
                بستن پنجره
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
