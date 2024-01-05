# Factory functions and the module pattern

## Scope of a Variable

In JavaScript, the scope of a variable defines where it is accessible. There are two main types:

- **Global Scope:** Variables declared outside any function or block are globally accessible.
- **Local Scope:** Variables declared within a function or block are only accessible within that function or block.

---

## Closures

Closures are functions that remember the environment in which they were created. This means they can access variables from an outer function even after it has completed execution.

---

## Disadvantages of Constructors

Using constructors in JavaScript can have several downsides:

- **Inheritance Complexity:** Inheritance with constructors can be complex and verbose.
- **Reference to `this`:** Mistakes with `this` can lead to bugs.
- **Overhead:** Constructors create a new object each time they're called.

---

## Factory Functions

Factory functions are functions that return new objects, providing an alternative to constructors.

**Example:**

```javascript
function createPerson(name) {
  return {
    getName() {
      return name;
    },
  };
}
const person = createPerson("Alice");
```

---

## Private Variables in Factory Functions

Factory functions can encapsulate private variables and functions.

**Example:**

```javascript
function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
  };
}
```

---

## Object Inheritance with Factory Functions

Factory functions can implement prototypal inheritance by returning objects that delegate to other objects.

**Example:**

```javascript
function createAnimal(name) {
  return {
    getName() {
      return name;
    },
  };
}
function createDog(name) {
  const animal = createAnimal(name);
  return Object.assign({}, animal, {
    bark() {
      console.log("Woof!");
    },
  });
}
```

---

## Module Pattern and IIFEs

- **Module Pattern:** Uses closures and IIFEs to create private and public scopes.
- **IIFE (Immediately Invoked Function Expression):** A function that is executed right after it is defined.

**Example:**

```javascript
const myModule = (function() {
  let privateVar = "private";
  return {
    publicMethod() {
      return privateVar;
    },
  };
})();
```

---

## Encapsulation and Namespacing

- **Encapsulation:** Achieved by using closures and factory functions to hide internal state.
- **Namespacing:** The module pattern helps in organizing code into modules, reducing the chance of name collisions.

## Scope

Scoping asks, “Where is a certain variable available to me?” - it indicates the current context of a variable. When a variable is not declared within any functions, existing outside any { curly braces }, they are said to be in the global scope, meaning that they are available everywhere.

If they are within a function or { curly braces }, they are known to be locally scoped.

## Before ECMAScript 6

JavaScript had a single keyword to declare a variable, `var`. These variables can be redefined and updated, and are said to be defined within the function scope, meaning, they are only available within the function they are declared in.

## ECMAScript 6

Keywords `let` and `const` were introduced.

While `var` variables were function scoped, these allow you to define variables that are block scoped - basically, scoping the variable to only be available within the closest set of { curly braces } in which it was defined. These braces can be those of a for loop, if-else condition, or any other similar construct, and are called, a block.

```js
let globalAge = 23; // This is a global variable

// This is a function - and hey, a curly brace indicating a block
function printAge (age) {
  var varAge = 34; // This is a function scoped variable

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  console.log(constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
console.log(varAge);
```

## Closures

```js
function makeAdding (firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting (secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  }
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7
```

The `makeAdding` function takes an argument, `firstNumber`, declares a constant `first` with the value of `firstNumber`, and returns another function.

When an argument is passed to the returned function, which we have assigned to `add5`, it returns the result of adding up the number passed earlier to the number passed now (first to second).

The first variable is scoped within the makeAdding function. When we declare and use `add5`, however, we’re outside the makeAdding function. How does the first variable still exist, ready to be added when we pass an argument to the `add5` function?

Functions in JavaScript form closures.

Closure: the combination of a function and the surrounding state in which the function was declared.

Surrounding state (aka lexical environment): local variables that were in scope at the time the closure was made.

Here, `add5` is a reference to the resulting function, created when the `makeAdding` function is executed, thus it has access to the lexical environment of the resulting function, which contains the first variable, making it available for use.

Functions allow us to associate data with functions and manipulate that data anywhere outside of the enclosing function.

## What’s wrong with constructors?

Constructors look like regular JavaScript functions, even though they do not behave like regular functions. If you try to use a constructor function without the new keyword, not only does your program fail to work, but it also produces error messages that are hard to track down and understand.

