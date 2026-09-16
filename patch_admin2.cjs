const fs = require('fs');
const file = './jaheshkala-app/src/components/AdminPanel.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetSlider = `<div className="flex items-center gap-3 pt-1">
                          <span className="text-[10px] text-slate-400 shrink-0">۰٪ (شفاف/عکس روشن)</span>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            step="5"
                            value={bannerOpacity}
                            onChange={(e) => setBannerOpacity(Number(e.target.value))}
                            className="flex-1 h-2 bg-purple-900/80 rounded-lg appearance-none cursor-pointer accent-amber-400"
                          />
                          <span className="text-[10px] text-slate-400 shrink-0">۱۰۰٪ (رنگ کامل)</span>
                        </div>
                      </div>`;

const positionSelector = `
                      {/* Image Position Control */}
                      <div className="mt-3.5 p-3.5 bg-[#0f0924] border border-purple-800/60 rounded-xl space-y-2">
                        <label className="block text-xs font-bold text-slate-200">
                          محل قرارگیری عکس بنر (Focus Point)
                        </label>
                        <select
                          value={bannerImagePosition}
                          onChange={(e) => setBannerImagePosition(e.target.value)}
                          className="w-full bg-[#1b1038] border border-purple-800/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                          dir="rtl"
                        >
                          <option value="center">وسط (پیش‌فرض)</option>
                          <option value="top">بالا</option>
                          <option value="bottom">پایین</option>
                          <option value="left">چپ</option>
                          <option value="right">راست</option>
                          <option value="top left">بالا چپ</option>
                          <option value="top right">بالا راست</option>
                          <option value="bottom left">پایین چپ</option>
                          <option value="bottom right">پایین راست</option>
                        </select>
                      </div>`;

content = content.replace(targetSlider, targetSlider + positionSelector);

// Apply it to the live preview img in AdminPanel
const targetPreviewImg = `<img
                              src={bannerImage}
                              alt="پیش‌نمایش بنر"
                              className="absolute inset-0 w-full h-full object-cover object-center"`;

const newPreviewImg = `<img
                              src={bannerImage}
                              alt="پیش‌نمایش بنر"
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{ objectPosition: bannerImagePosition }}`;

content = content.replace(targetPreviewImg, newPreviewImg);

fs.writeFileSync(file, content, 'utf8');
console.log('Admin patch 2 done');
