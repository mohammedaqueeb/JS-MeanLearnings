// In short, Mocha is a JavaScript test framework that runs on Node.js and also on the ser and allows asynchronous testing along with the use of any assertion library. It tests coverage reports. The next testing tool we are going to talk about is Chai, which is a TDD assertion library for NodeJS and the browser. Chai can easily be paired with any Javascript testing framework.

//The basic difference between the two is that mocha is a framework whereas chai is a library.

//The first is Describe () which is basically used to group. This allows nesting up to any level.

// Second is it () which is the basic test case.
// Before () is a hook that is run before it () or describe () whereas beforeEach () is run before each it () or describe ().
// Similarly, after () is run after it () or describe () and afterEach () is run after each it () or describe ().

// by default mocha look for test folder

module.exports = {
  sayHello: () => {
    return "hello";
  },

  addnumber: (a, b) => {
    return a + b;
  },
};
