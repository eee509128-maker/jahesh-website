/**
 * سامانه جامع بیمارستان تخصصی و فوق‌تخصصی دانشکده دامپزشکی
 * مرکز بالینی و تحقیقاتی دانشگاه فردوسی مشهد
 * با همکاری انجمن علمی جهش
 */

// ۱. داده‌های اولیه دپارتمان‌های بیمارستان
const INITIAL_DEPARTMENTS = [
  {
    "id": "pathobiology",
    "name": "بخش پاتوبیولوژی و آزمایشگاه بالینی",
    "enName": "Department of Pathobiology & Clinical Pathology",
    "icon": "Microscope",
    "color": "from-purple-600 to-indigo-600",
    "badge": "مجهز به آزمایشگاه فوق‌تخصصی PCR و بیوشیمی",
    "shortDescription": "تشخیص پیشرفته سلولی، خون‌شناسی، پاتولوژی بافت، میکروب‌شناسی، سرولوژی، بیوشیمی و سم‌شناسی بالینی دامپزشکی.",
    "fullDescription": "بخش پاتوبیولوژی بیمارستان دانشکده دامپزشکی با بهره‌گیری از پیشرفته‌ترین تجهیزات آنالیز بیوشیمیایی، دستگاه‌های خودکار هماتولوژی، ریل تایم PCR، الایزا ریدر و اتاق‌های اختصاصی بافت‌شناسی و سیتوپاتولوژی، خدمات تشخیصی دقیق برای انواع نمونه‌های بافتی، مایعات بدن، بیوپسی و تومورهای حیوانات خانگی، دام و طیور را ارائه می‌نماید.",
    "services": [
      "آزمایش خون کامل (CBC) و بیوشیمی بالینی",
      "نمونه‌برداری و سیتولوژی توده‌ها و بیوپسی بافت",
      "کشت باکتریایی، قارچ‌شناسی و آنتی‌بیوگرام تخصصی",
      "آزمایش‌های سرولوژی و تست‌های سریع ویروسی",
      "آنالیز مایع مفصلی، ادرار و مایع مغزی‌نخاعی (CSF)",
      "تست‌های سم‌شناسی و مسمومیت‌های حاد دامی"
    ],
    "headOfDepartment": "مدیریت گروه پاتوبیولوژی و آزمایشگاه بالینی",
    "phone": "۰۵۱-۳۸۸۰۵۲۱۰",
    "room": "ساختمان مرکزی، طبقه ۱، بخش آزمایشگاه‌های تشخیصی"
  },
  {
    "id": "surgery-anesthesia",
    "name": "بخش جراحی، ارتوپدی و بیهوشی",
    "enName": "Department of Surgery, Orthopedics & Anesthesia",
    "icon": "Scissors",
    "color": "from-emerald-600 to-teal-600",
    "badge": "دارای ۳ اتاق عمل اختصاصی مجهز به بیهوشی استنشاقی",
    "shortDescription": "جراحی بافت نرم، ارتوپدی، ستون فقرات، چشم‌پزشکی، دندان‌پزشکی و بیهوشی پیشرفته حیوانات.",
    "fullDescription": "این دپارتمان مجهز به اتاق‌های عمل استریل با سیستم هوارسان هپا، مانیتورینگ علائم حیاتی چندمنظوره، دستگاه بیهوشی استنشاقی ایزوفلوران، کوتر جراحی، ست‌های جراحی میکروسکوپی و ابزار ارتوپدی پیشرفته جهت جراحی شکستگی‌ها، رباط صلیبی (TPLO)، جراحی دیسک و جراحی‌های سر و گردن می‌باشد.",
    "services": [
      "جراحی شکستگی‌های استخوان و تعویض مفاصل",
      "جراحی بافت نرم (عقیم‌سازی، گوارشی، فتق و برداشت تومور)",
      "جراحی تخصصی چشم و قرنیه",
      "خدمات دندانپزشکی، جرم‌گیری اولتراسونیک و کشیدن دندان",
      "بیهوشی ایمن برای حیوانات پرخطر و سالمند با مانیتورینگ کامل",
      "بستری و مراقبت‌های پس از عمل در ICU حیوانات"
    ],
    "headOfDepartment": "مدیریت گروه جراحی، ارتوپدی و بیهوشی",
    "phone": "۰۵۱-۳۸۸۰۵۲۱۵",
    "room": "بخش کلینیکال، طبقه همکف، مجموعه اتاق‌های عمل"
  },
  {
    "id": "internal-small",
    "name": "بخش بیماری‌های درونی دام‌های کوچک و پرندگان زینتی",
    "enName": "Small Animal Internal Medicine & Avian Clinic",
    "icon": "Stethoscope",
    "color": "from-blue-600 to-cyan-600",
    "badge": "کلینیک تخصصی سگ، گربه، خرگوش و طوطی‌سانان",
    "shortDescription": "تشخیص و درمان بیماری‌های قلبی، گوارشی، کلیوی، تنفسی، عفونی و هورمونی حیوانات خانگی.",
    "fullDescription": "کلینیک درونی دام‌های کوچک با حضور اساتید متخصص طب داخلی، کلیه بیماری‌های پیچیده متابولیک، نارسایی کلیه، دیابت، بیماری‌های گوارشی، بیماری‌های تنفسی، عفونت‌های ویروسی (پاروویروس، دیستمپر، پن‌لوکوپنی) و همچنین طب تخصصی پرندگان زینتی و اگزوتیک را ویزیت و درمان می‌نماید.",
    "services": [
      "معاینات دوره‌ای، واکسیناسیون و صدور شناسنامه بهداشتی",
      "مدیریت بیماری‌های متابولیک، غدد و دیابت",
      "درمان نارسایی‌های کلیوی و ادراری با دیالیز صفاقی",
      "مدیریت بیماری‌های مزمن قلبی و تنفسی",
      "کلینیک تخصصی پرندگان زینتی (طوطی، کاسکو، عروس هلندی)",
      "مشاوره تغذیه بالینی و رژیم‌های درمانی اختصاصی"
    ],
    "headOfDepartment": "مدیریت گروه بیماری‌های درونی دام‌های کوچک",
    "phone": "۰۵۱-۳۸۸۰۵۲۲۰",
    "room": "کلینیک حیوانات خانگی، سالن شماره ۱"
  },
  {
    "id": "internal-large",
    "name": "بخش بیماری‌های درونی دام‌های بزرگ و نشخوارکنندگان",
    "enName": "Large Animal Internal Medicine & Equine Clinic",
    "icon": "Cross",
    "color": "from-amber-600 to-orange-600",
    "badge": "کلینیک تخصصی اسب، گاو، گوسفند و شتر",
    "shortDescription": "مدیریت و درمان بیماری‌های متابولیک گله، بیماری‌های تنفسی، کولیک و لنگش در اسب و نشخوارکنندگان.",
    "fullDescription": "این بخش با کادر متخصص و خودروهای کلینیک سیار (Ambulatory Clinic)، علاوه بر پذیرش دام در بیمارستان، خدمات بالینی و گله‌ای را برای گاوداری‌های صنعتی، باشگاه‌های سوارکاری و مزارع پرورش گوسفند در سطح استان ارائه می‌دهد.",
    "services": [
      "تشخیص و درمان اورژانسی کولیک در اسب",
      "پایش سلامت گله و مدیریت بیماری‌های متابولیک گاوداری‌ها",
      "درمان بیماری‌های تنفسی و لنگش در دام‌های سنگین",
      "تزریقات و درمان‌های تخصصی داخل وریدی در جایگاه مخصوص",
      "اعزام تیم کلینیک سیار به فارم‌ها و مجتمع‌های دامپروری"
    ],
    "headOfDepartment": "مدیریت گروه بیماری‌های درونی دام‌های بزرگ",
    "phone": "۰۵۱-۳۸۸۰۵۲۲۵",
    "room": "محوطه دام‌های بزرگ، درمانگاه اسب و نشخوارکنندگان"
  },
  {
    "id": "imaging-radiology",
    "name": "بخش تصویربرداری تشخیصی و سونوگرافی",
    "enName": "Diagnostic Imaging & Ultrasonography",
    "icon": "Activity",
    "color": "from-indigo-600 to-violet-600",
    "badge": "رادیولوژی دیجیتال DR و اکوکاردیوگرافی کالر داپلر",
    "shortDescription": "رادیوگرافی دیجیتال، سونوگرافی با تفکیک بالا، اکوکاردیوگرافی، آندوسکوپی و تصویربرداری مداخله‌ای.",
    "fullDescription": "مجهز به سیستم‌های رادیوگرافی دیجیتال با کمترین دوز تابش، دستگاه‌های سونوگرافی پیشرفته با پروب‌های اختصاصی اندام‌های کوچک و عمقی، اکوکاردیوگرافی داپلر رنگی جهت بررسی دریچه‌های قلب و ریه، و تجهیزات آندوسکوپی و کلونوسکوپی تشخیصی.",
    "services": [
      "رادیوگرافی دیجیتال با کنتراست و بدون کنتراست",
      "سونوگرافی شکمی و لگنی کامل",
      "اکوکاردیوگرافی پیشرفته قلب همراه با الکتروکاردیوگرام (ECG)",
      "آندوسکوپی مجاری گوارشی و برونکوسکوپی ریه",
      "بیوپسی و آسپیراسیون تحت هدایت سونوگرافی (FNA)"
    ],
    "headOfDepartment": "مدیریت گروه تصویربرداری تشخیصی",
    "phone": "۰۵۱-۳۸۸۰۵۲۳۰",
    "room": "ساختمان تشخیصی، طبقه زیرهمکف، واحد رادیولوژی"
  },
  {
    "id": "theriogenology",
    "name": "بخش مامایی و بیماری‌های تولید مثل دام",
    "enName": "Theriogenology & Reproductive Health",
    "icon": "HeartHandshake",
    "color": "from-pink-600 to-rose-600",
    "badge": "سونوگرافی بارداری، درمان ناباروری و انتقال جنین",
    "shortDescription": "کنترل بارداری، مدیریت زایمان‌های سخت، سزارین، انجماد اسپرم، تلقیح مصنوعی و درمان عفونت‌های رحمی.",
    "fullDescription": "ارائه خدمات تخصصی در زمینه تشخیص آبستنی زودهنگام با سونوگرافی، کنترل سیکل فحلی، رفع مشکلات نازایی و سقط جنین، زایمان‌های اورژانسی و جراحی‌های دستگاه تناسلی در سگ، گربه، اسب و دام‌های مزرعه.",
    "services": [
      "تشخیص زودهنگام آبستنی و تعیین تعداد جنین‌ها با اولتراسوند",
      "مدیریت زایمان سخت و انجام سزارین اورژانسی",
      "آنالیز اسپرم، تلقیح مصنوعی و بانک انجماد ژنتیکی",
      "درمان پیومتر (عفونت چرکی رحم) و اختلالات هورمونی تخمدان",
      "مشاوره اصلاح نژاد و بهداشت باروری گله"
    ],
    "headOfDepartment": "مدیریت گروه مامایی و تولید مثل",
    "phone": "۰۵۱-۳۸۸۰۵۲۳۵",
    "room": "بخش بالینی، بال غربی، کلینیک مامایی"
  },
  {
    "id": "poultry",
    "name": "بخش بهداشت و بیماری‌های طیور و آبزیان",
    "enName": "Avian Health, Poultry & Aquaculture",
    "icon": "Feather",
    "color": "from-yellow-600 to-amber-600",
    "badge": "پایش بهداشتی مرغداری‌های صنعتی و کالبدگشایی تخصصی",
    "shortDescription": "کالبدگشایی لاشه، تشخیص بیماری‌های ویروسی و باکتریایی مرغداری‌ها، آزمایش آب و مشاوره مزارع پرورش ماهی.",
    "fullDescription": "انجام کالبدگشایی روزانه طیور صنعتی و زینتی، جداسازی عوامل بیماری‌زا نظیر برونشیت، نیوکاسل، آنفلوآنزا، گامبورو و ارزیابی کیفیت آب، جیره و بهداشت استخرهای آبزیان با کادر متخصص هیئت علمی.",
    "services": [
      "کالبدگشایی تشخیصی پرندگان و ارزیابی ماکروسکوپیک ضایعات",
      "نمونه‌برداری جهت بررسی‌های ویروس‌شناسی و مولکولی",
      "تنظیم برنامه‌های واکسیناسیون و امنیت زیستی مزارع طیور",
      "تشخیص و درمان بیماری‌های ماهیان سردآبی و گرم‌آبی",
      "آنالیز میکروبی و شیمیایی آب استخرها و مزارع"
    ],
    "headOfDepartment": "مدیریت گروه بهداشت و بیماری‌های طیور",
    "phone": "۰۵۱-۳۸۸۰۵۲۴۰",
    "room": "ساختمان سلامت طیور و کلینیک آبزیان"
  },
  {
    "id": "parasitology",
    "name": "بخش انگل‌شناسی و قارچ‌شناسی دامپزشکی",
    "enName": "Veterinary Parasitology & Mycology",
    "icon": "Bug",
    "color": "from-lime-600 to-green-600",
    "badge": "شناسایی سریع انگل‌های پوستی، خونی، گوارشی و زئونوز",
    "shortDescription": "بررسی نماتودها، کرم‌های قلاب‌دار، لیشمانیوز، کنه‌ها، کک‌ها و درماتوفیت‌های قارچی مشترک بین انسان و حیوان.",
    "fullDescription": "تشخیص قطعی انواع انگل‌های خارجی (گال، دمودکس، کک و کنه)، انگل‌های داخلی گوارشی با روش شناورسازی و رسوب‌گذاری مدفوع، تک‌یاخته‌های خونی (بابزیا، تیلریا، آناپلاسما) و عفونت‌های قارچی جلدی.",
    "services": [
      "آزمایش مدفوع کامل با روش مک‌مستر و فلوتاسیون",
      "تراش پوستی و میکروسکوپی مستقیم جهت تشخیص جرب و قارچ",
      "کشت قارچی اختصاصی درماتوفیت‌ها (DTM)",
      "گسترش خون محیطی جهت شناسایی انگل‌های خونی",
      "تنظیم پروتکل ضد انگل فصلی و پیشگیری از بیماری‌های زئونوز"
    ],
    "headOfDepartment": "مدیریت گروه انگل‌شناسی و قارچ‌شناسی",
    "phone": "۰۵۱-۳۸۸۰۵۲۴۵",
    "room": "ساختمان آزمایشگاه‌ها، طبقه ۲، آزمایشگاه انگل‌شناسی"
  }
];

