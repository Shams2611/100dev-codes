let num = 5;

//--- Hard
//create a variable that holds the h1

//add an event listener to that element that console logs the sum of the two previous variables
const h1 = document.querySelector("h1");

h1.addEventListener("click", addTwo);

function addTwo() {
  let numFromInput = Number(
    document.querySelector("#danceDanceRevolution").value
  );
  numFromInput += 25;

  console.log(num + numFromInput);
}
