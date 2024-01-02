# Javascript Basics

 Place Javascript within script element in HTML document or in an external .js file.

 `console.log()` prints to the developer console in the browser.

## Variables

The older way to create a variable in JavaScript is with `var`.

 `let` and `const` can be used in the newest JavaScript versions.

## Data types in JavaScript

### Primitive:

`number` for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).

`bigint` for integer numbers of arbitrary length.

`string` Strings may have zero or more characters, there’s no separate single-character type.

`boolean` for `true`/`false`.

`null` for unknown values – a standalone type that has a single value null.

`undefined` for unassigned values – a standalone type that has a single value undefined.

`symbol` for unique identifiers.

### Non-primitive data type:
`object` for more complex data structures.

`typeof` operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.

## JavaScript Developer Tools

### Opening developer tools

- From the Chrome Menu > More Tools > Developer Tools
- Right-click anywhere on a webpage and select Inspect
- Use the keyboard shortcut Mac: Opt + Cmd + C

<https://developer.chrome.com/docs/devtools/>
<https://developer.chrome.com/docs/devtools/dom/>
<https://developer.chrome.com/docs/devtools/javascript/>
<https://developer.chrome.com/docs/devtools/javascript/breakpoints/>
<https://developer.chrome.com/docs/devtools/console/>

## Problem solving: Fizz Buzz

### Pseudocode

```txt
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number
```

```js
// user inputs a number
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// Loop from 1 to the entered number
for (let i = 1; i <= answer; i++) {

    // If the current number is divisible by 3 and 5 then print "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

    // If the current number is divisible by 3 then print "Fizz"
  } else if (i % 3 === 0) {
    console.log("Fizz");

    // If the current number is divisible by 5 then print "Buzz"
  } else if (i % 5 === 0) {
    console.log("Buzz");

    // Otherwise print the current number
  } else {
    console.log(i);
  }
}
```

## Errors

`ReferenceError` is thrown when one refers to a variable that is not declared and/or initialized within the current scope.

Stack trace helps you understand when the error was thrown in your application, and what functions were called that led up to the error.

A syntax error occurs when the code you are trying to run is not written correctly.

a `TypeError` may be thrown when:

- an operand or argument passed to a function is incompatible with the type expected by that operator or function;
- or when attempting to modify a value that cannot be changed;
- or when attempting to use a value in an inappropriate way.

## Tips for resolving errors

- Read the error message
- Google the error
- Use the debugger <https://developer.chrome.com/docs/devtools/javascript/>
- console.log()
