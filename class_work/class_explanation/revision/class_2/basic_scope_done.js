// code - 1 Global Scope
// let globalVariable = "I'm global!";

// function exampleFunction() {
//     console.log(globalVariable); 
// }

// code - 2 Block Scope:
// console.log(blockScopedVariable)
// if (true) {
//     var blockScopedVariable = "2";
//     console.log(blockScopedVariable); 
// }
// console.log(blockScopedVariable);

// // code - 3 Functional Scope:
// function exampleFunction() {
//     let functionScopedVariable = "I'm function-scoped!";
//     console.log(functionScopedVariable); 
// }


// // code - 4 Function Scope
// console.log(varVariable);
// function example() {
//     if (true) {
//         varVariable = "2";
//     }
//     console.log(varVariable);
// }
// example();
// console.log(varVariable);

// // code - 5 Hoisting
// function example() {
//     console.log(hoistedVar);
//     var hoistedVar = "I'm hoisted!";
// }

// example();

// // code - 6 Lack of Block Scope
// let x = 10;
// if (true) {
//     let x = 20;
//     console.log(x);
// }
// console.log(x);


// var x = 10;
// var x = 20;
// console.log(x);

// // Block Scope
// function example() {
//     if (true) {
//         let letVariable = "I'm a let variable";
//     }
//     console.log(letVariable);
// }

// example();


// //   No Variable Hoisting
// function example() {
//     console.log(hoistedVar);
//     let hoistedVar = "I'm hoisted!";
// }

// example();

// // Preventing Reassignment in the Same Scope
let x = 10;
if (true) {
    let x = 20;
    console.log(x); // 20
}
console.log(x); // 10

// let x = 10;
// let x = 20;


// console.log(x);

// let x = 42;


// const pi = 3.14159265359;
// pi = 4;


// const person = {
//     name: "Alice"
// };
// person.name = "Bob";

// console.log(person.name); 
