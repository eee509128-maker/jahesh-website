import React, { useState, useEffect, useMemo } from 'react';
import {
  X, ShieldAlert, CheckCircle2, Loader2, Lock, UserPlus, LogIn,
  ShieldCheck, RefreshCw, User as UserIcon, Phone, Sparkles,
  Briefcase, Search, Check, ChevronDown, ChevronUp, Store,
  Building2, Globe, Megaphone, Stethoscope, ShoppingCart,
  UtensilsCrossed, Shirt, Watch, Car, Wrench, Scale, Hammer,
  Tv, GraduationCap, Camera, Plane, Sprout, Printer, Factory,
  Coins, Dumbbell, Truck, BookOpen, Layers
} from 'lucide-react';
import { User as UserType } from '../types';
import { registerUserInDb, findUserInDb } from '../lib/dbService';
import { AntiBotGuard } from '../security/antiBot';
import { IRANIAN_GUILDS, GuildItem } from '../data/guildsData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserType) => void;
}

// Map icon string to Lucide icon component
const getGuildIcon = (iconName: string) => {
  switch (iconName) {
    case 'Building2': return Building2;
    case 'Globe': return Globe;
    case 'Megaphone': return Megaphone;
    case 'Stethoscope': return Stethoscope;
    case 'ShoppingCart': return ShoppingCart;
    case 'UtensilsCrossed': return UtensilsCrossed;
    case 'Shirt': return Shirt;
    case 'Watch': return Watch;
    case 'Car': return Car;
    case 'Wrench': return Wrench;
    case 'Scale': return Scale;
    case 'Hammer': return Hammer;
    case 'Tv': return Tv;
    case 'Sparkles': return Sparkles;
    case 'GraduationCap': return GraduationCap;
    case 'Camera': return Camera;
    case 'Plane': return Plane;
    case 'Sprout': return Sprout;
    case 'Printer': return Printer;
    case 'Factory': return Factory;
    case 'Coins': return Coins;
    case 'Dumbbell': return Dumbbell;
    case 'Truck': return Truck;
    case 'BookOpen': return BookOpen;
    default: return Briefcase;
  }
};

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

  // Guild selection states
  const [selectedGuild, setSelectedGuild] = useState<string>('');
  const [customGuildName, setCustomGuildName] = useState<string>('');
  const [guildSearchQuery, setGuildSearchQuery] = useState<string>('');
  const [guildCategoryFilter, setGuildCategoryFilter] = useState<string>('همه');
  const [isGuildSelectorOpen, setIsGuildSelectorOpen] = useState<boolean>(false);

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
      setGuildSearchQuery('');
      setIsGuildSelectorOpen(false);
    }
  }, [isOpen, isRegisterMode]);

  // Filter guilds list based on search and category
  const filteredGuilds = useMemo(() => {
    return IRANIAN_GUILDS.filter((g) => {
      const matchesCat = guildCategoryFilter === 'همه' || g.category === guildCategoryFilter;
      if (!matchesCat) return false;

      if (!guildSearchQuery.trim()) return true;
      const q = guildSearchQuery.trim().toLowerCase();
      const inName = g.name.toLowerCase().includes(q) || g.shortName.toLowerCase().includes(q);
      const inDesc = g.description.toLowerCase().includes(q);
      const inKeywords = g.suggestedKeywords.some((k) => k.toLowerCase().includes(q));
      return inName || inDesc || inKeywords;
    });
  }, [guildSearchQuery, guildCategoryFilter]);

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
      guild: 'فناوری اطلاعات و مدیریت جهش',
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

        if (!selectedGuild) {
          setErrorMsg('لطفاً صنف و زمینه فعالیت کسب‌وکار خود را از لیست انتخاب فرمایید.');
          setIsGuildSelectorOpen(true);
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

        // Check if username or phone already exists in system across all devices
        const { fetchAllUsersFromDb } = await import('../lib/dbService');
        const allExistingUsers = await fetchAllUsersFromDb();
        const phoneExists = allExistingUsers.some((u) => u.phone?.trim() === cleanPhone);
        if (phoneExists) {
          setErrorMsg('حساب کاربری با این شماره تماس قبلاً ثبت شده است. لطفاً وارد شوید.');
          setIsLoading(false);
          return;
        }

        const usernameExists = allExistingUsers.some(
          (u) => u.username?.trim().toLowerCase() === cleanUsername
        );
        if (usernameExists) {
          setErrorMsg('این نام کاربری قبلاً توسط کاربر دیگری ثبت شده است. لطفاً نام کاربری دیگری انتخاب کنید.');
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
          guild: selectedGuild,
          customGuild: selectedGuild.includes('سایر مشاغل') ? customGuildName.trim() : undefined,
          createdAt: new Date().toLocaleDateString('fa-IR'),
        };

        const success = await registerUserInDb(newUser, password);
        if (success) {
          AntiBotGuard.recordDispatch(cleanPhone);
          setSuccessMsg('ثبت‌نام با موفقیت انجام شد! صنف شما با موفقیت ثبت گردید. در حال ورود...');
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

  const selectedGuildObj = IRANIAN_GUILDS.find((g) => g.name === selectedGuild);
  const SelectedIcon = selectedGuildObj ? getGuildIcon(selectedGuildObj.iconName) : Briefcase;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-3 sm:p-4 flex min-h-full items-center justify-center animate-in fade-in" 
      dir="rtl"
    >
      {/* Modal Container: Protected max height and safe viewport bounds */}
      <div className="relative bg-white dark:bg-[#140c2e] border border-purple-200 dark:border-purple-800 rounded-2xl sm:rounded-3xl w-full max-w-lg shadow-2xl text-right flex flex-col max-h-[88vh] my-auto overflow-hidden">
        
        {/* Sticky Header: NEVER cuts off or gets pushed out */}
        <div className="sticky top-0 z-30 shrink-0 bg-purple-50/95 dark:bg-[#1a1139]/95 backdrop-blur-md p-3.5 sm:p-4 flex items-center justify-between border-b border-purple-200 dark:border-purple-900/60">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 border border-purple-300 dark:border-purple-500/50 flex items-center justify-center text-purple-700 dark:text-purple-300 shadow-sm shrink-0">
              {isRegisterMode ? <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" /> : <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                  {isRegisterMode ? 'ثبت‌نام و انتخاب صنف در جهش‌کالا' : 'ورود به حساب کاربری'}
                </h3>
                <span className="flex items-center gap-1 text-[9px] sm:text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 font-bold">
                  <ShieldCheck className="w-3 h-3" />
                  محافظت هوشمند
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-purple-300/80 font-medium">
                {isRegisterMode ? 'ایجاد حساب کاربری متناسب با صنف و کسب‌وکار شما' : 'ورود با نام کاربری یا شماره موبایل'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-100 hover:bg-rose-500 hover:text-white text-purple-900 dark:bg-purple-950 dark:hover:bg-rose-600 dark:text-slate-300 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer border border-purple-300 dark:border-purple-800 shadow-sm shrink-0"
            title="بستن"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="shrink-0 flex border-b border-purple-200 dark:border-purple-900/50 bg-purple-50/60 dark:bg-[#120a2a] p-1.5 gap-1.5">
          <button
            type="button"
            onClick={() => { setIsRegisterMode(false); setErrorMsg(''); setSuccessMsg(''); }}
            className={`flex-1 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              !isRegisterMode
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-purple-100/50 dark:hover:bg-purple-900/30'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>ورود به حساب</span>
          </button>
          <button
            type="button"
            onClick={() => { setIsRegisterMode(true); setErrorMsg(''); setSuccessMsg(''); }}
            className={`flex-1 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              isRegisterMode
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-purple-100/50 dark:hover:bg-purple-900/30'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>ثبت‌نام جدید (انتخاب صنف)</span>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 custom-scrollbar">
          {/* Notifications */}
          {errorMsg && (
            <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/40 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2 font-medium animate-in fade-in">
              <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{errorMsg}</span>
            </div>
          )}
          {successMsg && (
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-xs text-emerald-700 dark:text-emerald-300 flex items-start gap-2 font-medium animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{successMsg}</span>
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {isRegisterMode ? (
              /* REGISTER FIELDS WITH GUILD SELECTION FIRST */
              <>
                {/* 1. GUILD SELECTION (صنف و حوزه فعالیت) */}
                <div className="space-y-1.5 p-3 rounded-2xl bg-gradient-to-br from-purple-50/90 to-indigo-50/50 dark:from-purple-950/30 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-800/80 shadow-xs">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black text-purple-950 dark:text-amber-300 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-purple-600 dark:text-amber-400" />
                      <span>صنف و زمینه فعالیت شما:</span>
                      <span className="text-rose-500 font-bold">*</span>
                    </label>
                    {selectedGuild && (
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md font-bold flex items-center gap-1 border border-emerald-300 dark:border-emerald-700/50">
                        <Check className="w-3 h-3" />
                        صنف انتخاب شد
                      </span>
                    )}
                  </div>

                  {/* Trigger / Chosen Guild Button */}
                  <button
                    type="button"
                    onClick={() => setIsGuildSelectorOpen(!isGuildSelectorOpen)}
                    className={`w-full p-2.5 rounded-xl border transition-all flex items-center justify-between text-right cursor-pointer shadow-xs ${
                      selectedGuild
                        ? 'bg-white dark:bg-black/60 border-purple-400 dark:border-purple-700 text-slate-900 dark:text-white ring-1 ring-purple-400/50'
                        : 'bg-white dark:bg-black/40 border-dashed border-purple-300 dark:border-purple-800 text-slate-600 dark:text-slate-400 hover:border-purple-500'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/60 flex items-center justify-center text-purple-700 dark:text-amber-300 shrink-0">
                        <SelectedIcon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {selectedGuild || 'برای انتخاب صنف خود از لیست یا جستجو کلیک کنید...'}
                        </div>
                        {selectedGuildObj && (
                          <div className="text-[10px] text-slate-500 dark:text-purple-300/70 truncate">
                            {selectedGuildObj.description}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 shrink-0">
                      <span className="text-[11px] font-bold hidden xs:inline">
                        {isGuildSelectorOpen ? 'بستن لیست' : 'انتخاب صنف'}
                      </span>
                      {isGuildSelectorOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Searchable Guild Selector Drawer / Accordion */}
                  {isGuildSelectorOpen && (
                    <div className="mt-2 p-2.5 rounded-xl bg-white dark:bg-[#180f3d] border border-purple-200 dark:border-purple-700/80 shadow-lg space-y-2 animate-in fade-in">
                      
                      {/* Search Bar */}
                      <div className="relative">
                        <Search className="w-4 h-4 text-purple-500 dark:text-purple-400 absolute right-3 top-2.5" />
                        <input
                          type="text"
                          dir="rtl"
                          value={guildSearchQuery}
                          onChange={(e) => setGuildSearchQuery(e.target.value)}
                          placeholder="جستجوی سریع صنف (مثلاً: املاک، پزشکی، رستوران، خودرو، وب، پوشاک...)"
                          className="w-full bg-purple-50/70 dark:bg-black/50 border border-purple-200 dark:border-purple-800 rounded-lg pr-9 pl-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      {/* Category Filter Chips */}
                      <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none text-[10px]">
                        {['همه', 'خدمات و مهندسی', 'فروشگاهی و بازار', 'سلامت و درمان', 'تولیدی و صنعتی', 'عمومی و سایر'].map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setGuildCategoryFilter(cat)}
                            className={`px-2 py-0.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                              guildCategoryFilter === cat
                                ? 'bg-purple-600 text-white font-bold'
                                : 'bg-purple-100/70 dark:bg-purple-900/40 text-slate-700 dark:text-slate-300 hover:bg-purple-200'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      {/* Guilds Scrollable List */}
                      <div className="max-h-48 overflow-y-auto space-y-1 custom-scrollbar pr-0.5">
                        {filteredGuilds.length === 0 ? (
                          <div className="p-3 text-center text-xs text-slate-500 dark:text-slate-400">
                            صنفی با این عنوان یافت نشد. می‌توانید گزینه «سایر مشاغل و اصناف» را انتخاب نمایید.
                          </div>
                        ) : (
                          filteredGuilds.map((g) => {
                            const IconComp = getGuildIcon(g.iconName);
                            const isChosen = selectedGuild === g.name;
                            return (
                              <button
                                key={g.id}
                                type="button"
                                onClick={() => {
                                  setSelectedGuild(g.name);
                                  setIsGuildSelectorOpen(false);
                                }}
                                className={`w-full p-2 rounded-lg text-right flex items-center justify-between gap-2 transition-all cursor-pointer ${
                                  isChosen
                                    ? 'bg-purple-100 dark:bg-purple-900/80 border border-purple-400 dark:border-amber-400/60 text-purple-950 dark:text-white font-bold shadow-xs'
                                    : 'hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-800 dark:text-slate-200'
                                }`}
                              >
                                <div className="flex items-center gap-2 overflow-hidden">
                                  <div className="w-6 h-6 rounded-md bg-purple-200/70 dark:bg-purple-800/50 flex items-center justify-center text-purple-700 dark:text-amber-300 shrink-0">
                                    <IconComp className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="truncate">
                                    <div className="text-xs truncate">{g.name}</div>
                                    <div className="text-[9px] text-slate-500 dark:text-slate-400 truncate">{g.description}</div>
                                  </div>
                                </div>
                                {isChosen && <Check className="w-4 h-4 text-purple-700 dark:text-amber-400 shrink-0" />}
                              </button>
                            );
                          })
                        )}
                      </div>
                    </div>
                  )}

                  {/* If user selected "Other" (سایر مشاغل) */}
                  {selectedGuild.includes('سایر مشاغل') && (
                    <div className="pt-2 animate-in fade-in space-y-1">
                      <label className="text-[11px] font-bold text-slate-800 dark:text-slate-300">
                        عنوان دقیق شغل یا صنف خود را بنویسید (اختیاری):
                      </label>
                      <input
                        type="text"
                        dir="rtl"
                        value={customGuildName}
                        onChange={(e) => setCustomGuildName(e.target.value)}
                        placeholder="مثلاً: کارگاه نجاری، تدریس کنکور، صنایع دستی، تولید سفال..."
                        className="w-full bg-white dark:bg-black/50 border border-purple-300 dark:border-purple-800 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 text-right"
                      />
                    </div>
                  )}
                </div>

                {/* 2. FULL NAME */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                    <UserIcon className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    نام و نام خانوادگی:
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    placeholder="مثال: عرفان مقدم"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white dark:bg-black/50 border border-purple-300 dark:border-purple-800/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 text-right shadow-xs"
                    required
                  />
                </div>

                {/* 3. PHONE NUMBER */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    شماره موبایل:
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    maxLength={11}
                    placeholder="09123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white dark:bg-black/50 border border-purple-300 dark:border-purple-800/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 text-left font-mono shadow-xs"
                    required
                  />
                </div>

                {/* 4. USERNAME */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    نام کاربری (انگلیسی):
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    dir="ltr"
                    placeholder="erfan_123"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white dark:bg-black/50 border border-purple-300 dark:border-purple-800/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 text-left font-mono shadow-xs"
                    required
                  />
                </div>
              </>
            ) : (
              /* LOGIN FIELD */
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                  <UserIcon className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  نام کاربری یا شماره موبایل:
                </label>
                <input
                  type="text"
                  dir="rtl"
                  placeholder="نام کاربری یا 0912..."
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full bg-white dark:bg-black/50 border border-purple-300 dark:border-purple-800/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 text-right shadow-xs"
                  required
                />
              </div>
            )}

            {/* PASSWORD FIELD */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                رمز عبور:
                {isRegisterMode && <span className="text-rose-500">*</span>}
              </label>
              <input
                type="password"
                dir="ltr"
                placeholder="حداقل ۶ کاراکتر"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white dark:bg-black/50 border border-purple-300 dark:border-purple-800/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 text-left font-mono shadow-xs"
                required
              />
            </div>

            {/* Anti-Bot Math Captcha Box */}
            <div className="p-2.5 bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 rounded-xl space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-900 dark:text-amber-300 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-amber-400" />
                  تایید امنیتی (ضد ربات):
                </span>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-200 transition-colors p-1 cursor-pointer"
                  title="معمای جدید"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div 
                  dir="ltr" 
                  className="bg-purple-100 dark:bg-purple-900/60 px-3 py-1.5 rounded-lg text-purple-950 dark:text-white font-mono font-bold text-sm tracking-wider select-none border border-purple-300 dark:border-purple-700/50 shadow-inner shrink-0"
                >
                  {captcha.question}
                </div>
                <input
                  type="number"
                  dir="ltr"
                  placeholder="پاسخ"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="flex-1 bg-white dark:bg-black/50 border border-purple-300 dark:border-purple-800 rounded-lg px-3 py-1.5 text-sm text-center text-slate-900 dark:text-white focus:outline-none focus:border-purple-600 dark:focus:border-amber-400 font-mono shadow-xs"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-900/40 hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isRegisterMode ? (
                <UserPlus className="w-4 h-4" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              <span>{isRegisterMode ? 'ثبت‌نام امن با صنف انتخابی' : 'ورود به حساب کاربری'}</span>
            </button>

            {/* Footer toggle */}
            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsRegisterMode(!isRegisterMode);
                  setErrorMsg('');
                  setSuccessMsg('');
                }}
                className="text-xs text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white transition-colors underline decoration-purple-500/30 underline-offset-4 cursor-pointer font-bold"
              >
                {isRegisterMode
                  ? 'قبلاً ثبت‌نام کرده‌اید؟ وارد شوید'
                  : 'حساب کاربری ندارید؟ ثبت‌نام کنید'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};
