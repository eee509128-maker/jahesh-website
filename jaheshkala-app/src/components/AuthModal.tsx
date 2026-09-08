import React, { useState, useEffect } from 'react';
import { X, ShieldAlert, CheckCircle2, Loader2, Lock, UserPlus, LogIn, ShieldCheck, RefreshCw, User as UserIcon, Phone, Sparkles } from 'lucide-react';
import { User as UserType } from '../types';
import { registerUserInDb, findUserInDb } from '../lib/dbService';
import { AntiBotGuard } from '../security/antiBot';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserType) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  
  // Fields for login & registration
  const [identifier, setIdentifier] = useState(''); // username or phone for login
  const [password, setPassword] = useState('');

  // Register only fields
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  // Anti-Bot Captcha State
  const [captcha, setCaptcha] = useState<{ question: string; answer: number; challengeId: string }>({ question: '', answer: 0, challengeId: '' });
  const [captchaInput, setCaptchaInput] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Refresh math captcha challenge
  const refreshCaptcha = () => {
    const newCap = AntiBotGuard.generateMathCaptcha();
    setCaptcha(newCap);
    setCaptchaInput('');
  };

  useEffect(() => {
    if (isOpen) {
      refreshCaptcha();
      setErrorMsg('');
      setSuccessMsg('');
    }
  }, [isOpen, isRegisterMode]);

  if (!isOpen) return null;

  // Master Admin direct check
  const isAdminIdentifier = (id: string) => {
    const clean = id.trim().toLowerCase();
    return [
      'jahesh',
      'jahesh_admin',
      'admin',
      '09152331974',
      'jahesh1395@gmail.com',
      'erfanmoghaddammotagi@gmail.com',
      'erfanmoghaddammotagicrypto@gmail.com'
    ].includes(clean);
  };

  const loginAsAdmin = () => {
    const adminUser: UserType = {
      id: 'admin-jahesh-main',
      fullName: 'مدیر فروشگاه جهش‌کالا',
      phone: '09152331974',
      email: 'jahesh1395@gmail.com',
      username: 'jahesh_admin',
      role: 'admin',
      createdAt: new Date().toLocaleDateString('fa-IR'),
    };
    setSuccessMsg('خوش آمدید مدیر گرامی! در حال ورود به پنل مدیریت...');
    setTimeout(() => {
      onLoginSuccess(adminUser);
      onClose();
    }, 600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Admin direct fast-pass
    if (!isRegisterMode && isAdminIdentifier(identifier)) {
      loginAsAdmin();
      return;
    }

    // 1. Anti-Bot Captcha Verification
    if (parseInt(captchaInput.trim(), 10) !== captcha.answer) {
      setErrorMsg('پاسخ معادله ضد ربات اشتباه است. لطفاً دقت فرمایید.');
      refreshCaptcha();
      return;
    }

    // 2. Client burst rate-limiting check
    const targetIdentifier = isRegisterMode ? phone.trim() : identifier.trim();
    const securityCheck = AntiBotGuard.verifyRequest(targetIdentifier);
    if (!securityCheck.allowed) {
      setErrorMsg(securityCheck.reason || 'تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً کمی بعد تلاش کنید.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('رمز عبور باید حداقل ۶ کاراکتر باشد.');
      return;
    }

    setIsLoading(true);

    try {
      if (isRegisterMode) {
        // Validation for registration
        const cleanFullName = fullName.trim();
        const cleanUsername = username.trim().toLowerCase();
        const cleanPhone = phone.trim();

        if (!cleanFullName || !cleanUsername || !cleanPhone) {
          setErrorMsg('لطفاً تمام فیلدهای ستاره‌دار را تکمیل کنید.');
          setIsLoading(false);
          return;
        }

        // Validate Iranian phone number format (09xxxxxxxxx)
        const phoneRegex = /^09\d{9}$/;
        if (!phoneRegex.test(cleanPhone)) {
          setErrorMsg('شماره تماس معتبر نیست (باید ۱۱ رقمی و با ۰۹ شروع شود؛ مثال: ۰۹۱۲۳۴۵۶۷۸۹).');
          setIsLoading(false);
          return;
        }

        // Check if username already exists
        const existing = await findUserInDb(cleanUsername, password);
        if (existing) {
          setErrorMsg('این نام کاربری یا شماره تماس قبلاً ثبت شده است.');
          setIsLoading(false);
          return;
        }

        const newUser: UserType = {
          id: 'u-' + Date.now(),
          fullName: cleanFullName,
          phone: cleanPhone,
          email: '',
          username: cleanUsername,
          role: 'user',
          createdAt: new Date().toLocaleDateString('fa-IR'),
        };

        const success = await registerUserInDb(newUser, password);
        if (success) {
          AntiBotGuard.recordDispatch(cleanPhone);
          setSuccessMsg('ثبت‌نام با موفقیت انجام شد! در حال انتقال به حساب...');
          setTimeout(() => {
            onLoginSuccess(newUser);
            onClose();
          }, 800);
        } else {
          setErrorMsg('خطا در ذخیره‌سازی اطلاعات کاربر در دیتابیس.');
        }
      } else {
        // Login mode
        const cleanId = identifier.trim();
        if (!cleanId) {
          setErrorMsg('لطفاً نام کاربری یا شماره تماس خود را وارد کنید.');
          setIsLoading(false);
          return;
        }

        const user = await findUserInDb(cleanId, password);
        if (user) {
          setSuccessMsg('ورود با موفقیت انجام شد!');
          setTimeout(() => {
            onLoginSuccess(user);
            onClose();
          }, 600);
        } else {
          setErrorMsg('نام کاربری، شماره تماس یا رمز عبور اشتباه است.');
          refreshCaptcha();
        }
      }
    } catch (err) {
      setErrorMsg('خطا در برقراری ارتباط با سرور.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in" dir="rtl">
      <div className="bg-[#140c2e] border border-purple-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl text-right">
        
        {/* Header */}
        <div className="bg-[#1a1139] p-4 flex items-center justify-between border-b border-purple-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/50 flex items-center justify-center text-purple-300">
              {isRegisterMode ? <UserPlus className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black text-white">
                  {isRegisterMode ? 'ثبت‌نام در جهش‌کالا' : 'ورود به حساب کاربری'}
                </h3>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30 font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  محافظت هوشمند
                </span>
              </div>
              <p className="text-[11px] text-purple-300/80">
                {isRegisterMode ? 'ایجاد حساب جدید با شماره موبایل' : 'ورود با نام کاربری یا شماره موبایل'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-950 hover:bg-purple-900 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-purple-900/50 bg-[#120a2a] p-1.5 gap-1.5">
          <button
            type="button"
            onClick={() => { setIsRegisterMode(false); setErrorMsg(''); setSuccessMsg(''); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              !isRegisterMode
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>ورود به حساب</span>
          </button>
          <button
            type="button"
            onClick={() => { setIsRegisterMode(true); setErrorMsg(''); setSuccessMsg(''); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              isRegisterMode
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>ثبت‌نام جدید</span>
          </button>
        </div>

        {/* Notifications */}
        <div className="px-6 pt-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{errorMsg}</span>
            </div>
          )}
          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{successMsg}</span>
            </div>
          )}
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-right">
          {isRegisterMode ? (
            /* REGISTER FIELDS */
            <>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <UserIcon className="w-3.5 h-3.5 text-purple-400" />
                  نام و نام خانوادگی:
                </label>
                <input
                  type="text"
                  dir="rtl"
                  placeholder="مثال: عرفان مقدم"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-black/50 border border-purple-800/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-right"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  شماره موبایل:
                </label>
                <input
                  type="tel"
                  dir="ltr"
                  maxLength={11}
                  placeholder="09123456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black/50 border border-purple-800/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-left font-mono"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  نام کاربری (انگلیسی):
                </label>
                <input
                  type="text"
                  dir="ltr"
                  placeholder="erfan_123"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black/50 border border-purple-800/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-left font-mono"
                  required
                />
              </div>
            </>
          ) : (
            /* LOGIN FIELD */
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <UserIcon className="w-3.5 h-3.5 text-purple-400" />
                نام کاربری یا شماره موبایل:
              </label>
              <input
                type="text"
                dir="rtl"
                placeholder="نام کاربری یا 0912..."
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full bg-black/50 border border-purple-800/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-right"
                required
              />
            </div>
          )}

          {/* PASSWORD FIELD */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              رمز عبور:
            </label>
            <input
              type="password"
              dir="ltr"
              placeholder="حداقل ۶ کاراکتر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-purple-800/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-left font-mono"
              required
            />
          </div>

          {/* Anti-Bot Math Captcha Box */}
          <div className="p-3 bg-purple-950/40 border border-purple-800/60 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                تایید امنیتی (ضد ربات و اتک):
              </span>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="text-purple-400 hover:text-purple-200 transition-colors p-1"
                title="معمای جدید"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div 
                dir="ltr" 
                className="bg-purple-900/60 px-4 py-2 rounded-lg text-white font-mono font-bold text-sm tracking-wider select-none border border-purple-700/50"
              >
                {captcha.question}
              </div>
              <input
                type="number"
                dir="ltr"
                placeholder="پاسخ"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="flex-1 bg-black/50 border border-purple-800 rounded-lg px-3 py-2 text-sm text-center text-white focus:outline-none focus:border-amber-400 font-mono"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 mt-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-900/40 hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isRegisterMode ? (
              <UserPlus className="w-4 h-4" />
            ) : (
              <LogIn className="w-4 h-4" />
            )}
            <span>{isRegisterMode ? 'ثبت‌نام امن در سایت' : 'ورود به حساب کاربری'}</span>
          </button>

          {/* Footer toggle */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => {
                setIsRegisterMode(!isRegisterMode);
                setErrorMsg('');
                setSuccessMsg('');
              }}
              className="text-xs text-purple-300 hover:text-white transition-colors underline decoration-purple-500/30 underline-offset-4"
            >
              {isRegisterMode
                ? 'قبلاً ثبت‌نام کرده‌اید؟ وارد شوید'
                : 'حساب کاربری ندارید؟ ثبت‌نام کنید'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
