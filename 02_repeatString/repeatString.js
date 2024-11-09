const repeatString = function(text, repeatNum) {
    if (repeatNum < 0) {
        return 'ERROR';
    }
    return text.repeat(repeatNum);
};

// Do not edit below this line
module.exports = repeatString;
