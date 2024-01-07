//Create a stopwatch object that has four properties and three methods
let stopwatch = {};

stopwatch.color = "blue";
stopwatch.model = "digital";
stopwatch.buttons = 3;
stopwatch.shape = "rectangle";

stopwatch.start = function () {
  console.log("Start the stopwatch");
};

stopwatch.stop = function () {
  console.log("Stop the watch");
};

stopwatch.continue = function () {
  console.log("continue the timer");
};
