// # Exercise 04 - removeFromArray
// Implement a function that takes 
// an array and some other arguments 
// then removes the other arguments from that array:

// - how to remove a single element from an array
// - how to deal with multiple optional arguments in a javascript function
// - [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  
const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      } 
    });

    return newArray;

};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.
  
// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }  

// Do not edit below this line
module.exports = removeFromArray;
