# Asynchronous Code

Links:

[Event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

<https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md>
<https://github.com/max-mapper/art-of-node#callbacks>
<https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md>

<https://www.digitalocean.com/community/tutorials/understanding-javascript-promises>
<https://www.geeksforgeeks.org/promise-vs-callback-in-javascript/>
<https://stackoverflow.com/questions/45041462/node-js-when-to-use-promises-vs-callbacks>
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>

Asynchronous functions happen in the background while the rest of your code executes. They allow your program to continue running without waiting for the asynchronous function to complete.

## Callbacks

Callbacks are a way to manage asynchronous operations in JavaScript. Callbacks are used when fetching data from some API, reading files, or performing any other I/O operation.

Callbacks are functions that get passed into other functions. Do not nest callbacks within callbacks. This will form a pyramid of doom that is difficult to debug and maintain. Follow best practices with callbacks:

- Keep your code shallow. Don't nest functions. Name functions.
- Modularize. Write small modules that each do one thing, and assemble them into other modules that do a bigger thing. Move large functions into another file and expose them using module.exports. You can load this using a relative require. If you have some code that can be used across multiple projects give it it's own readme, tests and package.json and publish it to github and npm.
- Handle all platform errors caused by things like invalid file permissions, hard drive failure, no network connection etc. With callbacks the most popular way to handle errors is the Node.js style where the first argument to the callback is always reserved for an error.

Callbacks are the fundamental unit of asynchrony in JS. But they're not enough for the evolving landscape of async programming as JS matures.

Our brains plan things out in sequential, blocking, single-threaded semantic ways, but callbacks express asynchronous flow in a rather nonlinear, nonsequential way, which makes reasoning properly about such code much harder. Bad to reason about code is bad code that leads to bad bugs.

We need a way to express asynchrony in a more synchronous, sequential, blocking manner, just like our brains do.

Second, and more importantly, callbacks suffer from inversion of control in that they implicitly give control over to another party (often a third-party utility not in your control!) to invoke the continuation of your program. This control transfer leads us to a troubling list of trust issues, such as whether the callback is called more times than we expect.

Inventing ad hoc logic to solve these trust issues is possible, but it's more difficult than it should be, and it produces clunkier and harder to maintain code, as well as code that is likely insufficiently protected from these hazards until you get visibly bitten by the bugs.

We need a generalized solution to all of the trust issues, one that can be reused for as many callbacks as we create without all the extra boilerplate overhead.

We need something better than callbacks. They've served us well to this point, but the future of JavaScript demands more sophisticated and capable async patterns. The subsequent chapters in this book will dive into those emerging evolutions.

## Promises

we identified two major categories of deficiencies with using callbacks to express program asynchrony and manage concurrency: lack of sequentiality and lack of trustability. Now that we understand the problems more intimately, it's time we turn our attention to patterns that can address them.

The issue we want to address first is the inversion of control, the trust that is so fragilely held and so easily lost.

Recall that we wrap up the continuation of our program in a callback function, and hand that callback over to another party (potentially even external code) and just cross our fingers that it will do the right thing with the invocation of the callback.

We do this because we want to say, "here's what happens later, after the current step finishes."

But what if we could uninvert that inversion of control? What if instead of handing the continuation of our program to another party, we could expect it to return us a capability to know when its task finishes, and then our code could decide what to do next?

This paradigm is called Promises.

Promises are starting to take the JS world by storm, as developers and specification writers alike desperately seek to untangle the insanity of callback hell in their code/design. In fact, most new async APIs being added to JS/DOM platform are being built on Promises.

The .then() method is used with promises. It takes two arguments: callback functions for the success and failure cases of the Promise. Once the Promise is settled (either fulfilled or rejected), the .then() method executes the corresponding callback function, allowing for sequential execution of asynchronous code in a more manageable way.

Promise Limitations
Many of the details we'll discuss in this section have already been alluded to in this chapter, but we'll just make sure to review these limitations specifically.

Sequence Error Handling
We covered Promise-flavored error handling in detail earlier in this chapter. The limitations of how Promises are designed -- how they chain, specifically -- creates a very easy pitfall where an error in a Promise chain can be silently ignored accidentally.

But there's something else to consider with Promise errors. Because a Promise chain is nothing more than its constituent Promises wired together, there's no entity to refer to the entire chain as a single thing, which means there's no external way to observe any errors that may occur.

If you construct a Promise chain that has no error handling in it, any error anywhere in the chain will propagate indefinitely down the chain, until observed (by registering a rejection handler at some step). So, in that specific case, having a reference to the last promise in the chain is enough (p in the following snippet), because you can register a rejection handler there, and it will be notified of any propagated errors

Single Resolution
One of the most intrinsic behaviors of Promises is that a Promise can only be resolved once (fulfillment or rejection). For many async use cases, you're only retrieving a value once, so this works fine.

But there's also a lot of async cases that fit into a different model -- one that's more akin to events and/or streams of data. It's not clear on the surface how well Promises can fit into such use cases, if at all. Without a significant abstraction on top of Promises, they will completely fall short for handling multiple value resolution.

Imagine a scenario where you might want to fire off a sequence of async steps in response to a stimulus (like an event) that can in fact happen multiple times, like a button click.

A promise is essentially an object that might produce a value at some point in the future.

Promises are awesome. Use them. They solve the inversion of control issues that plague us with callbacks-only code.

They don't get rid of callbacks, they just redirect the orchestration of those callbacks to a trustable intermediary mechanism that sits between us and another utility.

Promise chains also begin to address (though certainly not perfectly) a better way of expressing async flow in sequential fashion, which helps our brains plan and maintain async JS code better. We'll see an even better solution to that problem in the next chapter!

## Event loop

The  event loop job is to look at the stack and look at the task queue. If the stack is empty, it takes the first thing on the queue and pushed it on to the stack."
