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

let state = {
  activeTab: "home",
  departments: INITIAL_DEPARTMENTS,
  professors: [],
  appointments: [],
  selectedDepartment: null,
  selectedProfessor: null,
  searchQuery: "",
  currentUser: JSON.parse(localStorage.getItem("vet_user") || "null"),

  bookingModalOpen: false,
  triageModalOpen: false,
  doctorModalOpen: false,
  deptModalOpen: false,
  invoiceModalOpen: false,
  authModalOpen: false,
  myAppointmentsModalOpen: false,
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
    appointmentDate: "فردا - ساعت ۱۰:۰۰ صبح",
    appointmentTime: "۱۰:۰۰ صبح",
    symptoms: "",
    clientName: "",
    clientPhone: "",
    clientNationalId: "",
    urgency: "routine"
  },

  authForm: {
    mode: "login", // "login" | "register"
    role: "client", // "client" | "doctor" | "phd"
    phone: "",
    password: "",
    name: "",
    petName: "",
    medicalCouncilNo: "",
    studentNo: "",
    academicRank: "استادیار",
    departmentId: "surgery-anesthesia",
    subSpecialty: "",
    visitFee: 380000,
    onlineConsultFee: 250000
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
    const res = await fetch(`${API_BASE}/ai-triage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        animalType: f.animalType,
        animalBreed: f.animalBreed,
        symptoms: f.symptoms
      })
    });
    const data = await res.json();
    if (data.success && data.triageResult) {
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
    const res = await fetch("/api/zibal-request", {
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

    const data = await res.json();
    if (data.success && data.paymentUrl) {
      window.location.href = data.paymentUrl;
    } else {
      hidePaymentRedirectLoader();
      alert("خطا در اتصال به درگاه زیپال: " + (data.message || "لطفاً دوباره تلاش فرمایید."));
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
      const vRes = await fetch("/api/zibal-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trackId: trackId,
          merchant: ZIBAL_MERCHANT_CODE
        })
      });
      const vData = await vRes.json();
      hidePaymentRedirectLoader();

      if (vData.success || status === "2") {
        const refNumber = vData.refNumber || trackId;
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
          await fetch("/api/vet/appointments/book", {
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

// ثبت‌نام یکپارچه بر اساس نقش (کاربر عادی، پزشک، دانشجوی PhD)
window.handleUnifiedAuthSubmit = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const f = state.authForm;

  if (!f.phone) {
    alert("شماره تلفن همراه الزامی است.");
    return;
  }

  if (f.mode === "login") {
    const user = {
      phone: f.phone,
      name: f.name || "کاربر سامانه",
      role: f.role
    };
    state.currentUser = user;
    localStorage.setItem("vet_user", JSON.stringify(user));
    state.authModalOpen = false;
    alert("ورود با موفقیت انجام شد.");
    renderApp();
    return;
  }

  // ثبت‌نام
  if (!f.name) {
    alert("نام و نام خانوادگی الزامی است.");
    return;
  }

  const dept = state.departments.find(d => d.id === f.departmentId);
  const deptName = dept ? dept.name : "دپارتمان تخصصی";

  if (f.role === "doctor" || f.role === "phd") {
    const academicTitle = f.role === "phd" ? "دانشجوی دکتری تخصصی (PhD) / دستیار" : (f.academicRank || "استادیار");
    const payload = {
      name: f.name.trim(),
      academicRank: academicTitle,
      departmentId: f.departmentId,
      departmentName: deptName,
      subSpecialty: f.subSpecialty || (f.role === "phd" ? "پژوهشگر دکتری تخصصی" : "متخصص بالینی"),
      medicalCouncilNo: f.medicalCouncilNo || f.studentNo || "",
      phone: f.phone,
      visitFee: Number(f.visitFee) || (f.role === "phd" ? 280000 : 380000),
      onlineConsultFee: Number(f.onlineConsultFee) || 200000,
      schedule: ["شنبه تا چهارشنبه ۰۹:۰۰ الی ۱۳:۰۰"],
      status: "approved"
    };

    try {
      const res = await fetch("/api/vet/professors/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success && data.professor) {
        state.professors.unshift(data.professor);
      }
    } catch (err) {
      console.warn("Register doc error:", err);
    }
  }

  const user = {
    phone: f.phone,
    name: f.name,
    role: f.role,
    departmentName: deptName
  };
  state.currentUser = user;
  localStorage.setItem("vet_user", JSON.stringify(user));
  state.authModalOpen = false;
  alert("عضویت شما با موفقیت ثبت گردید و پروفایل شما فعال شد.");
  renderApp();
  if (window.confetti) window.confetti({ particleCount: 80, spread: 70 });
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
    const res = await fetch(`${API_BASE}/ai-triage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        animalType: f.animalType,
        animalBreed: f.animalBreed,
        symptoms: f.symptoms,
        age: f.age
      })
    });
    const data = await res.json();
    state.triageForm.result = data.triageResult;
  } catch (err) {
    console.warn("Triage error:", err);
  }

  state.triageForm.isProcessing = false;
  renderApp();
};

