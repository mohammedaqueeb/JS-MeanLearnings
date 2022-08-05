let forof = ["apple", "banana", "mango", "grapes", "cherry"];

//for of loop retuns value of object or array
//majorly use for array
for (let data of forof) {
  console.log(data);
}

//for in loop returns key of object or array
//majorly use for object
for (let data in forof) {
  console.log(data);
}

//event loop

//JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

//Event loop - The event loop got its name because of how it's usually implemented, which usually resembles:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

while (queue.waitForMessage()) {
  queue.processNextMessage();
}
