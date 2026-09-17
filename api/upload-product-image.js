import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, filename } = req.body || {};
    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    // If it's already an absolute or uploads URL, return it
    if (typeof image === 'string' && (image.startsWith('http://') || image.startsWith('https://') || image.startsWith('/uploads/'))) {
      return res.status(200).json({ success: true, url: image });
    }

    let ext = 'webp';
    let buffer;
    const matches = image.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
    if (matches) {
      const type = matches[1].toLowerCase();
      if (type.includes('png')) ext = 'png';
      else if (type.includes('jpeg') || type.includes('jpg')) ext = 'jpg';
      else if (type.includes('svg')) ext = 'svg';
      else if (type.includes('webp')) ext = 'webp';
      buffer = Buffer.from(matches[2], 'base64');
    } else if (image.startsWith('data:')) {
      const parts = image.split(',');
      buffer = Buffer.from(parts[1] || '', 'base64');
    } else {
      buffer = Buffer.from(image, 'base64');
    }

    if (!buffer || buffer.length === 0) {
      return res.status(400).json({ error: 'Invalid image format' });
    }

    const safeName = `prod_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    const uploadsDir = path.join(process.cwd(), 'uploads', 'products');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, safeName);
    fs.writeFileSync(filePath, buffer);

    // Also mirror to jaheshkala static directory if exists
    const distUploads = path.join(process.cwd(), 'jaheshkala', 'uploads', 'products');
    try {
      if (!fs.existsSync(distUploads)) {
        fs.mkdirSync(distUploads, { recursive: true });
      }
      fs.writeFileSync(path.join(distUploads, safeName), buffer);
    } catch {}

    const publicUrl = `/uploads/products/${safeName}`;
    return res.status(200).json({ success: true, url: publicUrl });
  } catch (err) {
    console.error('Error in /api/upload-product-image:', err);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
