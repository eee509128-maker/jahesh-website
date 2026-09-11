const fs = require('fs');
const file = './jaheshkala-app/src/components/AdminPanel.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add state variable
content = content.replace(
  "const [bannerOpacity, setBannerOpacity] = useState<number>(90);",
  "const [bannerOpacity, setBannerOpacity] = useState<number>(90);\n  const [bannerImagePosition, setBannerImagePosition] = useState('center');"
);

// 2. Add to handleStartEditBanner
content = content.replace(
  "setBannerOpacity(b.overlayOpacity !== undefined ? b.overlayOpacity : 90);",
  "setBannerOpacity(b.overlayOpacity !== undefined ? b.overlayOpacity : 90);\n    setBannerImagePosition(b.imagePosition || 'center');"
);

// 3. Add to handleResetBannerForm
content = content.replace(
  "setBannerOpacity(90);",
  "setBannerOpacity(90);\n    setBannerImagePosition('center');"
);

// 4. Add to newBanner object in handleSaveBannerForm
content = content.replace(
  "overlayOpacity: bannerOpacity,",
  "overlayOpacity: bannerOpacity,\n      imagePosition: bannerImagePosition,"
);

// 5. Update preview image
// Replace: <img src={bannerImage} alt="پيش‌نمایش" className="absolute inset-0 w-full h-full object-cover rounded-2xl transform scale-105" />
content = content.replace(
  /<img[^>]+src=\{bannerImage\}[^>]+className="[^"]+object-cover[^"]+"[^>]*\/>/,
  `<img src={bannerImage} alt="پیش‌نمایش" className="absolute inset-0 w-full h-full object-cover rounded-2xl transform scale-105" style={{ objectPosition: bannerImagePosition }} />`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Admin patch done');
