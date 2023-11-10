//Step 1: Choose the type of pizza
// Step 2: Place the order
// // Step 3: Receive and enjoy the pizza

// const choosePizza = (callbackFn) => {
//     setTimeout(() => {
//         console.log("Pizza selected");
//         callbackFn(); // Call step 2 fn
//     }, 2_000);
// };

// const placeOrder = (callbackFn) => {
//     setTimeout(() => {
//         console.log("Order Placed");
//         callbackFn(); // Call Step 3 fn
//     }, 2_000);
// };

// const deliverPizza = () => {
//     setTimeout(() => {
//         console.log("Pizza Delivered");
//     }, 2_000);
// };

const placeOrderCallback = () => {
    deliverPizza();
}

const choosePizzaCallback = () => {
    placeOrder(placeOrderCallback);
}

const onHandleOrder = () => {
    choosePizza(choosePizzaCallback);
};
document.getElementById('orderButton').addEventListener('click', onHandleOrder);
// Callback hell
// const orderBtn = document.getElementById("orderButton");
// orderBtn.addEventListener("click", onHandleOrder);

// new Promise((resolveFn, rejectFn) => {
//     // work
//     // promise is completed then you are going to call resolveFn 
//     // if it's not like that then call the rejectFn
// })

const orderPizza = () => {
    const pizzaPromise = new Promise((resolve, reject) => {
        const isPizzaReady = true;
        setTimeout(() => {
            if (isPizzaReady) {
                resolve({ status: "READY" }); // fulfilled
            } else {
                reject("Please try after some time..."); // rejected
            }
        }, 1_000);
    });

    pizzaPromise
        .then((response) => {
            // This fn handles fulfilled/success state of promise
            console.log(pizzaPromise);
            console.log(response);
        })
        .catch((error) => {
            // This fn handles rejected/failure state of promise
            console.log(pizzaPromise);
            console.log(error);
        });
};

// orderPizza();

const choosePizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 1 : Pizza selected"); // Call step 2 fn
        }, 1_000);
    });
};

const placeOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 2 : Order placed");
        }, 3_000);
    });
};

const deliverPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 3 : Pizza delivered");
        }, 1_500);
    });
};
// choosePizza()
//     .then(
//         r1 => {
//             console.log(r1);
//             placeOrder()
//                 .then(r2 => {
//                     console.log(r2);
//                     deliverPizza()
//                         .then(r3 => console.log(r3))
//                         .catch(err => console.error(err));
//                 })
//                 .catch(err => console.error(err));
//         }
//     )
//     .catch((error) => console.log(error));

choosePizza()
    .then((result1) => {
        console.log(result1);
        return placeOrder();
    }).then((result2) => {
        console.log(result2);
        return deliverPizza();
    }).then((result3) => {
        console.log(result3);
    }).catch((err) => console.error(err));

// // choosePizza()
// //   .then((resultS1) => {
// //     // S1 Success
// //     console.log(resultS1);
// //     placeOrder()
// //       .then((resultS2) => {
// //         // S2 Success
// //         console.log(resultS2);
// //         deliverPizza()
// //           .then((resultS3) => {
// //             // S3 success
// //             console.log(resultS3);
// //           })
// //           .catch((error) => {
// //             console.log("Step 3 Error");
// //           });
// //       })
// //       .catch((error) => {
// //         console.log("Step 2 Error");
// //       });
// //   })
// //   .catch((error) => {
// //     console.log("Step 1 Error");
// //   });

// // TO SOLVE THE CALLBACK HELL PROBLEM ES7 INTRODUCED A NEW "SYNTAX" async await
// /**
//  * await => synatatical replacement of .then()
//  */

// // async function orderNewPizza () {}

const orderPizzaNew = async () => {
    try {
        console.log("Before promise");
        const resultS1 = await choosePizza();
        console.log(resultS1);

        const resultS2 = await placeOrder();
        console.log(resultS2);

        const resultS3 = await deliverPizza();
        console.log(resultS3);
    } catch (err) {
        console.log(err);
    }
};
orderPizzaNew();