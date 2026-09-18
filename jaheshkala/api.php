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
$deletedOrdersFile = $dataDir . '/deleted_orders.json';
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
    // DELETED ORDERS API (Blacklist sync)
    // ==========================================
    case 'orders/deleted':
    case 'deleted_orders':
    case 'api/orders/deleted':
        $deletedOrders = readJsonFile($deletedOrdersFile, []);
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $incoming = $inputData;
            $newIds = [];
            if (isset($incoming['orderIds']) && is_array($incoming['orderIds'])) {
                $newIds = $incoming['orderIds'];
            } else if (isset($incoming['orderId'])) {
                $newIds = [(string)$incoming['orderId']];
            } else if (isset($incoming['id'])) {
                $newIds = [(string)$incoming['id']];
            }
            $newIds = array_map('strval', array_filter($newIds));
            $deletedOrders = array_values(array_unique(array_merge($deletedOrders, $newIds)));
            writeJsonFile($deletedOrdersFile, $deletedOrders);
            echo json_encode(['success' => true, 'count' => count($deletedOrders), 'deleted' => $deletedOrders]);
            exit;
        }
        echo json_encode($deletedOrders);
        exit;
        break;

    // ==========================================
    // ORDERS API
    // ==========================================
    case 'orders':
    case 'get_orders':
    case 'api/orders':
    case 'orders/update-status':
    case 'orders/status':
    case 'update-status':
    case 'orders/save':
    case 'orders/delete':
    case 'delete_order':
    case 'api/orders/delete':
    case 'orders/clear':
    case 'api/orders/clear':
        $orders = readJsonFile($ordersFile, []);
        $deletedOrders = readJsonFile($deletedOrdersFile, []);
        $delSet = !empty($deletedOrders) ? array_flip(array_map('strval', $deletedOrders)) : [];

        if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'DELETE') {
            $incoming = $inputData;

            // Delete single order
            if ($action === 'orders/delete' || $action === 'delete_order' || $action === 'api/orders/delete' || isset($_GET['delete'])) {
                $delId = isset($_GET['id']) ? (string)$_GET['id'] : (isset($_GET['orderId']) ? (string)$_GET['orderId'] : (isset($incoming['id']) ? (string)$incoming['id'] : (isset($incoming['orderId']) ? (string)$incoming['orderId'] : '')));
                $allKeys = isset($incoming['allKeys']) && is_array($incoming['allKeys']) ? $incoming['allKeys'] : [];
                if (!empty($delId)) {
                    $allKeys[] = $delId;
                }
                $allKeys = array_values(array_unique(array_filter(array_map('strval', $allKeys))));

                if (!empty($allKeys)) {
                    $keyCheck = array_flip($allKeys);
                    $orders = array_values(array_filter($orders, function($o) use ($keyCheck) {
                        $oId = isset($o['id']) ? (string)$o['id'] : '';
                        $oTrack = isset($o['trackingCode']) ? (string)$o['trackingCode'] : '';
                        $oRef = isset($o['paymentRefId']) ? (string)$o['paymentRefId'] : '';
                        $oZibal = isset($o['zibalTrackId']) ? (string)$o['zibalTrackId'] : '';
                        if (isset($keyCheck[$oId]) || isset($keyCheck[$oTrack]) || isset($keyCheck[$oRef]) || isset($keyCheck[$oZibal])) {
                            return false;
                        }
                        return true;
                    }));
                    writeJsonFile($ordersFile, $orders);

                    // Add to persistent tombstone blacklist
                    $deletedOrders = array_values(array_unique(array_merge($deletedOrders, $allKeys)));
                    writeJsonFile($deletedOrdersFile, $deletedOrders);

                    echo json_encode(['success' => true, 'count' => count($orders), 'orders' => $orders]);
                    exit;
                }
            }

            // Clear all orders
            if ($action === 'orders/clear' || $action === 'api/orders/clear' || isset($_GET['clear'])) {
                $keysToBlacklist = [];
                foreach ($orders as $o) {
                    if (!empty($o['id'])) $keysToBlacklist[] = (string)$o['id'];
                    if (!empty($o['trackingCode'])) $keysToBlacklist[] = (string)$o['trackingCode'];
                    if (!empty($o['paymentRefId'])) $keysToBlacklist[] = (string)$o['paymentRefId'];
                    if (!empty($o['zibalTrackId'])) $keysToBlacklist[] = (string)$o['zibalTrackId'];
                }
                if (isset($incoming['allKeys']) && is_array($incoming['allKeys'])) {
                    $keysToBlacklist = array_merge($keysToBlacklist, $incoming['allKeys']);
                }
                $keysToBlacklist = array_values(array_unique(array_filter(array_map('strval', $keysToBlacklist))));
                $deletedOrders = array_values(array_unique(array_merge($deletedOrders, $keysToBlacklist)));
                writeJsonFile($deletedOrdersFile, $deletedOrders);

                $orders = [];
                writeJsonFile($ordersFile, $orders);
                echo json_encode(['success' => true, 'count' => 0, 'orders' => []]);
                exit;
            }

            // Update order status specifically
            if ($action === 'orders/update-status' || $action === 'orders/status' || $action === 'update-status' || isset($incoming['status'])) {
                $targetId = isset($incoming['orderId']) ? (string)$incoming['orderId'] : (isset($incoming['id']) ? (string)$incoming['id'] : '');
                $targetStatus = isset($incoming['status']) ? (string)$incoming['status'] : '';

                if (!empty($targetId) && !empty($targetStatus)) {
                    $found = false;
                    foreach ($orders as $idx => $o) {
                        $oId = isset($o['id']) ? (string)$o['id'] : '';
                        $oTrack = isset($o['trackingCode']) ? (string)$o['trackingCode'] : '';
                        $oRef = isset($o['paymentRefId']) ? (string)$o['paymentRefId'] : '';
                        $oZibal = isset($o['zibalTrackId']) ? (string)$o['zibalTrackId'] : '';

                        if ($oId === $targetId || $oTrack === $targetId || $oRef === $targetId || $oZibal === $targetId) {
                            $orders[$idx]['status'] = $targetStatus;
                            $orders[$idx]['statusUpdatedAt'] = date('c');
                            $found = true;
                        }
                    }

                    if (!$found) {
                        // Create placeholder record if missing
                        $newOrder = [
                            'id' => $targetId,
                            'status' => $targetStatus,
                            'statusUpdatedAt' => date('c'),
                            'createdAt' => date('c')
                        ];
                        array_unshift($orders, $newOrder);
                    }

                    writeJsonFile($ordersFile, $orders);
                    echo json_encode(['success' => true, 'orderId' => $targetId, 'status' => $targetStatus, 'count' => count($orders), 'orders' => $orders]);
                    exit;
                }
            }

            if (isset($incoming['id'])) {
                $orderId = (string)$incoming['id'];
                // If this order was previously deleted, unmark it
                if (isset($delSet[$orderId])) {
                    $deletedOrders = array_values(array_filter($deletedOrders, function($id) use ($orderId) {
                        return (string)$id !== $orderId;
                    }));
                    writeJsonFile($deletedOrdersFile, $deletedOrders);
                    $delSet = !empty($deletedOrders) ? array_flip(array_map('strval', $deletedOrders)) : [];
                }

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
        $deletedOrders = readJsonFile($deletedOrdersFile, []);
        if (!empty($deletedOrders)) {
            $delSet = array_flip(array_map('strval', $deletedOrders));
            $orders = array_values(array_filter($orders, function($o) use ($delSet) {
                $oId = isset($o['id']) ? (string)$o['id'] : '';
                $oTrack = isset($o['trackingCode']) ? (string)$o['trackingCode'] : '';
                $oRef = isset($o['paymentRefId']) ? (string)$o['paymentRefId'] : '';
                $oZibal = isset($o['zibalTrackId']) ? (string)$o['zibalTrackId'] : '';
                return !isset($delSet[$oId]) && !isset($delSet[$oTrack]) && !isset($delSet[$oRef]) && !isset($delSet[$oZibal]);
            }));
        }
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
    // TOOLS API (Technology Dashboard Showcase)
    // ==========================================
    case 'tools':
    case 'get_tools':
    case 'api/tools':
    case 'tools/save':
    case 'tools/delete':
        if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'DELETE') {
            $tools = readJsonFile($toolsFile, []);
            if ($_SERVER['REQUEST_METHOD'] === 'DELETE' || $action === 'tools/delete' || isset($_GET['delete'])) {
                $delId = isset($_GET['id']) ? (string)$_GET['id'] : (isset($inputData['id']) ? (string)$inputData['id'] : '');
                if (!empty($delId)) {
                    $tools = array_values(array_filter($tools, function($t) use ($delId) {
                        return isset($t['id']) && (string)$t['id'] !== $delId;
                    }));
                    writeJsonFile($toolsFile, $tools);
                    echo json_encode(['success' => true, 'count' => count($tools), 'tools' => $tools]);
                    exit;
                }
            }

            if (is_array($inputData)) {
                // Check if sequential array of tools
                $isSeqArray = array_keys($inputData) === range(0, count($inputData) - 1);
                if ($isSeqArray) {
                    writeJsonFile($toolsFile, $inputData);
                    echo json_encode(['success' => true, 'count' => count($inputData), 'tools' => $inputData]);
                    exit;
                } else if (isset($inputData['tools']) && is_array($inputData['tools'])) {
                    writeJsonFile($toolsFile, $inputData['tools']);
                    echo json_encode(['success' => true, 'count' => count($inputData['tools']), 'tools' => $inputData['tools']]);
                    exit;
                } else if (isset($inputData['id']) || isset($inputData['title'])) {
                    // Single tool upsert
                    $toolId = isset($inputData['id']) ? (string)$inputData['id'] : 'tool_' . time();
                    $inputData['id'] = $toolId;
                    $foundIdx = -1;
                    foreach ($tools as $idx => $t) {
                        if (isset($t['id']) && (string)$t['id'] === $toolId) {
                            $foundIdx = $idx;
                            break;
                        }
                    }
                    if ($foundIdx >= 0) {
                        $tools[$foundIdx] = array_merge($tools[$foundIdx], $inputData);
                    } else {
                        array_unshift($tools, $inputData);
                    }
                    writeJsonFile($toolsFile, $tools);
                    echo json_encode(['success' => true, 'tool' => $inputData, 'count' => count($tools), 'tools' => $tools]);
                    exit;
                }
            }
        }
        $tools = readJsonFile($toolsFile, []);
        echo json_encode(is_array($tools) ? $tools : []);
        exit;
        break;

    // ==========================================
    // USERS & ROLES API
    // ==========================================
    case 'users':
    case 'get_users':
    case 'api/users':
    case 'users/update-role':
    case 'update-role':
    case 'users/save':
    case 'users/delete':
        $users = readJsonFile($usersFile, []);
        if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'DELETE') {
            // Delete user
            if ($_SERVER['REQUEST_METHOD'] === 'DELETE' || $action === 'users/delete' || isset($_GET['delete'])) {
                $delId = isset($_GET['id']) ? (string)$_GET['id'] : (isset($inputData['id']) ? (string)$inputData['id'] : '');
                if (!empty($delId)) {
                    $users = array_values(array_filter($users, function($u) use ($delId) {
                        return isset($u['id']) && (string)$u['id'] !== $delId;
                    }));
                    writeJsonFile($usersFile, $users);
                    echo json_encode(['success' => true, 'count' => count($users), 'users' => $users]);
                    exit;
                }
            }

            // Update role specifically
            if ($action === 'users/update-role' || $action === 'update-role' || isset($inputData['role']) && (isset($inputData['userId']) || isset($inputData['username']) || isset($inputData['phone']))) {
                $targetRole = isset($inputData['role']) ? trim($inputData['role']) : 'user';
                $targetId = isset($inputData['id']) ? (string)$inputData['id'] : (isset($inputData['userId']) ? (string)$inputData['userId'] : '');
                $targetUser = isset($inputData['username']) ? strtolower(trim($inputData['username'], "@ \t\n\r\0\x0B")) : '';
                $targetPhone = isset($inputData['phone']) ? preg_replace('/[^0-9]/', '', (string)$inputData['phone']) : '';

                $matchedCount = 0;
                foreach ($users as $idx => $u) {
                    $uId = isset($u['id']) ? (string)$u['id'] : '';
                    $uUser = isset($u['username']) ? strtolower(trim($u['username'], "@ \t\n\r\0\x0B")) : '';
                    $uPhone = isset($u['phone']) ? preg_replace('/[^0-9]/', '', (string)$u['phone']) : '';

                    if ((!empty($targetId) && $uId === $targetId) ||
                        (!empty($targetUser) && $uUser === $targetUser) ||
                        (!empty($targetPhone) && strlen($targetPhone) >= 10 && $uPhone === $targetPhone)) {
                        $users[$idx]['role'] = $targetRole;
                        $users[$idx]['updatedAt'] = date('c');
                        $matchedCount++;
                    }
                }

                if ($matchedCount === 0 && (!empty($targetId) || !empty($targetUser) || !empty($targetPhone))) {
                    $newUser = array_merge($inputData, [
                        'id' => !empty($targetId) ? $targetId : 'usr-' . time(),
                        'role' => $targetRole,
                        'createdAt' => date('c'),
                        'updatedAt' => date('c')
                    ]);
                    array_unshift($users, $newUser);
                }

                writeJsonFile($usersFile, $users);
                echo json_encode(['success' => true, 'role' => $targetRole, 'matched' => $matchedCount, 'count' => count($users), 'users' => $users]);
                exit;
            }

            if (is_array($inputData)) {
                $isSeqArray = array_keys($inputData) === range(0, count($inputData) - 1);
                if ($isSeqArray) {
                    // Bulk users list replacement/merge
                    writeJsonFile($usersFile, $inputData);
                    echo json_encode(['success' => true, 'count' => count($inputData), 'users' => $inputData]);
                    exit;
                } else if (isset($inputData['users']) && is_array($inputData['users'])) {
                    writeJsonFile($usersFile, $inputData['users']);
                    echo json_encode(['success' => true, 'count' => count($inputData['users']), 'users' => $inputData['users']]);
                    exit;
                } else if (isset($inputData['id']) || isset($inputData['username']) || isset($inputData['phone'])) {
                    // Single user save or update
                    $targetId = isset($inputData['id']) ? (string)$inputData['id'] : '';
                    $targetUser = isset($inputData['username']) ? strtolower(trim($inputData['username'], "@ \t\n\r\0\x0B")) : '';
                    $targetPhone = isset($inputData['phone']) ? preg_replace('/[^0-9]/', '', (string)$inputData['phone']) : '';

                    $foundIdx = -1;
                    foreach ($users as $idx => $u) {
                        $uId = isset($u['id']) ? (string)$u['id'] : '';
                        $uUser = isset($u['username']) ? strtolower(trim($u['username'], "@ \t\n\r\0\x0B")) : '';
                        $uPhone = isset($u['phone']) ? preg_replace('/[^0-9]/', '', (string)$u['phone']) : '';

                        if ((!empty($targetId) && $uId === $targetId) ||
                            (!empty($targetUser) && $uUser === $targetUser) ||
                            (!empty($targetPhone) && strlen($targetPhone) >= 10 && $uPhone === $targetPhone)) {
                            $foundIdx = $idx;
                            break;
                        }
                    }

                    if ($foundIdx >= 0) {
                        $users[$foundIdx] = array_merge($users[$foundIdx], $inputData);
                    } else {
                        if (empty($inputData['id'])) {
                            $inputData['id'] = 'usr-' . time();
                        }
                        array_unshift($users, $inputData);
                    }

                    writeJsonFile($usersFile, $users);
                    echo json_encode(['success' => true, 'user' => $inputData, 'count' => count($users), 'users' => $users]);
                    exit;
                }
            }
        }
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
