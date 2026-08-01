const fs = require('fs')

console.log('start reading....');

fs.readFile('./data/diary.txt', 'utf-8', (error, data) => {
  
  if (error) {
    console.log('error happend:',error.message);
  }
  console.log('file content:');
  console.log(data);
})

console.log('this runs immediately- no blocking');