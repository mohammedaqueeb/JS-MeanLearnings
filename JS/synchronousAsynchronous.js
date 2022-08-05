//javascript moslty work in synchronous like

let a = 10; //check and exceutive line 1
let b = 20; //check and exceutive line 2

//Asynchronous example like

setTimeout(() => {
  console.log("sas");
}, 1000);

//promises, fetch,ajax, database calls and etc
let d = 100;
let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("resolve");
  }, 1000);
});

console.log(p);
