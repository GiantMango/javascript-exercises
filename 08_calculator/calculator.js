const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(...nums) {
  let sum = 0;
	for (let n of nums[0]) {
    sum += Number(n);
  }
  return sum;
};

const multiply = function(...a) {
  let result = 1;

  for (let i of a[0]) {
    result *= i;
  }

  return result;

};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let result = 1;

	for (let i = 1; i <= a; i ++) {
    result *= i;
  }

  return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
