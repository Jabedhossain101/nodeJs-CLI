const args = process.argv;

console.log(args);

const time = new Date().getHours();

const time2 = new Date().getMinutes();

let greet;

if (time < 12) {
  greet = `good morning now time is ${time}:${time2}`;
} else if (time < 18) {
  greet = `good afternoon boss now time is ${time}:${time2}`;
} else {
  greet = `good night bro now time is ${time}:${time2}`;
}

console.log(time);
console.log(greet);

const fs = require('fs');

const content1 = `${new Date().toISOString()}, user is so sweet`;

fs.appendFileSync('./data/output/app.log', content1);

console.log('task complete');
