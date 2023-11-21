// pollyfills for map,filter and reduce

// const arr = [1,2,3,4,5];

// polly fill for map
// const result = arr.map( function(element, index,arr) {
//     console.log(element, index, arr);
//     return 33;
// } )
// console.log(result);

// Array.prototype.myMap = function(callback) {
// it will run one loop on the array
// and make a call to the callback function
// whatever returned value of callback function will be stored in the array
// return that array
// console.log(this);
//     const result =  [];
//     for(let i=0 ; i<this.length ; i++){
//         result.push( callback(this[i],i,this) );
//     }
//     return result;
// }

// const updated_arr = arr.myMap(ele=>ele+2);
// console.log(updated_arr);


// fillter can be done by yourself 

Array.prototype.myReduce = function (callback, seed) {
    for (let i = 0; i < this.length; i++) {
        if (undefined === seed) seed = this[i];
        else
            seed = callback(seed, this[i], i, this);
    }
    return seed;
}

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const result = arr.reduce(function (...args) {
    console.log(args)
    return args[1]
});
console.log(result);
// const result1 = arr.myReduce(function (...args) {
//     console.log(args)
//     return args[1]
// });
// console.log(result1);

// define inside prototype
// take parameter as callback function
// run a loop over the array
// and make call to the callback function
// pass seed,current element,index of current element,array
// take result and this result will become seed for next iteratoin

const arr2 = [1, 2, 3, 4, 5]
const result1 = arr2.reduce((acc, value) => acc + value);
const result2 = arr2.myReduce((acc, value) => acc + value);
console.log(result1,result2);

// some,every,forEach,find,findIndex

// call,apply,bind