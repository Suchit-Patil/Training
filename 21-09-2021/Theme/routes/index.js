var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/photo', function(req, res, next) {
  res.render('photo');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/link', function(req, res, next) {
  res.render('link');
});

module.exports = router;
