//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}

function calculate() {
  var num = 150;
  function innerfunction() {
    num = 200;
  }
  innerfunction();
  num = 250;
  console.log(num);
}

calculate();
x();
