const cartProducts = [
    { name: "Mobile", quantity: 1, price: 15000 },
    { name: "Charger", quantity: 2, price: 500 },
    { name: "Headphones", quantity: 3, price: 1200 },
];

const totalCalculator = (total, currentItem) => {
    const amount = currentItem.price * currentItem.quantity
    return amount + total
};

const grandTotal = cartProducts.reduce(totalCalculator, 0);
console.log("grandTotal", grandTotal);

let cartTotal = 0;
for (let i = 0; i < cartProducts.length; i++) {
    const amount = cartProducts[i].price * cartProducts[i].quantity;
    cartTotal += amount;
}
console.log(cartTotal)

for (let x of cartProducts) {
    console.log(x)
}

/**
 * Some : 
 * Every : 
 * Slice :
 * Splice : 
 */

const someOutput = cartProducts.some((item) => item.price > 10000);
console.log("someOutput", someOutput);

const everyOutput = cartProducts.every((item) => item.price > 100);
console.log("everyOutput", everyOutput);