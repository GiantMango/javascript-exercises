const reverseString = function(text) {
    let reversedText = "";

    for (let i = 1; i <= text.length; i ++) {
        console.log(text[text.length - i])
        reversedText += text[text.length - i];
    }

    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
