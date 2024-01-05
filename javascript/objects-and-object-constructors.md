# Objects and Constructors

## Object Constructor and Instantiation

In JavaScript, an object constructor is a template for creating objects. It defines a type of object according to the methods and properties it encapsulates.

## What is a Prototype?

Every JavaScript object has a property called `prototype`. This is a reference to another object and contains common attributes and methods that are accessible to all objects of the same type.

## 3. Prototypal Inheritance

Prototypal inheritance is a feature in JavaScript where an object can inherit properties and methods from another object.

## 4. Do’s and Don’ts of Prototypal Inheritance

### Do's

- Use `Object.create()` for inheritance.
- Reset the constructor property after setting up inheritance.

### Don'ts

- Avoid modifying `Object.prototype` directly.
- Be cautious with deep prototype chains.

## 5. `Object.create` Explanation

`Object.create` creates a new object with the specified prototype object and properties.

```javascript
var personPrototype = {
  greet: function() {
    console.log('hello!');
  }
};

var alice = Object.create(personPrototype);
alice.greet(); // Outputs: hello!
```

## 6. Behavior in Different Situations

- **Inheritance**: Sets up the prototype chain correctly.
- **No Properties Object**: If no second parameter, the created object has no own properties.
- **Null Prototype**: If `null` is passed, it creates an object with no prototype.

## Object review

In most cases, it is best to define objects with the object literal syntax

```js
const my Object = {
    property: 'Value',
    otherProperty: 77,
    "obnoxious property": function() {
    // do stuff!
}
```

Get information out of an object

```js
// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject["obnoxious property"]; // [Function]

const variable = 'property';

myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable]; // this is equivalent to myObject['property'] and returns 'Value!'
```

## Object Constructors and Instantiation

In JavaScript, an **object constructor** is a template for creating objects. It allows you to define properties and methods that should be shared by all instances of a type.

Here's how you can define and use an object constructor:

```javascript
function Bike(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var myBike = new Bike('Fuji', 'Road', 1980);
```

## Understanding Prototypes

A **prototype** is an object that other objects use as a template from which to inherit properties and methods.

```javascript
console.log(Bike.prototype); // Car's prototype object
```

## Prototypal Inheritance

Prototypal inheritance allows an object to inherit properties and methods from another object. This is particularly useful for adding methods to constructor functions.

Example:

```javascript
Bike.prototype.shift = function() {
  console.log('Gear shifted');
};

var anotherCar = new Bike('Schwinn', 'Cruiser', 1970);
anotherBike.shift(); // Outputs: Gear shifted
```

## Best Practices with Prototypal Inheritance

- **Do**: Use prototypes for shared methods.
- **Don't**: Modify built-in prototypes.
- **Do**: Use `Object.create` for setting up inheritance.
- **Don't**: Overuse inheritance; sometimes composition is better.

## Object.create Explained

`Object.create` is used to create a new object, using an existing object as the prototype of the newly created object.

```javascript
var bikePrototype = {
  shift: function() {
    console.log('Gear shifted');
  }
};

var myElectricBike = Object.create(bikePrototype);
myElectricBike.start(); // Outputs: Gear shifted
```

## The `this` Keyword

`this` refers to the object a function is a method of, the owner of the function, or the global object if the function is not owned.

```javascript
function showMake() {
  console.log(this.make);
}

var myBike = new Bike('Miyata', 'Road', 1990);
showMake.call(myCar); // Outputs: Miyata
```

## Objects as a design pattern

```js
// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X"
};

const playerTwo = {
  name: "jenn",
  marker: "O"
};
```

Benefits of second approach

```js
function printName(player) {
  console.log(player.name);
}

function gameOver(winningPlayer){
  console.log("Congratulations!");
  console.log(winningPlayer.name + " is the winner!");
}
```

## Object constructors

Using an object constructor when you have a specific type of object that you need to duplicate

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
```

Use by calling the function with the `new` keyword

```js
const player = new Player('steve', 'X');
console.log(player.name); // 'steve'
```

Just like with objects created using the Object Literal method, you can add functions to the object:

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
```

## Exercise

Write a constructor for making “Book” objects.

```js
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read' : 'not read yet'}`;
    };
}

// Example usage:
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
```

## The prototype

All objects in JavaScript have a prototype. The prototype is another object that the original object inherits from. The original object has access to all of its prototype’s methods and properties.

Accessing an object’s prototype

```js
Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true
```

## Prototypal inheritance

We can define properties and functions common among all objects on the prototype to save memory.

```js
// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
```

`.valueOf` function comes as a result of `Object.getPrototypeOf(Player.prototype)` having the value of `Object.prototype!`

This means that `Player.prototype` is inheriting from `Object.prototype`. This `.valueOf` function is defined on `Object.prototype` just like `.sayHello` is defined on `Player.prototype`.

How do we know that this `.valueOf` function is defined on Object.prototype?

```js
player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true
```

Where did `.hasOwnProperty` function come from?

```js
Object.prototype.hasOwnProperty('hasOwnProperty'); // true
```

Every prototype object inherits from Object.prototype by default.

An object’s `Object.getPrototypeOf()` value can only be one unique prototype object.

Here Player inherit from Person

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
};

// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"
Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'
```

```js
// A warning… this doesn’t work:
Player.prototype = Person.prototype;
```

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Don't do this!
// Use Object.setPrototypeOf(Player.prototype, Person.prototype)
Player.prototype = Person.prototype;

function Enemy(name) {
  this.name = name;
  this.marker = '^';
}

// Not again!
// Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
Enemy.prototype = Person.prototype;

Enemy.prototype.sayName = function() {
  console.log('HAHAHAHAHAHA');
};

const carl = new Player('carl', 'X');
carl.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
```

If we had used `Object.setPrototypeOf()` in this example, then we could safely edit the `Enemy.prototype.sayName` function without changing the function for `Player` as well.
