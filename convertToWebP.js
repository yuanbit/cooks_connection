import fs from "fs-extra";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "public/images");
const outputDir = path.join(__dirname, "public/images/webp");

// Ensure output directory exists
fs.ensureDirSync(outputDir);

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

    if (file.endsWith(".jpg") || file.endsWith(".png")) {
      sharp(inputPath)
        .resize(1200) // Resize width to 1200px (adjust as needed)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`✅ Converted: ${file} → ${outputPath}`))
        .catch((err) => console.error(`❌ Error processing ${file}:`, err));
    }
  });
});
