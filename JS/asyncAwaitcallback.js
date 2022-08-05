// calback
//A JavaScript callback is a function which is to be executed after another function has finished execution.

//A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

function callbackfunction(value, callback) {
  callback(value, false);
}

function firstfunction(value, callback) {
  callback(value + 2);
}

function secondfunction(value, callback) {
  callback(value + 2);
}

firstfunction(2, function (firstresult) {
  secondfunction(firstresult, function (secondresult) {
    console.log("Callback Result " + secondresult);
  });
});
//A key difference between the two is when using the callback approach, we’d normally just pass a callback into a function that would then get called upon completion in order to get the result of something. In promises, however, you attach callbacks on the returned promise object.

// promises are more cleaner and more easy to remeber.

//when we want a  multiple values return then callback will be very messy and difficlut to understand and with help of promises we will shortand the code and its very easy to understand.

let promise = new Promise((resolve, reject) => {
  resolve(2);
});

promise
  .then(firstpromise)
  .then(secondpromise)
  .then((res) => console.log("promise Result " + res));

function firstpromise(value) {
  return value + 2;
}

function secondpromise(value) {
  return value + 2;
}
