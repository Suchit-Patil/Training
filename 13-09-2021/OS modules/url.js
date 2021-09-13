var url = require('url');
var address = 'http://localhost:3000/index.php?type=page&action=update&id=5221';
var demo = url.parse(address,true);

console.log(demo.host);
console.log(demo.search);
console.log(demo.pathname);
var demodata = demo.query; 
console.log(demodata.type); 
console.log(demodata.action); 
console.log(demodata.id);
