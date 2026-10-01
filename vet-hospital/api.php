<?php
/**
 * Vet Hospital Universal High-Speed Server API for PHP & cPanel
 * 100% Zero-VPN, Domestic Iran Compatible, Never Filtered, Instant Response.
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

// Parse input
$inputRaw = file_get_contents('php://input');
$inputData = json_decode($inputRaw, true) ?: [];

$action = isset($_GET['action']) ? trim($_GET['action']) : (isset($_GET['endpoint']) ? trim($_GET['endpoint']) : '');
if (empty($action) && isset($inputData['action'])) {
    $action = trim($inputData['action']);
}
if (empty($action)) {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/(users|professors|appointments|departments|auth)#i', $uri, $m)) {
        $action = strtolower($m[1]);
    }
}

$usersFile = $dataDir . '/users.json';
$professorsFile = $dataDir . '/professors.json';
$appointmentsFile = $dataDir . '/appointments.json';

// Initialize default professors if file is empty
if (!file_exists($professorsFile) || filesize($professorsFile) < 10) {
    $initialProfs = [
        [
            "id" => "prof-1",
            "username" => "dr_mohammadi",
            "password" => "123",
            "name" => "دکتر علیرضا محمدی",
            "academicRank" => "استاد تمام (پروفسور)",
            "departmentId" => "surgery-anesthesia",
            "departmentName" => "بخش جراحی، ارتوپدی و بیهوشی",
            "subSpecialty" => "متخصص جراحی دامپزشکی و ارتوپدی ستون فقرات",
            "medicalCouncilNo" => "۱۴۲۵۸",
            "phone" => "09151112233",
            "email" => "a.mohammadi@um.ac.ir",
            "avatar" => "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
            "bio" => "عضو هیئت علمی گروه علوم درمانگاهی دانشکده دامپزشکی با بیش از ۱۸ سال سابقه جراحی‌های پیچیده بافت نرم و ارتوپدی حیوانات خانگی و حیات وحش.",
            "visitFee" => 450000,
            "onlineConsultFee" => 320000,
            "workDays" => ["شنبه", "دوشنبه", "چهارشنبه"],
            "workHours" => "۰۹:۰۰ الی ۱۳:۰۰",
            "schedule" => ["شنبه، دوشنبه، چهارشنبه ۰۹:۰۰ الی ۱۳:۰۰"],
            "status" => "approved",
            "isApproved" => true,
            "rating" => 5.0,
            "totalVisits" => 312,
            "badges" => ["عضو هیئت علمی", "استاد برتر جراحی"],
            "registeredAt" => "2026-01-10T08:00:00.000Z"
        ],
        [
            "id" => "prof-2",
            "username" => "dr_rezaei",
            "password" => "123",
            "name" => "دکتر مریم رضایی",
            "academicRank" => "دانشیار",
            "departmentId" => "small-animal-internal",
            "departmentName" => "بخش بیماری‌های درونی دام‌های کوچک و پرندگان زینتی",
            "subSpecialty" => "فوق تخصص بیماری‌های داخلی قلب و عروق و کلیه سگ و گربه",
            "medicalCouncilNo" => "۱۸۷۹۰",
            "phone" => "09152223344",
            "email" => "m.rezaei@um.ac.ir",
            "avatar" => "https://images.unsplash.com/photo-1594824813637-417242127271?auto=format&fit=crop&w=600&q=80",
            "bio" => "فارغ‌التحصیل ممتاز دانشگاه تهران و عضو هیئت علمی دانشگاه فردوسی مشهد، پژوهشگر بیماری‌های متابولیک و دیابت گربه و پرندگان خاص.",
            "visitFee" => 380000,
            "onlineConsultFee" => 280000,
            "workDays" => ["یکشنبه", "سه‌شنبه", "پنجشنبه"],
            "workHours" => "۱۰:۰۰ الی ۱۴:۰۰",
            "schedule" => ["یکشنبه، سه‌شنبه، پنجشنبه ۱۰:۰۰ الی ۱۴:۰۰"],
            "status" => "approved",
            "isApproved" => true,
            "rating" => 4.9,
            "totalVisits" => 248,
            "badges" => ["عضو هیئت علمی", "متخصص داخلی"],
            "registeredAt" => "2026-01-12T11:30:00.000Z"
        ]
    ];
    writeJsonFile($professorsFile, $initialProfs);
}

// 3. Router Actions
switch ($action) {

    // ==========================================
    // 1. USERS API (Get, Register, Save, Delete)
    // ==========================================
    case 'users':
    case 'get_users':
    case 'api/users':
    case 'users/save':
    case 'users/delete':
    case 'auth/register':
    case 'auth/login':
        $users = readJsonFile($usersFile, []);

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

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Check login
            if ($action === 'auth/login' || isset($inputData['isLogin'])) {
                $loginUser = strtolower(trim((string)($inputData['username'] ?? '')));
                $loginPass = (string)($inputData['password'] ?? '');

                if (($loginUser === 'jahesh1395@gmail.com' || $loginUser === 'jahesh1395' || $loginUser === 'admin') && 
                    ($loginPass === 'Erfan3365!' || $loginPass === 'jahesh1395')) {
                    echo json_encode([
                        'success' => true,
                        'message' => 'ورود موفقیت‌آمیز مدیر ارشد',
                        'user' => [
                            'id' => 'usr-jahesh-master',
                            'username' => 'jahesh1395@gmail.com',
                            'name' => 'مهندس عرفان مقدم متقی (مدیر ارشد سامانه)',
                            'role' => 'admin',
                            'isAdmin' => true
                        ]
                    ]);
                    exit;
                }

                foreach ($users as $u) {
                    $uName = strtolower(trim((string)($u['username'] ?? '')));
                    $uEmail = strtolower(trim((string)($u['email'] ?? '')));
                    $uPhone = trim((string)($u['phone'] ?? ''));

                    if (($uName === $loginUser || $uEmail === $loginUser || $uPhone === $loginUser) &&
                        (isset($u['password']) && (string)$u['password'] === $loginPass)) {
                        echo json_encode(['success' => true, 'user' => $u]);
                        exit;
                    }
                }

                // Check in professors
                $profs = readJsonFile($professorsFile, []);
                foreach ($profs as $p) {
                    $pName = strtolower(trim((string)($p['username'] ?? '')));
                    $pEmail = strtolower(trim((string)($p['email'] ?? '')));
                    $pPhone = trim((string)($p['phone'] ?? ''));

                    if (($pName === $loginUser || $pEmail === $loginUser || $pPhone === $loginUser) &&
                        (isset($p['password']) && (string)$p['password'] === $loginPass)) {
                        echo json_encode(['success' => true, 'user' => array_merge($p, ['role' => 'doctor'])]);
                        exit;
                    }
                }

                http_response_code(401);
                echo json_encode(['success' => false, 'error' => 'نام کاربری یا رمز عبور اشتباه است']);
                exit;
            }

            // Save / Register user
            if (is_array($inputData)) {
                $targetId = isset($inputData['id']) ? (string)$inputData['id'] : ('usr-' . time());
                $inputData['id'] = $targetId;
                $inputData['updatedAt'] = date('c');

                $foundIdx = -1;
                foreach ($users as $idx => $u) {
                    if ((isset($u['id']) && (string)$u['id'] === $targetId) ||
                        (isset($u['username'], $inputData['username']) && !empty($inputData['username']) && strtolower(trim($u['username'])) === strtolower(trim($inputData['username'])))) {
                        $foundIdx = $idx;
                        break;
                    }
                }

                if ($foundIdx >= 0) {
                    $users[$foundIdx] = array_merge($users[$foundIdx], $inputData);
                } else {
                    array_unshift($users, $inputData);
                }

                writeJsonFile($usersFile, $users);
                echo json_encode(['success' => true, 'user' => $inputData, 'count' => count($users), 'users' => $users]);
                exit;
            }
        }

        echo json_encode(['success' => true, 'count' => count($users), 'users' => $users]);
        exit;
        break;

    // ==========================================
    // 2. PROFESSORS API (Get, Save, Approve, Delete)
    // ==========================================
    case 'professors':
    case 'get_professors':
    case 'api/professors':
    case 'professors/save':
    case 'professors/verify':
    case 'professors/delete':
        $profs = readJsonFile($professorsFile, []);

        if ($_SERVER['REQUEST_METHOD'] === 'DELETE' || $action === 'professors/delete' || isset($_GET['delete'])) {
            $delId = isset($_GET['id']) ? (string)$_GET['id'] : (isset($inputData['id']) ? (string)$inputData['id'] : (isset($inputData['professorId']) ? (string)$inputData['professorId'] : ''));
            if (!empty($delId)) {
                $profs = array_values(array_filter($profs, function($p) use ($delId) {
                    return isset($p['id']) && (string)$p['id'] !== $delId;
                }));
                writeJsonFile($professorsFile, $profs);
                echo json_encode(['success' => true, 'count' => count($profs), 'professors' => $profs]);
                exit;
            }
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Verify / Approve action
            if ($action === 'professors/verify' || isset($inputData['professorId'])) {
                $targetId = (string)($inputData['professorId'] ?? $inputData['id'] ?? '');
                $newStatus = (string)($inputData['status'] ?? 'approved');

                foreach ($profs as $idx => $p) {
                    if (isset($p['id']) && (string)$p['id'] === $targetId) {
                        $profs[$idx]['status'] = $newStatus;
                        $profs[$idx]['isApproved'] = ($newStatus === 'approved');
                        $profs[$idx]['updatedAt'] = date('c');
                        break;
                    }
                }
                writeJsonFile($professorsFile, $profs);
                echo json_encode(['success' => true, 'status' => $newStatus, 'professors' => $profs]);
                exit;
            }

            // Save / Register single professor
            if (is_array($inputData) && !empty($inputData)) {
                $targetId = isset($inputData['id']) ? (string)$inputData['id'] : ('prof-' . time());
                $inputData['id'] = $targetId;
                $inputData['updatedAt'] = date('c');

                $foundIdx = -1;
                foreach ($profs as $idx => $p) {
                    if ((isset($p['id']) && (string)$p['id'] === $targetId) ||
                        (isset($p['username'], $inputData['username']) && !empty($inputData['username']) && strtolower(trim($p['username'])) === strtolower(trim($inputData['username'])))) {
                        $foundIdx = $idx;
                        break;
                    }
                }

                if ($foundIdx >= 0) {
                    $profs[$foundIdx] = array_merge($profs[$foundIdx], $inputData);
                } else {
                    array_unshift($profs, $inputData);
                }

                writeJsonFile($professorsFile, $profs);
                echo json_encode(['success' => true, 'professor' => $inputData, 'count' => count($profs), 'professors' => $profs]);
                exit;
            }
        }

        echo json_encode(['success' => true, 'count' => count($profs), 'professors' => $profs]);
        exit;
        break;

    // ==========================================
    // 3. APPOINTMENTS API
    // ==========================================
    case 'appointments':
    case 'get_appointments':
    case 'api/appointments':
    case 'appointments/book':
    case 'appointments/save':
        $appts = readJsonFile($appointmentsFile, []);

        if ($_SERVER['REQUEST_METHOD'] === 'POST' && is_array($inputData)) {
            $targetId = isset($inputData['id']) ? (string)$inputData['id'] : ('appt-' . time());
            $inputData['id'] = $targetId;
            $inputData['createdAt'] = $inputData['createdAt'] ?? date('c');

            array_unshift($appts, $inputData);
            writeJsonFile($appointmentsFile, $appts);
            echo json_encode(['success' => true, 'appointment' => $inputData, 'count' => count($appts), 'appointments' => $appts]);
            exit;
        }

        echo json_encode(['success' => true, 'count' => count($appts), 'appointments' => $appts]);
        exit;
        break;

    default:
        // Return health check
        echo json_encode([
            'success' => true,
            'service' => 'Vet Hospital API',
            'version' => '2.0',
            'zeroVpn' => true,
            'time' => date('c')
        ]);
        exit;
}
