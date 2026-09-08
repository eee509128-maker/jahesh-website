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
 * Sends payment request to our backend API which forwards to Zibal
 */
export async function requestZibalPayment(params: ZibalRequestParams): Promise<ZibalRequestResponse> {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://jaheshit.ir';
  const callbackUrl = params.callbackUrl || `${currentOrigin}/jaheshkala`;

  const payload = {
    amountInTomans: params.amountInTomans,
    orderId: params.orderId,
    callbackUrl,
    description: params.description || `سفارش شماره ${params.orderId} - فروشگاه آنلاین جهش کالا`,
    mobile: params.customerPhone,
    merchant: params.merchant || ZIBAL_DEFAULT_MERCHANT,
  };

  try {
    const res = await fetch('/api/zibal-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  } catch (err: any) {
    console.error('Error contacting /api/zibal-request:', err);
    return {
      success: false,
      error: err.message || 'خطا در برقراری ارتباط با سرور پرداخت',
    };
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
