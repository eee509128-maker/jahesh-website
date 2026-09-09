export interface ZibalRequestParams {
  amountInTomans: number;
  orderId: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  description?: string;
  merchant?: string;
  callbackUrl?: string;
}

export interface ZibalRequestResponse {
  success: boolean;
  trackId?: number | string;
  paymentUrl?: string;
  result?: number;
  message?: string;
  error?: string;
  isIpError?: boolean;
  isSandboxFallback?: boolean;
  detectedIp?: string;
  merchantUsed?: string;
  guidance?: string;
}

export interface ZibalVerifyResponse {
  success: boolean;
  result?: number;
  status?: number;
  refNumber?: string;
  amountInTomans?: number;
  amountInRials?: number;
  paidAt?: string;
  cardNumber?: string;
  orderId?: string;
  message?: string;
  error?: string;
  isIpError?: boolean;
  isSandboxFallback?: boolean;
  detectedIp?: string;
  merchantUsed?: string;
  guidance?: string;
}

export const ZIBAL_DEFAULT_MERCHANT = '6a9db4410df8756c31ea5d00';

/**
 * Resolves the active merchant code from parameter, env, or localStorage
 */
export function getActiveZibalMerchant(merchantOverride?: string): string {
  if (
    merchantOverride &&
    typeof merchantOverride === 'string' &&
    merchantOverride.trim() &&
    merchantOverride !== 'undefined' &&
    merchantOverride !== 'null'
  ) {
    return merchantOverride.trim();
  }

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('jahesh_zibal_merchant');
    if (saved && saved.trim() && saved !== 'zibal-jahesh-gateway') {
      return saved.trim();
    }
  }

  const envMerchant = (import.meta as any)?.env?.VITE_ZIBAL_MERCHANT;
  if (envMerchant && typeof envMerchant === 'string' && envMerchant.trim()) {
    return envMerchant.trim();
  }

  return ZIBAL_DEFAULT_MERCHANT;
}

/**
 * Sends payment request to our backend API with automatic fallback routes
 */
export async function requestZibalPayment(params: ZibalRequestParams): Promise<ZibalRequestResponse> {
  let defaultCallback = 'https://jaheshit.ir/jaheshkala';
  if (typeof window !== 'undefined') {
    const cleanPath = window.location.pathname.replace(/\/+$/, '');
    defaultCallback = `${window.location.origin}${cleanPath || '/jaheshkala'}`;
  }
  const callbackUrl = params.callbackUrl || defaultCallback;
  const merchant = getActiveZibalMerchant(params.merchant);

  const payload = {
    amountInTomans: params.amountInTomans,
    orderId: params.orderId,
    callbackUrl,
    description: params.description || `سفارش شماره ${params.orderId} - فروشگاه آنلاین جهش کالا`,
    mobile: params.customerPhone,
    customerPhone: params.customerPhone,
    customerName: params.customerName,
    merchant,
  };

  // Primary attempt: standard serverless/express endpoint
  try {
    const res = await fetch('/api/zibal-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data: ZibalRequestResponse = await res.json();
      if (data.success && data.paymentUrl) {
        return data;
      }
      // If endpoint returned structured IP error or failure, return it
      if (data.result !== undefined) {
        return data;
      }
    }
  } catch (err: any) {
    console.warn('[Zibal] Primary /api/zibal-request route failed, trying fallback...', err);
  }

  // Secondary fallback: Vercel rewrite proxy route (/api/zibal-proxy/request)
  try {
    const proxyPayload = {
      merchant,
      amount: Math.round(Number(params.amountInTomans) * 10),
      callbackUrl,
      description: payload.description,
      orderId: String(params.orderId),
      mobile: params.customerPhone ? String(params.customerPhone) : undefined,
    };

    const proxyRes = await fetch('/api/zibal-proxy/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proxyPayload),
    });

    if (proxyRes.ok) {
      const proxyData = await proxyRes.json();
      if (proxyData.result === 100) {
        return {
          success: true,
          trackId: proxyData.trackId,
          paymentUrl: `https://gateway.zibal.ir/start/${proxyData.trackId}`,
          result: 100,
          message: 'اتصال به درگاه زیبال با موفقیت انجام شد.',
          merchantUsed: merchant,
        };
      } else if (proxyData.result === 113 || proxyData.result === 115) {
        return {
          success: false,
          result: proxyData.result,
          isIpError: true,
          detectedIp: proxyData.message,
          message: `محدودیت IP در پنل زیبال فعال است (${proxyData.message || 'IP سرور'}). لطفاً در پنل زیبال گزینه محدودیت IP را غیرفعال فرمایید.`,
          merchantUsed: merchant,
        };
      }
    }
  } catch (fallbackErr: any) {
    console.warn('[Zibal] Secondary proxy route exception:', fallbackErr);
  }

  return {
    success: false,
    isIpError: false,
    error: 'خطا در برقراری ارتباط با درگاه پرداخت زیبال. لطفاً اتصال اینترنت خود را بررسی نموده یا از پنل مدیریت مرچنت را چک کنید.',
    message: 'خطا در برقراری ارتباط با درگاه پرداخت زیبال.',
  };
}

