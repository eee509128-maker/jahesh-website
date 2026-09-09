// Supabase Edge Function: zibal-request
// Deploy with: supabase functions deploy zibal-request --no-verify-jwt

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const {
      amount,
      amountInTomans,
      callbackUrl,
      description,
      orderId,
      mobile,
      customerPhone,
      merchant,
    } = body || {};

    const ZIBAL_MERCHANT =
      merchant ||
      Deno.env.get('ZIBAL_MERCHANT') ||
      '6a9db4410df8756c31ea5d00';

    let amountInRials = 0;
    if (amountInTomans) {
      amountInRials = Math.round(Number(amountInTomans) * 10);
    } else if (amount) {
      amountInRials = Math.round(Number(amount));
    }

    if (!amountInRials || isNaN(amountInRials) || amountInRials < 10000) {
      return new Response(
        JSON.stringify({
          success: false,
          result: -1,
          message: 'مبلغ تراکنش نامعتبر است (حداقل ۱,۰۰۰ تومان).',
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const finalCallbackUrl =
      callbackUrl || 'https://jaheshit.ir/jaheshkala';
    const finalDescription =
      description || `سفارش شماره ${orderId || 'جهش کالا'}`;

    const zibalPayload = {
      merchant: ZIBAL_MERCHANT,
      amount: amountInRials,
      callbackUrl: finalCallbackUrl,
      description: finalDescription,
      orderId: orderId ? String(orderId) : undefined,
      mobile: mobile || customerPhone ? String(mobile || customerPhone) : undefined,
    };

    const zibalRes = await fetch('https://gateway.zibal.ir/v1/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'JaheshKala-SupabaseEdge/1.0',
      },
      body: JSON.stringify(zibalPayload),
    });

    let data = await zibalRes.json();
    let isSandboxFallback = false;

    // Fallback to sandbox if merchant IP is restricted
    if ((data.result === 113 || data.result === 115) && ZIBAL_MERCHANT !== 'zibal') {
      const sandboxRes = await fetch('https://gateway.zibal.ir/v1/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...zibalPayload,
          merchant: 'zibal',
          description: `[سندباکس] ${finalDescription}`,
        }),
      });
      const sandboxData = await sandboxRes.json();
      if (sandboxData.result === 100) {
        data = sandboxData;
        isSandboxFallback = true;
      }
    }

    if (data.result === 100) {
      return new Response(
        JSON.stringify({
          success: true,
          result: data.result,
          trackId: data.trackId,
          isSandboxFallback,
          paymentUrl: `https://gateway.zibal.ir/start/${data.trackId}`,
          message: isSandboxFallback
            ? 'اتصال از طریق درگاه تستی زیبال انجام شد.'
            : (data.message || 'درخواست پرداخت ثبت شد.'),
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        result: data.result,
        isIpError: data.result === 113 || data.result === 115,
        message: data.message || 'خطا در ارتباط با زیبال',
        details: data,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        message: 'خطای داخلی در Edge Function زیبال',
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
