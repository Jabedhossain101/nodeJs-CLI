const path = require('path');

console.log('current file info \n');

console.log('filename :', __filename);

console.log('directory name:', __dirname);

console.log('\n' + '-'.repeat(50) + '\n');


//file name declaration
const filePath = '/rafsan/document/nextLevel.pdf';

console.log('analysis path:', filePath, '\n');

console.log('directory:', path.dirname(filePath));

// console.log('baseName:', path.basename(__filename));
console.log('baseName:', path.basename(filePath));

console.log('file extension:', path.extname(filePath));

console.log('file Name:', path.basename(filePath, path.extname(filePath)));

console.log('\n' + '-'.repeat(50) + '\n');

const parsed = path.parse(filePath);
console.log('parsed path object', parsed);

console.log('formatted path:',path.format(parsed));