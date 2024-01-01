// *Variables*
// Create a variable and console log the value
let val = 25;

console.log(val);

// Create a variable, add 10 to it, and alert the value
let val2 = 10;

val2 += 10;

alert(val2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}

// Create a function that divides one number by another and returns the remainder

function divider(num1, num2) {
  return num1 % num2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2) {
  if (num1 + num2 > 50) {
    alert("Jumanji");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function threeMultiple(num1, num2, num3) {
  let multiplication = num1 * num2 * num3;
  if (multiplication % 3 == 0) {
    alert("Zebra");
  }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopingWord(word, num) {
  for (i = 0; i < num; i++) {
    console.log(word);
  }
}
