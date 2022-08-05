//Debouncing is a technique where we can monitor the time delay of user action and once that delay reaches our predetermined threshold we can can make the function call.

//Let's say that we want to exceute a function on double click. for that we can use debounce

const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

debounce();

const timer = () => {
  let timeout;
  return function () {
    timeout = setTimeout(() => {
      console.log("123");
    }, 100);
  };
};

timer();

function timerfunction() {
  setTimeout(() => {
    console.log("sasa");
  }, 200);

  setInterval(() => {
    console.log("sasa");
  }, 200);
}
timerfunction();
