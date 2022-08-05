//the static keyword enables us to use methods of a class without instantiating an object.
var departments = /** @class */ (function () {
    function departments() {
    }
    departments.getDepartmentname = function (name) {
        return { name: name };
    };
    departments.projects = "Marsh";
    return departments;
}());
departments.projects = "Citi CTC";
console.log(departments.getDepartmentname("IT"), departments.projects);
