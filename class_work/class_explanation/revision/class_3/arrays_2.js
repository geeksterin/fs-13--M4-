// ==============================  parseInt  ==============================

// let pqr = "234";
// const number1 = parseInt(pqr);
// console.log(parseInt('ff1254', 16));
// console.log(parseInt('111054',2));
// console.log(parseInt('54',2));


// ==============================  functions  ==============================

// function statement
// function expression

// fat arrow function

// ==============================  function statements

// function helper(a,b){
//     // defualt return type of function undefined
//     console.log(a);
//     console.log(b);
// }
// helper(3,1);
// helper("drumil","akhenia");
// helper({a:2,b:1},123);
// var d;
// function sum(a,b,c){
//     // console.log(arguments)
//     let sum = 0;
//     for(index in arguments){
//         sum += arguments[index];
//     }

//     // const arr = [1,2,3,4]

//     // arr.forEach((element,index) => console.log(element + ' ' + index));
    

//     // arguments.forEach(element => {
//     //     console.log(element);
//     // });
    
//     return sum;
// }
// console.log(sum(1,2,3)) // 6
// console.log( sum(3,1,3,1,4) ); // 7
// console.log(sum(2,3));
// console.log( sum(3,1,3,1,4,6) );
// console.log( sum(3,1,3,1) );

function Objects_method(){
    
    let obj = {
        firstName : 'Sushil',
        lastName : 'kulkarni'
    }

    console.log( Object.keys(obj) ); // returns array of strings which contains keys
    console.log( Object.values(obj) ); // returns  array of strings which contains values

}

// let a = "123";
// console.log(a, typeof a); //string
// let b = +a;
// console.log(b, typeof b);//number


// function test(a,b,c){
//     return a+c+b;
// }
// 600
// console.log( test("rahul ",{a:1,b:23,c:67,d:56,f:232},{a:"sf"}) );

function substract(a,b){
    return a-b;
}
console.log(substract("a",3));


// ===================  how to print the data in one line ===================
// const arr = [1,2,3,4,5,6,7,8]
// for(value of arr){
//     process.stdout.write(value + ' ')
// }

// another example
// let limit = 9
// let space = 0

// for (let i = 0; i < 5; i++) {
// 	for (let k = 0; k < space; k++) {
// 		process.stdout.write('  ')
// 	}

// 	space++

// 	for (let j = 1; j <= limit; j++) {
// 		process.stdout.write(`${j}` + ' ')
// 	}

// 	console.log()
// 	limit -= 2
// }
