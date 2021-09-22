var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.render('login',);
});

router.post('/login-process', function (req, res, next) {
  var a = req.body.txt1;
  res.cookie('username','akash',{maxAge:2000000});
  req.session.username = a;
  res.render("home", { myvalue: a });
});

// router.get('/home',function(req,res,next){
// if(req.session.username){
//   var user = req.body.txt1;
//   res.render('home',{myvalue : user});
// }
// else{
//   res.send("<h1>Login Required</h1>")
// }
// });






router.get('/logout', function (req, res, next) {
  req.session.destroy(function (err) {
    res.redirect('/login')
  })
});

//Counter Session

router.get('/counter', function (req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('Counter using session. Visted 1st time')
  }
});


router.get('/cookie', function (req, res, next) {
  res.cookie('user', 'Suchit');
  res.cookie('Admin', 'Google');
  res.cookie(rememberme, 'value', { expire: new Date(Date.now() + 6000000), httpOnly: true });
  res.send("Cookie Created")
});



router.get('/cookie-json', function (req, res, next) {
  let Cookies = JSON.stringify(req.cookies)
  return res.send(Cookies);
});

//color

router.get('/color', function (req, res, next) {
  res.render('color');
});

router.post('/color-bg', function (req, res, next) {
  var d = req.body.c;
  res.cookie('color',d)
  res.render('home',{title:d})
  res.send('color submitted');
});



//Counter Cookie

router.get('/counter-cookie', function (req, res, next) {
  if (req.session.page) {
    req.session.page++;
    res.cookie('counter', req.session.page);
    res.send("Page Visited : " + req.session.page + " times");
  }
  else {
    req.session.page = 1;
    res.send(" Page Visited First Time");
  }
});


module.exports = router;
