<?php
/**
 * JaheshKala Universal High-Speed Server API for PHP & cPanel
 * 100% Zero-VPN, Domestic Iran Compatible, Infinite Quota, Zero Latency.
 */

// 1. Universal CORS and JSON Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, x-api-key");
header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// 2. Data Storage Directory
$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0777, true);
}

// Helper: Read JSON safely with file lock
function readJsonFile($filePath, $default = []) {
    if (!file_exists($filePath)) {
        return $default;
    }
    $fp = @fopen($filePath, 'r');
    if (!$fp) return $default;
    @flock($fp, LOCK_SH);
    $content = @stream_get_contents($fp);
    @flock($fp, LOCK_UN);
    @fclose($fp);
    $data = @json_decode($content, true);
    return is_array($data) ? $data : $default;
}

// Helper: Write JSON safely with file lock
function writeJsonFile($filePath, $data) {
    $dir = dirname($filePath);
    if (!is_dir($dir)) {
        @mkdir($dir, 0777, true);
    }
    $fp = @fopen($filePath, 'w');
    if (!$fp) return false;
    @flock($fp, LOCK_EX);
    $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    @fwrite($fp, $json);
    @flock($fp, LOCK_UN);
    @fclose($fp);
    return true;
}

// Parse input body
$inputRaw = file_get_contents('php://input');
$inputData = json_decode($inputRaw, true) ?: [];

$action = isset($_GET['action']) ? trim($_GET['action']) : (isset($_GET['endpoint']) ? trim($_GET['endpoint']) : '');
if (empty($action) && isset($inputData['action'])) {
    $action = trim($inputData['action']);
}

// 3. Router Actions
$chatsFile    = $dataDir . '/chats.json';
$ordersFile   = $dataDir . '/orders.json';
$productsFile = $dataDir . '/products.json';
$bannersFile  = $dataDir . '/banners.json';
$toolsFile    = $dataDir . '/tools.json';
$usersFile    = $dataDir . '/users.json';
$licensesFile = $dataDir . '/licenses.json';

