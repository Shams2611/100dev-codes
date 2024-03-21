//Write your pseduo code first!

// Take input from user in celcius
// run a conditional statement as if the input is valid
// have a function that converts celcius to fahrenheit
// return the value of function and console log it

document.querySelector("h1").addEventListener("click", convert);

function convert() {
  let enteredVal = document.querySelector("input").value;
  let temp = enteredVal * 1.8 + 32;

  document.querySelector("h2").innerText = temp;
}
