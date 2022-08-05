//Destructuring Array

let users = ["aqueeb", 25, "developer", 1, 2, 3];
let [name, age, designation, ...numbers] = users;

console.log(numbers);

let userss = { a: 34, b: 34, c: 34, d: 34, e: 34 };
let { a, b, c, d, e } = users;

console.log(userss);

const laptop = {
  model: "hp",
  old: "3 months",
  price: "23000",
};

const { model, old, price } = laptop;
console.log(model, old, price);

//flatten an array
let arr = [1, 2, 3, [4, [5, 6], 7], 8, 9];

let flattened = [].concat.apply([], [].concat.apply([], arr));
console.log(flattened);
