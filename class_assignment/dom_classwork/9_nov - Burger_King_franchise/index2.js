document.getElementById("orderBtn").addEventListener('click', orderHandler);
let token = 0;

function printResult(result) {
    console.log(result.order, result.tokenNumber);
}

async function orderHandler(){
    try{
        const result = await makeOrder();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

function makeOrder() {
    const pizaList = document.getElementsByName('pizza');

    const orderList = [];

    pizaList.forEach((piza) => {
        if (piza.checked) {
            orderList.push(piza.value);
        }
    });

    return new Promise((resolve, reject) => {
        const timeLimit = Math.random() * 10_000;
        console.log(timeLimit);
        setTimeout(() => {
            resolve({ order: orderList, tokenNumber: ++token });
        }, timeLimit);
    });
}