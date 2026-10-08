var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_url = require("url");
var import_vite = require("vite");
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "50mb" }));
app.use(import_express.default.urlencoded({ extended: true, limit: "50mb" }));
var ROOT_DIR = import_path.default.resolve(__dirname, "..");
var DATA_DIR = import_path.default.join(ROOT_DIR, "data");
var UPLOADS_DIR = import_path.default.join(ROOT_DIR, "uploads");
var PRODUCTS_UPLOADS_DIR = import_path.default.join(UPLOADS_DIR, "products");
var BANNERS_UPLOADS_DIR = import_path.default.join(UPLOADS_DIR, "banners");
[DATA_DIR, UPLOADS_DIR, PRODUCTS_UPLOADS_DIR, BANNERS_UPLOADS_DIR].forEach((dir) => {
  if (!import_fs.default.existsSync(dir)) {
    import_fs.default.mkdirSync(dir, { recursive: true });
  }
});
app.use("/uploads", import_express.default.static(UPLOADS_DIR));
var PRODUCTS_FILE = import_path.default.join(DATA_DIR, "products.json");
var BANNERS_FILE = import_path.default.join(DATA_DIR, "banners.json");
var ORDERS_FILE = import_path.default.join(DATA_DIR, "orders.json");
var COUPONS_FILE = import_path.default.join(DATA_DIR, "coupons.json");
app.post("/api/upload-product-image", (req, res) => {
  try {
    const { image, filename } = req.body || {};
    if (!image || typeof image !== "string") {
      return res.status(400).json({ error: "\u062F\u0627\u062F\u0647 \u062A\u0635\u0648\u06CC\u0631 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A." });
    }
    let ext = "webp";
    let buffer;
    const matches = image.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
    if (matches) {
      const type = matches[1].toLowerCase();
      if (type.includes("png")) ext = "png";
      else if (type.includes("jpeg") || type.includes("jpg")) ext = "jpg";
      else if (type.includes("svg")) ext = "svg";
      else if (type.includes("webp")) ext = "webp";
      buffer = Buffer.from(matches[2], "base64");
    } else if (image.startsWith("data:")) {
      const parts = image.split(",");
      buffer = Buffer.from(parts[1] || "", "base64");
    } else {
      buffer = Buffer.from(image, "base64");
    }
    if (!buffer || buffer.length === 0) {
      return res.status(400).json({ error: "\u0641\u0631\u0645\u062A \u062A\u0635\u0648\u06CC\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A." });
    }
    const safeName = `prod_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    const filePath = import_path.default.join(PRODUCTS_UPLOADS_DIR, safeName);
    import_fs.default.writeFileSync(filePath, buffer);
    const publicUrl = `/uploads/products/${safeName}`;
    return res.json({ success: true, url: publicUrl });
  } catch (err) {
    console.error("Error in /api/upload-product-image:", err);
    return res.status(500).json({ error: err.message || "\u062E\u0637\u0627 \u062F\u0631 \u0630\u062E\u06CC\u0631\u0647\u200C\u0633\u0627\u0632\u06CC \u062A\u0635\u0648\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644" });
  }
});
app.post("/api/upload-banner", (req, res) => {
  try {
    const { image } = req.body || {};
    if (!image || typeof image !== "string") {
      return res.status(400).json({ error: "\u062F\u0627\u062F\u0647 \u0628\u0646\u0631 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A." });
    }
    let ext = "jpg";
    let buffer;
    const matches = image.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
    if (matches) {
      buffer = Buffer.from(matches[2], "base64");
    } else if (image.startsWith("data:")) {
      buffer = Buffer.from(image.split(",")[1] || "", "base64");
    } else {
      buffer = Buffer.from(image, "base64");
    }
    const safeName = `banner_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    import_fs.default.writeFileSync(import_path.default.join(BANNERS_UPLOADS_DIR, safeName), buffer);
    return res.json({ success: true, url: `/uploads/banners/${safeName}` });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
app.get("/api/products", (_req, res) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  try {
    if (import_fs.default.existsSync(PRODUCTS_FILE)) {
      const raw = import_fs.default.readFileSync(PRODUCTS_FILE, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return res.json(parsed);
      }
    }
  } catch (err) {
    console.error("Error reading products.json:", err);
  }
  return res.json([]);
});
app.post("/api/products", (req, res) => {
  try {
    const products = req.body;
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: "Expected array of products" });
    }
    import_fs.default.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf8");
    return res.json({ success: true, count: products.length });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/products/save", (req, res) => {
  try {
    const product = req.body;
    if (!product || !product.id) {
      return res.status(400).json({ error: "Invalid product data" });
    }
    let list = [];
    if (import_fs.default.existsSync(PRODUCTS_FILE)) {
      try {
        const raw = import_fs.default.readFileSync(PRODUCTS_FILE, "utf8");
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      } catch {
      }
    }
    const idx = list.findIndex((p) => p.id === product.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...product };
    } else {
      list = [product, ...list];
    }
    import_fs.default.writeFileSync(PRODUCTS_FILE, JSON.stringify(list, null, 2), "utf8");
    return res.json({ success: true, products: list });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/products/delete", (req, res) => {
  try {
    const productId = req.body?.productId || req.body?.id;
    if (!productId) {
      return res.status(400).json({ error: "productId or id required" });
    }
    let list = [];
    if (import_fs.default.existsSync(PRODUCTS_FILE)) {
      try {
        const raw = import_fs.default.readFileSync(PRODUCTS_FILE, "utf8");
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) list = parsed;
      } catch {
      }
    }
    list = list.filter((p) => p.id !== productId);
    import_fs.default.writeFileSync(PRODUCTS_FILE, JSON.stringify(list, null, 2), "utf8");
    return res.json({ success: true, products: list });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
var CLOUDFLARE_ACCOUNT_ID = "e8950358d5cf09f0f511b46172f65791";
var CLOUDFLARE_AI_TOKEN = "cfut_Dux4Ej0iGy3P0bowmnh5LevCZ0f1DaTDmr5a1lmR074a186e";
var MODEL_NAME = "@cf/meta/llama-3.1-8b-instruct";
app.post("/api/cloudflare-ai", async (req, res) => {
  try {
    const { userQuestion, chatHistory = [] } = req.body;
    if (!userQuestion || typeof userQuestion !== "string") {
      return res.status(400).json({ error: "userQuestion is required" });
    }
    const systemPrompt = `\u062A\u0648 \u062F\u0633\u062A\u06CC\u0627\u0631 \u0647\u0648\u0634\u0645\u0646\u062F \u0648 \u062F\u0627\u0646\u0627 \u0648 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646 \u0631\u0633\u0645\u06CC \u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0627\u06CC\u0646\u062A\u0631\u0646\u062A\u06CC \u0648 \u0634\u0631\u06A9\u062A \u0641\u0646\u0627\u0648\u0631\u06CC \xAB\u062C\u0647\u0634\u200C\u06A9\u0627\u0644\u0627\xBB (\u062C\u0647\u0634 \u0622\u06CC\u200C\u062A\u06CC - jaheshit.ir) \u0647\u0633\u062A\u06CC.
\u0648\u0638\u06CC\u0641\u0647 \u0627\u0635\u0644\u06CC \u0648 \u0645\u0647\u0645 \u062A\u0648 \u0627\u06CC\u0646 \u0627\u0633\u062A \u06A9\u0647 \u062A\u0627 \u062C\u0627\u06CC \u0645\u0645\u06A9\u0646 \u0628\u0647 \u062A\u0645\u0627\u0645 \u0633\u0648\u0627\u0644\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0632\u06CC\u0631\u060C \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0634\u200C\u0628\u0631\u062E\u0648\u0631\u062F\u060C \u06A9\u0627\u0645\u0644\u060C \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0648 \u0628\u0647 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u067E\u0627\u0633\u062E \u0628\u062F\u0647\u06CC.

\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0639\u062A\u0628\u0631 \u0648 \u062C\u0627\u0645\u0639 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u062C\u0647\u0634\u200C\u06A9\u0627\u0644\u0627:
\u06F1. \u067E\u06A9\u06CC\u062C \u0637\u0644\u0627\u06CC\u06CC \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u062C\u0647\u0634:
   - \u0642\u06CC\u0645\u062A \u067E\u06A9\u06CC\u062C \u0637\u0644\u0627\u06CC\u06CC: \u06F7,\u06F9\u06F0\u06F0,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 (\u0628\u0627 \u062A\u062E\u0641\u06CC\u0641 \u0648\u06CC\u0698\u0647 \u0627\u0632 \u06F1\u06F1,\u06F5\u06F0\u06F0,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646).
   - \u062E\u062F\u0645\u0627\u062A \u067E\u06A9\u06CC\u062C \u0634\u0627\u0645\u0644: \u062B\u0628\u062A \u0631\u0627\u06CC\u06AF\u0627\u0646 \u062F\u0627\u0645\u0646\u0647 \u0628\u0627 \u0646\u0627\u0645 \u062F\u0644\u062E\u0648\u0627\u0647 \u0645\u0634\u062A\u0631\u06CC\u060C \u06F1 \u0645\u0627\u0647 \u0647\u0627\u0633\u062A \u0641\u0648\u0642\u200C\u0633\u0631\u06CC\u0639 NVMe \u0631\u0627\u06CC\u06AF\u0627\u0646\u060C \u0627\u062A\u0635\u0627\u0644 \u0645\u0633\u062A\u0642\u06CC\u0645 \u0628\u0647 \u062F\u0631\u06AF\u0627\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u0632\u06CC\u0628\u0627\u0644 \u0628\u0627 \u062A\u0633\u0648\u06CC\u0647 \u062D\u0633\u0627\u0628 \u0622\u0646\u06CC\u060C \u0637\u0631\u0627\u062D\u06CC \u06A9\u0627\u0645\u0644\u0627\u064B \u0648\u0627\u06A9\u0646\u0634\u200C\u06AF\u0631\u0627 (\u0645\u0648\u0628\u0627\u06CC\u0644 \u0648 \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631)\u060C \u067E\u0646\u0644 \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u0648 \u06A9\u062F\u0646\u0648\u06CC\u0633\u06CC \u0628\u0647\u06CC\u0646\u0647 \u0648 \u0633\u0628\u06A9.
   - \u062A\u0636\u0645\u06CC\u0646 \u0633\u0626\u0648 \u0648 \u0631\u062A\u0628\u0647 \u06F1 \u06AF\u0648\u06AF\u0644: \u0633\u0627\u06CC\u062A \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0631\u0686\u200C\u06A9\u0646\u0633\u0648\u0644 \u0648 \u0628\u0647\u06CC\u0646\u0647\u200C\u0633\u0627\u0632\u06CC \u06A9\u0627\u0645\u0644 \u0641\u0646\u06CC \u062C\u0647\u062A \u062F\u0633\u062A\u06CC\u0627\u0628\u06CC \u0628\u0647 \u0631\u062A\u0628\u0647 \u0627\u0648\u0644 \u0646\u062A\u0627\u06CC\u062C \u062C\u0633\u062A\u062C\u0648\u06CC \u06AF\u0648\u06AF\u0644 \u062A\u062D\u0648\u06CC\u0644 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F.
   - \u06A9\u062F\u0647\u0627\u06CC \u062A\u062E\u0641\u06CC\u0641: \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0627\u0632 \u06A9\u062F\u0647\u0627\u06CC \u062A\u062E\u0641\u06CC\u0641 \u062F\u0631 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u0646\u062F (\u0645\u0627\u0646\u0646\u062F \u06A9\u062F \u0627\u062E\u062A\u0635\u0627\u0635\u06CC jahesh1395).
\u06F2. \u0631\u0627\u0647\u200C\u0647\u0627\u06CC \u0627\u0631\u062A\u0628\u0627\u0637\u06CC \u0648 \u062A\u0645\u0627\u0633 \u0645\u0633\u062A\u0642\u06CC\u0645 \u0628\u0627 \u0645\u062C\u0645\u0648\u0639\u0647:
   - \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646\u200C\u0647\u0627\u06CC \u0645\u0633\u062A\u0642\u06CC\u0645 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC: 09152331974 \u0648 09364864663
   - \u0622\u062F\u0631\u0633 \u062F\u0641\u062A\u0631 \u0648 \u0634\u0639\u0628\u0647 \u06F1: \u0645\u0634\u0647\u062F \u0645\u0642\u062F\u0633\u060C \u062E\u06CC\u0627\u0645 \u0634\u0645\u0627\u0644\u06CC \u06F4\u06F6\u060C \u0628\u06CC\u0646 \u0634\u06A9\u0631\u06CC \u06F1\u06F3 \u0648 \u06F1\u06F5\u060C \u067E\u0644\u0627\u06A9 \u06F2\u06F8\u06F7
   - \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0633\u0645\u06CC: jaheshit.ir
   - \u0633\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u06CC \u0648 \u067E\u0627\u0633\u062E\u06AF\u0648\u06CC\u06CC: \u06F2\u06F4 \u0633\u0627\u0639\u062A\u0647\u060C \u06F7 \u0631\u0648\u0632 \u0647\u0641\u062A\u0647.
\u06F3. \u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0622\u0646\u0644\u0627\u06CC\u0646 \u0648 \u0645\u062D\u0635\u0648\u0644\u0627\u062A:
   - \u0627\u0646\u0648\u0627\u0639 \u06AF\u0648\u0634\u06CC\u200C\u0647\u0627\u06CC \u0645\u0648\u0628\u0627\u06CC\u0644\u060C \u0644\u067E\u200C\u062A\u0627\u067E\u200C\u0647\u0627\u060C \u062A\u0628\u0644\u062A\u060C \u0647\u062F\u0641\u0648\u0646\u060C \u0633\u0627\u0639\u062A\u200C\u0647\u0627\u06CC \u0647\u0648\u0634\u0645\u0646\u062F\u060C \u0627\u0633\u067E\u06CC\u06A9\u0631 \u0648 \u0644\u0648\u0627\u0632\u0645 \u062C\u0627\u0646\u0628\u06CC \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0628\u0627 \u06AF\u0627\u0631\u0627\u0646\u062A\u06CC \u0627\u0635\u0627\u0644\u062A \u06A9\u0627\u0644\u0627 \u0648 \u06F7 \u0631\u0648\u0632 \u0636\u0645\u0627\u0646\u062A \u0628\u0627\u0632\u06AF\u0634\u062A \u0648\u062C\u0647.
   - \u0627\u0631\u0633\u0627\u0644 \u0633\u0631\u06CC\u0639 \u0633\u0641\u0627\u0631\u0634\u200C\u0647\u0627 \u0628\u0647 \u0633\u0631\u0627\u0633\u0631 \u06A9\u0634\u0648\u0631 \u0628\u0627 \u067E\u0633\u062A \u0648 \u062A\u06CC\u067E\u0627\u06A9\u0633.

\u0642\u0648\u0627\u0646\u06CC\u0646 \u067E\u0627\u0633\u062E\u06AF\u0648\u06CC\u06CC:
\u06F1. \u0628\u0631\u0627\u06CC \u062A\u0645\u0627\u0645 \u0633\u0648\u0627\u0644\u0627\u062A \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0642\u06CC\u0645\u062A\u200C\u0647\u0627\u060C \u067E\u06A9\u06CC\u062C \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A\u060C \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u060C \u0647\u0627\u0633\u062A\u060C \u062F\u0627\u0645\u0646\u0647\u060C \u062F\u0631\u06AF\u0627\u0647\u060C \u0633\u0626\u0648\u060C \u0622\u062F\u0631\u0633\u060C \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0648 \u0646\u062D\u0648\u0647 \u0633\u0641\u0627\u0631\u0634\u060C \u062E\u0648\u062F\u062A \u0628\u0627 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0631\u0648\u0627\u0646 \u0648 \u06A9\u0627\u0645\u0644 \u062A\u0648\u0636\u06CC\u062D \u0628\u062F\u0647 \u0648 \u06A9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0631\u0627\u0647\u0646\u0645\u0627\u06CC\u06CC \u06A9\u0646.
\u06F2. \u0641\u0642\u0637 \u062F\u0631 \u0635\u0648\u0631\u062A\u06CC \u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0633\u0648\u0627\u0644\u06CC \u067E\u0631\u0633\u06CC\u062F \u06A9\u0647 \u0628\u0647 \u0647\u06CC\u0686 \u0648\u062C\u0647 \u0628\u0647 \u0645\u0648\u0636\u0648\u0639\u0627\u062A \u0628\u0627\u0644\u0627 \u0645\u0631\u0628\u0648\u0637 \u0646\u0628\u0648\u062F (\u0645\u062B\u0644\u0627\u064B \u067E\u06CC\u06AF\u06CC\u0631\u06CC \u0633\u0641\u0627\u0631\u0634 \u062E\u0627\u0635 \u0628\u0627 \u06A9\u062F \u067E\u06CC\u06AF\u06CC\u0631\u06CC \u0627\u062E\u062A\u0635\u0627\u0635\u06CC\u060C \u0645\u0633\u0627\u0626\u0644 \u062D\u0642\u0648\u0642\u06CC \u067E\u06CC\u0686\u06CC\u062F\u0647\u060C \u062A\u062E\u0641\u06CC\u0641\u200C\u0647\u0627\u06CC \u0648\u06CC\u0698\u0647 \u062E\u0627\u0631\u062C \u0627\u0632 \u0633\u0627\u06CC\u062A \u06CC\u0627 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062D\u0628\u062A \u0645\u0633\u062A\u0642\u06CC\u0645 \u0628\u0627 \u0645\u062F\u06CC\u0631)\u060C \u0645\u0648\u062F\u0628\u0627\u0646\u0647 \u0628\u06AF\u0648:
\xAB\u067E\u06CC\u0627\u0645 \u0634\u0645\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F. \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F \u0628\u0631\u0627\u06CC \u0628\u0631\u0631\u0633\u06CC \u062A\u062E\u0635\u0635\u06CC \u0628\u0647 \u0647\u0645\u06A9\u0627\u0631\u0627\u0646 \u0648\u0627\u062D\u062F \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0648 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0631\u062C\u0627\u0639 \u06AF\u0631\u062F\u06CC\u062F \u0648 \u0628\u0647 \u0632\u0648\u062F\u06CC \u067E\u0627\u0633\u062E \u0634\u0645\u0627 \u067E\u06CC\u06AF\u06CC\u0631\u06CC \u062E\u0648\u0627\u0647\u062F \u0634\u062F.\xBB
\u0648 \u062D\u062A\u0645\u0627 \u062F\u0631 \u067E\u0627\u06CC\u0627\u0646 \u0622\u0646 \u0639\u0628\u0627\u0631\u062A [ESCALATE_TO_ADMIN] \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633 \u062A\u0627 \u0628\u0647 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0631\u062C\u0627\u0639 \u0634\u0648\u062F.
\u06F3. \u062F\u0631 \u062A\u0645\u0627\u0645 \u0633\u0648\u0627\u0644\u0627\u062A \u0639\u0627\u062F\u06CC \u06A9\u0647 \u062E\u0648\u062F\u062A \u067E\u0627\u0633\u062E \u0645\u06CC\u200C\u062F\u0647\u06CC\u060C \u0628\u0647 \u0647\u06CC\u0686 \u0648\u062C\u0647 \u0639\u0628\u0627\u0631\u062A [ESCALATE_TO_ADMIN] \u0631\u0627 \u0630\u06A9\u0631 \u0646\u06A9\u0646.`;
    const messages = [
      { role: "system", content: systemPrompt },
      ...chatHistory.slice(-4),
      { role: "user", content: userQuestion }
    ];
    const cfRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${MODEL_NAME}`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${CLOUDFLARE_AI_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages,
          max_tokens: 600,
          temperature: 0.3
        })
      }
    );
    if (!cfRes.ok) {
      const errBody = await cfRes.text();
      console.warn("Cloudflare AI error:", cfRes.status, errBody);
      return res.status(502).json({ error: "Cloudflare AI error", details: errBody });
    }
    const data = await cfRes.json();
    let reply = "";
    if (data.result?.response) {
      reply = data.result.response;
    } else if (data.result?.choices?.[0]?.message?.content) {
      reply = data.result.choices[0].message.content;
    }
    if (!reply) {
      return res.status(500).json({ error: "Empty response from model" });
    }
    let escalate = false;
    if (reply.includes("[ESCALATE_TO_ADMIN]")) {
      escalate = true;
      reply = reply.replace(/\[ESCALATE_TO_ADMIN\]/g, "").trim();
    }
    return res.json({ reply, escalateToAdmin: escalate });
  } catch (err) {
    console.error("Error in /api/cloudflare-ai:", err);
    return res.status(500).json({ error: err.message || "Internal error" });
  }
});
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "jahesh-kala-api" });
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
