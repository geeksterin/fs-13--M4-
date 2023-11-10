// console.log("API & Fetch");

const p1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 resolved"), 800);
    // setTimeout(() => reject("P1 rejected"), 800);
  });

const p2 = () =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 resolved"), 1000);
    setTimeout(() => reject("P2 rejected"), 800);
  });

const p3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 resolved"), 900);
  });

const p4 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("P4 resolved"), 2000);
    // setTimeout(() => reject("P4 rejected"), 2000);
  });

const beforeTime = Date.now();

const arrayOfPromises = [p1(), p2(), p3(), p4()];

// Promise.all(arrayOfPromises)
//   .then((response) => {
//     const timeTaken = Date.now() - beforeTime;
//     console.log(timeTaken, response);
//   })
//   .catch((error) => {
//     const timeTaken = Date.now() - beforeTime;
//     console.log(timeTaken, error);
//   });

Promise.race(arrayOfPromises)
  .then((response) => {
    const timeTaken = Date.now() - beforeTime;
    // console.log(timeTaken, response);
  })
  .catch((error) => {
    const timeTaken = Date.now() - beforeTime;
    // console.log(timeTaken, error);
  });

const data = `{"success": true,"results": []}`;

JSON.parse(data);
JSON.stringify();

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://abc.com/food-menu")
// xhr.send();
// xhr.addEventListener('readystatechange',() => {

// });

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "GET",
// }).then((response) => {
//   //   console.log(response);
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    alert("Something went wrong, please try again later");
  }
};

getData();
