//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwoNums(num1, num2) {
  let result = num1 - num2;
  alert(result);
}

subtractTwoNums(10, 5);
//create a function that divides three numbers and console logs the quotient
function divResult(n1, n2, n3) {
  console.log(n1 / n2 / n3);
}

divResult(12, 4, 3);
//create a function that multiplys three numbers and returns the product
function threeMultiplication(num1, num2, num3) {
  return num1 * num2 * num3;
}
let returnNum = threeMultiplication(1, 2, 3);
console.log(returnNum);
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function mediumDifficulty(num1, num2, num3) {
  let sum1 = num1 + num2;
  return sum1 % num3;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(num1, num2, num3, num4) {
  let mul1 = num1 * num2;
  if (mul1 > 100) {
    console.log(num1 + num2);
  } else if (mul1 < 100) {
    console.log(num3 - num4);
  } else {
    let mul2 = num1 * num2 * num3;
    alert(mul2 % num4);
  }
}
