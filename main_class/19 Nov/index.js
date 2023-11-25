function sum(name, ...nums) {
    console.log(arguments);
    console.log(arguments[3]);
}
sum("john", 4, 2, 1);
// console.log(window) 

const add = (a, b) => {
    console.log(this);
}
add(3, 1)
console.log(this);

let timerId = null;
inputTag.addEventListener('keypress', function () {
    if (null !== timerId)
        clearInterval(timerId);
    timerId = setTimeout(function () {
        console.log('this');
    }, 1000);
});

let lastCall = Date.now();
inputTag.addEventListener('keypress', function () {
    if (Date.now() - lastCall >= 1000) {
        lastCall = Date.now();
        console.log('this');
    }
});