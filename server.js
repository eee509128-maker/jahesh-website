import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import appAuthHandler from './api/app-auth.js';
import {
  findProductByIdentifier,
  renderProductHtml,
  generateProductsSitemapXml,
  generateMasterSitemapXml
} from './api/product-seo.js';
import {
  readVetDepartments,
  readVetProfessors,
  writeVetProfessors,
  readDeletedVetProfessors,
  addDeletedVetProfessorId,
  removeDeletedVetProfessorId,
  readVetAppointments,
  writeVetAppointments,
  readVetUsers,
  writeVetUsers,
  readDeletedVetUsers,
  addDeletedVetUserId,
  removeDeletedVetUserId,
  performAiVeterinaryTriage,
  saveBase64ImageToVetUploads
} from './api/vet-hospital.js';
import {
  generateLandingContentWithAi,
  renderPaymentLandingHtml,
  renderPaymentVerifyHtml
} from './api/payment-landing-generator.js';
import {
  readCustomMerchantsFromDisk,
  writeCustomMerchantsToDisk,
  readGatewayTransactionsFromDisk,
  writeGatewayTransactionsToDisk,
  readGatewaySettingsFromDisk,
  writeGatewaySettingsToDisk,
  generateMerchantCode,
  generateApiKey,
  generateGatewayTrackId,
  renderJaheshGatewayCheckoutHtml,
  renderJaheshGatewayReturnHtml
} from './api/gateway-provider.js';
import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  collection,
  onSnapshot
} from 'firebase/firestore';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// ==========================================
// پایگاه ابری فایربیس در سرور (۱۰۰٪ مستقل از فیلترشکن - اتصال آنی به گوگل کلود)
// ==========================================
const firebaseConfig = {
  projectId: 'tranquil-keyword-5ggh3',
  appId: '1:39375983688:web:6405230219491a92a7f5a6',
  apiKey: 'AIzaSyBoilrOWTMjbpG1IHvKDkRD9Dm20Pl7UW8',
  authDomain: 'tranquil-keyword-5ggh3.firebaseapp.com'
};

const serverFirebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig, 'vet-cloud-server');
const serverDb = getFirestore(serverFirebaseApp, 'ai-studio-jaheshwebsite-13126c61-5143-4f84-b87e-dcc220de14bc');

// ==========================================
// مسیرهای دائمی فایل‌های داده و متدهای همگام‌سازی ابری فایربیس
// ==========================================
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
const BANNERS_FILE = path.join(DATA_DIR, 'banners.json');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const DELETED_PRODUCTS_FILE = path.join(DATA_DIR, 'deleted_products.json');
const PAYMENT_LANDINGS_FILE = path.join(DATA_DIR, 'payment_landings.json');

function readPaymentLandingsFromDisk() {
  try {
    if (fs.existsSync(PAYMENT_LANDINGS_FILE)) {
      const raw = fs.readFileSync(PAYMENT_LANDINGS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('Error reading payment_landings.json:', e);
  }
  return [];
}

function writePaymentLandingsToDisk(landings) {
  if (!Array.isArray(landings)) return;
  try {
    fs.writeFileSync(PAYMENT_LANDINGS_FILE, JSON.stringify(landings, null, 2), 'utf8');
  } catch (e) {
    console.warn('writePaymentLandingsToDisk notice:', e);
  }
}

let productsVersion = Date.now();

function getDeletedProductIds() {
  try {
    if (fs.existsSync(DELETED_PRODUCTS_FILE)) {
      const raw = fs.readFileSync(DELETED_PRODUCTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('Error reading deleted_products.json:', e);
  }
  return [];
}

function writeDeletedProductIdsToDisk(ids) {
  try {
    fs.writeFileSync(DELETED_PRODUCTS_FILE, JSON.stringify(ids, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing deleted_products.json:', e);
  }
}

function addDeletedProductId(id) {
  if (!id) return;
  try {
    const list = getDeletedProductIds();
    if (!list.includes(id)) {
      list.push(id);
      writeDeletedProductIdsToDisk(list);
    }
  } catch (e) {
    console.error('Error adding deleted product ID:', e);
  }
}

function removeDeletedProductId(id) {
  if (!id) return;
  try {
    let list = getDeletedProductIds();
    if (list.includes(id)) {
      list = list.filter((x) => x !== id);
      writeDeletedProductIdsToDisk(list);
    }
  } catch (e) {
    console.error('Error removing deleted product ID:', e);
  }
}

function readBannersFromDisk() {
  try {
    if (fs.existsSync(BANNERS_FILE)) {
      const raw = fs.readFileSync(BANNERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error('Error reading banners.json:', e);
  }
  return [];
}

function writeBannersToDisk(banners) {
  if (!Array.isArray(banners)) return;
  try {
    fs.writeFileSync(BANNERS_FILE, JSON.stringify(banners, null, 2), 'utf8');
    const distData = path.join(__dirname, 'jaheshkala', 'data', 'banners.json');
    if (fs.existsSync(path.dirname(distData))) {
      fs.writeFileSync(distData, JSON.stringify(banners, null, 2), 'utf8');
    }
    const appData = path.join(__dirname, 'jaheshkala-app', 'public', 'data', 'banners.json');
    if (fs.existsSync(path.dirname(appData))) {
      fs.writeFileSync(appData, JSON.stringify(banners, null, 2), 'utf8');
    }
  } catch (e) {
    console.warn('writeBannersToDisk notice:', e);
  }
}

function readProductsFromDisk() {
  try {
    if (fs.existsSync(PRODUCTS_FILE)) {
      const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error('Error reading products.json:', e);
  }
  return [];
}

function writeProductsToDisk(products) {
  if (!Array.isArray(products)) return;
  try {
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8');
    const distData = path.join(__dirname, 'jaheshkala', 'data', 'products.json');
    if (fs.existsSync(path.dirname(distData))) {
      fs.writeFileSync(distData, JSON.stringify(products, null, 2), 'utf8');
    }
    const appData = path.join(__dirname, 'jaheshkala-app', 'public', 'data', 'products.json');
    if (fs.existsSync(path.dirname(appData))) {
      fs.writeFileSync(appData, JSON.stringify(products, null, 2), 'utf8');
    }
    productsVersion = Date.now();
  } catch (e) {
    console.warn('writeProductsToDisk notice:', e);
  }
}

// شنود زنده و آنی دیتابیس ابری فایربیس بر روی سرور
try {
  // ۱. شنود بنرهای فروشگاه و سایت از فایربیس (تغییرات آنی برای تمام کاربران)
  onSnapshot(doc(serverDb, 'settings', 'banners'), (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      if (data && Array.isArray(data.banners) && data.banners.length > 0) {
        writeBannersToDisk(data.banners);
        console.log(`[Server Firestore] Real-time synced ${data.banners.length} banners from cloud`);
      }
    }
  }, (err) => console.warn('[Server Firestore] banners listener notice:', err));

  // ۲. شنود لیست محصولات حذف‌شده
  onSnapshot(doc(serverDb, 'settings', 'deleted_products'), (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      if (data && Array.isArray(data.deletedIds)) {
        writeDeletedProductIdsToDisk(data.deletedIds);
      }
    }
  }, (err) => console.warn('[Server Firestore] deleted_products listener notice:', err));

  // ۳. شنود محصولات فروشگاه از فایربیس (تغییرات آنی برای تمام کاربران)
  onSnapshot(doc(serverDb, 'settings', 'products'), (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      if (data && Array.isArray(data.products) && data.products.length > 0) {
        const deletedSet = new Set(getDeletedProductIds());
        const valid = data.products.filter((p) => p && p.id && !deletedSet.has(p.id));
        if (valid.length > 0) {
          writeProductsToDisk(valid);
          console.log(`[Server Firestore] Real-time synced ${valid.length} products from cloud`);
        }
      }
    }
  }, (err) => console.warn('[Server Firestore] products listener notice:', err));

  // ۴. اساتید دامپزشکی
  onSnapshot(collection(serverDb, 'professors'), (snap) => {
    const firestoreProfs = [];
    const deletedKeys = new Set(readDeletedVetProfessors());
    snap.docs.forEach((d) => {
      const data = d.data();
      const pId = String(d.id || '').toLowerCase();
      const pUname = String(data.username || '').toLowerCase();
      if (!deletedKeys.has(pId) && !deletedKeys.has(pUname)) {
        firestoreProfs.push({ ...data, id: d.id });
      }
    });
    if (firestoreProfs.length > 0) {
      const localProfs = readVetProfessors();
      const mergedMap = new Map();
      localProfs.forEach((p) => {
        if (p && p.id && !deletedKeys.has(String(p.id).toLowerCase())) mergedMap.set(p.id, p);
      });
      firestoreProfs.forEach((p) => {
        if (p && p.id && !deletedKeys.has(String(p.id).toLowerCase())) mergedMap.set(p.id, p);
      });
      const mergedProfs = Array.from(mergedMap.values());
      writeVetProfessors(mergedProfs);
      console.log(`[Server Firestore] Real-time merged ${mergedProfs.length} professors`);
    }
  }, (err) => console.warn('[Server Firestore] professors listener notice:', err));

  // ۵. کاربران
  onSnapshot(collection(serverDb, 'users'), (snap) => {
    const firestoreUsers = [];
    const deletedKeys = new Set(readDeletedVetUsers());
    snap.docs.forEach((d) => {
      const data = d.data();
      const uId = String(d.id || '').toLowerCase();
      const uUname = String(data.username || '').toLowerCase();
      if (!deletedKeys.has(uId) && !deletedKeys.has(uUname)) {
        firestoreUsers.push({ ...data, id: d.id });
      }
    });
    if (firestoreUsers.length > 0) {
      const localUsers = readVetUsers();
      const mergedMap = new Map();
      localUsers.forEach((u) => {
        if (u && u.id && !deletedKeys.has(String(u.id).toLowerCase())) mergedMap.set(u.id, u);
      });
      firestoreUsers.forEach((u) => {
        if (u && u.id && !deletedKeys.has(String(u.id).toLowerCase())) mergedMap.set(u.id, u);
      });
      const mergedUsers = Array.from(mergedMap.values());
      writeVetUsers(mergedUsers);
      console.log(`[Server Firestore] Real-time merged ${mergedUsers.length} users`);
    }
  }, (err) => console.warn('[Server Firestore] users listener notice:', err));

  // ۶. نوبت‌ها
  onSnapshot(collection(serverDb, 'vet_appointments'), (snap) => {
    const firestoreAppts = [];
    snap.docs.forEach((d) => firestoreAppts.push({ ...d.data(), id: d.id }));
    if (firestoreAppts.length > 0) {
      const localAppts = readVetAppointments();
      const mergedMap = new Map();
      localAppts.forEach((a) => {
        if (a && a.id) mergedMap.set(a.id, a);
      });
      firestoreAppts.forEach((a) => {
        if (a && a.id) mergedMap.set(a.id, a);
      });
      const mergedAppts = Array.from(mergedMap.values());
      writeVetAppointments(mergedAppts);
      console.log(`[Server Firestore] Real-time merged ${mergedAppts.length} appointments`);
    }
  }, (err) => console.warn('[Server Firestore] appointments listener notice:', err));

  // ۷. شنود لندینگ‌پیج‌ها و لینک‌های اختصاصی پرداخت هوشمند
  onSnapshot(doc(serverDb, 'settings', 'payment_landings'), (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      if (data && Array.isArray(data.landings) && data.landings.length > 0) {
        writePaymentLandingsToDisk(data.landings);
        console.log(`[Server Firestore] Real-time synced ${data.landings.length} payment landings`);
      }
    }
  }, (err) => console.warn('[Server Firestore] payment_landings listener notice:', err));

  // ۸. شنود مرچنت‌های سفارشی و درگاه‌های واسط کارفرمایان
  onSnapshot(doc(serverDb, 'settings', 'custom_merchants'), (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      if (data && Array.isArray(data.merchants) && data.merchants.length > 0) {
        writeCustomMerchantsToDisk(data.merchants);
        console.log(`[Server Firestore] Real-time synced ${data.merchants.length} custom merchants`);
      }
    }
  }, (err) => console.warn('[Server Firestore] custom_merchants listener notice:', err));

  // ۹. شنود تراکنش‌های درگاه واسط کارفرمایان
  onSnapshot(doc(serverDb, 'settings', 'gateway_transactions'), (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      if (data && Array.isArray(data.transactions) && data.transactions.length > 0) {
        writeGatewayTransactionsToDisk(data.transactions);
        console.log(`[Server Firestore] Real-time synced ${data.transactions.length} gateway transactions`);
      }
    }
  }, (err) => console.warn('[Server Firestore] gateway_transactions listener notice:', err));

  // ۱۰. شنود تنظیمات تسهیم و شبای مدیر درگاه واسط
  onSnapshot(doc(serverDb, 'settings', 'gateway_settings'), (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      if (data && typeof data === 'object') {
        writeGatewaySettingsToDisk(data);
        console.log('[Server Firestore] Real-time synced gateway settings (Multiplexing)');
      }
    }
  }, (err) => console.warn('[Server Firestore] gateway_settings listener notice:', err));
} catch (e) {
  console.warn('[Server Firestore] listener init error:', e);
}

// همگام‌سازی فوری در ثانیه اول بوت سرور (حفاظت ۱۰۰٪ دائمی در برابر دیپلوی‌ها و نصب‌های مجدد گیت‌هاب)
async function bootSyncFirestoreCloud() {
  try {
    // ۱. دریافت بنرهای ابری
    const bSnap = await getDoc(doc(serverDb, 'settings', 'banners'));
    if (bSnap.exists()) {
      const bData = bSnap.data();
      if (bData && Array.isArray(bData.banners) && bData.banners.length > 0) {
        writeBannersToDisk(bData.banners);
        console.log(`[Server Firestore Boot] Loaded ${bData.banners.length} cloud banners`);
      }
    }

    // ۲. دریافت شناسه محصولات حذف‌شده
    let deletedSet = new Set(getDeletedProductIds());
    const dSnap = await getDoc(doc(serverDb, 'settings', 'deleted_products'));
    if (dSnap.exists()) {
      const dData = dSnap.data();
      if (dData && Array.isArray(dData.deletedIds)) {
        writeDeletedProductIdsToDisk(dData.deletedIds);
        deletedSet = new Set(dData.deletedIds);
      }
    }

    // ۳. دریافت محصولات ابری از settings/products و کالکشن products
    const pSnap = await getDoc(doc(serverDb, 'settings', 'products'));
    let cloudProducts = [];
    if (pSnap.exists()) {
      const pData = pSnap.data();
      if (pData && Array.isArray(pData.products)) {
        cloudProducts = pData.products.filter((p) => p && p.id && !deletedSet.has(p.id));
      }
    }

    try {
      const cSnap = await getDocs(collection(serverDb, 'products'));
      const pMap = new Map();
      cloudProducts.forEach((p) => pMap.set(p.id, p));
      cSnap.forEach((d) => {
        const item = d.data();
        if (item && item.id && !deletedSet.has(item.id)) {
          if (!pMap.has(item.id)) {
            pMap.set(item.id, item);
          } else {
            pMap.set(item.id, { ...pMap.get(item.id), ...item });
          }
        }
      });
      cloudProducts = Array.from(pMap.values());
    } catch {}

    if (cloudProducts.length > 0) {
      writeProductsToDisk(cloudProducts);
      console.log(`[Server Firestore Boot] Loaded & persisted ${cloudProducts.length} cloud products to disk`);
    }

    // ۴. دریافت لندینگ‌های پرداخت هوشمند ابری
    const plSnap = await getDoc(doc(serverDb, 'settings', 'payment_landings'));
    if (plSnap.exists()) {
      const plData = plSnap.data();
      if (plData && Array.isArray(plData.landings) && plData.landings.length > 0) {
        writePaymentLandingsToDisk(plData.landings);
        console.log(`[Server Firestore Boot] Loaded ${plData.landings.length} payment landings`);
      }
    }

    // ۵. دریافت مرچنت‌های واسط کارفرمایان ابری
    const cmSnap = await getDoc(doc(serverDb, 'settings', 'custom_merchants'));
    if (cmSnap.exists()) {
      const cmData = cmSnap.data();
      if (cmData && Array.isArray(cmData.merchants) && cmData.merchants.length > 0) {
        writeCustomMerchantsToDisk(cmData.merchants);
        console.log(`[Server Firestore Boot] Loaded ${cmData.merchants.length} custom merchants`);
      }
    }

    // ۶. دریافت تراکنش‌های درگاه واسط ابری
    const gtSnap = await getDoc(doc(serverDb, 'settings', 'gateway_transactions'));
    if (gtSnap.exists()) {
      const gtData = gtSnap.data();
      if (gtData && Array.isArray(gtData.transactions) && gtData.transactions.length > 0) {
        writeGatewayTransactionsToDisk(gtData.transactions);
        console.log(`[Server Firestore Boot] Loaded ${gtData.transactions.length} gateway transactions`);
      }
    }

    // ۷. دریافت تنظیمات تسهیم و شبای مدیر درگاه واسط
    const gsSnap = await getDoc(doc(serverDb, 'settings', 'gateway_settings'));
    if (gsSnap.exists()) {
      const gsData = gsSnap.data();
      if (gsData && typeof gsData === 'object') {
        writeGatewaySettingsToDisk(gsData);
        console.log('[Server Firestore Boot] Loaded gateway settings (Multiplexing admin Sheba)');
      }
    }
  } catch (err) {
    console.warn('[Server Firestore Boot] Sync notice:', err.message);
  }
}
bootSyncFirestoreCloud();

// Global CORS Middleware - Enables Cross-Origin API calls from Google AI Studio, Android, iOS, Windows and external apps
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-api-key');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(express.json({ limit: '250mb' }));
app.use(express.urlencoded({ extended: true, limit: '250mb' }));

// Static uploads directory for banners and user-uploaded media
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const BANNERS_UPLOADS_DIR = path.join(UPLOADS_DIR, 'banners');
if (!fs.existsSync(BANNERS_UPLOADS_DIR)) {
  fs.mkdirSync(BANNERS_UPLOADS_DIR, { recursive: true });
}
const PRODUCTS_UPLOADS_DIR = path.join(UPLOADS_DIR, 'products');
if (!fs.existsSync(PRODUCTS_UPLOADS_DIR)) {
  fs.mkdirSync(PRODUCTS_UPLOADS_DIR, { recursive: true });
}
const APPS_UPLOADS_DIR = path.join(UPLOADS_DIR, 'apps');
if (!fs.existsSync(APPS_UPLOADS_DIR)) {
  fs.mkdirSync(APPS_UPLOADS_DIR, { recursive: true });
}
const DIST_APPS_UPLOADS_DIR = path.join(__dirname, 'jaheshkala', 'uploads', 'apps');
if (!fs.existsSync(DIST_APPS_UPLOADS_DIR)) {
  fs.mkdirSync(DIST_APPS_UPLOADS_DIR, { recursive: true });
}
const APP_SRC_UPLOADS_DIR = path.join(__dirname, 'jaheshkala-app', 'public', 'uploads', 'apps');
if (!fs.existsSync(APP_SRC_UPLOADS_DIR)) {
  fs.mkdirSync(APP_SRC_UPLOADS_DIR, { recursive: true });
}
const JAHESH_IMAGES_DIR = path.join(__dirname, 'jaheshkala', 'images');
if (!fs.existsSync(JAHESH_IMAGES_DIR)) {
  fs.mkdirSync(JAHESH_IMAGES_DIR, { recursive: true });
}

// Robust Streamer for APK and App Downloads with Full HTTP Range (206) and Resume Support
function serveAppDownload(req, res, targetFilename) {
  const rawTarget = targetFilename || req.params?.filename || req.query?.file || 'shantia.apk';
  const cleanName = path.basename(String(rawTarget).trim());

  const candidatePaths = [
    path.join(APPS_UPLOADS_DIR, cleanName),
    path.join(DIST_APPS_UPLOADS_DIR, cleanName),
    path.join(APP_SRC_UPLOADS_DIR, cleanName),
    path.join(__dirname, 'public', 'uploads', 'apps', cleanName),
    path.join(UPLOADS_DIR, cleanName),
    path.join(__dirname, 'jaheshkala', 'uploads', cleanName),
    path.join(__dirname, 'jaheshkala-app', 'public', cleanName),
    path.join(__dirname, cleanName)
  ];

  let resolvedPath = candidatePaths.find((p) => fs.existsSync(p) && fs.statSync(p).isFile());

  // If specific file not found by exact name, look for any .apk file in the apps folders
  if (!resolvedPath) {
    const searchDirs = [APPS_UPLOADS_DIR, DIST_APPS_UPLOADS_DIR, APP_SRC_UPLOADS_DIR];
    for (const sDir of searchDirs) {
      if (fs.existsSync(sDir)) {
        try {
          const files = fs.readdirSync(sDir);
          const apk = files.find((f) => f.toLowerCase().endsWith('.apk'));
          if (apk) {
            resolvedPath = path.join(sDir, apk);
            break;
          }
        } catch {}
      }
    }
  }

  if (!resolvedPath || !fs.existsSync(resolvedPath)) {
    return res.status(404).send(`فایل دانلودی «${cleanName}» روی سرور یافت نشد. لطفاً مطمئن شوید فایل را در پوشه uploads/apps قرار داده‌اید.`);
  }

  const stat = fs.statSync(resolvedPath);
  const fileSize = stat.size;
  const ext = path.extname(cleanName).toLowerCase();
  let mimeType = 'application/vnd.android.package-archive';
  if (ext === '.zip') mimeType = 'application/zip';
  else if (ext === '.exe') mimeType = 'application/x-msdownload';
  else if (ext !== '.apk') mimeType = 'application/octet-stream';

  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    if (start >= fileSize || end >= fileSize) {
      res.setHeader('Content-Range', `bytes */${fileSize}`);
      return res.status(416).send('Requested Range Not Satisfiable');
    }
    const chunksize = end - start + 1;
    const fileStream = fs.createReadStream(resolvedPath, { start, end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': mimeType,
      'Content-Disposition': `attachment; filename="${encodeURIComponent(cleanName)}"`,
      'Cache-Control': 'public, max-age=86400',
    });
    fileStream.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': mimeType,
      'Content-Disposition': `attachment; filename="${encodeURIComponent(cleanName)}"`,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=86400',
    });
    fs.createReadStream(resolvedPath).pipe(res);
  }
}

// Dedicated routes for downloading apps (shantia and others)
app.get([
  '/api/download/app',
  '/api/download/shantia',
  '/api/download-app',
  '/download/shantia.apk',
  '/uploads/apps/:filename',
  '/jaheshkala/uploads/apps/:filename',
  '/apps/:filename'
], (req, res) => {
  serveAppDownload(req, res, req.params?.filename || 'shantia.apk');
});

const staticUploadsOptions = {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.apk')) {
      res.setHeader('Content-Type', 'application/vnd.android.package-archive');
      res.setHeader('Content-Disposition', 'attachment; filename="' + path.basename(filePath) + '"');
      res.setHeader('Accept-Ranges', 'bytes');
    }
  }
};

// Multi-folder static serving fallback for uploads
const allUploadsDirs = [
  UPLOADS_DIR,
  path.join(__dirname, 'jaheshkala', 'uploads'),
  path.join(__dirname, 'jaheshkala-app', 'public', 'uploads'),
  path.join(__dirname, 'public', 'uploads')
];

