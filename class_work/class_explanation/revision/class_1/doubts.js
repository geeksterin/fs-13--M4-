// let symbol1 = Symbol('symbol2'); // 5000
// let symbol2 = Symbol('symbol2'); // 5010
// let symbol3 = symbol1 ;
// console.log(symbol1 === symbol3); // true
// console.log(symbol1 === symbol3); // false

// console.log(typeof symbol1);
// console.log('symbol: ' + symbol1.toString());


// Use case 1: Symbols as property keys
//    const MY_KEY = Symbol();
    // let obj = {
    //     firstName : "Jaideep"
    // };
    
    // obj[MY_KEY] = 123;
    // console.log(obj[MY_KEY]);
    // console.log(obj)
    // console.log(MY_KEY);

    // let sym = Symbol();
    // console.log(sym);
    // let email = Symbol('email');
    // let employee = {};
    // employee[email] = "test@gmail.com";
    // employee.name = "Drumil";
    // employee.phone = "1231231231";
    // console.log(Object.keys(employee));
    // for(let key in employee) {
    //     console.log(key);
    // }
    // console.log(employee[email]);
    // console.log(employee);
    
// Use case 2: constants representing concepts
// const COLOR_RED    = Symbol('Red');
// const COLOR_ORANGE = Symbol('Orange');
// const COLOR_YELLOW = Symbol('Yellow');
// const COLOR_GREEN  = Symbol('Green');
// const COLOR_BLUE   = Symbol('Blue');
// const COLOR_VIOLET = Symbol('Violet');

// function getComplement(color) {
//     switch (color) {
//         case COLOR_RED:
//             return COLOR_RED;
//         case COLOR_ORANGE:
//             return COLOR_ORANGE;
//         case COLOR_YELLOW:
//             return COLOR_YELLOW;
//         case COLOR_GREEN:
//             return COLOR_GREEN;
//         case COLOR_BLUE:
//             return COLOR_BLUE;
//         case COLOR_VIOLET:
//             return COLOR_VIOLET;
//         default:
//             throw new Exception('Unknown color: '+color);
//     }
// }
// console.log( getComplement(COLOR_GREEN) );

// java we kind of that known as enums but offcuours we can't say they are same
// at some level they are matching
// class Main{
//     static String month = "January"
    // static String level
// }
// enum Level {
//     LOW,
//     MEDIUM,
//     HIGH
//   }
  
//   public class Main {
//     public static void main(String[] args) {
//       Level myVar = Level.MEDIUM;
//     // String myVar = "MEDUM";
//       switch(myVar) {
//         case LOW:
//           System.out.println("Low level");
//           break;
//         case MEDIUM:
//            System.out.println("Medium level");
//           break;
//         case HIGH:
//           System.out.println("High level");
//           break;
//       }
//     }
//   }


// in switch
// case values are tested with strict equality (===)

// switch(2){
//     case '2':
//         console.log("how are you");
//         break;
//     case '3':
//         console.log("ya bro");
//         break;
//     default:
//         console.log('that"s it');
// }

// why most of lang. which are known as scripting langages are used in development