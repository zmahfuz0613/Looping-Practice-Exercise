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
let time = new Date();
console.log(time.getMonth() + 1);

let currentMonth = (time === 1) ? 'It is January' : 'It isn\'t January';

console.log(currentMonth)

// Exercise 3

let foodsArray = ['almonds', 'potato chips', 'ice cream', 'filet mignon'];
for (let i=0; i<foodsArray.length; i++) {
  switch(foodsArray[i]) {
    case foodsArray[0]:
    console.log('That\'s a healthy snack')
    break;
    case foodsArray[1]:
    console.log('Something salty, nice!')
    break;
    case foodsArray[2]:
    console.log('Something sweet, ok!')
    break;
    case foodsArray[3]:
    console.log('Eating like royalty tonight.')
    break;
    default:
    console.log('I dont know what to eat');
  }
}

//Exercise 4

let accountBalance = 0;
let message = '';

while (accountBalance <= 100) {
  message += `My checking account balance is $ ${accountBalance} '\n'`;
  accountBalance++;
};

console.log(str);
