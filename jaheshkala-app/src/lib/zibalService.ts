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
}

export interface ZibalVerifyResponse {
  success: boolean;
  refNumber?: string;
  amountInTomans?: number;
  amountInRials?: number;
  paidAt?: string;
  cardNumber?: string;
  orderId?: string;
  message?: string;
  error?: string;
}

export const ZIBAL_DEFAULT_MERCHANT = '6a9db4410df8756c31ea5d00';

/**
 * Sends payment request directly to Zibal API from the browser (client-side).
 * This bypasses server IP whitelist restrictions on Vercel.
 */
export async function requestZibalPayment(params: ZibalRequestParams): Promise<ZibalRequestResponse> {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://jaheshit.ir';
  const callbackUrl = params.callbackUrl || `${currentOrigin}/jaheshkala`;
  const merchantId = params.merchant || ZIBAL_DEFAULT_MERCHANT;

  const zibalPayload = {
    merchant: merchantId,
    amount: params.amountInTomans * 10, // Zibal expects Rials
    callbackUrl,
    description: params.description || `سفارش شماره ${params.orderId} - فروشگاه آنلاین جهش کالا`,
    orderId: params.orderId,
    mobile: params.customerPhone || '',
  };

  try {
    const res = await fetch('https://gateway.zibal.ir/v1/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zibalPayload),
    });

    const data = await res.json();

    if (data.result === 100 && data.trackId) {
      return {
        success: true,
        trackId: data.trackId,
        paymentUrl: `https://gateway.zibal.ir/start/${data.trackId}`,
        result: data.result,
      };
    } else {
      const zibalErrors: Record<number, string> = {
        102: 'مرچنت یافت نشد. کد مرچنت زیبال را بررسی کنید.',
        103: 'مرچنت غیرفعال است.',
        104: 'مرچنت نامعتبر است.',
        201: 'قبلاً تأیید شده است.',
        105: 'مبلغ باید بیشتر از ۱,۰۰۰ ریال باشد.',
        106: 'آدرس بازگشت (callbackUrl) نامعتبر است.',
        113: 'مبلغ تراکنش با سقف مجاز مطابقت ندارد.',
      };
      const msg = zibalErrors[data.result] || `خطای زیبال: کد ${data.result}`;
      return {
        success: false,
        result: data.result,
        message: msg,
        error: msg,
      };
    }
  } catch (err: any) {
    console.error('Error contacting Zibal directly:', err);
    // Fallback: try via server-side proxy if direct call fails (e.g. CORS issues)
    try {
      const res2 = await fetch('/api/zibal-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amountInTomans: params.amountInTomans,
          orderId: params.orderId,
          callbackUrl,
          description: params.description,
          mobile: params.customerPhone,
          merchant: merchantId,
        }),
      });
      const data2 = await res2.json();
      return data2;
    } catch (err2: any) {
      return {
        success: false,
        error: 'خطا در برقراری ارتباط با درگاه پرداخت. اتصال اینترنت را بررسی کنید.',
      };
    }
  }
}

/**
 * Verifies transaction with Zibal after customer returns from payment gateway
 */
export async function verifyZibalPayment(trackId: string | number, merchant?: string): Promise<ZibalVerifyResponse> {
  try {
    const res = await fetch('/api/zibal-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trackId,
        merchant: merchant || ZIBAL_DEFAULT_MERCHANT,
      }),
    });

    const data = await res.json();
    return data;
  } catch (err: any) {
    console.error('Error contacting /api/zibal-verify:', err);
    return {
      success: false,
      error: err.message || 'خطا در استعلام وضعیت پرداخت از سرور',
    };
  }
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