// لیست اساتید واقعی از دیتابیس (بدون اساتید فیک یا تستی)
const INITIAL_PROFESSORS = [];

// کد مرچنت رسمی درگاه زیپال ارائه‌شده توسط کاربر
const ZIBAL_MERCHANT_CODE = "6a9db4410df8756c31ea5d00";

// ۲. توابع ارتباط با سرور و دیتابیس
const API_BASE = "/api/vet";

async function fetchDepartments() {
  try {
    const res = await fetch(`${API_BASE}/departments`);
    if (res.ok) {
      const data = await res.json();
      return data.departments || INITIAL_DEPARTMENTS;
    }
  } catch (e) {
    console.warn("API fetchDepartments warn:", e);
  }
  return INITIAL_DEPARTMENTS;
}

async function fetchProfessors() {
  try {
    const res = await fetch(`${API_BASE}/professors`);
    if (res.ok) {
      const data = await res.json();
      return data.professors || [];
    }
  } catch (e) {
    console.warn("API fetchProfessors warn:", e);
  }
  return [];
}

async function fetchAppointments() {
  try {
    const res = await fetch(`${API_BASE}/appointments`);
    if (res.ok) {
      const data = await res.json();
      return data.appointments || [];
    }
  } catch (e) {
    console.warn("API fetchAppointments warn:", e);
  }
  return [];
}

