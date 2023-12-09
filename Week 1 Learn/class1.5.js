// promises and fs.readFile

// const fs = require('fs');

// function mehulReadFile() {
//     return new Promise(function(resolve) {
//         fs.readFile("a.txt", "utf-8", function(err, data) {
//             resolve(data);
//         })
//     });
// }

// function onDone(data) {
//     console.log(data);
// }

// mehulReadFile().then(onDone);
// console.log("Hello world");



// => pending, resolved
// var d = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("Mehul");
//     }, 1000);
// });

// function callback() {
//     console.log(d);
// }

// console.log(d);
// d.then(callback);


// making a promise inside a function
// function mehulAsyncFunction() {
    // let p = new Promise(function(resolve) {
//         resolve("hi, there");
//     });

//     return p;
// }

// mehulAsyncFunction().then(function(data) {
//     console.log(data);
// });


// using async/await

// function mehulAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         resolve("Hi, there");
//     });

//     return p;
// }

// async function jod() {
//     let value = await mehulAsyncFunction();
//     console.log(value);
// }

// jod();