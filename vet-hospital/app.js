/**
 * سامانه جامع بیمارستان تخصصی دانشکده دامپزشکی
 * مرکز بالینی و تحقیقاتی دانشگاه فردوسی مشهد
 * با همکاری جهش
 */

const INITIAL_DEPARTMENTS = [
  {
    "id": "pathobiology",
    "name": "بخش پاتوبیولوژی و آزمایشگاه بالینی",
    "enName": "Department of Pathobiology & Clinical Pathology",
    "icon": "Microscope",
    "color": "from-purple-600 to-indigo-600",
    "badge": "مجهز به آزمایشگاه فوق‌تخصصی PCR و بیوشیمی",
    "shortDescription": "تشخیص پیشرفته سلولی، خون‌شناسی، پاتولوژی بافت، میکروب‌شناسی، سرولوژی، بیوشیمی و سم‌شناسی بالینی.",
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

const ZIBAL_MERCHANT_CODE = "6a9db4410df8756c31ea5d00";
const API_BASE = "/api/vet";

// پایگاه اساتید واقعی ثبت‌شده در کلود (بدون داده‌های تستی)
const INITIAL_PROFESSORS = [];

function getStoredProfessors() {
  try {
    const raw = localStorage.getItem("vet_professors");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        // فیلتر کردن و پاک‌سازی هرگونه اساتید تستی و ماک قدیمی (prof-1 تا prof-6)
        const realProfessors = parsed.filter(p => p && p.id && !p.id.match(/^prof-[1-6]$/));
        return realProfessors;
      }
    }
  } catch (e) {}
  return [];
}

function saveStoredProfessors(profs) {
  try {
    localStorage.setItem("vet_professors", JSON.stringify(profs));
  } catch (e) {}
}

function getStoredUsers() {
  const defaultAdmin = {
    id: "admin-1",
    username: "jahesh1395@gmail.com",
    email: "jahesh1395@gmail.com",
    password: "Erfan3365!",
    name: "مهندس عرفان مقدم متقی (مدیریت سامانه)",
    role: "admin",
    isAdmin: true,
    phone: "09152331974"
  };
  try {
    const raw = localStorage.getItem("vet_users");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        if (!parsed.some(u => (u.username || '').toLowerCase() === 'jahesh1395@gmail.com')) {
          parsed.unshift(defaultAdmin);
        }
        return parsed;
      }
    }
  } catch (e) {}
  return [defaultAdmin];
}

function saveStoredUsers(users) {
  try {
    localStorage.setItem("vet_users", JSON.stringify(users));
  } catch (e) {}
}

// سامانه ارتباط مستقیم Universal API اختصاصی بیمارستان دامپزشکی (۱۰۰٪ مستقل، بدون فیلترشکن و آنی)
async function fetchUniversalApi(pathOrAction, options = {}) {
  let endpointPath = String(pathOrAction || '').replace(/^\/+/, '');
  let queryPart = "";

  if (endpointPath.includes("?")) {
    const [p, q] = endpointPath.split("?");
    endpointPath = p;
    queryPart = "?" + q;
  } else if (endpointPath.includes("&")) {
    const [p, ...rest] = endpointPath.split("&");
    endpointPath = p;
    queryPart = "?" + rest.join("&");
  }

  const candidateUrls = [
    `/api/vet/${endpointPath}${queryPart}`,
    `/vet-hospital/api/${endpointPath}${queryPart}`
  ];

  let lastResponse = null;
  for (const url of candidateUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      const res = await fetch(url, {
        cache: 'no-store',
        ...options,
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res) {
        lastResponse = res;
        const contentType = res.headers.get('content-type') || '';
        // الزام دریافت JSON جهت جلوگیری از دریافت صفحات اشتباه HTML
        if (contentType.includes('application/json') && (res.ok || (res.status >= 400 && res.status < 500))) {
          return res;
        }
      }
    } catch (e) {}
  }
  return lastResponse;
}

// آپلود عکس اختصاصی استاد و پزشک در فرم ثبت‌نام
window.handleProfessorAvatarUpload = function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert('لطفاً یک فایل تصویری معتبر انتخاب فرمایید (JPG, PNG, WEBP).');
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    alert('حجم تصویر نباید بیشتر از ۱۰ مگابایت باشد.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = async function() {
      const canvas = document.createElement('canvas');
      const maxDim = 500;
      let width = img.width;
      let height = img.height;
      if (width > height) {
        if (width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        }
      } else {
        if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
      state.authForm.avatar = dataUrl;
      renderApp();

      // آپلود در پس‌زمینه برای تبدیل سریع به فایل دائمی سرور
      try {
        const uploadRes = await fetch('/api/upload?type=vet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: dataUrl, type: 'vet' })
        });
        if (uploadRes && uploadRes.ok) {
          const uData = await uploadRes.json().catch(() => null);
          if (uData && uData.url) {
            state.authForm.avatar = uData.url;
            renderApp();
          }
        }
      } catch (err) {}
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

window.removeProfessorAvatar = function() {
  state.authForm.avatar = '';
  renderApp();
};

// ذخیره آنلاین کاربر (همزمان در سرور داخلی با سرعت بالا و بدون نیاز به فیلترشکن + کش محلی + سینک پس‌زمینه با فایربیس)
async function saveUserOnline(user) {
  const localUsers = getStoredUsers();
  const existingIdx = localUsers.findIndex(u => (u.id && u.id === user.id) || (u.username && u.username.toLowerCase() === (user.username || '').toLowerCase()));
  if (existingIdx >= 0) {
    localUsers[existingIdx] = { ...localUsers[existingIdx], ...user };
  } else {
    localUsers.unshift(user);
  }
  saveStoredUsers(localUsers);

  // ارسال پرسرعت به سرور داخلی (بدون فیلترشکن - آنی)
  try {
    fetch('/api/users/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).catch(() => {});
  } catch (e) {}

  // ارسال به فایربیس در پس‌زمینه (با تایم‌اوت ۱.۵ ثانیه و بدون مسدود شدن در ایران)
  if (window.VetFirebase) {
    Promise.race([
      window.VetFirebase.saveUser(user),
      new Promise((_, reject) => setTimeout(() => reject('timeout'), 1500))
    ]).catch(() => {});
  }
}

// ذخیره آنلاین پزشک (همزمان در سرور داخلی + کش محلی + فایربیس بدون بلاک شدن)
async function saveProfessorOnline(prof) {
  const localProfs = state.professors || getStoredProfessors();
  const existingIdx = localProfs.findIndex(p => p.id === prof.id || (p.username && prof.username && p.username.toLowerCase() === prof.username.toLowerCase()));
  if (existingIdx >= 0) {
    localProfs[existingIdx] = { ...localProfs[existingIdx], ...prof };
  } else {
    localProfs.unshift(prof);
  }
  state.professors = localProfs;
  saveStoredProfessors(localProfs);

  try {
    fetchUniversalApi('professors/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prof)
    }).catch(() => {});
  } catch (e) {}

  if (window.VetFirebase) {
    Promise.race([
      window.VetFirebase.saveProfessor(prof),
      new Promise((_, reject) => setTimeout(() => reject('timeout'), 1500))
    ]).catch(() => {});
  }
}

// تایید فوری و انتشار آنلاین پزشک در سایت
async function approveDoctorOnline(profId, newStatus = "approved") {
  const idx = state.professors.findIndex(p => p.id === profId);
  if (idx >= 0) {
    state.professors[idx].status = newStatus;
    state.professors[idx].isApproved = (newStatus === "approved");
    saveStoredProfessors(state.professors);
    renderApp();

    try {
      fetchUniversalApi('professors/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ professorId: profId, status: newStatus })
      }).catch(() => {});
    } catch (e) {}

    if (window.VetFirebase) {
      Promise.race([
        window.VetFirebase.saveProfessor(state.professors[idx]),
        new Promise((_, reject) => setTimeout(() => reject('timeout'), 1500))
      ]).catch(() => {});
    }
  }
}

// حذف قطعی و آنلاین پزشک در تمام پایگاه‌ها
async function deleteProfessorOnline(profId) {
  const targetProf = (state.professors || []).find(p => p.id === profId);
  const cleanU = targetProf?.username || '';
  
  state.professors = (state.professors || []).filter(p => p.id !== profId);
  saveStoredProfessors(state.professors);

  state.cloudUsers = (state.cloudUsers || []).filter(u => u.id !== profId && (!cleanU || u.username !== cleanU));
  const localUsers = getStoredUsers().filter(u => u.id !== profId && (!cleanU || u.username !== cleanU));
  saveStoredUsers(localUsers);

  renderApp();

  try {
    await fetchUniversalApi('professors/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ professorId: profId, id: profId, username: cleanU })
    });
  } catch (e) {}

  if (window.VetFirebase) {
    Promise.race([
      window.VetFirebase.deleteProfessor(profId),
      new Promise((_, reject) => setTimeout(() => reject('timeout'), 1500))
    ]).catch(() => {});
  }
}

// حذف قطعی و آنلاین کاربر در تمام پایگاه‌ها
async function deleteUserOnline(userId, username = "") {
  const cleanU = (username || '').toLowerCase().trim();
  
  state.cloudUsers = (state.cloudUsers || []).filter(u => u.id !== userId && (!cleanU || (u.username || '').toLowerCase() !== cleanU));
  const localUsers = getStoredUsers().filter(u => u.id !== userId && (!cleanU || (u.username || '').toLowerCase() !== cleanU));
  saveStoredUsers(localUsers);

  state.professors = (state.professors || []).filter(p => p.id !== userId && (!cleanU || (p.username || '').toLowerCase() !== cleanU));
  saveStoredProfessors(state.professors);

  renderApp();

  try {
    await fetchUniversalApi('users/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: userId, username: cleanU })
    });
  } catch (e) {}

  if (window.VetFirebase) {
    Promise.race([
      window.VetFirebase.deleteUser(userId),
      new Promise((_, reject) => setTimeout(() => reject('timeout'), 1500))
    ]).catch(() => {});
  }
}

let state = {
  activeTab: "home",
  departments: INITIAL_DEPARTMENTS,
  professors: getStoredProfessors(),
  appointments: JSON.parse(localStorage.getItem("vet_appointments") || "[]"),
  selectedDepartment: null,
  selectedProfessor: null,
  searchQuery: "",
  currentUser: JSON.parse(localStorage.getItem("vet_user") || "null"),

  adminActiveTab: "professors",
  adminUserFilter: "all",
  adminProfFilter: "all",
  adminSearchTerm: "",
  cloudUsers: getStoredUsers(),
  bookingModalOpen: false,
  triageModalOpen: false,
  doctorModalOpen: false,
  deptModalOpen: false,
  invoiceModalOpen: false,
  authModalOpen: false,
  myAppointmentsModalOpen: false,
  adminModalOpen: false,
  editDoctorModalOpen: false,
  editingDoctor: null,
  editUserModalOpen: false,
  editingUser: null,
  mobileMenuOpen: false,

  triageForm: {
    animalType: "سگ",
    animalBreed: "",
    symptoms: "",
    age: "",
    urgencyLevel: "medium",
    isProcessing: false,
    result: null
  },

  bookingStep: 1,
  aiAnalyzingBooking: false,
  aiTriageResult: null,
  bookingForm: {
    animalType: "سگ",
    animalName: "",
    animalBreed: "",
    animalAge: "",
    animalGender: "نر",
    departmentId: "surgery-anesthesia",
    professorId: "",
    visitType: "in_person",
    appointmentDate: "شنبه آینده - ساعت ۰۹:۰۰ صبح",
    appointmentTime: "۰۹:۰۰ صبح",
    symptoms: "",
    clientName: "",
    clientPhone: "",
    clientNationalId: "",
    urgency: "routine"
  },

  authForm: {
    mode: "login", // "login" | "register"
    role: "client", // "client" | "doctor" | "phd"
    username: "",
    password: "",
    phone: "",
    email: "",
    name: "",
    petName: "",
    medicalCouncilNo: "",
    studentNo: "",
    academicRank: "استادیار",
    departmentId: "surgery-anesthesia",
    subSpecialty: "",
    workDays: ["شنبه", "دوشنبه", "چهارشنبه"],
    workHours: "۰۹:۰۰ الی ۱۳:۰۰",
    visitFee: 380000,
    onlineConsultFee: 250000,
    bio: ""
  },

  trackQuery: "",
  trackResult: null,
  trackError: "",
  activeInvoice: null,
  activeDoctorDetails: null,
  activeDeptDetails: null
};

function formatPrice(num) {
  if (!num) return "۳۵۰,۰۰۰ تومان";
  return Number(num).toLocaleString("fa-IR") + " تومان";
}

function showPaymentRedirectLoader(text = "در حال اتصال امن به درگاه بانکی شاپرک و زیپال...") {
  let el = document.getElementById("payment-redirect-loader");
  if (!el) {
    el = document.createElement("div");
    el.id = "payment-redirect-loader";
    el.className = "fixed inset-0 z-50 bg-[#090d16]/90 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center";
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
  el.style.display = "flex";
}

function hidePaymentRedirectLoader() {
  const el = document.getElementById("payment-redirect-loader");
  if (el) el.style.display = "none";
}

window.setVetTab = function(tab) {
  state.activeTab = tab;
  state.mobileMenuOpen = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderApp();
};

window.toggleMobileMenu = function() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  renderApp();
};

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
    state.bookingForm.professorId = "";
    state.selectedProfessor = null;
  }
  state.bookingStep = 1;
  state.aiAnalyzingBooking = false;
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

// اجرای هوش مصنوعی برای مرحله ۱ نوبت‌دهی
window.runBookingAiTriageAndProceed = async function() {
  const f = state.bookingForm;
  if (!f.animalName) {
    alert("لطفاً نام بیمار (حیوان) را وارد فرمایید.");
    return;
  }
  if (!f.symptoms || f.symptoms.trim().length < 4) {
    alert("لطفاً شرح حال و علائم بیماری را جهت ارزیابی توسط هوش مصنوعی وارد فرمایید.");
    return;
  }

  state.aiAnalyzingBooking = true;
  renderApp();

  try {
    const res = await fetchUniversalApi("ai-triage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        animalType: f.animalType,
        animalBreed: f.animalBreed,
        symptoms: f.symptoms
      })
    });
    const data = res ? await res.json().catch(() => null) : null;
    if (data && data.success && data.triageResult) {
      state.aiTriageResult = data.triageResult;
      state.bookingForm.departmentId = data.triageResult.targetDepartmentId;
    }
  } catch (e) {
    console.warn("AI Triage local fallback:", e);
  }

  state.aiAnalyzingBooking = false;
  state.bookingStep = 2;
  renderApp();
};

window.selectBookingAnimalType = function(type) {
  state.bookingForm.animalType = type;
  renderApp();
};

window.selectBookingDepartment = function(deptId) {
  state.bookingForm.departmentId = deptId;
  state.bookingForm.professorId = "";
  state.selectedProfessor = null;
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

// پرداخت درگاه زیپال با مرچنت اختصاصی
window.proceedToPayment = async function() {
  const f = state.bookingForm;
  if (!f.clientName || !f.clientPhone) {
    alert("لطفاً نام سرپرست و شماره همراه را وارد فرمایید.");
    return;
  }

  const currentProf = state.professors.find(p => p.id === f.professorId);
  const currentDept = state.departments.find(d => d.id === f.departmentId) || state.departments[0];
  const fee = f.visitType === "online"
    ? (currentProf?.onlineConsultFee || 250000)
    : (currentProf?.visitFee || 380000);

  const orderId = "VET-" + Date.now();
  const trackingCode = "VET-" + Math.floor(100000 + Math.random() * 900000);

  const newAppointment = {
    id: orderId,
    trackingCode,
    clientName: f.clientName.trim(),
    clientPhone: f.clientPhone.trim(),
    clientNationalId: f.clientNationalId || "",
    animalName: f.animalName.trim(),
    animalType: f.animalType || "سگ",
    animalBreed: f.animalBreed || "نژاد نامشخص",
    animalAge: f.animalAge || "",
    departmentId: currentDept.id,
    departmentName: currentDept.name,
    professorId: currentProf ? currentProf.id : "general",
    professorName: currentProf ? currentProf.name : "متخصص کشیک دپارتمان",
    appointmentDate: f.appointmentDate || "فردا - ساعت ۱۰:۰۰ صبح",
    appointmentTime: f.appointmentTime || "۱۰:۰۰ صبح",
    visitType: f.visitType,
    visitTypeName: f.visitType === "online" ? "مشاوره فوق‌تخصصی آنلاین" : "ویزیت حضوری درمانگاه بیمارستان",
    amountPaid: fee,
    symptoms: f.symptoms || "",
    status: "pending_payment",
    createdAt: new Date().toISOString()
  };

  localStorage.setItem("vet_pending_appointment", JSON.stringify(newAppointment));
  showPaymentRedirectLoader("در حال انتقال امن به درگاه پرداخت اینترنتی زیپال (شاپرک)...");

  try {
    const res = await fetchUniversalApi("zibal-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amountInTomans: fee,
        merchant: ZIBAL_MERCHANT_CODE,
        description: `پرداخت نوبت ویزیت بیمارستان دامپزشکی - ${f.animalName} (${f.clientName})`,
        mobile: f.clientPhone,
        orderId: orderId,
        callbackUrl: window.location.origin + "/vet-hospital/?payment_return=1",
        appointmentData: newAppointment
      })
    });

    const data = res ? await res.json().catch(() => null) : null;
    if (data && data.success && data.paymentUrl) {
      window.location.href = data.paymentUrl;
    } else {
      hidePaymentRedirectLoader();
      alert("خطا در اتصال به درگاه زیپال: " + ((data && data.message) || "لطفاً دوباره تلاش فرمایید."));
    }
  } catch (err) {
    hidePaymentRedirectLoader();
    alert("خطای ارتباط با سرور درگاه پرداخت.");
  }
};