switch ($action) {

    // ==========================================
    // CHATS API (Live Support & AI Assistant)
    // ==========================================
    case 'chats':
    case 'get_chats':
    case 'api/chats':
        if ($_SERVER['REQUEST_METHOD'] === 'POST' || isset($inputData['userId'])) {
            // Save / Update Chat
            $userId = isset($inputData['userId']) ? (string)$inputData['userId'] : '';
            if (empty($userId)) {
                http_response_code(400);
                echo json_encode(['error' => 'userId is required']);
                exit;
            }
            $chats = readJsonFile($chatsFile, []);
            $foundIndex = -1;
            foreach ($chats as $idx => $c) {
                if (isset($c['userId']) && (string)$c['userId'] === $userId) {
                    $foundIndex = $idx;
                    break;
                }
            }

            $chatItem = [
                'userId' => $userId,
                'userName' => !empty($inputData['userName']) ? $inputData['userName'] : 'کاربر جهش‌کالا',
                'messages' => is_array($inputData['messages'] ?? null) ? $inputData['messages'] : [],
                'lastUpdated' => !empty($inputData['lastUpdated']) ? $inputData['lastUpdated'] : date('c'),
                'isReadByAdmin' => !empty($inputData['isReadByAdmin']),
                'needsHumanSupport' => !empty($inputData['needsHumanSupport']),
            ];

            if ($foundIndex >= 0) {
                $chats[$foundIndex] = $chatItem;
            } else {
                array_unshift($chats, $chatItem);
            }

            writeJsonFile($chatsFile, $chats);
            echo json_encode(['success' => true, 'chat' => $chatItem, 'count' => count($chats)]);
            exit;
        } else {
            // Get Chats (or single chat)
            $userId = isset($_GET['userId']) ? (string)$_GET['userId'] : '';
            $chats = readJsonFile($chatsFile, []);
            if (!empty($userId)) {
                $single = null;
                foreach ($chats as $c) {
                    if (isset($c['userId']) && (string)$c['userId'] === $userId) {
                        $single = $c;
                        break;
                    }
                }
                echo json_encode(['success' => true, 'chat' => $single]);
                exit;
            }
            echo json_encode(['success' => true, 'chats' => $chats]);
            exit;
        }
        break;

    // ==========================================
    // ORDERS API
    // ==========================================
    case 'orders':
    case 'get_orders':
    case 'api/orders':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $incoming = $inputData;
            $orders = readJsonFile($ordersFile, []);
            if (isset($incoming['id'])) {
                $orderId = (string)$incoming['id'];
                $foundIndex = -1;
                foreach ($orders as $idx => $o) {
                    if (isset($o['id']) && (string)$o['id'] === $orderId) {
                        $foundIndex = $idx;
                        break;
                    }
                }
                if ($foundIndex >= 0) {
                    $orders[$foundIndex] = array_merge($orders[$foundIndex], $incoming);
                } else {
                    array_unshift($orders, $incoming);
                }
                writeJsonFile($ordersFile, $orders);
                echo json_encode(['success' => true, 'order' => $incoming, 'count' => count($orders), 'orders' => $orders]);
                exit;
            } else if (is_array($incoming)) {
                $existingMap = [];
                foreach ($orders as $o) {
                    if (!empty($o['id'])) $existingMap[(string)$o['id']] = $o;
                }
                foreach ($incoming as $item) {
                    if (!empty($item['id'])) {
                        $id = (string)$item['id'];
                        $existingMap[$id] = isset($existingMap[$id]) ? array_merge($existingMap[$id], $item) : $item;
                    }
                }
                $merged = array_values($existingMap);
                writeJsonFile($ordersFile, $merged);
                echo json_encode(['success' => true, 'count' => count($merged), 'orders' => $merged]);
                exit;
            }
        }
        $orders = readJsonFile($ordersFile, []);
        echo json_encode(['success' => true, 'orders' => $orders]);
        exit;
        break;

    // ==========================================
    // BANNERS API
    // ==========================================
    case 'banners':
    case 'get_banners':
    case 'api/banners':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (is_array($inputData)) {
                writeJsonFile($bannersFile, $inputData);
                echo json_encode(['success' => true, 'count' => count($inputData)]);
                exit;
            }
        }
        $banners = readJsonFile($bannersFile, []);
        echo json_encode($banners);
        exit;
        break;

    // ==========================================
    // TOOLS API
    // ==========================================
    case 'tools':
    case 'get_tools':
    case 'api/tools':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (is_array($inputData)) {
                writeJsonFile($toolsFile, $inputData);
                echo json_encode(['success' => true, 'count' => count($inputData)]);
                exit;
            }
        }
        $tools = readJsonFile($toolsFile, []);
        echo json_encode($tools);
        exit;
        break;

    // ==========================================
    // USERS API
    // ==========================================
    case 'users':
    case 'get_users':
    case 'api/users':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (is_array($inputData)) {
                writeJsonFile($usersFile, $inputData);
                echo json_encode(['success' => true, 'count' => count($inputData)]);
                exit;
            }
        }
        $users = readJsonFile($usersFile, []);
        echo json_encode(['success' => true, 'users' => $users]);
        exit;
        break;

    // ==========================================
    // HEALTH CHECK
    // ==========================================
    case 'health':
    case 'ping':
        echo json_encode(['status' => 'ok', 'server' => 'JaheshKala-PHP-Engine', 'time' => date('c')]);
        exit;
        break;

    default:
        // Default overview if no action
        echo json_encode([
            'status' => 'ready',
            'engine' => 'JaheshKala PHP Domestic Sync API',
            'available_actions' => ['chats', 'orders', 'banners', 'tools', 'users', 'health'],
        ]);
        exit;
        break;
}
