//Exercise 1
let temp = 213;

if(temp <= 32){
  console.log("Watch out for ice")
} else if (temp >= 33 && temp <= 55) {
  console.log("Better put on a jacket")
} else if (temp >= 56 && temp <=70) {
  console.log("Such nice weather we're having")
} else if (temp >= 71 && temp <=99) {
  console.log("Summer is here")
} else if (temp === 444 || temp === 212) {
  console.log("Where are you exactly??")
} else {
  console.log("Global Warming!")
}

//Exercise 2
//declare a variable called time and get the current date (you may need to research this on MDN or W3Schools)
//write the current month to the console and note its return value.
//How can we make it reflect the current months' number?
//Set a new variable called currentMonth and set that equal to a ternary operator and determine if the time variable equals 1 return 'It is January' if true and 'It isn't January' if false.
//How can we include an apostrophe in a string with single quotes? (you may need to research this)

let time = new Date();
console.log(time.getMonth() + 1);

let currentMonth = (time === 1) ? 'It is January' : 'It isn\'t January';

console.log(currentMonth)
