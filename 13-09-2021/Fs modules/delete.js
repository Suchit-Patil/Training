var demo = require('fs');
demo.unlink('sample.txt', function(err){
    if(err) throw err;
    console.log('file deleted succesfully!');
});