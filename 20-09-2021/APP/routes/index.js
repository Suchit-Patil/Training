var express = require('express');
var fs = require('fs');
const { getMaxListeners } = require('process');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});


module.exports = router;
