/**
 * Image compression and helper utilities for fast loading in Iran (no VPN required)
 */

export async function compressImageFile(
  file: File,
  maxWidth = 720,
  maxHeight = 720,
  quality = 0.78
): Promise<string> {
  return new Promise((resolve, reject) => {
    // If it's an SVG, read directly as data URL without compression
    if (file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;

        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(event.target?.result as string);
          return;
        }

        // Fill white background in case of transparent png converting to jpeg
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        // Try webp first, fallback to jpeg
        try {
          const webpData = canvas.toDataURL('image/webp', quality);
          if (webpData.startsWith('data:image/webp')) {
            resolve(webpData);
            return;
          }
        } catch {
          // fallback
        }

        const jpegData = canvas.toDataURL('image/jpeg', quality);
        resolve(jpegData);
      };

      img.onerror = (err) => reject(err);
      img.src = event.target?.result as string;
    };

    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

// Default reliable fallback SVG placeholder for products if any image fails to load
export const getFallbackProductImage = (title: string, category: string = 'کالای دیجیتال') => {
  const safeTitle = (title || 'محصول جهش‌کالا').slice(0, 30);
  const safeCat = (category || 'جهش‌کالا').slice(0, 20);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2a1052"/>
        <stop offset="50%" stop-color="#190a36"/>
        <stop offset="100%" stop-color="#0e051f"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#g)"/>
    <circle cx="300" cy="170" r="60" fill="#9333ea" fill-opacity="0.25"/>
    <path d="M280 150 L320 150 L325 195 L275 195 Z" fill="#fbbf24"/>
    <path d="M290 150 A10 10 0 0 1 310 150" stroke="#fbbf24" stroke-width="4" fill="none"/>
    <text x="300" y="270" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle" direction="rtl">${safeTitle}</text>
    <text x="300" y="305" fill="#c084fc" font-family="sans-serif" font-size="14" text-anchor="middle" direction="rtl">${safeCat}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
