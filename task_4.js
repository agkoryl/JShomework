function updateTime() {

var date = new Date();

var hourHour = date.getHours();
var hourMinutes = date.getMinutes();
var hourSeconds = date.getSeconds();

var hourFirst = Math.floor(hourHour/10);
var hourTwo = hourHour - hourFirst*10;

var minutesFirst = Math.floor(hourMinutes/10);
var minutesTwo = hourMinutes - minutesFirst*10;

var secondsFirst = Math.floor(hourSeconds/10);
var secondsTwo = hourSeconds - secondsFirst*10;

document.getElementById("hour1").innerText = hourFirst;
document.getElementById("hour2").innerText = hourTwo;

document.getElementById("minutes1").innerText = minutesFirst;
document.getElementById("minutes2").innerText = minutesTwo;

document.getElementById("seconds1").innerText = secondsFirst;
document.getElementById("seconds2").innerText = secondsTwo;

}
updateTime();
var clock = setInterval(updateTime, 1000);