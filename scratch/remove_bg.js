const Jimp = require('jimp');

async function removeWhiteBackground() {
  try {
    const image = await Jimp.read('public/logo.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      // If pixel is close to white, make it transparent
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
      }
    });

    await image.writeAsync('public/logo.png');
    console.log('White background removed successfully!');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

removeWhiteBackground();
