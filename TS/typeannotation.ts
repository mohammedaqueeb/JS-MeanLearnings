function getname(i) {
  const names = ["a", "b", "c"];
  return names[i];
}

const n = getname(1);

//use annotation means we difining the type of paramater exmaple
//this function only return string
// i only accept number
function newgetname(i: number): string {
  const names = ["a", "b", "c"];
  return names[i];
}

//function types
//when we are asigin function to number or string funtion wil only returns number / string
function functionType(i: number): number {
  return 1;
}

//optional paramter --> ? stands for optional paramter
function optionalparamter(i: number, name?: string): number {
  return 1;
}

/// to not return any thing from function we use void

function voidfuntion(): void {
  //return 0 use return it will show error
  //it not return any thing
}
