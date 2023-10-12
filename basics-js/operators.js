/*    Operators in JavaScript */
/* 1. Arithmetic
(+, -, *, /, %, **, ++, --)
*/

const num1 = 3 + 5 ;
console.log("num1",num1)
const num2 = 10 % 5;
console.log("num2",num2)

console.log(2 ** 3)

let postIncrement =  3;

console.log(postIncrement) //  
console.log(postIncrement++)// return us current value and then it update in memory
console.log(postIncrement)


let preIncrement = 4;

console.log(++preIncrement)
console.log(preIncrement)




/* 2. Assignment 
(=, +=, -=, /=, %=, **=)

*/

let result = 10;
 result += 2;  // result = result + 2

 console.log("result",result)

/* 3. Comparison
   (<, >, <=, >=, ==, !=, ===, !==)

*/

console.log(5 <=  7)

console.log(5 == '5')  // value , coercion

console.log( 5 === '5')  // type as well as value 




/* 4. Logical
(&&, ||, !)
*/

// true && true = true
// true && false = false
// false && false = false
// false && true = false
// && returns the last truthy value and first falsy value

// ("", null , undefined , 0 , Nan) these values are treated as  falsy value
console.log("num-checking-boolean",Boolean(2))
// console.log( 3 && 2)

let a ="something"
let b ="njjejd"

console.log(Boolean(a)&& Boolean(b))

// console.log("a,b",  a ==  b)

// OR takes first truthy value and last falsy value

console.log ("" || true || 0)


console.log("negation", !true)