/* Data Types
   1. Object
   2. Primitive Datatypes
*/

/* ************************** *
***     Primitive DataTypes ***
/* ****************************/


// 1. Number (64 Bit)
   const num = 26;
   console.log("num type", typeof num)

// 2. String
   const value = "hello world"

   console.log("value-type", typeof value)

// 3. Boolean
  const boolValue = true;
  console.log("bool-value", typeof boolValue)

// 4. Undefined
   let hello ;
   console.log("hello-typeof", typeof hello)
   console.log("hello-value",hello)
// 5. Null
   const hello1 = null;
//    hello1 = 30
   console.log("hello1 - type", typeof hello1)
   
// 6. Symbol (ES6/2015)

// 7. BigInt (2020)

   const bigNumber = 10n
   console.log("bigNumber typeof", typeof bigNumber)



//Max & Min value that can be stored in Number

console.log("max-value-number", Number.MAX_VALUE * 10 )
console.log("min-value-number", Number.MIN_VALUE)

let abc = 123;
console.log( typeof  ( typeof abc ) ) //need to check concept