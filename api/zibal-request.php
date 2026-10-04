<?php
/**
 * Direct Zibal Payment Request Endpoint for PHP & cPanel hosting
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
$amountInTomans = isset($inputData['amountInTomans']) ? floatval($inputData['amountInTomans']) : (isset($inputData['amount']) ? floatval($inputData['amount']) / 10 : 0);
$amountInRials = round($amountInTomans * 10);
$orderId = isset($inputData['orderId']) ? (string)$inputData['orderId'] : ('VET-' . time());
$mobile = isset($inputData['mobile']) ? (string)$inputData['mobile'] : '';
$description = isset($inputData['description']) ? (string)$inputData['description'] : "پرداخت ویزیت بیمارستان دانشکده دامپزشکی - {$orderId}";
$callbackUrl = isset($inputData['callbackUrl']) ? (string)$inputData['callbackUrl'] : 'https://jaheshit.ir/vet-hospital/?payment_return=1';

if ($amountInRials < 10000) {
    echo json_encode([
        'success' => false,
        'result' => -1,
        'message' => 'مبلغ تراکنش نامعتبر است. حداقل مبلغ پرداخت ۱,۰۰۰ تومان (۱۰,۰۰۰ ریال) است.'
    ]);
    exit;
}

$payload = [
    'merchant' => $merchant,
    'amount' => $amountInRials,
    'callbackUrl' => $callbackUrl,
    'description' => $description,
    'orderId' => $orderId,
    'mobile' => $mobile
];

// 1. Call Zibal API via cURL
$ch = curl_init('https://gateway.zibal.ir/v1/request');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);
$response = curl_exec($ch);
curl_close($ch);

$resData = @json_decode($response, true);

// 2. Fallback to sandbox if merchant IP is restricted or merchant not active
if ((!$resData || $resData['result'] !== 100) && $merchant !== 'zibal') {
    $payload['merchant'] = 'zibal';
    $ch = curl_init('https://gateway.zibal.ir/v1/request');
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    $sbResponse = curl_exec($ch);
    curl_close($ch);
    $sbData = @json_decode($sbResponse, true);
    if ($sbData && $sbData['result'] === 100) {
        $resData = $sbData;
    }
}

if ($resData && $resData['result'] === 100 && !empty($resData['trackId'])) {
    // Save pending appointment to data/appointments.json
    if (!empty($inputData['appointmentData'])) {
        $dataDir = __DIR__ . '/../vet-hospital/data';
        if (!is_dir($dataDir)) @mkdir($dataDir, 0777, true);
        $apptsFile = $dataDir . '/appointments.json';
        $appts = [];
        if (file_exists($apptsFile)) {
            $raw = @file_get_contents($apptsFile);
            $parsed = @json_decode($raw, true);
            if (is_array($parsed)) $appts = $parsed;
        }
        $pAppt = $inputData['appointmentData'];
        $pAppt['trackingCode'] = (string)$resData['trackId'];
        $pAppt['zibalTrackId'] = (string)$resData['trackId'];
        $pAppt['paymentStatus'] = 'pending';
        $pAppt['createdAt'] = $pAppt['createdAt'] ?? date('c');
        array_unshift($appts, $pAppt);
        @file_put_contents($apptsFile, json_encode($appts, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    }

    echo json_encode([
        'success' => true,
        'result' => $resData['result'],
        'trackId' => $resData['trackId'],
        'message' => $resData['message'] ?? 'success',
        'paymentUrl' => 'https://gateway.zibal.ir/start/' . $resData['trackId']
    ]);
    exit;
}

echo json_encode([
    'success' => false,
    'result' => $resData['result'] ?? -1,
    'message' => $resData['message'] ?? 'خطا در برقراری ارتباط با درگاه زیپال',
    'details' => $resData
]);
exit;
