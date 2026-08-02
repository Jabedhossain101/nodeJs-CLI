const fs = require('fs');

fs.writeFileSync('./data/output/temp.txt', ' this is a temp file');

/******method 1*********/
if (fs.existsSync('./data/output/temp.txt')) {
  console.log('file exits...');

  fs.unlinkSync('./data/output/temp.txt');
  console.log('file deleted');
}

/******method 2*********/
try {
  fs.unlinkSync('./data/output/temp.txt');
} catch (error) {
  console.log('Error', error.message);
}

// console.log('temp file is created');

/*************asynchronously */

fs.writeFile('./data/output/temp2.txt', 'another temp file', err => {
  if (err) {
    console.error('File write error:', err.message);
  } else {
    console.log('another temp file is created');

    fs.unlink('./data/output/temp2.txt', err => {
      if (err) {
        console.error('Delete error:', err.message);
      } else {
        console.log('temp file deleted');
      }
    });
  }
});
