const chai = require("chai");

const chaiinpromise = require("chai-as-promised");

chai.use(chaiinpromise);

const { expect } = require("chai");
const promise = require("../promise");
var obj = new promise();

describe("Test the promise", function () {
  it("promise Test case", function () {
    this.timeout(0);
    return expect(obj.testPromise()).to.eventually.equal(6);
  });
});
