"use strict";

const exchangeRates = {
    usd: {
        eur: 0.85,
        gbp: 0.75,
    },
    eur: {
        usd: 1.18,
        gbp: 0.89,
    },
    gbp: {
        usd: 1.33,
        eur: 1.12,
    },
};

function convertCurrency() {
    console.log("Currency converted called");
    /**
     * 1. Get the input value
     * 2. Get to and from value
     * 3. Calculate the converted value
     * 4. Update the change on UI
     */

    const amountInput = document.getElementById("amount");
    console.log(amountInput.value)

    const fromCurrencyField = document.getElementById("fromCurrency");
    const toCurrencyField = document.getElementById("toCurrency");
    // console.log(fromCurrencyField.value);
    let conversionRate = 1
    if (fromCurrencyField.value !== toCurrencyField.value) {
        conversionRate = exchangeRates[fromCurrencyField.value][toCurrencyField.value];
    }
    const convertedAmount = conversionRate * amountInput.value;

    const convertedValue = document.getElementById('convertedValue');
    convertedValue.innerText = convertedAmount;

    const currencies = Object.keys(exchangeRates);
    const myCurrencyFilter = (item) => item !== fromCurrencyField.value;
    const toCurrencyOptions = currencies.filter(myCurrencyFilter);

    let currencyOptionStr = "";

    for (let i = 0; i < toCurrencyOptions.length; i++) {
        const option = '<option value="' + toCurrencyOptions[i] + '">' + toCurrencyOptions[i].toUpperCase() + ' </option>';
        currencyOptionStr += option;
        // currencyOptionStr += `<option value="${toCurrencyOptions[i]}">${toCurrencyOptions[i].toUpperCase()}</option>`;
    }

    toCurrencyField.innerHTML = currencyOptionStr;
}

//E.g User Input = 50 From : EUR and To : GBP
// 0.89 * 50 = 44

const inputDemo = document.getElementById('demoInput');


// inputDemo.onkeyup = function () {
//     console.log("on key up event trigerred 1");
// };

// inputDemo.onkeyup = function () {
//     console.log("on key up event trigerred 2");
// };


// Syntax : element.addEventListener(event-name,event-handler-fn)
// inputDemo.addEventListener("keyup", function () {
//     console.log("on key up event trigerred 1");
// });

// inputDemo.addEventListener("keyup", function () {
//     console.log("on key up event trigerred 2");
// });


const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

let qty = 1;

const updateQtyOnUi = () => {
    const quantity = document.getElementById('quantity');
    quantity.innerText = qty;
};

decreaseBtn.addEventListener('click', (event) => {
    console.log(event.target)
    qty--;
    updateQtyOnUi();
});

increaseBtn.addEventListener('click', () => {
    qty++;
    updateQtyOnUi();
});



x = 10;
console.log(x);