// رندر هدر خلوت، لوکس و تمیز
function renderHeader() {
  const u = state.currentUser;
  return `
    <header class="bg-[#090d16] border-b border-slate-800/80 sticky top-0 z-40 backdrop-blur-md bg-opacity-95 shadow-lg">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 flex-nowrap">
        
        <!-- لوگوی دانشکده دامپزشکی اصلی و عنوان -->
        <div class="flex items-center gap-3 cursor-pointer shrink-0" onclick="setVetTab('home')">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-700 to-indigo-900 flex items-center justify-center p-1.5 shadow-lg shadow-emerald-500/20 border border-emerald-500/30 shrink-0">
            <img src="/vet-hospital/faculty-logo.svg" alt="دانشکده دامپزشکی" class="w-full h-full object-contain filter drop-shadow" />
          </div>
          <div class="shrink-0">
            <h1 class="text-sm sm:text-base font-black text-white leading-tight whitespace-nowrap">بیمارستان تخصصی دانشکده دامپزشکی</h1>
            <p class="text-[11px] text-emerald-400 font-semibold whitespace-nowrap hidden sm:block">مرکز درمانی، تحقیقاتی و بالینی دانشگاه</p>
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
        <div class="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
          ${u ? `
            <div class="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-xl whitespace-nowrap shrink-0">
              <div class="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-xs font-black text-white shrink-0">
                ${u.role === 'doctor' ? '👨‍⚕️' : u.role === 'phd' ? '🎓' : '🐾'}
              </div>
              <div class="text-right hidden sm:block">
                <div class="text-xs font-bold text-white">${u.name}</div>
                <div class="text-[10px] text-emerald-400">${u.role === 'doctor' ? 'استاد هیئت علمی' : u.role === 'phd' ? 'دانشجوی دکتری' : 'سرپرست بیمار'}</div>
              </div>
              <button onclick="openMyAppointmentsModal()" title="نوبت‌ها" class="text-xs text-slate-300 hover:text-white p-1 hover:bg-slate-700 rounded-lg">📋</button>
              <button onclick="logoutUser()" title="خروج" class="text-xs text-rose-400 hover:text-rose-300 p-1 hover:bg-rose-950/40 rounded-lg">✕</button>
            </div>
          ` : `
            <button onclick="openAuthModal('login')" class="flex items-center gap-1.5 text-xs font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 px-3.5 py-2.5 rounded-xl transition-all shrink-0">
              <span>👤</span>
              <span>ورود / عضویت</span>
            </button>
          `}

          <button onclick="openBookingModal()" class="flex items-center gap-1.5 text-xs font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all shrink-0">
            <span>⚡</span>
            <span>نوبت‌دهی آنلاین</span>
          </button>

          <a href="/" onclick="window.location.href='/'; return true;" class="hidden xl:flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 px-3 py-2.5 rounded-xl transition-all shrink-0">
            <span>🌐</span>
            <span>وب‌سایت اصلی جهش</span>
            <span>←</span>
          </a>

          <button onclick="toggleMobileMenu()" class="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-800 rounded-xl shrink-0">
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
            <button onclick="openAuthModal('register')" class="p-2.5 rounded-xl bg-emerald-950 text-right text-emerald-300">👤 عضویت و ثبت‌نام</button>
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

// مدال نوبت‌دهی هوشمند متصل به هوش مصنوعی
function renderBookingModal() {
  if (!state.bookingModalOpen) return "";
  const currentStep = state.bookingStep;
  const f = state.bookingForm;
  const currentDept = state.departments.find(d => d.id === f.departmentId) || state.departments[0];
  const currentProf = state.professors.find(p => p.id === f.professorId);
  const profsInDept = state.professors.filter(p => p.departmentId === f.departmentId);

  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto custom-scrollbar text-right">
        
        <button onclick="closeBookingModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>

        <!-- نشان تریاژ و عنوان مدال با چیدمان دقیق و تراز -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
              <span>✨ سامانه ویزیت دقیق درمانگاه با هوش مصنوعی</span>
            </span>
            <span class="text-xs text-slate-400">مرحله ${currentStep} از ۴</span>
          </div>
          <h3 class="text-lg font-black text-white">
            ${currentStep === 1 ? 'مرحله اول: مشخصات و شرح حال بالینی بیمار' : ''}
            ${currentStep === 2 ? 'مرحله دوم: اساتید و متخصصین منتخب هوش مصنوعی' : ''}
            ${currentStep === 3 ? 'مرحله سوم: زمان‌بندی و نوع ویزیت' : ''}
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
                <input type="text" placeholder="مثال: ژرمن، پرشین..." value="${f.animalBreed}" oninput="state.bookingForm.animalBreed=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">سن و جنسیت</label>
                <input type="text" placeholder="مثال: ۲ سال / نر" value="${f.animalAge}" oninput="state.bookingForm.animalAge=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
              </div>
            </div>

            <!-- کادر شرح حال جهت تحلیل هوش مصنوعی -->
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شرح حال بالینی و علائم بیماری (بررسی و طبقه‌بندی هوشمند توسط هوش مصنوعی) *</label>
              <textarea required rows="3" placeholder="مثال: بیمار دچار لنگش شدید پای راست عقب شده و هنگام راه رفتن ناله می‌کند، از پله بالا نمی‌رود و بی‌حال است..." oninput="state.bookingForm.symptoms=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl leading-relaxed focus:outline-none focus:border-emerald-500">${f.symptoms}</textarea>
            </div>

            <div class="flex justify-end pt-3">
              <button onclick="runBookingAiTriageAndProceed()" class="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all ${state.aiAnalyzingBooking ? 'opacity-70 pointer-events-none' : ''}">
                ${state.aiAnalyzingBooking ? '✨ در حال تحلیل شرح حال با هوش مصنوعی...' : '✨ تحلیل شرح حال با هوش مصنوعی و معرفی اساتید ←'}
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله دوم: اساتید پیشنهادی هوش مصنوعی بر اساس دپارتمان تشخیص داده شده -->
        ${currentStep === 2 ? `
          <div class="space-y-4">
            <!-- بنر تشخیص هوش مصنوعی -->
            <div class="p-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-xs">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-emerald-300">✨ دپارتمان پیشنهادی هوش مصنوعی:</span>
                <span class="font-black text-white bg-emerald-800/60 px-2.5 py-0.5 rounded-lg">${currentDept.name}</span>
              </div>
              <p class="text-[11px] text-slate-300 mt-1">بر اساس شرح حال بیمار، نوبت شما به این بخش ارجاع شده است. لطفاً پزشک معالج را انتخاب فرمایید:</p>
            </div>

            <div class="flex items-center justify-between">
              <label class="text-xs font-bold text-slate-300">انتخاب استاد هیئت علمی / پزشک معالج:</label>
              <select onchange="selectBookingDepartment(this.value)" class="bg-slate-800 border border-slate-700 text-slate-300 text-[11px] px-2 py-1 rounded-lg">
                ${state.departments.map(d => `<option value="${d.id}" ${f.departmentId === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
              </select>
            </div>

            <!-- لیست اساتید دپارتمان با طراحی خوشگل -->
            <div class="space-y-2.5 max-h-56 overflow-y-auto custom-scrollbar">
              <div onclick="selectBookingProfessor('')" class="p-3.5 rounded-2xl border cursor-pointer transition-all ${!f.professorId ? 'bg-emerald-950/60 border-emerald-500 shadow-md ring-1 ring-emerald-500/50' : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'}">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-900/80 flex items-center justify-center text-lg text-white font-bold shrink-0">🏥</div>
                    <div>
                      <div class="font-bold text-white text-xs">پذیرش تخصصی دپارتمان و ویزیت توسط متخصص کشیک</div>
                      <div class="text-[11px] text-emerald-400 mt-0.5">ویزیت توسط کادر هیئت علمی شیفت کلینیک</div>
                    </div>
                  </div>
                  <div class="text-xs font-bold text-emerald-400">۳۵۰,۰۰۰ تومان</div>
                </div>
              </div>

              ${profsInDept.map(prof => `
                <div onclick="selectBookingProfessor('${prof.id}')" class="p-3.5 rounded-2xl border cursor-pointer transition-all ${f.professorId === prof.id ? 'bg-emerald-950/60 border-emerald-500 shadow-md ring-1 ring-emerald-500/50' : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'}">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <img src="${prof.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'}" class="w-10 h-10 rounded-xl object-cover border border-emerald-500/40 shrink-0" />
                      <div>
                        <div class="font-bold text-white text-xs">${prof.name}</div>
                        <div class="text-[11px] text-emerald-400 mt-0.5">${prof.academicRank} - ${prof.subSpecialty || 'متخصص کلینیکال'}</div>
                      </div>
                    </div>
                    <div class="text-xs font-bold text-emerald-400">${formatPrice(prof.visitFee)}</div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="flex items-center justify-between pt-4">
              <button onclick="setBookingStep(1)" class="text-xs text-slate-400 hover:text-white">← بازگشت</button>
              <button onclick="setBookingStep(3)" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all">
                مرحله بعد: زمان‌بندی ویزیت ←
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله سوم: زمان‌بندی و نوع ویزیت -->
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
                <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره تلفن همراه (پیامک رهگیری) *</label>
                <input required type="tel" placeholder="0912xxxxxxx" value="${f.clientPhone}" oninput="state.bookingForm.clientPhone=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500" />
              </div>
            </div>

            <div class="bg-slate-800/70 border border-slate-700 p-4 rounded-2xl space-y-2 text-xs text-slate-300">
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>بیمار / گونه:</span>
                <strong class="text-white">${f.animalName} (${f.animalType})</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>دپارتمان و پزشک معالج:</span>
                <strong class="text-white">${currentProf?.name || 'متخصص کشیک دپارتمان'} - ${currentDept.name}</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>زمان مراجعه:</span>
                <strong class="text-emerald-400">${f.appointmentDate}</strong>
              </div>
              <div class="flex items-center justify-between pt-1 text-sm font-black">
                <span class="text-white">مبلغ قابل پرداخت:</span>
                <span class="text-emerald-400">${formatPrice(f.visitType === 'online' ? (currentProf?.onlineConsultFee || 250000) : (currentProf?.visitFee || 380000))}</span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button onclick="setBookingStep(3)" class="text-xs text-slate-400 hover:text-white">← بازگشت</button>
              <button onclick="proceedToPayment()" class="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2">
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

// مدال ورود و عضویت یکپارچه با ۳ نقش
function renderAuthModal() {
  if (!state.authModalOpen) return "";
  const f = state.authForm;
  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative text-right max-h-[90vh] overflow-y-auto custom-scrollbar">
        <button onclick="closeAuthModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-lg">✕</button>

        <h3 class="text-lg font-black text-white mb-2">
          ${f.mode === 'login' ? 'ورود به سامانه بیمارستان' : 'عضویت و ثبت‌نام در سامانه'}
        </h3>
        <p class="text-xs text-slate-400 mb-6">سامانه جامع خدمات درمانی، مراجعین و اعضای هیئت علمی</p>

        <!-- تب‌های ورود / ثبت‌نام -->
        <div class="flex rounded-xl bg-slate-800 p-1 mb-6">
          <button type="button" onclick="state.authForm.mode='login'; renderApp();" class="flex-1 py-2 text-xs font-bold rounded-lg ${f.mode === 'login' ? 'bg-emerald-600 text-white' : 'text-slate-400'}">
            ورود به حساب
          </button>
          <button type="button" onclick="state.authForm.mode='register'; renderApp();" class="flex-1 py-2 text-xs font-bold rounded-lg ${f.mode === 'register' ? 'bg-emerald-600 text-white' : 'text-slate-400'}">
            ثبت‌نام جدید
          </button>
        </div>

        <form onsubmit="handleUnifiedAuthSubmit(event)" class="space-y-4">
          ${f.mode === 'register' ? `
            <!-- انتخاب نقش کاربر در ثبت‌نام -->
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">نوع حساب و نقش شما در سامانه:</label>
              <div class="grid grid-cols-3 gap-2">
                <button type="button" onclick="state.authForm.role='client'; renderApp();" class="p-2.5 rounded-xl border text-center transition-all ${f.role === 'client' ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'}">
                  <div class="text-base mb-0.5">🐾</div>
                  <div class="text-[11px]">کاربر عادی</div>
                </button>
                <button type="button" onclick="state.authForm.role='doctor'; renderApp();" class="p-2.5 rounded-xl border text-center transition-all ${f.role === 'doctor' ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'}">
                  <div class="text-base mb-0.5">👨‍⚕️</div>
                  <div class="text-[11px]">پزشک / استاد</div>
                </button>
                <button type="button" onclick="state.authForm.role='phd'; renderApp();" class="p-2.5 rounded-xl border text-center transition-all ${f.role === 'phd' ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'}">
                  <div class="text-base mb-0.5">🎓</div>
                  <div class="text-[11px]">دانشجوی PhD</div>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی *</label>
              <input required type="text" placeholder="مثال: دکتر سارا مهدوی" value="${f.name}" oninput="state.authForm.name=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
            </div>

            ${f.role === 'doctor' || f.role === 'phd' ? `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-bold text-slate-300 mb-1.5">${f.role === 'doctor' ? 'شماره نظام دامپزشکی *' : 'شماره دانشجویی / نظام *'}</label>
                  <input required type="text" placeholder="18450" value="${f.medicalCouncilNo}" oninput="state.authForm.medicalCouncilNo=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-300 mb-1.5">دپارتمان تخصصی *</label>
                  <select onchange="state.authForm.departmentId=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl">
                    ${state.departments.map(d => `<option value="${d.id}" ${f.departmentId === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
                  </select>
                </div>
              </div>

              ${f.role === 'doctor' ? `
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">مرتبه علمی</label>
                    <select onchange="state.authForm.academicRank=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl">
                      ${['استاد تمام (پروفسور)', 'دانشیار', 'استادیار', 'رزیدنت ارشد تخصصی'].map(r => `<option value="${r}" ${f.academicRank === r ? 'selected' : ''}>${r}</option>`).join('')}
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">حیطه فوق‌تخصصی</label>
                    <input type="text" placeholder="جراحی ارتوپدی، سونوگرافی..." value="${f.subSpecialty}" oninput="state.authForm.subSpecialty=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>
              ` : ''}
            ` : ''}
          ` : ''}

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره همراه *</label>
            <input required type="tel" placeholder="0912xxxxxxx" value="${f.phone}" oninput="state.authForm.phone=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono focus:outline-none focus:border-emerald-500" />
          </div>

          <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl transition-all">
            ${f.mode === 'login' ? 'ورود به سامانه' : 'تکمیل ثبت‌نام و فعال‌سازی حساب'}
          </button>
        </form>
      </div>
    </div>
  `;
}

function renderDoctorModal() {
  if (!state.doctorModalOpen || !state.activeDoctorDetails) return "";
  const prof = state.activeDoctorDetails;
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

        <button onclick="closeDoctorDetails(); openBookingModal('${prof.id}');" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl transition-all text-center">
          رزرو نوبت با این استاد
        </button>
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
    <footer class="bg-[#070a10] border-t border-slate-800/80 py-12 text-right">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center p-1">
                <img src="/vet-hospital/faculty-logo.svg" alt="دانشکده دامپزشکی" class="w-full h-full object-contain" />
              </div>
              <div>
                <h4 class="font-black text-white text-base">بیمارستان تخصصی دانشکده دامپزشکی</h4>
                <p class="text-xs text-emerald-400">مرکز آموزشی و درمانی دانشگاه فردوسی مشهد</p>
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
              درگاه پرداخت: شبکه شاپرک زیپال
            </p>
          </div>
        </div>

        <div class="border-t border-slate-800/80 pt-6 text-center text-xs text-slate-500">
          تمامی حقوق متعلق به بیمارستان دانشکده دامپزشکی و جهش می‌باشد.
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
    </div>
  `;
}

async function initApp() {
  try {
    renderApp();
  } catch (err) {
    console.error("Initial render error:", err);
  }

  await handlePaymentReturn();

  try {
    const [depsRes, profsRes, apptsRes] = await Promise.all([
      fetch(`${API_BASE}/departments`),
      fetch(`${API_BASE}/professors`),
      fetch(`${API_BASE}/appointments`)
    ]);
    if (depsRes.ok) {
      const d = await depsRes.json();
      if (d.departments && d.departments.length) state.departments = d.departments;
    }
    if (profsRes.ok) {
      const p = await profsRes.json();
      if (p.professors) state.professors = p.professors;
    }
    if (apptsRes.ok) {
      const a = await apptsRes.json();
      if (a.appointments) state.appointments = a.appointments;
    }
    renderApp();
  } catch (e) {
    console.warn("Init fetch error:", e);
  }
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initApp());
  } else {
    initApp();
  }
}
