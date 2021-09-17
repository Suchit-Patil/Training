var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('form');
});

router.post('/', function (req, res, next) {
    console.log(req.body)
    var a = parseInt(req.body.txt1);
    var b = parseInt(req.body.txt2);
    var c = a + b;
    var d = a - b;
    var e = a * b;
    var f = a / b;
   
    res.render('form_result', { mya: a, myb: b, myc: c  ,myd: d , mye: e , myf: f})


});

module.exports = router;
