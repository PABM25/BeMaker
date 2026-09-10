const sizeOf = require('image-size');
const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const images = walkSync('img').filter(file => /\.(png|jpe?g|gif|webp)$/i.test(file));
images.forEach(img => {
    try {
        const dimensions = sizeOf(img);
        console.log(`${img}: width="${dimensions.width}" height="${dimensions.height}"`);
    } catch (e) {
        console.error(`Error reading ${img}: ${e.message}`);
    }
});
