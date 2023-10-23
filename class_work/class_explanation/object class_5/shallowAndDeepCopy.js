var obj1 = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    address: {
        city: 'Washington',
        state: 'pqr',
        country: 'United States'
    }
};
obj1 = 'pqr';
// const obj2 = obj1; // copying the referance
// obj2.firstName = "John2";
// console.log(obj1)
// console.log(obj2)

// console.log('applying spread operator')

// const obj3 = {...obj1}; // shallow copy of obj1
// shallow copy will make new object but it will copy reference
// console.log('obj3 before changing',obj3);
// obj3.firstName = "John3";
// obj3.address.city = "def";
// console.log('obj1',obj1);
// console.log('obj3',obj3);

// console.log('stringify and parse');

// // stringify => it will convert your js object to  JSON format

// const jsonObject = JSON.stringify(obj1);
// console.log(jsonObject);

// parse => it will convert your JSON to js object
// const deepCopyObj = JSON.parse(jsonObject);
// console.log(deepCopyObj);
// deepCopyObj.address.city = 'abc';
// console.log(deepCopyObj);
// console.log(obj1);

// const deepCopy = JSON.parse(JSON.stringify(obj1));

// const objectToCopy = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//         city: 'New York',
//         state: 'NY',
//         zip: '10001'
//     }
// };

// const deepCopy = JSON.parse(JSON.stringify(objectToCopy));

// console.log(deepCopy);
// deepCopy.address.city = "Sdf";
// console.log(objectToCopy)
// console.log(deepCopy)

// import _ from 'loadsh';

// const originalObject = {
//     name: "John Doe",
//     age: 30,
//     address: {
//         street: "123 Main Street",
//         city: "Anytown",
//         state: "USA"
//     }
// };

// const clonedObject = _.cloneDeep(originalObject);

// console.log(clonedObject);
