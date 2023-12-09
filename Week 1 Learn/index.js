const fs = require('fs');

function mehulReadFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data);
        })
    });
}

function onDone(data) {
    console.log(data);
}

mehulReadFile().then(onDone);
console.log("Hello world");