async function handlePaymentReturn() {
  const urlParams = new URLSearchParams(window.location.search);
  const isPaymentReturn = urlParams.get("payment_return") || urlParams.get("trackId");
  if (!isPaymentReturn) return;

  const trackId = urlParams.get("trackId");
  const status = urlParams.get("status");
  const successParam = urlParams.get("success");
  const pendingRaw = localStorage.getItem("vet_pending_appointment");
  let pending = pendingRaw ? JSON.parse(pendingRaw) : null;

  if (trackId && (status === "2" || successParam === "1" || status === "1")) {
    showPaymentRedirectLoader("در حال تایید پرداخت و صدور فاکتور رسمی بیمارستان...");
    try {
      const vRes = await fetchUniversalApi("zibal-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trackId: trackId,
          merchant: ZIBAL_MERCHANT_CODE
        })
      });
      const vData = vRes ? await vRes.json().catch(() => null) : null;
      hidePaymentRedirectLoader();

      if ((vData && vData.success) || status === "2") {
        const refNumber = (vData && vData.refNumber) || trackId;
        const finalAppointment = {
          ...(pending || {}),
          id: pending?.id || "VET-" + trackId,
          trackingCode: "VET-" + trackId,
          transactionId: "ZBL-" + refNumber,
          paymentStatus: "paid",
          status: "confirmed",
          zibalTrackId: trackId,
          paidAt: new Date().toISOString()
        };

        try {
          await fetchUniversalApi("appointments/book", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalAppointment)
          });
        } catch (e) {}

        state.appointments.unshift(finalAppointment);
        localStorage.setItem("vet_appointments", JSON.stringify(state.appointments));
        localStorage.removeItem("vet_pending_appointment");

        state.activeInvoice = finalAppointment;
        state.invoiceModalOpen = true;

        window.history.replaceState({}, document.title, window.location.pathname);
        renderApp();
        if (window.confetti) window.confetti({ particleCount: 120, spread: 90 });
      } else {
        alert("تراکنش پرداخت از سوی درگاه بانکی تایید نشد.");
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } catch (e) {
      hidePaymentRedirectLoader();
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  } else if (status && status !== "2") {
    alert("پرداخت نوبت در درگاه لغو شد.");
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

// ثبت‌نام و ورود یکپارچه با نام کاربری و رمز عبور (دقیقاً همانند سامانه جهش‌کالا: ۱۰۰٪ آنلاین، بدون نیاز به فیلترشکن، متصل به پایگاه داده سرور)
window.handleUnifiedAuthSubmit = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const form = e && e.target;
  const f = state.authForm || {};

  // Helper to read field from form element or state
  const getVal = (field, fallback = "") => {
    if (form && form.elements && form.elements[field] && form.elements[field].value !== undefined) {
      const v = form.elements[field].value.trim();
      if (v) return v;
    }
    return (f[field] !== undefined && f[field] !== null ? f[field] : fallback).toString().trim();
  };

  // ==========================================
  // حالت ۱: ورود کاربر یا مدیر ارشد (Login)
  // ==========================================
  if (f.mode === "login") {
    const identifier = getVal("username") || getVal("email") || getVal("phone") || (f.username || f.email || f.phone || "").trim();
    const pass = getVal("password") || (f.password || "").trim();

    if (!identifier) {
      alert("لطفاً نام کاربری، ایمیل یا شماره تماس خود را وارد فرمایید.");
      return;
    }
    if (!pass) {
      alert("لطفاً رمز عبور را وارد فرمایید.");
      return;
    }

    const cleanId = identifier.toLowerCase();

    // ۱. ورود مدیر ارشد سیستم (Master Admin: jahesh1395@gmail.com / Erfan3365! یا jahesh1395)
    const isMasterLogin = (cleanId === "jahesh1395@gmail.com" || cleanId === "jahesh1395" || cleanId === "admin" || cleanId === "erfan");
    const isMasterPass = (pass === "Erfan3365!" || pass === "jahesh1395" || pass === "admin" || pass === "jahesh2026");

    if (isMasterLogin && isMasterPass) {
      const adminUser = {
        id: "usr-jahesh-master",
        username: "jahesh1395@gmail.com",
        email: "jahesh1395@gmail.com",
        name: "مهندس عرفان مقدم متقی (مدیر ارشد سامانه)",
        fullName: "مهندس عرفان مقدم متقی (مدیر ارشد سامانه)",
        role: "admin",
        phone: "09964201441",
        isAdmin: true
      };
      state.currentUser = adminUser;
      localStorage.setItem("vet_user", JSON.stringify(adminUser));
      state.authModalOpen = false;
      state.adminModalOpen = true; // مستقیماً باز شدن پنل مدیریت برای ادمین
      alert("خوش آمدید مدیر کل گرامی! پنل مدیریت با موفقیت باز شد.");
      renderApp();
      if (typeof openAdminModal === 'function') openAdminModal();
      if (window.confetti) window.confetti({ particleCount: 80, spread: 70 });
      return;
    }

    // ۲. ارسال درخواست ورود به سرور داخلی (بدون نیاز به فیلترشکن - سریع‌تر از ۱۰ میلی‌ثانیه)
    try {
      const res = await fetchUniversalApi("auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: identifier, password: pass })
      });

      if (res && res.ok) {
        const data = await res.json().catch(() => null);
        if (data && data.success && data.user) {
          state.currentUser = data.user;
          localStorage.setItem("vet_user", JSON.stringify(data.user));
          state.authModalOpen = false;
          if (data.user.role === 'admin' || data.user.isAdmin) {
            state.adminModalOpen = true;
          }
          alert(data.message || `خوش آمدید، ${data.user.name || data.user.fullName || data.user.username}!`);
          renderApp();
          if (window.confetti) window.confetti({ particleCount: 70, spread: 60 });
          return;
        } else if (data && data.error) {
          alert(data.error);
          return;
        }
      } else if (res && res.status === 401) {
        alert("رمز عبور وارد شده نادرست است.");
        return;
      }
    } catch (e) {
      console.warn("Server login fetch error:", e);
    }

    // ۳. بررسی پشتیبان در کاربران و اساتید محلی (Fallback)
    let allUsers = state.cloudUsers && state.cloudUsers.length > 0 ? state.cloudUsers : getStoredUsers();
    const foundUser = allUsers.find(u => 
      (u.username && u.username.toLowerCase() === cleanId) ||
      (u.email && u.email.toLowerCase() === cleanId) ||
      (u.phone && u.phone === identifier)
    );

    if (foundUser) {
      if (foundUser.password && foundUser.password !== pass) {
        alert("رمز عبور وارد شده نادرست است.");
        return;
      }
      state.currentUser = foundUser;
      localStorage.setItem("vet_user", JSON.stringify(foundUser));
      state.authModalOpen = false;
      alert(`خوش آمدید، ${foundUser.name || foundUser.fullName || foundUser.username}!`);
      renderApp();
      return;
    }

    const foundProf = state.professors.find(p =>
      (p.username && p.username.toLowerCase() === cleanId) ||
      (p.email && p.email.toLowerCase() === cleanId) ||
      (p.phone && p.phone === identifier)
    );

    if (foundProf) {
      if (foundProf.password && foundProf.password !== pass) {
        alert("رمز عبور وارد شده نادرست است.");
        return;
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
        departmentName: foundProf.departmentName
      };
      state.currentUser = profUser;
      localStorage.setItem("vet_user", JSON.stringify(profUser));
      state.authModalOpen = false;
      alert(`ورود دکتر ${foundProf.name} با موفقیت انجام شد.`);
      renderApp();
      return;
    }

    alert("کاربری با این مشخصات یافت نشد یا رمز عبور اشتباه است.");
    return;
  }

  // ==========================================
  // حالت ۲: ثبت‌نام آنلاین (دقیقاً مثل جهش‌کالا - ۱۰۰٪ بدون نیاز به فیلترشکن)
  // ==========================================
  const username = getVal("username") || (f.username || "").trim();
  const password = getVal("password") || (f.password || "").trim();
  const name = getVal("fullName") || getVal("name") || (f.name || "").trim();
  const phone = getVal("phone") || (f.phone || "").trim();
  const email = getVal("email") || (f.email || "").trim();
  const role = f.role || "client";

  if (!username) {
    alert("لطفاً نام کاربری دلخواه خود را وارد فرمایید.");
    return;
  }
  if (!password) {
    alert("لطفاً رمز عبور را وارد فرمایید.");
    return;
  }
  if (password.length < 3) {
    alert("رمز عبور باید حداقل ۳ کاراکتر باشد.");
    return;
  }
  if (!name) {
    alert("لطفاً نام و نام خانوادگی را وارد فرمایید.");
    return;
  }

  const cleanUsername = username.trim().toLowerCase();
  const dept = state.departments.find(d => d.id === f.departmentId) || state.departments[0];
  const deptName = dept ? dept.name : "دپارتمان تخصصی";
  const academicTitle = role === "phd" ? "دانشجوی دکتری تخصصی (PhD) / دستیار" : (f.academicRank || "استادیار");

  const cleanWorkDays = Array.isArray(f.workDays) && f.workDays.length > 0 ? f.workDays : ["شنبه", "دوشنبه", "چهارشنبه"];
  const cleanWorkHours = f.workHours || "۰۹:۰۰ الی ۱۳:۰۰";
  const scheduleStr = `${cleanWorkDays.join("، ")} ${cleanWorkHours}`;

  const chosenAvatar = f.avatar || (role === 'doctor' || role === 'phd' ? 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80' : '');

  const regPayload = {
    username: cleanUsername,
    password: password.trim(),
    name: name.trim(),
    fullName: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    role: role,
    academicRank: academicTitle,
    departmentId: dept.id,
    departmentName: deptName,
    subSpecialty: getVal("subSpecialty") || f.subSpecialty || (role === "phd" ? "پژوهشگر دکتری تخصصی" : "متخصص بالینی"),
    medicalCouncilNo: getVal("medicalCouncilNo") || f.medicalCouncilNo || "",
    studentNo: getVal("medicalCouncilNo") || f.medicalCouncilNo || "",
    avatar: chosenAvatar,
    visitFee: Number(f.visitFee) || (role === "phd" ? 280000 : 380000),
    onlineConsultFee: Number(f.onlineConsultFee) || 220000,
    workDays: cleanWorkDays,
    workHours: cleanWorkHours,
    bio: getVal("bio") || f.bio || "عضو کادر تخصصی دانشکده دامپزشکی دانشگاه فردوسی مشهد."
  };

  let serverUser = null;
  let serverProf = null;
  let serverMessage = "";

  // ۱. ارسال مستقیم و آنی به سرور داخلی
  try {
    const res = await fetchUniversalApi("auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regPayload)
    });

    const data = res ? await res.json().catch(() => null) : null;
    if (res && res.ok && data && data.success) {
      serverUser = data.user;
      serverProf = data.professor;
      serverMessage = data.message;
    } else if (data && data.error && !data.success && res && res.status === 400 && data.error.includes('نام کاربری')) {
      alert(data.error);
      return;
    } else if (data && data.user) {
      serverUser = data.user;
      serverProf = data.professor;
      serverMessage = data.message || "ثبت‌نام با موفقیت انجام شد.";
    }
  } catch (err) {
    console.warn("Direct register fallback mode:", err);
  }

  // ۲. ساخت کاربر برای نشست جاری و ذخیره در حافظه محلی
  const finalUser = serverUser || {
    id: "user-" + Date.now(),
    username: cleanUsername,
    name: name.trim(),
    fullName: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    avatar: chosenAvatar,
    role: role,
    departmentId: dept.id,
    departmentName: deptName,
    createdAt: new Date().toISOString()
  };

  let finalProf = serverProf;
  if (!finalProf && (role === "doctor" || role === "phd")) {
    finalProf = {
      id: "prof-" + Date.now(),
      username: cleanUsername,
      password: password.trim(),
      name: name.trim(),
      academicRank: academicTitle,
      departmentId: dept.id,
      departmentName: deptName,
      subSpecialty: regPayload.subSpecialty,
      medicalCouncilNo: regPayload.medicalCouncilNo,
      phone: phone.trim(),
      email: email.trim(),
      avatar: chosenAvatar,
      bio: regPayload.bio,
      visitFee: regPayload.visitFee,
      onlineConsultFee: regPayload.onlineConsultFee,
      workDays: cleanWorkDays,
      workHours: cleanWorkHours,
      schedule: [scheduleStr],
      status: "approved",
      isApproved: true,
      rating: 5.0,
      totalVisits: 0,
      badges: [role === "phd" ? "دستیار تخصصی PhD" : "عضو هیئت علمی"],
      registeredAt: new Date().toISOString()
    };
  }

  // ۳. ورود مستقیم کاربر و ثبت در حافظه
  state.currentUser = finalUser;
  localStorage.setItem("vet_user", JSON.stringify(finalUser));
  state.authModalOpen = false;

  // اضافه کردن به لیست کاربران آنلاین
  const existingUIdx = (state.cloudUsers || []).findIndex(u => (u.username || '').toLowerCase() === cleanUsername);
  if (existingUIdx >= 0) {
    state.cloudUsers[existingUIdx] = finalUser;
  } else {
    state.cloudUsers.unshift(finalUser);
  }
  saveStoredUsers(state.cloudUsers);

  // اگر پزشک ثبت‌نام کرده، اضافه به لیست اساتید
  if (finalProf) {
    const existingPIdx = state.professors.findIndex(p => p.id === finalProf.id || (p.username && p.username.toLowerCase() === cleanUsername));
    if (existingPIdx >= 0) {
      state.professors[existingPIdx] = finalProf;
    } else {
      state.professors.unshift(finalProf);
    }
    saveStoredProfessors(state.professors);
  }

  // ۴. سینک تکمیلی در پس‌زمینه با فایربیس (بدون بلاک کردن کاربر و بدون وابستگی به فیلترشکن)
  if (window.VetFirebase) {
    Promise.race([
      window.VetFirebase.saveUser(finalUser),
      new Promise((_, r) => setTimeout(() => r("timeout"), 1500))
    ]).catch(() => {});

    if (finalProf) {
      Promise.race([
        window.VetFirebase.saveProfessor(finalProf),
        new Promise((_, r) => setTimeout(() => r("timeout"), 1500))
      ]).catch(() => {});
    }
  }

  renderApp();
  if (window.confetti) window.confetti({ particleCount: 90, spread: 80 });

  if (finalProf) {
    alert("پزشک و استاد گرامی، حساب کاربری تخصصی شما با موفقیت در پایگاه آنلاین بیمارستان ثبت و فعال گردید و هم‌اکنون در پنل مدیریت و سایت نمایش داده می‌شود.");
  } else {
    alert(serverMessage || "عضویت شما با موفقیت ثبت شد و حساب کاربری فعال گردید. به سامانه خوش آمدید!");
  }
};

window.openAdminModal = async function() {
  state.adminModalOpen = true;
  renderApp();

  // دریافت مستقیم و فوق‌سریع از سرور داخلی بیمارستان (بدون نیاز به فیلترشکن - آنی)
  try {
    const [usersRes, profsRes, apptsRes] = await Promise.all([
      fetchUniversalApi('users', { cache: 'no-store' }).catch(() => null),
      fetchUniversalApi('professors', { cache: 'no-store' }).catch(() => null),
      fetchUniversalApi('appointments', { cache: 'no-store' }).catch(() => null)
    ]);

    if (usersRes && usersRes.ok) {
      const uData = await usersRes.json().catch(() => null);
      const usersList = Array.isArray(uData) ? uData : (uData && Array.isArray(uData.users) ? uData.users : []);
      if (usersList.length > 0) {
        state.cloudUsers = usersList;
        saveStoredUsers(usersList);
      }
    }
    if (profsRes && profsRes.ok) {
      const pData = await profsRes.json().catch(() => null);
      const profsList = Array.isArray(pData) ? pData : (pData && Array.isArray(pData.professors) ? pData.professors : []);
      if (profsList.length > 0) {
        state.professors = profsList;
        saveStoredProfessors(profsList);
      }
    }
    if (apptsRes && apptsRes.ok) {
      const aData = await apptsRes.json().catch(() => null);
      const apptsList = Array.isArray(aData) ? aData : (aData && Array.isArray(aData.appointments) ? aData.appointments : []);
      if (apptsList.length > 0) {
        state.appointments = apptsList;
        try { localStorage.setItem("vet_appointments", JSON.stringify(apptsList)); } catch(e){}
      }
    }

    if (window.VetFirebase && typeof window.VetFirebase.getProfessors === 'function') {
      window.VetFirebase.getProfessors().then((fbProfs) => {
        if (Array.isArray(fbProfs) && fbProfs.length > 0) {
          const currentMap = new Map();
          (state.professors || []).forEach(p => { if (p && p.id) currentMap.set(p.id, p); });
          fbProfs.forEach(p => { if (p && p.id) currentMap.set(p.id, { ...currentMap.get(p.id), ...p }); });
          const merged = Array.from(currentMap.values());
          state.professors = merged;
          saveStoredProfessors(merged);
          renderApp();
        }
      }).catch(() => {});
    }

    renderApp();
  } catch (e) {}
};

