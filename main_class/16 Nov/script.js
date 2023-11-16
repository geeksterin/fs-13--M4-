// console.log("Closures");

const clickMeHandler = () => {
  let count = 0;
  let increaseCount = () => {
    count++;
    console.log("Clicked", count, "times");
  };
  return increaseCount;
};

// const interval = setInterval(() => {
//   console.log("Count From setInterval", count);
//   count++; // Increment by mistake
//   if (count > 20) {
//     clearInterval(interval);
//   }
// }, 1_000);

const increaseCountFn = clickMeHandler();

const clickMeBtn = document.getElementById("clickMeBtn");
clickMeBtn.addEventListener("click", increaseCountFn);

const demo = () => {
  let name = "ABC";
  console.log(name);
};

// demo();

let timeout = null;

const searchField = document.getElementById("searchField");
// DEBOUCING
// searchField.addEventListener("keyup", (e) => {
//   if (timeout) {
//     clearTimeout(timeout);
//   }
//   timeout = setTimeout(() => {
//     console.log(e.target.value);
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }, 800);
// });

// THROTTLING
let lastExecutedTime = Date.now();
const atcBtn = document.getElementById("atcBtn");

atcBtn.addEventListener("click", (e) => {
  let currentTime = Date.now();
  if (currentTime - lastExecutedTime > 800) {
    lastExecutedTime = currentTime;
    console.log(e.target.value);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
});
