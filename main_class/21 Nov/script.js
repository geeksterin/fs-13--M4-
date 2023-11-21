// "use strict";
// console.log("OOP1");

// const obj = {
//   name: "Arya",
//   otherObj: this,
//   func: function () {
//     return this;
//   },
// };

// console.log(obj.func());
// console.log(obj.otherObj);

// window.greetUser();
// a = 10;
const student = {
  name: "XYZ",
  enrollmentNo: 12345,
  bloodGroup: "AB+",
  greet: function () {
    // console.log("Student greet", this);
    console.log(`Hello ${this.name}, Age : ${this.age}`);
  },
};
student.name = "Dave";
student.age = 15;
// student.greet();
student.greetNew = function () {
  console.log(this.enrollmentNo);
};

// student.greetNew();

function greetUser(salutation, arg2) {
  console.log("Greet user", salutation, this.userName, arg2);
}

// greetUser("Mr", 124);

const user = {
  userName: "XYZ",
  address: "123 ABC XYZ, DELHI",
  bloodGroup: "O+",
};

const user2 = {
  userNam: "ASDAS",
  address: "123 ABC XYZ, DELHI",
  bloodGroup: "O+",
};

console.log(user2);

const args = ["Mr", 100];
console.log(args);
// Syntax : function.apply(thisObj)
// greetUser.apply(user, ["Mr", 100]);

// Syntax : function.call(thisObj, arg1, arg2, arg3.....arg n)
// greetUser.call(user, ...args);

// const arr = [1, 43, 564, 135, 756, 234];
// Math.max(2, 31, 532, 63456, 123);
// console.log(Math.max.apply(null, arr));
// console.log(user);

// Constructor function
function Student(userName, address, bloodGroup) {
  this.userName = userName;
  this.address = address;
  this.bloodGroup = bloodGroup;
  //   console.log(this)
}

const userDetails = new Student("Undertaker", "123ABC", "O-");
console.log(userDetails);

const userDetails2 = new Student("Roman Regins", "XYZ123", "A-");
console.log(userDetails2);

const arr2 = [1, 2, 3, 4];

Array.prototype.info = function () {
  console.log("This is an array");
};

arr2.info();
console.log(typeof arr2);
args.info();

const students = ["A", "B", "C"];
students.info();

Array.prototype.forEach = function () {
  console.log("My custom forEach");
};

students.forEach((student) => {
  console.log(student);
});
