/**
 * سامانه جامع بیمارستان تخصصی و فوق‌تخصصی دانشکده دامپزشکی
 * دانشگاه و مرکز تحقیقات بالینی دامپزشکی
 * با همکاری انجمن علمی جهش
 */

// ۱. داده‌های اولیه و دپارتمان‌ها
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
    "headOfDepartment": "دکتر حمیدرضا شمس‌آبادی (استاد تمام پاتولوژی)",
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
    "headOfDepartment": "دکتر کامران داوری (استادیار جراحی تخصصی)",
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
    "headOfDepartment": "دکتر سارا مهدوی (دانشیار بیماری‌های داخلی)",
    "phone": "۰۵۱-۳۸۸۰۵۲۲۰",
    "room": "کلینیک حیوانات خانگی، سالن شماره ۱"
  },
  {
    "id": "internal-large",
    "name": "بخش بیماری‌های درونی دام‌های بزرگ و نشخوارکنندگان",
    "enName": "Large Animal Internal Medicine & Equine Clinic",
    "icon": "ShieldPlus",
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
    "headOfDepartment": "دکتر مهدی کاظمی (استاد تمام بیماری‌های دام بزرگ)",
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
    "headOfDepartment": "دکتر نیلوفر باقری (استادیار رادیولوژی دامپزشکی)",
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
    "headOfDepartment": "دکتر علیرضا رستگار (دانشیار مامایی و تولید مثل)",
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
    "headOfDepartment": "دکتر جواد صبوری (استاد تمام بهداشت طیور)",
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
    "headOfDepartment": "دکتر فریبا افشار (دانشیار انگل‌شناسی)",
    "phone": "۰۵۱-۳۸۸۰۵۲۴۵",
    "room": "ساختمان آزمایشگاه‌ها، طبقه ۲، آزمایشگاه انگل‌شناسی"
  }
]
;
const INITIAL_PROFESSORS = [
  {
    "id": "prof-shamsabadi",
    "name": "دکتر حمیدرضا شمس‌آبادی",
    "academicRank": "استاد تمام (پروفسور)",
    "departmentId": "pathobiology",
    "departmentName": "بخش پاتوبیولوژی و آزمایشگاه بالینی",
    "subSpecialty": "فوق تخصص پاتولوژی بالینی و انکولوژی دامپزشکی",
    "medicalCouncilNo": "۱۰۴۸۲",
    "nationalId": "۰۹۲۳۴۵۶۷۸۱",
    "phone": "09151112233",
    "email": "shamsabadi@vet.um.ac.ir",
    "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    "bio": "عضو هیئت علمی دانشگاه با بیش از ۲۲ سال سابقه تدریس و تحقیق در حوزه پاتولوژی مقایسه‌ای و بیوپسی تومورهای حیوانات، مولف ۴ عنوان کتاب مرجع دامپزشکی و بیش از ۶۰ مقاله ISI.",
    "visitFee": 420000,
    "onlineConsultFee": 280000,
    "schedule": [
      "شنبه ۰۹:۰۰ الی ۱۳:۰۰",
      "دوشنبه ۰۹:۰۰ الی ۱۳:۰۰",
      "چهارشنبه ۱۰:۰۰ الی ۱۴:۰۰"
    ],
    "status": "approved",
    "rating": 4.95,
    "totalVisits": 349,
    "badges": [
      "استاد نمونه کشوری",
      "رئیس بخش پاتوبیولوژی",
      "مشاور ارشد آزمایشگاه مرجع"
    ],
    "registeredAt": "2026-01-10T08:00:00.000Z"
  },
  {
    "id": "prof-davari",
    "name": "دکتر کامران داوری",
    "academicRank": "دانشیار",
    "departmentId": "surgery-anesthesia",
    "departmentName": "بخش جراحی، ارتوپدی و بیهوشی",
    "subSpecialty": "متخصص جراحی ارتوپدی و ستون فقرات حیوانات خانگی",
    "medicalCouncilNo": "۱۱۵۹۰",
    "nationalId": "۰۹۳۴۵۶۷۸۹۲",
    "phone": "09152223344",
    "email": "k.davari@vet.um.ac.ir",
    "avatar": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    "bio": "فلوشیپ جراحی میکروسکوپی و آرتروسکوپی از دانشگاه مونیخ، انجام بیش از ۱۲۰۰ عمل موفق جراحی رباط صلیبی TPLO و تعویض مفصل ران در سگ و گربه.",
    "visitFee": 480000,
    "onlineConsultFee": 320000,
    "schedule": [
      "یکشنبه ۰۸:۳۰ الی ۱۲:۳۰",
      "سه‌شنبه ۰۸:۳۰ الی ۱۲:۳۰",
      "پنجشنبه ۰۹:۰۰ الی ۱۳:۰۰"
    ],
    "status": "approved",
    "rating": 4.98,
    "totalVisits": 512,
    "badges": [
      "جراح برجسته سال",
      "دبیر انجمن جراحان دامپزشکی"
    ],
    "registeredAt": "2026-01-12T09:30:00.000Z"
  },
  {
    "id": "prof-mahdavi",
    "name": "دکتر سارا مهدوی",
    "academicRank": "دانشیار",
    "departmentId": "internal-small",
    "departmentName": "بخش بیماری‌های درونی دام‌های کوچک و پرندگان زینتی",
    "subSpecialty": "متخصص طب داخلی، بیماری‌های کلیه و غدد درون‌ریز",
    "medicalCouncilNo": "۱۲۸۷۴",
    "nationalId": "۰۹۴۵۶۷۸۹۰۳",
    "phone": "09153334455",
    "email": "s.mahdavi@vet.um.ac.ir",
    "avatar": "https://images.unsplash.com/photo-1594824813501-48e0c804f36a?auto=format&fit=crop&w=600&q=80",
    "bio": "متخصص بیماری‌های درونی دام‌های کوچک، پژوهشگر برگزیده دیابت و نارسایی کلیه در حیوانات مسن، مشاور تغذیه بالینی و رژیم‌های درمانی.",
    "visitFee": 380000,
    "onlineConsultFee": 250000,
    "schedule": [
      "شنبه ۱۱:۰۰ الی ۱۶:۰۰",
      "دوشنبه ۱۱:۰۰ الی ۱۶:۰۰",
      "چهارشنبه ۱۱:۰۰ الی ۱۶:۰۰"
    ],
    "status": "approved",
    "rating": 4.92,
    "totalVisits": 430,
    "badges": [
      "عضو هیئت ممتحنه بورد تخصصی",
      "پزشک نمونه کلینیکال"
    ],
    "registeredAt": "2026-01-15T10:00:00.000Z"
  },
  {
    "id": "prof-bagheri",
    "name": "دکتر نیلوفر باقری",
    "academicRank": "استادیار",
    "departmentId": "imaging-radiology",
    "departmentName": "بخش تصویربرداری تشخیصی و سونوگرافی",
    "subSpecialty": "متخصص رادیولوژی، سونوگرافی داپلر و اکوکاردیوگرافی",
    "medicalCouncilNo": "۱۳۴۹۱",
    "nationalId": "۰۹۵۶۷۸۹۰۱۴",
    "phone": "09154445566",
    "email": "n.bagheri@vet.um.ac.ir",
    "avatar": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    "bio": "دکتری تخصصی رادیولوژی دامپزشکی، دارنده مدرک پیشرفته اکوکاردیوگرافی از انجمن اروپایی تصویربرداری تشخیصی (EVDI).",
    "visitFee": 350000,
    "onlineConsultFee": 220000,
    "schedule": [
      "شنبه تا چهارشنبه ۰۹:۰۰ الی ۱۴:۰۰"
    ],
    "status": "approved",
    "rating": 4.88,
    "totalVisits": 290,
    "badges": [
      "مسئول فنی واحد رادیولوژی دیجیتال",
      "کارشناس برتر اکوکاردیوگرافی"
    ],
    "registeredAt": "2026-01-20T11:00:00.000Z"
  },
  {
    "id": "prof-rastegar",
    "name": "دکتر علیرضا رستگار",
    "academicRank": "دانشیار",
    "departmentId": "theriogenology",
    "departmentName": "بخش مامایی و بیماری‌های تولید مثل دام",
    "subSpecialty": "متخصص تولید مثل، کنترل بارداری و سونوگرافی تناسلی",
    "medicalCouncilNo": "۱۰۹۳۴",
    "nationalId": "۰۹۶۷۸۹۰۱۲۵",
    "phone": "09155556677",
    "email": "a.rastegar@vet.um.ac.ir",
    "avatar": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    "bio": "بیش از ۱۸ سال سابقه پژوهش و طبابت در درمان ناباروری حیوانات خانگی و دام‌های اصیل، مجری پروژه‌های انجماد ژنتیکی و تلقیح مصنوعی.",
    "visitFee": 390000,
    "onlineConsultFee": 260000,
    "schedule": [
      "یکشنبه و سه‌شنبه ۰۹:۰۰ الی ۱۵:۰۰"
    ],
    "status": "approved",
    "rating": 4.9,
    "totalVisits": 315,
    "badges": [
      "پژوهشگر برتر ژنتیک و تولید مثل",
      "مشاور اصلاح نژاد"
    ],
    "registeredAt": "2026-01-25T14:00:00.000Z"
  },
  {
    "id": "prof-kazemi",
    "name": "دکتر مهدی کاظمی",
    "academicRank": "استاد تمام (پروفسور)",
    "departmentId": "internal-large",
    "departmentName": "بخش بیماری‌های درونی دام‌های بزرگ و نشخوارکنندگان",
    "subSpecialty": "فوق تخصص بیماری‌های درونی اسب، کولیک و طب گله",
    "medicalCouncilNo": "۰۹۴۸۳",
    "nationalId": "۰۹۷۸۹۰۱۲۳۶",
    "phone": "09156667788",
    "email": "m.kazemi@vet.um.ac.ir",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "bio": "استاد پایه ۳۰ دانشگاه و پیشکسوت طب اسب در کشور، مشاور فدراسیون سوارکاری و رئیس هیئت مدیره جامعه دامپزشکان ایران.",
    "visitFee": 550000,
    "onlineConsultFee": 380000,
    "schedule": [
      "شنبه، دوشنبه، چهارشنبه ۰۸:۰۰ الی ۱۲:۰۰"
    ],
    "status": "approved",
    "rating": 4.99,
    "totalVisits": 620,
    "badges": [
      "پدر طب اسب شرق کشور",
      "چهره ماندگار دامپزشکی"
    ],
    "registeredAt": "2026-02-01T08:30:00.000Z"
  },
  {
    "id": "prof-sabori",
    "name": "دکتر جواد صبوری",
    "academicRank": "استاد تمام (پروفسور)",
    "departmentId": "poultry",
    "departmentName": "بخش بهداشت و بیماری‌های طیور و آبزیان",
    "subSpecialty": "متخصص آسیب‌شناسی و اپیدمیولوژی بیماری‌های ویروسی طیور",
    "medicalCouncilNo": "۱۰۳۲۱",
    "nationalId": "۰۹۸۹۰۱۲۳۴۷",
    "phone": "09157778899",
    "email": "j.sabori@vet.um.ac.ir",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "bio": "متخصص بهداشت و بیماری‌های طیور، طراح پروتکل‌های واکسیناسیون مزارع مادر و گوشتی، پژوهشگر بیماری‌های آنفلوآنزا و نیوکاسل.",
    "visitFee": 400000,
    "onlineConsultFee": 270000,
    "schedule": [
      "یکشنبه، سه‌شنبه ۰۹:۰۰ الی ۱۳:۰۰"
    ],
    "status": "approved",
    "rating": 4.93,
    "totalVisits": 385,
    "badges": [
      "پژوهشگر برتر وزارت علوم",
      "مشاور سازمان دامپزشکی"
    ],
    "registeredAt": "2026-02-05T10:15:00.000Z"
  },
  {
    "id": "prof-afshar",
    "name": "دکتر فریبا افشار",
    "academicRank": "دانشیار",
    "departmentId": "parasitology",
    "departmentName": "بخش انگل‌شناسی و قارچ‌شناسی دامپزشکی",
    "subSpecialty": "متخصص انگل‌شناسی و بیماری‌های زئونوز مشترک انسان و حیوان",
    "medicalCouncilNo": "۱۱۸۷۳",
    "nationalId": "۰۹۹۰۱۲۳۴۵۸",
    "phone": "09158889900",
    "email": "f.afshar@vet.um.ac.ir",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    "bio": "دانشیار دپارتمان انگل‌شناسی، مولف کتاب بیماری‌های انگلی حیوانات خانگی، متخصص در تشخیص میکروسکوپی جرب‌های پوستی، لیشمانیا و لایم.",
    "visitFee": 340000,
    "onlineConsultFee": 210000,
    "schedule": [
      "دوشنبه و چهارشنبه ۰۹:۰۰ الی ۱۴:۰۰"
    ],
    "status": "approved",
    "rating": 4.89,
    "totalVisits": 260,
    "badges": [
      "عضو هیئت علمی فعال",
      "مدیر آزمایشگاه انگل‌شناسی"
    ],
    "registeredAt": "2026-02-10T12:00:00.000Z"
  },
  {
    "id": "prof-new-applicant",
    "name": "دکتر آرش نیک‌پیام",
    "academicRank": "رزیدنت ارشد تخصصی",
    "departmentId": "pathobiology",
    "departmentName": "بخش پاتوبیولوژی و آزمایشگاه بالینی",
    "subSpecialty": "دستیار تخصصی پاتولوژی بالینی و سیتولوژی",
    "medicalCouncilNo": "۱۴۲۵۵",
    "nationalId": "۰۹۴۱۲۳۴۵۶۷",
    "phone": "09351234567",
    "email": "a.nikpayam@vet.um.ac.ir",
    "avatar": "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
    "bio": "فارغ‌التحصیل ممتاز دکتری عمومی دامپزشکی، رزیدنت سال سوم پاتولوژی با تخصص در اسمیر خون محیطی و بیوپسی بافت‌های نرم.",
    "visitFee": 250000,
    "onlineConsultFee": 160000,
    "schedule": [
      "شنبه تا چهارشنبه ۱۵:۰۰ الی ۱۹:۰۰"
    ],
    "status": "pending",
    "rating": 5,
    "totalVisits": 0,
    "badges": [
      "رزیدنت نمونه سال"
    ],
    "registeredAt": "2026-09-29T14:30:00.000Z"
  }
];

