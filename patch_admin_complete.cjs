const fs = require('fs');
const file = './jaheshkala-app/src/components/AdminPanel.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Crop to lucide-react imports and import ImageCropperModal
if (!content.includes('ImageCropperModal')) {
  content = content.replace(
    "import React, { useState } from 'react';\nimport {",
    "import React, { useState } from 'react';\nimport { ImageCropperModal } from './ImageCropperModal';\nimport {\n  Crop,"
  );
}

// 2. Ensure cropperModal state exists
if (!content.includes('cropperModal, setCropperModal')) {
  content = content.replace(
    "const [bannerSuccessMessage, setBannerSuccessMessage] = useState('');",
    `const [bannerSuccessMessage, setBannerSuccessMessage] = useState('');
  const [cropperModal, setCropperModal] = useState<{
    isOpen: boolean;
    imageSrc: string;
    aspectRatio: number;
    target: 'banner' | 'product_main';
  }>({
    isOpen: false,
    imageSrc: '',
    aspectRatio: 1,
    target: 'banner',
  });`
  );
}

// 3. Update handleBannerImageUpload to open cropper immediately
const oldHandleBanner = `  const handleBannerImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBannerImageLoading(true);
    try {
      // Compress to high quality web banner (max 1600px width, quality 0.85)
      const compressed = await compressImageFile(file, 1600, 800, 0.85);
      // Upload directly to server endpoint to get a permanent, lightweight URL
      const uploadedUrl = await uploadBannerImage(compressed, file.name);
      if (uploadedUrl) {
        setBannerImage(uploadedUrl);
      } else {
        setBannerImage(compressed);
      }
    } catch (err) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const raw = event.target?.result as string;
        try {
          const uploadedUrl = await uploadBannerImage(raw, file.name);
          if (uploadedUrl) {
            setBannerImage(uploadedUrl);
            return;
          }
        } catch {}
        setBannerImage(raw);
      };
      reader.readAsDataURL(file);
    } finally {
      setBannerImageLoading(false);
    }
  };`;

const newHandleBanner = `  const handleBannerImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBannerImageLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        const raw = event.target?.result as string;
        if (raw) {
          setCropperModal({
            isOpen: true,
            imageSrc: raw,
            aspectRatio: 21 / 9,
            target: 'banner',
          });
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Failed to read image:', err);
    } finally {
      setBannerImageLoading(false);
      if (bannerFileInputRef.current) bannerFileInputRef.current.value = '';
    }
  };`;

content = content.replace(oldHandleBanner, newHandleBanner);

// 4. Update handleMainImageUpload for products to open cropper
const oldHandleMain = `  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploadingImage(true);
    try {
      const compressed = await compressImageFile(file, 1000, 1000, 0.82);
      setNewImage(compressed);
    } catch (err) {
      console.error('Failed to compress image:', err);
      alert('خطا در پردازش تصویر. لطفاً تصویر دیگری را امتحان کنید.');
    } finally {
      setIsUploadingImage(false);
      if (e.target) e.target.value = '';
    }
  };`;

const newHandleMain = `  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploadingImage(true);
    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        const raw = event.target?.result as string;
        if (raw) {
          setCropperModal({
            isOpen: true,
            imageSrc: raw,
            aspectRatio: 1,
            target: 'product_main',
          });
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Failed to read product image:', err);
      alert('خطا در خواندن تصویر.');
    } finally {
      setIsUploadingImage(false);
      if (e.target) e.target.value = '';
    }
  };`;

content = content.replace(oldHandleMain, newHandleMain);

// 5. Add Crop button to product image action buttons
const productButtonsTarget = `<button
                              type="button"
                              onClick={handleSetFallbackImage}
                              className="px-3 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-600/50 text-purple-200 hover:text-white font-medium text-xs transition-colors"
                              title="استفاده از تصویر پیش‌فرض فوق‌سبک داخلی بدون نیاز به اینترنت خارجی"
                            >
                              تصویر پیش‌فرض داخلی
                            </button>`;