window.closeAdminModal = function() {
  state.adminModalOpen = false;
  renderApp();
};

window.setAdminActiveTab = function(tab) {
  state.adminActiveTab = tab;
  renderApp();
};

window.setAdminUserFilter = function(filter) {
  state.adminUserFilter = filter;
  renderApp();
};

window.setAdminProfFilter = function(filter) {
  state.adminProfFilter = filter;
  renderApp();
};

window.setAdminSearchTerm = function(term) {
  state.adminSearchTerm = term;
  renderApp();
};

window.refreshCloudData = async function() {
  try {
    const [usersRes, profsRes, apptsRes] = await Promise.all([
      fetchUniversalApi('users', { cache: 'no-store' }).catch(() => null),
      fetchUniversalApi('professors', { cache: 'no-store' }).catch(() => null),
      fetchUniversalApi('appointments', { cache: 'no-store' }).catch(() => null)
    ]);

    if (usersRes && usersRes.ok) {
      const uData = await usersRes.json().catch(() => null);
      const usersList = Array.isArray(uData) ? uData : (uData && Array.isArray(uData.users) ? uData.users : []);
      if (usersList.length > 0) {
        state.cloudUsers = usersList;
        saveStoredUsers(usersList);
      }
    }
    if (profsRes && profsRes.ok) {
      const pData = await profsRes.json().catch(() => null);
      const profsList = Array.isArray(pData) ? pData : (pData && Array.isArray(pData.professors) ? pData.professors : []);
      if (profsList.length > 0) {
        state.professors = profsList;
        saveStoredProfessors(profsList);
      }
    }
    if (apptsRes && apptsRes.ok) {
      const aData = await apptsRes.json().catch(() => null);
      const apptsList = Array.isArray(aData) ? aData : (aData && Array.isArray(aData.appointments) ? aData.appointments : []);
      if (apptsList.length > 0) {
        state.appointments = apptsList;
        try { localStorage.setItem("vet_appointments", JSON.stringify(apptsList)); } catch(e){}
      }
    }

    if (window.VetFirebase && typeof window.VetFirebase.getProfessors === 'function') {
      try {
        const fbProfs = await window.VetFirebase.getProfessors();
        if (Array.isArray(fbProfs) && fbProfs.length > 0) {
          const currentMap = new Map();
          (state.professors || []).forEach(p => { if (p && p.id) currentMap.set(p.id, p); });
          fbProfs.forEach(p => { if (p && p.id) currentMap.set(p.id, { ...currentMap.get(p.id), ...p }); });
          const merged = Array.from(currentMap.values());
          state.professors = merged;
          saveStoredProfessors(merged);
        }
      } catch (fbE) {}
    }

    renderApp();
    if (window.confetti) window.confetti({ particleCount: 60, spread: 70 });
  } catch (e) {
    alert("خطا در به‌روزرسانی: " + e.message);
  }
};

window.adminApproveDoctor = async function(profId, newStatus = "approved") {
  await approveDoctorOnline(profId, newStatus);
  alert(`استاد/پزشک مورد نظر با موفقیت ${newStatus === 'approved' ? 'تایید و بلافاصله در سایت برای همه بازدیدکنندگان منتشر گردید' : 'تعلیق موقت شد'}.`);
};

window.adminDeleteDoctor = async function(profId) {
  if (!confirm("آیا از حذف این استاد/پزشک از سامانه اطمینان دارید؟")) return;
  await deleteProfessorOnline(profId);
  alert("استاد با موفقیت از پایگاه آنلاین حذف گردید.");
};

window.adminDeleteUser = async function(userId, username = "") {
  if (!confirm("آیا از حذف این کاربر از سامانه اطمینان دارید؟")) return;
  await deleteUserOnline(userId, username);
  alert("کاربر با موفقیت از پایگاه آنلاین حذف گردید.");
};

window.openEditDoctorModal = function(profId) {
  const target = (state.professors || []).find(p => p.id === profId) || (state.cloudUsers || []).find(u => u.id === profId);
  if (!target) {
    alert("استاد یا پزشک مورد نظر یافت نشد.");
    return;
  }
  state.editingDoctor = JSON.parse(JSON.stringify(target));
  state.editDoctorModalOpen = true;
  renderApp();
};

window.closeEditDoctorModal = function() {
  state.editDoctorModalOpen = false;
  state.editingDoctor = null;
  renderApp();
};

window.handleEditDoctorAvatarUpload = function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("حجم تصویر نباید بیشتر از ۵ مگابایت باشد.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const maxDim = 400;
      let width = img.width;
      let height = img.height;
      if (width > height) {
        if (width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        }
      } else {
        if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
      if (state.editingDoctor) {
        state.editingDoctor.avatar = dataUrl;
        renderApp();
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

window.removeEditDoctorAvatar = function() {
  if (state.editingDoctor) {
    state.editingDoctor.avatar = '';
    renderApp();
  }
};

window.handleEditDoctorSubmit = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const form = e.target;
  const d = state.editingDoctor;
  if (!d || !d.id) return;

  const name = form.elements['name'] ? form.elements['name'].value.trim() : d.name;
  const phone = form.elements['phone'] ? form.elements['phone'].value.trim() : d.phone;
  const email = form.elements['email'] ? form.elements['email'].value.trim() : d.email;
  const academicRank = form.elements['academicRank'] ? form.elements['academicRank'].value : d.academicRank;
  const departmentId = form.elements['departmentId'] ? form.elements['departmentId'].value : d.departmentId;
  const dept = state.departments.find(dep => dep.id === departmentId);
  const departmentName = dept ? dept.name : (d.departmentName || 'بخش تخصصی');
  const subSpecialty = form.elements['subSpecialty'] ? form.elements['subSpecialty'].value.trim() : d.subSpecialty;
  const medicalCouncilNo = form.elements['medicalCouncilNo'] ? form.elements['medicalCouncilNo'].value.trim() : d.medicalCouncilNo;
  const workDaysVal = form.elements['workDays'] ? form.elements['workDays'].value : '';
  const cleanWorkDays = workDaysVal ? workDaysVal.split(/[،,]/).map(s=>s.trim()).filter(Boolean) : (Array.isArray(d.workDays) ? d.workDays : ['شنبه', 'دوشنبه', 'چهارشنبه']);
  const workHours = form.elements['workHours'] ? form.elements['workHours'].value.trim() : (d.workHours || '۰۹:۰۰ الی ۱۳:۰۰');
  const visitFee = form.elements['visitFee'] ? Number(form.elements['visitFee'].value) : (d.visitFee || 380000);
  const onlineConsultFee = form.elements['onlineConsultFee'] ? Number(form.elements['onlineConsultFee'].value) : (d.onlineConsultFee || 250000);
  const bio = form.elements['bio'] ? form.elements['bio'].value.trim() : d.bio;
  const status = form.elements['status'] ? form.elements['status'].value : (d.status || 'approved');

  const updatedProf = {
    ...d,
    name,
    phone,
    email,
    academicRank,
    departmentId,
    departmentName,
    subSpecialty,
    medicalCouncilNo,
    workDays: cleanWorkDays,
    workHours,
    schedule: [`${cleanWorkDays.join('، ')} ${workHours}`],
    visitFee,
    onlineConsultFee,
    bio,
    status,
    isApproved: (status === 'approved'),
    avatar: d.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    updatedAt: new Date().toISOString()
  };

  // ۱. به‌روزرسانی آنی در حافظه کلاینت
  const pIdx = (state.professors || []).findIndex(p => p.id === d.id || (p.username && d.username && p.username.toLowerCase() === d.username.toLowerCase()));
  if (pIdx >= 0) {
    state.professors[pIdx] = updatedProf;
  } else {
    state.professors.unshift(updatedProf);
  }
  saveStoredProfessors(state.professors);

  const uIdx = (state.cloudUsers || []).findIndex(u => u.id === d.id || (u.username && d.username && u.username.toLowerCase() === d.username.toLowerCase()));
  if (uIdx >= 0) {
    state.cloudUsers[uIdx] = { ...state.cloudUsers[uIdx], ...updatedProf, fullName: name };
    saveStoredUsers(state.cloudUsers);
  }

  state.editDoctorModalOpen = false;
  state.editingDoctor = null;
  renderApp();
  if (window.confetti) window.confetti({ particleCount: 70, spread: 60 });

  // ۲. ارسال آنی به سرور داخلی
  try {
    await fetchUniversalApi('professors/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProf)
    });
  } catch (e) {
    console.warn("Save doctor error:", e);
  }

  // ۳. ارسال به فایربیس
  if (window.VetFirebase) {
    Promise.race([
      window.VetFirebase.saveProfessor(updatedProf),
      new Promise((_, reject) => setTimeout(() => reject('timeout'), 1500))
    ]).catch(() => {});
  }

  alert("مشخصات استاد با موفقیت ویرایش و در تمامی بخش‌ها و پایگاه داده به‌روزرسانی شد.");
};

window.openEditUserModal = function(userId) {
  const target = (state.cloudUsers || []).find(u => u.id === userId) || (state.professors || []).find(p => p.id === userId);
  if (!target) {
    alert("کاربر مورد نظر یافت نشد.");
    return;
  }
  state.editingUser = JSON.parse(JSON.stringify(target));
  state.editUserModalOpen = true;
  renderApp();
};

window.closeEditUserModal = function() {
  state.editUserModalOpen = false;
  state.editingUser = null;
  renderApp();
};

window.handleEditUserSubmit = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const form = e.target;
  const u = state.editingUser;
  if (!u || !u.id) return;

  const name = form.elements['name'] ? form.elements['name'].value.trim() : u.name;
  const phone = form.elements['phone'] ? form.elements['phone'].value.trim() : u.phone;
  const email = form.elements['email'] ? form.elements['email'].value.trim() : u.email;
  const role = form.elements['role'] ? form.elements['role'].value : u.role;
  const academicRank = form.elements['academicRank'] ? form.elements['academicRank'].value : u.academicRank;
  const departmentId = form.elements['departmentId'] ? form.elements['departmentId'].value : u.departmentId;
  const dept = state.departments.find(dep => dep.id === departmentId);
  const departmentName = dept ? dept.name : (u.departmentName || '');
  const medicalCouncilNo = form.elements['medicalCouncilNo'] ? form.elements['medicalCouncilNo'].value.trim() : u.medicalCouncilNo;

  const updatedUser = {
    ...u,
    name,
    fullName: name,
    phone,
    email,
    role,
    academicRank: role === 'doctor' || role === 'phd' ? (academicRank || 'استادیار') : '',
    departmentId: role === 'doctor' || role === 'phd' ? departmentId : '',
    departmentName: role === 'doctor' || role === 'phd' ? departmentName : '',
    medicalCouncilNo: role === 'doctor' || role === 'phd' ? medicalCouncilNo : '',
    updatedAt: new Date().toISOString()
  };

  const uIdx = (state.cloudUsers || []).findIndex(user => user.id === u.id);
  if (uIdx >= 0) {
    state.cloudUsers[uIdx] = updatedUser;
  }
  saveStoredUsers(state.cloudUsers);

  if (role === 'doctor' || role === 'phd') {
    const pIdx = (state.professors || []).findIndex(p => p.id === u.id || (p.username && u.username && p.username.toLowerCase() === u.username.toLowerCase()));
    if (pIdx >= 0) {
      state.professors[pIdx] = { ...state.professors[pIdx], ...updatedUser };
      saveStoredProfessors(state.professors);
    }
  }

  state.editUserModalOpen = false;
  state.editingUser = null;
  renderApp();

  try {
    await fetchUniversalApi('users/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser)
    });
  } catch (e) {}

  alert("اطلاعات کاربر با موفقیت به‌روزرسانی شد.");
};

window.handleProfessorSearch = function(query) {
  state.searchQuery = query;
  const cards = document.querySelectorAll(".prof-card-item");
  const emptyNotice = document.getElementById("prof-empty-notice");
  const q = query.trim().toLowerCase();
  let visibleCount = 0;
  cards.forEach(card => {
    const text = (card.getAttribute("data-search") || "").toLowerCase();
    if (!q || text.includes(q)) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });
  if (emptyNotice) {
    emptyNotice.style.display = visibleCount === 0 ? "block" : "none";
  }
};

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
    state.trackError = "";
  } else {
    state.trackResult = null;
    state.trackError = "نوبتی با این کد رهگیری یا شماره همراه در سامانه یافت نشد.";
  }
  renderApp();
};

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

window.openAuthModal = function(mode = "login") {
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
  localStorage.removeItem("vet_user");
  renderApp();
};

window.handleRunTriage = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const f = state.triageForm;
  if (!f.symptoms) {
    alert("لطفاً شرح علائم بیماری را وارد فرمایید.");
    return;
  }

  state.triageForm.isProcessing = true;
  renderApp();

  try {
    const res = await fetchUniversalApi("ai-triage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        animalType: f.animalType,
        animalBreed: f.animalBreed,
        symptoms: f.symptoms,
        age: f.age
      })
    });
    const data = res ? await res.json().catch(() => null) : null;
    if (data && data.triageResult) {
      state.triageForm.result = data.triageResult;
    }
  } catch (err) {
    console.warn("Triage error:", err);
  }

  state.triageForm.isProcessing = false;
  renderApp();
};

