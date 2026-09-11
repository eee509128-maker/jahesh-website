import React, { useState } from 'react';
import {
  Ticket, Plus, CheckCircle2, Copy, Check,
  AlertCircle, ShieldCheck, Sparkles, Key, Share2
} from 'lucide-react';
import { UserWallet, TcVoucher, ArzTransaction } from '../../types/jaheshArz';
import confetti from 'canvas-confetti';

interface VoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallets: UserWallet[];
  vouchers: TcVoucher[];
  onIssueVoucher: (walletId: string, voucher: TcVoucher, tx: ArzTransaction) => void;
  onRedeemVoucher: (voucherNumber: string, activationCode: string, targetWalletId: string) => void;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

export const VoucherModal: React.FC<VoucherModalProps> = ({
  isOpen,
  onClose,
  wallets,
  vouchers,
  onIssueVoucher,
  onRedeemVoucher,
}) => {
  const [activeTab, setActiveTab] = useState<'issue' | 'redeem' | 'list'>('issue');
  const [sourceWalletId, setSourceWalletId] = useState<string>(
    wallets.find((w) => w.currency === 'USD')?.id || wallets[0]?.id || ''
  );
  const [amount, setAmount] = useState<string>('50');

  // Redeem form
  const [redeemNumber, setRedeemNumber] = useState('');
  const [redeemCode, setRedeemCode] = useState('');
  const [redeemTargetWalletId, setRedeemTargetWalletId] = useState(wallets[0]?.id || '');

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const currentWallet = wallets.find((w) => w.id === sourceWalletId) || wallets[0];
  const numAmount = Number(amount) || 0;

  const handleIssueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (numAmount <= 0) {
      setErrorMsg('لطفاً مبلغ معتبری برای ووچر وارد کنید.');
      return;
    }

    if (numAmount > currentWallet.balance) {
      setErrorMsg(`موجودی کیف پول برای صدور این ووچر کافی نیست.`);
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const randomPart = () => Math.floor(1000 + Math.random() * 9000);
      const vNum = `TC-${randomPart()}-${randomPart()}-${randomPart()}-${randomPart()}`;
      const actCode = `${Math.floor(10000000 + Math.random() * 90000000)}`;

      const newVoucher: TcVoucher = {
        id: `vouch-${Date.now()}`,
        voucherNumber: vNum,
        activationCode: actCode,
        currency: currentWallet.currency,
        amount: numAmount,
        createdAt: new Date().toLocaleDateString('fa-IR'),
        expiresAt: '۱ سال پس از صدور',
        status: 'active',
      };

      const trackingNum = `TC-VOUCH-${Math.floor(100000 + Math.random() * 900000)}`;
      const newTx: ArzTransaction = {
        id: `tx-${Date.now()}`,
        trackingNumber: trackingNum,
        type: 'voucher_issue',
        typeTitle: `صدور ووچر تاپ چنج (${currentWallet.currency})`,
        currency: currentWallet.currency,
        amount: numAmount,
        fee: 0,
        finalAmount: numAmount,
        status: 'completed',
        statusLabel: 'تکمیل شده',
        message: `ووچر الکترونیکی به شماره ${vNum} صادر شد و آماده استفاده است.`,
        destinationInfo: `${vNum} (کد: ${actCode})`,
        createdAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        updatedAt: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };

      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {}

      onIssueVoucher(currentWallet.id, newVoucher, newTx);
      setActiveTab('list');
    }, 900);
  };

  const handleRedeemSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!redeemNumber || !redeemCode) {
      setErrorMsg('لطفاً شماره ووچر و کد فعالسازی را وارد نمایید.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      onRedeemVoucher(redeemNumber, redeemCode, redeemTargetWalletId);
      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch {}
      onClose();
    }, 1000);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-white dark:bg-[#140d30] border border-purple-300 dark:border-purple-800/80 rounded-3xl p-5 sm:p-6 w-full max-w-lg shadow-2xl space-y-4 text-right my-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-purple-900/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                ووچرهای الکترونیکی (TopChange Voucher)
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                صدور و نقد کردن آنی ووچرهای بین‌المللی ارزی
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-purple-950 text-slate-500 hover:text-slate-800 dark:text-slate-300 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab switch */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 dark:bg-[#1d1445] rounded-2xl">
          <button
            type="button"
            onClick={() => setActiveTab('issue')}
            className={`py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              activeTab === 'issue'
                ? 'bg-white dark:bg-purple-600 text-slate-950 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            صدور ووچر جدید
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('redeem')}
            className={`py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              activeTab === 'redeem'
                ? 'bg-white dark:bg-purple-600 text-slate-950 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            فعال‌سازی (نقد کردن)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('list')}
            className={`py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              activeTab === 'list'
                ? 'bg-white dark:bg-purple-600 text-slate-950 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            ووچرهای من ({vouchers.length})
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Tab 1: Issue Voucher */}
        {activeTab === 'issue' && (
          <form onSubmit={handleIssueSubmit} className="space-y-4 text-xs">
            <div className="space-y-1.5">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                انتخاب کیف پول برای کسر مبلغ ووچر:
              </label>
              <select
                value={sourceWalletId}
                onChange={(e) => setSourceWalletId(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 text-xs text-slate-900 dark:text-white font-medium"
              >
                {wallets.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.name} - موجودی: {formatNumber(w.balance)} {w.currency === 'IRR' ? 'تومان' : w.symbol}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                مبلغ ووچر ({currentWallet.currency === 'IRR' ? 'تومان' : currentWallet.symbol}):
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-mono font-bold text-slate-900 dark:text-white text-sm"
                placeholder="50"
              />
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-200 leading-relaxed">
              پس از صدور، یک شماره ووچر ۱۶ رقمی و یک کد فعالسازی ۸ رقمی برای شما تولید می‌شود که می‌توانید آن را به دوستان خود ارسال نموده یا در سایر وب‌سایت‌های پذیرنده TC نقد نمایید.
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="flex-1 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>در حال صدور ووچر...</span>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>صدور آنی ووچر</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-purple-950 dark:hover:bg-purple-900 text-slate-700 dark:text-slate-300 font-bold text-xs cursor-pointer"
              >
                انصراف
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Redeem Voucher */}
        {activeTab === 'redeem' && (
          <form onSubmit={handleRedeemSubmit} className="space-y-4 text-xs">
            <div className="space-y-1.5">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                شماره ۱۶ رقمی ووچر:
              </label>
              <input
                type="text"
                value={redeemNumber}
                onChange={(e) => setRedeemNumber(e.target.value)}
                placeholder="TC-8821-4902-9912-3301"
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-mono text-slate-900 dark:text-amber-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                کد فعالسازی ۸ رقمی (Activation Code):
              </label>
              <input
                type="text"
                value={redeemCode}
                onChange={(e) => setRedeemCode(e.target.value)}
                placeholder="74829104"
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 font-mono text-slate-900 dark:text-white"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-slate-700 dark:text-slate-300 font-bold">
                کیف پول مقصد برای واریز وجه ووچر:
              </label>
              <select
                value={redeemTargetWalletId}
                onChange={(e) => setRedeemTargetWalletId(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#1c1344] border border-slate-300 dark:border-purple-800 rounded-xl p-2.5 text-xs text-slate-900 dark:text-white font-medium"
              >
                {wallets.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.name} ({w.accountNumber})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="flex-1 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? <span>در حال فعالسازی و شارژ حساب...</span> : <span>نقد کردن و افزایش موجودی</span>}
              </button>
            </div>
          </form>
        )}

        {/* Tab 3: List of Vouchers */}
        {activeTab === 'list' && (
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {vouchers.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs">
                هنوز هیچ ووچری صادر نکرده‌اید.
              </div>
            ) : (
              vouchers.map((v) => (
                <div
                  key={v.id}
                  className="bg-slate-50 dark:bg-[#1c1344] border border-slate-200 dark:border-purple-900/50 rounded-2xl p-3.5 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-sm text-purple-700 dark:text-amber-400">
                        {formatNumber(v.amount)} {v.currency === 'IRR' ? 'تومان' : v.currency}
                      </span>
                      <span className="text-[10px] text-slate-400">({v.createdAt})</span>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        v.status === 'active'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-200 text-slate-700 dark:bg-purple-950 dark:text-slate-400'
                      }`}
                    >
                      {v.status === 'active' ? 'فعال و آماده مصرف' : 'استفاده‌شده'}
                    </span>
                  </div>

                  {/* Voucher numbers & Copy */}
                  <div className="space-y-1 bg-white dark:bg-[#140d30] p-2.5 rounded-xl border border-slate-200 dark:border-purple-950 font-mono text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">شماره:</span>
                      <div className="flex items-center gap-1 text-slate-900 dark:text-white">
                        <span>{v.voucherNumber}</span>
                        <button
                          onClick={() => handleCopy(v.voucherNumber, `vn-${v.id}`)}
                          className="text-slate-400 hover:text-purple-600"
                        >
                          {copiedId === `vn-${v.id}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">کد فعالسازی:</span>
                      <div className="flex items-center gap-1 text-slate-900 dark:text-white">
                        <span>{v.activationCode}</span>
                        <button
                          onClick={() => handleCopy(v.activationCode, `ac-${v.id}`)}
                          className="text-slate-400 hover:text-purple-600"
                        >
                          {copiedId === `ac-${v.id}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
