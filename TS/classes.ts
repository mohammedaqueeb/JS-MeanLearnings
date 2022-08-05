export class person {
  firstname: string;
  lastname: string = "aqueeb";
  getfullname() {
    return this.firstname;
  }
  getlastname() {
    console.log("person last name");
  }
}

var aPerson = new person();
aPerson.firstname = "aqueeb";
//console.log(aPerson);

//inhertance

class user extends person {
  getname(): string {
    super.getlastname();
    return this.lastname;
  }
  getfullname() {
    return "user full name";
  }
}

var auser = new user();
console.log(auser.getname());
