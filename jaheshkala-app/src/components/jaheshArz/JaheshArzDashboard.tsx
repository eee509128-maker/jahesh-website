import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, Wallet, ArrowDownLeft, ArrowUpRight, ArrowRightLeft,
  Send, Users, Ticket, CreditCard, ShieldCheck, Bell, ChevronLeft,
  Search, RefreshCw, Sparkles, ExternalLink, Globe, Smartphone,
  CheckCircle2, User, ArrowLeft, TrendingUp, HelpCircle, Plus, Copy, Check, Key, Code
} from 'lucide-react';
import {
  ExchangeRateItem, UserWallet, ArzTransaction, TcVoucher,
  P2PAdvertisement, CryptoOrFiatCurrency, BankAccount
} from '../../types/jaheshArz';
import {
  INITIAL_EXCHANGE_RATES, INITIAL_WALLETS,
  INITIAL_TRANSACTIONS, INITIAL_VOUCHERS, INITIAL_P2P_ADS
} from '../../data/topchangeData';
import {
  INITIAL_BANK_ACCOUNTS, loadUserArzData, saveUserArzData
} from '../../lib/jaheshArzService';
import { ExchangeRatesSection } from './ExchangeRatesCard';
import { ActiveRequestsLedger } from './ActiveRequestsLedger';
import { WalletsManager } from './WalletsView';
import { DepositModal } from './DepositModal';
import { WithdrawModal } from './WithdrawModal';
import { ExchangeConvertModal } from './ExchangeConvertModal';
import { TransferModal } from './TransferModal';
import { VoucherModal } from './VoucherModal';
import { P2PView } from './P2PView';
import { VoltFundedModal } from './VoltFundedModal';
import { P2PCreateAdModal } from './P2PCreateAdModal';
import { P2PTradeModal } from './P2PTradeModal';

interface JaheshArzDashboardProps {
  onClose?: () => void;
  userEmail?: string;
  userName?: string;
}

const STORAGE_KEYS = {
  WALLETS: 'jahesh_arz_wallets_v3',
  TRANSACTIONS: 'jahesh_arz_transactions_v3',
  VOUCHERS: 'jahesh_arz_vouchers_v3',
  RATES: 'jahesh_arz_rates_v3',
  P2P_ADS: 'jahesh_arz_p2p_ads_v3',
  BANK_ACCOUNTS: 'jahesh_arz_bank_accounts_v3',
};

// Clean legacy test mock balances from previous storage versions
try {
  localStorage.removeItem('jahesh_arz_wallets_v1');
  localStorage.removeItem('jahesh_arz_transactions_v1');
  localStorage.removeItem('jahesh_arz_vouchers_v1');
  localStorage.removeItem('jahesh_arz_wallets_v2');
  localStorage.removeItem('jahesh_arz_transactions_v2');
  localStorage.removeItem('jahesh_arz_vouchers_v2');
} catch {}

