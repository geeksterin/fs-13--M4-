
//switch case

// switch(expression){

//     case 1: 
//     console.log("case 1 matches with expression");
//      break;

//     case 2: 
//     console.log("case 2 matches with expression");
//     break;

//     default: console.log("default case as none of the above case matches with expression")
// }


const fruit = prompt("Please enter your favorite fruit")


switch(fruit){
    case "Apple":
         console.log("hii it's apple")
         break;

   case "Kiwi":
    console.log("it's kiwi")
    break;

    default: console.log("oops, you have a different fav fruit")
}

//ternary operator

const num = 5;

num== 7? console.log("it's 5"): console.log("it's some another number")