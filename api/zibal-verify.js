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
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...otherFields,
        merchant: ZIBAL_MERCHANT,
        trackId: Number(trackId)
      })
    });

    const data = await zibalRes.json();

    // result 100: Successfully verified
    // result 201: Previously verified
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
    console.error('Error in /api/zibal-verify:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal Server Error'
    });
  }
}
