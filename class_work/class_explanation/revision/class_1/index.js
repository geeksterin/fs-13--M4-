// =================================== learning console ===================================

// console.log('Running');
// console.warn('warings detected')

// =================================== types of string ===================================
// ''
// ""
// ``
// var val = 234;
// MOST IMP SEE THIS THREE LINES HOW INTERNALLY WORKS 
// console.log(`warings detected ${val}`)
// console.log('wardings detected',val)
// console.log('wardings detected'+val)
// let obj = {};
// console.log(`warings detected ${obj}`)
// console.log('wardings detected',obj)

// console.log(`how are you
//     what are you doing`)

// console.log('how are you \n\twhat are you doing')
// process.stdout.write('Running')

// =================================== var , let , const ===================================

// var abc = 123;
// abc = 345;

//  rules for variable names
// let a;
// a1;
// a2;
// _a;
// a;

// we will not use this in pure js
// _ => in starting used for private variables
// $ => in starting used for jquery 
// 1a

// =================================== data types ===================================

// primitive
// Number,BigInt,Boolean,String,Null,undefined,symbol

// non-primitive
// object,array,function

// let abc = null;
// let firstName = undefined;
// console.log( typeof abc );

// let def;
// console.log(def);

// let abc = 123;
// console.log( 123 + ' hello')
// let num = '67';
// console.log(num-7);
// let val = false;
// console.log( val + 1 ); // NaN
// let str = '';
// console.log( str + 1 );
// let str1 = "56";
// console.log(str1*5); // 280
// str1 = "hello"
// console.log(str1*5); // 
// console.log(str1-5); // 
// console.log(str1+5); // 

// typeof => opertor,string

// about enums in java
// switch(userInput){
//     case Moday:
//         console.log( 'Monday' );
//         break;
//     case TuseDay:
//         console.log( 'Tuesday' );
//         break;
// }

// typoes
// firstName,lName => lastName

// let abc = 123;
// abc = 1111111111111111111111111111111111111111111111n;
// abc = 7/0;
// console.log(abc);
// abc = -7/0;
// console.log(abc);
// 2^53-1 => limit of Number

// falsey => "",'',``,0,NaN,false,undefined,null,-0

//  abc = -0; // i need to check
// console.log(abc);

// if( -0 )    console.log('he');
// if( [] )    console.log('he');

// console.log(abc);

// non-primitive, 
// Object,Array,Function

// let abc = 45;
// abc = 67;
// let str = "how are you?";
// console.log(str);
// str[0] = 'w';
// console.log(str);

// let array = [];
// array.push(123);
// console.log(array);


// let abc = 5;

// abc **= 2;
// abc = abc**2;
// console.log(abc);

// abc %= 2;
// console.log(abc);

// diffrence between reminder and modulus operator

//  5%2 => 1
//  25%7 => 4
//  -25%7 => 4
// modulo , reminder
// %

// console.log(7%2)
// console.log((-7)%2);
// console.log(7%(-2));

// diffrance between subtraction and diffrence operator
// 5-2 => 3
// 5diff2 => 3

// 2-5 => -3 (subtraction)
// 2-5 => 3 (diffrence)

// NOTE :- IN JS WE HAVE REMINDER OPERATOR WE DO NOT HAVE MODULUS OPERATOR

// a+b
// a,b => operand
// + => operator

// CONCEPT OF SHORT-CIRCUIT IN LOGICAL OPERATORS

// let a = 45;
// let b = 56;
// let g = b++;
// console.log(b);
// let c = a || b++;
// let d = b && a++;
// console.log(a); // 46
// console.log(b);// 56
// console.log(c);
// console.log(d);
// let a = 67;

// PRE AND POST INCREMENT
// a++ => output is 67, and a will change
// a+1 => output is 68, but a will not change
// ++a => output is 68, and will change

// EXECERISE

// console.log(5==5); // 
// console.log(5!=5); // 
// console.log(6=="6"); // 
// console.log(6!==7); // 
// console.log("a"=="a"); 
// console.log("a"!="a");  


// var geek = 5;
// var a = "Geekster";
// var b = geek;
// console.log(a==b); // 
// console.log(a!=b); // 
// console.log(a===b); // 
// console.log(a!==b); // 

// var geek = 5;
// var a = "Geekster";
// var b = geek;
// console.log(a==b); //
// console.log(a!=b); //
// console.log(a===b); //
// console.log(a!==b); //


// var geek = 5;
// var a = "Geekster";
// var b = geek;
// console.log(a==b); //
// console.log(a!=b); //
// console.log(a===b); //
// console.log(a!==b); //


// var a = 5;
// var b = 6;
// var c = "6";
// var d = -2;
// var e = "m";
// console.log(b==c); // 
// console.log(b===c); //
// console.log(a<=c); //  
// console.log(d<=a); //


// var ram = "web development";
// console.log(5==5); //
// console.log(5===5); //
// console.log("geekster"=="geekster"); //
// console.log(5=="5"); // t
// console.log(ram == "ram"); // false
// console.log(5=="ram"); // false
// console.log(ram="shyam") 
// let b = 51;
// if( 5==b ){
//     console.log('true');
// }else
//     console.log(false);

// let abc = 634;
// console.log(abc);
// console.log(def);