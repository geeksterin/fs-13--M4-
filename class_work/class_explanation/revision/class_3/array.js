// var arr = [];

// console.log(typeof arr)

// arr.push(1) // 100
// arr.push(2) // 104
// // from 105 to 200 memory is already occupied
// arr.push(3) // 201
// arr.push("Saurabh")
// console.log(arr)

// arr.unshift("Rahul") //
// console.log(arr)

// console.log(arr.pop());
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// pop => to remove last element
// shift -> to remove first element
// push => to add element at the end of array
// unshift => to add element at the begining of array

// instring function inside the array

// var greet = function(){
//     console.log('Good Evening')
// }
// greet();
// arr.push(greet);
// arr.push(
//     function abc(){
//         console.log('How are you!!?')
//         return function returnedFunction(){
//             console.log('returned function')
//         }
//     }
// )
// console.log(arr.length)
// console.log(arr);
// console.log(arr.length-1)
// arr[arr.length - 1]
// arr[arr.length - 1]();

// const pqr = arr.pop()();
// ();
// console.log(pqr);
// pqr();
// console.log(arr);
// arr[0]();

// =========================================================
// inserting array inside another array => nested array

// const array = [1,2,3];
// console.log(array,'\n') // [1,2,3]

// array.push([4,5,6]);
// console.log(array,'\n'); // [1,2,3,[4,5,6]]

// array.unshift([9,67,8])
// console.log(array,'\n') // [ [9,67,8] , 1 , 2, 3, [4,5,6] ]

// array.unshift(89);
// console.log(array,'\n')

// =========================================================
// spread operator
// ...

// const arr = [1,2]
// console.log( arr ) // [1,2]
// console.log( ...arr ) // 1 2...

// const temp = [11,12];
// temp.push(arr); 
// console.log(temp) // [11,12 , [1,2] ] // length will be increased by 1
// console.log(temp.length); // 

// [ 11, 12 , [1,2] ]

// [ 11 , 12 , 1 , 2 ]

// 1. one array is inside the another array
// 2. element's of one array are the part of another array
// arr = [1,2]
// temp.push( ...arr )

// [11,12,[1,2],1,2] => 5

// console.log(temp)
// console.log(temp.length) // length will be increased by size of arr

// =========================================================
// array methods

// some method will change the caller as well as return changed array
// some method will only return changed array

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);
// console.log('childern afer concate',children)
// console.log('arr1 after concat',arr1)
// arr1.push(45)
// console.log('arr1 after push',arr1)
// console.log('arr2',arr2)
// console.log('childern',children)
// console.log(arr1)

// =========================================================

// const fruits = ["Banana", "Orange", "Apple", "Mango",1,2,3];
// let text = fruits.join(' and ');
// text = fruits.join('');
// text = fruits.join();
// text = fruits.join(' ');
// console.log(fruits)
// console.log(text)
// console.log(typeof text);


// const temp = [1,2,[3,[23,12],4],{firstName:'John'}]
// const text = temp.join();
// console.log(temp)
// console.log(text);

// let obj = {firstName : 'John'}
// console.log(obj+'') // '[object Object]'

// =========================================================
// const temp = [1,2,3,[2,1]];
// const reverse_temp = temp.reverse();
// console.log(temp);
// console.log(reverse_temp)


// =========================================================

// const temp = [1,2,3,4,5];
// delete temp[0];
// console.log(temp);
// console.log(temp.length);
// delete temp[2];
// console.log(temp)
// console.log(temp.length);

// console.log(temp[0])

// [1,2,3,4,5]
// splice
// temp.splice(2,1);
// console.log(temp)

// =====================================================================
//  sorting
// const arr = [1,10,99,100]
// const temp = arr.sort( (a,b) => a-b );
// const temp = arr.sort(
//     function(a,b){
//         return a<b ? -1 : 1;
//     }
//     // a
//     // -ve => a cames before b in the sorted array
//     // +ve => a cames after b in the sorted array
//     // 0 => position a and b will be unchanged
// );
// console.log(temp);
// console.log(arr);


// example of callback function
// function helper(temp){
//     console.log('from helper function before calling fun')
//     temp();
//     console.log('from helper function after calling fun')
// }
// function fun(){
//     console.log('from fun function')
// }
// helper(fun);

// when we pass a function('A') as a argument to the another function('B')  then 'A' is known as callback function

// ============================================================================================
// find

const arr = [3,4,5,12,56,90,8];
const tempArr = arr.find( function(age){
    console.log(age);
    if( age>=54 ) return true;
} );
console.log(arr);
// NaN,undefined,null => falsly
console.log(tempArr);