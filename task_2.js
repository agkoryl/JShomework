var array = [1,14,15,-31,5,6,129,9,-21,55];

var minNumber = 0;

for (var i=0; i< array.length; i++) {
    if (array[i] < minNumber) {
        minNumber = array[i];
    }
}

var maxNumber = 0;

for (var i=0; i< array.length; i++) {
    if (array[i] > maxNumber) {
        maxNumber = array[i];
    }
}

console.log(minNumber);
console.log(maxNumber);
