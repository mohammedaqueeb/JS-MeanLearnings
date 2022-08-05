//interface is a blue print that define the struture of an object
// thoose who use the interface they need to follow the struture

interface student {
  studentname: string;
  contactno: number;
  getFullname(): string;
}

class studentDetails implements student {
  studentname: string;
  contactno: number;
  getFullname(): string {
    return this.studentname + " " + this.contactno;
  }
}

//duck typing

let astudent: student = new studentDetails();

let obje = {};
