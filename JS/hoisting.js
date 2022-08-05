//Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

//Variable Hoisting In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

//However in JavaScript, initializations are not hoisted. For example,
console.log(a);
var a = 5;
//Output
undefined;

let x;
console.log(x);
//console.log(getName());
getName();
x = 5;

//var will print undefined in hosting

//this is also undefined in hosting beacause its and varable
var getnewname = () => {
  console.log("getname");
};

//this is also undefined in hosting beacause its and varable
var getnewname1 = function () {
  console.log("getname");
};

//only function value will be show in
function getName() {
  console.log("getname : function statment");
}