Yet another issue stems from the way the `instanceof` works. It checks the presence of a constructor’s prototype in an object’s entire prototype chain - which does nothing to confirm if an object was made with that constructor since the constructor’s prototype can even be reassigned after the creation of an object.

Factory Functions address a ton of these problems.

## Factory functions

Work similar to how constructors did, but with one key difference - they levy the power of closures.

Instead of using the new keyword to create an object, factory functions set up and return the new object when you call the function.

They do not use the prototype, which incurs a performance penalty - but as a general rule, this penalty isn’t significant unless you’re creating thousands of objects.

```js
const User = function (name) {
  this.name = name;
  this.discordName = "@" + name;
}
// hey, this is a constructor - 
// then this can be refactored into a factory!

function createUser (name) {
  const discordName = "@" + name;
  return { name, discordName };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword
```

## The object shorthand notation

```js
const name = "Bob";
const age = 28;
const color = "red";

const thatObject = { name: name, age: age, color: color };

const nowFancyObject = { name, age, color };

// If you wanted to log these values, earlier,
// you would have done the following
console.log(name, age, color);
// which would have resulted in a mess - Bob 28 red

// Try wrapping it in some { curly braces } now,
// which makes it an object!
console.log({ name, age, color });
// now it logs as - { name: "Bob", age: 28, color: "red" }
```

## Destructuring

Destructuring allows you to “unpack” or “extract” values from an object (or array). When you have an object, you can extract a property of an object into a variable of the same name, or any named variable for an array.

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const array = [1, 2, 3, 4, 5];
const [ zerothEle, firstEle ] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array
```

## Private variables and functions

Extend our User factory to add a few more variables and introduce “private” ones.

```js
function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }
```

The object we return in the factory function

- Does not contain the reputation variable itself, nor any copy of its value.
- Instead, the returned object contains two functions
  - one that reads the value of the reputation variable
  - and another that increases its value by one.

The reputation variable is what we call a “private” variable, since we cannot access the variable directly in the object instance - it can only be accessed via the closures we defined.

With factory functions, a private variable or function uses closures to create smaller, dedicated variables and functions within a factory function itself - things that we do not need to return in the object itself.

This way we can create neater code, without polluting the returned object with unnecessary variables that we create while creating the object itself. Often, you do not need every single function within a factory to be returned with the object, or expose an internal variable. You can use them privately since the property of closures allows you to do so.

In this case, we did not need control of the reputation variable itself. To avoid foot guns, like accidentally setting the reputation to -18000, we expose the necessary details in the form of `getReputation` and `giveReputation`.

## Prototypal inheritance with factories

lets say we need to extend the User factory into a Player factory that needs to control some more metrics

```js
function createPlayer (name, level) {
  const { discordName, getReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, discordName, getReputation, increaseLevel };
}
```

```js
function createPlayer (name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign({}, user, { increaseLevel });
}
```

ECMAScript 6 introduced a new JavaScript feature called “modules” - which are a set of syntax for importing and exporting code between different JavaScript files. They will be covered later.

Often, you do not need a factory to produce multiple objects - instead, you are using it to wrap sections of code together, hiding the variables and functions that you do not need elsewhere as private. This is achievable by wrapping your factory function in parentheses and immediately calling (invoking) it. This immediate function call is commonly referred to as an Immediately Invoked Function Expression or IIFE in short.

This pattern of wrapping a factory function inside an IIFE is called the module pattern.

```js
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
```

We have a factory function creating some basic operations that we need only once. We can wrap it in parentheses and immediately call it by adding () - returning the result object that we store in calculator. In this way we can write code, wrapping away things that we do not need as private variables and functions inside our factory function and while they are tucked inside of our module, we can use the returned variables and functions outside the factory, as necessary.

## Encapsulating with the module pattern

Encapsulation: bundling data, code, or something into a single unit, with selective access to the things inside that unit itself. We don’t expose everything to the body of our program itself.

Namespacing is a technique that is used to avoid naming collisions in our programs.

Take the calculator example into consideration. Imagine a scenario where you can accidentally create multiple functions with the name add. What would you name the functions that do these things? Instead, we can easily encapsulate them inside a module called calculator which generates an object with that name, allowing us to explicitly call `calculator.add(a, b)` or `calculator.sub(a, b)`.
