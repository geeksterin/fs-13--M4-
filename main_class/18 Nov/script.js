// console.log("Libraries");
const heading1 = document.getElementById("heading1");
const paragraph = document.querySelectorAll(".paragraph");
const paragph2 = document.getElementsByClassName("paragraph");
const p = document.getElementsByTagName("p");

// const result = $("p > a");
// console.log(result);

// Event listener using vanilla JS
const btn = document.getElementById("btn");
// btn.classList.add("my-btn")
// btn.addEventListener("click", () => {
//   console.log("Btn clicked");
// });

// Event listener using jQuery
// $("#btn").on("click", () => {
//   console.log("Btn clicked, jQuery");
// });

// $("#btn").toggleClass("my-jquery-class");

// const xhr = new XMLHttpRequest();
// xhr.open("http://abc.com");
// xhr.send();
// xhr.addEventListener("readystatechange", (e) => {
//   console.log(e);
// });

// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/todos",
//   method: "GET",
//   success: (data) => {
//     console.log(data);
//     // Dom Manipulation
//   },
//   error: () => {},
// });

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "No of votes",
        data: [12, 19, 3, 5, 25, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// const labels = Utils.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };

const user = {
  name: "XYZ",
  age: 10,
};

console.log(_.isEmpty(user));

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [3, 4, 5, 6, 7];

console.log(_.intersection(arr1, arr2, arr3));
console.log(_.range(1, 100));

$(document).ready(function () {
  $(".your-class").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});
