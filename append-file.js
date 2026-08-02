const fs = require('fs');

fs.writeFileSync('./data/output/apps.log', 'Application started\n');

console.log('file created');

const longEntry1 = `${new Date().toISOString()} user logged in \n`;
fs.appendFileSync('./data/output/app.log', longEntry1);

const longEntry2 = `${new Date().toString()} data fetched`;

fs.appendFileSync('./data/output/app.log', longEntry2);

console.log('task complete');
