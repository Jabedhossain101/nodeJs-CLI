const os = require('os');

console.log('System info \n');

console.log('-'.repeat(30));

console.log('platform Details:');

console.log('Platform:',os.platform());
console.log('Architecture:',os.arch());
console.log('Os type:',os.type());
console.log('Os Release:',os.release());
console.log('Hostname:', os.hostname());
console.log('CPU Info:');

const cpus = os.cpus();

console.log('CPU model:', cpus[0].model);
console.log('Number of cores:',cpus.length);
console.log('CPU speed', cpus[0].speed);
console.log('CPU speed', cpus[0]);
