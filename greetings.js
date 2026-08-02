const args = process.argv;

//process.arg[0]= node path
//process.arg[1]= file path
//process.arg[2]= first actual arguments

const name = args[2] || 'guest';
const time = new Date().getHours();
const timeMinute = new Date().getMinutes();
const timeSecond = new Date().getSeconds();

let greetings;

if (time < 12) {
  greetings= 'good morning'
} else if (time < 18) {
  greetings= 'good afternoon'
} else {
  greetings= 'good evening'
}
console.log(args);
console.log(`${greetings} ${name}`);

console.log(`${time} :${timeMinute} : ${timeSecond}`);