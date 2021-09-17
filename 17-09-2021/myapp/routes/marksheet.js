const e = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('marksheet');
});

router.post('/', function (req, res, next) {
    console.log(req.body)
    var a = parseInt(req.body.txt1);
    var b = parseInt(req.body.txt2);
    var c = parseInt(req.body.txt3);
    var d = parseInt(req.body.txt4);
    var e = parseInt(req.body.txt5);

    var sum = a + b + c + d + e;
    var avg = sum / 5;
    var msg = "";
    if (avg > 65) {
        msg="A  grade"
    }
    else{
        msg="B grade"
    }
    res.render('marksheet_result', { mya: a, myb: b, myc: c, myd: d, mye: e, mysum: sum, myavg: avg, mymsg: msg })
});

module.exports = router;