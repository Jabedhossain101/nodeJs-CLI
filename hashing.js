//password

const crypto = require('crypto');

console.log('\n MD5 hash:');
const md5hash = crypto.createHash('md5').update('password123').digest('hex');

console.log('input: password123');
console.log('Md5 hashPassword',md5hash);