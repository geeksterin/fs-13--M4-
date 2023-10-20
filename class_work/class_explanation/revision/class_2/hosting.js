var myVar;
var myVar;
function foo() {
  console.log('1');
}
function foo() {
  console.log('2');
}

myVar = 45;
myVar = 46;

console.log(myVar); // undefined
myVar = 42;

console.log(myVar); // 42
myVar = 42;

// two function with same name is allowed
  // last one

foo(); // 2

foo(); // 2

function foo(){
  console.log('1')
};
function foo(){
    console.log('2')
}
foo();
foo();
function abc(){
  console.log('abc');
}
abc();

(function(){
  let name = "Dheeraj"
  console.log('hwo are you',name);
})();

// IIFE => Imeditiatly invoked function expression

//  function expression way-1
function onlyCallFirstTime(){
  console.log('hwo are you');
}
onlyCallFirstTime();
// functino expression way-2
var helper;
console.log(helper); // undefined
helper = 234;
console.log(helper()); // undefined() // error

var helper = function(){
  console.log('hello');
  return "how are you";
}
helper();helper();helper();

console.log(`================================`)
console.log(helper);
console.log(`================================`)
helper();
console.log(`================================`)
console.log(helper());
console.log(typeof helper)
helper = "Shushil";

helper = "shushil";
console.log(helper);

function abc(){
  console.log("howare you")
}