//types of function

//function statment & function declaration
function a() {
  console.log("function statement");
}

//function expression
var b = function () {
  console.log("function expression");
};

//diffrence between funtion statment & function express is hoisting function statment works on hoisting and function expression wont becasue its a varaiable

//anonymous function
// function (){

// }

//named function express
var b = function xyz() {
  console.log("named function expression");
  console.log(xyz);
  //we can print xyz in the function scope
};

//we can print b outside the scope but not xyz
b(); // it will not throw error
//xyz(); //it will show error [xyz is not defined] beacasue its function scope

//first class function
//the ablity to use a functions as values or arguments is First class functions
//step 1
var c = function (param) {
  console.log(param);
};

c(function () {
  console.log("sasa");
});

//step 2

var d = function (param) {
  console.log(param);
};

function e() {
  let a = 0;
}

d(e);

//step 3

var j = function (param) {
  return function h() {};
};

console.log(j());

//self invoking function expression
var re = (function computerFactorail(number) {
  return console.log(number);
})(5);

//callback function

setTimeout(function () {
  console.log("timer");
}, 1000);

function callback(callback2) {
  console.log("callback");
  callback2();
}
callback(function callback2() {
  console.log("callback 2");
});

//Recursive function or Recursive method

//when a function call itself is a Recursive function

function calculate(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * calculate(n - 1);
}
//document.write(calculate(5));

//fat arrow function is noting but arrow function
const fun = () => {};

///default function parameters ( when we use it )
// if we have a sc

let guestUser = function (name = "deafultname", age = 25) {
  return `i am ${name} an my age is ${age}`;
};
console.log(guestUser("aqueeb", 26));
