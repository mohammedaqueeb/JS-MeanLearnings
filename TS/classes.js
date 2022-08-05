"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.person = void 0;
var person = /** @class */ (function () {
    function person() {
        this.lastname = "aqueeb";
    }
    person.prototype.getfullname = function () {
        return this.firstname;
    };
    person.prototype.getlastname = function () {
        console.log("person last name");
    };
    return person;
}());
exports.person = person;
var aPerson = new person();
aPerson.firstname = "aqueeb";
//console.log(aPerson);
//inhertance
var user = /** @class */ (function (_super) {
    __extends(user, _super);
    function user() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    user.prototype.getname = function () {
        _super.prototype.getlastname.call(this);
        return this.lastname;
    };
    user.prototype.getfullname = function () {
        return "user full name";
    };
    return user;
}(person));
var auser = new user();
console.log(auser.getname());
