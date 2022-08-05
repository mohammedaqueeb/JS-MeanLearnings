//Rest and spread operators

//...args

//spread
function spread(a, b) {
  return console.log(a + b);
}

var spreadData = [2, 3];
spread(...spreadData);

//rest

function rest(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(rest(1, 5, 9));
