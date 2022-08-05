//slice vs splice

const result = ["apple", "banana", "mango", "grapes", "cherry"];

//result.slice(startform,end);
//slice will cut the string array
console.log(result.slice(1, 3));

const result1 = ["apple", "banana", "mango", "grapes", "cherry"];
//console.log(result.splice(startfrom, count (), replace string array (multiple)));

//splice will replace string array

result1.splice(1, 2, "dragon fruit");

//result1.splice(1, 2, "dragon fruit", "orange");
console.log(result1);
