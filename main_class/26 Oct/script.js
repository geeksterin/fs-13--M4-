const hof = (x) => {
    console.log(x(), typeof x);
};

const greeting = () => {
    console.log("Hi");
};

// hof(greeting);

// const arg1 = function() {

// };
// const arg2 = "Hi";
// const arg3 = 123;

// calculate(
//     arg1,
//     arg2,
//     arg3)

function greetUser(currentValue, index, array) {
    const greetting = "Hello, " + currentValue;
    // console.log(greetting, index, array);
    return "Hello " + currentValue;
}

const arr = ["Tony", "Peter", "Bruce", "Steve"];

// for (let i = 0; i < arr.length; i++) {
//     greetUser(arr[i]);
// }


const forEachOutput = arr.forEach(greetUser);
console.log("forEachOutput", forEachOutput);
// const a = {};
// console.log(a);

const mapOutput = arr.map(greetUser);
console.log("mapOutput", mapOutput);

// E.g Write a program using JS Array built in method to get the squares of all the numbers given as [2,4,6,5,8] and store the output in an arary [4,16,36,25,64]

function calcSquare(currentValue) {
    return currentValue * currentValue;
}

const input = [2, 4, 6, 5, 8];
const squares = input.map(calcSquare);
console.log("squares", squares);


// function sorter(item1, item2) {
//     // 3 possible return values
//     /**
//      * Positive number : Swap item1 and item2
//      * Negative number : Swap item2 and item2
//      * Zero : Don't swap anything
//      */
//     if (item1 < item2) {
//         return 1
//     } else {
//         return - 1;
//     }
// }

const sorter = (item1, item2) => item2 - item1;

const sortedOutput = input.sort(sorter);
console.log("sortedOutput", sortedOutput);

const sortedArr = arr.sort();
console.log("sortedArr", sortedArr)

const products = [
    { name: 'Product A', price: 15, brand: "Samsung" },
    { name: 'Product B', price: 20, brand: "Apple" },
    { name: 'Product C', price: 30, brand: "Samsung" },
    { name: 'Product D', price: 10, brand: "Samsung" },
];

// const myFilterFunction = (currentValue) => {
//     /**
//      * Possible return values
//      * true : If you want to keep the item
//      * false : If you want to discard the item
//      */
//     if (currentValue.price > 20 && currentValue.brand === "Samsung") {
//         return true;
//     } else {
//         return false;
//     }
// };

const myFilterFunction = (currentValue) => currentValue.price > 20 && currentValue.brand === "Samsung";

const filteredProducts = products
.filter(myFilterFunction);
console.log("filteredProducts", filteredProducts);
