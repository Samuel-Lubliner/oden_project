// # Exercise 08 - Calculator
// Create a calculator
// add, subtract, get the sum, multiply, get the power, 
// and find the factorial

const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a -b;
	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
  if (n == 0) return 1;
  let product = 1;
  for ( let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
