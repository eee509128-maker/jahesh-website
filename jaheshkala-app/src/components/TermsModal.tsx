import React, { useEffect } from 'react';
import { X, ShieldCheck, Check, AlertCircle, FileText } from 'lucide-react';
import { JAHESH_TERMS } from '../data/termsData';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAccepted: boolean;
  onToggleAccept: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
  isAccepted,
  onToggleAccept,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in cursor-default"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl bg-[#120c29] border border-purple-800/80 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[88vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/50 bg-[#170e34]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-300">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white">قوانین و ضوابط عمومی خرید از فروشگاه جهش‌کالا</h3>
              <p className="text-[11px] text-slate-400">مقررات ثبت سفارش، شیوه‌های پرداخت و ضمانت ۷ روزه بازگشت</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-950 hover:bg-purple-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="بستن پنجره قوانین"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-right">
          
          <div className="bg-purple-950/40 border border-purple-800/50 p-4 rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-purple-200 leading-relaxed">
              مشتری گرامی، ثبت سفارش در فروشگاه اینترنتی جهش‌کالا به منزله مطالعه دقیق و پذیرش ضوابط خرید آنلاین، ضمانت بازگشت و رویه‌های پرداخت درگاه شاپرک است.
            </p>
          </div>

          <div className="space-y-3.5">
            {JAHESH_TERMS.map((term) => (
              <div
                key={term.id}
                className="bg-[#181035] border border-purple-900/40 rounded-2xl p-3.5 sm:p-4 transition-all hover:border-purple-700/50"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="w-5 h-5 rounded-full bg-purple-900 text-purple-200 flex items-center justify-center text-[10px] font-bold shrink-0">
                      {term.id}
                    </span>
                    <span className="text-xs font-black text-white truncate">
                      {term.title}
                    </span>
                  </div>
                  {term.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300 border border-purple-700/30 whitespace-nowrap shrink-0">
                      {term.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pr-7">
                  {term.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Footer with acceptance */}
        <div className="px-6 py-4 bg-[#160d33] border-t border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <label className="flex items-center gap-3 cursor-pointer select-none text-xs text-white">
            <input
              type="checkbox"
              checked={isAccepted}
              onChange={onToggleAccept}
              className="w-5 h-5 rounded-md border-purple-600 text-purple-600 focus:ring-purple-500 focus:ring-offset-0 bg-[#0e0a22]"
            />
            <span className="font-bold">
              تمامی بندهای قوانین فوق را مطالعه نموده و شرایط همکاری با تیم جهش را می‌پذیرم.
            </span>
          </label>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition-all"
          >
            تایید و بازگشت به فاکتور
          </button>
        </div>

      </div>
    </div>
  );
};
