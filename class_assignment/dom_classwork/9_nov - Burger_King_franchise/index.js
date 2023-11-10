(function () {
    document.getElementById('orderBtn').addEventListener('click', handleOrder);
})();
var orderNumber = 0;

function printOrder({ pizzaList, orderNumber }) {
    console.log(pizzaList, orderNumber);
}

function handleOrder() {
    const checkboxes = document.getElementsByName('pizza');
    const selectedPizzas = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedPizzas.push(checkbox.value);
        }
    });

    const promise = new Promise((resolve, reject) => {
        let waitingTime = Math.floor(Math.random() * 10);
        console.log(waitingTime);
        setTimeout(() => {
            resolve({ pizzaList: selectedPizzas, orderNumber: ++orderNumber });
        }, waitingTime * 1000);
    });
    promise.then(printOrder);
    // console.log('Selected Pizzas:', selectedPizzas);
}