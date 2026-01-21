import sharp from 'sharp';

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 }
];

async function generateFavicons() {
  console.log('Generating favicons from logo.png...\n');

  for (const { name, size } of sizes) {
    try {
      await sharp('public/logo.png')
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(`public/${name}`);

      console.log(`✓ Created ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`Error creating ${name}:`, error.message);
    }
  }

  console.log('\nFavicons generated successfully!');
}

generateFavicons();
