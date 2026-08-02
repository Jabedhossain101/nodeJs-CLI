const fs = require('fs');

const content1 = 'this is our best course \n where you will get everything'

try {
  fs.writeFileSync('./data/output/test-sync.txt', content1)
} catch (err) {

  console.err(err.message);
  
}


// ----------------

const content2 = ' this is a content too \n asynchronous';

fs.writeFile('./data/output/test-async.txt', content2, (error) => {
  if (error) {
    console.error(error.message)       //cer
  }
  else {
    console.log('file written asynchronous');
  }
})