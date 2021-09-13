var demo = require('fs');
demo.rename('demo.txt', 'demo1.txt', function(err){
    if(err) throw err;
    console.log('file renamed succesfully!');
});