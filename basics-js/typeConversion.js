/* Type Conversion (Explicit conversion)  */


/* *** Convert to String *** */
//String();
//toString();

console.log(String(123))
console.log(String(undefined), typeof String(undefined))
console.log(String(true) , typeof String(true))
console.log(String(null), typeof String(null))

console.log((123).toString(), typeof (123).toString())
// console.log("undefined-toString",undefined.toString())
// console.log("null-toString",null.toString())

// let a = "55"
// const result = a -5

// console.log("a", typeof a)
// console.log("result", typeof result)




/** Convert to Number */ 
//Number();

// Unary +  --- works on variable
//parseFloat();
//parseInt();

console.log(Number("123"))
console.log(Number("hello"))
console.log(+"123")

//parseInt

console.log(parseInt("ff12345.555fff")) //decimal base 
console.log(parseFloat("1234.56666"))



/** Convert to Boolean */
//Boolean();

console.log(Boolean(3))