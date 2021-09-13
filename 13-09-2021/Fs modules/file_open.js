var file = require('fs');
file.open('sample.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('File Open in Write Mode!');
});