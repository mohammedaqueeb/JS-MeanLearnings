// New DataType Symbol

let id = Symbol("Hello");
console.log(id);

// Symbol Description
console.log(id.description);

let age = Symbol("age");
let user = {
  name: "Aqueeb",
  [age]: 25,
};
console.log(user[age]);

//Iterator

let numbers = [100, 200, 300];
let iter = numbers[Symbol.iterator]();
//object
console.log(iter.next());
//object value
console.log(iter.next().value);

//generators

//the function starts with * is generators function
//function  *generate() [also define like this]

function* generate() {
  yield "Step 1";
  yield "Step 2";
  yield "Step 3";
}

console.log(generate().next());

//print all values
let g = generate();
for (let value of g) {
  console.log(value);
}
