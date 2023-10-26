// function calculateSimpleInterest() {
//     const p = 5000;
//     const r = 4;
//     const t = 3;

//     const si = p * r * t / 100;
//     console.log(si);
// }

// calculateSimpleInterest();
// calculateSimpleInterest();
// calculateSimpleInterest();
// calculateSimpleInterest();

function calculateSimpleInterest(p, r, t) {
    const si = p * r * t / 100;
    return si;
}

const si = calculateSimpleInterest(5000, 5, 2);
console.log(si + 5000);
// calculateSimpleInterest(25000, 4.5, 3.5);

const calculateSi = function (p, r, t) {
    const si = p * r * t / 100;
    return si;
}

const siNew = calculateSi(2000, 10, 1);
console.log("siNew", siNew);

function calculateProduct(a, b) {
    return a * b;
}

// --------------------------------
var num1 = 5;
var num2 = 3;
var resultProduct = calculateProduct(5, 3);
console.log("resultProduct", resultProduct);
function sum(x, y) {
    return x + y;
}

// const calculateProduct = function (a, b) {
//     return a * b;
// }
//-------------------------------------------------


function calculateSimpleInterest(p, r, t) {
    return p * r * t / 100;
}

// const calcSiArrow = (p, r, t) => {
//     const si = p * r * t / 100;
//     return si;
// };

const variableName = () => {
    return p * r * t / 100;
}

const calcSiArrow = (p, r, t) => p * r * t / 100;

const arrowSiValue = calcSiArrow(5000, 12, 3.5);
console.log("arrowSiValue", arrowSiValue);

const demo = () => ({ name: "Alex" })
console.log(demo())


function calculate(initialValue, numbers, operationFn) {
    let total = initialValue;
    for (const number of numbers) {
        total = operationFn(total, number);
    }
    return total;
}


const sumResult = calculate(1, [2, 4, 6, 8], (a, b) => {
    console.log("Hi");
    return a * b
})
console.log(sumResult);

// function a() {
//     return function () {
//         return "Hello"
//     }
// }

// const output1 = a();
// const output2 = output1();

// console.log(a()())


const greeting = (userName) => {
    console.log("Hi", userName)
};

greeting("ABCD");

(() => {
    console.log("Hi there IIFE")
})();


((userName) => {
    console.log("Hi", userName)
})("Peter");