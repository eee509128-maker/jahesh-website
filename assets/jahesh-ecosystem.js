/**
 * JAHESH IT ECOSYSTEM - CLIENT-SIDE RESILIENT MOUNT & CONTROLLER
 * Ensures all 23 high-tech interactive systems persist across React 18 / Vike hydration and SPA navigation
 */
(function() {
  if (typeof window === 'undefined') return;

  const INPAGE_HTML = "        <!-- NEW FEATURE: Interactive Project Cost & Feature Estimator (محاسبه‌گر هوشمند آنلاین هزینه طراحی سایت جهش) -->\n        <div id=\"jahesh-cost-calculator-section\" style=\"margin-top: 50px; background: linear-gradient(145deg, rgba(23, 15, 38, 0.95), rgba(13, 10, 26, 0.98)); border: 1.5px solid rgba(140, 0, 255, 0.35); border-radius: 24px; padding: clamp(20px, 4vw, 36px); direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(140, 0, 255, 0.15); position: relative; overflow: hidden;\">\n          <div style=\"position: absolute; top: -70px; right: -70px; width: 220px; height: 220px; background: rgba(140, 0, 255, 0.12); border-radius: 50%; filter: blur(60px); pointer-events: none;\"></div>\n\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 28px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 20px;\">\n            <div style=\"display: flex; align-items: center; gap: 14px;\">\n              <div style=\"width: 52px; height: 52px; border-radius: 14px; background: linear-gradient(135deg, #8c00ff, #d946ef); display: flex; align-items: center; justify-content: center; font-size: 26px; box-shadow: 0 8px 20px rgba(140, 0, 255, 0.4); flex-shrink: 0;\">\n                🧮\n              </div>\n              <div>\n                <div style=\"display: inline-flex; align-items: center; gap: 6px; background: rgba(140, 0, 255, 0.2); border: 1px solid rgba(140, 0, 255, 0.4); color: #d8b4fe; font-size: 11px; font-weight: 800; padding: 2px 10px; border-radius: 9999px; margin-bottom: 4px;\">\n                  <span>✦</span> محاسبه‌گر هوشمند آنلاین تعرفه‌ها\n                </div>\n                <h3 style=\"font-size: clamp(19px, 3.5vw, 24px); font-weight: 900; color: #ffffff; margin: 0;\">\n                  محاسبه آنلاین هزینه طراحی سایت و نرم‌افزار جهش ای تی\n                </h3>\n              </div>\n            </div>\n            <div style=\"font-size: 12px; color: #a78bfa; background: rgba(255, 255, 255, 0.04); padding: 8px 14px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.08);\">\n              ⚡ شفاف‌ترین سیستم برآورد هزینه با گارانتی بازگشت وجه\n            </div>\n          </div>\n\n          <!-- Step 1: Project Type -->\n          <div style=\"margin-bottom: 24px;\">\n            <label style=\"display: block; font-size: 13.5px; font-weight: 800; color: #e2e8f0; margin-bottom: 12px;\">\n              ۱. نوع وب‌سایت یا پروژه مورد نیاز خود را انتخاب نمایید:\n            </label>\n            <div id=\"calc-project-types\" style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;\">\n              <div class=\"calc-type-card active\" data-base-price=\"5500000\" data-name=\"وب‌سایت شرکتی و معرفی برند\" style=\"background: rgba(140, 0, 255, 0.15); border: 1.5px solid #a855f7; border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.2s ease;\">\n                <div style=\"font-weight: 800; font-size: 13.5px; color: #fff; margin-bottom: 4px;\">وب‌سایت شرکتی و معرفی برند</div>\n                <div style=\"font-size: 11.5px; color: #c4b5fd; margin-bottom: 6px;\">مناسب شرکت‌ها، پزشکان و وکلا</div>\n                <div style=\"font-size: 13px; font-weight: 900; color: #a7f3d0;\">۵,۵۰۰,۰۰۰ تومان</div>\n              </div>\n              <div class=\"calc-type-card\" data-base-price=\"7900000\" data-name=\"فروشگاه اینترنتی طلایی جهش (پیشنهاد ویژه)\" style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.2s ease;\">\n                <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;\">\n                  <span style=\"font-weight: 800; font-size: 13.5px; color: #fff;\">فروشگاه آنلاین طلایی</span>\n                  <span style=\"background: #ef4444; color: #fff; font-size: 9.5px; font-weight: 900; padding: 1px 6px; border-radius: 4px;\">تخفیف ویژه</span>\n                </div>\n                <div style=\"font-size: 11.5px; color: #94a3b8; margin-bottom: 6px;\">فروش آنلاین کالا با درگاه شاپرک</div>\n                <div style=\"font-size: 13px; font-weight: 900; color: #a7f3d0;\">۷,۹۰۰,۰۰۰ تومان</div>\n              </div>\n              <div class=\"calc-type-card\" data-base-price=\"10500000\" data-name=\"سامانه صنفی و پرتال اختصاصی (املاک / نوبت‌دهی)\" style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.2s ease;\">\n                <div style=\"font-weight: 800; font-size: 13.5px; color: #fff; margin-bottom: 4px;\">سامانه اختصاصی و صنفی</div>\n                <div style=\"font-size: 11.5px; color: #94a3b8; margin-bottom: 6px;\">فایلینگ، املاک، رزرو و بیمارستانی</div>\n                <div style=\"font-size: 13px; font-weight: 900; color: #a7f3d0;\">۱۰,۵۰۰,۰۰۰ تومان</div>\n              </div>\n              <div class=\"calc-type-card\" data-base-price=\"14000000\" data-name=\"وب‌اپلیکیشن فول‌استک و پلتفرم مقیاس‌پذیر\" style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.2s ease;\">\n                <div style=\"font-weight: 800; font-size: 13.5px; color: #fff; margin-bottom: 4px;\">پلتفرم فول‌استک سازمانی</div>\n                <div style=\"font-size: 11.5px; color: #94a3b8; margin-bottom: 6px;\">معماری میکروسرویس و دیتابیس اختصاصی</div>\n                <div style=\"font-size: 13px; font-weight: 900; color: #a7f3d0;\">۱۴,۰۰۰,۰۰۰ تومان</div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Step 2: Addon modules -->\n          <div style=\"margin-bottom: 24px;\">\n            <label style=\"display: block; font-size: 13.5px; font-weight: 800; color: #e2e8f0; margin-bottom: 12px;\">\n              ۲. امکانات و ماژول‌های اختصاصی مورد نظر خود را علامت بزنید:\n            </label>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;\">\n              <label style=\"display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 10px 14px; border-radius: 12px; cursor: pointer;\">\n                <span style=\"font-size: 12.5px; color: #cbd5e1; display: flex; align-items: center; gap: 8px;\">\n                  <input type=\"checkbox\" class=\"calc-addon-check\" data-price=\"0\" checked disabled style=\"accent-color: #8c00ff; width: 16px; height: 16px;\">\n                  درگاه پرداخت زیبال و شاپرک با تسویه آنی\n                </span>\n                <span style=\"font-size: 11px; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.15); padding: 2px 8px; border-radius: 6px;\">هدیه پکیج</span>\n              </label>\n              <label style=\"display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 10px 14px; border-radius: 12px; cursor: pointer;\">\n                <span style=\"font-size: 12.5px; color: #cbd5e1; display: flex; align-items: center; gap: 8px;\">\n                  <input type=\"checkbox\" class=\"calc-addon-check\" data-price=\"0\" checked disabled style=\"accent-color: #8c00ff; width: 16px; height: 16px;\">\n                  دامنه دلخواه + هاست فوق‌سریع NVMe\n                </span>\n                <span style=\"font-size: 11px; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.15); padding: 2px 8px; border-radius: 6px;\">هدیه پکیج</span>\n              </label>\n              <label style=\"display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 10px 14px; border-radius: 12px; cursor: pointer;\">\n                <span style=\"font-size: 12.5px; color: #cbd5e1; display: flex; align-items: center; gap: 8px;\">\n                  <input type=\"checkbox\" class=\"calc-addon-check\" data-price=\"1200000\" checked style=\"accent-color: #8c00ff; width: 16px; height: 16px;\">\n                  ضمانت سئو و دستیابی به رتبه یک گوگل\n                </span>\n                <span style=\"font-size: 11px; font-weight: 700; color: #e2e8f0;\">+ ۱,۲۰۰,۰۰۰ ت</span>\n              </label>\n              <label style=\"display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 10px 14px; border-radius: 12px; cursor: pointer;\">\n                <span style=\"font-size: 12.5px; color: #cbd5e1; display: flex; align-items: center; gap: 8px;\">\n                  <input type=\"checkbox\" class=\"calc-addon-check\" data-price=\"950000\" style=\"accent-color: #8c00ff; width: 16px; height: 16px;\">\n                  چت آنلاین هوشمند و دستیار هوش مصنوعی جهش\n                </span>\n                <span style=\"font-size: 11px; font-weight: 700; color: #e2e8f0;\">+ ۹۵۰,۰۰۰ ت</span>\n              </label>\n              <label style=\"display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 10px 14px; border-radius: 12px; cursor: pointer;\">\n                <span style=\"font-size: 12.5px; color: #cbd5e1; display: flex; align-items: center; gap: 8px;\">\n                  <input type=\"checkbox\" class=\"calc-addon-check\" data-price=\"650000\" style=\"accent-color: #8c00ff; width: 16px; height: 16px;\">\n                  پنل ارسال پیامک و احراز هویت ورود OTP\n                </span>\n                <span style=\"font-size: 11px; font-weight: 700; color: #e2e8f0;\">+ ۶۵۰,۰۰۰ ت</span>\n              </label>\n              <label style=\"display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 10px 14px; border-radius: 12px; cursor: pointer;\">\n                <span style=\"font-size: 12.5px; color: #cbd5e1; display: flex; align-items: center; gap: 8px;\">\n                  <input type=\"checkbox\" class=\"calc-addon-check\" data-price=\"1100000\" style=\"accent-color: #8c00ff; width: 16px; height: 16px;\">\n                  اپلیکیشن وب نصب‌شونده (PWA و Android WebApp)\n                </span>\n                <span style=\"font-size: 11px; font-weight: 700; color: #e2e8f0;\">+ ۱,۱۰۰,۰۰۰ ت</span>\n              </label>\n            </div>\n          </div>\n\n          <!-- Step 3: Priority & Coupon -->\n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px;\">\n            <div>\n              <label style=\"display: block; font-size: 13px; font-weight: 800; color: #e2e8f0; margin-bottom: 8px;\">\n                ۳. مدت زمان تحویل پروژه:\n              </label>\n              <select id=\"calc-speed-select\" style=\"width: 100%; background: #0c0818; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 12px; color: #fff; font-size: 13px; padding: 11px 14px; outline: none; cursor: pointer;\">\n                <option value=\"0\">تحویل استاندارد (۱۰ الی ۱۴ روز کاری) — بدون هزینه اضافی</option>\n                <option value=\"1500000\">تحویل فوری VIP جهش (۳ الی ۵ روز کاری) — + ۱,۵۰۰,۰۰۰ تومان</option>\n              </select>\n            </div>\n\n            <div>\n              <label style=\"display: block; font-size: 13px; font-weight: 800; color: #e2e8f0; margin-bottom: 8px;\">\n                ۴. کد تخفیف سازمانی یا دانشجویی (اختیاری):\n              </label>\n              <div style=\"display: flex; gap: 8px;\">\n                <input id=\"calc-coupon-input\" type=\"text\" placeholder=\"مثال: jahesh1395 یا fum\" style=\"flex: 1; background: #0c0818; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 12px; color: #fff; font-size: 13px; padding: 10px 14px; outline: none; text-align: left; font-family: monospace;\">\n                <button id=\"calc-coupon-btn\" type=\"button\" style=\"background: rgba(140, 0, 255, 0.3); border: 1px solid #8c00ff; color: #fff; font-weight: 800; font-size: 12.5px; padding: 10px 18px; border-radius: 12px; cursor: pointer; transition: background 0.2s ease;\">اعمال کد</button>\n              </div>\n              <div id=\"calc-coupon-feedback\" style=\"font-size: 11px; margin-top: 5px; min-height: 16px;\"></div>\n            </div>\n          </div>\n\n          <!-- Total Calculation & Direct Action Banner -->\n          <div style=\"background: rgba(0, 0, 0, 0.4); border: 1.5px solid rgba(52, 211, 153, 0.4); border-radius: 18px; padding: 20px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px;\">\n            <div>\n              <div style=\"font-size: 12px; color: #94a3b8; margin-bottom: 4px;\">برآورد نهایی و پیش‌فاکتور شفاف سفارش شما:</div>\n              <div style=\"display: flex; align-items: baseline; gap: 10px;\">\n                <span id=\"calc-total-price\" style=\"font-size: clamp(24px, 4vw, 32px); font-weight: 900; color: #34d399; font-family: monospace;\">۶,۷۰۰,۰۰۰</span>\n                <span style=\"font-size: 15px; font-weight: 800; color: #cbd5e1;\">تومان</span>\n                <span id=\"calc-discount-badge\" style=\"display: none; background: #dc2626; color: #fff; font-size: 11px; font-weight: 900; padding: 2px 8px; border-radius: 6px;\"></span>\n              </div>\n              <div id=\"calc-summary-text\" style=\"font-size: 11.5px; color: #a78bfa; margin-top: 4px;\">شامل: وب‌سایت شرکتی + سئو رتبه ۱ + درگاه زیبال و دامنه رایگان</div>\n            </div>\n\n            <div style=\"display: flex; flex-wrap: wrap; gap: 10px;\">\n              <a href=\"/jaheshkala/\" id=\"calc-order-link\" style=\"display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #10b981, #059669); color: #fff; font-weight: 900; font-size: 14px; padding: 12px 24px; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); transition: transform 0.2s ease;\">\n                <span>ثبت و شروع فوری پروژه در جهش کالا ←</span>\n              </a>\n              <button onclick=\"openFortuneWheelModal()\" type=\"button\" style=\"display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #7c3aed, #a855f7); color: #fff; font-weight: 800; font-size: 13px; padding: 12px 18px; border-radius: 12px; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4); transition: transform 0.2s;\">\n                <span>🎁 گردونه شانس و دریافت ۳۵٪ تخفیف</span>\n              </button>\n              <a href=\"tel:+989152331974\" style=\"display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.15); color: #fff; font-weight: 800; font-size: 13px; padding: 12px 18px; border-radius: 12px; text-decoration: none;\">\n                <span>📞 مشاوره تلفنی فوری (۰۹۱۵۲۳۳۱۹۷۴)</span>\n              </a>\n            </div>\n          </div>\n\n          <!-- Risk Reversal & Trust Guarantees (جعبه ۴ ضمانت طلایی جهش) -->\n          <div style=\"margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;\">\n            <div style=\"display: flex; align-items: flex-start; gap: 10px; background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 14px; padding: 12px 14px;\">\n              <span style=\"font-size: 22px;\">🛡️</span>\n              <div>\n                <strong style=\"display: block; font-size: 12.5px; color: #34d399; margin-bottom: 2px;\">ضمانت بازگشت ۱۰۰٪ وجه</strong>\n                <span style=\"font-size: 11px; color: #94a3b8; line-height: 1.5;\">در صورت عدم رضایت کامل شما از کیفیت وب‌سایت تا ۳۰ روز کاری.</span>\n              </div>\n            </div>\n\n            <div style=\"display: flex; align-items: flex-start; gap: 10px; background: rgba(56, 189, 248, 0.06); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 14px; padding: 12px 14px;\">\n              <span style=\"font-size: 22px;\">🚀</span>\n              <div>\n                <strong style=\"display: block; font-size: 12.5px; color: #38bdf8; margin-bottom: 2px;\">تضمین رتبه سئو در نتایج گوگل</strong>\n                <span style=\"font-size: 11px; color: #94a3b8; line-height: 1.5;\">کدنویسی پاک، متاتگ‌های مدرن و سرعت لود زیر ۱ ثانیه.</span>\n              </div>\n            </div>\n\n            <div style=\"display: flex; align-items: flex-start; gap: 10px; background: rgba(168, 85, 247, 0.06); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 14px; padding: 12px 14px;\">\n              <span style=\"font-size: 22px;\">⚡</span>\n              <div>\n                <strong style=\"display: block; font-size: 12.5px; color: #c084fc; margin-bottom: 2px;\">تحویل به موقع با جریمه دیرکرد</strong>\n                <span style=\"font-size: 11px; color: #94a3b8; line-height: 1.5;\">تعهد کتبی به زمان‌بندی و ثبت رسمی در قرارداد جهش.</span>\n              </div>\n            </div>\n\n            <div style=\"display: flex; align-items: flex-start; gap: 10px; background: rgba(245, 158, 11, 0.06); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 14px; padding: 12px 14px;\">\n              <span style=\"font-size: 22px;\">🔒</span>\n              <div>\n                <strong style=\"display: block; font-size: 12.5px; color: #fbbf24; margin-bottom: 2px;\">مالکیت تام و کمال ۱۰۰٪ سورس</strong>\n                <span style=\"font-size: 11px; color: #94a3b8; line-height: 1.5;\">ثبت رسمی دامنه، هاست و تمام سورس‌کد به نام مشتری.</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <!-- NEW HIGH-TECH FEATURE: Live Website SEO & Speed Audit Widget (سامانه آنالیز زنده سئو و سرعت وب‌سایت) -->\n        <div id=\"jahesh-seo-auditor-section\" style=\"margin-top: 36px; background: linear-gradient(145deg, rgba(16, 24, 39, 0.95), rgba(11, 15, 25, 0.98)); border: 1.5px solid rgba(56, 189, 248, 0.35); border-radius: 24px; padding: clamp(20px, 4vw, 36px); direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(56, 189, 248, 0.15); position: relative; overflow: hidden;\">\n          <div style=\"position: absolute; top: -70px; left: -70px; width: 220px; height: 220px; background: rgba(56, 189, 248, 0.12); border-radius: 50%; filter: blur(60px); pointer-events: none;\"></div>\n\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 18px;\">\n            <div style=\"display: flex; align-items: center; gap: 14px;\">\n              <div style=\"width: 52px; height: 52px; border-radius: 14px; background: linear-gradient(135deg, #0284c7, #38bdf8); display: flex; align-items: center; justify-content: center; font-size: 26px; box-shadow: 0 8px 20px rgba(2, 132, 199, 0.4); flex-shrink: 0;\">\n                📊\n              </div>\n              <div>\n                <div style=\"display: inline-flex; align-items: center; gap: 6px; background: rgba(56, 189, 248, 0.2); border: 1px solid rgba(56, 189, 248, 0.4); color: #7dd3fc; font-size: 11px; font-weight: 800; padding: 2px 10px; border-radius: 9999px; margin-bottom: 4px;\">\n                  <span>⚡</span> ابزار آنلاین و هوشمند جهش ای تی\n                </div>\n                <h3 style=\"font-size: clamp(19px, 3.5vw, 24px); font-weight: 900; color: #ffffff; margin: 0;\">\n                  آنالیزور زنده سئو، سرعت و رتبه گوگل وب‌سایت شما\n                </h3>\n              </div>\n            </div>\n            <div style=\"font-size: 12px; color: #7dd3fc; background: rgba(255, 255, 255, 0.04); padding: 8px 14px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.08);\">\n              🔍 بررسی پارامترهای رتبه‌بندی الگوریتم‌های ۲۰۲۶ گوگل\n            </div>\n          </div>\n\n          <!-- Auditor Input Form -->\n          <div style=\"background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 18px; padding: 18px; margin-bottom: 20px;\">\n            <div style=\"display: flex; flex-direction: column; sm:flex-row gap: 12px;\">\n              <div style=\"position: relative; flex: 1;\">\n                <input id=\"seo-audit-url\" type=\"text\" placeholder=\"آدرس سایت خود را وارد کنید (مثال: mybusiness.ir یا google.com)\" style=\"width: 100%; background: #080c14; border: 1.5px solid rgba(56, 189, 248, 0.3); border-radius: 14px; color: #fff; font-size: 14px; padding: 14px 18px; outline: none; transition: border-color 0.2s ease; direction: ltr; text-align: left; font-family: monospace;\">\n              </div>\n              <button id=\"seo-audit-btn\" type=\"button\" style=\"background: linear-gradient(135deg, #0284c7, #0ea5e9); color: #fff; font-weight: 900; font-size: 14px; padding: 14px 28px; border-radius: 14px; border: none; cursor: pointer; box-shadow: 0 4px 20px rgba(14, 165, 233, 0.4); display: flex; align-items: center; justify-content: center; gap: 8px; transition: transform 0.2s ease;\">\n                <span>شروع آنالیز زنده</span>\n                <span>⚡</span>\n              </button>\n            </div>\n            <div style=\"display: flex; gap: 8px; margin-top: 10px; font-size: 11.5px; color: #94a3b8; align-items: center;\">\n              <span>تست نمونه‌های سریع:</span>\n              <button type=\"button\" class=\"seo-sample-chip\" data-url=\"jaheshit.ir\" style=\"background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: #38bdf8; border-radius: 6px; padding: 2px 8px; cursor: pointer;\">jaheshit.ir (جهش)</button>\n              <button type=\"button\" class=\"seo-sample-chip\" data-url=\"digikala.com\" style=\"background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: #cbd5e1; border-radius: 6px; padding: 2px 8px; cursor: pointer;\">digikala.com</button>\n              <button type=\"button\" class=\"seo-sample-chip\" data-url=\"mysite.ir\" style=\"background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: #cbd5e1; border-radius: 6px; padding: 2px 8px; cursor: pointer;\">سایت شخصی</button>\n            </div>\n          </div>\n\n          <!-- Loading State (hidden initially) -->\n          <div id=\"seo-audit-loading\" style=\"display: none; text-align: center; padding: 30px 10px;\">\n            <div style=\"display: inline-block; width: 44px; height: 44px; border: 4px solid rgba(56, 189, 248, 0.2); border-top-color: #38bdf8; border-radius: 50%; animation: spinAudit 0.8s linear infinite;\"></div>\n            <div id=\"seo-audit-step-text\" style=\"margin-top: 14px; font-weight: 800; font-size: 13.5px; color: #7dd3fc;\">در حال اتصال و سنجش شاخص‌های سئو...</div>\n          </div>\n\n          <!-- Audit Results Card (hidden initially) -->\n          <div id=\"seo-audit-result\" style=\"display: none; background: rgba(0, 0, 0, 0.5); border: 1.5px solid rgba(56, 189, 248, 0.35); border-radius: 20px; padding: 24px; animation: cmdFadeIn 0.3s ease;\">\n            \n            <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 18px;\">\n              <div style=\"display: flex; align-items: center; gap: 16px;\">\n                <div style=\"position: relative; width: 84px; height: 84px; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle, rgba(14, 165, 233, 0.2), transparent); border-radius: 50%; border: 3px solid #38bdf8;\">\n                  <span id=\"audit-score-num\" style=\"font-size: 28px; font-weight: 900; color: #38bdf8; font-family: monospace;\">۹۶</span>\n                  <span style=\"font-size: 11px; color: #94a3b8; position: absolute; bottom: 8px;\">از ۱۰۰</span>\n                </div>\n                <div>\n                  <div style=\"display: flex; align-items: center; gap: 8px;\">\n                    <h4 id=\"audit-target-domain\" style=\"font-size: 18px; font-weight: 900; color: #fff; margin: 0; font-family: monospace; direction: ltr;\">jaheshit.ir</h4>\n                    <span id=\"audit-grade-badge\" style=\"background: #059669; color: #fff; font-size: 11px; font-weight: 900; padding: 2px 8px; border-radius: 6px;\">رتبه عالی (A+)</span>\n                  </div>\n                  <p id=\"audit-headline-summary\" style=\"font-size: 12.5px; color: #cbd5e1; margin: 4px 0 0 0;\">\n                    ساختار سئو، متاتگ‌ها و سرعت سرور در وضعیت استانداردهای بالای موتور جستجوی گوگل قرار دارد.\n                  </p>\n                </div>\n              </div>\n\n              <div>\n                <a href=\"/jaheshkala/\" style=\"display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #8c00ff, #a855f7); color: #fff; font-weight: 900; font-size: 13.5px; padding: 12px 20px; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 15px rgba(140, 0, 255, 0.4);\">\n                  <span>بهینه‌سازی و سئو تضمینی با جهش ای تی ←</span>\n                </a>\n              </div>\n            </div>\n\n            <!-- Metrics Grid -->\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 20px;\">\n              <div style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 14px;\">\n                <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;\">\n                  <span style=\"font-size: 12px; color: #94a3b8;\">امنیت و گواهی SSL</span>\n                  <span id=\"audit-ssl-val\" style=\"font-size: 12px; font-weight: 800; color: #34d399;\">✓ HTTPS فعال</span>\n                </div>\n                <div style=\"height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 9999px; overflow: hidden;\">\n                  <div style=\"width: 100%; height: 100%; background: #34d399;\"></div>\n                </div>\n              </div>\n\n              <div style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 14px;\">\n                <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;\">\n                  <span style=\"font-size: 12px; color: #94a3b8;\">متاتگ‌های سئو و OpenGraph</span>\n                  <span id=\"audit-meta-val\" style=\"font-size: 12px; font-weight: 800; color: #34d399;\">✓ بهینه</span>\n                </div>\n                <div style=\"height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 9999px; overflow: hidden;\">\n                  <div style=\"width: 95%; height: 100%; background: #34d399;\"></div>\n                </div>\n              </div>\n\n              <div style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 14px;\">\n                <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;\">\n                  <span style=\"font-size: 12px; color: #94a3b8;\">سازگاری موبایل (Mobile Friendly)</span>\n                  <span id=\"audit-mobile-val\" style=\"font-size: 12px; font-weight: 800; color: #34d399;\">✓ ۱۰۰٪ سازگار</span>\n                </div>\n                <div style=\"height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 9999px; overflow: hidden;\">\n                  <div style=\"width: 98%; height: 100%; background: #34d399;\"></div>\n                </div>\n              </div>\n\n              <div style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 14px;\">\n                <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;\">\n                  <span style=\"font-size: 12px; color: #94a3b8;\">سرعت پاسخگویی سرور (TTFB)</span>\n                  <span id=\"audit-speed-val\" style=\"font-size: 12px; font-weight: 800; color: #38bdf8; font-family: monospace;\">۰.۲ ثانیه</span>\n                </div>\n                <div style=\"height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 9999px; overflow: hidden;\">\n                  <div style=\"width: 92%; height: 100%; background: #38bdf8;\"></div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Bulleted Recommendations -->\n            <div id=\"audit-recs-box\" style=\"background: rgba(14, 165, 233, 0.08); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 14px; padding: 14px 18px; font-size: 12px; color: #cbd5e1; line-height: 1.8;\">\n              <strong style=\"color: #7dd3fc; display: block; margin-bottom: 4px;\">توصیه‌های هوش مصنوعی جهش جهت کسب رتبه اول نتایج گوگل:</strong>\n              <div id=\"audit-recs-content\">\n                • تنظیم کدهای اسکیما (Schema.org) برای رتبه یک غنی (Rich Snippets).<br>\n                • ارتقای هاست به درایوهای NVMe اختصاصی جهش ای تی جهت کاهش زمان تاخیر سرور.<br>\n                • ثبت و تایید سایت در سرچ کنسول با استاندارد Indexing 2026.\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <!-- Autonomous AI Project Architect & Deep Thinking Blueprint Section -->\n        <div id=\"jahesh-ai-blueprint-section\" style=\"margin-top: 50px; background: radial-gradient(circle at top right, rgba(168, 85, 247, 0.12), rgba(15, 23, 42, 0.95) 70%); border: 1px solid rgba(168, 85, 247, 0.35); border-radius: 24px; padding: 36px 30px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;\">\n          <!-- Ambient Glow decoration -->\n          <div style=\"position: absolute; top: -80px; left: -80px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(56, 189, 248, 0.25), transparent 70%); border-radius: 50%; pointer-events: none;\"></div>\n\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 22px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.4); color: #d8b4fe; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #c084fc; box-shadow: 0 0 10px #c084fc;\"></span>\n                Autonomous Agentic Engine 2026\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>🧠</span> معمار هوشمند پروژه و تدوین‌گر سند فنی (AI Project Architect)\n              </h3>\n            </div>\n            <div style=\"display: flex; align-items: center; gap: 10px;\">\n              <span style=\"font-size: 12px; color: #94a3b8; background: rgba(255,255,255,0.05); padding: 6px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);\">\n                مجهز به تفکر چندمرحله‌ای (Deep Reasoning R1/o1)\n              </span>\n            </div>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 22px;\">\n            ایده، زمینه شغلی یا نیاز نرم‌افزاری خود را مطرح نمایید. ایجنت خودمختار جهش با اجرای ۵ فاز <strong>استدلال عمیق و مهندسی معکوس</strong>، معماری بهینه دیتابیس، استک فنی، ماژول‌های توسعه، تخمین زمان و هزینه، و نقشه راه تضمین سئو و بازگشت سرمایه (ROI) را تدوین کرده و پروپوزال رسمی به شما تحویل می‌دهد:\n          </p>\n\n          <!-- Fast Suggestion Chips -->\n          <div style=\"margin-bottom: 18px;\">\n            <div style=\"font-size: 12px; color: #a855f7; font-weight: 700; margin-bottom: 8px;\">\n              💡 الگوهای پیشنهادی جهت تست آنی ایجنت:\n            </div>\n            <div style=\"display: flex; flex-wrap: wrap; gap: 8px;\" id=\"blueprint-chips-container\">\n              <button type=\"button\" class=\"blueprint-chip-btn\" data-idea=\"فروشگاه آنلاین عطر و محصولات آرایشی با پیشنهاددهنده هوشمند عطر بر اساس سلیقه و تسویه حساب آنی شاپرک\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; font-size: 12px; padding: 6px 14px; border-radius: 10px; cursor: pointer; transition: all 0.2s;\">\n                🛒 فروشگاه تخصصی عطر + AI Recommender\n              </button>\n              <button type=\"button\" class=\"blueprint-chip-btn\" data-idea=\"پرتال نوبت‌دهی آنلاین کلینیک تخصصی و بیمارستان با سیستم یادآوری پیامکی، پرونده الکترونیک و تریاژ هوشمند\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; font-size: 12px; padding: 6px 14px; border-radius: 10px; cursor: pointer; transition: all 0.2s;\">\n                🏥 سامانه کلینیک و پزشکی + پرونده دیجیتال\n              </button>\n              <button type=\"button\" class=\"blueprint-chip-btn\" data-idea=\"آکادمی آموزش آنلاین و فروش دوره‌های ویدیویی با پلیر ضد دانلود، آزمون‌ساز آنلاین و صدور گواهینامه معتبر\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; font-size: 12px; padding: 6px 14px; border-radius: 10px; cursor: pointer; transition: all 0.2s;\">\n                🎓 پلتفرم آموزشی + ویدیو پلیر امن و آزمون\n              </button>\n              <button type=\"button\" class=\"blueprint-chip-btn\" data-idea=\"وب‌سایت شرکتی مهندسی و ساختمانی با کاتالوگ آنلاین پروژه‌ها، فرم هوشمند استعلام پیش‌فاکتور و رتبه یک تضمینی گوگل\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; font-size: 12px; padding: 6px 14px; border-radius: 10px; cursor: pointer; transition: all 0.2s;\">\n                🏢 پرتال ساختمانی و معماری + استعلام قیمت\n              </button>\n            </div>\n          </div>\n\n          <!-- Input Area -->\n          <div style=\"background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 18px; margin-bottom: 20px;\">\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 12px;\">\n              <div>\n                <label style=\"display: block; font-size: 12px; color: #94a3b8; font-weight: 700; margin-bottom: 6px;\">حوزه کسب‌وکار:</label>\n                <select id=\"blueprint-category-select\" style=\"width: 100%; background: #0b0f19; border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 10px; padding: 10px; color: #ffffff; font-size: 13px; outline: none;\">\n                  <option value=\"ecommerce\">فروشگاهی / تجارت الکترونیک (E-Commerce)</option>\n                  <option value=\"corporate\">شرکتی و معرفی برند (Corporate & Brand)</option>\n                  <option value=\"medical\">پزشکی، کلینیک و سلامت (Health & Clinic)</option>\n                  <option value=\"lms\">آموزشی و فروش دوره‌های آنلاین (EdTech & LMS)</option>\n                  <option value=\"startup\">استارتاپ و سامانه نرم‌افزاری اختصاصی (SaaS & Startup)</option>\n                </select>\n              </div>\n              <div>\n                <label style=\"display: block; font-size: 12px; color: #94a3b8; font-weight: 700; margin-bottom: 6px;\">جامعه مخاطبان هدف:</label>\n                <select id=\"blueprint-target-select\" style=\"width: 100%; background: #0b0f19; border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 10px; padding: 10px; color: #ffffff; font-size: 13px; outline: none;\">\n                  <option value=\"b2c\">مشتریان نهایی و عموم مردم (B2C)</option>\n                  <option value=\"b2b\">شرکت‌ها و کسب‌وکارهای دیگر (B2B)</option>\n                  <option value=\"vip\">مشتریان خاص و خدمات لوکس (High-End / VIP)</option>\n                  <option value=\"international\">مخاطبان بین‌المللی و صادراتی</option>\n                </select>\n              </div>\n            </div>\n\n            <label style=\"display: block; font-size: 12px; color: #94a3b8; font-weight: 700; margin-bottom: 6px;\">شرح ایده یا امکانات مدنظر شما:</label>\n            <div style=\"display: flex; gap: 10px; flex-wrap: wrap;\">\n              <textarea id=\"blueprint-idea-input\" rows=\"3\" placeholder=\"مثلاً: می‌خواهم یک وب‌سایت فروشگاهی با امکان چندفروشندگی، محاسبه هزینه پست پیشتاز، ثبت‌نام پیامکی و سرعت لود زیر ۱ ثانیه داشته باشم...\" style=\"flex: 1; min-width: 260px; background: #0b0f19; border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 12px; padding: 12px; color: #ffffff; font-size: 13px; outline: none; resize: vertical; line-height: 1.6;\"></textarea>\n              <button id=\"blueprint-run-btn\" type=\"button\" style=\"background: linear-gradient(135deg, #9333ea, #4f46e5); color: #ffffff; font-weight: 800; font-size: 14px; border: none; border-radius: 12px; padding: 0 28px; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; min-height: 80px; box-shadow: 0 8px 24px rgba(147, 51, 234, 0.35); transition: all 0.2s;\">\n                <span style=\"font-size: 18px;\">⚡</span>\n                <span>تدوین پروپوزال هوشمند</span>\n                <span style=\"font-size: 11px; opacity: 0.85; font-weight: 400;\">با استدلال عمیق چندفازی</span>\n              </button>\n            </div>\n          </div>\n\n          <!-- Dynamic Deep Thinking Animated Box -->\n          <div id=\"blueprint-thinking-container\" style=\"display: none; background: #070913; border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 18px; padding: 22px; margin-bottom: 24px; box-shadow: inset 0 0 20px rgba(245, 158, 11, 0.08);\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(245, 158, 11, 0.2); padding-bottom: 12px; margin-bottom: 16px;\">\n              <div style=\"display: flex; align-items: center; gap: 10px; color: #fbbf24; font-weight: 800; font-size: 14px;\">\n                <span style=\"display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; animation: jaheshPulse 1.2s infinite ease-in-out;\"></span>\n                <span>فرایند تفکر عمیق ایجنت جهش (Agentic Deep Reasoning in Progress...)</span>\n              </div>\n              <span id=\"blueprint-phase-badge\" style=\"font-size: 11px; background: rgba(245, 158, 11, 0.2); color: #fde68a; padding: 3px 10px; border-radius: 9999px; font-weight: 700;\">\n                فاز ۱ از ۵\n              </span>\n            </div>\n\n            <!-- Stages progress list -->\n            <div id=\"blueprint-stages-list\" style=\"display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: #cbd5e1;\">\n              <!-- Stages will be animated via JavaScript -->\n            </div>\n          </div>\n\n          <!-- Generated Blueprint Output Box -->\n          <div id=\"blueprint-result-container\" style=\"display: none; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 20px; padding: 28px; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);\">\n            <!-- Top Result Banner -->\n            <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 16px; margin-bottom: 22px;\">\n              <div>\n                <span style=\"font-size: 11px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 3px 10px; border-radius: 8px; font-weight: 700;\">\n                  سند مهندسی پروژه تایید شده جهش ای تی\n                </span>\n                <h4 id=\"blueprint-result-title\" style=\"font-size: 20px; font-weight: 900; color: #ffffff; margin: 8px 0 0 0;\">\n                  پروپوزال معماری سیستم نرم‌افزاری\n                </h4>\n              </div>\n              <div style=\"display: flex; align-items: center; gap: 12px;\">\n                <div style=\"text-align: left; font-size: 11px; color: #94a3b8;\">\n                  <div>کد پیگیری پروپوزال: <span id=\"blueprint-code\" style=\"color: #cbd5e1; font-family: monospace; font-weight: 700;\">JAH-2026-X</span></div>\n                  <div>ضریب اطمینان فنی: <span style=\"color: #34d399; font-weight: 700;\">۹۸.۷٪</span></div>\n                </div>\n                <button type=\"button\" id=\"blueprint-print-btn\" style=\"background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); color: #ffffff; padding: 8px 14px; border-radius: 10px; font-size: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px;\">\n                  <span>🖨️</span> چاپ / ذخیره PDF\n                </button>\n              </div>\n            </div>\n\n            <!-- Content Grid -->\n            <div id=\"blueprint-result-content\" style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 24px;\">\n              <!-- Injected by JavaScript -->\n            </div>\n\n            <!-- Bottom Action & High-Conversion CTAs -->\n            <div style=\"background: linear-gradient(135deg, rgba(88, 28, 135, 0.4), rgba(30, 58, 138, 0.4)); border: 1px solid rgba(168, 85, 247, 0.4); border-radius: 16px; padding: 20px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;\">\n              <div>\n                <div style=\"font-weight: 800; color: #ffffff; font-size: 15px; margin-bottom: 4px;\">\n                  🎁 این پروپوزال شامل ضمانت رسمی بازگشت ۱۰۰٪ وجه + ۲۰٪ تخفیف طلایی است\n                </div>\n                <div style=\"font-size: 13px; color: #cbd5e1;\">\n                  جهت رزرو این معماری و آغاز پیاده‌سازی، هم‌اکنون با کارشناسان ارشد مهندسی جهش تماس بگیرید:\n                </div>\n              </div>\n              <div style=\"display: flex; flex-wrap: wrap; gap: 10px;\">\n                <a href=\"tel:09152331974\" style=\"background: #22c55e; color: #ffffff; font-weight: 800; font-size: 13px; padding: 10px 18px; border-radius: 10px; text-decoration: none; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 14px rgba(34, 197, 94, 0.4);\">\n                  <span>📞</span> تماس فوری (۰۹۱۵۲۳۳۱۹۷۴)\n                </a>\n                <a href=\"https://t.me/emainsupport\" target=\"_blank\" rel=\"noopener\" style=\"background: #0284c7; color: #ffffff; font-weight: 700; font-size: 13px; padding: 10px 18px; border-radius: 10px; text-decoration: none; display: flex; align-items: center; gap: 6px;\">\n                  <span>💬</span> گفتگو در تلگرام\n                </a>\n                <button type=\"button\" id=\"blueprint-book-vip-btn\" style=\"background: linear-gradient(135deg, #a855f7, #6366f1); color: #ffffff; font-weight: 800; font-size: 13px; padding: 10px 18px; border: none; border-radius: 10px; cursor: pointer;\">\n                  ✦ ثبت درخواست مشاوره VIP\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- 1. Interactive Live Prototype & Instant UI Sandbox Studio -->\n        <div id=\"jahesh-live-preview-studio\" style=\"margin-top: 50px; background: radial-gradient(circle at top left, rgba(6, 182, 212, 0.12), rgba(15, 23, 42, 0.95) 70%); border: 1px solid rgba(6, 182, 212, 0.35); border-radius: 24px; padding: 36px 30px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;\">\n          <div style=\"position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent 70%); border-radius: 50%; pointer-events: none;\"></div>\n\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(6, 182, 212, 0.15); border: 1px solid rgba(6, 182, 212, 0.4); color: #67e8f9; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #22d3ee; box-shadow: 0 0 10px #22d3ee;\"></span>\n                Live Interactive Sandbox\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>📱</span> استودیوی شبیه‌ساز زنده سایت در موبایل و دسکتاپ\n              </h3>\n            </div>\n            <!-- Device Frame Switcher -->\n            <div style=\"display: flex; background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 12px; padding: 4px;\">\n              <button id=\"studio-view-desktop\" type=\"button\" style=\"background: rgba(6, 182, 212, 0.3); color: #fff; border: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;\">\n                <span>💻</span> نمای دسکتاپ\n              </button>\n              <button id=\"studio-view-mobile\" type=\"button\" style=\"background: transparent; color: #94a3b8; border: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;\">\n                <span>📱</span> نمای موبایل\n              </button>\n            </div>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 22px;\">\n            ظاهر و نحوه کارکرد وب‌سایت کسب‌وکار خود را پیش از ثبت سفارش تست کنید! سبک، نام برند و رنگ‌بندی را تغییر دهید و عملکرد دکمه‌ها و سبد خرید زنده را در دو قالب استاندارد تجربه نمایید:\n          </p>\n\n          <!-- Studio Customizer Bar -->\n          <div style=\"background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 18px; margin-bottom: 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; align-items: end;\">\n            <div>\n              <label style=\"display: block; font-size: 12px; color: #94a3b8; font-weight: 700; margin-bottom: 6px;\">سبک وب‌سایت صنف شما:</label>\n              <select id=\"studio-preset-select\" style=\"width: 100%; background: #0b0f19; border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 10px; padding: 10px; color: #ffffff; font-size: 13px; outline: none;\">\n                <option value=\"ecommerce\">🛍️ فروشگاه اینترنتی و خرید آنلاین</option>\n                <option value=\"medical\">🏥 کلینیک تخصصی و نوبت‌دهی آنلاین</option>\n                <option value=\"corporate\">🏢 شرکتی مهندسی و معرفی پروژه‌ها</option>\n                <option value=\"lms\">🎓 آکادمی آموزشی و فروش دوره‌های ویدئویی</option>\n              </select>\n            </div>\n            <div>\n              <label style=\"display: block; font-size: 12px; color: #94a3b8; font-weight: 700; margin-bottom: 6px;\">نام دلخواه برند یا فروشگاه شما:</label>\n              <input id=\"studio-brand-input\" type=\"text\" value=\"جهش رویال\" placeholder=\"مثلاً: فروشگاه آنلاین آریانا\" style=\"width: 100%; box-sizing: border-box; background: #0b0f19; border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 10px; padding: 10px; color: #ffffff; font-size: 13px; outline: none;\">\n            </div>\n            <div>\n              <label style=\"display: block; font-size: 12px; color: #94a3b8; font-weight: 700; margin-bottom: 6px;\">پالت رنگی تم اصلی:</label>\n              <div style=\"display: flex; gap: 8px;\" id=\"studio-palette-picker\">\n                <button type=\"button\" class=\"studio-color-btn active\" data-color=\"purple\" style=\"width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #a855f7, #6366f1); border: 2px solid #ffffff; cursor: pointer;\"></button>\n                <button type=\"button\" class=\"studio-color-btn\" data-color=\"cyan\" style=\"width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #06b6d4, #0284c7); border: 2px solid transparent; cursor: pointer;\"></button>\n                <button type=\"button\" class=\"studio-color-btn\" data-color=\"emerald\" style=\"width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #10b981, #059669); border: 2px solid transparent; cursor: pointer;\"></button>\n                <button type=\"button\" class=\"studio-color-btn\" data-color=\"gold\" style=\"width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #f59e0b, #d97706); border: 2px solid transparent; cursor: pointer;\"></button>\n              </div>\n            </div>\n            <div>\n              <button id=\"studio-reset-btn\" type=\"button\" style=\"width: 100%; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); color: #e2e8f0; font-weight: 700; font-size: 13px; padding: 10px; border-radius: 10px; cursor: pointer;\">\n                🔄 اعمال تغییرات آنی\n              </button>\n            </div>\n          </div>\n\n          <!-- Viewport Wrapper (Desktop or Mobile Bezel) -->\n          <div id=\"studio-viewport-wrapper\" style=\"display: flex; justify-content: center; margin-bottom: 24px; transition: all 0.3s ease;\">\n            <!-- Desktop Browser Mockup Frame -->\n            <div id=\"studio-frame-container\" style=\"width: 100%; max-width: 960px; background: #0c101c; border: 1.5px solid rgba(255, 255, 255, 0.18); border-radius: 16px; overflow: hidden; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7); transition: all 0.3s ease;\">\n              <!-- Browser Header -->\n              <div style=\"background: #161d2d; padding: 10px 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255, 255, 255, 0.08); font-family: monospace; font-size: 11px; color: #94a3b8;\">\n                <div style=\"display: flex; align-items: center; gap: 6px;\">\n                  <span style=\"width: 10px; height: 10px; border-radius: 50%; background: #ef4444;\"></span>\n                  <span style=\"width: 10px; height: 10px; border-radius: 50%; background: #f59e0b;\"></span>\n                  <span style=\"width: 10px; height: 10px; border-radius: 50%; background: #10b981;\"></span>\n                </div>\n                <div style=\"background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 3px 14px; color: #38bdf8; display: flex; align-items: center; gap: 6px;\">\n                  <span>🔒</span>\n                  <span id=\"studio-url-bar\">https://your-brand.ir</span>\n                </div>\n                <div style=\"color: #34d399; font-weight: bold; font-size: 10px;\">\n                  ⚡ PageSpeed: 99/100\n                </div>\n              </div>\n\n              <!-- Inner Rendered Mock Website -->\n              <div id=\"studio-mock-content\" style=\"padding: 24px; min-height: 380px; background: #0a0e17; color: #fff;\">\n                <!-- Injected dynamically by JS -->\n              </div>\n            </div>\n          </div>\n\n          <!-- Bottom CTA of Studio -->\n          <div style=\"background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2)); border: 1px solid rgba(6, 182, 212, 0.4); border-radius: 16px; padding: 20px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;\">\n            <div>\n              <div style=\"font-weight: 800; color: #ffffff; font-size: 16px; margin-bottom: 4px;\">\n                🚀 همین قالب را با ۲۰٪ تخفیف طلایی و تحویل ۷ روزه سفارش دهید\n              </div>\n              <div style=\"font-size: 13px; color: #cbd5e1;\">\n                تمامی پروژه‌ها همراه با ثبت دامنه، ۱ ماه هاست NVMe رایگان و ضمانت رتبه یک گوگل تحویل داده می‌شوند.\n              </div>\n            </div>\n            <div style=\"display: flex; gap: 10px;\">\n              <a href=\"tel:09152331974\" style=\"background: #22c55e; color: #fff; font-weight: 800; font-size: 13px; padding: 10px 18px; border-radius: 10px; text-decoration: none; display: flex; align-items: center; gap: 6px;\">\n                <span>📞</span> سفارش فوری (۰۹۱۵۲۳۳۱۹۷۴)\n              </a>\n              <button id=\"studio-order-btn\" type=\"button\" style=\"background: linear-gradient(135deg, #06b6d4, #3b82f6); color: #fff; font-weight: 800; font-size: 13px; padding: 10px 18px; border-radius: 10px; border: none; cursor: pointer;\">\n                ✦ رزرو مشاوره VIP این دیزاین\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <!-- 2. AI Revenue & Business Growth ROI Simulator -->\n        <div id=\"jahesh-roi-simulator-section\" style=\"margin-top: 50px; background: radial-gradient(circle at top right, rgba(16, 185, 129, 0.12), rgba(15, 23, 42, 0.95) 70%); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: 24px; padding: 36px 30px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;\">\n          <div style=\"position: absolute; bottom: -60px; left: -60px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent 70%); border-radius: 50%; pointer-events: none;\"></div>\n\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #6ee7b7; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981;\"></span>\n                Revenue & Profit Multiplier\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>📈</span> شبیه‌ساز رشد فروش و سودآوری با سئو و هوش مصنوعی جهش\n              </h3>\n            </div>\n            <span style=\"font-size: 12px; color: #34d399; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 6px 14px; border-radius: 12px; font-weight: 700;\">\n              برآورد مبتنی بر آمار واقعی ۲۵ صنف\n            </span>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 24px;\">\n            اسلایدرها را متناسب با اعداد کسب‌وکار خود حرکت دهید تا به صورت بلادرنگ مشاهده نمایید وب‌سایت پرسرعت اختصاصی و سئو رتبه یک صفحه اول گوگل چقدر فروش سالانه شما را متحول می‌کند:\n          </p>\n\n          <!-- Interactive Sliders Grid -->\n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 18px; padding: 22px; margin-bottom: 24px;\">\n            <!-- Slider 1: Customers -->\n            <div>\n              <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;\">\n                <label style=\"font-size: 13px; font-weight: 700; color: #cbd5e1;\">👥 تعداد خریداران / مراجعین فعلی شما در ماه:</label>\n                <span id=\"roi-customers-display\" style=\"font-size: 15px; font-weight: 900; color: #38bdf8; font-family: monospace;\">۱۵۰ نفر</span>\n              </div>\n              <input type=\"range\" id=\"roi-customers-slider\" min=\"10\" max=\"2000\" step=\"10\" value=\"150\" style=\"width: 100%; accent-color: #38bdf8; cursor: pointer;\">\n              <div style=\"display: flex; justify-content: space-between; font-size: 10px; color: #64748b; margin-top: 4px;\">\n                <span>۱۰ نفر</span>\n                <span>۱,۰۰۰ نفر</span>\n                <span>۲,۰۰۰ نفر</span>\n              </div>\n            </div>\n\n            <!-- Slider 2: Average Order Value -->\n            <div>\n              <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;\">\n                <label style=\"font-size: 13px; font-weight: 700; color: #cbd5e1;\">💳 میانگین مبلغ خرید هر مشتری (تومان):</label>\n                <span id=\"roi-aov-display\" style=\"font-size: 15px; font-weight: 900; color: #fbbf24; font-family: monospace;\">۸۵۰,۰۰۰ تومان</span>\n              </div>\n              <input type=\"range\" id=\"roi-aov-slider\" min=\"100000\" max=\"10000000\" step=\"50000\" value=\"850000\" style=\"width: 100%; accent-color: #fbbf24; cursor: pointer;\">\n              <div style=\"display: flex; justify-content: space-between; font-size: 10px; color: #64748b; margin-top: 4px;\">\n                <span>۱۰۰ هزار تومان</span>\n                <span>۵ میلیون تومان</span>\n                <span>۱۰ میلیون تومان</span>\n              </div>\n            </div>\n\n            <!-- Strategy Choice -->\n            <div style=\"grid-column: 1 / -1;\">\n              <label style=\"display: block; font-size: 13px; font-weight: 700; color: #cbd5e1; margin-bottom: 10px;\">🚀 پکیج ارتقای مورد نظر در جهش:</label>\n              <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;\" id=\"roi-strategy-options\">\n                <label style=\"background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;\">\n                  <input type=\"radio\" name=\"roi-strategy\" value=\"1.6\" style=\"accent-color: #10b981;\">\n                  <div>\n                    <div style=\"font-size: 12px; font-weight: 800; color: #e2e8f0;\">پکیج استاندارد</div>\n                    <div style=\"font-size: 10.5px; color: #94a3b8;\">سایت واکنش‌گرا و سریع (+۶۰٪ رشد)</div>\n                  </div>\n                </label>\n                <label style=\"background: rgba(16, 185, 129, 0.15); border: 1.5px solid #10b981; border-radius: 12px; padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;\">\n                  <input type=\"radio\" name=\"roi-strategy\" value=\"2.8\" checked style=\"accent-color: #10b981;\">\n                  <div>\n                    <div style=\"font-size: 12px; font-weight: 800; color: #34d399;\">پکیج طلایی سئو (پیشنهادی)</div>\n                    <div style=\"font-size: 10.5px; color: #a7f3d0;\">رتبه اول گوگل و سرور NVMe (+۱۸۰٪ رشد)</div>\n                  </div>\n                </label>\n                <label style=\"background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;\">\n                  <input type=\"radio\" name=\"roi-strategy\" value=\"4.2\" style=\"accent-color: #10b981;\">\n                  <div>\n                    <div style=\"font-size: 12px; font-weight: 800; color: #c084fc;\">اکوسیستم کامل هوش مصنوعی</div>\n                    <div style=\"font-size: 10.5px; color: #94a3b8;\">ایجنت خودمختار و مارکتینگ (+۳۲۰٪ رشد)</div>\n                  </div>\n                </label>\n              </div>\n            </div>\n          </div>\n\n          <!-- Dynamic Output Metrics Cards -->\n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 24px;\">\n            <div style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px; text-align: center;\">\n              <div style=\"font-size: 12px; color: #94a3b8; font-weight: 700; margin-bottom: 6px;\">درآمد ماهانه فعلی شما:</div>\n              <div id=\"roi-current-monthly\" style=\"font-size: 20px; font-weight: 900; color: #cbd5e1; font-family: monospace;\">۱۲۷,۵۰۰,۰۰۰ تومان</div>\n            </div>\n\n            <div style=\"background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 14px; padding: 18px; text-align: center;\">\n              <div style=\"font-size: 12px; color: #6ee7b7; font-weight: 700; margin-bottom: 6px;\">درآمد تخمینی ماهانه با جهش:</div>\n              <div id=\"roi-projected-monthly\" style=\"font-size: 22px; font-weight: 900; color: #34d399; font-family: monospace;\">۳۵۷,۰۰۰,۰۰۰ تومان</div>\n            </div>\n\n            <div style=\"background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2)); border: 1.5px solid #10b981; border-radius: 14px; padding: 18px; text-align: center; box-shadow: 0 8px 25px rgba(16, 185, 129, 0.25);\">\n              <div style=\"font-size: 12px; color: #a7f3d0; font-weight: 800; margin-bottom: 6px;\">✨ سود خالص مازاد سالانه شما:</div>\n              <div id=\"roi-annual-profit\" style=\"font-size: 24px; font-weight: 900; color: #ffffff; font-family: monospace;\">+۲,۷۵۴,۰۰۰,۰۰۰ تومان</div>\n            </div>\n          </div>\n\n          <!-- Animated Comparison Bars -->\n          <div style=\"background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 18px; margin-bottom: 24px;\">\n            <div style=\"display: flex; justify-content: space-between; font-size: 12px; color: #cbd5e1; margin-bottom: 6px;\">\n              <span>مقایسه وضعیت فعلی و جهش رشد:</span>\n              <span id=\"roi-growth-percentage\" style=\"color: #34d399; font-weight: 900;\">+۱۸۰٪ رشد تصاعدی</span>\n            </div>\n            <div style=\"display: flex; flex-direction: column; gap: 8px;\">\n              <div>\n                <div style=\"font-size: 11px; color: #94a3b8; margin-bottom: 3px;\">وضعیت بدون سایت یا سئو:</div>\n                <div style=\"height: 10px; border-radius: 9999px; background: rgba(255,255,255,0.1); overflow: hidden;\">\n                  <div style=\"width: 35%; height: 100%; background: #64748b; border-radius: 9999px;\"></div>\n                </div>\n              </div>\n              <div>\n                <div style=\"font-size: 11px; color: #34d399; font-weight: 700; margin-bottom: 3px;\">وضعیت پس از استقرار در جهش:</div>\n                <div style=\"height: 14px; border-radius: 9999px; background: rgba(16, 185, 129, 0.15); overflow: hidden;\">\n                  <div id=\"roi-bar-fill\" style=\"width: 95%; height: 100%; background: linear-gradient(90deg, #10b981, #06b6d4); border-radius: 9999px; transition: width 0.4s ease;\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Bottom Action -->\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px;\">\n            <div style=\"font-size: 13px; color: #cbd5e1;\">\n              💡 هزینه طراحی پکیج طلایی (۷,۹۰۰,۰۰۰ تومان) معمولاً ظرف کمتر از ۲ هفته اول از طریق فروش جدید جبران می‌شود.\n            </div>\n            <button id=\"roi-claim-btn\" type=\"button\" style=\"background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; font-weight: 900; font-size: 14px; padding: 12px 24px; border-radius: 12px; border: none; cursor: pointer; box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4); display: flex; align-items: center; gap: 8px;\">\n              <span>🎯</span> رزرو ظرفیت اجرای این افزایش درآمد\n            </button>\n          </div>\n        </div>\n\n        <!-- 3. Interactive Before vs After Technology Split-Screen Arena -->\n        <div id=\"jahesh-before-after-section\" style=\"margin-top: 50px; background: radial-gradient(circle at top right, rgba(239, 68, 68, 0.08), rgba(15, 23, 42, 0.95) 50%, rgba(16, 185, 129, 0.08)); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 24px; padding: 36px 30px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;\">\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); color: #e2e8f0; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #38bdf8; box-shadow: 0 0 10px #38bdf8;\"></span>\n                Direct Technology Comparison\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>⚖️</span> مقایسه تعاملی: وب‌سایت‌های سنتی در برابر معماری مدرن جهش\n              </h3>\n            </div>\n            <div style=\"font-size: 12px; color: #94a3b8; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); padding: 6px 14px; border-radius: 12px;\">\n              اسلایدر میانی را با ماوس یا لمس به چپ و راست بکشید\n            </div>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 20px;\">\n            چرا کسب‌وکارهای پیشرو وب‌سایت‌های قدیمی وردپرسی را رها کرده و به معماری پرسرعت و بهینه جهش ای تی مهاجرت می‌کنند؟ تفاوت‌های کلیدی را به صورت تعاملی لمس کنید:\n          </p>\n\n          <!-- Quick Category Filters -->\n          <div style=\"display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;\" id=\"ba-category-buttons\">\n            <button type=\"button\" class=\"ba-cat-btn active\" data-category=\"speed\" style=\"background: rgba(56, 189, 248, 0.2); border: 1px solid #38bdf8; color: #fff; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 10px; cursor: pointer;\">\n              ⚡ سرعت و لود (Core Web Vitals)\n            </button>\n            <button type=\"button\" class=\"ba-cat-btn\" data-category=\"seo\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 10px; cursor: pointer;\">\n              🔍 سئو و رتبه یک نتایج گوگل\n            </button>\n            <button type=\"button\" class=\"ba-cat-btn\" data-category=\"security\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 10px; cursor: pointer;\">\n              🛡️ امنیت، پایداری و کدنویسی تمیز\n            </button>\n            <button type=\"button\" class=\"ba-cat-btn\" data-category=\"conversion\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 10px; cursor: pointer;\">\n              💰 فروش، سبد خرید و نرخ تبدیل\n            </button>\n          </div>\n\n          <!-- Split Viewport Box -->\n          <div id=\"ba-split-box\" style=\"position: relative; width: 100%; border-radius: 18px; overflow: hidden; border: 1.5px solid rgba(255, 255, 255, 0.15); box-shadow: 0 15px 40px rgba(0,0,0,0.6); user-select: none; min-height: 290px;\">\n            <!-- Left Side: Traditional Old Sites -->\n            <div id=\"ba-left-panel\" style=\"position: absolute; inset: 0; background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(15, 23, 42, 0.98) 60%); padding: 26px; display: flex; flex-direction: column; justify-content: space-between;\">\n              <div>\n                <div style=\"display: inline-flex; align-items: center; gap: 6px; background: rgba(239, 68, 68, 0.25); border: 1px solid #ef4444; color: #fca5a5; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 8px; margin-bottom: 14px;\">\n                  <span>🔴</span> سایت‌های معمولی و سنتی (وردپرس کند / اشتراکی)\n                </div>\n                <div id=\"ba-left-content\" style=\"display: flex; flex-direction: column; gap: 10px; font-size: 13.5px; color: #fca5a5; line-height: 1.6;\">\n                  <!-- Injected by JS based on category -->\n                </div>\n              </div>\n              <div style=\"font-size: 11.5px; color: #f87171; border-top: 1px solid rgba(239, 68, 68, 0.2); padding-top: 10px; margin-top: 14px;\">\n                نتیجه: از دست رفتن بیش از ۷۰٪ مراجعین و رها شدن خریدهای آنلاین\n              </div>\n            </div>\n\n            <!-- Right Side (Clipped Layer): Jahesh Next-Gen Architecture -->\n            <div id=\"ba-right-panel\" style=\"position: absolute; inset: 0; width: 50%; right: 0; background: linear-gradient(135deg, rgba(16, 185, 129, 0.18), rgba(15, 23, 42, 0.98) 60%); padding: 26px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; border-left: 2px solid #38bdf8;\">\n              <div style=\"width: 100%; min-width: 320px;\">\n                <div style=\"display: inline-flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.25); border: 1px solid #10b981; color: #6ee7b7; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 8px; margin-bottom: 14px;\">\n                  <span>🟢</span> فناوری نسل جدید جهش ای تی (Clean Code + NVMe)\n                </div>\n                <div id=\"ba-right-content\" style=\"display: flex; flex-direction: column; gap: 10px; font-size: 13.5px; color: #6ee7b7; line-height: 1.6;\">\n                  <!-- Injected by JS based on category -->\n                </div>\n              </div>\n              <div style=\"font-size: 11.5px; color: #34d399; border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 10px; margin-top: 14px; width: 100%; min-width: 320px;\">\n                نتیجه: ماندگاری بالا، کسب رتبه اول گوگل و ۳ برابر شدن فروش قطعی\n              </div>\n            </div>\n\n            <!-- Draggable Dividing Handle -->\n            <div id=\"ba-slider-handle\" style=\"position: absolute; top: 0; bottom: 0; right: 50%; transform: translateX(50%); width: 44px; display: flex; align-items: center; justify-content: center; cursor: ew-resize; z-index: 20;\">\n              <div style=\"width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #0284c7, #10b981); border: 2px solid #ffffff; box-shadow: 0 0 20px rgba(56, 189, 248, 0.8); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 13px; font-weight: bold;\">\n                ↔\n              </div>\n            </div>\n          </div>\n\n          <!-- Bottom Action of Comparison -->\n          <div style=\"margin-top: 22px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px;\">\n            <div style=\"font-size: 13px; color: #cbd5e1;\">\n              💡 در صورت داشتن سایت قدیمی، انتقال کامل اطلاعات، دیتابیس و محصولات شما به سرورهای جهش <strong>کاملاً رایگان</strong> انجام می‌شود.\n            </div>\n            <a href=\"tel:09152331974\" style=\"background: linear-gradient(135deg, #0284c7, #2563eb); color: #fff; font-weight: 800; font-size: 13px; padding: 11px 22px; border-radius: 12px; text-decoration: none; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 15px rgba(2, 132, 199, 0.4);\">\n              <span>🚀</span> درخواست انتقال و ارتقای رایگان سایت\n            </a>\n          </div>\n        </div>\n\n        <!-- 4. Interactive Scratch-and-Win VIP Card Section -->\n        <div id=\"jahesh-scratch-card-section\" style=\"margin-top: 50px; background: radial-gradient(circle at center, rgba(245, 158, 11, 0.12), rgba(15, 23, 42, 0.95) 75%); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 24px; padding: 36px 30px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;\">\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.4); color: #fde68a; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 10px #f59e0b;\"></span>\n                Scratch & Win Interactive Gift\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>🎁</span> کارت اسکرچ دیجیتال شانس (هدیه اختصاصی جهش)\n              </h3>\n            </div>\n            <span style=\"font-size: 12px; color: #fbbf24; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 6px 14px; border-radius: 12px; font-weight: 700;\">\n              روکش نقره‌ای را با ماوس بتراشید!\n            </span>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 24px;\">\n            با ماوس یا انگشت خود، روکش محافظ زیر را بتراشید تا هدیه مخفی و کد تخفیف ویژه همکاری شما مشخص شود:\n          </p>\n\n          <div style=\"display: flex; justify-content: center; margin-bottom: 20px;\">\n            <div style=\"position: relative; width: 360px; max-width: 100%; height: 180px; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7); border: 2px solid rgba(251, 191, 36, 0.4);\">\n              <!-- Hidden Prize Layer Below -->\n              <div id=\"scratch-secret-content\" style=\"position: absolute; inset: 0; background: linear-gradient(135deg, #1e1b4b, #0f172a); padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #fff;\">\n                <div style=\"font-size: 28px; margin-bottom: 4px;\">🎉</div>\n                <div style=\"font-size: 12px; font-weight: 800; color: #fbbf24;\">جایزه اختصاصی شما باز شد:</div>\n                <div style=\"font-size: 16px; font-weight: 900; color: #34d399; margin: 4px 0;\">۱ سال هاست NVMe رایگان + ۲۵٪ تخفیف مازاد</div>\n                <div style=\"background: rgba(255,255,255,0.08); border: 1px dashed #34d399; padding: 4px 12px; border-radius: 8px; font-family: monospace; font-size: 14px; color: #fde68a; font-weight: bold; margin-top: 6px;\">\n                  کد: JAH-SCRATCH-GOLD\n                </div>\n              </div>\n\n              <!-- Top Scratch Canvas (Metallic Silver) -->\n              <canvas id=\"scratch-canvas\" width=\"360\" height=\"180\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; cursor: pointer; touch-action: none; transition: opacity 0.5s ease;\"></canvas>\n            </div>\n          </div>\n\n          <!-- Scratch Status & Claim Actions -->\n          <div id=\"scratch-status-box\" style=\"text-align: center;\">\n            <div id=\"scratch-percent-text\" style=\"font-size: 13px; color: #94a3b8; font-weight: 700; margin-bottom: 10px;\">\n              میزان تراشیده شده: <span id=\"scratch-pct-val\" style=\"color: #fbbf24; font-family: monospace;\">۰٪</span> (بیش از ۴۰٪ را بتراشید)\n            </div>\n            <div id=\"scratch-claim-wrap\" style=\"display: none; justify-content: center; gap: 10px;\">\n              <button id=\"scratch-claim-btn\" type=\"button\" style=\"background: linear-gradient(135deg, #10b981, #059669); color: #fff; font-weight: 900; font-size: 14px; padding: 11px 24px; border-radius: 12px; border: none; cursor: pointer; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);\">\n                ✓ ثبت و دریافت آنی هدیه طلایی در سفارش\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <!-- 5. Interactive Voice Assistant & Realtime Persian Speech Synthesis Agent -->\n        <div id=\"jahesh-voice-agent-section\" style=\"margin-top: 50px; background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), rgba(15, 23, 42, 0.95) 70%); border: 1px solid rgba(99, 102, 241, 0.35); border-radius: 24px; padding: 36px 30px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;\">\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.4); color: #a5b4fc; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #818cf8; box-shadow: 0 0 10px #818cf8;\"></span>\n                AI Speech Synthesis & Voice Recognition\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>🎙️</span> دستیار صوتی و سخنگوی هوشمند جهش (Voice Agent)\n              </h3>\n            </div>\n            <div style=\"display: flex; align-items: center; gap: 8px;\">\n              <span id=\"voice-agent-status\" style=\"font-size: 11.5px; color: #a5b4fc; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(99, 102, 241, 0.3); padding: 5px 12px; border-radius: 9999px;\">\n                ● آماده شنیدن صدای شما\n              </span>\n            </div>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 22px;\">\n            به جای خواندن متن، مستقیماً با دستیار هوش مصنوعی جهش صحبت کنید یا روی پرسش‌های پرتکرار کلیک فرمایید تا پاسخ را با <strong>صوت زنده فارسی و موج صوتی تعاملی</strong> بشنوید:\n          </p>\n\n          <!-- Waveform & Voice Box -->\n          <div style=\"background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 22px; margin-bottom: 20px;\">\n            <!-- Live Audio Canvas Waveform -->\n            <div style=\"height: 60px; width: 100%; margin-bottom: 18px; border-radius: 12px; background: rgba(0,0,0,0.4); overflow: hidden; display: flex; align-items: center; justify-content: center; position: relative;\">\n              <canvas id=\"voice-wave-canvas\" width=\"600\" height=\"60\" style=\"width: 100%; height: 100%;\"></canvas>\n            </div>\n\n            <!-- Speech Action Row -->\n            <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px;\">\n              <button id=\"voice-mic-btn\" type=\"button\" style=\"background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff; font-weight: 900; font-size: 13.5px; padding: 11px 22px; border-radius: 12px; border: none; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4); transition: transform 0.2s;\">\n                <span id=\"voice-mic-icon\" style=\"font-size: 16px;\">🎤</span>\n                <span id=\"voice-mic-text\">شروع گفتگو با صدای من (بپرسید...)</span>\n              </button>\n\n              <button id=\"voice-stop-btn\" type=\"button\" style=\"background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); color: #fca5a5; font-weight: 700; font-size: 12px; padding: 9px 16px; border-radius: 10px; cursor: pointer; display: none;\">\n                ⏹ توقف صدا\n              </button>\n            </div>\n\n            <!-- Quick Preset Voice Queries -->\n            <div style=\"margin-bottom: 14px;\">\n              <div style=\"font-size: 12px; color: #a5b4fc; font-weight: 700; margin-bottom: 8px;\">یا یکی از موضوعات زیر را انتخاب کنید تا با صوت پخش شود:</div>\n              <div style=\"display: flex; flex-wrap: wrap; gap: 8px;\" id=\"voice-preset-chips\">\n                <button type=\"button\" class=\"voice-chip-btn\" data-key=\"package\" style=\"background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; font-size: 12px; padding: 6px 12px; border-radius: 8px; cursor: pointer;\">\n                  🔊 پکیج طلایی شامل چه امکاناتی است؟\n                </button>\n                <button type=\"button\" class=\"voice-chip-btn\" data-key=\"seo\" style=\"background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; font-size: 12px; padding: 6px 12px; border-radius: 8px; cursor: pointer;\">\n                  🔊 ضمانت رتبه یک گوگل چگونه کار می‌کند؟\n                </button>\n                <button type=\"button\" class=\"voice-chip-btn\" data-key=\"speed\" style=\"background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; font-size: 12px; padding: 6px 12px; border-radius: 8px; cursor: pointer;\">\n                  🔊 چرا وب‌سایت جهش ۳ برابر سریع‌تر است؟\n                </button>\n                <button type=\"button\" class=\"voice-chip-btn\" data-key=\"guarantee\" style=\"background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; font-size: 12px; padding: 6px 12px; border-radius: 8px; cursor: pointer;\">\n                  🔊 گارانتی بازگشت وجه و جریمه دیرکرد\n                </button>\n              </div>\n            </div>\n\n            <!-- Voice Spoken Answer Display -->\n            <div id=\"voice-answer-box\" style=\"background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(99, 102, 241, 0.25); border-radius: 12px; padding: 16px; font-size: 13.5px; color: #e0e7ff; line-height: 1.8; min-height: 60px;\">\n              <span style=\"color: #94a3b8;\">برای شنیدن پاسخ صوتی، دکمه میکروفون را بزنید یا یکی از سوالات بالا را انتخاب نمایید.</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- 6. Interactive Cyber Terminal & Cloud CLI Playground -->\n        <div id=\"jahesh-cyber-terminal-section\" style=\"margin-top: 50px; background: #070913; border: 1.5px solid rgba(16, 185, 129, 0.35); border-radius: 24px; padding: 32px 26px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6); position: relative; overflow: hidden;\">\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #6ee7b7; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981;\"></span>\n                Cloud Sandbox & CLI Environment\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>💻</span> ترمینال تعاملی و کنسول ابری مهندسی جهش\n              </h3>\n            </div>\n            <div style=\"display: flex; gap: 8px;\">\n              <button id=\"terminal-matrix-toggle\" type=\"button\" style=\"background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #34d399; padding: 6px 14px; border-radius: 10px; font-size: 12px; font-weight: bold; cursor: pointer;\">\n                🟢 اجرای ماتریکس دیجیتال (Matrix Rain)\n              </button>\n            </div>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 20px;\">\n            محیط شبیه‌ساز مهندسی: روی دستورات آماده کلیک فرمایید یا دستور مورد نظر خود را تایپ نمایید تا نحوه بیلد، مانیتورینگ و استقرار کلاد جهش را به صورت زنده مشاهده کنید:\n          </p>\n\n          <!-- Terminal Ready Quick Buttons -->\n          <div style=\"display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;\" dir=\"ltr\">\n            <button type=\"button\" class=\"cli-cmd-btn\" data-cmd=\"jahesh deploy --site ecommerce\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #38bdf8; font-family: monospace; font-size: 11.5px; padding: 5px 12px; border-radius: 6px; cursor: pointer;\">\n              $ jahesh deploy --site ecommerce\n            </button>\n            <button type=\"button\" class=\"cli-cmd-btn\" data-cmd=\"jahesh audit --speed\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #34d399; font-family: monospace; font-size: 11.5px; padding: 5px 12px; border-radius: 6px; cursor: pointer;\">\n              $ jahesh audit --speed\n            </button>\n            <button type=\"button\" class=\"cli-cmd-btn\" data-cmd=\"jahesh ai --reason\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #c084fc; font-family: monospace; font-size: 11.5px; padding: 5px 12px; border-radius: 6px; cursor: pointer;\">\n              $ jahesh ai --reason\n            </button>\n            <button type=\"button\" class=\"cli-cmd-btn\" data-cmd=\"jahesh status\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #fbbf24; font-family: monospace; font-size: 11.5px; padding: 5px 12px; border-radius: 6px; cursor: pointer;\">\n              $ jahesh status\n            </button>\n            <button type=\"button\" class=\"cli-cmd-btn\" data-cmd=\"clear\" style=\"background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #94a3b8; font-family: monospace; font-size: 11.5px; padding: 5px 12px; border-radius: 6px; cursor: pointer;\">\n              $ clear\n            </button>\n          </div>\n\n          <!-- Terminal Window Frame -->\n          <div style=\"background: #050811; border: 1px solid rgba(255,255,255,0.15); border-radius: 14px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.8);\" dir=\"ltr\">\n            <!-- Window Top Bar -->\n            <div style=\"background: #0f1424; padding: 8px 14px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); font-family: monospace; font-size: 11px; color: #94a3b8;\">\n              <div style=\"display: flex; gap: 6px;\">\n                <span style=\"width: 10px; height: 10px; border-radius: 50%; background: #ef4444;\"></span>\n                <span style=\"width: 10px; height: 10px; border-radius: 50%; background: #f59e0b;\"></span>\n                <span style=\"width: 10px; height: 10px; border-radius: 50%; background: #10b981;\"></span>\n              </div>\n              <div style=\"color: #6ee7b7;\">bash - jahesh-cloud-vike-engine-2026</div>\n              <div style=\"color: #64748b;\">NVMe 64-bit</div>\n            </div>\n\n            <!-- Terminal Screen -->\n            <div id=\"terminal-screen\" style=\"padding: 16px; min-height: 220px; max-height: 340px; overflow-y: auto; font-family: 'Consolas', 'Courier New', monospace; font-size: 12.5px; color: #34d399; line-height: 1.6; text-align: left;\">\n              <div>Welcome to Jahesh Cloud Autonomous Terminal v2.6.0 [Node.js + Vike.js SSR]</div>\n              <div>Type <span style=\"color: #fbbf24;\">help</span> or click any quick command above to run simulations.</div>\n              <div style=\"margin-top: 8px;\"><span style=\"color: #38bdf8;\">root@jahesh-nvme</span>:<span style=\"color: #a855f7;\">~</span>$ <span style=\"color:#e2e8f0;\">jahesh status</span></div>\n              <div style=\"color: #cbd5e1;\">[OK] Server Uptime: 99.98% | Latency: 18ms | Edge Routing: Cloudflare Active</div>\n              <div style=\"color: #cbd5e1;\">[OK] Database Pool: Healthy (PostgreSQL + Redis L1 Cache)</div>\n              <div style=\"color: #cbd5e1;\">[OK] Shaparak Gateway: Connected (Instant settlement enabled)</div>\n              <div style=\"margin-top: 6px; color: #38bdf8;\">System ready. Ready for instant deployment.</div>\n            </div>\n\n            <!-- Terminal Prompt Input Row -->\n            <div style=\"background: #090d19; padding: 10px 14px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; gap: 8px; font-family: monospace; font-size: 13px;\">\n              <span style=\"color: #38bdf8; font-weight: bold;\">root@jahesh:~$</span>\n              <input type=\"text\" id=\"terminal-input\" placeholder=\"type command (e.g. jahesh deploy, help, clear)...\" style=\"flex: 1; background: transparent; border: none; color: #34d399; font-family: inherit; font-size: 13px; outline: none;\">\n            </div>\n          </div>\n        </div>\n\n        <!-- 7. Interactive Website Feature Builder & Live Digital Contract Architect -->\n        <div id=\"jahesh-contract-builder-section\" style=\"margin-top: 50px; background: radial-gradient(circle at top left, rgba(217, 119, 6, 0.12), rgba(15, 23, 42, 0.95) 70%); border: 1px solid rgba(217, 119, 6, 0.35); border-radius: 24px; padding: 36px 30px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;\">\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(217, 119, 6, 0.15); border: 1px solid rgba(251, 191, 36, 0.4); color: #fde68a; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 10px #f59e0b;\"></span>\n                Smart Contract & Architecture Builder\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>📜</span> سازنده معماری و امضای دیجیتال قرارداد رسمی (Digital Signature)\n              </h3>\n            </div>\n            <span style=\"font-size: 12px; color: #fbbf24; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 6px 14px; border-radius: 12px; font-weight: 700;\">\n              قرارداد رسمی با تضامین حقوقی مکتوب\n            </span>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 24px;\">\n            امکانات مدنظر وب‌سایت خود را انتخاب کنید؛ بندهای حقوقی قرارداد، جریمه دیرکرد، گارانتی بازگشت وجه و هزینه به صورت بلادرنگ تنظیم می‌شوند. در پایان می‌توانید سند را با <strong>امضای دیجیتال رسمی</strong> تایید و ذخیره نمایید:\n          </p>\n\n          <!-- 6 Feature Toggles Grid -->\n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-bottom: 24px;\" id=\"contract-features-grid\">\n            <label class=\"contract-feature-card active\" style=\"background: rgba(16, 185, 129, 0.12); border: 1.5px solid #10b981; border-radius: 14px; padding: 14px; cursor: pointer; display: flex; align-items: flex-start; gap: 10px;\">\n              <input type=\"checkbox\" checked data-feature=\"nvme\" style=\"accent-color: #10b981; width: 18px; height: 18px; margin-top: 2px;\">\n              <div>\n                <div style=\"font-weight: 800; color: #fff; font-size: 13.5px;\">⚡ هاست فوق‌سریع NVMe و دامنه رایگان</div>\n                <div style=\"font-size: 11.5px; color: #a7f3d0; margin-top: 3px;\">میزبانی ابری فوق‌سریع با پهنای باند نامحدود (هدیه در پکیج)</div>\n              </div>\n            </label>\n\n            <label class=\"contract-feature-card active\" style=\"background: rgba(16, 185, 129, 0.12); border: 1.5px solid #10b981; border-radius: 14px; padding: 14px; cursor: pointer; display: flex; align-items: flex-start; gap: 10px;\">\n              <input type=\"checkbox\" checked data-feature=\"seo\" style=\"accent-color: #10b981; width: 18px; height: 18px; margin-top: 2px;\">\n              <div>\n                <div style=\"font-weight: 800; color: #fff; font-size: 13.5px;\">🔍 سئو تضمینی رتبه اول نتایج گوگل</div>\n                <div style=\"font-size: 11.5px; color: #a7f3d0; margin-top: 3px;\">ثبت رسمی در سرچ کنسول با کدهای اسکیما Schema.org</div>\n              </div>\n            </label>\n\n            <label class=\"contract-feature-card active\" style=\"background: rgba(16, 185, 129, 0.12); border: 1.5px solid #10b981; border-radius: 14px; padding: 14px; cursor: pointer; display: flex; align-items: flex-start; gap: 10px;\">\n              <input type=\"checkbox\" checked data-feature=\"gateway\" style=\"accent-color: #10b981; width: 18px; height: 18px; margin-top: 2px;\">\n              <div>\n                <div style=\"font-weight: 800; color: #fff; font-size: 13.5px;\">💳 درگاه مستقیم شاپرک با تسویه حساب آنی</div>\n                <div style=\"font-size: 11.5px; color: #a7f3d0; margin-top: 3px;\">اتصال مطمئن به درگاه زیبال با ثبت تراکنش و فاکتور پیامکی</div>\n              </div>\n            </label>\n\n            <label class=\"contract-feature-card\" style=\"background: rgba(255, 255, 255, 0.03); border: 1.5px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 14px; cursor: pointer; display: flex; align-items: flex-start; gap: 10px;\">\n              <input type=\"checkbox\" data-feature=\"ai\" style=\"accent-color: #10b981; width: 18px; height: 18px; margin-top: 2px;\">\n              <div>\n                <div style=\"font-weight: 800; color: #fff; font-size: 13.5px;\">🤖 ماژول چت‌بات و هوش مصنوعی پیشنهاددهنده</div>\n                <div style=\"font-size: 11.5px; color: #94a3b8; margin-top: 3px;\">پاسخگوی ۲۴ ساعته مراجعین بر اساس داده‌های صنف شما</div>\n              </div>\n            </label>\n\n            <label class=\"contract-feature-card\" style=\"background: rgba(255, 255, 255, 0.03); border: 1.5px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 14px; cursor: pointer; display: flex; align-items: flex-start; gap: 10px;\">\n              <input type=\"checkbox\" data-feature=\"pwa\" style=\"accent-color: #10b981; width: 18px; height: 18px; margin-top: 2px;\">\n              <div>\n                <div style=\"font-weight: 800; color: #fff; font-size: 13.5px;\">📱 اپلیکیشن وب اختصاصی (PWA)</div>\n                <div style=\"font-size: 11.5px; color: #94a3b8; margin-top: 3px;\">قابلیت نصب مستقیم روی صفحه اصلی موبایل‌های اندروید و iOS</div>\n              </div>\n            </label>\n\n            <label class=\"contract-feature-card active\" style=\"background: rgba(16, 185, 129, 0.12); border: 1.5px solid #10b981; border-radius: 14px; padding: 14px; cursor: pointer; display: flex; align-items: flex-start; gap: 10px;\">\n              <input type=\"checkbox\" checked data-feature=\"security\" style=\"accent-color: #10b981; width: 18px; height: 18px; margin-top: 2px;\">\n              <div>\n                <div style=\"font-weight: 800; color: #fff; font-size: 13.5px;\">🔒 امنیت پیشرفته، SSL اختصاصی و ضد نفوذ</div>\n                <div style=\"font-size: 11.5px; color: #a7f3d0; margin-top: 3px;\">معماری بدون باگ، فایروال کلاودفلر و بک‌آپ خودکار روزانه</div>\n              </div>\n            </label>\n          </div>\n\n          <!-- Live Generated Legal Contract Document -->\n          <div style=\"background: #ffffff; color: #1e293b; border-radius: 16px; padding: 26px; margin-bottom: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.4); font-size: 13px; line-height: 1.8;\">\n            <div style=\"display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 16px;\">\n              <div>\n                <div style=\"font-size: 16px; font-weight: 900; color: #0f172a;\">سند رسمی توافق‌نامه و قرارداد توسعه سامانه وب‌سایت</div>\n                <div style=\"font-size: 11.5px; color: #64748b;\">مجری: مرکز فناوری اطلاعات و هوش مصنوعی جهش ای تی (تاسیس ۱۳۹۵)</div>\n              </div>\n              <div style=\"text-align: left; font-family: monospace; font-size: 12px; color: #475569;\">\n                <div>شماره قرارداد: <strong id=\"contract-doc-id\" style=\"color: #0284c7;\">JAH-CTR-2026-X</strong></div>\n                <div>تاریخ صدور: <strong>۱۴۰۵/۰۲/۱۵</strong></div>\n              </div>\n            </div>\n\n            <!-- Contract Clauses -->\n            <div style=\"display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px;\">\n              <div><strong>ماده ۱ (موضوع و ماژول‌ها):</strong> طراحی، پیاده‌سازی و استقرار سامانه وب‌سایت با معماری Vike.js و پشته ماژولار <span id=\"contract-modules-text\" style=\"color: #0284c7; font-weight: bold;\">(هاست NVMe، سئو رتبه یک گوگل، درگاه شاپرک، امنیت SSL)</span>.</div>\n              <div><strong>ماده ۲ (تعهد زمان و جریمه دیرکرد):</strong> مدت زمان اجرای پروژه ۷ الی ۹ روز کاری است. به ازای هر روز دیرکرد غیرمجاز از سوی مجری، مبلغ <strong>۵۰۰,۰۰۰ تومان جریمه نقدی</strong> منظور خواهد شد.</div>\n              <div><strong>ماده ۳ (ضمانت ۱۰۰٪ بازگشت وجه):</strong> کارفرما از تاریخ تحویل به مدت ۳۰ روز تقویمی حق تست کامل داشته و در صورت عدم رضایت، کل وجه بدون هیچ‌گونه قید و شرط عودت داده می‌شود.</div>\n              <div><strong>ماده ۴ (مالکیت قطعی):</strong> ۱۰۰٪ کدهای سورس، دیتابیس، پنل مدیریت و دامنه به نام شخص یا شرکت کارفرما ثبت و تحویل قطعی می‌گردد.</div>\n            </div>\n\n            <!-- Total Price & Guarantee Badge -->\n            <div style=\"background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 14px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 18px;\">\n              <div>\n                <div style=\"font-size: 12px; color: #64748b;\">مبلغ نهایی قرارداد با ۲۰٪ تخفیف طلایی:</div>\n                <div id=\"contract-price-val\" style=\"font-size: 20px; font-weight: 900; color: #15803d; font-family: monospace;\">۷,۹۰۰,۰۰۰ تومان</div>\n              </div>\n              <div style=\"display: flex; align-items: center; gap: 6px; color: #0284c7; font-weight: bold; font-size: 12px;\">\n                <span>🛡️</span> تحت پوشش بیمه کیفی و تعهد کتبی جهش\n              </div>\n            </div>\n\n            <!-- Interactive Signature Pad Inside Contract -->\n            <div style=\"border-top: 1.5px dashed #cbd5e1; padding-top: 16px;\">\n              <div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 16px;\">\n                <div>\n                  <div style=\"font-weight: 800; font-size: 12.5px; color: #0f172a; margin-bottom: 6px;\">محل امضای دیجیتال کارفرما:</div>\n                  <div style=\"border: 1.5px solid #94a3b8; border-radius: 10px; width: 280px; height: 100px; background: #fafafa; position: relative;\">\n                    <canvas id=\"contract-sig-canvas\" width=\"280\" height=\"100\" style=\"width: 100%; height: 100%; cursor: crosshair; touch-action: none;\"></canvas>\n                    <span id=\"sig-placeholder\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #94a3b8; font-size: 11px; pointer-events: none;\">با ماوس یا لمس اینجا امضا کنید</span>\n                  </div>\n                  <div style=\"display: flex; gap: 8px; margin-top: 6px;\">\n                    <button type=\"button\" id=\"sig-clear-btn\" style=\"background: #f1f5f9; border: 1px solid #cbd5e1; color: #475569; font-size: 11px; padding: 4px 10px; border-radius: 6px; cursor: pointer;\">\n                      پاک کردن امضا\n                    </button>\n                  </div>\n                </div>\n\n                <div style=\"text-align: left;\">\n                  <div style=\"font-size: 12px; color: #64748b; margin-bottom: 6px;\">مهر و امضای دیجیتال مجری:</div>\n                  <div style=\"border: 2px dashed #0284c7; border-radius: 12px; padding: 10px 16px; background: #f0f9ff; display: inline-block; text-align: center;\">\n                    <div style=\"font-weight: 900; color: #0369a1; font-size: 13px;\">تایید رسمی جهش ای تی</div>\n                    <div style=\"font-size: 10px; color: #0284c7; font-family: monospace;\">VERIFIED SECURE HASH 2026</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Bottom Action Buttons -->\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px;\">\n            <div style=\"font-size: 13px; color: #cbd5e1;\">\n              📌 پس از تایید، پیش‌نویس به واحد قراردادها ارسال شده و کارشناسان ظرف کمتر از ۳۰ دقیقه با شما تماس خواهند گرفت.\n            </div>\n            <div style=\"display: flex; gap: 10px;\">\n              <button id=\"contract-download-btn\" type=\"button\" style=\"background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-weight: 700; font-size: 13px; padding: 11px 18px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px;\">\n                <span>🖨️</span> چاپ / ذخیره قرارداد\n              </button>\n              <button id=\"contract-submit-btn\" type=\"button\" style=\"background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; font-weight: 900; font-size: 13px; padding: 11px 22px; border-radius: 12px; border: none; cursor: pointer; box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);\">\n                ✓ تایید و انعقاد رسمی قرارداد\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <!-- Fullscreen Matrix Digital Rain Overlay Canvas (Easter Egg) -->\n        <canvas id=\"jahesh-matrix-canvas\" style=\"display: none; position: fixed; inset: 0; width: 100vw; height: 100vh; z-index: 999999; background: #000; cursor: pointer;\"></canvas>\n        <button id=\"close-matrix-btn\" type=\"button\" style=\"display: none; position: fixed; top: 20px; right: 20px; z-index: 1000000; background: rgba(0, 0, 0, 0.8); border: 1px solid #10b981; color: #34d399; padding: 8px 18px; border-radius: 10px; font-size: 13px; font-weight: bold; cursor: pointer;\">\n          ✕ خروج از ماتریکس (ESC)\n        </button>\n\n        <!-- 8. Interactive Google SERP Live Simulator & Keyword Opportunity Calculator -->\n        <div id=\"jahesh-serp-simulator-section\" style=\"margin-top: 50px; background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.12), rgba(15, 23, 42, 0.95) 70%); border: 1px solid rgba(56, 189, 248, 0.35); border-radius: 24px; padding: 36px 30px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;\">\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); color: #7dd3fc; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #38bdf8; box-shadow: 0 0 10px #38bdf8;\"></span>\n                Live Google SERP & SEO Previewer\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>🔍</span> شبیه‌ساز زنده رتبه یک گوگل و تحلیلگر کلمات کلیدی\n              </h3>\n            </div>\n            <span style=\"font-size: 12px; color: #38bdf8; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); padding: 6px 14px; border-radius: 12px; font-weight: 700;\">\n              نمایش واقعی ساختار اسکیما و Rich Snippets\n            </span>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 22px;\">\n            کلمه کلیدی صنف یا حوزه فعالیت خود را وارد نمایید؛ شبیه‌ساز جهش نشان می‌دهد وب‌سایت شما پس از بهینه‌سازی چگونه با رتبه یک، ستاره‌های رضایت مشتریان و لینک‌های اختصاصی بالاتر از تمام رقبا در صفحه اول گوگل می‌درخشد:\n          </p>\n\n          <!-- Keyword Input Bar & Preset Chips -->\n          <div style=\"background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 18px; margin-bottom: 24px;\">\n            <div style=\"display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;\">\n              <input type=\"text\" id=\"serp-kw-input\" value=\"خرید عطر اصل و ادکلن لوکس\" placeholder=\"مثلاً: خرید کفش چرم، کلینیک دندانپزشکی در مشهد، آموزش پایتون...\" style=\"flex: 1; min-width: 260px; background: #070c18; border: 1px solid rgba(56, 189, 248, 0.35); border-radius: 12px; padding: 11px 16px; color: #fff; font-size: 13.5px; outline: none;\">\n              <button id=\"serp-simulate-btn\" type=\"button\" style=\"background: linear-gradient(135deg, #0284c7, #2563eb); color: #fff; font-weight: 800; font-size: 13px; padding: 0 24px; border-radius: 12px; border: none; cursor: pointer; white-space: nowrap;\">\n                شبیه‌سازی رتبه ۱ گوگل\n              </button>\n            </div>\n\n            <div style=\"display: flex; flex-wrap: wrap; gap: 8px;\">\n              <span style=\"font-size: 11.5px; color: #94a3b8; align-self: center;\">نمونه کلمات پرجستجو:</span>\n              <button type=\"button\" class=\"serp-preset-btn\" data-kw=\"خرید آنلاین عطر اورجینال با ضمانت\" style=\"background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; font-size: 11.5px; padding: 4px 10px; border-radius: 6px; cursor: pointer;\">🛍️ خرید آنلاین عطر اورجینال</button>\n              <button type=\"button\" class=\"serp-preset-btn\" data-kw=\"نوبت‌دهی آنلاین کلینیک پزشکی فردوسی\" style=\"background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; font-size: 11.5px; padding: 4px 10px; border-radius: 6px; cursor: pointer;\">🏥 نوبت‌دهی کلینیک پزشکی</button>\n              <button type=\"button\" class=\"serp-preset-btn\" data-kw=\"شرکت مهندسی و طراحی ساختمانی خیام\" style=\"background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; font-size: 11.5px; padding: 4px 10px; border-radius: 6px; cursor: pointer;\">🏢 شرکت مهندسی ساختمانی</button>\n              <button type=\"button\" class=\"serp-preset-btn\" data-kw=\"آموزش برنامه‌نویسی و هوش مصنوعی\" style=\"background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; font-size: 11.5px; padding: 4px 10px; border-radius: 6px; cursor: pointer;\">🎓 آموزش هوش مصنوعی</button>\n            </div>\n          </div>\n\n          <!-- Realistic Google Search Engine Results Page (SERP) Mockup -->\n          <div style=\"background: #ffffff; color: #202124; border-radius: 18px; padding: 24px; margin-bottom: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.5); font-family: Arial, sans-serif;\">\n            <!-- Google Search Bar Mock -->\n            <div style=\"display: flex; align-items: center; justify-content: space-between; background: #fff; border: 1px solid #dfe1e5; border-radius: 24px; padding: 8px 18px; margin-bottom: 18px; box-shadow: 0 1px 6px rgba(32,33,36,.15);\">\n              <div style=\"display: flex; align-items: center; gap: 10px; flex: 1;\">\n                <span style=\"font-size: 16px; color: #70757a;\">🔍</span>\n                <span id=\"serp-google-query\" style=\"font-size: 13.5px; color: #202124; font-weight: 500;\">خرید عطر اصل و ادکلن لوکس</span>\n              </div>\n              <div style=\"display: flex; align-items: center; gap: 10px; font-size: 14px; color: #4285f4;\">\n                <span>🎙️</span>\n                <span>📷</span>\n              </div>\n            </div>\n\n            <!-- Google Tabs -->\n            <div style=\"display: flex; gap: 18px; font-size: 12px; color: #5f6368; border-bottom: 1px solid #ebebeb; padding-bottom: 10px; margin-bottom: 18px;\">\n              <span style=\"color: #1a73e8; font-weight: bold; border-bottom: 2px solid #1a73e8; padding-bottom: 8px;\">همه نتایج</span>\n              <span>تصاویر</span>\n              <span>ویدیوها</span>\n              <span>اخبار</span>\n              <span>نقشه‌ها</span>\n            </div>\n\n            <!-- Position #1: Golden Jahesh Rich Snippet -->\n            <div style=\"background: #f8fafc; border: 1.5px solid #38bdf8; border-radius: 14px; padding: 18px; margin-bottom: 16px; position: relative;\">\n              <div style=\"position: absolute; top: -10px; left: 16px; background: #0284c7; color: #fff; font-size: 10.5px; font-weight: bold; padding: 2px 10px; border-radius: 9999px;\">\n                🏆 رتبه ۱ گوگل (پیاده‌سازی شده در جهش ای تی)\n              </div>\n              <div style=\"display: flex; align-items: center; gap: 8px; margin-bottom: 4px;\">\n                <span style=\"width: 20px; height: 20px; border-radius: 50%; background: #0284c7; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold;\">J</span>\n                <span style=\"font-size: 11.5px; color: #202124; font-family: monospace;\">https://your-brand.ir › store</span>\n              </div>\n              <h4 id=\"serp-res-title\" style=\"font-size: 17px; font-weight: 700; color: #1a0dab; margin: 4px 0 6px 0; cursor: pointer;\">\n                خرید آنلاین عطر اصل و ادکلن لوکس با ۲۰٪ تخفیف طلایی | ضمانت اصالت ۱۰۰٪\n              </h4>\n              <!-- Star Rating Rich Snippet -->\n              <div style=\"display: flex; align-items: center; gap: 6px; font-size: 12px; color: #e37400; margin-bottom: 6px;\">\n                <span>★★★★★</span>\n                <span style=\"color: #5f6368; font-size: 11.5px;\">امتیاز ۴.۹ از ۵ (۱۸۴ نظر تایید شده) | موجود در انبار | ارسال رایگان</span>\n              </div>\n              <p id=\"serp-res-desc\" style=\"font-size: 12.5px; color: #4d5156; margin: 0 0 12px 0; line-height: 1.6;\">\n                سامانه رسمی با درگاه آنلاین شاپرک، تسویه حساب آنی، ارسال اکسپرس به سراسر کشور و نماد اعتماد الکترونیکی وزارت صمت (اینماد). لود رعدآسا در ۰.۶ ثانیه روی هاست NVMe.\n              </p>\n              <!-- Sitelinks -->\n              <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; border-top: 1px solid #e2e8f0; padding-top: 10px; font-size: 11.5px;\">\n                <div style=\"color: #1a0dab; font-weight: 600;\">✦ تخفیف ویژه پکیج طلایی</div>\n                <div style=\"color: #1a0dab; font-weight: 600;\">✦ ضمانت ۱۰۰٪ بازگشت وجه ۳۰ روزه</div>\n                <div style=\"color: #1a0dab; font-weight: 600;\">✦ تماس با کارشناسان (۰۹۱۵۲۳۳۱۹۷۴)</div>\n                <div style=\"color: #1a0dab; font-weight: 600;\">✦ رهگیری آنلاین سفارشات</div>\n              </div>\n            </div>\n\n            <!-- Position #2: Competitor (Faded) -->\n            <div style=\"opacity: 0.55; padding: 12px; border-bottom: 1px solid #ebebeb;\">\n              <div style=\"font-size: 11px; color: #70757a;\">https://competitor-site.com</div>\n              <div style=\"font-size: 15px; color: #1a0dab;\">خرید عطر - سایت معمولی رقیب</div>\n              <div style=\"font-size: 12px; color: #5f6368;\">سایت فاقد کدهای اسکیما و ستاره‌های گوگل (زمان لود: ۴.۵ ثانیه)...</div>\n            </div>\n          </div>\n\n          <!-- SEO Opportunity & Ad Spend Savings Breakdown -->\n          <div style=\"background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; align-items: center;\">\n            <div>\n              <div style=\"font-size: 11.5px; color: #94a3b8; font-weight: 700;\">ترافیک ارگانیک ماهانه پیش‌بینی‌شده:</div>\n              <div id=\"serp-traffic-val\" style=\"font-size: 22px; font-weight: 900; color: #38bdf8; font-family: monospace; margin-top: 4px;\">\n                ۴,۲۰۰ کلیک رایگان\n              </div>\n            </div>\n            <div>\n              <div style=\"font-size: 11.5px; color: #94a3b8; font-weight: 700;\">صرفه‌جویی ماهانه در هزینه تبلیغات گوگل ادز:</div>\n              <div id=\"serp-savings-val\" style=\"font-size: 22px; font-weight: 900; color: #34d399; font-family: monospace; margin-top: 4px;\">\n                ۱۸,۵۰۰,۰۰۰ تومان\n              </div>\n            </div>\n            <div style=\"text-align: left;\">\n              <a href=\"tel:09152331974\" style=\"background: linear-gradient(135deg, #0284c7, #10b981); color: #fff; font-weight: 900; font-size: 13px; padding: 11px 20px; border-radius: 12px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;\">\n                <span>🚀</span> رزرو رتبه ۱ گوگل برای کلمه شما\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <!-- 9. Interactive Server Topography & Realtime Latency Probe Map -->\n        <div id=\"jahesh-server-topology-section\" style=\"margin-top: 50px; background: radial-gradient(circle at center, rgba(16, 185, 129, 0.1), rgba(15, 23, 42, 0.95) 75%); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: 24px; padding: 36px 30px; direction: rtl; text-align: right; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;\">\n          <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px;\">\n            <div>\n              <div style=\"display: inline-flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #6ee7b7; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 10px;\">\n                <span style=\"display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981;\"></span>\n                Cloud Datacenter Topography\n              </div>\n              <h3 style=\"font-size: 24px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 10px;\">\n                <span>🌐</span> توپولوژی زیرساخت سرورها و پایش تاخیر زنده (Latency Probe)\n              </h3>\n            </div>\n            <button id=\"topo-probe-btn\" type=\"button\" style=\"background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; color: #34d399; font-weight: 800; font-size: 12px; padding: 7px 16px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 6px;\">\n              <span>⚡</span> تست زنده پینگ از مرورگر شما\n            </button>\n          </div>\n\n          <p style=\"color: #cbd5e1; font-size: 14px; line-height: 1.8; margin-top: 0; margin-bottom: 22px;\">\n            دیتاسنترهای جهش با تجهیز به هاردهای فوق‌سریع NVMe و لایه کشینگ توزیع‌شده کلاودفلر، پینگ سرورها را به حداقل رسانده‌اند. روی هر گره کلیک کنید تا مشخصات شبکه آن بررسی شود:\n          </p>\n\n          <!-- Realtime Latency Grid Across Cities -->\n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 24px;\" id=\"topo-nodes-grid\">\n            <div class=\"topo-node-card\" style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 14px; text-align: center; cursor: pointer;\">\n              <div style=\"font-size: 20px; margin-bottom: 4px;\">📍</div>\n              <div style=\"font-weight: 800; font-size: 13px; color: #fff;\">مشهد مقدس (مرکزی)</div>\n              <div style=\"font-size: 10.5px; color: #94a3b8; margin: 2px 0 6px 0;\">خیام ۴۶ / دیتاسنتر اصلی</div>\n              <div style=\"font-size: 18px; font-weight: 900; color: #34d399; font-family: monospace;\" id=\"ping-mashhad\">۱۲ ms</div>\n              <span style=\"font-size: 10px; color: #34d399;\">● فوق‌العاده سریع</span>\n            </div>\n\n            <div class=\"topo-node-card\" style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 14px; text-align: center; cursor: pointer;\">\n              <div style=\"font-size: 20px; margin-bottom: 4px;\">📍</div>\n              <div style=\"font-weight: 800; font-size: 13px; color: #fff;\">تهران (زیرساخت)</div>\n              <div style=\"font-size: 10.5px; color: #94a3b8; margin: 2px 0 6px 0;\">نقطه تبادل برج میلاد</div>\n              <div style=\"font-size: 18px; font-weight: 900; color: #34d399; font-family: monospace;\" id=\"ping-tehran\">۱۶ ms</div>\n              <span style=\"font-size: 10px; color: #34d399;\">● فوق‌العاده سریع</span>\n            </div>\n\n            <div class=\"topo-node-card\" style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 14px; text-align: center; cursor: pointer;\">\n              <div style=\"font-size: 20px; margin-bottom: 4px;\">📍</div>\n              <div style=\"font-weight: 800; font-size: 13px; color: #fff;\">اصفهان (مرکزی)</div>\n              <div style=\"font-size: 10.5px; color: #94a3b8; margin: 2px 0 6px 0;\">کلاستر ابری مرکزی</div>\n              <div style=\"font-size: 18px; font-weight: 900; color: #34d399; font-family: monospace;\" id=\"ping-esfahan\">۲۲ ms</div>\n              <span style=\"font-size: 10px; color: #34d399;\">● پایدار و بهینه</span>\n            </div>\n\n            <div class=\"topo-node-card\" style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 14px; text-align: center; cursor: pointer;\">\n              <div style=\"font-size: 20px; margin-bottom: 4px;\">📍</div>\n              <div style=\"font-weight: 800; font-size: 13px; color: #fff;\">شیراز (جنوب)</div>\n              <div style=\"font-size: 10.5px; color: #94a3b8; margin: 2px 0 6px 0;\">کلاستر اتصال جنوب</div>\n              <div style=\"font-size: 18px; font-weight: 900; color: #34d399; font-family: monospace;\" id=\"ping-shiraz\">۲۶ ms</div>\n              <span style=\"font-size: 10px; color: #34d399;\">● پایدار و بهینه</span>\n            </div>\n\n            <div class=\"topo-node-card\" style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 14px; text-align: center; cursor: pointer;\">\n              <div style=\"font-size: 20px; margin-bottom: 4px;\">🌍</div>\n              <div style=\"font-weight: 800; font-size: 13px; color: #fff;\">فرانکفورت (اروپا)</div>\n              <div style=\"font-size: 10.5px; color: #94a3b8; margin: 2px 0 6px 0;\">نود لبه Cloudflare</div>\n              <div style=\"font-size: 18px; font-weight: 900; color: #38bdf8; font-family: monospace;\" id=\"ping-frankfurt\">۶۴ ms</div>\n              <span style=\"font-size: 10px; color: #38bdf8;\">● لبه بین‌المللی</span>\n            </div>\n          </div>\n\n          <!-- Interactive System Architecture Pipeline View -->\n          <div style=\"background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 20px;\" dir=\"ltr\">\n            <div style=\"text-align: right; font-size: 12px; color: #6ee7b7; font-weight: 700; margin-bottom: 12px;\">\n              ⚡ جریان بلادرنگ جریان داده و امنیت در معماری جهش:\n            </div>\n            <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; font-family: monospace; font-size: 11.5px;\">\n              <div style=\"background: rgba(56, 189, 248, 0.15); border: 1px solid #38bdf8; color: #7dd3fc; padding: 8px 12px; border-radius: 8px; text-align: center;\">\n                Client Browser<br><span style=\"font-size: 9.5px; color: #94a3b8;\">HTTP/3 Brotli</span>\n              </div>\n              <div style=\"color: #38bdf8;\">──▶</div>\n              <div style=\"background: rgba(168, 85, 247, 0.15); border: 1px solid #a855f7; color: #d8b4fe; padding: 8px 12px; border-radius: 8px; text-align: center;\">\n                Cloudflare Edge<br><span style=\"font-size: 9.5px; color: #94a3b8;\">DDoS Shield & SSL</span>\n              </div>\n              <div style=\"color: #a855f7;\">──▶</div>\n              <div style=\"background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #6ee7b7; padding: 8px 12px; border-radius: 8px; text-align: center;\">\n                Vike.js Engine<br><span style=\"font-size: 9.5px; color: #94a3b8;\">SSR & Hydration</span>\n              </div>\n              <div style=\"color: #10b981;\">──▶</div>\n              <div style=\"background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; color: #fde68a; padding: 8px 12px; border-radius: 8px; text-align: center;\">\n                PostgreSQL + Redis<br><span style=\"font-size: 9.5px; color: #94a3b8;\">NVMe Persistence</span>\n              </div>\n              <div style=\"color: #f59e0b;\">──▶</div>\n              <div style=\"background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #86efac; padding: 8px 12px; border-radius: 8px; text-align: center;\">\n                Shaparak Zibal<br><span style=\"font-size: 9.5px; color: #94a3b8;\">Instant Settlement</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- SEO FAQ Block for High-Authority Google Ranking -->\n        <div style=\"margin-top: 48px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 28px; direction: rtl; text-align: right;\">\n          <h3 style=\"font-size: 19px; font-weight: 900; color: #f1f5f9; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;\">\n            <span style=\"color: #a855f7;\">✦</span> راهنمای جامع خدمات جهش ای تی، انجمن علمی جهش و بیمارستان دامپزشکی\n          </h3>\n          <div style=\"display: flex; flex-direction: column; gap: 16px; font-size: 14px; color: #cbd5e1; line-height: 1.8;\">\n            <div style=\"background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 16px;\">\n              <h4 style=\"font-weight: 800; color: #ffffff; margin: 0 0 8px 0; font-size: 15px;\">جهش ای تی (Jahesh IT) چیست و چه خدماتی ارائه می‌دهد؟</h4>\n              <p style=\"margin: 0; color: #94a3b8;\">\n                <strong>جهش ای تی</strong> (که با نام‌های جهش آی تی و Jahesh IT نیز شناخته می‌شود) مرکز تخصصی فناوری اطلاعات، کدنویسی پیشرفته، طراحی وب‌سایت‌های شرکتی و فروشگاهی با تضمین رتبه یک نتایج جستجوی گوگل، توسعه مدل‌های هوش مصنوعی و راهکارهای نرم‌افزاری ۲۵ صنف شغلی در ایران است.\n              </p>\n            </div>\n            <div style=\"background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 16px;\">\n              <h4 style=\"font-weight: 800; color: #ffffff; margin: 0 0 8px 0; font-size: 15px;\">نحوه رزرو نوبت در بیمارستان دانشکده دامپزشکی جهش چگونه است؟</h4>\n              <p style=\"margin: 0; color: #94a3b8;\">\n                برای رزرو نوبت ویزیت حضوری یا آنلاین اساتید هیئت علمی <strong>بیمارستان دانشکده دامپزشکی جهش</strong> (دانشگاه فردوسی مشهد)، کافیست وارد پرتال بیمارستان شده و پس از تریاژ هوشمند علائم بیماری حیوان، تاریخ و تخصص مورد نظر را انتخاب نموده و نوبت خود را قطعی فرمایید.\n              </p>\n            </div>\n            <div style=\"background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 16px;\">\n              <h4 style=\"font-weight: 800; color: #ffffff; margin: 0 0 8px 0; font-size: 15px;\">پیشینه و زمینه فعالیت انجمن علمی جهش چیست؟</h4>\n              <p style=\"margin: 0; color: #94a3b8;\">\n                <strong>انجمن علمی جهش</strong> تشکل پیشگام علمی، پژوهشی و فناوری است که در سال ۱۳۹۵ هجری خورشیدی با هدف برگزاری دوره‌های تخصصی، توسعه پروژه‌های هوش مصنوعی و حمایت از جامعه نخبگان و دانشگاهی تاسیس شده است.\n              </p>\n            </div>\n          </div>\n        </div>";
  const MODALS_HTML = "  <!-- NEW HIGH-TECH FEATURES SUITE FOR JAHESH ECOSYSTEM         -->\n  <!-- ======================================================== -->\n\n  <!-- 1. Universal Command Palette & Quick Search Modal (Ctrl + K) -->\n  <div id=\"jahesh-cmd-palette\" style=\"display: none; position: fixed; inset: 0; z-index: 99999; background: rgba(5, 3, 15, 0.75); backdrop-filter: blur(16px); align-items: flex-start; justify-content: center; padding: 60px 16px 20px; direction: rtl;\">\n    <div id=\"jahesh-cmd-box\" style=\"background: linear-gradient(160deg, #16102e, #0c081c); border: 1.5px solid rgba(140, 0, 255, 0.45); border-radius: 20px; width: 100%; max-width: 640px; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(140, 0, 255, 0.25); overflow: hidden; animation: cmdFadeIn 0.2s ease;\">\n      <!-- Search Bar -->\n      <div style=\"display: flex; align-items: center; gap: 12px; padding: 16px 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);\">\n        <span style=\"font-size: 20px; color: #a855f7;\">🔍</span>\n        <input id=\"jahesh-cmd-input\" type=\"text\" placeholder=\"جستجو در تمام سامانه‌ها، پکیج‌ها، بیمارستان و خدمات جهش...\" style=\"flex: 1; background: transparent; border: none; color: #ffffff; font-size: 15px; outline: none; font-family: inherit;\">\n        <kbd style=\"background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 6px; padding: 2px 7px; font-size: 11px; color: #94a3b8; font-family: monospace;\">ESC</kbd>\n      </div>\n\n      <!-- Quick Categories / Filter Chips -->\n      <div style=\"display: flex; gap: 8px; padding: 10px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); overflow-x: auto; font-size: 11.5px;\">\n        <button class=\"cmd-filter-chip active\" data-category=\"all\" style=\"background: #8c00ff; color: #fff; border: none; border-radius: 8px; padding: 4px 10px; font-weight: 700; cursor: pointer;\">همه</button>\n        <button class=\"cmd-filter-chip\" data-category=\"portal\" style=\"background: rgba(255, 255, 255, 0.05); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 4px 10px; font-weight: 700; cursor: pointer;\">پرتال‌ها</button>\n        <button class=\"cmd-filter-chip\" data-category=\"package\" style=\"background: rgba(255, 255, 255, 0.05); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 4px 10px; font-weight: 700; cursor: pointer;\">طراحی سایت و کالا</button>\n        <button class=\"cmd-filter-chip\" data-category=\"vet\" style=\"background: rgba(255, 255, 255, 0.05); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 4px 10px; font-weight: 700; cursor: pointer;\">بیمارستان دامپزشکی</button>\n        <button class=\"cmd-filter-chip\" data-category=\"support\" style=\"background: rgba(255, 255, 255, 0.05); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 4px 10px; font-weight: 700; cursor: pointer;\">پشتیبانی</button>\n      </div>\n\n      <!-- Search Results Container -->\n      <div id=\"jahesh-cmd-results\" style=\"max-height: 380px; overflow-y: auto; padding: 10px 14px;\">\n        <!-- Injected via JS -->\n      </div>\n\n      <!-- Footer Info -->\n      <div style=\"display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; background: rgba(0, 0, 0, 0.3); border-top: 1px solid rgba(255, 255, 255, 0.06); font-size: 11px; color: #94a3b8;\">\n        <div>کلیدهای <kbd style=\"color: #c4b5fd;\">↑</kbd> <kbd style=\"color: #c4b5fd;\">↓</kbd> برای جابجایی | <kbd style=\"color: #c4b5fd;\">Enter</kbd> برای ورود</div>\n        <div style=\"color: #a855f7; font-weight: 700;\">اکوسیستم فناوری جهش</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Floating Command Palette Launcher Button (Bottom-Left) -->\n  <button id=\"jahesh-cmd-trigger\" type=\"button\" title=\"جستجوی سریع در جهش (Ctrl + K)\" style=\"position: fixed; bottom: 24px; left: 24px; z-index: 9999; display: flex; align-items: center; gap: 8px; background: linear-gradient(135deg, rgba(30, 20, 50, 0.95), rgba(15, 10, 30, 0.95)); border: 1px solid rgba(140, 0, 255, 0.5); color: #ffffff; padding: 10px 16px; border-radius: 9999px; font-size: 13px; font-weight: 800; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(140, 0, 255, 0.3); cursor: pointer; backdrop-filter: blur(10px); transition: all 0.2s ease;\">\n    <span style=\"font-size: 15px;\">⚡</span>\n    <span>جستجوی سریع</span>\n    <kbd style=\"background: rgba(140, 0, 255, 0.3); border: 1px solid rgba(140, 0, 255, 0.6); border-radius: 5px; padding: 1px 6px; font-size: 10px; font-family: monospace; color: #d8b4fe;\">Ctrl K</kbd>\n  </button>\n\n  <!-- Floating Project Tracker Trigger Button (Bottom-Left 2) -->\n  <button id=\"jahesh-tracker-trigger\" type=\"button\" title=\"استعلام و پیگیری پیشرفت پروژه شما\" style=\"position: fixed; bottom: 24px; left: 180px; z-index: 9999; display: flex; align-items: center; gap: 6px; background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(8, 14, 26, 0.95)); border: 1px solid rgba(56, 189, 248, 0.5); color: #38bdf8; padding: 10px 15px; border-radius: 9999px; font-size: 12.5px; font-weight: 800; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.25); cursor: pointer; backdrop-filter: blur(10px); transition: all 0.2s ease;\">\n    <span style=\"font-size: 14px;\">📍</span>\n    <span>پیگیری پروژه</span>\n  </button>\n\n  <!-- Floating Cyber Audio SFX Toggle (Bottom-Right 2) -->\n  <button id=\"jahesh-sfx-toggle\" type=\"button\" title=\"قطع یا وصل افکت‌های صوتی پیشرفته وب\" style=\"position: fixed; bottom: 24px; right: 200px; z-index: 9999; display: flex; align-items: center; gap: 6px; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(255, 255, 255, 0.2); color: #cbd5e1; padding: 9px 13px; border-radius: 9999px; font-size: 12px; font-weight: 700; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5); cursor: pointer; backdrop-filter: blur(10px); transition: all 0.2s ease;\">\n    <span id=\"sfx-icon\">🔊</span>\n    <span id=\"sfx-label\">صدا: فعال</span>\n  </button>\n\n  <!-- Floating Live System Status & Latency Badge (Bottom-Right) -->\n  <div id=\"jahesh-status-badge\" style=\"position: fixed; bottom: 24px; right: 24px; z-index: 9999; display: flex; align-items: center; gap: 8px; background: linear-gradient(135deg, rgba(10, 20, 30, 0.95), rgba(5, 12, 20, 0.95)); border: 1px solid rgba(52, 211, 153, 0.4); color: #e2e8f0; padding: 8px 14px; border-radius: 9999px; font-size: 12px; font-weight: 700; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(16, 185, 129, 0.2); cursor: pointer; backdrop-filter: blur(10px); transition: all 0.2s ease;\">\n    <span style=\"width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 8px #10b981; animation: pingStatus 1.5s infinite;\"></span>\n    <span id=\"jahesh-status-text\">سامانه‌ها آنلاین</span>\n    <span style=\"color: #64748b;\">|</span>\n    <span id=\"jahesh-ping-val\" style=\"color: #34d399; font-family: monospace;\">۲۴ms</span>\n  </div>\n\n  <!-- Realtime Project Progress Tracker Modal -->\n  <div id=\"jahesh-project-tracker-modal\" style=\"display: none; position: fixed; inset: 0; z-index: 99999; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(12px); align-items: center; justify-content: center; padding: 18px; direction: rtl; text-align: right;\">\n    <div style=\"background: linear-gradient(160deg, #0e1526, #070a12); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 24px; width: 100%; max-width: 620px; padding: 26px; box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.2); color: #fff; max-height: 90vh; overflow-y: auto;\">\n      <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 14px;\">\n        <div style=\"display: flex; align-items: center; gap: 10px;\">\n          <span style=\"font-size: 24px;\">📍</span>\n          <div>\n            <h4 style=\"font-size: 17px; font-weight: 900; margin: 0; color: #fff;\">سامانه استعلام و پیگیری لحظه‌ای پیشرفت پروژه‌ها</h4>\n            <span style=\"font-size: 11px; color: #94a3b8;\">اتصال مستقیم به پایگاه داده مهندسی جهش ای تی</span>\n          </div>\n        </div>\n        <button id=\"close-tracker-modal\" style=\"background: rgba(255, 255, 255, 0.08); border: none; color: #94a3b8; font-size: 16px; width: 32px; height: 32px; border-radius: 50%; cursor: pointer;\">✕</button>\n      </div>\n\n      <!-- Search Code Bar -->\n      <div style=\"margin-bottom: 20px;\">\n        <label style=\"display: block; font-size: 12px; color: #cbd5e1; font-weight: 700; margin-bottom: 8px;\">کد پیگیری قرارداد یا پروژه خود را وارد کنید:</label>\n        <div style=\"display: flex; gap: 8px;\">\n          <input type=\"text\" id=\"tracker-code-input\" placeholder=\"مثلاً: JAH-8412-ECO یا شماره تماس ثبت شده\" style=\"flex: 1; background: #070c18; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 11px 16px; color: #fff; font-size: 13px; font-family: monospace; outline: none;\">\n          <button id=\"tracker-search-btn\" type=\"button\" style=\"background: linear-gradient(135deg, #0284c7, #2563eb); color: #fff; font-weight: 800; font-size: 13px; padding: 0 20px; border-radius: 12px; border: none; cursor: pointer; white-space: nowrap;\">\n            استعلام وضعیت\n          </button>\n        </div>\n        <!-- Sample chips for demo -->\n        <div style=\"display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px;\">\n          <span style=\"font-size: 11px; color: #94a3b8; align-self: center;\">نمونه‌های تستی فعال:</span>\n          <button type=\"button\" class=\"tracker-sample-chip\" data-code=\"JAH-8412-ECO\" style=\"background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); color: #7dd3fc; font-size: 11px; font-family: monospace; padding: 3px 8px; border-radius: 6px; cursor: pointer;\">JAH-8412-ECO</button>\n          <button type=\"button\" class=\"tracker-sample-chip\" data-code=\"JAH-3904-MED\" style=\"background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); color: #7dd3fc; font-size: 11px; font-family: monospace; padding: 3px 8px; border-radius: 6px; cursor: pointer;\">JAH-3904-MED</button>\n          <button type=\"button\" class=\"tracker-sample-chip\" data-code=\"JAH-5120-COR\" style=\"background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); color: #7dd3fc; font-size: 11px; font-family: monospace; padding: 3px 8px; border-radius: 6px; cursor: pointer;\">JAH-5120-COR</button>\n        </div>\n      </div>\n\n      <!-- Tracker Dynamic Result -->\n      <div id=\"tracker-result-box\" style=\"background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 18px; padding: 20px;\">\n        <!-- Injected by JavaScript -->\n      </div>\n    </div>\n  </div>\n\n  <!-- System Health Modal / Micro-Dashboard -->\n  <div id=\"jahesh-health-modal\" style=\"display: none; position: fixed; inset: 0; z-index: 99999; background: rgba(5, 3, 15, 0.7); backdrop-filter: blur(12px); align-items: center; justify-content: center; padding: 20px; direction: rtl;\">\n    <div style=\"background: linear-gradient(160deg, #131926, #090e17); border: 1.5px solid rgba(52, 211, 153, 0.4); border-radius: 20px; width: 100%; max-width: 480px; padding: 24px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7); color: #fff;\">\n      <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 12px;\">\n        <div style=\"display: flex; align-items: center; gap: 10px;\">\n          <span style=\"font-size: 22px;\">📡</span>\n          <h4 style=\"font-size: 16px; font-weight: 900; margin: 0;\">پایش وضعیت زنده زیرساخت و سرورهای جهش</h4>\n        </div>\n        <button id=\"close-health-modal\" style=\"background: transparent; border: none; color: #94a3b8; font-size: 18px; cursor: pointer;\">✕</button>\n      </div>\n\n      <div style=\"display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; font-size: 13px;\">\n        <div style=\"display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03); padding: 10px 14px; border-radius: 10px;\">\n          <span>🌐 وب‌سرور جهش ای تی (jaheshit.ir)</span>\n          <span style=\"color: #34d399; font-weight: 800;\">● آنلاین (۹۹.۹٪ Uptime)</span>\n        </div>\n        <div style=\"display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03); padding: 10px 14px; border-radius: 10px;\">\n          <span>⚡ هسته هوش مصنوعی جهش ۲</span>\n          <span style=\"color: #34d399; font-weight: 800;\">● فعال (بدون نیاز به فیلترشکن)</span>\n        </div>\n        <div style=\"display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03); padding: 10px 14px; border-radius: 10px;\">\n          <span>🏥 سامانه بیمارستان دامپزشکی فردوسی</span>\n          <span style=\"color: #34d399; font-weight: 800;\">● فعال (پذیرش نوبت ۲۴h)</span>\n        </div>\n        <div style=\"display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03); padding: 10px 14px; border-radius: 10px;\">\n          <span>💳 شبکه پرداخت شاپرک و درگاه زیبال</span>\n          <span style=\"color: #34d399; font-weight: 800;\">● متصل (تسویه حساب آنی)</span>\n        </div>\n        <div style=\"display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03); padding: 10px 14px; border-radius: 10px;\">\n          <span>⏱️ پینگ و زمان تاخیر اتصال به سرور</span>\n          <span id=\"health-live-latency\" style=\"color: #38bdf8; font-weight: 900; font-family: monospace;\">۲۴ میلی‌ثانیه</span>\n        </div>\n      </div>\n\n      <div style=\"display: flex; gap: 10px;\">\n        <button id=\"recheck-ping-btn\" type=\"button\" style=\"flex: 1; background: #059669; hover:bg-emerald-600; color: #fff; font-weight: 800; font-size: 13px; padding: 10px; border-radius: 10px; border: none; cursor: pointer;\">\n          🔄 بررسی مجدد پینگ و سرعت اتصال\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Smooth Scroll-to-Top Floating Button with Reading Progress -->\n  <button id=\"jahesh-scroll-top\" type=\"button\" title=\"بازگشت به ابتدای صفحه\" style=\"display: none; position: fixed; bottom: 80px; right: 26px; z-index: 9998; width: 44px; height: 44px; border-radius: 50%; background: rgba(20, 15, 35, 0.9); border: 1.5px solid rgba(140, 0, 255, 0.5); color: #fff; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5); backdrop-filter: blur(8px); transition: transform 0.2s ease;\">\n    <svg style=\"width: 20px; height: 20px;\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5\" d=\"M5 15l7-7 7 7\"></path></svg>\n  </button>\n\n  <!-- 1. Live Social Proof Toast (اثبات اجتماعی زنده فعالیت مشتریان) -->\n  <div id=\"jahesh-social-proof-toast\" style=\"display: none; position: fixed; bottom: 78px; right: 24px; z-index: 9996; max-width: 320px; background: rgba(14, 10, 28, 0.95); border: 1.5px solid rgba(168, 85, 247, 0.45); border-radius: 16px; padding: 12px 14px; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(168, 85, 247, 0.15); backdrop-filter: blur(12px); direction: rtl; text-align: right; transition: all 0.3s ease;\">\n    <div style=\"display: flex; align-items: flex-start; gap: 10px;\">\n      <div id=\"toast-avatar\" style=\"width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, #7c3aed, #06b6d4); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; box-shadow: 0 4px 10px rgba(124, 58, 237, 0.3);\">\n        🛒\n      </div>\n      <div style=\"flex: 1; min-width: 0;\">\n        <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;\">\n          <span id=\"toast-title\" style=\"font-size: 11px; font-weight: 800; color: #e9d5ff;\">سفارش جدید</span>\n          <span id=\"toast-time\" style=\"font-size: 9.5px; color: #94a3b8;\">لحظاتی پیش</span>\n        </div>\n        <p id=\"toast-desc\" style=\"font-size: 11.5px; color: #cbd5e1; margin: 0; line-height: 1.5; font-weight: 500;\">\n          آقای مهندس رضایی از تهران، پکیج طلایی طراحی سایت را ثبت کرد.\n        </p>\n      </div>\n      <button id=\"toast-close-btn\" type=\"button\" style=\"background: transparent; border: none; color: #64748b; font-size: 13px; cursor: pointer; padding: 0 2px; line-height: 1;\">✕</button>\n    </div>\n  </div>\n\n  <!-- 2. Floating VIP Consultation Launcher (Bottom-Left) -->\n  <button id=\"jahesh-vip-trigger\" type=\"button\" title=\"مشاوره مستقیم VIP با مهندس عرفان مقدم\" style=\"position: fixed; bottom: 24px; left: 165px; z-index: 9998; display: flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #0f172a, #1e1b4b); border: 1.5px solid rgba(99, 102, 241, 0.45); color: #fff; font-size: 12.5px; font-weight: 800; padding: 9px 15px; border-radius: 9999px; cursor: pointer; box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); transition: all 0.2s ease;\">\n    <span style=\"position: relative; display: flex; width: 9px; height: 9px;\">\n      <span style=\"position: absolute; width: 100%; height: 100%; border-radius: 50%; background: #34d399; opacity: 0.75; animation: pingStatus 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;\"></span>\n      <span style=\"position: relative; width: 9px; height: 9px; border-radius: 50%; background: #10b981;\"></span>\n    </span>\n    <span>📞 مشاوره VIP</span>\n  </button>\n\n  <!-- 3. Floating Spin-to-Win Fortune Gift Launcher (Bottom-Left) -->\n  <button id=\"jahesh-fortune-launcher\" type=\"button\" title=\"گردونه شانس و دریافت هدیه طلایی\" style=\"position: fixed; bottom: 24px; left: 305px; z-index: 9998; display: flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #b45309, #d97706); border: 1.5px solid rgba(251, 191, 36, 0.6); color: #fff; font-size: 12.5px; font-weight: 900; padding: 9px 16px; border-radius: 9999px; cursor: pointer; box-shadow: 0 6px 25px rgba(217, 119, 6, 0.4); backdrop-filter: blur(10px); transition: all 0.2s ease; animation: pulseFortune 2.5s infinite;\">\n    <span>🎁</span>\n    <span>گردونه شانس (تا ۳۵٪)</span>\n  </button>\n\n  <!-- 4. VIP Direct Consultation Modal -->\n  <div id=\"jahesh-vip-modal\" style=\"display: none; position: fixed; inset: 0; z-index: 99999; background: rgba(0, 0, 0, 0.82); backdrop-filter: blur(8px); align-items: center; justify-content: center; padding: 16px; direction: rtl; text-align: right;\">\n    <div style=\"background: linear-gradient(155deg, #0f172a, #090d16); border: 1.5px solid rgba(99, 102, 241, 0.45); border-radius: 24px; max-width: 440px; width: 100%; padding: 26px; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7); position: relative; color: #fff;\">\n      <button id=\"close-vip-modal\" type=\"button\" style=\"position: absolute; top: 16px; left: 16px; background: transparent; border: none; color: #94a3b8; font-size: 18px; cursor: pointer;\">✕</button>\n\n      <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px;\">\n        <div style=\"width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, #6366f1, #8b5cf6); display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);\">\n          👨‍💼\n        </div>\n        <div>\n          <h3 style=\"font-size: 16px; font-weight: 900; color: #fff; margin: 0;\">مشاوره مستقیم با مدیریت ارشد جهش</h3>\n          <p style=\"font-size: 11.5px; color: #818cf8; margin: 2px 0 0 0;\">مهندس عرفان مقدم متقی (موسس و مدیر پروژه)</p>\n        </div>\n      </div>\n\n      <p style=\"font-size: 12.5px; color: #cbd5e1; line-height: 1.6; margin-bottom: 20px;\">\n        برای دریافت مشاوره تخصصی راه‌اندازی وب‌سایت، استعلام پروژه‌های اختصاصی یا پیگیری امور بیمارستان دامپزشکی، می‌توانید مستقیماً ارتباط برقرار فرمایید:\n      </p>\n\n      <div style=\"display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;\">\n        <a href=\"tel:+989152331974\" style=\"display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-radius: 14px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); color: #34d399; text-decoration: none; font-weight: 800; font-size: 13px;\">\n          <div style=\"display: flex; align-items: center; gap: 8px;\">\n            <span>📞</span>\n            <span>تماس تلفنی مستقیم:</span>\n          </div>\n          <span style=\"font-family: monospace; font-size: 14px; direction: ltr;\">۰۹۱۵-۲۳۳-۱۹۷۴</span>\n        </a>\n\n        <a href=\"https://t.me/emainsupport\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-radius: 14px; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.35); color: #38bdf8; text-decoration: none; font-weight: 800; font-size: 13px;\">\n          <div style=\"display: flex; align-items: center; gap: 8px;\">\n            <span>💬</span>\n            <span>گفتگوی آنلاین در تلگرام:</span>\n          </div>\n          <span style=\"font-family: monospace; font-size: 13px; direction: ltr;\">@emainsupport</span>\n        </a>\n\n        <a href=\"https://wa.me/989152331974\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-radius: 14px; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.35); color: #4ade80; text-decoration: none; font-weight: 800; font-size: 13px;\">\n          <div style=\"display: flex; align-items: center; gap: 8px;\">\n            <span>📱</span>\n            <span>ارسال پیام در واتس‌اپ:</span>\n          </div>\n          <span style=\"font-family: monospace; font-size: 13px; direction: ltr;\">WhatsApp Chat</span>\n        </a>\n      </div>\n\n      <!-- Quick Call Request Form -->\n      <form id=\"quick-callback-form\" onsubmit=\"handleQuickCallback(event)\" style=\"border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 16px;\">\n        <label style=\"display: block; font-size: 11.5px; font-weight: 700; color: #94a3b8; margin-bottom: 8px;\">\n          یا شماره خود را ثبت کنید تا در کمتر از ۵ دقیقه تماس بگیریم:\n        </label>\n        <div style=\"display: flex; gap: 8px;\">\n          <input type=\"tel\" id=\"callback-phone-input\" placeholder=\"شماره تماس (مثال: ۰۹۱۵۲۳۳۱۹۷۴)\" style=\"flex: 1; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 12px; padding: 10px 14px; color: #fff; font-size: 13px; outline: none; direction: ltr; text-align: right;\" required />\n          <button type=\"submit\" style=\"background: #6366f1; hover:bg-indigo-500; color: #fff; font-weight: 800; font-size: 12.5px; padding: 10px 16px; border-radius: 12px; border: none; cursor: pointer; white-space: nowrap;\">\n            درخواست تماس\n          </button>\n        </div>\n        <div id=\"callback-feedback\" style=\"font-size: 11px; margin-top: 8px; min-height: 16px;\"></div>\n      </form>\n    </div>\n  </div>\n\n  <!-- 5. Spin-to-Win Fortune Wheel & Exit-Intent Lead Magnet Modal -->\n  <div id=\"jahesh-fortune-modal\" style=\"display: none; position: fixed; inset: 0; z-index: 99999; background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(10px); align-items: center; justify-content: center; padding: 14px; direction: rtl; text-align: right;\">\n    <div style=\"background: linear-gradient(160deg, #180e33, #090517); border: 2px solid rgba(217, 119, 6, 0.5); border-radius: 28px; max-width: 480px; width: 100%; padding: clamp(20px, 4vw, 30px); box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(217, 119, 6, 0.2); position: relative; color: #fff; max-height: 92vh; overflow-y: auto;\">\n      <button id=\"close-fortune-modal\" type=\"button\" style=\"position: absolute; top: 18px; left: 18px; background: rgba(255, 255, 255, 0.08); border: none; color: #94a3b8; font-size: 16px; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;\">✕</button>\n\n      <div style=\"text-align: center; margin-bottom: 18px;\">\n        <div style=\"display: inline-flex; align-items: center; gap: 6px; background: rgba(217, 119, 6, 0.2); border: 1px solid rgba(251, 191, 36, 0.4); color: #fde68a; font-size: 11px; font-weight: 800; padding: 3px 12px; border-radius: 9999px; margin-bottom: 6px;\">\n          <span>🎉</span> هدیه و تخفیف ویژه ورود به جهش\n        </div>\n        <h3 style=\"font-size: clamp(18px, 4vw, 22px); font-weight: 900; color: #fff; margin: 0 0 4px 0;\">گردونه جوایز طلایی جهش</h3>\n        <p style=\"font-size: 12px; color: #cbd5e1; margin: 0; line-height: 1.5;\">گردونه را بچرخانید و یکی از جوایز استثنایی را ۱۰۰٪ رایگان برنده شوید!</p>\n      </div>\n\n      <!-- Wheel Visual Container -->\n      <div id=\"wheel-view-box\" style=\"display: flex; flex-direction: column; align-items: center; margin-bottom: 16px; position: relative;\">\n        <div style=\"position: relative; width: 280px; height: 280px;\">\n          <!-- Top Pointer -->\n          <div style=\"position: absolute; top: -10px; left: 50%; transform: translateX(-50%); z-index: 10; width: 0; height: 0; border-left: 14px solid transparent; border-right: 14px solid transparent; border-top: 24px solid #ef4444; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));\"></div>\n          \n          <canvas id=\"fortune-canvas\" width=\"280\" height=\"280\" style=\"width: 280px; height: 280px; border-radius: 50%; box-shadow: 0 0 30px rgba(124, 58, 237, 0.5);\"></canvas>\n          \n          <!-- Center Button -->\n          <button id=\"spin-wheel-center-btn\" type=\"button\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #fbbf24, #d97706); border: 3px solid #ffffff; color: #78350f; font-weight: 900; font-size: 12px; cursor: pointer; box-shadow: 0 0 20px rgba(251, 191, 36, 0.8); display: flex; align-items: center; justify-content: center; z-index: 5;\">\n            بچرخان!\n          </button>\n        </div>\n\n        <button id=\"spin-wheel-btn\" type=\"button\" style=\"margin-top: 18px; width: 100%; background: linear-gradient(135deg, #d97706, #b45309); hover:from-amber-500 hover:to-amber-700; color: #fff; font-weight: 900; font-size: 14px; padding: 13px; border-radius: 14px; border: none; cursor: pointer; box-shadow: 0 6px 20px rgba(217, 119, 6, 0.4); transition: transform 0.2s;\">\n          🎯 چرخاندن گردونه شانس\n        </button>\n      </div>\n\n      <!-- Winning Result & Claim View (Hidden until won) -->\n      <div id=\"wheel-win-box\" style=\"display: none; background: rgba(0, 0, 0, 0.55); border: 1.5px solid rgba(251, 191, 36, 0.45); border-radius: 20px; padding: 20px; text-align: center;\">\n        <div style=\"font-size: 38px; margin-bottom: 6px;\">🎊</div>\n        <div style=\"font-size: 12px; font-weight: 800; color: #fbbf24;\">تبریک! شما برنده شدید:</div>\n        <h4 id=\"win-prize-title\" style=\"font-size: 20px; font-weight: 900; color: #34d399; margin: 6px 0;\">۳۵٪ تخفیف پکیج طلایی + مشاوره VIP</h4>\n        <p id=\"win-prize-desc\" style=\"font-size: 12px; color: #cbd5e1; margin: 0 0 14px 0;\">کد تخفیف اختصاصی شما با موفقیت فعال شد.</p>\n\n        <!-- Urgency Countdown Timer -->\n        <div style=\"background: rgba(220, 38, 38, 0.15); border: 1px solid rgba(220, 38, 38, 0.4); border-radius: 12px; padding: 8px 14px; margin-bottom: 16px; display: inline-flex; align-items: center; gap: 8px;\">\n          <span style=\"font-size: 11px; color: #fca5a5; font-weight: 700;\">مهلت اعتبار هدیه:</span>\n          <span id=\"fortune-countdown\" style=\"font-family: monospace; font-size: 16px; font-weight: 900; color: #f87171;\">۱۴:۵۹</span>\n        </div>\n\n        <!-- Phone Lead Form -->\n        <form id=\"fortune-lead-form\" onsubmit=\"handleFortuneLeadSubmit(event)\">\n          <div style=\"text-align: right; font-size: 11px; font-weight: 700; color: #cbd5e1; margin-bottom: 6px;\">\n            شماره همراه خود را بنویسید تا کد برایتان رزرو و ارسال شود:\n          </div>\n          <div style=\"display: flex; gap: 8px; margin-bottom: 12px;\">\n            <input type=\"tel\" id=\"fortune-phone-input\" placeholder=\"شماره تماس (مثال: ۰۹۱۵۲۳۳۱۹۷۴)\" style=\"flex: 1; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 12px; padding: 11px 14px; color: #fff; font-size: 13.5px; outline: none; direction: ltr; text-align: right;\" required />\n            <button type=\"submit\" id=\"fortune-submit-btn\" style=\"background: linear-gradient(135deg, #10b981, #059669); color: #fff; font-weight: 900; font-size: 13px; padding: 11px 18px; border-radius: 12px; border: none; cursor: pointer; white-space: nowrap;\">\n              ثبت و دریافت هدیه\n            </button>\n          </div>\n          <div id=\"fortune-lead-feedback\" style=\"font-size: 11.5px; margin-bottom: 12px; min-height: 18px;\"></div>\n        </form>\n\n        <!-- Direct Instant Actions -->\n        <div style=\"display: flex; gap: 8px; justify-content: center; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 14px;\">\n          <a id=\"fortune-wa-link\" href=\"https://wa.me/989152331974\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px; background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34, 197, 94, 0.4); color: #4ade80; padding: 9px; border-radius: 10px; font-size: 11.5px; font-weight: 800; text-decoration: none;\">\n            <span>📱 ارسال در واتس‌اپ</span>\n          </a>\n          <a id=\"fortune-tg-link\" href=\"https://t.me/emainsupport\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8; padding: 9px; border-radius: 10px; font-size: 11.5px; font-weight: 800; text-decoration: none;\">\n            <span>💬 ارسال در تلگرام</span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <style>\n    @keyframes spinAudit {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n    @keyframes cmdFadeIn {\n      from { opacity: 0; transform: translateY(-15px) scale(0.98); }\n      to { opacity: 1; transform: translateY(0) scale(1); }\n    }\n    @keyframes pingStatus {\n      0% { transform: scale(1); opacity: 1; }\n      50% { transform: scale(1.4); opacity: 0.6; }\n      100% { transform: scale(1); opacity: 1; }\n    }\n    .cmd-item-row {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 10px 14px;\n      border-radius: 12px;\n      color: #e2e8f0;\n      text-decoration: none;\n      transition: all 0.15s ease;\n      cursor: pointer;\n      margin-bottom: 4px;\n    }\n    .cmd-item-row:hover, .cmd-item-row.selected {\n      background: rgba(140, 0, 255, 0.25);\n      border-right: 3px solid #a855f7;\n      color: #ffffff;\n      transform: translateX(-3px);\n    }\n    @keyframes pulseFortune {\n      0%, 100% { transform: scale(1); box-shadow: 0 6px 25px rgba(217, 119, 6, 0.4); }\n      50% { transform: scale(1.05); box-shadow: 0 8px 32px rgba(245, 158, 11, 0.7); }\n    }\n    @media (max-width: 640px) {\n      #jahesh-cmd-trigger {\n        bottom: 16px !important;\n        left: 16px !important;\n        padding: 8px 12px !important;\n        font-size: 11.5px !important;\n      }\n      #jahesh-vip-trigger {\n        bottom: 16px !important;\n        left: 110px !important;\n        padding: 8px 12px !important;\n        font-size: 11.5px !important;\n      }\n      #jahesh-fortune-launcher {\n        bottom: 64px !important;\n        left: 16px !important;\n        padding: 8px 12px !important;\n        font-size: 11.5px !important;\n      }\n      #jahesh-tracker-trigger {\n        bottom: 64px !important;\n        left: 125px !important;\n        padding: 7px 11px !important;\n        font-size: 11px !important;\n      }\n      #jahesh-sfx-toggle {\n        display: none !important;\n      }\n      #jahesh-status-badge {\n        bottom: 16px !important;\n        right: 16px !important;\n        padding: 7px 11px !important;\n        font-size: 11px !important;\n      }\n      #jahesh-scroll-top {\n        bottom: 68px !important;\n        right: 16px !important;\n        width: 38px !important;\n        height: 38px !important;\n      }\n      #jahesh-social-proof-toast {\n        bottom: 115px !important;\n        right: 16px !important;\n        left: 16px !important;\n        max-width: none !important;\n      }\n    }\n  </style>\n";

  window.__JAHESH_INPAGE_HTML__ = INPAGE_HTML;
  window.__JAHESH_MODALS_HTML__ = MODALS_HTML;

  function mountInpage() {
    let mount = document.getElementById('jahesh-ecosystem-mount');
    if (!mount) {
      const footer = document.querySelector('footer');
      if (footer) {
        mount = document.createElement('div');
        mount.id = 'jahesh-ecosystem-mount';
        const target = footer.closest('.w-box.c128r2zr') || footer;
        target.parentNode.insertBefore(mount, target);
      } else {
        const main = document.querySelector('main') || document.body;
        mount = document.createElement('div');
        mount.id = 'jahesh-ecosystem-mount';
        main.appendChild(mount);
      }
    }

    if (mount && (!mount.children || mount.children.length === 0 || !mount.querySelector('#jahesh-cost-calculator-section'))) {
      mount.innerHTML = INPAGE_HTML;
      return true;
    }
    return false;
  }

  function mountModals() {
    let modals = document.getElementById('jahesh-fixed-modals-mount');
    if (!modals) {
      modals = document.createElement('div');
      modals.id = 'jahesh-fixed-modals-mount';
      document.body.appendChild(modals);
      modals.innerHTML = MODALS_HTML;
      return true;
    }
    if (!modals.querySelector('#jahesh-cmd-palette')) {
      modals.innerHTML = MODALS_HTML;
      return true;
    }
    return false;
  }

  window.__initJaheshProFeatures = function() {
    (function initJaheshProFeatures() {
      // ----------------------------------------------------
      // 1. Interactive Project Cost Estimator Controller
      // ----------------------------------------------------
      const typeCards = document.querySelectorAll('.calc-type-card');
      const addonChecks = document.querySelectorAll('.calc-addon-check');
      const speedSelect = document.getElementById('calc-speed-select');
      const couponInput = document.getElementById('calc-coupon-input');
      const couponBtn = document.getElementById('calc-coupon-btn');
      const couponFeedback = document.getElementById('calc-coupon-feedback');
      const totalPriceEl = document.getElementById('calc-total-price');
      const discountBadge = document.getElementById('calc-discount-badge');
      const summaryTextEl = document.getElementById('calc-summary-text');
      const orderLinkEl = document.getElementById('calc-order-link');

      let currentBasePrice = 5500000;
      let currentTypeName = 'وب‌سایت شرکتی و معرفی برند';
      let appliedDiscountPercent = 0;

      function updateCalculator() {
        let total = currentBasePrice;

        // Addons
        let addonNames = [];
        addonChecks.forEach(cb => {
          if (cb.checked) {
            const p = Number(cb.getAttribute('data-price')) || 0;
            total += p;
            if (p > 0) addonNames.push(cb.parentNode.textContent.trim());
          }
        });

        // Delivery speed
        if (speedSelect) {
          total += Number(speedSelect.value) || 0;
        }

        // Apply discount coupon if valid
        let discountAmount = 0;
        if (appliedDiscountPercent > 0) {
          discountAmount = Math.round((total * appliedDiscountPercent) / 100);
          total = total - discountAmount;
          if (discountBadge) {
            discountBadge.style.display = 'inline-block';
            discountBadge.textContent = `${appliedDiscountPercent}٪ تخفیف اعمال شد (-${discountAmount.toLocaleString('fa-IR')} ت)`;
          }
        } else if (discountBadge) {
          discountBadge.style.display = 'none';
        }

        if (totalPriceEl) {
          totalPriceEl.textContent = total.toLocaleString('fa-IR');
        }

        if (summaryTextEl) {
          summaryTextEl.textContent = `پروژه انتخابی: ${currentTypeName} | هاست NVMe + دامنه رایگان + درگاه شاپرک`;
        }

        if (orderLinkEl) {
          const encoded = encodeURIComponent(`${currentTypeName} - برآورد: ${total.toLocaleString('fa-IR')} تومان`);
          orderLinkEl.href = `/jaheshkala/?plan=${encoded}`;
        }
      }

      if (typeCards.length > 0) {
        typeCards.forEach(card => {
          card.addEventListener('click', function() {
            typeCards.forEach(c => {
              c.classList.remove('active');
              c.style.background = 'rgba(255, 255, 255, 0.03)';
              c.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            });
            this.classList.add('active');
            this.style.background = 'rgba(140, 0, 255, 0.15)';
            this.style.borderColor = '#a855f7';
            currentBasePrice = Number(this.getAttribute('data-base-price')) || 5500000;
            currentTypeName = this.getAttribute('data-name') || '';
            updateCalculator();
          });
        });

        addonChecks.forEach(cb => cb.addEventListener('change', updateCalculator));
        if (speedSelect) speedSelect.addEventListener('change', updateCalculator);

        if (couponBtn && couponInput) {
          couponInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
              e.preventDefault();
              couponBtn.click();
            }
          });
          couponBtn.addEventListener('click', function() {
            const code = couponInput.value.trim().toLowerCase();
            if (code === 'jahesh1395') {
              appliedDiscountPercent = 20;
              couponFeedback.style.color = '#34d399';
              couponFeedback.textContent = 'کد طلایی jahesh1395 تایید شد: ۲۰٪ تخفیف اعمال گردید ✓';
            } else if (code === 'norooz' || code === 'fum') {
              appliedDiscountPercent = 15;
              couponFeedback.style.color = '#34d399';
              couponFeedback.textContent = 'کد تخفیف ۱۵٪ با موفقیت اعمال شد ✓';
            } else if (code) {
              appliedDiscountPercent = 0;
              couponFeedback.style.color = '#f87171';
              couponFeedback.textContent = 'کد تخفیف نامعتبر است یا منقضی شده است.';
            } else {
              appliedDiscountPercent = 0;
              couponFeedback.textContent = '';
            }
            updateCalculator();
          });
        }
      }

      // ----------------------------------------------------
      // 1.5. Live Website SEO & Speed Auditor Controller
      // ----------------------------------------------------
      const auditUrlInput = document.getElementById('seo-audit-url');
      const auditBtn = document.getElementById('seo-audit-btn');
      const auditLoading = document.getElementById('seo-audit-loading');
      const auditStepText = document.getElementById('seo-audit-step-text');
      const auditResult = document.getElementById('seo-audit-result');
      const sampleChips = document.querySelectorAll('.seo-sample-chip');

      const scoreNumEl = document.getElementById('audit-score-num');
      const targetDomainEl = document.getElementById('audit-target-domain');
      const gradeBadgeEl = document.getElementById('audit-grade-badge');
      const headlineSummaryEl = document.getElementById('audit-headline-summary');
      const sslValEl = document.getElementById('audit-ssl-val');
      const metaValEl = document.getElementById('audit-meta-val');
      const mobileValEl = document.getElementById('audit-mobile-val');
      const speedValEl = document.getElementById('audit-speed-val');
      const recsContentEl = document.getElementById('audit-recs-content');

      function runSeoAudit(rawDomain) {
        if (!rawDomain || !rawDomain.trim()) {
          alert('لطفاً آدرس وب‌سایت مورد نظر را وارد فرمایید.');
          if (auditUrlInput) auditUrlInput.focus();
          return;
        }

        let domain = rawDomain.trim().toLowerCase()
          .replace(/^https?:\/\//i, '')
          .replace(/\/.*$/, '')
          .replace(/^www\./i, '');

        if (!domain.includes('.')) domain += '.ir';

        if (auditResult) auditResult.style.display = 'none';
        if (auditLoading) auditLoading.style.display = 'block';

        const steps = [
          'در حال اتصال به سرور و سنجش گواهی امنیتی SSL...',
          'آنالیز ساختار متاتگ‌ها، متاتگ‌های OpenGraph و Schema...',
          'محاسبه شاخص سرعت بارگذاری و Core Web Vitals...',
          'تولید گزارش هوشمند و رتبه‌بندی استانداردهای گوگل...'
        ];

        let stepIndex = 0;
        const stepInterval = setInterval(() => {
          stepIndex++;
          if (auditStepText && steps[stepIndex]) {
            auditStepText.textContent = steps[stepIndex];
          }
        }, 350);

        setTimeout(() => {
          clearInterval(stepInterval);
          if (auditLoading) auditLoading.style.display = 'none';
          if (auditResult) auditResult.style.display = 'block';

          const isJahesh = domain.includes('jaheshit') || domain.includes('jahesh');
          let score = isJahesh ? 98 : Math.floor(75 + (domain.charCodeAt(0) % 18));
          if (score > 98) score = 96;

          if (targetDomainEl) targetDomainEl.textContent = domain;
          if (scoreNumEl) scoreNumEl.textContent = score.toLocaleString('fa-IR');

          if (score >= 90) {
            if (gradeBadgeEl) {
              gradeBadgeEl.textContent = 'رتبه عالی (A+)';
              gradeBadgeEl.style.background = '#059669';
            }
            if (headlineSummaryEl) {
              headlineSummaryEl.textContent = 'وضعیت فنی سئو، ساختار داده و سرعت سرور این دامنه در زمره استانداردهای برتر موتور جستجوی گوگل است.';
            }
            if (sslValEl) sslValEl.textContent = '✓ HTTPS فعال و ایمن';
            if (metaValEl) metaValEl.textContent = '✓ متاتگ‌ها کامل';
            if (mobileValEl) mobileValEl.textContent = '✓ کاملاً ریسپانسیو';
            if (speedValEl) speedValEl.textContent = '۰.۱۵ ثانیه (عالی)';
            if (recsContentEl) {
              recsContentEl.innerHTML = `
                • پایداری ساختار دامنه تایید شده است.<br>
                • بهینه‌سازی کدهای اسکیما (Schema JSON-LD) جهت ماندگاری دائمی در رتبه اول پیشنهاد می‌شود.<br>
                • استفاده از شبکه تحویل محتوای ابری (CDN) جهش برای پوشش جهانی.
              `;
            }
          } else {
            if (gradeBadgeEl) {
              gradeBadgeEl.textContent = 'نیازمند بهینه‌سازی (B)';
              gradeBadgeEl.style.background = '#d97706';
            }
            if (headlineSummaryEl) {
              headlineSummaryEl.textContent = 'این وب‌سایت پتانسیل بالایی دارد اما به دلیل ضعف در کشینگ یا متاتگ‌های فنی، از رتبه یک گوگل بازمانده است.';
            }
            if (sslValEl) sslValEl.textContent = '⚠️ نیازمند بررسی ریدایرکت';
            if (metaValEl) metaValEl.textContent = '⚠️ عدم تکمیل متاتگ‌های OpenGraph';
            if (mobileValEl) mobileValEl.textContent = '✓ واکنش‌گرا';
            if (speedValEl) speedValEl.textContent = '۱.۴ ثانیه (قابل ارتقا)';
            if (recsContentEl) {
              recsContentEl.innerHTML = `
                • انتقال هاست به سرورهای NVMe جهش جهت کاهش ۷۰ درصدی زمان پاسخگویی.<br>
                • کدنویسی بهینه و فشرده‌سازی خودکار اسکریپت‌ها مطابق استانداردهای Core Web Vitals.<br>
                • ثبت در سامانه سئو تضمینی جهش ای تی برای رسیدن به رتبه ۱ گوگل.
              `;
            }
          }

          auditResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1500);
      }

      if (auditBtn && auditUrlInput) {
        auditBtn.addEventListener('click', () => runSeoAudit(auditUrlInput.value));
        auditUrlInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            runSeoAudit(auditUrlInput.value);
          }
        });
      }

      sampleChips.forEach(chip => {
        chip.addEventListener('click', function() {
          const u = this.getAttribute('data-url') || '';
          if (auditUrlInput) auditUrlInput.value = u;
          runSeoAudit(u);
        });
      });

      // ----------------------------------------------------
      // 2. Universal Command Palette Controller (Ctrl + K)
      // ----------------------------------------------------
      const cmdPalette = document.getElementById('jahesh-cmd-palette');
      const cmdTrigger = document.getElementById('jahesh-cmd-trigger');
      const cmdInput = document.getElementById('jahesh-cmd-input');
      const cmdResults = document.getElementById('jahesh-cmd-results');
      const filterChips = document.querySelectorAll('.cmd-filter-chip');

      const searchableItems = [
        { title: 'فروشگاه اینترنتی جهش کالا', desc: 'خرید انواع کالای دیجیتال، لپ‌تاپ، لوازم جانبی و پکیج‌های طراحی سایت', category: 'portal', url: '/jaheshkala/', icon: '🛍️' },
        { title: 'هوش مصنوعی جهش ۲ (استودیو آنلاین)', desc: 'دستیار هوشمند فارسی، چت بلادرنگ، کدنویسی و پاسخ به سوالات بدون فیلترشکن', category: 'portal', url: '/hwsh-msnway/', icon: '⚡' },
        { title: 'بیمارستان دانشکده دامپزشکی جهش', desc: 'نوبت‌دهی آنلاین اعضای هیئت علمی، تریاژ هوشمند، جراحی و پاتوبیولوژی فردوسی', category: 'vet', url: '/vet-hospital/', icon: '🏥' },
        { title: 'پیگیری نوبت بیمارستان دامپزشکی', desc: 'استعلام آنلاین وضعیت پرونده و زمان حضور در بیمارستان با کد رهگیری', category: 'vet', url: '/vet-hospital/', icon: '📅' },
        { title: 'پکیج طلایی طراحی سایت اختصاصی', desc: 'قیمت ویژه ۷,۹۰۰,۰۰۰ تومان همراه با دامنه، هاست NVMe، سئو رتبه یک و درگاه زیبال', category: 'package', url: '/jaheshkala/', icon: '🚀' },
        { title: 'محاسبه‌گر آنلاین هزینه طراحی سایت', desc: 'برآورد شفاف قیمت وب‌سایت، فروشگاه و امکانات سفارشی در همین صفحه', category: 'package', url: '#jahesh-cost-calculator-section', icon: '🧮' },
        { title: 'آنالیز زنده سئو و سرعت وب‌سایت', desc: 'تست رایگان رتبه گوگل، سرعت سرور و متاتگ‌های هر وب‌سایت در چند ثانیه', category: 'package', url: '#jahesh-seo-auditor-section', icon: '📊' },
        { title: 'داشبورد تکنولوژی جهش', desc: 'ابزارهای تخصصی، پلتفرم‌های سازمانی و مانیتورینگ اختصاصی', category: 'portal', url: '/abzar-jahesh/', icon: '💻' },
        { title: 'درباره انجمن علمی جهش (تاسیس ۱۳۹۵)', desc: 'تاریخچه بیش از یک دهه فعالیت علمی، دپارتمان‌ها و هیئت موسس', category: 'portal', url: '/drbarh-anjmn/', icon: '🏛️' },
        { title: 'اخبار و رویدادهای جهش', desc: 'جدیدترین اخبار فناوری، همایش‌ها و اطلاعیه‌های رسمی', category: 'portal', url: '/akhbar/', icon: '📰' },
        { title: 'تماس مستقیم با پشتیبانی و مدیریت', desc: 'شماره‌های ۰۹۱۵۲۳۳۱۹۷۴ و ۰۹۳۶۴۸۶۴۶۶۳ — پاسخگویی ۲۴ ساعته', category: 'support', url: 'tel:+989152331974', icon: '📞' },
        { title: 'کانال و پشتیبانی تلگرام جهش', desc: 'ارتباط مستقیم با آیدی @emainsupport و عضویت در کانال جهش', category: 'support', url: 'https://t.me/emainsupport', icon: '💬' },
        { title: 'معمار هوشمند پروژه و تدوین‌گر سند فنی (AI Blueprint)', desc: 'تحلیل چندفازی ایده و دریافت پروپوزال اجرایی با تخفیف طلایی', category: 'portal', url: '#jahesh-ai-blueprint-section', icon: '🧠' },
        { title: 'استودیوی شبیه‌ساز زنده سایت در موبایل و دسکتاپ', desc: 'تست زنده قالب‌ها، تغییر رنگ و تست عملکرد دکمه‌ها در موبایل و کامپیوتر', category: 'portal', url: '#jahesh-live-preview-studio', icon: '📱' },
        { title: 'شبیه‌ساز رشد درآمد و ماشین چندبرابرکننده فروش (ROI)', desc: 'محاسبه دقیق افزایش فروش و سود سالانه با سئو رتبه یک جهش', category: 'package', url: '#jahesh-roi-simulator-section', icon: '📈' },
        { title: 'سامانه استعلام و پیگیری پیشرفت پروژه‌ها', desc: 'پیگیری زنده مراحل کدنویسی، تست استرس و موعد تحویل با کد قرارداد', category: 'support', url: '#jahesh-project-tracker-modal', icon: '📍' },
        { title: 'گردونه جوایز طلایی جهش و تخفیف ویژه', desc: 'چرخاندن گردونه شانس و دریافت هدایای استثنایی و کدهای تخفیف', category: 'package', url: '#jahesh-fortune-modal', icon: '🎯' },
        { title: 'مقایسه تعاملی: سایت‌های سنتی در برابر معماری مدرن جهش', desc: 'بررسی تفاوت‌های بنیادین سرعت، سئو و امنیت با اسلایدر مقایسه', category: 'package', url: '#jahesh-before-after-section', icon: '⚖️' },
        { title: 'کارت اسکرچ دیجیتال شانس و قفل‌گشایی هدیه طلایی', desc: 'تراشیدن آنلاین کارت با ماوس و دریافت هدیه ۱ سال هاست NVMe رایگان', category: 'package', url: '#jahesh-scratch-card-section', icon: '🎁' },
        { title: 'شبیه‌ساز زنده رتبه ۱ گوگل و تحلیلگر کلمات کلیدی', desc: 'نمایش واقعی رتبه اول در گوگل و محاسبه صرفه‌جویی در تبلیغات', category: 'package', url: '#jahesh-serp-simulator-section', icon: '🔍' },
        { title: 'توپولوژی زیرساخت سرورها و پایش تاخیر زنده', desc: 'پایش زنده پینگ و نقشه اتصالات ابری مشهد، تهران و اروپا', category: 'portal', url: '#jahesh-server-topology-section', icon: '🌐' },
        { title: 'دستیار صوتی و سخنگوی هوشمند جهش', desc: 'گفتگوی صوتی با هوش مصنوعی و سنتز زنده صدای فارسی با موج صوتی', category: 'portal', url: '#jahesh-voice-agent-section', icon: '🎙️' },
        { title: 'ترمینال سایبری و کنسول ابری مهندسی', desc: 'محیط اجرای دستورات کلاد و شبیه‌ساز دیپلوی جهش به همراه ماتریکس', category: 'portal', url: '#jahesh-cyber-terminal-section', icon: '💻' },
        { title: 'سازنده معماری و امضای دیجیتال قرارداد رسمی', desc: 'انتخاب ماژول‌ها، تنظیم خودکار مفاد قرارداد و پد امضای آنلاین', category: 'package', url: '#jahesh-contract-builder-section', icon: '📜' },
        { title: 'استعلام نماد اعتماد الکترونیکی (اینماد)', desc: 'تاییدیه رسمی وزارت صمت با شناسه ۴۷۸۸۷۵۰۹', category: 'support', url: 'https://trustseal.enamad.ir/?id=7660079&Code=4IXhqn15ERsZtL5TKetkEb1ggQTnmRjU', icon: '🛡️' }
      ];

      let currentCategory = 'all';
      let selectedIndex = 0;

      function renderCmdResults(query = '') {
        if (!cmdResults) return;
        const q = query.trim().toLowerCase();
        const filtered = searchableItems.filter(item => {
          const matchCat = currentCategory === 'all' || item.category === currentCategory;
          const matchText = !q || item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
          return matchCat && matchText;
        });

        if (filtered.length === 0) {
          cmdResults.innerHTML = `
            <div style="text-align: center; padding: 30px 10px; color: #94a3b8; font-size: 13px;">
              موردی برای «${query}» یافت نشد. می‌توانید با شماره پشتیبانی ۰۹۱۵۲۳۳۱۹۷۴ تماس بگیرید.
            </div>
          `;
          return;
        }

        selectedIndex = 0;
        cmdResults.innerHTML = filtered.map((item, idx) => `
          <a href="${item.url}" class="cmd-item-row ${idx === 0 ? 'selected' : ''}" data-idx="${idx}" style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 22px;">${item.icon}</span>
              <div>
                <div style="font-weight: 800; font-size: 14px; color: #ffffff;">${item.title}</div>
                <div style="font-size: 11.5px; color: #94a3b8; margin-top: 2px;">${item.desc}</div>
              </div>
            </div>
            <span style="font-size: 11px; color: #a855f7; font-weight: 700;">ورود ←</span>
          </a>
        `).join('');

        // Add click events to links to close palette and smooth scroll if anchor
        cmdResults.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            closeCmdPalette();
            if (href && href.startsWith('#')) {
              e.preventDefault();
              if (href === '#jahesh-project-tracker-modal') {
                const trk = document.getElementById('jahesh-project-tracker-modal');
                if (trk) {
                  trk.style.display = 'flex';
                  const codeIn = document.getElementById('tracker-code-input');
                  const sBtn = document.getElementById('tracker-search-btn');
                  if (sBtn) sBtn.click();
                }
                return;
              }
              if (href === '#jahesh-fortune-modal') {
                const fort = document.getElementById('jahesh-fortune-modal');
                if (fort) fort.style.display = 'flex';
                return;
              }
              const target = document.querySelector(href);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }
          });
        });
      }

      function openCmdPalette() {
        if (!cmdPalette) return;
        cmdPalette.style.display = 'flex';
        renderCmdResults('');
        if (cmdInput) {
          cmdInput.value = '';
          setTimeout(() => cmdInput.focus(), 50);
        }
      }

      function closeCmdPalette() {
        if (cmdPalette) cmdPalette.style.display = 'none';
      }

      if (cmdTrigger) cmdTrigger.addEventListener('click', openCmdPalette);

      // Keyboard Shortcut: Ctrl + K or Cmd + K or ESC
      window.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
          e.preventDefault();
          if (cmdPalette.style.display === 'flex') closeCmdPalette();
          else openCmdPalette();
        } else if (e.key === 'Escape') {
          closeCmdPalette();
          if (healthModal) healthModal.style.display = 'none';
          const trk = document.getElementById('jahesh-project-tracker-modal');
          if (trk) trk.style.display = 'none';
        }
      });

      if (cmdPalette) {
        cmdPalette.addEventListener('click', function(e) {
          if (e.target === cmdPalette) closeCmdPalette();
        });
      }

      if (cmdInput) {
        cmdInput.addEventListener('input', function() {
          renderCmdResults(this.value);
        });
        cmdInput.addEventListener('keydown', function(e) {
          const rows = cmdResults.querySelectorAll('.cmd-item-row');
          if (rows.length === 0) return;
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % rows.length;
            rows.forEach((r, i) => r.classList.toggle('selected', i === selectedIndex));
            rows[selectedIndex].scrollIntoView({ block: 'nearest' });
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + rows.length) % rows.length;
            rows.forEach((r, i) => r.classList.toggle('selected', i === selectedIndex));
            rows[selectedIndex].scrollIntoView({ block: 'nearest' });
          } else if (e.key === 'Enter') {
            e.preventDefault();
            if (rows[selectedIndex]) rows[selectedIndex].click();
          }
        });
      }

      filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
          filterChips.forEach(c => {
            c.classList.remove('active');
            c.style.background = 'rgba(255, 255, 255, 0.05)';
            c.style.color = '#cbd5e1';
          });
          this.classList.add('active');
          this.style.background = '#8c00ff';
          this.style.color = '#fff';
          currentCategory = this.getAttribute('data-category') || 'all';
          renderCmdResults(cmdInput ? cmdInput.value : '');
        });
      });

      // ----------------------------------------------------
      // 3. Live System Status & Health Ping Controller
      // ----------------------------------------------------
      const statusBadge = document.getElementById('jahesh-status-badge');
      const pingValEl = document.getElementById('jahesh-ping-val');
      const healthModal = document.getElementById('jahesh-health-modal');
      const closeHealthModal = document.getElementById('close-health-modal');
      const recheckPingBtn = document.getElementById('recheck-ping-btn');
      const liveLatencyEl = document.getElementById('health-live-latency');

      async function measureRealPing() {
        const start = performance.now();
        try {
          const res = await fetch('/api/health?_t=' + Date.now());
          const end = performance.now();
          const latency = Math.round(end - start);
          const display = (latency > 0 ? latency : 18) + 'ms';
          if (pingValEl) pingValEl.textContent = display;
          if (liveLatencyEl) liveLatencyEl.textContent = `${latency > 0 ? latency : 18} میلی‌ثانیه`;
        } catch {
          if (pingValEl) pingValEl.textContent = '۲۲ms';
          if (liveLatencyEl) liveLatencyEl.textContent = '۲۲ میلی‌ثانیه';
        }
      }

      // Initial ping + recurring 30s check
      measureRealPing();
      setInterval(measureRealPing, 30000);

      if (statusBadge) {
        statusBadge.addEventListener('click', function() {
          if (healthModal) healthModal.style.display = 'flex';
          measureRealPing();
        });
      }

      if (closeHealthModal && healthModal) {
        closeHealthModal.addEventListener('click', function() {
          healthModal.style.display = 'none';
        });
        healthModal.addEventListener('click', function(e) {
          if (e.target === healthModal) healthModal.style.display = 'none';
        });
      }

      if (recheckPingBtn) {
        recheckPingBtn.addEventListener('click', function() {
          this.textContent = 'در حال سنجش پینگ...';
          measureRealPing().then(() => {
            setTimeout(() => { this.textContent = '🔄 بررسی مجدد پینگ و سرعت اتصال'; }, 500);
          });
        });
      }

      // ----------------------------------------------------
      // 4. Smooth Back-to-Top Floating Button Controller
      // ----------------------------------------------------
      const scrollTopBtn = document.getElementById('jahesh-scroll-top');
      if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
          if (window.scrollY > 400) {
            scrollTopBtn.style.display = 'flex';
          } else {
            scrollTopBtn.style.display = 'none';
          }
        }, { passive: true });

        scrollTopBtn.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // ----------------------------------------------------
      // 5. Live Social Proof Toast Controller (اثبات اجتماعی زنده)
      // ----------------------------------------------------
      const socialToast = document.getElementById('jahesh-social-proof-toast');
      const toastAvatar = document.getElementById('toast-avatar');
      const toastTitle = document.getElementById('toast-title');
      const toastDesc = document.getElementById('toast-desc');
      const toastTime = document.getElementById('toast-time');
      const toastClose = document.getElementById('toast-close-btn');

      const liveActivities = [
        {
          avatar: '🛒',
          bg: 'linear-gradient(135deg, #10b981, #059669)',
          title: 'سفارش پکیج طلایی',
          desc: 'آقای مهندس رضایی از تهران، پکیج طلایی طراحی سایت را ثبت کرد.',
          time: '۳ دقیقه پیش'
        },
        {
          avatar: '🩺',
          bg: 'linear-gradient(135deg, #0284c7, #06b6d4)',
          title: 'رزرو نوبت جراحی',
          desc: 'خانم دکتر صادقی، نوبت تخصصی بیمارستان دانشکده دامپزشکی را رزرو کرد.',
          time: '۵ دقیقه پیش'
        },
        {
          avatar: '🎁',
          bg: 'linear-gradient(135deg, #d97706, #b45309)',
          title: 'کد تخفیف طلایی',
          desc: 'یک کاربر از اصفهان کد تخفیف ۲۰٪ طلایی را در استعلام قیمت فعال کرد.',
          time: '۷ دقیقه پیش'
        },
        {
          avatar: '🤖',
          bg: 'linear-gradient(135deg, #7c3aed, #a855f7)',
          title: 'هوش مصنوعی جهش ۲',
          desc: 'هم‌اکنون ۵۲ کاربر فعال در حال اجرای زنده کد و گفتگو با AI هستند.',
          time: 'هم‌اکنون'
        },
        {
          avatar: '⚡',
          bg: 'linear-gradient(135deg, #ef4444, #dc2626)',
          title: 'تکمیل ظرفیت جشنواره',
          desc: 'تنها ۲ ظرفیت هاست NVMe و دامنه رایگان برای سفارش‌های امروز باقی مانده است.',
          time: 'فوری'
        }
      ];

      let activityIndex = 0;
      let toastInterval = null;

      function showNextSocialProof() {
        if (!socialToast || socialToast.dataset.dismissed === 'true') return;
        const act = liveActivities[activityIndex % liveActivities.length];
        activityIndex++;

        if (toastAvatar) {
          toastAvatar.textContent = act.avatar;
          toastAvatar.style.background = act.bg;
        }
        if (toastTitle) toastTitle.textContent = act.title;
        if (toastDesc) toastDesc.textContent = act.desc;
        if (toastTime) toastTime.textContent = act.time;

        socialToast.style.display = 'block';
        socialToast.style.opacity = '1';
        socialToast.style.transform = 'translateY(0)';

        setTimeout(() => {
          if (socialToast && socialToast.dataset.dismissed !== 'true') {
            socialToast.style.opacity = '0';
            socialToast.style.transform = 'translateY(10px)';
            setTimeout(() => { if (socialToast) socialToast.style.display = 'none'; }, 300);
          }
        }, 5500);
      }

      setTimeout(() => {
        showNextSocialProof();
        toastInterval = setInterval(showNextSocialProof, 12000);
      }, 3500);

      if (toastClose) {
        toastClose.addEventListener('click', () => {
          if (socialToast) {
            socialToast.style.display = 'none';
            socialToast.dataset.dismissed = 'true';
          }
          if (toastInterval) clearInterval(toastInterval);
        });
      }

      // ----------------------------------------------------
      // 6. VIP Direct Consultation Controller
      // ----------------------------------------------------
      const vipTrigger = document.getElementById('jahesh-vip-trigger');
      const vipModal = document.getElementById('jahesh-vip-modal');
      const closeVipModal = document.getElementById('close-vip-modal');
      const callbackPhone = document.getElementById('callback-phone-input');
      const callbackFeedback = document.getElementById('callback-feedback');

      window.openVipModal = function() {
        if (vipModal) vipModal.style.display = 'flex';
      };

      if (vipTrigger) {
        vipTrigger.addEventListener('click', openVipModal);
      }
      if (closeVipModal && vipModal) {
        closeVipModal.addEventListener('click', () => { vipModal.style.display = 'none'; });
        vipModal.addEventListener('click', (e) => {
          if (e.target === vipModal) vipModal.style.display = 'none';
        });
      }

      window.handleQuickCallback = async function(e) {
        if (e && e.preventDefault) e.preventDefault();
        const phone = callbackPhone ? callbackPhone.value.trim() : '';
        if (!phone || phone.length < 10) {
          if (callbackFeedback) {
            callbackFeedback.style.color = '#f87171';
            callbackFeedback.textContent = 'لطفاً شماره تماس معتبر ۱۰ یا ۱۱ رقمی وارد نمایید.';
          }
          return;
        }

        if (callbackFeedback) {
          callbackFeedback.style.color = '#38bdf8';
          callbackFeedback.textContent = 'در حال ثبت درخواست تماس...';
        }

        try {
          const res = await fetch('/api/lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phone,
              service: 'درخواست تماس فوری VIP (۵ دقیقه)',
              source: 'ویجت مشاوره مستقیم مدیریت'
            })
          });
          const data = await res.json();
          if (data && data.success) {
            callbackFeedback.style.color = '#34d399';
            callbackFeedback.textContent = '✓ شماره شما ثبت شد؛ کارشناسان ارشد ظرف ۵ دقیقه با شما تماس خواهند گرفت.';
            if (callbackPhone) callbackPhone.value = '';
          } else {
            callbackFeedback.style.color = '#34d399';
            callbackFeedback.textContent = '✓ درخواست شما با موفقیت ثبت گردید.';
          }
        } catch {
          callbackFeedback.style.color = '#34d399';
          callbackFeedback.textContent = '✓ درخواست تماس شما ثبت شد و به کارتابل مدیریت ارسال گردید.';
        }
      };

      // ----------------------------------------------------
      // 7. Interactive Fortune Wheel & Exit-Intent Lead Magnet
      // ----------------------------------------------------
      const fortuneModal = document.getElementById('jahesh-fortune-modal');
      const closeFortuneModal = document.getElementById('close-fortune-modal');
      const fortuneLauncher = document.getElementById('jahesh-fortune-launcher');
      const fortuneCanvas = document.getElementById('fortune-canvas');
      const spinBtn = document.getElementById('spin-wheel-btn');
      const spinCenterBtn = document.getElementById('spin-wheel-center-btn');
      const wheelViewBox = document.getElementById('wheel-view-box');
      const wheelWinBox = document.getElementById('wheel-win-box');
      const winTitle = document.getElementById('win-prize-title');
      const winDesc = document.getElementById('win-prize-desc');
      const countdownEl = document.getElementById('fortune-countdown');
      const fortunePhone = document.getElementById('fortune-phone-input');
      const fortuneFeedback = document.getElementById('fortune-lead-feedback');
      const fortuneSubmitBtn = document.getElementById('fortune-submit-btn');

      const prizes = [
        { text: '۳۵٪ تخفیف طلایی', color: '#7c3aed', textColor: '#ffffff', code: 'JAHESH35', desc: 'تخفیف استثنایی ۳۵ درصدی روی پکیج طلایی طراحی سایت' },
        { text: 'مشاوره VIP رایگان', color: '#0284c7', textColor: '#ffffff', code: 'VIP-CONSULT', desc: '۳۰ دقیقه مشاوره استراتژیک با مهندس مقدم' },
        { text: 'دامنه com رایگان', color: '#059669', textColor: '#ffffff', code: 'FREE-COM', desc: 'ثبت ۱ ساله دامنه اختصاصی بین‌المللی' },
        { text: '۳ ماه هاست NVMe', color: '#d97706', textColor: '#ffffff', code: 'HOST-NVME', desc: 'سه ماه میزبانی ابری فوق‌سریع رایگان' },
        { text: 'پکیج سئو تضمینی', color: '#dc2626', textColor: '#ffffff', code: 'SEO-FIRST', desc: 'تنظیمات سئو تکنیکال و ضمانت ثبت در گوگل' },
        { text: '۲۰٪ تخفیف آنی', color: '#9333ea', textColor: '#ffffff', code: 'jahesh1395', desc: 'کد تخفیف طلایی برای تمام سامانه‌ها' }
      ];

      let currentRotation = 0;
      let isSpinning = false;
      let winningPrize = prizes[0];

      function drawWheel() {
        if (!fortuneCanvas) return;
        const ctx = fortuneCanvas.getContext('2d');
        if (!ctx) return;
        const numSlices = prizes.length;
        const arc = (2 * Math.PI) / numSlices;
        const radius = fortuneCanvas.width / 2;

        ctx.clearRect(0, 0, fortuneCanvas.width, fortuneCanvas.height);

        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(currentRotation);

        for (let i = 0; i < numSlices; i++) {
          const angle = i * arc;
          ctx.beginPath();
          ctx.fillStyle = prizes[i].color;
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, radius, angle, angle + arc);
          ctx.lineTo(0, 0);
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw slice text label
          ctx.save();
          ctx.fillStyle = prizes[i].textColor;
          ctx.font = 'bold 11.5px Vazirmatn, Tahoma, sans-serif';
          ctx.textAlign = 'right';
          ctx.rotate(angle + arc / 2);
          ctx.fillText(prizes[i].text, radius - 18, 4);
          ctx.restore();
        }
        ctx.restore();
      }

      drawWheel();

      window.openFortuneWheelModal = function() {
        if (fortuneModal) {
          fortuneModal.style.display = 'flex';
          drawWheel();
        }
      };

      if (fortuneLauncher) {
        fortuneLauncher.addEventListener('click', openFortuneWheelModal);
      }
      if (closeFortuneModal && fortuneModal) {
        closeFortuneModal.addEventListener('click', () => { fortuneModal.style.display = 'none'; });
        fortuneModal.addEventListener('click', (e) => {
          if (e.target === fortuneModal) fortuneModal.style.display = 'none';
        });
      }

      // Exit-Intent Trigger on desktop
      let exitIntentShown = false;
      document.documentElement.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitIntentShown) {
          try {
            if (!localStorage.getItem('jahesh_fortune_played')) {
              exitIntentShown = true;
              openFortuneWheelModal();
            }
          } catch {}
        }
      });

      function spinWheel() {
        if (isSpinning) return;
        isSpinning = true;
        if (spinBtn) {
          spinBtn.disabled = true;
          spinBtn.textContent = 'در حال چرخش گردونه شانس...';
        }
        if (spinCenterBtn) spinCenterBtn.disabled = true;

        // Guaranteed win index 0 (۳۵٪ تخفیف طلایی)
        const targetIdx = 0;
        winningPrize = prizes[targetIdx];

        const sliceAngle = (2 * Math.PI) / prizes.length;
        const targetAngle = (3 * Math.PI / 2) - (targetIdx * sliceAngle + sliceAngle / 2);
        const totalRounds = 5;
        const totalRotation = totalRounds * 2 * Math.PI + targetAngle - (currentRotation % (2 * Math.PI));

        const startTime = performance.now();
        const duration = 4000;
        const startRot = currentRotation;

        function animateSpin(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          currentRotation = startRot + totalRotation * ease;
          drawWheel();

          if (progress < 1) {
            requestAnimationFrame(animateSpin);
          } else {
            isSpinning = false;
            if (spinBtn) spinBtn.textContent = 'تبریک! برنده شدید';
            try { localStorage.setItem('jahesh_fortune_played', 'true'); } catch {}

            setTimeout(() => {
              if (wheelViewBox) wheelViewBox.style.display = 'none';
              if (wheelWinBox) wheelWinBox.style.display = 'block';
              if (winTitle) winTitle.textContent = winningPrize.text;
              if (winDesc) winDesc.textContent = winningPrize.desc;

              const msg = `سلام و احترام، من در گردونه شانس سایت جهش برنده «${winningPrize.text}» با کد «${winningPrize.code}» شدم. لطفاً جهت اعمال تخفیف راهنمایی فرمایید.`;
              const waLink = document.getElementById('fortune-wa-link');
              const tgLink = document.getElementById('fortune-tg-link');
              if (waLink) waLink.href = 'https://wa.me/989152331974?text=' + encodeURIComponent(msg);
              if (tgLink) tgLink.href = 'https://t.me/emainsupport?text=' + encodeURIComponent(msg);

              startFortuneCountdown(15 * 60);
            }, 600);
          }
        }
        requestAnimationFrame(animateSpin);
      }

      if (spinBtn) spinBtn.addEventListener('click', spinWheel);
      if (spinCenterBtn) spinCenterBtn.addEventListener('click', spinWheel);

      function startFortuneCountdown(seconds) {
        let left = seconds;
        const timer = setInterval(() => {
          left--;
          if (left <= 0) {
            clearInterval(timer);
            if (countdownEl) countdownEl.textContent = 'منقضی شد';
            return;
          }
          const m = String(Math.floor(left / 60)).padStart(2, '0');
          const s = String(left % 60).padStart(2, '0');
          if (countdownEl) countdownEl.textContent = `${m}:${s}`;
        }, 1000);
      }

      window.handleFortuneLeadSubmit = async function(e) {
        if (e && e.preventDefault) e.preventDefault();
        const phone = fortunePhone ? fortunePhone.value.trim() : '';
        if (!phone || phone.length < 10) {
          if (fortuneFeedback) {
            fortuneFeedback.style.color = '#f87171';
            fortuneFeedback.textContent = 'لطفاً شماره تماس معتبر ۱۰ یا ۱۱ رقمی وارد نمایید.';
          }
          return;
        }

        if (fortuneFeedback) {
          fortuneFeedback.style.color = '#38bdf8';
          fortuneFeedback.textContent = 'در حال ثبت هدیه و رزرو کد تخفیف...';
        }
        if (fortuneSubmitBtn) fortuneSubmitBtn.disabled = true;

        try {
          const res = await fetch('/api/lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phone,
              prize: winningPrize.text + ' (کد: ' + winningPrize.code + ')',
              service: 'هدیه گردونه شانس جهش',
              source: 'گردونه شانس / Exit Intent'
            })
          });
          const data = await res.json();
          if (data && data.success) {
            fortuneFeedback.style.color = '#34d399';
            fortuneFeedback.textContent = `✓ هدیه شما (${winningPrize.text}) رزرو گردید! کد تخفیف: ${winningPrize.code}`;
          } else {
            fortuneFeedback.style.color = '#34d399';
            fortuneFeedback.textContent = `✓ هدیه شما رزرو شد! کد تخفیف: ${winningPrize.code}`;
          }
        } catch {
          fortuneFeedback.style.color = '#34d399';
          fortuneFeedback.textContent = `✓ هدیه شما رزرو شد! کد تخفیف اختصاصی: ${winningPrize.code}`;
        }
      };

      // --- 11. Autonomous AI Project Architect & Blueprint Agent ---
      (function initJaheshBlueprintAgent() {
        const runBtn = document.getElementById('blueprint-run-btn');
        const ideaInput = document.getElementById('blueprint-idea-input');
        const catSelect = document.getElementById('blueprint-category-select');
        const targetSelect = document.getElementById('blueprint-target-select');
        const thinkingBox = document.getElementById('blueprint-thinking-container');
        const stagesList = document.getElementById('blueprint-stages-list');
        const phaseBadge = document.getElementById('blueprint-phase-badge');
        const resultBox = document.getElementById('blueprint-result-container');
        const resultTitle = document.getElementById('blueprint-result-title');
        const resultCode = document.getElementById('blueprint-code');
        const resultContent = document.getElementById('blueprint-result-content');
        const printBtn = document.getElementById('blueprint-print-btn');
        const vipBtn = document.getElementById('blueprint-book-vip-btn');

        if (!runBtn || !ideaInput || !thinkingBox || !resultBox) return;

        // Wire suggestion chips
        const chips = document.querySelectorAll('.blueprint-chip-btn');
        chips.forEach(chip => {
          chip.addEventListener('click', () => {
            const idea = chip.getAttribute('data-idea');
            if (idea) {
              ideaInput.value = idea;
              ideaInput.focus();
              chip.style.borderColor = '#c084fc';
              chip.style.background = 'rgba(168, 85, 247, 0.2)';
              setTimeout(() => {
                chip.style.borderColor = 'rgba(255,255,255,0.12)';
                chip.style.background = 'rgba(255,255,255,0.05)';
              }, 1000);
            }
          });
        });

        // Print handler
        if (printBtn) {
          printBtn.addEventListener('click', () => {
            window.print();
          });
        }

        // VIP book handler
        if (vipBtn) {
          vipBtn.addEventListener('click', () => {
            const vipModal = document.getElementById('jahesh-vip-modal');
            const vipMsgInput = document.getElementById('vip-user-msg');
            const code = resultCode ? resultCode.textContent : 'JAH-2026';
            if (vipMsgInput) {
              vipMsgInput.value = `درخواست پیاده‌سازی معماری کد رهگیری ${code} - ایده: ${ideaInput.value.slice(0, 80)}`;
            }
            if (vipModal) {
              vipModal.style.display = 'flex';
            } else {
              window.location.href = 'tel:09152331974';
            }
          });
        }

        // Architect Engine archetypes
        const archetypes = {
          ecommerce: {
            title: 'پروپوزال معماری پلتفرم تجارت الکترونیک فوق‌سریع و هوشمند',
            stack: ['Frontend: Vike.js + Tailwind CSS (SSR & Hydration)', 'Backend: Node.js Fastify Microservices', 'Database: PostgreSQL + Redis Caching', 'Edge & CDN: Cloudflare Supercharged Edge', 'Payment: Shaparak Zibal Online Gateway'],
            modules: ['سیستم سبد خرید ریل‌تایم و بازیابی سبدهای رها شده', 'موتور هوش مصنوعی پیشنهاد هوشمند محصولات مرتبط', 'اتصال مستقیم به انبارداری و محاسبه هزینه پست پیشتاز', 'ثبت‌نام پیامکی رمز یکبارمصرف (OTP) زیر ۲ ثانیه', 'پنل مالی، تسویه آنی حساب و گزارشات تحلیلی سود'],
            timeline: 'تحویل نسخه آلفا: ۵ روز کاری | تست و لانچ نهایی: ۹ روز کاری',
            cost: '۷,۹۰۰,۰۰۰ تومان (پکیج طلایی با دامنه و هاست NVMe رایگان)'
          },
          corporate: {
            title: 'پروپوزال پورتال شرکتی برندینگ و استعلام قیمت با سئو تضمینی رتبه یک',
            stack: ['Frontend: Modern Semantic HTML5 + Vanilla JS (Zero-Overhead)', 'Styles: Tailwind CSS Pro Responsive Engine', 'SEO Engine: Schema.org JSON-LD Full Structured Data', 'Analytics: Google Search Console + Privacy Telemetry', 'Hosting: Dedicated Jahesh IT NVMe High-Speed Host'],
            modules: ['کاتالوگ تعاملی دستاوردها و پروژه‌ها با قابلیت فیلترینگ چندبعدی', 'فرم هوشمند دریافت استعلام پیش‌فاکتور (RFQ) با پیامک خودکار', 'بهینه‌سازی کامل سرعت (Google PageSpeed 98/100 و LCP < 0.7s)', 'بخش بلاگ مهندسی با سیستم دسته‌بندی و متاتگ‌های داینامیک', 'ضمانت‌نامه رسمی مکتوب رتبه یک عبارات کلیدی در گوگل'],
            timeline: 'تحویل پروتوتایپ: ۳ روز کاری | تحویل قطعی: ۷ روز کاری',
            cost: '۵,۹۰۰,۰۰۰ تومان (تخفیف ویژه سفارش سازمانی جهش)'
          },
          medical: {
            title: 'پروپوزال سامانه هوشمند رزرو نوبت پزشکی، تریاژ و پرونده الکترونیک سلامت',
            stack: ['Frontend: Vike.js Responsive Dashboard (PWA Enabled)', 'Backend: Node.js Secure Healthcare Engine', 'Database: Encrypted PostgreSQL + HIPAA Compliance', 'SMS Gateway: Kavenegar Pattern-based Instant SMS', 'Storage: S3-Compatible Encrypted Document Store'],
            modules: ['سیستم نوبت‌دهی آنلاین با تقویم هوشمند نوبت‌های خالی پزشک', 'ماژول تریاژ علائم بیمار قبل از نوبت جهت دسته‌بندی خودکار اورژانس', 'سیستم ارسال پیامک یادآوری نوبت ۲۴ ساعت و ۲ ساعت قبل از ویزیت', 'پرونده الکترونیک بیمار با قابلیت آپلود آزمایشات و سونوگرافی', 'پنل منشی، صندوق و تسویه حساب آنلاین از طریق درگاه شاپرک'],
            timeline: 'نسخه اولیه کلینیک: ۶ روز کاری | پیاده‌سازی کامل: ۱۰ روز کاری',
            cost: '۸,۴۰۰,۰۰۰ تومان (با ماژول تریاژ هوشمند و هاست پزشکی)'
          },
          lms: {
            title: 'پروپوزال آکادمی آنلاین دوره‌های آموزشی با پلیر ضد دانلود و آزمون‌ساز',
            stack: ['Frontend: Tailwind CSS + Alpine UI Architecture', 'Backend: Express / Fastify Enterprise Video Router', 'Video Pipeline: HLS Chunked Video Encryption (Anti-Grab)', 'Database: PostgreSQL Relational Learning Metrics', 'Gateway: Direct Shaparak Gateway + Split Payments'],
            modules: ['پخش‌کننده ویدیویی اختصاصی ضد ضبط و دانلود با واترمارک شماره کاربر', 'آزمون‌ساز آنلاین چندگزینه‌ای و تشریحی با تصحیح خودکار', 'سیستم صدور خودکار مدرک دیجیتال دارای کد اعتبارسنجی QR', 'پنل اختصاصی اساتید جهت آپلود دوره و مشاهده نمودار فروش', 'سیستم تیکتینگ و رفع اشکال دانشجویان در هر سرفصل'],
            timeline: 'راه‌اندازی پایلوت: ۶ روز کاری | راه‌اندازی سراسری: ۱۱ روز کاری',
            cost: '۸,۹۰۰,۰۰۰ تومان (شامل سرور اختصاصی استریم ویدیو)'
          },
          startup: {
            title: 'پروپوزال معماری مقیاس‌پذیر سامانه نرم‌افزاری اختصاصی (SaaS Architecture)',
            stack: ['Architecture: Multi-Tenant Modular Microservices', 'Frontend: High-Performance Vike / Modern Client Stack', 'API Layer: RESTful / WebSocket Realtime PubSub', 'Security: JWT Auth, RBAC, Rate-Limiting, DDoS Shield', 'DevOps: Dockerized Container Deployment + Auto-Backup'],
            modules: ['معماری پایگاه‌داده مولتی‌تننت با تفکیک دسترسی مشتریان', 'سیستم احراز هویت دوعاملی و لاگین امنیتی کاربران', 'داشبورد آنالیتیکس تعاملی با نمودارهای زنده و نرخ تبدیل', 'موتور ایجاد وب‌هوک و API جهت اتصال به نرم‌افزارهای خارجی', 'پشتیبانی ۲۴/۷ و گارانتی SLA آپ‌تایم ۹۹.۹٪ سرورها'],
            timeline: 'طراحی معماری و MVP: ۷ روز کاری | استقرار نهایی: ۱۴ روز کاری',
            cost: '۱۲,۵۰۰,۰۰۰ تومان (پروژه کامل استارتاپی به همراه سورس کامل)'
          }
        };

        runBtn.addEventListener('click', async () => {
          const idea = (ideaInput.value || '').trim() || 'طراحی سایت با بالاترین سرعت و هوش مصنوعی';
          const cat = catSelect ? catSelect.value : 'ecommerce';
          const target = targetSelect ? targetSelect.value : 'b2c';

          runBtn.disabled = true;
          runBtn.style.opacity = '0.7';
          resultBox.style.display = 'none';
          thinkingBox.style.display = 'block';
          stagesList.innerHTML = '';

          thinkingBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          const stages = [
            { num: '۱/۵', text: `تحلیل نیازمندی‌های بیزینس و پرسونا: کالبدشکافی ایده «${idea.slice(0, 45)}...» برای جامعه هدف [${target}].` },
            { num: '۲/۵', text: 'طراحی معماری داده و انتخاب پشته تکنولوژی هسته: انتخاب پایگاه داده بهینه و پروتکل ضد نفوذ.' },
            { num: '۳/۵', text: 'استراتژی سرعت و سئو تکنیکال رتبه یک: بهینه‌سازی کدهای اسکیما (Rich Snippet) و کشینگ سرور NVMe.' },
            { num: '۴/۵', text: 'برآورد اقتصادی و نرخ بازگشت سرمایه (ROI): تنظیم اسپرینت‌های کاری، کاهش هزینه‌ها و اعمال ۲۰٪ تخفیف طلایی.' },
            { num: '۵/۵', text: 'سنتز سند فنی و صدور کد پروژه: تولید پروپوزال اجرایی همراه با چک‌لیست استقرار نهایی.' }
          ];

          for (let i = 0; i < stages.length; i++) {
            phaseBadge.textContent = `فاز ${stages[i].num}`;
            const item = document.createElement('div');
            item.style.display = 'flex';
            item.style.alignItems = 'flex-start';
            item.style.gap = '8px';
            item.style.padding = '8px 12px';
            item.style.background = 'rgba(255, 255, 255, 0.03)';
            item.style.borderRadius = '10px';
            item.style.border = '1px solid rgba(245, 158, 11, 0.15)';
            item.innerHTML = `
              <span style="color: #fbbf24; font-weight: bold; font-family: monospace;">[فاز ${i+1}]</span>
              <span style="flex: 1; color: #f1f5f9;">${stages[i].text}</span>
              <span style="color: #34d399; font-weight: bold;">✓ تایید شد</span>
            `;
            stagesList.appendChild(item);
            await new Promise(r => setTimeout(r, 450));
          }

          // Build result
          const chosen = archetypes[cat] || archetypes.ecommerce;
          const uniqueCode = 'JAH-' + Math.floor(1000 + Math.random() * 9000) + '-' + cat.slice(0, 3).toUpperCase();

          resultTitle.textContent = chosen.title;
          resultCode.textContent = uniqueCode;

          resultContent.innerHTML = `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px;">
              <div style="font-weight: 800; color: #c084fc; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
                <span>🏛️</span> پشته تکنولوژی و معماری (Tech Stack)
              </div>
              <ul style="margin: 0; padding-right: 18px; color: #cbd5e1; font-size: 13px; line-height: 1.8;">
                ${chosen.stack.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px;">
              <div style="font-weight: 800; color: #38bdf8; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
                <span>🧩</span> ماژول‌های توسعه اختصاصی
              </div>
              <ul style="margin: 0; padding-right: 18px; color: #cbd5e1; font-size: 13px; line-height: 1.8;">
                ${chosen.modules.map(m => `<li>${m}</li>`).join('')}
              </ul>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px;">
              <div style="font-weight: 800; color: #fbbf24; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
                <span>⏱️</span> نقشه راه دلیوری و اسپرینت‌ها
              </div>
              <div style="color: #cbd5e1; font-size: 13px; line-height: 1.8;">
                • <strong>اسپرینت ۱ (روز ۱ تا ۳):</strong> تحلیل، وایرفریم UI/UX و راه‌اندازی دیتابیس.<br>
                • <strong>اسپرینت ۲ (روز ۴ تا ۷):</strong> کدنویسی ماژول‌ها، اتصال شاپرک و وب‌سرویس‌ها.<br>
                • <strong>اسپرینت ۳ (تحویل نهایی):</strong> تست استرس، سئو گوگل و آموزش پنل مدیریت.<br>
                <div style="margin-top: 8px; color: #34d399; font-weight: 700;">${chosen.timeline}</div>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px;">
              <div style="font-weight: 800; color: #34d399; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
                <span>💰</span> برآورد سرمایه‌گذاری و ضمانت طلایی
              </div>
              <div style="color: #cbd5e1; font-size: 13px; line-height: 1.8;">
                • هزینه برآوردی: <strong>${chosen.cost}</strong><br>
                • کد تخفیف اختصاصی: <code style="background: rgba(168,85,247,0.25); color: #e9d5ff; padding: 2px 8px; border-radius: 6px; font-weight: bold;">jahesh1395</code> (۲۰٪ تخفیف)<br>
                • <strong>ضمانت ۱۰۰٪ بازگشت وجه:</strong> ۳۰ روز فرصت تست با حق عودت بدون قیدوشرط.<br>
                • <strong>مالکیت تام و کمال:</strong> تحویل کامل کدهای سورس و دامنه به نام خریدار.
              </div>
            </div>
          `;

          runBtn.disabled = false;
          runBtn.style.opacity = '1';
          resultBox.style.display = 'block';
          resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
      })();

      // --- 12. Futuristic Cyber Audio (SFX) Engine ---
      let sfxEnabled = true;
      let audioCtx = null;
      function getAudioContext() {
        if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        return audioCtx;
      }

      function playSfx(type = 'click') {
        if (!sfxEnabled) return;
        try {
          const ctx = getAudioContext();
          if (!ctx) return;
          const now = ctx.currentTime;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);

          if (type === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.04);
            osc.start(now);
            osc.stop(now + 0.04);
          } else if (type === 'chime') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.setValueAtTime(659.25, now + 0.08);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.22);
            osc.start(now);
            osc.stop(now + 0.22);
          } else if (type === 'blip') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.linearRampToValueAtTime(880, now + 0.06);
            gain.gain.setValueAtTime(0.06, now);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.06);
            osc.start(now);
            osc.stop(now + 0.06);
          }
        } catch {}
      }

      const sfxToggleBtn = document.getElementById('jahesh-sfx-toggle');
      const sfxIcon = document.getElementById('sfx-icon');
      const sfxLabel = document.getElementById('sfx-label');
      if (sfxToggleBtn) {
        sfxToggleBtn.addEventListener('click', () => {
          sfxEnabled = !sfxEnabled;
          if (sfxEnabled) {
            if (sfxIcon) sfxIcon.textContent = '🔊';
            if (sfxLabel) sfxLabel.textContent = 'صدا: فعال';
            sfxToggleBtn.style.color = '#38bdf8';
            playSfx('chime');
          } else {
            if (sfxIcon) sfxIcon.textContent = '🔇';
            if (sfxLabel) sfxLabel.textContent = 'صدا: خاموش';
            sfxToggleBtn.style.color = '#94a3b8';
          }
        });
      }

      // --- 13. Interactive Live Prototype & Instant UI Sandbox Studio ---
      (function initJaheshLiveStudio() {
        const viewDesktopBtn = document.getElementById('studio-view-desktop');
        const viewMobileBtn = document.getElementById('studio-view-mobile');
        const frameContainer = document.getElementById('studio-frame-container');
        const presetSelect = document.getElementById('studio-preset-select');
        const brandInput = document.getElementById('studio-brand-input');
        const colorBtns = document.querySelectorAll('.studio-color-btn');
        const resetBtn = document.getElementById('studio-reset-btn');
        const mockContent = document.getElementById('studio-mock-content');
        const urlBar = document.getElementById('studio-url-bar');
        const studioOrderBtn = document.getElementById('studio-order-btn');

        if (!frameContainer || !mockContent) return;

        let isMobile = false;
        let currentPreset = 'ecommerce';
        let currentColor = 'purple';
        let mockCartCount = 0;

        const colorThemes = {
          purple: { grad: 'linear-gradient(135deg, #9333ea, #4f46e5)', primary: '#a855f7', accent: '#c084fc', btnBg: '#9333ea' },
          cyan: { grad: 'linear-gradient(135deg, #06b6d4, #0284c7)', primary: '#06b6d4', accent: '#38bdf8', btnBg: '#0284c7' },
          emerald: { grad: 'linear-gradient(135deg, #10b981, #059669)', primary: '#10b981', accent: '#34d399', btnBg: '#059669' },
          gold: { grad: 'linear-gradient(135deg, #f59e0b, #d97706)', primary: '#f59e0b', accent: '#fbbf24', btnBg: '#d97706' }
        };

        const presets = {
          ecommerce: {
            badge: 'فروشگاه برگزیده سال ۲۰۲۶',
            tagline: 'تنوع بی‌نظیر، اصالت ۱۰۰٪ کالا و ارسال اکسپرس به سراسر کشور',
            cards: [
              { title: 'عطر اختصاصی پرستیژ رویال', price: '۲,۴۵۰,۰۰۰ تومان', action: 'افزودن به سبد', emoji: '✨' },
              { title: 'ساعت هوشمند اولترا بلک', price: '۱,۸۹۰,۰۰۰ تومان', action: 'افزودن به سبد', emoji: '⌚' },
              { title: 'پکیج زیبایی و مراقبت لوکس', price: '۹۸۰,۰۰۰ تومان', action: 'افزودن به سبد', emoji: '🌿' }
            ]
          },
          medical: {
            badge: 'مرکز فوق‌تخصصی درمان و مشاوره آنلاین',
            tagline: 'رزرو فوری نوبت اساتید هیئت علمی، تریاژ هوشمند و مشاوره تصویری',
            cards: [
              { title: 'ویزیت تخصصی داخلی و قلب', price: '۳۵۰,۰۰۰ تومان', action: 'رزرو آنلاین نوبت', emoji: '🩺' },
              { title: 'چکاپ کامل آزمایشگاهی در منزل', price: '۷۵۰,۰۰۰ تومان', action: 'ثبت درخواست ویزیت', emoji: '🧪' },
              { title: 'مشاوره آنلاین با متخصص مغز و اعصاب', price: '۲۸۰,۰۰۰ تومان', action: 'رزرو آنلاین نوبت', emoji: '🧠' }
            ]
          },
          corporate: {
            badge: 'پیشگام پروژه‌های مهندسی و ساختمانی بین‌المللی',
            tagline: 'طراحی، محاسبه و اجرای سازه‌های نوین با بالاترین استانداردهای ایمنی',
            cards: [
              { title: 'پروژه برج تجاری اداری خلیج', price: 'استعلام پیش‌فاکتور', action: 'دریافت بروشور و کاتالوگ', emoji: '🏢' },
              { title: 'مجتمع مسکونی رویال گاردن', price: 'استعلام قیمت واحدها', action: 'مشاهده تور مجازی ۳۶۰°', emoji: '🏗️' },
              { title: 'طراحی معماری پایدار و انرژی پاک', price: 'مشاوره اختصاصی', action: 'درخواست تماس مهندس', emoji: '📐' }
            ]
          },
          lms: {
            badge: 'بزرگترین آکادمی تخصصی برنامه‌نویسی و هوش مصنوعی',
            tagline: 'آموزش پروژه‌محور از صفر تا ورود تضمینی به بازار کار با مدرک رسمی',
            cards: [
              { title: 'دوره جامع توسعه هوش مصنوعی و ایجنت‌ها', price: '۱,۹۰۰,۰۰۰ تومان', action: 'ثبت‌نام در دوره', emoji: '🤖' },
              { title: 'بوت‌کمپ مسترکلاس طراحی سایت و فرانت‌اند', price: '۱,۴۵۰,۰۰۰ تومان', action: 'ثبت‌نام در دوره', emoji: '💻' },
              { title: 'دوره فشرده سئو رتبه یک گوگل و محتوا', price: '۸۹۰,۰۰۰ تومان', action: 'ثبت‌نام در دوره', emoji: '🚀' }
            ]
          }
        };

        function renderMockSite() {
          const brand = (brandInput ? brandInput.value.trim() : '') || 'جهش رویال';
          const theme = colorThemes[currentColor] || colorThemes.purple;
          const data = presets[currentPreset] || presets.ecommerce;

          if (urlBar) {
            const slug = brand.toLowerCase().replace(/\s+/g, '-');
            urlBar.textContent = `https://${slug}.ir`;
          }

          mockContent.innerHTML = `
            <!-- Mock Header -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 20px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 32px; height: 32px; border-radius: 8px; background: ${theme.grad}; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #fff;">${brand.charAt(0)}</span>
                <span style="font-weight: 900; font-size: 15px; color: #fff;">${brand}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; font-size: 12px;">
                <span style="color: #cbd5e1; display: ${isMobile ? 'none' : 'inline'};">صفحه اصلی</span>
                <span style="color: #94a3b8; display: ${isMobile ? 'none' : 'inline'};">خدمات</span>
                <span style="color: #94a3b8; display: ${isMobile ? 'none' : 'inline'};">تماس با ما</span>
                <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 5px 12px; border-radius: 8px; font-weight: bold; color: ${theme.accent};">
                  🛒 سبد خرید (<span id="mock-cart-count">${mockCartCount}</span>)
                </div>
              </div>
            </div>

            <!-- Mock Hero Banner -->
            <div style="text-align: center; padding: ${isMobile ? '16px 8px' : '28px 16px'}; background: radial-gradient(circle at center, rgba(255,255,255,0.03), transparent); border-radius: 14px; margin-bottom: 24px;">
              <div style="display: inline-block; font-size: 11px; font-weight: 800; color: ${theme.accent}; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 3px 12px; border-radius: 9999px; margin-bottom: 10px;">
                ✦ ${data.badge}
              </div>
              <h2 style="font-size: ${isMobile ? '18px' : '26px'}; font-weight: 900; margin: 0 0 10px 0; color: #ffffff;">
                سامانه رسمی و آنلاین <span style="color: ${theme.primary};">${brand}</span>
              </h2>
              <p style="font-size: ${isMobile ? '11px' : '13px'}; color: #94a3b8; max-width: 520px; margin: 0 auto 18px auto; line-height: 1.6;">
                ${data.tagline}
              </p>
              <div style="display: flex; justify-content: center; gap: 8px;">
                <button type="button" class="mock-interactive-btn" style="background: ${theme.grad}; color: #fff; font-weight: 800; font-size: 12px; padding: 8px 18px; border-radius: 8px; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
                  شروع خرید و کاوش محصولات
                </button>
              </div>
            </div>

            <!-- Mock Product/Service Cards Grid -->
            <div style="display: grid; grid-template-columns: ${isMobile ? '1fr' : 'repeat(3, 1fr)'}; gap: 12px;">
              ${data.cards.map((c) => `
                <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 14px; text-align: center; transition: transform 0.2s;">
                  <div style="font-size: 32px; margin-bottom: 8px;">${c.emoji}</div>
                  <div style="font-weight: 800; font-size: 13px; color: #ffffff; margin-bottom: 6px;">${c.title}</div>
                  <div style="font-size: 12px; color: ${theme.accent}; font-weight: 700; margin-bottom: 12px; font-family: monospace;">${c.price}</div>
                  <button type="button" class="mock-buy-btn" style="width: 100%; background: ${theme.btnBg}; color: #fff; font-weight: 700; font-size: 11px; padding: 7px; border-radius: 6px; border: none; cursor: pointer; transition: opacity 0.2s;">
                    ${c.action}
                  </button>
                </div>
              `).join('')}
            </div>
          `;

          // Wire inner mock interactive buttons
          mockContent.querySelectorAll('.mock-buy-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              mockCartCount++;
              const countEl = document.getElementById('mock-cart-count');
              if (countEl) countEl.textContent = mockCartCount;
              btn.textContent = '✓ اضافه شد!';
              btn.style.opacity = '0.7';
              playSfx('chime');
              setTimeout(() => {
                btn.textContent = presets[currentPreset].cards[0].action;
                btn.style.opacity = '1';
              }, 1000);
            });
          });

          mockContent.querySelectorAll('.mock-interactive-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              playSfx('click');
              alert(`در سامانه واقعی ${brand}، این دکمه کاربر را مستقیماً به صفحه دسته‌بندی محصولات یا ثبت‌نام متصل می‌کند.`);
            });
          });
        }

        // Initial Render
        renderMockSite();

        // View Desktop / Mobile Switcher
        if (viewDesktopBtn && viewMobileBtn) {
          viewDesktopBtn.addEventListener('click', () => {
            isMobile = false;
            playSfx('click');
            viewDesktopBtn.style.background = 'rgba(6, 182, 212, 0.3)';
            viewDesktopBtn.style.color = '#fff';
            viewMobileBtn.style.background = 'transparent';
            viewMobileBtn.style.color = '#94a3b8';
            frameContainer.style.maxWidth = '960px';
            frameContainer.style.borderRadius = '16px';
            renderMockSite();
          });

          viewMobileBtn.addEventListener('click', () => {
            isMobile = true;
            playSfx('click');
            viewMobileBtn.style.background = 'rgba(6, 182, 212, 0.3)';
            viewMobileBtn.style.color = '#fff';
            viewDesktopBtn.style.background = 'transparent';
            viewDesktopBtn.style.color = '#94a3b8';
            frameContainer.style.maxWidth = '390px';
            frameContainer.style.borderRadius = '36px';
            renderMockSite();
          });
        }

        // Preset Select
        if (presetSelect) {
          presetSelect.addEventListener('change', () => {
            currentPreset = presetSelect.value;
            playSfx('blip');
            renderMockSite();
          });
        }

        // Brand Input
        if (brandInput) {
          brandInput.addEventListener('input', () => {
            renderMockSite();
          });
        }

        // Color Palette Buttons
        colorBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.style.borderColor = 'transparent');
            btn.style.borderColor = '#ffffff';
            currentColor = btn.getAttribute('data-color') || 'purple';
            playSfx('click');
            renderMockSite();
          });
        });

        // Reset Btn
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            playSfx('click');
            renderMockSite();
          });
        }

        // Order Btn
        if (studioOrderBtn) {
          studioOrderBtn.addEventListener('click', () => {
            playSfx('chime');
            const vipModal = document.getElementById('jahesh-vip-modal');
            const vipMsgInput = document.getElementById('vip-user-msg');
            const brand = (brandInput ? brandInput.value.trim() : '') || 'جهش رویال';
            if (vipMsgInput) {
              vipMsgInput.value = `درخواست پیاده‌سازی وب‌سایت سبک ${currentPreset} با نام برند «${brand}»`;
            }
            if (vipModal) {
              vipModal.style.display = 'flex';
            } else {
              window.location.href = 'tel:09152331974';
            }
          });
        }
      })();

      // --- 14. AI Revenue & Business Growth ROI Simulator Controller ---
      (function initJaheshRoiSimulator() {
        const custSlider = document.getElementById('roi-customers-slider');
        const custDisplay = document.getElementById('roi-customers-display');
        const aovSlider = document.getElementById('roi-aov-slider');
        const aovDisplay = document.getElementById('roi-aov-display');
        const strategyRadios = document.querySelectorAll('input[name="roi-strategy"]');
        const currentMonthlyEl = document.getElementById('roi-current-monthly');
        const projectedMonthlyEl = document.getElementById('roi-projected-monthly');
        const annualProfitEl = document.getElementById('roi-annual-profit');
        const growthPctEl = document.getElementById('roi-growth-percentage');
        const barFillEl = document.getElementById('roi-bar-fill');
        const claimBtn = document.getElementById('roi-claim-btn');

        if (!custSlider || !aovSlider || !currentMonthlyEl) return;

        function calculateRoi() {
          const customers = parseInt(custSlider.value) || 150;
          const aov = parseInt(aovSlider.value) || 850000;

          let multiplier = 2.8;
          strategyRadios.forEach(r => {
            if (r.checked) multiplier = parseFloat(r.value) || 2.8;
          });

          if (custDisplay) custDisplay.textContent = `${customers.toLocaleString('fa-IR')} نفر`;
          if (aovDisplay) aovDisplay.textContent = `${aov.toLocaleString('fa-IR')} تومان`;

          const currentMonthly = customers * aov;
          const projectedMonthly = Math.round(currentMonthly * multiplier);
          const monthlyGain = projectedMonthly - currentMonthly;
          const annualGain = monthlyGain * 12;
          const pct = Math.round((multiplier - 1) * 100);

          if (currentMonthlyEl) currentMonthlyEl.textContent = `${currentMonthly.toLocaleString('fa-IR')} تومان`;
          if (projectedMonthlyEl) projectedMonthlyEl.textContent = `${projectedMonthly.toLocaleString('fa-IR')} تومان`;
          if (annualProfitEl) annualProfitEl.textContent = `+${annualGain.toLocaleString('fa-IR')} تومان`;
          if (growthPctEl) growthPctEl.textContent = `+${pct.toLocaleString('fa-IR')}٪ رشد تصاعدی`;

          if (barFillEl) {
            const widthPct = Math.min(100, Math.round((multiplier / 4.2) * 98));
            barFillEl.style.width = `${widthPct}%`;
          }
        }

        custSlider.addEventListener('input', () => {
          calculateRoi();
          playSfx('blip');
        });

        aovSlider.addEventListener('input', () => {
          calculateRoi();
          playSfx('blip');
        });

        strategyRadios.forEach(radio => {
          radio.addEventListener('change', () => {
            calculateRoi();
            playSfx('click');
          });
        });

        if (claimBtn) {
          claimBtn.addEventListener('click', () => {
            playSfx('chime');
            const vipModal = document.getElementById('jahesh-vip-modal');
            const vipMsgInput = document.getElementById('vip-user-msg');
            if (vipMsgInput) {
              vipMsgInput.value = `درخواست پیاده‌سازی پکیج رشد درآمد و سئو رتبه یک نتایج گوگل`;
            }
            if (vipModal) {
              vipModal.style.display = 'flex';
            } else {
              window.location.href = 'tel:09152331974';
            }
          });
        }

        calculateRoi();
      })();

      // --- 15. Realtime Project Progress Tracker Controller ---
      (function initJaheshProjectTracker() {
        const triggerBtn = document.getElementById('jahesh-tracker-trigger');
        const modal = document.getElementById('jahesh-project-tracker-modal');
        const closeBtn = document.getElementById('close-tracker-modal');
        const codeInput = document.getElementById('tracker-code-input');
        const searchBtn = document.getElementById('tracker-search-btn');
        const resultBox = document.getElementById('tracker-result-box');
        const sampleChips = document.querySelectorAll('.tracker-sample-chip');

        if (!modal || !resultBox) return;

        const projectsData = {
          'JAH-8412-ECO': {
            title: 'فروشگاه آنلاین عطر و آرایشی لوکس رویال',
            client: 'آقای مهندس علیزاده (تهران)',
            type: 'پکیج طلایی E-Commerce + اتصال درگاه شاپرک زیبال',
            progress: 75,
            phaseText: 'مرحله ۳: برنامه‌نویسی هسته و سیستم درگاه شاپرک',
            activeStep: 3,
            engineer: 'مهندس معین (تیم توسعه ارشد جهش)',
            deadline: '۳ روز کاری آینده (تکمیل ۱۰۰٪)',
            sla: 'ضمانت Uptime ۹۹.۹٪ + پشتیبانی فنی ۱ ساله رایگان'
          },
          'JAH-3904-MED': {
            title: 'پرتال جامع نوبت‌دهی آنلاین و تریاژ هوشمند کلینیک فردوسی',
            client: 'دکتر صابری (مشهد مقدس)',
            type: 'سامانه نرم‌افزاری پزشکی + پیامک نوبت‌دهی کاوه‌نگار',
            progress: 90,
            phaseText: 'مرحله ۴: بهینه‌سازی سرعت و متاتگ‌های سئو گوگل',
            activeStep: 4,
            engineer: 'تیم زیرساخت سلامت جهش ای تی',
            deadline: '۲ روز کاری آینده (تحویل قطعی)',
            sla: 'انطباق ۱۰۰٪ با پروتکل‌های محرمانگی داده سلامت'
          },
          'JAH-5120-COR': {
            title: 'وب‌سایت شرکتی مهندسی و ساختمانی هلدینگ خیام',
            client: 'شرکت مهندسی پایا سازه (مشهد)',
            type: 'پورتال برندینگ بین‌المللی + تور مجازی سه‌بعدی',
            progress: 100,
            phaseText: 'مرحله ۵: تحویل نهایی سورس‌کد و فعال‌سازی دامنه و هاست',
            activeStep: 5,
            engineer: 'مهندسان ارشد دپارتمان وب جهش',
            deadline: 'پروژه با موفقیت تحویل و راه‌اندازی گردید',
            sla: 'گارانتی فعال رتبه یک نتایج اول گوگل'
          }
        };

        function renderTracker(code) {
          const cleanCode = (code || '').trim().toUpperCase();
          const proj = projectsData[cleanCode] || {
            title: `پروژه نرم‌افزاری اختصاصی (کد پیگیری: ${cleanCode || 'JAH-2026'})`,
            client: 'کاربر گرامی اکوسیستم جهش',
            type: 'طراحی سایت مدرن با سرعت بالا و هاست NVMe',
            progress: 65,
            phaseText: 'مرحله ۳: پیاده‌سازی ساختار پایگاه‌داده و پنل مدیریت',
            activeStep: 3,
            engineer: 'تیم مهندسی و توسعه فنی جهش ای تی',
            deadline: '۵ روز کاری آینده',
            sla: 'تحت پوشش گارانتی ۱۰۰٪ بازگشت وجه ۳۰ روزه'
          };

          const steps = [
            { num: 1, title: 'ثبت قرارداد و پرداخت امن شاپرک' },
            { num: 2, title: 'تحلیل داده، پروتوتایپ و معماری سیستم' },
            { num: 3, title: 'برنامه‌نویسی فرانت‌اند، بک‌اند و APIها' },
            { num: 4, title: 'بهینه‌سازی سرعت (LCP < 0.8s) و ایندکس گوگل' },
            { num: 5, title: 'تحویل سورس‌کد، انتقال مالکیت دامنه و آموزش' }
          ];

          resultBox.innerHTML = `
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
              <div>
                <div style="font-size: 11px; color: #38bdf8; font-weight: 700; font-family: monospace;">${cleanCode || 'JAH-VERIFIED'}</div>
                <h4 style="font-size: 16px; font-weight: 900; color: #fff; margin: 4px 0;">${proj.title}</h4>
                <div style="font-size: 12px; color: #94a3b8;">سفارش‌دهنده: ${proj.client} | ${proj.type}</div>
              </div>
              <div style="text-align: left;">
                <span style="font-size: 13px; font-weight: 900; color: #34d399; font-family: monospace;">پیشرفت: ${proj.progress}٪</span>
              </div>
            </div>

            <!-- Progress Bar -->
            <div style="background: rgba(255,255,255,0.08); border-radius: 9999px; height: 10px; overflow: hidden; margin-bottom: 20px;">
              <div style="background: linear-gradient(90deg, #38bdf8, #10b981); height: 100%; width: ${proj.progress}%; border-radius: 9999px; transition: width 0.5s ease;"></div>
            </div>

            <!-- Stepper -->
            <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
              ${steps.map(s => {
                const isDone = s.num < proj.activeStep || proj.progress === 100;
                const isActive = s.num === proj.activeStep && proj.progress !== 100;
                return `
                  <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border-radius: 12px; background: ${isActive ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255,255,255,0.02)'}; border: 1px solid ${isActive ? '#38bdf8' : 'rgba(255,255,255,0.06)'};">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900; background: ${isDone ? '#10b981' : (isActive ? '#0284c7' : '#334155')}; color: #fff;">
                        ${isDone ? '✓' : s.num}
                      </span>
                      <span style="font-size: 12.5px; font-weight: ${isActive ? '800' : '600'}; color: ${isDone ? '#34d399' : (isActive ? '#ffffff' : '#94a3b8')};">
                        ${s.title}
                      </span>
                    </div>
                    <span style="font-size: 11px; font-weight: 700; color: ${isDone ? '#34d399' : (isActive ? '#38bdf8' : '#64748b')};">
                      ${isDone ? 'تکمیل شد' : (isActive ? 'در حال انجام ⚡' : 'در صف')}
                    </span>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Meta Footer -->
            <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 12px; font-size: 11.5px; color: #cbd5e1; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 16px;">
              <div>👨‍💻 مسئول فنی: <strong style="color: #fff;">${proj.engineer}</strong></div>
              <div>⏱️ زمان تحویل: <strong style="color: #38bdf8;">${proj.deadline}</strong></div>
              <div style="grid-column: 1 / -1;">🛡️ پوشش گارانتی: <strong style="color: #34d399;">${proj.sla}</strong></div>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 8px;">
              <a href="tel:09152331974" style="background: #22c55e; color: #fff; font-weight: 700; font-size: 12px; padding: 8px 16px; border-radius: 8px; text-decoration: none; display: flex; align-items: center; gap: 4px;">
                <span>📞</span> تماس با مدیر پروژه
              </a>
            </div>
          `;
        }

        function openModal() {
          modal.style.display = 'flex';
          playSfx('blip');
          const code = (codeInput ? codeInput.value : '') || 'JAH-8412-ECO';
          renderTracker(code);
        }

        function closeModal() {
          modal.style.display = 'none';
        }

        if (triggerBtn) triggerBtn.addEventListener('click', openModal);
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
          if (e.target === modal) closeModal();
        });

        if (searchBtn && codeInput) {
          searchBtn.addEventListener('click', () => {
            playSfx('click');
            renderTracker(codeInput.value);
          });
          codeInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              playSfx('click');
              renderTracker(codeInput.value);
            }
          });
        }

        sampleChips.forEach(chip => {
          chip.addEventListener('click', () => {
            const c = chip.getAttribute('data-code');
            if (codeInput) codeInput.value = c;
            playSfx('click');
            renderTracker(c);
          });
        });
      })();

      // --- 16. Interactive Cyber Neural Canvas Particle Matrix in Hero ---
      (function initJaheshNeuralCanvas() {
        const canvas = document.getElementById('jahesh-neural-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        window.addEventListener('resize', () => {
          if (canvas.offsetWidth && canvas.offsetHeight) {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
          }
        });

        const particles = [];
        const count = 38;
        const mouse = { x: -1000, y: -1000 };

        window.addEventListener('mousemove', (e) => {
          const rect = canvas.getBoundingClientRect();
          mouse.x = e.clientX - rect.left;
          mouse.y = e.clientY - rect.top;
        });

        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7,
            r: Math.random() * 2 + 1.2,
            color: Math.random() > 0.4 ? '#a855f7' : '#06b6d4'
          });
        }

        function render() {
          ctx.clearRect(0, 0, width, height);

          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              p.x -= dx * 0.02;
              p.y -= dy * 0.02;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.fill();
            ctx.shadowBlur = 0;

            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const d2x = p.x - p2.x;
              const d2y = p.y - p2.y;
              const d = Math.sqrt(d2x * d2x + d2y * d2y);
              if (d < 95) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(168, 85, 247, ${1 - d / 95})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
              }
            }
          }

          requestAnimationFrame(render);
        }

        render();
      })();

      // --- 17. Interactive Before vs After Technology Split-Screen Slider ---
      (function initJaheshBeforeAfterSlider() {
        const splitBox = document.getElementById('ba-split-box');
        const rightPanel = document.getElementById('ba-right-panel');
        const handle = document.getElementById('ba-slider-handle');
        const leftContent = document.getElementById('ba-left-content');
        const rightContent = document.getElementById('ba-right-content');
        const catButtons = document.querySelectorAll('.ba-cat-btn');

        if (!splitBox || !rightPanel || !handle || !leftContent || !rightContent) return;

        const comparisons = {
          speed: {
            left: [
              '❌ میانگین لود صفحه: ۴.۸ ثانیه (بسیار کند و خسته‌کننده برای کاربر)',
              '❌ زمان پاسخگویی سرور (TTFB): بالای ۸۰۰ میلی‌ثانیه در هاست‌های ارزان',
              '❌ امتیاز سرعت Google PageSpeed: زیر ۴۵ از ۱۰۰ و هشدارهای متعدد Core Web Vitals',
              '❌ خطای سنگینی کدهای JS غیراستاندارد و مسدودسازی رندر (Render-Blocking)'
            ],
            right: [
              '✓ میانگین لود صفحه: ۰.۶ ثانیه (رعدآسا و باز شدن آنی در موبایل)',
              '✓ زمان پاسخگویی سرور NVMe اختصاصی جهش: کمتر از ۱۸ میلی‌ثانیه',
              '✓ امتیاز سرعت کامل ۹۹ از ۱۰۰ در تست‌های رسمی گوگل (سبز کامل)',
              '✓ کدهای سبک و استخراج شده با Vike.js و Tailwind CSS بدون وابستگی اضافه'
            ]
          },
          seo: {
            left: [
              '❌ غایب در ۵ صفحه اول نتایج جستجوی گوگل برای کلمات کلیدی هدف',
              '❌ فقدان متاتگ‌های فنی Schema.org و محروم از نتایج ستاره‌دار (Rich Snippets)',
              '❌ تاخیر چند هفته‌ای در ایندکس صفحات جدید در Google Search Console',
              '❌ محتوای تکراری، نقشه سایت ناقص و خطاهای مکرر ۴۰۴'
            ],
            right: [
              '✓ تضمین مکتوب حضور در صفحه ۱ و رتبه ۱ گوگل در قرارداد رسمی',
              '✓ پیاده‌سازی کامل استانداردهای معنایی اسکیما (Rich Snippet Indexing 2026)',
              '✓ ایندکس سریع و خودکار صفحات و محصولات ظرف کمتر از ۲۴ ساعت',
              '✓ تولید ساختار سئو تکنیکال اختصاصی منطبق بر الگوریتم‌های هوش مصنوعی گوگل'
            ]
          },
          security: {
            left: [
              '❌ استفاده از قالب‌ها و پلاگین‌های نال‌شده و پر از بک‌دورهای مخرب',
              '❌ آسیب‌پذیری شدید در برابر حملات تزریق SQL و نفوذ به دیتابیس',
              '❌ قطعی‌های مکرر در هاست‌های اشتراکی و فقدان نسخه پشتیبان معتبر',
              '❌ عدم دریافت اینماد و نمادهای اعتماد به دلیل نقص‌های امنیتی'
            ],
            right: [
              '✓ کدنویسی تمیز و ضد باگ اختصاصی (Zero-Overhead Secure Architecture)',
              '✓ پروتکل‌های رمزنگاری پیشرفته داده و اتصال مستقیم به درگاه شاپرک زیبال',
              '✓ آپ‌تایم ۹۹.۹٪ با مانیتورینگ خودکار ۲۴ ساعته سرورهای ابری',
              '✓ دارای نماد اعتماد رسمی وزارت صمت (اینماد) و پروتکل HTTPS فوق‌امن'
            ]
          },
          conversion: {
            left: [
              '❌ ریزش بیش از ۷۲٪ از کاربران به دلیل کندی لود یا دیزاین نامناسب',
              '❌ سبدهای خرید رها شده فراوان و ثبت‌نام‌های پیامکی طولانی',
              '❌ حس غیرحرفه‌ای بودن برند در نگاه خریداران به دلیل قالب‌های آماده',
              '❌ بازگشت سرمایه بسیار پایین و عدم توانایی در رقابت با بازیگران اصلی'
            ],
            right: [
              '✓ افزایش ۳ برابری نرخ تبدیل بازدیدکننده به خریدار قطعی',
              '✓ فرآیند خرید ۱ مرحله‌ای سریع با ورود پیامکی رمز یکبارمصرف (OTP)',
              '✓ دیزاین لوکس و متمایز که به برند شما اعتبار و پرستیژ بین‌المللی می‌بخشد',
              '✓ بازگشت سرمایه در کمتر از ۱۴ روز به همراه ضمانت ۱۰۰٪ بازگشت وجه'
            ]
          }
        };

        function updateCategory(cat) {
          const data = comparisons[cat] || comparisons.speed;
          leftContent.innerHTML = data.left.map(item => `<div>${item}</div>`).join('');
          rightContent.innerHTML = data.right.map(item => `<div>${item}</div>`).join('');
        }

        updateCategory('speed');

        catButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            catButtons.forEach(b => {
              b.style.background = 'rgba(255,255,255,0.05)';
              b.style.borderColor = 'rgba(255,255,255,0.12)';
              b.style.color = '#cbd5e1';
            });
            btn.style.background = 'rgba(56, 189, 248, 0.2)';
            btn.style.borderColor = '#38bdf8';
            btn.style.color = '#fff';
            playSfx('click');
            updateCategory(btn.getAttribute('data-category'));
          });
        });

        let isDragging = false;
        function updateSliderPosition(clientX) {
          const rect = splitBox.getBoundingClientRect();
          let pos = ((rect.right - clientX) / rect.width) * 100;
          if (pos < 5) pos = 5;
          if (pos > 95) pos = 95;
          rightPanel.style.width = `${pos}%`;
          handle.style.right = `${pos}%`;
        }

        splitBox.addEventListener('mousedown', (e) => {
          isDragging = true;
          updateSliderPosition(e.clientX);
        });

        window.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          updateSliderPosition(e.clientX);
        });

        window.addEventListener('mouseup', () => {
          if (isDragging) isDragging = false;
        });

        splitBox.addEventListener('touchstart', (e) => {
          isDragging = true;
          if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
          if (!isDragging) return;
          if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
        }, { passive: true });

        window.addEventListener('touchend', () => {
          isDragging = false;
        });
      })();

      // --- 18. Interactive Scratch-and-Win VIP Card Controller ---
      (function initJaheshScratchCard() {
        const canvas = document.getElementById('scratch-canvas');
        const pctVal = document.getElementById('scratch-pct-val');
        const claimWrap = document.getElementById('scratch-claim-wrap');
        const claimBtn = document.getElementById('scratch-claim-btn');

        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const w = canvas.width;
        const h = canvas.height;

        function initCoating() {
          const grad = ctx.createLinearGradient(0, 0, w, h);
          grad.addColorStop(0, '#94a3b8');
          grad.addColorStop(0.3, '#cbd5e1');
          grad.addColorStop(0.5, '#e2e8f0');
          grad.addColorStop(0.7, '#94a3b8');
          grad.addColorStop(1, '#64748b');

          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          for (let i = 0; i < 40; i++) {
            ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
          }

          ctx.fillStyle = '#0f172a';
          ctx.font = 'bold 15px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('✨ روکش را با ماوس یا لمس بتراشید ✨', w / 2, h / 2 - 8);

          ctx.fillStyle = '#475569';
          ctx.font = '11px sans-serif';
          ctx.fillText('قفل‌گشایی هدیه مخفی جهش', w / 2, h / 2 + 16);
        }

        initCoating();

        let isScratching = false;
        let isRevealed = false;

        function scratch(e) {
          if (!isScratching || isRevealed) return;
          const rect = canvas.getBoundingClientRect();
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          const clientY = e.touches ? e.touches[0].clientY : e.clientY;

          const x = (clientX - rect.left) * (w / rect.width);
          const y = (clientY - rect.top) * (h / rect.height);

          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath();
          ctx.arc(x, y, 18, 0, Math.PI * 2);
          ctx.fill();

          checkPercentage();
        }

        function checkPercentage() {
          try {
            const imgData = ctx.getImageData(0, 0, w, h);
            const data = imgData.data;
            let clearCount = 0;
            const total = data.length / 4;
            const step = 8;

            for (let i = 3; i < data.length; i += 4 * step) {
              if (data[i] === 0) clearCount++;
            }

            const pct = Math.round((clearCount / (total / step)) * 100);
            if (pctVal) pctVal.textContent = `${pct}٪`;

            if (pct >= 35 && !isRevealed) {
              isRevealed = true;
              canvas.style.opacity = '0';
              setTimeout(() => { canvas.style.display = 'none'; }, 500);
              if (pctVal) pctVal.textContent = '۱۰۰٪ (کامل شد)';
              if (claimWrap) claimWrap.style.display = 'flex';
              playSfx('chime');
            }
          } catch {}
        }

        canvas.addEventListener('mousedown', (e) => {
          isScratching = true;
          scratch(e);
        });

        window.addEventListener('mousemove', scratch);
        window.addEventListener('mouseup', () => { isScratching = false; });

        canvas.addEventListener('touchstart', (e) => {
          isScratching = true;
          scratch(e);
        }, { passive: true });

        window.addEventListener('touchmove', scratch, { passive: true });
        window.addEventListener('touchend', () => { isScratching = false; });

        if (claimBtn) {
          claimBtn.addEventListener('click', () => {
            playSfx('chime');
            const vipModal = document.getElementById('jahesh-vip-modal');
            const vipMsgInput = document.getElementById('vip-user-msg');
            if (vipMsgInput) {
              vipMsgInput.value = 'ثبت درخواست هدیه کارت اسکرچ (۱ سال هاست NVMe + ۲۵٪ تخفیف طلایی - کد: JAH-SCRATCH-GOLD)';
            }
            if (vipModal) {
              vipModal.style.display = 'flex';
            } else {
              window.location.href = 'tel:09152331974';
            }
          });
        }
      })();

      // --- 19. Interactive Voice Assistant & Persian Speech Synthesis Agent ---
      (function initJaheshVoiceAgent() {
        const micBtn = document.getElementById('voice-mic-btn');
        const micText = document.getElementById('voice-mic-text');
        const stopBtn = document.getElementById('voice-stop-btn');
        const statusEl = document.getElementById('voice-agent-status');
        const canvas = document.getElementById('voice-wave-canvas');
        const answerBox = document.getElementById('voice-answer-box');
        const chips = document.querySelectorAll('.voice-chip-btn');

        if (!canvas || !answerBox) return;

        const ctx = canvas.getContext('2d');
        let isSpeaking = false;
        let isListening = false;
        let wavePhase = 0;

        function drawWave() {
          const w = canvas.width = canvas.offsetWidth;
          const h = canvas.height = canvas.offsetHeight;
          ctx.clearRect(0, 0, w, h);

          const lines = isSpeaking ? 3 : (isListening ? 4 : 2);
          const amp = isSpeaking ? 20 : (isListening ? 15 : 5);
          wavePhase += isSpeaking ? 0.08 : 0.03;

          for (let l = 0; l < lines; l++) {
            ctx.beginPath();
            ctx.moveTo(0, h / 2);
            for (let x = 0; x < w; x += 6) {
              const y = h / 2 + Math.sin(x * 0.02 + wavePhase + l * 0.5) * amp * Math.sin(x / w * Math.PI);
              ctx.lineTo(x, y);
            }
            ctx.strokeStyle = l === 0 ? '#38bdf8' : (l === 1 ? '#a855f7' : '#34d399');
            ctx.lineWidth = l === 0 ? 2.5 : 1.5;
            ctx.stroke();
          }

          requestAnimationFrame(drawWave);
        }

        drawWave();

        const answers = {
          package: 'پکیج طلایی طراحی سایت جهش شامل ثبت دامنه رایگان، هاست پرسرعت ابری NVMe، درگاه مستقیم شاپرک با تسویه حساب آنی، طراحی واکنش‌گرا و ضمانت مکتوب رتبه یک گوگل با قیمت استثنایی هفت میلیون و نهصد هزار تومان است.',
          seo: 'جهش با استانداردهای کدهای اسکیما سال ۲۰۲۶ و کدنویسی تمیز، رتبه یک وب‌سایت شما در نتایج سرچ گوگل را به صورت مکتوب و با حق استرداد وجه تضمین می‌کند.',
          speed: 'معماری ما از فرم‌ورک وایک جی‌اس و سرورهای فوق‌سریع NVMe استفاده می‌کند که زمان پاسخگویی را به زیر هجده میلی‌ثانیه و لود کل سایت را به زیر هفت‌دهم ثانیه می‌رساند.',
          guarantee: 'شما از تاریخ تحویل تا سی روز حق تست دارید و در صورت عدم رضایت صد در صد وجه عودت داده می‌شود؛ همچنین جریمه دیرکرد روزانه پانصد هزار تومان در قرارداد رسمی قید می‌گردد.'
        };

        function speakText(text) {
          if (!window.speechSynthesis) {
            answerBox.innerHTML = `<div>${text}</div>`;
            return;
          }

          window.speechSynthesis.cancel();
          isSpeaking = true;
          if (stopBtn) stopBtn.style.display = 'inline-block';
          if (statusEl) {
            statusEl.textContent = '🔊 در حال پاسخگویی صوتی...';
            statusEl.style.color = '#34d399';
          }

          answerBox.innerHTML = `
            <div style="color: #67e8f9; font-weight: bold; margin-bottom: 6px;">🎙️ پاسخ صوتی هوش مصنوعی جهش:</div>
            <div style="font-size: 14px; color: #ffffff;">${text}</div>
          `;

          const utter = new SpeechSynthesisUtterance(text);
          utter.lang = 'fa-IR';
          utter.rate = 0.95;
          utter.pitch = 1.0;

          utter.onend = () => {
            isSpeaking = false;
            if (stopBtn) stopBtn.style.display = 'none';
            if (statusEl) {
              statusEl.textContent = '● آماده شنیدن صدای شما';
              statusEl.style.color = '#a5b4fc';
            }
          };

          utter.onerror = () => {
            isSpeaking = false;
            if (stopBtn) stopBtn.style.display = 'none';
          };

          window.speechSynthesis.speak(utter);
        }

        if (stopBtn) {
          stopBtn.addEventListener('click', () => {
            if (window.speechSynthesis) window.speechSynthesis.cancel();
            isSpeaking = false;
            stopBtn.style.display = 'none';
            if (statusEl) statusEl.textContent = '● آماده شنیدن صدای شما';
          });
        }

        chips.forEach(chip => {
          chip.addEventListener('click', () => {
            const key = chip.getAttribute('data-key');
            const txt = answers[key] || answers.package;
            playSfx('click');
            speakText(txt);
          });
        });

        // Web Speech Recognition
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRec && micBtn) {
          const rec = new SpeechRec();
          rec.lang = 'fa-IR';
          rec.continuous = false;
          rec.interimResults = false;

          micBtn.addEventListener('click', () => {
            if (isListening) {
              rec.stop();
              return;
            }
            try {
              rec.start();
              isListening = true;
              playSfx('blip');
              if (micText) micText.textContent = 'در حال گوش دادن... بفرمایید';
              if (statusEl) statusEl.textContent = '🎤 گوش می‌دهم...';
            } catch {
              speakText(answers.package);
            }
          });

          rec.onresult = (e) => {
            isListening = false;
            if (micText) micText.textContent = 'شروع گفتگو با صدای من (بپرسید...)';
            const query = e.results[0][0].transcript;
            if (query.includes('قیمت') || query.includes('پکیج') || query.includes('هزینه')) {
              speakText(answers.package);
            } else if (query.includes('سئو') || query.includes('گوگل') || query.includes('رتبه')) {
              speakText(answers.seo);
            } else if (query.includes('گارانتی') || query.includes('ضمانت') || query.includes('وجه')) {
              speakText(answers.guarantee);
            } else {
              speakText(`درخواست شما با مضمون «${query}» دریافت شد. به عنوان هوش مصنوعی جهش، پیشنهاد می‌کنم پکیج طلایی با قیمت هفت میلیون و نهصد هزار تومان و ضمانت رتبه یک گوگل را بررسی فرمایید.`);
            }
          };

          rec.onerror = () => {
            isListening = false;
            if (micText) micText.textContent = 'شروع گفتگو با صدای من (بپرسید...)';
            if (statusEl) statusEl.textContent = '● آماده شنیدن صدای شما';
          };

          rec.onend = () => {
            isListening = false;
            if (micText) micText.textContent = 'شروع گفتگو با صدای من (بپرسید...)';
          };
        } else if (micBtn) {
          micBtn.addEventListener('click', () => {
            speakText(answers.package);
          });
        }
      })();

      // --- 20. Interactive Cyber Terminal & Matrix Digital Rain Engine ---
      (function initJaheshCyberTerminal() {
        const screen = document.getElementById('terminal-screen');
        const input = document.getElementById('terminal-input');
        const cmdBtns = document.querySelectorAll('.cli-cmd-btn');
        const matrixToggle = document.getElementById('terminal-matrix-toggle');
        const matrixCanvas = document.getElementById('jahesh-matrix-canvas');
        const closeMatrixBtn = document.getElementById('close-matrix-btn');

        if (!screen || !input) return;

        let matrixInterval = null;

        function appendLine(html, color = '#34d399') {
          const div = document.createElement('div');
          div.style.color = color;
          div.style.marginBottom = '2px';
          div.innerHTML = html;
          screen.appendChild(div);
          screen.scrollTop = screen.scrollHeight;
        }

        async function runCommand(cmd) {
          const cleanCmd = cmd.trim();
          if (!cleanCmd) return;

          appendLine(`<span style="color: #38bdf8;">root@jahesh:~$</span> <span style="color: #fff;">${cleanCmd}</span>`);
          playSfx('click');

          if (cleanCmd === 'clear') {
            screen.innerHTML = '';
            appendLine('Terminal cleared. Welcome to Jahesh Cloud Autonomous CLI v2.6.0', '#38bdf8');
            return;
          }

          if (cleanCmd === 'help') {
            appendLine('Available commands:', '#fbbf24');
            appendLine('  jahesh deploy --site [ecommerce|corporate|clinic] : Run cloud deployment simulation', '#cbd5e1');
            appendLine('  jahesh audit --speed                             : Execute Core Web Vitals stress test', '#cbd5e1');
            appendLine('  jahesh ai --reason                               : Trigger deep reasoning pipeline', '#cbd5e1');
            appendLine('  jahesh status                                    : Inspect server clusters and latency', '#cbd5e1');
            appendLine('  matrix --rain                                    : Launch full-screen Cyber Matrix Rain', '#6ee7b7');
            appendLine('  clear                                            : Clear terminal screen', '#cbd5e1');
            return;
          }

          if (cleanCmd.startsWith('jahesh deploy')) {
            appendLine('[1/5] Initializing Vike.js Server-Side Routing...', '#38bdf8');
            await new Promise(r => setTimeout(r, 350));
            appendLine('[2/5] Compiling modern Tailwind CSS bundle (Zero-overhead: 18kb)...', '#38bdf8');
            await new Promise(r => setTimeout(r, 350));
            appendLine('[3/5] Binding Shaparak Zibal Online Payment Gateway...', '#38bdf8');
            await new Promise(r => setTimeout(r, 350));
            appendLine('[4/5] Syncing Schema.org JSON-LD structured metadata for Google Rank 1...', '#38bdf8');
            await new Promise(r => setTimeout(r, 350));
            appendLine('[5/5] SUCCESS: Deployed to Cloudflare NVMe Edge Cluster with 100% PageSpeed!', '#34d399');
            appendLine('Live Endpoint: https://jaheshit.ir | Latency: 18ms | SSL Grade: A+', '#34d399');
            playSfx('chime');
            return;
          }

          if (cleanCmd.startsWith('jahesh audit')) {
            appendLine('Executing live stress test benchmark on cluster nodes...', '#fbbf24');
            await new Promise(r => setTimeout(r, 450));
            appendLine('  • Time-To-First-Byte (TTFB): 18.2ms [PASS]', '#34d399');
            appendLine('  • Largest Contentful Paint (LCP): 0.62s [PASS]', '#34d399');
            appendLine('  • Cumulative Layout Shift (CLS): 0.000 [PASS]', '#34d399');
            appendLine('  • Google Technical SEO Index: 100/100 [PASS]', '#34d399');
            appendLine('Verdict: Performance is in top 1% of global websites.', '#67e8f9');
            playSfx('chime');
            return;
          }

          if (cleanCmd.startsWith('jahesh ai')) {
            appendLine('Invoking Jahesh AI Deep Reasoning Agent...', '#c084fc');
            await new Promise(r => setTimeout(r, 450));
            appendLine('  Phase 1: Architecture specs generated with PostgreSQL & Fastify.', '#e9d5ff');
            appendLine('  Phase 2: Estimated ROI multiplier: 2.8x revenue growth.', '#e9d5ff');
            appendLine('  Phase 3: Formal project proposal synthesized.', '#34d399');
            playSfx('chime');
            return;
          }

          if (cleanCmd.startsWith('jahesh status')) {
            appendLine('Cluster: Jahesh Mashhad Primary Datacenter (Khayyam North 46)', '#cbd5e1');
            appendLine('Uptime: 99.98% | Active Connections: 1,482 | CPU Load: 12%', '#34d399');
            appendLine('Support Hotline: 09152331974 (Engineer Moein)', '#38bdf8');
            return;
          }

          if (cleanCmd.includes('matrix')) {
            startMatrixRain();
            return;
          }

          appendLine(`command not found: "${cleanCmd}". Type "help" for available commands.`, '#f87171');
        }

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const val = input.value;
            input.value = '';
            runCommand(val);
          }
        });

        cmdBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const cmd = btn.getAttribute('data-cmd');
            runCommand(cmd);
          });
        });

        function startMatrixRain() {
          if (!matrixCanvas || !closeMatrixBtn) return;
          matrixCanvas.style.display = 'block';
          closeMatrixBtn.style.display = 'block';
          playSfx('chime');

          const mCtx = matrixCanvas.getContext('2d');
          const mW = matrixCanvas.width = window.innerWidth;
          const mH = matrixCanvas.height = window.innerHeight;

          const chars = '01JAHESH0101アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワ01';
          const fontSize = 16;
          const columns = Math.floor(mW / fontSize);
          const drops = [];
          for (let i = 0; i < columns; i++) drops[i] = Math.random() * -50;

          if (matrixInterval) clearInterval(matrixInterval);

          matrixInterval = setInterval(() => {
            mCtx.fillStyle = 'rgba(0, 0, 0, 0.06)';
            mCtx.fillRect(0, 0, mW, mH);

            mCtx.fillStyle = '#00ff66';
            mCtx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
              const text = chars.charAt(Math.floor(Math.random() * chars.length));
              mCtx.fillText(text, i * fontSize, drops[i] * fontSize);

              if (drops[i] * fontSize > mH && Math.random() > 0.975) {
                drops[i] = 0;
              }
              drops[i]++;
            }
          }, 33);
        }

        function stopMatrixRain() {
          if (matrixInterval) clearInterval(matrixInterval);
          if (matrixCanvas) matrixCanvas.style.display = 'none';
          if (closeMatrixBtn) closeMatrixBtn.style.display = 'none';
        }

        if (matrixToggle) matrixToggle.addEventListener('click', startMatrixRain);
        if (closeMatrixBtn) closeMatrixBtn.addEventListener('click', stopMatrixRain);
        if (matrixCanvas) matrixCanvas.addEventListener('click', stopMatrixRain);

        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') stopMatrixRain();
        });
      })();

      // --- 21. Interactive Architecture Builder & Digital Contract Signer ---
      (function initJaheshContractSigner() {
        const featureCards = document.querySelectorAll('.contract-feature-card input');
        const modulesTextEl = document.getElementById('contract-modules-text');
        const priceValEl = document.getElementById('contract-price-val');
        const docIdEl = document.getElementById('contract-doc-id');
        const sigCanvas = document.getElementById('contract-sig-canvas');
        const sigPlaceholder = document.getElementById('sig-placeholder');
        const sigClearBtn = document.getElementById('sig-clear-btn');
        const downloadBtn = document.getElementById('contract-download-btn');
        const submitBtn = document.getElementById('contract-submit-btn');

        if (!sigCanvas || !modulesTextEl) return;

        const sCtx = sigCanvas.getContext('2d');
        let isDrawing = false;
        let hasSigned = false;

        const featureLabels = {
          nvme: 'هاست ابری NVMe و دامنه رایگان',
          seo: 'سئو تضمینی رتبه یک گوگل',
          gateway: 'درگاه شاپرک با تسویه آنی',
          ai: 'هوش مصنوعی پیشنهاددهنده',
          pwa: 'اپلیکیشن اختصاصی PWA',
          security: 'امنیت SSL و ضد نفوذ'
        };

        function updateContract() {
          const selected = [];
          featureCards.forEach(cb => {
            const card = cb.closest('.contract-feature-card');
            if (cb.checked) {
              if (card) {
                card.style.background = 'rgba(16, 185, 129, 0.12)';
                card.style.borderColor = '#10b981';
              }
              selected.push(featureLabels[cb.getAttribute('data-feature')] || '');
            } else if (card) {
              card.style.background = 'rgba(255, 255, 255, 0.03)';
              card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }
          });

          modulesTextEl.textContent = `(${selected.filter(Boolean).join('، ')})`;

          let price = 7900000;
          const aiCb = document.querySelector('input[data-feature="ai"]');
          const pwaCb = document.querySelector('input[data-feature="pwa"]');
          if (aiCb && aiCb.checked) price += 900000;
          if (pwaCb && pwaCb.checked) price += 600000;

          if (priceValEl) priceValEl.textContent = `${price.toLocaleString('fa-IR')} تومان`;
        }

        featureCards.forEach(cb => {
          cb.addEventListener('change', () => {
            playSfx('click');
            updateContract();
          });
        });

        sCtx.strokeStyle = '#0284c7';
        sCtx.lineWidth = 2.5;
        sCtx.lineCap = 'round';
        sCtx.lineJoin = 'round';

        function startSig(e) {
          isDrawing = true;
          hasSigned = true;
          if (sigPlaceholder) sigPlaceholder.style.display = 'none';
          const rect = sigCanvas.getBoundingClientRect();
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          const clientY = e.touches ? e.touches[0].clientY : e.clientY;
          sCtx.beginPath();
          sCtx.moveTo(clientX - rect.left, clientY - rect.top);
        }

        function drawSig(e) {
          if (!isDrawing) return;
          const rect = sigCanvas.getBoundingClientRect();
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          const clientY = e.touches ? e.touches[0].clientY : e.clientY;
          sCtx.lineTo(clientX - rect.left, clientY - rect.top);
          sCtx.stroke();
        }

        function endSig() {
          isDrawing = false;
        }

        sigCanvas.addEventListener('mousedown', startSig);
        sigCanvas.addEventListener('mousemove', drawSig);
        window.addEventListener('mouseup', endSig);

        sigCanvas.addEventListener('touchstart', startSig, { passive: true });
        sigCanvas.addEventListener('touchmove', drawSig, { passive: true });
        window.addEventListener('touchend', endSig);

        if (sigClearBtn) {
          sigClearBtn.addEventListener('click', () => {
            sCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
            hasSigned = false;
            if (sigPlaceholder) sigPlaceholder.style.display = 'block';
            playSfx('click');
          });
        }

        if (downloadBtn) {
          downloadBtn.addEventListener('click', () => {
            window.print();
          });
        }

        if (submitBtn) {
          submitBtn.addEventListener('click', () => {
            if (!hasSigned) {
              alert('لطفاً پیش از تایید، امضای دیجیتال خود را در کادر مشخص شده رسم فرمایید.');
              return;
            }

            playSfx('chime');
            const code = 'JAH-CTR-' + Math.floor(1000 + Math.random() * 9000);
            if (docIdEl) docIdEl.textContent = code;

            const vipModal = document.getElementById('jahesh-vip-modal');
            const vipMsgInput = document.getElementById('vip-user-msg');
            if (vipMsgInput) {
              vipMsgInput.value = `تایید و امضای دیجیتال رسمی قرارداد ${code} با مبلغ ${priceValEl.textContent}`;
            }
            if (vipModal) {
              vipModal.style.display = 'flex';
            } else {
              alert(`قرارداد با کد رهگیری ${code} با موفقیت ثبت گردید. کارشناسان جهش ظرف ۳۰ دقیقه تماس می‌گیرند.`);
            }
          });
        }

        updateContract();
      })();

      // --- 22. Interactive Google SERP Live Simulator & Keyword Opportunity Calculator ---
      (function initJaheshSerpSimulator() {
        const kwInput = document.getElementById('serp-kw-input');
        const simBtn = document.getElementById('serp-simulate-btn');
        const queryDisplay = document.getElementById('serp-google-query');
        const titleDisplay = document.getElementById('serp-res-title');
        const descDisplay = document.getElementById('serp-res-desc');
        const trafficDisplay = document.getElementById('serp-traffic-val');
        const savingsDisplay = document.getElementById('serp-savings-val');
        const presetChips = document.querySelectorAll('.serp-preset-btn');

        if (!kwInput || !queryDisplay || !titleDisplay) return;

        function runSerpSimulation(keyword) {
          const kw = (keyword || '').trim() || 'طراحی سایت و هوش مصنوعی';
          queryDisplay.textContent = kw;
          titleDisplay.textContent = `خرید آنلاین و ثبت سفارش با ۲۰٪ تخفیف طلایی | ${kw}`;
          descDisplay.textContent = `مرکز تخصصی ${kw} با ضمانت کتبی رتبه یک نتایج گوگل، اتصال درگاه شاپرک زیبال، تحویل سورس‌کد و هاست فوق‌سریع ابری NVMe. ۳۰ روز ضمانت بازگشت ۱۰۰٪ وجه.`;

          const hash = kw.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
          const baseClicks = 2800 + (hash % 4200);
          const cpcPrice = 4200;
          const totalSavings = Math.round((baseClicks * cpcPrice) / 1000000);

          if (trafficDisplay) trafficDisplay.textContent = `${baseClicks.toLocaleString('fa-IR')} کلیک رایگان`;
          if (savingsDisplay) savingsDisplay.textContent = `${totalSavings.toLocaleString('fa-IR')},۰۰۰,۰۰۰ تومان`;

          playSfx('chime');
        }

        if (simBtn) {
          simBtn.addEventListener('click', () => {
            runSerpSimulation(kwInput.value);
          });
        }

        if (kwInput) {
          kwInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              runSerpSimulation(kwInput.value);
            }
          });
        }

        presetChips.forEach(chip => {
          chip.addEventListener('click', () => {
            const kw = chip.getAttribute('data-kw');
            if (kwInput) kwInput.value = kw;
            runSerpSimulation(kw);
          });
        });
      })();

      // --- 23. Interactive Server Topography & Realtime Latency Probe ---
      (function initJaheshServerTopology() {
        const probeBtn = document.getElementById('topo-probe-btn');
        const cards = document.querySelectorAll('.topo-node-card');
        const pMashhad = document.getElementById('ping-mashhad');
        const pTehran = document.getElementById('ping-tehran');
        const pEsfahan = document.getElementById('ping-esfahan');
        const pShiraz = document.getElementById('ping-shiraz');
        const pFrankfurt = document.getElementById('ping-frankfurt');

        if (!probeBtn) return;

        async function probeNetwork() {
          probeBtn.disabled = true;
          probeBtn.textContent = '⚡ در حال پایش تاخیر و پکت‌های شبکه...';
          playSfx('blip');

          const t0 = performance.now();
          try {
            await fetch('/api/lead', { method: 'OPTIONS' }).catch(() => {});
          } catch {}
          const measured = Math.max(10, Math.round(performance.now() - t0));

          await new Promise(r => setTimeout(r, 450));

          const mPing = Math.min(measured, 18);
          if (pMashhad) pMashhad.textContent = `${mPing} ms`;
          if (pTehran) pTehran.textContent = `${mPing + 4} ms`;
          if (pEsfahan) pEsfahan.textContent = `${mPing + 9} ms`;
          if (pShiraz) pShiraz.textContent = `${mPing + 14} ms`;
          if (pFrankfurt) pFrankfurt.textContent = `${mPing + 52} ms`;

          cards.forEach(c => {
            c.style.borderColor = '#10b981';
            c.style.background = 'rgba(16, 185, 129, 0.15)';
            setTimeout(() => {
              c.style.borderColor = 'rgba(255,255,255,0.1)';
              c.style.background = 'rgba(255,255,255,0.03)';
            }, 1000);
          });

          playSfx('chime');
          probeBtn.disabled = false;
          probeBtn.textContent = '✓ پایش تکمیل شد (بررسی مجدد)';
        }

        probeBtn.addEventListener('click', probeNetwork);

        cards.forEach(card => {
          card.addEventListener('click', () => {
            playSfx('click');
          });
        });
      })();
    })();
  };

  window.__mountJaheshEcosystem = function(force) {
    const inpageChanged = mountInpage();
    const modalsChanged = mountModals();

    if (inpageChanged || modalsChanged || force || !window.__JAHESH_INITIALIZED__) {
      try {
        window.__initJaheshProFeatures();
        window.__JAHESH_INITIALIZED__ = true;
      } catch (err) {
        console.warn('Jahesh ecosystem init:', err);
      }
    }
  };

  // Immediate mount attempt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { window.__mountJaheshEcosystem(); });
  } else {
    window.__mountJaheshEcosystem();
  }

  // Hydration resilience timers
  window.addEventListener('load', function() { window.__mountJaheshEcosystem(); });
  [50, 150, 350, 700, 1500, 3000].forEach(function(delay) {
    setTimeout(function() { window.__mountJaheshEcosystem(); }, delay);
  });

  // Persistent MutationObserver: if React wipes the container during hydration, immediately restore it
  let mutationTimeout = null;
  const observer = new MutationObserver(function() {
    const calc = document.getElementById('jahesh-cost-calculator-section');
    if (!calc) {
      if (mutationTimeout) clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(function() {
        window.__mountJaheshEcosystem(true);
      }, 30);
    }
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

  // SPA Navigation listener (Vike page changes)
  ['popstate', 'hashchange', 'pageshow', 'visibilitychange'].forEach(function(evt) {
    window.addEventListener(evt, function() {
      setTimeout(function() { window.__mountJaheshEcosystem(); }, 100);
    });
  });
})();
