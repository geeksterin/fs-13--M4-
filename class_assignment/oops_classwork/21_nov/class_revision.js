// let obj1 = {
//     firstName : 'John',
//     lastName : 'Doe',
// }
// console.log(this);
// function fun(){
//     console.log(this);
// }
// fun();
// function Person(firstName, lastName) {
//     this.firstName = firstName || 'Unknown';
//     this.lastName = lastName;
//     this.getFullName = function() { 
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// // if you are returning an primitive data type from constructor function then it will ingnore that and return obj
// // if you are returning non-primitive data type from constructor function then it will return that data itself
// const obj = new Person('John', 'Doe');
// console.log(obj);
// console.log( obj.getFullName() );

// const obj2 = new Person('John1', 'Doe1');
// console.log(obj2);


// var myVar = 100;
// function Temp(){
//     this.myVar = 200;
//     this.display = function(){
//         var myVar = 300;
//         console.log(myVar);
//         console.log(this);
//         console.log(this.myVar);
//     }
// }
// const obj = new Temp();
// obj.display();

let Person = {
    firstName: 'person',
    greetUser: function () {
        console.log(this);
        console.log('good evening', this.firstName);
    }
}
Person.greetUser();

const obj = {
    firstName: 'john'
}
Person.greetUser.call(obj);
// greetUser.call(obj)
