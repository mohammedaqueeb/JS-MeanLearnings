//The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by assigning operations to the operating system whenever and wherever possible.

// Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
// The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
// The event loop allows us to use callbacks and promises.
// The event loop executes the tasks starting from the oldest first.

console.log("This is the first statement");

setTimeout(function () {
  console.log("This is the second statement");
}, 1000);

console.log("This is the third statement");

//When the timer set by setTimeout function (in this case 1000 ms) runs out, the callback is sent to the event queue. The event loop on finding the call stack empty takes the task at the top of the event queue and sends it to the call stack. The callback function for setTimeout function runs the instruction and “This is the second statement” is logged on the console and the task is popped from the stack.

// https://www.geeksforgeeks.org/node-js-event-loop/
