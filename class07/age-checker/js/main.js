//Create a conditonal that checks their age
//If under 16, tell them they can not drive
age = 25;

if (age < 16) {
  console.log("You cannot drive");
} else if (age < 18) {
  console.log("Hate outside the club");
} else if (age < 21) {
  console.log("They can not drink");
} else if (age < 25) {
  console.log("Can't rent cars affordably");
} else if (age < 30) {
  console.log("No fancy cars");
} else {
  console.log("nothing to look forward to");
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector("h1").addEventListener("click", action);
let p = document.querySelector("p");

function action() {
  let age = Number(document.querySelector("input").value);
  if (age < 16) {
    p.innerText = "You cannot drive";
  } else if (age < 18) {
    p.innerText = "Hate outside the club";
  } else if (age < 21) {
    p.innerText = "They can not drink";
  } else if (age < 25) {
    p.innerText = "Can't rent cars affordably";
  } else if (age < 30) {
    p.innerText = "No fancy cars";
  } else {
    p.innerText = "nothing to look forward to";
  }
}