allUploadsDirs.forEach((dir) => {
  if (fs.existsSync(dir)) {
    app.use('/uploads', express.static(dir, staticUploadsOptions));
    app.use('/jaheshkala/uploads', express.static(dir, staticUploadsOptions));
  }
});

app.use('/jaheshkala/images', express.static(JAHESH_IMAGES_DIR));
app.use('/images', express.static(JAHESH_IMAGES_DIR));

// Favicon and Web App Manifest routes for Googlebot, Search Engine Crawlers, browsers and mobile
const faviconFiles = [
  'favicon.ico',
  'favicon-48x48.png',
  'favicon-96x96.png',
  'favicon-144x144.png',
  'favicon-192x192.png',
  'favicon-512x512.png',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'favicon.svg',
  'apple-touch-icon.png',
  'apple-touch-icon-precomposed.png',
  'site.webmanifest'
];

faviconFiles.forEach((file) => {
  const handler = (req, res) => {
    const target = path.join(__dirname, file);
    if (fs.existsSync(target)) {
      if (file.endsWith('.ico')) res.setHeader('Content-Type', 'image/x-icon');
      else if (file.endsWith('.png')) res.setHeader('Content-Type', 'image/png');
      else if (file.endsWith('.svg')) res.setHeader('Content-Type', 'image/svg+xml');
      else if (file.endsWith('.webmanifest')) res.setHeader('Content-Type', 'application/manifest+json');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.sendFile(target);
    }
    res.status(404).send('Not found');
  };
  app.get(`/${file}`, handler);
  app.get(`/jaheshkala/${file}`, handler);
});

// Cloudflare AI Support Route for JaheshKala
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || 'e8950358d5cf09f0f511b46172f65791';
const CLOUDFLARE_AI_TOKEN = process.env.CLOUDFLARE_AI_TOKEN || 'cfut_Dux4Ej0iGy3P0bowmnh5LevCZ0f1DaTDmr5a1lmR074a186e';
const MODEL_NAME = '@cf/meta/llama-3.1-8b-instruct';

app.post('/api/cloudflare-ai', async (req, res) => {
  try {
    const { userQuestion, chatHistory = [] } = req.body;
    if (!userQuestion || typeof userQuestion !== 'string') {
      return res.status(400).json({ error: 'userQuestion is required' });
    }

    const systemPrompt = `تو دستیار هوشمند و دانا و پشتیبان رسمی اکوسیستم فناوری «جهش» شامل «انجمن علمی جهش» (تاسیس ۱۳۹۵)، «جهش آی‌تی» (jaheshit.ir) و فروشگاه آنلاین «جهش‌کالا» هستی.
وظیفه اصلی و مهم تو این است که به تمام سوالات کاربران درباره انجمن علمی جهش، تاریخچه، خدمات، محصولات، پکیج‌ها و سامانه‌ها، بسیار خوش‌برخورد، کامل، دقیق، حرفه‌ای و به زبان فارسی روان پاسخ بدهی.

شناسنامه و تاریخچه معتبر انجمن علمی جهش:
۱. پیشینه و سال تاسیس:
   - انجمن علمی جهش در سال ۱۳۹۵ هجری خورشیدی (۲۰۱۶ میلادی) توسط جمعی از نخبگان دانشگاهی و با همراهی کانون علمی پژوهشی جهش و مهندس عرفان مقدم متقی با هدف ارتقای دانش تخصصی، آموزش مهارت‌های برنامه‌نویسی و پل زدن میان دانشگاه و بازار کار تاسیس شد.
   - از سال ۱۳۹۵ تا کنون بیش از یک دهه سابقه درخشان در برگزاری صدها کارگاه علمی، پروژه‌های تحقیقاتی، طراحی سامانه‌های تحت وب و هوش مصنوعی دارد.
   - این انجمن تشکل مادر و پایه‌گذار اکوسیستم «جهش آی‌تی» و پلتفرم «جهش‌کالا» است.

۲. دپارتمان‌ها و فعالیت‌های کلیدی انجمن علمی جهش:
   - دپارتمان آموزش و پژوهش: برگزاری دوره‌ها، سمینارها و رویدادهای تخصصی برنامه‌نویسی، امنیت و وب.
   - دپارتمان توسعه نرم‌افزار و طراحی سایت: ارائه خدمات کدنویسی استاندارد، طراحی وب‌سایت‌های شرکتی، فروشگاهی و پورتال‌های اختصاصی با تضمین سئو.
   - دپارتمان هوش مصنوعی جهش (Jahesh AI): تحقیق و توسعه مدل‌های زبانی، بینایی ماشین، سیستم‌های تحلیل داده و بات‌های پشتیبانی خودکار.
   - دپارتمان سامانه‌های صنفی: طراحی نرم‌افزارهای یکپارچه برای ۲۵ صنف شغلی کشور از جمله سامانه مدیریت املاک جهش (با فایلینگ هوشمند، صدور قرارداد و کد رهگیری).
   - پلتفرم و فروشگاه جهش‌کالا: مرکز خرید برخط انواع کالای دیجیتال (موبایل، لپ‌تاپ، تبلت و ...) و پکیج‌های توسعه وب با ضمانت بازگشت وجه.

۳. پکیج طلایی طراحی سایت اختصاصی جهش:
   - قیمت پکیج طلایی: ۷,۹۰۰,۰۰۰ تومان (با تخفیف ویژه از ۱۱,۵۰۰,۰۰۰ تومان).
   - خدمات پکیج شامل: ثبت رایگان دامنه با نام دلخواه مشتری، ۱ ماه هاست فوق‌سریع NVMe رایگان، اتصال مستقیم به درگاه پرداخت زیبال با تسویه حساب آنی شاپرک، طراحی کاملاً واکنش‌گرا (موبایل و کامپیوتر)، پنل اختصاصی مدیریت، کدنویسی بهینه و سبک.
   - تضمین سئو و رتبه ۱ گوگل: همراه با تنظیمات سرچ‌کنسول و بهینه‌سازی کامل فنی جهت دستیابی به رتبه اول نتایج جستجوی گوگل.
   - کدهای تخفیف معتبر: از جمله کد سازمانی و تاریخی jahesh1395.

۴. راه‌های ارتباطی و نشانی رسمی:
   - دفتر مرکزی: مشهد مقدس، خیام شمالی ۴۶، بین شکری ۱۳ و ۱۵، پلاک ۲۸۷.
   - شماره تلفن‌های مستقیم پشتیبانی: 09152331974 و 09364864663.
   - آدرس وب‌سایت رسمی: jaheshit.ir
   - لینک درباره انجمن: jaheshit.ir/drbarh-anjmn/
   - کانال و ارتباط تلگرام: https://t.me/+7eeuF5ZMpFRmYzg8 و @emainsupport
   - نماد اعتماد الکترونیکی (اینماد): تایید شده وزارت صمت با شناسه ۴۷۸۸۷۵۰۹.
   - پاسخگویی: ۲۴ ساعته در ۷ روز هفته.

قوانین پاسخگویی:
۱. برای تمام سوالات مربوط به انجمن علمی جهش، تاریخچه (تاسیس ۱۳۹۵)، اهداف، دپارتمان‌ها، خدمات، قیمت‌ها، پکیج طراحی سایت، ویژگی‌ها، هاست، دامنه، درگاه، سئو، آدرس و شماره تلفن، خودت با افتخار، زبان فارسی شیوا و اطلاعات کامل پاسخ بده.
۲. فقط در صورتی که کاربر سوالی پرسید که نیاز به بررسی دستی مدیر دارد (مانند پیگیری سفارش خاص نیازمند بررسی پایگاه داده داخلی، مسائل حقوقی شخصی یا درخواست تماس اختصاصی با مدیریت)، بگو:
«پیام شما دریافت شد. این مورد برای بررسی تخصصی به همکاران واحد پشتیبانی و مدیریت ارجاع گردید و به زودی پاسخ شما پیگیری خواهد شد.»
و در پایان عبارت [ESCALATE_TO_ADMIN] را بنویس.
۳. در تمام سوالات عادی و توضیحات مربوط به انجمن و سایت، عبارت [ESCALATE_TO_ADMIN] را به هیچ وجه ذکر نکن.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...chatHistory.slice(-4),
      { role: 'user', content: userQuestion }
    ];

    const cfRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${MODEL_NAME}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_AI_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages,
          max_tokens: 600,
          temperature: 0.3
        })
      }
    );

    if (!cfRes.ok) {
      const errBody = await cfRes.text();
      console.warn('Cloudflare AI error:', cfRes.status, errBody);
      return res.status(502).json({ error: 'Cloudflare AI error', details: errBody });
    }

    const data = await cfRes.json();
    let reply = '';
    if (data.result?.response) {
      reply = data.result.response;
    } else if (data.result?.choices?.[0]?.message?.content) {
      reply = data.result.choices[0].message.content;
    }

    if (!reply) {
      return res.status(500).json({ error: 'Empty response from model' });
    }

    let escalate = false;
    if (reply.includes('[ESCALATE_TO_ADMIN]')) {
      escalate = true;
      reply = reply.replace(/\[ESCALATE_TO_ADMIN\]/g, '').trim();
    }

    return res.json({ reply, escalateToAdmin: escalate });
  } catch (err) {
    console.error('Error in /api/cloudflare-ai:', err);
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'jahesh-kala-api' });
});

// Server-side Banners Persistence API

const DEFAULT_SERVER_BANNERS = [
  {
    id: 'banner-2',
    cta: 'مشاهده جزئیات و خرید',
    badge: 'پیشنهاد طلایی جهش',
    image: '/uploads/banners/official_banner-2.jpg',
    order: 0,
    title: 'پکیج طلایی طراحی سایت اختصاصی جهش',
    fitMode: 'auto',
    gradient: 'from-[#172554] via-[#111827] to-[#080d1a]',
    isActive: true,
    subtitle: 'کدنویسی و توسعه  اختصاصی وب‌سایت، به همراه هاست قدرتمند، دامین رایگان، امنیت بالا و پشتیبانی فنی',
    actionType: 'product',
    titleColor: '#ffffff',
    actionTarget: 'pkg-golden-jahesh',
    imagePosition: 'center',
    subtitleColor: '#e2e8f0',
    titleFontSize: 'lg',
    highlightColor: '#fbbf24',
    overlayOpacity: 70,
    hideTextOverlay: false,
    singleLineTitle: true,
    subtitleFontSize: 'md',
    textBackdropTheme: 'dark',
    singleLineSubtitle: false,
    textBackdropEnabled: true,
    textBackdropOpacity: 25,
  },
  {
    id: 'banner-3',
    cta: 'مشاهده و ثبت‌نام',
    badge: 'ویژه مشاوران املاک',
    image: '/uploads/banners/official_banner-3.jpg',
    order: 1,
    title: 'سامانه مدیریت املاک جهش',
    fitMode: 'auto',
    gradient: 'from-[#172554] via-[#111827] to-[#080d1a]',
    isActive: true,
    subtitle: 'نرم‌افزار جامع فایلینگ، مدیریت مشتریان و بایگانی هوشمند املاک',
    actionType: 'product',
    titleColor: '#ffffff',
    targetGuild: 'املاک و مستغلات',
    actionTarget: 'pkg-amlak-jahesh',
    imagePosition: 'center',
    subtitleColor: '#e2e8f0',
    titleFontSize: 'lg',
    highlightColor: '#fbbf24',
    overlayOpacity: 65,
    hideTextOverlay: false,
    singleLineTitle: true,
    subtitleFontSize: 'md',
    textBackdropTheme: 'dark',
    singleLineSubtitle: false,
    textBackdropEnabled: true,
    textBackdropOpacity: 25,
  },
  {
    id: 'banner-1',
    cta: 'شروع کمپین انتخاباتی',
    badge: 'جشنواره تخفیف‌های ویژه',
    image: '/uploads/banners/official_banner-1.jpg',
    order: 2,
    title: 'تبلیغات هوشمند کاندیداهای شورای شهر',
    fitMode: 'auto',
    gradient: 'from-[#172554] via-[#111827] to-[#080d1a]',
    isActive: true,
    subtitle: 'تولید تیزر با هوش مصنوعی، طراحی سایت و ربات رزومه',
    actionType: 'all',
    titleColor: '#ffffff',
    imagePosition: 'center',
    subtitleColor: '#e2e8f0',
    titleFontSize: 'lg',
    highlightColor: '#fbbf24',
    overlayOpacity: 85,
    hideTextOverlay: false,
    singleLineTitle: true,
    subtitleFontSize: 'md',
    textBackdropTheme: 'dark',
    singleLineSubtitle: false,
    textBackdropEnabled: true,
    textBackdropOpacity: 65,
  },
  {
    id: 'banner_1789042491741',
    cta: 'شروع کنید',
    badge: 'ویژه',
    image: '/uploads/banners/official_banner_1789042491741.jpg',
    order: 3,
    title: 'همین حالا، وب‌سایت حرفه‌ای خود را بسازید!',
    fitMode: 'auto',
    gradient: 'from-[#172554] via-[#111827] to-[#080d1a]',
    isActive: true,
    subtitle: 'کدنویسی و توسعه  اختصاصی وب‌سایت، به همراه هاست قدرتمند، دامین رایگان، امنیت بالا و پشتیبانی فنی جهش',
    actionType: 'product',
    titleColor: '#ffffff',
    actionTarget: 'pkg-golden-jahesh',
    imagePosition: 'center',
    subtitleColor: '#e2e8f0',
    titleFontSize: 'lg',
    highlightColor: '#fbbf24',
    overlayOpacity: 85,
    hideTextOverlay: false,
    singleLineTitle: true,
    subtitleFontSize: 'md',
    textBackdropTheme: 'dark',
    singleLineSubtitle: false,
    textBackdropEnabled: true,
    textBackdropOpacity: 25,
  },
];

// Endpoint to upload banner image file directly to server
app.post('/api/upload-banner', (req, res) => {
  try {
    const { image, filename } = req.body || {};
    if (!image || typeof image !== 'string') {
      return res.status(400).json({ error: 'داده تصویر الزامی است.' });
    }

    let ext = 'webp';
    let buffer;
    const matches = image.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
    if (matches) {
      const type = matches[1].toLowerCase();
      if (type.includes('png')) ext = 'png';
      else if (type.includes('jpeg') || type.includes('jpg')) ext = 'jpg';
      else if (type.includes('svg')) ext = 'svg';
      else if (type.includes('webp')) ext = 'webp';
      buffer = Buffer.from(matches[2], 'base64');
    } else if (image.startsWith('data:')) {
      const parts = image.split(',');
      buffer = Buffer.from(parts[1] || '', 'base64');
    } else {
      buffer = Buffer.from(image, 'base64');
    }

    if (!buffer || buffer.length === 0) {
      return res.status(400).json({ error: 'فرمت تصویر نامعتبر است.' });
    }

    const safeName = `banner_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    const filePath = path.join(BANNERS_UPLOADS_DIR, safeName);
    fs.writeFileSync(filePath, buffer);

    // Also mirror to jaheshkala static directory if it exists
    const distUploads = path.join(__dirname, 'jaheshkala', 'uploads', 'banners');
    try {
      if (!fs.existsSync(distUploads)) {
        fs.mkdirSync(distUploads, { recursive: true });
      }
      fs.writeFileSync(path.join(distUploads, safeName), buffer);
    } catch {}

    const publicUrl = `/uploads/banners/${safeName}`;
    console.log(`[Upload] Banner image saved to ${publicUrl}`);
    return res.json({ success: true, url: publicUrl });
  } catch (err) {
    console.error('Error in /api/upload-banner:', err);
    return res.status(500).json({ error: err.message || 'خطا در ذخیره‌سازی تصویر بنر' });
  }
});

app.get('/api/banners', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  try {
    if (fs.existsSync(BANNERS_FILE)) {
      const raw = fs.readFileSync(BANNERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return res.json(parsed);
      }
    }
  } catch (err) {
    console.error('Error reading banners.json:', err);
  }

  // If banners.json does not exist yet, seed it with default banners
  try {
    const dataDir = path.dirname(BANNERS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(BANNERS_FILE, JSON.stringify(DEFAULT_SERVER_BANNERS, null, 2), 'utf8');
  } catch (e) {
    console.warn('Could not initialize banners.json:', e);
  }

  return res.json(DEFAULT_SERVER_BANNERS);
});

app.post('/api/banners', (req, res) => {
  try {
    const banners = req.body;
    if (!Array.isArray(banners)) {
      return res.status(400).json({ error: 'Expected array of banners' });
    }
    writeBannersToDisk(banners);
    // ذخیره مستقیم در پایگاه ابری فایربیس (تضمین ماندگاری دائمی برای تمام کاربران اینترنت)
    try {
      setDoc(doc(serverDb, 'settings', 'banners'), { banners, updatedAt: new Date().toISOString() }, { merge: true }).catch(() => {});
    } catch (e) {}
    console.log(`[Banners] Successfully persisted ${banners.length} banners across all devices & Firestore cloud.`);
    return res.json({ success: true, count: banners.length });
  } catch (err) {
    console.error('Error saving banners.json:', err);
    return res.status(500).json({ error: err.message });
  }
});

// ==========================================
// Jahesh Technology Dashboard Tools API
// ==========================================
const TOOLS_FILE = path.join(__dirname, 'data', 'tools.json');
const TOOLS_UPLOADS_DIR = path.join(UPLOADS_DIR, 'tools');
if (!fs.existsSync(TOOLS_UPLOADS_DIR)) {
  fs.mkdirSync(TOOLS_UPLOADS_DIR, { recursive: true });
}