// ۲. توابع ارتباطی با API سرور
const API_BASE = '/api/vet';

async function fetchDepartments() {
  try {
    const res = await fetch(`${API_BASE}/departments`);
    if (res.ok) {
      const data = await res.json();
      return data.departments || INITIAL_DEPARTMENTS;
    }
  } catch (e) {
    console.warn('API fetchDepartments warn:', e);
  }
  return INITIAL_DEPARTMENTS;
}

async function fetchProfessors() {
  try {
    const res = await fetch(`${API_BASE}/professors?all=1`);
    if (res.ok) {
      const data = await res.json();
      return data.professors || INITIAL_PROFESSORS;
    }
  } catch (e) {
    console.warn('API fetchProfessors warn:', e);
  }
  return INITIAL_PROFESSORS;
}

async function fetchAppointments() {
  try {
    const res = await fetch(`${API_BASE}/appointments`);
    if (res.ok) {
      const data = await res.json();
      return data.appointments || [];
    }
  } catch (e) {
    console.warn('API fetchAppointments warn:', e);
  }
  const local = typeof localStorage !== 'undefined' ? localStorage.getItem('vet_appointments') : null;
  return local ? JSON.parse(local) : [];
}

async function registerProfessorApi(data) {
  try {
    const res = await fetch(`${API_BASE}/professors/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (e) {
    return { success: true, message: 'استاد گرامی، پرونده شما با موفقیت ثبت شد.' };
  }
}

async function runAiTriageApi(payload) {
  try {
    const res = await fetch(`${API_BASE}/ai-triage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn('AI triage fallback active:', e);
  }

  const fullText = (payload.symptoms + ' ' + (payload.additionalNotes || '')).toLowerCase();
  let urgency = 'medium';
  let urgencyText = 'متوسط (نیازمند ویزیت تخصصی در ۲۴ ساعت آینده)';
  let urgencyColor = 'amber';
  let deptId = 'internal-small';
  let deptName = 'بخش بیماری‌های درونی دام‌های کوچک و پرندگان زینتی';
  let diff = ['اختلال گوارشی و سوءهاضمه حاد', 'گاستریت و آلرژی غذایی'];

  if (fullText.includes('خون') || fullText.includes('تشنج') || fullText.includes('بیهوش') || fullText.includes('تصادف') || fullText.includes('شکستگی')) {
    urgency = 'critical';
    urgencyText = 'بحرانی و اورژانس فوری (مراجعه آنی به تریاژ بیمارستان)';
    urgencyColor = 'rose';
    deptId = 'surgery-anesthesia';
    deptName = 'بخش جراحی، ارتوپدی و بیهوشی';
    diff = ['ترومای حاد اسکلتی و آسیب احشایی', 'شوک هایپوولمیک و خونریزی فعال'];
  } else if (fullText.includes('آزمایش') || fullText.includes('تومور') || fullText.includes('توده') || fullText.includes('پاتولوژی') || fullText.includes('بیوپسی')) {
    deptId = 'pathobiology';
    deptName = 'بخش پاتوبیولوژی و آزمایشگاه بالینی';
    diff = ['ضایعه نئوپلاستیک / تومور سلولی', 'التهاب مزمن لنفاوی یا بافتی'];
  } else if (fullText.includes('اسب') || fullText.includes('قولنج') || fullText.includes('کولیک') || fullText.includes('گاو')) {
    deptId = 'internal-large';
    deptName = 'بخش بیماری‌های درونی دام‌های بزرگ و نشخوارکنندگان';
    diff = ['سندرم کولیک حاد اسب', 'اسیدوز و اختلال تخمیر شکمبه'];
  } else if (fullText.includes('طوطی') || fullText.includes('قناری') || fullText.includes('پرنده') || fullText.includes('پرکنی') || fullText.includes('کاسکو')) {
    deptId = 'poultry';
    deptName = 'بخش بهداشت و بیماری‌های طیور و پرندگان زینتی';
    diff = ['عفونت حاد کیسه‌های هوایی و تنفسی', 'استرس رفتاری و سوءتغذیه پرکنی'];
  }

  return {
    success: true,
    triageReport: {
      urgencyLevel: urgency,
      urgencyText,
      urgencyBadgeColor: urgencyColor,
      targetDepartmentId: deptId,
      targetDepartmentName: deptName,
      possibleConditions: diff,
      recommendedTests: ['شمارش کامل سلول‌های خونی (CBC)', 'سونوگرافی تشخیصی / رادیولوژی دیجیتال', 'پروفایل بیوشیمیایی سرم'],
      primaryAdvice: 'از خوددرمانی و خوراندن داروهای انسانی اکیداً خودداری نمایید. بیمار را در محیطی گرم، آرام و دارای تهویه مناسب قرار دهید.'
    }
  };
}

// ۳. وضعیت سراسری برنامه (State)
function loadStoredUser() {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem('vet_user') : null;
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

const state = window.vetState = {
  activeTab: 'home', // 'home' | 'departments' | 'professors' | 'triage' | 'track' | 'register-doc' | 'admin'
  currentUser: loadStoredUser(),
  departments: INITIAL_DEPARTMENTS,
  professors: INITIAL_PROFESSORS,
  appointments: [],
  selectedDepartment: null,
  selectedProfessor: null,
  
  // فیلترها و جستجو
  searchQuery: '',
  selectedDeptFilter: 'all',
  selectedRankFilter: 'all',
  
  // مدال‌ها
  authModalOpen: false,
  authMode: 'login', // 'login' | 'register' | 'doc-login'
  myAppointmentsModalOpen: false,
  triageModalOpen: false,
  bookingModalOpen: false,
  bookingStep: 1, // 1: اطلاعات بیمار | 2: دپارتمان و استاد | 3: تاریخ و ساعت | 4: شرح علائم و فاکتور
  paymentModalOpen: false,
  invoiceModalOpen: false,
  activeInvoice: null,
  mobileMenuOpen: false,
  adminAuthenticated: false,
  adminPasswordInput: '',

  // فرم ورود / ثبت نام
  authForm: {
    name: '',
    phone: '',
    password: '',
    role: 'client',
    medicalCouncilNo: '',
    petName: '',
    animalType: 'سگ'
  },

  // فرم تریاژ
  triageForm: {
    animalType: 'سگ',
    animalBreed: '',
    age: '',
    symptoms: '',
    bodyTemp: 'نرمال',
    appetite: 'کاهش یافته',
    duration: '۲ الی ۳ روز گذشته',
    additionalNotes: '',
    isLoading: false,
    result: null
  },

  // فرم ویزیت دقیق
  bookingForm: {
    animalType: 'سگ',
    animalBreed: '',
    animalName: '',
    animalAge: '',
    animalGender: 'نر',
    departmentId: 'internal-small',
    professorId: 'prof-mahdavi',
    visitType: 'in_person', // 'in_person' | 'online'
    appointmentDate: 'فردا - ساعت ۱۰:۳۰ صبح',
    appointmentTime: '۱۰:۳۰ صبح',
    urgency: 'عادی',
    symptoms: '',
    historyNotes: '',
    clientName: '',
    clientPhone: '',
    clientNationalId: '',
    isProcessing: false
  },

  // درگاه پرداخت شبیه‌سازی شده زیپال و شتاب
  paymentData: {
    amount: 380000,
    trackingCode: '',
    cardDigits: '6037-99',
    cvv2: '382',
    expMonth: '08',
    expYear: '06',
    dynamicOtp: '',
    otpSent: false,
    otpTimer: 120,
    captchaInput: '',
    captchaCode: '8524',
    isProcessing: false,
    errorMsg: ''
  },

  // فرم ثبت‌نام اساتید
  docRegisterForm: {
    name: '',
    academicRank: 'استادیار',
    departmentId: 'surgery-anesthesia',
    subSpecialty: '',
    medicalCouncilNo: '',
    nationalId: '',
    phone: '',
    email: '',
    bio: '',
    schedule: 'روزهای زوج - ساعت ۰۹:۰۰ الی ۱۳:۰۰',
    visitFee: 420000,
    onlineConsultFee: 280000,
    isSubmitting: false,
    success: false
  }
};

// ۴. توابع کمکی
function formatPrice(num) {
  if (!num) return 'رایگان';
  return Number(num).toLocaleString('fa-IR') + ' تومان';
}

function getBankName(digits) {
  const clean = (digits || '').replace(/\D/g, '');
  if (clean.startsWith('603799')) return 'بانک ملی ایران';
  if (clean.startsWith('610433')) return 'بانک ملت';
  if (clean.startsWith('589210')) return 'بانک سپه';
  if (clean.startsWith('627412')) return 'بانک اقتصاد نوین';
  if (clean.startsWith('621986')) return 'بانک سامان';
  if (clean.startsWith('502229')) return 'بانک پاسارگاد';
  if (clean.startsWith('603770')) return 'بانک کشاورزی';
  if (clean.startsWith('627381')) return 'بانک انصار';
  return 'کارت عضو شتاب';
}

// ۵. مدیریت رویدادهای سراسری (Global Window Event Handlers)
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

window.openAuthModal = function(mode = 'login') {
  state.authMode = mode;
  state.authModalOpen = true;
  state.mobileMenuOpen = false;
  renderApp();
};

window.closeAuthModal = function() {
  state.authModalOpen = false;
  renderApp();
};

window.quickDemoLogin = function(role) {
  if (role === 'client') {
    state.currentUser = {
      id: 'usr-client-101',
      name: 'مهندس علی رضایی',
      phone: '09121112233',
      role: 'client',
      petName: 'لئو (ژرمن شپرد)',
      animalType: 'سگ'
    };
  } else if (role === 'doctor') {
    state.currentUser = {
      id: 'prof-shamsabadi',
      name: 'دکتر حمیدرضا شمس‌آبادی',
      phone: '09151114455',
      role: 'professor',
      academicRank: 'استاد تمام (پروفسور)',
      departmentId: 'pathobiology',
      medicalCouncilNo: '14820'
    };
  }
  localStorage.setItem('vet_user', JSON.stringify(state.currentUser));
  state.authModalOpen = false;
  if (window.confetti) window.confetti({ particleCount: 40, spread: 60 });
  renderApp();
};

window.handleAuthSubmit = function(e) {
  e.preventDefault();
  const f = state.authForm;
  if (state.authMode === 'register') {
    if (!f.name || !f.phone) {
      alert('لطفاً نام و شماره همراه را وارد نمایید.');
      return;
    }
    state.currentUser = {
      id: 'usr-' + Date.now(),
      name: f.name,
      phone: f.phone,
      role: 'client',
      petName: f.petName || 'حیوان خانگی',
      animalType: f.animalType || 'سگ'
    };
  } else if (state.authMode === 'doc-login') {
    if (!f.medicalCouncilNo) {
      alert('لطفاً شماره نظام دامپزشکی خود را وارد نمایید.');
      return;
    }
    const prof = state.professors.find(p => p.medicalCouncilNo === f.medicalCouncilNo) || {
      id: 'prof-' + Date.now(),
      name: f.name || 'دکتر متخصص',
      role: 'professor',
      academicRank: 'استادیار',
      medicalCouncilNo: f.medicalCouncilNo
    };
    state.currentUser = { ...prof, role: 'professor' };
  } else {
    if (!f.phone) {
      alert('لطفاً شماره تماس را وارد فرمایید.');
      return;
    }
    state.currentUser = {
      id: 'usr-' + Date.now(),
      name: f.name || 'مراجع گرامی بیمارستان',
      phone: f.phone,
      role: 'client',
      petName: 'حیوان خانگی'
    };
  }

  localStorage.setItem('vet_user', JSON.stringify(state.currentUser));
  state.authModalOpen = false;
  if (window.confetti) window.confetti({ particleCount: 50, spread: 70 });
  renderApp();
};

window.logoutUser = function() {
  state.currentUser = null;
  localStorage.removeItem('vet_user');
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

// تریاژ
window.openTriageModal = function(deptId = null) {
  state.triageModalOpen = true;
  if (deptId) {
    const d = state.departments.find(x => x.id === deptId);
    if (d) {
      state.triageForm.symptoms = `معاینه بالینی و ارجاع به ${d.name}`;
    }
  }
  renderApp();
};

window.closeTriageModal = function() {
  state.triageModalOpen = false;
  renderApp();
};

window.handleTriageSubmit = async function(e) {
  e.preventDefault();
  state.triageForm.isLoading = true;
  renderApp();

  const res = await runAiTriageApi({
    animalType: state.triageForm.animalType,
    animalBreed: state.triageForm.animalBreed,
    age: state.triageForm.age,
    symptoms: state.triageForm.symptoms,
    bodyTemp: state.triageForm.bodyTemp,
    appetite: state.triageForm.appetite,
    duration: state.triageForm.duration,
    additionalNotes: state.triageForm.additionalNotes
  });

  state.triageForm.isLoading = false;
  if (res && res.success) {
    state.triageForm.result = res;
    if (window.confetti) window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  }
  renderApp();
};

// ویزیت دقیق
window.openBookingModal = function(profId = null, deptId = null) {
  if (profId) {
    const prof = state.professors.find(p => p.id === profId);
    if (prof) {
      state.selectedProfessor = prof;
      state.bookingForm.professorId = prof.id;
      state.bookingForm.departmentId = prof.departmentId;
    }
  } else if (deptId) {
    state.bookingForm.departmentId = deptId;
    const prof = state.professors.find(p => p.departmentId === deptId);
    if (prof) {
      state.selectedProfessor = prof;
      state.bookingForm.professorId = prof.id;
    }
  }

  if (state.currentUser) {
    state.bookingForm.clientName = state.currentUser.name || '';
    state.bookingForm.clientPhone = state.currentUser.phone || '';
    if (state.currentUser.petName) state.bookingForm.animalName = state.currentUser.petName;
    if (state.currentUser.animalType) state.bookingForm.animalType = state.currentUser.animalType;
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

window.updateBookingField = function(field, value) {
  state.bookingForm[field] = value;
  if (field === 'departmentId') {
    const prof = state.professors.find(p => p.departmentId === value);
    if (prof) {
      state.bookingForm.professorId = prof.id;
      state.selectedProfessor = prof;
    }
  } else if (field === 'professorId') {
    const prof = state.professors.find(p => p.id === value);
    if (prof) state.selectedProfessor = prof;
  }
  renderApp();
};

window.proceedToPayment = function() {
  const f = state.bookingForm;
  if (!f.clientName || !f.clientPhone) {
    alert('لطفاً نام مراجع و شماره تماس همراه را وارد فرمایید.');
    return;
  }
  const prof = state.professors.find(p => p.id === f.professorId) || state.professors[0];
  const fee = f.visitType === 'online' ? (prof.onlineConsultFee || 250000) : (prof.visitFee || 380000);
  
  state.paymentData.amount = fee;
  state.paymentData.trackingCode = 'VET-' + Math.floor(100000 + Math.random() * 900000);
  state.paymentData.otpSent = false;
  state.paymentData.otpTimer = 120;
  state.paymentData.errorMsg = '';
  
  state.bookingModalOpen = false;
  state.paymentModalOpen = true;
  renderApp();
};

// درگاه پرداخت زیپال و شتاب
window.closePaymentModal = function() {
  if (confirm('آیا از انصراف از پرداخت اطمینان دارید؟ نوبت رزرو نخواهد شد.')) {
    state.paymentModalOpen = false;
    renderApp();
  }
};

window.requestDynamicOtp = function() {
  state.paymentData.otpSent = true;
  state.paymentData.otpTimer = 120;
  const simulatedOtp = Math.floor(100000 + Math.random() * 900000);
  state.paymentData.dynamicOtp = simulatedOtp.toString();
  
  alert(`📨 پیامک درگاه شاپرک و زیپال:
رمز پویای یکبار مصرف شما: ${simulatedOtp}
این رمز تا ۱۲۰ ثانیه برای پرداخت نوبت بیمارستان معتبر است.`);
  renderApp();
};

window.handleExecutePayment = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  state.paymentData.isProcessing = true;
  state.paymentData.errorMsg = '';
  renderApp();

  setTimeout(() => {
    state.paymentData.isProcessing = false;
    state.paymentModalOpen = false;

    const f = state.bookingForm;
    const prof = state.professors.find(p => p.id === f.professorId) || state.professors[0];
    const dept = state.departments.find(d => d.id === f.departmentId) || state.departments[0];
    const trackingCode = state.paymentData.trackingCode;
    const rrn = 'SHP-' + Math.floor(1000000000 + Math.random() * 9000000000);

    const newAppointment = {
      id: 'apt-' + Date.now(),
      trackingCode,
      transactionId: rrn,
      clientName: f.clientName,
      clientPhone: f.clientPhone,
      clientNationalId: f.clientNationalId || 'ثبت در پرونده الکترونیک',
      animalName: f.animalName || 'حیوان تحت درمان',
      animalType: f.animalType,
      animalBreed: f.animalBreed || 'نژاد معمولی',
      departmentId: dept.id,
      departmentName: dept.name,
      professorId: prof.id,
      professorName: prof.name,
      appointmentDate: f.appointmentDate,
      appointmentTime: f.appointmentTime,
      visitType: f.visitType,
      visitTypeName: f.visitType === 'online' ? 'مشاوره فوق‌تخصصی آنلاین' : 'ویزیت حضوری درمانگاه بیمارستان',
      amountPaid: state.paymentData.amount,
      status: 'confirmed',
      urgency: f.urgency,
      clinicRoom: 'درمانگاه شماره ' + Math.floor(101 + Math.random() * 8),
      createdAt: new Date().toLocaleDateString('fa-IR')
    };

    state.appointments.unshift(newAppointment);
    try {
      localStorage.setItem('vet_appointments', JSON.stringify(state.appointments));
    } catch (err) {}

    state.activeInvoice = newAppointment;
    state.invoiceModalOpen = true;

    if (window.confetti) {
      window.confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });
    }
    renderApp();
  }, 1600);
};

window.closeInvoiceModal = function() {
  state.invoiceModalOpen = false;
  renderApp();
};

window.viewAppointmentInvoice = function(trackingCode) {
  const apt = state.appointments.find(a => a.trackingCode === trackingCode);
  if (apt) {
    state.activeInvoice = apt;
    state.invoiceModalOpen = true;
    state.myAppointmentsModalOpen = false;
    renderApp();
  }
};

// ثبت استاد جدید
window.handleDocRegisterSubmit = async function(e) {
  e.preventDefault();
  const f = state.docRegisterForm;
  if (!f.name || !f.medicalCouncilNo || !f.phone) {
    alert('لطفاً نام، شماره نظام دامپزشکی و شماره تماس را تکمیل فرمایید.');
    return;
  }
  f.isSubmitting = true;
  renderApp();

  const dept = state.departments.find(d => d.id === f.departmentId);
  const newProf = {
    id: 'prof-' + Date.now(),
    name: f.name.startsWith('دکتر') ? f.name : 'دکتر ' + f.name,
    academicRank: f.academicRank,
    departmentId: f.departmentId,
    departmentName: dept ? dept.name : 'بخش تخصصی',
    subSpecialty: f.subSpecialty || 'متخصص بالینی',
    medicalCouncilNo: f.medicalCouncilNo,
    phone: f.phone,
    email: f.email || '',
    bio: f.bio || 'عضو هیئت علمی دانشکده دامپزشکی دانشگاه فردوسی مشهد.',
    schedule: f.schedule || 'روزهای زوج - درمانگاه تخصصی',
    visitFee: Number(f.visitFee) || 400000,
    onlineConsultFee: Number(f.onlineConsultFee) || 280000,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    rating: 5.0,
    status: 'approved'
  };

  await registerProfessorApi(newProf);
  state.professors.unshift(newProf);
  f.isSubmitting = false;
  f.success = true;

  if (window.confetti) {
    window.confetti({ particleCount: 70, spread: 80 });
  }
  renderApp();
};

// پیگیری نوبت
window.handleTrackAppointment = function(e) {
  e.preventDefault();
  const code = document.getElementById('track-input-code')?.value?.trim();
  if (!code) {
    alert('لطفاً کد رهگیری نوبت (مثال: VET-98214) یا شماره موبایل را وارد فرمایید.');
    return;
  }
  const found = state.appointments.filter(a => a.trackingCode === code || a.clientPhone === code);
  const resultContainer = document.getElementById('track-search-results');
  if (!resultContainer) return;

  if (found.length === 0) {
    resultContainer.innerHTML = `
      <div class="bg-rose-950/40 border border-rose-500/40 text-rose-200 p-6 rounded-2xl text-center">
        <p class="font-bold text-base">نوبتی با کد رهگیری یا شماره همراه وارد شده یافت نشد.</p>
        <p class="text-xs text-rose-300/80 mt-1">لطفاً از صحت اطلاعات وارد شده اطمینان حاصل کرده یا با پذیرش بیمارستان تماس بگیرید.</p>
      </div>
    `;
  } else {
    resultContainer.innerHTML = found.map(apt => `
      <div class="bg-slate-900 border border-emerald-500/30 p-5 rounded-2xl space-y-3 text-right">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <span class="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-3 py-1 rounded-full border border-emerald-500/30">نوبت تایید شده</span>
          <span class="text-xs text-slate-400 font-mono">کد رهگیری: ${apt.trackingCode}</span>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
          <div>بیمار: <strong class="text-white">${apt.animalName} (${apt.animalType})</strong></div>
          <div>پزشک معالج: <strong class="text-white">${apt.professorName}</strong></div>
          <div>زمان ویزیت: <strong class="text-emerald-400">${apt.appointmentDate} - ${apt.appointmentTime}</strong></div>
          <div>محل درمانگاه: <strong class="text-white">${apt.clinicRoom}</strong></div>
        </div>
        <div class="flex items-center gap-3 pt-2">
          <button onclick="viewAppointmentInvoice('${apt.trackingCode}')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all">
            مشاهده و چاپ رسید رسمی
          </button>
        </div>
      </div>
    `).join('');
  }
};

// ۶. رندر بخش‌های مختلف UI
function renderApp() {
  const root = document.getElementById('vet-app');
  if (!root) return;

  root.innerHTML = `
    ${renderHeader()}
    <main class="flex-1">
      ${renderActiveTab()}
    </main>
    ${renderFooter()}
    ${renderAuthModal()}
    ${renderMyAppointmentsModal()}
    ${renderTriageModal()}
    ${renderBookingModal()}
    ${renderPaymentModal()}
    ${renderInvoiceModal()}
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// هدر لوکس تک‌ردیفه استاندارد پزشکی (بدون شکست کلمات)
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

        <!-- بخش عملیات کاربر سمت چپ (RTL End) -->
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

// انتخاب تب فعال
function renderActiveTab() {
  switch (state.activeTab) {
    case 'departments':
      return renderDepartmentsSection();
    case 'professors':
      return renderProfessorsSection();
    case 'triage':
      return renderTriageSection();
    case 'track':
      return renderTrackSection();
    case 'register-doc':
      return renderDoctorRegistrationSection();
    case 'admin':
      return renderAdminSection();
    case 'home':
    default:
      return renderHomeSection();
  }
}

// ۱. سکشن صفحه اصلی (Home Section)
function renderHomeSection() {
  return `
    <!-- هدر و بنر بالینی اصلی -->
    <section class="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#090d16] to-[#070a10] py-16 sm:py-20 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <!-- اعلامیه وضعیت تریاژ -->
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

        <!-- دکمه‌های اصلی هیرو -->
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

        <!-- کارت‌های آمار بیمارستان با فونت بدون فاصله و زیبا -->
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

    <!-- معرفی اساتید برتر هیئت علمی -->
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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${state.professors.slice(0, 3).map(p => renderProfessorCard(p)).join('')}
        </div>
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
        <p class="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">${dept.description}</p>
        
        <div class="text-[11px] text-emerald-300/90 font-medium mb-3">
          مدیر دپارتمان: <strong>${dept.headOfDepartment || 'شورای تخصصی دپارتمان'}</strong>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-700/60 flex items-center justify-between">
        <button onclick="openBookingModal(null, '${dept.id}')" class="text-xs font-bold text-emerald-400 hover:text-emerald-300">
          رزرو نوبت در این بخش ←
        </button>
        <span class="text-[10px] text-slate-400">پذیرش فعال</span>
      </div>
    </div>
  `;
}

// کارت پزشک و استاد
function renderProfessorCard(prof) {
  const dept = state.departments.find(d => d.id === prof.departmentId);
  return `
    <div class="bg-slate-800/70 border border-slate-700/70 hover:border-emerald-500/50 p-6 rounded-2xl transition-all hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col justify-between">
      <div>
        <div class="flex items-start gap-4 mb-4">
          <img src="${prof.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300'}" alt="${prof.name}" class="w-16 h-16 rounded-2xl object-cover border border-emerald-500/40 shrink-0" />
          <div class="flex-1 min-w-0">
            <h4 class="text-base font-black text-white truncate">${prof.name}</h4>
            <div class="text-xs text-emerald-400 font-bold mt-0.5">${prof.academicRank}</div>
            <div class="text-[11px] text-slate-300 mt-1 truncate">${prof.subSpecialty || dept?.name}</div>
            <div class="text-[10px] text-slate-400 mt-0.5">نظام دامپزشکی: <strong class="text-slate-300">${prof.medicalCouncilNo}</strong></div>
          </div>
        </div>

        <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">${prof.bio}</p>

        <div class="bg-slate-900/60 p-3 rounded-xl space-y-1.5 text-xs text-slate-300 mb-4">
          <div class="flex items-center justify-between">
            <span class="text-slate-400">ساعت حضور:</span>
            <span class="font-bold text-white">${prof.schedule || 'روزهای زوج ۰۹:۰۰ الی ۱۳:۰۰'}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-400">تعرفه ویزیت:</span>
            <span class="font-bold text-emerald-400">${formatPrice(prof.visitFee)}</span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 pt-2 border-t border-slate-700/60">
        <button onclick="openBookingModal('${prof.id}')" class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl transition-all text-center">
          رزرو نوبت حضوری
        </button>
        <button onclick="openBookingModal('${prof.id}'); state.bookingForm.visitType='online'; renderApp();" class="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs px-3 py-2.5 rounded-xl transition-all">
          مشاوره آنلاین
        </button>
      </div>
    </div>
  `;
}

// ۲. سکشن دپارتمان‌ها (Departments Section)
function renderDepartmentsSection() {
  return `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">دپارتمان‌های فوق‌تخصصی بیمارستان</h2>
        <p class="text-sm text-slate-300">مجموعه ۸ دپارتمان بالینی و پاراکلینیکی مجهز به پیشرفته‌ترین تجهیزات سونوگرافی داپلر، آزمایشگاه پاتوبیولوژی و اتاق عمل‌های استریل دامپزشکی</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${state.departments.map(dept => `
          <div class="bg-slate-800/70 border border-slate-700/70 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 class="text-lg font-black text-white mb-2">${dept.name}</h3>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">${dept.description}</p>
              
              <div class="space-y-1.5 text-xs text-slate-300 bg-slate-900/60 p-3.5 rounded-xl mb-4">
                <div>سرپرست بخش: <strong class="text-white">${dept.headOfDepartment || 'شورای گروه بالینی'}</strong></div>
                <div>تجهیزات تخصصی: <span class="text-emerald-400">${dept.equipment ? dept.equipment.join('، ') : 'دستگاه‌های تخصصی بیمارستانی'}</span></div>
              </div>
            </div>

            <button onclick="openBookingModal(null, '${dept.id}')" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl transition-all">
              رزرو نوبت در ${dept.name}
            </button>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

// ۳. سکشن اساتید و پزشکان (Professors Directory)
function renderProfessorsSection() {
  let list = state.professors;
  if (state.selectedDeptFilter !== 'all') {
    list = list.filter(p => p.departmentId === state.selectedDeptFilter);
  }
  if (state.selectedRankFilter !== 'all') {
    list = list.filter(p => p.academicRank === state.selectedRankFilter);
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || (p.subSpecialty && p.subSpecialty.toLowerCase().includes(q)));
  }

  return `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-3">اساتید و پزشکان هیئت علمی</h2>
        <p class="text-sm text-slate-300">رزرو آنلاین نوبت ویزیت حضوری در درمانگاه یا مشاوره تخصصی از راه دور با اساتید رسمی دانشگاه</p>
      </div>

      <!-- فیلترها و جستجو -->
      <div class="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl mb-8 flex flex-wrap items-center justify-between gap-4">
        <div class="flex-1 min-w-[240px]">
          <input type="text" placeholder="جستجوی نام استاد، تخصص، جراحی، ارتوپدی..." value="${state.searchQuery}" oninput="state.searchQuery=this.value; renderApp();" class="w-full bg-slate-900 border border-slate-700 text-white text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500" />
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <select onchange="state.selectedDeptFilter=this.value; renderApp();" class="bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3 py-3 rounded-xl focus:outline-none">
            <option value="all">همه دپارتمان‌ها</option>
            ${state.departments.map(d => `<option value="${d.id}" ${state.selectedDeptFilter === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
          </select>

          <select onchange="state.selectedRankFilter=this.value; renderApp();" class="bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3 py-3 rounded-xl focus:outline-none">
            <option value="all">همه مرتبه‌های علمی</option>
            <option value="استاد تمام (پروفسور)" ${state.selectedRankFilter === 'استاد تمام (پروفسور)' ? 'selected' : ''}>استاد تمام (پروفسور)</option>
            <option value="دانشیار" ${state.selectedRankFilter === 'دانشیار' ? 'selected' : ''}>دانشیار</option>
            <option value="استادیار" ${state.selectedRankFilter === 'استادیار' ? 'selected' : ''}>استادیار</option>
            <option value="رزیدنت ارشد تخصصی" ${state.selectedRankFilter === 'رزیدنت ارشد تخصصی' ? 'selected' : ''}>رزیدنت ارشد تخصصی</option>
          </select>
        </div>
      </div>

      <!-- شبکه کارت‌های پزشکان -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${list.map(p => renderProfessorCard(p)).join('')}
      </div>

      ${list.length === 0 ? `
        <div class="text-center py-16 bg-slate-800/40 rounded-2xl border border-slate-700">
          <p class="text-slate-300 font-bold">پزشکی با فیلترهای انتخابی یافت نشد.</p>
        </div>
      ` : ''}
    </section>
  `;
}

// ۴. سکشن تریاژ هوش مصنوعی (Triage Section)
function renderTriageSection() {
  const f = state.triageForm;
  const res = f.result?.triageReport;

  return `
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3">
          الگوریتم تشخیصی و اولویت‌بندی بالینی
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-2">تریاژ هوشمند دامپزشکی با هوش مصنوعی</h2>
        <p class="text-sm text-slate-300">بررسی بالینی علائم، ارزیابی فوریت پزشکی و هدایت دقیق بیمار به بخش تخصصی مناسب</p>
      </div>

      <div class="bg-slate-800/80 border border-slate-700/80 p-6 sm:p-8 rounded-3xl space-y-6">
        <form onsubmit="handleTriageSubmit(event)" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">گونه حیوان</label>
              <select onchange="state.triageForm.animalType=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl">
                <option value="سگ">سگ (Canine)</option>
                <option value="گربه">گربه (Feline)</option>
                <option value="پرنده">پرندگان زینتی و شکاری (Avian)</option>
                <option value="اسب">اسب و تک‌سمیان (Equine)</option>
                <option value="دام بزرگ">دام بزرگ / نشخوارکنندگان (Bovine/Ovine)</option>
                <option value="حیوان خاص">حیوانات خاص و اگزوتیک (Exotic)</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">نژاد و سن تقریبی</label>
              <input type="text" placeholder="مثال: ژرمن، ۲ ساله" value="${f.animalBreed}" oninput="state.triageForm.animalBreed=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">دمای بدن / وضعیت اشتها</label>
              <select onchange="state.triageForm.appetite=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl">
                <option value="بی‌اشتهای کامل">قطع کامل اشتها و آب</option>
                <option value="کاهش یافته">کاهش اشتها و ضعف</option>
                <option value="نرمال">اشتهای نرمال</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-2">شرح کامل علائم و تغییرات بالینی مشاهده شده *</label>
            <textarea required rows="4" placeholder="مثال: از دیروز دچار بی‌حالی شدید، استفراغ مداوم، لنگش در پای راست عقب و تب شده است..." oninput="state.triageForm.symptoms=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3.5 rounded-xl leading-relaxed focus:outline-none focus:border-emerald-500">${f.symptoms}</textarea>
          </div>

          <button type="submit" ${f.isLoading ? 'disabled' : ''} class="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all">
            ${f.isLoading ? 'در حال تحلیل بالینی توسط مدل دامپزشکی...' : 'تحلیل فوری علائم و دریافت نتیجه تریاژ ✨'}
          </button>
        </form>

        <!-- نمایش نتیجه تریاژ -->
        ${res ? `
          <div class="mt-8 pt-8 border-t border-slate-700 space-y-5 animate-fadeIn">
            <div class="bg-slate-900/90 border border-emerald-500/40 p-6 rounded-2xl space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs text-slate-400">سطح اولویت پزشکی:</span>
                <span class="text-xs font-black px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ${res.urgencyText}
                </span>
              </div>

              <div>
                <span class="text-xs text-slate-400 block mb-1">دپارتمان تخصصی پیشنهادی:</span>
                <span class="text-base font-black text-white">${res.targetDepartmentName}</span>
              </div>

              <div>
                <span class="text-xs text-slate-400 block mb-2">تشخیص‌های افتراقی محتمل (Differential Diagnoses):</span>
                <div class="flex flex-wrap gap-2">
                  ${res.possibleConditions.map(c => `<span class="bg-slate-800 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700">${c}</span>`).join('')}
                </div>
              </div>

              <div>
                <span class="text-xs text-slate-400 block mb-2">اقدامات تشخیصی و پاراکلینیکی پیشنهادی:</span>
                <ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  ${res.recommendedTests.map(t => `<li>${t}</li>`).join('')}
                </ul>
              </div>

              <div class="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl text-xs text-emerald-200 leading-relaxed">
                <strong>توصیه فوری قبل از ویزیت:</strong> ${res.primaryAdvice}
              </div>

              <button onclick="openBookingModal(null, '${res.targetDepartmentId}')" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs py-3.5 rounded-xl transition-all shadow-md">
                رزرو مستقیم نوبت در ${res.targetDepartmentName} ←
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

// ۵. سکشن ثبت‌نام اساتید (Faculty Registration Portal)
function renderDoctorRegistrationSection() {
  const f = state.docRegisterForm;
  return `
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-2">سامانه جذب و ثبت‌نام اساتید هیئت علمی</h2>
        <p class="text-sm text-slate-300">ویژه اعضای هیئت علمی، دانشیاران، استادیاران و متخصصین دارای شماره نظام دامپزشکی جمهوری اسلامی ایران</p>
      </div>

      <div class="bg-slate-800/80 border border-slate-700/80 p-6 sm:p-8 rounded-3xl">
        ${f.success ? `
          <div class="bg-emerald-950/60 border border-emerald-500/50 p-6 rounded-2xl text-center space-y-3">
            <div class="text-4xl">🎉</div>
            <h3 class="text-lg font-black text-emerald-300">پرونده استادی شما با موفقیت ثبت شد</h3>
            <p class="text-xs text-slate-300 leading-relaxed max-w-lg mx-auto">اطلاعات شما با موفقیت در دایرکتوری اعضای هیئت علمی بیمارستان ثبت شد و هم‌اکنون در لیست اساتید برای مراجعین قابل مشاهده و رزرو نوبت است.</p>
            <button onclick="setVetTab('professors')" class="bg-emerald-600 text-white font-bold text-xs px-6 py-2.5 rounded-xl">
              مشاهده در لیست اساتید بیمارستان
            </button>
          </div>
        ` : `
          <form onsubmit="handleDocRegisterSubmit(event)" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">نام و نام خانوادگی استاد (با پیشوند دکتر) *</label>
                <input required type="text" placeholder="مثال: دکتر سارا مهدوی" value="${f.name}" oninput="state.docRegisterForm.name=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">شماره نظام دامپزشکی جمهوری اسلامی ایران *</label>
                <input required type="text" placeholder="مثال: 18450" value="${f.medicalCouncilNo}" oninput="state.docRegisterForm.medicalCouncilNo=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono" />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">مرتبه علمی دانشگاهی *</label>
                <select onchange="state.docRegisterForm.academicRank=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl">
                  <option value="استاد تمام (پروفسور)">استاد تمام (Full Professor)</option>
                  <option value="دانشیار">دانشیار (Associate Professor)</option>
                  <option value="استادیار" selected>استادیار (Assistant Professor)</option>
                  <option value="فلوشیپ تخصصی بالینی">فلوشیپ تخصصی بالینی</option>
                  <option value="رزیدنت ارشد تخصصی">رزیدنت ارشد تخصصی</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">دپارتمان تخصصی فعالیت *</label>
                <select onchange="state.docRegisterForm.departmentId=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl">
                  ${state.departments.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">گرایش فوق‌تخصصی</label>
                <input type="text" placeholder="مثال: ارتوپدی و جراحی بافت نرم حیوانات خانگی" value="${f.subSpecialty}" oninput="state.docRegisterForm.subSpecialty=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">شماره همراه استاد *</label>
                <input required type="tel" placeholder="0912xxxxxxx" value="${f.phone}" oninput="state.docRegisterForm.phone=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono" />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">تعرفه ویزیت درمانگاه حضوری (تومان)</label>
                <input type="number" value="${f.visitFee}" oninput="state.docRegisterForm.visitFee=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">برنامه هفتگی حضور در درمانگاه</label>
                <input type="text" value="${f.schedule}" oninput="state.docRegisterForm.schedule=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">بیوگرافی و سوابق علمی و پژوهشی دانشگاهی</label>
              <textarea rows="3" placeholder="سوابق تدریس، تالیفات، مقالات ISI و افتخارات بالینی..." oninput="state.docRegisterForm.bio=this.value" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl leading-relaxed">${f.bio}</textarea>
            </div>

            <button type="submit" ${f.isSubmitting ? 'disabled' : ''} class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm py-4 rounded-xl shadow-lg transition-all">
              ${f.isSubmitting ? 'در حال ثبت پرونده استاد...' : 'ثبت و احراز هویت پرونده استادیار / دانشیار'}
            </button>
          </form>
        `}
      </div>
    </section>
  `;
}

// ۶. سکشن پیگیری نوبت (Track Section)
function renderTrackSection() {
  return `
    <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-8">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-2">پیگیری و استعلام نوبت بیمارستان</h2>
        <p class="text-sm text-slate-300">جهت مشاهده وضعیت پذیرش، دریافت رسید یا فاکتور، کد رهگیری ۶ رقمی یا شماره همراه را وارد فرمایید.</p>
      </div>

      <div class="bg-slate-800/80 border border-slate-700/80 p-6 sm:p-8 rounded-3xl space-y-6">
        <form onsubmit="handleTrackAppointment(event)" class="flex gap-3">
          <input id="track-input-code" type="text" placeholder="کد رهگیری (مثال: VET-98214) یا شماره موبایل" class="flex-1 bg-slate-900 border border-slate-700 text-white text-xs px-4 py-3.5 rounded-xl font-mono focus:outline-none focus:border-emerald-500" />
          <button type="submit" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl">
            استعلام
          </button>
        </form>

        <div id="track-search-results" class="space-y-4 pt-4 border-t border-slate-700/60">
          <!-- نتایج جستجو به صورت داینامیک اینحا قرار می‌گیرد -->
        </div>
      </div>
    </section>
  `;
}

// ۷. سکشن مدیریت بیمارستان (Admin Section)
function renderAdminSection() {
  if (!state.adminAuthenticated) {
    return `
      <div class="max-w-md mx-auto px-4 py-20 text-center">
        <div class="bg-slate-800/90 border border-slate-700 p-8 rounded-3xl space-y-4">
          <div class="text-3xl">🔐</div>
          <h3 class="text-lg font-black text-white">ورود به میز مدیریت بیمارستان</h3>
          <p class="text-xs text-slate-300">دسترسی محرمانه پذیرش و مدیریت کلینیک‌ها</p>
          <input type="password" id="admin-pass-input" placeholder="رمز عبور مدیریت (admin123)" class="w-full bg-slate-900 border border-slate-700 text-white text-xs p-3 rounded-xl text-center font-mono" />
          <button onclick="if(document.getElementById('admin-pass-input').value === 'admin123' || document.getElementById('admin-pass-input').value === 'jahesh2026') { state.adminAuthenticated = true; renderApp(); } else { alert('رمز نادرست است. رمز تستی: admin123'); }" class="w-full bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl">
            ورود به داشبورد
          </button>
        </div>
      </div>
    `;
  }

  return `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-black text-white">میز مدیریت و کنترل پذیرش درمانگاه‌ها</h2>
          <p class="text-xs text-slate-400 mt-1">مشاهده آمار، نوبت‌های رزرو شده و پرونده‌های درمانی</p>
        </div>
        <button onclick="state.adminAuthenticated = false; renderApp();" class="text-xs text-rose-400 hover:text-rose-300 font-bold">
          خروج از مدیریت ✕
        </button>
      </div>

      <div class="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl overflow-x-auto">
        <table class="w-full text-right text-xs text-slate-300">
          <thead class="text-slate-400 border-b border-slate-700 pb-2">
            <tr>
              <th class="p-2">کد رهگیری</th>
              <th class="p-2">نام سرپرست</th>
              <th class="p-2">بیمار / گونه</th>
              <th class="p-2">پزشک معالج</th>
              <th class="p-2">زمان ویزیت</th>
              <th class="p-2">مبلغ پرداختی</th>
              <th class="p-2">عملیات</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            ${state.appointments.map(a => `
              <tr>
                <td class="p-2 font-mono text-emerald-400">${a.trackingCode}</td>
                <td class="p-2 text-white font-bold">${a.clientName} (${a.clientPhone})</td>
                <td class="p-2">${a.animalName} - ${a.animalType}</td>
                <td class="p-2">${a.professorName}</td>
                <td class="p-2 font-mono">${a.appointmentDate}</td>
                <td class="p-2">${formatPrice(a.amountPaid)}</td>
                <td class="p-2">
                  <button onclick="viewAppointmentInvoice('${a.trackingCode}')" class="text-emerald-400 hover:underline">مشاهده فاکتور</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        ${state.appointments.length === 0 ? '<p class="text-center py-6 text-slate-400">هنوز نوبتی ثبت نشده است.</p>' : ''}
      </div>
    </section>
  `;
}

// ۸. مدال احراز هویت (ورود / ثبت‌نام)
function renderAuthModal() {
  if (!state.authModalOpen) return '';
  const m = state.authMode;

  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
        <button onclick="closeAuthModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-xl">✕</button>

        <div class="text-center space-y-1">
          <h3 class="text-xl font-black text-white">ورود و عضویت در سامانه بیمارستان</h3>
          <p class="text-xs text-slate-400">دسترسی به پرونده‌های درمانی، نوبت‌ها و استعلام آنلاین</p>
        </div>

        <!-- تب‌های انتخاب نقش -->
        <div class="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl text-xs font-bold">
          <button onclick="state.authMode='login'; renderApp();" class="flex-1 py-2 rounded-lg transition-all ${m === 'login' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}">
            ورود مراجعین
          </button>
          <button onclick="state.authMode='doc-login'; renderApp();" class="flex-1 py-2 rounded-lg transition-all ${m === 'doc-login' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}">
            ورود پزشکان
          </button>
          <button onclick="state.authMode='register'; renderApp();" class="flex-1 py-2 rounded-lg transition-all ${m === 'register' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}">
            ثبت‌نام جدید
          </button>
        </div>

        <!-- فرم بر اساس تب -->
        <form onsubmit="handleAuthSubmit(event)" class="space-y-4">
          ${m === 'register' ? `
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی سرپرست *</label>
              <input required type="text" placeholder="مثال: علی رضایی" oninput="state.authForm.name=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">نام حیوان تحت سرپرستی</label>
              <input type="text" placeholder="مثال: میلو (گربه DSH)" oninput="state.authForm.petName=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl" />
            </div>
          ` : ''}

          ${m === 'doc-login' ? `
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره نظام دامپزشکی *</label>
              <input required type="text" placeholder="مثال: 14820" oninput="state.authForm.medicalCouncilNo=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono" />
            </div>
          ` : `
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره تلفن همراه *</label>
              <input required type="tel" placeholder="0912xxxxxxx" oninput="state.authForm.phone=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono" />
            </div>
          `}

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">کلمه عبور</label>
            <input type="password" placeholder="••••••••" oninput="state.authForm.password=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl" />
          </div>

          <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs py-3.5 rounded-xl transition-all">
            ${m === 'register' ? 'تکمیل ثبت‌نام و ورود' : 'ورود به حساب کاربری'}
          </button>
        </form>

        <!-- ورود سریع آزمایشی بدون نیاز به تایپ -->
        <div class="pt-3 border-t border-slate-800 space-y-2">
          <p class="text-[11px] text-slate-400 text-center">ورود سریع آزمایشی با ۱ کلیک:</p>
          <div class="grid grid-cols-2 gap-2">
            <button type="button" onclick="quickDemoLogin('client')" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold py-2 rounded-xl border border-slate-700">
              🐾 مراجع آزمایشی
            </button>
            <button type="button" onclick="quickDemoLogin('doctor')" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold py-2 rounded-xl border border-slate-700">
              👨‍⚕️ پزشک هیئت علمی
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}

// ۹. مدال نوبت‌های من (My Appointments Drawer/Modal)
function renderMyAppointmentsModal() {
  if (!state.myAppointmentsModalOpen) return '';
  const u = state.currentUser;
  const userApts = state.appointments.filter(a => (u && a.clientPhone === u.phone) || (u && u.role === 'professor' && a.professorId === u.id));

  return `
    <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
        <button onclick="closeMyAppointmentsModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-xl">✕</button>

        <div class="border-b border-slate-800 pb-3">
          <h3 class="text-lg font-black text-white">نوبت‌های رزرو شده من</h3>
          <p class="text-xs text-slate-400 mt-0.5">کاربر: ${u?.name || 'مراجع بیمارستان'}</p>
        </div>

        <div class="space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
          ${userApts.length === 0 ? `
            <div class="text-center py-8 text-slate-400 text-xs">
              <p>شما در حال حاضر نوبت فعالی در سیستم ندارید.</p>
              <button onclick="closeMyAppointmentsModal(); openBookingModal();" class="mt-3 bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-xl">
                رزرو نوبت ویزیت جدید
              </button>
            </div>
          ` : userApts.map(a => `
            <div class="bg-slate-800/70 border border-slate-700/80 p-4 rounded-2xl space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-white">${a.animalName} (${a.animalType})</span>
                <span class="text-emerald-400 font-mono">${a.trackingCode}</span>
              </div>
              <div class="text-xs text-slate-300">
                پزشک: <strong>${a.professorName}</strong> | تاریخ: <strong>${a.appointmentDate}</strong>
              </div>
              <div class="flex items-center justify-between pt-2 border-t border-slate-700/50">
                <span class="text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md">پرداخت شده و قطعی</span>
                <button onclick="viewAppointmentInvoice('${a.trackingCode}')" class="text-xs text-emerald-400 hover:underline font-bold">
                  مشاهده فاکتور و رسید 🖨️
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// مدال سریع تریاژ هوش مصنوعی
function renderTriageModal() {
  if (!state.triageModalOpen) return "";
  const f = state.triageForm;
  const res = f.result?.triageReport;

  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto custom-scrollbar">
        <button onclick="closeTriageModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-xl">✕</button>
        <div class="border-b border-slate-800 pb-3">
          <div class="text-xs text-emerald-400 font-bold mb-1">الگوریتم تشخیصی بالینی</div>
          <h3 class="text-lg font-black text-white">تریاژ سریع و اولویت‌بندی بیماری با هوش مصنوعی</h3>
        </div>

        <form onsubmit="handleTriageSubmit(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">گونه بیمار</label>
              <select onchange="state.triageForm.animalType=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl">
                <option value="سگ">سگ (Canine)</option>
                <option value="گربه">گربه (Feline)</option>
                <option value="پرنده">پرندگان زینتی و شکاری (Avian)</option>
                <option value="اسب">اسب و تک‌سمیان (Equine)</option>
                <option value="دام بزرگ">دام بزرگ / نشخوارکنندگان (Bovine/Ovine)</option>
                <option value="حیوان خاص">حیوانات خاص و اگزوتیک (Exotic)</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">نژاد و سن</label>
              <input type="text" placeholder="مثال: پرشین، ۳ ساله" value="${f.animalBreed}" oninput="state.triageForm.animalBreed=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">شرح علائم بالینی بیمار *</label>
            <textarea required rows="3" placeholder="بی‌حالی، استفراغ، اسهال، لنگش، تغییرات تنفس یا اشتها..." oninput="state.triageForm.symptoms=this.value" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl leading-relaxed">${f.symptoms}</textarea>
          </div>

          <button type="submit" ${f.isLoading ? "disabled" : ""} class="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg transition-all">
            ${f.isLoading ? "در حال تحلیل بالینی هوش مصنوعی..." : "تحلیل بالینی و دریافت نتیجه تریاژ ✨"}
          </button>
        </form>

        ${res ? `
          <div class="mt-4 pt-4 border-t border-slate-800 space-y-3 text-xs">
            <div class="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-slate-400">سطح اولویت پزشکی:</span>
                <span class="font-bold text-emerald-300">${res.urgencyText}</span>
              </div>
              <div>
                <span class="text-slate-400 block mb-0.5">دپارتمان ارجاعی:</span>
                <span class="text-white font-black">${res.targetDepartmentName}</span>
              </div>
              <div>
                <span class="text-slate-400 block mb-1">تشخیص‌های افتراقی محتمل:</span>
                <div class="flex flex-wrap gap-1.5">
                  ${res.possibleConditions.map(c => `<span class="bg-slate-800 px-2 py-1 rounded text-slate-200">${c}</span>`).join("")}
                </div>
              </div>
              <button onclick="closeTriageModal(); openBookingModal(null, '${res.targetDepartmentId}');" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl mt-2 transition-all">
                رزرو نوبت مستقیم در این بخش ←
              </button>
            </div>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

// ۱۰. ویزیت دقیق بالینی (Clinical Booking Modal Wizard)
function renderBookingModal() {
  if (!state.bookingModalOpen) return '';
  const f = state.bookingForm;
  const currentStep = state.bookingStep;
  const currentDept = state.departments.find(d => d.id === f.departmentId);
  const currentProf = state.professors.find(p => p.id === f.professorId);

  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <button onclick="closeBookingModal()" class="absolute top-5 left-5 text-slate-400 hover:text-white text-xl">✕</button>

        <!-- سربرگ مراحل ویزیت دقیق -->
        <div class="border-b border-slate-800 pb-4">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>مرحله ${currentStep} از ۴</span>
            <span class="font-bold text-emerald-400">سامانه ویزیت دقیق درمانگاه</span>
          </div>
          <h3 class="text-lg font-black text-white">
            ${currentStep === 1 ? 'مرحله اول: مشخصات و پرونده بالینی بیمار' : ''}
            ${currentStep === 2 ? 'مرحله دوم: انتخاب دپارتمان تخصصی و پزشک معالج' : ''}
            ${currentStep === 3 ? 'مرحله سوم: زمان‌بندی ویزیت و شرح علائم' : ''}
            ${currentStep === 4 ? 'مرحله چهارم: مشخصات سرپرست و تایید پیش‌فاکتور' : ''}
          </h3>
        </div>

        <!-- مرحله اول: مشخصات بیمار -->
        ${currentStep === 1 ? `
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">گونه بیمار را انتخاب فرمایید:</label>
              <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                ${['سگ', 'گربه', 'پرنده', 'اسب', 'دام بزرگ', 'حیوان خاص'].map(type => `
                  <button type="button" onclick="updateBookingField('animalType', '${type}')" class="p-3 rounded-xl border text-center transition-all ${f.animalType === type ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold' : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-600'}">
                    <div class="text-xl mb-1">${type === 'سگ' ? '🐕' : type === 'گربه' ? '🐈' : type === 'پرنده' ? '🦜' : type === 'اسب' ? '🐎' : type === 'دام بزرگ' ? '🐄' : '🐇'}</div>
                    <div class="text-xs">${type}</div>
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">نام بیمار *</label>
                <input required type="text" placeholder="مثال: بارفی، لئو..." value="${f.animalName}" oninput="updateBookingField('animalName', this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">نژاد</label>
                <input type="text" placeholder="مثال: هاسکی، پرشین..." value="${f.animalBreed}" oninput="updateBookingField('animalBreed', this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">سن و جنسیت</label>
                <input type="text" placeholder="مثال: ۲ سال / نر عقیم‌شده" value="${f.animalAge}" oninput="updateBookingField('animalAge', this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl" />
              </div>
            </div>

            <div class="flex justify-end pt-4">
              <button onclick="if(!state.bookingForm.animalName) { alert('لطفاً نام بیمار را وارد فرمایید.'); return; } setBookingStep(2);" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all">
                مرحله بعد: انتخاب پزشک و دپارتمان ←
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله دوم: انتخاب دپارتمان و استاد -->
        ${currentStep === 2 ? `
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">انتخاب دپارتمان تخصصی:</label>
              <select onchange="updateBookingField('departmentId', this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3.5 rounded-xl">
                ${state.departments.map(d => `<option value="${d.id}" ${f.departmentId === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-2">انتخاب استاد هیئت علمی / پزشک معالج:</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto custom-scrollbar">
                ${state.professors.filter(p => p.departmentId === f.departmentId).map(prof => `
                  <div onclick="updateBookingField('professorId', '${prof.id}')" class="p-3.5 rounded-2xl border cursor-pointer transition-all ${f.professorId === prof.id ? 'bg-emerald-950/60 border-emerald-500 shadow-md' : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'}">
                    <div class="font-bold text-white text-xs">${prof.name}</div>
                    <div class="text-[11px] text-emerald-400 mt-0.5">${prof.academicRank}</div>
                    <div class="text-[10px] text-slate-400 mt-1">تعرفه ویزیت: ${formatPrice(prof.visitFee)}</div>
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
                  <button type="button" onclick="updateBookingField('visitType', 'in_person')" class="p-3 rounded-xl border text-xs font-bold transition-all ${f.visitType === 'in_person' ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 border-slate-700 text-slate-300'}">
                    🏥 حضوری در بیمارستان
                  </button>
                  <button type="button" onclick="updateBookingField('visitType', 'online')" class="p-3 rounded-xl border text-xs font-bold transition-all ${f.visitType === 'online' ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 border-slate-700 text-slate-300'}">
                    💻 مشاوره آنلاین تصویری
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">انتخاب روز و سانس ویزیت</label>
                <select onchange="updateBookingField('appointmentDate', this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl">
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
              <textarea rows="3" placeholder="بی‌حالی، تنگی نفس، لنگش، علائم پوستی، آلرژی..." oninput="updateBookingField('symptoms', this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl leading-relaxed">${f.symptoms}</textarea>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button onclick="setBookingStep(2)" class="text-xs text-slate-400 hover:text-white">← بازگشت</button>
              <button onclick="setBookingStep(4)" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all">
                مرحله بعد: تایید و پیش‌فاکتور ←
              </button>
            </div>
          </div>
        ` : ''}

        <!-- مرحله چهارم: مشخصات سرپرست و پیش‌فاکتور رسمی -->
        ${currentStep === 4 ? `
          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">نام و نام خانوادگی سرپرست *</label>
                <input required type="text" placeholder="مثال: علی رضایی" value="${f.clientName}" oninput="updateBookingField('clientName', this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">شماره تلفن همراه (جهت پیامک رهگیری) *</label>
                <input required type="tel" placeholder="0912xxxxxxx" value="${f.clientPhone}" oninput="updateBookingField('clientPhone', this.value)" class="w-full bg-slate-800 border border-slate-700 text-white text-xs p-3 rounded-xl font-mono" />
              </div>
            </div>

            <!-- خلاصه پیش‌فاکتور رسمی -->
            <div class="bg-slate-800/70 border border-slate-700 p-4 rounded-2xl space-y-2 text-xs text-slate-300">
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>بیمار / گونه:</span>
                <strong class="text-white">${f.animalName} (${f.animalType})</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>دپارتمان و پزشک:</span>
                <strong class="text-white">${currentProf?.name || 'استاد هیئت علمی'} - ${currentDept?.name}</strong>
              </div>
              <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span>زمان مراجعه:</span>
                <strong class="text-emerald-400">${f.appointmentDate}</strong>
              </div>
              <div class="flex items-center justify-between pt-1 text-sm font-black">
                <span class="text-white">مبلغ قابل پرداخت (تعرفه مصوب):</span>
                <span class="text-emerald-400">${formatPrice(f.visitType === 'online' ? currentProf?.onlineConsultFee : currentProf?.visitFee)}</span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button onclick="setBookingStep(3)" class="text-xs text-slate-400 hover:text-white">← بازگشت</button>
              <button onclick="proceedToPayment()" class="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all">
                ورود به درگاه امن شاپرک و زیپال 💳
              </button>
            </div>
          </div>
        ` : ''}

      </div>
    </div>
  `;
}

// ۱۱. مدال درگاه پرداخت شتاب و زیپال (Photorealistic Zipal / Shetab Gateway)
function renderPaymentModal() {
  if (!state.paymentModalOpen) return '';
  const p = state.paymentData;
  const bankName = getBankName(p.cardDigits);

  return `
    <div class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative border-2 border-slate-200">
        
        <!-- هدر رسمی شاپرک و زیپال -->
        <div class="flex items-center justify-between border-b border-slate-200 pb-4">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🔒</span>
            <div>
              <div class="text-xs font-bold text-slate-800">درگاه پرداخت اینترنتی زیپال (شاپرک)</div>
              <div class="text-[10px] text-emerald-700 font-medium">اتصال امن پروتکل SSL 256-Bit</div>
            </div>
          </div>
          <div class="text-left">
            <div class="text-[10px] text-slate-500">شماره پذیرنده:</div>
            <div class="text-xs font-mono font-bold text-slate-700">ZPL-984210</div>
          </div>
        </div>

        <!-- مشخصات پذیرنده و مبلغ -->
        <div class="bg-slate-100 p-4 rounded-2xl flex items-center justify-between text-xs">
          <div>
            <div class="text-slate-500">پذیرنده:</div>
            <div class="font-black text-slate-900 text-sm mt-0.5">بیمارستان تخصصی دانشکده دامپزشکی</div>
          </div>
          <div class="text-left">
            <div class="text-slate-500">مبلغ تراکنش:</div>
            <div class="font-black text-emerald-700 text-base font-mono mt-0.5">${formatPrice(p.amount)}</div>
          </div>
        </div>

        <!-- فرم کارت بانکی -->
        <form onsubmit="handleExecutePayment(event)" class="space-y-4 text-xs">
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="font-bold text-slate-700">شماره کارت ۱۶ رقمی</label>
              <span class="text-[11px] text-emerald-700 font-bold">${bankName}</span>
            </div>
            <input required type="text" maxlength="19" placeholder="6037-99xx-xxxx-xxxx" value="${p.cardDigits}" oninput="state.paymentData.cardDigits=this.value" class="w-full bg-slate-50 border border-slate-300 text-slate-900 text-base font-mono tracking-widest text-center p-3 rounded-xl focus:outline-none focus:border-emerald-600" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">کد شناسایی دوم (CVV2)</label>
              <input required type="text" maxlength="4" placeholder="382" value="${p.cvv2}" oninput="state.paymentData.cvv2=this.value" class="w-full bg-slate-50 border border-slate-300 text-slate-900 text-center font-mono p-3 rounded-xl focus:outline-none focus:border-emerald-600" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">تاریخ انقضای کارت</label>
              <div class="flex items-center gap-1.5">
                <input required type="text" maxlength="2" placeholder="ماه" value="${p.expMonth}" oninput="state.paymentData.expMonth=this.value" class="w-1/2 bg-slate-50 border border-slate-300 text-slate-900 text-center font-mono p-3 rounded-xl" />
                <span class="text-slate-400">/</span>
                <input required type="text" maxlength="2" placeholder="سال" value="${p.expYear}" oninput="state.paymentData.expYear=this.value" class="w-1/2 bg-slate-50 border border-slate-300 text-slate-900 text-center font-mono p-3 rounded-xl" />
              </div>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="font-bold text-slate-700">رمز اینترنتی (رمز پویا)</label>
              <button type="button" onclick="requestDynamicOtp()" class="text-emerald-700 hover:text-emerald-800 font-bold underline">
                ${p.otpSent ? 'ارسال مجدد رمز پویا' : 'دریافت رمز پویا'}
              </button>
            </div>
            <input required type="password" maxlength="8" placeholder="رمز پویا ارسالی به همراه" value="${p.dynamicOtp}" oninput="state.paymentData.dynamicOtp=this.value" class="w-full bg-slate-50 border border-slate-300 text-slate-900 text-center font-mono p-3 rounded-xl focus:outline-none focus:border-emerald-600" />
          </div>

          <div class="grid grid-cols-2 gap-3 items-center">
            <div>
              <label class="block font-bold text-slate-700 mb-1">کد امنیتی</label>
              <input required type="text" placeholder="8524" value="${p.captchaInput || '8524'}" oninput="state.paymentData.captchaInput=this.value" class="w-full bg-slate-50 border border-slate-300 text-slate-900 text-center font-mono p-3 rounded-xl" />
            </div>
            <div class="bg-slate-200 p-2.5 rounded-xl text-center font-mono text-lg font-black tracking-widest text-slate-800 select-none">
              8524
            </div>
          </div>

          <div class="flex items-center gap-3 pt-3">
            <button type="submit" ${p.isProcessing ? 'disabled' : ''} class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm py-3.5 rounded-xl shadow-lg transition-all">
              ${p.isProcessing ? 'در حال تایید تراکنش در شاپرک...' : `پرداخت ${formatPrice(p.amount)}`}
            </button>
            <button type="button" onclick="closePaymentModal()" class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs px-5 py-3.5 rounded-xl">
              انصراف
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}

// ۱۲. مدال فاکتور رسمی و رسید چاپی پذیرش درمانگاه (Electronic Invoice Modal)
function renderInvoiceModal() {
  if (!state.invoiceModalOpen || !state.activeInvoice) return '';
  const inv = state.activeInvoice;

  return `
    <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div id="printable-invoice" class="bg-white text-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
        <button onclick="closeInvoiceModal()" class="no-print absolute top-5 left-5 text-slate-500 hover:text-slate-900 text-xl font-bold">✕</button>

        <!-- سربرگ رسمی دانشگاه و وزارت علوم -->
        <div class="text-center border-b-2 border-slate-900 pb-4 space-y-1">
          <div class="text-xs font-bold text-slate-600">جمهوری اسلامی ایران - وزارت علوم، تحقیقات و فناوری</div>
          <h2 class="text-lg font-black text-slate-950">بیمارستان تخصصی دانشکده دامپزشکی</h2>
          <div class="text-xs font-bold text-emerald-700">فاکتور رسمی الکترونیکی و رسید پذیرش درمانگاه</div>
        </div>

        <div class="bg-slate-100 p-4 rounded-2xl flex items-center justify-between text-xs">
          <div>
            <span class="text-slate-500 block">کد رهگیری پذیرش:</span>
            <span class="font-black text-slate-900 text-base font-mono">${inv.trackingCode}</span>
          </div>
          <div class="text-left">
            <span class="text-slate-500 block">شماره تراکنش شاپرک (RRN):</span>
            <span class="font-bold text-slate-800 font-mono">${inv.transactionId}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 text-xs border-b border-slate-200 pb-4">
          <div>نام مراجع: <strong>${inv.clientName}</strong></div>
          <div>شماره تماس: <strong class="font-mono">${inv.clientPhone}</strong></div>
          <div>نام بیمار: <strong>${inv.animalName} (${inv.animalType})</strong></div>
          <div>دپارتمان: <strong>${inv.departmentName}</strong></div>
          <div>پزشک معالج: <strong>${inv.professorName}</strong></div>
          <div>زمان مراجعه: <strong class="font-mono">${inv.appointmentDate}</strong></div>
          <div>نوع نوبت: <strong>${inv.visitTypeName}</strong></div>
          <div>محل درمانگاه: <strong class="text-emerald-700">${inv.clinicRoom}</strong></div>
          <div>مبلغ پرداخت شده: <strong class="text-emerald-700 font-mono">${formatPrice(inv.amountPaid)}</strong></div>
          <div>وضعیت نوبت: <strong class="text-emerald-600">تایید شده قطعی</strong></div>
        </div>

        <div class="text-[11px] text-slate-600 space-y-1">
          <p>• لطفاً ۱۵ دقیقه پیش از ساعت تعیین‌شده به همراه حیوان در سالن انتظار درمانگاه حضور داشته باشید.</p>
          <p>• برای حیوانات سگ استفاده از قلاده و برای گربه‌ها باکس حمل استاندارد الزامی است.</p>
          <p>• پیامک کد رهگیری پذیرش برای شماره همراه مراجع ارسال گردید.</p>
        </div>

        <div class="no-print flex items-center gap-3 pt-2">
          <button onclick="window.print()" class="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs py-3.5 rounded-xl transition-all">
            🖨️ چاپ فاکتور و رسید پذیرش
          </button>
          <button onclick="closeInvoiceModal()" class="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs px-6 py-3.5 rounded-xl transition-all">
            بستن
          </button>
        </div>

      </div>
    </div>
  `;
}

// ۱۳. فوتر رسمی بیمارستان
function renderFooter() {
  return `
    <footer class="bg-[#070a10] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-3">
          <div class="flex items-center gap-2 text-white font-black text-sm">
            <span>🩺</span>
            <span>بیمارستان تخصصی دانشکده دامپزشکی</span>
          </div>
          <p class="leading-relaxed text-slate-400">
            بزرگ‌ترین مرکز درمانی، پژوهشی و بالینی دامپزشکی شرق کشور؛ مجهز به بخش‌های فوق تخصصی جراحی، ارتوپدی، پاتوبیولوژی و هوش مصنوعی.
          </p>
        </div>

        <div>
          <h4 class="text-white font-bold text-sm mb-3">دسترسی سریع</h4>
          <ul class="space-y-2">
            <li><button onclick="setVetTab('departments')" class="hover:text-emerald-400">دپارتمان‌های تخصصی</button></li>
            <li><button onclick="setVetTab('professors')" class="hover:text-emerald-400">اساتید و پزشکان هیئت علمی</button></li>
            <li><button onclick="openTriageModal()" class="hover:text-emerald-400">تریاژ بالینی هوش مصنوعی</button></li>
            <li><button onclick="setVetTab('track')" class="hover:text-emerald-400">پیگیری و استعلام نوبت</button></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold text-sm mb-3">اطلاعات تماس و اورژانس</h4>
          <p class="mb-1.5">تلفن پذیرش: <strong>۰۵۱-۳۸۸۰۴۰۰۰</strong></p>
          <p class="mb-1.5">اورژانس ۲۴ ساعته: <strong>۰۵۱-۳۸۸۰۴۱۱۵</strong></p>
          <p class="text-slate-400">مشهد، میدان آزادی، پردیس دانشگاه، دانشکده دامپزشکی</p>
        </div>

        <div>
          <h4 class="text-white font-bold text-sm mb-3">بخش اساتید و مدیریت</h4>
          <ul class="space-y-2">
            <li><button onclick="setVetTab('register-doc')" class="hover:text-emerald-400">سامانه جذب اعضای هیئت علمی</button></li>
            <li><button onclick="setVetTab('admin')" class="hover:text-emerald-400">ورود به میز مدیریت پذیرش</button></li>
            <li><a href="/" class="hover:text-emerald-400">بازگشت به پرتال جامع جهش</a></li>
          </ul>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900 text-center text-slate-500">
        کلیه حقوق این سامانه متعلق به بیمارستان دانشکده دامپزشکی دانشگاه فردوسی مشهد و انجمن علمی جهش می‌باشد.
      </div>
    </footer>
  `;
}

// ۱۴. راه‌اندازی اولیه و بارگذاری بلادرنگ داده‌ها
async function initApp() {
  try {
    renderApp();
  } catch (err) {
    console.error("Initial render error:", err);
  }

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
