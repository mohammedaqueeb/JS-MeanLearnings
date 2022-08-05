//Error-First Callback in Node.js is a function which either returns an error object or any successful data returned by the function.

// --- > The first argument in the function is reserved for the error object. If any error has occurred during the execution of the function, it will be returned by the first argument.

// --- > The second argument of the callback function is reserved for any successful data returned by the function. If no error occurred then the error object will be set to null.

const fs = require("fs");

// This file does not exists
const file = "file.txt";

// Error first callback
// function with two
// arguments err and data
const ErrorFirstCallback = (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log("Function successfully executed");
};

// function execution
// This will return
// error because file do
// not exist
fs.readFile(file, ErrorFirstCallback);
