import React, { useState } from 'react';
import {
  ShieldCheck,
  KeyRound,
  User,
  Clock,
  Copy,
  Check,
  Eye,
  EyeOff,
  Sparkles,
  ExternalLink,
  Laptop,
  Smartphone,
  Info,
  X,
} from 'lucide-react';
import { AppSubscriptionLicense } from '../types';
import { checkLicenseStatus } from '../lib/appLicenseService';

interface AppLicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  license?: AppSubscriptionLicense | null;
  onViewOrders?: () => void;
}

export const AppLicenseModal: React.FC<AppLicenseModalProps> = ({
  isOpen,
  onClose,
  license,
  onViewOrders,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen || !license) return null;

  const { isExpired, daysRemaining, formattedExpiryFa } = checkLicenseStatus(license);

  const handleCopy = (text: string, fieldName: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyAll = () => {
    const allText = `اطلاعات ورود به ${license.appName || license.productTitle}:
نام کاربری: ${license.username}
رمز عبور: ${license.password}
کلید لایسنس: ${license.licenseKey}
مدت اشتراک: ${license.days} روز (اعتبار تا: ${formattedExpiryFa})
سامانه ورود: https://jaheshit.ir/api/app-auth`;
    handleCopy(allText, 'all');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#180f33] via-[#100824] to-[#0a0518] border-2 border-amber-400/80 rounded-3xl shadow-[0_0_50px_rgba(251,191,36,0.25)] overflow-hidden my-auto text-right text-slate-100">
        
        {/* Glowing Top Ambient Header */}
        <div className="relative px-6 py-6 border-b border-purple-800/60 bg-gradient-to-r from-amber-500/20 via-purple-900/40 to-indigo-900/30">
          <button
            type="button"
            onClick={onClose}
            className="absolute left-4 top-4 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            title="بستن"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-inner">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full shadow-sm">
                  خرید موفق و لایسنس صادر شد
                </span>
                <span className="text-[10px] text-emerald-300 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  فعال و آماده ورود
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white mt-1">
                مشخصات ورود به اپلیکیشن و لایسنس اختصاصی
              </h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Greeting Box */}
          <div className="bg-purple-950/40 border border-purple-800/50 rounded-2xl p-4 text-xs sm:text-sm text-purple-200 leading-relaxed">
            <p className="font-bold text-white mb-1">
              خریدار گرامی، از حسن انتخاب و اعتماد شما به جهش‌کالا صمیمانه سپاسگزاریم.
            </p>
            <p className="text-slate-300 text-xs">
              لایسنس استفاده از نرم‌افزار «<strong className="text-amber-300">{license.appName || license.productTitle}</strong>» با موفقیت فعال شد. شما می‌توانید با اطلاعات زیر مستقیماً وارد اپلیکیشن ویندوز یا موبایل شوید:
            </p>
          </div>

          {/* Credentials Card (Golden VIP Card) */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#231647] via-[#1a0f38] to-[#12092a] border border-amber-400/60 p-5 shadow-xl space-y-4">
            
            {/* Header of Card */}
            <div className="flex items-center justify-between border-b border-purple-800/60 pb-3">
              <div className="flex items-center gap-2 text-xs font-black text-amber-300">
                <KeyRound className="w-4 h-4 text-amber-400" />
                <span>کارت اشتراک و مشخصات ورود (Credentials)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] bg-purple-900/60 text-purple-200 px-2.5 py-1 rounded-lg border border-purple-700/50">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>اعتبار: <strong>{license.days} روزه</strong> ({daysRemaining} روز باقیمانده)</span>
              </div>
            </div>

            {/* Username Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#120a26] border border-purple-700/50 rounded-xl p-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <User className="w-4 h-4 text-amber-400" />
                <span className="font-bold">نام کاربری (Username):</span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="font-mono text-sm sm:text-base font-black text-amber-300 tracking-wider">
                  {license.username}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(license.username, 'username')}
                  className="flex items-center gap-1 text-[11px] bg-purple-800/80 hover:bg-purple-700 text-white px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedField === 'username' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">کپی شد</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>کپی</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Password Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#120a26] border border-purple-700/50 rounded-xl p-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <KeyRound className="w-4 h-4 text-amber-400" />
                <span className="font-bold">رمز عبور ورود (Password):</span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm sm:text-base font-black text-emerald-300 tracking-widest">
                    {showPassword ? license.password : '••••••••••'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-slate-200 p-1 rounded transition-colors"
                    title={showPassword ? 'مخفی‌سازی رمز' : 'نمایش رمز'}
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(license.password, 'password')}
                  className="flex items-center gap-1 text-[11px] bg-purple-800/80 hover:bg-purple-700 text-white px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedField === 'password' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">کپی شد</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>کپی</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* License Key & Expiry Date Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="bg-[#120a26] border border-purple-900/60 rounded-xl p-2.5">
                <span className="text-slate-400 block mb-0.5">کلید اختصاصی لایسنس:</span>
                <span className="font-mono text-xs text-slate-200 font-bold truncate block">
                  {license.licenseKey}
                </span>
              </div>

              <div className="bg-[#120a26] border border-purple-900/60 rounded-xl p-2.5">
                <span className="text-slate-400 block mb-0.5">تاریخ دقیق انقضای اشتراک:</span>
                <span className="text-xs text-amber-300 font-bold block">
                  {formattedExpiryFa}
                </span>
              </div>
            </div>
          </div>

          {/* 3 Step Instruction Guide */}
          <div className="bg-[#100722] border border-purple-900/60 rounded-2xl p-4 space-y-2.5 text-xs text-slate-300">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <Info className="w-4 h-4 text-amber-400" />
              <span>راهنمای استفاده و ورود به اپلیکیشن:</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pr-1">
              <li>اپلیکیشن ویندوز یا موبایل توسعه‌یافته را در سیستم یا گوشی خود اجرا فرمایید.</li>
              <li>در فرم ورود، <strong>نام کاربری</strong> و <strong>رمز عبور</strong> فوق را درج کرده و دکمه ورود را بزنید.</li>
              <li>سیستم به طور خودکار لایسنس شما را از سرور جهش استعلام کرده و به مدت <strong>{license.days} روز</strong> بدون هیچ محدودیتی قابل استفاده خواهد بود.</li>
            </ol>
            <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200 flex items-start gap-2">
              <span className="text-amber-400 font-bold">⚠️ توجه:</span>
              <span>
                پس از سپری شدن مهلت اشتراک، اپلیکیشن به صورت خودکار قفل خواهد شد و جهت فعال‌سازی مجدد کافی است اشتراک خود را از سایت جهش‌کالا تمدید فرمایید.
              </span>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <button
              type="button"
              onClick={handleCopyAll}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg cursor-pointer"
            >
              {copiedField === 'all' ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>تمام اطلاعات در کلیپ‌بورد کپی شد</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>کپی تمام مشخصات ورود (یکجا)</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {onViewOrders && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onViewOrders();
                  }}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-purple-900/60 hover:bg-purple-800 border border-purple-700/60 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>مشاهده در سفارش‌های من</span>
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                متوجه شدم و بستن
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