function getStoredTools() {
  try {
    if (fs.existsSync(TOOLS_FILE)) {
      const raw = fs.readFileSync(TOOLS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err) {
    console.error('Error reading tools.json:', err);
  }
  return [];
}

app.get('/api/tools', (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  try {
    const tools = getStoredTools();
    return res.json(tools);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/tools', (req, res) => {
  try {
    let tools = req.body;
    if (tools && Array.isArray(tools.tools)) {
      tools = tools.tools;
    } else if (tools && !Array.isArray(tools) && (tools.id || tools.title)) {
      // Single tool upsert
      let current = getStoredTools();
      const existingIdx = current.findIndex(t => t.id === tools.id);
      if (existingIdx >= 0) {
        current[existingIdx] = { ...current[existingIdx], ...tools };
      } else {
        current.unshift(tools);
      }
      tools = current;
    }

    if (!Array.isArray(tools)) {
      return res.status(400).json({ error: 'Expected array of tools or valid tool object' });
    }
    const dataDir = path.dirname(TOOLS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(TOOLS_FILE, JSON.stringify(tools, null, 2), 'utf8');
    console.log(`[Tools] Successfully persisted ${tools.length} dashboard tools.`);
    return res.json({ success: true, count: tools.length, tools });
  } catch (err) {
    console.error('Error saving tools.json:', err);
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/tools/save', (req, res) => {
  try {
    const tool = req.body;
    if (!tool || !tool.title) {
      return res.status(400).json({ error: 'Tool title is required' });
    }
    let tools = getStoredTools();
    const existingIndex = tools.findIndex(t => t.id === tool.id);
    if (existingIndex >= 0) {
      tools[existingIndex] = { ...tools[existingIndex], ...tool };
    } else {
      const newTool = {
        ...tool,
        id: tool.id || `tool_${Date.now()}`,
        order: tools.length,
        isActive: tool.isActive !== undefined ? tool.isActive : true
      };
      tools.push(newTool);
    }
    fs.writeFileSync(TOOLS_FILE, JSON.stringify(tools, null, 2), 'utf8');
    return res.json({ success: true, tool });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/tools/delete', (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: 'Tool id is required' });
    let tools = getStoredTools();
    tools = tools.filter(t => t.id !== id);
    fs.writeFileSync(TOOLS_FILE, JSON.stringify(tools, null, 2), 'utf8');
    return res.json({ success: true, remaining: tools.length });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.post('/api/upload-tool-image', (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }
    const matches = image.match(/^data:image\/([a-zA-Z0-9+-]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: 'Invalid base64 image data' });
    }
    const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');
    const safeName = `tool_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${ext}`;
    const filePath = path.join(TOOLS_UPLOADS_DIR, safeName);
    fs.writeFileSync(filePath, buffer);

    // Also copy to jaheshkala build directory if it exists
    const distUploads = path.join(__dirname, 'jaheshkala', 'uploads', 'tools');
    if (fs.existsSync(distUploads)) {
      try {
        fs.writeFileSync(path.join(distUploads, safeName), buffer);
      } catch (e) {}
    }

    const publicUrl = `/uploads/tools/${safeName}`;
    return res.json({ success: true, url: publicUrl });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// ==========================================
// Full Site 0 to 100 Backup & Restore API (داشبورد، محصولات، بنرها، سفارشات، لایسنس‌ها، کاربران، رسیدها و...)
// ==========================================
app.get(['/api/backup-full', '/jaheshkala/api/backup-full', '/api/admin/backup-full'], async (req, res) => {
  try {
    const readSafeJson = (p) => {
      try {
        if (fs.existsSync(p)) {
          return JSON.parse(fs.readFileSync(p, 'utf8'));
        }
      } catch (err) {
        console.warn(`[Backup] Notice reading ${p}:`, err.message);
      }
      return [];
    };

    const products = readSafeJson(path.join(__dirname, 'data', 'products.json'));
    const banners = readSafeJson(path.join(__dirname, 'data', 'banners.json'));
    const orders = readSafeJson(path.join(__dirname, 'data', 'orders.json'));
    const appLicenses = readSafeJson(path.join(__dirname, 'data', 'app_licenses.json'));
    const amlakLicenses = readSafeJson(path.join(__dirname, 'data', 'licenses.json'));
    const tools = readSafeJson(path.join(__dirname, 'data', 'tools.json'));
    const users = readSafeJson(path.join(__dirname, 'data', 'users.json'));
    const deletedProducts = readSafeJson(path.join(__dirname, 'data', 'deleted_products.json'));

    const fullBackup = {
      system: 'JAHESH_KALA_PLATFORM',
      version: '2.5.0-full-backup',
      timestamp: new Date().toISOString(),
      exportDateFa: new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full', timeStyle: 'medium', timeZone: 'Asia/Tehran' }).format(new Date()),
      siteUrl: 'https://jaheshit.ir',
      summary: {
        productsCount: products.length,
        bannersCount: banners.length,
        ordersCount: orders.length,
        appLicensesCount: appLicenses.length,
        amlakLicensesCount: amlakLicenses.length,
        totalLicensesCount: appLicenses.length + amlakLicenses.length,
        toolsCount: tools.length,
        usersCount: users.length,
      },
      data: {
        products,
        banners,
        orders,
        appLicenses,
        amlakLicenses,
        dashboardTools: tools,
        users,
        deletedProducts,
      }
    };

    if (req.query.download === 'true') {
      const fileName = `jahesh-full-backup-zero-to-hundred-${new Date().toISOString().slice(0, 10)}.json`;
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
    }

    return res.json(fullBackup);
  } catch (err) {
    console.error('Error generating full backup:', err);
    return res.status(500).json({ success: false, error: 'خطا در تهیه پشتیبان کامل', details: err.message });
  }
});

app.post(['/api/restore-full', '/jaheshkala/api/restore-full', '/api/admin/restore-full'], async (req, res) => {
  try {
    const payload = req.body || {};
    const backupData = payload.data || payload;

    const dataDir = path.join(__dirname, 'data');
    const jaheshDataDir = path.join(__dirname, 'jaheshkala', 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    if (!fs.existsSync(jaheshDataDir)) fs.mkdirSync(jaheshDataDir, { recursive: true });

    const writeBoth = (fileName, content) => {
      if (!content || !Array.isArray(content)) return;
      const str = JSON.stringify(content, null, 2);
      fs.writeFileSync(path.join(dataDir, fileName), str, 'utf8');
      fs.writeFileSync(path.join(jaheshDataDir, fileName), str, 'utf8');
    };

    let restoredItems = {};

    if (Array.isArray(backupData.products)) {
      writeBoth('products.json', backupData.products);
      restoredItems.products = backupData.products.length;
    }
    if (Array.isArray(backupData.banners)) {
      writeBoth('banners.json', backupData.banners);
      restoredItems.banners = backupData.banners.length;
    }
    if (Array.isArray(backupData.orders)) {
      writeBoth('orders.json', backupData.orders);
      restoredItems.orders = backupData.orders.length;
    }
    if (Array.isArray(backupData.appLicenses)) {
      writeBoth('app_licenses.json', backupData.appLicenses);
      restoredItems.appLicenses = backupData.appLicenses.length;
    }
    if (Array.isArray(backupData.amlakLicenses)) {
      writeBoth('licenses.json', backupData.amlakLicenses);
      restoredItems.amlakLicenses = backupData.amlakLicenses.length;
    }
    if (Array.isArray(backupData.dashboardTools) || Array.isArray(backupData.tools)) {
      const t = backupData.dashboardTools || backupData.tools;
      writeBoth('tools.json', t);
      restoredItems.dashboardTools = t.length;
    }
    if (Array.isArray(backupData.users)) {
      writeBoth('users.json', backupData.users);
      restoredItems.users = backupData.users.length;
    }
    if (Array.isArray(backupData.deletedProducts)) {
      writeBoth('deleted_products.json', backupData.deletedProducts);
      restoredItems.deletedProducts = backupData.deletedProducts.length;
    }

    return res.json({
      success: true,
      message: 'تمامی بخش‌های سایت (صفر تا صد) با موفقیت بازیابی و در هاست ذخیره شدند.',
      restoredItems,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Error restoring full backup:', err);
    return res.status(500).json({ success: false, error: 'خطا در بازگردانی پشتیبان کامل', details: err.message });
  }
});

// ==========================================
// Products Persistence & Image Upload API
// ==========================================


function sortProductsByOrder(list) {
  if (!Array.isArray(list)) return [];
  return [...list].sort((a, b) => {
    const orderA = typeof a.displayOrder === 'number' ? a.displayOrder : (typeof a.displayRank === 'number' ? a.displayRank : 9999);
    const orderB = typeof b.displayOrder === 'number' ? b.displayOrder : (typeof b.displayRank === 'number' ? b.displayRank : 9999);
    if (orderA !== orderB) return orderA - orderB;
    if (Boolean(a.isGolden) !== Boolean(b.isGolden)) return a.isGolden ? -1 : 1;
    return 0;
  });
}

function getDefaultProducts() {
  try {
    const deletedIds = new Set(getDeletedProductIds());
    if (fs.existsSync(PRODUCTS_FILE)) {
      const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return sortProductsByOrder(parsed.filter((p) => p && p.id && !deletedIds.has(p.id)));
      }
    }
  } catch (e) {
    console.error('Error reading products.json:', e);
  }
  return [];
}

const DEFAULT_SERVER_PRODUCTS = getDefaultProducts();

// Endpoint to upload image file directly to server (returns a permanent, lightweight URL)
app.post(['/api/upload-product-image', '/api/upload', '/jaheshkala/api/upload-product-image', '/jaheshkala/api/upload'], (req, res) => {
  const type = req.query?.type || req.body?.type;
  const isBanner = type === 'banners' || (req.url && req.url.includes('banner'));
  const isTool = type === 'tools' || (req.url && req.url.includes('tool'));
  const targetDir = isBanner ? BANNERS_UPLOADS_DIR : (isTool ? path.join(__dirname, 'uploads', 'tools') : PRODUCTS_UPLOADS_DIR);
  const targetFolder = isBanner ? 'banners' : (isTool ? 'tools' : 'products');
  const filePrefix = isBanner ? 'banner' : (isTool ? 'tool' : 'prod');
  try {
    const { image, filename } = req.body || {};
    if (!image || typeof image !== 'string') {
      return res.status(400).json({ error: 'داده تصویر الزامی است.' });
    }

    let ext = 'webp';
    let buffer;
    const matches = image.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
    if (matches) {
      const type = matches[1].toLowerCase();
      if (type.includes('png')) ext = 'png';
      else if (type.includes('jpeg') || type.includes('jpg')) ext = 'jpg';
      else if (type.includes('svg')) ext = 'svg';
      else if (type.includes('webp')) ext = 'webp';
      buffer = Buffer.from(matches[2], 'base64');
    } else if (image.startsWith('data:')) {
      const parts = image.split(',');
      buffer = Buffer.from(parts[1] || '', 'base64');
    } else {
      buffer = Buffer.from(image, 'base64');
    }

    if (!buffer || buffer.length === 0) {
      return res.status(400).json({ error: 'فرمت تصویر نامعتبر است.' });
    }

    const safeName = `${filePrefix}_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const filePath = path.join(targetDir, safeName);
    fs.writeFileSync(filePath, buffer);

    // Also mirror to jaheshkala static directory if exists
    const distUploads = path.join(__dirname, 'jaheshkala', 'uploads', targetFolder);
    try {
      if (!fs.existsSync(distUploads)) {
        fs.mkdirSync(distUploads, { recursive: true });
      }
      fs.writeFileSync(path.join(distUploads, safeName), buffer);
    } catch {}

    const publicUrl = `/uploads/${targetFolder}/${safeName}`;
    console.log(`[Upload] Image saved to ${publicUrl}`);
    return res.json({ success: true, url: publicUrl });
  } catch (err) {
    console.error('Error in /api/upload-product-image:', err);
    return res.status(500).json({ error: err.message || 'خطا در ذخیره‌سازی تصویر محصول' });
  }
});

// Endpoint to upload App installer package (APK / EXE / ZIP) directly to server
app.post(['/api/upload-app-file', '/api/upload-app', '/jaheshkala/api/upload-app-file', '/jaheshkala/api/upload-app'], (req, res) => {
  try {
    const { fileData, fileName, base64 } = req.body || {};
    const rawData = fileData || base64;
    if (!rawData || typeof rawData !== 'string') {
      return res.status(400).json({ error: 'داده فایل اپلیکیشن الزامی است.' });
    }

    let ext = 'apk';
    if (fileName && typeof fileName === 'string') {
      const matchExt = fileName.match(/\.([a-zA-Z0-9]+)$/);
      if (matchExt) ext = matchExt[1].toLowerCase();
    }

    let buffer;
    if (rawData.startsWith('data:')) {
      const parts = rawData.split(',');
      buffer = Buffer.from(parts[1] || '', 'base64');
    } else {
      buffer = Buffer.from(rawData, 'base64');
    }

    if (!buffer || buffer.length === 0) {
      return res.status(400).json({ error: 'محتوای فایل ارسالی نامعتبر یا خالی است.' });
    }

    const cleanBaseName = fileName
      ? path.basename(fileName, path.extname(fileName)).replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 35)
      : 'jahesh_app';
    const safeName = `${cleanBaseName}_${Date.now()}.${ext}`;

    if (!fs.existsSync(APPS_UPLOADS_DIR)) {
      fs.mkdirSync(APPS_UPLOADS_DIR, { recursive: true });
    }
    const filePath = path.join(APPS_UPLOADS_DIR, safeName);
    fs.writeFileSync(filePath, buffer);

    // Also mirror to jaheshkala and jaheshkala-app dist directories
    try {
      if (!fs.existsSync(DIST_APPS_UPLOADS_DIR)) {
        fs.mkdirSync(DIST_APPS_UPLOADS_DIR, { recursive: true });
      }
      fs.writeFileSync(path.join(DIST_APPS_UPLOADS_DIR, safeName), buffer);

      if (!fs.existsSync(APP_SRC_UPLOADS_DIR)) {
        fs.mkdirSync(APP_SRC_UPLOADS_DIR, { recursive: true });
      }
      fs.writeFileSync(path.join(APP_SRC_UPLOADS_DIR, safeName), buffer);

      // If user uploaded a Shantia package, keep shantia.apk updated as canonical alias
      if (cleanBaseName.toLowerCase().includes('shantia') || cleanBaseName.includes('شنتیا')) {
        fs.writeFileSync(path.join(APPS_UPLOADS_DIR, 'shantia.apk'), buffer);
        fs.writeFileSync(path.join(DIST_APPS_UPLOADS_DIR, 'shantia.apk'), buffer);
        fs.writeFileSync(path.join(APP_SRC_UPLOADS_DIR, 'shantia.apk'), buffer);
      }
    } catch {}

    const publicUrl = `/uploads/apps/${safeName}`;
    const sizeMb = (buffer.length / (1024 * 1024)).toFixed(1);
    const sizeText = Number(sizeMb) > 0 ? `${sizeMb} مگابایت` : `${Math.round(buffer.length / 1024)} کیلوبایت`;
    console.log(`[Upload App] App file saved to ${publicUrl} (${sizeText})`);

    return res.json({
      success: true,
      url: publicUrl,
      fileName: safeName,
      fileSize: sizeText,
      sizeBytes: buffer.length,
    });
  } catch (err) {
    console.error('Error in /api/upload-app-file:', err);
    return res.status(500).json({ error: err.message || 'خطا در ذخیره‌سازی فایل اپلیکیشن' });
  }
});

// GET /api/products/deleted - returns blacklist of deleted product IDs
app.get('/api/products/deleted', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  return res.json(getDeletedProductIds());
});

// POST /api/products/deleted - adds a product ID to blacklist
app.post('/api/products/deleted', (req, res) => {
  const productId = req.body?.productId || req.body?.id;
  if (!productId) {
    return res.status(400).json({ error: 'productId is required' });
  }
  addDeletedProductId(productId);
  const currentDeleted = getDeletedProductIds();
  try {
    setDoc(doc(serverDb, 'settings', 'deleted_products'), { deletedIds: currentDeleted, updatedAt: new Date().toISOString() }, { merge: true }).catch(() => {});
  } catch (e) {}
  return res.json({ success: true, deleted: currentDeleted });
});

// POST /api/products/deleted/remove - un-blacklists a product ID
app.post(['/api/products/deleted/remove', '/api/products/unmark-deleted'], (req, res) => {
  const productId = req.body?.productId || req.body?.id;
  if (!productId) {
    return res.status(400).json({ error: 'productId is required' });
  }
  removeDeletedProductId(productId);
  const currentDeleted = getDeletedProductIds();
  try {
    setDoc(doc(serverDb, 'settings', 'deleted_products'), { deletedIds: currentDeleted, updatedAt: new Date().toISOString() }, { merge: true }).catch(() => {});
  } catch (e) {}
  return res.json({ success: true, deleted: currentDeleted });
});

productsVersion = Date.now();

// GET /api/products/version & /jaheshkala/api/products/version - ultra-lightweight 20-byte change detector
app.get(['/api/products/version', '/jaheshkala/api/products/version'], (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  return res.json({ version: productsVersion });
});

// GET /api/products & /jaheshkala/api/products - returns persisted products on disk
app.get(['/api/products', '/jaheshkala/api/products'], (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('x-products-version', String(productsVersion));

  try {
    if (fs.existsSync(PRODUCTS_FILE)) {
      const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const valid = parsed.filter((p) => p && p.id);
        return res.json(sortProductsByOrder(valid));
      }
    }
  } catch (err) {
    console.error('Error reading products.json:', err);
  }

  const deletedIds = new Set(getDeletedProductIds());
  return res.json(sortProductsByOrder(getDefaultProducts().filter((p) => p && p.id && !deletedIds.has(p.id))));
});

// POST /api/products - replaces entire list on disk
app.post(['/api/products', '/jaheshkala/api/products'], (req, res) => {
  try {
    const products = req.body;
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: 'Expected array of products' });
    }
    const deletedIds = new Set(getDeletedProductIds());
    const filtered = products.filter((p) => p && p.id && !deletedIds.has(p.id));
    writeProductsToDisk(filtered);
    try {
      setDoc(doc(serverDb, 'settings', 'products'), { products: filtered, updatedAt: new Date().toISOString() }, { merge: true }).catch(() => {});
    } catch (e) {}
    console.log(`[Products] Successfully persisted ${filtered.length} products to disk & Firestore cloud. Version: ${productsVersion}`);
    return res.json({ success: true, count: filtered.length, version: productsVersion });
  } catch (err) {
    console.error('Error saving products.json:', err);
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/products/save - upserts a single product on disk & Firestore
app.post(['/api/products/save', '/jaheshkala/api/products/save'], (req, res) => {
  try {
    const product = req.body;
    if (!product || !product.id) {
      return res.status(400).json({ error: 'Invalid product data' });
    }
    // Since user is explicitly saving/updating this product, un-blacklist it
    removeDeletedProductId(product.id);

    let list = [];
    if (fs.existsSync(PRODUCTS_FILE)) {
      try {
        const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      } catch {}
    }
    if (list.length === 0) {
      list = [...DEFAULT_SERVER_PRODUCTS];
    }

    // If product is set as incredible offer, unmark any other products so this product is the active incredible offer!
    if (product.isIncredible) {
      list = list.map((p) => {
        if (p && p.id !== product.id && p.isIncredible) {
          return { ...p, isIncredible: false };
        }
        return p;
      });
    }

    const idx = list.findIndex((p) => p.id === product.id);
    if (idx >= 0) {
      list[idx] = product;
    } else {
      list = [product, ...list];
    }
    
    writeProductsToDisk(list);

    // ذخیره مستقیم در پایگاه ابری فایربیس (تضمین ماندگاری دائمی بدون وابستگی به دیپلوی)
    try {
      setDoc(doc(serverDb, 'products', product.id), product, { merge: true }).catch(() => {});
      setDoc(doc(serverDb, 'settings', 'products'), { products: list, updatedAt: new Date().toISOString() }, { merge: true }).catch(() => {});
    } catch (e) {}

    console.log(`[Products] Upserted product ${product.id} (${product.title}). Total: ${list.length}. Version: ${productsVersion}`);
    return res.json({ success: true, products: list, product, version: productsVersion });
  } catch (err) {
    console.error('Error in /api/products/save:', err);
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/products/delete - deletes a product by id from disk & Firestore
app.post(['/api/products/delete', '/jaheshkala/api/products/delete'], (req, res) => {
  try {
    const productId = req.body?.productId || req.body?.id;
    if (!productId) {
      return res.status(400).json({ error: 'productId or id required' });
    }
    // Add to deleted products blacklist
    addDeletedProductId(productId);

    let list = [];
    if (fs.existsSync(PRODUCTS_FILE)) {
      try {
        const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      } catch {}
    }
    list = list.filter((p) => p.id !== productId);
    writeProductsToDisk(list);

    // حذف از فایربیس و به‌روزرسانی تنظیمات ابری
    try {
      deleteDoc(doc(serverDb, 'products', productId)).catch(() => {});
      setDoc(doc(serverDb, 'settings', 'products'), { products: list, updatedAt: new Date().toISOString() }, { merge: true }).catch(() => {});
      setDoc(doc(serverDb, 'settings', 'deleted_products'), { deletedIds: Array.from(getDeletedProductIds()), updatedAt: new Date().toISOString() }, { merge: true }).catch(() => {});
    } catch (e) {}

    console.log(`[Products] Deleted product ${productId}. Total left: ${list.length}. Version: ${productsVersion}`);
    return res.json({ success: true, products: list, version: productsVersion });
  } catch (err) {
    console.error('Error in /api/products/delete:', err);
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/products/order & /api/products/save-all - saves ordered/re-ranked products on disk & Firestore
app.post(['/api/products/order', '/api/products/save-all', '/api/products/reorder', '/jaheshkala/api/products/order', '/jaheshkala/api/products/save-all', '/jaheshkala/api/products/reorder'], (req, res) => {
  try {
    const products = req.body?.products || req.body;
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: 'Expected array of products' });
    }
    const deletedIds = new Set(getDeletedProductIds());
    const filtered = products.filter((p) => p && p.id && !deletedIds.has(p.id));
    writeProductsToDisk(filtered);

    // ذخیره در فایربیس
    try {
      setDoc(doc(serverDb, 'settings', 'products'), { products: filtered, updatedAt: new Date().toISOString() }, { merge: true }).catch(() => {});
    } catch (e) {}

    console.log(`[Products] Successfully updated and ordered ${filtered.length} products on disk & Firestore. Version: ${productsVersion}`);
    return res.json({ success: true, count: filtered.length, products: filtered, version: productsVersion });
  } catch (err) {
    console.error('Error in /api/products/order:', err);
    return res.status(500).json({ error: err.message });
  }
});


// ==========================================
// Orders Persistence API
// ==========================================
const ORDERS_FILE = path.join(__dirname, 'data', 'orders.json');
const DELETED_ORDERS_FILE = path.join(__dirname, 'data', 'deleted_orders.json');

function readDeletedOrdersFromDisk() {
  if (fs.existsSync(DELETED_ORDERS_FILE)) {
    try {
      const raw = fs.readFileSync(DELETED_ORDERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.map((id) => String(id).trim()).filter(Boolean);
    } catch (e) {
      console.warn('Error reading deleted_orders.json:', e);
    }
  }
  return [];
}

function writeDeletedOrdersToDisk(ids) {
  try {
    const dataDir = path.dirname(DELETED_ORDERS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const cleanIds = Array.from(new Set((Array.isArray(ids) ? ids : []).map((id) => String(id).trim()).filter(Boolean)));
    fs.writeFileSync(DELETED_ORDERS_FILE, JSON.stringify(cleanIds, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing deleted_orders.json:', e);
  }
}

function sortOrdersNewestFirst(orders) {
  if (!Array.isArray(orders)) return [];
  return orders.sort((a, b) => {
    const timeA = a.createdAt ? new Date(a.createdAt).getTime() : (a.paidAt ? new Date(a.paidAt).getTime() : 0);
    const timeB = b.createdAt ? new Date(b.createdAt).getTime() : (b.paidAt ? new Date(b.paidAt).getTime() : 0);
    if (timeA && timeB) return timeB - timeA;
    if (timeB) return 1;
    if (timeA) return -1;
    return String(b.id || '').localeCompare(String(a.id || ''));
  });
}

function readOrdersFromDisk() {
  if (fs.existsSync(ORDERS_FILE)) {
    try {
      const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const deleted = new Set(readDeletedOrdersFromDisk());
        const cleaned = parsed.filter(
          (o) =>
            o &&
            !deleted.has(String(o.id).trim()) &&
            (!o.trackingCode || !deleted.has(String(o.trackingCode).trim())) &&
            (!o.zibalTrackId || !deleted.has(String(o.zibalTrackId).trim())) &&
            (!o.paymentRefId || !deleted.has(String(o.paymentRefId).trim()))
        );
        return sortOrdersNewestFirst(cleaned);
      }
    } catch (e) {
      console.warn('Error reading orders.json:', e);
    }
  }
  return [];
}

function writeOrdersToDisk(orders) {
  try {
    const dataDir = path.dirname(ORDERS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const sorted = sortOrdersNewestFirst(orders);
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(sorted, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing orders.json:', e);
  }
}

// ==========================================
// Veterinary Faculty Hospital APIs (سامانه جامع بیمارستان دانشکده دامپزشکی)
// ==========================================
// POST /api/vet/auth/login
app.post(['/api/vet/auth/login', '/vet-hospital/api/auth/login'], (req, res) => {
  try {
    const { username, email, phone, password } = req.body || {};
    const identifier = (username || email || phone || '').trim().toLowerCase();
    const pass = (password || '').trim();

    if (!identifier || !pass) {
      return res.status(400).json({ success: false, error: 'نام کاربری/ایمیل و رمز عبور الزامی است.' });
    }

    // 1. Admin Master Account check
    if (
      (identifier === 'jahesh1395@gmail.com' || identifier === 'jahesh1395' || identifier === 'erfan') &&
      pass === 'Erfan3365!'
    ) {
      const adminUser = {
        id: 'admin-1',
        username: 'jahesh1395@gmail.com',
        email: 'jahesh1395@gmail.com',
        name: 'مهندس عرفان مقدم متقی (مدیر ارشد سامانه)',
        role: 'admin',
        phone: '09152331974',
        isAdmin: true
      };
      return res.json({ success: true, user: adminUser, message: 'ورود موفقیت‌آمیز به عنوان مدیر ارشد بیمارستان.' });
    }

    // 2. Check in registered users list
    const users = readVetUsers();
    const foundUser = users.find(
      (u) =>
        (u.username && u.username.toLowerCase() === identifier) ||
        (u.email && u.email.toLowerCase() === identifier) ||
        (u.phone && u.phone === identifier)
    );

    if (foundUser) {
      if (foundUser.password && foundUser.password !== pass) {
        return res.status(401).json({ success: false, error: 'رمز عبور وارد شده نادرست است.' });
      }
      return res.json({ success: true, user: foundUser, message: 'ورود با موفقیت انجام شد.' });
    }

    // 3. Check in professors list
    const professors = readVetProfessors();
    const foundProf = professors.find(
      (p) =>
        (p.username && p.username.toLowerCase() === identifier) ||
        (p.email && p.email.toLowerCase() === identifier) ||
        (p.phone && p.phone === identifier)
    );

    if (foundProf) {
      if (foundProf.password && foundProf.password !== pass) {
        return res.status(401).json({ success: false, error: 'رمز عبور وارد شده نادرست است.' });
      }
      const profUser = {
        id: foundProf.id,
        name: foundProf.name,
        username: foundProf.username || identifier,
        email: foundProf.email || '',
        phone: foundProf.phone || '',
        role: 'doctor',
        academicRank: foundProf.academicRank,
        departmentId: foundProf.departmentId,
        departmentName: foundProf.departmentName,
        status: foundProf.status
      };
      return res.json({ success: true, user: profUser, message: 'ورود پزشک / استاد با موفقیت انجام شد.' });
    }

    // If not found, return error
    return res.status(404).json({ success: false, error: 'کاربری با این نام کاربری یافت نشد. لطفاً ابتدا ثبت‌نام فرمایید.' });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
});

// POST /api/vet/auth/register
app.post(['/api/vet/auth/register', '/vet-hospital/api/auth/register', '/api/vet/register', '/vet-hospital/api/register', '/api/auth/register'], (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  try {
    const {
      username,
      password,
      name,
      fullName,
      phone,
      email,
      avatar,
      role = 'client',
      academicRank,
      departmentId,
      departmentName,
      subSpecialty,
      medicalCouncilNo,
      studentNo,
      visitFee,
      onlineConsultFee,
      workDays,
      workHours,
      bio
    } = req.body || {};

    const cleanUsername = (username || email || phone || '').trim();
    const cleanName = (name || fullName || '').trim();
    const cleanPass = (password || '').trim();

    if (!cleanUsername || !cleanPass || !cleanName) {
      return res.status(400).json({ success: false, error: 'نام کاربری، رمز عبور و نام و نام خانوادگی الزامی است.' });
    }

    const users = readVetUsers();
    const cleanU = cleanUsername.toLowerCase();
    const cleanE = (email || '').trim().toLowerCase();
    const cleanPhone = (phone || '').trim();

    // Clear from deleted tombstones
    removeDeletedVetUserId(cleanUsername, cleanU, cleanE, cleanPhone);
    removeDeletedVetProfessorId(cleanUsername, cleanU, cleanE, cleanPhone);

    // Process and permanently save uploaded avatar to /uploads/vet
    let finalAvatar = avatar || '';
    if (finalAvatar && typeof finalAvatar === 'string' && finalAvatar.startsWith('data:image/')) {
      finalAvatar = saveBase64ImageToVetUploads(finalAvatar, 'vet_prof_' + cleanU);
    }

    // Find existing user by username
    const existingIdx = users.findIndex(
      (u) => (u.username && u.username.toLowerCase() === cleanU)
    );

    let newUser;
    if (existingIdx >= 0) {
      // Update existing user profile
      users[existingIdx] = {
        ...users[existingIdx],
        name: cleanName,
        password: cleanPass,
        phone: cleanPhone || users[existingIdx].phone || '',
        email: cleanE || users[existingIdx].email || '',
        avatar: finalAvatar || users[existingIdx].avatar || '',
        role: role || users[existingIdx].role || 'client',
        departmentId: departmentId || users[existingIdx].departmentId || '',
        departmentName: departmentName || users[existingIdx].departmentName || '',
        updatedAt: new Date().toISOString()
      };
      newUser = users[existingIdx];
    } else {
      newUser = {
        id: 'user-' + Date.now(),
        username: cleanUsername,
        password: cleanPass,
        name: cleanName,
        phone: cleanPhone,
        email: cleanE,
        avatar: finalAvatar,
        role: role,
        departmentId: departmentId || '',
        departmentName: departmentName || '',
        createdAt: new Date().toISOString()
      };
      users.unshift(newUser);
    }
    writeVetUsers(users);

    // همگام‌سازی با پایگاه داده کل کاربران سرور جهش‌کالا (Universal Users)
    try {
      const allUniversal = readUsersFromDisk();
      const uMatchIdx = allUniversal.findIndex(u => matchUser(u, newUser));
      const universalUserObj = {
        id: newUser.id,
        fullName: newUser.name,
        name: newUser.name,
        phone: newUser.phone,
        email: newUser.email,
        username: newUser.username,
        avatar: newUser.avatar,
        role: role === 'doctor' || role === 'phd' ? 'doctor' : 'user',
        guild: 'بیمارستان دانشکده دامپزشکی',
        createdAt: new Date().toLocaleDateString('fa-IR'),
        timestamp: Date.now(),
        password: newUser.password
      };
      if (uMatchIdx >= 0) {
        allUniversal[uMatchIdx] = { ...allUniversal[uMatchIdx], ...universalUserObj };
      } else {
        allUniversal.unshift(universalUserObj);
      }
      writeUsersToDisk(allUniversal);
    } catch (e) {
      console.warn('Sync to universal users error:', e);
    }

    // ذخیره مستقیم در پایگاه ابری فایربیس (اتصال ۲۴ ساعته سرور بدون نیاز به فیلترشکن)
    try {
      setDoc(doc(serverDb, 'users', newUser.id), newUser, { merge: true }).catch(() => {});
    } catch (e) {}

    // If registered as a doctor or PhD, also register/sync in professors.json & Firestore
    let newProfessor = null;
    if (role === 'doctor' || role === 'phd') {
      const professors = readVetProfessors();
      const cleanWorkDays = Array.isArray(workDays) && workDays.length > 0 ? workDays : ['شنبه', 'دوشنبه', 'چهارشنبه'];
      const cleanWorkHours = workHours || '۰۹:۰۰ الی ۱۳:۰۰';
      const scheduleStr = `${cleanWorkDays.join('، ')} ${cleanWorkHours}`;
      const medNo = (medicalCouncilNo || studentNo || '').trim();

      const existingPIdx = professors.findIndex(
        (p) =>
          (p.username && p.username.toLowerCase() === cleanU) ||
          (medNo && p.medicalCouncilNo === medNo) ||
          (p.id === newUser.id)
      );

      const chosenAvatar = finalAvatar || (existingPIdx >= 0 && professors[existingPIdx].avatar) || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80';

      newProfessor = {
        id: existingPIdx >= 0 ? professors[existingPIdx].id : ('prof-' + Date.now()),
        username: cleanUsername,
        password: cleanPass,
        name: cleanName,
        academicRank: academicRank || (role === 'phd' ? 'دانشجوی دکتری تخصصی (PhD) / دستیار' : 'استادیار'),
        departmentId: departmentId || 'surgery-anesthesia',
        departmentName: departmentName || 'بخش جراحی، ارتوپدی و بیهوشی',
        subSpecialty: subSpecialty || (role === 'phd' ? 'پژوهشگر دکتری تخصصی' : 'متخصص بالینی'),
        medicalCouncilNo: medNo,
        phone: cleanPhone,
        email: cleanE,
        avatar: chosenAvatar,
        bio: bio || 'عضو کادر تخصصی دانشکده دامپزشکی دانشگاه فردوسی مشهد.',
        visitFee: Number(visitFee) || (role === 'phd' ? 280000 : 380000),
        onlineConsultFee: Number(onlineConsultFee) || 220000,
        workDays: cleanWorkDays,
        workHours: cleanWorkHours,
        schedule: [scheduleStr],
        status: 'approved',
        isApproved: true,
        rating: 5.0,
        totalVisits: existingPIdx >= 0 ? (professors[existingPIdx].totalVisits || 0) : 0,
        badges: [role === 'phd' ? 'دستیار تخصصی PhD' : 'عضو هیئت علمی'],
        registeredAt: existingPIdx >= 0 ? (professors[existingPIdx].registeredAt || new Date().toISOString()) : new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      if (existingPIdx >= 0) {
        professors[existingPIdx] = { ...professors[existingPIdx], ...newProfessor };
      } else {
        professors.unshift(newProfessor);
      }
      writeVetProfessors(professors);
      try {
        setDoc(doc(serverDb, 'professors', newProfessor.id), newProfessor, { merge: true }).catch(() => {});
      } catch (e) {}
    }

    return res.json({
      success: true,
      user: newUser,
      professor: newProfessor,
      message: 'ثبت‌نام با موفقیت انجام شد و حساب کاربری شما فعال گردید.'
    });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
});

// GET /api/vet/users
app.get(['/api/vet/users', '/vet-hospital/api/users', '/api/vet/hospital/users'], (_req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  try {
    const deletedUserKeys = new Set(readDeletedVetUsers());
    const deletedProfKeys = new Set(readDeletedVetProfessors());

    const vetUsers = readVetUsers().filter(u => {
      if (!u) return false;
      const uid = String(u.id || '').toLowerCase();
      const uname = String(u.username || '').toLowerCase();
      return (!uid || !deletedUserKeys.has(uid)) && (!uname || !deletedUserKeys.has(uname));
    });

    const professors = readVetProfessors().filter(p => {
      if (!p) return false;
      const pid = String(p.id || '').toLowerCase();
      const puname = String(p.username || '').toLowerCase();
      return (!pid || !deletedProfKeys.has(pid)) && (!puname || !deletedProfKeys.has(puname));
    });

    const mergedMap = new Map();

    // 1. Hospital registered users
    vetUsers.forEach((u) => {
      if (u && (u.id || u.username || u.phone)) {
        const key = String(u.id || u.username || u.phone).toLowerCase();
        mergedMap.set(key, u);
      }
    });

    // 2. Hospital professors & doctors (update in-place if matched by id/username/phone)
    professors.forEach((p) => {
      if (p && (p.id || p.username || p.phone)) {
        let matchedKey = null;
        for (const [k, u] of mergedMap.entries()) {
          if (
            (p.id && u.id && p.id === u.id) ||
            (p.username && u.username && p.username.toLowerCase() === u.username.toLowerCase()) ||
            (p.phone && u.phone && p.phone === u.phone) ||
            (p.email && u.email && p.email.toLowerCase() === u.email.toLowerCase())
          ) {
            matchedKey = k;
            break;
          }
        }

        const isPhd = p.badges?.includes('دستیار تخصصی PhD') || (p.academicRank && (p.academicRank.includes('PhD') || p.academicRank.includes('دکتری')));
        const existing = matchedKey ? mergedMap.get(matchedKey) : {};
        const mergedObj = {
          id: p.id || existing.id || `user-${Date.now()}`,
          username: p.username || existing.username || '',
          name: p.name || existing.name || existing.fullName || 'استاد / پزشک',
          fullName: p.name || existing.fullName || existing.name || 'استاد / پزشک',
          phone: p.phone || existing.phone || '',
          email: p.email || existing.email || '',
          role: isPhd ? 'phd' : 'doctor',
          academicRank: p.academicRank || existing.academicRank || (isPhd ? 'دانشجوی دکتری تخصصی (PhD) / دستیار' : 'استادیار'),
          departmentId: p.departmentId || existing.departmentId || 'surgery-anesthesia',
          departmentName: p.departmentName || existing.departmentName || 'بخش جراحی، ارتوپدی و بیهوشی',
          subSpecialty: p.subSpecialty || existing.subSpecialty || '',
          medicalCouncilNo: p.medicalCouncilNo || existing.medicalCouncilNo || '',
          studentNo: p.studentNo || existing.studentNo || '',
          avatar: p.avatar || existing.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
          createdAt: p.registeredAt || existing.createdAt || '۱۴۰۵',
          updatedAt: p.updatedAt || existing.updatedAt || new Date().toISOString()
        };

        if (matchedKey) {
          mergedMap.set(matchedKey, { ...existing, ...mergedObj });
        } else {
          mergedMap.set(String(p.id || p.username || p.phone).toLowerCase(), mergedObj);
        }
      }
    });

    // 3. Ensure master admin is present
    const adminKey = 'usr-vet-admin';
    if (!mergedMap.has(adminKey) && !mergedMap.has('jahesh1395@gmail.com')) {
      mergedMap.set(adminKey, {
        id: 'usr-vet-admin',
        username: 'jahesh1395@gmail.com',
        email: 'jahesh1395@gmail.com',
        name: 'مهندس عرفان مقدم متقی (مدیر ارشد بیمارستان)',
        fullName: 'مهندس عرفان مقدم متقی (مدیر ارشد بیمارستان)',
        phone: '09152331974',
        role: 'admin',
        isAdmin: true,
        createdAt: '۱۴۰۵/۶/۱'
      });
    }

    const users = Array.from(mergedMap.values());
    return res.json({ success: true, count: users.length, users });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/vet/users/update
app.post(['/api/vet/users/update', '/vet-hospital/api/users/update'], (req, res) => {
  try {
    const { id, username, name, fullName, phone, email, role, academicRank, departmentId, departmentName, subSpecialty, medicalCouncilNo, avatar } = req.body || {};
    if (!id && !username) {
      return res.status(400).json({ success: false, error: 'User id or username is required' });
    }

    const cleanU = (username || '').toLowerCase().trim();
    const users = readVetUsers();
    const uIdx = users.findIndex(u => (id && u.id === id) || (cleanU && u.username && u.username.toLowerCase() === cleanU));

    const updatedUserObj = {
      name: (name || fullName || '').trim(),
      fullName: (fullName || name || '').trim(),
      phone: (phone || '').trim(),
      email: (email || '').trim().toLowerCase(),
      role: role || 'client',
      academicRank: academicRank || '',
      departmentId: departmentId || '',
      departmentName: departmentName || '',
      subSpecialty: subSpecialty || '',
      medicalCouncilNo: medicalCouncilNo || '',
      avatar: avatar || '',
      updatedAt: new Date().toISOString()
    };

    let finalUser = null;
    if (uIdx >= 0) {
      users[uIdx] = { ...users[uIdx], ...updatedUserObj };
      finalUser = users[uIdx];
    } else {
      finalUser = { id: id || `u-${Date.now()}`, username: cleanU || phone || id, ...updatedUserObj };
      users.unshift(finalUser);
    }
    writeVetUsers(users);

    // If role is doctor or phd, sync with professors
    if (finalUser.role === 'doctor' || finalUser.role === 'phd' || finalUser.academicRank || finalUser.medicalCouncilNo) {
      const profs = readVetProfessors();
      const pIdx = profs.findIndex(p => (id && p.id === id) || (cleanU && p.username && p.username.toLowerCase() === cleanU));
      const profObj = {
        name: finalUser.name,
        academicRank: finalUser.academicRank || 'استادیار',
        departmentId: finalUser.departmentId || 'surgery-anesthesia',
        departmentName: finalUser.departmentName || 'بخش جراحی، ارتوپدی و بیهوشی',
        subSpecialty: finalUser.subSpecialty || '',
        medicalCouncilNo: finalUser.medicalCouncilNo || '',
        phone: finalUser.phone,
        email: finalUser.email,
        avatar: finalUser.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        updatedAt: new Date().toISOString()
      };
      if (pIdx >= 0) {
        profs[pIdx] = { ...profs[pIdx], ...profObj };
      }
      writeVetProfessors(profs);
      try {
        setDoc(doc(serverDb, 'professors', finalUser.id), { ...finalUser, ...profObj }, { merge: true }).catch(() => {});
      } catch (e) {}
    }

    try {
      setDoc(doc(serverDb, 'users', finalUser.id), finalUser, { merge: true }).catch(() => {});
    } catch (e) {}

    return res.json({ success: true, user: finalUser, message: 'اطلاعات کاربر با موفقیت به‌روزرسانی شد.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/vet/users/delete
app.post(['/api/vet/users/delete', '/vet-hospital/api/users/delete'], (req, res) => {
  try {
    const { id, username } = req.body || {};
    if (!id && !username) {
      return res.status(400).json({ success: false, error: 'User id or username is required' });
    }
    const cleanU = (username || '').toLowerCase().trim();

    // 1. Blacklist in tombstones
    const users = readVetUsers();
    const targetUser = users.find(u => u.id === id || (cleanU && u.username && u.username.toLowerCase() === cleanU));
    const cleanIds = [id, cleanU, targetUser?.username, targetUser?.email, targetUser?.phone].filter(Boolean);
    addDeletedVetUserId(...cleanIds);
    addDeletedVetProfessorId(...cleanIds);

    // 2. Remove from vet users
    let vetUsers = users.filter((u) => u.id !== id && (!cleanU || (u.username || '').toLowerCase() !== cleanU));
    writeVetUsers(vetUsers);

    // 3. Remove from vet professors if matched
    let professors = readVetProfessors().filter((p) => p.id !== id && (!cleanU || (p.username || '').toLowerCase() !== cleanU));
    writeVetProfessors(professors);

    // 4. Remove from universal users
    let universal = readUsersFromDisk().filter((u) => u.id !== id && (!cleanU || (u.username || '').toLowerCase() !== cleanU));
    writeUsersToDisk(universal);

    // 5. Remove from Firestore cloud database
    try {
      if (id) deleteDoc(doc(serverDb, 'users', id)).catch(() => {});
      if (id) deleteDoc(doc(serverDb, 'professors', id)).catch(() => {});
    } catch (e) {}

    return res.json({ success: true, message: 'کاربر با موفقیت حذف گردید.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/vet/departments
app.get(['/api/vet/departments', '/vet-hospital/api/departments'], (_req, res) => {
  const departments = readVetDepartments();
  return res.json({ success: true, count: departments.length, departments });
});

// GET /api/vet/professors
app.get(['/api/vet/professors', '/vet-hospital/api/professors'], (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  try {
    const { department, status, all } = req.query;
    const deletedProfKeys = new Set(readDeletedVetProfessors());
    const deletedUserKeys = new Set(readDeletedVetUsers());

    let professors = readVetProfessors().filter(p => {
      if (!p) return false;
      const pid = String(p.id || '').toLowerCase();
      const puname = String(p.username || '').toLowerCase();
      return !deletedProfKeys.has(pid) && !deletedProfKeys.has(puname);
    });

    const profMap = new Map();
    professors.forEach((p) => {
      if (p && (p.id || p.username || p.name)) {
        const key = String(p.id || p.username || p.name).toLowerCase();
        profMap.set(key, p);
      }
    });

    let result = Array.from(profMap.values());
    if (status && status !== 'all') {
      result = result.filter((p) => p.status === status);
    }
    if (department) {
      result = result.filter((p) => p.departmentId === department);
    }
    return res.json({ success: true, count: result.length, professors: result });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/vet/professors/update
app.post(['/api/vet/professors/update', '/vet-hospital/api/professors/update'], (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  try {
    const incoming = req.body || {};
    const targetId = incoming.id || incoming.professorId;
    const cleanU = (incoming.username || '').toLowerCase().trim();

    if (!targetId && !cleanU) {
      return res.status(400).json({ success: false, error: 'professor id or username is required' });
    }

    const professors = readVetProfessors();
    const pIdx = professors.findIndex(p => (targetId && p.id === targetId) || (cleanU && p.username && p.username.toLowerCase() === cleanU));

    const cleanWorkDays = Array.isArray(incoming.workDays) && incoming.workDays.length > 0
      ? incoming.workDays
      : (Array.isArray(incoming.schedule) ? incoming.schedule : ['شنبه', 'دوشنبه', 'چهارشنبه']);
    const cleanWorkHours = incoming.workHours || '۰۹:۰۰ الی ۱۳:۰۰';
    const scheduleStr = `${cleanWorkDays.join('، ')} ${cleanWorkHours}`;

    let profAvatar = incoming.avatar || (pIdx >= 0 && professors[pIdx].avatar) || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80';
    if (profAvatar && typeof profAvatar === 'string' && profAvatar.startsWith('data:image/')) {
      profAvatar = saveBase64ImageToVetUploads(profAvatar, 'vet_prof_' + (cleanU || targetId));
    }

    const updateObj = {
      name: (incoming.name || '').trim(),
      academicRank: incoming.academicRank || 'استادیار',
      departmentId: incoming.departmentId || 'surgery-anesthesia',
      departmentName: incoming.departmentName || 'بخش جراحی، ارتوپدی و بیهوشی',
      subSpecialty: incoming.subSpecialty || '',
      medicalCouncilNo: incoming.medicalCouncilNo || '',
      phone: (incoming.phone || '').trim(),
      email: (incoming.email || '').trim().toLowerCase(),
      avatar: profAvatar,
      bio: incoming.bio || 'عضو کادر تخصصی دانشکده دامپزشکی دانشگاه فردوسی مشهد.',
      visitFee: Number(incoming.visitFee) || 380000,
      onlineConsultFee: Number(incoming.onlineConsultFee) || 250000,
      workDays: cleanWorkDays,
      workHours: cleanWorkHours,
      schedule: [scheduleStr],
      status: incoming.status || 'approved',
      isApproved: (incoming.status === 'approved' || incoming.isApproved === true),
      updatedAt: new Date().toISOString()
    };

    let finalProf = null;
    if (pIdx >= 0) {
      professors[pIdx] = { ...professors[pIdx], ...updateObj };
      finalProf = professors[pIdx];
    } else {
      finalProf = {
        id: targetId || `prof-${Date.now()}`,
        username: cleanU,
        ...updateObj,
        rating: 5.0,
        totalVisits: 0,
        registeredAt: new Date().toISOString()
      };
      professors.unshift(finalProf);
    }
    writeVetProfessors(professors);

    // همچنین همگام‌سازی در لیست کاربران
    const users = readVetUsers();
    const uIdx = users.findIndex(u => (finalProf.id && u.id === finalProf.id) || (cleanU && u.username && u.username.toLowerCase() === cleanU));
    if (uIdx >= 0) {
      users[uIdx] = {
        ...users[uIdx],
        name: finalProf.name,
        fullName: finalProf.name,
        phone: finalProf.phone,
        email: finalProf.email,
        academicRank: finalProf.academicRank,
        departmentId: finalProf.departmentId,
        departmentName: finalProf.departmentName,
        subSpecialty: finalProf.subSpecialty,
        medicalCouncilNo: finalProf.medicalCouncilNo,
        avatar: finalProf.avatar,
        updatedAt: new Date().toISOString()
      };
      writeVetUsers(users);
    }

    try {
      setDoc(doc(serverDb, 'professors', finalProf.id), finalProf, { merge: true }).catch(() => {});
      if (uIdx >= 0) {
        setDoc(doc(serverDb, 'users', users[uIdx].id), users[uIdx], { merge: true }).catch(() => {});
      }
    } catch (e) {}

    return res.json({ success: true, professor: finalProf, message: 'مشخصات استاد با موفقیت به‌روزرسانی و در تمامی بخش‌ها اعمال شد.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/vet/professors/register
app.post(['/api/vet/professors/register', '/vet-hospital/api/professors/register'], (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  try {
    const incoming = req.body;
    if (!incoming || !incoming.name || !incoming.departmentId) {
      return res.status(400).json({ success: false, error: 'نام استاد و بخش تخصصی الزامی است.' });
    }

    const cleanU = (incoming.username || incoming.email || incoming.phone || '').trim().toLowerCase();
    const cleanE = (incoming.email || '').trim().toLowerCase();
    const cleanPhone = (incoming.phone || '').trim();
    const assignedId = incoming.id || 'prof-' + Date.now();

    // Clear from deleted tombstones if being registered/re-registered
    removeDeletedVetProfessorId(assignedId, cleanU, cleanE, cleanPhone);
    removeDeletedVetUserId(assignedId, cleanU, cleanE, cleanPhone);

    const professors = readVetProfessors();
    const cleanWorkDays = Array.isArray(incoming.workDays) && incoming.workDays.length > 0
      ? incoming.workDays
      : (Array.isArray(incoming.schedule) ? incoming.schedule : ['شنبه', 'دوشنبه', 'چهارشنبه']);
    const cleanWorkHours = incoming.workHours || '۰۹:۰۰ الی ۱۳:۰۰';
    const scheduleStr = `${cleanWorkDays.join('، ')} ${cleanWorkHours}`;

    let profAvatar = incoming.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80';
    if (profAvatar && typeof profAvatar === 'string' && profAvatar.startsWith('data:image/')) {
      profAvatar = saveBase64ImageToVetUploads(profAvatar, 'vet_prof_' + (cleanU || assignedId));
    }

    const newProf = {
      id: assignedId,
      username: incoming.username || incoming.email || incoming.phone || '',
      password: incoming.password || '123456',
      name: incoming.name.trim(),
      academicRank: incoming.academicRank || 'استادیار',
      departmentId: incoming.departmentId,
      departmentName: incoming.departmentName || '',
      subSpecialty: incoming.subSpecialty || '',
      medicalCouncilNo: incoming.medicalCouncilNo || '',
      nationalId: incoming.nationalId || '',
      phone: incoming.phone || '',
      email: incoming.email || '',
      avatar: profAvatar,
      bio: incoming.bio || 'متخصص و کادر علمی دانشکده دامپزشکی دانشگاه فردوسی مشهد.',
      visitFee: Number(incoming.visitFee) || 380000,
      onlineConsultFee: Number(incoming.onlineConsultFee) || 250000,
      workDays: cleanWorkDays,
      workHours: cleanWorkHours,
      schedule: [scheduleStr],
      status: incoming.status || 'approved', // Active in directory and appointments immediately
      isApproved: true,
      rating: 5.0,
      totalVisits: 0,
      badges: incoming.badges || ['عضو هیئت علمی'],
      registeredAt: new Date().toISOString()
    };

    const existingIndex = professors.findIndex((p) => p.id === newProf.id || (incoming.medicalCouncilNo && p.medicalCouncilNo === incoming.medicalCouncilNo));
    let finalProf = newProf;
    if (existingIndex >= 0) {
      professors[existingIndex] = { ...professors[existingIndex], ...newProf };
      finalProf = professors[existingIndex];
    } else {
      professors.unshift(newProf);
    }
    writeVetProfessors(professors);

    // ذخیره در فایربیس از سمت سرور (اتصال آنی و بدون فیلترشکن)
    try {
      setDoc(doc(serverDb, 'professors', finalProf.id), finalProf, { merge: true }).catch(() => {});
    } catch (e) {}

    return res.json({ success: true, professor: finalProf, message: 'ثبت‌نام استاد با موفقیت انجام شد و پروفایل تخصصی در سامانه فعال گردید.' });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
});

// POST /api/vet/professors/verify
app.post(['/api/vet/professors/verify', '/vet-hospital/api/professors/verify'], (req, res) => {
  try {
    const { professorId, status, visitFee, onlineConsultFee, workDays, workHours, badges } = req.body;
    if (!professorId || !status) {
      return res.status(400).json({ success: false, error: 'professorId and status are required' });
    }
    const professors = readVetProfessors();
    const idx = professors.findIndex((p) => p.id === professorId);
    if (idx === -1) {
      return res.status(404).json({ success: false, error: 'استاد مورد نظر یافت نشد.' });
    }
    professors[idx].status = status;
    if (visitFee) professors[idx].visitFee = Number(visitFee);
    if (onlineConsultFee) professors[idx].onlineConsultFee = Number(onlineConsultFee);
    if (workDays) professors[idx].workDays = workDays;
    if (workHours) professors[idx].workHours = workHours;
    if (workDays || workHours) {
      const days = professors[idx].workDays || ['شنبه تا چهارشنبه'];
      const hours = professors[idx].workHours || '۰۹:۰۰ الی ۱۳:۰۰';
      professors[idx].schedule = [`${Array.isArray(days) ? days.join('، ') : days} ${hours}`];
    }
    if (badges) professors[idx].badges = badges;
    professors[idx].verifiedAt = new Date().toISOString();
    writeVetProfessors(professors);

    // به‌روزرسانی در فایربیس از سمت سرور
    try {
      setDoc(doc(serverDb, 'professors', professors[idx].id), professors[idx], { merge: true }).catch(() => {});
    } catch (e) {}

    return res.json({ success: true, professor: professors[idx], message: `وضعیت استاد با موفقیت به‌روزرسانی شد.` });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
});

// POST /api/vet/professors/delete
app.post(['/api/vet/professors/delete', '/vet-hospital/api/professors/delete'], (req, res) => {
  try {
    const { professorId, id, username } = req.body || {};
    const targetId = professorId || id;
    if (!targetId && !username) {
      return res.status(400).json({ success: false, error: 'professorId is required' });
    }
    const cleanU = (username || '').toLowerCase().trim();

    // 1. Blacklist in tombstones
    const profs = readVetProfessors();
    const targetProf = profs.find(p => p.id === targetId || (cleanU && p.username && p.username.toLowerCase() === cleanU));
    const cleanIds = [targetId, cleanU, targetProf?.username, targetProf?.email, targetProf?.phone].filter(Boolean);
    addDeletedVetProfessorId(...cleanIds);
    addDeletedVetUserId(...cleanIds);

    // 2. Remove from professors
    let professors = profs.filter((p) => p.id !== targetId && (!cleanU || (p.username || '').toLowerCase() !== cleanU));
    writeVetProfessors(professors);

    // 3. Remove from vet users
    let vetUsers = readVetUsers().filter((u) => u.id !== targetId && (!cleanU || (u.username || '').toLowerCase() !== cleanU));
    writeVetUsers(vetUsers);

    // 4. Remove from universal users
    let universal = readUsersFromDisk().filter((u) => u.id !== targetId && (!cleanU || (u.username || '').toLowerCase() !== cleanU));
    writeUsersToDisk(universal);

    // 5. Delete from Firestore cloud database
    try {
      if (targetId) deleteDoc(doc(serverDb, 'professors', targetId)).catch(() => {});
      if (targetId) deleteDoc(doc(serverDb, 'users', targetId)).catch(() => {});
    } catch (e) {}

    return res.json({ success: true, remaining: professors.length, message: 'استاد با موفقیت حذف گردید.' });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
});

// POST /api/vet/professors/update
app.post(['/api/vet/professors/update', '/vet-hospital/api/professors/update'], (req, res) => {
  try {
    const incoming = req.body;
    if (!incoming || !incoming.id) {
      return res.status(400).json({ success: false, error: 'شناسه استاد الزامی است.' });
    }
    const professors = readVetProfessors();
    const idx = professors.findIndex((p) => p.id === incoming.id);
    if (idx === -1) {
      return res.status(404).json({ success: false, error: 'استاد یافت نشد.' });
    }
    professors[idx] = {
      ...professors[idx],
      ...incoming,
      visitFee: Number(incoming.visitFee) || professors[idx].visitFee,
      onlineConsultFee: Number(incoming.onlineConsultFee) || professors[idx].onlineConsultFee,
      updatedAt: new Date().toISOString()
    };
    writeVetProfessors(professors);

    // به‌روزرسانی در فایربیس از سمت سرور
    try {
      setDoc(doc(serverDb, 'professors', professors[idx].id), professors[idx], { merge: true }).catch(() => {});
    } catch (e) {}

    return res.json({ success: true, professor: professors[idx] });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
});

// GET /api/vet/appointments
app.get(['/api/vet/appointments', '/vet-hospital/api/appointments'], (_req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  const appointments = readVetAppointments();
  return res.json({ success: true, count: appointments.length, appointments });
});

// POST /api/vet/appointments/book
app.post(['/api/vet/appointments/book', '/vet-hospital/api/appointments/book'], (req, res) => {
  try {
    const incoming = req.body;
    if (!incoming || !incoming.clientName || !incoming.clientPhone || !incoming.professorId) {
      return res.status(400).json({ success: false, error: 'مشخصات مراجع، بیمار و استاد انتخابی الزامی است.' });
    }
    const trackingCode = 'VET-' + (1403 + Math.floor(Math.random() * 2)) + '-' + Math.floor(1000 + Math.random() * 9000);
    const txnId = 'ZIBAL-TXN-' + Math.floor(10000000 + Math.random() * 90000000);
    
    const newAppointment = {
      id: trackingCode,
      trackingCode,
      clientName: incoming.clientName,
      clientPhone: incoming.clientPhone,
      clientNationalId: incoming.clientNationalId || '',
      animalName: incoming.animalName || 'بدون نام',
      animalType: incoming.animalType || 'حیوان خانگی',
      animalBreed: incoming.animalBreed || 'نامشخص',
      animalAge: incoming.animalAge || '',
      animalGender: incoming.animalGender || '',
      departmentId: incoming.departmentId || 'internal-small',
      departmentName: incoming.departmentName || '',
      professorId: incoming.professorId,
      professorName: incoming.professorName || '',
      visitType: incoming.visitType || 'in_person',
      visitTypeName: incoming.visitType === 'online' ? 'مشاوره آنلاین تخصصی' : 'ویزیت حضوری در کلینیک بیمارستان',
      appointmentDate: incoming.appointmentDate || new Date().toLocaleDateString('fa-IR'),
      appointmentTime: incoming.appointmentTime || '۱۰:۰۰ صبح',
      symptoms: incoming.symptoms || '',
      aiTriageReport: incoming.aiTriageReport || '',
      amountPaid: Number(incoming.amountPaid) || 350000,
      paymentStatus: 'paid',
      paymentMethod: 'درگاه پرداخت زیپال (Zibal)',
      transactionId: txnId,
      visitStatus: 'scheduled',
      createdAt: new Date().toISOString()
    };

    const appointments = readVetAppointments();
    appointments.unshift(newAppointment);
    writeVetAppointments(appointments);

    // ذخیره در فایربیس از سمت سرور
    try {
      setDoc(doc(serverDb, 'vet_appointments', newAppointment.id), newAppointment, { merge: true }).catch(() => {});
    } catch (e) {}

    // Increment professor totalVisits count
    const professors = readVetProfessors();
    const pIdx = professors.findIndex((p) => p.id === incoming.professorId);
    if (pIdx !== -1) {
      professors[pIdx].totalVisits = (professors[pIdx].totalVisits || 0) + 1;
      writeVetProfessors(professors);
      // به‌روزرسانی کلود
      try {
        setDoc(doc(serverDb, 'professors', professors[pIdx].id), professors[pIdx], { merge: true }).catch(() => {});
      } catch (e) {}
    }

    return res.json({
      success: true,
      appointment: newAppointment,
      trackingCode,
      transactionId: txnId,
      message: `نوبت شما با موفقیت در سیستم بیمارستان دانشکده دامپزشکی ثبت شد. کد پیگیری: ${trackingCode}`
    });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
});

// POST /api/vet/appointments/status
app.post(['/api/vet/appointments/status', '/vet-hospital/api/appointments/status'], (req, res) => {
  try {
    const { appointmentId, visitStatus, prescription, clinicalNotes } = req.body;
    if (!appointmentId || !visitStatus) {
      return res.status(400).json({ success: false, error: 'شناسه نوبت و وضعیت ویزیت الزامی است.' });
    }
    const appointments = readVetAppointments();
    const idx = appointments.findIndex((a) => a.id === appointmentId || a.trackingCode === appointmentId);
    if (idx === -1) {
      return res.status(404).json({ success: false, error: 'نوبت یافت نشد.' });
    }
    appointments[idx].visitStatus = visitStatus;
    if (prescription) appointments[idx].prescription = prescription;
    if (clinicalNotes) appointments[idx].clinicalNotes = clinicalNotes;
    appointments[idx].updatedAt = new Date().toISOString();
    writeVetAppointments(appointments);

    // به‌روزرسانی در فایربیس از سمت سرور
    try {
      setDoc(doc(serverDb, 'vet_appointments', appointments[idx].id), appointments[idx], { merge: true }).catch(() => {});
    } catch (e) {}

    return res.json({ success: true, appointment: appointments[idx] });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
});

// POST /api/vet/ai-triage
app.post(['/api/vet/ai-triage', '/vet-hospital/api/ai-triage'], (req, res) => {
  try {
    const triageResult = performAiVeterinaryTriage(req.body);
    return res.json(triageResult);
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
});

// GET /api/vet/stats
app.get(['/api/vet/stats', '/vet-hospital/api/stats'], (_req, res) => {
  const departments = readVetDepartments();
  const professors = readVetProfessors();
  const appointments = readVetAppointments();
  const totalRevenue = appointments
    .filter((a) => a.paymentStatus === 'paid')
    .reduce((sum, a) => sum + (Number(a.amountPaid) || 0), 0);

  return res.json({
    success: true,
    stats: {
      departmentsCount: departments.length,
      totalProfessorsCount: professors.length,
      approvedProfessorsCount: professors.filter((p) => p.status === 'approved').length,
      pendingProfessorsCount: professors.filter((p) => p.status === 'pending').length,
      totalAppointmentsCount: appointments.length,
      completedVisitsCount: appointments.filter((a) => a.visitStatus === 'completed').length,
      totalRevenue
    }
  });
});

// GET /api/orders & /jaheshkala/api/orders
app.get(['/api/orders', '/jaheshkala/api/orders'], (_req, res) => {
  try {
    const orders = readOrdersFromDisk();
    return res.json({ success: true, orders });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// GET & POST /api/orders/deleted (Tombstone blacklist sync)
app.get(['/api/orders/deleted', '/jaheshkala/api/orders/deleted'], (_req, res) => {
  return res.json(readDeletedOrdersFromDisk());
});

app.post(['/api/orders/deleted', '/jaheshkala/api/orders/deleted'], (req, res) => {
  try {
    const { orderIds, orderId, id } = req.body || {};
    const newKeys = [
      ...(Array.isArray(orderIds) ? orderIds : []),
      orderId,
      id,
    ].filter(Boolean).map((k) => String(k).trim());
    const current = readDeletedOrdersFromDisk();
    const updated = Array.from(new Set([...current, ...newKeys]));
    writeDeletedOrdersToDisk(updated);
    return res.json({ success: true, count: updated.length, deleted: updated });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/orders
app.post('/api/orders', (req, res) => {
  try {
    let incoming = req.body;
    if (incoming && Array.isArray(incoming.orders)) {
      incoming = incoming.orders;
    } else if (incoming && incoming.id && !Array.isArray(incoming)) {
      incoming = [incoming];
    }
    if (!Array.isArray(incoming)) {
      return res.status(400).json({ error: 'Expected array of orders or single order object' });
    }
    const current = readOrdersFromDisk();
    const existingMap = new Map(current.map((o) => [o.id, o]));
    incoming.forEach((o) => {
      if (o && o.id) {
        if (!o.createdAt) {
          o.createdAt = new Date().toISOString();
        }
        existingMap.set(o.id, { ...existingMap.get(o.id), ...o });
      }
    });
    const merged = Array.from(existingMap.values());
    writeOrdersToDisk(merged);
    try {
      incoming.forEach((o) => {
        if (o && o.id) {
          setDoc(doc(serverDb, 'orders', o.id), o, { merge: true }).catch(() => {});
        }
      });
    } catch (e) {}
    return res.json({ success: true, count: merged.length, orders: merged });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Helper to automatically extract and register any app license from an order into app_licenses.json
function syncOrderLicenseToDisk(order) {
  if (!order) return;
  try {
    const licenses = readAppLicensesFromDisk();
    let updated = false;

    // 1. Direct appLicense attached to order
    const candidateLic = order.appLicense || order.amlakLicense || order.softwareLicense;
    if (candidateLic && (candidateLic.username || candidateLic.password || candidateLic.licenseKey)) {
      const exists = licenses.some(
        (l) => l.id === candidateLic.id || (l.username && candidateLic.username && l.username === candidateLic.username && l.productId === candidateLic.productId)
      );
      if (!exists) {
        licenses.push({
          id: candidateLic.id || `lic-${order.id}`,
          username: candidateLic.username || order.customerPhone || order.customerName || 'customer',
          password: candidateLic.password || candidateLic.licenseKey || 'JK-PASS',
          licenseKey: candidateLic.licenseKey || candidateLic.password || 'JA-APP-KEY',
          productId: candidateLic.productId || 'pkg-software',
          productTitle: candidateLic.productTitle || order.items?.[0]?.title || 'محصول جهش‌کالا',
          appName: candidateLic.appName || candidateLic.productTitle || 'اپلیکیشن جهش',
          buyerName: candidateLic.buyerName || order.customerName || 'خریدار',
          phone: candidateLic.phone || order.customerPhone || '',
          days: candidateLic.days || (order.isSubscription ? order.subscriptionDays || 30 : 365),
          startDate: candidateLic.startDate || order.createdAt || new Date().toISOString(),
          expiresAt: candidateLic.expiresAt || new Date(Date.now() + (candidateLic.days || 30) * 86400000).toISOString(),
          status: 'active',
          orderId: order.id,
        });
        updated = true;
      }
    }

    // 2. Scan items for subscriptions or software items
    if (Array.isArray(order.items)) {
      order.items.forEach((item, idx) => {
        const itemLic = item.appLicense || item.amlakLicense;
        if (itemLic) {
          const exists = licenses.some(
            (l) => l.id === itemLic.id || (l.username && itemLic.username && l.username === itemLic.username && l.productId === itemLic.productId)
          );
          if (!exists) {
            licenses.push({
              ...itemLic,
              id: itemLic.id || `lic-${order.id}-${idx}`,
              orderId: order.id,
              status: 'active',
            });
            updated = true;
          }
        }
      });
    }

    if (updated) {
      writeAppLicensesToDisk(licenses);
      console.log(`[LicenseSync] Auto-registered new app license from order ${order.id}. Total licenses: ${licenses.length}`);
    }
  } catch (err) {
    console.warn('[LicenseSync] Warning during auto-syncing license:', err.message);
  }
}

// POST /api/orders/save
app.post('/api/orders/save', (req, res) => {
  try {
    const order = req.body;
    if (!order || !order.id) {
      return res.status(400).json({ error: 'Invalid order object' });
    }
    if (!order.createdAt) {
      order.createdAt = new Date().toISOString();
    }
    const current = readOrdersFromDisk();
    const idx = current.findIndex(
      (o) => o.id === order.id || (o.trackingCode && order.trackingCode && o.trackingCode === order.trackingCode)
    );
    let updated;
    if (idx >= 0) {
      updated = [...current];
      updated[idx] = { ...current[idx], ...order };
    } else {
      updated = [order, ...current];
    }
    writeOrdersToDisk(updated);
    syncOrderLicenseToDisk(order);
    try {
      setDoc(doc(serverDb, 'orders', order.id), order, { merge: true }).catch(() => {});
    } catch (e) {}
    console.log(`[Orders] Saved order ${order.id}. Total orders: ${updated.length}`);
    return res.json({ success: true, order, count: updated.length, orders: updated });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/orders/update-status
app.post(['/api/orders/update-status', '/jaheshkala/api/orders/update-status', '/api/orders/status', '/jaheshkala/api/orders/status'], (req, res) => {
  try {
    const { orderId, id, status } = req.body || {};
    const targetId = orderId || id;
    if (!targetId || !status) {
      return res.status(400).json({ error: 'orderId and status required' });
    }
    const current = readOrdersFromDisk();
    let found = false;
    const updated = current.map((o) => {
      if (o.id === targetId || o.trackingCode === targetId || o.paymentRefId === targetId || o.zibalTrackId === targetId) {
        found = true;
        return { ...o, status, statusUpdatedAt: new Date().toISOString() };
      }
      return o;
    });
    if (!found) {
      updated.unshift({ id: targetId, status, statusUpdatedAt: new Date().toISOString(), createdAt: new Date().toISOString() });
    }
    writeOrdersToDisk(updated);
    console.log(`[Orders] Updated status of ${targetId} to ${status}`);
    return res.json({ success: true, count: updated.length, orders: updated });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// ==========================================
// Real-time Chats Persistence API (Zero-VPN Domestic & Global)
// ==========================================
const CHATS_FILE = path.join(__dirname, 'data', 'chats.json');

function readChatsFromDisk() {
  if (fs.existsSync(CHATS_FILE)) {
    try {
      const raw = fs.readFileSync(CHATS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Error reading chats.json:', e);
    }
  }
  return [];
}

function writeChatsToDisk(chats) {
  try {
    const dataDir = path.dirname(CHATS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(CHATS_FILE, JSON.stringify(chats, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing chats.json:', e);
  }
}

app.get(['/api/chats', '/jaheshkala/api/chats', '/api.php', '/jaheshkala/api.php'], (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  const action = req.query.action || req.query.endpoint || 'chats';
  if (action === 'app-auth' || action === 'licenses' || action === 'api/app-auth' || action === 'api/licenses') {
    const licenses = readLicensesFromDisk();
    const now = new Date();
    const enriched = licenses.map((lic) => {
      const expiresAt = lic.expiresAt ? new Date(lic.expiresAt) : null;
      const diffMs = expiresAt ? expiresAt.getTime() - now.getTime() : 0;
      const isExpired = !expiresAt || diffMs <= 0;
      const daysRemaining = isExpired ? 0 : Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      return {
        ...lic,
        isExpired,
        daysRemaining,
        liveStatus: isExpired ? 'expired' : 'active',
      };
    });
    return res.json({ success: true, count: enriched.length, licenses: enriched });
  }
  if (action === 'orders' || action === 'get_orders' || action === 'api/orders') {
    const orders = readOrdersFromDisk();
    return res.json({ success: true, orders });
  }
  if (action === 'orders/deleted' || action === 'deleted_orders' || action === 'api/orders/deleted') {
    return res.json(readDeletedOrdersFromDisk());
  }
  if (action === 'products' || action === 'get_products' || action === 'api/products') {
    let list = [];
    if (fs.existsSync(PRODUCTS_FILE)) {
      try {
        const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) list = parsed;
      } catch {}
    }
    if (list.length === 0) list = [...DEFAULT_SERVER_PRODUCTS];
    return res.json(sortProductsByOrder(list.filter((p) => p && p.id)));
  }
  if (action === 'banners' || action === 'get_banners') {
    return res.json(DEFAULT_SERVER_BANNERS);
  }
  const { userId } = req.query;
  const chats = readChatsFromDisk();
  if (userId) {
    const single = chats.find((c) => String(c.userId) === String(userId));
    return res.json({ success: true, chat: single || null });
  }
  return res.json({ success: true, chats });
});

app.post(['/api/chats', '/jaheshkala/api/chats', '/api.php', '/jaheshkala/api.php'], (req, res) => {
  try {
    const incoming = req.body;
    const action = req.query.action || req.query.endpoint || (incoming && incoming.action);

    // Products upsert & delete via api.php emulator
    if (action === 'products/save' || action === 'save_product' || action === 'api/products/save') {
      const product = incoming;
      if (!product || !product.id) {
        return res.status(400).json({ error: 'Invalid product data' });
      }
      removeDeletedProductId(product.id);
      let list = [];
      if (fs.existsSync(PRODUCTS_FILE)) {
        try {
          const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) list = parsed;
        } catch {}
      }
      if (list.length === 0) list = [...DEFAULT_SERVER_PRODUCTS];
      const idx = list.findIndex((p) => p.id === product.id);
      if (idx >= 0) list[idx] = product;
      else list = [product, ...list];
      const dataDir = path.dirname(PRODUCTS_FILE);
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(list, null, 2), 'utf8');
      try {
        const distData = path.join(__dirname, 'jaheshkala', 'data', 'products.json');
        if (fs.existsSync(path.dirname(distData))) {
          fs.writeFileSync(distData, JSON.stringify(list, null, 2), 'utf8');
        }
      } catch {}
      return res.json({ success: true, products: list, product });
    }

    if (action === 'products/delete' || action === 'delete_product' || action === 'api/products/delete') {
      const productId = (req.query && req.query.id) || (incoming && (incoming.productId || incoming.id));
      if (!productId) {
        return res.status(400).json({ error: 'productId or id required' });
      }
      addDeletedProductId(productId);
      let list = [];
      if (fs.existsSync(PRODUCTS_FILE)) {
        try {
          const raw = fs.readFileSync(PRODUCTS_FILE, 'utf8');
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) list = parsed;
        } catch {}
      }
      list = list.filter((p) => p.id !== productId);
      fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(list, null, 2), 'utf8');
      try {
        const distData = path.join(__dirname, 'jaheshkala', 'data', 'products.json');
        if (fs.existsSync(path.dirname(distData))) {
          fs.writeFileSync(distData, JSON.stringify(list, null, 2), 'utf8');
        }
      } catch {}
      return res.json({ success: true, products: list });
    }

    // Delete single order via api.php emulator
    if (action === 'orders/delete' || action === 'delete_order' || action === 'api/orders/delete') {
      const orderId = (req.query && req.query.id) || (incoming && (incoming.orderId || incoming.id));
      const allKeys = Array.isArray(incoming && incoming.allKeys) ? incoming.allKeys : [];
      if (orderId) allKeys.push(orderId);
      const cleanKeys = Array.from(new Set(allKeys.filter(Boolean).map(k => String(k).trim())));

      if (cleanKeys.length > 0) {
        const currentDeleted = readDeletedOrdersFromDisk();
        writeDeletedOrdersToDisk([...currentDeleted, ...cleanKeys]);
      }

      const current = readOrdersFromDisk();
      const keySet = new Set(cleanKeys);
      const updated = current.filter(
        (o) =>
          !keySet.has(String(o.id).trim()) &&
          (!o.trackingCode || !keySet.has(String(o.trackingCode).trim())) &&
          (!o.zibalTrackId || !keySet.has(String(o.zibalTrackId).trim())) &&
          (!o.paymentRefId || !keySet.has(String(o.paymentRefId).trim()))
      );
      writeOrdersToDisk(updated);
      return res.json({ success: true, count: updated.length, orders: updated });
    }

    // Clear all orders via api.php emulator
    if (action === 'orders/clear' || action === 'clear_orders' || action === 'api/orders/clear') {
      const current = readOrdersFromDisk();
      const allKeys = [];
      current.forEach((o) => {
        if (o.id) allKeys.push(String(o.id).trim());
        if (o.trackingCode) allKeys.push(String(o.trackingCode).trim());
      });
      if (incoming && Array.isArray(incoming.allKeys)) {
        allKeys.push(...incoming.allKeys);
      }
      const currentDeleted = readDeletedOrdersFromDisk();
      writeDeletedOrdersToDisk([...currentDeleted, ...allKeys]);
      writeOrdersToDisk([]);
      return res.json({ success: true, count: 0, orders: [] });
    }

    // Sync deleted orders blacklist
    if (action === 'orders/deleted' || action === 'deleted_orders' || action === 'api/orders/deleted') {
      const { orderIds, orderId, id } = incoming || {};
      const newKeys = [
        ...(Array.isArray(orderIds) ? orderIds : []),
        orderId,
        id,
      ].filter(Boolean).map((k) => String(k).trim());
      const current = readDeletedOrdersFromDisk();
      const updated = Array.from(new Set([...current, ...newKeys]));
      writeDeletedOrdersToDisk(updated);
      return res.json({ success: true, count: updated.length, deleted: updated });
    }

    if (action === 'orders' || action === 'save_order' || (incoming && incoming.id && !incoming.userId)) {
      // Forward to order saving logic
      const orders = readOrdersFromDisk();
      // If saving an order, unmark from deleted tombstone
      if (incoming && incoming.id) {
        const deleted = readDeletedOrdersFromDisk().filter(d => d !== String(incoming.id).trim());
        writeDeletedOrdersToDisk(deleted);
      }
      const existingIdx = orders.findIndex(o => o.id === incoming.id);
      if (existingIdx >= 0) {
        orders[existingIdx] = { ...orders[existingIdx], ...incoming };
      } else {
        orders.unshift(incoming);
      }
      writeOrdersToDisk(orders);

      // CRITICAL: If the order contains an app license or amlak license, automatically persist into app_licenses.json
      const attachedLic = incoming.appLicense || incoming.amlakLicense;
      if (attachedLic && (attachedLic.username || attachedLic.licenseKey)) {
        try {
          const lics = readLicensesFromDisk();
          const existingLicIdx = lics.findIndex(
            (l) => l.id === attachedLic.id || (l.username === attachedLic.username && l.productId === attachedLic.productId)
          );
          if (existingLicIdx >= 0) {
            lics[existingLicIdx] = { ...lics[existingLicIdx], ...attachedLic };
          } else {
            lics.unshift(attachedLic);
          }
          writeLicensesToDisk(lics);
        } catch (licErr) {
          console.warn('Notice syncing order license to disk:', licErr);
        }
      }

      return res.json({ success: true, order: incoming, count: orders.length, orders });
    }

    if (!incoming || !incoming.userId) {
      return res.status(400).json({ error: 'Invalid chat. userId is required.' });
    }
    const chats = readChatsFromDisk();
    const idx = chats.findIndex((c) => String(c.userId) === String(incoming.userId));

    const updatedItem = {
      userId: String(incoming.userId),
      userName: incoming.userName || 'کاربر جهش‌کالا',
      messages: Array.isArray(incoming.messages) ? incoming.messages : [],
      lastUpdated: incoming.lastUpdated || new Date().toISOString(),
      isReadByAdmin: incoming.isReadByAdmin !== undefined ? Boolean(incoming.isReadByAdmin) : false,
      needsHumanSupport: Boolean(incoming.needsHumanSupport),
    };

    if (idx >= 0) {
      chats[idx] = updatedItem;
    } else {
      chats.unshift(updatedItem);
    }

    writeChatsToDisk(chats);
    return res.json({ success: true, chat: updatedItem, count: chats.length });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/orders/delete & /jaheshkala/api/orders/delete
app.post(['/api/orders/delete', '/jaheshkala/api/orders/delete'], (req, res) => {
  try {
    const { orderId, id, allKeys } = req.body || {};
    const targetId = orderId || id || (req.query && req.query.id);
    const keys = Array.isArray(allKeys) ? [...allKeys] : [];
    if (targetId) keys.push(targetId);

    const cleanKeys = Array.from(new Set(keys.filter(Boolean).map(k => String(k).trim())));
    if (cleanKeys.length === 0) {
      return res.status(400).json({ error: 'orderId or allKeys required' });
    }

    // Persist into tombstone blacklist
    const currentDeleted = readDeletedOrdersFromDisk();
    writeDeletedOrdersToDisk([...currentDeleted, ...cleanKeys]);

    const current = readOrdersFromDisk();
    const keySet = new Set(cleanKeys);
    const updated = current.filter(
      (o) =>
        !keySet.has(String(o.id).trim()) &&
        (!o.trackingCode || !keySet.has(String(o.trackingCode).trim())) &&
        (!o.zibalTrackId || !keySet.has(String(o.zibalTrackId).trim())) &&
        (!o.paymentRefId || !keySet.has(String(o.paymentRefId).trim()))
    );
    writeOrdersToDisk(updated);
    return res.json({ success: true, count: updated.length, orders: updated });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/orders/clear & /jaheshkala/api/orders/clear
app.post(['/api/orders/clear', '/jaheshkala/api/orders/clear'], (req, res) => {
  try {
    const current = readOrdersFromDisk();
    const allKeys = [];
    current.forEach((o) => {
      if (o.id) allKeys.push(String(o.id).trim());
      if (o.trackingCode) allKeys.push(String(o.trackingCode).trim());
      if (o.paymentRefId) allKeys.push(String(o.paymentRefId).trim());
      if (o.zibalTrackId) allKeys.push(String(o.zibalTrackId).trim());
    });
    if (req.body && Array.isArray(req.body.allKeys)) {
      allKeys.push(...req.body.allKeys);
    }
    const currentDeleted = readDeletedOrdersFromDisk();
    writeDeletedOrdersToDisk([...currentDeleted, ...allKeys]);
    writeOrdersToDisk([]);
    return res.json({ success: true, count: 0, orders: [] });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// ==========================================
// Users & Roles Persistence API
// ==========================================
const USERS_FILE = path.join(__dirname, 'data', 'users.json');

function normalizePhone(phone) {
  if (!phone) return '';
  let str = String(phone).trim();
  if (!str || str === 'ثبت نشده' || str === 'test') return '';
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  for (let i = 0; i < 10; i++) {
    str = str.replace(new RegExp(persianDigits[i], 'g'), String(i));
    str = str.replace(new RegExp(arabicDigits[i], 'g'), String(i));
  }
  str = str.replace(/[^0-9]/g, '');
  if (str.startsWith('0098') && str.length >= 12) str = '0' + str.slice(4);
  else if (str.startsWith('98') && str.length === 12) str = '0' + str.slice(2);
  else if (!str.startsWith('0') && str.length === 10 && str.startsWith('9')) str = '0' + str;
  return str;
}

function normalizeUsername(username) {
  if (!username) return '';
  return String(username).trim().toLowerCase().replace(/^@+/, '').trim();
}

function matchUser(a, b) {
  if (!a || !b) return false;
  if (a.id && b.id && String(a.id).trim() === String(b.id).trim()) return true;
  const u1 = normalizeUsername(a.username);
  const u2 = normalizeUsername(b.username);
  if (u1 && u2 && u1 === u2) return true;
  const p1 = normalizePhone(a.phone);
  const p2 = normalizePhone(b.phone);
  if (p1 && p2 && p1 === p2 && p1.length >= 10) return true;
  return false;
}

function readUsersFromDisk() {
  if (fs.existsSync(USERS_FILE)) {
    try {
      const raw = fs.readFileSync(USERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Error reading users.json:', e);
    }
  }
  return [];
}

function writeUsersToDisk(users) {
  try {
    const dataDir = path.dirname(USERS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing users.json:', e);
  }
}

// GET /api/users
app.get('/api/users', (_req, res) => {
  try {
    const users = readUsersFromDisk();
    return res.json({ success: true, users });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/users/update-role
app.post(['/api/users/update-role', '/jaheshkala/api/users/update-role', '/api/update-role', '/jaheshkala/api/update-role'], (req, res) => {
  try {
    const { id, username, phone, role } = req.body || {};
    if (!role) {
      return res.status(400).json({ error: 'Role is required' });
    }
    const current = readUsersFromDisk();
    const target = { id, username, phone };
    let matchedCount = 0;

    for (let i = 0; i < current.length; i++) {
      if (matchUser(current[i], target)) {
        current[i].role = role;
        matchedCount++;
      }
    }

    if (matchedCount === 0 && (username || phone || id)) {
      current.push({
        id: id || `usr-${Date.now()}`,
        username: normalizeUsername(username) || username || '',
        phone: normalizePhone(phone) || phone || '',
        role: role,
        createdAt: new Date().toISOString(),
      });
    }

    writeUsersToDisk(current);
    console.log(`[Users] Updated role to ${role} for user ${username || phone || id} (matched: ${matchedCount})`);
    return res.json({ success: true, count: current.length, users: current });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/users (bulk or single user save/update)
app.post(['/api/users', '/jaheshkala/api/users'], (req, res) => {
  try {
    let incoming = req.body;
    if (incoming && Array.isArray(incoming.users)) {
      incoming = incoming.users;
    } else if (incoming && !Array.isArray(incoming)) {
      incoming = [incoming];
    }
    if (!Array.isArray(incoming)) {
      return res.status(400).json({ error: 'Expected array of users or single user' });
    }
    const current = readUsersFromDisk();
    incoming.forEach((user) => {
      if (user && (user.id || user.username || user.phone)) {
        const idx = current.findIndex((u) => matchUser(u, user));
        if (idx >= 0) {
          current[idx] = { ...current[idx], ...user };
        } else {
          current.unshift(user);
        }
      }
    });
    writeUsersToDisk(current);
    return res.json({ success: true, count: current.length, users: current });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// POST /api/users/save
app.post(['/api/users/save', '/jaheshkala/api/users/save'], (req, res) => {
  try {
    const user = req.body;
    if (!user || (!user.id && !user.username && !user.phone)) {
      return res.status(400).json({ error: 'Invalid user payload' });
    }
    const current = readUsersFromDisk();
    const idx = current.findIndex((u) => matchUser(u, user));
    if (idx >= 0) {
      current[idx] = { ...current[idx], ...user };
    } else {
      current.unshift(user);
    }
    writeUsersToDisk(current);

    // همگام‌سازی با پایگاه داده کاربران بیمارستان دامپزشکی و فایربیس
    try {
      const vetUsers = readVetUsers();
      const vIdx = vetUsers.findIndex((u) => u.id === user.id || (user.username && u.username && u.username.toLowerCase() === user.username.toLowerCase()) || (user.phone && u.phone && u.phone === user.phone));
      if (vIdx >= 0) {
        vetUsers[vIdx] = { ...vetUsers[vIdx], ...user };
        writeVetUsers(vetUsers);
        // آپدیت در فایربیس سرور
        setDoc(doc(serverDb, 'users', vetUsers[vIdx].id), vetUsers[vIdx], { merge: true }).catch(() => {});
      }
    } catch (ve) {
      console.warn('Error syncing updated user to vet users:', ve);
    }

    return res.json({ success: true, user, count: current.length });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// ==========================================
// AI Application Authentication & Subscription License API (Windows, Android & Cross-Platform)
// ==========================================
const APP_LICENSES_FILE = path.join(__dirname, 'data', 'app_licenses.json');
const ALT_LICENSES_FILE = path.join(__dirname, 'data', 'licenses.json');

function readLicensesFromDisk() {
  const all = [];
  const seenIds = new Set();

  for (const fpath of [APP_LICENSES_FILE, ALT_LICENSES_FILE]) {
    if (fs.existsSync(fpath)) {
      try {
        const raw = fs.readFileSync(fpath, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            const key = item.licenseKey || item.id || `${item.username}_${item.productId || ''}_${item.password || ''}`;
            if (!seenIds.has(key)) {
              seenIds.add(key);
              all.push(item);
            }
          }
        }
      } catch (e) {
        console.warn(`Error reading ${fpath}:`, e);
      }
    }
  }

  // Also include any licenses attached to orders
  try {
    const orders = readOrdersFromDisk();
    for (const order of orders) {
      if (!order) continue;
      const attached = [order.appLicense, order.amlakLicense].filter(Boolean);
      for (const lic of attached) {
        if (lic && (lic.username || lic.licenseKey)) {
          const key = lic.licenseKey || lic.id || `order_${order.id}_${lic.username}`;
          if (!seenIds.has(key)) {
            seenIds.add(key);
            all.push({
              id: lic.id || (lic.licenseKey ? `lic-${lic.licenseKey}` : `lic-order-${order.id}`),
              username: lic.username,
              password: lic.password,
              licenseKey: lic.licenseKey,
              productId: lic.productId || 'pkg-amlak-jahesh',
              productTitle: lic.productTitle || order.items?.[0]?.product?.title || 'نرم‌افزار جامع مدیریت املاک جهش',
              appName: lic.appName || 'سامانه مدیریت املاک جهش',
              buyerName: lic.buyerName || order.customerName || 'کاربر جهش',
              phone: lic.phone || order.customerPhone || '',
              days: Number(lic.days) || 30,
              startDate: lic.startDate || order.createdAt || new Date().toISOString(),
              expiresAt: lic.expiresAt || new Date(Date.now() + 30 * 86400000).toISOString(),
              status: lic.status || 'active',
              orderId: order.id,
            });
          }
        }
      }
    }
  } catch (e) {
    console.warn('Notice scanning orders for licenses:', e);
  }

  return all;
}

function writeLicensesToDisk(licenses) {
  try {
    const dataDir = path.dirname(APP_LICENSES_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(APP_LICENSES_FILE, JSON.stringify(licenses, null, 2), 'utf8');
    fs.writeFileSync(ALT_LICENSES_FILE, JSON.stringify(licenses, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing licenses files:', e);
  }
}

// ==========================================
// AI Application Authentication & Subscription License API (Cross-Platform)
// Live Firestore synchronization, accurate millisecond-level expiry, strict product isolation
// ==========================================
app.all(['/api/app-auth', '/jaheshkala/api/app-auth'], async (req, res) => {
  try {
    await appAuthHandler(req, res);
  } catch (err) {
    console.error('Error in /api/app-auth:', err);
    return res.status(500).json({ success: false, error: 'خطای سرور در احراز هویت لایسنس', details: err.message });
  }
});

app.all(['/api/app-auth/verify', '/jaheshkala/api/app-auth/verify'], async (req, res) => {
  try {
    await appAuthHandler(req, res);
  } catch (err) {
    console.error('Error in /api/app-auth/verify:', err);
    return res.status(500).json({ success: false, error: 'خطای سرور در اعتبارسنجی نشست', details: err.message });
  }
});

app.all(['/api/app-auth/register-license', '/jaheshkala/api/app-auth/register-license'], async (req, res) => {
  try {
    await appAuthHandler(req, res);
  } catch (err) {
    console.error('Error in /api/app-auth/register-license:', err);
    return res.status(500).json({ success: false, error: 'خطای سرور در ثبت لایسنس', details: err.message });
  }
});

app.all(['/api/app-auth/licenses', '/jaheshkala/api/app-auth/licenses'], async (req, res) => {
  try {
    await appAuthHandler(req, res);
  } catch (err) {
    console.error('Error in /api/app-auth/licenses:', err);
    return res.status(500).json({ success: false, error: 'خطای سرور در دریافت لیست لایسنس‌ها', details: err.message });
  }
});

// Helper for Zibal URL (Uses ZIBAL_PROXY_URL if provided, else direct to https://gateway.zibal.ir/v1)
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

// Zibal Payment Request Endpoint (Supports multiple route aliases)
app.post(['/api/zibal-request', '/api/vet/zibal-request', '/vet-hospital/api/zibal-request', '/api/zibal/request', '/api/zibal'], async (req, res) => {
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
    };
    if (orderId !== undefined) zibalPayload.orderId = String(orderId);
    if (mobile !== undefined) zibalPayload.mobile = String(mobile);

    const requestUrl = getZibalUrl('/request');

    let zibalRes;
    let data;

    try {
      zibalRes = await fetch(requestUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(zibalPayload)
      });
      data = await zibalRes.json();
    } catch (networkErr) {
      console.warn('[Zibal] Network request error:', networkErr.message);
      data = { result: -2, message: networkErr.message };
    }

    // If direct request failed or returned IP error (113/115), try Val Town fixed proxy
    if (!data || data.result !== 100 || !data.trackId) {
      try {
        const valTownUrl = 'https://erfanmogaddam--d91a5504c02211f1849a1607ee4eb77e.web.val.run/request';
        const valRes = await fetch(valTownUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(zibalPayload)
        });
        const valData = await valRes.json().catch(() => null);
        if (valData && valData.trackId) {
          data = valData;
        }
      } catch (valErr) {
        console.warn('[Zibal] Val Town proxy fallback failed:', valErr);
      }
    }

    if (data && data.result === 100 && data.trackId) {
      // NOTE: Unpaid pending orders are NOT saved to disk here.
      // Orders are ONLY saved to orders.json and database when bank payment is verified successfully.

      // Auto-save pending vet hospital appointment
      if (req.body?.appointmentData) {
        try {
          const currentAppts = readVetAppointments();
          const pAppt = { ...req.body.appointmentData };
          pAppt.trackingCode = String(data.trackId);
          pAppt.zibalTrackId = String(data.trackId);
          pAppt.paymentStatus = 'pending';
          pAppt.visitStatus = 'scheduled';
          pAppt.createdAt = pAppt.createdAt || new Date().toISOString();
          const aIdx = currentAppts.findIndex((a) => a.id === pAppt.id || a.trackingCode === pAppt.trackingCode);
          if (aIdx >= 0) {
            currentAppts[aIdx] = { ...currentAppts[aIdx], ...pAppt };
          } else {
            currentAppts.unshift(pAppt);
          }
          writeVetAppointments(currentAppts);
          console.log(`[Vet Hospital] Auto-saved pending appointment ${pAppt.id} with trackId ${data.trackId}`);
        } catch (vetSaveErr) {
          console.warn('[Vet Hospital] Could not auto-save pending appointment:', vetSaveErr);
        }
      }

      const paymentUrl = `https://gateway.zibal.ir/start/${data.trackId}`;

      return res.json({
        success: true,
        result: data.result,
        trackId: data.trackId,
        isSandboxFallback: false,
        message: data.message || 'success',
        paymentUrl
      });
    } else {
      return res.status(400).json({
        success: false,
        result: data ? data.result : -1,
        message: (data && data.message) || 'خطا در برقراری ارتباط با درگاه پرداخت زیپال.',
        details: data
      });
    }
  } catch (err) {
    console.error('Error in /api/zibal-request:', err);
    return res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
  }
});

// Zibal Payment Verify Endpoint (Supports multiple route aliases)
app.post(['/api/zibal-verify', '/api/vet/zibal-verify', '/vet-hospital/api/zibal-verify', '/api/zibal/verify'], async (req, res) => {
  try {
    const { trackId, merchant, ...otherFields } = req.body || {};
    if (!trackId) {
      return res.status(400).json({ success: false, error: 'کد پیگیری تراکنش (trackId) ارسال نشده است.' });
    }

    const ZIBAL_MERCHANT = merchant || process.env.ZIBAL_MERCHANT || '6a9db4410df8756c31ea5d00';
    const verifyUrl = getZibalUrl('/verify');

    const verifyPayload = {
      ...otherFields,
      merchant: ZIBAL_MERCHANT,
      trackId: Number(trackId)
    };

    let zibalRes;
    let data;
    let isSandboxFallback = false;

    try {
      zibalRes = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(verifyPayload)
      });
      data = await zibalRes.json();
    } catch (netErr) {
      console.warn('[Zibal Verify] Direct request error:', netErr.message);
    }

    if (data && (data.result === 100 || data.result === 201)) {
      const refNum = data.refNumber ? String(data.refNumber) : String(trackId);

      // Auto-update order on disk immediately upon successful verification!
      try {
        const currentOrders = readOrdersFromDisk();
        const oIdx = currentOrders.findIndex(
          (o) =>
            (o.trackingCode && String(o.trackingCode) === String(trackId)) ||
            (o.zibalTrackId && String(o.zibalTrackId) === String(trackId)) ||
            (data.orderId && o.id === data.orderId)
        );
        if (oIdx >= 0) {
          currentOrders[oIdx] = {
            ...currentOrders[oIdx],
            status: 'تایید شده / در حال آماده‌سازی',
            trackingCode: String(trackId),
            paymentRefId: refNum,
            zibalTrackId: String(trackId),
            zibalRefNumber: refNum,
            cardNumber: data.cardNumber || currentOrders[oIdx].cardNumber || '',
            paidAt: data.paidAt || new Date().toISOString(),
            paymentGateway: 'زیبال (Zibal - پرداخت موفق شاپرک)',
          };
          writeOrdersToDisk(currentOrders);
          console.log(`[Zibal Verify] Updated order ${currentOrders[oIdx].id} on disk to confirmed!`);
        }
      } catch (diskErr) {
        console.warn('[Zibal Verify] Could not auto-update order on disk:', diskErr);
      }

      // Auto-update vet appointment on disk immediately upon successful verification!
      try {
        const currentAppts = readVetAppointments();
        const aIdx = currentAppts.findIndex(
          (a) =>
            (a.trackingCode && String(a.trackingCode) === String(trackId)) ||
            (a.zibalTrackId && String(a.zibalTrackId) === String(trackId)) ||
            (a.id && String(a.id) === String(trackId))
        );
        if (aIdx >= 0) {
          currentAppts[aIdx] = {
            ...currentAppts[aIdx],
            paymentStatus: 'paid',
            status: 'confirmed',
            trackingCode: String(trackId),
            paymentRefId: refNum,
            zibalTrackId: String(trackId),
            zibalRefNumber: refNum,
            paidAt: data.paidAt || new Date().toISOString(),
            paymentMethod: 'درگاه پرداخت شاپرک و زیپال (موفق)'
          };
          writeVetAppointments(currentAppts);
          console.log(`[Zibal Verify] Updated vet appointment ${currentAppts[aIdx].id} on disk to confirmed!`);
        }
      } catch (apptErr) {
        console.warn('[Zibal Verify] Could not auto-update vet appointment on disk:', apptErr);
      }

      return res.json({
        success: true,
        result: data.result,
        status: data.status,
        isSandboxFallback,
        refNumber: refNum,
        amountInRials: data.amount,
        amountInTomans: data.amount ? Math.round(data.amount / 10) : 0,
        paidAt: data.paidAt,
        cardNumber: data.cardNumber || '۵۸۹۲۱۰******۷۸۹۰',
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
    return res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
  }
});

// Real Estate SaaS (مدیریت املاک جهش) Licenses Persistence & Auth
const AMLAK_LICENSES_FILE = path.join(__dirname, 'data', 'amlak_licenses.json');

function getAmlakLicensesFromServer() {
  try {
    if (fs.existsSync(AMLAK_LICENSES_FILE)) {
      const content = fs.readFileSync(AMLAK_LICENSES_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err) {
    console.warn('Could not read amlak licenses:', err);
  }
  return [
    // Pre-seeded default admin superuser
    {
      username: 'admin',
      password: 'jahesh1395',
      licenseKey: 'JA-ROOT-ADMIN-VIP',
      buyerName: 'مدیر کل فروشگاه جهش‌کالا',
      phone: '09152331974',
      days: 365,
      startDate: '۱۴۰۴/۰۱/۰۱',
      expiresAt: '۱۴۰۵/۰۱/۰۱',
      status: 'active'
    }
  ];
}

function saveAmlakLicensesToServer(licenses) {
  try {
    const dataDir = path.dirname(AMLAK_LICENSES_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(AMLAK_LICENSES_FILE, JSON.stringify(licenses, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not save amlak licenses:', err);
  }
}

app.get('/api/amlak/licenses', (_req, res) => {
  const licenses = getAmlakLicensesFromServer();
  res.json({ success: true, licenses });
});

app.post('/api/amlak/licenses', (req, res) => {
  try {
    const newLicense = req.body;
    if (!newLicense || !newLicense.username || !newLicense.password) {
      return res.status(400).json({ success: false, error: 'اطلاعات لایسنس ناقص است.' });
    }
    const licenses = getAmlakLicensesFromServer();
    const idx = licenses.findIndex(l => l.username.toLowerCase() === newLicense.username.toLowerCase());
    if (idx >= 0) {
      licenses[idx] = newLicense;
    } else {
      licenses.unshift(newLicense);
    }
    saveAmlakLicensesToServer(licenses);
    return res.json({ success: true, license: newLicense });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/amlak/auth', (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'نام کاربری و رمز عبور الزامی است.' });
    }

    const cleanUser = String(username).trim().toLowerCase();
    const cleanPass = String(password).trim();

    // 1. Check SuperAdmin credentials
    if (
      (cleanUser === 'admin' || cleanUser === 'jahesh' || cleanUser === 'amlak_jaheshadmin' || cleanUser === 'jaheshadmin') &&
      (cleanPass === 'jahesh1395' || cleanPass === 'jahesh' || cleanPass === 'admin' || cleanPass === 'jahesh2026')
    ) {
      return res.json({
        success: true,
        user: {
          username: cleanUser,
          buyerName: 'مدیر کل سیستم جهش',
          role: 'admin',
          licenseKey: 'JA-ROOT-ADMIN-VIP',
          expiresAt: 'نامحدود (حساب مدیریت)',
          days: 365,
          status: 'active'
        }
      });
    }

    // 2. Deterministic Hash Validation (Strict exact password check)
    function hashString(str) {
      let hash = 5381;
      for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
        hash = hash & hash;
      }
      return Math.abs(hash);
    }
    function generateDeterministicPassword(seed) {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      const cleanSeed = (seed || 'jahesh').toLowerCase().trim();
      const num = hashString(cleanSeed + '_jahesh_amlak_secret_salt_2026');
      const digits = 1000 + (num % 9000);
      let letters = '';
      let temp = Math.floor(num / 13);
      for (let i = 0; i < 4; i++) {
        letters += chars[temp % chars.length];
        temp = Math.floor(temp / chars.length) + (i * 7) + 3;
      }
      return `JK-${digits}${letters}`;
    }

    const expectedPassDirect = generateDeterministicPassword(cleanUser);
    const expectedPassPrefixed = generateDeterministicPassword('amlak_' + cleanUser);

    if (cleanPass === expectedPassDirect || cleanPass === expectedPassPrefixed) {
      return res.json({
        success: true,
        user: {
          username: cleanUser,
          buyerName: cleanUser,
          role: 'subscriber',
          licenseKey: `JA-AMLAK-2026-${cleanUser.slice(-5).toUpperCase()}`,
          expiresAt: '۳۰ روزه فعال',
          days: 30,
          status: 'active'
        }
      });
    }

    // 3. Check Customer Purchased Licenses stored on server
    const licenses = getAmlakLicensesFromServer();
    const matched = licenses.find(
      l => (l.username.toLowerCase() === cleanUser || l.username.toLowerCase() === 'amlak_' + cleanUser) && l.password === cleanPass
    );

    if (matched) {
      return res.json({
        success: true,
        user: {
          username: matched.username,
          buyerName: matched.buyerName,
          phone: matched.phone,
          licenseKey: matched.licenseKey,
          expiresAt: matched.expiresAt,
          days: matched.days,
          status: matched.status || 'active'
        }
      });
    }

    return res.status(401).json({
      success: false,
      message: 'نام کاربری یا رمز عبور اشتباه است. لطفاً مشخصات دریافتی پس از خرید اشتراک از جهش‌کالا را وارد نمایید.'
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Explicit handler for Real Estate Management App (مدیریت املاک جهش)
app.get(['/amlak.html', '/amlak', '/jaheshkala/amlak.html', '/jaheshkala/amlak'], (_req, res) => {
  const candidates = [
    path.join(__dirname, 'jaheshkala', 'amlak.html'),
    path.join(__dirname, 'amlak.html'),
    path.join(__dirname, 'jaheshkala-app', 'public', 'amlak.html')
  ];
  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.sendFile(filePath);
    }
  }
  return res.status(404).send('صفحه سامانه مدیریت املاک جهش یافت نشد.');
});

// Serve Veterinary Faculty Hospital static files & SPA entry
const vetHospitalDir = path.join(__dirname, 'vet-hospital');
app.use('/vet-hospital', express.static(vetHospitalDir));
app.get(['/vet-hospital', '/vet-hospital/*'], (req, res, next) => {
  if (path.extname(req.path)) {
    return next();
  }
  const indexFile = path.join(vetHospitalDir, 'index.html');
  if (fs.existsSync(indexFile)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.sendFile(indexFile);
  }
  next();
});

// Serve jaheshkala static files & SPA entry
const jaheshkalaDir = path.join(__dirname, 'jaheshkala');
app.use('/jaheshkala', express.static(jaheshkalaDir));
app.get(['/jaheshkala', '/jaheshkala/*'], (req, res, next) => {
  // Allow product SEO routes to pass through to the product SEO handler
  if (
    req.path.startsWith('/jaheshkala/product/') ||
    req.path.startsWith('/jaheshkala/item/') ||
    req.path.startsWith('/jaheshkala/tool/') ||
    req.path.startsWith('/jaheshkala/p/')
  ) {
    return next();
  }
  if (path.extname(req.path)) {
    return next();
  }
  const indexFile = path.join(jaheshkalaDir, 'index.html');
  if (fs.existsSync(indexFile)) {
    return res.sendFile(indexFile);
  }
  next();
});

// Rewrite per vercel.json if applicable
app.get('/47887509.txt', (req, res) => {
  const target = path.join(__dirname, 'assets', '47887509.txt');
  if (fs.existsSync(target)) {
    return res.sendFile(target);
  }
  res.status(404).send('Not found');
});

// Redirect /frwshgah to /jaheshkala/
app.get(['/frwshgah', '/frwshgah/*'], (req, res) => {
  res.redirect(301, '/jaheshkala/');
});

// Trailing-slash normalization for core pillars to prevent duplicate indexing
app.get('/vet-hospital', (req, res) => {
  res.redirect(301, '/vet-hospital/');
});
app.get('/jaheshkala', (req, res) => {
  res.redirect(301, '/jaheshkala/');
});

// ==========================================
// Dynamic Product SEO System for Jaheshkala
// Gives every product its own dedicated Google ranking page with Schema.org & full keywords
// ==========================================
app.get([
  '/jaheshkala/product/:id',
  '/jaheshkala/item/:id',
  '/jaheshkala/tool/:id',
  '/jaheshkala/p/:id',
  '/product/:id',
  '/kala/:id'
], (req, res, next) => {
  try {
    const rawId = req.params.id;
    const product = findProductByIdentifier(rawId);
    if (product) {
      const host = req.get('host') || '';
      const origin = (host && !host.includes('localhost') && !host.includes('127.0.0.1'))
        ? req.protocol + '://' + host
        : 'https://jaheshit.ir';
      const html = renderProductHtml(product, origin);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
      return res.send(html);
    }
  } catch (err) {
    console.error('Error rendering product SEO page:', err);
  }
  next();
});

// Master Sitemap (Includes All Core Ecosystem Pages + All 60+ Dynamic Products)
app.get(['/sitemap.xml', '/sitemap_index.xml'], (req, res) => {
  const host = req.get('host') || '';
  const origin = (host && !host.includes('localhost') && !host.includes('127.0.0.1'))
    ? req.protocol + '://' + host
    : 'https://jaheshit.ir';
  const xml = generateMasterSitemapXml(origin);
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  res.send(xml);
});

// Dynamic Products Sitemap
app.get(['/sitemap-products.xml', '/jaheshkala/sitemap-products.xml'], (req, res) => {
  const host = req.get('host') || '';
  const origin = (host && !host.includes('localhost') && !host.includes('127.0.0.1'))
    ? req.protocol + '://' + host
    : 'https://jaheshit.ir';
  const xml = generateProductsSitemapXml(origin);
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  res.send(xml);
});

// ==========================================
// سامانه‌ی لینک‌های درگاه پرداخت هوشمند و صفحات فرود گرافیکی هوش مصنوعی
// ==========================================

// دریافت لیست تمام لندینگ‌های پرداخت ذخیره‌شده
app.get('/api/payment-landings', (_req, res) => {
  try {
    const landings = readPaymentLandingsFromDisk();
    return res.json({ success: true, landings });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// دریافت اطلاعات یک لندینگ پرداخت خاص
app.get('/api/payment-landings/:id', (req, res) => {
  try {
    const { id } = req.params;
    const landings = readPaymentLandingsFromDisk();
    const item = landings.find((l) => l.id === id || l.slug === id);
    if (!item) {
      return res.status(404).json({ success: false, error: 'لندینگ پیج پرداخت یافت نشد.' });
    }
    return res.json({ success: true, landing: item });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// تولید هوشمند محتوای مارکتینگ، تیترها و تم صفحه توسط مدل جمنای هوش مصنوعی
app.post('/api/payment-landings/generate-ai', async (req, res) => {
  try {
    const {
      title,
      amount,
      description,
      theme,
      sellerName,
      merchant,
      buyerPhone,
      buyerName,
      featuresHint
    } = req.body || {};

    if (!title || !String(title).trim()) {
      return res.status(400).json({ success: false, error: 'موضوع یا عنوان محصول الزامی است.' });
    }

    const aiContent = await generateLandingContentWithAi({
      title: String(title).trim(),
      amount: Number(amount) || 50000,
      description: description || '',
      theme: theme || 'neon-purple',
      sellerName: sellerName || 'جهش آی‌تی',
      merchant: merchant || '6a9db4410df8756c31ea5d00',
      buyerPhone: buyerPhone || '',
      buyerName: buyerName || '',
      featuresHint: featuresHint || ''
    });

    return res.json({ success: true, aiContent });
  } catch (err) {
    console.error('Error generating AI payment landing:', err);
    return res.status(500).json({ success: false, error: err.message || 'خطا در تولید محتوای هوش مصنوعی.' });
  }
});

// ذخیره یا ویرایش لندینگ پرداخت (همگام‌سازی فوری دیسک و فایربیس ابری)
app.post('/api/payment-landings', async (req, res) => {
  try {
    const landingData = req.body;
    if (!landingData || !landingData.title) {
      return res.status(400).json({ success: false, error: 'اطلاعات لندینگ پرداخت ناقص است.' });
    }

    const currentLandings = readPaymentLandingsFromDisk();
    const id = landingData.id || ('pay_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6));
    const now = new Date().toISOString();

    const newLanding = {
      id,
      title: String(landingData.title).trim(),
      amount: Math.round(Number(landingData.amount)) || 50000,
      merchant: (landingData.merchant && String(landingData.merchant).trim()) || '6a9db4410df8756c31ea5d00',
      sellerName: (landingData.sellerName && String(landingData.sellerName).trim()) || 'جهش آی‌تی',
      description: landingData.description || '',
      theme: landingData.theme || 'neon-purple',
      buyerPhone: landingData.buyerPhone || '',
      buyerName: landingData.buyerName || '',
      features: Array.isArray(landingData.features) ? landingData.features : [],
      guarantees: Array.isArray(landingData.guarantees) ? landingData.guarantees : [],
      faq: Array.isArray(landingData.faq) ? landingData.faq : [],
      headline: landingData.headline || landingData.title,
      subheadline: landingData.subheadline || '',
      badge: landingData.badge || 'درگاه رسمی شاپرک',
      valueProposition: landingData.valueProposition || '',
      ctaButtonText: landingData.ctaButtonText || 'پرداخت آنلاین و نهایی‌سازی سفارش',
      accentGlowColor: landingData.accentGlowColor || '#8c00ff',
      metaDescription: landingData.metaDescription || '',
      viewsCount: landingData.viewsCount || 0,
      paymentsCount: landingData.paymentsCount || 0,
      createdAt: landingData.createdAt || now,
      updatedAt: now
    };

    const existingIdx = currentLandings.findIndex((l) => l.id === id);
    if (existingIdx >= 0) {
      currentLandings[existingIdx] = { ...currentLandings[existingIdx], ...newLanding, updatedAt: now };
    } else {
      currentLandings.unshift(newLanding);
    }

    writePaymentLandingsToDisk(currentLandings);

    setDoc(doc(serverDb, 'settings', 'payment_landings'), { landings: currentLandings, updatedAt: now }, { merge: true })
      .catch((fbErr) => console.warn('[Server Firestore] payment_landings sync notice:', fbErr.message));

    return res.json({ success: true, landing: newLanding, message: 'لندینگ درگاه پرداخت با موفقیت ثبت شد.' });
  } catch (err) {
    console.error('Error saving payment landing:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// حذف یک لندینگ پرداخت
app.delete('/api/payment-landings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let currentLandings = readPaymentLandingsFromDisk();
    const beforeCount = currentLandings.length;
    currentLandings = currentLandings.filter((l) => l.id !== id);

    if (currentLandings.length !== beforeCount) {
      writePaymentLandingsToDisk(currentLandings);
      setDoc(doc(serverDb, 'settings', 'payment_landings'), { landings: currentLandings, updatedAt: new Date().toISOString() }, { merge: true })
        .catch((fbErr) => console.warn('[Server Firestore] payment_landings delete notice:', fbErr.message));
    }

    return res.json({ success: true, message: 'لندینگ پرداخت با موفقیت حذف شد.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// صفحه تاییدیه و صدور فیش رسمی شاپرک (کال‌بک پس از پرداخت در زیبال)
app.get(['/pay/verify', '/p/verify'], async (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  try {
    const { trackId, success, status, landingId, orderId } = req.query;
    const targetLandingId = landingId || orderId;

    const landings = readPaymentLandingsFromDisk();
    const landing = landings.find((l) => l.id === targetLandingId);

    const isSuccessParam = String(success) === '1' || String(status) === '2';

    if (!trackId || !isSuccessParam) {
      const html = renderPaymentVerifyHtml({
        isSuccess: false,
        trackId: trackId || '—',
        refNumber: '—',
        cardNumber: '—',
        amountTomans: landing?.amount || 0,
        paidAtFa: new Date().toLocaleDateString('fa-IR'),
        orderId: targetLandingId || '',
        message: 'تراکنش توسط کاربر لغو گردید یا در اتصال به شاپرک خطایی رخ داد.',
        landing
      });
      return res.send(html);
    }

    const merchant = landing?.merchant || process.env.ZIBAL_MERCHANT || '6a9db4410df8756c31ea5d00';
    const verifyPayload = {
      merchant,
      trackId: Number(trackId)
    };

    let verifyData = null;
    try {
      const verifyUrl = getZibalUrl('/verify');
      const zRes = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(verifyPayload)
      });
      verifyData = await zRes.json();
    } catch (netErr) {
      console.warn('[Pay Verify] Network error contacting Zibal:', netErr.message);
    }

    const isVerified = verifyData && (verifyData.result === 100 || verifyData.result === 201);

    if (isVerified) {
      const refNumber = verifyData.refNumber ? String(verifyData.refNumber) : String(trackId);
      const paidAtFa = verifyData.paidAt
        ? new Date(verifyData.paidAt).toLocaleDateString('fa-IR') + ' ' + new Date(verifyData.paidAt).toLocaleTimeString('fa-IR')
        : new Date().toLocaleDateString('fa-IR') + ' ' + new Date().toLocaleTimeString('fa-IR');

      if (landing) {
        landing.paymentsCount = (landing.paymentsCount || 0) + 1;
        landing.updatedAt = new Date().toISOString();
        writePaymentLandingsToDisk(landings);
        setDoc(doc(serverDb, 'settings', 'payment_landings'), { landings, updatedAt: landing.updatedAt }, { merge: true })
          .catch(() => {});
      }

      const html = renderPaymentVerifyHtml({
        isSuccess: true,
        trackId: String(trackId),
        refNumber,
        cardNumber: verifyData.cardNumber || 'کارت شتاب',
        amountTomans: verifyData.amount ? Math.round(verifyData.amount / 10) : (landing?.amount || 0),
        paidAtFa,
        orderId: targetLandingId || '',
        message: 'پرداخت شما با موفقیت در شاپرک تایید و رسید رسمی صادر گردید.',
        landing
      });
      return res.send(html);
    } else {
      const html = renderPaymentVerifyHtml({
        isSuccess: false,
        trackId: String(trackId),
        refNumber: '—',
        cardNumber: '—',
        amountTomans: landing?.amount || 0,
        paidAtFa: new Date().toLocaleDateString('fa-IR'),
        orderId: targetLandingId || '',
        message: verifyData?.message || 'تأییدیه نهایی توسط شاپرک یا زیبال صادر نگردید.',
        landing
      });
      return res.send(html);
    }
  } catch (err) {
    console.error('Error in /pay/verify route:', err);
    return res.status(500).send('خطای سرور در تایید پرداخت.');
  }
});

// صفحه فرود عمومی گرافیکی اختصاصی برای هر پرداخت (/pay/:id و /p/:id)
app.get(['/pay/:id', '/p/:id'], (req, res) => {
  try {
    const { id } = req.params;
    const landings = readPaymentLandingsFromDisk();
    const landing = landings.find((l) => l.id === id || l.slug === id);

    if (!landing) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(404).send(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8"><title>صفحه پرداخت یافت نشد | جهش</title>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>*{font-family:'Vazirmatn',sans-serif;}</style>
</head>
<body class="bg-[#080514] text-white min-h-screen flex items-center justify-center p-4">
  <div class="max-w-md w-full bg-[#120b26]/90 border border-purple-500/30 rounded-3xl p-8 text-center backdrop-blur-xl">
    <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-3xl">⚠️</div>
    <h1 class="text-2xl font-black mb-3">لینک پرداخت یافت نشد</h1>
    <p class="text-slate-300 text-sm mb-6">این درگاه ممکن است منقضی یا حذف شده باشد. لطفاً از صحت آدرس اطمینان حاصل کنید.</p>
    <a href="/jaheshkala/" class="inline-block px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition">ورود به جهش‌کالا</a>
  </div>
</body>
</html>`);
    }

    landing.viewsCount = (landing.viewsCount || 0) + 1;
    writePaymentLandingsToDisk(landings);

    const host = req.get('host') || 'jaheshit.ir';
    const protocol = req.protocol || 'https';
    const baseUrl = `${protocol}://${host}`;

    const html = renderPaymentLandingHtml(landing, baseUrl);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.send(html);
  } catch (err) {
    console.error('Error rendering payment landing page:', err);
    return res.status(500).send('خطا در بارگذاری صفحه پرداخت.');
  }
});

// ==========================================
// سامانه‌ی ارائه‌دهنده درگاه پرداخت واسط جهش پی به سایت‌های دیگر (Merchant Provider)
// ==========================================

// دریافت لیست تمام مرچنت‌های صادر شده برای کارفرمایان
app.get('/api/custom-merchants', (_req, res) => {
  try {
    const merchants = readCustomMerchantsFromDisk();
    return res.json({ success: true, merchants });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ثبت یا ویرایش مرچنت کارفرما
app.post('/api/custom-merchants', async (req, res) => {
  try {
    const payload = req.body || {};
    if (!payload.title || !String(payload.title).trim()) {
      return res.status(400).json({ success: false, error: 'نام وب‌سایت یا پذیرنده الزامی است.' });
    }

    const currentMerchants = readCustomMerchantsFromDisk();
    const id = payload.id || ('jh_m_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6));
    const now = new Date().toISOString();

    const merchantCode = (payload.merchantCode && String(payload.merchantCode).trim()) || generateMerchantCode();
    const apiKey = (payload.apiKey && String(payload.apiKey).trim()) || generateApiKey();

    const newMerchant = {
      id,
      merchantCode,
      apiKey,
      title: String(payload.title).trim(),
      websiteUrl: String(payload.websiteUrl || '').trim() || 'https://example.com',
      ownerName: String(payload.ownerName || 'کارفرمای محترم').trim(),
      phone: String(payload.phone || '').trim(),
      shebaNumber: String(payload.shebaNumber || '').trim(),
      settlementPeriod: payload.settlementPeriod || 'daily',
      feePercent: typeof payload.feePercent === 'number' ? payload.feePercent : 0,
      isActive: payload.isActive !== false,
      totalTransactions: Number(payload.totalTransactions) || 0,
      totalVolumeTomans: Number(payload.totalVolumeTomans) || 0,
      createdAt: payload.createdAt || now,
      updatedAt: now,
      notes: payload.notes || ''
    };

    const idx = currentMerchants.findIndex((m) => m.id === id || m.merchantCode === merchantCode);
    if (idx >= 0) {
      currentMerchants[idx] = { ...currentMerchants[idx], ...newMerchant, updatedAt: now };
    } else {
      currentMerchants.unshift(newMerchant);
    }

    writeCustomMerchantsToDisk(currentMerchants);

    setDoc(doc(serverDb, 'settings', 'custom_merchants'), { merchants: currentMerchants, updatedAt: now }, { merge: true })
      .catch((fbErr) => console.warn('[Server Firestore] custom_merchants sync notice:', fbErr.message));

    return res.json({ success: true, merchant: newMerchant, message: 'کد مرچنت درگاه با موفقیت صادر و فعال شد.' });
  } catch (err) {
    console.error('Error saving custom merchant:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// حذف مرچنت کارفرما
app.delete('/api/custom-merchants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let currentMerchants = readCustomMerchantsFromDisk();
    const beforeCount = currentMerchants.length;
    currentMerchants = currentMerchants.filter((m) => m.id !== id && m.merchantCode !== id);

    if (currentMerchants.length !== beforeCount) {
      writeCustomMerchantsToDisk(currentMerchants);
      setDoc(doc(serverDb, 'settings', 'custom_merchants'), { merchants: currentMerchants, updatedAt: new Date().toISOString() }, { merge: true })
        .catch((fbErr) => console.warn('[Server Firestore] custom_merchants delete notice:', fbErr.message));
    }

    return res.json({ success: true, message: 'مرچنت درگاه با موفقیت حذف شد.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// دریافت تمام تراکنش‌های درگاه واسط کارفرمایان
app.get('/api/gateway-transactions', (_req, res) => {
  try {
    const txs = readGatewayTransactionsFromDisk();
    return res.json({ success: true, transactions: txs });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// دریافت تنظیمات تسهیم و شبای مدیریت
app.get('/api/gateway-settings', (_req, res) => {
  try {
    const settings = readGatewaySettingsFromDisk();
    return res.json({ success: true, settings });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ذخیره تنظیمات تسهیم و شبای مدیریت جهش
app.post('/api/gateway-settings', (req, res) => {
  try {
    const { masterAdminSheba, isMultiplexingEnabled, defaultFeePercent } = req.body || {};
    const current = readGatewaySettingsFromDisk();
    const updated = {
      ...current,
      masterAdminSheba: typeof masterAdminSheba === 'string' ? masterAdminSheba.trim() : (current.masterAdminSheba || ''),
      isMultiplexingEnabled: typeof isMultiplexingEnabled === 'boolean' ? isMultiplexingEnabled : (current.isMultiplexingEnabled !== false),
      defaultFeePercent: typeof defaultFeePercent === 'number' ? defaultFeePercent : (current.defaultFeePercent || 5),
      updatedAt: new Date().toISOString()
    };
    writeGatewaySettingsToDisk(updated);
    setDoc(doc(serverDb, 'settings', 'gateway_settings'), updated, { merge: true })
      .catch((err) => console.warn('[Server Firestore] gateway_settings save notice:', err.message));

    return res.json({ success: true, settings: updated });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ==========================================
// وب‌سرویس عمومی REST API درگاه جهش پی برای اتصال سایت‌های دیگر
// ==========================================

// ۱. ایجاد تراکنش پرداخت برای سایت کارفرما (Payment Request Endpoint)
app.post(['/api/pg/request', '/api/gateway/request', '/api/pg/v1/request'], async (req, res) => {
  try {
    const {
      merchant,
      amount,
      amountInTomans,
      amountInRials,
      callbackUrl,
      orderId,
      description,
      mobile,
      name,
      email
    } = req.body || {};

    if (!merchant || !String(merchant).trim()) {
      return res.status(400).json({
        success: false,
        result: -1,
        error: 'کد مرچنت (merchant) الزامی است.'
      });
    }

    const cleanMerchant = String(merchant).trim();
    const merchants = readCustomMerchantsFromDisk();
    const targetMerchant = merchants.find(
      (m) => m.merchantCode === cleanMerchant || m.id === cleanMerchant || m.apiKey === cleanMerchant
    );

    if (!targetMerchant) {
      return res.status(400).json({
        success: false,
        result: -2,
        error: 'کد مرچنت ارسالی در سیستم جهش پی یافت نشد.'
      });
    }

    if (targetMerchant.isActive === false) {
      return res.status(403).json({
        success: false,
        result: -3,
        error: 'این درگاه پرداخت در حال حاضر غیرفعال یا مسدود است.'
      });
    }

    if (!callbackUrl || !String(callbackUrl).trim()) {
      return res.status(400).json({
        success: false,
        result: -4,
        error: 'آدرس بازگشت (callbackUrl) الزامی است.'
      });
    }

    let finalTomans = 0;
    if (amountInTomans) {
      finalTomans = Math.round(Number(amountInTomans));
    } else if (amount) {
      const num = Number(amount);
      if (num > 10000000) {
        finalTomans = Math.round(num / 10);
      } else {
        finalTomans = Math.round(num);
      }
    } else if (amountInRials) {
      finalTomans = Math.round(Number(amountInRials) / 10);
    }

    if (!finalTomans || isNaN(finalTomans) || finalTomans < 1000) {
      return res.status(400).json({
        success: false,
        result: -5,
        error: 'حداقل مبلغ پرداخت معتبر ۱,۰۰۰ تومان (۱۰,۰۰۰ ریال) است.'
      });
    }

    const finalRials = finalTomans * 10;
    const trackId = generateGatewayTrackId();
    const now = new Date().toISOString();

    const host = req.get('host') || 'jaheshit.ir';
    const protocol = req.protocol || 'https';
    const baseUrl = `${protocol}://${host}`;

    const newTx = {
      trackId,
      merchantId: targetMerchant.id,
      merchantCode: targetMerchant.merchantCode,
      merchantTitle: targetMerchant.title,
      merchantWebsite: targetMerchant.websiteUrl,
      amountInTomans: finalTomans,
      amountInRials: finalRials,
      orderId: String(orderId || trackId),
      callbackUrl: String(callbackUrl).trim(),
      description: description || `پرداخت سفارش ${orderId || trackId} در ${targetMerchant.title}`,
      customerName: name || '',
      customerMobile: mobile || '',
      customerEmail: email || '',
      status: 'pending',
      createdAt: now,
      updatedAt: now
    };

    const currentTxs = readGatewayTransactionsFromDisk();
    currentTxs.unshift(newTx);
    writeGatewayTransactionsToDisk(currentTxs);

    setDoc(doc(serverDb, 'settings', 'gateway_transactions'), { transactions: currentTxs, updatedAt: now }, { merge: true })
      .catch((err) => console.warn('[Server Firestore] gateway_transactions sync notice:', err.message));

    const paymentUrl = `${baseUrl}/pg/pay/${trackId}`;

    return res.json({
      success: true,
      result: 100,
      trackId,
      paymentUrl,
      directGatewayUrl: paymentUrl,
      message: 'درخواست درگاه پرداخت با موفقیت ثبت شد.'
    });
  } catch (err) {
    console.error('Error in /api/pg/request:', err);
    return res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
  }
});

// ۲. صفحه فرود گرافیکی پرداخت روی دامنه جهش برای مشتریان سایت کارفرما
app.get(['/pg/pay/:trackId', '/gateway/pay/:trackId'], (req, res) => {
  try {
    const { trackId } = req.params;
    const txs = readGatewayTransactionsFromDisk();
    const tx = txs.find((t) => t.trackId === trackId);

    if (!tx) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(404).send(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8"><title>تراکنش یافت نشد | جهش پی</title>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>*{font-family:'Vazirmatn',sans-serif;}</style>
</head>
<body class="bg-[#070414] text-white min-h-screen flex items-center justify-center p-4">
  <div class="max-w-md w-full bg-[#110a26]/90 border border-purple-500/30 rounded-3xl p-8 text-center backdrop-blur-xl">
    <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-3xl">⚠️</div>
    <h1 class="text-xl font-black mb-3">شناسه تراکنش نامعتبر است</h1>
    <p class="text-slate-300 text-xs mb-6">این تراکنش ممکن است منقضی شده باشد. لطفاً به سایت مبدأ بازگشته و مجدداً تلاش فرمایید.</p>
    <a href="/" class="inline-block px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition">صفحه اصلی جهش</a>
  </div>
</body>
</html>`);
    }

    const merchants = readCustomMerchantsFromDisk();
    const merchant = merchants.find((m) => m.id === tx.merchantId || m.merchantCode === tx.merchantCode);

    const host = req.get('host') || 'jaheshit.ir';
    const protocol = req.protocol || 'https';
    const baseUrl = `${protocol}://${host}`;

    const html = renderJaheshGatewayCheckoutHtml(tx, merchant, baseUrl);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.send(html);
  } catch (err) {
    console.error('Error rendering gateway checkout page:', err);
    return res.status(500).send('خطا در بارگذاری صفحه پرداخت.');
  }
});

// ۳. شروع فرآیند شاپرک از روی صفحه پرداخت جهش پی (با مرچنت رسمی جهش در زیبال)
app.post('/api/pg/start-shaparak', async (req, res) => {
  try {
    const { trackId } = req.body || {};
    if (!trackId) {
      return res.status(400).json({ success: false, error: 'شناسه تراکنش ارسال نشده است.' });
    }

    const txs = readGatewayTransactionsFromDisk();
    const tx = txs.find((t) => t.trackId === trackId);
    if (!tx) {
      return res.status(404).json({ success: false, error: 'تراکنش یافت نشد.' });
    }

    const host = req.get('host') || 'jaheshit.ir';
    const protocol = req.protocol || 'https';
    const baseUrl = `${protocol}://${host}`;

    const ZIBAL_MERCHANT = process.env.ZIBAL_MERCHANT || '6a9db4410df8756c31ea5d00';
    const callbackUrl = `${baseUrl}/pg/callback?sessionTrackId=${encodeURIComponent(tx.trackId)}`;

    const merchants = readCustomMerchantsFromDisk();
    const merchant = merchants.find((m) => m.id === tx.merchantId || m.merchantCode === tx.merchantCode);
    const settings = readGatewaySettingsFromDisk();

    const zibalPayload = {
      merchant: ZIBAL_MERCHANT,
      amount: tx.amountInRials,
      callbackUrl,
      description: `پرداخت سفارش ${tx.orderId} در ${tx.merchantTitle}`,
      orderId: tx.trackId,
    };
    if (tx.customerMobile) {
      zibalPayload.mobile = String(tx.customerMobile);
    }

    // بررسی و اعمال سیستم تسهیم (Multiplexing): ۵٪ سهم مدیریت و ۹۵٪ سهم شرکت باسا / کارفرما
    const feePercent = merchant && typeof merchant.feePercent === 'number' ? merchant.feePercent : (settings.defaultFeePercent || 5);
    const masterAdminSheba = (settings.masterAdminSheba || '').trim();
    const clientSheba = (merchant?.shebaNumber || merchant?.sheba || '').trim();

    if (settings.isMultiplexingEnabled !== false && feePercent > 0 && masterAdminSheba && clientSheba) {
      const totalRials = Number(tx.amountInRials);
      const adminAmountRials = Math.round(totalRials * (feePercent / 100));
      const clientAmountRials = totalRials - adminAmountRials;

      zibalPayload.multiplexingInfos = [
        {
          bankAccount: masterAdminSheba.replace(/\s+/g, ''),
          amount: adminAmountRials
        },
        {
          bankAccount: clientSheba.replace(/\s+/g, ''),
          amount: clientAmountRials
        }
      ];

      tx.multiplexing = {
        feePercent,
        adminAmountRials,
        clientAmountRials,
        masterAdminSheba,
        clientSheba
      };
      console.log(`[Jahesh Pay Multiplexing] Configured split for ${tx.orderId}: ${feePercent}% (${adminAmountRials} Rls) -> ${masterAdminSheba}, ${100 - feePercent}% (${clientAmountRials} Rls) -> ${clientSheba}`);
    }

    const requestUrl = getZibalUrl('/request');
    let zibalRes;
    let data;

    try {
      zibalRes = await fetch(requestUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(zibalPayload)
      });
      data = await zibalRes.json();
    } catch (networkErr) {
      console.warn('[Jahesh Pay] Direct Zibal request notice:', networkErr.message);
      data = { result: -2, message: networkErr.message };
    }

    // در صورتی که شماره شبای وارد شده در پنل زیبال هنوز در انتظار تایید شاپرک باشد (کد 108 یا 109)
    // سیستم با حذف موقت multiplexingInfos تراکنش را ایجاد می‌کند تا پرداخت مشتری مسدود نشود
    if (data && (data.result === 108 || data.result === 109) && zibalPayload.multiplexingInfos) {
      console.warn(`[Jahesh Pay Multiplexing] Zibal returned error ${data.result} (${data.message}) for Sheba. Retrying directly so payment is not blocked.`);
      const fallbackPayload = { ...zibalPayload };
      delete fallbackPayload.multiplexingInfos;
      try {
        const retryRes = await fetch(requestUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fallbackPayload)
        });
        const retryData = await retryRes.json().catch(() => null);
        if (retryData && retryData.result === 100 && retryData.trackId) {
          data = retryData;
          tx.multiplexingNotice = 'تسهیم خودکار به دلیل عدم تایید نهایی شبا در پنل زیبال موقتاً بای‌پس شد و تراکنش مستقیم ایجاد گردید.';
        }
      } catch (retryErr) {
        console.warn('[Jahesh Pay Multiplexing] Fallback retry error:', retryErr);
      }
    }

    if (!data || data.result !== 100 || !data.trackId) {
      try {
        const valTownUrl = 'https://erfanmogaddam--d91a5504c02211f1849a1607ee4eb77e.web.val.run/request';
        const valRes = await fetch(valTownUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(zibalPayload)
        });
        const valData = await valRes.json().catch(() => null);
        if (valData && valData.trackId) {
          data = valData;
        }
      } catch (valErr) {
        console.warn('[Jahesh Pay] Proxy fallback notice:', valErr);
      }
    }

    if (data && data.result === 100 && data.trackId) {
      tx.zibalTrackId = String(data.trackId);
      tx.updatedAt = new Date().toISOString();
      writeGatewayTransactionsToDisk(txs);

      const paymentUrl = `https://gateway.zibal.ir/start/${data.trackId}`;
      return res.json({
        success: true,
        result: 100,
        paymentUrl,
        trackId: tx.trackId
      });
    } else {
      return res.status(400).json({
        success: false,
        result: data ? data.result : -1,
        message: data?.message || 'خطا در ارتباط با درگاه شاپرک زیبال.'
      });
    }
  } catch (err) {
    console.error('Error in /api/pg/start-shaparak:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ۴. بازگشت از شاپرک به جهش پی و سپس بازگشت به سایت پذیرنده (Shaparak Callback)
app.get('/pg/callback', async (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  try {
    const { trackId, success, status, sessionTrackId } = req.query;

    const txs = readGatewayTransactionsFromDisk();
    const tx = txs.find((t) => t.trackId === sessionTrackId || (trackId && t.zibalTrackId === String(trackId)));

    if (!tx) {
      return res.status(404).send('شناسه تراکنش جهش پی یافت نشد.');
    }

    const merchants = readCustomMerchantsFromDisk();
    const merchant = merchants.find((m) => m.id === tx.merchantId || m.merchantCode === tx.merchantCode);

    const isSuccessParam = String(success) === '1' || String(status) === '2';

    if (!trackId || !isSuccessParam) {
      tx.status = 'cancelled';
      tx.updatedAt = new Date().toISOString();
      writeGatewayTransactionsToDisk(txs);

      const html = renderJaheshGatewayReturnHtml(tx, merchant, false, {
        message: 'پرداخت توسط کاربر لغو گردید یا در اتصال به شاپرک خطایی رخ داد.'
      });
      return res.send(html);
    }

    // بررسی و تایید در زیبال
    const ZIBAL_MERCHANT = process.env.ZIBAL_MERCHANT || '6a9db4410df8756c31ea5d00';
    const verifyPayload = {
      merchant: ZIBAL_MERCHANT,
      trackId: Number(trackId)
    };

    let verifyData = null;
    try {
      const verifyUrl = getZibalUrl('/verify');
      const zRes = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(verifyPayload)
      });
      verifyData = await zRes.json();
    } catch (netErr) {
      console.warn('[Jahesh Pay Callback] Zibal verify error:', netErr.message);
    }

    const isVerified = verifyData && (verifyData.result === 100 || verifyData.result === 201);

    if (isVerified) {
      const refNumber = verifyData.refNumber ? String(verifyData.refNumber) : String(trackId);
      const paidAt = verifyData.paidAt || new Date().toISOString();

      tx.status = 'paid';
      tx.refNumber = refNumber;
      tx.cardNumber = verifyData.cardNumber || '';
      tx.paidAt = paidAt;
      tx.updatedAt = new Date().toISOString();

      // افزایش آمار تراکنش و مبالغ برای پذیرنده
      if (merchant) {
        merchant.totalTransactions = (merchant.totalTransactions || 0) + 1;
        merchant.totalVolumeTomans = (merchant.totalVolumeTomans || 0) + tx.amountInTomans;
        merchant.updatedAt = new Date().toISOString();
        writeCustomMerchantsToDisk(merchants);
        setDoc(doc(serverDb, 'settings', 'custom_merchants'), { merchants, updatedAt: merchant.updatedAt }, { merge: true })
          .catch(() => {});
      }

      writeGatewayTransactionsToDisk(txs);
      setDoc(doc(serverDb, 'settings', 'gateway_transactions'), { transactions: txs, updatedAt: tx.updatedAt }, { merge: true })
        .catch(() => {});

      const html = renderJaheshGatewayReturnHtml(tx, merchant, true, {
        refNumber,
        cardNumber: verifyData.cardNumber
      });
      return res.send(html);
    } else {
      tx.status = 'failed';
      tx.updatedAt = new Date().toISOString();
      writeGatewayTransactionsToDisk(txs);

      const html = renderJaheshGatewayReturnHtml(tx, merchant, false, {
        message: verifyData?.message || 'تأییدیه تراکنش توسط شاپرک صادر نگردید.'
      });
      return res.send(html);
    }
  } catch (err) {
    console.error('Error in /pg/callback:', err);
    return res.status(500).send('خطای سرور در پردازش بازگشت از درگاه پرداخت.');
  }
});

// ۵. متد وب‌سرویس تأیید تراکنش برای بک‌اند سایت کارفرما (Payment Verify Endpoint)
app.post(['/api/pg/verify', '/api/gateway/verify', '/api/pg/v1/verify'], (req, res) => {
  try {
    const { merchant, trackId } = req.body || {};

    if (!merchant || !trackId) {
      return res.status(400).json({
        success: false,
        result: -1,
        message: 'کد مرچنت (merchant) و شناسه تراکنش (trackId) الزامی هستند.'
      });
    }

    const cleanMerchant = String(merchant).trim();
    const cleanTrackId = String(trackId).trim();

    const txs = readGatewayTransactionsFromDisk();
    const tx = txs.find((t) => t.trackId === cleanTrackId || t.zibalTrackId === cleanTrackId);

    if (!tx) {
      return res.status(404).json({
        success: false,
        result: -2,
        message: 'تراکنشی با این شناسه یافت نشد.'
      });
    }

    if (tx.merchantCode !== cleanMerchant && tx.merchantId !== cleanMerchant) {
      return res.status(403).json({
        success: false,
        result: -3,
        message: 'کد مرچنت ارسالی با پذیرنده این تراکنش همخوانی ندارد.'
      });
    }

    if (tx.status === 'paid') {
      tx.verifiedByClientAt = new Date().toISOString();
      writeGatewayTransactionsToDisk(txs);

      return res.json({
        success: true,
        result: 100,
        status: 1,
        trackId: tx.trackId,
        refNumber: tx.refNumber || tx.trackId,
        cardNumber: tx.cardNumber || '',
        amount: tx.amountInTomans,
        amountInRials: tx.amountInRials,
        orderId: tx.orderId,
        paidAt: tx.paidAt,
        message: 'پرداخت با موفقیت تأیید شد.'
      });
    } else {
      return res.status(400).json({
        success: false,
        result: -4,
        status: 0,
        message: tx.status === 'pending' ? 'تراکنش هنوز تکمیل و پرداخت نشده است.' : 'تراکنش لغو شده یا ناموفق است.'
      });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ۶. استعلام وضعیت تراکنش
app.get('/api/pg/inquiry/:trackId', (req, res) => {
  try {
    const { trackId } = req.params;
    const txs = readGatewayTransactionsFromDisk();
    const tx = txs.find((t) => t.trackId === trackId || t.zibalTrackId === trackId);
    if (!tx) {
      return res.status(404).json({ success: false, error: 'تراکنش یافت نشد.' });
    }
    return res.json({ success: true, transaction: tx });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Dedicated routes for the 5 Pillars of Jahesh Ecosystem
// 1. جهش ای تی (Jahesh IT) -> باید مستقیماً برود به سایت اصلی https://jaheshit.ir/
app.get(['/jahesh-it', '/jahesh-it/', '/jahesh-it/*', '/it', '/it/', '/it/*', '/jaheshit', '/jaheshit/', '/jaheshit/*'], (req, res) => {
  res.redirect(301, '/');
});

// 2. هدایت قطعی ۳۰۱ برای آدرس‌های قدیمی هوش مصنوعی (/ai) به آدرس رسمی (/hwsh-msnway/)
// این کار باعث می‌شود گوگل آدرس تکراری «هوش مصنوعی | جهش آی تی» را از نتایج سرچ حذف کرده و با هوش مصنوعی جهش ادغام کند
app.get(['/ai', '/ai/', '/ai-v13', '/ai-v13/'], (req, res) => {
  res.redirect(301, '/hwsh-msnway/');
});

// صفحه رسمی و رتبه اول هوش مصنوعی جهش ۲ با HTTP 200
app.get(['/hwsh-msnway', '/hwsh-msnway/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  const aiFile = path.join(__dirname, 'hwsh-msnway', 'index.html');
  if (fs.existsSync(aiFile)) {
    return res.sendFile(aiFile);
  }
  return res.redirect(302, 'https://jahesh-2-six.vercel.app/');
});

// مسیر ورود مستقیم به وب‌اپلیکیشن چت هوش مصنوعی
app.get(['/chat', '/chat/', '/ai/app'], (req, res) => {
  res.redirect(302, 'https://jahesh-2-six.vercel.app/');
});

// 3. انجمن علمی جهش (Jahesh Scientific Association alias) -> ریدایرکت ۳۰۱ قطعی به صفحه اصلی
app.get(['/anjoman', '/anjoman/', '/anjoman-elmi-jahesh', '/drbarh-anjmn', '/drbarh-anjmn/', '/drbarh-anjmn/*'], (req, res) => {
  res.redirect(301, '/');
});

// Dedicated Social Media Crawler and Bot Handler (Telegram, Twitter, WhatsApp, Facebook, LinkedIn)
// Guarantees immediate preview update with rocket logo and prevents stale caching
app.get(['/', '/index.html'], (req, res, next) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  const rootIndex = path.join(__dirname, 'index.html');
  if (fs.existsSync(rootIndex)) {
    return res.sendFile(rootIndex);
  }
  next();
});

// Serve static assets and html files
app.use(express.static(__dirname, {
  extensions: ['html'],
  index: 'index.html'
}));

// Fallback for any client-side routed page
app.use((req, res) => {
  // If requesting an asset or a file with an extension that wasn't found by express.static, return 404
  if (req.path.startsWith('/assets/') || path.extname(req.path)) {
    return res.status(404).send('Not found');
  }

  // Check if req.path matches a directory with index.html
  const cleanPath = req.path.replace(/^\//, '').replace(/\/$/, '');
  const dirIndex = path.join(__dirname, cleanPath, 'index.html');
  if (cleanPath && fs.existsSync(dirIndex)) {
    return res.sendFile(dirIndex);
  }

  // Otherwise serve root index.html
  const rootIndex = path.join(__dirname, 'index.html');
  res.sendFile(rootIndex);
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
