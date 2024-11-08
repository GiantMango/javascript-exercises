const removeFromArray = function(arr, ...rmEle) {

    let newArr = null;

    for (const ele of rmEle) {
        newArr = arr.filter(function (e) {
            return e !== ele;
        });
        arr = newArr;
    };

    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