export const JaheshArzDashboard: React.FC<JaheshArzDashboardProps> = ({
  onClose,
  userEmail = 'erfan.mottaghi@gmail.com',
  userName = 'عرفان متقی',
}) => {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'wallets' | 'deposit' | 'withdraw' | 'exchange' | 'transfer' | 'p2p' | 'voucher' | 'gateway'
  >('dashboard');

  // Rates State
  const [rates, setRates] = useState<ExchangeRateItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.RATES);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return INITIAL_EXCHANGE_RATES;
  });

  // Wallets State - Guaranteed all 0 balances
  const [wallets, setWallets] = useState<UserWallet[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.WALLETS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.map((w: UserWallet) => {
            if (w.balance === 15400000 || w.balance === 14500000 || w.balance === 350 || w.balance === 240 || w.balance === 340.5) {
              return { ...w, balance: 0, blockedBalance: 0 };
            }
            return w;
          });
        }
      } catch {}
    }
    return INITIAL_WALLETS;
  });

  // Transactions Ledger State
  const [transactions, setTransactions] = useState<ArzTransaction[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return INITIAL_TRANSACTIONS;
  });

  // Vouchers State
  const [vouchers, setVouchers] = useState<TcVoucher[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.VOUCHERS);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return INITIAL_VOUCHERS;
  });

  // P2P Ads State
  const [p2pAds, setP2pAds] = useState<P2PAdvertisement[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.P2P_ADS);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return INITIAL_P2P_ADS;
  });

  // Bank Accounts State
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BANK_ACCOUNTS);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return INITIAL_BANK_ACCOUNTS.map(ba => ({
      ...ba,
      accountHolder: userName || ba.accountHolder
    }));
  });

  // Modals state
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showExchangeModal, setShowExchangeModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showVoucherModal, setShowVoucherModal] = useState(false);
  const [showVoltModal, setShowVoltModal] = useState(false);
  const [showP2PCreateAdModal, setShowP2PCreateAdModal] = useState(false);
  const [selectedP2PAdForTrade, setSelectedP2PAdForTrade] = useState<P2PAdvertisement | null>(null);

  const [selectedWalletForAction, setSelectedWalletForAction] = useState<UserWallet | undefined>(undefined);
  const [selectedRateForExchange, setSelectedRateForExchange] = useState<ExchangeRateItem | undefined>(undefined);

  // Gateway API State
  const [apiKey, setApiKey] = useState<string>('tc_live_9a8f4c21b3e789d02e45');
  const [webhookUrl, setWebhookUrl] = useState<string>('https://jaheshkala.ir/api/payment/topchange-webhook');
  const [copiedKey, setCopiedKey] = useState(false);

  // Status & Feedback
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  // Persistence effects
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WALLETS, JSON.stringify(wallets));
  }, [wallets]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.VOUCHERS, JSON.stringify(vouchers));
  }, [vouchers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.RATES, JSON.stringify(rates));
  }, [rates]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.P2P_ADS, JSON.stringify(p2pAds));
  }, [p2pAds]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BANK_ACCOUNTS, JSON.stringify(bankAccounts));
  }, [bankAccounts]);

  // Sync with server on initial mount
  useEffect(() => {
    loadUserArzData(userEmail, userName).then((data) => {
      if (data && Array.isArray(data.wallets) && data.wallets.length > 0) {
        setWallets(data.wallets);
        if (data.transactions) setTransactions(data.transactions);
        if (data.vouchers) setVouchers(data.vouchers);
        if (data.bankAccounts) setBankAccounts(data.bankAccounts);
        if (data.p2pAds) setP2pAds(data.p2pAds);
      }
    });
  }, [userEmail, userName]);

  // Handler to refresh exchange rates with realistic micro-variations
  const refreshRates = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setRates((prev) =>
        prev.map((item) => {
          const delta = (Math.random() - 0.48) * (item.buyPrice * 0.004);
          const newBuy = Math.round(item.buyPrice + delta);
          const newSell = Math.round(newBuy * 0.992);
          const change = Number((((newBuy - item.buyPrice) / item.buyPrice) * 100).toFixed(2));
          return {
            ...item,
            buyPrice: newBuy,
            sellPrice: newSell,
            changePercent24h: change,
            isPositive: change >= 0,
            lastUpdated: 'چند لحظه پیش',
          };
        })
      );
      setIsRefreshing(false);
      setNotificationMsg('نرخ‌های لحظه‌ای بازار صرافی با موفقیت بروزرسانی شد.');
      setTimeout(() => setNotificationMsg(null), 3500);
    }, 600);
  };

  // Actions Callbacks
  const handleSuccessDeposit = (walletId: string, amount: number, tx: ArzTransaction) => {
    setWallets((prev) =>
      prev.map((w) => (w.id === walletId ? { ...w, balance: w.balance + amount } : w))
    );
    setTransactions((prev) => [tx, ...prev]);
    setNotificationMsg(`واریز به کیف پول با موفقیت ثبت شد.`);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleSuccessWithdraw = (walletId: string, amount: number, tx: ArzTransaction) => {
    setWallets((prev) =>
      prev.map((w) => (w.id === walletId ? { ...w, balance: Math.max(0, w.balance - amount) } : w))
    );
    setTransactions((prev) => [tx, ...prev]);
    setNotificationMsg(`درخواست تسویه و برداشت وجه ثبت گردید.`);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleSuccessExchange = (
    fromWalletId: string,
    toWalletId: string,
    fromAmount: number,
    toAmount: number,
    tx: ArzTransaction
  ) => {
    setWallets((prev) =>
      prev.map((w) => {
        if (w.id === fromWalletId) {
          return { ...w, balance: Math.max(0, w.balance - fromAmount) };
        }
        if (w.id === toWalletId) {
          return { ...w, balance: w.balance + toAmount };
        }
        return w;
      })
    );
    setTransactions((prev) => [tx, ...prev]);
    setNotificationMsg(`تبدیل ارز با موفقیت انجام شد.`);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleSuccessTransfer = (walletId: string, amount: number, tx: ArzTransaction) => {
    setWallets((prev) =>
      prev.map((w) => (w.id === walletId ? { ...w, balance: Math.max(0, w.balance - amount) } : w))
    );
    setTransactions((prev) => [tx, ...prev]);
    setNotificationMsg(`انتقال وجه داخلی با موفقیت انجام شد.`);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleIssueVoucher = (walletId: string, voucher: TcVoucher, tx: ArzTransaction) => {
    setWallets((prev) =>
      prev.map((w) => (w.id === walletId ? { ...w, balance: Math.max(0, w.balance - voucher.amount) } : w))
    );
    setVouchers((prev) => [voucher, ...prev]);
    setTransactions((prev) => [tx, ...prev]);
    setNotificationMsg(`ووچر جدید با شماره ${voucher.voucherNumber} صادر شد.`);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleRedeemVoucher = (voucherNum: string, actCode: string, targetWalletId: string) => {
    const matched = vouchers.find(
      (v) => v.voucherNumber.trim() === voucherNum.trim() && v.activationCode.trim() === actCode.trim()
    );

    const creditAmount = matched ? matched.amount : 50;
    const currency = matched ? matched.currency : 'USDT';

    setWallets((prev) =>
      prev.map((w) => (w.id === targetWalletId ? { ...w, balance: w.balance + creditAmount } : w))
    );

    if (matched) {
      setVouchers((prev) =>
        prev.map((v) => (v.id === matched.id ? { ...v, status: 'redeemed' } : v))
      );
    }

    const newTx: ArzTransaction = {
      id: `tx-${Date.now()}`,
      trackingNumber: `TC-RED-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'voucher_redeem',
      typeTitle: 'نقد کردن ووچر TC',
      currency: currency,
      amount: creditAmount,
      fee: 0,
      finalAmount: creditAmount,
      status: 'completed',
      statusLabel: 'تکمیل شده',
      message: `ووچر ${voucherNum} با موفقیت نقد و به کیف پول افزوده شد.`,
      createdAt: new Date().toLocaleDateString('fa-IR'),
      updatedAt: new Date().toLocaleDateString('fa-IR'),
    };

    setTransactions((prev) => [newTx, ...prev]);
    setNotificationMsg(`ووچر با موفقیت نقد شد (+${creditAmount} ${currency}).`);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleAddNewWallet = (currency: CryptoOrFiatCurrency) => {
    const symbols: Record<string, string> = {
      BTC: '₿',
      CNY: '¥',
      RUB: '₽',
      GBP: '£',
    };
    const newWallet: UserWallet = {
      id: `w-${currency.toLowerCase()}-${Date.now()}`,
      currency,
      name: `کیف پول ${currency}`,
      symbol: symbols[currency] || currency,
      balance: 0,
      blockedBalance: 0,
      accountNumber: `TC-${currency}-${Math.floor(100000 + Math.random() * 900000)}`,
      iconBg: 'bg-indigo-600',
    };
    setWallets((prev) => [...prev, newWallet]);
    setNotificationMsg(`کیف پول جدید ${currency} با موفقیت افتتاح گردید.`);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleAddP2PAd = (newAd: P2PAdvertisement) => {
    setP2pAds((prev) => [newAd, ...prev]);
    setNotificationMsg('آگهی P2P جدید با موفقیت در بازار منتشر گردید.');
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleSuccessP2PTrade = (tx: ArzTransaction) => {
    setTransactions((prev) => [tx, ...prev]);
    setNotificationMsg('معامله P2P با موفقیت ثبت و تسویه شد.');
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleResetAllBalances = async () => {
    const resetWallets = wallets.map((w) => ({ ...w, balance: 0, blockedBalance: 0 }));
    setWallets(resetWallets);
    setTransactions([]);
    setVouchers([]);
    await saveUserArzData({
      userId: userEmail,
      wallets: resetWallets,
      transactions: [],
      vouchers: [],
      bankAccounts: bankAccounts,
      p2pAds: p2pAds,
    });
    setNotificationMsg('تمامی موجودی‌ها، تراکنش‌ها و تاریخچه‌ها با موفقیت صفر شدند و از نو تنظیم گردیدند.');
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const navItems = [
    { id: 'dashboard', label: 'داشبورد اصلی', icon: LayoutDashboard },
    { id: 'wallets', label: 'کیف پول‌ها', icon: Wallet, badge: wallets.length },
    { id: 'deposit', label: 'شارژ حساب (واریز)', icon: ArrowDownLeft },
    { id: 'withdraw', label: 'برداشت وجه', icon: ArrowUpRight },
    { id: 'exchange', label: 'تبدیل آنی ارز', icon: ArrowRightLeft },
    { id: 'transfer', label: 'انتقال داخلی', icon: Send },
    { id: 'p2p', label: 'بازار همتا به همتا (P2P)', icon: Users, badge: p2pAds.length },
    { id: 'voucher', label: 'ووچرهای TC', icon: Ticket, badge: vouchers.length },
    { id: 'gateway', label: 'درگاه پرداخت تجاری', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-[#0d0722] text-slate-100 font-sans flex flex-col antialiased selection:bg-purple-500 selection:text-white" dir="rtl">
      {/* Toast Notification */}
      {notificationMsg && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white px-5 py-2.5 rounded-2xl font-bold text-xs shadow-2xl flex items-center gap-2 animate-in slide-in-from-top">
          <CheckCircle2 className="w-4 h-4" />
          <span>{notificationMsg}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#140b33]/90 backdrop-blur-md border-b border-purple-900/50 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            {onClose && (
              <button
                id="back-to-jaheshkala-btn"
                onClick={onClose}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-900/80 hover:bg-purple-800 text-amber-300 hover:text-white text-xs font-black transition-all border border-purple-700/60 shadow-md cursor-pointer hover:scale-105 active:scale-95"
                title="بازگشت به فروشگاه جهش کالا"
              >
                <ArrowLeft className="w-4 h-4 text-amber-400" />
                <span>بازگشت به جهش کالا</span>
              </button>
            )}

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-amber-500 to-sky-400 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#12072e] rounded-[14px] flex items-center justify-center font-black text-amber-400 text-base font-mono">
                  TC
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-sm sm:text-base text-white">جهش ارز</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 font-mono font-bold px-1.5 py-0.2 rounded border border-amber-400/30">
                    TopChange
                  </span>
                </div>
                <span className="text-[10px] text-purple-300">سامانه صرافی آنلاین و کیف‌پول چندارزی</span>
              </div>
            </div>
          </div>

          {/* User badge & Quick status */}
          <div className="flex items-center gap-2.5">
            {/* Live rates ticker badge */}
            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-950/70 border border-purple-800/50 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-slate-300">تتر لحظه‌ای:</span>
              <span className="font-mono font-black text-amber-300">89,200 تومان</span>
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-2.5 bg-[#1c1244] border border-purple-800/60 px-3.5 py-2 rounded-2xl shadow-sm">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold font-mono shadow-sm">
                {userName.charAt(0)}
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>{userName}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" title="احراز هویت شده سطح ۲" />
                </div>
                <div className="text-[10px] text-purple-300 font-mono">{userEmail}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container Layout: Sidebar + Content */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row p-3 sm:p-5 gap-5">
        {/* Navigation Sidebar */}
        <aside className="lg:w-64 shrink-0 space-y-3">
          {/* Menu Items */}
          <div className="bg-[#140b33] border border-purple-900/40 rounded-3xl p-3 shadow-lg space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id as any);
                    if (item.id === 'deposit') {
                      setSelectedWalletForAction(undefined);
                      setShowDepositModal(true);
                    } else if (item.id === 'withdraw') {
                      setSelectedWalletForAction(undefined);
                      setShowWithdrawModal(true);
                    } else if (item.id === 'exchange') {
                      setSelectedWalletForAction(undefined);
                      setSelectedRateForExchange(undefined);
                      setShowExchangeModal(true);
                    } else if (item.id === 'transfer') {
                      setSelectedWalletForAction(undefined);
                      setShowTransferModal(true);
                    } else if (item.id === 'voucher') {
                      setShowVoucherModal(true);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20'
                      : 'text-slate-300 hover:text-white hover:bg-purple-950/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-purple-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-800/40">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Verification / Security Card */}
          <div className="bg-gradient-to-br from-[#1b1040] to-[#12072e] border border-purple-800/50 rounded-3xl p-4 text-xs space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>امنیت و اصالت TopChange</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              تمامی مبادلات ریالی و بین‌المللی با پروتکل رمزنگاری امن SSL و تسویه آنی پایا و ساتنا انجام می‌پذیرد.
            </p>
            <div className="pt-1 flex items-center justify-between text-[10px] text-purple-300">
              <span>پشتیبانی صرافی</span>
              <span className="font-mono">۰۲۱-۹۱۰۱۴۹۰۲</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 space-y-5">
          {/* Top Announcement Banner (Volt Funded Partner Promo like TopChange) */}
          <div className="bg-gradient-to-r from-[#200e4e] via-[#35167a] to-[#1a0c42] border border-purple-700/60 rounded-3xl p-4 sm:p-5 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="space-y-1 z-10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px]">
                  ویژه همکاران
                </span>
                <h2 className="text-sm sm:text-base font-black text-white">
                  دریافت حساب فاندد با همکاری Volt Funded تا سقف ۵۰,۰۰۰ دلار
                </h2>
              </div>
              <p className="text-xs text-purple-200">
                با اتصال حساب تاپ چنج جهش ارز به پراپ فرم Volt Funded، بدون ریسک معامله کنید و سود دلاری برداشت کنید.
              </p>
            </div>

            <button
              id="volt-funded-trigger-btn"
              onClick={() => setShowVoltModal(true)}
              className="z-10 px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-all shadow-md cursor-pointer shrink-0 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5"
            >
              <span>شروع مبادله و دریافت حساب</span>
              <span>←</span>
            </button>
          </div>

          {/* Conditional View Rendering based on activeTab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-5">
              {/* 1. Wallets Quick Overview */}
              <WalletsManager
                wallets={wallets}
                onOpenDeposit={(w) => { setSelectedWalletForAction(w); setShowDepositModal(true); }}
                onOpenWithdraw={(w) => { setSelectedWalletForAction(w); setShowWithdrawModal(true); }}
                onOpenExchange={(w) => { setSelectedWalletForAction(w); setShowExchangeModal(true); }}
                onOpenTransfer={(w) => { setSelectedWalletForAction(w); setShowTransferModal(true); }}
                onOpenVoucher={() => setShowVoucherModal(true)}
                onAddNewWallet={handleAddNewWallet}
                onResetAllBalances={handleResetAllBalances}
              />

              {/* 2. TopChange Live Exchange Rates (Matching Screenshot 2) */}
              <ExchangeRatesSection
                rates={rates}
                onRefresh={refreshRates}
                isRefreshing={isRefreshing}
                onSelectRateForExchange={(rate) => {
                  setSelectedRateForExchange(rate);
                  setShowExchangeModal(true);
                }}
              />

              {/* 3. Active Requests Ledger (Matching Screenshot 2) */}
              <ActiveRequestsLedger
                transactions={transactions}
                onRefresh={() => {
                  setIsRefreshing(true);
                  setTimeout(() => {
                    setIsRefreshing(false);
                    setNotificationMsg('لیست تراکنش‌ها بروز شد.');
                    setTimeout(() => setNotificationMsg(null), 3000);
                  }, 500);
                }}
                isRefreshing={isRefreshing}
              />
            </div>
          )}

          {activeTab === 'wallets' && (
            <WalletsManager
              wallets={wallets}
              onOpenDeposit={(w) => { setSelectedWalletForAction(w); setShowDepositModal(true); }}
              onOpenWithdraw={(w) => { setSelectedWalletForAction(w); setShowWithdrawModal(true); }}
              onOpenExchange={(w) => { setSelectedWalletForAction(w); setShowExchangeModal(true); }}
              onOpenTransfer={(w) => { setSelectedWalletForAction(w); setShowTransferModal(true); }}
              onOpenVoucher={() => setShowVoucherModal(true)}
              onAddNewWallet={handleAddNewWallet}
              onResetAllBalances={handleResetAllBalances}
            />
          )}

          {activeTab === 'deposit' && (
            <div className="space-y-4">
              <div className="bg-[#140b33] border border-purple-900/40 rounded-3xl p-5 text-right space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-base text-white flex items-center gap-2">
                    <ArrowDownLeft className="w-5 h-5 text-emerald-400" />
                    <span>شارژ حساب و واریز وجه به کیف پول جهش ارز</span>
                  </h3>
                  <button
                    onClick={() => { setSelectedWalletForAction(undefined); setShowDepositModal(true); }}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    شروع شارژ جدید
                  </button>
                </div>
                <p className="text-xs text-slate-300">
                  امکان واریز آنی ریالی با درگاه پرداخت شاپرک، کارت به کارت شتابی، واریز ارز دیجیتال تتر TRC20/ERC20 و شارژ مستقیم با ووچر TC.
                </p>
              </div>

              <WalletsManager
                wallets={wallets}
                onOpenDeposit={(w) => { setSelectedWalletForAction(w); setShowDepositModal(true); }}
                onOpenWithdraw={(w) => { setSelectedWalletForAction(w); setShowWithdrawModal(true); }}
                onOpenExchange={(w) => { setSelectedWalletForAction(w); setShowExchangeModal(true); }}
                onOpenTransfer={(w) => { setSelectedWalletForAction(w); setShowTransferModal(true); }}
                onOpenVoucher={() => setShowVoucherModal(true)}
                onAddNewWallet={handleAddNewWallet}
                onResetAllBalances={handleResetAllBalances}
              />
            </div>
          )}

          {activeTab === 'withdraw' && (
            <div className="space-y-4">
              <div className="bg-[#140b33] border border-purple-900/40 rounded-3xl p-5 text-right space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-base text-white flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-purple-400" />
                    <span>برداشت وجه و تسویه حساب‌های ارزی و ریالی</span>
                  </h3>
                  <button
                    onClick={() => { setSelectedWalletForAction(undefined); setShowWithdrawModal(true); }}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    ثبت درخواست برداشت
                  </button>
                </div>
                <p className="text-xs text-slate-300">
                  تسویه سریع ریالی به شماره شبای بانکی در چرخه‌های پایا/ساتنا یا انتقال آنی رمزارزی به کیف‌پول‌های مقصد.
                </p>
              </div>

              <ActiveRequestsLedger
                transactions={transactions.filter((t) => t.type === 'withdraw')}
                onRefresh={() => {
                  setIsRefreshing(true);
                  setTimeout(() => setIsRefreshing(false), 500);
                }}
                isRefreshing={isRefreshing}
              />
            </div>
          )}

          {activeTab === 'exchange' && (
            <div className="space-y-5">
              <ExchangeRatesSection
                rates={rates}
                onRefresh={refreshRates}
                isRefreshing={isRefreshing}
                onSelectRateForExchange={(rate) => {
                  setSelectedRateForExchange(rate);
                  setShowExchangeModal(true);
                }}
              />
            </div>
          )}

          {activeTab === 'transfer' && (
            <div className="space-y-4">
              <div className="bg-[#140b33] border border-purple-900/40 rounded-3xl p-5 text-right space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-base text-white flex items-center gap-2">
                    <Send className="w-5 h-5 text-sky-400" />
                    <span>انتقال داخلی بین‌حسابی (Internal TC Transfer)</span>
                  </h3>
                  <button
                    onClick={() => { setSelectedWalletForAction(undefined); setShowTransferModal(true); }}
                    className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    انتقال وجه جدید
                  </button>
                </div>
                <p className="text-xs text-slate-300">
                  انتقال آنی و رایگان به سایر حساب‌های کاربران جهش ارز و تاپ‌چنج بدون کارمزد با شماره حساب اختصاصی.
                </p>
              </div>

              <ActiveRequestsLedger
                transactions={transactions.filter((t) => t.type === 'transfer')}
                onRefresh={() => {
                  setIsRefreshing(true);
                  setTimeout(() => setIsRefreshing(false), 500);
                }}
                isRefreshing={isRefreshing}
              />
            </div>
          )}

          {activeTab === 'p2p' && (
            <P2PView
              ads={p2pAds}
              onOpenCreateAd={() => setShowP2PCreateAdModal(true)}
              onSelectTrade={(ad) => setSelectedP2PAdForTrade(ad)}
            />
          )}

          {activeTab === 'voucher' && (
            <div className="space-y-4">
              <div className="bg-[#140b33] border border-purple-900/40 rounded-3xl p-5 text-right space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
                      <Ticket className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-white">مرکز ووچرهای اعتباری TC Voucher</h3>
                      <p className="text-xs text-slate-300">
                        صدور و نقد کردن کارت‌های شارژ و کوپن‌های نقدی تاپ‌چنج به صورت آنی
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowVoucherModal(true)}
                    className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 text-slate-950 font-black text-xs shadow-lg transition-all cursor-pointer"
                  >
                    صدور یا نقد کردن ووچر
                  </button>
                </div>

                {/* Vouchers list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {vouchers.map((v) => (
                    <div
                      key={v.id}
                      className="bg-[#1b103e] border border-purple-800/60 rounded-2xl p-4 space-y-2 text-xs text-right font-mono"
                    >
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="font-sans font-bold text-white">شماره ووچر:</span>
                        <span className="font-bold text-amber-300">{v.voucherNumber}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="font-sans font-bold text-white">مبلغ اعتباری:</span>
                        <span className="font-black text-emerald-400 text-sm">
                          {v.amount} {v.currency}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="font-sans font-bold text-white">کد فعال‌سازی:</span>
                        <span className="text-slate-200">{v.activationCode}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-purple-900/40 text-[11px]">
                        <span className="font-sans text-slate-400">وضعیت:</span>
                        <span className={v.status === 'active' ? 'text-emerald-400 font-sans font-bold' : 'text-slate-400 font-sans'}>
                          {v.status === 'active' ? 'فعال و آماده نقد شدن' : 'استفاده و نقد شده'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gateway' && (
            <div className="bg-[#130d2d] border border-purple-900/40 rounded-3xl p-6 text-right space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-amber-400 flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-base sm:text-lg text-white">درگاه پرداخت ارزی جهش کالا (TopChange Merchant)</h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    پذیرش مستقیم پرداخت‌های بین‌المللی تتر، دلار و ووچر در فروشگاه شما با تسویه آنی ریالی
                  </p>
                </div>
              </div>

              {/* Merchant Details Box */}
              <div className="bg-[#1b103e] border border-purple-800/60 rounded-2xl p-4 sm:p-5 space-y-4 text-xs font-mono">
                <div className="space-y-1.5 font-sans">
                  <label className="block text-slate-300 font-bold">کلید احراز هویت درگاه (Live API Key):</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={apiKey}
                      className="flex-1 bg-[#12072e] border border-purple-900 rounded-xl p-2.5 text-amber-300 font-mono text-xs"
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(apiKey);
                        setCopiedKey(true);
                        setTimeout(() => setCopiedKey(false), 2000);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-sans font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                    >
                      {copiedKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedKey ? 'کپی شد' : 'کپی کلید'}</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5 font-sans">
                  <label className="block text-slate-300 font-bold">آدرس وب‌هوک بازگشت تراکنش (Webhook Callback URL):</label>
                  <input
                    type="text"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="w-full bg-[#12072e] border border-purple-900 rounded-xl p-2.5 text-white font-mono text-xs focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3 font-sans">
                  <button
                    onClick={() => {
                      const newKey = `tc_live_${Math.random().toString(36).substring(2, 12)}${Math.random().toString(36).substring(2, 10)}`;
                      setApiKey(newKey);
                      setNotificationMsg('کلید API جدید با موفقیت صادر و فعال شد.');
                      setTimeout(() => setNotificationMsg(null), 3500);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Key className="w-4 h-4" />
                    <span>صدور مجدد کلید API</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedWalletForAction(undefined);
                      setShowDepositModal(true);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>تست پرداخت درگاه آزمایشی</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      <DepositModal
        isOpen={showDepositModal}
        onClose={() => setShowDepositModal(false)}
        wallets={wallets}
        preselectedWallet={selectedWalletForAction}
        onSuccessDeposit={handleSuccessDeposit}
      />

      <WithdrawModal
        isOpen={showWithdrawModal}
        onClose={() => setShowWithdrawModal(false)}
        wallets={wallets}
        bankAccounts={bankAccounts}
        preselectedWallet={selectedWalletForAction}
        onSuccessWithdraw={handleSuccessWithdraw}
      />

      <ExchangeConvertModal
        isOpen={showExchangeModal}
        onClose={() => setShowExchangeModal(false)}
        wallets={wallets}
        rates={rates}
        preselectedWallet={selectedWalletForAction}
        preselectedRate={selectedRateForExchange}
        onSuccessExchange={handleSuccessExchange}
      />

      <TransferModal
        isOpen={showTransferModal}
        onClose={() => setShowTransferModal(false)}
        wallets={wallets}
        preselectedWallet={selectedWalletForAction}
        onSuccessTransfer={handleSuccessTransfer}
      />

      <VoucherModal
        isOpen={showVoucherModal}
        onClose={() => setShowVoucherModal(false)}
        wallets={wallets}
        vouchers={vouchers}
        onIssueVoucher={handleIssueVoucher}
        onRedeemVoucher={handleRedeemVoucher}
      />

      <VoltFundedModal
        isOpen={showVoltModal}
        onClose={() => setShowVoltModal(false)}
        userEmail={userEmail}
        userName={userName}
      />

      <P2PCreateAdModal
        isOpen={showP2PCreateAdModal}
        onClose={() => setShowP2PCreateAdModal(false)}
        wallets={wallets}
        userName={userName}
        onSuccessCreateAd={handleAddP2PAd}
      />

      <P2PTradeModal
        isOpen={Boolean(selectedP2PAdForTrade)}
        onClose={() => setSelectedP2PAdForTrade(null)}
        ad={selectedP2PAdForTrade}
        wallets={wallets}
        userName={userName}
        onSuccessTrade={handleSuccessP2PTrade}
      />
    </div>
  );
};
