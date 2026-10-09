import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const appDirs = [
  path.join(rootDir, 'uploads', 'apps'),
  path.join(rootDir, 'jaheshkala', 'uploads', 'apps'),
  path.join(rootDir, 'jaheshkala-app', 'public', 'uploads', 'apps'),
];

appDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Map of all .apk and installer files found
const filesMap = new Map();

for (const dir of appDirs) {
  if (fs.existsSync(dir)) {
    try {
      const files = fs.readdirSync(dir);
      for (const f of files) {
        const fullPath = path.join(dir, f);
        if (fs.statSync(fullPath).isFile()) {
          const size = fs.statSync(fullPath).size;
          const currentBest = filesMap.get(f);
          if (!currentBest || size > currentBest.size) {
            filesMap.set(f, { path: fullPath, size });
          }
        }
      }
    } catch {}
  }
}

// Copy the largest version of each installer file to all app directories
for (const [filename, best] of filesMap.entries()) {
  for (const targetDir of appDirs) {
    const targetFile = path.join(targetDir, filename);
    let shouldCopy = false;
    if (!fs.existsSync(targetFile)) {
      shouldCopy = true;
    } else {
      const currentSize = fs.statSync(targetFile).size;
      if (best.size > currentSize) {
        shouldCopy = true;
      }
    }

    if (shouldCopy && best.path !== targetFile) {
      try {
        fs.copyFileSync(best.path, targetFile);
        console.log(`[Sync Apps] Synced ${filename} (${best.size} bytes) -> ${targetFile}`);
      } catch (err) {
        console.warn(`[Sync Apps] Failed to sync ${filename} to ${targetFile}:`, err);
      }
    }
  }
}
