var demo = require('fs');
var data = demo.readFileSync('sample.html');
console.log("Synchronous read : " +data);
console.log('end');