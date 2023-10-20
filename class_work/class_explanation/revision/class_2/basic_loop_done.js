// code - 1
const items = [10, 20, 30, 40, 50];
let totalPrice = 0;

for (let i = 0; i < items.length; i++) {
  totalPrice += items[i];
}

console.log(`Total price: ${totalPrice}`);

// code - 2
let userBudget = 1000;
let productPrice = 1200;

while (productPrice > userBudget) {
  // Continue checking for price drops
  productPrice -= 50;
  console.log(`Price dropped to ${productPrice}`);
}

console.log("Price within budget. Ready to purchase!");

let arr = [];
let i = 1;
do{
    // [1,2]
    arr.push(i++);
    // i = 3
}while(i<3);
console.log(arr);
