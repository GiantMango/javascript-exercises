const sumAll = function(firstNum, secondNum) {
    
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    } else if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }

    let startNum = firstNum;
    let endNum = secondNum;
    let sum = 0;

    if (firstNum > secondNum) {    
        startNum = secondNum;
        endNum = firstNum;
    }

    while (startNum <= endNum){
        sum += startNum;
        startNum++;
    }
    return sum;
   
};

// Do not edit below this line
module.exports = sumAll;
