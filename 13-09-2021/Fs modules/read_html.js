var demo =require('fs');
var http = require('http');
 http.createServer(function(req,res)
 {
     demo.readFile('sample.html',function(err,data)
     {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
     });
 }).listen(3000);
 console.log('Server started at https://127.0.0.1:3000')