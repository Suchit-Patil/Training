var file = require('fs');
file.writeFile('demo.txt','Hello Node This iss yor first program',function(err){
    if(err) throw err;
    console.log('File created succesfully!');
});