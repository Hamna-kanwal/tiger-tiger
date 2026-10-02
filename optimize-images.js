const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'assets'); // Assets folder ka path

async function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      // Agar andar mazeed folder hai toh uske andar bhi jayein
      await processDirectory(fullPath);
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      // Sirf PNG aur JPEG files ko target karein
      const ext = path.extname(entry.name);
      const baseName = path.basename(entry.name, ext);
      const newFilePath = path.join(directory, baseName + '.webp');
      const tempFilePath = path.join(directory, baseName + '-temp.webp');

      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(tempFilePath);

        if (fs.existsSync(newFilePath)) {
          fs.unlinkSync(newFilePath);
        }
        fs.renameSync(tempFilePath, newFilePath);

        // Agar aap chahen toh original PNG/JPG ko delete bhi kar sakti hain taake sirf WebP bache:
        // fs.unlinkSync(fullPath);

        console.log(`Optimized: ${entry.name} -> ${baseName}.webp`);
      } catch (error) {
        console.error(`Error processing ${entry.name}:`, error);
        if (fs.existsSync(tempFilePath)) {
          fs.unlinkSync(tempFilePath);
        }
      }
    }
  }
}

console.log('Images optimization shuru ho rahi hai...');
processDirectory(targetDir).then(() => {
  console.log('Tamam assets images successfully WebP mein convert ho gayi hain!');
});