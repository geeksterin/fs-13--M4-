

// console.log("userName",username)
// console.log("greetUser", greetUser(username))
const username = "Tom"
let userAge = 10;
// var username = "Tom"
// var userAge = 10;
// var user_Age
console.log("username",username)
console.log("userAge",userAge)
function greetUser(name){
    var greet = 'I hope you are doing fine';
    console.log("hello" + " " + name + ", " + greet);
    var currentYear = 2023;
    var year = currentYear - userAge;
    return "your birth year is" + " " + year
}
var birthYear = greetUser(username);
console.log("birthYear",birthYear);
console.log("execution ends here")


let obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};



function flattenObj(obj){

    const result = {};


    for ( const item in obj){

        if( typeof obj[item] == 'object' && !Array.isArray(obj[item]) ){
            const subObject = flattenObj(obj[item])

          for (const subItem in subObject){
                if(subObject[subItem] =="GFG"){
                    subObject[subItem] ="HELLO WORLD"
                }
            result [ item + '.' + subItem] = subObject[subItem]
          }
        }else{
            result[item] = obj[item]
        }
    }

    return result;
}




 const result = flattenObj(obj);

 console.log("result",result)