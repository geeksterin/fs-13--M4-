// console.log("Storage");
// sessionStorage.setItem(key,value);
// sessionStorage.setItem("theme", "dark");
// sessionStorage.setItem("count", 50);

// const theme = sessionStorage.getItem("theme");
// console.log(theme);

// sessionStorage.removeItem("theme");
// sessionStorage.clear();

// localStorage.removeItem("theme");
// localStorage.setItem("isLoggedIn", true);

// localStorage.setItem("theme", "DARK");
// // localStorage.setItem("theme", "DARKUPDATED");
// const theme = localStorage.getItem("theme");
// console.log(typeof theme);

// localStorage.setItem("count", 100);
// // localStorage.setItem("theme", "DARKUPDATED");
// const count = localStorage.getItem("count");
// console.log(typeof count);

// localStorage.setItem("isLoggedIn", true);
// // localStorage.setItem("theme", "DARKUPDATED");
// const isLoggedIn = localStorage.getItem("isLoggedIn");
// console.log(typeof isLoggedIn);

const arr = [1, 2, 3, 4];
localStorage.setItem("arr", JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem("arr")));

const user = {
  name: "John",
  age: 30,
};
localStorage.setItem("userDetails", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("userDetails")));
// const str = "[object Object]";

console.log(localStorage.getItem('userName'));