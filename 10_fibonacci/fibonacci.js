const fibonacci = function(index) {
    let firstNumber = 1;
    let secondNumber = 1;
    let currentNumber = 1;

    index = Number(index)

    if (index === 0) {
        return 0;
    } else if (index < 0) {
        return "OOPS";
    } else if (index !== 1 || index !== 2) {
        for (i = 2; i < index; i ++){
            currentNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = currentNumber;
        }
    }

    return currentNumber
};


// Do not edit below this line
module.exports = fibonacci;
