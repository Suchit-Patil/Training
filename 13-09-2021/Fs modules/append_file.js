var demo = require('fs');
demo.appendFile('demo.txt', 'This is additional content', function(err){
    if(err) throw err;
    console.log('file append succesfully!');
});