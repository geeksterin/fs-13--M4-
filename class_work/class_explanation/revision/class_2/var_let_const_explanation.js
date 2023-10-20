var abc = 123;
abc = "drumil";
abc = [1,2,3,4];

var abc = 'Saiful';

// variable which are decalred with var keyword can be redclare as well
// variable which are decalred with let keyword can't be redclare in the same scope

// const variable must be instialize but it can't be reassignment


// let pqr = 345;
// pqr = "aisiownewon";
// pqr = [1,2,3,4,5,6,7,8,9,10];
// let pqr = 123;

// const PI = 3.14;
// // PI = 1.41;
// const ARR = [1,2,3];
// console.log(ARR);
// ARR.push(67);
// console.log(ARR);

// var functional scope
// let and const have block scope

// types of scope
    //  global, functional, block
// var firstName = 'Shah';
let lastName = 'Raj';
function helper(){
    var firstName;
    // let lastName; // not happed
    // let firstName = "Divyansh";
    // if(2){
    //     let firstName = "Rahul";
    //     console.log(firstName); // rahul
    // }
    // console.log(firstName); // divyansh

    console.log(lastName); // ReferenceError

    if(2){
        // var firstName = "abc";
        let lastName = "def";
        lastName = 'pqr';
        // console.log(firstName); // abc
        console.log(lastName); // pqr
    }
    // console.log(firstName); // abc
    lastName = 'jaideep';
    console.log(lastName); // ReferenceError:
    lastName = 'def';
}

helper();
// console.log(firstName) // ReferenceError
console.log(lastName) // ReferenceError:

