// call apply bind

let user = {
  firstname: "aqueeb",
  lastname: "shaikh",
};

let user1 = {
  firstname: "sham",
  lastname: "singh",
};

let fullName = function (city, state) {
  console.log(this.firstname + " " + this.lastname + " " + city + " " + state);
};

// call also known as function borrowing it invoke a function direclty
fullName.call(user, "pune", "maharashtra");
//in call we can pass second arguments in list
fullName.call(user1, "auranagabad", "maharashtra");

//the diffrence between call and apply method is just passing the parametter
//in call we can pass second arguments as array list
fullName.apply(user, ["mumbai", "maharashtra"]);

//instead of calling The bind() method creates a new function.
//it deosnt direclty call bind method return a function and we call it later

let printmyname = fullName.bind(user, "auranagabad", "maharashtra");
console.log(printmyname);
printmyname();
