//prototype

let Obj = {
  name: "aqueeb",
  age: 25,
};

//let obj1 = new obj();
console.log(obj);

function obj(name) {
  this.name = name;
}

obj.prototype.getName = () => {
  return this.name;
};

let obj2 = new obj("yogesh");
console.log(obj2);

let School = {
  schoolname: "xyz",
  students: 5000,
};

let school1 = School;

//school1.prototype.active = 1;

console.log(School);

/// prototype Inhertaince

//Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

// in ptototype inhertaince class or constuctor deos not inherit. we inher prototype

// we are not inheriting mobile with samsung we are inherting mobile.prototype with samsung.prototype

// example we have 2 function

//super class /parent class
function mobile() {
  this.a = 10;
}

mobile.prototype.z = 30;

//sub class /child class
function samsung() {
  this.b = 20;
}

//prototype Inheritance
//step 1 -- > samsung.prototype = Object.create(mobile.prototype);
//step 2 -- > samsung.prototype = new mobile();

samsung.prototype = new mobile();

let s = new samsung();
console.log(s.z);
