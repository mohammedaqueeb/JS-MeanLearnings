//boolean

let isActive: boolean = false;

//number
let contactNo: number = 4;

//text, string
let myName: string = "aqueeb";

//template string
let greeting: string = "hello," + myName;

//arrays
let count: number[] = [1, 2, 3];

//any
let anything: any;

//returing nothing
function greeter(name: string): void {
  console.log("hello," + name);
}

//enums
enum directions {
  up,
  down,
  left,
  right,
}
