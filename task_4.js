function setValue(id, value) {
    document.getElementById(id).innerHTML = value;
}

function setSegmentTime (timeInterval, segmentName1, segmentName2) {
    var firstNumber = Math.floor(timeInterval/10);
    var secondNumber = timeInterval % 10;

    setValue(segmentName1, firstNumber);
    setValue(segmentName2, secondNumber);
}

function updateTime() {
    var date = new Date();

    setSegmentTime(date.getHours(), "hour1", "hour2");
    setSegmentTime(date.getMinutes(), "minutes1", "minutes2");
    setSegmentTime(date.getSeconds(), "seconds1", "seconds2");
}

updateTime();
setInterval(updateTime, 1000);