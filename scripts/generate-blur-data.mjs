// Generates tiny base64 blur placeholders for all images in public/Samples
// Run: node scripts/generate-blur-data.mjs

import sharp from "sharp";
import { readdir, writeFile } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SAMPLES_DIR = join(__dirname, "..", "public", "SamplesCompressed");
const OUTPUT_FILE = join(__dirname, "..", "data", "blur-data.json");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function generateBlurDataURL(filePath) {
  const buffer = await sharp(filePath)
    .resize(10, 10, { fit: "cover" })
    .blur()
    .toFormat("png")
    .toBuffer();
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

async function main() {
  const files = await readdir(SAMPLES_DIR);
  const imageFiles = files.filter((f) =>
    IMAGE_EXTENSIONS.has(extname(f).toLowerCase())
  );

  console.log(`Found ${imageFiles.length} images. Generating blur data...`);

  const results = {};

  for (const file of imageFiles) {
    const filePath = join(SAMPLES_DIR, file);
    try {
      // Use the URL-encoded public path as the key (matching how designs.ts references them)
      const publicPath = `/SamplesCompressed/${file}`;
      const blurDataURL = await generateBlurDataURL(filePath);

      // Also get dimensions for aspect ratio
      const metadata = await sharp(filePath).metadata();
      const width = metadata.width || 1;
      const height = metadata.height || 1;
      const ratio = width / height;

      let aspectRatio;
      if (ratio > 1.15) aspectRatio = "landscape";
      else if (ratio < 0.85) aspectRatio = "portrait";
      else aspectRatio = "square";

      results[publicPath] = {
        blurDataURL,
        width,
        height,
        aspectRatio,
      };

      console.log(
        `  ✓ ${file} (${width}x${height}, ${aspectRatio})`
      );
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  await writeFile(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`\nDone! Wrote ${Object.keys(results).length} entries to ${OUTPUT_FILE}`);
}

main().catch(console.error);