const productButtonsReplacement = `<button
                              type="button"
                              onClick={() => {
                                if (newImage) {
                                  setCropperModal({
                                    isOpen: true,
                                    imageSrc: newImage,
                                    aspectRatio: 1,
                                    target: 'product_main',
                                  });
                                }
                              }}
                              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                              title="تنظیم کادر، زوم و برش تصویر کالا"
                            >
                              <Crop className="w-3.5 h-3.5" />
                              <span>تنظیم کادر و برش (Crop)</span>
                            </button>

                            <button
                              type="button"
                              onClick={handleSetFallbackImage}
                              className="px-3 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-600/50 text-purple-200 hover:text-white font-medium text-xs transition-colors"
                              title="استفاده از تصویر پیش‌فرض فوق‌سبک داخلی بدون نیاز به اینترنت خارجی"
                            >
                              تصویر پیش‌فرض داخلی
                            </button>`;

content = content.replace(productButtonsTarget, productButtonsReplacement);

// 6. Add Crop button to banner upload section
const bannerUploadButtonsTarget = `<button
                          type="button"
                          onClick={() => bannerFileInputRef.current?.click()}
                          disabled={bannerImageLoading}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-900/80 hover:bg-purple-800 border border-purple-600/70 text-purple-200 hover:text-white font-bold rounded-xl text-xs transition-all shadow-md active:scale-95 shrink-0"
                        >
                          <Camera className="w-4 h-4 text-amber-400" />
                          <span>{bannerImageLoading ? 'در حال بهینه‌سازی عکس...' : 'بارگذاری عکس بنر از گالری/دستگاه'}</span>
                        </button>`;

const bannerUploadButtonsReplacement = `<button
                          type="button"
                          onClick={() => bannerFileInputRef.current?.click()}
                          disabled={bannerImageLoading}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-900/80 hover:bg-purple-800 border border-purple-600/70 text-purple-200 hover:text-white font-bold rounded-xl text-xs transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
                        >
                          <Camera className="w-4 h-4 text-amber-400" />
                          <span>{bannerImageLoading ? 'در حال آماده‌سازی...' : 'بارگذاری عکس بنر از گالری/دستگاه'}</span>
                        </button>

                        {bannerImage && (
                          <button
                            type="button"
                            onClick={() => {
                              setCropperModal({
                                isOpen: true,
                                imageSrc: bannerImage,
                                aspectRatio: 21 / 9,
                                target: 'banner',
                              });
                            }}
                            className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
                            title="تنظیم کادر و زاویه نمایش بنر"
                          >
                            <Crop className="w-4 h-4" />
                            <span>تنظیم کادر و برش (Crop)</span>
                          </button>
                        )}`;

content = content.replace(bannerUploadButtonsTarget, bannerUploadButtonsReplacement);

// 7. Render ImageCropperModal before closing AdminPanel
const endTarget = `        )}

      </div>
    </div>
  );
};`;

const endReplacement = `        )}

        {/* INTERACTIVE IMAGE CROPPER MODAL */}
        {cropperModal.isOpen && (
          <ImageCropperModal
            imageSrc={cropperModal.imageSrc}
            initialAspect={cropperModal.aspectRatio}
            targetType={cropperModal.target === 'banner' ? 'banner' : 'product'}
            onClose={() => setCropperModal((prev) => ({ ...prev, isOpen: false }))}
            onCropComplete={async (croppedBase64) => {
              if (cropperModal.target === 'banner') {
                setBannerImageLoading(true);
                try {
                  const uploadedUrl = await uploadBannerImage(croppedBase64, 'banner_crop.jpg');
                  setBannerImage(uploadedUrl || croppedBase64);
                } catch {
                  setBannerImage(croppedBase64);
                } finally {
                  setBannerImageLoading(false);
                }
              } else if (cropperModal.target === 'product_main') {
                setNewImage(croppedBase64);
              }
              setCropperModal((prev) => ({ ...prev, isOpen: false }));
            }}
          />
        )}

      </div>
    </div>
  );
};`;

content = content.replace(endTarget, endReplacement);

fs.writeFileSync(file, content, 'utf8');
console.log('AdminPanel patched completely!');
