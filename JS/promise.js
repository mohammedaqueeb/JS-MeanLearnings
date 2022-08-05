///promise

//Simple
let status = "success";
let prom = new Promise(function (resolve, reject) {
  if (status == "success") {
    resolve("Promise Success");
  } else {
    reject("Promise Reject");
  }
});
console.log(prom);

//Function

function promise(a, b) {
  return new Promise((resolve, reject) => {
    let c = a / b;
    if ((a, b)) {
      resolve(`your answer : ${c}`);
    } else {
      reject("failed to calculate");
    }
  });
}

//Method Chaining
promise(10, 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Promise ALL

//execute all promise at a time

let promiseCall = (PromName) => {
  return (resolve, reject) => {
    resolve(`This is promise ${PromName}`);
  };
};
let prom1 = new Promise(promiseCall("First"));

let prom2 = new Promise(promiseCall("Second"));

let prom3 = new Promise(promiseCall("Third"));

Promise.all([prom1, prom2, prom3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
