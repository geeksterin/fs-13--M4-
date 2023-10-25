let student = {
    name: "John",
    age: 30,
    email: "john@example.com",
    phone: "9806232420",
    hasDriversLicense: true,
    chosenSubjects: ["DSA", "Distributed System", "Networking"],
    address: {
        addressLine1: "House No 123",
        addressLine2: "ABC Street",
        city: "Indore",
        state: "Madhya Pradesh",
        country: "India",
        a: {
            
        }
    },
    greet: function () {
        console.log("Hi there");
    },
    timestamp: new Date(),
    "FULL+NAME": "John Doe",
    x: 123,
}

let price = 100;


const x = "FULL+NAME";

// console.log(student.x);
// console.log(student[x]);
// console.log(student.FULL+NAME)
console.log(student.name);
student.name = "Batista";
console.log(student.name);
student["name"] = "Shawn";
console.log(student.name);
console.log(student["name"]);

console.log(student.fatherName);
student.fatherName = "Undertaker";
console.log(student.fatherName);

console.log(student.email);
const temp = student.email;
// delete student.email;
delete student["email"];
student.newEmail = temp;
console.log(student.email);
console.log(student);

delete student;
console.log(student);

delete student.address;
console.log(student);

const student2 = { ...student };
console.log(student2);

student2.age = 40;
console.log(student2.age);
console.log(student.age);

console.log("--------------------");

for (let key in student) {
    console.log(key, ":", student[key]);
}

console.log(student.length)
console.log(student.email);

const keys = Object.keys(student);

console.log("---------------");
console.log(keys);
console.log(Object.values(student));

console.log(Object.entries(student));