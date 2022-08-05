//timer function

// var timer = setInterval(() => {
//   console.log("hello word");
// }, 100);
// setTimeout(() => {
//   clearInterval(timer);
// }, 1000);

function timer() {
  setTimeout(() => {
    console.log("1");
  }, 100);
  setTimeout(() => {
    console.log("2");
  }, 200);
  setTimeout(() => {
    console.log("3");
  }, 300);
  setTimeout(() => {
    console.log("4");
  }, 400);
}

timer();
