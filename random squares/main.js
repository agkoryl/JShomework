function addSquares() {
  for (var i = 0; i < 100; i++) {
    var newSquare = document.createElement("div");
    newSquare.classList.add("square");
    document.getElementById("container").appendChild(newSquare);
  }
}

function setStyle(element, propertyObject) {
  for (var property in propertyObject) {
    element.style[property] = propertyObject[property];
  }
}

function placeSqareRandomly(elements) {
  for (var i = 0; i < 100; i++) {
    var firstNumber = Math.floor(Math.random() * 100);
    var secondNumber = Math.floor(Math.random() * 100);
    var squareOffset = { top: firstNumber + "%", left: secondNumber + "%" };
    setStyle(elements[i], squareOffset);
  }
}

function selectSquares() {
  return document.getElementsByClassName("square");
}

addSquares();
placeSqareRandomly(selectSquares());