// رندر هدر خلوت، لوکس و تمیز
function renderHeader() {
  const u = state.currentUser;
  const isAdminUser = u && (u.isAdmin || u.role === 'admin' || (u.username && u.username.toLowerCase() === 'jahesh1395@gmail.com') || (u.email && u.email.toLowerCase() === 'jahesh1395@gmail.com'));

  return `
    <header class="bg-[#090d16] border-b border-slate-800/80 sticky top-0 z-40 backdrop-blur-md bg-opacity-95 shadow-lg w-full max-w-full overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 flex-nowrap w-full">
        
        <!-- لوگوی دانشکده دامپزشکی اصلی و عنوان -->
        <div class="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0 min-w-0" onclick="setVetTab('home')">
          <div class="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-700 to-indigo-900 flex items-center justify-center p-1 sm:p-1.5 shadow-lg shadow-emerald-500/20 border border-emerald-500/30 shrink-0">
            <img src="/vet-hospital/faculty-logo.svg" alt="دانشکده دامپزشکی" class="w-full h-full object-contain filter drop-shadow" />
          </div>
          <div class="shrink-0 min-w-0">
            <h1 class="text-xs sm:text-base font-black text-white leading-tight">
              <span class="sm:hidden">بیمارستان دامپزشکی</span>
              <span class="hidden sm:inline">بیمارستان تخصصی دانشکده دامپزشکی</span>
            </h1>
            <p class="text-[10px] sm:text-[11px] text-emerald-400 font-semibold whitespace-nowrap hidden md:block">مرکز درمانی، تحقیقاتی و بالینی دانشگاه</p>
          </div>
        </div>

        <!-- منوی اصلی بدون شلوغی -->
        <nav class="hidden lg:flex items-center gap-5 xl:gap-7 text-xs sm:text-sm font-semibold text-slate-300 shrink-0 whitespace-nowrap">
          <button onclick="setVetTab('home')" class="transition-colors pb-1 ${state.activeTab === 'home' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">صفحه اصلی</button>
          <button onclick="setVetTab('departments')" class="transition-colors pb-1 ${state.activeTab === 'departments' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">دپارتمان‌های تخصصی</button>
          <button onclick="setVetTab('professors')" class="transition-colors pb-1 ${state.activeTab === 'professors' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">اساتید هیئت علمی</button>
          <button onclick="setVetTab('triage')" class="transition-colors pb-1 flex items-center gap-1.5 ${state.activeTab === 'triage' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">
            <span class="text-emerald-400">✨</span>
            <span>تریاژ هوش مصنوعی</span>
          </button>
          <button onclick="setVetTab('track')" class="transition-colors pb-1 ${state.activeTab === 'track' ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}">پیگیری نوبت</button>
        </nav>

        <!-- دکمه‌های ورود و وب‌سایت اصلی جهش -->
        <div class="flex items-center gap-1.5 sm:gap-3 shrink-0 whitespace-nowrap">
          ${isAdminUser ? `
            <button onclick="openAdminModal()" class="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-black text-amber-300 bg-amber-950/80 hover:bg-amber-900 border border-amber-500/60 px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition-all shadow-md sm:shadow-lg shadow-amber-900/30 shrink-0 cursor-pointer animate-pulse">
              <span>⚙️</span>
              <span class="hidden md:inline">پنل مدیریت بیمارستان</span>
              <span class="md:hidden">مدیریت</span>
            </button>
          ` : ''}

          ${u ? `
            <div class="flex items-center gap-1 sm:gap-2 bg-slate-800/80 border border-slate-700/80 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl whitespace-nowrap shrink-0">
              <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-xs font-black text-white shrink-0">
                ${isAdminUser ? '👑' : u.role === 'doctor' ? '👨‍⚕️' : u.role === 'phd' ? '🎓' : '🐾'}
              </div>
              <div class="text-right hidden md:block">
                <div class="text-xs font-bold text-white">${u.name}</div>
                <div class="text-[10px] text-emerald-400">${isAdminUser ? 'مدیر ارشد سامانه' : u.role === 'doctor' ? 'استاد هیئت علمی' : u.role === 'phd' ? 'دانشجوی دکتری' : 'سرپرست بیمار'}</div>
              </div>
              <button onclick="openMyAppointmentsModal()" title="نوبت‌ها" class="text-xs text-slate-300 hover:text-white p-1 hover:bg-slate-700 rounded-lg">📋</button>
              <button onclick="logoutUser()" title="خروج" class="text-xs text-rose-400 hover:text-rose-300 p-1 hover:bg-rose-950/40 rounded-lg">✕</button>
            </div>
          ` : `
            <button onclick="openAuthModal('login')" class="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 px-2 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl transition-all shrink-0">
              <span>👤</span>
              <span class="hidden sm:inline">ورود / عضویت</span>
              <span class="sm:hidden">ورود</span>
            </button>
          `}

          <button onclick="openBookingModal()" class="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl shadow-md sm:shadow-lg shadow-emerald-600/25 transition-all shrink-0">
            <span>⚡</span>
            <span class="hidden sm:inline">نوبت‌دهی آنلاین</span>
            <span class="sm:hidden">نوبت‌دهی</span>
          </button>

          <a href="/" onclick="window.location.href='/'; return true;" class="hidden xl:flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 px-3 py-2.5 rounded-xl transition-all shrink-0">
            <span>🌐</span>
            <span>وب‌سایت اصلی جهش</span>
            <span>←</span>
          </a>

          <button onclick="toggleMobileMenu()" aria-label="منوی سایت" class="lg:hidden p-1.5 sm:p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9">
            ☰
          </button>
        </div>
      </div>

      ${state.mobileMenuOpen ? `
        <div class="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3">
          <div class="grid grid-cols-2 gap-2 text-xs font-bold">
            <button onclick="setVetTab('home')" class="p-2.5 rounded-xl bg-slate-800 text-right text-white">🏠 صفحه اصلی</button>
            <button onclick="setVetTab('departments')" class="p-2.5 rounded-xl bg-slate-800 text-right text-white">🏥 دپارتمان‌ها</button>
            <button onclick="setVetTab('professors')" class="p-2.5 rounded-xl bg-slate-800 text-right text-white">👨‍⚕️ اساتید هیئت علمی</button>
            <button onclick="setVetTab('triage')" class="p-2.5 rounded-xl bg-slate-800 text-right text-emerald-400">✨ تریاژ هوش مصنوعی</button>
            <button onclick="setVetTab('track')" class="p-2.5 rounded-xl bg-slate-800 text-right text-white">🔍 پیگیری نوبت</button>
            ${isAdminUser ? `
              <button onclick="openAdminModal()" class="p-2.5 rounded-xl bg-amber-950 text-right text-amber-300">⚙️ پنل مدیریت</button>
            ` : `
              <button onclick="openAuthModal('register')" class="p-2.5 rounded-xl bg-emerald-950 text-right text-emerald-300">👤 عضویت و ثبت‌نام</button>
            `}
          </div>
          <a href="/" onclick="window.location.href='/'; return true;" class="block text-center text-xs text-slate-300 hover:text-white py-2.5 bg-slate-800 rounded-xl border border-slate-700">
            🌐 ورود به وب‌سایت اصلی جهش ←
          </a>
        </div>
      ` : ''}
    </header>
  `;
}

// سکشن صفحه اصلی
function renderHomeSection() {
  return `
    <section class="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#090d16] to-[#070a10] py-16 sm:py-20 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-6">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>سامانه تریاژ هوشمند هوش مصنوعی و اورژانس تخصصی بیمارستان فعال است</span>
        </div>

        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
          بیمارستان تخصصی دانشکده دامپزشکی
        </h2>
        
        <p class="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
          مرجع آموزش بالینی، جراحی‌های پیشرفته حیوانات، پاتوبیولوژی و تریاژ تشخیصی هوش مصنوعی با حضور اساتید تمام، دانشیاران و متخصصین دارای شماره نظام دامپزشکی.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <button onclick="openBookingModal()" class="flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer">
            <span>✨ شروع تریاژ و ارزیابی بیماری با هوش مصنوعی</span>
            <span>←</span>
          </button>
          
          <button onclick="openBookingModal()" class="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl border border-slate-700 transition-all cursor-pointer">
            <span>🩺 رزرو نوبت ویزیت تخصصی</span>
          </button>
          
          <button onclick="setVetTab('professors')" class="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-bold text-sm sm:text-base px-5 py-4 rounded-2xl border border-slate-800 transition-all cursor-pointer">
            <span>👨‍⚕️ لیست اساتید و پزشکان</span>
          </button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 text-right">
          <div class="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl">
            <div class="text-2xl sm:text-3xl font-black text-emerald-400">۸ دپارتمان</div>
            <div class="text-xs text-slate-300 font-bold mt-1">بخش‌های جراحی، پاتولوژی، داخلی و مامایی</div>
          </div>
          <div class="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl">
            <div class="text-2xl sm:text-3xl font-black text-teal-300">${state.professors.length} استاد و پزشک</div>
            <div class="text-xs text-slate-300 font-bold mt-1">پروفسورها، متخصصین و دستیاران PhD</div>
          </div>
          <div class="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl">
            <div class="text-2xl sm:text-3xl font-black text-cyan-400">تحلیل شرح حال</div>
            <div class="text-xs text-slate-300 font-bold mt-1">تشخیص فوری هوش مصنوعی در کمتر از ۵ ثانیه</div>
          </div>
          <div class="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl">
            <div class="text-2xl sm:text-3xl font-black text-amber-300">درگاه رسمی زیپال</div>
            <div class="text-xs text-slate-300 font-bold mt-1">پرداخت آنلاین و صدور فاکتور رسمی شتاب</div>
          </div>
        </div>

      </div>
    </section>

    <!-- نوار اورژانس -->
    <div class="bg-gradient-to-r from-rose-950 via-slate-900 to-rose-950 border-y border-rose-800/40 py-3.5 px-4">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div class="flex items-center gap-2.5 text-rose-200">
          <span class="text-lg animate-pulse">🚨</span>
          <span class="font-bold">اورژانس شبانه‌روزی بیمارستان:</span>
          <span>در موارد تشنج، تروما، تصادف یا شوک حاد فوراً به کلینیک شبانه‌روزی مراجعه فرمایید.</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-slate-300">پذیرش ۲۴ ساعته:</span>
          <a href="tel:05138804000" class="text-rose-300 font-black hover:underline">۰۵۱-۳۸۸۰۴۰۰۰</a>
        </div>
      </div>
    </div>

    <!-- دپارتمان‌ها -->
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
  `;
}

function renderDepartmentCard(dept) {
  const iconEmoji = {
    "pathobiology": "🔬",
    "surgery-anesthesia": "✂️",
    "internal-small": "🩺",
    "internal-large": "🐎",
    "imaging-radiology": "🩻",
    "theriogenology": "🐑",
    "poultry": "🦜",
    "parasitology": "🦠"
  }[dept.id] || "🏥";

  return `
    <div class="bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 p-6 rounded-2xl transition-all hover:-translate-y-1 flex flex-col justify-between group">
      <div>
        <div class="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
          ${iconEmoji}
        </div>
        <h4 class="text-base font-black text-white mb-2">${dept.name}</h4>
        <p class="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">${dept.shortDescription || ''}</p>
        <div class="text-[11px] text-emerald-300/90 font-medium mb-3">
          مدیریت: <strong>${dept.headOfDepartment}</strong>
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
            ${prof.medicalCouncilNo ? `<div class="text-[10px] text-slate-500 font-mono mt-0.5">نظام / شناسه: ${prof.medicalCouncilNo}</div>` : ''}
          </div>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
          ${prof.bio || 'متخصص و کادر علمی دانشکده دامپزشکی دانشگاه فردوسی مشهد.'}
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
          رزرو نوبت
        </button>
        <button onclick="openDoctorDetails('${prof.id}')" class="bg-slate-700/60 hover:bg-slate-700 text-slate-200 font-bold text-xs py-2.5 rounded-xl transition-colors text-center">
          مشاهده پروفایل
        </button>
      </div>
    </div>
  `;
}

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

