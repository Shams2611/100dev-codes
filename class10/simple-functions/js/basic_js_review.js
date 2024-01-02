// *Variables*
// Declare a variable, assign it a value, and alert the value
let value = 5;
alert(value);
// Create a variable, divide it by 10, and console log the value
let num = 10;
num /= 10;
console.log(num);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function threeMultiple(num1, num2, num3) {
  alert(num1 * num2 * num3);
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourDivide(n1, n2, n3, n4) {
  console.log(n1 + n2 - n3 - n4);
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function operation(num1, num2, num3) {
  let starting = 100;
  starting += num1 + num2;
  starting /= num3;
  if (starting > 25) {
    console.log("We have a winna");
  }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayInAweek(day) {
  if (day.lower() == "friday") {
    alert("week day");
  } else if (day.lower() == "saturday") {
    alert(" weekend ");
  } else if (day.lower() == "sunday") {
    alert("weekend");
  } else if (day.lower() == "monday") {
    alert("week day");
  } else if (day.lower() == "tuesday") {
    alert("week day");
  } else if (day.lower() == "wednesday") {
    alert(" week day");
  } else if (day.lower() == "thursday") {
    alert("week day");
  } else {
    alert("Try again!");
  }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num) {
  for (i = 0; i < num; i += 3) {
    console.log(i);
  }
}
