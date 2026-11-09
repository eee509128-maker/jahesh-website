import React, { useState } from 'react';
import {
  Globe, Sparkles, Clock, Code2, Zap, Copy, Check, Eye, EyeOff, ShieldCheck,
  ArrowRight, RefreshCw, Plus, Edit3, Trash2, CheckCircle2, AlertCircle, X,
  ExternalLink, Search, Phone, Mail, CreditCard, ToggleLeft, ToggleRight,
  HelpCircle, Server, Terminal, ArrowDownRight, Layers, Tag
} from 'lucide-react';
import { CustomMerchant, GatewayTransaction } from '../types';

interface MerchantFacilitatorViewProps {
  customMerchants: CustomMerchant[];
  merchantsLoading: boolean;
  onRefreshMerchants: () => void;
  onSaveMerchant: (payload: Partial<CustomMerchant>) => Promise<CustomMerchant | null>;
  onDeleteMerchant: (id: string) => Promise<boolean>;
  gatewayTransactions: GatewayTransaction[];
  gatewayTxsLoading: boolean;
  onRefreshTransactions: () => void;
  zibalMerchant: string;
}

export const MerchantFacilitatorView: React.FC<MerchantFacilitatorViewProps> = ({
  customMerchants,
  merchantsLoading,
  onRefreshMerchants,
  onSaveMerchant,
  onDeleteMerchant,
  gatewayTransactions,
  gatewayTxsLoading,
  onRefreshTransactions,
  zibalMerchant = '6a9db4410df8756c31ea5d00'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'merchants' | 'transactions' | 'docs'>('merchants');

  // Merchant action message
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form State
  const [editingMerchant, setEditingMerchant] = useState<CustomMerchant | null>(null);
  const [title, setTitle] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sheba, setSheba] = useState('');
  const [feePercent, setFeePercent] = useState<number>(1);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Copy & Reveal State
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);
  const [revealedKeyId, setRevealedKeyId] = useState<string | null>(null);

  // Search Queries
  const [merchantSearchQuery, setMerchantSearchQuery] = useState('');
  const [txSearchQuery, setTxSearchQuery] = useState('');

  // Simulator Test State
  const [simMerchantCode, setSimMerchantCode] = useState(customMerchants[0]?.merchantCode || 'JAHESH_MID_A84B9C21');
  const [simAmount, setSimAmount] = useState('50000');
  const [simOrderId, setSimOrderId] = useState(`ORD-${Date.now().toString().slice(-5)}`);
  const [simCustomerName, setSimCustomerName] = useState('خانم سارا محمدی');
  const [simCustomerMobile, setSimCustomerMobile] = useState('09123456789');
  const [simCallbackUrl, setSimCallbackUrl] = useState('https://jaheshit.ir/test-client-callback');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResult, setSimResult] = useState<any>(null);

  // Docs Code Tab
  const [docsLang, setDocsLang] = useState<'curl' | 'php' | 'js' | 'node' | 'wordpress'>('curl');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const showMessage = (type: 'success' | 'error', text: string) => {
    setActionMessage({ type, text });
    setTimeout(() => setActionMessage(null), 4000);
  };

  const copyToClipboard = (text: string, type: 'code' | 'key', id: string) => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCodeId(id);
      setTimeout(() => setCopiedCodeId(null), 2500);
    } else {
      setCopiedKeyId(id);
      setTimeout(() => setCopiedKeyId(null), 2500);
    }
  };

  const handleStartEdit = (merchant: CustomMerchant) => {
    setEditingMerchant(merchant);
    setTitle(merchant.title);
    setWebsiteUrl(merchant.websiteUrl);
    setOwnerName(merchant.ownerName);
    setPhone(merchant.phone);
    setEmail(merchant.email || '');
    setSheba(merchant.sheba || '');
    setFeePercent(merchant.feePercent ?? 1);
    setNotes(merchant.notes || '');

    const formElement = document.getElementById('merchant-form-top');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCancelEdit = () => {
    setEditingMerchant(null);
    setTitle('');
    setWebsiteUrl('');
    setOwnerName('');
    setPhone('');
    setEmail('');
    setSheba('');
    setFeePercent(1);
    setNotes('');
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      showMessage('error', 'لطفاً نام وب‌سایت یا برند کارفرما را وارد فرمایید.');
      return;
    }
    if (!websiteUrl.trim()) {
      showMessage('error', 'لطفاً آدرس دامنه اینترنتی وب‌سایت کارفرما را وارد فرمایید.');
      return;
    }
    if (!ownerName.trim()) {
      showMessage('error', 'لطفاً نام و نام خانوادگی مدیر را وارد فرمایید.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: Partial<CustomMerchant> = {
        id: editingMerchant?.id,
        merchantCode: editingMerchant?.merchantCode,
        apiKey: editingMerchant?.apiKey,
        title: title.trim(),
        websiteUrl: websiteUrl.trim(),
        ownerName: ownerName.trim(),
        phone: phone.trim() || '09123456789',
        email: email.trim(),
        sheba: sheba.trim(),
        feePercent: Number(feePercent) || 1,
        notes: notes.trim(),
        status: editingMerchant?.status || 'active'
      };

      const result = await onSaveMerchant(payload);
      if (result) {
        showMessage(
          'success',
          editingMerchant
            ? `اطلاعات درگاه کارفرما "${result.title}" با موفقیت به‌روزرسانی شد.`
            : `کد مرچنت اختصاصی ${result.merchantCode} برای "${result.title}" صادر گردید!`
        );
        handleCancelEdit();
        onRefreshMerchants();
      } else {
        showMessage('error', 'خطا در ثبت اطلاعات درگاه.');
      }
    } catch (err: any) {
      showMessage('error', err?.message || 'خطا در اتصال به سرور.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleStatus = async (merchant: CustomMerchant) => {
    const nextStatus = merchant.status === 'active' ? 'suspended' : 'active';
    const updated = await onSaveMerchant({
      ...merchant,
      status: nextStatus
    });
    if (updated) {
      showMessage(
        'success',
        `وضعیت درگاه "${merchant.title}" به ${nextStatus === 'active' ? 'فعال' : 'مسدود'} تغییر یافت.`
      );
      onRefreshMerchants();
    }
  };

  const handleDelete = async (id: string) => {
    const success = await onDeleteMerchant(id);
    if (success) {
      showMessage('success', 'درگاه کارفرما با موفقیت حذف گردید.');
      setDeleteConfirmId(null);
      onRefreshMerchants();
    } else {
      showMessage('error', 'خطا در حذف درگاه.');
    }
  };

  const handleRunSimulator = async () => {
    if (!simMerchantCode) {
      alert('لطفاً ابتدا یک کد مرچنت انتخاب فرمایید.');
      return;
    }
    const safeAmount = Number(simAmount);
    if (!safeAmount || safeAmount < 1000) {
      alert('حداقل مبلغ تستی ۱,۰۰۰ تومان است.');
      return;
    }

    setIsSimulating(true);
    setSimResult(null);

    try {
      const res = await fetch('/api/pg/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          merchant: simMerchantCode.trim(),
          amount: safeAmount,
          orderId: simOrderId.trim() || `ORD-${Date.now()}`,
          callbackUrl: simCallbackUrl.trim() || 'https://jaheshit.ir',
          description: `تراکنش شبیه‌ساز جهش - خریدار: ${simCustomerName}`,
          mobile: simCustomerMobile.trim() || '09123456789',
          name: simCustomerName.trim()
        })
      });
      const data = await res.json();
      setSimResult(data);
      if (data && data.success) {
        onRefreshTransactions();
      }
    } catch (err: any) {
      setSimResult({ success: false, message: err?.message || 'خطا در اتصال به درگاه جهش.' });
    } finally {
      setIsSimulating(false);
    }
  };

  const handleInquiry = async (trackId: string) => {
    try {
      const res = await fetch(`/api/pg/inquiry/${encodeURIComponent(trackId)}`);
      const data = await res.json();
      if (data && data.success) {
        alert(
          `نتیجه استعلام وضعیت درگاه جهش:\n` +
          `کد تراکنش: ${data.trackId}\n` +
          `وضعیت: ${data.status}\n` +
          `مبلغ: ${Number(data.amount).toLocaleString('fa-IR')} تومان\n` +
          `کد پیگیری شاپرک: ${data.refNumber || 'ثبت نشده'}`
        );
      } else {
        alert(`نتیجه استعلام: ${data.message || 'اطلاعاتی یافت نشد'}`);
      }
      onRefreshTransactions();
    } catch (err: any) {
      alert(`خطا در استعلام: ${err?.message || 'نامشخص'}`);
    }
  };

  const filteredMerchants = customMerchants.filter((m) => {
    if (!merchantSearchQuery.trim()) return true;
    const q = merchantSearchQuery.toLowerCase();
    return (
      m.title?.toLowerCase().includes(q) ||
      m.websiteUrl?.toLowerCase().includes(q) ||
      m.merchantCode?.toLowerCase().includes(q) ||
      m.ownerName?.toLowerCase().includes(q) ||
      m.phone?.includes(q)
    );
  });

  const filteredTransactions = gatewayTransactions.filter((t) => {
    if (!txSearchQuery.trim()) return true;
    const q = txSearchQuery.toLowerCase();
    return (
      t.trackId?.toLowerCase().includes(q) ||
      t.merchantCode?.toLowerCase().includes(q) ||
      t.orderId?.toLowerCase().includes(q) ||
      t.payerName?.toLowerCase().includes(q) ||
      t.mobile?.includes(q) ||
      t.refNumber?.includes(q)
    );
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Action Message Alert */}
      {actionMessage && (
        <div
          className={`p-4 rounded-2xl flex items-center justify-between text-xs font-bold transition-all shadow-lg ${
            actionMessage.type === 'success'
              ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 shadow-emerald-900/30'
              : 'bg-rose-950/90 text-rose-300 border border-rose-500/50 shadow-rose-900/30'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {actionMessage.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            )}
            <span>{actionMessage.text}</span>
          </div>
          <button onClick={() => setActionMessage(null)} className="text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Internal Subtabs: Merchants, Transactions, Docs */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-black/60 border border-purple-500/30 backdrop-blur-xl">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveSubTab('merchants')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
              activeSubTab === 'merchants'
                ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-purple-900/50'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Globe className="w-4 h-4 text-cyan-300" />
            <span>پذیرندگان و درگاه‌های فعال</span>
            <span className="bg-cyan-500/30 text-cyan-200 text-[10px] px-2 py-0.5 rounded-full font-bold">
              {customMerchants.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('transactions')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
              activeSubTab === 'transactions'
                ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-purple-900/50'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Clock className="w-4 h-4 text-emerald-300" />
            <span>تراکنش‌های کارفرمایان</span>
            <span className="bg-emerald-500/30 text-emerald-200 text-[10px] px-2 py-0.5 rounded-full font-bold">
              {gatewayTransactions.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('docs')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
              activeSubTab === 'docs'
                ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-purple-900/50'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code2 className="w-4 h-4 text-amber-300" />
            <span>مستندات اتصال و نمونه کدها (API)</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            onRefreshMerchants();
            onRefreshTransactions();
          }}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold flex items-center gap-1.5 transition"
          title="تازه‌سازی اطلاعات"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${merchantsLoading || gatewayTxsLoading ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">بروزرسانی داده‌ها</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* SUBTAB 1: MERCHANTS (ISSUE CODES & REGISTER CLIENT SITES) */}
      {/* ======================================================== */}
      {activeSubTab === 'merchants' && (
        <div className="space-y-6">

          {/* Hero Banner with Facilitator Info */}
          <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#180a30] via-[#100720] to-[#080312] border border-cyan-500/40 shadow-2xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[11px] font-extrabold text-cyan-300 backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                  <span>سرویس جامع ارائه درگاه پرداخت به کارفرمایان و وب‌سایت‌های ثالث</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  صدور کد مرچنت اختصاصی و درگاه واسط برای وب‌سایت‌های دیگران
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  با این سیستم می‌توانید مانند شرکت‌های ارائه‌دهنده درگاه پرداخت، به مشتریان و وب‌سایت‌های دیگران درگاه متصل به جهش بدهید. آن‌ها با فراخوانی وب‌سرویس جهش، مشتریانشان را به صفحه پرداخت فوق‌العاده مدرن در دامنه جهش با آدرس اختصاصی هدایت می‌کنند و پس از پرداخت رسمی شاپرک (از طریق مرچنت اصلی جهش <span className="font-mono text-cyan-300 font-bold">{zibalMerchant}</span>)، کاربر با شماره پیگیری و نتیجه به سایت کارفرما برمی‌گردد.
                </p>
              </div>

              {/* Status and Master Merchant Badge */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0 w-full sm:w-auto">
                <div className="p-3.5 rounded-2xl bg-black/60 border border-cyan-500/30 text-right text-xs">
                  <div className="text-[11px] text-slate-400 font-semibold mb-1 flex items-center justify-between">
                    <span>مرچنت شاپرک اصلی سرور جهش:</span>
                    <span className="bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">فعال</span>
                  </div>
                  <div className="font-mono text-cyan-300 font-black text-sm select-all tracking-wider dir-ltr text-right">
                    {zibalMerchant}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>متصل به سوییچ پرداخت زیبال و شاپرک</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form to Register Client Site / Issue Merchant */}
          <div id="merchant-form-top" className="p-6 sm:p-7 rounded-3xl bg-[#120a28]/90 border border-purple-900/50 backdrop-blur-xl shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5 text-sm font-extrabold text-cyan-300">
                <Plus className="w-4 h-4 text-cyan-400" />
                <span>{editingMerchant ? 'ویرایش مشخصات درگاه کارفرما' : 'صدور کد مرچنت جدید و ثبت وب‌سایت کارفرما'}</span>
              </div>
              {editingMerchant && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-bold transition flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>انصراف از ویرایش</span>
                </button>
              )}
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Website / Business Title */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    نام وب‌سایت یا برند کارفرما <span className="text-rose-400">*</span>:
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="مثال: آکادمی آموزش آنلاین رادین | فروشگاه لباس ماهورا"
                    className="w-full bg-black/60 border border-purple-500/40 focus:border-cyan-400 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition"
                    required
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    آدرس دامنه وب‌سایت کارفرما <span className="text-rose-400">*</span>:
                  </label>
                  <input
                    type="url"
                    dir="ltr"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://client-website.ir"
                    className="w-full bg-black/60 border border-purple-500/40 focus:border-cyan-400 rounded-2xl px-4 py-3 text-xs sm:text-sm text-cyan-300 placeholder-slate-500 outline-none transition font-mono"
                    required
                  />
                </div>

                {/* Owner Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    نام و نام خانوادگی مدیر کارفرما <span className="text-rose-400">*</span>:
                  </label>
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="مثال: خانم سارا محمدی"
                    className="w-full bg-black/60 border border-purple-500/40 focus:border-cyan-400 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition"
                    required
                  />
                </div>

                {/* Mobile Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    شماره همراه مدیر:
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09123456789"
                    className="w-full bg-black/60 border border-purple-500/40 focus:border-cyan-400 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition font-mono"
                  />
                </div>

                {/* Sheba */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    شماره شبای بانکی جهت تسویه (اختیاری):
                  </label>
                  <input
                    type="text"
                    dir="ltr"
                    value={sheba}
                    onChange={(e) => setSheba(e.target.value)}
                    placeholder="IR120170000000123456789012"
                    className="w-full bg-black/60 border border-purple-500/40 focus:border-cyan-400 rounded-2xl px-4 py-3 text-xs sm:text-sm text-emerald-300 placeholder-slate-500 outline-none transition font-mono"
                  />
                </div>

                {/* Fee Percent */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    درصد کارمزد جهش از هر تراکنش (%):
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    value={feePercent}
                    onChange={(e) => setFeePercent(parseFloat(e.target.value) || 0)}
                    className="w-full bg-black/60 border border-purple-500/40 focus:border-cyan-400 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white outline-none transition font-mono"
                  />
                </div>

                {/* Notes */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    یادداشت یا توضیحات قرارداد کارفرما:
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="مثال: قرارداد طراحی سایت فروشگاهی - تسویه هفتگی سه‌شنبه‌ها"
                    className="w-full bg-black/60 border border-purple-500/40 focus:border-cyan-400 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                {editingMerchant && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold transition"
                  >
                    انصراف
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-cyan-900/40 flex items-center gap-2 transition disabled:opacity-50"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>{editingMerchant ? 'ذخیره تغییرات درگاه' : 'صدور آنی کد مرچنت و ثبت درگاه'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* SIMULATOR TEST BOX (Live Testing Client Website Checkout) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#100924] to-[#080415] border border-cyan-500/30 backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-sm font-extrabold text-amber-300">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>شبیه‌ساز و تست زنده اتصال درگاه کارفرما به سرور جهش</span>
              </div>
              <span className="text-[11px] text-slate-400">
                مشابه درخواستی که وب‌سایت کارفرما از بک‌اند خود به جهش ارسال می‌کند
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 font-semibold mb-1">کد مرچنت پذیرنده:</label>
                <select
                  value={simMerchantCode}
                  onChange={(e) => setSimMerchantCode(e.target.value)}
                  className="w-full bg-black/70 border border-purple-500/40 rounded-xl px-3 py-2 text-xs text-cyan-300 font-mono outline-none"
                >
                  {customMerchants.map((m) => (
                    <option key={m.id} value={m.merchantCode}>
                      {m.title} ({m.merchantCode})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 font-semibold mb-1">مبلغ تست (تومان):</label>
                <input
                  type="number"
                  value={simAmount}
                  onChange={(e) => setSimAmount(e.target.value)}
                  className="w-full bg-black/70 border border-purple-500/40 rounded-xl px-3 py-2 text-xs text-white font-mono outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 font-semibold mb-1">نام مشتری خریدار:</label>
                <input
                  type="text"
                  value={simCustomerName}
                  onChange={(e) => setSimCustomerName(e.target.value)}
                  placeholder="خانم سارا محمدی"
                  className="w-full bg-black/70 border border-purple-500/40 rounded-xl px-3 py-2 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 font-semibold mb-1">شماره سفارش کارفرما:</label>
                <input
                  type="text"
                  value={simOrderId}
                  onChange={(e) => setSimOrderId(e.target.value)}
                  className="w-full bg-black/70 border border-purple-500/40 rounded-xl px-3 py-2 text-xs text-white font-mono outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>با کلیک، توکن اختصاصی جهش صادر شده و صفحه تسویه‌حساب گرافیکی باز می‌شود</span>
              </div>

              <button
                type="button"
                onClick={handleRunSimulator}
                disabled={isSimulating}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-md shadow-amber-500/30 flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                <Zap className="w-4 h-4 text-black" />
                <span>{isSimulating ? 'در حال ارسال به درگاه جهش...' : 'ارسال درخواست پرداخت تستی به جهش'}</span>
              </button>
            </div>

            {/* Sim Result Box */}
            {simResult && (
              <div className="p-4 rounded-2xl bg-black/80 border border-amber-500/40 text-xs space-y-2 mt-3 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>درخواست با موفقیت در جهش ثبت شد!</span>
                  </div>
                  <span className="font-mono text-cyan-300 font-bold">Track ID: {simResult.trackId}</span>
                </div>
                <div className="text-slate-300 text-[11px]">
                  لینک صفحه درگاه پرداخت مشتری:
                  <a
                    href={simResult.paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline font-mono mr-2 inline-flex items-center gap-1"
                  >
                    <span>{simResult.paymentUrl}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href={simResult.paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs inline-flex items-center gap-1.5 transition shadow"
                  >
                    <span>ورود به صفحه تسویه و پرداخت شاپرک</span>
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* List of Registered Custom Merchants */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>لیست درگاه‌ها و پذیرندگان ثبت‌شده در جهش</span>
                <span className="bg-purple-900/60 text-purple-300 text-xs px-2.5 py-0.5 rounded-full font-mono">
                  {filteredMerchants.length}
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={merchantSearchQuery}
                  onChange={(e) => setMerchantSearchQuery(e.target.value)}
                  placeholder="جستجو بر اساس نام، آدرس یا کد مرچنت..."
                  className="w-full bg-black/60 border border-white/10 rounded-xl pr-9 pl-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
                />
              </div>
            </div>

            {filteredMerchants.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs bg-black/30 rounded-3xl border border-dashed border-purple-900/50">
                هیچ درگاهی با این مشخصات یافت نشد. از فرم بالا برای ثبت درگاه جدید استفاده کنید.
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredMerchants.map((merchant) => {
                  const isCopiedCode = copiedCodeId === merchant.id;
                  const isCopiedKey = copiedKeyId === merchant.id;
                  const isKeyRevealed = revealedKeyId === merchant.id;

                  return (
                    <div
                      key={merchant.id}
                      className="p-5 rounded-3xl bg-black/50 border border-purple-900/40 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-4 shadow-xl"
                    >
                      {/* Top Info */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-black text-white">{merchant.title}</h3>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                                merchant.status === 'active'
                                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                                  : 'bg-rose-950/80 text-rose-300 border-rose-500/40'
                              }`}
                            >
                              {merchant.status === 'active' ? 'فعال' : 'مسدود'}
                            </span>
                          </div>

                          <a
                            href={merchant.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-400 hover:text-cyan-300 font-mono inline-flex items-center gap-1"
                          >
                            <span>{merchant.websiteUrl}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>

                          <div className="text-[11px] text-slate-400 flex items-center gap-2 pt-1">
                            <span>مدیر: <strong className="text-slate-200">{merchant.ownerName}</strong></span>
                            <span>•</span>
                            <span>تماس: <span className="font-mono">{merchant.phone}</span></span>
                          </div>
                        </div>

                        {/* Status Toggle Switch */}
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(merchant)}
                          className={`p-2 rounded-xl border transition ${
                            merchant.status === 'active'
                              ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40 hover:bg-emerald-900'
                              : 'bg-rose-950 text-rose-300 border-rose-500/40 hover:bg-rose-900'
                          }`}
                          title={merchant.status === 'active' ? 'مسدودسازی درگاه' : 'فعال‌سازی مجدد درگاه'}
                        >
                          {merchant.status === 'active' ? (
                            <ToggleRight className="w-5 h-5" />
                          ) : (
                            <ToggleLeft className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {/* Merchant Code & Secret API Key Blocks */}
                      <div className="space-y-2 bg-[#0c051a] p-3 rounded-2xl border border-white/5 text-xs">
                        
                        {/* Merchant Code */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] text-slate-400 shrink-0">کد مرچنت جهش:</span>
                          <div className="flex items-center gap-1.5 overflow-hidden">
                            <span className="font-mono text-cyan-300 font-black text-xs select-all truncate">
                              {merchant.merchantCode}
                            </span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard(merchant.merchantCode, 'code', merchant.id)}
                              className="p-1.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900 text-cyan-300 transition"
                              title="کپی کد مرچنت برای کارفرما"
                            >
                              {isCopiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {/* API Key */}
                        {merchant.apiKey && (
                          <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/5">
                            <span className="text-[11px] text-slate-400 shrink-0">کلید API کارفرما:</span>
                            <div className="flex items-center gap-1.5 overflow-hidden">
                              <span className="font-mono text-slate-300 text-[11px] select-all truncate">
                                {isKeyRevealed
                                  ? merchant.apiKey
                                  : `${merchant.apiKey.slice(0, 10)}••••••••••••`}
                              </span>
                              <button
                                type="button"
                                onClick={() => setRevealedKeyId(isKeyRevealed ? null : merchant.id)}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
                                title={isKeyRevealed ? 'مخفی کردن' : 'نمایش کلید'}
                              >
                                {isKeyRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                              </button>
                              <button
                                type="button"
                                onClick={() => copyToClipboard(merchant.apiKey!, 'key', merchant.id)}
                                className="p-1.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900 text-cyan-300 transition"
                                title="کپی کلید API"
                              >
                                {isCopiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Fee and Sheba */}
                        <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5">
                          <span>کارمزد جهش: <strong className="text-amber-300 font-mono">{merchant.feePercent}%</strong></span>
                          <span>شبا: <span className="font-mono text-emerald-400">{merchant.sheba ? `${merchant.sheba.slice(0, 8)}...` : 'ثبت نشده'}</span></span>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/10">
                        <div className="text-[11px] text-slate-400">
                          حجم: <strong className="text-white font-mono">{Number(merchant.totalVolume || 0).toLocaleString('fa-IR')}</strong> ت
                        </div>

                        <div className="flex items-center gap-2">
                          {/* Test in Simulator */}
                          <button
                            type="button"
                            onClick={() => {
                              setSimMerchantCode(merchant.merchantCode);
                              const simBox = document.getElementById('merchant-form-top');
                              if (simBox) simBox.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold transition flex items-center gap-1"
                            title="تست درگاه با شبیه‌ساز"
                          >
                            <Zap className="w-3.5 h-3.5" />
                            <span>تست درگاه</span>
                          </button>

                          {/* Edit */}
                          <button
                            type="button"
                            onClick={() => handleStartEdit(merchant)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition"
                            title="ویرایش اطلاعات"
                          >
                            <Edit3 className="w-4 h-4 text-cyan-400" />
                          </button>

                          {/* Delete */}
                          {deleteConfirmId === merchant.id ? (
                            <div className="flex items-center gap-1 bg-rose-950/90 border border-rose-500/50 p-1 rounded-xl">
                              <button
                                type="button"
                                onClick={() => handleDelete(merchant.id)}
                                className="px-2 py-1 bg-rose-600 text-white text-[10px] font-bold rounded-lg hover:bg-rose-500"
                              >
                                تایید
                              </button>
                              <button
                                type="button"
                                onClick={() => setDeleteConfirmId(null)}
                                className="px-2 py-1 text-slate-300 text-[10px] hover:text-white"
                              >
                                لغو
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setDeleteConfirmId(merchant.id)}
                              className="p-2 rounded-xl bg-white/5 hover:bg-rose-900/40 text-slate-400 hover:text-rose-300 border border-white/10 hover:border-rose-500/40 transition"
                              title="حذف درگاه"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* SUBTAB 2: TRANSACTIONS LIST */}
      {/* ======================================================== */}
      {activeSubTab === 'transactions' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>تراکنش‌های درگاه‌های کارفرمایان متصل به جهش</span>
              </h3>
              <p className="text-xs text-slate-400">
                گزارش زنده تمام پرداخت‌های هدایت‌شده از وب‌سایت‌های دیگران به درگاه شاپرک جهش
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={txSearchQuery}
                onChange={(e) => setTxSearchQuery(e.target.value)}
                placeholder="جستجو با Track ID، شماره سفارش، نام..."
                className="w-full bg-black/60 border border-white/10 rounded-xl pr-9 pl-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
              />
            </div>
          </div>

          {filteredTransactions.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs bg-black/30 rounded-3xl border border-dashed border-purple-900/50">
              هنوز هیچ تراکنشی از طریق درگاه‌های کارفرمایان ثبت نشده است. از بخش شبیه‌ساز یا وب‌سایت کارفرما می‌توانید یک پرداخت تستی ارسال کنید.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-slate-300 font-bold">
                    <th className="p-3.5">کد رهگیری جهش</th>
                    <th className="p-3.5">پذیرنده / وب‌سایت</th>
                    <th className="p-3.5">سفارش کارفرما</th>
                    <th className="p-3.5">خریدار</th>
                    <th className="p-3.5">مبلغ (تومان)</th>
                    <th className="p-3.5">رسید شاپرک</th>
                    <th className="p-3.5">وضعیت</th>
                    <th className="p-3.5">زمان</th>
                    <th className="p-3.5 text-center">عملیات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id || tx.trackId} className="hover:bg-white/[0.02] transition">
                      <td className="p-3.5 font-mono text-cyan-300 font-bold select-all">
                        {tx.trackId}
                      </td>
                      <td className="p-3.5">
                        <div className="font-bold text-white">{tx.merchantTitle || tx.merchantCode}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{tx.clientWebsiteUrl || tx.merchantCode}</div>
                      </td>
                      <td className="p-3.5 font-mono text-slate-300">
                        {tx.orderId}
                      </td>
                      <td className="p-3.5">
                        <div className="text-white">{tx.payerName || 'نامشخص'}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{tx.mobile || '-'}</div>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-emerald-300">
                        {Number(tx.amount).toLocaleString('fa-IR')}
                      </td>
                      <td className="p-3.5 font-mono text-xs">
                        {tx.refNumber ? (
                          <span className="text-emerald-400 font-bold select-all">{tx.refNumber}</span>
                        ) : (
                          <span className="text-slate-500">-</span>
                        )}
                      </td>
                      <td className="p-3.5">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                            tx.status === 'PAID' || tx.status === 'VERIFIED'
                              ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                              : tx.status === 'INITIATED' || tx.status === 'PENDING_BANK'
                              ? 'bg-amber-950 text-amber-300 border-amber-500/40'
                              : 'bg-rose-950 text-rose-300 border-rose-500/40'
                          }`}
                        >
                          {tx.status === 'PAID' || tx.status === 'VERIFIED'
                            ? 'پرداخت موفق شاپرک'
                            : tx.status === 'PENDING_BANK'
                            ? 'در انتظار ورود به بانک'
                            : tx.status === 'INITIATED'
                            ? 'صدور توکن اولیه'
                            : 'ناموفق / لغو'}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-400 text-[11px] whitespace-nowrap">
                        {tx.createdAt ? new Date(tx.createdAt).toLocaleDateString('fa-IR') : '-'}
                      </td>
                      <td className="p-3.5 text-center">
                        <button
                          type="button"
                          onClick={() => handleInquiry(tx.trackId)}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-950 hover:text-cyan-300 text-slate-400 text-[10px] font-bold border border-white/10 transition"
                          title="استعلام آخرین وضعیت از سرور"
                        >
                          استعلام
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* SUBTAB 3: DEVELOPER API DOCUMENTATION & INTEGRATION GUIDE */}
      {/* ======================================================== */}
      {activeSubTab === 'docs' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#100824] border border-cyan-500/30 backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="space-y-1">
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-amber-400" />
                  <span>راهنمای فنی اتصال وب‌سایت کارفرما به درگاه جهش</span>
                </h3>
                <p className="text-xs text-slate-400">
                  برای اتصال وب‌سایت، فروشگاه یا اپلیکیشن مشتریان به جهش، این مراحل را در اختیار برنامه‌نویس کارفرما قرار دهید:
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                <span>Base URL:</span>
                <strong className="text-white">https://jaheshit.ir</strong>
              </div>
            </div>

            {/* Workflow steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-black">
                  ۱
                </div>
                <h4 className="text-xs font-bold text-white">درخواست ایجاد تراکنش (Request)</h4>
                <p className="text-[11px] text-slate-400">
                  وب‌سایت کارفرما با متد POST اندپوینت <code className="text-cyan-300 font-mono">/api/pg/request</code> را صدا زده و شناسه <code className="text-amber-300 font-mono">trackId</code> دریافت می‌کند.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-black">
                  ۲
                </div>
                <h4 className="text-xs font-bold text-white">هدایت به درگاه جهش و شاپرک</h4>
                <p className="text-[11px] text-slate-400">
                  کاربر به آدرس <code className="text-purple-300 font-mono">https://jaheshit.ir/pg/pay/:trackId</code> هدایت شده و سپس به درگاه رسمی شاپرک متصل می‌شود.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-black">
                  ۳
                </div>
                <h4 className="text-xs font-bold text-white">تایید و بازگشت به سایت کارفرما (Verify)</h4>
                <p className="text-[11px] text-slate-400">
                  پس از اتمام تراکنش، جهش نتیجه را به <code className="text-emerald-300 font-mono">callbackUrl</code> سایت کارفرما می‌فرستد و با متد <code className="text-cyan-300 font-mono">/api/pg/verify</code> اعتبارسنجی نهایی انجام می‌شود.
                </p>
              </div>
            </div>

            {/* Code Tabs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10">
                  {(['curl', 'php', 'js', 'node', 'wordpress'] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setDocsLang(lang)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition uppercase ${
                        docsLang === lang
                          ? 'bg-cyan-600 text-white shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {lang === 'js' ? 'JavaScript' : lang === 'node' ? 'Node.js' : lang}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const snippet = getDocSnippet(docsLang, customMerchants[0]?.merchantCode || 'JAHESH_MID_A84B9C21');
                    navigator.clipboard.writeText(snippet);
                    setCopiedSnippet(true);
                    setTimeout(() => setCopiedSnippet(false), 2000);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-xs font-bold transition flex items-center gap-1.5"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet ? 'کپی شد!' : 'کپی نمونه کد'}</span>
                </button>
              </div>

              {/* Code Pre Box */}
              <div className="relative">
                <pre
                  className="p-4 rounded-2xl bg-black/90 text-[11px] font-mono text-cyan-200 border border-white/10 overflow-x-auto leading-relaxed custom-scrollbar dir-ltr"
                >
                  {getDocSnippet(docsLang, customMerchants[0]?.merchantCode || 'JAHESH_MID_A84B9C21')}
                </pre>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

// Helper function to generate ready-to-copy integration code
function getDocSnippet(lang: string, sampleMerchant: string): string {
  switch (lang) {
    case 'curl':
      return `# ۱. ارسال درخواست پرداخت از وب‌سایت کارفرما به سرور جهش
curl -X POST https://jaheshit.ir/api/pg/request \\
  -H "Content-Type: application/json" \\
  -d '{
    "merchant": "${sampleMerchant}",
    "amount": 50000,
    "orderId": "ORD-10023",
    "callbackUrl": "https://yoursite.ir/payment/verify",
    "description": "خرید محصول از وب‌سایت",
    "mobile": "09123456789",
    "name": "خانم سارا محمدی"
  }'

# پاسخ سرور جهش:
# {
#   "success": true,
#   "trackId": "jh_trk_9a8b7c6d5e",
#   "paymentUrl": "https://jaheshit.ir/pg/pay/jh_trk_9a8b7c6d5e"
# }

# ۲. تایید تراکنش پس از بازگشت کاربر (Verify):
curl -X POST https://jaheshit.ir/api/pg/verify \\
  -H "Content-Type: application/json" \\
  -d '{
    "merchant": "${sampleMerchant}",
    "trackId": "jh_trk_9a8b7c6d5e"
  }'`;

    case 'php':
      return `<?php
// مرحله ۱: ارسال درخواست به درگاه جهش
$requestData = [
    'merchant'    => '${sampleMerchant}',
    'amount'      => 50000, // مبلغ به تومان
    'orderId'     => 'ORD-' . time(),
    'callbackUrl' => 'https://yoursite.ir/payment/callback.php',
    'description' => 'پرداخت سفارش کارفرما',
    'mobile'      => '09123456789',
    'name'        => 'خانم سارا محمدی'
];

$ch = curl_init('https://jaheshit.ir/api/pg/request');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($requestData));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = json_decode(curl_exec($ch), true);
curl_close($ch);

if (!empty($response['success']) && !empty($response['paymentUrl'])) {
    // هدایت مشتری به درگاه اختصاصی جهش
    header('Location: ' . $response['paymentUrl']);
    exit;
} else {
    echo 'خطا در ایجاد تراکنش: ' . ($response['message'] ?? 'نامشخص');
}
?>`;

    case 'js':
      return `// کلاینت یا سرور جاوااسکریپت (Fetch)
async function startJaheshPayment() {
  const response = await fetch('https://jaheshit.ir/api/pg/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      merchant: '${sampleMerchant}',
      amount: 50000, // مبلغ به تومان
      orderId: 'ORDER_' + Date.now(),
      callbackUrl: window.location.origin + '/payment/verify',
      description: 'پرداخت آنلاین فاکتور',
      mobile: '09123456789',
      name: 'خانم سارا محمدی'
    })
  });

  const data = await response.json();
  if (data.success && data.paymentUrl) {
    // انتقال فوری کاربر به درگاه جهش
    window.location.href = data.paymentUrl;
  } else {
    alert('خطا در اتصال به درگاه: ' + data.message);
  }
}`;

    case 'node':
      return `const axios = require('axios');

// ۱. ارسال درخواست پرداخت به سرور جهش
async function createInvoice() {
  const res = await axios.post('https://jaheshit.ir/api/pg/request', {
    merchant: '${sampleMerchant}',
    amount: 50000,
    orderId: 'ORD-98765',
    callbackUrl: 'https://yoursite.ir/api/checkout/callback',
    description: 'خرید اشتراک سالانه',
    mobile: '09123456789',
    name: 'خانم سارا محمدی'
  });

  return res.data.paymentUrl;
}

// ۲. اعتبارسنجی تراکنش پس از بازگشت بانک (Verify)
async function verifyInvoice(trackId) {
  const res = await axios.post('https://jaheshit.ir/api/pg/verify', {
    merchant: '${sampleMerchant}',
    trackId: trackId
  });

  return res.data; // { success: true, refNumber: "123456", amount: 50000 }
}`;

    case 'wordpress':
      return `// نمونه کد اتصال ووکامرس / وردپرس به درگاه جهش
add_action('woocommerce_receipt_jahesh_gateway', 'receipt_page_jahesh');

function receipt_page_jahesh($order_id) {
    $order = wc_get_order($order_id);
    $merchant_code = '${sampleMerchant}';

    $body = wp_json_encode([
        'merchant'    => $merchant_code,
        'amount'      => (int)$order->get_total(),
        'orderId'     => (string)$order_id,
        'callbackUrl' => WC()->api_request_url('jahesh_callback'),
        'description' => 'پرداخت سفارش #' . $order_id,
        'mobile'      => $order->get_billing_phone(),
        'name'        => $order->get_formatted_billing_full_name()
    ]);

    $response = wp_remote_post('https://jaheshit.ir/api/pg/request', [
        'headers' => ['Content-Type' => 'application/json'],
        'body'    => $body,
        'timeout' => 30
    ]);

    $data = json_decode(wp_remote_retrieve_body($response), true);
    if (!empty($data['paymentUrl'])) {
        wp_redirect($data['paymentUrl']);
        exit;
    }
}`;

    default:
      return '';
  }
}
