// # Exercise 11 - Get the Titles!
// You are given an array of objects that 
// represent books with an author and a title

// ```javascript
// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]
// ```

// Function that takes the array 
// and returns an array of titles:

const getTheTitles = function (array) {
    return array.map((book) => book.title);
  };

// Do not edit below this line
module.exports = getTheTitles;
