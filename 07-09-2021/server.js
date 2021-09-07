var http = require("http");
var a = 6;
var b = 6;
var c = a + b;
http.createServer(function (request, response) 
{
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Addition of 6 and 9 is :  ' + c);

}).listen(3000);
console.log("Server Started! at http://127.0.0.1:3000");