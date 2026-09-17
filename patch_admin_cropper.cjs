const fs = require('fs');
const file = './jaheshkala-app/src/components/AdminPanel.tsx';
let content = fs.readFileSync(file, 'utf8');

const importStatement = "import { ImageCropperModal } from './ImageCropperModal';";
if (!content.includes(importStatement)) {
  content = content.replace("import { User, Product, BannerSlide, Coupon, UserChat, ChatMessage } from '../types';", "import { User, Product, BannerSlide, Coupon, UserChat, ChatMessage } from '../types';\n" + importStatement);
}

// Add state for cropper
const cropperState = `
  const [cropperModal, setCropperModal] = useState<{ isOpen: boolean, imageSrc: string, aspectRatio: number, target: 'banner' | 'product_main' | 'product_gallery' }>({
    isOpen: false,
    imageSrc: '',
    aspectRatio: 1,
    target: 'banner'
  });
`;

if (!content.includes('setCropperModal')) {
  content = content.replace("const [bannerSuccessMessage, setBannerSuccessMessage] = useState('');", "const [bannerSuccessMessage, setBannerSuccessMessage] = useState('');" + cropperState);
}

// Override banner file upload to open cropper
const bannerFileChange = `onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              try {
                                setBannerImageLoading(true);
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setCropperModal({ isOpen: true, imageSrc: reader.result as string, aspectRatio: 21 / 9, target: 'banner' });
                                };
                                reader.readAsDataURL(file);
                              } catch (err) {
                                console.error('Failed to read image:', err);
                              } finally {
                                setBannerImageLoading(false);
                                if (bannerFileInputRef.current) bannerFileInputRef.current.value = '';
                              }
                            }
                          }}`;
content = content.replace(/onChange=\{\(e\) => \{[\s\S]*?if \(bannerFileInputRef.current\) bannerFileInputRef.current.value = '';[\s\S]*?\}\}/, bannerFileChange);

// Override product main image upload to open cropper
const productMainFileChange = `onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              try {
                                setIsUploadingImage(true);
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setCropperModal({ isOpen: true, imageSrc: reader.result as string, aspectRatio: 1, target: 'product_main' });
                                };
                                reader.readAsDataURL(file);
                              } catch (err) {
                                console.error('Failed to read image:', err);
                              } finally {
                                setIsUploadingImage(false);
                                e.target.value = '';
                              }
                            }
                          }}`;
content = content.replace(/onChange=\{async \(e\) => \{[\s\S]*?const file = e\.target\.files\?\.\[0\];[\s\S]*?if \(file\) \{[\s\S]*?try \{[\s\S]*?const compressed = await compressImageFile\(file, 1000, 1000, 0\.82\);[\s\S]*?setNewImage\(compressed\);[\s\S]*?\} catch \(err\) \{[\s\S]*?console\.error\('Failed to compress image:', err\);[\s\S]*?alert\('خطا در پردازش تصویر.*?'\);[\s\S]*?\} finally \{[\s\S]*?setIsUploadingImage\(false\);[\s\S]*?if \(e\.target\) e\.target\.value = '';[\s\S]*?\}[\s\S]*?\}[\s\S]*?\}\}/, productMainFileChange);

// Add the cropper component to the JSX
const cropperJSX = `
      {cropperModal.isOpen && (
        <ImageCropperModal
          imageSrc={cropperModal.imageSrc}
          aspectRatio={cropperModal.aspectRatio}
          onClose={() => setCropperModal(prev => ({ ...prev, isOpen: false }))}
          onCropComplete={(croppedBase64) => {
            if (cropperModal.target === 'banner') {
              setBannerImage(croppedBase64);
            } else if (cropperModal.target === 'product_main') {
              setNewImage(croppedBase64);
            }
            setCropperModal(prev => ({ ...prev, isOpen: false }));
          }}
        />
      )}
`;

content = content.replace("{/* MAIN CONTENT AREA */}", cropperJSX + "\n      {/* MAIN CONTENT AREA */}");

fs.writeFileSync(file, content, 'utf8');
console.log('Admin cropper patch done');
