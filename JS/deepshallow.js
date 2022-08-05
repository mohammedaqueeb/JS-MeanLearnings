//deep & shallow copy

// Shallow Copy stores the references of objects to the original memory address.
// Deep copy stores copies of the object’s value.

// Shallow Copy reflects changes made to the new/copied object in the original object.
// Deep copy doesn’t reflect changes made to the new/copied object in the original object.

// Shallow Copy stores the copy of the original object and points the references to the objects.
// Deep copy stores the copy of the original object and recursively copies the objects as well.

//Shallow

let array = ["apple", "banana", "mango", "grapes", "cherry"];
let objects = { fruit1: "apple", fruits2: "banana" };

//Shallow Copy Array

//Step1 Concat
var anotherarray = ["Chilli"];
var ShallowArray = array.concat(anotherarray);
ShallowArray[0] = "concat";
console.log(ShallowArray, array);

//Step2 array.from

var ArrayFrom = Array.from(array);
ArrayFrom[0] = "ArrayFrom";
console.log(ArrayFrom, array);

//Step3 array.slice(0)

var ArraySlice = array.slice(0);
ArraySlice[0] = "Array Slice";
console.log(ArraySlice, array);

//Step4 Spread oprator

var ArraySpread = [...array];
ArraySpread[0] = "Array Spread";
console.log(ArraySpread, array);

//Shallow Copy Objecy

//Step1 Object.asign

var Objectasign = Object.assign({}, objects);
Objectasign.fruit1 = "Object Asign";
console.log(Objectasign, objects);

//Step2 Spread opeator

var SpreadObject = { ...objects };
SpreadObject.fruit1 = "Spread Object";
console.log(SpreadObject, objects);

//Deep Copy

///nested array example

let Nesarray = ["apple", "banana", ["mango", "grapes"], "cherry"];
let Nesobject = {
  fruit1: "apple",
  fruits2: "banana",
  fruits: { fruit: "apple" },
};

//array

var DeepArray = JSON.parse(JSON.stringify(Nesarray));
DeepArray[0] = "Deep Nested";
DeepArray[2][0] = "Deep Nested";
console.log(DeepArray, Nesarray);

//object

var DeepObject = JSON.parse(JSON.stringify(Nesobject));
DeepObject.fruit1 = "Deep Nested";
DeepObject.fruits.fruit = "Deep Nested";
console.log(DeepObject, Nesobject);
