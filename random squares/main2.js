function addRandomSquare() {
  var newSquare = document.createElement("div");
  newSquare.classList.add("square");
  document.getElementById("container").appendChild(newSquare);
  var firstNumber = Math.random() * 100;
  var secondNumber = Math.random() * 100;
  var squareOffset = { top: firstNumber + "%", left: secondNumber + "%" };
  setStyle(newSquare, squareOffset);
}

function setStyle(element, propertyObject) {
  for (var property in propertyObject) {
    element.style[property] = propertyObject[property];
  }
}

function displaySquares() {
  for (var i = 0; i < 100; i++) {
    setTimeout(function() {
      addRandomSquare();
    }, i*1000);
  }
}

displaySquares();
