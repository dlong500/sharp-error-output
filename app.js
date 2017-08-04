const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

generateZoomFiles();

function generateZoomFiles() {
  const iPath = path.resolve(__dirname, 'data', 'input');
  const oPath = path.resolve(__dirname, 'data', 'output');

  let success = true;
  sharp.cache(false);
  //sharp.concurrency(1);

  fs.readdir(iPath, (err, files) => {
    files.sort().map(async (item) => {
      const filename = item.replace(/\.[^/.]+$/, "");
      console.log('Generating zoom data [' + item + ']');
      sharp(path.join(iPath, item))
        .tile({
          size: 512,
          layout: 'dz',
        })
        .toFile(path.join(oPath, filename + '.dz'))
        .catch(error => {
          console.log('error: ' + item + ': ' + error.message)
          success = false
          return false
        });
    });
  });
  return success;
}
