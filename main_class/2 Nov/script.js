const eventOptions = {
    capture: true
};

const btn = document.getElementById('btn');
console.log(btn)
btn.addEventListener('click', (e) => {
    // e.stopPropagation();
    console.log("Clicked on Btn");
}, eventOptions);


const div3 = document.getElementById('div3');
div3.addEventListener('click', (e) => {
    // e.stopPropagation();
    console.log("Clicked on Div3 (RED)");
}, eventOptions);

const div2 = document.getElementById('div2');
div2.addEventListener('click', () => {
    console.log("Clicked on Div2 (BLUE)");
}, eventOptions);

const div1 = document.getElementById('div1');
div1.addEventListener('click', (event) => {
    console.log("Clicked on Div1 (GREEN)", event.target.id);
    // if (event.target.id === "btn") {
    //     // call button fn
    // } else if (event.target.id === "div3") {
    //     // call div3 fn
    // }
}, eventOptions);

// -----------------------------------------------------
const inputArea = document.getElementById('inputArea');
inputArea.addEventListener("keyup", (e) => {
    const userInput = e.target.value;

    const maxLength = e.target.maxLength;

    const totalChars = userInput.length;
    const reamainingChars = maxLength - totalChars;

    const totalCharsSpan = document.getElementById('totalChars');
    totalCharsSpan.innerText = totalChars;

    const remainingCharsSpan = document.getElementById('remainingChars');
    remainingCharsSpan.innerText = reamainingChars;
});