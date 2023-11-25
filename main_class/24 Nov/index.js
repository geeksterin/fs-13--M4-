// console.log(abc); // undefined
// var abc = 56;

// all vriables which defined with var keyword are going to be hoisted and assigned as undefined

// after parsing
// var abc;
// console.log(abc); // undefined
// abc = 56;

// console.log(firstName); // error
// let firstName = 'john';

// ReferenceError: Cannot access 'firstName' before initialization
// ReferenceError: firstName is not defined

// helper();
// function helper(){
//     console.log('this is a helper function');
// }

// const helper = function(){
//     let abc = 56;
//     console.log('this is a helper function');
// }

// var and function statements are going to be hoisted 
// let and const are also hoisted but varlues are not initialized

// let personInfo = {
//     firstName : 'John',
//     lastName : 'Smith',
//     age : 21,
//     address : {
//         city : 'abc',
//         state : 'Gujarat',
//         country : 'India'
//     },
//     getFirstName : function(){
//         return this.firstName;
//     },
//     setFirstName : function(firstName){
//         this.firstName = firstName;
//     },
//     hobbies : ['cricket,coding,DSA']
// }
// [] , .

// your key is stored in variable => []
// our key have some specical => []

// console.log(personInfo)
// delete personInfo.firstName;
// console.log(personInfo)

// var firstName1 = 'John';
// var firstName2 = 


// const person = new Person('john', 'Doe');
// console.log(person);
// class Person {
//     constructor(first, last) {
//         this.firstName = first;
//         this.lastName = last;
//     }
// }

// let fs13_students = [];
// for (let i = 0; i < 14; i++) {

//     const name = prompt("give your name");

//     let student = new Person(name, name);

//     fs13_students.push(student);
// }

// let Person = class {
//     constructor(first, last) {
//         this.firstName = first;
//         this.lastName = last;
//     }
// };

// function createClass(isSpecial) {
//     return isSpecial ? class SpecialClass { } : class RegularClass { };
// }

// const dynamicClass = createClass(prompt("are you male?"));

// ...
// Person =
// const person = new Person('john', 'Doe');
// console.log(person);
// OR
// let Person = class Person2 {};


// class Vehicle {

//     constructor(wheels, seats, color) {
//         this.wheels = wheels;
//         this.seats = seats;
//         this.color = color;
//     }
//     getName() {
//         return this.make + " " + this.model;
//     }
// }

// class Vehicle{
//     constructor(wheels, seats, color,services){
//         this.wheels = wheels;
//         this.seats = seats;
//         this.color = color;
//         this.services = services;
//     }
//     getNoOfSeats(){
//         return this.seats;
//     }
// }

// class Car extends Vehicle{
//     constructor(wheels,milage,engine,seats,color,services){
//         super(wheels,seats,color,services);
//         this.engine = engine;
//         this.milage = milage;
//         // ...
//     }
// }
// let car = new Car(4,20,"5cc",4,"black",4);
// console.log(car);
// console.log( car.getNoOfSeats() );

// class Cycle extends Vehicle{
//     constructor(wheels,seats,services,abc){
//         this.wheels = wheels;
//         this.seats = seats;
//     }
// }


// class Vehicle {
//     constructor(make, model, color) {
//         this.make = make;
//         this.model = model;
//         this.color = color;
//     }
//     getName() {
//         return this.make + " " + this.model;
//     }
// }
// class Car extends Vehicle {
//     // this => it is used to refer the object within itself
//     // super => it is used to refer the parent object inside child
//     getName() {
//         return super.getName() + " - called base class function from child class.";
//     }
// }
// let car = new Car("Honda", "Accord", "Purple");
// console.log(car);
// console.log(car.getName()) // "Honda Accord in child class."

// class Vehicle {
//     constructor(model) {
//         this.model = model; // 1
//     }
//     get model() {
//         // console.log('get is invoked') // 2
//         return this._model;
//     }
//     set model(value) {
//         if( typeof value !== 'string' ) return;
//         // console.log('set is invoked') // 4
//         this._model = value;
//     }
//     // getModel() { return this._model; }
//     // setModel(model) { this._model = model }
// }
// const v = new Vehicle("dummy");
// console.log(v.model); // get is invoked
// v.model = "demo"; // set is invoked
// v.model = 35;
// console.log(v.model)
// // v._model = 45;
// console.log( v._model );


// function sum(num1,num2){
//     console.log('second')
// }

// compiler time and runtime polymorphism

class firstClass {
    // constructor(){}
    add() {
        console.log("First Method")
    }
}
class secondClass extends firstClass {
    add(n1,n2) {
        console.log(n1+n2);
    }
}
class thirdClass extends secondClass {
    add() {
        console.log("Last Method")
    }
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add(); // 
ob2.add(); // NaN
ob3.add(); //


