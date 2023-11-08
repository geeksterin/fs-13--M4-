// console.log("Before Op 1");

function operation1() {
  console.log("Operation 1");
  let num;
  for (let i = 0; i < 10_00_000; i++) {
    num = i;
  }
}

// setTimeout(callbackFn, timeInMilliSeconds); will run only 1 time after the time gets over
function operation2() {
  let timeoutId = setTimeout(() => {
    console.log("Operation 2");
    // Terminate the transaction
    // Write the code to logout user
  }, 2000);
  //   console.log("TimeoutID", timeoutId);
  //   clearTimeout(timeoutId);
}

// setInterval(callbacFn, timeInMilliSeconds);
function operation3() {
  let count = 0;
  const intervalId = setInterval(() => {
    console.log("Operation 3");
    count++;
    // console.log("Count", count);
    if (count >= 10) {
      //   console.log("Stopping interval now...");
      clearInterval(intervalId); // Cleanup
    }
  }, 1_000);
  //   console.log("Interval ID", intervalId);
}

// clearInterval(intervalId) // To stop/terminate setInterval
// operation1(); // Sync
// operation2(); // Async
// operation3(); // Async

// console.log("After all op");
function test() {
    console.log("A");
    setTimeout(() => {
      console.log("B");
    }, 0);
    console.log("C");
    console.log("D");
}
function test2() {
    console.log("TEST2")
}
function test3() {
    console.log("TEST3")
}


test();
test2();
test3();