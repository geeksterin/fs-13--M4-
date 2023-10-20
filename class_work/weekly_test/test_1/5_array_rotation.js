function right_rotation(array1,no_of_rotation){
    let rotated_array = [];
    for(let i=array1.length-no_of_rotation; i<array1.length ; i++)
        rotated_array.push(array1[i]);

    for(let i=0 ; i<array1.length-no_of_rotation ; i++)
        rotated_array.push(array1[i]);
    
    return rotated_array;
}

let rotated_array = right_rotation([1,2,3,4,5,6,7,8],5);
console.log(rotated_array);

// 0 1 2 3 4
// 1 2 3 4 5

// let new_array = [];

// 0 1 2 3 4
// 1 2 3 4 5

// no_of_rotation = 1

// [5,]

// 0 1 2 3 4
// 5 1 2 3 4

// 0 1 2 3 4
// 4 5 1 2 3

// 5 1 2 3 4
// 4 5 1 2 3
// 3 4 5 1 2