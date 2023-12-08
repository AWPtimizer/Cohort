/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// function calculateTime(n) {
//     const startTime = new Date();

//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     let endTime = new Date();
//     const timeInSeconds = (endTime - startTime) / 1000;

//     return timeInSeconds
// }

// const time1 = calculateTime(100);
// const time2 = calculateTime(1000);
// const time3 = calculateTime(10000);

// console.log(time1);
// console.log(time2);
// console.log(time3);


// function calTime (n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
// }

// let start = Date.now();
// calTime(1000000000);
// let end = Date.now();
// let res = (end - start);

// console.log(start);
// console.log(end);
// console.log(res);


// function calTime2 (n) {
//     let start = performance.now();
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     let end = performance.now();

//     console.log(start);
//     console.log(end);

//     console.log("Time taken -> " + (end - start));
//     return sum;
// }

// console.log("result -> " + calTime2(1000));