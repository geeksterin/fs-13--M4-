function array_intersection(array1, array2){
    let frq = {};
    let ans = [];
    for(let value of array1)    frq[value] = true;
    for(let value of array2)    if( frq[value] )    ans.push(value);
    return ans;
}
let array1 = [1,2,3];
let array2 = [3,1,5];
let reverse_array = array_intersection(array1, array2);
console.log(reverse_array);