<?php
/**
 * Direct Zibal Payment Verify Endpoint for PHP & cPanel hosting
 * Domain: jaheshit.ir
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

$inputRaw = file_get_contents('php://input');
$inputData = json_decode($inputRaw, true) ?: [];

$merchant = !empty($inputData['merchant']) ? trim($inputData['merchant']) : '6a9db4410df8756c31ea5d00';
$trackId = isset($inputData['trackId']) ? (string)$inputData['trackId'] : '';

if (empty($trackId)) {
    echo json_encode(['success' => false, 'error' => 'کد پیگیری تراکنش ارسال نشده است.']);
    exit;
}

$vPayload = [
    'merchant' => $merchant,
    'trackId' => (int)$trackId
];

$ch = curl_init('https://gateway.zibal.ir/v1/verify');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($vPayload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);
$vResponse = curl_exec($ch);
curl_close($ch);

$vData = @json_decode($vResponse, true);

if ($vData && ($vData['result'] === 100 || $vData['result'] === 201)) {
    // Update appointment
    $dataDir = __DIR__ . '/../vet-hospital/data';
    $apptsFile = $dataDir . '/appointments.json';
    if (file_exists($apptsFile)) {
        $raw = @file_get_contents($apptsFile);
        $appts = @json_decode($raw, true) ?: [];
        foreach ($appts as $idx => $a) {
            if ((isset($a['zibalTrackId']) && (string)$a['zibalTrackId'] === $trackId) ||
                (isset($a['trackingCode']) && (string)$a['trackingCode'] === $trackId)) {
                $appts[$idx]['paymentStatus'] = 'paid';
                $appts[$idx]['status'] = 'confirmed';
                $appts[$idx]['paidAt'] = date('c');
                $appts[$idx]['transactionId'] = 'ZBL-' . ($vData['refNumber'] ?? $trackId);
                break;
            }
        }
        @file_put_contents($apptsFile, json_encode($appts, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    }

    echo json_encode([
        'success' => true,
        'result' => $vData['result'],
        'refNumber' => (string)($vData['refNumber'] ?? $trackId),
        'amountInTomans' => isset($vData['amount']) ? round($vData['amount'] / 10) : 0,
        'paidAt' => $vData['paidAt'] ?? date('c'),
        'message' => 'پرداخت با موفقیت تأیید شد.'
    ]);
    exit;
}

echo json_encode([
    'success' => false,
    'result' => $vData['result'] ?? -1,
    'message' => $vData['message'] ?? 'تأیید تراکنش درگاه با خطا مواجه شد.'
]);
exit;
