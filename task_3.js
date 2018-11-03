function peselFun() {

    var pesel = prompt("Please enter your PESEL");

    if (pesel === null) {
        alert("Insert number");
    } else if (!Number.isInteger(Number(pesel))) {
        alert("Your input is not a correct number");
    } else if (pesel.length > 11) {
        alert("The number is too long.");
    } else if (pesel.length < 11) {
        alert("The number is too short.");
    } else if (pesel.length === 11) {
        
        var peselsum = pesel[0] * 1 + pesel[1] * 3 + pesel[2] * 7 + pesel[3] * 9 + pesel[4] * 1 + pesel[5] * 3 + pesel[6] * 7 + pesel[7] * 9 + pesel[8] * 1 + pesel[9] * 3;
        var controlNumber = 10 - (peselsum % 10);
        controlNumber = controlNumber % 10;

        if (pesel[10] == controlNumber) {
            alert("Your PESEL is correct. Thank you.");
        } else {
            alert("Your PESEL is incorrect.");
        }
    } else {
        alert("Something went wrong");
    }
}

peselFun();