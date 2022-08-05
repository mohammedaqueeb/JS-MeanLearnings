//Higher order function

//forEach , filter, map, sort, reduce

const companies = [
  { name: "Google", start: 1981 },
  { name: "Amazon", start: 1990 },
  { name: "Facebook", start: 2005 },
];

const ages = [33, 25, 36, 78, 45, 96, 75, 15];

//forEach

companies.forEach((value, index) => console.log(value.name));

//filter
const age = ages.filter((age) => age >= 78);
//console.log(age);

//map {type of loop}
companies.map((value, index) => console.log(value, "/"));

//sort

const sorted = companies.sort((c1, c2) => {
  if (c1.start < c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sorted1 = ages.sort((a, b) => a - b);
console.log(sorted1);

//Reduce
const sumage = ages.reduce((total, age) => {
  return total + age;
}, 0);

//ages.reduce(callbackfunction,intial value)

console.log(sumage);