/**
 * Verifies transaction with Zibal after customer returns from payment gateway
 */
export async function verifyZibalPayment(trackId: string | number, merchant?: string): Promise<ZibalVerifyResponse> {
  const activeMerchant = getActiveZibalMerchant(merchant);

  // Primary attempt: /api/zibal-verify
  try {
    const res = await fetch('/api/zibal-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trackId,
        merchant: activeMerchant,
      }),
    });

    if (res.ok) {
      const data: ZibalVerifyResponse = await res.json();
      return data;
    }
  } catch (err: any) {
    console.warn('[Zibal Verify] Primary verify route failed, trying fallback...', err);
  }

  // Fallback: Vercel rewrite proxy verify route (/api/zibal-proxy/verify)
  try {
    const proxyRes = await fetch('/api/zibal-proxy/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        merchant: activeMerchant,
        trackId: Number(trackId),
      }),
    });

    if (proxyRes.ok) {
      const data = await proxyRes.json();
      if (data.result === 100 || data.result === 201) {
        return {
          success: true,
          result: data.result,
          status: data.status,
          refNumber: data.refNumber ? String(data.refNumber) : String(trackId),
          amountInRials: data.amount,
          amountInTomans: data.amount ? Math.round(data.amount / 10) : undefined,
          paidAt: data.paidAt || new Date().toISOString(),
          cardNumber: data.cardNumber || '۵۸۹۲۱۰******۷۸۹۰',
          orderId: data.orderId || '',
          message: 'پرداخت با موفقیت تأیید شد.',
        };
      }
    }
  } catch (fallbackErr: any) {
    console.warn('[Zibal Verify] Proxy verify exception:', fallbackErr);
  }

  return {
    success: false,
    error: 'خطا در استعلام وضعیت پرداخت از سرور زیبال.',
    message: 'خطا در استعلام وضعیت پرداخت از سرور زیبال.',
  };
}

/**
 * Helper to save pending order before redirecting to bank
 */
export function savePendingOrder(orderData: any) {
  try {
    localStorage.setItem('jahesh_pending_payment_order', JSON.stringify(orderData));
  } catch (e) {
    console.warn('Could not save pending order to localStorage:', e);
  }
}

/**
 * Helper to get pending order after returning from bank
 */
export function getPendingOrder(): any | null {
  try {
    const data = localStorage.getItem('jahesh_pending_payment_order');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.warn('Could not parse pending order:', e);
    return null;
  }
}

/**
 * Helper to clear pending order
 */
export function clearPendingOrder() {
  try {
    localStorage.removeItem('jahesh_pending_payment_order');
  } catch (e) {
    // ignore
  }
}
