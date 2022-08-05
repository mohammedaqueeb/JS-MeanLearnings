const assert = require("chai").assert;
const app = require("../app");

describe("App", function () {
  describe("sayHello()", function () {
    it("App should return Hello", function () {
      assert.equal(app.sayHello(), "hello");
    });
    it("sayHello should type of string", function () {
      assert.typeOf(app.sayHello(), "string");
    });
  });

  describe("addNumber()", function () {
    it("addNumber should be above 5", function () {
      assert.isAbove(app.addnumber(1, 2), 5);
    });
    it("addNumber should type of number", function () {
      assert.typeOf(app.addnumber(5, 5), "number");
    });
  });
});

//hooks
//With its default “BDD”-style interface, Mocha provides the hooks before(), after(), beforeEach(), and afterEach(). These should be used to set up preconditions and clean up after your tests.

// https://mochajs.org/#hooks
