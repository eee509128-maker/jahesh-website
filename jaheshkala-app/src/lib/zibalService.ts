import { safeSetLocalStorage } from './dbService';
export interface ZibalRequestParams {
  amountInTomans: number;
  orderId: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  description?: string;
  merchant?: string;
  callbackUrl?: string;
  orderData?: any;
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
}

export const ZIBAL_DEFAULT_MERCHANT = '6a9db4410df8756c31ea5d00';

/**
 * Sends payment request to our backend API which forwards to Zibal
 */
export async function requestZibalPayment(params: ZibalRequestParams): Promise<ZibalRequestResponse> {
  let defaultCallback = 'https://jaheshit.ir/jaheshkala';
  if (typeof window !== 'undefined') {
    const cleanPath = window.location.pathname.replace(/\/+$/, '');
    defaultCallback = `${window.location.origin}${cleanPath || '/jaheshkala'}`;
  }
  const callbackUrl = params.callbackUrl || defaultCallback;

  const payload = {
    amountInTomans: params.amountInTomans,
    orderId: params.orderId,
    callbackUrl,
    description: params.description || `سفارش شماره ${params.orderId} - فروشگاه آنلاین جهش کالا`,
    mobile: params.customerPhone,
    merchant: params.merchant || ZIBAL_DEFAULT_MERCHANT,
    orderData: params.orderData,
  };

  const candidateEndpoints = [
    '/api/zibal-request',
    'https://erfanmogaddam--d91a5504c02211f1849a1607ee4eb77e.web.val.run/request',
    '/api/zibal-request.php',
    '/jaheshkala/api.php?action=zibal-request'
  ];

  for (const ep of candidateEndpoints) {
    try {
      const res = await fetch(ep, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        if (data && (data.success || data.trackId || data.result === 100)) {
          return {
            success: true,
            trackId: data.trackId,
            result: data.result || 100,
            message: data.message || 'درخواست پرداخت با موفقیت ایجاد شد',
            paymentUrl: data.paymentUrl || `https://gateway.zibal.ir/start/${data.trackId}`,
          };
        }
      }
    } catch (err: any) {
      console.warn(`[ZibalService] Failed endpoint ${ep}:`, err);
    }
  }

  return {
    success: false,
    error: 'خطا در برقراری ارتباط با سرور پرداخت زیپال. لطفاً اتصال اینترنت را بررسی فرمایید.',
  };
}

/**
 * Verifies transaction with Zibal after customer returns from payment gateway
 */
export async function verifyZibalPayment(trackId: string | number, merchant?: string): Promise<ZibalVerifyResponse> {
  const candidateVerifyEndpoints = [
    '/api/zibal-verify',
    'https://erfanmogaddam--d91a5504c02211f1849a1607ee4eb77e.web.val.run/verify',
    '/api/zibal-verify.php',
    '/jaheshkala/api.php?action=zibal-verify'
  ];

  for (const vep of candidateVerifyEndpoints) {
    try {
      const res = await fetch(vep, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trackId: String(trackId).trim(),
          merchant: merchant || ZIBAL_DEFAULT_MERCHANT,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data && (data.success || data.result === 100 || data.result === 201)) {
          return data;
        }
      }
    } catch (err: any) {
      console.warn(`[ZibalService] Verify endpoint ${vep} failed:`, err);
    }
  }

  return {
    success: false,
    error: 'خطا در استعلام وضعیت پرداخت از سرور زیپال',
  };
}

/**
 * Helper to save pending order before redirecting to bank
 */
export function savePendingOrder(orderData: any) {
  try {
    const str = JSON.stringify(orderData);
    safeSetLocalStorage('jahesh_pending_payment_order', str);
    sessionStorage.setItem('jahesh_pending_payment_order', str);
    if (orderData?.id) {
      safeSetLocalStorage(`jahesh_order_${orderData.id}`, str);
    }
  } catch (e) {
    console.warn('Could not save pending order to storage:', e);
  }
}

/**
 * Helper to get pending order after returning from bank
 */
export function getPendingOrder(specificOrderId?: string): any | null {
  try {
    if (specificOrderId) {
      const byId = localStorage.getItem(`jahesh_order_${specificOrderId}`);
      if (byId) return JSON.parse(byId);
    }
    const data = localStorage.getItem('jahesh_pending_payment_order') || sessionStorage.getItem('jahesh_pending_payment_order');
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
    sessionStorage.removeItem('jahesh_pending_payment_order');
  } catch (e) {
    // ignore
  }
}
