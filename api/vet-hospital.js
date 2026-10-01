import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data', 'vet_hospital');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DEPARTMENTS_FILE = path.join(DATA_DIR, 'departments.json');
const PROFESSORS_FILE = path.join(DATA_DIR, 'professors.json');
const APPOINTMENTS_FILE = path.join(DATA_DIR, 'appointments.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Helpers for reading/writing JSON data
export function readVetUsers() {
  if (fs.existsSync(USERS_FILE)) {
    try {
      const raw = fs.readFileSync(USERS_FILE, 'utf8');
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Error reading users.json:', e);
    }
  }
  return [];
}

export function writeVetUsers(list) {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(list, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Error writing users.json:', e);
    return false;
  }
}

export function readVetDepartments() {
  if (fs.existsSync(DEPARTMENTS_FILE)) {
    try {
      const raw = fs.readFileSync(DEPARTMENTS_FILE, 'utf8');
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Error reading departments.json:', e);
    }
  }
  return [];
}

export function readVetProfessors() {
  if (fs.existsSync(PROFESSORS_FILE)) {
    try {
      const raw = fs.readFileSync(PROFESSORS_FILE, 'utf8');
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Error reading professors.json:', e);
    }
  }
  return [];
}

export function writeVetProfessors(list) {
  try {
    fs.writeFileSync(PROFESSORS_FILE, JSON.stringify(list, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Error writing professors.json:', e);
    return false;
  }
}

export function readVetAppointments() {
  if (fs.existsSync(APPOINTMENTS_FILE)) {
    try {
      const raw = fs.readFileSync(APPOINTMENTS_FILE, 'utf8');
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Error reading appointments.json:', e);
    }
  }
  return [];
}

export function writeVetAppointments(list) {
  try {
    fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(list, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Error writing appointments.json:', e);
    return false;
  }
}

// AI Clinical Triage & Department Classification Knowledge Engine
export function performAiVeterinaryTriage(payload) {
  const { animalType = '', animalBreed = '', symptoms = '', age = '', additionalNotes = '' } = payload;
  const fullText = `${animalType} ${animalBreed} ${symptoms} ${additionalNotes}`.toLowerCase();

  let targetDepartmentId = 'internal-small';
  let targetDepartmentName = 'بخش بیماری‌های درونی دام‌های کوچک و پرندگان زینتی';
  let urgencyLevel = 'medium'; // 'low' | 'medium' | 'high' | 'critical'
  let urgencyText = 'متوسط (نیاز به ویزیت تخصصی در ۲۴ ساعت آینده)';
  let urgencyBadgeColor = 'amber';
  let recommendedTests = [];
  let possibleConditions = [];
  let primaryAdvice = '';

  // 1. Pathobiology & Lab Tests
  if (
    fullText.includes('پاتولوژی') || fullText.includes('پاتوبیولوژی') || fullText.includes('توده') ||
    fullText.includes('تومور') || fullText.includes('نمونه برداری') || fullText.includes('بیوپسی') ||
    fullText.includes('آزمایش خون') || fullText.includes('سرولوژی') || fullText.includes('pcr') ||
    fullText.includes('زخم مزمن') || fullText.includes('عفونت خون') || fullText.includes('زردی') ||
    fullText.includes('ضایعه مشکوک') || fullText.includes('سلول') || fullText.includes('غدد لنفاوی') ||
    fullText.includes('کم خونی شدید')
  ) {
    targetDepartmentId = 'pathobiology';
    targetDepartmentName = 'بخش پاتوبیولوژی و آزمایشگاه بالینی';
    urgencyLevel = 'medium';
    urgencyText = 'تخصصی آزمایشگاهی (نیازمند نمونه‌برداری پاتولوژی و سیتولوژی)';
    urgencyBadgeColor = 'purple';
    possibleConditions = [
      'نئوپلازی یا توده خوش‌خیم/بدخیم سلولی (Neoplasia / Tumor)',
      'لنفادنوپاتی واکنشی یا التهاب غدد لنفاوی',
      'کم‌خونی همولیتیک یا اختلالات مغز استخوان',
      'عفونت باکتریایی/قارچی مقاوم نیازمند کشت و آنتی‌بیوگرام'
    ];
    recommendedTests = [
      'آزمایش کامل شمارش گلبول‌های خون (CBC Diff)',
      'آسپیراسیون سوزن ظریف و سیتولوژی لام (FNA)',
      'بیوپسی بافتی و بررسی هیستوپاتولوژی',
      'پانل بیوشیمی جامع کبد و کلیه (ALT, AST, BUN, Cr)'
    ];
    primaryAdvice = 'از دستکاری و فشردن هرگونه توده یا برآمدگی خودداری فرمایید. جهت تشخیص دقیق نوع سلول‌ها، نمونه‌برداری بافت در بخش پاتوبیولوژی الزامی است.';
  }
  // 2. Surgery & Orthopedics
  else if (
    fullText.includes('شکستگی') || fullText.includes('لنگش') || fullText.includes('تصادف') ||
    fullText.includes('افتادن') || fullText.includes('ضرب دیدگی') || fullText.includes('عمل جراحی') ||
    fullText.includes('عقیم سازی') || fullText.includes('فتق') || fullText.includes('رباط') ||
    fullText.includes('پارگی') || fullText.includes('زانو') || fullText.includes('ستون فقرات') ||
    fullText.includes('فلج') || fullText.includes('دررفتگی') || fullText.includes('جرم گیری') ||
    fullText.includes('چشم') || fullText.includes('قرنیه')
  ) {
    targetDepartmentId = 'surgery-anesthesia';
    targetDepartmentName = 'بخش جراحی، ارتوپدی و بیهوشی';
    urgencyLevel = fullText.includes('تصادف') || fullText.includes('خونریزی') || fullText.includes('فلج') ? 'high' : 'medium';
    urgencyText = urgencyLevel === 'high' ? 'فوری / اورژانسی جراحی' : 'نیازمند معاینه جراحی و ارتوپدی';
    urgencyBadgeColor = 'rose';
    possibleConditions = [
      'شکستگی حاد استخوانی یا ترک‌خوردگی مفصل',
      'پارگی رباط متقاطع صلیبی زانو (Cranial Cruciate Ligament Rupture)',
      'دررفتگی کشکک زانو (Patellar Luxation)',
      'فتق شکمی یا اینگوینال (Hernia)',
      'زخم عمیق قرنیه یا ضایعات تروماتیک چشم'
    ];
    recommendedTests = [
      'رادیوگرافی در دو نمای ارتوپدی (Digital X-Ray)',
      'معاینه بالینی دامنه حرکتی و تست کشویی زانو',
      'آزمایشات قبل از بیهوشی عمومی (Pre-Anesthetic CBC/Biochemistry)'
    ];
    primaryAdvice = 'حیوان را در محیطی محدود و آرام نگه دارید و از هرگونه دویدن، پریدن و فشار آوردن به اندام آسیب‌دیده اکیداً جلوگیری نمایید.';
  }
  // 3. Radiology & Imaging
  else if (
    fullText.includes('سونوگرافی') || fullText.includes('رادیولوژی') || fullText.includes('عکس رادیولوژی') ||
    fullText.includes('اکوکاردیوگرافی') || fullText.includes('عکس ریه') || fullText.includes('بلع جسم خارجی') ||
    fullText.includes('آندوسکوپی') || fullText.includes('سنگ مثانه') || fullText.includes('سنگ کلیه')
  ) {
    targetDepartmentId = 'imaging-radiology';
    targetDepartmentName = 'بخش تصویربرداری تشخیصی و سونوگرافی';
    urgencyLevel = 'medium';
    urgencyText = 'تشخیصی پاراکلینیکی (تصویربرداری و سونوگرافی دیجیتال)';
    urgencyBadgeColor = 'indigo';
    possibleConditions = [
      'احتمال انسداد دستگاه گوارش با جسم خارجی (Foreign Body Obstruction)',
      'سنگ‌های ادراری در کلیه یا مثانه (Urolithiasis)',
      'بزرگ‌شدگی اندام‌های شکمی (ارگانومگالی)',
      'کاردیومیوپاتی یا بیماری‌های دریچه‌ای قلب'
    ];
    recommendedTests = [
      'سونوگرافی کامل شکم و لگن با پروب فرکانس بالا',
      'رادیوگرافی ساده و کنتراست‌دار با باریوم',
      'اکوکاردیوگرافی داپلر رنگی و الکتروکاردیوگرام'
    ];
    primaryAdvice = 'برای سونوگرافی شکمی، حیوان حداقل ۸ الی ۱۲ ساعت ناشتا باشد (آب بلامانع است). مثانه در زمان سونوگرافی ترجیحاً نیمه‌پر باشد.';
  }
  // 4. Large Animals & Equine
  else if (
    animalType.includes('اسب') || animalType.includes('گاو') || animalType.includes('گوسفند') ||
    animalType.includes('بز') || animalType.includes('شتر') || fullText.includes('اسب') ||
    fullText.includes('کره اسب') || fullText.includes('گاو') || fullText.includes('گاوداری') ||
    fullText.includes('کولیک') || fullText.includes('میدریاز') || fullText.includes('تب شیر') ||
    fullText.includes('نفخ شکمبه') || fullText.includes('ورم پستان')
  ) {
    targetDepartmentId = 'internal-large';
    targetDepartmentName = 'بخش بیماری‌های درونی دام‌های بزرگ و نشخوارکنندگان';
    urgencyLevel = fullText.includes('کولیک') ? 'high' : 'medium';
    urgencyText = fullText.includes('کولیک') ? 'اورژانس حیاتی دام بزرگ (کولیک اسب)' : 'ویزیت تخصصی دام‌های بزرگ و گله';
    urgencyBadgeColor = 'amber';
    possibleConditions = [
      'سندرم کولیک و دردهای شکمی حاد اسب (Equine Colic)',
      'بیماری‌های متابولیک و اسیدوز شکمبه در نشخوارکنندگان',
      'ورم پستان حاد دامی (Mastitis)',
      'عفونت‌های تنفسی برونکوپنومونی گوساله‌ها'
    ];
    recommendedTests = [
      'معاینه لوله‌گذاری معدی و بررسی مایع صفاقی (Abdominocentesis)',
      'آنالیز گازهای خون و الکترولیت‌های سرم',
      'سونوگرافی ترانس‌رکتال و ارزیابی حرکات روده'
    ];
    primaryAdvice = 'در صورت علائم کولیک (غلت زدن اسب، سم کوبیدن، تعریق شدید)، از خوراندن هرگونه غذا خودداری کرده و با راه بردن آرام حیوان، منتظر حضور دامپزشک باشید.';
  }
  // 5. Theriogenology & Reproduction
  else if (
    fullText.includes('زایمان') || fullText.includes('بارداری') || fullText.includes('آبستنی') ||
    fullText.includes('سقط') || fullText.includes('فحل') || fullText.includes('نازایی') ||
    fullText.includes('پیومتر') || fullText.includes('عفونت رحم') || fullText.includes('ترشح واژن') ||
    fullText.includes('سزارین') || fullText.includes('جفت ماندگی')
  ) {
    targetDepartmentId = 'theriogenology';
    targetDepartmentName = 'بخش مامایی و بیماری‌های تولید مثل دام';
    urgencyLevel = fullText.includes('سزارین') || fullText.includes('پیومتر') || fullText.includes('زایمان سخت') ? 'high' : 'medium';
    urgencyText = 'تخصصی مامایی و بیماری‌های تولید مثل';
    urgencyBadgeColor = 'rose';
    possibleConditions = [
      'پیومتر (عفونت باکتریایی و چرکی رحم - خطرناک و نیازمند درمان فوری)',
      'دیستوشی یا زایمان سخت (Dystocia)',
      'کیست‌های تخمدانی و بی‌نظمی‌های هورمونی سیکل جنسی',
      'بررسی سلامت و تعداد جنین‌های آبستن'
    ];
    recommendedTests = [
      'سونوگرافی ترانس‌آبدومینال جهت ارزیابی ضربان قلب و زنده بودن جنین‌ها',
      'شمارش گلبول‌های سفید و ارزیابی لوکوسیتوز ناشی از پیومتر',
      'سیتولوژی واژینال و سنجش سطح هورمون پروژسترون'
    ];
    primaryAdvice = 'در صورت مشاهده ترشحات بدبو یا طولانی شدن زایمان بیش از ۲ ساعت، سریعاً حیوان را به بخش مامایی بیمارستان منتقل فرمایید.';
  }
  // 6. Poultry & Birds
  else if (
    animalType.includes('طیور') || animalType.includes('مرغ') || animalType.includes('بوقلمون') ||
    animalType.includes('شترمرغ') || animalType.includes('بلدرچین') || animalType.includes('ماهی') ||
    fullText.includes('مرغداری') || fullText.includes('تلفات گله') || fullText.includes('نیوکاسل') ||
    fullText.includes('آنفلوآنزا') || fullText.includes('کالبدگشایی') || fullText.includes('آبزیان')
  ) {
    targetDepartmentId = 'poultry';
    targetDepartmentName = 'بخش بهداشت و بیماری‌های طیور و آبزیان';
    urgencyLevel = 'medium';
    urgencyText = 'تخصصی طیور و مزارع پرورش';
    urgencyBadgeColor = 'amber';
    possibleConditions = [
      'سندرم‌های ویروسی تنفسی طیور (نیوکاسل، برونشیت عفونی، آنفلوآنزا)',
      'کوکسیدیوز و عفونت‌های روده ای گله',
      'مسمومیت‌های قارچی و مایکوتوکسیکوز جیره',
      'بیماری‌های باکتریایی کلاسیستوزیس و مایکوپلاسموز'
    ];
    recommendedTests = [
      'کالبدگشایی چند قطعه پرنده تلف شده و ارزیابی پاتولوژیک ضایعات',
      'کشت میکروبی از کبد و طحال',
      'تست‌های مولکولی RT-PCR جهت تفکیک سروتیپ‌های ویروسی'
    ];
    primaryAdvice = 'تعدادی از تلفات تازه (زیر ۴ ساعت) یا پرندگان درگیر را درون بسته‌بندی مناسب و در مجاورت یخ برای کالبدگشایی به بخش طیور منتقل نمایید.';
  }
  // 7. Parasitology & Skin
  else if (
    fullText.includes('انگل') || fullText.includes('کک') || fullText.includes('کنه') ||
    fullText.includes('جرب') || fullText.includes('گال') || fullText.includes('قارچ') ||
    fullText.includes('کرم') || fullText.includes('خارش شدید') || fullText.includes('ریزش موی سکه ای') ||
    fullText.includes('پوسته ریزی') || fullText.includes('لیشمانیوز') || fullText.includes('انگل خونی')
  ) {
    targetDepartmentId = 'parasitology';
    targetDepartmentName = 'بخش انگل‌شناسی و قارچ‌شناسی دامپزشکی';
    urgencyLevel = 'low';
    urgencyText = 'بررسی میکروسکوپی انگل‌ها و قارچ‌های جلدی';
    urgencyBadgeColor = 'emerald';
    possibleConditions = [
      'آلودگی به جرب‌های جلدی (سارکوپتس یا دمودکس)',
      'درماتوفیتوزیس و کچلی قارچی (Ringworm - با پتانسیل انتقال به انسان)',
      'آلودگی‌های کرمی دستگاه گوارش (توکسوکارا، دیپیلیدیوم)',
      'انگل‌های منتقله از طریق کنه (بابزیوز یا ارلیشیوز)'
    ];
    recommendedTests = [
      'تراش عمیق پوستی (Skin Scraping) و مشاهده مستقیم میکروسکوپی',
      'کشت قارچی اختصاصی در محیط DTM',
      'آزمایش مدفوع فلوتاسیون تخم انگل‌ها',
      'اسمیر خون محیطی با رنگ‌آمیزی گیمسا'
    ];
    primaryAdvice = 'از شستشوی حیوان یا استفاده از پمادهای موضعی قبل از مراجعه جهت جلوگیری از منفی کاذب شدن نمونه‌برداری میکروسکوپی خودداری فرمایید.';
  }
  // Default: Small Animal Internal Medicine
  else {
    targetDepartmentId = 'internal-small';
    targetDepartmentName = 'بخش بیماری‌های درونی دام‌های کوچک و پرندگان زینتی';
    urgencyLevel = fullText.includes('بی حال') || fullText.includes('استفراغ') || fullText.includes('اسهال') ? 'medium' : 'low';
    urgencyText = 'معاینه جامع طب بالینی و چکاپ تخصصی';
    urgencyBadgeColor = 'blue';
    possibleConditions = [
      'گاستروانتریت حاد ویروسی یا باکتریایی',
      'اختلالات متابولیک اولیه و کم‌آبی بدن (Dehydration)',
      'بیماری‌های تنفسی فوقانی یا آلرژی فصلی',
      'نیاز به تنظیم پروتکل واکسیناسیون و معاینه سلامت عمومی'
    ];
    recommendedTests = [
      'معاینه بالینی جامع علائم حیاتی (TPR: دما، نبض، تنفس)',
      'تست سریع تشخیصی آنتی‌ژن ویروسی',
      'آزمایش هماتولوژی و بیوشیمی پایه'
    ];
    primaryAdvice = 'تا زمان معاینه توسط پزشک، از خوراندن داروهای انسانی (مانند استامینوفن یا ایبوپروفن که برای حیوانات سمی و کشنده است) اکیداً خودداری فرمایید.';
  }

  // Load active professors for this department
  const allProfessors = readVetProfessors();
  const departmentProfessors = allProfessors.filter(
    (p) => p.departmentId === targetDepartmentId && p.status === 'approved'
  );

  return {
    success: true,
    triageId: 'TRIAGE-' + Date.now().toString(36).toUpperCase(),
    animalSummary: `${animalType || 'حیوان'} (${animalBreed || 'نژاد نامشخص'}) - سن: ${age || 'نامشخص'}`,
    symptomsEvaluated: symptoms,
    targetDepartmentId,
    targetDepartmentName,
    urgencyLevel,
    urgencyText,
    urgencyBadgeColor,
    possibleConditions,
    recommendedTests,
    primaryAdvice,
    professorsCount: departmentProfessors.length,
    departmentProfessors,
    createdAt: new Date().toISOString()
  };
}