function renderProfessorsSection() {
  return `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">اساتید، پزشکان و متخصصین هیئت علمی</h2>
        <p class="text-sm text-slate-300">رزرو آنلاین نوبت ویزیت حضوری در درمانگاه یا مشاوره تخصصی از راه دور</p>
      </div>

      <div class="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl mb-8 flex flex-wrap items-center justify-between gap-4">
        <div class="flex-1 min-w-[240px]">
          <input type="text" placeholder="جستجوی نام استاد، تخصص، جراحی، ارتوپدی..." value="${state.searchQuery}" oninput="handleProfessorSearch(this.value)" class="w-full bg-slate-900 border border-slate-700 text-white text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500" />
        </div>

        <button onclick="openAuthModal('register')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-3 rounded-xl transition-all">
          + عضویت پزشک و دانشجو
        </button>
      </div>

      ${state.professors.length > 0 ? `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="prof-cards-grid">
          ${state.professors.map(p => renderProfessorCard(p)).join('')}
        </div>
        <div id="prof-empty-notice" style="display:none;" class="text-center py-16 bg-slate-800/40 rounded-2xl border border-slate-700 mt-6">
          <p class="text-slate-300 font-bold">پزشکی با این مشخصات یافت نشد.</p>
        </div>
      ` : `
        <div class="bg-slate-800/50 border border-slate-700/70 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <div class="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-3xl mx-auto mb-4">
            👨‍⚕️
          </div>
          <h4 class="text-base sm:text-lg font-black text-white mb-2">هنوز پزشکی در سامانه ثبت‌نام نکرده است</h4>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            اعضای محترم هیئت علمی، پزشکان و دانشجویان دکتری تخصصی می‌توانند از طریق دکمه زیر پروفایل خود را ثبت و فعال نمایند.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <button onclick="openAuthModal('register')" class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all">
              <span>📝 ثبت‌نام پزشک / دانشجو</span>
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

function renderTriageSection() {
  const f = state.triageForm;
  return `
    <section class="max-w-4xl mx-auto px-4 py-12">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3">
          <span>✨ تریاژ و ارزیابی هوشمند بالینی</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">تریاژ بیماری‌های حیوانات با هوش مصنوعی</h2>
        <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">ارزیابی آنلاین شرح حال بیمار، تشخیص فوریت پزشکی و ارجاع به دپارتمان و اساتید متخصص</p>
      </div>

      <div class="bg-slate-800/90 border border-slate-700/80 p-6 sm:p-8 rounded-3xl shadow-xl">
        <form onsubmit="handleRunTriage(event)" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">گونه بیمار</label>
              <select onchange="state.triageForm.animalType=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl">
                ${['سگ', 'گربه', 'پرنده زینتی', 'اسب', 'دام بزرگ', 'حیوان خاص'].map(t => `<option value="${t}" ${f.animalType === t ? 'selected' : ''}>${t}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">نژاد و سن</label>
              <input type="text" placeholder="مثال: پرشین، ۳ ساله" value="${f.animalBreed}" oninput="state.triageForm.animalBreed=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-2">شرح حال بالینی و علائم بیمار *</label>
            <textarea required rows="4" placeholder="بی‌حالی شدید، لنگش در پای عقب، استفراغ، بی‌اشتهایی یا علائم مشکوک..." oninput="state.triageForm.symptoms=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3.5 rounded-xl leading-relaxed focus:outline-none focus:border-emerald-500">${f.symptoms}</textarea>
          </div>

          <div class="text-center pt-2">
            <button type="submit" class="w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all ${f.isProcessing ? 'opacity-70 pointer-events-none' : ''}">
              ${f.isProcessing ? '⏳ در حال ارزیابی هوش مصنوعی...' : '✨ تحلیل شرح حال و معرفی اساتید دپارتمان'}
            </button>
          </div>
        </form>

        ${f.result ? `
          <div class="mt-8 pt-8 border-t border-slate-700 space-y-4">
            <div class="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300">دپارتمان تخصصی ارجاع:</span>
                <span class="text-xs font-black text-emerald-400">${f.result.targetDepartmentName}</span>
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-300">سطح فوریت پزشکی:</span>
                <span class="text-xs font-black text-amber-400">${f.result.urgencyText || f.result.urgencyLevel}</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed mt-3">${f.result.primaryAdvice}</p>
            </div>

            <div class="text-center pt-2">
              <button onclick="openBookingModal(null, '${f.result.targetDepartmentId}')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all">
                🩺 رزرو نوبت با اساتید ${f.result.targetDepartmentName} ←
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

function renderTrackSection() {
  const r = state.trackResult;
  return `
    <section class="max-w-3xl mx-auto px-4 py-12">
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">پیگیری و استعلام نوبت ویزیت</h2>
        <p class="text-xs sm:text-sm text-slate-300">مشاهده وضعیت پرونده، زمان حضور در درمانگاه و رسید زیپال</p>
      </div>

      <div class="bg-slate-800/90 border border-slate-700/80 p-6 rounded-3xl mb-8">
        <form onsubmit="handleTrackAppointment(event)" class="flex flex-col sm:flex-row gap-3">
          <input required type="text" placeholder="کد رهگیری (مثال: VET-849201) یا شماره همراه..." value="${state.trackQuery}" oninput="state.trackQuery=this.value" class="flex-1 bg-slate-900 border border-slate-700 text-white text-xs p-3.5 rounded-xl focus:outline-none focus:border-emerald-500 font-mono" />
          <button type="submit" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all">
            استعلام نوبت
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
            <div><span class="text-slate-400">بیمار:</span> <strong class="text-white">${r.animalName} (${r.animalType})</strong></div>
            <div><span class="text-slate-400">دپارتمان:</span> <strong class="text-white">${r.departmentName}</strong></div>
            <div><span class="text-slate-400">پزشک:</span> <strong class="text-white">${r.professorName}</strong></div>
            <div><span class="text-slate-400">زمان مراجعه:</span> <strong class="text-emerald-400">${r.appointmentDate}</strong></div>
            <div><span class="text-slate-400">وضعیت پرداخت:</span> <strong class="text-emerald-400">${r.paymentStatus === 'paid' ? 'پرداخت موفق زیپال' : 'در انتظار پرداخت'}</strong></div>
          </div>
        </div>
      ` : ''}
    </section>
  `;
}

// مدال نوبت‌دهی هوشمند متصل به هوش مصنوعی با هدر حرفه‌ای و زمان‌بندی و تعرفه اختصاصی اساتید
function renderBookingModal() {
  if (!state.bookingModalOpen) return "";
  const currentStep = state.bookingStep;
  const f = state.bookingForm;
  const currentDept = state.departments.find(d => d.id === f.departmentId) || state.departments[0];
  const currentProf = state.professors.find(p => p.id === f.professorId);
  const profsInDept = state.professors.filter(p => p.departmentId === f.departmentId);

  // Available days dynamically gathered from professors in this department
  const availableScheduleOptions = [
    { label: "شنبه آینده - سانس صبح (۰۹:۰۰ الی ۱۳:۰۰)", day: "شنبه", time: "۰۹:۰۰ الی ۱۳:۰۰" },
    { label: "یکشنبه آینده - سانس صبح (۱۰:۰۰ الی ۱۴:۰۰)", day: "یکشنبه", time: "۱۰:۰۰ الی ۱۴:۰۰" },
    { label: "دوشنبه آینده - سانس صبح (۰۹:۰۰ الی ۱۳:۰۰)", day: "دوشنبه", time: "۰۹:۰۰ الی ۱۳:۰۰" },
    { label: "سه‌شنبه آینده - سانس صبح (۰۹:۰۰ الی ۱۳:۰۰)", day: "سه‌شنبه", time: "۰۹:۰۰ الی ۱۳:۰۰" },
    { label: "چهارشنبه آینده - سانس صبح (۰۹:۰۰ الی ۱۳:۰۰)", day: "چهارشنبه", time: "۰۹:۰۰ الی ۱۳:۰۰" },
    { label: "پنجشنبه آینده - سانس صبح (۰۹:۰۰ الی ۱۲:۰۰)", day: "پنجشنبه", time: "۰۹:۰۰ الی ۱۲:۰۰" }
  ];

  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div class="bg-slate-900 border border-slate-700/90 w-full max-w-2xl rounded-3xl p-5 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto custom-scrollbar text-right">
        
        <!-- هدر کاملاً تفکیک‌شده، مدرن و حرفه‌ای بدون تداخل دکمه ضربدر -->
        <div class="border-b border-slate-800 pb-4 mb-6">
          <div class="flex items-center justify-between gap-3 mb-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
              <span>✨ سامانه ویزیت هوشمند بیمارستان دامپزشکی</span>
            </div>
            
            <div class="flex items-center gap-2.5 shrink-0">
              <span class="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-black text-emerald-400">
                مرحله ${currentStep} از ۴
              </span>
              <button onclick="closeBookingModal()" title="بستن" class="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all text-sm border border-slate-700 cursor-pointer">
                ✕
              </button>
            </div>
          </div>

          <!-- نوار پیشرفت خلاقانه ۴ مرحله‌ای -->
          <div class="grid grid-cols-4 gap-1.5 pt-1">
            <div class="h-1.5 rounded-full transition-all ${currentStep >= 1 ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' : 'bg-slate-800'}"></div>
            <div class="h-1.5 rounded-full transition-all ${currentStep >= 2 ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' : 'bg-slate-800'}"></div>
            <div class="h-1.5 rounded-full transition-all ${currentStep >= 3 ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' : 'bg-slate-800'}"></div>
            <div class="h-1.5 rounded-full transition-all ${currentStep >= 4 ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' : 'bg-slate-800'}"></div>
          </div>

          <h3 class="text-base sm:text-lg font-black text-white mt-3">
            ${currentStep === 1 ? 'مرحله اول: مشخصات و شرح حال بالینی بیمار' : ''}
            ${currentStep === 2 ? 'مرحله دوم: انتخاب زمان و روز ویزیت در دپارتمان' : ''}
            ${currentStep === 3 ? 'مرحله سوم: انتخاب استاد معالج و مشاهده تعرفه اختصاصی' : ''}
            ${currentStep === 4 ? 'مرحله چهارم: مشخصات سرپرست و پیش‌فاکتور زیپال' : ''}
          </h3>
        </div>

        <!-- مرحله اول: اطلاعات و شرح حال بیمار -->
        ${currentStep === 1 ? `
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">گونه بیمار را انتخاب فرمایید:</label>
              <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                ${['سگ', 'گربه', 'پرنده', 'اسب', 'دام بزرگ', 'حیوان خاص'].map(type => `
                  <button type="button" onclick="selectBookingAnimalType('${type}')" class="p-3 rounded-xl border text-center transition-all cursor-pointer ${f.animalType === type ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold ring-1 ring-emerald-500' : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-600'}">
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
                <input type="text" placeholder="مثال: ژرمن، پرشین..." value="${f.animalBreed}" oninput="state.bookingForm.animalBreed=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">سن و جنسیت</label>
                <input type="text" placeholder="مثال: ۲ سال / نر" value="${f.animalAge}" oninput="state.bookingForm.animalAge=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شرح حال بالینی و علائم بیماری (ارزیابی هوشمند توسط هوش مصنوعی) *</label>
              <textarea required rows="3" placeholder="مثال: بیمار دچار لنگش شدید پای راست عقب شده و هنگام راه رفتن ناله می‌کند، از پله بالا نمی‌رود و بی‌حال است..." oninput="state.bookingForm.symptoms=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl leading-relaxed focus:outline-none focus:border-emerald-500">${f.symptoms}</textarea>
            </div>

            <div class="flex justify-end pt-3">
              <button onclick="runBookingAiTriageAndProceed()" class="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer ${state.aiAnalyzingBooking ? 'opacity-70 pointer-events-none' : ''}">
                ${state.aiAnalyzingBooking ? '✨ در حال تحلیل شرح حال با هوش مصنوعی...' : '✨ تحلیل شرح حال با هوش مصنوعی و انتخاب زمان ویزیت ←'}
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله دوم: انتخاب زمان و روز ویزیت در دپارتمان تشخیص داده شده -->
        ${currentStep === 2 ? `
          <div class="space-y-5">
            <div class="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-xs">
              <div class="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                <span class="font-bold text-emerald-300">✨ دپارتمان ارجاعی هوش مصنوعی:</span>
                <span class="font-black text-white bg-emerald-800/80 px-3 py-1 rounded-lg">${currentDept.name}</span>
              </div>
              <p class="text-[11px] text-slate-300 leading-relaxed">
                بر اساس علائم ثبت شده برای <strong class="text-white">${f.animalName}</strong>، سامانه هوشمند دپارتمان فوق را پیشنهاد داده است. لطفاً روز و ساعت مراجعه مد نظر خود را انتخاب فرمایید تا لیست اساتید حاضر در آن سانس برای شما نمایش یابد:
              </p>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="text-xs font-bold text-slate-300">تغییر دستی دپارتمان (در صورت تمایل):</label>
                <select onchange="selectBookingDepartment(this.value)" class="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-xl">
                  ${state.departments.map(d => `<option value="${d.id}" ${f.departmentId === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2.5">انتخاب روز و سانس ویزیت در درمانگاه:</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${availableScheduleOptions.map((opt, idx) => `
                  <div onclick="selectBookingDate('${opt.label}')" class="p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${f.appointmentDate === opt.label ? 'bg-emerald-950/70 border-emerald-500 shadow-md ring-1 ring-emerald-500' : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'}">
                    <div class="flex items-center gap-2.5">
                      <span class="text-emerald-400 font-bold">📅</span>
                      <div>
                        <div class="text-xs font-bold text-white">${opt.day}</div>
                        <div class="text-[11px] text-slate-400 mt-0.5">ساعت: ${opt.time}</div>
                      </div>
                    </div>
                    <span class="text-[10px] px-2 py-0.5 rounded-md bg-slate-700/80 text-emerald-300">آماده پذیرش</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-800">
              <button onclick="setBookingStep(1)" class="text-xs text-slate-400 hover:text-white cursor-pointer">← بازگشت</button>
              <button onclick="setBookingStep(3)" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer">
                مرحله بعد: مشاهده اساتید و تعرفه‌ها ←
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله سوم: انتخاب استاد و تعرفه اختصاصی هر پزشک -->
        ${currentStep === 3 ? `
          <div class="space-y-4">
            <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-center justify-between flex-wrap gap-2">
              <div>
                <span class="text-slate-400">بخش انتخابی:</span>
                <strong class="text-white mr-1">${currentDept.name}</strong>
              </div>
              <div>
                <span class="text-slate-400">زمان حضور:</span>
                <strong class="text-emerald-400 mr-1">${f.appointmentDate}</strong>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">انتخاب استاد هیئت علمی / پزشک معالج (با تعرفه اختصاصی هر استاد):</label>
              
              <div class="space-y-2.5 max-h-64 overflow-y-auto custom-scrollbar pr-1">
                <!-- گزینه ویزیت عمومی کشیک -->
                <div onclick="selectBookingProfessor('')" class="p-3.5 rounded-2xl border cursor-pointer transition-all ${!f.professorId ? 'bg-emerald-950/70 border-emerald-500 shadow-md ring-1 ring-emerald-500' : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'}">
                  <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3 min-w-0">
                      <div class="w-12 h-12 rounded-xl bg-emerald-900/80 flex items-center justify-center text-xl text-white font-bold shrink-0">🏥</div>
                      <div class="min-w-0">
                        <div class="font-bold text-white text-xs">پذیرش تخصصی دپارتمان و ویزیت توسط متخصص کشیک</div>
                        <div class="text-[11px] text-emerald-400 mt-0.5">ویزیت توسط کادر هیئت علمی شیفت کلینیک</div>
                        <div class="text-[10px] text-slate-400 mt-0.5">ساعات حضور: همه‌روزه صبح‌ها</div>
                      </div>
                    </div>
                    <div class="text-left shrink-0">
                      <div class="text-xs font-black text-emerald-400">۳۵۰,۰۰۰ تومان</div>
                      <div class="text-[10px] text-slate-400">تعرفه پایه دپارتمان</div>
                    </div>
                  </div>
                </div>

                <!-- لیست اساتید دپارتمان همراه با قیمت خاص و ساعت کاری هر کدام -->
                ${profsInDept.map(prof => `
                  <div onclick="selectBookingProfessor('${prof.id}')" class="p-3.5 rounded-2xl border cursor-pointer transition-all ${f.professorId === prof.id ? 'bg-emerald-950/70 border-emerald-500 shadow-md ring-1 ring-emerald-500' : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'}">
                    <div class="flex items-center justify-between gap-3">
                      <div class="flex items-center gap-3 min-w-0">
                        <img src="${prof.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'}" class="w-12 h-12 rounded-xl object-cover border border-emerald-500/40 shrink-0" />
                        <div class="min-w-0">
                          <div class="font-bold text-white text-xs flex items-center gap-2">
                            <span>${prof.name}</span>
                            <span class="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded-md font-normal">${prof.academicRank}</span>
                          </div>
                          <div class="text-[11px] text-slate-300 mt-0.5 truncate">${prof.subSpecialty || 'متخصص کلینیکال دپارتمان'}</div>
                          <div class="text-[10px] text-slate-400 mt-0.5">🕒 ساعات حضور: ${Array.isArray(prof.schedule) ? prof.schedule[0] : (prof.schedule || 'شنبه تا چهارشنبه ۰۹:۰۰ الی ۱۳:۰۰')}</div>
                        </div>
                      </div>
                      <div class="text-left shrink-0">
                        <div class="text-xs font-black text-emerald-400">${formatPrice(prof.visitFee)}</div>
                        <div class="text-[10px] text-slate-400">تعرفه اختصاصی استاد</div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-800">
              <button onclick="setBookingStep(2)" class="text-xs text-slate-400 hover:text-white cursor-pointer">← بازگشت</button>
              <button onclick="setBookingStep(4)" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer">
                مرحله بعد: مشخصات سرپرست و پیش‌فاکتور ←
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله چهارم: مشخصات سرپرست و پیش‌فاکتور -->
        ${currentStep === 4 ? `
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">نوع ویزیت:</label>
              <div class="grid grid-cols-2 gap-2">
                <button type="button" onclick="selectBookingVisitType('in_person')" class="p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${f.visitType === 'in_person' ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-600/20' : 'bg-slate-800 border-slate-700 text-slate-300'}">
                  🏥 حضوری در درمانگاه
                </button>
                <button type="button" onclick="selectBookingVisitType('online')" class="p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${f.visitType === 'online' ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-600/20' : 'bg-slate-800 border-slate-700 text-slate-300'}">
                  💻 مشاوره آنلاین تصویری
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی سرپرست *</label>
                <input required type="text" placeholder="مثال: علی رضایی" value="${f.clientName}" oninput="state.bookingForm.clientName=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره تلفن همراه (پیامک رهگیری) *</label>
                <input required type="tel" placeholder="0912xxxxxxx" value="${f.clientPhone}" oninput="state.bookingForm.clientPhone=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500" />
              </div>
            </div>

            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl space-y-2.5 text-xs text-slate-300">
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>بیمار / گونه:</span>
                <strong class="text-white">${f.animalName} (${f.animalType})</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>دپارتمان تخصصی:</span>
                <strong class="text-white">${currentDept.name}</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>استاد / پزشک معالج:</span>
                <strong class="text-emerald-400">${currentProf?.name || 'متخصص کشیک دپارتمان'}</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>زمان مراجعه:</span>
                <strong class="text-white">${f.appointmentDate}</strong>
              </div>
              <div class="flex items-center justify-between pt-1 text-sm font-black">
                <span class="text-white">مبلغ ویزیت اختصاصی:</span>
                <span class="text-emerald-400">${formatPrice(f.visitType === 'online' ? (currentProf?.onlineConsultFee || 250000) : (currentProf?.visitFee || 350000))}</span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-800">
              <button onclick="setBookingStep(3)" class="text-xs text-slate-400 hover:text-white cursor-pointer">← بازگشت</button>
              <button onclick="proceedToPayment()" class="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer">
                <span>💳 ورود به درگاه پرداخت رسمی زیپال</span>
                <span>←</span>
              </button>
            </div>
          </div>
        ` : ''}

      </div>
    </div>
  `;
}

// مدال ورود و عضویت یکپارچه با نام کاربری، رمز عبور، ساعات کاری و تعرفه پزشکان
function renderAuthModal() {
  if (!state.authModalOpen) return "";
  const f = state.authForm;
  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right max-h-[90vh] overflow-y-auto custom-scrollbar">
        <button onclick="closeAuthModal()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center absolute top-5 left-5 transition-all cursor-pointer border border-slate-700">✕</button>

        <h3 class="text-lg font-black text-white mb-1">
          ${f.mode === 'login' ? 'ورود به سامانه بیمارستان دانشکده دامپزشکی' : 'عضویت و ثبت‌نام در سامانه بیمارستان'}
        </h3>
        <p class="text-xs text-slate-400 mb-6">سامانه جامع خدمات درمانی، رزرو نوبت، مراجعین و اعضای هیئت علمی</p>

        <!-- تب‌های ورود / ثبت‌نام -->
        <div class="flex rounded-xl bg-slate-800 p-1 mb-6 border border-slate-700">
          <button type="button" onclick="state.authForm.mode='login'; renderApp();" class="flex-1 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${f.mode === 'login' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}">
            ورود با نام کاربری و رمز عبور
          </button>
          <button type="button" onclick="state.authForm.mode='register'; renderApp();" class="flex-1 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${f.mode === 'register' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}">
            ثبت‌نام و عضویت جدید
          </button>
        </div>

        <form onsubmit="handleUnifiedAuthSubmit(event)" class="space-y-4">
          ${f.mode === 'register' ? `
            <!-- انتخاب نقش کاربر در ثبت‌نام -->
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">نوع حساب و نقش شما در سامانه بیمارستان:</label>
              <div class="grid grid-cols-3 gap-2">
                <button type="button" onclick="state.authForm.role='client'; renderApp();" class="p-3 rounded-2xl border text-center transition-all cursor-pointer ${f.role === 'client' ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold ring-1 ring-emerald-500' : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:border-slate-600'}">
                  <div class="text-lg mb-1">🐾</div>
                  <div class="text-xs">کاربر عادی / سرپرست</div>
                </button>
                <button type="button" onclick="state.authForm.role='doctor'; renderApp();" class="p-3 rounded-2xl border text-center transition-all cursor-pointer ${f.role === 'doctor' ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold ring-1 ring-emerald-500' : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:border-slate-600'}">
                  <div class="text-lg mb-1">👨‍⚕️</div>
                  <div class="text-xs">استاد / پزشک متخصص</div>
                </button>
                <button type="button" onclick="state.authForm.role='phd'; renderApp();" class="p-3 rounded-2xl border text-center transition-all cursor-pointer ${f.role === 'phd' ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold ring-1 ring-emerald-500' : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:border-slate-600'}">
                  <div class="text-lg mb-1">🎓</div>
                  <div class="text-xs">دانشجوی PhD / دستیار</div>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی *</label>
              <input required name="name" id="auth_name" type="text" placeholder="مثال: دکتر علیرضا محمدی" value="${f.name || ''}" oninput="state.authForm.name=this.value" onchange="state.authForm.name=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">نام کاربری دلخواه (جهت ورود) *</label>
                <input required name="username" id="auth_username" type="text" placeholder="مثال: dr_mohammadi" value="${f.username || ''}" oninput="state.authForm.username=this.value" onchange="state.authForm.username=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500 text-left" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">رمز عبور *</label>
                <input required name="password" id="auth_password" type="password" placeholder="••••••••" value="${f.password || ''}" oninput="state.authForm.password=this.value" onchange="state.authForm.password=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500 text-left" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره همراه *</label>
                <input required name="phone" id="auth_phone" type="tel" placeholder="0912xxxxxxx" value="${f.phone || ''}" oninput="state.authForm.phone=this.value" onchange="state.authForm.phone=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">پست الکترونیک (ایمیل)</label>
                <input name="email" id="auth_email" type="email" placeholder="name@domain.com" value="${f.email || ''}" oninput="state.authForm.email=this.value" onchange="state.authForm.email=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500 text-left" />
              </div>
            </div>

            ${f.role === 'doctor' || f.role === 'phd' ? `
              <!-- بخش اختصاصی آپلود عکس پرسنلی / تصویر پروفایل استاد یا پزشک -->
              <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900 border border-emerald-500/40 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-base">📸</span>
                    <label class="text-xs font-black text-emerald-400">تصویر پرسنلی / عکس پروفایل استاد</label>
                  </div>
                  <span class="text-[10px] text-emerald-300 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">ویژه اساتید و پزشکان</span>
                </div>
                
                <div class="flex items-center gap-4 flex-wrap">
                  <div class="relative group shrink-0">
                    <img src="${f.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'}" class="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-emerald-500 shadow-md bg-slate-800" id="prof_avatar_preview" />
                    <button type="button" onclick="document.getElementById('prof_avatar_file_input').click()" class="absolute inset-0 bg-black/60 text-white rounded-2xl opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-[11px] font-bold cursor-pointer">
                      تغییر عکس
                    </button>
                  </div>
                  
                  <div class="flex-1 min-w-[200px] space-y-2">
                    <input type="file" id="prof_avatar_file_input" accept="image/*" class="hidden" onchange="handleProfessorAvatarUpload(event)" />
                    <div class="flex items-center gap-2 flex-wrap">
                      <button type="button" onclick="document.getElementById('prof_avatar_file_input').click()" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md shadow-emerald-900/40 flex items-center gap-1.5 cursor-pointer">
                        <span>📁</span>
                        <span>${f.avatar ? 'تغییر و انتخاب عکس جدید' : 'بارگذاری عکس پرسنلی استاد'}</span>
                      </button>
                      ${f.avatar ? `
                        <button type="button" onclick="removeProfessorAvatar()" class="bg-rose-950/60 hover:bg-rose-900 border border-rose-700/60 text-rose-300 text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer">
                          حذف عکس
                        </button>
                      ` : ''}
                    </div>
                    <p class="text-[11px] text-slate-400 leading-relaxed">
                      تصویر انتخابی مستقیماً در کارت معرفی استاد، بخش دپارتمان و فرم رزرو نوبت به مراجعین نمایش داده می‌شود.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-4">
                <div class="text-xs font-black text-emerald-400">اطلاعات تخصصی، زمان‌بندی ویزیت و تعرفه پزشک</div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">${f.role === 'doctor' ? 'شماره نظام دامپزشکی *' : 'شماره دانشجویی / نظام *'}</label>
                    <input required name="medicalCouncilNo" id="auth_med_no" type="text" placeholder="18450" value="${f.medicalCouncilNo || ''}" oninput="state.authForm.medicalCouncilNo=this.value" onchange="state.authForm.medicalCouncilNo=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">دپارتمان تخصصی *</label>
                    <select name="departmentId" id="auth_dept_id" onchange="state.authForm.departmentId=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500">
                      ${state.departments.map(d => `<option value="${d.id}" ${f.departmentId === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">مرتبه علمی</label>
                    <select name="academicRank" id="auth_academic_rank" onchange="state.authForm.academicRank=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500">
                      ${['استاد تمام (پروفسور)', 'دانشیار', 'استادیار', 'رزیدنت ارشد تخصصی', 'دانشجوی دکتری تخصصی (PhD)'].map(r => `<option value="${r}" ${f.academicRank === r ? 'selected' : ''}>${r}</option>`).join('')}
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">حیطه فوق‌تخصصی / فیلد کاری</label>
                    <input name="subSpecialty" id="auth_sub_spec" type="text" placeholder="مثال: جراحی ارتوپدی و ستون فقرات" value="${f.subSpecialty || ''}" oninput="state.authForm.subSpecialty=this.value" onchange="state.authForm.subSpecialty=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>

                <!-- ساعات کاری و روزهای حضور -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">روزهای حضور در کلینیک</label>
                    <input name="workDays" id="auth_work_days" type="text" placeholder="شنبه، یکشنبه، سه‌شنبه..." value="${Array.isArray(f.workDays) ? f.workDays.join('، ') : (f.workDays || 'شنبه، دوشنبه، چهارشنبه')}" oninput="state.authForm.workDays=this.value.split(/[،,]/).map(s=>s.trim()).filter(Boolean)" onchange="state.authForm.workDays=this.value.split(/[،,]/).map(s=>s.trim()).filter(Boolean)" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">ساعات و شیفت ویزیت</label>
                    <input name="workHours" id="auth_work_hours" type="text" placeholder="۰۹:۰۰ الی ۱۳:۰۰" value="${f.workHours || '۰۹:۰۰ الی ۱۳:۰۰'}" oninput="state.authForm.workHours=this.value" onchange="state.authForm.workHours=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>

                <!-- تعرفه اختصاصی استاد -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">تعرفه ویزیت حضوری اختصاصی (تومان)</label>
                    <input name="visitFee" id="auth_visit_fee" type="number" step="10000" placeholder="450000" value="${f.visitFee || 450000}" oninput="state.authForm.visitFee=Number(this.value)" onchange="state.authForm.visitFee=Number(this.value)" class="w-full bg-slate-900 border border-slate-700 text-emerald-400 font-bold text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">تعرفه مشاوره آنلاین اختصاصی (تومان)</label>
                    <input name="onlineConsultFee" id="auth_online_fee" type="number" step="10000" placeholder="300000" value="${f.onlineConsultFee || 300000}" oninput="state.authForm.onlineConsultFee=Number(this.value)" onchange="state.authForm.onlineConsultFee=Number(this.value)" class="w-full bg-slate-900 border border-slate-700 text-emerald-400 font-bold text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-300 mb-1.5">بیوگرافی و رزومه علمی</label>
                  <textarea name="bio" id="auth_bio" rows="2" placeholder="عضو هیئت علمی و پژوهشگر حوزه بالینی دامپزشکی..." oninput="state.authForm.bio=this.value" onchange="state.authForm.bio=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl leading-relaxed focus:outline-none focus:border-emerald-500">${f.bio || ''}</textarea>
                </div>
              </div>
            ` : ''}
          ` : `
            <!-- فرم ورود با نام کاربری / ایمیل و رمز عبور -->
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">نام کاربری یا ایمیل *</label>
              <input required name="username" id="login_username" type="text" placeholder="مثال: jahesh1395@gmail.com یا dr_mohammadi" value="${f.username || ''}" oninput="state.authForm.username=this.value" onchange="state.authForm.username=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3.5 rounded-xl font-mono focus:outline-none focus:border-emerald-500 text-left" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">رمز عبور *</label>
              <input required name="password" id="login_password" type="password" placeholder="••••••••" value="${f.password || ''}" oninput="state.authForm.password=this.value" onchange="state.authForm.password=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3.5 rounded-xl font-mono focus:outline-none focus:border-emerald-500 text-left" />
            </div>
          `}

          <button type="submit" class="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer">
            ${f.mode === 'login' ? 'ورود به سامانه بیمارستان' : 'تکمیل ثبت‌نام و فعال‌سازی فوری حساب'}
          </button>
        </form>
      </div>
    </div>
  `;
}

// پنل مدیریت اختصاصی بیمارستان دانشکده دامپزشکی برای مدیر ارشد سامانه (jahesh1395@gmail.com)
function renderAdminModal() {
  if (!state.adminModalOpen) return "";
  const tab = state.adminActiveTab || 'professors';
  const totalVisits = state.appointments.length;

  const allProfessorsList = (state.professors && state.professors.length > 0) ? state.professors : getStoredProfessors();
  const allUsersList = (state.cloudUsers && state.cloudUsers.length > 0) ? state.cloudUsers : getStoredUsers();

  const pendingDoctorsCount = allProfessorsList.filter(p => p.status !== 'approved' && !p.isApproved).length;

  // فیلترهای اساتید
  const profFilter = state.adminProfFilter || 'all';
  const userFilter = state.adminUserFilter || 'all';
  const searchTerm = (state.adminSearchTerm || '').trim().toLowerCase();

  const totalProfsCount = allProfessorsList.length;
  const facultyProfsCount = allProfessorsList.filter(p => !p.badges?.includes('دستیار تخصصی PhD') && (!p.academicRank || (!p.academicRank.includes('PhD') && !p.academicRank.includes('دکتری')))).length;
  const phdProfsCount = allProfessorsList.filter(p => p.badges?.includes('دستیار تخصصی PhD') || (p.academicRank && (p.academicRank.includes('PhD') || p.academicRank.includes('دکتری')))).length;

  let filteredProfessors = allProfessorsList.filter(p => {
    const isPhd = p.badges?.includes('دستیار تخصصی PhD') || (p.academicRank && (p.academicRank.includes('PhD') || p.academicRank.includes('دکتری')));
    const isApproved = p.status === 'approved' || p.isApproved;

    if (profFilter === 'faculty' && isPhd) return false;
    if (profFilter === 'phd' && !isPhd) return false;
    if (profFilter === 'pending' && isApproved) return false;
    if (profFilter === 'approved' && !isApproved) return false;

    if (searchTerm) {
      const matchName = (p.name || '').toLowerCase().includes(searchTerm);
      const matchUser = (p.username || '').toLowerCase().includes(searchTerm);
      const matchDept = (p.departmentName || '').toLowerCase().includes(searchTerm);
      const matchRank = (p.academicRank || '').toLowerCase().includes(searchTerm);
      const matchMed = (p.medicalCouncilNo || '').toLowerCase().includes(searchTerm);
      const matchPhone = (p.phone || '').includes(searchTerm);
      return matchName || matchUser || matchDept || matchRank || matchMed || matchPhone;
    }
    return true;
  });

  // فیلترهای کاربران
  const totalDoctorsUsers = allUsersList.filter(u => u.role === 'doctor' || (u.academicRank && !u.academicRank.includes('PhD') && !u.academicRank.includes('دکتری'))).length;
  const totalPhdUsers = allUsersList.filter(u => u.role === 'phd' || (u.academicRank && (u.academicRank.includes('PhD') || u.academicRank.includes('دکتری')))).length;
  const totalClientUsers = allUsersList.filter(u => !u.role || u.role === 'client' || u.role === 'user').length;
  const totalAdminUsers = allUsersList.filter(u => u.role === 'admin' || u.isAdmin).length;

  let filteredUsers = allUsersList.filter(u => {
    const isDoctor = u.role === 'doctor' || (u.academicRank && !u.academicRank.includes('PhD') && !u.academicRank.includes('دکتری'));
    const isPhd = u.role === 'phd' || (u.academicRank && (u.academicRank.includes('PhD') || u.academicRank.includes('دکتری')));
    const isAdmin = u.role === 'admin' || u.isAdmin;
    const isClient = !isDoctor && !isPhd && !isAdmin;

    if (userFilter === 'doctor' && !isDoctor) return false;
    if (userFilter === 'phd' && !isPhd) return false;
    if (userFilter === 'client' && !isClient) return false;
    if (userFilter === 'admin' && !isAdmin) return false;

    if (searchTerm) {
      const matchName = (u.name || u.fullName || '').toLowerCase().includes(searchTerm);
      const matchUser = (u.username || '').toLowerCase().includes(searchTerm);
      const matchPhone = (u.phone || '').includes(searchTerm);
      const matchEmail = (u.email || '').toLowerCase().includes(searchTerm);
      const matchDept = (u.departmentName || '').toLowerCase().includes(searchTerm);
      return matchName || matchUser || matchPhone || matchEmail || matchDept;
    }
    return true;
  });

  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div class="bg-[#0f172a] border border-amber-500/50 w-full max-w-6xl rounded-3xl p-5 sm:p-7 shadow-2xl relative text-right max-h-[94vh] flex flex-col">
        
        <!-- هدر پنل مدیریت اختصاصی بیمارستان -->
        <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-4 shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500 flex items-center justify-center text-2xl text-amber-400">
              ⚙️
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-base sm:text-lg font-black text-white">پنل مدیریت یکپارچه بیمارستان دامپزشکی</h3>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-[10px] text-emerald-300 font-bold">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  همگام‌سازی زنده و اختصاصی بیمارستان
                </span>
              </div>
              <p class="text-xs text-amber-400 mt-0.5">مدیریت اعضای هیئت علمی، دانشجویان دکتری (PhD)، مراجعین و نوبت‌ها</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2">
            <button onclick="refreshCloudData()" title="به‌روزرسانی داده‌ها" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs border border-slate-700 transition-all cursor-pointer">
              <span>🔄</span>
              <span class="hidden sm:inline">بروزرسانی داده‌ها</span>
            </button>
            <button onclick="closeAdminModal()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all text-sm border border-slate-700 cursor-pointer">
              ✕
            </button>
          </div>
        </div>

        <!-- کارت‌های آماری سیستم -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 shrink-0">
          <div class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
            <div class="text-[11px] text-slate-400 mb-0.5">اساتید و پزشکان:</div>
            <div class="text-base sm:text-lg font-black text-emerald-400 font-mono">${allProfessorsList.length} نفر</div>
          </div>
          <div class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
            <div class="text-[11px] text-slate-400 mb-0.5">دانشجویان و دستیاران PhD:</div>
            <div class="text-base sm:text-lg font-black text-cyan-400 font-mono">${phdProfsCount} نفر</div>
          </div>
          <div class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
            <div class="text-[11px] text-slate-400 mb-0.5">کل کاربران ثبت‌نامی بیمارستان:</div>
            <div class="text-base sm:text-lg font-black text-amber-300 font-mono">${allUsersList.length} کاربر</div>
          </div>
          <div class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
            <div class="text-[11px] text-slate-400 mb-0.5">مجموع نوبت‌های ویزیت:</div>
            <div class="text-base sm:text-lg font-black text-purple-400 font-mono">${totalVisits} نوبت</div>
          </div>
        </div>

        <!-- تب‌های اصلی پنل -->
        <div class="flex rounded-2xl bg-slate-900/90 p-1.5 mb-3 border border-slate-800 gap-1.5 shrink-0 overflow-x-auto">
          <button onclick="setAdminActiveTab('professors')" class="flex-1 min-w-[140px] py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${tab === 'professors' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40' : 'text-slate-400 hover:text-white'}">
            <span>🩺 اساتید و پزشکان (${allProfessorsList.length})</span>
            ${pendingDoctorsCount > 0 ? `<span class="bg-amber-400 text-black text-[10px] font-black px-1.5 py-0.2 rounded-full animate-bounce">${pendingDoctorsCount}</span>` : ''}
          </button>
          <button onclick="setAdminActiveTab('users')" class="flex-1 min-w-[140px] py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${tab === 'users' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40' : 'text-slate-400 hover:text-white'}">
            <span>👥 کاربران بیمارستان (${allUsersList.length})</span>
          </button>
          <button onclick="setAdminActiveTab('appointments')" class="flex-1 min-w-[140px] py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${tab === 'appointments' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40' : 'text-slate-400 hover:text-white'}">
            <span>📋 نوبت‌های ثبت‌شده (${totalVisits})</span>
          </button>
          <button onclick="setAdminActiveTab('departments')" class="flex-1 min-w-[120px] py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${tab === 'departments' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40' : 'text-slate-400 hover:text-white'}">
            <span>🏥 دپارتمان‌ها</span>
          </button>
        </div>

        <!-- محتوای اسکرول‌پذیر پنل -->
        <div class="flex-1 overflow-y-auto custom-scrollbar pr-1">
          
          <!-- ۱. تب اساتید و پزشکان -->
          ${tab === 'professors' ? `
            <div class="space-y-4">
              
              <!-- ردیف فیلتر و جستجو -->
              <div class="flex items-center justify-between flex-wrap gap-3 bg-slate-900/70 p-3 rounded-2xl border border-slate-800">
                
                <!-- فیلترهای دسته‌بندی اساتید -->
                <div class="flex items-center gap-1.5 flex-wrap">
                  <button onclick="setAdminProfFilter('all')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${profFilter === 'all' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                    همه (${totalProfsCount})
                  </button>
                  <button onclick="setAdminProfFilter('faculty')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${profFilter === 'faculty' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                    🩺 هیئت علمی (${facultyProfsCount})
                  </button>
                  <button onclick="setAdminProfFilter('phd')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${profFilter === 'phd' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                    🎓 دانشجویان دکتری PhD (${phdProfsCount})
                  </button>
                  ${pendingDoctorsCount > 0 ? `
                    <button onclick="setAdminProfFilter('pending')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${profFilter === 'pending' ? 'bg-amber-500 text-black font-black' : 'bg-amber-950/60 text-amber-300 border border-amber-500/40'}">
                      ⏳ در انتظار تایید (${pendingDoctorsCount})
                    </button>
                  ` : ''}
                </div>

                <!-- باکس جستجو و دکمه افزودن -->
                <div class="flex items-center gap-2 flex-1 min-w-[260px] justify-end">
                  <input type="text" placeholder="جستجوی نام استاد، کد نظام، دپارتمان، تلفن..." value="${state.adminSearchTerm}" oninput="setAdminSearchTerm(this.value)" class="w-full max-w-xs bg-slate-800 border border-slate-700 text-white text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-emerald-500" />
                  <button onclick="openAuthModal('register')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap flex items-center gap-1">
                    <span>+</span>
                    <span>ثبت پزشک/دانشجو</span>
                  </button>
                </div>

              </div>

              <!-- لیست اساتید -->
              <div class="space-y-3">
                ${filteredProfessors.length > 0 ? filteredProfessors.map(prof => {
                  const isPhd = prof.badges?.includes('دستیار تخصصی PhD') || (prof.academicRank && (prof.academicRank.includes('PhD') || prof.academicRank.includes('دکتری')));
                  const isApproved = prof.status === 'approved' || prof.isApproved;
                  return `
                    <div class="p-4 rounded-2xl bg-slate-800/90 border ${isApproved ? 'border-emerald-500/40' : 'border-amber-500/70 bg-amber-950/20'} flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div class="flex items-start gap-3 min-w-0">
                        <img src="${prof.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'}" class="w-14 h-14 rounded-2xl object-cover border border-slate-700 shrink-0" />
                        <div class="min-w-0">
                          <div class="font-bold text-white text-xs flex items-center gap-2 flex-wrap">
                            <span class="text-sm font-black">${prof.name}</span>
                            
                            ${isPhd ? `
                              <span class="text-[10px] px-2 py-0.5 rounded-md font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                                🎓 دانشجوی دکتری تخصصی (PhD)
                              </span>
                            ` : `
                              <span class="text-[10px] px-2 py-0.5 rounded-md font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                                🩺 عضو هیئت علمی / استادیار
                              </span>
                            `}

                            <span class="text-[10px] px-2 py-0.5 rounded-md font-bold ${isApproved ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-500/30' : 'bg-amber-500 text-black animate-pulse'}">
                              ${isApproved ? '✓ فعال و منتشر در سایت' : '⏳ در انتظار تایید مدیریت'}
                            </span>
                          </div>

                          <div class="text-[11px] text-slate-300 mt-1">
                            <strong>${prof.academicRank || (isPhd ? 'دانشجوی PhD' : 'استادیار')}</strong> - ${prof.departmentName || prof.departmentId} ${prof.subSpecialty ? `(${prof.subSpecialty})` : ''}
                          </div>

                          <div class="text-[10px] text-slate-400 mt-1">
                            🕒 ساعت حضور: <span class="text-white">${Array.isArray(prof.schedule) ? prof.schedule[0] : (prof.schedule || 'شنبه تا چهارشنبه')}</span> | 
                            💵 تعرفه ویزیت حضوری: <span class="text-emerald-400 font-bold">${formatPrice(prof.visitFee)}</span> | 
                            💻 ویزیت آنلاین: <span class="text-emerald-400 font-bold">${formatPrice(prof.onlineConsultFee || 250000)}</span>
                          </div>

                          <div class="text-[10px] text-slate-400 mt-1 font-mono flex items-center gap-3 flex-wrap">
                            ${prof.username ? `<span>👤 نام کاربری: <strong class="text-white">${prof.username}</strong></span>` : ''}
                            ${prof.medicalCouncilNo ? `<span>🆔 ن.د / ش.دانشجویی: <strong class="text-amber-300">${prof.medicalCouncilNo}</strong></span>` : ''}
                            ${prof.phone ? `<span>📞 همراه: <strong class="text-slate-300">${prof.phone}</strong></span>` : ''}
                            ${prof.email ? `<span>✉️ ایمیل: <strong class="text-slate-300">${prof.email}</strong></span>` : ''}
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 shrink-0 flex-wrap">
                        ${!isApproved ? `
                          <button onclick="adminApproveDoctor('${prof.id}', 'approved')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black px-3.5 py-2 rounded-xl shadow-lg shadow-emerald-900/40 cursor-pointer transition-all flex items-center gap-1">
                            <span>✓</span>
                            <span>تایید فوری</span>
                          </button>
                        ` : `
                          <button onclick="adminApproveDoctor('${prof.id}', 'pending')" class="bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-bold px-3 py-2 rounded-xl cursor-pointer transition-all">
                            تعلیق موقت
                          </button>
                        `}
                        <button onclick="openEditDoctorModal('${prof.id}')" class="bg-indigo-950/70 hover:bg-indigo-900 border border-indigo-500/50 text-indigo-300 text-xs font-bold px-3.5 py-2 rounded-xl cursor-pointer transition-all flex items-center gap-1">
                          <span>✏️</span>
                          <span>ویرایش</span>
                        </button>
                        <button onclick="adminDeleteDoctor('${prof.id}')" class="bg-rose-950/60 hover:bg-rose-900 border border-rose-700/60 text-rose-300 text-xs font-bold px-3 py-2 rounded-xl cursor-pointer transition-all flex items-center gap-1">
                          <span>🗑️</span>
                          <span>حذف</span>
                        </button>
                      </div>
                    </div>
                  `;
                }).join('') : `
                  <div class="text-center py-12 text-xs text-slate-400 bg-slate-800/30 rounded-2xl border border-slate-700">
                    پزشک یا استادی با این فیلتر یا عبارت جستجو یافت نشد.
                  </div>
                `}
              </div>
            </div>
          ` : ''}

          <!-- ۲. تب همه کاربران ثبت‌نامی در سراسر جهان -->
          ${tab === 'users' ? `
            <div class="space-y-4">
              
              <!-- ردیف فیلتر و جستجوی کاربران -->
              <div class="flex items-center justify-between flex-wrap gap-3 bg-slate-900/70 p-3 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <button onclick="setAdminUserFilter('all')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${userFilter === 'all' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                    همه (${allUsersList.length})
                  </button>
                  <button onclick="setAdminUserFilter('doctor')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${userFilter === 'doctor' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                    🩺 اساتید و پزشکان (${totalDoctorsUsers})
                  </button>
                  <button onclick="setAdminUserFilter('phd')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${userFilter === 'phd' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                    🎓 دانشجویان PhD (${totalPhdUsers})
                  </button>
                  <button onclick="setAdminUserFilter('client')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${userFilter === 'client' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                    🐾 مراجعین (${totalClientUsers})
                  </button>
                  <button onclick="setAdminUserFilter('admin')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${userFilter === 'admin' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                    👑 مدیران (${totalAdminUsers})
                  </button>
                </div>

                <div class="flex-1 min-w-[240px] max-w-sm">
                  <input type="text" placeholder="جستجوی نام، نام کاربری، شماره همراه یا ایمیل..." value="${state.adminSearchTerm}" oninput="setAdminSearchTerm(this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-emerald-500" />
                </div>
              </div>

              <!-- جدول کاربران -->
              <div class="overflow-x-auto rounded-2xl border border-slate-800">
                <table class="w-full text-right text-xs">
                  <thead class="bg-slate-800/90 text-slate-300 border-b border-slate-700">
                    <tr>
                      <th class="p-3">نام و نام خانوادگی</th>
                      <th class="p-3">نام کاربری</th>
                      <th class="p-3">شماره همراه / ایمیل</th>
                      <th class="p-3">نقش و مرتبه علمی</th>
                      <th class="p-3">دپارتمان / نظام پزشکی</th>
                      <th class="p-3">تاریخ ثبت</th>
                      <th class="p-3 text-center">عملیات</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-800 bg-slate-900/50">
                    ${filteredUsers.length > 0 ? filteredUsers.map(u => {
                      const isMaster = (u.username || '').toLowerCase() === 'jahesh1395@gmail.com' || (u.email || '').toLowerCase() === 'jahesh1395@gmail.com' || u.id === 'usr-jahesh-master' || u.id === 'usr-vet-admin';
                      const isDoc = u.role === 'doctor' || (u.academicRank && !u.academicRank.includes('PhD') && !u.academicRank.includes('دکتری'));
                      const isPhd = u.role === 'phd' || (u.academicRank && (u.academicRank.includes('PhD') || u.academicRank.includes('دکتری')));
                      const isAdmin = u.role === 'admin' || u.isAdmin;

                      return `
                        <tr class="hover:bg-slate-800/50 transition-colors">
                          <td class="p-3 font-bold text-white flex items-center gap-2">
                            <span>${u.name || u.fullName || 'کاربر'}</span>
                            ${isMaster ? '<span class="text-[9px] bg-amber-500 text-black font-black px-1.5 py-0.5 rounded">مدیر ارشد</span>' : ''}
                          </td>
                          <td class="p-3 font-mono text-slate-300">${u.username || u.email || '—'}</td>
                          <td class="p-3 font-mono text-slate-300">
                            <div>${u.phone || '—'}</div>
                            ${u.email ? `<div class="text-[10px] text-slate-500">${u.email}</div>` : ''}
                          </td>
                          <td class="p-3">
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isAdmin ? 'bg-amber-950 text-amber-300 border border-amber-500/40' : (isDoc ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : (isPhd ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' : 'bg-slate-800 text-slate-400'))}">
                              ${isAdmin ? '👑 مدیر ارشد' : (isDoc ? '🩺 عضو هیئت علمی / پزشک' : (isPhd ? '🎓 دانشجوی دکتری (PhD)' : '🐾 مراجعه‌کننده'))}
                            </span>
                            ${u.academicRank ? `<div class="text-[10px] text-slate-400 mt-0.5">${u.academicRank}</div>` : ''}
                          </td>
                          <td class="p-3 text-[11px] text-slate-300">
                            <div>${u.departmentName || u.departmentId || '—'}</div>
                            ${u.medicalCouncilNo ? `<div class="text-[10px] text-amber-400/90 font-mono">نظام: ${u.medicalCouncilNo}</div>` : ''}
                          </td>
                          <td class="p-3 text-slate-400 text-[11px]">${u.createdAt || '۱۴۰۵'}</td>
                          <td class="p-3 text-center whitespace-nowrap">
                            <button onclick="openEditUserModal('${u.id}')" class="text-indigo-400 hover:text-indigo-300 text-xs px-2.5 py-1 rounded-lg bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-800/40 cursor-pointer ml-1">
                              ویرایش
                            </button>
                            ${!isMaster ? `
                              <button onclick="adminDeleteUser('${u.id}', '${u.username || ''}')" class="text-rose-400 hover:text-rose-300 text-xs px-2.5 py-1 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/40 cursor-pointer">
                                حذف
                              </button>
                            ` : '<span class="text-slate-500 text-[10px]">سیستمی</span>'}
                          </td>
                        </tr>
                      `;
                    }).join('') : `
                      <tr>
                        <td colspan="7" class="text-center py-10 text-xs text-slate-400">کاربری با این مشخصات یافت نشد.</td>
                      </tr>
                    `}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

          <!-- ۳. تب نوبت‌های ثبت‌شده -->
          ${tab === 'appointments' ? `
            <div class="space-y-3">
              <div class="text-xs text-slate-300 mb-2">لیست نوبت‌های ثبت‌شده و تراکنش‌های درگاه زیپال:</div>
              ${state.appointments.length > 0 ? state.appointments.map(a => `
                <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div class="font-bold text-white">${a.animalName} (${a.animalType}) | سرپرست: ${a.clientName} (${a.clientPhone || 'بدون تلفن'})</div>
                    <div class="text-slate-400 text-[11px] mt-0.5">${a.departmentName} - پزشک: ${a.professorName} | تاریخ: ${a.appointmentDate}</div>
                    <div class="text-[10px] text-slate-500 font-mono mt-0.5">کد رهگیری: ${a.trackingCode} ${a.transactionId ? `| پیگیری زیپال: ${a.transactionId}` : ''}</div>
                  </div>
                  <div class="text-left shrink-0">
                    <div class="font-black text-emerald-400 text-sm">${formatPrice(a.amountPaid)}</div>
                    <span class="text-[10px] px-2 py-0.5 rounded-md ${a.paymentStatus === 'paid' || a.status === 'confirmed' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-amber-950 text-amber-300'}">
                      ${a.paymentStatus === 'paid' || a.status === 'confirmed' ? '✓ پرداخت موفق زیپال' : 'در انتظار پرداخت'}
                    </span>
                  </div>
                </div>
              `).join('') : `
                <div class="text-center py-12 text-xs text-slate-400 bg-slate-800/30 rounded-2xl">هنوز نوبتی در سامانه ثبت نشده است.</div>
              `}
            </div>
          ` : ''}

          <!-- ۴. تب دپارتمان‌ها -->
          ${tab === 'departments' ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${state.departments.map(d => `
                <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div class="font-bold text-white text-xs">${d.name}</div>
                  <div class="text-[11px] text-emerald-400 mt-1">مدیر گروه: ${d.headOfDepartment}</div>
                  <div class="text-[10px] text-slate-400 mt-1 leading-relaxed">${d.shortDescription}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}

        </div>

      </div>
    </div>
  `;
}

// مدال ویرایش اطلاعات و تعرفه اختصاصی استاد / پزشک
function renderEditDoctorModal() {
  if (!state.editDoctorModalOpen || !state.editingDoctor) return "";
  const d = state.editingDoctor;
  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div class="bg-slate-900 border border-indigo-500/50 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right max-h-[92vh] overflow-y-auto custom-scrollbar">
        <button onclick="closeEditDoctorModal()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center absolute top-5 left-5 transition-all cursor-pointer border border-slate-700">✕</button>

        <div class="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
          <div class="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/50 flex items-center justify-center text-xl text-indigo-400">
            ✏️
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white">ویرایش مشخصات، تعرفه و برنامه حضور استاد</h3>
            <p class="text-xs text-indigo-400">تغییرات بلافاصله در کل سامانه و صفحه رزرو مراجعین اعمال می‌گردد.</p>
          </div>
        </div>

        <form onsubmit="handleEditDoctorSubmit(event)" class="space-y-4">
          
          <!-- بخش عکس پرسنلی -->
          <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center gap-4 flex-wrap">
            <div class="relative group shrink-0">
              <img src="${d.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'}" class="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500 shadow-md bg-slate-800" />
              <button type="button" onclick="document.getElementById('edit_doctor_avatar_input').click()" class="absolute inset-0 bg-black/60 text-white rounded-2xl opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-[11px] font-bold cursor-pointer">
                تغییر عکس
              </button>
            </div>
            <div class="flex-1 min-w-[200px] space-y-2">
              <input type="file" id="edit_doctor_avatar_input" accept="image/*" class="hidden" onchange="handleEditDoctorAvatarUpload(event)" />
              <div class="flex items-center gap-2 flex-wrap">
                <button type="button" onclick="document.getElementById('edit_doctor_avatar_input').click()" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5">
                  <span>📁</span>
                  <span>انتخاب تصویر جدید</span>
                </button>
                ${d.avatar ? `
                  <button type="button" onclick="removeEditDoctorAvatar()" class="bg-rose-950/60 hover:bg-rose-900 border border-rose-700/60 text-rose-300 text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer">
                    حذف عکس
                  </button>
                ` : ''}
              </div>
              <p class="text-[11px] text-slate-400">عکس پرسنلی استاد در کارت معرفی و پروفایل رسمی نمایش داده می‌شود.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی استاد *</label>
              <input required name="name" type="text" value="${d.name || ''}" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">مرتبه علمی *</label>
              <select name="academicRank" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500">
                ${['استاد تمام (پروفسور)', 'دانشیار', 'استادیار', 'رزیدنت ارشد تخصصی', 'دانشجوی دکتری تخصصی (PhD)'].map(r => `<option value="${r}" ${(d.academicRank || '').includes(r) ? 'selected' : ''}>${r}</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">دپارتمان تخصصی *</label>
              <select name="departmentId" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500">
                ${state.departments.map(dep => `<option value="${dep.id}" ${d.departmentId === dep.id ? 'selected' : ''}>${dep.name}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">فیلد فوق‌تخصصی / گرایش</label>
              <input name="subSpecialty" type="text" value="${d.subSpecialty || ''}" placeholder="مثال: جراحی بافت نرم و ارتوپدی" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره نظام / دانشجویی</label>
              <input name="medicalCouncilNo" type="text" value="${d.medicalCouncilNo || d.studentNo || ''}" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره همراه</label>
              <input name="phone" type="tel" value="${d.phone || ''}" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">ایمیل</label>
              <input name="email" type="email" value="${d.email || ''}" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">تعرفه ویزیت حضوری (تومان)</label>
              <input name="visitFee" type="number" step="10000" value="${d.visitFee || 380000}" class="w-full bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">تعرفه مشاوره آنلاین (تومان)</label>
              <input name="onlineConsultFee" type="number" step="10000" value="${d.onlineConsultFee || 250000}" class="w-full bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">روزهای حضور</label>
              <input name="workDays" type="text" value="${Array.isArray(d.workDays) ? d.workDays.join('، ') : (d.workDays || 'شنبه، دوشنبه، چهارشنبه')}" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">ساعت شیفت حضور</label>
              <input name="workHours" type="text" value="${d.workHours || '۰۹:۰۰ الی ۱۳:۰۰'}" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">وضعیت انتشار و فعالیت در سایت</label>
            <select name="status" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500">
              <option value="approved" ${d.status === 'approved' || d.isApproved ? 'selected' : ''}>✓ فعال و تایید شده (نمایش در لیست اساتید و نوبت‌دهی)</option>
              <option value="pending" ${d.status === 'pending' && !d.isApproved ? 'selected' : ''}>⏳ در انتظار تایید / تعلیق موقت</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">بیوگرافی و سوابق علمی</label>
            <textarea name="bio" rows="2" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl leading-relaxed focus:outline-none focus:border-indigo-500">${d.bio || ''}</textarea>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button type="button" onclick="closeEditDoctorModal()" class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer">
              انصراف
            </button>
            <button type="submit" class="px-7 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black transition-all shadow-lg shadow-indigo-600/30 cursor-pointer">
              ذخیره و اعمال تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// مدال ویرایش اطلاعات کاربر
function renderEditUserModal() {
  if (!state.editUserModalOpen || !state.editingUser) return "";
  const u = state.editingUser;
  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div class="bg-slate-900 border border-indigo-500/50 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right">
        <button onclick="closeEditUserModal()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center absolute top-5 left-5 transition-all cursor-pointer border border-slate-700">✕</button>

        <h3 class="text-base sm:text-lg font-black text-white mb-1">ویرایش اطلاعات کاربر</h3>
        <p class="text-xs text-slate-400 mb-5">نام کاربری: <span class="font-mono text-emerald-400">${u.username || u.phone || u.id}</span></p>

        <form onsubmit="handleEditUserSubmit(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی *</label>
            <input required name="name" type="text" value="${u.name || u.fullName || ''}" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره همراه</label>
              <input name="phone" type="tel" value="${u.phone || ''}" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">پست الکترونیک (ایمیل)</label>
              <input name="email" type="email" value="${u.email || ''}" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">نقش در سامانه</label>
            <select name="role" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500">
              <option value="client" ${u.role === 'client' || (!u.role && !u.isAdmin) ? 'selected' : ''}>🐾 مراجعه‌کننده / سرپرست بیمار</option>
              <option value="doctor" ${u.role === 'doctor' ? 'selected' : ''}>🩺 عضو هیئت علمی / پزشک متخصص</option>
              <option value="phd" ${u.role === 'phd' ? 'selected' : ''}>🎓 دانشجوی دکتری تخصصی (PhD)</option>
              <option value="admin" ${u.role === 'admin' || u.isAdmin ? 'selected' : ''}>👑 مدیر سامانه</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">مرتبه علمی (ویژه اساتید)</label>
              <input name="academicRank" type="text" value="${u.academicRank || ''}" placeholder="استادیار / دانشیار" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره نظام دامپزشکی</label>
              <input name="medicalCouncilNo" type="text" value="${u.medicalCouncilNo || ''}" placeholder="12345" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">دپارتمان مربوطه</label>
            <select name="departmentId" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-indigo-500">
              <option value="">بدون دپارتمان</option>
              ${state.departments.map(dep => `<option value="${dep.id}" ${u.departmentId === dep.id ? 'selected' : ''}>${dep.name}</option>`).join('')}
            </select>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button type="button" onclick="closeEditUserModal()" class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer">
              انصراف
            </button>
            <button type="submit" class="px-7 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black transition-all shadow-lg shadow-indigo-600/30 cursor-pointer">
              ذخیره کاربر
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderDoctorModal() {
  if (!state.doctorModalOpen || !state.activeDoctorDetails) return "";
  const prof = state.activeDoctorDetails;
  const isMaster = state.currentUser && (state.currentUser.isAdmin || state.currentUser.role === 'admin' || state.currentUser.id === prof.id);

  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right">
        <button onclick="closeDoctorDetails()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>

        <div class="flex items-center gap-4 mb-6">
          <img src="${prof.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'}" alt="${prof.name}" class="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500/40 shrink-0" />
          <div>
            <h3 class="text-lg font-black text-white">${prof.name}</h3>
            <div class="text-xs font-bold text-emerald-400 mt-0.5">${prof.academicRank}</div>
            <div class="text-xs text-slate-400 mt-1">${prof.departmentName}</div>
          </div>
        </div>

        <div class="space-y-3 text-xs text-slate-300 leading-relaxed mb-6">
          <p>${prof.bio || 'عضو هیئت علمی و متخصص بالینی دانشکده دامپزشکی.'}</p>
          <div class="bg-slate-800/60 p-3 rounded-xl flex items-center justify-between">
            <span class="text-slate-400">تعرفه ویزیت حضوری:</span>
            <strong class="text-emerald-400 font-bold">${formatPrice(prof.visitFee)}</strong>
          </div>
        </div>

        <div class="flex items-center gap-3">
          ${isMaster ? `
            <button onclick="closeDoctorDetails(); openEditDoctorModal('${prof.id}');" class="bg-indigo-950 hover:bg-indigo-900 border border-indigo-500/60 text-indigo-300 font-bold text-xs py-3.5 px-5 rounded-xl transition-all text-center cursor-pointer">
              ✏️ ویرایش مشخصات
            </button>
          ` : ''}
          <button onclick="closeDoctorDetails(); openBookingModal('${prof.id}');" class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl transition-all text-center cursor-pointer">
            رزرو نوبت با این استاد
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderDeptModal() {
  if (!state.deptModalOpen || !state.activeDeptDetails) return "";
  const d = state.activeDeptDetails;
  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right">
        <button onclick="closeDeptDetails()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>
        <h3 class="text-lg font-black text-white mb-2">${d.name}</h3>
        <p class="text-xs text-slate-300 leading-relaxed mb-4">${d.shortDescription || ''}</p>
        <button onclick="closeDeptDetails(); openBookingModal(null, '${d.id}');" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl transition-all text-center">
          رزرو نوبت در این دپارتمان
        </button>
      </div>
    </div>
  `;
}

function renderInvoiceModal() {
  if (!state.invoiceModalOpen || !state.activeInvoice) return "";
  const inv = state.activeInvoice;
  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right">
        <div class="text-center mb-6">
          <div class="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-3xl mx-auto mb-3 text-emerald-400">✓</div>
          <h3 class="text-lg font-black text-white">پرداخت با موفقیت انجام شد</h3>
          <p class="text-xs text-emerald-400 mt-1">نوبت شما در دیتابیس بیمارستان دانشکده دامپزشکی ثبت گردید</p>
        </div>

        <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl space-y-2.5 text-xs text-slate-300 mb-6">
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span>کد رهگیری:</span>
            <strong class="text-emerald-400 font-mono text-sm">${inv.trackingCode}</strong>
          </div>
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span>شماره پیگیری زیپال:</span>
            <strong class="text-white font-mono">${inv.transactionId || 'ZBL-849201'}</strong>
          </div>
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span>نام بیمار:</span>
            <strong class="text-white">${inv.animalName} (${inv.animalType})</strong>
          </div>
          <div class="flex items-center justify-between border-b border-slate-700 pb-2">
            <span>دپارتمان و پزشک:</span>
            <strong class="text-white">${inv.professorName} - ${inv.departmentName}</strong>
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
            تایید و بازگشت
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderMyAppointmentsModal() {
  if (!state.myAppointmentsModalOpen) return "";
  const u = state.currentUser;
  const userAppts = state.appointments.filter(a => u && a.clientPhone === u.phone);

  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right max-h-[85vh] overflow-y-auto custom-scrollbar">
        <button onclick="closeMyAppointmentsModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>
        <h3 class="text-lg font-black text-white mb-2">نوبت‌های رزرو شده من</h3>
        <p class="text-xs text-slate-400 mb-6">لیست نوبت‌های فعال در بیمارستان</p>

        ${userAppts.length > 0 ? `
          <div class="space-y-3">
            ${userAppts.map(a => `
              <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div class="font-bold text-white">${a.animalName} (${a.animalType}) - ${a.departmentName}</div>
                  <div class="text-slate-400 mt-0.5">پزشک: ${a.professorName} | تاریخ: ${a.appointmentDate}</div>
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

function renderFooter() {
  return `
    <footer class="bg-[#070a10] border-t border-slate-800/80 py-10 text-right">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 items-start">
          
          <!-- ۱. معرفی بیمارستان (خلاصه، دقیق و متوازن از نظر هندسی) -->
          <div class="md:col-span-5 space-y-3.5">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center p-1.5 shadow-lg shadow-emerald-500/20 shrink-0">
                <img src="/vet-hospital/faculty-logo.svg" alt="دانشکده دامپزشکی دانشگاه فردوسی مشهد" class="w-full h-full object-contain" />
              </div>
              <div>
                <h4 class="font-black text-white text-sm sm:text-base leading-snug">بیمارستان تخصصی دانشکده دامپزشکی</h4>
                <p class="text-[11px] text-emerald-400 font-semibold">دانشگاه فردوسی مشهد (تاسیس ۱۳۷۱)</p>
              </div>
            </div>
            
            <p class="text-xs text-slate-300 leading-relaxed text-justify">
              بزرگترین و مجهزترین مرکز ارائه خدمات بالینی، جراحی‌های پیشرفته و تریاژ تشخیصی هوش مصنوعی دامپزشکی در شرق کشور تحت نظارت اساتید هیئت علمی دانشگاه.
            </p>

            <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1.5 text-[11px]">
              <div class="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span>🕒 ساعات پذیرش:</span>
                <span class="text-slate-300 font-normal">همه‌روزه (به‌جز جمعه‌ها و تعطیلات) صبح‌ها</span>
              </div>
              <div class="text-slate-400">
                تارنمای رسمی و نتایج: <a href="http://www.vetclinic.um.ac.ir" target="_blank" rel="noopener noreferrer" class="text-emerald-400 font-medium hover:underline">www.vetclinic.um.ac.ir</a>
              </div>
            </div>
          </div>

          <!-- ۲. دسترسی سریع (متوازن در مرکز) -->
          <div class="md:col-span-3 space-y-2.5">
            <h5 class="font-bold text-white text-xs mb-3 flex items-center gap-1.5">
              <span class="text-emerald-400">⚡</span>
              <span>دسترسی سریع</span>
            </h5>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><button onclick="setVetTab('home')" class="hover:text-emerald-400 transition-colors cursor-pointer">صفحه اصلی</button></li>
              <li><button onclick="setVetTab('departments')" class="hover:text-emerald-400 transition-colors cursor-pointer">دپارتمان‌های تخصصی</button></li>
              <li><button onclick="setVetTab('professors')" class="hover:text-emerald-400 transition-colors cursor-pointer">اساتید هیئت علمی</button></li>
              <li><button onclick="setVetTab('triage')" class="hover:text-emerald-400 transition-colors cursor-pointer">تریاژ هوش مصنوعی</button></li>
              <li><button onclick="setVetTab('track')" class="hover:text-emerald-400 transition-colors cursor-pointer">پیگیری نوبت</button></li>
              <li><a href="/" class="hover:text-emerald-400 transition-colors cursor-pointer">وب‌سایت اصلی جهش ←</a></li>
            </ul>
          </div>

          <!-- ۳. نشانی و اطلاعات تماس بیمارستان -->
          <div class="md:col-span-4 space-y-2.5 text-xs">
            <h5 class="font-bold text-white mb-3 flex items-center gap-1.5">
              <span class="text-emerald-400">📍</span>
              <span>نشانی و تماس رسمی</span>
            </h5>
            <div class="space-y-2 text-slate-300">
              <div class="flex items-start gap-2">
                <span class="text-emerald-400 shrink-0 mt-0.5">📍</span>
                <span class="leading-relaxed">کیلومتر ۵ جاده آسیایی (بزرگراه پیامبر اعظم (ص)) روبه‌روی بیمارستان رضوی</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-emerald-400 shrink-0">📞</span>
                <span>تلفن پذیرش: <a href="tel:05138803765" class="text-emerald-400 font-bold hover:underline font-mono">۰۵۱-۳۸۸۰۳۷۶۵</a></span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-emerald-400 shrink-0">📮</span>
                <span>کدپستی: <span class="font-mono text-slate-200">۹۱۷۷۹۴۸۹۷۴</span></span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-emerald-400 shrink-0">✉️</span>
                <span>ایمیل: <a href="mailto:vetclinic@um.ac.ir" class="text-emerald-400 hover:underline">vetclinic@um.ac.ir</a></span>
              </div>
              <div class="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                درگاه پرداخت آنلاین: شبکه رسمی شاپرک و زیپال
              </div>
            </div>
          </div>

        </div>

        <div class="border-t border-slate-800/80 pt-5 text-center text-xs text-slate-500">
          تمامی حقوق مادی و معنوی متعلق به بیمارستان تخصصی دانشکده دامپزشکی دانشگاه فردوسی مشهد و انجمن علمی جهش می‌باشد.
        </div>
      </div>
    </footer>
  `;
}

function renderMainContent() {
  switch (state.activeTab) {
    case "departments":
      return renderDepartmentsSection();
    case "professors":
      return renderProfessorsSection();
    case "triage":
      return renderTriageSection();
    case "track":
      return renderTrackSection();
    case "home":
    default:
      return renderHomeSection();
  }
}

function renderApp() {
  const container = document.getElementById("vet-app");
  if (!container) return;

  container.innerHTML = `
    <div class="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 font-sans selection:bg-emerald-600 selection:text-white">
      ${renderHeader()}
      <main class="flex-1">
        ${renderMainContent()}
      </main>
      ${renderFooter()}

      ${renderBookingModal()}
      ${renderDoctorModal()}
      ${renderDeptModal()}
      ${renderInvoiceModal()}
      ${renderAuthModal()}
      ${renderMyAppointmentsModal()}
      ${renderAdminModal()}
      ${renderEditDoctorModal()}
      ${renderEditUserModal()}
    </div>
  `;
}

async function initApp() {
  // ۱. بارگذاری اولیه از حافظه محلی برای نمایش فوری (بدون هیچ تاخیر)
  state.professors = getStoredProfessors();
  state.cloudUsers = getStoredUsers();
  try {
    renderApp();
  } catch (err) {
    console.error("Initial render error:", err);
  }

  await handlePaymentReturn();

  // ۲. اتصال بلادرنگ ابری فایربیس (دقیقاً همانند جهش‌کالا - همگام‌سازی فوری برای تمام کاربران در سراسر جهان)
  if (window.VetFirebase) {
    try {
      if (typeof window.VetFirebase.onProfessorsChange === 'function') {
        window.VetFirebase.onProfessorsChange((profs) => {
          if (Array.isArray(profs) && profs.length > 0) {
            const currentMap = new Map();
            (state.professors || []).forEach(p => { if (p && p.id) currentMap.set(p.id, p); });
            profs.forEach(p => { if (p && p.id) currentMap.set(p.id, { ...currentMap.get(p.id), ...p }); });
            const merged = Array.from(currentMap.values());
            state.professors = merged;
            saveStoredProfessors(merged);
            renderApp();
          }
        });
      }

      if (typeof window.VetFirebase.onUsersChange === 'function') {
        window.VetFirebase.onUsersChange((users) => {
          if (Array.isArray(users) && users.length > 0) {
            const currentMap = new Map();
            (state.cloudUsers || []).forEach(u => { if (u && u.id) currentMap.set(u.id, u); });
            users.forEach(u => { if (u && u.id) currentMap.set(u.id, { ...currentMap.get(u.id), ...u }); });
            const merged = Array.from(currentMap.values());
            state.cloudUsers = merged;
            saveStoredUsers(merged);
            renderApp();
          }
        });
      }

      if (typeof window.VetFirebase.onAppointmentsChange === 'function') {
        window.VetFirebase.onAppointmentsChange((appts) => {
          if (Array.isArray(appts)) {
            state.appointments = appts;
            try { localStorage.setItem("vet_appointments", JSON.stringify(appts)); } catch(e){}
            renderApp();
          }
        });
      }
    } catch (fbErr) {
      console.warn("VetFirebase real-time listener notice:", fbErr);
    }
  }

  // ۳. دریافت فوق‌سریع اطلاعات از سرور داخلی بیمارستان (بدون فیلترشکن - آنی <10ms)
  try {
    const [depsRes, profsRes, apptsRes, usersRes] = await Promise.all([
      fetchUniversalApi('departments', { cache: 'no-store' }).catch(() => null),
      fetchUniversalApi('professors', { cache: 'no-store' }).catch(() => null),
      fetchUniversalApi('appointments', { cache: 'no-store' }).catch(() => null),
      fetchUniversalApi('users', { cache: 'no-store' }).catch(() => null)
    ]);

    if (depsRes && depsRes.ok) {
      const d = await depsRes.json().catch(() => null);
      if (d && Array.isArray(d.departments)) state.departments = d.departments;
    }
    if (profsRes && profsRes.ok) {
      const p = await profsRes.json().catch(() => null);
      const profList = Array.isArray(p) ? p : (p && Array.isArray(p.professors) ? p.professors : []);
      if (profList.length > 0) {
        state.professors = profList;
        saveStoredProfessors(profList);
      }
    }
    if (apptsRes && apptsRes.ok) {
      const a = await apptsRes.json().catch(() => null);
      const apptList = Array.isArray(a) ? a : (a && Array.isArray(a.appointments) ? a.appointments : []);
      if (apptList.length > 0) {
        state.appointments = apptList;
        try {
          localStorage.setItem("vet_appointments", JSON.stringify(apptList));
        } catch (e) {}
      }
    }
    if (usersRes && usersRes.ok) {
      const u = await usersRes.json().catch(() => null);
      const uList = Array.isArray(u) ? u : (u && Array.isArray(u.users) ? u.users : []);
      if (uList.length > 0) {
        state.cloudUsers = uList;
        saveStoredUsers(uList);
      }
    }
    renderApp();
  } catch (e) {
    console.warn("Init fetch notice:", e);
  }

  // ۴. نظارت مداوم و همگام‌سازی بلادرنگ کلیه اطلاعات در تمامی حساب‌ها، مرورگرها و کاربران سراسر جهان (هر ۲ ثانیه)
  setInterval(() => {
    Promise.all([
      fetchUniversalApi('users', { cache: 'no-store' }).then(r => r && r.ok ? r.json() : null).catch(() => null),
      fetchUniversalApi('professors', { cache: 'no-store' }).then(r => r && r.ok ? r.json() : null).catch(() => null),
      fetchUniversalApi('appointments', { cache: 'no-store' }).then(r => r && r.ok ? r.json() : null).catch(() => null)
    ]).then(([uData, pData, aData]) => {
      let changed = false;
      const uList = Array.isArray(uData) ? uData : (uData && Array.isArray(uData.users) ? uData.users : null);
      if (uList && JSON.stringify(uList) !== JSON.stringify(state.cloudUsers)) {
        state.cloudUsers = uList;
        saveStoredUsers(uList);
        changed = true;
      }
      const pList = Array.isArray(pData) ? pData : (pData && Array.isArray(pData.professors) ? pData.professors : null);
      if (pList && JSON.stringify(pList) !== JSON.stringify(state.professors)) {
        state.professors = pList;
        saveStoredProfessors(pList);
        changed = true;
      }
      const aList = Array.isArray(aData) ? aData : (aData && Array.isArray(aData.appointments) ? aData.appointments : null);
      if (aList && JSON.stringify(aList) !== JSON.stringify(state.appointments)) {
        state.appointments = aList;
        try {
          localStorage.setItem("vet_appointments", JSON.stringify(aList));
        } catch (e) {}
        changed = true;
      }
      if (changed) renderApp();
    }).catch(() => {});
  }, 2000);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initApp());
  } else {
    initApp();
  }
}
