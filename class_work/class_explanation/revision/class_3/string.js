// // let firstName = "Saiful";
// // let lastName = "Islam";

// // // console.log( "FirstName " + firstName + "\nLastName "+ lastName );

// // // console.log(
// // // `FirstName ${firstName} \n LastName ${lastName}`
// // // );

// // const text = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// // I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// // Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// // In the end of 2019, I was thinking to expand my teaching and to reach \
// // to global audience and I started a Python challenge from November 20 - December 19.\
// // It was one of the most rewarding and inspiring experience.\
// // Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// // I hope you are enjoying too";
// // console.log(text)

// // =================================================================
// // search

// let text = "JavaScript is a versatile programming language. JavaScript is widely used for web development.";
// let keyword = "java";
// let position = text.search(keyword);
// if (position !== -1) {
//   console.log(`The keyword "${keyword}" was found at position ${position}.`);
// } else {
//   console.log(`The keyword "${keyword}" was not found in the text.`);
// }

// const value = text.indexOf(keyword);
// console.log(value);

// const str = "Hello, world!";
// const index = str.search(/World/i); // Returns 7 (case-insensitive)
// console.log(index);


// const text = "Hello, World!";
// const subText1 = text.substring(0, 5);
// console.log(subText1); // Output: "Hello"

// const subText2 = text.substring(7); // If no end index is provided, it goes to the end
// console.log(subText2); // Output: "World!"

// const subText3 = text.substring(6, 0); // Reversing the order of 'start' and 'end'
// console.log(subText3); // Output: "Hello" (start is inclusive, end is exclusive)

// const subText4 = text.substring(7, 12); // End index goes beyond the actual end
// console.log(subText4); // Output: "World!" (it stops at the end)

// const subText5 = text.substring(-5); // Negative index is treated as 0
// console.log(subText5);

// const text = "Hello, World!";

// const replacedText1 = text.replace("Hello",'');
// console.log(replacedText1); // Output: "Hi, World!"
            
const text = "Hello, World!";

const startsWithHello = text.startsWith("Hello");
console.log(startsWithHello); // Output: true

const startsWithWorld = text.startsWith("World");
console.log(startsWithWorld); // Output: false

const startsWithComma = text.startsWith(",");
console.log(startsWithComma); // Output: false

const startsWithWorldAtIndex7 = text.startsWith("World", 7);
console.log(startsWithWorldAtIndex7); // Output: true (checks from index 7)

const startsWithHelloAtIndex7 = text.startsWith("Hello", 7);
console.log(startsWithHelloAtIndex7); // Output: false (checks from index 7, doesn't match)