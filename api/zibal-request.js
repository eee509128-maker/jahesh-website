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
    const {
      amount,
      amountInTomans,
      callbackUrl,
      description,
      orderId,
      mobile,
      merchant
    } = req.body || {};

    const ZIBAL_MERCHANT = merchant || process.env.ZIBAL_MERCHANT || '6a9db4410df8756c31ea5d00';

    // Calculate amount in Rials
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
      merchant: ZIBAL_MERCHANT,
      amount: amountInRials,
      callbackUrl: finalCallbackUrl,
      description: finalDescription,
      orderId: orderId ? String(orderId) : undefined,
      mobile: mobile ? String(mobile) : undefined
    };

    const zibalRes = await fetch('https://gateway.zibal.ir/v1/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(zibalPayload)
    });

    const data = await zibalRes.json();

    if (data.result === 100) {
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
        result: data.result,
        message: data.message || 'خطا در ارتباط با درگاه زیبال',
        details: data
      });
    }
  } catch (err) {
    console.error('Error in /api/zibal-request:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal Server Error'
    });
  }
}
