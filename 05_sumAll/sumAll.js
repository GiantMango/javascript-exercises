const sumAll = function(startNum, endNum) {
    let i = startNum;
    let sum = 0;
    while (i <= endNum){
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
