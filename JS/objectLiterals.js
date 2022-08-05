//object literals

//type 1

let object1 = {
  name: "aqueeb",
  age: 25,
  getAge: function () {
    console.log(`My name is ${this.name} and i am  ${this.age} year old`);
  },
};

//object1.getAge();

//type 2
//use variable as a property Name

let param = "name";
let object2 = {
  [param]: "aqueeb",
  age: 25,
  getAge: function () {
    console.log(`My name is ${this.name} and i am  ${this.age} year old`);
  },
};

//object2.getAge();

//type 3

let object3 = {
  name: "aqueeb",
  age: 25,
  getAge() {
    console.log(`My name is ${this.name} and i am  ${this.age} year old`);
  },
};

object3.getAge();

//type 4

let name = "aqueeb";
let age = 2;

let object4 = {
  name,
  age,
};

console.log(object4);

//diffrent ways of creating an object

//constructor

function Mobile(mobilename, price) {
  this.mobilename = name;
  this.price = price;
}

let samsung = new Mobile("samsung", "25000");
console.log(samsung);

//Factory Function

function hanset(name) {
  return {
    model: "galaxy",
  };
}

let galaxy = new hanset();
console.log(galaxy);

///object.create

let user1 = Object.create({
  name: "aqueeb",
  age: 25,
});
console.log(user1.name);

//ES6 Class

class students {
  constructor(firstname, lastname) {
    (this.firstname = firstname), (this.lastname = lastname);
  }
}

let student = new students("aqueeb", "shaikh");
console.log(student);
