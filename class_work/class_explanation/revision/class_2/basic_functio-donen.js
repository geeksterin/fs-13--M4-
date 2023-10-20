// code - 1
function calculateFactorial(number) {
  if (number < 0) {
    return "Factorial is not defined for negative numbers.";
  } else if (number === 0 || number === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return `The factorial of ${number} is ${factorial}.`;
  }
}

const result1 = calculateFactorial(5);
const result2 = calculateFactorial(0);
const result3 = calculateFactorial(-3);

console.log(result1);
console.log(result2);
console.log(result3);

function sum(num1,num2){
  return num1+num2;
      // 3 + undefined
      // 3 + NaN => NaN

  // will be replaced by 
  // return undefined;
}
let ans = sum(3,5,45,42);
console.log(ans); // 8
ans = sum(3);
console.log(ans); // NaN