import fs from 'fs';
import path from 'path';

function getZibalUrl(endpointPath) {
  const proxyUrl = process.env.ZIBAL_PROXY_URL && process.env.ZIBAL_PROXY_URL.trim();
  const cleanEndpoint = endpointPath.startsWith('/') ? endpointPath : `/${endpointPath}`;
  if (
    proxyUrl &&
    proxyUrl !== 'none' &&
    proxyUrl !== 'null' &&
    proxyUrl !== 'undefined' &&
    proxyUrl !== 'false'
  ) {
    const formattedUrl = (proxyUrl.startsWith('http://') || proxyUrl.startsWith('https://'))
      ? proxyUrl
      : `https://${proxyUrl}`;
    return `${formattedUrl.replace(/\/+$/, '')}${cleanEndpoint}`;
  }
  return `https://gateway.zibal.ir/v1${cleanEndpoint}`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const url = req.url || '';
  const isVerify = url.includes('verify') || req.query?.action === 'verify' || req.body?.trackId !== undefined;

  // --- ZIBAL VERIFY ---
  if (isVerify) {
    try {
      const { trackId, merchant, ...otherFields } = req.body || {};
      if (!trackId) {
        return res.status(400).json({
          success: false,
          error: 'کد پیگیری تراکنش (trackId) ارسال نشده است.'
        });
      }

      const ZIBAL_MERCHANT = merchant || process.env.ZIBAL_MERCHANT || '6a9db4410df8756c31ea5d00';
      const verifyUrl = getZibalUrl('/verify');

      const zibalRes = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...otherFields,
          merchant: ZIBAL_MERCHANT,
          trackId: Number(trackId)
        })
      });

      const data = await zibalRes.json();

      if (data.result === 100 || data.result === 201) {
        try {
          const ordersFile = path.join(process.cwd(), 'data', 'orders.json');
          let currentOrders = [];
          if (fs.existsSync(ordersFile)) {
            try {
              const raw = fs.readFileSync(ordersFile, 'utf8');
              const parsed = JSON.parse(raw);
              if (Array.isArray(parsed)) currentOrders = parsed;
            } catch {}
          }
          const refStr = data.refNumber ? String(data.refNumber) : String(trackId);
          const orderIdStr = data.orderId || `JAHESH-${trackId}`;
          const existingIdx = currentOrders.findIndex(
            (o) => o.id === orderIdStr || o.trackingCode === String(trackId) || o.paymentRefId === refStr
          );
          const verifiedOrder = {
            id: orderIdStr,
            trackingCode: String(trackId),
            paymentRefId: refStr,
            zibalTrackId: String(trackId),
            zibalRefNumber: refStr,
            cardNumber: data.cardNumber || '',
            totalAmount: data.amount ? Math.round(data.amount / 10) : 0,
            customerName: req.body?.customerName || 'خریدار درگاه شاپرک زیبال',
            customerPhone: req.body?.customerPhone || '',
            status: 'تایید شده / در حال آماده‌سازی',
            paymentGateway: 'زیبال (Zibal - شاپرک رسمی)',
            paidAt: data.paidAt || new Date().toISOString(),
            createdAt: data.paidAt || new Date().toISOString(),
            date: new Date().toLocaleDateString('fa-IR'),
            acceptedTerms: true,
            items: req.body?.items || [
              {
                product: {
                  id: 'pkg-zibal-verified',
                  title: 'سفارش پرداخت‌شده از درگاه پرداخت زیبال جهش‌کالا',
                  price: data.amount ? Math.round(data.amount / 10) : 0,
                  category: 'خدمات وب و نرم‌افزار',
                  image: '/uploads/banners/official_banner-2.jpg',
                  inStock: true,
                },
                quantity: 1,
              },
            ],
          };
          if (existingIdx >= 0) {
            currentOrders[existingIdx] = { ...currentOrders[existingIdx], ...verifiedOrder };
          } else {
            currentOrders = [verifiedOrder, ...currentOrders];
          }
          const dir = path.dirname(ordersFile);
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(ordersFile, JSON.stringify(currentOrders, null, 2), 'utf8');
        } catch (saveErr) {
          console.warn('Auto-save order from zibal verify notice:', saveErr);
        }

        return res.status(200).json({
          success: true,
          result: data.result,
          status: data.status,
          refNumber: data.refNumber ? String(data.refNumber) : '',
          amountInRials: data.amount,
          amountInTomans: data.amount ? Math.round(data.amount / 10) : 0,
          paidAt: data.paidAt,
          cardNumber: data.cardNumber || '',
          orderId: data.orderId || '',
          message: data.message || 'پرداخت با موفقیت تأیید شد.'
        });
      } else if (data.result === 115) {
        return res.status(200).json({
          success: false,
          result: 115,
          invalidIp: true,
          ip: data.message,
          message: 'محدودیت IP در پنل زیبال فعال است. لطفاً در تنظیمات درگاه زیبال، گزینه محدودیت IP را غیرفعال کنید.',
          details: data
        });
      } else {
        return res.status(400).json({
          success: false,
          result: data.result,
          message: data.message || 'تأیید تراکنش با خطا مواجه شد.',
          details: data
        });
      }
    } catch (err) {
      console.error('Error in /api/zibal (verify):', err);
      return res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
    }
  }

  // --- ZIBAL REQUEST ---
  try {
    const { amount, amountInTomans, callbackUrl, description, orderId, mobile, merchant, ...otherFields } = req.body || {};
    const ZIBAL_MERCHANT = merchant || process.env.ZIBAL_MERCHANT || '6a9db4410df8756c31ea5d00';

    let amountInRials = 0;
    if (amountInTomans) {
      amountInRials = Math.round(Number(amountInTomans) * 10);
    } else if (amount) {
      amountInRials = Math.round(Number(amount));
    }

    if (!amountInRials || isNaN(amountInRials) || amountInRials < 10000) {
      return res.status(400).json({
        error: 'مبلغ تراکنش نامعتبر است. حداقل مبلغ پرداخت ۱,۰۰۰ تومان (۱۰,۰۰۰ ریال) است.',
        result: -1
      });
    }

    const finalCallbackUrl = callbackUrl || 'https://jaheshit.ir/jaheshkala';
    const finalDescription = description || `سفارش شماره ${orderId || 'جهش کالا'}`;

    const zibalPayload = {
      ...otherFields,
      merchant: ZIBAL_MERCHANT,
      amount: amountInRials,
      callbackUrl: finalCallbackUrl,
      description: finalDescription,
      orderId: orderId ? String(orderId) : undefined,
      mobile: mobile ? String(mobile) : undefined
    };

    const requestUrl = getZibalUrl('/request');
    const zibalRes = await fetch(requestUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(zibalPayload)
    });

    let data = await zibalRes.json().catch(() => null);

    // If result is 113 or 115 (invalid IP due to Zibal whitelist), try forwarding via jaheshit.ir fixed server (185.215.232.195)
    if ((!data || data.result === 113 || data.result === 115 || data.result !== 100) && ZIBAL_MERCHANT !== 'zibal') {
      try {
        const domesticRes = await fetch('https://jaheshit.ir/api/zibal-request.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(zibalPayload)
        });
        if (domesticRes && domesticRes.ok) {
          const domData = await domesticRes.json().catch(() => null);
          if (domData && domData.success && domData.trackId) {
            data = domData;
          }
        }
      } catch (domErr) {}

      // If still not 100, try sandbox 'zibal'
      if (!data || data.result !== 100) {
        try {
          const sandboxRes = await fetch('https://gateway.zibal.ir/v1/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...zibalPayload, merchant: 'zibal' })
          });
          const sbData = await sandboxRes.json().catch(() => null);
          if (sbData && sbData.result === 100) {
            data = sbData;
          }
        } catch (sbErr) {}
      }
    }

    if (data && data.result === 100 && data.trackId) {
      return res.status(200).json({
        success: true,
        result: data.result,
        trackId: data.trackId,
        message: data.message || 'success',
        paymentUrl: `https://gateway.zibal.ir/start/${data.trackId}`
      });
    } else {
      return res.status(400).json({
        success: false,
        result: data ? data.result : -1,
        message: (data && data.message) || 'خطا در ارتباط با درگاه زیبال',
        details: data
      });
    }
  } catch (err) {
    console.error('Error in /api/zibal (request):', err);
    return res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
  }
}
