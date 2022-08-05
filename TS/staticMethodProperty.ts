//the static keyword enables us to use methods of a class without instantiating an object.

class departments {
  //readonly prevent updating the property
  static readonly projects: string = "Marsh";
  static getDepartmentname(name: string) {
    return { name: name };
  }
}

departments.projects = "Citi CTC";
console.log(departments.getDepartmentname("IT"), departments.projects);
