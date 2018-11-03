var myDate = new Date();

var currentDay = myDate.getDate();
var currentMonth = myDate.getMonth()+1;
var currentYear = myDate.getUTCFullYear();

var myFullDate = currentDay + "." + currentMonth + "." + currentYear

var myFullHour = myDate.toTimeString().substr(0, 5);

var fullDateDisplay = "Hello! Today is " + myFullDate + " " + myFullHour + "."

console.log(fullDateDisplay);

document.getElementById("hello").innerHTML = fullDateDisplay;

