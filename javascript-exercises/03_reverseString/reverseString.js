// # Exercise 03 - Reverse a String
// Strings in JavaScript cannot be reversed directly
// split it into something else first
// do the reversal and then join it back together into a string.

const reverseString = function(string) {
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
