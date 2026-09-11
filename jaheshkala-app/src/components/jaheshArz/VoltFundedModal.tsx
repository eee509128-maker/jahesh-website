import React, { useState } from 'react';
import {
  Sparkles, ShieldCheck, CheckCircle2, TrendingUp,
  DollarSign, ArrowRight, ExternalLink, Zap, Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface VoltFundedModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
  userName?: string;
}

interface FundedPlan {
  id: string;
  size: string;
  amountUSD: number;
  feeTomans: number;
  profitSplit: string;
  maxDrawdown: string;
  target: string;
  popular?: boolean;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const VoltFundedModal: React.FC<VoltFundedModalProps> = ({
  isOpen,
  onClose,
  userEmail = 'کاربر گرامی',
  userName = 'عرفان متقی',
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-25k');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [accountDetails, setAccountDetails] = useState<{
    login: string;
    server: string;
    accountType: string;
    leverage: string;
  } | null>(null);

  if (!isOpen) return null;

  const plans: FundedPlan[] = [
    {
      id: 'plan-10k',
      size: '۱۰,۰۰۰ دلار',
      amountUSD: 10000,
      feeTomans: 4850000,
      profitSplit: '۸۵٪ سهم تریدر',
      maxDrawdown: '۱۰٪ حداکثر افت سرمایه',
      target: '۸٪ تارگت مرحله اول',
    },
    {
      id: 'plan-25k',
      size: '۲۵,۰۰۰ دلار',
      amountUSD: 25000,
      feeTomans: 11200000,
      profitSplit: '۹۰٪ سهم تریدر',
      maxDrawdown: '۱۲٪ حداکثر افت سرمایه',
      target: '۸٪ تارگت مرحله اول',
      popular: true,
    },
    {
      id: 'plan-50k',
      size: '۵۰,۰۰۰ دلار',
      amountUSD: 50000,
      feeTomans: 19800000,
      profitSplit: '۹۰٪ سهم تریدر + ریفاند ۱۰۰٪ هزینه',
      maxDrawdown: '۱۲٪ حداکثر افت سرمایه',
      target: '۸٪ تارگت مرحله اول',
    },
  ];

  const currentPlan = plans.find((p) => p.id === selectedPlanId) || plans[1];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setAccountDetails({
        login: `VOLT-${Math.floor(100000 + Math.random() * 900000)}`,
        server: 'VoltFunded-Live-02',
        accountType: `MT5 Pro Funded (${currentPlan.size})`,
        leverage: '1:100',
      });
      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch {}
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in overflow-y-auto" dir="rtl">
      <div className="bg-[#12072e] border border-purple-500/50 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden text-right text-slate-100 my-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-[#1b0a42] p-5 sm:p-6 border-b border-purple-800/40 relative">
          <button
            onClick={onClose}
            className="absolute left-4 top-4 w-8 h-8 rounded-full bg-purple-950/80 hover:bg-purple-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-base sm:text-lg text-white">
                  حساب‌های فاندد معاملاتی Volt Funded
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/30">
                  همکاری رسمی TopChange
                </span>
              </div>
              <p className="text-xs text-purple-200 mt-0.5">
                تامین سرمایه دلاری تا ۵۰,۰۰۰ دلار برای تریدرهای جهش ارز با واریز و برداشت آنی
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {isSuccess && accountDetails ? (
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-lg text-white">حساب معاملاتی با موفقیت صادر شد!</h4>
                <p className="text-xs text-slate-300 mt-1">
                  مشخصات اتصال حساب پراپ فرم شما به کیف پول جهش ارز متصل گردید.
                </p>
              </div>

              <div className="bg-[#190d3d] border border-purple-800/60 rounded-2xl p-4 text-xs space-y-2.5 text-right font-mono">
                <div className="flex items-center justify-between text-slate-300">
                  <span>نام کاربری / Login ID:</span>
                  <span className="font-bold text-amber-300">{accountDetails.login}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>سرور معاملاتی:</span>
                  <span className="font-bold text-white">{accountDetails.server}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>نوع حساب:</span>
                  <span className="font-bold text-emerald-400">{accountDetails.accountType}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>لوریج (اهرم):</span>
                  <span className="font-bold text-white">{accountDetails.leverage}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs transition-all shadow-lg cursor-pointer"
              >
                تایید و بازگشت به داشبورد
              </button>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2 text-xs">
                <label className="block text-slate-300 font-bold">
                  انتخاب پلن تامین سرمایه فاندد:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {plans.map((plan) => {
                    const isSelected = selectedPlanId === plan.id;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={`relative rounded-2xl p-3.5 border text-right cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-purple-900/60 border-amber-400 shadow-lg shadow-purple-900/40 ring-1 ring-amber-400'
                            : 'bg-[#180e3a] border-purple-900/60 hover:border-purple-700 text-slate-300'
                        }`}
                      >
                        {plan.popular && (
                          <span className="absolute -top-2.5 right-3 px-2 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[9px]">
                            محبوب‌ترین
                          </span>
                        )}
                        <div className="font-black text-sm text-white">{plan.size}</div>
                        <div className="text-[11px] text-amber-300 font-mono mt-1 font-bold">
                          {formatNumber(plan.feeTomans)} تومان
                        </div>
                        <div className="text-[10px] text-slate-400 mt-2 space-y-0.5">
                          <div>✓ {plan.profitSplit}</div>
                          <div>✓ {plan.maxDrawdown}</div>
                          <div>✓ {plan.target}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* User Connection Details */}
              <div className="bg-[#180e3a] border border-purple-900/50 rounded-2xl p-4 text-xs space-y-2 text-slate-300">
                <div className="flex items-center justify-between">
                  <span>نام تریدر:</span>
                  <span className="font-bold text-white">{userName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>کیف پول متصل:</span>
                  <span className="font-mono font-bold text-amber-300">کیف پول تتر / ریال جهش ارز</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>نحوه تسویه سود:</span>
                  <span className="text-emerald-400 font-bold">واریز مستقیم دلاری به TopChange</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>در حال صدور حساب فاندد و اتصال به سرور...</span>
                ) : (
                  <>
                    <Award className="w-4 h-4" />
                    <span>دریافت فوری حساب {currentPlan.size}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
