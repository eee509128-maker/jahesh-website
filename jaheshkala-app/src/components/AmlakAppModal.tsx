import React from 'react';
import { X, ExternalLink, ShieldCheck, Sparkles, Building2, Smartphone, Database, CheckCircle2 } from 'lucide-react';
import { User } from '../types';

interface AmlakAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
}

export const AmlakAppModal: React.FC<AmlakAppModalProps> = ({
  isOpen,
  onClose,
  currentUser,
}) => {
  if (!isOpen) return null;

  const launchUrl = `/amlak.html?auth=direct&user=${encodeURIComponent(currentUser?.fullName || currentUser?.username || 'کاربر جهش')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-6xl h-[92vh] bg-[#0f0a21] border border-amber-500/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#170e33] border-b border-purple-900/60">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-black text-white">
                  سامانه مدیریت املاک جهش
                </h3>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  نسخه آنلاین و ابری
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                کاربر فعال: <strong className="text-amber-300">{currentUser?.fullName || currentUser?.username || 'کاربر گرامی'}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs font-bold border border-purple-700/50 transition-colors"
              title="باز کردن در پنجره جدید"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>پنجره مستقل</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-950 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-purple-800 shadow-sm"
              title="بستن برنامه"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Embedded Iframe */}
        <div className="flex-1 w-full bg-slate-950 relative">
          <iframe
            src={launchUrl}
            title="مدیریت املاک جهش"
            className="w-full h-full border-0"
            allow="microphone; camera; clipboard-read; clipboard-write;"
          />
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#120a2a] border-t border-purple-900/40 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>متصل به حساب کاربری جهش‌کالا • رمز عبور سیستم: <code className="text-amber-300 font-mono">jahesh1395</code></span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-slate-400">
            <span>📞 پشتیبانی: ۰۹۱۵۲۳۳۱۹۷۴</span>
          </div>
        </div>

      </div>
    </div>
  );
};