async function runAiTriageApi(payload) {
  try {
    const res = await fetch(`${API_BASE}/ai-triage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      return data.triageResult;
    }
  } catch (e) {
    console.warn("API ai-triage fallback to local:", e);
  }
  return null;
}

// ۳. وضعیت سراسری برنامه (Global Application State)
let state = {
  activeTab: 'home',
  departments: INITIAL_DEPARTMENTS,
  professors: INITIAL_PROFESSORS,
  appointments: [],
  selectedDepartment: null,
  selectedProfessor: null,
  searchQuery: '',
  selectedDeptFilter: 'all',
  selectedRankFilter: 'all',
  
  // وضعیت کاربر لاگین شده
  currentUser: JSON.parse(localStorage.getItem('vet_user') || 'null'),
  
  // مدال‌ها
  bookingModalOpen: false,
  triageModalOpen: false,
  doctorModalOpen: false,
  deptModalOpen: false,
  invoiceModalOpen: false,
  authModalOpen: false,
  myAppointmentsModalOpen: false,
  mobileMenuOpen: false,
  
  // داده‌های فرم تریاژ
  triageForm: {
    animalType: 'سگ',
    animalBreed: '',
    symptoms: '',
    age: '',
    urgencyLevel: 'medium',
    isProcessing: false,
    result: null
  },
  
  // داده‌های فرم رزرو نوبت
  bookingStep: 1,
  bookingForm: {
    animalType: 'سگ',
    animalName: '',
    animalBreed: '',
    animalAge: '',
    animalGender: 'نر',
    departmentId: 'internal-small',
    professorId: '',
    visitType: 'in_person',
    appointmentDate: 'فردا - ساعت ۱۰:۰۰ صبح',
    appointmentTime: '۱۰:۰۰ صبح',
    symptoms: '',
    clientName: '',
    clientPhone: '',
    clientNationalId: '',
    urgency: 'routine'
  },
  
  // فرم ثبت‌نام استاد جدید
  docRegisterForm: {
    name: '',
    academicRank: 'استادیار',
    departmentId: 'internal-small',
    subSpecialty: '',
    medicalCouncilNo: '',
    phone: '',
    email: '',
    bio: '',
    visitFee: 380000,
    onlineConsultFee: 250000,
    schedule: 'شنبه تا چهارشنبه ۰۹:۰۰ الی ۱۳:۰۰',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
  },
  
  // فرم ورود / عضویت
  authForm: {
    mode: 'login',
    role: 'client',
    phone: '',
    password: '',
    name: '',
    petName: '',
    medicalCouncilNo: ''
  },
  
  // فرم پیگیری نوبت
  trackQuery: '',
  trackResult: null,
  trackError: '',
  
  // فاکتور فعال
  activeInvoice: null,
  activeDoctorDetails: null,
  activeDeptDetails: null
};

// تابع فرمت قیمت به ریال / تومان
function formatPrice(num) {
  if (!num) return '۳۵۰,۰۰۰ تومان';
  return Number(num).toLocaleString('fa-IR') + ' تومان';
}

// نمایش و پنهان‌سازی لودر انتقال به درگاه
function showPaymentRedirectLoader(text = 'در حال اتصال امن به درگاه بانکی شاپرک و زیپال...') {
  let el = document.getElementById('payment-redirect-loader');
  if (!el) {
    el = document.createElement('div');
    el.id = 'payment-redirect-loader';
    el.className = 'fixed inset-0 z-50 bg-[#090d16]/90 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center';
    document.body.appendChild(el);
  }
  el.innerHTML = `
    <div class="bg-slate-900 border border-slate-700/80 p-8 rounded-3xl max-w-sm w-full shadow-2xl shadow-emerald-500/10 text-center space-y-4">
      <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-3xl mx-auto animate-pulse text-white shadow-lg shadow-emerald-500/30">
        💳
      </div>
      <h3 class="text-base font-black text-white">اتصال به درگاه رسمی زیپال</h3>
      <p class="text-xs text-slate-300 leading-relaxed">${text}</p>
      <div class="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mt-2"></div>
      <div class="text-[10px] text-slate-500">پروتکل امن SSL 256-Bit شبکه شاپرک</div>
    </div>
  `;
  el.style.display = 'flex';
}

function hidePaymentRedirectLoader() {
  const el = document.getElementById('payment-redirect-loader');
  if (el) el.style.display = 'none';
}

// ناوبری و تغییر تب
window.setVetTab = function(tab) {
  state.activeTab = tab;
  state.mobileMenuOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
};

window.toggleMobileMenu = function() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  renderApp();
};

// مدال‌های عمومی
window.openBookingModal = function(profId = null, deptId = null) {
  if (deptId) {
    state.bookingForm.departmentId = deptId;
  }
  if (profId) {
    const p = state.professors.find(x => x.id === profId);
    if (p) {
      state.bookingForm.professorId = p.id;
      state.bookingForm.departmentId = p.departmentId;
      state.selectedProfessor = p;
    }
  } else {
    const profsInDept = state.professors.filter(p => p.departmentId === state.bookingForm.departmentId);
    if (profsInDept.length > 0) {
      state.bookingForm.professorId = profsInDept[0].id;
      state.selectedProfessor = profsInDept[0];
    } else {
      state.bookingForm.professorId = '';
      state.selectedProfessor = null;
    }
  }
  state.bookingStep = 1;
  state.bookingModalOpen = true;
  renderApp();
};

window.closeBookingModal = function() {
  state.bookingModalOpen = false;
  renderApp();
};

window.setBookingStep = function(step) {
  state.bookingStep = step;
  renderApp();
};

// به روز رسانی فیلدهای انتخابی بدون رندر مکرر در فیلدهای متنی
window.selectBookingAnimalType = function(type) {
  state.bookingForm.animalType = type;
  renderApp();
};

window.selectBookingDepartment = function(deptId) {
  state.bookingForm.departmentId = deptId;
  const profs = state.professors.filter(p => p.departmentId === deptId);
  if (profs.length > 0) {
    state.bookingForm.professorId = profs[0].id;
    state.selectedProfessor = profs[0];
  } else {
    state.bookingForm.professorId = '';
    state.selectedProfessor = null;
  }
  renderApp();
};

window.selectBookingProfessor = function(profId) {
  state.bookingForm.professorId = profId;
  state.selectedProfessor = state.professors.find(p => p.id === profId) || null;
  renderApp();
};

window.selectBookingVisitType = function(type) {
  state.bookingForm.visitType = type;
  renderApp();
};

window.selectBookingDate = function(dateStr) {
  state.bookingForm.appointmentDate = dateStr;
};

// اجرای پرداخت از طریق درگاه واقعی زیپال با مرچنت 6a9db4410df8756c31ea5d00
window.proceedToPayment = async function() {
  const f = state.bookingForm;
  if (!f.clientName || !f.clientPhone) {
    alert('لطفاً نام سرپرست و شماره تماس همراه را وارد فرمایید.');
    return;
  }
  if (!f.animalName) {
    alert('لطفاً نام بیمار (حیوان) را وارد فرمایید.');
    return;
  }

  const currentProf = state.professors.find(p => p.id === f.professorId);
  const currentDept = state.departments.find(d => d.id === f.departmentId) || state.departments[0];
  const fee = f.visitType === 'online'
    ? (currentProf?.onlineConsultFee || 250000)
    : (currentProf?.visitFee || 380000);

  const orderId = 'VET-' + Date.now();
  const trackingCode = 'VET-' + Math.floor(100000 + Math.random() * 900000);

  const newAppointment = {
    id: orderId,
    trackingCode: trackingCode,
    clientName: f.clientName.trim(),
    clientPhone: f.clientPhone.trim(),
    clientNationalId: f.clientNationalId || '',
    animalName: f.animalName.trim(),
    animalType: f.animalType || 'سگ',
    animalBreed: f.animalBreed || 'نژاد نامشخص',
    animalAge: f.animalAge || '',
    departmentId: currentDept.id,
    departmentName: currentDept.name,
    professorId: currentProf ? currentProf.id : 'general',
    professorName: currentProf ? currentProf.name : 'متخصص کشیک دپارتمان',
    appointmentDate: f.appointmentDate || 'فردا - ساعت ۱۰:۰۰ صبح',
    appointmentTime: f.appointmentTime || '۱۰:۰۰ صبح',
    visitType: f.visitType,
    visitTypeName: f.visitType === 'online' ? 'مشاوره فوق‌تخصصی آنلاین' : 'ویزیت حضوری درمانگاه بیمارستان',
    amountPaid: fee,
    symptoms: f.symptoms || '',
    status: 'pending_payment',
    createdAt: new Date().toISOString()
  };

  // ذخیره در localStorage برای بازیابی پس از بازگشت از درگاه
  localStorage.setItem('vet_pending_appointment', JSON.stringify(newAppointment));

  // نمایش پیام لودر و انتقال مستقیم به زیپال
  showPaymentRedirectLoader('در حال انتقال امن به درگاه پرداخت اینترنتی زیپال (شاپرک)...');

  try {
    const res = await fetch('/api/zibal-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amountInTomans: fee,
        merchant: ZIBAL_MERCHANT_CODE,
        description: `پرداخت نوبت ویزیت بیمارستان دامپزشکی - ${f.animalName} (${f.clientName})`,
        mobile: f.clientPhone,
        orderId: orderId,
        callbackUrl: window.location.origin + '/vet-hospital/?payment_return=1',
        appointmentData: newAppointment
      })
    });

    const data = await res.json();
    if (data.success && data.paymentUrl) {
      // هدایت مستقیم به درگاه رسمی زیپال
      window.location.href = data.paymentUrl;
    } else {
      hidePaymentRedirectLoader();
      alert('خطا در اتصال به درگاه زیپال: ' + (data.message || 'لطفاً دوباره تلاش فرمایید.'));
    }
  } catch (err) {
    hidePaymentRedirectLoader();
    alert('خطای ارتباط با سرور درگاه پرداخت. لطفاً اتصال اینترنت خود را بررسی نمایید.');
  }
};

// بررسی بازگشت از درگاه پرداخت زیپال و تایید تراکنش
async function handlePaymentReturn() {
  const urlParams = new URLSearchParams(window.location.search);
  const isPaymentReturn = urlParams.get('payment_return') || urlParams.get('trackId');
  if (!isPaymentReturn) return;

  const trackId = urlParams.get('trackId');
  const status = urlParams.get('status');
  const successParam = urlParams.get('success');

  const pendingRaw = localStorage.getItem('vet_pending_appointment');
  let pending = pendingRaw ? JSON.parse(pendingRaw) : null;

  if (trackId && (status === '2' || successParam === '1' || status === '1')) {
    showPaymentRedirectLoader('در حال استعلام نهایی و صدور فاکتور رسمی بیمارستان...');
    try {
      const vRes = await fetch('/api/zibal-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trackId: trackId,
          merchant: ZIBAL_MERCHANT_CODE
        })
      });
      const vData = await vRes.json();
      hidePaymentRedirectLoader();

      if (vData.success || status === '2') {
        const refNumber = vData.refNumber || trackId;
        const finalAppointment = {
          ...(pending || {}),
          id: pending?.id || 'VET-' + trackId,
          trackingCode: 'VET-' + trackId,
          transactionId: 'ZBL-' + refNumber,
          paymentStatus: 'paid',
          status: 'confirmed',
          zibalTrackId: trackId,
          paidAt: new Date().toISOString()
        };

        // ذخیره دائمی نوبت در سرور دیتابیس
        try {
          await fetch('/api/vet/appointments/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalAppointment)
          });
        } catch (e) {}

        state.appointments.unshift(finalAppointment);
        localStorage.setItem('vet_appointments', JSON.stringify(state.appointments));
        localStorage.removeItem('vet_pending_appointment');

        state.activeInvoice = finalAppointment;
        state.invoiceModalOpen = true;

        window.history.replaceState({}, document.title, window.location.pathname);
        renderApp();

        if (window.confetti) {
          window.confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 } });
        }
      } else {
        alert('تراکنش پرداخت از سوی درگاه بانکی تایید نگردید: ' + (vData.message || 'ناموفق'));
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } catch (e) {
      hidePaymentRedirectLoader();
      console.error('Verify error:', e);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  } else if (status && status !== '2') {
    alert('تراکنش پرداخت نوبت در درگاه بانکی تکمیل نشد یا توسط کاربر لغو گردید.');
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

// ثبت‌نام استاد هیئت علمی در سرور و دیتابیس
window.handleRegisterDoctor = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const f = state.docRegisterForm;
  if (!f.name || !f.medicalCouncilNo || !f.phone) {
    alert('لطفاً فیلدهای ستاره‌دار الزامی را تکمیل فرمایید.');
    return;
  }

  const dept = state.departments.find(d => d.id === f.departmentId);
  const payload = {
    ...f,
    departmentName: dept ? dept.name : 'دپارتمان تخصصی',
    visitFee: Number(f.visitFee) || 380000,
    onlineConsultFee: Number(f.onlineConsultFee) || 250000,
    status: 'approved'
  };

  try {
    const res = await fetch('/api/vet/professors/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success && data.professor) {
      state.professors.unshift(data.professor);
      alert('✅ عضویت و پروفایل تخصصی شما با موفقیت در دیتابیس بیمارستان ثبت و فعال گردید.');
      state.activeTab = 'professors';
      renderApp();
      if (window.confetti) window.confetti({ particleCount: 80, spread: 70 });
    } else {
      alert(data.error || 'خطا در ثبت‌نام استاد.');
    }
  } catch (err) {
    alert('خطای ارتباط با سرور.');
  }
};

// جستجوی اساتید بر پایه DOM بدون از دست رفتن فوکوس
window.handleProfessorSearch = function(query) {
  state.searchQuery = query;
  const cards = document.querySelectorAll('.prof-card-item');
  const emptyNotice = document.getElementById('prof-empty-notice');
  const q = query.trim().toLowerCase();
  let visibleCount = 0;
  cards.forEach(card => {
    const text = (card.getAttribute('data-search') || '').toLowerCase();
    if (!q || text.includes(q)) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });
  if (emptyNotice) {
    emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
  }
};

// پیگیری نوبت
window.handleTrackAppointment = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const q = state.trackQuery.trim();
  if (!q) return;

  const found = state.appointments.find(a => 
    (a.trackingCode && a.trackingCode.toLowerCase().includes(q.toLowerCase())) ||
    (a.clientPhone && a.clientPhone.includes(q)) ||
    (a.id && a.id.includes(q))
  );

  if (found) {
    state.trackResult = found;
    state.trackError = '';
  } else {
    state.trackResult = null;
    state.trackError = 'نوبتی با این کد رهگیری یا شماره همراه در سامانه بیمارستان یافت نشد.';
  }
  renderApp();
};

// مدال‌های جزئیات پزشک و دپارتمان
window.openDoctorDetails = function(profId) {
  state.activeDoctorDetails = state.professors.find(p => p.id === profId);
  state.doctorModalOpen = true;
  renderApp();
};

window.closeDoctorDetails = function() {
  state.doctorModalOpen = false;
  renderApp();
};

window.openDeptDetails = function(deptId) {
  state.activeDeptDetails = state.departments.find(d => d.id === deptId);
  state.deptModalOpen = true;
  renderApp();
};

window.closeDeptDetails = function() {
  state.deptModalOpen = false;
  renderApp();
};

window.openTriageModal = function() {
  state.triageModalOpen = true;
  renderApp();
};

window.closeTriageModal = function() {
  state.triageModalOpen = false;
  renderApp();
};

window.openAuthModal = function(mode = 'login') {
  state.authForm.mode = mode;
  state.authModalOpen = true;
  renderApp();
};

window.closeAuthModal = function() {
  state.authModalOpen = false;
  renderApp();
};

window.openMyAppointmentsModal = function() {
  state.myAppointmentsModalOpen = true;
  renderApp();
};

window.closeMyAppointmentsModal = function() {
  state.myAppointmentsModalOpen = false;
  renderApp();
};

window.closeInvoiceModal = function() {
  state.invoiceModalOpen = false;
  renderApp();
};

window.logoutUser = function() {
  state.currentUser = null;
  localStorage.removeItem('vet_user');
  renderApp();
};

// اجرای تریاژ هوشمند
window.handleRunTriage = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const f = state.triageForm;
  if (!f.symptoms) {
    alert('لطفاً شرح علائم بیماری را وارد فرمایید.');
    return;
  }

  state.triageForm.isProcessing = true;
  renderApp();

  const apiRes = await runAiTriageApi({
    animalType: f.animalType,
    animalBreed: f.animalBreed,
    symptoms: f.symptoms,
    age: f.age
  });

  state.triageForm.isProcessing = false;
  state.triageForm.result = apiRes || {
    targetDepartmentId: 'internal-small',
    targetDepartmentName: 'بخش بیماری‌های درونی دام‌های کوچک و پرندگان زینتی',
    urgencyLevel: 'medium',
    urgencyText: 'متوسط (نیازمند ویزیت تخصصی در ۲۴ ساعت آینده)',
    urgencyBadgeColor: 'amber',
    recommendedTests: ['معاینه بالینی کامل', 'آزمایش خون CBC و بیوشیمی'],
    possibleConditions: ['اختلال عملکرد گوارشی / متابولیک'],
    primaryAdvice: 'از خوددرمانی و مصرف داروی انسانی خودداری نموده و حیوان را در محیطی آرام و با دسترسی به آب تمیز قرار دهید.'
  };

  renderApp();
};

window.handleAuthSubmit = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const f = state.authForm;
  if (!f.phone) {
    alert('شماره تلفن الزامی است.');
    return;
  }
  const user = {
    phone: f.phone,
    name: f.name || (f.role === 'professor' ? 'استاد هیئت علمی' : 'سرپرست بیمار'),
    role: f.role,
    petName: f.petName,
    medicalCouncilNo: f.medicalCouncilNo
  };
  state.currentUser = user;
  localStorage.setItem('vet_user', JSON.stringify(user));
  state.authModalOpen = false;
  renderApp();
};

// ۴. توابع رندر بخش‌های مختلف صفحه (Render Views)

// هدر لوکس تک‌ردیفه استاندارد پزشکی
function renderHeader() {
  const u = state.currentUser;
  return `
    <header class="bg-[#090d16] border-b border-slate-800/80 sticky top-0 z-40 backdrop-blur-md bg-opacity-95 shadow-lg">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 flex-nowrap">
        
        <!-- برند و لوگوی رسمی دانشگاه و بیمارستان -->
        <div class="flex items-center gap-3 cursor-pointer shrink-0" onclick="setVetTab('home')">
          <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 text-2xl shrink-0">
            🩺
          </div>
          <div class="shrink-0">
            <h1 class="text-sm sm:text-base font-black text-white leading-tight whitespace-nowrap">بیمارستان تخصصی دانشکده دامپزشکی</h1>
            <p class="text-[11px] text-emerald-400/90 font-medium whitespace-nowrap hidden sm:block">مرکز درمانی، تحقیقاتی و بالینی دانشگاه</p>
          </div>
        </div>

        <!-- منوی اصلی وسط (کاملاً تک ردیفه با whitespace-nowrap بدون شکست کلمات) -->
        <nav class="hidden lg:flex items-center gap-4 xl:gap-6 text-xs sm:text-sm font-semibold text-slate-300 shrink-0 whitespace-nowrap">
          <button onclick="setVetTab('home')" class="whitespace-nowrap transition-colors pb-1 ${state.activeTab === 'home' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">صفحه اصلی</button>
          <button onclick="setVetTab('departments')" class="whitespace-nowrap transition-colors pb-1 ${state.activeTab === 'departments' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">دپارتمان‌های تخصصی</button>
          <button onclick="setVetTab('professors')" class="whitespace-nowrap transition-colors pb-1 ${state.activeTab === 'professors' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">اساتید هیئت علمی</button>
          <button onclick="setVetTab('triage')" class="whitespace-nowrap transition-colors pb-1 flex items-center gap-1.5 ${state.activeTab === 'triage' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">
            <span class="text-emerald-400">✨</span>
            <span class="whitespace-nowrap">تریاژ هوش مصنوعی</span>
          </button>
          <button onclick="setVetTab('track')" class="whitespace-nowrap transition-colors pb-1 ${state.activeTab === 'track' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">پیگیری نوبت</button>
        </nav>

        <!-- بخش عملیات کاربر سمت چپ -->
        <div class="flex items-center gap-2 sm:gap-2.5 shrink-0 whitespace-nowrap">
          ${u ? `
            <div class="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-2.5 sm:px-3 py-1.5 rounded-xl whitespace-nowrap shrink-0">
              <div class="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-xs font-black text-white shrink-0">
                ${u.role === 'professor' ? '👨‍⚕️' : '🐾'}
              </div>
              <div class="text-right hidden sm:block whitespace-nowrap">
                <div class="text-xs font-bold text-white whitespace-nowrap">${u.name}</div>
                <div class="text-[10px] text-emerald-400 whitespace-nowrap">${u.role === 'professor' ? 'استاد هیئت علمی' : 'سرپرست بیمار'}</div>
              </div>
              <button onclick="openMyAppointmentsModal()" title="نوبت‌های من" class="text-xs text-slate-300 hover:text-white p-1 hover:bg-slate-700 rounded-lg">📋</button>
              <button onclick="logoutUser()" title="خروج از حساب" class="text-xs text-rose-400 hover:text-rose-300 p-1 hover:bg-rose-950/40 rounded-lg">✕</button>
            </div>
          ` : `
            <button onclick="openAuthModal('login')" class="flex items-center gap-1.5 text-xs font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 px-3 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0">
              <span>👤</span>
              <span class="whitespace-nowrap">ورود / عضویت</span>
            </button>
          `}

          <button onclick="setVetTab('register-doc')" class="hidden md:flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/40 px-3 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0">
            <span>📝</span>
            <span class="whitespace-nowrap">ثبت‌نام استاد</span>
          </button>

          <button onclick="openBookingModal()" class="flex items-center gap-1.5 text-xs font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-3.5 sm:px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all whitespace-nowrap shrink-0">
            <span>⚡</span>
            <span class="whitespace-nowrap">نوبت‌دهی آنلاین</span>
          </button>

          <a href="/" class="hidden xl:flex items-center text-xs font-bold text-slate-400 hover:text-slate-200 border border-slate-800 px-2.5 py-2.5 rounded-xl whitespace-nowrap shrink-0">
            ← بازگشت به جهش
          </a>

          <!-- دکمه منوی موبایل -->
          <button onclick="toggleMobileMenu()" class="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-800 rounded-xl shrink-0">
            ☰
          </button>
        </div>
      </div>

      <!-- منوی کشویی تبلت و موبایل -->
      ${state.mobileMenuOpen ? `
        <div class="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3">
          <div class="grid grid-cols-2 gap-2 text-xs font-bold">
            <button onclick="setVetTab('home')" class="p-2.5 rounded-xl bg-slate-800 text-right text-white">🏠 صفحه اصلی</button>
            <button onclick="setVetTab('departments')" class="p-2.5 rounded-xl bg-slate-800 text-right text-white">🏥 دپارتمان‌ها</button>
            <button onclick="setVetTab('professors')" class="p-2.5 rounded-xl bg-slate-800 text-right text-white">👨‍⚕️ اساتید هیئت علمی</button>
            <button onclick="setVetTab('triage')" class="p-2.5 rounded-xl bg-slate-800 text-right text-emerald-400">✨ تریاژ هوش مصنوعی</button>
            <button onclick="setVetTab('track')" class="p-2.5 rounded-xl bg-slate-800 text-right text-white">🔍 پیگیری نوبت</button>
            <button onclick="setVetTab('register-doc')" class="p-2.5 rounded-xl bg-emerald-950 text-right text-emerald-300">📝 عضویت اساتید</button>
          </div>
          ${!u ? `
            <button onclick="openAuthModal('login')" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl">
              ورود مراجعین و اعضای هیئت علمی
            </button>
          ` : ''}
          <a href="/" class="block text-center text-xs text-slate-400 hover:text-slate-200 py-2 border-t border-slate-800">
            ← بازگشت به وب‌سایت اصلی جهش
          </a>
        </div>
      ` : ''}
    </header>
  `;
}

// سکشن صفحه اصلی
function renderHomeSection() {
  return `
    <!-- بنر بالینی اصلی -->
    <section class="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#090d16] to-[#070a10] py-16 sm:py-20 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-6">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>سامانه هوشمند بالینی و اورژانس ۲۴ ساعته بیمارستان فعال است</span>
        </div>

        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
          بیمارستان تخصصی دانشکده دامپزشکی
        </h2>
        
        <p class="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
          مرجع آموزش بالینی، جراحی‌های پیشرفته حیوانات، پاتوبیولوژی و تریاژ تشخیصی هوش مصنوعی با حضور اساتید تمام، دانشیاران و متخصصین دارای شماره نظام دامپزشکی.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <button onclick="openTriageModal()" class="flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base px-7 py-4 rounded-2xl shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95">
            <span>✨ شروع تریاژ و ارزیابی بیماری با هوش مصنوعی</span>
            <span>←</span>
          </button>
          
          <button onclick="openBookingModal()" class="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl border border-slate-700 transition-all">
            <span>🩺 رزرو نوبت ویزیت تخصصی</span>
          </button>
          
          <button onclick="setVetTab('professors')" class="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-bold text-sm sm:text-base px-5 py-4 rounded-2xl border border-slate-800 transition-all">
            <span>👨‍⚕️ لیست اساتید و تعرفه‌ها</span>
          </button>
        </div>

        <!-- کارت‌های آمار بیمارستان -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 text-right">
          <div class="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl">
            <div class="text-2xl sm:text-3xl font-black text-emerald-400">۸ دپارتمان</div>
            <div class="text-xs text-slate-300 font-bold mt-1">بخش‌های جراحی، پاتولوژی، داخلی و مامایی</div>
          </div>
          <div class="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl">
            <div class="text-2xl sm:text-3xl font-black text-teal-300">${state.professors.length} استاد هیئت علمی</div>
            <div class="text-xs text-slate-300 font-bold mt-1">پروفسورها و متخصصین نظام دامپزشکی</div>
          </div>
          <div class="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl">
            <div class="text-2xl sm:text-3xl font-black text-cyan-400">کمتر از ۵ ثانیه</div>
            <div class="text-xs text-slate-300 font-bold mt-1">تشخیص تریاژ و طبقه‌بندی هوش مصنوعی</div>
          </div>
          <div class="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl">
            <div class="text-2xl sm:text-3xl font-black text-amber-300">درگاه رسمی زیپال</div>
            <div class="text-xs text-slate-300 font-bold mt-1">پرداخت آنلاین و صدور فاکتور رسمی شتاب</div>
          </div>
        </div>

      </div>
    </section>

    <!-- نوار هشدار اورژانس بالینی ۲۴ ساعته -->
    <div class="bg-gradient-to-r from-rose-950 via-slate-900 to-rose-950 border-y border-rose-800/40 py-3.5 px-4">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div class="flex items-center gap-2.5 text-rose-200">
          <span class="text-lg animate-pulse">🚨</span>
          <span class="font-bold">هشدار موارد اورژانس و تروما:</span>
          <span>در صورت بروز شوک، تشنج، اتساع معده (GDV) یا مسمومیت حاد، فوراً به اورژانس شبانه‌روزی مراجعه نمایید.</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-slate-300">پذیرش ۲۴ ساعته:</span>
          <a href="tel:05138804000" class="text-rose-300 font-black hover:underline">۰۵۱-۳۸۸۰۴۰۰۰</a>
        </div>
      </div>
    </div>

    <!-- دپارتمان‌های برجسته بیمارستان -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h3 class="text-xl sm:text-2xl font-black text-white">دپارتمان‌های تخصصی و کلینیک‌های بالینی</h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">خدمات درمانی فوق تخصصی تحت نظارت مستقیم اساتید دانشگاه</p>
        </div>
        <button onclick="setVetTab('departments')" class="text-xs font-bold text-emerald-400 hover:text-emerald-300">
          مشاهده همه دپارتمان‌ها ←
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        ${state.departments.slice(0, 4).map(d => renderDepartmentCard(d)).join('')}
      </div>
    </section>

    <!-- معرفی اساتید هیئت علمی -->
    <section class="bg-slate-900/60 border-y border-slate-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h3 class="text-xl sm:text-2xl font-black text-white">اعضای هیئت علمی و پزشکان معالج</h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">استاد تمام، دانشیاران و استادیاران برجسته دانشکده دامپزشکی</p>
          </div>
          <button onclick="setVetTab('professors')" class="text-xs font-bold text-emerald-400 hover:text-emerald-300">
            مشاهده تقویم کامل اساتید ←
          </button>
        </div>

        ${state.professors.length > 0 ? `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${state.professors.slice(0, 3).map(p => renderProfessorCard(p)).join('')}
          </div>
        ` : `
          <div class="bg-slate-800/50 border border-slate-700/70 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <div class="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-3xl mx-auto mb-4">
              👨‍⚕️
            </div>
            <h4 class="text-base sm:text-lg font-black text-white mb-2">سامانه اعضای هیئت علمی و متخصصین بالینی</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              پروفایل اساتید و پزشکان به محض ثبت‌نام رسمی در این بخش نمایش داده خواهد شد. اعضای محترم هیئت علمی دانشکده دامپزشکی می‌توانند از طریق دکمه زیر پروفایل خود را ثبت و فعال نمایند.
            </p>
            <button onclick="setVetTab('register-doc')" class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition-all">
              <span>📝 ثبت‌نام و عضویت استاد هیئت علمی</span>
              <span>←</span>
            </button>
          </div>
        `}
      </div>
    </section>
  `;
}

// کارت دپارتمان
function renderDepartmentCard(dept) {
  const iconEmoji = {
    'pathobiology': '🔬',
    'surgery-anesthesia': '✂️',
    'internal-small': '🩺',
    'internal-large': '🐎',
    'imaging-radiology': '🩻',
    'theriogenology': '🐑',
    'poultry': '🦜',
    'parasitology': '🦠'
  }[dept.id] || '🏥';

  return `
    <div class="bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 p-6 rounded-2xl transition-all hover:-translate-y-1 flex flex-col justify-between group">
      <div>
        <div class="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
          ${iconEmoji}
        </div>
        <h4 class="text-base font-black text-white mb-2">${dept.name}</h4>
        <p class="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">${dept.shortDescription || dept.fullDescription || ''}</p>
        
        <div class="text-[11px] text-emerald-300/90 font-medium mb-3">
          مدیریت: <strong>${dept.headOfDepartment || 'شورای تخصصی دپارتمان'}</strong>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-700/60 flex items-center justify-between">
        <button onclick="openBookingModal(null, '${dept.id}')" class="text-xs font-bold text-emerald-400 hover:text-emerald-300">
          رزرو نوبت در این بخش ←
        </button>
        <button onclick="openDeptDetails('${dept.id}')" class="text-xs text-slate-400 hover:text-white">
          جزئیات
        </button>
      </div>
    </div>
  `;
}

// کارت استاد
function renderProfessorCard(prof) {
  const searchText = `${prof.name} ${prof.subSpecialty || ''} ${prof.departmentName || ''} ${prof.academicRank || ''}`;
  return `
    <div class="prof-card-item bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 p-6 rounded-2xl transition-all hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col justify-between" data-search="${searchText}">
      <div>
        <div class="flex items-start gap-4 mb-4">
          <img src="${prof.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'}" alt="${prof.name}" class="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/30 shrink-0" />
          <div class="flex-1 min-w-0">
            <h4 class="text-base font-black text-white truncate">${prof.name}</h4>
            <div class="text-xs font-bold text-emerald-400 mt-0.5">${prof.academicRank}</div>
            <div class="text-[11px] text-slate-400 mt-1 truncate">${prof.subSpecialty || prof.departmentName}</div>
            ${prof.medicalCouncilNo ? `<div class="text-[10px] text-slate-500 font-mono mt-0.5">نظام دامپزشکی: ${prof.medicalCouncilNo}</div>` : ''}
          </div>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
          ${prof.bio || 'عضو هیئت علمی و متخصص کلینیکال بیمارستان دانشکده دامپزشکی.'}
        </p>

        <div class="bg-slate-900/60 p-3 rounded-xl space-y-1.5 text-[11px] text-slate-300 mb-4">
          <div class="flex items-center justify-between">
            <span class="text-slate-400">ساعت حضور:</span>
            <span class="font-medium text-white truncate max-w-[180px]">${Array.isArray(prof.schedule) ? prof.schedule[0] : (prof.schedule || 'شنبه تا چهارشنبه ۰۹:۰۰ الی ۱۳:۰۰')}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-400">تعرفه ویزیت:</span>
            <span class="font-bold text-emerald-400">${formatPrice(prof.visitFee)}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-700/60">
        <button onclick="openBookingModal('${prof.id}')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl transition-colors text-center">
          رزرو نوبت حضوری
        </button>
        <button onclick="openDoctorDetails('${prof.id}')" class="bg-slate-700/60 hover:bg-slate-700 text-slate-200 font-bold text-xs py-2.5 rounded-xl transition-colors text-center">
          مشاهده پروفایل
        </button>
      </div>
    </div>
  `;
}

// سکشن دپارتمان‌ها
function renderDepartmentsSection() {
  return `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">دپارتمان‌های تخصصی بیمارستان</h2>
        <p class="text-sm text-slate-300">۸ بخش آموزشی و درمانی مجهز به پیشرفته‌ترین ابزارهای تشخیصی و اتاق‌های جراحی استاندارد</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${state.departments.map(d => renderDepartmentCard(d)).join('')}
      </div>
    </section>
  `;
}

// سکشن اساتید
function renderProfessorsSection() {
  return `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">اساتید و پزشکان هیئت علمی</h2>
        <p class="text-sm text-slate-300">رزرو آنلاین نوبت ویزیت حضوری در درمانگاه یا مشاوره تخصصی از راه دور با اساتید رسمی دانشگاه</p>
      </div>

      <!-- نوار جستجو بدون از دست رفتن فوکوس با فیلتر DOM -->
      <div class="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl mb-8 flex flex-wrap items-center justify-between gap-4">
        <div class="flex-1 min-w-[240px]">
          <input type="text" placeholder="جستجوی نام استاد، تخصص، جراحی، ارتوپدی..." value="${state.searchQuery}" oninput="handleProfessorSearch(this.value)" class="w-full bg-slate-900 border border-slate-700 text-white text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500" />
        </div>

        <button onclick="setVetTab('register-doc')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-3 rounded-xl transition-all">
          + ثبت‌نام استاد جدید
        </button>
      </div>

      ${state.professors.length > 0 ? `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="prof-cards-grid">
          ${state.professors.map(p => renderProfessorCard(p)).join('')}
        </div>
        <div id="prof-empty-notice" style="display:none;" class="text-center py-16 bg-slate-800/40 rounded-2xl border border-slate-700 mt-6">
          <p class="text-slate-300 font-bold">استادی با عبارت جستجو شده یافت نشد.</p>
        </div>
      ` : `
        <div class="bg-slate-800/50 border border-slate-700/70 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <div class="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-3xl mx-auto mb-4">
            👨‍⚕️
          </div>
          <h4 class="text-base sm:text-lg font-black text-white mb-2">هنوز استادی در سامانه ثبت‌نام نکرده است</h4>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            اطلاعات اساتید به محض ثبت در دیتابیس بیمارستان در این بخش قرار می‌گیرد. اعضای محترم هیئت علمی می‌توانند از بخش ثبت‌نام، پروفایل خود را ثبت نمایند.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <button onclick="setVetTab('register-doc')" class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all">
              <span>📝 ثبت‌نام استاد هیئت علمی</span>
            </button>
            <button onclick="openBookingModal()" class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-5 py-3 rounded-xl border border-slate-700 transition-all">
              <span>🩺 نوبت‌دهی پذیرش عمومی</span>
            </button>
          </div>
        </div>
      `}
    </section>
  `;
}

// سکشن تریاژ هوش مصنوعی
function renderTriageSection() {
  const f = state.triageForm;
  return `
    <section class="max-w-4xl mx-auto px-4 py-12">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3">
          <span>✨ دستیار هوشمند بالینی</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">تریاژ بالینی و هوشمند بیماری‌های حیوانات</h2>
        <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">ارزیابی اولیه علائم، تعیین فوریت پزشکی و ارجاع به مناسب‌ترین دپارتمان تخصصی بیمارستان</p>
      </div>

      <div class="bg-slate-800/90 border border-slate-700/80 p-6 sm:p-8 rounded-3xl shadow-xl">
        <form onsubmit="handleRunTriage(event)" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">گونه حیوان</label>
              <select onchange="state.triageForm.animalType=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl">
                ${['سگ', 'گربه', 'پرنده زینتی', 'اسب', 'دام بزرگ', 'حیوان خاص'].map(t => `<option value="${t}" ${f.animalType === t ? 'selected' : ''}>${t}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">نژاد و سن</label>
              <input type="text" placeholder="مثال: ژرمن، ۲ ساله" value="${f.animalBreed}" oninput="state.triageForm.animalBreed=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-2">شرح علائم و رفتارهای غیرعادی حیوان *</label>
            <textarea required rows="4" placeholder="مثال: از دیروز دچار بی‌حالی شدید، استفراغ مداوم، لنگش در پای راست عقب و تب شده است..." oninput="state.triageForm.symptoms=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3.5 rounded-xl leading-relaxed focus:outline-none focus:border-emerald-500">${f.symptoms}</textarea>
          </div>

          <div class="text-center pt-2">
            <button type="submit" class="w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all ${f.isProcessing ? 'opacity-70 pointer-events-none' : ''}">
              ${f.isProcessing ? '⏳ در حال ارزیابی با هوش مصنوعی...' : '✨ تحلیل بالینی علائم و ارجاع به دپارتمان'}
            </button>
          </div>
        </form>

        ${f.result ? `
          <div class="mt-8 pt-8 border-t border-slate-700 space-y-4">
            <div class="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300">دپارتمان تخصصی پیشنهادی:</span>
                <span class="text-xs font-black text-emerald-400">${f.result.targetDepartmentName}</span>
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300">میزان فوریت بالینی:</span>
                <span class="text-xs font-black text-amber-400">${f.result.urgencyText || f.result.urgencyLevel}</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed mt-3">${f.result.primaryAdvice}</p>
            </div>

            <div class="text-center pt-2">
              <button onclick="openBookingModal(null, '${f.result.targetDepartmentId}')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all">
                🩺 رزرو نوبت در ${f.result.targetDepartmentName} ←
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

// سکشن ثبت‌نام استاد
function renderDoctorRegisterSection() {
  const f = state.docRegisterForm;
  return `
    <section class="max-w-3xl mx-auto px-4 py-12">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3">
          <span>👨‍⚕️ عضویت اعضای هیئت علمی</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">ثبت‌نام استاد و متخصص بالینی</h2>
        <p class="text-xs sm:text-sm text-slate-300">ایجاد پروفایل تخصصی جهت ارائه خدمات ویزیت، جراحی و مشاوره آنلاین</p>
      </div>

      <div class="bg-slate-800/90 border border-slate-700/80 p-6 sm:p-8 rounded-3xl shadow-xl">
        <form onsubmit="handleRegisterDoctor(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی استاد *</label>
              <input required type="text" placeholder="مثال: دکتر سارا مهدوی" value="${f.name}" oninput="state.docRegisterForm.name=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره نظام دامپزشکی *</label>
              <input required type="text" placeholder="مثال: 18450" value="${f.medicalCouncilNo}" oninput="state.docRegisterForm.medicalCouncilNo=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">مرتبه علمی</label>
              <select onchange="state.docRegisterForm.academicRank=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl">
                ${['استاد تمام (پروفسور)', 'دانشیار', 'استادیار', 'رزیدنت ارشد تخصصی'].map(r => `<option value="${r}" ${f.academicRank === r ? 'selected' : ''}>${r}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">دپارتمان تخصصی *</label>
              <select onchange="state.docRegisterForm.departmentId=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl">
                ${state.departments.map(d => `<option value="${d.id}" ${f.departmentId === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">فوق تخصص / حیطه فعالیت</label>
              <input type="text" placeholder="مثال: ارتوپدی و جراحی بافت نرم حیوانات خانگی" value="${f.subSpecialty}" oninput="state.docRegisterForm.subSpecialty=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره همراه تماس *</label>
              <input required type="tel" placeholder="0912xxxxxxx" value="${f.phone}" oninput="state.docRegisterForm.phone=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">تعرفه مصوب ویزیت حضوری (تومان)</label>
              <input type="number" value="${f.visitFee}" oninput="state.docRegisterForm.visitFee=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">روزها و ساعات حضور در درمانگاه</label>
              <input type="text" value="${f.schedule}" oninput="state.docRegisterForm.schedule=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">بیوگرافی و سوابق علمی</label>
            <textarea rows="3" placeholder="سوابق تدریس، تالیفات، مقالات ISI و افتخارات بالینی..." oninput="state.docRegisterForm.bio=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl leading-relaxed">${f.bio}</textarea>
          </div>

          <div class="pt-2">
            <button type="submit" class="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all">
              ثبت و فعال‌سازی پروفایل استاد در سامانه دیتابیس
            </button>
          </div>
        </form>
      </div>
    </section>
  `;
}

// سکشن پیگیری نوبت
function renderTrackSection() {
  const r = state.trackResult;
  return `
    <section class="max-w-3xl mx-auto px-4 py-12">
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">پیگیری و استعلام نوبت ویزیت</h2>
        <p class="text-xs sm:text-sm text-slate-300">مشاهده وضعیت پرونده، زمان حضور در درمانگاه و دانلود رسید رسمی بیمارستان</p>
      </div>

      <div class="bg-slate-800/90 border border-slate-700/80 p-6 rounded-3xl mb-8">
        <form onsubmit="handleTrackAppointment(event)" class="flex flex-col sm:flex-row gap-3">
          <input required type="text" placeholder="کد رهگیری (مثال: VET-849201) یا شماره همراه..." value="${state.trackQuery}" oninput="state.trackQuery=this.value" class="flex-1 bg-slate-900 border border-slate-700 text-white text-xs p-3.5 rounded-xl focus:outline-none focus:border-emerald-500 font-mono" />
          <button type="submit" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all">
            جستجو و استعلام نوبت
          </button>
        </form>

        ${state.trackError ? `
          <div class="mt-4 p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs text-center font-bold">
            ${state.trackError}
          </div>
        ` : ''}
      </div>

      ${r ? `
        <div class="bg-slate-800/90 border border-slate-700/80 p-6 rounded-3xl space-y-4">
          <div class="flex items-center justify-between border-b border-slate-700 pb-3">
            <span class="text-xs text-slate-400">کد رهگیری:</span>
            <span class="text-sm font-black text-emerald-400 font-mono">${r.trackingCode}</span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div><span class="text-slate-400">سرپرست:</span> <strong class="text-white">${r.clientName}</strong></div>
            <div><span class="text-slate-400">نام بیمار:</span> <strong class="text-white">${r.animalName} (${r.animalType})</strong></div>
            <div><span class="text-slate-400">دپارتمان:</span> <strong class="text-white">${r.departmentName}</strong></div>
            <div><span class="text-slate-400">پزشک معالج:</span> <strong class="text-white">${r.professorName}</strong></div>
            <div><span class="text-slate-400">زمان مراجعه:</span> <strong class="text-emerald-400">${r.appointmentDate}</strong></div>
            <div><span class="text-slate-400">وضعیت پرداخت:</span> <strong class="text-emerald-400">${r.paymentStatus === 'paid' ? 'پرداخت موفق شاپرک' : 'در انتظار پرداخت'}</strong></div>
          </div>
        </div>
      ` : ''}
    </section>
  `;
}

// ۵. مدال نوبت‌دهی (Booking Modal) بدون شکست فوکوس هنگام تایپ
function renderBookingModal() {
  if (!state.bookingModalOpen) return '';
  const currentStep = state.bookingStep;
  const f = state.bookingForm;
  const currentDept = state.departments.find(d => d.id === f.departmentId);
  const currentProf = state.professors.find(p => p.id === f.professorId);
  const profsInDept = state.professors.filter(p => p.departmentId === f.departmentId);

  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto custom-scrollbar text-right">
        
        <button onclick="closeBookingModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>

        <div class="mb-6">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>مرحله ${currentStep} از ۴</span>
            <span class="font-bold text-emerald-400">سامانه ویزیت دقیق درمانگاه</span>
          </div>
          <h3 class="text-lg font-black text-white">
            ${currentStep === 1 ? 'مرحله اول: مشخصات و پرونده بالینی بیمار' : ''}
            ${currentStep === 2 ? 'مرحله دوم: انتخاب دپارتمان تخصصی و پزشک معالج' : ''}
            ${currentStep === 3 ? 'مرحله سوم: زمان‌بندی ویزیت و شرح علائم' : ''}
            ${currentStep === 4 ? 'مرحله چهارم: مشخصات سرپرست و پیش‌فاکتور درگاه زیپال' : ''}
          </h3>
        </div>

        <!-- مرحله اول: مشخصات بیمار -->
        ${currentStep === 1 ? `
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">گونه بیمار را انتخاب فرمایید:</label>
              <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                ${['سگ', 'گربه', 'پرنده', 'اسب', 'دام بزرگ', 'حیوان خاص'].map(type => `
                  <button type="button" onclick="selectBookingAnimalType('${type}')" class="p-3 rounded-xl border text-center transition-all ${f.animalType === type ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold' : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-600'}">
                    <div class="text-xl mb-1">${type === 'سگ' ? '🐕' : type === 'گربه' ? '🐈' : type === 'پرنده' ? '🦜' : type === 'اسب' ? '🐎' : type === 'دام بزرگ' ? '🐄' : '🐇'}</div>
                    <div class="text-xs">${type}</div>
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">نام بیمار *</label>
                <input required type="text" placeholder="مثال: بارفی، لئو..." value="${f.animalName}" oninput="state.bookingForm.animalName=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">نژاد</label>
                <input type="text" placeholder="مثال: هاسکی، پرشین..." value="${f.animalBreed}" oninput="state.bookingForm.animalBreed=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">سن و جنسیت</label>
                <input type="text" placeholder="مثال: ۲ سال / نر عقیم‌شده" value="${f.animalAge}" oninput="state.bookingForm.animalAge=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
              </div>
            </div>

            <div class="flex justify-end pt-4">
              <button onclick="if(!state.bookingForm.animalName) { alert('لطفاً نام بیمار را وارد فرمایید.'); return; } setBookingStep(2);" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all">
                مرحله بعد: انتخاب پزشک و دپارتمان ←
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله دوم: انتخاب دپارتمان و پزشک -->
        ${currentStep === 2 ? `
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">انتخاب دپارتمان تخصصی:</label>
              <select onchange="selectBookingDepartment(this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3.5 rounded-xl">
                ${state.departments.map(d => `<option value="${d.id}" ${f.departmentId === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">انتخاب استاد هیئت علمی / متخصص درمانگاه:</label>
              <div class="space-y-2 max-h-56 overflow-y-auto custom-scrollbar">
                <!-- گزینه پذیرش عمومی -->
                <div onclick="selectBookingProfessor('')" class="p-3.5 rounded-2xl border cursor-pointer transition-all ${!f.professorId ? 'bg-emerald-950/60 border-emerald-500 shadow-md' : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'}">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="font-bold text-white text-xs">پذیرش عمومی و ارجاع به متخصص کشیک دپارتمان</div>
                      <div class="text-[11px] text-emerald-400 mt-0.5">ویزیت توسط کادر بالینی و اساتید شیفت بیمارستان</div>
                    </div>
                    <div class="text-xs font-bold text-emerald-400">۳۵۰,۰۰۰ تومان</div>
                  </div>
                </div>

                ${profsInDept.map(prof => `
                  <div onclick="selectBookingProfessor('${prof.id}')" class="p-3.5 rounded-2xl border cursor-pointer transition-all ${f.professorId === prof.id ? 'bg-emerald-950/60 border-emerald-500 shadow-md' : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'}">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-bold text-white text-xs">${prof.name}</div>
                        <div class="text-[11px] text-emerald-400 mt-0.5">${prof.academicRank} - ${prof.subSpecialty || ''}</div>
                      </div>
                      <div class="text-xs font-bold text-emerald-400">${formatPrice(prof.visitFee)}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button onclick="setBookingStep(1)" class="text-xs text-slate-400 hover:text-white">← بازگشت</button>
              <button onclick="setBookingStep(3)" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all">
                مرحله بعد: زمان‌بندی ویزیت ←
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله سوم: زمان‌بندی و شرح علائم -->
        ${currentStep === 3 ? `
          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">نوع ویزیت</label>
                <div class="grid grid-cols-2 gap-2">
                  <button type="button" onclick="selectBookingVisitType('in_person')" class="p-3 rounded-xl border text-xs font-bold transition-all ${f.visitType === 'in_person' ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 border-slate-700 text-slate-300'}">
                    🏥 حضوری در درمانگاه
                  </button>
                  <button type="button" onclick="selectBookingVisitType('online')" class="p-3 rounded-xl border text-xs font-bold transition-all ${f.visitType === 'online' ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 border-slate-700 text-slate-300'}">
                    💻 مشاوره آنلاین تصویری
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">انتخاب روز و سانس ویزیت</label>
                <select onchange="selectBookingDate(this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl">
                  <option value="فردا - ساعت ۱۰:۰۰ صبح">فردا - ساعت ۱۰:۰۰ صبح</option>
                  <option value="فردا - ساعت ۱۱:۳۰ صبح">فردا - ساعت ۱۱:۳۰ صبح</option>
                  <option value="پس‌فردا - ساعت ۱۶:۰۰ عصر">پس‌فردا - ساعت ۱۶:۰۰ عصر</option>
                  <option value="شنبه آینده - ساعت ۰۹:۰۰ صبح">شنبه آینده - ساعت ۰۹:۰۰ صبح</option>
                  <option value="دوشنبه آینده - ساعت ۱۰:۳۰ صبح">دوشنبه آینده - ساعت ۱۰:۳۰ صبح</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شرح مختصر علائم بیمار جهت آماده‌سازی کلینیک</label>
              <textarea rows="3" placeholder="بی‌حالی، تنگی نفس، لنگش، علائم پوستی، آلرژی..." oninput="state.bookingForm.symptoms=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl leading-relaxed focus:outline-none focus:border-emerald-500">${f.symptoms}</textarea>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button onclick="setBookingStep(2)" class="text-xs text-slate-400 hover:text-white">← بازگشت</button>
              <button onclick="setBookingStep(4)" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all">
                مرحله بعد: مشخصات سرپرست و پیش‌فاکتور ←
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله چهارم: مشخصات سرپرست و پیش‌فاکتور -->
        ${currentStep === 4 ? `
          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی سرپرست *</label>
                <input required type="text" placeholder="مثال: علی رضایی" value="${f.clientName}" oninput="state.bookingForm.clientName=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره تلفن همراه (جهت پیامک رهگیری) *</label>
                <input required type="tel" placeholder="0912xxxxxxx" value="${f.clientPhone}" oninput="state.bookingForm.clientPhone=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500" />
              </div>
            </div>

            <!-- خلاصه پیش‌فاکتور رسمی درگاه زیپال -->
            <div class="bg-slate-800/70 border border-slate-700 p-4 rounded-2xl space-y-2 text-xs text-slate-300">
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>بیمار / گونه:</span>
                <strong class="text-white">${f.animalName} (${f.animalType})</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>دپارتمان و پزشک معالج:</span>
                <strong class="text-white">${currentProf?.name || 'متخصص کشیک دپارتمان'} - ${currentDept?.name}</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>زمان مراجعه:</span>
                <strong class="text-emerald-400">${f.appointmentDate}</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>درگاه پرداخت متصل:</span>
                <strong class="text-white font-mono">درگاه رسمی زیپال (مرچنت 6a9db441...)</strong>
              </div>
              <div class="flex items-center justify-between pt-1 text-sm font-black">
                <span class="text-white">مبلغ قابل پرداخت (تعرفه مصوب):</span>
                <span class="text-emerald-400">${formatPrice(f.visitType === 'online' ? (currentProf?.onlineConsultFee || 250000) : (currentProf?.visitFee || 380000))}</span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button onclick="setBookingStep(3)" class="text-xs text-slate-400 hover:text-white">← بازگشت</button>
              <button onclick="proceedToPayment()" class="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2">
                <span>💳 اتصال به درگاه پرداخت رسمی زیپال</span>
                <span>←</span>
              </button>
            </div>
          </div>
        ` : ''}

      </div>
    </div>
  `;
}

// مدال جزئیات استاد
function renderDoctorModal() {
  if (!state.doctorModalOpen || !state.activeDoctorDetails) return '';
  const prof = state.activeDoctorDetails;
  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right">
        <button onclick="closeDoctorDetails()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>

        <div class="flex items-center gap-4 mb-6">
          <img src="${prof.avatar}" alt="${prof.name}" class="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500/40 shrink-0" />
          <div>
            <h3 class="text-lg font-black text-white">${prof.name}</h3>
            <div class="text-xs font-bold text-emerald-400 mt-0.5">${prof.academicRank}</div>
            <div class="text-xs text-slate-400 mt-1">${prof.departmentName}</div>
          </div>
        </div>

        <div class="space-y-3 text-xs text-slate-300 leading-relaxed mb-6">
          <p>${prof.bio || 'عضو هیئت علمی و متخصص بالینی دانشگاه فردوسی مشهد.'}</p>
          ${prof.subSpecialty ? `<div class="bg-slate-800/60 p-3 rounded-xl"><span class="text-slate-400">حیطه فوق‌تخصصی:</span> <strong class="text-white">${prof.subSpecialty}</strong></div>` : ''}
          <div class="bg-slate-800/60 p-3 rounded-xl flex items-center justify-between">
            <span class="text-slate-400">تعرفه ویزیت حضوری:</span>
            <strong class="text-emerald-400 font-bold">${formatPrice(prof.visitFee)}</strong>
          </div>
        </div>

        <button onclick="closeDoctorDetails(); openBookingModal('${prof.id}');" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl transition-all text-center">
          رزرو نوبت با این استاد
        </button>
      </div>
    </div>
  `;
}

// مدال جزئیات دپارتمان
function renderDeptModal() {
  if (!state.deptModalOpen || !state.activeDeptDetails) return '';
  const d = state.activeDeptDetails;
  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right">
        <button onclick="closeDeptDetails()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>

        <h3 class="text-lg font-black text-white mb-2">${d.name}</h3>
        <p class="text-xs text-emerald-400 mb-4">${d.enName || ''}</p>

        <p class="text-xs text-slate-300 leading-relaxed mb-4">${d.fullDescription || d.shortDescription}</p>

        ${d.services && d.services.length ? `
          <div class="mb-6">
            <h4 class="text-xs font-bold text-slate-200 mb-2">خدمات و اقدامات بالینی این دپارتمان:</h4>
            <ul class="space-y-1.5 text-xs text-slate-300">
              ${d.services.map(s => `<li class="flex items-center gap-2"><span class="text-emerald-400">•</span> <span>${s}</span></li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <button onclick="closeDeptDetails(); openBookingModal(null, '${d.id}');" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl transition-all text-center">
          رزرو نوبت در این دپارتمان
        </button>
      </div>
    </div>
  `;
}

// مدال فاکتور و رسید نهایی
function renderInvoiceModal() {
  if (!state.invoiceModalOpen || !state.activeInvoice) return '';
  const inv = state.activeInvoice;
  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right">
        <div class="text-center mb-6">
          <div class="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-3xl mx-auto mb-3 text-emerald-400">
            ✓
          </div>
          <h3 class="text-lg font-black text-white">پرداخت با موفقیت انجام شد</h3>
          <p class="text-xs text-emerald-400 mt-1">نوبت شما در دیتابیس بیمارستان دانشکده دامپزشکی ثبت قطعی گردید</p>
        </div>

        <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl space-y-2.5 text-xs text-slate-300 mb-6">
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span>کد رهگیری نوبت:</span>
            <strong class="text-emerald-400 font-mono text-sm">${inv.trackingCode}</strong>
          </div>
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span>شماره پیگیری درگاه زیپال:</span>
            <strong class="text-white font-mono">${inv.transactionId || inv.zibalTrackId || 'ZBL-849201'}</strong>
          </div>
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span>نام بیمار:</span>
            <strong class="text-white">${inv.animalName} (${inv.animalType})</strong>
          </div>
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span>دپارتمان و پزشک:</span>
            <strong class="text-white">${inv.professorName} - ${inv.departmentName}</strong>
          </div>
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span>زمان مراجعه:</span>
            <strong class="text-emerald-400">${inv.appointmentDate}</strong>
          </div>
          <div class="flex items-center justify-between pt-1">
            <span>مبلغ پرداختی:</span>
            <strong class="text-emerald-400 font-bold">${formatPrice(inv.amountPaid)}</strong>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button onclick="window.print()" class="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs py-3 rounded-xl transition-all text-center">
            🖨️ چاپ فاکتور
          </button>
          <button onclick="closeInvoiceModal()" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl transition-all text-center">
            تایید و بازگشت به سامانه
          </button>
        </div>
      </div>
    </div>
  `;
}

// مدال ورود / عضویت
function renderAuthModal() {
  if (!state.authModalOpen) return '';
  const f = state.authForm;
  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right">
        <button onclick="closeAuthModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>

        <h3 class="text-lg font-black text-white mb-2">
          ${f.mode === 'login' ? 'ورود به حساب کاربری بیمارستان' : 'عضویت در سامانه'}
        </h3>
        <p class="text-xs text-slate-400 mb-6">دسترسی به نوبت‌ها، پرونده‌های بالینی و خدمات ویژه</p>

        <form onsubmit="handleAuthSubmit(event)" class="space-y-4">
          <div class="flex rounded-xl bg-slate-800 p-1 mb-4">
            <button type="button" onclick="state.authForm.role='client'; renderApp();" class="flex-1 py-2 text-xs font-bold rounded-lg ${f.role === 'client' ? 'bg-emerald-600 text-white' : 'text-slate-400'}">
              سرپرست بیمار
            </button>
            <button type="button" onclick="state.authForm.role='professor'; renderApp();" class="flex-1 py-2 text-xs font-bold rounded-lg ${f.role === 'professor' ? 'bg-emerald-600 text-white' : 'text-slate-400'}">
              استاد هیئت علمی
            </button>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی</label>
            <input required type="text" placeholder="مثال: علی رضایی" value="${f.name}" oninput="state.authForm.name=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره همراه *</label>
            <input required type="tel" placeholder="0912xxxxxxx" value="${f.phone}" oninput="state.authForm.phone=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500" />
          </div>

          <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl transition-all">
            ورود به سامانه
          </button>
        </form>
      </div>
    </div>
  `;
}

// مدال نوبت‌های من
function renderMyAppointmentsModal() {
  if (!state.myAppointmentsModalOpen) return '';
  const u = state.currentUser;
  const userAppts = state.appointments.filter(a => u && a.clientPhone === u.phone);

  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right max-h-[85vh] overflow-y-auto custom-scrollbar">
        <button onclick="closeMyAppointmentsModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>

        <h3 class="text-lg font-black text-white mb-2">نوبت‌های رزرو شده من</h3>
        <p class="text-xs text-slate-400 mb-6">لیست نوبت‌های فعال و سوابق مراجعات درمانی</p>

        ${userAppts.length > 0 ? `
          <div class="space-y-3">
            ${userAppts.map(a => `
              <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div class="font-bold text-white">${a.animalName} (${a.animalType}) - ${a.departmentName}</div>
                  <div class="text-slate-400 mt-0.5">پزشک معالج: ${a.professorName} | تاریخ: <span class="text-emerald-400">${a.appointmentDate}</span></div>
                  <div class="text-[10px] text-slate-500 font-mono mt-1">کد رهگیری: ${a.trackingCode}</div>
                </div>
                <div class="text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1.5 rounded-xl text-center">
                  تایید شده
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="text-center py-12 bg-slate-800/40 rounded-2xl border border-slate-700">
            <p class="text-slate-300 font-bold text-xs">شما تاکنون نوبتی با این شماره ثبت نکرده‌اید.</p>
          </div>
        `}
      </div>
    </div>
  `;
}

// فوتر سایت
function renderFooter() {
  return `
    <footer class="bg-[#070a10] border-t border-slate-800/80 py-12 text-right">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-xl text-white">🩺</div>
              <div>
                <h4 class="font-black text-white text-base">بیمارستان تخصصی دانشکده دامپزشکی</h4>
                <p class="text-xs text-emerald-400">دانشگاه و مرکز تحقیقات بالینی دامپزشکی</p>
              </div>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed max-w-md">
              ارائه خدمات تشخیصی، آزمایشگاهی، جراحی و درمانی فوق تخصصی حیوانات با کادر اساتید برجسته هیئت علمی و سیستم نوبت‌دهی آنلاین با درگاه رسمی زیپال و شبکه شاپرک.
            </p>
          </div>

          <div>
            <h5 class="font-bold text-white text-xs mb-3">دسترسی سریع</h5>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><button onclick="setVetTab('home')" class="hover:text-emerald-400">صفحه اصلی</button></li>
              <li><button onclick="setVetTab('departments')" class="hover:text-emerald-400">دپارتمان‌های تخصصی</button></li>
              <li><button onclick="setVetTab('professors')" class="hover:text-emerald-400">اساتید هیئت علمی</button></li>
              <li><button onclick="setVetTab('triage')" class="hover:text-emerald-400">تریاژ هوش مصنوعی</button></li>
              <li><button onclick="setVetTab('track')" class="hover:text-emerald-400">پیگیری نوبت</button></li>
            </ul>
          </div>

          <div>
            <h5 class="font-bold text-white text-xs mb-3">اطلاعات تماس</h5>
            <p class="text-xs text-slate-400 leading-relaxed">
              مشهد، میدان آزادی، پردیس دانشگاه، دانشکده دامپزشکی<br />
              تلفن پذیرش: ۰۵۱-۳۸۸۰۴۰۰۰<br />
              پشتیبانی درگاه: زیپال شاپرک
            </p>
          </div>
        </div>

        <div class="border-t border-slate-800/80 pt-6 text-center text-xs text-slate-500">
          تمامی حقوق مادی و معنوی متعلق به بیمارستان دانشکده دامپزشکی و انجمن علمی جهش می‌باشد.
        </div>
      </div>
    </footer>
  `;
}

// تابع اصلی رندر بدنه برنامه بر اساس تب فعال
function renderMainContent() {
  switch (state.activeTab) {
    case 'departments':
      return renderDepartmentsSection();
    case 'professors':
      return renderProfessorsSection();
    case 'triage':
      return renderTriageSection();
    case 'register-doc':
      return renderDoctorRegisterSection();
    case 'track':
      return renderTrackSection();
    case 'home':
    default:
      return renderHomeSection();
  }
}

// رندر کامل برنامه
function renderApp() {
  const container = document.getElementById('vet-app');
  if (!container) return;

  container.innerHTML = `
    <div class="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 font-sans selection:bg-emerald-600 selection:text-white">
      ${renderHeader()}
      <main class="flex-1">
        ${renderMainContent()}
      </main>
      ${renderFooter()}

      <!-- تمام مدال‌های تعاملی -->
      ${renderBookingModal()}
      ${renderDoctorModal()}
      ${renderDeptModal()}
      ${renderInvoiceModal()}
      ${renderAuthModal()}
      ${renderMyAppointmentsModal()}
    </div>
  `;
}

// مقداردهی اولیه برنامه و بارگذاری داده‌ها از دیتابیس
async function initApp() {
  try {
    renderApp();
  } catch (err) {
    console.error("Initial render error:", err);
  }

  // بررسی بازگشت از درگاه پرداخت زیپال
  await handlePaymentReturn();

  try {
    const [deps, profs, appts] = await Promise.all([
      fetchDepartments(),
      fetchProfessors(),
      fetchAppointments()
    ]);
    if (deps && deps.length) state.departments = deps;
    if (profs && profs.length) state.professors = profs;
    if (appts && appts.length) state.appointments = appts;
    renderApp();
  } catch (e) {
    console.warn("Background sync error:", e);
  }
}

// شروع اجرا در صورت لود DOM
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initApp();
    });
  } else {
    initApp();
  }
}
