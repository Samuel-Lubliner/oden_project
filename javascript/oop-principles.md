# OOP

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Explain the “Single Responsibility Principle”.
- Briefly explain the additional SOLID principles.
- Explain what “tightly coupled” objects are and why we want to avoid them.
  
## Single Responsibility Principle

Single Responsibility Principle states that a class (or object or module… you get the point) should only have one responsibility. This doesn’t mean that an object can only do one thing, but it does mean that everything an object does should be part of one responsibility.

Here’s a really common example. Most of our code has functions to update and write things to the DOM in addition to our application logic. It’s a really good idea to separate your DOM stuff from the application logic.

In a function that should check if a game over condition has been met. You should extract all the DOM manipulation into its own module.

Another way to think about the Single Responsibility Principle is that a given method/class/component should have a single reason to change. Otherwise, if an object is trying to have multiple responsibilities, changing one aspect might affect another.

The Single Responsibility Principle is the first of a commonly found set of 5 design principles called the SOLID principles. You will read more about these principles in the assignment articles below.

## Open/Closed

Code is closed to changes but open to added functionality through new code that works with the old code.

Switch statements should be refactored into individual classes or functions

## Liskov substitution

If you have a function that excepts a class, every subclass of that class must be able to enter that function and work properly.

Often composition is better than complex inheritance. Composition is adding functionality instead of inhering without extending base classes.

## Interface segregation

Modules should need to know about functionality they don't use. Split into smaller abstractions.

## Dependency inversion

## Loosely coupled objects

Obviously, all of our objects are intended to work together to form our final application. You should take care, however, to make sure that your individual objects can stand alone as much as possible. Tightly coupled objects are objects that rely so heavily on each other that removing or changing one will mean that you have to completely change another one.

This one is related pretty strongly to ‘Single Responsibility’ but takes a different angle. As an example, if we were writing a game and wanted to completely change how the User Interface worked, we should be able to do that without completely reworking the game logic. So we should be able to start off writing our game using primarily console.log()s and then add in a bunch of DOM functions later without touching the game logic.
