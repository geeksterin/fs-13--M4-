let obj = {
    firstName : 'Divyansh',
    lastName : 'Rajpoot',
    hobbiess : ['cricet','watching movies','coding'],
    address : {
        line1 : 'abc',
        line2 : 'pqr',
        city : 'delhi',
        country : 'india'
    },
    students : [
        {
            firstName : 'Aadarsh',
            lastName : 'Raj',
        },
        {
            firstName : 'Nirzon',
            lastName : 'Karmakar'
        },
        {
            firstName : 'Rahul',
            lastName : 'Meena'
        },
        {
            firstName : 'saiful',
            lastName : 'Islam'
        }
    ]
};
let arr = [1,2,3,4];
console.log('-------------------------------- traditional loop --------------------------------')
for(let i=0 ; i<arr.length ; i++){
    console.log(arr[i]);
}
console.log('-------------------------------- for of --------------------------------')
for(value of arr){
    console.log(value);
}
console.log('-------------------------------- forEach --------------------------------')
arr.forEach(function (d,a){
    console.log(d + ' ' + a);
})
console.log('-------------------------------- for in with array--------------------------------')
for(index in arr){
    console.log(arr[index] + ' '+index);
}
console.log('-------------------------------- for in with object --------------------------------')
for(key in obj){
    // console.log(key + ' ' + obj[key]);
    // console.log(`${key}  ${obj[key]}`);
    console.log(key)
    console.log(obj[key]);
}
// for(student of obj.students) {
//     console.log(student);
// }
// students.push({firstName : 'divyansh', lastName : 'Rajpoot'});
// console.log(obj);
// console.log(obj.firstName);
// console.log(obj.lastName);
// console.log(obj['h 1']);
// console.log(obj.address);
// console.log(obj.address.line1);
// obj.address.line1 = 'xyz';
// console.log(obj.hobbiess);
// // obj.hobbiess = ['cricet','watching tv','coding'];
// obj.hobbiess.push('watching tv');

// obj.phoneNumber = '1234567890';

// console.log(obj);

// delete obj.hobbiess;
// // delete obj;
// console.log(obj);