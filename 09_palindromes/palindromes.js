const palindromes = function (str) {
    let isPalindromes = true;
    for (let i = 0; i < str.length; i ++) {
        if (str[i] !== str[str.length-i-1]) {
            isPalindromes = false;
        }
    }
    return isPalindromes;
};

// Do not edit below this line
module.exports = palindromes;
