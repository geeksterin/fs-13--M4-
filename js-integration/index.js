const text = document.querySelector('.text')

const button = document.querySelector(".my-button")


function handleButtonClick(){
    text.classList.toggle("text-updated")

    button.classList.toggle("my-button")
    document.body.classList.toggle("body")
    const para = document.createElement("p")
    para.innerHTML = 'Button is clicked '
    document.body.appendChild(para)
}



button.addEventListener('click', handleButtonClick)


console.log("hello world")
console.log("hello world between")


// console.log(z)
for(var i = 0; i<1000000000; i++){

}

console.log("hello world end")
 var c = 10;
 function sum(a,b){
    console.log("result",a +b)
 }

//fetching some user's info from github
 sum(4,6)

 console.log("z-before-value",z)
 var z;

    z = "hello z"
 console.log("z-after-value",z)

 var x = 101;

 console.log("x",x)



console.log("hello",hello)
 const hello = "hello const";


 let a;


 a = "hello let"


 console.log("a",a)