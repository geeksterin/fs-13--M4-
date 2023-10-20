if (true) {
    var globalVar = "I'm a global var";
    let globalLet = "I'm a global let";
}

console.log(globalVar);
console.log(globalLet);
// ===============

function exampleFunction() {
    var functionVar = "I'm a function var";
    let functionLet = "I'm a function let";
}

exampleFunction();

console.log(functionVar);
console.log(functionLet);

// ===============

if (true) {
    var varInBlock = "I'm a var in a block";
    let letInBlock = "I'm a let in a block";
}

console.log(varInBlock);
console.log(letInBlock);


// ===============
// var myVar = "I'm a var";
// let myLet = "I'm a let";

// var myVar = "I'm a var redeclaration";
// let myLet = "I'm a let redeclaration";


// ==================

for (let i = 0; i < 3; i++) {
    const myConst = "I'm a constant value";
    console.log(myConst); // "I'm a constant value" (printed 3 times)
}

console.log(myConst); // ReferenceError: myConst is not defined