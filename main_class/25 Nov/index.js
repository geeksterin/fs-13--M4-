// const orderPizza = () => {
//     return new Promise((resolve, reject) => {
//         // Simulating a successful pizza preparation

//         setTimeout(function callback() {
//             const isPizzaReady = true;
//             if (isPizzaReady) {
//                 resolve("Delicious pizza delivered!"); // Resolve with a success message
//             } else {
//                 reject("Sorry, we couldn't make your pizza."); // Reject with an error message
//             }
//         }, 3000)
//     });
// };

// function eatPizza() {
//     return new Promise((resolve, reject) => {
//         resolve('pizza is finished');
//     });
// }

// function digestPizza() {
//     return new Promise((resolve, reject) => {
//         resolve('digested');
//     });
// }

// // orderPizza()
// //     .then((result) => {
// //         console.log(result);
// //         return eatPizza();
// //     })
// //     .then(result => {
// //         console.log(result);
// //     })
// //     .then(result => {
// //         console.log(result);
// //     })
// //     .catch((error) => {
// //         console.error(error); // This will log the rejected error message when the Promise is rejected.**
// //     });

// // async await => syntical sugar 

// async function main() {
//     let result = await orderPizza();
//     console.log(result);

//     result = await eatPizza();
//     console.log(result);

//     result = await digestPizza();
//     console.log(result);
// }
// main();


const abc = [1, 2, [7, 8], 3, 4];

const abc1 = [...abc, 10, 11];

// console.log(abc)
// console.log(abc1)

let personIntro = {
    firstName: 'saiful',
    lastName: 'Islam',
    address: {
        city: 'abc',
        country: 'india'
    }
}
let personDetail = {
    ...personIntro,
    age: 21,
    geneder: "male"
}
// console.log(personIntro)
// console.log(personDetail)

function fun(arg1, ...arr) {
    console.log(arr[arr.length - 1]);
}

// fun(1,2,3,4,'helo',{firstName : 'helo', lastName : 'how are you'})

const numbers = [1, 2, 3, 4, 5, 6];
const [a, b, c, ...arr] = numbers;
// console.log(a, b, c, arr);  // Outputs: 1 2 3

const {firstName,lastName,address:{city,country}} = personDetail;
// console.log(firstName, lastName,city,country)
// console.log(personDetail);

function fun(){
    // arguments
    console.log(arguments);
}
const helper = (...arr)=>{
    console.log(arguments);
}
fun(34,12,'hello');
helper();

// arguments

// arrow function can't work as constructor function
// function statment can work as constructor function
