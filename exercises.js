//Exercise 1

const temp = 213;

if (temp <= 32) {
  console.log("Watch out for ice")
} else if (temp >= 33 & temp <= 55) {
  console.log("Better put on a jacket")
} else if (temp >= 56 & temp <= 70) {
  console.log("Such a nice weather we're having")
} else if (temp >= 71 & temp <= 99) {
  console.log("Summer us here")
} else if (temp === 212 || temp === 444) {
  console.log("Where are you exactly?")
} else { 
  console.log("Global Warming!")
}

// let temp = 32;

// switch(temp) {
//   case temp < 32:
//     console.log("Watch out for ice");
//     break;
//   case temp > 33 & temp < 55:
//     console.log("Better put on a jacket");
//     break;
//   case temp > 56 & temp < 70:
//     console.log("Such a nice weather we're having")
//     break;
//   case temp > 71 & temp < 99:
//     console.log("Summer us here")
//     break;
//   case temp === 212 || temp === 444:
//     console.log("Where are you exactly?")
//     break;
//   default:
//     console.log( `if temperature is above ${temp} is prime. google it, ask yourself, ask your friend.`);
// }


//Exercise 2

// let month = newDate() 
//   console.log((month.getMonth() + 1));
  



//Exercise 3

let foodsArray = ['almonds', 'potato chips', 'ice cream', 'filet mignon'];

for(let i = 0; i < foodsArray.length; i++) {
  console.log(foodsArray[i])
}
switch(foodsArray) {
  case 'almonds':
    console.log("That's a healthy snack");
    break;
  case 'potato chips':
    console.log("Something salty, nice!");
    break;
  case 'ice cream':
    console.log("Something sweet, ok!")
    break;
  case 'filet mignon':
    console.log("Eating like royalty tonight")
    break;
  
  default:
    console.log("I don't know what to eat.");
}

//Exercise 4


//Bonus
