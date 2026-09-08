import React from 'react';
import { ShieldCheck, Heart, Globe } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenIntegrationGuide?: () => void;
  onScrollToGolden?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  return (
    <footer className="bg-[#080613] border-t border-purple-900/30 py-6 text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-purple-900/60 flex items-center justify-center text-purple-300 font-bold text-xs">
            J
          </div>
          <span className="text-white font-bold">فروشگاه انجمن علمی جهش</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400 text-[11px]">ارائه‌دهنده پکیج‌های طراحی سایت اختصاصی</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <button
            onClick={onOpenTerms}
            className="hover:text-purple-300 transition-colors underline underline-offset-4"
          >
            قوانین و شرایط کاری جهش
          </button>
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            اتصال امن به درگاه زیبال
          </span>
        </div>

      </div>
    </footer>
  );
};
